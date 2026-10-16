# Batch 13 authoring record — Clifford+T exact and approximate synthesis

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `clifford-t-exact-and-approximate-synthesis`  
Batch dependency level: **9**  
Scheduling input at dispatch: `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`

## Owner repair update — 2026-10-16

The initial authoring record below is retained as history. The current owner repair adds sixteen local suppliers (48 scoped items total): Euclidean/UFD/unit arithmetic, complete norm-equation decision, prime-norm solvability, reduced Hadamard normal forms, the SU(2) denominator/T-count relation, determinant-one reduction, scaled-grid growth, candidate norm residues, and conditional stopping bounds. The complete finite-search norm solver and unbounded oracle-mode Rz termination are now proved locally. The exact compiler includes a final scalar-preserving reduction; the exact-matrix correctness consumer was repaired and its approximation consumers were checked.

The local optimality proof corrects a parity error in KMM Appendix B: under the stated extension condition the formula is $t=h+1-p(\ell)-p(j)$, equivalently $h-1+p(a)+p(c)$ for the actual endpoint exponents. The H-count, T-count and coefficient-cost claims now have local proofs. Ross–Selinger oracle optimality and conditional candidate/gap bounds likewise have local derivations, with the probabilistic model and prime-success budget assumptions explicit. The source expectation notation is stated as the upper bound its proof establishes.

The efficient scaled-grid iterator and factorization-based polynomial expected norm solver are now locally proved and integrated as the actual fast modes. The exhaustive coefficient box and finite divisor search establish completeness only and remain separate alternatives. The calibrated capped-prime protocol uses the bit-work majorant P(k)=2^200(k+1)^20 and cap 2P(k), guarded prospective execution, and exact certificate-only acceptance. Its prime success probability is at least one half. The runtime consumer uses prefix second moments and Cauchy--Schwarz at the random stopping index; it does not assume iterator delay is independent of that index. All four original mathematical authoring escalations are repaired locally, subject to the explicit quantitative prime model and exact-real arithmetic/comparison contract. Native owner decisions and final input binding remain root responsibilities. No source citation, arbitrary-real bit encoding, or test result is substituted for these obligations. Root owns current-input hashing, readiness decisions, and gates. Changed-only proof-layout was run on each completed repair set; no tests were run.

The final focused probability repair removes an overclaim that independent prime indicators and fresh solver coins make actual successful calls independent: correlated numerical candidate data can correlate those successes. The capped lemma now conditions on all arithmetic data, bounds joint failure by the product of one minus half the prime indicator, and averages using only the modelled indicators’ independence. The stopping supplier is generalized to the resulting joint-failure bound, and its T-count/runtime consumer uses that bound throughout. The norm procedure’s acceptance and one-input success contracts are unchanged. The stochastic source hypothesis is explicitly a model before fixing numerical values; it is not claimed to follow by randomizing the order of a fixed integer stream.

## Scope and plan comparison

The controlling track scope at `research/plan-quantum-computing-track.md:87` is Clifford+T exact and approximate synthesis, algebraic number rings, ancillas, precision, and the limits of exact finite gates. The complete QC13 design in `research/quantum-computing-planning/reports/qc_r3.md` agrees on the exact gate matrices and dyadic eighth-cyclotomic ring, limits the proved ring characterization to one qubit, separates exact synthesis from approximate Rz synthesis and synthesis up to phase, distinguishes resource coordinates, and requires the scalar phase to be restored under control. These conventions and warnings are preserved.

The QC13 A/B entries in `research/plan-spec.json` agree with the assignment on IDs, order 2190/2191, category, titles, companion relation, and page-level prerequisites. Their `items` arrays are empty at the pre-authoring plan boundary; this is not a scope conflict. The current audited proposal inventory has 19 items (18 A, 1 B). The starting scaffold manifest had 24 (23 A, 1 B), with five local algebra prerequisites already supplied. I added eight further local prerequisite/correctness items, so the final inventory is **32 items (31 A, 1 B)**. All dependent claims remain on the A page; the page is below the 100-item cap.

The eight additions are `def-qc-cyclotomic-bullet-automorphism`, `lem-qc-dyadic-cyclotomic-conjugate-norm`, `lem-qc-clifford-t-determinant-phase`, `lem-qc-clifford-t-determinant-one-approximants`, `lem-qc-rz-epsilon-region-equivalence`, `lem-qc-rz-scaled-grid-norm-solution-exists`, `thm-qc-exact-single-qubit-synthesis-correct`, and `thm-qc-rz-approximation-correct-on-termination`.

## Dependencies and interface review

The final batch manifest lists all item dependencies and levels. Recomputed in-run item levels are 0–17; the batch page level remains 9. There are no item dependency cycles. The [cross-batch dependency record](quantum-computing-algorithms-60-2026-10-15-batch-13.cross-batch-dependencies.json) contains 15 page edges (the 14 A prerequisites plus the B-to-A companion edge) and 61 direct external item edges. Each edge records a current source body and whether it is a draft or published carrier; this is interface review, not approval.

The 14 page prerequisites are all present. Direct item interfaces were checked across QC07–QC12, including the exact Pauli and H/T matrices; control-first controlled-unitary access; QC09 syntax, ordered-wire embedding, circuit product convention and resource vector; QC10 clean ancillas and Toffoli; QC11 phase under control; and QC12 projective density. In particular, current QC09 carriers are present: `def-qc-circuit-syntax-and-register-order`, `lem-qc-local-gate-wire-embedding`, `def-qc-circuit-denotational-semantics`, and `def-qc-elementary-circuit-resources`. Older unresolved notes claiming those bodies were absent were stale; they were replaced after reading the current definitions and proofs. QC09 uses later chronological gates on the left and grants no implicit controlled-T operation.

I also inspected the transitive interfaces used by the exact circuit proofs: QC09 register, computational-basis orthonormality, big-endian encoding and bit-index bijection; tensor register/map and factor-permutation interfaces; tensor-map composition/adjoint; disjoint-layer commutation; and the finite-dimensional unitary-group corollary. For QC10, I checked `def-qc-cnot-and-control-target-order`, the Toffoli/Fredkin basis actions, and `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`. For QC12 projective density, I checked its Pauli-vector, irrational-rotation, and two-axis SU(2) suppliers. Their transitive sources include the number-field and algebraic-integer criterion, real-angle parametrization, exponential addition/kernel, integer-part, sine/cosine continuity, spectral, and operator-norm interfaces. The exact scalar lifts `iH` and `e^{-iπ/8}T` are used only to prove projective density; their phases are not discarded under control. The published cyclotomic, determinant, spectral, number-field, algebraic-integer, exponential, and operator-norm suppliers were checked at the interfaces used here.

## Mathematical work and remaining escalations

The local exact synthesis route now has the ring-entry closure, the unit-circle phase lemma, the finite descent/base certificate, the exact compiler factorization, and a separate proof that the returned chronological word implements the input matrix. The denominator-exponent well-definedness lemma no longer has a circular dependency on its own definition. The scaled-grid finiteness proof uses the corrected sign in the negative-exponent argument. The descent proof explicitly excludes a zero second coordinate above the threshold, handles zero coordinates in the base regime, and derives the norm divisibility valuation bound used by the modulo-8 checks.

The new determinant-one density proof lifts projective density to SU(2), then corrects the remaining scalar sign with the exact word `(XZ)^2=-I`. The Rz epsilon criterion is proved from the spectrum of the error unitary. Combining that criterion with determinant-one density proves that at least one grid candidate has a solvable norm equation. This resolves candidate existence; it does **not** prove a constructive norm-equation solver.

The exact gate-word algorithm now states the output chronology explicitly: emit `T^j`, then the stored base word, then the inverse reductions in reverse order, with each `T^k H` matrix factor emitted chronologically as `H` followed by `T^k`. The QC09 later-left product convention was checked against this order. The controlled-T obstruction retains its full up-to-scalar claim: a circuit scalar lies in D by entry closure, hence is an eighth root by the local unit-circle lemma. The clean-ancilla circuit is checked locally on all eight three-wire basis inputs and extended linearly to finite reference registers.

Four items are escalated, with their full statements preserved:

- `alg-qc-cyclotomic-scaled-grid-and-norm-solver`: the proof still needs Euclidean/UFD arguments in `Z[√2]` and `Z[ω]`, constructive prime splitting and factor recovery modulo 8, the unit/double-positivity square criterion, conjugate-prime allocation, and localization to an exact `t†t=ξ` solution. Proposed A-page suppliers for owner planning are recorded in the Step 1 decision.
- `alg-qc-rz-clifford-t-approximation`: depends on the unresolved norm solver; arbitrary real input comparisons have no implicit bit-time guarantee.
- `thm-qc-exact-clifford-t-synthesis-optimality`: the finite base table is checked, but a complete local Matsumoto–Amano normal-form/minimality proof and arithmetic-cost translation are not supplied.
- `thm-qc-rz-clifford-t-tcount`: Ross–Selinger’s factoring-oracle optimality, Hypothesis 8.3 expected-gap claim, and expected arithmetic-runtime claim are retained but lack complete local proofs.

The conditional theorem `thm-qc-rz-approximation-correct-on-termination` proves correctness on return and termination under its explicit exact-solver, factoring, and comparison assumptions. It does not assert those assumptions hold for the unresolved solver.

No source retrieval failed. Consequently no `source_resolution` failure record was needed. The full source history and per-result dispositions are in the [coverage record](quantum-computing-algorithms-60-2026-10-15-batch-13.coverage.json); no result was dropped.

## Sources and finite evidence

The A page has four independent full-text treatments: Kliuchnikov–Maslov–Mosca (KMM), Ross–Selinger, de Wolf’s full lecture notes, and Childs’s full lecture notes. KMM’s complete 23-page paper and Ross–Selinger’s complete 40-page paper were read for the exact ring, denominator/descent, grid/norm, count, and phase arguments. De Wolf’s full 239-page notes were inspected at §1.4 and Chapter 20.4 for the exact gate matrices and Clifford context. Childs’s retained 191-page notes were inspected at Chapter 3 §§3.1–3.4 (printed pp. 11–14); the local ring and count proofs do not rely on its outline as a substitute proof. The B page has KMM and de Wolf treatments.

`source-fetch-check --stamp` verified 6/6 A/B source occurrences; 0 were newly stamped and 0 were dropped. Existing genuine KMM/Ross/de Wolf stamps and the existing Childs full-PDF stamp were reused. The coverage file records locators, supported items, and every harvested result’s disposition.

The finite certificate was rerun successfully. Exact results: 4,096 modulo-8 residue vectors; 393,216 compatible residue pairs; 1,179,648 targets in each sign cross-check; 0 failures; all 256 normalized `sde=4` boundary columns descend; all 208 base columns are covered by exact BFS over 7,660 states, with maximum shortest word length 16; and all 8 Toffoli basis cases have the stated outputs and phase 1.

## Scoped checks and blockers

| Check | Result |
|---|---|
| `proof-contract.mjs ... --strict` | Pass: 32/32 items, 86 exact supplier citations, 0 errors and warnings. |
| `proof-layout.mjs` on all assigned item files | Pass: 32 items, 60 numbered steps, 0 defects. |
| `rendercheck.mjs` on all assigned items and both pages | Pass: 34 files, 0 errors and warnings. |
| `content-policy.mjs` on the batch manifest | Pass: 32 items, 0 errors and warnings. |
| `coverage-checklist.mjs --require-destination` | Pass: 2 pages, 40 harvested results, 0 errors and warnings. |
| `source-fetch-check.mjs --stamp` | Pass: 6/6 sources resolved, 0 documented drops, 0 newly stamped. |
| `item-dependency-levels.mjs check --run …` | Run-wide exit 1 from 52 empty scaffold inventories outside batch 13; no batch-13 level mismatch and no cycle. All 32 assigned levels were recomputed from the current in-run supplier graph. |
| `batch-dependency-levels.mjs check --run …` | Blocked before the input-hash check by malformed YAML outside this pair: `items/def-qc-css-code-from-nested-binary-codes.md`, file line 26 (frontmatter line 25), where the Preskill Chapter 7 source title is unquoted. Batch 13’s page-level `requires` edges are unchanged, so its page-DAG level remains 9. The assigned manifest content changed, so the shared scheduling digest needs owner recomputation after the external parse defect is fixed. No shared level file was written. |
| `proof-contract-coverage.mjs --run …` | Run-wide check blocked by missing frontier item `lem-qa-hadamard-f2-kernel`, outside this pair. The scoped strict proof-contract check passes. |
| `step1-decisions.mjs record` | 32 records written with current direct dependencies and `owner=false`: 28 `ready`, 4 `escalated`. No `--owner` flag was used. The four escalations are the items listed above. |
| `step1-decisions.mjs check --run …` | Run-wide check blocked by malformed YAML outside this pair in `items/thm-qa-19-measurement-distribution.md`, file line 30 (frontmatter line 29), at its unquoted de Wolf source title. The 32 assigned record hashes were individually checked: 28 ready records are current, and the four escalations remain intact. |

All added content remains draft. These authoring/readiness records are not independent mathematical approval or publication permission. No published item, shared plan, autopilot state, or owner verdict was edited.
