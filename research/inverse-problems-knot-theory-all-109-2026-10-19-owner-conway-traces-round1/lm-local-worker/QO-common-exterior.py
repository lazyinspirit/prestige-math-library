exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
from pathlib import Path
base=Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1')
LA=init(json.load(open(base/'k2-local-worker/K2-cancelled-green-pd.json'))['PD'],['G']);LB=init(json.load(open('/tmp/conway109/O-pd.json'))['PD'],['G']);A=snap(LA);B=snap(LB);best=[];maximum=0

def arrows(i,j,r,flip):return all((LA.crossings[i].is_incoming(p)==LB.crossings[j].is_incoming((p+r)%4))==flip for p in range(4))
for ar in range(len(A)):
 for br in range(len(B)):
  for rr in [0,2]:
   flip=LA.crossings[ar].is_incoming(0)==LB.crossings[br].is_incoming(rr)
   if not arrows(ar,br,rr,flip):continue
   for mode in range(4):
    mp={ar:br};rot={ar:rr};rev={br:ar};excluded=set()
    while True:
     front=set(j for i in mp for j,p in A[i]['adj'])-set(mp)-excluded
     if not front:break
     def order(j):
      n=sum(i in mp for i,p in A[j]['adj'])
      return (j,)if mode==0 else(-j,)if mode==1 else(-n,j)if mode==2 else(-n,-j)
     j=min(front,key=order);proposals=[]
     for p,(i,h)in enumerate(A[j]['adj']):
      if i in mp:
       t,k=B[mp[i]]['adj'][(h+rot[i])%4];proposals.append((t,(k-p)%4))
     t,r=proposals[0];ok=all(z==(t,r)for z in proposals)and r%2==0 and t not in rev and arrows(j,t,r,flip)
     if ok:
      for p,(v,h)in enumerate(B[t]['adj']):
       if v in rev:
        a,k=A[j]['adj'][(p-r)%4]
        if a!=rev[v]or(h-rot[a])%4!=k:ok=False;break
     if ok:mp[j]=t;rot[j]=r;rev[t]=j
     else:excluded.add(j)
    if len(mp)>=maximum:
     record={'size':len(mp),'root':[ar,br,rr],'mode':mode,'arrows_agree':flip,'mapping':mp,'rotation':rot,'deletedQ':sorted(set(range(len(A)))-set(mp)),'deletedO':sorted(set(range(len(B)))-set(rev))}
     if len(mp)>maximum:maximum=len(mp);best=[];print('EXACT PARTIAL EXTERIOR',maximum,ar,br,rr,mode,flush=True)
     if len(best)<5:best.append(record)
json.dump(best,open(base/'lm-local-worker/QO-common-exterior-candidates.json','w'));print('FINAL',maximum,json.dumps(best[:1]),flush=True)
