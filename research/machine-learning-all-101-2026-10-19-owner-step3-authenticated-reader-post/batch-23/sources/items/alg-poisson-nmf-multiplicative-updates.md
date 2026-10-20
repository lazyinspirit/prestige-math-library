---
id: alg-poisson-nmf-multiplicative-updates
kind: algorithm
title: "Finite Poisson NMF multiplicative-update sweeps"
status: draft
dependency_level: 2
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-poisson-nmf-model, prop-poisson-nmf-loglikelihood]
justified_by: [lem-poisson-nmf-updates-preserve-positivity]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.6, printed pp. 553–554, equation (14.74) and Exercise 14.23"
    - title: "Daniel D. Lee and H. Sebastian Seung, Algorithms for Non-negative Matrix Factorization, NIPS 2000"
      url: "https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf"
      locator: "§4, PDF p. 3, Theorem 2 update formulas"
---

## Definition

Input an admissible count matrix $X=(x_{ij})\in\mathbb N_0^{n\times p}$ with no all-zero row or column, an inner dimension $r\ge1$, a finite sweep count $T\in\mathbb N_0$, and strictly positive initial factors $W^{(0)}\in(0,\infty)^{n\times r}$ and $H^{(0)}\in(0,\infty)^{r\times p}$. For each $t=0,\ldots,T-1$, perform one complete sweep in the stated order:

1. Set $\lambda_{ij}^{(t)}=\sum_{k=1}^rW_{ik}^{(t)}H_{kj}^{(t)}$.
2. For every $i,k$, set

   $$W_{ik}^{(t+1)}=W_{ik}^{(t)}\frac{\sum_{j=1}^p H_{kj}^{(t)}x_{ij}/\lambda_{ij}^{(t)}}{\sum_{j=1}^p H_{kj}^{(t)}}.$$

3. Recompute $\widetilde\lambda_{ij}^{(t)}=\sum_{k=1}^rW_{ik}^{(t+1)}H_{kj}^{(t)}$.
4. For every $k,j$, set

   $$H_{kj}^{(t+1)}=H_{kj}^{(t)}\frac{\sum_{i=1}^n W_{ik}^{(t+1)}x_{ij}/\widetilde\lambda_{ij}^{(t)}}{\sum_{i=1}^n W_{ik}^{(t+1)}}.$$

The first factor block uses the current $H^{(t)}$; the second uses the new $W^{(t+1)}$ and the recomputed intermediate rates.

Return $W^{(T)},H^{(T)}$. The local well-definedness result proves that every denominator and rate in these finite sweeps is positive under the stated assumptions. This algorithm makes no likelihood-monotonicity, convergence, stationary-point, or global-optimality claim.

## Definition references

[[def-poisson-nmf-model]]

[[prop-poisson-nmf-loglikelihood]]

[[lem-poisson-nmf-updates-preserve-positivity]]

[Hastie, Tibshirani, and Friedman, §14.6](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Lee and Seung, §4](https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf)
