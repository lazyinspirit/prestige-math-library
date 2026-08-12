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

# frontier-11 — Alpha step 6b: adjudicate, refute, and disposition

You are **Alpha on run `frontier-11`**. Five independent readers have audited all
nine pairs and repaired **73+ item files**. Your Stage 2 job: adjudicate every
finding from disk, dispatch read-only proof-refuters, write the `risk_review`
records only you may write, and disposition the impact queue.

## What happened since your step-4 propagation

- **Step 5**: all 239 items authored. 11 of 12 gates green.
- **Step 6a**: readers 1–5 each audited a batch they did not author.
  - reader-1 → batch 2: **9 fatal, 4 nonfatal**, all repaired. Built the Koch
    nonrectifiability result for **D16** after verifying your three proposed
    reasons against the reading order — Hausdorff dimension and the Schwarz
    lantern confirmed as needing absent machinery. **B3 closed**: it reached the
    Apostol full text you could not and verified all five locators.
  - reader-2 → batch 3: items clean after repair; escalated two fatal artifact
    defects (below).
  - reader-3 → batch 4: **fatal defects in 12 items** repaired. **RA-27b passes
    all three obligations.** Two repairs change literal claim text and it flagged
    both for you explicitly.
  - reader-4 → batch 5: citation/locator/provenance repairs; no Statement changed.
  - reader-5 → batch 1: defects in 20 items, **15 with at least one fatal**.
- **Artifact reconciliation**: all five Betas re-synced contracts and coverage to
  the repaired text. **The vacuous-contract defect is closed** — 0 of 206
  contracts now carry empty citations, down from 49.

Findings files: `research/frontier-11-reader-<1..5>.findings.md`. Decisions
D1–D16: `research/frontier-11-step3-decisions.md`.

## Task 1 — adjudicate every reader finding from disk

For each reported defect and each applied repair: confirm it, refute it with
evidence, or record it as a false positive. **A reader may write, so its repairs
are already in the text — you are checking work that has landed, not proposals.**

Two repairs were flagged to you as changing literal claims. Rule on both:

1. `thm-operator-determinant-is-basis-independent` no longer asserts a
   determinant of a `0 x 0` representing matrix, because the published matrix
   determinant is defined only for `n >= 1`. The matrix-equality claim is now
   explicitly positive-dimensional; the zero-dimensional operator determinant
   remains the separately defined value `1`.
2. `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` previously set `f(0)=1`
   and claimed `F'(0) != f(0)`, contradicting its own title and scaffold purpose.
   It now spikes only at `2^-n`, `n>=0`, so `f(0)=0`, and proves `F'(0)=f(0)=0`
   at a discontinuity.

Also rule on reader-3's title repair to `ex-doubling-integers-has-nonunit-determinant`
("only over Q" was false — `[2]` is invertible over `R` and `Z/3Z` too).

## Task 2 — proof-refuters, read-only

Dispatch `refuter` subagents (GPT 5.6 Sol, `--sandbox read-only`, enforced by the
runner) held to the paired judges' skeptical standard: report only a concrete
false claim, unlicensed inference, missing hypothesis, or inaccurate citation,
and **inspect the supplied dependency before alleging it is too weak**. A refuter
never writes and never applies a fix — you adjudicate every finding from disk.

Prioritise: the four rewritten ℂ items; RA-27b's L-development; the Yoneda
naturality-in-both-variables theorem; Turán exact-and-unique; Lagrange–Bürmann
inversion; and anything a reader marked fatal-and-repaired, since a repaired
proof is a fresh proof.

## Task 3 — `risk_review` records (only you may write these)

`risk-report.mjs` routes items by risk tier. At **step 6** the contract trio runs
with `--require-reviewed`, so every high/critical item needs your `risk_review`
disposition — that is why this gate cannot pass before you run, and why it is not
demanded at step 5. Write them.

## Task 4 — impact disposition

**A baseline I should have taken was not taken, and I am telling you rather than
papering over it.** No `after-authoring` touchlog snapshot exists; the ledger has
`pre-d1-rewrite` (before step-5 authoring) and `probe-post-step6` (now). Running
`impact-audit --from pre-d1-rewrite` therefore reports **240 changed interfaces /
243 affected items**, which is a superset artifact: every newly authored draft
counts as "changed".

The meaningful question is narrower and I measured it precisely by diffing the
two snapshots' surface hashes: **among items that already existed, exactly 4
changed public surface — the four D1 ℂ items, and nothing else.** No other
published item was disturbed by step 6.

So disposition **those four and their consumers** (D1 measured 20 citing items;
`def-complex-metric-convergence-and-continuity`, `thm-complex-plane-is-complete`
and `lem-complex-polynomial-growth-and-minimum-modulus` rest on the plane model
via the new bridge item `thm-complex-numbers-are-the-real-coordinate-plane`).
Confirm the bridge actually carries them. If you judge the coarse baseline
insufficient for a sound disposition, **say so and name what you need** — do not
manufacture confidence from a superset.

## Boundaries

- Step 6 is **before** the freeze: cosmetic polish and 30-second-gap tidying
  belong here, and are forbidden at step 8. Use that latitude now.
- Do **not** touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md` —
  the D1 split state closes at step 10.
- Do not re-add `verification.audited`; do not add `verification.judge`.
- Two Beta fixes are in flight as you start: batch 3 `rendercheck`
  (`blank-line-in-inline-math`, 8 errors from its labeled-fact insertion) and
  batch 4 one strict `citation-uses` error on
  `thm-operator-determinant-is-multiplicative`. Do not duplicate that work.
- The no-permission-prompt rule binds you and every subagent you dispatch. You
  have web access.

## Output

`research/frontier-11-alpha-step6.md`: per-finding adjudication; refuter
dispatches and their verdicts with your ruling on each; `risk_review` records
written; the impact disposition; anything still unresolved; and an explicit
statement of whether the level is **ready to freeze for the step-7 judge sweep**.
