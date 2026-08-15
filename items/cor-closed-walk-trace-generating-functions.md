---
id: cor-closed-walk-trace-generating-functions
kind: corollary
title: "Closed walks have trace and logarithmic-derivative generating functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-transfer-matrix-cofactor-formula, lem-derivative-of-det-i-minus-xa, def-trace-of-a-square-matrix-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Corollary 4.7.3"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $p\ge1$, let $A\in M_p(R)$ be a transfer matrix, and put $Q(x)=\det(I_p-xA)$. Then

$$\sum_{n\ge0}\operatorname{tr}_R(A^n)x^n=\frac{\operatorname{tr}_{R[x]}(\operatorname{adj}(I_p-xA))}{Q(x)},$$

and

$$\sum_{n\ge1}\operatorname{tr}_R(A^n)x^n=-\frac{xQ'(x)}{Q(x)}.$$

The coefficient $\operatorname{tr}_R(A^n)$ is the total weight of all closed walks of length $n$. Each trace subscript names the commutative ring its argument's entries lie in: $A^n\in M_p(R)$, while $\operatorname{adj}(I_p-xA)$ has entries in $R[x]$, so that numerator is $\operatorname{tr}_{R[x]}$. The defining formula $\sum_{i<p}a_{ii}$ is the same in each case. The second expression is a formal logarithmic derivative; no logarithm or convergence is required.

## Facts & Assumptions

**Given:** A positive-sized transfer matrix $A$ over a commutative ring $R$, $M=I_p-xA$, and $Q=\det M$.

[L1] The transfer-matrix formula identifies each entry of $M^{-1}$ with the corresponding weighted-walk series and with an adjugate entry divided by $Q$ ([[thm-transfer-matrix-cofactor-formula]]).

[L2] The determinant derivative satisfies $Q'=-\operatorname{tr}_{R[x]}(\operatorname{adj}(M)A)$, the trace being over $R[x]$ where those entries lie ([[lem-derivative-of-det-i-minus-xa]]).

[L3] The ring trace is the finite sum of diagonal entries, including the empty-sum convention ([[def-trace-of-a-square-matrix-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Sum the diagonal instances of [L1]. By [L3], the left side is $\sum_{n\ge0}\operatorname{tr}_R(A^n)x^n$ and the numerator on the right is $\operatorname{tr}_{R[x]}(\operatorname{adj}(M))$, proving the first identity and the closed-walk interpretation. [given, L1, L3]

1.2 From [L1], $M^{-1}=\sum_{n\ge0}A^nx^n=\operatorname{adj}(M)/Q$. Multiplying by $A$, taking the trace over $R\llbracket x\rrbracket$ where $M^{-1}A$ has its entries, and then multiplying by $x$ gives $x\operatorname{tr}_{R\llbracket x\rrbracket}(M^{-1}A)=\sum_{n\ge1}\operatorname{tr}_R(A^n)x^n$, the right-hand coefficients being the traces over $R$ of the matrices $A^n$. [L1, L3, algebra]

2.1 Dividing [L2] by the unit $Q$ gives $-xQ'/Q=x\operatorname{tr}_{R\llbracket x\rrbracket}(M^{-1}A)$. Combine this with step 1.2 to obtain the second identity. [step 1.2, L2, algebra]

3.1 Both calculations take place in $R\llbracket x\rrbracket$, so they require no topology or spectral-radius assumption. [step 1.1, step 2.1] ∎

