---
id: thm-two-sided-change-of-basis-formula
kind: theorem
title: '$[T]_{\mathcal B''}^{\mathcal C''}=P_{\mathcal C''\leftarrow\mathcal C}[T]_{\mathcal B}^{\mathcal C}P_{\mathcal B\leftarrow\mathcal B''}$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-change-of-basis-matrix, thm-change-of-basis-matrices-are-inverses,
       thm-matrix-of-a-composite-is-the-product]
justified_by: []
aliases: []
landmark: true
short: 'Two-sided change of basis'
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Theorems 3.81 and 3.84'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, change of basis'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to W$ be linear. If $\mathcal B,\mathcal B'$ are ordered bases of
$V$ and $\mathcal C,\mathcal C'$ are ordered bases of $W$, then

$$[T]_{\mathcal B'}^{\mathcal C'}=P_{\mathcal C'\leftarrow\mathcal C}[T]_{\mathcal B}^{\mathcal C}P_{\mathcal B\leftarrow\mathcal B'}.$$

## Facts & Assumptions

**Given:** The linear map and four ordered bases in the Statement.

[L1] $P_{\mathcal Y\leftarrow\mathcal X}$ is the matrix of the identity map converting $\mathcal X$-coordinates to $\mathcal Y$-coordinates ([[def-change-of-basis-matrix]]).

[L2] Matrix representation sends a composite of linear maps to the product of their matrices in compatible intermediate bases ([[thm-matrix-of-a-composite-is-the-product]]).

## Proof

**Proof technique:** direct.

1.1 Regard $T$ from $\mathcal B'$ to $\mathcal C'$ as the composite of the identity on $V$ from $\mathcal B'$ to $\mathcal B$, then $T$ from $\mathcal B$ to $\mathcal C$, then the identity on $W$ from $\mathcal C$ to $\mathcal C'$. [given, L1]

2.1 Applying [L2] twice, with the matrix of the last-applied map on the left, gives $$[T]_{\mathcal B'}^{\mathcal C'}=P_{\mathcal C'\leftarrow\mathcal C}[T]_{\mathcal B}^{\mathcal C}P_{\mathcal B\leftarrow\mathcal B'}.$$ [step 1.1, L1, L2]

3.1 The right factor is square of size $\dim V$, the middle factor has shape $(\dim W)\times(\dim V)$, and the left factor is square of size $\dim W$, so the product is defined and has the asserted shape, proving the formula. [step 2.1, L1, L2] ∎
