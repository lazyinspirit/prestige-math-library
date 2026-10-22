---
id: def-ip-robust-nullspace-property
kind: definition
title: "The ℓ2 robust nullspace property"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - def-canonical-natural
  - lem-of-naturals-positive
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1 Definition 2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $m,n,s\in\mathbb N$ with $m,n\ge1$ and $1\le s\le n$, let $A\in\mathbb R^{m\times n}$, and let $0<\rho<1$ and $\tau>0$. In real scalar expressions, a natural number denotes its canonical real image. Use one-based coordinate labels $[n]=\{1,\ldots,n\}$, identifying coordinate label $j$ with library coordinate $j-1$. For $h\in\mathbb R^n$ and $S\subseteq[n]$, let $h_S$ agree with $h$ on $S$ and vanish on $S^c=[n]\setminus S$. The matrix $A$ satisfies the **$\ell^2$ robust nullspace property of order $s$ with constants $(\rho,\tau)$** if
$$\|h_S\|_2\le \frac{\rho}{\sqrt{s}}\|h_{S^c}\|_1+\tau\|Ah\|_2$$
for every $h\in\mathbb R^n$ and every $S\subseteq[n]$ with $|S|\le s$. This condition applies to all vectors, including vectors with $Ah\ne0$.

## Definition references

[[def-ip-nullspace-property|One-based coordinates and zero-extended restrictions]]

[[def-p-norms-on-rn|Finite-dimensional one- and two-norms]]

[[def-canonical-natural|Canonical real image of the natural scalar $s$]]

[[lem-of-naturals-positive|Positivity of the natural scalar $s$]]

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1, Definition 2.1, printed pp. 4–5](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3, Definitions 4.17 and 4.21](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)
