---
id: lem-baldwin-sivek-instanton-surgery-and-newton-polygon-inputs
kind: lemma
title: Baldwin–Sivek instanton-surgery and Newton-polygon input module
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
  - lem-satellite-sl2-abelian-fillings-transfer-to-pattern-and-companion
  - lem-closed-oriented-hyperbolic-holonomy-has-a-faithful-sl2-lift
  - thm-thurston-hyperbolization-for-atoroidal-knot-exteriors
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), §§2–5
      url: https://arxiv.org/pdf/2405.19197v2
    - title: Steven Sivek and Raphael Zentner, SU(2)-cyclic surgeries and the
        pillowcase, Theorem 1.1 and Proposition 10.3
      url: https://arxiv.org/pdf/2103.12651
---

## Statement

Assume full AC and let $K\subset S^3$ be a knot. The input package required by the Baldwin–Sivek thin-knot and infinitely-many-abelian-surgeries arguments consists of the following conclusions with their stated hypotheses: (i) a nontrivial $\mathrm{SU}(2)$-averse knot has a unique rational accumulation slope and either it or its mirror is an instanton L-space knot; (ii) a nontrivial instanton L-space knot is fibered and its symmetrized Alexander polynomial has coefficients in $\{-1,0,1\}$ with nonzero coefficients alternating in sign; (iii) the L-space satellite restrictions and the pattern/companion surgery-transfer statements exclude the satellite cases used in §§3–5; and (iv) the hyperbolic Dehn-filling theorem and the knot-exterior JSJ classification reduce the remaining cases to torus knots. This carrier records the exact imported result interfaces and does not assert that these conclusions have been proved locally.

## Statement references

[Baldwin and Sivek, §§2–5](https://arxiv.org/pdf/2405.19197v2)

[Sivek and Zentner, Theorem 1.1 and Proposition 10.3](https://arxiv.org/pdf/2103.12651)

## Facts & Assumptions

**Given:** The knot-exterior, satellite, torus-knot, instanton-complex, hyperbolic-filling, and JSJ interfaces listed in the dependencies.

[F1] Baldwin–Sivek Theorem 2.7 imports the SU(2)-averse accumulation-slope result; Corollary 2.8 gives the instanton L-space conclusion for the knot or its mirror (source §2.2).

[F2] Baldwin–Sivek Theorems 2.1–2.2 and Corollary 2.3 require instanton L-space surgery, fiberedness, and KHI grading inputs (source §2.1).

[F3] The satellite exclusion still uses the actual instanton Alexander restrictions and the precise essential-satellite/trichotomy interface. Its pattern/companion FILLING transfer, including reducible nonabelian representations, negative-unipotent even-winding central twists and primitive satellite slopes, is now locally supplied by [[lem-satellite-sl2-abelian-fillings-transfer-to-pattern-and-companion]]. This does not by itself prove an instanton theorem or an accumulation-slope assertion.

[A1] The required local sutured-instanton, KHI grading/nonvanishing, L-space surgery, and SU(2)-averse theorems are not supplied by the current Batch 97 carriers. Proposed missing suppliers are `thm-instanton-lspace-knot-fibered-and-surgery-range`, `thm-su2-averse-implies-instanton-lspace-knot`, `thm-khi-alexander-coefficient-restriction`, and `lem-baldwin-sivek-satellite-pattern-exclusion`.

[A2] The hyperbolic branch may use the now locally supplied Batch 73 theorem `thm-thurston-hyperbolic-dehn-filling`, with its complete finite-volume one-cusped metric and primitive-slope hypotheses. For closed oriented smooth hyperbolic fillings the actual complete-Heegaard Spin frame construction now gives the faithful SL2 lift in [[lem-closed-oriented-hyperbolic-holonomy-has-a-faithful-sl2-lift]]; it does not infer a closed obstruction from exterior cohomology. The original surgery assembly uses finite first homology at every nonzero rational slope to make that faithful image nonabelian. The actual smooth torus/hyperbolic/essential-satellite trichotomy remains distinct: its residual metric theorem is [[thm-thurston-hyperbolization-for-atoroidal-knot-exteriors]], with irreducible, boundary-incompressible, atoroidal, non-Seifert hypotheses. The marked torus-side and Seifert-knot reductions are separately being authored and are not assumed from their current candidates; JSJ uniqueness is not required for this weaker reduction.

## Proof obligation

The exact remaining common inputs are the boundedness and unique finite rational accumulation point of the FULL SU2-abelian slope set of a nontrivial SU2-averse knot; the actual instanton L-space conclusion for it or its mirror; fiberedness; and the alternating-unit Alexander restriction with the ADDITIONAL adjacent-highest-term conclusion. Boundedness, not just uniqueness of one accumulation point, is required to pass to infinite subsets. The separate smooth knot-exterior trichotomy is also still required. The actual classical pattern/companion filling transfers and the closed faithful holonomy lift described above are supplied and are not left as source citations. Their original-facing surgery donor also proves the signed torus cyclic filling family and gives the remaining minimal-genus/Alexander contradiction conditional on precisely those outstanding inputs. This whole input package remains escalated and must not be used as a proved premise for its unprovided instanton or classification conclusions.
