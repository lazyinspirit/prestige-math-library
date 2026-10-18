---
id: thm-weighted-rt-tqft-and-factorization
kind: theorem
title: "The weighted Reshetikhin–Turaev TQFT and modular-functor factorization"
status: published
dependency_level: 14
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-weighted-lagrangian-ribbon-bordism, def-rt-state-spaces, lem-rt-handlebody-pairing-and-surgery-gluing, lem-rt-capped-operator-normalization-and-composition, lem-wall-signature-and-rt-cap-reference-correction, lem-modular-hom-state-spaces-have-exact-sewing-inverses, lem-colored-fr-surgery-and-coupon-cancellation, def-rigid-object-and-rigid-monoidal-category, lem-relative-three-bordism-surgery-presentation, def-axiom-of-choice, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.1–5.8"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Kevin Walker, On Witten's 3-manifold invariants, §§7 and 18–19"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Statement

Assume full AC and its inherited countable-choice consequences. Let $\mathcal C$ be any complex modular ribbon fusion category, with fixed $D\ne0$, $\kappa=p_+/D$, the state spaces of [[def-rt-state-spaces]] and the weighted collared ribbon-bordism category of [[def-weighted-lagrangian-ribbon-bordism]]. No unitarity, positivity or anomaly-cancellation hypothesis is imposed. For each parametrized connected boundary surface choose its standard spine caps, with meridian Lagrangian $\alpha$; the object may carry any real Lagrangian $\lambda$. Use the Walker Maslov convention and actual cap-reference correction $a(R;\lambda,\alpha)$ of [[lem-wall-signature-and-rt-cap-reference-correction]].

A connected surgery presentation with $m$ surgery components, linking matrix $B$ and integer bordism weight $n$ has the exact outgoing color-block operator

$$Z(M,n;\lambda)^j_i=\kappa^{n+a(R_M;\lambda,\alpha)-\sigma(B)}D^{-m-1+\chi(\Sigma_{\rm out})/2}d(j)F_0(\Omega;i,j).$$

Here $F_0$ is the finite colored graph operator with the disconnected-boundary unit-channel projections of [[lem-rt-capped-operator-normalization-and-composition]], and $d(j)$ is the product of outgoing handle-color dimensions. For disconnected $M$ use the product over its connected components, equivalently replace $-m-1$ by $-m-b_0(M)$; the external weight contributes the single factor $\kappa^n$. The empty value is $\mathbb C$.

These maps are independent of all marked surgery presentations and auxiliary coupon bases and define a symmetric monoidal functor on the full specified weighted category, including actual colored coupons, disconnected bordisms and empty ends. The functor preserves duality. A unit increase of weight acts by $\kappa$. No ordinary anomaly-free functor is asserted without cancellation of this anomaly.

For every compatible circle cut there is a natural factorization isomorphism

$$V(\Sigma_{\rm glued};\vec W)\cong\bigoplus_{i\in I}V(\Sigma_{\rm cut};\vec W,i,i^*).$$

The sewing map from right to left is the actual normalized tube map; its inverse is the complete composition-dual cutting resolution. Both separating and nonseparating cuts, all multiplicities, commuting disjoint cuts and iterated gluing are included. Markings, tensor order and the Lagrangian identifications of the cut are retained; a change of parametrization is represented by its weighted mapping cylinder.

## Facts & Assumptions

**Given:** The full marked category, surfaces, graphs and arbitrary object Lagrangians in the Statement.

[F1] [[def-weighted-lagrangian-ribbon-bordism]] proves the category with individual homology relations and composition weight $n_2+n_1+\mu_W(R_1\lambda_0,\lambda_1,R_2^t\lambda_2)$. [[lem-relative-three-bordism-surgery-presentation]] supplies the complete specified-output decorated presentation calculus.

[F2] [[def-rt-state-spaces]] gives finite connected Hom spaces and tensor products on disconnected surfaces. [[lem-rt-handlebody-pairing-and-surgery-gluing]] constructs presentation-independent capped operators with perfect pairings and the full local laws; [[lem-rt-capped-operator-normalization-and-composition]] supplies their exact $N,Q,F_0,D,d_i$ and stacked signature formula.

[F3] [[lem-wall-signature-and-rt-cap-reference-correction]] proves $\Delta\sigma=\mu_\alpha$, $a(BA)-a(B)-a(A)=\mu_\alpha-\mu_\lambda$, the exact positive weight action and arbitrary-Lagrangian correction; it uses the actual relative one-handle cut and outward-normal-first Wall form.

[F4] [[lem-modular-hom-state-spaces-have-exact-sewing-inverses]] gives both typed separating and nonseparating Hom sewing/cutting inverses, complete multiplicities, basis independence and coherence for all disjoint cuts.

[F5] [[lem-colored-fr-surgery-and-coupon-cancellation]] gives $R_{ij}(E)=\delta_{ij}(D^2/d_i)1$ and the calibrated trace/composition-dual coupon resolutions. The duality snakes are [[def-rigid-object-and-rigid-monoidal-category]].

[A1] Full AC is inherited from the topology and boundary duality suppliers, and countable choice from framed tangle evaluation ([[def-axiom-of-choice]], [[def-countable-choice]]). No further infinite choice is used.

## Proof

1.1 [F1] presents every specified decorated bordism, componentwise and with its actual boundary maps. [F2] constructs a unique presentation-independent operator $Z_\alpha(M)$ from all capped tests and applies $N_{\rm out}$. Its outgoing block is exactly $\kappa^{-\sigma(B)}D^{-m-b_0(M)+\chi_{\rm out}/2}d(j)F_0$. Multiply by $\kappa^{n+a(R_M;\lambda,\alpha)}$ to obtain the displayed formula. The relation $R_M$ and the chosen real Lagrangians depend only on the actual bordism and its marked boundary, so the extra factor has no presentation dependence. It is defined even when no handlebody realizes $\lambda$; only the actual reference $\alpha$ is represented by the caps. Every auxiliary coupon choice is a complete computational resolution already covered by [F2], with the prescribed actual morphisms fixed. [F1, F2, F3, given, construct]

2.1 Write $A=R_{M_1}$ and $B=R_{M_2}$. The stacked law is $Z_\alpha(M_2M_1)=\kappa^{-\mu_\alpha}Z_\alpha(M_2)Z_\alpha(M_1)$ by [F2,F3]. The composite weight is $n_2+n_1+\mu_\lambda$. Its exponent therefore becomes $n_2+n_1+\mu_\lambda+a(BA)-\mu_\alpha=n_2+a(B)+n_1+a(A)$, exactly the product exponent. This proves strict composition for all individual relations, including noninjective ones and closed components of the composite. The identity relation has $a=0$; [F2]'s cylinder is the identity, so identities are preserved. No whole-composite kernel is substituted for either individual relation. [F1, F2, F3, step 1.1, algebra]

2.2 Fix the standard separating tube connecting the two new dual boundary circles, keeping their tensor order. In the capped graph put all unrelated handle annuli in their standard disk products. Applying [F5] to each annulus gives $D^2/d_i$ on its matched color channel and zero on unmatched channels. The complete product is precisely the Gram factor $Q$ computed by [F2]; its outgoing correction $N=Q^{-1}$ cancels it. At the tube itself the remaining word is the right evaluation $r_i:i\otimes i^*\to\mathbf1$. Consequently its actual normalized map is $G_i(f\otimes k)=(1_X\otimes r_i\otimes1_Y)(f\otimes k)$, with the parentheses and dualities of [F4]. For a nonseparating tube the two added legs are one handle summand, so the remaining word is its actual inclusion $u_i:i\otimes i^*\to H$; summing gives $G((z_i))=\sum_i(1_X\otimes u_i)z_i$. There is no extra $d_i$ scalar: [F5] uses composition-dual caps, whereas converting a trace-dual coupon to them includes exactly its $d_i^{-1}$ factor. All other outgoing $d$ factors have already been canceled by $N$ above. This is an identification with the geometric tube operator, not only an algebraic possible sewing map. [F2, F4, F5, step 1.1, construct]

3.1 For disjoint union [F2] tensors state spaces, caps, complete unit-channel projections and graph evaluations, with exponent $-m-b_0(M)+\chi_{\rm out}/2$. The Maslov form and $a$ add on symplectic direct sums by [F3], and weights add in [F1]. Thus $Z(M\sqcup N)=Z(M)\otimes Z(N)$ with the fixed canonical tensor identifications and $Z(\varnothing)=1_{\mathbb C}$. A permutation of disjoint components is a product collar that carries the corresponding coupon blocks to their permuted positions, so its map is the ordinary tensor symmetry. Associativity, units and symmetry coherence are equalities of these actual disjoint collared bordisms and hence of their maps by step 2.1; this proves the symmetric monoidal functor laws. Increasing $n$ by one multiplies the formula by $\kappa$, including for an empty underlying weighted bordism. [F1, F2, F3, step 1.1, step 2.1, algebra]

3.2 The explicit inverses are those of [F4]: for separating sewing, $F(z)=\sum_{i,\alpha}((g_{i\alpha}\otimes1_i)b_i^R)\otimes((p_{i\alpha}\otimes1_Y)z)$, where $g:i^*\to X$, $p:X\to i^*$ are complete simple-summand composition-dual maps. The right snake and $\sum gp=1_X$ give $GF=1$; $pg=\delta1_{i^*}$ and the other snake give $FG=1$ on each simple and multiplicity block. For a nonseparating cut use $F(z)=((1_X\otimes v_i)z)_i$; $\sum u_iv_i=1_H$ and $v_iu_j=\delta_{ij}1$ give both inverses. These finite identities include vanishing Hom spaces. Thus the geometric map of step 2.2 is an isomorphism with the asserted complete inverse. [F4, F5, step 2.2, algebra]

3.3 Choose cut-compatible Lagrangians and the standard product caps for the tube models. Their homology relation carries the old cut Lagrangians to the glued one; at a nonseparating cut the added meridian lies in that relation's kernel. The new reference cap on that meridian has the same kernel. Thus each local comparison has a repeated pair in its Maslov triple and weight correction zero, so the calculations in step 2.2 have exactly the stated weight-zero normalization. For other object Lagrangians retain the actual cap-reference factors of [F3] on both sides; its proved coboundary identity cancels the intermediate references exactly as in step 2.1. This transports the same sewing maps through the corresponding weighted reference-change cylinders, rather than assuming arbitrary real Lagrangians are geometric caps. [F1, F3, F4, step 2.1, step 2.2, construct]

4.1 The oppositely oriented labeled surface is the categorical dual object in the bordism category: the bent product cylinder gives evaluation and coevaluation with the actual reversed boundary labels. Glue each snake pair. Straightening its collar interval is an isotopy to the identity cylinder, fixed on the remaining ends and graph. Its middle Lagrangians are the transported same product kernel; the relevant Maslov triples have two equal arguments, so their weights are zero. Thus both snake composites are the weight-zero cylinder in [F1]. Applying step 2.1, step 3.1 proves both vector-space snakes. The pairings are consequently nondegenerate, compatible with [F2]'s computed geometric Gram forms and their inverse corrections. This also proves duality for disconnected or empty surfaces, without requiring a positive Hermitian structure. [F1, F2, F3, F5, step 2.1, step 3.1, construct]

4.2 A bordism compatible with the cut transports its fixed coupons and the tube on the two boundary presentations. Both orders of sewing are the same marked glued decorated bordism; its actual comparison is supplied by [F1]. step 1.1, step 2.1 therefore equate their maps, proving geometric naturality. In the explicit coordinates this is also the typed naturality of [F4] on every uncut factor. For finitely many disjoint cuts, expand every complete finite resolution before contraction. The local tube words act on distinct pairs; interchange and the canonical associator comparisons in [F4] identify all orders. Any two orders differ by adjacent swaps, and successive reverse cuts cancel each adjacent $F/G$ by step 3.2. Thus disjoint cuts commute and all iterated gluing maps have their specified inverse, with multiplicities and tensor orders retained. A change of parametrization is its actual weighted mapping cylinder and is covered by step 2.1, rather than identifying unmarked surface coordinates without a map. [F1, F2, F4, step 1.1, step 2.1, step 3.2, step 3.3, algebra]

5.1 All constructions are finite on each compact bordism. Apply them to its fixed finite component partition, tensor across disconnected objects, and use the empty scalar identity when a component or cut list is absent. Empty incoming or outgoing surfaces only remove the corresponding test or cap factors; spheres and closed components have the exact ball and $D^{-1}$ laws in [F2]. Singular linking matrices were allowed throughout and contribute only their nonzero-eigenvalue signatures. Together the preceding steps establish the full weighted symmetric monoidal RT functor, its duality and every stated factorization law on the approved scope. [F1, F2, F3, F4, F5, A1, step 3.1, step 4.1, step 4.2, algebra] ∎
