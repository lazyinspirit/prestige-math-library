"""Synthesize only target-directed new RIII transpositions of the two passenger blocks."""
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent
exec((ROOT/'synthesize-coupon-suffix.py').read_text().split('L=restore(BASE,LABELS);movie.clear()')[0])
p=json.load(open(ROOT/'coupon-suffix-01.json'));L=restore(p['final'],p['labels']);initial=snap(L);movie.clear();depth=0
for step in range(20):
 old=score(L);g=snap(L);labs=[c.label for c in L.crossings];options=[]
 for tr in S.possible_type_III_moves(L):
  if {q.crossing.label for q in tr}&fixed:continue
  ports=[[L.crossings.index(q.crossing),q.strand_index]for q in tr]
  Q=restore(g,labs);qt=[CrossingStrand(Q.crossings[i],(k+Q.original_rotations[i])%4)for i,k in ports]
  assert any(set(qt)==set(t)for t in S.possible_type_III_moves(Q))
  depth=1;S.reidemeister_III(Q,qt);Q._rebuild(True);depth=0
  new=score(Q)
  if new<old:options.append((new,ports,[q.crossing.label for q in tr]))
 if not options:break
 new,ports,chosen=min(options)
 tr=[CrossingStrand(L.crossings[i],k)for i,k in ports];S.reidemeister_III(L,tr);L._rebuild(True)
 print('NEW RIII',chosen,'passenger inversions',old,'->',score(L))
D={'trusted_predecessor':'coupon-suffix-01.json','initial':initial,'movie':movie.copy(),'final':snap(L),'labels':[c.label for c in L.crossings],'passenger_inversions':score(L)}
prev=key(initial)
for m in D['movie']:
 assert key(m['before'])==prev;checkmove(m);prev=key(m['after'])
assert prev==key(D['final'])
json.dump(D,open(ROOT/'coupon-suffix-02.json','w'))
print('NEW SUFFIX VERIFIED',len(D['movie']),'RIII; score',score(L));print('PASSENGERS',[[role.get(c,c)for c,k in a]for a in arcwords(L)[:4]])
for tr in S.possible_type_III_moves(L):
 if not{q.crossing.label for q in tr}&fixed:print('INTERNAL TRIANGLE',[(q.crossing.label,q.strand_index)for q in tr])
print('CORE4',arcwords(L)[4]);print('CORE5',arcwords(L)[5])
