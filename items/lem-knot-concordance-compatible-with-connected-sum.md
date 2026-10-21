---
id: lem-knot-concordance-compatible-with-connected-sum
kind: lemma
title: "Smooth and topological concordance respect connected sum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-countable-choice
  - thm-isotopy-extension
  - thm-parametric-transversality
  - thm-relative-whitney-approximation-for-manifold-valued-maps
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-locally-flat-codimension-three-arc-unknotting
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, connected-sum operation on concordances, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, Definitions 3.1 and 3.5 and discussion through Proposition 3.6, printed II–11–II–12; states the concordance-group claim but explicitly leaves it unproved"
    - title: "Asaf Karagila, Set Theory (2017 lecture notes)"
      url: "https://karagila.org/files/set-theory-2017.pdf"
      locator: "§8.3, closing remarks before §8.4, printed p.42: relativized constructibility L[A] as an inner model of ZFC; external set-theoretic input for the compact coding specialization"
    - title: "Andrew Donald and Brendan Owens, Concordance groups of links, Algebraic & Geometric Topology 12 (2012)"
      url: "https://eprints.gla.ac.uk/70688/1/70688.pdf"
      locator: "§2, Lemma 2.3 and proof, printed pp.7–8; §4, Theorem 4.1 and proof, printed p.18, for the locally flat topological group"
---

## Statement

Assume the Axiom of Countable Choice. If $K_0$ and $K_1$ are concordant in the smooth category and $J_0$ and $J_1$ are concordant in the same category, then $K_0\#J_0$ and $K_1\#J_1$ are smoothly concordant. The same implication holds when both given concordances and the resulting concordance are required to be locally flat and topological.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance annuli]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological concordance annuli]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected sum]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, concordance annuli $A$ from $K_0$ to $K_1$ and $B$ from $J_0$ to $J_1$ in one of the two categories.

[F1] Each annulus is proper, has product collars at its endpoint knots, and has boundary orientation $-K_0\sqcup K_1$ or $-J_0\sqcup J_1$. ([[def-smooth-knot-concordance]], [[def-locally-flat-topological-knot-concordance]])

[F2] The oriented connected sum is obtained by deleting short trivial arcs and gluing with the fixed orientation-reversing boundary map; its class is independent of the local choices under $\mathrm{AC}_\omega$. ([[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]])

[F3] Under $\mathrm{AC}_\omega$, $S^3$ is simply connected, continuous homotopies into a smooth manifold can be smoothly approximated relative to a closed region where they are already smooth, finite-dimensional smooth perturbations can be chosen transverse, and isotopies of compact smooth sources extend ambiently in a boundaryless target with support in any prescribed neighborhood of their tracks. In the isotopy-extension construction, the velocity extension may be prescribed to be zero on a closed subtrack where the input isotopy is stationary, so that subtrack is fixed pointwise. Smooth submanifolds have tubular neighborhoods. ([[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[thm-parametric-transversality]], [[thm-isotopy-extension]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-countable-choice]])

[F4] Ambient-isotopic oriented knot representatives may be changed by smooth families of orientation-preserving diffeomorphisms of $S^3$. A chosen point on a knot can be moved to any prescribed point by an isotopy of embeddings of that point, which extends ambiently under $\mathrm{AC}_\omega$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-isotopy-extension]], [[def-countable-choice]])

[F5] Bare locally flat proper arcs with specified product end collars can be straightened by [[thm-locally-flat-codimension-three-arc-unknotting]]. This retained local result is not being strengthened into a relative transverse pair-tube or complement theorem.

[F6] **External TOP input, initially in ordinary ZFC:** connected sum descends to locally flat topological concordance classes of smooth oriented knots represented by proper annuli in $S^3\times I$. Donald and Owens, §2, Lemma 2.3 and proof, establish well-definedness by taking connected sum along the concordance annulus; §4, Theorem 4.1 and proof, state the locally flat TOP version and identify the topological knot concordance group as a direct summand. The paper gives the annulus construction as a proof sketch, not a detailed pair-tube proof. Ray, §3, Definition 3.5 and discussion through Proposition 3.6, also states the TOP concordance group, while explicitly saying the group claim is asserted but not proved there. We use the well-defined TOP operation as an external input, not as a locally reconstructed annulus-adapted tube/complement argument. For the collared annuli of [F1], it implies that the two given concordances yield an oriented locally flat annulus between the endpoint connected sums. The compact real-code/$L[r]$ specialization below addresses the stated $\mathrm{AC}_\omega$ hypothesis; it does not enlarge the external input's geometric scope.

[F7] **External set-theoretic input:** for a real $r\subseteq\omega$, the relativized constructible class $L[r]$ is a transitive inner model of ZFC containing $r$ and all natural numbers. Karagila, §8.3, closing remarks, printed p.42, gives the $L[A]$ construction and its inner-ZFC conclusion; for a real parameter, $r\subseteq\omega\subseteq L[r]$, so the parameter belongs to that model. No ambient full AC is assumed by this input. The compact coding argument below, rather than an implication from ambient full AC, supplies the Countable Choice specialization of [F6].

## Proof

**Given:** The two annuli $A,B$ and the fixed connected-sum convention.

1.1 First consider smooth concordances. Pick one point on each endpoint knot. By [F4], apply separate endpoint ambient isotopies carrying both marked points to a common point $p\in S^3$; extend them over disjoint product collars of the concordance and interpolate by the identity between the collars. This changes the representatives only within their ambient-isotopy classes. Choose a smooth spanning arc in each annulus joining the marked points and fixed in product collars. For one annulus, write this arc as $\alpha$ and the standard product arc as $\beta(s)=(p,s)$. Since $S^3\times(0,1)$ is simply connected by [F3], the middle portions of $\alpha$ and $\beta$ are homotopic rel endpoints after their common endpoint collars are deleted. Relative smooth approximation in [F3] gives a smooth homotopy $H(s,t)$ fixed on those collars. We now perturb this homotopy through a finite-dimensional family. First, local coordinate bumps whose $s$-derivatives span the four target coordinates at each zero of $\partial_sH$ make the total derivative family transverse to the zero section of the rank-four tangent bundle; its source has dimension two, so a generic parameter has $\partial_sH\ne0$ everywhere. Compactness then supplies a uniform $\delta>0$ for local injectivity of every slice when $|s-s'|<\delta$. On the compact configuration set $|s-s'|\ge\delta$, use two disjoint source-supported coordinate bumps near each pair to vary $H(s,t)$ and $H(s',t)$ independently. A finite cover of the possible diagonal preimage makes the total pair map transverse to the diagonal in $(S^3\times I)^2$. Its source-pair-time dimension is three and the diagonal has codimension four, so the generic slice has no double points. Both perturbations are supported away from the endpoint collars and can be chosen small enough to preserve immersion and local injectivity. Thus every time-slice is a smooth embedding, giving an isotopy of proper arcs rel collars. The isotopy is stationary on common source end collars, so restrict to the compact middle arcs containing its moving part; these lie in $S^3\times(0,1)$, a boundaryless smooth manifold. Apply [F3] there with support in the interior, choosing the extension to fix the adjacent stationary arc collars, and extend it by the identity across the fixed end collars. This gives an ambient isotopy of $S^3\times I$ fixed near both end levels and carrying the whole spanning arc to the vertical product arc without changing the concordance or its oriented endpoint knot types. [F1, F2, F3, F4, given, construct, choose]

1.2 For the TOP implication, first code the actual input as compact metric data. Parametrize the two annuli by the standard compact annulus, and choose finitely many local pair charts covering each, together with their inverses and the given end-collar maps. Such a finite selection is possible by compactness and finite choice; using countably many relatively compact chart restrictions instead would require only $\mathrm{AC}_\omega$. Include the endpoint knots and the chosen connected-sum representatives from [F2]. For these smooth knots and the finite smooth coordinate maps used in their sums, also code the derivatives of every finite order, their continuity moduli and rational difference-quotient remainder bounds; thus the inner model sees smooth knots, not merely continuous embeddings. Continuous maps on these standard metric domains are coded by their values on fixed countable rational dense sets and uniform continuity moduli on compact exhaustions; include inverse moduli for embeddings and chart inverses. All this countable numerical data is one real $r$. [F1, F2, F6, F7, given, construct, choose]

2.1 For each vertical arc, double the ambient product across its two boundary levels by gluing to a second copy of $S^3\times I$, and glue a second copy of the concordance annulus using its product collars. The doubled ambient manifold is $S^3\times S^1$ and the doubled annulus is a smooth embedded torus. Doubling the spanning arc across its endpoints gives a smooth embedded circle $C$ in that torus. Apply the tubular-neighborhood theorem to the closed torus in $S^3\times S^1$ and to $C$ inside the torus. Over $C$, the normal line of $C$ in the torus and the rank-two normal bundle of the torus in the ambient manifold are trivial, so their product gives a neighborhood $D^1\times D^2\times S^1$ of $C$ whose intersection with the torus is exactly $D^1\times S^1$. Restrict to the half corresponding to the original arc; this gives the required product neighborhood $D^3\times I$ meeting the original annulus exactly in $D^1\times I$, with product end faces from the collars. Removing the interior of this strip from each annulus leaves a rectangle. Remove the two product neighborhoods from two copies of $S^3\times I$ and glue their boundary cylinders $S^2\times I$ by the fixed product identification. At each level this glues two three-balls along their boundary spheres, giving $S^3\#S^3\cong S^3$; since the gluing is independent of the interval parameter, the resulting ambient cobordism is $S^3\times I$. Glue the two surface rectangles across the two side intervals in the connecting cylinder, choosing the side identifications to extend the orientations on the cut annuli. At the lower end the fixed orientation-reversing boundary map joins the incoming arcs with boundary orientation $-(K_0\#J_0)$; at the upper end the same product convention gives $K_1\#J_1$. The result is connected, orientable, has two boundary circles, and has Euler characteristic $0$ (two rectangles, each of Euler characteristic $1$, glued along two intervals); hence it is an annulus. The product collars give the required smooth concordance. [F1, F2, F3, step 1.1, construct, algebra]

2.2 We use certificates, not an unqualified assertion that homeomorphism existence is absolute. For every open chart domain record its rational-ball code (relative rational half-balls at a boundary chart), compact exhaustion, and positive-distance margins putting the images of exhaustion pieces in the corresponding open image. Record both map/inverse identities on dense sets. For the pair condition record the parametrization of the linear plane section and its identities with the annulus parametrization; on smaller charts also record positive separation from the compact remainder of the annulus outside that patch. A finite parameter-patch cover and a Lebesgue-number certificate cover the entire annulus. Properness is certified on the compact subannuli $S^1\times[1/j,1-1/j]$ by positive separation from the ambient end levels. Equalities with the oriented endpoint parametrizations and the product collars are dense-set equalities with their continuity moduli. The smooth derivative identities are certified by rational difference quotients and their coded remainder bounds at each finite order. These certificates express input validity using only rational inequalities, integer indices and quantification over natural numbers. They therefore have the same truth in $L[r]$ and in the ambient universe; in particular the coded input is valid in $L[r]$. [F1, F2, F7, step 1.2, construct]

3.1 The preceding construction proves the smooth implication. [step 1.1, step 2.1]

3.2 Apply [F6] inside $L[r]$, which satisfies full Choice by [F7]. It gives a locally flat annulus for the two connected sums. In that model choose its finite pair-chart cover, inverse maps, compact-exhaustion moduli, open-image margins and end-collar certificates of the same form as in step 2.2; collect them into a real $s\in L[r]$. Decode $s$ in the ambient universe by completion from the rational dense domains. The coded forward and inverse moduli give continuous inverse maps on their coded domains; the dense-set identities extend to all points, and the open-image and separation certificates make these actual local pair charts with no additional surface branch. The finite cover certificate, properness margins, and endpoint/collar identities likewise persist. Thus the decoded object is an actual oriented proper locally flat annulus in the ambient $S^3\times I$, with the required endpoint connected sums and product collars. This transfer uses arithmetic certificates for the particular compact objects, not preservation of arbitrary sets or homeomorphisms between inner models. [F1, F2, F6, F7, step 1.2, step 2.2, construct]

4.1 Steps 1.2, 2.2, 3.2 earn the required compact specialization of the external TOP input under the stated $\mathrm{AC}_\omega$, without assuming ambient full AC. Together with the retained smooth construction in steps 1.1–3.1, this proves both implications in the unchanged Statement. No annulus-adapted transverse tube or ambient complement is inferred from the bare-arc theorem [F5]; that former local proof gap is bypassed by the explicitly external input [F6]. [F1, F2, F5, F6, F7, step 3.1, step 3.2] ∎

## Sources

[[lem-knot-connected-sum-well-defined]]

[[thm-isotopy-extension]]

[[thm-parametric-transversality]]
