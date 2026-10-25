---
id: def-psd-nystrom-approximation
kind: definition
title: "The positive-semidefinite Nyström approximation"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
dependency_level: 0
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1"
      url: "https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $A\in\mathbb F^{n\times n}$ be Hermitian positive semidefinite with $n\ge1$, and let $S\in\mathbb F^{n\times s}$ with $s\ge0$ be any finite sketch matrix. Put $W=S^*AS\in\mathbb F^{s\times s}$. The **Nyström approximation** associated with $(A,S)$ is
$\widehat A_{\mathrm{nys}}=AS\,W^\dagger S^*A$.

The Moore-Penrose inverse is defined for every finite matrix, including singular $W$, and is unique by the dependencies. No rank, sampling, or probabilistic condition is part of this definition.
