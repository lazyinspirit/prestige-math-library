---
id: thm-pe26-static-condensation-is-exact-interface-solve
kind: theorem
title: Static condensation is the exact interface problem
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe26-scalar-substructuring-model, thm-pe26-local-energy-kernel-and-interior-spd, def-pe26-discrete-harmonic-extension-and-schur-complement, thm-block-lu-factorisation-via-an-invertible-leading-block]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof is block Gaussian elimination in finite-dimensional spaces."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §5"
      url: "https://arxiv.org/pdf/0708.4031"
---

## Statement

Let $f_i=(f_I^{(i)},f_\Gamma^{(i)})^T$ be local load contributions whose assembly is the global Galerkin load. For the global conforming Dirichlet finite-element system from [[def-pe26-scalar-substructuring-model]], eliminating all subdomain interior variables gives the assembled interface Schur system. Its solution trace is exactly the trace of the unique global Galerkin solution. After solving for this trace, reconstruct each local interior vector by

$$u_I^{(i)}=(K_{II}^{(i)})^{-1}(f_I^{(i)}-K_{I\Gamma}^{(i)}u_\Gamma^{(i)}).$$

These interior values recover the unique global Galerkin solution; the trace-dependent homogeneous part of each local reconstruction is the discrete harmonic extension.

## Facts & Assumptions

**Given:** The assembled global Galerkin right-hand side and stiffness system, its local interior/interface block partitions, the positive definite interior blocks, the local Schur complements, and the harmonic extensions. The local load vectors are chosen to assemble to that global right-hand side: interior entries are local, while contributions to a shared interface degree of freedom are summed.

[F1] [[def-pe26-scalar-substructuring-model]]: the global stiffness is the sum of local subdomain contributions, with shared interface degrees of freedom assembled by equality of their nodal values.

[F2] [[def-pe26-discrete-harmonic-extension-and-schur-complement]]: each local block has invertible $K_{II}^{(i)}$, Schur complement $S_i$, and harmonic extension $H_i$.

[F3] [[thm-block-lu-factorisation-via-an-invertible-leading-block]]: for an invertible leading block $A_{11}$, block elimination factors the matrix through $S=A_{22}-A_{21}A_{11}^{-1}A_{12}$ and the same equations are solved by first eliminating the leading variables and then solving the Schur system.

[F4] [[thm-pe26-local-energy-kernel-and-interior-spd]]: the global Dirichlet stiffness matrix is positive definite and every local interior block is invertible.

## Proof

1.1 Let $f_i=(f_I^{(i)},f_\Gamma^{(i)})^T$ be local load contributions whose assembly is the chosen global Galerkin load vector, as specified above. The global interior rows are local to each subdomain and give $$u_I^{(i)}=(K_{II}^{(i)})^{-1}(f_I^{(i)}-K_{I\Gamma}^{(i)}u_\Gamma^{(i)}).$$ The local interface residual contribution is $K_{\Gamma I}^{(i)}u_I^{(i)}+K_{\Gamma\Gamma}^{(i)}u_\Gamma^{(i)}-f_\Gamma^{(i)}$. Substituting the interior formula makes it $S_i u_\Gamma^{(i)}-(f_\Gamma^{(i)}-K_{\Gamma I}^{(i)}(K_{II}^{(i)})^{-1}f_I^{(i)})$, precisely the local Schur contribution in [F3]. The global interface rows are the assembled sum of these contributions, not separate local interface equations. [given, F1, F2, F3, algebra]


2.1 Sum the reduced equations from step 1.1 over subdomains and identify copies of each shared nodal value as in [F1]. Because both the stiffness and the local load vectors assemble by summing their shared interface components, this gives the assembled interface Schur system with the correspondingly reduced global right-hand side. Any solution of the original global system yields this trace. Conversely, a solution of the assembled interface system and the uniquely defined interior values from step 1.1 satisfy every local interior equation and the assembled sum of interface equations, hence the assembled global system. [given, F1, step 1.1]


3.1 The global stiffness is positive definite by [F4], so the original solution is unique. Once the interface trace is solved, each local interior vector is exactly the reconstruction formula in step 1.1, which is unique because $K_{II}^{(i)}$ is invertible. Its trace-dependent homogeneous part is $H_i u_\Gamma^{(i)}$ from [F2]. Therefore static condensation is exact in both directions. [F2, F4, step 1.1, step 2.1] ∎

