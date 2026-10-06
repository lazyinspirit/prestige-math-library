---
id: def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
kind: definition
title: "The Thom prespectrum of the universal real and oriented bundles"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - prop-loop-suspension-adjunction-on-based-homotopy-classes
  - lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - def-disk-sphere-and-thom-space-of-a-metric-vector-bundle
  - prop-thom-space-of-zero-and-trivial-bundles
  - prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
  - thm-oriented-real-vector-bundles-are-classified-by-bso
  - lem-stabilizing-a-normal-bundle-suspends-its-thom-space
  - prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition
  - def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - def-stable-homotopy-groups-of-a-sequential-prespectrum
  - def-smash-product-of-based-spaces
  - def-axiom-of-choice
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-homotopy-invariance-of-vector-bundle-pullback
  - thm-gram-schmidt-orthonormalisation
  - prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms
  - lem-oriented-grassmannian-has-two-lifted-schubert-cells
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex
  - prop-relative-cw-inclusions-are-cofibrations
  - cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-compactly-generated-conventions-for-based-homotopy
  - def-compactly-generated-based-space-and-well-pointed-object
  - lem-kification-compact-tests-and-finite-constructions
  - thm-quotient-universal-property
dependency_level: 1
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Proposition 1.17, printed pp.33–34; characteristic disks and CW structure, independently of the faulty rotation wording in the published local supplier."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 10, printed pp. 86-91: spectra, prespectra, Thom spectra of the universal bundles, and the Pontryagin-Thom theorem"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 18, the universal Thom spaces $MSO(k)$ and $MO(k)$ and the stabilization of their structure maps, printed pp. 205-218"
verification:
  precheck: n/a
---

## Definition

Assume AC, as inherited from the published bundle-classification suppliers. Let $\gamma_r\to B\mathrm O(r)$ and $\gamma_r^{+}\to B\mathrm{SO}(r)$ be the universal metric rank-$r$ bundles in the published Grassmannian models. For $r\ge0$ set $M\mathrm O_r=\mathrm{Th}(\gamma_r)$ and $M\mathrm{SO}_r=\mathrm{Th}(\gamma_r^{+})$, with the based rank-zero convention of the published Thom-space definition. Let $J(x_1,x_2,\ldots)=(0,x_1,x_2,\ldots)$. Fix $\iota_r(W)=\mathbb R e_1\oplus J(W)$ and its oriented version $(W,o)\mapsto(\mathbb R e_1\oplus J(W),e_1\wedge J_*o)$, the Grassmannian stabilization $\iota_r$ which adds the specified trivial coordinate line, with its fiberwise isometric identification $\varepsilon^1\oplus\gamma_r\cong\iota_r^*\gamma_{r+1}$; use $\varepsilon^1_+\oplus\gamma_r^+$ in the same first-coordinate order for its orientation-preserving counterpart. Define the structure map by the composite $S^1\wedge M\mathrm O_r\cong\mathrm{Th}(\varepsilon^1\oplus\gamma_r)\cong\mathrm{Th}(\iota_r^*\gamma_{r+1})\longrightarrow\mathrm{Th}(\gamma_{r+1})=M\mathrm O_{r+1}$, where the final arrow is induced by the pullback bundle projection covering $\iota_r$; the sphere coordinate is placed first as in the published prespectrum convention. The analogous maps define $M\mathrm{SO}$. Write $T_r=M\mathrm O_r$, $T_r^+=M\mathrm{SO}_r$, $s_r=\iota_r$ and $s_r^+=\iota_r^+$, and denote the structure maps by $\alpha_r$ and $\alpha_r^+$. These supplied spaces and structure maps are the two sequential Thom prespectra used here. Their stable homotopy groups are $\pi_n(M\mathrm O)=\operatorname{colim}_{r}\pi_{n+r}(M\mathrm O_r)$ and $\pi_n(M\mathrm{SO})=\operatorname{colim}_{r}\pi_{n+r}(M\mathrm{SO}_r)$, with transition maps given by suspension followed by the structure map. Only these two prespectra are used; no general Thom-spectrum theory is developed here. For each fixed n, the displayed colimit is taken over a tail r≥r₀ with r+n≥1, exactly as in [[def-stable-homotopy-groups-of-a-sequential-prespectrum]].

Proof. At finite stage Grₙ(Rᴺ), shifting and adjoining e₁ gives a map to Grₙ₊₁(Rᴺ⁺¹). Apply it to orthonormal frames: (v₁,…,vₙ)↦(e₁,Jv₁,…,Jvₙ). This continuous map is equivariant for the block inclusion O(n)→O(n+1), hence descends continuously by the quotient definition of Grassmannians. The finite-stage maps agree on overlaps. The weak direct-limit topology gives continuity of the map on the union by the defining map-out test. The displayed bundle formula is continuous in every graph chart and at every finite stage; orthogonality gives |a e₁+Jv|²=a²+|v|². Its inverse reads a=⟨z,e₁⟩ and v=J⁻¹(z-a e₁), with the same local and finite-stage continuity. It is linear and bijective on each fiber, proving the assertion. No equality of the total spaces of the pullback and universal bundle is asserted. ∎

Proof. The map is continuous by the pullback topology and preserves the norm exactly. Its disk restriction is a continuous map of disk/sphere pairs. Collapsing the sphere gives the asserted map by the quotient universal property, also after kification. In rank zero the map is f₊:X₊→B₊, using the added basepoint, and the same composition formula holds. In positive rank equality on every disk vector and the basepoint proves the composition formula. Normalized-class naturality is precisely the published pair-map theorem; the natural quotient isomorphism transfers it to reduced cohomology. ∎

Proof of the homeomorphism. Use S¹=D¹/∂D¹. The smash source is the kified quotient of D¹×D(γₙ) by (∂D¹×D(γₙ))∪(D¹×S(γₙ)); this follows from the published quotient-product map-out property. On the product disk write z=(a,v), m=max(|a|,|v|), r=√(a²+|v|²). The map z↦(m/r)z for z≠0, and 0↦0, sends this maximum-norm disk/boundary pair homeomorphically to the Euclidean disk/sphere pair. Its inverse uses r/m. Both ratios are bounded between positive constants at zero, so the maps are continuous there; elsewhere they are continuous in bundle charts. They preserve the base and boundary and descend to mutually inverse based maps. The coordinate is a first, v second. For n=0 the product pair is D¹×B₀ with its endpoint boundary and the construction is the usual S¹ identification.

Proof of the CW assertion. Use the Schubert characteristic disks, whose CW construction is also established in Hatcher, Vector Bundles & K-Theory, Proposition 1.17, printed pp.33–34. Over a characteristic disk, the pulled-back tautological bundle is trivial: contract the disk to its center and apply [[thm-homotopy-invariance-of-vector-bundle-pullback]] to this numerable finite-rank bundle over the compact Hausdorff disk. Apply [[thm-gram-schmidt-orthonormalisation]] to a trivializing frame; its recursive formulas are continuous since every denominator is positive. This gives a continuous orthonormal frame, independently of the rotation formula in the published Schubert proof. Thus above a d-dimensional Schubert characteristic disk the disk/sphere bundle pair is explicitly (Dᵈ×Dⁿ,Dᵈ×Sⁿ⁻¹). Its boundary in the Thom attaching construction is (∂Dᵈ×Dⁿ)∪(Dᵈ×Sⁿ⁻¹). This is the boundary of a (d+n)-ball: the radial maximum-to-Euclidean map, as above with two finite-dimensional disk factors, proves that identification. The sphere part maps to the Thom basepoint and the base-boundary part maps to earlier Thom cells since the Schubert boundary maps to smaller-dimensional base cells. The interiors map homeomorphically onto the open disk bundle above the open Schubert cell. Attach these cells in order of d, beginning with a basepoint. At finite Grassmannian stages the resulting quotient maps are homeomorphisms because they are continuous bijections from compact spaces to Hausdorff disk/sphere quotients. The latter are Hausdorff since the sphere is closed in the compact Hausdorff disk bundle. Stage inclusions keep the characteristic maps unchanged. The infinite topology agrees with the CW topology as follows. Any compact Hausdorff test map K→D(γₙ) projects to a compact image in Bₙ, hence lies over a finite CW subcomplex by the published compact-image corollary. By the Schubert theorem that subcomplex is contained in a finite Grassmannian stage. The test map therefore factors continuously through the disk bundle at that stage (which has the subspace topology). A subset of D(γₙ) whose intersections with all finite-stage disk bundles are closed is consequently k-closed: every compact test factors through one stage. The converse follows by continuity of stage inclusions. Thus the kified disk bundle has exactly the final closed-set test for the finite disk bundles. Passing to the based quotient preserves this final map-out test: a map on the Thom quotient is continuous exactly when its pullback to the disk bundle is continuous and constant on the sphere, exactly when this is true at every finite stage. Each finite stage already has the Thom-cell CW quotient described above, and the stage inclusions are subcomplex inclusions. Their final topology is the CW weak topology. Closure finiteness follows because a characteristic disk's base boundary meets finitely many earlier base cells and its fiber has finite rank. Rank zero gives B₀₊=S⁰ directly. To verify the separation and compact-generation hypotheses rather than infer them from the finite stages alone, apply `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex` to the supplied characteristic balls and attaching maps, beginning with the basepoint. Their dimensions are d+n, their boundary maps land in lower dimensions, and the preceding Schubert closure argument gives finite boundary support. That supplier proves the weak attachment space is Hausdorff; the topology identification just established identifies it with Tₙ. It also supplies the continuous compact characteristic-ball maps. If a subset of Tₙ is k-closed, its inverse image in every such compact Hausdorff ball is closed; the weak attachment test therefore makes the subset closed in Tₙ. Conversely every closed subset is k-closed by continuity of the compact tests. Thus Tₙ is compactly generated. A compact Hausdorff test image in its Hausdorff topology is compact and hence closed by `thm-compact-subset-of-a-hausdorff-space-is-closed`, so Tₙ is weak Hausdorff as well. This verifies CGWH directly, without assuming that a weak union of compact Hausdorff stages must be Hausdorff. The basepoint is a vertex and hence a CW subcomplex; the published `prop-relative-cw-inclusions-are-cofibrations` supplies the full HEP with no dimension bound, proving well-pointedness. This uses an inspected exact supplier rather than an unproved NDR-to-cofibration implication.

For the MO normalization take coefficients $R=\mathbb F_2$. Every fiber orientation stalk then has a unique nonzero generator, fixed by all transition automorphisms; these generators supply the canonical $\mathbb F_2$-orientation of every $\gamma_n$ and $\varepsilon^1\oplus\gamma_n$ ([[def-r-oriented-vector-bundle-and-orientation-local-system]]). The normalized classes $u_n$ and the maps $\Phi_{\gamma_n}$ consequently exist by [[thm-thom-isomorphism-for-oriented-vector-bundles]]; no integral orientation of $\gamma_n$ is asserted. For MSO use the supplied ordered real orientations, with integral coefficients or their images in a coefficient ring. With these orientations, [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]] identifies the normalized ordered fiber class with the first-coordinate degree-one generator times uₙ. The cohomology suspension is that product with the degree-one sphere generator: the cone-pair connector computes precisely this generator on the single suspension coordinate, and the relative product naturality carries the calculation over the base. Hence hₙ*Φ_(ε⊕γ)(a)=σΦ_γ(a), including a=1. [[lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology]] identifies the relative calculation with reduced cohomology. This proves the claimed normalization and module identity without exchanging coordinate blocks. ∎

The last arrow is the actual pullback-bundle Thom map constructed above. The preceding lemma proves that these are well-pointed based CGWH spaces, and each composite is based continuous, so this definition satisfies every hypothesis of the published sequential prespectrum definition. The adjoint is x↦(t↦αₙ(t∧x)); [[prop-loop-suspension-adjunction-on-based-homotopy-classes]] supplies its continuity. The rank-zero structure map selects the Thom fiber over R e₁. Iteration inserts the newest coordinate first; associativity of smash gives Sᵏ∧Tₙ with coordinates ordered from newest to oldest, then the old bundle coordinates. No assertion of an Omega condition, ring-prespectrum coherence, or spectrification is made here.

For n=0, s⁺_0 sends the point to the positively oriented line R e₁. These
maps are continuous: on every finite Stiefel stage the frame formula is

$$(v_1,\ldots,v_n)\longmapsto(e_1,Jv_1,\ldots,Jv_n).$$

It is equivariant for the block inclusion SO(n)→SO(n+1), A↦diag(1,A), so it
descends to the oriented Grassmannian quotient. The finite-stage maps agree
under coordinate inclusions; the weak direct-limit map-out test gives
continuity on BSO(n). This covers n=0 by the point map.

There is a specified orientation-preserving bundle isometry

$$\varepsilon^1_+\oplus\gamma_n^+\xrightarrow{\cong}(s_n^+)^*\gamma_{n+1}^+,\qquad(a,v)\longmapsto ae_1+Jv,$$

where ε¹_+ is the trivial line oriented by e₁ and W'=R e₁⊕J(W). The
orientation on the target is e₁∧J_*o, so the displayed fiber map preserves
the ordered sum orientation. In finite graph charts it and its inverse are
continuous; the inverse reads off the e₁-coordinate and applies J⁻¹ to the
orthogonal complement. The norm identity a²+||v||² proves it is an
isometry. At n=0 this is the specified positive-line identification over
the point.

The real prespectrum construction gives the first homeomorphism in the composite defining the oriented structure map:

$$\alpha_n^+:S^1\wedge T_n^+\xrightarrow{\cong}\operatorname{Th}(\varepsilon^1_+\oplus\gamma_n^+)\xrightarrow{\cong}\operatorname{Th}((s_n^+)^*\gamma_{n+1}^+)\longrightarrow T_{n+1}^+.$$

The middle arrow is the Thom map of the displayed bundle isometry. The last
arrow is induced by the actual pullback-bundle projection covering s⁺_n;
it is not an identification of the pullback Thom space with the universal
Thom space. It is based continuous because the bundle projection preserves
the norm and disk/sphere subspaces, then descends by the quotient
universal property. At n=0, the map is the canonical S¹≅Th(ε¹_+) over the
positive line, with T⁺_0=S⁰.

Over each d-cell of the
oriented Schubert CW model, the lifted characteristic disk has a continuous
oriented orthonormal frame for the pulled-back tautological bundle: disk
contraction and homotopy invariance trivialize that bundle, as in the real
construction above, and continuous Gram–Schmidt makes the frame orthonormal.
The sign of this frame relative to the supplied orientation is locally constant
on the connected disk; if negative, reverse its first vector. Rank zero
is treated separately below. In that frame its disk/sphere pair is
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
topology construction of the prespectrum with each base Schubert cell replaced by
each of its two oriented lifts. At rank zero, BSO(0) is a point and
T⁺_0=S⁰, so it is separately well-pointed CW.

Consequently every MSO level is a based well-pointed CGWH CW space and
every α⁺_n is a continuous based map; its adjoint is continuous by the
published loop-suspension adjunction. Together with the MO structure maps α_n, these data satisfy the published sequential-prespectrum
definition. Applying the published stable-homotopy-group definition gives
both colimits used by DT-19. ∎
