---
id: lem-tensor-q1-interpolation-h1-estimate
kind: lemma
title: Tensor Q1 nodal interpolation has a first-order H1 error bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-b-spline-space-and-basis
  - thm-spline-polynomial-reproduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf"
---

## Statement

Let $d\in\{2,3\}$ and let the unit cube be partitioned into uniform tensor cells of side length $h=1/N$. Let $g\in C^1([0,1]^d)$ have Lipschitz gradient with constant $M_g$, meaning $|\nabla g(x)-\nabla g(y)|\le M_g|x-y|$ for all $x,y$. Let $I_hg$ be the continuous tensor-product, degree-one nodal interpolant matching $g$ at every grid vertex. Then $I_hg$ lies in the tensor-product degree-one $C^0$ spline space and
$$\|g-I_hg\|_{H^1((0,1)^d)}\le C_d h M_g,\qquad C_d:=d+\sqrt d+2^{d-1}d\sqrt d.$$


## Facts & Assumptions

**Given:** The unit tensor grid, $g$ and its Lipschitz-gradient constant, and the nodal interpolant described in the Statement.

[F1] [[def-b-spline-space-and-basis]] defines degree-one tensor spline factors, and [[thm-spline-polynomial-reproduction]] gives their piecewise polynomial, continuity, partition and polynomial reproduction properties. On each cell, the tensor nodal shape functions are the products of the two endpoint linear factors in each coordinate; products of the one-dimensional partition/reproduction identities give $\sum_\nu\phi_\nu=1$ and $\sum_\nu(x_\nu)_r\phi_\nu=x_r$ for each coordinate $r$. Hence they reproduce every affine function.

[F2] For a $C^1$ function with $M_g$-Lipschitz gradient, integration along the line segment from $x_0$ to $x$ gives
$$|g(x)-g(x_0)-\nabla g(x_0)\cdot(x-x_0)|\le\tfrac12M_g|x-x_0|^2,\qquad |\nabla g(x)-\nabla g(x_0)|\le M_g|x-x_0|.$$

## Proof

1.1 Fix a cell $K$ and one vertex $x_0$. Put $\ell(x)=g(x_0)+\nabla g(x_0)\cdot(x-x_0)$ and $r=g-\ell$. The cell diameter is $\sqrt d\,h$, so [F2] gives $|r(x)|\le(d/2)h^2M_g$ on $K$ and $|\nabla r(x)|\le\sqrt d\,hM_g$. The tensor Q1 interpolant reproduces $\ell$, hence $g-I_Kg=r-I_Kr$. [F1, F2, given]

2.1 Let $\phi_\nu$ be the $2^d$ tensor nodal shape functions. They satisfy $\phi_\nu\ge0$, $\sum_\nu\phi_\nu=1$, and $|\nabla\phi_\nu|\le\sqrt d/h$. Thus $|I_Kr|\le(d/2)h^2M_g$ and $|\nabla I_Kr|\le\sum_\nu|r(x_\nu)||\nabla\phi_\nu|\le 2^{d-1}d\sqrt d\,hM_g.$ Combining these with step 1.1 yields $|g-I_Kg|\le dh^2M_g$ and $|\nabla(g-I_Kg)|\le(\sqrt d+2^{d-1}d\sqrt d)hM_g$. [F1, step 1.1, algebra]

3.1 Adjacent cells use the same vertex values, so their local interpolants agree on their common faces; consequently $I_hg$ is continuous and belongs to the tensor degree-one spline space defined by [F1]. Square the pointwise bounds of step 2.1, integrate on each cell, and sum over the unit-volume partition. The resulting global $L^2$ errors are at most $dh^2M_g$ and $(\sqrt d+2^{d-1}d\sqrt d)hM_g$ for value and gradient. Since $h\le1$, the Euclidean combination defining the $H^1$ norm is at most their sum, which is bounded by $C_dhM_g$. [F1, step 2.1, given, algebra] ∎
