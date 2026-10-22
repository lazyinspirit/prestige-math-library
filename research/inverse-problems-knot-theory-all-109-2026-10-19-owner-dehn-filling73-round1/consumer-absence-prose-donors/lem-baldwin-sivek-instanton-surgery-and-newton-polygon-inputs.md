---
id: lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs
kind: lemma
title: "Baldwin–Sivek instanton-surgery and Newton-polygon input module"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - thm-knot-wirtinger-presentation-correctness
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-jsj-decomposition-of-knot-exteriors
  - def-satellite-pattern-companion-and-winding-number
  - def-finite-volume-hyperbolic-knot-exterior
  - thm-thurston-hyperbolic-dehn-filling
  - def-singular-instanton-knot-and-sutured-closure-data
  - lem-instanton-knot-complex-asd-analytic-foundations
  - thm-sutured-instanton-khi-rank-detects-unknot
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - def-sl-two-abelian-surgery
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - thm-torus-knot-alexander-and-genus-formulas
  - def-axiom-of-choice
  - lem-torus-knot-enhanced-a-polynomial
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), §§2–5"
      url: "https://arxiv.org/html/2405.19197v2"
    - title: "Steven Sivek and Raphael Zentner, SU(2)-cyclic surgeries and the pillowcase, Theorem 1.1 and Proposition 10.3"
      url: "https://arxiv.org/abs/2103.12651"
---

## Statement

Assume full AC and let $K\subset S^3$ be a knot. The input package required by the Baldwin–Sivek thin-knot and infinitely-many-abelian-surgeries arguments consists of the following conclusions with their stated hypotheses: (i) a nontrivial $\mathrm{SU}(2)$-averse knot has a unique rational accumulation slope and either it or its mirror is an instanton L-space knot; (ii) a nontrivial instanton L-space knot is fibered and its symmetrized Alexander polynomial has coefficients in $\{-1,0,1\}$ with nonzero coefficients alternating in sign; (iii) the L-space satellite restrictions and the pattern/companion surgery-transfer statements exclude the satellite cases used in §§3–5; and (iv) the hyperbolic Dehn-filling theorem and the knot-exterior JSJ classification reduce the remaining cases to torus knots. This carrier records the exact imported result interfaces and does not assert that these conclusions have been proved locally.

## Statement references

[Baldwin and Sivek, §§2–5](https://arxiv.org/html/2405.19197v2)

[Sivek and Zentner, Theorem 1.1 and Proposition 10.3](https://arxiv.org/abs/2103.12651)

## Facts & Assumptions

**Given:** The knot-exterior, satellite, torus-knot, instanton-complex, hyperbolic-filling, and JSJ interfaces listed in the dependencies.

[F1] Baldwin–Sivek Theorem 2.7 imports the SU(2)-averse accumulation-slope result; Corollary 2.8 gives the instanton L-space conclusion for the knot or its mirror (source §2.2).

[F2] Baldwin–Sivek Theorems 2.1–2.2 and Corollary 2.3 require instanton L-space surgery, fiberedness, and KHI grading inputs (source §2.1).

[F3] The satellite exclusion uses the Alexander-polynomial restrictions, torus-pattern calculations, and the separate surgery-transfer cases including parabolic peripheral representations (source §§3 and 5).

[A1] The required local sutured-instanton, KHI grading/nonvanishing, L-space surgery, and SU(2)-averse theorems are not supplied by the current Batch 97 carriers. Proposed missing suppliers are `thm-instanton-lspace-knot-fibered-and-surgery-range`, `thm-su2-averse-implies-instanton-lspace-knot`, `thm-khi-alexander-coefficient-restriction`, and `lem-baldwin-sivek-satellite-pattern-exclusion`.

[A2] The hyperbolic branch may use the now locally supplied Batch 73 theorem `thm-thurston-hyperbolic-dehn-filling`, with its complete finite-volume one-cusped metric and primitive-slope hypotheses. The required passage from hyperbolic filling metrics and PSL2 holonomy to the relevant SL2 representations remains a separate obligation; the current Batch 71 JSJ theorem also has an unfinished uniqueness step and is not a proved supplier.

## Proof obligation

The source proof has separate thin and surgery arguments. The thin proof uses the instanton-L-space/KHI Alexander restrictions to rule out satellites after JSJ and hyperbolic reductions. The surgery proof additionally proves the pattern filling transfer for diagonal, parabolic, and central-meridian cases, then uses SU(2)-averse accumulation slopes and a minimal-genus satellite contradiction. The named source conclusions and their analytic/topological proofs are not locally supplied. This module is escalated and must not be used as a proved premise.
