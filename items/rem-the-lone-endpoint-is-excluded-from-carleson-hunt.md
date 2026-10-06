---
id: rem-the-lone-endpoint-is-excluded-from-carleson-hunt
kind: remark
title: The L1 endpoint is excluded
deps: [thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere, lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorems 8.1 and 8.7 endpoint discussion, pp. 47 and 51–52'}]
status: published
origin: pipeline
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-the-lone-endpoint-is-excluded-from-carleson-hunt.json
---

## Endpoint interpretation

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The local theorem [[thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] supplies an integrable function with unbounded symmetric Fourier partial sums almost everywhere. Thus a convergence theorem for every $L^1(\mathbb T)$ function would be false.

In particular there is no finite $A\ge0$ such that $m\{Cg>\lambda\}\le A\|g\|_1/\lambda$ for all $g\in L^1$ and $\lambda>0$. Such a weak $(1,1)$ estimate would imply almost-everywhere convergence for every such $g$ by [[lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence]] at $p=1$. Applying that conclusion to the supplied witness contradicts its almost-everywhere unboundedness, because a convergent complex sequence is bounded and the union of the two exceptional null sets remains null.

A strong $(1,1)$ estimate $\|Cg\|_1\le B\|g\|_1$ with finite $B$ would imply the forbidden weak estimate by [[thm-chebyshev-markov-inequality-for-the-integral]] applied to $Cg$, so no such strong estimate exists either. All operators here use symmetric partial sums on the normalized period-one torus. AC supplies the witness and implies the countable choice needed by the maximal convergence principle. Failure at one prescribed point for a continuous function is a different assertion from this failure on a full-measure set for an integrable function.
