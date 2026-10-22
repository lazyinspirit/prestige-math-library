# Batch 52 authoring notes — finite-mode Fock, Gaussian and Bogoliubov foundations

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pair: `nrqmx-finite-mode-gaussian` and `nrqmx-finite-mode-gaussian-examples`

## Inventory and plan reconciliation

The source design and inventory specify these seven planned items: `def-nrqmx-finite-mode-symplectic-data`, `thm-nrqmx-finite-metaplectic-construction`, `thm-nrqmx-finite-mode-bogoliubov`, `lem-nrqmx-williamson-normal-form`, `thm-nrqmx-gaussian-covariance-uncertainty`, `ex-nrqmx-single-mode-squeezing`, and `cex-nrqmx-infinite-mode-vacuum-warning`. The canonical shared `research/plan-spec.json` contains the two pages and their requirements, but both page objects have `items: []`; the source design inventory supplies the item interfaces and proof routes. The plan conflict is recorded here; the read-only shared plan was not changed.

Five local A-page carriers were needed to make the planned route complete: the occupation-basis Fock–Schrödinger identification, singular-block-safe symplectic generator factorization, explicit individual finite symplectic implementers, the Maslov phase-parity lemma, and Schwartz density in the joint quadrature graph norm. The last carrier supplies the full core argument used by the Gaussian uncertainty theorem. The planned metaplectic theorem now proves the continuous two-fold cover from the full finite-mode Maslov kernel argument. The Bogoliubov theorem depends on that completed theorem as designed. The B warning depends only on finite-mode results and expressly does not infer an infinite-mode no-go theorem.

Both page manifests preserve the planned page IDs, order, category, library, titles, companions, and `requires`. The A page has ten items and the B page has two examples, well below the 100-item page cap. All item domains are `mathematics`; all declared dependency roles are `mathematical-premise`.

## Dependencies and levels

Local item levels, recomputed from actual in-run `deps`:

| Level | Items |
|---:|---|
| 0 | `lem-nrqmx-finite-mode-fock-schr-identification`, `lem-nrqmx-finite-symplectic-generator-factorization` |
| 1 | `def-nrqmx-finite-mode-symplectic-data`, `lem-nrqmx-finite-symplectic-implementers` |
| 2 | `lem-nrqmx-finite-maslov-phase-parity`, `lem-nrqmx-williamson-normal-form`, `lem-nrqmx-schwartz-joint-quadrature-graph-core` |
| 3 | `thm-nrqmx-finite-metaplectic-construction` |
| 4 | `thm-nrqmx-finite-mode-bogoliubov` |
| 5 | `thm-nrqmx-gaussian-covariance-uncertainty`, `cex-nrqmx-infinite-mode-vacuum-warning` |
| 6 | `ex-nrqmx-single-mode-squeezing` |

The run-level batch schedule records batch 52 at level 1 with prerequisite batch 49. The scoped page edge to `nrqmx-weyl-galilei-representations` and the item edge to `thm-nrqmx-finite-weyl-uniqueness-interface` are in `physics-non-fluid-129-2026-10-21-r2-batch-52.cross-batch-dependencies.json` as `verified`. The finite-Weyl item was checked with the current `loadStep1Record` and `step1Decision`: the current record is closed and ready. Its actual statement assumes AC, nonzero central parameter, irreducibility, regularity, and finite phase-space dimension; the local system uses the same hypotheses with `hbar > 0`. This is a scoped dependency check, not an independent approval.

The Fock supplier is used with its Countable Choice hypothesis; AC is explicitly carried wherever the Stone–von Neumann, spectral, or density-eigen-expansion arguments require it. Imported math statements and root originals remain read-only.

## Proof and source decisions

The finite-mode quadratures use `Q_j = sqrt(hbar/2)(a_j+a_j*)`, `P_j = -i sqrt(hbar/2)(a_j-a_j*)`, with interleaved `R` and `J`; grouped `(q,p)` order is used only for block factorization and then translated by a fixed permutation. Weyl labels have inverse-square-root-action units, quadratures have square-root-action units, and covariance has action units. The Fock-to-Schrödinger unitary and the one-mode Hermite recurrence are proved/checked before use. Every Weyl formula is bounded; unbounded identities are limited to the stated transported Schwartz or finite-Hermite cores.

The full Robbin–Salamon 1992 paper was downloaded and read through the Maslov conventions, finite-dimensional Hessian/signature calculation, the time-sliced unitary propagator, Theorem 8.5 and proof, and the group/double-cover section. Their complete 1993 Maslov-index paper was also fetched and read through the endpoint-stratum proof and Corollary 4.12. The kernel phase `exp(i pi mu/2)` and the endpoint identity `(-1)^(mu+r/2)=sign det B` show that two normalized homogeneous quadratic lifts in a generating chart differ by sign. The generator factorization moves every endpoint into such a chart, while a one-mode `2 pi` oscillator loop acts as `-I`; local generating kernels give the two continuous sheets. The earlier de Gosson mirror failure and incomplete publisher preview remain in coverage history, and the successful full-text alternative resolves that source gap.

The two independent page treatments are Phan Thành Nam's complete mathematical lecture-note sections and the complete Weedbrook et al. Gaussian review. Arvind et al. supplies a further finite-dimensional symplectic treatment. The local proof does not rely on Weedbrook's statement that `i Omega V` is Hermitian for general `V`; that assertion is not valid without additional commutation and is expressly marked out-of-scope in coverage. The local Williamson proof diagonalizes the real skew matrix `V^(1/2) J V^(1/2)`.

The added joint quadrature graph-core carrier is proved locally from the Fourier characterization of `W^{1,2}`, weak Leibniz rule, smooth cutoffs, compact-smooth Sobolev density, and dominated convergence. The full relevant Kinnunen text (Chapter 1 §§1.7–1.8, Theorem 1.19, the complete Theorem 1.21 proof, and Remark 1.22) and Laugesen text (Chapter 3 §§3.2–3.4, Proposition 3.7, and Theorem 3.8 discussion) were inspected and are fetch-stamped in coverage. Kinnunen provides the full global smooth approximation proof; Laugesen's global theorem refers to an external partition-of-unity argument, so that sketch is contextual only. The local carrier supplies the weighted position-plus-derivative estimate explicitly.

The Gaussian sufficiency argument constructs geometric thermal weights and checks their characteristic function by a coherent-state Gaussian integral; it does not assume a cited Williamson theorem or thermal-state existence without proof. The squeeze item fixes its pullback orientation explicitly. The repeated-squeeze warning records only the finite-`N` mean number and vacuum overlap. No measurement, experiment, infinite-dimensional implementability theorem, or statistical inference is asserted.

The de Gosson book candidate's mirror returned HTTP 404 and the publisher preview contained only two pages. An alternative search found both complete Robbin–Salamon papers; the proof gap was closed and source retrieval stopped at that success. The incomplete candidate remains `not-used-incomplete-access` with its two actual attempts and search history in coverage. No `source_resolution` drop/escalation was created: `source-resolution.mjs` only validates a source as dropped after an initial failure plus five failed recovery attempts, while this candidate was superseded by a successful full-text alternative. The per-item replacement proof and exact dependencies are in the local metaplectic item, batch manifest, and proof contract; coverage records the supporting Robbin–Salamon items and dispositions.

## Readiness and remaining gates

All assigned arguments are authored, including the formerly unsupported metaplectic covering clause. The final scoped checks report:

- Scoped dependency-level calculation: all 12 batch items match their computed levels; no local cycles.
- `precheck`: 12/12 pass.
- `proof-layout`: 12 items, 41 steps, 0 defects.
- `proof-contract --strict`: 12 items, 0 errors, 0 warnings.
- `content-policy`: 12 items, 0 errors, 0 warnings.
- `depcheck`: 12 selected items and both pages checked; prerequisite closure 2,237 items / 383 pages; 0 errors or warnings.
- `rendercheck`: all 12 items and both pages checked; 0 errors.
- `source-fetch-check`: 7/7 sources fetch-verified and resolved; 2 newly stamped.
- `coverage-checklist`: 1 A page, 20 harvested results, 0 errors or warnings.

At check time, the run-wide `item-dependency-levels check --run` reported 81 errors across 258 pages: 78 still-empty inventories in other batches and stale levels on `thm-nrqmx-periodic-flux-spectrum` (1 vs computed 3), `pthm-nrqmx-flux-ring-spectrum` (3 vs 4), and `ex-nrqmx-flux-half-crossing` (4 vs 5). The same exported calculation on this final batch-52 manifest returned 12 items and 0 local errors. `batch-dependency-levels check --run` reports the shared run-level file stale after manifest changes. Both other-batch manifests and the owner-controlled run schedule remain untouched. All 12 assigned items have current `ready` Step 1 records with their direct dependencies, placement, proof contract, and source evidence recorded; all 12 re-open as current. These authoring records do not replace independent review or later verdicts.
