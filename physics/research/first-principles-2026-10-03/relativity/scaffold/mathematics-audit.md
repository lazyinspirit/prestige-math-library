# Mathematical supplier audit

2026-10-03 research audit. Read statements and complete proof/verification bodies of the 31 exact original files listed below. Publication/audit stamps are metadata, not this team's proof acceptance. Imports and originals were read only. Actual scoped SHA-256 comparisons are in [supplier-byte-check.json](supplier-byte-check.json); a match checks bytes, not mathematical suitability.

All proposed needed mathematics is assigned to M01–M26 in [mathematical-prerequisites.md](mathematical-prerequisites.md). Elementary real/vector algebra uses the published finite-dimensional interfaces and the explicit S0/S2 constructions; S4 now gives the needed one-dimensional proper-time FTC/inverse/substitution argument, and G2 uses the actually reviewed choice-free Euclidean inverse and repaired parameter-dependent ODE proofs. Definitions of smoothness, germs, topology, bundle charts/sections, coordinate tangent bases, Lie brackets, pullback connections, determinant/adjugate and linear algebra appear in the suppliers' `deps` and `justified_by`. Their exact IDs can be recovered from the unchanged files; no claim of reading every transitive proof is made.

| Exact ID / root path (physics import same suffix) | Status / read | Relevant statement, hypotheses, suitability and intended use |
|---|---|---|
| [def-smooth-manifold](../../../../../items/def-smooth-manifold.md) | published; full statement/definition and proof if present read | M01/manifold chart topology |
| [def-differential-of-a-smooth-map](../../../../../items/def-differential-of-a-smooth-map.md) | published; full statement/definition and proof if present read | M03/curve differential |
| [def-derivation-at-a-point-and-tangent-space](../../../../../items/def-derivation-at-a-point-and-tangent-space.md) | published; full statement/definition and proof if present read | M03/tangent velocity definition |
| [def-tangent-bundle-as-a-disjoint-union](../../../../../items/def-tangent-bundle-as-a-disjoint-union.md) | published; full statement/definition and proof if present read | GR02/tangent underlying set only |
| [def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union](../../../../../items/def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union.md) | published; full statement/definition and proof if present read | GR02/cotangent underlying set only |
| [def-smooth-vector-field-as-a-tangent-bundle-section](../../../../../items/def-smooth-vector-field-as-a-tangent-bundle-section.md) | published; full statement/definition and proof if present read | GR02/observer smoothness; AC_omega |
| [def-type-r-s-tensor-bundle](../../../../../items/def-type-r-s-tensor-bundle.md) | published; full statement/definition and proof if present read | GR02/tensor fibre definition; smoothness needs theorem |
| [def-type-r-s-tensor-on-a-finite-dimensional-vector-space](../../../../../items/def-type-r-s-tensor-on-a-finite-dimensional-vector-space.md) | published; full statement/definition and proof if present read | M04/tensor algebra |
| [def-contraction-of-a-mixed-tensor](../../../../../items/def-contraction-of-a-mixed-tensor.md) | published; full statement/definition and proof if present read | M06/contraction definition |
| [lem-contraction-is-independent-of-the-basis-formula](../../../../../items/lem-contraction-is-independent-of-the-basis-formula.md) | published; full statement/definition and proof if present read | M06/basis-independent contraction |
| [thm-tensor-transition-laws-define-a-smooth-vector-bundle](../../../../../items/thm-tensor-transition-laws-define-a-smooth-vector-bundle.md) | published; full statement/definition and proof if present read | GR02/smooth tensor transition structure; inherited cocycle audit open |
| [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure](../../../../../items/thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure.md) | published; full statement/definition and proof if present read | GR02/smooth tangent structure; AC_omega |
| [def-countable-choice](../../../../../items/def-countable-choice.md) | published; full statement/definition and proof if present read | GR02/explicit inherited countable choice |
| [def-affine-connection-on-a-smooth-manifold](../../../../../items/def-affine-connection-on-a-smooth-manifold.md) | published; full statement/definition and proof if present read | M05/metric-free connection |
| [def-connection-on-a-smooth-vector-bundle](../../../../../items/def-connection-on-a-smooth-vector-bundle.md) | published; full statement/definition and proof if present read | M05/connection rules and Hom construction |
| [def-curvature-of-an-affine-connection](../../../../../items/def-curvature-of-an-affine-connection.md) | published; full statement/definition and proof if present read | M06/curvature sign definition |
| [def-geodesic-of-an-affine-connection](../../../../../items/def-geodesic-of-an-affine-connection.md) | published; full statement/definition and proof if present read | M09/geodesic definition, boundaryless |
| [def-covariant-derivative-along-a-curve](../../../../../items/def-covariant-derivative-along-a-curve.md) | published; full statement/definition and proof if present read | M09/derivative along curve |
| [thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension](../../../../../items/thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension.md) | published; full statement/definition and proof if present read | M09/frame and extension independence |
| [cor-real-symmetric-bilinear-forms-are-classified-by-inertia](../../../../../items/cor-real-symmetric-bilinear-forms-are-classified-by-inertia.md) | published; full statement/definition and proof if present read | M01/Lorentz signature basis classification |
| [thm-symmetric-bilinear-forms-have-an-orthogonal-basis](../../../../../items/thm-symmetric-bilinear-forms-have-an-orthogonal-basis.md) | published; full statement/definition and proof if present read | M01/orthogonal basis including indefinite forms |
| [thm-picard-lindelof-local-existence-and-uniqueness](../../../../../items/thm-picard-lindelof-local-existence-and-uniqueness.md) | published; full statement/definition and proof if present read | M09/local IVP only, no smooth dependence from this result |
| [thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves](../../../../../items/thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves.md) | published; full statement/definition and proof if present read | G2/local smooth flow, supplemented by the repaired joint-parameter ODE proof |
| [def-levi-civita-connection](../../../../../items/def-levi-civita-connection.md) | published; full statement/definition and proof if present read | REJECT direct Lorentz use: supplied metric Riemannian |
| [lem-koszul-formula-is-necessary-for-a-levi-civita-connection](../../../../../items/lem-koszul-formula-is-necessary-for-a-levi-civita-connection.md) | published; full statement/definition and proof if present read | COMPARISON only; local extension M05 |
| [prop-christoffel-formula-for-the-levi-civita-connection](../../../../../items/prop-christoffel-formula-for-the-levi-civita-connection.md) | published; full statement/definition and proof if present read | REJECT direct Lorentz use; local formula M05 |
| [thm-contracted-second-bianchi-identity](../../../../../items/thm-contracted-second-bianchi-identity.md) | published; full statement/definition and proof if present read | REJECT direct Lorentz use; G3 complete signed contraction |
| [lem-matrix-inversion-preserves-ck-regularity](../../../../../items/lem-matrix-inversion-preserves-ck-regularity.md) | published; full statement/definition and proof if present read | M05/smooth inverse for nonzero determinant |
| [thm-chain-rule-for-total-derivatives](../../../../../items/thm-chain-rule-for-total-derivatives.md) | published; full statement/definition and proof if present read | M03/coordinate change chain rule |
| [thm-multivariable-taylor-formula-with-lagrange-remainder](../../../../../items/thm-multivariable-taylor-formula-with-lagrange-remainder.md) | published; full statement/definition and proof if present read | M08/controlled finite-order Taylor expansion |
| [thm-stokes-theorem-for-smooth-singular-chains](../../../../../items/thm-stokes-theorem-for-smooth-singular-chains.md) | published; full statement/definition and proof if present read | M13/finite smooth singular chains only |

## Scope and hypothesis findings

M01 requires real finite-dimensional nondegenerate signature $(3,1,0)$, so the two bilinear-form suppliers apply, including their characteristic-not-two hypothesis. M03/M08 use differentiability only on their declared domains; Taylor requires an open convex domain containing the full segment, and a uniform derivative bound supplies the big-O constant. M09 uses smooth vector-field coefficients and a boundaryless coordinate region; local ODE existence is no completeness theorem. The reviewed geodesic supplier defines affine parametrization and allows constant curves; physical massive worldlines impose nonzero future timelike velocity separately. Curve derivative independence does not assert ambient extension existence.

The tangent/cotangent disjoint unions do not themselves supply topology. Tangent smooth structure explicitly assumes AC_omega; inherited use must retain that assumption. The tensor-transition theorem calls a cocycle-construction supplier; its full proof/hypotheses remain inherited audit debt. The connection-on-bundle supplier includes a complete choice-free Hom construction from already supplied smooth bundles. This does not erase assumptions needed earlier to obtain the tangent bundle.

Published Levi–Civita, Koszul, Christoffel and contracted Bianchi interfaces are for a supplied Riemannian metric. Their arguments are useful comparison material, but GR does not satisfy the positive-definite premise. G1 now gives the complete nondegenerate construction and G3 proves the full Lorentzian Bianchi/contraction identities. Signed pseudo-orthonormal sums must replace unsigned positive-metric traces. No edits or defect repairs to published suppliers were made.

Singular-chain Stokes proves a finite chain identity. Converting a spacetime hypersurface/region into its admissible integration framework requires additional definitions/arguments; it does not by itself yield arbitrary noncompact energy conservation. G0–G7, Q1–Q4 and C1–C5 now supply exact geometry/variation/finite-flux/model/flat-gauge/local-causal arguments. M15/M16 general global causal and nonlinear Einstein PDE closure remains genuinely required; quantitative empirical authoring requires primary reports, and no such experiment is invented.

## Dependency boundary

Direct reviewed suppliers: table above. Inherited transitive interfaces: unchanged suppliers referenced by those files, not independently reaudited here. New local mathematics is identified by M01–M26 and exact S/G/Q/C/E/H proof sections; mathematics has mathematical premises only and physical interpretation/adoption remains separate. Pin check: scoped original/import/manifest identity only. Proposed consumers may cite complete local arguments only after canonical authoring and independent review; OPEN arguments cannot become load-bearing item deps.

Each inventory claim has an M-label or exact direct supplier above. The proposed inventory reserves room for supplier closure and explicitly blocks consumer claims whose missing theorem would be necessary. This is an honest prerequisite map, not a complete transitive audit or a production readiness receipt.

## Expansion supplier review and newly authorized corpus

The owner explicitly authorized unpublished root mathematical prose as suppliers.
The actual `research/plan-pde-track.md` PDE-9/10 inventory and proof-architecture
ranges were read; its Kirchhoff/Duhamel/energy interfaces are relevant, but they
are planning text, not complete proof bodies. The actual mathematical EM W1–W2
proof bodies now complete this restricted flat all-space branch and were checked
for their exact use in Q3. Root `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`,
`def-polar-surface-measure-on-the-unit-sphere`,
`thm-polar-coordinates-formula-for-lebesgue-measure` and
`lem-sphere-and-ball-measures-scale` bodies were read for that use; their
countable-choice assumptions travel into the integral supplier. Componentwise
wave solving introduces no physical EM prerequisite into mathematics.

The actual DG-22 normal/index/conjugacy/cut inventory in
`research/plan-differential-geometry-track.md` and the complete original
`thm-index-lemma` proof were read. The theorem is Riemannian and cannot directly
supply Lorentz timelike claims. C2 independently proves the needed Lorentz
normal-space Jacobi/index extension, and the Gauss-lemma argument proves local
maximum before conjugacy without an infinite-dimensional shortcut. DG's Einstein
branch is explicitly deferred; PDE's general hyperbolic systems are explicitly
out of scope. No suitable Einstein Sobolev/global-development proof was located
in these canonical plans; E0–E3 and H0–H4 therefore supply the genuine nonlinear/local/global closure separately.

Additional actual supplier bodies read: the repaired
`thm-smooth-dependence-of-ode-solutions-on-parameters` (jointly smooth field,
common compact local cylinder, explicit highest-jet bootstrap),
`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` and its
Newton-contraction lemma; metric-free geodesic smooth dependence, flow box,
induced connection contraction; smooth Frobenius coordinate/Pfaff/codimension-one
criteria and their frame-reduction/commuting-flow proofs; and the
absolute-continuity FTC. G2 supplies the frame-reduction lemma's implicit smooth
matrix ODE through the checked repaired parameter theorem. C3 explicitly carries
both countable and dependent choice from the absolute-continuity FTC. These are
bounded actual interface/proof checks, not an assertion that every transitive
library proof was independently reread.

## Actual advanced analytic and global closure

E0 gives a complete corrected finite-Fourier Galerkin proof with positive projected mass matrix, integer Sobolev/product estimates, energy bounds, Fourier-tail/Ascoli compactness, uniqueness and smooth persistence. The actual published `items/thm-fourier-basis-and-parseval-on-the-n-torus.md` proof was checked and rescaled from period1 to2π; E0 also gives direct needed norm/embedding calculations. Friedrich–Rendall's displayed regularization/scaling, composition estimate, weak-in-time convergence shortcut and scalar-potential normalization are not used where defective. E1–E3 supply exact Einstein/constraints/matter deductions, with the actual checked dust reduction/subsidiary external equations and signature conversion recorded explicitly.

H0–H4 supply Lorentzian convex neighborhoods, limit curves, length upper semicontinuity, full Cauchy/global-hyperbolicity equivalence, volume time, smooth splitting and smooth MGHD. Actual root suppliers `items/thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function.md`, `items/thm-hopf-rinow.md` and `items/cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets.md` were inspected for H1; positivity is used only for the auxiliary Riemannian metric. Full AC is explicitly adopted for compact/weak selection, not silently reduced to countable choice. Exact external source theorem/hypothesis/proof/use records are [checked-proof-interfaces.json](../advanced-sources/checked-proof-interfaces.json); [source-metadata.json](../advanced-sources/source-metadata.json) records actual bounded readings, not invented whole-paper audits. H4 uses the checked external Sbierski proof and fills quotient second countability locally. S11 fills Giulini's omitted curvature calculation locally without a global orbit-quotient assumption. These suppliers contain exclusively mathematical premises; adopted physical laws remain separate.
