---
id: cor-projective-standard-labels-lie-above-the-head
kind: corollary
title: The triangular restriction on projective Verma flags
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- def-partial-order-on-weights
- def-verma-flag-and-its-multiplicities
- prop-weights-of-a-verma-module-lie-below-lambda
- thm-bgg-reciprocity
- thm-projectives-in-category-o-have-verma-flags
- thm-verma-module-has-a-unique-simple-quotient
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
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 2.2
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §2, Theorem 2.2 and its proof, printed p. 4 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Corollary 20.5 and Sec.
      20.3
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.2-20.3, Corollary 20.5 and Theorem 20.6, printed p. 102; Example 20.8, printed p.
      103. The label restriction follows locally from Verma support.
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If
$(P(\lambda):\Delta(\mu))$ is nonzero then $\mu\ge\lambda$, that is,
$\mu-\lambda\in Q^+$. Moreover $(P(\lambda):\Delta(\lambda))=1$, so exactly
one factor of every Verma flag of $P(\lambda)$ has label $\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, weights $\lambda,\mu$, and the Verma-filtered projective cover $P(\lambda)$ of $L(\lambda)$.

[F1] $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]=[M(\mu):L(\lambda)]$, where the right-hand side is the composition multiplicity of the simple module $L(\lambda)$ in the Verma module $M(\mu)=\Delta(\mu)$ ([[thm-bgg-reciprocity]], [[thm-projectives-in-category-o-have-verma-flags]]).

[F2] The weights of $M(\mu)$ are exactly $\mu-Q^+$ and $M(\mu)_\mu=\mathbb Cv_\mu$; $L(\mu)$ is the unique simple quotient of $M(\mu)$, with highest weight $\mu$ ([[prop-weights-of-a-verma-module-lie-below-lambda]], [[thm-verma-module-has-a-unique-simple-quotient]]).

[F3] $\mu\ge\lambda$ means $\mu-\lambda\in Q^+$, and the order is a partial order ([[def-partial-order-on-weights]]).

## Proof

**Proof technique:** direct: identify the flag multiplicity with a Verma composition multiplicity and compare weights.

1.1 If $(P(\lambda):\Delta(\mu))\ne0$, then by [F1] the simple module $L(\lambda)$ is a composition factor of $M(\mu)$, hence its highest weight $\lambda$ is a weight of $M(\mu)$; by [F2] every weight of $M(\mu)$ lies in $\mu-Q^+$, so $\lambda\le\mu$, that is, $\mu-\lambda\in Q^+$. [F1, F2, F3, given]

1.2 $(P(\lambda):\Delta(\lambda))=[M(\lambda):L(\lambda)]=1$: the kernel $J(\lambda)$ of the quotient map is the sum of all proper submodules, so $J(\lambda)$ contains no highest-weight vector of weight $\lambda$ and $J(\lambda)_\lambda=0$; since $M(\lambda)=\mathfrak n^-M(\lambda)\oplus\mathbb Cv_\lambda$ by [F2], this gives $J(\lambda)\subseteq\mathfrak n^-M(\lambda)$. The highest weight of any composition factor of $J(\lambda)$ is a weight of $J(\lambda)$ and is therefore different from $\lambda$, so no factor is isomorphic to $L(\lambda)$; from $0\to J(\lambda)\to M(\lambda)\to L(\lambda)\to0$ the multiplicity $[M(\lambda):L(\lambda)]$ is exactly one. [F1, F2]

2.1 Thus a nonzero multiplicity $(P(\lambda):\Delta(\mu))$ forces $\mu\ge\lambda$, and the label $\lambda$ occurs exactly once in every Verma flag of $P(\lambda)$. [F3, step 1.1, step 1.2] ∎
