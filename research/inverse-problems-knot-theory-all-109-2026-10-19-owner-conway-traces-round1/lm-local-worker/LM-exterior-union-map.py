exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
A=snap(init(json.load(open('/tmp/conway109/L-pd.json'))['PD'],['G']));B=snap(init(json.load(open('/tmp/conway109/M-pd.json'))['PD'],['G']));xy=[z['xy']for z in json.load(open('/tmp/conway109/L-digitized.json'))['crossings']];best=[]
def maps(V):
 root=min(V);qorder=[root];seen={root}
 for i in qorder:
  for j,h in A[i]['adj']:
   if j in V and j not in seen:seen.add(j);qorder.append(j)
 if seen!=V:return []
 ans=[]
 for br in range(len(B)):
  for rr in [0,2]:
   mp={root:br};rot={root:rr};used={br};ok=True
   for i in qorder:
    if i not in mp:ok=False;break
    for p,(j,h)in enumerate(A[i]['adj']):
     if j not in V:continue
     t,b=B[mp[i]]['adj'][(p+rot[i])%4];r=(b-h)%4
     if r%2 or(j in mp and(mp[j]!=t or rot[j]!=r))or(j not in mp and t in used):ok=False;break
     if j not in mp:mp[j]=t;rot[j]=r;used.add(t)
    if not ok:break
   if not ok:continue
   if any(B[mp[i]]['adj'][(p+rot[i])%4][0]in used for i in V for p,(j,h)in enumerate(A[i]['adj'])if j not in V):continue
   ans.append((mp,rot))
 return ans
for xmax in [500,700,900,1100,1300]:
 for ymin in [1700,1900,2100,2300,2500]:
  U={i for i,(x,y)in enumerate(xy)if x<xmax or y>ymin};V=set(range(len(A)))-U
  if not U or len(V)<10:continue
  components=[];remaining=set(V)
  while remaining:
   q=[next(iter(remaining))];component=set(q);remaining.difference_update(component)
   for v in q:
    for w,h in A[v]['adj']:
     if w in remaining:remaining.remove(w);component.add(w);q.append(w)
   components.append(component)
  V=max(components,key=len);U=set(range(len(A)))-V
  if len(V)<10:continue
  for mp,rot in maps(V):best.append({'size':len(V),'box':[xmax,ymin],'deletedL':sorted(U),'mapping':mp,'rotation':rot,'deletedM':sorted(set(range(len(B)))-set(mp.values()))})
best.sort(key=lambda r:-r['size']);print('MATCHES',len(best));print(json.dumps(best[:2]));json.dump(best[:5],open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-exterior-union-candidates.json','w'))
