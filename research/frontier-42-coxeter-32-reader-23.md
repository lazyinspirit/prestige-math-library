# Reader 23 — frontier-42-coxeter-32, batch 23

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the relevant content clauses of `SCHEMA.md`, and the batch-23 pages manifest. The engine status confirms this run is running at Step 5a; the assigned carriers are draft. No engine transitions, judgments, certification stamps, other-batch carriers, published carriers, plan-spec, or page prose were edited.

Both assigned pages were opened completely:

- `library/coxeter-groups/weak-order-inversions-and-lattice-operations.md` (A).
- `library/coxeter-groups/weak-order-inversions-and-lattice-operations-examples.md` (B).

All nine assigned items were read completely, with the substantive item review proceeding from the definition and prefix lemma through the order lemma, meet construction, full-descent lemma, lattice theorem, examples, and counterexample:

1. `def-cg-left-right-weak-order-and-descents`.
2. `lem-cg-weak-order-prefix-property-and-left-translation`.
3. `lem-cg-weak-order-is-a-graded-partial-order`.
4. `lem-cg-bounded-weak-order-join-construction`.
5. `lem-cg-full-descent-element-characterizes-finite-type`.
6. `thm-cg-weak-order-meet-semilattice-and-finite-lattice`.
7. `ex-cg-s3-weak-order-meets-and-joins`.
8. `ex-cg-infinite-dihedral-bounded-interval-and-missing-join`.
9. `cex-cg-inversion-sets-do-not-compute-meets-and-joins`.

The following dependency definitions were opened completely: `def-hh-coxeter-matrix-word-group-and-length`, `def-cg-real-coxeter-form-and-reflection`, `def-cg-canonical-reflection-homomorphism`, `def-cg-geometric-inversion-set`, `def-cg-parabolic-quotient-and-two-sided-minima`, `def-partial-order`, `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`, and `def-lattice-distributive-lattice-and-order-ideal`.

Statements, facts, and complete relevant arguments were opened for `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `thm-cg-root-sign-and-simple-reflection-positivity`, `thm-cg-root-length-criterion-and-faithfulness`, `thm-cg-root-inversion-formulas-and-strong-exchange`, `thm-cg-finite-parabolic-longest-element-and-opposition`, and `thm-cg-parabolic-intersections-and-coset-factorization`. For `lem-hh-dihedral-root-recurrence-and-root-sign`, its statement and proof steps 1.1–7.1 were opened, including the exact-order and ambient-reducedness arguments.

The exact consumed statements were opened for `thm-double-angle-and-power-reduction-identities`, `thm-cofunction-supplementary-and-reflection-identities`, `thm-sine-cosine-signs-monotonicity-and-ranges`, and `thm-quarter-turn-values-and-shift-formulas`. Additional supplier statements were opened for `lem-cg-reflection-form-invariance-and-rank-two-orders`, `lem-cg-reflection-representation-descends-and-root-norms`, and `lem-cg-rank-two-prefix-and-chamber-length-induction`. These last seven suppliers were checked at their applied interfaces, not re-audited throughout their dependency closures.

The batch proof contracts were inspected against the item facts, proof steps, and boundary cases. The cross-batch dependency artifact was consulted as a mapping aid only; its prior verification verdicts were not adopted as mathematical evidence.

## Mathematical review

The conventions are consistent: `N(w)` consists of roots sent negative by `rho(w)`; right weak order uses `N(w^{-1})`, while left weak order uses `N(w)`. Length identities and interval translation are derived directly from length subadditivity. The inversion-containment converse removes a common first-letter descent and applies induction to the shorter element.

In the binary-meet construction, exchange proves that every common atom lies below each maximum-length common lower bound. The induction then constructs the shorter meet. In particular, step 2.1 supplies the otherwise delicate implication from `z' <=_R sx,sy` to `sz' <=_R x,y` by the inversion recursion, and separately excludes a left descent of `z'` before its length comparison. The arbitrary nonempty meet procedure strictly decreases natural length and preserves domination of all lower bounds; it needs only finitely many witnesses. The bounded join is proved to be the meet of all upper bounds.

The full-descent proof sends every positive simple root negative, uses the coordinate cone and invertibility to send all positive roots negative, and then uses the inversion cardinality and faithfulness to prove finiteness. Its parabolic instance identifies the restricted canonical representation before invoking subsystem results. The lattice theorem obtains the parabolic longest element from the length-additive coset factorization and that full-descent criterion. Empty-generator and empty-subset cases are consistent.

The A2 example computes `cos(pi/3)=1/2` from its four opened trigonometric suppliers, derives the six roots directly, and enumerates the six covers. Its down-sets, up-sets, 17 order relations, and 19 failed ordered comparisons agree with the six inversion sets. The two inversion-formula counterexamples have the claimed strict containments. The infinite-dihedral example uses ambient reducedness and exact infinite order, proves unique alternating reduced expressions, and excludes upper bounds in both orders using first and last letters respectively.

## Repairs and evidence

1. **False cone fact removed:** `lem-cg-full-descent-element-characterizes-finite-type`, Facts & Assumptions [A1], claimed a nonnegative combination of elements of `-V_+` is zero only if all coefficients vanish. Taking a zero vector with coefficient one disproves that assertion. Replaced it with coordinatewise cone closure and the needed nonvanishing under the linear bijection. The argument and theorem statement are unchanged. Updated its contract step-1.1 derivation and degenerate-form evidence.
2. **Stembridge locator repaired:** `def-cg-left-right-weak-order-and-descents` and `lem-cg-weak-order-prefix-property-and-left-translation` labeled the cited section as PDF page 5. Section 1.3 and Proposition 1.3 are on printed page 5, physical PDF page 6. Corrected the locators and the definition's contract source locator.
3. **Reading–Speyer locator repaired:** `lem-cg-weak-order-is-a-graded-partial-order`, `lem-cg-bounded-weak-order-join-construction`, and `lem-cg-full-descent-element-characterizes-finite-type` located the inversion/weak-order material on arXiv pages 4–5. The relevant paragraphs are on page 6 of v2. Corrected all three locators.
4. **Stembridge source identity repaired:** `ex-cg-s3-weak-order-meets-and-joins` attached a 1992, volume-1 journal reference to the linked paper. The linked author-hosted preprint is dated March 1995, revised September 1995, so the 1992 identification is impossible. Replaced it with the exact preprint identity and clarified printed pages 5–6 versus physical PDF pages 6–7.
5. **Dihedral source description repaired:** `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` described BB Figure 3.1 as an alternating zigzag. Its order has two alternating prefix chains sharing the minimum. Corrected that source-description clause; the example's claims were already correct.
6. **Contract quotation repair:** the counterexample contract reversed its F7 (meet) and F8 (join) source quotations, while the actual item labels, tags, and argument were correct. Swapped the quotation contents to match their existing fact labels and uses. The counterexample item bytes were not changed.

Seven assigned item files changed. No `verification.judge` record was present in any changed carrier; none remains to remove. No original Statement or Definition changed, so no downstream claim-impact repair is needed. The pages and theorem are unchanged.

## Authoritative source sections opened

- [Bjorner–Brenti, complete book](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf): Definition 3.1.1 and Proposition 3.1.2, printed pp. 65–66; Figure 3.1; Proposition 3.1.6 with proof, pp. 69–70; Theorem 3.2.1 with its complete binary/arbitrary-meet argument and bounded-join paragraph, pp. 70–71; Lemma 3.2.3, pp. 71–72. Relevant text was read from the fetched PDF rendering and `/tmp/bb.txt`; Figure 3.1 on printed page 66 (physical PDF page 75) was also visually inspected in a local rendering of the downloaded PDF.
- [Stembridge, author-hosted preprint](https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf): title-page dates and all of Section 1.3, printed pp. 5–6 (physical PDF pp. 6–7), including Proposition 1.3 and its interval-translation proof. This corroborates the conventions; the local item supplies the full argument.
- [Reading–Speyer, Cambrian fans v2](https://arxiv.org/pdf/math/0606201v2): Section 2, page 6, the finite-W inversion, right weak order, prefix, and lattice paragraphs. These are corroboration for finite W only and do not supply an infinite-type proof.

## Page verdicts and limitations

- A page `weak-order-inversions-and-lattice-operations`: mathematically supported after the local fact/citation corrections. Its prose accurately preserves finite rank versus finite group, nonempty meets, bounded joins, empty-set values, and the finite-parabolic criterion.
- B page `weak-order-inversions-and-lattice-operations-examples`: mathematically supported; its prose matches the inspected examples and counterexample. No B-page prose was edited.

No uneditable mathematical finding or withdrawal proposal remains from this review. No mathematical blocker was identified. This is the reader's independent assessment, not a judge verdict or certification. Coverage includes all nine assigned items, both pages, all 21 external direct dependency interfaces, and the additional supplier sections listed above. It does not claim a fresh audit of every foundational theorem in the full transitive dependency closure, or reading entire source books/papers.

## Validation results

Required reflow and precheck were run for each of the seven changed items. All commands exited zero. The definition has no numbered proof (`0 checked`); each of the six proof-bearing changed items received `PASS`. Reflow changed line wrapping in five carriers and left the definition and infinite-dihedral example unchanged. A whitespace-normalized comparison against the pre-edit bytes found only the intended fact/source corrections, with no extra mathematical change.

`node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-23.proof-contracts.json --strict --json` checked all nine contract entries with `ok: true`, no errors, and no warnings.

After the final item edit and reflow, one command batched all seven explicit changed paths through `node tools/proof-layout.mjs`: **7 items, 50 steps, 0 defects**. These are local format/contract checks, not mathematical certification or engine gate stamps.

The uneditable-findings output is `research/frontier-42-coxeter-32-reader-findings-23.json`, with bare batch ID `23` and an empty findings array. Reader work is complete; subsequent splitting and review belong to the engine and Step 5b lead.
