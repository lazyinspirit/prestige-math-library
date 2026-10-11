---
id: thm-constructible-six-functors-proper-base-change-and-verdier-duality
kind: theorem
title: "Constructible six functors, proper base change and normalized equivariant duality"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [lem-complex-algebraic-stratifications-have-finite-conical-cochain-models, def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-compactly-supported-global-sections,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-extension-by-zero-abelian-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-sheaf-hom,
       def-sheaf-on-topological-space, def-sheaf-tensor-product,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       lem-analytic-six-operation-support-and-trace-calculus,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       thm-verdier-duality-on-oriented-stratified-complex-varieties]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "3.1-3.6 (functors on smooth resolutions, adjunctions, base change, composition, projection and trace, equivariant Verdier duality, constructible sheaves); 1.6.1-1.6.3 (dualizing object and Verdier duality)"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "1.4.1-1.4.10 (localization triangles and duality exchange)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), that $k$ has
characteristic zero, and that a finite product
$G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ of complex general linear groups
acts algebraically on separated finite-type complex varieties
([[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]).
For equivariant algebraic maps between such varieties, the coherent ordinary
six-operation contract holds in the equivariant bounded constructible category
$D^b_{G,c}$:

1. the functors $f^*,Rf_*,Rf_!,f^!$ are defined on $D^b_{G,c}$, with
   $f^*\dashv Rf_*$, $Rf_!\dashv f^!$, and the tensor and internal-Hom
   adjunction $\otimes_k^L\dashv R\mathcal Hom$;
2. composition and identity comparisons, support localization, the projection
   formula and the trace hold, and for a Cartesian square with $f:X\to Y$,
   $u:Y'\to Y$, $v:X'\to X$ and $f':X'\to Y'$ the exchange
   $u^*Rf_!\simeq Rf'_!v^*$ and its dual mate $u^!Rf_*\simeq Rf'_*v^!$ obey
   Cartesian pasting; proper $f$ satisfies $Rf_!=Rf_*$;
3. the normalized dualizing object $\omega^G$ restricts to the ordinary
   $\omega_X$ of [[thm-verdier-duality-on-oriented-stratified-complex-varieties]],
   and for a smooth complex $d$-dimensional $X$ one has
   $\omega_X^G\simeq k_X[2d]$; this is not the unnormalized quotient-stack
   dualizing shift.

## Facts & Assumptions

**Given:** The field $k$ of characteristic zero; the group $G$ and the separated finite-type complex varieties with their algebraic $G$-actions; the equivariant category $D^b_{G,c}$ and its finite resolutions; the Axiom of Choice [[def-axiom-of-choice]]; the sheaf-operation conventions of [[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[def-extension-by-zero-abelian-sheaf]], [[def-sheaf-tensor-product]], [[def-sheaf-hom]], [[def-compactly-supported-global-sections]] and [[def-derived-hom-in-the-bounded-setting]].

[F1] The ordinary six operations ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]]): on bounded algebraically constructible complexes of analytic sheaves on separated finite-type complex varieties, the operations $f^*,Rf_*,Rf_!,f^!$, $\otimes_k^L$ and $R\mathcal Hom$ restrict to $D_c^b$ with their three adjunctions, coherent composition, support localization, ordinary and extraordinary proper base change, projection formula and trace; these comparisons commute with Cartesian pasting, with composition of maps, with evaluation and with trace; proper maps satisfy $Rf_!=Rf_*$; and for a locally trivial product projection the finite product cochain model computes the pushforward of a pullback.

[F2] Ordinary normalized Verdier duality ([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]): the dualizing object $\omega_X=a_X^!k$ and $D_X=R\mathcal Hom(-,\omega_X)$ preserve $D_c^b$, evaluation is an isomorphism, $\omega_X\simeq k_X[2d]$ on a smooth complex $d$-fold, and duality exchanges pushforward and compactly supported pushforward and computes $f^!$.

[F3] The equivariant model ([[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]], [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]): $D^b_{G,c}$ is a triangulated, locally small category with conservative restriction to $X$, identified through the finite general linear frame resolutions with the full bounded resolution-triple subcategories on the associated varieties $X_N$; the comparison functors are fully faithful on cohomological intervals of width at most $r_N$ and induce the degree-zero ring comparison.

[F4] The finite conical supplier [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] constructs open-projective graph factorizations on quasi-projective pieces and finite affine-open descent for a general separated finite-type map (Proof, steps 6.1–7.1). Combined with the open-inclusion smooth exchange and proper base change of [F1], this supplies smooth base change for arbitrary maps here, by the argument in step 1.1 below.

[F5] General proper-support exchange ([[lem-analytic-six-operation-support-and-trace-calculus]]): for a Cartesian square of locally compact Hausdorff spaces with the uniform finite fibre-dimension bounds, $u^*Rf_!\simeq Rf'_!v^*$ without a properness assumption on $f$, and these canonical exchange maps respect Cartesian pasting. The analytic spaces and algebraic maps here satisfy these hypotheses: finite-dimensional local algebraic models give locally compact Hausdorff spaces and a uniform finite bound on the cohomological dimensions of all opens in their fibres.

[A1] AC is used through the injective replacements, the ordinary six-operation and duality suppliers of [F1] and [F2] and the finite resolutions of [F3]; the pasting and normalization comparisons below are canonical ([[def-axiom-of-choice]]).

## Proof

1.1 **Smooth comparison and image preservation.** On each quasi-projective source piece over an affine target, [F4] factors the map as an open inclusion into its graph closure in $\mathbb P^n\times Y$, followed by proper projection. The open-inclusion smooth exchange of [F1] followed by proper base change gives smooth exchange for $Rf_*$ on this piece. A finite affine source cover and its intersections compute ordinary pushforward by finite open-cover derived descent [F4]; smooth inverse image is exact, so the piece comparisons give the canonical smooth exchange for the general map. The comparison respects composition because its maps are the ordinary units and base-change maps. Proper-support exchange for arbitrary maps is [F5]; smooth exchange for tensor, internal Hom and normalized duality follows locally by adjoining a contractible smooth ball to their finite cochain models. For a fixed frame resolution, write $D^N_X=R\mathcal Hom(-,\omega_{X_N}[-2s_N])$. Smooth orientation gives $q_N^*D^N_XQ_N(A)\cong\operatorname{pr}_X^*D_XA_X$, since smooth orientation gives $q_N^*\omega_{X_N}=\operatorname{pr}_X^*\omega_X[2s_N]$ and both dualizing shifts cancel the dimensions $u_N=g+s_N$. The smooth comparison for the square formed by $q_N$, $f_N$ and $\mathrm{id}_{U_N}\times f$, followed by the product projection to $f$, therefore gives $q_N^*Rf_{N*}Q_N(A)\cong\operatorname{pr}_Y^*Rf_*A_X$ and likewise for $Rf_{N!}$. Inverse image and tensor have this comparison directly; internal Hom has it by its smooth comparison; $f_N^!=D^N_Xf_N^*D^N_Y$ has it by duality. Thus every ordinary operation on the resolution representatives satisfies the frame-pullback image criterion [F3], with an ordinary bounded constructible object downstairs. Its unshifted cohomological amplitude equals the downstairs amplitude, because both $q_N^*$ and $\operatorname{pr}_X^*$ are exact and conservative. These are bounds independent of $N$. [F1, F2, F3, F4, F5]

2.1 **Transport of operations and adjunctions.** For each fixed finite collection of inputs, outputs and adjunction maps, choose $N$ whose gap exceeds the widths of their unshifted ordinary amplitudes and the finitely many Hom comparison bounds. By step 1.1 all the ordinary resolution operations lie in the finite-resolution image, so [F3] transports them to $D^b_{G,c}$. On a common product resolution the smooth comparisons identify the two constructions canonically; their coherence gives the cocycle on triple products, hence independence of the choice of $N$. Every bounded input is treated this way; no decomposition of an object into its cohomology sheaves is assumed. The ordinary adjunction Hom bijections, their units and counits, transport through the fully faithful comparisons. Naturality and the triangle identities are equations of these maps and are reflected by a sufficiently large faithful comparison. This proves $f^*\dashv Rf_*$, $Rf_!\dashv f^!$ and the tensor/internal-Hom adjunction on the actual bounded equivariant category. [F1, F3, step 1.1]

3.1 **Coherence.** Composition of maps, identity comparisons, support localization, the projection formula, trace and Cartesian pasting are equations between morphisms built from unit and counit maps of the ordinary adjunctions. By [F1] these equations hold at the level of the resolution varieties, and naturality of the resolution comparisons plus their full faithfulness on the intervals means that an equation holding after transport to $X_N,Y_N$ holds in $D^b_{G,c}$; more precisely, the comparison functors are faithful on the relevant Hom groups by [F3], so the two sides of each coherence equation, which agree after transport, agree before it. The general proper-support exchange and its pasting transfer from [F5] in the same way; proper equality $Rf_!=Rf_*$ transfers from [F1]. This proves the first part of claim 2. [F1, F3, F5, step 2.1]

3.2 **Normalization.** For a frame resolution $P_N=U_N\times X\to X_N$ with base $B_N$ and maps $a_{X_N}:X_N\to B_N$, $q_N:P_N\to X_N$ and $\operatorname{pr}_X:P_N\to X$, put $u_N=\dim_{\mathbb C}U_N$, $g=\dim_{\mathbb C}G$ and $s_N=\dim_{\mathbb C}B_N=u_N-g$, and define the normalized dualizing object $\omega^G_{X_N}:=\omega_{X_N}\otimes_k a_{X_N}^*\omega_{B_N}^{-1}$, the inverse taken in the tensor category of bounded constructible sheaves on $B_N$; here $B_N$ is a smooth complex $s_N$-fold, so by [F2] its dualizing object is $\omega_{B_N}\simeq k_{B_N}[2s_N]$ and $a_{X_N}^*\omega_{B_N}^{-1}\simeq k_{X_N}[-2s_N]$. Transitivity of dualizing objects for the smooth maps $\operatorname{pr}_X$ of relative dimension $u_N$ and $q_N$ of relative dimension $g$ gives $\omega_{P_N}\simeq\operatorname{pr}_X^*\omega_X[2u_N]\simeq q_N^*\omega_{X_N}[2g]$, hence $q_N^*\omega_{X_N}\simeq\operatorname{pr}_X^*\omega_X[2s_N]$ and therefore $q_N^*\omega^G_{X_N}\simeq q_N^*\omega_{X_N}[-2s_N]\simeq\operatorname{pr}_X^*\omega_X$: the normalization cancels exactly the base contribution, so $\omega^G$ restricts to the ordinary $\omega_X$ under the forgetful maps of [F3]. On a smooth complex $d$-dimensional $X$, complex orientation gives $\omega_X\simeq k_X[2d]$ by [F2], and no extra shift survives because the normalization removes exactly the base contribution: this is the exclusion of the unnormalized quotient-stack dualizing shift recorded in the Statement. This proves claim 3. [F2, F3, step 2.1]

4.1 **Dual exchange and pasting.** On a resolution over the common base $B_N$, let $D^N_T=R\mathcal Hom(-,\omega_{T_N}[-2s_N])$ for each corner $T$. The common shift preserves involutivity and the ordinary duality identities [F2]. Applying [F5] to $D^N_XA$ and then dualizing gives $D^N_{Y'}u^*Rf_!D^N_XA\simeq D^N_{Y'}Rf'_!v^*D^N_XA$, whose two sides are $u^!Rf_*A$ and $Rf'_*v^!A$ respectively. Thus the extraordinary exchange holds for arbitrary $f$, rather than only proper $f$. Transport through the normalized comparison of step 3.2 and the fully faithful resolution comparisons gives the equivariant exchange. Duality carries the pasting identities of [F5] to the dual pasting identities, so these comparisons have the required coherence. This completes claim 2. [F2, F3, F5, step 3.1, step 3.2]

5.1 **Conclusion.** Steps 1.1, 2.1, 3.1, 3.2 and 4.1 prove claims 1 to 3. Every comparison is induced by the ordinary coherent structure of [F1] and [F5] and the normalization of step 3.2; no unnormalized dualizing shift and no unproved base-change identity is introduced. AC enters as recorded in [A1]. [given, A1, F5, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- The normalizing twist is exactly the base-dimension correction $\omega_{X_N}\otimes a_{X_N}^*\omega_{B_N}^{-1}$; on the frame bundle the two base contributions cancel, so the dualizing object restricts to the ordinary $\omega_X$ and a smooth complex $d$-fold has $\omega_X^G\simeq k_X[2d]$.

- The statement is an assembly theorem: the load-bearing inputs are the ordinary coherent six-operation and duality theorems and the finite resolution model, and all equivariant statements are obtained by transport through the fully faithful resolution comparisons.
