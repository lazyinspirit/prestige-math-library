# Handover prompt — frontier-12 owner audit and publish

Copy everything below the line into a fresh Claude session on the VPS.

---

You are picking up run `frontier-12` in `~/Projects/prestige-math-library` at
**step 10 — the owner audit and publish pause**. A previous session orchestrated
steps 0 through 10 and stopped where the rules say to stop: **nothing is
published**. I am the owner and I will audit, then publish.

## First, orient yourself

```
git pull
```

You should land on `cf041202` (or later) on `main`. Then read, in this order:

1. `CLAUDE.md` — normative, and it overrides anything below.
2. **`research/frontier-12-step10-rundown.md`** — the previous session's step-10
   report to me. This is your primary briefing: what was built, all 15 items that
   carried a fatal defect grouped by defect type and location, what the two judge
   lanes each contributed, the orchestrator's own errors, and the open decisions.
3. `research/frontier-12-step3-decisions.md` — decisions D1–D12 with rationale.
4. `SCHEMA.md` §3 — what publishing actually is.

## What is sitting there

**12 A/B pairs, 24 pages, 454 items, all `status: draft`**, from 805 harvested
source headings. `STEP 10 CLEAR` — 9/9 gates including
`level-coverage --verify-current-context` at exit 0.

| order | page |
|---|---|
| **53.2** | `the-field-of-fractions-and-localisation` *(new — closes decision D10)* |
| 56 | `splitting-fields` |
| 66 | `composition-series-and-solvable-groups` |
| 86 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` |
| 92 | `dual-spaces-bilinear-forms-and-inertia` |
| 104 | `free-modules-and-exact-sequences` |
| 183 | `pi-the-equivalent-characterizations` |
| **220.2** | `finite-probability-spaces-and-random-variables` *(new — D1 split)* |
| 221 | `finite-probability-and-the-probabilistic-method` |
| 241 | `line-integrals-and-the-gradient-theorem` |
| 303 | `complex-differentiability-and-cauchy-riemann` *(founds `complex-analysis`)* |
| 363 | `limits-and-colimits` |

Plus each page's `-examples` B companion.

## The publish action, precisely

Publishing is flipping `status: draft` → `status: published` and setting
`verification.audited`. **That is the live site** — it reads this directory
through a bind mount. Do not flip anything until I tell you to, and never flip
something I have not audited.

**A published page listing a draft item is a hard error, never a silent skip.**
So a page and its items go together.

Two things to know before flipping anything:

- **`library/complex-analysis/` is a brand-new category.** It renders with the
  existing neutral fallback, exactly as `topology` and `category-theory` do. The
  renderer discovers categories by reading the directory, so **no renderer change
  is needed and none is permitted** — presentation is FROZEN.
- **There is a `/changes` surface** (added in `4a47087b`) that lists pages
  published or changed in the past week, and **it takes its dates from item
  verification stamps**. Publishing 454 items will populate it. That is expected;
  just know it is downstream of what you stamp.

## Two published items were modified — audit these first

Decision D10 recorded that two **already-published** items assume a
field-of-fractions construction the library had never built. This run built it and
wired both. Records: `research/frontier-12-published-dependency-repairs.md` §R1,
`research/frontier-12-alpha-step9.md`, `research/frontier-12-alpha-step9b.md`.

- **`cex-ordered-field-not-archimedean`** (order 9) — a **load-bearing forward
  reference**, legal only because the item is `kind: counterexample`. Passes both
  judge lanes. Certified independently.
- **`ex-rational-function-field-order`** (order 126) — an ordinary `deps` edge.
  Wiring it forced the item's **first-ever** paired-judge rejudge, which exposed a
  pre-existing fatal defect: its Fact `[L2]` asserted four propositions citing
  three items that state none of them, and one conjunct — *eventual sign = sign of
  the leading coefficient* — **existed nowhere in the library as a proposition**.
  Repaired under the owner-delegated protocol. DeepSeek flipped REJECT → PASS;
  Terra's residual objection was ruled `confirmed_nonfatal` and an independent Sol
  reader confirmed that ruling on the merits.

Both currently cite a **draft** item (the new corollary at 53.2). That resolves the
moment the new pages publish. If I decide **not** to publish this level, the
`ex-rational-function-field-order` `deps` edge must be reverted — a published item
cannot rest on a draft one.

## Decisions waiting for me — do not make them for me

1. **Publish, or not**, and how much.
2. **Should count-only drift lapse a spine receipt?** The D10 wiring moved seven
   `transitive_consumers` counts by +1/+2 while leaving every audited proof
   byte-identical, and that lapsed `spine-receipt-invalid`. An `ARCHITECTURE.md`
   mechanism question; Alpha explicitly declined to decide it.
3. **D11 — module localisation is homed on no page** in `plan-spec.json`.
   Recorded as a tracked gap, deliberately not wedged into an accepted pair. This
   is the same mechanism that surfaced D10 and got it fixed a run later.
4. **Six batch-4 drafts short-form cite `thm-newton-leibniz-with-interior-derivative`**
   where all seven published citers state the hypothesis. Step-6-class polish,
   forbidden at step 8, carried forward rather than patched.
5. **Should `dispatch.mjs` refuse a certifier sharing a model with an active judge
   lane?** The previous session used the audit `certifier` role (pinned to GPT 5.6
   Terra) to certify a repair, and it declined while citing **Terra's own judge
   ledger row** as support — self-agreement, not corroboration.

## How to work here

- **No permission prompts of any kind**, from you or any agent you dispatch. If
  something truly cannot be done without new authority, **stop and record a
  blocker** — that is the escape hatch, never a prompt.
- **This checkout runs as root on the VPS.** Do not put `bypassPermissions` in
  `.claude/settings.json`; it is checked in and it breaks `claude` here. It is
  `acceptEdits` on purpose. Machine-specific modes go in
  `.claude/settings.local.json`, which is gitignored.
- **`tools/gates.mjs --step 10 --run frontier-12`** is the gate of record. Note
  `level-coverage` takes ~3 minutes.
- **A green gate is not evidence the gate ran.** Read counts, not exit codes.
  `finite-smoke` reports `0 error(s), N check(s)` — if N is 0 it verified nothing.
  This run got it to 2.
- Conventional commits, **no Co-Authored-By trailers, ever**. GitHub is backup
  only, never on the serving path.

## Where the evidence is

| file | what |
|---|---|
| `research/frontier-12-step10-rundown.md` | the step-10 report — start here |
| `research/frontier-12-alpha-step6.md` | the whole-level audit, 11 fatal defects |
| `research/frontier-12-alpha-step8.md` · `-step8b.md` · `-step8c.md` | judge adjudication and the thrice-touched escalation |
| `research/frontier-12-alpha-step9.md` · `-step9b.md` | the published-item repair and impact dispositions |
| `research/frontier-12-judge.jsonl` | 922 paired verdicts |
| `research/frontier-12-judge-adjudications.jsonl` | 332 adjudications |
| `research/frontier-12-audit-coverage.json` | whole-level receipt, 127 plan-reconciliation rows |
| `research/frontier-12-spine-audit.json` | 60 highest-blast-radius proofs, re-attested |
| `research/frontier-12-reader-*.findings.md` | seven independent readers |

**Start by telling me what you would audit first and why.** Do not begin flipping
statuses.
