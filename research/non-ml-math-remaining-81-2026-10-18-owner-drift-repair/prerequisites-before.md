# Proposed prerequisites and dependency order

This is a conceptual acyclic supplier-to-consumer graph for future native
planning, not a manifest. The arrow `A → B` means “B requires A.” Each edge
must be justified by the exact claim or proof step in B; page proximity,
physical motivation, and a citation do not create dependency edges. Actual canonical IDs and current statuses are recorded in the six final lane
dossiers and exact supplier entries in `proposed-pages.json`; the independent
audit must confirm the per-claim graph before authoring. A physics-tree item
with `domain: mathematics` is semantically eligible when its full prerequisite
closure is mathematical. Physical premises remain ineligible. Current math
`depcheck` scans root `items/` only, so a physics-only mathematical item has no
current direct resolver route: verify a supported same-ID import/adoption
route before adding a native edge, and do not duplicate or relocate the item.

## Shared mathematical prerequisites

1. **Scalars and modules.** State the coefficient ring or field, unital module
   conventions, tensor products, quotient constructions, universal properties,
   and the hypotheses needed for each. Reuse the actual abstract-algebra,
   linear-algebra, tensor-products-of-modules, and quotient/universal-property
   suppliers. Do not silently upgrade a commutative ring to a field or assume
   a basis exists without its stated choice or freeness proof.
2. **Algebras and representations.** A unital algebra representation on a
   module M is a unital algebra map to End(M), equivalently a unital left
   module; “faithful” means the map is injective. Use the current Lie and
   associative module definitions instead of a second set of foundations.
3. **Categories and tensor structure.** Define categories, functors, natural
   transformations, monoidal categories, associators and unitors before using
   tensor-category language. A braiding is an invertible natural family
   satisfying both hexagons; a symmetric braiding has its double crossing equal
   to the identity. A ribbon structure also requires a twist compatible with
   duality and braiding. Do not collapse these structures.
4. **Homological language.** Define graded modules, chain complexes, the degree
   of every differential and operation, chain maps, homotopies, homology and
   derived categories before using deformation complexes or categorification.
   Fix cohomological versus homological grading and a sign convention once.
5. **Groups, Lie algebras, and Coxeter systems.** Keep group actions, Lie
   algebra actions, infinitesimal actions, and integrated group representations
   distinct. Reuse the existing group, Lie, Coxeter and braid pages.

These layers connect to existing canonical homes rather than proposed copies:
`lie-algebra-representations-enveloping-algebras-and-pbw`,
`categories-functors-and-natural-transformations`,
`monoidal-categories-and-monoidal-functors`,
`tensor-products-of-modules`, `chain-complexes-and-homology`,
`modules-and-module-homomorphisms`, and
`coxeter-presentations-exchange-and-reduced-word-theorems`.

## Existing supplier branches to complete before consumers

The following branches are individually acyclic. Their exact item suppliers and
claim-specific limits are in `coverage.md` and `proposed-pages.json`; those
records, not a topic-level summary, govern any future dependencies.

* **Lie branch:** field-valued Lie algebra and module definitions → universal
  enveloping algebra and universal property → PBW filtration and PBW theorem →
  finite-type semisimple structure/root data → highest-weight modules and Weyl
  character/multiplicity formulas → global-group/compact-form integration only
  where the actual group hypotheses are supplied. For affine theory, loop Lie
  algebra and central extension → generalized Cartan/Kac–Moody construction →
  integrable highest-weight modules → Weyl–Kac formula. Category O, Verma,
  BGG, central character, and geometric-localization branches have their own
  exact regularity, integrality, and singular-case prerequisites.
* **Hopf branch:** tensor coherence and algebraic descent → coalgebra,
  bialgebra, convolution and antipode → module tensor product, duals and
  rigidity → quasitriangular identities → induced module braiding and braid
  relations → finite double/Yetter–Drinfeld constructions where finite duals
  are available. The current R-matrix theorem is for a finite algebraic
  `R∈H⊗H`; a completed universal R requires a separately defined completion,
  convergent/terminating action, and restricted module class.
* **Coxeter/Hecke branch:** Coxeter presentation, length, exchange and reduced
  word theorem → generic Hecke presentation and reduced-word elements → standard
  basis/freeness → parabolic induction and trace → base change/specialization →
  type-A, affine, cyclotomic, cellular and KLR representation branches. A
  specialized module, quotient, or semisimplicity theorem must name the ring,
  field, characteristic, parameters and invertibility conditions it uses.
* **Braid and link branch:** configuration-space or Artin braid definition →
  generators and relations → braid action from a proved braiding or a proved
  Hecke symmetry → closure and Markov equivalence → a specified normalized
  Markov trace → link polynomial. Neither the braid relations nor a braid
  closure alone supplies a link invariant.
* **Category/categorification branch:** additive/monoidal and module category
  definitions → duality/rigidity where required → exact/abelian or triangulated
  structure → Grothendieck group and grading conventions → KLR/Soergel
  constructions and decategorification. Do not infer a 2D/3D TQFT or modular
  category from this branch without the missing topological and categorical
  suppliers listed below.
* **Operator representation branch:** normed *-algebra and C*-algebra → state
  (positive normalized functional) → GNS pre-Hilbert quotient/completion →
  represented *-algebra and uniqueness; separately, locally compact group,
  Haar measure and continuous unitary representation → group C*-algebra/Fell
  dual. The two GNS routes have different inputs and are not interchangeable.

## Candidate new suppliers and their required order

### Temperley–Lieb diagram algebra (proposed new math-library branch)

1. Fix a commutative ground ring and loop parameter δ. Define objects as
   nonnegative integers of boundary points; define a basis diagram as a
   planar, nonintersecting pairing of the specified top and bottom boundary
   points in a rectangle. Define multiplication by vertical stacking,
   removing each closed loop and multiplying by δ per loop. Declare diagram
   equality to be planar isotopy relative to the boundary.
2. Define the generator presentation with the same δ normalization. Prove each
   generator relation from the stack operation and prove the diagram basis and
   presentation give isomorphic algebras. Spanning, independence and the
   dimension/Catalan count are separate obligations.
3. Prove link-state or standard modules are well defined, give their explicit
   basis, and construct the invariant bilinear form by stacking/capping with
   declared boundary conventions. Prove the cellular basis and its axioms
   before using the general supplier
   `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra`.
4. Derive Gram determinants and the exact field/parameter/characteristic
   criterion for each semisimplicity or simple-head statement. A root-of-unity
   case is its own theorem; it is not a generic specialization corollary.
5. Define Jones–Wenzl idempotents recursively only when each denominator is a
   unit. Prove recursion is independent of earlier choices, idempotence,
   annihilation/capping identities, and trace values. State exactly what fails
   at a zero quantum integer and whether the quotient or fusion category is
   being used instead.
6. Relate TL to the existing Hecke quotient only after translating the current
   normalization and proving the map/kernel/image statements. The current
   `def-temperley-lieb-quotient-and-jones-specialization` proves specified
   relations after localization; it does not supply the diagram/presentation
   isomorphism or trace descent.
7. Any link or anyon application comes only after the categorical structure,
   trace, framing, and parameter normalization are separately supplied.

### Weyl, CCR/CAR, and operator route

1. Keep the polynomial Weyl algebra `A_n(k)` (generators `x_i, ∂_j` with
   `[∂_i,x_j]=δ_ij`, all same-type commutators zero) separate from the
   exponentiated Weyl group/C* algebra (unitaries and a symplectic 2-cocycle),
   and separate both from unbounded operators on a common dense domain. Prove
   normal ordering for the algebraic presentation; for n≥1 in characteristic zero the
   trace of `[∂_i,x_i]=I` rules out nonzero finite-dimensional unital modules,
   while the truncated polynomial module in characteristic `p` is an explicit
   exception.
2. State Stone–von Neumann only for finite-dimensional real symplectic space,
   fixed nonzero central character, irreducible strongly continuous regular
   unitary Weyl representations. Infinite-dimensional modes and nonregular
   states have inequivalent examples; no exponentiation theorem applies to
   arbitrary algebraic Weyl modules.
3. Treat finite-mode CAR/complex Clifford as a separate fermionic bridge.
   Prove the explicit Majorana maps and inverse; do not assert a CCR-to-Clifford
   map. Reuse the physics Fock proof only after verifying the supported
   same-canonical-ID route for mathematical dependencies.

### Hall representation and derived/geometric branches

After the finitary Hall algebra and Green/Ringel bridge, define modules over the
Hall algebra separately from objects in the input category. A Jordan-quiver
symmetric-function action and Heisenberg/Fock commutators need their own
normalization proof; a framed Nakajima correspondence needs its exact stability,
properness and quiver hypotheses. Then keep (i) Toën derived Hall with dg
enhancement, finite total Hom cohomology and homotopy weights, (ii) motivic
Hall with stack functions/localization/completion, and (iii) CoHA with
equivariant cohomology correspondences and potential-dependent vanishing cycles
as distinct pages. DT/BPS wall crossing consumes the appropriate construction
plus stability/integration data; its physical state-space interpretation is
not a consequence of the algebraic identity.

### Lie and Hecke specialist paths

The Lie-super route fixes characteristic zero for its basic signed PBW and
highest-weight statements; positive characteristic requires separate axioms
and results (signed Jacobi alone does not settle the odd self-Jacobi case in
characteristic three). Beilinson–Bernstein localization is a new proof target
with regularity and the exact source (anti)dominance/ρ-shift convention; existing BGG, Soergel, category-O and
type-A finite-W/shifted-Yangian carriers do not prove it. Ordinary affine
Kac–Moody and Weyl–Kac results are reused at their integrability/level
hypotheses.

Hecke specializations must preserve the four q/v/Q conventions recorded in
`dossiers/05-hecke.md`; unequal-parameter cells require a weight function and
source-proved cell properties, and Lusztig P1–P15 are not to be represented as
universally settled. Type-A affine PBW does not supply general affine
classification, DAHA, or rational Cherednik PBW/category O. Keep the new
research targets distinct and do not cite a DAHA/Cherednik result as a local
proof supplier.

### Clifford and spin branch (new math-native universal core)

1. Choose a field of characteristic not two, a finite-dimensional quadratic
   space (V,Q), and a precise relation such as `v²=Q(v)1` or the corresponding
   polarized relation. Define the tensor-algebra quotient and prove it is
   well defined. Explicitly state the sign convention and any normalization
   factor in the associated symmetric bilinear form.
2. Prove the filtration/PBW theorem and the exterior-algebra associated-graded
   statement before using a Clifford basis or dimension count. Root's checked
   proof plan is noncircular: on `ΛV`, define wedge multiplication `ε_v` and
   the contraction `ι_v` from the symmetric bilinear form. Prove the
   wedge-wedge, contraction-contraction and mixed anticommutator identities
   on decomposable wedges; then `c(v)=ε_v+ι_v` represents the quotient without
   assuming PBW. Reordering gives spanning by increasing square-free words
   with length-then-inversion termination. For independence, apply a proposed
   relation to `1` and inspect the highest exterior degree; descending in
   degree kills each coefficient. This works for degenerate forms and needs
   no orthogonal basis. The root suppliers to check are
   `thm-universal-property-of-the-tensor-algebra`,
   `def-exterior-algebra-of-a-finite-free-module`, and
   `lem-exterior-algebra-basis-monomials`. The existing
   `def-interior-product-on-the-exterior-algebra` is a real positive-inner-
   product/adjoint construction; it does not supply contraction for an
   arbitrary or degenerate symmetric form. Author the anticommutator as a
   local intermediate lemma. Only after independence prove
   `gr Cl(V,Q)≅ΛV` and the dimension `2^dim(V)`.
3. Separate algebraic classification over algebraically closed fields from
   real, complex, and graded Morita classifications. State dimension, signature,
   center, real-versus-complex type, and periodicity indices exactly.
4. Define Pin/Spin as subgroups of the invertible Clifford algebra using a
   specified norm/reversion and twisted adjoint action. Prove the image/kernel
   and cover properties; do not infer a global spin group from the Lie algebra
   alone. For indefinite signature, specify whether the subgroup contains all
   even products of unit vectors with `|Q(u)|=1` (which cover `SO(p,q)`) or adds
   a Clifford-norm-one condition that can restrict components. Only use the
   simply connected universal-cover statement for Euclidean `Spin(n)`, `n≥3`,
   absent a separate proof for other signatures/dimensions.
5. Define Clifford modules, spinor modules, Clifford bundles and spin
   structures before any Dirac operator. The Lichnerowicz and index statements
   require separate geometric, regularity, compactness, completeness,
   connection and domain hypotheses. The algebraic convention `v²=+Q(v)` does
   not match the common Riemannian Hodge action `c(θ)=ε_θ−ι_θ`, for which
   `c(θ)²=−|θ|²`; use `Cl(T*M,−g)` or prove the complex `i` conversion.
6. CAR/Fock, Bogoliubov and free-fermion claims must distinguish algebraic
   anticommutation relations from C*-representations, Fock implementability,
   locality, gap, symmetry class and stable-equivalence assumptions.

The source audit confirms that the physics library's Dirac projections and
gamma-trace results are concrete representations, not the universal Clifford
algebra or its classification. Author the math-native universal/PBW/module
chain above and reuse the concrete matrices as examples. A physics-tree item
with `domain: mathematics` remains semantically mathematical when its full
prerequisite closure is mathematical; however, the current math dependency
checker scans root `items/` only. Before a native dependency uses a physics-only
path, verify a supported same-canonical-ID import/adoption route. Do not copy
or rewrite a carrier to work around the resolver. Physical premises remain
ineligible math suppliers.

### Hall algebras (required new math-library branch)

1. Start with a supplied small abelian category, or an explicitly supplied
   small skeleton of an essentially small abelian category, with finite
   `Hom`-sets and finite Yoneda `Ext^1` classes. Do not silently identify
   Yoneda extensions with derived `Ext^1`: the current theorem equating them
   requires dependent choice, balanced-Ext resolution hypotheses, and a set
   of extension classes. Let `Iso(C)` be the set of object isomorphism
   classes and `H=⊕_[M] R u_M` for a declared commutative coefficient ring R.
   Define `g^L_{M,N}` as the number of subobjects `U⊂L` (monomorphisms modulo
   isomorphism over L, not chosen literal embeddings) with `U≅N` and
   `L/U≅M`, and set `u_M u_N=Σ_[L]g^L_{M,N}u_L`. This is the convention
   `[M]*[N]` for extensions `0→N→L→M→0`. Each coefficient is finite because
   the set of maps `Hom(N,L)` is finite. The product has finite support because
   every contributing middle object is in the image of the finite Yoneda
   extension-class set. No finite-field linear structure, Euler form,
   hereditary condition, or finite-subobject condition is needed for this
   untwisted product. Finite abelian p-groups are an important example.
2. Prove the zero-object class is a two-sided unit. Prove associativity by
   identifying both coefficient expansions with the same flags
   `W⊂U⊂L`, once by first choosing W and a subobject of L/W, once by choosing
   U and a subobject of U. Supply the abelian-category quotient correspondence
   `(L/W)/(U/W)≅L/U` as an exact supplier or prove it locally. Finite support
   above makes both coefficient sums legitimate. If the structure constant is
   instead defined using endpoint-labelled short exact sequences, prove the
   finite integer identity
   `P^L_{M,N}=|Aut(N)||Aut(M)|g^L_{M,N}`. This is not permission to divide by
   automorphism counts in an arbitrary coefficient ring.
3. An `F_q`-linear Euler-twisted product needs a well-defined bilinear Euler form. For the usual
   alternating Ext sum, require finite all `Ext^i` and appropriate finite
   global dimension; a hereditary finite-field category is a standard case.
   If the twist uses `q^{\langle M,N\rangle/2}`, give a coherent square root
   and the exact symmetric Euler bicharacter. Never conflate this product with
   the untwisted one. The finite-field parameter belongs to this twist/quiver
   specialization; it is not a prerequisite for the ordinary Hall product.
4. Define Green's coproduct into the appropriate tensor completion. The
   completed tensor square is not automatically an algebra: prove
   coefficientwise finiteness for `Δ(x)Δ(y)` in the chosen category. An
   algebraic coproduct also needs a finite-subobject condition (satisfied by
   finite-field finite-dimensional quiver representations, but generally not
   by coherent sheaves). Then prove the bialgebra compatibility and identify
   the twist and tensor multiplication convention.
5. Construct the composition subalgebra from simple-object classes and prove
   its identified quantum-group relations with the exact quiver/Cartan and
   parameter conventions. The whole Hall algebra is generally larger than
   this subalgebra. A Hall algebra is not itself a category of modules over
   its composition subalgebra.
6. Treat geometric Hall actions, derived Hall algebras, motivic Hall
   algebras, and cohomological Hall algebras as distinct later branches. State
   constructibility/stack and orientation data, potential, vanishing-cycle or
   cohomology theory, grading, completion and push-pull hypotheses before
   multiplication. Wall crossing, Donaldson–Thomas invariants and BPS
   interpretations need their own stability and integration maps; they do not
   follow from the finitary product alone.
7. Reuse finite abelian p-group, module, partition/symmetric-function, the
   existing two-object quiver example, quiver-flag/KLR relations, quantum
   affine/Fock, exact-category and homological suppliers only for the claims
   their current proofs actually establish. The Hall inner product on
   symmetric functions is not itself a Hall algebra. No dedicated Hall
   algebra carrier was found in the math or physics item search.

Schiffmann v2 reading ranges are recorded in
`sources/06-other-physics-algebras/manifest.md`: §§1.1–1.7, 3.1/3.3 and 5.2
were read for the finitary product, Green/Ringel comparison and selected Hall
variants. The source imports the crosses-to-diagrams bijection and leaves
finite counting facts to the reader; the local Green proof must supply them,
prove coefficientwise completion closure and remain within the hereditary
abelian hypotheses. Reading the source does not close these proof obligations.

### Poisson, formal deformation, and homological branches (delta-only)

1. Reuse `def-poisson-bracket-on-a-symplectic-manifold`,
   `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry`,
   `thm-poisson-bracket-satisfies-the-jacobi-identity`, and
   `thm-smooth-functions-form-a-poisson-algebra`. The checked library
   convention is `i_{X_H}ω=dH` and `X_H(F)={F,H}`. A general Poisson bracket is
   bilinear, antisymmetric, Jacobi, and a derivation in each input; state the
   coefficient characteristic and any nondegeneracy requirement on the
   bivector separately.
2. A formal deformation quantization is a product on `A[[ℏ]]` of the form
   `f⋆g=fg+Σ_{n≥1}ℏ^n B_n(f,g)` with each `B_n` specified and associativity,
   unit, and first-order commutator conditions checked coefficientwise. A proof
   of existence, classification, convergence, or uniqueness needs its own
   theorem and precise geometry/coefficient assumptions.
3. A differential graded algebra includes a graded product and a degree-one
   differential with a fixed Leibniz sign rule and `d²=0`. Define A∞/L∞ maps
   with one declared cohomological suspension and full sign convention; prove
   each Stasheff or higher-Jacobi identity. Define a BV operator/bracket by
   degree and compatibility equations before using a master equation.
4. Hochschild cochains can control formal associative deformations only after
   the cochain complex, grading, differential, bracket and formal gauge action
   are defined and the obstruction calculation is proved. A named
   correspondence is not a proof of formality.
5. Reuse existing homological-algebra and KLR/Soergel carriers. Keep current
   physics BRST/BV content in the duplicate audit. A mathematical physics-tree
   item is semantically eligible only with a mathematical-only dependency
   closure and a supported resolver route; physical premises are ineligible.

### Affine-current and vertex-algebra branch (delta-only)

1. Start with a checked Lie algebra `g`, invariant bilinear form and loop
   algebra. Define its central extension and normalization, then construct
   modes and verify their bracket.
2. A vertex algebra requires a vacuum, translation operator, state-field map,
   lower truncation, vacuum/translation identities and locality (or an
   equivalent axiom system). Fix formal-variable and mode conventions before
   invoking OPE notation.
3. Prove the current-algebra-to-vertex-algebra construction locally. Sugawara
   requires a fixed invariant form and a noncritical-level condition; state
   central charge and normalization. Conformal blocks, KZ, Drinfeld–Sokolov,
   and affine W-algebra links each require their own modules, geometry, levels,
   and proof suppliers.
4. Cross-check the separate physics/QFT mathematics content before proposing
   any item, and do not infer a VOA from affine Lie algebra representation
   theory alone.

## Application and research-facing dependency barriers

The following are consumers, not foundations. They must not be included as
logical suppliers for the algebraic results above:

* **Gauge theory:** first specify the Lie group (not just its Lie algebra),
  principal bundle, connection/curvature and gauge action. A global gauge
  transformation and infinitesimal gauge algebra are distinct. A physical
  constraint or path-integral assumption is outside pure-math `deps`.
* **Statistical mechanics and integrability:** define the finite/infinite
  lattice, local state space, transfer operator or Hamiltonian, boundary
  conditions, parameter and representation. A Yang–Baxter solution gives a
  braid-group action only if it is invertible; an intertwining relation alone
  is not a complete model solution or Bethe-ansatz completeness theorem.
* **Anyons and topological phases:** specify a rigid/braided/ribbon or modular
  tensor category at the exact stage needed, its associator and pentagon,
  twist, braiding, duality, trace and nondegeneracy. A fusion ring omits the
  associator. The `Vec_G^ω` associator is built from a normalized
  3-cocycle satisfying the cocycle equation. Published pivotal/spherical,
  categorical trace/dimension and ribbon tangle/link items exist outside the
  basic fusion page. Reuse them, but repair the cited trace/Drinfeld theorem
  proof gaps before assigning them as new logical suppliers. The ribbon
  evaluation theorem does not itself build a modular TQFT.
* **TQFT and rational CFT:** specify the dimensional setting and the actual
  functor/modular-functor or factorization theorem. A 2D line-operator/fusion
  category statement does not give the fusion 2-category required for 3D
  surfaces, lines and points. Verlinde needs a declared modular S normalization and
  a proved modularity theorem; rationality cannot be inferred from finite
  primary labels alone.
* **Generalized symmetries:** distinguish invertible group-like symmetries
  from noninvertible categorical symmetries and higher-form/higher-category
  structures. State the topological defect data and dimensions. Keep claims
  past checked source coverage as research obligations or deferred material.
  Also distinguish a tensor-invertible object, a fusion-ring unit, and an
  invertible operator. In the Fibonacci fusion ring `x²=1+x`, one has
  `x(x−1)=1`; nevertheless `x` has no inverse with nonnegative integer
  coefficients, so the ring class being a unit does not make the simple object
  tensor-invertible. This finite calculation is an example, not a construction
  of the Fibonacci category or proof of its pentagon equation.
* **Anyonic chains:** state whether fusion is multiplicity-free. If not, give
  bases of junction/multiplicity spaces and the associator matrices. Define the
  constrained fusion-path state space; do not replace it by an ordinary local
  tensor product without a proved identification. Keep the Ising doubled path
  space relation distinct from the translated single-lattice realization.

## Required proof and interface checklist

Before proposing any `deps` list, record for each new claim: (a) exact object
and coefficient type; (b) hypotheses on field, characteristic, dimension,
parameter, topology, completion, grading and model; (c) existence and
well-definedness lemmas; (d) the finite sequence of local proof steps and all
intermediate suppliers; (e) examples and a failure case matching the boundary;
(f) direct/indirect consumers; and (g) source coverage and unread material.
If a premise is a physical postulate, physics theorem, or reported observation,
it cannot be disguised as a mathematical dependency. A pure-math carrier outside
root `items/` may be semantically eligible but requires a verified supported
same-ID import/adoption route because the current math resolver scans `items/`
only; do not duplicate or relocate it as an invented workaround.

Use `coverage.md` for the exact local item map and `definition-and-diagram-contracts.md`
for the public mathematical interfaces that must be fixed before a proof plan
is accepted.

## Additional bounded categorical route and residual holds

The separate `frobenius-algebras-and-two-dimensional-sewing` pair reuses existing Frobenius-function/finite-Hopf/group-algebra carriers, then adds only the coalgebra formulation and closed/open 2D sewing interface. It is parallel to modular 3D TQFT, not a corollary of it. Its full cobordism normal-form and sewing proofs remain blocked pending local authoring; the recovered Lauda–Pfeiffer definition pages do not close them.

Hall geometric actions use generally quasi-projective Nakajima varieties; the map to the affine quotient can be projective under the stated stability hypotheses. Do not call the variety itself projective without proof. Each pushforward/pullback in a correspondence needs its actual properness/refined-cohomology hypothesis.

Retain Nichols algebras/bosonization, nonsemisimple finite tensor categories, modified traces and logarithmic modular-functor constructions as named research subroutes of the Hopf/root/vertex pages. They are not supplied by semisimple Verlinde or by the elementary Hall product. Their dedicated definitions, exact hypotheses and local proofs remain explicit advanced obligations.
