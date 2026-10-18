---
id: rem-hh-affine-tempered-langlands-classification-awaits-local-proof
kind: remark
title: The local tempered Langlands proof and the selected-group boundary
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
- thm-hh-affine-hecke-tempered-langlands-classification
- thm-hh-sl2-q3-iwahori-convolution-corner
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Maarten Solleveld, Affine Hecke Algebras and Their Representations
    url: https://arxiv.org/pdf/2009.03007
    locator: §3.2, Definitions 3.6, 3.9, and 3.12 and Theorem 3.13, PDF pp. 27–30; the survey cites Solleveld, Theorem 2.4.4,
      for the classification proof.
  - title: Dan Ciubotaru, Tutorial on Affine Hecke Algebras
    url: https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf
    locator: '§§4–5, PDF pp. 5–8: Iwahori-fixed representations and the group-specific p-adic interface; no proof of the general
      root-data Langlands classification is given.'
---

## Remark

The positive-real-parameter classification is now proved locally in [[thm-hh-affine-hecke-tempered-langlands-classification]]. Its actual suppliers define the full-lattice parabolic algebra, generalized weights and central weight character, temperedness and strict real positive position. The finite parabolic weight filtration and dominant-cone projection give an intrinsic highest projection-norm subspace. It proves the standard module's unique maximal submodule and irreducible quotient, then exhaustivity and uniqueness of Langlands data, including the full central exponent and unequal parameters.

The original native source report and escalation are retained unchanged in the before archive. Neither the classification nor the affine algebra alone implies a whole smooth representation-category equivalence for a p-adic group. The separate [[thm-hh-sl2-q3-iwahori-convolution-corner]] proves the exact selected-group corner for $\operatorname{SL}_2(\mathbb Q_3)$ by lattice-tree and root-coset counts, with both affine parameters equal to $3$, and constructs the invariant-vector action. It specifies its Haar/choice assumptions and makes no block-equivalence claim. This is the corner alternative in the approved parameter-boundary clause, while the general classification retains its full root-data scope. This remark is contextual rather than a theorem supplier.
