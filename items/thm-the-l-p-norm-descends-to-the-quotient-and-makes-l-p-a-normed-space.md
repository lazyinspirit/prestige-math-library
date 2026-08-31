---
id: thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
kind: theorem
title: "The $L^p$ norm descends to the quotient and makes $L^p$ a normed space for $1 \\le p \\le \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-norm-and-normed-space, prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class, thm-minkowski-inequality-for-integrals, prop-essential-supremum-is-attained-as-the-least-essential-bound, prop-quotient-vector-space-operations-and-projection]
proof_strategy: "Use the previous proposition to identify the null functions as the kernel of the seminorm. Hence the seminorm is constant on cosets and separates points on the quotient, while Minkowski and homogeneity descend from representatives."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.17 and Theorem 7.18"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Sections 7.1 and 7.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space.

1. For $1\le p<\infty$, the rule
   $$\|[f]\|_p:=\|f\|_p\qquad([f]\in L^p(\mu))$$
   is well defined on the quotient classes.
2. For $p=\infty$, the rule
   $$\|[f]\|_\infty:=\|f\|_\infty\qquad([f]\in L^\infty(\mu))$$
   is well defined.
3. In either case, with the quotient vector-space operations of
   [[prop-quotient-vector-space-operations-and-projection]], the resulting pair
   $(L^p(\mu),\|\cdot\|_p)$ is a normed space in the sense of
   [[def-norm-and-normed-space]].

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and an exponent $1\le p\le\infty$.

[L1] The quotient spaces $L^p(\mu)$ are those of
[[def-l-p-space-as-a-quotient-by-null-functions]].

[L2] The null representatives are exactly the zero-seminorm class
([[prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class]]).

[L3] Minkowski's inequality supplies the triangle inequality for the
representative seminorms ([[thm-minkowski-inequality-for-integrals]]).

[L4] The essential supremum is an attained essential bound
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L5] The quotient operations are well defined and produce a vector space
([[prop-quotient-vector-space-operations-and-projection]]).

[L6] A normed space means a real vector space with separation, homogeneity, and
triangle inequality ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** Use the previous proposition to identify the null functions
as the kernel of the seminorm. Hence the seminorm is constant on cosets and
separates points on the quotient, while Minkowski and homogeneity descend from
representatives.

1.1 Suppose first $1\le p<\infty$ and $f-g\in\mathcal N_p(\mu)$. Then $\|f-g\|_p=0$. Applying Minkowski twice yields [L2, L3]
$$\|f\|_p\le\|g\|_p+\|f-g\|_p=\|g\|_p,\qquad \|g\|_p\le\|f\|_p+\|f-g\|_p=\|f\|_p,$$
so $\|f\|_p=\|g\|_p$. Thus $\|[f]\|_p:=\|f\|_p$ is well defined.

1.2 For $p=\infty$, if $f-g\in\mathcal N_\infty(\mu)$ then $f=g$ almost everywhere. Any essential bound for $f$ is therefore an essential bound for $g$ and conversely, so $\|f\|_\infty=\|g\|_\infty$. Thus $\|[f]\|_\infty:=\|f\|_\infty$ is well defined. [L2, L4]

1.3 For separation, $\|[f]\|_p=0$ means $\|f\|_p=0$, and then [L2] gives $f\in\mathcal N_p(\mu)$ or $\mathcal N_\infty(\mu)$. Hence $[f]=[0]$. The converse is immediate because the zero representative has norm $0$. [L2]

2.1 By [L1] and [L5], each quotient $L^p(\mu)$ is already a real vector space. The representative functionals are homogeneous, and [L3] supplies the triangle inequality on representatives; steps 1.1 and 1.2 show that these formulas depend only on the class, so homogeneity and triangle inequality descend to the quotient. [step 1.1, step 1.2, L1, L3, L5]

3.1 Steps 2.1 and 1.3 verify the three norm axioms named in [L6]. Therefore $(L^p(\mu),\|\cdot\|_p)$ is a normed space for every $1\le p\le\infty$. [step 2.1, step 1.3, L6] ∎
