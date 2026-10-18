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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

1.1 On an overlap, write $J^a_i=\partial y^a/\partial x^i$. By [F2], $\partial_{x^i}f=J^a_i\partial_{y^a}f$ and likewise for $g$. Then [F1] gives $$\pi_x^{ij}(\partial_{x^i}f)(\partial_{x^j}g) =\pi_x^{ij}J^a_iJ^b_j(\partial_{y^a}f)(\partial_{y^b}g) =\pi_y^{ab}(\partial_{y^a}f)(\partial_{y^b}g),$$ so the local bracket is independent of the chart. Skew-symmetry and real-bilinearity follow from $\pi^{ij}=-\pi^{ji}$ and the coordinate formula. [given, F1, F2, algebra]

2.1 The coordinate product rule gives $\{f,gh\}_{\pi}=\pi^{ij}f_i(g_jh+gh_j) =\{f,g\}_{\pi}h+g\{f,h\}_{\pi}$. Skew-symmetry gives the derivation rule in the first entry as well. Hence the bracket is a biderivation. [F1, step 1.1, algebra]

2.2 In a chart, expand the cyclic Jacobiator $\{f,\{g,h\}_{\pi}\}_{\pi}+\{g,\{h,f\}_{\pi}\}_{\pi} +\{h,\{f,g\}_{\pi}\}_{\pi}$. Its first-derivative terms are $J^{ijk}f_i g_j h_k$. The second-derivative terms cancel in pairs: the terms with $g_{\ell j}$ have coefficients $\pi^{i\ell}\pi^{jk}$ and $\pi^{k\ell}\pi^{ij}$, which cancel after interchanging $j,\ell$ in the second term and using skew-symmetry; the terms with $h_{\ell k}$ cancel after interchanging $\ell,k$; the terms with $f_{\ell i}$ cancel after interchanging $\ell,i$. Thus the displayed Jacobiator formula holds for all smooth $f,g,h$. [F1, step 1.1, algebra]

3.1 If every $J^{ijk}$ vanishes, step 2.2 makes every local Jacobiator zero, so the glued bracket on $C^\infty(M,\mathbb R)$ satisfies Jacobi. Conversely, assume that global bracket satisfies Jacobi. Fix a point $p$ in a chart $x:U\to x(U)\subseteq\mathbb R^n$ and indices $i,j,k$. Choose $0<r<R$ with the closed coordinate ball of radius $R$ about $x(p)$ contained in $x(U)$. Define $\theta(t)=0$ for $t\leq0$ and $\theta(t)=e^{-1/t}$ for $t>0$, and put
$$\chi(q):=\frac{\theta(R^2-\lVert q-x(p)\rVert^2)}{\theta(R^2-\lVert q-x(p)\rVert^2)+\theta(\lVert q-x(p)\rVert^2-r^2)}.$$
The function $\theta$ is smooth at $0$ because all its right derivatives there tend to zero, and the denominator defining $\chi$ is everywhere positive. Thus $\chi$ is smooth, equals $1$ near $x(p)$, and vanishes outside the closed ball, which is compactly contained in $x(U)$. The functions $f,g,h$ defined on $U$ by $(\chi\circ x)x^i,(\chi\circ x)x^j,(\chi\circ x)x^k$ and extended by zero outside $U$ are therefore smooth global functions and agree with the corresponding coordinates near $p$. By step 2.2 their global Jacobiator at $p$ is $J^{ijk}(p)$, so global Jacobi forces $J^{ijk}(p)=0$. Since $p$ and the indices were arbitrary, every coefficient vanishes in every chart. The Jacobiator is formed from the chart-independent bracket of step 1.1, so the criterion is coordinate-independent. By [F3], the Schouten self-bracket vanishes exactly when these coefficients vanish, since $2$ is invertible over $\mathbb R$. This proves the claimed Poisson and Schouten criteria and justifies the bracket in [[def-general-poisson-bivector-and-bracket]]. [given, F1, F3, step 1.1, step 2.2, algebra] ∎
