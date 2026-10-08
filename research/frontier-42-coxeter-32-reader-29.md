# Reader 29 — frontier-42-coxeter-32, batch 29

Independent Step-5a review; current engine state was `5a-read`. No judgments or certifications are supplied.

## Opened inventory

Both assigned page files were opened completely: `library/coxeter-groups/coxeter-euler-forms-and-sortable-chamber-cones.md` (A) and its `-examples.md` companion (B).

All 18 assigned items were opened completely, in dependency order (definitions read before their deferred justifiers):

- `def-cg-coxeter-oriented-euler-form-and-c-sorting-word`
- `lem-cg-positive-span-of-transported-simple-roots`
- `lem-cg-coxeter-word-transport-and-form-independence`
- `lem-cg-finite-dihedral-subsystems-and-canonical-roots`
- `lem-cg-finite-rank-two-inversion-set-recognition`
- `lem-cg-greedy-sorting-word-and-rank-two-alignment`
- `lem-cg-weak-parabolic-projection-and-cover-joins`
- `def-cg-sortable-element-skip-roots-and-cone`
- `lem-cg-uniform-omega-positive-and-aligned-sortability`
- `def-cg-initial-letter-sortable-projection`
- `lem-cg-sortable-recursion-output-and-initial-choice-independence`
- `lem-cg-sortable-skips-basis-and-cover-decomposition`
- `lem-cg-sortable-cone-criterion-and-projection-monotonicity`
- `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`
- `cex-cg-rank-two-inversion-set-violating-closure`
- `ex-cg-euler-and-skew-form-in-a3`
- `ex-cg-source-sink-move-and-sign-convention`
- `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`

External supplier definitions or complete Statements opened to check the imported interfaces (their complete proofs have not been independently audited):

- `def-cg-canonical-reflection-homomorphism`
- `def-cg-coxeter-diagram-components-and-finite-type`
- `def-cg-finite-reflection-arrangement-and-spherical-chambers`
- `def-cg-geometric-inversion-set`
- `def-cg-left-right-weak-order-and-descents`
- `def-cg-parabolic-quotient-and-two-sided-minima`
- `def-cg-real-coxeter-form-and-reflection`
- `def-hh-coxeter-matrix-word-group-and-length`
- `def-poset-interval-and-finiteness-conditions`
- `lem-cg-bounded-weak-order-join-construction`
- `lem-cg-diagram-products-and-invariant-form-comparison`
- `lem-cg-dual-action-and-chamber-faces-exist`
- `lem-cg-reflection-form-invariance-and-rank-two-orders`
- `lem-cg-reflection-representation-descends-and-root-norms`
- `lem-cg-weak-order-is-a-graded-partial-order`
- `lem-cg-weak-order-prefix-property-and-left-translation`
- `lem-hh-dihedral-root-recurrence-and-root-sign`
- `thm-cg-dual-chamber-intersections-and-point-stabilizers`
- `thm-cg-finite-chamber-tiling-and-coset-face-identification`
- `thm-cg-finite-parabolic-longest-element-and-opposition`
- `thm-cg-finite-type-positive-definite-criterion`
- `thm-cg-parabolic-intersections-and-coset-factorization`
- `thm-cg-root-inversion-formulas-and-strong-exchange`
- `thm-cg-root-length-criterion-and-faithfulness`
- `thm-cg-root-sign-and-simple-reflection-positivity`
- `thm-cg-weak-order-meet-semilattice-and-finite-lattice`
- `thm-hh-coxeter-exchange-deletion-and-faithfulness`
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`

## Independent mathematical review

The sign convention is `N(w)` for roots made negative by the left action of `w`; right weak order uses `N(w^{-1})`. The Euler normalization is `E+E^T=2B`, with the lower-triangular Euler matrix, while the matrix whose columns are Coxeter prefix roots is upper unitriangular. All sortable, skip-cone and projection statements on this pair have finite-type hypotheses; the early scan and word-transport lemmas do not require finite type.

I traced the positive-span induction, fixed-root commutation criterion, plane stabilizer construction, finite dihedral angular enumeration, rank-two recognition/simple-root induction, greedy scan, parabolic projection adjunctions and cover deletion. I then checked the rank/length sortable induction, commuting initial-letter choices, forced/unforced skip induction, confinement/cover decomposition, comparable cone criterion, retained-simple-generator auxiliary lemma, mixed-cover monotonicity, full cone criterion and generic approximation of cone boundary points. The A2 actions and both A3 form/root calculations were checked from their displayed matrices and reflection formulas. No exceptional-type computation is used to justify a uniform assertion.

The contract's local derivations and boundary evidence were compared with the authored arguments. Supplier quotations were checked against current sections. Some contracts quoted obsolete complete supplier statements; those quotations were refreshed without editing their producers. Contract and author decision records were not treated as mathematical acceptance.

## Repairs and evidence

| Carrier and exact location | Confirmed defect and repair | Evidence |
| --- | --- | --- |
| `lem-cg-coxeter-word-transport-and-form-independence`, Statement (5), Proof 4.1 and trailing references in 5.1 | Made the column convention explicit and corrected “lower” to “upper unitriangular”; cited the completed converse in 3.1. | The displayed expansion has coordinates only in rows i≤j. Already in A2 the columns are (1,0) and (1,1), giving an upper matrix. |
| `lem-cg-finite-dihedral-subsystems-and-canonical-roots`, Statement (3), Facts F13, Proof 6.1, 9.1 and 12.1 | Corrected the mixed matrix/group expression to `w t_{e_s} w^{-1}`. Established a nontrivial rotation from two nonproportional roots rather than invoking the as-yet-unconstructed extreme pair. Removed the external F13 theorem as a proof supplier and explicitly stated the canonical positive-spanning/extremality characterization already proved locally. | Root conjugation is the opened inversion-dictionary Statement (1). The given plane is root-spanned; the two distinct restricted reflections produce a nonidentity rotation. Proof 10.1–12.1 proves positive spanning and uniqueness of the root on an extreme ray. |
| `lem-cg-weak-parabolic-projection-and-cover-joins`, Proof 7.1 | Replaced the conflicting `y'=ys` by `y'=yr` for r∈J. | The fixed s is outside J, whereas y and its predecessor lie in W_J. The opened support theorem and weak-cover characterization supply r∈J. |
| `def-cg-sortable-element-skip-roots-and-cone`, Definition (2), and its contract boundaries | Qualified the raw omitted *position* by the chosen Coxeter word. Corrected contract claims that identity has no skips, the complement of selected positions is finite, and every rank-one skip has i=0. | Commuting word swaps change numeric positions. At identity each generator is omitted immediately; for rank one v=r the second occurrence is omitted after prefix r, yielding −e_r. |
| `lem-cg-uniform-omega-positive-and-aligned-sortability`, Proof 7.2 | Rebuilt the reflection-sequence restriction argument inside the intrinsic standard parabolic. The original ambient argument allowed a singleton without establishing that it was an angular endpoint, although the recognition criterion requires an endpoint singleton. | The opened intrinsic presentation/length theorem and root-subsystem identity identify every intrinsic root plane and angular list with the ambient list. Recognition can therefore be applied intrinsically, and inversion intersection identifies its word with v_J. This also establishes the reusable restriction argument without a sortability assumption. |
| `lem-cg-sortable-skips-basis-and-cover-decomposition`, Proof 7.1 | Bound its augmented-sequence restriction to that explicit intrinsic argument. | The supplier's repaired Proof 7.2 supplies the exact reduced reflection-sequence restriction needed for the unforced-skip insertion proof. |
| `def-cg-initial-letter-sortable-projection`, Definition introduction | Put the identity branch before choosing an initial letter, explicitly including empty S; corrected the Coxeter-word clause locator to (1),(3). | Empty S has no initial letter. Every nonidentity input has positive rank; the existing recursion base and lexicographic descent then apply without an undefined choice. |
| `lem-cg-sortable-cone-criterion-and-projection-monotonicity`, Statement (3), and `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`, Statement (3) | Replaced the ill-typed claim that a fiber in W is itself a union of geometric chambers. Fibers now *index* the chambers whose union is the cone. | The maps have domain W, while chambers are subsets of V. The displayed union equality is preserved exactly. |
| `cex-cg-rank-two-inversion-set-violating-closure`, opening, Proof 1.1, new Statement (v)/Proof 3.3 | Established finiteness from the A2 presentation before using finite-type dihedral suppliers, distinguished reflection names from root vectors, and supplied the closed non-inversion set promised by the B-page summary. | Relations reduce words to 1,s,t,st,ts,sts. The computed inversion table omits the singleton {e_s+e_t}, which is closed as already shown in 1.2. Added the presentation dependency and F8. |
| `ex-cg-source-sink-move-and-sign-convention`, Statement (ii), Proof 4.1 | Distinguished conjugacy of forms from reversal of orientation on fixed canonical roots; displayed the positive entry as −K=1. | The matrices give omega_c(e1,e2)=1 and omega_c'(e1,e2)=−1, while the nine-pair transport calculation is unchanged. |
| Bibliography locators in the word-transport, positive-span, finite-dihedral, uniform-positivity, skip-basis, cone-criterion, final-theorem, source-sink and A3-skip items | Corrected nonexistent book §1.7, root material incorrectly attributed to Bruhat-order §§2.1–2.2, and overly broad chamber claims attributed to weak-order §3.2. Distinguished the statement and proof locations of Reading–Speyer Theorem 6.3, and labelled the Reading sorting-word background as background rather than a positive-span induction. | The opened book contents identify §1.4 (exchange), §2.4 (parabolics), §3.2 (lattice), §3.3 (word property), and §§4.2,4.4,4.5 (representation, roots, subgroups). The source PDF places the cone theorem's statement on p.32 and proof on p.37. |
| A-page “Ordered construction and proof contracts” prose | Corrected the skip definition's direct justifier, qualified first omissions for sortable words, and removed the unsupported promise about every reflection-subgroup subset. | The actual assigned definition names the skip-basis lemma. The plane lemma proves the full plane subsystem and reversal; its subplane clause is Q=P, not an arbitrary reflection-subgroup theorem. |

Affected derivations, citation-use mappings, current supplier quotations and boundary evidence were updated in `research/frontier-42-coxeter-32-batch-29.proof-contracts.json`. The source-sink and A3-skip placeholder boundary entries and the final theorem's placeholder entries now give actual cases and locations. There is no `verification.judge` record on any changed item. No new judge or audit stamp was added.

## Sources actually consulted

- [Reading–Speyer, arXiv:0803.2722v3](https://arxiv.org/pdf/0803.2722): read the complete relevant arguments of Lemma 3.3 (p.18), Proposition 3.11/Lemma 3.12/Proposition 3.13 (pp.20–22), Proposition 4.1/Theorem 4.3 (pp.23–25), Proposition 6.11/Lemma 6.12/Theorem 6.1/Corollary 6.2/Theorem 6.3 (pp.34–37). In particular Lemma 6.12 retains every simple generator below an input under the smaller-rank/smaller-upper-length monotonicity hypotheses; its complete proof confirms the induction required by the local mixed-cover argument. Also inspected the definitions, lemma locators and referenced Section-5 statements; did not read every Section-5 source proof.
- [Björner–Brenti, complete author-hosted book](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf): opened contents pp.vii–viii and the returned root/inversion passages around §4.4, pp.102–104. Used the contents to repair erroneous section pointers; this was not a complete source-book audit.
- [Reading, arXiv:math/0512339](https://arxiv.org/pdf/math/0512339): opened the source and inspected Example 1.6/Figure 2, pp.3–4, which label A3 elements by sorting words for c=s2s1s3. Did not claim to read this paper's complete arguments.

## Page verdicts and remaining findings

- **A: `coxeter-euler-forms-and-sortable-chamber-cones`.** No remaining mathematical defect identified after the recorded repairs. The reviewed local tower supplies the finite-type skip basis, cover decomposition, projection and chamber-union claims. Reader conclusion only; Step 5b retains adjudication authority.
- **B: `coxeter-euler-forms-and-sortable-chamber-cones-examples`.** No remaining defect identified. The A2 counterexample now expressly supplies the closed non-inversion witness claimed by the existing summary. Both Euler matrices, the conjugation check, all three A3 skip roots and the chamber inequalities agree. B-page prose was not edited.

No uneditable finding, proposed withdrawal or unresolved mathematical blocker remains from this review.

## Validation and limits

Every changed item was run through `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. The 11 changed proof-bearing items pass; the two definitions have zero applicable proofs and no failures. After the final item edit and formatter, the batched `node tools/proof-layout.mjs` command on all 13 changed item paths reports **142 steps, 0 defects**. Scoped rendercheck on those 13 items and both pages reports no errors. The first rendering attempt caught a missing TeX command separator introduced during repair; it was fixed before the final checks.

`node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-29.proof-contracts.json --strict` reports **18/18 items, 0 errors, 1 warning**. The remaining warning concerns the broad trailing fact bracket on finite-dihedral Proof 8.2; that step explicitly identifies each fact's use in its text. A normalized current-source quotation check has no mismatches. These are local mechanical checks, not independent adjudication or acceptance.

Coverage is the two assigned pages, all 18 assigned item bodies, their local contracts, and the listed external supplier definitions/Statements needed to check interfaces. External supplier proofs and the entire transitive prerequisite corpus were not independently re-audited. No rendered evidence bundle was provided in this dispatch; source Markdown and the explicitly listed current artifacts were used. No other batch, published carrier, B-page prose, manifest or plan-spec was edited. The shared workspace already contained extensive unrelated changes; this report claims only the edits listed above.
