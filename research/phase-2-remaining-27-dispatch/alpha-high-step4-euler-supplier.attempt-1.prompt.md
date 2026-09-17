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
label: step4-euler-supplier
covers: stiefel-whitney-and-euler-classes-by-universal-constructions

# Focused authoring — local π₃(SO(3)) supplier for the Euler-class counterexample

Run `phase-2-remaining-27`. The last failing `validate-plan` finding is:

`page stiefel-whitney-and-euler-classes-by-universal-constructions-examples has
an item depending on lie-subgroups-actions-and-homogeneous-spaces-examples`

The consumer is `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`
and its dependency is `ex-su-two-to-so-three-as-a-covering-homomorphism`, which
lives on a page LATER in reading order (494) than the consumer's page (366.038).
A forward page edge cannot be spliced. The earlier escalation for this item
offered exactly this remedy: author the needed fact locally on the consumer's
own A page, so the counterexample depends on an earlier same-page item.

## Item to author

`lem-pi-three-so-three-generated-by-the-quaternion-double-cover` — write it to
`items/lem-pi-three-so-three-generated-by-the-quaternion-double-cover.md`, a
lemma homed on the A page `stiefel-whitney-and-euler-classes-by-universal-constructions`.

Statement to prove:

- The conjugation action of the unit quaternions gives a two-fold covering
  homomorphism ρ: Sp(1) ≅ S³ → SO(3) whose kernel is {±1};
- covering maps induce isomorphisms on π_n for n ≥ 2, so ρ_*: π₃(S³) → π₃(SO(3))
  is an isomorphism;
- π₃(S³) ≅ Z by the degree theorem, hence π₃(SO(3)) ≅ Z and it is generated by
  the class [ρ];
- consequently the clutching construction over the equatorial S³ produces a
  nontrivial oriented rank-three vector bundle on S⁴, which is the input the
  counterexample uses.

## Dependencies

Use only items already earlier in reading order, in particular the library's
covering-space and homotopy machinery
(`def-covering-homomorphism-of-lie-groups`, `thm-homotopy-lifting-for-covering-maps`,
`thm-covering-space-lifting-criterion`, `def-quaternions`,
`def-higher-homotopy-group-by-based-cubes`,
`thm-based-sphere-maps-are-classified-by-geometric-degree`,
`thm-oriented-clutching-classifies-oriented-bundles-over-spheres` — check each
exists and is earlier). List every load-bearing prerequisite in the frontmatter
`deps` and cite it at the step that uses it. If the π_n-covering isomorphism is
not stated anywhere in the library, prove it inside this item from the lifting
theorems (that is the standard argument: lift homotopies/constructions through
the covering).

## Then fix the consumer

- In `items/cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section.md`
  replace the dependency on `ex-su-two-to-so-three-as-a-covering-homomorphism`
  with the new item, in both the frontmatter `deps` and every proof citation
  (Facts line and bracket tags) that names the old supplier.
- Add the new item's manifest row to
  `research/phase-2-remaining-27-batch-10.pages.json` on the A page
  `stiefel-whitney-and-euler-classes-by-universal-constructions`, positioned
  before the counterexample's pair page's items that use it, and add a coverage
  `contents` row for it in
  `research/phase-2-remaining-27-batch-10.coverage.json` with the exact source
  locator you read.
- Keep the counterexample's statement unchanged.

## Verify

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-pi-three-so-three-generated-by-the-quaternion-double-cover.md`
  and `node tools/rendercheck.mjs` on both files.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-10.pages.json`
  and `node tools/depcheck.mjs` (no new errors).
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch 10 --update`,
  then `node tools/validate-plan.mjs research/plan-spec.json` — the
  `undeclared-prereq` count must reach zero.
- Leave decision records to the orchestrator (the items carry owner records);
  report what you changed.

## Rule

Mathematical integrity: a complete local proof, or an exact escalation naming
the missing step. Do not weaken the counterexample or the lemma.

Report to `research/phase-2-remaining-27-euler-supplier-report.md`.


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
