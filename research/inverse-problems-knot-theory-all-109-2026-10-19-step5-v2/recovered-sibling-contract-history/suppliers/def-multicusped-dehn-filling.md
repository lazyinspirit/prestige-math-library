---
id: def-multicusped-dehn-filling
kind: definition
title: "Slopes and generalized fillings on torus cusps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-primitive-pair-defines-torus-slope
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §4.5, generalized Dehn surgery invariants"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf"
      locator: "Chapter 5, §5.8, generalized Dehn surgery parameters"
    - title: "Danny Calegari, Kleinian Groups"
      url: "https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf"
      locator: "§2.4.1, cone angles and the primitive peripheral equation"
verification:
  precheck: n/a
---

## Definition

Let $\overline M$ be a compact connected oriented three-manifold whose boundary is a disjoint union of tori $T_1,\ldots,T_k$. Choose an ordered integral basis $([\mu_i],[\lambda_i])$ for each $H_1(T_i;\mathbb Z)$. A **slope** on $T_i$ is an unoriented isotopy class of essential simple closed curves whose homology class is $p_i[\mu_i]+q_i[\lambda_i]$ for a primitive pair $(p_i,q_i)\in\mathbb Z^2$; simultaneous negation gives the same unoriented slope. The primitive-pair correspondence gives exactly one such slope for each primitive pair modulo sign. The **ordinary Dehn filling** along a tuple of slopes indexed by $J\subseteq\{1,\ldots,k\}$ attaches an oriented solid torus $D^2\times S^1$ to each $T_i$, $i\in J$, by an orientation-reversing boundary homeomorphism that sends $[\partial D^2\times\{*\}]$ to the chosen slope. The gluing maps are part of the filling data; $i\notin J$ means that the cusp is left unfilled, denoted by the parameter $\infty$.

For a hyperbolic deformation, use **signed generalized cone-filling parameters** in the one-point compactification $\mathbb R^2\cup\{\infty\}$ of the real coefficient plane, with $\infty$ denoting the complete cusp. The sign convention is fixed by a selected common peripheral eigenline and near-zero eigenvalue-ratio logarithms $u_i,v_i$: at an incomplete cusp the coefficients $g_i=(\alpha_i,\beta_i)$ solve $\alpha_i u_i+\beta_i v_i=2\pi i$. Reversing the selected eigenline negates both logarithms and the coefficient vector. Forgetting this selection gives the intrinsic generalized invariant in $(\mathbb R^2/\{g\sim-g\})\cup\{\infty\}$; the unquotiented sphere is its signed parameter space. A primitive integral pair $(p_i,q_i)$ is an ordinary smooth filling coefficient. If a realized generalized parameter lies on the ray $g_i=r_i(p_i,q_i)$ with $r_i>0$ and $(p_i,q_i)$ primitive integral, its topological core direction is the ordinary slope $(p_i,q_i)$ and its cone angle is $2\pi/r_i$. Only $r_i=1$ is the ordinary smooth filling; $r_i>1$ describes a cone completion (an orbifold completion when $r_i$ is an integer) and does not turn the nonprimitive vector $g_i$ into a slope.

## Definition references

[[lem-primitive-pair-defines-torus-slope|Primitive-pair correspondence on a torus]]

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Danny Calegari, *Kleinian Groups*, §2.4.1](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)
