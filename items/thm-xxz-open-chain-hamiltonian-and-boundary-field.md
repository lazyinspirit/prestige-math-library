---
id: thm-xxz-open-chain-hamiltonian-and-boundary-field
kind: theorem
title: "The XXZ generator Hamiltonian has the declared Pauli expansion and endpoint field"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-xxz-open-chain-temperley-lieb-representation
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.1, equation (2.3), PDF p. 4: Pauli form of the local operator; equation (2.2) defines the Hamiltonian as the negative sum of generators."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§2.1, printed pp. 27–29: the local generator convention used for the loop normalization."
---

## Statement

For $L\ge2$, $q=e^{i\gamma}$ and the open Hamiltonian $H_L=-\sum_{i=1}^{L-1}e_i$ from [[def-xxz-open-chain-temperley-lieb-representation]],
$$H_L=\frac12\sum_{i=1}^{L-1}\left(X_iX_{i+1}+Y_iY_{i+1}+\cos\gamma\,Z_iZ_{i+1}-\cos\gamma\,I\right)+\frac{i\sin\gamma}{2}(Z_1-Z_L).$$
The sum has $L-1$ bonds and contains no periodic bond from site $L$ to site $1$.

## Facts & Assumptions

**Given:** The Pauli expansion of $e_i$ and the open-chain range in [[def-xxz-open-chain-temperley-lieb-representation]].

[F1] On bond $i,i+1$, $e_i=-\tfrac12(X_iX_{i+1}+Y_iY_{i+1}+\cos\gamma Z_iZ_{i+1}-\cos\gamma I+i\sin\gamma(Z_i-Z_{i+1}))$, and $H_L=-\sum_{i=1}^{L-1}e_i$. ([[def-xxz-open-chain-temperley-lieb-representation]])

## Proof

**Given:** $L\ge2$, real $\gamma$, and [F1].

1.1 Negating the displayed formula for each $e_i$ changes its prefactor $-1/2$ to $1/2$. Separating the terms gives the bulk sum in the statement and the remaining term $\frac{i\sin\gamma}{2}\sum_{i=1}^{L-1}(Z_i-Z_{i+1})$. [F1, algebra]

2.1 In the endpoint sum, each interior $Z_j$, $2\le j\le L-1$, occurs once with coefficient $+1$ in $Z_j$ and once with coefficient $-1$ in $-Z_j$, hence cancels. Only $Z_1-Z_L$ remains. The original index range is $1\le i<L$, so it contributes exactly the open bonds and no wrap-around term. [F1, step 1.1, algebra] ∎
