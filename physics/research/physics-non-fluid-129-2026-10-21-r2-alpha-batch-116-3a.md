# Batch 116 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-116`; scope: batch 116 only.

Reviewed the dispatch/order/scope, reader report/findings, refuter report, pre/post snapshots, current carriers, contracts and cited supplier statements. No judge, stamping, scheduling or gate-cycle action is taken.

## Level 0: def-tgrx-static-hydrostatic-data

Verdict: accepted_repair; repair_confidence: 1. The reader correctly supplies the intrinsic Borel volume measure, its scalar integration convention and explicit countable choice. Definition unchanged. Independently checked the product smooth structure (dimensions 1+3), block metric inertia, timelike translation flow, positive lapse, smooth profiles and orientation-independent compact-finite volume measure. Exact suppliers are those in F1–F11; the volume-measure proposition assumes ACω and gives compact-finiteness, and the integration theorem supplies Borel scalar integration. No assertion of material or equilibrium existence is made.

The exact pre-reader definition carrier was recovered in memory by replacing only the Definition section of `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/def-tgrx-static-hydrostatic-data.md` with the dispatch manifest's Definition text. Its SHA256 is `3b8bab292bcebd10862d3cb09b94ab5acff89d89c5b42c8c6417e63ac951a1bf`, exactly the pre snapshot. This permits an actual before/after comparison without treating the older baseline as the pre-reader bytes. Current item matches the post snapshot `139d443db50c6b2645ef7d888e0e7bb4be6edf4d3abb228cb27980722e5e70dd`. The original Definition and public physical scope are preserved. The repaired argument supplies the missing integration prerequisites; no interface consumer propagation is triggered.

Risk review complete in owning contract after the initial risk-report classified this item CRITICAL (9). Checked zero charge/potential/chemical parameter, unit lapse, excluded zero lapse/temperature, compactness and boundary-free hypotheses, and the defining Killing criterion. No TikZ/tikzcd diagram is present or needed.


## Level 1: post-tgrx-hydrostatic-effective-model

Verdict: reviewed_no_defect, change_kind: audit_enrichment, defect_ids: []. Raw item hash is unchanged between pre/post snapshots (`9706e68a5aa0833af6ffd1b4028c4e92d3d66c3a2928ade0c97ce78f0384b793`); routing comes from contract enrichment. Reviewed the current Postulate and its three actual dependencies. The supplied pressure functional is explicitly adopted on U with all profiles inside D. Compactness and continuity make its integrand bounded and its integral finite. The inverse-temperature/Killing definition in batch 115 supplies only formulation context; its actual two-step argument normalizes a smooth positive timelike norm and antisymmetrizes a smooth covariant derivative. The material postulate supplies a separately adopted C² energy function; pressure identification is explicitly additional. No transport coefficient, microscopic trace, fluid solution, empirical data or universal convergence is claimed.

Source fidelity: [Banerjee et al.](https://arxiv.org/html/1203.3544v2), §1.1 equations (1.1), (1.3)–(1.5), (1.11)–(1.12), provides the stationary background, redshifted temperature and zero-order pressure functional. The local special case has a_i=0, N=e^σ and explicitly chosen A0=mu0−qPhi, restoring k_B for SI. [Kovtun](https://arxiv.org/pdf/1205.5040), §1.3, printed pp.9–10, defines derivative counting and the microscopic spatial cutoff. The local microscopic temporal and spatial scales are declared application inputs, not a theorem equating them. Targeted source passages were read, not the entire papers. The cross-batch item/page uses remain valid and require no supplier repair.


## Level 2: pthm-tgrx-hydrostatic-variation

Verdict: accepted_repair; repair_confidence: 1. Actual pre-reader bytes are retained at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/pthm-tgrx-hydrostatic-variation.md`, SHA256 `91a74e748d0d26a10a62ffee35df7cb2d21af3ec79cab4bf94ce4a0365ac38fb`, matching the pre snapshot. Current bytes match the post snapshot `d9cd407e9a4c2c13d146e3dcc41864d54563b2cd8ee62f3725020f4856da798e`. The Statement is unchanged. Reader added exact compactness, extreme-value, uniform-continuity, mean-value, chain-rule and integration suppliers, and the inherited ACω assumption. This repairs prerequisite omissions without changing the result.

Independently checked all three proof steps. For an interior parameter, choose compact I0 within U. The continuous profile map gives compact K⊂D; nonempty compact Σ gives Nmin>0. The cited Heine–Cantor statement applies to K with its Euclidean subspace metric, without requiring a metric on Σ. For increments of either sign, MVT on the segment between r and r+h gives profile displacement ≤|h|/Nmin. Uniform continuity on K gives uniform convergence for both derivative quotients. No measurable selection of the MVT witnesses is needed: the actual quotients are continuous Borel functions and only their uniform bounds are integrated. Finite volume and the signed integral's linearity/order bound pass both limits through the integral. The first derivative cancels N; the second leaves 1/N. Positivity requires exactly the stated pointwise inequality and positive N,k_B,T0. Zero curvature of p in μ gives zero susceptibility; there is no strict-positivity or converse claim. Parameter endpoints are excluded by U being open. In SI, p dV is joules and k_BT0 is joules; differentiating twice by a joule-valued parameter gives J⁻².

Risk review complete in the owning contract (initial CRITICAL score 11). Suppliers read: all twelve declared dependencies, with the compactness claims 1/2 and Heine–Borel claim 3 checked explicitly. The mathematical statements are published imported suppliers except the owned model/definition; no independent audit of their entire transitive closures is claimed. The theorem's derivative computation is local, and the source is context rather than a substitute proof. No empirical premise, observation or statistical inference occurs. No diagram is present or needed.

The two repaired item dependency/role mirrors in the owning pages manifest were synchronized; no item or page inventory, statement, physical scope, page prerequisite or in-run edge changed. Item bytes remain the accepted reader bytes, with no judge stamp introduced or changed.


## Published dependency finding

`reader:116:1`, `def-cartesian-product`: confirmed_nonfatal; repair_confidence: 1 for the completed disposition, not a claim of published repair. Independently confirmed the malformed opening paragraph at Definition lines 39–43 in current raw bytes `bd08d3fe005379fb601046deadbe74db9d691cf2b83803c5478705d7832537eb`, matching the reader's raw-byte evidence. The exact displayed separation of P(P(A∪B)) and the membership iff remain correct; with an empty factor the existential predicate is false and the product is empty. The owned nonempty R×Σ use requires only that correct criterion plus the separate product-smooth-structure proposition. The finding cannot be called false-positive merely because its impact is editorial.

Recorded under `physics-non-fluid-129-2026-10-21-r2-3a-batch-116-cartesian-prose` in the defect ledger with closed `nonfatal-recorded` disposition. The published maintenance ledger and its deduplicated index record OPEN mathematics-owner maintenance, exact supplier/consumer IDs, bytes, evidence and a minimal grammatical repair strategy. Acquired `research/.published-consumer-ledger.lock`, reread/merged the current ledger, and released only that lock. Published/imported items and original mathematics were not edited.

## Records and validation

Exactly four decisions are in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-116-3a-decisions.json`: three touched carriers and the single reader finding. There are no page or refuter decisions owed. Three closed defect rows were appended through the serialized defect-ledger tool: `physics-non-fluid-129-2026-10-21-r2-3a-batch-116-volume-integration` (fixed prerequisite omission), `physics-non-fluid-129-2026-10-21-r2-3a-batch-116-variation-prerequisites` (fixed prerequisite omissions), and the published prose row above (nonfatal-recorded). The postulate's audit enrichment has no defect row.

Both existing cross-batch records for the owned item/page were refreshed with current actual-use evidence; `frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2` succeeded. No new in-run edge, item, page or proposed withdrawal was introduced. The shared frontier instructions were read; their consumer records are maintained through this batch input, not through edits to the instruction file or hand-edits to the unified ledger.

Focused local checks actually run:

- Initial risk-report: CRITICAL 9 (definition), CRITICAL 11 (variation); complete specific reviews recorded. Rerun with `--require-reviewed`: 4 items, 0 errors.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-116.proof-contracts.json --strict`: 4/4 items, 0 errors, 0 warnings.
- Reflow on the two repaired proof carriers: both unchanged.
- Precheck on all three touched item paths: 3 checked, 0 failing, including postulate nonproof structure.
- Rendercheck on the three touched items and both assigned pages: 5 files, clean YAML, math delimiters, wikilinks and real KaTeX parsing.
- Final required batched `node tools/physics-support/proof-layout.mjs items/def-tgrx-static-hydrostatic-data.md items/pthm-tgrx-hydrostatic-variation.md`: 2 items, 6 steps, 0 defects.
- Local JSON/coverage/hash check: exactly four owed decisions, unique obligations, exactly three referenced closed ledger rows owned at 3a-adjudicate, and all touched item raw hashes still match the post-reader snapshots.

No content edit was made to any item during this adjudication. Metadata edits are restricted to owning contracts (risk reviews), the two owning manifest dependency mirrors, the owned cross-batch evidence and required ledgers/reports. No public interface changed, so no additional consumer repair or outside-consumer escalation is required. All assigned diagrams were checked by carrier inspection: none occur. No empirical claim was introduced.

## Handoff

No physics-owned blocker or unresolved mathematical prerequisite remains in these routed obligations. Published Cartesian-product prose maintenance remains OPEN for its mathematics owner and is nonfatal to the reviewed consumer. The engine owns current decision stamping and its gate battery; this report asserts only the independent review and local checks recorded above, not judgment, certification or run completion.
