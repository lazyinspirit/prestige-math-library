---
id: def-finite-dmc-feedback-code
kind: definition
title: Causal feedback codes for a finite cost-constrained DMC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-cost-constrained-dmc-code-and-capacity, def-discrete-memoryless-channel, def-finite-dmc-cost-model, def-fixed-length-channel-code, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the alphabets and encoding functions are finite-domain objects.
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 23 §23.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/a5ff16d929efde1d8313e12e372aa94b_MIT6_441S16_chapter_21.pdf
---

## Definition

Let $W(y\mid x)$ be the finite DMC [[def-discrete-memoryless-channel]] and $c:\mathcal X\to[0,\infty)$ the finite input cost from [[def-finite-dmc-cost-model]], with feasible budget $\Gamma$ from [[def-cost-constrained-dmc-code-and-capacity]]. For an integer $n\ge1$, a deterministic length-$n$ feedback code with $M\ge1$ equiprobable messages consists of causal maps
$$f_t:[M]\times\mathcal Y^{t-1}\to\mathcal X\quad(1\le t\le n)$$
and a decoder $g:\mathcal Y^n\to[M]$. Given message $m$, its channel law is the product of the row probabilities $W(y_t\mid f_t(m,y^{t-1}))$. Its expected average cost is
$$\frac1n\sum_{t=1}^n\mathbb E[c(X_t)],$$
where the expectation is over the uniform message and channel outputs. It is feasible when this quantity is at most $\Gamma$; its average error is $\Pr[g(Y^n)\ne M]$ and its rate is $n^{-1}\ln M$ nats per use. The feedback operational capacity $C_{\rm fb}(\Gamma)$ is the supremum of rates for which feasible codes for all sufficiently large blocklengths have average error tending to zero and limiting inferior rate at least the stated rate. The no-feedback subclass consists of encoders $f_t$ that do not depend on $y^{t-1}$; it includes every ordinary fixed-length code from [[def-fixed-length-channel-code]]. Its rate uses the natural logarithm [[def-natural-logarithm]].
