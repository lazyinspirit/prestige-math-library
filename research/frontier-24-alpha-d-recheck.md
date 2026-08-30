# frontier-24 · Alpha group `d` · Step 3 recheck

Group `d` owns batch `10` in `research/frontier-24-alpha-groups.json`:
TC-2 `deterministic-finite-automata-and-regular-languages` and TC-6
`context-free-grammars-and-normal-forms`.

I re-read the governing task files on Saturday, August 29, 2026, then verified
the current bytes in:

- `research/frontier-24-alpha-d-step3-scaffold-review.md`
- `research/frontier-24-batch-10.notes.md` (`## Step-3 fix pass`)
- `research/frontier-24-batch-10.pages.json`
- `research/frontier-24-batch-10.coverage.json`
- `research/plan-computability-theory-track.md`
- `research/plan-spec.json`
- `research/frontier-24-alpha-d-scope-decisions.json`
- `research/frontier-24-alpha-d-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group d`
  - result: `scope-decisions: d: 5 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-24 --group d`
  - result: `scope-decisions: 5 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-10.coverage.json`
  - result: `coverage-checklist: 2 page(s), 87 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-10.pages.json`
  - result: `content-policy: 42 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-10.coverage.json`
  - result: `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...`
    and reports only the standing repository-wide `redundant-prereq`
    advisories
- focused local batch-10 closure audit against `research/plan-spec.json`
  - result: `18` external deps, `0` missing prerequisite homes, `0` deps
    outside the transitive `requires` closure, `0` illegal cross-page B-item
    dependencies

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Dispositions

### Coverage-carrier repair for omitted TC-2 and TC-6 items — sufficient

- Disposition: **closed**.
- Evidence: the live manifest still declares
  `lem-extended-dfa-transition-respects-concatenation` on
  `deterministic-finite-automata-and-regular-languages` and
  `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` on
  `context-free-grammars-and-normal-forms`, and the current coverage file now
  carries canonical `included` rows for both exact ids.
- Evidence: the targeted alignment repair described in
  `research/frontier-24-batch-10.notes.md` matches the current coverage gate
  result of `87` harvested rows with `0` errors and `0` warnings.
- Plan/route check: the current plan still places the deferred closure claim
  `intersection with a regular set` on
  `pushdown-automata-and-context-free-languages`, so the TC-6 closure block
  remains intentionally limited to union, concatenation, star, and
  homomorphism.

### `0ae2bcc777c3e8b4f0aa6d4e43d6147bcb5cd88bc97f21d6e45e88ef9a37f298` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-24-alpha-d-scope-decisions.json` still records
  Gallier's named inherently ambiguous language example as `out-of-scope`, and
  the current TC-6 manifest still limits inherent ambiguity to the definition
  layer while using the repaired false statement and counterexample about an
  ambiguous CFG that does not force an inherently ambiguous language.

### `5ba703bf4bc4f73b9b8b9eb90d410c1b4aec27e2af41abb506559078fd3cdffb` — sufficient

- Disposition: **pushback stands**.
- Evidence: the current coverage file still records Aho's
  `intersection with a regular set` row as `deferred` to
  `pushdown-automata-and-context-free-languages`, and the live `plan-spec`
  still contains that exact destination page immediately after
  `context-free-grammars-and-normal-forms`.

### `a7e106ce1eea583a066610efb3c974c63241862d2cf2e8e90f489ab2b40cd599` — sufficient

- Disposition: **pushback stands**.
- Evidence: `research/frontier-24-alpha-d-scope-decisions.json` still records
  Watrous Lecture `8`'s inherently ambiguous language note as `out-of-scope`,
  and the current TC-6 manifest still does not claim any local proof that a
  specific language is inherently ambiguous.

### `cb8036a827ac486ead928b54ad54711b34268dc1994980b6f2b9c3e2e7fe410e` — sufficient

- Disposition: **pushback stands**.
- Evidence: the current TC-6 manifest still keeps the closure theorem to
  union, concatenation, Kleene star, and homomorphism, so Aho's `reversal` row
  remains a deliberate out-of-scope omission rather than a missing local
  prerequisite.

### `fc8490b4309a01992e0e62ceab8a48bf83da64df81412a4a0c8bdd77cc0ec259` — sufficient

- Disposition: **pushback stands**.
- Evidence: the current TC-6 manifest still needs forward homomorphism only,
  and no current batch-10 page or dependency route consumes inverse
  homomorphism, so that row remains correctly out of scope.

## Outcome

Both owned A pages remain closed on the current bytes:

- `deterministic-finite-automata-and-regular-languages` -> `sufficient`
- `context-free-grammars-and-normal-forms` -> `sufficient`

The Step-3 scaffold review's TC-2 prose count remains stale at `15` A items,
but the live batch-10 manifest has `16` A items, the notes already document
that mismatch, and no current manifest, coverage, or plan defect follows from
it.

The refreshed scope ledger is current with `5` decline rows and `0` pending
rows. `research/frontier-24-alpha-d-step3-verdicts.json` already matches this
verified state, so no verdict-byte change was required in this recheck pass.
