# Batch 42 authoring notes — Dirac Clifford matrices and energy projections

Run physics-td-qft-rpm-62-2026-10-14, role beta, assigned A/B pair
qft-mf03 / qft-mf03-examples. The active owner direction was read before
constructing the items and takes precedence over stale reservation text.
Both pages remain drafts, contain six A items and one B item, and are below the
100-item cap.

## Design, plan and inventory decisions

The complete qft-mf03 design section at
research/plan-quantum-field-theory-track.md was read with
research/plan-spec.json, the batch task and owner direction. The current task
and plan-spec require qft-mf02,
tempered-distributions-and-the-fourier-transform, and
sr-spacetime-primitives. The older reservation quoted in the design says
QFT-MF01 and QFT-MF02 only. The current plan controls: no direct QFT-MF01 page
edge was added, because QFT-MF02 is itself downstream of QFT-MF01. This
preserves the QFT-MF01 dependency transitively and keeps the two additional
current page requirements.

The reserved A inventory was def-qft-dirac-projections,
lem-qft-free-dirac-car-locality, and
lem-qft-dirac-covariance-spectrum; the reserved B item was
ex-qftmath-dirac-rest-projector. Three local A-page prerequisites were added
before their consumers:

- lem-qft-lorentz-boost-rotation-factorization supplies a complete real
  boost-times-rotation factorization for the proper orthochronous Lorentz
  group, needed to prove surjectivity of the explicit spin-pair projection.
- lem-qft-dirac-projection-matrices proves the Pauli/Clifford, rank-two
  projection, maximal self-adjoint domain, spin-lift and multiplier identities.
- lem-qft-dirac-fermionic-translation-spectrum proves the antisymmetric
  Fock PVM, generator domains, cone spectrum, vacuum uniqueness and mass-gap
  claims locally.

The repaired/current inventory had proposed using
lem-qft-second-quantized-spectrum for the Fock spectrum. Its inspected
statement and proof apply to symmetric (bosonic) Fock space and do not prove
the antisymmetric Dirac assertion. The bosonic theorem is not cited as a
supplier; the fermionic result is proved from the actual product-L2 and CAR
interfaces. lem-qft-smeared-free-scalar is also not used: it is not a
premise for the spinor kernels or their covariance. No reserved claim was
weakened or omitted.

## Inventory, dependencies and item levels

The A-page manifest is supplier-first:

| Item | In-run item suppliers | Level |
|---|---|---:|
| lem-qft-lorentz-boost-rotation-factorization | none | 0 |
| def-qft-dirac-projections | def-qft-fock-and-test-spaces, def-qft-scalar-mass-shell | 1 |
| lem-qft-dirac-projection-matrices | def-qft-dirac-projections, lem-qft-lorentz-boost-rotation-factorization | 2 |
| lem-qft-free-dirac-car-locality | lem-qft-dirac-projection-matrices, def-qft-fock-and-test-spaces, lem-qft-fock-ccr-car, def-qft-scalar-mass-shell, lem-qft-scalar-causal-commutator | 5 |
| lem-qft-dirac-fermionic-translation-spectrum | def-qft-dirac-projections, lem-qft-dirac-projection-matrices, def-qft-fock-and-test-spaces, lem-qft-l2-product-tensor-identification | 3 |
| lem-qft-dirac-covariance-spectrum | def-qft-dirac-projections, lem-qft-dirac-projection-matrices, lem-qft-free-dirac-car-locality, lem-qft-lorentz-boost-rotation-factorization, lem-qft-dirac-fermionic-translation-spectrum, def-qft-scalar-mass-shell, lem-qft-mass-shell-measure-invariant, def-qft-fock-and-test-spaces, lem-qft-fock-ccr-car | 6 |
| ex-qftmath-dirac-rest-projector | def-qft-dirac-projections, lem-qft-dirac-projection-matrices | 3 |

Levels use the current run manifests and each actual in-run supplier item's
dependency_level; external published mathematics does not raise an item
level. Batch 42's page dependency level is 2, requiring batch 38, which
requires batch 37. The owner-maintained derived file
research/physics-td-qft-rpm-62-2026-10-14-batch-dependency-levels.json
was left unchanged.

## Supplier interfaces and conditional arguments

The current batch-37 and batch-38 manifests, A pages, item files, source
coverage, notes and contracts now exist. The corresponding item files remain
drafts. The actual interfaces were inspected, including the complete
conditional proofs for the Fock CAR and product-L2 suppliers, and compared
with every declared use here:

- def-qft-fock-and-test-spaces fixes the second-variable-linear Hilbert
  pairing, conjugate Hilbert space, finite-particle subspace, antisymmetric
  sectors, and fermionic creation/annihilation conventions.
- lem-qft-fock-ccr-car assumes Countable Choice and supplies bounded
  creation/annihilation operators, the stated CAR and finite-sector
  insertion/contraction formulas.
- lem-qft-l2-product-tensor-identification assumes Countable Choice and
  identifies completed scalar sigma-finite L2 tensor products with full
  completed-product L2. The local Fock proof extends this componentwise across
  the two species and finite four-dimensional spinor fibers.
- def-qft-scalar-mass-shell uses the (-+++) metric, length coordinates,
  inverse-length shell parameter, phase
  p circ x = omega x^0 - k dot x, and
  d-nu = d^3 k/((2 pi)^3 2 omega). The local negative branch is explicitly
  reparameterized by q=(omega,-k).
- lem-qft-mass-shell-measure-invariant states invariance of that measure
  under proper orthochronous Lorentz transformations.
- lem-qft-scalar-causal-commutator defines
  Delta_mu = integral sin(omega t)/omega exp(i k dot x) d^3 k/(2 pi)^3
  and states temperedness and support in |x| <= |t|. The Dirac locality
  proof uses the complete conditional derivative identity
  R = partial_t Delta_mu I - i h_D(-i nabla) Delta_mu.

The qft-mf02 batch ledger still records its qft-mf01 page edge open. The
latest read-only autopilot status no longer lists batch 38 as artifact-missing;
it lists batch 42 as artifact-missing and keeps stage 1-scaffold held for owner
repair at unit 28, with a separate scheduling-scope mismatch. The qft-mf01
edge and qft-mf02 page review remain open even though their page, manifest and
draft item carriers are present. The consumer proofs record the actual
hypotheses and formulas conditionally; they do not promote a draft or its
label to an approved theorem. The exact open edges and supplier status are in
physics-td-qft-rpm-62-2026-10-14-batch-42.cross-batch-dependencies.json.
All assigned items that depend directly or transitively on the unaccepted
QFT-MF01/QFT-MF02 carriers are escalated; the independent Lorentz
factorization item has no in-run supplier.

## Sources and scope

The A page uses two independent full-text lecture-note treatments:
David Tong's complete author-hosted QFT notes and Niklas Beisert's complete
ETH Zürich QFT I notes. Tong's full HTML chapters 4 and 5 were inspected and
both fetch stamps succeeded. Beisert's full 162-page PDF was inspected through
the source text, including its Clifford/projector, spinor-covariance and
fermionic-quantization sections. The source-fetch checker made its initial
attempt plus five recovery retries, fetched the body each time, then failed
only because compressed-PDF page counting requires unavailable mutool. The
original attempt times/outcomes, searches for official text/HTML alternatives,
and a source-resolution owner escalation with a complete local argument and
exact dependencies for every included result are preserved in the coverage
file. No further retries were made. The source fetch gate therefore remains
open at 2/3 stamped/resolved sources; this is not reported as a successful
Beisert stamp.

Source discussions motivate the constructions; every mathematical claim is
proved locally from the stated interfaces. QFT sign conventions are rederived
in the fixed (-+++) convention. No measurement, empirical inference, or
spin-statistics theorem is asserted. The finite coordinate spinors in the B
example are not normalizable continuum momentum states, and the massless shell
apex is excluded.

## Scoped check record

Checks were rerun after the final proof, statement, page and manifest edits:

- proof-layout.mjs with the temporary /private/tmp/physics-qft-proof-layout-alias-resolver.mjs needed by the existing app @/components import: 6 proof-bearing items, 35 steps, 0 defects. The first direct renderer attempt failed before scanning because the app checkout's TypeScript loader could not resolve its existing @/components alias; the temporary read-only alias resolver let the same renderer run.
- The normative phase precheck: 6 items checked, 0 failing. Its dependency-layer repair was adopted in the proof labels, and all within-proof references now use the final labels.
- proof-contract.mjs --strict: all 7 contracts checked, 0 errors, 0 warnings.
- rendercheck.mjs: all 9 assigned item/page files pass KaTeX and YAML parsing, with no multiline display, broken math delimiter, or wikilink-inside-math errors.
- prosecheck.mjs: both pages pass with 0 errors and 0 warnings.
- content-policy.mjs: 7 items, 0 errors and 0 warnings. manifest-deps.mjs: 7 item records, 0 missing dependency arrays and 0 errors.
- A scoped manifest/page comparison verifies both page inventories, all 7 item IDs, dependency arrays and roles, levels, and copied statements match their current carriers.
- Focused depcheck.mjs --items-file checks all 7 assigned items and their prerequisite-cycle closure successfully. A body wikilink from the Dirac definition to its proving lemma initially exposed a cycle; the definition now names the companion result in prose without declaring a reverse dependency.
- A scoped item-DAG calculation over current batches 37, 38 and 42 checks 25 items across 6 pages, with no cycles or level mismatches. Batch-42 levels are 0, 1, 2, 5, 3, 6 and 3 in manifest order. A separate comparison finds exactly 13 expected cross-batch edges, all 13 recorded as open, and no missing or extra rows.
- coverage-checklist --require-destination: 1 A page and 14 harvested results, 0 warnings; its one error is the explicit Beisert source owner-escalation. source-fetch-check --stamp stamps Tong's two full HTML chapter sources; it reports 2/3 sources stamped and the same one Beisert escalation. The original Beisert full PDF body was fetched and inspected, but the checker exhausted the initial request plus five retries on its compressed-page-count limitation. Its exact attempts, alternative searches, complete local arguments and dependency lists are recorded in source_resolution.
- batch-dependency-levels.mjs check reports the shared derived file is stale after run-manifest changes. It was not rewritten. The read-only frontier ledger preview is also blocked by an unrelated invalid review row in batch 11; the batch-42 edge comparison above is scoped and complete.

Step 1 decisions are current and hash-bound: lem-qft-lorentz-boost-rotation-factorization is ready; the other six items are escalated because their in-run QFT-MF01/QFT-MF02 page or supplier readiness remains open. Their carriers and actual interfaces were inspected, and their complete conditional arguments and contracts are present. The Beisert fetch issue is recorded separately as a source-review escalation. These authoring/readiness records are not independent approval.

The latest read-only autopilot status reports 33/64 covered at stage 1-scaffold,
held by owner repair/recertification at unit 28 and an engine scheduling-scope
mismatch. Its artifact-missing list includes batch 42 but no longer includes
batch 38. The Step 1 decision for def-qft-dirac-projections was recorded just
before that latest status and its reason still mentions batch 38 as
artifact-missing. That decision remains escalated because the qft-mf02 page's
qft-mf01 review edge is open; the reason is retained under the instruction not
to overwrite an escalation. The owner can reconcile its status wording during
upstream repair. No shared plan, dependency-level file, engine state, verdict,
upstream item or upstream page was changed.
