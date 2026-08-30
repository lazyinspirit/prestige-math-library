---
id: prop-tikhonov-regularisation-has-singular-filter-factors
kind: proposition
title: "Tikhonov regularisation scales each singular component by the filter factor $\\sigma/(\\sigma^2+\\lambda)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-singular-value-decomposition,
       thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford CS205L, Unit 12: Regularization"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_12_regularization.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let
$A\in M_{m\times n}(\mathbb F)$ have singular value decomposition
$A=U\Sigma V^*$, and let $b\in\mathbb F^m$. If $x_\lambda$ is the Tikhonov
minimiser for this $A$ and $b$ at a parameter $\lambda>0$, then

$$ x_\lambda =\sum_{\sigma_i>0}\frac{\sigma_i}{\sigma_i^2+\lambda}\,\langle b,u_i\rangle v_i. $$

Thus the $i$th singular component is multiplied by the filter factor
$\sigma_i/(\sigma_i^2+\lambda)$.

## Facts & Assumptions

**Given:** A scalar field $\mathbb F\in\{\mathbb R,\mathbb C\}$, a singular
value decomposition $A=U\Sigma V^*$, a right-hand side $b\in\mathbb F^m$,
and a parameter $\lambda>0$.

[L1] $A$ admits a singular value decomposition with left singular vectors $u_i$ and right singular vectors $v_i$ ([[thm-singular-value-decomposition]]).

[L2] The Tikhonov minimiser is $(A^*A+\lambda I)^{-1}A^*b$ ([[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]).

## Proof

**Proof technique:** direct.

1.1 Using [L2] and the SVD from [L1], $$ x_\lambda =V(\Sigma^*\Sigma+\lambda I)^{-1}\Sigma^*U^*b. $$ [L1, L2, algebra]

2.1 The diagonal matrix $(\Sigma^*\Sigma+\lambda I)^{-1}\Sigma^*$ has diagonal entries $\sigma_i/(\sigma_i^2+\lambda)$ in the nonzero singular directions and $0$ in the zero singular directions. Therefore $$ x_\lambda =\sum_{\sigma_i>0}\frac{\sigma_i}{\sigma_i^2+\lambda}\,\langle b,u_i\rangle v_i. $$ [step 1.1, algebra]

3.1 This is exactly the stated filter-factor formula. [step 2.1] ∎
