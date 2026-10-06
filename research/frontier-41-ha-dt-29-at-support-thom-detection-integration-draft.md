# Integration proof draft: stable Thom detection from local suppliers

Run: frontier-41-ha-dt-29. This file is a draft-only integration proof for the single approved Algebraic Topology support pair. It creates no canonical items, pages, plan edges, manifests, readiness records, or run state. The supplier statements cited below are the six adjacent support drafts and already-published library interfaces named in them. Where a proof still requires a new local item, its proposed dependency order is explicit. The Pontryagin–Thom translation remains a DT-19 consumer.

## Scope and supplier boundary

Write T_r=Th(γ_r) for the rank-r universal real Thom space, with mod-two Thom class u_r. The prespectrum setup draft constructs the fixed-coordinate maps α_r:S¹∧T_r→T_{r+1} and the inverse-limit module

    M^d = Hhat^d(TO;F₂) = lim_r H̃^{r+d}(T_r;F₂)
         = F₂[w₁,w₂,…]^d U,    |U|=0.

Its transition is ρ_r=σ⁻¹α_r^*. For each d≥0 it is an isomorphism once r≥d; each M^d is finite-dimensional, and M^d=0 for d<0. It proves componentwise Steenrod operations and Sq^i(U)=w_iU, but explicitly does not prove a coalgebra, unit-orbit injection, freeness, or a represented-spectrum comparison.

The Steenrod–Eilenberg–Mac Lane draft supplies the admissible basis of the square algebra and its strict-range computation. The Hopf-freeness draft supplies the connected graded module-coalgebra theorem, conditional on its hypotheses. The odd-primary draft supplies rational and odd-field vanishing, integral finite generation, and the finite-generation cone UCT argument. The finite-range draft supplies the relative-Hurewicz comparison and a conditional cofinal-tail lemma. The rational-Hurewicz draft is a separate supplier for DT-19’s rational oriented-bordism branch; it is not needed in the mod-two Thom detection chain below.

Exact research-draft sources used here:

- `research/frontier-41-ha-dt-29-at-support-steenrod-em-proof-draft.md`, §§1–4 and 8: square algebra/basis, leading-monomial evaluation, and strict Eilenberg–Mac Lane range.
- `research/frontier-41-ha-dt-29-at-support-thom-prespectrum-draft.md`, §§1–6: fixed-coordinate MO prespectrum, actual pullback Thom maps, eventual stable cohomology, and componentwise squares.
- `research/frontier-41-ha-dt-29-at-support-hopf-freeness-draft.md`, “Precise theorem,” complete proof, and “Application obligations and limits”: freeness theorem and its exact module-coalgebra hypotheses.
- `research/frontier-41-ha-dt-29-at-support-odd-primary-thom-cohomology-draft.md`, items 2, 4–7: K(F₂,q) field behavior, odd/rational Thom vanishing, integral finite generation, and cone UCT comparison.
- `research/frontier-41-ha-dt-29-at-support-finite-range-comparison-draft.md`, finite-range comparison, detector application, and “Stabilization”: relative-Hurewicz range and conditional cofinal-tail argument.
- `research/frontier-41-ha-dt-29-at-support-rational-hurewicz-draft.md`, rows 1–10: the separate rational Hurewicz supplier; it is not invoked in the mod-two argument below.
- `research/frontier-41-ha-dt-29-batch-11.notes.md`, §5: approved support scope and the DT-19 downstream dependency seam.

The key existing published interfaces are these exact items: for the square
algebra and its test spaces, `thm-adem-relations-for-steenrod-squares`,
`thm-cartan-formula-for-steenrod-squares`,
`thm-steenrod-squares-are-well-defined-and-natural`,
`lem-mod-two-cohomology-ring-of-infinite-real-projective-space`, and
`thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`; for the
single shared Thom prespectrum, `def-stiefel-space-grassmannian-and-tautological-bundle`,
`thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`,
`thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
`def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`,
`thm-naturality-and-uniqueness-of-thom-classes`,
`thm-external-product-and-whitney-sum-formulas-for-thom-classes`,
`thm-mod-two-cohomology-of-bo-n`, and
`thm-thom-identity-for-stiefel-whitney-classes`; for the orbit test,
`def-euler-class-by-zero-section-pullback-of-the-thom-class`,
`thm-mod-two-euler-class-is-the-top-stiefel-whitney-class`,
`thm-whitney-sum-formula-for-stiefel-whitney-classes`, and
`def-tautological-degree-one-class-on-a-real-projective-bundle`; for
connectivity and Eilenberg–Mac Lane representation,
`lem-high-relative-cells-do-not-change-lower-homotopy`,
`thm-eilenberg-maclane-spaces-represent-singular-cohomology`, and
`cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces`;
and for stable passage, `def-stable-homotopy-groups-of-a-sequential-prespectrum`
and `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail`.
The complete relative-Hurewicz/CW-mapping-cylinder and coefficient-UCT
interface lists are recorded in the finite-range and odd-primary supplier
drafts cited above; their proofs are invoked only with the stated hypotheses.

The integration first proves the lifted BSO CW helper needed by MSO, then
relocates and expands the existing shared definition
`def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` onto the AT
A page. This is one shared item, not a second MO definition: its unoriented
levels and fixed-coordinate structure maps are exactly those of the setup
draft §§1–4, while its oriented levels retain the analogous published
oriented-Grassmannian construction needed by DT-19. The setup draft's
temporary MO-only identifier `def-real-universal-thom-prespectrum` is merged
into this shared item and is not separately added. All AT items below and all
DT-19 consumers must refer to that single item ID.

After the BSO helper and shared prespectrum definition, the integration
continues with the following dependency-ordered proof phases; the item
inventory below splits phases that need separate definitions and theorems:

1. construct the connected bialgebra structure on the mod-two square algebra;
2. construct the stable Whitney-sum coalgebra on M;
3. prove compatibility making M a module coalgebra;
4. prove injectivity of a↦aU;
5. apply the freeness theorem to M over the square algebra;
6. prove connectivity of each T_r;
7. construct a finite classifying detector map in rank r;
8. prove its mod-two cohomology comparison below degree 2r;
9. prove its integral homology comparison with the strict endpoint;
10. apply relative Hurewicz through degree 2r−2;
11. prove suspension compatibility of detector coordinates;
12. deduce injectivity on stable Thom homotopy groups.

Core integration items within the full inventory (16 of 54 new items; the moved shared definition is excluded):

1. `lem-oriented-grassmannian-has-two-lifted-schubert-cells`.
2. `lem-external-evaluation-detects-tensor-square-operations`.
3. `thm-admissible-square-algebra-is-a-connected-bialgebra`.
4. `def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology`.
5. `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`.
6. `lem-stable-thom-cohomology-is-a-square-module-coalgebra`.
7. `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit`.
8. `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`.
9. `lem-universal-real-thom-spaces-are-r-minus-one-connected`.
10. `def-finite-thom-classifying-detector-map`.
11. `lem-finite-thom-classifying-detector-map-exists-and-is-continuous`.
12. `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`.
13. `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1`.
14. `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`.
15. `lem-stable-thom-detector-coordinates-commute-with-suspension`.
16. `thm-stable-unoriented-thom-homotopy-is-injectively-detected`.

The shared-prespectrum section proves the lifted BSO CW prerequisite.
Section 1 contains the full tensor-faithfulness and bialgebra proofs; Section
2 separately justifies the Whitney-sum coalgebra definition; Section 7
separates and justifies the detector-map definition before its cohomology
theorem; Section 10 separates coordinate compatibility from the stable
injectivity conclusion.
The IDs are provisional until page-level dependency closure is mechanically
reconciled.

Each proof below cites existing published suppliers and the exact research-draft row that provides the adjacent input. All cohomology in the detection chain is reduced unless H⁰ is stated explicitly. Coefficients are F₂ except in the coefficient-comparison item. Assume AC wherever inherited from the cited suppliers; the item Statements record that full-AC contract explicitly wherever used.

## Shared prespectrum definition: one MO and MSO construction for the consumers

**Moved item ID:** `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`.
This is the existing combined DT-19 item relocated to the AT A page, not a
second definition. Its MO clause is exactly the fixed-coordinate construction
of the prespectrum setup draft §§1–4. Its MSO clause is justified below. The
temporary proposed ID `def-real-universal-thom-prespectrum` is merged into the
MO half and is not separately minted.

**Exact direct published inputs.** For MO use `def-stiefel-space-grassmannian-and-tautological-bundle`,
`thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
`def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`,
`prop-thom-space-of-zero-and-trivial-bundles`,
`prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product`,
`def-smash-product-of-based-spaces`, and
`def-sequential-prespectrum-spectrum-and-adjoint-structure-maps`. The full
MO fixed-coordinate, actual-pullback, Thom-CW, and rank-zero proof is in the
prespectrum setup draft §§1–4.

For MSO additionally use `def-oriented-grassmannian-and-tautological-oriented-bundle`,
`def-oriented-real-vector-bundle-and-oriented-frame-bundle`, and
`thm-oriented-real-vector-bundles-are-classified-by-bso`. The oriented CW
model needed here is proved in the odd-primary draft item 3, “Proof of the CW
prerequisite”: for positive rank it lifts each Schubert cell to the two
oriented cells and proves the lifted weak topology; rank zero is the point.
Use also `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`,
`prop-relative-cw-inclusions-are-cofibrations`,
`cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`, and the compactly
generated smash/loop-suspension adjunction interfaces inspected in the
prespectrum setup draft. Stable homotopy groups are then defined by
`def-stable-homotopy-groups-of-a-sequential-prespectrum`.

**Proposed local prerequisite:**
`lem-oriented-grassmannian-has-two-lifted-schubert-cells`. For n≥1, forgetting
orientation is genuinely a two-sheeted cover
BSO(n)=Gr⁺_n(R∞)→BO(n)=Gr_n(R∞) in the chosen model. On a base graph chart,
Gram–Schmidt supplies a continuous orthonormal frame of the tautological
bundle. Its two possible orientations give two disjoint open subsets of the
oriented chart, each mapped homeomorphically to the base chart. These charts
cover BO(n). This includes n=1: SO(1) is trivial, Gr⁺_1(R∞)=S∞, and
forgetting orientation is v↦Rv from the unit sphere to RP∞; over a chart with
a chosen unit representative it has the two sections v and −v. Rank zero is
excluded here and treated as a point below.

Lift each Schubert characteristic disk D^d→BO(n) to its two sheets; this is
possible because the disk is contractible, and the two lifts restrict to the
two lifts over every boundary cell. Choose a label for the two lifts of each
cell using AC. Their open interiors map homeomorphically to the underlying
Schubert open cell, and the lifted boundary maps into the inverse image of
the lower Schubert skeleton. Thus these disks supply attaching maps with
finite boundary support. Each finite Schubert skeleton is compact Hausdorff
with finitely many cells; its two-sheeted preimage is compact Hausdorff, and
the finite attaching quotient maps continuously and bijectively onto that
preimage. It is therefore a homeomorphism.

The infinite topology is the weak topology of these lifted cells. To check
the nontrivial direction, let C be a subset whose inverse image in every
lifted characteristic disk is closed. Over any evenly covered open set U
of BO(n), restrict to one sheet U⁺. On each base characteristic disk, the
preimage of U splits into relatively open-and-closed pieces on which a
chosen lift lies in U⁺; the lifted-cell test makes the preimage of C∩U⁺
closed on each such piece, hence on the preimage of U. Therefore the
preimage of U⁺\C is open relative to the preimage of U. Since that preimage
of U is open in each characteristic disk, this restricted preimage is open
in the full disk. The base CW weak-topology test makes U⁺\C open in U⁺,
hence C∩U⁺ closed there. The same holds on the other sheet, and these
sheets cover BSO(n), so C is closed upstairs. Conversely a closed subset
has closed inverse image under each characteristic map by continuity. The
lift topology is therefore exactly the CW weak topology. Finite cell counts
and closure finiteness are inherited from the Schubert structure, with two
lifts per cell. For n=0, BSO(0) is a point by the published definition.
This is the lifted-cover CW proof of odd-primary draft item 3, checked here
as the exact prerequisite of the shared MSO prespectrum item. ∎

**MSO levels and fixed-coordinate maps.** Put

    T⁺_n = Th(γ⁺_n over BSO(n)),

with the published rank-zero convention T⁺_0=S⁰. For n≥1 represent an
oriented plane by an oriented orthonormal frame modulo SO(n), and let J be
the coordinate shift from the real construction. Define

    s⁺_n(W,o)=(R e₁ ⊕ J(W), e₁ ∧ J_*o).

For n=0, s⁺_0 sends the point to the positively oriented line R e₁. These
maps are continuous: on every finite Stiefel stage the frame formula is

    (v₁,…,v_n) ↦ (e₁,Jv₁,…,Jv_n).

It is equivariant for the block inclusion SO(n)→SO(n+1), A↦diag(1,A), so it
descends to the oriented Grassmannian quotient. The finite-stage maps agree
under coordinate inclusions; the weak direct-limit map-out test gives
continuity on BSO(n). This covers n=0 by the point map.

There is a specified orientation-preserving bundle isomorphism

    ε¹_+ ⊕ γ⁺_n  → (s⁺_n)^*γ⁺_{n+1},
    (W,a,v) ↦ (W', a e₁+Jv),

where ε¹_+ is the trivial line oriented by e₁ and W'=R e₁⊕J(W). The
orientation on the target is e₁∧J_*o, so the displayed fiber map preserves
the ordered sum orientation. In finite graph charts it and its inverse are
continuous; the inverse reads off the e₁-coordinate and applies J⁻¹ to the
orthogonal complement. The norm identity a²+||v||² proves it is an
isometry. At n=0 this is the specified positive-line identification over
the point.

The real setup draft §3 proves a based homeomorphism

    h_n:S¹∧T_n ≅ Th(ε¹⊕γ_n)

using the disk/sphere quotient and the maximum-to-Euclidean radial map, with
the suspension coordinate first. The same formula, with ε¹ positively
oriented, gives an orientation-preserving based homeomorphism

    h⁺_n:S¹∧T⁺_n ≅ Th(ε¹_+⊕γ⁺_n).

Its continuity and inverse are the same radial formulas in oriented local
bundle charts; the orientation is the ordered first coordinate followed by
the old fiber orientation. Define the MSO structure map by

    α⁺_n:S¹∧T⁺_n --h⁺_n→ Th(ε¹_+⊕γ⁺_n)
          → Th((s⁺_n)^*γ⁺_{n+1}) → T⁺_{n+1}.

The middle arrow is the Thom map of the displayed bundle isometry. The last
arrow is induced by the actual pullback-bundle projection covering s⁺_n;
it is not an identification of the pullback Thom space with the universal
Thom space. It is based continuous because the bundle projection preserves
the norm and disk/sphere subspaces, then descends by the quotient
universal property. At n=0, the map is the canonical S¹≅Th(ε¹_+) over the
positive line, with T⁺_0=S⁰.

**MSO Thom-space CW and prespectrum checks.** Over each d-cell of the
oriented Schubert CW model, the lifted characteristic disk has a continuous
oriented orthonormal frame for the pulled-back tautological bundle: the real
Schubert characteristic-frame supplier gives an orthonormal frame over the
underlying disk, and the orientation lift specifies whether it or its
first-vector reversal is positive. In that frame its disk/sphere pair is
(Dᵈ×Dⁿ,Dᵈ×Sⁿ⁻¹). Attaching this pair over the
base cell adds one cell of dimension d+n; its attaching boundary is
∂Dᵈ×Dⁿ ∪ Dᵈ×Sⁿ⁻¹, the boundary of a (d+n)-ball by the same radial
homeomorphism used in the MO setup proof. The fiber sphere is collapsed to
the basepoint, and the base boundary maps into lower Thom cells.

The finite-stage attachment quotients are compact-to-Hausdorff bijections,
so they have the stated quotient topology. For the infinite topology, every
compact Hausdorff test into the disk bundle projects to a compact subset of
BSO(n), hence to a finite lifted CW subcomplex by the published compact-image
supplier. It therefore factors through a finite disk-bundle stage. A subset
of the total disk bundle is closed exactly when its inverse image in each
finite characteristic disk bundle is closed: one direction is continuity;
the other follows by testing on every compact map and using compact
generation. For the Thom quotient, apply this same test to the inverse image
of a subset under the disk/sphere quotient; being closed is precisely the
finite-stage quotient test, so the quotient has the CW weak topology of the
attaching cells. Finite boundary support gives closure finiteness; the cited
CW attachment supplier supplies Hausdorffness; the compact-test argument
gives compact generation; and the compact-subset-closed supplier gives weak
Hausdorffness. The basepoint is a CW vertex, so its inclusion is a relative
CW cofibration and the based Thom space is well-pointed. This is the MO
topology proof of setup draft §3 with each base Schubert cell replaced by
each of its two oriented lifts. At rank zero, BSO(0) is a point and
T⁺_0=S⁰, so it is separately well-pointed CW.

Consequently every MSO level is a based well-pointed CGWH CW space and
every α⁺_n is a continuous based map; its adjoint is continuous by the
published loop-suspension adjunction. Together with the MO maps α_n from
the setup draft, these data satisfy the published sequential-prespectrum
definition. Applying the published stable-homotopy-group definition gives
both colimits used by DT-19. DT-19’s collapse and characteristic-number
items must depend on this one relocated combined item. ∎

## 1. Connected bialgebra of stable mod-two square operations

**Proposed local items.**

- Lemma: external evaluation is faithful on the tensor product of square operations.
- Theorem: the admissible mod-two square algebra is a connected graded bialgebra with Δ(Sqⁿ)=Σᵢ₌₀ⁿ Sqⁱ⊗Sqⁿ⁻ⁱ.

**Inputs.** The Steenrod–Eilenberg–Mac Lane draft, §1 (definition), §2 (Adem spanning), §3 (distinct leading monomials), and §4 (admissible basis); published Adem relations, Cartan formula, naturality, and projective-space cohomology/Künneth suppliers named in that draft; `def-quotient-vector-space-and-canonical-projection`, `prop-quotient-vector-space-operations-and-projection`, `cor-every-vector-space-has-a-basis`, `thm-tensor-products-commute-with-arbitrary-direct-sums`, `thm-tensor-product-basis-from-bases`, `thm-unit-isomorphisms-for-module-tensor-products`, and `thm-universal-property-of-module-tensor-products` for the linear-algebra decompositions below.

**Proof of tensor faithfulness.** Let A^d be the degree-d part of the square algebra. By the §4 admissible-basis theorem, its basis consists of Sq^I with |I|=d. Set X_d=(RP^L)^{d+1}, P_d=x₁⋯x_{d+1}, with L≥d+1. Every admissible I of degree d has e(I)≤d<d+1. The §3 leading-monomial lemma therefore applies and gives distinct largest monomials for the classes Sq^I(P_d). Those classes are linearly independent: in a nonzero finite linear combination, the largest of the distinct leading monomials cannot cancel. Thus evaluation j_d:A^d→H*(X_d;F₂), a↦a(P_d), is injective. For d=0, X_0=RP^L and P_0=x₁; the identity operation sends x₁ to the nonzero class x₁.

For a fixed bidegree (d,e), the external action map

    A^d⊗A^e → H*(X_d;F₂)⊗H*(X_e;F₂),
    a⊗b ↦ a(P_d)⊗b(P_e)

is injective for an explicit linear-algebra reason. Extend bases of im(j_d) and im(j_e) to bases of the two target vector spaces. Projection to im(j_d), followed by j_d⁻¹, gives a left inverse r_d of j_d; similarly obtain r_e. Then r_d⊗r_e is a left inverse of j_d⊗j_e by the tensor universal property, so j_d⊗j_e is injective. The cohomological Künneth theorem identifies the target with the corresponding external-product subspace in H*(X_d×X_e;F₂). Distinct bidegrees remain distinct under this Künneth decomposition. Since every tensor is a finite sum of homogeneous bidegrees, an element of A⊗A acting as zero on every external product of classes must be zero. This proves tensor faithfulness.

**Proof of the bialgebra statement.** Let T be the free associative graded algebra on symbols s_n, n>0, with s₀=1. Define an algebra homomorphism

    Δ̃:T→T⊗T,       Δ̃(s_n)=Σ_{i+j=n}s_i⊗s_j,

using the graded tensor-product multiplication; over F₂ all Koszul signs equal 1. Define ε̃(s₀)=1 and ε̃(s_n)=0 for n>0, extending multiplicatively. On generators, Δ̃ is coassociative because both iterates sum once over triples i+j+k=n. The two counit identities also hold on generators. Since all maps in these identities are algebra homomorphisms, the identities hold on T.

Let R₀ be the set of displayed Adem relation generators, and let I=(R₀) be their two-sided ideal. The square-basis draft’s map T/I→A identifies each R∈R₀ with the zero natural operation. For spaces X,Y and classes x∈H*(X), y∈H*(Y), repeated application of the published Cartan formula gives

    R(x×y)= (q⊗q)(Δ̃R)·(x⊗y),

where q:T→A is the quotient map and the tensor action means external product after applying the two factors. The left side is zero because R∈R₀ is an Adem relation. Tensor faithfulness therefore gives (q⊗q)(Δ̃R)=0. To compute the kernel, use AC and basis extension to choose a complement C with T=I⊕C. Distribution of tensor products over this finite direct sum gives

    T⊗T=(I⊗I)⊕(I⊗C)⊕(C⊗I)⊕(C⊗C).

The map q⊗q kills the first three summands and restricts to the isomorphism C⊗C→(T/I)⊗(T/I) on the last. Hence ker(q⊗q)=I⊗T+T⊗I; write J for this kernel. Since I is a two-sided ideal, J is a two-sided ideal in T⊗T. We have Δ̃(R)∈J for each R∈R₀. Every element of I is a finite sum of terms xRy with x,y∈T and R∈R₀, so multiplicativity gives Δ̃(xRy)=Δ̃(x)Δ̃(R)Δ̃(y)∈J. Therefore Δ̃(I)⊂J, and Δ̃ descends to Δ_A:A→A⊗A. Also ε̃(R)=0 for every R∈R₀ because each generator is homogeneous of positive degree. Since ε̃ is multiplicative, it vanishes on all of I and descends to A. The descended maps remain algebra homomorphisms, coassociative and counital. The basis theorem gives A₀=F₂·1 and A_d=0 for d<0. Thus A is a connected nonnegatively graded bialgebra, with

    Δ_A(Sqⁿ)=Σᵢ₌₀ⁿ Sqⁱ⊗Sqⁿ⁻ⁱ.

No antipode is required by the Hopf-freeness supplier. ∎

## 2. Stable Whitney-sum coalgebra on the Thom cohomology module

**Proposed local items.**

- `def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology` records the explicit polynomial coproduct, counit and coaugmentation formulas.
- `lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology` proves finite-rank Thom pullback agreement, compatibility with both stabilization systems, and the connected coaugmented coalgebra axioms on the inverse-limit module.

**Inputs.** The prespectrum setup draft, §§1–5; `def-smash-product-of-based-spaces`; `lem-relative-singular-product-chain-equivalence-for-cw-pairs`; `lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`; `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`; `def-r-oriented-vector-bundle-and-orientation-local-system`; `thm-whitney-sum-formula-for-stiefel-whitney-classes`; and `thm-external-product-and-whitney-sum-formulas-for-thom-classes`. In the six drafts, the exact Thom-space stabilization and variance are in setup §§1–5; the actual pullback Thom map and normalized-class naturality are in §2.

For each p,q, classify the external direct sum of γ_p and γ_q by a map

    μ_{p,q}: BO(p)×BO(q)→BO(p+q),

so μ_{p,q}^*γ_{p+q}≅pr₁^*γ_p⊕pr₂^*γ_q. The vector-bundle classification supplier gives such a continuous classifying map and bundle isomorphism. Its stated CGWH/numerable-bundle clause applies: the product base is CGWH, and the product of locally finite numerations of the two tautological bundles numerates their external direct sum. Different classifying choices are homotopic and induce the same cohomology map. Every real bundle here has the canonical mod-two orientation by `def-r-oriented-vector-bundle-and-orientation-local-system`, so the published external Thom-product formula applies to γ_p and γ_q and identifies the Thom class with the external product of the two mod-two Thom classes. The Thom pullback map and the external Thom-space product give the corresponding cohomology map from T_{p+q} to T_p∧T_q. At finite ranks, all mod-two cohomology groups in a fixed degree are finite-dimensional: the Thom isomorphism identifies them with homogeneous pieces of F₂[w₁,…,w_p], and the Schubert CW model has finitely many cells in each degree. The Thom CW structure therefore has finite-dimensional cellular chains in each degree, so its mod-two homology is finite-dimensional and free in each degree. Thus the relative field Künneth theorem for the CW pairs (T_p,*) and (T_q,*) applies to the based smash, with

    H̃^{p+q+d}(T_p∧T_q;F₂)
      ≅ ⊕_{a+b=d} H̃^{p+a}(T_p;F₂)⊗H̃^{q+b}(T_q;F₂).

Only finitely many summands occur, since M has no negative degrees.

Set w₀=1 and P=F₂[w₁,w₂,…]. Define the algebra homomorphism

    Δ_P:P→P⊗P,       Δ_P(w_k)=Σ_{i+j=k}w_i⊗w_j.

On M=P·U put Δ_M(fU)=Δ_P(f)(U⊗U). This is well-defined and degree
preserving: polynomials have finite support and every displayed coproduct
has finitely many terms. Under the Thom isomorphisms and the Whitney formula, pullback along μ_{p,q} is

    w_k U ↦ Σ_{i+j=k}(w_iU)⊗(w_jU),
    U ↦ U⊗U.

Indeed, the base class pulls back by w_k(E⊕F)=Σw_i(E)w_j(F), and the Thom class pulls back to the external product of the two normalized Thom classes. This formula is independent of the chosen classifying maps. In the following square, μ_{p,q} also denotes the induced based Thom multiplication T_p∧T_q→T_{p+q}; its cohomology pullback is the rankwise map just computed. Compatibility with rank transitions is the cohomological commutativity of this square for stabilization of the first factor:

    H̃^{p+q+1+d}(T_{p+q+1})  --μ_{p+1,q}^*-->  H̃^{p+q+1+d}(T_{p+1}∧T_q)
              | ρ_{p+q}(d)                            | ρ_p(a)⊗id
              v                                       v
    H̃^{p+q+d}(T_{p+q})      --μ_{p,q}^*---->  H̃^{p+q+d}(T_p∧T_q),

where on a Künneth summand a+b=d, the right vertical map applies ρ_p(a) to the first factor and the identity to the second. On bundles, the two composites classify respectively (ε¹⊕γ_p)⊕γ_q and ε¹⊕(γ_p⊕γ_q); associativity and the coordinate permutation of the ordered direct sum give the bundle isomorphism over fixed-coordinate stabilization. It preserves mod-two Thom normalization, and the Whitney formula leaves each w_i unchanged under adjoining the trivial line (with indices above a finite rank truncated to zero). Naturality and homotopy uniqueness of the classifying maps therefore make the square commute. The same argument stabilizes the second factor. Consequently the rankwise pullbacks define a map

    Δ_M:M^d→⊕_{a+b=d}M^a⊗M^b

on the inverse limit. Equivalently, since every degree stabilizes and is finite-dimensional, Δ_M is the unique degreewise map given by the displayed formula on the stable polynomial module. The two descriptions agree on every sufficiently large rank.

Coassociativity follows from coassociativity of Δ_P and Δ_M(U)=U⊗U: on w_k both iterates of Δ_P are the sum over i+j+l=k, and equality on polynomial generators extends multiplicatively to P. Define ε_M(fU)=f(0), the constant term of f. The two counit identities follow from the terms with i=0 or j=0. The degree-zero part is F₂U, so M is a connected nonnegatively graded coaugmented counital coalgebra. This constructs the coalgebra on the specified prespectrum invariant; it does not identify M with represented spectrum cohomology. ∎

## 3. The square action makes M a module coalgebra

**Proposed local item.** Assume AC. The stable Thom cohomology coalgebra is an A-module coalgebra for the diagonal action determined by Δ_A.

**Inputs.** Items 1–2 above; the prespectrum setup draft §6 (componentwise stable Sq action); published naturality and Cartan formula for Steenrod squares; Thom pullback naturality and external product.

For x∈M, take its sufficiently high finite-rank components x_n. The Whitney coalgebra is induced by the finite-rank direct-sum Thom pullback μ*, so naturality gives

    Δ_M(Sq^k x)=μ*(Sq^k x)=Sq^k(μ* x).

Write μ*x under the Künneth isomorphism as a finite sum Σx_a⊗y_b. Cartan gives

    Sq^k(x_a×y_b)=Σ_{i+j=k}Sq^i(x_a)×Sq^j(y_b).

Therefore

    Δ_M(Sq^k x)=Σ_{i+j=k}(Sq^i⊗Sq^j)Δ_M(x)
               =Sq^k·Δ_M(x),

where the last action is the diagonal A-action defined from Δ_A(Sq^k). This is the required compatibility for the generators. For a product ab∈A, Δ_A(ab)=Δ_A(a)Δ_A(b); the module law on M and the already-verified generator compatibility give Δ_M((ab)x)=(ab)·Δ_M(x). Extend by linearity to all a∈A. The bialgebra counit/grade conditions give the counit compatibility as in the Hopf-freeness draft. Thus all hypotheses involving the action and coproduct are satisfied. ∎

## 4. The unit orbit a↦aU is injective

**Proposed local item.** Assume AC. For the stable Thom class U∈M⁰, the degree-preserving map ν:A→M, ν(a)=aU, is injective.

**Inputs.** The prespectrum setup draft §§2, 5–6; the Steenrod–Eilenberg–Mac Lane draft §3 (distinct leading monomials for admissible composites on products of projective spaces) and §4 (the admissible basis); published Grassmannian bundle classification, Thom-class naturality, the zero-section definition of Euler class, the theorem e₂(E)=w_rank(E), and the Whitney formula for Stiefel–Whitney classes.

Take a nonzero homogeneous a∈A^d. Set r=d+1 and X=(RP^L)^r with L≥d+1. Let x_i be the degree-one generator from factor i and P=x₁⋯x_r. By the leading-monomial lemma, the admissible terms in a have distinct leading monomials on P, so a(P)≠0.

Let E=⊕_{i=1}^r pr_i^*γ₁ over X. The stable Grassmannian classification gives a classifying map g:X→BO(r) with g^*γ_r≅E. The prespectrum setup’s pullback Thom map T(E)→T_r pulls u_r back to u_E. The based zero section z_+:X_+→T(E) pulls the normalized Thom class back to the mod-two Euler class:

    z_+^*u_E=e₂(E)=w_r(E)=x₁⋯x_r=P.

The first equality is the published Euler definition by zero-section pullback; the second is the published mod-two Euler/top-Stiefel–Whitney theorem; the third follows from w₁(γ₁)=x_i, w_j(γ₁)=0 for j>1, and the Whitney product formula. These are the published tautological degree-one class, Whitney-sum, and mod-two Euler suppliers. Naturality of every Sq composite, hence of a, now gives

    z_+^* T(g)^* (a u_r)=a(P)≠0.

Thus a u_r≠0. If aU were zero in M, every inverse-limit component would vanish, in particular its rank-r component a u_r; contradiction. So ν is injective in each degree and hence on the graded direct sum. For an inhomogeneous element, its distinct degree components remain distinct in M and cannot cancel. ∎

**Definition justification note.** The map z_+ is based and continuous: compose the continuous zero section with the disk/sphere quotient and send the disjoint basepoint of X_+ to the Thom basepoint. If the item set has no reusable zero-section Thom-class pullback lemma, add that one-line factorization as a local definition-justification lemma; the equality itself is already the published Euler definition.

## 5. Freeness of stable Thom cohomology over A

**Proposed local item.** Assume AC. M is a free graded left A-module.

Items 1–4 show that A is a connected nonnegative graded bialgebra, M is a connected nonnegative graded coaugmented coalgebra, the action satisfies Δ_M(am)=a·Δ_M(m), and the unit orbit is injective. Apply the complete theorem proved in the Hopf-freeness draft, §3 (“Precise theorem” and §4 proof):

    M ≅ A⊗(M/A⁺M)

as graded left A-modules, with any homogeneous basis of Q=M/A⁺M lifting to a free A-basis of M. This application requires no finite-type assumption for the freeness theorem itself. For detector construction, M^d is finite-dimensional by the prespectrum setup draft §5, so Q^d is finite-dimensional in each degree. ∎

## 6. Connectivity of the finite Thom spaces

**Proposed local item.** For each r≥2, T_r is a nonempty (r−1)-connected based CW complex.

The prespectrum setup draft §3 constructs T_r as a based CW complex. Over a d-dimensional Schubert cell of BO(r), its Thom attachment contributes cells of dimension d+r, with d≥0; hence every cell outside the basepoint has dimension at least r. Apply the published high-relative-cells lemma to the CW pair (T_r,*): it is (r−1)-connected. In particular T_r is path-connected and simply connected for r≥2. The basepoint is a vertex. This is the separate connectivity argument required by both finite-range drafts; it does not follow from a cohomological Thom isomorphism alone. ∎

## 7. Finite detector maps and the strict mod-two comparison

**Proposed local items.**

- `def-finite-thom-classifying-detector-map` specifies the finite product of Eilenberg–Mac Lane classifying maps.
- `lem-finite-thom-classifying-detector-map-exists-and-is-continuous` proves that the chosen basis and lifts give a finite family and a continuous based product map.
- Assume AC. Theorem: f_r^* is an isomorphism in reduced mod-two cohomology for every degree k<2r.

Using AC, fix once and for all a homogeneous basis B=⋃_{d≥0}B_d of Q and a degree-preserving section Q→M; write m_b∈M^d for the lift of each b∈B_d. These choices are shared across all ranks. The Hopf-freeness theorem says that this one global family of lifts is an A-module basis of M. For each r≥2 set

    B(r)=⋃_{0≤d<r} B_d.

This initial segment is finite: each Q^d is a quotient of the finite-dimensional M^d, and there are only r degrees in the union. For b∈B_d, the stable coordinate isomorphism M^d→H̃^{r+d}(T_r;F₂) supplies the rank-r class m_{r,b} from the same fixed stable element m_b. Let f_{r,b}:T_r→K(F₂,r+d) classify m_{r,b}, using the published Eilenberg–Mac Lane representability theorem, and set

    P_r=∏_{b∈B(r)} K(F₂,r+d_b),       f_r=(f_{r,b})_b.

The product is finite, so its coordinate maps define a continuous based map. This is the promised construction from homogeneous free-module generators; the generic representability construction alone would not show the comparison.

For k<r, the Thom-cell description gives H̃^k(T_r)=0. Every factor K(F₂,r+d_b) is (r−1)-connected, so the finite product has zero reduced cohomology in degrees below r. Thus f_r^* is an isomorphism in this range.

Now let r≤k<2r and put e=k−r, so 0≤e≤r−1. The stable-coordinate isomorphism gives

    H̃^k(T_r;F₂) ≅ M^e
      = ⊕_{b∈B(r), d_b≤e} A^{e−d_b}m_b.

The last equality is the graded free-module decomposition; generators with d_b>e cannot contribute because A has no negative degrees.

The Steenrod–Eilenberg–Mac Lane draft §8 gives, strictly for 0≤i<q,

    H̃^{q+i}(K(F₂,q);F₂) ≅ A^i,
    a ↦ a(ι_q).

For a factor indexed by b∈B_d, q=r+d. In total degree k<2r, its operation degree is i=k−q=e−d. When i≥0,

    i ≤ r−d−1 < r+d=q,

so the strict Eilenberg–Mac Lane theorem applies. A product of two positive-degree polynomial generators, whether in one factor or in two factors, has degree at least 2r because every q≥r. Hence below 2r the cohomology of the finite product P_r is the direct sum of the single-factor operation classes:

    H̃^k(P_r;F₂) ≅ ⊕_{b∈B(r), d_b≤e} A^{e−d_b}.

Here finite-product Künneth applies: each factor has finite-dimensional F₂ homology in every degree by the odd-primary draft item 2, hence finite-free homology over F₂; the polynomial theorem in the Steenrod–Eilenberg–Mac Lane draft §7 gives the stated cohomology basis. The classifying-map evaluation identity gives

    f_r^*(a(ι_{r+d_b}))=a(m_{r,b}).

Under the stable-coordinate identification, the right side is exactly a·m_b. The free-module decomposition above says these classes form a basis of H̃^k(T_r). Thus f_r^* is an isomorphism for every k<2r.

The endpoint is intentionally excluded. At degree 2r, products of two degree-r classes can occur in P_r, and the strict Eilenberg–Mac Lane computation does not identify them by the argument above. No claim at 2r is used. ∎

## 8. Integral homology comparison, with the endpoint retained exactly

**Proposed local item.** Assume AC. For f_r above, f_{r*}:H_i(T_r;Z)→H_i(P_r;Z) is an isomorphism for i<2r−1 and a surjection for i=2r−1.

Set D=2r−1. The odd-primary Thom-cohomology draft, items 2 and 4, proves that for every field F of characteristic different from two, both reduced cohomology groups H̃^i(T_r;F) and H̃^i(P_r;F) vanish for 0<i<2r. In degree zero both spaces are connected, so the ordinary H⁰ map is also an isomorphism. Item 7 above proves the F₂ cohomology isomorphism through every degree k≤D. Therefore f_r^* is an isomorphism in ordinary cohomology for F=Q and every F_p, in all degrees 0≤i≤D.

Let C_f be the integral singular-chain mapping cone of f_r. The odd-primary draft, items 5–6, proves H_i(T_r;Z) and H_i(P_r;Z) are finitely generated, so its cone long exact sequence makes H_i(C_f) finitely generated in every degree. The cone is free degreewise as an abelian chain complex. For each field F, the degreewise-split cone cochain sequence gives

    H^{i−1}(P_r;F)→H^{i−1}(T_r;F)→H^i(Hom(C_f,F))
                     →H^i(P_r;F)→H^i(T_r;F).

The adjacent cohomology isomorphisms force H^i(Hom(C_f,F))=0 for 0≤i≤D (with negative groups zero at i=0). The cohomological UCT over Z surjects this zero group onto Hom(H_i(C_f),F). Thus Hom(H_i(C_f),Q)=0 and Hom(H_i(C_f),F_p)=0 for every prime p. A finitely generated abelian group with all these Hom groups zero is zero: Q detects any nonzero free summand, and F_p detects any nonzero p-primary cyclic summand. Therefore H_i(C_f)=0 for i≤D. The integral cone exact sequence yields

    f_{r*} is an isomorphism for i<D=2r−1,
    f_{r*} is surjective for i=D=2r−1.

This is exactly the endpoint needed below. It gives no injectivity assertion at degree 2r−1 and uses no comparison at or beyond 2r. The proof is the application of the odd-primary draft’s item 7; the finite-range draft §“what upgrades field computations to integral input” independently records the same strict conclusion. ∎

## 9. Relative-Hurewicz detection through 2r−2

**Proposed local item.** Assume AC. For r≥2, the map f_r induces an isomorphism

    π_i(T_r) ≅ π_i(P_r) ≅ F₂^{B_{i−r}}

for 1≤i≤2r−2, with B_j understood as empty for j<0 or j>r−1.

By item 6, T_r is a simply connected CW complex. The target P_r is a finite product of K(F₂,q) with q≥r≥2, hence path-connected and simply connected; we do not assume its ordinary product topology is a CW topology. Apply both pieces of the finite-range draft: first its arbitrary-target extension by relative CW approximation (the target-need-not-be-CW section) to replace f_r by a CW extension pair, then its integral homology-to-homotopy comparison theorem with N=2r−1. Item 8 supplies the exact homology hypotheses, so f_r induces π_i isomorphisms for 1≤i<N, namely through 2r−2. No claim about π_{2r−1} or π_{2r} follows.

A factor K(F₂,r+d_b) has its only nonzero positive homotopy group F₂ in degree r+d_b. Coordinatewise homotopy groups of a finite product are the products of the factor groups, as proved in the finite-range draft’s detector application. Hence at i=r+n the target is F₂^{B_n}. The induced coordinate on a sphere class [α:S^{r+n}→T_r] is

    ⟨m_{r,b}, α_*[S^{r+n}]_{F₂}⟩ = ⟨α^*m_{r,b},[S^{r+n}]_{F₂}⟩,

by representability and the normalized fundamental class. The cutoff i≤2r−2 is equivalent to r≥n+2. ∎

## 10. Compatibility under suspension and stable injectivity

**Proposed local items.**

- Lemma: the detector coordinates commute with prespectrum stabilization.
- Assume AC. Theorem: stable Thom homotopy maps injectively to the stable detector coordinates.

Fix n≥0 and the degree-n part B_n of the single global basis fixed in §7. For every r≥n+2, define

    D_{r,n}:π_{r+n}(T_r)→V_n,       V_n=F₂^{B_n},

by pairing with the stable coordinates m_{r,b}, b∈B_n. Item 9 says D_{r,n} is an isomorphism. This is the same map as the π_{r+n} map of f_r after identifying π_{r+n}(P_r) with V_n by its normalized Eilenberg–Mac Lane fundamental classes.

Let β_r:S¹∧T_r→T_{r+1} be the prespectrum structure map, and let b_{r,n} be its induced stabilization map on π_{r+n}. Since m_b is an inverse-limit element, its coordinates satisfy

    σ⁻¹β_r^* m_{r+1,b}=m_{r,b}.

For a based representative α:S^{r+n}→T_r, naturality of the Kronecker pairing gives

    ⟨m_{r+1,b}, (β_r∘(1∧α))_*[S¹∧S^{r+n}]_{F₂}⟩
      =⟨β_r^* m_{r+1,b}, (1∧α)_*[S¹∧S^{r+n}]_{F₂}⟩
      =⟨m_{r,b}, α_*[S^{r+n}]_{F₂}⟩.

All sphere classes in these pairings are mod-two fundamental classes, not unreduced integral classes. For the second equality, represent the cohomology suspension of m_{r,b} by its external product with the degree-one generator of S¹. Under S¹∧S^{r+n}≅S^{r+n+1}, the mod-two sphere fundamental class is the external product of the two mod-two fundamental classes. Evaluation of external products on product chains is the product of the two evaluations; the S¹ factor evaluates to 1. Naturality of the Kronecker pairing then gives exactly the displayed equality. These are the published suspension, external-product/Künneth, and Kronecker naturality interfaces; coefficients are F₂, so there is no sign ambiguity. Thus

    D_{r+1,n} b_{r,n}=D_{r,n}.

With the fixed target V_n, the target bonding maps are identities. Item 9 supplies an injection D_{r,n} on every rank r≥n+2. The cofinal-tail lemma in the finite-range draft, §“Stabilization,” now proves

    colim_r π_{r+n}(T_r) → V_n

is injective. Explicitly, represent a stable class at a rank r≥n+2. If its detector is zero, compatibility makes its detector zero at every later rank; injectivity of D_{s,n} then makes the advanced source representative zero, so the colimit class was zero. This proves the stable conclusion without assuming stabilization is an isomorphism in advance. In fact, because each D_{r,n} is an isomorphism and the square commutes, the bonding maps are isomorphisms on this tail, but this stronger consequence is not needed for injectivity. ∎

## 11. Consumer seam and the remaining Pontryagin–Thom translation

The mod-two stable detection theorem proved by items 1–10 concerns the single prespectrum T_r=Th(γ_r) constructed in the AT support. It does not itself identify its stable homotopy with smooth bordism or convert its cohomology evaluations into characteristic numbers.

The DT-19 collapse and universal Pontryagin–Thom items identify unoriented bordism with the stable homotopy of the universal real Thom prespectrum; its conversion lemma identifies evaluations of universal Thom classes with Stiefel–Whitney numbers using collapse pullback/Poincaré duality and the degreewise inverse of total normal classes. Every chosen stable detector class m_b lies in M=F₂[w₁,w₂,…]U, so its rank-r coordinate is a finite polynomial in universal Stiefel–Whitney classes times u_r. Thus the detector evaluations are finite F₂-linear combinations of the Stiefel–Whitney-number evaluations that DT-19 translates. The DT-19 detection theorem must cite the AT stable detection theorem to prove that these evaluations separate the stable Thom classes. The conversion lemma expressly leaves this separation unproved, so it cannot serve as its own proof. Only DT-19 consumes the combined MO/MSO prespectrum definition, so only its page-level prerequisite array should receive the AT A-page edge to the moved item. The separate DT-9 framed-bordism page does not need that edge.

There must be only one MO prespectrum definition. The run’s DT-19 batch currently owns the item ID `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`, while the AT prespectrum setup draft proposes a distinct MO-only ID `def-real-universal-thom-prespectrum`. Do not leave both definitions in separate pages. Recommended integration: move the existing combined item ID and its DT-19 consumer edge to the AT A page, expand its proof there using the AT setup draft’s fixed-coordinate construction for MO, and include the analogous already-published oriented Grassmannian construction for MSO because DT-19’s rational oriented branch uses it. Remove the DT-19 duplicate item from its A-page inventory; retain its consumers unchanged against the single moved item ID. This keeps the actual pullback maps, spaces, and structure maps used in the detection proof identical to those used by the collapse/PT consumers. No PT claim is moved into AT.

The draft integration does not prove the smooth Pontryagin–Thom bijection or collapse evaluation theorem; those remain the DT-19 downstream proof obligations. The reviewed placement assumption is AT support A/B at 548.5/548.6: after the published Thom quotient comparison on page 547 and the Chern/Pontryagin suppliers on AT page 366.039, and before DT-19 at 553. DT-19 alone receives the support-A page prerequisite edge for the moved shared definition. This document does not alter plan or manifest files.

## Complete A-page supplier inventory, dependency order, and merge map

The complete A-page inventory is 54 new local items plus the one existing
combined MO/MSO prespectrum item moved from DT-19. The 54 are: 14
Steenrod/Eilenberg–Mac Lane rows, the generic graded module-coalgebra
freeness theorem, three stable Thom-cohomology rows, seven odd-primary rows,
two finite-range comparison rows, eleven rational-Hurewicz rows, and the
sixteen integration-core rows. The item IDs already present in supplier
drafts are retained verbatim. IDs for supplier sections that had only
numbered headings are provisional slugs below. This inventory maps every
supplier-draft row to a retained item, a named integration item, or an
explicitly unused alternative.

The cross-branch order is: (a) the lifted BSO CW helper; (b) the moved shared
prespectrum definition, plus the Steenrod algebra and generic freeness
supplier branches; (c) stable Thom cohomology and the mod-two EM calculation;
(d) the odd-primary, finite-range, and rational branches, each in its listed
internal order; (e) the integration-core items in order, which consume those
branches. The rational branch is retained because DT-19's rational oriented
claims consume its final theorem. Within each branch, the following list is
the dependency order.

### Shared prespectrum and its setup-draft rows

- Retain `lem-oriented-grassmannian-has-two-lifted-schubert-cells` as the
  prerequisite proved in the shared-prespectrum section above. It is also the
  CW sublemma used by the full odd-primary item 3; it does not replace that
  ring-calculation item.
- Move `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` to
  the AT A page as the sole combined MO/MSO definition. The MO-only
  `def-real-universal-thom-prespectrum` from the setup draft is merged into
  this same item ID. The setup draft's
  `lem-fixed-coordinate-stabilization-of-universal-real-bundles`,
  `lem-pullback-bundle-maps-induce-based-thom-maps`, and
  `lem-universal-thom-spaces-are-well-pointed-cw-spaces` are proof components
  of the moved definition, not separate competing prespectrum definitions.
  The same item proves the oriented coordinate map and pullback structure
  maps as above.
- Retain `def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum`,
  followed by `lem-stable-thom-cohomology-is-degreewise-eventually-constant`,
  then `lem-stable-squares-on-universal-thom-classes`. These are three
  distinct items. The optional elementary lim¹ calculation at the end of
  setup §5 is intentionally not an item: this chain never identifies the
  inverse-limit invariant with represented spectrum cohomology and invokes
  no Milnor exact sequence.

### Steenrod algebra and strict Eilenberg–Mac Lane branch: 14 items

Retain the following exact IDs from the Steenrod–Eilenberg–Mac Lane draft,
in this dependency order:

1. `def-mod-two-square-algebra-admissible-sequences-and-excess`.
2. `lem-adem-reduction-spans-by-admissible-composites`.
3. `lem-admissible-square-action-has-a-distinct-leading-monomial`.
4. `thm-admissible-composites-present-the-mod-two-square-algebra`.
5. `lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range`.
6. `lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs`.
7. `lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space`.
8. `lem-steenrod-squares-commute-with-relative-cohomology-connectors`.
9. `lem-relative-lifts-produce-cohomological-transgressions`.
10. `lem-fundamental-path-fibration-class-has-the-normalized-relative-lift`.
11. `lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism`.
12. `thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system`.
13. `prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces`.
14. `lem-metastable-cohomology-of-eilenberg-maclane-spaces`.

Items 1–5 supply the operation algebra, spanning/independence, and universal
operation test. Items 6–7 supply the path-loop inputs and marked K(F₂,1)
base. Items 8–12 prove connector, lift, transgression, comparison, and Borel
steps used by item 13. Item 14 is the exact strict range used in the finite
detector. No integral/mod-two identification is imported.

### Generic freeness theorem

Retain `thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`
from the Hopf-freeness draft. Its local proof includes the degree-preserving
section, diagonal action verification, endpoint terms, finite largest-degree
kernel argument, and freeness conclusion. It is generic and is distinct from
the Thom-specific application, integration-core item 7 below.

### Stable Thom cohomology branch: three items

Retain the three setup-draft IDs in the shared-prespectrum list above, in
order: degreewise cohomology definition; eventual-constancy/isomorphism to
finite-rank coordinates; componentwise stable Sq action. They depend on the
moved combined prespectrum definition and the published Thom, BO, and
Steenrod-suspension interfaces. The optional lim¹ observation is intentionally
unused for the reason stated above.

### Odd-primary and integral coefficient branch: seven items

Retain the seven numbered claims in the odd-primary draft as distinct local
items, in the exact order below. These are needed for the all-prime integral
comparison, not just the mod-two calculation. The BSO CW helper is a
prerequisite of item 3 and is listed separately above.

1. Provisional `lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants`, from odd-primary item 1. It proves the coefficient upgrade and orientation-local-system anti-invariant description.
2. Provisional `lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q`, from item 2. It proves integral homological finite type and rational/odd-field acyclicity of K(F₂,q).
3. Provisional `thm-bo-bso-cohomology-away-from-two`, from item 3. It includes the BSO CW prerequisite and proves the full BO/BSO ring calculation; the standalone helper alone does not replace this result. Its Chern/Pontryagin suppliers require the AT-20 page before the support A page.
4. Provisional `thm-unoriented-thom-cohomology-away-from-two-below-2r`, from item 4. It proves the twisted MO calculation and states the even-rank degree-2r class explicitly.
5. Provisional `thm-integral-finite-generation-of-mo-and-mso-homology`, from item 5. Its locally proved Thom filtration gives finite generation of MO(r) and MSO(r) homology.
6. Provisional `lem-finite-products-and-comparison-cones-have-finite-type`, from item 6. It proves finite generation for the target product and integral chain cone.
7. Provisional `thm-finite-generation-cohomological-uct-gives-integral-cone-comparison`, from item 7. It is the selected all-prime UCT route and proves homology isomorphisms below D and surjectivity at D.

The selected route uses all seven items. It does not claim the odd-primary
Thom vanishing at the endpoint 2r.

### Finite-range homology-to-homotopy branch: two items

Retain two distinct local theorems from the finite-range draft:

1. Provisional `thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison`, the mapping-cylinder/relative-Hurewicz theorem for CW source and target.
2. Provisional `cor-finite-range-comparison-for-arbitrary-target`, the relative CW-approximation extension for an arbitrary path-connected simply connected target.

Section 9 explicitly uses the second item for P_r, then the first at
N=2r−1. The product-target homotopy-coordinate argument is merged into
integration-core items 9 and 12; the conditional detector application in
the finite-range draft is merged into core items 9–12. The cofinal-tail
injection argument is merged into core items 13–14.

The finite-range draft's Lemmas A, B, and C are conditional alternatives,
not additional items on this route: A is superseded by the odd-primary
finite-generation/cohomological-UCT item 7; B loses one extra degree and
would not reach π_{r+n} at r≥n+2; C requires an unproved bounded exponent for
relative cone homology. Its independent field-duality argument is not needed
for integral recovery because the selected cone-UCT route uses the
cohomological UCT surjection onto Hom directly.

### Rational Hurewicz branch for DT-19: eleven items

Retain every local item in the rational-Hurewicz draft, in its exact
supplier-first order. This branch is part of the approved A pair because
DT-19's rational oriented-bordism upper bound consumes its final theorem.

1. `lem-rationalization-is-exact-and-commutes-with-singular-homology`.
2. `def-weak-join-classifying-model-for-a-discrete-group`.
3. `lem-weak-join-classifying-model-is-a-cw-k-g-one`.
4. `lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic`.
5. `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy`.
6. `cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range`.
7. `lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison` (the source draft's row 6a, placed here before the sphere calculation that consumes it).
8. `lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree`.
9. `lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres`.
10. `lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms`.
11. `thm-rational-hurewicz-for-highly-connected-cw-complexes`.

Rows 1–6 establish rational localization, torsion K(T,n) acyclicity and
first-nonzero-degree comparison. Row 7 supplies the local K(Z,n) computation
used by row 8. Rows 8–10 prove the sphere, wedge, and map-comparison inputs;
row 11 is the final supplier consumed by DT-19. These proofs must remain
in the AT A page even though they are a separate branch from mod-two Thom
detection. The rational source draft explicitly says its new rows require
independent mathematical review before incorporation/readiness; retain that
review status and do not treat this integration document as such approval.

### Fourteen-item integration core

Retain the following core items, in this order. Items 1–14 are the local
bridge from the supplier branches to stable MO homotopy detection; all are
proved above in this integration draft.

1. `lem-oriented-grassmannian-has-two-lifted-schubert-cells` (also the CW sublemma of odd-primary item 3; the full ring calculation item 3 remains separately listed).
2. `lem-external-evaluation-detects-tensor-square-operations`.
3. `thm-admissible-square-algebra-is-a-connected-bialgebra`.
4. `def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology`.
5. `lem-stable-thom-cohomology-is-a-square-module-coalgebra`.
6. `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit`.
7. `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`.
8. `lem-universal-real-thom-spaces-are-r-minus-one-connected`.
9. `def-finite-thom-classifying-detector-map`.
10. `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`.
11. `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1`.
12. `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`.
13. `lem-stable-thom-detector-coordinates-commute-with-suspension`.
14. `thm-stable-unoriented-thom-homotopy-is-injectively-detected`.

Core item 3 consumes Steenrod items 1–4 and the tensor test in item 2.
Items 4–7 consume stable-cohomology items, the Hopf theorem, and unit
injectivity. Items 9–10 consume strict EM item 14; item 11 consumes odd
items 2, 4–7; item 12 consumes both finite-range items; items 13–14 consume
the prespectrum stable-coordinate and stable-homotopy interfaces. The
Pontryagin–Thom and collapse-evaluation translation remains downstream in
DT-19, as stated in §11.

Every supplier row from the six source drafts is therefore either retained
as its own A item above, merged into the moved shared prespectrum definition,
merged into a named integration-core item, or excluded with an explicit
reason. No proof result is left as an unregistered premise.

## B-page example inventory

The B companion is a leaf page. Its page-level `requires` contains only the
A companion `thom-spectra-and-unoriented-bordism-detection`; it has no
outgoing page consumers. Each example below has direct item dependencies
only on A-page items or items in that A page's published prerequisite
closure. Every direct published dependency is in the closure supplied by
page 547, `thom-spaces-normal-data-and-collapse-maps`. No example depends on
another B-page example.

### `ex-low-degree-admissible-steenrod-monomials`

**A-page item dependencies:**
`lem-adem-reduction-spans-by-admissible-composites` and
`thm-admissible-composites-present-the-mod-two-square-algebra`.

**Statement.** Assume AC. In degrees 0 through 4, the admissible bases are

    degree 0: 1
    degree 1: Sq¹
    degree 2: Sq²
    degree 3: Sq³, Sq²Sq¹
    degree 4: Sq⁴, Sq³Sq¹.

For comparison, the Adem relations give Sq¹Sq¹=0, Sq¹Sq²=Sq³, and
Sq²Sq²=Sq³Sq¹.

**Proof sketch.** List the positive sequences of each total degree and retain
those satisfying i_j≥2i_{j+1}; this gives exactly the displayed rows.
The Adem-reduction item shows every other word reduces to an admissible
combination. The basis theorem proves the listed words are independent, so
the table is a basis calculation rather than a dimension guess. Substitution
in the displayed Adem relation gives the three sample reductions.

### `ex-strict-metastable-eilenberg-maclane-range`

**A-page item dependencies:**
`prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces`,
`lem-metastable-cohomology-of-eilenberg-maclane-spaces`, and
`thm-admissible-composites-present-the-mod-two-square-algebra`.

**Statement.** Assume AC. For K=K(F₂,3), the strict range identifies

    H³(K;F₂)=F₂{ι₃},
    H⁴(K;F₂)=F₂{Sq¹ι₃},
    H⁵(K;F₂)=F₂{Sq²ι₃}.

These are the operation degrees i=0,1,2, all satisfying i<3. At the
excluded endpoint, the full polynomial presentation gives
H⁶(K;F₂)=F₂{ι₃²,Sq²Sq¹ι₃}; this endpoint calculation uses the full
polynomial theorem and is not part of the strict-range statement.

**Proof sketch.** The metastable theorem identifies each listed group with
A^i by evaluation on ι₃. The low-degree admissible basis gives A⁰={1},
A¹={Sq¹}, A²={Sq²}; the normalized universal class and naturality identify
the three images. The strict inequality excludes i=3, so the example does
not extend the commissioned comparison range.

### `ex-universal-thom-class-steenrod-operation`

**A-page item dependencies:** `lem-stable-squares-on-universal-thom-classes`.

**Statement.** In stable mod-two Thom cohomology,

    Sq³(U)=w₃U.

At rank 3 its component is Sq³(u₃)=w₃(γ₃)u₃. At rank 2 the component is
zero, since w₃(γ₂)=0 and Sq³(u₂)=0 by instability.

**Proof sketch.** The stable-square supplier identifies every component of
Sq^i(U) with w_i(γ_r)u_r and proves compatibility under the inverse-system
maps. The rank bound makes w₃(γ₂)=0; instability kills Sq³ on the degree-2
class u₂. At rank 3 the top-square formula agrees with the Thom identity.

### `ex-rational-hurewicz-range-for-the-four-sphere`

**Direct item dependencies (A page and its published prerequisite closure):**
`thm-rational-hurewicz-for-highly-connected-cw-complexes` and
`lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree`,
`lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell`, and
`cor-homology-of-spheres`.

**Statement.** The rational Hurewicz map for S⁴ is an isomorphism in degrees
4, 5, and 6:

    π₄(S⁴)⊗Q ≅ H₄(S⁴;Q) ≅ Q,
    π₅(S⁴)⊗Q = H₅(S⁴;Q) = 0,
    π₆(S⁴)⊗Q = H₆(S⁴;Q) = 0.

**Proof sketch.** Give S⁴ its standard based CW structure with one 0-cell
and one 4-cell. For each j=1,2,3, a based cubical representative
f:Iʲ→S⁴ has boundary mapped to the 0-cell. Apply
`lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell` to the finite
one-cell attachment (S⁴,*), with n=j<4. It deforms f into the 0-cell while
fixing its boundary, so π₁(S⁴)=π₂(S⁴)=π₃(S⁴)=0. This writes out the
one-cell connectivity argument using the published cell-pushing supplier;
the stronger `lem-high-relative-cells-do-not-change-lower-homotopy` is also
available in page 547's published prerequisite closure but is not needed as a
direct dependency. `cor-homology-of-spheres` with coefficient group Q gives
the displayed rational homology groups directly.
Now apply the rational Hurewicz theorem with c=4; its range is c≤i≤2c−2,
namely 4≤i≤6. The rational sphere lemma computes the three homotopy groups.
The degree-4 map is the first-nonzero-degree Hurewicz isomorphism; in degrees
5 and 6 both sides vanish.

These examples are standalone illustrations only. The A theorems carry the
full general statements and proofs; the examples introduce no new supplier
edge and no additional page prerequisite.
