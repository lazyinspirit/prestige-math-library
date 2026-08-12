# Beta FIX brief for run `frontier-12` (step 3 → 4)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job and you never
> ask before searching. If an indispensable operation has no escalation-free form,
> **record a blocker in your notes** — that is the escape hatch, not a prompt.

You already scaffolded this batch on run `frontier-12`. The orchestrator has
settled the step-3 decisions and one of them changes your batch. This dispatch is
that change and **nothing else**.

**Read first:** `research/frontier-12-step3-decisions.md` — the full decision
record, including the reasoning behind the change to your batch. Then
`CLAUDE.md`, `SCHEMA.md` and `briefs/beta-scaffold.md` remain your standing
contract, and your own
`research/frontier-12-batch-1.{pages.json,notes.md,coverage.json,proof-contracts.json}`
are still your only writable outputs.

## Rules for a fix round

1. **Change only what the dispatch names.** Everything else in your scaffold was
   accepted. Do not re-litigate a decline the orchestrator did not raise, and do
   not take the opportunity to restructure a page that was not challenged.
2. **Keep all four artifacts consistent.** A change to `pages.json` that does not
   reach `coverage.json` and `proof-contracts.json` will fail the step-4 gates,
   and a coverage entry whose disposition still says `deferred` for a result you
   have now scaffolded is a false record.
3. **Item ids you already scaffolded stay stable** unless the dispatch explicitly
   reassigns them. Downstream artifacts already reference them.
4. **Leave the gates green:**
   ```
   node tools/coverage-checklist.mjs research/frontier-12-batch-1.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

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
