---
id: lem-spread-out-projective-scheme-line-bundle-and-generators
kind: lemma
title: "Spread out a projective scheme, line bundle and generators away from finitely many primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-number-field
  - def-projective-morphism-pre-proj
  - def-relative-projective-space-standard-charts
  - def-ring-of-integers-of-a-number-field
  - def-separated-morphism-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-proper-morphism-closed-image
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-projective-morphism-proper
  - thm-ring-of-integers-and-ideals-are-full-lattices
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Lemma32.10.1 (Tag01ZM), finite-presentation descent and eventual equality; adapted locally to an invertible sheaf and two finite generating systems"
      url: "https://stacks.math.columbia.edu/tag/01ZM"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X$ be a projective $K$-scheme, let $\mathcal L$ be an invertible sheaf on $X$, and let $s_0,\ldots,s_r$ and $t_0,\ldots,t_m$ be two finite sets of global sections that each generate $\mathcal L$. There is a finite set $S$ of nonzero prime ideals of $\mathcal O_K$, a projective scheme $\mathcal X$ over $R=\mathcal O_K[S^{-1}]$ with generic fibre $X$, an invertible sheaf $\mathcal L_R$ on $\mathcal X$ restricting to $\mathcal L$, and extensions of both sets of sections that generate $\mathcal L_R$.

## Statement references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-projective-morphism-pre-proj]]

[[def-invertible-sheaf]]

[[def-globally-generated-sheaf]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a projective $K$-scheme $X$; an invertible sheaf $\mathcal L$; and two finite generating sets of global sections.

[A1] AC is used for projective properness below. The ring of integers $\mathcal O_K$ is Noetherian: it is a finite-rank abelian group under addition, and every ideal is a subgroup of that finitely generated abelian group. ([[def-axiom-of-choice]], [[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[thm-ring-of-integers-and-ideals-are-full-lattices]], [[def-noetherian-ring-and-module]])

[F1] Projectivity gives a closed immersion into a finite-dimensional projective space over $K$; finite homogeneous equations can be cleared of denominators, and closed subscheme formation commutes with generic-fibre base change. Polynomial algebras over $\mathcal O_K$ are Noetherian, and the resulting model is separated. ([[def-projective-morphism-pre-proj]], [[def-relative-projective-space-standard-charts]], [[def-separated-morphism-schemes]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[lem-closed-immersion-affine-quotient-and-base-change]])

[F2] The model is locally Noetherian; its coherent sheaves are finitely presented, the invertible locus is open, and kernels and cokernels of maps of coherent sheaves are coherent. ([[def-locally-noetherian-and-noetherian-scheme]], [[def-coherent-module-scheme]], [[def-invertible-sheaf]])

[F3] Projective morphisms are proper under AC, and proper morphisms are closed. ([[def-axiom-of-choice]], [[thm-projective-morphism-proper]], [[thm-proper-morphism-closed-image]], [[thm-number-field-integral-ideal-factorisation-in-zf]])

[F4] A finite set of sections generates an invertible sheaf exactly when its evaluation map is surjective. ([[def-globally-generated-sheaf]])

## Proof

1.1 By [F1], embed $X$ as a closed subscheme of $\mathbb P^q_K$. Its homogeneous ideal has finitely many generators because the polynomial ring over $K$ is Noetherian. Clear their finitely many denominators in $\mathcal O_K$ and take the resulting closed subscheme of $\mathbb P^q_{\mathcal O_K}$; its generic fibre is $X$ and it is projective over $\mathcal O_K$. [given, A1, F1, construct]

1.2 Choose a finite affine cover $U_i=\operatorname{Spec}A_i$ of the model with affine pairwise and triple intersections; separatedness gives affine intersections. On each generic fibre $U_{i,K}=\operatorname{Spec}(A_i\otimes_{\mathcal O_K}K)$, the invertible sheaf is a finitely presented module. A finite presentation has finitely many matrix entries, each with a denominator in $\mathcal O_K\setminus\{0\}$; clearing them gives a finitely presented module over $A_i$ whose localization is the given one. On each overlap, the generic transition isomorphisms and their inverses are finite module maps; clear their denominators too. Their cocycle identities hold after tensoring with $K$, so each difference is killed by some nonzero element of $\mathcal O_K$; there are finitely many maps and finitely many generators, so one localization makes all identities hold. The same finite-presentation and denominator argument extends each of the finitely many sections and their overlap compatibilities. These data glue to a coherent sheaf and sections on a localization of the model with the prescribed generic fibre. [given, A1, F1, F2, construct]

1.3 The locus where this extension is invertible is open and contains the generic fibre. The cokernel of the evaluation map from the extended finite sets of sections to the extension sheaf is coherent and vanishes on the generic fibre; its support is closed and misses the generic fibre. After the first localization write the base as $R_0=\mathcal O_K[S_0^{-1}]$. By properness and [F3], the images of both bad loci are closed subsets of $\operatorname{Spec}R_0$ missing its generic point. Each nonempty image is $V(I)$ for a nonzero ideal $I$ of $R_0$; choose $0\ne r\in I$. Every prime in the image contains $r$ and therefore lies over a prime divisor of $(r)$ in $\mathcal O_K$, of which there are finitely many by integral ideal factorization. Add those primes to $S_0$ and invert their product. On the resulting localization the extension is invertible and both evaluation maps are surjective, which is exactly that the two section sets generate it. [given, A1, F2, F3, F4, step 1.2, algebra] ∎
