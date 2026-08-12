## Batch 2 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

Both your pairs are `sufficient` — the mathematics is accepted as scaffolded and
nothing about it changes.

**§5 C11 — complete the coverage mapping.** Nine A items (6 on order 66, 3 on
order 104) and thirteen B items carry **no coverage row**, though your sources
evidently contain the material. Every scaffolded item must trace to a harvested
heading with a disposition naming it. Add the missing rows against the real
locators; if a genuinely AI-originated item has no source heading, say so
explicitly in the row rather than inventing one.

**§5 C10** — classify the Stacks Project as `monograph`, uniformly (D9). You
cite it four times.

**§3 D7 note (no action required):** Alpha ruled your pair **passes** the
source-depth rule — Milne's *Group Theory* is a full lecture-note set with a
harvestable table of contents, and your 27+10 scaffold is not thin. Recorded so
you know the challenge was raised and answered.

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
  `node tools/coverage-checklist.mjs research/frontier-12-batch-2.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
