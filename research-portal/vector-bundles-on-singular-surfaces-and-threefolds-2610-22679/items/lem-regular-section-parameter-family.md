---
id: lem-regular-section-parameter-family
kind: lemma
title: Finite-dimensional families of generated bundle functionals
status: published
domain: mathematics
deps:
  - lem-surjection-kernel-bundle
  - def-unimodular-sections
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-affine-scheme
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:def-pullback-module-ringed-spaces
  - math:ex-pullback-free-module
  - math:def-sheaf-hom
  - math:lem-quotient-spectrum-map-is-a-closed-immersion
  - math:def-closed-immersion-schemes
  - math:thm-gluing-affine-schemes
  - math:lem-spectrum-localization-open-immersion
  - math:thm-localisation-commutes-with-quotients
  - math:thm-sections-basic-open-affine-scheme
  - math:def-kernel-cokernel-image-sheaves
  - math:def-scheme-theoretic-inverse-image-subscheme
  - math:thm-morphisms-into-affine-scheme-global-sections
  - math:thm-universal-property-of-a-polynomial-ring-on-a-family
  - math:def-fibre-of-module-at-point
  - math:prop-functoriality-of-module-tensor-products
dependency_roles:
  lem-surjection-kernel-bundle: mathematical-premise
  def-unimodular-sections: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:ex-pullback-free-module: mathematical-premise
  math:def-sheaf-hom: mathematical-premise
  math:lem-quotient-spectrum-map-is-a-closed-immersion: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:thm-gluing-affine-schemes: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:thm-localisation-commutes-with-quotients: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:def-scheme-theoretic-inverse-image-subscheme: mathematical-premise
  math:thm-morphisms-into-affine-scheme-global-sections: mathematical-premise
  math:thm-universal-property-of-a-polynomial-ring-on-a-family: mathematical-premise
  math:def-fibre-of-module-at-point: mathematical-premise
  math:prop-functoriality-of-module-tensor-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Let $k$ be a field, $U$ a $k$-scheme, and $E$ a vector bundle of constant rank $r$ on $U$. Write $E^\vee=\mathcal Hom_{\mathcal O_U}(E,\mathcal O_U)$, and suppose that global sections $\phi_1,\ldots,\phi_m$ generate $E^\vee$, meaning that the morphism $q:\mathcal O_U^m\to E^\vee$ sending the standard basis to these sections is surjective. Here $m$ and $r$ may be zero.

The affine parameter space $\mathbb A_k^m=\operatorname{Spec}k[T_1,\ldots,T_m]$ carries a universal functional $\Phi=\sum_i T_i\phi_i$ on the pullback of $E$ to $U\times_k\mathbb A_k^m$. Its zero-incidence subscheme $I$ is the closed subscheme defined locally by the coefficients of $\Phi$ in a frame of $E^\vee$. For every point $u\in U$, evaluation gives a surjective linear map $\kappa(u)^m\to E^\vee\otimes_{\mathcal O_U}\kappa(u)$, and this remains surjective after any field extension of $\kappa(u)$.

For every closed subscheme $Z\hookrightarrow U$, the incidence subscheme constructed from the restricted sections on $Z$ is canonically $I\times_U Z$, viewed as a closed subscheme of $Z\times_k\mathbb A_k^m$. More generally, for any $k$-scheme $T$ and any $T$-valued parameter $(a_1,\ldots,a_m)$, the pullback of $I$ to $U\times_k T$ is the zero subscheme of the functional $\sum_i a_i\phi_i$.

## Statement references
[[lem-surjection-kernel-bundle]]

[[def-unimodular-sections]]

## Facts & Assumptions
**Given:** The field $k$, the $k$-scheme $U$, the rank-$r$ vector bundle $E$, and the surjective generating map $q$ in the statement. A $k$-scheme is a scheme with a specified morphism to $\operatorname{Spec}k$; all parameter morphisms are over $k$.

**Goal:** Construct the universal zero-incidence subscheme, prove fiberwise surjectivity of evaluation, and identify its base changes.

[F1] A vector bundle is a finite locally free module; its dual is the sheaf of homomorphisms to the structure sheaf, and a functional is a section of that dual. Only these scheme-local definitions from [[def-unimodular-sections]] are used, not its Choice-dependent affine module correspondence.

[F2] A surjective morphism between finite locally free sheaves splits locally. [[lem-surjection-kernel-bundle]]

[F3] A scheme is locally an affine scheme, whose coordinate ring is its ring of global functions; scheme morphisms are morphisms of locally ringed spaces. [[math:def-scheme]] [[math:def-affine-scheme]] [[math:def-morphism-of-schemes]]

[F4] Scheme fiber products exist and represent compatible pairs of morphisms. Their projections define base change. [[math:def-fibre-product-schemes-universal-property]] [[math:thm-fibre-products-of-schemes-exist]]

[F5] Pullback is $f^*M=\mathcal O_{X'}\otimes_{f^{-1}\mathcal O_X}f^{-1}M$ for $f:X'\to X$, and takes a finite free module to the corresponding finite free module. Internal Hom has sections the module-sheaf morphisms on each open set. [[math:def-pullback-module-ringed-spaces]] [[math:ex-pullback-free-module]] [[math:def-sheaf-hom]]

[F6] The quotient spectrum $\operatorname{Spec}(A/J)\to\operatorname{Spec}A$ is a closed immersion without a choice principle. A closed immersion means a homeomorphism onto a closed subset with surjective structure-sheaf map. Affine schemes glue along compatible open isomorphisms. Distinguished opens are localization spectra, their function restrictions are localization maps, and localization commutes with quotient rings. [[math:lem-quotient-spectrum-map-is-a-closed-immersion]] [[math:def-closed-immersion-schemes]] [[math:thm-gluing-affine-schemes]] [[math:lem-spectrum-localization-open-immersion]] [[math:thm-sections-basic-open-affine-scheme]] [[math:thm-localisation-commutes-with-quotients]]

[F7] The image sheaf of a module-sheaf morphism is the sheafification of its sectionwise image. The scheme-theoretic inverse image of a closed subscheme under $f$ is its fiber product, a closed subscheme with ideal $\operatorname{im}(f^*\mathcal J\to\mathcal O_{X'})$. [[math:def-kernel-cokernel-image-sheaves]] [[math:def-scheme-theoretic-inverse-image-subscheme]]

[F8] Morphisms from any scheme $T$ to $\operatorname{Spec}A$ correspond naturally to ring maps $A\to\Gamma(T,\mathcal O_T)$. A coefficient-ring map and prescribed images of the indeterminates determine a unique map from the polynomial ring, also for the empty family. [[math:thm-morphisms-into-affine-scheme-global-sections]] [[math:thm-universal-property-of-a-polynomial-ring-on-a-family]]

[F9] The fiber of $M$ at $u$ is $M_u\otimes_{\mathcal O_{U,u}}\kappa(u)$, where $\kappa(u)=\mathcal O_{U,u}/\mathfrak m_u$. Tensoring module maps preserves composition and identities, hence preserves a displayed right-inverse identity. [[math:def-fibre-of-module-at-point]] [[math:prop-functoriality-of-module-tensor-products]]

## Proof
**Proof technique:** Use local frames, affine quotient charts and the locally split generating map.

1.1 By [F3] and [F4], form $X=U\times_k\mathbb A_k^m$ with projection $p:X\to U$. Pulling a frame of $E$ and its dual back gives dual free frames by [F5]; evaluation on these frames identifies $p^*(E^\vee)$ with $(p^*E)^\vee$. Thus the functions $T_i$ and pulled-back sections define $\Phi=\sum_i T_i p^*\phi_i:p^*E\to\mathcal O_X$. Cover $X$ by affine opens $V=\operatorname{Spec}A$ inside these frame charts and write the coefficients as $f_1,\ldots,f_r\in A$. Put $J_V=(f_1,\ldots,f_r)$ and use the closed immersion $\operatorname{Spec}(A/J_V)\to V$ of [F6]. On distinguished opens these quotient charts restrict to the quotients by the restricted coefficients, because localization commutes with quotients. On overlaps a change of frame multiplies the coefficient vector by an invertible matrix, so the generated ideal sheaves agree; after affine distinguished-open refinements the quotient identifications are the identity modulo that same ideal. They therefore satisfy the identity and cocycle conditions and glue by [F6] to a scheme $I$ over $X$. Its image is locally $V(J_V)$, hence closed, and its structure-sheaf map is locally surjective, so [F6] makes $I\to X$ a closed immersion. Its ideal sheaf is exactly $\operatorname{im}\Phi$ by [F7], since both are locally the sheaf generated by the $f_j$. For rank zero the coefficient list is empty, $J_V=0$, and $I=X$. [F1, F3, F4, F5, F6, F7, given, construct]

1.2 By [F2], $q$ has a right inverse on a neighbourhood of each $u\in U$. Take stalks and tensor this identity with $\kappa(u)$ using [F9]. In local free coordinates the resulting maps have the same matrices with coefficients reduced to $\kappa(u)$, so their composite is the identity and the evaluation map $\kappa(u)^m\to E^\vee_u\otimes_{\mathcal O_{U,u}}\kappa(u)$ is surjective. Tensoring the right-inverse identity with any extension field of $\kappa(u)$ again preserves it by [F9], proving the field-extension assertion. This also covers zero ranks and empty schemes. [F1, F2, F9, given]

2.1 By [F8] and its naturality for the structure map to $\operatorname{Spec}k$, a $k$-morphism $a:T\to\mathbb A_k^m$ is equivalent to a tuple $a_i\in\Gamma(T,\mathcal O_T)$: the corresponding $k$-algebra map sends $T_i$ to $a_i$. Here and in the statement, these are the $T$-valued parameters. By [F4], $a$ induces $\operatorname{id}_U\times a:U\times_k T\to X$. Pulling back the local coefficient expressions of step 1.1 substitutes the pullbacks of $a_i$ for $T_i$. By [F7], the inverse-image ideal is generated locally by precisely these coefficients; it is consequently the zero-locus ideal sheaf of the functional $\sum_i a_i\phi_i$, where both factors are pulled back to $U\times_k T$. Thus the scheme-theoretic pullback is the asserted zero subscheme. For $m=0$ there is a unique empty tuple and the same argument applies. [F4, F5, F7, F8, step 1.1, given, algebra]

3.1 For a closed subscheme $Z\hookrightarrow U$, write $E|_Z$ and $E^\vee|_Z$ for their module pullbacks. Pulling back a frame and its dual by [F5] gives the canonical identification $E^\vee|_Z\cong(E|_Z)^\vee$: both sides have the corresponding dual basis, and evaluation makes these identifications agree under changes of frame. The same right-inverse argument as in step 1.2, or its local matrices pulled back to $Z$, shows that the restricted sections still generate. By [F7], pulling the coefficient ideal of step 1.1 back to $Z\times_k\mathbb A_k^m$ gives exactly the zero-locus ideal of those restricted sections. This inverse image is canonically $I\times_U Z$: both schemes represent a point of $I$ together with a point of $Z$ having the same image in $U$, by [F4]. Together with steps 1.1 through 2.1 this proves all the assertions. [F1, F4, F5, F7, step 1.1, step 1.2, step 2.1] ∎

## Remarks
This construction alone does not assert smoothness, irreducibility, codimension, or avoidance for any parameter. Generation of $E$ does not by itself supply the assumed generation of $E^\vee$.
