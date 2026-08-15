---
id: ex-newtons-identities-for-three-variables
kind: example
title: "Newton's identities through $p_4$ in three variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-newtons-identities, cor-power-sums-generate-when-factorial-is-invertible]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Example

For three variables, Newton's identities give

$$p_1=e_1,$$

$$p_2=e_1^2-2e_2,$$

$$p_3=e_1^3-3e_1e_2+3e_3,$$

$$p_4=e_1^4-4e_1^2e_2+2e_2^2+4e_1e_3.$$

If $6$ is invertible in the coefficient ring, the first three equations can be solved recursively for $e_1,e_2,e_3$.

## Facts & Assumptions

**Given:** Three variables over a commutative ring.

[L1] Newton's identities are $ke_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$, with $e_0=1$ and $e_k=0$ for $k>3$ ([[thm-newtons-identities]]).

[L2] If $3!$ is invertible, then $p_1,p_2,p_3$ freely generate the symmetric-polynomial ring ([[cor-power-sums-generate-when-factorial-is-invertible]]).

## Verification

**Proof technique:** direct.

1.1 At $k=1$, [L1] gives $e_1=p_1$. At $k=2$, it gives $2e_2=e_1p_1-p_2$, hence $p_2=e_1^2-2e_2$. [L1, algebra]

2.1 At $k=3$, [L1] gives $3e_3=e_2p_1-e_1p_2+p_3$; substituting step 1.1 yields $p_3=e_1^3-3e_1e_2+3e_3$. [step 1.1, L1, algebra]

3.1 At $k=4$, $e_4=0$, so [L1] gives $0=e_3p_1-e_2p_2+e_1p_3-p_4$. Substitution from steps 1.1 and 2.1 gives the displayed formula for $p_4$. [step 1.1, step 2.1, L1, algebra]

4.1 When $6$ is invertible, so are $1,2,3$, and the first three Newton identities recursively solve for the $e_i$, as asserted by [L2]. [L2, algebra] ∎
