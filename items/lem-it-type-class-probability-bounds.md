---
id: lem-it-type-class-probability-bounds
kind: lemma
title: "Finite probability bounds for an empirical type"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-empirical-type-and-type-class
  - lem-it-type-class-cardinality-bounds
  - lem-it-type-probability-identity
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; this combines finite probability identities and bounds."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.1.4, printed p. 354 (complete Chapter 11 PDF p. 8)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Proposition 1.5 (Method of types), printed pp. 15–16 / author PDF pp. 15–16"
---

## Statement

Let $\mathcal A$ be a finite alphabet of size $k\ge1$, let $p$ be a probability vector on $\mathcal A$, and let $q\in\mathcal P_n(\mathcal A)$. Then
$$(n+1)^{-(k-1)}e^{-nD(q\|p)}\le p^{\otimes n}(T_q)\le e^{-nD(q\|p)},$$
with $e^{-n\cdot\infty}:=0$ when $q$ is not supported on $p$.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, a probability vector $p$, a positive integer $n$, and an attainable type $q$.

[F1] [[lem-it-type-probability-identity]]: $p^{\otimes n}(T_q)=|T_q|e^{-n[H(q)+D(q\|p)]}$, with value zero if $D(q\|p)=+\infty$.

[F2] [[lem-it-type-class-cardinality-bounds]]: $(n+1)^{-(k-1)}e^{nH(q)}\le|T_q|\le e^{nH(q)}$.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite relative entropy is $+\infty$ exactly when positive mass of $q$ falls on a zero coordinate of $p$.

## Proof

1.1 If $D(q\|p)<\infty$, substitute [F1] and [F2] and cancel the finite factors $e^{nH(q)}e^{-nH(q)}$ to obtain both inequalities. The case $k=1$ is included: then $q=p=(1)$ and all three quantities equal $1$. [F1, F2, algebra]

2.1 If $D(q\|p)=+\infty$, [F1] and [F3] give $p^{\otimes n}(T_q)=0$, and both stated bounds are zero by convention. [F1, F3, step 1.1, algebra] ∎

