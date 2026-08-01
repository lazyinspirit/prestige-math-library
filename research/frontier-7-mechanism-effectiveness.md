# Frontier 7 — mechanism-effectiveness ledger

**Purpose.** This is an evidence ledger, not a list of presumed benefits. For
each newly introduced or materially revised control exercised in Frontier 7,
record the observed trigger, defect class, disposition, false-positive or blind
spot, and measurable cost. A clean run is recorded as “no trigger observed,” not
as proof that the mechanism prevented an error.

## Measurement rules

1. **Evidence source.** Cite the exact command output, manifest, touch snapshot,
   judge/attempt ledger, audit receipt, or item id. Agent assertions without an
   on-disk receipt do not count as a detection.
2. **Effectiveness categories.** Use one of: `prevented before authoring`,
   `detected before publication`, `blocked invalid state`, `false positive`,
   `no trigger observed`, or `inconclusive`.
3. **Cost.** Record wall time when the tool reports it, counts of items/pages or
   judge calls, and any human/Alpha adjudication load. Do not fabricate a time
   measurement that was not captured.
4. **Comparisons.** DeepSeek and Terra are compared only from current,
   hash-attested verdict rows and Alpha adjudications. Raw rejection volume is
   never treated as mathematical effectiveness or recall.
5. **Step 10.** Report every row, including no-trigger and inconclusive rows;
   separate concrete findings from limitations and proposed follow-up work.

## Baseline — Step 0

| mechanism | effectiveness status | evidence and observation | cost / limitation |
|---|---|---|---|
| Beta two-pair capacity cap | blocked invalid state | `content-policy.mjs` was run on a synthetic three-A-page manifest and returned `ERROR batch-a-pair-cap`; the selected Frontier-7 plan has four batches of exactly two pairs. | One inexpensive manifest parse; semantic quality is not measured by the cap. |
| Independent 16/16 paired-judge pools | no trigger observed | `tools/judge-sweep.mjs` now has `MODEL_CONCURRENCY` values 16 for both `deepseek-v4-pro` and `gpt-5.6-terra`; `node --check` passed. | No live Step-7 traffic yet, so throughput, rate-limit behavior, and verdict quality are unmeasured. |
| Source-grounded dependency closure and legacy-unclassified check | in progress | Beta batches are required to log every proposed published dependency, exact statement check, and confidence route before Step 3. | Results await all Step-1/2 manifests and notes. |
| Authorship / generated-claim containment | in progress | `content-policy.mjs`, the batch notes, and proof contracts will provide scope receipts after Step 5. | The tool verifies records and graph containment, not semantic provenance truth. |
| Proof contracts, finite smoke, and risk routing | in progress | Each Beta is preparing a per-batch contract; merged strict, smoke, and risk receipts will be recorded after authoring and audit. | No proof text exists yet. |
| Audit manifest, independent readers, Alpha proof-refuters | in progress | The relationship manifest and coverage receipt will be generated after Step 5; findings are independently adjudicated by Alpha. | Cannot measure coverage until planned scaffolds are spliced and items exist. |
| Touchlog and impact audit | no trigger observed | No public interface has changed and no published dependency repair has been proposed at Step 0. | The absence of a repair does not test consumer-disposition quality. |
| Current-context paired judge coverage | no trigger observed | Step 7 has not begun; no verdict ledger exists. | No comparison is possible before both model lanes finish on frozen current contexts. |
| Dependency-spine audit | no trigger observed | The spine receipt will be generated after contracts and Step-6 audit are complete. | No drafted proof cone is yet eligible for review. |

## Step 1–2 observations awaiting Step-3 adoption

| mechanism | effectiveness status | evidence and observation | cost / limitation |
|---|---|---|---|
| Source-grounded scaffold review and proof-obligation pass | detected before authoring | `research/frontier-7-batch-2.notes.md` identified two false inherited RA-27 scaffold clauses: the unqualified rational-supremum formula for `a^x` is unbounded above when `0<a<1`; and a Landau expression with multiplier `2^n` and exponent `1/n` diverges for `x\ne1` rather than converging to `\log x`. Direct asymptotics verify both. The proposed repairs define the subunit-base case through a reciprocal base and use dyadic roots `x^{1/2^n}`. | The findings are recommendations until Step 3 verifies and adopts them. They measure scaffold correction, not proof correctness. |
| Manifest-only pre-authoring gate | detected before authoring | The ordinary item-policy mode reported missing authored files when pointed at a scaffold manifest: an expected lifecycle condition, but unusable as a passing Step-0 check. `content-policy.mjs --manifest-only` was added and then passed for batches 1–3: 152 scoped item declarations, 0 errors, 0 warnings. It still rejects an over-cap manifest. | This checks manifest shape, duplicate ids, and capacity only. The full provenance/content gate remains mandatory after Step 5. |
| New-id collision and batch-cap checks | no trigger observed | The manifest-only mode now also rejects a collision with an existing item file or a different planned page. It passed for batches 1–3: 152 planned items, no duplicate ids, no current-plan collision, and two A pages per manifest. | It does not prove that proposed claims are non-duplicate mathematically; Beta's semantic reuse audit remains to be checked. |
| Mechanical B-leaf dependency check | prevented before authoring | The first all-batch closure pass caught three prohibited B-to-B dependency edges in `research/frontier-7-batch-4.pages.json`: the Stone–Čech false statement cited its B counterexample, and two metrization false statements cited their B examples. The Beta replaced each with a self-contained refutation using only A/published premises; the persistent `content-policy.mjs --manifest-only` B-leaf check then passed across all four batches (185 scoped items, 0 errors). | This is a structural graph check; it cannot tell whether the replacement proof is mathematically sound. Step 6 and both judges must read the resulting refutations. |
| Full plan prerequisite-closure validation | detected before authoring | Immediately after the Step-4 splice, `validate-plan` rejected the Tychonoff page because its use of published productive/hereditary separation lemmas was not reflected in page-level `requires`. The manifest and plan now declare `hereditary-and-productive-separation`; that page is published. | This detects page-closure metadata, not a false theorem. It prevented a real dependency citation from remaining invisible in the public prerequisite list. |
| Alpha single-writer scaffold propagation | no trigger observed | `research/frontier-7-alpha.md` records all approved AA-3, GT-3, RA-17, RA-27, RA-28, RA-34, T7, and T8b prose amendments, with no source-text mismatch. The deferred published oscillator change was not applied. `git diff --check` passed. | This confirms controlled propagation, not the truth of the future proof text. |

## Step 8 final adjudication and current-context closure

| mechanism | effectiveness status | evidence and observation | cost / limitation |
|---|---|---|---|
| Paired current-context rejudge | detected before publication | The final DeepSeek and Terra rows for `thm-hyperbolic-identities-and-derivatives` are both PASS on the identical current hash `079a82e3724e5ecb9e352e6cfa9931e57e2baeeef8923ff69a7eaf21a02ba9a7`. The preceding paired rejections exposed citation-fidelity defects in the repeated proof; the final adjudicated target has no current rejection. | This is one repaired target, not a recall measurement for the library. Judge verdicts remain model evidence, not a proof certificate. |
| Alpha adjudication ledger | detected before publication | `tools/judge-compare.mjs` reports `status: complete` after backfilling the two original `lem-alexandroff-urysohn-metrization-lemma` records as confirmed-fatal logic defects. The ledger has 158 raw rejection rows, 157 unique model/context candidates, and one duplicate ignored. DeepSeek: 57 adjudicated, 11 fatal (7 logic, 4 dependency/citation), 26 nonfatal, 20 false positive, rate 0.19298245614035087. Terra: 100 adjudicated, 14 fatal (8 logic, 6 dependency/citation), 56 nonfatal, 30 false positive, rate 0.14. | These are candidate-precision statistics only; the ledger cannot measure recall without an independently enumerated defect population. |
| Dependency-spine independent proof reading | no trigger observed | `research/frontier-7-dependency-spine-audit.json` validates for all 67 proof-bearing items in the top-100 transitive-consumer-cone scope (`5722d96e58f5c9ddb74532a1ef057ca2bd5a7b4ca6d3934d88d1cc81ec7f0012`). Alpha recorded a current item-level reading note for every proof and found no new fatal defect. | The scope excludes non-proof items in the top 100 and a human read does not establish completeness or replace paired judging. |
| Level coverage and current-context freshness | blocked invalid state | The required coverage receipt now has the exact 185-item / 143-proof manifest scope, 30 explicit dependency-drift reconciliations, and a nonempty attestation. With the spine receipt, contracts, and judge ledger, `level-coverage.mjs --verify-current-context` exits successfully, recomputing current hashes rather than accepting stale verdicts. | The gate confirms scoped metadata, contracts, paired coverage, and hash freshness; it does not by itself validate mathematical truth. |

The final rows supersede the provisional Step-0 “in progress” and “no trigger
observed” entries for mechanisms that were later exercised. They report
observed detections and closure evidence without treating raw rejection volume,
clean structural checks, or a limited spine read as a quality or recall score.
