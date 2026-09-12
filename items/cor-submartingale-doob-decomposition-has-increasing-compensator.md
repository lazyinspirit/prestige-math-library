---
id: "cor-submartingale-doob-decomposition-has-increasing-compensator"
kind: "corollary"
title: "Submartingale doob decomposition has increasing compensator"
deps: ["thm-doob-decomposition-of-an-integrable-adapted-process", "def-martingale-submartingale-and-supermartingale", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-finite-and-countable-subadditivity-of-measures", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: published
origin: "pipeline"
verification:
  audited: 2026-09-12
---

## Statement

Assume AC. An integrable adapted real $X$ is a submartingale if and only if its Doob compensator satisfies $A_n\ge A_{n-1}$ a.s. for every $n\ge1$. Equivalently its compensator has nondecreasing sample paths outside a single measurable null set.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The normalized compensator increment is the conditional mean of the original increment. [[thm-doob-decomposition-of-an-integrable-adapted-process]].

[F2] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F3] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F4] Countable measurable null unions are null. [[thm-finite-and-countable-subadditivity-of-measures]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 The Doob formula and conditional linearity give $A_n-A_{n-1}=E[X_n-X_{n-1}\mid\mathcal F_{n-1}]=E[X_n\mid\mathcal F_{n-1}]-X_{n-1}$ a.s., since $X_{n-1}$ is known and integrable. If $X$ is a submartingale the right side is nonnegative for every $n\ge1$, hence so is the compensator increment. Conversely nonnegative compensator increments imply $E[X_n\mid\mathcal F_{n-1}]\ge X_{n-1}$ for every $n\ge1$, which is the submartingale definition [[def-martingale-submartingale-and-supermartingale]]. AC is inherited from the Doob construction and its conditional classes. [given, F1, F2, F3, F5]

2.1 If every increment is nonnegative a.s., the measurable sets $N_n=\{A_n<A_{n-1}\}$ are null. Their union $N=\bigcup_{n\ge1}N_n$ is measurable and null. For $\omega\notin N$ every successive inequality holds, so finite chaining gives $A_m(\omega)\le A_n(\omega)$ whenever $m\le n$. Conversely, if all paths off a measurable null $N$ are nondecreasing, each $N_n$ is contained in $N$, and hence has probability zero. This proves the path formulation for any chosen measurable versions. [F4, step 1.1] ∎
