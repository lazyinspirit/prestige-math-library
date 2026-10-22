exec(open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-open-arc-context.py').read().split('D={};matches=[]')[0])
def partial(rows,moving):
 U=set(moving);V=[i for i in range(len(rows))if i not in U];ix={i:j for j,i in enumerate(V)};out=[];ends=[]
 for i in V:
  adj=[]
  for p in range(4):
   j,h=rows[i]['adj'][p];seen=set()
   while j in U and h%2!=moving[j]:
    if(j,h)in seen:raise ValueError()
    seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
   if j in U:adj.append([len(V)+len(ends),0]);ends.append((ix[i],p))
   else:adj.append([ix[j],h])
  out.append(adj)
 if len(ends)!=2:raise ValueError()
 return out+[[list(x)]for x in ends]
D=json.load(open('/tmp/conway109/L-digitized.json'));L=init(json.load(open('/tmp/conway109/L-pd.json'))['PD'],['G']);a=snap(L);moving={i:1 if c.get('c')in{1,20,2} else 0 for i,c in enumerate(D['crossings'])if c.get('c')in{1,20,2}or c.get('g')in{0,2}};target=code(partial(a,moving))
M=init(json.load(open('/tmp/conway109/M-pd.json'))['PD'],['G']);rows=snap(M);vis=M.link_components[0];matches=[]
for k in range(len(vis)):
 st=[vis[(k+j)%len(vis)]for j in range(5)];mo={M.crossings.index(c.crossing):c.strand_index%2 for c in st}
 if len(mo)!=5:continue
 try:r=partial(rows,mo);key=code(r)
 except ValueError:continue
 if key==target:matches.append({'start':k,'visits':[[M.crossings.index(c.crossing),c.strand_index]for c in st]})
print('EXACT FIVE-STRAND CAP CONTEXT MATCHES',matches)
