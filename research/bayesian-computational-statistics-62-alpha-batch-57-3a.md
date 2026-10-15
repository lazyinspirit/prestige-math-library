# Step 3a adjudication — batch 57

Run: `bayesian-computational-statistics-62`. Group: `batch-57`.

Scope: one page obligation, no touched-item obligations, no reader or refuter findings. The seven risk reviews follow the generated dependency order. Reader/refuter reports and both immutable hash inventories were read. No decisions are owed for untouched, unflagged items solely because they require risk review.

## Completed mathematical review

### `cor-independent-replicate-mean-clt`

Reviewed Statement and Proof 1.1–2.1 against the current IID and moment Definitions, AC Definition, and Lindeberg–Levy Statement and Proof. The algebra gives exactly (sum Z_r - R mu)/(tau sqrt R). Mutual IID, a given infinite sequence, AC, and positive finite variance meet every cited hypothesis. Zero variance is excluded rather than divided by; no finite-R Student coverage or data-sampling claim follows. No new choice or replicate construction is used. No defect found.

Current carrier and prerequisites accepted without edits; risk review recorded in the owning proof contract. No routed item decision owed.

### `thm-error-ledger-mse-covariance-identity`

Reviewed Statement and Proof 1.1–6.1 against the current moment Definition, L1 linearity Statement/Proof and independent-product factorization Statement/Proof. Finite second moments imply first moments and centered second moments; 2|C_j C_k| <= C_j^2+C_k^2 makes every cross term integrable and the finite expansion also makes S square-integrable. Subtracting the variance sum proves both directions of the exact combined-correction criterion. Pairwise independence kills each covariance; zero total bias suffices even if individual biases cancel (step 5.1), while step 6.1 additionally illustrates centered components. m=1 has an empty pair sum; m=0 is excluded. No AC or limiting exchange is used. No defect found.

Current carrier and prerequisites accepted without edits; risk review recorded in the owning proof contract. No routed item decision owed.

### `ex-rqmc-replicate-error-estimate`

Reviewed Example and Verification 1.1–3.1 against the ledger Definition and the independent-replicate variance theorem, including its six-step proof. IID full-set randomizations, fixed data, finite variance and R=3 meet the theorem hypotheses; unbiasedness for I is an explicit assumption, not inferred from the label RQMC. Mean 8/15, squared-deviation sum 7/150, and variance estimate 7/900 are exact. Ledger error has sign returned-minus-target. The nonzero observed spread is consistent with the assumed law; the theorem also allows zero variance and requires R>=2. No CLT, Student interval or data-sampling inference is asserted. No defect found.

Current carrier and prerequisites accepted without edits; risk review recorded. No routed item decision owed. Next: level-2 examples.

### `ex-dot-product-roundoff-and-conditioning`

Reviewed Example and Verification 1.1–3.1 against the ledger Definition, telescoping theorem, floating-point model Definition/Remarks, and dot-product bound Statement/Proof. In [2^53,2^54) the spacing is 2; 10^16/2 is even, so the midpoint rounds down to 10^16 and the final sum is exactly 2 versus exact dot product 3. Products 10^16,1,-(10^16-2) and exact/rounded partial sums stay strictly within [2^-1022,(2-2^-52)2^1023] in magnitude. 3u<1; sum of magnitudes is 19999999999999999, gamma_3=3/(2^53-3), and the absolute bound exceeds the observed error 1. The nonzero result licenses kappa=sum/3; relative error is 1/3. The m=0 ledger gives error -1 and needs no random law beyond a deterministic one-point model. Conditioning is explanatory, not a theorem hypothesis. No defect found.

Current carrier accepted without edits; risk review recorded. No routed item decision owed.

### `ex-euler-discretization-bias-and-path-variance`

Reviewed Example, A1–A2 and Verification 1.1–3.1 against every F1–F11 current supplier Statement/Definition, with the already reviewed ledger and variance proofs. A1 gives differentiability on an open neighborhood of [0,1], ensuring endpoint continuity. The displayed difference quotient establishes the integrating-factor product rule; chain rule applies on R at limit points. MVT makes exp(-t)x(t) constant. The inverse identity exp(-t)exp(t)=1 follows by the same derivative-zero/MVT argument and exp(0)=1, so endpoint division yields x(1)=e X0. No general ODE existence theorem is needed: X0 exp(t) explicitly supplies a solution. E[X0^2]=5/2, theta=(5/2)e^2, theta_h=10, and e>2 give the strictly negative bias. The outputs 4 and 16 have mean 10 and variance 36. The map 4z^2 is Borel measurable, preserving independent copies and their common law; M>=2 meets the variance supplier and gives 36/M. The finite signed chain separates fixed bias from zero-mean simulation error without implying either independence of arbitrary error stages or vanishing bias as M grows. No AC or asymptotic claim is used. No defect found.

Current carrier accepted without edits; risk review recorded. The implicit exponential inverse identity is immediate from the same displayed integrating-factor calculation and is nonfatal proof polish. No routed item decision owed.

### `ex-permutation-pvalue-resolution`

Reviewed Example and Verification 1.1–3.1 against the finite-group setup and rank Definitions, orbit-rank validity Statement/Proof, and ledger telescoping theorem. The cyclic order-three group acts freely by bijections; the uniform law is invariant. Inclusive exact ranks across observed points e,a,a^2 are 1/3,2/3,1, directly confirming superuniformity including thresholds 0 and 1. For the given transformation list the statistics are 1,2,3,1 and one exceeds or equals 3, so p_+=2/5. Counts 0 through 4 yield the stated positive grid and difference 1/15; m=1 and final zero numerical error meet the ledger conventions. The rank supplier counts group elements with multiplicity; here that agrees with distinct orbit points. No random sampling law for the four transforms is needed for this realized calculation, and no finite-B validity or unbiasedness is asserted. No choice or zero denominator occurs. No defect found.

Current carrier accepted without edits; risk review recorded. No routed item decision owed. Next: level-4 bootstrap example.

### `ex-bootstrap-finite-b-versus-sampling-error`

Reviewed Example, A1–A3 and Verification 1.1–3.1 against all six current direct suppliers, including the actual batch-50 bootstrap procedure Definition and conditional-IID theorem Statement/Proof. The algorithm accepts n=2, the two declared finite sampling units, the full-power-set tuple sigma-algebra and measurable scalar statistic; its independent uniform with-replacement indices generate the four equally likely pairs. The observed data event has probability 3/16>0, so fixed-data conditioning is legitimate. Enumerating pairs yields means 0,1/2,1/2,1, conditional mean 1/2 and variance 1/8. Fresh repetitions are assumed independent: listed four-pair event probability is 1/256, average 5/8 and average variance 1/32. The chain 3/4,1/2,1/2,5/8,5/8 has errors -1/4,0,1/8,0 summing to -1/8. Population target, conditional bootstrap target and realized average remain distinct; no bootstrap validity or data-sampling uncertainty estimate is claimed. B=4 and n=2 avoid both supplier denominator boundaries; all relevant spaces are finite and no AC is needed. No defect found.

Current carrier and in-run suppliers accepted for this use without edits; risk review recorded. No routed item decision owed. All seven required item risk reviews are complete. Next: page-only obligation and focused checks.

## Page obligation

`page:57:statistical-and-computational-error-accounting`: **accepted_repair**, confidence 1. The reader reports replacing the A-page claim that floating-point bounds require normal-range and conditioning hypotheses. The current dot-product theorem Statement instead requires n*u<1 and normal-range products and sums, with no condition-number hypothesis; its Proof 1.1–5.1 establishes the absolute bound under those assumptions. The current example Verification 1.1–3.1 separately computes kappa and explains cancellation. The corrected page states those roles accurately; its complete summary also agrees with the reviewed ledger, covariance, replicate-variance and AC-dependent CLT items. Immutable page pre/post fingerprints differ (4bbf9e1fdeb04294e0b426b7c5b89363dc83aa7a4571b353d3c5b790e46d933b -> 075902b0a7d28e6d952fe65156c798e9487371d903a7dc61e7785398f53d8606), and current raw bytes match the post fingerprint. No further page edit is needed. The old wording is supported by the reader report; no full old-page byte comparison is claimed. Closed nonfatal defect: `bcs62-b57-page-roundoff-conditioning-hypothesis`.

The current A-page inventory and ordering agree with the five manifest items. The correlated two-point example was checked for the page's covariance warning: U=V, each variance 1, covariance 1, and mean square of U+V equal to 4. The corrected floating-point sentence agrees with the actual theorem rather than turning its conditioning explanation into an added hypothesis. No further source edit is needed.

## Sources, interfaces and scope limits

Sources for this review are the actual local carriers: each named item's Statement/Definition, Facts and Proof/Verification, and the exact prerequisite Statements/Definitions named above. In particular, the published Lindeberg–Levy theorem Statement and Proof supply precisely the AC-dependent standardized sum; the finite-group validity theorem Statement and Proof supply precisely invariant-null full-orbit superuniformity. The floating-point model Definition/Remarks give the normal-range exclusions and binary64 limits; the dot-product theorem Statement and Proof supply the gamma bound. No external source was needed to resolve unfamiliar mathematics and no external source reading is claimed.

Read the current batch-50 bootstrap Definition and full conditional-IID proof, plus the sampling-unit Definition, for the actual finite n=2 use. Read the four declared current prerequisite-page summaries. The Monte Carlo permutation algorithm Definition and validity Statement were checked only for their contextual interface: the owned example defines its reported value locally and does not invoke that validity theorem. No cross-validation-specific theorem or batch-28 consistency/variance-estimation claim is used by the owned proofs. This is not a new audit of every unrelated transitive ancestor or every item on contextual pages.

Maintained the owned cross-batch input, preserving all existing rows; updated the two declaration-only page records to verified for their actual interfaces and added current evidence to the bootstrap/permutation rows. Refreshed the unified ledger with the native tool. Added a batch-57 continuity note to `briefs/tasks/frontier-dependency-ledger.md`. No item Statement/Definition changed, so no new consumer propagation was triggered. No defective published supplier, outside consumer repair, withdrawal, escalation or unresolved mathematical uncertainty was found. Published carriers remained read-only.

## Focused checks and handoff

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-57.proof-contracts.json`: 11 items, seven HIGH/CRITICAL reviews required, zero errors.
- Final same command with `--require-reviewed`: 11 items, zero errors. All seven reviews contain item-specific hypotheses, derivations, boundaries and choice dispositions.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-57.proof-contracts.json --strict`: 11/11 items checked, zero errors and warnings.
- `node tools/rendercheck.mjs library/bayesian-computational-statistics/statistical-and-computational-error-accounting.md`: one file passed YAML and actual KaTeX checks. An earlier mistaken `--help` invocation began a broad scan; it was interrupted and supplies no validation evidence.
- All 11 current item raw SHA256 values match their immutable reader-post values; all item pre/post values are identical. Current A-page raw SHA256 matches the immutable post value above. The risk-review additions intentionally change the proof contract.
- `node tools/frontier-dependency-ledger.mjs refresh --run bayesian-computational-statistics-62`: refreshed and deduplicated successfully.

No item file was edited, so item reflow, precheck, proof-layout and judge-record invalidation were not triggered. No judges, decision stamping or engine gate battery were run. The decisions file contains exactly the sole page obligation; no risk-only item decisions or invented reader/refuter findings were added. Remaining handoff work belongs to the engine: hash binding, independent checks and stage transitions.

Final bookkeeping checks: the decisions JSON parses and exactly covers the one owed page obligation; all seven scope-listed risk reviews are complete. The closed page-defect row was appended through `tools/defect-ledger.mjs append`, which regenerated the shared view.

Run-level `node tools/defect-ledger.mjs validate --run bayesian-computational-statistics-62` checked 118 rows and exited 1 on two outside-scope batch-36 records: `bcs62-b36-heterogeneous-note-locator` and `bcs62-b36-adjacent-note-locator` both use unsupported location `source-notes`. No batch-57 row error was reported. Owner handoff: route these two mechanical taxonomy corrections to batch 36 or the ledger owner before the engine battery. They are not mathematical batch-57 defects and were not edited here. This run-level validation issue remains unresolved outside this dispatch; all batch-57 mathematical obligations are complete.
