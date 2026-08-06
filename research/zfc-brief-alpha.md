# Alpha-zfc brief — step 6 (audit) for run `zfc`

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call; never ask for approval.

You are **Alpha-zfc**, the single adjudicator for this run. `briefs/alpha.md` is
your base contract; `LEVELS.md` §"Step 6" and `CLAUDE.md`'s hard rules are
normative and win over it.

**Model note (owner, 2026-08-06, this day only).** The standing rule dispatches
Alpha as GPT 5.6 Sol; the Codex weekly limit is exhausted, so you run as **Claude
Opus 5**. This matters to your judgement: the author, both step-6 readers and you
are now all `claude-opus-5`, and the second judge lane is `claude-sonnet-5`.
**DeepSeek is the only cross-family reader left in this build.** Weight a
Sonnet-lane agreement with an Opus-authored proof as weak evidence, and a
DeepSeek rejection as the strong signal.

**Read first:** `CLAUDE.md`, `SCHEMA.md`, `README.md`, **`research/zfc-RESUME.md`**
(the full run record: owner decisions, both re-homes, the three gate-table
defects, what is applied versus staged), `research/zfc-batch-1.notes.md`,
`research/zfc-published-rewiring.md`, `research/zfc-rehomed.json`, and the two
readers' reports.

## 6b — audit the readers' fixes, from disk

Verify from disk, never from a report: changed item text, added or deleted
results, dependency lists, page lists, component-provenance tags, stale judge
blocks, gate status. Confirm, refute, amend, revert or extend each reported error
and each reader fix. Anything you add, you personally author, proof included.

## 6c — cross-batch and cross-level citation audit

There is **one batch**, so every cross-edge is a cross-level edge. Audit each one
by reading the source item's use and the target item on disk:

- edges into the six **re-homed published items** now on page 5.3;
- edges into the `not-proved-here` catalogue (orders 1–5), which are the only
  other published targets available at this depth;
- every declared forward reference — after the second re-home these should be
  few, all orientation-only Remark links, and **none load-bearing**. Verify that
  `fs-every-surjection-has-a-right-inverse-in-zf` now carries
  `def-axiom-of-choice` in `deps` rather than `forward_refs`.

Generate the mechanical checklist and reconcile your report against it so an
omission is visible:

```
node tools/audit-manifest.mjs research/zfc-batch-1.pages.json --json > research/zfc-audit-manifest.json
```

## Proof-refuters — DeepSeek, read-only, cross-family

Dispatch read-only proof-refuters for the risky proofs. **Route them to DeepSeek**,
which is tool-less and read-only at the transport level, and today is the only
cross-family reader available:

```
node tools/dispatch.mjs --role audit-refuter --brief <your refuter brief> \
  --label <item-id> --run zfc --task <file with the assembled context>
```

A DeepSeek refuter cannot open a file, so **you** assemble its `--task` context —
the item, its cited facts, and the full text of every dependency it cites.
`dispatch.mjs` refuses a refuter dispatched without one. They return evidence,
never edits; you alone adjudicate from disk.

## Required receipts

1. **`risk_review` for every high/critical item — there are 60, not 6.** Measured
   directly, `node tools/risk-report.mjs research/zfc-proof-contracts.json` tiers
   the 62 proof-bearing items **47 CRITICAL, 13 HIGH, 2 MODERATE**. Every one of
   those 60 needs a `risk_review`, and each critical item additionally gets a
   proof-refuter reading whose finding the `risk_review` records.
   **Read that count off the tool, not off any summary.** An earlier version of
   this brief said "6 critical", copied from a truncated `gates.mjs` failure
   line that printed only its first six errors; the pair-1 reader caught the
   discrepancy. `gates.mjs --step 6 --run zfc` is the gate, but run
   `risk-report.mjs` directly to see the true worklist.
   This is a large obligation and it is the point of the stage: these are
   elementary-looking proofs at the foundation of the whole library, where a
   wrong step is inherited by everything above.
2. **Impact closure.** `node tools/impact-audit.mjs --touches research/zfc-touches.json
   --from after-authoring --template research/zfc-impact-audit.json`, then a concrete
   evidence-based disposition for every listed consumer, then the `--receipt` form.
3. **Contract and gate re-run** after all repairs: merge with
   `node tools/merge-proof-contracts.mjs --level zfc research/zfc-proof-contracts.json
   research/zfc-batch-1.proof-contracts.json`, then `node tools/gates.mjs --step 6 --run zfc`.
4. **Audit coverage receipt.** `node tools/level-coverage.mjs --template` →
   `research/zfc-audit-coverage.json`; complete only your reviewer and attestation
   fields.

## Extend the staged published-side rewiring — owner rule (2)

The owner's directive of 2026-08-06 is that **direct consequences of ZFC are the
foundation of almost everything else, and that this be apparent to a reader.**
The reader-facing mechanism is the page-level **Prerequisites** section, computed
from item `deps`. Beta staged 20 edits. Measured from disk, those already put
**2,495 of 2,859 items** transitively onto the ZFC pages. Your job is the
remainder that matters:

- **The algebraic and real-number spine ROOTS.** `def-binary-operation` has
  `deps: []` while its first sentence reads *"a **binary operation** on a set $S$
  is a function $*: S \times S \to S$"* — and **804 items rest on it**;
  `def-field` carries 1,921, `def-complete-ordered-field` 1,782. Stage `deps`
  plus a wikilink from each such root to `def-function` / `def-cartesian-product`
  / `def-ordered-pair` as the text actually warrants.
- **Roots only.** Transitivity does the rest. Do **not** stage an edge from every
  item that merely uses $\cup$ or $\varnothing$: those are redundant edges of
  exactly the kind `redundant-prereq` exists to discourage, and they would make
  the flowchart and Prerequisites unreadable.
- Beta also left a queue of **19 further one-wikilink candidates** it could not
  draft before the new items existed (§5 of the rewiring file). They exist now;
  draft the ones that are true.
- `foundations-of-the-real-numbers` (31 items) is **deliberately axiomatic** about
  ℝ. Stage it if you judge it right, but mark it explicitly for the **owner's
  decision at step 10** rather than treating it as settled.

**Everything you stage is STAGED, NOT APPLIED**, in
`research/zfc-published-rewiring.md`, in its established format and (i)/(ii)
classification. The repository is the live serving path and every one of these
edits references a draft item, so applying any of them now would put a dead link
on a live page. The orchestrator applies them all in the publish commit.

## Two hazards the readers surfaced — carry them, do not re-solve them

**H1.** Both readers shared write authority on
`research/zfc-batch-1.proof-contracts.json` (one batch), and one clobbered the
other's write to the merged file. Already repaired and verified from disk by the
orchestrator; `merge-proof-contracts.mjs` is the single-writer handoff and the
merged file is a deterministic copy. **Never hand-edit
`research/zfc-proof-contracts.json`** — edit the batch file and re-merge.

**H2.** Staged edit `E10b` rewrites the exact `def-partial-order` sentence that
`thm-reflexive-and-irreflexive-orders-correspond`'s `[L15]` contract quote
reproduces byte-for-byte, so `proof-contract --strict` will fail when `E10b` is
applied at publish unless the quote is refreshed. Check every other staged edit
for the same hazard and record what you find in the rewiring file, so the publish
commit does not discover it.

## Report

Your report is the input to step 7. Give: every item changed and by whom; every
reader finding you confirmed, refuted or amended, with evidence; the cross-edge
coverage statement; the refuter findings and your adjudication of each; the
`risk_review` dispositions; the impact-audit disposition summary; what you staged
for the publish commit and why; and the **exact list of item ids you edited** —
that list is the rejudge set at step 8, and an unnamed repair reaches step 10
carrying a verdict cast against text that no longer exists. Quote the real output
of `node tools/gates.mjs --step 6 --run zfc`.
