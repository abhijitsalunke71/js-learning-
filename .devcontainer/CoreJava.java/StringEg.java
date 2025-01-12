//For string 

public class StringEg {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = s1.concat(" World");
        
        System.out.println("Original String: " + s1); 
        System.out.println("Modified String: " + s2); 
    }
}**/

//basic meaning of String is when we modify a string it creates a new object in memory and the string is best for the read-only and modification purpose
//eg is given 


//For StringBuffer

/**
public class StringBufferEg {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        
        System.out.println("StringBuffer: " + sb); 
    }
}  **/

//StringBuffer Modifiyes a current Stringbuffer object that's why the new object is not created 
//StringBuffer is Mutable so we modify the content without creating the new object. and it is also thread safe 


//StringBuilder 

/**
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        
        System.out.println("StringBuilder: " + sb); // Output: Hello World
    }
}
**/


//same as a String buffer but not thread safe so StringBuilder is faster than StringBuffer.

