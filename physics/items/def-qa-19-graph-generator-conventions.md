---
id: def-qa-19-graph-generator-conventions
kind: definition
title: Graph adjacency and Laplacian generator conventions
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-register-and-computational-basis
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): adjacency and opposite Laplacian sign conventions."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: self-adjoint Hamiltonians and finite evolution."
---

## Definition

Let $V$ be a finite vertex set with a fixed order and let
$w:V\times V\to[0,\infty)$ be symmetric. Self-loops are allowed and their
weight is counted once in each row sum. On $\mathbb C^V$ with ordered basis
$(e_v)_{v\in V}$, define the weighted adjacency matrix by
$A_{uv}=w(u,v)$, the degree $d(v)=\sum_{u\in V}w(v,u)$, and
$D_{vv}=d(v)$ with all off-diagonal entries zero. The **positive Laplacian**
is $L_+=D-A$; the other common sign convention is $L_-=A-D=-L_+$. A walk
generator records the chosen edge weights, loop convention, basis order, and
one of these signs. It is not a discrete transition matrix.

When every $d(v)>0$, the **normalized adjacency** is the separately defined
matrix $A_{\rm norm}=D^{-1/2}AD^{-1/2}$. No normalized-adjacency operation is
defined here at zero-degree vertices. The matrices $A,D,L_+,L_-$ are Hermitian:
$A_{vu}=w(v,u)=w(u,v)=\overline{A_{uv}}$ and $D$ is real diagonal. Under
the positive-degree condition, $D^{-1/2}$ is also real diagonal, so
$A_{\rm norm}^*=A_{\rm norm}$. A zero-vertex graph gives the zero coordinate
space and empty matrices; a quantum-walk input separately requires a
normalized state, so it has no instance on that space.
