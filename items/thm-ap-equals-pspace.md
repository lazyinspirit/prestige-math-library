---
id: thm-ap-equals-pspace
kind: theorem
title: "AP equals PSPACE"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alternating-polynomial-time, thm-tqbf-is-pspace-complete, thm-tqbf-truth-iff-existential-player-has-a-winning-strategy, prop-tqbf-is-in-pspace]
landmark: true
proof_strategy: direct
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

$$\mathrm{AP}=\mathrm{PSPACE}.$$

## Facts & Assumptions

**Given:** the classes AP and PSPACE.

[L1] AP is defined by polynomial-time alternating machines ([[def-alternating-polynomial-time]]).

[L2] TQBF is PSPACE-complete ([[thm-tqbf-is-pspace-complete]]).

[L3] A quantified Boolean formula is true exactly when the existential player has a winning strategy in its game ([[thm-tqbf-truth-iff-existential-player-has-a-winning-strategy]]).

## Proof

**Proof technique:** direct.

1.1 To prove $\mathrm{PSPACE}\subseteq\mathrm{AP}$, it is enough by [L2] to show that TQBF lies in AP. On input a quantified Boolean formula, an alternating machine reads the quantifier prefix from left to right: at an existential quantifier it enters an existential state and chooses the bit, and at a universal quantifier it enters a universal state and branches over both bits. After the prefix is exhausted, it deterministically evaluates the matrix. By [L3], this machine accepts exactly the true formulas, so TQBF is in AP. [L2, L3, construct]

1.2 For the reverse inclusion, let $L\in\mathrm{AP}$ and choose an alternating machine $M$ for $L$ running in time $p(n)$. On input $x$, a deterministic procedure evaluates the acceptance of the computation tree depth-first: at an accepting or rejecting leaf it returns the corresponding truth value; at an existential configuration it ORs the recursive values of the children; at a universal configuration it ANDs them. This exactly matches the acceptance rule in [L1]. [L1, construct]

2.1 Now let $L\in\mathrm{PSPACE}$. By [L2], there is a polynomial-time reduction $f$ from $L$ to TQBF. An alternating machine for $L$ first computes $f(x)$ deterministically and then runs the TQBF machine from step 1.1 on $f(x)$. This still uses only polynomial time, so [L1] gives $L\in\mathrm{AP}$. Thus $\mathrm{PSPACE}\subseteq\mathrm{AP}$. [L1, L2, step 1.1]

2.2 The recursion depth is at most $p(|x|)$ because every branch halts within that many steps. One stack frame stores the current configuration and the remaining depth counter, both of polynomial size, so the whole depth-first evaluation uses polynomial space. Therefore $L\in\mathrm{PSPACE}$. [step 1.2, algebra]

3.1 Steps 2.1 and 2.2 prove both containments, so $\mathrm{AP}=\mathrm{PSPACE}$. [step 2.1, step 2.2] ∎
