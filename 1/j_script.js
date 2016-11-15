
function makeCounter() 
{
	return obj=
{
	count:1,
	up:function(){
			return this.count+=1;
		},
				
	set:function(n){
			this.count=n;	
		},
	get:function(){
			return (this.count);			
		},
	reset:function(){
		this.count=1;
		}	
};
}
 

var counter1 = new makeCounter();
counter1.up();
console.log(counter1.get()); // 2
counter1.set(10);
counter1.up();
console.log(counter1.get()); // 11
console.log(counter1.up()); // 11
counter1.reset();
console.log(counter1.get()); // 1
