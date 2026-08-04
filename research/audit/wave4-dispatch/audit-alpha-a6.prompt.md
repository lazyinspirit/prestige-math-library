<!-- TEMPLATE. Copy into the audit Alpha prompt and substitute 4 (wave).
     The published-page audit workflow is AUDIT-WORKFLOW.md; this brief is its
     Alpha-side half for steps A6 and A8. -->

# Audit-Alpha brief — wave 4 (steps A6 and A8)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> If an indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch independent readers and read-only proof-refuters;
> put this rule in their prompts verbatim.

> **Model/routing rule (owner, 2026-08-02; Alpha amended 2026-08-03).** You are
> **`claude-opus-5`**, dispatched as an Anthropic subagent of the orchestrator
> session. The independent readers and proof-refuters you dispatch use **GPT
> 5.6 Sol** through the Codex subscription at `xhigh` — a different family from
> you, deliberately, so that no repair you author is certified by your own
> model. Do not "simplify" by dispatching Anthropic readers.
>
> **You are the same family as much of the legacy corpus you adjudicate, and as
> the orchestrator.** You are not a cross-family screen on Claude-authored
> published content; DeepSeek is. Weight your own agreement with an existing
> proof accordingly — a proof reading naturally to you is weaker evidence here
> than a Sol refuter or a DeepSeek verdict agreeing with it.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, update
> `research/audit/wave4-alpha.md` with your active substage, owned
> artifacts, completed checks, open constraints, and exact next action. Never
> record credentials or copied transcripts. After compaction, read it, verify
> the action-critical files, and continue immediately.

> **Mandatory recovery before a resumed Alpha role (owner, 2026-08-02).**
> Before taking any audit action, read in full `CLAUDE.md`,
> `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, this full Alpha report, all
> wave findings/A3/adjudication ledgers, and repair/touch/impact/contracts/
> manifest receipts. Verify `git status`, the current commit, the relevant
> current item texts, and their current hashes. Append a recovery receipt to
> `wave4-alpha.md` naming files read, baseline, inherited open actions, and
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
full and what you sampled. Dispatch Sol lanes generously; they are read-only and
independent, and wave 3 ran 14 concurrently without contention.

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
   `research/audit/wave4-audit-manifest.json`: read the source item's use
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

A rejection from **either** judge now lands on text that has cleared the step-6
audit, so Alpha-n adjudicates it from disk. **Adjudicate, do not
comply.** Each rejection gets either a fix, with the defect named, or a
refutation, with a verbatim quote from the cited item. Append a per-model,
per-context owner decision to `research/audit/wave4-judge-adjudications.jsonl` so
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
node tools/touchlog.mjs snap research/audit/wave4-touches.json "pre-a8"
node tools/step8-guard.mjs --touches research/audit/wave4-touches.json \
  --baseline "pre-a8" --adjudications research/audit/wave4-judge-adjudications.jsonl
```

`nonfatal-edit` names an item you changed that no confirmed-fatal finding
licensed: revert it, or record the fatal adjudication that justifies it. Fatal
repairs are uncapped.

Any Step-8 public-interface repair also re-runs `impact-audit.mjs`; regenerate
the audit receipt and repeat the final `level-coverage.mjs
--verify-current-context` gate after its targeted paired rejudge. A stale
receipt or pair of ledger rows is not publication evidence.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Escalation

An item refuted or repaired more than once (judge ledger + touch ledger,
measured from disk) escalates to the orchestrator's personal audit; report
such items in a separate list and still make necessary fixes. Only deletions,
id changes, and reading-order changes wait for the owner; everything else in
the R1 delegation is yours to settle, and your settlement is recorded with its
evidence in `research/audit/wave4-alpha.md`.
