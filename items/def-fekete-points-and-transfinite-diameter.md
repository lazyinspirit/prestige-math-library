---
id: def-fekete-points-and-transfinite-diameter
kind: definition
title: "Fekete points and the transfinite diameter of a compact set"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-polynomial-degree-and-monic
  - def-logarithmic-capacity-compact-set
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-finite-products-of-compact-spaces
  - thm-extreme-value-metric
  - thm-product-universal-property
  - def-product-topology
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-complex-conjugation-and-modulus-laws
  - thm-nth-roots-exist
  - thm-infimum-property
  - def-infimum
  - def-vandermonde-polynomial
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Fekete points and the transfinite diameter, printed pp. 167–169"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, Fekete points and the transfinite diameter"
verification:
  precheck: n/a
---

## Definition

Let $K\subseteq\mathbb C$ be compact and nonempty, let $n\ge2$ be an integer, and
write $K^n$ for the $n$-fold product with the product topology. For
$z=(z_1,\dots,z_n)\in K^n$ set

$$\Delta_n(z):=\prod_{1\le i<j\le n}(z_i-z_j),\qquad D_n(z):=|\Delta_n(z)|=\prod_{1\le i<j\le n}|z_i-z_j|\in[0,\infty).$$

The formula for $\Delta_n$ is the Vandermonde product, whose polynomial form in
$n$ indeterminates is [[def-vandermonde-polynomial]]; only the numerical
function $D_n$ on $K^n$ is used here. Each factor $(z_1,\dots,z_n)\mapsto z_i-z_j$
is continuous: the projections are continuous for the product topology
([[thm-product-universal-property]], [[def-product-topology]]), and complex
subtraction is continuous since
$|(z-w)-(z_0-w_0)|\le|z-z_0|+|w-w_0|$
([[lem-complex-conjugation-and-modulus-laws]]). Finite products and the modulus
preserve continuity
([[lem-algebra-of-continuous-real-maps-on-a-space]],
[[lem-complex-conjugation-and-modulus-laws]]); the product $K^n$ of finitely
many compact spaces is compact
([[thm-finite-products-of-compact-spaces]]), and $K^n\ne\varnothing$. Hence
$D_n$ and the composition

$$(z_1,\dots,z_n)\longmapsto D_n(z)^{2/[n(n-1)]}$$

attain greatest values on $K^n$
([[thm-extreme-value-metric]]). The $n$-th **Fekete diameter** of $K$ is

$$\delta_n(K):=\max_{(z_1,\dots,z_n)\in K^n}D_n(z_1,\dots,z_n)^{2/[n(n-1)]}\in[0,\infty),$$

equivalently $\delta_n(K)=\bigl(\max_{K^n}D_n\bigr)^{2/[n(n-1)]}$, because
$t\mapsto t^{2/[n(n-1)]}$ is increasing on $[0,\infty)$ and the root is the
nonnegative one ([[thm-nth-roots-exist]]). The exponent
$2/[n(n-1)]=1/\binom n2$ is the reciprocal of the number of unordered pairs, so
that $\delta_n$ scales like a length. A tuple
$z\in K^n$ at which the maximum is attained is an $n$-point **Fekete tuple** of
$K$, and its entries $z_1,\dots,z_n$ are $n$-point **Fekete points**.

To a Fekete tuple $z$ one associates its **monic Fekete polynomial**

$$F_n(Z):=\prod_{j=1}^n(Z-z_j),$$

a monic polynomial of degree $n$ in the conventions of
[[def-complex-polynomial-degree-and-monic]]: each factor $Z-z_j$ is monic of
degree $1$, and degrees add and leading coefficients multiply under multiplication over
the integral domain $\mathbb C$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]),
by induction on $n$.

The **transfinite diameter** of $K$ is

$$\tau(K):=\inf_{n\ge2}\delta_n(K)\in[0,\infty),$$

an infimum over a nonempty set of nonnegative reals, hence a well-defined real
number ([[thm-infimum-property]], [[def-infimum]]). For the empty set one uses
the separate convention $\tau(\varnothing):=0$. Whether the sequence
$(\delta_n(K))_{n\ge2}$ is nonincreasing, and whether $\tau(K)$ is its limit, is
not assumed in the definition.

## Remarks

**Fekete tuples exist but are not unique.** The maximum is attained by
[[thm-extreme-value-metric]], so every nonempty compact $K$ has at least one
$n$-point Fekete tuple for every $n\ge2$; no uniqueness is claimed, and no
tuple is selected by the definition. The quantity $D_n$ is unchanged by
permuting the entries, since a permutation permutes the factors
$|z_i-z_j|$, so every permutation of a Fekete tuple is again one, and
$\delta_n(K)$ is order-independent.

**Sign and positivity.** $D_n\ge0$ always, and $\delta_n(K)>0$ holds exactly
when $K$ has at least $n$ points: with $n$ distinct points of $K$ the product
is positive, while a tuple with two equal entries has $D_n=0$. In particular
$\delta_2(K)$ is the diameter of $K$, the exponent $2/[2\cdot1]=1$ recovering
the unnormalized maximum of $|z_1-z_2|$.

**Scaling.** If $t\in\mathbb C\setminus\{0\}$ and $tK=\{tz:z\in K\}$, then
$D_n(tz_1,\dots,tz_n)=|t|^{\binom n2}D_n(z_1,\dots,z_n)$ and
$\delta_n(tK)=|t|\,\delta_n(K)$: the normalization by the number of pairs is
exactly what makes the $n$-th Fekete diameter a length. Consequently
$\tau(tK)=|t|\,\tau(K)$ as well.

**Relation to the logarithmic capacity.** The transfinite diameter is a purely
combinatorial size functional, defined from extremal configurations of points,
whereas the logarithmic capacity of [[def-logarithmic-capacity-compact-set]] is
defined variationally from a minimum-energy problem over probability measures.
The definition here asserts no relation between the two; any comparison is
proved later.

**Choice.** No choice principle is used: the extremal tuple is supplied by the
extreme-value theorem for a continuous function on a nonempty compact space, the
product of finitely many compact spaces is compact in ZF, and the infimum over
$n\ge2$ is a set-theoretic construction on a fixed set of reals.
