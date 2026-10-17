---
id: thm-local-finite-element-interpolation-estimates
kind: theorem
title: Local interpolation estimates on shape-regular affine meshes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-axiom-of-choice, def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, lem-unisolvent-dofs-define-reference-interpolant, lem-reference-polynomial-norm-equivalence, lem-shape-regular-affine-simplex-scaling, thm-bramble-hilbert-on-reference-simplex, thm-lagrange-point-evaluation-threshold-on-reference-simplex, lem-affine-pullback-weak-derivatives-and-scaling, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§§11.2 and 11.4, printed pp. 120–125: affine scaling and local interpolation estimates."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: bounded reference interpolation and Bramble–Hilbert scaling."
verification: {}
---

## Statement

Assume Countable Choice. Let $k\ge0$, $1\le p<\infty$, and let
$(\widehat S_d,\widehat P,\widehat\Sigma)$ be a reference finite element
whose polynomial space contains $\mathbb P_k$. Assume its degrees of
freedom are bounded on $W^{\ell,p}(\widehat S_d)$ for an integer
$\ell\ge1$, let $r,m\in\mathbb N_0$, and let $\widehat I$ be its
interpolant. Thus
$\widehat Iq=q$ for $q\in\mathbb P_k$. On a shape-regular affine mesh
as in [[def-matching-affine-simplicial-meshes]], for each cell $K$ with its
orientation-preserving reference map $F_K$ define
$$I_Kv=(\widehat I(v\circ F_K))\circ F_K^{-1}.$$
For every such cell, if $\ell\le r\le k+1$ and $0\le m\le r$, then for
$v\in W^{r,p}(K)$,
$$|v-I_Kv|_{W^{m,p}(K)}\le C h_K^{r-m}|v|_{W^{r,p}(K)}.$$
If $\ell>k+1$ and $0\le m\le k+1$, then for $v\in W^{\ell,p}(K)$,
$$|v-I_Kv|_{W^{m,p}(K)} \le C\sum_{n=k+1}^{\ell}h_K^{n-m}|v|_{W^{n,p}(K)}.$$
The constants are uniform over the mesh family and depend on the stated
reference element, exponents and shape-regularity bound. For Lagrange
elements in the existing mesh dimension range $d\ge2$, assume additionally
the Axiom of Choice for the automatic nodal-boundedness application. Then
[[thm-lagrange-point-evaluation-threshold-on-reference-simplex]] supplies
the boundedness hypothesis when $\ell>d/p$; unisolvence of a particular
node set remains a separate hypothesis.

## Facts & Assumptions

**Given:** A shape-regular affine simplex family, finite $p$, a unisolvent reference element, Countable Choice, and the stated degree-of-freedom boundedness on $W^{\ell,p}(\widehat S_d)$.

[F1] Unisolvent degrees of freedom define a linear interpolation operator that reproduces every polynomial in its finite-element space. ([[def-reference-finite-element-and-unisolvent-dofs]], [[lem-unisolvent-dofs-define-reference-interpolant]])

[F2] On the fixed reference polynomial space, every derivative norm is bounded by its coefficient or cell $L^p$ norm; hence bounded degrees of freedom give a bounded interpolant into every polynomial derivative norm. ([[lem-reference-polynomial-norm-equivalence]])

[F3] For real-valued $v$, Bramble–Hilbert supplies a polynomial $q$ of
degree at most $r-1$ with $\|v-q\|_{W^{m,p}}\le C|v|_{W^{r,p}}$ when
$m\le r$, and for $q\in\mathbb P_k$ with $v\in W^{\ell,p}$,
$\|v-q\|_{W^{\ell,p}}\le C\sum_{n=k+1}^{\ell}|v|_{W^{n,p}}$ when
$\ell>k+1$. ([[thm-bramble-hilbert-on-reference-simplex]])

[F4] Under affine pullback/pushforward, order-$s$ seminorms acquire $\|A\|^s|\det A|^{-1/p}$ or $\|A^{-1}\|^s|\det A|^{1/p}$ factors. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F5] Shape regularity gives $\|A_K\|\asymp h_K$, $\|A_K^{-1}\|\asymp h_K^{-1}$ and $\det A_K\asymp h_K^d$. ([[lem-shape-regular-affine-simplex-scaling]])

[F6] Under the additional Axiom of Choice and the existing dimension restriction $d\ge2$, Lagrange point evaluations are bounded when $\ell>d/p$. ([[thm-lagrange-point-evaluation-threshold-on-reference-simplex]]) The generic estimate takes bounded degrees of freedom as a hypothesis.

[F7] The Bramble–Hilbert supplier [F3] assumes Countable Choice through the reference Poincare–Wirtinger inequality. ([[def-countable-choice]])

[F8] For complex-valued Sobolev functions, real and imaginary parts and
their weak derivatives are taken componentwise; the pointwise inequalities
$|\operatorname{Re}z|,|\operatorname{Im}z|\le|z|\le
|\operatorname{Re}z|+|\operatorname{Im}z|$ combine the real-valued
Sobolev estimates into the corresponding complex-valued estimates, with at
most a fixed factor in the constant. ([[def-sobolev-space-wkp-and-its-norm]])

## Proof

1.1 On the reference cell, write $\widehat Iw$ as the finite sum of its degree-of-freedom values times the dual shape functions. The assumed boundedness of each functional and [F2] bound $|\widehat Iw|_{W^{m,p}}\le C\|w\|_{W^{\ell,p}}$. For any reproduced $q$, linearity gives $$\widehat v-\widehat I\widehat v =(\widehat v-q)-\widehat I(\widehat v-q),$$ so $$|\widehat v-\widehat I\widehat v|_{W^{m,p}} \le|\widehat v-q|_{W^{m,p}}+C\|\widehat v-q\|_{W^{\ell,p}}.$$ For the automatic Lagrange application, under the additional Axiom of Choice, $d\ge2$, and $\ell>d/p$, [F6] verifies nodal-functional boundedness. For the generic estimate, boundedness is the explicit hypothesis, so this additional choice assumption is not used. [F1, F2, F6, given]

2.1 If $\ell\le r\le k+1$ and $\widehat v$ is real-valued, choose the
Bramble–Hilbert polynomial $q\in\mathbb P_{r-1}\subseteq\mathbb P_k$ from
[F3]. If $\widehat v$ is complex-valued, apply the first clause of [F3] to
$\operatorname{Re}\widehat v$ and $\operatorname{Im}\widehat v$ separately,
obtaining $q_R,q_I\in\mathbb P_{r-1}$, and set $q=q_R+iq_I$. In either
case $q$ is reproduced by $\widehat I$. Since $m\le r$ and $\ell\le r$,
[F3] bounds both terms in step 1.1 for the real case; for the complex case,
[F8] combines the two real estimates and changes only the constant. Thus
$|\widehat v-\widehat I\widehat v|_{W^{m,p}}\le
C|\widehat v|_{W^{r,p}}$. [F3, F7, F8, step 1.1]

2.2 If $\ell>k+1$ and $\widehat v$ is real-valued, choose the
Bramble–Hilbert polynomial $q\in\mathbb P_k$ from [F3]. If $\widehat v$ is
complex-valued, apply the second clause of [F3] with $r=k+1$, $s=\ell$ to
its real and imaginary parts, obtaining $q_R,q_I\in\mathbb P_k$, and set
$q=q_R+iq_I$. In either case $q$ is reproduced by $\widehat I$. Then [F3]
bounds the $W^{\ell,p}$ norm of $\widehat v-q$ by
$C\sum_{n=k+1}^{\ell}|\widehat v|_{W^{n,p}}$; because $m\le k+1<\ell$,
the same controls its $W^{m,p}$ norm. For complex $\widehat v$, [F8]
combines the component estimates with at most a fixed change in $C$. Step
1.1 gives $$|\widehat v-\widehat I\widehat v|_{W^{m,p}} \le
C\sum_{n=k+1}^{\ell}|\widehat v|_{W^{n,p}}.$$ [F3, F7, F8, step 1.1]

3.1 For $\widehat v=v\circ F_K$, use [F4] to transform the physical error to the reference cell and the reference derivatives of $v$ back to the physical cell. The product of the two determinant factors cancels; the remaining matrix factors are bounded by $C\|A_K^{-1}\|^m\|A_K\|^r\le C h_K^{r-m}$ by [F5]. This gives the first physical estimate from step 2.1. [F4, F5, F7, step 2.1, algebra]

4.1 In the second case, apply the same transformation separately to each order $n$ in step 2.2. Its matrix factor is bounded by $C\|A_K^{-1}\|^m\|A_K\|^n\le C h_K^{n-m}$ by [F5]; summing over $k+1\le n\le\ell$ gives the second physical estimate. The constants in [F2]–[F7] are uniform over the fixed reference element and the shape-regular family, proving uniformity. [F2, F4, F5, F7, step 2.2, algebra] ∎
