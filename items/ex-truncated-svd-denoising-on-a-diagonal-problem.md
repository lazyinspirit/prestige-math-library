---
id: ex-truncated-svd-denoising-on-a-diagonal-problem
kind: example
title: "Truncated SVD denoising on a diagonal problem keeps the declared large singular directions and discards the noisy ones"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-truncated-singular-value-pseudoinverse-at-a-declared-threshold,
       prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters]
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

$$ A=\operatorname{diag}(4,10^{-2}), \qquad b=\begin{bmatrix} 8 \\ 1 \end{bmatrix}, \qquad \tau=10^{-1}. $$

Then the truncated pseudoinverse keeps the first singular direction and drops
the second, so

$$ A_\tau^+b= \begin{bmatrix} 2 \\ 0 \end{bmatrix}. $$

## Facts & Assumptions

**Given:** The diagonal matrix $A$, the data vector $b$, and the threshold $\tau=10^{-1}$.

[L1] The truncated singular-value pseudoinverse keeps the reciprocal $1/\sigma_i$ exactly when $\sigma_i>\tau$ ([[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]]).

[L2] Truncated SVD is the hard spectral filter among the regularisation methods ([[prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters]]).

## Verification

**Proof technique:** computation.

1.1 The singular values of $A$ are $4$ and $10^{-2}$. Since $4>\tau$ but $10^{-2}\le\tau$, [L1] gives $$ A_\tau^+=\operatorname{diag}\!\left(\frac14,0\right). $$ [L1, algebra]
2.1 Multiplying by $b$ yields $$ A_\tau^+b= \operatorname{diag}\!\left(\frac14,0\right) \begin{bmatrix} 8 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}. $$ [step 1.1, algebra]
3.1 The second data component is discarded entirely because it lies in the singular direction below the declared threshold, exactly as [L2] predicts. [L2, step 2.1] ∎