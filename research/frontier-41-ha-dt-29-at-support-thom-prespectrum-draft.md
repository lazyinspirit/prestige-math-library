# Independent AT supplier draft: real universal Thom prespectrum

This is a research draft for the owner-approved supporting Algebraic Topology pair. It makes no canonical item, manifest, readiness, or run-control change. All statements below precede the DT-19 consumers. Assume AC as required by the published bundle and Thom suppliers. Coefficients are F₂ unless specified. The symbol TO denotes the **prespectrum** constructed below. In the library's existing terminology a spectrum is an Omega-prespectrum; the draft does not assert that TO is one or silently supply a spectrification.

## Inspected local suppliers and external source

The following published files were read directly, including their statements and proofs: `def-stiefel-space-grassmannian-and-tautological-bundle`; `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`; `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`; `prop-thom-space-of-zero-and-trivial-bundles`; `thm-thom-isomorphism-for-oriented-vector-bundles`; `thm-naturality-and-uniqueness-of-thom-classes`; `thm-external-product-and-whitney-sum-formulas-for-thom-classes`; `thm-mod-two-cohomology-of-bo-n`; `thm-thom-identity-for-stiefel-whitney-classes`; `def-compactly-generated-conventions-for-based-homotopy`; `def-compactly-generated-based-space-and-well-pointed-object`; `def-smash-product-of-based-spaces`; `def-sequential-prespectrum-spectrum-and-adjoint-structure-maps`; `def-suspension-prespectrum-and-sphere-prespectrum`; `prop-steenrod-square-normalization-instability-and-top-square`; `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`; `prop-relative-cw-inclusions-are-cofibrations`; and `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`. The last is a published frontier-38 supplier: its home is irrelevant to logical reuse. None of these is the in-run DT-19 definition.

Authoritative full text actually downloaded and inspected: J. P. May, *A Concise Course in Algebraic Topology*, https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf. Printed pp.194–196 (PDF pp.202–204) give the Thom-space model, functoriality, Thom class, and stabilization; printed p.220 (PDF p.228) constructs TO from universal bundles; printed pp.230–233 (PDF pp.238–241) discuss the spectrum comparison. These later pages contain a conceptual sketch rather than a self-contained proof of stable foundations. Printed p.233 explicitly warns that naive inverse-limit prespectrum cohomology is inappropriate in general because of lim¹. The local statements below prove eventual constancy for this particular system and do not infer an unproved general spectrum theorem from that sketch. The existing Schubert supplier gives characteristic disks with continuously supplied orthonormal frames in proof steps 1.1–2.1; that exact feature is used in the CW justification.

## 1. Proposed lemma: fixed-coordinate universal stabilization

Suggested ID: `lem-fixed-coordinate-stabilization-of-universal-real-bundles`.
Dependencies: the published Stiefel/Grassmannian definition and Schubert CW theorem.

Let R∞ be the union of the standard finite coordinate spaces, let e₁ be its first unit vector, and let J(eᵢ)=eᵢ₊₁. For n≥0 put Bₙ=Grₙ(R∞), with its published weak topology, and define

sₙ:Bₙ→Bₙ₊₁,  sₙ(W)=R e₁ ⊕ J(W).

This is a continuous map. There is a specified isometric bundle isomorphism

ε¹ ⊕ γₙ → sₙ*γₙ₊₁,
(W,a,v) ↦ (W,a e₁+J(v)).

The new trivial coordinate is first. For n=0 this means the map from the point B₀ to the line R e₁ and the usual trivial rank-one bundle over that point.

Proof. At finite stage Grₙ(Rᴺ), shifting and adjoining e₁ gives a map to Grₙ₊₁(Rᴺ⁺¹). Apply it to orthonormal frames: (v₁,…,vₙ)↦(e₁,Jv₁,…,Jvₙ). This continuous map is equivariant for the block inclusion O(n)→O(n+1), hence descends continuously by the quotient definition of Grassmannians. The finite-stage maps agree on overlaps. The weak direct-limit topology gives continuity of the map on the union by the defining map-out test. The displayed bundle formula is continuous in every graph chart and at every finite stage; orthogonality gives |a e₁+Jv|²=a²+|v|². Its inverse reads a=⟨z,e₁⟩ and v=J⁻¹(z-a e₁), with the same local and finite-stage continuity. It is linear and bijective on each fiber, proving the assertion. No equality of the total spaces of the pullback and universal bundle is asserted. ∎

## 2. Proposed lemma: Thom functoriality for the actual pullback map

Suggested ID: `lem-pullback-bundle-maps-induce-based-thom-maps`.
Dependencies: the published metric Thom definition, bundle pullback definition, CGWH quotient convention, and quotient universal property. Its normalized-class clause uses published Thom naturality and the relative/reduced quotient lemma.

For a continuous map f:X→B and a metric real bundle E→B, equip f*E with the pullback metric. The canonical bundle map (x,v)↦v maps disks to disks and spheres to spheres and induces a based continuous map

T(f*E)→T(E).

Composition of pullbacks gives composition of these Thom maps, under the canonical pullback-bundle isomorphisms. This is a map, generally not a homeomorphism. It pulls the normalized Thom class back to that of f*E when the Thom suppliers' hypotheses hold.

Proof. The map is continuous by the pullback topology and preserves the norm exactly. Its disk restriction is a continuous map of disk/sphere pairs. Collapsing the sphere gives the asserted map by the quotient universal property, also after kification. In rank zero the map is f₊:X₊→B₊, using the added basepoint, and the same composition formula holds. In positive rank equality on every disk vector and the basepoint proves the composition formula. Normalized-class naturality is precisely the published pair-map theorem; the natural quotient isomorphism transfers it to reduced cohomology. ∎

## 3. Proposed lemma: suspension, CW convention, and normalization

Suggested ID: `lem-universal-thom-spaces-are-well-pointed-cw-spaces`.
Dependencies: metric Thom definition; Schubert CW theorem; CW definition; CGWH conventions; compact-image finite-CW-subcomplex corollary; relative-CW cofibration proposition; smash definition and quotient-product supplier used by that definition; published external-product Thom-class theorem; relative/reduced quotient lemma; published suspension/Steenrod proposition. The Hausdorff and compact-generation checks below additionally use `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, and `def-compactly-generated-conventions-for-based-homotopy`; the quotient-product supplier is exactly `lem-compact-test-exponential-law-and-products-of-quotients`.

Put Tₙ=T(γₙ), with its inherited Euclidean metric. Tₙ is a based CW space and hence CGWH, and its basepoint inclusion is a cofibration. With the new coordinate first there is a specified based homeomorphism

hₙ:S¹∧Tₙ→T(ε¹⊕γₙ).

It carries the mod-two cohomology suspension of uₙ to the normalized Thom class u_(ε¹⊕γₙ). More precisely hₙ* u_(ε¹⊕γₙ)=σ(uₙ). Under the base-module Thom isomorphism the analogous identity holds for every class a∈H*(Bₙ;F₂). T₀=S⁰ and u₀ is the reduced class corresponding to 1∈H⁰(point;F₂).

Proof of the homeomorphism. Use S¹=D¹/∂D¹. The smash source is the kified quotient of D¹×D(γₙ) by (∂D¹×D(γₙ))∪(D¹×S(γₙ)); this follows from the published quotient-product map-out property. On the product disk write z=(a,v), m=max(|a|,|v|), r=√(a²+|v|²). The map z↦(m/r)z for z≠0, and 0↦0, sends this maximum-norm disk/boundary pair homeomorphically to the Euclidean disk/sphere pair. Its inverse uses r/m. Both ratios are bounded between positive constants at zero, so the maps are continuous there; elsewhere they are continuous in bundle charts. They preserve the base and boundary and descend to mutually inverse based maps. The coordinate is a first, v second. For n=0 the product pair is D¹×B₀ with its endpoint boundary and the construction is the usual S¹ identification.

Proof of the CW assertion. The Schubert theorem supplies each characteristic disk with an orthonormal frame of the pullback of γₙ (its frame-valued characteristic map is in proof steps 1.1–2.1). Thus above a d-dimensional Schubert characteristic disk the disk/sphere bundle pair is explicitly (Dᵈ×Dⁿ,Dᵈ×Sⁿ⁻¹). Its boundary in the Thom attaching construction is (∂Dᵈ×Dⁿ)∪(Dᵈ×Sⁿ⁻¹). This is the boundary of a (d+n)-ball: the radial maximum-to-Euclidean map, as above with two finite-dimensional disk factors, proves that identification. The sphere part maps to the Thom basepoint and the base-boundary part maps to earlier Thom cells since the Schubert boundary maps to smaller-dimensional base cells. The interiors map homeomorphically onto the open disk bundle above the open Schubert cell. Attach these cells in order of d, beginning with a basepoint. At finite Grassmannian stages the resulting quotient maps are homeomorphisms because they are continuous bijections from compact spaces to Hausdorff disk/sphere quotients. The latter are Hausdorff since the sphere is closed in the compact Hausdorff disk bundle. Stage inclusions keep the characteristic maps unchanged. The infinite topology agrees with the CW topology as follows. Any compact Hausdorff test map K→D(γₙ) projects to a compact image in Bₙ, hence lies over a finite CW subcomplex by the published compact-image corollary. By the Schubert theorem that subcomplex is contained in a finite Grassmannian stage. The test map therefore factors continuously through the disk bundle at that stage (which has the subspace topology). A subset of D(γₙ) whose intersections with all finite-stage disk bundles are closed is consequently k-closed: every compact test factors through one stage. The converse follows by continuity of stage inclusions. Thus the kified disk bundle has exactly the final closed-set test for the finite disk bundles. Passing to the based quotient preserves this final map-out test: a map on the Thom quotient is continuous exactly when its pullback to the disk bundle is continuous and constant on the sphere, exactly when this is true at every finite stage. Each finite stage already has the Thom-cell CW quotient described above, and the stage inclusions are subcomplex inclusions. Their final topology is the CW weak topology. Closure finiteness follows because a characteristic disk's base boundary meets finitely many earlier base cells and its fiber has finite rank. Rank zero gives B₀₊=S⁰ directly. To verify the separation and compact-generation hypotheses rather than infer them from the finite stages alone, apply `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex` to the supplied characteristic balls and attaching maps, beginning with the basepoint. Their dimensions are d+n, their boundary maps land in lower dimensions, and the preceding Schubert closure argument gives finite boundary support. That supplier proves the weak attachment space is Hausdorff; the topology identification just established identifies it with Tₙ. It also supplies the continuous compact characteristic-ball maps. If a subset of Tₙ is k-closed, its inverse image in every such compact Hausdorff ball is closed; the weak attachment test therefore makes the subset closed in Tₙ. Conversely every closed subset is k-closed by continuity of the compact tests. Thus Tₙ is compactly generated. A compact Hausdorff test image in its Hausdorff topology is compact and hence closed by `thm-compact-subset-of-a-hausdorff-space-is-closed`, so Tₙ is weak Hausdorff as well. This verifies CGWH directly, without assuming that a weak union of compact Hausdorff stages must be Hausdorff. The basepoint is a vertex and hence a CW subcomplex; the published `prop-relative-cw-inclusions-are-cofibrations` supplies the full HEP with no dimension bound, proving well-pointedness. This uses an inspected exact supplier rather than an unproved NDR-to-cofibration implication.

Finally the external-product Thom theorem identifies the normalized ordered fiber class with the first-coordinate degree-one generator times uₙ. The cohomology suspension is that product with the degree-one sphere generator: the cone-pair connector computes precisely this generator on the single suspension coordinate, and the relative product naturality carries the calculation over the base. Hence hₙ*Φ_(ε⊕γ)(a)=σΦ_γ(a), including a=1. The quotient lemma identifies the relative calculation with reduced cohomology. This proves the claimed normalization and module identity without exchanging coordinate blocks. ∎

## 4. Proposed definition and separate justification: universal Thom prespectrum

Suggested ID: `def-real-universal-thom-prespectrum`.
Dependencies: preceding lemmas; published sequential prespectrum definition.

Define TOₙ=Tₙ and

αₙ:S¹∧Tₙ --hₙ→ T(ε¹⊕γₙ) --T(bundle isometry)→ T(sₙ*γₙ₊₁) --T(pullback map)→ Tₙ₊₁.

The last arrow is the actual map of lemma 2, not an identification with its target. The preceding lemma proves that these are well-pointed based CGWH spaces, and each composite is based continuous, so this definition satisfies every hypothesis of the published sequential prespectrum definition. The adjoint is x↦(t↦αₙ(t∧x)); the existing loop-suspension adjunction supplies its continuity. The rank-zero structure map selects the Thom fiber over R e₁. Iteration inserts the newest coordinate first; associativity of smash gives Sᵏ∧Tₙ with coordinates ordered from newest to oldest, then the old bundle coordinates. No assertion of an Omega condition, ring-prespectrum coherence, or spectrification is made here.

## 5. Proposed definition/lemma: degreewise stable cohomology and exact variance

Suggested IDs: `def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum` and `lem-stable-thom-cohomology-is-degreewise-eventually-constant`.
Dependencies: preceding construction and normalization; published Thom isomorphism, BO(n) computation, Stiefel–Whitney naturality/Whitney formula, Steenrod suspension proposition.

For q∈Z define Aₙ(q)=H̃ⁿ⁺q(Tₙ;F₂). The transition map goes **backwards**:

ρₙ(q):Aₙ₊₁(q) --αₙ*→ H̃ⁿ⁺q⁺¹(S¹∧Tₙ;F₂) --σ⁻¹→ Aₙ(q).

Define Ĥᵠ(TO;F₂)=limₙ Aₙ(q), i.e. compatible tuples (xₙ) with ρₙxₙ₊₁=xₙ. This specifically named prespectrum invariant is not being defined by a forward colimit. Its interpretation as represented spectrum cohomology would require a separately established comparison theorem.

For every q≥0, the Thom isomorphisms identify this system with

F₂[w₁,…,wₙ₊₁]ᵠ → F₂[w₁,…,wₙ]ᵠ,
wᵢ↦wᵢ (i≤n), wₙ₊₁↦0.

For q<0 all Aₙ(q) vanish. For q≥0 the maps are isomorphisms as soon as n≥q. Consequently, as a graded vector space and as a module over the stable characteristic polynomial algebra,

Ĥ*(TO;F₂)=F₂[w₁,w₂,…]·U, |wᵢ|=i, |U|=0,

where U=(uₙ). This is a Thom-module statement; it does not identify the reduced cup rings of the spaces Tₙ or assert a ring structure induced by those cup products. Degree q contains only polynomials homogeneous of weight q, hence is finite-dimensional.

Proof. Write Φₙ(a)=a uₙ. Pullback naturality and the normalization in lemma 3 give αₙ*Φₙ₊₁(a)=σΦₙ(sₙ*a). Thus Φₙ⁻¹ρₙΦₙ₊₁=sₙ*, checking every domain and degree. The bundle isometry gives sₙ*γₙ₊₁=ε¹⊕γₙ; Whitney and naturality imply sₙ*wᵢ=wᵢ for i≤n and zero above n. The published BO(n) polynomial theorem then gives exactly the displayed map. Negative base cohomology vanishes. In weight q no variable of weight greater than q occurs, so n≥q makes the transition bijective. A compatible tuple is therefore uniquely determined by one value in the constant tail, and every such value extends uniquely forward through inverse isomorphisms and backward through the specified maps. Homogeneous weight-q polynomials in infinitely many generators are exactly that tail. There are finitely many partitions of q, since each exponent satisfies 0≤aᵢ≤q/i and only i≤q occurs, proving finiteness. U is compatible by the normalization identity. ∎

If a lim¹ vanishing statement is needed, it has a direct local proof. For any eventually bijective tower Vₙ with maps rₙ, the map d:∏Vₙ→∏Vₙ, d(x)ₙ=xₙ-rₙxₙ₊₁, is onto. Given y, choose x_N=0 in a bijective tail, recursively set xₙ₊₁=rₙ⁻¹(xₙ-yₙ) for n≥N, and set xₙ=yₙ+rₙxₙ₊₁ for n<N. These explicit recursions solve d(x)=y. Its cokernel, the usual elementary tower lim¹, is zero. This computation alone does not prove a Milnor exact sequence or spectrum comparison, which must be separately supplied if used.

## 6. Proposed lemma: stable square interface

Suggested ID: `lem-stable-squares-on-universal-thom-classes`.
Dependencies: preceding limit definition/computation; published squares naturality, square suspension, and Thom identity.

For i≥0 and x=(xₙ)∈Ĥᵠ, define (Sqⁱx)ₙ=Sqⁱ(xₙ). Then Sqⁱx is a compatible tuple of degree q+i and defines a linear operation Ĥᵠ→Ĥᵠ⁺ⁱ. In particular

Sqⁱ(U)=wᵢU.

Proof. Naturality commutes squares with αₙ*, and the published square-suspension theorem commutes them with σ and its inverse. Thus ρₙ(q+i)Sqⁱ=Sqⁱρₙ(q), proving compatibility. The Thom identity at rank n gives Sqⁱuₙ=wᵢ(γₙ)uₙ, with both sides zero for i>n. These are precisely the components of wᵢU under the preceding polynomial description. For n=0, Sq⁰u₀=u₀ and higher squares vanish. No unstable top-square or degree-zero instability is asserted for the stable class U: its component uₙ has degree n, and those unstable bounds depend on n. Iterated words of squares and their already-proved Adem relations therefore act on this limit module. This does not prove its freeness as a Steenrod module, compute the Steenrod algebra's basis, or prove Hurewicz injectivity. Those remain distinct supplier obligations. ∎

## Integration cautions

The setup draft is independent of the DT-19 definition and of any detection theorem. Its topology argument uses the explicitly inspected compact-image finite-subcomplex and relative-CW HEP suppliers, so no NDR-to-cofibration obligation remains. Do not use May's pp.230–233 spectrum splitting as a proved supplier: it requires a stable category, represented ordinary cohomology, Whitehead/Hurewicz comparisons, integral-versus-mod-two homology control, and local finiteness of the wedge/product comparison. This draft provides the precisely typed universal Thom prespectrum and its eventually constant mod-two cohomology interface; it does not close those additional detection obligations.
