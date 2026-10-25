# Advanced QFT and supersymmetry research track

Draft discovery index for the owner-requested category
`advanced-qft-and-supersymmetry`. This track is not registered in the live
physics plan: the active physics run and `physics/research/plan-spec.json`
remain unchanged.

The integrated [prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md),
[future item inventory and dependency DAG](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json),
[noncanonical A/B/P plan fragment](advanced-qft-supersymmetry-2026-10-23/scaffold/plan-fragment.json),
and [page-order preview](advanced-qft-supersymmetry-2026-10-23/scaffold/plan-preview.md)
are stored in the dated research directory. New A/B pages intentionally have
empty `items` arrays; future item IDs, exact source maps and obligation
contracts remain in the proposed inventory. New physical pages use category
`advanced-qft-and-supersymmetry`; local pure-math suppliers stay under the
existing category `quantum-field-theory-mathematics`.

Specialist research notes:

- [research-gauge.md](advanced-qft-supersymmetry-2026-10-23/research-gauge.md):
  principal-bundle Yang–Mills geometry, gauge fixing, BRST/BV, perturbative and
  nonperturbative boundaries.
- [research-eft-experiments.md](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md):
  EFT models, matching, operator spaces, amplitude positivity, SUSY EFT, and
  source-backed empirical fits/searches.
- [research-supersymmetry.md](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md):
  super-Poincaré algebra, representations, superspace, actions, breaking and
  phenomenology.
- [research-localization-bps.md](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md):
  equivariant localization, S3/S4 formulas, instantons, solitons, BPS indices,
  wall crossing and spectral networks.
- [research-symmetries-defects-anomalies.md](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md):
  generalized symmetries, defects, higher structures and anomaly/inflow
  interfaces.
- [auditor-baseline.md](advanced-qft-supersymmetry-2026-10-23/auditor-baseline.md):
  read-only supplier/status findings.
- [recent-source-leads.json](advanced-qft-supersymmetry-2026-10-23/recent-source-leads.json):
  dated metadata/abstract discovery scan only.

The discovery ledger records neither full-text reading nor result acceptance.
Read the individual notes for exact source locators, current carrier status,
import gaps, hypotheses, empirical limitations, and unresolved review work.
The dossier makes no claim of an exhaustive October 2026 literature search,
proof completion, publication readiness, engine acceptance, or deployment.
## Native planning source headings

## Super-Poincare Algebra and Positive Hilbert Representations

A page ID: `aqft-susy-math-foundations`; companion B page: `aqft-susy-math-foundations-examples`; order: 1; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Real graded algebra, central extension, graded Jacobi verification, unitary *-representation and common operator domains.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md), [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`; `integrated-scaffold — Integrated candidate contract`.
Proposed direct P prerequisites: `lie-superalgebras-and-super-representation-theory`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `lie-superalgebras-and-super-representation-theory`.
Future planned item IDs: `def-qftx-super-poincare-algebra-4d`, `lem-qftx-super-poincare-graded-jacobi`, `def-qftx-unitary-super-poincare-representation`, `thm-qftx-supermultiplet-mass-degeneracy`, `thm-qftx-n-extended-central-charge-bounds`, `def-qftx-superspace-grassmann-algebra`, `def-qftx-n1-chiral-superfield`, `def-qftx-graded-trace-class-index-data`, `thm-qftx-witten-index-beta-independence`.

## Non-Abelian Principal-Connection Forms and Curvature

A page ID: `qftx-gauge-geometry`; companion B page: `qftx-gauge-geometry-examples`; order: 2; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Global form and bundle data; principal g-valued form; Cartan curvature, gauge covariance, Bianchi identity, associated covariant derivative.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-supersymmetry.md — Exact existing interfaces and their limits`.
Proposed direct P prerequisites: `lie-groups-invariant-fields-and-the-exponential-map`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `gauge-groups-and-representation-theory-interfaces`, `lie-subgroups-actions-and-homogeneous-spaces`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `lie-groups-invariant-fields-and-the-exponential-map`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `gauge-groups-and-representation-theory-interfaces`, `lie-subgroups-actions-and-homogeneous-spaces`.
Future planned item IDs: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`.

## Local Gauge Slices and Faddeev–Popov Jacobians

A page ID: `qftx-gauge-slice-mathematics`; companion B page: `qftx-gauge-slice-mathematics-examples`; order: 3; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Function-space/domain hypotheses, stabilizers and finite-dimensional transverse-slice Jacobian; Singer obstruction only after full-source review.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `gauge-groups-and-representation-theory-interfaces`.
Future planned item IDs: `def-qftx-gauge-slice-and-faddeev-popov-operator`, `thm-qftx-local-faddeev-popov-slice-jacobian`, `thm-qftx-singer-global-gauge-section-obstruction`.

## Non-Abelian BRST Cohomology and Classical BV Data

A page ID: `qftx-nonabelian-brst-bv-mathematics`; companion B page: `qftx-nonabelian-brst-bv-mathematics-examples`; order: 4; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Finite-jet non-Abelian BRST differential/nilpotence, local cohomology and the classical BV antibracket/master-equation interface.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`; `research-supersymmetry.md — Exact existing interfaces and their limits`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-bv-brst`, `bv-brst-and-homological-physics-interfaces`.
Future planned item IDs: `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, `def-qftx-local-brst-cohomology`, `def-qftx-bv-antibracket-master-action`, `lem-qftx-bv-master-equation-brst-nilpotence`.

## Instanton Charge, Self-Dual Bound, and BPST Example

A page ID: `qftx-instanton-topology-mathematics`; companion B page: `qftx-instanton-topology-mathematics-examples`; order: 5; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Euclidean four-manifold/boundary setup, trace-normalized topological charge, action bound, explicit charge-one SU(2) example.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md), [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-supersymmetry.md — Exact existing interfaces and their limits`; `research-gauge.md — Proposed page and dependency order`.
Proposed direct P prerequisites: `chern-weil-theory-and-characteristic-forms`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `chern-weil-theory-and-characteristic-forms`.
Future planned item IDs: `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, `ex-qftx-su2-bpst-one-instanton`, `op-qftx-clay-4d-yang-mills-existence-mass-gap`.

## Finite Compact Non-Abelian Lattice Data and Wilson Holonomy

A page ID: `qftx-nonabelian-lattice-mathematics`; companion B page: `qftx-nonabelian-lattice-mathematics-examples`; order: 6; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Finite oriented lattice/complex, compact-G edge variables and gauge action; Wilson loop holonomy and controlled strong-coupling theorem.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qft-g02`.
Future planned item IDs: `def-qftx-nonabelian-lattice-gauge-data`, `def-qftx-wilson-loop`, `thm-qftx-strong-coupling-wilson-area-law`.

## Borel and Cartan Equivariant Cohomology

A page ID: `qftx-equivariant-cohomology`; companion B page: `qftx-equivariant-cohomology-examples`; order: 7; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Compact torus Borel construction and Cartan complex, including the local proof d_T squared equals zero on invariants.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Proposed direct P prerequisites: `moment-maps-and-symplectic-reduction`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `moment-maps-and-symplectic-reduction`.
Future planned item IDs: `def-torus-equivariant-cohomology-cartan-model`.

## Borel Localization for Compact Torus Actions

A page ID: `qftx-borel-localization`; companion B page: `qftx-borel-localization-examples`; order: 8; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Localized restriction isomorphism for compact smooth torus actions, with fixed-locus and normal-weight proof.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Future planned item IDs: `thm-borel-localization-for-compact-torus-actions`.

## Atiyah–Bott–Berline–Vergne Integration Formula

A page ID: `qftx-abbv-integration`; companion B page: `qftx-abbv-integration-examples`; order: 9; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Fixed-component pushforward formula with orientation, Euler-class, denominator and isolated-fixed-point conventions.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Future planned item IDs: `thm-atiyah-bott-berline-vergne-integration-formula`.

## Equivariant Elliptic Index and Character Formula

A page ID: `qftx-equivariant-index`; companion B page: `qftx-equivariant-index-examples`; order: 10; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Equivariant elliptic complex index as a representation-ring class and exact fixed-set character formula.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `spin-geometry-dirac-and-index-theory`.
Future planned item IDs: `def-equivariant-elliptic-complex-index`, `thm-equivariant-index-character-formula`.

## Finite-Dimensional Q-Exact Deformation Theorem

A page ID: `qftx-finite-q-exact-localization`; companion B page: `qftx-finite-q-exact-localization-examples`; order: 11; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Explicit graded integration cycle, odd Q/V, even S/O, Q-invariant measure and integrable majorant; dominated convergence and zero boundary term.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Future planned item IDs: `def-finite-dimensional-q-exact-localization-data`, `thm-finite-dimensional-q-exact-deformation-invariance`.

## Framed ADHM Data and Equivariant Instanton Count

A page ID: `qftx-adhm-moduli`; companion B page: `qftx-adhm-moduli-examples`; order: 12; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Precise U(N) framing, moment-map/stability quotient and T2×TG fixed points; characterize formal instanton series.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `research-localization-bps.md — Smallest missing mathematical suppliers`.
Future planned item IDs: `def-framed-u-n-instanton-moduli-and-adhm-data`, `thm-adhm-fixed-point-instanton-count`.

## Finite 2-Group Background Cochains and Consistency

A page ID: `qftx-two-group-cochains`; companion B page: `qftx-two-group-cochains-examples`; order: 13; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Finite simplicial 2-group background with local coefficients/Postnikov class and explicit gauge transformations; prove closure and composition.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `obstruction-theory-postnikov-towers-and-classifying-spaces`.
Future planned item IDs: `def-aqft-two-group-background`, `thm-aqft-two-group-background-consistency`.

## Finite Groupoid Gauging and Gluing

A page ID: `qftx-finite-symmetry-gauging`; companion B page: `qftx-finite-symmetry-gauging-examples`; order: 14; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Finite background field groupoid, cocycle-weighted gauging sum, gauge invariance and declared gluing law.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-finite-group-bf`.
Future planned item IDs: `def-aqft-background-gauging-data`, `thm-aqft-finite-group-gauging`.

## Fusion Data for Non-Invertible Defects

A page ID: `qftx-defect-fusion-mathematics`; companion B page: `qftx-defect-fusion-mathematics-examples`; order: 15; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Exact finite semisimple fusion-category/higher-category data and coherence, kept separate from physical realization.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `higher-categorical-symmetry-and-defect-algebras`, `noninvertible-symmetries-and-anyonic-chains`.
Future planned item IDs: `def-aqft-noninvertible-defect-fusion`.

## Finite-Order EFT Operator Spaces and Redundancies

A page ID: `qftx-eft-operator-quotients`; companion B page: `qftx-eft-operator-quotients-examples`; order: 16; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Define finite-dimensional local operator spaces and prove the exact IBP/EOM/field-redefinition quotient at fixed order.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A2 — Power counting, operator spaces, and redundancy (`aqft-eft-operators`)`.
Proposed direct P prerequisites: `reductive-affine-invariant-theory-and-geometric-quotients`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `reductive-affine-invariant-theory-and-geometric-quotients`, `formal-power-series`.
Future planned item IDs: `def-aqft-local-operator-and-dimension`, `def-aqft-operator-basis-quotient`, `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`, `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`, `ex-aqft-operator-basis-reduction`.

## Wilson Coefficients and Finite-Dimensional RG Systems

A page ID: `qftx-eft-rg-data`; companion B page: `qftx-eft-rg-data-examples`; order: 17; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Define scheme/coefficient-vector data and prove well-posedness of a supplied truncated coupled ODE without calculating a QFT beta function.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A3 — Matching, threshold changes, and RG flow (`aqft-eft-matching-running`)`.
Proposed direct P prerequisites: `qftx-scale-cocycles`, `picard-lindelof-and-first-order-odes`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-scale-cocycles`, `picard-lindelof-and-first-order-odes`.
Future planned item IDs: `def-aqft-scheme-and-wilson-coefficients`, `thm-aqft-truncated-coupled-rge-wellposedness`.

## Gapped-Scalar Dispersion Positivity and Finite Bootstrap

A page ID: `qftx-eft-dispersion-and-bootstrap`; companion B page: `qftx-eft-dispersion-and-bootstrap-examples`; order: 18; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: Axiomatize analytic/crossing/unitary amplitude data, derive one subtracted forward inequality and finite truncated bootstrap constraints.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A5 — Amplitudes, dispersion relations, positivity, and bootstrap (`aqft-eft-amplitudes`)`.
Proposed direct P prerequisites: `qftx-on-shell-amplitudes`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-on-shell-amplitudes`.
Future planned item IDs: `def-aqft-scattering-amplitude-input`, `lem-aqft-crossing-even-forward-amplitude`, `thm-aqft-gapped-scalar-forward-positivity`, `def-aqft-truncated-amplitude-bootstrap-problem`, `prop-aqft-finite-truncated-bootstrap-constraints`, `ex-aqft-scalar-positivity-bound`.

## Classical Non-Abelian Yang–Mills Model

A page ID: `qftx-nonabelian-yang-mills-model`; companion B page: `qftx-nonabelian-yang-mills-model-examples`; order: 19; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Adopted Lorentzian/Euclidean action, global form, bundle/matter content, units, boundary conditions; prove classical gauge invariance and Euler–Lagrange equation.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`.
Proposed direct P prerequisites: `qft-c01`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qft-c01`.
Future planned item IDs: `post-qftx-nonabelian-yang-mills-model`, `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance`, `pthm-qftx-nonabelian-yang-mills-euler-lagrange`.

## Gauge Fixing and Formal Perturbative Yang–Mills

A page ID: `qftx-gauge-fixed-perturbation`; companion B page: `qftx-gauge-fixed-perturbation-examples`; order: 20; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Declare a regulator, gauge condition, renormalization scheme and formal coefficientwise scope; separate finite Jacobians from continuum measures.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-scale-cocycles`, `qftx-bv-brst`, `qftx-causal-renormalization`.
Future planned item IDs: `pthm-qftx-perturbative-yang-mills-st-identity`.

## Yang–Mills Topological Sectors and Instanton Interpretation

A page ID: `qftx-yang-mills-instanton-physics`; companion B page: `qftx-yang-mills-instanton-physics-examples`; order: 21; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Explain how the Euclidean action/postulate uses mathematical instanton charge and distinguish classical saddle examples from continuum quantum sectors.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md), [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-euclidean-yang-mills-sector`.

## Compact Non-Abelian Finite-Lattice Regulator

A page ID: `qftx-nonabelian-lattice-regulator`; companion B page: `qftx-nonabelian-lattice-regulator-examples`; order: 22; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Adopt a finite compact-G regulator, exact finite-volume observable/physical sector and transfer/Hamiltonian convention; assert no continuum limit.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Candidate item contract locations: `research-gauge.md — Proposed page and dependency order`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qft-g02`.
Future planned item IDs: `post-qftx-nonabelian-lattice-regulator`.

## Clay Four-Dimensional Yang–Mills Existence and Mass Gap

A page ID: `qftx-yang-mills-clay-problem`; companion B page: `qftx-yang-mills-clay-problem-examples`; order: 23; category: `quantum-field-theory-mathematics`; library: `mathematics`.

Scope: State the exact compact-simple-G Wightman/Osterwalder–Schrader existence and positive-gap problem with source/date; keep confinement separate.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md).
Future planned item IDs: none fixed on this page yet; authoring inventory remains open.

## EFT Data, Scales, Wilsonian Action and Finite Matching

A page ID: `aqft-eft-foundations`; companion B page: `aqft-eft-foundations-examples`; order: 24; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define UV/light/heavy/regulator/scale data and Wilsonian action; give the bounded heavy-Gaussian matching example.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A1 — EFT models, scales, and Wilsonian integration (`aqft-eft-foundations`)`.
Proposed direct P prerequisites: `qft-c01`, `qftx-heavy-field-eft`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-heavy-field-eft`, `qft-c01`.
Future planned item IDs: `def-aqft-model-and-scale-data`, `def-aqft-wilsonian-action`, `def-aqft-derivative-expansion-and-truncation`, `texp-aqft-finite-heavy-scalar-matching`, `ex-aqft-gaussian-shell-matching`.

## Physical EFT Operator Contracts and Power Counting

A page ID: `aqft-eft-operators`; companion B page: `aqft-eft-operators-examples`; order: 25; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Adopt the field content, gauge/flavor symmetries, coefficient truncation and power-counting regime; consume the finite-order operator quotient.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-aqft-operator-basis-physical-data`.

## Threshold Matching and Coupled RG Evolution

A page ID: `aqft-eft-matching-running`; companion B page: `aqft-eft-matching-running-examples`; order: 26; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Separate threshold matching from scale flow; specify scheme/basis/IR regulator/loop order and derive scale independence under the stated model.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A3 — Matching, threshold changes, and RG flow (`aqft-eft-matching-running`)`.
Future planned item IDs: `def-aqft-threshold-matching-map`, `pthm-aqft-matching-and-running-scale-independence`, `ex-aqft-qed-threshold-matching`.

## SMEFT and HEFT Symmetry Realizations

A page ID: `aqft-smeft-heft`; companion B page: `aqft-smeft-heft-examples`; order: 27; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Specify linear Higgs and nonlinear Goldstone data, finite operator order, chiral counting and restricted SMEFT branch mapping.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — A4 — SMEFT, HEFT, and symmetry realization (`aqft-smeft-heft`)`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `lie-groups-invariant-fields-and-the-exponential-map`.
Future planned item IDs: `post-aqft-smeft-model`, `def-aqft-warsaw-basis-contract`, `post-aqft-heft-model`, `def-aqft-chiral-power-counting`, `pthm-aqft-smeft-as-restricted-heft-branch`, `ex-aqft-smeft-heft-observable-map`.

## EFT Amplitude Interface and Positivity Application

A page ID: `aqft-eft-amplitudes`; companion B page: `aqft-eft-amplitudes-examples`; order: 28; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Bind a declared EFT channel to the mathematical gapped-amplitude theorem; state matching, IR and truncation assumptions and derive a model-specific coefficient constraint.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-aqft-eft-scattering-channel`, `pthm-aqft-forward-positivity-wilson-coefficient`, `ex-aqft-eft-positivity-application`.

## Physical BPS Sectors and Multiplet Interpretation

A page ID: `qftx-susy-algebra-and-multiplets`; companion B page: `qftx-susy-algebra-and-multiplets-examples`; order: 29; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Use fixed metric, charge and adjoint conventions; derive mass degeneracy and central-charge positivity only in unitary representations.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-bps-state-and-saturation`.

## N=1 Superspace and Wess–Zumino/Gauge-Matter Actions

A page ID: `qftx-susy-n1-superspace-and-actions`; companion B page: `qftx-susy-n1-superspace-and-actions-examples`; order: 30; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define Grassmann/superfield data and adopt exact model actions; prove local off-shell invariance and F-potential for stated Kähler geometry.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`.
Future planned item IDs: `post-qftx-n1-wess-zumino-model`, `pthm-qftx-n1-wess-zumino-off-shell-invariance`, `post-qftx-n1-gauge-matter-model`, `pthm-qftx-n1-f-term-potential`.

## N=2 and N=4 Gauge Actions

A page ID: `qftx-susy-extended-actions`; companion B page: `qftx-susy-extended-actions-examples`; order: 31; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: State prepotential, vector/hyper content, global gauge form and component conventions; prove or explicitly premise the extended invariance.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`.
Future planned item IDs: `post-qftx-n2-vector-hypermultiplet-model`, `post-qftx-n4-super-yang-mills-model`.

## Supersymmetry Ward Identities and Wilsonian Nonrenormalization

A page ID: `qftx-susy-ward-and-nonrenormalization`; companion B page: `qftx-susy-ward-and-nonrenormalization-examples`; order: 32; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Separate Ward identities, Wilsonian perturbative theorem, one-loop gauge/FI caveats, Kähler/1PI/anomaly/instanton limits.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md), [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`; `research-eft-experiments.md — A7 — Supersymmetric EFT bridge (`aqft-susy-effective-theories`)`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-bv-brst`.
Future planned item IDs: `pthm-qftx-n1-wilsonian-f-term-nonrenormalization`, `pthm-aqft-wilsonian-superpotential-nonrenormalization`.

## Supersymmetric Moduli, Seiberg–Witten Data and Duality Questions

A page ID: `qftx-susy-moduli-and-dualities`; companion B page: `qftx-susy-moduli-and-dualities-examples`; order: 33; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define classical/quantum moduli, source-qualified N=2 Coulomb branch, N=1 duality checks, and open questions without treating consistency checks as proof.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`; `research-supersymmetry.md — N=2 Coulomb branch and Seiberg–Witten theory`.
Future planned item IDs: `def-qftx-susy-vacuum-moduli-data`, `def-qftx-n2-coulomb-branch-data`, `post-qftx-n2-seiberg-witten-effective-solution`, `pthm-qftx-n2-bps-central-charge-mass`, `pthm-qftx-n2-monopole-condensation-after-n1-perturbation`.

## Supersymmetry Breaking and Collider Inference

A page ID: `qftx-susy-breaking-and-phenomenology`; companion B page: `qftx-susy-breaking-and-phenomenology-examples`; order: 34; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Derive selected F-term breaking/vacuum energy and distinguish model-specific collider limits from framework-wide claims.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `research-supersymmetry.md — Candidate item interfaces and precise remaining gaps`.
Proposed direct P prerequisites: `cm-math-evidence`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `cm-math-evidence`.
Future planned item IDs: `pthm-qftx-global-susy-vacuum-energy`, `pthm-qftx-oraifeartaigh-f-term-breaking`, `exp-aqft-atlas-compressed-higgsino-search-2026`, `exp-aqft-cms-boosted-susy-search-2025`.

## Four-Dimensional SCFT Data and Duality Frontier

A page ID: `qftx-susy-scft-and-frontier`; companion B page: `qftx-susy-scft-and-frontier-examples`; order: 35; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: State conformal/protected observables with exact model scope, dated status and source review; no universal S-duality claim.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-scft-protected-data`.

## Topological Defects and Interfaces

A page ID: `qftx-defects-and-topological-operators`; companion B page: `qftx-defects-and-topological-operators-examples`; order: 36; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define embedded defects/interfaces and isotopy-invariance criterion; distinguish endodefects, invertible symmetry operators and realization.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-categorified-line-operators`, `qftx-ribbon-braid-representations`.
Future planned item IDs: `def-aqft-topological-defect`, `def-aqft-topological-interface`.

## Higher-Form Symmetries and Charge Operators

A page ID: `qftx-p-form-symmetries`; companion B page: `qftx-p-form-symmetries-examples`; order: 37; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Specify support/backgrounds and Abelian Pontryagin-dual character charges; separate non-Abelian 0-form representation labels.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Future planned item IDs: `def-aqft-p-form-global-symmetry`.

## 2-Group Symmetry Backgrounds in Physical Models

A page ID: `qftx-two-group-symmetry-backgrounds`; companion B page: `qftx-two-group-symmetry-backgrounds-examples`; order: 38; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Consume finite mathematical background consistency; define physical coupling/observables and avoid conflating Postnikov coupling with anomaly.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-aqft-two-group-symmetry-realization`, `pthm-aqft-two-group-background-coupling`.

## Non-Invertible Symmetry Operators and Fusion

A page ID: `qftx-noninvertible-symmetries`; companion B page: `qftx-noninvertible-symmetries-examples`; order: 39; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Specify physical defect network/junction and fusion realization; abstract fusion axioms alone are not a QFT symmetry.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `pthm-aqft-noninvertible-defect-realization`.

## Finite Symmetry Gauging as a Specified Model

A page ID: `qftx-finite-symmetry-gauging-physics`; companion B page: `qftx-finite-symmetry-gauging-physics-examples`; order: 40; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Adopt a particular finite model, backgrounds and cocycle action; prove its chosen gauge-invariance/gluing theorem without universal continuum claims.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `post-aqft-finite-gauging-model`, `pthm-aqft-finite-gauging-gluing`.

## Perturbative ’t Hooft Anomalies and Counterterms

A page ID: `qftx-thooft-anomalies`; companion B page: `qftx-thooft-anomalies-examples`; order: 41; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define anomaly modulo specified counterterms; prove a representation/regulator-specific anomaly result with local BRST and descent conventions.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md), [`research-gauge.md`](advanced-qft-supersymmetry-2026-10-23/research-gauge.md), [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`; `research-eft-experiments.md — A6 — EFT gauge and anomaly interface (`aqft-eft-anomalies`)`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-anomaly-cocycles`, `qftx-bv-brst`.
Future planned item IDs: `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`.

## Global Anomalies, Relative Theories and Inflow

A page ID: `qftx-global-anomalies-inflow`; companion B page: `qftx-global-anomalies-inflow-examples`; order: 42; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define determinant-line holonomy and relative boundary/bulk theory; compute a selected global/torsion phase and cancellation.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`; `integrated-scaffold — Integrated candidate contract`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `chern-weil-theory-and-characteristic-forms`.
Future planned item IDs: `def-aqft-global-anomaly-holonomy`, `def-aqft-anomaly-inflow-relative-theory`, `pthm-aqft-global-anomaly-test`, `ex-aqft-anomaly-inflow-example`.

## Anomaly Matching and Categorical Classification Frontier

A page ID: `qftx-anomaly-matching-and-frontier`; companion B page: `qftx-anomaly-matching-and-frontier-examples`; order: 43; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Prove invariance only along a declared symmetry-preserving flow and formulate a tightly bounded classification question after status review.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-symmetries-defects-anomalies.md — Proposed dependency-ordered pathway`.
Future planned item IDs: `pthm-aqft-symmetry-preserving-rg-anomaly-match`.

## Heavy-Chiral Threshold and Anomaly EFT

A page ID: `aqft-eft-anomalies`; companion B page: `aqft-eft-anomalies-examples`; order: 44; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: State local anomaly/descent and heavy chiral threshold data; derive one Wess–Zumino matching relation with representations, regulator and counterterms fixed.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md), [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `research-eft-experiments.md — A6 — EFT gauge and anomaly interface (`aqft-eft-anomalies`)`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-anomaly-cocycles`.
Future planned item IDs: `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`, `ex-aqft-heavy-fermion-anomaly-threshold`.

## Supersymmetric EFT Operators and Thresholds

A page ID: `aqft-susy-effective-theories`; companion B page: `aqft-susy-effective-theories-examples`; order: 45; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define supersymmetric Wilsonian action/operators and match a declared threshold; keep holomorphic Wilsonian and 1PI data separate.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md), [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `research-eft-experiments.md — A7 — Supersymmetric EFT bridge (`aqft-susy-effective-theories`)`.
Future planned item IDs: `def-aqft-susy-wilsonian-action`, `pthm-aqft-supersymmetric-threshold-matching`, `ex-aqft-soft-breaking-effective-operator`.

## EFT Measurements, Global Fits and Search Likelihoods

A page ID: `aqft-eft-experimental-inference`; companion B page: `aqft-eft-experimental-inference-examples`; order: 46; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Report operational data and source-backed model-specific fit/search likelihoods with nuisance/uncertainty/coverage qualifications.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-eft-experiments.md`](advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md).
Candidate item contract locations: `research-eft-experiments.md — Experimental accounts and inference obligations`.
Proposed direct P prerequisites: `cm-math-evidence`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `cm-math-evidence`, `qft-x03-examples`.
Future planned item IDs: `exp-aqft-atlas-global-smeft-fit-2026`, `exp-aqft-cms-global-smeft-fit-2026`, `exp-aqft-cms-multiboson-smeft-2026`, `exp-aqft-atlas-tau-squark-gluino-search-2025`.

## Rigid Supersymmetric Backgrounds and Localization Data

A page ID: `qftx-susy-backgrounds`; companion B page: `qftx-susy-backgrounds-examples`; order: 47; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Specify spin/R backgrounds, Killing-spinor equations, off-shell multiplets, Q square, measure, contour, gauge fixing and regulator.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-susy-background-data`, `post-qftx-rigid-supersymmetric-background`.

## Field-Theory Q-Exact Localization Derivation

A page ID: `qftx-qexact-field-theory-localization`; companion B page: `qftx-qexact-field-theory-localization-examples`; order: 48; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: State conditional Ward identity and all measure/contour/anomaly/zero-mode assumptions; distinguish formal continuum derivation from finite theorem.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-supersymmetry-fluctuation-complex`, `pthm-qftx-qexact-localization-ward-identity`.

## Three-Dimensional S3 Localization Examples

A page ID: `qftx-s3-partition-functions`; companion B page: `qftx-s3-partition-functions-examples`; order: 49; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Source-faithful N=2 Chern–Simons-matter setup, radius/level/R-charge/contour conventions and matrix integral.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-chern-simons-bf-gravity`.
Future planned item IDs: `post-qftx-s3-cs-matter-localization-model`, `ex-qftx-s3-cs-matter-matrix-integral`.

## Four-Dimensional S4 Localization Examples

A page ID: `qftx-s4-partition-functions`; companion B page: `qftx-s4-partition-functions-examples`; order: 50; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Name N=2 gauge/hyper content, radius/coupling/contour and one-loop/instanton factors; preserve Pestun noncommutative-deformation caveat.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `post-qftx-s4-n2-localization-model`, `ex-qftx-s4-n2-partition-function`.

## Instanton Counting and Ω-Background

A page ID: `qftx-instanton-localization-physics`; companion B page: `qftx-instanton-localization-physics-examples`; order: 51; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Connect finite ADHM equivariant pushforward to source-specific formal partition series; state noncompactness and regulator limits.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-instanton-equivariant-partition-series`, `pthm-qftx-omega-background-fixed-point-expansion`.

## BPS Solitons and the Classical Monopole Bound

A page ID: `qftx-bps-solitons-monopoles`; companion B page: `qftx-bps-solitons-monopoles-examples`; order: 52; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Use specified adjoint-Higgs Prasad–Sommerfield energy, both g-normalized square identities, falloff/Bianchi surface term and separate flux quantization.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md), [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-adjoint-higgs-monopole-sector`, `pthm-qftx-bogomolny-monopole-energy-bound`, `ex-qftx-su2-bps-monopole`.

## Witten and Superconformal Indices

A page ID: `qftx-bps-indices`; companion B page: `qftx-bps-indices-examples`; order: 53; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Define trace-class graded Hilbert-space supertrace, prove beta independence under exact supercharge conditions, and name protected-sector convergence.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-physical-bps-index`, `pthm-qftx-physical-index-beta-independence`, `def-qftx-superconformal-index`.

## Hall Wall Crossing and Physical BPS Dictionary

A page ID: `qftx-physical-hall-bps-wall-crossing`; companion B page: `qftx-physical-hall-bps-wall-crossing-examples`; order: 54; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Reuse finite-quiver/CoHA interfaces only in scope; formulate exact physical charge lattice/index and prove a model-specific bridge before identifying counts.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md), [`research-supersymmetry.md`](advanced-qft-supersymmetry-2026-10-23/research-supersymmetry.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Proposed direct P prerequisites: `qftx-hall-bps-wall-crossing`.
Additional current-source context pages (nonlogical unless an item edge explicitly says otherwise): `qftx-hall-bps-wall-crossing`, `hall-stability-dt-bps-and-wall-crossing`, `cohomological-hall-algebras-and-quiver-correspondences`.
Future planned item IDs: `def-qftx-physical-bps-charge-data`, `pthm-qftx-physical-bps-wall-crossing`.

## Spectral Networks, Framed BPS Data and Defect Indices

A page ID: `qftx-spectral-networks`; companion B page: `qftx-spectral-networks-examples`; order: 55; category: `advanced-qft-and-supersymmetry`; library: `physics`.

Scope: Specify class-S curve/cover/trajectory/web/charge and defect framing; review current sources before updating historical open status.

Planning contract source: [integrated prose scaffold](advanced-qft-supersymmetry-2026-10-23/scaffold/prose-scaffold.md) and [complete future-item inventory, exact dependency edges, status and obligations](advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json).
Research source notes: [`research-localization-bps.md`](advanced-qft-supersymmetry-2026-10-23/research-localization-bps.md), [`research-symmetries-defects-anomalies.md`](advanced-qft-supersymmetry-2026-10-23/research-symmetries-defects-anomalies.md).
Candidate item contract locations: `integrated-scaffold — Integrated candidate contract`.
Future planned item IDs: `def-qftx-spectral-network-data`, `ex-qftx-t3-finite-web-index`.

