---
id: thm-author-27d786ff4d27-relative-jacobian-openness
kind: theorem
title: External relative Jacobian criterion and openness of smooth maps
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, standard smooth presentations and openness
      url: https://stacks.math.columbia.edu/tag/00T1
      locator: Algebra Definition10.137.5 and Lemma10.137.6, complete proof; Morphisms
        Lemmas29.35.10–29.35.11 at https://stacks.math.columbia.edu/tag/01V4.
      statement: An invertible defining Jacobian minor gives a standard smooth algebra
        with the expected free differential rank; smooth morphisms are locally
        standard smooth and universally open.
      hypotheses: Arbitrary rings/base schemes with the actual finite-presentation and
        invertible-minor hypotheses; no characteristic restriction. Apply to a
        smooth chart times the coefficient affine space.
      reading_limits: Read actual full Definition10.137.5 and Lemma10.137.6 with its
        displayed proof, and the full statements and printed proof references of
        Morphisms29.35.10–29.35.11. The omitted localization details and earlier
        complete commutative-algebra foundations are imported, not newly
        reconstructed.
dependency_level: 0
---

## Statement
Import the ordinary relative Jacobian criterion in standard smooth presentations and openness of smooth morphisms: adding $r$ equations whose differentials are independent in a smooth relative $d$-fold yields a smooth relative $(d-r)$-fold near that point. In particular its image contains an open neighbourhood of the parameter. The criterion is valid in every characteristic and survives base change.

## Source contract
**Given:** A smooth finite-presentation presentation over the base, and an invertible maximal minor for the original equations together with the additional equations.

**Goal:** Supply the exact scheme-level nonempty-parameter argument.

[F1] Stacks Algebra Definition10.137.5 and Lemma10.137.6 give the standard-smooth Jacobian presentation and its smoothness and relative differential rank; Morphisms Lemma29.35.11 gives such presentations locally for smooth maps.

[F2] Stacks Morphisms Lemma29.35.10 says smooth maps are universally open.

## External input
Import [F1]–[F2]. The augmented minor condition verifies the displayed standard smooth definition after localization. No characteristic-zero generic-smoothness assertion or dominance assumption is imported.
