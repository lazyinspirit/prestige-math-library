---
id: def-parallel-awgn-feedback-code
kind: definition
title: Causal feedback codes for a finite-dimensional Gaussian channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-axiom-of-choice, def-parallel-gaussian-channel-with-power-constraint, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: AC is inherited from the Gaussian channel law; defining the encoder maps itself uses no additional choice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 23 §23.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/a5ff16d929efde1d8313e12e372aa94b_MIT6_441S16_chapter_21.pdf
verification:
  precheck: n/a
---

## Definition

Assume AC [[def-axiom-of-choice]] and use the channel in [[def-parallel-gaussian-channel-with-power-constraint]] with dimension $d$ and budget $P$. A length-$n$ code with $M\ge1$ equiprobable messages is a tuple of Borel encoders
$$f_t:[M]\times(\mathbb R^d)^{t-1}\to\mathbb R^d,\qquad 1\le t\le n,$$
and a Borel decoder $g:(\mathbb R^d)^n\to[M]$. At time $t$ the input is $X_t=f_t(M,Y^{t-1})$ and the output is $Y_t=X_t+Z_t$, with the fresh independent Gaussian noise of the channel definition. The code meets the expected average-power constraint when
$$\frac1n\mathbb E\left[\sum_{t=1}^n\|X_t\|_2^2\right]\le P.$$
Its average error is $\Pr[g(Y^n)\ne M]$ and its rate is $n^{-1}\ln M$ nats per vector use. If every $f_t$ is independent of $Y^{t-1}$, the code does not use feedback. Define $C_{\rm fb}(P)$ as the supremum of rates $R$ for which feasible feedback codes for all sufficiently large $n$ have average error tending to zero and $\liminf n^{-1}\ln M_n\ge R$. Define $C_{\rm nf}(P)$ by restricting to codes that do not use feedback. Both capacities use natural-log nats per vector use [[def-natural-logarithm]].
