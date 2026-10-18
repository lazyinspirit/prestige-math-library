# Step 3a reader report — batch 48

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader-48  
Batch: 48

## Scope and opened inventory

The live autopilot status identified this run as running. Batch 48 assigns two pages and 14 items: 11 items on the A page and three on its B companion.

Assigned pages opened:

- `vertex-algebra-state-field-foundations`
- `vertex-algebra-state-field-foundations-examples`

The required prerequisite page `affine-current-algebras-virasoro-and-sugawara` was also opened.

Assigned A-page items opened in dependency order:

1. `def-formal-distribution-on-a-vector-space`
2. `lem-affine-vacuum-character-at-level-k`
3. `def-vertex-algebra-state-field`
4. `def-universal-affine-vacuum-module`
5. `lem-locality-determines-formal-ope-coefficients`
6. `lem-affine-vacuum-module-pbw-basis`
7. `lem-affine-translation-derivation`
8. `lem-state-field-reconstruction-from-local-generators`
9. `lem-affine-vacuum-module-is-restricted`
10. `lem-affine-current-fields-are-local`
11. `thm-universal-affine-vertex-algebra`

Assigned B-page items opened after their suppliers:

- `cex-truncated-fields-need-not-be-local`
- `ex-commutative-differential-algebra-vertex-algebra`
- `ex-critical-level-affine-sl2-vertex-algebra`

External and cross-batch item context opened to check the assigned arguments:

- `def-formal-laurent-series-and-residue`
- `def-residue-two-cocycle-on-a-loop-algebra`
- `lem-the-loop-residue-form-is-alternating`
- `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity`
- `def-untwisted-affine-central-extension`
- `def-universal-enveloping-algebra-as-a-tensor-quotient`
- `def-positive-energy-affine-module` (current run, batch 47)
- `def-special-linear-lie-algebra-sl-two`
- `def-dual-coxeter-number-for-normalized-form` (current run, batch 47)
- `def-sugawara-modes` (current run, batch 47)
- `lem-adjoint-casimir-is-positive-scalar` (current run, batch 47)
- `lem-sugawara-quadratic-modes-well-defined` (current run, batch 47)
- `def-casimir-operator-relative-to-an-invariant-form`
- `lem-the-casimir-operator-is-basis-independent-and-intertwining`
- `def-compact-real-form-of-a-complex-semisimple-lie-algebra`
- `def-loop-algebra-of-a-simple-lie-algebra`
- `def-representation-of-a-lie-algebra`
- `def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action`
- `lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy`
- `lem-finite-semisimple-cartan-root-and-string-structure`
- `def-real-form-of-a-complex-lie-algebra`
- `def-killing-form-of-a-finite-dimensional-lie-algebra`
- `thm-poincare-birkhoff-witt`
- `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`
- `thm-existence-of-a-compact-real-form`

The batch contract file `research/non-ml-math-remaining-81-2026-10-18-batch-48.proof-contracts.json` was opened and its citations, step-input mappings, routine-step fields, and boundary records were compared with the current item carriers. The contracts are evidence only; the findings below come from the mathematical review.

## Source checks

I checked the formal delta and OPE conventions against Nozaradan, *Introduction to Vertex Algebras*, §§1.3–1.4 and §3.2; the proof of Dong's lemma in §3.5; the vertex-algebra axioms in §4.2; and the field-uniqueness and n-product arguments in §§4.3.2–4.3.3: <https://arxiv.org/pdf/0809.1380>.

For reconstruction, I read Arakawa–Moreau, *Arc spaces and vertex algebras*, §2.11, Theorem 2.6 and its proof (pp. 46–47), and §3.1, Lemma 3.1 and Proposition 3.1 (pp. 67–68): <https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf>. I also checked the matching hypotheses of Theorem 3.7 (Kac Theorem 4.5) and its construction notes in Dominic Joyce's Oxford lecture notes, Lecture 3, §§3.2–3.3: <https://people.maths.ox.ac.uk/joyce/VertexAlgebras2021/VA3%2B4.pdf>.

The critical-level distinction was compared with Ben-Zvi–Frenkel, *Geometric Realization of the Segal–Sugawara Construction*, §3.4.1: <https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf>. The remaining sl2 normalization and denominator computations were checked directly from the displayed brackets and Casimir.

## Review and page verdicts

- **A page `vertex-algebra-state-field-foundations`:** Its summary matches the assigned definitions and proofs. It preserves the formal, non-super convention and makes no analytic OPE claim. The affine vacuum module, current commutator, reconstruction, all-level existence, and separation from the Sugawara construction are stated at the scopes supported by the assigned items.
- **B page `vertex-algebra-state-field-foundations-examples`:** Its summary matches the counterexample and both examples. The constant matrix fields refute truncation-implies-locality; the differential-algebra example verifies the stated axioms; the critical-level example does not claim an alternative stress tensor.
- The assigned PBW rewriting proof, translation derivation, restrictedness induction, current-field commutator reindexing, formal locality/OPE coefficient formula, and local-generator reconstruction proof were checked against their stated hypotheses. The reconstruction proof's field closure, Dong locality step, creativity, translation covariance, spanning, injectivity, and uniqueness all follow from its displayed argument.
- No defect was found in an assigned item or assigned page prose. No item or page was edited.

## Findings not editable in this assignment

1. `lem-adjoint-casimir-is-positive-scalar`, Proof 1.1, uses the claim that an endomorphism of a nonzero finite-dimensional complex vector space has an eigenvalue. This requires a root of its nonconstant characteristic polynomial. No listed dependency or proof step supplies algebraic closure; the existing `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` supplies the needed result. Add that supplier and make the characteristic-polynomial inference explicit. This current-run supplier is in batch 47, outside this assignment.
2. `def-dual-coxeter-number-for-normalized-form`, Statement and Facts & Assumptions, uses `lem-adjoint-casimir-is-positive-scalar` to obtain a positive scalar for every finite-dimensional complex simple `g`. That lemma assumes a compact real form; this item's proof also lists “its compact real form” as Given, while the statement does not assume one. The current dependencies contain the definition of a compact real form but do not establish its existence or include `def-axiom-of-choice`. The existing `thm-existence-of-a-compact-real-form`, Statement, explicitly assumes AC. Add that theorem and AC to the dependency/assumption chain and carry AC to consumers, or supply a choice-free existence argument. This current-run supplier is in batch 47, outside this assignment.
3. `def-sugawara-modes`, Definition, lines 38–39, gives an orthonormal-basis formula by referring to “the compact real form” for arbitrary simple `g`. Its dependencies define compact real forms but do not establish existence or import the AC-dependent existence theorem above. State the compact form as an input to this optional formula, or add the existence theorem and its AC premise to the dependency chain. The dual-basis definition itself does not use this optional expression. This current-run supplier is in batch 47, outside this assignment.

There is no blocker to completing the batch review. No assigned carrier changed, so reflow, precheck, and proof-layout were not run.
