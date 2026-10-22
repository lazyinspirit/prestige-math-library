exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
for n,U in [('L',{12,11,35,19}),('M',{19,37,3,2})]:
 L=init(json.load(open('/tmp/conway109/'+n+'-pd.json'))['PD'],['G']);rows=snap(L);V=[i for i in range(len(rows))if i not in U];ix={i:j for j,i in enumerate(V)};out=[]
 for i in V:
  adj=[]
  for p in range(4):
   j,h=rows[i]['adj'][p]
   while j in U:j,h=rows[j]['adj'][(h+2)%4]
   adj.append([ix[j],h])
  out.append({'adj':adj,'mark':('G','G')})
 try:R=loadgraph(out)
 except ValueError as e:print(n,e);continue
 print(n,'capped',len(R.crossings),len(R.faces()),flush=True);movie=[];R.simplify('global',type_III_limit=0);print(n,'capped finite cleanup',len(R.crossings),len(movie),flush=True)
 if n=='L':A=canon(R)
 else:print('UNMARKED CONTEXT MATCH ONLY',A==canon(R),flush=True)
