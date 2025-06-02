// 主循环函数
module.exports.loop = function() {
    // 清理死亡 creep 的内存
    for (let name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('清理不存在的 creep 内存:', name);
        }
    }

    // 遍历所有房间
    for (let roomName in Game.rooms) {
        let room = Game.rooms[roomName];
        
        // 如果房间没有 spawn，跳过
        let spawns = room.find(FIND_MY_SPAWNS);
        if (spawns.length === 0) continue;

        // 获取房间中的 creep 数量
        let creeps = room.find(FIND_MY_CREEPS);
        console.log('房间 ' + roomName + ' 中的 creep 数量: ' + creeps.length);

        // 如果 creep 数量小于 2，尝试生成新的 creep
        if (creeps.length < 2) {
            let spawn = spawns[0];
            let result = spawn.spawnCreep([WORK, CARRY, MOVE], 'Worker' + Game.time, {
                memory: {role: 'worker'}
            });
            
            if (result === OK) {
                console.log('开始生成新的 creep');
            } else {
                console.log('生成 creep 失败:', result);
            }
        }

        // 控制所有 creep
        for (let creep of creeps) {
            // 根据 creep 的角色执行不同的行为
            if (creep.memory.role === 'worker') {
                // 如果 creep 没有能量，去收集能量
                if (creep.carry.energy < creep.carryCapacity) {
                    let sources = room.find(FIND_SOURCES);
                    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                }
                // 如果 creep 有能量，去升级控制器
                else {
                    if (creep.upgradeController(room.controller) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(room.controller);
                    }
                }
            }
        }
    }
}; 