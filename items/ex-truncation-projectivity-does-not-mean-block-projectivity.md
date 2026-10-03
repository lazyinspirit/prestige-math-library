---
id: ex-truncation-projectivity-does-not-mean-block-projectivity
kind: example
title: "The same Verma in two ambient categories"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-truncated-category-o-at-a-finite-weight-ideal
  - ex-projective-covers-in-the-regular-sl2-block
  - lem-maximal-verma-is-projective-in-a-finite-truncation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Proposition 16.4 and its proof applied to a support truncation"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.3, Proposition 16.4 and proof (all weights of an object of a truncated block are not above the maximal label), printed pp. 86-87 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Warning 1.9 and Example 3.16"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§1, Warning 1.9, printed pp. 2-3; §3, Example 3.16, printed p. 7 (full text read at harvest)"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $\mathfrak g=\mathfrak{sl}_2$ and consider the weight $-2$. In the
one-label truncation $\Gamma=\{-2\}$ of the linkage class $\{-2,0\}$, the
weight $-2$ is maximal in $\Gamma$, so $\Delta(-2)=M(-2)$ is projective in
$\mathcal O_\Gamma$ by
[[lem-maximal-verma-is-projective-in-a-finite-truncation]]. In the full
regular integral block $\{-2,0\}$, the same Verma $\Delta(-2)$ is not
projective, because its projective cover is the nonsplit extension
$0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$. This shows that the ambient
truncation in the hypothesis of
[[lem-maximal-verma-is-projective-in-a-finite-truncation]] cannot be dropped:
projectivity of a maximal-label Verma is a statement about the chosen finite
downward-closed ideal, and enlarging the ideal can destroy it.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$, the linkage class $\{-2,0\}$, the truncation $\Gamma=\{-2\}$, and the full block $C=\{-2,0\}$.

[F1] In the root order $-2\le0$, and $\Gamma=\{-2\}$ is a finite downward-closed ideal of the class $\{-2,0\}$ in which $-2$ is maximal: the only element of the class below $-2$ is $-2$ itself ([[def-truncated-category-o-at-a-finite-weight-ideal]], [[ex-projective-covers-in-the-regular-sl2-block]]).

[F2] If $\lambda$ is maximal in a finite downward-closed ideal $\Gamma$ of a linkage class, then $\Delta(\lambda)$ is projective in $\mathcal O_\Gamma$ ([[lem-maximal-verma-is-projective-in-a-finite-truncation]]).

[F3] In the full block, $P(-2)$ fits into the nonsplit sequence $0\to\Delta(0)\to P(-2)\to\Delta(-2)\to0$ ([[ex-projective-covers-in-the-regular-sl2-block]]).

## Verification

**Proof technique:** direct: apply the maximal-label lemma in the small truncation and use the nonsplit cover to refute projectivity in the large block.

1.1 By [F1] the set $\Gamma=\{-2\}$ is a finite downward-closed ideal of the linkage class $\{-2,0\}$ in which $-2$ is maximal, so [F2] makes $\Delta(-2)$ projective in $\mathcal O_\Gamma$. [F1, F2, given]

1.2 In the full block $C=\{-2,0\}$, suppose $\Delta(-2)$ were projective. Since $\Delta(-2)=L(-2)$ is the head of $P(-2)$ and $P(-2)\twoheadrightarrow\Delta(-2)$ is an epimorphism onto a projective object, it would split, contradicting the nonsplitness of the sequence in [F3]. Hence $\Delta(-2)$ is not projective in $\mathcal O_C$. [F3, given]

2.1 The same Verma $\Delta(-2)$ is thus projective in the one-label truncation $\mathcal O_\Gamma$ but not in the full block $\mathcal O_C$: projectivity of a maximal-label Verma depends on the ambient finite downward-closed ideal, as claimed. [step 1.1, step 1.2] ∎
