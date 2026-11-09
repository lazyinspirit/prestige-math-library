---
id: thm-author-f08c343a07fc-local-kumar-murthy-chow-input
kind: theorem
title: Mohan Kumar–Murthy rank-three Chow classification
status: draft
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-chern-interface
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-f08c343a07fc-local-chern-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
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
dependency_level: 13
---

## Statement
Assume AC. Let $k$ be an algebraically closed field of arbitrary characteristic and $Y$ a smooth affine threefold over $k$. Then $C_3:\mathrm{Vect}_3(Y)\to\mathrm{CH}^1(Y)\times\mathrm{CH}^2(Y)\times\mathrm{CH}^3(Y)$, $[G]_{\mathrm{iso}}\mapsto(c_1(G),c_2(G),c_3(G))$, is bijective. The classes are the ordinary integral Chow Chern classes with the quotient-projective-bundle normalization. Thus every triple occurs, and two such bundles are isomorphic exactly when their triples agree.

## External input
Only the established classification statement is imported, via the exact authoritative subsequent statement. Standard ordinary Chern classes, rather than abstract unnamed isomorphic invariants, are specified there. The local projective-bundle coefficient interface fixes the same sign convention. This is not a comparison with a singular motivic Chern operation. The surface branch below uses a cylinder reduction; it does not claim to reproduce either the original Murthy–Swan argument or the original Mohan Kumar–Murthy proof.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The exact classical rank-three Chern bijection is the external input stated by Asok–Fasel p. 2 and attributed to Mohan Kumar–Murthy.

[F2] The ordinary Chow Chern map and its coefficient convention are fixed in [[lem-author-f08c343a07fc-local-chern-interface]].

## Proof

1.1 Apply the external rank-three classification with the given algebraically closed field and smooth affine threefold. The recalled classical theorem imposes no characteristic restriction; the separate nearby rank-two theorem is not being applied. Its map is the ordinary Chern tuple map fixed by [F2]. [F1, F2, given]

2.1 Surjectivity supplies a rank-three bundle for each triple, and injectivity says that equal triples have the same bundle isomorphism class. Conversely an isomorphism gives equal Chern classes by [F2]. These are the asserted existence and uniqueness conclusions. [F1, F2, step 1.1] ∎
