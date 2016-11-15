

function makeBuffer() 
{
	var str='';
	return function(s)
	{
		if (arguments.length==0) {return str;}
	
	str=str+s;
	};
};

var buffer=makeBuffer();

// добавить значения к буферу
buffer('Hello');
buffer(' World');
buffer('!');
alert( buffer()); //Hello World!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
alert( buffer()); //'010'