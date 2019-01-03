# OOPS Concept (House As Example)

	 In a house, we will have rooms like a living room, bedroom, kitchen and items like TV, refrigerator and so on. The house owner can access and use all the rooms and room's items. The same as for a class with a group of methods and variables. Rooms and each room's items are examples of methods and variables. So we now have a complete house with all its rooms and room's items. The house owner can access and use all the rooms and room's items. To access and use a class, methods and variables here we use Objects. Objects are an instance of a class.


  ## Class:- Empty House, An Empty Function during initialization

  ## Methods/Functions:- Rooms Inside Empty House

  ## Variable:- Items Inside The Room

  ## Object:- Access Right to use all the room and room items

  ## Encapsulation:-  Hides the members or variables from outside the class.

  	 House security guard limitation is at the entrance of the house. The security guard doesn't need to be aware of what is happening inside the house. Therefore, the House Owner will hide everything that happens inside from the security guard for greater safety. 

  ## Abstraction:- Shows to and shares some common information with the user.

      In our house we will have a servant. Servants can go to all rooms and do cleaning and other work. The house owner can give full rights or some partial rights to the servant for accessing his house. 

      Private declared variables and the methods are not shared with the servant but the public variable and methods are shared with the servant.

  ## Inheritance:- Inheritance is nothing but accessing and using all base class variables and methods in the derived class.

  	 ### Single level Inheritance:- Single Base and Single Derived Class.

  	 	 public class baseClass {  

  	 	 }

  	 	 public class DerivedClass : baseClass  {

  	 	 }

  	 ### Multi level Inheritance:- Single Base and Multiple Derived Class.

  	     public class baseClass {  

  	 	 }

  	 	 public class DerivedClass : baseClass  {

  	 	 }

  	 	 public class DerivedClass2 : DerivedClass1 { 

  	 	 }

  ## Polymorphism:- Ability of an object to take on many forms.

  	### Method Overloading:-  Same method name used for more than one method with different argument(s).

  		ex:- public void BedRoom(String nameandColor) {}
  		     public void BedRoom(String MemberName, String Color) {}

  		objHouseOwner.BedRoom("My Name is Shanu I like Lavender color");
  		objHouseOwner.BedRoom("SHANU", "Lavender"); 
  
  	### Method Overriding:- Same method name used for more than one method with same argument(s) but in different class.

  		class house{
  			public void BedRoom(String nameandColor) {

  			}
  		}

  		class subHouse : house{
  			objHouseOwner.BedRoom("My Name is Shanu I like Lavender color");
  			objHouseOwner.BedRoom("My Name is Afraz I like Light Blue color");  
  		}


# Note:- Variable :- Access-Modifiers Data-Type Variable-Name
  
  ## Access-Modifiers:- 

  	public: Access is not restricted.

  	private: Access is limited to the containing type. (varible restricted to private method only)

    protected: Access is limited to containing class and its derived class.

    internal : Access limited to particular document , not accessible outside of document.


    private:- 

      class house { 

		private int SaftyLoackerKeyNo = 10001;  
    	public String roomCleanInstructions = "Clean All rooms";  

    	private void saftyNos()  
        {  
            int SaftyLoackerKeyNo is only accesible in this method;   
        } 

        public void saftyNos()
        {
        	Can't Access SaftyLoackerKeyNo Here;
        }

      }

      protected:- 

       class house{
       		public String roomCleanInstructions = "Clean All rooms"; 

       		public void saftyNos()
	        {
	        	can access roomCleanInstructions here;
	        }
       }

       class subHouse : house{
       		public void saftyNos()
	        {
	        	can access roomCleanInstructions here;
	        }
       }

       class secondHouse{
       		public void saftyNos()
       		{
       			cannot access roomCleanInstructions here;
       		}
       }