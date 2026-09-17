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
label: step3b-slice-6-chevalley
covers: real-forms-and-real-semisimple-lie-algebras

# Step 3b focused authoring — Chevalley basis supplier for the real-forms pair

Run `phase-2-remaining-27`, pair `real-forms-and-real-semisimple-lie-algebras`
(batch 13). Four items of this pair are escalated on one missing input, so this
dispatch authors that input as a new local supplier on the pair's A page. Read
`research/phase-2-remaining-27-real-forms-recovery-direction.md` first; it is
binding. Work only on the item below.

## Item to author

`lem-chevalley-basis-and-real-structure-constants` — write it to
`items/lem-chevalley-basis-and-real-structure-constants.md`.

Statement to prove (check it against the source and refine the wording if the
source states it more precisely, but do not weaken it):

- Let 𝔤 be a finite-dimensional complex semisimple Lie algebra, 𝔥 a Cartan
  subalgebra, R the root system, and fix a root-vector basis e_α ∈ 𝔤_α. Then the
  root vectors can be rescaled (e_α ↦ c_α e_α over the roots) so that
  [e_α, e_{−α}] = h_α is the coroot of α and the structure constants defined by
  [e_α, e_β] = N_{αβ} e_{α+β} satisfy N_{αβ} = −N_{−α,−β} for all roots α, β;
  with α, β, α+β roots one has N_{αβ} = ±(p+1) for the α-string through β, so
  all structure constants are integers, and the resulting real span of
  {h_α, e_α} is a real Lie algebra whose complexification is 𝔤 (a Chevalley
  basis / split real form).

Source: Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter
VI §1, Theorem 6.6 with Lemma 6.4 (printed pp. 351–353), and the root-space
machinery of Chapter II; Etingof, *Lie Groups and Lie Algebras*, Lectures 39–40
(https://math.mit.edu/~etingof/lnlg.pdf). Fetch and read the source; cite the
exact theorem/lemma numbers and printed pages in the item's frontmatter sources.

## Rules

- Use the library's existing root-space suppliers as dependencies where the
  argument needs them (for example
  `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`,
  `prop-root-space-brackets-add-their-roots`,
  `prop-brackets-of-root-spaces`,
  `prop-killing-form-pairs-only-opposite-root-spaces`,
  `cor-cartan-integers-are-integral`); the frontmatter `deps` must list every
  load-bearing prerequisite and nothing else.
- Do NOT edit the batch manifest, coverage, proof contracts, notes, the pair
  report, or any other item. The orchestrator adds the manifest row and wires
  the four escalated consumers to this item.
- The item must pass `node tools/tsx-run.mjs tools/precheck.mts
  items/lem-chevalley-basis-and-real-structure-constants.md` (adopt the canonical
  form it prints if it reports REPAIR) and `node tools/rendercheck.mjs`.
- Record `node tools/step3-decisions.mjs record-item --run phase-2-remaining-27
  --item lem-chevalley-basis-and-real-structure-constants --decision repaired
  --confidence 1 --dependencies '<json>' --reason '<evidence>'` once done.
- Write your report to
  `research/phase-2-remaining-27-real-forms-slice-6-report.md`: the exact source
  locators read, the normalization argument, the checks run, and any gap.
- Mathematical integrity: a complete proof of the normalization and the
  integrality of the structure constants, or an exact escalation naming the
  missing step. Never fabricate.


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
