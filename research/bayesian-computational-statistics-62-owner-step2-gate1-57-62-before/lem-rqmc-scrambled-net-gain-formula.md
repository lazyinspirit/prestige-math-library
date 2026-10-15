---
id: lem-rqmc-scrambled-net-gain-formula
kind: lemma
title: "Pair-count formula for scrambled-net gain coefficients"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - lem-rqmc-scrambled-net-variance-identity
  - def-nested-uniform-scramble
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only from the L2 variance-identity supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §7"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
---

## Statement

Assume Countable Choice and use the gains $\Gamma_{u,\kappa}$ of
[[lem-rqmc-scrambled-net-variance-identity]]. For a nonempty
$u\subseteq\{1,\ldots,d\}$ and a vector $\ell=(\ell_q)_{q\in u}$ of
nonnegative integers, define the ordered pair count
$$C_u(\ell)=\sum_{i=1}^n\sum_{j=1}^n \mathbf1\{\lfloor b^{\ell_q}a_{i,q}\rfloor =\lfloor b^{\ell_q}a_{j,q}\rfloor\text{ for every }q\in u\}.$$
Let $\mathbf1_V$ be the vector that is $1$ on $V\subseteq u$ and $0$ on
$u\setminus V$. Then
$$\Gamma_{u,\kappa} =\frac{1}{n(b-1)^{|u|}} \sum_{V\subseteq u}(-1)^{|u|-|V|}b^{|V|} C_u(\kappa+\mathbf1_V).$$

## Facts & Assumptions

**Given:** Countable Choice, the fixed input point set, base $b$, the subset $u$, and scale vector $\kappa$.

[F1] [[lem-rqmc-scrambled-net-variance-identity]]: $n\Gamma_{u,\kappa}=\sum_{i,j}\prod_{q\in u}\Upsilon_{ij,q,k_q}$.

[F2] [[def-nested-uniform-scramble]]: $\Upsilon_{ij,q,k}=(b-1)^{-1}(b\,\mathbf1_{\{\text{same prefix of length }k+1\}}-\mathbf1_{\{\text{same prefix of length }k\}})$.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the variance-identity supplier [F1].

## Proof

**Proof technique:** direct.

**Given:** The objects and definitions in the Statement.

1.1 For each $q\in u$, expand the numerator of [F2] as the difference of its two prefix-equality indicators. In the product over $q$, choose the finer-prefix term on a subset $V\subseteq u$ and the coarser-prefix term on its complement. The resulting coefficient is $(-1)^{|u|-|V|}b^{|V|}$, and the pair $(i,j)$ satisfies exactly the prefix equalities at depths $\kappa+\mathbf1_V$. [A1, F1, F2, given, algebra]

2.1 Summing the indicator for those equalities over all ordered pairs gives $C_u(\kappa+\mathbf1_V)$ by its definition. Summing over every subset $V$ and dividing by $n(b-1)^{|u|}$ yields the displayed formula. [F1, step 1.1, algebra] ∎
