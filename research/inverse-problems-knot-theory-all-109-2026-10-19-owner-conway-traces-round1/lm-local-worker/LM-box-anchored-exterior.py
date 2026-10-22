exec(open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-exterior-map.py').read().split('for xmax in')[0])
answers=[]
for seedmap,seedrot in maps(set(range(58,64))):
 for mode in range(8):
  mp=dict(seedmap);rot=dict(seedrot);rev={v:k for k,v in mp.items()};excluded=set()
  while True:
   front=set(j for i in mp for j,p in A[i]['adj'])-set(mp)-excluded
   if not front:break
   def priority(j):
    x,y=xy[j]if j<len(xy)else(1600,100)
    if mode==0:return(j,)
    if mode==1:return(-j,)
    if mode==2:return(y,x)
    if mode==3:return(-y,x)
    if mode==4:return(x,y)
    if mode==5:return(-x,y)
    if mode==6:return(-sum(t in mp for t,p in A[j]['adj']),j)
    return(-sum(t in mp for t,p in A[j]['adj']),-j)
   j=min(front,key=priority);proposals=[]
   for p,(i,h)in enumerate(A[j]['adj']):
    if i in mp:
     t,b=B[mp[i]]['adj'][(h+rot[i])%4];proposals.append((t,(b-p)%4))
   t,r=proposals[0];ok=all(z==(t,r)for z in proposals)and r%2==0 and t not in rev
   if ok:
    for p,(v,h)in enumerate(B[t]['adj']):
     if v in rev:
      a,b=A[j]['adj'][(p-r)%4]
      if a!=rev[v]or(h-rot[a])%4!=b:ok=False;break
   if ok:mp[j]=t;rot[j]=r;rev[t]=j
   else:excluded.add(j)
  answers.append({'size':len(mp),'mode':mode,'mapping':mp,'rotation':rot,'deletedL':sorted(set(range(len(A)))-set(mp)),'deletedM':sorted(set(range(len(B)))-set(rev))})
answers.sort(key=lambda z:-z['size']);print(json.dumps(answers[:2]));json.dump(answers,open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-box-exterior-candidates.json','w'))
