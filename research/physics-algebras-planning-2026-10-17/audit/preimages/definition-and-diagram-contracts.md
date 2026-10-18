# Definition, convention, and diagram contracts

These are minimum contracts for a future native page/item plan. They prevent
silent changes of coefficient ring, normalization, action side, completion,
grading, or diagram semantics across the existing library. A promise to supply
an item is not evidence that the item exists or is proved. Items must use the
ordinary `SCHEMA.md` contracts, proof format, source provenance, and review
stamps at authoring time.

## Shared language and notation

| Term | Required definition or checked supplier | Conditions that must remain visible |
|---|---|---|
| Ground ring / field | Name a commutative ring `R` with unit or a field `k`; define each extension map. | Whether a parameter is invertible, whether 2 or another denominator is invertible, characteristic, and flatness assumptions for base change. |
| Algebra | An `R`-module with associative `R`-bilinear multiplication and a specified unit; commutativity is a separate property. | Left/right module convention, unitality, finite generation/dimension, and coefficient ring. |
| Representation | A unit-preserving algebra homomorphism `A→End_R(M)`; equivalently a unital left `A`-module. | Faithfulness is injectivity. Image statements do not identify an abstract algebra with its image. State whether modules are left or right. |
| Lie representation | A bracket-preserving linear map `g→End_k(V)` or a specified left `U(g)`-module, after the checked universal-property equivalence. | A Lie algebra action need not integrate to the chosen global Lie group; topology and integrability conditions are additional. |
| Tensor action | Specify the algebra structure or coproduct that defines its action on `M⊗N`. | Hopf coproduct side, associator, tensor order, and finite/completed tensor product. |
| Completion | Name a topology/filtration and define the completed module/algebra/tensor product and convergence or local-finiteness rule. | An infinite series in a completion is not an element of the algebraic tensor product. State the subcategory on which the action is defined. |
| Grading and differential | Fix homological or cohomological grading, degree conventions, and sign rule. | State degree of every operation/map; do not mix chain and cochain conventions without a translation lemma. |
| Equality of diagrams | Declare the allowed isotopies and all object, source, target, orientation, label, crossing, framing and boundary data. | A picture is an encoding of an algebraic composite. Every equality used in a proof needs a typed algebraic or topological justification. |

These definitions should point to exact local suppliers such as
`def-universal-enveloping-algebra`, `def-representation-of-a-lie-algebra`,
`def-hh-leg-notation-and-quasitriangular-hopf-algebra`, and the canonical
category-theory pages. Do not redeclare a term under a new convention without
an explicit conversion result.

## Hopf algebras, R matrices, and braidings

The checked Hopf–Hecke convention is a left module convention. For a bialgebra
`H`, a left action on `M⊗N` is defined by the coproduct
`h·(m⊗n)=Σ(h_(1)·m)⊗(h_(2)·n)`. A quasitriangular structure in the current
carrier is an invertible finite tensor `R∈H⊗H`, with the stated
coproduct-intertwining, counit and two coproduct identities; the exact leg
conventions are those of
`def-hh-leg-notation-and-quasitriangular-hopf-algebra`. The induced braiding
uses the corresponding flip and action of `R`. The proof obligations are the
module naturality, invertibility, both hexagon identities, Yang–Baxter, and
local braid relations, each with its own explicit inputs.

The checked current R-matrix page establishes an algebraic braiding on the
category of all left `H`-modules over a field. It does not authorize replacing
`H⊗H` with a completion. For formal/generic `U_q(sl_2)`, the universal R is an
infinite series; any action formula must name the completion and prove local
termination/convergence. The known action on finite-dimensional modules uses
local nilpotence of the positive generator. A generic braid/Yang–Baxter
solution defines a braid-group representation only when its operator is
invertible; `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`
records this boundary.

The exact missing supplier for a proposed topological use is not simply “an
R-matrix”: the relevant ribbon/twist, trace, framing, nondegeneracy, and
topological invariance statements must be proved for the actual category and
parameters. Existing braid and tangle carriers may be cited only after their
object and morphism types match.

## Hecke and Coxeter conventions

The current generic Hecke presentation uses generators with
`(T_s-v_s)(T_s+v_s^{-1})=0` and finite braid relations. Its normalized
generator is `S_s=v_sT_s` with `(S_s-v_s^2)(S_s+1)=0`; write the conversion
explicitly whenever a source uses the alternative normalization. Parameters
are units in the universal Laurent ring and are constant on the odd-edge
components required by the Coxeter conjugacy theorem. The standard basis
requires reduced-word independence and a separate independence argument; a
spanning rewrite alone does not suffice.

For each Hecke, affine, cyclotomic, degenerate, KLR, or Cherednik result, state
the parameter field/ring, characteristic, invertibility conditions, root of
unity status, grading and module category. Do not carry a result over by
specialization unless the specialization theorem proves it. Braid generators
act on a tensor power only when the explicit operator satisfies the required
quadratic and braid relations; the induced map from the abstract Hecke algebra
may have kernel.

## Temperley–Lieb diagrams and diagrammatic conventions

The proposed diagram algebra is not yet present as a locally proved math
supplier. Before authoring it, fix:

* **Objects:** a nonnegative integer `n`, interpreted as `n` ordered boundary
  points on the top or bottom edge of a rectangle.
* **Basis morphisms:** isotopy classes relative to the boundary of planar
  nonintersecting pairings of the declared top and bottom points. Say when no
  such pairing exists and whether odd boundary counts are excluded.
* **Composition:** vertical stacking only when the intermediate boundary
  counts agree; remove each internal closed circle and multiply by a named loop
  parameter `δ`. This defines a category/algebra only after independence from
  representative and associativity have been proved.
* **Tensor product:** horizontal juxtaposition, with object addition and
  a fixed left-to-right order. State the strictification or associator being
  used if the page treats it as strict.
* **Generators:** specify the cap/cup or `e_i` diagrams, index range,
  multiplication order, and relations with the same `δ` convention.
* **Equivalence/basis:** give the map between presented words and diagrams,
  prove it is well defined, surjective and injective, and separately prove the
  claimed Catalan dimension/count. Name the exact Catalan object and count
  convention (for example, number of noncrossing pairings on `2n` ordered
  boundary points).
* **Modules and forms:** define link states, propagating/through strands, the
  bilinear form (which loops are evaluated and which boundary is capped), and
  the cellular anti-involution. Prove the form is invariant and the basis is
  cellular before invoking a general cellular-algebra theorem.
* **Projectors:** for Jones–Wenzl recursion specify the quantum integer,
  normalization, denominator units, base case and ground ring. Prove
  idempotence and annihilation. At a zero denominator the recursion is
  undefined; any quotient or root-of-unity replacement is separate.

The existing `def-temperley-lieb-quotient-and-jones-specialization` is a
localized Hecke quotient with its own parameter conversion. It does not make
the diagrams equal to the quotient, and it does not prove Markov-trace descent.
Keep these as separate obligations. Do not identify a Khovanov–Seidel
categorical action with the finite diagram algebra.

## Braid, tangle, and link diagrams

* **Objects and arrows:** for a braid category, fix the number and ordering of
  strands; morphisms are isotopy classes of geometric braids with fixed ends.
  State whether the braid is oriented downwards and how composition is ordered.
* **Crossings:** state which strand passes over, its sign, the positive Artin
  generator convention and the inverse. Prove the Artin relations from the
  declared isotopies.
* **Category type:** the braid category is braided, not symmetric. Do not use
  a swap as though its square were the identity.
* **Tangles:** declare cups, caps, orientation, framing, boundary and allowed
  ambient isotopy. A framed tangle invariant and an unframed link invariant
  have different requirements.
* **Trace/evaluation:** define the trace or functor on objects and generators;
  prove cyclicity, tensor compatibility and the exact Markov stabilization
  moves. State normalization and parameter specialization. A braid closure
  does not itself define a scalar invariant.
* **Proof:** diagram isotopy can organize a proof, but the local item must
  supply the corresponding algebraic relation, topological isotopy theorem,
  or functoriality argument. TikZ is explanatory and never a proof premise.

## Clifford, spin, CAR, and fermionic conventions

This is the convention contract for the proposed universal Clifford delta;
it does not duplicate the existing physics Fock or fixed-Dirac applications.
State:

* the quadratic space `(V,Q)`, its bilinear polarization, and the exact
  relation `v²=Q(v)1` or the chosen doubled-normalization variant;
* whether the signature ordering is `(+^p,−^q)` or `(-^p,+^q)`, and the
  scalar algebra (`R`, `C`, or another field of characteristic not two);
* the filtration/PBW basis, grading, involution/reversion and their local proof;
* whether Pin/Spin uses the ordinary or twisted adjoint and the normalized
  Clifford norm, plus the actual covering map/kernel;
* whether CAR means the algebraic relation algebra, its universal C*-algebra,
  a finite-particle representation, or all bounded operators on Fock space;
* inner-product linearity convention, domains, closures, adjoints, core and
  implementability for any operator statement;
* geometric dimension, orientation, metric signature, spin structure,
  connection, completeness/compactness and operator domain for Dirac/index
  claims.

The current source dossier records incompatible author conventions, so no
signature table may be copied until the conversion is derived. Root review
also read `physics/items/def-qft-dirac-projections`, a published particular
4×4 representation and free-energy projection, not a universal Clifford
algebra. The independent audit read `physics/items/lem-qft-fock-ccr-car`: it
covers finite-particle domain bosonic CCR, specified sector adjoint/core facts,
and bounded fermionic CAR on all Fock space, with Countable Choice and a
second-variable-linear inner-product convention. This carrier has mathematical
domain, so it is semantically eligible when its full dependency closure is
mathematical. The current math dependency checker scans root `items/` only;
verify a supported same-canonical-ID import/adoption route before using a
physics-only path as a native math dependency. Do not copy or rewrite it to
work around the resolver. If its content is consulted, explicitly convert the
inner-product convention before comparing it with the root math GNS supplier,
whose convention is first-variable-linear. It does not establish
Stone–von Neumann, universal CAR, or species statistics.

Root supplied a checked, noncircular Clifford PBW proof plan. For a field of
characteristic not two, finite-dimensional V with supplied ordered basis, and
`Q(v)=B(v,v)`, construct exterior multiplication `ε_v` and contraction
`ι_v` on `ΛV`. Prove the wedge, contraction and mixed anticommutator identities
directly on decomposable wedges. Then `c(v)=ε_v+ι_v` satisfies
`c(v)^2=Q(v)I`, so the tensor quotient acts on `ΛV` without assuming PBW.
Relations reorder words to increasing square-free spanning monomials, with
termination by length then inversion count. Independence follows by applying a
putative relation to `1` and taking its greatest exterior degree: its leading
components are distinct exterior basis wedges. Descending in degree proves
independence, including when B is degenerate. Only after this may the
associated-graded map to `ΛV` be identified as an isomorphism. Reuse the exact
local tensor quotient, exterior basis and filtered-algebra definitions after
checking their statements; insert the contraction identities as local
intermediate lemmas. Characteristic two is outside this contract.

For Riemannian geometry, do not combine the universal `v²=+Q(v)` convention
silently with the common Hodge action `c(θ)=ε_θ−ι_θ`, whose square is
`-|θ|²`. Use `Cl(T*M,−g)` for that action or prove the complex `i` conversion
explicitly. For indefinite Pin/Spin, define the normalized product subgroup
and Clifford norm precisely: all even unit vectors with `|Q(u)|=1` can cover
`SO(p,q)`, while the additional norm-one restriction may omit components.
Only claim the simply connected universal-cover property for Euclidean
`Spin(n)` with `n≥3` unless a separate case is proved.

## Poisson, deformation, graded, and BV conventions

* **Poisson algebra:** define a commutative unital algebra and a bilinear
  bracket that is antisymmetric, satisfies Jacobi, and is a derivation in each
  input. State the coefficient characteristic and whether the bracket has
  nonzero degree.
* **Formal star product:** define `A[[ℏ]]`, coefficientwise continuity and
  `f⋆g=fg+Σℏ^n B_n(f,g)`. State bilinearity/differential order of each `B_n`,
  unit, associativity, and first-order antisymmetric part. A formal series does
  not assert convergence or an operator quantization.
* **Graded algebra:** state degree of multiplication and all Koszul signs.
  Define the differential and its signed Leibniz rule; prove `d²=0`.
* **A∞/L∞:** select either homological or cohomological convention and either
  suspended or unsuspended operations, then list degrees and full identities.
  A later statement must use exactly this convention.
* **BV algebra:** define the degree of `Δ`, square-zero condition, bracket
  induced by failure of `Δ` to be a derivation, compatibility, and the degree
  of the master equation. Keep formal/quantum versus classical master
  equations distinct.
* **Deformation control:** define the Hochschild complex, differential,
  Gerstenhaber bracket and gauge equivalence before any statement that
  cohomology classifies deformations. Prove obstruction and equivalence claims
  locally; a citation to a formality theorem is not a supplier.

Before adding any of these, compare against `library/homological-algebra/` and
the separate QFT mathematics pages. Existing homology, derived-category,
Hochschild, KLR and Soergel results should be reused where their contracts
match.

## Hall algebra conventions and proof contracts

The required new Hall branch must not be confused with the Hall inner product
on symmetric functions, Hall's marriage theorem, or an already existing quiver
flag/KLR convolution. Start with a supplied small abelian category or an
explicit small skeleton of an essentially small abelian category, with finite
`Hom`-sets and finite Yoneda `Ext^1` classes. Fix a commutative coefficient
ring `R`, set `Iso(C)` to the set of object isomorphism classes, and define
`H=⊕_[M] R u_M`. The ordinary Hall product does not require finite-field
linearity; finite abelian p-groups are a key example. With the fixed convention
that the subobject is isomorphic to `N` and its quotient to `M`, so a counted
extension is `0→N→L→M→0`, define

`u_M u_N = Σ_[L] g^L_{M,N} u_L`,

where `g^L_{M,N}` counts subobjects `U⊂L` with `U≅N` and `L/U≅M`.
Declare that subobjects are monomorphisms modulo isomorphism over `L`, not
chosen embeddings. Each structure constant is finite because every
`U≅N` supplies a monomorphism in the finite set `Hom(N,L)`. For fixed `M,N`,
the product has finite support because every middle object arises from the
finite Yoneda extension-class set; no finite-subobject hypothesis for all
objects is needed for this product. Prove the zero object gives a two-sided
unit. Prove associativity by explicitly bijecting the two flag-counting sets
`W⊂U⊂L`; supply or locally prove the abelian quotient correspondence
`(L/W)/(U/W)≅L/U`. The lane source ledger records Schiffmann v2, §§1.1–1.7, 3.1/3.3 and 5.2
for Hall/Green/Ringel and selected later constructions. The source imports the
crosses-to-diagrams bijection and leaves finite counting facts to the reader;
the local Green proof must supply these. Do not silently identify
Yoneda `Ext^1` with derived `Ext^1`: the available local equivalence theorem
requires dependent choice, balanced-Ext resolutions, and a set of extension
classes. For a short-exact-sequence count `P`, prove the finite integer
identity `P^L_{M,N}=|Aut(N)||Aut(M)|g^L_{M,N}`; do not divide in arbitrary `R`.

An `F_q`-linear Euler-twisted product needs a specified bilinear Euler form and
bicharacter, a coefficient field containing the chosen square root of `q`,
and the exact finiteness assumptions used to define the Euler form. The
finite-field parameter belongs to this twisted/quiver specialization, not to
the ordinary Hall product. For the
standard alternating sum over all `Ext^i`, require finite-dimensional Ext
spaces, vanishing above a finite degree, and suitable finite global dimension;
the hereditary finite-field case is a common sufficient setting. Keep the
twisted product distinct from the ordinary Hall product.

For Green's coproduct, define the target completion before writing
`Δ(u_L)`. A completed tensor product is not automatically an algebra. For
every claimed bialgebra identity, prove coefficientwise local finiteness of
the terms in `Δ(x)Δ(y)` in the actual category. An algebraic, noncompleted
coproduct requires a separate finite-subobject condition; it holds for
finite-dimensional quiver representations over a finite field and can fail
for coherent sheaves. State the twist and tensor multiplication before
checking compatibility. The auditor read the initial Green counting reduction,
not its full proof; full Green-theorem proof authoring remains required.

Use `def-grothendieck-group-of-an-essentially-small-abelian-category` for
the Grothendieck group via actual short exact sequences; do not form a
class-sized free group. `def-n-fold-yoneda-extension` and
`thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` are useful
where their exact hypotheses hold. The latter requires dependent choice,
balanced-Ext resolution hypotheses, and a set of extension classes. For a
general finitary category, define the product using Yoneda extension classes
and a supplied small-skeleton/essential-smallness argument rather than
silently assuming projectives, injectives, or resolutions.

The composition subalgebra generated by simple-object classes is not the
whole Hall algebra in general. If it is identified with a positive quantum
group, define the quiver/Cartan data, quantum parameter, coproduct and
normalization and prove the generator relations. Distinguish this algebra
from a category whose objects are Hall-algebra modules.

Derived Hall, motivic Hall, and cohomological Hall algebras are separate
constructions. Each needs its own category/stacks, shift or orientation data,
potential, cohomology theory, degree, push-pull operations and completion.
Donaldson–Thomas invariants, BPS state spaces, and wall-crossing require
stability data and a specified integration map. They are not automatic
consequences of the finitary Hall product.

## Affine currents and vertex-algebra conventions

Define the loop variable and its Laurent polynomial/rational function space,
the invariant bilinear form, central element, and central-extension cocycle.
State whether a derivation is included and the degree convention. A vertex
algebra must specify its vector space, vacuum, translation operator,
state-field map, lower-truncation rule, vacuum and translation identities, and
locality/Jacobi identity. If using OPE notation, identify it with the singular
part of a formal Laurent expansion and state the normal-ordering convention.

For Sugawara, define the level using the same invariant-form normalization and
state that the critical level is excluded. Give the denominator and central
charge in the declared convention and prove the Virasoro relations. Any
conformal-block, KZ, W-algebra, localization, or VOA equivalence statement needs
its actual module, level, geometry, and integrability hypotheses. Search the
physics QFT carriers before proposing a full duplicate foundation.

## C* algebra and GNS interface

A C*-algebra is a complete normed complex *-algebra with `||a*a||=||a||²`;
a state is a positive linear functional of norm one. The GNS construction
quotients by the null space of the associated positive sesquilinear form and
completes the quotient to a Hilbert space carrying a *-representation. Use the
actual root math suppliers `def-state-on-a-c-star-algebra` and
`lem-c-star-state-gns-purity-and-polish-state-space`, including the explicit
choice use and their inner-product convention. Distinguish this theorem from
the group-positive-type GNS construction and state continuity/topology when a
locally compact group is involved. Do not restate either construction under a
new category merely to connect it to physics.

## Diagram contracts for any proposed TikZ/TikZ-CD

Every diagram file or fenced diagram must include or point to a local contract
that specifies:

1. **Types:** objects/regions/strands/labels and the source and target of each
   arrow or boundary.
2. **Orientation:** direction of morphisms, crossing orientation and sign,
   input/output boundary order, and composition direction.
3. **Operations:** what vertical/horizontal composition means; associator,
   unitor or strictification convention; what loops evaluate to; what labels
   or coupons denote.
4. **Equivalence:** allowed planar or ambient isotopy, framing and orientation,
   and any algebraic relations used to replace an isotopy.
5. **Scalars and parameters:** loop value, `q`/`v` normalization, field/ring,
   roots of unity, denominators and specialization map.
6. **Logical status:** say whether the diagram is a definition, computation,
   illustrative composition, or conjectural picture. A proof must translate
   each diagram move into a checked equality in the local carrier.

No proof contract may rely on an unlabelled picture, omitted boundary points,
unstated crossings, or a visual deformation whose allowed equivalence has not
been defined. Diagram consistency should match the conventions in the existing
braid, tangle, Hecke and category-theory literature; rigorous proof remains
textual and algebraic/topological.

## Weyl, CCR/CAR and Lie-super contracts

**Polynomial Weyl algebra.** For a field `k`, define
`A_n(k)=k⟨x_1,…,x_n,∂_1,…,∂_n⟩/([∂_i,x_j]=δ_ij,[x_i,x_j]=[∂_i,∂_j]=0)`.
Use the PBW order `x^α∂^β` and prove it by a terminating rewriting or a
faithful polynomial/differential-operator representation. For the scaled
Heisenberg quotient use a declared nonzero central character `ℏ`; do not silently
identify it with `ℏ=1` unless the field permits rescaling. In characteristic
zero, trace of a commutator rules out nonzero finite-dimensional unital
modules at nonzero central character. In characteristic `p`, check the
`k[x]/(x^p)` multiplication/derivative module explicitly.

**Exponentiated Weyl relations.** On a finite-dimensional real symplectic
space `(V,σ)`, fix the phase sign and Planck parameter in
`W(f)W(g)=exp(−iℏσ(f,g)/2)W(f+g)`, `W(f)*=W(−f)`. Check the 2-cocycle,
involution and universal C* completion. Strong continuity of each one-parameter
unitary subgroup is regularity; only then use Stone’s theorem to recover
self-adjoint infinitesimal generators. Stone–von Neumann has the finite
dimensional, irreducible, regular, fixed nonzero central-character hypotheses.
It is not a uniqueness statement about algebraic `A_n`-modules, nonregular
states, or infinite-dimensional CCR systems. For unbounded operators, specify
a common invariant dense domain on which all products/commutators are defined.

**Finite-mode CAR and Clifford.** For finite-dimensional complex one-particle
space with a declared inner-product convention, define creation/annihilation
relations and prove their normal-form basis and finite Fock realization. Set
`γ_(2j−1)=a_j+a_j*`, `γ_(2j)=i(a_j*−a_j)`, verify self-adjointness and
`{γ_r,γ_s}=2δ_rs`, and give inverse
`a_j=(γ_(2j−1)+iγ_(2j))/2`. This compares finite CAR with the chosen complex
Clifford algebra. It does not identify bosonic CCR with Clifford, and does not
imply uniqueness of infinite-dimensional Fock representations or a
spin-statistics theorem. Reuse `physics/items/lem-qft-fock-ccr-car` only after
confirming its second-variable-linear inner product and a supported same-ID
route; current math depcheck scans `items/` only.

**Lie superalgebras.** State parity, signed skew symmetry and signed Jacobi.
The planned basic super-PBW/classical highest-weight route assumes
`char(k)=0`; for positive characteristic signed Jacobi alone may fail to
control odd self-Jacobi (notably characteristic three), so impose any additional
odd identity explicitly and prove a separate result. For odd `x`, derive
`x²=[x,x]/2` only when `2` is invertible.

## Temperley–Lieb parameter contracts

Fix diagrams with loop value `δ` and generators
`u_i²=δu_i`, `u_i u_(i±1)u_i=u_i`, and distant commutation. When using
`δ=q+q^(−1)`, state the scalar extension and do not divide by `δ`. The
complex fixed-rank regimes are separate: if `q²` has order `ℓ≥3`, TL_n is
semisimple for `n<ℓ`, its Jones trace is already degenerate at `n=ℓ−1`, and
TL_n is nonsemisimple for `n≥ℓ`; when `q²=1` it is semisimple at every rank;
when `q²=−1` (`δ=0`) it is semisimple for odd rank and nonsemisimple for even
rank, with TL₂(0) dual numbers and TL₃(0) ≅ `k⊕M₂(k)`. These statements do
not transfer to arbitrary fields. In Spencer’s modular convention define
`p(0)=1`, `p(i)=ℓ p^(i−1)` for `i>0`; the Jones–Wenzl index criterion is
`n<ℓ` or `n=a p(i)−1` with `1≤a<p`, while `p=∞` leaves only `n<ℓ`.
Name this convention and source when used.

A Jones–Wenzl recursion requires each denominator quantum integer to be a
unit; prove idempotence, annihilation and trace identities by induction. A
failed recursion, a trace-degenerate ideal, a negligible-morphism quotient and
a semisimple fusion quotient are four distinct statements. The existing
localized Hecke quotient proves neither diagram/presentation equivalence nor
Markov-trace descent. The existing generic quantum Schur–Weyl theorem already
provides the `N=2` image double-centralizer; the new proof is only the precise
Hecke action kernel/image to TL diagram quotient parameter map.

## Nonassociative Jordan boundary

For an associative algebra over a field with `2` invertible, define
`a∘b=(ab+ba)/2`; expand both sides to prove the Jordan identity. A Jordan
module or representation is not an ordinary module over the initial associative
algebra unless an enveloping construction is separately defined and proved. A
spin factor requires its precise real inner-product product and sign. The
exceptional Albert algebra requires octonion alternativity and its own Jordan
identity proof; the associative-product expansion does not establish it. Do
not claim a general formally-real classification in this bounded route.

## Existing categorical proof repairs before use

Reuse the published pivotal/spherical, categorical trace/dimension, twist/ribbon
and framed-tangle IDs. Before a new consumer uses them, close the local proof
steps imported by `thm-basic-properties-of-the-categorical-trace`,
`thm-in-a-spherical-category-the-left-and-right-traces-agree`,
`thm-a-braided-rigid-category-has-a-drinfeld-morphism`,
`lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`,
and `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`.
Do not duplicate any existing statement. A framed tangle evaluator does not by
itself give modularity, Verlinde or a TQFT.

## Current unresolved contract inventory

* A single Clifford signature and conversion table must be selected only after
  source reconciliation.
* TL diagram composition, diagram/presentation isomorphism, cell forms,
  parameter-dependent simple heads, Jones–Wenzl denominators, and trace descent
  remain independent obligations.
* Completed quantum-group R actions require a named completion and module class.
* The basic fusion page stops before pivotal/spherical/trace, but separate
  pivotal, spherical, trace/dimension and ribbon/tangle IDs exist. Repair their
  imported proof steps before use. Modularity, reconstruction and higher TQFT
  data remain separate obligations.
* Root math and physics CAR inner-product conventions differ; no proof may
  silently transport a formula between them.
* Any Poisson, A∞/L∞, BV, current, VOA, Sugawara, KZ or Cherednik additions need
  a final exact supplier and source audit before their contracts are frozen.
