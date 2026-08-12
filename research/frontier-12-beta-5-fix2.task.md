## Batch 5 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

The mathematics is not challenged. `finite-probability-and-the-probabilistic-method`
(221) is `sufficient`, and your split was applied correctly with the seam
verified independently.

**§4.5 — `finite-probability-spaces-and-random-variables` (220.2) is
`insufficient` on SOURCING.** Alpha found that **14 of its 37 A items** — Bayes,
total probability, the chain rule, product spaces, the binomial distribution,
Cauchy–Schwarz among them — appear in **no source's contents at all**. The reason
is structural, and it is partly a consequence of the split I ordered:
Matoušek–Vondrák §1.1 opens *"In no way is it intended to serve as a substitute
for a course in probability theory."* All three of your sources treat elementary
probability as a **preface** to the probabilistic method, so the split minted a
page whose subject none of them actually develops.

That is a real defect and the harvest rule is not satisfied by three sources that
skip the subject. Alpha recommends **Grinstead & Snell, *Introduction to
Probability*** (open access) and verified usable chapter ranges — read §4.5 for
them. Add it as a genuine independent treatment for 220.2, harvest the relevant
chapters properly, and give every one of the 14 unsourced items a real row.

Add a second independent treatment for 220.2 if Grinstead & Snell alone does not
cover the range; the rule is at least two independent treatments **per page**,
and after the split 220.2 must satisfy it on its own.

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
  `node tools/coverage-checklist.mjs research/frontier-12-batch-5.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
