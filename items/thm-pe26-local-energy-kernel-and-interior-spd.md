---
id: thm-pe26-local-energy-kernel-and-interior-spd
kind: theorem
title: Floating local kernels and positive interior blocks
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe26-scalar-substructuring-model]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all meshes and nodal spaces are finite."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37 and 83–84"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2, §§2.1–2.3"
      url: "https://d-nb.info/983219192/34"
---

## Statement

In the setting of [[def-pe26-scalar-substructuring-model]], the nullspace of the floating local energy matrix on a connected $\Omega_i$ is exactly the one-dimensional space of constants. The principal stiffness block $K_{II}^{(i)}$ on interior nodal values with zero boundary trace is positive definite (including the empty $0$-dimensional block convention). The assembled global Dirichlet stiffness matrix is positive definite.

## Facts & Assumptions

**Given:** A connected, face-matched $P_1$ triangulation of each $\Omega_i$, $\rho_i>0$, and the nonempty global Dirichlet boundary from [[def-pe26-scalar-substructuring-model]].

[F1] [[def-pe26-scalar-substructuring-model]]: $a_i(v,v)=\rho_i\sum_K\int_K|\nabla v|^2$; local functions are continuous and affine on every triangle; each subdomain's triangle edge-adjacency graph is connected.

[F2] [[def-pe26-scalar-substructuring-model]]: the global functions are continuous across every subdomain interface and vanish on a nonempty outer boundary segment.

## Proof

1.1 If $a_i(v,v)=0$, each nonnegative term $\rho_i\int_K|\nabla v|^2$ is zero. Since $\nabla v$ is constant on each triangle, it vanishes on every triangle, so $v$ is constant there. Continuity across every shared edge makes neighboring constants equal; connectedness of the triangle adjacency graph makes $v$ one constant on all of $\Omega_i$. Conversely, a constant has zero gradient, hence lies in the kernel. This proves the floating-block nullspace claim. [given, F1, algebra]

2.1 A vector in the interior block's kernel defines a local $P_1$ function with zero boundary trace and zero energy. Step 1.1 makes it constant and the zero boundary trace makes that constant zero. Thus the interior quadratic form is strictly positive on every nonzero vector, so its symmetric matrix $K_{II}^{(i)}$ is positive definite. If there are no interior vertices, the unique map on the zero vector space is invertible. [given, step 1.1]

3.1 If the global energy vanishes, step 1.1 applied triangle by triangle gives one constant on every subdomain. Interface continuity makes adjacent subdomain constants equal; connectedness propagates one constant through $\Omega$. The nonempty Dirichlet segment forces it to be zero. Hence only the zero global vector has zero quadratic energy, proving positive definiteness. [given, F2, step 1.1] ∎
