from fractions import Fraction as F

def add(a,b):return(a[0]+b[0],a[1]+b[1])
def neg(a):return(-a[1],-a[0])
def sc(a,c):return(a[0]*c,a[1]*c) if c>=0 else(a[1]*c,a[0]*c)
def divpos(a,b):return(a[0]/b[1],a[1]/b[0])
def logunit(x):
 t=(x-1)/(x+1);v=t;s=F(0)
 for j in range(50):s+=v/F(2*j+1);v*=t*t
 err=2*abs(t)**101/(101*(1-t*t));return(2*s-err,2*s+err)
ln2=logunit(F(2))
def ln(x):
 k=0
 while x<1:x*=2;k-=1
 while x>2:x/=2;k+=1
 return add(logunit(x),sc(ln2,k))
def h(x):return divpos(neg(add(sc(ln(x),x),sc(ln(1-x),1-x))),ln2)
p=F(1,10);a=1-2*p

def g(x):return add(h(p+a*x),neg(h(x)))
def L(x):
 r=p+a*x
 gp=divpos(add(sc(ln((1-r)/r),a),neg(ln((1-x)/x))),ln2)
 return add(g(x),sc(gp,p-x))
lo=F(7517,1000000);hi=F(7518,1000000)
assert L(lo)[1]<0 and L(hi)[0]>0
rate=(g(hi)[0]*F(1,20)/(p-lo),g(lo)[1]*F(1,20)/(p-hi))
both=add(h(p),neg(h(F(1,20))))
assert F(22919,100000)<rate[0]<rate[1]<F(22920,100000)
assert F(18259,100000)<both[0]<both[1]<F(18261,100000)
print('Exact rational logarithm-series certificates: dc in (.007517,.007518), RWZ(.05) in (.22919,.22920), Rboth(.05) in (.18259,.18261) bits.')
