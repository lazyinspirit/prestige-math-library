---
id: lem-clopen-finite-constant-maps
kind: lemma
title: Maps to finite disjoint unions of the base
status: published
domain: mathematics
deps:
  - math:def-scheme-over-base
  - math:def-morphism-of-schemes
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-axiom-of-choice
  - math:def-scheme
  - math:def-affine-scheme
  - math:thm-gluing-ringed-and-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-morphism-locally-ringed-spaces
  - math:def-sheaf-on-topological-space
  - math:def-affine-open-subscheme
  - math:def-restriction-sheaf-open-subspace
  - math:def-field
  - math:def-affine-scheme-spectrum
  - math:thm-structure-sheaf-affine-scheme
  - math:cor-spectrum-with-structure-sheaf-locally-ringed
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:thm-gluing-ringed-and-locally-ringed-spaces: mathematical-premise
  math:def-morphism-ringed-spaces: mathematical-premise
  math:def-morphism-locally-ringed-spaces: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-field: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:thm-structure-sheaf-affine-scheme: mathematical-premise
  math:cor-spectrum-with-structure-sheaf-locally-ringed: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field, $A$ a finite set, and $X$ a Noetherian $k$-scheme. Put $Y_A=\coprod_{a\in A}\operatorname{Spec}k$. There are natural bijections between $k$-morphisms $X\to Y_A$, decompositions $X=\coprod_{a\in A}X_a$ into pairwise disjoint open-and-closed subsets, and functions $\pi_0(X)\to A$. Here empty $X_a$ are allowed and $\pi_0(X)$ is the set of connected components of the underlying topological space. If $U\subseteq X$ is dense, restriction from locally constant integer-valued functions on $X$ to such functions on $U$ is injective. In particular this holds when $U$ is dense and meets every component.

A subset is open-and-closed, or clopen, if it is both open and closed. A connected component is a maximal nonempty connected subset; connected means that the subspace cannot be partitioned into two nonempty open subsets. A function is locally constant if every point has an open neighbourhood on which it is constant. Noetherian means that descending chains of closed subsets stabilize. Density means that every nonempty open subset of $X$ meets $U$.

## Statement references
[[math:def-scheme-over-base]]

[[math:def-morphism-of-schemes]]

[[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[[math:def-axiom-of-choice]]

[[math:def-scheme]]

[[math:def-affine-scheme]]

[[math:thm-gluing-ringed-and-locally-ringed-spaces]]

[[math:def-morphism-ringed-spaces]]

[[math:def-morphism-locally-ringed-spaces]]

[[math:def-sheaf-on-topological-space]]

[[math:def-affine-open-subscheme]]

[[math:def-restriction-sheaf-open-subspace]]

[[math:def-field]]

[[math:def-affine-scheme-spectrum]]

[[math:thm-structure-sheaf-affine-scheme]]

[[math:cor-spectrum-with-structure-sheaf-locally-ringed]]

## Facts & Assumptions
[A1] The Axiom of Choice is assumed; it is used through the finite decomposition supplier in [F1] and the structure-sheaf construction supplier in [F3]. [[math:def-axiom-of-choice]]

[F1] Under the Axiom of Choice, a Noetherian topological space is a finite union of irreducible closed subsets. An irreducible space is nonempty and cannot be expressed as a union of two proper closed subsets. The descending-chain definition of Noetherianity is the one stated above. [[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[F2] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$, and a $k$-morphism is a scheme morphism commuting with the structure morphisms. Scheme morphisms are morphisms of the underlying locally ringed spaces. [[math:def-scheme-over-base]] [[math:def-morphism-of-schemes]]

[F3] A field is a commutative ring with $0\ne1$ in which every nonzero element is invertible; thus the field $k$ is a permissible ring for the affine-spectrum construction. For a commutative ring $R$ with $1$, the underlying space $\operatorname{Spec}R$ consists of its prime ideals, with basic opens $D(r)=\{\mathfrak p:r\notin\mathfrak p\}$. Under the Axiom of Choice the basic-open localization data extend to the structure sheaf $\mathcal O_{\operatorname{Spec}R}$; the resulting ringed space is locally ringed. An affine scheme is a locally ringed space isomorphic to such a spectrum with its structure sheaf, so this construction for $R=k$ gives the affine scheme denoted $\operatorname{Spec}k$. A scheme is a locally ringed space locally isomorphic to affine schemes; the empty locally ringed space is a scheme. [[math:def-field]] [[math:def-affine-scheme-spectrum]] [[math:thm-structure-sheaf-affine-scheme]] [[math:cor-spectrum-with-structure-sheaf-locally-ringed]] [[math:def-scheme]] [[math:def-affine-scheme]]

[F4] Locally ringed spaces with specified isomorphisms between open overlaps satisfying the identity and cocycle conditions glue to a locally ringed space covered by the given pieces. This is an object-gluing result; gluing morphisms is proved in step 1.2 below. [[math:thm-gluing-ringed-and-locally-ringed-spaces]]

[F5] A morphism of ringed spaces consists of a continuous map $h:T\to Z$ and ring homomorphisms $h^\sharp_V:\mathcal O_Z(V)\to\mathcal O_T(h^{-1}V)$ for open $V\subseteq Z$, compatible with restrictions. It is a morphism of locally ringed spaces when the induced maps on stalks are local ring homomorphisms. Composition composes the continuous maps and the corresponding section maps. [[math:def-morphism-ringed-spaces]] [[math:def-morphism-locally-ringed-spaces]]

[F6] Compatible sections of a sheaf over an open cover glue uniquely. This includes the empty cover of the empty set, so a sheaf of rings has exactly one section over the empty set. [[math:def-sheaf-on-topological-space]]

[F7] An open subset $T_i$ of a scheme $T$ carries its open subscheme structure $(T_i,\mathcal O_T|_{T_i})$. For an open subset $W\subseteq T_i$, the restricted sheaf has sections $(\mathcal O_T|_{T_i})(W)=\mathcal O_T(W)$. [[math:def-affine-open-subscheme]] [[math:def-restriction-sheaf-open-subspace]]

## Proof

**Given:** A field $k$, a finite set $A$, a Noetherian $k$-scheme $X$, and the Axiom of Choice.

**Goal:** Construct the stated scheme and bijections and establish injectivity of restriction.

1.1 Using the affine scheme constructed in [F3], for each $a\in A$ take a labelled copy $S_a$ of the affine scheme $\operatorname{Spec}k$. Apply [F4] with the full piece as its self-overlap and with empty overlaps between different pieces. All overlap maps are identities, including the unique maps on empty overlaps, so the identity and cocycle conditions hold. The glued locally ringed space has underlying set the disjoint union of the labelled copies, with a subset open exactly when its trace on each copy is open. The copies are open and each complement is the union of the other copies, hence each copy is clopen. Each point has the affine neighbourhood $S_a$, so [F3] makes the result a scheme, denoted $Y_A$. When $A=\varnothing$, use the empty locally ringed space, which is a scheme by [F3]; its structure sheaf has the unique section over its only open set by [F6]. [A1, F3, F4, F6, given, construct]

1.2 We establish the needed gluing of morphisms. Let $T=\bigcup_i T_i$ be an open cover of a scheme and let $h_i:T_i\to Z$ be scheme morphisms agreeing as morphisms on overlaps, using the open subscheme structures in [F7]. Their continuous maps define a unique map $h:T\to Z$; it is continuous because $h^{-1}(V)=\bigcup_i h_i^{-1}(V)$ is open for every open $V\subseteq Z$. For $s\in\mathcal O_Z(V)$, the sections $h_i^\sharp(s)$ on $T_i\cap h^{-1}(V)$ agree on overlaps, so [F6] supplies a unique glued section on $h^{-1}(V)$. These assignments preserve addition, multiplication and the unit, and commute with restriction: each assertion holds on every $T_i\cap h^{-1}(V)$ and then follows globally by uniqueness in [F6]. They therefore define the sheaf map required in [F5]. At $t\in T_i$, its stalk map equals that of $h_i$, since germs can be computed inside the open neighbourhood $T_i$; thus it is local. Uniqueness follows for the underlying map and then for every section map from [F6]. Restriction of a morphism to an open source uses these same section maps. A morphism whose image lies in an open subscheme $W\subseteq Z$ factors uniquely through $W$: on any open $V\subseteq W$, which is also open in $Z$, use its original section map; [F7] identifies the sheaves and stalks, so the factorization is local and unique. In particular the inclusion of an open subscheme is a scheme morphism, using restriction on sections and identity maps on stalks. The empty domain admits exactly one morphism to any scheme, by [F6]; a nonempty domain has no map to the empty scheme. [F2, F5, F6, F7, construct]

1.3 By [F1], write $X$ as a finite union of irreducible closed subsets $C_1,\ldots,C_n$, allowing $n=0$. Each $C_i$ is connected: a separation into two nonempty relatively open subsets would also express it as a union of two proper relatively closed subsets. Form the finite graph with vertices $i$ and an edge whenever $C_i\cap C_j\ne\varnothing$; its graph components are the classes of vertices joined by finite edge paths. For each graph component, the union of its $C_i$ is connected. Indeed, in a separation of that union each connected $C_i$ lies entirely in one side, and intersecting $C_i$ must lie in the same side; paths would force all of them into one side. These unions are pairwise disjoint, closed, and cover $X$; each is also open because its complement is a finite union of the other closed unions. Any connected subset meeting one such union lies entirely inside it, since otherwise its intersections with that union and its complement would separate the subset. These unions are therefore exactly the connected components of $X$, and are finite in number and clopen. The empty-space case has no components. [F1, A1, given]

2.1 By step 1.2 the identity morphisms $S_a\to\operatorname{Spec}k$ glue to a structure morphism $p:Y_A\to\operatorname{Spec}k$, including when $A$ is empty. Write $j_a:S_a\hookrightarrow Y_A$ for the open inclusions. Let $p_X:X\to\operatorname{Spec}k$ be the structure morphism of $X$. For a $k$-morphism $f:X\to Y_A$, the inverse images $X_a=f^{-1}(S_a)$ are disjoint clopen subsets covering $X$. Conversely, from any such decomposition give $X_a$ its open subscheme structure and take $j_a\circ p_X|_{X_a}$, identifying $S_a$ with the base. These morphisms glue uniquely by step 1.2. Their composite with $p$ agrees with $p_X$ on every $X_a$, so uniqueness of gluing makes the resulting morphism a $k$-morphism. If a $k$-morphism lands in $S_a$ on $X_a$, the open-target factorization of step 1.2 gives $g_a:X_a\to S_a$; the equation $p\circ f=p_X$ and $p|_{S_a}=\operatorname{id}$ force $g_a=p_X|_{X_a}$ as scheme morphisms. Thus the two constructions are inverse. If $A$ is empty and $X$ is nonempty both sets are empty; if $X$ is empty each consists of one element. [F2, F5, F7, step 1.1, step 1.2, given]

3.1 A clopen decomposition assigns every connected component to exactly one $X_a$: its intersections with the $X_a$ are disjoint relatively open subsets covering it, and two nonempty intersections would separate it. Conversely, by step 1.3 the union of the components assigned to each $a$ by a function $\pi_0(X)\to A$ is clopen, since there are only finitely many clopen components. These operations are inverse and, together with step 2.1, give all the stated bijections. To check naturality in $X$, a $k$-morphism $q:X'\to X$ pulls the decomposition back to $q^{-1}(X_a)$. The image of a connected component of $X'$ is connected, because a separation of the image would pull back to a separation of the component. It consequently lies in one connected component of $X$, so the corresponding function is composed with the induced map $\pi_0(X')\to\pi_0(X)$. For a function $\alpha:A\to B$ of finite sets, step 1.2 constructs $Y_A\to Y_B$ by the identity map of the base from summand $a$ to summand $\alpha(a)$. Postcomposition replaces the decomposition by $\big(\bigcup_{\alpha(a)=b}X_a\big)_{b\in B}$ and the component function by its composite with $\alpha$. These descriptions respect identities and composition, including empty cases, establishing naturality in both variables. [F2, step 1.2, step 2.1, step 1.3]

4.1 Let $f,g:X\to\mathbb Z$ be locally constant and agree on dense $U$. The set $D=\{x:f(x)\ne g(x)\}$ is open: at each point of $D$, intersect neighbourhoods on which $f$ and $g$ are respectively constant. If $D$ were nonempty it would meet $U$, contradicting agreement there. Thus $D$ is empty and $f=g$; restrictions remain locally constant in the subspace topology. In particular, a dense subset meets every nonempty clopen connected component by step 1.3, so the stated special case follows. [given, step 1.3] ∎
