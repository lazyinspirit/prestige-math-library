# Wave 0 · real-analysis · cauchy — A3 orchestrator adjudication (2026-08-02)

## Decisions

- **Provenance retags: APPROVED for 37 of 40.** The three
  `established-knowledge` rows (`lem-rat-inverse-well-defined`,
  `lem-null-is-cauchy`, `ex-one-over-n-null`) are HELD until Alpha's
  concurrence at A6 — do not write their provenance blocks at A4.
- **D-1 APPROVED** — delete the dead [L2] (`lem-int-cancellation`) from
  `thm-rat-ordered-field` and its unused deps entry; update the contract.
  NOTE: this item is on the shared ℤ/ℚ prelude (both construction pages);
  impact-audit closure at wave level covers its consumers.
- **D-2 APPROVED** — replace the 403 Landau bookstore URL with the verified
  `archive.org/details/foundationsofana0000land` in the three items.
- **D-3 APPROVED** — fix `lem-int-embeds-rat` [L2] to attribute ℤ's order to
  `def-int-order` (add to `deps`), keeping `def-rat-order` for ℚ's.
- **D-4 APPROVED** — normalize `justified_by`: declare the discharging lemma
  in frontmatter for the six definitions that link it only in the body, and
  add the omitted `lem-rat-ops-well-defined` to `def-rat-operations`;
  `depcheck`/`fwdcheck` must stay clean.
- **D-5 APPROVED** — drop the unused `lem-cauchy-bounded` deps entry from
  `fs-rationals-complete`.
- **D-6 DEFERRED to Alpha (A6)** — page-prose softening is a debatable
  restatement.
- **Unresolved concern 1 (bare [A#] ℕ-arithmetic assumptions across the ℤ/ℚ
  prelude): NO repair this wave.** Beta verified every assumption true and
  library-proved; converting ~10 items' facts to [L#] citations is an
  interface sweep for the A10 owner queue.
- Countable-choice usage in `thm-reals-cauchy-complete` step 1.1: adopted
  axiom, permitted; recorded.
