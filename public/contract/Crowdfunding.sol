// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    address public platformOwner;
    mapping(uint => mapping(address => bool)) public approvals;
    uint256 public projectCount;
    uint256 public requiredApprovals = 2;

    address[] public approvers;

    struct Project {
        address owner;
        string title;
        string description;
        uint256 goal;
        uint256 deadline;
        uint256 fundsRaised;
        bool isCompleted;
        bool isActive;
        uint256 approvals;
        mapping(address => bool) approvedBy;
    }

    mapping(uint256 => Project) public projects;
    mapping(uint256 => mapping(address => uint256)) public contributions;

    event ProjectCreated(uint256 projectId, string title, uint256 goal, uint256 deadline);
    event ContributionReceived(uint256 projectId, address contributor, uint256 amount);
    event ProjectCompleted(uint256 projectId);
    event RefundIssued(uint256 projectId, address contributor, uint256 amount);
    event ApproverAdded(address approver);
    event ApproverRemoved(address approver);
    event RequiredApprovalsChanged(uint256 newCount);

    modifier onlyOwner() {
        require(msg.sender == platformOwner, "Not platform owner");
        _;
    }

    constructor() {
        platformOwner = msg.sender;
        approvers.push(msg.sender);
    }

    // Approver management

    function addApprover(address _approver) external onlyOwner {
        require(_approver != address(0), "Invalid address");

        for (uint i = 0; i < approvers.length; i++) {
            require(approvers[i] != _approver, "Already an approver");
        }

        approvers.push(_approver);
        emit ApproverAdded(_approver);
    }

    function removeApprover(address _approver) external onlyOwner {
        require(_approver != address(0), "Invalid address");

        uint index = approvers.length;
        for (uint i = 0; i < approvers.length; i++) {
            if (approvers[i] == _approver) {
                index = i;
                break;
            }
        }

        require(index < approvers.length, "Approver not found");

        approvers[index] = approvers[approvers.length - 1];
        approvers.pop();

        emit ApproverRemoved(_approver);
    }

    function setRequiredApprovals(uint256 _count) external onlyOwner {
        require(_count > 0, "Must require at least 1 approval");
        require(_count <= approvers.length, "Too many approvals required");

        requiredApprovals = _count;
        emit RequiredApprovalsChanged(_count);
    }

    // Project creation

    function createProject(
        string memory _title,
        string memory _description,
        uint256 _goal,
        uint256 _durationInDays
    ) public returns (uint256) {
        projectCount++;
        Project storage newProject = projects[projectCount];
        newProject.owner = msg.sender;
        newProject.title = _title;
        newProject.description = _description;
        newProject.goal = _goal;
        newProject.deadline = block.timestamp + (_durationInDays * 1 days);
        newProject.isCompleted = false;
        newProject.isActive = false;
        newProject.fundsRaised = 0;

        emit ProjectCreated(projectCount, _title, _goal, newProject.deadline);
        return projectCount;
    }

    // Project approval

    function approveProject(uint256 _projectId) external {
        require(_projectId > 0 && _projectId <= projectCount, "Invalid project ID");

        Project storage project = projects[_projectId];
        require(!project.isActive, "Already active");
        require(!project.approvedBy[msg.sender], "Already approved");

        bool isApprover = false;
        for (uint i = 0; i < approvers.length; i++) {
            if (approvers[i] == msg.sender) {
                isApprover = true;
                break;
            }
        }
        require(isApprover, "Not an approver");

        project.approvals += 1;
        project.approvedBy[msg.sender] = true;

        if (project.approvals >= requiredApprovals) {
            project.isActive = true;
        }
    }

    // Contribution

    function contribute(uint256 _projectId) public payable {
        Project storage project = projects[_projectId];
        require(project.isActive, "Project not active");
        require(block.timestamp < project.deadline, "Project expired");
        require(!project.isCompleted, "Project already completed");

        contributions[_projectId][msg.sender] += msg.value;
        project.fundsRaised += msg.value;

        emit ContributionReceived(_projectId, msg.sender, msg.value);

        if (project.fundsRaised >= project.goal) {
            project.isCompleted = true;
            emit ProjectCompleted(_projectId);
        }
    }

    // Withdrawal by owner

    function withdrawFunds(uint256 _projectId) public {
        Project storage project = projects[_projectId];
        require(msg.sender == project.owner, "Only project owner can withdraw");
        require(project.isCompleted, "Project not completed");

        uint256 amount = project.fundsRaised;
        project.fundsRaised = 0;
        payable(project.owner).transfer(amount);
    }

    // Refund if project failed

    function refund(uint256 _projectId) public {
        Project storage project = projects[_projectId];
        require(block.timestamp >= project.deadline, "Project not expired");
        require(!project.isCompleted, "Project completed");

        uint256 contributed = contributions[_projectId][msg.sender];
        require(contributed > 0, "No contributions found");

        contributions[_projectId][msg.sender] = 0;
        payable(msg.sender).transfer(contributed);

        emit RefundIssued(_projectId, msg.sender, contributed);
    }

    // View functions

    function getActiveProjects() public view returns (uint256[] memory) {
        uint256[] memory temp = new uint256[](projectCount);
        uint count = 0;

        for (uint i = 1; i <= projectCount; i++) {
            if (projects[i].isActive) {
                temp[count] = i;
                count++;
            }
        }

        uint256[] memory activeProjects = new uint256[](count);
        for (uint j = 0; j < count; j++) {
            activeProjects[j] = temp[j];
        }

        return activeProjects;
    }

    function getProject(uint256 _projectId) public view returns (
        address, string memory, string memory, uint256, uint256, uint256, bool
    ) {
        Project storage project = projects[_projectId];
        return (
            project.owner,
            project.title,
            project.description,
            project.goal,
            project.deadline,
            project.fundsRaised,
            project.isCompleted
        );
    }

    function checkApprovalStatus(uint _projectId) public view returns (string memory) {
        if (projects[_projectId].isActive) {
            return "true";
        } else {
            return "false";
        }
    }

    function getApprovers() external view returns (address[] memory) {
        return approvers;
    }

}