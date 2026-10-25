---
id: def-it-physically-degraded-dm-broadcast-code
kind: definition
title: Private-message code for a physically degraded DM broadcast channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-physically-degraded-dm-broadcast-channel]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets, messages and code maps are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §§15.6.1–15.6.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 5, Degraded Broadcast Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

For the channel of [[def-it-physically-degraded-dm-broadcast-channel]], a length-$n$ private-message code has independent uniform messages $M_1\in[M_1]$ and $M_2\in[M_2]$, a single deterministic encoder $f:[M_1]\times[M_2]\to\mathcal X^n$, and decoders $g_j:\mathcal Y_j^n\to[M_j]$. Receiver $j$ estimates only $M_j$. Average joint error is $\Pr[\widehat M_1\ne M_1\text{ or }\widehat M_2\ne M_2]$. Rates are $R_j=n^{-1}\ln M_j$ nats/use; capacity means the closure of rate pairs achievable with vanishing joint error. No feedback is present.

## Facts & Assumptions

**Given:** A physically degraded finite broadcast channel and independent finite private messages.

[F1] [[def-it-physically-degraded-dm-broadcast-channel]]: the block law is memoryless and has $X\to Y_1\to Y_2$ at each use.

## Proof

1.1 The single encoder fixes the input word for each message pair; the finite product law in [F1] then defines both receiver output sequences jointly. [given, F1]

2.1 Both decoder error events are measurable subsets of finite output alphabets, and their union is the stated joint error; the rate and closure conventions are therefore well-defined. [given, step 1.1, algebra] ∎

