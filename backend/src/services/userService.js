const getAllUsers = async () => {
    const mockUsers = [
        { id: 1, name: 'João', email: 'joao@email.com' },
        { id: 2, name: 'Marcos', email: 'marcos@email.com'}
    ]

    return mockUsers
}

module.exports = { getAllUsers }