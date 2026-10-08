# Reader 16 — batch 16, frontier-42-coxeter-32

Independent Step 5a review. Scope: the two assigned draft pages and seven assigned items. No judgments or certification are issued here.

## Opened inventory

- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions.md` (A).
- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions-examples.md` (B, read-only prose).
- Assigned items: `def-cg-deletion-chain-labels-and-shelling`, `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`, `thm-cg-bruhat-deletion-label-shelling`, `thm-cg-bruhat-eulerian-intervals-and-mobius`, `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain`, `ex-cg-s4-rank-three-interval-mobius-from-recurrence`, `cex-cg-parabolic-quotient-interval-eulerian-claim-fails`.
- Coxeter suppliers opened: `def-hh-coxeter-matrix-word-group-and-length`, `def-cg-canonical-reflection-homomorphism`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `def-cg-bruhat-order-by-reflection-chains`, `thm-cg-root-inversion-formulas-and-strong-exchange`, `lem-cg-bruhat-right-exchange-and-augmentation`, `thm-cg-bruhat-subword-characterization`, `lem-cg-bruhat-chain-refinement-and-gradedness`, `thm-cg-bruhat-lifting-and-cover-criterion`, `def-cg-parabolic-quotient-and-two-sided-minima`, `thm-cg-bruhat-parabolic-projection-and-quotients`.
- Poset and elementary suppliers opened: `def-group`, `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`, `def-abstract-simplicial-complex`, `def-face-poset-and-order-complex`, `def-poset-mobius-function`, `lem-poset-mobius-recurrence`, `def-cg-finite-lattice-congruence-and-interval-projections`, `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`, `def-finite-symmetric-group-and-permutation-notation`, `def-inversions-inversion-number-and-sign`, `def-finite-cardinality`.
- Instructions and evidence: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, batch-16 page manifest and proof contracts; relevant workflow clauses located. The manifest's mathematical strategy is not treated as a verdict. No rendered reader evidence bundle was found under the exact run state directory.

The assigned items were examined in supplier-before-consumer order, starting with the labeling definition and chain lemma and ending with the finite examples. Direct supplier proofs were read; the additional strong-exchange supplier was opened when tracing the augmentation proof. This is not a recursive audit of every foundational ancestor (in particular, the geometric and signed-action construction proofs and Boolean-incidence inversion ancestry).

## Source evidence

[Björner–Brenti, Combinatorics of Coxeter Groups](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf), §2.7, printed pp. 48–53 (PDF pages 56–61): deleted-position recursion; complete arguments of Lemmas 2.7.2–2.7.4 and Theorem 2.7.5; fullness and the two Möbius/parity corollaries. Lemma 2.7.4, printed p. 50, explicitly separates rank two, using the diamond labels with `i < j <= p`, before the overlapping-prefix-and-suffix induction for rank greater than two. This resolves the induction gap below without importing a topology theorem.

## Confirmed defects and repairs

1. Chain lemma, original proof 3.2: its induction treats only ranks zero and one separately. At rank two, increasing one-entry prefixes and suffixes impose no inequality between the two labels. Essential missing base case; repair by proving the diamond first, using `i < j <= p` to establish lexicographic minimality in rank two, then applying the overlapping-word induction only for rank at least three. Claim unchanged.
2. Chain lemma, fact F5: retained indices are incorrectly written as deleted indices and an inexact quotation is attributed to the augmentation supplier. Repair using its exact deleted-set convention and an actual statement quotation.
3. Shelling theorem: `ell(u,v)` is undefined; the opening strict inequality makes the rank-zero clause vacuous. The endpoint-removal proof also says the intersection count is unchanged, whereas both intersection and facet sizes decrease by two. Repair with explicit rank notation, the comparable-pair hypothesis already intended by clause (iv), and the correct size equation.
4. Eulerian theorem, proof 2.1: the conversion to the top-normalized alternating sum names the wrong sign factor. Repair by multiplying by `(-1)^ell(v)`.
5. Möbius example, Example (i): “atoms covering x” reverses the cover direction. Its contract's zero boundary also falsely describes the rank-two contributions as zero, whereas they are one. Repair the direction and boundary record.

All five defect groups above were repaired in the four assigned items named below. No withdrawal is proposed. The historical step numbers in the defect descriptions refer to the original proof; the final numbering is recorded below.

Chain lemma repair completed: moved the lexicographic induction to proof 4.2 after the diamond (4.1); supplied the rank-two base, corrected F5, made the order-preserving position relabelling explicit, and retained the original root in local replacement. The affected derivations and boundary evidence in the batch proof contract were reconciled. No judge record was present. Validation pending.

Shelling theorem repair completed: comparable-pair scope and n=ell(v)-ell(u) are explicit; rank-zero/one labeling and shelling are covered directly. Proof 3.1 now uses endpoint extension and the correct two-endpoint cardinality equation. The contract records these inputs and boundaries. No judge record was present. Validation pending.

Eulerian theorem repair completed: proof 2.1 now gives the correct sign multiplier and its diagonal normalization. The lifting induction, recurrence, falling-chain conclusion and fullness caveat are unchanged and were checked. Contract derivation 2.1 updated; no judge record was present. Validation pending.

Möbius example repair completed: Example (i) now says the rank-two element covers its two atoms; the supporting atom-value step is tagged in proof 2.2. Corrected the contract boundary that had falsely called the rank-two contributions zero. All recurrence values and falling labels remain unchanged. No judge record was present. Validation pending.

Precheck first pass: shelling and Eulerian items passed; chain lemma and Möbius example required canonical step renumbering because an inference cannot depend on an earlier step in the same phase. Adopted that ordering: lemma lexicographic induction is now 5.1, local replacement 6.1; example parity is 2.2, rank-two values 3.1, top value 4.1, falling check 5.1, conclusion 6.1. Reconciled contract step IDs, uses, inputs and boundary references. Reflow had changed neither item.

## Final mathematical review and computations

The labeling recursion uses the unique cover-deletion index and retains original positions. The chain lemma now derives the rank-two diamond before the rank-two lexicographic base case and the higher-rank induction. Inversion reverses positions, so the uniqueness and existence arguments for falling rank-two chains translate correctly. Keeping the root and changing only the middle vertex gives the asserted earlier chain; its lower labels need not remain unchanged, and only the first differing entry is used.

The abstract chain-shelling supplier was read through its tied-word argument and its falling-chain formula. Its Möbius proof obtains the strict-chain alternating sum from the recurrence, constructs the increasing refinements top-down with fixed roots, and applies Boolean inversion to the descent-set counts. The assigned shelling theorem instantiates precisely its finite, graded, (N)/(L) hypotheses. The Eulerian proof's second lifting case uses smaller endpoint length sums; the equal-endpoint possibilities are excluded before invoking the zero-sum induction. The recurrence then determines the parity-sign Möbius function. The falling-chain count follows by comparing two formulas with the same nonzero sign. No sphere theorem, Cohen–Macaulay theorem, or choice assumption is required.

Independent finite enumeration with right multiplication as swapping adjacent positions reproduced:

- All eight elements and the six displayed chains of `[1234,2341]`, with labels `(1,2,3)`, `(1,3,2)`, `(2,1,3)`, `(2,3,1)`, `(3,1,2)`, `(3,2,1)`. The twelve covers and the local replacement follow from the displayed subwords. The recurrence gives atom values minus one, rank-two values one, and top value minus one; four ranks are even and four odd.
- The quotient with no right descents at `s1,s3` has the six permutations `1234,1324,1423,2314,2413,3412`, ranks `0,1,2,2,3,4`, exactly the six claimed covers, and bottom-based Möbius values `1,-1,0,0,0,0`. The reduced word `s2 s1 s3 s2` gives `3412`; its positions `1,3,4` give `1432`, which has a right `s3` descent and proves the fullness failure.

A targeted search for the three assigned B-item IDs in `items/` and `library/` found only those items and their B-page placement. Thus the B-page's dependency-leaf description is supported by the current content.

## Final validation

Changed item files, all within this batch:

- `items/lem-cg-bruhat-increasing-chain-and-local-descent-replacement.md`.
- `items/thm-cg-bruhat-deletion-label-shelling.md`.
- `items/thm-cg-bruhat-eulerian-intervals-and-mobius.md`.
- `items/ex-cg-s4-rank-three-interval-mobius-from-recurrence.md`.

The affected contract entries were updated in `research/frontier-42-coxeter-32-batch-16.proof-contracts.json`; all other contract entries were retained. No assigned page prose or outside item was changed. Each changed item received reflow (unchanged layout) and a final successful precheck. The first precheck's two renumbering requests and the first strict contract check's three missing-use mappings were corrected; these initial failures are not concealed as passes.

Final checks:

- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-16.proof-contracts.json --strict`: 7/7 items checked, zero errors and warnings.
- `node tools/rendercheck.mjs` with the seven assigned items and two assigned pages explicitly selected: nine files, no errors, actual KaTeX and renderer YAML parsing performed.
- `node tools/proof-layout.mjs` with the four changed paths in one command, after the last item edit and formatter: four items, 27 steps, zero defects.

These are local format and contract checks, not independent judgments or certification. No `verification.judge` record was present in any of the four changed files.

## Page verdicts

- A-page `bruhat-interval-labels-shellings-and-mobius-functions`: no remaining confirmed defect in the reviewed definitions, statements, arguments, or summary after the repairs. Its intended full-interval results and quotient caveat are preserved.
- B-page `bruhat-interval-labels-shellings-and-mobius-functions-examples`: no remaining confirmed defect in the reviewed examples, witness, computations, or read-only page prose after correcting the Möbius example's cover direction and contract boundary.

## Uneditable defects, blockers, and limits

No uneditable finding or blocker remains from this review. No published content, another batch, plan specification, or B-page prose was edited. No new items or authoritative-source fallback obligations were introduced.

Coverage comprises all assigned page prose, all seven assigned item bodies and frontmatter, the batch contracts, the opened supplier statements and proofs listed above, and the specific complete source arguments identified in §2.7. This review is not a recursive certification of the entire dependency ancestry: the deeper geometric/signed-action construction proofs, Matsumoto ancestry and Boolean-incidence inversion ancestry were not independently audited here. No claim is made to have read other source books or the full Björner–Brenti book. The source consultation and finite computations do not substitute for the locally repaired general proofs.
