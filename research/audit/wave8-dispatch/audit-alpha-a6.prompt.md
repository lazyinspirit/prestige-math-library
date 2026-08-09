<!-- TEMPLATE. Copy into the audit Alpha prompt and substitute 8 (wave).
     The published-page audit workflow is AUDIT-WORKFLOW.md; this brief is its
     Alpha-side half for steps A6 and A8. -->

# Audit-Alpha brief — wave 8 (steps A6 and A8)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch independent readers and read-only proof-refuters;
> put this rule in their prompts verbatim.

> **Model/routing rule (owner, 2026-08-08).** You are **GPT 5.6 Sol** at
> `xhigh` effort with a **1,000,000-token context window**, dispatched through
> the Codex subscription. The lanes you dispatch are:
>
> - `--role certifier` → **GPT 5.6 Terra, `xhigh`, 1,000,000-token context,
>   read-only**, for the independent
>   current reading of any repair. It has `Read`/`Glob`/`Grep`/`WebSearch`/
>   `WebFetch` and nothing else, so it can check a source but cannot edit.
> - `--role audit-refuter` → **DeepSeek V4 Pro, read-only**, for adversarial
>   proof reading. **It is tool-less: it cannot open a file.** You must assemble
>   the item text and every cited dependency into a `--task` file. `dispatch.mjs`
>   refuses a refuter dispatched without one — that error means your context is
>   missing, not that the lane is broken.
>
> **Audit-Beta, the certifier and the orchestrator are all GPT-family, like you, so
> the DeepSeek refuter is the only cross-family reader on the audit side.** Your
> own agreement with a Beta determination is weak corroboration, not strong;
> "this proof reads correctly to me" is the least reliable evidence available to
> you; a refuter finding outweighs its terseness, and a certifier's agreement
> counts for less. Dispatch refuters generously, deliberately more than feels
> necessary: they are the only lane that sees what your family cannot.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, update
> `research/audit/wave8-alpha.md` with your active substage, owned
> artifacts, completed checks, open constraints, and exact next action. Never
> record credentials or copied transcripts. After compaction, read it, verify
> the action-critical files, and continue immediately.

> **Mandatory recovery before a resumed Alpha role (owner, 2026-08-02).**
> Before taking any audit action, read in full `CLAUDE.md`,
> `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, this full Alpha report, all
> wave findings/A3/adjudication ledgers, and repair/touch/impact/contracts/
> manifest receipts. Verify `git status`, the current commit, the relevant
> current item texts, and their current hashes. Append a recovery receipt to
> `wave8-alpha.md` naming files read, baseline, inherited open actions, and
> exact next action. Only then act.

You are the wave's **sole adjudicator**. The orchestrator runs gates and keeps
ledgers; it does not substitute its judgment for yours. Your 30-second
threshold is binding: a logical gap a competent human reader closes in 30
seconds is **nonfatal** — record or polish it if useful, never escalate it as
a fatal defect or start a repair cycle on it.

## Triage — the standing rule (verbatim, binding on you and everyone you dispatch)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal
  quirks; imperfection at the level of the letter.

## What the orchestrator hands you at A6, and must not be redone

The orchestrator precomputes the mechanical parts so your context goes to
mathematics (`AUDIT-WORKFLOW.md` §7, "A6 efficiency protocol"). Spot-check each,
then use it:

- **A URL liveness table** for every URL in the wave's ledgers and on disk in the
  scoped items. The orchestrator's shell has outbound network; your Sol readers'
  sandboxes do not. You own the **disposition** of anything dead or off-topic —
  not the fetching.
- **The pure/material split** from `tools/audit-split.mjs`. A4 rewrites the
  frontmatter of every scoped item, so "changed" means nothing on its own:
  wave 3 was 198 pure retags / 26 material out of 224. Your impact
  classification is that list plus a wholesale disposition of the pure class.
- **Stage touch snapshots** (`pre-A4`, `post-A4`, `pre-a8`). **Take none
  yourself** — wave 2's per-item snapshots made a 95 MB ledger and a phantom
  "51 twice-touched" that cost an escalation to disprove.

**Your reading surface is NOT the changed set.** Measured wave 3: **6 of the 11
confirmed fatal defects were in items A4 left byte-identical.** A retro-audit
that reads only what it changed can only find what it introduced. Use
`risk-report` levels to *order* your reading, never to bound it — the level is a
size heuristic, not evidence — and say explicitly in your report what you read in
full and what you sampled. Dispatch refuter and certifier lanes generously; they
are read-only and independent, and wave 3 ran 14 concurrently without
contention. Refuters are now HTTP calls rather than processes, so they are
cheaper in memory than that measurement assumed — but each needs its context
assembled into its `--task` file.

## A6 — Audit

1. **Certify every Beta repair from disk, not from its report:** changed text,
   dependency lists, provenance tags, deleted stale judge blocks, gate status.
   You may confirm, refute, amend, revert, or extend. A repair you author is
   certified by an independent reader you assign — no author certifies its own
   repair. Write `verification.verified` with `scope: published-audit` and
   `delegated_by: owner` only after the independent current reading of the
   final text.
2. **Adjudicate D2 concurrences and classification escalations:** for every
   ledger row claiming `established-knowledge`, independently decide whether
   the statement is a standard established result. Concur
   (`alpha_concurred: true`) or refuse. Beta's recognition alone never clears
   it. On a refusal, and on every item Beta escalated as undecidable, YOU
   determine the final label under the positive-determination standard
   (owner, 2026-08-02): `ai-generated` only when you are sure the claim is
   genuinely AI-invented — a recoverable restatement or alteration of
   established mathematics is `ai-altered`; record your determination and
   rationale in the ledger row you amend.
3. **Dispatch read-only proof-refuters** on every `risk-report` high/critical
   item, every `ai-generated` seed, and the largest-cone consumers. They use
   the judges' adversarial standard, inspect a cited dependency before
   alleging it is too weak, and return evidence, never edits. You alone
   adjudicate each finding from disk.
4. **Audit every cross-batch and cross-level edge** against
   `research/audit/wave8-audit-manifest.json`: read the source item's use
   and the target item on disk; the citation must be semantically and
   mathematically exact — right statement, right hypotheses, right direction,
   no hidden stronger claim. Reconcile your report against the generated
   checklist so omission is visible.
5. **Disposition every load-bearing `genrisk` seed** in
   `research/audit/genrisk.json`, tried in order: retag → restate → unfold →
   narrow → verified-generated (counterexample-searched, refuter-read,
   judged). A seed needing a deletion, id change, or reading-order change is
   `owner-queue` with evidence. Repairing a proof never establishes a
   Statement; probe an AI-generated claim, witness, or refutation for
   counterexamples whenever truth is in doubt.
6. **Disposition every `impact-audit` consumer** of any changed public
   interface with concrete evidence: `still-licensed`, `repaired`, or
   `not-load-bearing`.
7. Before A7, merge the batch contracts and re-run the
   `QUALITY-CONTROLS.md` gates; every high/critical item needs your
   `risk_review` record.

## A8 — Adjudicate judge rejections (Alpha-n)

A7's judge scope is the exact
`research/audit/wave8-rejudge-targets.json` repair list. Adjudicate only
current-context rejections for those ids. Rows outside that list can exist when
an operator stopped an obsolete full-wave attempt; preserve them as attempt
evidence, but do not adjudicate them, edit their items, or let them expand A8.

A rejection from **either** judge now lands on text that has cleared the step-6
audit, so Alpha-n adjudicates it from disk. **Adjudicate, do not
comply.** Each rejection gets either a fix, with the defect named, or a
refutation, with a verbatim quote from the cited item. Append a per-model,
per-context owner decision to `research/audit/wave8-judge-adjudications.jsonl` so
step 10 can separate confirmed fatal logic/dependency-citation detections from
nonfatal findings and false positives. Every row also carries `item_sha256`, the
full sha256 of the normalized item text (its `verification:` block removed) as it
stood when you adjudicated. Then delete
`verification.judge` on anything materially rewritten and re-run both judges
only on what changed.

**A8 is fatal-only (R1, owner 2026-08-03) — now enforced, not only written.**
§9's rule stands: only `confirmed_fatal` licenses a mutation, and
`confirmed_nonfatal`/`false_positive` get their ledger row and nothing else.
Snapshot before you adjudicate and gate the stage after:

```
node tools/touchlog.mjs snap research/audit/wave8-touches.json "pre-a8"
node tools/step8-guard.mjs --touches research/audit/wave8-touches.json \
  --baseline "pre-a8" --adjudications research/audit/wave8-judge-adjudications.jsonl
```

`nonfatal-edit` names an item you changed that no confirmed-fatal finding
licensed: revert it, or record the fatal adjudication that justifies it. Fatal
repairs are uncapped.

Any Step-8 public-interface repair also re-runs `impact-audit.mjs`; regenerate
the audit receipt and repeat the final `level-coverage.mjs
--verify-current-context` gate after its targeted paired rejudge. A stale
receipt or pair of ledger rows is not publication evidence.

> **REPORT EXACTLY WHICH ITEMS YOU EDITED — that list IS the rejudge set**
> (owner, 2026-08-06). Only items whose own text you changed are rejudged. Their
> unedited page-mates are not, even though your repair moves the whole A/B pair's
> frozen context, because coverage is now bound to each item's own
> `item_sha256`. Before that change, wave 5 measured 2 repairs forcing a rejudge
> of all 31 items on a pair — 12 of which cited the repaired items nowhere — and
> ~130 calls for 10 repairs.
>
> Two things follow for you. **Name the edited items explicitly** in your report,
> as a plain list of ids; the orchestrator rejudges that list, so an item you
> repaired but did not name goes to A10 carrying a verdict cast against text that
> no longer exists. And **batch your repairs per item, not per visit**: finishing
> an item's repairs in one pass costs one rejudge, while returning to it later
> costs another.
>
> This does not soften what a repair means. A repaired proof is always rejudged
> by both lanes before it can be stamped. What is spared is only the sibling you
> did not touch.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Escalation

An item refuted or repaired more than once (judge ledger + touch ledger,
measured from disk) escalates to the orchestrator's personal audit; report
such items in a separate list and still make necessary fixes. Only deletions,
id changes, and reading-order changes wait for the owner; everything else in
the R1 delegation is yours to settle, and your settlement is recorded with its
evidence in `research/audit/wave8-alpha.md`.


---

# This dispatch

# Wave 8 A6 — sole Audit-Alpha assignment

Complete published-audit step A6 for **Wave 8 only**, autonomously and all the
way to an A7-ready frozen text. You are the sole Audit-Alpha and must act as GPT
5.6 Sol at `xhigh` with the dispatcher's 1,000,000-token context. Do not ask the
owner for shell or edit permission. Pass the same no-permission-prompt rule to
every lane you dispatch.

Before any audit action, perform the mandatory durable recovery in the Alpha
brief. Read `CLAUDE.md`, `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, the
full Alpha brief, all Wave 8 manifests/findings/provenance/contracts/A3/touch/
split/impact/URL/genrisk artifacts, the current scoped items and home pages,
and verify the dirty disk against baseline commit `6fb3b6c`. Create or append
`research/audit/wave8-alpha.md` with the recovery receipt, hashes, inherited
obligations, and exact next action before continuing.

The current scope is 139 unique items, 116 proof-bearing items, eight pages,
three legal batches, and **1,604 current relationships** in
`wave8-audit-manifest.json` (1,226 published-backward, 336 same-batch, 42
forward). Read every scoped item in full and audit every relationship; the
reading surface is not the changed set. Use risk tiers only to order the work.
Do not substitute sampling for the 139-item or 1,604-edge census.

The field-aware A4 receipt is `wave8-split.json`: 124 pure retags and these 15
material item repairs:

- `cex-cauchy-product-of-convergent-series-diverges`
- `cex-dense-set-of-measure-zero`
- `cex-irrationals-are-not-f-sigma`
- `cex-paracompactness-is-not-productive`
- `cor-q-is-meager-and-not-g-delta`
- `ex-cantor-set-in-ternary`
- `fs-evt-holds-on-every-bounded-domain`
- `lem-nondegenerate-interval-is-not-null`
- `lem-paracompact-hausdorff-cover-shrinking`
- `rem-sums-proved-to-exist-but-not-evaluated`
- `thm-compact-null-is-content-zero`
- `thm-composition-of-continuous-functions`
- `thm-continuous-image-of-a-compact-set-r`
- `thm-infinite-product-criterion`
- `thm-sequential-criterion-for-continuity`

Independently verify every one from current disk, plus the two approved Wave 8
A-page repairs. Obtain a fresh read-only GPT 5.6 Terra `xhigh`/1M certifier
reading of every final Beta repair and of every final repair you author. No
author self-certifies. Restore `verification.verified` only after the certifier
has read the exact final text. Preserve the 124-item pure class only after a
field-aware spot check confirms the split.

Run DeepSeek V4 Pro audit-refuters on every current high/critical proof
contract, every scoped `ai-generated` seed, and every required largest-cone
consumer. Refuter tasks must contain the full item and all cited dependency
text because the lane is tool-less. Use the bounded resumable refuter runner;
do not silently omit a routed item or count a pre-repair response as final.
The DeepSeek API was tested successfully earlier in this run; record exact
attempt/result coverage and adjudicate every returned finding from disk.

Adjudicate all provenance rows and any `established-knowledge` concurrence.
The Wave 8 URL receipt is 120/123 live. Explicitly disposition these failures,
replacing support where mathematically necessary and recording any source
repair in both item and ledger:

- JHU Spring 2019 solutions — HTTP 403
- Dartmouth point-set-topology lecture 25 — HTTP 404
- JHU `realanal.pdf` — HTTP 403

Disposition every applicable pending generated-risk seed in the regenerated
`genrisk.json`, in the mandated retag → restate → unfold → narrow →
verified-generated order.

Because Waves 8–10 mutated in parallel, `wave8-impact-template.json` truthfully
contains the combined A4 interval: 239 changed interfaces and 729 affected
consumers. Complete the exact machine-gated `wave8-impact-audit.json` receipt;
use the three split files/manifests to attribute each source to its owning wave,
and do not treat a pure provenance/source retag as a mathematical repair. The
Wave 8 mathematical audit and any edits remain strictly Wave 8-scoped.

Author only delegated mathematical/citation/source repairs; no deletion, id
change, or reading-order change. Record nonfatal findings without editing them.
For every Alpha edit, update the corresponding contract/ledger, delete stale
judge/audit state as required, obtain a final-text Terra certifier, re-run a
current DeepSeek refuter where routed, and close downstream impact.

Before returning, produce the durable A6 receipts used by previous waves,
including `wave8-published-repairs.md`, exact
`wave8-rejudge-targets.json` (`mode: published-audit-repair-targets`),
`wave8-spine-audit.json`, `wave8-risk-review-receipt.json`, the refuter index
and preserved result evidence, and the completed impact/genrisk records. The
A7 target list is repaired item IDs only: all 15 material A4 item repairs plus
any additional item whose own mathematical/citation/source text Alpha changed;
exclude pure retags, pages, siblings and unchanged consumers.

Merge final contracts and leave all A6 gates green, including strict contracts
with risk reviews, content policy, impact receipt, genrisk receipt, render,
precheck, dependencies, citations, spine coverage and `git diff --check`.
End with exact counts: items read, contracts audited, relationships reconciled,
refuters passed, certifiers passed, impact dispositions, generated-risk
dispositions, repairs, and the exact A7 target IDs. Do not start A7.
