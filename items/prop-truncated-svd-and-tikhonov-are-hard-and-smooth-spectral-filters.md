---
id: prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters
kind: proposition
title: "Truncated SVD and Tikhonov regularisation act as hard and smooth spectral filters on the singular components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-truncated-singular-value-pseudoinverse-at-a-declared-threshold,
       prop-tikhonov-regularisation-has-singular-filter-factors]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
    - title: "Stanford CS205L, Unit 12: Regularization"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_12_regularization.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let
$A\in M_{m\times n}(\mathbb F)$ have singular value decomposition
$A=U\Sigma V^*$, let $b\in\mathbb F^m$, let $\tau\ge0$, and let $\lambda>0$.
In singular-value coordinates, applying the two filters to $b$ gives the
following coefficients: truncated SVD multiplies the $i$th singular component by

$$ g_\tau(\sigma_i)= \begin{cases} \sigma_i^{-1}, & \sigma_i>\tau, \\ 0, & \sigma_i\le\tau, \end{cases} $$

whereas Tikhonov regularisation multiplies it by
$g_\lambda(\sigma_i)=\sigma_i/(\sigma_i^2+\lambda)$. Thus truncated SVD is a
hard spectral filter and Tikhonov regularisation is a smooth spectral filter.

## Facts & Assumptions

**Given:** A scalar field $\mathbb F\in\{\mathbb R,\mathbb C\}$, a singular
value decomposition $A=U\Sigma V^*$, a right-hand side $b\in\mathbb F^m$, a
threshold $\tau\ge0$, and a parameter $\lambda>0$.

[L1] The truncated pseudoinverse replaces retained singular values by their reciprocals and discards the rest ([[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]]).

[L2] Tikhonov regularisation scales the $i$th singular direction by $\sigma_i/(\sigma_i^2+\lambda)$ ([[prop-tikhonov-regularisation-has-singular-filter-factors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applying $A_\tau^+$ to $b=\sum_i \langle b,u_i\rangle u_i$ gives $$ A_\tau^+b =\sum_{\sigma_i>\tau}\frac{1}{\sigma_i}\,\langle b,u_i\rangle v_i. $$ Thus the filter is $g_\tau(\sigma_i)$ with a hard cutoff at $\tau$. [L1, algebra]
1.2 By [L2], the Tikhonov solution is $$ x_\lambda =\sum_{\sigma_i>0}\frac{\sigma_i}{\sigma_i^2+\lambda}\,\langle b,u_i\rangle v_i. $$ Hence every nonzero singular direction is retained but damped smoothly according to $g_\lambda(\sigma_i)$, while zero singular directions have filter value $g_\lambda(0)=0$. [L2, algebra]
2.1 Step 1.1 is the truncated-SVD filter and step 1.2 is the Tikhonov filter, so the two methods are hard and smooth spectral filters respectively. [step 1.1, step 1.2] ∎
