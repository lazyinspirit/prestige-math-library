---
id: thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots
kind: theorem
title: "Infinitely many SL2(C)-abelian surgeries characterize torus knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs
  - def-sl-two-abelian-surgery
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - def-satellite-pattern-companion-and-winding-number
  - thm-jsj-decomposition-of-knot-exteriors
  - thm-thurston-hyperbolic-dehn-filling
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), Theorems 1.1 and 5.1"
      url: "https://arxiv.org/html/2405.19197v2"
    - title: "Steven Sivek and Raphael Zentner, SU(2)-cyclic surgeries and the pillowcase, §§1 and 10"
      url: "https://arxiv.org/abs/2103.12651"
---

## Statement

Assume full AC. A smooth knot $K\subset S^3$ admits infinitely many distinct rational $SL_2(\mathbb C)$-abelian Dehn surgeries if and only if $K$ is a torus knot, with the unknot included as a torus knot with one parameter of absolute value one.

## Statement references

[[def-sl-two-abelian-surgery|Definition of an SL2(C)-abelian surgery slope]]

[[def-coprime-torus-knot|Coprime torus-knot convention, including the unknot]]

[Baldwin and Sivek, Theorems 1.1 and 5.1](https://arxiv.org/html/2405.19197v2)

[Sivek and Zentner, §§1 and 10](https://arxiv.org/abs/2103.12651)

## Facts & Assumptions

**Given:** Full AC, a smooth knot in $S^3$, the marked surgery convention, and the stated definition of an $SL_2(\mathbb C)$-abelian filling.

[F1] For a torus knot $T_{a,b}$, the slopes $ab+1/n$ give lens-space surgeries and hence $SL_2(\mathbb C)$-abelian fillings (Baldwin–Sivek §5).

[A1] The converse requires the hyperbolic Dehn-filling theorem to rule out hyperbolic knots, a full JSJ classification of knot exteriors to reduce to satellites, the pattern and companion filling-transfer lemmas, the SU(2)-averse accumulation theorem, and the instanton L-space satellite obstruction. Those modules remain unresolved in [[lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs]].

## Proof obligation

The forward implication follows from the torus-knot lens-surgery family. The converse proceeds by excluding hyperbolic knots via all-but-finitely-many hyperbolic fillings with faithful nonabelian holonomy representations, then excluding satellites via the Baldwin–Sivek pattern/companion surgery transfer and instanton L-space restrictions. The missing supplier hypotheses are recorded in [A1]; neither the cited theorem nor the unresolved module is accepted as a local proof. This theorem is escalated.
