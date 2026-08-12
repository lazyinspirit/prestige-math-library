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
`research/frontier-12-batch-4.{pages.json,notes.md,coverage.json,proof-contracts.json}`
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
   node tools/coverage-checklist.mjs research/frontier-12-batch-4.coverage.json
   node tools/validate-plan.mjs research/plan-spec.json
   ```
   Do **not** run `tools/gates.mjs`; it fails `EPERM` in this sandbox. You may not
   edit `plan-spec.json` — the orchestrator has already made the page-level edits
   your dispatch depends on, so read it, never write it.
5. **Report** what changed, item by item, and anything you could not do.


---

# This dispatch

## Batch 4 fix — scaffold Green's theorem (decision D2)

You are the Beta who scaffolded batch 4. **One change**: your decline of Green's
theorem is declined, and you scaffold it into
`line-integrals-and-the-gradient-theorem` (order 241).

### Why the decline was declined

Your mechanical claim was correct and I verified it from disk: orders 235
(`the-riemann-integral-in-rn-and-jordan-content`) and 237
(`fubini-and-change-of-variables`) were outside your page's `requires` closure.
Your conclusion does not follow, because the remedy is a `requires` edit that you
were forbidden to make and the orchestrator is not. Both pages are **published**
and sit **earlier** than 241, so the edit creates no forward reference and no
cycle.

**I have already applied it.** Your page now reads:

```
requires: [the-fundamental-theorems-of-calculus,
           arc-length-and-rectifiable-curves,
           fubini-and-change-of-variables]
```

Minimal by design — fubini's closure already carries 235 and `the-total-derivative`,
so declaring those directly would be `redundant-prereq`. Re-read the spec; do not
edit it.

The decisive reason is downstream. **No page in `plan-spec.json` homes Green's
theorem** — zero matches across all 448 pages. Meanwhile
`research/plan-complex-analysis-track.md` plans three pages that assume it: the
Cauchy–Pompeiu/Hartogs argument, the area theorem with Koebe ¼ and the distortion
estimates, and `∑ n|bₙ|² ≤ 1`. Declining here would leave planned material resting
on a construction the library never builds — the exact defect this run's batch 1
exists to repair. We are not creating a second one.

### Exact scope — build this, and not more

**Green's theorem for elementary regions**: regions between continuous graphs
(Type I and Type II), and finite unions of such regions glued along shared
boundary arcs, with the boundary positively oriented.

**Not** for arbitrary Jordan domains. That needs the Jordan curve theorem, which
this library carries only as `rem-jordan-curve-theorem` with `proved_here: false`;
a proof resting on it would rest on material not proved here. State the hypothesis
exactly, and record the Jordan-domain case as a **named limitation** in a remark
and in your notes, rather than leaving the stronger claim implied by silence.

The elementary-region form is the standard rigorous statement and is exactly what
every downstream use listed above needs — the area theorem on a disc,
Cauchy–Pompeiu on a nice domain.

Decompose honestly. This is not one item: expect the Type I case, the Type II
case, the gluing lemma for finite unions, the positively-oriented boundary
definition, and the theorem itself, plus the corollary computing area as a line
integral. Build the intermediate lemmas rather than compressing them into one
proof — that is the standing scaffold-richness rule.

### Artifacts to update

- `pages.json` — the new items, in the right dependency order on page 241.
- `coverage.json` — Green's theorem and its supporting results must move from
  their current disposition to `included`, naming the new item ids. Harvest the
  Green's-theorem sections of your existing sources at their real locators; add a
  source if your current three do not treat it at the depth you now need. Your
  two independent treatments per pair must still hold.
- `proof-contracts.json` — a contract for each new proof-bearing item.
- `notes.md` — replace the passage arguing Green's theorem is out of scope with
  the record of what you built, the exact hypothesis, and the Jordan-domain
  limitation. Keep your prose-scaffold amendment for
  `plan-complex-analysis-track.md`, but **without** the removal of the Green
  promise: that promise is now kept, in the elementary-region form.

Your page was 23 A items and has ample room under the 60-item ceiling. Nothing
else about batch 4 changes — the π pair is untouched by this dispatch.
