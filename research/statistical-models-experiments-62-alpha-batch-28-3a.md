# Batch 28 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-28`.

The scope routes only `touched:28:thm-likelihood-contributions-under-censoring-and-delayed-entry`. Reader and refuter findings are empty; no page decisions are owed. The generated order places the definition risk review before the theorem.

## Completed definition review

`def-event-time-observation-schemes`: HIGH risk review complete in the owning contract. Read the entire Definition and all seven direct supplier interfaces, including the complete RCD and factorization proofs. Nonnegative times, standard-Borel covariates, specified probability kernels, and AC-supported existence are compatible. Min/status maps are measurable; ties are events, intervals are (L,R], entry is strict T>L, and right truncation is strict T<R. Independence and parameter-distinct observation laws are assumptions, not empirical conclusions. No change or decision is owed for this untouched definition.

Sources read: [Yu](https://people.math.binghamton.edu/qyu/ftp/surv5.pdf), §§1.2.2 and 1.3 (PDF pp. 3 and 5); [Tian](https://web.stanford.edu/~lutian/coursepdf/unit2.pdf), §2.1 (PDF pp. 1–3); [Lin](https://web.ntpu.edu.tw/~stou/class/tku/07EN02SurvBasicPPT.pdf), slide 95. Lin uses weak right truncation; strict endpoints here are explicit conventions requiring the local atom-sensitive proof.

Initial risk-report: exit 0, HIGH definition, CRITICAL theorem, two MODERATE examples. No published supplier defect identified. Next: complete theorem delta, proof, consumer and contract review, then local checks and the sole decision.

## Completed theorem review and historical delta

Verdict: `amended_repair`, repair confidence 1. The mathematical reader edits are accepted without changing the item. Alpha reconciled the stale Statement mirror in `research/statistical-models-experiments-62-batch-28.pages.json`, updated contract derivations 3.1, 3.2 and 5.1 to the current text, added the kernel-citation use at 1.5, and completed the CRITICAL risk review. The amendment concerns these current carriers.

The complete archived pre-reader source at `research/statistical-models-experiments-62-owner-boundary-12-28-31-33-before/items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md` has raw SHA-256 `fd2ca68ac5721a7603e4fc107923fe9ee8fb9ab963a6b4ce4c26ec178bb6cd7c`, exactly the pre snapshot. The current raw SHA-256 is `30875312eb929a6f6f696859d42aef2c60fa20e409359465b640fd7d7b18d709`, exactly the post snapshot. Their full delta confirms the reader report: positivity almost surely under each pre-selection law replaces undefined “support”; step 1.1 establishes the Polish targets; new step 1.5 proves measurable tails and both branch steps use it. No missing historical preimage or owner resolution is needed. There is no stale judge record.

Closed defect rows, all owned at `3a-adjudicate` and referenced by the sole touched decision:

- `sme62-3a-batch28-entry-positivity`: nonfatal ambiguous support convention, now an explicit parameter-specific almost-sure positivity hypothesis.
- `sme62-3a-batch28-standard-borel-target`: polish omission of the immediate finite-dimensional standard-Borel prerequisite, now proved in step 1.1.
- `sme62-3a-batch28-tail-measurability`: polish omission of variable-threshold tail measurability, now proved in step 1.5 and used in 3.1–3.2.

These omissions did not make the censoring or selection formulas false. No defect row was created for manifest/contract reconciliation or risk-review bookkeeping.

## Mathematical evidence

Read all current Statement, Facts and 11 proof steps, each of the 24 direct dependency interfaces, and the relevant complete RCD/factorization, rational-generator, pi-lambda, product-measure, Tonelli, Stieltjes-correspondence and atom proofs. For step 1.1, if two points were indistinguishable by every rational ray they would remain so under all sigma-algebra operations, contradicting the real-ray separating set; this justifies its rational-density deduction. Completeness is coordinatewise in the max metric, and countability supplies separability. Step 2.1 removes a countable union of null sets for each fixed parameter pair, then applies finite probability-measure determination. No common null set over all parameters is asserted.

The dyadic ceiling rays increase to (u,infinity), while the dyadic floor rays decrease to [u,infinity). Both are countably-valued Borel threshold evaluations, and probability continuity supplies the measurable pointwise limits even at zero and exact dyadic thresholds. Tonelli applies to nonnegative Borel event/censor indicators under probability product measures. The two-branch reference measure is fixed and sigma-finite; the status branches exhaust the whole observation law. The library's normalized Stieltjes function differs from a probability CDF by its constant mass through zero, so the cited increments and jumps are unchanged, including a possible atom at zero.

Checked L=R (empty interval), zero times, ties T=C, deterministic censoring, censor atoms at entry, and strict truncation with an atom at R. In particular, T<R uses F(R-) rather than F(R). Delayed-entry conditioning restricts only the T coordinate of the conditional product law and normalizes by S(L) exactly once; at censoring u=L the survivor ratio is 1. Random entry retains the pre-selection independent, parameter-distinct entry model, and the result conditions on observed entry and inclusion rather than discarding the parameter-dependent selected marginal entry law. Zero selection denominators are excluded. Both status branches are defined by cases, so zero factors introduce no 0^0 convention. The result asserts no converse independence criterion or empirical validity.

Sources independently read: Yu §§1.2.2 and 1.3 support the min/status and current-status conventions; Tian §2.1, PDF pp. 1–4, gives fixed/random independent censoring and the product parameter space behind separation. Lin slides 80, 82–84, 95 and 99–104 give interval, censoring and independent truncation factors. Lin slide 101 uses weak right truncation, and slide 83 differs from slide 84 at the left endpoint; the current explicit strict conventions and local proof resolve that source difference. Source URLs are linked above. The sources do not substitute for local proofs.

## Consumers, dependencies and published findings

The complete `items/` and `library/` reference search found the sole direct item consumer `ex-event-time-observation-likelihoods-and-delayed-entry` and the A page. Read both actual uses. The example uses fixed entry L=1, exponential S_lambda(1)=exp(-lambda)>0 for all lambda>0, and fixed censoring after entry. Its formulas and the page summary remain sound; no consumer edit is necessary and hence no further hop is triggered. No affected outside consumer or proposed withdrawal was found.

Rechecked `def-scientific-statistical-model-contract` and its home page, preserved and enriched the two existing owned cross-batch dependency rows, and ran the prescribed frontier-ledger refresh (exit 0). No new logical supplier or choice assumption was introduced. AC supports the conditional versions/factorization and inherited likelihood-density convention; countable choice is inherited by the interval/atom suppliers. No published supplier defect was found; published files remain read-only. Review did not re-audit every transitive supplier closure.

The ledger append closed all three rows and refreshed the generated view successfully. Next: focused local contract, precheck, renderer and layout checks, final required risk-report pass, then write the single decision. The engine owns stamping and the gate battery.

The first focused strict contract check found three mechanical inconsistencies: aggregate F4/F7 use mappings omitted newly cited steps, and the example contract retained an old full-statement quotation. Reconciled all rows within each fact label and replaced the consumer citation quotation with the current supplier Statement. No item text or consumer argument changed; no mechanical-failure defect row was created. Precheck, renderer and required risk review check passed on that first pass.

## Final local checks and handoff

- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-28.proof-contracts.json --strict`: final exit 0, 0 errors, 0 warnings, 4/4 items checked, after the mechanical citation reconciliation described above.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md`: exit 0, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/def-event-time-observation-schemes.md items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md`: exit 0, both files parse with the renderer YAML and real KaTeX parsers.
- `node tools/proof-layout.mjs items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md`: exit 0, 1 item, 11 steps, 0 defects. No item source was edited by Alpha; this additionally verifies the retained reader layout.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-28.proof-contracts.json`: final exit 0, HIGH definition and CRITICAL theorem; both complete risk reviews recorded before closing.
- The same command with `--require-reviewed`: final exit 0, 0 errors, 4 items routed.
- `node tools/frontier-dependency-ledger.mjs refresh --run statistical-models-experiments-62`: exit 0, refreshed and deduplicated.
- `node tools/defect-ledger.mjs append --file /tmp/sme62-batch28-defect-rows.json`: exit 0, appended three closed rows and regenerated the view.

Wrote exactly the task-named report and decisions JSON, with one decision for the sole owed obligation. No reader/refuter/page finding decisions were invented. All four stable item IDs remain in place; no withdrawal, published defect, outside consumer repair, blocker or escalation remains from this review. The engine must stamp decision hashes and run its gate battery; these local checks are not a judge verdict or self-certification.
