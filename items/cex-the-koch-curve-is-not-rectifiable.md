---
id: cex-the-koch-curve-is-not-rectifiable
kind: counterexample
title: "The Koch curve is a uniform limit of polygonal paths of lengths $(4/3)^n$ but is not rectifiable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-recursion, thm-of-square-roots, lem-standard-basis-of-f-n, thm-cauchy-schwarz-and-the-euclidean-norm, thm-uniform-cauchy-criterion-real-functions, thm-uniform-limit-continuous-real-functions, thm-componentwise-limits-and-continuity, lem-geometric-sequence-null, def-path-polygonal-length-and-rectifiability-in-rn, cor-piecewise-c1-paths-have-additive-speed-integral-length, thm-arc-length-is-lower-semicontinuous-under-uniform-convergence, prop-arc-length-under-lipschitz-maps-and-euclidean-similarities, thm-arc-length-is-additive-over-subintervals]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Ghomi, Curves and Surfaces, Lecture Notes 1, Exercise 9"
      url: "https://ghomi.math.gatech.edu/Classes/Math497C/LectureNotes1.pdf"
pipeline_run: null
---

## Counterexample

There are polygonal paths $\kappa_n:[0,1]\to\mathbb R^2$ that converge uniformly to a path $\kappa$ and satisfy

$$L(\kappa_n)=\left(\frac43\right)^n,$$

yet the limit path is not rectifiable: $L(\kappa)=+\infty$. The path $\kappa$ is one side of the Koch snowflake, so the closed snowflake boundary is nonrectifiable as well.

## Facts & Assumptions

**Given:** The Euclidean plane and the unit interval.

[L1] The recursion theorem produces a sequence once its initial value and update rule are specified ([[thm-recursion]]).

[L2] The nonnegative real $3$ has a square root; the standard basis gives the coordinate decomposition of vectors in $\mathbb R^2$; and the Euclidean norm is homogeneous and satisfies the triangle inequality ([[thm-of-square-roots]], [[lem-standard-basis-of-f-n]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L3] A uniformly Cauchy sequence of real-valued functions has a uniform limit; a uniform limit of continuous real-valued functions is continuous; and a vector-valued map is continuous exactly when its coordinates are continuous ([[thm-uniform-cauchy-criterion-real-functions]], [[thm-uniform-limit-continuous-real-functions]], [[thm-componentwise-limits-and-continuity]]).

[L4] The sequence $3^{-n}$ tends to zero, while $(4/3)^n$ tends to $+\infty$ ([[lem-geometric-sequence-null]]).

[L5] Arc length is the supremum of inscribed polygonal sums, and a piecewise-$C^1$ polygonal path has length equal to the sum of its edge lengths ([[def-path-polygonal-length-and-rectifiability-in-rn]], [[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L6] Uniform convergence gives only $L(\kappa)\le\liminf_nL(\kappa_n)$ ([[thm-arc-length-is-lower-semicontinuous-under-uniform-convergence]]).

[L7] Euclidean isometries preserve length, and length is additive across subdivision points ([[prop-arc-length-under-lipschitz-maps-and-euclidean-similarities]], [[thm-arc-length-is-additive-over-subintervals]]).

## Verification

**Proof technique:** construction.

1.1 Define $R(x,y):=(x/2-\sqrt3\,y/2,\sqrt3\,x/2+y/2)$. Since $(\sqrt3)^2=3$, direct expansion gives $\lVert Rv\rVert_2=\lVert v\rVert_2$ and $\lVert v-Rv\rVert_2=\lVert v\rVert_2$ for every $v\in\mathbb R^2$. [L2, algebra]

2.1 Put $\kappa_0(t)=(t,0)$. Recursively, suppose $\kappa_n$ is affine between consecutive points of $\sigma_n:=\{j/4^n:0\le j\le4^n\}$. For an old edge from $A=\kappa_n(j/4^n)$ to $A+v=\kappa_n((j+1)/4^n)$, prescribe the five successive values of $\kappa_{n+1}$ at parameters $(4j+r)/4^{n+1}$, $0\le r\le4$, to be $A$, $A+v/3$, $A+v/3+Rv/3$, $A+2v/3$, and $A+v$, and make $\kappa_{n+1}$ affine between them. The endpoint prescriptions agree on adjacent old edges, so [L1] gives the sequence. [step 1.1, L1, construct]

3.1 Every old vertex is retained. By step 1.1, each old edge of length $\ell$ is replaced by four edges of length $\ell/3$. Induction therefore gives $4^n$ edges of length $3^{-n}$ in $\kappa_n$, and [L5] gives $L(\kappa_n)=4^n3^{-n}=(4/3)^n$. [step 1.1, step 2.1, L5, algebra]

4.1 On an old edge of length $3^{-n}$, compare $\kappa_{n+1}$ with the affine chord $\kappa_n$. At the five subdivision parameters their differences have norms at most $0,3^{-n}/12,3^{-n}/2,3^{-n}/12,0$. On each intervening interval the difference is affine, so the triangle inequality gives $\sup_t\lVert\kappa_{n+1}(t)-\kappa_n(t)\rVert_2\le1/(2\cdot3^n)$. Consequently, for $m>n$, telescoping and the finite geometric-sum identity give $\sup_t\lVert\kappa_m(t)-\kappa_n(t)\rVert_2<3/(4\cdot3^n)$. [step 1.1, step 2.1, step 3.1, L2, algebra]

5.1 Each coordinate sequence is uniformly Cauchy by step 4.1, so [L3] supplies uniform coordinate limits. Let $\kappa$ be the resulting vector-valued limit. The inequality $\lVert z\rVert_2\le|z_1|+|z_2|$, obtained from the coordinate decomposition and norm axioms in [L2], makes the convergence $\kappa_n\to\kappa$ uniform. Each $\kappa_n$ is continuous, and [L3] makes $\kappa$ continuous, hence a path. [step 4.1, L2, L3, construct]

6.1 Fix $n$. Every vertex of $\sigma_n$ remains unchanged in every later path, so uniform convergence gives $\kappa(j/4^n)=\kappa_n(j/4^n)$ for all $0\le j\le4^n$. Thus the inscribed polygonal sum of $\kappa$ on $\sigma_n$ is $\ell_{\sigma_n}(\kappa)=4^n3^{-n}=(4/3)^n$. These sums are unbounded by [L4]. The defining supremum in [L5] is therefore $+\infty$, so $\kappa$ is not rectifiable. [step 3.1, step 5.1, L4, L5]

7.1 The classical Koch snowflake boundary is the concatenation of three isometric copies of $\kappa$. By [L7], each copy is nonrectifiable, and a rectifiable concatenation would have rectifiable restrictions. Hence the snowflake boundary is nonrectifiable. [step 6.1, L7]

8.1 Lower semicontinuity is consistent with the result but cannot prove it: [L6] yields only $L(\kappa)\le\liminf_n(4/3)^n=+\infty$, a vacuous upper bound. The retained-vertex partitions in step 6.1 supply the necessary lower bounds. [step 3.1, step 5.1, step 6.1, L4, L6] ∎
