<!-- TEMPLATE. Copy into the audit Alpha prompt and substitute 5 (wave).
     The published-page audit workflow is AUDIT-WORKFLOW.md; this brief is its
     Alpha-side half for steps A6 and A8. -->

# Audit-Alpha brief — wave 5 (steps A6 and A8)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> If an indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch independent readers and read-only proof-refuters;
> put this rule in their prompts verbatim.

> **Model/routing rule (owner, 2026-08-02; Alpha amended 2026-08-03;
> ALL-CLAUDE REROUTE 2026-08-05).** You are **`claude-opus-5`**, dispatched as
> an Anthropic subagent of the orchestrator session. The lanes you dispatch are
> now:
>
> - `--role certifier` → **`claude-sonnet-5`, read-only**, for the independent
>   current reading of any repair. It has `Read`/`Glob`/`Grep`/`WebSearch`/
>   `WebFetch` and nothing else, so it can check a source but cannot edit.
> - `--role audit-refuter` → **DeepSeek V4 Pro, read-only**, for adversarial
>   proof reading. **It is tool-less: it cannot open a file.** You must assemble
>   the item text and every cited dependency into a `--task` file. `dispatch.mjs`
>   refuses a refuter dispatched without one — that error means your context is
>   missing, not that the lane is broken.
>
> **The separation you used to get for free is gone, and one lane carries it
> now.** Audit-Beta is `claude-opus-5` — the same model as you. You adjudicate
> its findings and certify its repairs; the certifier is Sonnet, same family as
> both; the orchestrator is `claude-opus-5`. **The DeepSeek refuter is the only
> cross-family reader on the audit side.** So: your own agreement with a Beta
> determination is weak corroboration, not strong; "this proof reads correctly
> to me" is the least reliable evidence available to you; and a DeepSeek refuter
> finding deserves more weight than its terseness suggests, while a Sonnet
> certifier's agreement deserves less. Dispatch refuters generously —
> deliberately more than feels necessary — because they are the only lane that
> can see what your family cannot.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, update
> `research/audit/wave5-alpha.md` with your active substage, owned
> artifacts, completed checks, open constraints, and exact next action. Never
> record credentials or copied transcripts. After compaction, read it, verify
> the action-critical files, and continue immediately.

> **Mandatory recovery before a resumed Alpha role (owner, 2026-08-02).**
> Before taking any audit action, read in full `CLAUDE.md`,
> `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, this full Alpha report, all
> wave findings/A3/adjudication ledgers, and repair/touch/impact/contracts/
> manifest receipts. Verify `git status`, the current commit, the relevant
> current item texts, and their current hashes. Append a recovery receipt to
> `wave5-alpha.md` naming files read, baseline, inherited open actions, and
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
   `research/audit/wave5-audit-manifest.json`: read the source item's use
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
per-context owner decision to `research/audit/wave5-judge-adjudications.jsonl` so
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
node tools/touchlog.mjs snap research/audit/wave5-touches.json "pre-a8"
node tools/step8-guard.mjs --touches research/audit/wave5-touches.json \
  --baseline "pre-a8" --adjudications research/audit/wave5-judge-adjudications.jsonl
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
evidence in `research/audit/wave5-alpha.md`.


---

# This dispatch

# Wave 5, A8 round 3 — five adjudications and the coverage receipt

Nearly closed. 102 adjudications recorded, paired coverage 205/209, drift down
91 → 31 → 4. Two jobs remain.

## 1. Five rejections need an exact-hash adjudication

| model | item |
|---|---|
| `deepseek-v4-pro` | `cex-cauchy-rationals-no-rational-limit` |
| both lanes | `cex-unbounded-with-convergent-subsequence` |
| `deepseek-v4-pro` | `cor-monotone-converges-iff-bounded` |
| `deepseek-v4-pro` | `def-interval` |
| `deepseek-v4-pro` | `lem-geometric-sequence-null` |

Three deserve specific attention:

**`cor-monotone-converges-iff-bounded` is now TWICE-TOUCHED.** Both lanes called it
fatal, you repaired it, and DeepSeek rejects the repaired text again — but on a
DIFFERENT ground: `[L5]` claims `|t| ≤ M ⟺ −M ≤ t ≤ M` citing `lem-of-abs-value`,
which states only the strict version. Sonnet now passes it. A second, disjoint
defect is convergence rather than thrashing, and the escalation is advisory, not
blocking. But say explicitly in your report whether this item is converging or
whether its fact list needs rewriting as a unit — and if a third distinct defect
appears after this repair, that is the signal to stop repairing and reconsider
the statement.

**`def-interval` looks like a genuine self-contradiction.** DeepSeek reports that
defining closed intervals as those where "both written endpoints are included"
contradicts the item's own listed form `[a,∞)`, whose parenthesis excludes the
endpoint. If that is right it is the same class as wave 4's `def-cofinality`: a
page asserting something its own neighbouring text falsifies. `def-interval` is
also the most-cited item in this wave — 25 of wave 5's 28 cross-batch edges point
at it — so a repair here re-freezes a large cone. Make the smallest correct one.

**`lem-geometric-sequence-null`**: steps 3.5/3.6 cite `[L9]`
(`prop-of-multiply-inequalities`) to multiply a single inequality by a positive
number, but that proposition covers multiplying two inequalities under
nonnegativity. Open the cited target before deciding.

A8 is fatal-only. Report exactly which items you touch so I can rejudge precisely.

## 2. The coverage receipt needs your attestation

`research/audit/wave5-coverage.json` is a generated template and the gate refuses
it as-is:

- `audit-receipt-reviewer` — it needs a reviewer.
- `audit-receipt-attestation` — it needs a concrete attestation, not a placeholder.
- `audit-receipt-plan-reconciliation-reason` — three items need a concrete drift
  reason: `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
  `lem-radial-normalisation-is-continuous`,
  `thm-radial-straight-line-map-on-punctured-rn`. Each drifted from its planned
  `deps` during this wave; say what actually changed and why, from the ledgers.

Write what is true. This receipt is the wave's coverage claim of record, and an
attestation that overstates is worse than one that records a limit — in
particular, if you note anything about judge coverage, note that the Sonnet lane
refused 207 calls at concurrency 16 and its verdicts were recovered by a replay
at concurrency 4.

Append "A8 round 3" to `research/audit/wave5-alpha.md`.
