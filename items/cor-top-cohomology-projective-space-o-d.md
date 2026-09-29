---
id: cor-top-cohomology-projective-space-o-d
kind: corollary
title: "Top cohomology of projective twists"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
  - def-axiom-of-choice
  - def-binomial-coefficient
  - def-commutative-ring
  - def-direct-sum-of-a-family-of-modules
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.8.2 (Tag 01XV)"
      url: "https://stacks.math.columbia.edu/tag/01XV"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cited theorem
([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$
([[def-commutative-ring]]), let $n\ge0$, let $d\in\mathbb Z$ and let
$\mathcal O_X(d)$ be the twisting sheaf on $X=\mathbb P^n_A$
([[def-relative-projective-space-standard-charts]], [[def-twisting-sheaf-proj]]).
If $n\ge1$, then $H^n(X,\mathcal O_X(d))$ is the free $A$-module on the Laurent monomials
$x_0^{e_0}\cdots x_n^{e_n}$ with $e_i<0$ for every $i$ and $\sum_ie_i=d$. It is
zero for $d>-n-1$, and for $d\le-n-1$ it has rank
$\binom{-d-1}{n}$ ([[def-binomial-coefficient]]) whenever $A\ne0$, while it is
the zero module for $A=0$. For
$n=0$ the top group is $H^0(\mathbb P^0_A,\mathcal O(d))\cong A$ for every
$d\in\mathbb Z$.

## Facts & Assumptions

**Given:** The Axiom of Choice as inherited, a commutative ring $A$ with $1$, integers $n\ge0$ and $d$, and the twisting sheaf $\mathcal O(d)$ on $\mathbb P^n_A$.

[F1] Cohomology of twists on projective space: for every commutative ring $A$,
every $n\ge1$ and every $d$, $H^n(\mathbb P^n_A,\mathcal O(d))$ is the free
$A$-module on the Laurent monomials $x_0^{e_0}\cdots x_n^{e_n}$ with $e_i<0$
for all $i$ and $\sum_ie_i=d$, and it is nonzero precisely when $d\le-n-1$ and
$A\ne0$ (for $n>0$); for $n=0$, $H^0(\mathbb P^0_A,\mathcal O(d))\cong A$ for
every $d$.
([[thm-cohomology-projective-space-twisting-sheaves]])

[F2] Compositions with positive parts: for integers $N\ge1$ and $k\ge1$ the
number of compositions of $N$ into exactly $k$ positive parts is
$\binom{N-1}{k-1}$, and there are none when $k>N$.
([[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]])

[F3] The free module over a ring $R$ on an indexed set is the direct sum of
copies of $R$ indexed by that set; when $R=0$ every such direct sum is the zero
module, whatever the index set.
([[def-direct-sum-of-a-family-of-modules]])

## Proof

**Proof technique:** direct: read the top group off the full computation and count its stated monomial basis by converting the all-negative exponent vectors into compositions of $-d$ into $n+1$ positive parts.

1.1 For $n\ge1$ apply [F1]: $H^n(\mathbb P^n_A,\mathcal O(d))$ is the free $A$-module on the Laurent monomials $x^e$ with $e_i<0$ for all $i$ and $\sum_ie_i=d$. This is the first assertion. [F1]

1.2 The all-negative exponent vectors correspond bijectively to tuples $g_i=-e_i\ge1$ with $\sum_ig_i=-d$, and these are the compositions of $-d$ into exactly $n+1$ positive parts when $-d\ge1$. If $d>-n-1$, then $-d<n+1$. For $-d\le0$, a sum of positive $g_i$ cannot equal $-d$; for $1\le-d<n+1$, the no-compositions clause of [F2] applies with $N=-d$ and $k=n+1$. Thus in either case the module is zero. If $d\le-n-1$, then $-d\ge n+1\ge2\ge1$ and [F2] with $N=-d$ and $k=n+1$ counts the tuples as $\binom{-d-1}{n}$, so the free module has that rank when $A\ne0$ and is the zero module when $A=0$ by [F3]. [F2, F3, algebra]

1.3 For $n=0$, [F1] gives $H^0(\mathbb P^0_A,\mathcal O(d))\cong A$ for every $d$; the top group in dimension zero is $H^0$, so the last assertion follows. [F1]

2.1 Boundaries and choice accounting. The endpoint $d=-n-1$ is the first value with a basis monomial, namely $g_i=1$ for all $i$ and hence $e_i=-1$; for $d=-n$ one has $k=n+1>n=-d$, so by the second clause of [F2] there is no composition and the group is zero. The case $d=0$ and all positive $d$ give the zero group. The zero ring $A=0$ is handled by [F3]. The Axiom of Choice is inherited from [F1] and nothing further is selected. [F1, F2, F3] ∎
