---
title: Æ rank-one correction with separated error spaces
status: published
research_item: pthm-qec-distinguishability-ae-correction
dependency_level: 15
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 6, Æ-code bullet continued into the right column
      statement: The article gives the selected J equals five Æ codewords and says
        they correct rank-one transitions with nonoverlapping logical error
        spaces, making the cross-codeword pair-product conditions vanish; it
        attributes the code to Ref. [9].
      hypotheses: The article's selected encoding and rank-one transition model.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution. This citation is not used as proof of correction or as
        evidence of an experiment.
---

PDF p. 6: ` Æ-code bullet continued into right column `

## Prerequisites

- [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)
- [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [thm-qec-prereq-spaced-ae-moment-criterion](item-thm-qec-prereq-spaced-ae-moment-criterion)
- [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)


## Statement

Let $V_5$ have orthonormal magnetic basis $|5,m\rangle$, $m=-5,-4,\ldots,5$, and let the code be the span of $|\bar0\rangle=\sqrt{5/7}|5,-2\rangle+\sqrt{2/7}|5,5\rangle$ and $|\bar1\rangle=\sqrt{2/7}|5,-5\rangle+\sqrt{5/7}|5,2\rangle$. Select finitely many spin blocks including $V_5$, each with $|J'-5|\leq1$, and let $H$ be their orthogonal direct sum. Let $\mathcal E$ be the complex span on $H$ of the identity and the coherent components of rank-zero and rank-one spherical tensor families from $V_5$ into the selected blocks, extended by zero outside $V_5$. Tensor rank refers to the transformation law, not matrix rank.

For every $E,F\in\mathcal E$, $PE^\dagger FP=c_{E,F}P$ for a scalar $c_{E,F}$, where $P$ is the code projector. Consequently every finite Kraus channel on $H$ whose Kraus operators lie in $\mathcal E$ has an exact decoded recovery on this code. In particular, $\langle\bar0|E^\dagger F|\bar1\rangle=0$, so the subspaces $\operatorname{span}\{E|\bar0\rangle:E\in\mathcal E\}$ and $\operatorname{span}\{F|\bar1\rangle:F\in\mathcal E\}$ are orthogonal. The article attributes this Æ code and its correction property to Ref. [9]. The conclusion concerns coherent tensor components; it does not claim correction of every separately resolved matrix-unit transition.

## Facts & Assumptions

[F1] The stated codewords are orthonormal and define an isometric encoding of a two-dimensional logical space; their magnetic supports are $\{-2,5\}$ and $\{-5,2\}$. [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)

[F2] The error-span contract defines the selected direct sum, the extended coherent tensor components and the pair-product condition. Rank-one transition terminology refers to tensor rank, rather than matrix rank. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract) [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)

[F3] For two normalized codewords with disjoint magnetic supports whose union has pairwise spacing at least three, equality of moments of orders $0,1,2$ implies the pair-product condition for the selected order-one tensor error span. [thm-qec-prereq-spaced-ae-moment-criterion](item-thm-qec-prereq-spaced-ae-moment-criterion)

[F4] For a finite-dimensional isometric code and a finite Kraus channel, scalar pair-product compressions of its Kraus operators imply a decoded recovery channel that acts as the identity on the logical operator space. [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)

## Proof

**Given:** The codewords, selected finite blocks, and error span in the Statement, together with a finite Kraus channel whose Kraus operators belong to that span.

**Goal:** Establish the pair-product condition, exact decoded recovery, and orthogonality of the two generated logical error spaces.

1.1 The union of supports is $\{-5,-2,2,5\}$, with consecutive gaps $3,4,3$; the supports are disjoint. The moments of orders $0,1,2$ for $|\bar0\rangle$ are $1$, $(5(-2)+2(5))/7=0$, and $(5(4)+2(25))/7=10$. For $|\bar1\rangle$ they are $1$, $(2(-5)+5(2))/7=0$, and $(2(25)+5(4))/7=10$. Thus all hypotheses of the spaced-support criterion hold. [given, F1, F2, F3, algebra]

2.1 The criterion gives $PE^\dagger FP=c_{E,F}P$ for every $E,F\in\mathcal E$. In particular it holds for every pair of Kraus operators of the given channel. Since the code is finite dimensional and the encoding is isometric, the Knill–Laflamme criterion supplies an exact decoded recovery. [given, F1, F3, F4, step 1.1]

3.1 Taking the matrix element of the pair-product condition between the orthogonal codewords gives $\langle\bar0|E^\dagger F|\bar1\rangle=c_{E,F}\langle\bar0|\bar1\rangle=0$. These are precisely the inner products $\langle E\bar0|F\bar1\rangle$; linearity therefore makes the two generated subspaces orthogonal. This proves the stated correction and separation. [given, F1, step 2.1, algebra] ∎
