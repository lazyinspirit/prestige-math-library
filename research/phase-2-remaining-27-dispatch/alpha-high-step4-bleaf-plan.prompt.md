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
label: step4-bleaf-plan
covers: all

# Step 4 cleanup — validate-plan `b-leaf` and `prefix` findings

Run `phase-2-remaining-27`. `node tools/validate-plan.mjs research/plan-spec.json`
exits 1 with two hard classes (`redundant-prereq` lines are pre-existing
warnings and must be left alone):

- **51 `b-leaf`**: an in-run item depends on a PUBLISHED item whose home is an
  examples (B) page. Most are on the real-forms pages (20 + 6 + 2 + 1) and the
  moment-maps pages (5 + 2 + 1 + 1), plus root-systems (3), AHSS examples (2)
  and others. B pages must be leaves.
- **4 `prefix`**: manifest rows declare `kind: remark` for
  `lem-sigma-cellular-base-yields-a-compatible-metric`,
  `lem-solovay-almost-disjoint-extension-under-ma`,
  `lem-ladder-separation-from-hyp` and
  `def-dodd-jensen-covering-and-square-package`, whose ids require `lem-`/`def-`.

## Fixing the prefix findings

Read each item file's frontmatter `kind` and set the manifest row's `kind` to
match it (they are lemmas/definitions, not remarks), then re-splice.

## Fixing the b-leaf findings

For each finding, read the consumer item and the published supplier. Then apply
ONE of these, in order of preference:

1. **Replace** the dependency with an earlier A-page item that states the same
   fact (the A page of the supplier's own pair is the natural home: e.g. a
   theorem the example merely illustrates). Update the consumer's frontmatter
   `deps` and every proof citation naming the old supplier.
2. **Move** the supplier's home: remove it from its examples page's list in
   `library/<category>/<page>-examples.md` and add it to the companion A page's
   `examples:` list — a MOVE, never a multi-home (a second home makes the splice
   fail with `dup-id`, which is why the earlier re-homing attempt cannot simply
   be repeated). This changes a published page's inventory; the ledger must be
   updated in the same pass only if the item is defective, so normally no
   ledger entry is needed.
3. Never delete the supplier's content and never weaken a consumer's statement.

After each batch of fixes: `node tools/splice-plan.mjs --run phase-2-remaining-27
--batch <b> --update --accept-requires`, then
`node tools/splice-plan.mjs --run phase-2-remaining-27 --all`, then
`node tools/validate-plan.mjs research/plan-spec.json`. Iterate until it exits 0
with zero `b-leaf`, `prefix`, `dup-id`, `undeclared-prereq` and cycle findings.
Also run `node tools/depcheck.mjs` (must stay OK), `node tools/tsx-run.mjs
tools/precheck.mts` for every item you edit, and `node tools/manifest-deps.mjs`
on every manifest you touch.

## Rules

- Edit only: the consumer items' frontmatter `deps` and citation tags, the
  supplier items' home lists in `library/**` page files, the matching manifest
  rows, and (for prefix) the manifest `kind` fields. Do not touch other items,
  coverage, contracts, scope decisions or reports.
- Report to `research/phase-2-remaining-27-bleaf-plan-report.md`: per finding,
  consumer, supplier, the option applied, the file(s) changed, and the final
  validate-plan/depcheck outputs.


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
