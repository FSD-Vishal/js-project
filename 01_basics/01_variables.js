const account_id = 847425;
let account_email = "vishal@yopmail.com";
var account_password = "12345678";
accountCity = "Jabalpur";

/*
	1. var can be redeclare and reassign, and can be accessed outside scop { }, so avoid using it.

	2. const can be redeclare in side block but not outside block and can not reassign new value.
		ex: 1. const account_id = 12345;  // not allowed.
				2. {
						const account_id = 12345; //allowed and value will be 12345 inside block.
																			//outside it will be 847425.
						}

	3. let is same as const but we can assign new value to a variable.
		ex: let account_email = "newEmail@gmail.com" // allowed.
*/