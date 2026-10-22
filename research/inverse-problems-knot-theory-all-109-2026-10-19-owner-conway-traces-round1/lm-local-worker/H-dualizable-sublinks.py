exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
from pathlib import Path
b=Path('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker')
H=init(json.load(open('/tmp/conway109/H-all-pd.json'))['PD'],['G','R','B']);print('SOURCE',collections.Counter(''.join(sorted(c.mark))for c in H.crossings),flush=True);out={}
for keep in [{'B','R'},{'G','R'}]:
 ids=[i for i,co in enumerate(H.link_components)if co[0].crossing.mark[co[0].strand_index%2]in keep];L=H.sublink(ids)
 # Sublink retains crossing labels; inherited parity determines component marks.
 for c in L.crossings:c.mark=H.crossings[c.label].mark
 assert all(set(c.mark)<=keep for c in L.crossings)
 initial=snap(L);movie=[];L.simplify('global',type_III_limit=0);ms=list(movie);print('SUBLINK',keep,len(initial),'TO',len(L.crossings),'MOVES',len(ms),collections.Counter(''.join(sorted(c.mark))for c in L.crossings),flush=True)
 for m in ms:checkmove(m)
 assert len(L.crossings)==len(L.link_components)==2 and L.crossings[0].sign==L.crossings[1].sign and L.crossings[0].mark==L.crossings[1].mark[::-1]
 out[''.join(sorted(keep))]={'initial':initial,'movie':ms,'final':snap(L)}
json.dump(out,open(b/'H-dualizable-sublink-movies.json','w'),indent=2)
