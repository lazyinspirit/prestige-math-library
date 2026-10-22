# Batch 56 notes — Variational approximation, residual certificates and propagation errors

Run `physics-non-fluid-129-2026-10-21-r2`; owner `beta`; assigned pair `nrqmx-certified-spectral-computation` / `nrqmx-certified-spectral-computation-examples`.

## Plan and design reconciliation

- No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was present. The assigned design section, its complete prose scaffold, detailed inventory, current `plan-spec.json`, and batch dependency evidence were inspected. Page IDs, title, category, mathematics library, companion, order 809/810 and the three A-page prerequisites agree. `plan-spec.json` has empty item arrays as planning placeholders; the detailed inventory has four A items and two B items. Both pages are below the 100-item cap.
- The design scope and warnings are retained: the algorithm consumes exact form and Gram matrices; quadrature and eigensolver error require separate enclosures; a grid vector is not automatically in the continuum form domain; a discrete residual is not a continuum residual without domain and action checks; the propagation result is conditional on operator-domain regularity and an actual residual; and a nearby spectral point does not identify an eigenvalue index without gap or counting data. No quantum-computing operation, WKB error claim, or time-step error claim is made.
- The plan-listed page prerequisites are preserved, including `nrqmx-floquet-control`; no item in this batch uses a Floquet-specific premise. The page edge remains an explicit page-level context requirement.
- The inventory lists `thm-nrqmx-form-min-max` as a prerequisite of the finite matrix algorithm. The exact algorithm only forms a positive Gram matrix, applies finite-dimensional Hermitian spectral theory, and transforms the generalized eigenvectors back; the global continuum min–max theorem is not needed to define or prove that procedure. Its unnecessary logical edge was removed from the algorithm, while the Ritz comparison theorem retains the min–max supplier as a direct dependency. The finite-matrix procedure makes no operator-domain claim.
- The oscillator example's design route says to use the already-authored coefficient-domain oscillator theorem, but its inventory omits that direct edge; the exact published supplier `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization` was added. The example also cites the unbounded spectral theorem directly because its form-domain inclusion proof uses the spectral domain formula. The residual and propagation proofs add the direct PVM-measure, unbounded-calculus, Stone-generator, Bochner, FTC and norm-inequality suppliers they actually use. These changes strengthen prerequisite coverage; no item statement or hypothesis was weakened.

## Inventory, dependencies and levels

The complete dependency arrays and roles are identical in the six item carriers and `research/physics-non-fluid-129-2026-10-21-r2-batch-56.pages.json`. Levels count only in-run item suppliers; external published suppliers do not raise a level.

| Item | Page | Level | In-run suppliers |
|---|---|---:|---|
| `alg-nrqmx-rayleigh-ritz-procedure` | A | 0 | — |
| `thm-nrqmx-ritz-upper-bounds` | A | 2 | `alg-nrqmx-rayleigh-ritz-procedure` (0), `thm-nrqmx-form-min-max` (batch 44, 1), `thm-nrqmx-closed-form-representation` (batch 44, 0) |
| `thm-nrqmx-spectral-residual-certificate` | A | 0 | — |
| `thm-nrqmx-schrodinger-residual-bound` | A | 0 | — |
| `ex-nrqmx-oscillator-ritz-exact` | B | 3 | `thm-nrqmx-ritz-upper-bounds` (2), `thm-nrqmx-closed-form-representation` (batch 44, 0) |
| `cex-nrqmx-small-residual-no-label` | B | 1 | `thm-nrqmx-spectral-residual-certificate` (0) |

All in-run suppliers precede their consumers across the A/B pair. No cycle or unresolved item prerequisite was found. The cross-batch JSON has six exact edges: three declared page prerequisites and three direct item edges into batch 44. All six are `verified`; they record scoped interface checks, not independent proof approval.

The recorded scheduling graph says batch 56 is level 3 after batches 44 and 55. `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` reports that the shared snapshot is stale against the current run manifests. The shared snapshot was left unchanged for the owner. A full current item-level calculation confirms all six labels above; the run-wide check's 24 errors are empty inventories in other pages and none names a batch-56 item.

## Sources, reading and retrieval

The A page has two independent full-text treatments, one book and one full lecture-note course. The B example has a full-text quantum-mechanics textbook. Source locators, exact harvested claims, item mappings, dispositions, retrieval attempts, alternative arguments and dependencies are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-56.coverage.json`.

- Phan Thành Nam, *Functional Analysis II*, LMU lecture notes, Winter 2020–2021, [full PDF](https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf). The full 261-page text was inspected at Chapter 2 §2.3, printed pp.17–18, for the lower-bounded self-adjoint min–max principle and essential-spectrum threshold. It supports the finite variational context and Ritz theorem. Fetch stamp: 6,244,680 bytes, 261 pages, SHA-256 prefix `422cbe00bb3cdf3b`.
- Theo Bühler and Dietmar A. Salamon, *Functional Analysis*, ETH Zürich lecture text (2017), [full-text copy](https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf). The complete 452-page text was inspected at Chapter 6 §§6.4–6.5, printed pp.336–351 (unbounded functional calculus and spectral PVM), and Chapter 7 Theorem 7.40 and proof, pp.400–401 (self-adjoint generator and unitary group). The local residual and Duhamel estimates are proved in full. Fetch stamp: 1,912,109 bytes, 452 pages, SHA-256 prefix `8ffd5f868b480006`.
- James Binney and David Skinner, *The Physics of Quantum Mechanics*, [Oxford-hosted full PDF](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf). The full 310-page text was inspected at Chapter 3 §3.1, printed pp.37–40 (PDF pp.44–47), for the harmonic-oscillator ladder spectrum and ground state. The exact scaled operator, coefficient domain and complete Hermite basis come from the inspected published mathematical oscillator supplier, not from this physics derivation. Fetch stamp: 3,368,948 bytes, 310 pages, SHA-256 prefix `f19649bce67898ee`.
- Gerald Teschl, *Mathematical Methods in Quantum Mechanics*, 1st ed. (2009), was read at §3.1, Theorems 3.7–3.8 and Corollary 3.9, pp.97–98; §4.3, Theorem 4.10, pp.117–118; §4.4, Theorems 4.12–4.13, pp.119–120; §5.1, Theorem 5.1 and proof, pp.123–124; and §8.3, oscillator material, pp.178–179. The author-hosted PDF URL returned HTTP 502 on the initial fetch and five retries for each A/B coverage row. It was removed as an active URL; complete local proofs and the active sources above cover the relevant claims. Both exact histories and per-item alternatives remain recorded.
- The ETH-hosted URL for the Bühler–Salamon text returned `ECONNREFUSED` on the initial fetch and five retries. The complete text was read from the separate university-hosted copy listed above, which is fetch-stamped. The failed ETH endpoint has a per-item alternative proof record and is not an active citation.

`source-fetch-check` reports 3/6 entries fetch-stamped and 6/6 resolved, with three documented endpoint drops (Teschl on A and B, and the ETH URL). `coverage-checklist --require-destination` reports two pages, 13 harvested results, zero errors and zero warnings. The failed endpoints are retrieval dispositions only; mathematical coverage is not waived.

## Scoped checks and readiness

- `precheck.mts`: five proof-bearing items passed; the algorithm is a nonproof definition/algorithm carrier.
- `proof-layout.mjs`: six assigned items, 17 numbered steps, zero defects.
- `proof-contract.mjs --strict`: five proof-bearing items, zero errors and zero warnings. The contracts were regenerated from the final facts and steps and include exact supplier excerpts, boundary cases, finite checks and risk reviews.
- `depcheck.mjs --items-file`: six selected items passed; prerequisite cycle closure covers 1,855 items and 293 pages. Scoped physics-content validation: six items and two pages, zero errors.
- `content-policy.mjs --manifest-only --authored` and full manifest mode: six items, zero errors and zero warnings. `manifest-deps.mjs`: six items, no missing dependency arrays.
- `rendercheck.mjs`: all six items and both pages passed. `source-fetch-check` and `coverage-checklist` passed as detailed above.
- `item-dependency-levels.mjs check --run` reports 24 unrelated empty-inventory entries; its current calculation matches all six batch-56 dependency labels. The batch-wide `step1-decisions` snapshot reports 729/776 items ready, with other run work remaining. `loadStep1Record` and `step1Decision` confirm all six assigned records are current `ready` records.
- No tests were run. The six readiness records document Step 1 authoring inputs and placement only; they do not constitute independent proof approval.
