---
id: ex-poisson-nmf-nonunique-factorizations
kind: example
title: "A positive rate matrix has NMFs beyond scale and permutation"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-poisson-nmf-model, prop-poisson-nmf-factorization-invariances]
justified_by: []
generation:
  role: example
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let $X$ be the $2\times2$ all-ones count matrix and set $r=2$. For $0<\alpha<1$, define

$$W_\alpha=\begin{pmatrix}\alpha&1-\alpha\\\alpha&1-\alpha\end{pmatrix}, \qquad H=\begin{pmatrix}1&1\\1&1\end{pmatrix}.$$

Every pair $(W_\alpha,H)$ is strictly positive and gives rate matrix $W_\alpha H=X$. The factorizations for $\alpha=1/2$ and $\alpha=1/3$ are not related by positive component rescaling or permutation.

## Facts & Assumptions

**Given:** The count matrix and factors defined in the example statement.

[F1] [[def-poisson-nmf-model]]: the Poisson rate matrix is the product $WH$.

[F2] [[prop-poisson-nmf-factorization-invariances]]: the elementary component ambiguities rescale one factor column and its corresponding factor row inversely, or permute corresponding components.

## Verification

1.1 Each row of $W_\alpha$ sums to $1$, while each entry of $H$ is $1$, so $(W_\alpha H)_{ij}=\alpha+(1-\alpha)=1$ for every cell. This verifies the common positive rate matrix. [F1, given, algebra]

2.1 Under the transformations in [F2], each rank-one component matrix $W_{\cdot k}H_{k\cdot}$ is unchanged except for reordering. At $\alpha=1/2$ the multiset of component matrices is $\{\tfrac12X,\tfrac12X\}$, whereas at $\alpha=1/3$ it is $\{\tfrac13X,\tfrac23X\}$. These multisets differ, so the factorizations are not related by scale or permutation. [F2, step 1.1, algebra] ∎
