---
id: lem-derivative-of-det-i-minus-xa
kind: lemma
title: '$\frac{d}{dx}\det(I-xA)=-\operatorname{tr}(\operatorname{adj}(I-xA)A)$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-trace-of-a-square-matrix-over-a-commutative-ring, def-matrix-minors-cofactors-and-adjugate, def-determinant-of-a-square-matrix, def-formal-power-series-derivative, prop-formal-derivative-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Corollary 4.7.3"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $p\ge1$, let $A\in M_p(R)$, and put $M(x)=I_p-xA$. Then, with the formal derivative,

$$\frac{d}{dx}\det M(x)=-\operatorname{tr}_{R[x]}\bigl(\operatorname{adj}(M(x))A\bigr).$$

The subscript names the coefficient ring the trace is taken over. Since $\operatorname{adj}(M(x))A$ has entries in $R[x]$, not in $R$, the trace here is the one belonging to the commutative ring $R[x]$; the defining formula $\sum_{i<p}a_{ii}$ is the same.

## Facts & Assumptions

**Given:** A commutative ring $R$, a positive size $p$, a matrix $A\in M_p(R)$, and $M=I_p-xA$.

[L1] The ring trace is the finite sum of the diagonal entries ([[def-trace-of-a-square-matrix-over-a-commutative-ring]]).

[L2] The adjugate is the transpose of the cofactor matrix, so $\operatorname{adj}(M)_{ij}=C_{ji}(M)$ ([[def-matrix-minors-cofactors-and-adjugate]]).

[L3] The determinant is the Leibniz sum $\det(M)=\sum_\sigma\operatorname{sgn}(\sigma)\prod_iM_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]).

[L4] The formal derivative is coefficientwise and sends $x$ to $1$ and constants to $0$ ([[def-formal-power-series-derivative]]).

[L5] Formal differentiation is linear and satisfies the product rule ([[prop-formal-derivative-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Differentiate the finite Leibniz sum [L3]. By [L5], each product contributes one term for each selected matrix entry, and grouping all terms that differentiate $M_{ij}$ leaves its cofactor $C_{ij}(M)$. [given, L3, L5]

1.2 By [L1] and matrix multiplication, $\operatorname{tr}_R(\operatorname{adj}(M)A)=\sum_i\sum_j\operatorname{adj}(M)_{ij}A_{ji}$. Using [L2] and renaming the finite indices gives $\sum_{i,j}C_{ij}(M)A_{ij}$. [L1, L2, algebra]

2.1 Thus $(\det M)'=\sum_{i,j}C_{ij}(M)M'_{ij}$. Since $M'= -A$ by [L4], this is $-\sum_{i,j}C_{ij}(M)A_{ij}$. [step 1.1, L4, algebra]

3.1 Comparing steps 2.1 and 1.2 gives the displayed derivative identity. Positive size supplies every cofactor used in [L2]. [step 2.1, step 1.2, L2] ∎
