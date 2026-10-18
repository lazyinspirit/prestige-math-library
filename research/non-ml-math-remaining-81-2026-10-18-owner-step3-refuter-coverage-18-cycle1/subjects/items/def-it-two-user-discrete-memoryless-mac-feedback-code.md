---
id: def-it-two-user-discrete-memoryless-mac-feedback-code
kind: definition
title: Two-user DM-MAC code with perfect causal output feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-two-user-discrete-memoryless-mac]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; messages, alphabets and all finite histories are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, Multiple Access Channel with Feedback
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
---

## Definition

For the finite DM-MAC of [[def-it-two-user-discrete-memoryless-mac]], a perfect-feedback length-$n$ code has independent uniform messages $M_j\in[M_j]$, deterministic encoders $f_{ji}:[M_j]\times\mathcal Y^{i-1}\to\mathcal X_j$ and a joint decoder from $\mathcal Y^n$ to the message pair. Both users see the same noiseless past output $Y^{i-1}$ before use $i$; neither sees the other user's message. Rates are $R_j=n^{-1}\ln M_j$ nats/use and error is average joint message error. Achievability means a sequence with vanishing error and limiting lower rates at least the specified pair; capacity is the closure.

## Facts & Assumptions

**Given:** A finite DM-MAC and two finite private message sets.

[F1] [[def-it-two-user-discrete-memoryless-mac]]: its block transition law is the product of the single-use kernel $W(y\mid x_1,x_2)$.

## Proof

1.1 Given $(M_1,M_2,Y^{i-1})$, both causal maps determine $(X_{1i},X_{2i})$, and [F1] supplies a probability vector for $Y_i$; recursion over $i$ therefore gives a normalized joint law. [given, F1]

2.1 The independent uniform messages and joint-error event are finite, so the stated rates and average error are well-defined; the causal maps add no other random input to the model. [given, step 1.1, algebra] ∎

