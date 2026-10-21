---
id: lem-federated-recursion-averaging
kind: lemma
title: Geometric and sublinear averaging for descent recursions
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix B, Lemmas 1 and 2"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $R\ge1$ and let $d_0,\ldots,d_R\ge0$, $q_0,\ldots,q_{R-1}\ge0$.

1. If $a,\eta>0$, $b,c\ge0$, and
$$ d_r+a\eta q_{r-1}\le d_{r-1}+b\eta^2+c\eta^3 \quad(1\le r\le R), $$
then
$$ \frac1R\sum_{r=1}^R q_{r-1} \le\frac{d_0}{a\eta R}+\frac{b\eta+c\eta^2}{a}. $$

2. If $0<\rho\eta<1$, $a>0$, $b,c\ge0$, and
$$ d_r\le(1-\rho\eta)d_{r-1}-a\eta q_{r-1} +b\eta^2+c\eta^3, $$
then for $w_r=(1-\rho\eta)^{-r}$ and $W_R=\sum_{r=1}^Rw_r$,
$$ \frac1{W_R}\sum_{r=1}^Rw_rq_{r-1} \le\frac{d_0}{a\eta W_R}+\frac{b\eta+c\eta^2}{a}. $$
The left side in part 2 is the expectation of $q_{r-1}$ when an index
$r\in\{1,\ldots,R\}$ is selected with probability $w_r/W_R$.

## Facts & Assumptions

**Given:** The nonnegative sequences, positive step size, and recurrences in the Statement.

[A1] All weights $w_r$ in part 2 are positive because $0<1-\rho\eta<1$.

## Proof

1.1 Rearrange the part 1 inequality as $a\eta q_{r-1}\le d_{r-1}-d_r+b\eta^2+c\eta^3$ and sum over $r=1,\ldots,R$. The distance terms telescope to $d_0-d_R\le d_0$. Divide by $a\eta R$ to get the first bound. [given, A1, algebra]

1.2 For part 2, multiply the recurrence by $w_r$. Since [given]
$w_r(1-\rho\eta)=w_{r-1}$ when $w_0=1$, summing gives
$$ a\eta\sum_{r=1}^Rw_rq_{r-1} \le d_0-w_Rd_R+(b\eta^2+c\eta^3)W_R \le d_0+(b\eta^2+c\eta^3)W_R. $$
Divide by $a\eta W_R$ to obtain the second bound. [given, A1, algebra]

2.1 The probabilities $w_r/W_R$ are nonnegative and sum to one, so the expected selected value is exactly the weighted average in part 2. [A1, algebra] ∎
