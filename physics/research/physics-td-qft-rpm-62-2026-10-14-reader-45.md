# Step 3a reader report — batch 45

Run: `physics-td-qft-rpm-62-2026-10-14`
Role: reader
Assigned scope: batch 45

## Run state

At the start of review, the physics autopilot reported the run as running in
stage 3a-read, with batch 45's reader artifact missing and no active workers.
The assigned A/B pages and their item files were present. The latest Git commit
at review start was `b66aa184a6` (physics gate-liveness precheck scoped to run manifests).

## Opened inventory

Assigned pages:

- `qft-mg03` — A page, Finite matrix formal inverse and gauge-covariant kernel.
- `qft-mg03-examples` — B page, the companion examples page.

All 12 assigned items:

- Definitions: `def-qft-qed-finite-graph-gauge-data`, `def-qft-qed-finite-grassmann-algebra`, `def-qft-qed-photon-energy-multiplier`, `def-qft-qed-formal-ring`.
- A-page results: `lem-qft-qed-coherent-ir-obstruction`, `lem-qft-qed-formal-matrix-ward`, `lem-qft-qed-tree-ward`, `lem-qft-qed-grassmann-determinant`, `lem-qft-qed-conserved-current-gauge`.
- B-page examples: `ex-qft-qed-tree-matrix-example`, `ex-qft-qed-coherent-angular`, `cex-qft-qed-energy-fock-limit`.

Dependency pages opened:

- `qft-mg01` — current QFT-MG01 page and its item inventory.
- `euclidean-surface-measure-divergence-and-green-identities` — published mathematical page.
- `the-complex-exponential-and-eulers-formula` — published mathematical page.

Dependency items opened:

- Draft QFT suppliers: `def-qft-fock-and-test-spaces`, `lem-qft-second-quantized-spectrum`, `def-qft-scalar-mass-shell`, `def-qft-dirac-projections`, `def-qft-photon-transverse-space`, `def-qft-qed-gauge-data`.
- Published mathematical suppliers: `def-countable-choice`, `def-complex-exponential`, `lem-complex-exponential-series-converges-everywhere`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-polar-surface-measure-on-the-unit-sphere`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-logarithm-derivative-and-integral`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `def-euclidean-inner-product`, `def-real-and-complex-inner-product-space`, `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-permutation-sector-projections`, `lem-qft-l2-product-tensor-identification`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`.

The batch 45 proof-contract file was reviewed. Its nine proof-bearing entries
cover all five A-page lemmas and all three B-page results plus the photon
multiplier definition. Derivation rows matched the authored proof steps. Two
supplier-status notes are stale; these are recorded below.

## Mathematical review

- The finite graph phase action gives the stated block conjugation. The formal
  Neumann series is well-defined coefficientwise, and both inverse products
  cancel coefficient by coefficient. Differentiation along the stated
  differentiable conjugation path gives the variation identity.
- The finite Grassmann top-coefficient sign agrees with the declared
  normalization, including the determinant identity over the commutative formal
  series ring. Diagonal conjugation preserves the Leibniz determinant.
- The photon multiplier maps its stated domain into the transverse subspace;
  its units and nonnegativity follow from the given conventions.
- The coherent cutoff family has the stated norm and energy integrals. The
  sector calculation establishes the energy-domain claim; the dyadic
  subsequence is non-Cauchy, and finite-sector density gives weak convergence
  to zero. Unit norms then rule out a strong limit.
- The Dirac resolvent identity, telescoping sum, on-shell current contractions,
  and exact rational example follow from the displayed Clifford matrices and
  finite-matrix algebra.
- The angular coefficient is \(8\pi\lambda^2/3\). The counterexample has a
  continuous transverse profile of positive angular norm and uniformly bounded
  energy, while the assigned coherent-family result supplies the failure of
  strong convergence.

I found no mathematical defect in the 12 assigned item bodies and made no item
or page edits. Since there was no item repair, item reflow, precheck, and
proof-layout commands were not run.

## Findings not editable in this reader scope

1. Published dependency `def-complex-exponential` has
   `lem-complex-exponential-series-converges-everywhere`
   in `deps` and no `justified_by` entry,
   while its Definition says that the lemma discharges convergence for every
   complex argument. Physics SCHEMA's well-definedness rule places that result
   in `justified_by` and says not to duplicate it in
   `deps`. The definition's mathematical content remains
   supported; this is a published dependency metadata defect. Assigned consumer:
   `lem-qft-qed-coherent-ir-obstruction`.

2. The Remarks of published dependency `def-euclidean-inner-product`
   may be stale: they say abstract inner-product spaces are planned and not yet
   built, while its published dependency
   `def-real-and-complex-inner-product-space` explicitly
   defines abstract real and complex inner-product spaces. The remark could
   refer only to a broader planned page, so I leave the scope of the status
   claim for owner disposition. It does not affect the Euclidean calculation.
   Assigned consumer whose dependency closure reaches the item:
   `lem-qft-qed-coherent-ir-obstruction`.

3. The contract for `lem-qft-qed-formal-matrix-ward`
   records `def-qft-qed-gauge-data` as unregistered and says
   the current QFT-MG01 manifest has an empty item inventory. The current
   `qft-mg01` page lists that item, and the current run's
   batch 44 manifest assigns it. This contract status claim is stale; the
   finite matrix proof uses the exact displayed phase convention and remains
   valid.

4. The contract for `def-qft-qed-photon-energy-multiplier`
   records `def-qft-photon-transverse-space` as
   unregistered and says its page inventory is open. The current
   `qft-mg01` page lists the supplier and the current run's
   batch 44 manifest assigns it. This contract status claim is stale; the
   multiplier definition and proof remain valid.

No assigned item or page prose required a repair. These findings concern
published dependency metadata/content or contract evidence that this reader is
not authorized to edit.

## Page verdicts

- `qft-mg03`: acceptable as a draft page. Its summary describes
  the matrix, Grassmann, tree, and coherent-cutoff material and explicitly
  limits the claims to formal/finite or free-mode mathematics. It keeps the
  draft QFT-MG01 prerequisites conditional.
- `qft-mg03-examples`: acceptable as a draft companion page.
  Its summary matches the three example items and does not present the
  counterexample as an interacting QED construction.

## Blocker and coverage limit

No blocker remains for this reader assignment. Draft QFT-MG01, QFT-MF02,
QFT-MF03, and QFT-MG04 supplier interfaces remain conditional on their own
workflow acceptance, as stated in the items and pages.

I checked each assigned item, its direct supplier interfaces, the relevant
in-run QFT supplier proofs, the assigned pages, and the listed proof contracts.
I did not re-audit the full transitive proof closure of every inherited
mathematical foundation or independently retrieve the external QFT bibliography
sources; no external source is claimed to be insufficient.
