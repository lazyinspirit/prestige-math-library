---
id: fs-relativized-separations-prove-unrelativized-separations
kind: false-statement
title: "Relativized separations prove unrelativized separations"
status: draft
origin: pipeline
deps: [thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 Theorem3.9 and relativization discussion, pp71–72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

**False inference schema:** a separation $P^B\ne NP^B$ for one total oracle can be transferred independently of the oracle, yielding $P^A\ne NP^A$ for every total oracle $A$ (and in particular for the empty oracle).

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] There is a total oracle $B$ for which $P^B\ne NP^B$. In fact $L_B=\{1^n:B\cap\{0,1\}^n\ne\varnothing\}$ lies in $NP^B\setminus P^B$. ([[thm-an-oracle-separates-p-from-np]]).

[F2] For $A=TQBF$, $P^A=NP^A=\mathrm{PSPACE}$. ([[thm-an-oracle-collapses-p-and-np]]).


## Refutation

1.1 There exists a total $B$ with $P^B\ne NP^B$, so the premise of the proposed rule is realized. [F1]

2.1 For $A=TQBF$, however, $P^A=NP^A$. This violates the universally quantified conclusion and refutes the rule. The isolated implication from the separating world to $P\ne NP$ is not here called a known false proposition: determining its truth would require settling the unrelativized question. [F2, step 1.1] ∎

## Remark

The refutation supplies total oracles $B$ and $A=TQBF$ with $P^B\ne NP^B$ and $P^A=NP^A$, respectively. These are counterinstances to the universal transfer rule; no conclusion about the empty oracle follows.
