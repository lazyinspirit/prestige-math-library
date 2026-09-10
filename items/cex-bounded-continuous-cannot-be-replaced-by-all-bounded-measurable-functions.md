---
id: cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions
kind: counterexample
title: Bounded continuous cannot be replaced by all bounded measurable functions
deps: ["def-weak-convergence-of-borel-probability-measures"]
sources:
  references:
    - title: van Gaans, Definition 3.1; Dirac test example
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Weak convergence need not give convergence of integrals for all bounded Borel tests. For $n\ge 1$, take $\mu_n=\delta_{1/n}$, and set $\mu=\delta_0$ and $h=\mathbf1_{\{0\}}$ on the real line.

## Facts & Assumptions

[F1] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For every $n\ge 1$ and each bounded continuous f, the point-mass integrals are f(1/n) and f(0), so continuity proves convergence and hence weak convergence by F1. [F1]

2.1 The singleton {0} is closed, so h is Borel measurable and bounded between zero and one. But $\int h\,d\mu_n=h(1/n)=0$ for every $n\ge 1$, whereas $\int h\,d\mu=h(0)=1$. This explicit bounded Borel test fails the conclusion. [given, algebra] ∎
