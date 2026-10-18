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
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Multiple Access Channels
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

For a DM-MAC as in [[def-it-two-user-discrete-memoryless-mac]], fix integers $n\ge1$ and $M_1,M_2\ge1$, and write $[m]=\{1,\ldots,m\}$. A length-$n$ no-feedback code consists of independent uniform private messages $\mathsf M_j\in[M_j]$, separate deterministic message-only encoders $f_j:[M_j]\to\mathcal X_j^n$, and one joint decoder $g:\mathcal Y^n\to[M_1]\times[M_2]$. The average joint error is $\Pr[g(Y^n)\ne(\mathsf M_1,\mathsf M_2)]$; $R_j=n^{-1}\ln M_j$ nats/use. A pair is achievable if a sequence with $n\to\infty$ has error tending to zero and limiting lower rates at least the pair; the capacity region is the closure. In particular, independent messages and separate encoders give $X_{1i}\perp X_{2i}$ at every coordinate $1\le i\le n$.

## Facts & Assumptions

**Given:** A DM-MAC, an integer $n\ge1$, and two finite nonempty message sets of sizes $M_1,M_2\ge1$.

[F1] [[def-it-two-user-discrete-memoryless-mac]]: the conditional block law is $\prod_iW(y_i\mid x_{1i},x_{2i})$.

## Proof

1.1 The independent uniform messages and the two deterministic maps induce separate input words; combining these with [F1] defines a probability law on the finite set of message, input and output tuples. [given, F1, algebra]

2.1 Since each input coordinate is a function only of its own independent message, $X_{1i}$ and $X_{2i}$ are independent for $1\le i\le n$. Because $n\ge1$ and $M_j\ge1$, each rate $n^{-1}\ln M_j$ is a finite nonnegative real number. The decoder event belongs to the finite probability space in step 1.1, so its probability is well-defined. [given, step 1.1, algebra] ∎

