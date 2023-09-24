"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path = './data/input.json';
function readFileData() {
    let data = fs_1.default.readFileSync(path, "utf-8");
    let fileData = JSON.parse(data);
    return fileData;
}
function addUserData(mail, name, age) {
    let id = Date.now().toString();
    id = id + mail;
    let fileData = readFileData();
    fileData.users.push({ id, mail, name, age });
    fs_1.default.writeFileSync(path, JSON.stringify(fileData));
}
function findUser(mail, users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail == mail) {
            return i;
        }
    }
    return -1;
}
function deleteUser(mail) {
    let fileData = readFileData();
    fileData.users = fileData.users.filter((user) => user.mail != mail);
    fs_1.default.writeFileSync(path, JSON.stringify(fileData));
}
function updateUser(mail, obj) {
    let fileData = readFileData();
    let idx = findUser(mail, fileData.users);
    console.log(idx);
    fileData.users[idx] = Object.assign(Object.assign({}, fileData.users[idx]), obj);
    fs_1.default.writeFileSync(path, JSON.stringify(fileData));
}
addUserData("sanjaybebuy@gmail.com", "sanjay", 20);
