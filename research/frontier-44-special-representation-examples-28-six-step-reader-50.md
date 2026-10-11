# Reader 50 — batch 50

Independent Step 3a review of the current authored mathematics. This report supplies observations and repairs, not a judge stamp or certification. No item was withdrawn.

## Page verdicts and blockers

- **A — `ariki-categorification-and-graded-decomposition-numbers`: hold for placement and source-citation repair.** The assigned mathematical arguments are coherent after the repairs below. The carrier lists 26 A-items while the manifest assigns 30: the four generic local/support/tower helpers have no library home. Page inventory metadata is outside the reader's A-page-prose permission and was not edited. The parent Fock supplier also still has the malformed F3 citation described below.
- **B — `ariki-categorification-and-graded-decomposition-numbers-examples`: locally sound; parent dependency hold remains.** Read its complete prose and both items. Checked the local algebra, degree shifts, two Fock vectors, Hom pairing and distinct classes under specialization. No defect in B-page prose or its two items was found; neither was edited.

Two additional outside-batch defects observed earlier were corrected by another writer before handoff. They are recorded as historical findings, with no purported binding to the original raw bytes. There is no unfinished assigned proof repair. The live placement and malformed-citation defects remain for the lead/producer.

## Opened assigned inventory

Both page carriers were opened in full:

- `library/special-topics-in-representation-theory/ariki-categorification-and-graded-decomposition-numbers.md`.
- `library/special-topics-in-representation-theory/ariki-categorification-and-graded-decomposition-numbers-examples.md`.

All 32 assigned item mathematical bodies were read, in local supplier-before-consumer order (the independent generic helpers were reviewed as a separate supplier chain). Supplemental outside interfaces were opened as the arguments required them. Each item below includes its title, statement/definition, facts, argument and remarks in the review. Frontmatter and contracts were also checked.

- `items/def-tableau-domination-order-garnir-tableaux-and-bricks.md` — no additional local defect found.
- `items/lem-generic-nondegenerate-local-inverse-tables.md` — no additional local defect found.
- `items/lem-integer-cyclic-presentation-descends-the-simple-head-generator-line.md` — repaired.
- `items/lem-integer-color-degenerate-hecke-klr-local-inverse-tables.md` — no additional local defect found.
- `items/lem-generic-cyclotomic-type-a-support-is-bounded-by-rank.md` — no additional local defect found.
- `items/lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower.md` — no additional local defect found.
- `items/lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels.md` — repaired.
- `items/lem-standard-fock-vectors-expand-in-the-upper-global-basis.md` — no additional local defect found.
- `items/def-graded-module-and-projective-grothendieck-groups-for-klr-towers.md` — no additional local defect found.
- `items/def-nondegenerate-root-of-unity-level-one-hecke-regime.md` — repaired.
- `items/def-graded-cartan-pairing-between-projectives-and-modules.md` — repaired.
- `items/def-graded-specht-module-by-homogeneous-standard-tableaux.md` — no additional local defect found.
- `items/def-integral-form-of-the-cyclotomic-hecke-klr-block.md` — no additional local defect found.
- `items/lem-degree-and-codegree-of-standard-tableaux.md` — no additional local defect found.
- `items/lem-graded-algebra-isomorphism-transports-the-graded-module-category.md` — no additional local defect found.
- `items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md` — repaired.
- `items/prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux.md` — repaired.
- `items/thm-graded-specht-module-has-homogeneous-tableau-basis.md` — no additional local defect found.
- `items/lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator.md` — no additional local defect found.
- `items/thm-graded-specht-restriction-has-the-removable-node-filtration.md` — no additional local defect found.
- `items/thm-graded-specht-classes-realize-standard-fock-vectors.md` — no additional local defect found.
- `items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md` — no additional local defect found.
- `items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md` — no additional local defect found.
- `items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md` — no additional local defect found.
- `items/thm-graded-specht-heads-classify-the-graded-simple-modules.md` — no additional local defect found.
- `items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md` — repaired.
- `items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md` — no additional local defect found.
- `items/def-graded-adjustment-polynomials-in-positive-characteristic.md` — repaired.
- `items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md` — repaired.
- `items/rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers.md` — repaired.
- `items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md` — no additional local defect found.
- `items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md` — no additional local defect found.

## Repairs and mathematical evidence

1. **Integer cyclic descent, Proof 5.1.** Added the missing lattice-freeness derivation: clear rational denominators to embed the finite orbit in an integer coordinate group, then split a subgroup by its last-coordinate projection and induct. This closes the unstated finitely-generated torsion-free prerequisite without new suppliers or choice. The regular-trace radical and pointed-head descent were checked against the opened radical, Wedderburn, simple-module, Schur and finite-root-field interfaces.
2. **Nondegenerate regime, Proof 1.2.** Replaced the unsupported primitive-root-existence/cyclicity discussion with the exact elementary implication from the given root's order: in characteristic p, divisibility p|e would force xi^(e/p)=1. This proves p does not divide e without asserting that every characteristic-zero field contains every primitive root.
3. **Graded Cartan pairing, Proof 1.3.** Corrected a false computation: the degree-zero Hom dimension is the coefficient of q^0, whereas evaluation at q=1 sums all homogeneous dimensions. Evidence: the opened homogeneous-Hom definition and sesquilinearity theorem. The pairing definition and its shift formula were preserved.
4. **Extremal-word lemma, Statement and Proof 1.1.** Added the essential nonzero-module hypothesis for selecting a nonzero extremal word. Explicitly treated zero character separately; virtual character injectivity still includes zero. The tail-reconstruction and normalized nil-Hecke factorial interfaces were opened and matched.
5. **Shifted-degree proposition, Proof 2.1.** Supplied the missing justification that the intermediate tableaux along a reduced word to a standard tableau are standard: inversion length increases at each consecutive-value swap, so no comparable row/column node pair can be inverted temporarily and later restored. The degree summation and Garnir exchange calculations were preserved.
6. **Categorification transport, Proof 1.1.** Corrected the assertion that an algebra isomorphism is the identity on vector spaces. Restriction of scalars preserves the underlying graded module vector space, and the rank-zero algebra isomorphism fixes the vacuum. The geometric-parameter and separate Hom/tensor pairing hypotheses were checked against the actual suppliers.
7. **Reduction, Proof 2.1.** Closed the inter-field inference: expand both classes in the restricted Specht bases, use the common tableau characters and their independence to identify coefficients, then apply the field-independent standard-coordinate images. Also corrected the equation's target from G0 to the restricted integral weight dual. This follows the exact basis reduction in BK Lemma 5.16; character injectivity within one field alone was insufficient.
8. **Adjustment definition, Proof 3.1.** Corrected the domain of Psi: it sends the reduction class [J(nu)] to the upper vector D_nu, rather than taking D_nu as an input module class. The defining expansion and its nonnegativity, diagonal and bar-invariance claims remain intact.
9. **Adjustment factorization, Proof 3.1.** Removed the invalid inference from undetermined entries to nonidentity. The factorization alone computes no general off-diagonal entry and does not force identity. The original factorization claim was preserved.
10. **Final boundary remark, source comparison.** Preserved and supported the nonidentity observation with Fayers' explicit off-diagonal ordinary adjustment entry at e=3, characteristic 2, rank 8. In his abacus notation the core (1,1) has bottom positions (0,4,5); the ordinary row (3,2,2,1) and column (4,4) are the off-diagonal case of Corollary 2.4. The proved conjugate-sign dictionary yields this page's a_(2,2,2,2),(4,3,1)(1)=1. This is explicitly a bibliographic comparison, not an external premise replacing the local factorization proof.

No Definitions changed. The extremal-word nonzero qualification is the only changed proved supplier interface. Its old/current dependencies are unchanged. Current-run manifests and a source search of items identify exactly five direct/indirect consumers: reduction; positive-characteristic cellular/crystal label comparison; adjustment definition; adjustment factorization; final boundary remark. All are assigned here and were checked after the repair. They select extremal words only for nonzero reductions or for a nonempty support in a virtual relation. No published or another-batch consumer appeared in that source search.

The affected contract derivations were updated. Incorrect contract boundary descriptions were corrected: the vacuum adjustment expansion has one label and entry 1; d_i(empty) is delta_(i,0); a zero Garnir image does not make its kernel line zero; a nonzero generator image does not make the Specht quotient injective; and the head-normalization locators now point to the actual current steps. Twenty stale verbatim source quotations were refreshed from the already opened current source sections, including the newly explicit nonzero hypothesis. Existing boundary statuses were not upgraded. Stale judge records were removed where present; the final changed carriers have no judge record.

## Authoritative source checks

- [Brundan–Kleshchev–Wang, Graded Specht modules](https://arxiv.org/pdf/0901.0218), printed pp. 16–22: Lemma 4.1, standard-basis/triangularity statements and their arguments, the complete simultaneous-induction proof of Theorem 4.10, and Theorem 4.11 with its complete proof. These fix the selected-word dependence, grading, and bottom-to-top restriction order. The local restriction proof supplies its own universal-ring/seminormal descent rather than treating the source's ungraded branching reference as a local proof.
- [Brundan–Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras](https://arxiv.org/pdf/0901.4450), printed pp. 52–53, Section 5.6: complete Lemma 5.16 and Theorems 5.17–5.18 arguments. Matched the field comparison, adjustment factorization, and characteristic-p label induction. The source's lattice citations were not substituted for the local rational-Garnir and trace-radical proofs.
- [Fayers, Weight two blocks of Iwahori–Hecke algebras in characteristic two](https://webspace.maths.qmul.ac.uk/m.fayers/papers/wt2.pdf), printed pp. 5–9, Section 1.4 and Section 2: read the pyramid notation, relevant table, complete decomposition-number argument and Corollary 2.4; checked the explicit e=3 abacus witness above. Also consulted Fayers–Tan's [weight-three paper](https://webspace.maths.qmul.ac.uk/m.fayers/papers/adjwt3mf.pdf), Section 2.2, Theorem 2.2(2), which restates the weight-two result. The original Fayers argument, rather than that restatement alone, supplied the evidence.

## Opened outside supplier interfaces

The following 83 direct outside dependencies were opened at their relevant Statement/Definition or Remark interfaces. Selected proof sections were additionally read where needed (notably the Bruhat identification, bounded-monomial spanning, transition-form identification and the modular triangularity witness). This list is not a claim to have re-audited every upstream proof.

- `items/cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading.md`.
- `items/cor-dj-bridge-specialization-and-composition-multiplicity-dictionary.md`.
- `items/cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular.md`.
- `items/def-affine-and-cyclotomic-type-a-hecke-algebras.md`.
- `items/def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-bruhat-order-on-the-symmetric-group.md`.
- `items/def-cellular-algebra-basis-and-cell-module.md`.
- `items/def-contravariant-form-on-an-integrable-quantum-highest-weight-module.md`.
- `items/def-cyclic-affine-type-a-cartan-datum.md`.
- `items/def-cyclotomic-klr-diagram-duality-and-graded-module-duals.md`.
- `items/def-cyclotomic-klr-induction-and-restriction-functors.md`.
- `items/def-cyclotomic-klr-quotient-at-a-dominant-weight.md`.
- `items/def-degenerate-affine-hecke-algebra.md`.
- `items/def-divided-power-klr-idempotents-and-projectives.md`.
- `items/def-dominance-order-on-partitions.md`.
- `items/def-e-regular-and-e-restricted-partitions.md`.
- `items/def-finitely-generated-graded-projective-module.md`.
- `items/def-generic-type-a-hecke-algebra.md`.
- `items/def-graded-grothendieck-group-shift-module-and-cartan-map.md`.
- `items/def-graded-ring-module-bimodule-and-internal-shift.md`.
- `items/def-hecke-jucys-murphy-elements-and-q-contents.md`.
- `items/def-kac-moody-root-lattice-height-and-positive-cone.md`.
- `items/def-klr-grading-and-diagrammatic-composition.md`.
- `items/def-klr-induction-and-restriction-bimodules.md`.
- `items/def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention.md`.
- `items/def-level-one-partition-fock-space-and-node-residues.md`.
- `items/def-lower-global-basis-of-a-quantum-highest-weight-module.md`.
- `items/def-partition-young-diagram-and-conjugate-partition.md`.
- `items/def-projective-simple-hom-pairing-on-grothendieck-groups.md`.
- `items/def-quantum-characteristic-of-an-invertible-hecke-parameter.md`.
- `items/def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum.md`.
- `items/def-removable-and-addable-nodes-of-a-partition.md`.
- `items/def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks.md`.
- `items/def-symmetric-group-level-one-residue-and-partition-label-convention.md`.
- `items/def-type-a-affine-presentations-and-charged-cyclotomic-quotients.md`.
- `items/def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras.md`.
- `items/def-type-a-hecke-specht-module-and-cell-form.md`.
- `items/def-upper-global-basis-by-the-contravariant-form.md`.
- `items/def-young-tableau-standard-tableau-and-shape.md`.
- `items/lem-bruhat-order-basic-properties-for-permutations.md`.
- `items/lem-cyclotomic-hecke-algebra-basis-and-dimension.md`.
- `items/lem-cyclotomic-hecke-bounded-ordered-monomials-span.md`.
- `items/lem-cyclotomic-klr-block-satisfies-the-hecke-relations.md`.
- `items/lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient.md`.
- `items/lem-dj-bridge-murphy-cellular-basis-and-cell-form.md`.
- `items/lem-dj-bridge-sign-automorphism-and-star-dual.md`.
- `items/lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage.md`.
- `items/lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head.md`.
- `items/lem-klr-one-step-simple-restriction-induction-and-first-dot-index.md`.
- `items/lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas.md`.
- `items/prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras.md`.
- `items/rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity.md`.
- `items/rem-general-type-a-decomposition-numbers-remain-unsolved.md`.
- `items/thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular.md`.
- `items/thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism.md`.
- `items/thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric.md`.
- `items/thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero.md`.
- `items/thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module.md`.
- `items/thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module.md`.
- `items/thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual.md`.
- `items/thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell.md`.
- `items/thm-graded-projective-and-simple-classes-have-shift-orbit-bases.md`.
- `items/thm-hecke-jucys-murphy-action-is-dominance-triangular.md`.
- `items/thm-integrable-quantum-highest-weight-module-exists-and-is-unique.md`.
- `items/thm-irreducible-quotient-adjoins-a-root.md`.
- `items/thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple.md`.
- `items/thm-klr-pbw-basis-theorem.md`.
- `items/thm-projective-hom-pairing-is-additive-and-graded-sesquilinear.md`.
- `items/thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention.md`.
- `items/thm-schurs-lemma-for-modules.md`.
- `items/thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis.md`.
- `items/thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis.md`.
- `items/thm-separated-hecke-residues-give-seminormal-idempotents-and-bases.md`.
- `items/thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda.md`.
- `items/thm-simple-modules-over-semisimple-rings.md`.
- `items/thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions.md`.
- `items/thm-standard-basis-of-the-generic-type-a-hecke-algebra.md`.
- `items/thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis.md`.
- `items/thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations.md`.
- `items/thm-the-symmetric-group-has-the-coxeter-presentation.md`.
- `items/thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible.md`.
- `items/thm-wedderburn-artin-theorem.md`.

Additionally opened `items/def-the-node-order-and-n-i-exponents-for-fock-space.md` (Definition and Verification, including the splitting identity and calibration) and `items/lem-integrable-rank-one-actions-force-the-quantum-serre-relations.md` (Statement) to check exact node coefficients and the intended target of the defective F3 link.

## Findings outside edit permission

- **`def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` — false-claim, fatal.** Location: Remarks, Well-definedness, final sentence: sign change tau_a -> -tau_a allegedly flips relations (4), (6), and (7). Evidence/closure: The quadratic relation (4) is tau_a^2 e(nu)=Q(y_a,y_{a+1})e(nu). Replacing tau_a by -tau_a leaves its square, and hence Q, unchanged; only the linear dot constants and cubic braid difference change sign. The assigned local dictionary correctly uses the same quadratic Q with psi=-tau. Correct the source remark to say that (4) is preserved while (6) and (7) change sign. This draft is owned by current-run batch 46. Final recheck found this corrected by another writer: the current remark says that (4) is preserved and (6), (7) change sign. This entry preserves the originally observed defect as requested. I did not retain the original raw bytes or their digest and cannot bind them to an immutable producer pre-reader snapshot; observed_source is therefore null. The corrected current bytes are not represented as the old defect.

- **`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` — overstrong-title-or-statement, fatal.** Location: Frontmatter title: Cyclotomic Hecke blocks inherit a nontrivial Z-grading. Evidence/closure: The Statement explicitly permits a trivial grading and gives one-dimensional level-one rank-two e=3 blocks as examples. Such a unital one-dimensional graded algebra is concentrated in degree zero. The title therefore asserts more than the actual theorem. Rename the title to the transported/inherited Z-grading without universal nontriviality; preserve the existing ID. This draft is owned by current-run batch 48. Final recheck found this corrected by another writer: the current title is Cyclotomic Hecke blocks inherit Z-gradings. This entry preserves the originally observed defect as requested. I did not retain the original raw bytes or their digest and cannot bind them to an immutable producer pre-reader snapshot; observed_source is therefore null. The corrected current bytes are not represented as the old defect.

- **`thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` — ill-formed, fatal.** Location: Facts & Assumptions [F3], combined wikilink containing lem-integrable-rank-one-actions-force-the-quantum-serre-relations, thm-normally-ordered-q-wedges-form-a-basis, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra. Evidence/closure: The three comma-separated item IDs are inside a single [[...]] target, so the cited target is not an existing item. I opened the intended rank-one Serre lemma: its Statement supplies the conditional Serre assertion used here. Split the citation into three resolving wikilinks (or cite only the exact supplier actually used), retaining the mathematical hypotheses. This draft is owned by current-run batch 9.

- **`ariki-categorification-and-graded-decomposition-numbers` — ill-formed, fatal.** Location: Frontmatter items list: all four assigned generic local/support/tower helper IDs are absent. Evidence/closure: The current batch-50 manifest assigns lem-generic-nondegenerate-local-inverse-tables, lem-integer-color-degenerate-hecke-klr-local-inverse-tables, lem-generic-cyclotomic-type-a-support-is-bounded-by-rank, lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower to this A-page, but none occurs in its carrier item list, and an explicit library search found no home page for any of them. They are real authored draft carriers, not planned placeholders. The lead must add their placement to the A-page inventory or supply an authorized home while reconciling the manifest. Reader permission covers A-page prose; I did not edit page inventory metadata.

The malformed Fock citation is bound to its actually observed, still-current raw SHA-256 in the findings JSON. For the two corrected historical observations, no old raw source or verified immutable pre-reader snapshot was retained; `observed_source` is null. Corrected current bytes are not claimed to be the earlier defect. The page finding has no source hash because it is an assigned page finding.

## Validation and coverage limit

Every materially changed item ran reflow followed by precheck successfully (the prose-only remark reports zero applicable proof checks). After the final item edits and formatters, one explicit batched command ran `node tools/proof-layout.mjs` on all ten changed paths: **10 items, 41 steps, 0 defects**. The same ten paths passed `node tools/rendercheck.mjs`: renderer YAML and every math span parse successfully. These are local formatting/render checks, not independent mathematical acceptance or run gates.

Coverage comprises both assigned page carriers, all 32 assigned item bodies, the direct supplier interfaces listed above, relevant additional source passages, and the scoped contracts. Deep outside categorification/global-basis supplier proofs and their full transitive libraries were not independently re-audited. No claim of whole-library coverage or mathematical certification is made. Page inventory metadata, B-page prose, other-batch sources, published content and the canonical plan were not edited. The handoff is the report plus the findings JSON; the lead/engine owns remaining routing and transitions.
