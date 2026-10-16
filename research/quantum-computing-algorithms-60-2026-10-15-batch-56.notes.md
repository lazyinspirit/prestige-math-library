# Batch 56 authoring and handoff notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `quantum-complexity-classes-and-oracle-separations`  
Role: beta; batch 56

## Scope, plan, and inventory

The assigned pair has 13 A-page items and 2 B-page items, below the 100-item cap. No pair-specific design file or design section was found; there was therefore no design section governing this pair. The controlling owner direction was followed. The `plan-spec.json` row agrees with the assigned page IDs, order 2276/2277, category, companion, and `requires` lists. Its empty pre-authoring `items` arrays are planning metadata, not an alternative inventory; the current audited QA export supplied the inventory.

The A-page order and manifest inventory follow computed item levels:

| Level | Items |
|---:|---|
| 0 | `def-qa-32-promise-bpp`; `lem-qa-32-indexed-to-full-list-conversion` |
| 6 | `lem-qa-32-simon-function-register-instrument` |
| 13 | `def-qa-32-eqp-promise-class`; `def-qa-32-zqp-promise-class`; `lem-qa-32-exact-clifford-t-boolean-circuit-embedding` |
| 14 | `rem-qa-32-bqp-pp-pspace-proof-obligations`; `thm-qa-32-eqp-zqp-bqp-containments`; `thm-qa-32-promise-classical-containments` |
| 15 | `def-qa-32-simon-decision-oracle-promise` |
| 16 | `alg-qa-32-simon-query-rank-test`; `thm-qa-32-simon-classical-randomized-query-lower-bound` |
| 17 | `thm-qa-32-simon-sample-rank-correctness` |
| 18 | B-page `cex-qa-32-oracle-separation-is-not-gate-separation`; `ex-qa-32-simon-small-instance` |

The scheduled batch level remains 11, with prerequisite batches 1, 2, 4, 10, 13, and 14. The dispatch scheduling input is `3f55de225893a2f57b439920686c78adb37adeb62e118e7c7689e17ae715b09f`. The page and batch manifests, carriers, and cross-batch input were synchronized to the current dependencies; shared plans and scheduling artifacts were left unchanged.

## Mathematical repairs and local results

The pair preserves the fixed QC14 gate alphabet, full-list uniformity, exact promise conventions, and the query-versus-explicit-input cost distinction.

- The inherited Simon `n=2` example bound `3/4^4` is false. The exact four-sample failure probability is `46/256 = 23/128`; the valid union bound is `3/16`. The B-page example records both values and the complete inclusion-exclusion count.
- The inherited BQP-to-PP note misstated the distance from the `1/2` threshold. The `2/3` and `1/3` thresholds are each at distance `1/6` from `1/2`; equivalently, `2p-1` has margin at least `1/3`. The PP/PSPACE statements remain explicit proof obligations for the exact `Q(ζ8)` gate entries, not locally proved containments.
- The classical Simon lower-bound proof uses the completion count `(N-k+1)!/(N/2)!`; the earlier denominator `(N/2-k+1)!` was incorrect. The proof now states `k≤N/2`, computes the posterior mask count, couples adaptive transcripts, and derives the `1/64` collision bound for `T≤√N/8`.
- The explicit truth-table counterexample uses a Turing-machine-safe `O(L^3)` bound for table scans. It does not assume random-access table lookups or mistake a query lower bound for an explicit-input gate-time lower bound.
- The exact Boolean-to-QC14 compiler is a new local lemma. It proves the CCZ phase identity on all Boolean triples, constructs a clean-scratch CCZ and exact Toffoli using only `H,T,T†,CNOT`, replaces `X` by `HT^4H`, and gives an explicit polynomial-time full-list compiler and gate bound. It does not treat Toffoli as an allowed QC14 gate.
- The Simon procedure uses an in-pair two-register computational-basis instrument lemma. It proves complete positivity under every finite ancilla amplification, trace preservation, branch probabilities, and positive-probability conditional states. Thus the Simon proof does not rely on the generic projective-measurement outcome theorem noted below.
- `lem-qa-32-indexed-to-full-list-conversion` has no dependency on the polynomial-time-to-logspace-uniform-circuit theorem; that supplier is not used by the conversion. The containment results that need it keep it as a direct prerequisite.

The proof arguments use finite sets, finite matrix identities, and finite probability spaces only. No choice axiom or other additional axiom is used. The contracts record the source excerpts, each current proof step and its inputs, boundary cases, and the exact finite checks for the CCZ identity and `n=2` rank count.

## Required page and supplier review

The 12 required page interfaces were checked against the pair. The relevant quantum-complexity, promise, uniformity, circuit-cost, coherent-oracle, exact-gate, finite-register, trace, instrument, and finite-probability definitions and proofs were read in their current carriers. The other required computability pages supply context; this pair does not invoke SAT/TQBF completeness, polynomial-hierarchy collapse, or a relativizing proof as a premise. The counting page supplies the GapP/PP sign-test context for the proof-obligation remark, and the polynomial-space definition supplies its PSPACE convention.

Current circuit syntax, circuit denotation, and elementary resource carriers are present and were checked, together with their actual proofs and exact gate/register conventions. Older batch-14 handoff text describing these suppliers as absent is stale; no batch-14 files were edited. The current `thm-qc-output-acceptance-law-normalizes` body also supplies its actual normalization proof. Direct supplier checks are interface verification only and do not constitute independent approval.

One separate upstream defect remains for owner attention: `items/thm-qc-projective-measurement-outcome-law.md`, step 1.1, establishes a nonnegative quadratic form for `PρP` but does not establish self-adjointness before using the definition of a nonnegative operator. `items/thm-qc-projective-conditional-state.md`, step 1.1, repeats the gap. Repair these two existing suppliers on `measurements-povms-and-instruments` by showing `(PρP)*=PρP` from `P*=P`, `ρ*=ρ`, and adjoint product reversal, with the required density/projection hypotheses declared. The batch-56 local computational-basis instrument proof does not depend on either theorem, so this gap is not a missing supplier for the authored claims.

The published counting page has a minor editorial mismatch: `library/computability-theory/counting-complexity-and-sharpp.md` has `status: published` while its body calls it a “draft page.” No published content was changed.

## Sources and source-resolution history

The A-page coverage uses two independent primary treatments: de Wolf’s full lecture notes and Watrous’s full quantum-complexity survey; it also records the full lecture-note/book treatments used for exact reversible compilation, measurement instruments, and query-model context. The complete cited passages were inspected in fetched full-text PDFs. The local source ledger records earlier sequential full-document readings for de Wolf, Watrous, and Watrous’s book; the batch coverage distinguishes those prior reading records from this batch’s section inspections.

Exact URLs, locators, harvested results and their dispositions, reading records, recovery attempts, and prior fetch stamps are in `research/quantum-computing-algorithms-60-2026-10-15-batch-56.coverage.json`. Seven source entries are fetch-verified. `source-fetch-check --stamp` reused all seven stamps, added zero stamps, and recorded zero drops. No retrieval failed, so no recovery search or `source_resolution` entry was needed.

## Cross-batch dependencies and readiness

`research/quantum-computing-algorithms-60-2026-10-15-batch-56.cross-batch-dependencies.json` contains 55 current cross-batch item-interface reviews and 7 required-page interface reviews. Every listed supplier body was checked against the consumer’s actual use; these are interface reviews, not supplier acceptance. There is no absent supplier among the pair’s current direct dependencies. Individual Step 1 decisions are recorded separately and bind to the exact direct dependency arrays and current item hashes.

All 15 Step 1 records are `ready` with `owner: false`; a selected current-hash check reports 15/15 closed and no stale records. The run-wide `step1-decisions check` cannot complete because `items/def-qa-rational-phase-reconstruction.md:14–15` has a malformed YAML `justified_by: []` followed by an indented sequence entry. This unrelated carrier was not edited.

## Scoped checks and external blockers

- `precheck`: 9 proof-bearing items passed; 0 failures.
- `proof-layout`: 15 assigned items, 42 numbered steps, 0 defects.
- `proof-contract --strict`: 15/15 items, 0 errors and 0 warnings.
- `rendercheck`: 17 assigned item/page files, 0 errors and 0 warnings.
- `content-policy`: 15 items, 0 errors and 0 warnings.
- `depcheck`: focused on the 15 assigned item IDs; 0 errors and 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 29 harvested results, 0 errors and 0 warnings.
- `source-fetch-check --stamp`: 7/7 verified, 0 newly stamped, 0 drops.
- `item-dependency-levels`: all 15 assigned levels match the current graph and there is no assigned cycle. At the final check the run-wide tool reports 36 errors outside batch 56: empty inventories for `simon-algorithm-and-finite-field-recovery`, `simon-algorithm-and-finite-field-recovery-examples`, `amplitude-amplification`, `amplitude-amplification-examples`, `amplitude-estimation-and-counting`, `amplitude-estimation-and-counting-examples`, `quantum-query-lower-bounds-and-search-optimality`, `quantum-query-lower-bounds-and-search-optimality-examples`, `lcu-oblivious-amplitude-amplification-and-taylor-simulation`, `lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples`, `qubitization-and-optimal-hamiltonian-simulation`, `qubitization-and-optimal-hamiltonian-simulation-examples`, `hhl-phase-estimation-linear-systems`, `hhl-phase-estimation-linear-systems-examples`, `block-encoding-linear-systems-and-variable-time-amplification`, `block-encoding-linear-systems-and-variable-time-amplification-examples`, `quantum-spectral-estimation-and-matrix-functions`, `quantum-spectral-estimation-and-matrix-functions-examples`, `quantum-sampling-expectation-and-monte-carlo`, `quantum-sampling-expectation-and-monte-carlo-examples`, `quantum-optimization-sdp-and-variational-algorithms`, `quantum-optimization-sdp-and-variational-algorithms-examples`, `period-hidden-shift-and-number-theoretic-algorithms`, `period-hidden-shift-and-number-theoretic-algorithms-examples`, `qma-verification-and-local-hamiltonian`, `qma-verification-and-local-hamiltonian-examples`, `adiabatic-computation-and-circuit-equivalence`, and `adiabatic-computation-and-circuit-equivalence-examples`; and stale labels for `alg-qa-shor-factoring` (15, computed 19), `thm-qa-order-to-factor-correctness` (16, 20), `thm-qa-order-to-factor-success` (17, 21), `thm-qa-shor-factoring-success` (18, 22), `thm-qa-shor-factoring-cost` (16, 20), `ex-qa-shor-factorization-of-fifteen` (17, 21), `ex-qa-shor-factorization-retry-branches` (16, 20), and `cex-qa-18-query-cost-is-not-gate-cost` (12, 14).
- The current `batch-dependency-levels check` and read-only `frontier-dependency-ledger.collect` stop first on malformed YAML in `items/def-qa-rational-phase-reconstruction.md:15–16`, where an indented sequence follows `justified_by: []`. An earlier check also surfaced unquoted source titles in nine QA34 carriers, first `items/def-qa-34-heralded-verification-contract.md:23`; the same title issue appears in `items/alg-qa-34-error-budget-allocation.md:22`, `items/thm-qa-34-classical-output-writing-lower-bound.md:19`, `items/cex-qa-34-state-output-not-amplitude-list.md:20`, `items/thm-qa-34-error-budget-allocation-correctness.md:24`, `items/thm-qa-34-tang-recommendation-sampler.md:30`, `items/def-qa-34-output-and-cost-types.md:25`, `items/thm-qa-34-adaptive-failure-union-bound.md:23`, and `items/rem-qa-34-dequantization-scope.md:22`. These other-pair carriers were not edited.
- An earlier `frontier-dependency-ledger refresh` invocation stopped on an empty `deps:` field in `items/def-qa-shor-cost-accounting.md:9`; that field is now `deps: []`. The current rational-phase YAML error still prevents refreshing the shared aggregate. The batch-56 cross-batch input remains complete as listed above.

These owner-level aggregation blockers are outside the assigned pair. No engine state, verdict, shared plan, published item, or other pair’s carrier was edited.

The read-only autopilot status recomputation reports the run as `running`, stage `1-scaffold` at 32/60, with nothing in flight. It retains owner-level blockers: `plan() threw — Invalid pair undefined`; an invalid construction item identity `def-qc-effective-unitary-matrix-input` in batch 12; a malformed Chapter 7 source title in an unrelated handoff; and owner repair/recertification required through `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. The batch-56 artifact is not listed among missing batch artifacts. The current `git log --all --grep=quantum-computing-algorithms-60-2026-10-15` has no run-completion commit, consistent with the active state; no RESUME-file claim was used. No `.autopilot/` state or control file was changed.
