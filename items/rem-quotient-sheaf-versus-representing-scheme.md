---
id: rem-quotient-sheaf-versus-representing-scheme
kind: remark
title: "Orbit sets, fppf quotient sheaves and representing schemes are three different objects"
status: published
origin: pipeline
dependency_level: 5
deps: [def-axiom-of-choice, def-quotient-sheaf-and-representable-quotient, lem-fppf-quotient-representability-criterion, prop-faithfully-flat-orbit-map-represents-coset-quotient, thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation, thm-homogeneous-space-for-smooth-affine-group]
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
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Chapter 39, Section 39.20 and Proposition 39.23.9"
    - title: "The Stacks Project, Properties of Algebraic Spaces, Section 66.14 (tags 07S5, 07S6, 0BBM)"
      url: https://stacks.math.columbia.edu/download/spaces-properties.pdf
      locator: "Chapter 66, Section 66.14"
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 5 Section 5(c) and Chapter 7 Section 7(e), printed pp. 104-106 and 142-143"
---

## Statement

Assume the Axiom of Choice for the represented-sheaf and geometric suppliers
used on this page. Three objects are commonly conflated, and must be kept
apart. (1) The **orbit set** $U(k)/R(k)$: the value at $k$ of the naive
quotient presheaf of a pre-relation; it is computed from $k$-points alone.
(2) The **fppf quotient sheaf** $U/R$
([[def-quotient-sheaf-and-representable-quotient]]): the sheafification of
that presheaf, whose sections over a $k$-scheme $T$ are fppf-local orbit data.
Its $k$-points can be strictly larger than the orbit set, and it carries
infinitesimal information invisible to it; a concrete instance is recorded on
the examples companion page of this pair. (3) A **representing scheme**: a
$k$-scheme $M$ with a natural isomorphism $h_M\cong U/R$
([[lem-fppf-quotient-representability-criterion]]); by Yoneda it is unique up
to unique isomorphism when it exists. Representability is an additional
property, not a consequence of the definitions: this page establishes it for
homogeneous spaces of smooth affine groups
([[thm-homogeneous-space-for-smooth-affine-group]]) and for affine finite
locally free equivalence relations
([[thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation]]). In
the homogeneous-space case the quotient is the orbit of the base point and the
quotient morphism is faithfully flat
([[prop-faithfully-flat-orbit-map-represents-coset-quotient]]); the general
arbitrary-group quotient representability statement is outside the scope of
this page and is not claimed here.
