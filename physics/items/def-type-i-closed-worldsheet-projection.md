---
id: def-type-i-closed-worldsheet-projection
kind: definition
title: "Type I Closed Worldsheet Projection"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 11
domain: physics
physical_scope: "Flat Type IIB RNS worldsheet parity quotient in the unoriented closed-string sector, using the cited DPin convention. It excludes open strings, Chan–Paton data, and tadpole cancellation."
deps:
  - pthm-rns-type-ii-massless-spectrum
  - def-st-dpin-structure-conventions
  - def-singular-cohomology-ring
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-axiom-of-choice
dependency_roles:
  pthm-rns-type-ii-massless-spectrum: physical-result
  def-st-dpin-structure-conventions: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
    - title: "Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1"
      url: "https://arxiv.org/pdf/2608.30774v1"
      locator: "§4.1–4.2 and Appendix A.2: DPin structure, closed Type I anomaly decomposition, and explicit exclusion of open strings."
verification:
  precheck: n/a
---

## Definition

For the flat Type IIB closed RNS model, worldsheet parity Omega exchanges left/right movers and acts by sigma -> pi-sigma in the interval convention. Define the Type I closed worldsheet as the Omega-invariant unoriented quotient with DPin(2) tangential structure. In the source convention, 1 -> Z2^L x Z2^R -> DPin(n) -> O(n) -> 1, with orientation reversal exchanging the two Z2 factors. Equivalently, a DPin structure on a manifold Y is a class a in H^1(Y;Z2), specifying the relative Z2 bundle, together with a trivialization of w2(TY)+w1(TY)^2+w1(TY)a; the source's two identifications are related by a -> a+w1. The closed massless fields are the Omega-even subset of the Type IIB spectrum. This defines only the closed quotient and does not include open strings or tadpole cancellation.

## Definition references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1](https://arxiv.org/pdf/2608.30774v1)

The DPin group extension and the cohomological classifying datum are fixed by [[def-st-dpin-structure-conventions]]. Thus, on an unoriented worldsheet Y, the extra class is a∈H¹(Y;𝔽₂), and its structure includes a trivialization of w₂(TY)+w₁(TY)²+w₁(TY)a. The two source identifications differ by a↦a+w₁(TY). This is a convention for the closed quotient; no anomaly cancellation theorem follows from the definition.
