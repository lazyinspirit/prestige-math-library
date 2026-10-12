---
id: thm-constructible-six-functors-proper-base-change-and-verdier-duality
kind: theorem
title: "Constructible six functors, proper base change and normalized equivariant duality"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-compactly-supported-global-sections,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-extension-by-zero-abelian-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-sheaf-hom,
       def-sheaf-on-topological-space, def-sheaf-tensor-product,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
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

**Given:** The field $k$ of characteristic zero; the group $G$ and the
separated finite-type complex varieties with their algebraic $G$-actions; the
equivariant category $D^b_{G,c}$ and its finite resolutions; the Axiom of
Choice [[def-axiom-of-choice]]; the sheaf-operation conventions of
[[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]],
[[def-extension-by-zero-abelian-sheaf]], [[def-sheaf-tensor-product]],
[[def-sheaf-hom]], [[def-compactly-supported-global-sections]] and
[[def-derived-hom-in-the-bounded-setting]].

[F1] The ordinary six operations
([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]],
[[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]]):
on bounded algebraically constructible complexes of analytic sheaves on
separated finite-type complex varieties, the operations $f^*,Rf_*,Rf_!,f^!$,
$\otimes_k^L$ and $R\mathcal Hom$ restrict to $D_c^b$ with their three
adjunctions, coherent composition, support localization, ordinary and
extraordinary proper base change, projection formula and trace; these
comparisons commute with Cartesian pasting, with composition of maps, with
evaluation and with trace; proper maps satisfy $Rf_!=Rf_*$; and for a locally
trivial product projection the finite product cochain model computes the
pushforward of a pullback.

[F2] Ordinary normalized Verdier duality
([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]): the
dualizing object $\omega_X=a_X^!k$ and $D_X=R\mathcal Hom(-,\omega_X)$ preserve
$D_c^b$, evaluation is an isomorphism, $\omega_X\simeq k_X[2d]$ on a smooth
complex $d$-fold, and duality exchanges pushforward and compactly supported
pushforward and computes $f^!$.

[F3] The equivariant model
([[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]],
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]):
$D^b_{G,c}$ is a triangulated, locally small category with conservative
restriction to $X$, identified through the finite general linear frame
resolutions with the full bounded resolution-triple subcategories on the
associated varieties $X_N$; the comparison functors are fully faithful on
cohomological intervals of width at most $r_N$ and induce the degree-zero ring
comparison.

[A1] AC is used through the injective replacements, the ordinary six-operation
and duality suppliers of [F1] and [F2] and the finite resolutions of [F3];
the pasting and normalization comparisons below are canonical
([[def-axiom-of-choice]]).

## Proof

1.1 **Definition of the operations.** Let $f:X\to Y$ be an equivariant algebraic map of separated finite-type complex varieties with algebraic $G$-actions and let $N=(N_i)$ be a frame resolution with $N_i$ larger than all $n_i$. By [F3] the objects of $D^b_{G,c}(X;k)$ and $D^b_{G,c}(Y;k)$ in a given bounded interval are identified with resolution triples on $X_N$ and $Y_N$, and $f$ induces an algebraic map $f_N:X_N\to Y_N$ on the associated varieties, compatible with the frame resolutions through the naturality of the associated-bundle construction. Define $f^*,Rf_*$, $Rf_!$ and $f^!$ on the interval by applying the ordinary operations of [F1] to the representatives on $X_N,Y_N$ and transporting back through the fully faithful comparisons of [F3]; the definitions are independent of $N$ by the coherence clause of [F3], and the passage to bounded objects extends over the finite interval decomposition. The adjunctions $f^*\dashv Rf_*$ and $Rf_!\dashv f^!$ hold because they hold levelwise on $X_N$ by [F1] and the comparisons are fully faithful, so units and counits transfer; the tensor and internal-Hom adjunction transfers in the same way from the ordinary tensor-Hom adjunction of [F1]. This proves claim 1. [F1, F3]

2.1 **Coherence.** Composition of maps, identity comparisons, support localization, the projection formula, trace and Cartesian pasting are equations between morphisms built from unit and counit maps of the ordinary adjunctions. By [F1] these equations hold at the level of the resolution varieties, and naturality of the resolution comparisons plus their full faithfulness on the intervals means that an equation holding after transport to $X_N,Y_N$ holds in $D^b_{G,c}$; more precisely, the comparison functors are faithful on the relevant Hom groups by [F3], so the two sides of each coherence equation, which agree after transport, agree before it. Proper equality $Rf_!=Rf_*$ transfers from [F1] in the same way. This proves the first part of claim 2. [F1, F3, step 1.1]

2.2 **Normalization.** For a frame resolution $P_N=U_N\times X\to X_N$ with base $B_N$ and maps $a_{X_N}:X_N\to B_N$, $q_N:P_N\to X_N$ and $\operatorname{pr}_X:P_N\to X$, put $u_N=\dim_{\mathbb C}U_N$, $g=\dim_{\mathbb C}G$ and $s_N=\dim_{\mathbb C}B_N=u_N-g$, and define the normalized dualizing object $\omega^G_{X_N}:=\omega_{X_N}\otimes_k a_{X_N}^*\omega_{B_N}^{-1}$, the inverse taken in the tensor category of bounded constructible sheaves on $B_N$; here $B_N$ is a smooth complex $s_N$-fold, so by [F2] its dualizing object is $\omega_{B_N}\simeq k_{B_N}[2s_N]$ and $a_{X_N}^*\omega_{B_N}^{-1}\simeq k_{X_N}[-2s_N]$. Transitivity of dualizing objects for the smooth maps $\operatorname{pr}_X$ of relative dimension $u_N$ and $q_N$ of relative dimension $g$ gives $\omega_{P_N}\simeq\operatorname{pr}_X^*\omega_X[2u_N]\simeq q_N^*\omega_{X_N}[2g]$, hence $q_N^*\omega_{X_N}\simeq\operatorname{pr}_X^*\omega_X[2s_N]$ and therefore $q_N^*\omega^G_{X_N}\simeq q_N^*\omega_{X_N}[-2s_N]\simeq\operatorname{pr}_X^*\omega_X$: the normalization cancels exactly the base contribution, so $\omega^G$ restricts to the ordinary $\omega_X$ under the forgetful maps of [F3]. On a smooth complex $d$-dimensional $X$, complex orientation gives $\omega_X\simeq k_X[2d]$ by [F2], and no extra shift survives because the normalization removes exactly the base contribution: this is the exclusion of the unnormalized quotient-stack dualizing shift recorded in the Statement. This proves claim 3. [F2, F3, step 1.1]

3.1 **Dual exchange and pasting.** Verdier duality on the resolution varieties exchanges $Rf_*$ with $Rf_!$ and computes $f^!$ by [F2], and the ordinary coherent exchange identities of [F1] dualize into the extraordinary dual exchange $u^!Rf_*\simeq Rf'_*v^!$; transporting through the normalized comparison of step 2.2 and the fully faithful resolution comparisons gives the equivariant exchange, and pasting follows from the pasting clause of [F1] because both sides are canonically determined by the ordinary pasting squares. This completes claim 2. [F1, F2, F3, step 2.1, step 2.2]

4.1 **Conclusion.** Steps 1.1, 2.1, 2.2 and 3.1 prove claims 1 to 3. Every comparison is induced by the ordinary coherent structure of [F1] and the normalization of step 2.2; no unnormalized dualizing shift and no unproved base-change identity is introduced. AC enters as recorded in [A1]. [given, A1, step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- The normalizing twist is exactly the base-dimension correction
  $\omega_{X_N}\otimes a_{X_N}^*\omega_{B_N}^{-1}$; on the frame bundle the two
  base contributions cancel, so the dualizing object restricts to the ordinary
  $\omega_X$ and a smooth complex $d$-fold has $\omega_X^G\simeq k_X[2d]$.

- The statement is an assembly theorem: the load-bearing inputs are the
  ordinary coherent six-operation and duality theorems and the finite
  resolution model, and all equivariant statements are obtained by transport
  through the fully faithful resolution comparisons.
