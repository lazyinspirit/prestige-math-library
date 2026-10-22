exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
import gzip,pathlib,collections
out=pathlib.Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker')

d=json.load(gzip.open(out/'K2-sequential-1-0-best-movie.json.gz','rt'));source=init(json.load(open(out/'K2-sequential-1-0-pd.json'))['PD'],['G','R','B']);assert canon(source)==key(d['initial']);assert key(d['movie'][-1]['after'])==key(d['final'])
ms=compress(d['movie']);print('COMPRESSED NEW WHOLE MOVIE',len(d['movie']),len(ms),flush=True)
for i,m in enumerate(ms):
 checkmove(m)
 if i%20==0:print('verified',i,len(ms),flush=True)
assert key(ms[-1]['after'])==key(d['final']);L=loadgraph(d['final']);rows=snap(L);types=collections.Counter(''.join(sorted(c.mark)) for c in L.crossings);assert types['RR']==types['BB']==types['GR']==0 and types['BR']==2
faces=[[[L.crossings.index(q.crossing),q.strand_index] for q in f] for f in L.faces()];faceof={tuple(q):i for i,f in enumerate(faces) for q in f};adj=[set() for f in faces];gf=set()
for ci,c in enumerate(L.crossings):
 for j,(a,k) in enumerate(c.adjacent):
  di=L.crossings.index(a);u,v=faceof[(ci,j)],faceof[(di,k)];color=c.mark[j%2]
  if color!='R':adj[u].add(v);adj[v].add(u)
  if color=='G':gf.update([u,v])
parts=[];left=set(range(len(faces)))
while left:
 todo=[left.pop()];part=set(todo)
 for i in todo:
  for j in adj[i]:
   if j in left:left.remove(j);part.add(j);todo.append(j)
 parts.append(part)
assert len(parts)==2;empty=[a for a in parts if not a.intersection(gf)];assert len(empty)==1
witness={'faces':faces,'R_complement_face_components':[sorted(a) for a in parts],'G_empty_R_disk_faces':sorted(empty[0]),'crossing_types':dict(types)}
json.dump({'name':d['name'],'initial':d['initial'],'movie':ms,'final':d['final'],'meridian_witness':witness},open(out/'K2-sequential-1-0-verified-whole-movie.json','w'))
print('PASS ALL NEW WHOLE MOVES; G-EMPTY R DISK',sorted(empty[0]),'of',len(faces),'faces',dict(types),flush=True)
