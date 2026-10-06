---
id: def-legendre-transform-of-a-hamiltonian
kind: definition
title: The Legendre transform of a finite-valued convex Hamiltonian
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-convex-and-strictly-convex-functions-on-euclidean-sets
- def-extended-reals
- lem-extended-reals-complete
- def-euclidean-inner-product
justified_by: []
aliases: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2 Section 4, Definition 2.11 and Remark 2.12, printed p. 61; Appendix, the characterization of the Legendre transform, printed pp. 246--247
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$ and let $H:\mathbb R^n\to\mathbb R$ be finite-valued. The
**Legendre transform** (convex conjugate) of $H$ is the function
$L:\mathbb R^n\to\overline{\mathbb R}$
([[def-extended-reals]]) defined by
$$L(v):=\sup_{p\in\mathbb R^n}\bigl(p\cdot v-H(p)\bigr),\qquad v\in\mathbb R^n,$$
the supremum being taken in $\overline{\mathbb R}$
([[lem-extended-reals-complete]]) and the inner product being the Euclidean one
([[def-euclidean-inner-product]]). The value $L(v)=+\infty$ is possible and is
not excluded.

In the biconjugate expressions $p\cdot v-(+\infty)$ the convention
$$p\cdot v-(+\infty):=-\infty$$
is adopted, so that the supremum defining the biconjugate
$L^*(p):=\sup_{v\in\mathbb R^n}\bigl(p\cdot v-L(v)\bigr)$ is an ordinary
supremum of a set in $\mathbb R\cup\{-\infty\}$ when the value $+\infty$
occurs: every $v$ with $L(v)=+\infty$ contributes the value $-\infty$ and can
be discarded.

When $H$ is convex
([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]), $L$ is the
convex conjugate used in the Hopf--Lax construction. For every finite-valued
$H$ the transform $L$ is convex and lower semicontinuous, being the pointwise
supremum of the affine functions $v\mapsto p\cdot v-H(p)$; no superlinearity,
differentiability, strict convexity, coercivity or smoothness of $H$ is
assumed at this point. The notation $H^*$ is used interchangeably with $L$.

## Remarks

- **Why the convention is recorded.** The supremum over $v\in\mathbb R^n$ in
  the biconjugate runs over all of $\mathbb R^n$ even when $L$ takes the value
  $+\infty$; the convention makes each such term $-\infty$, so those points
  neither enlarge nor obstruct the supremum, and
  $L^*(p)=\sup\{p\cdot v-L(v):v\in\mathbb R^n,\ L(v)<\infty\}$. This is the
  convention under which the biconjugacy lemma
  [[lem-finite-valued-convex-hamiltonian-equals-its-biconjugate]] is stated,
  and it is fixed here once for every later use.
- **Scope.** The transform is defined for every finite-valued $H$; convexity,
  lower semicontinuity and the affine-supremum representation are consequences
  of the definition, not hypotheses. The later Hopf--Lax regime adds
  superlinearity of $H$, which is a separate hypothesis and is what makes $L$
  real-valued; no choice principle occurs here.
