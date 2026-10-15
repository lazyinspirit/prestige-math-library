# Batch 58 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-58`.

Reviewed in the generated dependency order. Exact obligations: the touched counterexample and `refuter:58:1`; no reader or page obligations.

## Level 0 checkpoint

`lem-finite-horizon-test-supermartingale-crossing-bound`: independently checked steps 1.1–3.1 against the current test-supermartingale definition, first-hitting lemma, discrete stopping-time definition, bounded optional-sampling theorem, expectation monotonicity and indicator expectation, and AC. Truncation is deterministically bounded; the stopped value is integrable and dominates the threshold indicator almost surely. This proves the sharper initial-mean bound, including N=0, zero initial mean and no crossing. Empty null family is vacuous, a>0 essential. No defect or decision owed. Complete specific risk review recorded in the batch contract. Initial risk report: four required items, zero errors.

Next: review the Ville theorem, then the counterexample and repeated-peeking example, preserving that order.

## Level 1 checkpoint

`thm-discrete-ville-inequality`: steps 1.1–5.1 checked against the reviewed finite bound, continuity from below, and current test-supermartingale, stopping-time and AC definitions. Both directions of the lower-threshold event identity hold even without attaining the supremum. Taking numerical bounds to alpha requires no interchange of unbounded expectations. Arbitrary stopping-time rejection is a measurable union over finite times contained in the crossing event. All hypotheses and AC uses match; no defect or decision owed. Risk review complete.

Source checks: Howard et al., https://arxiv.org/pdf/1808.03204, Lemma 1, printed p.14, and complete §6.1, p.44; Wolpert, https://www2.stat.duke.edu/courses/Fall10/sta205/lec/topics/mg.pdf, §1 p.1, §5 Theorem 4 and complete proof pp.11–12. Howard gives a conditional crossing bound; integrating yields the local initial-expectation bound. Wolpert states the martingale version; the local optional-sampling supplier supplies the supermartingale inequality. Source statements do not replace the local proofs.

Next: finish the counterexample review and its historical comparison, then repair the finite-peeking convention.

## Level 2 counterexample checkpoint

`cex-test-supermartingale-supremum-threshold-need-not-be-attained`: **accepted_repair**, confidence 1. Exact pre-reader bytes recovered at `research/statistical-models-experiments-62-owner-gate-boundary-sequential-before/items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md`; SHA-256 `a6a88903db9ce197f006202c62892fb94522a0170f2d2b99b2f49bf4ac89ca90` matches the pre snapshot. Current SHA-256 `f04b873e153e6f317a999111aac32dc712b2ac80a3f35838d8737f2e4f02dac8` matches post. The original universally quantified failure of equality is overstrong (the zero process has both probabilities zero). The reader correctly states the universal identity being refuted and makes the law and family explicit. No historical uncertainty remains.

All five construction steps and cited definitions/results were checked. The probability masses sum to one; finite partitions refine; m_n>1/4 prevents division by zero; the finite-atom conditional means satisfy every event-integral test. The bounded adapted nonnegative martingale starts at 1/2. On a, the process tends to 2 without reaching it; on b_k its finite set of nonzero values stays below 2. Supremum probability 1/4 and crossing probability zero provide the required witness at alpha=1/2, consistently with Ville. AC is inherited exactly as declared. Complete risk review recorded. Closed defect: `sme62-3a-b58-supremum-refuted-quantifier`.

Consumer check: no item cites this example; the owning B-page and manifest already describe the intended failure of a universal identity, so no consumer repair is needed. No published defect found.

Next: close `refuter:58:1` by explicitly stopping the finite sequence and freezing its filtration after K.

## Level 2 repeated-peeking checkpoint

`refuter:58:1`, `ex-independent-uniform-repeated-peeking-inflates-global-null-error`: **confirmed_nonfatal**, repaired with confidence 1. The pre-edit raw item SHA-256 `46773cc11465de6d48ae38bb7b9f79291d97fff71242678ea6be5eeccf2ff4ec` equals both immutable snapshots. Independently confirmed that only P_1,...,P_K exist, while the cited stopping-time definition requires all k>=0. The Example now sets F_k to the sigma-algebra of the first min(k,K) variables, with F_0 trivial, and step 1.2 takes the first rejection only over 1<=i<=K. Its event formula is empty at zero and constant from K onward, with infinity on paths having no rejection. This is a complete local closure without a new prerequisite.

Read the current independent-random-elements definition, full product-joint-law theorem and proof, stopping-time definition, AC definition, and previously reviewed Ville theorem. Mutual independence gives the product of K marginal nonrejection probabilities; the complement is exactly 1-(1-alpha)^K. Strict inflation uses K>=2 and 0<alpha<1; K=1 and alpha=0 or 1 give equality and are excluded. Comparison with Ville invokes AC and its process hypotheses only as stated, not for the elementary calculation. All six Verification steps checked. Contract derivation 1.2, degenerate-case evidence, risk review and manifest statement synchronized. Existing ai-generated provenance remains accurate; no judge stamp exists to invalidate. No new dependency or page was added.

Consumer scan over item and page wikilinks/metadata found only the assigned B-page placement, whose prose uses the unchanged error formula; no downstream repair is necessary. The batch cross-batch-dependency input is correctly empty: all in-run item suppliers and the A/B page relationship are internal to batch 58; remaining suppliers are published. No change to that input or unified ledger is needed. No published defect or owner escalation arose.

Closed defect: `sme62-3a-b58-finite-peeking-filtration`. The counterexample's active closed defect ID is `sme62-3a-b58-supremum-refuted-quantifier-closed`; its first row is retained and explicitly superseded solely to correct the ledger reference key from `file` to `path`, without changing the mathematical finding.

## Checks and handoff

Reflow and one-file precheck on the repaired repeated-peeking item passed (1 checked, 0 failing). Final checks are recorded below. All four required risk reviews are now complete in dependency order. Exactly two decisions authored; no extra untouched or page decisions. No judges, decision-hash stamping, scheduling transitions or gate batteries were initiated.

Final focused validation:

- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-58.proof-contracts.json --strict`: 4/4 items checked, zero errors or warnings.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-58.proof-contracts.json --require-reviewed`: all four HIGH/CRITICAL reviews complete, zero errors. The initial invocation without this flag routed the same four items.
- `node tools/rendercheck.mjs items/ex-independent-uniform-repeated-peeking-inflates-global-null-error.md items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md`: both files passed real KaTeX and renderer YAML checks.
- `node tools/proof-layout.mjs items/ex-independent-uniform-repeated-peeking-inflates-global-null-error.md items/cex-test-supermartingale-supremum-threshold-need-not-be-attained.md`: 2 items, 11 steps, zero defects, after the final item edit and reflow.
- Both ledger appends succeeded and regenerated the ledger view; the active rows are the two exact IDs named in the decisions. One superseded row preserves a mechanical reference-key correction and does not represent another defect.

An attempted renderer `--help` invocation was interpreted as an unscoped run because this tool does not implement that option. Its results are not used as validation; the explicit two-file invocation above is the relevant completed check.

No blockers, escalations, proposed withdrawals or defective published suppliers remain from this assigned review. No source item outside batch 58 was edited. Only the repeated-peeking item required a further source edit; the reader's counterexample source is accepted unchanged. Final engine hash stamping and gates remain with the build driver.

Final repaired example raw SHA-256 (evidence only, not a decision stamp): `8495fa3881c165aafa6137e818398498f1d7432c516c902ccac02a84d0aeba81`.
