---
id: rem-the-lone-endpoint-is-excluded-from-carleson-hunt
kind: remark
title: The L1 endpoint is excluded
deps: [lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorems 8.1 and 8.7 endpoint discussion, pp. 47 and 51–52'}]
external_refs: [rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence]
status: published
origin: pipeline
---

## Endpoint interpretation

Assume countable choice. The assertion in [[rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere]] prevents extending [[rem-carleson-hunt-almost-everywhere-convergence]] to all of $L^1(\mathbb T)$. This comparison relies on the recorded Kolmogorov existence theorem, whose proof is not supplied here.

Indeed, a weak $(1,1)$ estimate $m\{Cg>\lambda\}\le A\|g\|_1/\lambda$ for all $g\in L^1$ and $\lambda>0$ would imply almost-everywhere convergence for every such $g$ by [[lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence]]. That implication is incompatible with the recorded witness. A strong $(1,1)$ estimate would imply this weak estimate by [[thm-chebyshev-markov-inequality-for-the-integral]] applied to $Cg$.

This is an interpretation of external literature, not an independently proved weak-endpoint theorem. Failure at one prescribed point for a continuous function is a different phenomenon from failure on a full-measure set for an integrable function.
