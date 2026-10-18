# Stable source evidence, batches 63 and 67

The two owned stable coverage files now carry 20 authenticated historical fetch records: 13 batch-63 source/page occurrences and 7 batch-67 occurrences. No URL, title, mathematical carrier, manifest, readiness record, native receipt, runtime file, or source disposition was changed.

The exact preimages are archived as `batch-63.coverage.before.json` and `batch-67.coverage.before.json` in this directory. `scope-observation.json` records their hashes and the narrow value comparison; `authentication.json` lists each exact original page/URL match and original fetch stamp.

## Authentication and outcome

Read the full CLAUDE/README, source-fetch-check.mjs and source-resolution.mjs, the owned coverage and original notes/results. Original successful immutable native results end at 2026-10-17T14:20:12.888Z (63) and 2026-10-17T13:45:54.107Z (67). Their logs corroborate the original source-fetch outcomes. Matching original source-coverage and source-evidence records agree on body lengths, hash prefixes, kinds and page counts. For batch 63, all eight existing cached PDFs independently match their recorded complete SHA-256 and byte length. Batch 67 retains its authentic historical stamps; no local cache was asserted for it.

Only `recovery_attempts` and `fetch_verified` were copied from exact matching original page-source records into stable coverage. Original timestamps remain unchanged; separate A/B fetch timestamps were preserved. Zhang's five historical attempts per occurrence remain five, including its explicitly imprecise original timestamps. No retry allowance was reset, and original source-resolution/search histories remain untouched in their native source evidence. The uncited historical Folch dropped record was not added to stable coverage or retried.

Completed construction command (not a gate):

`node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-63.coverage.json,research/numerical-analysis-remaining-71-2026-10-17-batch-67.coverage.json --stamp --timeout-sec 25`

Exit 0; stdout: `20/20 source(s) fetch-verified (0 newly stamped)` and `20/20 source(s) resolved (0 documented drops; not fetch stamps)`. Full stdout/stderr are archived here. The completed invocation reused authenticated historical evidence and made no new downloads.

## Aborted invocation disclosure

Before attachment completed, an attachment script stopped on an overly strict timestamp equality assertion (the example page had its own later authentic timestamp). A separately sequenced construction command unintentionally started against the still-bare coverage files. It was interrupted with SIGINT, exit 130, before any coverage file write; it emitted no fetch results. Its in-memory network progress and exact individual attempts/outcomes cannot be reconstructed, so no fresh attempts, stamps or successful downloads are asserted from that invocation. The final completed construction invocation occurred only after authentic evidence attachment. This unobserved aborted network activity is a process limitation; the archived original histories are preserved verbatim.

## Residuals and limits

No missing stable fetch evidence remains in batches 63/67, and no canonical URL change is proposed. This is mechanical historical evidence recovery only; it supplies no new full-reading claim, mathematical review, approval, readiness refresh or gate result. No tests or check-mode gates were run. Existing run-wide Gaussian/pressure holds remain the owner's concern.
