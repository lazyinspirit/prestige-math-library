---
id: lem-poisson-nmf-updates-preserve-positivity
kind: lemma
title: "Strictly positive initialization keeps the Poisson NMF updates well-defined"
status: draft
dependency_level: 3
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-poisson-nmf-multiplicative-updates, def-poisson-nmf-model]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Daniel D. Lee and H. Sebastian Seung, Algorithms for Non-negative Matrix Factorization, NIPS 2000"
      url: "https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf"
      locator: "§4, PDF p. 3, multiplicative update formulas"
---

## Statement

Suppose $X=(x_{ij})\in\mathbb N_0^{n\times p}$ has at least one positive entry in every row and every column. If $W\in(0,\infty)^{n\times r}$ and $H\in(0,\infty)^{r\times p}$, then one complete Poisson NMF multiplicative-update sweep produces strictly positive updated factors and strictly positive rates at both update stages. Consequently every finite number of sweeps from a strictly positive initialization is well-defined.

## Statement references

[[alg-poisson-nmf-multiplicative-updates]]

## Facts & Assumptions

**Given:** An admissible count matrix $X$, positive factors $W,H$, and the simultaneous update formulas of the Poisson NMF algorithm.

[F1] [[def-poisson-nmf-model]]: every row and column of $X$ contains a positive count.

[F2] [[alg-poisson-nmf-multiplicative-updates]]: each $W$ update multiplies a positive entry by a row numerator divided by a sum of positive $H$ entries; each $H$ update multiplies a positive entry by a column numerator divided by a sum of positive updated $W$ entries.

## Proof

1.1 Since $W,H$ are strictly positive, every current rate $\lambda_{ij}=\sum_k W_{ik}H_{kj}$ is positive. For each row $i$, choose $j_0$ with $x_{ij_0}>0$ using [F1]. Then for every $k$, the numerator $\sum_jH_{kj}x_{ij}/\lambda_{ij}$ has the positive term $H_{kj_0}x_{ij_0}/\lambda_{ij_0}$, while its denominator $\sum_jH_{kj}$ is positive. Thus every updated $W_{ik}$ is positive. [F1, F2, given, choose, algebra]

2.1 The intermediate rates $\widetilde\lambda_{ij}=\sum_kW_{ik}^{\mathrm{new}}H_{kj}$ are positive. For each column $j$, choose $i_0$ with $x_{i_0j}>0$ using [F1]. For every $k$, the numerator $\sum_iW_{ik}^{\mathrm{new}}x_{ij}/\widetilde\lambda_{ij}$ has the positive term at $i_0$, and its denominator $\sum_iW_{ik}^{\mathrm{new}}$ is positive. Thus every updated $H_{kj}$ is positive. Repeating this argument inductively proves the claim for each finite sweep. [F1, F2, step 1.1, choose, algebra] ∎
