#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>

int abs1(int x){
    return (x^x>>31)-(x>>31);
}
int abs2(int x){
    if(x>=0) return x;
    return -x;
}

double timestamp(){
    timeval tim;
    gettimeofday(&tim, NULL);
    return tim.tv_sec+(tim.tv_usec/1000000.0);
}


int main(int argc, char *argv[]) {
    int count = 1000*1000*100;
    double t = timestamp();
    for (int i = 0 ; i < count ; i++)
    {
        abs1(-3);
        abs1(0);
        abs1(3);
    }    
    printf("Abs1: %f\n",timestamp()-t);

    t = timestamp();
    for (int i = 0 ; i < count ; i++)
    {
        abs2(-3);
        abs2(0);
        abs2(3);
    }    
    printf("Abs2: %f",timestamp()-t);

}

