---
id: lem-signed-essential-product-annulus-decomposition
kind: lemma
title: "Signed essential separating-annulus decomposition"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-integral-sutured-floer-compactness-and-orientations
  - lem-integral-sutured-auxiliary-triangle-and-move-maps
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
  - lem-fiber-outer-grading-and-integral-cut-euler-matrix
  - lem-signed-relative-surface-cut-and-horizontal-decomposition
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-top-alexander-grading-of-knot-floer-homology
  - def-knot-relative-spinc-structure
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ni, Knot Floer homology detects fibred knots, complete sections 4 and 5"
      url: "https://arxiv.org/pdf/math/0607156v4"
    - title: "Ni, Sutured Heegaard diagrams for knots, complete Lemma 3.2 and Proposition 3.3"
      url: "https://arxiv.org/pdf/math/0507440v2"
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
---

## Statement

Let a balanced sutured manifold have connected positive and negative boundary faces. An essential separating product-annulus decomposition into balanced pieces admits a graded integral tensor chain equivalence, with coherent orientation classes induced from the specified class. This realizes the homology tensor formula over every field and the integral Künneth formula with Tor. Product-disk decompositions and product one-handle additions have literal integral complex identifications. The closure construction for any connected pair of faces identifies its top knot complex with the actual sutured disk complex using the specified marking and orientation class.

## Facts & Assumptions

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its actual construction or operator interface at its stated scope.

[F2] [[lem-integral-sutured-auxiliary-triangle-and-move-maps]] supplies its actual construction or operator interface at its stated scope.

[F3] [[lem-relative-sutured-diagrams-have-signed-move-equivalences]] supplies its actual construction or operator interface at its stated scope.

[F4] [[lem-fiber-outer-grading-and-integral-cut-euler-matrix]] supplies its actual construction or operator interface at its stated scope.

[F5] [[lem-signed-relative-surface-cut-and-horizontal-decomposition]] supplies its actual construction or operator interface at its stated scope.

[F6] [[def-sutured-floer-chain-complex]] supplies its actual construction or operator interface at its stated scope.

[F7] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its actual construction or operator interface at its stated scope.

[F8] [[def-top-alexander-grading-of-knot-floer-homology]] supplies its actual construction or operator interface at its stated scope.

[F9] [[def-knot-relative-spinc-structure]] supplies its actual construction or operator interface at its stated scope.

## Proof

**Given:** The actual marked sutured diagrams and decomposition hypotheses of the statement, with a specified coherent orientation class.

1.1 **Product one-handles are literal complex identifications.** Adding a product one-handle with feet at sutures attaches a two-dimensional band to the boundary of the actual Heegaard surface and adds no attaching circle. The resulting handlebody thickening is exactly the three-dimensional product one-handle: the two level faces are its upper and lower rectangles and its remaining face carries the suture. The band lies in a true boundary region. Every counted domain has coefficient zero there. Point-divisor positivity therefore prevents a holomorphic trace from entering the band, not merely from passing through its center. The generator set, disk maps, linearized operators and determinant orientations are consequently unchanged. A periodic domain is also unchanged, because its coefficient on the new band is zero and its attaching-circle boundary is the old one. This gives a literal integral chain identification, with the specified orientation character. Cutting a product disk is the inverse operation. In particular finitely many such handles may connect suture components without changing the complex. [construct]

1.2 **An actual closure diagram for any connected R₊ and R₋.** First suppose the suture has one component; write g for the genus of R₊. A self-indexing relative Morse function on M has r index-one and r index-two points after the relative zero/three cancellations. Its middle surface F̃ has genus g+r. Choose a small disk D₊ near the boundary and an arc δ₊ from it to the boundary disjoint from the finitely many exceptional flow points; follow them through the regular flow corridor to obtain D̃,δ̃,D₋,δ₋. Choose the closing diffeomorphism ψ:R₊→R₋ to match these collars. Gluing by ψ and filling the resulting boundary torus with meridian equal to the joined cut meridians constructs an actual closed Y and core knot K; the glued level face is its Seifert surface and cutting it recovers M with its marking. [construct]

1.3 Put A₊=R₊\intD₊ and Ã=F̃\intD̃. Choose 2g independent disjoint ξ₋ arcs with endpoints on the old boundary, avoiding δ₋ and the exceptional points; carry them to Ã and to A₊ by flow and ψ. Choose 2g independent disjoint η₊ arcs with endpoints on ∂D₊, avoiding δ₊ and the exceptional points; flow them to Ã. Glue A₊ to Ã with the two flow annuli, one over ∂D₊ and one over the old boundary. Double each ξ and η across its annulus. Add the r lower and r upper critical circles, the circle α₁=∂D̃, and the meridian μ=δ₊∪δ̃ with its two annular joining arcs. Choose w,z on opposite sides of μ next to its crossing with the old boundary longitude λ. [construct]

1.4 This is a complete genus-(2g+1+r) Heegaard diagram of the actual closure. The lower ξ disks are the flow rectangles from R₋ to the middle level joined through the ψ identification; the critical α disks are the actual lower co-cores and α₁ is the D-flow tube co-core. The upper η disks are the corresponding upper flow rectangles, the critical β disks are the upper co-cores and μ closes the last annular direction. Cutting the lower family first removes its critical handles; cutting the 2g ξ arcs turns the punctured level face into an annulus; the D-tube co-core cuts the remaining annular solid region to a ball. The upper argument with η and μ does the same. Thus both are complete disk systems. The two w,z bridge arcs follow the filled meridional corridor, so their union is the actual filling core, not an unspecified knot with the same Alexander rank. [construct]

1.5 The local meridional Chern calculation identifies its top generators with the outer set, and the full signed cut operation identifies this top complex with SFC(M). It is legitimate here with nonzero periodic domains: use the pullback of the specified orientation character as in the new separating-cut operation. More generally the disk-lift argument for the nice adapted closure uses precisely that same pullback calculation; it does not require a zero-periodic cut. Different closure maps and fillings compare through the actual M complex, so no separate closed-manifold gluing-independence assertion is assumed. Multiple sutures are treated by the literal product-handle operation just proved; no link knotification theorem is needed. [construct]

1.6 **The essential once-punctured-torus attachment.** Suppose M is obtained from M₂ by gluing the vertical boundary of G×I to a product annulus a⊂∂M₂, where G is a once-punctured torus; the remaining sutures are outside this product region. Use the closure diagram just constructed. On the middle surface of M₂ write B̃=F̃₂\intD̃ and denote its other boundary component by ã; the old boundary is λ̃. Choose σ̃ from λ̃ to ã disjoint from the α circles and δ̃, and τ̃ from ∂D̃ to ã disjoint from the β circles and δ̃. [construct]

1.7 Here are the actual allowed stabilizations of these arcs. At a crossing to be removed, puncture two tiny disks on opposite sides of σ̃, join their boundary circles by a tube, put a new α belt circle round one foot and a new β longitude through the tube. Redirect each old crossing strand through the tube on a separate track, using own-family slides over that longitude. The old arc σ̃ stays on the old surface and misses the new belt; it crosses the new longitude once. Multiple strands use parallel tracks. The same tunnel redirects a crossing of τ̃. Repeat for the finite crossing list. The color-reversed operation on τ̃ then makes it miss the ξ arcs and intersect one stabilization α circle once. The result has σ̃∩τ̃=∅; σ̃ meets precisely one β circle b, and τ̃ precisely one α circle a₀. All operations occur away from δ̃ and the closing marks. They are the actual relative stabilizations already covered by the signed move word. [construct]

1.8 Choose the remaining ξ arcs on the lower level avoiding σ and δ, and the η arcs on the upper level avoiding τ and δ. A slide over b removes any remaining η–σ intersection. On G choose two disjoint ξ arcs and two disjoint η arcs with ξ_i·η_j=δ_ij and no other intersections. Obtain them from the standard square presentation of a punctured torus by taking the two cut co-cores and their small transverse translates; their complement is a disk. Extend ξ₂,ξ₃ to the λ boundary along four parallel σ tracks, and η₂,η₃ to the D boundary along four parallel τ tracks. Use the same extension on the upper level and then the closure construction. There are two distinguished middle intersections x₂,x₃, one in each ξ_iη_i pair. [construct]

1.9 The β circle b now crosses the two ξ tracks twice each. Slide b twice over β₂ with opposite orientations, and twice over β₃ with opposite orientations. Each pair eliminates its two ξ crossings and has zero total homology change. Route the resulting circle outside G by the intervening annular isotopy. Call it b*. It is homologous to b, and its upper-level restriction b*∩A₊ is relatively null-homologous. Its two crossings with a₀ are called x,y. The region between their a₀ and b* boundary arcs contains the two G bands; it is an embedded genus-one region Q with exactly these two convex corners. It is obtained from a disk strip by attaching its two bands in alternating endpoint order. This description specifies its topology and edges without depending on the schematic picture. [construct]

1.10 **Exhaust the possible disks in this actual block.** Apply the uniform relative windings on the upper ξ arcs and the middle α circles other than a₀. The geometric duals are obtained by cutting the lower ξ system: the remaining middle surface is connected (it is a punctured lower face with finitely many extra disk holes), so its dual paths can avoid σ,τ,δ. The basis vector for a₀ is reserved. For a nonnegative whole periodic domain, winding removes the other α coefficients. The meridian μ has only the α₁ crossing, so pairing its boundary with μ also removes the α₁ coefficient. On the upper face, independence of the η relative classes and relative null-homology of b* leave only the b* contribution. Thus a surviving nonnegative periodic domain would have boundary a multiple of a₀ plus β circles. The untouched stabilization dual β circle intersects a₀ once and misses the other β circles; intersection with it removes that multiple. Independence of the β disk classes then forces zero. This proves actual weak admissibility; it does not claim that all periodic domains vanish. [construct]

1.11 For a differential disk between top generators, the upper restriction is a relative periodic domain because its endpoints lie on the middle side. Winding removes its ξ coefficients. Its coefficient at λ is zero by the μ,α₁,w,z collar equations. Relative η-independence now gives [construct]

1.12 ∂(D∩A₊) modulo ∂A₊ = m(b*∩A₊). [construct]

1.13 The two ξ₂,ξ₃ coordinates are forced to be x₂,x₃, since they have only their own η intersections outside the forbidden upper face. Their α and β boundary jumps vanish: they vanish on the upper ξ and η segments, and a stationary coordinate has constant whole-circle boundary coefficient. The four local coefficients at each of x₂,x₃ are therefore equal; the region joins the zero collar component, so they are all zero. Following these zero strips to a₀ and α₁ gives two zero quadrants at x and two at y. The remaining corner coefficient is m, hence positivity gives m≥0. [construct]

1.14 If m>0, the zero strips separate from the remaining trace a component supported on Q with its two boundary edges on a₀ and b*. Its endpoint boundary is m(y−x). There is only one moving coordinate on a₀, so an actual generator difference has coefficient at most one there; consequently m=1 for this component. Its domain has e(Q)=χ(Q)−2/4=−3/2 and endpoint sum 1/2, hence Maslov index −1. For a regular strip problem this component cannot occur. Equivalently its trace would have degree one over the strip but degree one onto the genus-one region Q, which is impossible after compactifying the strip to a disk. Thus m=0. All disk multiplicities in the attached genus-one block and upper face are zero, and every differential disk is supported in the unchanged middle B̃. [construct]

1.15 **Compare with the literal M₂ diagram.** Attach a rectangle I×[0,1] between the λ̃ and ã boundaries of B̃, with its σ endpoint outside one attaching interval and its τ endpoint inside the other. This is the actual product one-handle on M₂. In the new surface C̃ take ζ₂=I×{1/2}, ζ₃=σ̃. Take ω₂ to be τ̃ followed by a vertical rectangle arc and a parallel δ̃; take ω₃ as the interior frontier of a narrow neighborhood of τ̃∪ã. Double these arcs in the closure as above, replacing only the old two G arc pairs. Slide b over the doubled ω₃ once. The two replacement coordinates y₂,y₃ are then forced, and the remaining generators are exactly the same intersection tuples in B̃ as before. [construct]

1.16 Perform the same protected windings. The upper restriction of a differential domain has boundary a combination of the remaining η arcs and the new b restriction. These relative classes are independent in C₊: cutting ζ₂ across the rectangle and ζ₃ along σ opens the two boundary components, after which the remaining η system cuts the old handles; the b strand crosses the reserved stabilization co-core once. A relation must therefore have every coefficient zero. The λ′ collar and y₂,y₃ quadrants are zero by the same boundary equations. Hence every differential disk is again supported in B̃. Conversely a disk in B̃ extends by the forced stationary coordinates to both diagrams. [construct]

1.17 The map replacing (x₂,x₃) by (y₂,y₃) and keeping the B̃ tuple therefore bijects all differential disks. Choose the complex structures literally equal on B̃ and use the invertible constant factors on the forced coordinates. The linearized operators are conjugate, and so are their finite-kernel determinant splices. Transport the specified orientation character through the common supported domains; any unused periodic characters do not alter this supported differential. Generator signs align the reference orientations. This gives an actual integral chain isomorphism after the admitted signed moves. Thus attachment or removal of this essential genus-one product region preserves the integral chain type with its induced orientation class. [construct]

1.18 **Reduce the full separating annulus to this block.** Let A be a separating product annulus with connected R₊ and R₋ and balanced cuts M₁,M₂. Its boundary components are essential in R(γ), as required for a product-annulus decomposing surface. Form F₊=R₊(γ₁)∪A∪R₋(γ₂), rounded and pushed off the boundary; form F₋ with signs reversed. Euler additivity and balance give χ(F_±)=χ(R₊), and the three-dimensional region between the faces gives their actual relative homology [R₊]. They are horizontal surfaces. Applying the newly constructed horizontal chain operation cuts M into M₁ with a product face of M₂ attached and M₂ with a product face of M₁ attached. Consequently it suffices to remove an attached product region T×I. [construct]

1.19 If that region meets an original suture, choose a cut-arc forest in T rooted at that suture. The rectangles arc×I are product disks. Cutting them peels the product region into boundary collars and product balls, so the literal product-disk operation removes it. If it meets no original suture, first connect external sutures by literal product one-handles. Essentiality excludes a disk product component. Choose a once-punctured torus G in T, and apply the genus-one block above along ∂G×I. The remainder T\intG is planar after repeating for each genus handle. It now meets the newly exposed sutures, and its rooted cut-arc forest again gives product disks. All these operations are in the actual attached product region and leave the complementary M_i fixed. There are finitely many genus handles and forest edges. [construct]

1.20 Combining the horizontal chain map, the explicit product one-handle/disk identifications, and the essential genus-one supported-domain isomorphism gives the separating-annulus graded tensor chain operation. It gives Ni's stated homology tensor formula over any field and the integral Künneth/Tor formulation. This is a constructed essential-annulus operation; it neither invokes a zero-H₂ annulus theorem on an arbitrary manifold nor supplies characteristic-product or taut-hierarchy geometry. [construct] ∎
