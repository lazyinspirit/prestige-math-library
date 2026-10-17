from pathlib import Path
import json,re,difflib,copy
ROOT=Path.cwd();R='numerical-optimization-dynamics-2026-10-16';D=Path(__file__).parent
ids=['def-centered-taylor-model-with-derivative-interval','thm-centered-taylor-model-encloses-function-range']
sources={id:(ROOT/'items'/f'{id}.md').read_text() for id in ids}; proposed={}
old=sources[ids[0]]
a=old.index('$R=\\max(|a-c|,|b-c|)$.')
new_tail=r'''$R=\max(|a-c|,|b-c|)$. Define the **analytic centered Taylor set** by
$$\mathcal E_n(f,X,c,(C_j)_{j=0}^n,D)=\sum_{j=0}^n C_j(X-c)^j+\left[-\frac{M R^{n+1}}{(n+1)!},\frac{M R^{n+1}}{(n+1)!}\right],$$
where this displayed expression uses exact set addition, multiplication and
powers, with $(X-c)^0=\{1\}$. It is a bounded closed interval as an exact subset of $\mathbb R$; its
endpoints need not be representable in the selected dyadic format. The
polynomial term carries input variation, and the symmetric term is the
explicit derivative-based remainder.

The **computed centered Taylor-model enclosure**
$\mathcal T_n(f,X,c,(C_j)_{j=0}^n,D)$ is the finite interval returned by
evaluating the displayed expression with outward-rounded interval operations
in the selected format. Each required exact input or remainder endpoint is
enclosed by directed rounding before it is used as a stored interval
endpoint. A finite Taylor-model certificate is returned only when all these
conversions and all required interval operations return finite enclosures.
If a required coefficient or derivative enclosure is unavailable, no
Taylor-model certificate is returned. If a conversion or operation returns
a non-finite status, propagate that status and return no finite Taylor-model
certificate; the analytic set is not substituted as a stored result or an
overflow certificate.
'''
proposed[ids[0]]=old[:a]+new_tail
old=sources[ids[1]]
a=old.index('## Statement')
new_body=r'''## Statement

Under the hypotheses in
[[def-centered-taylor-model-with-derivative-interval]], the exact analytic
set satisfies
$$f(X)\subseteq\mathcal E_n(f,X,c,(C_j)_{j=0}^n,D).$$
If every required outward conversion and interval operation returns a finite
enclosure, the computed Taylor model is a finite interval and
$$f(X)\subseteq\mathcal T_n(f,X,c,(C_j)_{j=0}^n,D).$$
For $n=0$, the analytic inclusion is $f(X)\subseteq C_0+[-MR,MR]$, with this
sum interpreted exactly; its outward-rounded evaluation has the same
finite-success qualification. An unavailable required enclosure or a
non-finite conversion or operation returns no finite Taylor-model
certificate. When valid coefficient and derivative enclosures are supplied,
arithmetic failure does not invalidate the analytic inclusion, but that
inclusion asserts no representable result or fallback computation.

## Facts & Assumptions

**Given:** The data and exact analytic set in
[[def-centered-taylor-model-with-derivative-interval]], Taylor's integral
remainder formula in [[lem-taylor-integral-remainder]], and the conditional
finite-result arithmetic interface in
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]. The
finite-success condition is imposed only for the computed enclosure claim.

[L1] [[def-centered-taylor-model-with-derivative-interval]]: each $C_j$
contains $f^{(j)}(c)/j!$, $D$ contains $f^{(n+1)}(X)$, $M$ bounds the
absolute values of $D$, and $R$ bounds $|x-c|$ on $X$. The analytic set uses
exact set operations. Its computed model includes the required outward
endpoint conversions and returns a finite certificate only when every
conversion and interval operation is finite; otherwise it propagates the
actual status or reports the unavailable enclosure without a certificate.

[L2] [[lem-taylor-integral-remainder]]: each Taylor remainder is an integral
and has absolute value at most $M|x-c|^{n+1}/(n+1)!$ when
$|f^{(n+1)}|\le M$ on the segment.

[L3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: if all
operation nodes of a finite expression DAG return finite enclosures, every
exact node value lies in its computed enclosure. A non-finite status asserts
no finite DAG enclosure.

## Proof

1.1 Fix $x\in X$. If $x=c$, the polynomial already equals $f(c)$ and the remainder is zero. Otherwise the segment from $c$ to $x$ lies in $X$, so [L1] places $f^{(n+1)}$ there in $D$ and gives $|f^{(n+1)}|\le M$; also $|x-c|\le R$. The Taylor integral remainder bound [L2] is therefore at most $\rho:=M R^{n+1}/(n+1)!$. [given, L1, L2]

2.1 Each exact coefficient $f^{(j)}(c)/j!$ lies in $C_j$ by [L1], and $x-c\in X-c$. Thus exact set addition and multiplication place $P_n(x)$ in $\sum_{j=0}^n C_j(X-c)^j$. By step 1.1 the remainder lies in $[-\rho,\rho]$, so $f(x)\in\mathcal E_n$. Since $x$ was arbitrary, this proves the unconditional analytic inclusion. At $n=0$, $(X-c)^0=\{1\}$ and $\rho=MR$, giving the stated exact constant-plus-remainder set. [L1, step 1.1, algebra]

3.1 Now assume every required outward conversion and interval operation is finite. By [L1], converted input intervals contain their exact inputs, and the converted symmetric remainder interval contains $[-\rho,\rho]$. Apply [L3] to the finite polynomial evaluation with the actual coefficients and $x-c$, and then to its final addition with the actual remainder from step 1.1. The returned interval $\mathcal T_n$ contains $f(x)$ for every $x\in X$. If a required enclosure is unavailable or a conversion or operation is non-finite, [L1] instead prescribes its failure return without a finite certificate; [L3] supplies no finite DAG conclusion. When the analytic input enclosures are supplied, arithmetic failure does not affect the exact inclusion already proved in step 2.1. [given, L1, L3, step 1.1, step 2.1, algebra] ∎
'''
proposed[ids[1]]=old[:a]+new_body
# Honest new wording authorship; retain original references and proof provenance.
for id in ids:
 proposed[id]=proposed[id].replace('  statement: literature-derived\n','  statement: ai-altered\n',1)
for id in ids:
 p=Path('items')/(id+'.md')
 for branch,body in [('before',sources[id]),('proposed',proposed[id])]:
  q=D/branch/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(body)
 q=D/'diffs'/(id+'.diff');q.parent.mkdir(parents=True,exist_ok=True);q.write_text(''.join(difflib.unified_diff(sources[id].splitlines(True),proposed[id].splitlines(True),fromfile='before/'+str(p),tofile='proposed/'+str(p))))
# Future metadata mirrors only. No native risk/acceptance/history rewrite.
def section(body,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n',body,re.M);assert m
 e=re.search(r'^## ',body[m.end():],re.M)
 return body[m.end():m.end()+e.start()].strip() if e else body[m.end():].strip()
manifest=Path('research')/(R+'-batch-14.pages.json');contract=Path('research')/(R+'-batch-14.proof-contracts.json')
mx=json.load(open(manifest));cx=json.load(open(contract));my=copy.deepcopy(mx);cy=copy.deepcopy(cx);ops=[]
for pi,page in enumerate(my):
 for ii,item in enumerate(page['items']):
  id=item['id']
  if id not in ids:continue
  new=section(proposed[id],'Definition' if id.startswith('def-') else 'Statement');ops.append({'file':str(manifest),'path':[pi,'items',ii,'statement'],'before':item['statement'],'proposed':new});item['statement']=new
  ops.append({'file':str(manifest),'path':[pi,'items',ii,'provenance','statement'],'before':item['provenance']['statement'],'proposed':'ai-altered'});item['provenance']['statement']='ai-altered'
t=cy['contracts'][ids[1]]
for i,cite in enumerate(t['citations']):
 if cite['source']==ids[0]:
  new=section(proposed[ids[0]],'Definition');ops.append({'file':str(contract),'path':['contracts',ids[1],'citations',i,'quote'],'before':cite['quote'],'proposed':new});cite['quote']=new
  newuses=['1.1','2.1','3.1'];ops.append({'file':str(contract),'path':['contracts',ids[1],'citations',i,'uses'],'before':cite['uses'],'proposed':newuses});cite['uses']=newuses
 if cite['source']=='thm-outward-rounded-operations-are-isotone-and-dag-sound':
  newuses=['3.1'];ops.append({'file':str(contract),'path':['contracts',ids[1],'citations',i,'uses'],'before':cite['uses'],'proposed':newuses});cite['uses']=newuses
proof=section(proposed[ids[1]],'Proof');der=[]
for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',proof,re.M|re.S):
 label,text=m.group(1),m.group(2).strip();tag=re.search(r'\s*\[([^\[\]]*)\]\s*(?:∎)?\s*$',text);assert tag
 claim=text[:tag.start()].strip();inputs=[v.strip() for v in tag.group(1).split(',')]
 der.append({'id':'step-'+label.replace('.','-'),'claim':claim,'step':label,'inputs':inputs})
ops.append({'file':str(contract),'path':['contracts',ids[1],'derivations'],'before':t['derivations'],'proposed':der});t['derivations']=der
# Preserve native risk record unchanged. Flag future independent review/binding.
for p,before,after in [(manifest,mx,my),(contract,cx,cy)]:
 for branch,x in [('before',before),('future-mirrors',after)]:
  q=D/branch/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
(D/'future-mirror-operations.json').write_text(json.dumps(ops,indent=2,ensure_ascii=False)+'\n')
(D/'source-operations.json').write_text(json.dumps([{'file':'items/'+id+'.md','before':sources[id],'proposed':proposed[id]} for id in ids],indent=2,ensure_ascii=False)+'\n')
print('Prepared2 complete guarded source candidates and future mirror operations; no canonical changes/checks/hashes.')
