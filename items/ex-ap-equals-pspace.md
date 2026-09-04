---
id: ex-ap-equals-pspace
kind: example
title: "An alternating machine for a quantified Boolean formula"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-quantified-formula-game, thm-tqbf-truth-iff-existential-player-has-a-winning-strategy, thm-ap-equals-pspace]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

For the formula

$$\Phi:=\exists x\,\forall y\ (x\vee y),$$

the existential player has a winning strategy, and the corresponding alternating machine accepts by choosing $x=1$ at its first existential state.

## Facts & Assumptions

**Given:** the formula $\Phi=\exists x\,\forall y\,(x\vee y)$.

[L1] The quantified formula game lets the existential player choose existential variables and the universal player choose universal variables ([[def-quantified-formula-game]]).

[L2] Truth of the formula is equivalent to existence of a winning strategy for the existential player ([[thm-tqbf-truth-iff-existential-player-has-a-winning-strategy]]).

[L3] AP equals PSPACE, and the AP side is realized by alternating choices along the quantifier prefix ([[thm-ap-equals-pspace]]).

## Verification

**Proof technique:** direct.

1.1 In the game of [L1], if Player E chooses $x=1$ on the first move, then the matrix $x\vee y$ is true regardless of whether Player A later chooses $y=0$ or $y=1$. So Player E has a winning strategy. [L1, given]

2.1 By [L2], step 1.1 implies that $\Phi$ is true. The corresponding alternating machine from [L3] uses an existential state to choose $x$ and a universal state to branch over the two values of $y$; after the choice $x=1$, both universal branches accept. [L2, L3, step 1.1]

3.1 This is the smallest nontrivial picture behind the inclusion $\mathrm{PSPACE}\subseteq\mathrm{AP}$ in [[thm-ap-equals-pspace]]. [L3, step 2.1] ∎
