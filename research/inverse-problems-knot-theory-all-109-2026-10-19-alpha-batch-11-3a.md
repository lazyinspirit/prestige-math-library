# Batch 11 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-11`; scope: batch 11 only.

## Completed review checkpoints

- Level 0, `lem-ip-gaussian-series-norm-tail-and-fourth-moment`: checked Statement, Facts and all six proof steps against the five actual supplier statements. Gaussian moments, finite mgf, strict-tail limit and quantile endpoint are sound, including all-zero weights. Completed risk review in batch 11 proof contracts. No decision owed for this untouched carrier.
- Level 4, `lem-ip-solit-filter-risk-decomposition-and-monotone-bias`: checked Statement, all four steps, and all eight direct suppliers. Finite trace ensures almost-sure coordinate convergence and L2 convergence; bias ordering and pairwise variance bounds follow coordinatewise. Completed risk review. No decision owed.

Source evidence opened: Li–Werner, https://arxiv.org/pdf/2304.10356 (v2); source sections for higher items remain to check. No historical acceptance is used as an independent verdict. Next: algorithm and its routed refuter finding, then theorem and examples, then published FTC finding.

- Level 5, `alg-ip-solit-parameter-choice`: reader endpoint/fallback repairs accepted and amended for confirmed nonfatal refuter finding `refuter:11:1`. Removed agreement proof prose from Definition, put explicit agreement in existing theorem Proof 1.1 and added theorem `justified_by`; manifest synchronized. The procedure and thresholds are unchanged. Checked its diagram and all four item consumers (theorem and three examples); no outside consumer found by exact-ID search. Risk complete. Next: finish theorem and example proofs.

- Level 6 theorem: all 13 proof steps checked, including comparison-count union bounds, both finite late-risk estimates, the variance split and both uniform rates. Reader repair accepted with the algorithm-discharge addition above. Risk complete. No Statement change.
- Level 6 antiderivative: Green kernel, odd-extension completeness, compact spectrum, grid and exact data checked; L2 identities ignore the midpoint indicator overlap. No item edit required. Consumer mathematics checked; risk remains OPEN pending owner resolution of the published FTC escalation below.
- Level 6 heat: reader simulation attribution repair accepted after reading source §5.3.3 and Figure 3. Diverging cutoff ratios and continuous Tikhonov grid verified. Risk complete.
- Level 6 gradiometry: reader multiplicity repair accepted: ordered lambda_j already repeats both modes, whereas per-frequency mu_n requires factor two. Ordering, Hilbert–Schmidt condition and grid checked. Risk complete.

## Final decisions and escalation

Exactly six obligations are recorded in the companion decisions JSON: four touched carriers, one flagged/refuter finding and one reader finding. No page or foreign-refuter gate obligation is owed.

- `touched:11:alg-ip-solit-parameter-choice`: `amended_repair`. Reader threshold-domain and totalization edits retained; structural refuter repair added. Closed rows `ipkt109-b11-3a-algorithm-totalization` and (for the independent flagged obligation) `ipkt109-b11-3a-algorithm-property-placement`.
- `refuter:11:1`: `confirmed_nonfatal`. The removed agreement argument is mathematically sound but belongs in a proved result. The existing oracle theorem now states the agreement explicitly in Proof 1.1 and discharges the algorithm through `justified_by`. No new item, page, procedure or ordinary dependency cycle introduced.
- `touched:11:thm-ip-solit-oracle-risk-and-rate`: `amended_repair`. Reader measurable-Cauchy-event argument retained; explicit a.s. agreement added. Closed row `ipkt109-b11-3a-selector-measurability`. Its Statement is unchanged.
- `touched:11:ex-ip-solit-periodic-heat-equation`: `accepted_repair`. Source supports the revised empirical attribution; closed row `ipkt109-b11-3a-heat-attribution`.
- `touched:11:ex-ip-solit-satellite-gradiometry`: `accepted_repair`. Per-frequency trace uses multiplicity two exactly once; closed row `ipkt109-b11-3a-gradiometry-multiplicity`.
- `reader:11:1`: `escalated`, with independently revised rationale. Its supplier `def-l-one-of-a-measure` explicitly defines integrable representatives, so the reader's quotient premise is rejected. Nevertheless the published FTC Statement claims equality at every point where F is differentiable. Take a=0, b=1 and the integrable representative f=1_{ {1/2} }. Its indefinite integral F is identically zero, so F is differentiable everywhere but F'(1/2)=0 differs from f(1/2)=1. The actual Proof 2.1–3.1 supplies only a full-measure good set, which is the correct conclusion. This is a false stronger written claim, not merely a missing routine proof step.

The published source is untouched. Its current canonical guard is exactly the routed `pre_sha256`, `c5d97e2b82654929a87831eb7ad015ed573b82c3de2f7879eb970a46427a830b`; the earlier format-only owner receipt does not fix the mathematical clause. The exact item, consumer, suppliers, counterexample and repair strategy are recorded in `research/published-consumer-supplier-ledger.md`, including one deduplicated classification-index row. The published ledger lock was acquired before each reread/merge and only this worker's lock was released.

Open row: `ipkt109-b11-3a-published-ftc-pointwise-strength`. Required owner action: correct the supplier Statement to equality on a specified full-measure good set, or equality almost everywhere, check its actual consumers, and explicitly resolve this escalation. Attempted local closure: read the full current FTC proof and its two mathematical supplier statements, checked the representative convention, and checked the antiderivative's direct Fubini derivation. These validate the assigned consumer mathematics but cannot repair published text inside this dispatch. The antiderivative risk review remains open; no repair confidence or source closure is asserted for it. No substantial new mathematical theorem is missing.

## Scope, sources and consumer review

All eight assigned items were read, with actual direct supplier Statements/Definitions; the full published FTC proof was additionally read. No full transitive proof audit of published functional-analysis suppliers is claimed. All four exact-ID item consumers of the algorithm are owned here: oracle theorem and the three examples. Their actual uses are unchanged. The three examples' Statements are unchanged by Alpha, and no further consumer hop is required. The two scoped pages remain frontmatter-only with `page_layout: compact-v1` and unchanged inventories. The sole assigned TikZ diagram is the algorithm rule diagram: labels and arrows agree with the operational order; no repair or additional diagram is needed. The prerequisite sequence-model coordinate diagram was checked as context and makes only its stated deterministic commutative-square claim.

Source consulted independently: [Li and Werner, arXiv:2304.10356v2](https://arxiv.org/pdf/2304.10356). Read the grid/selector material §§3.2.1–3.2.2, the counting-surrogate and variance material §3.3, the severe-rate statement in §4.2.2 and restriction discussion, and the example passages §§5.3.1–5.3.3. The heat empirical claim and Monte Carlo count are at §5.3.3/Figure 3, PDF page index 22. The local theorem proves its own finite oracle constants and rates; the paper's sharper oracle bound and its external supplement are not premises. Spokoiny–Willrich and Clason remain contextual bibliography: their full texts were not independently read in this dispatch and no import from them is certified. No uncertain external theorem was substituted for a local proof.

The indicator overlap at x=1/2 in the antiderivative truth/data formulas changes one representative value only. The Example is explicitly in the L2 quotient space; both integrals and the data class are unaffected. The branch polynomials specify its unique continuous Dirichlet representative. This is not a false L2 datum and no needless formula edit was made.

Starting current raw item hashes matched all eight reader-post snapshot hashes; the four touched carriers differ from reader-pre as listed in the task. The two Alpha item edits are only the algorithm/theorem changes above; no historical preimage reconstruction or unknown-delta resolution is claimed. Six native risk reviews are complete; the antiderivative review is open solely for the published supplier escalation. Historical root risk notes are replaced by these independent, item-specific dispositions, without erasing the independent reader/refuter artifacts.

Consumer-owned cross-batch entries now carry bounded current Alpha interface evidence; historical evidence is preserved. `briefs/tasks/frontier-dependency-ledger.md` records this batch's dispositions, and the native refresh command completed. No new cross-batch edge or withdrawal is proposed. Live disk status recomputation showed Step 3a active and batch 11 awaiting adjudication; Git HEAD was `ace06e03bc`. No judge, stamp, dispatch, engine transition, publication, push or commit was performed.

## Local checks and handoff

- Initial risk report: eight items routed, seven HIGH/CRITICAL; no errors without `--require-reviewed`.
- Reflow: both Alpha-edited items unchanged.
- Precheck of both edited paths: theorem passed; algorithm not applicable; one proof checked, zero failures.
- Focused proof-contract check: both edited items passed, zero errors/warnings after adding explicit Definition anchors to two boundary-evidence notes. The earlier missing-anchor diagnostic was mechanical and created no defect row.
- Rendercheck: both edited files passed actual KaTeX and renderer YAML parsing.
- Final required batched proof-layout, after all item edits/reflow: two items, thirteen steps, zero defects. No item edits followed it.
- Final risk report with `--require-reviewed`: exit 1, exactly one error for `ex-ip-solit-antiderivative`, deliberately left open for the published FTC escalation. The earlier fully-complete risk report preceded recognizing that the false published clause cannot honestly receive a closed repair disposition; it is not the handoff result.

The owner must resolve `reader:11:1` before native closure. All other routed work and authorized local repairs are complete; the engine owns hash stamping and subsequent gate batteries.


## Subsequent root owner resolution

Recorded 2026-10-21T08:03:34.157054+00:00. The genuine final native escalation and report are archived unchanged under `research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/ftc-root-application/native-before`. Root corrected the published FTC full-measure conclusion under an actual pre-edit claim and recorded the current local repair in `research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/ftc-root-application/receipt.json`. All29direct interfaces were checked by the same delegated repair reviewer; root independently read the full supplier proof and both frontier consumer arguments. No consumer proof edits were needed. Two exact supplier-quote mirrors and the open SOLIT risk disposition were updated. The original open fatal row remains history; append-only successor `ipkt109-b11-owner-ftc-ae-repair` records the actual fixed defect. The current decision is owner-resolved `confirmed_fatal`, confidence1, not a claim that the native worker repaired or accepted the published source. Focused proof/render checks pass; final proof-layout reports3steps and0defects. Complete Step3 owner preparation and the full native battery remain owed.
