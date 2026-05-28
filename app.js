const searchSenderConfig = { serverId: 1142, active: true };

const searchSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1142() {
    return searchSenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchSender loaded successfully.");