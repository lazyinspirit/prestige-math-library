# Batch 16: bottom-up procedure/property separation

Run: numerical-analysis-remaining-71-2026-10-17. Root assigned this focused SCHEMA repair after native batch16 acceptance and confirmed no active writer. No native result, verdict, control, or acceptance history was changed. Read CLAUDE, the applicable current HLR direction, the complete actual bottom-up/core algorithms, core theorem, blockwise theorem, addition/product procedures, LU compression and residual theorem, storage theorem, both pages and all three examples.

Exact current pre-edit carriers are archived under `scope16-algorithm-property-before/items/`, with the A-page preimage under its `library/numerical-linear-algebra-and-approximation/` subdirectory. These are distinct from earlier batch68 work.

The confirmed schema defect was an algorithm with `## Statement` and its own recursive error proof, while an ordinary theorem used that algorithm's correctness as a mathematical premise. The mathematical induction itself is retained.

- `alg-hlr-bottom-up-recompression` now uses `## Definition`. Its complete factor-sum-tree input, traversal, statuses, error recurrence, guarantees, dense-contribution convention and failure caveat are preserved. Its proof component is `not-applicable`, its `proof_strategy` removed, and its `justified_by` points to the new ordinary result. Root owns the corresponding verification-marker and artifact reconciliation.
- New same-A `lem-hlr-bottom-up-recompression-error-bound` depends on the algorithm and actual core-SVD/Frobenius/triangle-inequality premises. It states the per-node rank cap and actual error no greater than the subtree sum of exact discarded tails, bounded by the subtree tolerance sum; the root is bounded by the requested block tolerance. Both real and complex fields, finite trees, exact arithmetic and the unchanged failure meaning are explicit.
- The entire original Facts section and both original numbered error-proof rows were moved byte-for-byte. A short proof introduction establishes rank at most the effective core cap and hence at most the requested cap. It does not alter the two mathematical error rows.
- `thm-hlr-blockwise-error-propagation` now names the new proved lemma in F2/deps. Its complete original Statement and mathematical Proof are byte-identical to their before-image.
- The A page places the new lemma directly after the bottom-up algorithm. No other page prose or B-page content changed. This adds one item on the existing pair, with no new pair.

Reading the exact core input exposed a second small confirmed compatibility defect: the core algorithm requires its cap not exceed the minimum local matrix dimension, while the bottom-up and LU-compression procedures accepted a global cap k>=1 and passed it to potentially smaller blocks. Root explicitly authorized the smallest scope-preserving correction in both owned algorithms. Bottom-up now calls the core with min(k,|tau|,|sigma|); LU compression uses min(k,m_b,n_b) for each local block. No input is narrowed. Every matrix of those dimensions already has rank at most the minimum dimension, so clipping imposes no extra restriction on feasible matrix ranks. Discarded-tail budgets, best-rank tests, returned ranks bounded by k, exact dense treatment and failure meanings are preserved. No core supplier or other algorithm was rewritten.

Actual consumer dispositions:

- Core-SVD definition/theorem: read fully. Their literal cap domain now holds at every bottom-up/LU call. Returned rank and exact discarded-tail/Frobenius claims apply over both fields, including zero and rank-deficient contributions.
- Addition: leaves remain the exact input block factors; its finite tree and tolerance sum are unchanged. The returned e_b is now justified by the new ordinary lemma. Near blocks remain dense exact sums; status and root storage are unchanged. No source edit needed.
- Product: each of its four dense/factor product identities has conformable factors over both fields. Its intermediate clusters partition the contraction index set, so its leaves still represent the exact represented-matrix product block. The new ordinary lemma supplies the same tree certificate, and clipping only removes impossible excess rank. No source edit needed.
- Blockwise error theorem: its F2 now cites the ordinary proof; disjoint residual supports, root sum of squares, addition perturbation and the three product perturbation terms retain their complete original proof. No Statement change.
- Exact LU compression: only the local effective-cap clarification changes its carrier. Near/diagonal exact copies, off-diagonal factors, structural zeros and failure statuses remain intact. It still compresses supplied exact factors and does not claim to compute a factorization.
- LU residual/inverse theorem: read fully. Its two disjoint local-error norm bounds and product residual identity use the unchanged core certificates and unchanged blockwise Statement. The inverse certificate still needs the actual strict q<1 hypothesis. No edit needed.
- Storage/matvec theorem: read fully. It consumes declared stored rank bounds and its explicit balanced/count hypotheses; the bottom-up proof separation and effective local cap do not change those assumptions or its H/H2 work/storage conclusions. It still makes no rank-linear addition/product work claim.
- Three B examples: separated Cauchy rank-one residual, nearfield identity full-rank requirement and two accepted rank-zero local updates destroying positive definiteness are unchanged. The third calls the core directly with admissible k=0, so it is unaffected by the bottom-up/LU cap correction.
- Both pages: complete actual reading. A's only change is new-lemma placement. B's three summaries remain accurate. Actual searches found no additional item or page consumers of the changed procedures/blockwise theorem outside the checked HLR chain.

After the final edits, direct source comparisons confirmed exact preservation of the original Facts, both original numbered error rows, the original blockwise Statement and its complete Proof. Then ran the exact explicit check:

`node tools/proof-layout.mjs items/alg-hlr-bottom-up-recompression.md items/lem-hlr-bottom-up-recompression-error-bound.md items/thm-hlr-blockwise-error-propagation.md items/alg-hlr-compress-exact-lu-factors.md`

Exit 0: `proof-layout: 4 items, 5 steps, 0 defects`.

No tests, full validators, gates, native controls/reports, outside-source edits, publication or commits were performed. Root owns verification, new-item provenance/artifact integration, manifests, contracts, levels, readiness and hashes.
