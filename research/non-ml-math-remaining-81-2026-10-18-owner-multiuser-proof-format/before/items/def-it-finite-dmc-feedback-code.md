---
id: def-it-finite-dmc-feedback-code
kind: definition
title: Fixed-length finite DMC code with perfect causal output feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; message, input and output sets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 7, §7.12
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, feedback DMC
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

For a finite DMC $W:\mathcal X\to\mathcal Y$ as in [[def-discrete-memoryless-channel]], a length-$n$ feedback code has a uniform message $M\in[M]$, deterministic causal encoders $f_i:[M]\times\mathcal Y^{i-1}\to\mathcal X$ and a decoder $g:\mathcal Y^n\to[M]$. The channel law conditional on the input word is the DMC product law, and the encoder at time $i$ sees only $Y^{i-1}$. Its average error is $\Pr[g(Y^n)\ne M]$, rate is $n^{-1}\ln M$ nats/use, and the feedback capacity is the closure of rates achievable with error tending to zero. There is no input-cost constraint.

## Facts & Assumptions

**Given:** A finite DMC, a positive integer $n$, a finite message set and deterministic causal maps.

[F1] [[def-discrete-memoryless-channel]]: conditional on the input word, the block output law is $W^n(y^n\mid x^n)=\prod_iW(y_i\mid x_i)$.

## Proof

1.1 Recursively in $i$, the message and past-output history determine $X_i$, after which [F1] specifies a probability vector for $Y_i$; multiplying these conditional probabilities gives a normalized joint law. [given, F1, algebra]

1.2 Hence the decoder error, rate and capacity convention are well-defined for every such finite code. [given, step 1.1, algebra] ∎
