---
id: def-weak-convergence-of-a-spectral-sequence
kind: definition
title: Weak convergence of a spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-abutment-to-a-filtered-object", "def-limiting-cycles-boundaries-and-e-infinity"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Definition

A spectral sequence **converges weakly** to a family $H_n$ with increasing filtrations $F_pH_n$ if it has a defined limiting page and specified isomorphisms
$$E^\infty_{p,q}\xrightarrow{\sim}F_pH_{p+q}/F_{p-1}H_{p+q}.$$
The limiting page means the quotient of limiting cycle and boundary subobjects when their meet and join exist, as in [[def-limiting-cycles-boundaries-and-e-infinity]], or the canonically stationary page when both incident differentials eventually vanish. The isomorphisms are part of the data; an abstract equality of isomorphism types is insufficient.

For a filtered-complex spectral sequence with target its homology and induced image filtration, the comparison must be the one induced by actual cycles and boundaries: a cycle $c\in F_pC_{p+q}$ represents the associated-graded homology class of $[c]$, and its limiting-page class must correspond to this class. Weak convergence asserts that this prescription yields the specified isomorphism. It does not assume that every approximate cycle is an actual cycle without proof.

This extends the abutment terminology of [[def-abutment-to-a-filtered-object]] beyond that page's finite-filtration setting. It asserts neither exhaustiveness, separatedness nor completeness of the target filtration, and never identifies the unfiltered $H_n$ with its associated graded. Zero graded pieces are allowed, including a zero limiting page with a nonzero target and nonseparated filtration. For decreasing cohomological filtrations the quotient is $F^pH^{p+q}/F^{p+1}H^{p+q}$. No choice axiom is part of this definition.

## Source notes

[Stacks, Definition 12.24.9](https://stacks.math.columbia.edu/tag/012K), translated to increasing homological indices. The actual-cycle requirement is retained.
