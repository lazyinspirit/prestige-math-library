families=[]
from functools import lru_cache
from fractions import Fraction as F
import itertools
@lru_cache(None)
def paths(word,v,w):
 if not word:return [(v,)] if v==w else []
 i=word[0]
 if v[i]==v[i+1]:return []
 sw=list(v);sw[i],sw[i+1]=sw[i+1],sw[i];sw=tuple(sw)
 return [(v,)+p for u in [v,sw] for p in paths(word[1:],u,w)]
def delta(v,i):return F(v[i]-v[i+1])
# local generator transitions on pigment paths, zero when no listed output
def gen(kind,i,p):
 v=p[0];w=p[-1]
 if kind=='eta':return [((v,v),delta(v,i))] if v==w and v[i]!=v[i+1] else []
 if kind=='eps':return [((v,),F(1))] if v==w else []
 if kind=='m':return [((v,w),1/delta(p[1],i))]
 if kind=='D':return [(q,F(1)) for q in paths((i,i),v,w)]
 raise Exception(kind)
def local(kind,i,start,n,p):
 return [(p[:start]+q+p[start+n+1:],a) for q,a in gen(kind,i,p[start:start+n+1])]
def apply(ops,p):
 out={p:F(1)}
 for kind,i,start,n in ops:
  nxt={}
  for p,a in out.items():
   for q,b in local(kind,i,start,n,p):nxt[q]=nxt.get(q,0)+a*b
  out={q:a for q,a in nxt.items() if a}
 return out
# exact sparse maps from source color-path basis to target basis
B=0;R=1
wordsS=[(B,R,B),(R,B),(B,B),(B,R),(B,),(R,),(B,),()]
wordsT=[(R,B,R),(B,R),(R,R),(R,B),(R,),(B,),(R,),()]
levels=[0,1,1,1,2,2,2,3]
masks=[0,1,2,4,3,5,6,7]
# F source state -> target state, scalar and local operations (identity is [])
entries={(0,0):[],(1,3):[(1,[])],(1,2):[(-1,[('m',B,0,2),('eta',R,1,0)])],
 (2,1):[(-1,[('eps',B,1,1),('D',R,0,1)])],
 (2,2):[(1,[('m',B,0,2),('eps',B,0,1),('eta',R,0,0),('D',R,0,1)])],
 (3,1):[(1,[])],(3,2):[(-1,[('m',B,0,2),('eta',R,0,0)])],
 (4,5):[(1,[])],(5,4):[(1,[])],(5,6):[(1,[])],(7,7):[(1,[])]}
def states(words,v,w):return [(j,p) for j,word in enumerate(words) for p in paths(word,v,w)]
def fm(st):
 j,p=st;out={}
 for (a,b),terms in entries.items():
  if b!=j:continue
  for c,ops in terms:
   for q,x in apply(ops,p).items():out[a,q]=out.get((a,q),0)+c*x
 return {k:v for k,v in out.items() if v}
def dm(st,base):
 j,p=st;mask=masks[j];out={};remaining=[k for k in range(3) if not (mask>>k)&1]
 for n,k in enumerate(remaining):
  sg=(-1)**n
  for q,a in local('eps',base[k],n,1,p):
   target=masks.index(mask|(1<<k));out[target,q]=sg*a
 return out
def compose(op,terms):
 out={}
 for p,a in terms.items():
  for q,b in op(p).items():out[q]=out.get(q,0)+a*b
 return {k:v for k,v in out.items() if v}
cols=0
for v in itertools.product([0,1],repeat=3):
 for w in itertools.product([0,1],repeat=3):
  for st in states(wordsS,v,w):
   a=compose(lambda p:dm(p,[R,B,R]),fm(st));b=compose(fm,dm(st,[B,R,B]));cols+=1
   if a!=b:
    print('FAIL',v,w,st,'dF',a,'Fd',b);raise SystemExit(1)
print('chain map checked',cols,'colored state columns');families.append((wordsS,wordsT,entries,[1,1,1],[1,1,1]))
# mixed case, source signs --+, target signs +--
wordsS=[(B,),(B,B),(R,B),(),(B,R,B),(B,),(R,),(B,R)]
wordsT=[(R,),(),(R,B),(R,R),(B,),(R,),(R,B,R),(B,R)]
entries={(1,1):[(-1,[('m',B,0,2),('eps',B,0,1)])],(1,3):[(1,[])],
 (2,1):[(-1,[('m',B,0,2),('eta',R,0,0)])],(2,2):[(1,[])],
 (3,1):[(1,[('m',B,0,2),('eps',B,0,1),('eta',R,0,0),('D',R,0,1)])],
 (3,2):[(-1,[('eps',B,1,1),('D',R,0,1)])],
 (4,4):[(1,[('eps',R,1,1),('m',B,0,2)])],(4,5):[(1,[])],(5,6):[(1,[])],(7,7):[(1,[])]}
def dmixed(st,base,sgns):
 j,p=st;mask=masks[j];out={}
 act=[k for k in range(3) if bool((mask>>k)&1)==(sgns[k]<0)]
 for k in range(3):
  if (mask>>k)&1:continue
  n=sum(h<k for h in act);sg=(-1)**(sum((mask>>h)&1 for h in range(k))-sum(sgns[h]>0 for h in range(k)))
  kind='eps' if sgns[k]>0 else 'eta';nold=1 if kind=='eps' else 0
  for q,a in local(kind,base[k],n,nold,p):out[masks.index(mask|(1<<k)),q]=sg*a
 return out
cols=0
for v in itertools.product([0,1],repeat=3):
 for w in itertools.product([0,1],repeat=3):
  for st in states(wordsS,v,w):
   a=compose(lambda p:dmixed(p,[R,B,R],[1,-1,-1]),fm(st));b=compose(fm,dmixed(st,[B,R,B],[-1,-1,1]));cols+=1
   if a!=b:
    print('MIX FAIL',v,w,st,'dF',a,'Fd',b);raise SystemExit(1)
print('mixed chain map checked',cols,'colored state columns');families.append((wordsS,wordsT,entries,[-1,-1,1],[1,-1,-1]))
# positive-front moving over a negative internal crossing: source ++-, target -++
wordsS=[(B,R),(R,),(B,),(B,R,B),(),(R,B),(B,B),(B,)]
wordsT=[(B,R),(R,B,R),(R,),(B,),(R,R),(R,B),(),(R,)]
entries={(0,0):[(1,[])],
 (1,1):[(-1,[('D',R,0,1),('eta',B,1,0)])],
 (2,1):[(1,[])],(3,2):[(1,[])],
 (4,4):[(1,[('eta',R,0,0),('D',R,0,1)])],
 (4,5):[(-1,[('eps',B,1,1),('D',R,0,1)])],
 (4,6):[(1,[('m',B,0,2),('eps',B,0,1),('eta',R,0,0),('D',R,0,1)])],
 (5,5):[(1,[])],(5,6):[(-1,[('m',B,0,2),('eta',R,0,0)])],(6,4):[(1,[])]}
cols=0
for v in itertools.product([0,1],repeat=3):
 for w in itertools.product([0,1],repeat=3):
  for st in states(wordsS,v,w):
   a=compose(lambda p:dmixed(p,[R,B,R],[-1,1,1]),fm(st));b=compose(fm,dmixed(st,[B,R,B],[1,1,-1]));cols+=1
   if a!=b:
    print('THIRD FAIL',v,w,st,'dF',a,'Fd',b);raise SystemExit(1)
print('third chain map checked',cols,'colored state columns');families.append((wordsS,wordsT,entries,[1,1,-1],[-1,1,1]))
# all negative crossings
wordsS=[(),(B,),(R,),(B,),(B,R),(B,B),(R,B),(B,R,B)]
wordsT=[(),(R,),(B,),(R,),(R,B),(R,R),(B,R),(R,B,R)]
entries={(0,0):[(1,[])],(1,2):[(1,[])],(2,1):[(1,[])],(3,2):[(1,[])],
 (4,5):[(-1,[('m',B,0,2),('eta',R,0,0)])],(4,6):[(1,[])],
 (5,4):[(-1,[('eps',B,0,1),('D',R,0,1)])],
 (5,5):[(1,[('m',B,0,2),('eps',B,0,1),('eta',R,0,0),('D',R,0,1)])],
 (5,6):[(-1,[('eps',B,1,1),('D',R,0,1)])],(6,4):[(1,[])]}
cols=0
for v in itertools.product([0,1],repeat=3):
 for w in itertools.product([0,1],repeat=3):
  for st in states(wordsS,v,w):
   a=compose(lambda p:dmixed(p,[R,B,R],[-1,-1,-1]),fm(st));b=compose(fm,dmixed(st,[B,R,B],[-1,-1,-1]));cols+=1
   if a!=b:
    print('FOURTH FAIL',v,w,st,'dF',a,'Fd',b);raise SystemExit(1)
print('fourth chain map checked',cols,'colored state columns');families.append((wordsS,wordsT,entries,[-1,-1,-1],[-1,-1,-1]))

for a,b in [(0,1),(2,3)]:
 sa,ta,ea,ss,ts=families[a]; sb,tb,eb,_,_=families[b]
 count=0
 for v in itertools.product([0,1],repeat=3):
  for w in itertools.product([0,1],repeat=3):
   for st in states(sa,v,w):
    j,p=st;ms=masks[j];entries=ea;fa=fm(st)
    entries=eb;fb=fm((masks.index(ms^3),p))
    ideg=((ms>>2)&1)-(ss[2]>0)
    for (k,q),coef in fa.items():
     odeg=(masks[k]&1)-(ts[0]>0)
     assert odeg>=ideg,('filtration',a,st,k)
    for kt in range(8):
     if (masks[kt]&1)-(ts[0]>0)!=ideg:continue
     kb=masks.index(masks[kt]^6)
     for q in paths(ta[kt],v,w):
      assert fa.get((kt,q),0)==fb.get((kb,q),0),('diagonal',a,v,w,st,kt,q,fa.get((kt,q),0),fb.get((kb,q),0))
      count+=1
 print('filtration/front-back diagonal checked pair',a,b,'entries',count)
for a,(sa,ta,entries,ss,ts) in enumerate(families):
 count=0
 for v in itertools.product([0,1],repeat=3):
  for w in itertools.product([0,1],repeat=3):
   for st in states(sa,v,w):
    j,p=st;ideg=((masks[j]>>2)&1)-(ss[2]>0)
    for (k,q),coef in fm(st).items():
     odeg=(masks[k]&1)-(ts[0]>0)
     assert odeg>=ideg,('all-case filtration',a,st,k)
     count+=1
 print('monotonicity family',a,'nonzero colored coefficients',count)
