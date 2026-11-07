---
id: lem-mixed-euler-component-and-birational-projection-formulas-in-zf
kind: lemma
title: Mixed Euler component and birational projection formulas without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - cor-noether-normalisation-module-finiteness
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; normalization presentations, finite-dimensional algebra filtrations, coherent devissage and universal section parameter lists are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Numerical intersections
      url: https://stacks.math.columbia.edu/tag/0BEL
      locator: Component and birational numerical conventions; finite proof supplied here, not imported.
---

## Statement

Work in ZF over any field $k$. For a projective scheme $X/k$, a coherent sheaf $G$ of support dimension at most $d$ and line bundles $L_1,\ldots,L_d$, let $J_G$ be their mixed Euler difference. The reduced $d$-dimensional components $V$ of $\operatorname{Supp}G$ form a finite set, their generic stalks have finite lengths $m_V$, and
$$J_G(L_1,\ldots,L_d)=\sum_Vm_VJ_{O_V}(L_1|_V,\ldots,L_d|_V).$$
Lower-dimensional and embedded supports contribute zero. For a projective birational morphism $f:W\to V$ of integral projective $k$-schemes of dimension $d$ and any line bundles $L_1,\ldots,L_d$ on $V$,
$$J_{O_W}(f^*L_1,\ldots,f^*L_d)=J_{O_V}(L_1,\ldots,L_d).$$
This includes finite normalization, without assuming normality or smoothness. The proof also supplies finiteness of the minimal primes of a finite-type algebra over a field directly in ZF; no arbitrary Noetherian-ring prime decomposition principle or higher direct-image theorem is used.

## Facts & Assumptions

**Given:** The projective finite presentations, coherent sheaf and dimension bound, finite line-bundle list and specified birational morphism in the Statement.

[F1] Mixed Euler differences vanish above support dimension, are additive on coherent exact sequences, are top-degree twist invariant and tensor multilinear, and commute with field extension. A globally generated bundle admits an injective universal-parameter section on any coherent module, with support drop by one. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F2] Finite coherent projective Cech cohomology and Euler characteristic exist over every field; coherent large twists are finitely globally generated and have finite homogeneous presentations. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F3] Every nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

[F4] Finite-variable polynomial rings over fields are Noetherian by finite generators, without Choice. [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]

## Proof

1.1 We construct a finite prime list covering every prime of any finite-type $k$-algebra $A$. For $A=0$ the list is empty. Otherwise use [F3] to make $A$ finite over an injected polynomial ring $R=k[z_1,\ldots,z_e]$, and induct on $e$. The $R$-torsion ideal $T$ of $A$ is finite by [F4] and the finite-module coordinate-ideal induction, so a single nonzero $h\in R$ kills $T$. The ring $A/T$ is $R$-torsion-free, and its generic algebra over $F=\operatorname{Frac}R$ is finite-dimensional and nonzero. Every finite-dimensional commutative algebra has a finite list of maximal ideals whose product is zero: construct a composition filtration of its regular module, at each step taking a proper submodule with quotient of least positive dimension. The simple factors are fields, their annihilators are maximal ideals, and their product kills the regular module. This is a finite induction bounded by vector-space dimension. Contract these finitely many ideals to $A$, obtaining primes $p_i$ containing $T$. Their product is contained in $T$, because its image is zero generically and $A/T$ is torsion-free. Thus a prime containing $T$ contains some $p_i$. A prime not containing $T$ contains $h$, since $hT=0$. If $A/(h)=0$ there is no second case. Otherwise it is finite over $R/(h)$ and admits a polynomial normalization with at most $e-1$ variables. To check the bound, localize that normalization at its generic point and take a finite-dimensional field quotient; its transcendence degree is its number of variables, while integrality over the image of $R/(h)$ bounds it by $e-1$. The induction hypothesis gives finitely many primes covering every prime of $A/(h)$. Their lifts together with the $p_i$ cover every prime of $A$. At $e=0$ there is only the finite-dimensional algebra construction. Remove from this finite list each prime strictly containing another listed prime. The remaining primes are exactly the minimal primes: any smaller prime would itself contain a listed prime, contradicting minimality in the list. This proves finite minimal-prime decomposition without a recursively selected infinite chain. It applies as well to each quotient defining a coherent support on a finite affine cover. [F3, F4, given, construct, algebra]

2.1 The $d$-dimensional components in the Statement are therefore finite. At their generic points $G$ has finite length. To justify the local nilpotence directly, a nonnilpotent element of a finite-type support algebra is excluded by a prime: invert that element and take the finite-dimensional field quotient furnished by [F3]. Its nilradical is therefore the intersection of its finitely many minimal primes from step 1.1. That radical is finitely generated and nilpotent, because its finite generators are nilpotent. At a component generic point all the other minimal primes become unit ideals, so the localized support quotient has a nilpotent maximal ideal. The local ring is thus Artinian, and the finite module has a finite socle filtration. For a component $V$, choose one nonzero vector in a one-dimensional residue-field subspace of the socle of $G_{\eta_V}$. It gives a nonzero generic section of the coherent sheaf $\operatorname{Hom}(O_V,G)$, whose local presentations are kernels of finite matrices. The finite presentation and large-twist construction [F2] extends a nonzero such generic vector after twisting: a finite global generating family of that Hom sheaf has a member nonzero at $\eta_V$. It defines a map $O_V(-a)\to G$ generically injective. This map is injective everywhere, since its source is an invertible sheaf on integral $V$ and has no nonzero generic-zero subsheaf. The quotient lowers $m_V$ by one and does not change the generic lengths at other $d$-dimensional components. Repeat a finite number of times, at most the sum of the original $m_V$. The final quotient has support dimension less than $d$. [F2, F3, step 1.1, construct, algebra]

3.1 Apply exact-sequence additivity [F1] to that finite filtration. The final lower-dimensional quotient has zero $d$-fold difference. Every term $O_V(-a)$ has the same top difference as $O_V$ by twist invariance [F1]. A coherent sheaf on a closed subscheme and its direct chart presentation on $X$ have identical finite affine Cech complexes, so these Euler numbers are those intrinsic to $V$. Counting the terms at each component proves the displayed formula, including nonreduced generic multiplicities and all embedded lower-dimensional supports. For $d=0$, the filtration is the finite local-length filtration itself, with its residue-field degrees in $\chi(O_V)$. [F1, step 2.1, algebra]

4.1 A birational $f:W\to V$ is an isomorphism over some dense open $U\subseteq V$. Indeed its rational inverse is given by finitely many rational functions on affine neighbourhoods of the generic points; shrink their denominators to obtain a morphism $U\to W$. The two composites are the identity by generic agreement into separated targets, and the same argument on integral $f^{-1}U$ proves the inverse identities there. The complements $Z=V\setminus U$ and $Z'=W\setminus f^{-1}U$ are proper closed subsets and have dimension less than $d$. This follows from the finite-type strict transcendence-degree drop established by polynomial normalization in [F1]. Suppose for now the $L_i$ are globally generated. At each of $d$ stages take the same universal section of $L_i$ on $V$ and its pullback on $W$, using a fresh finite independent parameter group. The monic-polynomial argument of [F1] gives injection simultaneously on the successive coherent quotients starting from $O_V,O_W,O_Z,O_{Z'}$; it is the same finite family of generating sections and works on all four data. Their support dimensions drop at each step. After $d$ stages the latter two are zero. They are the restrictions of the first two quotients to the closed complements, since each successive cokernel is quotient by the same section. Finite local Nakayama then makes those quotients zero at every point of the complements. The final zero-dimensional quotients on $V,W$ are therefore supported in $U,f^{-1}U$, where they coincide under the isomorphism. In particular their finite Euler lengths agree. [F1, step 1.1, construct, algebra]

5.1 The successive exact universal-section sequences identify those two Euler lengths with the mixed differences on $V$ and $W$ over the prescribed finite parameter extension. This construction is exactly the generated-entry construction of [F1], and its Euler values descend unchanged to $k$. Hence the birational formula holds for globally generated entries. For an arbitrary $L_i$, choose a large $a_i$ for which $L_i(a_i)$ and $O(a_i)$ are globally generated by [F2], and write $L_i=L_i(a_i)\otimes O(a_i)^{-1}$. Top tensor multilinearity [F1] expands both sides into the same finite signed sum of generated-entry comparisons. Pullback preserves global generation and tensor products by pulling back the finite generating sections. The generated comparisons just proved therefore give the formula for the original arbitrary line bundles. No coherence of $R^if_*O_W$ or projection theorem for derived pushforwards was required. [F1, F2, step 4.1, algebra]

6.1 If $f$ is the finite normalization of an integral projective scheme, it is a projective birational morphism whenever that normalization is supplied as a finite projective model, so step 5.1 applies verbatim. No additional normality assumption on source or target was used in steps 4.1–5.1. The identity map and dimension-zero case give the same equality directly; proper closed complements are empty in the integral dimension-zero case. Empty component lists give zero in step 3.1. These formulas supply the exact component and birational numerical layers needed for model-mass and refinement computations, without replacing the separately missing general mixed-nef positivity or continuous metric constructions. [step 3.1, step 4.1, step 5.1, algebra] ∎
