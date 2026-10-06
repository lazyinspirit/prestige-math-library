---
id: rem-closedness-is-needed-for-hopf-degree-classification
kind: remark
title: Closedness is needed for the Hopf degree classification
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- thm-hopf-degree-classification-for-oriented-domains
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- thm-degree-is-invariant-under-proper-smooth-homotopy
- def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
- def-compact-space
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37 assumes $M$ closed; neat-boundary and proper-map variants are separate, printed pp.22-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the Hopf theorem assumes $M$ boundaryless, printed pp.50-51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, the closed-domain hypotheses of the Hopf Degree Theorem, printed pp.141-147
---
## Remark

The Hopf classification of [[thm-hopf-degree-classification-for-oriented-domains]] assumes a nonempty compact source without boundary. For a compact manifold with boundary, prescribing values on that boundary is additional data, and a relative classification requires a separate statement for maps and homotopies of pairs ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]). No such relative classification is proved on this page.

For a noncompact source $M$ there is no proper map $M\to S^m$: the inverse image of the compact target is all of $M$, which properness would require to be compact. Thus the proper-map degree of [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] cannot be applied to such a sphere map. For maps to other, noncompact targets the cited definition requires properness, and [[thm-degree-is-invariant-under-proper-smooth-homotopy]] requires properness of the combined homotopy. These are separate settings; this page asserts no classification there ([[def-compact-space]]).
