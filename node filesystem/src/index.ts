import fs, { read } from 'fs'

const path = './data/input.json'

type user = {
    id:string,
    mail:string
    name:string,
    age:number
}
type userData = {
    users:user[]
}
function readFileData():userData{
    let data = fs.readFileSync(path,"utf-8")
    let fileData:userData = JSON.parse(data)
    return fileData
}
function addUserData(mail:string,name:string,age:number){
    let id = Date.now().toString()
    id = id+mail
    let fileData:userData = readFileData()
    fileData.users.push({id,mail,name,age})
    fs.writeFileSync(path,JSON.stringify(fileData))
}
function findUser(mail:string,users:user[]){
    for(let i=0;i<users.length;i++){
        if(users[i].mail==mail){
            return i
        }
    }
    return -1
}
function deleteUser(mail:string){
    let fileData:userData = readFileData()
    fileData.users = fileData.users.filter((user)=>user.mail!=mail)
    fs.writeFileSync(path,JSON.stringify(fileData))
    
}
function updateUser(mail:string,obj:any){
    let fileData:userData = readFileData()
    let idx:number = findUser(mail,fileData.users)
    console.log(idx)
    fileData.users[idx] = {...fileData.users[idx], ...obj}
    fs.writeFileSync(path,JSON.stringify(fileData))

}

addUserData("sanjaybebuy@gmail.com","sanjay",20)