---
id: cex-nl-equals-conl-follows-by-state-swapping
kind: counterexample
title: "A nondeterministic branch tree where state swapping is not complementing"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-logspace-machine, fs-nl-equals-conl-follows-by-state-swapping]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.4.2"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement refuted

State swapping complements a nondeterministic machine's language.

## Facts & Assumptions

**Given:** a fixed input $x$ and a nondeterministic machine which, from its
start configuration on $x$, has exactly two choices: one moves directly to an
accepting state and the other directly to a rejecting state.

[L1] A nondeterministic machine accepts when at least one branch accepts
([[def-read-only-input-logspace-machine]]).

[L2] The state-swapping inference is the false statement refuted on the A page ([[fs-nl-equals-conl-follows-by-state-swapping]]).

## Counterexample

**Proof technique:** direct branch analysis.

1.1 The original accepting leaf makes the original machine accept $x$ by [L1]. [L1, given]

2.1 After labels swap, the original rejecting leaf is accepting, so [L1] makes the swapped machine accept $x$ as well. [L1, step 1.1]

3.1 Since $x$ is in the original language, it is not in its complement; step 2.1 therefore contradicts the proposed complementing behavior, as asserted in [L2]. [L2, step 2.1] ∎
