---
id: thm-long-exact-tor-sequence-in-the-right-module-variable
title: "The long exact Tor sequence in the right-module variable"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "thm-long-exact-tor-sequence-in-the-left-module-variable"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For $0\to N^\prime\to N\to N^{\prime\prime}\to0$ of right modules and a left module $M$, there is the corresponding natural long exact Tor sequence.

## Proof

**Given:** the balance identification and a horseshoe short exact sequence of projective resolutions in the right variable.

1.1 Resolving the right modules gives a short exact sequence of complexes which stays short exact after $-\otimes_RM$. [given]

2.1 The long exact sequence in its homology is the required sequence for the right-resolved Tor construction. [step 1.1, algebra]

3.1 The balanced natural isomorphism identifies this with the stated balanced Tor functor, making the connecting maps independent of the chosen side. [step 2.1, algebra] ∎
