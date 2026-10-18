---
id: def-it-two-user-discrete-memoryless-mac-code
kind: definition
title: No-feedback independent-private-message DM-MAC code
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-two-user-discrete-memoryless-mac]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the code and message sets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Multiple Access Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

For a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]], a length-$n$ no-feedback code consists of independent uniform private messages $M_j\in[M_j]$, separate deterministic message-only encoders $f_j:[M_j]\to\mathcal X_j^n$, and one joint decoder $g:\mathcal Y^n\to[M_1]\times[M_2]$. The average joint error is $\Pr[g(Y^n)\ne(M_1,M_2)]$; $R_j=n^{-1}\ln M_j$ nats/use. A pair is achievable if a sequence has error tending to zero and limiting lower rates at least the pair; the capacity region is the closure. In particular, independent messages and separate encoders give $X_{1i}\perp X_{2i}$ at every coordinate.

## Facts & Assumptions

**Given:** A DM-MAC and two finite message sets.

[F1] [[def-it-two-user-discrete-memoryless-mac]]: the conditional block law is $\prod_iW(y_i\mid x_{1i},x_{2i})$.

## Proof

1.1 The independent uniform messages and the two deterministic maps induce separate input words; combining these with [F1] defines a probability law on the finite set of message, input and output tuples. [given, F1, algebra]

2.1 Since each input coordinate is a function only of its own independent message, $X_{1i}$ and $X_{2i}$ are independent. The decoder event and the rate convention are finite and well-defined. [given, step 1.1, algebra] ∎

