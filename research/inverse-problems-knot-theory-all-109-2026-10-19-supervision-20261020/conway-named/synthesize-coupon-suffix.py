"""Develop NEW suffix from trusted 39-move endpoint; never replay its old moves."""
import pathlib,collections
ROOT=pathlib.Path(__file__).resolve().parent
exec(open(ROOT/'inputs/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
P=json.load(open(ROOT/'head-three-returns-prefix.json'))
assert len(P['movie'])==39
BASE=P['final'];LABELS=P['labels'];ix={c:i for i,c in enumerate(LABELS)}
portdata=json.load(open(ROOT/'inputs/prime-MN-exact-port-reduction.json'))
fixed={int(c)for c in portdata['common_crossing_map_M_to_N']}
base_adj={c:{k:(LABELS[d],j)for k,(d,j)in enumerate(BASE[ix[c]]['adj'])}for c in fixed}
base_outer=[(c,(k+2)%4)for row in portdata['fixed_boundary_port_matches']for c,k in[row['M_fixed_outside_port']]]
role={23:29,22:28,28:33,27:32,33:40,32:39,18:43,38:45,7:24,13:36,2:4,3:3,19:44,37:46,8:25,9:26,11:38,12:37,0:8,1:9,4:10,5:11,51:12,52:13,53:56,54:57,55:58,56:59,57:60,58:61}
want=[[24,25,26,8,10,12],[36,37,38,9,11,13],[43,44,4,40,33,29],[45,46,3,39,32,28]]
def restore(g,labs):
 L=loadgraph(g)
 for c,lab in zip(L.crossings,labs):c.label=lab
 return L

def arcwords(L):
 C={c.label:c for c in L.crossings}
 for rootrot in [0,2]:
  rot={min(fixed):rootrot};todo=list(rot);ok=True
  for c in todo:
   for k,(d,j)in base_adj[c].items():
    if d not in fixed:continue
    e,l=C[c].adjacent[(k+rot[c])%4]
    if e.label!=d:ok=False;break
    rd=(l-j)%4
    if rd not in[0,2]or(d in rot and rot[d]!=rd):ok=False;break
    if d not in rot:rot[d]=rd;todo.append(d)
   if not ok:break
  if ok and set(rot)==fixed:break
 else:raise AssertionError('New endpoint changes fixed exterior')
 ports={}
 for i,(c,k)in enumerate(base_outer):
  d,j=C[c].adjacent[(k+rot[c])%4];assert d.label not in fixed;ports[d.label,j]=i
 assert len(ports)==12
 arcs=[]
 for i in range(6):
  c,k=next(p for p,z in ports.items()if z==i);word=[];seen=set()
  while True:
   assert(c,k)not in seen;seen.add((c,k));word.append((c,k))
   last=c,(k+2)%4
   if last in ports:assert ports[last]==11-i;break
   d,j=C[c].adjacent[(k+2)%4];assert d.label not in fixed;c,k=d.label,j
  arcs.append(word)
 return arcs

def score(L):
 words=arcwords(L);s=0
 for a,w in zip(words,want):
  ar=[role[c]for c,k in a if c in role]
  assert sorted(ar)==sorted(w),(ar,w)
  pos={c:i for i,c in enumerate(w)}
  s+=sum(pos[a]>pos[b]for i,a in enumerate(ar)for b in ar[i+1:])
 return s
L=restore(BASE,LABELS);movie.clear();depth=0
# Deliberately undo the two over-transported passenger crossings in the old
# candidate; these are NEW suffix steps with independently checked endpoints.
for labs in [{2,107,18},{3,107,38},{19,106,18},{37,38,107}]:
 tr=next(tr for tr in S.possible_type_III_moves(L)if{q.crossing.label for q in tr}==labs)
 before=score(L);S.reidemeister_III(L,tr);L._rebuild(True);print('NEW RIII',sorted(labs),'passenger inversions',before,'->',score(L))
suffix=movie.copy()
prev=key(BASE)
for m in suffix:
 assert key(m['before'])==prev;checkmove(m);prev=key(m['after'])
assert prev==key(snap(L))
print('NEW SUFFIX VERIFIED',len(suffix),'moves; passenger role words',[[role.get(c,c)for c,k in a]for a in arcwords(L)[:4]])
json.dump({'trusted_prefix_moves':39,'initial':BASE,'movie':suffix,'final':snap(L),'labels':[c.label for c in L.crossings],'scope':'New suffix only; no target identity asserted.'},open(ROOT/'coupon-suffix-01.json','w'))
words=arcwords(L);print('CORE4',words[4]);print('CORE5',words[5]);print('SCORE',score(L))
for tr in S.possible_type_III_moves(L):
 labs={q.crossing.label for q in tr}
 if not labs&fixed:print('INTERNAL TRIANGLE',[(q.crossing.label,q.strand_index)for q in tr])
