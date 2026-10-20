---
id: def-ratio-cut-and-normalized-cut
kind: definition
title: "RatioCut and normalized cut for a finite weighted graph"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-weighted-graph-laplacian
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
---

## Definition

Let $n\ge1$, $V=\{1,\ldots,n\}$, and let $W=(w_{ij})\in\mathbb R^{n\times n}$ be symmetric, entrywise nonnegative, and zero-diagonal. Define $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, $L=D-W$, and $V_+=\{i:d_i>0\}$. For $A\subseteq V$, put $A^c=V\setminus A$, $\operatorname{cut}(A,A^c)=\sum_{i\in A,j\in A^c}w_{ij}$, and $\operatorname{vol}(A)=\sum_{i\in A}d_i$. For a partition $\mathcal A=(A_1,\ldots,A_k)$ of $V$ into pairwise disjoint nonempty sets, define $$\operatorname{RatioCut}(\mathcal A)=\sum_{r=1}^k\frac{\operatorname{cut}(A_r,A_r^c)}{|A_r|}.$$ For a partition of $V_+$ into pairwise disjoint nonempty sets, each of positive volume, define $$\operatorname{Ncut}(\mathcal A)=\sum_{r=1}^k\frac{\operatorname{cut}(A_r,A_r^c)}{\operatorname{vol}(A_r)}.$$ For these partitions, the RatioCut indicator column is $h_r=\mathbf1_{A_r}/\sqrt{|A_r|}$, and the Ncut indicator column is $h_r=\mathbf1_{A_r}/\sqrt{\operatorname{vol}(A_r)}$, extended by zero on isolated vertices.

## Definition references

[[def-finite-weighted-graph-laplacian]]

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)
