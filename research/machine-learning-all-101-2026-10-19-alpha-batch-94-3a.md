# Batch 94 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-94`.

## Dependency level 3 completed

`thm-tiled-attention-exactness`: independently reviewed all seven steps, all eight cited current dependency carriers, and relevant original source passages. No mathematical defect found. Its current raw SHA-256 `8598eea1e12cb91681690194ccfc5d91b0997bc4ef3004ef59147981bc6e2756` equals both pre-reader and post-reader snapshots. No decision is owed for this untouched, unflagged carrier. The initial risk report classified it CRITICAL (12); its complete risk review is now recorded in the owning proof contract before advancing to level 4.

The invariant covers empty blocks and first-copy initialization without undefined empty maxima. Every final allowed set is nonempty, so its finite shifted normalizer is at least one. Direct quotient differentiation of the smooth dense map yields the stated score and value pullbacks; the bilinear score map supplies the scale factors. The explicit scalar recurrence satisfies the shared-parameter theorem on open Euclidean domains and adds all row contributions at common keys and values. Recomputed probabilities agree pointwise with dense probabilities at tied maxima as well. Checked singleton rows, zero scale/upstream, equal values, empty initial blocks and block sizes exceeding n. No AC or all-masked-row convention is used. Statements and definitions are uninterrupted and their links are in following references sections. No diagram occurs in either routed theorem; the consulted shared-parameter supplier diagram agrees with its forward dependence convention.

Sources read directly: [Dao et al., Appendix B.2 equations (3)–(6), B.3 and Appendix C Theorem 1 proof, PDF pp. 18–19 and 22–23](https://arxiv.org/pdf/2205.14135); [Milakov and Gimelshein, §3 Theorem 1 complete induction and §3.1 merge, PDF pp. 3–4](https://arxiv.org/pdf/1805.02867); [MIT OCW, Chapter 8 §§8.3.1–8.4, PDF pp. 60–61](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf). Checked finite real scores, positive denominator, fixed mask and scale, and finite smooth scalar objective. The generalized dimensions and mask handling are proved locally. These references document the recurrence and reverse accumulation; no hardware I/O or numerical-error theorem is imported.

## Dependency level 4 completed

`refuter:94:1`, `thm-tiled-attention-workspace-and-work`, proof step 1.2: **confirmed_fatal**, repaired with `repair_confidence: 1`. This is a false intermediate estimate, even though the final theorem remains valid. For full allowed rows and b=1 there are n(n−1) merges; each scales and adds v vector entries. For n≥2 the resulting Θ(n²v) cost is not O(n²) uniformly in v. The reader overlooked this estimate; its absence of findings supplies no verdict.

The pre-edit raw SHA-256 `51bfb38a8ac1f2d2a3704d6f633a53eb29d283321bbc064f57c82c3ac1a7adab` matched both pre- and post-reader item snapshots, so there was no reader repair to accept, amend or revert. Current repaired raw SHA-256: `9eea1a4ea060008f947fe92f33597e92fcf7e468aa8c6b49a4a4b5e6c7a4f862`. The scope's `observed_sha256` is a carrier fingerprint and is not being asserted equal to the raw item hash.

The repaired paragraph separately counts O(n²) maxima, membership queries and scalar loop overhead; at most n⌈n/b⌉≤n² block visits with O(v) summary copies/merges; and O(nv) output divisions. Since d,v,b≥1, their sum and the pair computations are O(n²(d+v)). Sparse masks and empty blocks only reduce work; b>n gives one visit per row. The reverse proof's per-pair O(d+v) bound is sound; allocating/zeroing gradients costs O(n(d+v)) and row inner products cost O(nv), both absorbed in its stated bound. Forward storage holds only one block's scores and a constant number of v-vectors; reverse storage uses existing gradient arrays and scalar accumulators. Caller-owned dense masks remain separately counted input storage. No full score/probability array, hardware I/O claim or roundoff guarantee is introduced.

All three current dependency carriers were independently reviewed: the algorithm gives the actual loops and gradient updates, the summary definition makes the vector cost explicit, and the level-3 exactness theorem supplies the output identity. The exact original source formulas support the forward recurrence and reverse computation; the local operation count, rather than a borrowed hardware count, proves the generalized bound.

Only this proof paragraph and its matching contract derivation changed mathematically. Statement, title, dependency list, item provenance and manifest inventory remain accurate and unchanged. No judge record was present to invalidate. There is no changed Statement/Definition and therefore no newly triggered consumer interface repair. Existing batch-94 dependency ledger records for both reviewed consumers accurately name their actual suppliers and uses; no edge or disposition change is required. Published suppliers remained read-only and no defective published supplier was found. No page-only, touched, reader or foreign-gate decision is owed. No additional diagram is needed for these algebraic arguments.

Closed defect: `ml101-b94-vector-summary-merge-work`, appended once to `research/defect-ledger.jsonl` at `3a-adjudicate`, with the exact obligation reference; the append tool also refreshed its generated view. The decisions file contains exactly the one owed flagged obligation.

## Local checks and handoff

- Initial risk report: nine batch items routed, no errors; the sole required review is CRITICAL exactness (12), completed before the level-4 repair. Final `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-94.proof-contracts.json --require-reviewed`: zero errors, nine routed items.
- `node tools/regen-contract-entries.mjs research/machine-learning-all-101-2026-10-19-batch-94.proof-contracts.json thm-tiled-attention-workspace-and-work`: one matching entry regenerated; risk review preserved.
- Focused `proof-contract.mjs` with `--strict --items thm-tiled-attention-exactness,thm-tiled-attention-workspace-and-work`: zero errors/warnings, two items checked, including exact supplier quotations and step references.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-tiled-attention-workspace-and-work.md`: one proof checked, zero failures.
- `node tools/rendercheck.mjs items/thm-tiled-attention-workspace-and-work.md`: passed actual KaTeX and renderer YAML parsing.
- Final reflow via `tools/reflow.mts` reported unchanged. After that formatter, `node tools/proof-layout.mjs items/thm-tiled-attention-workspace-and-work.md`: one item, four steps, zero defects. The preceding checks bind identical item bytes.
- `defect-ledger.mjs append`: one closed row appended successfully and generated view refreshed.

No local blocker or unresolved mathematical uncertainty remains. Live disk status confirmed this run is still in Step 3a; unrelated run blockers concern collect-91 and split-80. They were not modified. No judging, stamping, engine transition, publication or commit was performed. The engine owns decision hashing and subsequent gate execution. Next action: engine collection of this completed report and decisions.
