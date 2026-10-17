---
id: lem-column-stochastic-l1-nonexpansive
kind: lemma
title: "Column-stochastic matrices preserve mass and contract ℓ1"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-finite-column-stochastic-matrix-and-law]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, definition of the one-norm coefficient and Theorem 3.7, PDF pp. 12–13; restriction of a stochastic matrix to zero-sum vectors."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: "No choice principle is used; the argument consists of finite sums."
---

## Statement

If $P$ is a finite column-stochastic matrix, then $P$ maps column probability vectors to column probability vectors, preserves coordinate sums on all real vectors, and satisfies $\|Pz\|_1\le\|z\|_1$ for every $z\in\mathbb R^n$.

## Facts & Assumptions

**Given:** $P$ is column-stochastic in the sense of [[def-finite-column-stochastic-matrix-and-law]].

[F1] [[def-finite-column-stochastic-matrix-and-law]]: $P_{ij}\ge0$, each column sums to one, a probability vector has nonnegative coordinates summing to one, and $\|z\|_1=\sum_j|z_j|$.

## Proof

**Given:** A finite column-stochastic matrix $P$ and a vector $z\in\mathbb R^n$.

**Proof technique:** apply the triangle inequality coordinatewise and then use each column sum.

1.1 For every $z$, finite summation and [F1] give $\sum_i(Pz)_i=\sum_j(\sum_iP_{ij})z_j=\sum_jz_j$. If $z$ is a column probability vector, each coordinate of $Pz$ is a sum of nonnegative terms, so $Pz\ge0$ and its coordinate sum is one. [given, F1, algebra]

2.1 For each row $i$, $|(Pz)_i|=|\sum_jP_{ij}z_j|\le\sum_jP_{ij}|z_j|$ because $P_{ij}\ge0$. Summing over $i$ and regrouping finite sums gives $\|Pz\|_1\le\sum_j|z_j|\sum_iP_{ij}=\|z\|_1$. [F1, step 1.1, algebra] ∎
