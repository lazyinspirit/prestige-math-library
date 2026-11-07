---
dependency_level: 2
id: lem-polarization-projectors-and-chow-descent-of-abelian-subvarieties
kind: lemma
title: Polarization projectors, Chow descent and finite dual kernels
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- lem-abelian-homomorphisms-descend-over-regular-and-purely-inseparable-extensions
- thm-abelian-variety-dual-and-polarization
- thm-abelian-variety-is-projective
- lem-arith-finite-cartier-duality-and-exactness
- thm-nonaffine-group-scheme-normal-subgroup-quotient
- lem-nonaffine-group-monomorphism-closed-immersion
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
- lem-proper-source-to-separated-target-proper
- thm-proper-quasi-finite-is-finite
- thm-existence-of-algebraic-closures
- lem-very-ample-implies-ample
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Conrad, Corollaries 3.20–3.21 and duality comparisons
    url: https://math.stanford.edu/~conrad/papers/Kktrace.pdf
---

## Statement

Assume AC and DC. The following statements hold.

(a) For an abelian subvariety $Y$ of an abelian variety $X$ over any field $k$, there is an abelian subvariety $Z$ such that addition $Y\times Z\to X$ is an isogeny.

(b) If $L/k$ is a finitely generated regular extension or a purely inseparable algebraic extension, every abelian subvariety of $X_L$ is the base change of a unique abelian subvariety of $X$.

(c) The dual of a surjective homomorphism of abelian varieties has finite scheme-theoretic kernel.

## Statement references

[Conrad, Corollaries 3.20–3.21 and duality comparisons](https://math.stanford.edu/~conrad/papers/Kktrace.pdf)


## Facts & Assumptions

[F1] [[thm-nonaffine-group-scheme-normal-subgroup-quotient]] represents normal subgroup quotients and preserves smoothness, connectedness and field extension; [[lem-nonaffine-group-monomorphism-closed-immersion]] identifies kernel-free maps with closed immersions. [[lem-proper-source-to-separated-target-proper]] gives properness of maps from a proper source.

[F2] [[lem-arith-finite-cartier-duality-and-exactness]] proves that a finite commutative group scheme is killed by its rank, including its infinitesimal part.

[F3] [[thm-abelian-variety-is-projective]], [[lem-very-ample-implies-ample]], and [[thm-abelian-variety-dual-and-polarization]] give the ample restriction, Mumford maps, polarizations, dual functor and dual-isogeny theorem.

[F4] [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]] gives surjectivity and finite kernels of nonzero integer multiplication in every characteristic.

[F5] [[lem-abelian-homomorphisms-descend-over-regular-and-purely-inseparable-extensions]] descends the explicitly constructed projector.

[F6] [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]] applies over a perfect closure to the full scheme kernel; [[thm-existence-of-algebraic-closures]] permits construction of that closure. [[thm-proper-quasi-finite-is-finite]] makes a zero-dimensional proper finite-type kernel finite.

[A1] [[def-axiom-of-choice]] and [[def-dependent-choice]] are retained from these group, duality and cohomology suppliers.



**Given:** The stated fields and abelian varieties, AC and DC.

## Proof

1.1 We record the image and quotient facts actually used. If $G$ is an abelian variety and $H\subset G$ is a closed subgroup scheme, the existing normal-subgroup quotient theorem gives $G/H$ as a separated finite-type smooth group scheme and $G\to G/H$ faithfully flat, with the stated kernel and compatibility with field extension. It is geometrically connected, since a quotient of the geometrically connected $G$ stays connected after every field extension. It is proper: $G\to G/H$ is proper because its source is proper and its target separated, and the universally closed projection of $G$ to the field forces the projection of its surjective image $G/H$ to be universally closed. Therefore $G/H$ is an abelian variety. For a homomorphism $a:G\to G'$ its induced map $G/\ker a\to G'$ has trivial scheme kernel, so the existing group-monomorphism lemma makes it a closed immersion. Its image is consequently an abelian subvariety and formation of that image commutes with field extension, as does the quotient and its closed immersion. No reduced-kernel assertion is used. [F1, given, construct, algebra]

2.1 An isogeny $a:G\to G'$ has a quasi-inverse up to multiplication. Let $d$ be the rank of its finite kernel. The finite Cartier-duality supplier proves that a finite commutative group scheme of rank $d$ is killed by $d$, including in positive characteristic. Thus $[d]_G$ kills $\ker a$ and factors uniquely through the quotient $a$ as a homomorphism $b:G'\to G$ with $ba=[d]_G$. Composing with $a$ and using its faithful-flat surjectivity gives $ab=[d]_{G'}$. This includes inseparable isogenies. [F1, F2, step 1.1, construct, algebra]

3.1 Choose a very ample line bundle $\mathcal L$ on $X$, using the existing projectivity theorem. Its restriction to the closed subvariety $Y$ is very ample, since the composite $Y\hookrightarrow X\hookrightarrow\mathbf P^n$ is a closed immersion. Let $i:Y\hookrightarrow X$, and put $u=i^\vee\varphi_{\mathcal L}:X\to Y^\vee$. Naturality of the Mumford homomorphism gives $ui=\varphi_{i^*\mathcal L}$: on points it is the identity $i^*(t_{i(y)}^*\mathcal L\otimes\mathcal L^{-1})=t_y^*i^*\mathcal L\otimes(i^*\mathcal L)^{-1}$, and the universal rigidified Picard property gives the equality on all tests. The restriction is ample, so $h=ui$ is an isogeny by the existing polarization theorem. Choose $r:Y^\vee\to Y$ from step 2.1 with $rh=[d]_Y$ and $hr=[d]_{Y^\vee}$. [F3, step 2.1, construct, algebra]

4.1 Set $v=ru:X\to Y$ and $e=[d]_X-iv:X\to X$. Then $vi=[d]_Y$, $ei=0$ and $ve=0$. Put $Z=\operatorname{im}e$, an abelian subvariety by step 1.1. Since $v|_Z=0$, the intersection $Y\cap Z$ is a subgroup of $Y[d]$ and is finite. The identity $[d]_X=iv+e$ and surjectivity of $[d]_X$ show $Y+Z=X$. Addition $Y\times Z\to X$ is thus surjective with finite kernel (its kernel identifies with $Y\cap Z$), proving (a). If $Y=0$ take $Z=X$; if $Y=X$ take $Z=0$. [F1, F4, step 1.1, step 3.1, construct, algebra]

5.1 Let $W\subset X_L$ be an abelian subvariety for an extension in (b). By (a), choose a complement and an isogeny $a:W\times Z\to X_L$. Step 2.1 gives $b:X_L\to W\times Z$ with $ba=[n]$ and $ab=[n]$. Let $\operatorname{pr}_W$ denote the projector $(w,z)\mapsto(w,0)$ on $W\times Z$. The endomorphism $t=a\operatorname{pr}_Wb$ of $X_L$ has image exactly $W$: it lands in $W$ and on $W$ is multiplication by $n$, which is surjective. Hom descent for the specified extension supplies $t_0\in\operatorname{End}_k(X)$ with $(t_0)_L=t$. By step 1.1 its image $W_0$ is an abelian subvariety and $(W_0)_L=W$. Uniqueness of $W_0$ follows by faithful scalar extension on the defining ideal sheaves. This proves (b) without asserting that a reduced subgroup over an imperfect field is smooth. [F1, F5, step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 Let $f:X\to Y$ be surjective. Pass temporarily to a perfect closure $k^{\mathrm{perf}}$ of $k$. In characteristic zero use $k$ itself. Over a perfect field the reduced identity component of the kernel is a smooth connected proper subgroup: reduction is a subgroup because tensor products of reduced algebras over a perfect field are reduced, and the reduced group is smooth; its identity component is open and closed. Denote this abelian subvariety by $B'$. Apply (b) for the purely inseparable extension $k^{\mathrm{perf}}/k$ to descend it to an abelian subvariety $B\subset X$. It lies in $\ker f$, since that inclusion can be checked after faithful scalar extension. Its dimension equals the dimension of $\ker f$. [F5, F6, step 1.1, step 5.1, construct, algebra]

7.1 Choose a complement $Z$ to $B$ by (a). The map $f|_Z:Z\to Y$ is surjective because $X=B+Z$ and $f(B)=0$. Its kernel is finite: after algebraic closure, the finitely many components of $\ker f$ are translates of its reduced identity component $B$, possibly with nilpotent thickening, and their intersections with $Z$ have dimension zero because $B\cap Z$ is finite. Thus the intersection is a zero-dimensional proper finite-type group scheme, hence finite. Therefore $f|_Z$ is an isogeny. Dual functoriality gives $(f|_Z)^\vee=i_Z^\vee f^\vee$. The existing dual-isogeny theorem makes the left-hand side an isogeny. Hence $\ker f^\vee$, a closed subgroup of its finite kernel, is finite. This proves (c). [F3, F6, step 4.1, step 6.1, construct, algebra] ∎
