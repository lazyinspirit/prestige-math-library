---
id: ex-2vect-matrix-functor-composition
kind: example
title: Matrix 2-vector spaces exhibit horizontal and vertical composition
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-g-graded-two-vector-space
  - def-monoidal-weak-two-category
  - def-weak-linear-two-category
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §1.4.5
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
---

## Example

In the ungraded component of $2\mathrm{Vect}_G$, identify $\mathrm{Vect}_{\mathbb C}^2$ with pairs of vector spaces. A linear functor is a $2\times2$ matrix of finite-dimensional vector spaces, and composition is matrix multiplication using direct sums and tensor products.

## Facts & Assumptions


**Given:** The matrix presentation of finite semisimple categories and the composition convention in [[def-g-graded-two-vector-space]].

[F1] [[def-weak-linear-two-category]]: Horizontal composition is a functor, so its functoriality gives the interchange equation between horizontal and vertical composition.

## Verification

1.1 Let $F:\mathrm{Vect}_{\mathbb C}^2\to\mathrm{Vect}_{\mathbb C}^2$ have matrix $\begin{pmatrix}\mathbb C&0\\ \mathbb C&\mathbb C\end{pmatrix}$ and let $G$ have matrix $\begin{pmatrix}\mathbb C&\mathbb C\\0&\mathbb C\end{pmatrix}$. With rows indexed by outputs and columns by inputs, $(GF)_{ki}=\bigoplus_jG_{kj}\otimes F_{ji}$, so $GF=\begin{pmatrix}\mathbb C\oplus\mathbb C&\mathbb C\\ \mathbb C&\mathbb C\end{pmatrix}.$ Each summand is the contribution of one intermediate simple label. [given, algebra]

2.1 Let $\eta:F\Rightarrow F'$ scale $F_{21}$ by $2$, let $\eta':F'\Rightarrow F''$ scale the same entry by $7$, let $\theta:G\Rightarrow G'$ scale $G_{12}$ by $3$, and let $\theta':G'\Rightarrow G''$ scale the same entry by $5$; all other entries and components are identities. On the second intermediate-label summand of the $(1,1)$ entry of $GF$, horizontal composition first gives scalar $3\cdot2=6$, and the next horizontal 2-cell gives $5\cdot7=35$, so vertical composition gives $35\cdot6=210$. Vertically composing first gives scalar $5\cdot3=15$ in $G_{12}$ and $7\cdot2=14$ in $F_{21}$, whose horizontal tensor is $15\cdot14=210$. The first intermediate-label summand is unchanged in both paths. Thus the two interchange composites agree entrywise, and hence agree as natural transformations. [F1, step 1.1, algebra] ∎
