---
id: lem-incidence-convolution-inverses-by-recursion
kind: lemma
title: "If every diagonal value of an incidence function is a unit, recursive interval formulas construct both a left and a right convolution inverse"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-incidence-functions-form-a-ring, def-poset-interval-and-finiteness-conditions, thm-strong-induction, def-finite-cardinality, lem-ring-units-form-a-group, def-finite-sum-in-a-commutative-monoid, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "Y. Guan and Y. Zhang, Additive Biderivations of Incidence Algebras, §2.1"
      url: "https://arxiv.org/abs/2412.18049"
    - title: "Hameister–Rao–Simpson, Proposition 2.8"
      url: "https://www-users.cse.umn.edu/~reiner/REU/HameisterRaoSimpson2017.pdf"
pipeline_run: null
---

## Statement

Let $P$ be locally finite, let $R$ be a commutative ring, and let $f\in I(P,R)$. Suppose $f(x,x)$ is a unit of $R$ for every $x\in P$. Then the recursive formulas

$$g(x,x)=f(x,x)^{-1},\qquad g(x,y)=-f(x,x)^{-1}\sum_{x<z\le y}f(x,z)g(z,y)\quad(x<y)$$

and

$$h(x,x)=f(x,x)^{-1},\qquad h(x,y)=-\left(\sum_{x\le z<y}h(x,z)f(z,y)\right)f(y,y)^{-1}\quad(x<y)$$

define incidence functions satisfying $f*g=\delta$ and $h*f=\delta$. They coincide, so their common value is a two-sided convolution inverse of $f$.

## Facts & Assumptions

**Given:** A locally finite poset $P$, a commutative ring $R$, and an incidence function $f$ whose diagonal values are units.

[L1] Strong induction: if a property at $n$ follows from its truth at every smaller natural, it holds for every natural ([[thm-strong-induction]]).

[F1] Every interval $[x,y]$ is finite; if $x<z\le y$, then $[z,y]$ is a proper subset of $[x,y]$, and if $x\le z<y$, then $[x,z]$ is a proper subset ([[def-poset-interval-and-finiteness-conditions]]).

[L2] A proper subset of a finite set has strictly smaller finite cardinality ([[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

[L3] A unit of a ring has a unique inverse, and the units form a group ([[lem-ring-units-form-a-group]]).

[L4] $I(P,R)$ is a ring with identity $\delta$, so convolution is associative ([[thm-incidence-functions-form-a-ring]]).

[F2] Finite sums over the displayed subintervals are defined in the additive commutative monoid of $R$ ([[def-finite-sum-in-a-commutative-monoid]]).

## Proof

**Proof technique:** induction.

1.1 On a diagonal interval the equations $(f*g)(x,x)=1_R$ and $(h*f)(x,x)=1_R$ force $g(x,x)=h(x,x)=f(x,x)^{-1}$ by [L3]. [base, L3]

1.2 Fix a natural $n$ and assume that $g$ and $h$ have been uniquely defined on every interval of cardinality less than $n$, with the required convolution equations there. [ih]

2.1 Let $x<y$ with $|[x,y]|=n$. Every $g(z,y)$ occurring in $\sum_{x<z\le y}f(x,z)g(z,y)$ belongs to the proper subinterval $[z,y]$, and every $h(x,z)$ in $\sum_{x\le z<y}h(x,z)f(z,y)$ belongs to the proper subinterval $[x,z]$; their cardinalities are less than $n$ by [F1] and [L2]. [step 1.2, F1, L2]

3.1 The displayed formulas in the Statement therefore assign unique values to $g(x,y)$ and $h(x,y)$, since the sums are finite and both diagonal inverses are unique. [step 2.1, F2, L3, construct]

4.1 Isolating the term $z=x$ in convolution gives $(f*g)(x,y)=f(x,x)g(x,y)+\sum_{x<z\le y}f(x,z)g(z,y)=0_R$ by the defining formula for $g(x,y)$. [step 3.1, L3]

4.2 Isolating the term $z=y$ gives $(h*f)(x,y)=\sum_{x\le z<y}h(x,z)f(z,y)+h(x,y)f(y,y)=0_R$ by the defining formula for $h(x,y)$. [step 3.1, L3]

5.1 Steps 1.1 through 4.2, with strong induction on $|[x,y]|$, define $g$ and $h$ on every comparable pair and give $f*g=\delta$ and $h*f=\delta$. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2, L1, discharge-induction]

6.1 Associativity and the identity law in [L4] now give $h=h*\delta=h*(f*g)=(h*f)*g=\delta*g=g$. [step 5.1, L4]

7.1 Hence the two recursive one-sided inverses coincide and their common value is a two-sided convolution inverse of $f$. [step 5.1, step 6.1, discharge-induction] ∎
