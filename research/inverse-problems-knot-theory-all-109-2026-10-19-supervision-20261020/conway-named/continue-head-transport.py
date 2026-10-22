"""Replay the real source prefix and move the head past two more return pairs and the next body-exit pair.
This proves only the recorded finite prefix; it does not assert M=N.
"""
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent
exec(open(ROOT/'inputs/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
p=json.load(open(ROOT/'inputs/MN-head-transport-first.json'))
prev=key(p['initial'])
assert prev==canon(init(json.load(open(ROOT/'inputs/M-pd.json'))['PD'],['G']))
for n,m in enumerate(p['movie']):
 assert key(m['before'])==prev,n
 checkmove(m);prev=key(m['after'])
assert prev==key(p['final'])
L=loadgraph(p['final'])
for c,lab in zip(L.crossings,p['labels']):c.label=lab
movie.clear();depth=0
for a,b,new,pairs in [
 ((37,1),(28,0),102,[{28,19,103},{27,102,37},{102,27,3},{102,28,2}]),
 ((37,3),(33,0),104,[{33,19,105},{32,104,37},{104,32,3},{104,33,2}]),
 ((18,1),(37,1),106,[{37,38,107},{19,106,18},{3,107,38},{2,107,18}])]:
 cs={c.label:c for c in L.crossings}
 before=snap(L);at=[[L.crossings.index(cs[c]),k]for c,k in [a,b]]
 assert any(CrossingStrand(cs[a[0]],a[1])in f and CrossingStrand(cs[b[0]],b[1])in f for f in L.faces())
 oRII(L,CrossingStrand(cs[a[0]],a[1]),CrossingStrand(cs[b[0]],b[1]),new,new+1)
 for c in L.crossings[-2:]:c.mark=('G','G')
 L._rebuild(True)
 movie.append({'move':'inverse-R2','at':at,'before':before,'after':snap(L)})
 for labs in pairs:
  tr=next(tr for tr in S.possible_type_III_moves(L)if{q.crossing.label for q in tr}==labs)
  S.reidemeister_III(L,tr);L._rebuild(True)
D={'initial':p['initial'],'movie':p['movie']+movie.copy(),'final':snap(L),'labels':[c.label for c in L.crossings]}
prev=key(D['initial'])
for n,m in enumerate(D['movie']):
 assert key(m['before'])==prev,n
 checkmove(m);prev=key(m['after'])
assert prev==key(D['final'])
print('PASS SOURCE-BOUND PREFIX',len(D['movie']),'moves',len(L.crossings),'crossings')
N=init(json.load(open(ROOT/'inputs/N-pd.json'))['PD'],['G'])
print('EXACT LITERAL N',canon(L)==canon(N))
json.dump(D,open(ROOT/'head-three-returns-prefix.json','w'))
for fi,f in enumerate(L.faces()):
 if any(q.crossing.label in {19,37}for q in f):print('HEAD FACE',fi,[(q.crossing.label,q.strand_index)for q in f])
print('HEAD TRIANGLES',[[q.crossing.label for q in tr]for tr in S.possible_type_III_moves(L)if any(q.crossing.label in {2,3,19,37}for q in tr)])
