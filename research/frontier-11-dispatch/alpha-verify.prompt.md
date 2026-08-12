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

# frontier-11 — Alpha: verify the contract-fidelity round, then rule on the freeze

You are **Alpha on run `frontier-11`**. You required this: *"I would also not
accept the round on a self-report: the same Betas wrote the rows."* This is that
verification.

## What happened

All five Betas ran the artifact-only contract-fidelity round against your §6
findings. **The freeze held: `git status` shows zero `items/` and `library/`
files touched.** Contracts re-merged; `proof-contract --strict` reports 206/206,
0 errors — which, as you established, proves very little on its own.

Their reports are appended to each `research/frontier-11-batch-<i>.notes.md`.

## Task 1 — verify by sampling, not by reading their reports

Their reports are claims. **Check the artifacts against the frozen item text.**
Sample deliberately across the defect classes you identified, and weight toward
the batches and classes where the rot was thickest:

- **Truncated quotes** — the determinant pair (~15), the logarithm pair (6), the
  Yoneda pair. Open the cited source item and confirm each quote now reaches the
  clause its fact uses, and that nothing was "extended" by paraphrase rather than
  by quotation.
- **Prospective boilerplate** — batch 1 had **167** rows whose evidence was an
  instruction, batch 3 had 84 with six outright false. Confirm these are now
  either anchored to a step that does the work, or honestly `not_applicable` with
  a true reason. A row rewritten from "Step 1.1 must isolate…" to "Step 1.1
  isolates…" **without checking that step 1.1 does so** is the failure mode to
  hunt for — it satisfies the letter and changes nothing.
- **Boundary rows naming the wrong step** — the Laplace `zero`/`degenerate` rows,
  the rank-one-update `one` row, `thm-lagrange-burmann-inversion`'s `zero` row
  where `1/n` is undefined, `ex-log-two-from-four-characterisations` and
  `ex-unit-hyperbolic-area-brackets-e` on closed-interval endpoints.
- **`iff` rows** — `thm-turan-exact-and-unique`,
  `cor-chromatic-number-extremal-density`,
  `cor-representable-presheaves-detect-isomorphism-of-objects`,
  `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`.

Dispatch read-only `refuter` subagents if that gets you better coverage — they
are held to the same skeptical standard and never write.

## Task 2 — adjudicate any new mathematical findings

A Beta that found a row it could not make true without editing an item was told
to record it as a finding for you rather than edit the proof. **Collect those and
rule on each.** A confirmed one is a fatal defect in frozen text: it must be
repaired now, at step 6, because at step 8 only a `confirmed_fatal` judge
adjudication licenses an edit, and cosmetic latitude is gone.

## Task 3 — rule on the freeze

State plainly whether the level is **ready to freeze for the step-7 judge sweep**.
If yes, say so without hedging. If a specific batch or item still is not, name it
exactly and say what remains — a partial freeze is fine if you scope it.

If you judge the evidence record now sound, say what changed your mind since §6,
so the record shows this was verified rather than assumed.

## Boundaries

- You may edit `items/` **only** to repair a confirmed fatal defect from Task 2.
  Any such edit must be listed explicitly in your report — it reopens the freeze
  for that item, and I need to know exactly which ones.
- Do not touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.
- Do not re-add `verification.audited`; do not add `verification.judge`.
- No permission prompts, for you or any subagent. You have web access.

## Output

`research/frontier-11-alpha-verify.md`: what you sampled and how much of it; per
defect class, whether the repair is real or cosmetic; every new mathematical
finding and your ruling; every item you edited; and the freeze verdict.
