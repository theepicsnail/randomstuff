function dot(A,B,C){
    AB = [B[0]-A[0],B[1]-A[1]]
    BC = [C[0]-B[0],C[1]-B[1]]
    return AB[0] * BC[0] + AB[1] * BC[1]
}

function cross(A, B, C){
    AB = [B[0]-A[0],B[1]-A[1]]
    AC = [C[0]-A[0],C[1]-A[1]]    
    return AB[0] * AC[1] - AB[1] * AC[0]
}

function distance(A, B){
    d1 = A[0] - B[0]
    d2 = A[1] - B[1]
    return sqrt(d1*d1+d2*d2)
}

function pointOnLine(P,L){
    x1=L[0][0]   
    y1=L[0][1]
    x2=L[1][0]   
    y2=L[1][1]
    A1 = y2-y1
    B1 = x1-x2
    C1 = A1*x1+B1*y1
    
    x1 = P[0]
    y1 = P[1]
    A2 = -B1
    B2 = A1
    C2 = A2*x1+B2*y1
    
    det = A1*B2 - A2*B1
    x = (B2*C1 - B1*C2)/det
    y = (A1*C2 - A2*C1)/det      
    return [x,y]
}

function linePointDist(A, B, C){
    dot1 = dot(A,B,C)
    if(dot1 > 0){
        // End point B is closest
        return [distance(B,C),B]
    }
    dot2 = dot(B,A,C)
    if(dot2 > 0){
        // End point A is closest
        return [distance(A,C),A]
    }
    // Point ON the line is closest
    dist = cross(A,B,C) / distance(A,B)
        
    return [abs(dist),pointOnLine(C,[A,B])]
}

function angleDistance(A, B){
    d = abs(A-B)%(2*pi)
    if(d > pi)
        d = 2*pi-d
    return d
}
