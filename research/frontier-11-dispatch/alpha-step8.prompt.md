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

# frontier-11 — Alpha step 8: adjudicate the judge rejections. FATAL-ONLY.

You are **Alpha on run `frontier-11`**, and you are the **sole adjudicator** of a
paired-judge rejection. The orchestrator runs gates and maintains ledgers and
never substitutes its own adjudication for yours.

## The sweep

`research/frontier-11-judge.jsonl` — 478 verdicts over 239 items, **zero nulls**,
so every row is a real verdict rather than a capacity refusal.

| lane | keep | reject |
|---|---|---|
| GPT 5.6 Terra | 150 | 89 (37%) |
| DeepSeek V4 Pro | 208 | 31 (13%) |

- **140 items** took a clean paired pass — not your problem.
- **21 items rejected by BOTH lanes** — adjudicate these first; cross-family
  agreement is the strongest signal available.
- **78 items split**, one lane rejecting.

Weight the lanes knowingly: Terra rejects at nearly 3× DeepSeek's rate, so a
Terra-only rejection is weaker evidence than an agreement. But **a rejection is
not refuted by the other lane passing** — the passing lane may simply have missed
it. Refute with evidence from disk, never with a vote count.

## R1 — STEP 8 IS FATAL-ONLY. This is the binding constraint.

**Only a `confirmed_fatal` adjudication licenses an edit to an item.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its exact-hash
ledger row with **no content, page, frontmatter, contract, impact or judge
mutation.** None. Not a typo fix, not a clearer word, not a tightened quote.

Why, in the owner's reasoning: any edit is a material rewrite under SCHEMA §3, so
a step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter that surfaces a fresh nitpick every stochastic run — an unbounded loop
converging on nothing. Cosmetic polish belonged at step 6 and that window is
closed.

**The 30-second rule still governs:** a logical gap a competent human reader
closes in 30 seconds is **nonfatal**. At step 8 you may not even polish it — you
record it and move on.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
fatal defects is either converging toward correctness or is actually false, and
both must run to conclusion.

## What is fatal here

Most rejections are one class: **a fact stated stronger than the dependency it
cites**, or a step not licensed by the facts it names. Judge that class
carefully — it is exactly the citation-fidelity rule, and the owner's wording is
that a fact must state the cited definition or theorem itself, with no changed
domain, quantifier, hypothesis, direction or conclusion, and no invented
converse. **Inflating a restatement so a proof appears to close is fatal**, even
when the underlying mathematics is true, because the citation is then false.

Distinguish that from: the fact is faithful and the reader must do 30 seconds of
work to see why it applies. That is nonfatal.

Specific ones to look at hard, all both-lane rejections:

- `def-path-polygonal-length-and-rectifiability-in-rn` — Terra says the singleton
  clause claims a *unique* path on `[a,a]`, and there are infinitely many. That
  reads as a plain mathematical error, not a citation defect.
- `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` — indexes
  `R^n` coordinates `1..n` where this library indexes `0..n-1`. Check the
  library's actual convention before ruling.
- `thm-integral-logarithm-derivative-and-normalisation` — **both lanes**, and this
  is the RA-27b owner obligation. Terra: FTC applied without establishing `1/t`
  integrable on `[a,b]`. DeepSeek: `[L2]` omits an integrability condition.
- The determinant cluster — `thm-operator-determinant-is-basis-independent`,
  `cor-operator-determinant-by-row-reduction`,
  `thm-adjugate-identity-over-a-commutative-ring`,
  `cor-operator-determinant-on-the-general-linear-group`.

## The ledger you write

`research/frontier-11-judge-adjudications.jsonl`, one row per rejection:

```
{"id":…, "model":…, "context_sha256":…, "outcome":…, "defect_type":…, "item_sha256":…}
```

- `outcome` ∈ `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`
- `defect_type` for fatal ∈ `logic` | `dependency_citation` | `other`
- **`item_sha256` is mandatory on every row** — the sha256 of the normalized item
  text (verification block excluded) **at adjudication time**, i.e. the pre-edit
  state. `tools/step8-guard.mjs` uses it against the `pre-step8` baseline I have
  already taken to prove every changed item was licensed. A row without it fails
  with `judge-adjudication-unhashed`; an item changed without a licensing fatal
  row fails with `nonfatal-edit`.

Adjudicate against the **exact frozen text the judge saw** — `context_sha256` and
`item_sha256` on the verdict row tell you what that was.

## After repairs

A repaired item's own `item_sha256` changes, so **it must be rejudged**; its
unedited page-mates are spared. Tell me exactly which ids to rejudge and I will
run `judge-sweep --items`.

## Output

`research/frontier-11-alpha-step8.md`: counts by outcome; every `confirmed_fatal`
with the defect and the repair; every `confirmed_nonfatal` and `false_positive`
with why, and an explicit statement that you changed nothing for those; the
rejudge id list; and anything unresolved.

No permission prompts, for you or any subagent. You have web access.
