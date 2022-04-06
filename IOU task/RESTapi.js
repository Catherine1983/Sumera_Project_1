export class RestAPI {
	constructor({ users }) {
		this.users = users;
	}
	get(url, payload) {
		if(!payload){
			return { users: this.users }; 
		}
		else {
			users = this.users.filter(user => payload.users.includes(user.name));
			// users.sort();
		}
		return { users }; 
	}

	post(url, payload){
		if(url === '/add'){
			// create user
			this.users.push(
			{
				"name": payload.name,
				"owes": {},
				"owed_by": {},
				"balance": 0
			});
			return {
				"name": payload.name,
				"owes":
post(url, payload){
		if(url === '/add'){
			// create user
			this.users.push(
			{
				"name": payload.name,
				"owes": {},
				"owed_by": {},
				"balance": 0
			});
			return {
				"name": payload.name,
				"owes": {},
				"owed_by": {},
				"balance": 0
			};
		}
		else if(url === '/iou'){
			// do iou for lender
			for(let user of this.users){
				if(user.name === payload.lender){
					user.borrower += payload.amount;

				} else if(user.name === payload.borrower){

				}
                // do iou for borrower
			for (let user of this.users){
                if (user.name=== payload.borrower){
                    user.lender += payload.amount;
                }
            
            }

		}  
        if (condition) {
            function lender(){
                switch (user.lender ) {
                    case 'amount lend':
                      validateFormStatus( action.payload );
                      debug( 'setting form status to', action.payload );
                      return action.payload;

            }
            
    
        }
    }
          else  {
            function borrower();{
                return user.name , user.lender, payload.amount ;
            }
            
            
          }

        }
            
    }
          