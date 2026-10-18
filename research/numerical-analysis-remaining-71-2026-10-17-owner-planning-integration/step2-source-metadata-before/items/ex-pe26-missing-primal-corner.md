---
id: ex-pe26-missing-primal-corner
kind: example
title: A floating component with no primal corner remains singular
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe26-scalar-substructuring-model, def-pe26-primal-interface-spaces-and-jumps, thm-pe26-local-energy-kernel-and-interior-spd, thm-pe26-primal-constraints-remove-floating-kernels]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; this is a finite matrix counterexample."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 83–86"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Example

For a floating square subdomain with the local matrix

$$K=\tfrac12\begin{pmatrix}2&-1&0&-1\\-1&2&-1&0\\0&-1&2&-1\\-1&0&-1&2\end{pmatrix},$$

suppose no corner value (and no other functional that detects constants) is primal on that component. Its local energy matrix still has the constant vector in its kernel, so the local dual solve is singular. Omitting one corner while another corner remains primal does not produce this counterexample; the failure is the absence of any local anchor.

## Facts & Assumptions

**Given:** The floating local square matrix $K_i$ and a dual subproblem with no primal functional nonzero on constant vectors.

[F1] [[def-pe26-scalar-substructuring-model]]: a floating local matrix represents the sum of the local triangle diffusion energies; the displayed matrix is the four-node square instance.

[F2] [[thm-pe26-local-energy-kernel-and-interior-spd]]: a connected floating local stiffness has exactly the constants as kernel.

[F3] [[thm-pe26-primal-constraints-remove-floating-kernels]]: a primal corner value removes the local constant mode; no such conclusion holds if the component has no anchor.

## Verification

1.1 Multiplying the displayed matrix from [F1] by $\mathbf1$ gives zero, so the nonzero vector $\mathbf1$ is in the local nullspace. [given, F1, algebra]

2.1 Since the dual subproblem imposes no primal value or functional that changes on constants, $\mathbf1$ also satisfies every homogeneous local dual constraint. Thus its restricted quadratic form is singular, contradicting unique solvability if one attempted the local solve. [given, step 1.1, F2, algebra]

3.1 If one corner value were retained as primal, a dual correction would have to vanish there; a constant vector with that value zero is the zero vector, so this particular null mode would be removed as in [F3]. The counterexample therefore concerns a whole floating component with no anchor, not omission of one among several anchors. [given, F2, F3, step 1.1] ∎
