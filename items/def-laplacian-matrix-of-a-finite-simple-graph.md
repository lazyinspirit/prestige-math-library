---
id: def-laplacian-matrix-of-a-finite-simple-graph
kind: definition
title: "The Laplacian matrix of a finite simple graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-oriented-incidence-matrix-of-a-graph]
justified_by: []
aliases: []
landmark: false
verification:
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

Let $G$ be a finite simple graph with ordered vertex set
$V(G)=\{v_i:i<n\}=\{v_0,\dots,v_{n-1}\}$, adjacency matrix $A(G)$ in that
order, and degrees $d_i=\deg(v_i)$ for $i<n$. The diagonal matrix

$$D(G):=\operatorname{diag}(d_0,\dots,d_{n-1})$$

is the **degree matrix** of $G$, and

$$L(G):=D(G)-A(G)$$

is the **Laplacian matrix** of $G$.

Equivalently, the entries of $L(G)$ are

$$L(G)_{ij}=\begin{cases}\deg(v_i),&\text{if }i=j,\\-1,&\text{if }i\ne j\text{ and }v_i,v_j\text{ are adjacent},\\0,&\text{otherwise},\end{cases}\qquad(i,j<n).$$

Since $A(G)$ is symmetric and $D(G)$ is diagonal, $L(G)$ is symmetric.
