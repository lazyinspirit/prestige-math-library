# Batch 36 authoring notes — Wave energy and black-hole perturbation interfaces

Run: physics-non-fluid-129-2026-10-21-r2

## Plan and inventory reconciliation

The current plan-spec.json and batch-36 manifest agree on the A/B page IDs,
titles, category, library, companions, and the four required A-page suppliers.
The plan gives orders 769/770. The earlier GR track design at lines 140–141
records order 8015 for the A page; the canonical plan controls this conflict,
so the run manifest and local A/B pages use 769/770.

The plan has empty preauthoring item arrays. The assigned module in
research/frontier-expansion-2026-10-19/general-relativity/prose-scaffold.md
and the source inventory reserve three A items and two B leaves. I retained
those IDs and statements, then added four A-page mathematical items needed to
make the local interfaces explicit: lem-gr-fx-scalar-dominant-energy,
def-gr-fx-nondegenerate-local-energy-estimate,
def-gr-fx-kerr-horizon-mode, and
lem-gr-fx-kerr-horizon-modal-flux. The A page is below its 100-item cap.

The source inventory listed prop-gr-fx-schwarzschild-test-energy as a
prerequisite of the Kerr superradiant example. That Schwarzschild result cannot
establish a Kerr horizon-mode flux sign. The B example now consumes the local
Kerr modal-flux lemma, which uses the actual planned Kerr horizon-generator
interface. The source inventory also listed the Schwarzschild Killing-flux
proposition and wave multiplier identity for the photon-sphere obstruction.
Those are not proof inputs to the high-frequency concentration argument; the
example instead uses the precise ILED definition and the existing photon-sphere
geodesic result. These corrected dependency edges preserve the planned claims
without treating unrelated Schwarzschild conservation as a Kerr or trapping
proof.

The design explicitly separates the scalar test tensor from physical
Einstein-matter stress and defers redshift and Morawetz estimates. It also
requires gauge-invariant Regge–Wheeler/Zerilli or Teukolsky variables,
reconstruction, mode exclusions, and boundary conditions before any linear
gravitational perturbation theorem. The authored A items state those limits.
No scalar result here is presented as a gravitational or nonlinear Kerr
stability theorem.

## Inventory and dependency levels

The exact A inventory is:

| Item | Direct in-run suppliers | Level |
|---|---|---:|
| def-gr-fx-scalar-wave-stress | none | 0 |
| prop-gr-fx-wave-multiplier-identity | def-gr-fx-scalar-wave-stress | 1 |
| lem-gr-fx-scalar-dominant-energy | def-gr-fx-scalar-wave-stress | 1 |
| prop-gr-fx-schwarzschild-test-energy | multiplier identity; scalar dominant-energy lemma | 2 |
| def-gr-fx-nondegenerate-local-energy-estimate | def-gr-fx-scalar-wave-stress | 1 |
| def-gr-fx-kerr-horizon-mode | batch-35 def-gr-fx-kerr-exterior; prop-gr-fx-kerr-horizon-generator | 3 |
| lem-gr-fx-kerr-horizon-modal-flux | def-gr-fx-kerr-horizon-mode | 4 |

The B inventory is ex-gr-fx08-1 at level 5, consuming both the A-page Kerr
mode definition and modal-flux lemma, and ex-gr-fx08-2 at level 2, consuming
the local ILED definition and scalar dominant-energy lemma. Both B examples
retain their exact planned IDs and titles.

These item levels are computed from all in-run logical suppliers. The run-wide
batch schedule remains batch 36 at level 2 through batch 35; no page-level edge
changed and the dependency graph is acyclic.

## Cross-batch Kerr interface and current readiness

I inspected the complete current prop-gr-fx-kerr-horizon-generator carrier
and its proof, along with the exact def-gr-fx-kerr-exterior interface. The
proposition states that in a smooth ingoing extension the future horizon is
null with generator
$\\chi=T+\\Omega_H\\Phi$ and
$\\Omega_H=a/(r_+^2+a^2)$. Its proof constructs the regular ingoing metric and
checks the null normal and generator coefficient. It uses the smooth
Lorentzian and horizon definitions with AC_omega; the mode definition carries
that assumption. The stated Kerr time is a length coordinate, so both
frequency parameters have reciprocal-length units.

The first loadStep1Record/step1Decision snapshot reported a missing current
batch-35 Kerr readiness record. A later fresh snapshot, after the supplier's
authoring record was added, returned closed/ready for all eleven batch-35 items,
including def-gr-fx-kerr-exterior and
prop-gr-fx-kerr-horizon-generator. I re-read the exact current carriers and
proofs and checked those current records again before closing this batch.
Accordingly, the Kerr mode definition, modal-flux lemma, Kerr B example, and
the A-page dependency on gr-fx07-kerr-and-hidden-symmetry are eligible for
ready dispositions. This check records authoring readiness and scoped
interface compatibility, not independent proof approval.

The other three required pages are published external context. Their current
interfaces were checked: local/global energy uses the framework's matter
tensor, curvature fixes the library's curvature convention, and
Einstein-and-matter supplies finite-chain divergence/flux machinery. The
test-scalar Q is separately defined and is not identified with the
Einstein-matter tensor.

## Photon-sphere prerequisite escalation

The planned unconditional B claim says trapping obstructs a nondegenerate
integrated local-energy estimate without loss. The assigned design gives the
photon-sphere geodesic and an estimate strategy but no Gaussian-beam
concentration carrier. I completed the available authoring by defining the
exact no-loss estimate and proving the conditional implication in
ex-gr-fx08-2.

The unresolved established mathematical prerequisite is a theorem with the
following interface: on the globally hyperbolic Schwarzschild exterior with
Cauchy slices $\\Sigma_{x^0}$ and timelike stationary multiplier
$T=\\partial_0$, normalize the affinely parametrized trapped null geodesic at
$r=3s/2$ so $-g(T,\\dot\\gamma)=1$. For every finite $T_0>0$ and every
$\\epsilon\\in(0,1)$, there is an exact smooth global solution
$\\psi_{T_0}$ of $\\Box_g\\psi=0$ with finite
$E_T[\\psi_{T_0}](0)=1$ and
$E_{T,\\delta}[\\psi_{T_0}](x^0)\\geq1-\\epsilon$ on every slice
$0\\leq x^0\\leq T_0$. The proposed ID is
lem-gr-fx-schwarzschild-gaussian-beam-concentration, placed on this A page
before the B consumer. Its proof needs the Gaussian-beam phase/Riccati
construction, cutoff localization, exact global wave Cauchy solution and
energy stability on the stated globally hyperbolic exterior. This proof has not been locally authored; the item is not called an
open problem and is not used as a proved supplier. The unconditional version
of the B claim remains unresolved and ex-gr-fx08-2 is escalated.

Sbierski's complete Theorem 2.1 proof was read: it builds a complex phase with
positive transverse imaginary Hessian, uses a Hamiltonian-flow/Jacobi system
to pass caustics, constructs a localized approximate Gaussian beam, normalizes
its energy, then obtains an exact wave solution by a Cauchy energy estimate.
His Theorem 2.50 and §3.1.1 apply the trapped-ray criterion to Schwarzschild.
This is evidence for the proposed proof route, not a substitute for a local
proof contract or carrier.

## Source reading and fetch evidence

The complete source harvest, locator, supported-item mapping, each result's
disposition, actual search history, and source stamps are in
research/physics-non-fluid-129-2026-10-21-r2-batch-36.coverage.json.

- Dafermos–Rodnianski, Lectures on Black Holes and Linear Waves: §§3.2.2,
  3.2.4, 4.1–4.1.2, and 5.1–5.2.4. This is one of the two full lecture-note
  treatments; it supports the scalar current, Schwarzschild balance and
  degeneracy, trapping motivation, Kerr horizon generator, and superradiant
  frequency terminology. It does not supply our local proofs.
- Reall, Black Holes: §§7.3–7.4, 7.6, and 9.1. This is the independent
  full-course lecture-note treatment; it supports Kerr geometry, regular
  horizon generator and angular velocity, Killing-horizon conventions, and
  the scope difference between particle Penrose extraction and scalar mode
  flux.
- Marzuola–Metcalfe–Tataru–Tohaneanu, Strichartz Estimates on Schwarzschild
  Black Hole Backgrounds: §1, including Theorem 1.2. This supports the
  stated degenerating local-energy weight at the photon sphere.
- Sbierski, Characterisation of the Energy of Gaussian Beams on Lorentzian
  Manifolds: §§1.2.2, 2.1–2.2, 2.4 (Theorem 2.50), and 3.1.1. The complete
  Gaussian-beam construction and Schwarzschild application were inspected to
  identify the exact missing local supplier.

The first source-fetch-check --stamp reported 4/4 sources fetch-verified, 4
newly stamped, 4/4 resolved, and zero documented drops. A final repeat reported
4/4 fetch-verified and resolved, with 0 newly stamped. No retrieval failed,
so no source-resolution recovery entry is applicable.

## Scoped check results

After the final carrier and manifest edits, the scoped checks returned:

- Content policy: 9 items, 0 errors, 0 warnings.
- Dependency check: 0 errors and 0 warnings in the selected items and their
  transitive prerequisite context.
- Render check: all 9 items and both local pages, 0 errors and 0 warnings.
- Phase precheck: 6 proof-bearing items passed; the 3 definitions are not
  applicable. Four proof arguments were relabelled to the checker's dependency
  layer order without changing their mathematical content.
- Proof layout: 9 items, 23 numbered steps, 0 defects.
- Proof contracts: 6/6 proof-bearing items checked, 0 errors, 0 warnings.
- Source fetch check: 4/4 sources fetch-verified and resolved; no retrieval
  drops. Coverage checklist: 21 harvested results, 0 errors, 0 warnings.
- Scoped item dependency levels: all 20 items across batches 35 and 36 match
  their computed levels, with no cycles or label errors. Batch 36 remains at
  level 2 and requires batch 35.
- The five direct cross-batch dependency rows are structurally valid and
  verified. The local A/B page inventories exactly match the manifest; the A
  page has 7 of the 100 permitted items.

The read-only run-wide batch-dependency check reports its shared
`batch-dependency-levels.json` snapshot stale because its input hash does not
match the current manifests. Recomputing without writing confirms the batch-36
row remains `{batch: "36", dependency_level: 2, requires: ["35"]}`, equal to the
recorded row. That run-wide schedule file is shared owner-controlled evidence
and was left untouched; it needs refresh at the drained join.

## Final Step-1 dispositions

Fresh `loadStep1Record`/`step1Decision` checks returned current closed/ready
records for all eleven batch-35 items. The nine assigned batch-36 item records
were then written in supplier-first order without `--owner`: eight are ready,
and `ex-gr-fx08-2` is escalated for the exact missing local Gaussian-beam
concentration supplier stated above. The assigned readiness records hash the
current item and dependency inputs; this authoring record is not independent
proof approval.
