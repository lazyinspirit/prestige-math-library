---
id: lem-james-formula-defines-a-norm
kind: lemma
title: "The James formula defines a norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-james-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Lemma 2.76, printed p.95"
pipeline_run: phase-2-next-18
---

## Statement

$J$ is a vector subspace of $c_0$, the James formula $\|\cdot\|_J$ is a norm
on $J$, and

$$\|x\|_\infty\le\|x\|_J\qquad(x\in J).$$

Moreover $\ell^2\subseteq J$ and $\|x\|_J\le\sqrt2\|x\|_2$ for
$x\in\ell^2$.

## Facts & Assumptions

[L1] The cyclic quadratic-variation seminorms $q_p$ and $J$ are as defined in
[[def-james-space]].

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 For fixed $p$, $q_p(x)$ is $2^{-1/2}$ times the Euclidean norm of the [given, L1]
finite vector of cyclic successive differences. Euclidean Minkowski gives
$q_p(x+y)\le q_p(x)+q_p(y)$ and homogeneity is immediate. Taking suprema shows
that $J$ is a vector subspace and gives the triangle inequality and homogeneity
for $\|\cdot\|_J$. [L1, Euclidean Minkowski]

2.1 For $i<j$, the two-point tuple $(i,j)$ gives [given, L1, step 1.1]
$q_{(i,j)}(x)=|x_i-x_j|$. Since $x_j\to0$ for $x\in c_0$, letting
$j\to\infty$ yields $|x_i|\le\|x\|_J$. Taking the supremum proves the first
displayed inequality and definiteness, including at $x=0$. [L1, two-point
tuple]

3.1 For $x\in\ell^2$ and $p=(p_1<\cdots<p_k)$, use [given, L1, step 2.1]
$|a-b|^2\le2|a|^2+2|b|^2$ in the cyclic sum. Every selected coordinate occurs
twice before the factor $1/2$, so
$q_p(x)^2\le2\sum_{j=1}^k|x_{p_j}|^2\le2\|x\|_2^2$. Taking the supremum gives
$\ell^2\subseteq J$ and the second inequality. [L1, finite estimate] ∎
