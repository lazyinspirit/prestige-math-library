---
id: thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums
kind: theorem
title: "The induced 1-norm is the maximum column sum and the induced infinity-norm is the maximum row sum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-matrix-p-norm, thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-standard-basis-of-f-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
---



## Statement

Let $m,n\in\mathbb{N}$ with $m\ge 1$ and $n\ge 1$, and let
$A=(a_{ij})\in M_{m\times n}(\mathbb{R})$, with the induced $1$-norm and the
separately defined induced $\infty$-norm of
[[def-induced-matrix-p-norm]].

1. **Maximum column sum.** $\lVert A\rVert_1=\max_{j<n}\sum_{i<m}|a_{ij}|$.
2. **Maximum row sum.** $\lVert A\rVert_\infty=\max_{i<m}\sum_{j<n}|a_{ij}|$.

## Facts & Assumptions

**Given:** Natural numbers $m,n\ge 1$, a matrix $A=(a_{ij})\in M_{m\times n}(\mathbb{R})$, and vectors $x=(x_j)\in\mathbb{R}^{n}$.

[L1] The $1$-norm and the $\infty$-norm are $\lVert x\rVert_1=\sum_{j<n}|x_j|$ and $\lVert x\rVert_\infty=\max\{|x_j|:j<n\}$ ([[def-p-norms-on-rn]]); each is a norm, in particular the triangle inequality and $|x_j|\le\lVert x\rVert_\infty$ hold ([[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L2] The induced norm is the supremum of the ratio over nonzero vectors, and compatibility gives $\lVert Ax\rVert_p\le\lVert A\rVert_p\lVert x\rVert_p$ ([[def-induced-matrix-p-norm]], [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]).

[L3] The standard basis vector $e_j\in\mathbb{R}^{n}$ satisfies $e_j(j)=1$ and $e_j(k)=0$ for $k\ne j$, and finite sums are evaluated pointwise; in particular $(Ae_j)_i=a_{ij}$ ([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 Write $C:=\max_{j<n}\sum_{i<m}|a_{ij}|$; the maximum exists because it is a maximum of the nonempty finite set of column sums of [L1]. [given, L1]

1.2 Expanding the matrix-vector product entrywise and using the triangle inequality and absolute multiplicativity of [L1] gives $\lVert Ax\rVert_1=\sum_{i<m}\bigl|\sum_{j<n}a_{ij}x_j\bigr|\le\sum_{i<m}\sum_{j<n}|a_{ij}|\,|x_j|$. [L1, algebra]

1.3 Write $R:=\max_{i<m}\sum_{j<n}|a_{ij}|$, a maximum of a nonempty finite set of row sums by [L1]. [L1]

2.1 Exchanging the finite double sum in step 1.2 and bounding every column sum by $C$ from step 1.1 gives $\lVert Ax\rVert_1\le\sum_{j<n}\bigl(\sum_{i<m}|a_{ij}|\bigr)|x_j|\le C\sum_{j<n}|x_j|=C\lVert x\rVert_1$. [step 1.2, step 1.1, L1, algebra]

2.2 Choose $j^{\ast}<n$ attaining the maximum column sum, so $\sum_{i<m}|a_{ij^{\ast}}|=C$, which exists by step 1.1. [step 1.1, choose]

2.3 For every $i<m$, $|(Ax)_i|=|\sum_{j<n}a_{ij}x_j|\le\sum_{j<n}|a_{ij}|\,|x_j|\le\bigl(\sum_{j<n}|a_{ij}|\bigr)\lVert x\rVert_\infty\le R\lVert x\rVert_\infty$, using the triangle inequality, $|x_j|\le\lVert x\rVert_\infty$ and the definition of $R$. [L1, step 1.3, algebra]

2.4 Choose $i^{\ast}<m$ attaining the maximum row sum: $\sum_{j<n}|a_{i^{\ast}j}|=R$, which exists by step 1.3. [step 1.3, choose]

3.1 By [L2] the induced norm is the supremum of the ratio over nonzero $x$, so step 2.1 gives $\lVert A\rVert_1\le C$. [step 2.1, L2]

3.2 For the standard basis vector $e_{j^{\ast}}$ of [L3], $\lVert e_{j^{\ast}}\rVert_1=1$ and $\lVert Ae_{j^{\ast}}\rVert_1=\sum_{i<m}|a_{ij^{\ast}}|=C$, so the ratio $\lVert Ae_{j^{\ast}}\rVert_1/\lVert e_{j^{\ast}}\rVert_1=C$ is attained and $\lVert A\rVert_1\ge C$. [L1, L3, step 2.2]

3.3 Taking the maximum over $i<m$ in step 2.3 gives $\lVert Ax\rVert_\infty\le R\lVert x\rVert_\infty$, and by [L2] the induced $\infty$-norm is at most $R$. [step 2.3, L1, L2]

3.4 Define $x\in\mathbb{R}^{n}$ by $x_j:=1$ when $a_{i^{\ast}j}\ge 0$ and $x_j:=-1$ when $a_{i^{\ast}j}<0$; then $\lVert x\rVert_\infty=1$ and $(Ax)_{i^{\ast}}=\sum_{j<n}a_{i^{\ast}j}x_j=\sum_{j<n}|a_{i^{\ast}j}|=R$, by [L1] and [L3]. [L1, L3, step 2.4, algebra]

4.1 Steps 3.1 and 3.2 give $\lVert A\rVert_1=C$, which is claim 1. [step 3.1, step 3.2]

4.2 The vector $x$ of step 3.4 attains the ratio $R$, so $\lVert A\rVert_\infty\ge R$; with step 3.3 this gives $\lVert A\rVert_\infty=R$, which is claim 2. [step 3.4, step 3.3, L2]

5.1 Claims 1 and 2 are steps 4.1 and 4.2. [step 4.1, step 4.2] ∎
