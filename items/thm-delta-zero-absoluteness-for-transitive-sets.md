---
id: thm-delta-zero-absoluteness-for-transitive-sets
kind: theorem
title: "Bounded formulas are absolute for transitive sets"
status: published
origin: pipeline
deps: [def-set-theoretic-levy-hierarchy-and-absoluteness, thm-structural-recursion-on-set-coded-syntax]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Proposition 3.5.5, p51"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

If $M\subseteq N$ are nonempty transitive sets, every $\Delta_0$ formula is absolute between them on parameter tuples from $M$. No internal set-theory axioms are required. The analogous assertion for definable transitive classes is a formula-by-formula scheme.

## Facts & Assumptions

[F1] [[thm-structural-recursion-on-set-coded-syntax]]: Constructor induction is valid for the term and formula sets: a property true of leaves and preserved by each licensed constructor holds of every expression.

## Proof

**Given:** $M\subseteq N$ are nonempty and transitive, and all free parameters lie in $M$.

1.1 For $a,b\in M$, equality and membership in either structure mean the actual relations $a=b$ and $a\in b$. Thus the atomic cases agree. The formula constructors admit induction, so it remains to show that agreement is preserved by each constructor. [F1, given]

2.1 If $\phi$ and $\psi$ agree on all tuples in $M$, their conjunctions agree because both conjuncts have the same truth values. Their negations agree because a truth value is false in one structure exactly when it is false in the other. [step 1.1, algebra]

3.1 Let $a,\bar b\in M$. A witness $c$ for $\exists x\in a\,\phi(x,\bar b)$ in either structure is an actual member of $a$. Transitivity puts every such $c$ in $M$, hence also in $N$. The induction hypothesis at $(c,\bar b)$ transfers the matrix in either direction, retaining the same witness. If $a=\varnothing$, both existential statements are false. Universal bounded quantifiers follow by negation. [step 2.1, given]

4.1 Constructor induction now gives the asserted equivalence for every bounded formula. For fixed class definitions the same induction is a finite metatheoretic induction on the chosen formula, with each quantifier relativized; it requires no class satisfaction set. [F1, step 3.1] ∎
