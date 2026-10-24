---
id: rem-finite-quiver-hall-counts-and-dt-bps-interpretation
kind: remark
title: "Finite-quiver Hall counts and the limits of DT/BPS interpretation"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
  - thm-finite-quiver-hall-wall-crossing
  - def-toen-derived-hall-algebra
  - def-hall-algebra-module
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-quiver-motivic-quantum-torus
  - def-untwisted-quiver-cohomological-hall-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§4.3–4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Bertrand Toën, Derived Hall algebras, §§3–4"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, §§3–5"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §§1–2"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Maxim Kontsevich and Yan Soibelman, Stability structures, motivic Donaldson–Thomas invariants and cluster transformations, §§1–2 and 7"
      url: "https://arxiv.org/pdf/0811.2435"
verification:
  precheck: n/a
---

## Remarks

The coefficients of $J(S_Z(\phi))$ are finite-field, Euler-normalized
semistable groupoid masses: the weight of $[M]$ is
$t^{\chi_Q(\mathbf d(M),\mathbf d(M))}/|\operatorname{Aut}(M)|$. The wall
crossing proved on this page is an arithmetic finite-field Hall identity and
its stated Euler/skew integrations. It does not identify these coefficients
with Behrend-weighted numerical Donaldson–Thomas invariants of a
Calabi–Yau-threefold, motivic vanishing-cycle invariants, cohomological BPS
spaces, or dimensions of physical Hilbert spaces.

The four required preceding pages provide distinct reading contexts. The
derived definition uses dg enhancements and higher homotopy weights; the
motivic definition uses stack-function coefficients; the cohomological
definition uses rational intrinsic quotient-stack Borel–Moore homology and
the exact-sequence correspondence operations; a Hall-module definition is an
algebra action on a separate module. These coefficient theories remain distinct
from the arithmetic groupoid masses. Their operation and integration theorems
are not used in this finite-field proof.

Any physical BPS identification is conditional on a specified supersymmetric
quiver model, charge assignment, central charge, superpotential, relevant
Calabi–Yau-threefold enhancement and orientation data, together with a proved
state-counting comparison. The finite-field argument establishes none of
those additional identifications.
