# Batch 44 authoring handoff — Hamiltonian Simulation and Product Formulas

## Scope and plan reconciliation

The assigned pair is `hamiltonian-simulation-and-product-formulas` / `hamiltonian-simulation-and-product-formulas-examples`. The pair-specific design lookup found no design section; the A/B carriers were scaffolded from the current sources and plan, and no standalone design governed this pair. I read the complete QA20 section and extended routes in `research/quantum-algorithms-planning/sections/qa_r4.md` as track-level context.

The pair matches `research/plan-spec.json`: orders 2252–2253, category `quantum-algorithms`, companion IDs, A-page prerequisite IDs, and B-page dependence on A. `plan-spec.json` has empty item arrays; the current QA20 planning export supplies the 13 A items and three B examples, all present in the batch manifest and page carriers. The plan's source summary emphasizes a first-order commutator bound, a conservative symmetric second-order bound, separate resource coordinates, and the sparse-oracle / term-list distinction. The extended QA20 route also includes the finite Suzuki recursion and asks for its order proof and cost accounting. We provide a local coefficient-cancellation induction and a conservative derivative-norm bound; no nested-commutator estimate is asserted. This is the complete order proof for the recursive formula used here.

The B-page summary does not mention the QA20 section's warning that choosing the step count from `||H||` and `epsilon` alone can be costly. The Pauli example preserves it: the fixed sum `H=Z` has decompositions `H1=lambda X`, `H2=Z-lambda X` whose displayed commutator certificate grows with `lambda`. It expressly does not claim a lower bound on actual simulation error.

The planning export's proposed item levels were 8–13. They omitted direct hypotheses and access interfaces needed for the authored definitions/proofs. Recomputing from the current in-run suppliers and the completed pair graph gives levels 11–17 below. Added edges include the norm definition, circuit chronology, exact ancilla semantics, the full-list generator, and existence/uniqueness of the roots in the Suzuki coefficients. The additions preserve the planned claims and inventory.

The beta task assigns batch 44 level 12 with prerequisite batches 8, 10, 14, and 43. The task records scheduling input SHA `1be34a1c3a351a54b8ebe8583ff9c7999a0816a0888ead57d8e5da643e4e72a9`; the current on-disk batch-level artifact records `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`. Its batch-44 row still says level 12 and requires 8, 10, 14, and 43. The shared schedule was not edited. Final workspace status also shows an unrelated modification to `research/plan-spec.json`; its diff contains no QA20 or batch-44 rows, and this pair did not edit that shared file.

## Item graph and current levels

Levels count one plus the maximum level among direct in-run item suppliers; an item with no in-run supplier is level zero. Published suppliers do not raise the level. The source `def-qc-coherent-function-oracle` is now present in batch 10's manifest at level 13; the level calculation used that manifest entry.

| Level | Items |
|---:|---|
| 11 | `def-qa-20-simulation-error-and-cost-model` |
| 12 | `def-qa-20-term-list-access-model` |
| 13 | `def-qa-20-first-order-product-formula`; `rem-qa-20-higher-order-formula-proof-obligations` |
| 14 | `def-qa-20-sparse-hamiltonian-oracle-model`; `def-qa-20-symmetric-second-order-formula`; `thm-qa-20-first-order-commutator-error`; `alg-qa-20-first-order-term-list-simulation`; `ex-qa-20-commuting-two-term-simulation` |
| 15 | `thm-qa-20-second-order-conservative-error`; `alg-qa-20-suzuki-recursive-product-formula`; `thm-qa-20-first-order-resource-bound`; `cex-qa-20-sparse-oracle-does-not-give-term-list`; `ex-qa-20-noncommuting-pauli-error` |
| 16 | `lem-qa-20-suzuki-order-cancellation` |
| 17 | `thm-qa-20-suzuki-conservative-error-and-resources` |

The pair's direct page requirements remain the five declared by the A page. A read-only transitive page-closure walk over their current `plan-spec.json` requirements found 418 pages: 398 published, 15 draft, and five planned pages without a library carrier. The 15 draft pages are `continuous-time-quantum-walks`, `uniform-circuit-families-promise-problems-and-complexity`, `approximate-universality-and-solovay-kitaev`, `continuous-gate-universality-and-exact-synthesis`, `circuit-syntax-denotational-semantics-and-measurement`, `channels-kraus-choi-and-stinespring-representations`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `controlled-gates-phase-and-entanglement`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `reversible-computation-ancillas-and-coherent-oracles`, `clifford-t-exact-and-approximate-synthesis`, and `trace-distance-fidelity-and-information-limits`. The five planned pages with no carrier are `foundations-of-the-real-numbers`, `construction-of-r-via-dedekind-cuts`, `construction-of-r-via-cauchy-sequences`, `construction-of-the-natural-numbers`, and `frattini-subgroups-and-the-burnside-basis-theorem`. These are outside this pair's edit scope and remain owner reconciliation items.

The pair-owned cross-batch ledger has 40 direct rows: 27 interface-verified rows and 13 open rows. Four of the five A-page prerequisite page edges remain open; the spectral-theorem page is published and verified. A new direct item dependency on `def-qc-circuit-denotational-semantics` in batch 9 is explicit on both circuit-producing algorithms so their execution order follows the actual circuit denotation. Batch 9 is not listed in the assigned batch-44 prerequisite set. This cross-batch scheduling discrepancy is escalated to the owner; the shared batch-level artifact was left unchanged.

## Supplier bodies inspected and remaining checks

I inspected the actual supplier bodies and proofs, including their current readiness records. A `ready` Step1 record is authoring readiness, not independent acceptance.

| Supplier | Required interface and current evidence | Affected claims |
|---|---|---|
| `def-qa-19-finite-matrix-dynamics` and `thm-qa-19-matrix-exponential-unitary-properties` (batch 43) | The actual bodies define finite spectral evolution for finite-dimensional self-adjoint matrices and prove unitarity, derivative, uniqueness, and the time-composition law. Both current Step1 records are hash-valid `ready` records. | Evolution definition, commutator proof, second-order bound, Suzuki cancellation/error, and commuting example. |
| `def-qc-controlled-unitary-access` and `def-qc-inverse-unitary-access` (batch 8) | Actual statements/proofs fix control-first `C(U)=diag(I,U)` and explicit inverse/time-reversed access and costs. Both existing Step1 records remain escalated because five page prerequisites are open: finite-dimensional matrix interfaces, measurements/POVMs/instruments, pure/mixed states, one-qubit gates, and registers/tensor products. | Controlled and inverse term calls in the simulation and term-list access contracts. |
| `def-qc-circuit-cost-model` (batch 14) | Its actual body separates full description, gates, depth, width, clean/dirty ancillas, query, generation, and classical costs. Its existing Step1 escalation cites absent QC09 syntax/denotation/resource carriers; those bodies are now present, but the owner-held escalation remains. | Simulation resource coordinates and sparse-oracle call accounting. |
| `def-qc-uniform-circuit-family` (batch 14) | Its actual body fixes a full-list generator and does not equate this with indexed-gate uniformity. Its existing Step1 escalation names QC09 syntax/denotation/resource carriers and the draft QC13 gate library. | Circuit-backed term access and explicit generation costs. |
| `def-qc-coherent-function-oracle` and `thm-qc-reversible-xor-oracle-unitary` (batch 10) | The current manifest now contains the total-XOR definition at level 13; I inspected the definition and complete involutive/unitary proof. Its existing Step1 file says `ready`, but `step1Decision` currently returns `Item or dependency changed; record current readiness`. I left the stale record untouched. | Total row-location/value oracle semantics and unitarity in the sparse model. |
| `def-qc-circuit-denotational-semantics` (batch 9) | The exact body says chronological layers `L1,...,Ld` compose as `U_Ld...U_L1`. Its current Step1 record is hash-valid `ready`. | Reverse chronological execution of the displayed first-order and Suzuki operator words. This direct edge creates the batch-9 scheduling mismatch above. |
| `def-qc-clean-and-dirty-ancillas` (batch 10) | The exact body defines clean work as zero-in/zero-out for every data vector and dirty work as `V tensor I`. Its current Step1 record is hash-valid `ready`; the local access contract measures error on the induced target unitary. | Well-defined per-call target action and composition when term circuits use work registers. |
| `thm-nth-roots-exist` (published) | Supplies a unique nonnegative q-th root of 4; the local definition/proof observes it is positive because `0^q != 4`. | Well-defined exact algebraic time codes and Suzuki coefficients. |

Published self-adjoint, operator-norm, submultiplicativity, and spectral-theorem suppliers were also inspected. The current exact cross-batch declarations and item-specific evidence are in `research/quantum-computing-algorithms-60-2026-10-15-batch-44.cross-batch-dependencies.json`. In particular, current open item suppliers include `def-qc-circuit-cost-model`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-uniform-circuit-family`, and the stale `def-qc-coherent-function-oracle` readiness input. Their affected claims and exact requirements are recorded above; no supplier acceptance is inferred.

## Conventions, proofs, and axioms

All Hamiltonians are finite-dimensional self-adjoint endomorphisms over the complex numbers. Evolution is `U_H(t)=exp(-itH)`; matrix products are written in ordinary left-to-right algebraic order, with the rightmost factor acting first. Circuit words are therefore executed in reverse chronology under `U_C=U_last...U_first`. Signed times are explicit inputs with separately declared inverse/time-reversed access and cost. The term-list and sparse row/value models are distinct. Each generator and term implementation is an explicit promise; no free exponentials, controlled calls, inverses, coefficient work, or polynomial bounds are inferred. Auxiliary-register semantics are exact clean/dirty contracts, and error bounds are on the induced target operator.

The first-order proof derives the two-term Duhamel commutator identity, splits terms, and telescopes unitary steps. The symmetric second-order proof matches through degree two and bounds third derivatives by `M^3`, giving local `M^3|h|^3/3` and global `M^3|t|^3/(3r^2)`. The Suzuki proof establishes recursive odd-order cancellation and symmetry by induction; the resource theorem gives a derivative-based conservative error and exact `(2m-1)5^(k-1)` expanded term count. No asymptotic nested-commutator claim is made. The examples include exact commuting and Pauli calculations, the sparse diagonal separation, and the norm-only certificate warning.

No additional axiom or choice principle is used. The proofs use the finite-dimensional spectral/evolution suppliers, elementary operator-norm inequalities, finite sums/products, Taylor's theorem, and the cited existence/uniqueness of positive roots. No axiom branch is silently added.

## Sources and finite checks

The A page has two independent full lecture-note treatments, with exact URLs, locators, and per-item support/disposition in `research/quantum-computing-algorithms-60-2026-10-15-batch-44.coverage.json` and `...-batch-44.source-evidence.json`:

- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, Chapter 27 §§27.1–27.4, printed pp. 133–138, <https://www.cs.umd.edu/~amchilds/qa/qa.pdf>. Local cache SHA-256: PDF `6e3a32f0aede35e954d665c909fec41f716b955f041957e723e2724ae3efabd1`; extracted text `f7456fdbf599429bf093c9345c45536cbeb979d37be762819a151e6d2497c8b5`.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, Chapter 9 §§9.1–9.2, printed pp. 71–74, and §9.4 Example 2, pp. 76–77, <https://arxiv.org/pdf/1907.09415>. Local cache SHA-256: PDF `b797f4165555d28180438586412e7629fecadb94a7ea81c761de8bdfd37a1fc1`; extracted text `e032238d44ad01b1df36b12f97050b94c090b243d1e9dfa326df7c94b210433d`.

Batch 44 read the complete relevant sections sequentially from both full texts; it does not claim to be the prior source readers recorded in source ledgers. `source-fetch-check --stamp` verified 2/2 sources, stamped both, and recorded zero drops; the final non-stamp check also passed 2/2. Coverage records 32 source/item dispositions. There were no retrieval failures, retry searches, or dropped sources; `source_resolution` is empty.

The proof contracts record three exact finite checks: the 2-by-2 commuting `Z,Z` example; the `N=4` count of 16 sign functions versus 15 bit strings shorter than four bits; and the exact Pauli commutator/norm calculation. These are hand-derived finite calculations recorded in contracts, not claimed as execution of a registered finite-smoke tool. No test suite was run.

## Scoped checks and readiness disposition

Final scoped check results after the item edits:

- `precheck`: 8 proof-bearing items, 0 failures.
- Strict proof contracts: 16/16 checked, 0 errors, 0 warnings, including exact supplier excerpts, mapped step inputs, boundaries, and applicable finite checks.
- `proof-layout`: 16 items, 28 numbered steps, 0 defects.
- `rendercheck`: 18 item/page files, 0 errors, 0 warnings.
- `manifest-deps`: 16 items, 0 normalized, 0 errors; manifest deps match the carriers.
- `content-policy`: 16 items, 0 errors, 0 warnings.
- Focused `depcheck`: 16 focus items, dependency closure 1,133 items and 379 pages, 0 errors, 0 warnings.
- Scoped dependency-level recomputation: 16 items, 0 cycles, 0 mismatches; current labels are the table above.
- Final `source-fetch-check` without stamping: 2/2 verified, 0 documented drops.
- Source/coverage reconciliation: the two independent sources each cover all 16 manifested items (32 item/source dispositions); both have verified fetch stamps and no source-resolution failures.
- Read-only audit of the 16 Step1 records: all are escalated, owner=false, and their dependency arrays match the current carrier declarations; no existing record was overwritten.

All 16 target items are recorded `escalated`, not `ready`: direct proofs/definitions and placements are complete, but the transitive page closure has draft/missing carriers, several required QC access/cost items retain owner-held escalations, `def-qc-coherent-function-oracle` has a stale readiness hash, and the explicit batch-9 circuit-semantics edge is absent from the assigned batch prerequisite list. Step1 records do not imply independent mathematical approval.

## Owner focused repair after native44 drain

The original handoff and sixteen escalation records remain historical evidence. Root confirmed successful native44 completion; process inspection found no writer. Exact before files for all16 item sources, original16 escalation receipts, manifest/contracts/coverage/notes/cross-edge evidence and both pages are preserved under `.autopilot/owner-qa20-cycle2-preimages/quantum-computing-algorithms-60-2026-10-15/`.

The first-order and Suzuki procedures now distinguish the ideal exact exponential word from the actual supplied unitary-call word, with identical reversed execution order (later gates multiply on the left). Ideal mathematical formulas and all error bounds are unchanged. The higher-order resource statement/proof separates repeated term-call contributions from additionally charged Q_wrap/G_wrap. First-order resource facts/proof explicitly handle t=0 as an identity with no calls.

Same-owner affected-consumer checks cover both algorithms, first-order resource theorem, Suzuki cancellation lemma, and Suzuki resource theorem. Cancellation uses the unchanged ideal analytic word, not approximate calls. Error/resource theorems keep exact ideal truncation error and sum actual unitary call errors by telescoping; target operations are well-defined through the supplier's exact clean/dirty restoration contracts. Current scoped manifest/source closure has no further QA21 item edge; future unwritten consumers receive no approval.

Actual QC8 control/inverse, QC9 chronology and QC10 total-XOR/workspace interfaces agree with used clauses. QC14 cost/full-list interfaces are explicit access data and do not assert free wrappers or polynomial generation for arbitrary matrices/time codes. Cross-edge evidence now records used-interface inspection rather than treating draft pages or old owner holds as absent mathematical bodies. No independent supplier approval or readiness decision is claimed. Root retains all numeric/binding/certification work.
