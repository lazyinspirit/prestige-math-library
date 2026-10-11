"""Finite diagnostics for integral formulas; not a general reciprocity proof."""
from itertools import product, combinations
import json
from pathlib import Path

def add(a,b,p):
    c=a.copy()
    for w,x in b.items():
        c[w]=(c.get(w,0)+x)%p
        if not c[w]: del c[w]
    return c

def scale(a,x,p): return {w:y*x%p for w,y in a.items() if y*x%p}
def pw(v,e,p): return pow(v,e,p)
def weight(w,i): return w.count(i)-w.count(i+1)

def ef(w,i,a,v,p,raising):
    positions=[j for j,x in enumerate(w) if x==(i+1 if raising else i)]
    out={}
    for selected in combinations(positions,a):
        exponent=a*(a-1)//2
        for j in selected:
            exponent+=weight(w[j+1:],i) if raising else -weight(w[:j],i)
        x=list(w)
        for j in selected: x[j]=i if raising else i+1
        out[tuple(x)]=pw(v,exponent,p)
    return out

def hecke(w,j,v,p):
    q=v*v%p; x=list(w); x[j],x[j+1]=x[j+1],x[j]
    if w[j]==w[j+1]: return {w:q}
    out={tuple(x):v}
    if w[j]>w[j+1] and q!=1: out[w]=(q-1)%p
    return out

def apply(vec,op,p):
    out={}
    for w,x in vec.items(): out=add(out,scale(op(w),x,p),p)
    return out

def metric(w,v,p):
    exponent=-sum(w.count(i)*(w.count(i)-1)//2 for i in set(w))
    return pw(v,exponent,p)

counts={'parameter_cases':0,'divided_power_commutation':0,'weighted_adjointness':0,
        'hecke_quadratic':0,'hecke_braid':0}
for n in (2,3):
  for r in range(5):
    words=list(product(range(1,n+1),repeat=r))
    for p in (2,3,5,7):
      for v in range(1,p):
        counts['parameter_cases']+=1
        for w in words:
          for j in range(r-1):
            t=lambda x:hecke(x,j,v,p)
            t2=apply(t(w),t,p)
            expected=add(scale(t(w),v*v-1,p),{w:v*v%p},p)
            assert t2==expected,(n,r,p,v,w,j,'quadratic')
            counts['hecke_quadratic']+=1
          for j in range(r-2):
            t=lambda x:hecke(x,j,v,p)
            s=lambda x:hecke(x,j+1,v,p)
            assert apply(apply(t(w),s,p),t,p)==apply(apply(s(w),t,p),s,p)
            counts['hecke_braid']+=1
          for i in range(1,n):
            for a in range(r+1):
              for raising in (True,False):
                op=lambda x:ef(x,i,a,v,p,raising)
                for j in range(r-1):
                  t=lambda x:hecke(x,j,v,p)
                  assert apply(op(w),t,p)==apply(t(w),op,p),(n,r,p,v,w,i,a,j)
                  counts['divided_power_commutation']+=1
              for x,c in ef(w,i,a,v,p,True).items():
                back=ef(x,i,a,v,p,False).get(w,0)
                assert c*metric(x,v,p)%p==back*metric(w,v,p)%p
                counts['weighted_adjointness']+=1

counts['warning']='Finite diagnostics only. No surjectivity, cell identification, universal highest property, or Weyl filtration certified.'
counts['root_form_counterexample']={'field':'F5','v':2,'q':4,
 'lambda':[1,1],'tensor_highest_norm':(1+pw(2,-2,5))%5,
 'normalized_cell_highest_norm':1}
Path(__file__).with_name('finite-checks.json').write_text(json.dumps(counts,indent=2)+'\n')
print(json.dumps(counts,indent=2))
