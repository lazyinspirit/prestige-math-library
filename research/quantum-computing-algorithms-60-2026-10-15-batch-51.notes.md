# Batch 51 authoring notes — Block-Encoding Linear Systems and Variable-Time Amplification

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: beta; assigned batch 51  
Assigned scheduling input: level 14; prerequisite batches 1, 8, 9, 10, 14, 46, 48, 50; SHA-256 `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`.

## Scope, controlling directions, and conflicts

The assignment says “design: none found.” The current audited QA design does exist at `research/quantum-algorithms-planning/sections/qa_r5.md`, §QA27, and its OP1A/OP6 procedures in `research/quantum-algorithms-planning/operational-contracts.md` are binding under the run’s owner-authoring direction. I followed those current directions; the “none found” task statement is stale. The QA27 scope and cautions are retained: normalized gap $\delta=\gamma/\alpha$, the fixed-time QSVT success penalty, support-only spectral promise, explicit state-preparation and access costs, CKS sparse-access requirements, and no universal variable-time speedup claim.

The audited QA page inventory and `plan-spec.json` agree on the A/B identities, order, category, and nine planned A-page prerequisites. The current item graph has two further supplier pages not reached through those nine prerequisites: `amplitude-estimation-and-counting` (QA13 `RelProb`) and `qubitization-and-optimal-hamiltonian-simulation` (QA25 simulator/block access). The authored A page and manifest therefore declare those two additional edges. The other operational pages initially considered—state preparation, amplitude amplification, Hamiltonian simulation, and QSP—are already in the nine-page transitive prerequisite closure. This is the minimal closure supported by actual item dependencies; `plan-spec.json` and shared QA planning were left unchanged. Owner reconciliation is needed to synchronize the shared plan with the two added page edges.

The QA audited proposal inventory has ten A items and two B examples. Three local A-page suppliers were added because the downstream claims require them: `lem-qa-27-even-sign-window`, `lem-qa-27-lcu-projected-block-identity`, and `lem-qa-27-supported-pseudoinverse-target`. `plan-spec.json` still has empty item arrays, as at preauthoring; the current QA proposal/design files and this batch manifest supply the item inventories.

## Inventory and item dependency levels

The manifest lists 13 A items and two B examples, below the 100-item page cap. Dependency levels were recomputed against the current 120-page, 1,150-item run inventory. Every assigned manifest level equals the computed in-run logical dependency level and the item frontmatter; all 15 carrier/manifest `deps` arrays and the one `justified_by` edge agree. There are no batch-51 item cycles or label mismatches.

| Item | Page | Level | Current disposition |
|---|---|---:|---|
| `lem-qa-27-even-sign-window` | A | 0 | Complete local proof; ready. |
| `def-qa-27-variable-time-model` | A | 10 | Definition complete; escalated on unresolved QC access/measurement interfaces. |
| `def-qa-27-block-encoded-qlsp` | A | 12 | Definition complete; escalated on controlled/inverse access and local target well-definedness. |
| `lem-qa-27-lcu-projected-block-identity` | A | 12 | Complete conditional proof for supplied PREPARE/SELECT; ready. |
| `lem-qa-27-supported-pseudoinverse-target` | A | 13 | Complete finite-SVD proof; escalated because its QLSP definition supplier is unresolved. |
| `ex-qa-27-sparse-diagonal-qlsp` | B | 13 | Exact finite example and certificates complete; escalated on its block-QLSP and stale QA23/24 records. |
| `alg-qa-27-qsvt-pseudoinverse` | A | 14 | Binding OP1A/QSVT procedure retained; escalated on QA23 and QC access suppliers. |
| `def-qa-27-cks-sparse-oracle-model` | A | 15 | Sparse access definition complete; escalated on QA20, circuit-cost, and controlled/inverse interfaces. |
| `thm-qa-27-pseudoinverse-polynomial-degree` | A | 15 | Source claim retained; proof not supplied and escalated. |
| `thm-qa-27-vtaa-amplification` | A | 19 | Ambainis source theorem retained; proof not supplied and escalated. |
| `thm-qa-27-qsvt-inverse-state-cost` | A | 21 | Complete conditional proof; escalated on the degree, QSVT, and amplification supplier records. |
| `ex-qa-27-fixed-vs-variable-time-cost` | B | 22 | Exact arithmetic complete; escalated on the two cited QA27 theorem suppliers. |
| `alg-qa-27-cks-variable-time-linear-solver` | A | 24 | Full finite OP6 procedure retained; escalated on QA12/13/25 and access/cost interfaces. |
| `lem-qa-27-cks-stopping-time-instantiation` | A | 25 | Source quantities retained; custom-wrapper proof not supplied and escalated. |
| `thm-qa-27-cks-linear-condition-guarantee` | A | 26 | Source guarantee retained; local proof/resource fit not supplied and escalated. |

The block-encoded QLSP definition uses `justified_by: [lem-qa-27-supported-pseudoinverse-target]` for nonzero target normalization. The lemma depends on the definition through ordinary `deps`; the reverse well-definedness edge is not a logical dependency or a dependency-level edge.

The assignment’s batch-level input is stale after populating actual supplier dependencies and adding the two necessary page edges. Read-only recomputation gives batch 51 level 15 and prerequisite batches 1, 4, 8, 9, 10, 14, 24, 36, 37, 44, 46, 47, 48, 49, 50, with current candidate input SHA-256 `16599cc279f966c2a44d48e0af358d90cc00e62cc8e9472d8e177314839bb41c`. The shared `research/quantum-computing-algorithms-60-2026-10-15-batch-dependency-levels.json` still has the assigned SHA and level 14; I did not rewrite shared scheduling evidence.

## Supplier interfaces and unresolved dependencies

`research/quantum-computing-algorithms-60-2026-10-15-batch-51.cross-batch-dependencies.json` records all 92 direct cross-batch item edges, 54 unique direct external suppliers, their current exact Definition/Statement interfaces and hashes, current Step-1 record currency, and the affected consumer claims. Its transitive supplier closure contains 1,345 items. The current direct-supplier census is 9 hash-current `ready` records, 4 published interfaces, 24 escalated records, and 17 readiness records whose item/dependency hash is stale. No direct supplier carrier is missing. Readiness evidence is not mathematical acceptance.

The main exact open supplier groups are:

- **QA12 amplification:** `alg-qa-12-amplitude-amplification`, `alg-qa-12-known-amplitude-amplification`, `alg-qa-12-unknown-amplitude-search`, `lem-qa-12-amplification-plane-invariant`, `thm-qa-12-amplification-rotation-correctness`, and the known/unknown success and query-cost theorems. These affect the ordinary-amplification cost proof, the VTAA statement, and the OP6 wrapper.
- **QA20 sparse access:** `def-qa-20-sparse-hamiltonian-oracle-model` is escalated and is an XOR row/value interface; it does not provide QA25’s required in-place reversible location map and reverse-location operation. The CKS model keeps those as explicit requirements and does not silently infer the conversion.
- **QA23 synthesis:** `alg-qa-23-qsp-phase-synthesis` and `thm-qa-23-qsp-synthesis-correctness` remain escalated under OP0/OP1. This blocks the default QSVT phase-generation route. The signal-sequence definition’s own Step-1 record is stale and is also listed.
- **QA25 qubitization/simulation:** `def-qa-25-qubitization-access-model`, `alg-qa-25-qubitized-hamiltonian-simulation`, `alg-qa-25-small-time-aware-simulator`, `alg-qa-25-sparse-hamiltonian-block-encoding`, and their correctness/resource theorems remain escalated. Their actual current bodies are present and were inspected; this does not certify the QA25 interfaces. They affect the CKS solver and condition-number resource fit.
- **QC access and cost:** `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-reflection`, and `def-qc-circuit-cost-model` remain escalated. They affect the coherent variable-time model, QSVT execution, sparse access, and all gate/resource claims.
- **Stale current hashes:** QA13 phase-estimation/relative-counting algorithms and guarantee/query-cost theorems; QA24 QSVT procedure, singular-space/error/query theorems and real-polynomial extraction; the QC coherent-oracle and projective-measurement interfaces; plus `alg-qc-state-preparation`. Their carriers exist, but the old `ready` records do not hash-match the current item/dependency inputs, so this batch does not treat them as ready.

The local cross-batch handoff lists every exact supplier ID and each affected item claim. The ten unresolved within-batch item suppliers are separately listed in its `in_batch_unresolved` section. Their downstream definitions, procedures, theorem statements, and examples remain authored at the planned scope and are escalated rather than omitted.

## Mathematical review and source findings

The local supported-target proof constructs the Moore–Penrose inverse in finite singular coordinates, verifies all four Penrose equations, proves the normalization is defined, converts $(A/\alpha)^+=\alpha A^+$, and derives the ideal lower weight $\delta^2/4$. The QSVT inverse-state theorem is a complete conditional argument: it keeps the total implemented block error $\zeta$ explicit, uses reverse triangle inequality before normalization, preserves the conditional good-state direction under the supplied Grover iterate, and separates expected signal queries from gate, reflection, preparation, and classical certificate costs.

The CKS stopping-time and near-linear-$\kappa$ statements retain the source results but are not proved locally. In particular, the custom capped/rounded OP6 procedure needs its own proof of GPE error and ambiguity mass, common coefficient normalization, $\alpha_{\max}$ growth, `RelProb`/`CapAmplify` failure accounting, stopped-branch invariance, the $T_{\rm av}$/$p_{\rm succ}$ transfer, final erasure, and the actual QA25 sparse-query/gate-cost fit. The source theorem is not used as a substitute proof for the changed constructor.

A direct substitution into Gilyén et al. Lemma 29’s displayed $P'$ formula at its Theorem 41 parameters $t=3/4$, $\delta'=\delta/4$ gives $P'(0)\ge1+e'^2/4>1$, contradicting the printed $|P'|\le1$ claim. This source formula is not used. The new `lem-qa-27-even-sign-window` instead proves the cutoff bounds directly from an odd $S$ bounded and sign-accurate on $[-1,1]$. For OP1A it uses the exact scaling $s=1/a$, $t=3\delta/(4a)$, $g=\delta/(4a)$, and $\eta=2v$. It assumes the OP1A SignPoly approximation/range hypotheses; it does not prove the erf-Chebyshev alias/error bound, inverse approximation, product margin, Bernstein-refinement termination, or bit cost. Those are recorded on the escalated degree theorem.

All local results are choice-free: only finite matrices, finite sums, exact scalar inequalities, and declared finite circuits are used. No AC/DC assumption or stronger axiom branch is invoked.

## Sources and retrieval

The A page is supported by four independent complete full-text treatments, including a full lecture-note corpus: Andrew Childs, *Lecture Notes on Quantum Algorithms*; Gilyén, Su, Low, and Wiebe, *Quantum singular value transformation and beyond*; Childs, Kothari, and Somma, *Quantum algorithm for systems of linear equations with exponentially improved dependence on precision*; and Ambainis, *Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations*. The complete-source locators, cached full texts, supported item IDs, and each result’s included/inline/out-of-scope disposition are in the batch coverage and source-evidence files. The full documents were read sequentially in the QA5 source-ledger pass and the relevant ranges were re-inspected for this inventory.

`source-fetch-check --stamp` verifies 14/14 recorded source instances with zero new stamps and 14/14 resolved. The coverage checklist records two pages and 37 harvested results, with zero errors and warnings. No retrieval failures, recovery retries, source drops, or retrieval-driven `source_resolution` entries occurred. The Lemma 29 issue is a mathematical source defect, not a retrieval failure; its result is explicitly dispositioned out-of-scope while mathematical coverage is retained locally or escalated.

## Proof contracts, readiness, and scoped checks

The strict proof contracts cover the six complete arguments: the sign-window lemma, conditional LCU block identity, supported pseudoinverse target, conditional QSVT inverse-state cost, sparse diagonal example, and fixed/variable-time arithmetic example. Each contract maps the actual numbered steps and supplier excerpts; both examples include exact finite checks. Definitions, algorithms, and the four escalated source-derived result statements do not carry invented local proof contracts. The boundary audit has 48 rows, no template clusters, and no contradicted `not_applicable` candidates.

Final Step-1 records are hash-current for the two `ready` items (`lem-qa-27-even-sign-window`, `lem-qa-27-lcu-projected-block-identity`). The other 13 items are `escalated`, all with `owner: false`; no existing escalation was overwritten. After recording, a final proof pass added `def-operator-norm-on-a-finite-dimensional-inner-product-space` as an explicit dependency and fact for `lem-qa-27-supported-pseudoinverse-target`, justifying $\sigma_j=\|Av_j\|\le\|A\|_{\rm op}\le\alpha$. Its existing escalation remains necessary because the local block-QLSP definition is unresolved. Its preserved Step-1 record predates that refinement; the current dependency is in the manifest and cross-batch handoff, and the owner must re-examine the item before resolving the escalation. These are authoring handoffs, not independent proof approval.

| Scoped check | Result |
|---|---|
| Assigned item graph and dependency labels | Pass: 15/15 labels and carrier/manifest dependency arrays match; batch-51 in-run graph is acyclic. |
| `precheck.mts` | Pass: 6/6 proof-bearing items; definitions, algorithms, and escalated proof-not-supplied statements are not applicable. |
| `proof-layout.mjs` on all assigned item paths | Pass after final edits: 15 items, 22 steps, 0 defects. |
| `proof-contract.mjs --strict` | Pass: 6/6 completed proof contracts, 0 errors or warnings. |
| `boundary-audit.mjs` | Pass: 48 rows, 0 template clusters, 0 contradicted candidates. |
| Scoped `depcheck`, `fwdcheck`, `extcheck` | Pass for all 15 selected items and both assigned pages; 0 errors or warnings. |
| `content-policy.mjs` | Pass: 15 items, 0 errors or warnings. |
| `manifest-deps.mjs` | Pass: 15 items, 0 missing dependency arrays. |
| Scoped `rendercheck.mjs` | Pass: 17 assigned item/page files, 0 errors or warnings. |
| `source-fetch-check --stamp` | Pass: 14/14 sources fetch-verified, 14/14 resolved, 0 new stamps. |
| `coverage-checklist --require-destination` | Pass: 2 pages, 37 harvested results, 0 errors or warnings. |
| Run-wide `proof-contract-coverage.mjs` | Blocked before batch-scope comparison by the empty run-wide page inventory `quantum-sampling-expectation-and-monte-carlo-examples`; the assigned subset still has six proof-bearing items and six strict contracts. |
| Run-wide `item-dependency-levels check` | Exit 1 on unrelated inventory/label defects: one empty QA examples page, missing level on `lem-qa-18-johnson-stored-data-query-access`, and QA34 level mismatches. No batch-51 item is named. |
| Run-wide `batch-dependency-levels check` | Stale shared input (`3097…`); read-only current recomputation is level 15/hash `16599…`. Shared sidecar was not written. |
| Run-wide `validate-plan --run` | The current QA55 manifest has an invalid/duplicate item identity; validation stops there before a complete plan result. No other pair’s manifest was edited. |

The `.autopilot/quantum-computing-algorithms-60-2026-10-15` directory is present. Its status snapshot still carries the 2026-10-15 20:02 UTC report and says `1-scaffold`, unpaused, with an owner-hold blocker and three active dispatches including batch 51. The documented read-only autopilot `status` command did not return within 40 seconds and was interrupted; state/status file mtimes refreshed, but the event log tail is unchanged at that same 20:02 report. Treat this as stale runtime evidence, not a live status. No dispatch, transition, gate attempt, shared plan, published content, or verdict was changed by this authoring work.

## Owner QA27 integration (native writer drained)

Exact final native sources, mutable metadata and all15 original readiness decisions were preserved under the owner-vtaa/before directory. Six necessary local suppliers were integrated: generic finite relative-probability estimation and its guarantee; finite lower-bound amplification and its guarantee; the robust low-target lemma; and efficient coherent amplitude-grid rounding. The four missing local proof obligations now have full arguments. The general amplification statement explicitly distinguishes supplied probability/schedule data with charged C_build from a uniform positive-floor/confidence implementation and its complete estimation overhead/cap. The local no-advice fixed-time obstruction documents why probability acquisition cannot be free; no published theorem is alleged false and no unknown-p expected bound is adopted.

The complete Fourier/table alternates remain. The explicit efficient QSVT CKS mode has local routing/common-scale, clean-subspace hybrid, output vector-error, terminal-bad/work-check, probability-floor and quantum resource proofs. Arithmetic/comparison/compiler construction and bit costs remain separate. Current item inventory/dependency mirrors and proof contracts were transcribed; all original decisions remain unchanged historical records. Root alone owns current hashes, recertification, gates, acceptance and transitions. No test/gate/hash/readiness/commit operation was performed by this repair.
