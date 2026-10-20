---
id: def-finite-weighted-graph-laplacian
kind: definition
title: "Finite weighted graph Laplacian"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $n\ge1$, $V=\{1,\ldots,n\}$, and let $W=(w_{ij})\in\mathbb R^{n\times n}$ satisfy $w_{ij}=w_{ji}\ge0$ and $w_{ii}=0$. Define $d_i=\sum_{j=1}^n w_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, and $L=D-W$. The support graph has vertex set $V$ and edge $\{i,j\}$ exactly when $w_{ij}>0$; isolated vertices are singleton connected components. Put $V_+=\{i\in V:d_i>0\}$, let $D_+$ and $L_+$ be the principal submatrices indexed by $V_+$, and, only when $V_+\ne\varnothing$, define $L_{\mathrm{sym},+}=D_+^{-1/2}L_+D_+^{-1/2}$ on $\mathbb R^{V_+}$.

## Definition references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)
