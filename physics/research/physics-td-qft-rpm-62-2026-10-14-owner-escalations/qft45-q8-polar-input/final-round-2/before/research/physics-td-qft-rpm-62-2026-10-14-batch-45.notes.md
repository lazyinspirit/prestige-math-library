# Batch 45 authoring notes — finite matrix formal inverse and gauge-covariant kernel

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, assigned pair
`qft-mg03` / `qft-mg03-examples`. The binding owner direction and complete
QFT-MG03 design section were read before authoring. This note records the
current artifacts and conditional supplier status; it is not independent
approval.

## Design and plan decisions

The complete design section at `research/plan-quantum-field-theory-track.md`
line 345 and the current `research/plan-spec.json` were compared. An older
design reservation lists page requirements QFT-MG01, QFT-MF01 and QFT-MF03;
the current plan-spec lists only `qft-mg01` for the QFT-MG03 A page. The plan
controls: `qft-mg03` keeps exactly `requires: ["qft-mg01"]`, while direct
mathematical item dependencies on QFT-MF01 and QFT-MF03 suppliers remain in
the item graph. The B page requires `qft-mg03`.

The proposed QED inventory has six planned A items and three B items. Three
local A-page definitions were added before their consumers: finite-graph
external U(1) phase data, a finite Grassmann algebra with a specified
top-coefficient functional, and the free transverse-photon energy multiplier.
The last definition was needed because the actual QFT-MG01 photon-space draft
defines the transverse subspace but does not define $\omega(\mathbf k)=|\mathbf
k|$. These local definitions supply the interfaces needed by the formal
kernel, determinant and coherent-photon claims. The existing QFT-MG02 compact-lattice
definition was inspected and not reused: it models rotor multiplication
operators on a Hilbert space, which would add an unrelated rotor/CAR
prerequisite to this external finite-matrix construction.

The page has nine A items and three B items, below the 100-item cap. The page
scope preserves the designed distinctions: coefficientwise formal algebra,
finite rational Dirac identities away from poles, a finite Grassmann Gaussian,
and an exact free transverse-photon cutoff family. No convergence of a
numerical perturbation series, continuum QED construction, loop Ward theorem,
interacting charged sector, measurement, or empirical result is asserted.

## Inventory, dependencies and levels

Suppliers precede their consumers within the assigned batch. Levels were
recomputed from the current planned item graph; out-of-run mathematical
prerequisites do not raise an item level.

| Item | Direct suppliers in this batch | Other in-run supplier level used | Level |
|---|---|---|---:|
| `def-qft-qed-finite-graph-gauge-data` | none | none | 0 |
| `def-qft-qed-finite-grassmann-algebra` | none | none | 0 |
| `def-qft-qed-photon-energy-multiplier` | none | QFT-MG01 transverse-space definition, level 1 | 2 |
| `def-qft-qed-formal-ring` | finite-graph gauge data | QFT-MG01 `def-qft-qed-gauge-data`, level 2 | 3 |
| `lem-qft-qed-coherent-ir-obstruction` | photon-energy multiplier | QFT-MF01 Weyl and multiplier lemmas, level 2 | 3 |
| `lem-qft-qed-formal-matrix-ward` | formal ring, finite-graph gauge data | QFT-MG01 gauge-data definition, level 2 | 4 |
| `lem-qft-qed-grassmann-determinant` | formal ring, finite Grassmann algebra | formal ring, level 3 | 4 |
| `lem-qft-qed-tree-ward` | formal matrix Ward lemma | QFT-MF03 Dirac definition, level 1; QFT-MF02 shell definition, level 0 | 5 |
| `lem-qft-qed-conserved-current-gauge` | tree Ward lemma | tree Ward lemma, level 5 | 6 |
| `ex-qft-qed-coherent-angular` | coherent IR lemma | coherent IR lemma, level 3 | 4 |
| `cex-qft-qed-energy-fock-limit` | coherent IR lemma | coherent IR lemma, level 3 | 4 |
| `ex-qft-qed-tree-matrix-example` | tree Ward lemma | QFT-MF03 Dirac definition, level 1 | 6 |

Batch 45 is level 5 and depends on batch 44 in the inspected
`batch-dependency-levels.json`. That shared derived file was not edited. The
current run has incomplete upstream manifests, so the repository-wide
dependency checker may still report unrelated empty inventories or stale
derived inputs; the assigned item graph and the stated supplier levels are
recorded here explicitly.

## Supplier interfaces and unresolved inputs

The current draft carriers for `def-qft-qed-gauge-data` and
`def-qft-photon-transverse-space` appeared while authoring was in progress.
Their complete current statements and proofs were inspected against each use.
The gauge-data definition fixes `D_a=partial_a−ig a_a` and the charged-field
phase `exp(ig alpha)`; the finite graph phase angle is therefore named
`theta=g alpha`. The transverse-space definition names
`H_T=Ran M_PT` in vector-valued L2 and fixes `PT=I−nn^T`, but does not define
the energy multiplier. The new local `def-qft-qed-photon-energy-multiplier`
uses that exact space, defines the maximal `omega=|k|` multiplier and its unit
convention, and proves range preservation. Both QFT-MG01 carriers remain
unregistered in the page manifest, whose item inventory is empty, and neither
has a Step 1 readiness record. The local definition and its coherent consumer
contain complete conditional arguments and remain escalated.

Other examined dependencies:

- `lem-qft-segal-weyl-domain` and `lem-qft-second-quantized-spectrum`: full
  current statements and proofs inspected. Their item-level Step 1 records
  are ready, but QFT-MF01 remains a draft page behind open upstream page
  edges; the coherent result records these inputs conditionally.
- `def-qft-dirac-projections`: exact Pauli blocks, adjoint, Clifford
  contraction and convention inspected. Its current Step 1 record is
  escalated because QFT-MF01/QFT-MF02 page inputs remain open. The tree proof
  derives the specific Pauli algebra it needs locally and does not rely on the
  larger projection-matrix lemma.
- `def-qft-scalar-mass-shell`: exact `(-+++)`, `h=-eta`, future-shell and
  inverse-length conventions inspected; the item readiness is ready, while
  its QFT-MF02 page edge to QFT-MF01 remains open.
- `def-countable-choice`: published mathematical assumption inspected and
  carried explicitly where its draft Fock/Dirac suppliers require it.

The exact cross-page and cross-item edges, interface matches and open status
are in `physics-td-qft-rpm-62-2026-10-14-batch-45.cross-batch-dependencies.json`.
The affected claims and required upstream placements are: QFT-MG01 must
register and resolve its gauge-data item for the formal-ring and finite Ward
claims, and its transverse-space item for the coherent tail; QFT-MF01/MF02
page review affects the coherent-space and shell prerequisites; QFT-MF03 page
review affects the Dirac matrix convention used by the tree lemma and its B
example. No claim was weakened or omitted while these inputs remain open.

## Source harvest and retrieval evidence

Three independent full-text treatments support the A page. The selected
sources and every harvested result's item/disposition are recorded in
`physics-td-qft-rpm-62-2026-10-14-batch-45.coverage.json`.

- David Tong, complete author-hosted Cambridge QFT Chapter 6 HTML,
  §§6.1.1, 6.2.1, 6.3.1 and 6.4, including equations 6.577–6.584. The finite
  inverse covariance and transverse multiplier are scaffolded in dedicated
  items; the Dirac propagator convention is inline in the tree proof; the
  explicit tree longitudinal cancellation is included in
  `lem-qft-qed-conserved-current-gauge`.
- Mark Srednicki, complete 616-page author-hosted QFT draft, §44 (printed
  pp. 276–281), §55 (printed pp. 335–338), and §§67–68 (printed pp. 400–404).
  The finite Grassmann coefficient convention/determinant and transverse
  photon multiplier are included; Ward and polarization identities are used
  as context for local finite proofs. Its existing verified fetch stamp is
  reused from batch 43: 3,452,472 bytes,
  `7990bad06ed96750`, 616 pages, at `2026-10-14T04:09:31.493Z`.
- Jan Dereziński, complete author lecture-note HTML on arXiv, §§5.2–5.5 and
  6.1–6.2. Its Fock sectors, second quantization, Weyl vectors and Gaussian
  vectors are inline in the coherent proof; the logarithmic cutoff and its
  limit behavior are proved locally. A previous PDF route had page-count
  failures in batch 37; this successful full-text HTML route was inspected
  and used instead, without retrying that PDF.

`source-fetch-check --stamp` verified all three selected sources. Tong's HTML
stamp is 351,487 bytes (`c8bdddedb1fed612`), Dereziński's HTML stamp is
1,882,121 bytes (`c3788fa7a174143d`), and the Srednicki stamp is the reused
stamp above. No selected source needed a `source_resolution` drop or owner
escalation; the prior unused PDF history remains in its original batch
coverage.

## Proof and readiness record

Proof contracts cover all nine proof-bearing items, with a fact citation for
each exact supplier link, one derivation per numbered step, all eight standard
boundary cases and applicable finite checks. The self-contained finite-graph
and Grassmann definitions have no mathematical suppliers and no proof
contracts. The photon-energy definition has a well-definedness and unit check
with an exact upstream contract. Exact source excerpts
are stored in the contract file. These contracts and the final scoped-check
results are authoring evidence, not independent approval.

Step 1 decisions are written after final edits in the run-bound records. The
finite-graph and Grassmann definitions have complete placement and no
unresolved inputs, so they are `ready`. The photon-energy definition and every
consumer that depends directly or transitively on an unregistered QFT-MG01
carrier or an open cross-page supplier are `escalated`, with the exact
dependency and inspected evidence recorded; no escalation is overwritten and
no `--owner` flag is used.

## Scoped checks

Final checks after the last item, page, manifest, source coverage and contract
edits:

- `manifest-deps.mjs`: 12 items, 0 missing dependency arrays, 0 errors.
- `content-policy.mjs` on the batch manifest: 12 scoped items, 0 errors and 0
  warnings. `rendercheck.mjs`: all 12 item carriers and 2 library pages pass
  the real KaTeX/YAML renderer checks.
- `proof-contract.mjs --strict`: 9 proof-bearing items, 0 errors and 0
  warnings. `proof-layout.mjs`: 9 items, 32 numbered steps, 0 defects. The
  first direct proof-layout renderer attempt failed because the app checkout
  could not resolve its existing `@/components` alias; the scoped rerun used
  the temporary `/private/tmp/physics-qft-proof-layout-alias-resolver.mjs`,
  with no application checkout changes.
- `coverage-checklist.mjs --require-destination`: 1 A page, 11 harvested
  results, 0 errors and 0 warnings. All 5 results marked `included` name
  scaffolded items; the remaining 6 results are explicitly `inline` in the
  named definitions or proofs. `source-fetch-check.mjs` reports 3/3 sources
  fetch-verified and 3/3 resolved, with no drops.
- Focused `depcheck.mjs`: 12 assigned items, prerequisite-cycle closure of
  1,305 items across 385 pages, no dependency errors or warnings. A separate
  metadata comparison checked both library-page inventories, all 12 copied
  statements/dependency fields, and the exact `qft-mg03` `requires` array
  against `plan-spec.json`; there were no mismatches.
- The scoped item-level dependency calculation checked all 12 assigned items,
  their in-run dependency closure and supplier-first order, with no cycles or
  level errors. Levels are 0, 0, 2, 3, 3, 4, 5, 4, 6, 6, 4 and 4 in manifest
  order. It treats the two inspected but not-yet-registered QFT-MG01 carriers
  at their current proposed item levels; their missing registration remains
  an explicit readiness blocker.
- The 12 assigned Step 1 records were read back against the current manifest
  and dependency arrays: 2 are current `ready` records and 10 are `escalated`
  records with the exact dependencies listed. The whole-run Step 1 check is
  still open (673 run items; 245 ready), outside this batch.

Repository-wide checks remain blocked outside batch 45 and were not repaired
here:

- `batch-dependency-levels.mjs check --run ...` reports the owner-maintained
  derived `batch-dependency-levels.json` as stale after run-manifest changes;
  that shared file was left untouched.
- `item-dependency-levels.mjs check --run ...` reports three empty inventories
  (`rpm-external-charge-examples`, `qft-x03`, `qft-x03-examples`) and nine
  mismatches on other QFT items: `thm-qft-example-soft-current-angular-coherent`
  (3 vs 4), `ex-qftmath-x06` (4 vs 5), `post-qft-formal-qed-coefficients`
  (7 vs 6), `pthm-qft-qed-formal-ward` (8 vs 7),
  `texp-qft-qed-infrared-sequence` (5 vs 8),
  `post-qft-example-formal-observable-map` (3 vs 7),
  `pthm-qft-example-formal-scattering-decay` (4 vs 8), `ex-qft-x04` (5 vs 9)
  and `ex-qft-x05` (5 vs 9). None is an assigned batch-45 item.
- Run-wide `proof-contract-coverage.mjs` stops at the empty frontier inventory
  `rpm-external-charge-examples`; the strict batch-45 contract check above
  passes.

No test suite was run. The completion and readiness records do not constitute
independent mathematical approval.
