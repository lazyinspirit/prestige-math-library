---
id: thm-graph-gradient-error-from-local-jacobian-perturbations
kind: theorem
title: "Local Jacobian perturbations give a pathwise bound for graph-gradient error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, thm-reverse-mode-computes-gradient]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §1"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
dependency_level: 3
---

## Statement

For a finite scalar-output graph on one fixed strict branch, associate to each parent-slot edge $e$ the exact local derivative map $A_e$ at the exact real-arithmetic primal values. Suppose a reverse recurrence instead uses local maps $\widetilde A_e$ from the same branch satisfying $\|\widetilde A_e-A_e\|\le\eta_e$, with exact accumulation arithmetic. For an input block $i$, let $\mathcal P(i,o)$ be the finite directed paths from that block to output $o$, and order the edges of a path $\pi=(e_1,\ldots,e_s)$ from input to output. The exact gradient contribution is the transpose of $A_{e_s}\cdots A_{e_1}$, and the perturbed recurrence returns the corresponding sum using $\widetilde A_e$. It obeys
$$\|\widetilde g_i-g_i\|\le\sum_{\pi\in\mathcal P(i,o)}\sum_{\ell=1}^s\eta_{e_\ell}\left(\prod_{r<\ell}\|A_{e_r}\|\right)\left(\prod_{r>\ell}(\|A_{e_r}\|+\eta_{e_r})\right).$$
The bound covers local Jacobian and derivative-evaluation errors represented by $\eta_e$. It does not include roundoff in the reverse accumulation additions.

## Facts & Assumptions

**Given:** A finite $C^1$ graph on a fixed strict branch, exact edge Jacobians $A_e$, perturbed edge Jacobians $\widetilde A_e$, and exact real accumulation of the perturbed reverse recurrence.

[F1] [[def-finite-straight-line-computational-program]]: a graph is finite and acyclic, and each parent slot defines a separate edge with a local derivative map.

[F2] [[thm-reverse-mode-computes-gradient]]: exact reverse accumulation returns the gradient of the graph's scalar output.

[A1] Each edge perturbation satisfies the stated operator-norm bound; all sums and products in this theorem are exact real arithmetic.

## Proof

**Proof technique:** expand reverse accumulation into paths and telescope each matrix product.

1.1 Starting with output cotangent $1$, the exact reverse recurrence at a node sums one local derivative-transpose contribution from each outgoing parent-slot edge. By induction in reverse topological order, its expansion at input block $i$ has one ordered derivative product for every path from $i$ to the output: the length-zero path at the output node has product $1$ (including when the output itself is an input), and extending a path by one edge multiplies its product by that edge's local derivative. The same finite recurrence with $\widetilde A_e$ yields the sum of perturbed path products; the output seed is unchanged. By [F2], the exact path sum is $g_i$. [F1, F2, given, construct]

1.2 Fix a path $\pi=(e_1,\ldots,e_s)$. Insert one factor at a time to write
$$\widetilde A_{e_s}\cdots\widetilde A_{e_1}-A_{e_s}\cdots A_{e_1}=\sum_{\ell=1}^s\widetilde A_{e_s}\cdots\widetilde A_{e_{\ell+1}}(\widetilde A_{e_\ell}-A_{e_\ell})A_{e_{\ell-1}}\cdots A_{e_1}.$$
This identity follows by cancellation of consecutive products in the telescoping sum. [A1, algebra]

2.1 Submultiplicativity of the induced operator norm and [A1] bound the $\ell$th summand by $\eta_{e_\ell}\prod_{r<\ell}\|A_{e_r}\|\prod_{r>\ell}(\|A_{e_r}\|+\eta_{e_r})$. Summing these bounds over $\ell$ controls the error on this path. [A1, step 1.2, algebra]

3.1 The perturbed and exact gradients are finite sums over the same paths by step 1.1. The triangle inequality therefore bounds their difference by the sum of the pathwise errors from step 2.1, which is exactly the displayed bound. [step 1.1, step 2.1, algebra] ∎
