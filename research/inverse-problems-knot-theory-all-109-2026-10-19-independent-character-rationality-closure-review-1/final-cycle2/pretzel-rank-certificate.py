"""Exact finite derivative minor; advisory executable companion to necessity-proof.md.
No numerical approximation and no external packages. Entries live in F_23,
the image of Z[1/2,sqrt(2),sqrt(3)] under sqrt(2)->5,sqrt(3)->7.
"""
import json
P = 23

def mul(a,b):
    w,x,y,z=a; W,X,Y,Z=b
    return [(w*W-x*X-y*Y-z*Z)%P,(w*X+x*W+y*Z-z*Y)%P,
            (w*Y-x*Z+y*W+z*X)%P,(w*Z+x*Y-y*X+z*W)%P]
def inverse(a): return [a[0],-a[1]%P,-a[2]%P,-a[3]%P]
def adjoint(a,v): return mul(mul(a,[0]+v),inverse(a))[1:]
def power(w,k): return w*k if k>=0 else [-x for x in w[::-1]]*(-k)
def tangle(i,j,p):
    s=[i];t=[-j];ts=t+s;k=p//2
    if p%2:
        return power(ts,-k)+[-i]+t+s+power(ts,k),power(ts,-k)+s+power(ts,k)
    return power(ts,-k)+s+power(ts,k),power(ts,-(k-1))+[-i]+t+s+power(ts,k-1)
def differential(w,gens):
    q=[1,0,0,0];out=[[0]*12 for _ in range(3)]
    for letter in w:
        a=gens[abs(letter)-1]
        if letter<0:a=inverse(a)
        for k in range(3):
            v=[0]*3;v[k]=1
            if letter<0:v=[-x%P for x in adjoint(a,v)]
            v=adjoint(q,v)
            for l in range(3):out[l][3*(abs(letter)-1)+k]=(out[l][3*(abs(letter)-1)+k]+v[l])%P
        q=mul(q,a)
    return q,out

gens=[[0,1,0,0],[0,0,1,0],[0,0,11,15],[0,11,9,11]]
assert all(mul(g,inverse(g))==[1,0,0,0] for g in gens)
tangles=[tangle(i+1,(i+1)%4+1,p) for i,p in enumerate([2,3,3,3])]
words=[tangles[i][1]+tangles[(i+1)%4][0] for i in range(4)]
matrix=[]
for i,w in enumerate(words):
    value,rows=differential(w,gens)
    assert value==[1,0,0,0]
    if i<3:matrix.extend(rows)
# All row/column indices in this certificate are zero based.
rows=[0,7,2,3,4,5,6,8];columns=[0,1,2,3,4,6,7,9]
a=[[matrix[i][j] for j in columns] for i in rows];det=1
for j in range(8):
    pivot=next(i for i in range(j,8) if a[i][j])
    if pivot!=j:a[pivot],a[j]=a[j],a[pivot];det=-det
    diagonal=a[j][j];det=det*diagonal%P
    for i in range(j+1,8):
        c=a[i][j]*pow(diagonal,-1,P)%P
        a[i]=[(x-c*y)%P for x,y in zip(a[i],a[j])]
assert det%P==10
print(json.dumps({'field':P,'sqrt2':5,'sqrt3':7,'words':words,'matrix':matrix,
                  'minor_rows':rows,'minor_columns':columns,'minor_determinant':det%P},indent=2))
