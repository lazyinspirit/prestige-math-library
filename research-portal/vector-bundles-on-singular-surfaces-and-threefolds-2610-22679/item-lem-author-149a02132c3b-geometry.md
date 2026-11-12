---
title: The actual smooth open pair and its choice scope
status: published
research_item: lem-author-149a02132c3b-geometry
dependency_level: 15
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)
- [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)
- [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)
- [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)
- [math:lem-separatedness-of-open-and-closed-immersions](https://alphabetamath.cc/item/lem-separatedness-of-open-and-closed-immersions)
- [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)
- [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)
- [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism)
- [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical)
- [math:thm-perfect-field-characterizations](https://alphabetamath.cc/item/thm-perfect-field-characterizations)
- [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field)
- [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism)
- [math:thm-differentials-smooth-locally-free](https://alphabetamath.cc/item/thm-differentials-smooth-locally-free)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)
- [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)


## Statement
Assume AC and the fixed universe bounds. Let $k$ be an algebraically closed field and $X$ an affine finite-type $k$-scheme of Krull dimension three. Let $U=X_{\mathrm{smooth}}=\operatorname{Sm}(X\to\operatorname{Spec}k)$, with its open subscheme structure, and let $T\subseteq |X|$ be a closed subset contained in $U$. Whenever $T$ is used as a scheme, give it its reduced induced closed-subscheme structure. Put $V=U\setminus T$ and $W=X\setminus T$, with their open subscheme structures. All four schemes $X,U,V,W$ are qcqs; $U,V$ are smooth separated finite type over the perfect field $k$. Both $U$ and $V$ are regular Noetherian schemes, also when regarded as schemes over the prime field: this is an intrinsic assertion about their local rings and topology, with no finite-type assertion over that prime field.

The opens $U,W$ cover $X$ and intersect in $V$. Their square
$$\begin{matrix} V&\longrightarrow&W\\ \downarrow&&\downarrow\\ U&\longrightarrow&X \end{matrix}$$
is a distinguished Nisnevich square, and $\{U\to X,W\to X\}$ is a Nisnevich covering family. For the smooth morphism $U\to\operatorname{Spec}k$, relative dimension at $u$ means the common local dimension at points over $u$ of its fibres after field extension of $k$; local dimension is the infimum of dimensions of open neighbourhoods. The strata $U_d$ where this integer equals $d$ are open and closed, and only finitely many are nonempty. Here an integral curve means an integral scheme of Krull dimension one. If $T$ with its stated scheme structure is an integral curve, then it is affine and is contained in one such stratum.

## Statement references
[def-article-conventions](item-def-article-conventions)

[def-cohomology-with-support](item-def-cohomology-with-support)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented)

[math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)

[math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms)

[math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets)

[math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum)

[math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)

[math:lem-separatedness-of-open-and-closed-immersions](https://alphabetamath.cc/item/lem-separatedness-of-open-and-closed-immersions)

[math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)

[math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)

[math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism)

[math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical)

[math:thm-perfect-field-characterizations](https://alphabetamath.cc/item/thm-perfect-field-characterizations)

[math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field)

[math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism)

[math:thm-differentials-smooth-locally-free](https://alphabetamath.cc/item/thm-differentials-smooth-locally-free)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)

[math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

## Facts & Assumptions
**Given:** The data of the Statement, including the reduced structure convention for closed supports, AC and the fixed universe bounds.

**Goal:** Establish the actual open schemes, their regularity and finiteness, the distinguished square, and the affine-curve stratum assertion.

[F1] [def-article-conventions](item-def-article-conventions) supplies the algebraically closed field, affine finite-type convention, chain definition of scheme dimension and qcqs category. [def-cohomology-with-support](item-def-cohomology-with-support) fixes the size-bounded support setting and the reduced induced structure convention for a closed support. No smoothness theorem is part of either convention.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). AC is used through the declared spectrum-Noetherianity, Noetherian-open compactness, smooth-locus/Jacobian, regularity and differential-dimension suppliers, and the affine closed-immersion supplier. No new simultaneous choice of charts or strata is made.

[F2] A field is Noetherian by [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian). Over a Noetherian ring, a finite-type algebra is Noetherian and finitely presented, respectively by [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) and [math:cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented). Under AC its spectrum is a Noetherian topological space by [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum), and every open subset of such a space is quasi-compact by [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact).

[F3] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) defines a Noetherian scheme by a finite affine cover with Noetherian coordinate rings. [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) defines finite type as locally finite type and quasi-compact; [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism) gives the affine-chart finite-presentation condition. By [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms), the closed subsets of $\operatorname{Spec}A$ are exactly the sets $V(I)$ as $I$ ranges over its ideals. Here $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$ by [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), and $D(f)=\{\mathfrak p:f\notin\mathfrak p\}=\operatorname{Spec}A\setminus V((f))$ by [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum). [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) identifies $\operatorname{Spec}A_f$ with $D(f)$ and its restricted structure sheaf. [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion) supplies étaleness of every open immersion, including the empty immersion.

[F4] Separatedness means that the diagonal is a closed immersion, as in [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes). The morphism between affine schemes $X\to\operatorname{Spec}k$ is separated by [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated); open immersions are separated by [math:lem-separatedness-of-open-and-closed-immersions](https://alphabetamath.cc/item/lem-separatedness-of-open-and-closed-immersions), and separated morphisms compose by [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition).

[F5] [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) defines pointwise smoothness using local finite presentation, flatness and geometrically regular fibres. [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism) defines its locus for locally finitely presented maps, and [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open) makes that locus open with smooth restriction, under AC. Smoothness is preserved by restricting the source to an open. Under AC, [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism) identifies this pointwise notion with local standard smooth presentations. Thus it agrees here with [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical), the convention in the regularity theorem.

[F6] [math:thm-perfect-field-characterizations](https://alphabetamath.cc/item/thm-perfect-field-characterizations) characterizes perfect fields by characteristic zero or surjective Frobenius in positive characteristic. Under AC, [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field) says that a finite-type scheme over a perfect field is regular exactly when it is smooth in the local-standard-smooth convention; regular means locally Noetherian with every local ring regular local. It imposes no reducedness, irreducibility or closed-point restriction.

[F7] [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism) defines relative dimension by geometric-fibre local dimension, rather than the dimension of the local ring at the point. Under AC, [math:thm-differentials-smooth-locally-free](https://alphabetamath.cc/item/thm-differentials-smooth-locally-free) identifies it with a locally constant finite rank on the smooth locus. In particular it is locally constant on $U$, without an equidimensionality hypothesis on $X$.

[F8] [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) defines Nisnevich families by étaleness and residue-field-preserving lifts, and distinguished squares by cartesianness, an open bottom map, an étale right map and an isomorphism over the reduced complement. It also supplies that reduced closed complement. [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction) identifies base change along an open immersion with the inverse-image open subscheme. Under AC, [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change) identifies a closed subscheme of $\operatorname{Spec}A$ with $\operatorname{Spec}(A/I)$. By [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), an integral scheme is nonempty, reduced and irreducible.

## Proof
1.1 Write $X=\operatorname{Spec}A$, with $A=k[a_1,\ldots,a_n]$. By F2, $A$ is Noetherian and finitely presented over $k$, so $X\to\operatorname{Spec}k$ is locally finitely presented by F3. Its smooth locus $U$ is open and smooth by F5; its open $V$ is smooth as well. To check finiteness for every open $O\subseteq X$, write $O=\operatorname{Spec}A\setminus V(I)$ by F3. If $\mathfrak p\in O$, then $I\not\subseteq\mathfrak p$, so there exists $f\in I\setminus\mathfrak p$. Hence $\mathfrak p\in D(f)\subseteq O$: a prime not containing $f\in I$ cannot contain $I$. Each $D(f)$ is open, since its complement is $V((f))$. Thus the principal opens of the fixed ring $A$ contained in $O$ cover $O$, and F3 identifies them with principal-localization affine charts with restricted structure sheaves. A chart $D(f)=\operatorname{Spec}A_f$ has $A_f$ generated over $k$ by the images of $a_1,\ldots,a_n$ and $f^{-1}$, since every element is a fraction $a/f^m$. Hence F2 makes $A_f$ Noetherian and finitely presented over $k$. Also F2 makes $|X|$ Noetherian and every open of $X$ quasi-compact. The principal charts contained in $O$ therefore have a finite subcover. By F3, $O$ is a Noetherian finite-type $k$-scheme, locally of finite presentation. The intersection of any two affine opens of $O$ is an open of $X$, so is quasi-compact by F2; thus $O$ is qcqs in F1's sense. This includes the empty open. By F4, composing $O\hookrightarrow X$ with $X\to\operatorname{Spec}k$ makes $O$ separated over $k$. Apply these conclusions to $X,U,V,W$. In characteristic $p>0$, each $t^p-a$ has a root in algebraically closed $k$, so Frobenius is onto; in characteristic zero no such check is needed. F6 makes $k$ perfect. By the Jacobian equivalence in F5, $U,V$ are smooth in the classical convention required by F6, so they are regular. Their Noetherianity was proved above. Forgetting the base map changes neither their topology nor their local rings, proving the prime-field assertion. [A1, F1, F2, F3, F4, F5, F6, given]

2.1 Since $T\subseteq U$, we have $U\cup W=X$ and $U\cap W=V$. By F8, $V=U\times_X W$ as schemes. The right map $W\hookrightarrow X$ is étale by F3. For $Z=(X\setminus U)_{\mathrm{red}}$, the inclusion $T\subseteq U$ implies $|Z|\subseteq W$, so F8 identifies $Z\times_X W$ with all of the open inverse image $Z$, and its projection is an isomorphism. The bottom map is an open immersion; hence this is precisely a distinguished square in F8. Each point of $X$ lies in $U$ or $W$, and the open restriction identifies its local ring, and therefore its residue field, with that of the corresponding point of the open. The two maps are étale by F3, proving the Nisnevich-family assertion too. By F7, relative dimension on $U$ is a locally constant nonnegative integer. Each fibre $U_d$ of this function is open, and its complement is the union of the other open fibres, so it is also closed. The $U_d$ form an open cover of quasi-compact $U$, so only finitely many are nonempty. If $T$ is an integral curve with the stated reduced induced structure, F8 applies to its closed immersion into affine $X$, making it affine. Its irreducible underlying space is connected: a separation into nonempty disjoint opens would express it as a union of two proper closed subsets. It cannot meet both a clopen stratum and its complement; choosing a point of nonempty $T$ therefore identifies one stratum containing all of $T$. This proves the curve and stratum assertions without any smoothness assumption on $T$ or any purity assumption on $X$. [A1, F1, F3, F7, F8, step 1.1] ∎
