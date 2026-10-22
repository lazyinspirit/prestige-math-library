import json
from pathlib import Path
ports=['IL','IR','OR','OL'];op={'IL':'OR','OR':'IL','IR':'OL','OL':'IR'}
parent={};edges=[];cross={}
def root(a):
 parent.setdefault(a,a)
 if parent[a]!=a:parent[a]=root(parent[a])
 return parent[a]
def wire(a,b):parent[root(a)]=root(b);edges.append((a,b))
def braid(word,prefix,n,start):
 cur=[f'{prefix}T{i+1}' for i in range(n)]
 for j,k in enumerate(word,start):
  i=abs(k)-1;cross[j]={'letter':k}
  wire(cur[i],f'{j}:IL');wire(cur[i+1],f'{j}:IR')
  cur[i]=f'{j}:OL';cur[i+1]=f'{j}:OR'
 for i,a in enumerate(cur):wire(a,f'{prefix}B{i+1}')
 return start+len(word)
def compute(t):
 global parent,edges,cross
 parent={};edges=[];cross={}
 k=t-3;word=([1 if k>0 else -1]*abs(2*k))+[2,1,3,2]*3
 nxt=braid(word,'M',4,1);braid([-1,-1],'C',2,nxt)
 for i in [3,4]:wire(f'MB{i}',f'MT{i}')
 for a,b in [('CT1','MB1'),('CT2','MT1'),('CB1','MB2'),('CB2','MT2')]:wire(a,b)
 comps={}
 for j in cross:
  for p in ports:comps.setdefault(root(f'{j}:{p}'),[]).append((j,p))
 assert all(len(v)==2 for v in comps.values()),comps
 alpha={}
 for a,b in comps.values():alpha[a]=b;alpha[b]=a
 sig={(j,p):(j,ports[(i+1)%4]) for j in cross for i,p in enumerate(ports)}
 seen=set();faces=[]
 for d in sig:
  if d in seen:continue
  f=[];x=d
  while x not in seen:seen.add(x);f.append(x);x=alpha[sig[x]]
  faces.append(f)
 start=[p for p in comps[root('MT1')] if p[1] in ['IL','IR']][0]
 visits=[];incoming={};x=start
 while x not in incoming:
  j,p=x;incoming[x]=len(visits);over=p in (['IR','OL'] if cross[j]['letter']>0 else ['IL','OR']);visits.append({'crossing':j,'over':over,'entry':p});x=alpha[(j,op[p])]
 assert x==start
 assert len(visits)==len(cross)*2,(len(visits),len(cross)*2)
 signs={}
 smooth={}
 for j in cross:
  vs=[v for v in visits if v['crossing']==j];a=next(v for v in vs if v['over']);b=next(v for v in vs if not v['over']);signs[j]=(1 if cross[j]['letter']>0 else -1)*(1 if a['entry'] in ['IL','IR'] else -1)*(1 if b['entry'] in ['IL','IR'] else -1)
  smooth[(j,a['entry'])]=alpha[(j,op[b['entry']])];smooth[(j,b['entry'])]=alpha[(j,op[a['entry']])]
 seen=set();circles=[]
 for d in smooth:
  if d in seen:continue
  cc=[];x=d
  while x not in seen:seen.add(x);cc.append(x);x=smooth[x]
  circles.append(cc)
 return {'t':t,'braid_word':word,'clasp_word':[-1,-1],'wires':edges,'dart_pairing':[[list(a),list(b)] for a,b in alpha.items() if a<b],'clockwise_port_rotation':ports,'signed_visit_word':[v['crossing'] if v['over'] else -v['crossing'] for v in visits],'crossing_signs':[signs[j] for j in sorted(signs)],'face_cycles':faces,'seifert_circles':circles,'Euler_spherical':len(cross)-2*len(cross)+len(faces),'Seifert_genus':(1-len(circles)+len(cross))//2}
if __name__=='__main__':
 for t in [0,2,6]:
  d=compute(t);print('t',t,'crossings',len(d['crossing_signs']),'signs+',d['crossing_signs'].count(1),'-',d['crossing_signs'].count(-1),'Euler',d['Euler_spherical'],'Seifertcircles',len(d['seifert_circles']),'g',d['Seifert_genus']);print(d['signed_visit_word']);print(d['crossing_signs']);Path(__file__).with_name(f'whitehead-t{t}-diagram-exploration.json').write_text(json.dumps(d,indent=2)+'\n')
