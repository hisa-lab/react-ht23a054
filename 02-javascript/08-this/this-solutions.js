//教科書と挙動が違う。なぜ？？p101

class Person{
    consotructor(name){
        this.name = name;
    }

    greet1(){
        function doIt(){
            console.log(`1) Hi, I'm ${this.name}`);
        }
        const boundDoIt = doIt.bind(this);
        boundDoIt();
    }

    greet2(){
        function doIt(){
            console.log(`2) Hi, I'm ${this.name}`);
        }
        doIt.call(this);
    }

    greet3(){
        const _this = this;
        function doIt(){
            console.log(`3) Hi, I'm ${_this.name}`);
        }
        doIt();
    }
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();