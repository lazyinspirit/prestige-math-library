---
id: lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace
kind: lemma
title: The orientation-twisted diagonal realizes the Lefschetz trace
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings
  - thm-poincare-duality-with-the-orientation-local-system
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - thm-naturality-and-uniqueness-of-thom-classes
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - lem-the-orientable-double-cover-of-a-smooth-manifold
  - def-algebraic-lefschetz-number
  - thm-index-of-a-nondegenerate-fixed-point
  - lem-graph-transversality-is-fixed-point-nondegeneracy
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - def-trace-of-an-endomorphism
  - def-axiom-of-choice
  - thm-topological-manifolds-are-metrizable-and-paracompact
  - lem-a-handle-decomposition-gives-a-relative-cw-complex
  - prop-morse-handle-chain-complex-computes-singular-homology
  - cor-every-compact-smooth-manifold-admits-an-excellent-morse-function
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Hatcher, Algebraic Topology, Sections 3.G–3.H; local adapter proved here
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Printed pp. 321–322 (transfer and invariant cohomology), 327–336 (local
        coefficients and twisted duality); not a citation for an already-proved
        Lefschetz adapter.
dependency_level: 9
---

## Statement

Assume AC. Let $M$ be a connected closed smooth $n$-manifold and $\mathcal O=\mathcal O_M^{\mathbb Q}$. Orient the normal coordinate to its diagonal by **first minus second**: $(u,v)\mapsto u-v$. There is a normalized supported diagonal class $u_\Delta\in H^n(M\times M,(M\times M)\setminus\Delta;p_1^*\mathcal O)$; write $U$ for its absolute image. With $\delta(x)=(x,x)$,
$$U\cap[M\times M]^{\mathrm{tw}}=\delta_*[M]^{\mathrm{tw}}\quad\text{in }H_n(M\times M;p_2^*\mathcal O).$$
Choose a basis $\alpha_{p,j}$ of $H^p(M;\mathbb Q)$ and the uniquely dual basis $\beta_{p,j}\in H^{n-p}(M;\mathcal O)$ satisfying $\langle\beta_{p,j}\smile\alpha_{p,k},[M]^{\mathrm{tw}}\rangle=\delta_{jk}$. Then
$$U=\sum_{p,j}(-1)^p\,\beta_{p,j}\times\alpha_{p,j}.$$
For every smooth map $f:M\to M$, its graph map $\gamma_f(x)=(x,f(x))$ pulls the coefficient system $p_1^*\mathcal O$ back to $\mathcal O$, and
$$\langle\gamma_f^*U,[M]^{\mathrm{tw}}\rangle=\sum_p(-1)^p\operatorname{tr}(f^*:H^p(M;\mathbb Q)\to H^p(M;\mathbb Q))=L(f).$$
If $n\ge1$ and all fixed points of $f$ are nondegenerate, the left side is $\sum_x\operatorname{sign}\det(I-Df_x)=I(f)$. No orientability or lifting hypothesis on $f$ is needed.

## Facts & Assumptions

**Given:** The objects and AC in the statement.

[F1] [[lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings]].

[F2] [[thm-poincare-duality-with-the-orientation-local-system]].

[F3] [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]].

[F4] [[def-cup-and-cap-products-with-local-coefficient-pairings]].

[F5] [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]].

[F6] [[thm-excision-and-mayer-vietoris-with-local-coefficients]].

[F7] [[thm-thom-isomorphism-for-oriented-vector-bundles]].

[F8] [[thm-naturality-and-uniqueness-of-thom-classes]].

[F9] [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]].

[F10] [[lem-the-orientable-double-cover-of-a-smooth-manifold]].

[F11] [[def-algebraic-lefschetz-number]].

[F12] [[thm-index-of-a-nondegenerate-fixed-point]].

[F13] [[lem-graph-transversality-is-fixed-point-nondegeneracy]].

[F14] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]].

[F15] [[def-trace-of-an-endomorphism]].

[F16] [[def-axiom-of-choice]].

[F17] The closed smooth bases $Z_i\cong\widetilde M$ are paracompact Hausdorff ([[thm-topological-manifolds-are-metrizable-and-paracompact]]) and have finite CW type: choose an excellent Morse function ([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]]), its finite handle presentation ([[prop-morse-handle-chain-complex-computes-singular-homology]]), and the finite CW model of [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]. A finite trivializing cover admits a subordinate smooth partition by taking finitely many compactly supported chart bumps whose positive sets cover the compact base and dividing by their positive sum ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). This supplies numerability for [F7].

## Proof

1.1 Construct the supported class without an unoriented Thom theorem. Pull a tubular neighborhood of $\Delta$ back to $\widetilde M\times\widetilde M$. Its zero set is the disjoint union $Z_0=\{(a,a)\}$ and $Z_1=\{(a,\tau a)\}$. On either normal bundle, $d\pi_a(v)-d\pi_b(w)$ identifies the normal quotient with $T_{\pi(a)}M$; use the tautological orientation at $a$ to orient it. Each is an oriented rank-$n$ bundle on a base satisfying [F17], so [F7] supplies its unique fiber-normalized rational Thom class. Their sum, extended from disjoint tubes, is a relative class on the four-sheeted cover. The first deck involution reverses the specified normal orientation, and the second preserves it; uniqueness of the Thom classes therefore makes the sum anti-invariant under the first and invariant under the second. For relative descent, apply the cochain and projection construction in the proof of [F1] to $X=M\times M$, $A=X\setminus\Delta$ and $q=\pi\times\pi$. Expressing a local cochain value in the first tautological orientation identifies it with a scalar cochain anti-invariant under $t_1=(\tau,1)$ and invariant under $t_2=(1,\tau)$; restrictions to faces agree with coefficient transport. Vanishing on simplices in $A$ corresponds exactly to vanishing on their lifts in $q^{-1}A$, so the identification restricts to the relative complexes. The cochain projection $P=(1-t_1^*)(1+t_2^*)/4$ preserves that relative complex and commutes with its differential. Applying $P$ to cocycle representatives of $(-,+)$ classes, and to primitives of exact $(-,+)$ cocycles, proves both surjectivity and injectivity onto the relative cohomology eigenspace. Thus the Thom sum descends uniquely to $u_\Delta$ with coefficient $p_1^*\mathcal O$. On a common base chart its fiber normalization is the generator for $u-v$, with coefficient the orientation of that chart. [given, F1, F5, F6, F7, F8, F10, F17]

2.1 Check the cap normalization. On the oriented four-sheeted ambient manifold, let $Z_i$ have the orientation of its first factor. The ordered tangent-then-normal basis with normal coordinate $u-v$ has determinant $(-1)^n$ relative to ambient first-then-second coordinates: in equal base coordinates its block matrix is $\left(\begin{smallmatrix}I&I\\I&0\end{smallmatrix}\right)$. If the second lift has the opposite base orientation there is the additional sign from that orientation reversal. Apply [F9] first with integral coefficients on the oriented cover and then send its normalized Thom and fundamental classes to rational coefficients; the singular cup, cap and inclusion formulas commute with this coefficient map, and uniqueness in [F8] identifies the rational Thom class. Thus the cohomology-first normal-cap formula supplies the further shuffle sign $(-1)^{n^2}=(-1)^n$. Thus the two $(-1)^n$ factors cancel. After descent the second-factor orientation discrepancy is precisely carried by the coefficient $p_2^*\mathcal O$, and the result is the diagonal's canonical twisted fundamental class with that coefficient. For completeness this is a global equality, not merely a local sign test: in the tube, cap has support in the zero section after the fiber retraction; its pushforward to that section is a top twisted class, and its restrictions at every point are the just-computed canonical local generators. Uniqueness of the top twisted fundamental class gives that class, and the natural cap formula and open-tube inclusion give the asserted ambient equality. These formulas hold with local coefficients because the face transports in [F4] are exactly the scalar formulas in every lifted chart, and step 1.1's relative descent is injective. [F2, F3, F4, F8, F9, step 1.1]

3.1 Characterize $U$ by testing. For every $\varphi\in H^n(M\times M;p_2^*\mathcal O)$, the cap identity and step 2.1 give $\langle U\smile\varphi,[M\times M]^{\mathrm{tw}}\rangle=\langle\delta^*\varphi,[M]^{\mathrm{tw}}\rangle$. The coefficient contraction is $p_1^*\mathcal O\otimes(p_1^*\mathcal O\otimes p_2^*\mathcal O)\to p_2^*\mathcal O$, so the typing is exact. This pairing separates $H^n(M\times M;p_1^*\mathcal O)$: [F1]'s Kunneth decompositions and perfect factor pairings make its matrix a blockwise tensor product of invertible matrices, with unit Koszul signs. [F1, F4, step 2.1]

4.1 Test the proposed expansion on $\varphi=\alpha_{p,k}\times\beta_{p,l}$. A term $\beta_{r,j}\times\alpha_{r,j}$ can pair nontrivially only for $r=p$. Its product evaluation is $(-1)^p\langle\beta_{p,j}\smile\alpha_{p,k},[M]^{\mathrm{tw}}\rangle\langle\alpha_{p,j}\smile\beta_{p,l},[M]^{\mathrm{tw}}\rangle=(-1)^{p+p(n-p)}\delta_{jk}\delta_{jl}$, where the first $(-1)^p$ is the cross-product Koszul sign $(-1)^{p^2}$. Including the proposed coefficient $(-1)^p$ leaves $(-1)^{p(n-p)}\delta_{kl}$. The diagonal evaluation is exactly $\langle\alpha_{p,k}\smile\beta_{p,l},[M]^{\mathrm{tw}}\rangle=(-1)^{p(n-p)}\delta_{kl}$. These tests span by [F1], and step 3.1 separates classes, proving the expansion with the stated sign. [F1, step 3.1, algebra]

5.1 Pull back along the graph. Since $p_1\gamma_f=\mathrm{id}_M$, no coefficient comparison involving $f^*\mathcal O$ is required. Write $f^*\alpha_{p,j}=\sum_k a_{kj}\alpha_{p,k}$. Naturality of cup and cross products in [F4] gives $\gamma_f^*U=\sum_{p,j}(-1)^p\beta_{p,j}\smile f^*\alpha_{p,j}$, whose evaluation is $\sum_{p,j}(-1)^p a_{jj}$ by the chosen duality. This is the alternating cohomology trace, and it equals the homology trace by field duality. This uses the graph pullback directly; it never asserts that $f\times\mathrm{id}$ is a diffeomorphism. [F1, F4, F11, F14, F15, step 4.1]

6.1 If every fixed point is nondegenerate, graph transversality gives a finite preimage of the diagonal. Pull the relative supported class back along $\gamma_f$ and excise disjoint coordinate balls around these points. In such a ball its normal coordinate is $u-\widehat f(u)$, and its derivative at the point is $I-Df_x$. Pullback of the oriented normal Thom generator evaluates on the local twisted fundamental class by the degree of this map; for its invertible derivative this degree is $\operatorname{sign}\det(I-Df_x)$ by [F12]. Excision and the finite decomposition of the relative fundamental class add these evaluations. Consequently the absolute evaluation in step 5.1 is the sum of these local signs, namely $I(f)$. Changing chart orientation reverses both the normal generator and the twisted fundamental coefficient, so the integer local value is unchanged. [F3, F6, F8, F12, F13, step 1.1, step 5.1]

7.1 Empty fixed set gives a relative pullback through an empty support, hence zero and the empty index sum. The construction also covers orientable $M$ (its orientation cover has two components when $M$ is nonempty); an orientation trivializes $\mathcal O$ and gives the ordinary diagonal and graph-pullback formula. AC enters through the stated duality, Kunneth, tubular and Thom suppliers and the finite-dimensional trace definition. [F1, F2, F5, F7, F11, F16, step 5.1, step 6.1] ∎
