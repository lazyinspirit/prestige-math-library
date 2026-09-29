# Step 1a prerequisite drift — frontier-36-twelve-categories

Scope: all 24 A pages in `research/frontier-36-twelve-categories-scope-ledger.json`; direct requirements and transitive closure were checked against the 16 assigned manifests, the cited prose designs, and `research/plan-spec.json`. Candidate names in the rendered drift bundle were treated as leads only. The two applied corrections below are backward edges to already published pages. No manifest, content, scope ledger, or task was edited.

### fredholm-determinants-and-the-lidskii-trace-formula
VERDICT: no-drift

The four declared A suppliers cover trace-class operators, determinant, functional calculus, and finite-dimensional Jordan theory. The local inventory at `research/plan-functional-analysis-track.md:3297-3339` explicitly owns the trace-norm limit, singular-value estimates, determinant continuity, generalized-eigenspace argument, and Lidskii proof. The earlier invariant-versus-reducing error remains an authoring obligation, not a missing page edge.

### measurable-hilbert-fields-and-direct-integral-operators
VERDICT: no-drift

The seven direct A suppliers match the exact binding list at `research/plan-functional-analysis-track.md:3595-3652`. Measurable sections, completeness, decomposable operators, commutant, and spectral multiplicity are assigned locally; no additional page-level supplier was identified. Countable-choice and standard/separable hypotheses remain explicit authoring obligations.

### recurrence-transience-and-hitting-times-for-markov-chains
VERDICT: no-drift

The PT-1/PT-2/PT-14/PT-15 closure supplies probability, stopping times, and Markov kernels (`research/plan-probability-track.md:1750-1802`). Renewal, Green-kernel, hitting-time and lattice-walk estimates are local proofs. The design expressly proves its Stirling estimate instead of importing a local CLT.

### zariski-tangent-spaces-regular-points-smoothness-and-bertini
VERDICT: no-drift

The declared algebraic-differentials page reaches the earlier dimension, local-ring, separability, and smooth-presentation pages in the plan closure. The Jacobian, regular/smooth and Bertini claims are local inventory obligations (`research/plan-algebraic-geometry-track.md:511-548`). The perfect-field and characteristic-zero qualifications must survive authoring; the [Stacks Bertini argument](https://stacks.math.columbia.edu/tag/0FD4) confirms that the smooth-section claim has substantive hypotheses.

### smooth-projective-serre-duality-and-flag-variety-line-bundles
VERDICT: drift-blocked — the unproved complex semisimple algebraic-group quotient, root-subgroup, Bruhat-cell, and minimal-parabolic interfaces needed before smooth-projective-serre-duality-and-flag-variety-line-bundles (order 510.0161) require an owner decision.

The twelve declared edges match `research/plan-algebraic-geometry-track.md:3069-3075`, but they do not provide the general algebraic-group geometry used by rows 8-16 (`:3120-3147`); the Lie-group and root-system pages do not establish that algebraic quotient. The prior deferral explicitly records 25/30 escalated items, unbuilt coherent-sheaf/Proj/cohomology suppliers, and the missing quotient/root-subgroup/Bruhat bridge (`research/frontier-35-ten-categories-deferred-pairs.json`, entry for this pair). The declared three sheaf pages remain unbuilt; this is a buildability hold as well as a proof burden, even though their edges are present. [Milne, *Algebraic Groups*, Theorem 21.80](https://www.jmilne.org/math/Books/iAG2022.pdf) states the separate Bruhat decomposition, and [Brion, *Lectures on the Geometry of Flag Varieties*, §1](https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf) treats flag geometry; neither has been converted into a verified local proof. Proposed placement, subject to owner authorization: first build the three already declared AG suppliers, then supply the general algebraic-group quotient/Bruhat/minimal-parabolic package either inside this A page with a complete checked proof or in a new AG pair strictly after tensor-product-multiplicities-and-littlewood-richardson-examples (order 510.016) and before this A page (order 510.0161). That latter choice would change scope and the row ownership, so no pair or edge was minted. The full general semisimple proof was not verified in this review.

### classification-of-compact-connected-surfaces
VERDICT: no-drift

The five declared suppliers exactly match the topology-owned binding design at `research/plan-topology-track.md:1618-1653`. Finite triangulation, polygon reduction, normal forms and uniqueness are to be proved in this A page, not cited from a recorded classification result.

### fundamental-solutions-newtonian-potentials-and-green-functions
VERDICT: drift-applied — distributions-test-functions-and-differentiation (order 288.093)

The local fundamental-solution statement is distributional, and its proof evaluates $-\Delta\Phi=\delta_0$ and $-\Delta(\Phi*f)=f$ in $\mathcal D'$ (`research/plan-pde-track.md:960-975`). The design expressly requires FA-24 (`:964`), but that page was absent from the prior declared closure. It is published and strictly earlier; its direct edge is now in the plan. The divergence and product-integration interfaces were already reached transitively.

### bessel-potential-completions-and-real-order-sobolev-spaces
VERDICT: no-drift

The normed-space, Schwartz/Plancherel, and tempered-distribution suppliers match `research/plan-pde-track.md:1519-1565`. Weighted density, completion embedding, and representative independence are local proofs; the later Fourier-multiplier page is expressly a consumer.

### fourier-multipliers-and-sobolev-characterisations
VERDICT: no-drift

The seven declared A suppliers match `research/plan-fourier-analysis-track.md:607-617`; they provide Plancherel, tempered distributions, weak derivatives, Bessel completions, maximal-function and complex interpolation conventions. Hausdorff–Young and integer-order equivalence are proved here. Mihlin boundedness is explicitly deferred and is not silently used (`:647-653`).

### jacobi-fields-conjugate-points-and-the-cut-locus
VERDICT: no-drift

The ODE, connection, geodesic and curvature suppliers are declared, as are the product/Radon measure suppliers used only in the cut-locus nullity claims (`research/plan-differential-geometry-track.md:5707-5715`, `:5830-5848`). Jacobi variation, conjugacy, cut-time and radial-graph arguments remain local.

### the-gauss-bonnet-theorem-for-riemannian-surfaces
VERDICT: no-drift

The seven direct suppliers match `research/plan-differential-geometry-track.md:6199-6207`. The page constructs its finite geodesic triangulation and Euler-characteristic independence internally (`:6270-6339`); it does not consume the later topology classification or Chern–Weil theorem.

### specht-modules-and-the-irreducibles-of-the-symmetric-group
VERDICT: no-drift

Young diagrams/permutation modules, Maschke, and character orthogonality cover the imported interfaces (`research/plan-representation-theory-groups-track.md:592-625`). James's theorem, dominance, basis straightening and classification are local. The design explicitly avoids the forward RG-11 sum-of-squares route for basis spanning.

### symmetric-functions-hall-inner-product-and-schur-bases
VERDICT: no-drift

The published symmetric-polynomial and RG-8 Young-tableau pages supply the two external interfaces. The stable ring, Cauchy kernel, Hall form, Schur basis, Jacobi–Trudi, and skew functions are assigned locally in `research/symmetric-group-planning/proposed-inventory.md:8-27`; its item dependencies reveal no further page supplier.

### unitary-representations-positive-type-and-gns
VERDICT: no-drift

Haar/$L^1$ group algebra, Hilbert-space geometry and spectral-measure suppliers match `research/plan-representation-theory-groups-track.md:1506-1517`. GNS quotient/completion, positive-commutant domination, and the pure/irreducible bridge are local (`:1519-1551`), with no later group-$C^*$ theorem used as a prerequisite.

### chern-weil-theory-and-characteristic-forms
VERDICT: no-drift

The eight declared A pages are exactly the binding DG-38 list (`research/plan-differential-geometry-track.md:11501-11518`). Bundle curvature/Bianchi, de Rham theory and topological characteristic classes are present in the declared closure; invariant-polynomial transgression and comparison over the reals are local (`:11520-11548`).

### alphabet-reduction-and-the-pcp-theorem
VERDICT: drift-applied — arithmetization-and-the-sum-check-protocol (order 641); the-cook-levin-theorem (order 621)

The later binding replacement at `research/plan-computability-theory-track.md:2099-2153` supersedes the older TC-35 list at `:1430-1466`. Its local quadratic-circuit base, fixed-input-prefix proximity test, and NP-hardness step require the published arithmetization and Cook–Levin pages. Both are now direct, backward plan edges. The old direct algebraic-extensions-degree-and-finite-fields (order 96) edge was removed because it is absent from the binding list and remains in the closure through gap-amplification-and-assignment-testing (order 647). [Dinur, *The PCP Theorem by Gap Amplification*, §§8–9](https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf), especially Theorem 9.1 and Lemma 9.2, makes the input-preserving tester and composition loss explicit; §48 assigns those arguments locally. The prior deferred constant-query tester interface is still an authoring proof obligation, not an accomplished theorem. No proof of the entire replacement inventory is claimed here.

### grothendieck-groups-and-graded-cartan-pairings
VERDICT: no-drift

The graded-bimodule, exactness/subobject, and projective-cover suppliers match `research/plan-homological-algebra-track.md:5048-5094`. Graded Krull–Schmidt/cover and pairing adaptations are specified as local rows, including the split-field qualification.

### bounded-bimodule-complexes-and-derived-tensor
VERDICT: no-drift

The graded-bimodule and derived-category suppliers reach ordinary complexes, cones, homotopies and derived tensor. The bounded two-sided totalization and functoriality are local (`research/plan-homological-algebra-track.md:5096-5127`); right flatness versus enveloping-algebra projectivity is explicitly separated.

### hochschild-homology-and-diagonal-koszul-resolutions
VERDICT: no-drift

Graded bimodules, Tor/flatness and Koszul regular sequences cover the imported constructions (`research/plan-homological-algebra-track.md:5175-5191`). The bar resolution, enveloping-algebra side conventions, Tor comparison and polynomial diagonal calculation are local rows (`:5193-5219`).

### braids-as-fundamental-groups-of-configuration-spaces
VERDICT: no-drift

Geometric braids, ordered/unordered configuration spaces, and the fundamental group are the exact three direct suppliers (`research/plan-braid-groups-track.md:268-285`). The tracing/slicing comparison and product reversal are proved locally. The separate plan-validator defect on the configuration-space supplier is reported below, not mistaken for a missing BG-3 edge.

### green-functions-harmonic-measure-and-conformal-invariance
VERDICT: no-drift

The harmonic/Perron, Riemann-map, integral, Radon, Euclidean harmonic and PDE Green pages cover the stated external inputs (`research/plan-complex-analysis-track.md:3588-3628`). Planar existence, harmonic-measure representation and conformal transport are local, under the stated regular-boundary and extension hypotheses.

### the-dbar-complex-and-integral-solutions
VERDICT: no-drift

SC-1–SC-4, differential forms, $d$, Stokes and distributions match the binding SC-5 requirements (`research/plan-complex-analysis-track.md:4152-4189`). Cauchy–Pompeiu, Bochner–Martinelli, local Dolbeault and compact-support $\bar\partial$ arguments are assigned locally; general sheaf cohomology is expressly excluded.

### jensen-theory-and-nevanlinnas-first-main-theorem
VERDICT: no-drift

The isolated-singularity, argument-principle, harmonic/Poisson and integration suppliers match `research/plan-complex-analysis-track.md:3758-3787`. Poisson–Jensen, regularized counting/proximity and first-main-theorem identities are local proof obligations.

### riemann-surfaces-branched-maps-and-differentials
VERDICT: no-drift

The sphere, monodromy, covering and topology surface-classification pages cover the imported interfaces (`research/plan-complex-analysis-track.md:3912-3949`). The compact-surface residue proof is designed from finite triangulation and one-variable residues, not from a later de Rham theorem. The topology classification page is in this run, so its mathematical completion must precede this consumer.

## Validation and owner hold

- After each of the two plan edits, `node tools/validate-plan.mjs research/plan-spec.json` ran and returned `FAIL` with the same two unrelated undeclared-prerequisite findings: `ordered-and-unordered-configuration-spaces` and its examples have item dependencies on `normed-and-banach-spaces` outside their declared closure. This review has no authority to alter that supplier pair; the owner must route its correction.
- `node tools/drift-review-check.mjs --run frontier-36-twelve-categories --before-apply` returned `ERROR drift-check-blocked: smooth-projective-serre-duality-and-flag-variety-line-bundles` and `owner action required; no automatic re-review`. It did not report missing A-page sections or unapplied edges. The engine owns materialization; no manual manifest or scope edit was made.
