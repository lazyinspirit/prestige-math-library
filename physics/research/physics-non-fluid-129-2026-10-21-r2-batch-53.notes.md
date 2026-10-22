# Batch 53 authoring notes — uniform magnetic fields, flux topology and Pauli coupling

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pair: `nrqmx-magnetic-geometry` and `nrqmx-magnetic-geometry-examples`

## Inventory and plan reconciliation

The detailed frontier design and inventory specify four planned A-page items
(`post-nrqmx-magnetic-model-extension`, `pthm-nrqmx-landau-direct-integral`,
`pthm-nrqmx-flux-ring-spectrum`, and `pthm-nrqmx-pauli-square-identity`)
and two B-page examples (`ex-nrqmx-landau-3d-continuum` and
`ex-nrqmx-flux-half-crossing`). The assigned manifest and shared
`research/plan-spec.json` retain the correct page IDs, order, title, category,
library and `requires`, but their `items` arrays are empty. The detailed
source design controls that inventory conflict; neither shared plan nor run
schedule was changed. The optional owner-authoring-direction file was absent.

Six mathematical A-page suppliers were needed to make the planned arguments
complete: magnetic-form data and its closability proof; the periodic ring
Sobolev domain and its Fourier spectral theorem; and closed-form Landau
diagonalizations in two and three dimensions. In particular, the 3D form
lemma proves density of finite smooth coefficients in the weighted space,
proves that their inverse transforms are Schwartz, and cuts them off in the
unbounded linear gauge. This supplies the full closure argument needed by the
longitudinal-band example; no weighted-density claim is left as an assertion.
The A page has ten items and the B page two, below the 100-item cap. The
item-level arrays and page files now agree.

## Dependencies and levels

The item levels were recomputed against all current manifests in the run, so
upstream suppliers from batches 43 and 44 contribute to the levels:

| Level | Items |
|---:|---|
| 0 | `def-nrqmx-magnetic-form-data`, `def-nrqmx-periodic-ring-domain` |
| 1 | `lem-nrqmx-magnetic-form-closability` |
| 2 | `lem-nrqmx-landau-form-diagonalization`, `post-nrqmx-magnetic-model-extension` |
| 3 | `thm-nrqmx-periodic-flux-spectrum`, `lem-nrqmx-landau-3d-form-diagonalization`, `pthm-nrqmx-landau-direct-integral`, `pthm-nrqmx-pauli-square-identity` |
| 4 | `pthm-nrqmx-flux-ring-spectrum`, `ex-nrqmx-landau-3d-continuum` |
| 5 | `ex-nrqmx-flux-half-crossing` |

The run schedule records batch 53 at level 2 with prerequisites batches 43,
44 and 47. It was not edited. The current interval unitary-boundary supplier
`thm-nrqmx-interval-unitary-boundaries` in batch 43 has a current ready Step 1
record. Its actual statement and proof assume AC, CC and DC and its swap-unitary
boundary interface gives exactly the two periodic trace equalities used here.
The current `thm-nrqmx-closed-form-representation` carrier in batch 44 also has
a current ready Step 1 record. Its complete proof assumes AC and CC for a
closed, densely defined, semibounded symmetric form; the normalized Landau and
3D forms meet those hypotheses after division by the stated reference joule.
`loadStep1Record` and `step1Decision` both report the current row closed and
ready. The ideal circle is separately specified on its periodic $H^2$ domain
and its local interval theorem proves that realization self-adjoint directly;
that ring argument does not invoke Euclidean form representation. The Pauli
item uses the postulate's explicit core matrices and SI convention only, not
its closed-form operator clause. All direct cross-batch interfaces are now
verified; these records document authoring readiness, not independent proof
acceptance.

## Sources, conventions and proof scope

The full-text readings and per-result dispositions are recorded in
`physics-non-fluid-129-2026-10-21-r2-batch-53.coverage.json`. Tong's complete
relevant sections (§1.1.1, §1.2, §1.3.1 and §1.5), Nair's complete §§11.3,
13.1 and 13.2, and Harrow's complete Chapter 4 §§3.1–3.2 and 3.5 were read.
Tong and Nair independently support both pages; Harrow supplies a further
independent Landau and Aharonov–Bohm comparison for the A page. Gaussian-unit
factors and charge-sign conventions are not silently carried into the SI
statements. The sources' finite-rectangle or finite-disc degeneracy estimates
are not imported, and no measurement or empirical precision is asserted.

The Teschl §2.3 source URL already present in two draft references was not
used as a proof input. Its official PDF hosts returned 502, an alternative
mirror returned 404, a repository request timed out, and the AMS full-volume
endpoint returned 403. The initial failed retrieval and five recovery retries,
searches, and complete local alternatives are preserved in that source's
`source_resolution` record. The reference is dropped with certainty because
the ring domain is explicitly defined from inspected local trace suppliers
and the magnetic-form closability argument is proved locally in full. No
mathematical coverage is waived.

The Landau items use $\Pi=-i\hbar\nabla-qA$ and the wave-number transform
$(2\pi)^{-1/2}\int e^{-iky}(\cdot)\,dy$. The linear Landau potential is
unbounded, so the local arguments use closed forms and do not invoke a
bounded-coefficient $H^2$ realization. The ring uses increasing $\phi$ as
the positive loop orientation and $\oint A\cdot d\ell=\Phi$; it assumes a
zero-width circle, static tangential potential and single-valued periodic
wavefunction. The Pauli result is an algebraic identity on
$C_c^\infty(\mathbb R^3;\mathbb C^2)$ and yields only the formal effective
coefficient $g=2$, not a measured electron value or a closed-domain identity.
The B examples are conditional model deductions, not experiments.

## Checks and remaining review gates

Final scoped results: precheck passed the ten proof-bearing items and the
postulate's nonproof structure; proof-layout reports 12 items, 30 steps and 0
defects; rendercheck passed all 12 items and both pages; content-policy passed
12 items with 0 errors/warnings; focused depcheck passed all 12 items and both
pages with 0 errors/warnings; strict proof-contract passed 12/12 items with 0
errors/warnings; coverage-checklist passed 2 pages with 24 harvested results
and 0 errors; manifest-integrity found all 258 planned run pages present with
none missing or added; source-fetch-check stamped all five active URLs and
resolved the sixth through the documented source drop. A scoped physics-content check using
a temporary plan projection from this batch's current manifest passed all 12
items with 0 errors; the shared plan was not changed.

The run-wide item-dependency command reports 30 out-of-scope errors: 26 empty
scaffold inventories and four item rows without IDs on batch 77's
`qftx-modular-tqft-sewing` pages. None is in batch 53; all twelve assigned
levels equal the computed graph. The run-wide physics check stops at the
unrelated batch-105 page (`Invalid or empty current page`). The run-wide Step 1
check currently cannot build its snapshot because the batch-77 bare-string
item rows produce `Duplicate item undefined`. After the final item edits,
`loadStep1Record` and `step1Decision` report all twelve batch-53 records as
current `ready`; only stale records for the two Landau consumers were
refreshed, without `--owner`. No item or page outside batch 53 was changed.

These Step 1 decisions record authoring readiness only. They do not certify
independent mathematical review or replace later acceptance gates.
