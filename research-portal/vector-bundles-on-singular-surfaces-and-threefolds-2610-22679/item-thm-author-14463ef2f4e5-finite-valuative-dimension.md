---
title: Finite valuative dimension for noetherian and finite type schemes
status: published
research_item: thm-author-14463ef2f4e5-finite-valuative-dimension
dependency_level: 8
---

PDF p. 4: Finite valuative dimension; PDF p. 9: Boundedness input

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [lem-author-14463ef2f4e5-noetherian-quotient](item-lem-author-14463ef2f4e5-noetherian-quotient)
- [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension)
- [lem-author-14463ef2f4e5-affine-cover](item-lem-author-14463ef2f4e5-affine-cover)
- [thm-author-14463ef2f4e5-noetherian-valuative-input](item-thm-author-14463ef2f4e5-noetherian-valuative-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)
- [math:lem-irreducible-components-of-a-topological-space](https://alphabetamath.cc/item/lem-irreducible-components-of-a-topological-space)
- [math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)


## Statement
Assume the Axiom of Choice. A noetherian scheme of finite Krull dimension has finite valuative dimension, bounded above by its Krull dimension. Every scheme of finite type over a field has finite valuative dimension. A noetherian scheme here is one covered by finitely many affine spectra of noetherian rings. Its Krull dimension is the supremum of the lengths of strict chains of irreducible closed subsets; the empty scheme has dimension $-1$. A scheme of finite type over a field has a finite affine cover by spectra of finitely generated algebras over that field.

## Facts & Assumptions
**Given:** Choice, and either a noetherian scheme $X$ of finite Krull dimension $d$, or a scheme $X$ of finite type over a field $k$.

**Goal:** Prove finite valuative dimension in both cases and the bound in the first case.

[F1] For a noetherian domain, valuative dimension equals Krull dimension. [thm-author-14463ef2f4e5-noetherian-valuative-input](item-thm-author-14463ef2f4e5-noetherian-valuative-input)

[F2] A prime quotient of a noetherian ring is a noetherian domain and has dimension at most that of the ring. [lem-author-14463ef2f4e5-noetherian-quotient](item-lem-author-14463ef2f4e5-noetherian-quotient)

[F3] Under Choice a finitely generated algebra over a field is noetherian and has finite Krull dimension. [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The valuative dimension of a scheme is the supremum of the valuative dimensions of the rings in any affine open cover. [lem-author-14463ef2f4e5-affine-cover](item-lem-author-14463ef2f4e5-affine-cover)

[F5] Noetherian rings have every ideal finitely generated. Fields are nonzero commutative rings with inverses for nonzero elements. A commutative $k$-algebra has a unital structure map from $k$; finitely generated means generated as an algebra by a finite list of elements. [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module) [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring) [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F6] A scheme is a locally ringed space locally isomorphic to affine schemes. An affine open has the subspace topology and restricted structure sheaf. A $k$-scheme is equipped with a structure morphism $f:X\to\operatorname{Spec}k$; finite type over $k$ means that $f$ is a finite-type morphism. A scheme morphism is a morphism of locally ringed spaces. The noetherian finite-cover convention is as stated above. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[F7] An irreducible subset is nonempty and cannot be the union of two proper closed subsets in its subspace topology. The closure of a subset is its smallest closed superset. [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset) [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

[F8] The points of $\operatorname{Spec}A$ are its prime ideals, and $V(I)=\{\mathfrak q:I\subseteq\mathfrak q\}$ for an ideal $I$. For a prime $\mathfrak p$, its singleton has closure $V(\mathfrak p)$. [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets) [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)

[F9] The closure of an irreducible subset is irreducible (clause 1). For $T\subseteq U\subseteq X$ with the subspace topology, $\operatorname{cl}_U(T)=\overline{T}^{X}\cap U$ (clause 1). [math:lem-irreducible-components-of-a-topological-space](https://alphabetamath.cc/item/lem-irreducible-components-of-a-topological-space) [math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)

[F10] Choice is retained for the polynomial-dimension input used in [F3] and for the stated hypotheses of the spectrum-closure and irreducible-closure suppliers in [F8] and [F9]. Selecting the finitely many affine charts or their finite bounds below requires no additional arbitrary-index choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F11] Ring valuative dimension is the supremum over prime quotients, and scheme valuative dimension is the supremum over affine opens. Both Krull and valuative dimensions of the zero ring and empty scheme are $-1$. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F12] For a finite-type morphism $f:X\to S$ and an affine target open $V=\operatorname{Spec}R$, the inverse image $f^{-1}(V)$ has a finite affine open cover $U_i=\operatorname{Spec}A_i$ with each $A_i$ a finitely generated $R$-algebra, using the structure maps induced by $f$. This is the finite-cover consequence in the Statement and final proof step of [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target), with finite type understood as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Taking $S=V=\operatorname{Spec}k$ gives precisely a finite affine cover of $X$ by finitely generated $k$-algebras compatible with its given structure morphism.

## Proof
1.1 Let $A$ be a noetherian ring. For each prime $\mathfrak p$, [F2] makes $A/\mathfrak p$ a noetherian domain of dimension at most $\dim A$. By [F1], its valuative dimension equals its Krull dimension. Taking the supremum over prime quotients in the definition of valuative dimension gives $\dim_v A\leq\dim A$. For $A=0$, there are no primes and both dimensions are $-1$ by convention. [F1, F2, F5, F8, F11, given]

2.1 Let $U=\operatorname{Spec}A$ be an affine open of a scheme $X$ of dimension $d$. For a strict prime chain $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$, [F8] gives $V(\mathfrak p_0)\supsetneq\cdots\supsetneq V(\mathfrak p_n)$: at each adjacent pair, $\mathfrak p_i$ belongs to $V(\mathfrak p_i)$ and not to $V(\mathfrak p_{i+1})$. Each singleton $\{\mathfrak p_i\}$ is irreducible by [F7], since a union covering a singleton contains that point in one member. Its closure $V(\mathfrak p_i)$ in $U$ is therefore irreducible by [F8] and [F9]. By [F6] and the subspace convention in [F7], it is also an irreducible subset of $X$. Thus $C_i=\overline{V(\mathfrak p_i)}^{X}$ is irreducible and closed by [F7] and [F9]. Closure preserves inclusion because it is the smallest closed superset, and [F9] gives $C_i\cap U=V(\mathfrak p_i)$, so these inclusions remain strict. Reversing this chain gives a length-$n$ chain counted by $\dim X$, whence $\dim A\leq d$. For an empty affine open the same inequality follows from the dimension-$-1$ convention. If $X$ is noetherian, choose the finite noetherian affine cover in the Statement. Step 1.1 bounds every cover ring's valuative dimension by $d$, and [F4] gives $\dim_v X\leq d$. If instead $X$ is finite type over $k$, apply [F12] to its structure morphism $f:X\to\operatorname{Spec}k$, taking the whole affine target $V=\operatorname{Spec}k$. Since $f^{-1}(V)=X$, this gives a finite affine cover of $X$ by spectra of finitely generated $k$-algebras, with their algebra structures induced by $f$. By [F3] each ring is noetherian of finite Krull dimension, so step 1.1 gives a finite valuative bound for each. Their finite maximum and [F4] prove $\dim_v X<\infty$. For the empty scheme the valuative and Krull dimensions are both $-1$, and the empty cover has supremum $-1$. [F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, given, step 1.1, choose, construct] ∎
