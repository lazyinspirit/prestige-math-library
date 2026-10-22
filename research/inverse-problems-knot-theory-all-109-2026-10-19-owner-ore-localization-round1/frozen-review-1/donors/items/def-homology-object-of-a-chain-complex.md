---
id: def-homology-object-of-a-chain-complex
kind: definition
title: "Homology object of a chain complex"
status: published
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cycle-and-boundary-subobjects-of-a-complex,
       lem-the-boundary-subobject-factors-through-the-cycle-subobject,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

Let $C_\bullet$ be a chain complex and let
$$\beta_n:B_n(C)\to Z_n(C)$$
be the canonical morphism supplied by
[[lem-the-boundary-subobject-factors-through-the-cycle-subobject]].

The **$n$th homology object** of $C$ is the cokernel
$$H_n(C):=\operatorname{coker}(\beta_n).$$

Equivalently, one writes
$$H_n(C)=Z_n(C)/B_n(C),$$
with the understanding that this quotient notation abbreviates the cokernel of
the canonical monomorphism from boundaries to cycles.
