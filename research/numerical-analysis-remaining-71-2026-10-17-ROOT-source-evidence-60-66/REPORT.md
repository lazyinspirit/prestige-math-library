# Mechanical source evidence: stable batches 60 and 66

Completed source-evidence construction for the two owned stable coverage files. The actual construction command exited 0 and reported **16/16 fetch-verified, 16 newly stamped, 0 documented drops**. Batch 60 has ten stamped source entries; batch 66 has six. No source URL, title, locator, content disposition, mathematical statement, prerequisite, readiness record, contract, manifest, runtime state, or bibliography was changed. No gate, check-mode source command, mathematical review, repair, or test was run. The closed two-cycle DPG mathematical review was not reopened.

## Exact construction command

```sh
node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-60.coverage.json,research/numerical-analysis-remaining-71-2026-10-17-batch-66.coverage.json --stamp > research/numerical-analysis-remaining-71-2026-10-17-ROOT-source-evidence-60-66/stamp.stdout.txt 2> research/numerical-analysis-remaining-71-2026-10-17-ROOT-source-evidence-60-66/stamp.stderr.txt
```

Actual output is retained in `stamp.stdout.txt`; stderr is empty. The tool made one successful full-body fetch per entry, between 2026-10-17T15:20:14.273Z and 2026-10-17T15:20:41.497Z. These are tool-produced timestamps, not reconstructed reading dates. This command had already started when the owner sent the later cache-first direction; it completed successfully before any further fetch was needed.

## Original evidence and preservation

Before mutation, both exact stable coverage preimages were copied to `before/`. The complete authentic native `batch-60.source-coverage.json` and `batch-66.source-coverage.json` were read and copied unchanged to `native-evidence/`. Their original native results, refresh results, and full notes were read; all historical reading claims are retained as historical claims. This task asserts no new mathematical reading.

The native files identify all 16 entries by matching page, exact title and URL. A Python 3 byte-authentication observation read every cited cached PDF, calculated SHA-256 with `hashlib.sha256`, checked byte size and `%PDF` magic, and compared the full read-evidence hash and stamp hash prefix. **All 16 entry comparisons matched** (12 distinct cached PDFs). Every current tool stamp also matches its native stamp in bytes, SHA-256 prefix, kind and page count. Exact paths, full hashes, native-file hashes and observations are retained in `cache-authentication.json`.

After the successful fetch, the exact post-fetch/pre-merge coverage files were copied to `post-fetch-before-merge/`. Only genuine missing `read_evidence` and `source_kind_detail` fields were copied from native evidence; existing read claims were not rewritten. Native and current recovery attempt arrays were merged by exact record identity and chronological order, without resetting or fabricating any retry. Batch 60 now preserves three genuine attempts per entry (initial reading fetch, original native stamped fetch, new successful fetch); batch 66 preserves two (original stamped fetch and new successful fetch). Each remains within the six-attempt allowance. The original historical fetch stamps and the current new stamps are both retained in `evidence-merge.json`; the owned coverage uses the actual newly fetched stamp.

A focused Python preservation observation compared every existing source field against its exact preimage (requiring every prior attempt remain present), checked unchanged top-level fields, counted current stamps, and calculated before/after file hashes. It passed for both files; see `preservation-observation.json`. This was an evidence preservation observation, not a content gate or proof check.

## Limits and residuals

All fetched documents have at least ten pages (range 10–254). No short-document exception or receipt was needed. No source-resolution drop or bibliography alternative was required. The failed optional candidate routes already described in the original notes remain historical; no missing historical URL or timestamp was reconstructed.

This task establishes actual fetch and authenticated evidence continuity only. It does not certify mathematical correctness, refresh readiness or hashes elsewhere, execute a gate, or authorize any workflow transition. No source-evidence residual remains for these 16 stable entries. The owner retains responsibility for the complete 71-pair frontier and its prerequisites.
