# Batch 39 authoring notes — Polynomial Method and Approximate Degree

## Governing inputs, plan, and run state

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta-39 assignment and batch task, the owner authoring direction, `plan-spec.json`, the current audited quantum-algorithms proposal exports, and QA3’s complete QA15 section in `research/quantum-algorithms-planning/sections/qa_r3.md`. No pair design section was found; QA3 is planning context, not a design. The owner direction controls any stale proposal text.

The plan-spec page record matches the assigned page IDs, title, category, reading order, and six `requires` pages, but its item inventory is empty. The current audited proposal export lists ten A items and two B items. The completed pair has fourteen A items and two B items: the ten planned claims, both planned examples, and four proved local helpers for continuous Markov, grid return, the oracle-only model, and branch-density degree. The empty plan inventory is an inventory gap, not an item-level contradiction. Both pages remain draft and are under the 100-item cap.

The live autopilot status recomputed at 2026-10-15T19:32:42Z reports the run `running`, stage 1-scaffold at 48/60, and no workers in flight. The engine still lists batch 39 among missing scaffold artifacts although its assigned `batch-39.pages.json` exists. Stage 1 is held by unrelated invalid pair/spec/source artifacts and an owner repair/recertification blocker. Engine transitions and shared state were left untouched.

The beta task names batch 39 at level 13 with prerequisite batches 14, 25, and 26; its dispatch input hash is `8a8741bd10bd2c8045ab35f84063b17c7eaf83424674eeb221f486015b3f7848`. The stored shared graph has input hash `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`. Recomputing from current manifests and actual carrier dependencies yields hash `bfb66d87d3b9d5140c149c522b2344b771d82fe5defea7b894fb03da3ce1938b`; batch 39 remains level 13, but its current direct prerequisite batches are 2, 4, 7, 13, 14, 25, and 26. This scheduling-input/prerequisite mismatch needs owner reconciliation. The shared dependency file was not rewritten.

## Inventory, dependency order, and local arguments

| Item | Level | Item | Level |
|---|---:|---|---:|
| `lem-qa-15-continuous-markov-derivative-bound` | 0 | `lem-qa-15-grid-return-derivative` | 0 |
| `lem-qa-15-discrete-markov-ehlich-zeller` | 1 | `def-qa-15-bit-oracle-query-model` | 17 |
| `def-qa-15-acceptance-polynomial` | 18 | `def-qa-15-bit-oracle-query-complexity` | 18 |
| `lem-qa-15-branch-density-degree` | 18 | `lem-qa-15-query-amplitude-degree` | 18 |
| `lem-qa-15-symmetrization` | 19 | `prop-qa-15-promise-domain-scope` | 19 |
| `thm-qa-15-acceptance-degree-bound` | 19 | `ex-qa-15-or-polynomial-small-n` | 19 |
| `thm-qa-15-exact-degree-or` | 20 | `thm-qa-15-or-approximate-degree-lower-bound` | 20 |
| `thm-qa-15-parity-approximate-degree` | 20 | `cex-qa-15-off-cube-values-are-unconstrained` | 20 |

The helper results precede their consumers. The continuous Markov item proves a weighted Chebyshev-node interpolation bound, a trigonometric Bernstein derivative bound, and then the range-centered Markov inequality. The discrete finite-grid bound is a rescaling plus the nearest-grid return estimate. Symmetrization averages the multilinear reduction on each Hamming layer. The OR lower bound proves the grid correction and constants locally; parity and exact OR use finite root counting. Promise-domain freedom is witnessed by an explicit point-indicator polynomial. The B example gives a one-query exact algorithm on `{00,11}`; the B counterexample gives the two-bit NAND symmetrization `1-t(t-1)/2`, which equals `9/8` at `t=1/2`.

The revised Markov proof keeps the zero and constant cases, specifies all interpolation nodes and boundary extensions, and uses only the declared finite sums and compact-interval extrema. Its proof contracts now carry the canonical six phase steps and exact supplier excerpts. The added B-page Pauli matrix dependency makes each fixed `X` action explicit; the example’s non-oracle operations are fixed unitaries and are not charged by query complexity.

## Supplier audit and owner escalations

The direct item graph has 43 unique external suppliers: 33 published root items and ten draft suppliers in other batches. The current cross-batch evidence file records seven page prerequisites, 24 direct in-run item edges, three implicit QA01 interface checks, exact observations and affected claims. Draft suppliers’ Step 1 `ready` records are author readiness only.

Three draft QA01/QC interfaces are material to the intended general query-model interpretation:

- `def-qa-quantum-query-algorithm` says the circuit family acts on the encoded input and supplies its input/output interface from the promise-computation model; it does not require non-oracle operations to be independent of `x`.
- `def-qc-promise-computation-model` initializes the input register to `|x⟩` and declares a terminal predicate `A_n(x,z)`, so it permits direct input access.
- `def-qa-quantum-query-complexity` defines the worst-case cost of one algorithm, not the function-level minimum `Q_ε(f;D)` over feasible algorithms.

The local QA15 definition therefore explicitly fixes the all-zero initial state, input-independent circuit tree/non-oracle operations, and fixed terminal predicate, with `x` entering only through the stated one-hot XOR oracle. Its local `Q^bit_ε` is a separate minimum. The exact hypotheses required for owner reconciliation are: input-independent initial state; every non-oracle operation and terminal predicate independent of `x`; oracle-only access; and a function-level minimum of worst-branch query counts. This affects `def-qa-15-bit-oracle-query-model`, `def-qa-15-bit-oracle-query-complexity`, `lem-qa-15-query-amplitude-degree`, `lem-qa-15-branch-density-degree`, `thm-qa-15-acceptance-degree-bound`, `thm-qa-15-or-approximate-degree-lower-bound`, and `thm-qa-15-parity-approximate-degree`. Their exact disposition and supplier excerpts are in the cross-batch file; none is represented as a generic QA01 theorem or independently accepted.

A second unresolved supplier check is recorded for `def-qa-finite-branch-output-law`, a direct prerequisite of the local model and branch-density lemma. Its actual body and complete local verification are present, but its current Step 1 record is escalated because the Batch 25 audit lists 38 transitive root supplier statements/proofs not reread there. The exact 38 IDs, direct interface, and affected local claims are recorded in the cross-batch artifact. The local model and branch-density item remain escalated pending reconciliation; no defect or acceptance is inferred. The current `def-qc-promise-computation-model` body was also inspected; its Step 1 record remains escalated on an older missing-QC09-source check even though the relevant syntax/denotation bodies now exist. Its body still exposes `|x⟩` and `A_n(x,z)`, which is why the QA01 input-access interface remains unresolved.

## Sources and retrieval

The A-page source set contains two independent full quantum-algorithms lecture-note treatments and a complete classical approximation-theory course text:

- Childs, *Lecture Notes on Quantum Algorithms*, full 191-page PDF; relevant complete Chapter 21 §§21.3–21.6 (printed pp. 98–101, PDF pp. 106–110).
- de Wolf, *Quantum Computing: Lecture Notes*, full 239-page PDF; relevant complete §11.2 (printed pp. 90–92, PDF pp. 102–104).
- Carothers, *A Short Course on Approximation Theory*, full 159-page lecture notes; complete Chapter 5 pp. 57–60 read for Markov/Bernstein.

The source ledger and coverage file preserve the full document locations, locators, result-by-result dispositions, and successful Carothers retrieval history. `source-fetch-check` reports 5/5 source entries fetch-verified and resolved, with no drops or failed-retrieval recovery needed. Coverage now uses the schema’s `lecture-notes` kind and the required dispositions; all 35 harvested results are dispositioned.

## Scoped checks and handoff

Passing pair-scoped checks:

- `precheck`: 13 proof-bearing items, 0 failures; three definitions are not applicable.
- `proof-layout`: 16 items, 47 numbered steps, 0 defects.
- `rendercheck`: 18 changed item/page files, 0 errors.
- `content-policy`: 16 items, 0 errors and 0 warnings.
- `manifest-deps`: 16 items, 0 missing dependencies and 0 normalization changes.
- Focused `depcheck`: selected items and prerequisite-cycle checks passed.
- Strict proof contracts: 16/16 items, 0 errors and 0 warnings.
- `source-fetch-check`: 5/5 source entries fetch-verified and resolved.
- `coverage-checklist --require-destination`: 2 pages, 35 harvested results, 0 errors and 0 warnings.

Whole-run checks remain blocked outside this pair. Proof-contract coverage reports missing frontier item `ex-qa-27-sparse-diagonal-qlsp`. Item dependency-level checking reports an empty inventory for `quantum-sampling-expectation-and-monte-carlo-examples` and stale levels for `lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-tang-without-sampling-access`. Batch dependency-level checking reports the shared artifact stale against the current input hash above. These files and shared state belong to other owners and were left untouched.

The final Step 1 records mark nine locally complete items `ready` and seven interface-dependent items `escalated`; all records list examined dependencies. They record authoring readiness only, not independent mathematical approval.

The whole-run `step1-decisions.mjs check --run` cannot build its current snapshot because of malformed YAML in the unassigned item `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent` (`items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md:24`, `verification: {, judge: ...}`). This pair’s sixteen decision records were individually written with their current direct dependency lists; the unrelated carrier was not changed.

## Owner interface reconciliation

The owner-focused review reconciles QA15 as the explicit oracle-only specialization, represented in QA01 by an untouched encoded-input spectator whose marginal contributes factor one. QA15 minimizes worst-branch calls over that restricted class; generic QA01 per-algorithm cost and direct input access remain unchanged. The two local definitions now state this distinction without a pending identification claim. The local exact N-query feasibility construction explicitly records measured bits in fixed output wires, including the empty-promise zero-query case.

The approved multilinear acceptance claim is restored using the existing cube-multilinear-reduction lemma: real coefficient extraction and squarefree reduction preserve all cube values and the 2T support bound, including zero polynomials. No outside-cube probability claim is made. Current affected consumer interfaces and proof-contract quote mirrors were reconciled by the same reviewer; original native escalation and dispatch records remain historical and unchanged. See `quantum-computing-algorithms-60-2026-10-15-owner-polynomial-model-escalation.json` for focused evidence. Root owns stable graph, bindings and readiness.
