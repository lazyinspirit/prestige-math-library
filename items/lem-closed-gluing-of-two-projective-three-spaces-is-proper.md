---
id: lem-closed-gluing-of-two-projective-three-spaces-is-proper
kind: lemma
title: "Closed gluing of two projective three-spaces is proper"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-relative-projective-space-standard-charts
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-pushout-schemes
  - def-closed-immersion-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-proper-morphism
  - def-separated-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - lem-finite-type-local-on-source-and-target
  - thm-separatedness-gluing-overlap-criterion
  - thm-valuative-criterion-properness
  - def-valuative-diagram-separatedness
  - def-scheme
  - thm-affine-scheme-ring-anti-equivalence
  - def-morphism-affine-schemes-from-ring-map
  - thm-global-sections-affine-scheme
  - def-prime-spectrum-and-vanishing-sets
  - lem-zariski-closed-set-axioms
  - def-principal-distinguished-subset-of-spectrum
  - def-affine-scheme-spectrum
  - thm-sections-basic-open-affine-scheme
  - lem-spectrum-localization-open-immersion
  - def-valuation-ring
  - lem-valuation-ring-is-local
  - def-field-of-fractions
  - def-specialisation-and-generic-point
  - lem-immersions-and-localizations-monomorphisms
  - cor-affine-scheme-quasi-compact
  - def-compact-space
  - lem-base-change-quasi-compact-morphisms
  - def-finite-type-and-module-finite-algebras
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vakil, The Rising Sea, Sections 17.4.8-17.4.12 (gluing two schemes along isomorphic closed subschemes; the proper nonprojective example)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
    - title: "The Stacks Project, More on Morphisms, Situation 37.67.1 (tag 0ECI), Lemma 37.67.2 (tag 0ECJ) and Proposition 37.67.3 (tag 0E25)"
      url: https://stacks.math.columbia.edu/tag/0E25
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let
$X_1,X_2$ be two copies of $\mathbb P^3_k$. In each $X_i$ choose a disjoint
union $Z_i$ of a line and a smooth plane conic, presented as closed
subschemes $L_i$ (a line) and $C_i$ (a smooth plane conic) of $X_i$ with
$|L_i|\cap|C_i|=\varnothing$ whose disjoint union $Z_i=L_i\sqcup C_i$ is a
closed subscheme of $X_i$, and identify the two $Z_i$ by isomorphisms
exchanging line and conic, $\sigma:Z_1\to Z_2$ with $\sigma(L_1)=C_2$ and
$\sigma(C_1)=L_2$. Then the closed-subscheme pushout
$X_1\amalg_ZX_2$ along $Z:=Z_1$ exists as a $k$-scheme, each $X_i$ is a
closed subscheme of it, and the pushout is proper over $k$.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, two copies $X_1,X_2$ of $\mathbb P^3_k$, closed subschemes $L_i,C_i\subseteq X_i$ with $|L_i|\cap|C_i|=\varnothing$ whose disjoint union $Z_i=L_i\sqcup C_i$ is presented as a closed subscheme of $X_i$ by the closed immersion $z_i:Z_i\to X_i$ ("a disjoint union of a line and a smooth plane conic in $X_i$"), and an isomorphism $\sigma:Z_1\to Z_2$ with $\sigma(L_1)=C_2$, $\sigma(C_1)=L_2$. Put $Z:=Z_1$, $j_1:=z_1$ and $j_2:=z_2\sigma$.

[F1] AC asserts that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F2] For a scheme $S$ and $n\ge0$ the relative projective space $\mathbb P^n_S$ is $S\times_{\operatorname{Spec}\mathbb Z}\mathbb P^n_{\mathbb Z}$, its standard charts $U^S_i$ are affine over $S$ and form an open cover, and over an affine base $S=\operatorname{Spec}A$ the $i$-th chart is $\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$. ([[def-relative-projective-space-standard-charts]])

[F3] Assume AC. For every scheme $S$ and every $n\ge0$ the projection $\pi:\mathbb P^n_S\to S$ is proper; no Noetherian, field, reducedness or nonemptiness hypothesis is imposed and the empty base is included. ([[thm-projective-space-proper-over-base]])

[F4] Assume AC. For closed immersions $i:Z\to X$ and $j:Z\to Y$ of $S$-schemes the pushout $T=X\amalg_ZY$ in $S$-schemes exists; with $a:X\to T$, $b:Y\to T$ the structure morphisms: (1) $a$ and $b$ are closed immersions with $|T|=|X|\cup|Y|$, $|X|\cap|Y|=|Z|$ and $Z\cong X\times_TY$; (2) $\mathcal O_T=a_*\mathcal O_X\times_{c_*\mathcal O_Z}b_*\mathcal O_Y$; (3) every point of $Z$ has an open neighbourhood in $T$ of the form $\operatorname{Spec}(A\times_CB)$ with $A=\Gamma(U,\mathcal O)$, $B=\Gamma(V,\mathcal O)$ from affine opens $U\subseteq X$, $V\subseteq Y$ with $i^{-1}(U)=j^{-1}(V)$ and $C=\Gamma(i^{-1}(U),\mathcal O)$, while the points of $T$ outside $Z$ lie in the open subschemes $X\setminus Z$ and $Y\setminus Z$. ([[lem-closed-immersion-pushout-schemes]])

[F5] A morphism $i:Z\to X$ is a closed immersion if its underlying map is a homeomorphism onto a closed subset and $\mathcal O_X\to i_*\mathcal O_Z$ is surjective. ([[def-closed-immersion-schemes]])

[F6] Assume AC. For a closed immersion $i:Z\to Y$ and every affine open $U=\operatorname{Spec}A$ of $Y$ there is a unique ideal $I\subseteq A$ with $i^{-1}(U)\cong\operatorname{Spec}(A/I)$; conversely every quotient map $A\to A/I$ induces a closed immersion, and every base change of a closed immersion is a closed immersion. ([[lem-closed-immersion-affine-quotient-and-base-change]])

[F7] A scheme morphism is proper if it is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F8] A morphism $f:X\to S$ is separated if its diagonal $\Delta_{X/S}:X\to X\times_SX$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F9] A morphism $f:X\to S$ is locally of finite type if every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}B$ whose image lies in an affine open $V=\operatorname{Spec}A$ of $S$ with $A\to B$ of finite type; it is of finite type if it is locally of finite type and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F10] A morphism $f:X\to S$ is quasi-compact if $f^{-1}(V)$ is quasi-compact for every quasi-compact open $V\subseteq S$, and quasi-separated if for affine opens $U,U'\subseteq X$ lying over a common affine open of $S$ the intersection $U\cap U'$ is quasi-compact. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F11] A scheme $X$ is quasi-compact if $|X|$ is quasi-compact. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F12] Being locally of finite type is affine-local on both source and target; a quasi-compact morphism locally of finite type is of finite type; equivalently, over each affine target open it may be tested on a finite affine source cover. ([[lem-finite-type-local-on-source-and-target]])

[F13] Let $f:X\to S$, let $S=\bigcup_iW_i$ be an affine open cover and for each $i$ let $f^{-1}(W_i)=\bigcup_jU_{ij}$ be an affine open cover. Then $f$ is separated if and only if for all $i,j,k$ the intersection $U_{ij}\cap U_{ik}$ is affine and $B_{ij}\otimes_{A_i}B_{ik}\to\Gamma(U_{ij}\cap U_{ik},\mathcal O_X)$ is surjective; the same condition may be checked for all pairs of affine opens $U,V\subseteq X$ lying over one and the same affine open of $S$, without reference to a fixed chosen cover. ([[thm-separatedness-gluing-overlap-criterion]])

[F14] Assume AC. Let $f:X\to S$ be of finite type and quasi-separated. Then $f$ is proper if and only if every valuative diagram for $f$ over an arbitrary valuation ring has exactly one lift. ([[thm-valuative-criterion-properness]])

[F15] A valuative diagram for $f:X\to S$ consists of a valuation ring $R\subseteq K$ with fraction field $K$ together with a morphism $\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ forming a commutative square; a lift is a morphism $\operatorname{Spec}R\to X$ making both triangles commute, and the uniqueness part of the criterion says every diagram has at most one lift. ([[def-valuative-diagram-separatedness]])

[F16] A scheme is a locally ringed space in which every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F17] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a bijection $\operatorname{Hom}(A,B)\cong\operatorname{Hom}(\operatorname{Spec}B,\operatorname{Spec}A)$, and $A\mapsto\operatorname{Spec}A$ is a contravariant equivalence with quasi-inverse global sections. ([[thm-affine-scheme-ring-anti-equivalence]])

[F18] A homomorphism $\varphi:A\to B$ gives the contraction map $\operatorname{Spec}B\to\operatorname{Spec}A$, $\mathfrak q\mapsto \varphi^{-1}\mathfrak q$. ([[def-morphism-affine-schemes-from-ring-map]])

[F19] The canonical map $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is an isomorphism. ([[thm-global-sections-affine-scheme]])

[F20] The points of $\operatorname{Spec}(R)$ are the prime ideals and $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$. ([[def-prime-spectrum-and-vanishing-sets]])

[F21] The subsets $V(I)$ of $\operatorname{Spec}(R)$ contain $\operatorname{Spec}(R)$ and $\varnothing$, are closed under arbitrary intersections and finite unions, and therefore define a topology on $\operatorname{Spec}(R)$. ([[lem-zariski-closed-set-axioms]])

[F22] For $f\in R$ the principal distinguished subset is $D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}$, the complement of $V((f))$, and the basic opens of the Zariski space $\operatorname{Spec}(R)$ are these $D(f)$. ([[def-principal-distinguished-subset-of-spectrum]], [[def-affine-scheme-spectrum]])

[F23] For $f\in A$ one has $\Gamma(D(f),\mathcal O)=A_f$; the affine spectrum of the localization is the corresponding distinguished open subscheme and open immersion. ([[thm-sections-basic-open-affine-scheme]], [[lem-spectrum-localization-open-immersion]])

[F24] A subring $V\subseteq K$ is a valuation ring of $K$ if for every $x\in K^\times$ at least one of $x$ and $x^{-1}$ belongs to $V$; it is a subring of a field. ([[def-valuation-ring]])

[F25] The nonunits of a valuation ring form an ideal, which is its unique maximal ideal, so the ring is local. ([[lem-valuation-ring-is-local]])

[F26] For a domain $D$ its field of fractions is the localization at all nonzero elements. ([[def-field-of-fractions]])

[F27] A point $y$ is a specialisation of $x$ when $y\in\overline{\{x\}}$, and a point $\eta$ of a closed subset $Z$ is a generic point of $Z$ when $\overline{\{\eta\}}=Z$. ([[def-specialisation-and-generic-point]])

[F28] Open immersions, closed immersions and their composites are monomorphisms of schemes: for every scheme $T$ the induced map on morphism sets is injective. ([[lem-immersions-and-localizations-monomorphisms]])

[F29] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F30] A topological space is compact when every open cover of it has a finite subcover, and a subset is compact when the subspace is compact. ([[def-compact-space]])

[F31] For $f:X\to S$ the following are equivalent: $f$ is quasi-compact; the inverse image of every affine open of $S$ is quasi-compact; some affine open cover of $S$ has quasi-compact inverse images. ([[lem-base-change-quasi-compact-morphisms]])

[F32] $A$ is of finite type over $R$ exactly when $A$ is isomorphic as an $R$-algebra to a quotient $R[x_1,\dots,x_n]/\mathfrak a$ for some $n$ and some ideal $\mathfrak a$. ([[def-finite-type-and-module-finite-algebras]])

[F33] For every field $K$ and every finite $d\ge0$ the ring $K[x_1,\dots,x_d]$ is Noetherian: each ideal of it has a finite generating list. ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]])


## Proof

**Proof technique:** direct: the pushout is supplied for closed immersions, finite type is verified on explicit affine charts, quasi-separatedness on intersections of affine opens, and properness then follows from the valuative criterion, whose unique lift is built and tested inside the proper component that carries the generic point.

1.1 Put $Z:=Z_1$, so that $Z$ is a $k$-scheme and $j_1=z_1:Z\to X_1$ and $j_2=z_2\sigma:Z\to X_2$ are morphisms of $k$-schemes. Both are closed immersions: $j_1$ by the data, and for $j_2$ the underlying map is the composite of the homeomorphism $\sigma$ onto $|Z_2|$ with the homeomorphism $z_2$ onto the closed subset $|Z_2|$, hence a homeomorphism onto a closed subset, while the sheaf map $\mathcal O_{X_2}\to(z_2\sigma)_*\mathcal O_Z$ equals $\mathcal O_{X_2}\to z_{2*}\mathcal O_{Z_2}$ under the identification $\sigma_*\mathcal O_Z=\mathcal O_{Z_2}$, hence is surjective. [F5, given]

1.2 Apply [F4] with $S=\operatorname{Spec}k$ to the closed immersions $j_1$ and $j_2$. The pushout $T=X_1\amalg_ZX_2$ exists as a $k$-scheme with structure morphisms $a:X_1\to T$ and $b:X_2\to T$, and $a$ and $b$ are closed immersions with $|T|=|X_1|\cup|X_2|$ and $|X_1|\cap|X_2|=|Z|$; the square $Z\to X_1$, $Z\to X_2$, $X_1\to T$, $X_2\to T$ is Cartesian; every point of $Z$ has an open neighbourhood in $T$ of the form $\operatorname{Spec}(A\times_CB)$ with $A=\Gamma(U,\mathcal O)$, $B=\Gamma(V,\mathcal O)$, $C=\Gamma(j_1^{-1}(U),\mathcal O)$ for affine opens $U\subseteq X_1$, $V\subseteq X_2$ with $j_1^{-1}(U)=j_2^{-1}(V)$, while the points of $T$ outside $Z$ lie in the open subschemes $X_1\setminus Z$ and $X_2\setminus Z$. By [F5] the closed immersions $a,b$ exhibit $X_1,X_2$ as closed subschemes of $T$; this is the existence clause of the statement. [F4, F5]

1.3 Each $X_i$ is the relative projective space $\mathbb P^3_k$ of [F2], so by [F3] with $S=\operatorname{Spec}k$ and $n=3$ each structure morphism $X_i\to\operatorname{Spec}k$ is proper; by [F7] each $X_i\to\operatorname{Spec}k$ is therefore separated, of finite type and universally closed, separated meaning that its diagonal is a closed immersion by [F8], and by [F9] each $X_i\to\operatorname{Spec}k$ is in particular quasi-compact and locally of finite type. [F2, F3, F7, F8, F9]

1.4 Let $U\subseteq T$ be an affine open. By [F6] applied to the closed immersion $a:X_1\to T$ and the affine open $U$, the preimage $a^{-1}(U)$ is the affine scheme $\operatorname{Spec}(\Gamma(U,\mathcal O_T)/I)$ for an ideal $I$, and it coincides with the open subscheme $U\cap X_1$ of $X_1$. The same holds for $b^{-1}(U)=U\cap X_2$ inside $X_2$. [F6]

1.5 Let $R\subseteq K$ be a valuation ring with fraction field $K$ and let $\eta$ be the generic point of $\operatorname{Spec}R$. Since $R$ is a subring of the field $K$ by [F24] and $K$ is its field of fractions [F26], $R$ is a domain, so $(0)$ is a prime ideal, $V((0))=\operatorname{Spec}R$ by [F20], and by [F21] this set is closed; hence by [F27] the point $\eta=(0)$ is the generic point of $\operatorname{Spec}R$ and $\operatorname{Spec}R=\overline{\{\eta\}}$. Moreover, if $O\subseteq\operatorname{Spec}R$ is an open subset containing the point $\mathfrak m$ corresponding to the unique maximal ideal of $R$ [F25], then $O$ is the complement of a closed set $V(I)$ for some ideal $I$ by [F20] and [F21]; $\mathfrak m\notin V(I)$ means $I\nsubseteq\mathfrak m$, so $I$ contains an element outside $\mathfrak m$, which is a unit of $R$ by [F25], whence $I=R$, $V(I)=V(R)=\varnothing$ and $O=\operatorname{Spec}R$. So every open subset of $\operatorname{Spec}R$ containing $\mathfrak m$ is all of $\operatorname{Spec}R$. [F20, F21, F24, F25, F26, F27]

2.1 Since $X_i\to\operatorname{Spec}k$ is quasi-compact and $\operatorname{Spec}k$ is quasi-compact and affine, [F10] and [F31] show that $X_i=(X_i\to\operatorname{Spec}k)^{-1}(\operatorname{Spec}k)$ is quasi-compact. The closed immersions $a,b$ are homeomorphisms onto the closed subsets $|X_1|,|X_2|\subseteq|T|$, so these are quasi-compact subspaces of $|T|$ homeomorphic to $X_1,X_2$, and $|T|=|X_1|\cup|X_2|$. A union of two quasi-compact subspaces is quasi-compact: given an open cover of the union, intersecting its members with each of the two subspaces gives open covers of the subspaces, from which finitely many members can be selected by [F30], and the finitely many selected members cover the union. Hence $T$ is quasi-compact by [F11], and $T\to\operatorname{Spec}k$ is quasi-compact by [F31] applied to the affine cover $\{\operatorname{Spec}k\}$. [F4, F10, F11, F30, F31, step 1.2, step 1.3]

2.2 Let $z\in Z$ and let $\operatorname{Spec}(A\times_CB)$ be the chart of [F4] part (3) around $z$, so that $A=\Gamma(U,\mathcal O_{X_1})$ and $B=\Gamma(V,\mathcal O_{X_2})$ for affine opens $U\subseteq X_1$, $V\subseteq X_2$ with $j_1^{-1}(U)=j_2^{-1}(V)$ and $C=\Gamma(j_1^{-1}(U),\mathcal O_Z)$. By [F6] applied to the closed immersions $j_1,j_2$ over the affine opens $U,V$ the maps $A\to C$ and $B\to C$ are surjective with $j_1^{-1}(U)=\operatorname{Spec}(A/I)$, $C=A/I$ for $I=\ker(A\to C)$ and similarly $C=B/J$ for $J=\ker(B\to C)$. Since $X_1\to\operatorname{Spec}k$ is locally of finite type by step 1.3, the affine-locality [F12] makes $A$ a finitely generated $k$-algebra, and likewise $B$; then $C$ is a finitely generated $k$-algebra, being a quotient of $A$. Choose finitely many $k$-algebra generators $c_1,\dots,c_r$ of $C$ and lifts $\alpha_\ell\in A$, $\beta_\ell\in B$ of them, and finite generating lists $i_1,\dots,i_s$ of $I$ and $j_1,\dots,j_t$ of $J$: such lists exist because by [F32] $A$ is a quotient of a polynomial ring over the field $k$, ideals of $A$ are images of ideals of that polynomial ring, and those have finite generating lists by [F33]. Also choose finite $k$-algebra generating lists $a_1,\dots,a_u$ of $A$ and $b_1,\dots,b_v$ of $B$. Surjectivity onto $C$ gives lifts $\widehat b_p\in B$ of the image of $a_p$, and $\widehat a_q\in A$ of the image of $b_q$. Let $E$ be the $k$-subalgebra of $A\times_CB$ generated by the finitely many pairs $(\alpha_\ell,\beta_\ell)$, $(i_\mu,0)$, $(0,j_\nu)$, $(a_p,\widehat b_p)$ and $(\widehat a_q,b_q)$. The two projections $E\to A$ and $E\to B$ are surjective, since their images contain the chosen algebra generators. Every element $(x,y)\in A\times_CB$ has a common image $P(c_1,\dots,c_r)$ for a polynomial $P$ over $k$. Subtracting $P((\alpha_1,\beta_1),\dots,(\alpha_r,\beta_r))\in E$ leaves $(i,j)$ with $i\in I$ and $j\in J$. Write $i=\sum_\mu d_\mu i_\mu$ and $j=\sum_\nu e_\nu j_\nu$, with $d_\mu\in A$ and $e_\nu\in B$. By the surjectivity of the projections, choose $(d_\mu,d'_\mu)\in E$ and $(e'_\nu,e_\nu)\in E$. Then
$$
(i,j)=\sum_\mu(d_\mu,d'_\mu)(i_\mu,0)+\sum_\nu(e'_\nu,e_\nu)(0,j_\nu)\in E.
$$
Thus every $(x,y)$ belongs to $E$, so $E=A\times_CB$. Hence $A\times_CB$ is a finitely generated $k$-algebra, and $\operatorname{Spec}(A\times_CB)$ is an affine open neighbourhood of $z$ whose coordinate ring is of finite type over $k$. [F4, F6, F12, F32, F33, step 1.3]

2.3 Let $t\in|T|\setminus|Z|$. By [F4] part (3) the point $t$ lies in $X_1\setminus Z$ or in $X_2\setminus Z$; say $t\in X_1\setminus Z$, an open subscheme of $X_1$ and of $T$, on which the structure sheaf of $T$ restricts to that of $X_1$ and the structure morphism to $\operatorname{Spec}k$ restricts to the one of $X_1$. By [F16] choose an affine open neighbourhood $W=\operatorname{Spec}R\subseteq X_1$ of $t$. The intersection $W\cap(X_1\setminus Z)$ is an open neighbourhood of $t$ in $W$, so by the basis statement [F22] there is $f\in R$ with $t\in D(f)\subseteq W\cap(X_1\setminus Z)$. By [F23] the open subscheme $D(f)$ is affine with coordinate ring $R_f$, which is a finitely generated $k$-algebra: $R$ is finitely generated over $k$ by the affine-locality [F12] applied to the locally finite type morphism $X_1\to\operatorname{Spec}k$ of step 1.3, and this principal localization of a finitely generated $k$-algebra is finitely generated, being a quotient of a polynomial ring in one further variable by [F32]. Thus every point of $T\setminus Z$ has an affine open neighbourhood with finitely generated coordinate ring over $k$. [F4, F12, F16, F22, F23, F32, step 1.3]

2.4 Let $h:\operatorname{Spec}R\to T$ be a morphism of the kind considered in step 1.5 and let $X\subseteq T$ be a closed subscheme with $h(\eta)\in|X|$. Then $h$ factors through $X$. Indeed $h^{-1}(|X|)$ is a closed subset of $\operatorname{Spec}R$ containing $\eta$, so it contains $\overline{\{\eta\}}=\operatorname{Spec}R$ by step 1.5; hence $h(\operatorname{Spec}R)\subseteq|X|$. Choose an affine open $W=\operatorname{Spec}A\subseteq T$ containing the image of the closed point of $\operatorname{Spec}R$, which exists by [F16], and write $X\cap W=\operatorname{Spec}(A/J)$ with the ideal $J$ provided by [F6]. By step 1.5 the preimage $h^{-1}(W)$ is all of $\operatorname{Spec}R$; so $h$ restricts to a morphism $\operatorname{Spec}R\to W$, corresponding under [F17] to a ring map $\psi:A\to R$, the global sections of $\operatorname{Spec}R$ being $R$ by [F19]. The image of the generic point is $\psi^{-1}(0)=\ker\psi$ by [F18], and it lies in $|X|\cap W=V(J)$ by [F20], so $J\subseteq\ker\psi$ and $\psi$ factors as $A\to A/J\to R$; the corresponding morphism $\operatorname{Spec}R\to X\cap W$ has composite with the restrictions $X\cap W\to W\to T$ equal to $h$ by the bijection [F17], since both sides induce the same ring map $A\to R$. [F6, F16, F17, F18, F19, F20, step 1.5]

3.1 The charts of steps 2.2 and 2.3 cover $T$: every point of $T$ lies in $|Z|$, so in one of the charts $\operatorname{Spec}(A\times_CB)$, or outside $|Z|$, so in one of the affine opens $D(f)\subseteq X_1\setminus Z$, $X_2\setminus Z$. All of these affine opens lie over the single affine open $\operatorname{Spec}k$ of the target, and their coordinate rings are finitely generated $k$-algebras; by the affine-locality [F12] the morphism $T\to\operatorname{Spec}k$ is locally of finite type. [F12, step 2.2, step 2.3]

3.2 Let $U,V\subseteq T$ be affine opens; they lie over the common affine open $\operatorname{Spec}k$ of the base. By step 1.4 the subschemes $U\cap X_1$ and $V\cap X_1$ are affine opens of $X_1$, and $X_1\to\operatorname{Spec}k$ is separated by step 1.3, so [F13] gives that $U\cap V\cap X_1=(U\cap X_1)\cap(V\cap X_1)$ is affine, hence quasi-compact by [F29]. The same argument shows that $U\cap V\cap X_2$ is quasi-compact. Since $|T|=|X_1|\cup|X_2|$ by step 1.2, the open set $U\cap V$ is the union of the two quasi-compact subspaces $U\cap V\cap X_1$ and $U\cap V\cap X_2$, hence quasi-compact by the finite-union argument of step 2.1. Therefore $T\to\operatorname{Spec}k$ is quasi-separated in the sense of [F10]. [F10, F13, F29, F30, step 1.2, step 1.3, step 2.1, step 1.4]

3.3 Let a valuative diagram for $T\to\operatorname{Spec}k$ be given: a valuation ring $R$ with fraction field $K$, a morphism $\operatorname{Spec}K\to T$ and a morphism $\operatorname{Spec}R\to\operatorname{Spec}k$ forming a commutative square [F15]. Let $p\in|T|$ be the image of the generic point. Since $|T|=|X_1|\cup|X_2|$ by step 1.2, after possibly interchanging the indices $1,2$ we may assume $p\in|X_1|$. Choosing an affine open $W=\operatorname{Spec}A\subseteq T$ around $p$ with $X_1\cap W=\operatorname{Spec}(A/J)$ by [F6, F16], the generic morphism $\operatorname{Spec}K\to T$ corresponds to a ring map $A\to K$ whose kernel is $p$ [F17, F18] and which therefore kills $J$; as in step 2.4 it follows that the generic morphism factors as $\operatorname{Spec}K\to X_1\to T$ through the closed immersion $a$. Consequently the generic morphism $\operatorname{Spec}K\to X_1$, together with the given $\operatorname{Spec}R\to\operatorname{Spec}k$, is a valuative diagram for the proper morphism $X_1\to\operatorname{Spec}k$ of step 1.3: the square commutes because $a$ is a morphism of $k$-schemes, so the two composites $\operatorname{Spec}K\to\operatorname{Spec}k$ agree. The morphism $X_1\to\operatorname{Spec}k$ is of finite type by step 1.3, and is quasi-separated because separatedness makes its affine-open intersections affine by [F13], hence quasi-compact by [F29]. Thus [F14] supplies a lift $\operatorname{Spec}R\to X_1$ of that diagram; composing it with $a$ gives a lift $\operatorname{Spec}R\to T$ of the original diagram, whose generic restriction is the given morphism because the lift in $X_1$ has the prescribed generic restriction. [F6, F13, F14, F15, F16, F17, F18, F29, step 1.2, step 1.3, step 2.4]

3.4 Let $h_1,h_2:\operatorname{Spec}R\to T$ be two lifts of one valuative diagram for $T\to\operatorname{Spec}k$ [F15]; we show $h_1=h_2$. By the definition of a lift both restrict to the given generic morphism, so with $\eta$ the generic point of $\operatorname{Spec}R$ given by step 1.5 the points $h_1(\eta)=h_2(\eta)=p$ coincide, and by step 1.2 we may assume $p\in|X_1|$. Applying step 2.4 to $h_1$ and $h_2$ with the closed subscheme $X_1\subseteq T$ gives factorizations $h_i=a\,h_i'$ with $h_i':\operatorname{Spec}R\to X_1$. The closed immersion $a$ is a monomorphism by [F28], so from $a\,(h_1')|_{\operatorname{Spec}K}=h_1|_{\operatorname{Spec}K}=h_2|_{\operatorname{Spec}K} =a\,(h_2')|_{\operatorname{Spec}K}$ we get $(h_1')|_{\operatorname{Spec}K}=(h_2')|_{\operatorname{Spec}K}$. Hence $h_1'$ and $h_2'$ are two lifts of one valuative diagram for the proper morphism $X_1\to\operatorname{Spec}k$ of step 1.3, which is of finite type and quasi-separated; by the uniqueness assertion of [F14] (which holds for every valuative diagram of a proper morphism) $h_1'=h_2'$, and therefore $h_1=h_2$. [F14, F15, F28, step 1.2, step 1.3, step 1.5, step 2.4]

4.1 By step 2.1 the morphism $T\to\operatorname{Spec}k$ is quasi-compact and by step 3.1 it is locally of finite type; by [F9] and [F12] it is of finite type. [F9, F12, step 2.1, step 3.1]

5.1 Steps 3.3 and 3.4 show that every valuative diagram for $T\to\operatorname{Spec}k$ over an arbitrary valuation ring has exactly one lift. By step 4.1 the morphism $T\to\operatorname{Spec}k$ is of finite type and by step 3.2 it is quasi-separated, so the converse direction of the criterion [F14] shows that $T\to\operatorname{Spec}k$ is proper. Combined with the existence clause of step 1.2 this proves that the closed-subscheme pushout $X_1\amalg_ZX_2$ exists as a $k$-scheme, that each $X_i$ is a closed subscheme of it, and that it is proper over $k$, as claimed. [F14, step 1.2, step 4.1, step 3.2, step 3.3, step 3.4]

6.1 The Axiom of Choice [F1] is used exactly through the four cited results [F3], [F4], [F6] and [F14], each of which assumes it; every other step selects only finitely many objects (finitely many generators, finitely many members of a finite subcover) and is choice-free. The statement has no degenerate case: $k$ is nonempty, the line and the conic are nonempty subschemes of $X_i$, so $Z$ is nonempty, and the argument above nowhere uses properness or nonemptiness of $Z$ beyond the closed-immersion hypotheses. [F1, F3, F4, F6, F14] ∎
