exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
import time,collections
s=open('/tmp/conway109/N-O-all-states.py').read();exec('def code(rows):'+s.split('def code(rows):')[1].split('for seed in range(60):')[0])
movie=[];M=init(json.load(open('/tmp/conway109/L-pd.json'))['PD'],['G']);O=init(json.load(open('/tmp/conway109/M-pd.json'))['PD'],['G']);Oinitial=snap(O);movie=[];O.simplify('global',type_III_limit=0);Opath=movie.copy();movie=[];initial=snap(M);M.simplify('global',type_III_limit=0);first=movie.copy();row=snap(M);target=code(snap(O));q=collections.deque([(row,first,0)]);seen={code(row)};count=0;t=time.monotonic();limit=2000
print('START',len(row),len(first),len(S.possible_type_III_moves(M)),flush=True)
while q and count<limit and time.monotonic()-t<60:
 rows,path,d=q.popleft();count+=1
 if code(rows)==target:
  assert key(rows)==canon(O)
  json.dump({'first':'L','first_initial':initial,'first_movie':path,'first_final':rows,'second':'M','second_initial':Oinitial,'second_movie':Opath,'second_final':snap(O)},open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/lm-local-worker/LM-movie.json','w'));print('FOUND',count,d,len(path),flush=True);break
 if d>=4:continue
 L=loadgraph(rows);triples=[[(L.crossings.index(z.crossing),z.strand_index)for z in tr]for tr in S.possible_type_III_moves(L)]
 for triple in triples:
  L=loadgraph(rows);movie=[];S.reidemeister_III(L,[CrossingStrand(L.crossings[i],j) for i,j in triple]);L._rebuild(True);L.simplify('global',type_III_limit=0);after=snap(L);k=code(after)
  if k not in seen:seen.add(k);q.append((after,path+movie.copy(),d+1))
 if count%100==0:print('PROGRESS',count,'seen',len(seen),'queue',len(q),'depth',d,'time',round(time.monotonic()-t,1),flush=True)
else:print('DONE',count,len(seen),len(q),'time',round(time.monotonic()-t,1),flush=True)
