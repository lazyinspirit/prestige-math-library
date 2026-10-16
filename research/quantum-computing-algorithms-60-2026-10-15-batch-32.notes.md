# Batch 32 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `quantum-order-finding-and-rational-reconstruction` and its examples page  
Scheduling input retained from dispatch: `e8b2b1a6437c84045bb9cd37f40383cd3eba27fa0ff5d50ac3fe783facf2b5b2`

## Plan and scope reconciliation

- No separate design section for this pair was present. The QA08 section in `research/quantum-algorithms-planning/sections/qa_r2.md` and the current owner-authoring direction supplied the route and cautions.
- The plan’s item arrays were empty scaffold placeholders. The current audited QA08 export supplied the twelve proposed items; three local A-page results were added to discharge requirements that otherwise would have remained unsupported: candidate uniqueness, reversible modular-multiplier correctness, and the reconstruction bit-cost proof.
- The task and plan page prerequisites agree. Batch 32 remains assigned to the two listed pages only. The older `TEAM-BRIEF.md` planning-only scope was superseded by the current owner direction releasing Step 1 authoring; no shared plan or other pair was edited.
- The algorithm accepts an integer security parameter `b` and targets failure `δ = 2^-b`. For any requested `0 < δ < 1`, choose `b = ceil(log₂(1/δ))`. This keeps the actual repetition count integer and computable while covering every requested failure target.
- A genuine scheduling conflict remains for cost results: `def-qa-classical-bit-cost` is in batch 25, which is absent from the frozen batch-32 prerequisite list. The supplier body is present and inspected. The affected items and required machine-cost hypotheses are recorded in `batch-32.cross-batch-dependencies.json`; the three cost results remain complete drafts and are escalated pending owner reconciliation. Adding batch 25 does not raise the current maximum page dependency level 12, but it invalidates the frozen scheduling-input hash.

## Inventory and logical route

The A page contains 13 items and the B page contains 2 examples, both below the page cap. Item levels were recomputed from the current in-run suppliers and recorded in both batch manifests; they range from 0 to 19. The assigned 15-item dependency graph has no cycle. The transitive carrier walk covers 206 items, including 82 items placed in this run, with no missing carrier.

The finite rational lemma is proved for normalized *finite* continued fractions. It handles denominator `q = 1`, the possible repeated initial denominator `q₀ = q₁ = 1`, and the terminal complete quotient where `T = a_(j+1)`. The rational reconstruction uses the weak exact test `2|yq − pQ| ≤ q`; the strict approximation condition belongs only to the finite-rational Legendre argument. The boundary example checks the tie directly.

The modular multiplier is built from a total Boolean function that fixes invalid encodings, a clean-target XOR computation, a bitwise swap, and inverse multiplication to clear the old input. Its proof verifies control zero, valid inputs, invalid inputs, and clean work. No depth bound is asserted.

The order-finding proof derives the orbit Fourier eigenvectors and applies the QPE superposition law to `|1⟩`; it does not pass `|1⟩` to QPE as an eigenvector. A denominator is retained only after the exact modular power check, every retained value is an order multiple, and the routine returns the minimum retained value. Repetition uses `t = 4(n+1)b`; the exact integer bound gives failure at most `2^-b`. Query, gate, and multitape-bit costs are stated separately. Gate counts use the ideal exact arbitrary-angle QFT model; no finite gate alphabet or uniform-family claim is made.

## Sources and retrieval

The complete cached PDFs were inspected, and the complete relevant sections were read: Childs, Chapter 9 §9, PDF pp. 45–49; de Wolf, Chapter 5 §§5.4–5.5, PDF pp. 49–56; and Shor, §4, PDF pp. 16–19. Childs and de Wolf provide two independent full lecture-note treatments for the A page; Shor is a third corroborating original treatment. The finite-rational bridge, exact comparison, weak logarithmic totient estimate, invalid-encoding behavior, and detailed resource bounds are proved locally rather than inferred from a source citation.

`source-fetch-check --stamp` passed for all three full-text URLs with zero new stamps. Existing full-text stamps and prior retrieval attempts were reused. No source retrieval failed, no source was dropped, and no `source_resolution` recovery record was needed. Per-source, per-item dispositions are in `batch-32.coverage.json`; cache hashes and inspected locators are in `batch-32.source-evidence.json`.

## Scoped checks

- `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-32.source-coverage.json --stamp`: **pass**, 3/3 sources verified, 0 newly stamped.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 15 item paths in the batch manifest: **pass**, 11 proof-bearing items checked, 0 failing; 4 definitions/algorithms are not applicable to phase proof checking.
- `node tools/proof-layout.mjs` on the 15 assigned item paths: **pass**, 15 items, 47 numbered steps, 0 defects.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-32.proof-contracts.json --strict`: **pass**, 15/15 items, 0 errors, 0 warnings. All 11 proof-bearing items have step mappings, exact supplier excerpts, boundary dispositions, and applicable finite checks.
- `node tools/depcheck.mjs --items-file /tmp/quantum-batch32-item-ids.json --quiet`: **pass**, selected item references and prerequisite-cycle checks pass.
- `node tools/rendercheck.mjs` on the 15 assigned item paths and both page paths: **pass**, 17 files, including renderer YAML and KaTeX checks.
- Scoped item-level recomputation using `dependencyLevels` over current nonempty run manifests: **pass**, 15/15 labels match; no batch-32 cycle or missing edge.
- All 15 `node tools/step1-decisions.mjs record` commands succeeded: **12 ready, 3 escalated**. A later attempt to refresh the 12 ready records returned `Keep unchanged ready items and records intact`; the tool found their item/dependency hashes current and made no changes. The three escalations were left untouched. The aggregate `node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` is blocked before evaluating those records because global snapshot parsing hits the unrelated malformed YAML locator in [lem-hh-commutative-or-cocommutative-antipode-is-involutive.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-hh-commutative-or-cocommutative-antipode-is-involutive.md:22). A structural audit confirms all 15 records are present with the intended decisions.

## Run-wide blockers and owner handoff

- `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` remains **blocked outside batch 32** by 18 empty scaffold inventories and 6 stale dependency labels in other batches. It reports no batch-32 item-level errors.
- `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` reports stale batch scheduling levels because the three cost results add a real edge to batch 25. Shared scheduling data was left untouched for the owner.
- Run-wide proof-contract coverage stops at the unrelated empty inventory `simon-algorithm-and-finite-field-recovery`. The scoped strict check above covers all 11 proof-bearing batch-32 items.
- The aggregate Step-1 hash check also needs the malformed YAML carrier above repaired by its owner. The three cost items depending on `def-qa-classical-bit-cost` are recorded `escalated` with the exact missing schedule edge and hypotheses. The twelve ready and three escalated records are not acceptance or independent approval.
