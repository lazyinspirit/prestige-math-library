---
id: def-adjacency-matrix-of-a-finite-simple-graph
kind: definition
title: "The adjacency matrix of a finite simple graph"
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
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, Section 4.7"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Definition

Let $G=(V,E)$ be a finite simple graph and let
$V=\{v_i:i<n\}=\{v_0,\dots,v_{n-1}\}$ be an ordered listing of its vertices.
The **adjacency matrix** of $G$ in that vertex order is the matrix
$A(G)=(a_{ij})\in\{0,1\}^{n\times n}$ defined, for $i,j<n$, by

$$a_{ij}=\begin{cases}1,&\text{if }\{v_i,v_j\}\in E,\\0,&\text{if }\{v_i,v_j\}\notin E.\end{cases}$$

Because $G$ is simple, $a_{ii}=0$ for every $i$, and because edges are
unordered, $a_{ij}=a_{ji}$ for all $i,j$. Thus $A(G)$ is a symmetric
$n\times n$ matrix over $\mathbb R$
([[def-matrices-over-a-commutative-ring]]).

Changing the vertex order conjugates $A(G)$ by a permutation matrix, so the
matrix depends on the chosen ordering but the spectral data attached to it later
do not.
