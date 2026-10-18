# Algebras and representation theory in theoretical physics

**Planning status:** draft for independent audit; no native category or library
content has been created. **Proposed category ID:**
`algebras-and-representation-theory-in-theoretical-physics`.
**Proposed directory:**
`library/algebras-and-representation-theory-in-theoretical-physics/`.
The category is a mathematical synthesis and a source of genuinely missing
mathematical items. It does not own or copy the existing Lie, representation,
Hopf–Hecke, braid, category, homological, quantum-group, or physics-library
carriers. Existing items retain their canonical homes. The candidate pages below
are a planning inventory, not accepted pages, manifests, or proof claims.

## Purpose and authoring boundary

The subject is the passage from algebraic structure to representations and then
to carefully delimited theoretical-physics uses. A unital associative algebra
over a commutative ring is a module over that ring with an associative bilinear
product and a unit. A representation of such an algebra on a module is a
unit-preserving algebra homomorphism to its endomorphism algebra; equivalently,
it is a unital left module. A Lie algebra representation is a linear map into
endomorphisms that preserves the bracket. A tensor product of representations
is defined only after specifying how the algebra acts on the tensor product;
for a Hopf algebra this action is supplied by its coproduct. These distinctions
are the organizing thread: a presentation is not a basis theorem, an action is
not necessarily faithful, and a diagram is not a proof.

Every new mathematical claim must have a local proof and local prerequisite
closure under the mathematics schema. Citations record provenance and do not
replace arguments. An established theorem awaiting local authoring remains an
authoring obligation. A genuinely unresolved claim must be formulated as an
open problem with dated status evidence and cannot supply another claim.
Physical postulates, model assumptions, and observations belong to the separate
physics content model; pure mathematical claims in this category never depend
on physical postulates, physical theorems, or empirical observations. A physics
item marked `domain: mathematics` remains mathematical and may be a valid
supplier when its entire prerequisite closure is mathematical. The current
mathematics dependency checker scans root `items/`, not physics-only paths, so
a math item stored only under `physics/items/` has no direct resolver route
today. Before a native dependency uses it, identify an owner-supported
same-canonical-ID import/adoption route. Do not copy or rewrite the carrier to
work around that gap; do not treat a physical premise as mathematical material.
Until a route is verified, record the carrier as a semantically eligible
mathematical overlap and mark the proposed dependency route operationally
unresolved; do not classify it as mathematically ineligible.

The preferred reuse operation is a short interface or synthesis page that
points readers to existing canonical homes. Reauthor an item only for a checked
mathematical gap or a necessary extension whose changed hypotheses, parameter
range, characteristic, completion, topology, or conclusion are stated exactly.
The separate physics library already contains extensive mathematical
development for quantum mechanics, quantum field theory, and quantum
statistical mechanics, including oscillator and state/operator material.
Reuse eligible pure-mathematics carriers by their existing canonical identity;
current math dependency resolution does not load physics-only paths, so an
owner-supported same-ID import/adoption route must be verified before any new
math `deps` edge. Do not duplicate or relocate a carrier to work around the
resolver. Do not recreate a whole CCR, CAR, vertex-algebra, or BV development
merely because its physics home differs from a mathematics category. The root review did not find a universal Clifford
algebra/PBW/classification supplier in either library: existing QFT Dirac
projection and gamma-trace items are particular matrix applications. A
math-native universal Clifford core is therefore a proposed real gap, while
the physics Fock/Dirac applications stay as overlap context and must not be
copied into it.

## Reader route and existing canonical homes

The entry route is the existing algebra and module material in
`library/abstract-algebra/`, followed by
`library/lie-theory/lie-algebra-representations-enveloping-algebras-and-pbw`,
`library/category-theory/categories-functors-and-natural-transformations`,
`library/category-theory/monoidal-categories-and-monoidal-functors`, and
`library/abstract-algebra/tensor-products-of-modules`. The exact concepts used
by each proposed page are to be checked against those carriers before its
contract is frozen.

Readers then follow separate mathematical branches and reunite at their
representation and physics interfaces:

* Lie symmetries use
  `library/lie-theory/lie-algebra-representations-enveloping-algebras-and-pbw`,
  `library/lie-theory/highest-weight-theory-for-complex-semisimple-lie-algebras`,
  `library/lie-theory/weyl-character-and-multiplicity-formulas`,
  `library/lie-theory/affine-lie-algebras-and-loop-central-extensions`, and
  `library/lie-theory/the-weyl-kac-character-formula`. Group integration and
  global-form distinctions route through the existing Lie-group and group
  representation pages; a Lie-algebra module alone does not specify a global
  group representation.
* Tensor symmetries route through the published Hopf–Hecke pages
  `tensor-coherence-and-algebraic-descent`,
  `bialgebras-convolution-and-antipode-identities`,
  `hopf-module-tensor-products-and-rigid-duality`, and
  `quasitriangular-hopf-algebras-and-braided-module-categories`. Their exact
  checked items include `def-hh-leg-notation-and-quasitriangular-hopf-algebra`,
  `thm-hh-r-matrix-constructs-a-module-braiding`, and
  `lem-hh-local-braiding-operators-obey-braid-relations`.
* Coxeter and Hecke constructions route through
  `library/coxeter-groups/coxeter-presentations-exchange-and-reduced-word-theorems`,
  `library/hopf-hecke-algebras/generic-coxeter-hecke-algebras-and-the-standard-basis`,
  `library/hopf-hecke-algebras/hecke-parabolic-induction-and-symmetrizing-traces`,
  `library/hecke-algebras-and-categorification/type-a-hecke-specht-modules-and-cellular-bases`,
  and `library/hecke-algebras-and-categorification/cyclotomic-klr-algebras-and-highest-weight-categorification`.
  Braid actions and link-polynomial constructions keep their home in
  `library/braid-groups/`.
* Categorical and homological constructions route through
  `library/category-theory/braided-and-symmetric-monoidal-categories`,
  `library/category-theory/duality-and-rigidity-in-monoidal-categories`,
  `library/category-theory/tensor-and-fusion-categories`,
  `library/homological-algebra/chain-complexes-and-homology`,
  `library/homological-algebra/derived-categories`,
  `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions`,
  `library/homological-algebra/triangulated-categories`, and the relevant KLR,
  Soergel, and link-homology pages. The spelling of each canonical slug is
  checked in the page inventory.
* Analytic representation theory routes through existing representation pages
  for compact groups, unitary representations, group C*-algebras, positive-type
  functions, induced representations, and the Fell unitary dual. Reuse the
  published `def-state-on-a-c-star-algebra` and
  `lem-c-star-state-gns-purity-and-polish-state-space` for the C*-state/GNS
  interface, with their stated hypotheses and explicit choice use. The
  group-positive-type GNS theorem is a different supplier.

The canonical homes above are navigation and dependency candidates, not an
assertion that every page supplies every later theorem. Coverage and actual
proof status are tracked in `coverage.md`; each native `deps` edge still needs
item-level justification. The basic fusion-category page stops before pivotal, spherical, trace,
Frobenius–Perron, and reconstruction theory, but separate published
pivotal/spherical/trace/dimension definitions and ribbon tangle/link theorems
exist. Before relying on them, repair the imported proof steps in
`thm-basic-properties-of-the-categorical-trace`,
`thm-in-a-spherical-category-the-left-and-right-traces-agree`, and
`thm-a-braided-rigid-category-has-a-drinfeld-morphism`. The ribbon tangle
presentation/evaluation carriers also have imported Turaev relation-completeness
steps recorded by the auditor; reuse their IDs with proof-repair obligations.
These are existing-carrier repairs, not duplicate theorem proposals. A braided
category is not automatically ribbon, modular, or a TQFT.

## Proposed pathway parts

The exact 49 A/B pairs and their acyclic planning edges are recorded in
[`proposed-pages.json`](proposed-pages.json) (98 pages total). The inventory is
the authoritative page-ID list; the prose below describes its reader route.
Each B page contains examples and counterexamples for its A page and supplies
no general theorem unless separately specified.

1. **Gateway and representation actions.** Curate algebra/module, Lie/group,
   monoidal, Hopf, Hecke and tensor interfaces; reuse exact suppliers and add
   no duplicate foundations.
2. **Clifford, spin and fermions.** Build universal Clifford/PBW, real and
   complex classifications, graded products, Pin/Spin and spin geometry. A
   separate CAR/Majorana page proves only the finite-mode algebra comparison;
   a separate KO/ABS route retains the real-periodicity proof obligation.
3. **Weyl, Poisson and homological structures.** Keep polynomial Weyl algebras,
   exponentiated Weyl relations, strongly continuous regular representations,
   and unbounded operator domains distinct. Reuse the symplectic Poisson and
   C*-GNS cores; add only the general Poisson/formal-deformation, A∞/L∞ and
   BV/BRST deltas.
4. **Lie, affine-current and vertex routes.** Reuse ordinary finite, affine and
   category-O theory; add characteristic-zero Lie-super foundations, affine
   currents/Virasoro/Sugawara, formal vertex axioms and the carefully
   hypothesized Beilinson–Bernstein localization theorem. Rational and
   logarithmic module categories remain separate.
5. **Hall algebras.** Start with the untwisted finitary Hall product over any
   declared coefficient ring and prove its finite support, unit and flag
   associativity. Separate Euler-twisted Green/quantum-group comparison, Hall
   modules/actions, derived Hall, motivic Hall, CoHA, and stability/DT/BPS
   wall crossing. The quiver input category is not a module category over its
   Hall algebra.
6. **Diagram algebras.** Build TL diagrams/Catalan basis, cellular modules,
   generic semisimplicity, root-of-unity/modular representation theory,
   Jones–Wenzl/trace quotients, and finite-index tower/model bridges in
   dependency order. Keep Brauer/BMW/partition algebras as separate bounded
   extensions.
7. **Hopf, Hecke and integrability.** Reuse generic Hopf/quantum/Hecke/KLR/
   Soergel results; add only completed/root-of-unity and quasi-/weak-Hopf
   boundaries, unequal-parameter cells, general affine Hecke, DAHA, rational
   Cherednik and spectral-parameter bridges with exact assumptions.
8. **Group and operator representations.** Curate global-form/gauge interfaces,
   C*-states and GNS, Mackey induction, and a distinct positive-energy
   Poincaré little-group application. Physical postulates remain outside math
   prerequisites.
9. **Categorical symmetry and optional nonassociative examples.** Reuse actual
   pivotal/spherical/ribbon definitions after proof repairs; keep modularity,
   Verlinde, TQFT and fusion 2-categories deferred until supplied. Anyonic
   chains must include associators and multiplicity spaces. A bounded Jordan,
   spin-factor and alternative-algebra route is optional and does not displace
   the required Hall, TL or Clifford core.

The JSON inventory gives each page its distinct ID, A/B relation, lane,
proposed part, disposition (`reuse`, `extend`, `new`, or `defer`), ordered
proposed-page dependencies, exact existing item suppliers and limitations,
per-claim smallest supplier/consumer/proof obligation, and dated source
evidence. Proposed page edges are planning order only; they are not accepted
item dependencies or evidence that a theorem is locally proved.

## Conditions on physics connections

Physics links are explanatory applications, not mathematical dependencies.
Every model-facing passage must say whether it is an abstract representation,
a representation satisfying a topology or *-condition, or a representation
used under a physical model. State the underlying field, coefficient ring,
dimension, characteristic, parameter, completion, topology, and domain
conditions. A model statement such as “the XXZ chain has a quantum-group
symmetry” is not a theorem until the chain, boundary conditions, operator
space, coproduct convention, parameter, and commuting action are defined and
proved. Likewise, a free-fermion periodic table, an anyon model, a gauge algebra,
or a CFT construction must carry its physical assumptions separately from its
conditional mathematical consequences.

The contemporary bridge audited so far records a useful but bounded distinction:
under finite semisimple hypotheses, two-dimensional topological line operators
can lead to fusion-category data, while three-dimensional surfaces, lines, and
points require fusion 2-category structures. This 2023 source does not establish
2026 currency. The pointed category `Vec_G^ω` also needs a normalized
3-cocycle and associator satisfying the pentagon; its fusion ring omits that
associator. Diagonal rational-CFT Verlinde claims need an actual normalized
modular S matrix and a modularity theorem. None follows from the current basic
fusion-category page alone.

## Known unresolved obligations before native planning

The new category cannot be staged until the final research dossiers and audit
settle all of the following: exact existing-item statuses and statement/proof
coverage; math/physics cross-library overlaps; all local definitions and sign
conventions; source coverage through the research date; precise hypotheses for
each claimed theorem; and a complete acyclic `deps` graph for every proposed new
item. The smallest missing suppliers, affected consumers, and any branch that
remains blocked are recorded in `coverage.md`, `prerequisites.md`, and
`definition-and-diagram-contracts.md`. The audit handoff is not a build
transition or mathematical acceptance.
