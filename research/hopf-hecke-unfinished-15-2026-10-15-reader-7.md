# Step 3a reader report — batch 7

Run: hopf-hecke-unfinished-15-2026-10-15  
Role: independent reader  
Coverage: batch 7

## Opened inventory

The live autopilot status was running; the run had no active worker and Step 3a read collection had not yet recorded results. The batch manifest assigns the following two pages and nine items.

Task and repository instructions read: CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/reader.md, research/hopf-hecke-unfinished-15-2026-10-15-batch-7.pages.json, and research/hopf-hecke-unfinished-15-2026-10-15-batch-7.proof-contracts.json.

Assigned pages:

- library/hopf-hecke-algebras/finite-hopf-integrals-frobenius-duality-and-maschke.md
- library/hopf-hecke-algebras/finite-hopf-integrals-frobenius-duality-and-maschke-examples.md

Assigned items, read in dependency order:

- def-hh-frobenius-functional-and-associative-pairing
- def-hh-left-right-integrals-and-integral-functionals
- lem-hh-finite-dual-regular-hopf-module-construction
- thm-hh-hopf-maschke-integral-averaging
- thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective
- thm-hh-finite-hopf-algebras-are-frobenius
- ex-hh-sweedler-frobenius-pairing
- ex-hh-finite-group-algebra-integrals-and-maschke
- ex-hh-taft-integrals-and-maschke-failure

Direct and relevant transitive item dependencies opened:

- Algebra, dual, module, and semisimplicity foundations: def-algebra-over-a-commutative-ring, def-algebraic-dual-and-linear-functional, def-left-and-right-modules, def-submodule, def-simple-module, def-direct-sum-of-a-family-of-modules, def-semisimple-module, and def-semisimple-ring.
- Tensor and bialgebra foundations: def-hh-scalar-and-tensor-conventions, def-hh-coalgebra-and-coalgebra-map, def-hh-bialgebra-and-bialgebra-map, def-hh-group-like-and-primitive-elements, def-hh-dual-algebra-and-rational-module, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products, thm-tensor-product-of-algebras-over-a-commutative-ring, lem-hh-tensor-product-coalgebra, lem-hh-convolution-algebra-associativity-and-unit, and lem-hh-counit-uniqueness-and-finite-sweedler-calculus.
- Hopf and duality suppliers: def-hh-hopf-algebra-and-antipode, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, thm-hh-finite-algebra-coalgebra-duality, thm-hh-finite-dimensional-dual-hopf-algebra, lem-hh-finite-tensor-duality-and-canonical-coevaluation, and lem-hh-group-and-polynomial-hopf-algebras-exist.
- Hopf-module suppliers: def-hh-right-comodule-and-comodule-morphism, def-hh-right-right-hopf-module-and-coinvariants, lem-hh-coinvariants-form-a-subspace, lem-hh-free-right-right-hopf-module, lem-hh-hopf-module-coinvariant-projection, and thm-hh-fundamental-theorem-of-hopf-modules.
- Linear-algebra suppliers: lem-hh-finite-matrix-and-module-preliminaries, thm-rank-nullity, and thm-dual-family-is-a-basis-in-finite-dimension.
- Other example supplier: lem-hh-taft-algebra-pbw-and-hopf-structure.

The five declared prerequisite pages were opened for their interfaces and summaries: comodules-matrix-coefficients-and-coalgebra-duality, bialgebras-convolution-and-antipode-identities, hopf-ideals-finite-duals-and-basic-constructions, hopf-modules-coinvariants-and-the-fundamental-theorem, and library/abstract-algebra/chain-conditions-and-semisimple-modules.md. The batch-7 proof-contract file was also opened and checked against the current steps.

## Review and edit

The formulas and hypotheses were checked in the assigned definitions, proofs, examples, contracts, and page summaries. In particular:

- The dual regular action f ↼ h (x) = f(xS(h)) is a unital right action; the coaction is uniquely represented in finite dimension, its compatibility follows from the antipode identities, and its coinvariants are exactly the left integral functionals on H*.
- The Hopf–Maschke proof constructs both directions of the criterion. A semisimple regular module splits the augmentation; a normalized left integral gives the Casimir tensor identity, which averages a linear projection onto each left ideal. Finite induction then gives semisimplicity.
- The finite-integral theorem applies the Hopf-module decomposition to H and H*; finite-dimensionality supplies the dimension comparisons and injective antipodes are surjective. The Frobenius proof then obtains the two nondegenerate variables and the stated dual-basis identities.
- The group-algebra coefficient comparison, the Taft top-degree integral calculation, and the Sweedler pairing matrix agree with their stated bases and multiplication rules.

Two citation precision defects were repaired:

- In items/thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective.md, Facts & Assumptions [F5] and Proof step 1.2 had called the evaluation map a Hopf-algebra isomorphism while citing thm-hh-finite-algebra-coalgebra-duality. That supplier proves the evaluation map is an algebra and coalgebra isomorphism (Statement and Proof steps 2.1 and 2.4); the integral equations require only multiplication and counit preservation. The fact and step now state exactly what is used, and the batch-7 contract's derivation 1.2 records the role of evaluation.
- In items/thm-hh-hopf-maschke-integral-averaging.md, Facts & Assumptions [F6] attributed the general finite-dimensional vector-space basis/complement fact to lem-hh-finite-matrix-and-module-preliminaries, whose Statement only supplies the submodule-complement result for finite direct sums of simple modules. [F6] now states that precise result. Proof step 2.2 explicitly constructs the vector-space projection by extending a basis of the left ideal using a finite basis of H. The batch-7 contract now uses [F6] only for step 2.1 and its derivation 2.2 records the local finite-dimensional construction.

Neither repaired item had a verification.judge record to remove. Neither edit changes a theorem statement or dependencies.

Required checks after the repair:

- Reflow on both repaired items — unchanged.
- Precheck on each repaired item — PASS, 1 checked, 0 failing.
- node tools/proof-layout.mjs items/thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective.md items/thm-hh-hopf-maschke-integral-averaging.md — 2 items, 9 steps, 0 defects.

No other item or page prose was edited. No confirmed defect remains outside my edit scope.

## Source checks

- Paolo Saracco, Notes on Hopf Modules, Integrals and Frobenius Hopf Algebras: §3, Theorem 3.6 and proof give the dual action and Hopf-module construction; §4.1, Lemma 4.2 obtains the one-dimensional dual integral space from the Hopf-module isomorphism; §4.2, Lemma 4.4 and Theorem 4.5 give the integral/Casimir identity and semisimplicity criterion; §4.3, Proposition 4.13 characterizes Frobenius forms, and Theorem 4.22 gives the finite Hopf algebra Frobenius implication. [Source PDF](https://paolo.saracco.web.ulb.be/Material/2019-06-12_Structure%20Theorem_course%20notes.pdf)
- Erasmus Mini-Course on Hopf Algebras: Lecture 6, Theorem 6.3 states the dual Hopf-module, integral-dimension, and antipode-bijectivity results; Theorem 6.4 and Definition 6.5 state the finite-dimensional Frobenius criterion; Lecture 7, Theorem 7.1 gives the normalized-integral Maschke criterion and averaging section. [Course PDF](https://www.fc.up.pt/pessoas/clomp/Adana-lectures.pdf)

## Page verdicts

- finite-hopf-integrals-frobenius-duality-and-maschke: **Pass.** Its summary matches the proved scope, distinguishes the left/right integral conventions, and correctly limits the semisimplicity and antipode caveats.
- finite-hopf-integrals-frobenius-duality-and-maschke-examples: **Pass.** The three examples match the assigned calculations and preserve the characteristic and primitive-root hypotheses.

## Unedited defects and blockers

None. No blocker.

## Coverage note

All nine batch-7 items and both assigned pages were reviewed, along with the relevant item dependency chain and the five declared prerequisite page summaries. I did not audit unrelated items placed on those broader prerequisite pages.
