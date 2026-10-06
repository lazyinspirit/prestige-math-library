---
id: lem-orbit-map-faithfully-flat-and-orbit-locally-closed
kind: lemma
title: "Smooth orbits are locally closed and their orbit maps are faithfully flat over every field"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-regular-local-rings-are-domains-and-cohen-macaulay, cor-smooth-variety-classical-scheme-conventions-agree, lem-field-is-noetherian, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, cor-ring-reduced-iff-zero-is-an-intersection-of-primes, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, def-ag-geometrically-regular-algebra-and-fibre, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-constructible-subset-scheme, def-faithfully-flat-morphism-schemes, def-fibre-product-schemes-universal-property, def-locally-closed-immersion, def-locally-finite-presentation-morphism, def-scheme-theoretic-image, def-separated-scheme-over-base, def-smooth-morphism-schemes, def-tensor-product-of-modules-by-generators-and-relations, lem-action-map-fibres-and-stabilizer-subscheme, lem-ag-geometric-regularity-field-tests, lem-finite-presentation-image-constructible, lem-separatedness-of-open-and-closed-immersions, thm-affine-nullstellensatz-correspondence, thm-faithfully-flat-descent-of-flatness, cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented, thm-generic-flatness-morphisms, thm-lying-over, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-proper-ideal-contained-in-maximal-ideal, thm-regular-equals-smooth-over-perfect-field, thm-scheme-theoretic-image-quasi-compact-morphism, thm-smooth-locus-open]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Proposition 1.65 (with A.20, A.55, A.70), Proposition 7.4 and Proposition 7.6, printed pp. 27-28, 139-140, 583-587"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Proposition 1.11, printed pp. 5-6"
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Section 39.20 (Definition 39.20.1)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $G$ be a smooth algebraic
group scheme of finite type over $k$ ([[def-smooth-morphism-schemes]]) acting on
a separated finite-type $k$-scheme $X$
([[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]), and let
$x\in X(k)$ ([[lem-action-map-fibres-and-stabilizer-subscheme]]). Then the
orbit subscheme $O_x$ is locally closed in $X$ and stable under $G$, and the
orbit map $\varrho_x:G\to O_x$ is faithfully flat and locally of finite
presentation. In particular $O_x$ is smooth over $k$ and of finite type. The
Axiom of Choice is used exactly as in the generic-flatness and constructibility
inputs below.

## Facts & Assumptions

**Given:** AC, a field $k$, a smooth finite-type $k$-group scheme $G$ acting on a separated finite-type $k$-scheme $X$ through $\alpha$, and a point $x\in X(k)$ with orbit map $\varrho_x$.

[F1] For a quasi-compact morphism $f:X\to Y$ the ideal $\mathcal I=\ker(\mathcal O_Y\to f_*\mathcal O_X)$ is quasi-coherent and $V(\mathcal I)$ is the scheme-theoretic image of $f$, with restriction to every open of $Y$ ([[thm-scheme-theoretic-image-quasi-compact-morphism]], [[def-scheme-theoretic-image]]).

[F2] For a finitely presented ring map $A\to B$ the image of a basic open $D(b)\subseteq\operatorname{Spec}B$ in $\operatorname{Spec}A$ is constructible, and constructible subsets are the finite unions of locally closed subsets ([[lem-finite-presentation-image-constructible]], [[def-constructible-subset-scheme]]). A finitely generated algebra over a Noetherian ring is finitely presented ([[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]]).

[F3] An integral ring map is closed on spectra: for $A\to B$ integral and $J\subseteq B$ an ideal, the image of $V(J)$ is $V(J\cap A)$, by lying over applied to the induced integral injection $A/(J\cap A)\to B/J$ ([[thm-lying-over]]).

[F4] A smooth morphism is locally of finite presentation, flat, and has geometrically regular fibres; over a field $k$, smoothness of $G$ means that for every field extension $K/k$ the local rings of $G_K=G\times_kK$ are regular at all points ([[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]]). Regular local rings are domains ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]]), hence $G_K$ is reduced: a nilpotent section vanishes in every stalk, so is zero.

[F5] A reduced commutative ring has zero ideal equal to the intersection of its prime ideals, so it embeds into the product of the residue fields of its primes ([[cor-ring-reduced-iff-zero-is-an-intersection-of-primes]]).

[F6] Over an algebraically closed field $K$, a maximal ideal of a finitely generated $K$-algebra is the vanishing ideal of a $K$-point, and closed points of finite-type $K$-schemes have residue field $K$; maximal ideals exist by AC ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]], [[thm-affine-nullstellensatz-correspondence]], [[thm-proper-ideal-contained-in-maximal-ideal]]).

[F7] The tensor product of modules distributes over direct sums, as follows from its defining generators and relations; consequently if $K_1,K_2$ are fields over a common field $F$, then $K_1\otimes_FK_2\cong\bigoplus_iK_1\ne0$ for any $F$-basis of $K_2$ containing $1$ ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[F8] For a finite-type morphism over a Noetherian integral base there is a dense open over which the morphism is flat ([[thm-generic-flatness-morphisms]]).

[F9] A nonempty reduced finite-type scheme over a perfect field has a nonempty open regular locus, and regularity is equivalent to smoothness over a perfect field; the smooth locus of a locally finitely presented morphism is open ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-smooth-locus-open]]). The classical and scheme smoothness conventions agree by [[cor-smooth-variety-classical-scheme-conventions-agree]].

[F10] Flatness descends along faithfully flat ring maps, and geometric regularity descends along field extensions ([[thm-faithfully-flat-descent-of-flatness]], [[lem-ag-geometric-regularity-field-tests]]).

[F11] Fibre products represent pairs of morphisms with equal base image ([[def-fibre-product-schemes-universal-property]]); an immersion is separated ([[lem-separatedness-of-open-and-closed-immersions]]).

[F12] A field is Noetherian, and a finite-type algebra over a Noetherian ring is Noetherian ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). Thus every affine coordinate algebra of the finite-type schemes here is Noetherian.

## Proof

**Given:** AC, the smooth finite-type $k$-group scheme $G$ acting on the separated finite-type $k$-scheme $X$, and $x\in X(k)$.

1.1 The orbit map $\varrho_x$ is quasi-compact, so by [F1] its scheme-theoretic image $Y=V(\mathcal I)\hookrightarrow X$ exists. Let $Z_k:=\varrho_x(|G|)$. Its closure is the underlying space of $Y$: on an affine target chart with finitely many source charts, if a basic open $D(a)$ misses the image then every source algebra localized at $a$ is zero. A power of $a$ vanishes in each of the finitely many algebras, so a common power belongs to the kernel defining $Y$, and $D(a)$ misses $Y$. The reverse inclusion follows because the image lies in $Y$. On an affine chart $\operatorname{Spec}A\subseteq X$ with $\varrho_x^{-1}(\operatorname{Spec}A)$ covered by finitely many affine charts $\operatorname{Spec}B_j$, the ideal is $I=\ker(A\to\prod_jB_j)$, and for every field extension $K/k$ one has $I\otimes_kK=\ker(A_K\to\prod_j(B_j\otimes_kK))$ because $k\to K$ is flat and tensor products are right exact and commute with finite products; hence $Y_K:=Y\times_kK$ is the scheme-theoretic image of $\varrho_{x,K}$ and $Y_K$ is the closure of $Z_K:=\varrho_{x,K}(|G_K|)$ in $X_K$. [F1, given, construct]

1.2 For $K=\bar k$ the set $Z_K$ is constructible in $X_K$: cover the quasi-compact $X_K$ by finitely many affine charts $\operatorname{Spec}A$, cover each preimage by finitely many affine charts $\operatorname{Spec}B_j$, and each $A$ is Noetherian by [F12], and $B_j$ is a finite-type $A$-algebra because it is generated by finitely many elements over $K$. Hence [F2] gives finite presentation, so apply [F2] to $A\to B_j$ and to $b=1$; the full scheme-point image is the finite union of these constructible images. [F2, F12, given, construct]

1.3 The projection $\pi:Y_K\to Y$ is surjective and closed. It is the base change of $\operatorname{Spec}K\to\operatorname{Spec}k$, which is surjective; and $K/k$ is algebraic, hence integral, so $Y_K\to Y$ is integral and, by [F3], the image of any closed $V(J)\subseteq Y_K$ is the closed set $V(J\cap Y)$; a surjective closed map is a quotient map. [F3, given, algebra]

2.1 The scheme $Y$ is geometrically reduced: by step 1.1 it suffices to note that each $B_j\otimes_kK$ is reduced, since $G_K$ has regular local rings by [F4], and that $A_K/I\otimes_kK$ embeds into the product of the reduced rings $B_j\otimes_kK$. [F4, step 1.1, algebra]

2.2 Since $Z_K$ is constructible by step 1.2 and dense in $Y_K$ by step 1.1, it contains a dense open $U$ of $Y_K$: writing $Z_K$ as a finite union of locally closed subsets and intersecting with the finitely many irreducible components of the Noetherian space $Y_K$, one piece is dense in each component, and a locally closed subset dense in an irreducible space contains an open dense subset of it; remove from $Y_K$ the finitely many closed complements of those relative opens and all intersections of distinct components. The remaining subset is open and dense in $Y_K$ and contained in $Z_K$. Moreover every nonempty constructible subset of $Y_K$ contains a point closed in $Y_K$: a nonempty locally closed piece has a nonempty open subset of an affine chart, and by [F6] that open contains a $K$-point of the chart, which is closed in $Y_K$ because its residue field is $K$. [F6, step 1.1, step 1.2, construct]

2.3 The image is saturated for $\pi$: for a point $y\in Y_K$ with $q=\pi(y)$ one has $G_K\times_{X_K,y}\operatorname{Spec}\kappa(y)\cong G\times_X\operatorname{Spec}\kappa(y)$, because the morphism $\operatorname{Spec}\kappa(y)\to X$ factors through $\operatorname{Spec}\kappa(q)\to X$; this in turn is isomorphic to $G_q\times_{\operatorname{Spec}\kappa(q)}\operatorname{Spec}\kappa(y)$ with $G_q=G\times_{X,q}\operatorname{Spec}\kappa(q)$, and the latter is nonempty whenever $G_q$ is, by [F7]. Since $G_q$ is nonempty exactly when $q$ lies in $Z_k=\varrho_x(|G|)$, this shows $y\in Z_K$ if and only if $\pi(y)\in Z_k$, so $\pi^{-1}(\pi(Z_K))=Z_K$. [F7, F11, step 1.3, given, algebra]

3.1 Each translation by $g\in G(K)$ preserves $Y_K$: translating $\varrho_{x,K}$ is precomposing it with left translation on $G_K$, so its scheme-theoretic image is unchanged by [F1]. Set $O_K:=Z_K$ with the open subscheme structure it has in $Y_K$; this is legitimate because $Z_K$ is open in $Y_K$: every closed point $c$ of $Z_K$ lifts to a $K$-point $h$ of $G_K$ by [F6] applied to the nonempty finite-type fibre of $\varrho_{x,K}$ over $c$, and with a $K$-point $v$ of the nonempty open $\varrho_{x,K}^{-1}(U)$ one has $c=\varrho_{x,K}(h)= (hv^{-1})\cdot\varrho_{x,K}(v)\in(hv^{-1})U$, so that $\bigcup_{g\in G(K)}gU$ is an open subset of $Z_K$ containing every closed point of $Z_K$; its constructible complement in $Z_K$ would otherwise contain a closed point of $Y_K$ by step 2.2, so $Z_K=\bigcup_{g\in G(K)}gU$ is open in $Y_K$. By step 2.1 the open subscheme $O_K$ is reduced, and it is finite type over $K$ because it is locally of finite type as a locally closed subscheme of the finite-type $X_K$ and quasi-compact as the continuous image of the quasi-compact space $G_K$. [F1, F6, step 2.1, step 2.2, given, choose]

3.2 The morphism $\varrho_{x,K}:G_K\to O_K$ is surjective by construction, and $\varrho_x(|G|)=\pi(Z_K)$ is open in $Y$: by step 1.3 and step 2.3 the set $\pi^{-1}(\pi(Z_K))=Z_K$ is open, and $\pi$ is a quotient map, so $\pi(Z_K)$ is open. Define $O_x:=\pi(Z_K)$ with the induced open subscheme structure in $Y$; it is finite type over $k$, since it is locally of finite type as a locally closed subscheme of the finite-type $X$ and quasi-compact as the image of the quasi-compact space $G$ under $\varrho_x$, and $(O_x)_K=O_K$ as open subschemes of $Y_K$. [step 1.3, step 2.3, given, construct]

4.1 Reduced-source factorization. For $F=k$ or $F=K$, write $O_F=O_x$ or $O_K$ respectively. The image $Y_F$ is geometrically reduced by step 2.1. Every translation by a point of $G(F)$ preserves the scheme-theoretic image, since translating $\varrho_{x,F}$ is the same as precomposing it with left translation on $G_F$. Moreover the action on $G_F\times_FO_F$ has underlying image in $O_F$: after extending a residue field further, any orbit point has a lift to $G$, and acting on that lift gives another lift. On affine charts let $A$ be a geometrically reduced algebra for $G_F$ and let $C$ be a reduced algebra for $O_F$. The map $A\otimes_FC\to\prod_{\mathfrak p\in\operatorname{Spec}C}(A\otimes_F\kappa(\mathfrak p))$ is injective: write a tensor with a finite independent list of coefficients in $A$, and coefficient comparison after scalar extension shows that each corresponding element of $C$ lies in all primes, hence is zero by [F5]. The target factors are reduced because $G_F$ is smooth by [F4], so $G_F\times_FO_F$ is reduced. Thus both this action source and $G_F$ are reduced. Pulling back a section of the ideal of $Y_F$ gives a function vanishing in every residue field of the source, hence zero by [F5]; both morphisms therefore factor through $Y_F$. Since their images lie in its open $O_F$, they then factor through $O_F$. Applied to $F=K$, this establishes the action and orbit map over $K$ without asserting that $O_K$ is open in $X_K$. [F4, F5, F7, step 2.1, step 3.1, construct, algebra]

4.2 The subscheme $O_K$ is smooth over $K$: it is reduced by step 3.1 and finite type over the perfect field $K$; by [F9] its regular locus is a nonempty open subset, regularity equals smoothness over $K$, and the smooth locus $\mathrm{Sm}$ is a nonempty open subset stable under the $K$-automorphisms $g\in G(K)$. Since every $K$-point of $O_K$ is of the form $g\cdot x_K$ (the fibre over a $K$-point of $O_K$ is a nonempty finite-type $K$-scheme, hence has a $K$-point by [F6]), and since a nonempty open subset of a finite-type $K$-scheme contains a $K$-point by [F6], $\mathrm{Sm}$ meets $G(K)\cdot x_K$; then $x_K\in\mathrm{Sm}$ and all $K$-points of $O_K$ lie in $\mathrm{Sm}$. The closed complement $O_K\setminus\mathrm{Sm}$, if nonempty, would contain a closed $K$-point by [F6], contradicting the preceding conclusion. Thus $\mathrm{Sm}=O_K$. [step 3.1, F6, F9, given, choose]

4.3 The morphism $\varrho_{x,K}$ is faithfully flat: it is surjective by step 3.2; for flatness, apply [F8] on the finitely many disjoint integral open pieces of $O_K$ obtained by deleting the intersections of its irreducible components, obtaining a dense open $V\subseteq O_K$ over which $\varrho_{x,K}$ is flat. Every closed point $c$ of $O_K$ lies in some translate $gV$ by the argument of step 3.1, and over $gV$ the morphism $\varrho_{x,K}$ is conjugate by the isomorphisms $w\mapsto gw$ and $v\mapsto gv$ to the flat morphism over $V$, hence is flat there; the union of the translates contains all closed points, so its closed complement is empty by [F6] and it is all of $O_K$ and $\varrho_{x,K}$ is flat at every point. [F6, F8, F12, step 3.1, step 3.2, algebra, choose]

5.1 The factorization over $k$. The same argument in step 4.1 with $F=k$ applies to $O_x$, the reduced open subscheme of $Y$ constructed in step 3.2. Its underlying image is the orbit set, stable under the action by the field-lift argument, so $G\times_kO_x\to X$ and $G\to X$ factor first through $Y$ and then its open $O_x$. Hence $O_x$ is $G$-stable and $\varrho_x:G\to O_x$ is a morphism, with image $O_x$. Its base change is the orbit morphism $G_K\to O_K$ because $(O_x)_K=O_K$ by step 3.2. [F4, F5, step 3.2, step 4.1, construct]

5.2 Flatness and faithful flatness descend to $k$: the base changed morphism $(\varrho_x)_K$ is $\varrho_{x,K}$, which is faithfully flat by step 4.3 and surjective by step 3.2, and $(O_x)_K=O_K$; flatness is checked on affine charts, where it descends along the faithfully flat ring map $k\to K$ by [F10]. [F10, step 3.2, step 4.3, algebra]

6.1 Finally $O_x$ is smooth over $k$: by step 4.2 the base change $O_K=(O_x)_K$ is smooth over $K$; a finite-type $k$-algebra $A$ with $A\otimes_kK$ smooth, hence geometrically regular, over $K$ is geometrically regular over $k$ by [F10] and therefore smooth over $k$. Thus $O_x$ is a locally closed, $G$-stable, smooth finite-type $k$-subscheme of $X$, and $\varrho_x:G\to O_x$ is faithfully flat by step 5.2 and locally of finite presentation: on affine charts their ring map is of finite type, since its target is generated by finitely many elements over $k$, and its source is Noetherian by [F12]; [F2] then gives finite presentation. [F2, F10, F12, step 3.2, step 5.1, step 4.2, step 5.2] ∎
