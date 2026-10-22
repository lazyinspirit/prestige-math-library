exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
OriginalLink=Link
Link=lambda *a,**k:OriginalLink(*a,check_planarity=False,**k)
def rawcode(rows):
 def root(c,a):
  ids={c:0};anchors={c:a};q=[c];out=[]
  for i in q:
   r=[]
   for k in range(4):
    j,b=rows[i]['adj'][(anchors[i]+k)%4]
    if j not in ids:ids[j]=len(ids);anchors[j]=b-b%2;q.append(j)
    r.append((ids[j],(b-anchors[j])%4))
   out.append(tuple(r))
  if len(q)!=len(rows):return None
  return tuple(out)
 ans=[root(c,a)for c in range(len(rows))for a in [0,2]]
 return min(x for x in ans if x is not None)
def reduced(rows,U):
 V=[i for i in range(len(rows))if i not in U];idx={x:i for i,x in enumerate(V)};out=[]
 for i in V:
  adj=[]
  for k in range(4):
   j,h=rows[i]['adj'][k];seen=set()
   while j in U:
    if (j,h)in seen:raise ValueError('closed deleted strand')
    seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
   adj.append([idx[j],h])
  out.append({'adj':adj,'mark':('G','G')})
 return out
D={};matches=[]
for n in ['L','M']:
 L=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(L)
 for kind in ['over','under']:
  for strand in S.over_or_under_strands(L,kind):
   U={L.crossings.index(c.crossing)for c in strand}
   if len(U)<2:continue
   try:r=reduced(rows,U);k=rawcode(r)
   except (ValueError,AssertionError):continue
   entry={'name':n,'kind':kind,'strand':[[L.crossings.index(c.crossing),c.strand_index]for c in strand],'deleted':sorted(U),'remaining':len(r)}
   if k in D and D[k]['name']!=n:matches.append([D[k],entry])
   D[k]=entry
print('DIRECT CONSTANT-ARC CONTEXT MATCHES',len(matches));print(json.dumps(matches))
def caprootcode(L,cap):
 rows=snap(L);special={(L.crossings.index(c),p)for c,p in cap}
 def root(c,a):
  ids={c:0};anchors={c:a};q=[c];out=[]
  for i in q:
   r=[]
   for k in range(4):
    p=(anchors[i]+k)%4;j,b=rows[i]['adj'][p]
    if j not in ids:ids[j]=len(ids);anchors[j]=b-b%2;q.append(j)
    r.append((ids[j],(b-anchors[j])%4,(i,p)in special))
   out.append(tuple(r))
  return tuple(out)
 return min(root(c,a)for c in range(len(rows))for a in [0,2])
D={};matches=[];eligible=0
for n in ['L','M']:
 original=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(original)
 for kind in ['over','under']:
  for strand in S.over_or_under_strands(original,kind):
   U={original.crossings.index(c.crossing)for c in strand}
   if len(U)<2:continue
   ends=[]
   for cep,p in [(strand[0],strand[0].strand_index),(strand[-1],(strand[-1].strand_index+2)%4)]:
    j,h=rows[original.crossings.index(cep.crossing)]['adj'][p]
    seen=set()
    while j in U:
     if (j,h)in seen:break
     seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
    ends.append((j,h))
   if any(j in U for j,h in ends):continue
   try:r=reduced(rows,U);V=[i for i in range(len(rows))if i not in U];idx={x:i for i,x in enumerate(V)};L=loadgraph(r)
   except (ValueError,AssertionError):continue
   # loadgraph may halfturn crossings while orienting; preserve exact cap ports.
   cap=[(L.crossings[idx[j]],(h+L.original_rotations[idx[j]])%4)for j,h in ends]
   if cap[0][0].adjacent[cap[0][1]]!=(cap[1][0],cap[1][1]):continue
   eligible+=1
   # Only supported RI/II reductions that preserve both cap-end crossing neighborhoods.
   changed=True
   while changed:
    changed=False
    for c in list(L.crossings):
     # I/II support is c and its adjacent crossings; avoid every cap endpoint.
     protected={q for q,p in cap}
     if c in protected or any(d in protected for d,p in c.adjacent):continue
     removed,_=origI(L,c)
     if removed:changed=True;break
   if not L.crossings:continue
   k=caprootcode(L,cap)
   entry={'name':n,'kind':kind,'strand':[[original.crossings.index(c.crossing),c.strand_index]for c in strand],'deleted':sorted(U),'remaining':len(L.crossings),'cap_original_ends':ends}
   if k in D and D[k]['name']!=n:matches.append([D[k],entry])
   D[k]=entry
print('MARKED CAP CONTEXTS eligible',eligible,'MATCHES',len(matches));print(json.dumps(matches))
