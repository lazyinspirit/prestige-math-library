# Reader 7 — frontier-43-complex-representation-15

Batch: `7`. Scope: the assigned A/B pair, its 25 draft items, and the prerequisite interfaces and arguments listed below. This is an independent reader report; no mathematical judgment stamp or certification was issued.

## Opened inventory

Pages:
- `library/special-topics-in-representation-theory/kazhdan-lusztig-bases-polynomials-and-cells.md` (A).
- `library/special-topics-in-representation-theory/kazhdan-lusztig-bases-polynomials-and-cells-examples.md` (B).

Assigned item bodies (all headings, definitions/statements, facts, proofs/verifications, computations and remarks read; the assigned supplier chains were reviewed before their consumers):
- `items/def-normalized-type-a-hecke-algebra-and-its-bar-involution.md`
- `items/lem-the-hecke-bar-involution-is-well-defined.md`
- `items/lem-bruhat-order-basic-properties-for-permutations.md`
- `items/def-bruhat-interval-and-r-polynomials.md`
- `items/lem-reversal-anti-involution-commutes-with-hecke-bar.md`
- `items/thm-r-polynomial-recursion-and-degree-bounds.md`
- `items/lem-verma-sign-sum-over-bruhat-intervals.md`
- `items/thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis.md`
- `items/def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization.md`
- `items/thm-kazhdan-lusztig-basis-multiplication-formula.md`
- `items/thm-kazhdan-lusztig-polynomial-recursion.md`
- `items/def-inverse-kazhdan-lusztig-polynomials.md`
- `items/thm-kazhdan-lusztig-inversion-formula.md`
- `items/def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells.md`
- `items/def-knuth-and-dual-knuth-equivalence-for-permutations.md`
- `items/thm-knuth-equivalence-classes-are-insertion-tableau-fibers.md`
- `items/def-star-operations-on-the-symmetric-group.md`
- `items/lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges.md`
- `items/lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations.md`
- `items/prop-same-insertion-or-recording-tableaux-imply-cell-equivalence.md`
- `items/lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a.md`
- `items/thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux.md`
- `items/ex-kazhdan-lusztig-bases-for-s-two-and-s-three.md`
- `items/ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval.md`
- `items/ex-rsk-left-right-and-two-sided-cells-in-s-three.md`

Published prerequisite bodies opened; these were reviewed for the interfaces and proofs actually needed here, without a recursive audit of their entire foundational dependency closure:
- `items/def-generic-type-a-hecke-algebra.md`
- `items/thm-standard-basis-of-the-generic-type-a-hecke-algebra.md`
- `items/def-symmetric-group.md`
- `items/def-weyl-group-and-length-for-finite-gl-n.md`
- `items/def-bruhat-order-on-the-symmetric-group.md`
- `items/def-finite-symmetric-group-and-permutation-notation.md`
- `items/def-finite-weyl-root-system-lattice-and-chamber-conventions.md`
- `items/lem-finite-weyl-positive-roots-and-simple-reflections.md`
- `items/lem-finite-weyl-strong-exchange-and-deletion.md`
- `items/def-bruhat-order-on-a-finite-weyl-group.md`
- `items/def-partition-young-diagram-and-conjugate-partition.md`
- `items/def-young-tableau-standard-tableau-and-shape.md`
- `items/def-row-insertion-and-bumping-route.md`
- `items/lem-row-bumping-route-monotonicity.md`
- `items/lem-robinson-schensted-recording-tableau-is-standard.md`
- `items/thm-robinson-schensted-correspondence.md`
- `items/cor-rsk-symmetry-under-inversion.md`
- `items/thm-rsk-correspondence-for-two-line-arrays.md`
- `items/lem-row-insertion-and-reverse-deletion-are-inverse.md`
- `items/def-removable-and-addable-nodes-of-a-partition.md`
- `items/def-reverse-row-deletion.md`
- `items/lem-largest-entry-of-a-standard-tableau-is-removable.md`
- `items/def-semistandard-tableau-and-kostka-number.md`

Other evidence opened: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, `research/frontier-43-complex-representation-15-batch-7.pages.json`, the batch proof-contract file (citation and derivation mappings, boundary declarations and source exceptions), and the exact positivity/shape citation-authorization JSON files. Contract quotation/derivation repetition was checked programmatically against the already-read current item bodies rather than treated as independent mathematical evidence.

## Mathematical review

The normalized quadratic relation, coefficient base change and standard basis agree with the generic supplier. The bar and reversal maps descend through the relators and their standard-basis formulas follow from reduced words. The finite-Weyl exchange/subword supplier supplies the paired-descent branch of the rank/strong-Bruhat comparison; the threshold-window argument establishes the needed lifting properties. The R-recursion, support, parity, extreme coefficients, bar symmetry and matrix inverse then follow by the displayed finite inductions. Verma’s identity correctly extracts the lowest coefficient, including both endpoints.

The triangular anti-invariant coefficient construction supplies existence and uniqueness of the KL basis. Its degree/parity proof supplies the classical polynomial normalization and cover coefficient. The generator formula proves the ascent and descent cases in a noncircular length induction; coefficient comparison gives the q-recursion. The chain inverse, signed inverse formula and dual evaluations use the stated matrix conventions consistently.

The Knuth row calculations cover the two finite-letter cases and null bumps. The canonical row-word reduction supplies the converse fiber implication. The rank-two star pairs are ambient covers; no false arbitrary-coset KL expansion is used. In the transport lemma, the left ideals and quotient basis maps give an explicit star permutation of the quotient bases, with inverse map; descent containment keeps an endpoint-to-endpoint left-preorder chain in the correct singleton-descent domain. Its constant-term argument cancels only the surviving summand in the same-multiplier case and excludes constant-term contributions in the opposite-direction case. The inverse-orientation case is explicitly addressed.

The hard one-sided classification compares the two transported Knuth paths, then final column heights. The recording-descent route proof and the fixed-shape column-superstandard uniqueness argument close the two prerequisites needed at its conclusion. In particular, it establishes the common shape before using the descent-set uniqueness claim. Left and right convention choices consistently give Q- and P-fibers. Equal shape yields mutual two-sided comparability via the unique RSK preimage of (P(x),Q(y)).

The positivity clause and the two-sided forward shape implication use the two narrowly scoped source exceptions documented on disk. These records were considered as evidence of the permitted proof boundary, not evidence of truth. I independently checked the source conclusions and the current local normalization comparisons. The general Soergel–Hodge and Murphy/leading-matrix proofs were not reproduced or certified.

## Exact source evidence

- [Elias–Williamson](https://arxiv.org/pdf/1212.0791), Corollary 1.2(1), printed p. 5: the triangular KL coefficients h lie in Z_{≥0}[v]. The full Hecke section §3.2, printed pp. 15–16, gives the quadratic convention, bar, triangular characterization, and Remark 3.2 with q=v^{-2}. The source PDF was opened online and these passages read. This is exactly the clause used in basis theorem step 5.1.
- [Geck](https://arxiv.org/pdf/math/0504217v2), §§2.1–2.3, printed pp. 3–4, explicitly permits preorders defined with nonzero simple C-prime coefficients. Corollary 5.6(c), printed p. 29, states that mutual two-sided comparability is equivalent to equality of the RSK shapes; its complete proof was read, along with the insertion-convention discussion on p. 28. Only its forward implication is used in the assigned classification theorem step 1.2. The source PDF was opened online; exact passages were also read from the current-run extracted text.
- [Casselman](https://www.math.ubc.ca/~cass/research/pdf/KL.pdf), Proposition 4.4/Corollary 4.5, printed p. 7; mixed-descent argument §§5.2–5.3, pp. 8–9; and Theorem 6.2 with its complete two-case proof, pp. 11–13. These establish the recursion and constant-term route used in the local star transport proof. The local proof correctly distinguishes a zero constant-term sum from an empty polynomial sum. The source PDF was opened online and the indicated source pages read from the current-run extracted text.
- [Ariki](https://arxiv.org/pdf/math/9910117), §§2.1–2.2, printed pp. 3–7; §§3.1–3.3, pp. 7–9; and §3.4, pp. 10–11, were read, including the concluding column-length comparison on p. 11. The source was opened online and the complete relevant passages read from the current-run extracted text. Definition 2.3 and the mu convention are on p. 5, Lemma 2.5(1) on p. 6, Example 3.1 on p. 7, Propositions 3.6–3.7 on p. 9, Proposition 3.8 on p. 10, and the hard proof ends on p. 11.

## Repairs and evidence

No mathematical statement, proof inference, example value or page prose required repair. Nine assigned item source locators had confirmed errors: omitted concluding proof pages, a wrong example page, a lemma placed before its actual page, or section numbering that confused Lemma 2.7 with a subsection. Their source metadata was corrected against the exact Ariki passages above:
- `items/def-bruhat-interval-and-r-polynomials.md`
- `items/def-knuth-and-dual-knuth-equivalence-for-permutations.md`
- `items/def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization.md`
- `items/def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells.md`
- `items/lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations.md`
- `items/prop-same-insertion-or-recording-tableaux-imply-cell-equivalence.md`
- `items/lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a.md`
- `items/thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux.md`
- `items/ex-rsk-left-right-and-two-sided-cells-in-s-three.md`

The affected contracts record these source corrections without changing the proof obligations or existing reviews. In addition, the contract for `lem-the-hecke-bar-involution-is-well-defined`, derivation `step-2-1`, still described inverse symbols on the free algebra instead of the current explicit polynomial substitution H_s ↦ H_s−(v^{-1}−v). It was synchronized to the current item: the quotient identifies the polynomial image with the generator inverse, after which the presentation argument descends. The item itself already contained the correct argument and was not edited.

No changed item had a `verification.judge` record to remove. No manifest, plan, B-page prose, other batch item, or published item was edited.

## Independent finite checks

A fresh Python computation (`python3 /tmp/reader7-check.py`) used prefix-rank Bruhat comparisons, direct multiplication of bar-generator images, and Laurent coefficient dictionaries. It did not invoke the author’s example checker. It passed:

- The exact ten-point interval [1324,3412], every comparable R- and KL-coefficient there, every triangular inverse entry, and both matrix products. In particular p_{1324,3412}=v^3+v, r=(v−v^{-1})^3, and q-prime=−v^3−v.
- All six displayed S3 and all 24 displayed S4 insertion/recording tableau pairs.
- 3,584 first-row Knuth interleavings of distinct input triples and finite starting rows, including append/null-bump cases.
- Every left R-recursion identity in S4 and all 24 nonzero mu pairs in the two singleton-descent star domains.

These finite checks supplement the general arguments; they are not proofs of their universal assertions.

## Validation

All nine per-item reflow commands and all nine precheck commands exited 0. Reflow reported every file unchanged. Precheck found six applicable proof sections passing and three definitions with zero applicable proof sections. Commands used `node tools/tsx-run.mjs tools/reflow.mts <path>` and `node tools/tsx-run.mjs tools/precheck.mts <path>` for every path in the repair inventory above.

After those commands and the final item edits, the following single command exited 0 with `proof-layout: 9 items, 33 steps, 0 defects`:

```sh
node tools/proof-layout.mjs items/def-bruhat-interval-and-r-polynomials.md items/def-knuth-and-dual-knuth-equivalence-for-permutations.md items/def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization.md items/def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells.md items/lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations.md items/prop-same-insertion-or-recording-tableaux-imply-cell-equivalence.md items/lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a.md items/thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux.md items/ex-rsk-left-right-and-two-sided-cells-in-s-three.md
```

These are local format checks, not mathematical judgments.

## Page verdicts and outstanding findings

- A-page `kazhdan-lusztig-bases-polynomials-and-cells`: no remaining mathematical defect identified after the citation corrections. The summary accurately distinguishes the local one-sided classification from the cited two-sided shape implication.
- B-page `kazhdan-lusztig-bases-polynomials-and-cells-examples`: no remaining mathematical defect identified; interval, signs, inverses, tableaux and descent examples agree with the local computations. B-page prose was read without edits.

No uneditable mathematical finding or proposed withdrawal remains. No mathematical blocker was identified.

## Coverage limits

All 25 assigned bodies and both assigned pages were opened. Published review was limited to the 23 bodies named above and the mathematical interfaces required by this batch; their unrelated foundational closures, all bibliography entries, and full published formatting were not exhaustively audited. Some deeper published supplier proofs were opened after the direct supplier interface had been checked; this report does not claim a full dependency-ordered recursive published audit. The original positivity and shape source machinery remains cited under the exact recorded exceptions, with no claim of a new proof or independent certification of that machinery. The general algebra, combinatorics and cell arguments were checked locally. No rendered evidence bundle was supplied or identified in the exact dispatch artifacts; current source files were used directly.
