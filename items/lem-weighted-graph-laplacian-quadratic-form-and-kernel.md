---
id: lem-weighted-graph-laplacian-quadratic-form-and-kernel
kind: lemma
title: "Quadratic form and kernel of a weighted graph Laplacian"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-weighted-graph-laplacian
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $V=\{1,\ldots,n\}$ with $n\ge1$, let $W$ be symmetric, nonnegative, and zero-diagonal, let $D=\operatorname{diag}(\sum_jw_{ij})$, let $L=D-W$, and let the support graph have edge $\{i,j\}$ exactly when $w_{ij}>0$. For every $f\in\mathbb R^n$, $$f^TLf=\frac12\sum_{i,j=1}^n w_{ij}(f_i-f_j)^2.$$ Consequently $L$ is positive semidefinite and $$\ker L=\{f\in\mathbb R^n:f\text{ is constant on each connected component of the support graph}\},$$ including isolated singleton components.

## Statement references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Facts & Assumptions

**Given:** A finite symmetric nonnegative zero-diagonal weight matrix $W$, its degree matrix $D$, Laplacian $L=D-W$, support graph, and an arbitrary vector $f\in\mathbb R^n$.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_i)$, $L=D-W$, and the support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$.

## Proof

1.1 By [F1], $f^TLf=\sum_i d_i f_i^2-\sum_{i,j}w_{ij}f_if_j$. Replacing $d_i$ by $\sum_jw_{ij}$, using $w_{ij}=w_{ji}$ to identify the two square sums, and collecting terms gives $f^TLf=\frac12\sum_{i,j}w_{ij}(f_i^2-2f_if_j+f_j^2)=\frac12\sum_{i,j}w_{ij}(f_i-f_j)^2$. [given, F1, algebra]

2.1 The displayed sum is nonnegative for every $f$, and $L$ is symmetric because both $D$ and $W$ are symmetric. Therefore $L$ is positive semidefinite. [given, F1, step 1.1, algebra]

2.2 If $Lf=0$, then $f^TLf=0$. By step 1.1 this is a finite sum of nonnegative terms, so every term with $w_{ij}>0$ vanishes and $f_i=f_j$ on every support edge. Equality propagates along each finite path, hence $f$ is constant on every connected component, including an isolated singleton. [given, F1, step 1.1, algebra]

3.1 Conversely, suppose $f$ is constant on each support component. For each vertex $i$, every $j$ with $w_{ij}>0$ lies in the same component, so $f_i=f_j$. Hence $(Lf)_i=d_if_i-\sum_jw_{ij}f_j=\sum_jw_{ij}(f_i-f_j)=0$ for every $i$, and $Lf=0$. The two inclusions give the stated kernel equality. [given, F1, step 2.2, algebra] ∎
