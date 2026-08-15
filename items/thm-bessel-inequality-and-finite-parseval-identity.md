---
id: thm-bessel-inequality-and-finite-parseval-identity
kind: theorem
title: "Bessel's inequality for a finite orthonormal list and Parseval's identity for an orthonormal basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-vectors-sets-and-orthonormal-bases, prop-pythagorean-parallelogram-and-polarisation-identities, def-monoid-finite-product, lem-span-is-the-set-of-linear-combinations]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., results 6.24, 6.26, and 6.30'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

If $(e_0,\ldots,e_{r-1})$ is a finite orthonormal list and $v$ is any vector, then

$$\sum_{i<r}|\langle v,e_i\rangle|^2\le\lVert v\rVert^2.$$

Equality holds exactly when $v\in\operatorname{span}(e_0,\ldots,e_{r-1})$. If the list is an orthonormal basis, then for all $v,w$,

$$v=\sum_{i<r}\langle v,e_i\rangle e_i,\qquad \langle v,w\rangle=\sum_{i<r}\langle v,e_i\rangle\overline{\langle w,e_i\rangle},$$

and

$$\lVert v\rVert^2=\sum_{i<r}|\langle v,e_i\rangle|^2.$$

The empty-list case is included.

## Facts & Assumptions

**Given:** A finite orthonormal list $(e_i)_{i<r}$ and vectors $v,w$.

[L1] Orthonormality gives $\langle e_i,e_j\rangle=0$ for $i\ne j$ and $\langle e_i,e_i\rangle=1$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]).

[L2] Orthogonal vectors satisfy the Pythagorean identity ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

[L3] $\operatorname{span}(S)=L(S)$, the set of finite linear combinations $\sum_{i<n}\lambda_iv_i$ of elements of $S$ ([[lem-span-is-the-set-of-linear-combinations]]).

[L4] Finite sums include the empty sum, whose additive value is zero ([[def-monoid-finite-product]]).

## Proof

**Proof technique:** direct.

1.1 Put $p=\sum_{i<r}\langle v,e_i\rangle e_i$. For each $j<r$, [L1] gives $\langle v-p,e_j\rangle=0$, so $v-p$ is orthogonal to $p$. [L1, algebra]

2.1 By [L2], $\lVert v\rVert^2=\lVert p\rVert^2+\lVert v-p\rVert^2$. A second use of orthonormality gives $\lVert p\rVert^2=\sum_{i<r}|\langle v,e_i\rangle|^2$, proving Bessel's inequality. [step 1.1, L1, L2]

3.1 Equality holds in step 2.1 exactly when $\lVert v-p\rVert=0$, hence exactly when $v=p$. By [L3], this is exactly $v$ belonging to the listed span. [step 2.1, L3]

4.1 If the list is a basis, its span is $V$, so step 3.1 gives the coordinate expansion and the squared-length identity. Substitute the coordinate expansion of $v$ into $\langle v,w\rangle$ and use conjugate symmetry to obtain the displayed inner-product formula. [step 3.1, L1, algebra]

5.1 When $r=0$, [L4] makes every displayed sum zero; the list can be a basis only of the zero space, so all assertions remain valid. [L4] ∎
