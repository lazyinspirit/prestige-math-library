# Step 3b — A/B pair `sr-experimental-interface` (batch 12)

Run: physics-em-sr-40-2026-10-08. Pair: `sr-experimental-interface` (A, order 231) /
`sr-experimental-interface-examples` (B, order 232). Owned item IDs and open obligations
below; updated as each item is audited, authored and checked.

## Owned IDs (dependency order, final status)

1. `def-sr-experiment-interface-vocabulary` (definition, level 16, A) — authored; checks clean; decision `accept` (receipt sha `8269d2c08b074534…`).
2. `exp-sr-stored-lithium-ion-doppler-time-dilation-2014` (experiment, level 17, A) — authored; source re-verified against the pinned full text; decision `accept` (`6ade437dcf303826…`).
3. `rem-sr-primary-report-research-queue` (remark, level 17, A) — authored with one local wording repair (clause (i)); decision `repaired` (`1f1edf8d7305379e…`).
4. `cex-sr-bounded-record-does-not-identify-the-parameter` (counterexample, level 17, B) — authored; exact witnesses rechecked; decision `accept` (`3cbdcf6396246e94…`).
5. `ex-sr-operational-record-arithmetic-worked` (example, level 17, B) — authored; exact arithmetic rechecked; decision `accept` (`ef0967beb1250ae6…`).
6. `pthm-sr-specified-model-comparison` (physics-theorem, level 18, A) — authored with three local repairs (Given hypothesis, step 1.3 wording, step 2.2 arithmetic); decision `repaired` (`44a7fea1189693fd…`).

All six files exist at `items/<id>.md`; both pages exist at
`library/special-relativity/sr-experimental-interface{,-examples}.md`; the batch
proof-contract file exists at
`research/physics-em-sr-40-2026-10-08-batch-12.proof-contracts.json` (scope = the six
IDs, strict check clean).

## Open obligations at entry (as recorded) and their resolution

- **Entry record:** all direct in-run suppliers were scaffolded but not yet authored as
  item files; consuming steps were flagged, with decisions to stay escalated until the
  suppliers were authored and their actual use reconciled.
- **Resolution this pass:** every direct in-run supplier is now authored on disk and was
  read for its actual statement before acceptance. The reconciliation, with the exact
  consuming steps:
  - `pthm-sr-null-wave-doppler-and-aberration` clauses (i)–(ii): `ex` step 1.1 and 2.1,
    `cex` steps 1.2 and 2.1, `pthm` step 1.4 — clauses read and matched.
  - `lem-boost-is-proper-orthochronous-with-inverse` (i)–(iii) and `def-lorentz-boost`
    matrix: `ex`/`cex` step 1.1 — matched (B(β) proper orthochronous, B(β)⁻¹=B(−β),
    B(β)e₀ component form).
  - `lem-sr-null-covector-frame-data` (a),(b),(e): `ex`/`cex` step 1.1 — matched
    (ϖ>0, |s|=1, and the converse construction of a future null wave covector).
  - `def-rational-power`, `lem-rational-power-laws`, `lem-rational-power-monotone`,
    `lem-of-sign-rules` (published math imports, read-only): `ex`/`cex` steps 1.2–1.4,
    2.2; `pthm` steps 1.2–1.4, 2.2 — the cited claims (a^r>0, power laws, strict
    monotonicity in the base for r>0, order rule c>0 ⟹ a<b ⇔ ac<bc) matched.
  - `def-sr-null-wave-covector-and-observer-frequency` (a)–(d) and
    `post-sr-ideal-plane-wave-model` (i)–(ii): facts [F3]/[F4]/[A1] of `ex`, `cex`,
    `pthm` — matched (ωₙ = −ck(n) = −k(Uₒ); component form; reading postulate).
  - Vocabulary definition `def-sr-experiment-interface-vocabulary`: all 15 cited
    suppliers read for the object kinds, domains and regularity of clauses (a)–(e),
    including the radar protocol, the congruence/tetrad distinction and the
    clause-(ii) measurement identifications of `post-sr-massive-particle-dynamics` and
    `post-sr-ideal-massless-particle-momentum`.
  - `exp` deps `def-sr-experiment-interface-vocabulary` (formulation) and
    `def-sr-null-wave-covector-and-observer-frequency` (operational): both read; the
    experiment's frequencies are the calibrated laser/rest frequencies of the primary
    report, and the record type (reported estimate plus source-labelled 1σ scale) is kept
    distinct from the vocabulary's hard-bound records.
  No consuming proof step was found to rely on a supplier clause that is absent from the
  authored supplier text, so no decision needed the dispatch's supplier-unfinished
  escalation.
- **Required artifacts:** this report; the six item files; the two page files; the batch
  proof-contract file — all present.

## Checkpoints (authoring, in dependency order)

- (item 1) `def-sr-experiment-interface-vocabulary` authored (physics-domain definition, level 16, all 15
  scaffolded suppliers read; roles and clauses checked against their scaffold statements).
  rendercheck OK; precheck "0 checked" (definition, no proof steps); content-policy 1 scoped item 0 errors.
- (item 2) `exp-sr-stored-lithium-ion-doppler-time-dilation-2014` authored; every reported value and
  uncertainty scale checked against the pinned Botermann et al. arXiv:1409.7951v1 full text (PDF
  sha256_16 `d40420de81cf93d3`, matching the coverage stamp), including Table I, Eqs (1)-(4) and the
  derived value `1.4744849565e-9` recomputed from the rounded Table I centers. rendercheck OK;
  precheck PASS (nonproof structure); content-policy 1 scoped item 0 errors.
- (item 3) `rem-sr-primary-report-research-queue` authored (queue/status remark; four families retained;
  backtick status pointers avoid forward wikilinks). rendercheck OK; precheck clean; content-policy clean.
- (item 4) `cex-sr-bounded-record-does-not-identify-the-parameter` authored (kind counterexample, B page,
  level 17). Refutes the uniqueness claim under an explicitly declared comparison rule; two exact rational
  witnesses `1719/18281` and `2079/17921` with `7200000/327613801 > 0` verified by hand (cross-multiplication).
  precheck PASS (direct, 7 steps); proof-layout 7 steps 0 defects; rendercheck OK; content-policy clean.
- (item 5) `ex-sr-operational-record-arithmetic-worked` authored (example, B page, level 17) after the
  previous checkpoint; this pass re-checked all displayed arithmetic: F(β)=√((1−β)/(1+β)) from the
  Doppler theorem clauses (i)–(ii) with s=e₁; strict decrease from the radicand difference
  2(β_b−β_a)/((1+β_a)(1+β_b))>0; inverse β(r)=(1−r²)/(1+r²) with F(β(r))=r; consistency set
  [β(z+ε), β(z−ε)], singleton at ε=0, exact length 8zε/((1+(z−ε)²)(1+(z+ε)²)); at z=9/10, ε=1/100 the
  endpoints 1719/18281, 2079/17921 satisfy F=91/100, 89/100 and the length is 7200000/327613801 with
  17921·18281=327613801 verified by exact integer arithmetic. Declared illustrative values only.
  Checks: precheck PASS (direct, 6 steps); proof-layout 0 defects; rendercheck OK; content-policy 0 errors.
- (item 6) `pthm-sr-specified-model-comparison` authored (physics-theorem, A page, level 18) after the
  previous checkpoint; this pass made three local repairs: (1) the proof Given now states nonnegative
  hard-bound entries e_j ≥ 0, matching Statement (a) and vocabulary clause (c), so step 1.1 and the
  zero/degenerate boundary worksheet genuinely cover zero bounds (the previous Given said positive while
  step 1.1 already used e_j ≥ 0); (2) removed the imprecise clause "at u_j→ smaller positive scales the
  product shrinks" from step 1.3, keeping the exact preimage identity and the k=0 case; (3) corrected a
  factor-of-ten arithmetic slip in step 2.2: now (31/500−15/10¹⁰)/(23/10¹⁰) = (619999985/10¹⁰)·(10¹⁰/23)
  = 619999985/23 ≈ 2.70×10⁷ > 10⁷. Independently verified: 1−β²=221439/250000;
  (531/500)²·(221439/250000)=62437161879/62500000000<1<(1063/1000)²·(221439/250000)=250219205391/250000000000;
  hence 31/500<Q₁(169/500)<63/1000; Q_SR=0; D_SR=15/23<1; descriptive band [−8,38]×10⁻⁹. Checks:
  precheck PASS (direct, 7 steps); proof-layout 0 defects; rendercheck OK; content-policy 0 errors.
- (repair note, item 3) clause (i) of the remark now says "the experiment item records its apparatus, …"
  instead of "the proposed experiment records …", so the status pointer matches the authored experiment
  on the same page; the promised content is unchanged. The batch-12 manifest row for this item still
  carries the scaffold wording (plan artifact), reported for Step 4.

## Handoff checks actually run (this pass, on the final bytes)

- `node ../tools/tsx-run.mjs tools/physics-support/precheck.mts` on the six item paths: exp (nonproof),
  cex/ex/pthm (direct) all PASS — "4 checked, 0 failing"; the definition and remark carry no numbered
  proof rows.
- `node tools/physics-support/rendercheck.mjs` on the six items and the two pages: 8 files OK
  (no wikilinks in math, balanced delimiters, every math span parses under KaTeX, YAML parses).
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-12.pages.json`:
  6 scoped items, 0 errors, 0 warnings.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-12.proof-contracts.json --strict`:
  6/6 items checked, 0 errors, 0 warnings.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`:
  exit 0; 473 items across 80 pages, maximum level 24; the declared levels 16/17/17/17/17/18 match.
- `node tools/physics-support/proof-layout.mjs items/<six owned items>`: 6 items, 20 steps, 0 defects.
- `node tools/physics-support/frontier-item-gate.mjs --run … --tool validate-plan`: exit 1 with 33
  `undeclared-prereq` errors, every one naming another page (sr-spacetime-primitives(-examples),
  sr-forces-and-continuum, em-* pages); no error or warning names this pair, which appears in the
  reading-order listing as 4 + 2 items with its declared `requires`. Run-level state, reported below.
- `node tools/physics-support/frontier-item-gate.mjs --run … --tool depcheck -- --quiet`: exit 1 with
  257 run-level errors (151 `focus-item-unknown` for frontier items not yet authored elsewhere, plus
  66 `link-unresolved` and 40 `dep-unresolved`, the sampled ones all dangling references to such
  unauthored IDs, e.g. `thm-sr-tensor-and-current-transformation`) and 11 `cited-not-in-deps` warnings
  on other items; none names any of the six owned items or either page.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`:
  refreshed and deduplicated; 40/40 reviewed batches, 0 unreviewed, 0 orphaned reviews; batch 12's 37
  consumer edges are carried with their existing `open` review rows (see Findings 3).
- `node tools/physics-support/step3-decisions.mjs check` filtered to the six owned items: all six
  **CLOSED** (accept ×4, repaired ×2) on the recorded dependency lists. Decisions were re-recorded once
  after concurrent upstream edits (Findings 2).

## Findings for owner/operator reconciliation

1. **No unresolved supplier gap remains for this pair.** All 25 distinct direct in-run supplier IDs are
   authored and were compared against the actual consuming steps (reconciliation list above); the
   dispatch's "supplier not yet authored" escalation condition no longer holds. The four published
   mathematical suppliers used are read-only imports.
2. **Upstream churn during the pass (recorded, not a defect of this pair).** While this pair was being
   finalized, other groups edited carriers and manifests in the dependency closure
   (`items/lem-sr-energy-momentum-observer-identities.md`, `items/lem-sr-proper-time-parametrization.md`,
   `research/…-batch-2.pages.json`, `research/…-batch-3.pages.json`, observed 07:27–07:31Z). That
   staled the first receipts, which were re-recorded on the then-current bytes; the same writers may
   change the closure again before the Step-3 gate, which re-checks currency.
3. **Cross-batch reviews remain `open`.** The refreshed ledger keeps batch 12's 37 outbound edges with
   their existing reviewer status `open`; the evidence text still describes the suppliers as
   scaffold-only. The supplying items are now authored and this report records the reconciled uses;
   promoting those rows is left to the serial reconciler / Step 4 as instructed.
4. **Run-level gate failures not belonging to this pair (for Step 4).** `validate-plan` currently exits 1
   with 33 `undeclared-prereq` errors owned by other pages (including `sr-forces-and-continuum` and
   `sr-spacetime-primitives(-examples)`); `depcheck` exits 1 with 257 run-level findings, dominated by
   `focus-item-unknown` for frontier items that other batches have not yet authored. Neither set names
   this pair; no local repair is proposed.
5. **Published concerns: none confirmed.** No supplier statement used by these items was found false,
   mistyped or directionally wrong; no repair to another batch's item is proposed. The `exp` item's
   source limitations (no raw data, fit weights, covariance or likelihood; rest-frequency references
   21–22 not retrieved) are stated in the item itself.
6. **Page-edge observation for Step 4/5 (unchanged).** No item of this pair consumes a batch-9
   (`sr-forces-and-continuum`) item; the page `requires` edge is the plan/design declaration and is
   retained.

## Source verification record (experiment item)

- Downloaded `https://arxiv.org/pdf/1409.7951v1` this pass; sha256_16
  `d40420de81cf93d3` (first 16 hex of the SHA-256 of the 454448-byte PDF) matches the coverage stamp
  `research/physics-em-sr-40-2026-10-08-batch-12.coverage.json`.
- Verified in the full text: β=0.338 at 58.6 MeV/u; OODR Λ system
  3S₁(F=3/2)→3P₂(F=5/2) and 3S₁(F=5/2)→3P₂(F=5/2) with rest frequencies ν₁, ν₂; 386/780 nm beams;
  Table I values and every listed statistical/systematic scale; 40 fitted spectra; 44-scan average;
  81-point scan paused after 69; 49 MHz lab / 35 MHz rest linewidth; Eq. (3)/(4) with (1.5±2.3)×10⁻⁹;
  |α| ≤ 2.0×10⁻⁸; no published raw counts, fit weights, covariance or likelihood.
- Re-derived ε = √(ν_aν_p/(ν₁ν₂)) − 1 = 1.474484956533…×10⁻⁹ from the rounded Table I centers with
  exact decimal arithmetic (float64 evaluation of this expression loses the digits by cancellation;
  the exact computation matches the item).

## Honest uncertainty

- The experiment item reports the source's numbers and their source-labelled scales; it asserts no
  coverage or distributional law. The arXiv v1 text was verified; the journal version was not
  separately inspected, and the rest-frequency papers (refs 21–22) were not read here.
- The comparison theorem's reported-scale analysis is descriptive arithmetic (k=1 band and max-score
  comparison) exactly as stated; no p-value, confidence level or rejection rate is claimed, and the
  nominal-β evaluation carries no calibrated speed uncertainty.
- Decisions bind the exact current carrier and manifest bytes; with the run's concurrent writers,
  currency is re-established by the Step-3 gate check, not by this report.
- Signature prefixes above are the first 16 hex of each recorded receipt sha256; full receipts are at
  `research/physics-em-sr-40-2026-10-08-step3b-{review,owner}-<id>.json`.

## Next action

None beyond this pair's handoff: Steps 5–8 independent audit and the Step-3 gate proceed on these
authored carriers; if an upstream writer invalidates a receipt, re-run the item check and re-record
against the then-current bytes.
