# Batch 12 authoring and validation notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `approximate-universality-and-solovay-kitaev`  
Role: beta, batch 12  
Page dependency level: 8; prerequisite batches: 7, 8, 11.

## Inventory and dependency order

The audited planning export contains 12 A-page items and one B-page example.
`plan-spec.json` still has `items: []` for QC12 as its pre-authoring
placeholder. The assigned authoring inventory has 16 A items and one B item.
The four added A-page intermediates have complete local proofs: fixed-dimension
interval arithmetic, irrational-rotation density, Pauli-vector multiplication,
and two-axis SU(2) generation. The A page contains 16 items, below the
100-item cap. The page identity, A/B pairing, and all 14 page-level `requires`
match the track plan and `plan-spec.json`.

Items were ordered by their computed dependency levels:

| Level | Items |
|---:|---|
| 0 | `def-qc-effective-unitary-matrix-input`, `def-qc-inverse-closed-dense-su2-gate-set`, `lem-qc-fixed-dimension-interval-arithmetic`, `lem-qc-irrational-rotation-dense-on-circle`, `lem-qc-su2-near-identity-logarithm` |
| 1 | `lem-qc-compact-su2-base-net` |
| 4 | `lem-qc-pauli-vector-multiplication` |
| 5 | `lem-qc-su2-balanced-commutator`, `lem-qc-two-axis-su2-generation` |
| 6 | `lem-qc-clifford-t-projective-density`, `lem-qc-commutator-error-cancellation` |
| 7 | `alg-qc-solovay-kitaev-unitary-compiler` |
| 8 | `thm-qc-solovay-kitaev-error-and-resource-bound` |
| 9 | `thm-qc-solovay-kitaev-bit-complexity`, `thm-qc-fixed-arity-unitary-error-budget`, `ex-qc-solovay-kitaev-error-budget` |
| 10 | `thm-qc-controlled-phase-approximation` |

The item dependency arrays and levels in both batch manifests match the item
frontmatter. No batch-12 dependency cycle was found. The direct dependency from
the finite-precision theorem to the exact-real resource theorem is included
because its statement explicitly distinguishes the two bounds; this places
the bit-complexity theorem at level 9.

## Plan reconciliation and unresolved upstream claim

The paragraph at line 223 of `research/plan-quantum-computing-track.md` still
says the prerequisite hold is open. The binding
`research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md`
explicitly releases that hold and records the actual source-integration PASS
(120 pages, 896 items, 1,835 root prerequisites, zero errors and warnings).
That release authorizes draft authoring; it provides no mathematical
acceptance, review, publication, or gate waiver.

The QC11 carrier
`thm-qc-exact-arbitrary-unitary-qsd-upper-bound` is present, but its own
Step 2.2 marks the exact diagonal-extraction identity as unresolved `[A1]`.
Step 2.3 says the improved 23/48 CNOT count remains escalated; the recurrence
through Step 2.1 establishes only the weaker 13/24 count. Batch 12 proves the
fixed-arity error budget for a supplied exact factorization and does not use
the improved QSD count. A uniform application to every `U(2^k)` remains an
owner-level page prerequisite until QC11 supplies a complete exact
factorization result with the needed hypotheses. This exact gap and actual
supplier excerpt are recorded in
[`quantum-computing-algorithms-60-2026-10-15-batch-12-cross-batch-dependencies.json`](quantum-computing-algorithms-60-2026-10-15-batch-12-cross-batch-dependencies.json).

The dispatch names scheduling input hash
`5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. The
batch item and cross-batch manifests retain
`9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`, while
the run-wide dependency-level artifact has input hash
`e8b2b1a6437c84045bb9cd37f40383cd3eba27fa0ff5d50ac3fe783facf2b5b2`.
These identifiers were preserved for owner reconciliation rather than
silently rewritten.

## Cross-batch sources

The direct supplier bodies were inspected for the exact Pauli matrices, exact
`H`/`T` phases, controlled-phase convention, and global-phase-under-control
identity. Their current carriers are present and remain draft; the excerpts,
required hypotheses, affected claims, and status are recorded in the
cross-batch dependency file. The transitive dependency closure had 1,015 item
carriers and no absent files. Direct bodies and the transitive sources needed
for the cited matrix, gate, control, norm, exponential, and spectral
conventions were inspected. This does not treat any draft supplier as accepted.

## Sources and proof contracts

The coverage record contains six A-page sources and two B-page sources. The
relevant full papers and lecture notes were read; retrieval inspection plus
`source-fetch-check --stamp` verified 8/8 sources, with no new stamps, drops,
or retrieval failures. The Dawson–Nielsen article is recorded as not charging
finite-precision arithmetic. The van Melkebeek–Watson finite-precision result
is marked inline because its implementation differs from the local
Cauchy-name/interval schedule. The Shende–Bullock–Markov QSD material is
marked inline beside the actual QC11 proof gap.

The proof-contract file covers all 14 proof-bearing items, all 53 numbered
steps, and 63 exact supplier citations. Each contract includes the eight
boundary dispositions. No named finite-smoke registry check applies to these
general analytic claims; finite matrix products and the three-bit parity
identity are evaluated directly in the proofs. The contracts declare no
nonstandard axioms or axiom-of-choice use.

## Scoped checks

| Check | Result |
|---|---|
| `proof-layout` on all 17 assigned item files | Pass: 53 proof steps, 0 defects |
| Normative `precheck.mts` on all 17 assigned items | Pass: 14 proofs checked, 0 failures; the two definitions and algorithm are not applicable |
| Focused `depcheck` on all 17 items and both pages | Pass: 0 errors, 0 warnings; 1,071-item and 362-page dependency closures checked |
| `rendercheck` on all 17 assigned item files | Pass: 0 errors, 0 warnings |
| Strict proof contracts | Pass: 14/14 checked, 0 errors, 0 warnings |
| Source fetch check | Pass: 8/8 verified, 0 drops |
| Frontmatter-to-manifest dependency/level consistency | Pass: all 17 items in both manifests match |
| Item-specific readiness hash check | Pass: 17/17 current records closed and ready |

The required run-wide `item-dependency-levels.mjs check --run` exits 1 because
the checker is run-wide and reports 52 errors in other batches (including
empty scaffold inventories); it reports no batch-12 item errors. Full
`step1-decisions.mjs check --run` is also blocked by malformed YAML in the
unassigned carrier `items/thm-qa-19-measurement-distribution.md`: the
unquoted source title at line 30 contains a colon, and the parser reports a
nested mapping at line 29, column 14. Batch-12 readiness was
validated item by item; no other pair file was edited.

## Active run state

The recomputed autopilot status remains `running`, with 19/60 pairs covered
at `1-scaffold` and nothing in flight. The run still records owner/global
blockers: `Invalid pair undefined`; the invalid construction-scheduling
identity `def-qc-effective-unitary-matrix-input` in batch 12; an item-handoff
YAML compact-mapping failure in another pair's source title; and the
owner-directed repair/recertification hold for stage-stalemate unit 29 in
`quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. Engine state
and those owner records were left untouched.

All 17 batch-12 Step 1 decisions are current `ready` records. They record
authoring completeness only and do not constitute independent approval.
