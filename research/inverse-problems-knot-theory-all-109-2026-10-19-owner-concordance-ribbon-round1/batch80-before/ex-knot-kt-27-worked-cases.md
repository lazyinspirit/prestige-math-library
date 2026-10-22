---
id: ex-knot-kt-27-worked-cases
kind: example
title: "Worked cases: identity and cable operators"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-satellite-induced-concordance-operator
  - def-satellite-pattern-companion-and-winding-number
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§§1–2 and Proposition 2.5"
    - title: "Arunima Ray, “Slice Knots and Knot Concordance”"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§5, cable and infection conventions"
---

## Example

Consider the identity pattern I given by the core of the solid torus, the (p,1)-cable pattern for a positive integer p, and the local-knot pattern P_J obtained by tying a fixed knot J into a small arc of the core. Their winding numbers are respectively 1, p and 1. The identity pattern fixes every knot. The closure of the (p,1)-cable pattern is the unknot, so it satisfies the closure sliceness hypothesis for the localized weak-injectivity corollary. The local-knot pattern has closure J, which may be nontrivial, yet its solid-torus meridian normally generates the closure-knot group.

## Example references

[[def-satellite-pattern-companion-and-winding-number|Cable patterns and winding]]

[CDR, §§1–2 and Proposition 2.5](https://arxiv.org/pdf/1205.5058v3)

[Ray, §5](https://numdam.org/item/10.5802/wbln.39.pdf)

## Facts & Assumptions

**Given:** The identity, (p,1)-cable and local-knot patterns with the stated orientations.

[F1] Winding number is algebraic intersection with a meridional disk ([[def-satellite-induced-concordance-operator]]).

[F2] Strong winding is normal generation by the solid-torus meridian in the closure complement ([[def-satellite-induced-concordance-operator]]).

## Verification

**Proof technique:** direct.

1.1 The identity core meets a meridional disk once positively. A (p,1)-cable represents p times the core class, and the local knot changes the core by a knot tied into a ball, not its homology class. Thus the listed winding numbers are 1,p,1. [F1, given, algebra]

1.2 The (p,1) torus knot is the unknot, so its closure bounds the standard disk in B⁴ and is Z[1/|p|]-slice. The identity map is K↦K. [given, algebra]

2.1 For the local-knot pattern the closure complement is the exterior of J with the axis meridian identifying to a meridian of J. Meridional Dehn filling gives S³; van Kampen therefore says the normal closure of this meridian is the whole knot group. J can be nontrivial, so knotted closure does not preclude strong winding. [F2, given, algebra] ∎
