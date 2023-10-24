package LeetCode.Array;

public class InterviewBit_PalindromicBinaryRepresentation {
    public static void main(String[] args) {
        System.out.println(solve(1));
    }

    public static int solve(int A) {
        int k=0;
        for(int i=1; i<Math.pow(210,4); i++){

            if(palindrom(i)){
                k++;
            }

            if(A == k){
                return i;
            }
        }
        return -1;
    }

    public static boolean palindrom(int x){
        String st = Integer.toBinaryString(x);
        String ps="";
        for(int i=st.length()-1; i>=0; i--){
            ps = ps+ st.charAt(i);
        }
        return ps.equals(st)?true:false;
    }
}
