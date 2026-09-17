# Step 3b — scaffold auditor and item author

Own the A/B pair(s) listed in this dispatch. Audit their scaffolds, repair them
where necessary, then author every assigned item and A/B page. Preserve other
pairs in any shared batch files. Work one item
at a time in prerequisite order; checkpoint before moving on.

Read access covers the entire library and every pair in this frontier, including
pairs still being constructed. Read sibling manifests, items and pages whenever
needed to check prerequisites, conventions or cross-pair dependencies. Do not
edit another pair's files; route a needed change to its owner or escalate it.
Treat a sibling's in-progress draft as provisional and recheck its completed
claim before closing a dependent item.

## Read and decide

Read CLAUDE.md, SCHEMA.md, the assigned design sections, current manifests,
coverage, Step 3a decisions and relevant dependency statements and proofs.
If `research/phase-2-remaining-27-owner-authoring-direction.md` exists, read that explicit
owner direction and retain its unresolved obligations in your repair workload.
Be impartial and honest about what you understand. If unsure, search the web
and read complete relevant arguments from authoritative sources. Record exact
locators and unresolved qualifications. Do not equate a citation, structural
check or confidence statement with a proof.

Check hypotheses, quantifiers, implicit proof uses and well-definedness.
Prerequisites must be proved earlier or supplied locally. Add and fully author
necessary definitions and lemmas on assigned existing A pages, before their
consumers. Register them in manifests, coverage and contracts. Do not add pairs,
drop promised results, consume Recorded results or edit published content.
Escalate substantial unmet prerequisites, irrecoverable source uncertainty or
required cross-group changes to the owner, with exact IDs and proposed remedies.
Never mark an unresolved item complete or override an owner-held escalation.

Report every potentially defective published item to the owner in the dispatch
report: exact item/page IDs, evidence, confidence, required suppliers and repair
strategy. Distinguish suspicion from a confirmed defect. The serial reconciler
updates published-consumer-supplier-ledger.md; do not race another group on it.
Unrelated published debt does not block a sound new supplier.

State AC and its exact use, declare its dependency and propagate the assumption.
Keep choice-free arguments choice-free and preserve incompatible-axiom branches.

## Author and record

A scaffold strategy is work to do, not proof text. Derive the actual argument.
Examples need calculations; counterexamples need witnesses and failed
conclusions. Cite facts where used and verify their precise hypotheses.
Scripts may format completed mathematics, not generate generic proofs from
strategies. Keep every original item/page ID and promised claim.

Write item-specific proof contracts from completed arguments: each numbered
step's actual claim and inputs, exact cited excerpts and uses, and evidence for
empty, zero, one, degenerate, endpoint, choice and both iff cases. Mark a case
inapplicable only with an item-specific reason. Preserve accurate provenance;
generated statements must remain permitted leaf examples/corollaries.

Maintain each containing batch's cross-batch dependency input, preserving rows
for sibling pairs, under briefs/tasks/frontier-dependency-ledger.md. Shared plan/prose
amendments belong in the dispatch report for serial reconciliation in Step 4.
After local scaffold repairs/additions, refresh sufficient scope decisions for
the preserved pair; unresolved or owner-held scope still requires the owner.
Record item decisions after authoring, not merely after accepting a strategy.
An accepted scaffold or owner repair still needs authored content and contracts.
Refresh decisions invalidated by actual dependency changes; do not re-author
unchanged completed items. Never use --owner or add judge/audit stamps.

Items you create and fully author during this dispatch are a separate class:
do not send them through a Step 3 self-review or review-repair-author loop.
Register each in the manifest, coverage, contracts, and authored item/page as
usual. The engine compares the post-author inventory with its immutable
pre-author baseline and, after your successful dispatch, gives those additions
the current scope and item certifications needed to enter Step 4. This exception
does not waive content, dependency, source, rendering, or proof-contract gates.

For each containing batch, run explicit-path precheck and rendering, content-policy,
strict proof-contract checks, and validate-plan with research/plan-spec.json.
Report pre-splice plan mismatches for Step 4; do not hide actual unresolved
dependencies. Refresh current scope-decline decisions with evidence, never an
invented owner ruling. Preserve independent review records.

Use tools/step3-decisions.mjs record-item with accept or repaired only after
the complete item is written and checked, confidence 1, examined dependency
IDs, and a concrete evidence reason. Otherwise record escalate. The owner alone
resolves escalations. At handoff list completed IDs, checks actually
run, local suppliers added, published concerns and all open obligations.

After compaction reread the checkpoint, current item, relevant dependencies and
source passages. Summaries are navigation aids, not mathematical evidence.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-high
label: step3b-boundary-10-12
covers: stiefel-whitney-and-euler-classes-by-universal-constructions

# Boundary-row cleanup — batches 10, 11, 12

Run `phase-2-remaining-27`. The Step-3 gate `boundary-audit`
(`node tools/boundary-audit.mjs research/phase-2-remaining-27-proof-contracts.json
--fail-on-contradicted --fail-on-template --json`) fails: 122 template clusters
(2,426 rows) and 114 contradicted candidates across the run's contracts. A
`not_applicable` (or `checked`) row whose reason is reused across items is not a
disposition.

## Your scope

Contract files `research/phase-2-remaining-27-batch-<b>.proof-contracts.json` for
the batches listed above. Each file is `{version, scope, contracts}` where
`contracts` maps item id to `{citations, derivations, routine_steps,
boundaries}`; every boundary row is `{case, status, reason}` (some carry
`reviewed` / `template_review`).

## What to do

1. List your flagged rows:
   `node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-<b>.proof-contracts.json [more files] --json`
   → take the entries whose item id is in your batches, from both `templates`
   and `contradicted`.
2. For each flagged row, read the item file `items/<id>.md` (statement, facts,
   proof) and the axis named by `case`. Then:
   - If the disposition is TRUE, rewrite `reason` so it states the item-specific
     fact that excludes (or handles) that boundary — name the exact hypothesis,
     step number or definition that does the work. No sentence may be reused
     between items.
   - If the disposition is WRONG (the boundary does arise and the proof does not
     handle it), set `status` to the true value and record the gap; if the proof
     genuinely misses a case, stop and report that item — do not edit the proof.
   - If a row is genuinely correct but truly case-generic, add
     `template_review: {reviewed_by: "<your label>", reason: "<why this item's
     text makes the template disposition true>"}` with an item-specific reason.
3. Iterate until `node tools/boundary-audit.mjs <your batch contract files>
   --fail-on-contradicted --fail-on-template` exits zero for your batches.
4. Keep the JSON valid; do not reorder or delete other items' rows, citations,
   derivations or routine steps.

## Rules

- Edit only the `boundaries` rows of the contract files for your batches. Do not
  touch item files, manifests, coverage, the merged run-level contract file, or
  other batches' contract files (sibling agents own those).
- Mathematical integrity: `not_applicable` is a mathematical claim about the
  item. Read the proof; if the axis does arise, say so.
- Report to `research/phase-2-remaining-27-boundary-cleanup-10, 11, 12-report.md`
  with flagged rows fixed, rows whose status changed, items whose proofs need a
  real boundary case, and the final audit output for your batches.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Context continuity

Read complete relevant source passages in bounded chunks; truncated output is incomplete
evidence. Read current owned files and relevant sibling pair or library files;
avoid historical runs and dispatch logs.
After each item, checkpoint in the assigned notes: IDs, exact claim/conventions,
source locators, dependencies, decisions, checks, open gaps, and next action.
Context may compact mid-proof. Resume by rereading those notes, the current item,
dependency statements, and source passages. Never infer a missing hypothesis from
a summary. Preserve independent reviews; report unrecoverable evidence as a blocker.
Use only task-authorized notes; do not create transcripts.
