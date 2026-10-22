---
id: lem-heegaard-floer-correction-terms-lens-space-lp1
kind: lemma
title: "Lens-space correction-term formula for L(p,1)"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-correction-term
  - lem-heegaard-floer-correction-term-heegaard-invariance
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 4.1, Proposition 4.8 specialized to q=1, and Proposition 4.2"
    - title: "Paolo Aceto and Marco Golla, Dehn Surgeries and Rational Homology Balls"
      url: "https://arxiv.org/pdf/1509.07559v2"
      locator: "Section 3, Proposition 3.5 and Remark 3.6; lens-space orientation convention"
---

## Statement

Use the Ozsvath–Szabo orientation convention $L(p,1)$ given by positive $p$-surgery on the unknot and label its Spin$^c$ structures by $i\in\mathbb Z/p\mathbb Z$, represented by $0\le i<p$. For every integer $p\ge1$,
$$d(L(p,1),i)=\frac{(2i-p)^2-p}{4p}.$$
For the opposite orientation the correction terms are negated, with the conjugate Spin$^c$ label understood.

## Statement references

[[def-lens-space-surgery-orientation-convention|The lens-space surgery orientation]]

[[def-heegaard-floer-correction-term|The correction-term convention]]

[Ozsvath and Szabo, *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, Propositions 4.2 and 4.8](https://arxiv.org/pdf/math/0110170v1)

[Aceto and Golla, *Dehn Surgeries and Rational Homology Balls*, Proposition 3.5 and Remark 3.6](https://arxiv.org/pdf/1509.07559v2)

## Proof status

Escalated: substituting $q=1$ into the source recurrence is elementary, but the recurrence itself depends on a Heegaard Floer triangle-map computation and an absolute Chern-class grading shift. Those steps have not been reconstructed from local suppliers, and the current knot Floer/grid results do not supply them. No proof is claimed.
