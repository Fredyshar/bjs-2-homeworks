class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {

        if (time === null || callback === undefined) {
            const error = new Error("Отсутствуют обязательные аргументы");
            throw error;
        }

        if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        } 
        let canCall = true;
        return this.alarmCollection.push({callback, time, canCall});
        }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        let hours = new Date().getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        let minutes = new Date().getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let newTime = hours + ":" + minutes;
        return newTime;
    }

    start() {
        if (this.intervalId !== null) {return}

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (this.getCurrentFormattedTime() === alarm.time) {
                    alarm.canCall = false;
                    return alarm.callback();
                }
            })
        } ,1000);
        
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}