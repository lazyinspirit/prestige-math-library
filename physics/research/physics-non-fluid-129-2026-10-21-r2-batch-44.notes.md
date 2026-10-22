# Batch 44 notes — Semibounded forms, variational spectra and Birman–Schwinger

## Plan and design comparison

The run-specific owner-authoring-direction file was absent. The assigned design is
in `research/plan-non-relativistic-quantum-mechanics-frontier-expansion-track.md`
and the linked complete prose scaffold/inventory. The design's four A items and
two B items, page IDs, titles, category, library, companion, page prerequisites,
operator conventions, warning set, and proof routes match `plan-spec.json` and
the batch task. `plan-spec.json` has empty item arrays; these are planning
placeholders, while the detailed scaffold and inventory carry the six assigned
items. No conflicting item statement was found.

The design statements use the free form and real-space Yukawa kernel in the
Birman–Schwinger route without assigning them item-level suppliers. Two local A
items were therefore added before their consumers: the free Laplacian form
domain/realization and the Yukawa resolvent kernel. The A page has six items and
the B page two, both below the 100-item cap. No claim was weakened or omitted.

## Item inventory, dependencies and levels

Levels are one plus the maximum in-run supplier level, or zero with no in-run
supplier. Suppliers precede consumers in the item manifest.

| Item | Page | Level | In-run suppliers |
|---|---|---:|---|
| `thm-nrqmx-closed-form-representation` | A | 0 | — |
| `thm-nrqmx-rank-one-resolvent` | A | 0 | — |
| `thm-nrqmx-free-laplacian-form-domain` | A | 1 | `thm-nrqmx-closed-form-representation` |
| `thm-nrqmx-form-min-max` | A | 1 | `thm-nrqmx-closed-form-representation` |
| `lem-nrqmx-yukawa-resolvent-kernel` | A | 2 | `thm-nrqmx-free-laplacian-form-domain` |
| `thm-nrqmx-birman-schwinger-negative-spectrum` | A | 3 | `thm-nrqmx-closed-form-representation`, `thm-nrqmx-form-min-max`, `thm-nrqmx-free-laplacian-form-domain`, `lem-nrqmx-yukawa-resolvent-kernel` |
| `ex-nrqmx-attractive-separable-bound-state` | B | 1 | `thm-nrqmx-rank-one-resolvent` |
| `cex-nrqmx-trial-vector-domain` | B | 2 | `thm-nrqmx-free-laplacian-form-domain`, `thm-nrqmx-form-min-max` |

The batch-level dependency calculation places batch 44 at level 1 after batch
43. The page prerequisite `nrqmx-operator-realizations` is the batch-43 A page
(level 0); all five current Step 1 records on that page were checked with
`loadStep1Record` and `step1Decision` and returned ready. Its extension-data
statement identifies operator domains and trace data as part of an operator
realization. The scoped page edge is recorded as `verified` in the cross-batch
dependency array. The B-to-A companion edge is within this batch.

Direct mathematical dependencies are declared on the item carriers and
manifest. In particular, Birman–Schwinger compactness uses the exact local
supplier for square-integrable kernel operators; the free form proof cites the
Schwartz Fourier automorphism; the Yukawa convolution proof cites the exact
Tonelli/Fubini, translation-invariance, polar-coordinate, Schwartz-density, convergence, Cauchy–Schwarz, and intermediate-value suppliers. Mathematical
items depend only on mathematical prerequisites.

## Conventions and scope retained

All operator realizations include their domains. Hilbert inner products are
linear in the first variable in the authored items. Tübingen/LMU notes and the
Albeverio–Kurasov text use different displayed pairing conventions in places;
the source comparisons were translated by conjugation to the local convention.
The free Fourier convention is
`u-hat(xi) = integral exp(-2 pi i x dot xi) u(x) dx`, so `-Delta` has multiplier
`4 pi^2 |xi|^2` and the Yukawa transform is
`(4 pi^2 |xi|^2 + kappa^2)^(-1)`.

The associated-form evolution convention is `A = -H`; the carrier states this
sign explicitly and uses the positive Hamiltonian `H_q` for the form theorem.
The perturbation closure proof uses a form bound and shifted-norm equivalence;
Kato–Rellich is used only for bounded operator perturbations. The
Birman–Schwinger model is dimensionless with `H0 = -Delta`; restoring
`hbar^2/(2m)` rescales the coupling potential and spectral parameter. Its
counting statement is strict below `-kappa^2`; the LMU notes state an inclusive
endpoint count, so the authored proof establishes the strict version directly
by the negative form index and treats equality through the separate eigenspace
correspondence. Threshold energy zero, inverse-square singularities and
unbounded negative potentials remain outside this bounded compact-support
claim. The rank-one model is a nonlocal exactly soluble model, not a local
Coulomb Hamiltonian. The counterexample assigns no finite form value to a
vector outside the free form domain.

## Source reading, retrieval and disposition

Coverage and fetch stamps are in
`physics-non-fluid-129-2026-10-21-r2-batch-44.coverage.json`.

- Phan Thanh Nam, *Functional Analysis II*, LMU course notes, Winter 2020–2021,
  Chapter 2 §§2.2–2.5 and Chapter 3 §3.3 (printed pp.14–18, 25–27, 42–45).
  The full 261-page PDF was inspected. It supports the min-max, free-operator,
  Birman–Schwinger and Yukawa items, with result-level dispositions in coverage.
  Fetch stamp: 6,244,680 bytes, 261 pages,
  SHA16 `422cbe00bb3cdf3b`.
- Marcello Porta, *Mathematical Quantum Theory*, Tübingen lecture notes (2019),
  Sections 3.1, 3.6 and 4.4 (printed pp.7–8, 23–24, 41–42). The full 133-page
  PDF was inspected. Theorem 4.65 gives the closed semibounded form
  representation; the Fourier sections provide an independent transform
  convention check. Fetch stamp: 1,009,352 bytes, 133 pages,
  SHA16 `bc08ca3bb12b3b24`.
- S. Albeverio and P. Kurasov, *Singular Perturbations of Differential
  Operators: Solvable Schrödinger Type Operators*, Chapter 1 §1.1.1,
  Theorem 1.1.1 and proof (printed pp.9–10). This publisher-hosted book preview
  gives the rank-one resolvent formula for bounded perturbations of possibly
  unbounded self-adjoint operators. Fetch stamp: 2,372,443 bytes, 45 pages,
  SHA16 `ecd861fb23aae561`.

The Teschl 2009 author-hosted first-edition URL returned HTTP 502 on the initial
fetch and five recovery retries. The Teschl 2006 manuscript mirror returned
HTTP 404 on the initial fetch and five recovery retries. Both exact endpoints
are recorded as dropped, not the editions. The second full manuscript was
inspected in the browser, but neither failed endpoint is used as a stamped
source. Search records, all six attempts for each endpoint, and a complete
alternative argument/dependency record for each harvested result are retained
in the coverage file. The Cambridge-hosted Albeverio–Kurasov preview replaces
the rank-one formula source; complete local proofs plus the active LMU and
Tübingen notes cover the remaining items. No source-reading claim is based on a
fetch stamp alone.

## Scoped checks and readiness

The final scoped checks report:

- Batch dependency graph: batch 44 is level 1 after batch 43. The scoped item
  graph contains 8 items, maximum level 3, with no cycles or level mismatches.
- `precheck`: 8 items passed.
- `proof-layout`: 8 items, 44 numbered steps, 0 defects.
- `proof-contract --strict`: 8 items, 76 exact supplier citations, 64 boundary
  dispositions, 6 finite checks, 0 errors and 0 warnings.
- `physics-content`: 8 items and 2 pages, 0 errors.
- `depcheck`: 8 selected items; prerequisite closure covers 1,615 items and 292
  pages, with no unresolved references or cycles.
- `content-policy`: 8 items, 0 errors and 0 warnings; `manifest-deps`: 8 items,
  no missing dependency arrays.
- `rendercheck`: 8 items and 2 pages, 0 errors or warnings.
- `coverage-checklist`: 1 A page, 17 harvested results, 0 errors or warnings.
- `source-fetch-check`: 3 active sources fetch-verified and 2 exact source
  endpoints resolved through documented drops; no source was left unresolved.
- Scoped `physics-content` and item-dependency-level checks both pass.

All eight final items have current Step 1 `ready` records. Each record lists the
item's exact direct dependencies and has a hash-current decision from
`loadStep1Record`/`step1Decision`. Every direct dependency was examined at its
actual statement and proof interface; all carriers exist, and the in-run DAG
levels are reflected in the manifest. Both pages remain below the 100-item cap.
These are authoring-readiness records, not independent proof approvals.
