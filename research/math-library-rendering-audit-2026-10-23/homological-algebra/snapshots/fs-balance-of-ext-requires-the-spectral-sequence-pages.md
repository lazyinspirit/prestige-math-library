---
id: fs-balance-of-ext-requires-the-spectral-sequence-pages
kind: false-statement
title: "FALSE: balance of Ext requires spectral-sequence pages"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-acyclic-assembly-by-exact-columns, lem-acyclic-assembly-by-exact-rows, thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: balance of Ext requires spectral-sequence pages

## Facts & Assumptions

**Given:** The first-quadrant double complex $K^{p,q}=\operatorname{Hom}(P_p,I^q)$ associated with supplied projective and injective resolutions.

## Refutation

**Proof technique:** direct.

1.1 For each $p$, $\operatorname{Hom}(P_p,-)$ is exact because $P_p$ is projective, so the augmented $q$-columns are exact; the finite-diagonal acyclic-assembly lemma gives a quasi-isomorphism from the projective edge complex to $\operatorname{Tot}K$. [given, algebra]

2.1 Dually, each $\operatorname{Hom}(-,I^q)$ is exact, so exact rows give a quasi-isomorphism from the injective edge complex to the same total complex. The resulting cohomology isomorphism balances Ext without constructing any spectral-sequence page. [step 1.1, algebra] ∎
