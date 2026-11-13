---
title: A spectral window giving condition number below two
status: draft
research_item: lem-author-fc0d6c95270f-spectral-window-ratio
dependency_level: 3
---

## Prerequisites

- [def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian)


## Statement

For a connected graph with positive degrees and normalized Laplacian as defined above, suppose $0\le\eta<1/3$ and $|1-\lambda_i|\le\eta$ for $2\le i\le n$. Then $\kappa(G)\le(1+\eta)/(1-\eta)<2$.

## Facts & Assumptions

[F1] The normalized Laplacian has ordered nontrivial eigenvalues $\lambda_2,\ldots,\lambda_n$ and $\kappa(G)=\lambda_n/\lambda_2$ ([def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian)).

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 The assumed window gives $\lambda_2\ge1-\eta>0$ and $\lambda_n\le1+\eta$. Dividing nonnegative quantities by the positive lower bound yields $\kappa(G)\le(1+\eta)/(1-\eta)$. [given, F1, algebra]

2.1 Since $1-\eta>0$, the inequality $(1+\eta)/(1-\eta)<2$ is equivalent to $1+\eta<2-2\eta$, or $3\eta<1$, which is assumed. Combining the bounds proves the claim. [given, step 1.1, algebra] ∎
