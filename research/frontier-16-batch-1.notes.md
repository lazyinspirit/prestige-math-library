# Frontier 16, batch 1 — Beta-1 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 proof-contract construction after source harvest, item decomposition, id reuse, and the first dependency pass.
- Owned artifact paths: `research/frontier-16-batch-1.pages.json`, `research/frontier-16-batch-1.notes.md`, `research/frontier-16-batch-1.proof-contracts.json`, and the separately required gated harvest `research/frontier-16-batch-1.coverage.json`.
- Completed checks: `CLAUDE.md`, `SCHEMA.md`, `README.md`, the house exemplar, the latest completed batch-1 artifacts, `QUALITY-CONTROLS.md`, both design sections, the plan-spec entries, all declared prerequisite page files, every candidate published dependency's actual Definition/Statement/Example and provenance, the id collision search, both richness passes, and web reading of the five coverage sources. The manifest parses as 16/10 items for the inverse-function pair and 29/13 for the convex/semicontinuity pair; `content-policy --manifest-only` reports 68 scoped ids with 0 errors and 0 warnings; `coverage-checklist --require-destination` reports 2 pages, 85 harvested headings, 0 errors and 1 low-yield advisory.
- Open mathematical constraints: encode exact same-batch clauses and published citation substrings in every proof-bearing contract; keep the proper-local-diffeomorphism result below the order-293 covering-space dependency boundary; verify every boundary worksheet and the semicontinuity epigraph reverse direction; finish the source/provenance and design-amendment ledgers.
- Mechanical blocker: `source-fetch-check --stamp` was run and every URL failed with sandbox DNS error `EAI_AGAIN`. The sources were opened through the web-research channel, but no `fetch_verified` field will be fabricated. Exact retry command: `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-1.coverage.json --stamp`.
- Exact next action: write the version-1 proof-contract file from the finalized manifest, then run its structural audit plus coverage, content-policy, prose, collision, and whitespace checks.

