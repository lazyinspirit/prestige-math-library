---
id: lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree
kind: lemma
title: "Positive-characteristic Specht head and cyclotomic crystal labels agree"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels, lem-reduction-of-characteristic-zero-simple-modules-modulo-p, thm-graded-specht-heads-classify-the-graded-simple-modules, cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group, thm-graded-specht-classes-realize-standard-fock-vectors, lem-standard-fock-vectors-expand-in-the-upper-global-basis, def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention, thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda, def-cyclotomic-klr-diagram-duality-and-graded-module-duals, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3"
      url: "https://arxiv.org/pdf/0901.4450v3"
      locator: "Actual cached text §4.12 Lemma4.21 and §5.6 Theorems5.17–5.18 read for this construction. Local maximal-tail proof supplied rather than importing the cited BK1 lemma."
verification:
  precheck: pass
---

## Statement

In the positive-characteristic nondegenerate level-one regime, the normalized cellular head dotD(lambda) for each restricted partition lambda is isomorphic, with shift zero, to the normalized simple of the same right crystal label lambda. The reduction J(lambda) of the characteristic-zero normalized simple contains that crystal-labelled simple once, and has no constituents with cellular labels not dominated by lambda. Its G0 class is invariant under finite-module diagram duality. This proves the CP label comparison needed for the crystal-labelled adjustment matrix; it is not a positive-characteristic global-basis identification.

## Facts & Assumptions

[F1] The declared extremal-character and lattice-reduction suppliers give field-independent character detection and the reduced module character.

[F2] The declared canonical Specht/upper-transition and cellular-head suppliers give the restricted unitriangular bases and normalized simple heads.

[F3] The declared diagram-duality supplier fixes word idempotents and dualizes the finite graded word spaces.

## Proof

**Given:** The hypotheses of the statement and the explicitly declared proved supplier interfaces.

1.1 Now let J(lambda) be the reduction of the characteristic-zero normalized simple of crystal label lambda, constructed using a rational Specht-generator lattice. Its graded word character equals that of the characteristic-zero simple. Choose an extremal word of this common character. In characteristic zero the reconstruction label is lambda; in positive characteristic the same word gives the same canonical B(Lambda) label. The displayed quotient is1 for the characteristic-zero simple, hence [J(lambda):D_crystal(lambda)]_q=1 in positive characteristic. [F1, algebra]

2.1 Independently, the corrected canonical Fock comparison and the upper expansion identify [J(lambda)] with the inverse image of the characteristic-zero upper vector. The restricted upper-transition minor is dominance-unitriangular. Invert it over Z[q,q^{-1}] and use the ACTUAL positive-characteristic cellular-head triangular expansion of restricted Specht classes. This gives [J(lambda)]=[D_cell(lambda)]+sum_{nu<lambda}a_nu(q)[D_cell(nu)]. These coefficients are the actual composition multiplicities because J(lambda) is a module; there is no asserted positivity from matrix inversion alone. Induct over a finite dominance refinement in the fixed root degree. Assume D_cell(nu)=D_crystal(nu) for the smaller labels. Since different crystal labels give different simple orbits, D_crystal(lambda) cannot be any smaller D_cell(nu). Its occurrence in J(lambda) therefore forces D_cell(lambda)=D_crystal(lambda). The coefficient1 forces shift0 as both chosen representatives are self-dual. This proves the CP label comparison before defining adjustment polynomials in the crystal-labelled basis. [F1, F2, step 1.1, algebra]

3.1 The characteristic-zero simple D(lambda) is normalized for finite vector duality, so each word component e(nu)D(lambda) has a symmetric graded dimension: its Laurent polynomial is unchanged by v -> v^{-1}. The constructed J(lambda) has exactly the same graded word character. The descended generator-fixing anti-involution fixes every word idempotent; hence e(nu)D_psi J(lambda) is the graded vector dual of e(nu)J(lambda), and its graded dimension is the same symmetric polynomial. Therefore D_psi J(lambda) and J(lambda) have identical word characters. The completed local extremal-word character detection proves G0 character injectivity over the actual positive-characteristic field, so [D_psi J(lambda)]=[J(lambda)]. This proves bar invariance of its CLASS; no self-dual stable integral lattice is asserted. [F1, F3, algebra] ∎
