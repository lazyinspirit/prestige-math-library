# Quantum Field Theory including QED audit

The authoritative QFT/QED prose and future supplier binding have been repaired
within this audit's write scope. The revised 177-record inventory resolves
every declared dependency in the 31 proposed A/B pairs: direct root-mathematics
items and their `deps`/`justified_by` closure are present and published; local
QFT proof modules state the required domains and hypotheses; and the allowed
NRQM prerequisite arguments are reread at current bytes. This is an audit of
research contracts, not production proof acceptance: **none of the 177 QFT
interfaces has an authored `physics/items` page**. The exact record-by-record
path, status, scope, hypotheses, source hash and consumer map is in
`supplier-map.json`.

The actual QFT prose now names its test spaces, locally convex topology,
distribution pairing, first-linear Hilbert convention, operator domains,
spin cover (orientation from polar-decomposition paths and surjectivity from
FF6's boost/rotation factorization), Dirac test conjugation, translation
Fourier sign, geometric versus momentum cones, spacelike support relation,
gauge transformations, regulator objects, renormalization scopes, scattering
limits, measurement objects and
empirical interpretation before using them. The free-field matrix-coefficient
sign is checked against FF3's actual kernel and argument order. The Dirac
formula is checked against FF6's antilinear smearing in $F$ and spin-cover
covariance. `definitions-terms.md` is the review index.

## Repairs and dependency changes

QFT-IR04's Baire step used a theorem requiring Dependent Choice, while its
record listed only the Axiom of Choice. The revised record adds the published
`thm-choice-implies-dependent-implies-countable-choice` as a mathematical
premise. Its full proof selects a serial successor function under AC and
recurses from a prescribed initial point. This repairs the exact internal
consumer cone: finite-scaling-degree extension, point-supported counterterm
jets, the four-dimensional logarithmic scaling claim, unique subcritical
extension, the one-loop log-degree example, and the formal-renormalization
scope remark. No source item or import was edited.

The historical QFT-MX04 `lem-qft-example-covariant-estimate-errors` mixed a
deterministic ratio/Taylor estimate with finite-covariance and
minimum-variance-weighted-estimator clauses. Under the owner's explicit
exclusion of unbuilt statistical and numerical-analysis suppliers, the latter
clauses and their two root dependencies are removed from the current QFT
binding. A complete pure-analysis proof is supplied as
`lem-qft-example-deterministic-ratio-error` in
`complete-local-arguments.md#MX04-D`; its exact rational second-order
remainder and explicit finite rectangle constant also verify the full
derivative, without an FTC, chain-rule or compactness supplier. B08 is rebound to it. EXP01 loses the
statistical-helper edge, and its affine anomaly subtraction still consumes
only the reported experiment. The Fan et al. result and the authors' “1σ”
labelled uncertainty are preserved as source-reported empirical data; the
inventory and prose make no independent covariance, fit, likelihood,
coverage or Gaussian reconstruction. The excluded theorem is a scope
restriction, not an open problem.

The historical 2026-10-04 supplier map has five stale math-item hashes. Their
old and current values, current import pins and source paths appear in
`progress.json` and `supplier-map.json`; the current 25 direct root math
suppliers all match the physics snapshot and manifest. These are historical
at-reading mismatches, not edits to root math or import snapshots.

The QFT free-field and unit bridge now records exact draft SR/EM definition
carriers in `revised-inventory.json`: SR affine geometry/chart/SI conventions
and EM SI/tensor/gauge conventions. The QFT prose itself defines the needed
affine action. RPP's read-only local Lorentz proof closes the needed basis,
cone and observer claims from eight published mathematics items. Six SR
snapshot IDs have no canonical root original; the imported snapshots are not
certified as canonical. The SR/EM *physical* covariance, clock, Maxwell and
Lorentz-force postulates are explicitly excluded from QFT premises. No NRQM
measurement/spin postulate, GR dynamics, P-NUM or numerical-methods result is
used.

The current proposed dependency edges are exact in `revised-inventory.json`.
Root has applied the six shared page-requires additions and removed the obsolete
probability-space prerequisite from the canonical QFT-MX04 page; the current
plan-spec records and hash are captured in `integration-changes.json`. The item
edge proposals remain research-only and are not proof acceptance. This worker
changed no shared or other-category file.

## Promised scope and current mathematical coverage

| Area | Defined or locally proved scope | Hold or theorem boundary |
|---|---|---|
| Algebraic states/GNS and moments | Unital star algebra, positive normalized state, zero-norm Cauchy–Schwarz, left radical, common-domain representation, cyclic vector; positive continuous moments reconstruct a weak smeared field only when those moments are supplied. | No norm/C*-completion from algebraic input, no unspecified positive interacting functional, and no conversion of formal coefficients into moments. |
| Free scalar and Dirac QFT | Actual future-shell Hilbert spaces, Fock sectors, CCR/CAR, domains, scalar KG/Dirac equations, covariance, forward spectrum, local or graded-local identities, vacuum moments and Weyl observables. | These are the selected free models. Spin/statistics assignments are model choices, not a general theorem. No sharp point-field operator or interacting field follows. |
| Euclidean/OS reconstruction | Defines Schwinger hierarchies, reflection involution and positive-time quadratic form; states E0–E4 and the corrected OS-II uniform-in-order growth requirement; locates the uniqueness/locality/spectrum conclusion. | The 1973 E0–E4 sufficiency claim is corrected by OS-II. The full OS-II proof was not read, and no OS reconstruction is a QFT item supplier. Finite-dimensional QFT-IR02 measures are not continuum Schwinger data. |
| AQFT nets | Defines algebraic local nets, isotony, spacelike commutativity, covariance, C*-net strengthening and GNS states; constructs the concrete norm-closed free-scalar Weyl net and the even Dirac observable net. | No general net construction, Haag duality, split property, local factor classification or superselection-sector theorem. |
| Spin-statistics/CPT | Defines the central (-I) action, graded locality, scalar and Dirac representations, and the standard positive-metric Wightman theorem contracts. Records the antiunitary CPT target and OS Euclidean PCT statement. | No full theorem proof/source contract or logical consumer. The free field examples do not derive particle/statistics assignments. |
| Scattering, LSZ and Haag | Defines wave operators as strong limits, the conditional S operator and asymptotic completeness; specifies stable-pole/residue and asymptotic-field inputs to LSZ; defines the equal-time unitary comparison to which Haag-type no-go applies. | No interacting wave operators, stable interacting poles, LSZ theorem proof, Haag theorem proof, or exact S operator. QFT-X02/MX02 remain formal tree coefficients. |
| QED gauge and BRST | Defines U(1) connection, curvature, charged field, covariant derivative and gauge action; finite compact-lattice Gauss projection and finite Ward/contact identities; defines a BRST complex and cohomological physical classes. | No BRST charge/cohomology/positive quotient, no Gauss–BRST equivalence, no all-order causal gauge-compatible normalization, no continuum Ward theorem. |
| Renormalization, RG and EFT | QFT-IR04 proves extension and local delta-jet ambiguity for the stated finite-scaling-degree point singularities; QFT-IR05 proves finite quartic graph power counting. Defines causal factorization, RG flow and EFT data/error contract. | No arbitrary products, all overlapping Lorentzian diagonals, all-order beta function, Wilsonian integration, EFT matching or truncation error. |
| Finite regulators and constructive existence | Exact finite-mode form realization, finite Gibbs trace, finite-dimensional Euclidean measures, bounded Dyson evolution/remainder, finite lattice identities and coefficientwise formal QED. Defines the uniform limiting objects/estimates required for constructive existence. | No regulator removal, formal-series convergence, path-integral measure on fields, or four-dimensional interacting QED/Yang–Mills construction. The dated Yang–Mills existence/mass-gap item is separately an open problem with no proof stamp or consumer. |
| QED calculations and experiment | Exact finite matrix traces, phase-space integrals, finite-time kernels, minimal Dirac (g_s=2) coefficient, formal tree annihilation/scalar coefficients, finite and formal Ward identities; Fan et al.'s reported result and stated uncertainty are transcribed with apparatus qualifications. | No one-loop Pauli form factor, all-orders renormalized amplitude, precision Standard Model prediction, raw-trial fit, covariance or uncertainty-budget reconstruction. |

The detailed table in the authoritative prose still covers all 31 assigned pair
contracts; finite/formal breadth is not used to imply continuum existence.
Full OS, AQFT classification, spin-statistics/CPT proofs, LSZ/Haag proofs,
RG/EFT estimates, BRST cohomology and continuum QED are explicit neighboring
framework obligations without edges into the repaired 31-pair inventory.

## External consumers and residual limits

The four root-mapped page consumers remain contract-compatible after repair:
QSM's finite regulated Gibbs bridge uses the fixed finite-mode QFT trace-Gibbs
theorem; TGR MHS02 uses the Fock CCR/CAR and Segal/Weyl domain; TGR MHS03 uses
the massless free-scalar shell smear and Segal domain; TGR PHS02 adopts the
constructed free scalar plus its explicit measurement postulate. Their exact
claims, source hashes and no-limit boundaries are recorded in
`external-consumer-impacts.json`. The QX11 statistics removal has no external
consumer cone. QFT-X03 does retain the empirical-premise edge from the later
B-side `pthm-qft-reported-electron-anomaly-shift` to the earlier B-side EXP01
record. `SCHEMA.md` and `depcheck.mjs` allow an earlier item on the same B page
to feed a later item; `B_leaf` blocks only cross-page dependencies. The edge is
not detached or mislabeled as absent.

The dated `op-qft-yang-mills-existence-and-mass-gap` record follows the
official Jaffe–Witten/Clay statement for compact simple gauge group on
$\mathbb R^4$, with a positive finite mass gap and Wightman/OS-strength
axioms. Clay's current page stated on 2026-10-12 that no proof is known. This
open-problem record has no proof stamp and no logical consumer. The absence of
a continuum QED construction in this dossier is reported as a scope hold, not
as a separately sourced open-problem claim.

The source audit does not claim full OS-II, spin-statistics, CPT, Haag or LSZ
proof reading, nor manual re-reading of every inherited transitive root proof.
`source-reading.json` gives the actually read source ranges and hashes and
names each unavailable proof boundary. The audit did not edit root math items,
physics import snapshots, SR/EM sources, live CM/QM/GR suppliers, production
items, other category pages, shared splice, engine state or build runs.
