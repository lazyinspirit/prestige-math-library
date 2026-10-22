# Batch 107 authoring notes — Temperley–Lieb, Hecke normalization and quantum Potts chains

Run: `physics-non-fluid-129-2026-10-21-r2` · batch 107 · role beta.

## Plan and design reconciliation

The owner override `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was absent when checked. I read the complete `qsmx-temperley-lieb-models` section in `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md` and its exact item inventory. The design retains the open-chain Potts clock/shift convention, loop parameter $\delta=\sqrt Q$, Hecke generators $g_i=qI-e_i$, the $Q=4,q=1$ symmetric-group specialization, and the spin-half $\delta=2$ exchange interface. It expressly does not identify the non-real $Q=2,3$ Hecke generators with a unitary/star representation or infer faithfulness from the algebraic relations.

The two `plan-spec.json` entries match the assigned A/B IDs, titles, `quantum-statistical-mechanics` category, `physics` library, companion relation, orders 911/912, and the three A-page requirements. Their empty planned item arrays are staging placeholders; the full design inventory specifies three planned A items and one planned B example. No page-level plan/design conflict was found. The required pages `qsm-interacting-exact-models`, `temperley-lieb-towers-and-physics-models`, and `nrqmx-exchange-representations` match the design. The first is an existing published physics page; the second is an imported published mathematics page; the third is the current batch-48 mathematics page.

I added one A-page mathematical helper, `lem-qsmx-potts-finite-gibbs-density`, because the design's construction route requires a complete finite-dimensional proof that the Hermitian Potts matrix has a normalized Gibbs density at every finite real $\beta$. The helper proves self-adjointness from the explicit projector matrices and proves positivity and normalization from the finite spectral decomposition. No supplier owned by another pair was authored or edited. The A page has four items and the B page one example, well below the 100-item cap.

## Inventory and dependency levels

The batch-level dependency file assigns batch 107 dependency level 1 and requires batch 48. Item levels below are computed from in-run `deps`; imported mathematical suppliers are external context and do not raise an in-run level. The `justified_by` result for the definition is recorded as its well-definedness proof, not as a scheduling edge.

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-qsmx-quantum-potts-hamiltonian` | none (`justified_by` is the local Gibbs well-definedness result) | 0 |
| `lem-qsmx-potts-finite-gibbs-density` | `def-qsmx-quantum-potts-hamiltonian` | 1 |
| `thm-qsmx-potts-tl-and-hecke` | `def-qsmx-quantum-potts-hamiltonian` | 1 |
| `thm-qsmx-spin-singlet-exchange-interface` | `thm-qsmx-potts-tl-and-hecke`; `thm-nrqmx-spin-half-temperley-lieb` (batch 48) | 2 |
| `ex-qsmx-potts-two-site` | `def-qsmx-quantum-potts-hamiltonian`; `lem-qsmx-potts-finite-gibbs-density`; `thm-qsmx-potts-tl-and-hecke` | 2 |

The external mathematical dependency set is entirely mathematical. It includes the pinned Potts clock/shift definition and matrix-relation lemma, abstract Temperley–Lieb presentation, normalized type-A Hecke definition, the symmetric-group Coxeter-presentation theorem, finite complex spectral theorem, real exponential positivity/injectivity, trace definition, and the inner-product/self-adjoint definitions. The local Potts definition and relation-lemma bytes match their recorded root pins (`faf5c61a…39ecce` and `46b1ac67…52140c`). No physical premise, observation, or statistical inference is a logical supplier.

## Current prerequisite inspection and readiness

The published Potts definition fixes $R_Q|a\rangle=e^{2\pi ia/Q}|a\rangle$, $M_Q|a\rangle=|a-1\pmod Q\rangle$, the open endpoint range, and the selected $q$ values. The published Potts matrix lemma proves $e_i=\sqrt Q P_j$ or $\sqrt QD_{j,j+1}$ and all TL relations for $Q=2,3,4$. The published TL presentation fixes $u_i^2=\delta u_i$, both neighboring triple products, and distant commutation. The published normalized Hecke definition uses $H_i^2=1+(v^{-1}-v)H_i$; the specialization $v=q^{-1}$ gives the exact quadratic used here. The published Coxeter theorem proves the adjacent-transposition presentation used only for $Q=4$. These are imported mathematical suppliers and remain read-only.

For the batch-48 supplier `thm-nrqmx-spin-half-temperley-lieb`, I called `loadStep1Record` and `step1Decision` from the current physics support modules. The current record is owner-recorded `ready`, hash-bound to `dcc3c4ecbe3ef482b802984b7884a43d3dc5d46253e64ade0c11f42a59ec1035`, with direct dependencies `def-nrqmx-spin-half-tensor-chain`, `def-temperley-lieb-diagram-category`, `def-temperley-lieb-generator-presentation`, `lem-nrqmx-temperley-lieb-star-involution`, `prop-nrqm-orbital-and-spin-finite-spin-matrices`, and `thm-nrqmx-schur-weyl-exchange-blocks`. I read its complete current proof and checked the consuming use against its actual $N\ge1$ hypotheses, swap convention, singlet projector, and loop-weight-two relation. Its `draft` label is not a readiness gap; the record supplies current Step-1 authoring readiness, not independent acceptance.

The published `qsm-interacting-exact-models` page and imported `temperley-lieb-towers-and-physics-models` page were inspected as page context. Their unrelated dimer, Jones-tower, direct-integral, and scaling claims are not used as item-level proof premises. The imported Potts items and the batch-48 NRQM theorem are the actual logical suppliers.

## Full-text source reading and retrieval

The coverage ledger records each locator, supported item, harvested-result disposition, and the source-fetch stamp. Nichols and Penneys are independent Potts/Temperley–Lieb treatments; Penneys is a full 66-page graduate course note. The other sources fix the Hecke, spin-half, and finite Boltzmann conventions. The local proofs do not rely on diagrams or on a source's assertion in place of a derivation.

| Source | Inspected locator and supported claims |
|---|---|
| [A. Nichols, *The Temperley-Lieb algebra and its generalizations in the Potts and XXZ models*](https://arxiv.org/pdf/hep-th/0509069) | §2 and §§2.1.2–2.1.4, equations (2.1), (2.2), (2.4), (2.6)–(2.10). Supports the open $Q=2,3,4$ clock/shift matrices, loop weights, chosen $q$ values and source Hamiltonian convention. Its uniform integrable Hamiltonian is not generalized into an integrability claim here. |
| [D. Penneys, *Exercises in Quantum Algebra*](https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf) | Complete 66-page notes fetched; Chapter 2 §§2.1.1–2.1.3. Supports the algebraic versus diagrammatic TL normalization, loop factor and cap/cup convention. |
| [J. de Gier and P. Pyatov, *Factorised solutions of Temperley-Lieb qKZ equations on a segment*](https://webdoc.sub.gwdg.de/ebook/serien/e/mpi_mathematik/2008/5.pdf) | §2.1, Definition 1, equation (2.1). Supports the exact $(g_i-q)(g_i+q^{-1})$ Hecke normalization and $q\ne0$ condition. Its generic semisimplicity condition is not used. |
| [Y. Ikhlef, J. L. Jacobsen, and H. Saleur, *A Temperley-Lieb quantum chain with two- and three-site interactions*](https://arxiv.org/pdf/0901.4685) | Introduction and §2, equation (2), PDF pp. 1–4. Supports the spin-half loop-weight-two singlet normalization; the local item proves the interface identity directly. |
| [D. Arovas, *Thermodynamics and Statistical Mechanics*, §7.4](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method) | Full §7.4 page fetched; inspected “The variational principle” and the finite Ising density-matrix discussion. Supports the finite Boltzmann-weight/partition convention only; the local spectral proof handles the noncommuting finite matrix. |

`node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-107.coverage.json --stamp` succeeded: 5/5 full-text sources verified on the first fetch, zero recovery retries, zero drops. Byte counts, page counts/text length, and SHA-256 prefixes are in the coverage ledger. `source_resolution` is empty because no retrieval failed.

## Cross-batch checks and claim limits

The cross-batch JSON contains exactly the in-run page edge to batch 48 and the item edge to its current spin-half TL theorem; both are `verified` only for the scoped interface check. Published page prerequisites and pinned published mathematics remain external context and are not placed in the cross-batch ledger. The consuming spin-half theorem states the $q=1$ equality internally to that representation. It does not identify the $Q=4$ Potts space with a spin-half tensor space or infer a star-preserving/nonzero-$q$ unitary representation. No semisimplicity, faithfulness, thermodynamic-limit, phase-transition, material, or experimental claim is made.

## Scoped check results

The proof precheck's canonical form was applied to the Gibbs lemma, Potts TL/Hecke theorem and two-site example. Contracts now map every final numbered step and each fact-use; the theorem's Coxeter step cites its current braid/commutation steps (1.3–1.4), and the example's beta-zero boundary cites the spectral definition explicitly.

Final scoped checks on the authored carriers passed:

- `precheck.mts`: 4 proof-bearing items, all direct, zero failures.
- `proof-layout.mjs`: 5 items, 16 proof steps, zero defects.
- `proof-contract.mjs --strict`: 5/5 items, zero errors and warnings.
- `content-policy.mjs`: 5 scoped items, zero errors and warnings.
- `rendercheck.mjs`: all 5 items and both pages passed KaTeX/YAML checks.
- `depcheck.mjs --items-file`: the five assigned items passed focused dependency and prerequisite-cycle checks; the closure scan covered 1,027 items and 473 pages.
- `source-fetch-check.mjs`: all 5 source records remain fetch-verified and resolved, with zero drops. The recorded first-fetch stamps and full-text locators remain current.

The scoped item-level dependency computation agrees with the manifest: definition level 0; Gibbs lemma and Potts TL/Hecke theorem level 1; spin interface and two-site example level 2. The current run graph recomputed in memory as batch 48 at level 0 and batch 107 at level 1 requiring batch 48. The shared `batch-dependency-levels.json` check reports `Stale batch dependency levels`; it was left untouched as owner-managed run state.

The run-wide item-level check is not clean outside this assignment: across 550 items and 258 pages it reports 99 errors, comprising 96 empty scaffold inventories in other batches and three unrelated metadata mismatches: `def-gr-fx-nondegenerate-local-energy-estimate` (recorded 0, computed 1), `lem-nrqmx-finite-symplectic-implementers` (recorded 2, computed 1), and `lem-qsmx-local-expectation-locality` (recorded 0, computed 1). No batch-107 item has a dependency-level error.

The in-memory cross-batch collector found exactly the two declared batch-107 edges: `qsmx-temperley-lieb-models` → `nrqmx-exchange-representations` and `thm-qsmx-spin-singlet-exchange-interface` → `thm-nrqmx-spin-half-temperley-lieb`. Both match the cross-batch JSON and are `verified` for the scoped interface check only, not independent proof approval. The NRQM supplier's current Step-1 row remains hash-bound and ready.

Step-1 readiness records were missing for all five new items before final recording. The local mathematical suppliers are complete and current; imported mathematical pins match; the batch-48 supplier was checked against its full current proof and readiness record. After recording each with `step1-decisions.mjs record` and no owner override, `step1Decision` returned `closed: true`, `decision: ready` for all five assigned items, with current hashes.
