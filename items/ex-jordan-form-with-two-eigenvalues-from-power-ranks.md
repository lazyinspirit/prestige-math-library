---
id: ex-jordan-form-with-two-eigenvalues-from-power-ranks
kind: example
title: 'Recovering a $5\times5$ Jordan form from shifted power ranks at two eigenvalues'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-jordan-block-data-controls-eigenspaces-and-polynomials, thm-jordan-form-uniqueness-from-ranks-of-powers]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $T=J_3(0)\oplus J_2(1)$. Its shifted-power ranks are
$$\rho_k(0):\ 5,4,3,2,2,\ldots,qquad \rho_k(1):\ 5,4,3,3,3,\ldots.$$
Their second differences recover one size-three block at $0$ and one size-two block at $1$. Accordingly
$$\chi_T=\mu_T=x^3(x-1)^2.$$

## Facts & Assumptions

**Given:** The displayed block diagonal matrix $T$.

[L1] The exact-size $k$ block count at $\lambda$ is $\rho_{k-1}(\lambda)-2\rho_k(\lambda)+\rho_{k+1}(\lambda)$ ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

[L2] Jordan block sizes give the characteristic and minimal polynomials by total and maximum exponents, respectively ([[cor-jordan-block-data-controls-eigenspaces-and-polynomials]]).

## Verification

**Proof technique:** computation.

1.1 At $\lambda=0$, the $J_2(1)$ summand stays invertible while the ranks of powers of $J_3(0)$ are $3,2,1,0,0,\ldots$, giving $5,4,3,2,2,\ldots$. At $\lambda=1$, the $J_3(0)-I$ summand stays invertible while the nilpotent part of $J_2(1)$ has ranks $2,1,0,0,\ldots$, giving $5,4,3,3,\ldots$. [algebra]

2.1 Applying [L1] gives one exact size-three block at $0$, one exact size-two block at $1$, and zero other blocks; [L2] then gives both displayed polynomials. [step 1.1, L1, L2, algebra] ∎
