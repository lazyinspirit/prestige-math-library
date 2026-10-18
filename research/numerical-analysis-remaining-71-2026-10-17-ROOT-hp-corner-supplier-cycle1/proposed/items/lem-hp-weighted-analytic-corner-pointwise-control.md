---
id: lem-hp-weighted-analytic-corner-pointwise-control
kind: lemma
title: Weighted analytic polygon functions have corner decay and scaled analytic bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-countable-choice]
proof_strategy: direct
provenance: {statement: ai-altered, proof: ai-altered}
sources:
  references:
    - title: He, Houston, Schwab, and Wihler, Exponential Convergence of hp-ILGFEM
      url: https://arxiv.org/pdf/2404.18569
      locator: "Section 2.3, (12), Definition 1, and the continuity assertion preceding it; the quantitative proof is supplied here."
---

## Statement

Assume Countable Choice. Let $\Omega$ be a bounded polygon with corner set $\mathcal C=\{c_i\}$, $0\le\beta_i<1$, and $u\in H^1(\Omega)$ satisfying, for every $j\ge2$,
$$\left\|\left(\prod_i|x-c_i|^{\beta_i+j-2}\right)\sum_{|\alpha|=j}|D^\alpha u|\right\|_2\le C_ud_u^{j-2}(j-2)!.$$
For every fixed $0<a<\min_i(1-\beta_i)$ there are $C,A,R>0$ such that $u$ has a representative continuous on $\overline\Omega$, smooth on the closure away from the corners, and, writing $r=|x-c_i|<R$,
$$|u(x)-u(c_i)|\le Cr^a,\qquad |D^\alpha u(x)|\le CA^{|\alpha|}|\alpha|!r^{a-|\alpha|}\quad(|\alpha|\ge1).$$
Consequently, on every shape-regular triangle $K$ with $h_K/\operatorname{dist}(K,\mathcal C)$ bounded above and below, its affine pullback, after subtraction of a suitable constant, satisfies $\|D^\alpha\widehat u\|_\infty\le C A_1^{|\alpha|}|\alpha|!r_K^a$ for all $\alpha$, where $r_K=\min(R,\operatorname{dist}(K,\mathcal C))$; constants are uniform over such triangles. On a corner triangle of diameter $h<R$, $\|\nabla u\|_{L^2(K)}\le Ch^a$ and its vertex interpolating affine polynomial has $H^1$ error at most $Ch^a$.

## Facts & Assumptions

**Given:** Countable Choice, the polygon, the weighted derivative bounds, and the exponent $a$ specified above.

## Proof

1.1 A fixed rectangle admits the estimate $\|v\|_\infty\le C\sum_{i,j=0}^1\|\partial_1^i\partial_2^jv\|_2$. For smooth $v$ this follows by applying twice the one-dimensional identity bound $|g(t)|\le\int_0^1|g(s)|ds+\int_0^1|g'(s)|ds$ and then Cauchy–Schwarz. The same bound and the corresponding continuity representative hold for $H^2$ functions: on a slightly smaller rectangle smooth them by convolution after fixed second-order reflections across its sides, apply the bound to differences, and use convergence in $H^2$; reflection coefficients solving $a_1+a_2=1$, $-a_1-2a_2=1$ match values and first normal derivatives. These are $a_1=3,a_2=-2$; change of variables bounds the extension, and integration by parts cancels the matching interface terms. Thus the smooth approximants converge uniformly and their $L^2$ limit is the original class. Scaling to a rectangle of size $r$ gives $\|v\|_\infty\le C(r^{-1}\|v\|_2+\|Dv\|_2+r\|D^2v\|_2)$. An affine parallelogram of bounded aspect ratio has the same estimate with a fixed extra constant. [given, algebra]

1.2 Choose $R>0$ so that distinct corner balls of radius $4R$ are disjoint and each such ball intersects only the two edges meeting at its corner. At a point at radius $r<R$, parallelograms of size $\eta r$, with fixed $\eta>0$ depending only on the polygon angles, cover a neighborhood of the point from inside $\overline\Omega$; near an edge use one side along the edge and the other pointing inward, and away from edges use a square. All lie in the annulus $r/2<|x-c_i|<2r$. On this annulus the other corner distances are bounded above and below by fixed positive numbers, so their powers of order $j$ contribute at most a fixed factor to the power $j$. Apply step 1.1 to each $D^\alpha u$ for $|\alpha|=j\ge2$, using the weighted $L^2$ estimates for derivative orders $j,j+1,j+2$. Their three terms are bounded by $CA^j j!r^{1-\beta_i-j}$: for example the highest term is $r\cdot C d_u^j j!r^{-\beta_i-j}$. This proves $|D^\alpha u|\le CA^j j!r^{1-\beta_i-j}$ for $j\ge2$, uniformly up to the straight edges. Applying the uniform convergence argument in step 1.1 successively to derivative orders gives a consistent smooth representative away from corners. Compact sets outside the corner balls admit uniform ordinary derivative bounds of the same factorial form by the identical argument on finitely many fixed parallelograms. [step 1.1, given, algebra]

2.1 On the fixed arc at radius $R$, the preceding bounds and $u\in H^1$ bound $\nabla u$ uniformly. On each ray integrate $D^2u$: for $0<r<R$, $|\nabla u(r,\theta)|\le C+C\int_r^Rt^{-1-\beta_i}dt$. This is at most $Cr^{-\beta_i}$ if $\beta_i>0$, and $C(1+|\log r|)$ if $\beta_i=0$. Because $a<1-\beta_i$, in both cases it is at most $Cr^{a-1}$. Radial integration then shows existence of a limit as $r\downarrow0$ and $|u(r,\theta)-\lim_{t\downarrow0}u(t,\theta)|\le Cr^a$. Along the circular arc at radius $r$, the variation is at most the angle times $r\sup|\nabla u|\le Cr^a$; the limits on all rays therefore coincide. Call that common value $u(c_i)$. Combining the first-derivative bound with step 1.2 and $r^{1-\beta_i-j}\le C r^{a-j}$ gives every pointwise assertion. [step 1.2, algebra]

3.1 For a regular triangle near a corner, its distance to that corner is comparable to $h_K$, while every point of the triangle has radius comparable to $r_K$. Subtract $u(c_i)$ and apply step 2.1 for order zero and step 1.2 for higher orders; the affine chain rule contributes at most $(C h_K)^{|\alpha|}$, yielding the asserted reference bounds. For cells outside fixed corner neighborhoods subtract zero and use compact-set bounds from step 1.2, enlarging $C,A_1$; here $r_K$ is bounded above and below by fixed positive constants. This also covers transition cells since $h_K/r_K$ is bounded. [step 1.2, step 2.1, algebra]

4.1 On a corner triangle, $|\nabla u|\le Cr^{a-1}$ and the polar area integral gives $\|\nabla u\|_2^2\le C\int_0^h r^{2a-1}dr\le Ch^{2a}$. The three vertex values differ from $u(c_i)$ by at most $Ch^a$. Shape regularity bounds each barycentric gradient by $C/h$ and area by $Ch^2$, so the vertex affine interpolant has gradient norm at most $Ch^a$. The triangle inequality proves its $H^1$ seminorm error; its $L^2$ error is at most $Ch^{a+1}$ by the same value bound. [step 2.1, algebra] ∎
