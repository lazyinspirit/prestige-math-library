## Batch 3 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

`dual-spaces-bilinear-forms-and-inertia` is `sufficient` — unchanged. Alpha also
confirmed your Cayley–Hamilton takes the adjugate route and that your B page
carries the pseudo-proof as a false-statement item, which was the D5 challenge.

**§3 D5 — `eigenvalues-…-characteristic-polynomial` is `insufficient`: you
skipped Pinkham §12.3 whole.** Your locator runs §12.1 → §12.2 → **§12.4**.
Chapter 12 has a §12.3 containing four numbered results that appear in no row and
have no disposition anywhere:

- trace = sum of the eigenvalues
- determinant = product of the eigenvalues
- the Spectral Mapping Theorem
- its corollary

Your page computes both characteristic-polynomial coefficients and then never
connects them to the eigenvalues, which is precisely what §12.3 does. Scaffold
them, with coverage rows and proof contracts.

**§5 C6** — your "Theorem 12.1.3" row describes a theorem Pinkham does not
state; it conflates two claims and maps to an item 12.1.3 does not support. Split
the row so that one scaffolded item is no longer unsourced and the other is no
longer unmapped.

**§5 C10** — classify the Stacks Project as `monograph`, uniformly (D9).

**Not your fix (recorded so you do not chase it):** order 88's title promised
Cayley–Hamilton, now homed on your page 86. The orchestrator retitled order 88 to
"Diagonalisation and the Minimal Polynomial", matching its id.

### Standing rules for this round

- Change only what is listed. Do not re-litigate an accepted decline or
  restructure a page that was not challenged.
- Keep all four artifacts consistent — `pages.json`, `coverage.json`,
  `proof-contracts.json`, `notes.md`. A new item with no coverage row, or a
  coverage row still saying `deferred` for something you now scaffold, is a
  false record and fails step 4.
- Item ids already scaffolded stay stable.
- `plan-spec.json` is READ-ONLY to you. The orchestrator has already made every
  page-level edit this dispatch depends on.
- Leave green:
  `node tools/coverage-checklist.mjs research/frontier-12-batch-3.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
