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
label: step4-bleaf-cleanup
covers: real-forms-and-real-semisimple-lie-algebras

# Gate cleanup — `validate-plan` b-leaf dependencies

Run `phase-2-remaining-27`, stage `4-splice`. `node tools/validate-plan.mjs
research/plan-spec.json` fails with **51 `[b-leaf]` errors**: an item depends on
a *published* item whose first home in the tool's library walk is an examples
(B) page, and B pages must be leaves (`tools/validate-plan.mjs`, the
`published` b-leaf block). Multi-homing does NOT help: `homePageOf` keeps the
first listing the walk meets, and for every A/B companion pair the
`…-examples.md` file sorts before the A file, so an item listed on both is
B-homed as far as this gate is concerned.

## The list

Regenerate it with:

```
node tools/validate-plan.mjs research/plan-spec.json 2>&1 | grep '\[b-leaf\]'
```

The consumer pages are: `real-forms-and-real-semisimple-lie-algebras-examples`
(28), `moment-maps-and-symplectic-reduction-examples` (8),
`generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples`
(6), `root-systems-dynkin-diagrams-and-cartan-killing-classification` (3),
`real-forms-and-real-semisimple-lie-algebras` (3),
`moment-maps-and-symplectic-reduction` (2),
`highest-weight-theory-for-complex-semisimple-lie-algebras-examples` (1).

## What to do, per dependency

1. Read the consumer item and the step that uses the supplier.
2. Replace the dependency with an item that is homed **only on an A page**
   (a definition/lemma/theorem/proposition; check its listing in `library/**`
   and prefer one whose A page precedes the consumer's page). Update the
   frontmatter `deps` and every proof citation (Facts line and bracket tags)
   that names the old supplier.
3. If no A-homed item states the needed fact, **inline a short local derivation
   of it in the consumer's proof** (this is what the run did for the Euler-class
   counterexample) and drop the dep. Do not weaken the claim.
4. Do not depend on any item that is listed on an examples page — not even one
   that also has an A home.
5. Keep every touched manifest row in
   `research/phase-2-remaining-27-batch-<b>.pages.json` equal to the item's
   `deps`.

## Verify

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each edited item
  (adopt the canonical form if it reports REPAIR) and `node tools/rendercheck.mjs`.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch <b> --update`
  for the batches you touched, then
  `node tools/splice-plan.mjs --run phase-2-remaining-27 --all`, then
  `node tools/validate-plan.mjs research/plan-spec.json` — the `[b-leaf]` count
  must be zero (the tool's other classes are already clean).
- `node tools/depcheck.mjs` must stay `OK`.
- Leave decision records to the orchestrator; report every item touched.

## Rules

- Edit only the consumer items named by the 51 findings, their manifest rows,
  and (if you must add a local lemma) the consumer's own page inventory.
  Do not touch coverage, scope decisions, boundary contract rows, or other pages.
- Mathematical integrity: a replacement supplies exactly what the proof uses;
  an inlined derivation is complete; never delete a claim to make the gate pass.

Report to `research/phase-2-remaining-27-bleaf-cleanup-report.md`.


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
