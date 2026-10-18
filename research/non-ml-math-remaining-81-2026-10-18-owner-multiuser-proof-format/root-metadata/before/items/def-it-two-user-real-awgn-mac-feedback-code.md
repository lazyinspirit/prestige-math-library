---
id: def-it-two-user-real-awgn-mac-feedback-code
kind: definition
title: Two-user real AWGN MAC with perfect causal output feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-two-user-real-awgn-mac-code]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; every encoder is a deterministic function on finite messages and finite-dimensional output histories.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, AWGN MAC with feedback
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, §III-A
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
---

## Definition

Use the channel, independent messages, noise law, average joint error, powers $P_1,P_2$ and nats/use convention of [[def-it-two-user-real-awgn-mac-code]]. A length-$n$ perfect-feedback encoder for user $j$ is a deterministic family $f_{ji}:[M_j]\times\mathbb R^{i-1}\to\mathbb R$, $1\le i\le n$, with $X_{ji}=f_{ji}(M_j,Y^{i-1})$; at $i=1$ the history is the singleton empty tuple. Both senders receive the same noiseless past output, and there is no message sharing or preshared common randomness. The same expected block-power constraint is imposed.

## Facts & Assumptions

**Given:** A channel and code convention as in [[def-it-two-user-real-awgn-mac-code]].

[F1] [[def-it-two-user-real-awgn-mac-code]]: messages are independent and uniform, the channel is $Y_i=X_{1i}+X_{2i}+Z_i$ with fresh independent $N(0,N)$ noise, and costs are expected block powers.

## Proof

1.1 For each $i$, the domain $[M_j]\times\mathbb R^{i-1}$ records exactly user $j$'s message and the common output history strictly before time $i$, so the maps are causal and use no future output. [given, F1, algebra]

2.1 Substituting the two maps into the channel law of [F1] defines a joint law inductively in $i$; thus average error and expected powers have the same well-defined meanings as in the no-feedback model. [F1, step 1.1, algebra] ∎

