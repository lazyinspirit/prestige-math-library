## Batch 1 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

**§3 D3 — `splitting-fields` is `insufficient`: add the normality
sub-development.** Alpha found your Stacks 09HL locator reads *"Definition
9.15.1 only, stopping before Lemma 9.15.2"* — it stops immediately before every
result in a section titled *Normal extensions*. That is the exact shape of the
failure this process exists to catch: a source cited by title and not harvested.
Alpha names three additions from that same section (tags **09HN, 09HP, 0BR3**),
all buildable at order 56 from published items. Add them, with coverage rows.

**§5 corrections:**

- **C2** — Milne Example 2.8 is declined to "the Galois track". No Galois page
  exists in `plan-spec.json`. Restate with a real disposition.
- **C3** — your Judson locator cites Corollary 21.36 / Theorem 21.34 / Lemma
  21.32 / Examples 21.29–21.30. The **cited HTML edition** numbers those
  21.2.8 / 21.2.6 / 21.2.4 / 21.2.1–21.2.2. Content matches one-for-one, so the
  harvest is faithful — but a reader following your URL finds no "Corollary
  21.36". Cite the numbering used at the URL you cite, or cite the print edition.
- **C4** — the Milne locator says "PDF pp. 27-30 … through Proposition 2.17";
  Proposition 2.17 is on PDF p. **31**.
- **C5** — `thm-ideal-correspondence-for-localisation` claims the **prime**
  ideal correspondence, but Stacks Lemma 10.9.16, the row you cite, gives only
  the ideal statement. Either source the prime clause properly or drop it from
  that row's scope. Do not leave the row claiming more than its source gives.
- **C10** — classify the Stacks Project as `monograph`, uniformly (D9).
- **C1** — three module-localisation deferral reasons name
  `free-modules-and-exact-sequences` as the destination. That page is batch 2 of
  this run and ships **without** module localisation. Restate the reasons: module
  localisation is currently homed on no page in the plan. The orchestrator has
  recorded that as a tracked gap (D11) — your job is only to stop naming a
  destination that will not contain it.

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
  `node tools/coverage-checklist.mjs research/frontier-12-batch-1.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
