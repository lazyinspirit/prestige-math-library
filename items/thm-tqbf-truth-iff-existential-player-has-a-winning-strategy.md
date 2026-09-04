---
id: thm-tqbf-truth-iff-existential-player-has-a-winning-strategy
kind: theorem
title: "A quantified Boolean formula is true if and only if the existential player has a winning strategy in its game"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quantified-boolean-formula-and-tqbf, def-quantified-formula-game]
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $\Phi$ be a quantified Boolean formula. Then $\Phi$ is true if and only if the existential player has a winning strategy in the quantified formula game of $\Phi$.

## Facts & Assumptions

**Given:** a quantified Boolean formula $\Phi$.

[L1] Truth of a quantified Boolean formula is defined recursively from its quantifier prefix and quantifier-free matrix ([[def-quantified-boolean-formula-and-tqbf]]).

[L2] In the quantified formula game, the existential player chooses the existentially quantified variables and the universal player chooses the universally quantified ones; the existential player wins exactly when the final matrix evaluates to true ([[def-quantified-formula-game]]).

## Proof

**Proof technique:** induction.

1.1 If $\Phi$ has no quantifiers, then [L1] says that $\Phi$ is true exactly when its quantifier-free matrix is true, and [L2] says that this is exactly the condition for the existential player to win the zero-move game. [L1, L2, base]

1.2 Suppose $\Phi=\exists x\,\Psi(x)$. By [L1], $\Phi$ is true if and only if at least one of $\Psi(0)$ or $\Psi(1)$ is true. By the induction hypothesis, that happens exactly when the existential player has a winning strategy for at least one of the two suffix games, and then the existential player wins the whole game by choosing that first move. Conversely, any winning strategy for the whole game determines such a first move. [L1, L2, ih, choose]

1.3 Suppose instead $\Phi=\forall x\,\Psi(x)$. By [L1], $\Phi$ is true if and only if both $\Psi(0)$ and $\Psi(1)$ are true. By the induction hypothesis, that is equivalent to the existential player having a winning strategy after either first move of the universal player, which is exactly what [L2] means for the whole game. [L1, L2, ih]

2.1 Steps 1.1, 1.2, and 1.3 prove both directions of the equivalence. [step 1.1, step 1.2, step 1.3, discharge-induction] ∎
