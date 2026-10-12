---
id: lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology
kind: lemma
title: Locally contractible metric spaces have singular constant sheaf cohomology
status: draft
origin: session
deps: [thm-stone-metric-spaces-are-paracompact, thm-cover-small-singular-chains-compute-singular-homology, thm-singular-chain-homotopy-formula, thm-sheafification-preserves-stalks, lem-ringed-space-module-sheaves-enough-injectives, lem-flasque-kernel-lifts-quotient-sections, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, singular cochain sheaves
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Assume AC. Let $X$ be a metric space having a neighborhood basis of contractible open sets at every point, and let $k$ be any field. Write $k_X$ for its constant sheaf. There are natural isomorphisms
$$H^q(X,k_X)\cong H^q_{\rm sing}(X;k)$$
in every degree, where the left side is derived cohomology in the category of sheaves of $k$-vector spaces. The same assertion holds on every open subset of $X$. In particular, a nonempty contractible space with this local property has constant-sheaf cohomology $k$ in degree zero and zero otherwise. This applies to every finite-polyhedral open star and to its nonempty intersection with a closed simplex.

## Facts & Assumptions

**Given:** AC, a metric $X$ with a contractible-open neighborhood basis, and a field $k$.

[F1] Under AC every metric space, hence every open subspace, has locally finite open refinements of its open covers ([[thm-stone-metric-spaces-are-paracompact]]).

[F2] Inclusion of the singular chains small for any open cover into all singular chains is a homology isomorphism ([[thm-cover-small-singular-chains-compute-singular-homology]]).

[F3] A supplied contraction gives a chain homotopy between its identity and point maps, with integral signed prisms and hence with every field coefficient ([[thm-singular-chain-homotopy-formula]]).

[F4] Sheafification preserves stalks ([[thm-sheafification-preserves-stalks]]). Sheaves of $k$-vector spaces are modules over $k_X$ and have enough injectives under AC ([[lem-ringed-space-module-sheaves-enough-injectives]]).

[F5] If a short exact sequence of underlying abelian sheaves has flasque kernel, every section of the quotient lifts; if the middle term is also flasque the quotient is flasque ([[lem-flasque-kernel-lifts-quotient-sections]]).

[A1] AC is used in [F1], [F4], [F5], in choosing cochain representatives and simplex assignments, and in splitting possibly infinite-dimensional vector-space chain complexes ([[def-axiom-of-choice]]).

## Proof

1.1 First verify that a flasque $k$-sheaf is acyclic for derived $k$-sheaf sections. An injective $k$-sheaf $I$ is flasque: for opens $U\subseteq V$, the extension-by-zero constant sheaves $j_{U!}k_U\to j_{V!}k_V$ form a stalkwise monomorphism, and $\operatorname{Hom}(j_{U!}k_U,I)=I(U)$ as in the module-generator calculation in [F4]. Injectivity makes $I(V)\to I(U)$ onto. Embed a flasque $F$ into such an $I$ using [F4]; the underlying exact sequence has flasque kernel, so [F5] makes its quotient $Q$ flasque and makes $I(U)\to Q(U)$ onto on every open. The derived long exact sequence therefore gives $H^1(U,F)=0$ and $H^{n+1}(U,F)=H^n(U,Q)$ for $n\ge1$. Repeating and inducting on $n$ proves acyclicity for all positive degrees in the $k$-sheaf category. Only underlying section lifting uses [F5]; no assertion that a $k$-injective is an injective abelian sheaf is made. [F4, F5, A1, algebra]

1.2 Let $C^n(U;k)$ be the vector space of functions on singular $n$-simplices in $U$, with its usual cochain differential, and let $\mathcal C^n$ be the sheafification of this presheaf. We show that every section of $\mathcal C^n$ on an open $U$ has a global cochain representative on $U$, and even a cochain representative on any larger open $V$. Represent the section by cochains $c_j$ on an open cover $U_j$ of $U$. Choose an open-ball cover whose closed balls lie in the corresponding $U_j$, and use [F1] to refine it by a locally finite cover $\{W_i\}$ with $\overline{W_i}\subseteq U_{j(i)}$, closures taken in $U$. Write $c_i=c_{j(i)}$. For each singular simplex in $V$ whose image is contained in some $W_i$, choose one such $i$ and assign it the value $c_i$; assign zero if there is none. This defines one cochain $c$ on $V$. [F1, F4, A1, construct]

2.1 Fix $x\in U$. Local finiteness of the $W_i$ also holds for their closures: any open neighborhood meeting a closure meets the corresponding open set. The set $J_x=\{i:x\in\overline{W_i}\}$ is finite, and there is a neighborhood avoiding every $W_i$ for $i\notin J_x$; obtain it by first taking a locally finite neighborhood and then excluding the finitely many remaining closed sets not containing $x$. Each $U_{j(i)}$ for $i\in J_x$ contains $x$. Their cochains represent the same sheaf germ, so by [F4] they agree as presheaf cochains on a sufficiently small common neighborhood. Shrink that neighborhood into one $W_{i_0}$ containing $x$. Every singular simplex entirely in the resulting neighborhood is assigned some index in $J_x$ and hence the same value as $c_{i_0}$. Thus $c$ represents the prescribed germ at $x$. This holds at all points. Consequently $C^n(U;k)\to\mathcal C^n(U)$ is onto, and every section over $U$ extends to $V$ by step 1.2. Each $\mathcal C^n$ is flasque. [F4, step 1.2, algebra]

3.1 Augment $k_X\to\mathcal C^0$ by the locally constant zero-cochains. On stalks, [F4] identifies the augmented complex with the filtered colimit of the singular cochain complexes over neighborhoods. Filtered colimits of vector spaces preserve exactness (any finite equation or coboundary witness is represented on a common smaller neighborhood). By hypothesis a cofinal family consists of contractible connected opens. [F3] contracts their singular cochain cohomology to $k$ in degree zero and zero in higher degrees; the point complex gives that same value directly. Hence the augmented sheaf complex is exact on every stalk and is a flasque resolution of $k_X$. Step 1.1 makes its sections compute derived cohomology. This last assertion can also be obtained by the finite dimension-shifting argument in each requested degree from the successive cycle sheaves of the resolution; no convergence of an unbounded totalization is assumed. [F3, F4, step 1.1, step 2.1, algebra]

3.2 The surjective cochain map $C^*(X;k)\to\Gamma(X,\mathcal C^*)$ from step 2.1 has kernel $N^*$ consisting of locally zero cochains: a cochain has zero germ everywhere exactly when it vanishes on all singular simplices contained in some member of a suitable open cover. For a cover $\mathcal U$, let $K_{\mathcal U}^*$ be the subcomplex vanishing on its small singular chains. The small-chain inclusion is a homology isomorphism by [F2], so its quotient chain complex is acyclic. Over a field an acyclic chain complex splits degreewise into its boundaries and complementary subspaces; dualizing that splitting proves that its Hom into $k$ is acyclic. This dual complex is exactly $K_{\mathcal U}^*$, since restriction of functions to the small simplex basis is onto. [F2, A1, step 2.1, algebra]

4.1 Common intersections of covers refine each of them, so the complexes $K_{\mathcal U}^*$ are directed under inclusion. Their union is $N^*$ by step 3.2. A cocycle in that union lies in one $K_{\mathcal U}^*$ and has a primitive there; hence the union is acyclic. The short exact sequence of cochain complexes therefore identifies singular cohomology with the cohomology of $\Gamma(X,\mathcal C^*)$. Step 3.1 identifies the latter with derived constant-sheaf cohomology. The maps use restriction and sheafification, so they commute with pullback of singular cochains and constant-sheaf morphisms. Every open subspace is again metric and has the inherited contractible-open basis, giving the same construction there. [step 3.1, step 3.2, algebra]

5.1 If $X$ is nonempty and contractible, [F3] makes its singular cohomology that of a point, giving the stated acyclicity. In a finite simplicial realization, a point with support simplex $\sigma$ has arbitrarily small contractible open neighborhoods obtained by requiring its $\sigma$-coordinates to remain close to their positive values and its other coordinates to have sufficiently small sum; straight interpolation toward the point stays in a coface simplex and within those requirements. Open stars inherit such neighborhoods. The intersection of an open star of $\sigma$ with a closed simplex $\tau$ is empty unless $\sigma\subseteq\tau$; otherwise it is the convex subset of $|\tau|$ requiring positive $\sigma$-coordinates, and contracts linearly to the barycenter of $\sigma$. It is metric and has a contractible-open basis in its subspace topology. Therefore the comparison and acyclicity apply to precisely these neighborhoods, independently of any derived face-diagram equivalence. [F3, step 4.1, construct] ∎
