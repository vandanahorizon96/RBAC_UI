$(document).ready(function () {
    console.log("jQuery loaded"); // Debugging log

    // Function to simulate an API call with a delay
    function simulateApiCall(data, callback) {
        setTimeout(() => {
            console.log('API call completed:', data); // Debugging log
            callback(data);
        }, 1000);
    }

    // Function to get the next available ID across all users
    function getNextId() {
        let maxId = 0;
        $('#userTableBody tr').each(function () {
            const id = parseInt($(this).attr('data-id'), 10);
            if (id > maxId) {
                maxId = id;
            }
        });
        return maxId + 1;
    }

    // Function to clear input fields
    function clearInputs() {
        $('#usernameInput').val('');
        $('#roleSelect').val('');
    }

    // Function to reset the "Add User" button
    function resetAddUserButton() {
        $('#addUserBtn').text('Add User').off('click').on('click', addUser);
    }

    // Function to add a new user
    function addUser() {
        const username = $('#usernameInput').val().trim();
        const role = $('#roleSelect').val();

        if (username === '' || role === '') {
            alert('Please enter a username and select a role.');
            return;
        }

        const status = role === 'Admin' ? 'Active' : 'Inactive';
        const newUser = {
            id: getNextId(),
            username: username,
            role: role,
            status: status,
        };

        simulateApiCall(newUser, (response) => {
            const statusClass = response.status === 'Active' ? 'status-active' : 'status-inactive';
            const newRow = `
                <tr data-id="${response.id}">
                    <td>${response.id}</td>
                    <td>${response.username}</td>
                    <td>${response.role}</td>
                    <td class="${statusClass}">${response.status}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit-user">Edit</button>
                        <button class="btn btn-danger btn-sm delete-user">Delete</button>
                    </td>
                </tr>`;
            $('#userTableBody').append(newRow);
            clearInputs();
        });
    }

    // Event listener for adding a user
    $('#addUserBtn').on('click', addUser);

    // Dynamic event listener for editing users
    $(document).on('click', '.edit-user', function () {
        const row = $(this).closest('tr');
        const id = row.data('id');
        const username = row.find('td').eq(1).text();
        const role = row.find('td').eq(2).text();

        $('#usernameInput').val(username);
        $('#roleSelect').val(role);

        $('#addUserBtn').text('Update User').off('click').on('click', function () {
            const updatedUsername = $('#usernameInput').val().trim();
            const updatedRole = $('#roleSelect').val();

            if (updatedUsername === '' || updatedRole === '') {
                alert('Please enter a username and select a role.');
                return;
            }

            const updatedStatus = updatedRole === 'Admin' ? 'Active' : 'Inactive';
            const updatedStatusClass = updatedStatus === 'Active' ? 'status-active' : 'status-inactive';

            row.find('td').eq(1).text(updatedUsername);
            row.find('td').eq(2).text(updatedRole);
            row.find('td').eq(3).attr('class', updatedStatusClass).text(updatedStatus);

            resetAddUserButton();
            clearInputs();
        });
    });

    // Dynamic event listener for deleting users
    $(document).on('click', '.delete-user', function () {
        const row = $(this).closest('tr');
        if (confirm('Are you sure you want to delete this user?')) {
            row.remove();
            resetAddUserButton(); // Reset the "Add User" button
            clearInputs();        // Clear input fields
        }
    });

    // Initialize default users
    function initializeDefaultUsers() {
        const defaultUsers = [
            { id: 1, username: 'JohnDoe', role: 'Admin', status: 'Active' },
            { id: 2, username: 'JaneSmith', role: 'Editor', status: 'Active' },
        ];

        defaultUsers.forEach((user) => {
            const statusClass = user.status === 'Active' ? 'status-active' : 'status-inactive';
            const newRow = `
                <tr data-id="${user.id}">
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.role}</td>
                    <td class="${statusClass}">${user.status}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit-user">Edit</button>
                        <button class="btn btn-danger btn-sm delete-user">Delete</button>
                    </td>
                </tr>`;
            $('#userTableBody').append(newRow);
        });
    }

    // Initialize users on page load
    initializeDefaultUsers();
});
