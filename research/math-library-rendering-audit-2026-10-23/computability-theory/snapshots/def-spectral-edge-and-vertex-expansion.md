---
id: def-spectral-edge-and-vertex-expansion
kind: definition
title: "Spectral edge and vertex expansion"
status: published
origin: pipeline
deps: [lem-constant-vector-is-a-top-eigenvector]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; Definitions2.1–2.3 and §2.3, pp19–21."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Definition

For the regular multigraph and spectral conventions in [[lem-constant-vector-is-a-top-eigenvector]], put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues.

Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are
$$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$
For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement.
