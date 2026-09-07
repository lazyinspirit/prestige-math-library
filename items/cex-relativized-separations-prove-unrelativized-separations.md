---
id: cex-relativized-separations-prove-unrelativized-separations
kind: counterexample
title: "Relativized separations prove unrelativized separations"
status: published
origin: pipeline
deps: [fs-relativized-separations-prove-unrelativized-separations]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5, pp71–72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement refuted

The oracle-independent transfer schema refuted in [[fs-relativized-separations-prove-unrelativized-separations]] fails: a separating oracle cannot force separation in every other oracle world.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] The refutation supplies total oracles $B$ and $A=TQBF$ with $P^B\ne NP^B$ and $P^A=NP^A$, respectively. These are counterinstances to the universal transfer rule; no conclusion about the empty oracle follows. ([[fs-relativized-separations-prove-unrelativized-separations]]).


## Counterexample

1.1 Use the separating oracle $B$ and the equality oracle $A=TQBF$ in the refutation of the schema. They satisfy $P^B\ne NP^B$ and $P^A=NP^A$, respectively. Thus the premise holds while one instance of the universal conclusion fails. [F1]

2.1 The empty oracle is a third specified world. The exhibited failure at $A$ establishes invalidity of universal transfer, but gives no equality or inequality for the empty oracle. Hence this counterexample does not resolve the ordinary P-versus-NP problem. [step 1.1, algebra] ∎
