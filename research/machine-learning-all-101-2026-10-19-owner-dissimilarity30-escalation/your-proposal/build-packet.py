from pathlib import Path
import json,shutil,re,yaml
P=Path('research/machine-learning-all-101-2026-10-19-owner-dissimilarity30-escalation/your-proposal')
run='machine-learning-all-101-2026-10-19'
D='def-bounded-client-gradient-dissimilarity'
L='lem-standard-client-dissimilarity-implies-gap-form'
seeds=['lem-fedavg-one-round-progress','lem-fedavg-local-drift','thm-fedavg-under-gradient-dissimilarity']
for folder in ['before/items','candidates/items','evidence','before/research','before/library/machine-learning']: (P/folder).mkdir(parents=True,exist_ok=True)
for f in seeds: shutil.copyfile(f'items/{f}.md',P/f'before/items/{f}.md')
for f in ['lem-l-smoothness-descent-inequality','lem-finite-sum-gradient-is-average','thm-cauchy-schwarz-and-the-euclidean-norm','lem-smooth-convex-gradient-difference']:
 shutil.copyfile(f'items/{f}.md',P/f'before/items/{f}.md')
for f in ['plan-machine-learning-track.md',f'{run}-batch-30.pages.json']:
 shutil.copyfile('research/'+f,P/'before/research'/f)
for f in ['ml02-federated-optimization','ml02-federated-optimization-examples']:
 shutil.copyfile(f'library/machine-learning/{f}.md',P/f'before/library/machine-learning/{f}.md')
for f in ['review-1.json','repair-1.json']:
 shutil.copyfile(f'research/{run}-scope-review/batch-30/{f}',P/'evidence'/f)
plan=json.load(open('research/plan-spec.json'))
def walk(x):
 if isinstance(x,dict):
  if x.get('id')=='ml02-federated-optimization': return x
  for v in x.values():
   a=walk(v)
   if a:return a
 if isinstance(x,list):
  for v in x:
   a=walk(v)
   if a:return a
(P/'evidence/approved-plan-row.json').write_text(json.dumps(walk(plan),indent=2)+'\n')
head=lambda id,kind,title,deps,proof: f'''---
id: {id}
kind: {kind}
title: {title}
status: draft
origin: pipeline
pipeline_run: {run}
deps: {json.dumps(deps)}
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: {proof}
verification: {{}}
sources:
  references:
    - title: "Karimireddy et al., SCAFFOLD, Section 2 (A1) and Appendix D.1, equations (13)–(14)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
'''
(P/f'candidates/items/{D}.md').write_text(head(D,'definition','Standard and gap forms of bounded client gradient dissimilarity',[],'not-applicable')+r'''---

## Definition

Let $N,d\ge1$ be positive integers, let $f_i:\mathbb R^d\to\mathbb R$
be differentiable, and put $f=N^{-1}\sum_{i=1}^N f_i$. For constants
$G\ge0$ and $B\ge1$, the clients have standard $(G,B)$-bounded gradient
dissimilarity if
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2\le G^2+B^2\|\nabla f(x)\|_2^2 \qquad(x\in\mathbb R^d). $$

For $\beta>0$ and a finite global lower bound $f^\star\in\mathbb R$ for
$f$, the gap-form condition with parameters $(G,B,\beta,f^\star)$ is
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2\le G^2+2\beta B^2(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
In the convex-client FedAvg results, $\beta$ is a common gradient Lipschitz
constant and $f^\star$ is the attained minimum of $f$; this is the relaxed
convex form of the source's assumption. These conditions bound the population
second moment of deterministic client gradients. They are separate from the
within-client stochastic-gradient noise bound
$\mathbb E\|g_i(x)-\nabla f_i(x)\|_2^2\le\sigma^2$.

## Definition references

[Karimireddy et al., SCAFFOLD, Section 2 (A1)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

[Karimireddy et al., SCAFFOLD, Appendix D.1, equations (13)–(14)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)
''')
(P/f'candidates/items/{L}.md').write_text(head(L,'lemma','Standard client dissimilarity implies the gap form with unchanged parameters',[D,'lem-l-smoothness-descent-inequality','lem-finite-sum-gradient-is-average','thm-cauchy-schwarz-and-the-euclidean-norm','def-euclidean-inner-product'],'ai-altered')+r'''proof_strategy: direct
---

## Statement

Let $N,d\ge1$ be positive integers, let $\beta>0$, and let
$f_i:\mathbb R^d\to\mathbb R$ be differentiable with $\beta$-Lipschitz
gradients. Put $f=N^{-1}\sum_i f_i$, and suppose $f(x)\ge f^\star$ for
all $x$, where $f^\star\in\mathbb R$ is finite. Then
$$ \|\nabla f(x)\|_2^2\le2\beta(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
Consequently, if the clients satisfy standard $(G,B)$-bounded gradient
dissimilarity, with $G\ge0$ and $B\ge1$, they satisfy the gap-form condition
with exactly the same $G,B,\beta,f^\star$:
$$ \frac1N\sum_i\|\nabla f_i(x)\|_2^2\le G^2+2\beta B^2(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
No convexity or attainment of the lower bound is required for this implication.

## Statement references

[[def-bounded-client-gradient-dissimilarity]]

[Karimireddy et al., SCAFFOLD, Appendix D.1, equations (13)–(14)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The differentiable client functions, common smoothness constant,
finite lower bound and, for the consequence, the standard condition in the Statement.

[F1] [[lem-finite-sum-gradient-is-average]]: $\nabla f=N^{-1}\sum_i\nabla f_i$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] and [[def-euclidean-inner-product]]: Euclidean norms satisfy the triangle inequality, positive homogeneity, and $\|v\|_2^2=\langle v,v\rangle$.

[F3] [[lem-l-smoothness-descent-inequality]]: a continuously differentiable function with $\beta$-Lipschitz gradient satisfies $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(\beta/2)\|y-x\|_2^2$.

[F4] [[def-bounded-client-gradient-dissimilarity]]: standard dissimilarity bounds the population second moment by $G^2+B^2\|\nabla f(x)\|_2^2$.

## Proof

1.1 By [F1], $\nabla f(u)-\nabla f(v)=N^{-1}\sum_i(\nabla f_i(u)-\nabla f_i(v))$. The triangle inequality and homogeneity in [F2] imply $\|\nabla f(u)-\nabla f(v)\|_2\le N^{-1}\sum_i\beta\|u-v\|_2=\beta\|u-v\|_2$. Thus $f$ is continuously differentiable and has $\beta$-Lipschitz gradient, as required by [F3]. [F1, F2, given, algebra]

1.2 Fix $x$ and set $y=x-\beta^{-1}\nabla f(x)$. By [F3] and the finite global lower bound, $f^\star\le f(y)\le f(x)-\beta^{-1}\|\nabla f(x)\|_2^2+(2\beta)^{-1}\|\nabla f(x)\|_2^2=f(x)-(2\beta)^{-1}\|\nabla f(x)\|_2^2$. Rearrangement proves the first displayed inequality. The point $y$ lies in the domain $\mathbb R^d$; the use of $\beta^{-1}$ is valid because $\beta>0$. [F2, F3, step 1.1, given, construct, algebra]

2.1 Multiply step 1.2 by the nonnegative $B^2$ and substitute it into [F4]. This gives the asserted gap form, with no enlargement of $G$ or $B$ and the factor exactly $2\beta$. [F4, step 1.2, given, algebra] ∎

## Remarks

The reverse implication with the same parameters need not hold, even for
strongly convex clients. For example, on $\mathbb R$ take
$f_1(x)=x^2/2$ and $f_2(x)=3x^2/2$. Their equal-client mean is $f(x)=x^2$,
its minimum is $0$, and both clients are $1$-strongly convex and
$3$-smooth. The population gradient second moment is $5x^2$, while
$\|\nabla f(x)\|_2^2=4x^2$. The gap form holds with $G=0,B=1,\beta=3$
because $5x^2\le6x^2$, whereas the standard form with the same $G,B$
would require $5x^2\le4x^2$. Keeping the gap branch therefore retains
instances beyond the same-parameter standard condition.
''')
ops=[]
for id in seeds:
 old=(P/f'before/items/{id}.md').read_text();new=old
 # Preserve the entire original gap display. Add an explicit alternative afterward.
 if id=='lem-fedavg-one-round-progress':
  anchor=r'$$ \frac1N\sum_i\|\nabla f_i(z)\|_2^2 \le G^2+2\beta B^2(f(z)-f^\star) \quad(z\in\mathbb R^d). $$'
 elif id=='lem-fedavg-local-drift':
  anchor=r'$$ \frac1N\sum_{i=1}^N\|\nabla f_i(z)\|_2^2 \le G^2+2\beta B^2(f(z)-f^\star). $$'
 else:
  anchor=r'$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2 \le G^2+2\beta B^2(f(x)-f^\star) \quad(x\in\mathbb R^d). $$'
 addition=r'''
Alternatively, assume the standard $(G,B)$-bounded gradient-dissimilarity condition
$$ \frac1N\sum_i\|\nabla f_i(z)\|_2^2\le G^2+B^2\|\nabla f(z)\|_2^2 \quad(z\in\mathbb R^d). $$
Either assumption gives all the conclusions below with the same $G,B$ and
stepsize restrictions.
'''.rstrip()
 assert old.count(anchor)==1
 changes=[(anchor,anchor+addition),('deps:\n','deps:\n  - '+D+'\n  - '+L+'\n')]
 # A logical reference outside the uninterrupted Statement, plus one short reduction before the unchanged proof.
 sr='## Statement references\n'
 changes.append((sr,sr+'\n[['+D+']]\n\n[['+L+']]\n'))
 fact='[A1]'
 num={'lem-fedavg-one-round-progress':'F10','lem-fedavg-local-drift':'F6','thm-fedavg-under-gradient-dissimilarity':'F9'}[id]
 reduction=f'[{num}] [[{L}]]: under the stated common smoothness and attained finite minimum, the standard condition implies the displayed gap form with unchanged $G,B$.\n\n'
 changes.append((fact,reduction+fact))
 proof='## Proof\n\n'
 changes.append((proof,proof+f'In the standard-condition branch, [{num}] first supplies the gap-form\nassumption with the same parameters. In the original gap-form branch it is\nalready assumed. The following argument therefore covers both branches.\n\n'))
 for a,b in changes:
  assert new.count(a)==1,(id,a,new.count(a))
  new=new.replace(a,b,1)
  ops.append({'path':f'items/{id}.md','old':a,'new':b,'expected_count':1})
 # Let the one explicit proof reduction be checkable as a numbered step, avoiding untagged logical reliance.
 (P/f'candidates/items/{id}.md').write_text(new)
(P/'operations.json').write_text(json.dumps(ops,indent=2)+'\n')
