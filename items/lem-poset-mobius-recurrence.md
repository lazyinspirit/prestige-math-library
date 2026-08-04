---
id: lem-poset-mobius-recurrence
kind: lemma
title: "The Möbius recurrence: $\\mu_P(x,x)=1$ and both interval sums of $\\mu_P$ vanish when $x<y$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poset-mobius-function, def-incidence-algebra-and-convolution, def-delta-and-zeta-incidence-functions, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

For a locally finite poset $P$ and $x\le y$,

$$\mu_P(x,x)=1,$$

and, when $x<y$,

$$\sum_{x\le z\le y}\mu_P(x,z)=0,\qquad \sum_{x\le z\le y}\mu_P(z,y)=0.$$

Equivalently, off the diagonal,

$$\mu_P(x,y)=-\sum_{x\le z<y}\mu_P(x,z)=-\sum_{x<z\le y}\mu_P(z,y).$$

Either recurrence together with the diagonal values uniquely determines $\mu_P$ interval by interval.

## Facts & Assumptions

**Given:** A locally finite poset $P$ and comparable elements $x\le y$.

[F1] $\mu_P*\zeta=\delta=\zeta*\mu_P$ ([[def-poset-mobius-function]]).

[F2] Convolution is the finite interval sum, $\zeta$ is constantly $1$, and $\delta$ is $1$ on the diagonal and $0$ off it ([[def-incidence-algebra-and-convolution]], [[def-delta-and-zeta-incidence-functions]], [[def-finite-sum-in-a-commutative-monoid]]).

## Proof

**Proof technique:** direct.

1.1 Evaluating either inverse equation at $(x,x)$ gives $\mu_P(x,x)=1$. [F1, F2]

1.2 Evaluating $\mu_P*\zeta=\delta$ at $x<y$ gives $\sum_{x\le z\le y}\mu_P(x,z)=0$. [F1, F2]

1.3 Evaluating $\zeta*\mu_P=\delta$ at $x<y$ gives $\sum_{x\le z\le y}\mu_P(z,y)=0$. [F1, F2]

2.1 Isolating the term $z=y$ in step 1.2 and the term $z=x$ in step 1.3 yields the two displayed recursive formulas. [step 1.2, step 1.3, algebra]

3.1 Each right-hand side uses only proper subintervals, so induction on the finite cardinality of $[x,y]$ shows that either recurrence and the diagonal clause determine at most one function. [step 1.1, step 2.1]

4.1 Steps 1.1 through 3.1 prove both sums, both recurrences and uniqueness. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
