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
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.4, PDF p. 4, and Lemma 36.9, PDF pp. 7–8: broken-gradient norm and scaled facet-jump estimate for the homogeneous CR space."
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

[F6] A finite union of measurable null sets is null by finite subadditivity. ([[thm-finite-and-countable-subadditivity-of-measures]])

[F7] Cauchy--Schwarz in a real inner-product space gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and expansion of $\|x+y\|^2$ then gives the triangle inequality for its induced norm. ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]])

## Proof
1.1 Let $z\in X_h$ and suppose $\|z\|_{\sharp,h}=0$. Each nonnegative term in the finite sum is zero, so $\nabla(z|_K)=0$ on every cell and every interior and boundary facet jump vanishes. By [F2], each restriction $z|_K$ is a constant $c_K$ almost everywhere. To see that the cell-adjacency graph is connected, choose interior points in any two cells and join them by a polygonal path in $\Omega$ using [F3]. Its compact image has positive distance from $\partial\Omega$. Subdivide its segments if necessary to obtain at least one intermediate vertex; perturb each intermediate vertex in a small open ball so all joining segments stay in $\Omega$. For a fixed endpoint $a$ off a mesh face $S$ of codimension at least two, candidate points in a bounded perturbation ball whose segment from $a$ meets $S$ lie in a truncated cone $\{a+t(s-a):s\in S,1\le t\le L\}$; $L<\infty$ because $a$ is a positive distance from the compact face and the candidate ball is bounded. If $S$ has dimension $k\le d-2$, cover the bounded parameter set $S\times[1,L]$ by $O(\delta^{-(k+1)})$ cubes of side $\delta$. The cone map is Lipschitz, so their images fit in $d$-cubes of side $C\delta$ with total volume $O(\delta^{d-k-1})\to0$. Bounded portions of facet hyperplanes are also null by the same covering count with $k=d-1$. Thus all forbidden sets are measurable null sets, and [F6] makes each finite union null. By [F5], a perturbation ball has positive measure and so contains a point outside that union. Choose the intermediate vertices successively outside the finitely many cones from the previous vertex and facet hyperplanes; for the last vertex also avoid the cones from the fixed endpoint at the end of the path. No segment meets the codimension-at-least-two skeleton or lies in a facet hyperplane, so cell transitions occur only through relative interiors of whole facets. When $d=1$, the mesh faces are endpoints and each crossing is itself a whole facet. The crossings give a cell-adjacency chain. Zero interior jumps therefore make all constants $c_K$ equal, while a zero boundary-facet jump makes the constant zero. Every cell is connected to that boundary cell, so $z=0$ in $L^2(\Omega)$. Thus the kernel is trivial. [F2, F3, F5, F6, given, algebra]

2.1 Map $z\in X_h$ to the finite direct sum $Y=\bigoplus_K L^2(K;\mathbb R^d)\oplus\bigoplus_F L^2(F)$ by $Jz=((\nabla z|_K)_K,(h_F^{-1/2}[z]_F)_F)$. The sum of the component integral pairings is an inner product on $Y$, and its induced norm satisfies $\|Jz\|_Y=\|z\|_{\sharp,h}$. Cauchy--Schwarz [F7] and expansion of the squared norm give the triangle inequality; step 1.1 shows $J$ is injective, proving positive definiteness on $X_h$. If $z=u\in H^1_0(\Omega)$, its interior and boundary jumps vanish by the local trace theorem, so the expression equals $\|\nabla u\|_{L^2(\Omega)}$, equivalent to the $H^1$ norm by [F4]. Finally, on the finite-dimensional space $V_h^{CR,0}$ the restriction is an inner-product norm; in its explicit face basis its Gram matrix is positive definite, so that norm is equivalent to the Euclidean coefficient norm and is complete. Thus $V_h^{CR,0}$ is Hilbert in the comparison norm. [F1, F4, F7, step 1.1, algebra] ∎
