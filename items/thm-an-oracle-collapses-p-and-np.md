---
id: thm-an-oracle-collapses-p-and-np
kind: theorem
title: "An oracle collapses p and np"
status: published
origin: pipeline
deps: [lem-polynomial-space-oracle-absorption]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 Theorem3.9 and Claim3.8(3), pp70–72; explicit TQBF adaptation."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For $A=TQBF$, $P^A=NP^A=\mathrm{PSPACE}$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] $NP^{TQBF}\subseteq\mathrm{PSPACE}\subseteq P^{TQBF}$. ([[lem-polynomial-space-oracle-absorption]]).


## Proof

1.1 Oracle absorption supplies $\mathrm{PSPACE}\subseteq P^A$ and $NP^A\subseteq\mathrm{PSPACE}$. A deterministic oracle computation is a nondeterministic one with no choices, so $P^A\subseteq NP^A$. [F1]

2.1 The inclusions form a closed chain, giving equality of all three classes. The same fixed total TQBF language is used throughout; it is not required to belong to P. [step 1.1, algebra] ∎
