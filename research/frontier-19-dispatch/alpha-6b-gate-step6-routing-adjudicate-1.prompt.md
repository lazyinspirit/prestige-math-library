# Step 6 Alpha — run `frontier-19`

The task file assigns either group adjudication at 6b or lead closure at 6c.
Follow `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md`.

Never request permissions. Use noninteractive commands available in the sandbox;
record an indispensable blocked operation in the report. At 60% context, update
the namespaced report with completed checks, changed artifacts, open constraints,
and the exact next action, then continue.

## Scope and independence

The `covers` block names the initial 6b group batches. A 6b gate-repair dispatch
instead works only on item ids named by the failure and updates each owning
group's artifacts. At 6c, the lead may repair any in-flight item named by a
computed edge or failing gate. Do not rename an id on `main`.

The engine dispatches the independent readers and refuters. Do not spawn or
repeat them. Confirm that a reader did not audit content it authored. Verify all
reported findings from item and dependency files; a report is evidence, not a
verdict.

Do not judge or stamp. Step 7 owns the Terra judge. Delete
`verification.judge` after a material rewrite.

## Mathematical standard

Accuracy, valid inference, and exact dependency use are non-negotiable. A gap
between proof steps that a competent reader closes in 30 seconds is nonfatal;
the exception never covers a false Statement, Definition, title, witness,
computation, or citation.

For every routed finding or changed carrier:

1. Trace each inference to hypotheses, prior steps, exact citations, or an
   elementary derivation.
2. Open every cited Statement. Preserve domain, hypotheses, quantifiers,
   direction, and conclusion. Citation widening is a recurring fatal class:
   examples include dropping a lower bound or nonempty hypothesis, and changing
   an existential claim into a universal one.
3. Type-check the written expressions. Real escapes included reversed
   subscripts in a composite, restrictions without named embeddings, and a set
   whose alleged members were proper-class subobjects.
4. Compare the title and Statement with the proof. A repaired proof does not
   establish a false or overstrong claim.
5. Test zero and empty cases, `n=0`, `n=1`, degenerate parameters, endpoints,
   choice scope, and both directions of each iff. Past template rows concealed
   division by zero at `h=0` and a counterexample at `n=0`.
6. Check Definitions, Constructions, Facts, witnesses, computations, Remarks,
   and summaries as well as numbered proof steps.

Use web research when the mathematics or conventions are uncertain, preferring
primary or authoritative sources. Do not manufacture a finding to fill a quota.

## Repair and disposition

Fix each confirmed defect before closure. Rewrite part or all of a proof,
correct a false or overstrong Statement/Definition/title, or add intermediate
lemmas. If no honest repair closes, narrow or withdraw the claim. Never inflate
a dependency or change correct mathematics merely to silence a detector.

At 6b you may add an in-flight item, but leave a proposed deletion present for
the 6c lead to read and decide. At 6c the lead may delete after auditing the
actual bytes. Author any proof you add and update the manifest and coverage
row. The engine serializes 6b plan reconciliation after every group finishes;
do not run `splice-plan` at 6b. The sole 6c lead may run it after structural
edits. Close every affected consumer. Update proof contracts after proof,
citation, numbering, or boundary changes; complete each high/critical
`risk_review`. For each changed item run
`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`, then
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` and the task's gates.

Verify source-harvest faithfulness at the recorded locators. Checklist validity
does not prove mathematical completeness. A `literature-derived` or
`ai-altered` item needs a reader-visible URL in `sources.references`. An
`ai-generated` Statement cannot be a dependency. A generated claim that is
concretely doubtful needs a counterexample search, not confidence in its proof.
Do not backfill unrelated legacy provenance.

Published items are read-only unless `CLAUDE.md`'s published-dependency repair
rule applies. After confirming an unambiguous correction, claim the item before
editing with `node tools/published-repairs.mjs claim --run frontier-19 --id <id>
--group <g>`. The first group owns the edit; another group must not write the
same file and should extend its decision after the owner repair lands. Preserve
the reader finding's `pre_sha256`, repair and close every consumer, then append:

```json
{"kind":"repaired","id":"<published-id>","group":"<finding-group>","repair_owner_group":"<claim-owner>","found_via":"<consumer-id>","found_at_stage":"6a-read","step6_obligation":"reader:<batch>:<reader-sequence>","step6_defect_class":"<class>","pre_sha256":"<reader baseline>","post_sha256":"<current itemHashGuard>","defect":"what was false","correction_basis":"exact source-checked or elementary basis"}
```

Write the row to a namespaced temporary JSON file, then append it with
`node tools/published-repairs.mjs append --run frontier-19 --file <rows.json>`; never
edit the shared JSONL directly. Compute `post_sha256` with `itemHashGuard` from
`tools/item-hash.mjs`. The Step-6 gate binds the row to the
reader decision and Step 8 sends that published id to Terra. No
repairer self-certifies. If the correction is debatable or needs deletion, id
change, a new theorem, or published-page order changes, record an owner blocker
without editing.

## Exact records

Every routed obligation, and every later gate repair that confirms a concrete
item or page defect, needs an evidence-bearing machine decision and matching
closed defect-ledger row. A mechanical or unscoped gate failure is closed by the
gate and report; do not invent a defect row for it. Append ledger rows with
`node tools/defect-ledger.mjs append --file <rows.json>`; do not shell-inline
JSON or rewrite the append-only ledger. Record nonfatal and false-positive
dispositions too. Read existing repair results before retrying and extend them;
never redo completed analysis.

The active task defines the exact report, decision schema, and gate commands.
An unresolved defect is a named blocker, not a clean verdict.


---

# This dispatch

run: frontier-19
role: alpha
label: 6b-gate-step6-routing-adjudicate-1

# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR reader-findings-invalid: batch 1: report names batch frontier-19-batch-1
Live item ids: `thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p`, `thm-additive-hilberts-theorem-90`, `thm-artin-schreier-characterization-of-cyclic-degree-p-extensions`, `thm-kummer-correspondence`, `thm-kummer-pairing-is-perfect`, `thm-solvable-by-radicals-implies-a-solvable-galois-group`, `cor-localisation-commutes-with-finite-intersections-of-submodules`, `cor-minimal-generators-over-a-local-ring`, `cor-nakayama-generators-modulo-an-ideal`, `ex-local-test-for-an-isomorphism`, `ex-nakayama-finite-generation-is-essential`, `ex-nakayama-jacobson-hypothesis-is-essential`, `lem-localised-module-scalar-action-independent-of-representatives`, `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`, `thm-jacobson-radical-unit-characterisation`, `thm-local-criterion-for-exactness-of-modules`, `thm-local-criterion-for-zero-modules-and-maps`, `thm-localisation-of-modules-commutes-with-quotients-and-sums`, `thm-nakayama-lemma`, `thm-support-of-arbitrary-direct-sums`, `def-combinatorial-specification-and-order-raising-recursion`, `thm-order-raising-recursive-specifications-have-unique-solutions`, `cex-two-latin-squares-need-not-be-orthogonal`, `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six`, `ex-skolems-construction-gives-the-fano-plane`, `thm-fishers-inequality-for-two-designs`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
r matches the reader result
ERROR decision-not-applied: [thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-additive-hilberts-theorem-90] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-artin-schreier-characterization-of-cyclic-degree-p-extensions] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-kummer-correspondence] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-kummer-pairing-is-perfect] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-solvable-by-radicals-implies-a-solvable-galois-group] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-localisation-commutes-with-finite-intersections-of-submodules] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-minimal-generators-over-a-local-ring] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-nakayama-generators-modulo-an-ideal] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-local-test-for-an-isomorphism] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-nakayama-finite-generation-is-essential] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-nakayama-jacobson-hypothesis-is-essential] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-localised-module-scalar-action-independent-of-representatives] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-jacobson-radical-unit-characterisation] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-local-criterion-for-exactness-of-modules] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-local-criterion-for-zero-modules-and-maps] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-localisation-of-modules-commutes-with-quotients-and-sums] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-nakayama-lemma] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-support-of-arbitrary-direct-sums] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-combinatorial-specification-and-order-raising-recursion] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-order-raising-recursive-specifications-have-unique-solutions] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-two-latin-squares-need-not-be-orthogonal] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-skolems-construction-gives-the-fano-plane] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-fishers-inequality-for-two-designs] accepted_repair no longer matches the reader result
ERROR ledger-unowned: [template boundary rows across the frontier-19 batch contracts] frontier-19-contract-audit-001 has no 6b decision reference
ERROR ledger-unowned: [dropped k>=1 hypotheses in batch-1 group-action fact restatements] frontier-19-contract-audit-002 has no 6b decision reference
ERROR ledger-unowned: [missing Alpha risk_review rows for high/critical items in batches 2, 3, 4, 5, 6, and 10] frontier-19-contract-audit-003 has no 6b decision reference
ERROR ledger-unowned: [frontier-19 finite-smoke selection] frontier-19-contract-audit-004 has no 6b decision reference

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task is authoritative: it names the primary gate, live
item ids, exhausted ids, output, and advisory failures. Do not infer the task
from the latest event. Repair only live ids; never re-review an exhausted id.
Advisory failures are context, not work in this dispatch.

Reproduce the primary gate on the current tree and critically verify the
mathematics it names. A detector is evidence, not a verdict.

- Confirmed defect: rewrite the defective mathematics, update contracts,
  manifests, provenance, and stale stamps, then rerun the focused gate.
- False positive: preserve the mathematics and record the governing rule,
  detector behavior, ids, and exact evidence.
- Published dependency: follow `CLAUDE.md`'s repair and independent
  certification protocol; otherwise record an owner blocker.
- Unscoped mechanical failure: fix its repository cause and report it. Do not
  invent an item or ledger row.

At 6b, update each live item's owning group report and append one supplemental
decision for every concrete defect:

```json
{"obligation":"gate:<defect-id>","id":"<item-id>","route":"gate","verdict":"confirmed_fatal|confirmed_nonfatal|false_positive","defect_ids":["<defect-id>"],"evidence":"exact evidence"}
```

Write the matching closed ledger row with
`caught_at_stage:"6b-adjudicate"`. Keep exactly one initial touched, page,
reader, or refuter decision. If this gate repair changes that carrier, update
the existing decision's verdict and evidence to describe the final state; do
not append a duplicate. The engine refreshes composite carrier hashes before
rerunning the routing gate.

At 6c, update `frontier-19-alpha-6c.md`; rows use `caught_at_stage:"6c-cross"` and
do not enter a 6b decisions file. A concrete gate-only defect gets this 6c
machine verdict. Obtain the composite hash with `node tools/cross-group-edges.mjs
carrier --run frontier-19 --id <id>` after the repair:

```json
{"kind":"gate","gate":"<originating-gate>","id":"<item-id>","verdict":"confirmed_fatal|confirmed_nonfatal|false_positive","subject_sha256":"<current composite carrier hash>","defect_ids":["<defect-id>"],"note":"exact evidence"}
```

The repair also differs from the frozen post-6b carrier, so add the task's
`kind:"item"` or `kind:"page"` verdict with `verdict:"accepted"`, the same
current composite hash, `defect_ids:[]`, and a note that identifies this gate
verdict. The gate row owns the defect; the item/page row proves final currency.
Edge, forward-reference, and structural changes use the other 6c verdicts.
Every `6c-cross` ledger row must have exactly one owner.

Read prior retry artifacts and extend completed work. Never redo it. If the
gate remains red, report its exact current output and blocker.

