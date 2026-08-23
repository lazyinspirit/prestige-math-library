---
id: lem-parameter-boundary-exceptions-do-not-affect-surface-integrals
kind: lemma
title: 'Content-zero parameter-boundary exceptions do not affect surface integrals'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, thm-jordan-boundary-criterion, lem-riemann-integral-unchanged-by-content-zero-modification]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Changing a bounded scalar or flux parameter integrand only on the content-zero boundary of a compact Jordan parameter region preserves integrability and its integral.

In both directions, one of the two bounded functions is integrable if and only if the other is, and then their integrals agree.

## Facts & Assumptions

**Given:** A compact Jordan parameter region $D$ and bounded functions $p,q:D\to\mathbb R$ that agree on $D^\circ$.

[L1] The boundary $\partial D$ has content zero ([[def-admissible-regular-parametrized-surface-patch]], [[thm-jordan-boundary-criterion]]).

[L2] Bounded functions differing only on a content-zero set are integrable simultaneously and have equal integrals ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

## Proof

**Proof technique:** direct.

1.1 Since $p=q$ on $D^\circ$, the set on which they differ is contained in $D\setminus D^\circ=\partial D$, which has content zero by [L1]. [given, L1]

2.1 Apply [L2] to obtain both implications of the integrability equivalence and equality of the integrals. [step 1.1, L2]

3.1 A flux parameter integrand is scalar after taking the dot product, so the same argument applies to it. The conclusion licenses boundary seams, poles, and endpoint degeneracies only, not an interior rank failure. [step 2.1] ∎
