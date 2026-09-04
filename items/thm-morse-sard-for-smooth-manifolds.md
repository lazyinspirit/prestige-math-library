---
id: thm-morse-sard-for-smooth-manifolds
kind: theorem
title: "Morse-Sard for smooth manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-sard-for-euclidean-maps,
       prop-countable-unions-and-subsets-of-manifold-null-sets-are-null,
       prop-a-countable-chart-cover-detects-manifold-null-sets,
       def-critical-locus-and-critical-value-set,
       def-regular-and-critical-points-and-values,
       def-null-subset-of-a-smooth-manifold]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ be a smooth map between smooth manifolds. Then the critical value
set of $F$ is a null subset of $N$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] The empty fibre case is regular, so if every differential $dF_p$ is surjective then every value of $F$ is regular ([[def-regular-and-critical-points-and-values]]).

[F2] The empty subset of any manifold is null ([[def-null-subset-of-a-smooth-manifold]]).

[F3] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] A countable chart cover detects manifold nullity, and countable unions of manifold null sets are null ([[prop-a-countable-chart-cover-detects-manifold-null-sets]], [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

[L2] In Euclidean charts, the critical value set of a smooth map is null ([[thm-morse-sard-for-euclidean-maps]]).

## Proof
**Proof technique:** direct.

1.1 If $\dim N=0$, then every differential [F1, F2, given, cases]
$dF_p:T_pM\to T_{F(p)}N=\{0\}$ is surjective, so [F1] makes every value of $F$
regular. Thus the critical value set is empty, which is null by [F2]. Assume
henceforth that $\dim N>0$. [F1, F2, given, cases]

2.1 Choose countable smooth atlases $\{(U_i,\varphi_i)\}$ on $M$ and [L1, step 1.1, given, choose]
$\{(V_j,\psi_j)\}$ on $N$ detecting nullity by [L1], and refine the source
atlas so that each $F(U_i)$ lies in some $V_{j(i)}$. [L1, step 1.1, given,
choose]

3.1 For each $i$, the coordinate representative [L2, step 2.1, algebra]
$$ f_i:=\psi_{j(i)}\circ F\circ\varphi_i^{-1} $$
is smooth between Euclidean open sets with positive-dimensional target. A point
of $U_i$ is critical for $F$ exactly when its coordinate representative is
critical for $f_i$, because the chart maps have invertible differentials. By
[L2], the critical value set of $f_i$ is null in $\psi_{j(i)}(V_{j(i)})$.
Therefore $\psi_{j(i)}(F(\operatorname{Crit}(F)\cap U_i))$ is null for every
$i$. [L2, step 2.1, algebra]

4.1 By [F3], the critical value set of $F$ is the countable union of the sets [F3, L1, step 3.1]
$F(\operatorname{Crit}(F)\cap U_i)$, so [L1] shows that it is null in $N$.
[F3, L1, step 3.1] ∎
