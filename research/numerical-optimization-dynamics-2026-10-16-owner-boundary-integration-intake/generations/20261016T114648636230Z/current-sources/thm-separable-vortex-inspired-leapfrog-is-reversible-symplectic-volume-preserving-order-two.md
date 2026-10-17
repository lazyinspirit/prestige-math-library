---
id: thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two
kind: theorem
title: Local geometric properties and second-order error of the separable regularized vortex-inspired leapfrog
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-separable-regularized-vortex-interaction-hamiltonian
  - def-leapfrog-step-map
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - prop-local-leapfrog-and-symplectic-euler-are-symplectic
  - thm-local-symplectic-euler-and-leapfrog-trajectory-errors
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
axiom_use: Countable Choice is required by the cited measurable change-of-variables theorem for volume preservation. Reversibility, symplecticity, and the local error estimate add no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
    - title: Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration
      url: https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf
---

## Statement

Assume Countable Choice. Let $H_\varepsilon(q,p)=\frac12|p|^2+V_\varepsilon(q)$ be the separable Hamiltonian of [[def-separable-regularized-vortex-interaction-hamiltonian]]. On an open collision-free configuration set, restrict the leapfrog step to states whose kick and drift stages remain in that set, as in [[def-local-leapfrog-domain-on-an-open-configuration-set]]. Then every admitted step has the following properties:

1. it is reversible: its inverse on its image is the admitted step with signed step size $-h$;
2. it is symplectic on its open admitted domain;
3. it preserves local phase volume, meaning Lebesgue measure of every measurable set and its image agree; and
4. for a fixed $T>0$ and integer $N\ge1$, with $h=T/N>0$ sufficiently small, if $V_\varepsilon\in C^3$ and the exact path, numerical states, and every kick/drift stage lie in a common compact convex tube $K\Subset Q_{cf}\times(\mathbb R^2)^N$ with derivatives of the Hamiltonian vector field through order two bounded there, the global trajectory error is $O(h^2)$ on $[0,T]$.

Claims 1–3 concern every signed admitted step; claim 4 has the stated positive-step tube hypotheses. The symplecticity and order-two conclusions use the exact hypotheses of the suppliers [[prop-local-leapfrog-and-symplectic-euler-are-symplectic]] and [[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]]. This canonical second-order Hamiltonian is a comparison model; it is not the first-order Biot-Savart particle system.

## Facts & Assumptions

**Given:** The smooth separable Hamiltonian, open collision-free domain, admitted local steps, Countable Choice, and (for claim 4) $T>0$, $N\ge1$, the compact convex tube, and bounded derivatives through order two of the Hamiltonian vector field.

[A1] Assume Countable Choice for measurable change of variables ([[def-countable-choice]]).

[F1] Leapfrog is the symmetric composition of half-kicks and a full drift; the local restriction admits exactly those stages lying in the open configuration set ([[def-leapfrog-step-map]], [[def-local-leapfrog-domain-on-an-open-configuration-set]]).

[F2] Under $V\in C^2$ and the admitted-domain hypotheses, local leapfrog is symplectic ([[prop-local-leapfrog-and-symplectic-euler-are-symplectic]]).

[F3] Under $V\in C^3$ and the stated compact convex tube, local leapfrog has global order two and its explicit finite-time error estimate ([[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]]).

[F4] A triangular matrix has determinant equal to the product of its diagonal entries, and determinants multiply ([[thm-determinant-of-a-triangular-matrix]], [[thm-determinant-multiplicative]]).

[F5] Under Countable Choice, a $C^1$ diffeomorphism between open sets satisfies change of variables for nonnegative measurable functions ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

## Proof

1.1 Write the kick and drift as $K_{h/2}$ and $D_h$. Their inverses are $K_{-h/2}$ and $D_{-h}$. Since the composition is $K_{h/2}\circ D_h\circ K_{h/2}$, its inverse on the image is $K_{-h/2}\circ D_{-h}\circ K_{-h/2}$, exactly the admitted local step with signed size $-h$. This proves reversibility on the partial-map domains. [F1, algebra]

1.2 The potential $V_\varepsilon$ is smooth on the collision-free open set. The admitted local partial map therefore satisfies the hypotheses of [F2], which proves symplecticity. Under the compact convex tube and derivative assumptions in the Given clause, [F3] gives $e_n\le e^{LT}e_0+C_VTe^{LT}h^2$; exact initialization has $e_0=0$, so the finite-time global error is at most $C_VTe^{LT}h^2$. [given, F2, F3]

1.3 On every admitted open kick domain the kick $K_a(q,p)=(q,p-a\nabla V_\varepsilon(q))$ has derivative $\begin{pmatrix}I&0\\-aD^2V_\varepsilon(q)&I\end{pmatrix}$. The drift $D_b(q,p)=(q+bp,p)$ has derivative $\begin{pmatrix}I&bI\\0&I\end{pmatrix}$. Both are block triangular with identity diagonal blocks, so each has determinant one by [F4]. The local composition is a $C^1$ diffeomorphism from its open admitted domain onto its open image, and multiplicativity [F4] gives determinant one for the composition. Applying [F5] to the map and its inverse yields equality of Lebesgue measures for every measurable set and its image. [A1, F1, F4, F5, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove reversibility, symplecticity and local volume preservation; the bound derived from [F3] proves order two on precisely the stated tube. No energy-conservation or modified-energy conclusion is used. [F3, step 1.1, step 1.2, step 1.3] ∎
