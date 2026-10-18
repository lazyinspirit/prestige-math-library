---
id: lem-crouzeix-raviart-comparison-norm
kind: lemma
title: The broken comparison expression is a norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-crouzeix-raviart-poisson-method
  - lem-crouzeix-raviart-continuous-poincare
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-reference-simplex-poincare-wirtinger
  - lem-shape-regular-affine-simplex-scaling
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.2, PDF pp. 3–4: broken gradient norm and face-jump seminorm for the nonconforming space."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–290: homogeneous CR face conditions and the broken-gradient norm."
---

## Statement

In the Poisson setting of [[def-crouzeix-raviart-poisson-method]],
$\|\cdot\|_{\sharp,h}$ is a norm on $X_h=H^1_0(\Omega)+V_h^{CR,0}$.
Its restriction to $H^1_0(\Omega)$ is the gradient norm, equivalent to the
$H^1$ norm, and its restriction to $V_h^{CR,0}$ is a norm.

## Facts & Assumptions

**Given:** A finite matching mesh of a bounded connected Lipschitz polyhedral domain, $X_h$ and $\|\cdot\|_{\sharp,h}$ from [[def-crouzeix-raviart-poisson-method]], and Countable Choice.

[F1] The expression is the sum of squared broken-gradient and scaled facet-jump terms; on $H^1_0(\Omega)$ all jumps vanish. ([[def-crouzeix-raviart-poisson-method]], [[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F2] A zero-gradient $W^{1,2}$ function on a simplex is constant by its Poincare–Wirtinger inequality; shape-regular affine scaling transfers the inequality from the reference simplex. ([[thm-reference-simplex-poincare-wirtinger]], [[lem-shape-regular-affine-simplex-scaling]])

[F3] Interior points of a connected open domain can be joined by a polygonal path in the domain. ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]])

[F4] The gradient norm is equivalent to the $H^1$ norm on $H^1_0(\Omega)$. ([[lem-crouzeix-raviart-continuous-poincare]])

[F5] Every nonempty Euclidean ball has positive Lebesgue measure. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

## Proof
1.1 Let $z\in X_h$ and suppose $\|z\|_{\sharp,h}=0$. Each nonnegative term in the finite sum is zero, so $\nabla(z|_K)=0$ on every cell and every interior and boundary facet jump vanishes. By [F2], each restriction $z|_K$ is a constant $c_K$ almost everywhere. To see that the cell-adjacency graph is connected, choose interior points in any two cells and join them by a polygonal path in $\Omega$ using [F3]. Its compact image has positive distance from $\partial\Omega$. Subdivide its segments if necessary to obtain at least one intermediate vertex; perturb each intermediate vertex in a small open ball so all joining segments stay in $\Omega$. For a fixed endpoint $a$ off a mesh face $S$ of codimension at least two, candidate points in a bounded perturbation ball whose segment from $a$ meets $S$ lie in a truncated cone $\{a+t(s-a):s\in S,1\le t\le L\}$; $L<\infty$ because $a$ is a positive distance from the compact face and the candidate ball is bounded. If $S$ has dimension $k\le d-2$, cover the bounded parameter set $S\times[1,L]$ by $O(\delta^{-(k+1)})$ cubes of side $\delta$. The cone map is Lipschitz, so their images fit in $d$-cubes of side $C\delta$ with total volume $O(\delta^{d-k-1})\to0$. Thus the forbidden endpoints form a null set. Choose the intermediate vertices successively outside the finitely many such cones and facet hyperplanes; for the last vertex also avoid the cones from the fixed endpoint at the end of the path. This is possible in each open perturbation ball by [F5]. No segment meets the codimension-at-least-two skeleton or lies in a facet hyperplane, so cell transitions occur only through relative interiors of whole facets. When $d=1$, the mesh faces are endpoints and each crossing is itself a whole facet. The crossings give a cell-adjacency chain. Zero interior jumps therefore make all constants $c_K$ equal, while a zero boundary-facet jump makes the constant zero. Every cell is connected to that boundary cell, so $z=0$ in $L^2(\Omega)$. Thus the kernel is trivial. [F2, F3, F5, given, algebra]

2.1 The expression is induced by the $L^2$ inner products of the cell gradients and the finitely many scaled facet jumps, so it is nonnegative, absolutely homogeneous, and satisfies the triangle inequality. Step 1.1 proves positive definiteness. If $z=u\in H^1_0(\Omega)$, its interior and boundary jumps vanish by the local trace theorem, so the expression equals $\|\nabla u\|_{L^2(\Omega)}$, equivalent to the $H^1$ norm by [F4]. On the finite-dimensional subspace $V_h^{CR,0}$, restriction of this inner product gives its Hilbert norm. [F1, F4, step 1.1, algebra] ∎