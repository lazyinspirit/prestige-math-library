---
id: rem-connectedness-is-needed-for-a-single-degree-invariant
kind: remark
title: Connectedness is needed for a single degree invariant
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- thm-hopf-degree-classification-for-oriented-domains
- thm-hopf-mod-two-degree-classification-for-nonorientable-domains
- def-connected-space
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-homotopy-relative-and-path-homotopy
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
    locator: Theorem 2.37 is stated for closed connected $M$; the degree is defined by the component data, printed p.23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the Hopf theorem assumes $M$ connected, printed pp.50-51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, connected source hypotheses, printed p.146
---
## Remark

Connectedness is load-bearing in both Hopf classifications of this page,
[[thm-hopf-degree-classification-for-oriented-domains]] and
[[thm-hopf-mod-two-degree-classification-for-nonorientable-domains]]
([[def-connected-space]]). If a closed oriented smooth $m$-manifold $M$ is not
connected, each connected component is itself a closed connected oriented
$m$-manifold, a smooth map $M\to S^m$ has one signed degree contribution on
each component, and the total degree is the sum of these contributions; but a
homotopy of maps of $M$ restricts to a homotopy on each component, so the
componentwise degrees are invariants that a single integer need not capture. For a disconnected source with nonorientable components, the same invariance remark applies to their mod-two degrees. Orientable components retain their integer degrees; calling the whole source nonorientable does not make every component nonorientable.
The classification theorems of this page therefore assume connectedness, and
the counterexample on the companion page exhibits two maps of a disconnected
closed oriented domain whose total degrees agree while the maps are not
homotopic. No claim is made here that every disconnected domain admits a
finer classification by the vector of componentwise degrees and their homotopy
types; the recorded fact is only the failure of the total degree as a single
complete invariant, witnessed by the companion counterexample
([[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]],
[[def-homotopy-relative-and-path-homotopy]]).
