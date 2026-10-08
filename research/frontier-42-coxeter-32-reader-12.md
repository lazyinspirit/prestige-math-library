# Reader 12 — batch 12, frontier-42-coxeter-32

Independent Step 5a review; no judge, audit, or publication certification is issued.

## Opened inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the batch-12 page manifest, and the batch-12 proof contracts. The live `.autopilot/frontier-42-coxeter-32/status.md` places the run in Step 5a; recent git history concerns the native author driver. Historical RESUME files were not used.

Assigned pages opened completely:

- `library/coxeter-groups/bruhat-subword-order-and-lifting.md` (A).
- `library/coxeter-groups/bruhat-subword-order-and-lifting-examples.md` (B).

Assigned mathematical review order (suppliers before consumers):

1. `def-cg-bruhat-order-by-reflection-chains` (Definition through the rendered evidence helper, remaining frontmatter separately).
2. `lem-cg-bruhat-right-exchange-and-augmentation`.
3. `thm-cg-bruhat-subword-characterization`.
4. `lem-cg-bruhat-chain-refinement-and-gradedness`.
5. `thm-cg-bruhat-lifting-and-cover-criterion`.
6. `thm-cg-bruhat-parabolic-projection-and-quotients`.
7. `ex-cg-s4-subwords-and-covers`.
8. `ex-cg-s4-lifting-squares`.
9. `ex-cg-s4-bruhat-versus-weak-comparability`.
10. `ex-cg-s4-subword-descriptions-agree`.

Dependencies opened: `def-group`, `def-natural-numbers`, `def-hh-coxeter-matrix-word-group-and-length`, `def-cg-canonical-reflection-homomorphism`, `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `def-cg-parabolic-quotient-and-two-sided-minima`, `thm-cg-root-inversion-formulas-and-strong-exchange`, `thm-cg-parabolic-intersections-and-coset-factorization`, `def-finite-symmetric-group-and-permutation-notation`, and `def-inversions-inversion-number-and-sign` completely; `def-hh-geometric-coxeter-representation-and-roots` Definition and Remarks. Mathematical use of the root-inversion supplier is strong exchange, whose signed-action proof was followed through the HH dihedral lemma; the separate geometric root-sign and faithfulness branches were not independently audited. The parabolic-intersection supplier is used here for its coset-minimality clause, proved directly from the HH factorization theorem.

## Evidence and completed repairs

The external source opened is [Björner–Brenti, Combinatorics of Coxeter Groups](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf). Read the complete augmentation proof, Lemma 2.2.1, printed pp. 33–34; the subword theorem and expression-independence corollary, Theorem 2.2.2 and Corollary 2.2.3, printed p. 34; and the quotient projection/cover/directedness proofs, Proposition 2.5.1 and Corollaries 2.5.2–2.5.3, printed p. 43, plus the complete quotient chain proof and grading corollary, Theorem 2.5.5 and Corollary 2.5.6, printed p. 45. These establish the deleted-position convention and the extra quotient-membership check. No reading of the other bibliography sources is claimed.

Completed focused repairs (all six item carriers remain present):

- Augmentation Proof 1.2: `t=Y s_i Y^{-1}` is conjugation by `Y`, not by `Y^{-1}`.
- Lifting Proof 1.1: the empty subword has no last index; the last-position test now applies conditionally on retaining that position. Also named the chosen word’s letters `t_1,...,t_r,t_{r+1}=s` consistently rather than mixing them with `s_i` from another reduced expression. The subword theorem and the elementary fact that a prefix of a reduced word is reduced justify both the empty and nonempty cases.
- Quotient Proof 3.1: the forbidden intermediate element is `P^I(y)`, not `x` itself. Correct the source locator for Theorem 2.5.5/Corollary 2.5.6 to p. 45.
- A-page paragraph 1 explicitly records the finite generating-set hypothesis of the Coxeter-matrix supplier. Paragraph 2: a finite quotient with top `z` is `[1,z]` intersected with `W^I`, not necessarily the ambient interval. If it has a top, it is a subset of the finite ambient interval, which proves the stated converse without asserting downward closure.
- Subword/cover example: deletion position `i` can be 4, 5, or 6, whereas the simple-generator labels are 1, 2, 3; refer to the deleted letter. In the old Verification 1.3 (now 2.1) the three additional position sets have three letters, and their evaluations are `s_1 s_2 s_2`, `s_1^3`, and `s_2 s_2 s_1`. The zero boundary of its contract falsely said only the empty subword realizes the identity and has been corrected: `{1,4}`, for example, realizes `s_1^2=1`.
- Lifting-square example: add explicit subword witnesses for the initial `u<=v` comparisons; make the listed witness at positions 1,2,4 literally `s_2 s_3 s_1`; replace the claim that the case hypotheses are exactly necessary with the precise conclusion that the two extra comparisons cannot be asserted uniformly.
- Expression-independence example: Corollary 2.2.3 is on printed p. 34, not p. 35.
- Contracts: refreshed all affected derivations and citation-use locations in the batch-12 contract file, and corrected the false boundary entries; the old quotient derivation 2.1 contained doubled mathematical backslashes and stale right/left coset terminology, while the current item correctly calls `vW_I` a left coset. The grading contract’s zero boundary incorrectly mentioned a two-element chain with zero strict steps; it now correctly records a singleton. The definition contract’s choice boundary referenced a nonexistent Remark; it now cites Definition (1)-(4). The lifting contract’s nonreduced-deletion boundary now cites 2.2 instead of 2.3, and the quotient reverse-equality boundary now correctly calls `wW_I` a left coset.

Independent finite evaluation used right multiplication as swapping positions. All 64 subsets of `[1,2,3,1,2,1]` give exactly 24 values. Deletions in positions 1–6 give `(4312,5), (4123,3), (1324,1), (4231,5), (2341,3), (3421,5)`. The six position sets for `2134` are exactly `{1}`, `{4}`, `{6}`, `{1,2,5}`, `{1,4,6}`, `{2,5,6}`. Both 16-subword enumerations of `[1,2,3,2]` and `[1,3,2,3]` give exactly the displayed 12 values below `2431`. The ambient words for the lifting witnesses multiply to their stated permutations.

## Proof review conclusions

The reflection-chain definition’s parity, partial-order and inversion assertions follow from its cited suppliers and its displayed group calculations. Right strong exchange follows by reversing the left version; augmentation’s two contradiction cases explicitly account for the deleted positions, including one deletion and empty retained words. The subword theorem reduces intermediate words before exchange and establishes both implications for a fixed arbitrary reduced expression. Its use in the interval lemma establishes finite intervals and saturated chains without finiteness of W.

The lifting proof now handles the empty subword without an undefined index; the same-descent case follows by applying the mixed case to us. The reflection-deletion uniqueness argument uses a contiguous block of a reduced word (whose reducedness is explicitly proved by substitution), not an arbitrary subword. Directedness is established by induction and does not assume a longest element.

The projection proof decreases the upper element’s length and uses the same left coset after multiplying on the right by a generator in I. Its cover argument and the suffix-conjugate reflection from augmentation give the needed quotient-membership contradiction. Hence the quotient grading is established locally, rather than inferred from grading of the ambient poset. A quotient top implies finiteness because the quotient is a subset of a finite ambient interval; equality with that ambient interval is not needed and is generally false.

The S4 examples’ permutations, inversion lengths, weak products, subword sets, covers, and positive/negative lifting comparisons were checked independently. In the subword example, the repaired Verification 1.1 establishes that the given six-letter word is reduced before applying the subword theorem. Verification 1.2 cites the strict-length clause of the expanded F7, and Verification 2.1 derives surjectivity onto S4 from the subword theorem instead of relying on an unshown exhaustive computation. Its three deletion covers and three shorter deletion values are summarized without the old redundant “two covers ... one further cover” phrasing. The lifting examples explicitly establish u<=v before applying the theorem, and their two failures are no longer described as necessity of all case hypotheses. No title or other asserted mathematical claim was withdrawn.

## Validation

All six changed paths were explicitly checked:

- `items/lem-cg-bruhat-right-exchange-and-augmentation.md`.
- `items/thm-cg-bruhat-lifting-and-cover-criterion.md`.
- `items/thm-cg-bruhat-parabolic-projection-and-quotients.md`.
- `items/ex-cg-s4-subwords-and-covers.md`.
- `items/ex-cg-s4-lifting-squares.md`.
- `items/ex-cg-s4-subword-descriptions-agree.md`.

For each, `node tools/tsx-run.mjs tools/reflow.mts <path>` exited 0 (unchanged formatting), followed by `node tools/tsx-run.mjs tools/precheck.mts <path>` exiting 0 with PASS. The subword example’s first precheck required a phase adjustment after adding the dependency on step 1.2. Adopted its phase order manually while preserving the escaped set braces and mathematical text: old deletion step 1.4 is now 1.3, old enumeration 1.3 is now 2.1, and the conclusion is now 3.1. Reflow and precheck then passed. Contracts were updated to those locations. The final edit to the lifting theorem was followed by another reflow and passing precheck.

No `verification.judge` field was present on the six changed carriers; the edit pass removed any such field if present and did not add certification metadata.

After all item edits and reflow operations, ran one explicit batched `node tools/proof-layout.mjs` command on exactly those six paths: **6 items, 41 steps, 0 defects** (exit 0). The same six paths passed `node tools/rendercheck.mjs` (exit 0): YAML and every math span parse through the actual renderer. A read-only consistency check confirmed that every batch-12 contract derivation matches its current numbered step and that every citation quote matches the current supplier section modulo whitespace.

Additional independent finite checking built Bruhat reachability directly from increasing transposition edges on all 24 permutations, rather than assuming the subword criterion. It passed for all **66 reduced-word descriptions**, all **893 augmentation cases**, and projection monotonicity, covers-over-quotients and quotient chain refinement for all **8 parabolic subsets** of S4. It also checked all four initial lifting comparisons, both negative comparisons, and both weak-order failures. These finite checks supplement the general proofs; they do not prove the assertions for arbitrary Coxeter groups.

## Page verdicts and remaining findings

- `bruhat-subword-order-and-lifting` (A): **no remaining defect found after the six-item/contract review and the assigned A-page correction**. The general results retain the finite generating-set convention of the foundational definition and impose no finiteness of W.
- `bruhat-subword-order-and-lifting-examples` (B): **no remaining defect found** in its summary or the four finite examples after the item repairs. Its page prose was not edited.

No uneditable published dependency, another-batch supplier, assigned-item defect, page defect, or mathematical blocker remains from this review. The findings array is empty. Proposed withdrawals: none. No other batch, published item, B-page prose, or plan file was edited.

## Coverage limits

All ten assigned item bodies and metadata and both assigned pages were opened; all batch-12 contract derivations were compared with their current steps, citation clauses with opened supplier sections, and boundary evidence inspected. The large manifest’s initial display was truncated; its complete page/item inventory and dependency fields were extracted separately, and it served only as ownership/scaffold evidence. The current augmentation item correctly uses deleted positions, unlike the retained/deleted mixture in the scaffold strategy; the current item, not that strategy, was reviewed.

This was not a recursive audit of every foundational algebra/linear-algebra/set-theory supplier or of the geometric root-sign and faithfulness proofs. The additional supplier reading was targeted to the exact exchange, signed-action, support, factorization and type-A claims needed here. Only the relevant Björner–Brenti passages listed above were source-read; the other bibliography PDFs were not independently checked. No whole-library certification, frozen-byte gate, or judgment is claimed.
