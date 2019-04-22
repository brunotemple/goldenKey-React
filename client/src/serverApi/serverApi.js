import axios from 'axios';

// POST //
export function addUser(user){
    return axios.post('/api/user',user)
            .then()
}

export function addBank(bank) {
    return axios.post('/api/bank',bank)
        .then()
}

export function addAccount(account) {
    return axios.post('/api/account',account)
        .then()
}

export function addOrUpdateStatement(statement) {
    return axios.post('/api/statement',statement)
        .then()
}

// GET //
export function getUserByEmail(email) {
    return axios.get(`/api/user?email=${email}`)
        .then()
}

export function getBankList(userId) {
    return axios.get(`/api/bankList?userId=${userId}`)
        .then()
}

export function getAccountList(userId) {
    return axios.get(`/api/accountList?userId=${userId}`)
        .then()
}

export function getTransactionList(userId) {
    return axios.get(`/api/transactionList?userId=${userId}`)
        .then()
}

// DELETE //
export function deleteStatement(statementId) {
    return axios.delete(`/api/statement?id=${statementId}`)
        .then()
}
