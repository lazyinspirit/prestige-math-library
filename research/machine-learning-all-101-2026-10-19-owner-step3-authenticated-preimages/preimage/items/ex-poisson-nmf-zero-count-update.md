---
id: ex-poisson-nmf-zero-count-update
kind: example
title: "A zero-count cell remains well-defined in a positive NMF update"
status: draft
dependency_level: 4
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [alg-poisson-nmf-multiplicative-updates, def-poisson-nmf-model, lem-poisson-nmf-updates-preserve-positivity]
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

Let

$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad W^{(0)}=H^{(0)}=\begin{pmatrix}1&1\\1&1\end{pmatrix}, \qquad r=2.$$

After one complete Poisson NMF sweep, the algorithm gives $W^{(1)}=\tfrac14\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $H^{(1)}=H^{(0)}$. The zero-count cells contribute zero to the update numerators, and every rate used in the sweep is positive.

## Facts & Assumptions

**Given:** The count matrix, positive initialization, and one sweep of the finite Poisson NMF updates.

[F1] [[def-poisson-nmf-model]]: every row and column has a positive count, and cell rates are the entries of $WH$.

[F2] [[alg-poisson-nmf-multiplicative-updates]]: a sweep updates $W$ first, recomputes the rates, then updates $H$ using the new $W$.

[F3] [[lem-poisson-nmf-updates-preserve-positivity]]: positive initialization and the nonzero row/column condition keep all rates and denominators positive.

## Verification

1.1 Initially every rate is $2$. For each $i,k$, the $W$ numerator is $0/2+1/2=1/2$ and the denominator is $1+1=2$, so $W_{ik}^{(1)}=1/4$. The recomputed intermediate rates are all $1/2$. [F1, F2, given, algebra]

2.1 For each $k,j$, the $H$ numerator is $\tfrac14(0/(1/2)) + \tfrac14(1/(1/2))=1/2$ and the denominator is $1/4+1/4=1/2$, hence $H_{kj}^{(1)}=1$. Every division is by a positive rate as guaranteed by [F3], and a zero-count cell contributes $0/(1/2)=0$, not an indeterminate quotient. [F2, F3, step 1.1, algebra] ∎
