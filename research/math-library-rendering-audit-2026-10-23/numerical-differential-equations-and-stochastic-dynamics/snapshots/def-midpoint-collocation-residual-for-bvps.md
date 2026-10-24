---
id: def-midpoint-collocation-residual-for-bvps
kind: definition
title: "Normalized implicit-midpoint collocation residual for a two-point BVP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-nonlinear-two-point-bvp-and-boundary-residual]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:

    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/nonlinear/"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

For a $d$-dimensional BVP on $[a,b]$, an integer $N\ge1$, uniform mesh width $h=(b-a)/N$, mesh nodes $t_i=a+ih$, and node vector $Y=(Y_0,\ldots,Y_N)\in(\mathbb R^d)^{N+1}$, let $D_h$ be the open set of node vectors for which every midpoint pair $(t_i+h/2,(Y_i+Y_{i+1})/2)$ lies in the vector-field domain and $(Y_0,Y_N)$ lies in the boundary-map domain. Define $G_h:D_h\to(\mathbb R^d)^{N+1}$ by

$$G_{h,i}(Y)=\frac{Y_{i+1}-Y_i}{h}-f\!\left(t_i+\frac h2,\frac{Y_i+Y_{i+1}}2\right)\quad(0\le i<N),\qquad G_{h,N}(Y)=B(Y_0,Y_N).$$

Use the maximum of the Euclidean block norms for both node and residual vectors. The interior rows are normalized by $h$; consequently an unscaled increment row has size $h$ times its normalized row.
