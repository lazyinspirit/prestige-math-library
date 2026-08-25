# frontier-18 reader-5 report

Run: `frontier-18`
Role: `reader`
Batch: `5`
Date: `2026-08-24`

Scope:
- `lattice-paths-and-catalan-numbers`
- `lattice-paths-and-catalan-numbers-examples`
- `linear-algebra-methods-in-combinatorics`
- `linear-algebra-methods-in-combinatorics-examples`

Durable log:
- Audit started. No findings recorded yet.
- Contract baseline checked: `proof-contract --strict` on `research/frontier-18-batch-5.proof-contracts.json` opened at 1655 errors before repair, dominated by stale citation/step mappings.
- Ran `tools/regen-contract-entries.mjs` across the 110 scoped contract entries; strict errors dropped to boundary-heavy residuals.
- Repaired five generating-function items and their contract rows:
  - `thm-catalan-generating-function-satisfies-a-quadratic-equation`
  - `thm-catalan-generating-function-closed-form`
  - `thm-the-catalan-generating-function-is-not-rational`
  - `thm-motzkin-numbers-by-first-return-decomposition`
  - `thm-large-schroder-numbers-by-first-return-decomposition`
- Verified the repaired five-item slice with `proof-contract --strict --items ...` -> `0 error(s), 0 warning(s), 5/5 item(s) checked`.
- Ran `node tools/tsx-run.mjs tools/reflow.mts` and `node tools/tsx-run.mjs tools/precheck.mts` on those five items; both clean.
- Batch-wide residual state after these repairs: `boundary-audit` still reports 34 contradicted-disposition candidates elsewhere in the batch, and the full batch contract is not yet reconciled.

Findings:
- No fatal defect confirmed in the 13 item files opened in this pass.
- `R5-1` — `thm-catalan-generating-function-satisfies-a-quadratic-equation`, Facts `[F1]`, contract boundary rows `zero` / `one` / `iff-forward`. The fact restatement had drifted away from the source-backed domain bookkeeping, and the boundary evidence still pointed at stale step numbering (`step 3.1` no longer exists). Tightened the fact line and re-anchored the boundary rows to the live proof steps. Severity: `nonfatal`.
- `R5-2` — `thm-catalan-generating-function-closed-form`, Facts `[F2]`, contract boundary rows `one` / `degenerate` / `nonempty-choice` / `iff-forward`. Same defect class as `R5-1`: the fact restatement needed the source’s explicit natural-number domain, and the boundary worksheet still referenced a deleted `step 3.1`. Tightened the fact line and re-anchored the rows to `step 2.1`. Severity: `nonfatal`.
- `R5-3` — `thm-the-catalan-generating-function-is-not-rational`, Facts `[L4]` and `deps`. The item carried an unused degree-of-sums fact and dependency; after contract regeneration that dead fact produced a false contract obligation even though the proof never cites it. Removed the unused fact/dependency from the item. Severity: `nonfatal`.
- `R5-4` — `thm-motzkin-numbers-by-first-return-decomposition`, Facts `[L12]`, proof step `2.1`, contract boundary row `one`. The proof no longer used the induction fact `[L12]`, and step `2.1` cited `[F1]`/`[L5]` only after the display, which the proof-contract checker does not treat as a declared use. Removed the dead induction fact/dependency, moved the live citations onto the first proof line, and re-anchored the stale boundary row from nonexistent `step 6.1` to `step 2.1`. Severity: `nonfatal`.
- `R5-5` — `thm-large-schroder-numbers-by-first-return-decomposition`, proof step `2.1`, contract boundary row `one`. Same defect class as `R5-4`: live facts were cited only below the first proof line, and the boundary worksheet still named deleted `step 6.1`. Moved the live citation onto the first proof line and re-anchored the boundary row to `step 2.1`. Severity: `nonfatal`.
- `R5-6` — `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection`, contract boundary row `degenerate` and related boundary evidence. The degenerate-case row falsely said `tau = n` was allowed, but step `1.1` proves `tau < n` from `b > c`; the real degenerate boundary is `n = 0`, where both source and target sets are empty. Rewrote the boundary evidence from disk and re-anchored the other stale rows to `steps 1.1`–`3.1`. Severity: `nonfatal`.
- `R5-7` — `lem-dyck-paths-of-a-given-semilength-form-a-finite-set`, contract boundary rows `empty` / `zero` / `one` / `degenerate`. The worksheet still cited nonexistent `step 3.1` after the authored proof had only `steps 1.1`, `1.2`, `2.1`. Re-anchored the rows to the actual construction in `step 1.2` and the final deduction in `step 2.1`. Severity: `nonfatal`.
- `R5-8` — `thm-catalan-numbers-by-reflection`, contract boundary rows `empty` / `one` / `degenerate` / `iff-reverse`. Several checked rows still cited nonexistent `step 4.1`; the reverse-direction explanation also overstated the need for an extra lemma where step `1.1` already closes the logic by integrality of heights. Re-anchored the rows to `steps 1.1` and `3.1`. Severity: `nonfatal`.
- `R5-9` — `thm-catalan-numbers-from-the-generating-function`, contract boundary rows `zero` / `one`. The worksheet’s low-index cases were left unanchored or pointed at deleted `step 3.1`. Re-anchored them to the coefficient-extraction steps that actually discharge `n = 0` and `n = 1`. Severity: `nonfatal`.
- `R5-10` — `thm-chung-feller`, contract boundary rows `empty` / `one` / `degenerate` / `endpoints`. The worksheet still named nonexistent `steps 6.1` / `7.1` after the current proof was compressed to `steps 1.1`–`4.1`. Re-anchored those rows to the live orbit-counting and endpoint-distribution steps. Severity: `nonfatal`.

Changes made:
- Regenerated `research/frontier-18-batch-5.proof-contracts.json` citation/derivation entries from current disk text.
- Tightened two fact restatements to preserve the cited domain `n \\in \\mathbb{N}`.
- Removed one unused degree-law fact/dependency from `thm-the-catalan-generating-function-is-not-rational`.
- Removed one unused induction fact/dependency from `thm-motzkin-numbers-by-first-return-decomposition`.
- Pulled the finite-index-set citation `[L5]` onto the first proof line in the Motzkin and large Schröder recurrence steps so the contract matches the live proof text.
- Re-anchored the stale boundary evidence rows for ten inspected items in the lattice-path section.

Per-page verdicts:
- `lattice-paths-and-catalan-numbers`: partial read only. Twelve item files opened; no fatal defect confirmed in those twelve, ten nonfatal item/contract defects repaired, and the batch contract remains boundary-red elsewhere on this page.
- `lattice-paths-and-catalan-numbers-examples`: not read item-by-item in this pass; no page verdict yet.
- `linear-algebra-methods-in-combinatorics`: partial read only. `thm-cauchy-davenport` opened and checked without a recorded defect, but the page was not fully verified.
- `linear-algebra-methods-in-combinatorics-examples`: not read item-by-item in this pass; no page verdict yet.

Items opened:
- `13` item files.
