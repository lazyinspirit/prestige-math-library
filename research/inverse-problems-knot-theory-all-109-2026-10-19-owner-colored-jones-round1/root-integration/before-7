---
id: thm-colored-jones-finite-evaluation
kind: theorem
title: "Finite colored Jones evaluation is exact and representative-independent"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-colored-jones-generic-quotient-is-laurent
  - def-normalized-colored-jones-sequence
  - def-colored-framed-knot-evaluation-from-ribbon-category
  - alg-colored-jones-from-ribbon-evaluation
  - thm-ribbon-evaluation-from-colored-braid-word-procedure-properties
  - thm-twist-correction-removes-framing
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice supplies Markov's theorem and implies countable choice; countable choice is also the exact hypothesis of the framed ribbon-tangle evaluator."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §§8.9–8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Hitoshi Murakami, An Introduction to the Volume Conjecture, §§2.4–2.5"
      url: "https://arxiv.org/pdf/1002.0126"
---

## Statement

Assume the Axiom of Choice and the prescribed generic matrix ribbon data for the $N$-dimensional color, where $N\ge1$. For every finite braid word $\beta$ on $n\ge1$ strands whose closure is a knot, the algorithm performs finitely many exact operations, including exactly one crossing-matrix update per letter and one finite pivotal-trace contraction, and returns the generic normalized value $J_N^{\mathrm{gen}}(\widehat\beta;q)$. If two such braid words close to the same oriented unframed knot, their returned generic values agree. The unique Laurent representative belongs to $\mathbb Z[q,q^{-1}]$, and its evaluation at any nonzero complex $q$ is defined, including at $q_N=e^{2\pi i/N}$.

## Statement references

[[alg-colored-jones-from-ribbon-evaluation|Finite colored Jones procedure]]

[[def-normalized-colored-jones-sequence|Generic normalization and color data]]

[[thm-ribbon-evaluation-from-colored-braid-word-procedure-properties|Colored-braid evaluator correctness and termination]]

[[thm-twist-correction-removes-framing|Scalar twist correction and Markov invariance]]

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

[Murakami, *An Introduction to the Volume Conjecture*, §§2.4–2.5](https://arxiv.org/pdf/1002.0126)

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $N\ge1$, the prescribed generic matrix ribbon data, a finite braid word $\beta$ of length $m$ on $n\ge1$ strands, and a knot closure.

[F1] The procedure forms the positive and inverse crossing matrices, calls the finite matrix ribbon evaluator, computes the exponent sum, and returns $\lambda_N^{-w(\beta)}t_N(\beta)/d_N$ over the exact field $\mathbb Q(A)$ ([[alg-colored-jones-from-ribbon-evaluation]]).

[F2] For valid finite-dimensional matrix data over an effective field and a color-preserving braid word of length $m$, the ribbon evaluator makes exactly $m$ crossing-matrix updates and one finite pivotal-trace contraction and returns the framed colored-braid value ([[thm-ribbon-evaluation-from-colored-braid-word-procedure-properties]]).

[F3] In the generic definition, $d_N\ne0$ in $\mathbb Q(A)$, $\lambda_N\ne0$, and $J_N^{\mathrm{gen}}=\lambda_N^{-w(\beta)}t_N(\beta)/d_N$ ([[def-normalized-colored-jones-sequence]]).

[F4] For an absolutely simple color with scalar twist $\lambda I$, the corrected framed trace $\lambda^{-w(\beta)}t_n(\beta)$ is invariant under conjugation and both Markov stabilizations when the Axiom of Choice is assumed ([[thm-twist-correction-removes-framing]]).

[F5] The framed ribbon-tangle evaluator is defined under Countable Choice ([[def-colored-framed-knot-evaluation-from-ribbon-category]]).

[F6] The Axiom of Choice implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F7] The quotient has a unique integral Laurent representative in $q=A^4$, proved by [[lem-colored-jones-generic-quotient-is-laurent]].

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[A2] Countable Choice has its usual sequence-of-nonempty-sets meaning ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement and [A1].

1.1 The universal-$R$ sum used for $c_N$ has only the terms $0\le r<N$, since $E^N=F^N=0$ on the displayed $N$-dimensional module. The braid word has finitely many letters, and [F2] performs exactly one matrix update per letter followed by one finite trace contraction. All remaining arithmetic is addition, multiplication, equality testing, and inversion of the nonzero generic scalar $d_N$ in $\mathbb Q(A)$, so every operation terminates. [F1, F2, F3, given, construct]

2.1 By [F2], the evaluator returns $t_N(\beta)$, the pivotal trace of the framed colored closure. The last step in [F1] multiplies this value by $\lambda_N^{-w(\beta)}$ and divides by $d_N$, exactly the formula in [F3]. Hence the returned value is $J_N^{\mathrm{gen}}(\widehat\beta;q)$. [F1, F2, F3, step 1.1, given]

3.1 If $\beta$ and $\beta'$ close to the same oriented unframed knot, Markov's theorem under [A1] relates them by finitely many conjugations, stabilizations, and destabilizations. The scalar-twist theorem [F4] preserves $\lambda_N^{-w}t_N$ under each move; both braids use the same nonzero $d_N$, so division by $d_N$ preserves equality. The abstract framed evaluation used to identify the matrix trace is defined under Countable Choice [F5], which follows from [A1] by [F6] and has the meaning in [A2]. Thus the algorithm outputs agree without adding an axiom beyond AC. Finally [F7] proves that their unique common representative is an integral Laurent polynomial, whose substitution at a nonzero complex number has no vanishing denominator. [A1, A2, F3, F4, F5, F6, F7, step 2.1, given] ∎
