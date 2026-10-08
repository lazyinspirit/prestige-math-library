# Reader 5 — batch 5, frontier-42-coxeter-32

Review completed. The runtime state identifies stage `5a-read`. Scope is the two pages and seven draft items in `research/frontier-42-coxeter-32-batch-5.pages.json`; no cross-batch suppliers are listed. No rendered reader evidence bundle was found among this run's research artifacts. Current authored carriers, rather than scaffold strategies or earlier author verdicts, were reviewed. Two assigned items and their affected batch-contract entries were repaired. No uneditable finding remains.

## Opened inventory

Pages, both read completely:

- `library/coxeter-groups/finite-lattice-projections-and-coxeter-chain-labels.md` (A).
- `library/coxeter-groups/finite-lattice-projections-and-coxeter-chain-labels-examples.md` (B).

Assigned items, read completely with suppliers before consumers:

1. `def-cg-finite-lattice-congruence-and-interval-projections`.
2. `lem-cg-lattice-quotient-descent-and-class-intervals`.
3. `thm-cg-finite-lattice-interval-congruence-criterion` (also closes the definition's `justified_by` obligation).
4. `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`.
5. `ex-cg-rank-three-chain-labeling-and-order-complex-facets`.
6. `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond`.
7. `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence`.

Published dependency carriers read completely: `def-partial-order`, `def-chain`, `def-equivalence-relation`, `def-lattice-distributive-lattice-and-order-ideal`, `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`, `def-finite-cardinality`, `thm-subset-of-a-finite-set`, `lem-equivalence-classes-partition`, `def-face-poset-and-order-complex`, `def-poset-mobius-function`, `lem-poset-mobius-recurrence`, `def-boolean-lattice-and-levels`, `thm-mobius-function-of-a-boolean-lattice`, `thm-induction-principle`, `cor-mobius-inversion-for-finite-posets`, `def-abstract-simplicial-complex`, and `thm-mobius-inversion-for-lower-finite-posets`. This is claim-relevant dependency review, not a recursive audit of every foundational ancestor of these published suppliers.

The six entries of `research/frontier-42-coxeter-32-batch-5.proof-contracts.json` were checked against current fact citations, derivations and boundaries. All original derivation claims and citation excerpts agree with the opened carriers after whitespace and redundant-backslash normalization; some quotations are abbreviated excerpts, not new claims. Also opened: the batch manifest and empty cross-batch dependency list, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, and the contract-regeneration tool.

## Confirmed defects and completed repairs

- Shelling lemma, Proof 1.2: the original prose split at the vertex just above the bottom `v` but then counted chains in `[v,zeta]`. That decomposition actually gives `[zeta,w]`. The repaired argument splits at the first vertex below `w`, which produces exactly the displayed lower-endpoint recurrence. The missing consistent decomposition was load-bearing for the Möbius argument. The sum is explicitly bounded by `|[v,w]|-1`, since its chains have distinct vertices, and proper subinterval cardinalities license induction.
- Shelling lemma, Proof 3.1: the proposed root for `[y_i,y_{i-1}]` originally ended at `y_i`; a descending root must end at its upper endpoint `y_{i-1}`. The repaired root is the original root extended by the previously refined upper segments, so (L) applies at each refinement.
- Shelling lemma, Statement (ii), rank-zero convention, and contract boundaries `empty`/`zero`: the maximal chain of `[v,v]` is the singleton `{v}`, not the empty chain. Its label word is empty. Corrected the defective convention while preserving the formula, and refreshed the Boolean example's contract quotations of the lemma's Statement.
- Shelling lemma, Fact F9: finiteness of a set of chains requires the finite power set, not merely that each individual chain is a finite subset. The already declared Boolean-lattice definition now explicitly supplies this prerequisite. F9 explains strong induction as ordinary induction on accumulated assertions; Proof 1.1 supplies the finite insertion argument for saturated chains; Proof 2.2 defines the reflection `k-S` before its use.
- Shelling lemma, Proof 4.2: added the elementary argument from replacement intersections to a pure codimension-one attachment intersection. Distinct equal-sized facets meet in proper subsets, and every earlier shared face is contained in a codimension-one earlier intersection. Ranks zero and one have a single empty open-interval facet and vacuous shelling.
- Chain/diamond example, Fact F2: “the five singletons” was a false finite inventory for a four-element diamond; changed it to four. Proof 1.2 already used the correct four. Proof 3.1 now defines refinement and computes the middle congruences' meet/join, proving directly that the four congruences form a lattice instead of assuming an unstated general congruence-lattice theorem.

The two item carriers had no `verification.judge` record when opened or repaired, so no stale judge block remained to remove. Regenerated only the three affected batch-contract entries: the shelling lemma, the chain/diamond example, and the Boolean example (the latter's item was unchanged). Updated the shelling lemma's `empty`, `zero` and `endpoints` boundaries. No manifest, plan, page prose, other-batch item, published item, or judge/audit record was edited; no withdrawal is proposed.

## External evidence opened

- Nathan Reading, [Triangle Lectures in Combinatorics slides](https://nreadin.math.ncsu.edu/papers/TLC.pdf), PDF pp. 6–9 (one-based): congruence compatibility, quotient operations, and the three-part finite-lattice characterization (interval classes, lower endpoint monotone, upper endpoint monotone). The source states the characterization; the assigned items supply its proof independently.
- Michelle Wachs, [Poset Topology: Tools and Applications](https://arxiv.org/pdf/math/0602226), §3.1, printed p. 41 (shelling as pure codimension-one facet attachment); Definition 3.2.1 and Theorem 3.2.2, printed p. 46 (unique lex-first increasing chain and the closed/proper-part shelling conclusion); the complete accompanying argument for Theorem 3.2.4 across printed pp. 46–47; Definition 3.3.1 and its preceding rooted-interval construction and following consequences, printed p. 58. These use bottom-up roots; the assigned definition is their order dual. Wachs leaves the proof of Theorem 3.2.2 as Exercise 3.2.3, so source reading is corroboration, not a replacement for the local replacement proof or Boolean-inversion argument. The adjacent source sentence describing decreasing words says “weakly increasing”; the assigned falling-chain convention is checked against its explicit inequalities and local proof, not this apparent source typo.

## Mathematical assessment and page verdicts

The quotient lemma correctly proves congruence-class closure, class endpoints, convexity via `a meet z` versus `b meet z`, quotient lattice identities and bounds, and both endpoint monotonicities. The criterion correctly reduces arbitrary equivalent pairs through `x meet y` and proves both binary compatibilities. The shelling replacement handles rooted label changes and tied words; its rank-selected refinement bijection and Boolean inversion yield the correct sign after the decomposition/root repairs. The Boolean example's six words, six facets, replacement intersection, and Möbius recurrence are correct. The chain and diamond inventories, rejected endpoint pairs, quotient types, and counterexample witness are correct apart from the singleton-count typo.

The refinement/truncation inverse is top-down: it reproduces the same upper segment before invoking (L) on each lower rooted interval. Reflected junction positions are `k-S`, and Boolean inversion contributes `(-1)^(k-1-|S|)`; the strict-chain alternating sum then gives the final sign `(-1)^k`. Root-dependent changes below a shelling replacement do not affect its strict lexicographic improvement, whose first difference is already within the replaced two-edge segment. The tied-word case supplies a strictly earlier replacement regardless of how ties are ordered.

| Page | Reader verdict |
| --- | --- |
| `finite-lattice-projections-and-coxeter-chain-labels` (A) | No unresolved mathematical defect after the shelling-lemma repairs. Its summary accurately describes the current definition, quotient proof, interval criterion and shelling/Möbius result. Ready for the independent Step 5b review. |
| `finite-lattice-projections-and-coxeter-chain-labels-examples` (B) | No unresolved mathematical defect after the diamond Fact F2 repair. Its summary accurately describes the inventories, endpoint failures, quotient types and Boolean computations. B-page prose was read without editing. Ready for Step 5b. |

## Validation performed

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-cg-lexicographic-chain-shelling-and-mobius-cancellation.md`: unchanged, exit 0, both before and after the final proof adjustment.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond.md`: unchanged, exit 0.
- Precheck on each changed item: final `PASS (direct)`, one checked and zero failing, exit 0. The shelling lemma's first precheck requested a canonical phase reordering because the initial new chain-sum step cited same-phase Step 1.1. The final argument instead bounds the sum directly by distinct-vertex cardinality from F9, removing that ordering conflict while preserving the existing step references. Its subsequent precheck passed cleanly.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-5.proof-contracts.json --strict`: zero errors, zero warnings, all six entries checked, exit 0.
- `node tools/rendercheck.mjs items/lem-cg-lexicographic-chain-shelling-and-mobius-cancellation.md items/ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond.md`: both YAML carriers and all mathematics render, exit 0.
- `node tools/finite-smoke.mjs research/frontier-42-coxeter-32-batch-5.proof-contracts.json`: both existing obligations passed, exit 0. Each enumerates all 20 set partitions across the chain and diamond, finding 12 interval partitions and eight surviving congruences, with 96 comparable endpoint pairs and 43 quotient operation classes checked. These are the same model family run for the example and counterexample, not two independent proofs.
- An additional inline Python enumeration of Boolean lattices `B0` through `B4` passed: 121 intervals, 442 lexicographically ordered chain pairs and 155 reflected-rank subset identities. It checks the falling count against direct Möbius recurrence, the alternating strict-chain sum, all pairwise replacement witnesses and the singleton rank-zero convention. This covers ordinary Boolean edge labelings, not arbitrary root-dependent labelings; those were checked through the proof.
- Last item-format operation: `node tools/proof-layout.mjs items/lem-cg-lexicographic-chain-shelling-and-mobius-cancellation.md items/ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond.md`: two items, 19 steps, zero defects, exit 0. No item was edited afterward.

These checks record local validation only; no judgment, certification or publication stamp was issued.

## Uneditable findings, blockers and limitations

No confirmed or suspected uneditable defect remains, no published or other-batch supplier finding is routed, and there is no mathematical blocker. The findings output is `research/frontier-42-coxeter-32-reader-findings-5.json`, with batch `5` and an empty `findings` array.

Coverage includes both assigned pages, every assigned item, all their direct supplier carriers, and the additional simplicial-complex and inversion targets needed to interpret the proof. It does not claim a recursive audit of all foundations underlying the published suppliers, a full reading of every bibliography entry, or independent authorship/judge review. External consultation was limited to the precise Reading and Wachs sections listed above; the general arguments were checked locally. The next action belongs to the engine's Step 5b lead.
