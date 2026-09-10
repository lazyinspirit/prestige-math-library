---
id: thm-sigma-one-upward-and-pi-one-downward-absoluteness
kind: theorem
title: "Sigma-one truth goes upward"
status: draft
origin: pipeline
deps: [thm-delta-zero-absoluteness-for-transitive-sets, lem-levy-sigma-one-existential-normal-form]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Andrew Marks, Set Theory lecture notes — Proposition 18.13, upward and downward absoluteness, p78"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---


## Statement

For nonempty transitive $M\subseteq N$, a literal existential block over a $\Delta_0$ matrix transfers truth upward, and its universal dual transfers truth downward. For formulas classified only by ZF-provable equivalence, assume both structures satisfy ZF (or all axioms used in the equivalence proof).

## Facts & Assumptions

[F1] [[thm-delta-zero-absoluteness-for-transitive-sets]]: If $M\subseteq N$ are nonempty transitive sets, every $\Delta_0$ formula is absolute between them on parameter tuples from $M$. No internal set-theory axioms are required. The analogous assertion for definable transitive classes is a formula-by-formula scheme.

[F2] [[lem-levy-sigma-one-existential-normal-form]]: Over ZF, every $\Sigma_1$ formula in the bounded-closure convention is equivalent to $\exists u_1\cdots\exists u_k\,\delta$ with $\delta$ bounded. The equivalence is asserted over ZF, not over arbitrary transitive structures.

## Proof

**Given:** Parameters in nonempty transitive $M\subseteq N$, with the displayed syntax or equivalence axioms.

1.1 If $M\models\exists\bar u\,\delta(\bar u,\bar a)$, take its finite tuple of witnesses $\bar b\in M$. The tuple remains in $N$, and bounded absoluteness F1 gives $N\models\delta(\bar b,\bar a)$. Thus $N$ satisfies the existential formula. The empty block is exactly F1. [F1, given]

2.1 If a universal dual were true in $N$ and false in $M$, its existential negation would be true in $M$ and hence in $N$ by step 1.1. This contradicts its truth in $N$, proving downward transfer. [step 1.1, algebra]

3.1 When classification is modulo ZF, F2 supplies a ZF equivalence to the literal normal form. Each model satisfies that equivalence under the extra hypothesis. Translate to the normal form in the source model, apply steps 1.1 or 2.1, and translate back in the destination model. [F2, step 1.1, step 2.1] ∎

