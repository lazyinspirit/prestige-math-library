---
id: pthm-pure-spinor-type-ii-one-loop-beta-set-1
kind: physics-theorem
title: "Pure Spinor Type Ii One Loop Beta Set 1"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 4
domain: physics
physical_scope: "Conditional one-loop result for only the eight independent weight-(1,1) beta equations (5.5)–(5.12) in the declared Bedoya–Chandía model. Omitted gamma-algebra reductions and all higher beta-function sets remain unproved locally."
deps:
  - post-pure-spinor-type-ii-curved-background-sigma-model
dependency_roles:
  post-pure-spinor-type-ii-curved-background-sigma-model: physical-assumption
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pablo A. Bedoya and Aníbal Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background, arXiv:hep-th/0609161v2, JHEP 0701:042 (2007)"
      url: "https://arxiv.org/pdf/hep-th/0609161v2"
      locator: "§§2.1–2.3 and §§4–5, equations (2.1)–(2.21), (4.6), and (5.5)–(5.12)."
verification:
  precheck: pass
---

## Statement

For the curved Type II pure-spinor sigma model fixed by post-pure-spinor-type-ii-curved-background-sigma-model, in the paper's superspace notation, assume the classical BRST-current holomorphicity/antiholomorphicity constraints and torsion/curvature Bianchi identities. At one worldsheet loop, the eight beta-function equations (5.5)-(5.12) for the independent conformal-weight-(1,1) couplings specified in §5.1 vanish as consequences of those constraints. The claim is restricted to those first two beta-function sets; it does not assert that all higher-dimension beta functions, all-order conformal invariance, or arbitrary curved backgrounds have been proved.

## Statement references

[Pablo A. Bedoya and Aníbal Chandía, One-loop Conformal Invariance of the Type II Pure Spinor Superstring in a Curved Background, arXiv:hep-th/0609161v2, JHEP 0701:042 (2007)](https://arxiv.org/pdf/hep-th/0609161v2)

## Facts & Assumptions

**Given:** The curved Type II pure-spinor sigma model, its one-loop expansion and independent weight-$(1,1)$ couplings, and the source’s BRST, Bianchi, and dilaton-gradient premises.

[F1] [[post-pure-spinor-type-ii-curved-background-sigma-model]] adopts the Bedoya–Chandía action (2.2), the independent couplings (4.6), the classical BRST-current constraints and the stated superspace Bianchi identities in the exact source convention.

[A1] Bedoya–Chandía’s background-field expansion identifies the logarithmic-divergence coefficients of the eight independent couplings as equations (5.5)–(5.12). Their derivation uses the declared one-loop scheme; the full coefficient expansion is not locally reproduced here.

[A2] In the same source convention, the BRST-current constraints, Bianchi identities and dilaton-gradient relations reduce each of the eight coefficient expressions (5.5)–(5.12) to zero. The local derivation gives detailed reductions for most equations but invokes an “analogous procedure” and compressed gamma-matrix algebra for portions of (5.10)–(5.12); no local helper proving all eight reductions is present.

## Proof

1.1 By [F1], equation (4.6) selects the eight independent conformal-weight-$(1,1)$ couplings in the model under consideration. Input [A1] identifies their one-loop beta coefficients, in that order, with the eight expressions labelled (5.5) through (5.12). Consequently the claim that this selected beta set vanishes is exactly the conjunction that those eight coefficients are zero; no higher-dimension or later beta set is included. [given, F1, A1]

2.1 Under the explicit classical BRST, Bianchi and dilaton-gradient premises of [F1], conditional source input [A2] sets each coefficient in the ordered list (5.5)–(5.12) equal to zero. Applying this to every one of the eight independent couplings identified in step 1.1 proves the stated one-loop beta-set conclusion, conditional on the source’s omitted algebraic reductions. [F1, A2, step 1.1, algebra]

3.1 Steps 1.1–2.1 concern only the two displayed first beta-function sets (5.5)–(5.12). They give no value for the third or fourth sets, for higher-loop coefficients, or for backgrounds outside the postulate’s constraints. [F1, A1, A2, step 1.1, step 2.1] ∎

## Remarks

The conditional source interface is exact, but its omitted gamma-algebra reductions remain a local proof obligation. This item is escalated for that reconstruction; the conditional argument does not turn the source’s compressed calculation into a completed local derivation.
