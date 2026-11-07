---
id: lem-proper-scheme-over-field-etale-set-section-equalizer-in-zf
kind: lemma
title: Proper surjections over a field give an étale set-section equalizer in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-small-etale-site-of-a-scheme
  - def-proper-morphism
  - lem-projective-properness-and-finite-type-surjectivity-without-choice
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - thm-primitive-element-theorem-for-finite-separable-extensions
proof_strategy: direct
axiom_use: No ambient choice or algebraic closure is assumed; all constructions use finite algebra presentations and the supplied sheaf.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Étale Cohomology, finite morphisms
      url: https://stacks.math.columbia.edu/tag/09ZF
      locator: The source is context only; the finite-field-algebra and proper-global-functions argument below is supplied locally and does not invoke an AC-qualified geometric-point theorem.
---

## Statement

In ZF, let $k$ be a field, let $Y$ be a nonempty proper $k$-scheme, and let $F$ be a sheaf of sets on the small étale site of $\operatorname{Spec}k$. Pulling $F$ back to $Y$ and to $Y\times_kY$ gives an equalizer diagram
$$F(k)\longrightarrow\Gamma(Y,F_Y)\rightrightarrows\Gamma(Y\times_kY,F_{Y\times Y}).$$
No separable closure or family of geometric points is assumed. The result applies in particular to underlying set sheaves of abelian groups.

## Statement references

[[def-small-etale-site-of-a-scheme]]

[[def-proper-morphism]]

## Facts & Assumptions

**Given:** The field, the specified nonempty proper scheme and the specified étale set sheaf.

[F1] A proper source over a field maps properly to a separated field-scheme, and properness descends along a proper surjection to a separated finite-type target, without choice. [[lem-projective-properness-and-finite-type-surjectivity-without-choice]]

[F2] Étale maps have local standard-étale charts and are universally open in ZF. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F3] Each specified finite separable field extension has a primitive element. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[F4] The small étale site is defined by jointly surjective étale families and its sheaves satisfy their descent equalizers. [[def-small-etale-site-of-a-scheme]]

## Proof

**Proof technique:** replace geometric points by the finite étale algebra of global constants and apply ordinary finite étale sheaf descent.

1.1 Every specified quasi-compact étale $k$-scheme is a finite disjoint union of spectra of finite separable field extensions. Indeed, at each point the ZF standard chart [F2] is a localization of a finite-dimensional separable $k$-algebra. Its local factors are finite separable fields; such a point is open. Quasi-compactness retains finitely many point charts, and all these choices are finite. Conversely a finite separable field extension is standard étale by its primitive separable polynomial [F3]. [F2, F3, given, construct, algebra]

2.1 Every set sheaf on the étale site of $k$ is represented by an étale $k$-scheme, possibly an infinite disjoint union of finite separable field spectra, without selecting an algebraic closure. Form the set of all pairs $(L,s)$ with $L$ a finitely coded finite separable $k$-field and $s\in F(L)$. By [F4] and step 1.1 their representable maps jointly cover $F$. For one specified pair, choose one finite Galois splitting field $M/k$ for the finite defining polynomials and let $H$ be the finite stabilizer of the image of $s$ in $F(M)$. Finite étale sheaf descent identifies the image of $\operatorname{Spec}L\to F$ with $\operatorname{Spec}M^H$: equality of two pullbacks is tested on the finitely many factors of $M\otimes_kM$, and the fixed element descends along the finite Galois cover. These image objects are atoms: two are either disjoint or canonically identical, as their overlap is a finite étale subsheaf. Define the orbit index as the quotient of the *set of all* pairs by equality of their image subsheaves. For each orbit, its representing algebra is formed canonically from the compatible tuples in the product of all finite quotient algebras obtained from all its pairs and all their finite Galois presentations. Every comparison is the unique isomorphism representing the identical subsheaf; compatibility is an equality condition. To see the tuple algebra represents the orbit, temporarily take one specified presentation of that orbit and use its unique comparisons; no simultaneous choice of representatives for different orbits is made. The disjoint union of these canonically formed finite étale orbit schemes represents $F$. Pullback of $F$ to any $k$-scheme is represented by base change of this union. [F2, F3, F4, step 1.1, construct, algebra]

3.1 For a nonempty proper reduced finite-type $k$-scheme $Z$, its ring $A=\Gamma(Z,\mathcal O_Z)$ is a finite product of finite field extensions of $k$. First every $a\in A$ is algebraic over $k$. The map $a:Z\to\mathbb A^1_k$ is proper by [F1], hence has closed image. If $a$ were transcendental, the map $k[T]\to A$ would be injective; one of the finitely many generic points of the Noetherian reduced $Z$ would map to the generic point of $\mathbb A^1_k$, so the closed image would be all of $\mathbb A^1_k$. Proper-surjection descent in [F1] would then make $\mathbb A^1_k$ proper. This is impossible: the closed hyperbola $TX=1$ in $\mathbb A^1_T\times_k\mathbb A^1_X$ has image $D(T)$, which omits $0$ but contains the generic point. Next each generic function field $K_i$ is finitely generated over $k$. A finite transcendence basis gives a finite extension $K_i/k(t_1,\dots,t_d)$. For each finite subextension $L/k$ in its algebraic constant field, $[L:k]=[L(t_1,\dots,t_d):k(t_1,\dots,t_d)]$ is bounded by $[K_i:k(t_1,\dots,t_d)]$; hence that constant field has finite $k$-dimension, using a finite maximal linearly independent list. Reducedness embeds $A$ in the finite product of the $K_i$, and its elements lie in the finite product of their finite constant fields. Thus $A$ is finite-dimensional. A finite-dimensional reduced commutative algebra is a finite product of fields by its finite Artinian decomposition. [F1, step 2.1, given, construct, algebra]

4.1 Let $A=\prod_i L_i$ be this finite product and let $B=\prod_i E_i$, where $E_i$ is the finite separable part of $L_i/k$. The extension $L_i/E_i$ is purely inseparable and $B$ is finite étale over $k$. For any étale $k$-scheme $U$ as in step 2.1, every map $Z\to U$ is determined by finitely many clopen pieces of $Z$ and maps of their global function algebras from finite separable fields. Those maps factor uniquely through $B$: idempotents already lie in $B$, and every separable algebraic element of each $L_i$ lies in $E_i$. Hence $\Gamma(Z,F_Z)\cong F(B)$ naturally in the pullback sheaf. [F3, F4, step 2.1, step 3.1, construct, algebra]

5.1 A finite affine cover of a separated $k$-scheme has affine pairwise intersections. Computing global functions as the kernel of the finite Čech degree-zero difference and using exactness of tensor product over $k$ gives $\Gamma(Z\times_kZ,\mathcal O)\cong A\otimes_kA$. Its maximal finite étale $k$-subalgebra, characterized by maps from finite étale algebras, is $B\otimes_kB$: decompose the finite étale algebra $B\otimes_kB$ into separable field factors, then the corresponding factors of $A\otimes_kA$ have purely inseparable residue-field extensions and nilpotent kernels. Idempotents and maps from finite separable algebras lift uniquely across these nilpotents, by finite simple-root lifting. Thus step 4.1 gives $\Gamma(Z\times_kZ,F)\cong F(B\otimes_kB)$, with the two maps induced by the two embeddings of $B$. [F2, F3, step 4.1, construct, algebra]

6.1 For the given $Y$, the nilradical is nilpotent because $Y$ is Noetherian. A map from $Y_{\mathrm{red}}$ to an étale $k$-scheme lifts uniquely across this nilpotent thickening: on the standard charts of [F2], lift a simple root by the finite Newton correction and glue the unique local lifts. The same applies to $Y\times Y$. Thus sections on $Y$ and its square agree with those on $Z=Y_{\mathrm{red}}$ and $Z\times Z$. Since $Y$ is nonempty, $B$ in step 4.1 is a nonzero finite étale $k$-algebra, so $\operatorname{Spec}B\to\operatorname{Spec}k$ is a covering. The sheaf equalizer for that one finite étale cover is $F(k)\to F(B)\rightrightarrows F(B\otimes_kB)$. The identifications in steps 4.1 and 5.1 turn it into the claimed diagram. [F2, F4, step 4.1, step 5.1, given, construct, algebra] ∎
