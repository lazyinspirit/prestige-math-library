---
id: def-oriented-incidence-matrix-of-a-graph
kind: definition
title: "An oriented incidence matrix of a finite simple graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-matrices-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, The Matrix-Tree Theorem"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Definition

Let $G=(V,E)$ be a finite simple graph with ordered vertices
$V=\{v_i:i<n\}=\{v_0,\dots,v_{n-1}\}$ and ordered edges
$E=\{e_j:j<m\}=\{e_0,\dots,e_{m-1}\}$. Choose, for each edge
$e_j=\{u,w\}$, one endpoint as its tail and the other as its head. The resulting
$n\times m$ matrix $B=(b_{ij})$ with entries in $\{-1,0,1\}$ is an **oriented
incidence matrix** of $G$, where, for $i<n$ and $j<m$,

$$b_{ij}=\begin{cases}1,&\text{if }v_i\text{ is the head of }e_j,\\-1,&\text{if }v_i\text{ is the tail of }e_j,\\0,&\text{if }v_i\notin e_j.\end{cases}$$

Each column therefore has exactly one $1$ and one $-1$, because every edge of a
simple graph has exactly two distinct endpoints. Different choices of
orientation change only the signs of columns.
