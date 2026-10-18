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

For a finite DMC $W:\mathcal X\to\mathcal Y$ as in [[def-discrete-memoryless-channel]], a length-$n$ feedback code has a uniform message $M\in[M]$, deterministic causal encoders $f_i:[M]\times\mathcal Y^{i-1}\to\mathcal X$ and a decoder $g:\mathcal Y^n\to[M]$. The encoder at time $i$ sees only $Y^{i-1}$, sets $X_i=f_i(M,Y^{i-1})$, and the causal joint law is
$$\Pr(M=m,Y^n=y^n)=\frac1M\prod_{i=1}^n W(y_i\mid f_i(m,y^{i-1})).$$
Equivalently, at each positive-probability message-and-past-output history, $Y_i$ has conditional law $W(\cdot\mid f_i(m,y^{i-1}))$. Its average error is $\Pr[g(Y^n)\ne M]$, rate is $n^{-1}\ln M$ nats/use, and the feedback capacity is the closure of rates achievable with error tending to zero. There is no input-cost constraint.

## Facts & Assumptions

**Given:** A finite DMC, a positive integer $n$, a finite message set and deterministic causal maps.

[F1] [[def-discrete-memoryless-channel]]: the single-use transition kernel is the stochastic row $W(\cdot\mid x)$ on the finite output alphabet for each input $x$.

## Proof

1.1 Recursively in $i$, the message and past-output history determine $X_i=f_i(M,Y^{i-1})$, after which [F1] specifies a probability vector for $Y_i$. Multiplying these causal row probabilities and the uniform message mass $1/M$ gives the displayed joint law. Summing first over $y_n$, then $y_{n-1}$ down to $y_1$, each last row sums to one; summing over the $M$ messages then gives total mass one. Thus the law is normalized, and its positive-probability history conditionals are the stated rows. [given, F1, algebra]

2.1 Hence the decoder error, rate and capacity convention are well-defined for every such finite code. [given, step 1.1, algebra] ∎

