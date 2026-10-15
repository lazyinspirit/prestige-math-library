from pathlib import Path
import json,hashlib,difflib,re
base=Path(__file__).parent
ids=['def-finite-sum','lem-finite-sum-laws']
raw={id:Path('items',id+'.md').read_text() for id in ids}
new=raw.copy()
# Proposed published carriers have no verification mapping; genuine repair receipts are root-owned.
for id in ids:
 new[id]=re.sub(r'^verification:\n(?:[ \t].*\n|\n)*', '', new[id], count=1, flags=re.M)
new[ids[0]]=new[ids[0]].replace('def-nat-addition, def-field','def-nat-addition, def-nat-order, lem-nat-add-commutative, lem-nat-add-cancellative, def-field',1)
old=r'''and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,'''
replacement=r'''and, for a general lower index $m$ with $m \le n + 1$, let $d$ be the
unique natural number satisfying $m+d=n+1$. Existence is the definition of
natural order ([[def-nat-order]]); if $m+d=m+e$, commutativity
([[lem-nat-add-commutative]]) gives $d+m=e+m$, so cancellation
([[lem-nat-add-cancellative]]) gives $d=e$. On these admissible bounds only,
we may write this unique additive gap as $d=n+1-m$; no total natural subtraction
operation is presupposed. With $d$ thus fixed, define'''
assert old in new[ids[0]]
new[ids[0]]=new[ids[0]].replace(old,replacement,1)
marker='Only finitely many values of $a$ enter'
extra=r'''Equivalently, for naturals $m \le r$, the half-open endpoint notation
$\sum_{k=m}^{r-1}a_k$ and $\prod_{k=m}^{r-1}a_k$ means
$\sum_{j<d}a_{m+j}$ and $\prod_{j<d}a_{m+j}$, respectively, where $d$ is the
unique natural with $m+d=r$. Here $r-1$ is an endpoint label for the terms
before $r$, so this notation needs no total subtraction operation. For $m=r$,
the unique gap is $0$ because $m+0=m$, giving the empty sum and product; the
case $m=r=0$ is the $-1$ endpoint convention just stipulated.

'''
new[ids[0]]=new[ids[0]].replace(marker,extra+marker,1)
new[ids[1]]=new[ids[1]].replace('deps: [def-finite-sum,','deps: [def-finite-sum, def-nat-order, def-nat-addition, lem-nat-add-commutative, lem-nat-add-cancellative,',1)
old=r'''and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.'''
rep=r'''and for $m \le n$, $\sum_{k=m}^{n-1} a_k = \sum_{j < d} a_{m+j}$ and likewise for products, where $d$ is the unique natural with $m+d=n$. If $m=n$, then $d=0$, including $m=n=0$ with the stipulated $-1$ endpoint label.'''
assert old in new[ids[1]]
new[ids[1]]=new[ids[1]].replace(old,rep,1)
marker='## Proof\n'
extra=r'''[L7] Natural order means $m\le n$ if and only if $m+d=n$ for some natural $d$ ([[def-nat-order]]). Such $d$ is unique: commutativity ([[lem-nat-add-commutative]]) turns $m+d=m+e$ into $d+m=e+m$, and cancellation ([[lem-nat-add-cancellative]]) gives $d=e$. Natural addition satisfies $m+0=m$ and $m+(d+1)=(m+d)+1$ ([[def-nat-addition]]).

'''
new[ids[1]]=new[ids[1]].replace(marker,extra+marker,1)
old=next(l for l in new[ids[1]].splitlines() if l.startswith('1.3 '))
rep=r'''1.3 Splitting, claim 3: fix $m$ and prove for every natural $d$ the identities $\sum_{k<m+d}a_k=\sum_{k<m}a_k+\sum_{j<d}a_{m+j}$ and $\prod_{k<m+d}a_k=(\prod_{k<m}a_k)(\prod_{j<d}a_{m+j})$. For $d=0$, [L7] gives $m+0=m$ and [L1, L2] give addition of $0$ and multiplication by $1$. If the two identities hold for $d$, then $m+(d+1)=(m+d)+1$ by [L7]; recursion and associativity give $\sum_{k<m+(d+1)}a_k=\sum_{k<m+d}a_k+a_{m+d}=\sum_{k<m}a_k+(\sum_{j<d}a_{m+j}+a_{m+d})=\sum_{k<m}a_k+\sum_{j<d+1}a_{m+j}$. Likewise, $\prod_{k<m+(d+1)}a_k=(\prod_{k<m+d}a_k)a_{m+d}=(\prod_{k<m}a_k)((\prod_{j<d}a_{m+j})a_{m+d})=(\prod_{k<m}a_k)(\prod_{j<d+1}a_{m+j})$. Thus [L3] proves both identities for every $d$. Given the stated $m\le n$, choose the unique $d$ with $m+d=n$ by [L7]; substituting $n=m+d$ and using the lower-index notation in [L1] proves claim 3, including $m=n$ and $m=n=0$. [L1, L2, L3, L7]'''
new[ids[1]]=new[ids[1]].replace(old,rep,1)
guards=[]
for id in ids:
 p=Path('items',id+'.md');(base/'before'/p.name).write_text(raw[id]);(base/'proposed/items'/p.name).write_text(new[id]);guards.append({'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'proposed_raw_sha256':hashlib.sha256(new[id].encode()).hexdigest()})
(base/'suppliers.patch').write_text(''.join(''.join(difflib.unified_diff(raw[id].splitlines(True),new[id].splitlines(True),fromfile='a/items/'+id+'.md',tofile='b/items/'+id+'.md')) for id in ids))
ctx=['def-nat-order','def-nat-addition','lem-nat-add-commutative','lem-nat-add-cancellative','ex-complex-coordinate-and-path-transport']
guards += [{'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'role':'read-only context'} for id in ctx for p in [Path('items',id+'.md')]]
# Exact current batch quote affected by definition clarification; proposal only.
p=Path('research/quantum-prerequisites-4-2026-10-15-batch-3.proof-contracts.json');doc=json.loads(p.read_text()); edits=[]
norm=lambda s:re.sub(r'\s+',' ',s).strip()
for id,contract in doc['contracts'].items():
 for i,row in enumerate(contract.get('citations',[])):
  if row.get('source')=='def-finite-sum' and norm(row.get('quote','')) not in norm(new[ids[0]]):
   # Preserve the exact entire Definition quotation using the clarified source.
   quote=new[ids[0]].split('## Definition\n',1)[1].split('\n## Remarks',1)[0].strip()
   edits.append({'path':str(p),'pointer':'/contracts/'+id+'/citations/'+str(i)+'/quote','before':row['quote'],'after':quote})
guards.append({'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'role':'contract projection proposal only'})
(base/'guarded-patch-manifest.json').write_text(json.dumps({'version':1,'mode':'proposal only; native adjudication and root integration required','guards':guards,'contract_edits':edits,'supplier_patch':'suppliers.patch','statement_lem_finite_sum_laws_unchanged':raw[ids[1]].split('## Statement\n')[1].split('## Facts')[0]==new[ids[1]].split('## Statement\n')[1].split('## Facts')[0],'published_metadata':'Existing verification blocks removed from proposed carriers. Root must attach genuine published-repair receipts before live integration; exact original source bytes remain in before/.'},indent=2)+'\n')
print(json.dumps({'guards':len(guards),'contract_quote_edits':len(edits)}))
