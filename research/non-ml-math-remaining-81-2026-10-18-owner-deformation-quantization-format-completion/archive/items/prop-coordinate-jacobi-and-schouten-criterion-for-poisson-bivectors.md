---
id: prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors
kind: proposition
title: Coordinate Jacobi and Schouten self-bracket criterion for Poisson bivectors
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-general-poisson-bivector-and-bracket
  - thm-chain-rule-for-differentials-of-smooth-maps
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §3.1.1, Exercise 3.1.6 and §4.2.4.1 (PDF pp. 75–76 and 96)
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.2, first-order Poisson structures (PDF pp. 2–3)
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Let $M$ and $\pi$ be as in
[[def-general-poisson-bivector-and-bracket]]. The local formulas
$$\{f,g\}_{\pi,x}=\pi_x^{ij}(\partial_i f)(\partial_j g)$$
agree on coordinate overlaps and define a real Poisson-algebra bracket on
$C^\infty(M,\mathbb R)$ exactly when, in every coordinate chart,
$$J^{ijk}:=\pi^{i\ell}\partial_\ell\pi^{jk} +\pi^{j\ell}\partial_\ell\pi^{ki} +\pi^{k\ell}\partial_\ell\pi^{ij}=0.$$
With the convention $\pi=\tfrac12\pi^{ij}\partial_i\wedge\partial_j$,
the Schouten–Nijenhuis self-bracket has components
$[\pi,\pi]_{SN}^{ijk}=2J^{ijk}$. Thus the Jacobi condition is equivalently
$[\pi,\pi]_{SN}=0$. No nondegeneracy or choice axiom is used.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and skew coordinate arrays $\pi_x^{ij}$
with the bivector transition law in [F1].

[F1] [[def-general-poisson-bivector-and-bracket]]: on a chart,
$\{f,g\}_{\pi,x}=\pi_x^{ij}(\partial_i f)(\partial_j g)$, and under a
coordinate change $y=y(x)$,
$\pi_y^{ab}= (\partial_i y^a)(\partial_j y^b)\pi_x^{ij}$.

[F2] [[thm-chain-rule-for-differentials-of-smooth-maps]]: the differential of
a composite of smooth maps is the composite of their differentials; in
coordinates this is the ordinary Jacobian chain rule.

[F3] [[def-general-poisson-bivector-and-bracket]]: with
$\pi=\tfrac12\pi^{ij}\partial_i\wedge\partial_j$, the Schouten
self-bracket has local components $[\pi,\pi]_{SN}^{ijk}=2J^{ijk}$.

## Proof

1.1 On an overlap, write $J^a_i=\partial y^a/\partial x^i$. By [F2],
$\partial_{x^i}f=J^a_i\partial_{y^a}f$ and likewise for $g$. Then [F1]
gives
$$\pi_x^{ij}(\partial_{x^i}f)(\partial_{x^j}g) =\pi_x^{ij}J^a_iJ^b_j(\partial_{y^a}f)(\partial_{y^b}g) =\pi_y^{ab}(\partial_{y^a}f)(\partial_{y^b}g),$$
so the local bracket is independent of the chart. Skew-symmetry and
real-bilinearity follow from $\pi^{ij}=-\pi^{ji}$ and the coordinate
formula. [given, F1, F2, algebra]

1.2 The coordinate product rule gives
$\{f,gh\}_{\pi}=\pi^{ij}f_i(g_jh+gh_j)
=\{f,g\}_{\pi}h+g\{f,h\}_{\pi}$. Skew-symmetry gives the derivation rule
in the first entry as well. Hence the bracket is a biderivation. [F1, step 1.1, algebra]

2.1 In a chart, expand the cyclic Jacobiator
$\{f,\{g,h\}_{\pi}\}_{\pi}+\{g,\{h,f\}_{\pi}\}_{\pi}
+\{h,\{f,g\}_{\pi}\}_{\pi}$. Its first-derivative terms are
$J^{ijk}f_i g_j h_k$. The second-derivative terms cancel in pairs: the
terms with $g_{\ell j}$ have coefficients
$\pi^{i\ell}\pi^{jk}$ and $\pi^{k\ell}\pi^{ij}$, which cancel after
interchanging $j,\ell$ in the second term and using skew-symmetry; the
terms with $h_{\ell k}$ cancel after interchanging $\ell,k$; the terms
with $f_{\ell i}$ cancel after interchanging $\ell,i$. Thus the displayed
Jacobiator formula holds for all smooth $f,g,h$. [F1, step 1.1, algebra]

2.2 If every $J^{ijk}$ vanishes, step 2.1 makes every local Jacobiator
zero. Conversely, on a coordinate domain choose $f=x^i$, $g=x^j$, and
$h=x^k$; step 2.1 then makes the Jacobiator exactly $J^{ijk}$, so Jacobi
for all local functions forces every coefficient to vanish. The Jacobiator is
formed from the chart-independent bracket of step 1.1, so this zero condition
does not depend on the chosen chart. By [F3], the Schouten self-bracket
vanishes exactly when these coefficients vanish, since $2$ is invertible
over $\mathbb R$. This proves the claimed Poisson and Schouten criteria and
justifies the bracket in [[def-general-poisson-bivector-and-bracket]].
[given, F1, F3, step 1.1, step 2.1, algebra] ∎
