## Batch 4 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

`line-integrals-and-the-gradient-theorem` is `sufficient`, Green's theorem
included — Alpha confirmed it was built at exactly the scope D2 fixed, with the
Jordan-domain limit carried in its own `rem-` item rather than left implied.

**§3 D4 — `pi-the-equivalent-characterizations` is `insufficient`.** Alpha names
two additions, the principal one being **the Archimedean characterization of π**.
Read §3 D4 of the review for the exact statements and the source that carries
each, and scaffold them with coverage rows and proof contracts.

**§5 corrections:**

- **C7** — you quote Lebl Prop 11.4.2(9) as \(|\sin x| \le |x|\). The source
  states \(\sin(x) \le x\) **for \(x \ge 0\)**. That is a changed
  hypothesis and a changed conclusion in a quoted fact; fix the quote to the
  source's exact form and check nothing in your scaffold leaned on the stronger
  version.
- **C8** — Donaldson's Green section is headed *"A Sketch Proof of Green's
  Theorem"*. It is fine as corroboration, but it must **not** be the clause any
  `[F#]` fact cites. Make sure the load-bearing citation is to Lebl.
- **C9** — one work gets one source entry with a compound locator. You list Lebl
  three times; consolidate.

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
  `node tools/coverage-checklist.mjs research/frontier-12-batch-4.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
