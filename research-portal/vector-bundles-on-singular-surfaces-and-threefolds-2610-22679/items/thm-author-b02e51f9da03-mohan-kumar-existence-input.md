---
id: thm-author-b02e51f9da03-mohan-kumar-existence-input
kind: theorem
title: Mohan Kumar existence of a nontrivial stably trivial bundle on a complex
  affine fourfold
status: published
domain: mathematics
deps:
  - lem-author-b02e51f9da03-matrix-kernel
  - lem-author-b02e51f9da03-matrix-completion
  - def-stably-free-bundles
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-b02e51f9da03-matrix-kernel: mathematical-premise
  lem-author-b02e51f9da03-matrix-completion: mathematical-premise
  def-stably-free-bundles: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Thomas Brazelton, Morgan Opie and Tariq Syed, On Algebraic Vector Bundles
        of Rank 2 over Smooth Affine Fourfolds
      url: https://tbrazel.github.io/assets/papers/fourfolds.pdf
      locator: Example 6.6, printed/PDF pp. 33–34, opening existence assertion and p=2
        geometric description; bibliography MK84/MK85, p. 36
      statement: There exists a smooth complex affine fourfold carrying a nontrivial
        but stably trivial algebraic vector bundle of rank two. The p=2 Mohan
        Kumar variety is described as the complement of a union of three
        hypersurfaces in P^3 x A^1.
      hypotheses: Base field C, algebraic vector bundles, smooth affine variety of
        complex algebraic dimension four, bundle of constant rank two. The
        general construction is stated for a prime p over an algebraically
        closed field; only the explicit p=2 complex case is imported here. C
        satisfies the section-6 standing characteristic restriction.
      reading_limits: Freshly downloaded the author-hosted 37-page PDF to
        tmp/fourfolds-source.pdf in this run; SHA256
        e7e83f41926c3b85502f5ca4e3b8f41e15f6945cd3d5746eece28afbd58f32ee. Read
        the title/author identification, the section-6 base-field convention,
        Example 6.6 on printed/PDF pp. 33–34, and the MK84/MK85 bibliography
        entries on p. 36. Rendered p. 33 was also inspected. The exact existence
        assertion and its p=2 geometric description are used as an authoritative
        external input. The nontriviality claim itself is imported, not
        established from an independently computed invariant here. Original
        Mohan Kumar papers MK84 and MK85, their defining equations, and original
        nontriviality proofs were not read. The Hermitian-K-theory discussion
        continuing on p. 34 was read only as context and is not used as a
        supplier; its cited Sye24 and the present paper's classification theorem
        proofs were not reconstructed.
dependency_level: 3
---

## Statement
There exist a nonempty smooth affine complex algebraic variety $X$ of dimension four and a rank-two vector bundle $E$ with $E\not\cong\mathcal O_X^2$ but $E\oplus\mathcal O_X^N\cong\mathcal O_X^{2+N}$ for some integer $N\geq1$. The variety can be taken to be the complement of a union of three hypersurfaces in $\mathbb P^3_{\mathbb C}\times\mathbb A^1_{\mathbb C}$, as in Mohan Kumar\'s construction. No particular defining equations are selected in this input. On writing $X=\operatorname{Spec}A$, there is therefore a right-invertible matrix $q:A^{2+N}\to A^N$ whose associated kernel bundle is $E$ and which cannot be completed to an invertible $(2+N)\times(2+N)$ matrix.

## External input
The deep construction and the assertion of algebraic nontriviality are explicitly imported from the precise authoritative subsequent statement. The local numbered steps expand the definition and translate nontriviality into a matrix-completion obstruction. No equations for the hypersurfaces or entries of a matrix are invented, and no original Kumar proof or independent Hermitian-K-theory invariant computation is claimed. The five preceding fully authored prerequisites give the construction/application interface and the actual Chern-class consequences.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, AC and the article's fixed universe bounds where its K-theory is used.

**Goal:** Establish the stated conclusion.

[F1] The exact established existence statement and the geometric description are imported from Brazelton–Opie–Syed Example 6.6, which attributes them to N. Mohan Kumar MK84/MK85.

[F2] Stable triviality means an actual finite free stabilization. [[def-stably-free-bundles]]

[F3] The local matrix-kernel construction and completion criterion are [[lem-author-b02e51f9da03-matrix-kernel]] and [[lem-author-b02e51f9da03-matrix-completion]].

## Proof

1.1 Apply the imported existence statement over the explicit base field $\mathbb C$. It supplies the smooth affine fourfold X and the rank-two nontrivial stably trivial bundle E, with the stated geometric description. Expanding stable triviality via [F2] supplies a finite N and an actual isomorphism. Since E is nontrivial, N cannot be zero. [F1, F2]

2.1 Choose one such stable isomorphism. By [F3] it yields a right-invertible matrix q whose kernel sheaf is E. If q were completable, the completion criterion in [F3] would make E trivial, contradicting [F1]. Thus q is not completable. This matrix consequence is local algebra deduced from the imported bundle existence; it is not a claim that the source gives this matrix explicitly. [F1, F3, step 1.1] ∎
