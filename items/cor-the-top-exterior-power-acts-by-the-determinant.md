---
id: cor-the-top-exterior-power-acts-by-the-determinant
kind: corollary
title: "On $\\Lambda^{n}V$, the induced map $\\Lambda^{n}T$ is multiplication by $\\det T$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix, def-determinant-of-a-linear-operator]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space of dimension $n\ge1$. Then $\Lambda^nV$ is one-dimensional with basis $e_1\wedge\cdots\wedge e_n$ for any ordered basis $(e_1,\ldots,e_n)$, and

$$\Lambda^nT=\det(T)\cdot\operatorname{id}_{\Lambda^nV}.$$

For $n=0$, $\Lambda^0T=\operatorname{id}_F=\det(T)\cdot\operatorname{id}_F$ by convention.

## Facts & Assumptions

**Given:** An endomorphism $T$ of an $n$-dimensional vector space $V$, $n\ge1$, and an ordered basis $\mathcal B=(e_1,\ldots,e_n)$.

[L1] The matrix of $\Lambda^nT$ in the top wedge basis has the single entry $\det A_{[n],[n]}=\det A$ ([[thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]]).

[L2] The determinant of an operator is $\det(T)=\det([T]_{\mathcal B})$ ([[def-determinant-of-a-linear-operator]]).

## Proof

**Proof technique:** direct.


1.1 By [L1] with $k=n$, the wedge basis of $\Lambda^nV$ is the single vector $e_1\wedge\cdots\wedge e_n$, so $\Lambda^nV$ is one-dimensional and the matrix of $\Lambda^nT$ is the $1\times1$ matrix with entry $\det A$. [L1]

1.2 By [L2], that entry is $\det(T)$. [L2]

2.1 Hence $\Lambda^nT(e_1\wedge\cdots\wedge e_n)=\det(T)\,(e_1\wedge\cdots\wedge e_n)$, and one-dimensionality makes $\Lambda^nT=\det(T)\cdot\operatorname{id}$. [step 1.1, step 1.2]

3.1 For every decomposable top wedge $v_1\wedge\cdots\wedge v_n$, one has $v_1\wedge\cdots\wedge v_n=c(e_1\wedge\cdots\wedge e_n)$ for a unique scalar $c$ by step 1.1, so step 2.1 gives

$$\Lambda^nT(v_1\wedge\cdots\wedge v_n)=c\,\Lambda^nT(e_1\wedge\cdots\wedge e_n)=\det(T)\,(v_1\wedge\cdots\wedge v_n).$$

[step 1.1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 establish the claimed scalar action in positive dimension, and the conventions cover $n=0$. [step 2.1, step 3.1] ∎
