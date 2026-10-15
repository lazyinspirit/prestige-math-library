---
id: def-lambda-t-net
kind: definition
title: "$(\\lambda,t,m,d)$-nets in base $b$"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-star-discrepancy-and-digital-net]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §2"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Definition

Let $b\ge2$, $d\ge1$, $m\ge0$, $0\le t\le m$, and
$1\le\lambda<b$ be integers. An ordered point multiset of size
$n=\lambda b^m$ in $[0,1)^d$ is a **$(\lambda,t,m,d)$-net in base $b$** if
every base-$b$ elementary interval
$$E=\prod_{j=1}^d[a_jb^{-k_j},(a_j+1)b^{-k_j})$$
with $\sum_{j=1}^d k_j=m-t$ contains exactly $\lambda b^t$ entries,
counting multiplicities. When $\lambda=1$ this is the $(t,m,d)$-net
convention of [[def-star-discrepancy-and-digital-net]]. In this item the
parameters $b,t,\lambda$ are fixed when $m$ varies.
