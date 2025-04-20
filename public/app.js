var contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "checkApprovalStatus",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_projectId", "type": "uint256" }],
        "name": "allApprovalsReceived",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },

    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "contribute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_durationInDays",
                "type": "uint256"
            }
        ],
        "name": "createProject",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ContributionReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "ProjectCompleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "goal",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ProjectCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "refund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RefundIssued",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "contributions",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getActiveProjects",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getProject",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projectCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projects",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "fundsRaised",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isCompleted",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },

    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "approveProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approver",
                "type": "address"
            }
        ],
        "name": "addApprover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approver",
                "type": "address"
            }
        ],
        "name": "removeApprover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_count",
                "type": "uint256"
            }
        ],
        "name": "setRequiredApprovals",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getApprovers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }

];
var contractAddress = "0xF64c22ef0546b3ea8EE98dE8D3e41905edd6dFa4";

let web3; // Web3 instance
let contractInstance; // Contract instance
let currentAddress = null; // Current user's address
let isFirstAttempt = true; // Flag to track the first attempt to connect MetaMask
// Global variables for exchange rates
let ethToUsdRate = 3650; // Default rate (you can update this)
let ethToInrRate = 295000; // Default rate (you can update this)

// Function to show loading indicator
function showLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'flex';
}

// Function to hide loading indicator
function hideLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'none';
}

// Function to connect to MetaMask
async function connectMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0 && currentAddress !== accounts[0]) {
                currentAddress = accounts[0];
                console.log("Account connected: " + currentAddress);
                await login();
                await loadApprovers();
            }
        } catch (error) {
            if (!isFirstAttempt) {
                console.error('Error connecting to MetaMask:', error);
                showAlert('User denied account access or error occurred', 'danger');
            }
            isFirstAttempt = false;
        }
    } else {
        showAlert('Please install MetaMask to use this feature.', 'danger');
        console.error('MetaMask is not installed.');
    }
}

// Function to handle user login
async function login() {
    if (currentAddress) {
        showAlert('MetaMask connected successfully!', 'success');
        const connectButton = document.getElementById('connect-metamask');
        connectButton.innerText = `Connected: ${shortenHex(currentAddress)}`;
        connectButton.onclick = logout;
        console.log('Login successful', currentAddress);

        // Enable My Projects tab once logged in
        document.getElementById('my-projects-tab').classList.remove('disabled');

        await loadProjects(); // Load projects after successful login
    }
}

// Function to handle initial UI setup for tabs
function setupInitialTabState() {
    // If user is not logged in, disable the My Projects tab
    if (!currentAddress) {
        document.getElementById('my-projects-tab').classList.add('disabled');
    } else {
        document.getElementById('my-projects-tab').classList.remove('disabled');
    }
}

// Function to handle user logout
async function logout() {
    currentAddress = null;
    showAlert('Logged out successfully.', 'info');
    const connectButton = document.getElementById('connect-metamask');
    connectButton.innerText = 'Connect Wallet';
    connectButton.onclick = connectMetamask;
    console.log('Logout successful');
}

// Function to display alerts
function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alert-container');
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type} alert-dismissible fade show`;
    alertElement.role = 'alert';
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alertElement);

    // Automatically remove the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.remove('show');
        alertElement.addEventListener('transitionend', () => {
            alertElement.remove();
        });
    }, 5000);
}

// Helper function to shorten hexadecimal addresses
function shortenHex(hex) {
    return hex.slice(0, 6) + '...' + hex.slice(-4);
}

// Form validation function for creating projects
function validateProjectForm() {
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const goal = document.getElementById("project-goal").value;
    const duration = document.getElementById("project-duration").value;

    if (!title || !description || !goal || !duration) {
        showAlert("Please fill in all fields!", 'warning');
        return false;
    }

    if (goal <= 0 || duration <= 0) {
        showAlert("Goal and duration must be positive numbers!", 'warning');
        return false;
    }

    return true;
}

// Function to create a new project
async function createProject() {
    if (!validateProjectForm()) return;

    showLoadingIndicator();
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const goal = document.getElementById("project-goal").value;
    const duration = document.getElementById("project-duration").value;

    try {
        await contractInstance.methods
            .createProject(title, description, goal, duration)
            .send({ from: currentAddress });
        showAlert("Project created successfully!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error creating project:", error);
        showAlert(`Error creating project: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}
// Function to fetch current ETH prices from CoinGecko API
async function fetchEthPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,inr');
        const data = await response.json();

        if (data && data.ethereum) {
            ethToUsdRate = data.ethereum.usd;
            ethToInrRate = data.ethereum.inr;

            // Update the display
            document.getElementById('eth-usd-rate').textContent = ethToUsdRate.toLocaleString();
            document.getElementById('eth-inr-rate').textContent = ethToInrRate.toLocaleString();
        }
    } catch (error) {
        console.error("Error fetching ETH prices:", error);
    }
}

// Function to convert between currencies
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount-input').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount)) {
        showAlert("Please enter a valid number", 'warning');
        return;
    }

    // First convert to ETH as the base unit
    let valueInEth;

    switch (fromCurrency) {
        case 'wei':
            valueInEth = amount / 1e18;
            break;
        case 'eth':
            valueInEth = amount;
            break;
        case 'usd':
            valueInEth = amount / ethToUsdRate;
            break;
        case 'inr':
            valueInEth = amount / ethToInrRate;
            break;
    }

    // Then convert from ETH to target currency
    let result;

    switch (toCurrency) {
        case 'wei':
            result = valueInEth * 1e18;
            break;
        case 'eth':
            result = valueInEth;
            break;
        case 'usd':
            result = valueInEth * ethToUsdRate;
            break;
        case 'inr':
            result = valueInEth * ethToInrRate;
            break;
    }

    // Format based on currency
    let formattedResult;
    if (toCurrency === 'wei') {
        formattedResult = result.toLocaleString('fullwide', { useGrouping: true, maximumFractionDigits: 0 });
    } else if (toCurrency === 'eth') {
        formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 });
    } else {
        formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    document.getElementById('conversion-result').value = formattedResult;
}

// Function to apply the converted amount to the funding goal field
function applyToFundingGoal() {
    const toCurrency = document.getElementById('to-currency').value;
    // Only apply if the target currency is wei (the contract's currency)
    if (toCurrency === 'wei') {
        const weiAmount = document.getElementById('conversion-result').value.replace(/,/g, '');
        document.getElementById('project-goal').value = weiAmount;
        showAlert('Funding goal updated!', 'success');
    } else {
        showAlert('Please convert to Wei first before applying to funding goal', 'warning');
    }
}

// Function to contribute to a project from the modal
async function contributeFromModal() {
    const projectId = document.getElementById("modal-project-id").value;
    const amount = document.getElementById("modal-contribution-amount").value;

    if (!projectId || !amount || amount <= 0) {
        showAlert("Please enter a valid contribution amount!", 'warning');
        return;
    }

    showLoadingIndicator();
    try {
        await contractInstance.methods
            .contribute(projectId)
            .send({ from: currentAddress, value: amount });
        showAlert("Contribution successful!");

        // Close the modal
        const modalElement = document.getElementById('projectModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error contributing to project:", error);
        showAlert(`Error contributing to project: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Original contribute function (kept for compatibility)
async function contribute() {
    const projectId = document.getElementById("project-id").value;
    const amount = document.getElementById("contribution-amount").value;

    if (!projectId || !amount || amount <= 0) {
        showAlert("Please enter a valid project ID and contribution amount!", 'warning');
        return;
    }

    showLoadingIndicator();
    try {
        await contractInstance.methods
            .contribute(projectId)
            .send({ from: currentAddress, value: amount });
        showAlert("Contribution successful!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error contributing to project:", error);
        showAlert(`Error contributing to project: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to open project modal
async function openProjectModal(projectId) {
    showLoadingIndicator();
    try {
        const project = await contractInstance.methods.getProject(projectId).call();
        const deadline = new Date(project[4] * 1000).toLocaleString();
        const isCompleted = project[6];
        const isExpired = new Date() > new Date(project[4] * 1000);
        const raisedAmount = isCompleted ? project[3] : project[5];

        // Check if the project is active
        const isActive = await contractInstance.methods.checkApprovalStatus(projectId).call();

        // Set modal content
        document.getElementById('modal-project-id').value = projectId;
        document.getElementById('modal-project-title').textContent = project[1];
        document.getElementById('modal-project-creator').textContent = `Created by: ${shortenHex(project[0])}`;
        document.getElementById('modal-project-description').textContent = project[2];
        document.getElementById('modal-project-funds').textContent = `${raisedAmount} wei raised`;
        document.getElementById('modal-project-goal').textContent = `Goal: ${project[3]} wei`;
        document.getElementById('modal-project-deadline').textContent = deadline;

        // Set progress bar
        const progressPercent = (parseInt(raisedAmount) / parseInt(project[3])) * 100;
        const progressBar = document.getElementById('modal-project-progress');
        progressBar.style.width = `${progressPercent}%`;
        progressBar.setAttribute('aria-valuenow', progressPercent);

        // Show/hide contribute button based on project status
        const contributeBtn = document.getElementById('modal-contribute-btn');
        const contributionBox = document.getElementById('modal-contribution-box');

        if (!isCompleted && !isExpired && isActive === "true") {
            contributionBox.style.display = 'block';
            contributeBtn.onclick = contributeFromModal;
        } else {
            contributionBox.style.display = 'none';
        }

        // Show status badges
        const statusContainer = document.getElementById('modal-project-status');
        statusContainer.innerHTML = '';

        if (isCompleted) {
            statusContainer.innerHTML += '<span class="badge bg-success me-2">Completed</span>';
        } else if (isExpired) {
            statusContainer.innerHTML += '<span class="badge bg-danger me-2">Expired</span>';
        } else if (isActive !== "true") {
            statusContainer.innerHTML += '<span class="badge bg-warning me-2">Approvals Pending</span>';
        } else {
            statusContainer.innerHTML += '<span class="badge bg-info me-2">Active</span>';
        }

        // Show the modal
        const modalElement = document.getElementById('projectModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();

    } catch (error) {
        console.error("Error loading project details:", error);
        showAlert(`Error loading project details: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to set the project ID in the contribution form
function contributeTo(projectId) {
    document.getElementById('project-id').value = projectId;
    document.getElementById('contribution-amount').focus(); // Focus on the contribution amount field
}

// Function to withdraw funds from a project
async function withdrawFunds(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.withdrawFunds(projectId).send({ from: currentAddress });
        showAlert("Funds withdrawn successfully!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error withdrawing funds:", error);
        showAlert(`Error withdrawing funds: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to request a refund for a project
async function refund(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.refund(projectId).send({ from: currentAddress });
        showAlert("Refund successful!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error processing refund:", error);
        showAlert(`Error processing refund: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to load all projects
async function loadProjects() {
    showLoadingIndicator();
    try {
        const projectCount = await contractInstance.methods.projectCount().call();
        const allProjectsContainer = document.getElementById("projects");
        const myProjectsContainer = document.getElementById("my-projects-list");

        // Clear previous projects
        allProjectsContainer.innerHTML = "";
        myProjectsContainer.innerHTML = "";

        const approvers = (await contractInstance.methods.getApprovers().call()).map(addr => addr.toLowerCase());

        // Track if we found any user projects
        let hasUserProjects = false;

        for (let i = 1; i <= projectCount; i++) {
            const project = await contractInstance.methods.getProject(i).call();
            const deadline = new Date(project[4] * 1000).toLocaleString();
            const isCompleted = project[6];
            const isExpired = new Date() > new Date(project[4] * 1000);
            const userIsOwner = currentAddress && currentAddress.toLowerCase() === project[0].toLowerCase();
            const fundsWithdrawn = project[5] === '0';

            let userContribution = 0;
            if (currentAddress && !userIsOwner) {
                userContribution = await contractInstance.methods.contributions(i, currentAddress).call();
            }

            const raisedAmount = isCompleted ? project[3] : project[5];

            // Calculate progress percentage
            const progressPercent = (parseInt(raisedAmount) / parseInt(project[3])) * 100;

            let statusBadge = "";
            if (isCompleted) {
                statusBadge = '<span class="badge bg-success">Completed</span>';
            } else if (isExpired) {
                statusBadge = '<span class="badge bg-danger">Expired</span>';
            }

            let actionButtons = "";
            if (!isCompleted && !isExpired) {
                const isActive = await contractInstance.methods.checkApprovalStatus(i).call();
                if (isActive === "true") {
                    actionButtons += `<button class="btn btn-sm btn-primary me-2" onclick="openProjectModal(${i})">Contribute</button>`;
                } else {
                    actionButtons += `<span class="badge bg-warning">Approvals Pending</span>`;
                }
            }

            if (!isCompleted && approvers.includes(currentAddress?.toLowerCase())) {
                actionButtons += `<button class="btn btn-sm btn-info me-2" onclick="approveProject(${i})">Approve</button>`;
            }

            if (!isCompleted && isExpired && userContribution > 0) {
                actionButtons += `<button class="btn btn-sm btn-warning me-2" onclick="refund(${i})">Refund</button>`;
            }

            if (isCompleted && userIsOwner && !fundsWithdrawn) {
                actionButtons += `<button class="btn btn-sm btn-success me-2" onclick="withdrawFunds(${i})">Withdraw</button>`;
            }

            // if(i < 1 || i > 16){
            const projectCard = `
                <div class="col-md-4 mb-4">
                    <div class="card project-card h-100" data-project-id="${i}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <h5 class="card-title">${project[1]}</h5>
                                <span class="badge bg-secondary">ID: ${i}</span>
                            </div>
                            <p class="card-text text-truncate mb-3">${project[2]}</p>
                            
                            <div class="progress mb-3" style="height: 10px;">
                                <div class="progress-bar" role="progressbar" style="width: ${progressPercent}%;" 
                                    aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div class="d-flex justify-content-between text-muted small mb-3">
                                <span>${raisedAmount} wei</span>
                                <span>${project[3]} wei</span>
                            </div>
                            
                            <div class="d-flex justify-content-between mb-3">
                                <span class="text-muted small"><i class="fas fa-calendar-alt me-1"></i>${deadline}</span>
                                <span>${statusBadge}</span>
                            </div>
                            
                            <div class="project-actions mt-3">
                                ${actionButtons}
                            </div>
                        </div>
                    </div>
                </div>`;

            // Add to all projects tab
            allProjectsContainer.innerHTML += projectCard;

            // If user is the owner or has contributed, also add to my projects tab
            if (userIsOwner || parseInt(userContribution) > 0) {
                myProjectsContainer.innerHTML += projectCard;
                hasUserProjects = true;
            }
        }
        

        // Display a message if user has no projects
        if (!hasUserProjects) {
            myProjectsContainer.innerHTML = `
                <div class="col-12 text-center py-4">
                    <p class="text-muted">You haven't created or contributed to any projects yet.</p>
                    <button class="btn btn-outline-primary mt-2" data-bs-toggle="modal" data-bs-target="#createProjectModal">
                        <i class="fas fa-plus me-2"></i>Create Your First Project
                    </button>
                </div>
            `;
        }

        // Add click event to project cards
        setupProjectCardListeners();

    } catch (error) {
        console.error("Error loading projects:", error);
        showAlert(`Error loading projects: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Event listener for tab changes
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Add id to the create project card header for scrolling
    const createProjectHeader = document.querySelector('.card-header');
    if (createProjectHeader) {
      createProjectHeader.id = 'create-project';
    }
    const projectTabs = document.querySelectorAll('#projectTabs button');
    projectTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            // Optional: You can perform specific actions when tabs change if needed
            const targetTab = event.target.getAttribute('id');
            console.log(`Tab changed to: ${targetTab}`);
        });
    });
    // Add event listeners for the currency converter
    document.getElementById('convert-btn').addEventListener('click', convertCurrency);
    document.getElementById('apply-to-goal').addEventListener('click', applyToFundingGoal);

    // Change events for automatic conversion
    document.getElementById('from-currency').addEventListener('change', convertCurrency);
    document.getElementById('to-currency').addEventListener('change', convertCurrency);

    // Fetch ETH prices when page loads
    fetchEthPrices();

    // Set up a timer to refresh rates every 5 minutes
    setInterval(fetchEthPrices, 300000);
});


// Function to set up click listeners for project cards
function setupProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Only open modal if the card itself was clicked, not a button inside it
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
                const projectId = this.getAttribute('data-project-id');
                openProjectModal(projectId);
            }
        });
    });
}

async function approveProject(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.approveProject(projectId).send({ from: currentAddress });
        showAlert("Project approved!");
        await loadProjects();
    } catch (error) {
        console.error("Approval error:", error);
        showAlert(`Approval failed: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function addApprover() {
    const address = document.getElementById('new-approver-address').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.addApprover(address).send({ from: currentAddress });
        showAlert("Approver added!");
        await loadApprovers();
    } catch (error) {
        console.error("Add approver error:", error);
        showAlert(`Error adding approver: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function removeApprover() {
    const address = document.getElementById('remove-approver-address').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.removeApprover(address).send({ from: currentAddress });
        showAlert("Approver removed!");
        await loadApprovers();
    } catch (error) {
        console.error("Remove approver error:", error);
        showAlert(`Error removing approver: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function setRequiredApprovals() {
    const count = document.getElementById('required-approvals-count').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.setRequiredApprovals(count).send({ from: currentAddress });
        showAlert("Required approvals updated!");
    } catch (error) {
        console.error("Set required approvals error:", error);
        showAlert(`Error updating required approvals: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}
// Function to scroll to the create project section
function scrollToCreateProject() {
    const createProjectSection = document.querySelector('.card-header');
    if (createProjectSection) {
        createProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

async function loadApprovers() {
    try {
        const approvers = await contractInstance.methods.getApprovers().call();
        const lowerCaseApprovers = approvers.map(a => a.toLowerCase());
        const isUserApprover = lowerCaseApprovers.includes(currentAddress.toLowerCase());

        // Show or hide the admin section
        const adminSection = document.getElementById('manage-approvals-section');
        adminSection.style.display = isUserApprover ? 'block' : 'none';

        // Also update the display list
        document.getElementById('approver-list').innerText = approvers.join('\n');
    } catch (error) {
        console.error("Failed to load approvers:", error);
    }
}

// Function to refresh projects
function refreshProjects() {
    loadProjects();
}

// Modify DOMContentLoaded event listener to include tab setup
document.addEventListener('DOMContentLoaded', async () => {
    setupInitialTabState();

    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask is installed!");

        web3 = new Web3(window.ethereum);
        console.log("Web3 is loaded", web3);

        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
        console.log("Contract is loaded", contractInstance);

        if (window.ethereum.isConnected()) {
            console.log("MetaMask is connected");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            currentAddress = accounts[0];
            await login();
            await loadApprovers();
        }

        // Event listener for account changes in MetaMask
        ethereum.on('accountsChanged', async function (accounts) {
            currentAddress = accounts[0];
            await login();
            await loadApprovers();
        });
    } else {
        alert('Please install Metamask');
    }
});

// Event listener for window load to connect MetaMask
window.onload = async () => {
    await connectMetamask();
};