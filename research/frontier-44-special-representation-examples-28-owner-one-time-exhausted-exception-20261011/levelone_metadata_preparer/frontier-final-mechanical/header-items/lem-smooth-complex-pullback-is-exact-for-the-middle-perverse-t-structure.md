---
id: lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure
kind: lemma
title: Smooth complex pullback is exact for the middle perverse t structure
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, def-derived-category-of-an-abelian-category, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-inverse-image-presheaf-and-sheaf, def-sheaf-hom, def-sheaf-on-topological-space, lem-analytic-constructible-sheaves-admit-coherent-six-operations, thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications, thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Astérisque 100 (1982); §1.4 recollement t-structures and §2.1 perverse sheaves on stratified spaces"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
    - title: "J. Bernstein, V. Lunts, Equivariant Sheaves and Functors, Part I §§1.4–1.8 (six operations, Verdier duality, smooth maps and smooth base change)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and let $a:X\to Y$ be a smooth algebraic map of pure relative complex dimension $d$ between separated finite-type complex varieties, over an arbitrary coefficient field $k$. Then $a^*[d]$ is exact for the ordinary middle-perverse t structures of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] on $D_c^b(-;k)$, and it commutes with their truncation and cohomology functors. Complex orientation gives $a^!=a^*[2d]$. If $a$ is surjective, its normalized pullback is conservative and reflects the perverse support and cosupport inequalities. The compatible finite stratifications used are those of [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]].

## Facts & Assumptions

**Given:** AC; a smooth algebraic map $a:X\to Y$ of pure relative complex dimension $d$ between separated finite-type complex varieties; an arbitrary coefficient field $k$; and the ordinary middle-perverse t-structures of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] on $D_c^b(-;k)$.

[F1] On $D_c^b(X;k)$ the ordinary middle-perverse t-structure is given on smooth complex strata $S$ by the upper inequality $H^q(i_S^*A)=0$ for $q>-\dim_{\mathbb C}S$ and the lower inequality $H^q(i_S^!A)=0$ for $q<-\dim_{\mathbb C}S$; it is a bounded t-structure, Verdier duality exchanges its aisles, and it is independent of the compatible finite stratification ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]).

[F2] The six operations on $D_c^b$: exactness of $a^*$, the adjunctions, coherent composition, base change, projection and trace, involutive duality exchanging the adjoints, and the smooth normalization $\omega_X=k_X[2e]$ on a smooth complex $e$-fold with $a^!=a^*[2d]$ for a smooth map of pure relative dimension $d$; coefficient extensions commute with these operations ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]).

[F3] Smooth algebraic maps admit compatible finite smooth stratifications of source and target: finitely many source and target strata such that each source stratum maps surjectively and smoothly onto one target stratum, with analytic strata smooth complex manifolds and the restrictions smooth submersions; the whole restriction over a target stratum is proper when the map itself is proper ([[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]]).

[F4] Inverse image is exact and commutes with shifts; extension by zero, reverse and direct image have their stated exactness and stalk behaviour; the derived Hom conventions are those of [[def-derived-category-of-an-abelian-category]], [[def-sheaf-hom]] and the definitions of [[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[def-extension-by-zero-abelian-sheaf]], [[def-sheaf-on-topological-space]].

## Proof

**Proof technique:** direct.

1.1 Preservation of the upper aisle. Let $S\subseteq Y$ be a smooth target stratum of complex dimension $e$ and let $T\subseteq a^{-1}(S)$ be a smooth source stratum mapping smoothly onto $S$; by [F3] the nonempty such $T$ have complex dimension $e+d$, and the restriction $a|_T:T\to S$ is a submersion of smooth complex manifolds of relative dimension $d$. Exact inverse image gives $H^q(a^*A[d])=a^*H^{q+d}(A)$ on these strata. For $A$ in the upper middle-perverse aisle of $D_c^b(Y;k)$, the right-hand side vanishes on the preimage strata whenever $q+d>-e$, precisely when $q>-(e+d)$, which is exactly the upper inequality of [F1] at the source stratum $T$. Since the compatible stratifications of [F3] can be chosen subordinate to any prescribed finite collection and the resulting inequality is checkable on the smooth strata, this proves preservation of the upper aisle. [given, F1, F2, F3, F4]

2.1 Preservation of the lower aisle. The ordinary six-operation construction [F2] gives $D_Xa^*\cong a^!D_Y$ and the complex-orientation normalization $a^!\cong a^*[2d]$, where the relative dimension is $d$. Consequently $D_X(a^*A[d])\cong a^*D_YA[d]$. The ordinary middle-perverse core of [F1] identifies the lower aisle as the duality image of the upper aisle, and both the duality exchange of [F1] and the pullback comparison of [F2] are used here, so the first step proves preservation of the lower aisle as well. The orientation unit is nonzero over every field, exact finite-dimensional duality is field-general, and $[2d]$ is a cohomological shift rather than a scalar inversion; thus the support-and-duality argument applies to arbitrary $k$. [given, F1, F2, step 1.1]

3.1 Truncation, cohomology and reflection. Applying the t-exact functor $a^*[d]$ of steps 1.1 and 2.1 to a truncation triangle produces the unique target truncation triangle, proving that it commutes with perverse truncation and perverse cohomology. If $a$ is surjective, inverse image is stalkwise conservative and reflects ordinary cohomological vanishings; applying the same dimension calculation as in step 1.1 to the support and dual support inequalities reflects both perverse inequalities. The dimension count is the same over every field, and no characteristic hypothesis enters, so the stated conservativity and reflection hold for arbitrary $k$. [given, F1, F2, F3, step 1.1] ∎
