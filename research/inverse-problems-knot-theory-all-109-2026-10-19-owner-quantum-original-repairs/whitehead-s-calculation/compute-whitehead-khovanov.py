from itertools import combinations
P=[(1,2,3,4),(2,1,5,6),(7,5,8,9),(10,6,7,11),(12,13,14,9),(14,15,16,11),(17,16,15,18),(19,10,17,20),(13,21,22,18),(22,23,24,20),(25,24,23,26),(27,19,25,28),(21,12,29,26),(29,8,30,28),(3,27,31,32),(30,4,32,31)]
C={}
for s in range(1<<16):
 if not 5<=s.bit_count()<=7:continue
 p=list(range(33))
 def find(a):
  while p[a]!=a:p[a]=p[p[a]];a=p[a]
  return a
 for i,(a,b,c,d) in enumerate(P):
  for x,y in (((a,b),(c,d)) if not (s>>i)&1 else ((a,d),(b,c))):p[find(x)]=find(y)
 v={}
 for x in range(1,33):v[find(x)]=v.get(find(x),0)|(1<<(x-1))
 C[s]=tuple(sorted(v.values(),key=lambda b:(b&-b)))
def basis(i,j):
 ret=[]
 for s,cs in C.items():
  if s.bit_count()!=i+6:continue
  n=s.bit_count()-2+len(cs)-j
  if n%2 or not 0<=n//2<=len(cs):continue
  for a in combinations(range(len(cs)),n//2):ret.append((s,sum(1<<k for k in a)))
 return ret
def columns(B,T):
 ix={v:i for i,v in enumerate(T)}
 for s,label in B:
  out=0; cs=C[s]
  for e in range(16):
   if (s>>e)&1:continue
   st=s|(1<<e); ct=C[st]
   common={v:k for k,v in enumerate(ct)}; base=0;src=[]
   for k,v in enumerate(cs):
    if v in common:base|=((label>>k)&1)<<common[v]
    else:src.append(k)
   dst=[k for k,v in enumerate(ct) if v not in cs]
   if len(src)==2 and len(dst)==1:
    n=sum((label>>k)&1 for k in src)
    if n==2:continue
    labels=[base|(n<<dst[0])]
   elif len(src)==1 and len(dst)==2:
    if (label>>src[0])&1:labels=[base|(1<<dst[0])|(1<<dst[1])]
    else:labels=[base|(1<<dst[0]),base|(1<<dst[1])]
   else:raise Exception((s,e,src,dst))
   for a in labels:out^=1<<ix[(st,a)]
  yield out
def rank(cols, low=False):
 piv={}
 for x in cols:
  while x:
   k=(x&-x).bit_length()-1 if low else x.bit_length()-1
   if k in piv:x^=piv[k]
   else:piv[k]=x;break
 return len(piv)

if __name__ == '__main__':
 import gzip, hashlib, json
 from pathlib import Path
 records=[]
 for j in [-3,-1]:
  b=[basis(i,j) for i in [-1,0,1]]
  mats=[list(columns(b[k],b[k+1])) for k in [0,1]]
  for col in mats[0]:
   z=0
   while col:
    bit=col&-col; z^=mats[1][bit.bit_length()-1]; col^=bit
   assert z==0, 'd squared nonzero'
  ranks=[rank(m) for m in mats]
  assert ranks==[rank(m,low=True) for m in mats]
  assert sum(ranks)==len(b[1])
  rec={'j':j,'dimensions':[len(v) for v in b],'ranks':ranks,
       'basis':b,'columns_hex':[[hex(v) for v in m] for m in mats]}
  records.append(rec)
  hashes=[hashlib.sha256(('\n'.join(hex(v) for v in m)+'\n').encode()).hexdigest() for m in mats]
  print('j=',j,'dimensions=',rec['dimensions'],'ranks=',ranks,'H0=0; d^2=0; both pivot orders agree')
  print('column-sha256=',hashes)
 out=Path(__file__).with_name('exact-four-matrices.json.gz')
 with gzip.GzipFile(filename=str(out),mode='wb',mtime=0) as f:
  f.write(json.dumps(records,separators=(',',':')).encode())
 print('matrix archive sha256=',hashlib.sha256(out.read_bytes()).hexdigest())
