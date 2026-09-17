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
label: step3b-cleanup-contracts
covers: real-forms-and-real-semisimple-lie-algebras

# Gate cleanup — proof-contract citation errors and fwdcheck forward links

Run `phase-2-remaining-27`. Two repo-wide gates fail on items authored in this
run:

1. `proof-contract` — after
   `node tools/merge-proof-contracts.mjs --run phase-2-remaining-27`
   (writes `research/phase-2-remaining-27-proof-contracts.json`),
   `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict`
   reports 41 errors of the forms
   `citation-use-step-missing [<item>]: F<k> names a missing step number` and
   `citation-use-unmapped [<item>]: F<k> ...`.
2. `fwdcheck` — `node tools/fwdcheck.mjs --quiet` reports 73 errors of the form
   `[forward-undeclared] items/<id>.md: wikilink [[<target>]] points forward to
   <page> (#<order>); declare it in forward_refs`.

Do them in this order, because both may touch the same item file: finish and
verify the proof-contract pass before starting the fwdcheck pass.

## Proof-contract pass

- For each `citation-use-step-missing` error: the fact line cites a step number
  that does not exist in the proof (usually a renumbering after an edit). Read
  the item, find the step the fact actually supports, and correct the citation —
  either the bracket tag in the fact line or the step numbering — without
  changing any mathematical content. Adopt the canonical form
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` prints if it reports
  REPAIR.
- For each `citation-use-unmapped` error: the fact line's cited target cannot be
  matched to a step or an external item; make the citation explicit and correct.

## fwdcheck pass

- For each `forward-undeclared` error: the item links to an item whose page is
  later in reading order. Add the target to the item's frontmatter
  `forward_refs` list ONLY if the link is a real, load-bearing forward use;
  otherwise remove the wikilink or replace it with the correct earlier item.
  A forward reference that is not load-bearing prose prose must not be
  declared — fix the link instead.

## Verify

- Re-run both commands until they exit zero
  (`merge-proof-contracts` then `proof-contract --strict`; `fwdcheck --quiet`).
- Run `node tools/tsx-run.mjs tools/precheck.mts` and confirm 0 failing, and
  `node tools/depcheck.mjs` and confirm no new errors.

## Rules

- Edit only the item files named in the two error lists (their frontmatter
  `forward_refs` and their proof-step citation tags), plus the regenerated
  contract file. Do not touch manifests, coverage, scope decisions or the
  cross-batch-dependency files — sibling lanes own those.
- Mathematical integrity: a citation fix must keep the claim it supports true;
  when in doubt, cite the step that actually proves the claim.
- Report to `research/phase-2-remaining-27-gate-cleanup-contracts-report.md`
  with every item touched, the error before/after, and the final gate outputs.


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
