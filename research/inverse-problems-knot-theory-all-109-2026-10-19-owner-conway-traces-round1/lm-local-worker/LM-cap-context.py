exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
OriginalLink=Link
Link=lambda *a,**k:OriginalLink(*a,check_planarity=False,**k)
# Specific literal outer finger: source path/gap ancestry, not invariant matching.
args={'L':({1,20,2},{0,2}),'M':({7,8,11},{4,8})}
outs={}
for n,(ps,gs)in args.items():
 d=json.load(open('/tmp/conway109/'+n+'-digitized.json'));O=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(O)
 moving={}
 for i,c in enumerate(d['crossings']):
  a=c.get('c')in ps;b=c.get('g')in gs
  if a and b:raise ValueError('finger selfcross')
  if a or b:moving[i]=1 if a else 0
 U=set(moving);V=[i for i in range(len(rows))if i not in U];idx={i:j for j,i in enumerate(V)};r=[];ends=[]
 for i in U:
  for p in [moving[i],moving[i]+2]:
   j,h=rows[i]['adj'][p]
   if j not in U:ends.append((j,h))
 assert len(ends)==2,(n,ends)
 for i in V:
  adj=[]
  for p in range(4):
   j,h=rows[i]['adj'][p];seen=set()
   while j in U:
    assert(j,h)not in seen;seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
   adj.append([idx[j],h])
  r.append({'adj':adj,'mark':('G','G')})
 L=loadgraph(r);cap=[(L.crossings[idx[j]],(h+L.original_rotations[idx[j]])%4)for j,h in ends];assert cap[0][0].adjacent[cap[0][1]]==(cap[1][0],cap[1][1])
 print(n,'removed',sorted(U),'context',len(L.crossings),'faces',len(L.faces()),'ends',ends)
 changed=True
 while changed:
  changed=False
  for c in list(L.crossings):
   protected={q for q,p in cap}
   if c in protected or any(q in protected for q,p in c.adjacent):continue
   result,_=origI(L,c)
   if result:changed=True;break
 print(n,'context after supported basic',len(L.crossings));outs[n]=(L,cap)
exec(open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-constant-arc-context.py').read().split('def caprootcode')[1].split('D={};matches=[];eligible')[0].join(['def caprootcode','']))
print('EXACT MARKED FINGER CONTEXT SAME',caprootcode(*outs['L'])==caprootcode(*outs['M']))
for n,(ps,gs)in args.items():
 d=json.load(open('/tmp/conway109/'+n+'-digitized.json'));L=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(L);moving={i:1 if c.get('c')in ps else 0 for i,c in enumerate(d['crossings'])if c.get('c')in ps or c.get('g')in gs};U=set(moving);classes={}
 for i,p in moving.items():
  ends=[]
  for k in [1-p,3-p]:
   j,h=rows[i]['adj'][k]
   while j in U:j,h=rows[j]['adj'][(h+2)%4]
   ends.append((j,h))
  classes.setdefault(tuple(sorted(ends)),[]).append((i,'over'if p else'under',L.crossings[i].sign))
 print(n,'retained-edge-incidence classes',list(classes.values()))
