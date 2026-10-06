---
id: rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package
kind: remark
title: "Compactness up to breaking needs closedness or a proper compactness package"
status: published
origin: pipeline
deps: [thm-morse-trajectory-compactness-up-to-breaking, def-proper-smooth-function-and-compact-morse-slab, prop-proper-morse-slabs-give-complete-connecting-trajectories, rem-noncompact-flow-completeness-is-an-extra-hypothesis, cor-every-smooth-vector-field-on-a-compact-manifold-is-complete, cor-equicontinuous-families-into-a-compact-metric-target, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-morse-smale-pair]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.4, printed pp. 54-60 (completeness and the compactness hypotheses for Morse--Smale flows)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.b, printed pp. 61-64 (the compactness proof uses compactness of $V$)"
dependency_level: 4
---

## Remark

The compactness theorem [[thm-morse-trajectory-compactness-up-to-breaking]] uses closedness of $M$ in three distinct places. First, completeness of the downward flow, which gives full time-parametrized connecting orbits (their height parametrizations instead have the finite domain $[f(q),f(p)]$); on a compact manifold every smooth vector field is complete
([[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]). Second, compactness of $M$ in the Arzelà--Ascoli step: the equicontinuous family of height parametrizations has values in a compact metric target, so its compact-open closure is compact
([[cor-equicontinuous-families-into-a-compact-metric-target]]). Third, finiteness of the critical set in each index, used to split a limiting height map at the finitely many critical points it actually meets and to conclude that it is a finite broken trajectory
([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]); indeed the theorem is stated for a Morse--Smale pair in the sense of [[def-morse-smale-pair]], which presupposes a complete field.

On a noncompact manifold one needs a suitable compactness package for the connecting trajectories — properness is one sufficient way to obtain it, for instance the proper smooth functions and compact Morse slabs of [[def-proper-smooth-function-and-compact-morse-slab]] together with the trapped-trajectory completeness of [[prop-proper-morse-slabs-give-complete-connecting-trajectories]] — and exclude escape of trajectories to infinity; completeness of the flow is not automatic
([[rem-noncompact-flow-completeness-is-an-extra-hypothesis]]), and the slabs give only the conditional nonescape conclusion they state. Without such hypotheses the conclusion can fail, so an assertion of a Morse complex on a noncompact manifold must state the compactness and completeness hypotheses it uses and may not rely on the Morse--Smale condition alone.
