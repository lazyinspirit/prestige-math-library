---
id: def-affine-scheme
kind: definition
title: "Affine schemes and their coordinate rings"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme-spectrum, cor-spectrum-with-structure-sheaf-locally-ringed, thm-global-sections-affine-scheme]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 26.5.5"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Definition

An **affine scheme** is a locally ringed space isomorphic to
$(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$ for some ring $A$.
Such an $A$ is a coordinate ring; it is canonically recovered as the global
sections after a chosen affine presentation.
