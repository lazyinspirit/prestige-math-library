---
id: fs-model-invariance-means-equal-step-counts
kind: false-statement
title: "FALSE: machine invariance means equivalent models perform exactly the same number of steps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-polynomial-time-and-space-are-model-invariant, def-multitape-and-nondeterministic-machines]
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

## Statement

**False claim:** whenever one translates a computation between standard machine
models with the same computability power, the translated computation takes
exactly the same number of steps.

## Facts & Assumptions

**Given:** The false claim above.

[A1] Whenever one translates a computation between standard machine models with the same computability power, the translated computation takes exactly the same number of steps.

[L1] Polynomial-time and polynomial-space computation are model-invariant only up to asymptotic overhead, by [[prop-polynomial-time-and-space-are-model-invariant]].

[L2] A one-tape machine is the $k=1$ case of the deterministic multitape model,
whose transitions read, write, and move each tape head once per step
([[def-multitape-and-nondeterministic-machines]]).

## Refutation

**Proof technique:** direct.

1.1 Let $M$ be a one-tape scanning machine, regarded by [L2] as a multitape machine with one tape. Translate it to an equivalent one-tape machine $S$ by inserting, before every original transition, a two-step right-then-left excursion that changes no tape symbol and records the finitely many encountered symbols in the control state. The third step performs the original transition. Thus $S$ has exactly the same behavior as $M$ but uses three steps for every nonhalting step of $M$. [L2, given, construct]

2.1 On every input for which $M$ takes a positive number of steps, the translated computation takes three times as many, contradicting [A1]. This is consistent with [L1]: robustness preserves asymptotic complexity classes, not literal equality of running times. [A1, L1, step 1.1] ∎
