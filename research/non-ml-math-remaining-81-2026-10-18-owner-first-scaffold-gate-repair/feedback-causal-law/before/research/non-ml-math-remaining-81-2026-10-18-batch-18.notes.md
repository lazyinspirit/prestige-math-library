# Batch 18 — authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Assigned pair: `multiuser-channel-networks` / `multiuser-channel-networks-examples`  
Scheduling input SHA-256: `bf938b0fc1b06e93ab63e655a31a9ea4fd0208b0f29287b15cdb4d1bb99462f2`

## Controlling direction and scope

The current Information Theory plan is [plan-information-theory-track.md](plan-information-theory-track.md), IT11. It calls for the independent-private-message product-input DM-MAC region, a separate real Gaussian MAC proof, the physically degraded broadcast region, finite-DMC feedback no-gain, Ozarow's exact AWGN-MAC feedback region, the Cover–Leung feedback inner bound, and a correlated-source MAC sufficient condition. It explicitly treats these as special cases or named bounds, not a general network formula. The task identifies **no pair design section**; none governed this authoring. The owner direction contains no IT11-specific override. No plan/task design conflict was found.

The page order/category and prerequisite follow the assignment: A page 2528 in information theory requires `lossy-source-coding-with-side-information`; its B page 2529 requires A. The A page stays below the 100-item cap at 23 items; B has 3.

## Inventory and dependency levels

The manifest was fixed before carriers were written. The batch scheduling level remains 6 with prerequisite batch 17. Item levels below are recomputed from the complete current run graph and are stored in both the manifest and item frontmatter. B items are ordered by level.

- **Level 0:** def-it-real-differential-entropy, def-it-two-user-real-awgn-mac-code
- **Level 1:** def-it-two-user-real-awgn-mac-feedback-code, lem-it-finite-gaussian-mixture-entropy-bounds
- **Level 2:** def-it-physically-degraded-dm-broadcast-channel, def-it-two-user-discrete-memoryless-mac, lem-it-awgn-feedback-estimation-covariance-update
- **Level 3:** def-it-finite-dmc-feedback-code, def-it-physically-degraded-dm-broadcast-code, def-it-two-user-discrete-memoryless-mac-code, def-it-two-user-discrete-memoryless-mac-feedback-code, lem-it-fano-for-finite-message-density-observations, lem-it-ozarow-feedback-sum-corner-achievable
- **Level 4:** def-it-two-correlated-iid-sources-over-dm-mac-code, lem-it-awgn-feedback-rate-splitting-achievable, thm-it-cover-leung-feedback-mac-inner-bound, thm-it-two-user-real-awgn-mac-capacity-region
- **Level 5:** lem-it-cover-elgamal-salehi-conditional-packing, thm-it-ozarow-awgn-mac-feedback-capacity-region
- **Level 6:** thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition, ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho
- **Level 7:** thm-it-finite-dmc-feedback-does-not-increase-capacity, thm-it-physically-degraded-dm-broadcast-capacity-region, thm-it-two-user-discrete-memoryless-mac-capacity-region
- **Level 8:** ex-it-binary-xor-dm-mac-product-input-region, ex-it-correlated-source-binary-adder-dm-mac

A new local supplier, `lem-it-cover-elgamal-salehi-conditional-packing` (level 5), supplies the detailed wrong-source candidate exponents used by the CES sufficient-condition theorem. The CES example directly includes the independent-private-message DM-MAC theorem because it compares source-description rates with that region's sum constraint. The corresponding dependencies and item levels are consistent across the frontmatter and manifest.

There are 19 unique external item suppliers in `batch-18.cross-batch-dependencies.json`. Their required facts, exact current supplier excerpts, page/batch placement, supplier status and consumer claims are recorded there. The two direct suppliers from batch 17 are `def-it-finite-strongly-typical-set` and `lem-it-finite-type-class-cardinality-bounds`; I inspected their current bodies and proofs where present, and their Step 1 records currently say ready. They supply support-restricted typicality and polynomial type-class counting for the CES packing argument. The required WZ page exists as a draft and its current page/body interface was inspected; this is not a claim of page acceptance or publication. No logical supplier body required by this pair was missing.

## Mathematical scope and corrections

The A page defines the no-feedback and feedback code conventions, then proves the no-feedback AWGN and finite DM-MAC regions, point-to-point finite-DMC feedback result, degraded-broadcast region, Ozarow feedback result, Cover–Leung inner bound and CES sufficient condition. The page keeps the expected-average-power model, rates in nats, and independent private messages explicit. Cover–Leung remains an inner bound; CES remains sufficient only. The B examples are finite calculations for the binary adder, a selected Ozarow region point, and the binary XOR MAC.

Two draft wording errors were corrected by direct calculation. The binary XOR product-input region is the triangle (R_1,R_2ge0), (R_1+R_2leln2), not a pentagon; public time-sharing may create an unconditional correlated mixture, while each fixed-Q input law remains a product and the diagonal mixture carries zero conditional private-message information. The binary-adder output is ternary, and its maximum product-input sum information is (3ln2/2), not (ln2). The example now proves the finite Fano lower bound (ln3) on the sum of separate lossless description rates and compares it with the product-input channel sum bound; the uncoded correlated-source map is still verified at zero error. These corrections do not change IT11 scope.

TikZ diagrams on both pages are explanatory only: the MAC feedback arrows, degraded broadcast chain, separate source encoders, and binary-adder mapping are described in the text. No proof step relies on a diagram.

## Sources and retrieval

The A harvest uses five retrieved full texts: Cover–Thomas, El Gamal–Kim, the original Cover–Leung paper, El Gamal–Cover's correlated-source paper, and Lapidoth–Wigger. The B harvest uses four of those texts. The coverage ledger records 38 source headings/results with explicit dispositions. `source-fetch-check --stamp` verified all 9 source rows (5 unique URLs); no covered source was dropped. Full-text locators, local cache paths, hashes, byte/page counts and actual stamps are in `batch-18.source-evidence.json`.

Cover–Thomas uses bits in several statements; local pages explicitly use nats. Its degraded-broadcast section gives superposition achievability but leaves the converse as an exercise, which is proved locally. Its Gaussian MAC uses a per-codeword power convention; the local expected-average-power proof handles codeword selection/expurgation. These are recorded as scope/convention limits, not imported proof gaps.

A supplementary MIT thesis candidate for Ozarow was not included in the coverage set. Prior attempts were reported as HTTP 429 for the MIT bitstream, HTTP 404 for a CiteSeerX candidate, and metadata HTML rather than PDF from the handle URL; the handoff retained no timestamps, so none were reconstructed. This turn searched the thesis and paper titles and the ETH Zurich paper host; the MIT DSpace item identified the same bitstream, and clicking its current download link returned a tool Cache miss. The Ozarow theorem and rate-splitting arguments instead have complete local proofs and two retrieved full-text treatments (El Gamal–Kim Lecture 18 and Lapidoth–Wigger §III-A/Remark IV.15 with §IV-E3). No covered source remains unresolved and no source is marked dropped. This unused candidate history is preserved in the source-evidence file; no formal source-resolution status was assigned to a source outside the coverage set.

## Scoped check results and blockers

The final scoped results are recorded here after the run; a passing authoring record is not independent approval.

- `proof-layout`: 26 items, 117 steps, 0 defects.
- `proof-contract --strict`: 26/26 checked, 0 errors, 0 warnings; 92 exact supplier quotations and 117 step mappings.
- `coverage-checklist`: 2 pages, 38 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 9/9 source rows fetch-verified, 0 drops.
- `content-policy`: 26 scoped items, 0 errors, 0 warnings.
- Focused `depcheck`: 26 target items; closure of 852 items and 452 pages; 0 errors and 0 warnings.
- `rendercheck`: all 26 items and 2 pages (28 files), 0 errors and 0 warnings.
- The full-run item dependency check reports 80 errors elsewhere in the run (including the empty `relay-and-interference-channel-bounds-examples` scaffold, duplicate ownership in the Temperley–Lieb group, stale DMC levels in batch 12, and missing/stale labels in other quantum/Hall/subfactor batches). The 26 batch-18 IDs have no dependency-level error in the full graph. No unrelated item or batch was changed.
- `precheck.mts` is the remaining scoped tooling blocker: it exits 1 for 26/26. Twenty items return a proposed layer-renumbering repair: `def-it-real-differential-entropy`, `def-it-two-user-real-awgn-mac-code`, `def-it-two-user-real-awgn-mac-feedback-code`, `lem-it-finite-gaussian-mixture-entropy-bounds`, `def-it-physically-degraded-dm-broadcast-channel`, `def-it-two-user-discrete-memoryless-mac`, `lem-it-awgn-feedback-estimation-covariance-update`, `def-it-finite-dmc-feedback-code`, `def-it-physically-degraded-dm-broadcast-code`, `def-it-two-user-discrete-memoryless-mac-code`, `def-it-two-user-discrete-memoryless-mac-feedback-code`, `lem-it-fano-for-finite-message-density-observations`, `def-it-two-correlated-iid-sources-over-dm-mac-code`, `thm-it-cover-leung-feedback-mac-inner-bound`, `thm-it-two-user-real-awgn-mac-capacity-region`, `thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition`, `thm-it-finite-dmc-feedback-does-not-increase-capacity`, `thm-it-physically-degraded-dm-broadcast-capacity-region`, `ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho`, and `ex-it-binary-xor-dm-mac-product-input-region`. Six return `untagged-steps`: `lem-it-ozarow-feedback-sum-corner-achievable`, `lem-it-awgn-feedback-rate-splitting-achievable`, `lem-it-cover-elgamal-salehi-conditional-packing`, `thm-it-ozarow-awgn-mac-feedback-capacity-region`, `thm-it-two-user-discrete-memoryless-mac-capacity-region`, and `ex-it-correlated-source-binary-adder-dm-mac`. The worker precheck reads only the numbered step's opening physical line for a trailing tag and applies its own layer relabeling; these proofs put valid input tags at the end of each full step block, including multiline formula steps. I did not apply those proposed renumberings or duplicate tags: the current labels and exact tags pass the actual-renderer `proof-layout` check and match the contracts. This remains recorded for owner reconciliation; it is not presented as a passing precheck.

- `step1-decisions.mjs check --run ...` reports the full run still open: 1,572 items, 1,278 ready and 295 unresolved work rows. It reports no unresolved batch-18 rows. Each of the 26 batch-18 records is `ready`, `owner: false`; these are Step 1 authoring records only.

## Run state

A fresh Autopilot status check through `tools/tsx-run.mjs` reports run state `running`, stage `1-scaffold` at 76/81, no workers in flight, and missing batches 14, 18, 19, 78 and 79. The existing blocker is `plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. The target run paths have no Git commits. I did not change Autopilot state or any shared plan, engine, or verdict artifact.

This batch records authoring readiness only. It does not claim Step 2 review, proof acceptance, publication, or completion of the whole run.

## Current owner proof-format completion

The original native precheck failure report above is retained as history. All26 carriers now use one physical paragraph per numbered proof block and the actual normative canonical phase labels. Independent blocks were reordered only where prescribed by that checker. All117 complete original proof clauses and every mathematical expression are retained modulo whitespace and explicit current-step references;32 prose references/ranges were remapped to the corresponding actual steps, with ranges expanded to explicit lists where appropriate. All frontmatter and all Statement/Definition/Example/Facts bytes are unchanged. Exact derivation/citation mirrors and boundary step anchors were refreshed. Current checks:26/26 precheck pass,28-file render pass,26-item117-step layout zero defects,26/26 strict contracts pass. The large aggregate precheck JSON was truncated by the checker process exiting before pipe flush; explicit individual item invocations provide complete genuine outputs and all26 current results. No checker/tool change or waiver was used. Full receipt: research/non-ml-math-remaining-81-2026-10-18-owner-multiuser-proof-format/repair.json. Native source coverage/stamps/readiness and runtime state remain untouched.
