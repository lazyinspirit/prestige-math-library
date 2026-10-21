---
id: def-graph-harmonic-label-extension
kind: definition
title: "Graph-harmonic label extension on a finite weighted graph"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-weighted-graph-laplacian
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Xiaojin Zhu, Zoubin Ghahramani, and John Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, ICML 2003"
      url: "https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf"
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $n\ge1$, $V=\{1,\ldots,n\}$, and let $W=(w_{ij})\in\mathbb R^{n\times n}$ be symmetric, entrywise nonnegative, and zero-diagonal. Put $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, and $L=D-W$. The support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$; two vertices lie in the same connected component exactly when a finite path of support edges joins them; connected components include isolated singleton vertices. Let $B\subseteq V$ be nonempty, put $U=V\setminus B$, and prescribe $y_B\in\mathbb R^B$. Call the boundary anchored when every connected component meeting $U$ also meets $B$. For $f\in\mathbb R^V$ with $f|_B=y_B$, define the Dirichlet graph energy $E(f)=\tfrac12 f^TLf$. A function is harmonic on $U$ when $(Lf)_u=0$ for every $u\in U$. A graph-harmonic label extension is any minimizer of $E$ over the affine set of functions with the prescribed boundary values; the definition itself makes no uniqueness assertion.

## Definition references

[[def-finite-weighted-graph-laplacian]]: fixes the degree matrix, combinatorial Laplacian, support edges, and isolated-component convention used above.

[Zhu, Ghahramani, and Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, §2](https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf)

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 11](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf)
