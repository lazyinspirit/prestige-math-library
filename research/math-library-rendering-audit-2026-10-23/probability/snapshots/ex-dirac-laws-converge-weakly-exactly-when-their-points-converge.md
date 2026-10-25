---
id: ex-dirac-laws-converge-weakly-exactly-when-their-points-converge
kind: example
title: Dirac laws converge weakly exactly when their points converge
deps: ["def-weak-convergence-of-borel-probability-measures", "thm-portmanteau-theorem"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, §9, Dirac embedding
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Example

On a metric space S, $\delta_{x_n}\Rightarrow\delta_x$ if and only if $x_n\to x$. For example, on the real line $\delta_{1/(n+1)}\Rightarrow\delta_0$.

## Facts & Assumptions

[F1] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 A unit point mass is a probability: among disjoint sets at most one contains its point, so the indicator formula is countably additive. Its integral of a bounded measurable f is f at that point, first for simple functions and then by bounded approximation. If $x_n\to x$, continuity gives $\int f\,d\delta_{x_n}=f(x_n)\to f(x)=\int f\,d\delta_x$ for each bounded continuous f. By F1 this is weak convergence. [F1]

2.1 Conversely test weak convergence with $f(y)=\min(1,d(y,x))$, a bounded continuous function. Its limiting integral is f(x)=0, so min(1,d($x_n$,x))->0; for $\varepsilon$<1 this forces d($x_n$,x)<$\varepsilon$ eventually. Thus x_n->x. For the displayed example this distance is $|1/(n+1)-0|=1/(n+1)\to0$. [given, algebra] ∎
