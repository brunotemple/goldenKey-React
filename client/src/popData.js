const { addUser, addBank, addAccount, addStatement } = require('./serverApi/serverApi')
const { fakeUser, fakeBankList, fakeAccountList, fakeTransactionList } = require('./FakeData')

const populateData = () => {    
    popAddUser()
}

const popAddUser = () => {
    addUser(fakeUser).then(response => {
        popAddBank(response.data)
    })
}

const popAddBank = (user) => { 
    const createBank = fakeBankList.filter(a => a.userEmail === user.email)  
    return createBank.map(bank => {
        const newBank = {
            name:bank.name,
            userId:user.userId
        }
        return addBank(newBank).then(response => {
            popAddAccount(response.data,user.email)
        })
    })
}

const popAddAccount = (bank,userEmail) => {
    const createAccounts = fakeAccountList.filter(a => a.bankName === bank.name && a.userEmail === userEmail)
    return createAccounts.map(account => {
        const newAccount = {
            title:account.title,
            description:account.description,
            accountType:account.accountType,
            bankId:bank.bankId,
            userId:bank.userId,
        } 
        return addAccount(newAccount).then(response => {
            popAddStatement(response.data,userEmail)
        })
    })  
}

const popAddStatement = (account,userEmail) => {
    const createStatement = fakeTransactionList.filter(a => a.accountTitle === account.title && a.userEmail === userEmail)
    return createStatement.map(s => {
        const newStatement = {
            accountId:account.accountId,
            date:s.date,
            amount:s.amount,
            userId:account.userId,
        }
        return addStatement(newStatement).then(response => {
            fim(response.data)
        })
    })
}
 const fim = () => {
     console.log('Populating')
 }

export { populateData } 

