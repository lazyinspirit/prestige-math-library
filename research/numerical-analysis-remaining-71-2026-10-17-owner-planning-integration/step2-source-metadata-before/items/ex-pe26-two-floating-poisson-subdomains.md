---
id: ex-pe26-two-floating-poisson-subdomains
kind: example
title: Two floating Poisson subdomains and primal anchoring
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe26-scalar-substructuring-model, thm-pe26-local-energy-kernel-and-interior-spd, def-pe26-primal-interface-spaces-and-jumps, thm-pe26-primal-constraints-remove-floating-kernels, def-pe26-discrete-harmonic-extension-and-schur-complement, thm-pe26-harmonic-extension-minimizes-energy, thm-pe26-static-condensation-is-exact-interface-solve, def-pe26-scaled-averaging-and-bddc-preconditioner, def-pe26-feti-dp-dual-system-and-preconditioner]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the example is an exact four-degree-of-freedom calculation."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37 and 83–84"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Example

Take two adjacent unit-square subdomains, each split by the diagonal from its southwest to its northeast corner into two affine triangles, and put coefficient $\rho=1$. Before outer Dirichlet values are imposed, each local floating stiffness matrix in the cyclic vertex order $(a,b,c,d)$ is

$$K_i=\tfrac12\begin{pmatrix}2&-1&0&-1\\-1&2&-1&0\\0&-1&2&-1\\-1&0&-1&2\end{pmatrix}.$$

The two interface endpoints are primal corners. Impose homogeneous Dirichlet data on the full top exterior side of the two-square domain, a nonempty segment that is a union of mesh sides. The local constant modes are thereby anchored, and the shared primal corners enforce their common interface values; after exact interior elimination, the assembled Schur solve is the original finite-element problem.

## Facts & Assumptions

**Given:** Two matching square subdomains with the two-triangle $P_1$ mesh just specified; the cyclic node order $(a,b,c,d)$; coefficient one; primal interface endpoints; and homogeneous Dirichlet values on the full top exterior side of the domain.

[F1] [[def-pe26-scalar-substructuring-model]]: each local Poisson energy is the sum of triangle integrals of $|\nabla v_h|^2$.

[F2] [[thm-pe26-local-energy-kernel-and-interior-spd]]: the floating local kernel on a connected subdomain is the constants.

[F3] [[thm-pe26-primal-constraints-remove-floating-kernels]]: anchored primal corners and a nonempty Dirichlet boundary make the partially assembled energy positive definite.

[F4] [[thm-pe26-static-condensation-is-exact-interface-solve]]: eliminating interiors and reconstructing by discrete harmonic extension is exactly equivalent to the global finite-element solve.

## Verification

1.1 On triangle $(a,b,c)$ the affine basis gradients are $(-1,0),(1,-1),(0,1)$ and its area is $1/2$; on triangle $(a,c,d)$ they are $(0,-1),(1,0),(-1,1)$ and its area is $1/2$. Adding the two local Gram matrices of these gradients gives the displayed $K_i$. [given, F1, construct, algebra]

2.1 The displayed matrix has zero row sums, and its quadratic form is $\tfrac12[(u_a-u_b)^2+(u_b-u_c)^2+(u_c-u_d)^2+(u_d-u_a)^2]$. It is therefore nonnegative with kernel exactly the constant vector, agreeing with [F2]. [given, step 1.1, F2, algebra]

3.1 The imposed zero values on each subdomain's top exterior side fix its local constant mode; equality at the shared primal endpoints also enforces interface continuity. Thus [F3] gives an invertible partially assembled solve. Theorem [F4] then identifies the condensed interface solution and harmonic reconstruction with the original global finite-element solution. [given, F3, F4, step 2.1] ∎
