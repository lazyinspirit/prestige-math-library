# Batch 13 Step 3a supplemental ownership review

Run: `mathematical-statistics-foundations-37`; group: `batch-13`; assigned subject: `ex-nonidentifiable-targets-preclude-consistency` only.

Read the supplemental task, original archived native prompt, item-order task, original report/result, original scope and decisions, current subject, its batch manifest and contract, and exact existing defect row. The owner archive at `research/mathematical-statistics-foundations-37-owner-step3-gate1-native-originals/` contains report, decisions and result bytes identical to their canonical originals before this append; comparisons used bytes, without generating hashes. The original scope marks this item untouched, unflagged and risk-only. Its nine original decisions remain unchanged. This continuation adds ownership of the existing finding; it supplies no replacement reader/refuter or historical coverage. Owner continuation controls remain owner responsibilities.

## Existing defect and independent repair assessment

Exact row: `mathematical-statistics-foundations-37-3a-batch-13-example-usual-metric-citation` in `research/defect-ledger.jsonl` (line 17160 at reading), subject `ex-nonidentifiable-targets-preclude-consistency`, `accuracy/citation-inaccurate`, `fatal`, `fixed`, caught at `3a-adjudicate`. Unchanged original evidence is `research/mathematical-statistics-foundations-37-alpha-batch-13-3a.md`, **Level 6 completed** and **Owner routing alert**, together with the row's existing item F10 evidence. These document the old attribution to `def-metric-space`; this review does not claim a fresh observation of the old item bytes.

Independently read `items/def-metric-space.md`, Definition: it specifies separation, symmetry and the triangle inequality as conditions on a function. It does not establish those conditions for the usual real distance. The old F10 attribution was therefore inaccurate, even though the mathematical assertion and example are true. Under the dispatched rule that an inaccurate citation is not excused as an immediately closable proof gap, the existing fatal classification remains supportable.

Current F10 cites `items/lem-real-line-is-a-metric-space.md`. Its Statement defines `d_R(x,y)=|x-y|` and Statement 1 proves this is a metric. Proof 1.1, 1.2, 1.3 and 2.1 establish separation, symmetry and triangle inequality explicitly. In particular, writing `x-z=(x-y)+(y-z)` gives `|x-z|≤|x-y|+|y-z|`. Checked the relevant supplier Statements in `lem-of-abs-value` and `lem-of-triangle-inequality`: both apply to any ordered field, hence to the real ordered field supplied in the metric lemma. This is exactly the concrete result F10 needs. No web or external textbook reading is claimed.

The current item's dependency list and the single matching entry in `research/mathematical-statistics-foundations-37-batch-13.pages.json` both contain `lem-real-line-is-a-metric-space`. Its record in `research/mathematical-statistics-foundations-37-batch-13.proof-contracts.json` cites that supplier's Statement 1 verbatim for F10 and maps the use to Verification 1.2. The existing complete risk review records the same repair and defect ID. These are consistent with the repaired carrier; no contract or risk-review rewrite is needed.

Checked the subject's three Verification steps as context for this citation repair. Nonnegative masses `u,1-u` sum to one even at `u=0,1`; disjoint subsets of the two-point carrier have at most two nonempty members. The specified parameters `(1/2,0),(1/2,1)` give equal laws on all four events and distinct target values of distance `|0-1|=1`. The current Statement and proof of `thm-nonidentifiability-precludes-simultaneous-consistency` apply to this metric target and nonrandomized, measurable IID estimator sequence: common finite sample laws and disjoint radius `1/3` target balls prevent both success probabilities tending to one. No infinite product or choice axiom is needed. The product-measure supplier Statement requires sigma-finite factors, satisfied by the two probability measures; at `n=2` each of the four ordered binary samples has mass `1/4`. This checks the actual use affected by F10; it is not a new review of other batch subjects or a transitive supplier audit.

## Added decision and handoff

Exactly one new decision is appended to `research/mathematical-statistics-foundations-37-alpha-batch-13-3a-decisions.json`:

- `obligation: gate:mathematical-statistics-foundations-37-3a-batch-13-example-usual-metric-citation`
- `route: gate`
- `id: ex-nonidentifiable-targets-preclude-consistency`
- `defect_ids: [mathematical-statistics-foundations-37-3a-batch-13-example-usual-metric-citation]`
- `verdict: confirmed_fatal`; `repair_confidence: 1` for the sound, already implemented citation repair.

The decision cites this supplemental report and the unchanged original report/ledger evidence. It maps to exactly the one current manifest subject. All original decision objects, including their evidence and subject seals, are preserved literally. The original narrative report, snapshots, result and ledger history remain unchanged.

No source, manifest, contract, risk-review or ledger edits; no new ledger rows, tests/gates, hash generation, stamping, judging, workflow controls or agents. No item was edited, so a new proof-layout run is inapplicable. Prior check results remain historical evidence only. Mathematical uncertainty for this citation repair: none identified. Root still owns current subject seals, append-only adjudication_ref reconciliation and native battery resumption; this report does not claim gate acceptance or workflow closure.
