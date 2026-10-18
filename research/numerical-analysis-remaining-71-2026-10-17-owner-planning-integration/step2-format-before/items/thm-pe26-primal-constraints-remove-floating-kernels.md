---
id: thm-pe26-primal-constraints-remove-floating-kernels
kind: theorem
title: Primal constraints remove local floating kernels
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe26-primal-interface-spaces-and-jumps, thm-pe26-local-energy-kernel-and-interior-spd, def-pe26-discrete-harmonic-extension-and-schur-complement]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the argument uses only finite-dimensional energies and the connected subdomain graph."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 83–86"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2, §§2.1–2.3"
      url: "https://d-nb.info/983219192/34"
---

## Statement

Assume the hypotheses of [[def-pe26-primal-interface-spaces-and-jumps]] and the energy setting of [[thm-pe26-local-energy-kernel-and-interior-spd]]. If each floating local component has at least one primal vertex value fixed in its dual subproblem, its local dual stiffness is positive definite. If all subdomain vertices are primal and the global Dirichlet boundary is nonempty, the partially assembled interface energy is positive definite; hence the BDDC and FETI-DP exact local and coarse solves are well-defined.

## Facts & Assumptions

**Given:** A conforming finite partition with connected subdomain adjacency, a nonempty global Dirichlet boundary, and primal constraints containing every subdomain vertex for the PE26 branch.

[F1] [[thm-pe26-local-energy-kernel-and-interior-spd]]: each connected floating local energy has kernel exactly the constants.

[F2] [[def-pe26-primal-interface-spaces-and-jumps]]: $\widetilde W$ shares primal corner values and $\widehat W=\ker B$ is the fully continuous trace space.

[F3] [[def-pe26-discrete-harmonic-extension-and-schur-complement]]: $H_i g_i=(-[K_{II}^{(i)}]^{-1}K_{I\Gamma}^{(i)}g_i,g_i)^T$ and $S_i=K_{\Gamma\Gamma}^{(i)}-K_{\Gamma I}^{(i)}[K_{II}^{(i)}]^{-1}K_{I\Gamma}^{(i)}$; $\widetilde S$ restricts $\operatorname{diag}_i S_i$ to $\widetilde W$. The interior inverse includes the empty-space convention established there.

## Proof

1.1 From [F3], block multiplication gives $K_iH_i g_i=(0,S_i g_i)^T$ and therefore $(H_i g_i)^TK_i(H_i g_i)=g_i^TS_i g_i$. Thus a zero local Schur energy is precisely zero energy of its harmonic lift. In a local dual subproblem the primal values are prescribed, so a zero-energy local vector, or the harmonic lift of a zero-energy dual trace, is constant by [F1]. A primal corner value is among its prescribed values; because the dual correction has zero primal values, that constant is zero. The local dual quadratic form therefore has trivial kernel and, being symmetric positive semidefinite, is positive definite. [given, F1, F2, F3, algebra]

1.2 For $g=(g_i)\in\widetilde W$, [F3] and step 1.1 give $g^T\widetilde Sg=\sum_i g_i^TS_i g_i=\sum_i(H_i g_i)^TK_i(H_i g_i)$. Each summand is a nonnegative local energy. If the partially assembled energy is zero, every summand is zero, so [F1] makes each local harmonic extension constant on its subdomain. Neighboring local constants agree at their shared primal corner. The adjacency graph is connected, so all constants agree; the global Dirichlet boundary makes the common value zero. Thus the partially assembled trace is zero, and its assembled energy matrix is positive definite. [given, F1, F2, F3, step 1.1, algebra]

2.1 The BDDC local dual solves use the positive local restrictions from step 1.1 and its coarse solve uses the positive partially assembled energy from step 1.2. The FETI-DP operator uses the same invertible partially assembled energy and the jump quotient of [F2]. Hence the exact local, coarse and dual systems named in the Statement are well-defined. [step 1.1, step 1.2, F2] ∎
