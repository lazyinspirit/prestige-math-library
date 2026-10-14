---
id: lem-boundary-of-convex-set-is-lebesgue-null
kind: lemma
title: The boundary of a convex set is Lebesgue null
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-euclidean-inner-product
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - def-geometric-simplex-spanned-by-affinely-independent-vertices
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - cor-finite-dimensional-subspaces-are-closed
  - prop-measure-of-a-set-difference
  - prop-measure-monotonicity
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-heine-borel-rn
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Luc Koenen, The Brunn–Minkowski inequality in Euclidean space, §2.3
      url: https://www.math.ru.nl/~burtscher/supervision/BScThesis_LucKoenen_2022.pdf
---

## Statement

Assume countable choice. For every convex set $C\subseteq\mathbb R^d$, its
topological boundary $\partial C=\overline C\setminus C^\circ$ has
$d$-dimensional Lebesgue measure zero. If $C$ has empty interior, then $C$
itself is contained in a proper affine subspace and is Lebesgue null.

## Facts & Assumptions

**Given:** Countable choice, a finite integer $d\ge1$, and a convex set
$C\subseteq\mathbb R^d$.

[A1] [[def-countable-choice]]: Countable choice permits the countable
approximations used by the Lebesgue measure suppliers.

[F1] [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]:
Every proper linear subspace of $\mathbb R^d$ is Lebesgue null.

[F2] [[def-geometric-simplex-spanned-by-affinely-independent-vertices]],
[[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], and
[[def-euclidean-inner-product]]: Affine independence of $c_0,x_1,\ldots,x_d$
means the differences $x_i-c_0$ are linearly independent. Their simplex is the
affine image of an open standard simplex under an invertible continuous linear
map, so it has nonempty interior; balls use the Euclidean norm.

[F3] [[thm-linear-change-of-variables-for-lebesgue-measure]]: An invertible
linear map $T$ scales Lebesgue measure by $|\det T|$.

[F4] [[prop-measure-of-a-set-difference]] and
[[prop-measure-monotonicity]]: For nested measurable sets of finite measure,
the measure of the difference is the difference of their measures, and
measure is monotone.

[F5] [[thm-finite-and-countable-subadditivity-of-measures]]: A countable
union of null measurable sets is null.

[F6] [[cor-finite-dimensional-subspaces-are-closed]] and
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]:
Finite-dimensional linear subspaces are closed, and translation preserves
Lebesgue measurability and measure.

[F7] [[thm-heine-borel-rn]] and
[[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]: A
closed bounded subset of $\mathbb R^d$ is compact and has finite Lebesgue
measure.

## Proof

**Proof technique:** affine-hull reduction and homothetic contraction.

1.1 If $C=\varnothing$, the claim is immediate. Otherwise choose $c_0\in C$ and let $W$ be the linear span of $\{x-c_0:x\in C\}$. If $W=\mathbb R^d$, finite-dimensional linear algebra selects $d$ linearly independent differences $x_i-c_0$ from this spanning family. By definition these $d+1$ points are affinely independent; their simplex has nonempty interior by [F2], contradicting the hypothesis. Thus $W$ is proper and $C\subseteq c_0+W$. By [F1], $W$ is null; [F6] makes $c_0+W$ closed and null. Since $\overline C\subseteq c_0+W$, both $C$ and its boundary are null. This proves the empty-interior case. [F1, F2, F6, given, choose, algebra]

1.2 Suppose $C$ has nonempty interior. Choose $x_0\in C^\circ$ and $\rho>0$ with $B(x_0,\rho)\subseteq C$. If $y\in\overline C$ and $0<t<1$, [A1] selects $y_j\in C$ with $y_j\to y$. Convexity gives $B(x_0+t(y_j-x_0),(1-t)\rho)\subseteq C.$ The centers converge to $x_0+t(y-x_0)$, so that limit point has a ball of radius $(1-t)\rho/2$ contained in $C$. Therefore $x_0+t(\overline C-x_0)\subseteq C^\circ$. [A1, given, algebra]

2.1 For each integer $r$ large enough that $K_r=\overline C\cap\overline B(0,r)$ contains $x_0$, [F7] makes $K_r$ compact with finite measure. The contraction $x_0+t(K_r-x_0)$ lies in $C^\circ$ by step 1.2 and in $K_r$ by convexity. Write $x_0+t(K_r-x_0)=tK_r+(1-t)x_0$. Apply [F3] to the invertible linear dilation $tI_d$, then [F6] to translation by $(1-t)x_0$, to obtain its measure $t^d\lambda_d(K_r)$. Hence $\partial C\cap K_r\subseteq K_r\setminus\bigl(x_0+t(K_r-x_0)\bigr),$ and [F4] gives $\lambda_d(\partial C\cap K_r)\le(1-t^d)\lambda_d(K_r).$ Let $t\uparrow1$ to obtain $\lambda_d(\partial C\cap K_r)=0$. [F3, F4, F6, F7, step 1.2, algebra]

3.1 The bounded sets $K_r$ cover $\overline C$ as $r$ ranges over sufficiently large integers. Therefore $\partial C$ is a countable union of the null sets in step 2.1 and is null by [F5]. [A1, F5, step 2.1] ∎
