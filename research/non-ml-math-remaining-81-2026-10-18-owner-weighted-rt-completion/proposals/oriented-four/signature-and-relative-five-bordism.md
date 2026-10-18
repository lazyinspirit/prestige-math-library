# Integral four-dimensional bordism and the relative five-dimensional seam

Current delivery: the four files in `proposed-items/`, with exact facts, dependencies, all local EM derivations, and connected relative five-bordism precision, supersede this exploratory manuscript. See `packaging-receipt.json` and `proof-contract-payload.json`.

Draft construction, 2026-10-18. This file proves the local geometric seam construction and isolates its integral input. The accompanying `integral-signature-proof.md` now constructs that input by a low-dimensional Thom-fiber calculation, conditional on the separately owned Ω₃SO=0 supplier and subject to root review. No canonical carrier, state, manifest, or consumer is changed.

## 1. Actual inspected interfaces

The full authored proofs of the following native items were read: universal oriented/unoriented Pontryagin–Thom; rational oriented detection; signature bordism invariance; the four-dimensional signature formula; the signature and first Pontryagin number of CP²; unoriented Stiefel–Whitney-number detection; stable unoriented Thom detection; mod-two Euler/top Stiefel–Whitney comparison; mod-two reduction of Pontryagin classes. Exact hashes are in `source-audit.json`.

These establish the homomorphism

\[
\sigma:\Omega^{SO}_4\longrightarrow\mathbb Z,
\qquad \sigma[\mathbb {CP}^{2}]=1,
\]

its surjectivity, and that its kernel consists of torsion classes. They do **not** establish that this torsion kernel is zero. In particular, the native rational detection theorem explicitly states only a multiple-boundary conclusion. The unoriented detector has source MO, not MSO, and its injectivity cannot be transported across the forget-orientation map without an additional theorem.

## 2. Fully proved low-dimensional characteristic reduction

Let M be any closed oriented smooth four-manifold, possibly disconnected, and put s=σ(M). Let P be the disjoint union of s copies of CP² if s≥0, or −s copies of −CP² if s<0. Then M⊔(−P) has vanishing Pontryagin and Stiefel–Whitney numbers.

Indeed the only positive-degree Pontryagin number in dimension four is p₁, and p₁[M]=3σ(M); its value on M⊔(−P) is therefore zero. The partitions of four give the Stiefel–Whitney monomials w₄, w₃w₁, w₂², w₂w₁² and w₁⁴. Orientability makes all the monomials containing w₁ zero. Reduction of p₁ modulo two gives w₂², so its characteristic number is σ modulo two. Finally w₄ is the mod-two Euler class of TM, and its evaluation is χ(M) modulo two. For each connected component real Poincaré duality gives χ=2−2b₁+b₂, whereas σ=b₂⁺−b₂⁻ and b₂=b₂⁺+b₂⁻. Thus χ≡σ modulo two. Add these equations over the components. CP² has σ=1 and reversing orientation does not change a mod-two characteristic number. Consequently the w₄ and w₂² numbers on M⊔(−P) both equal s−s=0 modulo two. This proves the claim, with no assumption on π₁(M).

The native unoriented detection theorem now proves that M⊔(−P) bounds a smooth **unoriented** five-manifold. It does not supply an orientation on that filling. An orientation double cover does not repair this: the induced boundary consists of the two oppositely oriented sheets, and so gives a cancellation rather than a filling of the original oriented boundary. Likewise the rational theorem gives a filling of a positive multiple, which cannot be divided by that integer geometrically.

The exact missing low-dimensional implication is

\[
\tag{I4}
\sigma(M)=0\ \Longrightarrow\ M=\partial V
\quad\text{for a compact oriented smooth five-manifold }V.
\]

This is an established theorem, not an open problem. It is not proved by the inspected pre-existing interfaces. The new accompanying proof `integral-signature-proof.md` supplies a different route, using the homotopy fiber of the integral Thom-class map to K(Z,q); it does not invoke the integral characteristic-number criterion.

## 3. Relative seam theorem, assuming exactly (I4)

Let Y be a closed oriented smooth three-manifold. Let W₀,W₁ be compact oriented smooth four-manifolds with specified orientation-preserving boundary parametrizations φᵢ:∂Wᵢ→Y and specified collars. There is no restriction on their fundamental groups. More generally, the same argument applies to product corner strata of these data by taking every local operation as the identity in the extra corner coordinates.

Form the closed oriented four-manifold

\[
M=(-W_0)\cup_{\phi_1^{-1}\phi_0}W_1.
\]

The gluing uses the specified collars and identifies the actual boundary points prescribed by the parametrizations. An orientation reversal on W₀ makes this an orientation-reversing boundary identification, as required for oriented gluing. Fix one smoothing of the seam inside its collar; transport it by the identity outside that collar. Let s=σ(M). Replace W₀ by W₀′, its interior connected sum with s copies of CP² for s≥0, or −s copies of −CP² for s<0. All sum balls and tubes lie in the interior, so ∂W₀′, its parametrization, and its collar are the original ones. Then

\[
M'=(-W_0')\cup_YW_1
\quad\text{has}\quad \sigma(M')=0.
\]

Here only closed-manifold connected-sum additivity is required: M′ is the interior connected sum of M with the oppositely oriented inserted projective planes. For completeness, connect-sum additivity follows by deleting balls, applying Mayer–Vietoris in degree two (H₁(S³)=H₂(S³)=0), and representing the two summands by cycles away from their disjoint punctures. The middle intersection form is their orthogonal direct sum.

By (I4), M′ is the oriented boundary of a compact smooth five-manifold V. Fix a boundary identification ∂V≅M′, including the seam collar. The next paragraph converts this ordinary filling into a bordism with corners whose faces are **exactly** −W₀′, Y×I and W₁, with the prescribed parametrizations. Thus the relative five-dimensional conclusion uses only (I4), with no hidden simply-connectedness or handle-theoretic assertion.

### 3.1 Opening the seam into a vertical face

In the boundary collar of V the seam has product coordinates

\[
Y\times(-2\epsilon,2\epsilon)_u\times[0,2\epsilon)_v,
\]

where v is inward and u distinguishes the two horizontal faces. Remove a small open rounded notch along Y×{u=v=0}. In the two-dimensional (u,v) half-plane choose its remaining boundary to consist of a left horizontal ray, a compact arc, and a right horizontal ray. Choose the arc with endpoints on the rays and with distinct inward tangent directions there, so those two points are corners. Smooth the arc away from its endpoints and equip each endpoint with a quadrant chart. The resulting two-dimensional region is a smooth manifold with corners; it is unchanged outside the chosen rectangle. Taking its product with Y replaces the seam by the new face Y×I. The original left and right parts of ∂V become the two horizontal faces, each shortened only by a boundary collar.

Identify a shortened horizontal face with its original Wᵢ by a smooth collar reparametrization: on a collar coordinate r≥0 take a smooth strictly increasing diffeomorphism [0,2ε)→[ε,2ε) equal to the identity near 2ε and extend it by the identity. Its inverse transports the original prescribed parametrization to the new corner. Parametrize the arc monotonically by I and take the identity on Y. Choose its endpoint values to agree with these transported collar identifications. Thus the corner intersections are the prescribed copies of Y point by point; no mapping class of Y has been introduced. Product coordinates near the corners give compatible collars of all three faces. The orientation induced from V is −W₀′ at the incoming face and W₁ at the outgoing face; orient the vertical product by that same boundary convention.

This construction removes no interior topology and imposes no condition on π₁(V), W₀′, W₁ or Y. If several Y components occur, do it separately in their disjoint product collars. Extra boundary strata already presented as products are protected by taking the same notch in the (u,v) variables and the identity in every other variable. Later handle attachments must stay off this fixed vertical collar; that is a separate handle-decomposition obligation.

### 3.2 Connection with the isolated framed-unknot blow-ups

If W₀ is a trace with only a 0-handle and framed 2-handles, then interior connected sum with CP² or −CP² is represented by adjoining a split +1 or −1 framed unknot to its surgery link. To see the sign and the boundary claim directly, the union of a 0-handle and one 2-handle attached along the unknot with framing ±1 is the oriented disk bundle over S² of Euler number ±1. Its boundary is S³, and capping that boundary by a 4-ball gives ±CP²: the zero section has square ±1 and agrees with a projective line in the standard CP² chart decomposition. Boundary connecting this trace to W₀ in a small boundary ball has the same interior connected sum, with the original boundary identification outside the chosen ball; using the standard S³ cap fixes its collar identification across the ball. Hence these are the actual local blow-ups used in the relative Kirby setting, and they do not alter the parametrized external three-boundary.

There is also a bordism between a disjoint union and its connected sum: attach a five-dimensional 1-handle to (A⊔B)×I along two interior 4-balls in the outgoing faces. Its outgoing face is A#B, and the entire original external boundary collar stays a product. This explains why the connected-sum correction and the disjoint-union group calculation have the same oriented bordism class.

### 3.3 Exact output to the Cerf constructor

Assuming (I4), the output is a compact oriented smooth five-manifold with corners V′ and specified identifications

\[
\partial V'=(-W_0')\cup(Y\times I)\cup W_1,
\]

whose intersections, parametrizations and product collars are fixed as above. This statement gives existence of a **relative five-bordism**. It does not assert that V′ is a product, that it is an h-cobordism, that its fundamental group vanishes, or that it already has a particular handle presentation. The relative Cerf constructor owns the next handle-ordering, trading and common-middle-trace steps. No four-dimensional h-cobordism theorem is used.

## 4. Source reading boundary and continuation

Freed, *Bordism: Old and New*, https://people.math.harvard.edu/~dafr/bordism.pdf, was fetched in full; the text actually read here is printed pp.19–20 and 96–102, including the complete four-dimensional computation. Page 20 announces Ω₄SO≅Z. The proof at pp.100–102 computes π₄(MSO)⊗Q and explicitly concludes that CP² is a **rational** basis. It does not prove (I4). The integral characteristic-number criterion on p.19 is explicitly part of a cited summary, not a proof supplied there.

Weston, *An Introduction to Cobordism Theory*, https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf, was fetched in full. The actual relevant reading is complete §18 (printed pp.32–34), including Theorem 18.5: Weston explicitly writes that Wall's integral structure theorem is stated without proof. It is not an integral proof supplier.

The scan at https://www.maths.ed.ac.uk/~v1ranick/papers/stong.pdf is authentic Stong, *Notes on Cobordism Theory*, but its 28 scanned spreads contain the front matter and the first chapter only, ending at printed p.50. The title and contents were inspected visually; the contents locate the later cobordism-ring computation, which is absent from this file. No reading of that missing chapter is claimed. The files stong1.pdf through stong4.pdf on that server are other Stong papers, not continuation chapters; their first pages were inspected and those unrelated downloads discarded.

The 207-page PDF https://www.maths.ed.ac.uk/~v1ranick/surgery/wall.pdf is *Differential Topology*, Cambridge notes 1960–61. Its opening page was read and identifies foundations for later intended cobordism notes; it is not Wall's Annals paper and no cobordism proof is attributed to it. Wall's actual paper is *Determination of the Cobordism Ring*, Ann. Math. 72 (1960), 292–311, DOI 10.2307/1970136. The tried JSTOR PDF and Annals links returned HTML, so this file claims no reading of that paper.

The initial Wall-manifold and spinification approaches were not used. The accompanying new proof instead computes enough integral homology of K(Z,q) to apply ordinary Hurewicz to the Thom-class fiber. Its exact low-dimensional source reading and its additional local calculations are stated there. The outstanding interface is the separately constructed Ω₃SO=0 supplier; root mathematical review is still owed.
