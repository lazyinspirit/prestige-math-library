---
id: cex-a-projective-verma-flag-need-not-split
kind: counterexample
title: A projective Verma flag need not split
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- def-verma-flag-and-its-multiplicities
- ex-projective-covers-in-the-regular-sl2-block
- thm-projectives-in-category-o-have-verma-flags
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2 with the sl2 specialization
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Theorem 2.2, printed p. 4; §3, Example 3.16, printed p. 7 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.2 and Example
      20.8
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.2, standard filtrations of projectives, printed pp. 101-103; §20.3, Example 20.8,
      printed p. 103 (full text read at harvest)
---

## Statement refuted

Every finite Verma flag of a projective object of $\mathcal O$ splits, that
is, a projective object carrying a Verma flag is the direct sum of the
standard factors of that flag.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2$, an integer $m\ge0$, and the regular integral block with labels $m$ and $-m-2$.

[F1] The projective cover $P(-m-2)$ carries the two-step Verma flag $0\subseteq\Delta(m)\subseteq P(-m-2)$ with quotient $\Delta(-m-2)$, and the exact sequence $0\to\Delta(m)\to P(-m-2)\to\Delta(-m-2)\to0$ is nonsplit; $P(-m-2)$ is indecomposable with head $L(-m-2)$ ([[ex-projective-covers-in-the-regular-sl2-block]]).

[F2] Every projective object of $\mathcal O$ has a finite Verma flag, and the factors of the flag of a projective cover are its standard factors with multiplicities $(P(\lambda):\Delta(\mu))$; the flag of $\Delta(m)$ has the single factor $\Delta(m)$ ([[thm-projectives-in-category-o-have-verma-flags]], [[def-verma-flag-and-its-multiplicities]]).

## Counterexample

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

**Proof technique:** direct: exhibit the two-step flag of $P(-m-2)$ and rule out a splitting by the head.

1.1 By [F1] the projective $P(-m-2)$ has the finite Verma flag $0\subseteq\Delta(m)\subseteq P(-m-2)$ with quotient $\Delta(-m-2)$, and the corresponding sequence is nonsplit. If the flag split, then $P(-m-2)\cong\Delta(m)\oplus\Delta(-m-2)$. [F1, F2]

2.1 But $\Delta(m)=M(m)$ has head $L(m)$, so the direct sum would have $L(m)$ as a simple quotient, in addition to the quotient $L(-m-2)$ from $\Delta(-m-2)$; a projective cover has a unique simple quotient, its head, which is $L(-m-2)$ by [F1], and $m\ne-m-2$. Hence no splitting exists. [F1, step 1.1]

3.1 For $m=0$ this is the module $P(-2)$ with head and socle $L(-2)$ and middle composition factor $L(0)$: the flag $0\subseteq\Delta(0)\subseteq P(-2)$ with quotient $\Delta(-2)=L(-2)$ does not split, so the existence of a finite Verma flag for a projective (from [F2]) is strictly weaker than a direct-sum decomposition into standards. [F1, F2, step 2.1] ∎
