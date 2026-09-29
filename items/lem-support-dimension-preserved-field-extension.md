---
id: lem-support-dimension-preserved-field-extension
kind: lemma
title: "Support dimension under field extension"
status: draft
origin: pipeline
deps:
  - thm-ag-field-extension-of-schemes
  - lem-finite-type-local-on-source-and-target
  - def-finite-type-finite-presentation-module-sheaf
  - def-coherent-module-scheme
  - thm-support-and-annihilator-of-a-finite-module
  - lem-associated-sheaf-stalk-localization
  - def-pullback-module-ringed-spaces
  - def-support-module-sheaf
  - def-dimension-noetherian-topological-space
  - lem-dimension-finite-union-components
  - def-krull-dimension-of-a-ring
  - thm-prime-spectrum-of-a-quotient-bijection
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-free-modules-are-projective-and-flat
  - lem-pullback-qc-module-quasi-coherent
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice, inherited from the construction of associated
sheaves, of base change of schemes and of the affiliated partitions below. Let
$k$ be a field, let $X$ be a finite-type $k$-scheme, let $\mathcal F$ be a
coherent $\mathcal O_X$-module ([[def-coherent-module-scheme]]), let $K/k$ be
a field extension, let $\pi:X_K\to X$ be the base change of schemes
([[thm-ag-field-extension-of-schemes]]) and let
$$\mathcal F_K:=\pi^*\mathcal F$$
be its pullback ([[def-pullback-module-ringed-spaces]]). Then
$$\dim\operatorname{Supp}(\mathcal F_K)=\dim\operatorname{Supp}(\mathcal F),$$
where the support is the set of points with nonzero stalk
([[def-support-module-sheaf]]) and the dimension is the chain dimension of a
Noetherian topological space, with $\dim\varnothing=-\infty$
([[def-dimension-noetherian-topological-space]]). If $\mathcal F=0$ then
$\mathcal F_K=0$ and both sides are $-\infty$; in particular the lemma covers
empty support, zero sheaves and the zero ring as the field case $k=0$ is
excluded by the hypothesis that $k$ is a field, while affine charts of $X$ may
be the zero ring exactly when that chart is empty, even if $X$ is nonempty.
Such a chart contributes empty support on both sides.

## Facts & Assumptions
**Given:** A field $k$, a finite-type $k$-scheme $X$, a coherent
$\mathcal O_X$-module $\mathcal F$, a field extension $K/k$, the base change
$\pi:X_K\to X$ and the pullback $\mathcal F_K=\pi^*\mathcal F$.

[F1] Base change of schemes: for every affine open $U=\operatorname{Spec}A$ of
$X$ the morphism $\pi$ restricts over $U$ to
$\operatorname{Spec}(A\otimes_kK)\to\operatorname{Spec}A$, these affine charts
cover $X_K$, and the construction is independent of the chosen affine cover up
to canonical isomorphism over $X$; the Axiom of Choice is used as there.
([[thm-ag-field-extension-of-schemes]])

[F2] Finite type is affine-local on source and target: since
$X\to\operatorname{Spec}k$ is of finite type and $\operatorname{Spec}k$ is
affine, $X$ has a finite affine cover by spectra of finitely generated
$k$-algebras, and moreover the coordinate ring of every affine open subscheme
of $X$ is a finitely generated $k$-algebra.
([[lem-finite-type-local-on-source-and-target]])

[F3] Coherence implies finite type, and a quasi-coherent finite-type module
$\mathcal F$ is, at every point, isomorphic on some affine open
$U=\operatorname{Spec}A$ to $\widetilde M$ for a finitely generated
$A$-module $M$, with $\mathcal F|_U\cong\widetilde M$.
([[def-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]])

[F4] For a finitely generated $A$-module $M$ one has
$\operatorname{Supp}_A(M)=\{\mathfrak p:\operatorname{Ann}_A(M)\subseteq\mathfrak p\}$,
and the stalk of $\widetilde M$ at $\mathfrak p$ is $M_{\mathfrak p}$; hence
$\operatorname{Supp}(\widetilde M)=V(\operatorname{Ann}_A(M))$ inside
$\operatorname{Spec}A$. ([[thm-support-and-annihilator-of-a-finite-module]],
[[lem-associated-sheaf-stalk-localization]])

[F5] Pullback is $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$
([[def-pullback-module-ringed-spaces]]). For
$f:\operatorname{Spec}B\to\operatorname{Spec}A$ and
$\mathcal F|_{\operatorname{Spec}A}\cong\widetilde M$, the affine pullback is
$f^*\mathcal F\cong\widetilde{(B\otimes_AM)}$ and is quasi-coherent.
([[lem-pullback-qc-module-quasi-coherent]])

[F6] Chain dimension: $\dim T$ is the supremum of lengths of strict chains of
nonempty irreducible closed subsets of a Noetherian space $T$, and
$\dim\varnothing=-\infty$; if a Noetherian space is a finite union of closed
subsets, its dimension is the maximum of their dimensions.
([[def-dimension-noetherian-topological-space]],
[[lem-dimension-finite-union-components]])

[F7] The Krull dimension of a nonzero commutative ring $R$ is the supremum of
lengths of strict chains of prime ideals, and contraction along $R\to R/I$
bijects the primes of $R/I$ with the primes of $R$ containing $I$.
([[def-krull-dimension-of-a-ring]],
[[thm-prime-spectrum-of-a-quotient-bijection]])

[F8] Noether normalization, dimension of polynomial rings and dimension
preservation under injective integral extensions: a nonzero finite-type
$k$-algebra $C$ is module-finite over a polynomial subring
$k[z_1,\dots,z_d]$ on algebraically independent elements;
$\dim k[x_1,\dots,x_n]=n$; and an injective integral extension of nonzero
commutative rings has equal Krull dimension.
([[cor-noether-normalisation-module-finiteness]],
[[cor-dimension-of-a-finite-polynomial-ring-over-a-field]],
[[cor-dimension-preserved-by-integral-extensions]])

[F9] Free modules are flat, so $A\otimes_kK$ is a flat $A$-module for every
$k$-algebra $A$, and $K$ is a free $k$-module.
([[cor-free-modules-are-projective-and-flat]])



## Proof

**Proof technique:** direct: cover $X$ by finitely many affine charts on which $\mathcal F$ is associated to a finitely generated module, compare supports chartwise with the annihilator calculation under the flat base change $A\to A\otimes_kK$, and compare ring dimensions with Noether normalization.

1.1 Choose a finite affine open cover $U_1,\dots,U_r$ of $X$, $U_i=\operatorname{Spec}A_i$ with $A_i$ a finitely generated $k$-algebra; this is possible by [F2] because $X$ is quasi-compact. Refining this cover if necessary, [F3] lets us assume that on each $U_i$ there is a finitely generated $A_i$-module $M_i$ with $\mathcal F|_{U_i}\cong\widetilde{M_i}$; the refinement may be taken finite and inside the charts supplied by [F3], and its coordinate rings are again finitely generated $k$-algebras by [F2]. The same opens give affine charts $\operatorname{Spec}(A_i\otimes_kK)$ of $X_K$ over them by [F1]. [F1, F2, F3]

1.2 Chartwise support before base change. Since restriction preserves stalks, $\operatorname{Supp}(\mathcal F)\cap U_i=\operatorname{Supp}(\mathcal F|_{U_i})=\operatorname{Supp}(\widetilde{M_i})=V(\operatorname{Ann}_{A_i}M_i)$ as a subset of $U_i=\operatorname{Spec}A_i$, by [F4]; here $\operatorname{Ann}_{A_i}M_i=A_i$ exactly when $M_i=0$, and then the chart contributes empty support. [F4]

1.3 Chartwise support after base change. Let $B_i=A_i\otimes_kK$ and let $\pi_i:\operatorname{Spec}B_i\to\operatorname{Spec}A_i$ be the chart morphism of [F1]. The restriction of $\mathcal F_K$ to this chart is $\pi_i^*(\mathcal F|_{U_i})$, which by [F5] is $\widetilde{(B_i\otimes_{A_i}M_i)}$; hence, again by [F4], the part of $\operatorname{Supp}(\mathcal F_K)$ inside $\operatorname{Spec}B_i$ is $V(\operatorname{Ann}_{B_i}(B_i\otimes_{A_i}M_i))$. [F1, F4, F5]

1.4 Annihilator under base change. Let $A$ be a commutative ring, $M$ a finitely generated $A$-module and $B$ a flat $A$-algebra, for instance $B=A\otimes_kK$ with the flatness of [F9]. Choose a presentation $A^n/N\cong M$ with $N\subseteq A^n$ (possible by choosing finitely many generators of $M$), so that $\operatorname{Ann}_A(M)=(N:{}_AA^n)$. Tensoring $0\to N\to A^n\to M\to0$ with $B$ and using flatness gives $0\to NB\to B^n\to M\otimes_AB\to0$, so the image of $N$ generates $NB$ and $\operatorname{Ann}_B(M\otimes_AB)=(NB:{}_BB^n)$. The colon identity $(N:{}_AA^n)B=(NB:{}_BB^n)$ holds: the inclusion $\subseteq$ is immediate by multiplying, and for the converse the scalar-action map $A\to\operatorname{Hom}_A(A^n,A^n/N)$, $a\mapsto(v\mapsto av\bmod N)$, has kernel $(N:{}_AA^n)$. Tensoring its kernel sequence with the flat $B$ and using that $A^n$ is finite free identifies $\operatorname{Hom}_A(A^n,A^n/N)\otimes_AB$ with $\operatorname{Hom}_B(B^n,B^n/NB)$; the resulting scalar-action map from $B$ has kernel $(NB:{}_BB^n)$. Hence $(N:{}_AA^n)B=(NB:{}_BB^n)$ and $\operatorname{Ann}_B(M\otimes_AB)=(\operatorname{Ann}_AM)B$. [F9, algebra]

1.5 Field extension preserves dimension of a finite-type algebra. Let $C$ be a nonzero finite-type $k$-algebra and $C\to C\otimes_kK$ the base change. By [F8] there are algebraically independent $z_1,\dots,z_d\in C$ such that $C$ is module-finite over $P=k[z_1,\dots,z_d]\subseteq C$; the inclusion $P\subseteq C$ is injective and integral, so $\dim C=\dim P=d$ by [F8]. Tensoring with $K$ over the flat $k$-module $K$ of [F9] preserves the injection $P\to C$ and the module finiteness, so $K[z_1,\dots,z_d]=P\otimes_kK\to C\otimes_kK$ is an injective integral extension of nonzero rings; hence $\dim(C\otimes_kK)=\dim K[z_1,\dots,z_d]=d$ by [F8]. Therefore $\dim C=d=\dim(C\otimes_kK)$. [F8, F9]

2.1 Reduction to dimension of a finite-type algebra. With the notation of steps 1.2 and 1.3 and [F7], the closed subset $V(\operatorname{Ann}_{A_i}M_i)$ of $\operatorname{Spec}A_i$ is homeomorphic to $\operatorname{Spec}(A_i/\operatorname{Ann}_{A_i}M_i)$ by the contraction bijection, so its dimension equals the dimension of that spectrum, and likewise for the base-changed chart with the ideal $(\operatorname{Ann}_{A_i}M_i)B_i$; by step 1.4 that ideal is $\operatorname{Ann}_{B_i}(B_i\otimes_{A_i}M_i)$. Since $B_i/(\operatorname{Ann}_{A_i}M_i)B_i\cong(A_i/\operatorname{Ann}_{A_i}M_i)\otimes_kK$, the desired chartwise equality of dimensions is exactly the equality $\dim C=\dim(C\otimes_kK)$ for the finite-type $k$-algebra $C=A_i/\operatorname{Ann}_{A_i}M_i$, which is a finitely generated $k$-algebra because $A_i$ is one. If $C=0$, then $M_i=0$ and both chart supports are empty; otherwise $C$ is nonzero and the next step applies. [F7, step 1.4]

3.1 Global comparison. The open sets $U_i$ cover $X$ and the charts $\pi^{-1}(U_i)=\operatorname{Spec}B_i$ cover $X_K$ by [F1]; their intersections with the respective supports give finite open covers of those supports. For either support $T$ and a strict chain $Z_0\subsetneq\cdots\subsetneq Z_d$ of nonempty irreducible closed subsets of $T$, choose a chart open $V$ meeting $Z_0$. Each $Z_j\cap V$ is a nonempty irreducible closed subset of $T\cap V$, and it is dense in $Z_j$ because it is a nonempty open subset of that irreducible space. The intersections remain strict: equality $Z_{j-1}\cap V=Z_j\cap V$ would put the dense subset $Z_j\cap V$ inside the closed proper subset $Z_{j-1}$ of $Z_j$. Thus $d\le\dim(T\cap V)$, while every chain in a chart is a chain in $T$ after taking closures in $T$ (the closures remain irreducible and strict, since their intersections with the chart recover the original chain). Hence $\dim T$ is the maximum of the dimensions of its finitely many chart intersections, also when $T=\varnothing$. Steps 1.2, 1.3, 1.4, 2.1 and 1.5 give equality of these chartwise dimensions for every $i$, including $-\infty$ for empty chart supports, so the two global dimensions coincide. [F1, F6, step 1.2, step 1.3, step 1.4, step 2.1, step 1.5]

4.1 Boundary bookkeeping. If $\mathcal F=0$ then every $M_i=0$, both supports are empty and both sides are $-\infty$; if $\mathcal F$ is nonzero on some chart then the corresponding algebra $C$ of step 2.1 is nonzero and steps 2.1 and 1.5 apply there. The Axiom of Choice is used through [F1] (choice of the glued base change), [F2] and [F3] (finite affine covers and associated sheaves), [F4] (associated-sheaf presentation) and the pullback supplier [F5]; no other selection is made. [F1, F2, F3, F4, F5, step 2.1] ∎
