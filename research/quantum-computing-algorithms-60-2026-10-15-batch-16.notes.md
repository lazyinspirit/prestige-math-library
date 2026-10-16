# Batch 16 authoring notes

Run `quantum-computing-algorithms-60-2026-10-15`, batch 16, is the assigned
QC16 pair, **Stabilizer Circuits and Gottesman–Knill Simulation**. The
owner-authoring direction is controlling: it releases the old planning hold
for native draft authoring and explicitly forbids adopting coverage from the
concluded quantum-hopf-hecke run. The stale track-plan status about a pending
prerequisite repair is therefore not used. The QC16 scope row in
`research/plan-quantum-computing-track.md` and the matching
`research/plan-spec.json` A/B rows agree on IDs, titles, orders 2196/2197,
category, and all 13 `requires` pages; no page-scope conflict was found.

## Inventory and levels

The batch dependency-level input assigns batch 16 level 6 with prerequisite
batches 1, 2, 3, 4, 7, 9, and 15. The dispatched scheduling-input hash is
`5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; it is
preserved for owner reconciliation.

The A page contains 22 items (the 15 audited A contracts plus seven local
definitions/intermediate results); the B page contains the required worked
example. This is below the 100-item page cap. The extra A items supply the
projector/positive-branch/instrument proofs, stabilizer-label injectivity and
order, maximal-isotropic duality, the computational-basis tableau, and the
Pauli-specific finite adaptive circuit tree. The tree narrows the controller
interface to the deterministic finite history tree used by the assigned
claim and keeps the proof independent of an unrelated general instrument to
POVM uniqueness result.

Computed item levels, using current in-run suppliers and the audited run
interfaces, are:

- Level 8: `def-qc-pauli-measurement-branch-semantics`.
- Level 9: `lem-qc-pauli-measurement-projectors`,
  `lem-qc-stabilizer-maximal-isotropic-self-dual`.
- Level 10: `def-qc-stabilizer-subgroup`,
  `lem-qc-zero-probability-branch`,
  `lem-qc-pauli-measurement-positive-branch-is-density`,
  `lem-qc-pauli-measurement-defines-an-instrument`,
  `def-qc-adaptive-pauli-circuit-tree`.
- Level 11: `def-qc-stabilizer-state`,
  `lem-qc-stabilizer-subgroup-label-space-and-order`.
- Level 12: `lem-qc-stabilizer-average-projector`,
  `lem-qc-anticommuting-stabilizer-measurement-is-fair`,
  `def-qc-stabilizer-tableau`.
- Level 13: `thm-qc-stabilizer-projector-rank-and-code-dimension`,
  `lem-qc-tableau-clifford-update`, `lem-qc-tableau-deterministic-sign`,
  `lem-qc-computational-basis-stabilizer-tableau`.
- Levels 14–18: deterministic measurement (14), random generator update
  (15), tableau measurement theorem and simulator (16), exact simulation
  theorem (17), and the B example (18).

The new local tree is level 10 because its highest in-run supplier is the
level-9 projector lemma. The simulator and exact-simulation labels remain 16
and 17. The scoped read-only dependency calculation matched all 23 assigned
manifest labels.

## Mathematical and source decisions

The item proofs retain the phase-aware convention `P(k,x,z)=i^kX^xZ^z`,
binary labels `(x,z)`, the root-linear-first inner product, and the distinction
between an impossible zero branch and a normalized conditional state. The
projector-rank proof handles `n=0`, factors tensor traces by finite sums, and
no longer cites the stabilizer-state definition to prove that definition's
own existence clause. Random measurement row updates multiply other rows by
the **old** pivot before replacing it with the signed measured Pauli. The
CNOT symplectic-pairing proof displays cancellation of the equal control/target
cross terms. No axiom of choice is used; all bases, eigenbases and row
reductions are finite.

The six QC09 syntax, denotation, resource, and gate-embedding carriers were
present as draft bodies and inspected. The theorem now cites their actual
syntax, chronological unitary action and cost interfaces. The broader
`def-qc-classical-control-and-measurement-circuit` body was also inspected,
but is not a logical dependency of this pair: its general instrument-to-POVM
uniqueness route depends on the absent
`lem-qc-nondegenerate-trace-pairing` (used in
`thm-qc-instrument-induces-povm` step 4.1). That missing lemma proves
uniqueness of an induced effect family. QC16 uses the Pauli-specific
projective branch maps, their trace weights, and observed-history selection;
it makes no induced-POVM uniqueness claim. The local
`def-qc-adaptive-pauli-circuit-tree` records this narrower interface and the
non-consumed supplier is recorded in the cross-batch evidence.

The full texts read for this pair were de Wolf, Chapter 20 §§20.1–20.3;
Watrous, Lesson 14 §§14.1 and 14.3; and Aaronson–Gottesman §§II–III. The
coverage file records every harvested result and its disposition. The three
previously retrieved PDFs were reused with their original fetch histories;
there were no retrieval failures, alternate-source searches, drops, or new
`source_resolution` records. Six source occurrences passed
`source-fetch-check --stamp` with 0 new stamps. The optional randomized
classical-controller extension mentioned in de Wolf is explicitly
out-of-scope for this deterministic-history-tree interface; the assigned
contract did not include independent classical coins.

## Evidence and blockers

- `batch-16.pages.json`: 22 A items and one B example in dependency order;
  page metadata matches the active plan-spec row.
- `batch-16.coverage.json`: 2 pages, 38 source-harvest entries, 0 errors and
  0 warnings.
- `batch-16.proof-contracts.json`: exact current supplier excerpts, all 57
  numbered steps, inputs, boundary worksheets, and the one-qubit finite
  matrix check for all 23 items.
- `node tools/proof-layout.mjs` on all 23 assigned items: 57 steps, 0 defects.
- `node tools/proof-contract.mjs ... --strict`: 23/23 items checked, 0 errors,
  0 warnings.
- `node tools/source-fetch-check.mjs --coverage ... --stamp`: 6/6 source
  occurrences verified, 0 newly stamped.
- `node tools/item-dependency-levels.mjs check --run
  quantum-computing-algorithms-60-2026-10-15`: the global check reports 174
  errors from other batches, including empty QA inventories and off-batch
  level drift. None of the 23 assigned items is among its item-level errors;
  their current computed levels match.
- `node tools/batch-dependency-levels.mjs check --run
  quantum-computing-algorithms-60-2026-10-15` stops while parsing the unrelated
  carrier `items/lem-qc-knill-laflamme-orthogonal-error-basis.md`: its
  unquoted colon in the John Preskill source title makes the frontmatter
  invalid YAML. This is outside batch 16 ownership and was not edited. The
  owner-controlled scheduling input was not rewritten.

All batch 16 content remains draft. Readiness records report authoring
completion only; they do not certify independent acceptance or publication.
