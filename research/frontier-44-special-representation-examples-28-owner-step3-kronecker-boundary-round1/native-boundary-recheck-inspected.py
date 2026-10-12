import itertools, random, sys

def parts(n, maxlen=None):
    # all partitions of n as tuples, length <= maxlen
    out=[]
    def rec(rem, mx, cur):
        if rem==0:
            if maxlen is None or len(cur)<=maxlen: out.append(tuple(cur))
            return
        for x in range(min(mx,rem),0,-1):
            cur.append(x); rec(rem-x, x, cur); cur.pop()
    rec(n, n, [])
    return out

def pad(p, L): return tuple(list(p)+[0]*(L-len(p)))

def check_triple(lam, mu, nu, L):
    n=sum(lam); s=n-nu[0]
    lam=pad(lam,L); mu=pad(mu,L); nu=pad(nu,L)
    # case (ii) hypothesis
    if any(abs(lam[i]-mu[i])>s for i in range(L)): return [], None
    rho=[min(lam[i],mu[i]) for i in range(L)]
    om =[max(lam[i],mu[i]) for i in range(L)]
    g0=n-sum(rho)
    # I
    I=[i+1 for i in range(L) if rho[i]>= (om[i+1] if i+1<L else 0)+s]+[L+1]
    if I[-1]!=L+1: I.append(L+1)
    I=sorted(set(I))
    rhoE=rho+[0,0]; lamE=list(lam)+[0,0]; omE=om+[0]
    # phi(lam)
    def phi_index(j):
        ij=min(i for i in I if i>=j)
        if ij==L+1: ind=1
        else: ind=sum(1 for i2 in I if L>=i2>=ij)
        return ij, ind
    phi_lam=[]
    for j in range(1,L+1):
        ij,ind=phi_index(j)
        base = rho[ij-1] if ij<=L else 0
        phi_lam.append(lam[j-1]-base+s*(L-ij+ind))
    r=sum(phi_lam)
    fails=[]
    if r>s: return fails, r
    # block ends < L
    for k in [i for i in I if i<=L]:
        if k>=L: continue
        b=min(i for i in I if i>=k+1)
        if b==L+1:
            # sufficient condition from the remark
            if not (lam[k] <= s*(L-k)+g0):
                fails.append(('b=L+1',lam,mu,nu,L,k,s,g0,lam[k]))
        else:
            # exact worst-case with alpha_k at its lower bound
            ij,ind_k=phi_index(k)
            ind_b=sum(1 for i2 in I if L>=i2>=b)
            a_min=max(0, rho[k-1]-(r-g0))
            lhs=(a_min-rho[k-1])-(lam[k]-rho[b-1])+s*(b-k)+s*(ind_k-ind_b)
            if lhs<0:
                fails.append(('b<=L',lam,mu,nu,L,k,b,s,r,g0,lhs))
    return fails,r

random.seed(20261010)
fail=[]
# exhaustive n<=8
for n in range(1,9):
    P=parts(n)
    for lam in P:
        for mu in P:
            for nu in P:
                L=max(len(lam),len(mu),len(nu))
                f,r=check_triple(lam,mu,nu,L)
                if f: fail.append(f)
print('exhaustive n<=8 failures:',len(fail))
if fail: print(fail[:5]); sys.exit(1)
# randomized up to n=60
def rand_part(n, maxlen):
    lam=[]; rem=n
    lim=n
    while rem>0 and len(lam)<maxlen:
        x=random.randint(1, rem)
        if x>lim: x=lim
        lam.append(x); rem-=x; lim=x
    return tuple(lam) if lam else (0,)
cnt=0; fails2=0
target=2_000_000
while cnt<target:
    n=random.randint(2,60)
    L=random.randint(1,min(n,8))
    lam=rand_part(n,L); mu=rand_part(n,L); nu=rand_part(n,L)
    if sum(lam)!=n or sum(mu)!=n or sum(nu)!=n: continue
    cnt+=1
    f,r=check_triple(lam,mu,nu,L)
    if f:
        fails2+=1; print('RANDOM FAIL',f); break
print('random cases checked:',cnt,'failures:',fails2)
