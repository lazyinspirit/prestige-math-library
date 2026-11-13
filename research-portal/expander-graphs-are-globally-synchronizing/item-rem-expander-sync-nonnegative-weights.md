---
title: Claimed extension to nonnegative weighted graphs
status: draft
research_item: rem-expander-sync-nonnegative-weights
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 10, Section 2 opening paragraph; PDF pp. 6–8, Definitions 1.3
        and 1.9 and notation; PDF p. 18, Lemma 3.1 and footnote 7
      statement: The article says all results can be extended to nonnegative weighted
        edges. Its displayed Lemma 3.1 assumes the binary adjacency convention
        and its proof uses A_xx in {0,1}; the degree counts a loop once.
      hypotheses: Original statements use symmetric binary adjacency; the weighted
        sentence is an extension assertion without a stated weighted
        normalization. The comparison below tests the unchanged degree formula
        under nonnegative symmetric weights, not the binary lemma.
      reading_limits: Extracted text of Section 1.2, Definitions 1.3/1.9, Section 2
        opening, and Lemma 3.1 read; PDF images pp. 8, 10 and 18 inspected. This
        is article attribution and scope comparison. No complete proof of all
        weighted analogues, probabilistic weighted models, or full-paper audit
        is claimed.
---

PDF p. 10: ` Section 2 opening paragraph `

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [lem-author-3bf637a47abd-weighted-loop-calculus](item-lem-author-3bf637a47abd-weighted-loop-calculus)
- [lem-author-3bf637a47abd-weighted-scale-covariance](item-lem-author-3bf637a47abd-weighted-scale-covariance)
- [lem-author-3bf637a47abd-weighted-offdiagonal-degree](item-lem-author-3bf637a47abd-weighted-offdiagonal-degree)
- [lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope)
- [lem-author-3bf637a47abd-weighted-complete-example](item-lem-author-3bf637a47abd-weighted-complete-example)


## Statement

The article states that “all results in the paper can be extended to graphs with weighted edges, provided that all the weights are non-negative” (Section 2, PDF p. 10). Retain this as an attributed extension assertion, with network terminology from [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks). Its energy and rotating-frame differential expressions extend to every finite symmetric nonnegative matrix, including arbitrary loops. Common positive rescaling of weights and the reference degree preserves the normalized centered spectral inequalities. However, an unchanged unit-loop degree bound is not valid for arbitrary loop weights: the correct general envelope contains the actual maximal loop weight. The five local results [lem-author-3bf637a47abd-weighted-loop-calculus](item-lem-author-3bf637a47abd-weighted-loop-calculus), [lem-author-3bf637a47abd-weighted-scale-covariance](item-lem-author-3bf637a47abd-weighted-scale-covariance), [lem-author-3bf637a47abd-weighted-offdiagonal-degree](item-lem-author-3bf637a47abd-weighted-offdiagonal-degree), [lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope) and [lem-author-3bf637a47abd-weighted-complete-example](item-lem-author-3bf637a47abd-weighted-complete-example) establish these precise assertions. They do not specify or prove every weighted probabilistic or construction analogue covered by the article's informal sentence.

## Facts & Assumptions

[F1] Networks allow arbitrary nonnegative loop weights and count a loop once in a row degree ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)).

[F2] Loop removal preserves the weighted energy, its derivatives, the rotating-frame vector field and the Laplacian ([lem-author-3bf637a47abd-weighted-loop-calculus](item-lem-author-3bf637a47abd-weighted-loop-calculus)).

[F3] Common positive rescaling preserves dimensionless spectral bounds ([lem-author-3bf637a47abd-weighted-scale-covariance](item-lem-author-3bf637a47abd-weighted-scale-covariance)).

[F4] The pointwise degree without loops is bounded directly by the centered Laplacian ([lem-author-3bf637a47abd-weighted-offdiagonal-degree](item-lem-author-3bf637a47abd-weighted-offdiagonal-degree)); restoring loops gives the loop-dependent row-degree envelope ([lem-author-3bf637a47abd-weighted-loop-degree-envelope](item-lem-author-3bf637a47abd-weighted-loop-degree-envelope)).

[F5] The explicit two-vertex network has both centered matrices zero but violates the fixed unit-cap upper degree expression ([lem-author-3bf637a47abd-weighted-complete-example](item-lem-author-3bf637a47abd-weighted-complete-example)).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Apply [F2] to the nonnegative weighted network in [F1]. This gives exactly the weighted gradient and Hessian formulas and diagonal cancellation, without a cap on loop weights. Apply [F3] to obtain the stated common-rescaling convention for the centered inequalities. These are precise deterministic weighted transfers. [F1, F2, F3]

2.1 By [F4], the weighted degree statement is obtained by keeping the actual diagonal entry, or its maximum, in the upper envelope. By [F5], replacing that maximum by $1$ need not be sound even when both centered spectral residuals vanish and the spectral parameters have strict positive and negative slack. Thus a weighted extension must adapt that formula or cap the loops; the example gives no failure of synchronization and does not decide unspecified weighted analogues. This establishes the local claims while preserving the broader sentence as article attribution. [F4, F5, step 1.1] ∎

## Source notes

The quoted extension sentence occurs in the opening of Section 2, PDF p. 10. Under the original binary convention in Section 1.2, Lemma 3.1 on PDF p. 18 is valid: its proof explicitly uses $A_{xx}\in\{0,1\}$. Footnote 7 states that self-loops do not affect Kuramoto dynamics. The local example is therefore a counterexample only to retaining that displayed degree conclusion unchanged after allowing arbitrary nonnegative loop weights. It does not refute the original binary lemma, the existence of suitably modified weighted extensions, or any synchronization conclusion. The corrected envelope supplies such a weighted extension for this lemma. The full scope of unspecified weighted random-graph models and construction results remains outside the established local assertions; no universal proof is claimed.
