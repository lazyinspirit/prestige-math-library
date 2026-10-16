# Batch 59 — authoring and handoff notes

## Governing inputs and plan reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the task files, the owner authoring direction, the active run plan/design, the audited QA35 export, batch dependency-level input, and relevant current source carriers before authoring. The owner direction controls over the older QA35 source hold.
- The Beta-59 task says `design: none found`. The complete current QA track design exists in `research/quantum-algorithms-planning/sections/qa_r6.md`, QA35, and the owner direction requires current designs/exports over stale task text. QA35 governs this pair; the task’s no-design label is stale and was not followed.
- `research/plan-spec.json` has A/B page rows at orders 2282/2283 with the assigned IDs, titles, category, companion relation and A-page prerequisites. Its item arrays are empty planning placeholders. The current audited QA export has 10 planned A claims and 2 B examples; these page/item inventories match, while this scaffold adds 11 local A-page proof suppliers needed to prove the planned claims. No page-scope conflict remains.
- The current batch-dependency input sets this batch at level 11, with prerequisite batches 1, 2, 3, 4, 6, 10 and 14 and scheduling fingerprint ``d019d0aa41f6c3122068968bda557f91e8f96eea1c0443e5cababf6bba218a0b`. The dependency level labels below were recomputed from item dependencies and current same-run supplier levels after local additions. The A-page maximum is 16 and the B-page maximum is 17; these are consumer item levels, not a change to the scheduled batch level.

## Inventory and item dependency levels

Batch 59 contains 21 A-page items and 2 companion examples, within the 100-item page cap. The original QA35 claims are retained; local definitions and lemmas establish all technical inputs before their consumers. `batch-59.pages.json` is the controlling per-item inventory with exact logical deps, `justified_by` relations, local order, and levels.

| Page | Item | Level |
|---|---|---:|
| quantum-communication-and-fingerprinting | `def-qa-35-finite-probability-entropy-and-stochastic-matrices` | 0 |
| quantum-communication-and-fingerprinting | `lem-qa-35-log-tangent-bound` | 0 |
| quantum-communication-and-fingerprinting | `lem-qa-35-kl-event-separation` | 1 |
| quantum-communication-and-fingerprinting | `lem-qa-35-smp-prior-message-decomposition` | 1 |
| quantum-communication-and-fingerprinting | `lem-qa-35-smp-entropy-drop` | 2 |
| quantum-communication-and-fingerprinting | `def-qa-35-swap-test-effect` | 3 |
| quantum-communication-and-fingerprinting | `lem-qa-35-identity-matrix-packing` | 3 |
| quantum-communication-and-fingerprinting | `lem-qa-35-trace-norm-tensor-density-identity` | 3 |
| quantum-communication-and-fingerprinting | `thm-qa-35-swap-test-measurement-effect` | 4 |
| quantum-communication-and-fingerprinting | `def-qa-35-finite-communication-protocol` | 11 |
| quantum-communication-and-fingerprinting | `def-qa-35-equality-promise` | 12 |
| quantum-communication-and-fingerprinting | `def-qa-35-code-fingerprint-state` | 13 |
| quantum-communication-and-fingerprinting | `lem-qa-35-private-coin-error-reduction` | 13 |
| quantum-communication-and-fingerprinting | `thm-qa-35-deterministic-smp-equality-lower-bound` | 13 |
| quantum-communication-and-fingerprinting | `thm-qa-35-quantum-fingerprint-message-lower-bound` | 13 |
| quantum-communication-and-fingerprinting | `lem-qa-35-random-code-existence-nonuniform` | 14 |
| quantum-communication-and-fingerprinting | `thm-qa-35-code-fingerprint-state-properties` | 14 |
| quantum-communication-and-fingerprinting | `thm-qa-35-private-coin-equality-lower-bound` | 14 |
| quantum-communication-and-fingerprinting | `alg-qa-35-swap-test-fingerprint` | 15 |
| quantum-communication-and-fingerprinting | `rem-qa-35-private-coin-lower-bound-unresolved` | 15 |
| quantum-communication-and-fingerprinting | `thm-qa-35-fingerprint-correctness-and-cost` | 16 |
| quantum-communication-and-fingerprinting-examples | `cex-qa-35-public-vs-private-randomness` | 13 |
| quantum-communication-and-fingerprinting-examples | `ex-qa-35-length-eight-fingerprints` | 17 |

The 11 local A-page proof suppliers are `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `lem-qa-35-log-tangent-bound`, `lem-qa-35-kl-event-separation`, `lem-qa-35-smp-prior-message-decomposition`, `lem-qa-35-smp-entropy-drop`, `lem-qa-35-identity-matrix-packing`, `lem-qa-35-private-coin-error-reduction`, `thm-qa-35-private-coin-equality-lower-bound`, `thm-qa-35-swap-test-measurement-effect`, `lem-qa-35-trace-norm-tensor-density-identity`, and `thm-qa-35-code-fingerprint-state-properties`. They occur in supplier-first order. The fingerprint algorithm and correctness theorem follow the code-state supplier; the B examples follow all A claims.

The direct cross-batch file records 10 actual prerequisite page bodies and 30 actual direct item suppliers, with exact source sections and proof excerpts when applicable. It also records 20 transitive current-run item suppliers and the complete machine-computed transitive ID closure (1,147 transitive external item IDs, 0 missing targets). The many older published/foundational ancestors remain identified in that closure; no page-level or item-level supplier was invented.

## Mathematics and model boundaries

- Equality is the total promise on nonempty n-bit input sets. Deterministic SMP lower bound counts both fixed-length and all variable-length binary messages of length at most the charged maximum.
- Quantum-message lower bound fixes one party input, uses product states only under the explicitly stated no-shared-entanglement/no-shared-randomness model, applies the actual finite-POVM measurement-variation theorem, proves tensor-factor trace-distance equality locally, and performs a Hermitian-coordinate grid count. No AOC-backed density ensemble theorem is used.
- The Newman–Szegedy private-coin lower bound is now a locally proved theorem. The proof defines finite row-stochastic message matrices, proves private-message conditioning and relative-entropy reduction, derives entropy decrease and matrix packing, then applies fixed-constant repetition. It proves an Ω(√n) total communication lower bound; it does not replace this with the deterministic Ω(n) model or a public-coin claim.
- Fingerprints use $|h_x\rangle=N^{-1/2}\sum_{i<N}|i\rangle|E_i(x)\rangle$. The code-state overlap, swap involution, symmetric/antisymmetric projectors, Hadamard-controlled-Fredkin expansion, exact error, and communicated qubit count are proved locally.
- The random-code lemma sets $N=32n$ and relative distance $1/4$; Chernoff and a union bound prove a finite codebook exists. The lexicographically first valid codebook for each n removes any arbitrary-choice step. It gives no efficient or uniform encoder. The log n communication claim is conditional on a supplied fixed-distance, linear-length code; no missing explicit uniform code is silently supplied.
- The public hash uses a public shared seed of $2n$ bits as a separate resource. Its two transmitted bits per sender do not imply a private-coin protocol.
- No physical postulate, teleportation, shared entanglement, dense coding, or Axiom of Choice is used. All conditional selections and bases are finite; the code sequence is lexicographically specified.

## Source reading, recovery and disposition

- de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6: QA35 Chapter 16 §§16.1–16.3, PDF pp.147–155 read/rechecked. Watrous, *The Theory of Quantum Information*: §§2.1–2.3, PDF pp.35–76, and §§3.1.1–3.1.2, pp.133–139 read/rechecked. These are independent full lecture-note/book treatments. Buhrman–Cleve–Watrous–de Wolf, *Quantum Fingerprinting*, all 8 pages read. Item-specific locators, cache paths, hashes, supported claims and source dispositions are in `batch-59.source-evidence.json`.
- Newman–Szegedy history is preserved: the prior QA-R6 ledger records the official ACM PDF HTTP 403 and Semantic Scholar closed-access result; ResearchGate recovery returned HTTP 429; an author-page link supplied the author-hosted PostScript. The full PostScript was fetched (157,667 bytes), converted locally, all 10 pages were visually inspected, and §4.2 pp.4–9 was read in full. The local proof covers the complete entropy/matrix-packing argument and the Equality reduction.
- `source-fetch-check --stamp` succeeded for 4/4 sources, stamped the newly recovered author-hosted PostScript once, reused three prior verified stamps, and recorded zero drops. The checker labels the PostScript body `binary`; its exact stamp is accompanied by the saved original `.ps`, derived ten-page `.pdf`, and extracted `.txt` under `research/quantum-computing-algorithms-60-2026-10-15-batch-59-sources/`.
- No `source_resolution.status: dropped` record was made: the source is recovered and used. The source-resolution utility accepts only an exhausted-source drop/escalation decision; attempt chronology, searches, recovered bytes, full reading, per-item source support and local proof disposition are instead retained in the batch source evidence. No source is dropped and no claim relies on an unread citation.

## Supplier checks and unresolved interfaces

- Current direct item suppliers and assigned prerequisite page bodies are present. Their actual excerpts, source status, batch owner, consumer interface and proof excerpt (for proof-bearing suppliers) are stored in `batch-59.cross-batch-dependencies.json`. The audited QC state, register, measurement, trace-distance, cost-model and Fredkin suppliers were checked against their current bodies, not plan summaries.
- The wider `trace-distance-fidelity-and-information-limits` page includes channel/Kraus results outside this pair’s use. Batch-59 proofs use only the actual trace-distance definition and measurement-variation supplier; no channel contractivity claim is imported.
- `uniform-circuit-families-promise-problems-and-complexity` and `reversible-computation-ancillas-and-coherent-oracles` supply the assigned context and Fredkin gate definition. No family-generation or efficient-encoder claim is made.
- The `rem-qa-35-private-coin-lower-bound-unresolved` identifier is retained for compatibility with the audited inventory; its carrier now records source recovery and points to the complete local theorem. The stale word “unresolved” survives only in this historical item ID.

## Scoped check record

- `proof-layout.mjs` on the 23 changed item files: **23 items, 39 steps, 0 defects**.
- `precheck.mts` on the same 23 files: **17 proof-bearing items checked, 0 failing**; the six definitions/remark are not proof phases.
- Strict `proof-contract.mjs`: **23/23 checked, 0 errors, 0 warnings**. Contracts contain 63 source-fact citations with exact supplier section text, 39 mapped steps, and boundary dispositions.
- `content-policy.mjs` on the batch manifest: **23 items, 0 errors, 0 warnings**.
- `coverage-checklist.mjs`: **2 pages, 38 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check --stamp`: **4/4 source URLs verified and resolved; one new PostScript stamp, three prior stamps reused, zero drops**. Final check mode again passed **4/4**.
- `rendercheck.mjs` on 23 items and 2 pages: **25 files passed**; math parsed and all frontmatter parsed.
- Focused `depcheck.mjs --items-file`: **23 assigned items, 0 errors, 0 warnings**; dependency closure checks covered 1,225 items and 380 pages.
- Scoped dependency-level recomputation: **23/23 item labels match**, no cycles or missing dependency targets; levels are in the scaffold manifest.
- `step1-decisions.mjs record`: **23 assigned items recorded `ready`, `owner:false`** with direct item dependencies and evidence references. A scoped current-hash audit reports **23/23 ready**. This records authoring readiness and is not independent approval.

The run-wide `batch-dependency-levels.mjs check --run` could not reach a graph comparison because an unrelated carrier has duplicate YAML `locator` keys: `items/thm-qa-shor-factoring-cost.md:30–31`. No file outside batch 59 was edited. The run-wide `step1-decisions.mjs check` likewise stops in the run-wide prerequisite loader before evaluating all batch scopes. It reports a malformed `justified_by: []` followed by an indented `lem-qa-rational-reconstruction-candidate-uniqueness` sequence but does not identify that carrier path. The scoped current-hash audit above verifies this batch’s 23 readiness rows independently.

The latest read-only autopilot status at 2026-10-15 18:49 UTC remains `running`, with 35/60 scaffolds covered, nothing in flight, and the batch-59 artifact recognized. Stage 1 is still held by owner-wide blockers: `plan()` reports `Invalid pair undefined`; batch 12 has invalid item identity `def-qc-effective-unitary-matrix-input`; an item-handoff carrier has an unquoted John Preskill title; and owner repair/recertification is required. `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json` records the current stage-stalemate finding for batches 29 and 2, both covered but artifact-incomplete. These engine and owner blockers are outside this pair; no engine state or shared verdict was changed.
