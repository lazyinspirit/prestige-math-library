---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-total-degree-versus-tensor-product-work.json
  precheck: pass
id: ex-total-degree-versus-tensor-product-work
kind: example
title: Three-input degree-two chaos uses ten total-degree modes versus twenty-seven tensor modes
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - def-finite-product-chaos-input
  - def-chaos-total-degree-and-hyperbolic-cross-index-sets
  - lem-chaos-index-sets-are-finite
  - thm-tensor-product-gauss-exactness-and-exponential-node-count
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct

---

## Example

For three independent uniform inputs on $[-1,1]$ with admissible cutoff
$p=(2,2,2)$, a total-degree order-two chaos basis has ten modes, while the
full coordinatewise degree-two tensor basis has twenty-seven modes. A tensor
Gaussian rule with three nodes in each coordinate also uses twenty-seven node
evaluations.

## Facts & Assumptions

**Given:** Three independent uniform inputs on $[-1,1]$, cutoffs $p_j=2$, total-degree order $s=2$, and a three-node Gaussian rule for each marginal.

[F1] [[def-chaos-total-degree-and-hyperbolic-cross-index-sets]] defines the cutoff total-degree set by coordinate sum and the tensor box by coordinatewise cutoffs.

[F2] [[lem-chaos-index-sets-are-finite]] confirms the specified finite sets are legitimate index sets containing zero.

[F3] [[thm-tensor-product-gauss-exactness-and-exponential-node-count]] gives exactly $\prod_jm_j$ distinct nodes for a tensor rule with coordinate orders $m_j$.

## Verification

1.1 For one uniform marginal, the moment Gram matrix through degree two is $\begin{pmatrix}1&0&1/3\\0&1/3&0\\1/3&0&1/5\end{pmatrix}$. Its quadratic form at $(c_0,c_1,c_2)$ is $(c_0+c_2/3)^2+c_1^2/3+4c_2^2/45$, which is positive for every nonzero vector; all required moments are finite on $[-1,1]$. Thus the cutoff is admissible. In three coordinates, the total-degree set has one zero multi-index, three degree-one indices, three indices $2e_j$, and three indices $e_i+e_j$ with $i<j$. These are disjoint and exhaust the nonnegative triples with sum at most two, so its cardinality is $1+3+3+3=10$. [F1, F2, given, algebra]

2.1 The full degree-two tensor box has $3$ choices in each of three coordinates, hence $3^3=27$ multi-indices. The three-node Gaussian rules are defined for the positive uniform measures on $[-1,1]$; their tensor rule with $m_1=m_2=m_3=3$ has $3^3=27$ distinct nodes by [F3]. Thus in this example the total-degree basis uses ten modes compared with twenty-seven tensor modes and node evaluations. [F1, F3, step 1.1, algebra] ∎
