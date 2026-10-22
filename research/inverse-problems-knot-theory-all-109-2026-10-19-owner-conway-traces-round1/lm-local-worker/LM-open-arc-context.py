exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
def context(rows,st,par):
 U={i for i,p in st};V=[i for i in range(len(rows))if i not in U];ix={i:j for j,i in enumerate(V)};out=[];ends=[]
 for i in V:
  adj=[]
  for p in range(4):
   j,h=rows[i]['adj'][p];seen=set()
   while j in U and h%2!=par:
    if (j,h)in seen:raise ValueError()
    seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
   if j in U:
    adj.append([len(V)+len(ends),0]);ends.append((ix[i],p))
   else:adj.append([ix[j],h])
  out.append(adj)
 if len(ends)!=2:raise ValueError()
 return out+[[list(x)]for x in ends]
def code(rows):
 def root(c,a):
  ids={c:0};anc={c:a};q=[c];out=[]
  for i in q:
   r=[];deg=len(rows[i])
   for k in range(deg):
    j,b=rows[i][(anc[i]+k)%deg]
    if j not in ids:ids[j]=len(ids);anc[j]=b-b%2 if len(rows[j])==4 else 0;q.append(j)
    r.append((ids[j],(b-anc[j])%len(rows[j])))
   out.append(tuple(r))
  if len(ids)!=len(rows):raise ValueError()
  return tuple(out)
 return min(root(c,a)for c in range(len(rows)-2)for a in [0,2])
D={};matches=[]
for n in ['L','M']:
 L=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(L)
 for kind in ['over','under']:
  for strand in S.over_or_under_strands(L,kind):
   if len(strand)<2:continue
   st=[[L.crossings.index(c.crossing),c.strand_index]for c in strand]
   try:r=context(rows,st,1 if kind=='over' else 0);k=code(r)
   except ValueError:continue
   entry={'name':n,'kind':kind,'strand':st,'remaining':len(r)-2}
   if k in D and D[k]['name']!=n:matches.append([D[k],entry])
   D[k]=entry
print('OPEN ARC CONTEXT MATCHES',len(matches));print(json.dumps(matches))
