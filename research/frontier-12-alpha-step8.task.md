## Alpha — step 8, adjudicate the paired-judge verdicts. FATAL-ONLY.

The step-7 sweep is complete. Both lanes — DeepSeek V4 Pro and GPT 5.6 Terra —
judged every item in all twelve pairs against the frozen pair context.

Ledger: `research/frontier-12-judge.jsonl`.
Write adjudications to `research/frontier-12-judge-adjudications.jsonl`, one JSON
object per line:

```
{"id": "...", "model": "...", "context_sha256": "...", "item_sha256": "...",
 "outcome": "confirmed_fatal" | "confirmed_nonfatal" | "false_positive",
 "defect_type": "logic" | "dependency_citation" | "other"}
```

`defect_type` is required only for `confirmed_fatal`.

### R1 — step 8 is fatal-only, and it is mechanically enforced

**Only a `confirmed_fatal` adjudication licenses an edit to an item.** A
`confirmed_nonfatal` or `false_positive` closes its row with **no content, page,
frontmatter, contract, impact, or judge mutation whatsoever.**

This is not a style preference. Cosmetic polish and 30-second-gap tidying belong
at step 6, where no verdict exists to void. Here, any edit is a material rewrite
under SCHEMA §3, so a step-8 polish voids `verification.judge`, forces a rejudge,
and resamples a refuter that surfaces a fresh nitpick every stochastic run — an
unbounded loop converging on nothing.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
fatal defects is either converging toward correctness or is actually false, and
both must run to conclusion.

The orchestrator has taken a dedicated `pre-step8` touchlog baseline immediately
before this dispatch and will run `tools/step8-guard.mjs` after you finish. Every
item changed since that baseline must be licensed by a `confirmed_fatal` row
recorded against the **pre-edit** text state — hence `item_sha256` on every row.
Error codes are `nonfatal-edit` and `judge-adjudication-unhashed`. An edit you
make without a fatal row will be caught.

### How to adjudicate

Read the frozen verdict and the **current disk text**. Then:

- **`confirmed_fatal`** — a concrete false claim, an unlicensed inference, a
  missing hypothesis, or an inaccurate citation. Repair it, gate it, and select
  the exact changed items for rejudge.
- **`confirmed_nonfatal`** — real but not fatal. The 30-second rule holds: a gap
  a competent human reader closes in 30 seconds is nonfatal. Record it and
  **change nothing**.
- **`false_positive`** — refute it with evidence from disk. Change nothing.

The two lanes are strongly asymmetric — on the previous run Terra rejected 37% of
items and DeepSeek 13%. Weight agreement, but **never treat one lane's pass as
refuting the other's rejection**. Adjudicate from the text, not from the vote.

DeepSeek is the only cross-family lane. Terra shares the GPT family with the
audit-side Alpha, so weight same-family agreement accordingly.

### What step 6 already settled — do not re-open

`research/frontier-12-alpha-step6.md` records 11 fatal defects you already
confirmed and repaired, including the false title on
`thm-complex-differentiability-…-cauchy-riemann`, the boundary chain for
disconnected elementary Green regions, and the inline free-module construction
for `thm-rmod-is-complete-and-cocomplete`. If a judge raises one of these against
the pre-repair text, it is a `false_positive` against current disk — say so with
the evidence.

### Things a judge is likely to raise that are NOT defects

- **Green's theorem does not cover arbitrary Jordan domains.** Deliberate, by
  decision D2, because the Jordan curve theorem is `proved_here: false` here. The
  limitation is stated in `rem-greens-theorem-jordan-domain-limitation`. A proof
  step that quietly *assumes* a Jordan domain is a real defect; the scope itself
  is not.
- **Module localisation is absent.** Decision D11 — homed on no page in the plan,
  recorded as a tracked gap.
- **`splitting-fields` does not construct an algebraic closure.** Declined at
  step 3 with reasons; it needs machinery beyond order 56.

### The D10 wiring must survive your repairs

`def-field-of-fractions`, `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
`thm-universal-property-of-the-field-of-fractions` and
`cor-rational-function-field-as-a-fraction-field` must remain **A-page** items
with those exact ids. Step 9 wires two published items to them. If a fatal repair
would move or rename any of them, say so rather than doing it silently.

### Output

`research/frontier-12-alpha-step8.md` — per rejection, the outcome and the
evidence; the list of items you repaired and selected for rejudge; and an
explicit statement of whether the level is ready for step 9. Plus the
adjudications ledger itself, which is the machine record.
