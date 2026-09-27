---
id: ex-projective-line-diagonal-bihomogeneous-equation
kind: example
title: The projective-line diagonal from the bihomogeneous equation
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-projective-space-diagonal-closed, def-relative-projective-space-standard-charts, thm-affine-fibre-product-tensor-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Example 26.21.8 (tag 01KQ), printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, Proposition 11.3.8, printed pp.309-310"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Example

For every scheme $S$, the diagonal of $\mathbb P^1_S\to S$ is the closed
subscheme of $\mathbb P^1_S\times_S\mathbb P^1_S$ cut out by the bihomogeneous
equation $x_0y_1-x_1y_0=0$, read in the two pairs of homogeneous coordinates
$x_0:x_1$ and $y_0:y_1$. On the four products $U_i\times_SV_j$ of standard
charts the equation becomes
$$y_1/y_0-x_1/x_0=0,\qquad (x_1/x_0)(y_0/y_1)-1=0,\qquad (x_0/x_1)(y_1/y_0)-1=0,\qquad y_0/y_1-x_0/x_1=0,$$
which is the equality of the two chart coordinates on the overlap
$U_i\cap V_j$ in each case. Over $S=\operatorname{Spec}k$ for a field $k$ this
is the classical description of the diagonal of $\mathbb P^1_k$.

## Facts & Assumptions

**Given:** A scheme $S$, the relative projective line $\mathbb P^1_S$ with its two standard charts $U_0,U_1$ and coordinates $x=x_1/x_0$ on $U_0$, $v=x_0/x_1$ on $U_1$, the second factor with charts $V_0,V_1$ and coordinates $y=y_1/y_0$, $z=y_0/y_1$, and the diagonal $\Delta$ of $\mathbb P^1_S\to S$.

[F1] The charts $U_i$ are affine and cover $\mathbb P^1_S$; on an affine base $S=\operatorname{Spec}A$ one has $U_0=\operatorname{Spec}A[x]$, $U_1=\operatorname{Spec}A[v]$ and $U_0\cap U_1=\operatorname{Spec}A[x,x^{-1}]=\operatorname{Spec}A[v,v^{-1}]$, all compatible with base change. ([[def-relative-projective-space-standard-charts]])

[F2] For $i\ne j$ the restriction of $\Delta$ to $U_i\times_SU_j$ is the closed immersion of the affine overlap $U_i\cap U_j$ cut out in the chart-product coordinate ring by $x^{(i)}_j y^{(j)}_i-1$ and $y^{(j)}_m-x^{(i)}_m y^{(j)}_i$ for $m\ne i,j$; for $i=j$ the chart form is the difference of the two coordinates. These generators are dehomogenized forms of $x_a y_b-x_b y_a$. ([[lem-projective-space-diagonal-closed]])

[F3] For ring maps $A\to B$, $A\to C$ the fibre product of the affine spectra is $\operatorname{Spec}(B\otimes_AC)$. ([[thm-affine-fibre-product-tensor-ring]])



## Verification

1.1 Over an affine base $S=\operatorname{Spec}A$ the four products of charts are affine by [F3]: $U_0\times_SU_0=\operatorname{Spec}A[x,y]$, $U_0\times_SU_1=\operatorname{Spec}A[x,z]$, $U_1\times_SU_0=\operatorname{Spec}A[v,y]$, $U_1\times_SU_1=\operatorname{Spec}A[v,z]$. [F1, F3]

1.2 The equation $x_0y_1-x_1y_0=0$ is bihomogeneous of bidegree $(1,1)$, so its restriction to each product of charts is obtained by dividing by the two chosen coordinates; this gives the four displayed equations in the order $(U_0,V_0),(U_0,V_1),(U_1,V_0),(U_1,V_1)$. [F1, given]

2.1 On $U_0\times_SU_0=\operatorname{Spec}A[x,y]$ the equation becomes $y-x=0$, which is the difference of the two copies of the coordinate $x_1/x_0$; by [F2] this is the chart form of the diagonal, and $A[x,y]\to A[x]$, $y\mapsto x$, exhibits it as a closed immersion with image the diagonal copy of $U_0$. [F2, step 1.2]

2.2 On $U_0\times_SU_1=\operatorname{Spec}A[x,z]$ the equation becomes $1-xz=0$, exactly [F2]'s mixed-chart generator $x^{(0)}_1 y^{(1)}_0-1$ up to sign, with $z=y_0/y_1$ and $x=x_1/x_0$; the quotient is $A[x,x^{-1}]$ via $z\mapsto x^{-1}$, so the diagonal over this chart product is the closed subscheme isomorphic to the overlap $U_0\cap U_1$. [F2, step 1.2]

3.1 The remaining two products are obtained from steps 2.1 and 2.2 by swapping the two factors: on $U_1\times_SU_0=\operatorname{Spec}A[v,y]$ the equation becomes $vy=1$, and on $U_1\times_SU_1=\operatorname{Spec}A[v,z]$ it becomes $z-v=0$. [step 1.2, step 2.1, step 2.2, F2]

4.1 Both sides are compatible with base change along any $S'\to S$ by [F1], so the four chart computations glue: on every standard chart product the diagonal is the closed subscheme cut out by $x_0y_1-x_1y_0=0$, which is the assertion. [F1, step 2.1, step 2.2, step 3.1] ∎
