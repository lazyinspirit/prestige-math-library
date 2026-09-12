---
id: "thm-regular-value-formula-for-compact-support-degree"
kind: "theorem"
title: "Regular-value formula for compact-support degree"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-degree-is-well-defined-and-independent-of-the-normalized-top-form","def-local-orientation-sign-of-a-regular-preimage","def-regular-and-critical-points-and-values","thm-smooth-inverse-function-theorem-on-manifolds","lem-compactness-of-a-subspace-is-ambient","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-heine-borel-rn","lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","prop-pointwise-orientation-sign-of-a-local-diffeomorphism"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $F:M^n\to N^n$ be a proper smooth map between nonempty connected oriented smooth manifolds without boundary. If $y\in N$ is a regular value, then its fibre is finite and
$$\deg(F)=\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p)\in\mathbb Z.$$
An empty fibre gives the empty sum zero. In dimension zero the signs compare the supplied determinant-line rays. The formula is choice-free and presupposes only a given regular value, not a theorem asserting their existence.

## Facts & Assumptions

[F1] [[lem-degree-is-well-defined-and-independent-of-the-normalized-top-form]] computes degree on any integral-one compactly supported top form.

[F2] [[def-local-orientation-sign-of-a-regular-preimage]] defines the intrinsic sign, including the separate zero-dimensional convention.

[F3] [[def-regular-and-critical-points-and-values]] says every preimage of a regular value has surjective differential, including the vacuous empty-fibre case.

[F4] [[thm-smooth-inverse-function-theorem-on-manifolds]] gives a smooth inverse branch at an invertible differential. Its Euclidean proof uses only claim 2, the choice-free closed-subspace direction, of the currently published completeness theorem.

[F5] [[lem-compactness-of-a-subspace-is-ambient]] gives finite subcovers and compactness under continuous images by pulling a covering family back.

[F6] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] gives closedness of compact images and compactness of closed subsets of compact Hausdorff spaces.

[F7] [[thm-heine-borel-rn]] gives a compact closed Euclidean ball inside a target chart.

[F8] [[lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls]] supplies an integral-one compact bump in any nonempty target open set.

[F9] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] gives locality, finite linearity and signed single-chart integrals without global partitions.

[F10] [[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]] makes the sign locally constant on an inverse branch.

## Proof

**Given:** The map, manifolds and specified regular value. First assume $n\ge1$; dimension zero will be treated directly.

1.1 The singleton $\{y\}$ is compact, so properness makes $K_y=F^{-1}(y)$ compact. At $p\in K_y$, [F3] makes $dF_p$ surjective, and equal finite dimensions make it invertible. By [F4] an inverse neighbourhood $O$ of $p$ meets $K_y$ only at $p$. The set of all such neighbourhoods, over all $p$ and all available branches, covers $K_y$ without a choice of branch at each point. A finite subcover from [F5] shows that $K_y$ is finite, since each member contains exactly one fibre point. Write its distinct points as $p_1,\ldots,p_m$, with $m=0$ allowed. [F3, F4, F5, given]

2.1 For the finitely many fibre points choose inverse branches and shrink their source domains to pairwise disjoint opens $O_i$. To do this, for every pair $p_i\ne p_j$ choose disjoint Hausdorff neighbourhoods, and intersect the finitely many neighbourhoods belonging to each point with its original inverse domain. Each restriction is still a diffeomorphism onto an open set $W_i$ containing $y$. Shrink further so its orientation sign is the constant $\varepsilon_i=\operatorname{sgn}(dF_{p_i})$ using [F10]. All these domains can lie inside their original source coordinate charts. There are only finitely many restrictions and pairwise separations. [F2, F4, F10, step 1.1]

3.1 Choose a target chart about $y$ and a closed coordinate ball $K$ centred at its coordinate, contained in the chart image, and of positive radius. Its inverse image under the chart is compact by [F7] and the continuous-image criterion [F5]; denote this compact neighbourhood also by $K$. Properness makes $F^{-1}(K)$ compact. Put $$C=F^{-1}(K)\setminus\bigcup_{i=1}^m O_i.$$ This is a closed subset of the compact Hausdorff space $F^{-1}(K)$, so compact by [F6]. Its continuous image $F(C)$ is compact by [F5] and closed in $N$ by [F6], and it misses $y$ because all fibre points were in the $O_i$. Therefore $$\operatorname{int}K\cap\bigcap_{i=1}^m W_i\setminus F(C)$$ is an open neighbourhood of $y$; for $m=0$ omit the intersection. Choose a smaller coordinate ball $V$ about $y$ inside it. For $U_i=O_i\cap F^{-1}(V)$ we have diffeomorphisms $F|_{U_i}:U_i\to V$, disjoint $U_i$, and $$F^{-1}(V)=\coprod_{i=1}^m U_i.$$ Indeed any preimage of $V$ lies in $F^{-1}(K)$ and cannot lie in $C$, so it lies in an $O_i$; the reverse containment is immediate. This compact-neighbourhood argument excludes additional branches approaching $y$ from far away. [F4, F5, F6, F7, step 1.1, step 2.1]

4.1 By [F8] choose $\nu$ compactly supported in $V$ with integral one. For each $i$ define $\beta_i$ to equal $(F|_{U_i})^*(\nu|_V)$ on $U_i$ and zero elsewhere. Its support is contained in the image of $\operatorname{supp}\nu$ under the continuous inverse branch, hence is compact in $U_i$ by [F5] and closed in $M$ by [F6]. Thus extension by zero is smooth: the formulas on $U_i$ and on the open complement of that compact set agree where both apply. The disjoint-union identity in step 3.1 gives the global finite equality $F^*\nu=\sum_i\beta_i$. Outside $F^{-1}(V)$ the pulled-back form is zero because $\nu$ vanishes outside $V$. [F4, F5, F6, F8, step 3.1]

5.1 Choose a positive target chart $\psi:V\to B\subset\mathbb R^n$. On $U_i$ the map $\phi_i=\psi\circ F$ is a smooth coordinate chart, and its orientation sign is $\varepsilon_i$ by [F2], [F10] and step 2.1. If $\nu$ has coefficient $b$ in the $\psi$ chart, then $\beta_i$ has exactly the same coefficient $b$ in the $\phi_i$ chart, by the definition of pullback and $\phi_i=\psi F$. Both coefficients have compact support inside the common chart image $B$. Signed chart agreement and locality in [F9] therefore give $$\int_M\beta_i=\varepsilon_i\int_B b(x)\,dx=\varepsilon_i\int_N\nu=\varepsilon_i.$$ Finite linearity [F9], step 4.1 and [F1] now give $$\deg(F)=\int_MF^*\nu=\sum_{i=1}^m\varepsilon_i.$$ This is an integer because it is a finite sum of $+1$ and $-1$. No unsigned chart sign or compact-support change-of-variables hypothesis is omitted: those comparisons are already part of the proved signed-chart integral [F9]. [F1, F2, F9, F10, step 2.1, step 4.1]

6.1 If $m=0$ in positive dimension, step 3.1 gives $F^{-1}(V)=\varnothing$, so $F^*\nu=0$ and step 5.1 gives degree zero. For $n=0$, connectedness and nonemptiness make both manifolds singletons: every singleton in a zero-manifold is open, so two distinct points would separate it by a singleton and its complement. Their unique map has one-point fibre and the derivative between zero spaces is invertible. A normalized function on $N$ has value $\varepsilon_N$, and its pullback integrates on $M$ to $\varepsilon_M\varepsilon_N$, precisely the sign [F2]. Thus the formula holds in dimension zero without using a positive-dimensional inverse function theorem. At $n=1$ the signs are those of the nonzero one-variable derivatives; compact supports stay inside the open branch intervals by step 4.1. Only the one fibre, finite branches and one bump are selected. The proof of [F4] uses its currently available choice-free completeness direction, and no AC, Sard theorem, or global partition is used. [F1, F2, F3, F5, F8, F9, step 3.1, step 4.1, step 5.1] ∎
