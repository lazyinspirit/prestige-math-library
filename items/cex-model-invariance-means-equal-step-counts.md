---
id: cex-model-invariance-means-equal-step-counts
kind: counterexample
title: "An equivalent one-tape simulation need not preserve the original step count"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-multitape-to-single-tape-time-simulation, def-multitape-and-nondeterministic-machines]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 7. Time Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/time"
---

## Statement refuted

The false statement claims that translating a computation between standard
machine models preserves exact step counts. Let $M$ be a one-tape machine that
scans its input once and then halts, regarded also as a two-tape machine that
ignores its second tape. We construct an equivalent one-tape translation whose
step count is exactly three times the nonhalting-step count of $M$.

## Facts & Assumptions

**Given:** The scanning machine $M$ described above.

[L1] Every multitape time-$T$ computation on inputs of length $n$ has a
single-tape simulation in $O((n+T(n))^2)$ time, by
[[thm-multitape-to-single-tape-time-simulation]]. This is an upper bound for a
simulation construction, not a quadratic lower bound.

[L2] A deterministic one-tape machine is the $k=1$ case of the deterministic
multitape model ([[def-multitape-and-nondeterministic-machines]]).

## Counterexample

**Proof technique:** direct.

1.1 On an input of length $n$, the two-tape presentation of $M$ ignores its second tape, makes one pass across the input on the first tape, and halts after a positive linear number $t(n)$ of steps. [L2, given]

2.1 Construct a one-tape machine $S$ by replacing each nonhalting transition of $M$ with three transitions. Before executing the original transition, $S$ moves one cell right without changing the scanned symbol, records in its finite control the original state and symbol together with the symbol seen on the right, then moves left while restoring that right-hand symbol, and finally performs the original transition. The two preliminary moves return the tape and head to their original state, so $S$ has exactly the same accept/reject behavior as $M$ but uses exactly $3t(n)$ steps on every length-$n$ input. [step 1.1, construct]

3.1 Since $t(n)>0$, the translated computation of $S$ and the original two-tape computation of $M$ have different exact step counts. Thus this translation is a counterexample to the false claim; [L1] is consistent with the witness because both running times remain linear. [L1, step 1.1, step 2.1] ∎
