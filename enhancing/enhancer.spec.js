const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!

it("should run the tests", function() {
    expect(true).toBe(true);
})

describe('enhancer.js', function() {

    describe('.repair()', function() {
        it("should return item durability as 100", function() {
            let blade_of_grass = {};
            blade_of_grass.durability = 69;
            const repaired = repair(blade_of_grass);

            expect(repaired.durability).toBe(100);
        });

        it('should change non number values to 100', function() {

            let blade_of_grass = {};
            blade_of_grass.durability = NaN;
            const repaired = repair(blade_of_grass);

            expect(repaired.durability).toBe(100);
        })
    })
//////////////////////////////////////////////////////////////////////////////////////
// Succeed Tests
    describe('.succeed()', function() {
        it('should enhance item if level is not 20', function() {
            let blade_of_grass = {};
            blade_of_grass.enhancement = 4;
            const enhanced = succeed(blade_of_grass);

            expect(enhanced.enhancement).toBe(5);
        })

        it('should enhance item if level is not 20', function() {
            let blade_of_grass1 = {};
            blade_of_grass1.enhancement = 20;
            // const enhanced = succeed(blade_of_grass1);

            expect(() => {
                succeed(blade_of_grass1);
            }).toThrow();
        })
        it('should throw error if not a number being passed in', function() {
            let blade_of_grass2 = {};
            blade_of_grass2.enhancement = 'string';
            // const enhanced = succeed(blade_of_grass2);

            expect(() => {
                succeed(blade_of_grass2);
            }).toThrow();
        })
        it('should throw error if not a number being passed in', function() {
            let blade_of_grass3 = {};
            blade_of_grass3.enhancement = [];
            // const enhanced = succeed(blade_of_grass2);

            expect(() => {
                succeed(blade_of_grass3);
            }).toThrow();
        })
    })
    /////////////////////////////////////////////////////////////////////////
    // FAIL Tests
    describe('.fail()', function() {
        it('should return item -5 durability(45) for item fail', function() {
            let shield = {};
            shield.durability = 50;
            shield.enhancement = 10;
            const newItem = fail(shield);

            expect(newItem.durability).toBe(45);
        })

        it('should return item -10 durability(45) for item fail', function() {
            let shield1 = {};
            shield1.durability = 50;
            shield1.enhancement = 15;
            const newItem1 = fail(shield1);

            expect(newItem1.durability).toBe(40);
        })

        it('should return item -10 durability(40) and -1 enhancement(15) for item fail', function() {
            let shield1 = {};
            shield1.durability = 50;
            shield1.enhancement = 17;
            const newItem1 = fail(shield1);

            expect(newItem1.durability).toBe(40);
            expect(newItem1.enhancement).toBe(16);
        })

        it('should throw because enhancement is NaN', function() {
            let shield1 = {};
            shield1.durability = 50;
            shield1.enhancement = NaN;
            expect(() => {
                fail(shield1);
            }).toThrow();
        });

        it('should throw because durability is NaN', function() {
            let shield1 = {};
            shield1.durability = NaN;
            shield1.enhancement = 17;
            expect(() => {
                fail(shield1);
            }).toThrow();
        });
    })

    /////////////////////////////////////////////////////
    // .GET TESTS (STRETCH)
    describe('.get()', function() {
        it('should return item name modified with enhancement level', function() {
            let sword = {};
            sword.enhancement = 5;
            sword.name = 'excalibur';
            const gotten = get(sword);

            expect(gotten.name).toBe('[+5]excalibur')
        })
    })

})
