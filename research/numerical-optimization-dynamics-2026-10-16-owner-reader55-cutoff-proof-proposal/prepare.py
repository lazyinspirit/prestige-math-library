from pathlib import Path
import re,json,shutil,difflib
R='numerical-optimization-dynamics-2026-10-16';b=Path('research')/(R+'-owner-reader55-cutoff-proof-proposal');id='lem-schwartz-cutoffs-from-the-standard-smooth-step';p=Path('items')/(id+'.md');before=p.read_text();after=before
newdeps=['thm-derivative-of-exponential','cor-exponential-reciprocal-and-positivity','thm-algebra-of-derivatives','thm-algebra-of-continuous-functions']
after=after.replace('"thm-heine-borel-rn"]','"thm-heine-borel-rn", '+', '.join('"'+z+'"' for z in newdeps)+']',1)
after=after.replace('\n## Proof\n',r'''
[F4] The exponential is smooth with derivative equal to itself ([[thm-derivative-of-exponential]]), and $e^u>0$, $e^{-u}=1/e^u$ for every real $u$ ([[cor-exponential-reciprocal-and-positivity]]).

[F5] The scalar sum, product and quotient rules hold; in particular $(1/g)'=-g'/g^2$ wherever $g\ne0$ ([[thm-algebra-of-derivatives]]).

[F6] Sums and products of continuous scalar functions are continuous, as are quotients on the domain of a nonvanishing denominator ([[thm-algebra-of-continuous-functions]]).

## Proof
''',1)
old=r'If $s=1/t$, induction gives $a^{(k)}(t)=P_k(s)e^{-s}$ on $t>0$, with $P_0=1$ and $P_{k+1}(s)=s^2(P_k(s)-P_k\'(s))$.'
# Use source literal rather than an escaped apostrophe in a raw string.
old="If $s=1/t$, induction gives $a^{(k)}(t)=P_k(s)e^{-s}$ on $t>0$, with $P_0=1$ and $P_{k+1}(s)=s^2(P_k(s)-P_k'(s))$."
new=r'''On $t>0$, put $s=1/t$. The quotient rule [F5] applied to $1/t$ gives $s'=-1/t^2=-s^2$, while [F2] and [F4] give $(e^{-s})'=-e^{-s}$ as a function of $s$. Thus the product and chain rules give
$$\frac{d}{dt}\bigl(P_k(s)e^{-s}\bigr)=\bigl(P_k'(s)-P_k(s)\bigr)e^{-s}(-s^2)=s^2\bigl(P_k(s)-P_k'(s)\bigr)e^{-s}.$$
Starting at $P_0=1$, this proves $a^{(k)}(t)=P_k(s)e^{-s}$ with the polynomial recurrence $P_{k+1}(s)=s^2(P_k(s)-P_k'(s))$.'''
assert old in after;after=after.replace(old,new,1);after=after.replace('[F1, F2, algebra]\n\n2.1','[F1, F2, F4, F5, F6, algebra, induction]\n\n2.1',1)
old='Thus the quotient is smooth, $0\\le\\sigma\\le1$,'
new=r'''Write $g(t)=a(t)+a(1-t)$, which is smooth by step 1.1 and the sum and chain rules. Since $g>0$, [F6] makes $q=1/g$ continuous, and [F5] gives $q'=-g'q^2$. For every $k\ge0$, finite iteration of the product rule [F5] and continuity of products [F6] shows that products of $C^k$ functions are $C^k$. If $q\in C^k$, the displayed derivative is therefore $C^k$ because $g'$ is smooth; hence $q\in C^{k+1}$. Starting with $C^0$, induction proves $q\in C^\infty$ and then $\sigma=aq\in C^\infty$. Thus $0\le\sigma\le1$, '''
assert old in after;after=after.replace(old,new,1);after=after.replace('[step 1.1, F2, F3]\n\n3.1','[step 1.1, F2, F3, F4, F5, F6, induction]\n\n3.1',1)
section=lambda s:re.search(r'^## Statement\n(.*?)(?=^## |\Z)',s,re.M|re.S).group(1)
assert section(before)==section(after)
for folder,text in [('before',before),('proposed',after)]:
 dest=b/folder/'items'/(id+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text)
(b/'cutoff.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='before/items/'+id+'.md',tofile='proposed/items/'+id+'.md')))
context=['thm-exponential-beats-every-polynomial','thm-chain-rule-for-total-derivatives','def-ck-and-multi-index-notation-in-several-variables','thm-heine-borel-rn']+newdeps+['thm-nearest-neighbor-cfl-domain-condition','thm-zero-boundary-piecewise-polynomials-in-w10p','lem-test-function-cutoffs-and-euclidean-localization']
for id in context:
 dest=b/'context/items'/(id+'.md');dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile('items/'+id+'.md',dest)
for name in [R+'-reader-findings-55.json',R+'-reader-55.md']:
 dest=b/'context/research'/name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile('research/'+name,dest)
print({'proposed_source':str(b/'proposed/items'/p.name),'Statement_changed':False,'new_deps':newdeps,'checks_executed':[]})
