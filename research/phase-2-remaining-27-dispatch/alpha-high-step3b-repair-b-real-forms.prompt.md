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
label: step3b-repair-b-real-forms
covers: real-forms-and-real-semisimple-lie-algebras

# Step 3b repair B — classification block, `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13. Four escalated items of the pair were
reopened by the owner after the declared Knapp coverage was extended (Prop 6.72
pp. 393–394; Thm 6.88; Thm 6.96 with Lemmas 6.97–6.98 pp. 409–412; the §10 case
analysis pp. 413–421; Chapter II Theorems 2.108/2.111) and the local supplier
`lem-chevalley-basis-and-real-structure-constants` was added to the manifest.
Repair exactly the four items below; touch nothing else.

## Items

1. `items/thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md`
   — the missing converse (Satake injectivity: reconstruction of the maximally
   compact painting from the maximally split datum) is Knapp VI Prop 6.72
   (pp. 393–394) as used in §11 (pp. 422–425), now inside the declared coverage.
2. `items/thm-classification-of-real-semisimple-lie-algebras.md` — fill both
   gaps: (1) enumeration/completeness from Knapp Thm 6.96 with Lemmas 6.97–6.98
   (pp. 409–412) and the §10 Weyl-group case analysis (pp. 413–421, Figures
   6.1–6.3); (2) realization of every abstract Vogan diagram from Knapp Thm 6.88
   with the normalized root-vector system of Thm 6.6/Lemma 6.4
   (`lem-chevalley-basis-and-real-structure-constants`, now in the manifest).
3. `items/prop-classical-real-forms-of-the-classical-complex-lie-algebras.md` —
   the exhaustion obligation: every real form of a classical complex simple Lie
   algebra appears in the displayed list, via item 2's classification.
4. `items/cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md`
   — the conjugacy half. The item has been moved after the symmetric-space items
   `def-riemannian-symmetric-pair-of-noncompact-type`,
   `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`
   and
   `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`,
   so the local displacement-function route is available; use it, or Knapp's
   Historical Notes p. 766 pointer together with Borel 1998, pp. 128–133, if you
   extend the coverage row for that source. Keep the manifest statement.

## Rules

- Complete proofs at the dispatch standard; keep each manifest statement.
- Update each item's frontmatter `deps`; do not edit the batch manifest — the
  orchestrator re-syncs it after both repair lanes finish.
- Run `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (adopt the
  canonical form if it reports REPAIR) and `node tools/rendercheck.mjs` per item.
- Record each decision: `node tools/step3-decisions.mjs record-item --run
  phase-2-remaining-27 --item <id> --decision repaired --confidence 1
  --dependencies '<json>' --reason '<evidence>'`.
- Report to `research/phase-2-remaining-27-real-forms-repair-b-report.md` with
  locators read, changes, checks, and any exact gap.
- Mathematical integrity: never claim a step you have not proved; escalate with
  the exact locator instead.


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
