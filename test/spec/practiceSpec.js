describe("Context and Constructors Mini Project", function () {
	describe("Problem 1 - getUserName", function () {
        it("getUserName exists", function () {
            expect(user.getUserName).not.toBeNull();
            expect(typeof user.getUserName).toBe("function");
        });
        it("returns the users username", function () {
            expect(user.getUserName()).toEqual(user.username);
        });
    });
    
	describe("Problem 2 - getUsername", function () {
        it("returns the correct user's username", function () {
            expect(username).toEqual("iliketurtles");

            let example = {username: "Dwight Schrute"};
            let result = getUsername.call(example);
            expect(result).toEqual("Dwight Schrute");
        }); 
	});
    
	describe("Problem 3 - otherUsername", function () {
        it("otherUsername exists", function () {
            expect(otherUsername).not.toBeNull();
        });
        it("returns the correct user's username", function () {
            expect(otherUsername).toEqual("BillyBob");
        });
	});
    
	describe("Problem 4 - username1 and username2", function () {
        it("username1 and username2 should exist", function () {
            expect(username1).not.toBeNull();
            expect(username2).not.toBeNull();
        });
        it("returns the correct user's username", function () {
            expect(username1).toEqual("iliketurtles");
            expect(username2).toEqual("BillyBob");
        });
	});
    
    describe("Problem 5 - add", function () {
        it("result exists", function () {
            expect(result).not.toBeNull();
        });
        it("returns the correct result", function () {
            expect(result).toEqual(11);
        });
    });

    describe("Problem 6 - name", function () {
        it("name exists and is a bound function", function () {
            expect(name).not.toBeNull();
            expect(typeof name).toBe("function");
        });
        it("returns the correct name", function () {
            expect(name()).toEqual('Xzibit');
        });
    });

    describe('Problem 7 - Car', function() {
        it('should build car objects', function() {
            var mustang = new Car('blue', 'Ford', 2015);
            expect(typeof mustang).toBe("object");
            expect(mustang.color).toBeDefined();
        });
        it('objects have color, make & year properties', function() {
            var mustang = new Car('blue', 'Ford', 2015);
            expect(mustang.color).toEqual('blue');
            expect(mustang.make).toEqual('Ford');
            expect(mustang.year).toEqual(2015);
        });
    });

    describe('Problem 8 - moveCar', function() {
        const cybertruck = new CarMaker('Tesla', 'CyberTruck', 2023)
        it('moveCar function should exist', function() {
            expect(cybertruck.moveCar).toBeDefined();
        });
        it('moveCar should be a function', function() {
            expect(cybertruck.moveCar).toEqual(jasmine.any(Function));
        });
        it('should increment move by 10 each time it is invoked', function() {
            expect(cybertruck.move).toBe(0);
            cybertruck.moveCar()
            expect(cybertruck.move).toBe(10);
        });
    });

    describe('Problem 9 - Player', function() {
        const hulk = new Player('Hulk', 24, 'MonStars', 140)
        it('Player should exist and be a function', function() {
            expect(Player).toBeDefined();
            expect(Player).toEqual(jasmine.any(Function));
        });
        it('should build player objects with corresponding properties', function() {
            expect(hulk).toEqual(jasmine.any(Object));
            expect(hulk.name).toBe('Hulk');
            expect(hulk.age).toBe(24);
            expect(hulk.team).toBe('MonStars');
            expect(hulk.pointsScored).toBe(140);
        });
        it('addPoints should exist and be a function', function() {
            expect(hulk.addPoints).toBeDefined();
            expect(hulk.addPoints).toEqual(jasmine.any(Function))
        });
        it('addPoints should adjust the value of pointsScored on the player object', function () {
            hulk.addPoints(-20);
            expect(hulk.pointsScored).toBe(120)
            hulk.addPoints(83);
            expect(hulk.pointsScored).toBe(203)
        })
    });

    describe('Problem 10 - addStars', function() {
        const example = new Restaurant ('Medinas', "Mexican", 2)
        it('addStars should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).addStars).toEqual(jasmine.any(Function));
        });
        it(`addStars should add stars to the restaurant's stars property value`, function() {
            expect(Object.getPrototypeOf(example).addStars).toEqual(jasmine.any(Function));
            example.addStars(3);
            expect(example.stars).toBe(5);
            example.addStars(-1);
            expect(example.stars).toBe(4);
        });
    });

    describe('Problem 11 - addFriend & removeFriend', function() {
        const example = new Person ("Michael Scott", 40, "Scranton", "michael@dm.com", ["Jim", "Pam", "Darryl", "Stanley", "Packer"])
        it('addFriend should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).addFriend).toEqual(jasmine.any(Function));
        });
        it('removeFriend should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).removeFriend).toEqual(jasmine.any(Function));
        });
        it(`addFriend should add friends to the person's friend array`, function() {
            example.addFriend("Andy");
            expect(example.friends.length).toBe(6);
            expect(example.friends.includes("Andy")).toBe(true);
            example.addFriend("Holly");
            expect(example.friends.length).toBe(7);
            expect(example.friends.includes("Holly")).toBe(true);
        });
        it(`removeFriend should remove friends from the person's friend array`, function() {
            const example2 = new Person ("Michael Scott", 40, "Scranton", "michael@dm.com", ["Jim", "Pam", "Darryl", "Stanley", "Packer"])
            example2.removeFriend("Stanley");
            expect(example2.friends.length).toBe(4);
            expect(example2.friends.includes("Stanley")).toBe(false);
            example2.removeFriend("Pam");
            expect(example2.friends.length).toBe(3);
            expect(example2.friends.includes("Pam")).toBe(false);
        });
    });

    describe('Problem 12 - User', function() {
        const example = new User (
            "Michael Scott",
            40,
            "michael@dm.com",
            [
                {id: 1, title: "Somehow I Manage", rating: 5},
                {id: 2, title: "Threat Level Midnight", rating: 5},
                {id: 3, title: "Corporate Memo", rating: 1}
            ])
        it('User should exist and be a function', function() {
            expect(User).toBeDefined();
            expect(User).toEqual(jasmine.any(Function));
        });
        it('should build user objects with corresponding properties', function() {
            expect(example).toEqual(jasmine.any(Object));
            expect(example.name).toBe('Michael Scott');
            expect(example.age).toBe(40);
            expect(example.email).toBe('michael@dm.com');
            expect(example.savedPosts.length).toBe(3);
            expect(example.savedPosts[1].title).toBe("Threat Level Midnight");
        });
        it('addSavedPost should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).addSavedPost).toEqual(jasmine.any(Function));
        });
        it(`addSavedPost should add a post to the user's savedPosts array`, function() {
            example.addSavedPost(4, "Sandals Jamaica Trip Confirmed", 5);
            expect(example.savedPosts.length).toBe(4);
            expect(example.savedPosts[3].title).toBe("Sandals Jamaica Trip Confirmed");
            expect(example.savedPosts[3].id).toBe(4);
            example.addSavedPost(5, "Toby's Last Day", 5);
            expect(example.savedPosts.length).toBe(5);
            expect(example.savedPosts[4].title).toBe("Toby's Last Day");
            expect(example.savedPosts[4].id).toBe(5);
        });
    });

    describe('Problem 13 - removeSavedPosts', function() {
        const example = new User (
            "Michael Scott",
            40,
            "michael@dm.com",
            [
                {id: 1, title: "Somehow I Manage", rating: 5},
                {id: 2, title: "Threat Level Midnight", rating: 5},
                {id: 3, title: "Corporate Memo", rating: 1}
            ])
        it('removeSavedPost should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).removeSavedPost).toEqual(jasmine.any(Function));
        });
        it(`removeSavedPost should remove a post to the user's savedPosts array`, function() {
            example.removeSavedPost(2);
            expect(example.savedPosts.length).toBe(2);
            expect(example.savedPosts[0].title).toBe("Somehow I Manage");
            expect(example.savedPosts[0].id).toBe(1);
            example.removeSavedPost(1);
            expect(example.savedPosts.length).toBe(1);
            expect(example.savedPosts[0].title).toBe("Corporate Memo");
            expect(example.savedPosts[0].rating).toBe(1);
        });
    });

    describe('Problem 14 - changePostRating', function() {
        const example = new User (
            "Michael Scott",
            40,
            "michael@dm.com",
            [
                {id: 1, title: "Somehow I Manage", rating: 5},
                {id: 2, title: "Threat Level Midnight", rating: 5},
                {id: 3, title: "Corporate Memo", rating: 1}
            ])
        it('changePostRating should be a prototype function', function() {
            expect(Object.getPrototypeOf(example).changePostRating).toEqual(jasmine.any(Function));
        });
        it(`changePostRating should update a post's rating in the user's savedPosts array`, function() {
            example.changePostRating(2,4);
            expect(example.savedPosts.length).toBe(3);
            expect(example.savedPosts[1].title).toBe("Threat Level Midnight");
            expect(example.savedPosts[1].rating).toBe(4);
            example.changePostRating(3,-1);
            expect(example.savedPosts.length).toBe(3);
            expect(example.savedPosts[2].title).toBe("Corporate Memo");
            expect(example.savedPosts[2].rating).toBe(-1);
        });
    });
});
