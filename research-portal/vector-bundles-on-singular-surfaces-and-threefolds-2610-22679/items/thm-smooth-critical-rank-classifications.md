---
id: thm-smooth-critical-rank-classifications
kind: theorem
title: Classical smooth critical-rank classifications
status: draft
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - lem-author-f08c343a07fc-local-cylinder-geometry
  - lem-author-f08c343a07fc-local-stabilized-chern
  - lem-author-f08c343a07fc-local-surface-uniqueness-reduction
  - lem-author-f08c343a07fc-local-surface-existence-reduction
  - lem-author-f08c343a07fc-cancel-cancellation-interface
  - thm-author-f08c343a07fc-cancel-suslin-module-input
  - thm-author-f08c343a07fc-local-kumar-murthy-chow-input
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-f08c343a07fc-local-chern-interface: mathematical-premise
  lem-author-f08c343a07fc-local-cylinder-geometry: mathematical-premise
  lem-author-f08c343a07fc-local-stabilized-chern: mathematical-premise
  lem-author-f08c343a07fc-local-surface-uniqueness-reduction: mathematical-premise
  lem-author-f08c343a07fc-local-surface-existence-reduction: mathematical-premise
  lem-author-f08c343a07fc-cancel-cancellation-interface: mathematical-premise
  thm-author-f08c343a07fc-cancel-suslin-module-input: mathematical-premise
  thm-author-f08c343a07fc-local-kumar-murthy-chow-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 1 introduction, MS76 and KM82
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: p. 2, Introduction, paragraph beginning For context, immediately after
        Theorem 1; compare v1 p. 2 opening paragraph
      statement: For a smooth affine threefold X over an algebraically closed field,
        the map assigning the ordinary Chow Chern triple to a rank-three bundle
        is a bijection onto CH^1(X) x CH^2(X) x CH^3(X); this is attributed
        there to N. Mohan Kumar and M. P. Murthy [KM82].
      hypotheses: X a smooth affine threefold over an algebraically closed field, with
        no characteristic exclusion in the recalled classical result. Bundles
        have rank three. The nearby Theorem 1 has characteristic unequal to two
        for rank-two bundles on threefolds, and is not the theorem imported
        here.
      reading_limits: Read v5 p. 2 introduction, including the exact displayed
        rank-three map and the surrounding distinction from rank-two Theorem 1;
        also read v1 p. 2 introduction, which starts with arbitrary
        algebraically closed k and states unique rank-three existence for given
        Chern classes. The Mohan Kumar–Murthy original paper, Ann. Math. 116
        (1982), 579–591, DOI 10.2307/2007024, Theorem 2.1(iii), was not accessed
        beyond its publisher metadata. No original proof or obstruction-theory
        reconstruction is claimed.
dependency_level: 15
---

## Statement
Assume AC and the article\'s universes. Over an algebraically closed field $k$ of arbitrary characteristic, the ordinary integral Chow Chern maps are bijections $C_2:\mathrm{Vect}_2(X)\xrightarrow{\sim}\mathrm{CH}^1(X)\times\mathrm{CH}^2(X)$ for every smooth affine surface $X$, and $C_3:\mathrm{Vect}_3(Y)\xrightarrow{\sim}\mathrm{CH}^1(Y)\times\mathrm{CH}^2(Y)\times\mathrm{CH}^3(Y)$ for every smooth affine threefold $Y$. In each case every tuple is realized, and its realizing bundle is unique up to isomorphism. These are the classical surface classification of Murthy–Swan and threefold classification of N. Mohan Kumar–M. P. Murthy. Here $\mathrm{Vect}_r$ denotes bundle isomorphism classes, and $c_i$ is the coefficient of the standard quotient-projective-bundle Chern relation, with $c_1(\mathcal O(D))=[D]$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The exact all-characteristic rank-three classification is imported in [[thm-author-f08c343a07fc-local-kumar-murthy-chow-input]].

[F2] The ordinary Chow Chern interface, cylinder geometry and stabilized Chern data are supplied by [[lem-author-f08c343a07fc-local-chern-interface]], [[lem-author-f08c343a07fc-local-cylinder-geometry]], [[lem-author-f08c343a07fc-local-stabilized-chern]].

[F3] The local cylinder reductions establish surface uniqueness subject to line cancellation and surface existence subject to cylinder rank-three existence. [[lem-author-f08c343a07fc-local-surface-uniqueness-reduction]], [[lem-author-f08c343a07fc-local-surface-existence-reduction]]

[F4] The module cancellation theorem and its local bundle/K-zero interface establish cancellation on any affine surface at rank two. [[thm-author-f08c343a07fc-cancel-suslin-module-input]], [[lem-author-f08c343a07fc-cancel-cancellation-interface]]

## Proof

1.1 The threefold assertion, including both realization of every tuple and uniqueness for that tuple, is exactly [F1] with its actual Chern map as in [F2]. [F1, F2, given]

1.2 Let $X=\operatorname{Spec}A$ be a smooth affine surface. Its cylinder is a smooth affine threefold by [F2], so [F1] supplies every rank-three Chern triple there. The surface-existence reduction in [F3] consequently realizes every pair on $X$ by a rank-two bundle. [F1, F2, F3]

1.3 For rank-two $E,F$ on $X$ with identical pairs, the surface-uniqueness reduction in [F3] reduces their isomorphism to cancellation of a common trivial line. The algebra $A$ has dimension two and is finite type over algebraically closed $k$; [F4] therefore gives cancellation at rank two. More explicitly a common line stabilization gives equal K-zero classes, and the local interface applies the module theorem to produce $E\cong F$. Thus $C_2$ is injective. [F3, F4, given]

2.1 Steps 1.2 and 1.3 prove surface bijectivity; step 1.1 proves threefold bijectivity. In both cases isomorphisms preserve Chern tuples by [F2], so these bijections have exactly the existence and uniqueness interpretation asserted. [F2, step 1.1, step 1.2, step 1.3] ∎

## Source notes
The surface attribution is retained from Fasel–Yakerson, Vector bundles on singular surfaces and threefolds, p. 1, citing Murthy–Swan, Vector bundles over affine surfaces, Invent. Math. 36 (1976), 125–165, DOI 10.1007/BF01390007. The original Murthy–Swan proof was not read. The local proof uses a cylinder, the completed Serre splitting supplier and a separately namespaced cancellation import. Consequently the patch is independent of the uncompleted native cancellation target. Ordinary Chow classes are the interface here; no unnamed motivic comparison is assumed. The two smooth schemes are understood equidimensional, as surfaces and threefolds in the article; finitely many disjoint equidimensional components can equally be handled componentwise.
