---
title: Mohan Kumar existence of a nontrivial stably trivial bundle on a complex
  affine fourfold
status: published
research_item: thm-author-b02e51f9da03-mohan-kumar-existence-input
dependency_level: 3
---

## Prerequisites

- [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel)
- [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion)
- [def-stably-free-bundles](item-def-stably-free-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Thomas Brazelton, Morgan Opie and Tariq Syed, On Algebraic Vector Bundles of Rank 2 over Smooth Affine Fourfolds · Example 6.6, printed/PDF pp. 33–34, opening existence assertion and p=2 geometric description; bibliography MK84/MK85, p. 36](https://tbrazel.github.io/assets/papers/fourfolds.pdf)

## Statement
There exist a nonempty smooth affine complex algebraic variety $X$ of dimension four and a rank-two vector bundle $E$ with $E\not\cong\mathcal O_X^2$ but $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for some integer $N\geq1$. The variety can be taken to be the complement of a union of three hypersurfaces in $\mathbb P^3_{\mathbb C}\times\mathbb A^1_{\mathbb C}$, as in Mohan Kumar\'s construction. No particular defining equations are selected in this input. On writing $X=\operatorname{Spec}A$, there is therefore a right-invertible matrix $q:A^{2+N}\to A^N$ whose associated kernel bundle is $E$ and which cannot be completed to an invertible $(2+N)\times(2+N)$ matrix.

## External input
The deep construction and the assertion of algebraic nontriviality are explicitly imported from the precise authoritative subsequent statement. The local numbered steps expand the definition and translate nontriviality into a matrix-completion obstruction. No equations for the hypersurfaces or entries of a matrix are invented, and no original Kumar proof or independent Hermitian-K-theory invariant computation is claimed. The five preceding fully authored prerequisites give the construction/application interface and the actual Chern-class consequences.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, AC and the article's fixed universe bounds where its K-theory is used.

**Goal:** Establish the stated conclusion.

[F1] The exact established existence statement and the geometric description are imported from Brazelton–Opie–Syed Example 6.6, which attributes them to N. Mohan Kumar MK84/MK85.

[F2] Stable triviality means an actual finite free stabilization. [def-stably-free-bundles](item-def-stably-free-bundles)

[F3] The local matrix-kernel construction and completion criterion are [lem-author-b02e51f9da03-matrix-kernel](item-lem-author-b02e51f9da03-matrix-kernel) and [lem-author-b02e51f9da03-matrix-completion](item-lem-author-b02e51f9da03-matrix-completion).

## Proof

1.1 Apply the imported existence statement over the explicit base field $\mathbb C$. It supplies the smooth affine fourfold X and the rank-two nontrivial stably trivial bundle E, with the stated geometric description. Expanding stable triviality via [F2] supplies a finite N and an actual isomorphism. Since E is nontrivial, N cannot be zero. [F1, F2]

2.1 Choose one such stable isomorphism. By [F3] it yields a right-invertible matrix q whose kernel sheaf is E. If q were completable, the completion criterion in [F3] would make E trivial, contradicting [F1]. Thus q is not completable. This matrix consequence is local algebra deduced from the imported bundle existence; it is not a claim that the source gives this matrix explicitly. [F1, F3, step 1.1] ∎
