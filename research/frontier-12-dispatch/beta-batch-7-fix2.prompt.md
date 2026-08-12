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
`research/frontier-12-batch-7.{pages.json,notes.md,coverage.json,proof-contracts.json}`
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
   node tools/coverage-checklist.mjs research/frontier-12-batch-7.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 7 fix round 2 — Alpha stage-0 findings

**Read `research/frontier-12-alpha-step3-scaffold-review.md` first**, in full.
Alpha opened your sources and checked the harvest against them; every finding
below is backed by source text it actually read. This dispatch is that work and
nothing else — everything Alpha marked `sufficient` stays as scaffolded.

### Your work

`limits-and-colimits` is `sufficient` and needs no split — Alpha accepted the
46+17 scaffold, your declines, and your handling of the smallness conditions.

**§5 C10, the only change:** classify the Stacks Project as `monograph`,
uniformly (D9). You cite its categories chapter as a primary treatment, and the
`reference-work` classification would make it ineligible as primary backing —
which would be wrong, because the Stacks categories chapter is a monograph
treatment and your pair's backing is genuinely sound.

Nothing else about batch 7 changes.

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
  `node tools/coverage-checklist.mjs research/frontier-12-batch-7.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`.
  Do **not** run `tools/gates.mjs` (EPERM in this sandbox).
- Report what changed item by item, and anything you could not do.
