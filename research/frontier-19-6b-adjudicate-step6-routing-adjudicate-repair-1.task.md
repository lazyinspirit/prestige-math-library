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

At 6c, update `<run>-alpha-6c.md`; rows use `caught_at_stage:"6c-cross"` and
do not enter a 6b decisions file. A concrete gate-only defect gets this 6c
machine verdict. Obtain the composite hash with `node tools/cross-group-edges.mjs
carrier --run <run> --id <id>` after the repair:

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

