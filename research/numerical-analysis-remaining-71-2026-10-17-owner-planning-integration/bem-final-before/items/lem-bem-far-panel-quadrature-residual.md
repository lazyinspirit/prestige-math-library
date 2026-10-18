---
id: lem-bem-far-panel-quadrature-residual
kind: lemma
title: A positive far-panel quadrature residual and normalized cluster combination
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-bem-surface-mesh-and-piecewise-constant-density-space, def-bem-newtonian-kernel-in-three-dimensions, lem-mean-value-theorem-on-closed-interval, alg-three-dimensional-laplace-cluster-expansion, thm-three-dimensional-laplace-expansion-error-and-work, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited through the mesh geometry context; the centroid residual and finite single-cluster error estimate use no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: the three-dimensional Laplace P0 matrix entry and its panel integrals."
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf
      locator: "Chapter 4 §4.1.2, PDF pp. 26–30: the single-cluster Laplace evaluator; the centroid residual is proved locally."
---

## Statement

Let $T,S$ be disjoint nondegenerate compact triangles in a conforming surface mesh, let $d$ be supplied with $0<d\le\operatorname{dist}(T,S)$, and set
$$A_{TS}=\frac1{4\pi}\int_T\int_S\frac{1}{|x-y|}\,dS_y\,dS_x.$$
Apply $m_T$ and $m_S$ successive midpoint refinements to $T$ and $S$, respectively. The resulting subtriangles have maximum diameters $h_T=2^{-m_T}\operatorname{diam}(T)$ and $h_S=2^{-m_S}\operatorname{diam}(S)$. Give each subtriangle its area as a positive weight and its centroid as its node, obtaining rules $(x_i,w_i)$ and $(y_j,v_j)$. Then
$$B_{TS}=\sum_i\sum_j\frac{w_iv_j}{4\pi|x_i-y_j|}$$
satisfies
$$|A_{TS}-B_{TS}|\le\varepsilon_{TS}^{\rm quad}:=\frac{|T||S|(h_T+h_S)}{4\pi d^2}.$$
Repeated midpoint subdivision makes this residual tend to zero. For exact algebraic panel coordinates, a supplied strict algebraic lower bound for $d$ and outward interval evaluation therefore gives an effective certificate at every positive tolerance; for other coordinates the corresponding certified separation and arithmetic bounds are required.

For the physical kernel, if the source nodes have charges $q_j=v_j/(4\pi)$ in $B(c,a)$ and the target nodes lie in $B(d_c,b)$ with $R=|d_c-c|>a+b$, then the literal single-cluster evaluator of [[alg-three-dimensional-laplace-cluster-expansion]] has $Q=\sum_j|q_j|$ and target-weight sum $W_T=\sum_iw_i$. Its contribution to the entry error is at most
$$W_T\frac{Q}{R-b}\frac{(a/(R-b))^{p+1}}{1-a/(R-b)}.$$
Add separately certified quadrature, node-evaluation and outward-arithmetic radii. This is a single-cluster estimate, not a multilevel or global complexity result.

## Facts & Assumptions

**Given:** The Countable Choice geometry context of the conforming mesh, two disjoint panels $T,S$, a positive lower separation bound $d$, the deterministic midpoint centroid rules, and, when the cluster branch is used, its certified balls and truncation order $p$.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the mesh's stated polyhedral trace-space context; the finite centroid and single-cluster estimates below use no choice.

[F1] [[def-bem-surface-mesh-and-piecewise-constant-density-space]]: each mesh panel is a compact nondegenerate convex triangle, and disjoint panels have positive distance. The midpoint subdivision area sum is checked directly in step 2.1.

[F2] [[def-bem-newtonian-kernel-in-three-dimensions]]: the physical kernel is $G_3(x,y)=(4\pi|x-y|)^{-1}$, with $|\nabla_xG_3|=|\nabla_yG_3|=(4\pi|x-y|^2)^{-1}$.

[F3] [[lem-mean-value-theorem-on-closed-interval]]: for a differentiable scalar function on a segment, its increment is bounded by the segment length times the supremum of its derivative.

[F4] [[alg-three-dimensional-laplace-cluster-expansion]] and [[thm-three-dimensional-laplace-expansion-error-and-work]]: for source charge sum $Q$ in $B(c,a)$ and target ball $B(d_c,b)$ with $R=|d_c-c|>a+b$, the single-cluster truncation error is at most $\frac{Q}{R-b}\frac{(a/(R-b))^{p+1}}{1-a/(R-b)}$, with only the stated single-cluster arithmetic count.

## Proof

1.1 Fix a target node $x_i$, source node $y_j$, and points $x\in T_i$, $y\in S_j$ in their subtriangles. The paths $x(t)=x_i+t(x-x_i)$ and $y(t)=y_j+t(y-y_j)$ stay in $T$ and $S$ by convexity. Every pair on either path with the other variable fixed has distance at least $d$. Apply [F3] to $t\mapsto G_3(x(t),y)$ and then to $t\mapsto G_3(x_i,y(t))$; using [F2] and $|x-x_i|\le h_T$, $|y-y_j|\le h_S$ gives
$$|G_3(x,y)-G_3(x_i,y_j)|\le\frac{h_T+h_S}{4\pi d^2}.$$
[A1, F1, F2, F3, given, choose]

2.1 One midpoint refinement divides a triangle into four triangles with half-length sides; the determinant of each affine map is $1/4$, so each new area is one quarter of the old area. Induction gives $\sum_iw_i=|T|$ and $\sum_jv_j=|S|$. Integrate the pointwise bound of step 1.1 over each $T_i\times S_j$ and sum; the area sums give $|A_{TS}-B_{TS}|\le |T||S|(h_T+h_S)/(4\pi d^2)$. [F1, step 1.1, given, algebra]

3.1 After $m$ midpoint refinements every subtriangle diameter is at most $2^{-m}$ times its initial diameter. Since $d>0$ and the right side of step 2.1 is proportional to $h_T+h_S$, it tends to zero; for every prescribed positive quadrature tolerance a finite $m$ suffices. With exact algebraic coordinates, finite arithmetic and a certified strict lower bound for $d$ can be enclosed outward to any requested positive radius. If the geometry or arithmetic certificate is absent, no certified numerical result follows from this lemma. [step 2.1, given, algebra]

4.1 For each target node the hypotheses in [F4] give the displayed uniform single-cluster error. Multiplication by its positive weight and summation bounds the target sum error by $W_T$ times that tail. The source charges must be $q_j=v_j/(4\pi)$ because the evaluator sums $q_j/|x-y_j|$ while the physical kernel is $1/(4\pi|x-y|)$. Adding the centroid residual from step 2.1 and the separately certified node-evaluation and outward-arithmetic radii by the triangle inequality proves the stated total entry bound. No cluster conclusion is asserted when $R\le a+b$. [F4, step 2.1, given, algebra] ∎