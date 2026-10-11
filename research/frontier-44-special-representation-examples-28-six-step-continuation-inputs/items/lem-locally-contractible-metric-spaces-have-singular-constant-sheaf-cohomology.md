---
id: lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology
kind: lemma
title: "Locally contractible metric spaces have singular constant sheaf cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-metric-space, thm-metric-hausdorff-separation,
       thm-stone-metric-spaces-are-paracompact,
       lem-paracompact-hausdorff-cover-shrinking,
       thm-cover-small-singular-chains-compute-singular-homology,
       thm-singular-chain-homotopy-formula,
       thm-sheafification-preserves-stalks,
       def-sheaf-cohomology-derived-global-sections,
       lem-ringed-space-module-sheaves-enough-injectives,
       lem-flasque-kernel-lifts-quotient-sections, def-flasque-sheaf,
       def-extension-by-zero-abelian-sheaf,
       thm-extension-by-zero-adjunction-exactness, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "2.5-2.7 (flabby resolutions), 3.3 (quasi-isomorphism invariance), 5.1-5.4 and 11.2 (singular cochains)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a metric space
([[def-metric-space]]) having a neighbourhood basis of contractible open sets at
every point, and let $k$ be a field. Write $k_X$ for its constant sheaf. There
are natural isomorphisms
$$H^q(X,k_X)\cong H^q_{\operatorname{sing}}(X;k)$$
in every degree, where the left side is derived cohomology in the category of
sheaves of $k$-vector spaces (computed with the functorial $k$-linear injective
resolutions supplied by
[[lem-ringed-space-module-sheaves-enough-injectives]]; compare
[[def-sheaf-cohomology-derived-global-sections]]). The same assertion holds on
every open subset of $X$. In particular a nonempty contractible space with this
local property has constant-sheaf cohomology $k$ in degree zero and zero
otherwise. This applies to every finite-polyhedral open star and to its
nonempty intersection with a closed simplex.

## Facts & Assumptions

**Given:** AC, a metric space $X$ with a neighbourhood basis of contractible open sets, and a field $k$.

[F1] Under AC every metric space is paracompact ([[thm-stone-metric-spaces-are-paracompact]]).

[F2] Distinct points of a metric space have disjoint balls around them, so a metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[F3] Under AC a cover of a paracompact Hausdorff space can be shrunk: there are locally finite open covers $\{V_s\}$ and $\{W_s\}$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ for members $U_s$ of the given cover ([[lem-paracompact-hausdorff-cover-shrinking]]).

[F4] For every abelian group $G$ and every open cover $\mathcal U$ the inclusion of the $\mathcal U$-small singular chains into all singular chains induces an isomorphism on homology ([[thm-cover-small-singular-chains-compute-singular-homology]]).

[F5] A homotopy from $f$ to $g$ satisfies $g_\#-f_\#=\partial P_H+P_H\partial$ in every degree ([[thm-singular-chain-homotopy-formula]]).

[F6] Sheafification preserves stalks, and the stalk of a sheafification is the filtered colimit of the presheaf sections over the open neighbourhoods of the point ([[thm-sheafification-preserves-stalks]]).

[F7] Under AC the sheaves of $k$-vector spaces on a space, being the modules over the ringed space with constant structure sheaf $k$, carry functorial injective embeddings and hence one specific injective resolution for every sheaf ([[lem-ringed-space-module-sheaves-enough-injectives]], [[def-sheaf-cohomology-derived-global-sections]]).

[F8] In a short exact sequence of abelian sheaves with flasque kernel, every section of the quotient lifts over every open set, and if the middle term is also flasque then the quotient is flasque ([[lem-flasque-kernel-lifts-quotient-sections]]).

[F9] A sheaf is flasque exactly when all its restriction maps between open subsets are surjective ([[def-flasque-sheaf]]).

[F10] Extension by zero $j_!$ along an open inclusion satisfies $\operatorname{Hom}_X(j_!\mathcal F,\mathcal G)\cong\operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G)$ and is exact ([[def-extension-by-zero-abelian-sheaf]], [[thm-extension-by-zero-adjunction-exactness]]).

[A1] AC is used exactly in six places: the paracompactness theorem [F1], the shrinking lemma [F3], the functorial injective resolutions [F7], the flasque section lifting [F8], the degreewise splitting of acyclic complexes of possibly infinite-dimensional vector spaces, and the choice of cochain representatives and simplex assignments in step 1.2. All are recorded in the axiom use of the lemma ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (Flasque $k$-sheaves are acyclic.) Let $\mathcal I$ be an injective $k$-sheaf. For opens $U\subseteq V$ the canonical extension-by-zero map $j_{U!}k_U\to j_{V!}k_V$ is a monomorphism of $k$-sheaves: a section of $j_{U!}k_U$ over an open $W$ is a locally constant function on $W\cap U$ whose support is closed in $W$, and as a section of $k_X$ over $W$ it is supported in $U\subseteq V$, hence lies in $j_{V!}k_V(W)$. By [F10] the adjunction identifies $\operatorname{Hom}_X(j_{U!}k_U,\mathcal I)\cong\operatorname{Hom}_U(k_U,\mathcal I|_U)\cong\mathcal I(U)$, and likewise with $V$ in place of $U$. Injectivity of $\mathcal I$ therefore makes the restriction $\mathcal I(V)\to\mathcal I(U)$ surjective, so $\mathcal I$ is flasque by [F9]. Now let $F$ be a flasque $k$-sheaf and embed it into an injective $\mathcal I$ using [F7], with quotient $Q$. The underlying sequence of abelian sheaves has flasque kernel $F$, so by [F8] every section of $Q$ lifts over every open set and $Q$ is flasque. Writing $H^q(U,-)$ for the derived functors of the $k$-linear sections functor at $U$ as in [F7], the long exact sequence gives $H^1(U,F)=0$ and $H^{n+1}(U,F)\cong H^n(U,Q)$ for $n\ge1$; since $Q$ is again flasque this proves $H^n(U,F)=0$ for all $n\ge1$ by induction on $n$, uniformly over all flasque $k$-sheaves. Only underlying section lifting uses [F8]; no assertion that a $k$-injective is an injective abelian sheaf is made. [F7, F8, F9, F10, A1]

1.2 (Flasque singular-cochain sheaves.) Let $C^n(U;k)$ be the $k$-vector space of functions on the singular $n$-simplices of $X$ with image in $U$, with the usual cochain differential, and let $\mathcal C^n$ be its sheafification. Represent a section $s\in\mathcal C^n(U)$ by cochains $c_i$ on an open cover $\{U_i\}$ of $U$: this is what a section of the sheafification is, by [F6]. Since $X$ is metric it is paracompact by [F1] and Hausdorff by [F2], so [F3] applied to the cover $\{U_i\}$ yields a locally finite open cover $\{W_i\}_{i\in I}$ refining it, with each $W_i$ contained in some member $U_{j(i)}$. Choose such an index $j(i)$ for each $i$ and write $c_i$ for $c_{j(i)}$; these are choices, covered by [A1]. Define a cochain $c$ on $X$ by assigning to a singular simplex $\sigma$ whose image lies in some $W_i$ the value $c_i(\sigma)$, and the value $0$ if the image lies in no $W_i$. This defines a function on the set of singular simplices, hence a cochain. Once the verification carried out below is granted, $C^n(V;k)\to\mathcal C^n(V)$ is surjective for every open $V$, because the construction produces a global representative for every section over $V$, and then a section over $U$ extends to one over any larger $V$; surjectivity of these maps says exactly that the restriction maps $\mathcal C^n(V)\to\mathcal C^n(U)$ are surjective. Hence each $\mathcal C^n$ is flasque by [F9]. [F1, F2, F3, F6, A1]

2.1 (The assignment gives the prescribed germs.) Fix $x\in U$. Since $\{W_i\}$ is locally finite the set $J_x=\{i:x\in\overline{W_i}\}$ is finite, and there is an open neighbourhood of $x$ meeting none of the sets $W_i$ with $i\notin J_x$. The cochains $c_i$ for $i\in J_x$ represent the same section $s$ on the intersections of their domains with a neighbourhood of $x$; their classes in the presheaf stalk $\mathcal C^n_x$ therefore have a common image in the sheaf stalk, and since sheafification induces a bijection on stalks by [F6], the classes of the $c_i$ in the presheaf stalk are equal. Equality in the stalk of the presheaf means that the finitely many cochains $c_i$, $i\in J_x$, agree as presheaf cochains on one common neighbourhood $N$ of $x$: the stalk is the filtered colimit of the section sets over the neighbourhoods, and intersections make the index system directed. Shrink $N$ so that it is contained in some $W_{i_0}$ and meets no $W_i$ with $i\notin J_x$. A singular simplex with image entirely in $N$ is then contained in some $W_i$, necessarily with $i\in J_x$, and the value $c_i(\sigma)$ assigned to it equals $c_{i_0}(\sigma)$ for every admissible $i$ by the agreement on $N$; hence the value assigned by the cochain $c$ of step 1.2 is independent of the admissible index and equals the value of $c_{i_0}$, which represents $s$ near $x$. Thus $c$ represents $s$ in every germ, and the surjectivity and flasqueness claims of step 1.2 hold. [F3, F6, step 1.2]

3.1 (The augmented complex is a flasque resolution.) The augmentation $k_X\to\mathcal C^0$ sends the locally constant function $1$ to the zero-cochain that is constant one on points. By [F6] the stalk of each $\mathcal C^n$ at $x$ is the filtered colimit, over the open neighbourhoods $V$ of $x$, of the cochain complexes $C^*(V;k)$, and filtered colimits of $k$-vector spaces preserve exactness, so the cohomology of the stalk complex is the colimit of the cohomology of these complexes. By hypothesis the contractible open neighbourhoods of $x$ are cofinal; a contraction of such a $V$ together with [F5] gives that the identity of $V$ and a constant map to a point induce the same map on cohomology, so $H^0_{\operatorname{sing}}(V;k)\cong k$ and $H^n_{\operatorname{sing}}(V;k)=0$ for $n\ge1$, the point's cochain complex being $k$ in degree zero and zero in positive degrees. Every cohomology class on a neighbourhood is therefore represented on a contractible one and is either constant or dies, so the stalk complex is exact in positive degrees with kernel $k$ in degree zero, the kernel being the constant functions. Hence $k_X\to\mathcal C^0\to\mathcal C^1\to\cdots$ is a flasque resolution of $k_X$, and by step 1.1 its sections compute the derived cohomology of $k_X$; the derived groups are those formed with the $k$-linear injective resolutions of [F7]. [F5, F6, step 1.1, step 1.2, step 2.1]

3.2 (Identification with singular cohomology.) The map $C^*(X;k)\to\Gamma(X,\mathcal C^*)$ given by the global construction of step 1.2 is surjective by step 2.1. Let $N^*$ be its kernel. A cochain lies in $N^*$ exactly when it vanishes on all simplices contained in some member of some open cover of $X$: a cochain has zero germ at $x$ exactly when it vanishes on all simplices of some neighbourhood of $x$ by [F6], and a cochain vanishing on the small simplices of a cover has zero germ everywhere, while conversely the neighbourhoods of all points form such a cover. For an open cover $\mathcal U$ let $K^*_{\mathcal U}$ be the subcomplex of cochains vanishing on the $\mathcal U$-small singular chains. By [F4] applied with coefficients in the field $k$, the inclusion of the small chain complex into all chains is a homology isomorphism, so the quotient chain complex is acyclic; over a field an acyclic chain complex of possibly infinite-dimensional spaces splits degreewise into its boundaries and a complementary subspace, and dualizing such a splitting shows that the Hom of the quotient into $k$ is acyclic. Since restriction of functions to the subcomplex of small chains is surjective, this dual complex is exactly $K^*_{\mathcal U}$; hence $K^*_{\mathcal U}$ is acyclic. The complexes $K^*_{\mathcal U}$ are directed by refinement, and their union is $N^*$. A cocycle in the union lies in one $K^*_{\mathcal U}$ and is a coboundary there, so $N^*$ is acyclic. The long exact sequence of the short exact sequence of cochain complexes $0\to N^*\to C^*(X;k)\to\Gamma(X,\mathcal C^*)\to0$ therefore identifies $H^*_{\operatorname{sing}}(X;k)$ with the cohomology of $\Gamma(X,\mathcal C^*)$. [F4, A1, step 1.2, step 2.1]

4.1 Conclusion for $X$. Step 3.1 and step 3.2 identify the derived cohomology of $k_X$ with $H^*_{\operatorname{sing}}(X;k)$, and the identifications come from restriction and sheafification, so they are natural in $X$; this is the asserted isomorphism, in the conventions for derived sheaf cohomology fixed by [F7] and compared with the abelian-sheaf definition of [[def-sheaf-cohomology-derived-global-sections]]. [F7, step 3.1, step 3.2]

5.1 Open subspaces and the stated consequences. Every open subspace $Y\subseteq X$ is again metric and has the inherited contractible-open basis, and every step above is local: the construction of $\mathcal C^n$ restricts, the flasqueness argument applies to $Y$ in place of $X$, and the splitting argument of step 3.2 applies to the restricted covers. Hence the isomorphism also holds on every open subset. If $X$ is nonempty and contractible, then by [F5] its singular cohomology is that of a point, namely $k$ in degree zero and zero otherwise, and the identification gives the same for $H^*(X,k_X)$. For a finite-polyhedral realization, a point of a simplex $\sigma$ has arbitrarily small contractible open neighbourhoods obtained by requiring its $\sigma$-coordinates to stay close to their positive values and its other coordinates to have sufficiently small sum; an open star, or the nonempty intersection of an open star with a closed simplex, is a convex, hence linearly contractible, subset of the realization and inherits a basis of such neighbourhoods in its subspace topology. The comparison and the acyclicity conclusion therefore apply to exactly these neighbourhoods, and no triangulation equivalence of derived categories is used. [F5, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- The lemma is stated for sheaves of $k$-vector spaces and uses the $k$-linear injective resolutions of [[lem-ringed-space-module-sheaves-enough-injectives]]; it does not assert that a $k$-injective sheaf is injective among abelian sheaves, and the flasque lifting input is applied to underlying abelian sheaves only.

- The choices recorded in [A1] are exactly those visible in the construction: a refinement index for each member of a locally finite cover, a cover member for each singular simplex in the definition of the global representative, and complements or bases in the degreewise splitting. The paracompactness and shrinking arguments themselves already consume AC as stated in [F1] and [F3].
