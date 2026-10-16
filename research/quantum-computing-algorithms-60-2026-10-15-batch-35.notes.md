# Batch 35 authoring notes

Run `quantum-computing-algorithms-60-2026-10-15`; role beta, pair `grover-search-and-invariant-plane-rotations`.

## Controlling plan and inventory

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the owner direction, the assigned batch tasks, the current batch evidence, the dependency-level input, and the QA-11 planning materials before completing the pair. The owner direction controls stale task/design language.

The batch task says “design none found.” The audited QA-r3 section `research/quantum-algorithms-planning/sections/qa_r3.md`, `## QA11: Grover search and integer rotations`, is present and contains the controlling scope, conventions, caveats, and proof route. I followed that section. The corresponding `research/plan-spec.json` page entries are empty scaffolds; the audited QA-r3 inventory has 20 A items and 2 B examples. I added `lem-qa-11-bbht-stage-success-bound` as a local A-page supplier because the full finite-angle estimate is needed before proving BBHT termination and expected cost. Final inventory: 21 A items, 2 B items; A-page capacity remains below 100. No shared plan or published content was changed.

Batch 35 was dispatched at dependency level 13 with prerequisite batches 1, 2, 3, 7, 8, 9, 14, 25, and 26, scheduling input SHA-256 `1d2940820708c26676cfc8666d73af9c7f6636d229bd522a50179fa6a47abb36`.

| Item level | Items |
|---|---|
| 19 | `def-qa-11-marked-search-problem` |
| 20 | `alg-qa-11-grover-iterate`; `lem-qa-11-good-bad-decomposition` |
| 21 | `thm-qa-11-grover-iterate-query-cost`; `alg-qa-11-known-count-grover-search`; `lem-qa-11-grover-invariant-plane-rotation`; `alg-qa-11-known-count-random-iteration-search`; `alg-qa-11-bbht-unknown-count-search` |
| 22 | `thm-qa-11-exact-integer-iteration-formula`; `prop-qa-11-known-count-preprocessing-cost`; `prop-qa-11-known-count-random-selection-bit-cost`; `prop-qa-11-known-count-random-gate-accounting`; `thm-qa-11-known-count-random-query-cost` |
| 23 | `thm-qa-11-integer-iteration-regime`; `lem-qa-11-random-iteration-average`; `lem-qa-11-bbht-stage-success-bound`; the two B examples |
| 24 | `thm-qa-11-bbht-termination-and-success`; `thm-qa-11-known-count-success-bound`; `thm-qa-11-known-count-random-success` |
| 25 | `thm-qa-11-bbht-expected-query-cost`; `thm-qa-11-known-count-query-cost` |

These levels are recomputed from current in-run item suppliers. The randomized known-count query-cost theorem is level 22: its proof needs the level-21 algorithm and one-iterate query-cost theorem, not the success theorem. The original proposal’s levels for several external suppliers are stale relative to their current manifests—for example `def-qa-phase-query` is level 16 rather than 11, `thm-qa-bit-query-to-phase-query` level 18 rather than 13, `def-qa-quantum-query-complexity` level 18 rather than 12, `def-qa-classical-bit-cost` level 17 rather than 12, `thm-qc-reflection-unitary-involution` level 9 rather than 8, and `def-qc-circuit-cost-model` level 10 rather than 6. Their current bodies are present; I used their current manifest levels and recorded direct supplier interfaces in the cross-batch ledger.

## Mathematical changes and scope boundaries

The pair defines finite marked search and its coherent bit/phase oracle, proves the orthogonal marked/unmarked decomposition and the invariant-plane rotation, and derives the measured success probability after every integer iterate. The known-count exact maximizer uses a rational recurrence through index `2K+1`; the proof establishes its equality with the actual success list, gives the integer-search procedure for `K`, and accounts for its possible exponential classical preprocessing. The fixed nine-round known-count method and the BBHT unknown-count schedule keep oracle queries, gates, measurements, classical bit work, and verification separate.

I corrected the known-count guarantee so the lower bound applies only when `t>0`; the `t=0` branch returns `none` and does not claim a marked output. The exact recurrence now computes through `2K+1`, as required by the candidate `k=K`. The BBHT local stage lemma supplies the complete `3/8` trigonometric average bound; the termination proof gives the direct-sample/quantum-stage combination explicitly, and the expected-cost proof bounds arbitrary finite execution prefixes. The unknown-count algorithm is recorded as nonhalting when `t=0`; it makes no finite-time emptiness claim. No choice principle is used; all arguments use finite sets, explicit finite searches, and finite sums.

The B page gives the exact `N=4,t=1` rotation pattern and the `N=2,t=1` half-integral optimizer counterexample. It is a logical leaf.

## Sources and supplier evidence

The complete relevant passages were read in three full-text sources: de Wolf, *Quantum Computing: Lecture Notes*, §§7.1–7.2 (printed pp. 53–56 / PDF pp. 65–68); Childs, *Lecture Notes on Quantum Algorithms*, §§19.1–19.3 (printed pp. 87–89 / PDF pp. 95–98); and Brassard–Høyer–Mosca–Tapp, *Quantum Amplitude Amplification and Estimation*, §2, especially Theorem 2, QSearch/Theorem 3, and its expected-cost sketch (PDF pp. 6–9). The local cached texts, URLs, locators, successful fetch attempts, stamps, harvested results, and dispositions are recorded in `batch-35.coverage.json` and `batch-35.source-evidence.json`.

The source coverage has 2 page records and 28 harvested results, including explicit dispositions for source headings outside this pair. `source-fetch-check --stamp` reused the three prior successful full-text stamps for each page: 6/6 source/page records verified, no new stamp, no retrieval failure, and no `source_resolution` drop or escalation. Childs’s quantum-walk model and its two-query implementation are recorded as out of scope; the one-standard-bit-query result here comes from the actual bit-query phase-kickback supplier. De Wolf’s caveat that the phase oracle acts as a rank reflection only on the good/bad plane is preserved. BHMT’s unknown-count proof sketch is completed locally.

The cross-batch ledger records 10 required page interfaces and 158 direct item-dependency edges to 39 distinct external item suppliers. Supplier statements/definitions are quoted from the actual current carriers; proof-bearing suppliers are recorded as inspected, with draft or published status explicit. No draft supplier is represented as accepted or independently approved. A scoped consistency audit verified the listed edges, excerpts, paths, and hashes.

## Proof contracts, readiness, and checks

The proof contracts cover all 23 items, including exact supplier excerpts, every actual proof step and its inputs, boundary dispositions, and the declared no-extra-axiom status. The 18 proof-bearing items contain 66 numbered steps. The two B examples include exact finite calculations; no repository finite-smoke registry entry applies to Grover search.

All 23 Step 1 records are `ready` and pass current-hash checks. These are authoring-readiness records only.

| Scoped check | Result |
|---|---|
| `proof-layout.mjs` on the 23 assigned item files | Pass: 23 items, 66 steps, 0 defects. |
| `precheck.mts` on the 23 assigned item files | Pass: 18 proof-bearing items checked, 0 failures. |
| `rendercheck.mjs` on 23 items and 2 page files | Pass: 25 files, 0 errors, 0 warnings. |
| `proof-contract.mjs --strict` | Pass: 23/23 items, 0 errors, 0 warnings. |
| `content-policy.mjs` on the batch manifest | Pass: 23 scoped items, 0 errors, 0 warnings. |
| `depcheck.mjs` on the assigned 23-item scope | Pass: dependency closure of 1,123 items and 426 pages, 0 errors, 0 warnings. |
| `coverage-checklist.mjs --require-destination` | Pass: 2 pages, 28 harvested results, 0 errors, 0 warnings. |
| `source-fetch-check.mjs --stamp` | Pass: 6/6 source/page records verified, 0 new stamps. |
| Scoped current-manifest item-level recomputation | Pass: all 23 labels match; no pair-local dependency-level error or cycle. |
| Scoped cross-batch audit | Pass: 10 page edges and 158 item edges; 0 excerpt, hash, path, or affected-step mismatches. |
| Step 1 current-hash records | Pass: 23/23 ready records current. |

The run-wide item dependency command still reports 19 errors outside batch 35: six empty inventories in the three pairs `qubitization-and-optimal-hamiltonian-simulation`, `block-encoding-linear-systems-and-variable-time-amplification`, and `adiabatic-computation-and-circuit-equivalence`; seven stale labels in QA30; and six stale labels in QA34. None names a batch-35 item. `batch-dependency-levels.mjs check` reports `Stale batch dependency levels for quantum-computing-algorithms-60-2026-10-15` because the assigned manifest’s item dependencies/labels changed. That generated run-level scheduler artifact is owner-managed and was not edited; the owner should recompute it before the scheduler advances. No broad test suite was run.
