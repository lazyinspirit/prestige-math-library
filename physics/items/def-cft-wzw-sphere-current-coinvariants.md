---
id: def-cft-wzw-sphere-current-coinvariants
kind: definition
title: Fixed-coordinate WZW sphere current coinvariants
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-wzw-insertion-data
  - def-untwisted-affine-central-extension
  - def-universal-affine-vacuum-module
  - lem-affine-vacuum-module-pbw-basis
  - def-axiom-of-choice
dependency_roles:
  def-cft-wzw-insertion-data: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-universal-affine-vacuum-module: mathematical-premise
  lem-affine-vacuum-module-pbw-basis: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: §§4.4.4–4.4.5, global current action and algebraic coinvariants.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §§1–5, WZW current action on sphere conformal blocks.
---

## Definition

Let $z_1,\ldots,z_n\in\mathbb C$ be distinct, use $t_i=z-z_i$ at each finite point and $t_\infty=1/z$ at infinity, and take insertions $M_i=L_k(\lambda_i)$ of def-cft-wzw-insertion-data together with the level-$k$ universal affine vacuum module $V^k(\mathfrak g)$ at infinity. Put
$
R_{\mathbf z}=\mathbb C[z,(z-z_1)^{-1},\ldots,(z-z_n)^{-1}],
$
the rational functions on $\mathbb P^1$ with poles only at the marked points and infinity. For $x\in\mathfrak g$ and $f\in R_{\mathbf z}$, expand $f(t)=\sum_m f_m t^m$ in each local coordinate and let $x\otimes f$ act on the algebraic tensor product $M_1\otimes\cdots\otimes M_n\otimes V^k(\mathfrak g)_\infty$ by the sum of the corresponding mode actions $\sum_m f_m x_m$. The **fixed-coordinate WZW sphere current coinvariant space** is the quotient by the linear span of these action vectors. Its algebraic dual is the space of linear functionals annihilating every global rational-current action.

This is a coordinate-dependent current-algebra definition. It is made directly from the restricted affine modules and does not use exponentiation of fractional $L_0$-weights to $\operatorname{Aut}\mathcal O$. It asserts no comparison with a generic coordinate-independent block construction, no finite-dimensionality or local freeness, and no analytic convergence.

## Definition references

[[def-cft-wzw-insertion-data]]

## Facts & Assumptions

**Given:** The distinct points, local coordinates, common level $k$, and affine modules stated above.

[A1] Full AC is assumed for the existence/top claim in [[def-cft-wzw-insertion-data]], which supplies the finite insertions.

[F1] [[def-cft-wzw-insertion-data]] supplies level-$k$ restricted modules and finite-dimensional tops.

[F2] [[def-universal-affine-vacuum-module]] supplies the vacuum module at level $k$, with $x_m\mathbf1=0$ for $m\ge0$.

[F3] [[lem-affine-vacuum-module-pbw-basis]] gives a basis of negative-mode monomials $y^1_{-r_1}\cdots y^s_{-r_s}\mathbf1$, with each $r_i\ge1$.

[F4] [[def-untwisted-affine-central-extension]] fixes the local mode bracket with central generator $c$; [[def-universal-affine-vacuum-module]] denotes this same generator by $K$. Its central term is $m\delta_{m,-n}B(x,y)c$.

## Proof

1.1 Every rational function has a Laurent expansion with only finitely many negative powers at each marked point. Each finite insertion is restricted by [F1]. For the infinity factor, [F3] reduces the claim to a basis monomial $y^1_{-r_1}\cdots y^s_{-r_s}\mathbf1$ with $r_i\ge1$. If $m>\sum_i r_i$, commute $x_m$ successively to the right using $[x_q,y_{-r_i}]=[x,y]_{q-r_i}+q\delta_{q,r_i}B(x,y)K$. At every commutation the current index $q$ exceeds the sum of the remaining $r_i$, so it stays positive and no central term occurs; the final positive mode kills $\mathbf1$ by [F2]. Thus $x_m$ kills that monomial for all sufficiently large $m$, and by linearity the vacuum module is restricted. Consequently, on each fixed algebraic tensor the negative tail is finite and the sufficiently high nonnegative modes kill every factor. Every local sum, and hence the sum over the finitely many marked points, is finite. [A1, F1, F2, F3, F4, given, algebra]

2.1 On each algebraic tensor, step 1.1 makes the local mode sums finite. For local Laurent expansions $f=\sum_m f_mt^m$ and $g=\sum_n g_nt^n$, the loop-bracket coefficients in [F4] are those of $[x,y]\otimes fg$. The central coefficient is $kB(x,y)\sum_m m f_mg_{-m}=kB(x,y)\operatorname{Res}((df)g)$, a finite sum because each Laurent expansion has only finitely many negative powers. The central generator acts by the same level $k$ on every tensor factor. Thus the commutator of the summed actions of rational currents $x\otimes f$ and $y\otimes g$ is the summed action of $[x,y]\otimes fg$, plus
$$kB(x,y)\sum_{p\in\{z_1,\ldots,z_n,\infty\}}\operatorname{Res}_{p}((df)g).$$
The differential $(df)g$ is meromorphic on $\mathbb P^1$, and its residues at all its poles sum to zero. Hence the central term vanishes and the global current action is a Lie representation. Its image span is invariant because $a(bv)=b(av)+[a,b]v$, and both terms lie in that span. The quotient is therefore defined. A functional on the tensor product descends uniquely to the quotient exactly when it annihilates this image span, by the universal property of a vector-space quotient. [F1, F2, F4, step 1.1, algebra] ∎

## Remarks

The generic integral-$L_0$ carrier [[def-cft-coinvariants-and-conformal-blocks]] is a distinct interface; this fixed-coordinate definition does not assert equivalence with it.
