# Alpha brief for run `frontier-11`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you and on every subagent you dispatch.** The owner's wording:
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, web search permissions, git permissions, or any permissions
> whatsoever."* It binds a compound command as a whole, so **no segment of an
> `&&` chain may raise a prompt either** — prefer one command per invocation and
> absolute paths over `cd`. Pass `dangerouslyDisableSandbox: true` on every Bash
> call. If an indispensable operation has no escalation-free form, **record a
> blocker** in your report; that is the escape hatch, never a prompt. Every brief
> you write for a subagent carries this paragraph.

You are **Alpha on run `frontier-11`**, Claude Opus 5 on the `claude` runner at
`xhigh` reasoning with a **1,000,000-token context window** (model id
`claude-opus-5[1m]`). This routing is the owner's decision of 2026-08-10 and
supersedes the older Sol default **for the build `alpha` role only**. The roles
you dispatch are unchanged: `refuter` subagents and the independent Step-6
`reader` remain **GPT 5.6 Sol**, read-only where their role says read-only.

`briefs/alpha.md` is your **base contract** — read it in full. This file pins the
run-specific facts and paths; where they differ, this file wins on paths and the
base contract wins on method.

## Run facts

Nine non-topology A/B pairs, five batches, all mutually independent (page-level
cross-batch seams: 0, computed from disk at step 0). Artifacts are
`research/frontier-11-batch-<i>.{pages.json,notes.md,coverage.json,proof-contracts.json}`
for `<i>` in 1..5 — **the run prefix is `frontier-11`, never a level-numbered
prefix. This run has no single level number: its pairs span dependency levels 18
to 22. Do not construct a `level`-prefixed artifact path; nothing will be there.**

| batch | A pages | A+B items |
|---|---|---|
| 1 | `field-extensions-and-the-complex-numbers` (54), `conjugacy-and-simplicity-in-the-symmetric-groups` (64) | 16+7, 18+8 |
| 2 | `the-fundamental-theorems-of-calculus` (239), `arc-length-and-rectifiable-curves` (181) | 8+6, 13+6 |
| 3 | `formal-power-series` (193), `extremal-graph-theory` (219) | 22+9, 20+7 |
| 4 | `the-determinant-of-a-linear-operator` (84), `the-integral-logarithm-and-its-characterisations` (178.1) | 18+5, 19+5 |
| 5 | `universal-properties-and-the-yoneda-lemma` (361) | 20+14 |

Run total 221 items. Step-0 record: `research/frontier-11-step0-batching.md`.
Orchestrator decisions already settled: `research/frontier-11-step3-decisions.md`
— **read it before you start**; D1 is an owner decision, D2/D4/D6/D7/D8/D9 are
orchestrator approvals, and D3/D5 are explicitly routed to you.

## Stage 0 — step 3: review every scaffold for BREADTH and DEPTH

This is your first job and it is the reason you are spawned at step 3 rather than
step 4. Read every batch's `.pages.json`, `.notes.md` and `.coverage.json`
**together**, per pair, and answer the six questions in `briefs/alpha.md`
§"Stage 0": is the standard development present; is the harvest faithful to the
sources at their stated `locator`; are the declines real; is the B page real; is
the proof decomposition honest; does any pair need splitting.

You author nothing at this stage and you edit **no** batch file. Output
`research/frontier-11-alpha-step3-scaffold-review.md`: per pair a verdict of
`sufficient` or `insufficient`, and for every `insufficient` the **exact results
to add and the source that carries them**. "Could be deeper" is not a finding.
The orchestrator routes your findings to the owning Beta and you re-check before
step 4 splices anything.

### Named challenges — rule on each explicitly

1. **D5, the thin FTC page.** `the-fundamental-theorems-of-calculus` has **8 A
   items** because 14 harvested headings resolved to `already-published` on order
   161 `properties-of-the-integral-and-the-working-ftc`. The page therefore
   states **neither fundamental theorem**, carrying only refinements. Open order
   161 on disk and decide: is this `sufficient` as a refinements page, or must a
   page bearing this title restate the theorems it is named for? Consider the
   reader who arrives at it directly. Whatever you decide, say which items order
   161 actually owns.
2. **D5, arc-length backing.** `arc-length-and-rectifiable-curves` is the only
   pair in the run with **no textbook or monograph** among its sources (two
   `lecture-notes`, one `course-notes`). That is legal under the harvest rule.
   Judge whether the resulting 13-item scaffold is nonetheless the standard
   development, or whether the thin backing produced a thin page.
3. **D3, the transcendental-extension decline.** Batch 1 declined simple
   transcendental extensions and `F(x)` as `out-of-scope` because no
   field-of-fractions construction exists, and declared it the pair's **only**
   whole-subject omission. Under the 2026-08-11 build-the-machinery rule a
   missing construction is normally something to build. Rule on whether this is
   genuinely another page's topic or a decline that should have been a build.
   Note batch 4 hit the same missing fraction field (D7) and routed around it.
4. **D3, the composite-of-subfields deferral** to `splitting-fields` (order 56).
   Confirm the receiving page will actually carry it, or the deferral is a silent
   loss.
5. **Batch 5, size.** `universal-properties-and-the-yoneda-lemma` is 20+14 with a
   60+25-item published prerequisite at order 359. Confirm nothing published
   there is restated, and that Yoneda naturality **in both variables** is
   scaffolded, not just the bijection.

## Stage 1 — step 4: propagate approved changes

Apply the approved `.notes.md` amendments into the prose scaffolds
(`research/plan-*.md`). You are the single writer of those files. D9 lists
batch 5's amendments to `research/plan-combinatorics-and-categories.md` §CT-2,
including replacing a clause that is **false as written**.

**D1 is an owner-approved published-content change and is applied at this stage,
by you, with the full protocol:** take a dedicated `tools/touchlog.mjs` baseline
**before the first edit**, move the four items
(`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws`) from
`the-complex-exponential-and-eulers-formula` to
`field-extensions-and-the-complex-numbers` with **ids unchanged**, add
`field-extensions-and-the-complex-numbers` to order 189's `requires`, then run
`tools/impact-audit.mjs` from that baseline and resolve **all 20** logical and
direct-citation consumers before the level continues. The relocated items keep
their existing `verification` blocks and component provenance — nothing is
retro-tagged and no provenance is fabricated.

## Stages 2–4 — steps 6 and 8

Per `briefs/alpha.md` §"Stage 2" and §"Stage 3", with run paths substituted:
independent step-6 readers per batch (never the batch's own author), read-only
Sol `refuter` subagents, adjudication from disk, and `risk_review` records for
high/critical risk items. Your reports are
`research/frontier-11-alpha-report.md` and, per stage, files named
`research/frontier-11-alpha-step6.*` and `research/frontier-11-alpha-step8.*`.

**Step 8 is fatal-only (R1).** Only a `confirmed_fatal` adjudication licenses an
edit; `confirmed_nonfatal` and `false_positive` close the row with **no**
content, page, frontmatter, contract, impact or judge mutation. Cosmetic polish
and 30-second-gap tidying belong at **step 6**, before the text is frozen. Every
adjudication row records `item_sha256`.

## Reporting

State plainly anything you could not do. A finding you cannot substantiate from
disk is not a finding. You are the sole adjudicator of judge rejections later in
this run, so keep your step-3 reasoning recoverable — the orchestrator runs gates
and maintains ledgers but never substitutes its own adjudication for yours.


---

# This dispatch

# frontier-11 — Alpha step-3 re-check, then step-4 planning

You are **Alpha on run `frontier-11`**. Your step-3 review
(`research/frontier-11-alpha-step3-scaffold-review.md`) is on disk and all five
Betas have applied your findings. This dispatch is the re-check you committed to:
*"I re-check every routed finding before step 4 splices, and I do not splice a
pair I marked `insufficient` until its findings are resolved."*

## You now have web access

The blocker you recorded was real and is fixed: `tools/dispatch.mjs` launched the
claude lane with `--permission-mode acceptEdits`, which accepts edits but still
prompts for `WebFetch`. It now uses `bypassPermissions`. **You can open sources
at their locators.** Criterion 2 of the step-3 review — check `contents` against
what the stated range actually contains — is available to you this time.

Your instinct was right without it. Batch 5 re-enumerated Riehl and Leinster over
the same stated ranges and went **37 → 124 headings from the same four sources**.
That is what you suspected from the shape of the record alone.

## What changed since your review

| batch | pair | items before → after |
|---|---|---|
| 1 | field-extensions | 16+7 → **20**+7 |
| 1 | conjugacy (was sufficient) | 18+8 → 18+8 |
| 2 | fundamental-theorems | 8+6 → **10**+6 |
| 2 | arc-length | 13+6 → **15**+**7** |
| 3 | formal-power-series | 22+9 → 22+9 (C1 restated, C2 added) |
| 3 | extremal-graph-theory | 20+7 → 20+**9** |
| 4 | determinant-of-an-operator | 18+5 → **20**+**8** |
| 4 | integral-logarithm (was sufficient) | 19+5 → 19+5 |
| 5 | yoneda | 20+14 → **21**+14 |

Run total 222 → **238 items**, harvest 350 → **508 headings**, 0 coverage errors,
all step-2 gates green.

## Task 1 — re-check every routed finding

For each label you issued — T1–T4, F1–F4, A1–A3, R-A, C1, C2, E1, E2, D1, D2,
R-D, Y1 and the coverage retags — confirm from disk whether it is **resolved,
partially resolved, or not resolved**. Read the Betas' fix reports in each
`research/frontier-11-batch-<i>.notes.md`; a Beta was told to push back with disk
evidence rather than comply with something it believed wrong, so treat any
pushback as a finding to adjudicate, not insubordination.

Give a final `sufficient` / `insufficient` per pair. **Use your web access** to
spot-check the harvests you flagged: batch 5's Riehl and Leinster, batch 3's
Flajolet–Sedgewick leg, and the new treatments added for R-A (arc-length
textbook) and R-D (determinant commutative-ring source). If a `locator` does not
match what the source contains, say so — that is the check you could not run last
time.

Special attention, since it changed most: batch 5's harvest tripled. Confirm the
124 headings are genuinely **that source's own** section and named-result
headings over the stated ranges, not an inflated or invented list. A padded
harvest is as much a defect as a thin one, and the no-padding rule still binds.

## Task 2 — plan the D1 relocation, do NOT execute it yet

D1 is the owner-approved relocation of four **published** items —
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws` — from
`the-complex-exponential-and-eulers-formula` (order 189) to
`field-extensions-and-the-complex-numbers` (order 54), **ids unchanged**, with
order 189 gaining order 54 in `requires`.

There is a sequencing problem I want your judgment on before anything is touched:
**the destination page does not exist yet.** `library/abstract-algebra/field-extensions-and-the-complex-numbers.md`
is created when the page is authored at step 5. Meanwhile the four items are
`status: published` and currently listed by a published page. A published page
listing a draft item is a hard error, and I do not want a transient state where
the items are listed twice or by nothing.

**Write the exact ordered sequence** — which file changes at which step, where
the `touchlog.mjs` baseline is taken, when `impact-audit.mjs` runs against the 20
consumers, and what each gate would say at each intermediate point. Name any
point where the tree would be inconsistent and how you avoid it. Do not edit
`items/`, `library/` or `plan-spec.json` in this dispatch. I splice at step 4
once your sequence is agreed.

## Output

`research/frontier-11-alpha-recheck.md`:

1. a per-label resolution table with your verdict on each;
2. final `sufficient`/`insufficient` per pair, and for anything still
   insufficient, exactly what remains;
3. the harvest spot-check results, naming any locator that does not hold;
4. the D1 sequencing plan;
5. any blocker — recorded, never prompted.
