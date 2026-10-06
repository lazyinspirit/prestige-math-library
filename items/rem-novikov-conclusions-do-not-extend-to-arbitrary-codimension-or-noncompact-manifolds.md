---
id: rem-novikov-conclusions-do-not-extend-to-arbitrary-codimension-or-noncompact-manifolds
kind: remark
title: Novikov's conclusions do not extend to higher dimensions or noncompact manifolds
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- thm-novikov-reeb-component-theorem
- def-reeb-component-in-a-cooriented-three-manifold-foliation
- cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses
- def-countable-choice-principle-for-foliation-pair
justified_by: []
aliases: []
landmark: false
dependency_level: 23
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §9, printed pp. 28–32 (Theorem 9.1 and subsequent corollaries)
  - title: Sushmita Venugopalan, Novikov's Theorem in Higher Dimensions? (arXiv:1907.05876)
    url: https://arxiv.org/pdf/1907.05876
    locator: Theorem 1, printed p. 2
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Novikov's theorem is deliberately three-
dimensional and codimension one. In higher dimensions the analogue fails even for
codimension-one strongly symplectic foliations: Venugopalan constructs a closed
$5$-manifold with a codimension-one foliation whose leaves have non-injective inclusion
in the fundamental group of the ambient manifold and which admits a closed transversal
that is null-homotopic in the ambient manifold. The two fundamental-group
conclusions therefore fail in dimension five even in the strongly symplectic
class. No higher-dimensional notion of Reeb component is defined or asserted here. The compactness hypothesis also cannot be dropped: the crossing
example of the companion page removes a point from a closed three-manifold foliated by
dense cylinders and produces a noncompact $3$-manifold with a Reebless foliation and a
leaf whose inclusion is not $\pi_1$-injective, so the conclusion of [[cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses]] fails without compactness (the
leaf escapes through the puncture). Both restrictions are part of the statement and are
not artefacts of the proof.

## Remarks

Recorded as a scope caveat with its sources. In higher dimensions the analogue fails
even for codimension-one strongly symplectic foliations: Venugopalan constructs a closed
$5$-manifold with a codimension-one foliation whose leaves are not $\pi_1$-injective and
which admits a null-homotopic closed transversal. These are the two conclusions
of Venugopalan’s Theorem 1; a higher-dimensional “Reeb-type component” is not
part of that theorem or a definition supplied here. Compactness also cannot be dropped: the crossing example on the
companion page removes a point from a closed three-manifold foliated by dense cylinders
and produces a noncompact Reebless foliation with a leaf whose inclusion is not
$\pi_1$-injective, so the conclusion of [[cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses]] fails without compactness. Both restrictions belong to the
statements and are not artefacts of the proof.
