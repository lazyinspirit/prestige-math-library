"""NEW coupon suffix only, starting at the previously verified suffix-02 endpoint."""
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent
exec((ROOT/'synthesize-coupon-suffix.py').read_text().split('L=restore(BASE,LABELS);movie.clear()')[0])
p=json.load(open(ROOT/'coupon-suffix-02.json'));L=restore(p['final'],p['labels']);initial=snap(L);movie.clear();depth=0
triples=[{53,103,105},{54,101,105},{55,101,103},{56,103,105},{57,101,105},{58,101,103},
 {53,102,104},{54,100,104},{55,100,102},{56,102,104},{57,100,104},{58,100,102},
 {26,101,103},{26,100,102},{31,101,105},{31,100,104}]
def triple(labs):
 assert not labs&fixed
 tr=next(tr for tr in S.possible_type_III_moves(L)if{q.crossing.label for q in tr}==labs)
 S.reidemeister_III(L,tr);L._rebuild(True);arcwords(L)
def remove(label,want):
 c=next(c for c in L.crossings if c.label==label)
 removed=S.reidemeister_I_and_II(L,c)[0]
 assert {c.label for c in removed}==want
 L._rebuild(True);arcwords(L)
for labels in triples:triple(labels)
remove(106,{106,107})
remove(103,{103})
triple({105,102,104})
remove(104,{104})
D={'trusted_predecessor':'coupon-suffix-02.json','initial':initial,'movie':movie.copy(),'final':snap(L),'labels':[c.label for c in L.crossings]}
# Only these newly authored suffix steps are independently replayed.
prev=key(initial)
for n,m in enumerate(D['movie']):
 assert key(m['before'])==prev,n;checkmove(m);prev=key(m['after'])
assert prev==key(D['final']);assert len(D['final'])==62
print('PASS NEW COUPON SUFFIX',len(D['movie']),collections.Counter(m['move']for m in D['movie']),'endpoint',len(L.crossings))
N=init(json.load(open(ROOT/'inputs/N-pd.json'))['PD'],['G'])
assert canon(L)==canon(N)
# Produce an explicit full ribbon isomorphism anchored at the prescribed fixed
# exterior, rather than relying solely on an unmarked graph canonical form.
C={c.label:c for c in L.crossings};NC={c.label:c for c in N.crossings}
fixedmap={int(c):v for c,v in portdata['common_crossing_map_M_to_N'].items()}
for seedrot in [0,2]:
 mp={6:fixedmap[6]};rt={6:seedrot};todo=[6];ok=True
 for c in todo:
  for k,(d,j)in enumerate(C[c].adjacent):
   e,l=NC[mp[c]].adjacent[(k+rt[c])%4];rd=(l-j)%4
   if rd not in[0,2]or(d.label in mp and(mp[d.label]!=e.label or rt[d.label]!=rd)):
    ok=False;break
   if d.label not in mp:mp[d.label]=e.label;rt[d.label]=rd;todo.append(d.label)
  if not ok:break
 if ok and len(mp)==62 and len(set(mp.values()))==62 and all(mp[c]==v for c,v in fixedmap.items()):break
else:raise AssertionError('No prescribed exterior-anchored isomorphism')
# Every one of the 248 halfedges, crossing rotations and under/over parities.
for c in C:
 for k,(d,j)in enumerate(C[c].adjacent):
  assert NC[mp[c]].adjacent[(k+rt[c])%4]==(NC[mp[d.label]],(j+rt[d.label])%4)
assert len(mp)*4==248
words=arcwords(L)
# Read all target port collars through the anchored isomorphism. Taking the
# source traversal words through the isomorphism must give the literal N words.
Nports={}
for i,row in enumerate(portdata['fixed_boundary_port_matches']):
 c,k=row['N_fixed_outside_port'];d,j=NC[c].adjacent[k];Nports[d.label,j]=i
Narcs=[]
for i in range(6):
 c,k=next(p for p,z in Nports.items()if z==i);w=[]
 while True:
  w.append((c,k));last=c,(k+2)%4
  if last in Nports:assert Nports[last]==11-i;break
  d,j=NC[c].adjacent[(k+2)%4];c,k=d.label,j
 Narcs.append(w)
for source,target in zip(words,Narcs):
 assert [(mp[c],(k+rt[c])%4)for c,k in source]==target
D['target']='literal N-pd.json'
D['literal_target_equal']=True
D['target_isomorphism']={'crossing_map':mp,'even_crossing_rotations':rt,'halfedges_checked':248,'fixed_exterior_map':fixedmap,'ports':12,'proper_arc_words_source':words,'proper_arc_words_target':Narcs}
json.dump(D,open(ROOT/'coupon-suffix-03.json','w'))
print('PASS EXACT LITERAL N: prescribed26-crossing exterior, all248 halfedges, all12 collars and6 full proper-arc words')
print('NEW PACKET MAP',{c:mp[c]for c in[26,31,100,101,102,105]})
