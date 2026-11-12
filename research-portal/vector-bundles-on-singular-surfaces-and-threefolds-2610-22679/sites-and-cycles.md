---
title: Scheme sites and cycle theories
description: Define the Nisnevich, cdh and étale interfaces and distinguish
  derived sections from localization. Build the higher-cycle and curve-divisor
  chains, with precise Levine–Weibel, Milnor-K and Euler terminology for the
  article's comparisons and questions.
status: published
dependency_level: 1
---

**Purpose:** Define the Nisnevich, cdh and étale interfaces and distinguish derived sections from localization. Build the higher-cycle and curve-divisor chains, with precise Levine–Weibel, Milnor-K and Euler terminology for the article's comparisons and questions.

## Maps to finite disjoint unions of the base

[Open item](item-lem-clopen-finite-constant-maps) · level 0


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $A$ a finite set, and $X$ a Noetherian $k$-scheme. Put $Y_A=\coprod_{a\in A}\operatorname{Spec}k$. There are natural bijections between $k$-morphisms $X\to Y_A$, decompositions $X=\coprod_{a\in A}X_a$ into pairwise disjoint open-and-closed subsets, and functions $\pi_0(X)\to A$. Here empty $X_a$ are allowed and $\pi_0(X)$ is the set of connected components of the underlying topological space. If $U\subseteq X$ is dense, restriction from locally constant integer-valued functions on $X$ to such functions on $U$ is injective. In particular this holds when $U$ is dense and meets every component.

A subset is open-and-closed, or clopen, if it is both open and closed. A connected component is a maximal nonempty connected subset; connected means that the subspace cannot be partitioned into two nonempty open subsets. A function is locally constant if every point has an open neighbourhood on which it is constant. Noetherian means that descending chains of closed subsets stabilize. Density means that every nonempty open subset of $X$ meets $U$.

### Statement references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:thm-gluing-ringed-and-locally-ringed-spaces](https://alphabetamath.cc/item/thm-gluing-ringed-and-locally-ringed-spaces)

[math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)

[math:def-morphism-locally-ringed-spaces](https://alphabetamath.cc/item/def-morphism-locally-ringed-spaces)

[math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)

[math:thm-structure-sheaf-affine-scheme](https://alphabetamath.cc/item/thm-structure-sheaf-affine-scheme)

[math:cor-spectrum-with-structure-sheaf-locally-ringed](https://alphabetamath.cc/item/cor-spectrum-with-structure-sheaf-locally-ringed)

### Facts & Assumptions
[A1] The Axiom of Choice is assumed; it is used through the finite decomposition supplier in [F1] and the structure-sheaf construction supplier in [F3]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, a Noetherian topological space is a finite union of irreducible closed subsets. An irreducible space is nonempty and cannot be expressed as a union of two proper closed subsets. The descending-chain definition of Noetherianity is the one stated above. [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[F2] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$, and a $k$-morphism is a scheme morphism commuting with the structure morphisms. Scheme morphisms are morphisms of the underlying locally ringed spaces. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[F3] A field is a commutative ring with $0\ne1$ in which every nonzero element is invertible; thus the field $k$ is a permissible ring for the affine-spectrum construction. For a commutative ring $R$ with $1$, the underlying space $\operatorname{Spec}R$ consists of its prime ideals, with basic opens $D(r)=\{\mathfrak p:r\notin\mathfrak p\}$. Under the Axiom of Choice the basic-open localization data extend to the structure sheaf $\mathcal O_{\operatorname{Spec}R}$; the resulting ringed space is locally ringed. An affine scheme is a locally ringed space isomorphic to such a spectrum with its structure sheaf, so this construction for $R=k$ gives the affine scheme denoted $\operatorname{Spec}k$. A scheme is a locally ringed space locally isomorphic to affine schemes; the empty locally ringed space is a scheme. [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:thm-structure-sheaf-affine-scheme](https://alphabetamath.cc/item/thm-structure-sheaf-affine-scheme) [math:cor-spectrum-with-structure-sheaf-locally-ringed](https://alphabetamath.cc/item/cor-spectrum-with-structure-sheaf-locally-ringed) [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[F4] Locally ringed spaces with specified isomorphisms between open overlaps satisfying the identity and cocycle conditions glue to a locally ringed space covered by the given pieces. This is an object-gluing result; gluing morphisms is proved in step 1.2 below. [math:thm-gluing-ringed-and-locally-ringed-spaces](https://alphabetamath.cc/item/thm-gluing-ringed-and-locally-ringed-spaces)

[F5] A morphism of ringed spaces consists of a continuous map $h:T\to Z$ and ring homomorphisms $h^\sharp_V:\mathcal O_Z(V)\to\mathcal O_T(h^{-1}V)$ for open $V\subseteq Z$, compatible with restrictions. It is a morphism of locally ringed spaces when the induced maps on stalks are local ring homomorphisms. Composition composes the continuous maps and the corresponding section maps. [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-morphism-locally-ringed-spaces](https://alphabetamath.cc/item/def-morphism-locally-ringed-spaces)

[F6] Compatible sections of a sheaf over an open cover glue uniquely. This includes the empty cover of the empty set, so a sheaf of rings has exactly one section over the empty set. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[F7] An open subset $T_i$ of a scheme $T$ carries its open subscheme structure $(T_i,\mathcal O_T|_{T_i})$. For an open subset $W\subseteq T_i$, the restricted sheaf has sections $(\mathcal O_T|_{T_i})(W)=\mathcal O_T(W)$. [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

### Proof

**Given:** A field $k$, a finite set $A$, a Noetherian $k$-scheme $X$, and the Axiom of Choice.

**Goal:** Construct the stated scheme and bijections and establish injectivity of restriction.

1.1 Using the affine scheme constructed in [F3], for each $a\in A$ take a labelled copy $S_a$ of the affine scheme $\operatorname{Spec}k$. Apply [F4] with the full piece as its self-overlap and with empty overlaps between different pieces. All overlap maps are identities, including the unique maps on empty overlaps, so the identity and cocycle conditions hold. The glued locally ringed space has underlying set the disjoint union of the labelled copies, with a subset open exactly when its trace on each copy is open. The copies are open and each complement is the union of the other copies, hence each copy is clopen. Each point has the affine neighbourhood $S_a$, so [F3] makes the result a scheme, denoted $Y_A$. When $A=\varnothing$, use the empty locally ringed space, which is a scheme by [F3]; its structure sheaf has the unique section over its only open set by [F6]. [A1, F3, F4, F6, given, construct]

1.2 We establish the needed gluing of morphisms. Let $T=\bigcup_i T_i$ be an open cover of a scheme and let $h_i:T_i\to Z$ be scheme morphisms agreeing as morphisms on overlaps, using the open subscheme structures in [F7]. Their continuous maps define a unique map $h:T\to Z$; it is continuous because $h^{-1}(V)=\bigcup_i h_i^{-1}(V)$ is open for every open $V\subseteq Z$. For $s\in\mathcal O_Z(V)$, the sections $h_i^\sharp(s)$ on $T_i\cap h^{-1}(V)$ agree on overlaps, so [F6] supplies a unique glued section on $h^{-1}(V)$. These assignments preserve addition, multiplication and the unit, and commute with restriction: each assertion holds on every $T_i\cap h^{-1}(V)$ and then follows globally by uniqueness in [F6]. They therefore define the sheaf map required in [F5]. At $t\in T_i$, its stalk map equals that of $h_i$, since germs can be computed inside the open neighbourhood $T_i$; thus it is local. Uniqueness follows for the underlying map and then for every section map from [F6]. Restriction of a morphism to an open source uses these same section maps. A morphism whose image lies in an open subscheme $W\subseteq Z$ factors uniquely through $W$: on any open $V\subseteq W$, which is also open in $Z$, use its original section map; [F7] identifies the sheaves and stalks, so the factorization is local and unique. In particular the inclusion of an open subscheme is a scheme morphism, using restriction on sections and identity maps on stalks. The empty domain admits exactly one morphism to any scheme, by [F6]; a nonempty domain has no map to the empty scheme. [F2, F5, F6, F7, construct]

1.3 By [F1], write $X$ as a finite union of irreducible closed subsets $C_1,\ldots,C_n$, allowing $n=0$. Each $C_i$ is connected: a separation into two nonempty relatively open subsets would also express it as a union of two proper relatively closed subsets. Form the finite graph with vertices $i$ and an edge whenever $C_i\cap C_j\ne\varnothing$; its graph components are the classes of vertices joined by finite edge paths. For each graph component, the union of its $C_i$ is connected. Indeed, in a separation of that union each connected $C_i$ lies entirely in one side, and intersecting $C_i$ must lie in the same side; paths would force all of them into one side. These unions are pairwise disjoint, closed, and cover $X$; each is also open because its complement is a finite union of the other closed unions. Any connected subset meeting one such union lies entirely inside it, since otherwise its intersections with that union and its complement would separate the subset. These unions are therefore exactly the connected components of $X$, and are finite in number and clopen. The empty-space case has no components. [F1, A1, given]

2.1 By step 1.2 the identity morphisms $S_a\to\operatorname{Spec}k$ glue to a structure morphism $p:Y_A\to\operatorname{Spec}k$, including when $A$ is empty. Write $j_a:S_a\hookrightarrow Y_A$ for the open inclusions. Let $p_X:X\to\operatorname{Spec}k$ be the structure morphism of $X$. For a $k$-morphism $f:X\to Y_A$, the inverse images $X_a=f^{-1}(S_a)$ are disjoint clopen subsets covering $X$. Conversely, from any such decomposition give $X_a$ its open subscheme structure and take $j_a\circ p_X|_{X_a}$, identifying $S_a$ with the base. These morphisms glue uniquely by step 1.2. Their composite with $p$ agrees with $p_X$ on every $X_a$, so uniqueness of gluing makes the resulting morphism a $k$-morphism. If a $k$-morphism lands in $S_a$ on $X_a$, the open-target factorization of step 1.2 gives $g_a:X_a\to S_a$; the equation $p\circ f=p_X$ and $p|_{S_a}=\operatorname{id}$ force $g_a=p_X|_{X_a}$ as scheme morphisms. Thus the two constructions are inverse. If $A$ is empty and $X$ is nonempty both sets are empty; if $X$ is empty each consists of one element. [F2, F5, F7, step 1.1, step 1.2, given]

3.1 A clopen decomposition assigns every connected component to exactly one $X_a$: its intersections with the $X_a$ are disjoint relatively open subsets covering it, and two nonempty intersections would separate it. Conversely, by step 1.3 the union of the components assigned to each $a$ by a function $\pi_0(X)\to A$ is clopen, since there are only finitely many clopen components. These operations are inverse and, together with step 2.1, give all the stated bijections. To check naturality in $X$, a $k$-morphism $q:X'\to X$ pulls the decomposition back to $q^{-1}(X_a)$. The image of a connected component of $X'$ is connected, because a separation of the image would pull back to a separation of the component. It consequently lies in one connected component of $X$, so the corresponding function is composed with the induced map $\pi_0(X')\to\pi_0(X)$. For a function $\alpha:A\to B$ of finite sets, step 1.2 constructs $Y_A\to Y_B$ by the identity map of the base from summand $a$ to summand $\alpha(a)$. Postcomposition replaces the decomposition by $\big(\bigcup_{\alpha(a)=b}X_a\big)_{b\in B}$ and the component function by its composite with $\alpha$. These descriptions respect identities and composition, including empty cases, establishing naturality in both variables. [F2, step 1.2, step 2.1, step 1.3]

4.1 Let $f,g:X\to\mathbb Z$ be locally constant and agree on dense $U$. The set $D=\{x:f(x)\ne g(x)\}$ is open: at each point of $D$, intersect neighbourhoods on which $f$ and $g$ are respectively constant. If $D$ were nonempty it would meet $U$, contradicting agreement there. Thus $D$ is empty and $f=g$; restrictions remain locally constant in the subspace topology. In particular, a dense subset meets every nonempty clopen connected component by step 1.3, so the stated special case follows. [given, step 1.3] ∎


## Levine–Weibel zero cycles

[Open item](item-def-levine-weibel-zero-cycles) · level 0


### Definition
Assume the Axiom of Choice. Let $k$ be a perfect field and let $X$ be a reduced equidimensional quasi-projective $k$-scheme of dimension $d\geq 1$. A $k$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}k$. Here reduced means that the local rings have no nonzero nilpotents, equidimensional means that all irreducible components have dimension $d$, and quasi-projective means that $X$ is an open subscheme of a projective $k$-scheme, where projective means admitting a closed immersion into some finite-dimensional projective space over $k$. In particular, $X$ admits a quasi-compact immersion $X\hookrightarrow\mathbb P^n_k$ for some finite $n$, as justified below. A perfect field is one whose algebraic extensions are separable. Dimension means the supremum of lengths of strict chains of nonempty irreducible closed subsets; the empty scheme has dimension $-\infty$. Write $U=X_{\mathrm{reg}}$ for the smooth locus of $X$ over $k$ and $Y=X_{\mathrm{sing}}=X\setminus U$ with its reduced closed subscheme structure. For a closed subset with affine description $V(I)\subseteq\operatorname{Spec}A$, its reduced induced structure is $\operatorname{Spec}(A/\sqrt I)$; the existence and uniqueness of this reduced induced structure is the imported Stacks Lemma 26.12.4. Let $Z_0(X,Y)$ be the free abelian group on the closed points of $U$, concretely the finite formal sums $\sum_x n_x[x]$ with $n_x\in\mathbb Z$ and coefficientwise addition.

A **Cartier curve relative to $Y$** is a reduced, purely one-dimensional closed subscheme $C\hookrightarrow X$ such that no irreducible component of $C$ is contained in $Y$, and, at every point $x\in C\cap Y$, the ideal of $C$ in $\mathcal O_{X,x}$ is generated by a regular sequence. Purely one-dimensional means that every irreducible component has dimension one. A regular sequence $a_1,\ldots,a_r$ in a local ring means that $(a_1,\ldots,a_r)$ is proper and each $a_i$ is a non-zero-divisor modulo the preceding elements; the empty sequence is allowed.

For such a curve let $C_1,\ldots,C_r$ be its irreducible components with their reduced induced closed subscheme structures and generic points $\eta_i$ (so $\overline{\{\eta_i\}}=C_i$), and put $S=(C\cap Y)\cup\{\eta_1,\ldots,\eta_r\}$. Let $\mathcal O_{C,S}=\varinjlim_{S\subset V}\Gamma(V,\mathcal O_C)$, where $V$ runs through open neighborhoods of $S$ and the maps are restrictions to smaller neighborhoods. Concretely, an element is a pair $(V,s)$ with $s\in\Gamma(V,\mathcal O_C)$, modulo equality after restriction to some smaller neighborhood of $S$; addition and multiplication are performed on a common smaller neighborhood. The notation $\Gamma(V,\mathcal O_C)$ denotes the ring of regular sections on $V$, and the superscript $\times$ denotes its group of multiplicatively invertible elements. For $f\in\mathcal O_{C,S}^{\times}$, let $f_i\in k(C_i)^\times$ be its restriction to $\eta_i$, where $k(C_i)=\mathcal O_{C_i,\eta_i}$ is the function field of the integral curve $C_i$; integral means nonempty, reduced and irreducible. Form the finite zero-cycle
$$\operatorname{div}_C(f)=\sum_{i=1}^r\operatorname{div}_{C_i}(f_i),$$
viewed on $X$ through the closed immersions $C_i\hookrightarrow X$. Here module length is the number of simple factors in a finite composition series, with length zero for the zero module. For an integral curve $D$ and $g\in k(D)^\times$, its principal divisor is $\sum_{x\in D\text{ closed}}\operatorname{ord}_{\mathcal O_{D,x}}(g)[x]$: writing $g=a/b$ with nonzero $a,b\in\mathcal O_{D,x}$, the coefficient is $\operatorname{length}(\mathcal O_{D,x}/(a))-\operatorname{length}(\mathcal O_{D,x}/(b))$.

Let $R_0^{LW}(X,Y)$ be the subgroup of $Z_0(X,Y)$ generated by all $\operatorname{div}_C(f)$ for these curves and units. The **Levine–Weibel Chow group of zero cycles** is
$$\operatorname{CH}_0^{LW}(X)=Z_0(X,Y)/R_0^{LW}(X,Y).$$
The subgroup generated here consists of finite integer linear combinations of the specified divisors. The quotient consists of additive cosets, with $(z+R)+(w+R)=(z+w)+R$. This construction uses regular-point generators and the specified Cartier-curve relations; it is not the definition of the unrestricted ordinary Chow group on a singular scheme.

### Facts & Assumptions

**Given:** The field, scheme, curves and functions in the definition, and the Axiom of Choice.

**Goal:** Show that the displayed relations are finite cycles supported on $U$ and that the quotient is well defined.

[F1] For an integral finite-type curve over a field, the principal divisor has finite support. At each closed point its local ring is a one-dimensional Noetherian local domain, and the stated length difference is independent of the fraction representing the rational function and is zero on units. These are the precise principal-divisor and order interfaces used here ([math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence), [math:lem-order-function-one-dimensional-local-domain](https://alphabetamath.cc/item/lem-order-function-one-dimensional-local-domain), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)). Choice is inherited through the order and finite-length interfaces ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F2] The quasi-projective $k$-scheme $X$ is of finite type. Closed immersions are of finite type and finite-type morphisms compose, so $C$ and each reduced component $C_i$ are of finite type over $k$. A finite-type scheme over a Noetherian base is Noetherian, and its underlying space is Noetherian. Since a field has only the ideals zero and the whole field, $\operatorname{Spec}k$ is Noetherian. The structure morphism of $X$ is locally of finite presentation because its base is Noetherian. The scheme and morphism terminology is supplied by [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) and [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism), with the projective convention of [math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj). To check the open-in-projective convention, a projective $k$-scheme is H-quasi-projective via its closed projective-space immersion, hence finite type by Stacks Lemma 29.41.4 and Noetherian by Lemma 29.15.6. Its open immersion from $X$ is quasi-compact by Lemma 28.5.3, so the composite immersion of $X$ into that projective space is quasi-compact. The scheme-level implications are precise imported inputs recorded below.

[F3] Under AC, the smooth locus of a locally finitely presented morphism is open ([math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism), [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)). Apply this to $X\to\operatorname{Spec}k$ using [F2], so $Y$ is closed. The reduced closed structure on $Y$ exists uniquely by Stacks Lemma 26.12.4. Component schemes use their reduced induced structures ([math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)). A generic point means a point whose closure is the component ([math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)). Existence of such points on affine charts is supplied by [math:thm-spectrum-sober](https://alphabetamath.cc/item/thm-spectrum-sober), and distinct affine points have distinct closures by [math:cor-spectrum-is-t-zero](https://alphabetamath.cc/item/cor-spectrum-is-t-zero). The generic stalk of an integral finite-type scheme is its function field, canonically the fraction field on every nonempty affine open ([math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)).

[F4] Under AC, a Noetherian space has finitely many irreducible components, each subspace is Noetherian, and dimension is measured by chains of irreducible closed subsets ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components), [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)). Noetherian here means that descending chains of closed subsets stabilize.

### Justification

1.1 By [F2], the curve $C$ is Noetherian, and by [F4] it has finitely many irreducible components. By [F3], $Y$ is closed. For each component $C_i$, take an affine open of $C$ meeting it. The nonempty intersection with $C_i$ is irreducible and closed in that affine open, so [F3] gives a generic point there. Its closure in $C$ is $C_i$, since the intersection is dense in $C_i$. Distinct points of a scheme have distinct closures: if two points had the same closure, any affine neighborhood of one would contain the other (otherwise its closed complement would contain both closures), contradicting the affine assertion in [F3]. Thus each $C_i$ has the unique generic point used in the definition. Any nonempty irreducible closed subset of $C\cap Y$ lies in one of the finitely many components of $C$ (otherwise its intersections with those components would express it as a finite union of proper closed subsets); it is a proper subset of that one-dimensional component because no component is contained in $Y$. The chain definition of dimension in [F4] therefore gives $\dim(C\cap Y)\leq0$, including the empty case. This subspace is Noetherian by [F4], so it has finitely many irreducible components. Every point closure is irreducible; dimension at most zero prevents a strict inclusion of nonempty irreducible closed subsets. Scheme points are distinguished by their closures, hence each such zero-dimensional component is a single closed point. Thus $C\cap Y$ and $S$ are finite. By their reduced structures and [F2], the $C_i$ are integral finite-type curves. [F2, F3, F4, given]

2.1 Represent $f$ and its inverse by sections on neighborhoods of $S$. Their product equals $1$ in the defined colimit, so the explicit equivalence relation permits shrinking to a common neighborhood on which they are inverse sections. Restricting to the generic points gives the nonzero rational functions $f_i$ in the function fields identified by [F3]; different representatives agree after a further restriction and give the same $f_i$. By [F1] their component divisors are well defined and finite; there are finitely many components by step 1.1, so the sum is finite. At every $x\in C\cap Y$, restriction to any component through $x$ gives inverse elements of $\mathcal O_{C_i,x}$, so [F1] gives order zero (the unit quotients in the length formula are zero). The finite sum is thus supported on $U$; a closed immersion sends each closed component point to the same closed point of $X$. Its closedness in $U$ follows by intersection with the open $U$. The relations therefore lie in $Z_0(X,Y)$. Their finite integer combinations form a subgroup $R$. If $z-z'\in R$ and $w-w'\in R$, then $(z+w)-(z'+w')\in R$, so addition of the defined cosets is well defined; associativity, identity, inverses and commutativity descend from coefficientwise addition of cycles. This proves well-definedness of the stated quotient. AC is used through [F1], the openness and affine generic-point suppliers [F3] and the Noetherian-space suppliers [F4]; no additional choice is used in shrinking neighborhoods or forming finite sums. [F1, F2, F3, F4, step 1.1, construct] ∎

### External input
The Cartier-curve, semilocal-unit and component-divisor presentation is adapted from Krishna, §2.1, through equation (2.1), in the pure-dimensional intrinsic-smooth-locus convention fixed in this definition. The explicit colimit presentation and the preceding well-definedness argument are local explanations, not a claim that Krishna supplies this exact proof.

The finite-type implications in [F2] use Stacks Lemmas 29.15.3, 29.15.5 and 29.15.6; local finite presentation uses Lemma 29.22.9(1); quasi-compactness of the open immersion into a projective $k$-scheme uses Lemma 28.5.3; passage to a Noetherian underlying space uses Lemma 28.5.5. Quasi-projectivity gives finite type by Lemma 29.41.4 in the H-quasi-projective convention: over a field, an open subscheme of a projective scheme has a quasi-compact immersion into finite-dimensional projective space. The reduced induced closed structures use Stacks Lemma 26.12.4 and Definition 26.12.5. The source hypotheses and reading limits are recorded separately for each import. These inputs do not mark the whole locally justified definition as an external-input theorem.


## Euler class group presentation

[Open item](item-def-euler-class-group-presentation) · level 0


### Definition
Let $k$ be an algebraically closed field and let $A$ be a reduced, finitely generated commutative $k$-algebra of Krull dimension $d\geq2$. The **height** of a proper ideal is the least height of a prime containing it; the height of a prime is the supremum of the lengths of strict chains of primes ending there. An ideal $J$ is **$\mathfrak m$-primary** if $\sqrt J=\mathfrak m$ and $ab\in J$, $a\notin J$ imply $b\in\mathfrak m$. The well-definedness argument below assumes the Axiom of Choice (AC).

Let $F(A)$ be the free abelian group on the set of pairs $(J,\omega_J)$ in which $J$ is an $\mathfrak m$-primary ideal of height $d$ for a maximal ideal $\mathfrak m$, and $\omega_J:(A/J)^d\twoheadrightarrow J/J^2$ is an $A/J$-linear surjection. The map is called an **orientation** here; distinct surjections are distinct generators.

For a proper ideal $I$ of height $d$ and an orientation $\omega_I:(A/I)^d\twoheadrightarrow I/I^2$, write its primary decomposition with pairwise distinct maximal radicals as $I=\bigcap_{i=1}^r J_i$, where $J_i$ is $\mathfrak m_i$-primary. Such a decomposition exists and is unique up to permutation, as proved below. It is irredundant: deleting any component changes the intersection. Uniqueness here concerns decompositions with pairwise distinct radicals. The Chinese remainder identifications induce orientations $\omega_{J_i}:(A/J_i)^d\twoheadrightarrow J_i/J_i^2$. Put
$$[(I,\omega_I)]=\sum_{i=1}^r[(J_i,\omega_{J_i})]\in F(A).$$
An orientation is **globally lifted** if there is an $A$-linear surjection $\widetilde\omega:A^d\twoheadrightarrow I$ whose induced map modulo $I$ is $\omega_I$. Let $K(A)$ be the subgroup generated by all $[(I,\omega_I)]$ with globally lifted orientation. The **Euler class group** in this presentation is the quotient $E(A)=F(A)/K(A)$. This definition asserts no comparison with a motivic group.

### Facts & Assumptions
[F1] The algebraically closed field, finite-type algebra, reduced ring, radical and dimension conventions are supplied by [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras), [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring), [math:def-radical-of-an-ideal](https://alphabetamath.cc/item/def-radical-of-an-ideal), [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring), [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals).

[F2] Linear surjections, quotient modules, free modules (in particular free abelian groups over $\mathbb Z$), generated subgroups and quotient groups have the meanings in [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis), [math:def-generated-subgroup](https://alphabetamath.cc/item/def-generated-subgroup), [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group).

[F3] Assume AC. The imported nilradical, spectrum and irreducible-decomposition interfaces below carry this assumption; the Noetherian ideal characterizations also permit dependent choice via AC. No intrinsic necessity of AC for this Euler presentation is asserted. The axiom is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] For commutative rings, Noetherianity is equivalent to finite generation of every ideal and to the ascending chain condition; a finite-type algebra over a Noetherian commutative ring is Noetherian, by [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian).

[F5] For a commutative ring $R$, the prime spectrum is the set of prime ideals and $V(H)$ is the set of primes containing an ideal $H$; these are its Zariski-closed sets. A topological space is Noetherian when descending chains of closed subsets stabilize. A closed subset is irreducible when it is nonempty and is not the union of two proper closed subsets. A generic point of a closed subset is a point whose closure equals that subset. Primes of a quotient correspond to primes containing the kernel. Under AC the spectrum of a Noetherian ring is Noetherian, a Noetherian space is a finite union of irreducible closed subsets, and each nonempty irreducible closed subset of a spectrum is $V(\mathfrak p)$ for its generic prime. These interfaces are [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), [math:lem-primes-of-a-quotient-are-primes-over-the-kernel](https://alphabetamath.cc/item/lem-primes-of-a-quotient-are-primes-over-the-kernel), [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum), [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components), [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals).

[F6] Under AC, the nilradical of a commutative ring is the intersection of its prime ideals, with the empty intersection equal to the whole ring, by [math:cor-nilradical-as-intersection-of-primes](https://alphabetamath.cc/item/cor-nilradical-as-intersection-of-primes).

[F7] Ideal sums and products have the standard finite-sum meanings. For a nonempty finite family of pairwise comaximal ideals, the Chinese remainder map is onto with kernel their intersection, which equals their product, by [math:def-sum-and-product-of-ideals](https://alphabetamath.cc/item/def-sum-and-product-of-ideals), [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals).

[F8] Localisation at $\mathfrak m$ uses denominators outside $\mathfrak m$. The contraction of an extended ideal $Q$ consists of the elements $a$ such that $sa\in Q$ for some denominator $s$, by [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal), [math:thm-ideal-correspondence-for-localisation](https://alphabetamath.cc/item/thm-ideal-correspondence-for-localisation).

[F9] Tensor products have their generators-and-relations meaning; for a commutative ring $R$, ideal $H$ and $R$-module $M$, the natural isomorphism $M\otimes_R R/H\cong M/HM$ is $R/H$-linear, by [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations), [math:cor-tensor-product-with-a-quotient-ring](https://alphabetamath.cc/item/cor-tensor-product-with-a-quotient-ring).

[F10] For an ideal $H$ of a commutative ring $R$, the quotient ring $R/H$ has cosets $r+H$, induced addition and multiplication $(r+H)(s+H)=rs+H$, as in [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring).

[F11] Commutative rings, fields and algebras have the structures in [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring). In particular, nonzero field elements have multiplicative inverses, and the $k$-algebra structure on $A$ includes a unital homomorphism $k\to A$; composition with $A\to A/I$ gives the quotient its $k$-algebra structure.

[F12] An ideal of a commutative ring is an additive subgroup closed under multiplication by arbitrary ring elements, as in [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal). Thus its inherited addition and ring multiplication give its usual module structure; ideal powers mean repeated ideal products as in [F7].

[F13] Modules are unital left modules in the sense of [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules). For an ideal $H\subseteq A$, the conormal module $H/H^2$ has scalar action $(a+H)(x+H^2)=ax+H^2$ for $a\in A$, $x\in H$. The free module $(A/H)^d$ has coordinatewise scalar action. A surjection means a map onto its target; linearity means preservation of addition and this scalar action, as in [F2].

### Justification

**Given:** $A$, $d$, a proper height-$d$ ideal $I$, its orientation $\omega_I$, and AC as in [F3].

**Goal:** Show that the component sum and quotient are well defined.

1.1 A field is Noetherian: its only ideals are $(0)$ and the whole field, each finitely generated. Both $A$ and $B=A/I$ are finite-type $k$-algebras, the latter generated by the residues of any finite algebra-generating list for $A$; hence both are Noetherian by [F4]. Every prime containing $I$ has height at least $d$ and at most $\dim A=d$. If such a prime had a strictly larger prime above it, a chain of length $d$ ending at it would extend to length $d+1$, a contradiction. Thus all primes over $I$ are maximal. By the quotient-prime correspondence in [F5], all primes of the nonzero ring $B$ are maximal. [F1, F3, F4, F5, F10, F11, F12, given]

1.2 The action on $H/H^2$ in [F13] is well defined: replacing $a$ by $a+h$ and $x$ by $x+y$ with $h\in H$ and $y\in H^2$ changes $ax$ by $ay+hx+hy\in H^2$, using ideal absorption. The module axioms descend from multiplication and addition in $A$. Thus the orientation domains and targets, for $H=I$ and for each primary component, are modules over the claimed quotient rings. If $\widetilde\omega:A^d\to I$ is linear, then $\widetilde\omega(IA^d)\subseteq I^2$, so reduction induces $(A/I)^d\to I/I^2$; if the original map is onto, so is this reduction. [F2, F7, F10, F11, F12, F13, given]

2.1 By [F5], $\operatorname{Spec}B$ is Noetherian and is a finite union of nonempty irreducible closed subsets. The decomposition input uses Noetherian induction: a minimal closed counterexample, if reducible, would split into two proper closed subsets which already have finite decompositions; combining those decompositions is a contradiction. Each irreducible closed subset is $V(\mathfrak n)$ for a generic prime $\mathfrak n$; by step 1.1 this prime is maximal, so $V(\mathfrak n)=\{\mathfrak n\}$. Therefore the primes of $B$ form a finite set of distinct maximal ideals $\mathfrak n_1,\ldots,\mathfrak n_r$. Here $r\geq1$: otherwise [F6] would make $1$ nilpotent in the nonzero ring $B$. If the same construction is extended by convention to $I=A$, the zero quotient instead gives an empty sum; that boundary is outside the height-$d$ generators and relations. [F3, F5, F6, step 1.1]

3.1 By [F6], the nilradical $N$ of $B$ is $\bigcap_i\mathfrak n_i$. By [F4], choose generators $x_1,\ldots,x_t$ of $N$ and exponents $e_j\geq1$ with $x_j^{e_j}=0$. With $s=1+\sum_j(e_j-1)$, every monomial of degree $s$ in these generators vanishes, so $N^s=0$; if $t=0$, take $s=1$. Distinct maximal ideals are comaximal. If $u+v=1$ with $u\in\mathfrak n_i$ and $v\in\mathfrak n_j$, expansion of $(u+v)^{2s-1}$ proves $\mathfrak n_i^s+\mathfrak n_j^s=B$. Applying [F7] first to the $\mathfrak n_i$ gives $N=\prod_i\mathfrak n_i$; thus $\prod_i\mathfrak n_i^s=N^s=0$. Applying [F7] again gives $B\cong\prod_i B/\mathfrak n_i^s$. In the $i$th factor its maximal ideal $\mathfrak n_i/\mathfrak n_i^s$ is nilpotent. Every element $a$ outside it is a unit: choose $b$ with $ab=1-z$ for $z$ in that maximal ideal, and invert $1-z$ by the finite geometric sum. It follows that the zero ideal in this factor is primary with that radical. Pulling the kernels of the factor projections back to $A$ gives $I=\bigcap_i J_i$ with distinct maximal radicals $\mathfrak m_i$, each of height $d$ by step 1.1. Each factor is nonzero, so its coordinate kernel cannot be removed without changing the intersection; hence the decomposition is irredundant. [F1, F4, F6, F7, F10, F11, F12, step 1.1, step 2.1, construct]

4.1 Consider any finite primary decomposition of $I$ with pairwise distinct maximal radicals. Its radicals are exactly the maximal ideals containing $I$: each radical contains $I$, while a maximal ideal containing $I$ contains the product of the components and hence one component, and therefore its maximal radical. Fix $\mathfrak m_i$ and localise at it as in [F8]. Each other component contains a power of an element of its radical outside $\mathfrak m_i$, so becomes the unit ideal. Localisation commutes with this finite intersection: if a numerator belongs to each extended component, multiply the finitely many witnessing denominators to put it in the extension of their intersection. Consequently the remaining component localises to $IA_{\mathfrak m_i}$. A $\mathfrak m_i$-primary component $Q$ is saturated for denominators outside $\mathfrak m_i$: if $sa\in Q$ and $s\notin\mathfrak m_i$, its primary condition forces $a\in Q$. The contraction formula in [F8] now gives $Q=\{a\in A:a/1\in IA_{\mathfrak m_i}\}$. Thus each component is forced, proving uniqueness up to permutation within the specified class of decompositions. [F1, F8, F12, step 3.1]

4.2 Write $L_i=\bigcap_{j\ne i}J_j$, with the empty intersection equal to $A$. The $J_j$ are pairwise comaximal: choose two elements in their respective distinct maximal radicals whose sum is $1$, raise them to powers lying in the respective primary ideals, and expand a sufficiently high power of their sum, as in step 3.1. The finite Chinese remainder construction in [F7] gives $J_i+L_i=A$ and $I=J_iL_i$. Choose $u\in J_i$, $v\in L_i$ with $u+v=1$. For $x\in J_i$, the identity $x=xu+xv$ proves $J_i=J_i^2+I$. For $x\in I\cap J_i^2$, both $xu$ and $xv$ lie in $J_i^2L_i$, so $I\cap J_i^2=J_i^2L_i=IJ_i$. Inclusion therefore induces $I/IJ_i\cong J_i/J_i^2$. Here $H M=IJ_i/I^2$ for $R=A/I$, $H=J_i/I$ and $M=I/I^2$: both sides consist of sums of products of the corresponding residue classes. The map $(x+I^2)+HM\mapsto x+IJ_i$ therefore identifies $M/HM$ with $I/IJ_i$. Apply [F9] with these $R$, $H$ and $M$ to obtain
$$(I/I^2)\otimes_{A/I} A/J_i\cong I/IJ_i\cong J_i/J_i^2.$$
Concretely, reduce the $d$ images under $\omega_I$ of the standard basis vectors modulo $IJ_i$ and then include them modulo $J_i^2$. Changing coefficients modulo $J_i$ changes their combinations by elements of $IJ_i$, so this defines an $A/J_i$-linear map from $(A/J_i)^d$. It is onto since every element of $I/IJ_i$ lifts to $I/I^2$ and then through the surjection $\omega_I$. This map is exactly the tensor-induced orientation $\omega_{J_i}$. Step 4.1 makes each component and its induced map independent of decomposition choices, and the sum is independent of their ordering. [F2, F7, F9, F10, F12, F13, step 1.2, step 3.1, step 4.1, construct]

5.1 Ideals of $A$ are subsets of a fixed set, and each orientation is a function between fixed set-sized modules, so the generator pairs form a set. By [F2], $F(A)$ is the additive group of the free $\mathbb Z$-module on that set, consisting of finite integer combinations of the pairs. The finite integer combinations of globally lifted component sums contain zero and are closed under addition and negation; every subgroup containing those sums contains these combinations. They therefore form precisely the subgroup $K(A)$ specified in the Definition. As $F(A)$ is abelian, this subgroup is normal and its cosets form the quotient abelian group $E(A)$ by [F2]. Steps 4.1 and 4.2 show that each generating relation is unambiguous. [F2, step 4.1, step 4.2, construct] ∎



## Small sites and the plus construction

[Open item](item-def-author-cf6ede58b450-site-plus-data) · level 0


### Definition
Fix Grothendieck universes U in V. Here a W-small set means an element of the universe W, and a W-small category is a category whose object set and morphism set are W-small. The category of V-small sets has those sets as objects and all functions between them as morphisms. Let C be a U-small category. A sieve R on an object X is a set of arrows with codomain X closed under precomposition. For f: Y → X, its pullback f*R is the sieve of arrows g into Y for which fg belongs to R. A Grothendieck topology J assigns to each X a set J(X) of covering sieves such that the maximal sieve covers, pullbacks of covering sieves cover, and a sieve S covers X whenever there is a covering sieve R on X for which f*S covers the domain of f for every f in R. The pair (C,J) is a small site.

A presheaf of sets is a contravariant functor F from C to V-small sets. A matching family of F on R is a choice of an element $s_f$ in F(dom f) for every f in R, compatible with restriction along every arrow into dom f. Write Match(R,F) for the set of such families. The canonical map F(X) → Match(R,F) restricts a section to all arrows of R. The presheaf is separated if this map is injective for every covering sieve and a sheaf if it is bijective for every covering sieve.

For a presheaf F, define F+(X) to be pairs (R,s), with R covering X and s in Match(R,F), modulo the relation that two families agree after restriction to some common covering subsieve. For f: Y → X, restrict a representative to f*R by assigning to g the value $s_{fg}$. The unit $\eta_F$ sends a section of F(X) to its restrictions on the maximal sieve.

### Definition references
[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

### Justification
The size convention uses the transitivity, pairing, power-set and indexed-union closure in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). In detail, let $I$ be the morphism set of C and put $T=\bigcup_{f\in I}F(\operatorname{dom}f)$. Since $U\in V$, the set $I$ belongs to V; indexed-union closure gives $T\in V$. Sieves on X are subsets of I, and a matching family on any sieve is a function with graph contained in $I\times T$. Power-set and pairing closure therefore bound the set of all pairs (R,s) by a V-small set. Taking the subset of covering matching pairs and then its quotient still gives a V-small set, since each equivalence class is a subset of that set and the quotient is a subset of its power set. This argument requires no choice of representatives.

The quotient convention is that of [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation). The deferred well-definedness obligations are supplied by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf): the displayed relation is an equivalence relation, restriction is independent of representatives and is functorial, and the unit is natural. Here natural means a natural transformation in the sense of [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation). These assertions are deferred to that lemma, rather than assumed as extra axioms; its proof uses the definitions and the covering-intersection lemma.


## Restriction of finite-support divisors

[Open item](item-lem-author-4057f3195e4f-free-boundary) · level 0


### Statement

Let $S$ be a set and $B\subseteq S$. For any set $T$, write $\mathbb Z^{(T)}$ for the set of functions $f:T\to\mathbb Z$ with finite support $\operatorname{supp}(f)=\{t\in T:f(t)\ne0\}$. Give this set pointwise addition $(f+g)(t)=f(t)+g(t)$, zero function $0_T(t)=0$, and negation $(-f)(t)=-f(t)$.

Let $i:\mathbb Z^{(B)}\to\mathbb Z^{(S)}$ be extension by zero: $i(f)(s)=f(s)$ for $s\in B$ and $i(f)(s)=0$ for $s\in S\setminus B$. Let $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ be restriction, $r(g)=g|_{S\setminus B}$.

These sets are abelian groups and these maps are homomorphisms. The sequence $\mathbb Z^{(B)}\xrightarrow{i}\mathbb Z^{(S)}\xrightarrow{r}\mathbb Z^{(S\setminus B)}\to0$ is exact. Here $0$ denotes the group with one element and its unique operation, and the terminal arrow is the unique map to this group. Exactness means $\operatorname{im}(i)=\ker(r)$ and $r$ is surjective. Explicitly, $\operatorname{im}(i)=\{i(f):f\in\mathbb Z^{(B)}\}$ and $\ker(r)=\{g\in\mathbb Z^{(S)}:r(g)=0_{S\setminus B}\}$; surjectivity means that every function in the target has a preimage under $r$.

### Statement references

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] An abelian group has an associative and commutative operation, an identity, and inverses; we use additive notation ([math:def-group](https://alphabetamath.cc/item/def-group), Definition, axioms G1--G3 and the commutativity clause).

[F2] A homomorphism of additive groups is a function $u$ satisfying $u(x+y)=u(x)+u(y)$ for every pair $x,y$ in its domain ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), Definition, the group clause H1).

[F3] Integer addition is well-defined, associative and commutative, has identity $0$, and every integer $n$ has additive inverse $-n$ ([math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring), Statement and Proof, steps 1.1--1.5).

[F4] A set is finite when it is in bijection with some von Neumann natural number; the empty set is finite ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), Definition and consequence (b)).

[F5] Every subset of a finite set is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), Statement, clause 1).

[F6] The union of two disjoint finite sets is finite ([math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), Statement, clause 1, two blocks).

**Given:** A set $S$ and a subset $B\subseteq S$, with the finite-support functions, pointwise operations, extension $i$ and restriction $r$ defined in the statement.

**Goal:** Verify that the groups and homomorphisms are well-defined and that the displayed sequence is exact in the explicit sense above.

### Proof

1.1 Fix any set $T$ and $f,g\in\mathbb Z^{(T)}$. Put $U=\operatorname{supp}(f)$ and $V=\operatorname{supp}(g)$, both finite by definition. Since $V\setminus U\subseteq V$, it is finite by [F5]. The sets $U$ and $V\setminus U$ are disjoint, so [F6] makes $U\cup(V\setminus U)=U\cup V$ finite. Outside $U\cup V$ both functions vanish, hence $\operatorname{supp}(f+g)\subseteq U\cup V$ and is finite by [F5]. The additive inverse laws in [F3] imply $-n=0$ exactly when $n=0$, so $\operatorname{supp}(-f)=U$; the zero function has empty support, finite by [F4]. Thus the pointwise operations stay in $\mathbb Z^{(T)}$; the laws in [F3], evaluated at each $t\in T$, give all abelian-group axioms in [F1], also for empty $T$. Extension by zero preserves the support as the same underlying set, and for $g_1\in\mathbb Z^{(S)}$ the set $\operatorname{supp}(r(g_1))=\operatorname{supp}(g_1)\cap(S\setminus B)$ is finite by [F5], so both maps are well-defined. Their formulas give $i(f_1+f_2)=i(f_1)+i(f_2)$ and $r(g_1+g_2)=r(g_1)+r(g_2)$ for $f_1,f_2\in\mathbb Z^{(B)}$ and $g_1,g_2\in\mathbb Z^{(S)}$, so they are homomorphisms by [F2]. For $h\in\mathbb Z^{(S\setminus B)}$, define $\widetilde h(s)=0$ on $B$ and $\widetilde h(s)=h(s)$ on $S\setminus B$. Its support is exactly the finite support of $h$, viewed as a subset of $S$, and $r(\widetilde h)=h$. Hence $r$ is surjective. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

2.1 A function $g\in\mathbb Z^{(S)}$ satisfies $r(g)=0_{S\setminus B}$ exactly when it vanishes outside $B$. In that case $\operatorname{supp}(g|_B)=\operatorname{supp}(g)\cap B$ is finite by [F5], and $g=i(g|_B)$. Conversely, every $i(f)$ vanishes outside $B$ and therefore belongs to $\ker(r)$. This proves $\ker(r)=\operatorname{im}(i)$. Together with the surjectivity in step 1.1, this proves exactness as defined in the statement. The terminal map is a homomorphism because its target has only one element. [F5, given, step 1.1, construct] ∎


## Quotienting a compatible surjection

[Open item](item-lem-author-4057f3195e4f-quotient-restriction) · level 0


### Statement
Let $r:A\to D$ be a surjective homomorphism of abelian groups, and let $P\subseteq A$ be a subgroup. Then $r$ induces a surjection $\bar r:A/P\to D/r(P)$ whose kernel is $(\ker r+P)/P$.

### Facts & Assumptions

**Given:** $r$, $A$, $D$ and $P$ as stated, with the notation $K$, $I$ and $H$ above.

[F1] Abelian groups are groups with commutative addition; a subgroup contains $0$ and is closed under addition and additive inverses ([math:def-group](https://alphabetamath.cc/item/def-group), [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)).

[F2] A group homomorphism is additive, and a map is surjective when every target element has a preimage. The kernel is the set of elements mapped to $0$, and the image is the set of values of the homomorphism ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)).

[F3] For a normal subgroup $N$ of a group $G$, the quotient $G/N$ consists of cosets with the induced group operation ([math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)). Independence of representatives is supplied by [math:thm-coset-multiplication-well-defined-iff-normal](https://alphabetamath.cc/item/thm-coset-multiplication-well-defined-iff-normal), and the group axioms, identity coset $N$ and inverse-coset formula are supplied by [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws). In additive notation this operation is $(g+N)+(h+N)=(g+h)+N$.

[F4] Every subgroup of an abelian group is normal ([math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal)).

[F5] In additive notation, $a+N=b+N$ if and only if $b-a\in N$, and $x\in a+N$ if and only if $x-a\in N$ ([math:lem-coset-membership-and-equality](https://alphabetamath.cc/item/lem-coset-membership-and-equality)).

Write $K=\ker r=\{a\in A:r(a)=0\}$, $I=r(P)=\{r(p):p\in P\}$, and define the subgroup-sum candidate $H=K+P:=\{k+p:k\in K,\ p\in P\}$.

**Goal:** Establish the quotient groups, the induced map, its surjectivity and its kernel.

### Proof

1.1 Additivity gives $r(0)=r(0)+r(0)$ and $r(x)+r(-x)=r(0)$, hence $r(0)=0$ and $r(-x)=-r(x)$ by the group axioms. Thus $K$ contains $0$, is closed under addition since $r(k+k_1)=0$ for $k,k_1\in K$, and is closed under inverses since $r(-k)=0$. Similarly $I$ contains $r(0)=0$, and $r(p)+r(p_1)=r(p+p_1)$ and $-r(p)=r(-p)$ show closure under addition and inverses because $P$ is a subgroup. Consequently $K\le A$ and $I\le D$. The set $H$ contains $0=0+0$, and commutativity gives $(k+p)+(k_1+p_1)=(k+k_1)+(p+p_1)$ and $-(k+p)=(-k)+(-p)$; these formulas prove that $H\le A$. Also $P\le H$ because $p=0+p$. The groups $A$, $D$ and $H$ are abelian, so [F4] makes $P$ normal in both $A$ and $H$, and $I$ normal in $D$. Therefore [F3] supplies the groups $A/P$, $D/I$ and $H/P$ with representative-independent addition. Each coset $h+P$ for $h\in H$ is the same subset whether formed inside $H$ or $A$, so $H/P$ is identified with the subgroup of $A/P$ consisting of these cosets, with the same addition. [given, F1, F2, F3, F4, algebra]

2.1 Define $\bar r(a+P)=r(a)+I$. If $a+P=a_1+P$, [F5] gives $a_1-a\in P$, so $r(a_1)-r(a)=r(a_1-a)\in I$ and again [F5] gives equal image cosets. This proves well-definedness. The identity $\bar r((a+P)+(b+P))=r(a+b)+I=(r(a)+I)+(r(b)+I)$ proves that $\bar r$ is a homomorphism. For each coset $d+I$, surjectivity of $r$ supplies an $a\in A$ with $r(a)=d$, hence $\bar r(a+P)=d+I$. Finally, the identity of $D/I$ is $I$, so $a+P\in\ker\bar r$ exactly when $r(a)\in I$, equivalently when $r(a)=r(p)$ for some $p\in P$. This is equivalent to $a-p\in K$, hence to $a\in K+P=H$. Thus the kernel consists exactly of the cosets $h+P$ with $h\in H$, which step 1.1 identified with $H/P=(\ker r+P)/P$. [step 1.1, F1, F2, F3, F5, given, construct, algebra] ∎


## Transporting an exact sequence through isomorphisms

[Open item](item-lem-author-4057f3195e4f-transfer-exactness) · level 0


### Statement
Suppose $H\xrightarrow{a}A\xrightarrow{b}D\to0$ is exact, and $u:A\to A'$ and $v:D\to D'$ are isomorphisms of abelian groups. Then $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

### Facts & Assumptions

[F1] The objects $H,A,D,A',D'$ are abelian groups, written additively, and the terminal $0$ is the trivial group ([math:def-group](https://alphabetamath.cc/item/def-group)).

[F2] The arrows $a:H\to A$ and $b:A\to D$ are group homomorphisms. A group homomorphism preserves addition, and composites of group homomorphisms are homomorphisms ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)).

[F3] The maps $u:A\to A'$ and $v:D\to D'$ are isomorphisms, meaning bijective group homomorphisms ([math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)). Injectivity means equal outputs force equal inputs; surjectivity means every target element has a preimage, and bijectivity means both ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)). The inverse $u^{-1}:A'\to A$ is a group homomorphism by [math:lem-inverse-of-bijective-group-homomorphism](https://alphabetamath.cc/item/lem-inverse-of-bijective-group-homomorphism).

[F4] For a group homomorphism $f:G\to K$, its kernel is $\{x\in G:f(x)=0\}$ and its image is $\{f(x):x\in G\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)). Here exactness of $H\xrightarrow{a}A\xrightarrow{b}D\to0$ means that $b$ is surjective and $\ker b=\operatorname{im}a$; no injectivity of $a$ is assumed. The arrow to the trivial group is the unique zero map, so exactness at the terminal term is automatic.

[F5] Every group homomorphism preserves the identity, hence $v(0)=0$ in additive notation ([math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)).

**Given:** The abelian groups, homomorphisms, isomorphisms and exactness in the statement, with the conventions in [F1]–[F5].

**Goal:** Prove that $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

### Proof

1.1 By [F3], $u^{-1}$ is a homomorphism, so both $ua:H\to A'$ and $vbu^{-1}:A'\to D'$ are homomorphisms by composition. For any $d'\in D'$, surjectivity of $v$ gives $d\in D$ with $v(d)=d'$, and surjectivity of $b$ gives $x\in A$ with $b(x)=d$. Then $vbu^{-1}(u(x))=d'$. Hence the transported map is surjective. [F2, F3, F4]

2.1 For $x'\in A'$, injectivity of $v$ and the equality $v(0)=0$ from [F5] give $x'\in\ker(vbu^{-1})$ if and only if $u^{-1}(x')\in\ker b$. Exactness identifies this kernel with $\operatorname{im}a$, so the condition is equivalent to $u^{-1}(x')=a(h)$ for some $h\in H$, and hence to $x'=ua(h)$ for some $h\in H$. Thus $\ker(vbu^{-1})=\operatorname{im}(ua)$; with surjectivity from step 1.1 and the terminal zero map, this proves exactness. [F1, F2, F3, F4, F5, step 1.1] ∎


## Degree-zero representatives modulo a boundary class

[Open item](item-lem-author-4057f3195e4f-degree-adjustment) · level 0


### Statement
Let $q:A\to D$ and $\deg:A\to\mathbb Z$ be homomorphisms of abelian groups. If $q$ is surjective and there is $e\in\ker q$ with $\deg(e)=1$, then $q$ maps $\ker(\deg)$ onto $D$.

### Statement references

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)

### Facts & Assumptions

[F1] We use additive notation for abelian groups: $0$ is the identity, $-x$ is the inverse and $x-y=x+(-y)$ ([math:def-group](https://alphabetamath.cc/item/def-group)). The codomain $(\mathbb Z,+)$ and the integer arithmetic used below are supplied by the commutative-ring structure of the integers ([math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)).

[F2] A homomorphism preserves addition; it also preserves zero, inverses and integer multiples, so $f(x-y)=f(x)-f(y)$ and $f(nx)=nf(x)$ for $n\in\mathbb Z$ ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)).

[F3] In additive notation $\ker f=\{x:f(x)=0\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)). Surjectivity means that each target element has a preimage ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F4] For $n\in\mathbb Z$ and an element $x$ of an additive group, $nx$ denotes the integer group power in additive notation, defined by repeated addition for nonnegative integers and inversion for negative integers ([math:def-group-power](https://alphabetamath.cc/item/def-group-power)).

**Given:** The homomorphisms and element in the statement.

**Goal:** Find a degree-zero preimage of every element of $D$.

### Proof

1.1 Given $y\in D$, choose $a\in A$ with $q(a)=y$ and put $a_0=a-\deg(a)e$. Then $\deg(a_0)=\deg(a)-\deg(a)\deg(e)=0$. [given, F1, F2, F3, F4, choose, construct]

2.1 Since $q(e)=0$, we also have $q(a_0)=q(a)-\deg(a)q(e)=q(a)=y$. Thus every $y$ has a preimage in $\ker(\deg)$. [given, F1, F2, F3, F4, step 1.1] ∎


## Completion, divisors and degree on smooth curves

[Open item](item-lem-author-4057f3195e4f-curve-geometric-input) · level 0


### Statement

For a regular integral separated curve of finite type over a perfect field, there is a smooth projective integral curve containing it as a dense open subscheme with finite closed-point complement; if the original curve is affine, that complement is nonempty. On a smooth integral finite-type curve, the divisor class group, defined as finite integer sums of closed points modulo principal divisors of nonzero rational functions, identifies naturally with the Picard group by sending a closed point to its associated line bundle. Restriction to a nonempty open subset corresponds to deleting divisor coefficients outside that subset. On a smooth projective curve over an algebraically closed field, degree is an additive homomorphism on the Picard group, the class of a closed point has degree equal to its residue-field degree, and its kernel is the group of rational points of the degree-zero Picard variety.

Here a curve over $k$ means an integral finite-type $k$-scheme of dimension one. Separatedness is an additional hypothesis where stated; geometric integrality is not assumed. Integral means reduced, irreducible and nonempty, dimension is the length-of-chains dimension of the underlying Noetherian space, and separatedness is separatedness of the structure morphism. A regular scheme has regular local rings at all points; smoothness is smoothness of the structure morphism. A perfect field is one whose irreducible polynomials are separable. Affine means isomorphic to a ring spectrum. Projective means admitting a closed immersion into some finite-dimensional projective space over $k$, and proper means separated, of finite type and universally closed. A completion is an open immersion with dense image into such a projective curve. Restriction to an open subscheme uses its restricted structure sheaf.

A line bundle is an invertible structure-sheaf module, and the Picard group consists of its isomorphism classes under tensor product. For an effective Cartier divisor $D$, its associated line bundle is $\mathcal O_X(D)$, locally $f^{-1}\mathcal O_X$ when $f$ is a regular local equation for $D$; an effective Cartier divisor is locally cut out by one non-zero-divisor. On an integral curve with generic point $\eta$, write $K(X)=\mathcal O_{X,\eta}$ for its function field. On a smooth integral curve the order $\operatorname{ord}_x(f)$ at a closed point is the normalized discrete valuation of $K(X)$ with valuation ring $\mathcal O_{X,x}$; normalized means that a generator of the maximal ideal has value one. The principal divisor is $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$, a finite sum, and $\operatorname{Cl}(X)=\operatorname{Div}(X)/\operatorname{div}(K(X)^\times)$, where $\operatorname{Div}(X)$ is the free abelian group on closed points. A discrete valuation ring here is the valuation ring of a surjective valuation to $\mathbb Z$.

For a proper integral curve and a divisor $D=\sum_x n_x[x]$, set $\deg_k D=\sum_x n_x[\kappa(x):k]$, where $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ and $[\kappa(x):k]=\dim_k\kappa(x)$. On a smooth projective integral curve define the degree of a line-bundle class by transporting this weighted sum through the divisor-class isomorphism; independence of the divisor representative is part of the imported degree assertion. The degree-zero Picard variety means the degree-zero component $\underline{\operatorname{Pic}}^0_{X/k}$ of the Picard scheme, which exists in the algebraically closed case used here; the last assertion identifies its $k$-points with the kernel, and does not identify the variety itself with an abstract group.

### Statement references

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor)

[math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:def-discrete-valuation-ring](https://alphabetamath.cc/item/def-discrete-valuation-ring)

[math:def-degree-divisor-proper-curve](https://alphabetamath.cc/item/def-degree-divisor-proper-curve)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

### External input

Reference 1 supplies the regular-curve completion and the observation that a positive-dimensional affine scheme over a field cannot be proper. Its curve convention is integral, separated and of finite type, as specified in Definition 33.43.1 together with Definition 33.3.1. Thus the perfect-field completion assertion has exactly the stated hypotheses, without a geometric-integrality requirement. Reference 10 supplies properness of projective morphisms, used both for the nonempty-boundary conclusion and for applying the proper-curve degree inputs.

The finite-type schemes here are Noetherian: fields are Noetherian, finite-type algebras over them are Noetherian, and finite type includes quasi-compactness. Reference 5 supplies smooth-implies-regular over any field. Reference 6 supplies the equivalence between regularity of a closed curve point, its local ring being a discrete valuation ring, and that point being an effective Cartier divisor. In the divisor assertion separatedness is unnecessary: apply Reference 6 on an affine neighborhood of each closed point. The generic stalk is the function field, and every other point of an integral finite-type one-dimensional scheme is closed. Thus all local rings are fields or discrete valuation rings. Such rings are UFDs: in a discrete valuation ring each nonzero element is a unit times a nonnegative power of a uniformizer, and fields have only units among their nonzero elements.

For this factoriality application, [math:thm-dvr-element-normal-form](https://alphabetamath.cc/item/thm-dvr-element-normal-form) supplies the unique expression $a=u\pi^n$, with $u$ a unit and $n\geq0$ for $0\ne a\in R$, where $R$ is a discrete valuation ring and $\pi$ is a uniformizer, meaning an element of normalized valuation one. A nonunit has positive integer valuation, so $\pi$ cannot be a product of two nonunits. Every irreducible is a unit times $\pi$: an exponent $n\geq2$ would give a product of two nonunits. The unique normal form therefore gives unique factorization into irreducibles up to units and order, which is the UFD property used by Reference 2.

Reference 11 specifies the length-based order used by References 2 and 7. Write $\ell_R(M)$ for module length, the number of simple factors in a composition series, independent of the chosen series ([math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)). At a closed point $x$, the preceding regularity input makes $R=\mathcal O_{X,x}$ a one-dimensional Noetherian local domain with fraction field $K(X)$ and a normalized valuation $v_x$. For $0\ne a\in R$, normal form gives $a=u\pi^n$ with $n=v_x(a)\geq0$, and [math:thm-dvr-ideal-and-module-length](https://alphabetamath.cc/item/thm-dvr-ideal-and-module-length) gives $\ell_R(R/(a))=n=v_x(a)$. Thus the order of Reference 11 equals $v_x$ on nonzero ring elements. For $f=a/b\in K(X)^\times$, where $a,b\in R$ are nonzero, its defining quotient rule gives $\operatorname{ord}_R(f)=\ell_R(R/(a))-\ell_R(R/(b))=v_x(a)-v_x(b)=v_x(f)$. Consequently the principal divisor in the Statement is exactly the one in Reference 7, and the orders defining the Picard-class map in Reference 2 are the same normalized orders. This calculation is a local application of the cited interfaces.

Reference 7 supplies the finite-support principal-divisor construction and its homomorphism property. Reference 2 supplies the map from line-bundle classes to divisor classes, its well-definedness and additivity, and its isomorphism when the local rings are UFDs. Its proof identifies the divisor class of a prime effective Cartier divisor $x$ with that of $\mathcal O_X(x)$, fixing the sign. These results apply to locally Noetherian integral schemes and do not require separatedness. For a nonempty open $U\subseteq X$, the function field and the local rings at its points agree with those on $X$. The construction in Reference 2 therefore keeps precisely the same orders at these points. This gives the stated compatibility with deleting coefficients outside $U$, and identifies the restriction of a line bundle with the restricted divisor class.

Reference 3 imports the existence of the line-bundle degree, its tensor additivity and the formula for the line bundle of an effective Cartier divisor. For a closed point $x$, Reference 6 makes it Cartier, and Reference 3 gives $\deg\mathcal O_X(x)=[\kappa(x):k]$. Through Reference 2 this says exactly that the weighted divisor sum descends to the Picard group; hence the degree construction in the Statement is independent of representatives and additive. Reference 4 imports the identification of its kernel with the $k$-points of the degree-zero Picard variety. Reference 8 supplies the existence and degree-component description of that Picard scheme in this algebraically closed setting. Only the degree-zero component and its points are used, not the further Hilbert-scheme or torsion claims in those sources.

Reference 9 records explicitly the integral, separated finite-type convention underlying the completion sources. The function field, line bundles, Cartier-divisor line bundles, residue fields, open restrictions and weighted divisor degree use the published mathematical interfaces listed in Statement references. The function-field supplier is used only for its canonical generic-stalk and affine-chart identifications; its separate geometric-integrality assertion and its choice assumption are not used. All substantial geometric assertions above are external inputs. The application explanations specify how their hypotheses fit; no reconstruction of the published proofs or construction of the Picard scheme is claimed.


## Coordinate faces of the algebraic simplex

[Open item](item-lem-author-89250b1d710c-face-coordinate-geometry) · level 0


### Statement
Let $k$ be a field, $n\geq0$, $A_n=k[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$, $\Delta^n=\operatorname{Spec}A_n$, and $X$ a $k$-scheme, meaning a scheme equipped with a morphism to $\operatorname{Spec}k$. For $I\subseteq\{0,\ldots,n\}$, let $J_I=(t_i:i\in I)\subseteq A_n$ and define the coordinate face as the closed subscheme $F_I=\operatorname{Spec}(A_n/J_I)\hookrightarrow\Delta^n$ induced by the quotient homomorphism. If $I$ is proper, $F_I$ is canonically $\Delta^{n-|I|}$ after putting the remaining coordinates in increasing order.

Products here are fibre products over $\operatorname{Spec}k$. For every nonempty affine open subscheme $U=\operatorname{Spec}B\subseteq X$, the coordinate ring of $U\times_k\Delta^n$ is canonically $R_{B,n}=B[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$, and $U\times_k F_I$ is the closed subscheme obtained by quotienting $R_{B,n}$ by $(t_i:i\in I)$. For proper $I$, these coordinates form a regular sequence in $R_{B,n}$ in every order: multiplication by each coordinate is injective after quotienting by its predecessors, and the final quotient is nonzero. The empty sequence is allowed. Imposing all $n+1$ coordinates gives the empty scheme, both in $\Delta^n$ and after this affine base change.

For $n\geq1$ and $0\leq i\leq n$, define $\delta_i^n:\Delta^{n-1}\to\Delta^n$ by the $k$-algebra homomorphism $A_n\to A_{n-1}$ sending $t_a$ to $u_a$ for $a<i$, to $0$ for $a=i$, and to $u_{a-1}$ for $a>i$, where $u_0,\ldots,u_{n-1}$ are the target ring's barycentric coordinates. This is the ordered identification with the face $F_{\{i\}}$ followed by its closed immersion. For $n\geq2$ and $0\leq i<j\leq n$, one has $\delta_j^n\circ\delta_i^{n-1}=\delta_i^n\circ\delta_{j-1}^{n-1}$.

### Statement references

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-polynomial-ring-on-a-family-of-indeterminates](https://alphabetamath.cc/item/def-polynomial-ring-on-a-family-of-indeterminates)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring)

[math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

### Facts & Assumptions

**Given:** The field $k$, integer $n$, $k$-scheme $X$, coordinate algebras and index sets in the Statement. No noetherian, reducedness, smoothness or separatedness assumption is imposed on $X$.

**Goal:** Establish the quotient face descriptions, affine product rings, regular sequences and coordinate identities, including empty and zero-dimensional cases.

[F1] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; an affine open carries the restricted structure sheaf. Polynomial rings consist of finite coefficient families on monomials, so their equality is coefficientwise. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-polynomial-ring-on-a-family-of-indeterminates](https://alphabetamath.cc/item/def-polynomial-ring-on-a-family-of-indeterminates)

[F2] The notation $Y\times_k Z$ means the scheme fibre product. For affine factors $\operatorname{Spec}B$ and $\operatorname{Spec}C$ over $\operatorname{Spec}k$, its ring is $B\otimes_k C$, with the canonical projections. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) [math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring)

[F3] A quotient map $R\to R/J$ induces the closed immersion $\operatorname{Spec}(R/J)\to\operatorname{Spec}R$; for $J=R$ this is the empty scheme. Only this quotient-to-closed-immersion direction is used here. [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings)

[F4] Coefficient homomorphisms and assigned variable values extend uniquely to polynomial homomorphisms; a homomorphism killing an ideal factors uniquely through its quotient. Compatible $k$-algebra maps from two algebras extend uniquely from their tensor product. [math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family) [math:thm-quotient-ring-universal-property](https://alphabetamath.cc/item/thm-quotient-ring-universal-property) [math:thm-coproduct-property-of-tensor-products-of-commutative-algebras](https://alphabetamath.cc/item/thm-coproduct-property-of-tensor-products-of-commutative-algebras)

[F5] The spectrum construction is a contravariant equivalence between commutative rings and affine schemes. Thus inverse ring maps give inverse scheme maps, and equal coordinate homomorphisms give equal affine scheme morphisms. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

### Proof

1.1 Fix $U=\operatorname{Spec}B\subseteq X$. By [F2] its product with $\Delta^n$ is the spectrum of $B\otimes_k A_n$. There is a homomorphism from this tensor product to $R_{B,n}$ sending $b\otimes1$ to $b$ and $1\otimes t_a$ to $t_a$, by [F4]. Conversely, send the coefficients $b$ to $b\otimes1$ and each variable to $1\otimes t_a$. The sum relation maps to zero, so [F4] gives a homomorphism $R_{B,n}\to B\otimes_k A_n$. The composites fix the coefficients and all coordinate images, and are identities by the uniqueness assertions in [F4]. Repeating these maps with $t_i=0$ for $i\in I$ identifies $B\otimes_k(A_n/J_I)$ with $R_{B,n}/(t_i:i\in I)$, compatibly with the quotient maps. Consequently [F3] and [F5] give exactly the asserted affine base change and closed face structures. [F2, F3, F4, F5, construct]

2.1 Suppose $I$ is proper and choose one $b\in\{0,\ldots,n\}\setminus I$. The substitutions $t_b=1-\sum_{a\ne b}t_a$ and $t_a\mapsto t_a$ for $a\ne b$ define inverse homomorphisms $R_{B,n}\cong B[t_a:a\ne b]$: [F4] makes the substitution well defined, and each composite fixes every coefficient and coordinate class. Quotienting by the variables in $I$ therefore leaves $B[t_a:a\notin I,\ a\ne b]$, a polynomial ring on $n-|I|$ variables. For $B=k$, the quotient $A_n/J_I$ is equally the ring with the remaining barycentric coordinates and their single sum-one relation. Relabelling these remaining coordinates in increasing order and using [F5] proves the canonical face isomorphism, independently of the auxiliary eliminated coordinate $b$. For nonempty $U$, $B\ne0$, since the zero ring has no proper prime ideals and hence empty spectrum. Multiplication by any indeterminate is injective by [F1]: it shifts each exponent in a finite coefficient family, so a zero product has all coefficients zero. In any chosen ordering of $I$, quotienting by preceding variables leaves a polynomial ring in the remaining variables, with constants $B$ embedded. Thus all successive multiplications are injective and the final quotient is nonzero, including when $I$ is empty or $n=0$. If $I$ contains every coordinate, the sum-one relation gives $0=1$, so the quotient is the zero ring and [F3] gives the empty scheme. [F1, F3, F4, F5, step 1.1, choose, algebra]

3.1 Each homomorphism defining $\delta_i^n$ exists by [F4], because its substituted coordinates still sum to one; it factors through $A_n/(t_i)$ and identifies that quotient with $A_{n-1}$ by step 2.1. This proves the claimed ordered closed face description by [F3] and [F5]. For $i<j$, both composites insert zero into positions $i$ and $j$: inserting at $i$ and then at $j$ gives the left composite, while inserting at $j-1$ and then at $i$ gives the right composite, as the earlier insertion shifts all subsequent positions by one. In both cases all other coordinates retain their increasing order. Hence the two composite coordinate homomorphisms agree on $k$ and every barycentric coordinate, and [F4] makes them equal. By [F5] the affine scheme morphisms are equal, proving the identity. [F3, F4, F5, step 2.1, construct, algebra] ∎


## Length multiplicity for one proper Cartier face

[Open item](item-lem-author-89250b1d710c-cartier-face-length) · level 0


### Statement
Let $(A,\mathfrak m)$ be a noetherian commutative local ring, $t\in\mathfrak m$ a nonzerodivisor on $A$, and $I$ a prime ideal with $t\notin I$ and $\sqrt{I+(t)}=\mathfrak m$. Put $M=A/I$. For the free resolution $Q=(0\to A\xrightarrow{t}A\to0)$ of $A/(t)$, the homology of $Q\otimes_A M$ is $A/(I,t)$ in degree zero and zero in positive degrees. The nonzero module $A/(I,t)$ has finite length. Hence the alternating sum of these homology lengths is $\ell_A(A/(I,t))$. This length is unchanged by an isomorphism of local rings carrying the ideals to their counterparts, or by replacing $t$ by a unit multiple.

### Facts & Assumptions

**Given:** The ring, element and prime ideal in the Statement.

**Goal:** Compute the specified-resolution Tor groups and their length Euler characteristic.

[F1] A chain complex of modules consists of module homomorphisms $d_n:C_n\to C_{n-1}$ with $d_nd_{n+1}=0$; its homology is $H_n(C)=\ker d_n/\operatorname{im}d_{n+1}$. An augmented projective resolution of $N$ is a complex $\cdots\to P_1\to P_0\to N\to0$ exact at every term, with projective $P_n$; exactness means image equals kernel. In modules, projectivity means that every homomorphism from $P_n$ to the target of a surjective module homomorphism lifts through that surjection. A free resolution has free terms and is a projective resolution once their projectivity is verified. Specified-resolution Tor is $\operatorname{Tor}^{A,Q}_n(N,M)=H_n(Q\otimes_A M)$, retaining the chosen resolution $Q$. [math:def-projective-resolution-in-an-abelian-category](https://alphabetamath.cc/item/def-projective-resolution-in-an-abelian-category) [math:def-tor-by-resolving-the-right-module](https://alphabetamath.cc/item/def-tor-by-resolving-the-right-module) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel) [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)

[F2] A simple module is nonzero and has only zero and itself as submodules. A composition series is a finite strict chain of submodules from zero to the module, each successive quotient being simple. Length is the number of these simple factors, independent of the series; the zero module has length zero. [math:def-simple-module](https://alphabetamath.cc/item/def-simple-module) [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[F3] A local ring has a unique maximal ideal $\mathfrak m$ and residue field $k=A/\mathfrak m$. The regular module is $A$ with scalar action given by ring multiplication; its submodules are precisely the ideals. A Noetherian ring has Noetherian regular module, meaning every submodule of that regular module is finitely generated. A module is finitely generated when some finite set generates it, meaning every element is a finite linear combination of those generators. Indeed, finite linear combinations form a submodule containing the generators and lie in every submodule containing them. It is free when it has a basis, meaning unique finite linear-combination expressions in its basis elements. Thus every ideal of the commutative ring $A$ is finitely generated. [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring) [math:def-noetherian-ring](https://alphabetamath.cc/item/def-noetherian-ring) [math:def-noetherian-module](https://alphabetamath.cc/item/def-noetherian-module) [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

[F4] A prime ideal $I$ is proper and satisfies $ab\in I\Rightarrow a\in I$ or $b\in I$. A domain is a nonzero commutative ring in which a product is zero only if a factor is zero. Here a nonzerodivisor on $A$ means an element $t$ for which multiplication $A\xrightarrow{t}A$ is injective; this fixes the convention directly, including at zero. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[F5] The radical is $\sqrt J=\{a\in A:a^e\in J\text{ for some }e\geq1\}$. Ideal sums and products have their usual finite-sum definitions; write $\mathfrak m^0=A$ and $\mathfrak m^{q+1}=\mathfrak m\mathfrak m^q$, and set $(t)=tA=\{at:a\in A\}$ and $J=I+(t)$. Thus $(I,t)$ denotes this same ideal $J$. [math:def-radical-of-an-ideal](https://alphabetamath.cc/item/def-radical-of-an-ideal) [math:def-sum-and-product-of-ideals](https://alphabetamath.cc/item/def-sum-and-product-of-ideals)

[F6] For a right $A$-module $U$ and a left $A$-module $V$, the tensor product $U\otimes_A V$ is generated additively by elementary tensors, subject to additivity in each variable and $(ua)\otimes v=u\otimes(av)$. Since $A$ is commutative, its modules can be regarded on either side with the same action, and $U\otimes_A V$ is an $A$-module by $a(u\otimes v)=(au)\otimes v=u\otimes(av)$. The tensor-unit isomorphism $A\otimes_A M\cong M$ sends $a\otimes m$ to $am$, with inverse $m\mapsto1\otimes m$, and respects this $A$-action. Tensoring a complex here means taking these tensor products degree by degree, with differential $d\otimes1$ sending $u\otimes m$ to $d(u)\otimes m$. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) [math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product) [math:thm-unit-isomorphisms-for-module-tensor-products](https://alphabetamath.cc/item/thm-unit-isomorphisms-for-module-tensor-products)

[F7] A $k$-vector space means a unital module over the field $k$. Finite linear combinations include the empty sum, which is zero. A finite list spans a space if each vector is a $k$-linear combination of its entries. A finite basis is an independent spanning list: a linear combination equal to zero has all coefficients zero. Consequently every vector has unique coefficients in that list, by subtracting two expressions. A finite spanning list contains a finite basis, without any choice principle. [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis) [math:lem-hh-finite-spanning-list-contains-a-basis](https://alphabetamath.cc/item/lem-hh-finite-spanning-list-contains-a-basis)

[F8] Quotient rings have the coset operations, and $A/K$ is an $A$-module by $a(b+K)=ab+K$ for any ideal $K$. This scalar action is well defined because $K$ is an ideal. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[F9] Modules here are unital left modules; in the commutative case the right action is $ma=am$. A submodule is an additive subgroup closed under scalar multiplication. For a submodule $V\subset U$, the quotient module consists of additive cosets, with $a(u+V)=au+V$; this is independent of representatives since $V$ is closed under scalars. A module homomorphism preserves addition and scalar multiplication; its kernel is the set mapped to zero, its image is the set of its values, and its cokernel is the target modulo its image. [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) [math:def-submodule](https://alphabetamath.cc/item/def-submodule) [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

### Proof

1.1 By the nonzerodivisor convention, multiplication by $t$ is injective on $A$, so the complex $Q$, placed in degrees one and zero and augmented by $A\to A/(t)$, is a free resolution of $A/(t)$. The augmentation is surjective and has kernel $(t)$, exactly the image of multiplication by $t$, so the augmented sequence is exact at each term. Each copy of $A$ is free on $1$ and projective on either side: given a surjection of $A$-modules and a map from $A$ to its target, lifting the image of $1$ determines an $A$-linear lift. The zero terms are also free and projective, with the empty basis and the unique lift. Under the tensor-unit maps, $Q\otimes_A M$ becomes $0\to M\xrightarrow{t}M\to0$: the differential sends $1\otimes m$ to $t\otimes m$, hence $m$ to $tm$. This tensor differential is well defined: multiplication by $t$ is $A$-linear, so its prescription respects additivity and the balancing relations in [F6]. Since $I$ is proper, $A/I$ is nonzero, and primality makes it a domain: a zero product of cosets means $ab\in I$, so one coset is zero. As $t\notin I$, multiplication by its image is injective on $M$. The cokernel $M/tM$ identifies with $A/J$ by sending the class of $a+I$ to $a+J$; the kernel of $A/I\to A/J$ is exactly $tM$. Thus the homology is $A/J$ in degree zero and zero in all positive degrees, which also computes the specified-resolution Tor. [given, F1, F3, F4, F5, F6, F8, F9, algebra]

1.2 By Noetherianity choose generators $x_1,\ldots,x_s$ of $\mathfrak m$. Since $\sqrt J=\mathfrak m$, choose positive $e_a$ with $x_a^{e_a}\in J$. The finite-sum definition of ideal products shows by expansion that $\mathfrak m^N$ is generated by degree-$N$ monomials in the $x_a$. For $N=1+\sum_a(e_a-1)$, every such monomial contains some $x_a^{e_a}$, so $\mathfrak m^N\subset J$. If $s=0$, then $\mathfrak m=0$ and take $N=1$. All selections here are finite. [given, F3, F5, construct, algebra]

2.1 Put $B=A/J$ and $B_q=(\mathfrak m^q+J)/J$ for $0\leq q\leq N$, giving $B=B_0\supseteq\cdots\supseteq B_N=0$. Each $B_q/B_{q+1}$ is generated by the images of a finite generating list of the ideal $\mathfrak m^q$, and multiplication by $\mathfrak m$ kills it. Its $A$-action therefore factors through the field $k=A/\mathfrak m$: define $(a+\mathfrak m)v=av$, independent of the representative since $\mathfrak m$ kills the quotient. The module axioms give the vector-space axioms, and the same finite list spans it over $k$. Choose a finite basis by [F7]. Write the chosen basis as $b_1,\ldots,b_d$ and its prefix spans as $V_j=\operatorname{span}_k(b_1,\ldots,b_j)$. Independence makes $V_j/V_{j-1}$ nonzero, and each of its elements is a unique scalar multiple of $b_j+V_{j-1}$, so this factor is one-dimensional. The inverse images of the $V_j$ under $B_q\to B_q/B_{q+1}$ are submodules between $B_{q+1}$ and $B_q$; their successive quotients identify with $V_j/V_{j-1}$ by the induced coset map, whose kernel and surjectivity follow directly from the inverse-image definition. Every nonzero element of a one-dimensional factor generates it: invert its nonzero coefficient in $k$ and lift the resulting scalar along $A\to k$. Thus its only submodules are zero and itself, as required for simplicity. The case $d=0$ contributes no strict steps. Concatenating these finitely many refinements and deleting repetitions gives a composition series of $B$. Moreover $J\subseteq\sqrt J=\mathfrak m\ne A$, so $B\ne0$. All the homology modules in step 1.1 now have finite length, and their alternating sum is $\ell_A(A/J)$. [given, F2, F3, F5, F7, F8, F9, step 1.1, step 1.2, construct]

3.1 A local-ring isomorphism $\phi:A\to A'$ (a bijection preserving addition, multiplication and identity) carrying $I$ and $(t)$ to their counterparts induces a bijection of the quotient modules compatible with scalar transport. It carries submodules bijectively to submodules and preserves simple factors, so it carries any composition series to a composition series of the same length. Replacing $t$ by $ut$ for a unit $u$ (an element with multiplicative inverse $u^{-1}$) leaves $(t)$, hence $J$, unchanged, since $t=u^{-1}(ut)$. The length is therefore unchanged in both cases, completing the proof. [F2, F5, F8, F9, step 2.1, algebra] ∎


## Cycle coefficients and face intersections are open local

[Open item](item-lem-author-89250b1d710c-cycle-open-locality) · level 0


### Statement
On a noetherian scheme $Y$, let $Z_*(Y)$ be the free abelian group on integral closed subschemes with their reduced structures; a cycle is a finite integral linear combination of these generators. For an open subscheme $V\subset Y$, the rule $[W]\mapsto[W\cap V]$ when $W\cap V\ne\varnothing$, and $[W]\mapsto0$ otherwise, defines a restriction homomorphism $\rho_V:Z_*(Y)\to Z_*(V)$. Equality of cycles can be tested on any open cover of $Y$.

For a closed subset $Z\subset |Y|$ and a prescribed integer $r\geq0$, the condition that every irreducible component $T$ of $Z$ has codimension $r$ in $Y$ is open local on $Y$, including when $Z$ is the underlying subset of an intersection. Here components carry reduced structures, $\eta_T$ denotes the unique generic point, $\mathcal O_{Y,y}$ denotes the stalk of the structure sheaf at $y$, and codimension means $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, with Krull dimension defined by chains of prime ideals. Empty intersections satisfy this condition vacuously.

In particular, let $k$ be a field, $X$ a scheme of finite type over $k$, $n\geq1$, and $0\leq i\leq n$. All products below are over $\operatorname{Spec}k$. Set $\Delta^m=\operatorname{Spec}(k[t_0,\ldots,t_m]/(\sum_{a=0}^m t_a-1))$ for $m\geq0$, and put $Y=X\times_k\Delta^n$. The symbol $t_i$ on $Y$ is the pullback of the indicated coordinate function. The closed face $H_i=V(t_i)\subset Y$ is identified with $X\times_k\Delta^{n-1}$ by deleting the $i$th coordinate and keeping the others in increasing order. For an integral closed subscheme $W\subset Y$, let $T$ range over the irreducible components of the scheme-theoretic intersection $W\cap H_i$. Whenever each indicated quotient module has a finite composition series, define the cycle on $H_i$ by
$$D_i[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T].$$
A composition series of an $R$-module $M$ is a finite strict chain from $0$ to $M$ with simple successive quotients; $\ell_R(M)$ is its number of factors, independent of the series, and $\ell_R(0)=0$. The empty face intersection has cycle zero. For every open $U\subset X$, put $V_U=U\times_k\Delta^n$ and $H_{i,U}=H_i\cap V_U=U\times_k\Delta^{n-1}$. The restricted quotient lengths exist whenever the original ones do, and
$$\rho_{H_{i,U}}(D_i[W])=D_i(\rho_{V_U}[W]).$$
The rule extends linearly to finite signed cycles whose generators have the stated finite lengths. No nonzerodivisor condition on the image of $t_i$ in $\mathcal O_{W,\eta_T}$ is asserted or needed for this conditional compatibility. No separatedness or pure-dimension assumption is imposed.

### Statement references

[math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)

[math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[math:lem-tensor-ring-presentations-for-base-change](https://alphabetamath.cc/item/lem-tensor-ring-presentations-for-base-change)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

### Facts & Assumptions

**Given:** The schemes, closed subsets, indices, cycles and open covers specified in the Statement; the face formula is used only for generators with finite quotient-module lengths at every intersection component.

**Goal:** Prove local detection of equality and codimension, and compatibility of the conditional face cycles with open restriction.

[F1] A function on generators extends uniquely to a homomorphism from a free abelian group. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F2] Nonempty irreducible closed subsets of a scheme have unique generic points, and closed subsets have unique reduced induced closed structures. These are the two imported premises recorded in the External input section, references 0 and 1.

[F3] A closed subscheme is specified by a closed immersion. An integral scheme is nonempty, reduced and irreducible, with irreducible meaning that it is not a union of two proper closed subsets. A locally closed subscheme of a noetherian scheme is noetherian, and a noetherian scheme has finitely many irreducible components. These are the imported premises recorded in the External input section, references 2 and 3. The relevant notions are supplied by [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme) and [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset).

[F4] Module length is the number of simple factors in a finite composition series, with independence of the chosen series furnished by the module Jordan–Hölder theorem. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module) [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[F5] An open subscheme has the restricted structure sheaf; its local ring at a surviving point is computed from the same germs, since neighbourhoods inside that open suffice. Codimension in the Statement uses Krull dimension of this ring. [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[F6] Scheme fibre products exist, restricting either factor to an open gives the inverse-image open in the product, and scheme-theoretic intersections are fibre products cut out by sums of ideal sheaves. [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction) [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[F7] The base-scheme and finite-type conventions give affine charts of $X$ by finite-type $k$-algebras. Product charts are tensor products; polynomial and quotient presentations commute with base extension. Finite-type algebras over noetherian rings are noetherian. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:lem-tensor-ring-presentations-for-base-change](https://alphabetamath.cc/item/lem-tensor-ring-presentations-for-base-change) [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

### External input

Reference 0 imports generic-point existence and uniqueness from [Stacks, Lemma 26.11.1](https://stacks.math.columbia.edu/tag/01IS) for arbitrary schemes. Reference 1 imports the reduced induced closed-subscheme existence and uniqueness assertion of [Stacks, Lemma 26.12.4](https://stacks.math.columbia.edu/tag/01J3). Reference 2 imports noetherianity of locally closed subschemes from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK). Reference 3 imports finiteness of components from [Stacks, Lemma 28.5.7](https://stacks.math.columbia.edu/tag/0BA8). These are cited premises, with precise hypotheses and reading limits in sources.references. The restriction, codimension and length-compatibility arguments below are local arguments, rather than imported conclusions.

### Proof

**Given:** The schemes, closed subsets, indices, cycles and open covers specified in the Statement; the face formula is used only for generators with finite quotient-module lengths at every intersection component.

Reference 0 imports generic-point existence and uniqueness from [Stacks, Lemma 26.11.1](https://stacks.math.columbia.edu/tag/01IS) for arbitrary schemes. Reference 1 imports the reduced induced closed-subscheme existence and uniqueness assertion of [Stacks, Lemma 26.12.4](https://stacks.math.columbia.edu/tag/01J3). Reference 2 imports noetherianity of locally closed subschemes from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK). Reference 3 imports finiteness of components from [Stacks, Lemma 28.5.7](https://stacks.math.columbia.edu/tag/0BA8). These are cited premises, with precise hypotheses and reading limits in sources.references. The restriction, codimension and length-compatibility arguments below are local arguments, rather than imported conclusions.

1.1 In an irreducible space every two nonempty opens meet, since disjoint opens would express the space as the union of their two proper closed complements. Thus a nonempty open is dense and irreducible: its nonempty open subsets also meet. A nonempty open of an integral scheme remains reduced because its local rings are unchanged by [F5], so it is integral. By [F2], its generic point is the original generic point: every nonempty open contains that point, as a proper closed complement cannot contain a point whose closure is the whole space. Hence $W\cap V$ is an integral closed subscheme of $V$ when nonempty. Taking its topological closure in $Y$ recovers $|W|$, and the unique reduced closed structure in [F2] recovers $W$ itself. Distinct generators therefore cannot have the same nonempty restriction, and [F1] extends the generator rule to $\rho_V$. [F1, F2, F3, F5, construct]

1.2 On an affine chart $\operatorname{Spec}B\subset X$, [F6] and [F7] identify the product chart with $\operatorname{Spec}(B[t_0,\ldots,t_n]/(\sum_a t_a-1))$. Deleting coordinate $i$ after setting $t_i=0$ gives the claimed ordered face identification; eliminating any one remaining coordinate realizes that quotient as a polynomial ring in $n-1$ variables over $B$. These substitutions fix coefficients and the ordered remaining coordinates, so commute with restriction and agree on overlapping charts. A field is noetherian because its only ideals are $0$ and itself. The finite-type, quasi-compact hypothesis on $X$ supplies finitely many such charts with each $B$ finite type over $k$. Their product coordinate rings are finite type over $k$, hence noetherian by [F7], so $Y$ is noetherian. The intersection and open-restriction formulas in [F6] identify the restricted closed subscheme with $(W\cap H_i)\cap V_U=(W\cap V_U)\cap H_{i,U}$, retaining the same parameter $t_i$. By [F3], $W\cap H_i$ is noetherian and has finitely many components. [F3, F6, F7, given, algebra]

2.1 If a cycle has a nonzero coefficient at $W$, some member of any open cover contains $\eta_W$. The corresponding restriction preserves that coefficient without collision with another generator by step 1.1. A cycle restricting to zero on the cover is consequently zero. Apply this to the difference of two cycles to detect equality. [given, step 1.1, algebra]

2.2 Let $Z\subset |Y|$ be closed. The closure of any irreducible subset is irreducible, since any decomposition of the closure into two closed subsets restricts to such a decomposition of the original subset, which must lie in one, forcing its closure into that same subset. If a component $T$ of $Z$ meets $V$, then $T\cap V$ is nonempty, irreducible and dense in $T$ by step 1.1. Any irreducible closed subset of $Z\cap V$ containing it has irreducible closure in $Z$ containing $T$, hence equal to $T$ by maximality; taking its trace on $V$ gives equality with $T\cap V$. Conversely, if $D$ is a component of $Z\cap V$, its closure $C$ in $Z$ is irreducible. For any irreducible closed $E\subset Z$ containing $C$, the nonempty open $E\cap V$ is irreducible and contains $D$, so it equals $D$ by maximality; its density in $E$ gives $E=C$. Thus $C$ is a component of $Z$ and $C\cap V=D$. These correspondences are inverse, with the same generic points by [F2] and step 1.1. [F2, F3, step 1.1]

3.1 At each surviving generic point $\eta_T$, [F5] identifies $\mathcal O_{V,\eta_T}$ with $\mathcal O_{Y,\eta_T}$ as rings: replacing a neighbourhood by its intersection with $V$ changes no germ. The prime-ideal chains and hence Krull dimensions agree. By the codimension convention in the Statement and the component correspondence in step 2.2, the prescribed codimension condition restricts to each open. Conversely every component has a generic point lying in some member of a covering family, so the local conditions imply the global one. This includes a scheme-theoretic intersection by applying the argument to its underlying closed subset. [F5, given, step 2.2]

4.1 By steps 2.2 and 1.2 the components surviving on $H_{i,U}$ are exactly the nonempty $T\cap V_U$. At their generic points, [F5] gives $\mathcal O_{W,\eta_T}=\mathcal O_{W\cap V_U,\eta_T}$ and identifies $t_i$ on both sides. More generally, transporting scalars along a ring isomorphism carrying one parameter to the other identifies the parameter-quotient modules and gives inverse bijections on their submodule chains. Strict inclusions and simple quotients are preserved, since a proper intermediate submodule would transport back to one. Thus any finite composition series transports with the same number of factors, which equals the well-defined module length by [F4]. Every surviving coefficient is unchanged. Components missing the open contribute zero on both sides; if $W\cap V_U$ is empty the entire identity is zero. Equality of the finite cycles follows coefficientwise and extends by [F1] to their finite signed sums. The argument also permits a zero parameter whenever the quotient has finite length, and proves all the asserted compatibilities without an additional geometric hypothesis. [F1, F4, F5, step 1.1, step 2.2, step 1.2, algebra] ∎


## External geometric inputs for affine reduction

[Open item](item-thm-author-89250b1d710c-smooth-local-geometry-input) · level 0


### Statement

Assume the Axiom of Choice. A scheme smooth over a field is regular and normal. If it is also noetherian, its irreducible components are disjoint normal integral open-and-closed subschemes. Consequently a smooth finite-type scheme over a field admits a cover by integral smooth affine opens, each separated and equidimensional.

Here regular means locally Noetherian with every local ring regular local, and normal means that every local ring is an integrally closed domain. Irreducible components carry their reduced induced subscheme structures. Equidimensional means that all irreducible components have the same chain dimension. Separatedness of an open in the cover is over the ground field (and it is also absolutely separated). For the empty scheme the cover is empty. No separatedness or equidimensionality of the original scheme is assumed.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)

[math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

[math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens)

[math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)

### External input

Smoothness over a field implies regularity and normality, by Stacks Lemmas 33.25.3 and 33.25.4 (reference 0).

A normal scheme whose every quasi-compact open has finitely many irreducible components is the disjoint union of its open normal integral components, by Stacks Lemma 28.7.5 and its proof (reference 1).

Restriction to open subschemes preserves locally finite type morphisms. A finite-type morphism to a Noetherian scheme has Noetherian source, by Stacks Lemmas 29.15.2 and 29.15.6 (reference 2).

The underlying space of a Noetherian scheme is Noetherian, by Stacks Lemma 28.5.5 (reference 3).

These are imported premises. The component-hypothesis check and the affine-cover construction below are local deductions, not claimed reconstructions of the imported proofs.

### Facts & Assumptions

**Given:** A field $k$, a smooth $k$-scheme $X$, and the Axiom of Choice. For the second assertion additionally assume $X$ Noetherian; for the cover assertion additionally assume $X$ of finite type over $k$.

[F1] The smooth regularity and normality premise is imported as reference 0 in External input.

[F2] The normal-component decomposition, conditional on finiteness in every quasi-compact open, is imported as reference 1 in External input.

[F3] The open-restriction and finite-type Noetherianity premises are imported as reference 2 in External input.

[F4] The Noetherian scheme-to-topology premise is imported as reference 3 in External input.

[A1] Choice is assumed exactly to meet the hypotheses of the two topological finiteness suppliers in [F5] and the affine quasi-compactness supplier in [F9]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] Under Choice every subspace of a Noetherian topological space is Noetherian, and every Noetherian topological space has finitely many irreducible components. [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens) [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[F6] Every point of a scheme has an affine open neighborhood. Open subschemes carry the restricted structure sheaf, so an affine open of an open component is an affine open of $X$. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[F7] An integral scheme is nonempty, and equivalently all its nonempty affine opens are spectra of domains. Its irreducible underlying space has just one irreducible component. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme) [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[F8] Smoothness is preserved by open restriction, as part of its germwise definition. A finite-type morphism is locally of finite type and quasi-compact. [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[F9] Under Choice affine schemes are quasi-compact. Every morphism between affine schemes is separated; this applies both to the structure morphism to $\operatorname{Spec}k$ and to that to $\operatorname{Spec}\mathbb Z$. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated) [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

### Proof

**Goal:** Establish the statement under its stated hypotheses.

**Given:** The data and conditional hypotheses in Facts & Assumptions, with the conventions in the Statement.

1.1 By [F1], $X$ is regular and normal. If $X$ is Noetherian, [F4] makes $|X|$ Noetherian. For every quasi-compact open $V\subseteq X$, [F5] makes $|V|$ Noetherian and gives finitely many irreducible components of $V$. This verifies the full hypothesis of [F2], not merely finiteness for $X$ itself. Thus the components of $X$, with the structures specified in [F7], are disjoint open normal integral subschemes. They are closed by the definition of an irreducible component, so they are open and closed. [A1, F1, F2, F4, F5, F7, given]

2.1 If $X$ is of finite type over $k$, then $\operatorname{Spec}k$ is Noetherian: the field has only the ideals $0$ and $k$, and its one-point spectrum is quasi-compact. By [F3] and the definition of Noetherian scheme, $X$ is Noetherian, so step 1.1 applies. Use the family of all nonempty affine opens $U$ in its components $C$; it covers $X$ by [F6]. Every nonempty affine open of $U$ is also a nonempty affine open of the integral scheme $C$, hence is the spectrum of a domain by [F7]; the same criterion shows that $U$ is integral. Smoothness restricts to $U$ by [F8]. Also $U\to\operatorname{Spec}k$ is locally of finite type by [F3], and is quasi-compact by [F9] because its target is a point; hence it is of finite type by [F8]. It is separated over $k$ and absolutely separated by [F9]. Its irreducibility gives one irreducible component by [F7], so it is equidimensional under the stated convention. This constructs the asserted cover; if $X$ is empty the family is empty. Choice is used only through [F5] and [F9] as recorded in [A1]. [A1, F3, F6, F7, F8, F9, step 1.1, construct] ∎



## Kernel models the homotopy fiber when the cokernel is acyclic

[Open item](item-lem-author-75596422a482-kernel-homotopy-fiber) · level 0


### Statement
Let $f:A_\bullet\to B_\bullet$ be a chain map of abelian groups, $K=\ker f$, and suppose its cokernel complex is acyclic, meaning that all its homology groups vanish. Define $F_n=A_n\oplus B_{n+1}$ with differential $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. Then $K\to F$, $a\mapsto(a,0)$, induces an isomorphism on every homology group. The complex $F$ is the standard homotopy-fiber model of $f$: with the chain-complex convention $C[k]_n=C_{n-k}$ and $d_{C[k]}=(-1)^k d_C$, a homotopy fiber means $\operatorname{Cone}(f)[-1]$, and $F$ is chain-isomorphic to this model. Here $K_n=\ker(f_n)$ and $\operatorname{coker}(f)_n=B_n/f_n(A_n)$ have the induced differentials.

### Statement references

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[math:thm-a-chain-map-induces-a-well-defined-map-on-homology](https://alphabetamath.cc/item/thm-a-chain-map-induces-a-well-defined-map-on-homology)

[math:lem-the-kernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-kernel-of-a-chain-map-is-computed-degreewise)

[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise](https://alphabetamath.cc/item/cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise)

[math:thm-long-exact-sequence-in-homology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-homology)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:def-shift-of-a-chain-complex](https://alphabetamath.cc/item/def-shift-of-a-chain-complex)

### Facts & Assumptions

**Given:** A chain map $f$ of complexes of abelian groups with acyclic cokernel, and $K,F$ as stated.

**Goal:** Prove that the inclusion $K\to F$ is a quasi-isomorphism, meaning a chain map inducing isomorphisms on all homology groups, and identify $F$ with the stated homotopy-fiber model.

[F1] The category $\mathbf{Ab}$ of abelian groups is abelian; chain complexes have differentials of degree $-1$ with $d^2=0$, and a chain map satisfies $d_Bf=fd_A$. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[F2] Homology is the quotient of cycles by boundaries, and a chain map induces its well-defined map on this quotient. [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex), [math:thm-a-chain-map-induces-a-well-defined-map-on-homology](https://alphabetamath.cc/item/thm-a-chain-map-induces-a-well-defined-map-on-homology)

[F3] Kernels and cokernels of chain maps are computed degreewise with the induced differentials; this also applies to inclusions of subcomplexes. [math:lem-the-kernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-kernel-of-a-chain-map-is-computed-degreewise), [math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

[F4] The shift has $C[k]_n=C_{n-k}$ and $d_{C[k]}=(-1)^k d_C$. The mapping cone has $\operatorname{Cone}(f)_n=B_n\oplus A_{n-1}$ and differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$. [math:def-shift-of-a-chain-complex](https://alphabetamath.cc/item/def-shift-of-a-chain-complex), [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[F5] A sequence of chain maps in an abelian category is exact if and only if it is exact in every degree. [math:cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise](https://alphabetamath.cc/item/cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise)

[F6] A short exact sequence of complexes in an abelian category gives the long exact sequence in homology. [math:thm-long-exact-sequence-in-homology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-homology)

### Proof

1.1 Since $f$ commutes with differentials, $d_F^2(a,b)=(0,f(d_Aa)-d_B(f(a)))=0$, and the inclusion $K\to F$ is a degreewise injective chain map. Its quotient is $Q_n=(A_n/K_n)\oplus B_{n+1}$ with the induced differential. Put $I_n=f_n(A_n)$; the chain-map identity makes $I$ a subcomplex of $B$. The map $A_n/K_n\to I_n$, $[a]\mapsto f_n(a)$, is well-defined, surjective and injective, since its kernel consists exactly of the classes with $a\in K_n$; these maps commute with differentials. Thus identify $Q_n=I_n\oplus B_{n+1}$ with differential $(x,b)\mapsto(d_Ix,x-d_Bb)$. Put $C=B/I=\operatorname{coker}(f)$. The map $Q_n\to C[-1]_n=C_{n+1}$, $(x,b)\mapsto[b]$, is surjective and commutes with differentials, since $[x-d_Bb]=-d_C[b]$. Its kernel is $D_n=I_n\oplus I_{n+1}$ with differential $(x,y)\mapsto(d_Ix,x-d_Iy)$. Therefore $0\to D\to Q\to C[-1]\to0$ and $0\to K\to F\to Q\to0$ are short exact sequences of complexes in $\mathbf{Ab}$. [given, F1, F3, F4, F5, algebra]

2.1 The maps $h_n:D_n\to D_{n+1}$ given by $h_n(x,y)=(y,0)$ satisfy $(dh+hd)(x,y)=(d_Iy,y)+(x-d_Iy,0)=(x,y)$. Every cycle $z$ of $D$ is consequently the boundary $d(hz)$, so $D$ is acyclic. Since the differential of $C[-1]$ is $-d_C$, its cycles and boundaries in degree $n$ are those of $C$ in degree $n+1$; thus $H_n(C[-1])=H_{n+1}(C)=0$ by hypothesis. Apply the long exact homology sequence to the first short exact sequence of step 1.1: the zero groups $H_n(D)$ and $H_n(C[-1])$ force $H_n(Q)=0$ for every $n$. For the second sequence, the exact segment $H_{n+1}(Q)\to H_n(K)\to H_n(F)\to H_n(Q)$ then proves that the induced map $H_n(K)\to H_n(F)$ is an isomorphism for every $n$. Finally, the degreewise bijection $F_n\to\operatorname{Cone}(f)[-1]_n=B_{n+1}\oplus A_n$, $(a,b)\mapsto(-b,a)$, commutes with differentials: both compositions send $(a,b)$ to $(d_Bb-f(a),d_Aa)$. Hence it is a chain isomorphism to the homotopy-fiber model with the convention stated above. [given, F2, F4, F6, step 1.1, algebra] ∎


## Matching families of abelian presheaves

[Open item](item-lem-author-a44f2061570d-matching-groups) · level 0


### Statement
Let $\mathcal C$ be a small site and $F$ a presheaf of abelian groups. For a sieve $R$ on an object $U$, the compatible families of sections of $F$ indexed by arrows in $R$ form an abelian group under componentwise addition. If $F$ is a sheaf, restriction from $F(U)$ to this group is an isomorphism for every covering sieve $R$.

Here a small site is a small category $\mathcal C$ equipped with a Grothendieck topology $J$. Small means that both its object collection and its morphism collection are sets. A sieve $R$ on $U$ is a set of arrows with codomain $U$ closed under precomposition. For $f:V\to U$, write $f^*R=\{g:W\to V\mid f\circ g\in R\}$. The topology assigns to each $U$ a set $J(U)$ of covering sieves: the maximal sieve covers, $f^*R$ covers $V$ whenever $R$ covers $U$, and a sieve $S$ covers $U$ if some covering sieve $R$ on $U$ has $f^*S$ covering the domain of every $f\in R$.

The category of abelian groups has set-based abelian groups as objects and group homomorphisms as morphisms, with the usual identity maps and composition of functions. A presheaf of abelian groups is a contravariant functor from $\mathcal C$ to this category. Write $fg=f\circ g$. A compatible family assigns $s_f\in F(V)$ to every $f:V\to U$ in $R$, with $F(g)(s_f)=s_{fg}$ for every $g:W\to V$. Write $\operatorname{Match}(R,F)$ for the subset of $\prod_{f\in R}F(\operatorname{dom}f)$ consisting of these families. The restriction map is $\rho_R:F(U)\to\operatorname{Match}(R,F)$, $s\mapsto(F(f)(s))_{f\in R}$. Here $F$ is a sheaf when every compatible family on every covering sieve has a unique amalgamation, meaning a section $s\in F(U)$ whose restrictions are that family.

### Facts & Assumptions

**Given:** A small site $(\mathcal C,J)$, an abelian presheaf $F$, an object $U$, and a sieve $R$ on $U$, with the conventions above.

**Goal:** Prove the group assertion and, when $F$ is a sheaf and $R$ covers $U$, the isomorphism assertion.

[F1] Use the site, sieve, matching-family and sheaf definitions stated above. The category and smallness interfaces are [math:def-category](https://alphabetamath.cc/item/def-category) and [math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category).

[F2] The values of $F$ satisfy the abelian group axioms, its restriction maps preserve addition, and contravariance gives $F(g)F(f)=F(fg)$ and $F(1_U)=1_{F(U)}$. The target category uses identity and composite homomorphisms. [math:def-group](https://alphabetamath.cc/item/def-group) [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[F3] For a set-indexed family of sets the indexed product is a set of functions with the specified component values; imposing a predicate on a set gives a subset by Separation. [math:def-product-of-an-indexed-family](https://alphabetamath.cc/item/def-product-of-an-indexed-family) [math:lem-the-product-of-an-indexed-family-is-a-set](https://alphabetamath.cc/item/lem-the-product-of-an-indexed-family-is-a-set) [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[F4] A group isomorphism means a bijective group homomorphism. [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Proof

**Proof technique:** Check the matching equations and the restriction map componentwise.

1.1 Since $\mathcal C$ is small, $R$ is a set and $(F(\operatorname{dom}f))_{f\in R}$ is a set-indexed family of sets. By [F3] its indexed product is a set, and Separation with the matching equations gives the set $\operatorname{Match}(R,F)$. For any restriction homomorphism $h$, the equation $h(0)=h(0)+h(0)$ gives $h(0)=0$ after adding $-h(0)$; then $h(x)+h(-x)=h(0)=0$ gives $h(-x)=-h(x)$ by the group axioms. Thus the specified zero family is compatible. If $s,t$ are compatible, then $F(g)(s_f+t_f)=s_{fg}+t_{fg}$ and $F(g)(-s_f)=-s_{fg}$, so componentwise sum and inverse remain compatible. Associativity, commutativity, the identity law and the inverse law follow in each component from the abelian group axioms, proving that $\operatorname{Match}(R,F)$ is an abelian group. For $R=\varnothing$ there is exactly one empty family and these laws still hold. The zero family is specified componentwise, so no choice principle is needed. [given, F1, F2, F3, construct, algebra]

2.1 For $s\in F(U)$ and $f:V\to U$ in $R$, contravariance gives $F(g)(F(f)(s))=F(fg)(s)$ for every $g:W\to V$, so $\rho_R(s)$ is compatible. Each $F(f)$ preserves addition, hence $\rho_R(s+t)=\rho_R(s)+\rho_R(t)$ componentwise, making $\rho_R$ a homomorphism to the group in step 1.1. If $F$ is a sheaf and $R$ covers $U$, the stated sheaf condition gives exactly one preimage under $\rho_R$ for each compatible family. Thus $\rho_R$ is bijective and is a group isomorphism by [F4]. [F1, F2, F4, step 1.1] ∎


## Uniqueness from squares and cubes

[Open item](item-lem-author-30ec96de6e59-square-cube-uniqueness) · level 0


### Statement
Let $A$ be a reduced commutative ring. If $a,b\in A$ satisfy $a^2=b^2$ and $a^3=b^3$, then $a=b$. Here reduced means that the only nilpotent element is zero.

### Statement references

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

### Facts & Assumptions

**Given:** A reduced commutative ring $A$ and elements $a,b$ with equal squares and equal cubes.

**Goal:** Prove $a=b$.

[F1] In a commutative ring, addition is an abelian group operation, multiplication is associative and commutative, and multiplication distributes over addition; these laws justify the polynomial expansion below ([math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)).

[F2] An element $u$ is nilpotent when $u^n=0$ for some integer $n\ge1$; in a reduced ring every such element is zero ([math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)).

### Proof

1.1 From the equalities, $a^2b=b^3=a^3$ and $ab^2=a^3$. Consequently $(a-b)^3=a^3-3a^2b+3ab^2-b^3=0$. [given, F1, algebra]

2.1 Reducedness gives $a-b=0$, so $a=b$. [given, F2, step 1.1] ∎


## The square-cube condition implies reducedness

[Open item](item-lem-author-30ec96de6e59-seminormal-ring-reduced) · level 0


### Statement
If a commutative ring $A$ has a unique $a\in A$ with $a^2=x$ and $a^3=y$ for every pair $x,y\in A$ with $x^3=y^2$, then $A$ is reduced: it has no nonzero nilpotent element.

### Facts & Assumptions

**Given:** A commutative ring satisfying the stated square-cube condition.

[F1] The commutative ring structure, including its multiplication and zero, is as in [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring). Powers denote repeated multiplication, with $a^0=1$ and $a^{m+1}=a^m a$ for integers $m\geq 0$.

[F2] By [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring), an element $t\in A$ is nilpotent exactly when $t^n=0$ for some integer $n\geq 1$, and $A$ is reduced exactly when every such element is zero.

**Goal:** Show that every nilpotent element vanishes.

### Proof

1.1 If $z^2=0$, then $z^3=z^2z=0$ as well. Both $0$ and $z$ have square and cube equal to zero, so uniqueness applied to $(x,y)=(0,0)$ gives $z=0$. [given, F1, algebra]

2.1 Let $t$ be nilpotent, so $t^n=0$ for some positive integer $n$. Choose an integer $k\geq 0$ with $2^k\geq n$; then $t^{2^k}=t^n t^{2^k-n}=0$. For $j=k,k-1,\ldots,1$, apply step 1.1 to $z=t^{2^{j-1}}$, whose square is $t^{2^j}$, to obtain $t^{2^{j-1}}=0$. This finite descent ends with $t=0$ (already true at the start if $k=0$). Thus $A$ is reduced. [F1, F2, step 1.1, construct, algebra] ∎


## Uniqueness of an initial object

[Open item](item-lem-author-30ec96de6e59-initial-object-uniqueness) · level 0


### Statement
Any two initial objects of a category are uniquely isomorphic. An object is initial if it has exactly one arrow to every object.

### Facts & Assumptions

[F1] A category supplies objects, arrows, identity arrows and composition of composable arrows, as in [math:def-category](https://alphabetamath.cc/item/def-category).

[F2] An arrow $f:I\to J$ is an isomorphism if there is an arrow $g:J\to I$ with $gf=\operatorname{id}_I$ and $fg=\operatorname{id}_J$, as in [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category).

**Given:** Initial objects $I$ and $J$ in a category.

**Goal:** Prove there is a unique isomorphism $I\to J$.

### Proof

1.1 Initiality supplies unique arrows $f:I\to J$ and $g:J\to I$. Since each initial object has only one endomorphism, $gf=\operatorname{id}_I$ and $fg=\operatorname{id}_J$. [given, F1]

2.1 Thus $f$ is an isomorphism with inverse $g$; it is unique because there is only one arrow from $I$ to $J$. [given, F2, step 1.1] ∎


## Intermediate rings in finite algebras

[Open item](item-lem-author-30ec96de6e59-finite-intermediate-module) · level 0


### Statement
Let $A$ be a noetherian commutative ring and $B$ a finite $A$-algebra. Any $A$-subalgebra $C\subseteq B$ is finite as an $A$-module. Here noetherian means every ideal is finitely generated, and finite means finitely generated as a module.

### Facts & Assumptions

**Given:** A noetherian commutative ring $A$, an $A$-algebra $B$ finitely generated as an $A$-module, and an $A$-subalgebra $C\subseteq B$.

**Goal:** Show $C$ is finitely generated over $A$.

[F1] Use the algebra and scalar-action conventions of [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring) and the submodule convention of [math:def-submodule](https://alphabetamath.cc/item/def-submodule). Here an $A$-subalgebra $C\subseteq B$ is a unital subring containing the image of the structure map $A\to B$. Thus $C$ is an $A$-submodule: it is closed under addition and additive inverses, and $ac=\eta_B(a)c\in C$ for $a\in A$ and $c\in C$.

[F2] Finite generation is in the sense of [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules): a finite list generates when every element is a finite $A$-linear combination of that list. Ideals are as in [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal). The noetherian hypothesis says precisely that every ideal of $A$ has such a finite generating list.

[F3] Write $A^n$ for the finite free module with its indexed standard basis from [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis), including $A^0=0$. Module homomorphisms, kernels and images are as in [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel). Coordinate projections and all maps used below are $A$-linear.

### Proof

1.1 We prove by induction on $n$ that every $A$-submodule $N\subseteq A^n$ is finitely generated. For $n=0$, $N=0$ is generated by the empty list. For $n>0$, let $p:N\to A$ be projection to the last coordinate. Its image $I=p(N)$ is an ideal: it is an additive subgroup stable under multiplication by $A$. Choose a finite generating list $a_1,\ldots,a_r$ of $I$ and lifts $x_j\in N$ with $p(x_j)=a_j$. The kernel consists of the elements of $N$ with last coordinate zero, so deleting that coordinate identifies it with a submodule of $A^{n-1}$. The induction hypothesis gives a finite generating list $y_1,\ldots,y_s$ of this kernel. For $z\in N$, write $p(z)=\sum_j b_j a_j$; then $z-\sum_j b_jx_j$ lies in the kernel. Hence the $x_j$ and $y_i$ generate $N$. Only finitely many lifts are chosen. [F1, F2, F3, given, construct]

2.1 Choose a finite generating list $u_1,\ldots,u_n$ of $B$ as an $A$-module. The formula $q:A^n\to B$, $q((b_i))=\sum_i b_i u_i$, defines a surjective $A$-linear map. Since $C$ is an $A$-submodule, $P=q^{-1}(C)$ is an $A$-submodule of $A^n$: linearity of $q$ preserves the defining condition under addition, additive inverses and scalars. By step 1.1, choose a finite generating list $v_1,\ldots,v_t$ of $P$. Every $c\in C$ has a preimage in $P$, and applying $q$ to a linear expression in the $v_j$ expresses $c$ in the finite list $q(v_1),\ldots,q(v_t)$. Therefore $C$ is finite as an $A$-module. [F1, F2, F3, given, step 1.1, construct] ∎


## External norm-divisor identity for integral curves

[Open item](item-thm-author-1437578267d2-curve-norm-input) · level 0


### Statement
Let $k$ be a field and let $C,T$ be integral finite-type $k$-schemes of chain dimension one. Let $p:C\to T$ be a proper dominant $k$-morphism, where dominant means that $p(C)$ is dense in $T$. Write $K=k(T)$ and $L=k(C)$ for the function fields, identified with the generic stalks and the fraction fields of nonempty affine charts. The induced extension $L/K$ is finite. For every $g\in L^\times$,
$$p_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{L/K}(g)\quad\text{in }Z_0(T).$$

The constructions in this identity have the following conventions. For $D=C$ or $T$, $Z_0(D)$ is the free abelian group on its reduced closed points, so its elements are finite formal integer sums of symbols $[x]$. At a closed point $x$, $R=\mathcal O_{D,x}$ is a one-dimensional Noetherian local domain with fraction field $k(D)$. For $f=a/b\in k(D)^\times$, with $a,b\in R\setminus\{0\}$, set $\operatorname{ord}_x(f)=\ell_R(R/aR)-\ell_R(R/bR)$, where $\ell_R$ is composition length and the quotients are $R$-modules. These lengths are finite, their difference is independent of the fraction, and it is additive on products. The sum $\operatorname{div}_D(f)=\sum_{x\in D\text{ closed}}\operatorname{ord}_x(f)[x]$ has finite support and defines a homomorphism $k(D)^\times\to Z_0(D)$.

The norm is $\operatorname{Nm}_{L/K}(g)=\det_K(m_g)$ for the multiplication operator $m_g:L\to L$, $z\mapsto gz$. For a point $x$ write $\kappa(x)=\mathcal O_{D,x}/\mathfrak m_x$, with $\mathfrak m_x$ its maximal ideal. A closed point $y$ of $C$ maps to a closed point of $T$ with finite residue-field extension. Define $p_*$ on point cycles by $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$ and extend it $\mathbb Z$-linearly; the bracketed field degree is vector-space dimension. Neither curve need be normal or smooth, and $L/K$ need not be separable.

### Facts & Assumptions
**Given:** The field, integral curves, proper dominant morphism and nonzero rational function in the Statement.

**Goal:** Record the established external identity with its singular-curve coefficient convention and well-defined constructions.

[F1] The imported norm-divisor theorem is [Stacks Lemma 42.18.1](https://stacks.math.columbia.edu/tag/02RT), in the field-base setup of Situation 42.7.1 and Example 42.7.2. Its proof uses a finite-domain reduction and residue-degree-weighted local orders. F8 verifies its dimension hypothesis, and F9 and F10 supply finiteness and the proper pushforward convention.

[F2] [Stacks Section 10.121](https://stacks.math.columbia.edu/tag/02MB), specifically Lemma 10.121.1, Definition 10.121.2 and Lemma 10.121.8, supplies the finite-length order convention and the weighted local norm formula. The fraction-order construction is imported with its well-definedness, not asserted as a new local proof.

[F3] [Stacks Section 31.27](https://stacks.math.columbia.edu/tag/0BE0), specifically Definitions 31.27.3 and 31.27.5 and Lemmas 31.27.4 and 31.27.6, supplies the principal-divisor construction, locally finite support and additivity. Its quasi-compact specialization gives finite support on these curves.

[F4] The geometric hypotheses for these constructions hold: finite-type schemes over a field are Noetherian by [Stacks Lemma 29.15.6](https://stacks.math.columbia.edu/tag/01T6); a closed point on an integral curve has local dimension one by [Stacks Lemma 28.10.3](https://stacks.math.columbia.edu/tag/02IZ). These geometric facts are imported together with F2 and F3.

[F5] Integrality, finite type, properness and chain dimension use [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism) and [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space). Dominance is defined inline in the Statement for scheme morphisms.

[F6] Function fields use the generic-stalk identification of [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), only its ordinary function-field clause. Residue fields, finite degrees and the determinant norm use [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension) and [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace), respectively.

[F7] The cycle group, quotient modules and composition lengths use [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module) and [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), respectively. F2 and F3 provide the additional singular-curve well-definedness and finite-support inputs.

[F8] In the field-base setup of F1, [Stacks Section 42.7](https://stacks.math.columbia.edu/tag/02QK), especially Lemma 42.7.5 and Definition 42.7.6, identifies delta-dimension with chain dimension on integral finite-type $k$-schemes and their integral closed subschemes. The lemma requires a Jacobson base (closed points are dense in every closed subset) and base dimension function zero at closed points; $\operatorname{Spec}k$ has just one closed point, with value zero as in Example 42.7.2. In particular $\dim_\delta C=\dim_\delta T=1$, and reduced closed points have delta-dimension zero.

[F9] [Stacks Lemma 42.11.1](https://stacks.math.columbia.edu/tag/02R1) imports finiteness of function-field extensions for dominant morphisms between integral schemes locally of finite type over this base with equal delta-dimension. Apply it to $C\to T$ using F8. For every closed $y\in C$, properness makes $x=p(y)$ closed; the induced map between reduced points is dominant, and F8 gives both delta-dimension zero. The same lemma gives $[\kappa(y):\kappa(x)]<\infty$.

[F10] [Stacks Definition 42.12.1](https://stacks.math.columbia.edu/tag/02R3) supplies proper pushforward of cycles in F1. For a reduced closed point $y$ and $x=p(y)$, F8 and F9 put its formula in the equal-dimension case, with function fields $\kappa(y)$ and $\kappa(x)$. Its degree coefficient is therefore $[\kappa(y):\kappa(x)]$, exactly the point formula in the Statement. Linear extension on finite zero-cycles is the homomorphism used by F1.

### External input
Import F1 with the construction facts F2-F4, formulation interfaces F5-F7, field-base dimension comparison F8, finite-degree input F9 and proper zero-cycle pushforward F10. This is an equality of zero-cycles before quotienting by rational equivalence. The cited results are external inputs; no local reconstruction of their proofs is claimed.


## Units in a sheaf of rings form a sheaf

[Open item](item-lem-author-8e1c0251ef0d-units-sheaf) · level 0


### Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site. The presheaf $U\mapsto\mathcal O(U)^\times$ is a sheaf of abelian groups, where $\mathcal O(U)^\times$ denotes the multiplicatively invertible elements. Rings and restriction homomorphisms are unital; the zero ring is allowed.

### Facts & Assumptions

**Given:** A site $(\mathcal C,J)$ and a sheaf of commutative unital rings $\mathcal O$ on it, with the conventions below.

**Goal:** Prove the sheaf condition for its units and the compatibility of their abelian group structures with restriction.

[F1] A site here is a category $\mathcal C$ equipped with a Grothendieck topology $J$. A sieve $R$ on $U$ is a collection of arrows to $U$ closed under precomposition. For $f:V\to U$, define $f^*R=\{g:W\to V:fg\in R\}$. The covering sieves are specified by $J$: the maximal sieve covers, pullbacks of covering sieves cover, and a sieve $S$ covers $U$ whenever there is a covering sieve $R$ on $U$ such that $f^*S$ covers the domain of every $f\in R$. Category, domain, identity and composition have the meanings in [math:def-category](https://alphabetamath.cc/item/def-category). These definitions impose no scheme hypothesis or additional smallness restriction; class-sized data use that supplier's definable-class convention.

[F2] A presheaf of sets is a contravariant functor to sets and functions, as in [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor). Write $f^*$ for restriction along $f$. A matching family on $R$ consists of $s_f\in F(V)$ for each $f:V\to U$ in $R$, with $g^*s_f=s_{fg}$ for every $g:W\to V$. A sheaf means that each such family on every covering sieve has exactly one amalgamation $s\in F(U)$ satisfying $f^*s=s_f$. In particular, two sections with the same restrictions on a covering sieve are equal. This is an inline convention for arbitrary sites, independent of a construction of sheafification.

[F3] A ring is unital as in [math:def-ring](https://alphabetamath.cc/item/def-ring), and commutative means $ab=ba$ for all elements. The presheaf $\mathcal O$ assigns a commutative ring to each object and a unital ring homomorphism $f^*:\mathcal O(U)\to\mathcal O(V)$ to each $f:V\to U$, in the sense of [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism), with $1_U^*=\operatorname{id}$ and $(fg)^*=g^*f^*$. Its underlying set-valued presheaf satisfies [F2]. A sheaf of abelian groups means the analogous assignment of abelian groups and restriction maps preserving multiplication and identity, satisfying these same restriction laws and the underlying-set sheaf condition; abelian groups have the meaning in [math:def-group](https://alphabetamath.cc/item/def-group).

[F4] For a ring $A$, its units are $A^\times=\{a\in A:ab=ba=1\text{ for some }b\in A\}$. They form a group under multiplication, and inverses are unique, by [math:lem-ring-units-form-a-group](https://alphabetamath.cc/item/lem-ring-units-form-a-group). Every unital ring homomorphism $h:A\to B$ carries units to units and satisfies $h(a^{-1})=h(a)^{-1}$, by claim 3 of [math:lem-ring-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-ring-homomorphism-basic-properties). These facts include the zero ring.

### Proof

1.1 By [F3] and [F4], restriction gives maps on units, preserving multiplication, identity and inverses; their identity and composition laws are inherited from $\mathcal O$. Thus the units form a presheaf of groups. Let $R$ be a covering sieve on $U$ and let $(a_f)$ be a matching family of units. By [F4], $g^*(a_f^{-1})=(g^*a_f)^{-1}=a_{fg}^{-1}$, so their uniquely determined inverses also form a matching family. Apply [F2] to the underlying sheaf of $\mathcal O$ to glue the two families to sections $a,b\in\mathcal O(U)$. For every $f:V\to U$ in $R$, $f^*(ab)=a_fa_f^{-1}=1=f^*1$ and $f^*(ba)=a_f^{-1}a_f=1=f^*1$ by [F3]. Uniqueness in [F2] gives $ab=ba=1$, so $a$ is a unit amalgamating the original family. [F2, F3, F4, construct]

2.1 Two unit amalgamations are sections of $\mathcal O(U)$ with the same restrictions on $R$, so they are equal by [F2]. Thus the presheaf of units is a sheaf. Its groups are abelian because their multiplication is inherited from the commutative rings $\mathcal O(U)$; their restrictions preserve the group operations by step 1.1. This is precisely a sheaf of abelian groups in [F3]. The argument also allows an empty covering sieve: the same uniqueness condition still implies $ab=ba=1$. No choice of inverses is required, since they are unique. [F2, F3, F4, step 1.1] ∎


## Local sections of a torsor give a cocycle

[Open item](item-lem-author-8e1c0251ef0d-torsor-cocycle) · level 0


### Statement

Let $(\mathcal C,J)$ be a Grothendieck site. Here $\mathcal C$ is a category; a sieve on $V$ is a collection of arrows into $V$ closed under precomposition, and $f^*R$ consists of arrows $k$ with $fk\in R$. A Grothendieck topology $J$ specifies covering sieves: the maximal sieve covers, pullbacks of covering sieves cover, and a sieve $S$ covers $V$ if some covering sieve $R$ on $V$ has $f^*S$ covering the domain of every $f\in R$. A set-indexed family $\{U_i\to U\}$ is covering if its generated sieve, consisting of arrows factoring through some $U_i\to U$, is covering. Assume the fibre products used below exist in $\mathcal C$.

A presheaf of sets $F$ is a contravariant functor to sets, with restriction $F(f):F(V)\to F(W)$ for $f:W\to V$. It is a sheaf if, for each covering sieve $R$ on $V$, every family $x_f\in F(\operatorname{dom}f)$ satisfying $x_{fk}=F(k)(x_f)$ has a unique $x\in F(V)$ with $F(f)(x)=x_f$. Let $G$ be a sheaf of abelian groups: each $G(V)$ is an abelian group, its restrictions preserve the group operations, and its underlying presheaf of sets is a sheaf.

A $G$-torsor $P$ is a sheaf of sets equipped, for each $V$, with a left action of $G(V)$ on $P(V)$ commuting with restrictions. It is locally nonempty, meaning every $V$ has a covering family $\{V_a\to V\}$ with $P(V_a)\ne\varnothing$, and simply transitive on nonempty section sets: for $x,y\in P(V)$ there is exactly one $g\in G(V)$ with $y=gx$.

Suppose a covering family $\{U_i\to U\}$ and sections $s_i\in P(U_i)$ are given. Write $U_{ij}=U_i\times_U U_j$ and $U_{ijk}=(U_i\times_U U_j)\times_U U_k$. Every section in an equation on an overlap is restricted along its canonical projection to that overlap.

There are unique $g_{ij}\in G(U_{ij})$ with $s_j=g_{ij}s_i$, and $g_{ij}g_{jk}=g_{ik}$ in $G(U_{ijk})$. For any specified sections $h_i\in G(U_i)$, replacing $s_i$ by $s'_i=h_i s_i$ replaces the transition sections by $g'_{ij}=h_jg_{ij}h_i^{-1}$ in $G(U_{ij})$.

### Statement references

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-pullbacks-and-pushouts](https://alphabetamath.cc/item/def-pullbacks-and-pushouts)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

### Facts & Assumptions

**Given:** The site, abelian sheaf, torsor, covering family, local sections and specified change sections of the Statement. No choice of local sections is asserted.

**Goal:** Prove existence and uniqueness of the transitions, their cocycle equation, and their change-of-section formula.

[F1] Categories and contravariant functors have the meanings in [math:def-category](https://alphabetamath.cc/item/def-category) and [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor). Sieves, coverings, sheaves and their restriction notation are defined in the Statement; functorial restriction identifies successive pullbacks of a section with restriction along the composite arrow.

[F2] Fibre products and their canonical projections have the universal property in [math:def-pullbacks-and-pushouts](https://alphabetamath.cc/item/def-pullbacks-and-pushouts). In particular, the projections from $U_{ijk}$ to each double overlap commute with the projections to the $U_i$.

[F3] The group axioms, inverses and commutativity are those of [math:def-group](https://alphabetamath.cc/item/def-group), and left actions satisfy $1x=x$ and $(ab)x=a(bx)$ as in [math:def-group-action](https://alphabetamath.cc/item/def-group-action). The sectionwise torsor condition and compatibility with restriction are explicit hypotheses of the Statement.

### Proof

1.1 On $U_{ij}$ the restrictions of $s_i$ and $s_j$ are sections of $P$, so simple transitivity supplies a unique $g_{ij}$. Restricting further to $U_{ijk}$ respects both the action and the projections. Hence $s_k=g_{jk}s_j=(g_{jk}g_{ij})s_i$ and $s_k=g_{ik}s_i$. Uniqueness for the pair $(s_i,s_k)$ gives $g_{jk}g_{ij}=g_{ik}$; commutativity in $G(U_{ijk})$ gives $g_{ij}g_{jk}=g_{ik}$. [F1, F2, F3, given]

2.1 For the specified $h_i$, the action and inverse laws give $h_i^{-1}s'_i=s_i$ on every overlap. Thus $s'_j=h_js_j=h_jg_{ij}s_i=(h_jg_{ij}h_i^{-1})s'_i$. All products lie in $G(U_{ij})$ after restriction, and simple transitivity identifies the displayed coefficient with the unique new transition section $g'_{ij}$. This proves the change-of-section formula as well as the cocycle formula from step 1.1. [F1, F2, F3, given, step 1.1, algebra] ∎


## Proper norm and graph formulas for principal divisors

[Open item](item-thm-adjudicate-16c74c1a77ef-principal-divisor-input) · level 0


### Statement
Assume the Axiom of Choice for the cited cycle and finite-length interfaces. Let $k$ be a field. For integral finite-type $k$-schemes $P,Q$, a proper dominant generically finite morphism $p:P\to Q$ and $h\in k(P)^\times$ satisfy
$$p_*\operatorname{div}_P(h)=\operatorname{div}_Q\operatorname{Nm}_{k(P)/k(Q)}(h).$$
Divisor orders use lengths in the one-dimensional local rings, and pushforward includes residue-field degrees.

For an integral finite-type $k$-scheme $Q$ and $f\in k(Q)^\times$, let $G\subset Q\times\mathbf P^1$ be the reduced closure of the graph on any nonempty open where $f$ is invertible. Its projection $p:G\to Q$ is proper birational. The fibers $G_0,G_\infty$ are effective Cartier divisors, allowing the empty divisor, and
$$p_*([G_0]-[G_\infty])=\operatorname{div}_Q(f).$$
Neither scheme is required to be separated over $k$.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

[math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[math:lem-order-function-one-dimensional-local-domain](https://alphabetamath.cc/item/lem-order-function-one-dimensional-local-domain)

[math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:lem-proper-pushforward-of-cycles-well-defined](https://alphabetamath.cc/item/lem-proper-pushforward-of-cycles-well-defined)

[math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)

[math:def-graph-morphism-over-base](https://alphabetamath.cc/item/def-graph-morphism-over-base)

[math:def-birational-morphism-schemes](https://alphabetamath.cc/item/def-birational-morphism-schemes)

[math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)

[math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)

[math:lem-cycle-of-a-closed-subscheme](https://alphabetamath.cc/item/lem-cycle-of-a-closed-subscheme)

### Facts & Assumptions

**Given:** The field, schemes, morphism and rational functions of the statement. The formulas are imported results, with the following explicit formulation conventions.

[A1] AC is inherited from the selected order and proper-pushforward interfaces; no minimal-choice assertion is made. The function-field supplier's geometric-integrality clause is unused. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] For an integral finite-type $k$-scheme $T$ with generic point $\eta$, write $k(T)=\mathcal O_{T,\eta}$, canonically the fraction field on any nonempty affine open. Here dominant means that the generic point maps to the generic point, and generically finite means that the resulting extension of function fields is finite. For a finite extension $L/K$, $\operatorname{Nm}_{L/K}(h)$ is the determinant of the $K$-linear map $x\mapsto hx$ on $L$. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

[F2] The group $Z_d(T)$ consists of finite integral linear combinations of integral closed $d$-dimensional subschemes. At a codimension-one point $\xi$ of integral $T$, put $R=\mathcal O_{T,\xi}$. For $h=a/b$ with $a,b\in R\setminus\{0\}$, set $\operatorname{ord}_R(h)=\ell_R(R/aR)-\ell_R(R/bR)$, using module length. The order supplier establishes finite lengths and independence of the presentation. The principal-divisor cycle is $\operatorname{div}_T(h)=\sum_\xi\operatorname{ord}_{\mathcal O_{T,\xi}}(h)[\overline{\{\xi\}}]$; the rational-equivalence interface supplies the finiteness of its nonzero support for finite-type $T$. No normality is needed for this length definition. [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group), [math:lem-order-function-one-dimensional-local-domain](https://alphabetamath.cc/item/lem-order-function-one-dimensional-local-domain), [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)

[F3] Proper means separated, finite type and universally closed as a morphism. For any proper map $p:T\to T'$ of finite-type $k$-schemes and an integral closed $V\subseteq T$, take $W=p(V)$ with the reduced structure. If $\dim W=\dim V$, set $p_*[V]=[k(V):k(W)][W]$; if $\dim W<\dim V$, set $p_*[V]=0$. Linear extension is proper pushforward of cycles. The cited pushforward interface establishes that this operation is well defined. Its cycle-map clause is used here, not its norm formula as a substitute for the stated Stacks import. Properness of $p$ does not require $T$ or $T'$ to be separated over $k$. [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism), [math:lem-proper-pushforward-of-cycles-well-defined](https://alphabetamath.cc/item/lem-proper-pushforward-of-cycles-well-defined)

[F4] Write $\mathbf P^1=\mathbf P^1_k$ using its standard charts with coordinates $u$ and $u^{-1}$, with $0$ and $\infty$ their origins. For $f$ invertible on $U$, the graph morphism is $(\operatorname{id}_U,f):U\to Q\times_k\mathbf P^1_k$. The reduced graph closure $G$ is the closure of this image with reduced induced scheme structure, as in the graph import. Birational means that the generic points correspond and the induced function-field map is an isomorphism. [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts), [math:def-graph-morphism-over-base](https://alphabetamath.cc/item/def-graph-morphism-over-base), [math:def-birational-morphism-schemes](https://alphabetamath.cc/item/def-birational-morphism-schemes)

[F5] If $q:G\to\mathbf P^1_k$ is the second projection, the fibres are the scheme-theoretic products $G_a=G\times_{\mathbf P^1_k}\operatorname{Spec}k$ for $a=0,\infty$. An effective Cartier divisor is locally cut out by one nonzerodivisor; a unit cuts out the empty divisor. For a fibre divisor $D$, its cycle is $[D]=\sum_V\ell_{\mathcal O_{D,\eta_V}}(\mathcal O_{D,\eta_V})[V]$, over its integral irreducible components $V$. This is the fundamental cycle of the full fibre scheme, not of its reduction; the empty fibre gives zero. The closed-subscheme cycle supplier is used only for this fundamental-cycle construction, not for flat pullback. [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre), [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor), [math:lem-cycle-of-a-closed-subscheme](https://alphabetamath.cc/item/lem-cycle-of-a-closed-subscheme)

### External input

Import the proper norm identity from Stacks Lemma 42.18.1 and the graph construction and zero-minus-pole identity from Lemma 42.18.2. Their hypotheses specialize to the statement: the finite function-field extension gives equal dimensions, and the graph projection is an isomorphism over $U$.

Section 42.7, Example 42.7.2 and Lemma 42.7.5 justify the field-base specialization of Situation 42.7.1: the base has dimension function zero, and the induced cycle grading is ordinary dimension. These setup facts are included in the third reference.

The substantial formulas and graph properties are imported, not locally reconstructed. The interfaces in Facts & Assumptions specify all cycles, multiplicities and maps. No higher-Chow comparison or localization theorem is assumed.


## Regularity and dimensions for finite-type cycle arguments

[Open item](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input) · level 0


### Statement

Here a $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; smoothness and finite type refer to that morphism. A regular scheme means a locally Noetherian scheme all of whose local rings are regular local rings, in the Noetherian convention. For an integral finite-type $k$-scheme $T$ with generic point $\eta_T$, write $k(T)=\mathcal O_{T,\eta_T}$ for its function field; its canonical identification with the fraction field of any nonempty affine chart is part of the supplied function-field interface. For the field extensions $L/K$ occurring here, $\operatorname{trdeg}_K L$ is the supremum of the sizes of finite algebraically independent subsets of $L$ over $K$.

Dimension means the chain dimension of the underlying topological space: the supremum of lengths of strict chains of nonempty irreducible closed subsets. For an integral closed subscheme $D\subset T$, $\operatorname{codim}_T D$ means the supremum of lengths $m$ of chains $|D|=Z_0\subsetneq\cdots\subsetneq Z_m=|T|$ of irreducible closed subsets. This definition does not assume the dimension-difference formula asserted below. A morphism is dominant when its image is dense in its target. For a dominant morphism between integral schemes, the function-field extension uses the pullback at the generic points. Components of an effective Cartier divisor mean the irreducible components of its associated closed subscheme: on a chart $\operatorname{Spec}A$ with local nonzerodivisor equation $f$, this subscheme is $\operatorname{Spec}(A/(f))$; the closed-immersion supplier establishes that these charts glue independently of the equations. A unit equation gives the empty divisor, for which the component assertion is vacuous.

Let $k$ be a field. A smooth $k$-scheme is regular, and every regular local ring is a domain. If $T$ is an integral finite-type $k$-scheme and $D\subset T$ is integral and closed, then $\dim T=\operatorname{trdeg}_k k(T)$ and $\operatorname{codim}_T D=\dim T-\dim D$. Every nonempty open of $T$ has the same dimension as $T$. Every irreducible component of an effective Cartier divisor on $T$ has dimension $\dim T-1$.

If $p:P\to Q$ is a proper dominant morphism of integral finite-type $k$-schemes, then $\dim P=\dim Q+\operatorname{trdeg}_{k(Q)}k(P)$. None of these assertions requires separatedness over $k$.

### Statement references

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:def-algebraically-independent-finite-tuples-over-a-field](https://alphabetamath.cc/item/def-algebraically-independent-finite-tuples-over-a-field)

[math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)

[math:thm-effective-cartier-divisor-closed-immersion](https://alphabetamath.cc/item/thm-effective-cartier-divisor-closed-immersion)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

### External input

The regularity and regular-local-domain assertions are imported from Stacks tags 056S and 00NN. Their formulation uses [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring) and [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme). The finite-type schemes used for the dimension assertions are Noetherian by tag 01T6, applied to their structure maps to the spectrum of a field; thus the chain-dimension convention of [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) applies.

Tags 07NB, Lemmas 10.116.1–10.116.3, supply the affine dimension, specialization and local dimension formulas. Apply them on affine neighbourhoods of the relevant generic points. The canonical function-field identifications in [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field) identify the fraction fields of all nonempty affine charts with the same $k(T)$. Only that supplier's function-field and finite-generation clauses are used, not its geometric-integrality clause or that clause's choice assumption. The affine formulas give the stated dimensions, invariance on nonempty opens and codimension formula; the chain definition of codimension is the usual scheme codimension, not a classical-variety convention.

Tag 02JX supplies the dimension formula for the proper dominant map. Properness in [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism) includes finite type and universal closedness, hence gives the closedness required by that cited equality; the target is locally Noetherian by tag 01T6. Dominance sends the source generic point to the target generic point, so generic-stalk pullback is a unital homomorphism of fields and hence injective. This specifies the field extension in the formula.

Tag 02RK supplies the Cartier-component assertion. The associated closed subscheme is the construction in [math:thm-effective-cartier-divisor-closed-immersion](https://alphabetamath.cc/item/thm-effective-cartier-divisor-closed-immersion), applied to [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor). For this citation use precisely the field-base setup of Section 42.7, Example 42.7.2: $S=\operatorname{Spec}k$ with base dimension function zero. The induced function on a finite-type $k$-scheme is $\delta(x)=\operatorname{trdeg}_k\kappa(x)$, where $\kappa(x)$ is the residue field of its local ring. Definition 42.7.6 and Lemma 42.7.5 identify the source's $\delta$-dimension of an integral component with ordinary chain dimension, giving exactly the stated drop by one. No separatedness over $k$ is imposed by any of these inputs; properness is a condition on the displayed morphism, not on the structure maps to $\operatorname{Spec}k$.

The seven source records specify the imported premises and the scope actually checked in this repair. The indicated statements and displayed proofs were read as recorded in their reading limits; their deeper prerequisites were not reconstructed. These are external inputs and scope checks, not a claimed local proof of the imported results. The checked versions are live tag texts, without a pinned repository commit.


## Closed-point local rings and function fields of integral curves

[Open item](item-lem-adjudicate-b5ccab493b5a-curve-local-rings) · level 0


### Statement
Assume AC. Let $T$ be an integral finite-type $k$-scheme of chain dimension one, where $k$ is a field. Then $T$ has a unique generic point $\eta$ and function field $K=k(T)=\mathcal O_{T,\eta}$. On every nonempty affine open $U=\operatorname{Spec}A$, this field is canonically $\operatorname{Frac}A$. Every closed point $x$ has an affine neighbourhood with $A$ a finite-type $k$-algebra. On such a neighbourhood, its prime $\mathfrak p$ is nonzero and maximal, and $R=\mathcal O_{T,x}=A_{\mathfrak p}$ is a Noetherian local domain. Its maximal ideal is $\mathfrak m=\mathfrak pA_{\mathfrak p}$, its residue field is $R/\mathfrak m$, and its only prime ideals are $(0)$ and $\mathfrak m$. Thus it is one-dimensional, and every ideal of $R$ is finitely generated. The canonical restriction map $R\to K$ is injective and identifies $\operatorname{Frac}R$ with $K$. An element $a/s\in A_{\mathfrak p}$ is a unit exactly when $a\notin\mathfrak p$.

### Facts & Assumptions
**Given:** AC and the integral finite-type scheme $T$ of chain dimension one over the field $k$.

[F1] An integral scheme is nonempty and irreducible and has domains as coordinate rings of nonempty affine opens. Finite type provides finite-type affine neighbourhoods and quasi-compactness. Chain dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[F2] In an affine spectrum, points are prime ideals and the closure of $\mathfrak q$ is $V(\mathfrak q)$. A point is closed exactly when its prime is maximal. Once an integral finite-type scheme of chain dimension one has a generic point, it is Noetherian, that point is unique, every other point is closed, and every proper closed subset is finite. These results are used under AC. [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets), [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set), [math:cor-closed-points-of-spectrum-are-maximal-ideals](https://alphabetamath.cc/item/cor-closed-points-of-spectrum-are-maximal-ideals), [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] On an affine neighbourhood, the stalk at $\mathfrak p$ is $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$. Contraction identifies its primes with primes of $A$ contained in $\mathfrak p$. A local ring is a nonzero commutative ring with a unique maximal ideal, and the quotient by that ideal is its residue field. [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization), [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal), [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring), [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)

[F4] A finite-type algebra over a Noetherian ring is Noetherian, and localization preserves Noetherianity. Under AC, a commutative ring is Noetherian if and only if every ideal is finitely generated. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations), [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] For an integral finite-type scheme with generic point $\eta$, its generic stalk is canonically the fraction field of every nonempty affine chart. The fraction field of a domain consists of fractions with nonzero denominators. Sections on $D(s)$ are $A_s$, with canonical localization restrictions. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions), [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)

[F6] Let $A$ be a commutative ring and $S\subseteq A$ a multiplicative subset. In $S^{-1}A$, the fractions $a/s$ and $b/t$ are equal exactly when $v(at-bs)=0$ for some $v\in S$. Addition and multiplication are given by $a/s+b/t=(at+bs)/(st)$ and $(a/s)(b/t)=ab/(st)$, and the localization map sends $a$ to $a/1$. [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)

[F7] For a nonzero commutative ring $R$, its Krull dimension is the supremum of the lengths $n$ of strict chains $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$ of prime ideals. [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

### Proof

**Goal:** Establish the statement under its stated hypotheses.

**Given:** AC and the integral finite-type scheme $T$ of chain dimension one over the field $k$.

1.1 Choose a nonempty finite-type affine open $U=\operatorname{Spec}A$, which exists by F1. Its ring is a nonzero domain. The point $(0)$ is dense in $U$ by F2. Every nonempty open of an irreducible space is dense, because two disjoint nonempty opens would express that space as the union of two proper closed subsets. Thus $U$ is dense in $T$, and the closure in $T$ of its zero prime is all of $T$. It is therefore a generic point $\eta$, meaning $\overline{\{\eta\}}=T$. Apply F2 to obtain uniqueness, Noetherianity of the space, and closedness of all other points. Every nonempty open contains $\eta$, since otherwise its proper closed complement would contain the closure of $\eta$. On each nonempty affine open, its zero prime is likewise generic, hence represents $\eta$. The generic point is not closed: otherwise $T$ would be a singleton of chain dimension zero. Now fix any closed point $x$ and choose a finite-type affine neighbourhood $U=\operatorname{Spec}A$ by F1. Since $x\ne\eta$, its prime $\mathfrak p=\mathfrak p_x$ is nonzero. It is maximal because $x$ is closed in $U$. Every nonzero prime of $A$ similarly represents a point different from $\eta$, so it is maximal. [F1, F2, given]

2.1 The only ideals of $k$ are $(0)$ and $k$, so F4 makes $k$ Noetherian. Hence the finite-type algebra $A$ and its localization $R=A_{\mathfrak p}$ are Noetherian, and every ideal of $R$ is finitely generated. By F3 this localization is the stalk at $x$. Its primes correspond to primes of $A$ contained in $\mathfrak p$. By step 1.1 those primes are exactly $(0)$ and $\mathfrak p$: any nonzero prime below $\mathfrak p$ is maximal and equals $\mathfrak p$. [F3, F4, step 1.1]

3.1 Identify $K=\mathcal O_{T,\eta}$ with $\operatorname{Frac}A$ by F5. Sending $a/s\in A_{\mathfrak p}$ to the same fraction in $K$ is well defined and injective: equality in the localization means $v(at-bs)=0$ for some $v\notin\mathfrak p$, and the domain property gives $at=bs$; the converse is immediate. Thus $R$ is a domain. If $a\notin\mathfrak p$, then $s/a$ is its inverse; if $a\in\mathfrak p$, then $a/s$ belongs to the proper prime $\mathfrak pR$ and cannot be a unit. In particular every element outside $\mathfrak pR$ is a unit, so every proper ideal lies in $\mathfrak pR$ and this is the unique maximal ideal. Its quotient is the residue field by F3. Since $\mathfrak p\ne0$, the injection makes $\mathfrak pR\ne0$; the prime chain $(0)\subsetneq\mathfrak pR$ therefore has length one and no longer prime chain exists. Hence $\dim R=1$ by F7. The fraction equivalence and arithmetic used here are those of F6. [F3, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 Every element of $K=\operatorname{Frac}A$ is a quotient of elements of $A\subset R$, and every quotient of elements of $R$ with nonzero denominator defines an element of $K$. These inverse fraction maps identify $\operatorname{Frac}R$ with $K$. A germ at $x$ is represented on a principal affine neighbourhood by a fraction with denominator outside $\mathfrak p$; F3 and F5 send its restriction to $\eta$ to that same fraction. The embedding is therefore canonical and independent of the affine neighbourhood. The function-field supplier F5 applies on every nonempty affine chart, and the preceding argument applies at every closed point using a finite-type affine neighbourhood from F1. AC is used only through the suppliers in F2 and F4. [F1, F2, F3, F4, F5, F6, step 2.1, step 3.1, algebra] ∎


## Reduced induced closed subscheme construction

[Open item](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input) · level 0


### Statement
Let $X$ be a scheme and $T\subseteq |X|$ a closed subset. There is a unique closed subscheme $Z\hookrightarrow X$ supported on $T$ whose local rings have no nonzero nilpotent elements. This is the reduced induced scheme structure on $T$.

### Statement references
[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

### External input
Import the existence and uniqueness assertion of Stacks Lemma 26.12.4, with the terminology of Definition 26.12.5. The hypotheses are exactly a scheme and a closed subset. The displayed construction proof was read; its cited foundations were not re-proved here. The residue-field argument needed by the Nisnevich definition is supplied locally there.


## Imported Hom computation into a K-injective complex

[Open item](item-lem-adjudicate-94864d118f52-kinjective-hom-input) · level 0


### Statement
Let $\mathcal A$ be an abelian category, with the standing size bounds for its derived localization. Use cochain complexes. Write $K(\mathcal A)$ for their homotopy category and $D(\mathcal A)$ for its localization at quasi-isomorphisms. Here $H^n(N)=\ker d_N^n/\operatorname{im}d_N^{n-1}$; a complex is acyclic when all these objects vanish, and a quasi-isomorphism induces isomorphisms on all of them. A cochain homotopy has $f-g=dh+hd$, with $h^n:N^n\to I^{n-1}$; this is the chain convention under $N_n=N^{-n}$.

Suppose $I$ is K-injective, meaning $\operatorname{Hom}_{K(\mathcal A)}(M,I)=0$ for every acyclic $M$. Then the canonical map $\operatorname{Hom}_{K(\mathcal A)}(N,I)\to\operatorname{Hom}_{D(\mathcal A)}(N,I)$ is bijective for every complex $N$. For every quasi-isomorphism $s:M\to N$, precomposition gives a bijection $\operatorname{Hom}_{K(\mathcal A)}(N,I)\to\operatorname{Hom}_{K(\mathcal A)}(M,I)$. No boundedness hypothesis is imposed.

### Statement references
[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy)

[math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

### External input
These two bijections are imported from [Stacks, Lemma 13.31.2](https://stacks.math.columbia.edu/tag/070I), conditions (1), (2) and (3). Its proof is cited, rather than reproduced here. This input supplies no K-injective resolution-existence assertion.


## Covering sieves admit common refinements

[Open item](item-lem-author-cf6ede58b450-cover-intersections) · level 1


### Statement
On a small site, the intersection of two covering sieves on the same object is covering. Every sieve containing a covering sieve is covering.

### Facts & Assumptions
[F1] The topology axioms and pullback of a sieve are as in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

### Proof
**Given:** Covering sieves R and S on X, and a sieve T containing R.

**Goal:** Prove that R ∩ S and T cover X.

1.1 For each f in R, the pullback f*S covers dom f by stability. Since R is a sieve, f*(R ∩ S) = f*S. Transitivity applied to R shows that R ∩ S covers X. [F1, given]

2.1 For every f in R, f*T is maximal and hence covering. Transitivity applied to R shows that T covers X. Thus both assertions hold. [F1, given] ∎


## Localization of a presented divisor class group

[Open item](item-lem-author-4057f3195e4f-divisor-class-localization) · level 1


### Statement
Let $S$ be a set, $B\subseteq S$, $K$ an abelian group, and $d:K\to\mathbb Z^{(S)}$ a homomorphism. Let $r$ be restriction to $S\setminus B$ and put $d'=r\circ d$. Then the natural sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(d')\to0$ is exact. Here $\operatorname{coker}(d)$ denotes $\mathbb Z^{(S)}/d(K)$, and the first map extends by zero and passes to the quotient.

### Facts & Assumptions

[F1] For any set $T$, $\mathbb Z^{(T)}$ is the abelian group of finitely supported functions $T\to\mathbb Z$ with pointwise addition. Extension by zero $i:\mathbb Z^{(B)}\to\mathbb Z^{(S)}$ and restriction $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ are homomorphisms, $r$ is surjective, and $\ker r=\operatorname{im}i$ ([lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)).

[F2] A surjective homomorphism $r:A\to D$ of abelian groups induces a surjection $A/P\to D/r(P)$ with kernel $(\ker r+P)/P$ for every subgroup $P$ ([lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)). Its construction supplies these quotient groups and the well-defined homomorphism $a+P\mapsto r(a)+r(P)$. Here $\ker r+P=\{h+p:h\in\ker r,\ p\in P\}$, and its quotient by $P$ is viewed as the subgroup of $A/P$ represented by these elements.

[F3] We use abelian groups in additive notation ([math:def-group](https://alphabetamath.cc/item/def-group), Definition, axioms G1--G3 and commutativity). A group homomorphism is an additive map; composites of group homomorphisms are homomorphisms ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), Definition, group clause H1 and composition paragraph).

[F4] A subgroup contains the identity and is closed under addition and additive inverses ([math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), Definition, S1--S3). The image of any group homomorphism is a subgroup of its target ([math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal), Statement, image assertion).

[F5] Quotients use cosets with induced addition: $(a+N)+(b+N)=(a+b)+N$ ([math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group), Definition, in additive notation). In the abelian-group situation of [F2], that result supplies the well-defined quotient groups and their operations.

[F6] For an additive homomorphism $u:G\to H$, $\ker u=\{g\in G:u(g)=0_H\}$ and $\operatorname{im}u=\{u(g):g\in G\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism), Definition). Surjectivity means that every target element has a preimage ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), Definition).

**Given:** The data in the statement, with the finite-support groups and maps of [F1]. Write $A=\mathbb Z^{(S)}$, $D=\mathbb Z^{(S\setminus B)}$, $P=d(K)=\{d(k):k\in K\}$ and $P'=d'(K)$. Thus $\operatorname{coker}(d)=A/P$ and $\operatorname{coker}(d')=D/P'$.

For a subgroup $N$ of an additive group $G$, write $g+N=\{g+n:n\in N\}$. The quotient map $q:A\to A/P$ sends $a$ to $a+P$. The arrows in the stated sequence are $\alpha=q\circ i$, $\beta(a+P)=r(a)+P'$, and the unique map to $0$, where $0$ is the group with one element. Exactness here means $\operatorname{im}\alpha=\ker\beta$ and $\beta$ is surjective.

**Goal:** Establish that these quotient groups and arrows are well-defined and prove the stated exactness.

### Proof

1.1 By [F1] and [F3], $d'=r\circ d$ is a homomorphism, and [F4] gives $P\le A$. Also $r(P)=\{r(d(k)):k\in K\}=P'$. Apply [F2] with these $A,D,P$ and $r$: it supplies the quotient groups $A/P$ and $D/P'$, and the well-defined surjective homomorphism $\beta:A/P\to D/P'$ with kernel $(\ker r+P)/P$. This is precisely the claimed map of cokernels. The quotient operation in [F5] gives $q(a+b)=(a+b)+P=(a+P)+(b+P)$, so $q$ is a homomorphism. Hence $\alpha=q\circ i$ is a homomorphism by [F1] and [F3]; its formula is extension by zero followed by passage to the quotient. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 By [F1] and the kernel description in step 1.1, every element of $\ker\beta$ has a representative $h+p$ with $h=i(f)$ for some $f\in\mathbb Z^{(B)}$ and $p\in P$. Since $P$ is a subgroup, $p+P=P$; thus $(h+p)+P=h+P=\alpha(f)$. Conversely, $\alpha(f)$ is represented by $i(f)+0\in\ker r+P$, so it lies in $\ker\beta$. Consequently $\operatorname{im}\alpha=\ker\beta$. Together with the surjectivity from step 1.1 this proves exactness, including at $D/P'$ since the terminal map has kernel all of that group. This terminal map is a homomorphism because its target has only one element. [F1, F2, F4, F5, F6, given, step 1.1, algebra] ∎


## External input for simplicial Bloch cycle groups

[Open item](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input) · level 1


### Statement

Let $k$ be a field and $X$ a separated equidimensional smooth scheme of finite type over $k$. Equidimensional means that all irreducible components have the same dimension. Dimensions are chain dimensions of the underlying spaces; for an integral closed subscheme $V$ of a nonempty pure-dimensional finite-type scheme $Y$, codimension means $\dim Y-\dim V$.

For $n\geq0$, put $A_n=k[t_0,\ldots,t_n]/(\sum_{a=0}^n t_a-1)$ and $\Delta^n=\operatorname{Spec}A_n$. Products are over $\operatorname{Spec}k$. For a proper subset $I\subsetneq\{0,\ldots,n\}$, the coordinate face $F_I\subseteq\Delta^n$ is the closed subscheme defined by $t_i=0$ for $i\in I$, identified with $\Delta^{n-|I|}$ by the remaining coordinates in increasing order. Imposing all coordinates gives the empty scheme.

For an order-preserving map $\theta:[m]\to[n]$, where $[a]=\{0<\cdots<a\}$, the cosimplicial map $\Delta(\theta):\Delta^m\to\Delta^n$ is induced by the $k$-algebra homomorphism
$$A_n\longrightarrow A_m,\qquad t_j\longmapsto\sum_{\{a:\theta(a)=j\}}u_a,$$
where $u_0,\ldots,u_m$ are the coordinates of $A_m$ and an empty sum is zero. Thus the coface $\delta_i^n:\Delta^{n-1}\to\Delta^n$ inserts zero in position $i$, while the codegeneracy $\sigma_i^n:\Delta^{n+1}\to\Delta^n$ adds the adjacent coordinates in positions $i,i+1$. These substitutions preserve the sum-one relation.

For $r,n\geq0$, let $z^r(X,n)$ be the free abelian group on integral closed subschemes $W\subseteq X\times_k\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: every irreducible component of $W\cap(X\times_k F_I)$ has codimension $r$ in $X\times_k F_I$; an empty intersection is allowed. These are groups of finite cycles, before quotienting by rational equivalence. They form a simplicial abelian group, with face maps $d_i^n=(1_X\times\delta_i^n)^*$ given by intersection pullback with the local Tor multiplicities of the cited Appendix 17A, and degeneracy maps $s_i^n=(1_X\times\sigma_i^n)^*$ given by flat pullback. In particular, for $n\geq2$ and $0\leq i<j\leq n$,
$$d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$$
as equalities of cycles. For $X=\varnothing$ all these groups and maps are zero.

### Statement references

[lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)

[math:thm-quotient-ring-universal-property](https://alphabetamath.cc/item/thm-quotient-ring-universal-property)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

### External input

The simplicial cycle construction, including admissibility of its structure maps and the cycle-level identities, is imported from Mazza–Voevodsky–Weibel, Definition 17.1, in the smooth separated equidimensional finite-type case. The simplex is specified just before Definition 2.14; the inline coordinate formula makes both cofaces and codegeneracies explicit. The coordinate-face geometry is supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry), and the polynomial and quotient universal properties together with the affine scheme–ring correspondence supply the meaning of the displayed coordinate homomorphisms.

The intersection operation, including the meaning, well-definedness and compatibility of its local Tor multiplicities, is imported from Definition 17A.1, Definition 17A.3 and Example 17A.4. Example 17A.4 also identifies the flat pullback convention. These are precise parts of the external input; no local proof of general intersection theory or of the simplicial cycle theorem is claimed. The source's separatedness convention is on printed p. 3. See [the cited primary text](https://sites.math.rutgers.edu/~weibel/MVWnotes/prova-hyperlink.pdf); the source record gives exact locators, hypotheses and reading limits.


## Square-cube roots in a normal domain

[Open item](item-lem-author-30ec96de6e59-normal-domain-square-cube) · level 1


### Statement
Let $A$ be an integrally closed domain. For every $x,y\in A$ with $x^3=y^2$ there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. An integrally closed domain is a domain containing every element of its fraction field that satisfies a monic polynomial over it.

### Statement references

[math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)

### Facts & Assumptions

**Given:** An integrally closed domain $A$ and $x,y\in A$ satisfying $x^3=y^2$.

**Goal:** Produce the unique simultaneous square and cube root.

[F1] Equal squares and cubes in a reduced ring determine an element uniquely; reduced means that the only element with a zero positive power is zero ([lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)).

[F2] A domain is a commutative ring with $1\ne0$ and no zero divisors: $uv=0$ implies $u=0$ or $v=0$ ([math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)).

[F3] The fraction field $K=\operatorname{Frac}(A)$ consists of fractions $u/v$ with $u,v\in A$ and $v\ne0$ ([math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions)). It is a field, and $u\mapsto u/1$ is an injective unital ring homomorphism; we identify $A$ with its image in $K$ ([math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)).

[A1] The integral-closedness assumption is used in its inline sense: if $z\in K$ satisfies $z^n+c_{n-1}z^{n-1}+\cdots+c_0=0$ for an integer $n\ge1$ and coefficients $c_i\in A$, then $z\in A$. Such an equation is monic because the leading coefficient is $1$.

### Proof

1.1 If $x=0$, then $y^2=0$, so [F2] gives $y=0$, and $a=0$ works. If $x\ne0$, [F3] lets us put $a=y/x$ in $K$. Field arithmetic and $y^2=x^3$ give $a^2=y^2/x^2=x$ and $a^3=a\,a^2=(y/x)x=y$. [given, F2, F3, algebra]

2.1 In the second case $a$ satisfies the monic equation $T^2-x=0$, so [A1] puts $a$ in $A$; the embedding in [F3] makes the equations from step 1.1 equations in $A$. A domain is reduced: if $b\ne0$, induction using [F2] shows $b^n\ne0$ for every integer $n\ge1$. Hence [F1] gives uniqueness in both cases. [given, A1, F1, F2, F3, step 1.1] ∎


## Seminormalization and the finite-type interface

[Open item](item-thm-author-30ec96de6e59-seminormalization-input) · level 1


### Statement

For a scheme $X$, the category of universal homeomorphisms $Y\to X$ inducing isomorphisms on residue fields has an initial object $\pi_X:X^{\mathrm{sn}}\to X$, with seminormal source; its construction is functorial in $X$. A scheme is seminormal precisely when every such morphism with reduced source is an isomorphism. If $X$ is locally of finite type over a field, then $\pi_X$ factors uniquely through a finite morphism $X^{\mathrm{sn}}\to X_{\mathrm{red}}$, and a normal $X$ is seminormal.

Here a commutative ring $A$ is seminormal when, for every $x,y\in A$ satisfying $x^3=y^2$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal when every point has an affine open neighbourhood with seminormal coordinate ring. A scheme is reduced when its affine coordinate rings have no nonzero nilpotents. In the normality clause, normal means that every local ring is an integrally closed domain.

A morphism $f:Y\to X$ is a universal homeomorphism when, for every morphism $T\to X$, the projection $Y\times_X T\to T$ is a homeomorphism on underlying topological spaces. The residue-field condition requires $\kappa(f(y))\to\kappa(y)$ to be an isomorphism for every $y\in Y$. The category above has these morphisms to $X$ as objects and commuting morphisms over $X$ as arrows; initial means there is exactly one arrow from $\pi_X$ to each object. Functoriality means that every $h:X'\to X$ induces the unique compatible $h^{\mathrm{sn}}:(X')^{\mathrm{sn}}\to X^{\mathrm{sn}}$, with identity maps and compositions respected. The reduction $X_{\mathrm{red}}$ has the same underlying space as $X$ and structure sheaf obtained by quotienting out the locally nilpotent sections.

### Statement references

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-initial-terminal-and-zero-object](https://alphabetamath.cc/item/def-initial-terminal-and-zero-object)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

[math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

### Facts & Assumptions

**Given:** A scheme $X$ with the conventions in the Statement; for the finite-type and normality clauses, assume that $X$ is locally of finite type over a field.

[F1] For arbitrary $X$, the initial object, its seminormal source and the compatible functorial maps are imported from [Stacks, Lemma 29.48.7(3)–(4)](https://stacks.math.columbia.edu/tag/0EUS).

[F2] The test using all reduced sources is imported from [Stacks, Lemma 29.48.9](https://stacks.math.columbia.edu/tag/0H3G).

[F3] The relative construction and comparison in [Stacks, Section 29.56](https://stacks.math.columbia.edu/tag/0H3I) place the inverse image of an affine $U=\operatorname{Spec}A\subseteq X$ under $\pi_X$ in the form $\operatorname{Spec}C$, where $C$ is an $A$-subalgebra of the normalization algebra $B$ over $U$. The comparison requires finitely many irreducible components on every quasi-compact open; this requirement holds for our locally finite type $X$ by the first paragraph of [Lemma 33.27.1](https://stacks.math.columbia.edu/tag/0BXR). The implication after Definition 29.56.9 also gives normality implies seminormality in this scope. Here the normalization algebra is the affine coordinate algebra of the normalization supplied in [F4]; its existence and the stated intermediate-algebra description are imported constructions.

[F4] For $X$ locally of finite type over a field, [Stacks, Lemma 33.27.1](https://stacks.math.columbia.edu/tag/0BXR) supplies a finite normalization and proves $X$ locally noetherian. Thus, for every affine $U=\operatorname{Spec}A\subseteq X$, its normalization inverse image is $\operatorname{Spec}B$ with $B$ finite over $A$ by [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes), and $A$ is noetherian by [Stacks, Lemma 28.5.2](https://stacks.math.columbia.edu/tag/01OU). Locally noetherian has the meaning in [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme); noetherian means every ideal is finitely generated, and finite algebra means finite as a module, as in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras).

[F5] The square-cube definition and its validity on every affine open of a seminormal scheme are imported from [Stacks, Definitions 29.48.1 and 29.48.3 and Lemma 29.48.4](https://stacks.math.columbia.edu/tag/0EUK).

[F6] The square-cube condition implies reducedness by [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced). Nilpotence and reducedness use [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring). By [math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property), a morphism from a reduced scheme factors uniquely through the target's reduction; that reduction is the one in [math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme).

[F7] If $A$ is noetherian and $B$ is a finite $A$-algebra, every $A$-subalgebra $C\subseteq B$ is finite over $A$, by [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module). An $A$-subalgebra contains the image of $A$; injectivity of $A\to B$ is not required.

[F8] We import the affine-cover criterion for a finite morphism from [Stacks, Lemma 29.45.3](https://stacks.math.columbia.edu/tag/01WG): an affine open cover of the target with affine inverse images and module-finite coordinate algebras suffices.

### Proof

**Goal:** Establish the statement under its stated hypotheses.

1.1 The construction and functoriality follow from [F1], the reduced-source characterization from [F2], and the normality implication in the specified scope from [F3]. The affine coordinate rings of $X^{\mathrm{sn}}$ satisfy the square-cube condition by [F1] and [F5], hence are reduced by [F6]. Therefore [F6] gives a unique factorization $\rho:X^{\mathrm{sn}}\to X_{\mathrm{red}}$ of $\pi_X$. The reduction has the same underlying points by definition; quotienting local rings by nilpotents leaves their residue fields unchanged, since nilpotents vanish in a field. This also explains the reduction convention used in the statement. [given, F1, F2, F3, F5, F6, algebra]

2.1 Assume $X$ locally of finite type over a field. For every affine $U=\operatorname{Spec}A\subseteq X$, [F3] and [F4] give $\pi_X^{-1}(U)=\operatorname{Spec}C$ with $C$ an $A$-subalgebra of a finite $A$-algebra $B$ and $A$ noetherian. Apply [F7] to conclude that $C$ is a finite $A$-module. Since $C$ is reduced by step 1.1, the image of every element of $\sqrt{(0)}\subseteq A$ in $C$ is zero. The scalar action therefore factors through $A_{\mathrm{red}}=A/\sqrt{(0)}$, and the same finite list of module generators generates $C$ over $A_{\mathrm{red}}$: reduce the coefficients of each $A$-linear expression modulo $\sqrt{(0)}$. By the reduction definition and step 1.1, the inverse image under $\rho$ of $U_{\mathrm{red}}=\operatorname{Spec}A_{\mathrm{red}}$ is precisely $\operatorname{Spec}C$. The opens $U_{\mathrm{red}}$ cover $X_{\mathrm{red}}$, so [F8] proves $\rho$ finite. Empty affine charts have zero coordinate modules and satisfy the same argument. All stated claims follow. [given, F3, F4, F6, F7, F8, step 1.1, algebra] ∎

### External input

The construction, characterization, affine relative comparison, normality implication, normalization finiteness, affine-locality statements and target-local finite-morphism criterion in [F1]–[F5] and [F8] are the precise imported premises recorded in sources.references. The cited Stacks proofs omit or refer away parts of the seminormal construction and the finite-morphism criterion; no reconstruction of those parts is claimed. The proof here is a local composition of these inputs with the two declared local lemmas and the published universal property of reduction. In particular the finiteness inference in step 2.1 is supplied locally, so this whole theorem is not marked external_input.


## Length orders on an integral curve

[Open item](item-lem-author-1437578267d2-length-orders) · level 1


### Statement
Assume AC. Let $T$ be an integral finite-type curve over a field, $K=k(T)$, and $R=\mathcal O_{T,x}$ for a closed point $x$. For nonzero $a,b\in R$ set $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$. These lengths are finite, the integer is independent of the fraction, and it is additive under multiplication. It vanishes for all but finitely many closed $x$ for each $f\in K^\times$. Thus $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism to the free zero-cycle group. A nonzero function regular near $x$ has order $\ell_R(R/fR)$; a unit has order zero. In a discrete valuation ring (DVR), meaning a local domain whose nonzero elements are units times nonnegative powers of one uniformizer, this order is its normalized valuation. No normality is assumed.

### Facts & Assumptions
**Given:** AC and $T,K,x,R$ as stated.

**Goal:** Establish the length formula and divisor homomorphism.

[F1] Module length counts the simple factors of a composition series, is independent of the chosen series, and is additive in short exact sequences; the middle module has finite length if and only if both end modules do. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:cor-length-is-additive-in-short-exact-sequences](https://alphabetamath.cc/item/cor-length-is-additive-in-short-exact-sequences)

[F2] A curve here has chain dimension one. Integral means nonempty, reduced and irreducible; finite type means locally of finite type and quasi-compact. For each closed $x$, $R=\mathcal O_{T,x}$ is a Noetherian local domain with a nonzero maximal ideal $\mathfrak m$, residue field $\kappa(x)=R/\mathfrak m$, and only the primes $(0)$ and $\mathfrak m$. All its ideals are finitely generated. Restriction embeds $R$ into $K$ and identifies $\operatorname{Frac}R=K$; every closed point has an affine neighbourhood $U=\operatorname{Spec}A$ with $A$ a finite-type algebra over the base field. On any such finite-type affine chart at a closed point, $a/s$ is a unit exactly when its numerator is outside the prime of that point. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings)

[F3] On every nonempty affine open $U=\operatorname{Spec}A\subset T$, $K=k(T)=\mathcal O_{T,\eta}$ is canonically $\operatorname{Frac}A$, and $\eta$ corresponds to $(0)$. The sets $V(I)$ are Zariski closed in $\operatorname{Spec}A$, so the principal distinguished subset $D(c)=\{\mathfrak p:c\notin\mathfrak p\}$, the complement of $V((c))$, is open in $U$. Every proper closed subset of $T$ is a finite set of closed points. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings), [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum), [math:lem-zariski-closed-set-axioms](https://alphabetamath.cc/item/lem-zariski-closed-set-axioms), [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[F4] For an ideal $I$ of a commutative ring, $\sqrt I=\{r:r^n\in I\text{ for some }n\ge1\}$ is the intersection of the primes containing $I$. AC is assumed and used through this radical theorem and through the curve and local-ring suppliers; the remaining choices below are finite. [math:thm-radical-as-intersection-of-primes](https://alphabetamath.cc/item/thm-radical-as-intersection-of-primes), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite), [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings)

[F5] The zero-cycle group is $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$, with $[x]$ the reduced closed-point cycle. Its elements are finite formal integer sums. [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[F6] In the DVR clause, a uniformizer $\pi$ is a nonzero nonunit generating the maximal ideal, and every nonzero element is a unit times a nonnegative power of $\pi$. The normalized valuation assigns $r-s$ to $u\pi^r/(v\pi^s)$ for units $u,v$. A valuation is multiplicative in additive notation and satisfies the inequality for sums; it is discrete when its values on nonzero elements are all of $\mathbb Z$. [math:def-valuation-on-a-field](https://alphabetamath.cc/item/def-valuation-on-a-field), [math:def-discrete-valuation](https://alphabetamath.cc/item/def-discrete-valuation)

[F7] Quotients such as $R/aR$ are quotient modules with their induced scalar action. Short exact means that the first map is injective, the last is surjective, and the image of the first equals the kernel of the last. Sums and products of ideals are ideals, with products consisting of finite sums of products; write $\mathfrak m^0=R$ and $\mathfrak m^{j+1}=\mathfrak m^j\mathfrak m$. An ideal generated by a finite list consists of its finite linear combinations. A vector space over a field is an abelian group with a scalar action satisfying both distributive laws, associativity of the scalar action and the identity-scalar law. A finite spanning list in a vector space contains a basis. [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules), [math:def-sum-and-product-of-ideals](https://alphabetamath.cc/item/def-sum-and-product-of-ideals), [math:thm-sum-and-product-of-ideals-are-ideals](https://alphabetamath.cc/item/thm-sum-and-product-of-ideals-are-ideals), [math:thm-generated-ideal-description-in-a-commutative-ring](https://alphabetamath.cc/item/thm-generated-ideal-description-in-a-commutative-ring), [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space), [math:lem-hh-finite-spanning-list-contains-a-basis](https://alphabetamath.cc/item/lem-hh-finite-spanning-list-contains-a-basis)

### Proof
1.1 Let $0\ne a\in R$ be a nonunit. By F2 the only prime containing $(a)$ is $\mathfrak m$, so F4 gives $\sqrt{(a)}=\mathfrak m$. Write $\mathfrak m=(u_1,\ldots,u_r)$ and choose integers $e_i\ge1$ with $u_i^{e_i}\in(a)$. For $N=1+\sum_i(e_i-1)$, each degree-$N$ monomial in the $u_i$ contains some $u_i^{e_i}$. Expanding products using F7 therefore gives $\mathfrak m^N\subseteq(a)$. The filtration of $R/aR$ by $M_j=(\mathfrak m^j+(a))/(a)$ for $0\le j\le N$ ends in zero. Each $M_j/M_{j+1}$ is annihilated by $\mathfrak m$ and generated by the finitely many degree-$j$ monomials in the $u_i$. Put $Q_j=M_j/M_{j+1}$ and define $(r+\mathfrak m)q=rq$ for $q\in Q_j$. If $r-r'\in\mathfrak m$, then $(r-r')q=0$, so this action is independent of the scalar representative; the quotient-module action already makes it independent of the representative of $q$. The additive group is abelian, and both distributive laws, associativity of scalar multiplication and the identity-scalar law are inherited from the $R$-module laws. Thus $Q_j$ is a vector space over the residue field $\kappa(x)$ in the sense of F7. Reducing the coefficients of its finite $R$-spanning list modulo $\mathfrak m$ shows that the same list spans over $\kappa(x)$; F7 therefore supplies a finite basis. The flag of spans of its successive basis vectors is a composition series over $R$: its one-dimensional factors are simple because the scalar map $R\to\kappa(x)$ is surjective. Applying F1 successively to $0\to M_{j+1}\to M_j\to M_j/M_{j+1}\to0$ proves finite length. If $a$ is a unit, the quotient is zero and has length zero. [F1, F2, F4, F7, algebra]

2.1 For nonzero $a,c\in R$, multiplication by $c$ and quotient give $0\to R/aR\xrightarrow{c}R/acR\to R/cR\to0$. The first map is well defined and injective by cancellation in $R$, and its image $cR/acR$ is the kernel of the surjective quotient map. Thus F1 gives $\ell_R(R/acR)=\ell_R(R/aR)+\ell_R(R/cR)$. By F2 every $f\in K^\times$ is $a/b$ with $a,b\ne0$ in $R$. If $a/b=c/d$, then $ad=bc$, and the product formula gives $\ell_R(R/aR)-\ell_R(R/bR)=\ell_R(R/cR)-\ell_R(R/dR)$. The same formula applied to $ac/bd$ proves additivity under multiplication. [F1, F2, F7, step 1.1, algebra]

3.1 Choose a finite-type affine neighbourhood $U=\operatorname{Spec}A\subset T$ of the fixed closed point $x$ using F2, and write $f=a/b$ in $K=\operatorname{Frac}A$, with $a,b\ne0$. By F3 the subset $D(ab)$ is open in $U$, hence in $T$, and contains the generic point. Its complement in $T$ is consequently a proper closed subset, finite by F3. At each closed point $y$ of $D(ab)$, this same $U$ is a finite-type affine neighbourhood of $y$. Since $ab\notin\mathfrak p_y$, neither $a$ nor $b$ belongs to $\mathfrak p_y$; hence both are units in $\mathcal O_{T,y}$ by F2, so the two quotient lengths are zero. Thus all nonzero orders lie in that finite complement. The sum defines an element of $Z_0(T)$ by F5, and step 2.1 proves that $\operatorname{div}_T$ is a homomorphism. [F2, F3, F5, step 1.1, step 2.1]

4.1 A nonzero function regular near $x$ gives an element of $R$; taking denominator one proves the regular and unit assertions. In the DVR clause of F6, multiplication by $\pi^j$ identifies $(\pi^j)/(\pi^{j+1})$ with $R/(\pi)=R/\mathfrak m$, by domain cancellation. Hence $R/(\pi^n)$ has length $n$, including $n=0$. Units leave principal ideals unchanged, so the length order of $u\pi^r/(v\pi^s)$ is $r-s$. The exponent is unique: equality of unit multiples of different powers, after cancellation, would make a positive power of the nonunit $\pi$ invertible. To check the valuation inequality, write two nonzero fractions as $u\pi^r$ and $v\pi^s$ with integers $r\le s$; their sum is $\pi^r(u+v\pi^{s-r})$, whose parenthesized factor is in $R$. If the sum is nonzero, its exponent is at least $r$; set the value at zero to $\infty$. Multiplicativity follows from step 2.1, and the powers of $\pi$ give all integer values with value one at $\pi$. This proves that the order is the normalized discrete valuation. No step uses normality of $T$. [F1, F2, F6, F7, step 2.1, step 3.1, algebra] ∎


## Frames and their transition units

[Open item](item-lem-author-8e1c0251ef0d-frame-transitions) · level 1


### Statement
Let $\mathcal O$ be a sheaf of commutative unital rings on a site $(\mathcal C,J)$, and let $L$ be a sheaf of $\mathcal O$-modules locally isomorphic to $\mathcal O$. A frame over $U$ is an $\mathcal O|_U$-module isomorphism $e:\mathcal O|_U\to L|_U$ on the slice site $\mathcal C/U$. The frames form a sheaf of sets $P$ and a torsor under $\mathcal O^\times$, acting by multiplication of frames: they have local sections, and any two frames over the same object differ by a unique unit. For a covering family $(f_i:U_i\to U)$ with given frames $e_i$, interpret an overlap as an object $V$ with arrows $a_i:V\to U_i$ and $a_j:V\to U_j$ such that $f_i a_i=f_j a_j$. On each such object the unique transition unit $g_{ij}\in\mathcal O(V)^\times$ is defined by $e_j|_V=g_{ij}e_i|_V$. These units commute with further restriction. On every common object with three such arrows having the same composite to $U$, they satisfy $g_{ij}g_{jk}=g_{ik}$. Thus no existence of double or triple fibre products is assumed.

### Facts & Assumptions

**Given:** $\mathcal O$ and $L$ as stated, with the following explicit conventions.

**Goal:** Establish the frame sheaf, torsor action and transition equation on an arbitrary site.

[F1] Use the site, covering-sieve, presheaf, matching-family and sheaf conventions in Facts [F1]–[F3] of [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf). A covering family means a family of arrows whose generated sieve is covering. Write $h^*$ for restriction along an arrow $h$. The same supplier proves that $G(U)=\mathcal O(U)^\times$, with the inherited restrictions, is a sheaf of abelian groups. Rings and ring maps are unital; the zero ring is allowed. No scheme or additional smallness hypothesis is imposed.

[F2] Modules and linear maps mean unital left modules and module homomorphisms as in [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) and [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel). A sheaf of $\mathcal O$-modules is a sheaf of abelian groups $L$ with an $\mathcal O(V)$-module structure on every $L(V)$ and additive restrictions satisfying $h^*(as)=h^*(a)h^*(s)$. A morphism consists of linear maps on sections commuting with every restriction; an isomorphism has an inverse of the same kind. Composition and identities are componentwise.

[F3] The slice category $\mathcal C/U$ is as in [math:def-comma-slice-and-coslice-categories](https://alphabetamath.cc/item/def-comma-slice-and-coslice-categories): objects are arrows $p:V\to U$, and an arrow from $q:W\to U$ to $p$ is $h:W\to V$ with $ph=q$. Give this slice the topology in which a sieve on $p:V\to U$ is covering precisely when its underlying arrows into $V$ form a covering sieve in $J(V)$. The topology axioms are the same sieve axioms as in [F1], on those domains. For any sheaf $F$ on $\mathcal C$, define $F|_U(p)=F(V)$ with its original restrictions. The sheaf condition on the slice is exactly the original condition on $V$, so this is a sheaf. This defines $\mathcal O|_U$ and $L|_U$ and their module structures. Restricting a frame along $f:V\to U$ means taking its components at arrows $fh$ for $h:W\to V$; no base-change fibre product is used.

[F4] Locally isomorphic here means that for every $U$ there is a covering sieve $R$ on $U$ such that a frame exists on the domain of every arrow in $R$; it asserts existence, not a simultaneous choice of frames. A $G$-torsor here is a sheaf of sets with restriction-compatible $G(U)$-actions, locally having sections in this sense, such that for every pair of sections over $U$ a unique element of $G(U)$ carries the first to the second. Define the action on a frame by $(u\cdot e)_p(a)=e_p(p^*u\,a)$ for $p:V\to U$ and $a\in\mathcal O(V)$. The module and unit laws in [F1] and [F2] make this an invertible, restriction-compatible action.

### Proof

1.1 A module morphism $e:\mathcal O|_U\to L|_U$ is determined by $s=e_{1_U}(1)$: naturality and linearity force $e_p(a)=a\,p^*s$ for every $p:V\to U$. Conversely this formula defines such a morphism for every $s\in L(U)$, by [F2] and [F3]. Thus frames identify with a subset $P(U)$ of the set $L(U)$, and restriction of frames makes $P$ a presheaf. Every automorphism of $\mathcal O|_U$ is multiplication by its value $u$ at $1$; applying the same observation to its inverse gives $uv=vu=1$ for its inverse coefficient $v$. Conversely a unit gives such an automorphism. Composing one frame with the inverse of another therefore gives the unique unit relating them, with the action in [F4]. To check gluing, take a matching family of frames $e_f$ on a covering sieve $R$ on $U$. Their sections $s_f=e_f(1)$ match, so [F1] glues them uniquely to $s\in L(U)$ and hence to the morphism $e$ just constructed. For $p:V\to U$ and $t\in L(V)$, the sieve $p^*R$ covers $V$. For each $h:W\to V$ in it, the unique coefficient $b_h=e_{ph,1_W}^{-1}(h^*t)\in\mathcal O(W)$ is compatible with further restriction, since the frames match. The sheaf condition for $\mathcal O$ glues these coefficients to $b\in\mathcal O(V)$; separation for $L$ gives $e_p(b)=t$. If two coefficients have the same image under $e_p$, their restrictions agree by the local frames, hence they agree by separation for $\mathcal O$. Thus every $e_p$ is bijective. Its inverse is linear and commutes with restrictions, since those properties follow by applying the injective maps $e_p$ to the required equalities. Hence $e$ is a frame, uniquely determined by $s$, and $P$ is a sheaf. This proof also covers an empty covering sieve using the same sheaf uniqueness axioms. Local existence is [F4]; together with the action and unique-unit property this proves the torsor assertion. [F1, F2, F3, F4, construct]

2.1 Fix the given local frames and compatible arrows from a common object $V$ as in the Statement. By step 1.1 their restrictions differ by a unique unit $g_{ij}\in\mathcal O(V)^\times$. Further restriction preserves the defining equality, so uniqueness makes the unit on a further common object exactly the restriction of $g_{ij}$. For three compatible arrows, all three restricted frames are on the same slice over $V$, where $e_k=g_{jk}e_j=g_{jk}g_{ij}e_i$. Commutativity and the unique-unit assertion of step 1.1 give $g_{ij}g_{jk}=g_{ik}$. This proves the transition equation on common test objects without assuming fibre products, as well as its compatibility with restrictions. [F1, F3, F4, step 1.1, algebra] ∎


## Compatible local torsor sections determine an isomorphism

[Open item](item-lem-author-8e1c0251ef0d-cocycle-morphism) · level 1


### Statement
Let $(\mathcal C,J)$ be a Grothendieck site with fibre products and a terminal object $T$, meaning that every object $V$ has exactly one arrow $V\to T$. Let $G$ be a sheaf of abelian groups and let $P,Q$ be $G$-torsors, with the site, sheaf and left-action conventions recorded below. Suppose a covering family $\{U_i\to T\}$ and sections $p_i\in P(U_i)$ and $q_i\in Q(U_i)$ are given. On $U_{ij}=U_i\times_T U_j$, suppose their transition sections agree: $p_j=g_{ij}p_i$ and $q_j=g_{ij}q_i$ for the same $g_{ij}\in G(U_{ij})$, with all sections restricted along the canonical projections.

Then there is a unique equivariant sheaf isomorphism $\phi:P\to Q$ carrying every $p_i$ to $q_i$. Here an equivariant sheaf morphism means functions $\phi_V:P(V)\to Q(V)$ commuting with every restriction and satisfying $\phi_V(hx)=h\phi_V(x)$ for $h\in G(V)$; an isomorphism has an inverse with these properties.

### Statement references

[lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle)

[math:def-pullbacks-and-pushouts](https://alphabetamath.cc/item/def-pullbacks-and-pushouts)

### Facts & Assumptions

**Given:** The site with the stated fibre products and terminal object, the abelian sheaf, the two torsors, the specified covering family and the specified sections with equal transitions. No choice of local sections is asserted.

**Goal:** Construct the unique equivariant sheaf isomorphism taking $p_i$ to $q_i$.

[F1] A torsor is a sheaf of sets with a restriction-compatible left $G$-action, locally nonempty and simply transitive on each nonempty section set. In particular, relative to a specified section $p\in P(W)$, each $x\in P(W)$ has a unique expression $x=gp$ with $g\in G(W)$. The action, restriction laws and transition convention are those of [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle).

[F2] Use the site and sheaf definitions explicitly given in [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle): a sieve is closed under precomposition, and a family is covering when its generated sieve (the arrows factoring through its members) covers. Pullbacks of covering sieves cover. A presheaf $F$ assigns restriction maps to arrows, contravariantly and functorially. The sheaf condition says that, for a covering sieve $R$ on $V$, any family $y_f\in F(\operatorname{dom}f)$ indexed by $f\in R$ with $y_{fk}=y_f|_k$ is the restriction family of exactly one $y\in F(V)$.

[F3] Fibre products and their canonical projections satisfy the universal property in [math:def-pullbacks-and-pushouts](https://alphabetamath.cc/item/def-pullbacks-and-pushouts). Thus two arrows from $W$ to $U_i,U_j$ over $T$ give a unique arrow $W\to U_{ij}$. Likewise, for each $V$, arrows $W\to V$ factoring through $V\times_T U_i\to V$ are exactly those whose composite to $T$ factors through $U_i\to T$; hence this family generates the pullback of the given covering sieve and is covering by [F2].

### Proof

1.1 For each arrow $a:W\to U_i$, define $\phi_{i,a}:P(W)\to Q(W)$ by $\phi_{i,a}(gp_i|_a)=gq_i|_a$. The unique coefficient in [F1] makes this a well-defined bijection; the reverse formula exchanges $p_i$ and $q_i$. The action laws make both maps equivariant, and restriction preserves the unique coefficient, so these local maps commute with every restriction. If $W$ maps to both $U_i$ and $U_j$, use [F3] to restrict $g_{ij}$ to $W$. For $x=rp_i=s p_j$, suppressing restrictions, $p_j=g_{ij}p_i$ gives $r=sg_{ij}$ by simple transitivity. Consequently $rq_i=sg_{ij}q_i=sq_j$. The two local maps therefore agree on every such common test object, and the same argument applies to their inverses. [given, F1, F3, construct]

2.1 Fix $V$ and $x\in P(V)$. By [F3], the family $V\times_T U_i\to V$ generates a covering sieve $R_V$. For $f:W\to V$ in this sieve, use any factorization through a member of this family and apply its local map from step 1.1 to $x|_f$. All factorizations give the same element $y_f\in Q(W)$ by the common-test-object agreement in step 1.1; thus these values are uniquely specified without choosing representatives. Compatibility with further restriction follows from that step as well. The sheaf condition [F2] gives a unique amalgamation $\phi_V(x)\in Q(V)$. Uniqueness of amalgamation shows that these functions commute with restriction and the $G$-action, since both required identities hold on the pulled-back covering sieve by step 1.1. Exchanging $P,Q$ gives morphisms $\psi_V$, and the composites are identities because they are identities on this sieve; hence $\phi$ is an equivariant sheaf isomorphism. Its restriction to each $U_i$ is the local map of step 1.1, so $\phi_{U_i}(p_i)=q_i$. Any equivariant sheaf morphism with these specified values agrees with those local maps by the unique-coefficient formula [F1]; for each test section it therefore agrees with $\phi$ on $R_V$, and sheaf uniqueness makes it equal to $\phi$ globally. [F1, F2, F3, step 1.1, construct] ∎


## Projective-line projection dichotomy and endpoint coordinates

[Open item](item-lem-adjudicate-e2821b68ac29-projective-line-projection) · level 1

### Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ an integral finite-type $k$-scheme, and $W\subset X\times_k\mathbf A^1$ an integral closed subscheme. Give its closure $T\subset X\times_k\mathbf P^1$ and the image $Y\subset X$ of $T$ their reduced induced closed structures. Then $Y$ is closed and integral and $T\to Y$ is proper and dominant. With $K=k(Y)$, the generic fiber $T\times_Y\operatorname{Spec}K$ is either $\mathbf P^1_K$ or $\operatorname{Spec}L$ for a finite field extension $L/K$. Consequently $\dim Y=\dim W-1$ or $\dim Y=\dim W$, respectively. In the first case $W=Y\times_k\mathbf A^1$ as closed subschemes; in the second case $T\to Y$ is generically finite. No separatedness over $k$ is assumed.

Also the coordinate $t=u/(u-1)$ gives a $k$-isomorphism $\mathbf P^1_u\setminus\{1\}\cong\mathbf A^1_t$, carrying $u=0,\infty$ to $t=0,1$ as scheme-theoretic fibers.

### Facts & Assumptions

**Given:** The Axiom of Choice and $k,X,W$ as stated. Products are over $k$. An integral scheme is nonempty and reduced with irreducible underlying space; $k(Y)$ is its generic stalk. A generic fiber is base change to this field. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)

**Goal:** Supply the proper projection, its generic-fiber alternatives and the endpoint coordinate change.

[F1] The two reciprocal affine charts construct the projective line and agree with relative projective space in dimension one. These charts commute with base change. Its projection over any scheme is proper under AC; closed immersions are proper, and properness survives composition and base change. Closed immersions have affine quotient charts and survive base change. [math:ex-projective-line-by-gluing-affines](https://alphabetamath.cc/item/ex-projective-line-by-gluing-affines), [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts), [math:thm-projective-space-proper-over-base](https://alphabetamath.cc/item/thm-projective-space-proper-over-base), [math:lem-closed-immersion-proper](https://alphabetamath.cc/item/lem-closed-immersion-proper), [math:lem-proper-stable-composition](https://alphabetamath.cc/item/lem-proper-stable-composition), [math:lem-proper-stable-base-change](https://alphabetamath.cc/item/lem-proper-stable-base-change), [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[F2] Reduced induced closed structures exist uniquely. The reduced-source factorization criterion in External input permits factorization through a closed subscheme containing the set-theoretic image. [thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input)

[F3] Affine fiber products use tensor products. In particular, for an injective map of domains $A\to B$ and $K=\operatorname{Frac}A$, $B\otimes_A K=(A\setminus\{0\})^{-1}B$ is a domain with fraction field $\operatorname{Frac}B$: the isomorphism sends $b\otimes(a/s)$ to $ab/s$, with inverse $b/s\mapsto b\otimes(1/s)$. Localization's universal property verifies the inverse maps. The prime correspondence identifies the retained generic point. Polynomial rings over domains are domains. [math:thm-affine-fibre-product-tensor-ring](https://alphabetamath.cc/item/thm-affine-fibre-product-tensor-ring), [math:thm-universal-property-of-localisation](https://alphabetamath.cc/item/thm-universal-property-of-localisation), [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection), [math:cor-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-polynomial-ring-over-a-domain-is-a-domain)

[F4] Over every field, the projective line is an integral one-dimensional scheme, and each closed point has finite residue-field degree, with its affine-chart polynomial description. Integral finite-type schemes have dimension equal to function-field transcendence degree, nonempty opens preserve dimension, and proper dominant maps satisfy the dimension formula. Integral closed subschemes satisfy the dimension-difference codimension formula. [math:lem-projective-line-curve-and-divisor-basics](https://alphabetamath.cc/item/lem-projective-line-curve-and-divisor-basics), [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[F5] Ring maps give affine scheme maps, and compatible maps on open covers glue uniquely. These interfaces are used to verify the fractional coordinate map on its charts. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence), [math:lem-morphism-schemes-local-on-source-target](https://alphabetamath.cc/item/lem-morphism-schemes-local-on-source-target)

### External input
Use the reduced-source factorization criterion of Stacks Lemma 26.12.7: for a reduced scheme $S$, a morphism $S\to V$ factors through a closed subscheme $Z\subset V$ whenever its image lies in $|Z|$. This applies to $T$ and $W$, which are integral and hence reduced. The source statement and displayed proof were read; the cited nilradical and closed-immersion foundations were not reconstructed. Only this premise is imported here; the projection dichotomy and coordinate computation below are local deductions.

### Proof

1.1 The closure of the irreducible set $|W|$ is irreducible; [F2] makes its reduced closed structure $T$ integral, and its restriction to $X\times\mathbf A^1$ is $W$ by uniqueness. By [F1], $T\to X$ is the composite of a proper closed immersion and the proper projective-line projection, hence proper and closed. Its image is a nonempty irreducible closed set, so its reduced structure $Y$ is integral. The factorization criterion of [F2] gives $T\to Y$, and then $T\times_XY\cong T$ because $Y\to X$ is a closed immersion and $T\to X$ factors through it. Thus $T\to Y$ is a base change of $T\to X$, hence proper. It is surjective, in particular dominant. The same criterion factors $W$ as a closed subscheme of $Y\times\mathbf A^1$. [given, F1, F2]

2.1 Put $K=k(Y)$. On nonempty affine charts over a nonempty affine open of $Y$, dominance gives injective maps of domains, so [F3] shows that the generic fiber is reduced. Every such chart contains the generic point of $T$, which survives localization; hence their generic-fiber charts share this point and their union is irreducible. Thus the generic fiber is nonempty and integral, has function field $k(T)=k(W)$ over $K$, and is closed in $\mathbf P^1_K$ by base change of its closed immersion. By [F4], a proper irreducible closed subset of the integral one-dimensional $\mathbf P^1_K$ is a closed point. Its reduced closed structure is $\operatorname{Spec}\kappa(p)$: on an affine chart the defining ideal is the corresponding maximal prime, by the quotient description in [F1]. The residue field is finite over $K$ by [F4]. The remaining possibility is the whole projective line, and uniqueness of reduced closed structures gives the asserted scheme equality. [F1, F2, F3, F4, step 1.1]

3.1 In the two alternatives the function field over $K$ is respectively $K(t)$ or a finite extension, with transcendence degree one or zero. The proper-map formula in [F4] therefore gives $\dim T=\dim Y+1$ or $\dim T=\dim Y$, and $\dim T=\dim W$ because $W$ is a nonempty open of $T$. To check the first case, $Y\times\mathbf A^1$ is integral: its affine charts have domain rings $A[t]$ by [F3], and overlapping nonempty base charts give nonempty overlaps. Its function field is $K(t)$, so [F4] gives dimension $\dim Y+1$. The integral closed subscheme $W$ has that same dimension and hence codimension zero by [F4]; in an irreducible ambient space its support must be the whole space. Both closed structures are reduced, so [F2] gives $W=Y\times\mathbf A^1$. In the other case the finite generic field extension is exactly generic finiteness. [F2, F3, F4, step 1.1, step 2.1]

4.1 On the finite $u$-chart away from $u=1$ put $t=u/(u-1)$; on the infinity chart with $v=u^{-1}$ put $t=1/(1-v)$. These regular functions agree on their overlap and define a map to $\mathbf A^1$ by [F5]. Conversely, on $D(t-1)$ use $u=t/(t-1)$, and on $D(t)$ use $v=(t-1)/t$; these opens cover $\mathbf A^1$ and the formulas satisfy $uv=1$ on their overlap. They glue by [F1] and [F5], and substitution makes the composites identities. At $u=0$, $t=u/(u-1)$ differs from $u$ by a unit; at infinity $t-1=v/(1-v)$ differs from $v$ by a unit. Thus the endpoint fiber ideals, including their multiplicities after any base change, are those claimed. [F1, F5, algebra] ∎


## Finite-type Noetherian spaces and affine-line product dimension

[Open item](item-lem-adjudicate-9ad726787189-finite-type-affine-line-geometry) · level 1


### Statement
Assume the Axiom of Choice. Let $k$ be a field and $T$ a finite-type $k$-scheme, without a separatedness assumption. The underlying space $|T|$ is Noetherian. If $T$ is integral and $d=\dim T$, then $T\times_k\mathbf A^1_k$ is an integral finite-type $k$-scheme of dimension $d+1$. Here $\mathbf A^1_k=\operatorname{Spec}k[t]$, products are scheme fibre products over $k$, and dimension is chain dimension of the underlying Noetherian space.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)

[math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring)

### Facts & Assumptions

**Given:** The Axiom of Choice, the field $k$ and the finite-type $k$-scheme $T$ of the statement. Integrality is assumed only for the product assertion.

**Goal:** Establish the global Noetherian-space conclusion and the integrality, finite type and dimension of the affine-line product.

[A1] Choice meets the assumptions of affine quasi-compactness, the Noetherian-spectrum theorem, the prime/closed-set correspondence and the polynomial-dimension theorem below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] A $k$-scheme has a structure map to $\operatorname{Spec}k$. Finite type means locally of finite type and quasi-compact; locally of finite type supplies affine neighbourhoods $\operatorname{Spec}A$ with $A$ finitely generated over $k$. A quasi-compact morphism has quasi-compact inverse images of quasi-compact opens, and a quasi-compact scheme has a finite subcover of every open cover. Under Choice every affine scheme is quasi-compact. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact), [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme), [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F2] A field is Noetherian. A commutative ring is Noetherian when every ideal is finitely generated; a finite-type algebra over a Noetherian ring is Noetherian, and under Choice its spectrum is a Noetherian space. A space is Noetherian exactly when every descending chain of closed subsets stabilizes. [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum), [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)

[F3] An integral scheme is nonempty, reduced and irreducible; its nonempty affine opens have domain coordinate rings. Here a scheme is reduced when it has an affine open cover by affine schemes whose coordinate rings have no nonzero nilpotents. Scheme fibre products have the open affine tensor-product charts. Polynomial rings over domains are domains. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:cor-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-polynomial-ring-over-a-domain-is-a-domain), [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals), [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain), [math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme), [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring), [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[F4] Chain dimension counts strict chains of nonempty irreducible closed subsets. Krull dimension counts strict prime chains. For a nonzero Noetherian ring $A$, its spectrum is Noetherian under Choice. The prime/irreducible-closed-set correspondence reverses inclusion, so $\dim\operatorname{Spec}A=\dim A$ for such $A$. Noether normalization makes a finite-type $k$-domain $A$ module-finite over a polynomial subring in some finite number $n$ of variables; the normalization dimension bound then gives $\dim A\leq n<\infty$. Under Choice a Noetherian ring $A$ of finite Krull dimension satisfies $\dim A[t]=\dim A+1$. Integral finite-type schemes and all their nonempty opens have the same dimension, as supplied by the finite-type geometry interface. [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring), [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum), [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals), [math:cor-noether-normalisation-module-finiteness](https://alphabetamath.cc/item/cor-noether-normalisation-module-finiteness), [math:lem-affine-domain-normalisation-dimension-upper-bound](https://alphabetamath.cc/item/lem-affine-domain-normalisation-dimension-upper-bound), [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring), [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[F5] For a commutative ring $R$, $R[t]$ consists of finitely supported coefficient sequences, with coefficientwise addition and convolution multiplication. For a commutative unital $k$-algebra $A$, the tensor product $A\otimes_k k[t]$ is generated additively by elementary tensors, with additivity in both entries and balancing $(ac)\otimes p=a\otimes(cp)$ for $c\in k$. Since $A$ and $k[t]$ are commutative unital $k$-algebras, its multiplication is $(a\otimes p)(b\otimes q)=ab\otimes pq$ and its unit is $1\otimes1$. [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring), [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations), [math:thm-tensor-product-of-algebras-over-a-commutative-ring](https://alphabetamath.cc/item/thm-tensor-product-of-algebras-over-a-commutative-ring), [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring)

[F6] A space is irreducible if it is nonempty and is not the union of two proper closed subsets; irreducibility of a subset uses its subspace topology, whose opens are intersections with ambient opens. For a subset $S$ of a space $Z$, its closure is the intersection of all closed subsets of $Z$ containing $S$. A point $\eta$ is generic for a closed subset $C$ when the closure of $\{\eta\}$ is $C$; a subset is dense when its closure is the whole space. [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset), [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

### Proof

1.1 The affine scheme $\operatorname{Spec}k$ is quasi-compact by [F1], so finite type makes $T$ quasi-compact. Extract a finite affine open cover $T=\bigcup_{i=1}^m U_i$ with $U_i=\operatorname{Spec}A_i$ and each $A_i$ finitely generated over $k$. For empty $T$ use the empty cover. By [F2], $k$ and then every $A_i$ are Noetherian, so every $|U_i|$ is Noetherian under [A1]. Given a descending chain $C_n$ of closed subsets of $|T|$, the chain $C_n\cap U_i$ stabilizes for each $i$. The maximum of the finitely many stabilization indices makes every restriction constant and therefore makes $C_n=\bigcup_i(C_n\cap U_i)$ constant. The empty case is immediate. This proves that $|T|$ is Noetherian. [given, A1, F1, F2]

2.1 Suppose $T$ is integral, and discard empty charts of the cover in step 1.1. By [F3], $P=T\times_k\mathbf A^1_k$ has open affine cover $V_i=\operatorname{Spec}(A_i\otimes_k k[t])=\operatorname{Spec}A_i[t]$. Using the constructions in [F5], the ring identification sends $a\otimes p(t)$ to $ap(t)$, with inverse $\sum_n a_nt^n\mapsto\sum_n a_n\otimes t^n$; the tensor relations verify multiplicativity and both inverse identities. Each $A_i[t]$ is a domain, hence has no nonzero nilpotents, and is finitely generated over $k$: adjoining $t$ to a finite algebra-generating list for $A_i$ gives such a list for $A_i[t]$. Thus $P$ is reduced and locally of finite type. The finite cover by quasi-compact affine charts makes $P$ quasi-compact. The only opens of $\operatorname{Spec}k$ are itself and the empty set, since a field has only its zero prime, so this also makes the structure morphism quasi-compact; hence $P$ is finite type. Any two nonempty $U_i$ meet by irreducibility of $T$: otherwise their complements would be two proper closed subsets covering $T$, contrary to [F6]. An affine neighbourhood $\operatorname{Spec}B\subset U_i\cap U_j$ has domain coordinate ring, and its product chart $\operatorname{Spec}B[t]$ is a nonempty open in $V_i\cap V_j$, since the zero ideal is prime in $B[t]$. Thus the irreducible charts $V_i,V_j$ have nonempty open intersection. A generic point lies in every nonempty open, since a closed complement containing it would contain its closure. It remains generic in a nonempty open, since every nonempty relatively open subset there is open in the ambient space and contains that point. Thus each chart's generic point lies in the nonempty open $\operatorname{Spec}B[t]$ and is generic there, so uniqueness of its affine generic point identifies all chart generic points. Their common point lies in every nonempty open of $P$, because such an open meets some $V_i$. It is therefore dense in $P$: a proper closed subset containing it would have nonempty open complement. A union of two proper closed subsets cannot contain this point, so [F6] proves irreducibility and hence integrality. Apply step 1.1 also to this finite-type $P$ to obtain its Noetherian underlying space. For one nonempty chart $U_i$, [F4] gives $\dim A_i=\dim U_i=\dim T=d<\infty$. Together with the Noetherianity of $A_i$ from step 1.1, the polynomial-dimension theorem gives $\dim A_i[t]=d+1$. The nonzero finite-type $k$-algebra $A_i[t]$ is Noetherian by [F2], so the spectrum-dimension identity of [F4] applies to it. Thus $\dim V_i=d+1$, and integrality and finite type of $P$ make this also $\dim P$. No step requires separatedness over $k$. [A1, F1, F2, F3, F4, F5, F6, step 1.1] ∎


## Seminormality and seminormalization

[Open item](item-def-seminormal-scheme-interface) · level 2


### Definition
A commutative ring $A$ is **seminormal** if, whenever $x^3=y^2$ in $A$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal if every point has an affine open neighbourhood whose coordinate ring is seminormal. In particular it is reduced: its affine coordinate rings have no nonzero nilpotents. Here a nilpotent element is one whose positive integer power is zero; equivalently, reducedness of a scheme means that every local ring is reduced.

A morphism $f:Y\to X$ is **subintegral** if it is integral, is bijective on underlying points, and induces an isomorphism $\kappa(x)\to\kappa(y)$ at every point $y$ over $x$. Integral means affine and given on affine inverse images by integral ring maps; an element is integral when it satisfies a monic polynomial over the base ring. Affine means that the inverse image of every affine open is affine. A universal homeomorphism is a morphism whose pullback along every scheme morphism is a homeomorphism on underlying spaces. Integral, bijective morphisms inducing residue-field isomorphisms are universal homeomorphisms, and conversely a universal homeomorphism with residue-field isomorphisms is integral and bijective.

For a scheme $X$, its **seminormalization** $X^{\mathrm{sn}}\to X$ is the initial object in the category of subintegral morphisms to $X$: it has a unique $X$-morphism to every object of that category. The arrows in this category are morphisms over $X$, with identities and composition inherited from schemes. Its source is seminormal. The construction is functorial: every morphism $h:Y\to X$ induces a unique compatible $h^{\mathrm{sn}}:Y^{\mathrm{sn}}\to X^{\mathrm{sn}}$. These maps respect identities and compositions. The map factors through the reduction $X_{\mathrm{red}}$, which has the same underlying space and the structure sheaf obtained by quotienting by the ideal sheaf of locally nilpotent sections. When $X$ is locally of finite type over a field, the resulting map $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite. Here finite means affine with coordinate algebras finite as modules over the corresponding base coordinate rings. In this scope a normal scheme is seminormal, and a reduced scheme is seminormal exactly when every finite subintegral morphism to it from a reduced scheme is an isomorphism. Normal here means that every local ring is an integrally closed domain.

### Definition references

[lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)

[lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube)

[lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced)

[lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness)

[lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module)

[thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme)

[math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-field](https://alphabetamath.cc/item/def-field)

### Justification
The scheme, morphism, affine-open and residue-field interfaces are the declared mathematical definitions; pullbacks mean fibre products, whose existence is supplied by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist). The subintegral category uses the ordinary category interface [math:def-category](https://alphabetamath.cc/item/def-category) and categorical isomorphisms as in [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category). Initiality is defined explicitly above.

The bridge uses two precise imported premises [E1] and [E2] below. Universally injective means that every base change is injective on underlying points. If a morphism is subintegral, it is injective on points with residue-field isomorphisms, so [E2] makes it universally injective; its integrality and surjectivity then give a universal homeomorphism by [E1]. Conversely, [E1] makes a universal homeomorphism integral, universally injective and surjective, hence bijective on points; with the assumed residue-field isomorphisms this is subintegral. Thus these are the same objects, with the same arrows over $X$, in the two categories.

The initial object, its seminormal source and functoriality are the established input [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input), now applicable to the subintegral category by this bridge; [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness) proves uniqueness up to unique isomorphism. The precise reduction is [math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme), using the sheaf of locally nilpotent sections rather than a uniform nilpotence exponent on an arbitrary open. Every map from a reduced scheme factors uniquely through it by [math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property).

By [E3], every affine coordinate ring of a seminormal scheme satisfies the square-cube condition. Applying [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced) to each one proves that all are reduced; [E4] identifies this with reducedness of the scheme. The ring-level nilpotence convention is [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring), and [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness) explains uniqueness in any reduced ring. As a local illustration, every integrally closed domain satisfies the condition by [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube). The scheme-level normality implication, in the stated locally finite type scope, is supplied by [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input).

The same input supplies finiteness over the reduction for $X$ locally of finite type over a field. Its noetherian intermediate-ring finiteness calculation is [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module); this definition does not repeat the normalization construction. If such an $X$ is reduced, its nilradical sheaf is zero and $X_{\mathrm{red}}=X$. Its seminormalization is therefore a finite subintegral morphism with reduced source. If $X$ passes the finite-morphism test, applying that test to this morphism gives an isomorphism, hence $X$ is seminormal. Conversely, if $X$ is seminormal, the established input and the bridge prove the stronger test for every subintegral morphism to $X$ with reduced source, so in particular for finite ones.

### External input
[E1] A morphism of schemes is a universal homeomorphism exactly when it is integral, universally injective and surjective. This is the imported equivalence in [Stacks, Lemma 29.46.5](https://stacks.math.columbia.edu/tag/04DF).

[E2] An injective morphism of schemes inducing isomorphisms on all residue fields is universally injective. This is the isomorphism special case of the radicial criterion in [Stacks, Lemma 29.10.2](https://stacks.math.columbia.edu/tag/01S4), with radicial defined in Definition 29.10.1.

[E3] Seminormality on affine neighbourhoods is equivalent to seminormality of every affine coordinate ring, for the unique square-cube root definition. This is [Stacks, Lemma 29.48.4](https://stacks.math.columbia.edu/tag/0EUK).

[E4] Reducedness of all local rings is equivalent to reducedness on an affine open cover, and then every open ring of sections is reduced. This is the affine-local consequence of [Stacks, Definition 26.12.1 and Lemmas 26.12.2–26.12.3](https://stacks.math.columbia.edu/tag/01IZ).

These four premises are imported with the exact hypotheses and reading limits in sources.references. Their literature arguments are not claimed as local proofs. The Justification composes them with the declared mathematical suppliers; it does not reconstruct seminormalization.


## Picard group of an affine curve through its boundary

[Open item](item-lem-affine-curve-picard-boundary) · level 2


### Statement
Assume the Axiom of Choice. Let $k$ be algebraically closed and let $C$ be a smooth connected affine curve over $k$. Then a smooth projective completion $j:C\hookrightarrow\overline C$ exists and its boundary $B=\overline C\setminus C$ is a nonempty finite set of closed points. For any such completion, the sequence $\bigoplus_{b\in B}\mathbb Z[b]\to\operatorname{Pic}(\overline C)\to\operatorname{Pic}(C)\to0$ is exact, the first map sending $[b]$ to $[\mathcal O_{\overline C}(b)]$ and the second being restriction. Each $b$ has degree one. Consequently the degree-zero Picard group $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$.

Here a curve means a nonempty finite-type scheme of pure dimension one; smoothness is over $k$. A completion means a dense open immersion into a smooth projective integral curve. A line bundle on a scheme $X$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X$; its isomorphism classes form the Picard group under tensor product. The degree of a closed point is the dimension of its residue field over $k$. The degree-zero Picard group is the kernel of the degree homomorphism on line-bundle classes, identified with the $k$-points of the degree-zero Picard variety by the cited geometric input.

### Facts & Assumptions

[F1] A regular integral separated finite-type curve over a perfect field has a smooth projective integral completion with finite closed-point boundary; if affine, the boundary is nonempty. For smooth integral curves, divisor classes identify naturally with Picard classes and restriction deletes coefficients outside the open. On a smooth projective curve, degree is additive, a point class has its residue-field degree, and the degree-zero kernel is the group of $k$-points of the degree-zero Picard variety. These assertions are the Statement interface of [lem-author-4057f3195e4f-curve-geometric-input](item-lem-author-4057f3195e4f-curve-geometric-input).

[F2] If $d:K\to\mathbb Z^{(S)}$ is a homomorphism and $B\subseteq S$, restriction induces an exact sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(r d)\to0$ ([lem-author-4057f3195e4f-divisor-class-localization](item-lem-author-4057f3195e4f-divisor-class-localization)). Here $\mathbb Z^{(T)}$ denotes finitely supported integer functions on $T$, with pointwise addition, and $\operatorname{coker}(d)=\mathbb Z^{(S)}/d(K)$. Exactness transports across compatible isomorphisms ([lem-author-4057f3195e4f-transfer-exactness](item-lem-author-4057f3195e4f-transfer-exactness)). Exactness of $H\to A\xrightarrow{q}D\to0$ means that $q$ is surjective and its kernel equals the image of the first map; no injectivity at $H$ is asserted.

[F3] If a surjective homomorphism $q:A\to D$ kills an element of degree one for a homomorphism $\deg:A\to\mathbb Z$, then $q(\ker\deg)=D$ ([lem-author-4057f3195e4f-degree-adjustment](item-lem-author-4057f3195e4f-degree-adjustment)).

[F4] The weak Nullstellensatz gives the coordinate description of every maximal ideal of $k[t_1,\ldots,t_m]$ over an algebraically closed field ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). For a closed point in a finite-type affine chart $\operatorname{Spec}A$, lift its maximal ideal under a presentation $k[t_1,\ldots,t_m]\twoheadrightarrow A$; the resulting evaluation quotient is $k$. The residue-field definition identifies this quotient with $\kappa(x)$ ([math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)). Picard groups consist of line-bundle classes under tensor product ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)); restriction and the point-associated line bundles are supplied by [F1].

[F5] Under Choice a scheme smooth over a field is regular, and if Noetherian its irreducible components are disjoint integral open-and-closed subschemes ([thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)). Regular here includes locally Noetherian; a locally Noetherian quasi-compact scheme is Noetherian ([math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)). Finite type includes quasi-compactness ([math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)). Algebraically closed fields are perfect ([math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)). Every morphism between affine schemes is separated, in particular over $\operatorname{Spec}k$ ([math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)).

[F6] Under Choice every proper closed subset of an integral finite-type curve of chain dimension one is a finite set of closed points; every point other than its generic point is closed ([math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)). Under Choice a finite-dimensional projective morphism is proper ([math:thm-projective-morphism-proper](https://alphabetamath.cc/item/thm-projective-morphism-proper)). Under Choice a nonempty proper integral finite-type scheme over a field with more than one point is not affine ([math:cex-proper-not-affine-positive-dimensional](https://alphabetamath.cc/item/cex-proper-not-affine-positive-dimensional), Statement, first assertion). Only that general assertion is used, not the separate projective-line example. For a Noetherian space, positive chain dimension gives a strict inclusion of nonempty irreducible closed subsets and hence at least two points.

[F7] For an integral finite-type scheme $X$ with generic point $\eta$, its function field $k(X)=\mathcal O_{X,\eta}$ canonically identifies with the fraction field of every nonempty affine chart ([math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)). Only that supplier's generic-stalk and affine-chart clauses are used, not its separate geometric-integrality clause. A generic point has closure all of $X$ ([math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)). An open subscheme has the restricted structure sheaf ([math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)). Under Choice, in an affine spectrum, every prime containing a prime $\mathfrak p$ lies in the closure of $\{\mathfrak p\}$ ([math:cor-specialisation-order-is-prime-inclusion](https://alphabetamath.cc/item/cor-specialisation-order-is-prime-inclusion)). In particular, the zero prime of a domain is generic for its spectrum.

[F8] All scheme properties are relative to the structure morphism to $\operatorname{Spec}k$. Smoothness is smoothness of that morphism ([math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)). Affine means isomorphic as a locally ringed space to a ring spectrum ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)). Projective uses a closed immersion into a finite-dimensional projective space over $k$ ([math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)). Integral means nonempty, reduced and irreducible ([math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)). Dimension is the chain dimension of the underlying Noetherian space ([math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)); pure dimension one means that every irreducible component has dimension one. Connected means the underlying space admits no partition into two nonempty open-and-closed pieces ([math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)). A completion is a dense open immersion ([math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)); dense means its image has closure the entire target. Separated means that the relative diagonal is a closed immersion ([math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)). Proper means separated, of finite type and universally closed ([math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)). Algebraically closed means that every nonconstant polynomial over the field has a root in the field ([math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)).

[A1] Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). It is used through the explicitly Choice-qualified component, closed-subset, projective-properness, proper-integral-nonaffineness and specialization suppliers in [F5], [F6] and [F7]. It is not needed by the group-theoretic adjustment in [F3].

**Given:** The Axiom of Choice and $k,C$ as stated, with the conventions in [F8].

**Goal:** Prove existence, finiteness and nonemptiness of the boundary for every completion, the exact sequence, and the degree-zero surjection.

### Proof

1.1 By [F5], $k$ is perfect and $C$ is regular, hence locally Noetherian. Since $C$ is of finite type, it is quasi-compact and therefore Noetherian. The component assertion of [F5] applies. Each component is integral and open and closed; since $C$ is nonempty and connected, there is exactly one component. Indeed, any component and the union of the others would otherwise give two nonempty complementary open sets. Thus $C$ is integral. Its structure morphism is between affine schemes, so it is separated by [F5]. These verify every hypothesis of [F1], which supplies a smooth projective integral completion. [A1, F1, F5, F8, given]

2.1 Fix any completion $j:C\hookrightarrow\overline C$ as in the statement. Its boundary $B$ is a proper closed subset because $j(C)$ is nonempty dense open. Apply [F6] to the integral finite-type dimension-one scheme $\overline C$ to see that $B$ is a finite set of closed points and that the underlying space is Noetherian. The projective curve $\overline C$ is proper by [F6]. Its chain dimension one gives nonempty irreducible closed subsets $Z_0\subsetneq Z_1$; a point in $Z_0$ and a point in $Z_1\setminus Z_0$ are distinct, so $\overline C$ has more than one point. Thus the proper-integral-nonaffineness assertion in [F6] applies to $\overline C$ and says that it is not affine. If $B$ were empty, the open immersion $j$ would be an isomorphism onto all of $\overline C$, making $\overline C$ affine because $C$ is affine. This contradiction proves that $B$ is nonempty for every completion. [A1, F6, F8, given, step 1.1]

3.1 Choose a nonempty affine chart $U=\operatorname{Spec}A$ of the integral scheme $\overline C$. Then $A$ is a domain. By [F7], the zero prime is generic for $U$; since $U$ is a nonempty open of an irreducible space it is dense, so the same point $\eta$ is generic for $\overline C$. Let $S$ be the closed points of $\overline C$. The nonempty open $C$ contains $\eta$: otherwise its closed complement would contain the closure of $\eta$, namely all of $\overline C$. Since open restriction leaves the structure sheaf's stalks unchanged, [F7] gives the canonical identification $k(C)=\mathcal O_{C,\eta}=\mathcal O_{\overline C,\eta}=k(\overline C)$. To see the stalk equality directly, the open neighborhoods of $\eta$ contained in $C$ are cofinal among all neighborhoods, and their sections are the same restricted-sheaf sections. At each $x\in C$ the local rings likewise agree. Thus the orders of a nonzero rational function at retained points agree. By [F6] every nongeneric point of $\overline C$ is closed, whereas $\eta$ is not closed in the integral dimension-one curve $C$. Hence the closed points of $C$ are exactly $S\setminus B$. The divisor-restriction interface of [F1] identifies the divisor group on $C$ with $\mathbb Z^{(S\setminus B)}$ and deletes precisely the boundary coefficients. [A1, F1, F6, F7, F8, step 1.1, step 2.1, choose]

4.1 Put $K=k(\overline C)^\times$. The principal-divisor homomorphism $d:K\to\mathbb Z^{(S)}$ is the finite sum of the orders at closed points, supplied by [F1]. By step 3.1 the corresponding homomorphism on $C$ is $r d$, where $r$ deletes the boundary coefficients. Apply the localization result in [F2], then transport exactness through the divisor-class/Picard isomorphisms of [F1]. Their restriction compatibility identifies the second map with restriction of line bundles and sends the boundary basis element $[b]$ to $[\mathcal O_{\overline C}(b)]$. Since $B$ is finite, $\mathbb Z^{(B)}$ is exactly the displayed direct sum. This gives the stated exact sequence. [F1, F2, step 2.1, step 3.1]

5.1 For each $b\in B$, choose a finite-type affine neighborhood of $b$ in $\overline C$. Because $b$ is closed, its chart ideal is maximal, so [F4] gives $\kappa(b)=k$ and hence degree one. By [F1] the class $e=[\mathcal O_{\overline C}(b)]$ has degree one, and step 4.1 shows that its restriction is zero. Such a $b$ exists by step 2.1. [F1, F4, step 2.1, step 4.1, choose]

6.1 Restriction $q:\operatorname{Pic}(\overline C)\to\operatorname{Pic}(C)$ is surjective by step 4.1. The degree is an additive homomorphism by [F1]. Apply [F3] with the boundary class $e$ of step 5.1: the restriction of $q$ to the degree-zero kernel is still surjective. Identifying this kernel with $\operatorname{Pic}^0(\overline C)(k)$ by [F1] proves the final assertion, for the arbitrary completion fixed in step 2.1. [F1, F3, step 2.1, step 4.1, step 5.1] ∎


## The plus construction is a presheaf

[Open item](item-lem-author-cf6ede58b450-plus-presheaf) · level 2


### Statement
For every set-valued presheaf on a small site, the relation and restriction maps in the plus construction are well defined; they give a presheaf F+ and a natural map η_F: F → F+. A natural map F → G induces a natural map F+ → G+.

### Facts & Assumptions
[F1] The constructions and topology axioms are those of [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F2] Finite intersections of covering sieves cover by [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections).

### Proof
**Given:** A presheaf F on a small site.

**Goal:** Establish the relation, functorial restrictions, unit and functoriality in F.

1.1 Reflexivity and symmetry of the relation are immediate. For transitivity, intersect the two covering sieves on which successive pairs agree; the intersection covers and both equalities hold there. Thus the relation is an equivalence relation. [F1, F2, given]

2.1 Pulling back a common covering sieve along an arrow gives a covering sieve on which the pulled-back families agree. Pullback of matching families respects identities and composition, so restriction descends to equivalence classes and makes F+ a presheaf. [F1, step 1.1]

3.1 Restrictions of a section along the maximal sieve define η_F, and restriction along any arrow gives the same class as applying η_F after restricting the section. Applying a natural map F → G pointwise to a matching family preserves compatibility and local equality, and commutes with restriction. These constructions prove both naturality assertions. [F1, step 2.1] ∎


## Admissible face restrictions and their cycle identities

[Open item](item-lem-author-89250b1d710c-admissible-face-identities) · level 2


### Statement

Assume the Axiom of Choice. Let $k$ be a field, $X$ smooth of finite type over $k$, and $r,n\geq0$ integers. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type refer to this morphism. All products below are over $\operatorname{Spec}k$. Put $\Delta^m=\operatorname{Spec}(k[t_0,\ldots,t_m]/(\sum_{a=0}^m t_a-1))$ for integers $m\geq0$. For a proper subset $J\subsetneq\{0,\ldots,m\}$, the nonempty coordinate face $F_J\subset\Delta^m$ is cut out by $t_j=0$ for $j\in J$, with the remaining coordinates in increasing order; the empty subset gives the whole simplex. Imposing all coordinates gives the empty scheme.

An integral scheme is nonempty, reduced and irreducible. Closed subschemes are specified by closed immersions, and intersections below are scheme-theoretic intersections. Components, when used as cycle generators, have their reduced induced closed structures. Write $\eta_T$ for the generic point of an irreducible component $T$, and $\mathcal O_{Y,y}$ for the stalk of the structure sheaf of $Y$ at $y$. For an integral closed subscheme $T\subset Y$, use the convention $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, where ring dimension is the supremum of lengths of strict chains of prime ideals. This convention applies without a pure-dimension assumption on $Y$.

Write $z^r(X,n)$ for the free abelian group on integral closed subschemes $W\subset X\times\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: every irreducible component of $W\cap(X\times F_J)$ has codimension $r$ in $X\times F_J$, and an empty intersection is allowed. Cycles are finite integral linear combinations of these generators. For $n\geq1$ and $0\leq i\leq n$, define
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ runs over the components of $W\cap\{t_i=0\}$, $t_i$ denotes the pulled-back coordinate, and the target face is identified with $X\times\Delta^{n-1}$ in increasing coordinate order. Here $\ell_R(M)$ is the number of simple factors of a finite composition series of the $R$-module $M$, independent of the series, with $\ell_R(0)=0$. The sum is zero if the intersection is empty. These formulas have finite coefficients, give homomorphisms $d_i^n:z^r(X,n)\to z^r(X,n-1)$ and, for $n\geq2$ and $0\leq i<j\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ as equalities of integral cycles. Neither separatedness nor pure dimension is assumed for $X$. For $X=\varnothing$, all the groups and maps are zero.

### Facts & Assumptions

**Given:** Choice and $k,X,r,n$, the coordinate faces, codimension convention and groups in the Statement.

**Goal:** Establish finite coefficients, admissibility and the cycle-level face identities with the stated non-separated, non-pure-dimensional scope.

[A1] Choice is assumed for the affine-cover supplier and the Choice-conditional algebraic suppliers below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The simplex, ordered faces, affine product charts and coordinate identities are supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry). In particular a single face coordinate is a nonzerodivisor on its affine ambient chart.

[F2] For a Noetherian local ring $A$, a nonzerodivisor $t$, and a prime $I$ with $t\notin I$ and $\sqrt{I+(t)}$ the maximal ideal, the specified two-term tensor resolution has only degree-zero homology $A/(I,t)$ and gives its finite length. [lem-author-89250b1d710c-cartier-face-length](item-lem-author-89250b1d710c-cartier-face-length)

[F3] Cycle restriction, detection of equality and codimension, generic points and reduced component structures, and compatibility of the conditional face lengths with open restriction are supplied by [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality).

[F4] The separated equidimensional smooth finite-type case, including admissibility of face images and the simplicial identity with local Tor intersection multiplicities, is the explicit imported input [thm-author-89250b1d710c-bloch-simplicial-cycle-input](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input).

[F5] Under Choice, a smooth finite-type scheme admits a cover by integral smooth affine opens, each separated and equidimensional. [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)

[F6] Generator images extend uniquely to homomorphisms from free abelian groups. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F7] A commutative ring is Noetherian when every ideal is finitely generated. Products of finite-type $k$-schemes are of finite type. Reference 0 gives Noetherianity over $\operatorname{Spec}k$; reference 1 gives Noetherian affine coordinate rings, Noetherianity of locally closed subschemes, and finiteness of components. Stalks on affine charts are prime localizations, and quotients and localizations of Noetherian rings are Noetherian. [math:cor-base-change-finite-type-and-products](https://alphabetamath.cc/item/cor-base-change-finite-type-and-products) [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization) [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F8] Reference 2 identifies chain codimension with the dimension of the ambient stalk at the generic point. For integral finite-type schemes, chain codimension is the difference of dimensions, and nonempty opens preserve dimension. [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input) Ring dimension uses [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring).

[F9] A local ring is a nonzero commutative ring with a unique maximal ideal. An ideal $I$ is prime when it is proper and $ab\in I$ implies $a\in I$ or $b\in I$; write $\sqrt J=\{a:a^e\in J\text{ for some integer }e\geq1\}$. A closed subscheme of an affine chart is a quotient spectrum, intersections are cut out by ideal sums, and localization commutes with quotients. Prime localization is local; its prime ideals correspond to primes contained in the localized prime. Primes of a quotient correspond to primes containing its ideal. Under Choice the radical of an ideal is the intersection of the primes containing it. [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings) [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product) [math:thm-localisation-commutes-with-quotients](https://alphabetamath.cc/item/thm-localisation-commutes-with-quotients) [math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local) [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection) [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection) [math:thm-radical-as-intersection-of-primes](https://alphabetamath.cc/item/thm-radical-as-intersection-of-primes)

[F10] Composition-series length and its independence are supplied by [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module) and [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules).

[F11] Under Choice, adjoining one polynomial variable to a finite-dimensional Noetherian ring raises its dimension by one. Regular sequences remain regular under localization when their terminal quotient remains nonzero. [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring) [math:thm-localisation-and-flat-base-change-of-regular-sequences](https://alphabetamath.cc/item/thm-localisation-and-flat-base-change-of-regular-sequences)

[F12] The formulation uses the scheme-over-base, smoothness, finite-type, integral-scheme, closed-immersion, component, generic-point and stalk interfaces. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme) [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme) [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) Affine schemes are quasi-compact under Choice. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[F13] Being locally of finite type is affine-local on source and target: for a locally finite-type morphism, every affine source open mapping into an affine target open has a finite-type coordinate algebra over that target ring. Restriction to a source open remains locally of finite type, and a quasi-compact locally finite-type morphism is of finite type. [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

### External input

Reference 0 imports the finite-type Noetherianity implication, applied to the structure map of $Y=X\times\Delta^n$ to $\operatorname{Spec}k$. Its hypotheses are checked in step 1.1.

Reference 1 imports the affine-ring criterion, preservation under locally closed subschemes, and finiteness of components. Local-ring Noetherianity then follows from the stated affine-stalk and ring-localization suppliers; no local proof of the imported scheme results is claimed.

Reference 2 identifies stalk-dimension codimension with chain codimension. The existing finite-type dimension supplier then identifies it with dimension difference on each integral affine product chart and face, exactly where the separated Bloch-cycle input is applied.

### Proof

1.1 The simplex is affine of finite type by its displayed coordinate presentation and [F12]. Thus $Y=X\times\Delta^n$ is finite type by [F7]. A field is Noetherian because its only ideals are $0$ and $k$, so $\operatorname{Spec}k$ is Noetherian. References 0 and 1 in [F7] show that $Y$, its faces, $W$ and their intersections are Noetherian, with finitely many components. Every local ring needed below is Noetherian: choose an affine neighbourhood with Noetherian coordinate ring and use its localization description in [F7]. By [F5], cover $X$ by integral smooth affine opens $U$. By the affine-local criterion [F13], the restricted structure morphism $U\to\operatorname{Spec}k$ is locally of finite type. It is quasi-compact because $U$ is affine and $\operatorname{Spec}k$ has only the empty open and itself, so [F12, F13] make it of finite type. Each is separated and equidimensional, as required by [F4]. The empty $X$ has no generators and gives zero groups and maps. [A1, F1, F4, F5, F7, F12, F13, given, construct]

2.1 For each nonempty $U=\operatorname{Spec}B$ in step 1.1, the affine-local criterion [F13] makes $B$ a finite-type $k$-algebra; integrality of $U$ makes $B$ a domain by [F12]. By [F1], $U\times\Delta^m$ and all its nonempty coordinate faces are affine with polynomial coordinate rings over $B$. These are domains: in a product of two nonzero polynomials the product of the leading coefficients is nonzero. Hence these schemes are integral and finite type. By [F8], our stalk-dimension codimension on them equals the dimension-difference convention in [F4]. Restrictions of admissible generators remain admissible by [F3], so [F4] applies with exactly the same notion of proper face intersection. A single face has ambient dimension one less by [F11], applied repeatedly to the finite-dimensional Noetherian ring $B$ (finite dimensionality follows from [F8]). If the nonempty restriction $W_U$ were contained in that face, its codimensions in the ambient scheme and in the face would differ by one by [F8], contradicting the requirement that both equal $r$. Thus no such $W_U$ is contained in a single face. [A1, F1, F3, F4, F8, F11, F12, F13, step 1.1, algebra]

3.1 At a component $T$ of a single-face intersection put $A=\mathcal O_{Y,\eta_T}$, and let $I$ be the ideal defining $W$ there. By [F9] and the affine stalk description, $A/I=\mathcal O_{W,\eta_T}$; it is a domain, since it is a localization of an affine domain of the integral scheme $W$. Thus $I$ is prime. The image of $t_i$ is nonzero in this domain by step 2.1: a nonzero element of a domain remains nonzero in a prime localization. Moreover $A$ is Noetherian by step 1.1. The coordinate $t_i$ is a nonzerodivisor in $A$ by [F1, F11], since at this point its localized quotient is nonzero. The prime corresponding to $\eta_T$ in an affine chart is minimal over the intersection ideal: a strictly smaller prime over that ideal would give a strictly larger irreducible closed subset of the intersection, contradicting that $T$ is a component. The prime correspondences in [F9] therefore show that the maximal ideal of $A$ is its only prime containing $I+(t_i)$. The radical formula in [F9] gives $\sqrt{I+(t_i)}=\mathfrak m_A$. All hypotheses of [F2] hold, so the local Tor coefficient in [F4] is the finite length of $A/(I,t_i)$. Its length over $A$ equals its length over $A/I$, because an additive subgroup is stable under one scalar action exactly when it is stable under the other; their composition series and simple factors coincide. This gives precisely the coefficient in the Statement by [F10]. [A1, F1, F2, F4, F7, F9, F10, F11, F12, step 1.1, step 2.1, algebra]

4.1 There are finitely many intersection components by step 1.1, and step 3.1 gives finite coefficients. The global sum consequently defines a finite cycle and restricts to the local face cycles by [F3]. Those local cycles are admissible by [F4] and the codimension agreement in step 2.1; [F3] detects these codimension conditions globally. Hence every generator has an image in $z^r(X,n-1)$, including the zero image for an empty intersection. Extend uniquely to a homomorphism by [F6]. [F3, F4, F6, step 1.1, step 2.1, step 3.1, construct]

5.1 Restrict the two sides of the claimed identity to the integral smooth affine opens of step 1.1. Both successive face operations commute with restriction by [F3] and step 3.1. On each open they agree by [F4], with the same final target face identified in increasing coordinate order by [F1]. Detection of cycle equality in [F3] gives equality globally with all coefficients. This proves the lemma; compatibility of intersection multiplicities is imported in [F4]. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎


## Tensor products multiply frame transitions

[Open item](item-lem-author-8e1c0251ef0d-tensor-transitions) · level 2


### Statement
Let $\mathcal O$ be a sheaf of commutative unital rings on a Grothendieck site $(\mathcal C,J)$, and let $L,M$ be sheaves of $\mathcal O$-modules locally isomorphic to $\mathcal O$. Use the associated-sheaf construction described below, with its matching-family collections and refinement quotients set-valued in the chosen set-theoretic setting; a small site suffices. No fibre products in $\mathcal C$ are required. Write $L\otimes_{\mathcal O}M$ for the sheafification of the sectionwise module tensor product.

On a common trivializing covering family $\{U_i\to U\}$ with given frames $e_i$ of $L$ and $f_i$ of $M$, suppose $e_j=g_{ij}e_i$ and $f_j=h_{ij}f_i$ on overlaps. Then $e_i\otimes f_i$ are frames of $L\otimes_{\mathcal O}M$, with transition units $g_{ij}h_{ij}$. Here an overlap means any object with compatible arrows to both cover members, and all equations are taken after restriction to its slice site. The standard frame $1$ of the unit module $\mathcal O$ has transition units $1$.

### Facts & Assumptions

**Given:** The stated ringed site, sheaves, set-valued associated-sheaf constructions and common covering family, with the specified local frames.

**Goal:** Establish the tensor-product frames and compute their transitions, including the unit frame.

[F1] Use the site, covering-sieve, sheaf, module-sheaf and slice-restriction conventions of [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions), including its Facts [F1]–[F4]. In particular, $N|_U(V\to U)=N(V)$, and a sieve on $V\to U$ in the slice is covering exactly when its underlying arrows into $V$ form a covering sieve. A frame is an isomorphism $\mathcal O|_U\to N|_U$, also denoted by its value at $1$. Transitions are the unique units relating two frames, with restriction-compatible equations on common test objects.

[F2] Sectionwise commutative rings, unital modules and linear maps have the meanings in [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) and [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel). Module restrictions satisfy $a|_V s|_V=(as)|_V$ and respect addition. The zero ring is allowed.

[F3] Use the sectionwise tensor construction in [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations), its balanced-map universal property in [math:thm-universal-property-of-module-tensor-products](https://alphabetamath.cc/item/thm-universal-property-of-module-tensor-products), and the scalar action in [math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product). A pairing $b$ is balanced when it is additive in each variable and $b(ax,y)=b(x,ay)$; commutativity identifies left and right scalar actions. Thus $a(x\otimes y)=(ax)\otimes y=x\otimes(ay)$. A bilinear module-sheaf map means a restriction-compatible map on pairs of sections, additive and linear in each variable.

[F4] The associated-sheaf construction for a Grothendieck topology, its local representability and its universal property are imported precisely in External input. Applying it to presheaves of modules, and checking its compatibility with slice restriction, are local deductions below.

### External input

The [Stacks Project, Section 7.49](https://stacks.math.columbia.edu/tag/00ZG), opening construction, Lemma 7.49.1(5), Theorem 7.49.3 and Proposition 7.49.5, supplies set-valued sheafification for a category with a Grothendieck topology. Its plus operation $Q\mapsto Q^+$ represents a section over $V$ by a matching family on a covering sieve, modulo agreement on a covering refinement. The associated sheaf is $Q^{++}$, and maps from $Q$ to sheaves extend uniquely. Sections of each plus construction locally come from the preceding presheaf. These assertions concern sieves, and require no fibre products in the underlying category.

Only this associated-sheaf input is imported. The module structure, tensor universal property, restriction compatibility, frame isomorphisms and transition calculation are established below. No existence assertion for proper-class matching-family quotients is made.

### Proof

1.1 For a presheaf $Q$ of $\mathcal O$-modules, give $Q^+(V)$ addition by restricting two matching families to the intersection of their covering sieves and adding there. For $a\in\mathcal O(V)$, multiply a representative $(s_f)$ by $(f^*a\,s_f)$. Intersections cover by the topology axioms in [F1]; replacing representatives by covering refinements preserves these operations. All module identities hold on a common refinement by [F2], and restriction commutes with them. The same construction makes $Q^{++}$ a module sheaf by [F4]. A map of module presheaves into a module sheaf extends uniquely as a map of sheaves by [F4]; the extension is linear, since any finite list of sections is locally represented by sections of $Q$, using local representability twice and transitivity of covering sieves, and linearity can then be checked locally. Now set $P(V)=L(V)\otimes_{\mathcal O(V)}M(V)$. The formula $x\otimes y\mapsto x|_W\otimes y|_W$ defines restriction along $W\to V$ by the balanced-map property in [F3], with scalars restricted along $\mathcal O(V)\to\mathcal O(W)$. Uniqueness there gives the restriction laws. The preceding construction therefore gives the module sheaf $T=P^{++}$. Every bilinear module-sheaf map $L\times M\to N$ induces sectionwise a unique linear map $P\to N$ by [F3]; uniqueness makes these maps commute with restrictions. Extending them as above shows that $T$ represents bilinear module-sheaf maps, with universal pairing $(x,y)\mapsto x\otimes y$. Finally, a sieve on an object $p:V\to U$ of the slice corresponds exactly to a sieve on $V$: each arrow $h:W\to V$ determines the slice object $ph$. Covering and matching-family conditions agree under this correspondence by [F1]. Thus plus and double plus commute with restriction to every slice, including their module structures and universal pairings. Since $P|_U$ is exactly the sectionwise tensor presheaf of $L|_U$ and $M|_U$, this proves the natural identification $T|_U\cong L|_U\otimes_{\mathcal O|_U}M|_U$. This constructs the tensor sheaf and its required local properties without presuming that sectionwise tensors already form a sheaf. [F1, F2, F3, F4, construct, algebra]

2.1 On $\mathcal C/U_i$, the given frames express local sections uniquely as $ae_i$ and $bf_i$. The formula $(ae_i,bf_i)\mapsto ab$ is a bilinear module-sheaf map, since frame inverses commute with restriction. Step 1.1 gives a linear map $\mu_i:T|_{U_i}\to\mathcal O|_{U_i}$. Define $\lambda_i(c)=c(e_i\otimes f_i)$. Then $\mu_i\lambda_i(c)=c$. The other composition sends $ae_i\otimes bf_i$ to $ab(e_i\otimes f_i)=ae_i\otimes bf_i$ by [F3]; uniqueness in the sheaf bilinear universal property from step 1.1 makes $\lambda_i\mu_i$ the identity on $T|_{U_i}$. Hence $e_i\otimes f_i$ is a frame. On any overlap object, restriction compatibility and bilinearity give $e_j\otimes f_j=(g_{ij}e_i)\otimes(h_{ij}f_i)=g_{ij}h_{ij}(e_i\otimes f_i)$. The coefficient is a unit with inverse $h_{ij}^{-1}g_{ij}^{-1}$, so uniqueness in [F1] identifies the transition unit as $g_{ij}h_{ij}$. Taking both modules and frames to be $\mathcal O$ and $1$ gives the unit identification $\mathcal O\otimes_{\mathcal O}\mathcal O\cong\mathcal O$ by multiplication, with inverse $c\mapsto c(1\otimes1)$. For the unit module itself, use the same frame $1$ on every cover member: its restrictions agree, and its unique transition unit is $1$. [F1, F2, F3, step 1.1, construct, algebra] ∎


## The plus presheaf is separated

[Open item](item-lem-author-cf6ede58b450-plus-separated) · level 3


### Statement
For every set-valued presheaf F on a small site, F+ is separated. Moreover, if two sections of F agree after restriction along every arrow of a covering sieve, their images in F+ agree.

### Facts & Assumptions
[F1] The site, matching families and separatedness are defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F2] Cover intersections cover by [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections), and F+ is a presheaf by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf).

### Proof
**Given:** A covering sieve R on X and two elements of F+(X) with equal restrictions along every arrow of R.

**Goal:** Prove their equality and the stated property of η_F.

1.1 Represent the two elements by matching families s and t on covering sieves S and T. For each f in R, equality of the restricted classes means that they agree on a covering sieve of arrows into dom f after pulling back S and T. Let E be the sieve of arrows h in S ∩ T for which $s_h=t_h$. For every f in R, $f^*E$ contains such a covering sieve and therefore covers. Transitivity shows that E covers X. [F1, F2, given]

2.1 The representatives agree on E, so their classes agree. Hence F+ is separated. If two sections of F agree on R, their restrictions on the maximal sieve agree on R, so their η_F images agree by the definition of the equivalence relation. [F1, step 1.1] ∎


## Alternating face boundaries square to zero

[Open item](item-lem-author-89250b1d710c-alternating-face-boundary) · level 3


### Statement
Let $C_n$ be abelian groups for $n\geq0$ and, for $n\geq1$, let $d_i^n:C_n\to C_{n-1}$, $0\leq i\leq n$, be group homomorphisms satisfying $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ for $i<j$ and $n\geq2$. Put $C_n=0$ for $n<0$, $\partial_n=0:C_n\to C_{n-1}$ for every $n\leq0$, and $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$ for $n\geq1$. Then $\partial_{n-1}\partial_n=0$ for every integer $n$, and $H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}$ is defined and vanishes for $n<0$.

Under the Axiom of Choice, this applies to the specified admissible cycle face maps for smooth finite-type schemes over fields. The abstract abelian-group assertion above has no Choice premise.

### Facts & Assumptions
**Given:** The abelian groups, group homomorphisms and face identities in the Statement.

**Goal:** Prove the chain identity and justify the homology quotient.

[F1] The admissible cycle face maps are group homomorphisms satisfying these identities. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] A chain complex has consecutive differential composites zero; its homology is cycles modulo boundaries. [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[F3] Abelian groups and their homomorphisms form an abelian category: homomorphisms add pointwise, and kernels, images and cokernels are the usual subgroup and quotient constructions. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[F4] Abelian groups are written additively, group homomorphisms preserve addition, and $\ker$ and $\operatorname{im}$ denote the group-theoretic kernel and image. [math:def-group](https://alphabetamath.cc/item/def-group), [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[A1] Only the cycle application invokes the Axiom of Choice, as assumed in the supplied admissible-face construction [F1]. The given abstract face identities suffice for the general algebraic assertion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 By [F3], each $\partial_n$ is a group homomorphism, since it is a finite signed sum of homomorphisms or a zero map. For $n\geq2$, additivity allows the expansion $\partial_{n-1}\partial_n=\sum_{a=0}^{n-1}\sum_{b=0}^{n}(-1)^{a+b}d_a^{n-1}d_b^n$. Pair $(a,b)$ with $a<b$ to $(b-1,a)$. This is a bijection onto the pairs whose first coordinate is at least the second, with inverse $(c,d)\mapsto(d,c+1)$. [F3, F4, given, construct, algebra]

2.1 The two maps in each pair agree by the face identity, while their signs are opposite. All terms cancel. For $n=1$ the composite is zero because $\partial_0=0$; for $n\leq0$ it is zero because $\partial_n$ is the explicitly defined zero map. [given, step 1.1, algebra]

3.1 For $x\in C_{n+1}$, step 2.1 gives $\partial_n(\partial_{n+1}(x))=0$, so $\operatorname{im}\partial_{n+1}\subseteq\ker\partial_n$. By [F3], these are the usual subgroup constructions and their cokernel is the usual quotient; [F2] therefore defines the displayed homology group. For $n<0$ the group $C_n$ is zero, so its homology is zero. For the cycle application, retain [A1]; the face maps in [F1] then supply both the homomorphism hypothesis and the face identities. [A1, F1, F2, F3, F4, step 2.1] ∎


## Bloch cycle complexes and higher Chow groups

[Open item](item-def-bloch-higher-cycle-complex) · level 4



### Definition
Assume the Axiom of Choice. Let $k$ be a field, $X$ smooth of finite type over $k$, and $r\geq0$. For $n\geq0$ put $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$. A nonempty coordinate face is obtained by setting a proper subset of the coordinates to zero. An integral closed subscheme $W\subset X\times\Delta^n$ of codimension $r$ is **admissible** if every component of its intersection with every such face has codimension $r$ in that face; empty intersections are allowed. Codimension is measured on the ambient irreducible component containing the generic point. Define $z^r(X,n)$ as the free abelian group on the admissible subschemes.

All indices $r,n$ are integers. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type refer to this morphism, and all products are fibre products over $\operatorname{Spec}k$. For a coordinate face $F\subset\Delta^n$, its ambient face above means $X\times_k F$, and intersections with $W$ are scheme-theoretic. An integral scheme is nonempty, reduced and irreducible. Components used as cycle generators have their reduced induced closed structures. More explicitly, for an integral closed subscheme $T\subset Y$ the codimension convention is $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, where $\mathcal O_{Y,y}$ is the stalk of the structure sheaf and dimension is Krull dimension, defined by chains of prime ideals. This is the codimension convention in the admissible face supplier. In the coefficient formula below, $t_i$ is pulled back to $W$, and $\ell_R(M)$ is the number of simple factors in a finite composition series of the $R$-module $M$, independent of the series, with $\ell_R(0)=0$.

For $n\geq1$, identify $\{t_i=0\}$ with $\Delta^{n-1}$ by retaining the remaining coordinates in increasing order and set
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ ranges over the components of $W\cap\{t_i=0\}$ and $\eta_T$ is its generic point. The empty sum is zero. Extend by integral linearity and set $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$. Put $z^r(X,n)=0$ for $n<0$ and $\partial_n=0:z^r(X,n)\to z^r(X,n-1)$ for every $n\leq0$. The resulting homological complex is **Bloch's cycle complex** $z^r(X,\bullet)$, and its **higher Chow groups** are
$$\mathrm{CH}^r(X,n)=H_n(z^r(X,\bullet))=\ker\partial_n/\operatorname{im}\partial_{n+1}.$$
In particular they vanish for $n<0$. This is the unnormalized complex; no quotient by degenerate simplices is taken.

### Definition references

[lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Facts & Assumptions

**Given:** The Axiom of Choice and $k,X,r$ as above.

**Goal:** Justify the coefficients, differential and homology quotient.

[A1] The Axiom of Choice discharges the hypothesis of the admissible face supplier, including its smooth affine cover and Choice-conditional algebraic inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The admissible face lemma supplies finite coefficients, admissible face images and the identities $d_i d_j=d_{j-1}d_i$ for $i<j$. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] Alternating face sums form a chain complex, whose homology is the displayed quotient and vanishes in negative degrees. [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary), [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex), [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[F3] The simplex, coordinate faces, affine product charts and ordered face identifications are supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry). Scheme fibre products exist and scheme-theoretic intersections are cut out by sums of ideal sheaves. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[F4] A map on generators extends uniquely to a homomorphism from the free abelian group. Module length is composition-series length, independent of the chosen series by Jordan–Hölder. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

### Justification
Under [A1], the field, smooth finite-type scheme, integral cycles and stalk-dimension codimension convention in the Definition meet the hypotheses of [F1]; [F3] supplies the coordinate-face constructions and identifications. The local rings in the coefficient formula need not be discrete valuation rings and the cycles need not be smooth. The proper single-face calculation in [F1] supplies exactly the finite lengths shown. The cycle-level compatibility in [F1] uses the explicitly imported simplicial-cycle input locally on integral smooth affine opens; no quotient by rational equivalence is used. By [F4] the lengths are independent of composition series and the generator formulas extend uniquely to homomorphisms. Thus all face maps are defined, and [F2] gives $\partial^2=0$ and makes the homology quotient well-defined. This definition does not assert the separate comparison with motivic cohomology or the identification of degree zero with the classical Chow group.


## The plus construction turns a separated presheaf into a sheaf

[Open item](item-lem-author-cf6ede58b450-separated-plus-sheaf) · level 4


### Statement
If F is a separated set-valued presheaf on a small site, then F+ is a sheaf.

### Facts & Assumptions
[F1] Matching families, separated presheaves and sheaves are defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F2] Cover intersections cover by [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections); the plus construction is a presheaf by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf) and is separated by [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated).

### Proof
**Given:** A separated presheaf F and a matching family $x_f$ in F+(dom f) on a covering sieve R of X.

**Goal:** Construct the unique section of F+(X) restricting to that family.

1.1 Let S consist of arrows h: Z → X for which there are f: Y → X in R, g: Z → Y with h = fg, and a representative (T,s) of $x_f$ with g in T. Assign h the value $s_g$ in F(Z). This does not depend on the factorization or representative: the matching condition for the $x_f$ and the definition of equality in F+ make any two proposed values locally equal after a covering pullback, and separatedness of F makes them equal. Restrictions preserve the assigned value, so these values form a matching family of F on the sieve S. [F1, F2, given]

2.1 For each f in R, a representative sieve T of $x_f$ is contained in $f^*S$, so $f^*S$ covers. Transitivity makes S covering. Its matching family determines a class x in F+(X). For each f in R, the restriction of x and $x_f$ agree on the covering sieve T, so x restricts to $x_f$. Separatedness of F+ gives uniqueness. Thus F+ is a sheaf. [F1, F2, step 1.1] ∎


## Universal mapping property of the plus construction

[Open item](item-lem-author-cf6ede58b450-plus-universal) · level 4


### Statement
For a presheaf F and a sheaf G of sets on a small site, composition with $\eta_F$ gives a bijection from natural maps F+ → G to natural maps F → G. The bijection is natural in F and G.

### Facts & Assumptions
[F1] The sheaf condition and plus construction are defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F2] The plus construction and its unit are natural by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf); local equality of F-sections implies equality of their unit images by [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated).

[F3] Natural maps mean natural transformations, with components commuting with every restriction, as defined in [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation).

### Proof
**Given:** A natural map u: F → G with G a sheaf.

**Goal:** Construct its unique extension over $\eta_F$ and prove naturality.

1.1 For a representative (R,s) of an element of F+(X), the values $u(s_f)$ form a matching family in G on R. The sheaf condition gives a unique section of G(X) restricting to them. Equivalent representatives give the same section because their glued sections agree on a common covering sieve. Pullback and uniqueness show that this assignment is natural and extends u. [F1, F2, F3, given]

2.1 If v: F+ → G also extends u, then on each f in R its value on the class of (R,s) restricts to $u(s_f)$: the restricted class equals $\eta_F(s_f)$, because these representatives agree on $f^*R$. The sheaf condition therefore forces v to equal the extension from step 1.1. Uniqueness also makes the bijection natural in F and G. [F1, F2, F3, step 1.1] ∎


## Scheme sites and sheafification

[Open item](item-def-scheme-sites-and-sheafification) · level 5


### Definition
Fix Grothendieck universes U in V. A scheme site here is a U-small category C whose objects are schemes and whose morphisms are scheme morphisms, equipped with a Grothendieck topology J. A sieve on X is a set of arrows into X closed under precomposition; a topology selects covering sieves, including the maximal sieve, stable under pullback and satisfying transitivity. A presheaf of sets is a contravariant functor C → Set_V. It is a sheaf when, for every covering sieve, every compatible family of sections indexed by its arrows has a unique amalgamation on the target.

The sheafification of a presheaf F is the sheaf aF = (F+)+, equipped with the composite F → F+ → (F+)+. Here F+(X) consists of matching families on covering sieves of X, with two families identified when they agree on a common covering subsieve; restriction uses pullback of sieves. Equivalently, a is left adjoint to the inclusion of sheaves into presheaves, with the displayed composite as unit.

A big site over a base S has a specified category of S-schemes as its objects; an S-scheme is a scheme equipped with a morphism to S, and its morphisms commute with those structure maps. A small site of a fixed S-scheme X instead uses a specified category of schemes over X, such as a suitable category of étale X-schemes. The chosen categories and covering topologies must be stated separately: the words small and big alone do not determine them. A complex of abelian sheaves, or a derived presheaf, requires its own abelian or derived-category conventions; set-valued sheafification alone does not assert a complex-valued descent or localization theorem.

### Definition references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities)

[math:thm-the-adjunction-hom-set-bijection-under-local-smallness](https://alphabetamath.cc/item/thm-the-adjunction-hom-set-bijection-under-local-smallness)

### Justification
The size hypotheses make the sets of sieves, matching families and equivalence classes legitimate V-small sets. Here universe closure means transitivity, pairing, power-set closure and indexed-union closure as in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); relative smallness and the plus-construction data are as in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data), and equivalence classes and quotient sets have the meaning in [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation). The plus construction is a presheaf and its unit is natural by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf). It is separated by [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated), so its second application is a sheaf by [lem-author-cf6ede58b450-separated-plus-sheaf](item-lem-author-cf6ede58b450-separated-plus-sheaf). For every sheaf G, applying [lem-author-cf6ede58b450-plus-universal](item-lem-author-cf6ede58b450-plus-universal) successively to F and F+ gives natural bijections Hom((F+)+,G) ≅ Hom(F+,G) ≅ Hom(F,G). Here Hom denotes natural transformations in the sense of [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation); presheaf morphisms have componentwise identities and composition, and the category of sheaves has the same morphisms between sheaves. For two presheaves F and G, such a transformation is a family of functions F(X) → G(X) indexed by the U-small object set of C; these families form a V-small set by universe closure, and the naturality equations select a subset. Thus these categories have set-valued Hom collections. The natural bijections therefore give the stated adjunction in the sense of [math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities) by the converse direction of [math:thm-the-adjunction-hom-set-bijection-under-local-smallness](https://alphabetamath.cc/item/thm-the-adjunction-hom-set-bijection-under-local-smallness). Since the bijections are composition with F → F+ → (F+)+, they identify this composite as the unit. The definitions of the scheme categories require the separately specified topology and size bound; they do not claim that every possible category of schemes is U-small.


## Degree-zero Bloch cycles are ordinary cycles

[Open item](item-lem-author-c8fb25136bd5-degree-zero-cycles) · level 5


### Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq 0$. Write $Z^r(X)$ for the free abelian group on integral closed subschemes of codimension $r$ in $X$, with codimension measured on the ambient irreducible component containing the generic point. All products are over $S=\operatorname{Spec}k$. Then the canonical identification $X\times_S\Delta^0\cong X$ gives $z^r(X,0)=Z^r(X)$ after transporting generators along this identification.

### Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-evaluation-ideal-is-maximal](https://alphabetamath.cc/item/lem-evaluation-ideal-is-maximal)

[math:thm-first-isomorphism-theorem-rings](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-rings)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

### Facts & Assumptions
**Given:** The Axiom of Choice and $k$, $X$, $r$ and $S$ as in the statement.

**Goal:** Identify the two free abelian groups on their generators.

[F1] The definition of the Bloch complex uses integral closed codimension-$r$ subschemes meeting all nonempty coordinate faces in codimension $r$. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] For $f:X\to S$, the fibre product $P=X\times_S S$ has projections $p:P\to X$ and $q:P\to S$ with $fp=q$. For each compatible pair of maps into $X$ and $S$, there is a unique map into $P$ with those projections. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[F3] A function from the generator set of a free abelian group into an abelian group extends uniquely to a group homomorphism. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] For a field $k$, the evaluation map $k[t_0]\to k$ at $1$ has kernel $(t_0-1)$. It is surjective because it sends each constant polynomial to that same scalar. The ring first-isomorphism theorem consequently induces the $k$-algebra isomorphism $k[t_0]/(t_0-1)\xrightarrow{\sim}k$, $[f]\mapsto f(1)$. [math:lem-evaluation-ideal-is-maximal](https://alphabetamath.cc/item/lem-evaluation-ideal-is-maximal) [math:thm-first-isomorphism-theorem-rings](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-rings)

[F5] The contravariant affine scheme–ring equivalence sends a ring isomorphism to an affine-scheme isomorphism, respects identities and composition, and identifies structure morphisms with the corresponding coefficient maps. Thus the $k$-algebra isomorphism of [F4] identifies the displayed simplex with $\operatorname{Spec}k$ as a $k$-scheme. [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)


### Proof
1.1 By [F1], $\Delta^0=\operatorname{Spec}(k[t_0]/(t_0-1))$. Apply [F4] with the single evaluation coordinate $1\in k$: constants make evaluation surjective, its kernel is $(t_0-1)$, and the induced quotient isomorphism fixes $k$. By [F5] this is a canonical $k$-scheme isomorphism $\Delta^0\cong S$. Put $P=X\times_S S$ and let $f:X\to S$ be the structure map. By [F2] the compatible pair $(\operatorname{id}_X,f)$ gives $u:X\to P$ with $pu=\operatorname{id}_X$ and $qu=f$. The maps $up$ and $\operatorname{id}_P$ have the same projections $p$ and $q=fp$, so uniqueness gives $up=\operatorname{id}_P$. Hence $p$ is the canonical isomorphism $X\times_S\Delta^0\cong X$. The only nonempty coordinate face of $\Delta^0$ is itself; after this identification every integral closed codimension-$r$ subscheme of $X$ satisfies the face condition, which imposes no further restriction. [A1, F1, F2, F4, F5]

2.1 Consequently the generator sets of $z^r(X,0)$ and $Z^r(X)$ are identified bijectively, with the codimension convention of the statement. By [F3] this bijection and its inverse extend uniquely to group homomorphisms. Their composites agree with the identity on every generator, so uniqueness makes the composites identity homomorphisms. This is the asserted canonical identification of free abelian groups. [F3, step 1.1] ∎


## Negative homology of the cycle complex

[Open item](item-lem-author-c8fb25136bd5-negative-homology) · level 5


### Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

For a field $k$, a smooth finite-type $k$-scheme $X$, $r\geq0$, and an integer $n<0$, one has $H_nz^r(X,\bullet)=0$.

### Facts & Assumptions
**Given:** $k$, $X$, $r$ and $n$ as in the statement.

**Goal:** Compute the indicated homology group.

[F1] The Bloch complex has zero chain group in every negative degree, and its homology is the kernel modulo the image. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 Since $n<0$, the chain group in degree $n$ is zero, so the kernel of its outgoing differential is zero. [F1]

2.1 The incoming image is a subgroup of this zero kernel; consequently their quotient is zero. [F1, step 1.1] ∎


## Face boundaries preserve closed support

[Open item](item-lem-author-75596422a482-face-support) · level 5


### Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subseteq |U|$ a closed subset, and $r\geq0$. For $n\geq0$ let $p_n:U\times\Delta^n\to U$ be projection. In Bloch's complex $z^r(U,\bullet)$, the free subgroup generated in degree $n$ by admissible integral cycles with underlying support contained in $p_n^{-1}(T)$ is preserved by the boundary. No scheme structure on $T$ is needed.

### Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Facts & Assumptions
**Given:** $k,U,T,r$ as stated.

**Goal:** Show that the boundary of each supported generator remains supported.

[F1] Bloch's boundary is the alternating sum of its admissible face intersections. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 For a supported generator $W$, every component occurring in a face intersection has underlying support in $|W|\cap |U\times\{t_i=0\}|$. Under the face identification its projection to $U$ still has image in $T$, so its support is contained in $p_{n-1}^{-1}(T)$. [A1, given, F1]

2.1 The coefficients in the face intersections are integers and the boundary is their alternating sum, so linearity gives the asserted preservation in every degree; degree zero has zero boundary. [F1, step 1.1] ∎


## Open restriction of admissible cycles

[Open item](item-lem-author-75596422a482-open-restriction) · level 5


### Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subset U$ open and $r\geq0$. Restricting each admissible generator to $V\times\Delta^n$, with empty restriction sent to zero, defines a chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$.

### Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

### Facts & Assumptions
**Given:** $k,U,V,r$ as stated; $V$ carries its open-subscheme structure and its $k$-structure is the restriction of that of $U$. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

**Goal:** Verify that the target complex exists, then establish admissibility and compatibility with boundaries.

[F1] The Bloch groups are free on admissible integral closed subschemes; their faces have finite local-length coefficients and their boundaries are alternating face sums, with zero groups in negative degrees. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] For finite-type schemes over a field, the cycle open-locality lemma supplies Noetherian simplex products, integral closed restrictions, the correspondence of surviving intersection components and preservation of their generic local rings, codimensions and face lengths. Its intersection and ordered-face identifications commute with open restriction, including empty restrictions. For the componentwise codimension convention in [F1], apply its codimension assertion inside each ambient irreducible component. [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[F3] Smoothness is a germwise property preserved under open restriction, and an empty source is smooth vacuously. [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[F4] Locally finite type is affine-local on source and target and therefore restricts to open subschemes; finite type means locally finite type and quasi-compact. [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[F5] Reference 0 in External input supplies Noetherianity of a finite-type scheme over a Noetherian base. Reference 1 supplies Noetherianity of its open subschemes. A Noetherian scheme is locally Noetherian and quasi-compact; a morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[F6] A function on the basis of a free abelian group extends uniquely to a homomorphism. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F7] A chain map is a family of degreewise homomorphisms commuting with the differentials. [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### External input
Reference 0 imports the finite-type Noetherian-source assertion from [Stacks, Lemma 29.15.6](https://stacks.math.columbia.edu/tag/01T6). Reference 1 imports the Noetherian locally closed-subscheme assertion from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK), used for the open subscheme $V$. Their hypotheses and actual reading limits are recorded in sources.references. The application below and the cycle-restriction argument are local deductions; the imported premises are not claimed to have been proved here.

### Proof
1.1 The field $k$ has only the ideals $0$ and $k$, and its spectrum has one point, so $\operatorname{Spec}k$ is Noetherian. By [F5], $U$ and then its open subscheme $V$ are Noetherian. Thus $V$ is quasi-compact. Since the only opens of $\operatorname{Spec}k$ are itself and the empty set, the structure morphism of $V$ is quasi-compact by [F5]; it is locally of finite type by [F4], hence of finite type. By [F3] it is smooth. This includes $V=\varnothing$: quasi-compactness uses the empty subcover and the pointwise conditions are vacuous. Both Bloch complexes in the Statement therefore exist by [F1]. For each $n\geq0$, [F2] makes a nonempty restriction of an admissible generator integral and closed in $V\times\Delta^n$. On every coordinate face, surviving components retain their generic local rings and codimension $r$, measured in their ambient irreducible component as in [F1]; components missing the open disappear. The restriction is consequently admissible, or zero if empty. Extend the generator rule uniquely by [F6] to $j_n^*$, and use the zero homomorphism in negative degrees. [given, F1, F2, F3, F4, F5, F6]

2.1 For $n\geq1$, [F2] identifies the restriction of each scheme-theoretic face intersection with the corresponding face intersection after restriction, using the same ordered face coordinates as [F1]. Its surviving components have the same generic local rings and the same coordinate $t_i$, so the quotient modules defining their finite lengths are identified and their coefficients agree. Components missing the open contribute zero on both sides; an empty generator restriction has every face restriction empty. Thus $j_{n-1}^*d_i^n=d_i^n j_n^*$ on generators, and by linearity on cycles. Taking alternating sums gives $j_{n-1}^*\partial_n=\partial_nj_n^*$. For $n\leq0$ both sides are zero by [F1]. These degreewise homomorphisms are the asserted chain map by [F7], including when $U$ or $V$ is empty. [F1, F2, F7, step 1.1] ∎


## Nisnevich covers and distinguished squares

[Open item](item-def-nisnevich-covering-interface) · level 6


### Definition
For a point $x$ of a scheme $X$, write $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ for the residue field of its local ring, where $\mathfrak m_x$ is its unique maximal ideal. A family of scheme morphisms $\{f_i:U_i\to X\}_{i\in I}$ is a **Nisnevich covering family** if every $f_i$ is étale and, for every point $x\in X$, there are an index $i$ and a point $u\in U_i$ with $f_i(u)=x$ such that the induced field homomorphism $\kappa(x)\to\kappa(u)$ is an isomorphism. In this situation $u$ is called a residue-field-preserving lift of $x$.

On a specified small category of schemes in which these families are available, the **Nisnevich topology** is the Grothendieck topology generated by the sieves containing such families. The size, sieve, topology and presheaf conventions are those of the scheme-site interface. For the small Nisnevich site of a scheme $X$, take a suitably small category of étale $X$-schemes, closed under the relevant fibre products, with this topology; the big site requires a separately specified category of schemes over the base. Scheme fibre products have their universal-property meaning, and they exist; base change means the resulting projection after taking such a fibre product.

A **distinguished Nisnevich square** is a cartesian square of schemes

$$\begin{matrix} W&\longrightarrow&V\\ \downarrow&&\downarrow p\\ U&\xrightarrow{j}&X \end{matrix}$$

where $j$ is an open immersion, $p$ is étale, and, putting $Z=(X\setminus j(U))_{\mathrm{red}}$ for the closed complement with its reduced induced scheme structure, the base change $V\times_X Z\to Z$ is an isomorphism. The reduced induced structure means the unique reduced closed subscheme supported on this closed subset; reduced means that its local rings contain no nonzero nilpotent elements. A closed subscheme is specified by a closed immersion. Cartesian means that the displayed map $W\to U\times_X V$ is an isomorphism. The pair $\{U\to X,V\to X\}$ is its associated covering family.

For a set-valued presheaf $F$ on a chosen category containing the empty scheme $\varnothing$, the **distinguished-square excision conditions** are that $F(\varnothing)$ is a singleton and that, for every such square in the chosen category, the natural map

$$F(X)\longrightarrow F(U)\times_{F(W)}F(V)$$

is a bijection. The empty scheme is the locally ringed space with empty underlying space. Here the fibre product is the set of pairs whose restrictions to $W$ agree. These conditions describe the excision interface; no equivalence between them and the full sheaf condition is asserted here.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)

[math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions)

[math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input)

### Facts & Assumptions
**Given:** The scheme morphisms, small category, distinguished square and presheaf in the Definition; when imposing the excision conditions, the chosen category contains the empty scheme. No noetherian, finite-type or reducedness hypothesis on $X$ is imposed.

[F1] Schemes have local rings, and a scheme morphism has local stalk maps. The residue field of a local ring is its quotient by its maximal ideal; a local stalk map induces a field homomorphism on these quotients. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring) [math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)

[F2] The small-category, sieve, Grothendieck-topology and contravariant presheaf conventions are those of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Scheme fibre products are characterized by their universal property and exist for every pair over a scheme; base change is the corresponding projection. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)

[F3] An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf, and is étale, including the empty immersion. Étaleness has the stated scheme-theoretic meaning. [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion) [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[F4] A closed subset of a scheme has a unique reduced closed subscheme structure, with no finiteness assumption. This is the imported construction in [thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input). A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map, and remains a closed immersion under arbitrary base change. [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) [math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions)

[F5] Exactness of abelian sheaves can be checked on stalks; apply this to the underlying additive sheaves of the surjective structure-sheaf map. Stalks are germs of sections over neighbourhoods. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

### Justification
**Given:** The data of the Definition and facts F1–F5.

1.1 By F1 the residue-field homomorphisms in the definition are intrinsic, obtained by quotienting local stalk maps by their maximal ideals. By F2 the topology generated by the specified sieves exists: the topology in which every sieve covers contains them, and an intersection of Grothendieck topologies is again one. Indeed maximality and pullback stability hold in every member of the intersection; for transitivity, the covering sieve and all covering pullbacks belong to every member, so the sieve they test belongs to every member as well. Smallness makes the collections of sieves and topologies sets in the chosen larger universe. F2 also supplies the scheme fibre products, and F4 constructs the reduced complement. We will use that any closed immersion $i:T\to S$ induces an isomorphism $\kappa(i(t))\to\kappa(t)$. To see this without a reducedness assumption, define the direct image on an open $O\subseteq S$ by $(i_*\mathcal O_T)(O)=\mathcal O_T(i^{-1}(O))$. Neighbourhoods in the subspace $T$ are restrictions of neighbourhoods in $S$, so the direct-image stalk at $i(t)$ is $\mathcal O_{T,t}$ by the germ description in F5. The surjective structure-sheaf map therefore yields a surjective local ring map $A=\mathcal O_{S,i(t)}\to B=\mathcal O_{T,t}$ by F5. If $\mathfrak m_A,\mathfrak m_B$ are their maximal ideals, locality gives $\mathfrak m_A\subseteq\varphi^{-1}(\mathfrak m_B)$; the latter is proper, hence equals $\mathfrak m_A$. Surjectivity now makes $A/\mathfrak m_A\to B/\mathfrak m_B$ both surjective and injective. This proves the needed residue-field assertion. [F1, F2, F4, F5]

2.1 In a distinguished square, both $U\to X$ and $V\to X$ are étale by F3 and the hypothesis on $p$. For $x\in j(U)$ the unique preimage in $U$ has the same local ring and residue field, since the structure sheaf is restricted from $X$. For $x\notin j(U)$ let $z$ be its point in $Z$. Step 1.1 identifies $\kappa(x)\to\kappa(z)$ as an isomorphism. The assumed isomorphism $V\times_X Z\to Z$ gives a point $w$ above $z$ with $\kappa(z)\to\kappa(w)$ an isomorphism. The projection $V\times_X Z\to V$ is the base change of the closed immersion $Z\to X$, so F4 and step 1.1 show that, for its image $v$, the map $\kappa(v)\to\kappa(w)$ is an isomorphism. The commutative square identifies the composite $\kappa(x)\to\kappa(v)\to\kappa(w)$ with the isomorphism through $\kappa(z)$; hence $\kappa(x)\to\kappa(v)$ is an isomorphism. Thus the associated pair is a Nisnevich covering family. The same argument with F3 shows every Zariski open covering family is Nisnevich; the empty family covers the empty scheme by the pointwise definition. For the excision interface, the empty scheme and every object and arrow of a tested square lie in the chosen category, so all displayed presheaf evaluations and restriction maps are defined. Finally, contravariant functoriality in F2 makes the two restrictions to $W$ agree, giving the displayed natural map to the set of compatible pairs. Its naturality follows because restrictions commute with morphisms of presheaves. This establishes the stated constructions without asserting any square-excision/sheaf equivalence. [given, F1, F2, F3, F4, step 1.1] ∎


## Roots of unity and étale Tate twists

[Open item](item-def-etale-tate-coefficients) · level 6


### Definition
Let $n\geq 1$ be an integer invertible on a scheme $X$: its image in every local ring of $X$ is a unit. Work on a size-bounded small étale site of $X$ whose objects are étale $X$-schemes, whose covering families are jointly surjective étale families, and which includes the open restrictions and covers used below.

For an object $U$, write $\Gamma(U,\mathcal O_U)$ for its ring of global regular functions and write a superscript $\times$ for the group of units. Put $P_n(U)=\{u\in\Gamma(U,\mathcal O_U)^\times:u^n=1\}$. Pullback of regular functions along morphisms over $X$ gives its restriction maps. The **sheaf of $n$th roots of unity** is $\mu_n=aP_n$, where $a$ denotes sheafification on this site. Its abelian group law is written multiplicatively, and integer scalar multiplication means taking that power.

Let $R=a\underline{\mathbb Z/n}_{\mathrm{pre}}$ be the constant ring sheaf obtained by sheafifying the constant presheaf with value the quotient ring $\mathbb Z/n$. A sheaf of $R$-modules means a sheaf of abelian groups $M$ with an $R(U)$-module structure on every $M(U)$, such that restriction along $V\to U$ satisfies $(rs)|_V=(r|_V)(s|_V)$. The equation $u^n=1$ makes $\mu_n$ such a sheaf: local integer representatives act by powers. Below the notation $\mathbb Z/n$ for coefficients means $R$, rather than an assertion that $R(U)=\mathbb Z/n$ for every $U$.

For $j\geq1$, define $T_j(U)=\mu_n(U)^{\otimes_{R(U)}j}$, with $T_1(U)=\mu_n(U)$ and left-associated tensor products for $j>1$. Restrictions are induced by restriction in the factors and in the scalar ring. Define the **Tate twist** $\mu_n^{\otimes j}=aT_j$; this is the tensor product of sheaves of $R$-modules. Set $\mu_n^{\otimes0}=R$. Only nonnegative twists are defined here.

If $X$ is a scheme over a field $k$ and a primitive $n$th root $\zeta\in k$ is chosen, meaning an element of multiplicative order exactly $n$, then $n$ is invertible in $k$: every positive $n$ is allowed in characteristic zero, and $p\nmid n$ in characteristic $p>0$. The map $a\mapsto\zeta^a$ induces an isomorphism of $R$-module sheaves $R\cong\mu_n$ and hence, for every $j\geq0$, an isomorphism $R\cong\mu_n^{\otimes j}$ sending $1$ to $\zeta^{\otimes j}$ when $j>0$ and to $1$ when $j=0$. For $n=1$ both sides are zero modules. For $n>1$, replacing $\zeta$ by another primitive root $\zeta'=\zeta^b$ changes the weight-$j$ map by precomposition with multiplication by $b^j$ on $R$; in weight zero this is the identity. This specifies the dependence on the chosen root.

This definition alone asserts no motivic-to-étale comparison. In particular, in characteristic $p>0$ it does not treat $\mu_p$ as a prime-to-characteristic coefficient sheaf.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-ring-characteristic](https://alphabetamath.cc/item/def-ring-characteristic)

[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product)

[math:cor-finite-iterated-tensor-products-represent-multilinear-maps](https://alphabetamath.cc/item/cor-finite-iterated-tensor-products-represent-multilinear-maps)

[math:thm-unit-isomorphisms-for-module-tensor-products](https://alphabetamath.cc/item/thm-unit-isomorphisms-for-module-tensor-products)

[math:thm-characteristic-of-a-field-is-zero-or-prime](https://alphabetamath.cc/item/thm-characteristic-of-a-field-is-zero-or-prime)

[math:thm-frobenius-endomorphism-and-finite-field-automorphism](https://alphabetamath.cc/item/thm-frobenius-endomorphism-and-finite-field-automorphism)

[math:thm-root-bound-for-polynomials-over-a-domain](https://alphabetamath.cc/item/thm-root-bound-for-polynomials-over-a-domain)

[math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)

[math:ex-spectrum-product-ring-disjoint-union](https://alphabetamath.cc/item/ex-spectrum-product-ring-disjoint-union)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

### Justification
Scheme morphisms pull back regular functions by ring homomorphisms, as in [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes). These preserve units, products and $u^n=1$, so $P_n$ is a presheaf of abelian groups. By the matching-family construction and universal property in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), sections of a sheafification are locally represented by presheaf sections, and equality of representatives is witnessed after a covering refinement. To define a group operation on sheafified sections, represent its finitely many arguments on covers, pass to a common covering refinement, operate there and glue. Changing representatives gives the same result after further refinement. All group identities hold locally and hence globally. Applying the same procedure to ring operations makes $R$ a sheaf of commutative rings. Integer powers on $P_n$ factor through the quotient ring $\mathbb Z/n$ of [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) because $u^n=1$. Locally representing both an $R$-section and a $\mu_n$-section therefore defines the asserted action, independently of representatives. The module identities of [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) hold locally and hence in $\mu_n$, and the action is compatible with restriction.

The objectwise tensors use [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) and their scalar structure uses [math:thm-commutative-ring-module-structure-on-a-tensor-product](https://alphabetamath.cc/item/thm-commutative-ring-module-structure-on-a-tensor-product). For $V\to U$, regard the target tensor over $R(V)$ as an $R(U)$-module through $R(U)\to R(V)$. Sending a tuple to the tensor of its restrictions is $R(U)$-multilinear, so [math:cor-finite-iterated-tensor-products-represent-multilinear-maps](https://alphabetamath.cc/item/cor-finite-iterated-tensor-products-represent-multilinear-maps) gives the required restriction map on $T_j(U)$. Uniqueness in this universal property proves identity and composition for restrictions, including the varying scalar rings. Sheafifying gives an $R$-module sheaf by the same local action construction. For any $R$-module sheaf $N$, an $R$-multilinear morphism $\mu_n^j\to N$ induces compatible linear maps $T_j(U)\to N(U)$ by that universal property; these extend uniquely to $aT_j\to N$ by sheafification. Conversely a linear map out of $aT_j$ restricts to the original multilinear map on pure tensors. This proves the tensor-sheaf universal property and the independence of local representatives. For $j=1$, the sheafification of the sheaf $\mu_n$ is canonically itself.

For the chosen-root assertion, use the field and characteristic conventions in [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-ring-characteristic](https://alphabetamath.cc/item/def-ring-characteristic). Positive field characteristic is a prime $p$ by [math:thm-characteristic-of-a-field-is-zero-or-prime](https://alphabetamath.cc/item/thm-characteristic-of-a-field-is-zero-or-prime). If $p\mid n$, write $n=p^r m$ with $r\geq1$ and $p\nmid m$. Injectivity of the iterated Frobenius in [math:thm-frobenius-endomorphism-and-finite-field-automorphism](https://alphabetamath.cc/item/thm-frobenius-endomorphism-and-finite-field-automorphism) applied to $(\zeta^m)^{p^r}=1$ gives $\zeta^m=1$, contradicting the order $n$. Thus $n$ is nonzero in $k$ and is a unit. In characteristic zero it is nonzero directly from the definition of characteristic. The $n$ elements $1,\zeta,\ldots,\zeta^{n-1}$ are distinct. The difference of the monic polynomials $T^n-1$ and $\prod_{i=0}^{n-1}(T-\zeta^i)$ has degree less than $n$ and vanishes at those $n$ elements, so [math:thm-root-bound-for-polynomials-over-a-domain](https://alphabetamath.cc/item/thm-root-bound-for-polynomials-over-a-domain) gives $T^n-1=\prod_{i=0}^{n-1}(T-\zeta^i)$. Nonzero differences $\zeta^i-\zeta^h$ are units in $k$, and their images remain units in every $k$-algebra.

Cover an étale object $U$ by affine opens, using [math:def-scheme](https://alphabetamath.cc/item/def-scheme). On one such open write $A=\Gamma(U_0,\mathcal O_{U_0})$ and $U_0\cong\operatorname{Spec}A$, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). Its $k$-algebra structure comes from the structure morphism of the $k$-scheme, in the sense of [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). For $u\in P_n(U_0)$ the ideals $(T-\zeta^i)$ in $A[T]$ are pairwise comaximal, since their differences contain the units just identified. Apply [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals) to obtain $A[T]/(T^n-1)\cong\prod_{i=0}^{n-1}A$. Evaluation at $u$ is an $A$-algebra homomorphism from this quotient to $A$. The coordinate idempotents evaluate to elements $e_i\in A$ satisfying $e_i^2=e_i$, $e_ie_h=0$ for $i\ne h$, $\sum_i e_i=1$ and $ue_i=\zeta^i e_i$. The maps $A\to\prod_i e_iA$, $a\mapsto(ae_i)_i$, and $(a_i)_i\mapsto\sum_i a_i$ are inverse ring maps, where the unit of $e_iA$ is $e_i$. Iterating [math:ex-spectrum-product-ring-disjoint-union](https://alphabetamath.cc/item/ex-spectrum-product-ring-disjoint-union) gives a finite disjoint clopen decomposition of $U_0$ on whose $i$th part $u=\zeta^i$. Zero factors give empty parts. These parts and the affine opens are étale restrictions by [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion), and give covers on the specified site.

Consequently every $P_n$-section is locally a power of $\zeta$, and every $\mu_n$-section is locally represented by such a section. If two distinct exponents modulo $n$ represented equal powers on a nonempty piece, their difference $\zeta^i-\zeta^h$, which is a unit, would vanish there. A ring in which a unit is zero is the zero ring, so such a piece must be empty. Thus local exponents agree on overlaps as sections of $R$, including its unique section on the empty object. Sheaf gluing gives a unique inverse to $R\to\mu_n$. The map respects the $R$-action since powers add exponents, so it is an isomorphism of $R$-module sheaves.

Tensor the isomorphism and its inverse objectwise and sheafify; the multilinear universal property above shows that the resulting maps are inverse. Repeatedly applying [math:thm-unit-isomorphisms-for-module-tensor-products](https://alphabetamath.cc/item/thm-unit-isomorphisms-for-module-tensor-products) to the commutative rings $R(U)$ identifies $R(U)^{\otimes_{R(U)}j}$ with $R(U)$ by multiplication. These maps commute with restriction, so they give the asserted twist trivialization after sheafification. For $n=1$ all the modules are zero, and $j=0$ uses the identity of $R$. Finally every other primitive root is some $\zeta^b$ by the factorization just proved. In weight $j>0$ its tensor generator is $(\zeta^b)^{\otimes j}=b^j\zeta^{\otimes j}$ by multilinearity, proving the stated change-of-root rule.


## Boundaries in degree zero

[Open item](item-lem-author-c8fb25136bd5-one-boundaries) · level 6


### Statement
Under the hypotheses of [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles), the subgroup $B^r(X)=\operatorname{im}(\partial_1)\subset Z^r(X)$ is generated by the differences $d_0^1[W]-d_1^1[W]$ as $W$ ranges over the admissible integral codimension-$r$ closed subschemes of $X\times\Delta^1$.

### Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement.

**Goal:** Describe the image of the degree-one boundary.

[F1] The degree-one chain group is freely generated by the stated admissible subschemes, and $\partial_1=d_0^1-d_1^1$. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] The degree-zero chain group is $Z^r(X)$. [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles)

### Proof

1.1 By linearity, the image of a free abelian group under a homomorphism is generated by the images of its free generators. [F1]

2.1 Applying the displayed formula for $\partial_1$ and identifying its target with $Z^r(X)$ gives precisely the stated generators of $B^r(X)$. [F1, F2, step 1.1] ∎


## Reindexing a comparison with higher Chow groups

[Open item](item-lem-author-c8fb25136bd5-comparison-reindexing) · level 6


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r$ a nonnegative integer. Suppose that for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$. Then $H^{2r,r}(X)\cong H_0z^r(X,\bullet)$ and $H^{p,r}(X)=0$ for $p>2r$. No existence of such comparison isomorphisms is asserted.

### Facts & Assumptions

**Given:** The Axiom of Choice, $k$, $X$, $r$ and the stated isomorphisms.

**Goal:** Identify the index-zero case and the negative-index range.

[A1] The Axiom of Choice is assumed to meet the current Bloch-complex supplier's construction hypotheses; the index calculation itself makes no choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F1] Higher Chow groups are the homology groups of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] The homology of that complex vanishes in negative degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology)

[F3] The field and scheme-over-base interfaces fix the meaning of $k$ and $X$; smoothness and finite type refer to the structure morphism $X\to\operatorname{Spec}k$. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[F4] A group isomorphism is a bijective group homomorphism. In particular, a group isomorphic to the zero group has exactly one element and is the zero group. [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Proof

1.1 Substituting $p=2r$ makes the homological index zero, giving the first isomorphism by the definition of higher Chow groups under the construction assumption [A1]. [given, A1, F1]

2.1 If $p>2r$, then $2r-p<0$; the target of the assumed isomorphism is therefore zero, and its source has exactly one element because the isomorphism is bijective. Hence its source is the zero group. [given, F1, F2, F4] ∎


## The kernel of restriction is the supported subcomplex

[Open item](item-lem-author-75596422a482-restriction-kernel) · level 6


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $r\geq0$ an integer, and $V=U\setminus T$ with its open-subscheme structure. The kernel of $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$ is exactly the subcomplex freely generated by the admissible integral cycles contained in $T\times\Delta^\bullet$. Here all products are over $k$, and support in $T\times\Delta^n$ means containment in $p_n^{-1}(T)$ for the projection $p_n:U\times_k\Delta^n\to U$; no scheme structure on $T$ is required.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:lem-classical-irreducible-space-open-intersection-criterion](https://alphabetamath.cc/item/lem-classical-irreducible-space-open-intersection-criterion)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:ex-the-free-abelian-group-monad](https://alphabetamath.cc/item/ex-the-free-abelian-group-monad)

[math:lem-the-kernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-kernel-of-a-chain-map-is-computed-degreewise)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

**Given:** The Axiom of Choice and $k,U,T,V,r$ as stated.

**Goal:** Identify the kernel in each degree and as a complex.

[A1] Choice is carried from the Bloch-complex construction, whose admissible-face input assumes it. It is used here only to invoke that supplied construction; the coefficient and closure arguments below require no additional choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F1] Bloch's complex uses the simplex products over $k$ and has cycle groups free abelian on admissible integral closed subschemes, with zero groups in negative degrees. A free abelian group has the universal extension property; concretely it is the group of finitely supported integer combinations of its generators, with unique coefficients. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [math:ex-the-free-abelian-group-monad](https://alphabetamath.cc/item/ex-the-free-abelian-group-monad)

[F2] Restriction sends a generator to its open restriction, or to zero when empty, and is a chain map; supported generators form a subcomplex with the restricted boundary. [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

[F3] An integral scheme is nonempty, reduced and irreducible. Every nonempty open subset of an irreducible space is dense. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:lem-classical-irreducible-space-open-intersection-criterion](https://alphabetamath.cc/item/lem-classical-irreducible-space-open-intersection-criterion)

[F4] Two reduced closed subschemes of a scheme with the same underlying closed subset are equal; the precise imported uniqueness premise is recorded in External input.

[F5] Abelian groups and homomorphisms form an abelian category. The kernel of a chain map in this category is the complex of degreewise kernels with restricted differentials. In additive notation the group kernel consists of the elements sent to zero. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:lem-the-kernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-kernel-of-a-chain-map-is-computed-degreewise), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Proof

1.1 Under [A1] the supplied complexes and restriction map in [F1] and [F2] are available. By [F2], a generator $W$ restricts to zero exactly when its underlying set lies in $p_n^{-1}(T)$. Otherwise $W_V=W\cap(V\times_k\Delta^n)$ is a nonempty open subscheme of $W$, dense in $W$ by [F3]. If two generators $W,W'$ have the same nonempty restriction, their underlying closed sets are both the topological closure of that restriction in $U\times_k\Delta^n$. Both closed subschemes are reduced by [F3], so [F4], applied in this ambient scheme, gives equality as closed subschemes, hence as generators. [given, A1, F1, F2, F3, F4]

2.1 The nonzero restrictions of distinct generators are therefore distinct basis elements. In a finite sum $\sum_W a_W[W]$, each surviving coefficient after restriction is exactly $a_W$; uniqueness of coefficients in [F1] shows that restriction vanishes precisely when every coefficient of a nonsupported generator is zero. Thus the degreewise kernel is the free subgroup on the supported generators, and in negative degrees both groups are zero. By [F5] these kernels with the restricted boundary form the kernel complex; [F2] supplies exactly that boundary on the supported subcomplex. This proves the claimed equality of subcomplexes, including $T=\varnothing$, $T=U$, and $U=\varnothing$. [F1, F2, F5, step 1.1] ∎

### External input

The reduced-closed-subscheme uniqueness premise in [F4] is imported from [Stacks, Lemma 26.12.4](https://stacks.math.columbia.edu/tag/01J3). It applies to the ambient simplex product and the common topological closure in step 1.1, with reducedness supplied by integrality. The local proof establishes the kernel identity conditional on this premise; it does not reconstruct the imported result. The complete lemma and proof were read; the subsidiary results cited there were not independently checked.


## Higher-cycle localization including nonseparated schemes

[Open item](item-thm-author-75596422a482-bloch-localization-input) · level 6


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subseteq U$ open, and $r\geq0$ an integer. No separatedness of $U$ over $k$ is required. The cokernel complex of the unnormalized simplicial restriction $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$ is acyclic. Explicitly, its degree-$n$ group is $Q_n=z^r(V,n)/\operatorname{im}(j_n^*)$ with differential $[b]\mapsto[\partial b]$; acyclicity means that every element killed by this differential is a boundary, in every integer degree.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

[thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)

[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

[math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)

[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-multivariate-polynomial-ring-over-a-domain-is-a-domain)

[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

[math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex](https://alphabetamath.cc/item/def-exactness-of-a-complex-at-a-degree-and-acyclic-complex)

[math:thm-hilbert-basis-theorem](https://alphabetamath.cc/item/thm-hilbert-basis-theorem)

### External input
Use Levine's raw simplicial localization theorem in the field case of §7 of the identified primary preprint (reference 0). Its introductory Theorem 1.7 says dimension one, but §1.6 and the actual proof in §7 explicitly treat bases of dimension at most one. Section 2.2 does not impose separatedness, and Theorem 6.12's proof synchronizes the same moving map and homotopy over a finite affine cover. Deep moving and blow-up results remain external inputs. This is neither a cubical replacement nor a definition by sheaf hypercohomology. The numbered argument below checks the componentwise application and cycle conventions; it does not reconstruct Levine's moving theorem.

Reference 1 imports the identity between chain codimension and dimension of the generic local ring from [Stacks, Lemma 28.10.3](https://stacks.math.columbia.edu/tag/02IZ). It reconciles the chain codimension in the geometric dimension supplier with the stalk-dimension convention in the local Bloch definition. The imported identity has no separatedness hypothesis.

### Facts & Assumptions
**Given:** Choice and $k,U,V,r$ as in the statement. The open $V$ carries its open-subscheme structure, and $j$ is its open immersion over $k$. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

**Goal:** Apply the imported theorem with the actual dimension index and cycle convention, and identify its quotient with the stated cokernel complex.

[A1] Choice is retained to meet the hypotheses of the local Bloch definition, the smooth-component supplier and the polynomial-dimension supplier. This is the existing supplier contract, not a claim that localization requires Choice intrinsically. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Levine §7, reference 0, proves acyclicity of $z_q(V,\bullet)/\operatorname{im}(z_q(U,\bullet))$ for finite-type schemes over a semilocal regular base of dimension at most one. The proof uses Theorem 6.12, including its finite-affine-cover reduction. Lemma 7.1 and the finite-flat degree pull/push argument treat finite residue fields. Its dimension indexing over a field is ordinary dimension, and its associated complex is the unnormalized alternating-face complex.

[F2] The local Bloch complex supplies admissible integral cycles, ordered simplicial faces, local-length multiplicities and the alternating differential. The open-restriction supplier also verifies that every open of $U$ is smooth finite type, and that restriction is a chain map. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[F3] A smooth scheme over a field is regular and normal; if Noetherian, its components are disjoint integral open-and-closed subschemes. Regular includes locally Noetherian. Finite type includes quasi-compactness, so a smooth finite-type scheme is Noetherian; a quasi-compact disjoint open component cover has finitely many members. A clopen subset of a quasi-compact space is quasi-compact. Smoothness and locally finite type restrict to opens, so these clopen components are again smooth of finite type. Separatedness over $k$ means separatedness of the structure morphism; no such condition is assumed here. [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

[F4] For integral finite-type schemes over $k$, the geometric supplier gives finite dimension, invariance under nonempty open restriction, the dimension-difference formula for chain codimension, and dimension drop by one for components of an effective Cartier divisor. Reference 1 identifies that codimension with the local-ring convention in [F2]. Components carry reduced induced structures. On an integral scheme every nonempty affine open is the spectrum of a domain. [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input) [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[F5] Simplex products and coordinate faces have polynomial affine charts after elimination of one remaining barycentric coordinate. Polynomial rings over domains are domains; Hilbert basis preserves Noetherianity at each polynomial extension. Under Choice, adjoining one variable to a finite-dimensional Noetherian ring raises its dimension by one; iterate this on these charts. Thus if $T$ is integral finite type of dimension $d$, $T\times\Delta^m$ is integral of dimension $d+m$: the integral polynomial charts have nonempty pairwise intersections because their base charts do, and [F4] identifies their dimensions with the dimensions on nonempty open charts. The faces use the same ordered coordinates as [F2]. [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry) [math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain](https://alphabetamath.cc/item/cor-multivariate-polynomial-ring-over-a-domain-is-a-domain) [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring) [math:thm-hilbert-basis-theorem](https://alphabetamath.cc/item/thm-hilbert-basis-theorem)

[F6] Abelian groups form an abelian category; their cokernels are the usual image quotients, and the cokernel of a chain map is computed degreewise with induced differentials. Acyclicity is equality of cycles and boundaries in every degree. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel) [math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise) [math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex](https://alphabetamath.cc/item/def-exactness-of-a-complex-at-a-degree-and-acyclic-complex)

### Proof
1.1 By [A1] and [F3], $U$ has finitely many integral clopen components $U_a$, each smooth of finite type; put $d_a=\dim U_a$ and $q_a=d_a-r$. A nonempty $V_a=V\cap U_a$ has the same dimension as $U_a$ by [F4] and is smooth finite type by the open-restriction construction in [F2]. By [F4] and [F5], an integral closed $W\subset U_a\times\Delta^n$ has codimension $r$ in the convention of [F2] exactly when $\dim W=q_a+n$. For a face with $s$ vanishing coordinates, Levine's condition is that every intersection component has dimension at most $q_a+n-s$. This implies equality for every nonempty component: inductively, a component at the preceding face has dimension $q_a+n-s+1$, so cannot be contained in the next face, by the upper bound on that next face. The next coordinate is consequently a nonzero function on this integral reduced component; its zero scheme is an effective Cartier divisor, whose components have dimension one less by [F4]. Every component of the next intersection arises from one of these preceding components, and their finite union has the same underlying intersection. This proves the induction, with empty intersections allowed. Conversely, codimension $r$ on every ambient face gives exactly those equalities by [F4] and [F5], hence Levine's inequalities. The ordered faces and their local-length coefficients agree with [F2]. Therefore, on $U_a$ and on each nonempty $V_a$, the two unnormalized complexes coincide as $z^r(-,\bullet)=z_{q_a}(-,\bullet)$, compatibly with open restriction. If $q_a+n<0$, both degree-$n$ groups have no generators; in negative homological degrees both complexes are zero. [A1, F2, F3, F4, F5, given]

2.1 A field has only the ideals $0$ and $k$; its spectrum is one point and its local ring is regular of dimension zero. It is therefore the zero-dimensional semilocal principal-ideal-domain base permitted in [F1]. Apply [F1] on each $U_a$ with the respective integer $q_a$, including finite fields. Step 1.1 identifies its restriction quotient with $Q_a=\operatorname{coker}(z^r(U_a,\bullet)\to z^r(V_a,\bullet))$ by [F6]; if $V_a$ is empty this quotient is zero. Each cycle generator on $U$ or $V$ lies in exactly one clopen component: intersecting an irreducible support with a finite clopen partition leaves only one nonempty part. Faces and restrictions stay in that part by [F2]. Hence the cycle groups, differentials and restrictions are finite tuples of their component versions, with coordinatewise operations; the same holds for the quotient groups in [F6], so $Q$ is the finite direct sum of the $Q_a$. A cycle tuple has a boundary preimage in each coordinate because each $Q_a$ is acyclic; taking the finite tuple of these preimages proves acyclicity of $Q$ without any additional exactness theorem for infinite sums. This also proves the assertion when $U$ is empty or $V$ is empty. [F1, F2, F6, step 1.1] ∎

### Source notes
The earlier MVW citation uses that book's separated-scheme convention and did not alone justify the stated scope. Levine's separate broader simplicial input supplies it. On preprint p. 1 the introductory codimension conversion prints $d-p$ in place of $d-q$; the correct conversion used above is $z^r(U_a,n)=z_{d_a-r}(U_a,n)$. On p. 43 the final target of the finite-extension pull/push display incorrectly remains over the extension; pushforward returns to the original quotient over $U$. These two display typos do not affect the dimension-indexed localization argument. No local reconstruction of its deep moving constructions is claimed.


## Pointwise kernels of abelian sheaves

[Open item](item-lem-author-a44f2061570d-kernel-sheaf) · level 6


### Statement
For a morphism $f:F\to G$ of abelian sheaves on a small site, the presheaf $K(U)=\ker(F(U)\to G(U))$ is a sheaf and is the categorical kernel of $f$ among abelian sheaves. A morphism of abelian sheaves is a natural transformation whose components are group homomorphisms.

### Statement references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Facts & Assumptions

**Given:** A small site and a morphism $f:F\to G$ of abelian sheaves.

**Goal:** Establish the sheaf and kernel properties of the pointwise kernel $K$.

[F1] Covering-sieve matching families of an abelian sheaf have unique amalgamations. Abelian presheaves have abelian group values and restriction homomorphisms, with contravariant identity and composition laws. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

[F2] For the component $f_U:F(U)\to G(U)$, the group kernel is $\ker f_U=\{s\in F(U)\mid f_U(s)=0\}$. For an arrow $u:V\to U$, naturality is $G(u)\circ f_U=f_V\circ F(u)$. [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

**Kernel convention:** Morphisms of abelian sheaves have componentwise composition and identity maps; the zero morphism has every component zero. To say that $i:K\to F$ is a categorical kernel of $f$ means that $f\circ i=0$ and, for every abelian sheaf $H$ and morphism $h:H\to F$ with $f\circ h=0$, there is a unique sheaf morphism $q:H\to K$ with $i\circ q=h$.

### Proof

**Proof technique:** Restrict to the pointwise kernels, glue in the source sheaf, and use uniqueness in the target sheaf.

1.1 Each $K(U)=\ker f_U$ is an abelian group with the operations inherited from $F(U)$: additivity gives $f_U(0)=0$ by cancellation and then $f_U(-x)=-f_U(x)$, so zero, sums and negatives stay in the kernel. For $u:V\to U$, naturality gives $f_V(F(u)(s))=G(u)(f_U(s))=0$ when $s\in K(U)$. Thus $K(u)=F(u)|_{K(U)}$ is a homomorphism to $K(V)$, and the presheaf identity and composition laws are inherited from $F$. Now a matching family in $K$ on a covering sieve of $U$ glues uniquely to $s\in F(U)$ by [F1]. By naturality, $f_U(s)$ restricts to zero on that sieve. Uniqueness of amalgamation in $G$ gives $f_U(s)=0$, so $s\in K(U)$; uniqueness in $F$ also gives uniqueness in $K$. Hence $K$ is a sheaf. [F1, F2, given, construct, algebra]

2.1 The inclusions $i_U:K(U)\to F(U)$ are homomorphisms and commute with restrictions by construction, so they define a sheaf morphism $i:K\to F$ with $f\circ i=0$. If $h:H\to F$ is a sheaf morphism with $f\circ h=0$, define $q_U:H(U)\to K(U)$ by $q_U(t)=h_U(t)$, viewed in the kernel. This is well-defined because $f_U(h_U(t))=0$, and is a homomorphism because $h_U$ is. For $u:V\to U$, naturality of $h$ gives $K(u)(q_U(t))=F(u)(h_U(t))=h_V(H(u)(t))=q_V(H(u)(t))$, so the $q_U$ form a sheaf morphism $q$. The equation $i\circ q=h$ holds componentwise, and injectivity of each inclusion $i_U$ forces uniqueness of each $q_U$, hence of $q$. This proves the categorical kernel property in the stated convention. [F2, step 1.1, construct] ∎


## External inputs for flat descent of line bundles

[Open item](item-lem-author-8e1c0251ef0d-fpqc-descent-input) · level 6


### Statement
For the site assertions fix Grothendieck universes $U\in V$, a $U$-small category and $V$-small sets of sections, with the scheme-site and sheaf conventions stated in the scheme-site interface. A covering-family presentation specifies a set of covering families: isomorphisms cover, composites of covering families cover, and pullbacks of covering families along category arrows exist in the category and cover. Use the associated Grothendieck topology. These specified families, rather than all families generating covering sieves, are the site coverings in the hypotheses below.

Let $S$ be a scheme and let $\mathcal U=\{f_i:S_i\to S\}_{i\in I}$ be a set-indexed family of scheme morphisms. It is an fpqc covering family if every $f_i$ is flat and, for each affine open $W\subset S$, there are finitely many affine opens $V_a\subset S_{i_a}$ mapping into $W$ such that $W=\bigcup_a f_{i_a}(V_a)$. The same member may occur more than once. This condition implies joint surjectivity and does not require the individual $f_i$ to be quasi-compact.

Write $S_{ij}=S_i\times_S S_j$ and $S_{ijk}=S_i\times_S S_j\times_S S_k$, with the indicated projections $p_i,p_j$ and $p_{ij},p_{ik},p_{jk}$. A quasi-coherent module descent datum for $\mathcal U$ consists of quasi-coherent $\mathcal O_{S_i}$-modules $M_i$ and isomorphisms $\varphi_{ij}:p_i^*M_i\to p_j^*M_j$ on $S_{ij}$, with $p_{ik}^*\varphi_{ik}=p_{jk}^*\varphi_{jk}\circ p_{ij}^*\varphi_{ij}$ on every $S_{ijk}$. All iterated pullbacks are compared by their canonical identifications. A morphism to $(N_i,\psi_{ij})$ is a family of module maps $a_i:M_i\to N_i$ such that $\psi_{ij}\circ p_i^*a_i=p_j^*a_j\circ\varphi_{ij}$. Composition and identities are componentwise.

The canonical pullback functor sends a quasi-coherent $\mathcal O_S$-module $M$ to $(f_i^*M,\mathrm{can}_{ij})$ and a module map to its pullbacks. A datum is effective if it is isomorphic to the image of some $M$. For an fpqc family every such datum is effective, and this functor is fully faithful: it induces a bijection between each pair of corresponding morphism sets. If a quasi-coherent module $M$ has every $f_i^*M$ finite locally free, then $M$ is finite locally free, with no global constant-rank requirement. Every jointly surjective family of étale scheme morphisms is an fpqc covering family.

For a base scheme $B$, let $\mathcal C$ be a site with the covering-family presentation above. Assume (1) its category is a full subcategory of $\mathit{Sch}/B$, meaning it contains all $B$-morphisms between its chosen objects; (2) for every Zariski open covering $\{W_a\to T\}$ of an object $T$, some site covering $\{T_b\to T\}$ refines it, meaning there are a function $b\mapsto a(b)$ and maps $T_b\to W_{a(b)}$ whose composites with $W_{a(b)}\to T$ are the given maps $T_b\to T$; (3) $B/B$ is an object; and (4) every specified site covering is an fpqc covering family of schemes. Then the structure presheaf $\mathcal O:T\mapsto\Gamma(T,\mathcal O_T)$ is a sheaf of rings. For a $B$-morphism $h:T'\to T$, its restriction map is the homomorphism $\Gamma(T,\mathcal O_T)\to\Gamma(T',\mathcal O_{T'})$ induced by $h^\sharp$.

### Statement references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-flat-morphism-schemes](https://alphabetamath.cc/item/def-flat-morphism-schemes)

[math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

### External input
The assertions are imported established results; no local proof is claimed. The formulation interfaces for schemes over a base, flatness, quasi-coherent modules, finite local freeness, étale morphisms, module pullbacks and scheme fibre products are the suppliers in Statement references. Existence of the displayed scheme fibre products is supplied there as well.

The [fpqc family definition](https://stacks.math.columbia.edu/tag/022A) specifies the affine-open covering condition. The [module descent definitions and canonical pullback construction](https://stacks.math.columbia.edu/tag/023A) supply the datum, its morphisms, the functor and effectivity. The [covering-family site convention](https://stacks.math.columbia.edu/tag/00VG) supplies the three covering axioms and the passage to the associated topology.

The imported [fpqc descent proposition](https://stacks.math.columbia.edu/tag/023R) supplies effectivity and full faithfulness; the [finiteness descent lemma](https://stacks.math.columbia.edu/tag/05AY) supplies finite local freeness. The [direct fpqc-cover lemma](https://stacks.math.columbia.edu/tag/022C) supplies the assertion about jointly surjective étale families. The [site theorem](https://stacks.math.columbia.edu/tag/03OJ) supplies the structure-presheaf conclusion under exactly hypotheses (1)-(4). The source records delimit the statements read and the proofs not reconstructed.


## Abelian sheafification and quotient sheaves on a site

[Open item](item-thm-adjudicate-d5306176fce5-abelian-sheaf-input) · level 6


### Statement
Fix Grothendieck universes $\mathscr U\in\mathscr V$ with $\omega\in\mathscr V$. A **small site** $\mathcal C$ here is a category whose object and morphism sets belong to $\mathscr U$, equipped with a Grothendieck topology $J$. A sieve on $T$ is a set of arrows into $T$ closed under precomposition. For $u:V\to T$, the pullback sieve $u^*R$ consists of arrows $v:W\to V$ with $uv\in R$. A Grothendieck topology specifies covering sieves on each object: the maximal sieve covers; pullback preserves covering sieves; and if $R$ covers $T$ and $u^*S$ covers the domain of every arrow $u$ in $R$, then the sieve $S$ covers $T$. No scheme condition is imposed on the objects or arrows. Presheaves take values in $\mathscr V$-small sets or abelian groups. A presheaf of sets is a sheaf when every compatible family of sections on a covering sieve has a unique amalgamation on its target.

An abelian presheaf is a contravariant functor from $\mathcal C$ to abelian groups; an abelian sheaf is one whose underlying presheaf of sets is a sheaf. Morphisms are natural transformations with homomorphisms as components. There is a functor $a_{\mathrm{Ab}}$ from abelian presheaves to abelian sheaves, left adjoint to inclusion. The category of abelian sheaves is abelian. For a morphism $f:A\to B$ of abelian sheaves, its cokernel is
$$\operatorname{coker}_{\mathrm{ShAb}}(f)=a_{\mathrm{Ab}}\bigl(T\mapsto B(T)/\operatorname{im}(f_T)\bigr).$$
In particular, the quotient is sheafified; its sections are not asserted to be the objectwise quotient.

For a presheaf of sets $P$, form the abelian presheaf $\mathbb Z[P]_{\mathrm{pre}}$ by taking the free abelian group on $P(T)$ at every object $T$ and extending each restriction map to a homomorphism. Its associated abelian sheaf $a_{\mathrm{Ab}}\mathbb Z[P]_{\mathrm{pre}}$ is functorial in $P$.

### Statement references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

### External input
Reference 0 supplies associated abelian sheaves, the abelian-category assertion and the sheaf cokernel formula. Reference 1 supplies the free abelian sheaf construction and its functoriality. These are imported interfaces with the hypotheses and reading limits of the two references. No local proof of algebraic sheafification is supplied.

The general small site is defined inline above. Its sieve, topology and underlying set-sheaf conventions agree with those in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), without that definition's additional restriction to schemes. The universe convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); smallness here means that both the object set and the morphism set belong to the indicated universe. Categories, functors, natural transformations and left adjoints have the meanings of [math:def-category](https://alphabetamath.cc/item/def-category), [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor), [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation) and [math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities), respectively.

The values and free groups have the meanings supplied by [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category) and [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group). The image subgroup notation is that of [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism), and the objectwise quotient uses [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group). The category assertion has the AB1 and AB2 meaning of [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category).


## Completely decomposed proper covers and the cdh topology

[Open item](item-def-cdh-topology-interface) · level 7


### Definition
Fix a field $k$ and a suitably small category equivalent to the category of separated schemes of finite type over $k$, with the indicated fibre products, closed subschemes and finite disjoint unions represented in it. Its morphisms are $k$-scheme morphisms. As usual, a morphism is **proper** if it is separated, of finite type and universally closed: every base change has closed image on every closed subset. For $x\in X$, $\kappa(x)$ denotes the residue field of the local ring at $x$.

A morphism $p:Y\to X$ is **completely decomposed** if, for every point $x\in X$, some $y\in Y$ maps to $x$ and the induced map $\kappa(x)\to\kappa(y)$ is an isomorphism. A **completely decomposed proper morphism**, or **cdp-morphism**, is one that is both proper and completely decomposed. Its singleton family $\{Y\to X\}$ is called a proper cdh covering family.

The **cdh topology** on this category is the least Grothendieck topology for which every Nisnevich covering family and every singleton family associated to a cdp-morphism generates a covering sieve. Thus a family is a **cdh covering family** when the sieve it generates is covering in this topology. A sieve is a collection of arrows into a fixed object closed under precomposition; a Grothendieck topology specifies covering sieves satisfying maximality, pullback stability and transitivity. A Nisnevich covering family consists of étale morphisms with a residue-field-preserving lift of every point. An arbitrary cdh covering family need not itself consist of proper morphisms.

An **abstract blowup square** is a cartesian square

$$\begin{matrix}E&\longrightarrow&Y\\\downarrow&&\downarrow p\\Z&\xrightarrow{i}&X\end{matrix}$$

in which $i$ is a closed immersion, $p$ is proper, $E=Y\times_X Z$, and $p$ restricts to an isomorphism $Y\times_X (X\setminus Z)\to X\setminus Z$. Here $X\setminus Z$ is the open complement of the underlying closed subset of $Z$, and cartesian means that the displayed $E$ is the fibre product. The associated family is $\{Z\to X,Y\to X\}$; it is a cdh covering family.

A statement that a presheaf or complex satisfies descent for abstract blowup squares is a statement about those squares. Applying it to all cdh covers requires a separate descent theorem with its hypotheses, including the relevant Nisnevich condition and the intended notion of descent or hyperdescent. This definition does not assert such a theorem.

### Definition references
[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)

[math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)

[math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-direct-image-sheaf](https://alphabetamath.cc/item/def-direct-image-sheaf)

[math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

[math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

### Facts & Assumptions
**Given:** The field, small scheme category and abstract blowup square in the Definition, with the universe conventions of the scheme-site interface.

[F1] Smallness, sieves, generated topologies and the three covering-sieve axioms have the meanings in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Nisnevich covering families have the pointwise residue-field-lifting meaning in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). The residue field of a local ring $A$ is $A/\mathfrak m_A$, where $\mathfrak m_A$ is its unique maximal ideal. Scheme morphisms induce field homomorphisms on residue fields. [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring) [math:lem-local-homomorphism-residue-field-map](https://alphabetamath.cc/item/lem-local-homomorphism-residue-field-map)

[F2] Separatedness means that the diagonal is a closed immersion; the diagonal is the map whose two projections are the identity. Finite type means locally of finite type and quasi-compact. A quasi-compact morphism has quasi-compact inverse images of quasi-compact opens; a space is quasi-compact when every open cover has a finite subcover. These conditions apply both to the structural maps to $\operatorname{Spec}k$ and to the proper maps in the Definition. [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes) [math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[F3] Scheme fibre products have their universal-property meaning and exist; base change is the corresponding projection. Restricting either factor to an open subscheme restricts the product to the inverse-image open subscheme. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes) [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)

[F4] Schemes are locally affine locally ringed spaces, and scheme morphisms are morphisms of locally ringed spaces. An open subscheme carries the restricted structure sheaf, and an open immersion identifies its source with such a subscheme. A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map. Every open immersion is étale, including the empty one; étaleness has the scheme-theoretic meaning in [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[F5] The cdp terminology and the Nisnevich-plus-cdp generators follow Definition 2.10 and Remark 2.11 of [Huber–Kebekus–Kelly](https://smf.emath.fr/download/pdf/44912), with their category conventions specialized to a field.

[F6] A closed immersion is proper, with no noetherian or reducedness hypothesis. This is the explicitly imported premise [Stacks, Lemma 29.42.6](https://stacks.math.columbia.edu/tag/01W5), as recorded in External input.

[F7] Stalks are germs of sections over neighbourhoods. For a continuous map $f$, direct image is given by $(f_*\mathcal F)(O)=\mathcal F(f^{-1}(O))$. Exactness of abelian sheaves can be checked on stalks; in particular a surjective structure-sheaf map is surjective on the underlying additive stalks. The sheaf axiom is unique gluing of compatible sections over open covers. [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) [math:def-direct-image-sheaf](https://alphabetamath.cc/item/def-direct-image-sheaf) [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

### External input
The definitional convention in F5 is imported from Huber–Kebekus–Kelly, Sections 2.1–2.2, Definition 2.10 and Remark 2.11. Its field specialization agrees with the category and generators in the Definition.

The geometric premise F6 is imported from [The Stacks Project, Lemma 29.42.6 (tag 01W5)](https://stacks.math.columbia.edu/tag/01W5): a closed immersion of schemes is proper. Apply it only to the closed immersion $i:Z\to X$ in the abstract blowup square. The local argument below proves the finite-disjoint-union and covering-sieve consequences; it does not reconstruct this imported properness theorem.

### Justification
**Given:** The data of the Definition and F1–F7.

1.1 The local stalk maps give the intrinsic residue-field maps by F1. For a closed immersion $j:T\to S$ and $t\in T$, put $s=j(t)$. Every neighbourhood of $t$ is the inverse image of a neighbourhood of $s$, by the subspace topology in F4. The direct image is a sheaf: an open cover pulls back to an open cover, and compatible sections glue uniquely there by F7. The direct-image formula and germ description in F7 therefore identify $(j_*\mathcal O_T)_s$ with $\mathcal O_{T,t}$. The surjective structure-sheaf map in F4 is surjective on stalks by F7, giving a surjective local ring map $A=\mathcal O_{S,s}\to B=\mathcal O_{T,t}$. Its induced field homomorphism $A/\mathfrak m_A\to B/\mathfrak m_B$ from F1 is surjective because $A\to B$ is surjective. It is also injective: a nonzero element in its kernel would have an inverse, forcing $1=0$ in the nonzero target field. Thus every closed immersion induces residue-field isomorphisms, without a reducedness assumption. The category is small, so its sieves and topologies form sets in the specified larger universe. The topology in which every sieve covers contains the prescribed generators. Their least containing topology is the intersection of all containing topologies: maximality and pullback stability hold in each member, and if a covering sieve and all the required covering pullbacks belong to every member, transitivity puts the tested sieve in every member as well. For the geometric construction, a finite disjoint union $A\amalg B$ of schemes is the disjoint union of their spaces, with sections on an open $O$ given by $\mathcal O_A(O\cap A)\times\mathcal O_B(O\cap B)$ and componentwise restrictions. The sheaf axiom holds componentwise, and its restrictions and local rings on each summand are the original ones, so it is a scheme by F4 and F7. Morphisms out are specified componentwise; both summand inclusions are open and closed immersions. Under any base change the inverse images of the two summands are a clopen partition, identified with the two component base changes by F3. If both component maps to a scheme are proper, their disjoint-union map is of finite type: the local finite-type charts remain available on each summand, and the inverse image of a quasi-compact open is a finite disjoint union of quasi-compact spaces, hence quasi-compact. For separatedness, the self-product over that scheme is partitioned into four clopen pieces by F3. The diagonal restricts on the two equal-summand pieces to the closed diagonals of the component maps and has empty inverse image on the two mixed pieces. Its image is therefore closed and its structure-sheaf map is surjective locally on those four pieces, making it a closed immersion by F4. Finally, after every base change, the image of a closed subset is the union of the two closed component images, so the map is universally closed. This proves properness of a finite disjoint union from its definition in the item, rather than assuming it. In particular F6 and the hypothesis on $p$ make $g:W=Z\amalg Y\to X$ proper. The same finite-type and diagonal arguments for the structural maps to $\operatorname{Spec}k$ put $W$ in the chosen category. [F1, F2, F3, F4, F6, F7, construct]

2.1 For $x$ in the closed subset underlying $Z$, the closed immersion has a unique point above $x$ and its residue field is $\kappa(x)$ by F4 and the local residue-field argument in step 1.1. For $x$ in the open complement, the assumed isomorphism with the inverse image in $Y$ supplies a point with that residue field. Thus $g$ is completely decomposed. Let $R$ be the sieve generated by $g$ and $S$ the sieve generated by the two component maps. They need not be equal. Since $S\subseteq R$, covering of $S$ implies covering of $R$: the upward-closure rule follows from transitivity, because pullbacks of a larger sieve along arrows in a smaller covering sieve are maximal. Conversely, $g^*S$ contains the two summand inclusions $Z\to W$ and $Y\to W$. By the construction in step 1.1 and F4 they are open immersions, hence étale, and each point of $W$ lies in exactly one summand with unchanged local ring and residue field. They therefore form a Nisnevich covering family by F1, so $g^*S$ covers in any topology containing Nisnevich covers. Every arrow $f:T\to X$ in $R$ factors as $g\circ h$ for some $h:T\to W$, and then $f^*S=h^*(g^*S)$ covers by pullback stability. If $R$ covers, transitivity makes $S$ cover. In the cdh topology $R$ covers because $g$ is cdp, so the abstract blowup family is cdh covering. This retains the distinction between the two sieves and uses no finite-refinement theorem or square-descent equivalence. The caution about complexes in the Definition is consistent with the scheme-site interface and asserts no additional descent result. [F1, F3, F4, F5, step 1.1] ∎


## Milnor K symbols and the Nisnevich sheaf

[Open item](item-def-milnor-k-sheaf-interface) · level 7


### Definition
All input rings $A$ are commutative and unital, and ring homomorphisms preserve the unit. The tensor algebras and their quotients below are associative unital graded rings, with no commutativity assumption on these constructed rings. For a ring $A$, let $A^\times=\{u\in A:\text{ there is }v\in A\text{ with }uv=1\}$ be its abelian group of units under multiplication. Regard it as a $\mathbb Z$-module by $n\cdot u=u^n$, with the group operation written multiplicatively and the additive zero represented by $1$. Form its tensor algebra $T_{\mathbb Z}(A^\times)=\bigoplus_{n\geq 0}(A^\times)^{\otimes n}$, where positive tensor powers are iterated tensor products over $\mathbb Z$, and the degree-zero summand is $\mathbb Z$. Here the direct sum consists of tuples with only finitely many nonzero components. Multiplication concatenates elementary tensors and extends $\mathbb Z$-bilinearly; degree-zero integers act by scalar multiplication, and the empty tensor $1\in\mathbb Z$ is the unit. Let $I_A$ be the two-sided homogeneous ideal generated by $a\otimes(1-a)$ for all $a$ such that both $a$ and $1-a$ are units. Concretely, it consists of finite sums of terms $x(a\otimes(1-a))y$ with $x,y\in T_{\mathbb Z}(A^\times)$. The **naive Milnor K-ring** is the quotient ring $K_*^{M,\mathrm{naive}}(A)=T_{\mathbb Z}(A^\times)/I_A$; its degree-$d$ abelian group, for an integer $d\geq 0$, is $K_d^{M,\mathrm{naive}}(A)$. The image of $a_1\otimes\cdots\otimes a_d$ is written $\{a_1,\ldots,a_d\}$ and called a **Milnor symbol**. Thus symbols are additive in each entry with respect to multiplication of units, and $\{a,1-a\}=0$ whenever both entries are units. In degree zero the group is $\mathbb Z$.

Fix a scheme $X$ and the suitably small Nisnevich site of étale $X$-schemes specified by the Nisnevich covering interface, with the size convention of the scheme-site interface. For an object $U$ put $P_d(U)=K_d^{M,\mathrm{naive}}(\Gamma(U,\mathcal O_U))$, where $\Gamma(U,\mathcal O_U)=\mathcal O_U(U)$ is the ring of global sections of the structure sheaf. For a scheme morphism $f:V\to U$, its structure-sheaf map gives the unital ring homomorphism $f^\sharp(U):\mathcal O_U(U)\to\mathcal O_V(V)$; use the induced map on $K_d^{M,\mathrm{naive}}$ as the presheaf restriction. The **naive Milnor K-sheaf** $\mathcal K_d^{M,\mathrm{naive}}$ is the Nisnevich sheafification $aP_d=(P_d^+)^+$, with its induced abelian-group structure. Here the plus construction and its sheafification unit are those of the scheme-site interface. In particular, degree-zero sheafification is the sheafification of the constant presheaf $\mathbb Z$; its sections are not asserted to be $\mathbb Z$ on every object.

This specifies the naive convention only. In particular, the name $\mathcal K_d^M$ in a comparison must be accompanied by its intended convention; no identification with the separately constructed improved Milnor K-theory, including for local rings with finite residue fields, is asserted here. No comparison with motivic cohomology is asserted by this definition.

### Definition references
[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

### Justification
The tensor relations in [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) are preserved by concatenation: a relation in one block is the same additivity or balancing relation in the longer tensor. Iterating the two-factor construction gives the canonical reassociation maps, mutually inverse on elementary tensors, so concatenation is independent of parentheses. Both products of three elementary tensors give the same concatenated word; since elementary tensors generate additively, this proves associativity and distributivity, and the empty tensor is a unit. The finite-sum description of $I_A$ makes it a two-sided ideal. Decomposing $x$ and $y$ into homogeneous components shows that $I_A$ is homogeneous; each resulting term has degree at least two. The quotient construction of [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) therefore gives a graded ring and leaves degree zero equal to $\mathbb Z$. A unital ring homomorphism $h:A\to B$ sends units to units and induces the map $u_1\otimes\cdots\otimes u_n\mapsto h(u_1)\otimes\cdots\otimes h(u_n)$, which respects all tensor relations and concatenation. It sends each generator $a\otimes(1-a)$ of $I_A$ to the corresponding generator for $B$. Thus the formula on cosets is independent of representatives and induces a graded ring homomorphism on the quotients. These formulas preserve identities and composition. Scheme morphisms have functorial structure-sheaf maps by [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes), so applying these quotient maps to global functions makes $P_d$ a presheaf of abelian groups.

By [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), applying plus twice produces a sheaf of sets with the stated universal property. Its group operations are induced by the presheaf operations: matching families can be added, negated and given zero componentwise. Families on two covering sieves can be compared on their common covering intersection, which is covering by pullback stability and transitivity of the topology; agreement after restriction is preserved by these operations. Hence the operations are well-defined on plus classes and satisfy the group laws locally, and therefore on the classes. Restrictions preserve the operations because they restrict the matching families. Applying the same argument a second time gives an abelian-group sheaf with an additive sheafification unit. The degree-zero assertion follows because sheafification is applied to the presheaf with value $\mathbb Z$ and identity restrictions, rather than being evaluated before sheafification.

### Reading limits
Remark 6.8 of the article uses $K_d^M$ in a reported comparison; the passage does not specify the naive or improved convention. This item fixes a usable naive convention and does not attribute that choice to the article.


## The degree-zero homology quotient

[Open item](item-lem-author-c8fb25136bd5-zero-homology-quotient) · level 7


### Statement
Under the hypotheses of [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles), there is a canonical identification $H_0z^r(X,\bullet)=Z^r(X)/B^r(X)$, where $B^r(X)$ is the subgroup in [lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries).

### Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement.

**Goal:** Compute the degree-zero homology from the chain complex.

[F1] The differential $\partial_0$ is zero and homology is the kernel of the outgoing differential modulo the image of the incoming differential. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] The degree-zero group is $Z^r(X)$ and the incoming image is $B^r(X)$. [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles), [lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries)

### Proof

1.1 Since $\partial_0=0$, its kernel is all of the degree-zero chain group. [F1]

2.1 Dividing that kernel by the incoming image and applying the identifications in [F2] yields $Z^r(X)/B^r(X)$. [F1, F2, step 1.1] ∎


## Classical Chow relations and Bloch boundaries

[Open item](item-lem-author-c8fb25136bd5-bloch-classical-comparison) · level 7

### Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq0$. Let $R^r(X)\subset Z^r(X)$ be the subgroup generated by principal divisors $\operatorname{div}_Y(f)$, for integral closed $Y\subset X$ of codimension $r-1$ and nonzero rational functions $f\in k(Y)^\times$; for $r=0$ this subgroup is zero. Here a principal divisor is the codimension-one cycle of orders of $f$, defined using lengths of local rings, pushed forward from $Y$ to $X$. Then $R^r(X)=B^r(X)$, with $B^r(X)=\operatorname{im}(\partial_1)$ the degree-zero boundary subgroup. The classical Chow group is $\mathrm{CH}^r(X)=Z^r(X)/R^r(X)$.

### Statement references

[lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries)

### Facts & Assumptions

**Given:** The Axiom of Choice, the field $k$, smooth finite-type scheme $X$ and $r\geq0$ in the statement; separatedness is not assumed.

[A1] Choice discharges the explicit assumptions of the Bloch-complex, principal-divisor, finite-component and projective-line suppliers used below. No claim of minimal choice is made. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Goal:** Prove both inclusions between the principal-divisor relations and the degree-one boundaries.

[F1] On $\Delta^1$ use $t=t_0$, so the alternating boundary is the fiber at $t=0$ minus the fiber at $t=1$, with the local-length multiplicities. Degree-zero cycles are $Z^r(X)$. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles), [lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries)

[F2] Proper generically finite pushforward carries a principal divisor to the divisor of its norm. Graph closure gives the zero-minus-pole formula, with the same local-length orders, without separatedness over the field. [thm-adjudicate-16c74c1a77ef-principal-divisor-input](item-thm-adjudicate-16c74c1a77ef-principal-divisor-input)

[F3] A finite-type scheme over a field has a Noetherian underlying space by [lem-adjudicate-9ad726787189-finite-type-affine-line-geometry](item-lem-adjudicate-9ad726787189-finite-type-affine-line-geometry). Smoothness makes it regular. The finite-type dimension, codimension and Cartier-divisor formulas and the regular-local-domain assertion are supplied by [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input). Its underlying Noetherian space has finitely many irreducible components by [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components). They cannot meet: on an affine neighborhood of an intersection, the two minimal primes defining distinct components would remain distinct primes after localization at that point, contradicting that the regular local ring is a domain. This uses [math:thm-irreducible-components-and-minimal-primes](https://alphabetamath.cc/item/thm-irreducible-components-and-minimal-primes), [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection) and [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization). Consequently each component is closed with closed complement, hence open; it is reduced and irreducible and therefore integral. We may calculate cycles separately on these finitely many clopen components. No perfect-field assumption is used.

[F4] Use the reciprocal-chart projective line of [math:ex-projective-line-by-gluing-affines](https://alphabetamath.cc/item/ex-projective-line-by-gluing-affines). The reduced closure, proper projection, generic-fiber classification, dimension alternatives and product case are supplied by [lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection). The same lemma verifies the coordinate isomorphism $t=u/(u-1)$ from the complement of $u=1$, including the scheme-theoretic endpoint fibers and their local equations.

[F5] For an integral finite-type $k$-scheme $T$ of dimension $d$, the affine-line product $T\times_k\mathbf A^1$ is integral and finite type of dimension $d+1$, by [lem-adjudicate-9ad726787189-finite-type-affine-line-geometry](item-lem-adjudicate-9ad726787189-finite-type-affine-line-geometry). Apply this together with [F3] before using any ambient dimension-difference formula.

### Proof

1.1 Work on one integral component of $X$ of dimension $d$. By [F5], $X\times\mathbf A^1_t$ is integral and finite type of dimension $d+1$. Let $W\subset X\times\mathbf A^1_t$ be an admissible codimension-$r$ generator. The codimension formula of [F3] now gives $\dim W=(d+1)-r$. Let $\overline W$ be its reduced closure in $X\times\mathbf P^1_t$ and $Y\subset X$ its reduced projection image. By [F4], the map $\overline W\to Y$ is proper dominant and its generic fiber is either $\operatorname{Spec}L$ for a finite extension $L/k(Y)$, or $\mathbf P^1_{k(Y)}$. Accordingly $\dim Y=\dim W$ or $\dim W-1$. In the latter case [F4] gives $W=Y\times\mathbf A^1$; its two face cycles are both $[Y]$, since quotienting $\mathcal O_{Y\times\mathbf A^1,\eta_{Y\times\{a\}}}$ by $t-a$ gives $k(Y)$ of length one. Thus its boundary is zero. This handles all generators when $r=0$: then $\dim W=d+1$ whereas $\dim Y\leq d$. [A1, F1, F3, F4, F5]

1.2 Conversely, for $r>0$ let $Y\subset X$ be integral of codimension $r-1$ and $f\in k(Y)^\times$. Form the graph closure $G\subset Y\times\mathbf P^1_u$ of [F2]. Remove the fiber $u=1$ and use $t=u/(u-1)$ to identify $\mathbf P^1_u\setminus\{1\}$ with $\mathbf A^1_t$. If $f\ne1$, this open part of $G$ is a nonempty integral closed subscheme of $X\times\mathbf A^1_t$. The proper birational graph projection in [F2] and [F3] give $\dim G=\dim Y=d-r+1$, and the same dimension holds on this nonempty open. The ambient space is integral of dimension $d+1$ by [F5], so [F3] gives codimension $r$. Its $t=0,1$ intersections are $G_0,G_\infty$. Each is empty or an effective Cartier divisor on the integral finite-type $G$; its components therefore have dimension $d-r$ by [F3] and codimension $r$ in the endpoint copy of $X$. Thus the cycle is admissible with the endpoint scheme structures and lengths of [F1]. Its boundary equals $\operatorname{div}_Y(f)$ by the graph formula. If $f=1$, the divisor is zero and no generator is needed. Thus every principal-divisor relation is a boundary. [A1, F1, F2, F3, F4, F5]

2.1 For the equal-dimensional case of step 1.1 $\overline W\to Y$ is proper dominant generically finite and $Y$ has codimension $r-1$. The rational function $h=t/(t-1)$ on $\overline W$ is nonzero and defined as a rational function because admissibility excludes $W$ from either endpoint. Its divisor is the zero fiber minus the one fiber, with exactly the lengths in [F1]; it is invertible near infinity. By the norm formula, pushing this cycle to $X$ gives $\partial[W]=\operatorname{div}_Y(\operatorname{Nm}_{k(W)/k(Y)}h)$. Thus every boundary lies in $R^r(X)$, with zero as already shown in the product case. [F1, F2, F4, step 1.1]

3.1 The two inclusions prove $R^r(X)=B^r(X)$ for $r>0$, and step 1.1 proves it for $r=0$ because $R^0(X)=0$. The finite clopen decomposition of [F3] gives the equality on $X$ and the stated ordinary rational-equivalence quotient. [F3, step 1.1, step 1.2, step 2.1] ∎

### Source notes
MVW Definition 17.1 and its following discussion identify degree-zero higher Chow groups with the classical Chow group under the book's separated-scheme convention. The reference records that scope and the endpoint description, not a proof for nonseparated schemes. The current local graph-and-norm argument retains smooth finite-type schemes without separatedness, under the explicit Choice hypotheses of its suppliers. It does not invoke localization or an identification with a separately constructed motivic theory.


## Restriction modulo its kernel

[Open item](item-lem-author-75596422a482-quotient-inclusion) · level 7


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $V=U\setminus T$ with its open-subscheme structure, and $r\geq0$ an integer. Write $C=z^r(U,\bullet)$, $D=z^r(V,\bullet)$, $j^*:C\to D$ for restriction, and $K=\ker j^*$ for its kernel subcomplex. The induced map $\bar j:C/K\to D$, given in degree $n$ by $\bar j_n(a+K_n)=j_n^*(a)$, is a degreewise injective chain map. It has the same cokernel complex as $j^*$: both have degree-$n$ term $D_n/\operatorname{im}(j_n^*)$ and differential induced by that of $D$.

### Statement references

[lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[math:def-quotient-complex](https://alphabetamath.cc/item/def-quotient-complex)

[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups](https://alphabetamath.cc/item/ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

**Given:** The Axiom of Choice and $k,U,T,V,r,C,D,j^*,K$ as stated. Write $d_C,d_D$ for the differentials of $C,D$.

**Goal:** Construct the induced chain map, prove degreewise injectivity, and identify its cokernel.

[A1] Choice is inherited from the supplied Bloch-complex and restriction construction through the kernel lemma. The quotient and cokernel argument below uses no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F1] $C,D$ are complexes of abelian groups, $j^*$ is their restriction chain map, and $K$ is its kernel subcomplex, with $K_n=\ker(j_n^*)$. [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F2] For a subcomplex $K\subset C$, the quotient complex $C/K$ has degree-$n$ term $C_n/K_n$ and differential $\bar d_C(a+K_n)=d_Ca+K_{n-1}$. Its quotient projection is a chain map. [math:def-quotient-complex](https://alphabetamath.cc/item/def-quotient-complex)

[F3] Abelian groups form an abelian category. For an abelian-group homomorphism $f:G\to H$, the quotient $G/\ker f$ consists of additive cosets, the canonical map to the image is $a+\ker f\mapsto f(a)$, and a cokernel is $H/\operatorname{im}f$. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups](https://alphabetamath.cc/item/ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups)

[F4] The cokernel of a chain map in an abelian category is computed degreewise, with the differential induced from the target complex. [math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

### Proof

1.1 Use the supplied construction under [A1] and the quotient complex in [F2]. For every integer $n$, define $\bar j_n(a+K_n)=j_n^*(a)$. If $a+K_n=a'+K_n$, then $a-a'\in K_n=\ker(j_n^*)$, so $j_n^*(a)=j_n^*(a')$; hence the rule is well-defined and is a homomorphism by additivity. Moreover, equality $\bar j_n(a+K_n)=\bar j_n(b+K_n)$ implies $j_n^*(a-b)=0$, so $a-b\in K_n$ and the two cosets are equal. Thus $\bar j_n$ is injective. Every $j_n^*(a)$ is the image of $a+K_n$, so $\operatorname{im}(\bar j_n)=\operatorname{im}(j_n^*)$. [A1, F1, F2, F3, algebra]

2.1 For every coset $a+K_n$, the chain-map identity for $j^*$ and the quotient differential give $d_D\bar j_n(a+K_n)=d_Dj_n^*(a)=j_{n-1}^*(d_Ca)=\bar j_{n-1}\bar d_C(a+K_n)$. Thus $\bar j$ is a chain map. By [F3] and [F4], the cokernel complexes of $j^*$ and $\bar j$ have terms $D_n/\operatorname{im}(j_n^*)$ and $D_n/\operatorname{im}(\bar j_n)$, respectively. Their images agree by step 1.1, and both differentials send the class of $b$ to the class of $d_Db$. These chosen cokernel models are therefore the same complex, proving the claim. [F1, F2, F3, F4, step 1.1] ∎


## Evaluation preserves kernels

[Open item](item-lem-author-a44f2061570d-evaluation-left-exact) · level 7


### Statement
For an object $U$ of a small site, evaluation $F\mapsto F(U)$ is additive and preserves kernels of morphisms of abelian sheaves. Consequently, once the category of abelian sheaves is known to be abelian, evaluation is left exact: it preserves exact sequences of the form $0\to F'\to F\to F''$.

### Facts & Assumptions

**Given:** An object $U$ of a small site $(\mathcal C,J)$, with the relative-smallness conventions of [F0]. The assertion about left exactness is conditional on the abelian-category hypothesis in the Statement; no abelianness theorem for sheaves is assumed to prove additivity or kernel preservation.

**Goal:** Prove the stated properties of evaluation, with left exactness understood as finite-limit preservation.

[F0] Small sites, covering sieves, compatible matching families and unique amalgamation are as defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F1] Kernels of abelian sheaf morphisms are computed objectwise, as categorical kernels. [lem-author-a44f2061570d-kernel-sheaf](item-lem-author-a44f2061570d-kernel-sheaf) The kernel of $f$ means an arrow $k$ with $fk=0$ through which every arrow killed by $f$ factors uniquely; cokernels have the dual universal property. [math:def-kernels-and-cokernels-as-equalizers-and-coequalizers](https://alphabetamath.cc/item/def-kernels-and-cokernels-as-equalizers-and-coequalizers)

[F2] Write $\mathbf{Ab}$ for the category of abelian groups and group homomorphisms, with the size bounds of [F0]. An abelian sheaf on $(\mathcal C,J)$ means a contravariant functor $F:\mathcal C\to\mathbf{Ab}$ whose underlying set-valued presheaf has unique amalgamation for every matching family on a covering sieve. Thus its restriction maps are group homomorphisms. [math:def-group](https://alphabetamath.cc/item/def-group) [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor) The category $\mathbf{Ab}$ is abelian, with the usual pointwise addition of homomorphisms. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[F3] Let $\operatorname{ShAb}(\mathcal C)$ have these sheaves as objects and natural transformations with group-homomorphism components as morphisms. Identities and composition are componentwise. Evaluation $\operatorname{ev}_U$ sends $F$ to $F(U)$ and a morphism $a:F\to G$ to $a_U:F(U)\to G(U)$. For parallel morphisms, define $(a+b)_V=a_V+b_V$, $(-a)_V=-a_V$ and $(0_{F,G})_V=0$ at every object $V$. [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation) [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[F4] A preadditive category has abelian hom-groups and bilinear composition. A functor between preadditive categories is additive when its maps on hom-groups are group homomorphisms. [math:def-preadditive-category](https://alphabetamath.cc/item/def-preadditive-category) [math:def-additive-functor](https://alphabetamath.cc/item/def-additive-functor)

[F5] An abelian category is additive; an additive category is preadditive with finite biproducts. Left exact means preservation of every existing finite limit. An additive functor between additive categories is left exact exactly when it preserves kernels. [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category) [math:def-additive-category](https://alphabetamath.cc/item/def-additive-category) [math:def-left-exact-and-right-exact-functor](https://alphabetamath.cc/item/def-left-exact-and-right-exact-functor) [math:thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels](https://alphabetamath.cc/item/thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels)

[F6] A sequence in an abelian category is called exact when it is exact at every interior object; exactness of $A\xrightarrow{i}B\xrightarrow{p}C$ at $B$ means that $\operatorname{im}(i)$ and $\ker(p)$ represent the same subobject of $B$, that is, their inclusion arrows differ by an isomorphism of their domains commuting with the maps into $B$. The image arrow is the kernel of a cokernel. [math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category](https://alphabetamath.cc/item/def-exact-sequence-and-short-exact-sequence-in-an-abelian-category) [math:def-exactness-at-a-node](https://alphabetamath.cc/item/def-exactness-at-a-node) [math:def-image-and-coimage-in-a-category-with-kernels-and-cokernels](https://alphabetamath.cc/item/def-image-and-coimage-in-a-category-with-kernels-and-cokernels)

[F7] Monic means left cancellable. In an abelian category a morphism is monic exactly when its kernel is zero, and every monomorphism is a kernel of its cokernel; hence a monomorphism itself represents its image subobject, using [F6]. [math:def-monomorphism-and-epimorphism](https://alphabetamath.cc/item/def-monomorphism-and-epimorphism) [math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero](https://alphabetamath.cc/item/cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero) [math:thm-every-monomorphism-is-the-kernel-of-its-cokernel](https://alphabetamath.cc/item/thm-every-monomorphism-is-the-kernel-of-its-cokernel)

### Proof

**Proof technique:** Construct the evaluation functor on morphisms, evaluate kernels, and apply the additive kernel criterion before checking the sequence formulation.

1.1 By [F3], evaluation preserves identities and composition, so it is a functor. Sums and negatives in [F3] are again group homomorphisms because the target groups are abelian; the naturality equation for a sum or negative follows by adding or negating the component naturality equations. Thus these operations give abelian hom-groups, and composition is bilinear because every component is a homomorphism. This makes $\operatorname{ShAb}(\mathcal C)$ preadditive. Evaluation preserves these operations componentwise, so it is additive in the sense of [F4]. The presheaf $V\mapsto 0$ with unique restrictions has unique amalgamation, and is a zero object because maps to and from it are unique; it evaluates to the zero group. By [F1], evaluation of each kernel inclusion is the kernel inclusion of the evaluated homomorphism. Any other choice of categorical kernel is isomorphic to that kernel by its universal property, and functors preserve isomorphisms, so evaluation preserves kernels independently of that choice. [F0, F1, F2, F3, F4, given]

2.1 Now assume $\operatorname{ShAb}(\mathcal C)$ is abelian. It and $\mathbf{Ab}$ are additive by [F2] and [F5], so [F5] applied to step 1.1 proves that evaluation preserves finite limits. For the sequence assertion, take an exact $0\to A\xrightarrow{i}B\xrightarrow{p}C$. By [F6], $\ker(i)=\operatorname{im}(0\to A)=0$: the identity of $A$ is a cokernel of $0\to A$, and its kernel is zero by the universal properties in [F1]. Hence $i$ is monic by [F7], so $i$ represents its image subobject. Exactness at $B$ in [F6] then identifies $i$ with a kernel of $p$, including the arrow into $B$. Step 1.1 therefore makes $i_U$ a kernel of $p_U$. Such a kernel homomorphism is injective and has image $\ker(p_U)$: compare its universal property with the subgroup inclusion $\ker(p_U)\hookrightarrow B(U)$. Together with preservation of the zero object in step 1.1 this gives exactness of $0\to A(U)\to B(U)\to C(U)$ at both interior groups, as required. [F1, F2, F5, F6, F7, step 1.1] ∎


## Topology generators on general scheme categories

[Open item](item-def-adjudicate-0a21e0b4be3b-general-scheme-topologies) · level 7


### Definition
Fix universe size bounds and a specified small category $\mathcal C$ of schemes and scheme morphisms. A family below is set-indexed and consists of arrows of this category. The sieve generated by a family consists of the arrows that factor through one of its members. The topology generated by specified families is the least Grothendieck topology in which their generated sieves cover.

An étale covering family $\{U_i\to V\}$ consists of étale morphisms whose images together contain every point of $V$. The étale topology is generated by these families. For the small étale site of $X$, the category is a specified size-bounded category of étale $X$-schemes and $X$-morphisms; a big étale site uses a separately specified category of schemes over its base.

A Nisnevich covering family is an étale family with a residue-field-preserving lift of every point: for each $v\in V$, some $u\in U_i$ lies over $v$ and the induced map $\kappa(v)\to\kappa(u)$ is an isomorphism. Here $\kappa(v)$ is the local ring at $v$ modulo its maximal ideal. The Nisnevich topology is generated by these families.

A scheme is qcqs when it is quasi-compact and quasi-separated. A morphism is finitely presented when it is locally of finite presentation, quasi-compact and quasi-separated. Proper means separated, of finite type and universally closed. For a qcqs target $V$, a cdp generating family $\{Y_i\to V\}$ consists of proper finitely presented morphisms of qcqs schemes and is completely decomposed: each point of $V$ has a residue-field-preserving lift to some $Y_i$. On a specified small category $\mathcal D$ of qcqs schemes, let $J_{\mathcal D}$ be the topology generated by its available cdp families and Nisnevich covering families. This is the qcqs cdh convention; finite presentation on the cdp generators is retained.

For the extension to schemes that need not be qcqs, require that $\mathcal C$ be a full category of schemes, or a full category of schemes over one fixed base, with the following properties: every open subscheme of an object is again an object, and every object admits a set-indexed open covering by qcqs objects of $\mathcal C$. All morphisms are taken in the indicated ambient category. Put $\mathcal D=\mathcal C_{\mathrm{qcqs}}$, the full category on its qcqs objects, with the topology $J_{\mathcal D}$ just defined. These are explicit hypotheses on the chosen category, not consequences of its smallness.

Define the Zariski-local cdh extension $J_{\mathcal C}^{\mathrm{loc}}$ as follows. For a sieve $R$ on $V\in\mathcal C$ and a morphism $f:T\to V$ with $T\in\mathcal D$, define a sieve on $T$ in $\mathcal D$ by $R_{f,\mathcal D}=\{a:W\to T\mid W\in\mathcal D,\ f\circ a\in R\}$. Declare $R$ covering precisely when $R_{f,\mathcal D}\in J_{\mathcal D}(T)$ for every such $f$. This is a Grothendieck topology. If $V$ is qcqs, the condition is equivalent to $R_{\mathrm{id}_V,\mathcal D}\in J_{\mathcal D}(V)$, so it restricts exactly to the stated qcqs topology. For arbitrary $V$, it is equivalent to requiring $R_{j_\alpha,\mathcal D}\in J_{\mathcal D}(V_\alpha)$ for all members of one, equivalently every, qcqs open cover $\{j_\alpha:V_\alpha\hookrightarrow V\}$ in $\mathcal C$.

For a category without these extension hypotheses, the least topology generated by its available Nisnevich families and its cdp families with qcqs targets still exists; call it the available-family generated topology. Its identification with the Zariski-local extension is not asserted. Categories, size bounds and the chosen construction are part of the site data. No identification of small and big sites, ambient-site cohomology comparison, descent theorem or hyperdescent theorem is supplied here.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)

[math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

### External input
Reference 0 supplies the étale covering and small-category conventions. Reference 1 supplies only the qcqs cdp/cdh generator convention and its finite-presentation qualification; its assertion that cdh is defined on all schemes is not used as a proof of an extension construction. Reference 2 supplies finite-presentation terminology. The generated-topology argument and the explicitly specified Zariski-local extension, including its restriction and open-cover criteria, are justified locally below.

### Facts & Assumptions
**Given:** The size bounds, scheme category and covering-family conventions in the Definition; for the local extension, also the stated fullness, open-subscheme and qcqs-open-cover hypotheses on $\mathcal C$, with $\mathcal D=\mathcal C_{\mathrm{qcqs}}$.

[F1] Small categories of schemes, size bounds, sieves and the three Grothendieck-topology axioms have the meanings of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Pullback of a sieve along $f:T\to V$ means the sieve of arrows $a$ with $f\circ a$ in the given sieve; this does not require fibre products in the category. Universe closure, including power sets and indexed unions, has the meaning of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). The generated sieve is specified explicitly in the Definition.

[F2] Nisnevich covering families and their residue-field maps are defined by [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). That interface's local justification also proves that Zariski open covering families are Nisnevich families. Étale morphisms are defined by [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). Reference 0 fixes the covering-family convention for either a chosen small or big étale category.

[F3] Proper morphisms are defined by [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism). Local finite presentation, quasi-compact and quasi-separated morphisms, and qcqs schemes have the meanings of [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism), [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) and [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). References 1 and 2 fix the qcqs cdh and finite-presentation conventions.

[F4] An open immersion identifies its source with an open subscheme, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes). Scheme morphisms are continuous on underlying spaces, with restrictions to inverse images of opens; these are morphisms of the underlying locally ringed spaces as in [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes). Restricting the structure-sheaf map to these opens gives the restricted morphism, with the same local stalk maps. In the extension setting, every such inverse-image open belongs to $\mathcal C$ and has a qcqs open cover by the explicit category hypotheses. Fullness ensures that the resulting restricted arrows between objects belong to $\mathcal C$ and, when both objects are qcqs, to $\mathcal D$.

### Justification
**Given:** The category and generators of the Definition, with F1–F4; the additional category hypotheses are imposed whenever $J_{\mathcal C}^{\mathrm{loc}}$ is used.

1.1 For each specified family the arrows factoring through its members form a sieve, since precomposition preserves such a factorization. By F1 the size bounds make the sieves and topology assignments sets in the chosen larger universe. The assignment declaring every sieve covering is a Grothendieck topology containing the generators. Intersect all topologies containing them, object by object: maximality and pullback stability hold in every member, and if a sieve is locally covering along an intersection-covering sieve, transitivity in every member makes the tested sieve belong to every member. Thus the intersection is the unique least containing topology. This constructs the étale and Nisnevich topologies, $J_{\mathcal D}$, and the available-family generated topology on any specified category. F2 and F3 specify exactly their families; no extension or comparison follows merely from this intersection argument. [F1, F2, F3, given]

2.1 For the extension, every $R_{f,\mathcal D}$ is a sieve by precomposition. The maximal sieve passes every test. Pullback stability follows because testing $g^*R$ at $f$ is testing $R$ at $g\circ f$. For transitivity, let $S$ pass every test and suppose $h^*R$ passes every test for each $h$ in $S$. Fix $f:T\to V$ with $T\in\mathcal D$. The sieve $S_{f,\mathcal D}$ covers $T$ in $J_{\mathcal D}$. For each $a:W\to T$ in that sieve, $f\circ a$ lies in $S$, so testing $(f\circ a)^*R$ at $\mathrm{id}_W$ shows that $a^*R_{f,\mathcal D}=R_{f\circ a,\mathcal D}$ covers $W$. Transitivity in $J_{\mathcal D}$ gives $R_{f,\mathcal D}$ covering. This proves all three topology axioms. When $V\in\mathcal D$, the identity test is necessary and, by pullback stability in $J_{\mathcal D}$, sufficient; moreover a sieve on $V$ in $\mathcal D$ generates a sieve in $\mathcal C$ whose restriction is exactly the original sieve, since $\mathcal D$ is full. Hence the restriction is exactly $J_{\mathcal D}$. Finally, fix a qcqs open cover $\{j_\alpha:V_\alpha\hookrightarrow V\}$. Passing every test implies passing its $j_\alpha$ tests. Conversely assume these tests pass and fix $f:T\to V$ with $T$ qcqs. By F4 the inverse images $f^{-1}(V_\alpha)$ are open objects and admit qcqs open covers. Take all qcqs open subschemes $W\subseteq T$ whose images lie in at least one $V_\alpha$; they form a set-indexed open covering of $T$, so F2 makes their generated sieve covering in $J_{\mathcal D}$. For every such $W$, select one witnessing index only for this individual argument. The arrow $W\to V$ factors through $V_\alpha$, and pullback stability in $J_{\mathcal D}$ shows that $R_{f,\mathcal D}$ restricts to a covering sieve on $W$. Further pullback gives the same conclusion for every arrow of the generated covering sieve. Transitivity now makes $R_{f,\mathcal D}$ covering on $T$. Thus $R$ passes every test. This proves the criterion for one, hence every, qcqs open cover, with no simultaneous choices and no cohomological comparison. [F1, F2, F4, step 1.1, given] ∎


## Degree zero and negative homology of the cycle complex

[Open item](item-lem-bloch-chow-and-negative-range) · level 8


### Statement
Assume the Axiom of Choice. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$ an integer. With ordinary Chow group $\mathrm{CH}^r(X)$ defined as codimension-$r$ cycles modulo principal-divisor rational equivalence as specified by the classical relation comparison, the identity on cycles induces $H_0z^r(X,\bullet)\cong\mathrm{CH}^r(X)$, and $H_nz^r(X,\bullet)=0$ for integers $n<0$. The degree-zero identification commutes with restriction to every open subscheme $V\subset X$. Consequently, if for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$, then $H^{2r,r}(X)\cong\mathrm{CH}^r(X)$ and $H^{p,r}(X)=0$ for $p>2r$. The existence of the comparison isomorphisms is not asserted.

### Statement references

[lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Facts & Assumptions

**Given:** The Axiom of Choice and $k$, $X$ and $r$ as in the statement; for the final conditional assertion, the stated groups and comparison isomorphisms.

**Goal:** Identify degree-zero homology, prove its compatibility with open restriction, and derive the negative and reindexed vanishing statements.

[A1] Choice meets the explicit construction assumption of the Bloch-complex definition and the hypotheses of the classical relation comparison and comparison-reindexing suppliers. The quotient and index arguments below make no further choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F1] Degree-zero homology is $Z^r(X)/B^r(X)$, where $Z^r(X)$ is the group of codimension-$r$ cycles and $B^r(X)=\operatorname{im}\partial_1$. [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)

[F2] The local graph-and-norm comparison identifies $B^r(X)$ with the subgroup $R^r(X)$ of principal-divisor relations defining $\mathrm{CH}^r(X)=Z^r(X)/R^r(X)$. This applies to every smooth finite-type $k$-scheme, without a separatedness hypothesis, including the case $r=0$. [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[F3] Negative homology vanishes, and the stated higher-Chow comparison reindexes degree $2r$ to degree zero and $p>2r$ to negative homological degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F4] Higher Chow groups are defined as homology of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F5] For an open subscheme $V\subset X$, the open-restriction supplier verifies that $V$ is smooth of finite type over $k$ and that cycle restriction gives a chain map $j^*:z^r(X,\bullet)\to z^r(V,\bullet)$, sending an empty restriction to zero. A chain map commutes with the differentials. [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[F6] The field and scheme-over-base interfaces fix the meaning of $k$ and $X$; smoothness and finite type refer to the structure morphism $X\to\operatorname{Spec}k$. An open immersion identifies its source with an open subscheme of the target. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[F7] Quotient groups have cosets as elements and the induced addition of representatives. All cycle groups here are abelian, so their subgroups are normal. A group isomorphism is a bijective group homomorphism. [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group), [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Proof

1.1 Under [A1], the two relation subgroups agree by [F2], so the identity on $Z^r(X)$ identifies the quotient in [F1] with the ordinary Chow group: the map $[a]_{B^r(X)}\mapsto[a]_{R^r(X)}$ is a bijective homomorphism by [F7]. For an open immersion $j:V\hookrightarrow X$, [F5] verifies the smooth finite-type hypotheses on $V$, so [F1] and [F2] also apply to $V$. Since $j^*$ is a chain map, $j_0^*(\partial_1 b)=\partial_1(j_1^*b)$; thus it sends $B^r(X)$ into $B^r(V)$. Equality with $R^r$ on both schemes shows that cycle restriction also preserves principal-divisor relations. Hence the quotient maps are well-defined: changing $a$ by a boundary changes $j_0^*a$ by a boundary, and the same holds for rational equivalence. Starting with either quotient, both composites send a cycle class to the class of the same restricted cycle. This proves compatibility of the identity-on-cycles identification with open restriction, including empty opens. [A1, F1, F2, F5, F6, F7]

2.1 Negative homology vanishes by [F3]. Under the additional comparison isomorphisms and [A1], [F3] identifies the degree-$2r$ group with degree-zero homology and gives zero for $p>2r$; here the higher Chow index is $2r-p<0$ by [F4]. Composing the degree-zero identification with step 1.1 gives the asserted ordinary Chow-group isomorphism. [given, A1, F3, F4, F7, step 1.1] ∎


## Cycle complexes with fixed support

[Open item](item-def-supported-higher-cycle-complex) · level 8


### Definition
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $V=U\setminus T$ with its open-subscheme structure, and $r\geq0$ an integer. All products are over $k$. Use the algebraic simplices $\Delta^n$, admissible integral closed subschemes and alternating face differentials of the unnormalized Bloch complex $z^r(U,\bullet)$. For $n\geq0$, define $z_T^r(U,n)$ to be the free subgroup on its admissible generators whose underlying sets lie in $p_n^{-1}(T)$, where $p_n:U\times_k\Delta^n\to U$ is the projection. The notation $T\times\Delta^n$ for this support condition means $p_n^{-1}(T)$; it requires no scheme structure on $T$.

Write $\partial_{T,n}$ for the restriction of the ambient boundary to these subgroups. Put $z_T^r(U,n)=0$ for $n<0$ and $\partial_{T,n}=0$ for $n\leq0$. Define the supported higher Chow groups by
$$\mathrm{CH}_T^r(U,n)=H_n(z_T^r(U,\bullet))=\ker(\partial_{T,n})/\operatorname{im}(\partial_{T,n+1}),\qquad n\in\mathbb Z.$$
Here the kernel consists of elements sent to zero and the image consists of boundary values, as subgroups of $z_T^r(U,n)$. In particular these groups vanish for $n<0$. Put $\mathrm{CH}_T^r(U)=\mathrm{CH}_T^r(U,0)$. Its cohomological indexing is $H_T^{p,r}(U;z)=\mathrm{CH}_T^r(U,2r-p)$ for every integer $p$.

The restriction along the open immersion $j:V\hookrightarrow U$ is the chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$. It has homotopy-fiber model $F_n=z^r(U,n)\oplus z^r(V,n+1)$ for every integer $n$, with differential $(a,b)\mapsto(\partial a,j^*a-\partial b)$. The direct sum here is the group of pairs with componentwise addition. The inclusion $z_T^r(U,\bullet)\to F$, $a\mapsto(a,0)$, is a quasi-isomorphism, so the displayed supported groups are also the homology groups of this derived restriction fiber, with the same indexing. A quasi-isomorphism is a chain map inducing isomorphisms on all homology groups.

### Definition references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[lem-author-75596422a482-quotient-inclusion](item-lem-author-75596422a482-quotient-inclusion)

[lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:def-chain-map](https://alphabetamath.cc/item/def-chain-map)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Facts & Assumptions

**Given:** The Axiom of Choice and $k,U,T,V,r$ as in the definition.

**Goal:** Justify the supported complex, its homology and the fiber comparison.

[A1] Choice is retained to invoke the supplied Bloch construction and localization theorem. The support and homology definitions introduce no additional choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

[F1] The unnormalized Bloch complex supplies the simplices, admissible generators and alternating face boundaries, with zero groups in negative degrees. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] Face boundaries preserve support, open restriction is a chain map with smooth finite-type target, and its kernel is exactly the supported complex with the set-theoretic support convention used above. [lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support), [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F3] The quotient by that kernel embeds into the target with the same cokernel complex as restriction. [lem-author-75596422a482-quotient-inclusion](item-lem-author-75596422a482-quotient-inclusion)

[F4] The restriction cokernel is acyclic by localization, including for nonseparated smooth finite-type schemes. For a chain map of abelian groups with acyclic cokernel, the inclusion of its kernel into the displayed homotopy-fiber model, $a\mapsto(a,0)$, induces isomorphisms on all homology groups. [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input), [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[F5] Abelian groups form an abelian category. A chain complex has degree-minus-one differentials with consecutive composite zero; a chain map commutes with them. Homology is the quotient of cycles by boundaries, and kernels and images of group homomorphisms have their usual elementwise meanings. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[F6] A free abelian group on a set has the universal extension property for maps from that set to abelian groups; here the supported generators are a subset of the ambient free basis. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F7] The field structure and the $k$-scheme structure are those of the stated field and structure morphism to $\operatorname{Spec}k$. Smoothness and finite type refer to this structure morphism; $V$ carries its open-subscheme structure and $j$ is its open immersion. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[F8] Integral schemes are nonempty, reduced and irreducible; the cycle generators are closed subschemes, understood via closed immersions into the ambient simplex product. Scheme fibre products, their projections and their existence supply these ambient products over $k$. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

### Justification
Under [A1], the field and geometric data of [F7] and [F8] meet the hypotheses of [F1] and [F2]; in particular the open complement $V$ is again smooth of finite type. By [F2] and [F6], the displayed supported groups form a subcomplex with the restricted differential. Its consecutive differentials compose to zero because those of the ambient complex do. Consequently its boundaries lie in its cycles, and [F5] supplies precisely the homology quotient displayed in the Definition. In negative degrees the cycles and boundaries are zero, so its homology is zero there.

The hypotheses of localization in [F4] hold for this field, smooth finite-type scheme and open complement, under [A1], without any separatedness assumption. By [F2] the kernel is the supported complex, and [F3] identifies the quotient and its cokernel. Apply the kernel-to-fiber result in [F4] to this actual restriction chain map: it gives exactly the differential and inclusion displayed above, hence the asserted quasi-isomorphism. The cohomological notation is a reindexing of these homology groups. This construction depends only on the closed subset $T$ and does not identify the whole support fiber with the image of ordinary Chow groups of $T$ in those of $U$. A comparison with a separately defined motivic cohomology theory requires its own compatible comparison theorem.


## Evaluation preserves chain homotopies

[Open item](item-lem-author-a44f2061570d-evaluation-homotopy) · level 8


### Statement
For an object $U$ of a small site, evaluation sends complexes of abelian sheaves and chain maps to complexes and chain maps of abelian groups, and sends chain-homotopic maps to chain-homotopic maps. In particular it sends a chain-homotopy equivalence to a chain-homotopy equivalence.

Use the relative-smallness conventions for a small site $(\mathcal C,J)$ specified in Facts & Assumptions. Write $\mathbf{Ab}$ for the category whose objects are abelian groups with underlying sets of the allowed size and whose arrows are group homomorphisms. An abelian sheaf is a contravariant functor $F:\mathcal C\to\mathbf{Ab}$ whose underlying set-valued presheaf satisfies the sheaf condition: every matching family on a covering sieve has a unique amalgamation. A morphism of abelian sheaves is a natural transformation with group-homomorphism components.

A cochain complex is a family $(C^n)_{n\in\mathbb Z}$ of abelian sheaves (or of abelian groups), with morphisms $d_C^n:C^n\to C^{n+1}$ satisfying $d_C^{n+1}d_C^n=0$. A chain map, here using cochain indexing, $f:C^\bullet\to D^\bullet$ is a family of morphisms $f^n:C^n\to D^n$ satisfying $d_D^nf^n=f^{n+1}d_C^n$ for every $n$.

A chain homotopy from $f$ to $g$ is a family of morphisms $h^n:C^n\to D^{n-1}$ satisfying $f^n-g^n=d_D^{n-1}h^n+h^{n+1}d_C^n$ for every $n$, abbreviated $f-g=dh+hd$. A chain-homotopy equivalence is a chain map $f:C^\bullet\to D^\bullet$ admitting a chain map $k:D^\bullet\to C^\bullet$ for which $kf$ and $fk$ are chain-homotopic to the respective identity maps. Evaluation of a complex or family of maps means evaluation in each degree at $U$.

### Statement references
[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact)

### Facts & Assumptions

**Given:** An object $U$ of a small site $(\mathcal C,J)$ and complexes and maps as in the statement. Use the relative-smallness conventions in [F0]; in particular the abelian groups have V-small underlying sets for the universes U in V fixed there. The symbol $U$ for the site object is distinct from the universe U.

**Goal:** Prove preservation of complexes, homotopies and homotopy equivalences.

[F0] Small sites, covering sieves, matching families and unique amalgamation, with the relative-smallness conventions for sites and presheaf values, are as defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F1] Evaluation sends $F$ to $F(U)$ and a sheaf morphism $a$ to its component $a_U$. It preserves composition, identities, sums, negatives and zero maps. These are the functoriality and additivity properties established in [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact); sums, negatives and zero maps of sheaf morphisms are defined componentwise.

[F2] Abelian groups and group homomorphisms have their usual additive meaning. [math:def-group](https://alphabetamath.cc/item/def-group) [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) Contravariant functors and natural transformations, applied to the opposite site category, specify the presheaves and morphisms used above. [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

### Proof

**Proof technique:** Evaluate the defining identities.

1.1 Evaluation preserves composition, identities, sums, negatives and zero maps. Thus it carries $d_C^{n+1}d_C^n=0$ and $d_D^nf^n=f^{n+1}d_C^n$ to the corresponding equations of group homomorphisms at $U$. Consequently the evaluated objects are complexes of abelian groups and the evaluated families are chain maps. [F0, F1, F2, given]

2.1 Evaluating $f^n-g^n=d_D^{n-1}h^n+h^{n+1}d_C^n$ gives exactly the homotopy identity for the family $h^n(U)$. If $k$ is an inverse up to homotopy for $f$, evaluate the homotopies from $kf$ and $fk$ to the identity maps. By step 1.1 their evaluated composites and identities are the composites and identities of the evaluated chain maps, so $k(U)$ is an inverse up to homotopy for $f(U)$. [F1, step 1.1] ∎


## Imported derived sections on a small site

[Open item](item-lem-author-a44f2061570d-site-derived-input) · level 8


### Statement
Assume the Axiom of Choice and fixed size bounds, and let $\mathcal C$ be a small site with $U$ an object. The category of abelian sheaves on $\mathcal C$ is abelian. Evaluation at $U$ has a right derived functor on the unbounded derived category, computed by evaluating a K-injective resolution. For a sheaf $F$ placed in degree zero, this derived value may also be computed by an injective resolution concentrated in nonnegative degrees.

Here a small site is a small category equipped with a Grothendieck topology, specified by covering sieves satisfying maximality, pullback stability and transitivity; no scheme hypothesis is imposed. Fix universes $\mathcal U\in\mathcal V$ for the small category and sheaf values, and enlarged bounds for the sheaf and derived categories. These bounds are hypotheses, not assertions of universe existence. An abelian sheaf is a contravariant functor to abelian groups satisfying unique amalgamation on covering sieves; its morphisms are natural transformations of group homomorphisms. Evaluation sends such a sheaf and such a morphism to their value and component at $U$.

Complexes use cochain grading: $d^{n+1}d^n=0$, and a map $f:A^\bullet\to B^\bullet$ satisfies $d_B^nf^n=f^{n+1}d_A^n$. Write $H^n(A)=\ker d_A^n/\operatorname{im}d_A^{n-1}$; acyclic means that all these cohomology objects vanish. A cochain homotopy from $f$ to $g$ is a family $h^n:A^n\to B^{n-1}$ with $f^n-g^n=d_B^{n-1}h^n+h^{n+1}d_A^n$. This is the chain-homotopy convention reindexed by $A_n=A^{-n}$, $B_n=B^{-n}$ and $s_n=h^{-n}$.

An injective sheaf is an object $I$ such that maps into $I$ extend across monomorphisms. An injective resolution of $F$ is an exact coaugmented complex $0\to F\to I^0\to I^1\to\cdots$ with every $I^n$ injective. A quasi-isomorphism is a cochain map inducing isomorphisms on all cohomology objects. A complex $I^\bullet$ is K-injective if every cochain map from an acyclic complex to it is cochain-homotopic to zero. A K-injective resolution is a quasi-isomorphism into such a complex. Bounded below means zero in all sufficiently negative cochain degrees.

The unbounded derived category is the localization of the category of cochain complexes at quasi-isomorphisms; no degree bound is imposed. The right derived functor here is the functor from this localization to $D(\mathbf{Ab})$ supplied by the cited K-injective construction, with value represented by $I^\bullet(U)$. For $F[0]$, the complex has $F$ in degree zero and zero in every other degree.

### External input
References 0, 1, 2 and 3 supply, respectively, the abelian-sheaf category theorem, the unbounded K-injective and derived-functor construction, the ordinary injective-resolution computation, and the bounded-below K-injectivity criterion. Their existence proofs remain imported. The hypotheses are the indicated small site and size bounds, Choice for the selected existence constructions, and an object $U$ of the site.

For the ringed-site application, a sheaf of rings assigns rings and restriction homomorphisms with the underlying sheaf condition, and a ringed site is a site equipped with such a sheaf. An $\mathcal O$-module sheaf is an abelian sheaf with an $\mathcal O(V)$-module structure on each value at $V$, compatible with restrictions; its morphisms respect these actions. References 4, 5 and 6 give precisely these definitions. Reference 7 identifies abelian sheaves with modules over the constant integer sheaf $\underline{\mathbb Z}$, the sheaf associated to the constant integer presheaf with its induced ring operations. This identification preserves objects, morphisms and evaluation into abelian groups. We use clause (2) of reference 1 with the additive evaluation functor into $\mathbf{Ab}$; it does not require identifying $\underline{\mathbb Z}(U)$ with $\mathbb Z$.

### Facts & Assumptions

[A1] Choice and the fixed size bounds are retained for the imported K-injective and ordinary injective-resolution existence constructions applied in step 2.1; their foundational proofs are not reconstructed here. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** A small site $\mathcal C$, an object $U$, Choice and fixed size bounds as specified in the Statement.

**Goal:** Obtain the stated derived-evaluation interface and its ordinary-sheaf computation.

[F0] General small sites, covering sieves, matching families, the sheaf condition and relative-smallness conventions are supplied by [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data).

[F1] References 0, 1 and 2 in External input supply the abelian category, unbounded derived evaluation and ordinary injective-resolution computation. These are imported results under their recorded hypotheses.

[F2] Evaluation is additive and left exact once the sheaf category is abelian. [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact) Its target $\mathbf{Ab}$ is abelian. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[F3] A bounded below complex of injectives in an abelian category is K-injective, by reference 3, [Stacks Lemma 13.31.4](https://stacks.math.columbia.edu/tag/070J).

[F4] Abelian categories and the cochain, cohomology, homotopy, injective-object, injective-resolution and localization conventions have the meanings of [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category), [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex), [math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy), [math:def-injective-object](https://alphabetamath.cc/item/def-injective-object), [math:def-injective-resolution-in-an-abelian-category](https://alphabetamath.cc/item/def-injective-resolution-in-an-abelian-category) and [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms). The homotopy formula in the Statement explicitly reindexes the chain convention; K-injectivity, acyclicity and boundedness are specified inline.

[F5] References 4, 5 and 6 specify the ringed-site and module-sheaf object types. Reference 7 supplies the constant-integer-sheaf identification used to apply reference 1. No reconstruction of its sheafification foundations is claimed.

### Proof

**Proof technique:** Apply the cited site results with the constant integer coefficient ring.

1.1 By [F0] the general small site and its abelian sheaves are defined, and [F1] makes their category abelian in the sense of [F4]. With the ringed-site and module conventions of [F5], its objects and morphisms identify with modules over the constant integer sheaf: integer multiplication is determined by the abelian group operation, and locally constant integer sections act locally by this multiplication and then glue uniquely by the sheaf condition. Evaluation is additive and left exact by [F2], with abelian target $\mathbf{Ab}$. Thus the additive-functor clause of the imported unbounded result applies to this evaluation functor. [F0, F1, F2, F4, F5]

2.1 By [F1] and [A1], every sheaf complex has a K-injective resolution, and the imported construction gives the derived evaluation functor represented by evaluating that resolution, independently of its choice in the derived category. For $F[0]$, the ordinary imported construction gives the injective resolution of [F4] starting in degree zero; extend it by zero in negative degrees. Its terms are injective in the abelian category of step 1.1, and it is bounded below, so [F3] makes it K-injective. Its coaugmentation is a quasi-isomorphism by exactness of the injective resolution. Consequently its evaluation computes this same unbounded right-derived value on the sheaf. [F1, F3, F4, A1, step 1.1] ∎


## Negative cohomology of a nonnegative evaluated complex

[Open item](item-lem-author-a44f2061570d-nonnegative-resolution) · level 9


### Statement
Let $I^\bullet$ be a cochain complex of abelian sheaves on a small site with $I^n=0$ for $n<0$. For every object $U$ and every $n<0$, the cohomology group $H^n(I^\bullet(U))$ is zero. Here $H^n$ is the kernel of the degree-$n$ differential modulo the image of the preceding differential.

Use the relative-smallness conventions for sites and presheaf values specified in Facts & Assumptions. An abelian sheaf is a contravariant functor from the site to abelian groups whose underlying set-valued presheaf is a sheaf; its morphisms are natural transformations with group-homomorphism components. A cochain complex has differentials $d^n:I^n\to I^{n+1}$ with $d^{n+1}d^n=0$, and evaluation at $U$ is taken degree by degree. The zero sheaf $0$ assigns the one-element abelian group $\{0\}$ to every object and the unique homomorphism to every arrow. Thus $I^n=0$ means the zero sheaf in that degree. A zero cohomology group means a one-element group.

### Statement references
[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[lem-author-a44f2061570d-evaluation-homotopy](item-lem-author-a44f2061570d-evaluation-homotopy)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

### Facts & Assumptions

**Given:** A site object $U$ and a complex $I^\bullet$ vanishing in negative degrees.

**Goal:** Prove the negative-degree cohomology vanishes after evaluation.

[F0] Small sites, covering sieves, matching families and the sheaf condition, with the relative-smallness conventions for sites and presheaf values, are as defined in [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data). The site object $U$ is distinct from the universe letters in those conventions.

[F1] Abelian sheaves, their morphisms and cochain complexes have the meanings in [lem-author-a44f2061570d-evaluation-homotopy](item-lem-author-a44f2061570d-evaluation-homotopy). Evaluation sends complexes of abelian sheaves to complexes of abelian groups, taking a differential to its component at $U$.

[F2] The presheaf assigning $\{0\}$ to every object is a sheaf: on each covering sieve there is exactly one matching family, including when the sieve is empty, and exactly one section that amalgamates it. Its value at every object is therefore the zero group. This verifies the zero-sheaf convention using the sheaf condition in [F0].

[F3] For an additive group homomorphism $a:A\to B$, the kernel is $\{x\in A:a(x)=0\}$ and the image is $\{a(x):x\in A\}$. [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism) The quotient of an abelian group by a subgroup is the group of additive cosets. [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) Thus, writing $d^n_U=d^n(U)$, the cohomology convention is $H^n(I^\bullet(U))=\ker(d^n_U)/\operatorname{im}(d^{n-1}_U)$. The homomorphism identities make these kernels and images subgroups, and $d^n_Ud^{n-1}_U=0$ places the image in the kernel. Since the groups are abelian the subgroup is normal, so this quotient is defined.

### Proof

**Proof technique:** Inspect the terms in negative degrees.

1.1 For each $n<0$, the term $I^n$ is the zero sheaf, so evaluation gives $I^n(U)=\{0\}$. The outgoing differential is a group homomorphism from this one-element group, hence its kernel is $\{0\}$. [F0, F1, F2, F3, given]

2.1 The image of the preceding differential is contained in that kernel and contains zero, so it too is $\{0\}$. The quotient defining $H^n(I^\bullet(U))$ is consequently $\{0\}/\{0\}$, with its single coset, and is the zero group for every $n<0$. [F3, step 1.1] ∎


## The two supported cycle degrees on a curve

[Open item](item-lem-author-1437578267d2-supported-degrees) · level 9


### Statement
Assume the Axiom of Choice (AC). Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $T\subset U$ be an integral closed curve. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$. Let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0$ nor $s=1$. The degree-zero and degree-one terms of $z_T^3(U,\bullet)$ are respectively $Z_0(T)$ and $B_1(T)$. The boundary is $b[W]=[W_1]-[W_0]$, where
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)]$$
and $p:T\times\mathbb A^1\to T$ is projection. Consequently $\mathrm{CH}_T^3(U)=Z_0(T)/bB_1(T)$. Endpoint projection is an isomorphism, so no residue-field factor is omitted.

### Facts & Assumptions
**Given:** AC and $k,U,T$ as stated; all products are over $k$. Write $s=t_1$ and $t_0=1-s$ on $\Delta^1$. Here a curve has chain dimension one, and pure dimension three means that every irreducible component has dimension three.

**Goal:** Identify both terms and the boundary with its multiplicities, and compute zeroth homology.

[F1] The supported complex is the subgroup on admissible cycles with the specified set-theoretic support, and $\mathrm{CH}_T^3(U)$ is its zeroth homology. The Bloch definition supplies $\Delta^0$, $\Delta^1$, face admissibility, the finite local-length face formula, the alternating signs and the zero groups in negative degrees. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] The ground field and the structure morphism to $\operatorname{Spec}k$ define the $k$-scheme structure; smoothness and finite type refer to that morphism. An integral scheme is nonempty, reduced and irreducible, equivalently with domain rings on nonempty affine opens. Closed subschemes mean closed immersions. Affine opens carry the restricted structure sheaf. Products are scheme fibre products and exist. Scheme-theoretic intersections of closed subschemes are cut out by sums of their ideal sheaves. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme), [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[F3] A field is Noetherian, and every finite-type algebra over a Noetherian commutative ring is Noetherian. An algebra is finite type when generated by finitely many algebra elements. Under AC the spectrum of a Noetherian ring is a Noetherian topological space, meaning that every descending chain of closed subsets stabilizes. A smooth finite-type scheme has disjoint integral open-and-closed components, with a cover by integral smooth finite-type affine opens. On an integral finite-type scheme every nonempty open has the same dimension. Dimension is chain dimension; irreducible components carry their reduced induced structures. Noetherian schemes have finite affine covers by Noetherian rings. Under AC, subspaces of a Noetherian space are Noetherian and quasi-compact, and a Noetherian space has finitely many irreducible components. [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input), [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens), [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components) [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum), [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space), [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F4] Under AC an affine finite-type $k$-scheme has a finitely generated coordinate algebra. For a finite-type $k$-domain $A$ and a prime $P$, $\operatorname{ht}P+\dim(A/P)=\dim A$; for a finite-dimensional Noetherian ring, $\dim A[s]=\dim A+1$. Ring dimension means Krull dimension. A generic point is a point whose closure is the indicated irreducible closed subset. The stalk at $P$ on $\operatorname{Spec}A$ is $A_P$, so the codimension convention in [F1] is prime height on these charts. [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated), [math:cor-height-plus-quotient-dimension-affine-domain](https://alphabetamath.cc/item/cor-height-plus-quotient-dimension-affine-domain), [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring), [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring), [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset), [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)

[F5] The coordinate-face construction gives $(\operatorname{Spec}A)\times\Delta^1=\operatorname{Spec}A[s]$, with endpoint quotient rings $A[s]/(s-\epsilon)=A$. Closed immersions are affine-locally quotient spectra and remain closed immersions under base change. A ring map killing an ideal factors uniquely through its quotient. A quotient $R/J$ is a domain exactly when $J$ is prime. Quotients and localizations of Noetherian rings are Noetherian. [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry), [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change), [math:thm-quotient-ring-universal-property](https://alphabetamath.cc/item/thm-quotient-ring-universal-property), [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime), [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)

[F6] The notation $\ell_R(M)$ means composition-series length, independent of the series by Jordan–Hölder. The admissible face formula in [F1] supplies the finiteness of these lengths; it does not require smoothness of the cycle. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F7] Free abelian groups extend maps on their generators uniquely; here the sums denote finite formal integer combinations of the indicated cycles. Homology is cycles modulo boundaries. For a point $x$, $\mathcal O_{X,x}$ denotes its local ring and its residue field is $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$; on an affine chart it is canonically the fraction field of the corresponding prime quotient. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)

[A1] AC is retained for the Bloch and supported-complex conventions [F1], the smooth-chart, spectrum-Noetherianity and topological finiteness inputs [F3], the affine finite-generation and dimension inputs [F4], and the affine closed-subscheme input [F5]. No normality or smoothness of $T$ or $W$ and no separatedness over $k$ are assumed. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 First let $X$ be any finite-type $k$-scheme. By [F2], it has an affine open cover by spectra of finite-type $k$-algebras, and quasi-compactness gives a finite subcover. By [F3], $k$ is Noetherian and every coordinate algebra in this finite cover is Noetherian; hence $X$ is a Noetherian scheme. By [F3] these affine charts also have Noetherian underlying spaces. For a descending chain of closed subsets of $X$, its intersections with each of the finitely many charts stabilize. Taking the maximum of their stabilization indices shows that the chain stabilizes on $X$, so its underlying space is Noetherian. The empty scheme satisfies both conclusions with its empty cover. Apply this to $U$. By [F3], the components $C$ of $U$ are integral and open-and-closed. Their open restrictions are locally of finite type and are quasi-compact because $U$ is Noetherian, so they are finite type by [F2]. Pure dimension gives $\dim C=3$. Choose the integral smooth finite-type affine cover from [F3]. A chart $\operatorname{Spec}A$ in $C$ has dimension three by open invariance, and $A$ is a Noetherian finite-type $k$-domain by [F3]–[F4]. Its product chart is $\operatorname{Spec}A[s]$ by [F5], with domain ring of dimension four by [F4]. Since $U$ is Noetherian, finitely many of its chosen affine charts cover it. Their product charts cover $U\times\Delta^1$, so this product is finite type. Each product chart and the product are Noetherian by the finite-type Noetherianity just proved. Each integral closed cycle and the closed subschemes $T$ and $T\times\mathbb A^1$ inherit finite covers by quotient spectra by [F5]; their coordinate algebras are finite type, so they are finite-type schemes. By [F3], a nonempty chart intersection with an integral cycle has the same dimension as that cycle. Hence [F4] identifies codimension-three cycles with dimension-zero cycles on $U$ and dimension-one cycles on $U\times\Delta^1$. An integral zero-dimensional closed subscheme has a one-point underlying space: the zero prime of any nonempty affine domain chart gives a point whose closure is the whole integral scheme, since every nonempty open meets that chart. This generic point is already closed, since a proper nonempty irreducible closed subset would give a chain of length one. A nonempty affine chart is therefore the whole subscheme, its domain has its zero prime maximal, and is a field; it is precisely a reduced closed point. The support condition selects the closed points of $T$. In degree one, on any ambient affine chart write the support as $\operatorname{Spec}(R/I)$ and a nonempty integral cycle intersection as $\operatorname{Spec}(R/J)$. By [F2] and [F5], $J$ is prime. Set-theoretic containment $V(J)\subseteq V(I)$ puts $J$ itself in $V(I)$, giving $I\subseteq J$. Thus [F5] gives a unique closed immersion through $\operatorname{Spec}(R/I)$; uniqueness makes these factorizations agree on overlaps. Apply this to the base-changed closed immersion $T\times\mathbb A^1\hookrightarrow U\times\mathbb A^1$. Conversely, composing a closed integral curve in that support with this immersion gives an ambient closed curve of codimension three by the calculation above. Such a curve meets an endpoint properly exactly when it is not contained in it. If contained, the intersection has dimension one; otherwise every irreducible closed subset of the intersection is a proper closed subset of an integral dimension-one scheme, so has dimension zero by the chain definition in [F3]. This closed subset is Noetherian, so it has finitely many irreducible components by [F3], each a closed point. The intersection is therefore finite and zero-dimensional, or empty. These are exactly the endpoint admissibility conditions of [F1]. By [F7], the generators identify the two terms with $Z_0(T)$ and $B_1(T)$. [A1, F1, F2, F3, F4, F5, F7, given, algebra]

2.1 By [F1] and [F5], $t_0=0$ is $s=1$ and $t_1=0$ is $s=0$, so the alternating differential is $d_0-d_1=[W_1]-[W_0]$. At an endpoint, [F2] identifies the intersection ring on $W$ with the quotient by $s-\epsilon$. The equations $1-s$ and $s-1$ differ by a unit and generate the same local ideal, so their quotient modules and lengths agree. The finite face coefficients of [F1], with length interpreted by [F6], are exactly those in the Statement, since the endpoint components in step 1.1 are closed points. On every affine chart of $T$ the endpoint projection is induced by $A\to A[s]/(s-\epsilon)=A$, the identity on $A$, so [F5] gives $T\times\{\epsilon\}\cong T$. A point of its closed subscheme $W\cap\{s=\epsilon\}$ has the residue field of the corresponding point of $T$: locally its ring is a quotient, and [F7] identifies the residue field with the same prime quotient's fraction field. The closed immersion of that intersection into $W$ likewise leaves the point residue field unchanged. Thus every residue-field degree for the endpoint projection is one. The formula extends to the free group by [F7]. Finally, [F1] gives a zero outgoing differential from degree zero, and [F7] identifies zeroth homology with the degree-zero group modulo the degree-one image. Therefore $\mathrm{CH}_T^3(U)=Z_0(T)/bB_1(T)$. [F1, F2, F5, F6, F7, step 1.1, algebra] ∎


## External classification of torsors by first cohomology

[Open item](item-lem-author-8e1c0251ef0d-h1-torsor-input) · level 9


### Statement
Assume the Axiom of Choice and fixed universes $\mathcal U\in\mathcal V$, with enlarged bounds for sheaf and derived categories as in the general small-site derived-evaluation interface. Let $\mathcal C$ be a $\mathcal U$-small site, with $\mathcal V$-small sheaf values, and let $1$ be a terminal object: each object has exactly one arrow to $1$. For an abelian sheaf $G$ on $\mathcal C$, there is a canonical bijection from isomorphism classes of $G$-torsors to $H^1(G)$.

Here $H^1(G)=H^1(\mathcal C,G)$ means $H^1(R\Gamma(1,G[0]))$, computed from a nonnegative injective resolution $0\to G\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ as $\ker(d^1(1))/\operatorname{im}(d^0(1))$. Existence and independence of this resolution, including agreement with K-injective derived evaluation, are supplied by the general small-site interface. Evaluation at $1$ is global sections: a compatible family over the site is uniquely the family of restrictions of its component at $1$.

A $G$-torsor is a sheaf of sets $P$ with restriction-compatible actions $G(U)\times P(U)\to P(U)$ satisfying $0\cdot p=p$ and $(g+h)\cdot p=g\cdot(h\cdot p)$. For any $p,q\in P(U)$ there must be exactly one $g\in G(U)$ with $g\cdot p=q$. Local nonemptiness means that for every $U$ there is a covering sieve $R$ on $U$ with $P(V)\ne\varnothing$ for every arrow $V\to U$ in $R$. Isomorphisms are invertible maps of sheaves commuting with these actions.

### Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

### External input
Reference 0 imports the torsor definition and canonical classification. Its inverse represents a cohomology class by a global section of the quotient sheaf $I/G$, for an injective embedding $G\hookrightarrow I$, and takes the sheaf of local lifts of that section. Reference 1 specifies the cohomology convention. The general small-site derived-evaluation supplier provides its resolution existence and independence. The classification proof, including the omitted verification that the two constructions are inverse, remains imported; no local reconstruction is claimed.


## Small Zariski site, abelian sheafification and derived unit

[Open item](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit) · level 9


### Definition
Assume the Axiom of Choice. Fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$ and size bounds containing the scheme $Y$, its opens and the coefficient groups; these bounds are hypotheses, not an assertion of universe existence. The small Zariski site $Y_{\mathrm{Zar}}$ is the poset of open subschemes of $Y$, with one arrow $V\to W$ when $V\subseteq W$. Covering families are families of open inclusions whose union is the target. Work within the fixed enlarged bounds for sheaf and derived categories.

An abelian presheaf assigns an abelian group to each open and restriction homomorphisms to inclusions, with identity and composition laws. An abelian sheaf is such a presheaf satisfying the sheaf condition. Let $a$ denote abelian sheafification, with its natural unit $P\to aP$, rather than merely set-valued sheafification. For a cochain complex $P$ of abelian presheaves, set $(aP)^q=a(P^q)$ and $d_{aP}^q=a(d_P^q)$. The cochain convention is $d^{q+1}d^q=0$; a homological complex $C_n$ is reindexed as $P^q=C_{-q}$ with $d_P^q=\partial_{-q}$.

For a complex $B$ in an abelian category, $H^q(B)=\ker d_B^q/\operatorname{im}d_B^{q-1}$, and acyclic means that all these objects vanish. A cochain map commutes with differentials. A homotopy between cochain maps $f,g:A\to B$ is a family $h^q:A^q\to B^{q-1}$ with $f^q-g^q=d_B^{q-1}h^q+h^{q+1}d_A^q$; null-homotopic means homotopic to zero.

Write $D(\operatorname{Ab}(Y_{\mathrm{Zar}}))$ for the unbounded derived category, formed by inverting quasi-isomorphisms, and $D(\operatorname{Ab})$ for that of abelian groups. A quasi-isomorphism induces isomorphisms on every cohomology object. Choose a K-injective resolution $\iota:aP\to I$ of complexes of abelian sheaves, where K-injective means that maps from acyclic complexes are null-homotopic. For each open $W\subseteq Y$, $R\Gamma(W,aP)$ is represented by $I(W)$; write $R\Gamma(Y_{\mathrm{Zar}},aP)=R\Gamma(Y,aP)$. The derived-evaluation unit is the morphism in $D(\operatorname{Ab})$ represented by
$$\eta_{P,W}:P(W)\longrightarrow(aP)(W)\xrightarrow{\iota(W)}I(W).$$
It is independent of the resolution under the canonical derived identifications and is natural for inclusions of opens. If $U\subseteq Y$ is open, $P|_U$ means the same assignments restricted to opens contained in $U$; $(aP)|_U=a(P|_U)$ canonically, and $I|_U$ computes derived sections on $U_{\mathrm{Zar}}$. Thus the unit over $U$ agrees with the restriction of this construction. No assertion that $\eta_{P,W}$ is a quasi-isomorphism for arbitrary $P$ is part of this definition.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

### Facts & Assumptions
**Given:** The stated size bounds, Choice, the scheme $Y$ and a complex $P$ of abelian presheaves on its open-set site.

**Goal:** Specify the sheafified complex and the canonical, restriction-compatible derived-evaluation unit.

[A1] Choice is retained for the imported K-injective existence construction and the selection of a resolution. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The universe closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention).

[F1] Scheme sites, covering sieves, sheafification units and matching families have the meaning of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). The general small-site input [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supplies unbounded derived evaluation using K-injective resolutions, also for this site. Cochain grading is as in [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), and restriction to an open is as in [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace).

[F2] Abelian presheaves and sheaves form abelian categories; abelian sheafification is additive and has its natural adjunction unit. Its underlying set sheafification is the double plus construction of [F1]. [Stacks, Section 18.3](https://stacks.math.columbia.edu/tag/03CM) and [Section 7.44, properties alpha-zeta and Proposition 7.44.3](https://stacks.math.columbia.edu/tag/00YR).

[F3] On a ringed space, restriction to an open is exact and preserves K-injective complexes. [Stacks, Lemmas 20.32.1-20.32.2](https://stacks.math.columbia.edu/tag/0D5U). Apply this with the constant integer sheaf: integer multiplication and sheaf gluing identify its modules with abelian sheaves.

[F4] Precomposition by a quasi-isomorphism gives a bijection on homotopy classes of maps into a K-injective complex. [Stacks, Lemma 13.31.2](https://stacks.math.columbia.edu/tag/070G).

### External input
References 0 and 3 supply [F2], reference 1 supplies [F3], and reference 2 supplies [F4], under their recorded hypotheses and reading limits. K-injective existence and derived evaluation are supplied by the declared general site input in [F1]. The following verification composes these premises; it does not reconstruct their foundational proofs.

### Justification
1.1 The open-set poset has a set of objects within the chosen bounds. Identities cover, pullback of a cover is intersection with an open, and successive covers compose because unions of their members recover the target. It is therefore the stated small site. By [F2], $a(d_P^{q+1})a(d_P^q)=a(0)=0$, so degreewise sheafification gives a cochain complex, and naturality of the unit makes $P\to aP$ a chain map. For an open $W\subseteq U$, its open subsets, covering families, matching families and refinements are identical whether regarded inside $U$ or $Y$. The double plus construction of [F1], with the underlying-set compatibility in [F2], therefore gives $(aP)|_U=a(P|_U)$ with the same unit, degree by degree. [F1, F2, A1, construct]

2.1 By [F1] and [A1], choose $aP\to I$; evaluating it after the sheafification unit gives the displayed morphism. For another resolution $aP\to J$, [F4] gives a comparison $I\to J$ commuting with those resolution maps up to homotopy, uniquely up to homotopy. Applying the same bijection in the reverse direction gives inverse comparisons up to homotopy. Evaluation preserves the chain-homotopy equations, so the evaluated comparison identifies both units canonically in $D(\operatorname{Ab})$. Each representative composite commutes with restriction homomorphisms, proving naturality. By [F3], $I|_U$ remains a K-injective resolution of $(aP)|_U$; its value at every open of $U$ is the same $I(W)$. Together with step 1.1 this identifies the construction on $U_{\mathrm{Zar}}$ and proves the claimed restriction compatibility. [F1, F3, F4, A1, step 1.1] ∎


## Derived global sections on a scheme site

[Open item](item-def-derived-sections-on-sites) · level 10


### Definition
Assume the Axiom of Choice and fixed universe size bounds. For each $\tau\in\{\mathrm{Nis},\mathrm{cdh},\mathrm{et}\}$, fix a small scheme site $\mathcal C_\tau$ equipped with the indicated Nisnevich, cdh, or étale topology, and an object represented by the scheme $X$. The choice of site and topology is part of the data; these names alone do not identify a big site with a small one.

An abelian sheaf is a contravariant functor from the site to abelian groups whose underlying set-valued presheaf satisfies the sheaf condition. Let $D(\operatorname{Ab}(\mathcal C_\tau))$ be its unbounded derived category: complexes are localized at the chain maps inducing isomorphisms on all cohomology sheaves. For $C$ in this category define $R\Gamma_\tau(X,C)$ as the right derived functor of evaluation at $X$, with value in the derived category $D(\operatorname{Ab})$ of complexes of abelian groups. Concretely, for a representative complex choose a quasi-isomorphism to a K-injective complex $I^\bullet$ and take the derived-category class of $I^\bullet(X)$. K-injective means that every chain map from an acyclic complex to $I^\bullet$ is chain-homotopic to zero. Set $H^n_\tau(X,C)=H^n(R\Gamma_\tau(X,C))$, where $H^n$ is the kernel of the degree-$n$ differential modulo the preceding image.

For an ordinary abelian sheaf $F$ regarded as a complex concentrated in degree zero, $H^n_\tau(X,F)=0$ for $n<0$. This convention does not assert a comparison between the three topologies or an identification between sheafification and derived localization.

### Definition references
[def-adjudicate-0a21e0b4be3b-general-scheme-topologies](item-def-adjudicate-0a21e0b4be3b-general-scheme-topologies)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)

### Justification
The three named topologies have the generator conventions of [def-adjudicate-0a21e0b4be3b-general-scheme-topologies](item-def-adjudicate-0a21e0b4be3b-general-scheme-topologies), applied to each specified scheme category separately. In particular the general cdh convention retains finite presentation on its proper generators; the finite-type-field cdh interface is not used as a definition on arbitrary schemes. The small and big étale categories remain separate choices. This supplies the named-topology formulation input without changing the derived-evaluation construction.

The already stated Choice premise is inherited by the selected K-injective construction and its derived evaluation. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

Cochain complexes and their differentials have the meaning of [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category). The source category of abelian sheaves is abelian by [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input), and the target category of abelian groups is abelian by [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category). Applying [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category) to these abelian categories makes the cohomology used to define quasi-isomorphisms invariant under derived isomorphism and makes $H^n(R\Gamma_\tau(X,C))$ a well-defined abelian group, independent of the chosen representative complex. The cohomology formula in the Definition is the formula on such a representative.

The chosen site and object make evaluation meaningful, and the size bounds specify the ambient categories. [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supplies the abelian category, existence and choice-independent derived-functor interpretation of K-injective evaluation, and a nonnegative injective resolution computing the value for $F[0]$. Applying [lem-author-a44f2061570d-nonnegative-resolution](item-lem-author-a44f2061570d-nonnegative-resolution) to that resolution proves the negative-degree assertion. These inputs apply to each chosen topology separately; no comparison among them is used.


## Endpoint boundaries are norm divisors

[Open item](item-lem-author-1437578267d2-boundary-norm) · level 10


### Statement
Assume the Axiom of Choice (AC). Let $k$ be an algebraically closed field and let $T$ be an integral finite-type $k$-scheme of chain dimension one. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$. Let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times_k\mathbb A^1_s$ contained in neither endpoint $s=0,1$; call these generators admissible. For projection $p:T\times_k\mathbb A^1_s\to T$, define $b:B_1(T)\to Z_0(T)$ linearly by $b[W]=[W_1]-[W_0]$, where
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}\bigl(\mathcal O_{W,w}/(s-\epsilon)\bigr)[p(w)],\qquad \epsilon=0,1.$$
Here $\ell_R$ denotes composition length of an $R$-module. The endpoint sets are finite, the displayed lengths are finite, and endpoint projection preserves residue fields, so this formula is well-defined without an embedding of $T$.

For an admissible generator $W$, if $W\to T$ is not dominant then $b[W]=0$. Otherwise, with $K=k(T)$ and $L=k(W)$, the extension $L/K$ is finite and
$$b[W]=\operatorname{div}_T\!\left(\operatorname{Nm}_{L/K}((s-1)/s)\right).$$
Dominant means having dense image, and $k(D)$ is the function field of an integral curve $D$, identified with its generic stalk. At a closed point $x$ of $D$, set $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R=\mathcal O_{D,x}$ and $\operatorname{div}_D(f)=\sum_x\operatorname{ord}_x(f)[x]$. The norm of $g\in L$ is the determinant over $K$ of multiplication by $g$ on $L$. In particular every boundary is a principal zero-cycle, including at singular points of $T$; neither normality nor separability is assumed.

### Statement references
[lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection)

[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)

[lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings)

[math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)

[math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)

[math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)

[math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
[F1] The intrinsic endpoint groups and boundary are defined in the Statement. If $T$ is an integral closed curve in a smooth finite-type $k$-scheme of pure dimension three, they agree with the degree-zero and degree-one supported-cycle terms and their boundary in the embedded setting of [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees). This comparison is used only under those embedding hypotheses.

[F2] On every integral finite-type curve, length orders are well-defined, have finite support, are additive on products, agree with quotient lengths for nonzero regular functions, and vanish on units. Quotients have their induced module structure; composition length counts simple factors, and a residue field has length one over its local ring. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[F3] For a proper dominant $k$-morphism $q:C\to T$ of integral finite-type curves, the function-field extension is finite and $q_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{k(C)/k(T)}(g)$ for $g\ne0$. This is the imported identity of [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input), including its singular-curve length convention. Here $q_*[y]=[\kappa(y):\kappa(q(y))][q(y)]$, $\kappa(y)=\mathcal O_{C,y}/\mathfrak m_y$, a finite degree is vector-space dimension, and the norm is the determinant of multiplication. Proper means separated, finite type and universally closed. [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension), [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace), [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[F4] For an integral closed subscheme $W\subset T\times_k\mathbb A^1$, its reduced closure $C\subset T\times_k\mathbb P^1$ has closed integral image $Y\subset T$ and $C\to Y$ is proper and dominant. The generic-fiber alternatives give either $W=Y\times_k\mathbb A^1$ with $\dim Y=\dim W-1$, or a finite generic field extension with $\dim Y=\dim W$. [lem-adjudicate-e2821b68ac29-projective-line-projection](item-lem-adjudicate-e2821b68ac29-projective-line-projection) A nonempty open in an integral finite-type scheme has the same dimension; in particular $C$ has the dimension of $W$. [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[F5] A closed point of a finite-type $k$-scheme has residue field $k$ via its structure map when $k$ is algebraically closed. [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)

[F6] An integral finite-type curve has a unique generic point, and its function field is the fraction field of each nonempty affine chart and of each closed-point local ring. Those local rings are one-dimensional Noetherian local domains; an element outside the maximal ideal is a unit. [lem-adjudicate-b5ccab493b5a-curve-local-rings](item-lem-adjudicate-b5ccab493b5a-curve-local-rings) Every proper closed subset of such a curve is a finite set of closed points. [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[F7] Relative affine space has polynomial charts over base charts. The projective line has two such charts with reciprocal coordinates $s,u$, so $u=1/s$ on their overlap. Endpoints are defined by $s-\epsilon$, and projection identifies each ambient endpoint with $T$. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts) Closed immersions have affine quotient charts and remain closed immersions after base change. [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change) A finite cover of $T$ by finite-type affine charts therefore gives finite affine quotient covers of $W$ and $C$ in these products; both are finite type over $k$.

[F8] Integral means nonempty, reduced and irreducible; finite type means locally finite type and quasi-compact, and curve dimension is chain dimension. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Zero-cycles are finite formal integer sums of reduced closed points. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group) AC is assumed through the geometric and length-order suppliers, in particular the proper projection, closed-immersion base changes and curve finiteness; the coefficient computations use no additional infinite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof

**Given:** AC, $k,T$ and an admissible generator $W$ as stated.

**Goal:** Establish the intrinsic endpoint boundary and compute it as a principal divisor.

1.1 First verify the intrinsic boundary. By F7 every generator $W$ is finite type. For each endpoint, its intersection with $W$ is a proper closed subset because $W$ is admissible, hence a finite set of closed points by F6. At such a point $s-\epsilon$ is a nonzero element of the local domain, so F2 gives finite quotient length. The intersection is the base change of the closed immersion $W\hookrightarrow T\times\mathbb A^1$ to the ambient endpoint. Thus its projection to $T$ is a closed immersion, with the same residue field at corresponding points by the affine quotient description in F7 and the residue-field convention in F3; it has closed-point image. This proves well-definedness of $b$, and F1 identifies it with the supported boundary when the embedding hypotheses hold. Now suppose $W\to T$ is not dominant. Its nonempty irreducible image closure is a proper closed subset of $T$, so by F6 it is a closed point $x$. The image $Y$ in F4 is that reduced point. Since $\dim W=1$ and $\dim Y=0$, F4 gives $W=\{x\}\times_k\mathbb A^1$. By F5 this is $\mathbb A^1_k$. At either endpoint its quotient local ring is $k$, of length one by F2, and both points project to $x$. Therefore $b[W]=[x]-[x]=0$. [given, F1, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 Suppose instead that $W\to T$ is dominant. Use the reduced closure $C$ in F4. It restricts to $W$ on $T\times\mathbb A^1$, as established in the projection lemma, and is an integral finite-type curve by F4 and F7. Its reduced image is $T$, so $q:C\to T$ is proper and dominant. Since $W$ and $C$ share a nonempty open, F6 identifies $k(C)=k(W)=L$; F3 gives finiteness over $K=k(T)$. Admissibility says $s\ne0,1$ in $L$, so $g=(s-1)/s$ is nonzero. At a point with $s=1$, the germ of $s$ is a unit, hence F2 gives $\operatorname{ord}(g)=\ell(\mathcal O_W/(s-1))$. At $s=0$, the germ of $s-1$ is a unit, giving $\operatorname{ord}(g)=-\ell(\mathcal O_W/s)$. Elsewhere in $W$ both are units. At infinity F7 gives $g=1-u$, a unit since $u=0$ there, so its order is zero. The local rings of $C$ and $W$ agree at endpoint points. By step 1.1 their residue degrees over their images in $T$ are one. Thus coefficient by coefficient $q_*\operatorname{div}_C(g)=b[W]$. Applying F3 proves the displayed norm-divisor identity. For a finite integer sum of generators, the nondominant terms contribute zero by step 1.1, while the others contribute divisors of nonzero norms; the product of their integer powers is a nonzero rational function whose divisor is the boundary, by F2. This proves the final assertion with all singular-point lengths retained. [given, F2, F3, F4, F6, F7, step 1.1, algebra] ∎


## Separated raw-cycle Zariski descent input

[Open item](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input) · level 10


### Statement
Assume the Axiom of Choice and fixed universe bounds for the following derived constructions. Let $Y$ be a smooth quasi-projective finite-type scheme over a field, and $r\geq0$. For each open $W\subseteq Y$, let $C(W)=z^r(W,\bullet)$ be the unnormalized simplicial Bloch complex, placed in cohomological degree $-n$ in cycle degree $n$, with the same differential. For $V\subseteq W$, restriction sends an admissible generator $[Z]$ to $[Z\cap(V\times\Delta^n)]$ if nonempty, and to zero otherwise; it commutes with the differential and defines a complex of abelian presheaves.

Use the small Zariski site whose objects are open subschemes of $Y$, whose arrows are inclusions, and whose covering families have union the target. Let $aC$ be degreewise abelian sheafification. The canonical unit is the composite of the sheafification unit and derived evaluation, represented by $C(Y)\to(aC)(Y)\to I(Y)$ for a K-injective resolution $aC\to I$. Then
$$C(Y)\longrightarrow R\Gamma(Y_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism. The comparison is natural for open restriction, with the restriction of $aC$ identified canonically with the sheafification of the restricted cycle presheaf.

### Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

### Source contract
**Given:** The stated geometric hypotheses, Choice, fixed size bounds and the unnormalized simplicial Bloch convention. Quasi-projective means a quasi-compact immersion into some finite-dimensional projective space over the field, as in [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism); smoothness and finite type are as in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism).

**Goal:** Supply the established separated case used in finite-affine-cover induction.

[F1] MVW Proposition 19.12 and Theorem 19.11 give descent for this raw simplicial complex; the preceding definition of descent identifies the comparison as the natural raw-to-sheaf-hypercohomology map. The standing convention on printed p.5 is separated. Only the indicated quasi-projective scope is imported.

The raw complex and differential are supplied by [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex). Restriction of admissibility and equality of face coefficients under restriction are supplied by [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality); nested intersections give identity and composition of restrictions. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) supplies the general site conventions, and [def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit) specifies their Zariski abelian/derived instance and its restriction-compatible unit. Choice is used for that K-injective construction. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### External input
Import [F1] from [Mazza, Voevodsky and Weibel, Proposition 19.12](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf) at the scope and reading limits in reference 0. Take the source's auxiliary scheme $T$ to be the base point, so its cycle presheaf is the raw complex here. The nonseparated extension is a separate local deduction. No proof of the Brown-Gersten theorem or the deep moving/localization input is claimed here.


## Derived cdh localization

[Open item](item-def-cdh-derived-localization) · level 11


### Definition
Assume the Axiom of Choice and the fixed universe bounds of [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Fix the small cdh site $\mathcal C$ of [def-cdh-topology-interface](item-def-cdh-topology-interface). A presheaf of abelian groups is a contravariant functor $\mathcal C\to\operatorname{Ab}$. A complex-valued presheaf means a cochain complex of such presheaves. Its derived category $D(\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C))$ is obtained by inverting objectwise quasi-isomorphisms: maps inducing isomorphisms on cohomology at every object of $\mathcal C$.

Let $a$ be cdh sheafification of abelian presheaves and $i$ the inclusion of abelian sheaves into abelian presheaves. For a complex $C$, apply $a$ degreewise, choose a quasi-isomorphism $aC\to I$ to a K-injective complex of cdh sheaves, and define $L_{\mathrm{cdh}}C$ to be the object represented by the underlying presheaf complex $iI$. A K-injective complex is one for which every chain map from an acyclic complex is chain-homotopic to zero. The unit $C\to L_{\mathrm{cdh}}C$ is induced by $C\to iaC\to iI$ in the derived category of presheaves.

A morphism of complexes is a **cdh local equivalence** if its degreewise sheafification is a quasi-isomorphism of complexes of cdh sheaves. An object $E$ of the derived presheaf category is **cdh-local** if, for every cdh local equivalence $u:A\to B$, precomposition with $u$ induces a bijection $\operatorname{Hom}(B,E)\to\operatorname{Hom}(A,E)$. Equivalently, $E$ is cdh-local exactly when its unit $E\to L_{\mathrm{cdh}}E$ is an isomorphism. Here equivalence means isomorphism in the indicated derived category, not an objectwise isomorphism of complexes.

For $X$ an object of the chosen site, evaluation of $L_{\mathrm{cdh}}C$ at $X$ is represented by $I(X)$ and hence is $R\Gamma_{\mathrm{cdh}}(X,aC)$ in $D(\operatorname{Ab})$ as defined in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). This convention uses unbounded derived sheaves and their derived sections; it is the hypercomplete derived-sheaf convention. No assertion is made that ordinary Čech descent alone implies locality. The truncation $\tau^{\leq n}C$ is the objectwise cohomological truncation, with degree $n$ equal to the kernel of $d^n$, degrees below $n$ unchanged and degrees above $n$ zero. Sheafification of cohomology presheaves, derived localization, truncation and evaluation are distinct operations; a proposed interchange or comparison with another topology requires its own hypotheses.

### Justification
The already stated Choice premise is used through the imported K-injective resolution-existence construction in [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The cdh site and its topology are fixed by [def-cdh-topology-interface](item-def-cdh-topology-interface), with the universe conventions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Cochain maps, cohomology, acyclicity and cochain homotopies use the explicit conventions in [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input). In particular, maps of abelian presheaves are natural transformations of group homomorphisms. Their Hom sets are abelian under componentwise addition; finite direct sums, kernels and cokernels are computed at each site object. The restrictions descend uniquely to these kernels and cokernels, and the coimage-to-image comparison is an isomorphism objectwise by [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category). Thus the presheaf category is abelian. The sheaf category is abelian by the site-derived supplier. That supplier also applies to the same small category with the topology in which only maximal sieves cover: its abelian sheaves are exactly all abelian presheaves, so every presheaf complex has a K-injective resolution under the same Choice and size bounds. The Hom-computation supplier used below therefore identifies every derived Hom collection in either category with a set of homotopy classes into a resolution; no unrestricted local-smallness assertion for arbitrary derived categories is needed.

The plus construction and its universal property in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) apply to abelian-group objects: matching families, restrictions and equivalence on a common covering subsieve are compatible with addition. Every map from a presheaf to a sheaf extends uniquely through double plus; the extension respects addition, because locally its sections are represented by presheaf sections and equality can be checked on a cover. Thus $a$ is left adjoint to $i$ on abelian groups. It is additive and $ai$ is naturally the identity on sheaves.

At each object $X$, the plus construction is a colimit of matching-family groups over covering sieves ordered by refinement, with an arrow $R\to S$ when $S\subseteq R$ and transition map restriction. This is a small filtered poset: the maximal sieve covers, two covering sieves have the covering intersection as a common successor by [lem-author-cf6ede58b450-cover-intersections](item-lem-author-cf6ede58b450-cover-intersections), and parallel arrows in a poset coincide. For a map $f:F\to G$, the matching families of its objectwise kernel are exactly the matching families of $F$ sent to zero in those of $G$. Matching-family groups also preserve zero and finite products, by taking each component of a family separately. By [math:lem-filtered-colimits-of-abelian-groups-are-exact](https://alphabetamath.cc/item/lem-filtered-colimits-of-abelian-groups-are-exact), this filtered colimit preserves kernels; it preserves finite products as well, since finite products of abelian groups are finite direct sums and the additive colimit functor preserves these. Thus plus, and hence double plus, preserve finite limits. Finally, if $Q$ is the objectwise cokernel of $f$, maps $aQ\to G'$ to any abelian sheaf $G'$ correspond by adjunction to maps $Q\to iG'$, hence to maps from the target of $f$ to $iG'$ killing $f$, and hence to maps from its sheafification to $G'$ killing $af$. This is precisely the cokernel universal property in sheaves. Consequently $a$ preserves cokernels as well as kernels and is exact. A section of a sheafification is locally represented by a presheaf section, so an objectwise surjection induces local lifts. Two sheaf morphisms agreeing after these lifts agree on a cover and therefore globally, which proves that the induced map of sheaves is an epimorphism.

Let $\mathcal P=\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C)$ and $\mathcal S=\operatorname{Sh}_{\operatorname{Ab}}(\mathcal C)$. The supplier [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) gives a K-injective resolution $F\to I$ for every complex $F$ of sheaves. Since $a$ is exact, it sends acyclic presheaf complexes to acyclic sheaf complexes and descends to their derived categories. Applying the additive adjunction degreewise carries cochain maps and the formula $f-g=dh+hd$ to one another. It therefore gives natural bijections $\operatorname{Hom}_{K(\mathcal P)}(M,iI)\cong\operatorname{Hom}_{K(\mathcal S)}(aM,I)$. If $M$ is acyclic the right side vanishes, so $iI$ is K-injective in $\mathcal P$.

Now [lem-adjudicate-94864d118f52-kinjective-hom-input](item-lem-adjudicate-94864d118f52-kinjective-hom-input) applies in both abelian categories and gives, for every presheaf complex $C$, the natural bijections $\operatorname{Hom}_{D(\mathcal P)}(C,iI)\cong\operatorname{Hom}_{K(\mathcal P)}(C,iI)\cong\operatorname{Hom}_{K(\mathcal S)}(aC,I)\cong\operatorname{Hom}_{D(\mathcal S)}(aC,F)$. Here $K$ means cochain maps modulo cochain homotopy. To define $Ri$ on morphisms, represent a derived morphism $F\to F'$ uniquely by a homotopy class $I\to I'$ using the same imported Hom theorem, and take its underlying presheaf class. This respects composition and identities. Different resolutions are uniquely isomorphic in this model compatibly with their maps from $F$, by that same Hom bijection. The displayed natural bijections give the adjunction $a\dashv Ri$ by [math:thm-the-adjunction-hom-set-bijection-under-local-smallness](https://alphabetamath.cc/item/thm-the-adjunction-hom-set-bijection-under-local-smallness); its unit is the specified $C\to iaC\to iI$. The counit $aRiF\to F$ is the inverse in $D(\mathcal S)$ of $F\to I$, since $aiI=I$. It is an isomorphism. For $F,G$ the adjunction consequently identifies $\operatorname{Hom}_{D(\mathcal P)}(RiF,RiG)$ with $\operatorname{Hom}_{D(\mathcal S)}(aRiF,G)\cong\operatorname{Hom}_{D(\mathcal S)}(F,G)$; thus $Ri$ is fully faithful, meaning bijective on these Hom sets. The composite $L=Ri\,a$ is a localization: its unit $\eta$ has $L\eta$ and $\eta L$ isomorphisms, equal after the counit identifications by the two adjunction triangle identities. This construction is independent up to the unique isomorphism compatible with its unit of the chosen resolutions.

For a cdh local equivalence $u$, the adjunction makes precomposition by $u$ bijective on maps into every $RiF$, because $a(u)$ is an isomorphism. The unit of every object is itself a cdh local equivalence: after applying $a$, it is the resolution map $aC\to I$. If $E$ is local, the defining bijection for $\eta_E:E\to LE$ yields $r:LE\to E$ with $r\eta_E=1_E$. The object $LE$ is in the image of $Ri$ and is local by the preceding argument. Precomposition by $\eta_E$ is therefore injective on $\operatorname{Hom}(LE,LE)$; both $\eta_Er$ and $1_{LE}$ have composite $\eta_E$ with $\eta_E$, so $\eta_Er=1_{LE}$. Thus the unit is invertible. Conversely, an invertible unit identifies $E$ with $LE$, which is local. This proves the full stated characterization. Finally, evaluation of $iI$ at $X$ is $I(X)$, and [def-derived-sections-on-sites](item-def-derived-sections-on-sites) identifies it with derived cdh sections. The objectwise kernel truncation in the Definition uses the stated cochain and cohomology conventions. Its differential from degree $n-1$ lands in $\ker d^n$ because $d^nd^{n-1}=0$, and restrictions preserve this kernel by naturality. Its cohomology is $H^q(C)$ for $q\leq n$ and zero for $q>n$, so truncation preserves objectwise quasi-isomorphisms and is well defined on the derived category. The definition makes no comparison with Čech descent or with another site, and the hypercomplete convention here means precisely the stated unbounded derived-sheaf construction.


## Units and Picard groups in Nisnevich degree zero and one

[Open item](item-lem-nisnevich-line-bundle-torsors) · level 11


### Statement
Assume the Axiom of Choice and the fixed universe bounds in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). For a scheme $X$, use its small Nisnevich site, taken as a sufficiently small full subcategory of étale $X$-schemes containing $X$ and closed under the fibre products and Zariski refinements used below. Let $\mathbb G_m$ be the sheaf assigning $U$ the group $\Gamma(U,\mathcal O_U)^\times$. Then

$$H^0_{\mathrm{Nis}}(X,\mathbb G_m)=\Gamma(X,\mathcal O_X)^\times,\qquad H^1_{\mathrm{Nis}}(X,\mathbb G_m)\cong\operatorname{Pic}(X).$$

The second identification sends a line bundle to its frame torsor, with inverse obtained by descent from local frames. A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product.

### Facts & Assumptions

[A1] The stated Choice assumption supplies the set-indexed choice of torsor sections and local lifts in steps 2.3 and 2.4 and is inherited by the selected derived-sections model, scheme pullback theorem and étale stability theorem. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The scheme $X$, its specified small Nisnevich site, the Axiom of Choice, and the stated size bounds. Scheme and scheme-module meanings are those of [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space).

**Goal:** Identify degrees zero and one, including the frame-torsor inverse.

[F1] Nisnevich families and their residue-field-preserving lifts, scheme fibre products, and Zariski covers have the meanings in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). Étale morphisms are stable under base change and composition under the stated Choice assumption, by [math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition). Points of $U\times_T V$ over $u,v$ with common image $t$ correspond to primes of $\kappa(u)\otimes_{\kappa(t)}\kappa(v)$, with the corresponding residue fields, by [math:lem-points-of-scheme-fibre-product-residue-tensors](https://alphabetamath.cc/item/lem-points-of-scheme-fibre-product-residue-tensors).

[F2] The structure presheaf is a sheaf for a covering-family site whose category is full in schemes over its terminal scheme, whose coverings refine Zariski coverings, and whose specified covering families are fpqc. The covering-family presentation and its associated Grothendieck topology have the same sheaves. Jointly surjective étale families are fpqc; quasi-coherent modules have effective and fully faithful fpqc descent, with canonical functorial pullback data, and finite local freeness descends. These are the precise interfaces of [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input).

[F3] Units of a ring sheaf form a sheaf of abelian groups, including over the empty scheme, by [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf). The cohomology notation uses [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Under its Choice and size hypotheses, [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supplies the abelian category of sheaves and a nonnegative injective resolution computing the same K-injective derived evaluation. Evaluation is additive, preserves kernels, and preserves initial exact sequences $0\to A\to B\to C$ by [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact).

[F4] First cohomology classifies torsors by [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input). Its External input records the inverse by local lifts in an injective embedding; the precise imported construction is also recorded in External input below. Frames, torsor cocycles and change of sections, equal-transition torsor isomorphisms, and tensor transitions are supplied respectively by [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions), [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle), [lem-author-8e1c0251ef0d-cocycle-morphism](item-lem-author-8e1c0251ef0d-cocycle-morphism), and [lem-author-8e1c0251ef0d-tensor-transitions](item-lem-author-8e1c0251ef0d-tensor-transitions). These abstract site statements apply after the module-sheaf construction in step 2.2.

[F5] The Picard group is the tensor-product group of line-bundle isomorphism classes, by [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme). Invertible sheaves are the rank-one locally free scheme modules, and are quasi-coherent, by [math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf). Finite locally free modules have a well-defined locally constant rank, as in [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank).

[F6] Quasi-coherent scheme modules and their morphisms have the meaning in [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme). Scheme-module pullback is $f^*N=\mathcal O_U\otimes_{f^{-1}\mathcal O_X}f^{-1}N$, by [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces). Under Choice, it preserves quasi-coherence and, on affine charts with ring map $A\to B$, is computed by $B\otimes_A M$, by [math:lem-pullback-qc-module-quasi-coherent](https://alphabetamath.cc/item/lem-pullback-qc-module-quasi-coherent). The scheme tensor sheaf is the sheafification of sectionwise tensors, by [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product); balanced pairings and elementary-tensor formulas use [math:thm-universal-property-of-module-tensor-products](https://alphabetamath.cc/item/thm-universal-property-of-module-tensor-products). In particular the maps $b\otimes(a_1,\ldots,a_r)\mapsto(ba_1,\ldots,ba_r)$ and $(b_1,\ldots,b_r)\mapsto\sum_j b_j\otimes e_j$ are mutually inverse, giving $B\otimes_A A^r\cong B^r$.

[F7] In an abelian category, the quotient by the kernel of a morphism canonically identifies with its image, by [math:thm-first-isomorphism-theorem-in-an-abelian-category](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-in-an-abelian-category). Quotients here mean categorical cokernels of the subobject inclusions; in particular $I/G$ is a sheaf quotient, not a presheaf quotient on sections.

### External input

The [Stacks torsor-classification lemma](https://stacks.math.columbia.edu/tag/03AG), Lemma 21.4.3 and its converse construction, supplies the inverse used in [F4]: for an injective embedding $G\hookrightarrow I$ and quotient sheaf $Q=I/G$, a class represented by a global section $q$ of $Q$ has as inverse the sheaf of local lifts of $q$ to $I$. This is the inverse of the canonical bijection, including the inverse verification omitted in the source. Reference 0 records the hypotheses and reading limits. The classification is imported; the degree-zero calculation and compatibility with tensor products are local deductions below.

### Proof

1.1 The Nisnevich families give the covering-family presentation required by [F2]. Identity maps are Zariski covers and hence Nisnevich by [F1]. Composing two families preserves the required lifts, since the two residue-field isomorphisms compose, and étaleness is preserved by [F1]. For base change along $V\to T$, choose a point $v$ over $t$ and a Nisnevich lift $u$ of $t$. Then $\kappa(u)\otimes_{\kappa(t)}\kappa(v)\cong\kappa(v)$, so [F1] supplies a point of $U\times_T V$ over $v$ with the same residue field; the tensor isomorphism is the multiplication map with inverse $b\mapsto1\otimes b$. Étaleness is preserved by base change. Closure of the chosen category under the fibre products makes these coverings available there. The associated topology is therefore the specified Nisnevich topology. Every specified family is jointly surjective and étale, hence fpqc by [F2]; Zariski refinements, fullness and the terminal object are among the stated site hypotheses. Thus [F2] makes the structure presheaf a sheaf, and [F3] makes its units the abelian sheaf $G=\mathbb G_m$. [A1, F1, F2, F3, F6]

2.1 For any abelian sheaf $F$, [F3] gives an exact resolution $0\to F\to I^0\xrightarrow{d^0}I^1\to\cdots$ concentrated in nonnegative degrees and computing the stated derived evaluation. Left exactness gives $F(X)\cong\ker(d^0(X))$. Since the evaluated resolution has zero term in degree $-1$, this kernel is its zeroth cohomology. Hence $H^0_{\mathrm{Nis}}(X,F)\cong F(X)$ canonically. Apply this to the sheaf $G$ of step 1.1, for which $G(X)=\Gamma(X,\mathcal O_X)^\times$. This proves the degree-zero equality in the statement under its derived conventions. [F3, step 1.1]

2.2 Let $L$ be a line bundle on $X$. It is quasi-coherent by [F5]. Define $N_L(U)=\Gamma(U,f_U^*L)$ for $f_U:U\to X$ in the site, with restrictions given by pullback of sections and the canonical composition comparisons of [F2]. These comparisons are coherent, so the restrictions are functorial; [F6] makes every pullback quasi-coherent. A section of a scheme module $M$ on $U$ is equivalently a module map $\mathcal O_U\to M$: the map associated to $s$ sends $a$ to $as$, and its inverse takes the image of $1$. For a Nisnevich family over $U$, compatible sections of $f_U^*L$ are therefore morphisms between the canonical descent data of $\mathcal O_U$ and $f_U^*L$. Full faithfulness in [F2] glues these to a unique such map on $U$, hence a unique section. Thus $N_L$ is a sheaf on the specified site by the presentation of step 1.1; its scalar action and restrictions make it a sheaf of modules over the structure sheaf. A Zariski trivialization of $L$, pulled back to this site, identifies $N_L$ with its structure sheaf: on affine charts this is the rank-one case of [F6], and the maps agree with restriction and glue. Such trivializations are Nisnevich covers by [F1], including after passage to a slice. The frame lemma in [F4] now applies to $N_L$ and gives its $G$-torsor of frames. A scheme-module isomorphism induces an equivariant frame isomorphism by pullback and composition, so the construction is defined on line-bundle classes. [F1, F2, F4, F5, F6, step 1.1, construct]

2.3 Conversely, let $P$ be a $G$-torsor. Its local nonemptiness over the terminal object and step 1.1 give a Nisnevich family $U_i\to X$ on which it has sections; use [A1] to choose sections $s_i$. By [F4] their transition units satisfy $s_j=g_{ij}s_i$ and $g_{ij}g_{jk}=g_{ik}$. On each $U_i$ take $M_i=\mathcal O_{U_i}e_i$. In the descent convention of [F2], define $\varphi_{ij}:p_i^*M_i\to p_j^*M_j$ by $\varphi_{ij}(e_i)=g_{ij}^{-1}e_j$. On triple fibre products the cocycle equation makes the two composite maps agree. Equivalently the descended frames obey $e_j=g_{ij}e_i$. These are quasi-coherent module descent data. [A1, F1, F2, F4, F5, step 1.1, choose, construct]

2.4 For the group law, take one nonnegative injective resolution $0\to G\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ as in [F3], and put $Q=I^0/G$. Exactness and [F7] identify $Q$ canonically with $\ker(d^1)$, with $I^0\to Q$ induced by $d^0$. Kernel preservation in [F3] therefore identifies $Q(X)$ with $\ker(d^1(X))$. Consequently the map $Q(X)\to H^1_{\mathrm{Nis}}(X,G)=\ker(d^1(X))/\operatorname{im}(d^0(X))$ is a surjective group homomorphism. By the imported inverse in [F4] and External input, the class of $q\in Q(X)$ corresponds to the torsor $P_q$ of local lifts of $q$ to $I^0$. For $q,r\in Q(X)$, choose lifts $t_i,u_i$ on a common Nisnevich covering refinement. Then $t_i+u_i$ lift $q+r$, and their overlap differences are $(t_j-t_i)+(u_j-u_i)$. Writing the abelian group $G=\mathbb G_m$ multiplicatively, these are the products of the transition units of $P_q$ and $P_r$. This computes addition using the resolution itself, rather than importing an unstated group-law assertion about the torsor bijection. [A1, F1, F3, F4, F7, step 1.1, algebra, choose]

3.1 The family of step 2.3 is fpqc by [F1] and [F2]. Effective descent gives a quasi-coherent module $L$ with those canonical pullbacks and transition maps, and finite local freeness descends by [F2]. To check rank one, fix $x\in X$, take a local affine chart on which $L$ is free of some finite rank $r$, and a point $u\in U_i$ above $x$. Take an affine neighbourhood of $u$ inside the inverse image of that chart. The affine pullback formula and coordinate isomorphism in [F6] show that $f_i^*L$ has rank $r$ there. It also has rank one there because $f_i^*L\cong M_i$. Well-definedness of rank in [F5] gives $r=1$. This pointwise argument makes no simultaneous choice of points; if $X$ is empty the condition is vacuous. Thus $L$ is a line bundle. [F1, F2, F5, F6, step 2.3]

4.1 Apply step 2.2 to the descended $L$. Its chosen frames and the $s_i$ have the same transitions, so the equal-transition lemma in [F4] gives an equivariant isomorphism from its frame torsor to $P$. Conversely, starting with a line bundle and its Zariski frames, full faithfulness of descent in [F2] identifies the descended module with the original one. To compare choices, refine two trivializing families by their pairwise fibre products, which still cover by step 1.1. On this common refinement, the change-of-section formula in [F4] gives the scalar basis changes intertwining the descent data; full faithfulness descends these to an isomorphism. Likewise an equivariant torsor isomorphism transports chosen sections and their transitions, giving the same descended line-bundle class. Thus line-bundle classes and torsor classes are in bijection, with precisely the asserted inverse. [F1, F2, F4, step 1.1, step 2.2, step 3.1]

5.1 Let $L,M$ be the line bundles corresponding to $P_q,P_r$ under step 4.1, and use the corresponding local frames. The tensor-frame calculation in [F4] says that the tensor frames have the products of the two transition units. This calculation applies to the scheme tensor product: [F6] gives on affine trivializing charts the bilinear pairing of pulled-back sections into the pullback of $L\otimes_{\mathcal O_X}M$, sending $(ae_i,bf_i)$ to $ab(e_i\otimes f_i)$. These formulas agree on overlaps, since changing frames multiplies both sides by the same two units. They define the pairing globally, and the site-tensor universal property in [F4] identifies the site tensor with $N_{L\otimes M}$: locally the resulting map sends a tensor frame to a frame, and its local inverses agree on overlaps and glue. Hence the frame torsor of $L\otimes M$ has exactly the transitions computed for $P_{q+r}$ in step 2.4. The equal-transition isomorphism in [F4] identifies these torsors. Since every cohomology class has such a representative, step 4.1 now gives compatibility of the bijection with the two group laws. [F4, F5, F6, step 2.2, step 4.1, step 2.4, algebra]

6.1 The unit line bundle has the trivial frame torsor by [F4]. With the group structure of [F5], step 5.1 proves the asserted group isomorphism, and step 4.1 gives its frame-descent inverse. Step 2.1 gives the degree-zero identification. All constructions retain the stated Choice and size hypotheses, and no regularity, quasi-compactness or finite-type condition on $X$ has been introduced. [A1, F3, F4, F5, step 2.1, step 4.1, step 5.1] ∎


## Principal divisors are endpoint boundaries

[Open item](item-lem-author-1437578267d2-graph-boundary) · level 11


### Statement
Assume AC. Let $T$ be any integral finite-type curve over an algebraically closed field $k$; all products are over $k$. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$, and let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0,1$. Such a $W$ is called admissible. Define $b[W]=[W_1]-[W_0]$, extended linearly, with
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)],\qquad \epsilon=0,1,$$
where $p:T\times\mathbb A^1\to T$ is projection. The endpoint intersections are finite and have the indicated finite lengths; projection on each endpoint identifies its residue field with that of the corresponding point of $T$. These definitions require no embedding of $T$; they agree with the supported-cycle definitions whenever $T$ is embedded as a closed curve in a smooth finite-type $k$-scheme of pure dimension three. For these groups and this boundary,
$$bB_1(T)=\operatorname{im}(\operatorname{div}_T:k(T)^\times\to Z_0(T)).$$
For $f\ne1$ in $k(T)^\times$, the reduced closure in $T\times\mathbb A^1_s$ of the rational graph $s=1/(1-f)$ is an admissible generator whose boundary is $\operatorname{div}_T(f)$; for $f=1$ the zero chain suffices.

### Statement references

[lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[lem-author-1437578267d2-boundary-norm](item-lem-author-1437578267d2-boundary-norm)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)

[math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)

[math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)

[math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[math:def-graph-morphism-over-base](https://alphabetamath.cc/item/def-graph-morphism-over-base)

[math:lem-graph-closed-separated-target](https://alphabetamath.cc/item/lem-graph-closed-separated-target)

[math:lem-affine-morphism-separated](https://alphabetamath.cc/item/lem-affine-morphism-separated)

[math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite)

[thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input)

[thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

### Facts & Assumptions
**Given:** AC, $k,T$ and $f\in k(T)^\times$ as stated.

**Goal:** Realize each principal divisor by an endpoint boundary and prove equality of subgroups.

[F1] On an integral finite-type curve, length orders are well-defined and have finite support. For $R=\mathcal O_{T,x}$ at a closed point, $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R$, and $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism. A quotient by a nonzero element has finite length. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F2] For exactly the intrinsic endpoint groups in the Statement, the boundary is well-defined for every integral finite-type curve over an algebraically closed field; every boundary is principal. For a dominant admissible generator, it is the divisor of the norm of $(s-1)/s$ from its function field to $k(T)$. No normality or separability is required. Dominant means having dense image. [lem-author-1437578267d2-boundary-norm](item-lem-author-1437578267d2-boundary-norm)

[F3] Under the embedding hypotheses in the Statement, the supported-cycle groups in degrees zero and one and their boundary are exactly these intrinsic groups and quotient-length formula. [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[F4] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$. Integral means nonempty, reduced and irreducible, equivalently with domain rings on nonempty affine opens. Finite type means locally finite type and quasi-compact. Curve dimension is chain dimension, the supremum of lengths of strict chains of nonempty irreducible closed subsets. Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. Closed subschemes are closed immersions, with closed underlying image and surjective structure-sheaf map. Open subschemes carry the restricted structure sheaf. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[F5] The free abelian groups consist of finite formal integer combinations of their generators, and a map on generators extends uniquely to a homomorphism. The notation $\ell_R(M)$ denotes composition-series length, with its independence and finiteness here supplied by F1; quotients have their induced module action. A point residue field is $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[F6] For an integral finite-type scheme, the function field is its generic stalk, canonically the fraction field of every nonempty affine chart; regular sections inject into it. An affine finite-type $k$-scheme has a finitely generated coordinate algebra. The distinguished open $D(c)$ of $\operatorname{Spec}A$ is $\operatorname{Spec}A_c$ and has section ring $A_c$. Morphisms of affine schemes correspond contravariantly to ring maps. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated), [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion), [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme), [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[F7] Scheme fibre products exist with affine tensor-product charts. Relative affine space has polynomial charts; thus $T\times_k\mathbb A^1_s$ has charts $\operatorname{Spec}A[s]$, and its endpoints have rings $A[s]/(s-\epsilon)=A$. For a $k$-morphism $h:O\to\mathbb A^1_k$, its graph is $(\operatorname{id}_O,h)$ with first projection the identity. The graph is a closed immersion because $\mathbb A^1_k\to\operatorname{Spec}k$ is affine, hence separated; the source $O$ need not be separated. Closed immersions have affine quotient charts and remain closed immersions under base change. [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-graph-morphism-over-base](https://alphabetamath.cc/item/def-graph-morphism-over-base), [math:lem-affine-morphism-separated](https://alphabetamath.cc/item/lem-affine-morphism-separated), [math:lem-graph-closed-separated-target](https://alphabetamath.cc/item/lem-graph-closed-separated-target), [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change)

[F8] Every closed subset of a scheme has a unique reduced induced closed subscheme. For integral finite-type $k$-schemes, a nonempty open has the same dimension as the whole scheme. [thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input](item-thm-adjudicate-d1c21a67502d-reduced-closed-subscheme-input), [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)

[F9] An integral finite-type curve is Noetherian, and every proper closed subset is a finite set of closed points. [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite) The field norm is the determinant of multiplication on the finite field extension; in the identity extension its one-by-one matrix is $(f)$, so the norm of $f$ is $f$. [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)

[A1] AC is retained through F1–F3, the affine finite-generation and closed-immersion inputs, and curve finiteness in F9. The graph and coefficient constructions make no additional infinite choices. No separatedness, smoothness or normality of $T$ is assumed. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 By F4 and quasi-compactness, $T$ has a finite cover by finite-type affine charts. Their polynomial charts in F7 and the affine quotient description show that every closed subscheme of $T\times\mathbb A^1$ has a finite cover by spectra of finitely generated $k$-algebras, hence is finite type. For an admissible generator $V$, each endpoint is a proper closed subset, finite and zero-dimensional by F9. At each intersection point $s-\epsilon$ is nonzero in the local domain, so F1 gives finite quotient length. Base change in F7 makes the intersection a closed subscheme of the ambient endpoint $T$, so its image is closed and the quotient description and F5 identify the residue fields. F5 extends the formula linearly; F3 supplies the embedded comparison. This also agrees with the intrinsic well-defined boundary of F2. If $f=1$, F1 gives zero divisor, realized by the zero chain. If $f\ne1$, put $h=1/(1-f)$, which is neither zero nor one. Choose one of these nonempty finite-type affine charts $\operatorname{Spec}A\subset T$ and write $h=a/c$ with $a,c\in A$ and $c\ne0$ by F6. The nonempty affine open $O=D(c)$ contains the generic point and is finite type, since $A_c$ is generated over $k$ by the finite generators of $A$ and $1/c$. Sending $s$ to $a/c$ defines $h:O\to\mathbb A^1_k$ by F6. Its graph $G$ is a closed subscheme of $O\times\mathbb A^1$ by F7 and is isomorphic to $O$ by its first projection (on rings, evaluation gives $A_c[s]/(s-a/c)=A_c$). Thus $G$ is integral with function field $k(T)$. [given, A1, F1, F2, F3, F4, F5, F6, F7, F9, construct, algebra]

2.1 Let $W$ be the reduced induced closed subscheme on the topological closure of $G$ in $T\times\mathbb A^1$, using F8. That closure is irreducible: any two nonempty relative opens meet the dense irreducible subset $G$ in nonempty opens, which intersect. Thus $W$ is integral by F4. Its restriction to $O\times\mathbb A^1$ is the reduced closed subscheme supported on $G$, hence is $G$ by uniqueness in F8. The finite-type argument of step 1.1 applies to $W$, and F8 gives $\dim W=\dim G=\dim O=\dim T=1$. The generic stalk is unchanged on the nonempty open $G$, so F6 identifies $k(W)=k(G)=k(T)$ compatibly with projection. In particular $W\to T$ is dominant: its image contains the dense open $O$. This construction is independent of the chosen domain for $h$, since any two domains have a nonempty common open, their graphs agree there by their common affine ring map, and that common graph is dense in each integral graph; their topological closures and then reduced induced structures coincide. In $k(W)=k(T)$ the coordinate $s$ is $h\ne0,1$, so neither endpoint contains $W$; step 1.1 makes it admissible with its stated endpoint multiplicities. Finally $(s-1)/s=(h-1)/h=f$, and F9 makes the identity-extension norm equal to $f$. F2 therefore gives $b[W]=\operatorname{div}_T(f)$. This realizes every principal divisor, including $f=1$ by step 1.1; F2 gives the reverse inclusion. The claimed equality of subgroups follows without changing any singular-point length convention. [A1, F1, F2, F4, F6, F7, F8, F9, step 1.1, construct, algebra] ∎


## Actual raw simplicial cycles satisfy descent without separatedness

[Open item](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent) · level 11


### Statement
Assume the Axiom of Choice and fixed Grothendieck universe bounds for the following sheaf and derived constructions; universe existence is a hypothesis. Let $k$ be any field, $X$ a smooth finite-type $k$-scheme, without a separatedness assumption, and $r\geq0$ an integer. For each open subscheme $W\subseteq X$, put $C(W)=z^r(W,\bullet)$, the unnormalized simplicial Bloch complex, with open-restriction maps on its generators. Reindex homological degree $n$ as cohomological degree $-n$, keeping the same differential. The small Zariski site has these opens as objects, inclusions as arrows and families whose union is the target as covers. Let $aC$ be degreewise abelian sheafification. The canonical unit, represented for a K-injective resolution $aC\to I$ by
$$\eta_{C,X}:C(X)\longrightarrow(aC)(X)\longrightarrow I(X)=R\Gamma(X_{\mathrm{Zar}},aC),$$
is a quasi-isomorphism, naturally for open restriction. Equality here means a representative of the derived value. The raw presheaf $C$ also takes every binary open cover $W=U\cup V$ to a homotopy-cartesian square: the canonical map from $C(W)$ to the homotopy fiber of the difference map $C(U)\oplus C(V)\to C(U\cap V)$ is a quasi-isomorphism. For a homological chain map $f:A\to B$, use the fiber model $F_n=A_n\oplus B_{n+1}$ with $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. A quasi-isomorphism induces isomorphisms on all homology groups, equivalently all cohomology groups after reindexing. These conclusions establish the canonical comparison for the original raw definition, without replacing it by hypercohomology.

### Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)

[lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

### Facts & Assumptions
**Given:** $k,X,r,C$, Choice and the compatible universe bounds in the Statement; all products and opens carry their $k$-scheme structures.

**Goal:** Establish raw binary Mayer–Vietoris and then the actual sheafification-unit equivalence on $X$ and all its opens.

[A1] Choice is retained to invoke the Bloch and derived-resolution suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The field, structure-map, smoothness, finite-type and separatedness conventions are [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base). No separatedness of the structure morphism is assumed.

[F1] Nonseparated raw simplicial localization makes every open-restriction cokernel acyclic. [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

[F2] Bloch complexes are free on their admissible integral generators with the specified ordered faces and local-length boundary. For opens in the smooth finite-type domain, open restriction is a chain map with the generator rule in the Statement. Iterated restrictions are nested intersections, so identities and composition agree, including empty restrictions. Supported admissible generators form exactly the restriction kernel. An acyclic restriction cokernel identifies that kernel with the indicated actual homotopy fiber. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction) [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel) [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[F3] The separated-cycle input supplies the canonical unit equivalence on smooth quasi-projective finite-type schemes over any field, using this unnormalized complex. Quasi-projective here means an immersion into finite-dimensional projective space that is quasi-compact. [thm-adjudicate-f6007757a8ac-separated-cycle-descent-input](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input) [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)

[F4] The Zariski-derived-unit definition supplies the abelian presheaf and sheaf constructions, additive degreewise sheafification, its chain-map unit, K-injective derived evaluation and its independence and naturality. In particular $(aC)|_U=a(C|_U)$, with the same unit, and the restricted complex $I|_U$ computes derived sections on $U_{\mathrm{Zar}}$. Its declared general site-derived supplier provides the unbounded construction. [def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)

[F5] References 2–4 in External input allow one termwise injective K-injective resolution $aC\to I$. For every two-open cover $W=U\cup V$, its section complexes have the exact sequence $0\to I(W)\to I(U)\oplus I(V)\to I(U\cap V)\to0$, with difference of restrictions as last map. Together with [F4], this computes binary derived Mayer–Vietoris using the same representative on all opens. For homological fiber calculations, reindex its evaluated complex as $I_n(W)=I^{-n}(W)$ with the same differential.

[F6] A scheme has an affine open cover, and finite type includes quasi-compactness. Thus $X$ has a finite affine open cover. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) Reference 5 and the field-base conversion in reference 6 show that every finite-type open subscheme of a finite-type affine $k$-scheme is quasi-projective in [F3]'s convention; this includes the whole affine scheme. Here quasi-affine over $k$ means a quasi-compact open subscheme of an affine $k$-scheme; finite type over the field supplies the required quasi-compactness.

[F7] Closed immersions are local on an open cover of the target. For these finite-type simplex products, cycle open locality identifies surviving generic local rings, componentwise ambient codimensions and face lengths, and tests the admissibility condition on open covers. [math:lem-closed-immersion-local-on-target](https://alphabetamath.cc/item/lem-closed-immersion-local-on-target) [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[F8] Abelian groups form an abelian category. Short exact sequences of complexes give long exact homology sequences, and the five lemma applies to five-term windows of their morphisms. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category) [math:thm-long-exact-sequence-in-homology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-homology) [math:thm-five-lemma-for-a-morphism-of-long-exact-sequences](https://alphabetamath.cc/item/thm-five-lemma-for-a-morphism-of-long-exact-sequences)

[F9] Reference 7 in External input supplies Noetherianity of a finite-type scheme over a Noetherian base, and reference 8 supplies Noetherianity of its open subschemes. A locally Noetherian scheme has an affine open cover by spectra of Noetherian rings, and a Noetherian scheme is locally Noetherian and quasi-compact. Here a Noetherian ring means a commutative ring in which every ascending chain of ideals stabilizes. A morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. Locally finite type restricts to source opens by its affine-local interface; finite type means locally finite type and quasi-compact. Smoothness is germwise and restricts to opens. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

### External input
References 2–4 import the unbounded gluing, termwise injective resolution and ringed-site construction from [Stacks, tag 08BX](https://stacks.math.columbia.edu/tag/08BX), [tag 079P](https://stacks.math.columbia.edu/tag/079P) and [tag 07A5](https://stacks.math.columbia.edu/tag/07A5). Apply them to the constant integer ring sheaf on the Zariski space; its modules identify with abelian sheaves by integer multiplication and sheaf gluing, as in [F4]. No boundedness or separatedness is imposed.

References 5–6 import the quasi-affine finite-type implication and its affine-target conversion from [Stacks, tag 0B3H](https://stacks.math.columbia.edu/tag/0B3H) and [tag 01VZ](https://stacks.math.columbia.edu/tag/01VZ). The hypotheses and reading limits in the source records are binding. The following composition and finite-cover argument are local proofs, not claimed reconstructions of these imported results.

References 7–8 import [Noetherianity of finite-type sources](https://stacks.math.columbia.edu/tag/01T6) and [Noetherianity of locally closed subschemes](https://stacks.math.columbia.edu/tag/02IK). Step 1.1 applies these to the field base and arbitrary source opens, then uses the declared local-finite-type and germwise smoothness interfaces to establish the geometric domain of every cycle complex used below. The hypotheses and reading limits in those source records are binding.

### Proof
1.1 A field $k$ has only the ideals $0$ and $k$: any ideal containing $a\ne0$ contains $a^{-1}a=1$. Thus every ascending chain of ideals stabilizes, so $k$ is Noetherian in [F9]'s convention. Its spectrum has one point and is quasi-compact, so $\operatorname{Spec}k$ is Noetherian. Reference 7 in [F9] now makes $X$ Noetherian, and reference 8 makes every open subscheme $T\subseteq X$ Noetherian, hence quasi-compact. Its structure morphism to $\operatorname{Spec}k$ is quasi-compact: the only target opens are the point and the empty set, whose inverse images are respectively $T$ and the empty set. This morphism is locally of finite type by the source-locality interface in [F9], hence of finite type. It is smooth by the germwise smoothness interface in [F9]. For $T=\varnothing$, quasi-compactness uses the empty subcover and smoothness and locally finite type hold vacuously. Consequently every open of $X$, including all opens and intersections used below, is smooth finite type, so its Bloch complex in [F2] is defined. [given, F2, F9, construct]

2.1 By step 1.1 all the following opens are smooth finite type. Let $W=U\cup V$ and $S=|W|\setminus|U|$, a closed subset contained in $V$. Put $D=\ker(C(W)\to C(U))$. Its degree-$n$ generators are supported in $p_n^{-1}(S)$ by [F2], where $p_n:W\times_k\Delta^n\to W$ is projection; no scheme structure on $S$ is used. Conversely an admissible integral closed subscheme of $V\times_k\Delta^n$ supported there is closed in $W\times_k\Delta^n$: on the target cover by $U\times_k\Delta^n$ and $V\times_k\Delta^n$, its inclusion is respectively empty and a closed immersion, so [F7] applies. Restriction back to $V$ recovers that identical scheme, and the same is true starting with a supported generator in $W$. On every face its intersections are empty above $U$; above $V$ they have the same generic local rings and codimensions. The open-local test in [F7], applied inside ambient irreducible components as in [F2], gives admissibility in $W$ exactly when it holds in $V$. All face multiplicities agree by [F7], so this is an identification of complexes, not just groups. We therefore have compatible exact rows $0\to D\to C(W)\to C(U)\to Q_1\to0$ and $0\to D\to C(V)\to C(U\cap V)\to Q_2\to0$ whose first vertical map is the identity. Both $Q_i$ are acyclic by [F1]. No cycle complex on a singular complement or dimension-index conversion is needed. [given, F1, F2, F7, step 1.1]

3.1 By [F2], the common kernel maps quasi-isomorphically to both restriction fibers, compatibly with step 2.1. Thus the map between these fibers is a quasi-isomorphism. For completeness, write the restriction square as $A\xrightarrow{f}B$, $A\xrightarrow{j}C'$, $B\xrightarrow{k'}E$, $C'\xrightarrow{h}E$, with $hj=k'f$, and write its fiber map as $\phi=(j,k')$. Let $P=\operatorname{fib}(g)$ for $g:B\oplus C'\to E$, $g(b,c)=k'b-hc$, and let $l:A\to P$ be $l(a)=(fa,ja,0)$. Both $\operatorname{fib}(\phi)_n$ and $\operatorname{fib}(l)_n$ have coordinates $(a,b,c,e)\in A_n\oplus B_{n+1}\oplus C'_{n+1}\oplus E_{n+2}$. Their differentials have the same first three coordinates $(da,fa-db,ja-dc)$ and respective last coordinates $k'b-hc+de$ and $-k'b+hc+de$. Negating $e$ gives a chain isomorphism between them. For any chain map $t:M\to N$, its fiber has the degreewise split exact sequence $0\to N[-1]\to\operatorname{fib}(t)\to M\to0$, where $N[-1]_n=N_{n+1}$ with differential $-d_N$. The connecting map on homology is induced by $t$, directly from the displayed fiber differential; [F8] therefore implies that $t$ is a quasi-isomorphism exactly when its fiber is acyclic. Apply this to $\phi$ and then to $l$. Hence $l$ is a quasi-isomorphism, proving the stated raw binary Mayer–Vietoris convention. This argument is unchanged on components of different dimensions. [F2, F8, step 2.1, algebra]

4.1 Use [F4]–[F5] to represent the actual unit by a presheaf chain map $\eta:C\to aC\to I$. The target has binary Mayer–Vietoris by [F5]: its exact section sequence and [F2]'s kernel-to-fiber lemma identify $I(W)$ with the difference-map fiber. The source has the same property by step 3.1, and naturality gives a commuting comparison of these fiber maps on complexes. If $\eta$ is a quasi-isomorphism on $U,V,U\cap V$, it is so on the difference-map fibers: compare their degreewise split exact sequences with shifted intersection subcomplex and quotient the direct sum on $U,V$, and apply [F8] in every degree. It follows that $\eta$ is a quasi-isomorphism on their union. By [F4], the restricted resolution and sheafification identify each of these maps with precisely the canonical unit of [F3]. [F2, F3, F4, F5, F8, step 3.1]

5.1 Choose a finite affine cover $X=A_1\cup\cdots\cup A_m$ using [F6]. Each $A_i$ is smooth finite type by step 1.1 and quasi-projective by [F6], so [F3] supplies its comparison. Induct on $m$. For $W=A_1\cup\cdots\cup A_{m-1}$, the intersection $O=W\cap A_m$ is an open of the finite-type affine scheme $A_m$. It is smooth finite type by step 1.1; by [F6] it is quasi-projective in the required immersion convention. Hence [F3] supplies the comparison on $O$, while the induction hypothesis supplies it on $W$. Step 4.1 gives it on $X=W\cup A_m$. For $X=\varnothing$, the cycle complex is zero and a sheaf on the empty space has zero group of sections, so the comparison is also an equivalence. The entire argument applies to every open of $X$, since each is smooth finite type by step 1.1. All maps are the same canonical unit by [F4], so no choice of affine cover affects the resulting comparison or its naturality. No separatedness, pure dimension or restriction on the field has been added. [A1, F2, F3, F4, F6, step 1.1, step 4.1, choose] ∎

### Source notes
Reference 0 is the historical Levine citation for the nonseparated localization premise now supplied by the declared localization item. Reference 1 is the historical MVW citation for the separated comparison supplied by the declared separated-cycle item and the two-localization-row proof pattern. Their retained reading records describe earlier work; this repair read those supplier bodies and does not claim a fresh reading of either primary PDF. The proof above supplies the nonseparated finite-cover extension locally, conditional on those precise suppliers and the newly explicit imported premises. These repairs concern generated content, not a new finding against the original article.


## Normalization and the curve divisor quotient

[Open item](item-lem-author-1437578267d2-normalization-quotient) · level 12


### Statement
Assume AC. Let $T$ be an integral affine finite-type curve over an algebraically closed field, $\nu:C=\widetilde T\to T$ its normalization, and $K=k(T)=k(C)$. Write $Q(D)=Z_0(D)/\operatorname{div}_D(k(D)^\times)$. Then $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$ for $f\in K^\times$, and $\nu_*$ induces $Q(C)\twoheadrightarrow Q(T)$. Explicitly, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and length orders downstairs. There is a canonical identification $\operatorname{Pic}(C)=\mathrm{CH}^1(C)=Q(C)$ sending $\mathcal O_C(y)$ to $[y]$; hence normalization induces a surjection from this Picard group to $Q(T)$. Here $\operatorname{Pic}$ is the group of isomorphism classes of line bundles under tensor product and $\mathrm{CH}^1$ is degree-zero Bloch homology.

### Facts & Assumptions
**Given:** AC and the curve and normalization in the Statement.

**Goal:** Establish divisor compatibility, surjectivity and the source identification.

[F1] Write $T=\operatorname{Spec}A$, where $A$ is a finitely generated $k$-algebra which is a nonzero domain of Krull dimension one, and $K=\operatorname{Frac}A$. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$; such a field is perfect. The normalization interface constructs $C=\operatorname{Spec}B$, where $B\subset K$ is the integral closure of $A$ (elements satisfying monic polynomials over $A$), proves that $B$ is finite as an $A$-module, and proves that $C$ is an affine smooth integral finite-type curve with function field $K$. In particular, $A\subset B\subset K$ gives $\operatorname{Frac}B=K$; finite module generators of $B$, together with algebra generators of $A$, generate $B$ over $k$. Its dimension one also follows from the dimension formula in F5 and this common function field. The map $\nu$ is finite and has nonempty finite closed fibers with residue fields $k$. Finite morphisms are proper under AC. Smoothness over $k$ means geometric regularity: after every field extension, all local rings are regular. [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface), [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect), [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields), [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper), [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical), [math:thm-affine-domain-dimension-transcendence-degree](https://alphabetamath.cc/item/thm-affine-domain-dimension-transcendence-degree)

[F2] For an integral finite-type curve $D$, $Z_0(D)$ consists of finite formal integer sums of its reduced closed points. If $R=\mathcal O_{D,x}$, the length order is $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R$, where $\ell_R$ is composition-series length. It is well-defined and additive and has finite support, so $\operatorname{div}_D(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism. Thus $Q(D)$ is the quotient by its image, with cycles identified when their difference is a principal divisor. For a proper dominant curve morphism $p$, pushforward is $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$, extended linearly, and $p_*\operatorname{div}(g)=\operatorname{div}(\operatorname{Nm}(g))$. Here $\kappa(x)$ is the local ring modulo its maximal ideal; the field degree is vector-space dimension and the norm is the determinant of multiplication on the finite function-field extension. No normality or separability is required. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders), [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[F3] Under AC, every closed-point local ring of a smooth integral finite-type curve is a one-dimensional Noetherian regular local domain and a DVR. This applies to $C$ in F1. A uniformizer $\pi$ generates its maximal ideal; every nonzero local element is $u\pi^n$ for a unit $u$ and $n\geq0$. Its normalized valuation assigns $n-m$ to $u\pi^n/(v\pi^m)$. Length orders agree with this valuation, and a fixed nonzero rational function has nonzero length order at only finitely many closed points. [math:thm-local-ring-smooth-curve-dvr](https://alphabetamath.cc/item/thm-local-ring-smooth-curve-dvr), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F4] On an integral scheme, Cartier divisors modulo principal Cartier divisors map isomorphically to the Picard group via $D\mapsto\mathcal O(D)$. The sheaf of meromorphic functions on an integral scheme is the constant sheaf of its function field. Thus on $C$ a Cartier divisor is represented by nonzero rational functions $f_i\in K^\times$ on an open cover, with $f_i/f_j$ regular units on overlaps; data are identified after refinement and multiplication by regular units. Addition multiplies local equations, the zero divisor has unit equations, and a principal Cartier divisor has one equation $f\in K^\times$ on all of $C$. Its associated line bundle has local description $\mathcal O_C(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$. A line bundle is an $\mathcal O_C$-module locally free of rank one; its isomorphism class belongs to the Picard group with tensor-product law. [math:thm-cartier-divisors-mod-principal-to-picard](https://alphabetamath.cc/item/thm-cartier-divisors-mod-principal-to-picard), [math:def-cartier-divisor](https://alphabetamath.cc/item/def-cartier-divisor), [math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor), [math:def-sheaf-total-quotient-rings](https://alphabetamath.cc/item/def-sheaf-total-quotient-rings)

[F5] Bloch's degree-zero group is generated by integral codimension-one closed subschemes of $C$; its degree-one generators are the admissible integral codimension-one closed subschemes of $C\times\Delta^1$, with the endpoint length boundary. Codimension is the dimension of the ambient local ring at the generic point. For a finite-type domain $R$ over $k$, $\dim R=\operatorname{trdeg}_k\operatorname{Frac}R$ and $\operatorname{ht}\mathfrak p+\operatorname{trdeg}_k\operatorname{Frac}(R/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}R$, where height means $\dim R_{\mathfrak p}$. The intrinsic endpoint group $B_1(C)$ is free on integral curves in $C\times\mathbb A^1_s$ contained in neither endpoint; its boundary is $b[W]=[W_1]-[W_0]$ with the quotient-length coefficients, and its boundary subgroup equals the principal-divisor subgroup. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [math:thm-affine-domain-dimension-transcendence-degree](https://alphabetamath.cc/item/thm-affine-domain-dimension-transcendence-degree), [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [lem-author-1437578267d2-graph-boundary](item-lem-author-1437578267d2-graph-boundary)

[F6] For an integral finite-type curve $D$, its function field is the generic stalk and the fraction field of every nonempty affine chart; regular sections on nonempty opens embed in that field. Under AC, every point other than the generic point is closed, and every proper closed subset is finite. A stalk element is represented by a section on a neighbourhood, with equality of germs meaning equality on a smaller neighbourhood. Consequently, if a rational function and its inverse belong to the local ring at a point, shrinking gives mutually inverse regular sections near that point. Such local sections glue uniquely when they agree, so a rational function which is a unit in every local ring on an open set is a regular unit on that open set. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:lem-curve-closed-subsets-finite](https://alphabetamath.cc/item/lem-curve-closed-subsets-finite), [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf), [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[F7] All products are over $k$. Fibre products have affine tensor-product charts; thus $C\times\mathbb A^1_s=\operatorname{Spec}B[s]$, using the elementary isomorphism $B\otimes_k k[s]\cong B[s]$. Closed subschemes of an affine spectrum are spectra of quotient rings; an affine scheme is integral exactly when its ring is a nonzero domain. In particular the integral closed subschemes here are $\operatorname{Spec}(B[s]/\mathfrak p)$ for prime ideals $\mathfrak p$. Under AC, nonempty irreducible closed subsets of an affine spectrum are exactly the $V(\mathfrak p)$, with generic point $\mathfrak p$. This correspondence reverses strict inclusions, so the chain dimension of an affine scheme is its ring's Krull dimension. [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:lem-closed-immersion-affine-quotient-and-base-change](https://alphabetamath.cc/item/lem-closed-immersion-affine-quotient-and-base-change), [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme), [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)

[A1] AC states that every family of nonempty sets has a choice function. It is retained through the normalization, finite-properness, smoothness, DVR, curve-finiteness, affine-geometry and dimension-formula inputs. Lifting the finitely many points of a fixed zero-cycle and choosing a uniformizer at one fixed point require only finite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 By F1 the normalization is proper and dominant with function-field extension $K/K$: the generic prime $(0)$ of $B$ contracts to $(0)$ of $A$, so its image contains the generic point of $T$. The norm in this identity extension is $f$, since multiplication by $f$ on the one-dimensional $K$-space $K$ has matrix $(f)$. Applying F2 yields $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$. Every point above a closed $x$ has residue degree one by F1; comparing coefficients, with valuation compatibility from F3, gives the displayed order formula. [F1, F2, F3, F7, A1, given]

1.2 By F1 and F3, each closed-point local ring of $C$ is a DVR. Taking valuations of local Cartier equations gives integer coefficients independent of representatives and refinements: unit ratios have valuation zero. Choose a chart containing the generic point and its equation $f_i$. By F6, shrink inside that chart to a nonempty open $V$ on which both $f_i$ and $f_i^{-1}$ are regular. The divisor vanishes on $V$ by F4; its remaining coefficients have finite support because $C\setminus V$ is finite by F6. This defines an additive map from Cartier divisors to $Z_0(C)$, since valuations turn products of equations into sums. If all coefficients vanish, each equation is a unit at every closed point of its chart and at the generic point. These are all the points by F6, so their local inverses glue to regular inverses on the chart. The Cartier divisor is then zero by F4. [F1, F3, F4, F6, A1, algebra]

2.1 The equality in step 1.1 makes pushforward descend to $Q(C)\to Q(T)$: two cycles differing by a principal divisor have images differing by the principal divisor of the same function. Every closed point of $T$ has a closed preimage by F1, and each such point pushes forward with coefficient one. Lifting the finitely many points of any zero-cycle therefore proves surjectivity. [F1, F2, A1, step 1.1, construct]

2.2 Fix a closed point $y$. A uniformizer in $\mathcal O_{C,y}$ is a rational function regular on some neighbourhood of $y$ by F6. On that neighbourhood it has only finitely many other zeros by F3: at a closed point a nonzero regular function is a nonunit exactly when its DVR valuation is positive. Remove these other points, which are closed by F6. The equation has valuation one at $y$, valuation zero at every other closed point of the remaining neighbourhood, and is nonzero at the generic point. By F6 it is a regular unit away from $y$. This equation and the equation one on $C\setminus\{y\}$ have unit ratio on the overlap, so they define a Cartier divisor mapping to $[y]$. Integer sums prove surjectivity of the map in step 1.2, already injective there. Its image on principal Cartier divisors is exactly the subgroup of principal length divisors by F2–F4. Passing to quotients and applying F4 gives $Q(C)\cong\operatorname{Pic}(C)$, with $[y]$ corresponding to $\mathcal O_C(y)$ and its local equation convention in F4. [F2, F3, F4, F6, A1, step 1.2, construct]

3.1 By F3 and F6, the codimension-one points of $C$ are precisely its closed points; the generic local ring is the field $K$ and has dimension zero. Thus $z^1(C,0)=Z_0(C)$. Put $s=t_1$, so substitution $t_0=1-s$ identifies $\Delta^1$ with $\mathbb A^1_s$. By F1, F5 and F7, the domain $B[s]$ is finite type over $k$, has fraction field $K(s)$ and has dimension two: a transcendence basis of $K/k$ has one element, and adjoining the indeterminate $s$ adds one algebraically independent element. For an integral closed subscheme $W=\operatorname{Spec}(B[s]/\mathfrak p)$, the two dimension formulas in F5 give $\dim W=2-\operatorname{ht}\mathfrak p$. Hence the codimension-one generators in degree one are exactly the integral one-dimensional closed subschemes of $C\times\mathbb A^1$. Such a curve is admissible exactly when it lies in neither endpoint. Indeed, each endpoint intersection is then a proper closed subset of this integral finite-type curve and is finite by F6; its points are closed in the ambient endpoint $C$ by the closed-immersion and base-change statement in F7, and have codimension one by F3. If the curve lies in an endpoint, its reduced support equals that endpoint, since a proper closed subset of $C$ is finite, so admissibility fails. Thus $z^1(C,1)$ is precisely $B_1(C)$. The face maps have exactly the quotient-length coefficients in F5. The zeroth face is $t_0=0$, or $s=1$, and the first is $t_1=0$, or $s=0$; hence $\partial_1[W]=b[W]=[W_1]-[W_0]$ on a generator. The outgoing degree-zero differential is zero. Therefore F5 identifies degree-zero Bloch homology with $Z_0(C)/bB_1(C)=Q(C)$. Combining this canonical identification with steps 2.1 and 2.2 proves all the claimed identifications and the normalization surjection. [F1, F3, F5, F6, F7, A1, step 2.1, step 2.2, algebra] ∎


## Top cycles supported on an integral curve

[Open item](item-lem-curve-support-divisor-complex) · level 13


### Statement
Assume AC. Let $k$ be algebraically closed, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $T\subset U$ an integral closed curve. Put $K=k(T)$ and define
$$\operatorname{div}_T(f)=\sum_{x\in T\text{ closed}}\operatorname{ord}_{\mathcal O_{T,x}}(f)[x],\qquad \operatorname{ord}_{R}(a/b)=\ell_R(R/aR)-\ell_R(R/bR).$$
For the fixed-support Bloch complex with alternating face differential,
$$\mathrm{CH}^3_T(U)\cong\operatorname{coker}\!\left(K^\times\xrightarrow{\operatorname{div}_T}\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]\right).$$
When $T$ is affine, normalization $\nu:\widetilde T\to T$ induces a surjection
$$\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)\twoheadrightarrow\mathrm{CH}^3_T(U),$$
induced on point cycles by $[y]\mapsto[\nu(y)]$. For $f\in K^\times$, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and the displayed length orders downstairs. No normality or smoothness of $T$ is assumed.

### Facts & Assumptions
**Given:** AC and $k,U,T$ as stated; for the normalization assertion, also assume $T$ affine.

**Goal:** Identify the supported top Chow group and prove the normalization surjection and divisor compatibility.

[F1] The supported group is degree-zero homology of the fixed-support complex. Its relevant terms are $Z_0(T)$ and $B_1(T)$, and its boundary is the endpoint difference $b[W]=[W_1]-[W_0]$ with local length coefficients. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex), [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[F2] The displayed length formula defines a divisor homomorphism, and its image is precisely the endpoint-boundary subgroup. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders), [lem-author-1437578267d2-graph-boundary](item-lem-author-1437578267d2-graph-boundary)

[F3] For affine $T$, normalization induces the stated surjection from $\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)$ to the divisor quotient and satisfies the displayed order formula. [lem-author-1437578267d2-normalization-quotient](item-lem-author-1437578267d2-normalization-quotient)


[F4] Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type concern this morphism. Finite type means locally finite type and quasi-compact. Integral means nonempty, reduced and irreducible. The inclusion $T\subset U$ is a closed immersion. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; a curve has dimension one, and pure dimension three means every irreducible component has dimension three. [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[F5] Here $K=k(T)$ is the generic stalk, canonically the fraction field of each nonempty affine chart of the integral finite-type curve. The local ring $R=\mathcal O_{T,x}$ is the stalk at $x$, identified on an affine chart $\operatorname{Spec}A$ with $A_{\mathfrak p_x}$. In the order formula $a,b\in R$ are nonzero. The symbol $\ell_R(M)$ is composition-series length, the number of simple factors; its independence and the finite lengths used here are supplied by [F2]. The modules $R/aR$ and $R/bR$ have the induced action on additive cosets. [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F6] For affine $T=\operatorname{Spec}A$, its normalization is $\widetilde T=\operatorname{Spec}B$, where $B$ consists of the elements of $\operatorname{Frac}A$ satisfying a monic polynomial over $A$; $\nu$ is induced by $A\subset B$. The Picard group consists of isomorphism classes of line bundles under tensor product, and $\mathrm{CH}^1(\widetilde T)$ is degree-zero codimension-one Bloch homology, as in [F3]. In the DVR clause, a uniformizer generates the maximal ideal and every nonzero element is a unit times a nonnegative power of that uniformizer; the normalized valuation of $u\pi^r/(v\pi^s)$ is $r-s$ for units $u,v$. [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface), [lem-author-1437578267d2-normalization-quotient](item-lem-author-1437578267d2-normalization-quotient), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F7] The sums $Z_0(T)=\bigoplus_x\mathbb Z[x]$ are finite formal integer combinations of closed points, with $[x]$ the corresponding point cycle. A closed point means a point whose singleton is closed. The cokernel of the displayed divisor homomorphism is the additive quotient $Z_0(T)/\operatorname{im}(\operatorname{div}_T)$. The group $B_1(T)$ and its endpoint cycles are exactly those of [F1]. [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[A1] AC asserts that every family of nonempty sets has a choice function. It is retained in the supported-complex, curve-boundary and normalization suppliers invoked in steps 1.1, 2.1 and 3.1. The quotient substitution introduces no additional choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 By [F1], the outgoing differential from degree zero is zero and $\mathrm{CH}^3_T(U)=Z_0(T)/bB_1(T)$. The sign is $W_1-W_0$: with $s=t_1$, the zeroth face is $s=1$ and the first is $s=0$. [F1, given]

2.1 By [F2], the divisor map is well defined and its image is exactly $bB_1(T)$, with the stated multiplicities even at singular points. Substitution into step 1.1 proves the cokernel presentation. [F2, step 1.1]

3.1 If $T$ is affine, apply [F3] and the identification of step 2.1. This gives the normalization pushforward, its surjectivity and the displayed equality of local orders. [F3, step 2.1] ∎
