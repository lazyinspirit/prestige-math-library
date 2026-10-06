---
id: cex-a-verma-module-need-not-be-projective-in-the-whole-block
kind: counterexample
title: A Verma module need not be projective in its block
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- cor-antidominant-verma-modules-are-simple
- def-truncated-category-o-at-a-finite-weight-ideal
- ex-projective-covers-in-the-regular-sl2-block
- lem-dominant-weights-are-maxima-of-their-weyl-orbits
- lem-maximal-verma-is-projective-in-a-finite-truncation
- prop-projective-covers-in-o-are-indecomposable-and-unique
- thm-bgg-reciprocity
- thm-category-o-has-enough-projectives
- thm-central-character-summands-split-into-linkage-blocks
- thm-projectives-in-category-o-have-verma-flags
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-7.md
      - research/frontier-38-owner-30-dispatch/reader-reader-7.result.json
      - research/frontier-38-owner-30-step5-hash-7-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4 and
      Example 20.8
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §16.3, Proposition 16.4, printed pp. 86-87; §20.3, Example 20.8 (the two-step projective
      cover), printed p. 103 (full text read at harvest)
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2 and Example 3.16
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Theorem 2.2, printed p. 4; §3, Example 3.16, printed p. 7 (full text read at harvest)
---

## Statement refuted

Every Verma module lying in an integral block of $\mathcal O$ is projective in
that block; in particular, in the regular integral block with labels $m$ and
$-m-2$ both Verma modules $\Delta(m)$ and $\Delta(-m-2)$ are projective.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$, an integer $m\ge0$, and the regular integral block $C_m$ with labels $m$ and $-m-2$, ordered by $-m-2\le m$.

[F1] For every $n\ge0$ the regular integral block $C_n$ has simple labels $n$ and $-n-2$ with $-n-2<n$, standards $\Delta(n)=M(n)$ and $\Delta(-n-2)=M(-n-2)=L(-n-2)$, and nonsplit sequence $0\to L(-n-2)\to M(n)\to L(n)\to0$; this is the rank-one computation of the parent example, applied here with $n=m$ ([[ex-projective-covers-in-the-regular-sl2-block]], [[cor-antidominant-verma-modules-are-simple]]).

[F2] Since $m$ is maximal in the finite downward-closed ideal $C_m$ of its linkage class, $M(m)$ is projective in $\mathcal O_{C_m}$ and in $\mathcal O$ ([[lem-maximal-verma-is-projective-in-a-finite-truncation]], [[lem-dominant-weights-are-maxima-of-their-weyl-orbits]], [[def-truncated-category-o-at-a-finite-weight-ideal]]).

[F3] The projective cover $P(-m-2)$ of $L(-m-2)$ exists, is indecomposable with head $L(-m-2)$, is Verma-filtered, and BGG reciprocity gives $(P(-m-2):\Delta(\mu))=[\Delta(\mu):L(-m-2)]$; composition factors of standards from other linkage classes are disjoint from the block $C_m$ ([[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-projectives-in-category-o-have-verma-flags]], [[thm-bgg-reciprocity]], [[thm-central-character-summands-split-into-linkage-blocks]]).

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

**Proof technique:** direct: the maximal label is projective, the minimal label is the head of a nonsplit two-step cover.

1.1 By [F2] the maximal-label Verma $\Delta(m)=M(m)$ is projective in $\mathcal O_{C_m}$ (and in $\mathcal O$). By [F1] the other Verma is simple, $\Delta(-m-2)=M(-m-2)=L(-m-2)$, and the composition factors of $M(m)$ are $L(-m-2)$ and $L(m)$, each with multiplicity one. [F1, F2]

1.2 By [F3] the cover $P(-m-2)$ is Verma-filtered and BGG reciprocity gives $(P(-m-2):\Delta(\mu))=[\Delta(\mu):L(-m-2)]$, which is $1$ for $\mu=-m-2$ and $\mu=m$ by [F1] and $0$ for all other $\mu$ because $L(-m-2)$ lies in the block $C_m$ and other linkage classes contribute no composition factors to it. Hence every Verma flag of $P(-m-2)$ has exactly the two factors $\Delta(m)$ and $\Delta(-m-2)$, each once. [F1, F3]

2.1 In such a flag the bottom factor cannot be $\Delta(-m-2)$: then $P(-m-2)$ would have $\Delta(m)=M(m)$ as a quotient, and composing with $M(m)\twoheadrightarrow L(m)$ would exhibit $L(m)$ as a simple quotient, contradicting that $P(-m-2)$ has the unique simple quotient $L(-m-2)$ with $m\ne-m-2$. So there is a subobject $\Delta(m)\subseteq P(-m-2)$ with quotient $\Delta(-m-2)$, giving the short exact sequence $0\to\Delta(m)\to P(-m-2)\to\Delta(-m-2)\to0$; it is nonsplit because projective covers are indecomposable by [F3]. [F3, step 1.2]

3.1 The Verma $\Delta(-m-2)$ is not projective in the block $C_m$: if it were, the epimorphism $P(-m-2)\twoheadrightarrow\Delta(-m-2)$ would split, contradicting the nonsplitness of step 2.1. Since $\Delta(m)$ is projective by step 1.1, projectivity indeed depends on the position of the highest weight in the linkage poset, refuting the statement. [step 1.1, step 2.1] ∎
