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
`research/frontier-12-batch-5.{pages.json,notes.md,coverage.json,proof-contracts.json}`
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
   node tools/coverage-checklist.mjs research/frontier-12-batch-5.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 5 fix round 3 — three boundary items on page 220.4

Your sourcing fix is **discharged**: Alpha reopened the sources and confirmed all
14 previously orphaned items now trace to real Grinstead & Snell and Pishro-Nik
sections. Orphans 14 → 0. Nothing about that changes.

**This is a routing miss by the orchestrator, not a defect in your work.** Alpha's
§4.5 listed three requirements; the previous dispatch was scoped to sourcing and
carried only the first two. The third was never sent to you. It is the single
piece of outstanding work in the run.

### The gap

The A page's last five items —

- `thm-markov-inequality`
- `thm-chebyshev-inequality`
- `lem-cauchy-schwarz-for-finite-random-variables`
- `thm-finite-second-moment-lower-bound`
- `cor-relative-variance-positive-probability-bound`

— have **no example or counterexample anywhere on the B page** (220.4, currently
8 items). Four headline inequalities with no boundary marked. Marking the boundary
of a theorem is what a B page is for.

### Exact work — three items on page 220.4

**1. Chebyshev is sharp.** Grinstead & Snell §8.1 carries this explicitly, and
Alpha read it: immediately after Example 8.1 (PDF p. 314, printed p. 306) the text
states *"Chebyshev's Inequality is the best possible inequality in the sense that,
for any ε > 0, it is possible to give an example of a random variable for which
Chebyshev's Inequality is in fact an equality"*, and gives the **two-point
distribution on {−ε, +ε} with weight ½ each**. Use that distribution — Alpha
prefers it to the three-point one it first suggested.

**2. Markov is sharp.** A variable taking a single positive value on an event of
the extremal probability. Pishro-Nik §6.2.2 is the statement source already in
your ledger; the witness itself is a `canonical` row.

**3. Markov fails without nonnegativity.** Pishro-Nik §6.2.2 states the
hypothesis; supply the counterexample that shows dropping it breaks the
conclusion.

**Alpha corrected its own first pass here, so take this numbering as authoritative:**
G&S §8.1 carries requirement 1 only. **It does not state Markov at all.** Do not
cite §8.1 for items 2 or 3.

### Rules

- Three items on **220.4 only**. The A page at 220.2 is unchanged; 221 and 222 are
  unchanged. Do not touch the mathematics Alpha already discharged.
- B pages are leaves: nothing may depend on these items (`validate-plan` error
  `b-leaf`). They are witnesses, not machinery.
- Each new item needs a coverage row at a real locator and, where it is
  proof-bearing, a proof contract.
- `plan-spec.json` is READ-ONLY to you.
- Leave green:
  `node tools/coverage-checklist.mjs research/frontier-12-batch-5.coverage.json`
  and `node tools/validate-plan.mjs research/plan-spec.json`. Do **not** run
  `tools/gates.mjs` (EPERM in this sandbox).
- Report the three ids, their sources, and anything you could not do.
