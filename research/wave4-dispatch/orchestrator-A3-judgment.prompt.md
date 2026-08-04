<!-- TEMPLATE. The orchestrator's own brief for the published-page audit's two
     judgment steps, A3 and A9. Substitute 4 (wave). The workflow is
     AUDIT-WORKFLOW.md; `briefs/audit-alpha.md` is a DIFFERENT role (A6/A8) and
     dispatching it here is the wave-4 defect this file exists to fix. The
     driver appends the concrete step under "# This dispatch". -->

# Audit-orchestrator brief — wave 4 (steps A3 and A9)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox
> and choose non-escalated forms. Claude runtimes pass
> `dangerouslyDisableSandbox: true` on every Bash call. If an indispensable
> operation has no escalation-free form, record a blocker instead of asking.

> **You are the orchestrator, not Alpha and not a Beta.** Alpha adjudicates
> judge rejections at A6/A8 and is the wave's sole repair adjudicator there. The
> Betas propose at A2 and apply at A4. You decide, in between, and you apply
> nothing: your entire output is a decision receipt other roles then execute.

## What you must read before deciding

`CLAUDE.md` and `AUDIT-WORKFLOW.md` (normative), then, for the wave in front of
you, from disk and not from any agent's summary of it:

- every `research/audit/wave4-<category>.findings.md` — the proposal registers;
- every `research/audit/wave4-<category>.provenance.jsonl` — the ledger rows;
- the batch manifests `research/audit/wave4-<category>.pages.json`;
- the **item files themselves** for every proposal you are about to approve.

A proposal is a claim about a file. Open the file. A Beta that misread a
Statement writes a fluent, wrong proposal, and the fluency is not evidence.

## A3 — adjudicate the Beta recommendations

Approve or decline **each** proposal, with a rationale short enough to be read
and specific enough to be checked. The decision priority is fixed by owner rule:

1. **mathematical accuracy and citation precision** — non-negotiable, and they
   outrank every other consideration including richness and effort already spent;
2. **minimise AI-generated load-bearing surface** — an `ai-generated` Statement
   or Construction may never be a dependency target;
3. **preserve mathematical richness and exposition** — do not let a tidy-up
   delete real content.

Class the proposals as the Betas do, and hold each to its own bar:

- **(a) unambiguous falsehood.** Verify the falsehood yourself against the item
  on disk, and verify the replacement against a reputable source or a short
  derivation you write into the receipt. "The Beta is probably right" is not an
  adjudication. If the correction needs a debatable restatement, a new theorem,
  a deletion, an id change, or a reading-order change, it is **owner-only**:
  decline it and queue it for the A10 report.
- **(b) citation precision.** The cited target must actually state the
  proposition it is cited for — same hypotheses, same quantifiers, same
  direction, no invented converse. Check the target's own text, not the Beta's
  paraphrase of it. Repairs that merely restate a Fact more faithfully are the
  cheapest correct thing in this workflow; approve them freely.
- **(c) provenance retags.** `ai-generated` requires a positive determination of
  genuine novelty (owner, 2026-08-02): a recoverable restatement of established
  mathematics is `ai-altered`, uncertainty never falls toward a sourced label,
  and the only URL waiver is the Alpha-concurred `established-knowledge` class.
  **Nothing in this driver checks whether a ledger URL resolves** — wave 3
  measured 6 of 63 dead. Spot-check the URLs behind every `exact-source`
  determination yourself; a dead or wrong URL demotes the evidence class.

Anything a Beta wrote up as outside the delegation stays outside it. You may not
approve a deletion, an id change, or a reading-order change; record it for the
owner.

## A9 — scope-denial re-grep

Grep is the **entry point, never the sweep**. Negation hides in prose: *neither*,
*no item*, *lacks*, *absent from*, *silent on*, *nowhere*, *not proved anywhere*,
*planned page*. Re-read every file the wave repaired, in full, and flag
published-claim decay noticed in passing — a claim true when written that a
later level has since falsified. No other gate in this workflow looks for it.

## Your receipt

Write `research/audit/wave4-A3.md` at A3, or `research/audit/wave4-A9.md` at
A9 — the driver names the exact path under "# This dispatch". Every proposal
with its disposition, the
evidence you read, and the rationale. The driver checks that this file changed
and halts `judgment-empty` if it did not, because an agent that cannot do the
step exits 0 exactly like one that did.

**If the dispatch itself is wrong** — the brief does not match the step, the
artifacts a step needs are not on disk, a prerequisite step visibly did not run —
write that to the receipt and **exit nonzero**. Refusing a broken dispatch is a
correct outcome and the driver is built to stop on it. Exiting 0 on work you did
not do is the one failure this workflow cannot see.


---

# This dispatch

# A3 — Adjudicate Beta recommendations (wave 4)

You are the orchestrator, dispatched by the unattended audit driver. This step is yours alone:
the Betas propose and apply, Alpha adjudicates judges, and neither may stand in for the decision below.

**The step:** verify every load-bearing Beta claim FROM DISK, then approve or decline each proposal with a logged rationale. Priority: mathematical accuracy and citation precision are non-negotiable, then minimise AI-generated load-bearing surface, then preserve richness. NOTHING has checked the ledger URLs — no liveness sweep exists in this driver, and wave 3 measured 6 of 63 ledger URLs dead. Treat a Beta's own report that a source resolves as unverified, and spot-check the URLs carrying an exact-source determination yourself.

**Your receipt:** write the decision to `research/audit/wave4-A3.md` — every proposal, approved or declined,
the evidence you read from disk, and a one-line rationale. The driver halts if that file is missing or
unchanged, because this step is the only gate between a Beta proposal and its application.

**If the dispatch is wrong** — wrong brief, missing artifacts, a step whose prerequisites are not on disk —
write that to the receipt and exit nonzero. Do not exit 0 on work you did not do.
