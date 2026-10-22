from itertools import product
edge_count=0
for n in range(9):
 for w in product((0,1),repeat=n):
  sig=lambda t:(-1)**sum(j*t[j] for j in range(n))
  for j in range(n):
   if w[j]:continue
   wp=list(w);wp[j]=1;wp=tuple(wp)
   orig=tuple(1-z for z in wp)
   so=(-1)**sum(orig[:j]);sm=(-1)**sum(w[:j])
   assert sig(wp)*sm==so*sig(w)
   edge_count+=1
# Labels 0=1,1=X; epsilon(1)=0,epsilon(X)=1, X²=1.
def pair(a,b):return (a+b)%2
D={0:[(0,1),(1,0)],1:[(0,0),(1,1)]}
for a,b,c in product((0,1),repeat=3):
 left=pair((a+b)%2,c)
 right=sum(pair(a,u)*pair(b,v) for u,v in D[c])
 assert left==right,(a,b,c,left,right)
print(f'PASS: {edge_count} complemented-cube signed edges for all crossing counts0–8; all8 Lee multiplication/comultiplication adjunction triples.')
