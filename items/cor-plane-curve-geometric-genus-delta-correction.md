---
id: cor-plane-curve-geometric-genus-delta-correction
kind: corollary
title: "Geometric genus of a plane curve by delta invariants"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-delta-invariant-curve-singularity
  - def-geometric-genus-singular-curve
  - lem-curve-closed-subsets-finite
  - lem-normalization-lowers-arithmetic-genus-delta
  - thm-normalization-glues-integral-finite-type-curves
  - thm-plane-curve-arithmetic-genus
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice, inherited through the normalization, delta,
curve-topology and cohomological genus interfaces below.
Let $k$ be algebraically closed and let $F\in k[T_0,T_1,T_2]$ be irreducible
homogeneous of degree $d\ge1$, defining an integral plane curve
$X=V_+(F)\subseteq\mathbb P^2_k$ whose singularities are isolated. Then the
genus of the normalization is
$$g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}{2}-\sum_{x\in X}\delta_x(X),$$
the sum running over the finitely many singular points of $X$.

## Facts & Assumptions
**Given:** The Axiom of Choice and an algebraically closed field $k$, an irreducible homogeneous form $F$ of degree $d\ge1$, the integral plane curve $X=V_+(F)$ with isolated singularities, its normalization $\nu:X^{\mathrm{nu}}\to X$, and the delta invariants $\delta_x(X)$ of its closed points.

[F1] Under Choice, for the integral plane curve $X=V_+(F)$ of degree $d$ one has $H^0(X,\mathcal O_X)=k$ and $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. ([[thm-plane-curve-arithmetic-genus]])

[F2] Under Choice, for an integral proper finite-type curve over the algebraically closed field $k$ with normalization $\nu:X^{\mathrm{nu}}\to X$, one has $p_a(X)=g(X^{\mathrm{nu}})+\sum_{x\in X}\delta_x(X)$, the sum finite and supported on the singular points; the delta invariant is $\delta_x(X)=\dim_k\bigl((\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}\bigr)$, and $\delta_x(X)=0$ exactly at the regular points. ([[lem-normalization-lowers-arithmetic-genus-delta]], [[def-delta-invariant-curve-singularity]])

[F3] Under Choice, for the integral plane curve $X=V_+(F)$ over the algebraically closed field $k$ the normalization $\nu:X^{\mathrm{nu}}\to X$ exists, is finite and birational, and the geometric genus is defined as $g(X)=g(X^{\mathrm{nu}})$. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-geometric-genus-singular-curve]])

[F4] Under Choice, if $X$ is an integral finite-type $k$-scheme whose underlying space has chain dimension one, then a proper closed subset $Z\subsetneq X$ is a finite set of closed points, and every point other than the generic point is closed. ([[lem-curve-closed-subsets-finite]])



[A1] The Axiom of Choice is assumed for the cited interfaces. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; combine the plane arithmetic-genus computation with the normalization formula and rewrite the result as the geometric genus.

1.1 By [F2], each $\delta_x(X)$ is finite and nonnegative, vanishes at regular points, and the singular points form a finite set of closed points. Thus the correction sum is finite and has the stated support. [F2, given]

1.2 The arithmetic genus is known. Since $X$ is an integral plane curve cut out by the irreducible form $F$ of degree $d$, [F1] gives $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. [F1]

1.3 Normalization formula. Applying [F2] to $X$ and solving for the genus of the normalization gives $g(X^{\mathrm{nu}})=p_a(X)-\sum_{x\in X}\delta_x(X)$; by [F3] this is the geometric genus $g(X)$ and the normalization exists with the stated properties. [F2, F3]

2.1 Conclusion. Substituting the value $p_a(X)=\frac{(d-1)(d-2)}{2}$ of step 1.2 into step 1.3 gives $g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}{2}-\sum_x\delta_x(X)$; the sum is finite by step 1.1 and vanishes exactly when $X$ is smooth, in which case the normalization is an isomorphism and the formula recovers the plane arithmetic genus. Choice is inherited through [F1]–[F4]. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 1.3] ∎
