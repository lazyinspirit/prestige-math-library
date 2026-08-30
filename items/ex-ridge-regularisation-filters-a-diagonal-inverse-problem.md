---
id: ex-ridge-regularisation-filters-a-diagonal-inverse-problem
kind: example
title: "Ridge regularisation damps the small-singular-value directions in a diagonal inverse problem"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-tikhonov-regularisation-has-singular-filter-factors]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A=\operatorname{diag}(1,10^{-2}), \qquad b=\begin{bmatrix} 1 \\ 1 \end{bmatrix}, \qquad \lambda=10^{-2}. $$

Then the pseudoinverse gives $(1,100)^T$, whereas the Tikhonov solution is

$$ x_\lambda= \begin{bmatrix} \frac{1}{1+\lambda} \\ \frac{10^{-2}}{10^{-4}+\lambda} \end{bmatrix} = \begin{bmatrix} \frac{100}{101} \\ \frac{100}{101} \end{bmatrix}. $$

## Facts & Assumptions

**Given:** The diagonal matrix $A$, the vector $b$, and the parameter $\lambda=10^{-2}$.

[L1] Tikhonov regularisation scales the $i$th singular direction by $\sigma_i/(\sigma_i^2+\lambda)$ ([[prop-tikhonov-regularisation-has-singular-filter-factors]]).

## Verification

**Proof technique:** computation.

1.1 The singular values are $1$ and $10^{-2}$, so the unregularised pseudoinverse multiplies the second component of $b$ by $10^2$, producing the large coefficient $100$. [algebra]
1.2 By [L1], the Tikhonov filter factors are $$ \frac{1}{1+\lambda}=\frac{100}{101}, \qquad \frac{10^{-2}}{10^{-4}+\lambda}=\frac{100}{101}, $$ so the regularised solution is the displayed vector. [L1, algebra]
2.1 Step 1.2 shows that the small singular direction is strongly damped: the unstable coefficient $100$ is replaced by $100/101$. [step 1.1, step 1.2] ∎