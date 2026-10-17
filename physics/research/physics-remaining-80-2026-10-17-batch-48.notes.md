# Batch 48 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `qsm-dt-channels` / `qsm-dt-channels-examples`  
Role: beta; batch: 48.

## Scope and plan reconciliation

- Read `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction, the assigned task, the current plan and batch evidence, and the complete assigned design section in `research/plan-quantum-statistical-mechanics-track.md` and its channel/generator source module. The owner direction controls over stale task/design details.
- Current task and `research/plan-spec.json` require A page `qsm-dt-response`; B requires A. The older worker design reservation also names `qsm-states-ensembles` as a page prerequisite. The plan controls page-level `requires`; the current manifest records only the specified edges. Actual item dependencies on batch-36 matrix and entropy statements remain explicit. The removed design-only page edge is recorded in the cross-batch array.
- The research paired inventory's old item levels (values such as 11 and 21) are stale research estimates. Recomputed current-run item levels for this scope are 0–5. The stored batch schedule is current at page level: batch 48 level 4, requiring batch 47. Item-level prerequisites include exact batch-36 and batch-47 carriers, as recorded in `dependency-inputs.json` and the cross-batch edge array.
- Added `lem-qsm-dt-finite-trace-pairing-cyclicity` as a new mathematical A-page result because the Choi/Kraus and duality calculations require both square matrix-unit nondegeneracy and rectangular trace cyclicity. It proves both by finite entry sums and matrix-unit tests; consumers do not assume an unstated rectangular trace rule. Final placement is 11 A items and 4 B counterexamples, below the 100-item page cap.
- The assigned design's finite scope is retained: finite-dimensional CPTP maps; unnormalized Choi matrix in input-reference ⊗ output order; trace preservation distinct from unitality; fixed-dimension trace dual/closure/contraction; finite GKSL sufficiency and necessity; time-dependent continuous finite propagators; finite pinching entropy only; product-prepared reduced-unitary channels; and explicit limits on bath/Markov and universal entropy claims.

## Dependency inventory and levels

The current-run dependency graph was computed over the batch-48 items and their current-run prerequisite closure. The scoped closure contains 23 items on 4 pages and is acyclic; all 15 assigned labels match their computed levels. Item levels set author order and are not a wait barrier.

| Item | Direct batch-48 suppliers | Level |
|---|---|---:|
| `lem-qsm-dt-finite-trace-pairing-cyclicity` | — | 0 |
| `def-qsm-dt-channel-definition` | — | 1 |
| `def-qsm-dt-gksl-definition` | channel definition | 2 |
| `thm-qsm-dt-choi-kraus` | channel definition; trace helper | 2 |
| `thm-qsm-dt-channel-duality` | Choi–Kraus; channel definition; trace helper | 3 |
| `thm-qsm-dt-reduced-unitary` | Choi–Kraus; channel definition | 3 |
| `cex-qsm-dt-damping-entropy` | channel definition; Choi–Kraus | 3 |
| `cex-qsm-dt-transpose-not-cp` | channel definition; Choi–Kraus | 3 |
| `thm-qsm-dt-gksl-sufficient` | channel definition; GKSL definition; Choi–Kraus; duality | 4 |
| `thm-qsm-dt-trace-contraction` | channel definition; duality | 4 |
| `cex-qsm-dt-correlated-marginal` | reduced-unitary | 4 |
| `cex-qsm-dt-finite-bath-memory` | reduced-unitary | 4 |
| `thm-qsm-dt-gksl-necessary` | channel/GKSL definitions; Choi–Kraus; sufficiency | 5 |
| `thm-qsm-dt-pinching-entropy` | channel definition; Choi–Kraus | 5 |
| `thm-qsm-dt-time-dependent-gksl` | channel/GKSL definitions; duality; sufficiency | 5 |

Direct dependencies on batch-36 and batch-47 items, imported math suppliers, exact statement excerpts, and inspected status are itemized per consumer in `research/physics-remaining-80-2026-10-17-batch-48.dependency-inputs.json`. The cross-batch JSON is an array with one row per direct cross-batch edge. Batch-36 matrix/entropy carriers and batch-47 finite unitarity have current authoring-ready records; those records are readiness evidence, not independent proof acceptance. The pinching entropy argument remains explicitly conditional on the finite-mixture concavity supplier's exact interface and full Choice assumption.

## Source reading and harvest

Five complete full-text sources were retrieved and inspected. Locators, each harvested result and its disposition, and fetch stamps are in `research/physics-remaining-80-2026-10-17-batch-48.coverage.json`; local raw PDFs are under `research/physics-remaining-80-2026-10-17-batch-48-sources/raw/`.

| Source | Inspected coverage | Local SHA-256 prefix |
|---|---|---|
| [John Watrous, *The Theory of Quantum Information*, Chapter 2](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf) | Complete 66-page chapter; §2.1.3, §§2.2.1–2.2.2 through Theorem 2.25, including full Theorem 2.22 proof, Kraus adjoint calculation, and reduction/partial-trace arguments. | `11ae8fb0b90f82be` |
| [John Watrous, Chapter 3](https://cs.uwaterloo.ca/~watrous/TQI/TQI.3.pdf) | Complete 77-page chapter; §3.3, Theorem 3.39 and Corollary 3.40 proofs for induced trace-norm contraction. | `e91c1a2112676c0f` |
| [John Watrous, Chapter 4](https://cs.uwaterloo.ca/~watrous/TQI/TQI.4.pdf) | Complete 49-page chapter; Definition 4.4, Example 4.5, Proposition 4.6 proof, and Example 4.7 on pinching. | `7b133dbdc01c459e` |
| [John Watrous, Chapter 5](https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf) | Complete 60-page chapter; Proposition 5.22 and Theorem 5.23 with proofs for Klein inequality and finite entropy concavity. | `cb6145939a5b337a` |
| [Lin Lin and Nathan Wiebe, *Quantum Algorithms for Scientific Computation*](https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf) | Complete 337-page text; Chapter 3 §§3.2 and 3.6.1, including channel definitions, transpose witness, Kraus/Choi forms, reductions, and contraction; Chapter 21 §21.1 on finite Lindblad sufficiency and the necessity proof sketch. | `f95c9fabadcde09b` |

Both Watrous's book and the independent full QASC lecture notes support the A-page scope. Source conventions were reconciled explicitly: Watrous places output before input in its Choi matrix, while this pair fixes input-reference ⊗ output; the swap unitary preserves positivity. Watrous uses base-2 entropy normalization; the local entropy uses the natural logarithm and $k_B$. QASC suppresses $\hbar$; local generator statements retain SI units. The QASC amplitude-damping basis direction is reversed from the local convention. Its finite-GKSL necessity proof is only a sketch, so the local proof is complete rather than delegated to that citation.

`source-fetch-check --stamp` verified 5/5 sources, with 0 newly stamped and 5/5 resolved; there were no retrieval failures, retries, or source drops, so no source-resolution entry was required. The coverage checklist recorded 46 harvested results with explicit dispositions and one `coverage-low-yield` warning (11/46 scaffolded). The remaining results have item-specific inline or reasoned out-of-scope dispositions in the coverage file; no source claim was silently omitted.

## Proof and model scope

- The Choi convention is fixed in every affected statement and proof. Rectangular trace cycling is proved locally rather than inferred from a square-only statement. The finite matrix-unit pairing is bilinear and inserts no adjoint.
- The semigroup necessity proof derives the norm generator from continuity using finite-dimensional completeness, the vector-valued fundamental theorem of calculus, and a Neumann-series argument; it then proves Choi conditional positivity and the finite (d^2-1) jump bound. The time-dependent proof constructs and bounds the Volterra series, proves uniqueness, and passes from frozen-generator channel products to the continuous propagator by a norm limit.
- The pinching entropy result uses full AC exactly where the finite entropy-composition supplier requires it. It does not claim entropy monotonicity for arbitrary channels. The damping counterexample proves that limitation with an exact finite density matrix and a strict KL inequality.
- The reduced-unitary theorem assumes a product preparation. The correlated-state counterexample does not extend that channel claim to arbitrary joint preparations. The fixed two-qubit bath example exhibits a coherence revival, so it does not assert every finite bath fails to be Markovian; it only refutes a universal semigroup claim.
- The examples are exact mathematical/model calculations. No measurements, apparatus outcomes, statistical inference, bath limit, or experimental precision are asserted.

## Final checks and readiness

Final checks were run after the last item, page, manifest, and contract edits.

- Manifest inventory is 11 A items plus 4 B counterexamples. `manifest-deps` reports 15 items, 0 missing dependency arrays, and 0 errors. `content-policy` reports 15 scoped items, 0 errors, and 0 warnings.
- Strict proof contracts pass for 15/15 items with 0 errors and 0 warnings. Each proof-bearing entry has exact direct supplier-section excerpts, numbered-step claims and inputs, all eight standard boundary dispositions, and the applicable finite analytical checks.
- Precheck covers 13 proof-bearing items with 0 failures; the two definitions are not applicable. `proof-layout` reports 15 items, 44 steps, and 0 defects. `rendercheck` passes on all 15 items and both pages, including actual KaTeX and YAML parsing.
- Scoped `depcheck` passes for all 15 items; its prerequisite-cycle closure covers 1,636 items and 513 pages. Scoped `fwdcheck` passes for all 15; its dependency/forward closure covers 1,618 items and 520 pages.
- The scoped item-level calculation uses the official `dependencyLevels` helper over the assigned items and their current-run prerequisite closure: 23 items on 4 pages, no cycles, and all 15 declared levels match their computed values (levels 0–5). The stored page schedule is level 4 and requires batch 47.
- The cross-batch dependency array has 27 item rows, one verified `qsm-dt-response` page row, and the documented removed design-only `qsm-states-ensembles` page row. The 27 item rows exactly match the 27 direct external item edges; there are no missing or extra edges. `dependency-inputs.json` covers all 15 assigned items.
- Coverage checklist reports 46 harvested results, 0 errors, and 1 `coverage-low-yield` warning because 11/46 results were scaffolded. Every remaining result has an explicit inline or reasoned out-of-scope disposition; the warning asks the next Alpha review to confirm those declines. `source-fetch-check --stamp` verifies 5/5 sources, 0 newly stamped, and 5/5 resolved.
- The final `research/physics-remaining-80-2026-10-17-author-check-48.json` has `ok: true`; its precheck, rendercheck, content-policy, and strict proof-contract gates all exit 0.
- All 15 assigned Step 1 decisions are `ready`, hash-current, and `owner:false`, with every direct dependency recorded. There are no missing or escalated prerequisites. These rows record authoring readiness only and do not confer independent proof approval.
