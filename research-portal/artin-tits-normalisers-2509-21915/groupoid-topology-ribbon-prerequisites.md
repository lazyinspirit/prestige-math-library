---
title: Groupoid covers, arrangement topology and ribbons
description: Connect path groupoids and covering quotients with arrangement
  complements, Salvetti and Deligne models, spherical Garside structures and
  ribbons, preserving each finite or spherical hypothesis.
status: published
dependency_level: 1
---

**Purpose:** Connect path groupoids and covering quotients with arrangement complements, Salvetti and Deligne models, spherical Garside structures and ribbons, preserving each finite or spherical hypothesis.

## Set-sized groupoids, functors and composition conversion

[Open item](item-def-small-groupoid-interface-artin-tits-prerequisites) · level 0


### Definition

A small category is a category whose objects and morphisms each form a set; each morphism carries its source and target. A groupoid is a category in which every morphism has a two-sided inverse. A groupoid is connected when it is nonempty and there is an arrow between every ordered pair of objects.

For arrows $a:x\to y$ and $b:y\to z$, write $ab=b\circ a$; hence composition is read from left to right. A covariant functor sends objects to objects and arrows to arrows with the corresponding sources and targets, preserving identities and composition. An automorphism is a functor from a category to itself with a two-sided inverse functor.

For an object $x$ of a small groupoid $\mathcal G$, its vertex group $\mathcal G_x$ is the set of arrows $x\to x$ with the left-to-right product and identity $1_x$. Given an arrow $a:x\to y$, the associated conjugation map $c_a:\mathcal G_x\to\mathcal G_y$ is $c_a(u)=a^{-1}ua$.

### Definition references

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:def-group](https://alphabetamath.cc/item/def-group)

### Justification

The category axioms give associative composition and identities; in a groupoid every arrow has an inverse. Thus the endomorphisms at $x$ are closed under the indicated composition and form a group, with identity $1_x$ and inverses inherited from the groupoid. The left-to-right notation is a relabelling of the existing composite, so associativity and identities remain valid. The connectedness condition agrees with the zigzag definition because arrows in a groupoid can be reversed and composed.

For $a:x\to y$, the composite $a^{-1}ua$ is an endomorphism of $y$. Associativity and $aa^{-1}=1_x$ show $c_a(uv)=c_a(u)c_a(v)$; the map $v\mapsto ava^{-1}$ is its two-sided inverse. Hence $c_a$ is a group isomorphism ([math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)). It depends on the specified arrow $a$; no global choice of connecting arrows is required.


## Coverings preserve the higher-homotopy obstruction to K(pi,1)

[Open item](item-prop-cover-asphericity-interface-artin-tits-prerequisites) · level 0



### Statement

Let $p:E\to B$ be a covering map with $E$ and $B$ nonempty and path-connected, and choose $e\in E$. For every $n\geq2$, postcomposition with $p$ induces an isomorphism $p_*:\pi_n(E,e)\to\pi_n(B,p(e))$. Here a covering map is a surjective continuous map for which every point of $B$ has an open neighbourhood whose inverse image is a disjoint union of open sets each mapped homeomorphically onto that neighbourhood.

Call a nonempty path-connected space aspherical when all its homotopy groups in degrees at least two vanish. Then $E$ is aspherical if and only if $B$ is aspherical. In particular, if either space is a CW complex and its fundamental group is equipped with a specified isomorphism to $G$, that space is a $K(G,1)$ exactly when it is aspherical. For either $X=E$ or $X=B$, suppose instead that $X$ is of CW homotopy type and has a specified isomorphism $\pi_1(X,x)\cong G$. Then $X$ has the homotopy type of a $K(G,1)$ exactly when it is aspherical. Here being of CW homotopy type means being homotopy equivalent to a CW complex; the equivalence and its inverse homotopies need not preserve basepoints. These statements do not identify the two fundamental groups or supply a finite CW model.

### Facts & Assumptions

[F1] The covering lifting criterion gives a unique based lift of a map from a path-connected, locally path-connected based space when the image of its fundamental group lies in the image of the covering's fundamental group ([math:thm-covering-space-lifting-criterion](https://alphabetamath.cc/item/thm-covering-space-lifting-criterion)).

[F2] A homotopy into the base of a covering has a unique lift extending any specified lift at time zero ([math:thm-homotopy-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-homotopy-lifting-for-covering-maps)).

[F3] $\pi_n(X,x)$ is represented by maps $I^n\to X$ taking the whole boundary to $x$, modulo homotopies fixed on that boundary ([math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)). Postcomposition induces a group homomorphism on these classes ([math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant](https://alphabetamath.cc/item/prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant)).

[F4] Fibres of a covering are discrete, by its evenly covered neighbourhoods ([math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)). A $K(G,1)$ is a connected based CW complex with the specified fundamental-group isomorphism and vanishing higher homotopy groups ([math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)). Homotopy equivalence is defined by maps whose two composites are homotopic to the respective identities ([math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence)). CW complexes have the cell filtration, closure finiteness and weak topology of [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology).

[F5] For a path $\gamma:y_0\to y_1$ in $Y$ and $n\geq1$, basepoint transport $\beta_\gamma:\pi_n(Y,y_1)\to\pi_n(Y,y_0)$ is an isomorphism. If $H:u\simeq v$ is a homotopy and $\gamma(t)=H(z_0,t)$, then $u_*=\beta_\gamma\circ v_*$ on the groups based at $z_0$ ([math:prop-higher-homotopy-basepoint-transport-and-moving-homotopies](https://alphabetamath.cc/item/prop-higher-homotopy-basepoint-transport-and-moving-homotopies)).

### Proof
**Given:** The covering, basepoint, and path-connected spaces in the statement. Write $b=p(e)$ and $I=[0,1]$.

**Goal:** Prove the higher-homotopy isomorphisms and the stated consequences.

1.1 Fix $n\geq2$. The cube $I^n$ is path-connected and locally path-connected, and every loop in it contracts to its basepoint by straight-line interpolation inside the cube. Thus its fundamental group is trivial. A representative $a:(I^n,\partial I^n)\to(B,b)$ has a lift taking a chosen boundary point to $e$ by [F1]. The boundary $\partial I^n$ is connected for $n\geq2$; the lift maps it continuously into the discrete fibre $p^{-1}(b)$, so the entire boundary maps to $e$. Hence every class in $\pi_n(B,b)$ is in the image of $p_*$. [given, F1, F3, F4]

1.2 Let $X$ be either $E$ or $B$ and suppose that $X$ is of CW homotopy type. Choose a CW complex $C$, a homotopy equivalence $f:C\to X$ and an inverse $g:X\to C$, with homotopies $gf\simeq\operatorname{id}_C$ and $fg\simeq\operatorname{id}_X$. Since $X$ is nonempty, so is $C$. For any $c,d\in C$, a path in $X$ from $f(c)$ to $f(d)$ maps under $g$ to a path from $gf(c)$ to $gf(d)$; the first homotopy supplies paths from $gf(c)$ to $c$ and from $gf(d)$ to $d$. Reversing the first and concatenating shows that $C$ is path-connected. [given, F4, choose, construct]

2.1 Suppose two based cube maps into $E$ have images that are homotopic relative to $\partial I^n$ in $B$. By [F2], lift that homotopy starting with the first map. On each boundary point the lifted time path lies in the discrete fibre over $b$ and starts at $e$, so it is constant. At time one, the resulting based lift and the second map lift the same cube map and agree at a boundary point; uniqueness in [F1] makes them equal. The lifted homotopy is therefore relative to the boundary, proving injectivity on classes. [F1, F2, F3, F4, step 1.1]

2.2 Fix $c\in C$, put $y=f(c)$, and let $n\geq1$. Write $A=f_*:\pi_n(C,c)\to\pi_n(X,y)$ and $B=g_*:\pi_n(X,y)\to\pi_n(C,g(y))$. The homotopy $gf\simeq\operatorname{id}_C$ and [F5] show that $BA=(gf)_*$ is a basepoint-transport isomorphism. Similarly, with $D=f_*:\pi_n(C,g(y))\to\pi_n(X,fg(y))$, the homotopy $fg\simeq\operatorname{id}_X$ shows that $DB=(fg)_*$ is an isomorphism. Hence $A$ and $B$ are injective. For $v\in\pi_n(X,y)$, surjectivity of $BA$ gives $u$ with $BA(u)=B(v)$; injectivity of $B$ then gives $A(u)=v$. Thus $A$ is an isomorphism, even though the original inverse homotopies need not be based. [F3, F5, step 1.2]

3.1 By [F3], $p_*$ is a homomorphism; steps 1.1 and 2.1 show it is bijective and hence an isomorphism. Basepoint transport in [F5] makes vanishing independent of the basepoint in a path-connected space. Consequently $E$ is aspherical exactly when $B$ is. For either space that is a CW complex, the $K(G,1)$ criterion follows from [F4] and its specified fundamental-group identification. [F3, F4, F5, step 1.1, step 2.1]

4.1 For the specified basepoint $x\in X$, choose a path $\eta:y\to x$. By [F5] and step 2.2, $\beta_\eta^{-1}\circ f_*:\pi_n(C,c)\to\pi_n(X,x)$ is an isomorphism for every $n\geq1$. In degree one, composing with the specified isomorphism to $G$ equips $C$ with the required fundamental-group identification. In degrees at least two, it shows that $C$ is aspherical exactly when $X$ is. Thus if $X$ is aspherical, $C$ is a $K(G,1)$ by [F4]. Conversely, if $X$ is homotopy equivalent to a $K(G,1)$, the same argument with that CW model gives vanishing of the higher groups of $X$. No step identifies the fundamental groups of $E$ and $B$ or asserts finiteness of a CW model. [F4, F5, step 1.2, step 2.2, choose] ∎


## Divisibility and atomicity in a category

[Open item](item-def-author-18fc5d9b80f3-category-divisibility) · level 0


### Definition

Write $fg$ for the composite obtained by first traversing $f$ and then $g$. An arrow $f$ left-divides $h$ when $h=fg$ for some arrow $g$; it right-divides $h$ when $h=gf$ for some $g$. A category is cancellative when $fg=fh$ implies $g=h$ and $gf=hf$ implies $g=h$, whenever the displayed composites are defined. An atom is a nonidentity arrow which is not a composite of two nonidentity arrows. The category is atomic if, for each arrow $h$, the lengths of factorizations of $h$ into nonidentity arrows are bounded by an integer depending on $h$.

For an object $x$, the outgoing divisibility relation is left divisibility on arrows with source $x$; the incoming divisibility relation is right divisibility on arrows with target $x$. Partial-order and lattice terminology is used here only when the relevant collection of arrows is a set. When these relations are partial orders, their joins are least common multiples and their meets are greatest common divisors for the respective divisibilities. A lattice is a partially ordered set in which every pair has a meet and a join.

### Definition references

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)

[math:def-lattice-distributive-lattice-and-order-ideal](https://alphabetamath.cc/item/def-lattice-distributive-lattice-and-order-ideal)

### Justification

The source and target conditions make the factorization relations meaningful. Identity arrows give reflexivity and associativity of composition gives transitivity. An arrow $u:x\to y$ is invertible if there is an arrow $v:y\to x$ with $uv=1_x$ and $vu=1_y$; then $u$ and $v$ are inverse arrows. Atomicity rules out nonidentity invertible arrows: the inverse of a nonidentity arrow is also nonidentity, so repeating an inverse pair would otherwise give arbitrarily long factorizations of an identity. In a cancellative atomic category, mutual left divisibility gives $f=fgk$ and cancellation gives $gk=1$. Cancellation in $g(kg)=g1$ then gives $kg=1$, so $g$ and $k$ are inverse arrows; hence both are identities and $f=h$. The same argument applies to right divisibility. Thus, in a cancellative atomic category, an outgoing or incoming divisibility relation is a partial order whenever its underlying arrow collection is a set; its meets and joins, when they exist, are unique by antisymmetry.


## Positive degree and atoms of the presented Artin monoid

[Open item](item-lem-author-f758f7dd29a6-positive-degree) · level 0


### Statement

Let $M$ be the positive Artin monoid presented by generators $a_s$ and the braid relations associated with a finite set $S$ and a Coxeter matrix. A word is a finite string of these generators, and its length is its number of letters. Word length descends to an additive map $d:M\to\mathbb N$. It vanishes exactly on the identity, and the atoms (nonidentity elements which are not products of two nonidentity elements) are exactly the generators. Every element factors into atoms, and every factorization of $x$ into nonidentity elements has at most $d(x)$ factors. In particular there is no infinite chain obtained by repeatedly removing a nonidentity left or right factor.

### Statement references

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

### Facts & Assumptions

[F1] The presentation of the positive Artin monoid is the quotient of the free monoid on the generators by the congruence generated by the braid relations. Each relation has equally many letters on both sides. ([math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations))

### Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 Each defining relation preserves word length, including when applied within a longer word; symmetry, transitivity and adjoining a context preserve that equality. Thus two words representing one element have equal lengths, so $d$ is well defined and $d(xy)=d(x)+d(y)$. A word has length zero exactly when it is empty, proving $d(x)=0$ exactly for $x=1$. [F1]

2.1 Every generator has degree one and hence cannot split into two elements of positive degree. A word of length at least two splits after its first letter into two elements of positive degree, so is not an atom. Each word is already a factorization into generators. In a product of $k$ nonidentity elements the sum of degrees is at least $k$; consequently $k\le d(x)$. Repeated removal of a nonidentity factor strictly lowers the nonnegative integer degree, ruling out the stated infinite chains. [step 1.1] ∎



## Path presentations, congruences and formal inverses

[Open item](item-def-path-localisation-interface-artin-tits-prerequisites) · level 1


### Definition

A small directed graph, or quiver, $Q$ consists of a set $Q_0$ of vertices, a set $Q_1$ of directed edges, and source and target functions $s,t:Q_1\to Q_0$. Its path category $P(Q)$ has the vertices as objects and finite composable sequences of edges as arrows; the empty sequence at a vertex is its identity. Composition is concatenation, read from left to right.

A path relation is a pair of paths with the same source and target. Let $R$ be a set of path relations. A path congruence is an equivalence relation on the set of all paths that relates only paths with the same endpoints and remains valid after concatenation on either side by any composable path. Write $\equiv_R$ for the smallest path congruence containing $R$. The category presented by $(Q,R)$ is $\mathcal C=P(Q)/{\equiv_R}$: its objects are the vertices, its arrows are equivalence classes of paths, and its identities and composition are induced by empty paths and concatenation.

Form the doubled quiver $\overline Q$ by adjoining, for each edge $e:x\to y$ of $Q$, a new tagged edge $e^{-1}:y\to x$. These new edges are distinct from the original edges and from one another. Regard each relation in $R$ as a relation in $P(\overline Q)$ and add the relations $ee^{-1}=1_x$ and $e^{-1}e=1_y$ for every $e:x\to y$. The resulting presented category is the groupoid completion $\mathcal C^{\mathrm{gp}}$; the canonical functor $j:\mathcal C\to\mathcal C^{\mathrm{gp}}$ sends each path class to the class of the same path in the doubled quiver.

For every small groupoid $\mathcal G$ and functor $F:\mathcal C\to\mathcal G$, there is a unique functor $\overline F:\mathcal C^{\mathrm{gp}}\to\mathcal G$ with $\overline F\circ j=F$. Oppositely directed edges already in $Q$ remain distinct generators from the newly adjoined formal inverses, although imposed relations can identify their classes. Neither cancellation in $\mathcal C$ nor faithfulness of $j$ is assumed.

### Definition references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:ex-the-free-category-on-a-quiver](https://alphabetamath.cc/item/ex-the-free-category-on-a-quiver)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

### Justification

The free-path construction gives a small category and a set of paths. The intersection of all endpoint-preserving path congruences containing $R$ is such a congruence: the family is nonempty because the relation identifying exactly paths with the same endpoints is one. The intersection is contained in every other member, so it is the smallest. Its equivalence classes form a set. Since equivalent paths have the same endpoints and the relation is stable under concatenation, source, target, identities and composition of classes are independent of representatives. Associativity and identity laws descend from the path category. These constructions use [math:ex-the-free-category-on-a-quiver](https://alphabetamath.cc/item/ex-the-free-category-on-a-quiver) and [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation).

The doubled quiver and the enlarged relation set are set-sized, so the same construction applies. Every original edge class has the corresponding reverse-edge class as a two-sided inverse. Reversing a finite path and replacing each edge by its paired reverse gives a two-sided inverse to its class; hence every arrow is invertible and the resulting small category is a groupoid, as in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites). The original relations hold in the enlarged quotient, so sending a path to its enlarged class is constant on $\equiv_R$ and defines $j$.

Given $F$, assign each vertex $x$ the object $F(x)$, each original edge its image under $F$ after passage to $\mathcal C$, and each new reverse edge the inverse of that image. The free-path property extends this assignment uniquely to a functor $H:P(\overline Q)\to\mathcal G$. It respects the original relations because $F$ is defined on $\mathcal C$, and respects the inverse relations by the groupoid laws. For paths $p,q$ in $P(\overline Q)$, define $p\sim q$ to mean that $p$ and $q$ have the same source and target and $H(p)=H(q)$. This is an endpoint-preserving equivalence relation. If $p\sim q$ and paths $a,b$ can be concatenated on the left and right, then $apb$ and $aqb$ have the same endpoints and $H(apb)=H(a)H(p)H(b)=H(a)H(q)H(b)=H(aqb)$, so the relation is a path congruence. It contains every enlarged relation because those relations have matching endpoints and $H$ respects them. The smallest enlarged path congruence is therefore contained in $\sim$, so $H$ descends to a functor $\overline F$ on the quotient, with object map $x\mapsto F(x)$ and $\overline F\circ j=F$. Any functor extending $F$ must send each new reverse edge to the unique inverse of the image of its original edge; the free-path property then forces its value on every path and hence every quotient class. This proves existence and uniqueness without asserting that $j$ is faithful.


## Covering-space actions and fundamental-groupoid quotients

[Open item](item-prop-topological-orbit-interface-artin-tits-prerequisites) · level 1


### Statement

Let a group $N$ act on a nonempty, path-connected, locally path-connected space $X$ by homeomorphisms, with every point having an open neighbourhood disjoint from all its nonidentity translates. Give $B=X/N$ the quotient topology and write $p:X\to B$ for the orbit map. Then $p$ is a regular covering: its deck transformations act transitively on each fibre. Its deck group is precisely $N$, acting as given.

The induced action on the fundamental groupoid $\Pi_1(X)$ sends points and endpoint-fixed path classes to their translates. Its orbit groupoid has object and arrow orbits, with composition defined by choosing representatives whose endpoints agree. Projection induces an isomorphism $\Pi_1(X)/N\cong\Pi_1(B)$. The induced functor $\Pi_1(X)\to\Pi_1(B)$ is a groupoid covering: for each point upstairs, it bijects the arrows starting there with the arrows starting at its image.

For $x\in X$, use first-path-first multiplication on fundamental groups. The endpoint of the lift of a loop at $p(x)$ starting at $x$ is $n x$ for a unique $n\in N$; this defines the last map in the exact sequence $1\to\pi_1(X,x)\xrightarrow{p_*}\pi_1(B,p(x))\to N\to1$. No universal cover is used here. Semilocal simple connectedness is a separate local condition to be checked when invoking the usual universal-cover existence theorem.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:def-locally-connected](https://alphabetamath.cc/item/def-locally-connected)

[math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)

[math:def-deck-transformation-and-deck-group](https://alphabetamath.cc/item/def-deck-transformation-and-deck-group)

[math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)

[math:def-universal-covering-space](https://alphabetamath.cc/item/def-universal-covering-space)

[math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-induced-homomorphism-on-fundamental-groups](https://alphabetamath.cc/item/def-induced-homomorphism-on-fundamental-groups)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Facts & Assumptions

[F1] The disjoint-neighbourhood condition is the definition of a covering-space action; it implies that the action is free. [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[F2] The orbit map of a covering-space action is a covering, and for path-connected total space its deck transformations are exactly the acting transformations. [math:thm-orbit-map-of-a-covering-space-action-is-a-covering](https://alphabetamath.cc/item/thm-orbit-map-of-a-covering-space-action-is-a-covering)

[F3] A fundamental groupoid has points as objects and endpoint-fixed path-homotopy classes as arrows, with composition by path concatenation. A groupoid has invertible arrows and a functor preserves sources, targets, identities and composition. [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[F4] A path in the base of a covering has a unique lift from each chosen point over its starting point. A homotopy has a unique lift extending a specified lift of its initial map. [math:thm-path-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-path-lifting-for-covering-maps) [math:thm-homotopy-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-homotopy-lifting-for-covering-maps)

[F5] A covering induces an injective homomorphism on based fundamental groups. [math:thm-covering-maps-inject-fundamental-groups](https://alphabetamath.cc/item/thm-covering-maps-inject-fundamental-groups)

[F6] Semilocal simple connectedness is a local condition on the images of fundamental groups of neighbourhoods. [math:def-semilocally-simply-connected-space](https://alphabetamath.cc/item/def-semilocally-simply-connected-space)

### Proof
**Given:** The action, space, quotient and basepoint in the Statement.


**Given:** The hypotheses and the basepoint $x$ in the Statement.

**Goal:** Establish the covering, groupoid identification and exact sequence.

**Proof technique:** direct.

1.1 By [F1] and [F2], $p$ is a covering and its deck transformations are exactly the transformations from $N$. The action is free and every fibre is an orbit, so these transformations act freely and transitively on each fibre. Thus the covering is regular in the stated sense and $N$ identifies with its deck group. [F1, F2]

2.1 Projection sends a path class upstairs to its projected class and is invariant under translation. Given two composable arrow orbits, translate a representative of the second so that its source equals the target of a representative of the first. Freeness gives a unique such translate; translating both representatives together changes the composite only by a common translate. Hence this rule gives a well-defined orbit groupoid, and projection defines a functor from it to $\Pi_1(B)$. [step 1.1, F3]

2.2 For a based loop downstairs, [F4] gives a lift from $x$ ending at a unique $n x$ by step 1.1. Endpoint-fixed homotopy lifting makes $n$ independent of the representative. If lifts of loops $\alpha$ and $\beta$ end at $n x$ and $m x$, respectively, then the lift of their first-path-first concatenation is the lift of $\alpha$ followed by the $n$-translate of the lift of $\beta$; it ends at $nm x$. Thus the endpoint map is a homomorphism. [step 1.1, F4]

3.1 Each point of $B$ is an orbit, and [F4] lifts every base path from a chosen point over its source. Thus the functor of step 2.1 is surjective on arrows. If two projected paths are endpoint-fixed homotopic, first translate one lift so their initial points agree. Lift the homotopy starting with the first path. Its initial endpoint remains fixed by uniqueness of path lifts; its final endpoint also remains fixed, since it lifts a constant path. The final lifted path is therefore the second path by uniqueness, and the two original arrow classes differ by a translation. The functor is consequently injective on arrows and is an isomorphism. The same lifting argument gives the asserted bijection on arrows starting at any specified point. [step 2.1, F3, F4]

4.1 Every $n\in N$ occurs: path-connectedness supplies a path from $x$ to $nx$, whose projection is a loop. The endpoint map has kernel exactly the projected classes of loops at $x$: a lifted loop has endpoint $x$, and conversely endpoint $x$ makes the lifted path a loop. Finally $p_*$ is injective by [F5]. These facts prove exactness; no semilocal simple connectedness or universal cover was used. The separate condition in [F6] is relevant only to an additional universal-cover invocation. [step 2.2, F5, F6] ∎


## Complexified complements in an open convex cone

[Open item](item-def-complement-interface-artin-tits-prerequisites) · level 1


### Definition

Let $E$ be a finite-dimensional real vector space with the Euclidean topology supplied by linear coordinates. Let $T\subseteq E$ be nonempty, open and convex, and let $\mathcal A$ be a locally finite arrangement in $T$: its members are linear hyperplanes meeting $T$, and every point of $T$ has a neighbourhood meeting only finitely many members. Define the complement

$$M(T,\mathcal A)=(T\times T)\setminus\bigcup_{H\in\mathcal A}(H\times H).$$

Give $T\times T$ the product topology and $M(T,\mathcal A)$ its subspace topology: its open sets are intersections of $M(T,\mathcal A)$ with open subsets of $T\times T$.

When $T=E$, put $E_{\mathbb C}=\mathbb C\otimes_{\mathbb R}E$ and identify $(x,y)$ with $1\otimes x+i\otimes y$, also written $x+iy$. For each $H\in\mathcal A$, its complexification inside $E_{\mathbb C}$ means $H_{\mathbb C}=\operatorname{span}_{\mathbb C}\{1\otimes h:h\in H\}$. Under this identification the complement is $E_{\mathbb C}\setminus\bigcup_{H\in\mathcal A}H_{\mathbb C}$.

Suppose a group $G$ acts on $E$ by invertible real-linear maps and each $g\in G$ preserves $T$ and permutes $\mathcal A$. The action convention is $ex=x$ and $(gh)x=g(hx)$. The diagonal action on $T\times T$ is $g\cdot(x,y)=(gx,gy)$; its restriction to the complement is the diagonal action on $M(T,\mathcal A)$.

A homeomorphism is a continuous bijection with continuous inverse. A covering-space action is an action by homeomorphisms for which every point has an open neighbourhood $U$ satisfying $gU\cap U=\varnothing$ for every nonidentity $g$. Setwise preservation alone does not assert this condition or path connectedness. Path connectedness means that for any $p,q\in M(T,\mathcal A)$ there is a continuous map $\gamma:[0,1]\to M(T,\mathcal A)$ with $\gamma(0)=p$ and $\gamma(1)=q$, where $[0,1]$ has its usual subspace topology from $\mathbb R$.

### Definition references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)

[math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)

[math:def-direct-sum-model-of-complexification](https://alphabetamath.cc/item/def-direct-sum-model-of-complexification)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

### Justification

The arrangement convention supplies the ambient topology and the meanings of convexity, hyperplane and local finiteness. The displayed set is a subset of $T\times T$, so the product and subspace topologies determine its topology.

The tensor/direct-sum isomorphism has inverse $\Psi_E(x,y)=1\otimes x+i\otimes y$ and forward map $\Phi_E(1\otimes x+i\otimes y)=(x,y)$. A finite complex linear combination of $1\otimes h_j$, with $h_j\in H$, can be written as $1\otimes h+i\otimes k$ with $h,k\in H$: write each coefficient as $a_j+ib_j$ and set $h=\sum_j a_jh_j$, $k=\sum_j b_jh_j$. Conversely every such expression belongs to the stated complex span. Hence $H_{\mathbb C}=\Psi_E(H\times H)$, and $\Phi_E$ sends it exactly onto $H\times H$. Applying the same isomorphism to the real vector space $H$ identifies its abstract complexification $\mathbb C\otimes_{\mathbb R}H$ with $H\times H$; composing with $\Psi_E$ gives an injective complex-linear map into $E_{\mathbb C}$, sending $z\otimes h$ to $z(1\otimes h)$. Thus the specified subspace is precisely the complexification induced by the inclusion of $H$. Bijection then identifies the removed unions and their complements when $T=E$.

The action axioms hold on each coordinate of the diagonal map. For each $g$, that map sends $H\times H$ to $(gH)\times(gH)$ and $T\times T$ to itself. Because $g$ permutes $\mathcal A$, it preserves the removed union and its complement. Its inverse is the diagonal map for $g^{-1}$.

To justify continuity, use the chosen linear coordinates $E\cong\mathbb R^n$ and the Euclidean norm in those coordinates. Each $g$ is represented by a linear map $\mathbb R^n\to\mathbb R^n$, so the Euclidean linear-map bound supplies $K_g\geq0$ with $\|gv\|_2\leq K_g\|v\|_2$. The bounded-linear-operator equivalences imply that $g$ is continuous; they apply to the Euclidean normed spaces here and also to the linear inverse $g^{-1}$. This includes $n=0$.

The subspace topology therefore makes $g|_T:T\to T$ and its inverse continuous. Basic open sets of $T\times T$ are rectangles $U\times V$ with $U,V$ open in $T$. The inverse image of such a rectangle under the diagonal map is $(g|_T)^{-1}(U)\times(g|_T)^{-1}(V)$, which is open. Preimages commute with unions, so the diagonal map is continuous on every product-open set. The same argument applies to $g^{-1}$. Restricting domain and codomain to the invariant subspace $M(T,\mathcal A)$ preserves continuity by the subspace-topology characteristic property, so these mutually inverse restricted maps are homeomorphisms.

The covering-space condition is an additional neighbourhood condition on this restricted action, not a consequence asserted by the definition.

### Justification references

[math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)

[math:thm-bounded-linear-operator-equivalences](https://alphabetamath.cc/item/thm-bounded-linear-operator-equivalences)


## Categorical Garside structures and simple arrows

[Open item](item-def-garside-interface-artin-tits-prerequisites) · level 1



### Definition

Let $\mathcal C$ be a small category, meaning that its objects and arrows form sets. An automorphism of $\mathcal C$ means a functor $\phi:\mathcal C\to\mathcal C$ admitting a functor $\psi:\mathcal C\to\mathcal C$ with $\psi\circ\phi=\operatorname{id}_{\mathcal C}=\phi\circ\psi$ as equalities on objects and arrows. Let $\phi$ be such an automorphism, and let $\Delta$ be a natural transformation from the identity functor to $\phi$. Thus its component at $x$ is an arrow $\Delta_x:x\to\phi(x)$, and for every $f:x\to y$ one has $f\Delta_y=\Delta_x\phi(f)$ in traversal order. An arrow $f:x\to y$ is simple for this structure if there is an arrow $g:y\to\phi(x)$ with $fg=\Delta_x$.

An atomic categorical Garside structure is such a triple $(\mathcal C,\phi,\Delta)$ in which $\mathcal C$ is atomic and cancellative, every atom is simple, and, for every object $x$, both the outgoing left-divisibility order and the incoming right-divisibility order are lattices. A Garside category means a category equipped with such a structure. In the one-object case its arrows form a Garside monoid in this categorical convention. The structure has finite type if its set of simple arrows is finite.

### Definition references

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:rem-category-theory-class-and-size-conventions](https://alphabetamath.cc/item/rem-category-theory-class-and-size-conventions)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[math:def-lattice-distributive-lattice-and-order-ideal](https://alphabetamath.cc/item/def-lattice-distributive-lattice-and-order-ideal)

[math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid)

### Justification

The naturality equation has matching source and target on both sides. The condition $fg=\Delta_x$ determines the domain and codomain required of $g$, so simplicity is an unambiguous property of an arrow relative to the specified triple. Atomicity and cancellation make the two divisibility relations partial orders, as established in the divisibility definition; the lattice condition is consequently meaningful. Smallness ensures that the arrow collections used for the divisibility orders and the one-object monoid are sets. In a one-object category, composition and its identity give a monoid. The cited definition records the atomic variant adopted here; finite type is an additional condition, not an implicit assumption.


## Unique lifts, endpoint fibres and characteristic subgroups

[Open item](item-lem-author-2e40db4c81b4-lift-fibres) · level 1


### Statement

Let $p:E\to G$ be a functor of small groupoids, with $E,G$ connected and nonempty, bijective from the arrows with source $e$ to those with source $p(e)$ for every $e$. Such a functor is called a covering. Put $x=p(e)$ and $H=p(E_e)\le G_x$ (the characteristic subgroup at $e$). Products of arrows are read left to right. Lifts preserve products and inverses, $E_e\to G_x$ is injective, and two arrows $a,b:x\to y$ lifted from $e$ have equal endpoints exactly when $ab^{-1}\in H$.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

### Facts & Assumptions

[F1] Use the small-groupoid, functor and vertex-group conventions of [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites). A subgroup means a subset containing the identity and closed under multiplication and inverses. The assumed source-wise bijections are the definition of covering.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 For composable arrows $a,b$, lift $a$ from $u$, then $b$ from its endpoint. Their composite projects to $ab$ and has source $u$, hence is its unique lift. Identity arrows lift to identities, and the inverse of a lift projects to the inverse arrow and is its unique lift from its source. This uses exactly preservation of composition and the source-wise bijection. [F1]

2.1 Two loops at $e$ with equal images are equal by injectivity on arrows with source $e$. Their image $H$ contains the identity and is closed under products and inverses, so is a subgroup. If the lifts of $a,b$ have equal endpoints, their first composite with the inverse of the second is a loop over $ab^{-1}$, giving membership in $H$. Conversely lift $ab^{-1}\in H$ as a loop at $e$, and then compose with the lift of $b$ from $e$. This projects to $a$ and ends where that lift of $b$ ends; uniqueness gives the assertion. [F1, step 1.1] ∎


## Reduced Coxeter lifts in the presented positive monoid

[Open item](item-lem-author-f758f7dd29a6-monoid-reduced-lifts) · level 1


### Statement

Let $(W,S)$ be a finite-rank Coxeter system with length $\ell$, let $M$ be its presented positive Artin monoid, and let $A$ be its Artin group. Write $q:M\to W$ and $j:M\to A$ for the generator maps. For a reduced expression $w=s_1\cdots s_r$, set $\boldsymbol w=a_{s_1}\cdots a_{s_r}$ in $M$. This is independent of the reduced expression, $q(\boldsymbol w)=w$, and $d(\boldsymbol w)=\ell(w)$. Thus $w\mapsto\boldsymbol w$ is injective as a map of sets. Whenever $\ell(uv)=\ell(u)+\ell(v)$, one has $\boldsymbol{uv}=\boldsymbol u\boldsymbol v$. Moreover $j(\boldsymbol w)=\sigma_w$, the reduced-word lift in $A$. No injectivity of $j$ is assumed here.

### Statement references

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:thm-hh-matsumoto-reduced-word-theorem](https://alphabetamath.cc/item/thm-hh-matsumoto-reduced-word-theorem)

[math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection)

[prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites)

### Facts & Assumptions

[F1] Reduced words have length $\ell(w)$, and any two reduced words for the same Coxeter element are connected by braid moves. ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length), [math:thm-hh-matsumoto-reduced-word-theorem](https://alphabetamath.cc/item/thm-hh-matsumoto-reduced-word-theorem))

[F2] The generator maps $q$ and $j$ respect the defining braid relations. ([math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection))

[F3] The degree $d$ is word length on the presented monoid. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

[F4] The group lift $\sigma_w$ is the product of the corresponding generators along any reduced word for $w$. ([prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites))

[F5] The monoid $M$ is the quotient of the free monoid on the generators $a_s$ by the congruence generated by the braid relations. In particular, the two alternating words of length $m(s,t)<\infty$ are equal in $M$, also inside any word context. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

### Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 Any two reduced words for $w$ are connected by the moves in [F1], and each move is an equality in the presented monoid by [F5]. Therefore $\boldsymbol w$ is well defined. Its image under $q$ is $w$, and its degree is $\ell(w)$ by [F3]. Applying $q$ shows that equal lifts have equal Coxeter elements, establishing set injectivity. [F1, F2, F3, F5]

2.1 Concatenate reduced words for $u$ and $v$. If their lengths add to $\ell(uv)$, that concatenation is reduced and gives $\boldsymbol{uv}=\boldsymbol u\boldsymbol v$ by step 1.1. Applying $j$ to a reduced word yields exactly the product defining $\sigma_w$ in [F4]. These arguments do not cancel elements in $M$ or assume that $j$ is injective. [F1, F2, F4, step 1.1] ∎


## Unique conjugator factorization restricts to a normalizer splitting

[Open item](item-lem-author-c81e5a0d2026-vertex-splitting) · level 1


### Statement

Let $A$ be a group with specified subgroups $A_I$. Form the groupoid $\mathcal C$ with arrows $(I,g,J)$ satisfying $g^{-1}A_Ig=A_J$, and product $(I,g,J)(J,h,K)=(I,gh,K)$. Let $\mathcal P$ have only vertex arrows $A_I$, and let $\mathcal R\subseteq\mathcal C$ be a wide subgroupoid. Suppose every arrow $g:I\to J$ has a unique factorization $g=pr$ with $p\in A_I$ and $r\in\mathcal R(I,J)$. Then $\mathcal C=\mathcal P\rtimes\mathcal R$ in the internal sense, and $N_A(A_I)=A_I\rtimes\mathcal R_I$. Explicitly, every normalizer element has a unique such factorization, $A_I\cap\mathcal R_I=\{1\}$ and the action in the usual product coordinates is $\alpha_r(q)=rqr^{-1}$.

### Facts & Assumptions

[F1] The set-sized groupoid axioms, tagged arrows, vertex groups and left-to-right product are specified in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).

[F2] A wide subgroupoid $\mathcal R\subseteq\mathcal C$ has all the objects of $\mathcal C$, contains their identity arrows, and is closed under composable products and inverses, with these operations inherited from $\mathcal C$. This is an inline definition using the groupoid structure in [F1]. The unique factorization hypothesis is an assumption of this lemma, to be supplied separately in applications. The internal groupoid semidirect notation means unique factorization and $A_Ir=rA_J$ for every $r:I\to J$.

[F3] Groups and subgroups use [math:def-group](https://alphabetamath.cc/item/def-group) and [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup). The normalizer is $N_A(H)=\{g\in A:gHg^{-1}=H\}$ as in [math:def-normalizer-of-a-subgroup](https://alphabetamath.cc/item/def-normalizer-of-a-subgroup).

[F4] Normality means invariance under every conjugation by the ambient group, as in [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup). The internal group semidirect product $G=N\rtimes H$ means $N\trianglelefteq G$, $G=NH$ and $N\cap H=\{1\}$, as in [math:def-internal-semidirect-product](https://alphabetamath.cc/item/def-internal-semidirect-product).

[F5] An action by automorphisms satisfies $\alpha_{rs}=\alpha_r\circ\alpha_s$ and $\alpha_1=\operatorname{id}$, as in [math:def-action-by-automorphisms](https://alphabetamath.cc/item/def-action-by-automorphisms). For such an action, the external semidirect product has coordinates $(p,r)$ with multiplication $(p,r)(q,s)=(p\alpha_r(q),rs)$, as in [math:def-external-semidirect-product](https://alphabetamath.cc/item/def-external-semidirect-product).

### Proof

**Given:** The group, subgroup family, wide subgroupoid and assumed unique factorizations.

**Goal:** Prove the groupoid and normalizer semidirect conclusions.

1.1 If $g:I\to J$ and $h:J\to K$, then $(gh)^{-1}A_I(gh)=h^{-1}(g^{-1}A_Ig)h=A_K$. Identity arrows and inverse labels $g^{-1}$ have the required endpoints. Associativity follows from the group multiplication. Thus the tagged arrows form the groupoid in [F1]. At $I$, the arrow condition $g^{-1}A_Ig=A_I$ is equivalent to $gA_Ig^{-1}=A_I$, so its vertex group is $N_A(A_I)$ under the identification $(I,g,I)\mapsto g$. Also $\mathcal P$ is a subgroupoid because each $A_I$ is a subgroup. [F1, F3, algebra]

2.1 An arrow $r:I\to J$ satisfies $r^{-1}A_Ir=A_J$, equivalently $A_Ir=rA_J$. Along with the assumed unique factorization this is exactly the specified internal groupoid semidirect property. By the closure and identity requirements in [F2], $\mathcal R_I=\mathcal R(I,I)$ is a subgroup of $N_A(A_I)$. At a vertex, factorization gives $N_A(A_I)=A_I\mathcal R_I$. An element common to $A_I$ and $\mathcal R_I$ has the two factorizations $x\cdot1$ and $1\cdot x$, so uniqueness implies $x=1$. Finally $A_I$ is normal in $N_A(A_I)$ by the normalizer definition. Hence these are the internal group semidirect conditions of [F4]. [F2, F3, F4, step 1.1]

3.1 For $r\in\mathcal R_I$, conjugation $\alpha_r:q\mapsto rqr^{-1}$ preserves $A_I$, preserves multiplication, and has inverse conjugation by $r^{-1}$, so is an automorphism. Also $\alpha_{rr'}=\alpha_r\circ\alpha_{r'}$ and $\alpha_1=\operatorname{id}_{A_I}$, giving the action in [F5]. The map $(p,r)\mapsto pr$ is bijective by factorization and satisfies $(pr)(qs)=p(rqr^{-1})rs$, exactly the external semidirect group law of [F5]. This proves all vertex claims. [F3, F5, step 2.1, algebra] ∎


## Independent Artin fundamental-group identification

[Open item](item-thm-reflection-artin-topology-input-artin-tits-prerequisites) · level 2


### Statement

Let $E$ be a finite-dimensional real vector space and $\overline C$ a closed convex polyhedral cone with nonempty interior $C$. A wall is the hyperplane spanned by a codimension-one face of $\overline C$. For each wall choose a linear reflection fixing it, meaning a linear transformation of order two whose fixed space is that wall. Let $S$ be the set of these reflections and let $W$ be the subgroup of $\mathrm{GL}(E)$ generated by $S$. Assume $wC\cap C=\varnothing$ for every nonidentity $w\in W$; this is a Vinberg system.

Put $T=\operatorname{int}(\bigcup_{w\in W}w\overline C)$ and let $\mathcal A$ be the set of fixed hyperplanes of all reflections in $W$. Then $T$ is a nonempty open convex cone, $\mathcal A$ is a locally finite arrangement in $T$, and $W$ preserves both. Give $M=(T\times T)\setminus\bigcup_{H\in\mathcal A}(H\times H)$ the subspace topology and let $W$ act diagonally. This action is free and properly discontinuous and is a covering-space action. The space $M$ is path connected, and $M\to M/W$ is a regular covering with deck group $W$.

The pair $(W,S)$ is a Coxeter system. For distinct $s,t\in S$, let $m(s,t)$ be the order of $st$, possibly infinite. Let $A$ be the group generated by $\sigma_s$ for $s\in S$, with the relation equating the two alternating words of length $m(s,t)$ beginning respectively with $\sigma_s$ and $\sigma_t$ whenever $m(s,t)$ is finite. Let $\theta:A\to W$ send $\sigma_s$ to $s$, and put $P=\ker\theta$. For a basepoint $z\in M$ and its image $\bar z\in M/W$, the covering sequence $1\to\pi_1(M,z)\to\pi_1(M/W,\bar z)\to W\to1$ is isomorphic, as a sequence over $W$, to $1\to P\to A\xrightarrow{\theta}W\to1$. Here $\pi_1$ is the group of based loop homotopy classes, and the map to $W$ records the endpoint translate of a lifted loop.

### Statement references

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods)

[math:def-regular-covering](https://alphabetamath.cc/item/def-regular-covering)

[math:def-deck-transformation-and-deck-group](https://alphabetamath.cc/item/def-deck-transformation-and-deck-group)

[math:def-lift-of-a-map-path-and-homotopy](https://alphabetamath.cc/item/def-lift-of-a-map-path-and-homotopy)

### External input

Paris states Vinberg's results on the cone and arrangement, states that the diagonal action on the complement is free and properly discontinuous, and gives Van der Lek's identification of the regular-covering sequence with $1\to P\to A\xrightarrow{\theta}W\to1$ under the Vinberg-system hypotheses above. The cited complement is connected. The imported identification does not assert that the complement or its quotient is aspherical.

The source statements are used as external inputs; their proofs are not reproduced or independently reviewed here.


## Groupoid completion and Garside groupoids

[Open item](item-def-author-18fc5d9b80f3-garside-groupoid) · level 2


### Definition

For a small category $\mathcal C$, form a directed graph with its objects as vertices, one edge $[f]:x\to y$ for each arrow $f:x\to y$, and a formal reverse edge $[f]^{-1}:y\to x$. Take finite directed paths and identify paths by the smallest equivalence relation compatible with concatenation containing $[1_x]=1_x$, $[f][g]=[fg]$ for composable arrows, and $[f][f]^{-1}=1_x$, $[f]^{-1}[f]=1_y$. The resulting category is the groupoid completion of $\mathcal C$. A Garside groupoid is a groupoid isomorphic to the completion of a Garside category. In the one-object case the completion is a group, called the group of fractions of that categorical Garside monoid.

### Definition references

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:ex-the-free-category-on-a-quiver](https://alphabetamath.cc/item/ex-the-free-category-on-a-quiver)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid)

[math:def-small-locally-small-and-large-category](https://alphabetamath.cc/item/def-small-locally-small-and-large-category)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:prop-category-isomorphisms-are-bijective-on-objects-and-morphisms](https://alphabetamath.cc/item/prop-category-isomorphisms-are-bijective-on-objects-and-morphisms)

### Justification

The intersection of all concatenation-compatible equivalence relations containing the listed relations exists, since the relation identifying all paths with the same endpoints is one such relation. The quotient inherits associative composition and identities from paths. Reversing a path and reversing each edge gives an inverse in the quotient, so every arrow is invertible. With one object, this groupoid is a group. This construction alone does not assert that the original category embeds in its completion.


## Explicit connected cover associated with a vertex subgroup

[Open item](item-lem-author-2e40db4c81b4-subgroup-cover) · level 2


### Statement

Let $G$ be a connected small groupoid, $x$ an object, and $H\le G_x$ a subgroup. Form objects $Ha=\{ha:h\in H\}$ for all arrows $a:x\to y$, recording $y$. There is a connected covering $C_H\to G$ whose arrows are pairs $(Ha,g)$ with $g:y\to z$, from $Ha$ to $Hag$, projecting to $g$. Its chosen object is $H1_x=H$ and its characteristic subgroup there is $H$.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

### Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for small groupoids and left-to-right products, and [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for coverings and characteristic subgroups; a subgroup contains the identity and is closed under multiplication and inverses.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Two sets $Ha,Hb$ with the same recorded target coincide precisely when $a=hb$ for some $h\in H$, equivalently $ab^{-1}\in H$. Indeed a nonempty intersection yields $h_1a=h_2b$ and hence $a=h_1^{-1}h_2b$; the converse follows by closure of $H$. Consequently replacing $a$ by $ha$ leaves $Hag$ unchanged. These are sets because $G$ is small. [F1]

2.1 Define $(Ha,g)(Hag,k)=(Ha,gk)$. Associativity follows from that of $G$; the identity at $Ha$ is $(Ha,1_y)$ and the inverse of $(Ha,g)$ is $(Hag,g^{-1})$. Thus this is a groupoid and the projection is a functor, bijective on each source star since its arrows with prescribed source are exactly the pairs with all possible labels $g$. Between $Ha$ and $Hb$ the label $a^{-1}b$ gives an arrow, so it is connected. The loops at $H$ have precisely labels $g\in G_x$ with $Hg=H$, exactly $H$, which proves the characteristic-subgroup claim. [F1, step 1.1] ∎


## Sign facets of a cone arrangement

[Open item](item-def-author-5a1e77100001-sign-facets) · level 2


### Definition

Use the finite-dimensional locally finite arrangement conventions of *def-arrangement-topology-interface-artin-tits-prerequisites*, now with $I$ a nonempty open convex cone in $E$. For each $H\in\mathcal A$ choose a nonzero real linear functional $h_H$ with kernel $H$. Define the sign of $x\in I$ at $H$ to be $\operatorname{sgn}(h_H(x))\in\{-,0,+\}$. A facet is a nonempty fiber of the simultaneous sign map on $I$. Write $\mathcal F$ for the facets and $\mathcal C$ for those having no zero signs. A cone here is stable under multiplication by positive real scalars. Closures in the following helpers are always relative to $I$.

### Definition references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)

### Justification

First justify the defining functionals. For a hyperplane $K$ in a finite-dimensional real vector space $V$, [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane) says that $\dim(V/K)=1$. Use the quotient operations of [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection) and the meanings of dimension and basis in [math:def-dimension](https://alphabetamath.cc/item/def-dimension) and [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis). Thus $V/K$ has a one-element basis $\{b\}$. If $v\notin K$, write $v+K=s b$ with $s\ne0$. For every $x\in V$, write $x+K=r b$; then $x-(r/s)v\in K$. This coefficient is unique: if both $x-tv$ and $x-uv$ lie in $K$, then $(t-u)(v+K)=0$, so $t=u$. Define $f_v(x)=t$ by $x-tv\in K$. For $x-tv,y-uv\in K$ and $\alpha,\beta\in\mathbb R$, the subspace property gives $(\alpha x+\beta y)-(\alpha t+\beta u)v\in K$. Uniqueness therefore gives $f_v(\alpha x+\beta y)=\alpha f_v(x)+\beta f_v(y)$, so $f_v$ is a linear functional, with $f_v(v)=1$ and $\ker f_v=K$. These are the functional and kernel notions of [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) and [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map). For the simultaneous choices on $E$, use the fixed coordinates $c$ in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites). Let $e_j\in\mathbb R^n$ have $j$-th coordinate $1$ and all other coordinates $0$. Coordinatewise evaluation gives $z=\sum_{j<n}z_j e_j$. Hence, for each proper $H$, some $c^{-1}(e_j)$ lies outside $H$, since otherwise every $x=c^{-1}(\sum_{j<n}c(x)_j e_j)$ would lie in $H$. Take the least such $j$ and set $v_H=c^{-1}(e_j)$ and $h_H=f_{v_H}$. This supplies a definite family of defining functionals without arbitrary choices. When $n=0$ there are no hyperplanes.

Also, if $f,g:V\to\mathbb R$ are nonzero linear functionals with the same kernel $K$, take any $v$ with $f(v)\ne0$. For every $x\in V$, linearity gives $x-\frac{f(x)}{f(v)}v\in K$, whence $g(x)=\frac{g(v)}{f(v)}f(x)$. Since $v\notin K=\ker g$, the scalar $g(v)/f(v)$ is nonzero. This proves the scalar-multiple assertion in any real vector space, using precisely the functional and kernel definitions in [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) and [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map).

The arrangement conventions in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) and linear functionals in [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) make the signs meaningful. Kernels are understood as in [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map). Write $n=\dim E$ and use the specified coordinate isomorphism $c:E\to\mathbb R^n$. For $n\geq1$, apply [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded) to $h_H\circ c^{-1}$ to obtain $|h_H(u)-h_H(v)|\leq K_H\|c(u)-c(v)\|_2$ for some $K_H\geq0$. Taking a coordinate-ball radius smaller than $|h_H(u)|/(K_H+1)$ preserves every nonzero value's sign. Thus $h_H$ is continuous, $H=h_H^{-1}(0)$ is closed, and its two strict half-spaces are open. For $n=0$ there are no hyperplanes or defining nonzero functionals.

Connectedness and separation are understood as in [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space). Each fiber is an intersection of linear hyperplanes, strict half-spaces and $I$, so it is convex. Claim 1 of [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected) makes its coordinate image connected when $n\geq1$. The supplier's product topology agrees with the Euclidean topology here: $\|v\|_\infty\leq\|v\|_2\leq\sqrt n\|v\|_\infty$ gives mutual ball inclusions. Transporting a separation along $c$ would therefore contradict that connectedness. For $n=0$ the nonempty fiber is a singleton and has no separation. Near $x\in I$, local finiteness gives an open ball contained in $I$ meeting only finitely many hyperplanes. Shrink its radius to avoid the finitely many among them not containing $x$, using the continuity just established. Each other hyperplane misses this connected ball and has constant sign on it, since two nonempty strict sign sets would separate the ball. The hyperplanes through $x$ form a finite set, and their intersection $L_x$ contains the whole fiber through $x$. Within this ball, that fiber is exactly its intersection with $L_x$. The zero signs, and hence $L_x$, are the same at every point of the fiber, so the fiber is relatively open in $L_x$. Using span as the smallest linear subspace containing a set, as in [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), it spans $L_x$: if $x$ lies in such a relatively open part, then for any $v\in L_x$ a sufficiently small nonzero $t$ has both $x$ and $x+tv$ in the fiber, whence $v=t^{-1}((x+tv)-x)$ lies in its linear span. This includes $L_x=\{0\}$. The fibers partition $I$. By [prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites), applied with $T=I$, those with no zero signs are exactly the chambers. They are open: the ball construction at a point with no zero signs gives a ball contained in its fiber.

For the recursive comparison, fix $H\in\mathcal A$, take $H$ as the new ambient vector space, and put $I^H=I\cap H$ and $\mathcal A^H=\{H\cap H':H'\in\mathcal A\setminus\{H\},\ (H\cap H')\cap I\ne\varnothing\}$. This is a set of distinct traces: repetitions are identified, and traces missing $I^H$ are omitted. Since distinct ambient hyperplanes do not contain one another, every retained trace is a linear hyperplane of $H$. The domain $I^H$ is a nonempty open convex cone in $H$. At $x\in I^H$, intersect an open neighbourhood in $I$ meeting finitely many ambient hyperplanes with $H$. Any trace meeting this neighbourhood comes from an ambient hyperplane meeting the original neighbourhood. Thus $\mathcal A^H$ is locally finite in $I^H$, so the same arrangement conventions apply in the smaller ambient space.

The recursive definition in [Paris, §2.3, printed p.382](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf) calls chambers codimension-zero facets, chambers of these induced arrangements codimension-one facets, and, for $d\geq2$, codimension-$(d-1)$ facets of induced arrangements codimension-$d$ facets of the original arrangement.

Here is the local comparison with that recursion. On $I^H$ the $H$-coordinate is identically zero. A hyperplane $H'$ whose trace misses $I^H$ has a constant nonzero sign there, because $I^H$ is convex. For a retained trace, $h_{H'}|_H$ is a nonzero defining functional. By the scalar-multiple argument above, two such restrictions with the same kernel are nonzero scalar multiples, so identifying duplicate traces only removes redundant sign coordinates, with a possible fixed sign reversal. Consequently, two points of $I^H$ have the same induced sign vector if and only if they have the same full ambient sign vector. Thus induced sign fibers are exactly the ambient sign fibers contained in $H$. Induction on ambient dimension now proves the recursive comparison: in dimension zero the empty arrangement has the single chamber $I$; in higher dimension, fibers with no zero signs are already the chambers, while any other fiber lies in some $H$ and is, by induction, a recursive facet of its induced arrangement. Conversely, every recursive facet lying in some $H$ is an induced sign fiber by induction, hence an ambient sign fiber by the correspondence just proved. For such a fiber $F$, let $L$ be its span as defined in [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), the same subspace whether computed in $H$ or in $E$ by the subspace-span comparison in [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis). The subspaces $L\subseteq H\subseteq E$ are finite-dimensional by [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace), since $E$ is finite-dimensional. To compute the dimension drop, choose $v\in E$ with $h_H(v)\ne0$. For every $r\in\mathbb R$, one has $h_H((r/h_H(v))v)=r$, so $\operatorname{im}h_H=\mathbb R$. The set $\{1\}$ is a basis of $\mathbb R$ over itself: every $r$ equals $r\cdot1$ and $a\cdot1=0$ implies $a=0$. Thus [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity), applied to the real linear map $h_H:E\to\mathbb R$ with kernel $H$, gives $n=\dim E=\dim H+1$. Put $d=\dim L$. The geometric codimension of $F$ in either ambient space is the ambient dimension minus the dimension $d$ of its support $L$. Consequently $\operatorname{codim}_E F=n-d=(\dim H-d)+1=\operatorname{codim}_H F+1$, as required by the recursion. This also covers $L=\{0\}$. Choices of the signs of the $h_H$ merely rename coordinates.

### Source notes

The sign-fiber description and its equivalence with the cited recursive definition are justified locally above; no equivalence theorem is imported.


## Positive gallery category, cancellation and length

[Open item](item-lem-author-d3116e202611-gallery-category) · level 2


### Statement

Let $V$ be a finite-dimensional real vector space and $\mathcal A$ a finite set of linear hyperplanes in $V$ (a finite central arrangement). Chambers are the connected components of $V\setminus\bigcup_{H\in\mathcal A}H$. Assume every chamber is an open simplicial cone in $V$, meaning the set of positive linear combinations of some basis of $V$. A wall face of a chamber $C$ is an intersection $\overline C\cap H$ of dimension $\dim V-1$ with $H\in\mathcal A$; its supporting wall hyperplane is $H$, distinct from that face. Distinct chambers are adjacent when they share a wall face.

A gallery $(C_0,\ldots,C_n)$ has adjacent consecutive chambers and length $n$; a length-zero gallery consists of one chamber. It is minimal if its length is least among galleries with the same endpoints. Form the category $P$ with chambers as objects and galleries as arrows, modulo the path congruence generated by replacing any minimal subgallery by another with the same endpoints. Products follow traversal order, and empty paths give identities.

For every pair $A,B$, a minimal gallery exists and its class $u(A,B)$ is unique. Then $P$ is small, cancellative and atomic, with additive nonnegative integer length, length-zero arrows exactly identities, and atoms exactly one-step gallery classes. Here an atom is a nonidentity arrow admitting no factorization into two nonidentity arrows; atomicity means bounded lengths of factorizations of each arrow into nonidentity arrows. Reversal $(C_0,\ldots,C_n)\mapsto(C_n,\ldots,C_0)$ induces an involutive anti-isomorphism $g\mapsto g^*$. The antipodal map $(C_0,\ldots,C_n)\mapsto(-C_0,\ldots,-C_n)$ induces an involutive automorphism $g\mapsto-g$.

### Statement references

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

### External input

[E1] Deligne (1.3) supplies existence and the separating-hyperplane length formula; (1.10), (1.12)–(1.13) supply the rank-two congruence and minimal class; (1.19)(i),(ii) supply two-sided cancellation. These are imported results under the Statement's hypotheses.

### Facts & Assumptions

[F1] Use the path-category and quotient conventions of [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites).

[F2] Use [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) with $T=V$ for chambers, wall faces, adjacency, galleries and open simplicial cones; retain the Statement's assumption that the chambers themselves are open simplicial cones in $V$.

[F3] Use [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility) for cancellation, atoms and atomicity.

[F4] The results stated in External input apply under the finite central simplicial hypotheses; their substantial proofs are imported, not reconstructed.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The chamber-adjacency quiver has one directed edge $C\to D$ for each ordered pair of adjacent chambers. Choose for each $H\in\mathcal A$ a nonzero linear functional with kernel $H$. Each nonempty region with prescribed strict signs is convex, hence connected, and each connected component of the complement has constant signs. Thus chambers are exactly these regions, so there are finitely many. Finite paths on this finite quiver form a set. The endpoint-preserving quotient construction therefore gives a small category $P$. [F1, F2]

2.1 Two minimal galleries with the same endpoints have the same length by the definition of minimality, so every defining replacement preserves length. Hence gallery length descends to an additive nonnegative integer length on $P$. A zero-length arrow is represented by the empty path and is an identity. A one-step class cannot factor into two nonidentity arrows, since both factors would have positive length; every longer path factors after its first edge into two positive-length paths. These are exactly the atoms. For an arrow of length $n$, every factorization into nonidentity arrows has at most $n$ factors, proving atomicity in the stated sense. [F1, F2, F3, step 1.1]

2.2 Deligne (1.3) gives a minimal gallery between every pair of chambers. His rank-two replacements (1.10) are minimal replacements in our presentation; conversely (1.12) equates every pair of minimal galleries using his replacements. The congruences therefore coincide. In particular $u(A,B)$ is well-defined, and (1.19)(i),(ii) give both cancellations for $P$. [F1, F2, F3, F4, step 1.1]

3.1 Reversal preserves adjacency and path length, and sends a least-length path to a least-length path: a shorter reversed path would reverse to a shorter original path. Since every hyperplane is linear, negation permutes the hyperplanes and chambers, preserves adjacency, and likewise preserves minimality. Both operations therefore preserve the generating relations and descend to the quotient. On paths they square to the identity and satisfy $(gh)^*=h^*g^*$ and $-(gh)=(-g)(-h)$, so they give the required involutive anti-isomorphism and automorphism. [F1, F2, step 1.1] ∎


## Both-sided divisors of the longest positive lift

[Open item](item-lem-author-f758f7dd29a6-longest-lift-divisors) · level 2


### Statement

Let $(W,S)$ be finite, let $M$ be the presented positive Artin monoid, and let $w_0$ be the longest Coxeter element. Put $\Delta=\boldsymbol{w_0}$ using the monoid reduced-word lift. A left divisor of $\Delta$ means $x\in M$ for which $xy=\Delta$ for some $y\in M$; a right divisor means $yx=\Delta$ for some $y$. The left divisors and the right divisors of $\Delta$ coincide, and both sets are exactly $\{\boldsymbol w:w\in W\}$. These elements generate $M$ and form a finite set.

### Statement references

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts)

[math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)

### Facts & Assumptions

[F1] The longest element satisfies $\ell(w_0w)=\ell(ww_0)=\ell(w_0)-\ell(w)$ and $w_0^2=1$. Word reversal gives $\ell(w^-1)=\ell(w)$. ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), part (1))

[F2] Monoid lifts are well defined, have degree equal to Coxeter length and multiply along length-additive products. ([lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts))

[F3] The monoid degree is additive and equals the length of every representing word. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

### Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 For any $w\in W$, [F1] gives $\ell(w^{-1}w_0)=\ell(w_0)-\ell(w)$ and $\ell(w_0w^{-1})=\ell(w_0)-\ell(w)$. Applying [F2] to $w(w^{-1}w_0)=w_0$ and $(w_0w^{-1})w=w_0$ proves that $\boldsymbol w$ is both a left and a right divisor of $\Delta$. [F1, F2]

2.1 Conversely, suppose $xy=\Delta$. Choose words $X,Y$ representing $x,y$. By [F3] their concatenation has length $d(x)+d(y)=d(\Delta)=\ell(w_0)$, and its image in $W$ is $w_0$. Thus it is a reduced word for $w_0$. Each of its initial and final subwords is reduced: a shorter expression for either would shorten the whole word. Consequently $X$ and $Y$ are reduced expressions for their images, and [F2] gives $x=\boldsymbol{q(x)}$ and $y=\boldsymbol{q(y)}$. The same argument applies to $yx=\Delta$. Together with step 1.1 this identifies both divisor sets. They are finite since $W$ is finite, and they contain each generator $a_s=\boldsymbol s$, hence generate $M$. [F2, F3, step 1.1] ∎


## Identifying the presented monoid with its positive image

[Open item](item-lem-author-f758f7dd29a6-positive-image-identification) · level 2


### Statement

For a finite-rank Coxeter system $(W,S)$, let $j:M\to A$ be the canonical homomorphism from the presented positive Artin monoid to its Artin group. Let $A^+$ denote the submonoid of $A$ generated by the positive generators. If $j$ is injective, it is an isomorphism $M\to A^+$. It carries $\boldsymbol w$ to $\sigma_w$ and, in finite type (that is, when $W$ is finite), $\boldsymbol{w_0}$ to $\sigma_{w_0}$, where $w_0$ is the unique element of maximal Coxeter length. A factorization in $A^+$ holds exactly when its unique preimages factor in $M$. In particular both divisibility relations, atoms and the additive degree are transported by this isomorphism.

### Statement references

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts)

[math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)

### Facts & Assumptions

[F1] The map $j$ sends each positive monoid generator to the corresponding Artin group generator and satisfies $j(\boldsymbol w)=\sigma_w$. ([lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts))

[F2] The degree $d$ and the atoms of $M$ are as described in the positive-degree lemma. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

[F3] If $W$ is finite, it has a unique element $w_0$ of maximal Coxeter length. ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), Statement (1)(iii))

### Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 Every element of $j(M)$ is a product of positive generators, and every such product is the image of its word in $M$. Hence $j(M)=A^+$. Under the injectivity hypothesis, $j$ is a bijective homomorphism onto $A^+$; its inverse respects products because the preimage of $j(x)j(y)$ is $xy$. The lift assertion follows from [F1]. In finite type, [F3] supplies $w_0$, so applying [F1] to $w_0$ also proves the longest-lift assertion. [F1, F3, given]

2.1 For $x,y,z\in M$, equality $j(x)j(y)=j(z)$ is equivalent by injectivity to $xy=z$. Left and right divisibility are existence assertions of these equalities, and atoms are nonidentity elements without such a factorization into two nonidentity factors, so all these properties transfer. Finally $d^+(j(x))=d(x)$ is well defined by bijectivity and is additive by [F2]. [F2, step 1.1] ∎


## Pointed classification of connected groupoid coverings

[Open item](item-lem-author-2e40db4c81b4-pointed-classification) · level 3


### Statement

A pointed groupoid $(E,e)$ is a groupoid with a chosen object $e$; a pointed functor sends the chosen object to the chosen object. For coverings $p:E\to G$ and $q:E'\to G$, a functor over $G$ is a functor $F:E\to E'$ satisfying $q\circ F=p$. An isomorphism over $G$ is such a functor with a two-sided inverse functor; it is pointed when it sends $e$ to the chosen object $e'$ of $E'$. A pointed covering $p:(E,e)\to(G,x)$ is a covering with $p(e)=x$. Unpointed isomorphisms over $G$ forget the chosen objects but still commute with the projections to $G$.

Let $p:(E,e)\to(G,x)$ be a connected covering of connected small groupoids and set $H=p(E_e)$. There is a unique pointed isomorphism over $G$ from $(C_H,H)$ to $(E,e)$. Consequently two pointed connected covers of $(G,x)$ are pointedly isomorphic over $G$ exactly when their characteristic subgroups are equal. Without chosen objects, equality is replaced by conjugacy in $G_x$.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

### Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for functors and conjugation, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lifts and their endpoint criterion, and [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for the subgroup cover $C_H$ and its object and arrow formulas.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Send $Ha$ to the endpoint of the lift of $a$ from $e$. The identity lifts to $1_e$, so $H$ is sent to $e$. The endpoint criterion says precisely that this is well defined and injective on the objects over each target; all targets are retained, so it is injective on all objects. Connectedness of $E$ gives an arrow from $e$ to every object, so this map is surjective. Send $(Ha,g)$ to the unique lift of $g$ from the assigned object. Product lifting shows its target is the assigned object of $Hag$, and that this defines a functor over $G$. It is bijective on arrows because it is bijective on objects and on each source star. Its inverse therefore also preserves products and identities, making it an isomorphism. [F1]

2.1 Any pointed functor over $G$ must send every lift of $a$ from $H$ to the lift of $a$ from $e$, so it has the same objects and arrows. This proves uniqueness. An isomorphism preserving basepoints preserves the image of the vertex group, proving necessity and sufficiency of equality. If a basepoint changes along the lift of $a\in G_x$, conjugation gives the new image $a^{-1}Ha$: conjugate loops by the lifted arrow and apply the functor, in both directions. Every point above $x$ is reached by such a lift by connectedness. Hence an unpointed isomorphism gives conjugacy; conversely conjugacy permits choosing a point with the required image subgroup, after which pointed classification supplies the isomorphism. [F1, step 1.1] ∎


## Facet incidence and localized chamber signs

[Open item](item-lem-author-5a1e77100001-facet-incidence) · level 3


### Statement

For the sign facets in *Sign facets of a cone arrangement*, write $F\preceq G$ when $F\subseteq\overline G$. This is a partial order, characterized by: every nonzero sign of $F$ equals the corresponding sign of $G$. Put $\mathcal A_F=\{H:F\subset H\}$. This is finite. If $C$ is a chamber, let $C_F$ be the chamber of $(I,\mathcal A_F)$ with the signs of $C$ on $\mathcal A_F$. For $F\preceq G$, one has $\mathcal A_G\subseteq\mathcal A_F$. If two chambers $C,D$ both satisfy $F\preceq C,D$ and $C_F=D_F$, then $C=D$.

### Statement references

[def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets)

### Facts & Assumptions

[F1] Facets are simultaneous sign fibers, are nonempty and convex, and local finiteness holds, as in [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets).

### Proof
**Given:** the objects and hypotheses of the Statement.


Use the declared inputs [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets) with the conventions in the Statement and Facts below.

**Proof technique:** direct.

**Goal:** prove every assertion in the Statement.

1.1 Choose $x\in F$ and $y\in G$. If $x$ lies in the closure of $G$, continuity forces every nonzero sign at $x$ to equal that on $G$. Conversely, under that sign condition, $(1-t)x+ty$ has precisely the signs of $G$ for every $0<t\leq1$. Convexity places it in $I$, so it belongs to $G$ and tends to $x$. This proves the characterization. [F1]

2.1 The sign criterion gives reflexivity and transitivity. Mutual incidence forces equality of every sign, hence equality of fibers, giving antisymmetry. Choose $x\in F$. All members of $\mathcal A_F$ pass through $x$, so local finiteness makes this set finite. If $F\preceq G$, a zero sign on $G$ cannot be a nonzero sign on $F$, proving the inclusion. [F1, step 1.1]

3.1 The sign fiber of $C$ for the finite arrangement $\mathcal A_F$ is nonempty because it contains $C$. It is a chamber by the chamber argument of [F1], establishing existence and uniqueness of $C_F$. If $F\preceq C,D$, signs of $C,D$ off $\mathcal A_F$ are prescribed by $F$. Equality $C_F=D_F$ prescribes equality also on $\mathcal A_F$. Thus all signs agree and $C=D$. [F1, step 1.1] ∎



## Bounded prefix ideals and rank-two closure

[Open item](item-lem-author-d3116e202611-principal-prefix-ideals) · level 3


### Statement

Let $V$, $\mathcal A$, $P$, and $u$ be as in the positive gallery category: $\mathcal A$ is a finite central arrangement in the finite-dimensional real vector space $V$, and every chamber is an open simplicial cone in $V$. Let $I$ be a set of arrows of $P$ with common source $A$ and bounded length; a prefix of $h$ is an arrow $g$ such that $h=gk$ for some arrow $k$, with products in traversal order.

A supporting wall hyperplane of a chamber $B$ is a hyperplane $H\in\mathcal A$ whose wall face $\overline B\cap H$ has dimension $\dim V-1$. For an intersection $Q$ of supporting wall hyperplanes of $B$ (with empty intersection $V$), let $F_B(Q)$ be the interior in $Q$ of $\overline B\cap Q$, the unique relatively open face of $\overline B$ with linear span $Q$. The residue at this face is the arrangement $\{H/Q:H\in\mathcal A,\ Q\subseteq H\}$ in $V/Q$. Let $B_Q$ be the unique chamber whose closure contains $F_B(Q)$ and whose residue chamber is opposite the residue chamber of $B$, and put $d_B(Q)=u(B,B_Q)$.

Then $I$ is the full prefix set of one unique arrow if and only if it contains $1_A$, is closed under taking prefixes, and whenever $g:A\to B$ and distinct supporting wall hyperplanes $M,N$ of $B$ satisfy $g d_B(M),g d_B(N)\in I$, also $g d_B(M\cap N)\in I$.

### Statement references

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

### Facts & Assumptions

[F99] Import Deligne Proposition 1.14 and Corollary 1.20 for both directions of the bounded-prefix criterion, and (1.5)–(1.6), (1.9.2), (1.13) for its face, residue and $\Delta(Q)$ construction, under hypothesis (1.8). No local proof of the substantial criterion or residue correspondence is claimed.

[F1] The category, minimal class $u$, traversal-order composition and additive length, with length-zero arrows exactly identities, are those of [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category).

[F2] Use [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) with $T=V$ for chambers, wall faces, supporting hyperplanes, their intersections, the quotient vector space and open simplicial cones. The objects intersected to form $Q$, $M\cap N$ and $V/Q$ are linear hyperplanes, not closed wall faces. The imported correspondence in [F99] supplies the unique face and the incident-chamber lift defining $B_Q$.

### External input

[E1] Deligne (1.5)–(1.6) identifies chambers incident to the face supported on $Q$ with chambers of the quotient arrangement; (1.9.2) ensures that this face exists for an intersection of wall hyperplanes of $B$, and (1.13) defines $\Delta(Q)=u(B,B_Q)$. Under the finite central simplicial hypotheses (1.8), Proposition 1.14 says that the three closure conditions in the Statement make a length-bounded fixed-source set a principal prefix set, with a unique generator. Corollary 1.20 supplies the converse. These are imported inputs, not locally reconstructed proofs.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The arrangement hypotheses are exactly Deligne (1.8). By the imported correspondence (1.5)–(1.6), (1.9.2), the residue antipode lifts to the chamber $B_Q$ in the Statement, and $d_B(Q)$ is Deligne's $\Delta(Q)$ in (1.13). The gallery congruence agrees with his by [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category). Thus the three stated conditions are those of (1.14); the case $M=N$, if included, adds only a tautology. [F1, F2, F99, given]

2.1 Proposition 1.14 gives principality from these conditions, and Corollary 1.20 gives their necessity for a principal prefix set. For uniqueness, if $x$ and $y$ have the same prefix set, write $x=ya$ and $y=xb$. Additive length gives $\ell(a)+\ell(b)=0$, so both complements are identities and $x=y$. [F1, F99, step 1.1] ∎


## Gallery fractions, fundamental groupoid and asphericity

[Open item](item-lem-author-d3116e202611-gallery-cover) · level 3


### Statement

Let $Y=V_{\mathbb C}\setminus\bigcup_{H\in\mathcal A}H_{\mathbb C}$ for the finite central simplicial arrangement underlying the positive gallery category $P$. The localisation $G=P[P^{-1}]$ is equivalent to the fundamental groupoid of $Y$; more precisely, choose a real basepoint in each chamber and take the full fundamental subgroupoid on these basepoints. It is isomorphic to $G$ by the positive wall-crossing path convention. The space $Y$ is aspherical.

### Statement references

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories)

### External input

[E1] Import Deligne Proposition 1.27, the groupoid-labelled construction (2.10)–(2.12), and the contractible covering of (3.6)–Theorem 3.7. Its path convention is described immediately after (3.3): at a positive crossing the imaginary component is on the preceding chamber's side of the crossed wall. Fixing a starting chamber $A$, the fibre over a real basepoint in $B$ is labelled by $\operatorname{Hom}_G(A,B)$; lifting a signed crossing updates the label by its gallery arrow or its inverse. The covering theorem and introductory asphericity theorem are imported. The path-class identification is proved locally below.

[E2] Deligne (3.4)(i)–(3.5) supplies an open cover by sets $U_C=Y(C)$ indexed by chambers. In real and imaginary coordinates, $x+iy\in U_C$ means that, for each arrangement hyperplane containing $x$, the vector $y$ is on the same open side as $C$. This is the sign form of the condition that the image of $y$ in the quotient by the face containing $x$ lies in the chamber induced by $C$.

### Facts & Assumptions

[F99] Import Deligne Proposition 1.27, the groupoid-labelled construction (2.10)–(2.12), and the contractible covering of (3.6)–Theorem 3.7. Its path convention is described immediately after (3.3): at a positive crossing the imaginary component is on the preceding chamber's side of the crossed wall. Fixing a starting chamber $A$, the fibre over a real basepoint in $B$ is labelled by $\operatorname{Hom}_G(A,B)$; lifting a signed crossing updates the label by its gallery arrow or its inverse. The covering theorem and introductory asphericity theorem are imported. The path-class identification is proved locally below.

[F98] Deligne (3.4)(i)–(3.5) supplies an open cover by sets $U_C=Y(C)$ indexed by chambers. In real and imaginary coordinates, $x+iy\in U_C$ means that, for each arrangement hyperplane containing $x$, the vector $y$ is on the same open side as $C$. This is the sign form of the condition that the image of $y$ in the quotient by the face containing $x$ lies in the chamber induced by $C$.

[F1] Use [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category), [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites), [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) and [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space) for the gallery quotient, localisation, complexified complement and asphericity conventions. The gallery congruence agrees with Deligne's presentation, and products are in traversal order.

[F2] Use [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) for endpoint-fixed path classes and their composition. Coverings and lifts have the meanings in [math:def-covering-map-and-evenly-covered-neighbourhoods](https://alphabetamath.cc/item/def-covering-map-and-evenly-covered-neighbourhoods) and [math:def-lift-of-a-map-path-and-homotopy](https://alphabetamath.cc/item/def-lift-of-a-map-path-and-homotopy). The existence and uniqueness of path and homotopy lifts are supplied by [math:thm-path-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-path-lifting-for-covering-maps) and [math:thm-homotopy-lifting-for-covering-maps](https://alphabetamath.cc/item/thm-homotopy-lifting-for-covering-maps); [math:cor-lifted-path-endpoints-depend-only-on-path-homotopy](https://alphabetamath.cc/item/cor-lifted-path-endpoints-depend-only-on-path-homotopy) gives the endpoint invariance used below.

[F3] Contractibility means [math:def-nullhomotopic-map-and-contractible-space](https://alphabetamath.cc/item/def-nullhomotopic-map-and-contractible-space). A contractible space is nonempty and path connected by [math:cor-contractible-spaces-are-path-connected](https://alphabetamath.cc/item/cor-contractible-spaces-are-path-connected), and its fundamental group at every chosen point is trivial by [math:lem-contractibility-implies-trivial-fundamental-group](https://alphabetamath.cc/item/lem-contractibility-implies-trivial-fundamental-group). Thus any loop upstairs is endpoint-fixed nullhomotopic.

[F4] An equivalence consists of functors with quasi-inverse and natural-isomorphism data as in [math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories). The explicit paths in step 5.1 provide those data without an indexed choice of arbitrary paths.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated isomorphism, equivalence and asphericity.

1.1 The gallery congruence agrees with Deligne's by F1. Their formal groupoid completions therefore agree by the localisation universal property, so Proposition 1.27 and the imported labelled-cover construction apply to this $P$ and $G$. [F1, F99, given]

2.1 Fix a starting chamber $A$ and its basepoint $a_A$. In the imported cover $p_A:\widetilde Y_A\to Y$, choose the lift of $a_A$ labelled by $1_A$. For a chamber $B$ the fibre over $a_B$ has labels $\operatorname{Hom}_G(A,B)$, with the signed crossing rule of F99. The covering space is contractible, hence path connected and has trivial fundamental groups by F3. [F2, F3, F99, step 1.1]

3.1 Assign to a path from $a_A$ to $a_B$ the endpoint of its unique lift starting at the chosen lift of $a_A$. Path lifting and endpoint invariance in F2 make this a function on path classes. If two lifts have the same endpoint, concatenate the first with the reverse of the second. This is a loop upstairs and is endpoint-fixed nullhomotopic by F3. Projecting that homotopy makes the projected loop trivial; cancellation in the fundamental groupoid gives equality of the original path classes. Conversely, any point of the fibre is reached by a path upstairs because the cover is path connected. Its projection lifts to that path by uniqueness. The endpoint function is therefore a bijection. [F2, F3, step 2.1]

3.2 The cover is path connected and surjective, so $Y$ is path connected. Deligne's introductory theorem applies under precisely the same finite central simplicial hypotheses and gives asphericity. This last assertion is imported directly, without an additional local inference about higher homotopy lifting. [F1, F2, F3, F99, step 2.1]

4.1 Represent an arrow of $G$ by a signed gallery word and concatenate its wall-crossing paths. Its lift ends at its gallery label by F99. Equal words in $G$ have equal labels and hence equal path classes by step 3.1, so the assignment is well-defined. Different labels give different classes, and every class occurs by the same endpoint bijection. Concatenation of gallery words concatenates paths; explicitly, for traversal products, $\Phi(gh)=\Phi(h)\circ\Phi(g)$. Identities and inverses are respected. Thus $\Phi$ is an isomorphism from $G$ to the full fundamental subgroupoid on the $a_C$. [F1, F2, F99, step 3.1]

5.1 To exhibit the groupoid equivalence, order the finitely many chambers and retain the chosen real points $a_C$. For $z=x+iy\in Y$, take the first $C$ with $z\in U_C$. A path $\lambda_z:z\to a_C$ is obtained by three successive linear interpolations: change the imaginary coordinate from $y$ to $a_C$ at fixed real coordinate $x$, then change the real coordinate from $x$ to $a_C$ at fixed imaginary coordinate $a_C$, then change the imaginary coordinate from $a_C$ to $0$ at fixed real coordinate $a_C$. The first part avoids every $H_{\mathbb C}$ because whenever $x\in H$, both $y$ and $a_C$ are on the same open side of $H$ by F98. The second part has imaginary coordinate on no hyperplane, and the third has real coordinate on no hyperplane. At a selected point $z=a_D$ instead set $C=D$ and take the constant path. Define a functor $R$ to the chosen full subgroupoid by $R(z)=a_C$ and $R([\alpha]:z\to w)=[\overline{\lambda_z}*\alpha*\lambda_w]$. The fundamental groupoid laws show that it preserves classes, identities and composition. If $I$ is inclusion, then $RI$ is the identity, and the arrows $[\overline{\lambda_z}]:IR(z)\to z$ give a natural isomorphism $IR\Rightarrow1$. These are equivalence data; composed with step 4.1 they prove the asserted equivalence for $G$. The finite ordering and explicit interpolations require no arbitrary indexed selection of paths. [F1, F2, F4, F98, step 4.1] ∎


## Transport of a Garside structure to the presented monoid

[Open item](item-lem-author-f758f7dd29a6-garside-transport) · level 3


### Statement

Let $j:M\to A^+$ be the positive-image isomorphism associated with an injective canonical map of an Artin monoid. Suppose $(A^+,\phi^+,\Delta^+)$ is a one-object categorical Garside structure and $j(\Delta)=\Delta^+$. Put $\phi=j^{-1}\phi^+j$. Then $(M,\phi,\Delta)$ is an atomic categorical Garside structure. Left and right gcds and lcms transfer through $j$, and $x$ is simple in $M$ exactly when $j(x)$ is simple in $A^+$. Here left and right gcds and lcms mean meets and joins in the respective divisibility orders.

### Statement references

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification)

### Facts & Assumptions

[F1] A one-object atomic categorical Garside structure consists of an atomic cancellative monoid, an automorphism $\phi$ with $x\Delta=\Delta\phi(x)$, simple atoms, and lattice orders for left and right divisibility; simple means $xy=\Delta$ for some $y$. ([def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites), [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility))

[F2] The isomorphism $j$ and its inverse preserve products, both divisibility relations and atoms. ([lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification))

[F3] The presented Artin monoid has factorizations into atoms and a degree bounding all nonidentity factorizations. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

### Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 Conjugating $\phi^+$ by the isomorphism yields a monoid automorphism $\phi$. Applying the injective $j$ to the desired naturality equation gives $j(x)\Delta^+=\Delta^+\phi^+(j(x))$, which holds by the assumed structure. Cancellation in $M$ follows by applying $j$ and using cancellation in $A^+$. Atomicity holds by [F3], including bounded lengths of all nonidentity factorizations. [F1, F2, F3, given]

2.1 By [F2] each divisibility order is order-isomorphic to its counterpart in $A^+$. The inverse image of the meet or join satisfies exactly its defining universal property, giving both gcds and lcms. An equality $j(x)y^+=\Delta^+$ pulls back uniquely to $xy=\Delta$; therefore simplicity transfers. Atoms transfer by [F2], so each is simple since atoms in $A^+$ are simple. Together these verify every condition in [F1]. [F1, F2, step 1.1] ∎


## Independent spherical Artin Garside input

[Open item](item-thm-spherical-artin-garside-input-artin-tits-prerequisites) · level 4


### Statement

For a spherical Artin system, its positive Artin monoid embeds in its Artin group as a Garside monoid. Its simples are the positive lifts of elements of the Coxeter group. Gcds and lcms exist on both sides.

More explicitly, spherical means that the Coxeter group $W$ is finite. The positive monoid $M$ and the Artin group $A$ are given by the same standard braid presentation in the monoid and group categories. Let $w_0$ be the longest element of $W$ and $\Delta=\boldsymbol{w_0}$ its reduced-word lift in $M$. The canonical map identifies $M$ with the positive submonoid $A^+\subseteq A$ and transports the Garside structure with Garside element $\sigma_{w_0}$. In the categorical convention $x\Delta=\Delta\phi(x)$, simples are the left divisors of $\Delta$; they are also precisely its right divisors, and are exactly $\{\boldsymbol w:w\in W\}$. In $A^+$ these are $\{\sigma_w:w\in W\}$.

### Statement references

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites)

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts)

[lem-author-f758f7dd29a6-longest-lift-divisors](item-lem-author-f758f7dd29a6-longest-lift-divisors)

[lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification)

[lem-author-f758f7dd29a6-garside-transport](item-lem-author-f758f7dd29a6-garside-transport)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)

### External input

For a spherical Artin system, Godelle's Example 2.3 supplies the monoidal Garside structure on the positive submonoid $A^+\subseteq A$, with $\Delta^+=\sigma_{w_0}$; Definition 2.1 specifies cancellation, both divisibility lattices, noetherianity and simple atoms. The automorphism is taken in the convention $x\Delta^+=\Delta^+\phi^+(x)$. This is an imported structure on the positive image, not a claim that its identification with a presentation was proved there.

Paris's Theorem 1.1 supplies injectivity of the canonical map $j:M\to A$ for the monoid and group defined by the same braid presentation. We use only its finite-rank spherical specialization. These two results are imported established inputs; their proofs have not been reconstructed here.

### Facts & Assumptions

[F1] The categorical Garside convention, simplicity and both divisibility lattices are specified in [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites). Reduced group lifts $\sigma_w$ are specified in [prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites).

[F2] The presented monoid has additive degree, atomicity and bounded nonidentity factorizations. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

[F3] Reduced monoid lifts are well defined and map under $j$ to the reduced group lifts. ([lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts))

[F4] The left and right divisors of $\Delta=\boldsymbol{w_0}$ are exactly the reduced monoid lifts. ([lem-author-f758f7dd29a6-longest-lift-divisors](item-lem-author-f758f7dd29a6-longest-lift-divisors))

[F5] An injective canonical map identifies the presented monoid with its positive image. ([lem-author-f758f7dd29a6-positive-image-identification](item-lem-author-f758f7dd29a6-positive-image-identification))

[F6] A Garside structure, simples and both divisibility lattices transport through that isomorphism. ([lem-author-f758f7dd29a6-garside-transport](item-lem-author-f758f7dd29a6-garside-transport))

[F7] The positive-image Garside structure is the Godelle input recorded below.

[F8] The injectivity of the canonical presented-monoid map is the Paris input recorded below.



For a spherical Artin system, Godelle's Example 2.3 supplies the monoidal Garside structure on the positive submonoid $A^+\subseteq A$, with $\Delta^+=\sigma_{w_0}$; Definition 2.1 specifies cancellation, both divisibility lattices, noetherianity and simple atoms. The automorphism is taken in the convention $x\Delta^+=\Delta^+\phi^+(x)$. This is an imported structure on the positive image, not a claim that its identification with a presentation was proved there.

Paris's Theorem 1.1 supplies injectivity of the canonical map $j:M\to A$ for the monoid and group defined by the same braid presentation. We use only its finite-rank spherical specialization. These two results are imported established inputs; their proofs have not been reconstructed here.

[F9] The standard braid presentations of $M$ and $A$ and the canonical map $j:M\to A$ are supplied by [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations). Since $W$ is finite, its unique longest element $w_0$ is supplied by [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), Statement (1)(iii).

### Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 By the Paris input, $j$ is injective. Applying [F5] identifies $M$ with exactly $A^+$, with $j(\boldsymbol w)=\sigma_w$ by [F3]. In particular $j(\Delta)=\sigma_{w_0}$. Thus the monoid to which Godelle's positive-submonoid assertion applies is the image of the presented monoid, with the same longest-lift element. [F3, F5, F8, F9]

2.1 Apply the Godelle input to the spherical system. It supplies a cancellative one-object Garside structure on $A^+$ with the stated Garside element and automorphism convention. Pull it back by step 1.1 using [F6]. The atomic condition needed by [F1] also follows directly from [F2]. Therefore $M$ is a Garside monoid in the adopted categorical convention, and both divisibility orders are lattices, yielding gcds and lcms on both sides. [F1, F2, F6, F7, step 1.1]

3.1 By [F1] the simples of this structure are precisely the left divisors of $\Delta$. By [F4] these coincide with its right divisors and with all reduced monoid lifts $\boldsymbol w$. Their images are exactly the lifts $\sigma_w$ in [F1] by step 1.1. This proves the simple-element identification and all claims in the statement. [F1, F4, step 1.1, step 2.1] ∎


## Normal coverings and the convention-correct deck quotient

[Open item](item-lem-author-2e40db4c81b4-normal-deck-quotient) · level 4


### Statement

Let $p:(E,e)\to(G,x)$ be a connected covering and $H=p(E_e)$. A deck transformation is an invertible functor $T:E\to E$ with $pT=p$; deck transformations are multiplied by ordinary function composition, $ST=S\circ T$. They act freely on objects. Their action is transitive on a fibre (equivalently every fibre) exactly when $H$ is normal in $G_x$; such a covering is called normal. In this case $G_x/H\cong\mathrm{Deck}(p)$, with $aH$ sent to the unique deck transformation taking $e$ to the endpoint of the lift of $a$.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for groupoids and functors, [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) for normal subgroups and quotient groups, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lift uniqueness, [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for $C_H$, and [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) for pointed classification. Deck multiplication here is ordinary function composition, not left-to-right composition.

[F2] Use [math:def-group-action](https://alphabetamath.cc/item/def-group-action) for left actions and transitivity, [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action) for freeness, [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) for product preservation, and [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism) for bijective group homomorphisms.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Deck transformations form a group under ordinary composition: associativity is inherited from functions, the identity is over $G$, composites remain over $G$, and $pT=p$ implies $pT^{-1}=p$. Evaluation $T\cdot u=T(u)$ is a left action because $1\cdot u=u$ and $(ST)\cdot u=S(T(u))$; it restricts to every fibre since $pT=p$. By pointed classification work in $C_H$. A deck transformation fixing one object fixes every object and arrow: every object is reached by lifting a label from that object, and every arrow is fixed by its source and label. This proves freeness. If it sends $H$ to $Ha$ over $x$, the image of the vertex group there is $a^{-1}Ha$, since $Hag=Ha$ is equivalent to $aga^{-1}\in H$. An invertible functor over $G$ identifies the two vertex groups and their images, so $a^{-1}Ha=H$. Conversely this equality makes $T_a(Hb)=Hab$ and $T_a(Hb,g)=(Hab,g)$ well defined: replacing $b$ by $hb$ replaces $ab$ by $(aha^{-1})ab$. Its inverse is $T_{a^{-1}}$, and the displayed arrow formula verifies it is over $G$. [F1, F2]

2.1 Transitivity on the fibre over $x$ therefore holds precisely when every $a\in G_x$ normalizes $H$, precisely normality of $H$. Lifting an arrow $g:x\to y$ gives a bijection between the two fibres with inverse the lift of $g^{-1}$; deck transformations commute with these bijections by uniqueness. Thus transitivity on one fibre is equivalent to transitivity on every fibre. When $H$ is normal, every deck transformation is the unique $T_a$ with the specified image of $H$, and $T_a=T_b$ exactly when $Ha=Hb$. Finally $T_a\circ T_b(Hc)=Habc$, also on arrows, so $a\mapsto T_a$ is a surjective homomorphism whose elements sent to the identity are exactly $H$. Since $H$ is normal, $aH=Ha$, and the equality criterion $T_a=T_b$ exactly when $Ha=Hb$ makes $aH\mapsto T_a$ a well-defined bijection. The quotient product $(aH)(bH)=abH$ and the composition calculation show that this bijection preserves products, hence is the claimed group isomorphism. The endpoint prescription is part of this calculation, and would be an antihomomorphism if deck multiplication were instead read left to right. [F1, F2, step 1.1] ∎

### Source notes

Brown 10.6.3 uses an anti-isomorphism. The last calculation states the conversion explicitly: arrow products here are left to right, whereas products of deck functors are ordinary function composition. No disagreement with Brown is asserted.


## The incident facet and chamber poset

[Open item](item-def-author-5a1e77100001-salvetti-poset) · level 4


### Definition

For the facets, incidence and localized chambers of *Facet incidence and localized chamber signs*, define $P(\mathcal A)=\{(F,C):F\in\mathcal F,\ C\in\mathcal C,\ F\preceq C\}$. Give it the relation $(F,C)\leq(G,D)$ if $F\preceq G$ and $C_F\subseteq D_G$. A partial order has the reflexivity, antisymmetry and transitivity axioms of *Partial order and partially ordered set*. This is Paris's $\operatorname{Sal}_0(\mathcal A)$, with the same direction of ordering.

### Definition references

[def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets)

[lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence)

[math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)

### Justification

**Given:** the incident pairs and relation in the Definition; the facets, chambers and signs of [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets); the incidence and localized chamber signs of [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence); and the order axioms of [math:def-partial-order](https://alphabetamath.cc/item/def-partial-order).

1.1 For $F\preceq G$, the containment $C_F\subseteq D_G$ holds exactly when the signs of $C,D$ agree on $\mathcal A_G$: necessity follows by evaluating any point of the nonempty $C_F$, and sufficiency follows because $\mathcal A_G\subseteq\mathcal A_F$. [given]

1.2 Reflexivity follows from reflexivity of incidence and containment. For transitivity, if $(F,C)\leq(G,D)\leq(K,L)$, then the signs of $C,D$ agree on $\mathcal A_G$, hence on $\mathcal A_K$, and those of $D,L$ agree on $\mathcal A_K$. Incidence is transitive, so $(F,C)\leq(K,L)$. [given, step 1.1]

1.3 For antisymmetry, opposite inequalities force $F=G$ and $C_F=D_F$; the last assertion of the incidence lemma gives $C=D$. Thus the displayed relation satisfies all three partial-order axioms. [given, step 1.2] ∎

### Source notes

Construction compared with Paris §3.1, printed pp.385–386, including the displayed order on $\operatorname{Sal}_0(\mathcal A)$. Its elementary order verification is supplied here.


## Both gallery divisibility orders are lattices

[Open item](item-lem-author-d3116e202611-gallery-lattices) · level 4


### Statement

Let $P$ be the gallery category of a finite central simplicial arrangement. Suppose any two arrows with the same source have a common right multiple. Then outgoing arrows under left divisibility form a lattice at every object, and incoming arrows under right divisibility form a lattice at every object.

### Statement references

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[lem-author-d3116e202611-principal-prefix-ideals](item-lem-author-d3116e202611-principal-prefix-ideals)

### Facts & Assumptions

[F1] Use cancellation, length and reversal from [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category) and the criterion of [lem-author-d3116e202611-principal-prefix-ideals](item-lem-author-d3116e202611-principal-prefix-ideals). A prefix of $v$ means $a$ with $v=ab$; write $D(v)$ for all such prefixes. A common right multiple of $a,b$ is an arrow divisible on the left by both.

[F2] Use [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility) for the outgoing and incoming divisibility relations and the partial-order, meet, join and lattice terminology. Products follow traversal order. In particular, for arrows $a,b$ ending at $A$, $a$ right-divides $b$ exactly when $b=ca$ for a composable arrow $c$.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The intersection $D(a)\cap D(b)$ contains the identity, is prefix closed and satisfies rank-two closure, since both principal ideals do. Length is bounded by $\min(\ell(a),\ell(b))$. The criterion gives a unique generator $d$, which is precisely the greatest common left divisor. Left divisibility is a partial order because additive length excludes nonidentity invertibles. [F1, F2]

1.2 Choose one common right multiple $z$ of $a,b$, and let $U$ be the nonempty set of all common right multiples. The intersection $J=\bigcap_{v\in U}D(v)$ is length bounded by $\ell(z)$, contains the identity and satisfies prefix and rank-two closure. The criterion gives $J=D(m)$. Both $a,b$ belong to every $D(v)$, hence to $D(m)$, so $m\in U$. By definition $m$ divides every element of $U$, proving that $m$ is the least common right multiple. This argument does not assume that $U$ is finite. [F1, F2, given]

2.1 Reversal sends incoming arrows ending at $A$ bijectively to outgoing arrows starting at $A$. If $b=ca$, then $b^*=a^*c^*$, and the converse follows by reversing again. Thus reversal preserves and reflects the specified divisibility relations. It is an order isomorphism, so it transports the meet and join just constructed to the incoming right-divisibility order. Thus both required orders are lattices. [F1, F2, step 1.1, step 1.2] ∎


## Universal groupoid covering from the trivial subgroup

[Open item](item-lem-author-2e40db4c81b4-universal-cover) · level 5


### Statement

Every nonempty connected small groupoid $G$, with a chosen object $x$, has a connected cover $U=C_{\{1_x\}}\to G$ with trivial vertex groups. Equivalently each morphism set between two objects upstairs is a singleton. Choose $1_x$ as the object of $U$ over $x$. A pointed connected cover of $(G,x)$ is called universal if it admits a unique pointed functor over $G$ to every pointed connected cover of $(G,x)$. The cover $U$ is universal, and each of these unique pointed functors from $U$ is itself a covering. A universal cover is unique up to unique pointed isomorphism, is normal, and has deck group isomorphic to $G_x$. Arrow products are read left to right, and deck transformations are multiplied by ordinary function composition.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)

[math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

### Facts & Assumptions

[F1] Use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) for groupoids, [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) for lift uniqueness, [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) for subgroup covers, [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) for pointed covers, functors and isomorphisms over $G$, and [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient) for normal coverings, deck transformations and normal deck quotients.

[F2] Use [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup) for invariance under conjugation, [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) for the quotient and its coset product, [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) for product-preserving maps, and [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism) for bijective group homomorphisms.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 Apply the subgroup construction to $H=\{1_x\}$. Its objects are individual arrows $a$ from $x$, and an arrow from $a$ to $b$ has the unique possible label $a^{-1}b$. Thus each morphism set is a singleton, in particular every vertex group is trivial. Conversely in any connected groupoid with trivial vertex groups, two arrows $u,v$ with the same endpoints satisfy $uv^{-1}=1$, hence $u=v$, and connectedness guarantees existence. [F1]

2.1 Given a pointed connected cover $(E,e)\to(G,x)$, send object $a$ to the endpoint of its lift from $e$ and arrow $(a,g)$ to the lift of $g$ there. Product lifting makes this a functor over $G$. On each source star both projections are bijections to the same base star, so this functor is a covering; uniqueness follows by lifting from the chosen point. [F1, step 1.1]

3.1 If $(V,v)\to(G,x)$ is another universal cover in the stated sense, its universal property and that of $U$ give unique pointed functors $F:U\to V$ and $K:V\to U$ over $G$. Both $K\circ F$ and the identity of $U$ are pointed endofunctors over $G$, so uniqueness for $U$ gives $K\circ F=\mathrm{id}_U$. Similarly uniqueness for $V$ gives $F\circ K=\mathrm{id}_V$. Thus $F$ is the unique pointed isomorphism over $G$ from $U$ to $V$; no assertion about the characteristic subgroup of $V$ was assumed. [F1, step 2.1]

4.1 Put $N=\{1_x\}$. For each $a\in G_x$, $aNa^{-1}=\{a1_xa^{-1}\}=N$, so $N$ is normal. Its characteristic-subgroup realization in $U$ and the normal-deck-quotient lemma therefore make $U$ normal with $G_x/N\cong\mathrm{Deck}(U\to G)$. Each coset $aN=\{a\}$ is a singleton, so $\phi:G_x/N\to G_x$, $\phi(aN)=a$, is well defined and bijective. The quotient product gives $\phi((aN)(bN))=ab=\phi(aN)\phi(bN)$, so $\phi$ is a group isomorphism. Combining these isomorphisms proves $\mathrm{Deck}(U\to G)\cong G_x$ with the stated deck convention. For the isomorphism $F$ in step 3.1, $T\mapsto F\circ T\circ K$ identifies the deck groups, preserves ordinary composition and intertwines their actions on the corresponding fibres; hence $V$ is also normal with the same deck-group conclusion. [F1, F2, step 1.1, step 3.1] ∎


## The Salvetti order complex and its finite CW case

[Open item](item-lem-author-5a1e77100001-order-complex-model) · level 5


### Statement

For the poset $P(\mathcal A)$ in *The incident facet and chamber poset*, take as simplices the empty set and the nonempty finite chains. They form an abstract simplicial complex in the sense of *An abstract simplicial complex*. Define $\operatorname{Sal}(I,\mathcal A)$ to be its geometric realization with the weak topology of *The geometric realization of an abstract simplicial complex*. Its open simplices give a CW complex in the sense of *CW complex with closure finiteness and weak topology*. If $\mathcal A$ is finite, this complex is finite.

### Statement references

[def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset)

[math:def-abstract-simplicial-complex](https://alphabetamath.cc/item/def-abstract-simplicial-complex)

[math:def-geometric-realization-of-an-abstract-simplicial-complex](https://alphabetamath.cc/item/def-geometric-realization-of-an-abstract-simplicial-complex)

[math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)

### Facts & Assumptions

[F1] The incident pairs and their order are defined in [def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset).

[F2] Abstract simplicial complexes include the empty simplex and are closed under subsets: [math:def-abstract-simplicial-complex](https://alphabetamath.cc/item/def-abstract-simplicial-complex). Their realization uses finite-support barycentric functions and the weak topology on Euclidean simplices: [math:def-geometric-realization-of-an-abstract-simplicial-complex](https://alphabetamath.cc/item/def-geometric-realization-of-an-abstract-simplicial-complex).

[F3] A CW complex is Hausdorff, has a discrete zero-skeleton and is built by disk attachments to successive skeleta, with closure finiteness and the weak topology: [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology).

[F4] Facets are nonempty fibers of the simultaneous sign map, and chambers are the fibers with no zero signs: [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets).

[F5] Attaching disks along their boundaries means taking the quotient of the disjoint union of the preceding skeleton and the disks by the boundary identifications, as in [math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map).

### Proof

**Given:** the poset and arrangement in the Statement, with the conventions of [F1] and [F4].

**Proof technique:** direct.

**Goal:** establish the chain complex, all the CW conditions and finiteness for a finite arrangement.

1.1 Put $V=P(\mathcal A)$ and let $K$ consist of the empty set and its nonempty finite chains. Every subset of a finite chain is a finite chain or empty, and every vertex is a singleton chain. Thus $(V,K)$ meets the abstract simplicial complex definition. Write $X=|K|$ for its weak realization. [F1, F2]

2.1 For each vertex $v$, the coordinate function $a_v:X\to[0,1]$, $a_v(\alpha)=\alpha(v)$, is continuous: its restriction to every Euclidean simplex is continuous, so inverse images of open sets are open by the weak topology. Distinct points differ at some coordinate; inverse images of disjoint open intervals about those coordinate values are disjoint open neighbourhoods. Thus $X$ is Hausdorff. Simplex inclusions are continuous by the same weak-topology definition, and their inverse barycentric coordinate maps are continuous by the coordinate functions. Hence every simplex has its Euclidean topology as a subspace of $X$. [F2, step 1.1]

3.1 For a nonempty chain $\sigma$ of size $p+1$, the points of support exactly $\sigma$ form its open simplex $e_\sigma$. These sets partition $X$. The set $|\sigma|$ is closed in $X$: it is the intersection of the coordinate zero sets for vertices outside $\sigma$. Since $e_\sigma$ is dense in its Euclidean simplex, its closure in $X$ is exactly $|\sigma|$. The standard $p$-simplex is a closed $p$-disk with boundary the union of its proper faces, giving the required disk characteristic map and an interior homeomorphism onto $e_\sigma$. [F2, step 2.1]

4.1 Define $X^{-1}=\varnothing$ and let $X^p$ be the union of the simplices of dimension at most $p$. These form an increasing filtration with union $X$, since every point has finite support. The subspace topology on $X^p$ is the weak topology on those simplices. Indeed, if $B\subseteq X^p$ has closed intersection with each of them, then for any simplex $\tau$ of $K$, $B\cap|\tau|$ is the finite union of the closed sets $B\cap|\sigma|$ over the faces $\sigma\subseteq\tau$ of dimension at most $p$. Each such face is closed in $|\tau|$, so the weak topology makes $B$ closed in $X$, hence in $X^p$. Conversely, a set closed in $X^p$ has closed intersection with each of its simplices by continuity of inclusion. For $p=0$, every subset meets each vertex simplex in a closed set, so every subset of $X^0$ is closed and $X^0$ is discrete. [F2, step 2.1, step 3.1]

5.1 For $p\geq1$, take the disjoint union of $X^{p-1}$ and a closed $p$-simplex for each $p$-dimensional simplex of $K$, and identify every boundary point with the same barycentric point in $X^{p-1}$. Face inclusions give continuous attaching maps. The resulting map onto $X^p$ identifies exactly these points, since distinct $p$-simplex interiors have distinct supports. A subset of $X^p$ has closed preimage in this disjoint union exactly when its intersection with $X^{p-1}$ and with each $p$-simplex is closed. By the preceding skeleton criterion, this is exactly closedness in $X^p$. The map therefore has the quotient topology, proving that each skeleton is obtained by the disk attachments required in [F5]. [F5, step 3.1, step 4.1]

6.1 The closure $|\sigma|$ of each cell meets precisely its finitely many nonempty face cells. This proves closure finiteness. Closedness in $X$ is tested on all the Euclidean simplices by [F2]; these are exactly the closed cells with their subspace topology. This proves the CW weak-topology condition. Together with Hausdorffness, the discrete zero-skeleton and the disk attachments, all conditions in [F3] hold. [F2, F3, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 If $|\mathcal A|=n$, distinct facets have distinct sign vectors in $\{-,0,+\}^{\mathcal A}$, and distinct chambers have distinct sign vectors in $\{-,+\}^{\mathcal A}$, by their fiber definitions. Thus there are at most $3^n$ facets and $2^n$ chambers, and at most $6^n$ incident pairs. A finite vertex set has finitely many subsets, hence finitely many chains and cells. This also includes $n=0$, since the sign map then has the single nonempty fiber $I$, which is also its single chamber. [F1, F4, step 1.1, step 6.1] ∎

### Source notes

This is the simplicial convention of Paris §3.1, printed p.386, rather than the unsubdivided regular CW convention. No homotopy equivalence to the complement is proved by the elementary construction here.


## Antipodal transformation and finite-type Garside structure

[Open item](item-lem-author-d3116e202611-antipodal-garside) · level 5


### Statement

The gallery category $P$ of a finite central simplicial arrangement has a finite-type atomic categorical Garside structure with $\phi(A)=-A$, $\phi(g)=-g$ and $\Delta_A=u(A,-A)$. Its simple arrows are exactly the minimal gallery classes.

### Statement references

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[lem-author-d3116e202611-gallery-lattices](item-lem-author-d3116e202611-gallery-lattices)

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

### External input

[E1] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

### Facts & Assumptions

[F99] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

[F1] Use [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category) for length and symmetries, [lem-author-d3116e202611-gallery-lattices](item-lem-author-d3116e202611-gallery-lattices) for the lattice implication, and [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites) for the categorical definition. The independent metric and antipodal identities in the External input below are used only under the finite simplicial hypotheses.



[E1] Import the distance/minimality description of Deligne (1.3), uniqueness (1.12), the notation (1.13), and the two identities of Lemma 1.26. Their source hypotheses are finite central simplicial arrangements. Only the listed facts are imported; the Garside assembly is the local argument below.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The antipodal map is an involutive category automorphism by F1. Deligne (1.26)(i) is precisely the naturality identity $g\Delta_B=\Delta_A\phi(g)$ for $g:A\to B$. Given $a,b$ starting at $A$, (1.26)(ii) applied with $g=1_A$ makes each divide a power of $\Delta$ starting at $A$; a sufficiently large power is a common right multiple. Here powers mean successive components, whose sources alternate under $\phi$. Thus [lem-author-d3116e202611-gallery-lattices](item-lem-author-d3116e202611-gallery-lattices) applies and supplies both lattices. [F1, given, F99]

1.2 Every minimal class $u(A,B)$ divides $\Delta_A$: the hyperplanes separating $A$ from $B$ and those separating $B$ from $-A$ partition all hyperplanes, so concatenating corresponding minimal paths is minimal from $A$ to $-A$. Conversely any prefix of $\Delta_A$ crosses no hyperplane twice, since the complete gallery crosses each once and the congruence preserves length. It is therefore minimal. In particular each atom is simple. [F1, given, F99]

2.1 Smallness, cancellation and atomicity were proved in F1. Combined with naturality, the atom condition and both lattices, these are all conditions of the categorical Garside definition. There is at most one simple per ordered pair of chambers, and there are finitely many chambers; the structure is finite type. [F1, step 1.1, step 1.2] ∎


## Braid congruence preserves word length and support

[Open item](item-lem-author-c73ab6d940e2-braid-congruence) · level 5


### Statement

Let $S$ be any set and let $(m_{st})_{s,t\in S}$ be a symmetric matrix with $m_{ss}=1$ and $m_{st}\in\{2,3,\ldots\}\cup\{\infty\}$ for $s\ne t$. Let $S^*$ consist of finite words using only letters of $S$, with concatenation and empty word $\varepsilon$. For distinct $s,t$ with $m_{st}<\infty$, the braid pair consists of the two alternating words of length $m_{st}$ starting with $s$ and $t$; an infinite parameter contributes no pair. A congruence is an equivalence relation on $S^*$ stable under adding arbitrary left and right word contexts. Let $\equiv$ be the intersection of all congruences containing the braid pairs. Put $M=S^*/{\equiv}$, write $[w]$ for the class of $w$, and use multiplication $[x][y]=[xy]$ and identity $[\varepsilon]$. These operations are well defined and make $M$ a monoid, the presented positive Artin monoid. The length $|w|$ is the number of letters of $w$, and its support is the set of letters occurring in it.

Two words represent the same element of $M$ if and only if one is obtained from the other by a finite sequence of braid substitutions in word contexts. Every substitution preserves length and support. For finite $S$, this construction is the standard presented Artin monoid. For a spherical Artin system it therefore also gives the original conclusion for the positive submonoid of its Artin group, under the canonical identification with $M$.

### Statement references

[math:def-alphabet-words-and-reduction](https://alphabetamath.cc/item/def-alphabet-words-and-reduction)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

[thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites)

### Facts & Assumptions

[F1] Finite words on an arbitrary set are defined in [math:def-alphabet-words-and-reduction](https://alphabetamath.cc/item/def-alphabet-words-and-reduction); here only letters of $S$, with no formal inverses, are used. Equivalence relations, classes and quotient sets are defined in [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation), and monoids in [math:def-semigroup-and-monoid](https://alphabetamath.cc/item/def-semigroup-and-monoid). The congruence and quotient operations for the present arbitrary $S$ are constructed explicitly in the Statement and checked below.

[F2] When $S$ is finite, [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations), Definition (1)–(3), defines the standard positive Artin monoid by precisely these finite words, braid pairs and least congruence. This finite-set definition is used only in that specialization.

[F3] For a spherical Artin system, [thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites) identifies the standard presented monoid with the positive submonoid of its Artin group. This identification is used only for the final spherical specialization.

### Proof

**Given:** The data and constructions in the Statement.

**Goal:** Establish the quotient monoid, the equality criterion, the invariants and the stated specializations.

1.1 The total relation on $S^*$ is a congruence containing every braid pair, so the family defining $\equiv$ is nonempty. Its intersection is reflexive, symmetric, transitive and stable under contexts because each member has those properties. It is contained in every congruence containing the braid pairs and contains each pair, so it is the least such congruence. [F1, given]

2.1 If $x\equiv x'$ and $y\equiv y'$, stability under contexts gives $xy\equiv x'y\equiv x'y'$. Thus $[x][y]=[xy]$ is independent of representatives. Concatenation of finite strings is associative and has identity $\varepsilon$, so these laws descend to the quotient and make $M$ a monoid. [F1, step 1.1]

3.1 Let $R$ relate two words precisely when a finite sequence of contextual braid substitutions connects them, allowing a sequence of length zero. Zero sequences, reversal and concatenation of sequences make $R$ reflexive, symmetric and transitive. Applying the same contexts to every word in a sequence makes $R$ a congruence. It contains every braid pair, hence $\equiv\,\subseteq R$. Conversely every congruence containing the braid pairs contains each contextual substitution and every finite sequence of them, hence $R\subseteq\,\equiv$. Thus $R=\,\equiv$, proving the equality criterion. [F1, step 1.1, step 2.1]

4.1 Each braid pair on distinct $s,t$ has the same length $m_{st}\geq2$ on both sides and support $\{s,t\}$ on both sides. Adding left and right contexts adds their lengths and unions their supports with $\{s,t\}$. Consequently a substitution, and then every finite sequence, preserves both length and support. This proves the general claim without a finiteness or spherical assumption. [given, step 3.1]

5.1 For finite $S$, the construction agrees term by term with the definition in F2. For a spherical Artin system, F3 identifies that presented monoid with the positive submonoid in its Artin group, so the same equality criterion and invariants hold there as well. This retains the spherical conclusion. [F2, F3, step 2.1, step 3.1, step 4.1] ∎


## Support of positive Artin words and longest lifts

[Open item](item-lem-author-c81e5a0d2026-positive-support) · level 5


### Statement

Let $(A,S)$ be a spherical Artin system, with positive monoid $A^+$ and standard generators $\sigma_s$. The support of a positive element is the set of generator indices in any positive word representing it. This is well defined, and $\operatorname{supp}(xy)=\operatorname{supp}(x)\cup\operatorname{supp}(y)$. Write $A_I^+$ for the submonoid generated by $\{\sigma_i:i\in I\}$. Then $x\in A_I^+$ if and only if $\operatorname{supp}(x)\subseteq I$. For $I\subseteq S$, let $\Delta_I$ be the positive reduced-word lift of the longest element of $W_I$. Then $\operatorname{supp}(\Delta_I)=I$, including $\Delta_\varnothing=1$.

### Facts & Assumptions

[F1] The positive monoid has exactly the positive braid presentation and embeds in $A$; its simples are all reduced Coxeter lifts. Apply this also to the spherical restricted systems identified in [F3]. ([thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites))

[F2] The reduced lifts and their length-additive products are defined in [prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites).

[F3] For $I\subseteq S$, the restricted Coxeter presentation gives $(W_I,I)$ as a Coxeter system, and its intrinsic length agrees with ambient Coxeter length on $W_I$. Thus a reduced expression in $I$ is ambient reduced. Since $W_I$ is a subgroup of the finite group $W$, this restricted system is spherical. ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), Statement (2).)

### Proof



**Given:** The spherical system and its restricted systems as in the statement.

**Goal:** Establish well-defined support and its value on longest lifts.

1.1 Each defining positive braid relation replaces an alternating word on two distinct generators by another word with exactly the same two generator indices. A finite sequence of such replacements inside words therefore preserves the set of indices. By the presented-monoid identification in [F1], all positive representatives of an element are connected by these replacements. Support is consequently well defined. Concatenation gives the union formula. An element represented using only $I$ has support contained in $I$; conversely any positive representative of an element whose support is contained in $I$ uses only $I$. [F1]

2.1 By [F3], $(W_I,I)$ is a spherical Coxeter system with intrinsic length equal to ambient length. Its longest element has a reduced expression using only $I$. For each $i\in I$, its generator lift is a simple and hence a left divisor of the restricted longest lift by [F1]. The map sending the restricted positive generators to the ambient generators respects every defining braid relation, so it maps this positive factorization into the ambient monoid. By the length agreement in [F3], the restricted reduced expression is ambient reduced; [F2] therefore identifies the image of its lift with the stated $\Delta_I$. Thus $\operatorname{supp}(\Delta_I)\subseteq I$, while every $i\in I$ occurs in that support by the mapped factorization and step 1.1. Its support is exactly $I$. For $I=\varnothing$ the lift is the empty product. [F1, F2, F3, step 1.1] ∎


## Opposition as conjugation by a longest Artin lift

[Open item](item-lem-author-c81e5a0d2026-longest-conjugation) · level 5


### Statement

For a spherical Artin system with standard generators $\sigma_s$ indexed by $S$, let $A$ be its Artin group. For $K\subseteq S$, write $w_K$ for the longest element of $W_K$ and $\Delta_K=\sigma_{w_K}$ for its positive reduced-word lift in $A$. Let $\iota_K:K\to K$ be the opposition permutation specified by $w_K e_i=-e_{\iota_K(i)}$. For every $J\subseteq S$, define $A_J^+$ to be the submonoid of $A$ generated by $\{\sigma_j:j\in J\}$, including the empty product, and $A_J$ to be the subgroup generated by the same elements. Then $\Delta_K^{-1}\sigma_i\Delta_K=\sigma_{\iota_K(i)}$ for $i\in K$. Consequently $\Delta_K^{-1}A_I^+\Delta_K=A_{\iota_K(I)}^+$ and $\Delta_K^{-1}A_I\Delta_K=A_{\iota_K(I)}$ whenever $I\subseteq K$.

### Facts & Assumptions

[F1] In a spherical system, the positive Artin monoid given by the standard braid presentation embeds as the positive submonoid of its Artin group. Conjugation $x\mapsto\Delta^{-1}x\Delta$ is its Garside automorphism. ([thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites))

[F2] The positive lift of an element of the Coxeter group is independent of its reduced expression, and the homomorphism $\pi:A\to W$ sends $\sigma_s$ to $s$ and $\sigma_w$ to $w$. ([prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites))

[F3] The longest element $w_K$ is an involution and induces the permutation $\iota_K$ on the simple roots of the parabolic subsystem; the restricted canonical representation agrees with the ambient representation on their span. ([prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites), Statement and Proof, step 1.1)

[F4] For any finite Coxeter system, its longest element $w_0$ satisfies $w_0^2=1$ and $w_0 s w_0=\tau(s)$, where $w_0 e_s=-e_{\tau(s)}$. ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), Statement (1)(iv)–(v))

[F5] For $K\subseteq S$, the restricted Coxeter presentation identifies with $(W_K,K)$ and its intrinsic length equals the ambient length on $W_K$. ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), Statement, part 2)

### Proof

**Given:** The spherical Artin system, its ambient Artin group and the subsets in the statement.

**Goal:** Identify longest-lift conjugation on generators and on the specified parabolic submonoids and subgroups.

1.1 By [F5], $(W_K,K)$ is the Coxeter system of the restricted matrix, with the same lengths as in $W$. It is finite because $W$ is finite, and its longest element is $w_K$. Let $A^{(K)}$ be the Artin group of this restricted matrix, with standard generators $\widehat\sigma_i$, positive monoid $M^{(K)}$ and longest lift $\widehat\Delta_K$. Apply [F1] to this system. Its positive monoid has the standard braid presentation, whose relations preserve word length and have length at least two. Hence the atoms are precisely the standard generators: every positive word of length at least two factors into two nonidentity words, whereas a word of length one cannot do so. Any monoid automorphism permutes atoms, so conjugation by $\widehat\Delta_K$ permutes the $\widehat\sigma_i$. [F1, F5]

2.1 For $i\in K$, project $\widehat\Delta_K^{-1}\widehat\sigma_i\widehat\Delta_K$ to $W_K$ using [F2]. Its image is $w_K^{-1}i w_K=\iota_K(i)$ by [F4] applied to $(W_K,K)$; its root-labelled permutation is the one in [F3], since the restricted representation agrees on the simple-root span. Different standard atoms have different images in $K$. Thus the permuted atom in step 1.1 is exactly $\widehat\sigma_{\iota_K(i)}$. [F2, F3, F4, step 1.1]

3.1 The restricted braid relations also hold among the ambient generators, so the group presentations in [F1] give a homomorphism $A^{(K)}\to A$ sending $\widehat\sigma_i$ to $\sigma_i$. A reduced expression for $w_K$ in $K$ remains reduced in $S$ by [F5]. Therefore [F2] identifies the image of $\widehat\Delta_K$ with $\Delta_K=\sigma_{w_K}$, and step 2.1 gives the claimed generator identity in $A$. Conjugation consequently maps all finite positive products with indices in $I$ onto all such products with indices in $\iota_K(I)$, because $\iota_K$ is a permutation. This is exactly the stated equality of the defined submonoids. Applying the same argument to products of generators and their inverses proves the subgroup equality. If $K=\varnothing$, both parabolics and the longest lift are trivial, so the assertions hold as well. [F1, F2, F3, F5, step 2.1] ∎


## Independent groupoid covering and universal-cover input

[Open item](item-thm-groupoid-cover-input-artin-tits-prerequisites) · level 6


### Statement

A covering $p:(E,e)\to(G,x)$ of nonempty connected small groupoids is a functor bijective on arrows with every fixed source. It is determined up to unique pointed isomorphism over $G$ by its characteristic subgroup $H=p(E_e)\le G_x$; unpointed isomorphism classes correspond to conjugacy classes of subgroups of $G_x$. A normal covering means that its deck transformations act transitively on one, hence every, fibre. This is equivalent to $H\lhd G_x$, and then $G_x/H\cong\mathrm{Deck}(p)$. Here arrow products are left to right and deck transformations use ordinary function composition; the isomorphism sends $aH$ to the deck transformation sending $e$ to the endpoint of the lift of $a$. Every such $G$ has a universal connected covering with trivial vertex groups, obtained by taking $H=\{1_x\}$.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

[lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres)

[lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover)

[lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification)

[lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient)

[lem-author-2e40db4c81b4-universal-cover](item-lem-author-2e40db4c81b4-universal-cover)

### Facts & Assumptions

[F1] The groupoid conventions are [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites) and the quotient is [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group). The five local prerequisites are [lem-author-2e40db4c81b4-lift-fibres](item-lem-author-2e40db4c81b4-lift-fibres) (unique lifts and characteristic subgroups), [lem-author-2e40db4c81b4-subgroup-cover](item-lem-author-2e40db4c81b4-subgroup-cover) (subgroup construction), [lem-author-2e40db4c81b4-pointed-classification](item-lem-author-2e40db4c81b4-pointed-classification) (pointed classification), [lem-author-2e40db4c81b4-normal-deck-quotient](item-lem-author-2e40db4c81b4-normal-deck-quotient) (normality and the deck quotient), and [lem-author-2e40db4c81b4-universal-cover](item-lem-author-2e40db4c81b4-universal-cover) (universal covering).

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish all assertions of the Statement.

1.1 The lift-fibre lemma gives the definition and injectivity on vertex groups. The subgroup construction realizes every subgroup, and pointed classification proves both its uniqueness with a chosen point and the conjugacy formulation without one. Thus the classification assertions hold with exactly the stated basepoint data. [F1]

2.1 The normal-deck-quotient lemma proves the equivalence of normality with transitivity and the asserted isomorphism, using precisely the multiplication convention in the Statement. The universal-cover lemma gives existence from the trivial subgroup, trivial vertex groups and universality. These prove all remaining assertions. [F1, step 1.1] ∎

### Source notes

This is a local synthesis of five authored intermediate prerequisites, following Brown’s lifting/subgroup construction. The previous citation omitted the deck-group location: it is 10.6.3, printed p. 393, and regularity is 10.6.4, pp. 393–394. Its anti-isomorphism has been converted explicitly, rather than silently identified with an isomorphism. No outstanding imported theorem or source-proof reconstruction is claimed.


## Independent finite simplicial arrangement theorem

[Open item](item-thm-deligne-simplicial-input-artin-tits-prerequisites) · level 6


### Statement

For a finite central real hyperplane arrangement with open simplicial chambers, the complexified complement is aspherical. Its fundamental groupoid on chamber basepoints is the groupoid completion of positive galleries modulo equal-endpoint minimal-gallery relations. The positive gallery category has a finite-type atomic categorical Garside structure: the automorphism is antipodes, the Garside arrow at $A$ is $u(A,-A)$, its simple arrows are minimal galleries, and both outgoing left-divisibility and incoming right-divisibility orders are lattices.

### Statement references

[lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside)

[lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover)

[def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites)

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

### Facts & Assumptions

[F1] Use [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category) for the finite central arrangement, open simplicial chambers, the positive gallery category $P$, its minimal-gallery congruence and the classes $u(A,B)$. Use [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites) for the groupoid completion of this category. Products follow traversal order.

[F2] Use [lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside) for the antipodal Garside structure and [def-garside-interface-artin-tits-prerequisites](item-def-garside-interface-artin-tits-prerequisites) for finite type, simple arrows, atomicity and the two divisibility-lattice conditions.

[F3] Use [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) with $T=V$ for the complexified complement $Y$, [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) for endpoint-fixed path-homotopy classes and their composition, and [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space) for the $K(\pi,1)$ convention. Choose a real basepoint $b_A$ in each chamber $A$. The groupoid on chamber basepoints means the full subgroupoid with objects $b_A$ and all endpoint-fixed path-homotopy classes in $Y$ between them, composed in traversal order.

[F4] Use [lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover) for the identification of the gallery completion with this full fundamental subgroupoid and for asphericity, under the same finite central simplicial hypotheses. The substantial arrangement-theoretic inputs are imported in the two supplier lemmas, whose source records give their locators and reading limits; this item composes their conclusions.

### Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 Apply [lem-author-d3116e202611-antipodal-garside](item-lem-author-d3116e202611-antipodal-garside) to the category $P$ of [F1] for the given finite central simplicial arrangement. Its hypotheses are exactly those given. In the convention of [F2], it identifies both divisibility lattices and all of the atomic Garside data stated above, including the antipodal automorphism, the arrow $u(A,-A)$ and minimal gallery classes as the simple arrows. [F1, F2, given]

2.1 Apply [lem-author-d3116e202611-gallery-cover](item-lem-author-d3116e202611-gallery-cover) to the same arrangement and the complement $Y$ of [F3]. With the positive wall-crossing convention of that lemma, it identifies the groupoid completion of $P$ with the full fundamental subgroupoid on the chosen chamber basepoints, and gives asphericity of $Y$. These are the remaining assertions. The finite central simplicial hypotheses must be checked afresh for any restricted arrangement consuming this theorem. No infinite or nonsimplicial arrangement is covered. [F1, F3, F4, step 1.1] ∎


## Linear symmetries act on the Salvetti model

[Open item](item-lem-author-5a1e77100001-linear-action) · level 6


### Statement

Suppose a group acts linearly on $E$, preserves $I$ and permutes $\mathcal A$. Use the group-action convention of *Left group actions, transitive actions, and faithful actions*. It acts on the facets and incidence of *Facet incidence and localized chamber signs*, on the poset of *The incident facet and chamber poset* by $g(F,C)=(gF,gC)$, and on the model of *The Salvetti order complex and its finite CW case* by the realized simplicial maps of *A simplicial map and its geometric realization*. It also acts diagonally on the complement of *def-complement-interface-artin-tits-prerequisites*. These actions alone assert no equivariant homotopy equivalence.

### Statement references

[lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence)

[def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset)

[lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model)

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-simplicial-map-and-its-geometric-realization](https://alphabetamath.cc/item/def-simplicial-map-and-its-geometric-realization)

### Facts & Assumptions

[F1] The chosen nonzero real linear functionals $h_H$ with $\ker h_H=H$ and their simultaneous sign fibers are defined in [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets). Facets and their incidence and localizations are sign-defined in [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence), and incident pairs are ordered as in [def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset).

[F2] The model is the realization of chains in [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model); realized simplicial maps use barycentric coordinates as in [math:def-simplicial-map-and-its-geometric-realization](https://alphabetamath.cc/item/def-simplicial-map-and-its-geometric-realization). The identity and composition requirements are those of [math:def-group-action](https://alphabetamath.cc/item/def-group-action).

[F3] The complement and its diagonal action are defined in [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites).

### Proof
**Given:** the objects and hypotheses of the Statement.


Use the declared inputs [def-author-5a1e77100001-sign-facets](item-def-author-5a1e77100001-sign-facets), [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence), [def-author-5a1e77100001-salvetti-poset](item-def-author-5a1e77100001-salvetti-poset), [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model), [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites), [math:def-group-action](https://alphabetamath.cc/item/def-group-action), [math:def-simplicial-map-and-its-geometric-realization](https://alphabetamath.cc/item/def-simplicial-map-and-its-geometric-realization) with the conventions in the Statement and Facts below.

**Proof technique:** direct.

**Goal:** prove every assertion in the Statement.

1.1 For each hyperplane $H$, the nonzero functional $h_{gH}\circ g$ has kernel $H$ and is a nonzero scalar multiple of $h_H$. Thus $g$ permutes sign coordinates, possibly reversing their signs, and maps every facet bijectively to a facet. Since it is a homeomorphism of $I$, it preserves relative closures and incidence. It sends $\mathcal A_F$ to $\mathcal A_{gF}$ and sends the localized chamber $C_F$ to $(gC)_{gF}$. [F1, given]

2.1 These facts preserve both conditions defining the order of incident pairs. Consequently $g$ maps finite chains to finite chains, so induces a simplicial automorphism. Its realization permutes barycentric coordinates, continuously on each closed simplex, hence continuously in the weak topology; its inverse is induced by $g^{-1}$. Identities and compositions hold on coordinates, giving an action by homeomorphisms. [F1, F2, step 1.1]

3.1 The diagonal map sends $H\times H$ to $gH\times gH$ and preserves $I\times I$, hence preserves the complement. Its inverse is the diagonal map of $g^{-1}$. Thus it is the action of [F3]. Nothing in steps 1.1, 2.1 and 3.1 constructs a comparison map between the two spaces. [F3, step 1.1, step 2.1] ∎


## Rigidity of two-letter words below braid length

[Open item](item-lem-author-c73ab6d940e2-short-two-letter-rigidity) · level 6


### Statement

Let $M$ be the positive monoid of a spherical Artin system with finite standard generating set $S$ and Coxeter matrix $(m_{st})$. Fix distinct $a,b\in S$ with braid parameter $m=m_{ab}<\infty$. Every word supported in $\{a,b\}$ of length less than $m$ is its sole positive word representative in $M$.

### Statement references

[lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

### Facts & Assumptions

[F1] Positive word equality is a sequence of support- and length-preserving braid substitutions. ([lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence))

[F2] The words and the standard Artin monoid presentation are defined in [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations), Definition (1)–(3). For distinct $s,t\in S$ with $m_{st}<\infty$, the defining braid pair consists of the two alternating words of length $m_{st}\geq2$, both with support $\{s,t\}$; an infinite parameter supplies no pair.

### Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 Any substitution starting from such a word must use a relation supported in $\{a,b\}$. By the defining braid pairs, the only possible relation is the one for the distinct pair $a,b$, of length $m$; relations involving other generators cannot be applied because their left and right sides both contain those generators. [F1, F2, given]

2.1 The word is too short to contain a side of the length-$m$ relation. Thus no first substitution can change it, and the finite-sequence criterion implies that its equality class consists only of itself. [F1, step 1.1] ∎


## Exactly two words for a two-generator braid element

[Open item](item-lem-author-c73ab6d940e2-braid-class-two-words) · level 6


### Statement

Let $S$ be any set and $(m_{st})_{s,t\in S}$ a symmetric matrix with $m_{ss}=1$ and $m_{st}\in\{2,3,\ldots\}\cup\{\infty\}$ for $s\ne t$. Let $M$ be its presented positive Artin monoid: finite words on $S$ modulo the congruence generated by the standard alternating braid pairs, as constructed in the braid-congruence lemma. Write $[w]$ for the element represented by a word $w$. Fix distinct $a,b\in S$ with $m=m_{ab}<\infty$. Let $u$ and $v$ be the alternating length-$m$ words starting with $a$ and $b$, respectively. The element $d=[u]=[v]$ has exactly the two positive word representatives $u,v$ in $M$. No spherical assumption is needed for this presented monoid.

### Statement references

[lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence)

### Facts & Assumptions

[F1] For the arbitrary-set presented monoid, positive word equality is equivalent to a finite sequence of braid substitutions, preserving length and support. Its construction defines the alternating braid pairs: each uses a distinct pair $s,t$, has length $m_{st}\geq2$ and has support $\{s,t\}$ on both sides; an infinite parameter supplies no pair. ([lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence))

### Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Determine all positive words representing $d$.

1.1 The defining $a,b$ braid relation gives $[u]=[v]$, and the two words are distinct because their initial letters differ. Since $m\geq2$, both have support $\{a,b\}$. Every word in a substitution sequence starting at $u$ has length $m$ and support $\{a,b\}$. [F1, given]

2.1 Any applicable braid relation uses a distinct pair $s,t$ whose two letters must both occur in the current word. Thus $\{s,t\}=\{a,b\}$, and the substituted side has length $m$. Since the current word also has length $m$, both contexts must be empty. The substitution therefore replaces the entire word $u$ by $v$ or $v$ by $u$. By induction on the number of substitutions every word reachable from $u$ is $u$ or $v$. F1 identifies reachability with equality in $M$, and step 1.1 gives both representatives, proving the assertion. [F1, step 1.1] ∎


## Elementary ribbons have explicitly determined endpoints

[Open item](item-lem-author-c81e5a0d2026-ribbon-endpoints) · level 6


### Statement

In a spherical Artin system $(A,S)$, let $I\subseteq S$ and $a\in S\setminus I$, put $K=I\cup\{a\}$ and $J=\iota_K(I)$. Then $r(I,a)=\Delta_I^{-1}\Delta_K$ is positive, belongs to the positive ribbon category, and satisfies $r(I,a)^{-1}A_I^+r(I,a)=A_J^+$ and $r(I,a)^{-1}A_Ir(I,a)=A_J$. It is an arrow $I\to J$ in the left-to-right convention. Moreover $r(I,a)\notin A_I^+$. For $s\in I$, Godelle's other elementary atom $\nu_I(s)=\Delta_{I_s}$, where $I_s$ is the vertex set of the connected component containing $s$ in the induced Coxeter diagram on $I$, belongs to $A_I^+$.

### Facts & Assumptions

[F1] The spherical positive monoid is the monoidal Garside structure in [thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites). The same theorem applies to the restricted spherical systems in [F7].

[F2] Positive support and support of $\Delta_K$ are given in [lem-author-c81e5a0d2026-positive-support](item-lem-author-c81e5a0d2026-positive-support).

[F3] Longest-lift conjugation on all standard generators is computed in [lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation).

[F4] The independent spherical nu-structure and positive ribbon meaning are the external input below.

[F5] The Coxeter diagram, induced subdiagram on $I$ and connected-component vertex sets are defined in [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type).

[F6] The universal properties of the Artin monoid and group and the projection $\pi:A\to W$, $\pi(\sigma_s)=s$, are supplied by [math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection), Statement (1)–(3). Only these parts are used.

[F7] For every $X\subseteq S$, the restricted Coxeter presentation is $(W_X,X)$, with $W_X\cap S=X$; since $W$ is finite, every such system is spherical. ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), Statement (2).)

[F8] The Coxeter matrix entries satisfy $m(u,v)=\operatorname{ord}(uv)$ in $W$ for distinct simple generators. ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length), Conventions.)

[F9] An internal direct product consists of normal subgroups generating the whole group, each intersecting the subgroup generated by the other factors trivially. ([math:def-internal-direct-product-of-subgroups](https://alphabetamath.cc/item/def-internal-direct-product-of-subgroups).)

### External input

Godelle's Definitions 3.7–3.8 and 3.12 specify positive ribbons and nu-functions. Example 3.14 imports the spherical nu-structure and its formulas: the exterior value is $\Delta_I^{-1}\Delta_K$, and the internal value at $s\in I$ is $\Delta_{L_s}$, where $L_s$ indexes the indecomposable standard parabolic factor containing $s$. Here indecomposable excludes an internal direct product of two proper standard parabolic subgroups. Existence and atomicity, including exterior positivity, are imported without reconstructing the proof attributed there to [15]. The equivalence $L_s=I_s$ is established locally in steps 1.4–3.1, rather than assumed from the diagram definition. The endpoint and support separation are also local deductions.

### Proof

**Given:** The spherical Artin system $(A,S)$, $I\subseteq S$, $a\in S\setminus I$, $K=I\cup\{a\}$, $J=\iota_K(I)$ and the elementary ribbon above.

**Goal:** Identify its endpoint and decide whether each type of atom is internal, including the component identification required by the internal formula.

1.1 The external Example 3.14 identifies $r(I,a)$ with $\nu_I(a)$ and states that these functions give a nu-structure; Definition 3.12 makes their values atoms of the positive ribbon category. In particular $r(I,a)$ is positive and conjugates the indicated positive parabolic monoids. [F1, F4]

1.2 By [F3], conjugation by $\Delta_I$ permutes $I$ and conjugation by $\Delta_K$ sends it to $\iota_K(I)$. Therefore $r(I,a)^{-1}A_I^+r(I,a)=\Delta_K^{-1}\Delta_I A_I^+\Delta_I^{-1}\Delta_K=A_J^+$. The same calculation gives the subgroup equality. This fixes the endpoint independently of any source/target naming. [F3]

1.3 If $r(I,a)$ belonged to $A_I^+$, the positive identity $\Delta_K=\Delta_I r(I,a)$ would have support contained in $I$ by [F2]. But its support is $K$, containing $a\notin I$. This contradiction proves it is outside $A_I^+$. [F2]

1.4 For $X\subseteq I$, apply [F1] to the restricted spherical system from [F7]. Its Artin group maps onto $A_X$ by sending each restricted generator to the ambient generator; this is a homomorphism by [F6]. In that restricted group every element is $uv^{-1}$ with $u,v$ positive: such expressions include each generator and its inverse, and are closed under multiplication, since a common right multiple $bp=cq$ of positive $b,c$ gives $(ab^{-1})(cd^{-1})=(ap)(dq)^{-1}$. Such common right multiples exist by [F1]. Mapping these expressions into $A$ proves that every element of $A_X$ is $uv^{-1}$ with $u,v\in A_X^+$. No injectivity of the restricted-group map is assumed here. [F1, F6, F7, algebra]

2.1 Let $C_1,\ldots,C_k$ be the diagram components of $I$. Distinct components have $m(u,v)=2$ between their generators, so the Artin relations make the subgroups $A_{C_j}$ commute elementwise; they generate $A_I$. To prove uniqueness, suppose $g_1\cdots g_k=1$ with $g_j\in A_{C_j}$, and use step 1.4 to write $g_j=u_jv_j^{-1}$ with $u_j,v_j\in A_{C_j}^+$. Commuting distinct factors gives $u_1\cdots u_k=v_1\cdots v_k$ in $A$. By [F1] this is an equality in the presented positive monoid, hence a finite sequence of positive braid replacements connects the two words. By [F2], all intermediate words use only $I$. For a fixed $C_j$, erase all letters outside $C_j$ throughout this sequence. A braid relation within $C_j$ remains that relation, one outside it becomes empty on both sides, and one crossing components is a commuting relation and becomes the same word on both sides. Thus $u_j=v_j$ and $g_j=1$ for every $j$. Each factor is normal, since it is preserved by conjugation from itself and commutes with the other generating factors. The factors therefore form an internal direct product in [F9]. When $I=\varnothing$ this is the empty product. [F1, F2, F5, F6, F9, step 1.4]

3.1 Conversely, suppose $A_X$ is an internal direct product of two proper standard parabolic subgroups $A_U,A_V$, where $U,V\subseteq X\subseteq I$. The generators are nonidentity by [F6] and [F7], so trivial intersection forces $U\cap V=\varnothing$. Projecting the equality $A_X=A_UA_V$ to $W$ gives $W_X\subseteq W_{U\cup V}$, and hence $X=U\cup V$ by $W_{U\cup V}\cap S=U\cup V$ in [F7]. Normality of both factors and trivial intersection make them commute: each commutator belongs to both factors and is therefore the identity. For $u\in U,v\in V$, their Coxeter images commute, so $(uv)^2=1$; the order convention [F8] forces $m(u,v)=2$. Thus the nonempty parts $U,V$ have no diagram edge between them. In particular a connected $X$ admits no such decomposition. Together with step 2.1, this proves that the indecomposable standard parabolic factors are exactly the diagram components, and Godelle's $L_s$ equals $I_s$. [F5, F6, F7, F8, F9, step 2.1]

4.1 For $s\in I$, apply Example 3.14 only after the identification in step 3.1: it gives $\nu_I(s)=\Delta_{L_s}=\Delta_{I_s}$. By [F2] its support is $I_s\subseteq I$, so it belongs to $A_I^+$. Combined with steps 1.1–1.3, this proves all the assertions. [F2, F4, step 1.1, step 1.2, step 1.3, step 3.1] ∎


## Free object actions give orbit coverings

[Open item](item-prop-groupoid-orbit-interface-artin-tits-prerequisites) · level 7


### Statement

Let a group $N$ act on a connected small groupoid $G$ by automorphisms, with a left action on objects and arrows: $(nm)a=n(ma)$. Assume that the object action is free, meaning that $nx=x$ implies $n=1$. Arrow products are read left to right. An orbit is the set of translates of an object or arrow.

The object and arrow orbits form a connected groupoid $G/N$: the source and target of an arrow orbit are the orbits of its source and target, and composition is defined by choosing consecutive representatives. For each object $x$, every arrow orbit whose source is $[x]$ has exactly one representative with source $x$. The orbit functor $p:G\to G/N$ is a normal covering, and $n\mapsto(a\mapsto na)$ identifies $N$ with its group of deck transformations, whose multiplication is ordinary function composition.

For every object $x$, there is an exact sequence of groups $1\to G_x\xrightarrow{p}(G/N)_{[x]}\xrightarrow{\delta}N\to1$. Here $G_x$ and $(G/N)_{[x]}$ are the groups of arrows from the indicated object to itself, and $\delta([a])=n$ when the unique representative $a$ with source $x$ has target $nx$. Exactness means that the first map is injective, the last is surjective, and the image of the first equals the kernel of the last.

### Statement references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)

[math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Facts & Assumptions

**Given:** The group action and the connected small groupoid in the Statement.

[F1] A groupoid has associative arrow composition, identities and two-sided inverses; its automorphisms preserve all of these and the source and target of arrows. Connectedness means nonemptiness and an arrow between any ordered pair of objects. [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[F2] In a left group action, $1$ acts as the identity and $(nm)$ acts as $n$ after $m$. The orbit relation is an equivalence relation, and freeness means that an element fixing an object is the identity. [math:def-group-action](https://alphabetamath.cc/item/def-group-action) [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action) [math:def-equivalence-relation](https://alphabetamath.cc/item/def-equivalence-relation)

[F3] A covering of connected groupoids is a functor bijective on arrows with each fixed source. A deck transformation is an automorphism over the base, and the covering is normal when its deck transformations act transitively on a fibre. [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[F4] A group homomorphism $f:H\to K$ satisfies $f(uv)=f(u)f(v)$. Its kernel is $\{u\in H:f(u)=1_K\}$, and its image is $\{f(u):u\in H\}$. [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

### Proof

**Proof technique:** direct.

**Goal:** Construct the orbit groupoid and establish the covering, deck group and exact sequence.

1.1 **Representatives and composition.** If an arrow orbit has source $[x]$, translate any representative so its source is $x$. Two representatives in that orbit with source $x$ differ by an element fixing $x$, hence are equal by freeness. For composable arrow orbits, choose a representative $a:x\to y$ of the first and the unique representative $b:y\to z$ of the second with source $y$; define their product to be $[ab]$. Replacing $a$ by $na$ replaces $b$ by $nb$, so the product orbit is unchanged. Sources and targets are well defined because automorphisms preserve them. [F1, F2, given]

2.1 **Groupoid and covering.** For three composable orbits, choose consecutive representatives $a,b,c$. Both parenthesizations have orbit $[abc]$, by uniqueness in 1.1 and associativity in $G$. Identity and inverse orbits satisfy the groupoid laws by the same construction. Thus the orbit maps define a functor $p$. It is bijective on every source-star by 1.1. The quotient is nonempty and connected because an arrow between representatives of any two object orbits exists in $G$. Consequently $p$ is a covering of connected groupoids. [F1, F3, step 1.1]

3.1 **Deck transformations.** Each $n\in N$ acts as an automorphism over $G/N$, so gives a deck transformation; these act transitively on every object fibre, which is an $N$-orbit. If a deck transformation fixes one object $x$, then it fixes every arrow with source $x$ by source-star injectivity, and hence fixes their targets. Connectedness reaches every object this way; source-star injectivity then fixes every arrow. For any deck transformation $d$, its value at $x$ is $nx$ for a unique $n$ by freeness. The deck transformation $n^{-1}d$ fixes $x$, so is the identity. Thus $N$ is exactly the deck group, with multiplication preserved by the left-action law, and the covering is normal. [F1, F2, F3, F4, step 2.1]

4.1 **Vertex sequence.** For a loop orbit at $[x]$, its unique representative $a$ from $x$ ends at a unique $nx$, defining $\delta([a])=n$. If $b:x\to mx$ represents a second loop orbit, the consecutive representative after $a$ is $nb:nx\to nmx$; hence $\delta([a][b])=nm$, so $\delta$ is a homomorphism. Connectedness supplies an arrow $x\to nx$ for each $n$, proving surjectivity. Its kernel consists exactly of orbit classes represented by arrows $x\to x$, which are the image of $G_x$. The restriction of $p$ to $G_x$ is injective by source-star uniqueness. This proves the exact sequence and all assertions. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎


## A criterion for lifting a presented groupoid

[Open item](item-prop-presentation-lifting-interface-artin-tits-prerequisites) · level 7


### Statement

Let $G$ be the groupoid presented by a small directed graph $Q$, endpoint-preserving path relations $R$, formal inverse edges, and their cancellation relations. Let $(X_x)_{x\in Q_0}$ be a family of sets indexed by the vertex set $Q_0$. For each edge $e:x\to y$ choose a bijection $T_e:X_x\to X_y$, and assign its formal inverse edge the inverse bijection $T_e^{-1}$. Suppose that, for every relation in $R$, the two successive composites of these maps agree on the whole set over its source.

Then there is a small groupoid $E$ with objects the disjoint union of the sets $X_x$ and a functor $p:E\to G$ such that, for each object $u\in X_x$ and each arrow $g$ of $G$ with source $x$, exactly one arrow of $E$ has source $u$ and projects to $g$. The lift of a generating edge sends $u$ to $T_e(u)$. Thus $p$ is a covering in the source-star sense, whether or not $E$ or $G$ is connected. The lifts are determined by the specified maps and the covering property. Equality of projected labels alone does not establish equality of relation lifts: the composites must agree upstairs.

### Statement references

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites)

[math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

### Facts & Assumptions

[F1] The path presentation, its endpoint-preserving generated congruence, the doubled graph and cancellation relations are as in [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites). Paths and their map composites are read from left to right.

[F2] Groupoids, functors and inverse arrows use the conventions of [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites). A source-star covering is a functor bijective on arrows with each fixed source, as in [thm-groupoid-cover-input-artin-tits-prerequisites](item-thm-groupoid-cover-input-artin-tits-prerequisites); connectedness is not part of this local bijectivity condition.

[F3] The family $(X_x)_{x\in Q_0}$ is a function with domain the set $Q_0$, in the sense of [math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family). Members of its disjoint union retain their vertex tag; $u\in X_x$ abbreviates the object $(x,u)$.

[F4] A bijection is an injective and surjective function, as in [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection). The maps $T_e$ are the specified bijections and $T_e^{-1}$ their inverse functions.

### Proof

**Given:** The graph, relations, sets and bijections in the Statement.

**Goal:** Construct the claimed covering and establish the uniqueness of its lifts.

1.1 Assign to each finite path in the doubled graph the successive composite of its edge maps, assigning the identity map to an empty path. Among paths with the same endpoints, equality of these maps is an equivalence relation stable under concatenation on either side. It contains every relation in $R$ by hypothesis and both cancellation relations because the map for a formal inverse is the inverse bijection. By minimality of the generated congruence, equivalent paths induce the same map. Consequently every arrow $g:x\to y$ of $G$ induces a well-defined bijection $T_g:X_x\to X_y$, compatible with identities and composition; reversing a representative shows $T_{g^{-1}}=T_g^{-1}$. [F1, F4, given]

2.1 Define an arrow of $E$ to be a pair $(u,g)$ with $u\in X_x$ and $g:x\to y$ in $G$, with source $u$ and target $T_g(u)$. Its projection is $g$; define $(u,g)(T_g(u),h)=(u,gh)$ and the identity at $u$ to be $(u,1_x)$. Compatibility from the preceding step gives associativity and the identity laws. The inverse of $(u,g)$ is $(T_g(u),g^{-1})$, so $E$ is a groupoid and projection is a functor. Its object set is the tagged union of the set-indexed family $(X_x)_{x\in Q_0}$, and its arrows form a subset of the product of this object set with the arrow set of $G$; hence both are sets. [F1, F2, F3, step 1.1]

3.1 For each $u\in X_x$, projection sends the arrows with source $u$ bijectively to the arrows of $G$ with source $x$: the unique arrow over $g$ is $(u,g)$. In particular, the lift of $e$ ends at $T_e(u)$. Any other covering with the same fibres and generator-lift endpoints has, by successive unique lifting, the same endpoint for every path; its arrow over each $g$ is uniquely determined by its source and projection. The resulting correspondence of arrows preserves identities and composition, giving a unique isomorphism over $G$ that fixes the specified objects. This proves the criterion and its uniqueness assertion. [F2, F4, step 1.1, step 2.1] ∎

### Remarks

The hypothesis on relation composites is an obligation to be checked in any application. In particular, projecting two paths to the same arrow does not by itself prove that independently specified lifts have the same endpoint or composite.


## Independent Salvetti homotopy-model input

[Open item](item-thm-salvetti-topology-input-artin-tits-prerequisites) · level 7


### Statement

Let $I$ be a nonempty open convex cone in a finite-dimensional real vector space $E$ and $\mathcal A$ a locally finite arrangement of linear hyperplanes meeting $I$. Let $M(I,\mathcal A)$ be the product complement of *Complexified complements in an open convex cone*, and let $\operatorname{Sal}(I,\mathcal A)$ be the simplicial CW model of *The Salvetti order complex and its finite CW case*.

There exists a homotopy equivalence $f:\operatorname{Sal}(I,\mathcal A)\to M(I,\mathcal A)$, with homotopy equivalence understood as in *Homotopy equivalences, homotopy inverses and spaces of the same homotopy type*. If $\mathcal A$ is finite, the model is finite; in particular this holds for a finite arrangement in the whole vector space.

For the additional equivariant assertion, let $(W,S)$ be a Vinberg system in $E$ with closed fundamental chamber $\overline C$, in the sense specified in *Independent Artin fundamental-group identification*. Require $I=\operatorname{int}(\bigcup_{w\in W}w\overline C)$ and $\mathcal A=\{\operatorname{Fix}(r):r\in W\text{ is a linear reflection}\}$, the Coxeter arrangement of this realization. For the actions of *Linear symmetries act on the Salvetti model*, $f$ can be chosen $W$-equivariant: $f(wx)=wf(x)$ for every $w\in W$ and $x\in\operatorname{Sal}(I,\mathcal A)$, as in *Equivariant maps and isomorphisms of group actions*.

Under these additional Vinberg hypotheses, for each of $X=\operatorname{Sal}(I,\mathcal A)$ and $X=M(I,\mathcal A)$, let $X/W$ be the set of orbits for the relation $x\sim y$ if $y=wx$ for some $w\in W$. Give it the quotient topology: $U\subseteq X/W$ is open exactly when $q_X^{-1}(U)$ is open in $X$, where $q_X(x)=[x]$. With these topologies, the induced map $\overline f:\operatorname{Sal}(I,\mathcal A)/W\to M(I,\mathcal A)/W$, $\overline f([x])=[f(x)]$, is a homotopy equivalence.

### Statement references

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model)

[lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action)

[math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence)

[thm-reflection-artin-topology-input-artin-tits-prerequisites](item-thm-reflection-artin-topology-input-artin-tits-prerequisites)

[math:def-equivariant-map-of-group-actions](https://alphabetamath.cc/item/def-equivariant-map-of-group-actions)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

### External input

Paris, §3.1, Theorem 3.1, printed p.386, supplies the homotopy equivalence to the product complement of [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) for the simplicial model of [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model), with homotopy equivalence as in [math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence).

Its equivariant and orbit-space clauses apply to the Vinberg data of [thm-reflection-artin-topology-input-artin-tits-prerequisites](item-thm-reflection-artin-topology-input-artin-tits-prerequisites), with $I$ equal to the interior of the union of translates of the closed fundamental chamber and $\mathcal A$ its reflection hyperplanes. The actions are those of [lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action), equivariance means [math:def-equivariant-map-of-group-actions](https://alphabetamath.cc/item/def-equivariant-map-of-group-actions), and the orbit spaces carry [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology). These clauses are imported in this precise setting; they are not deduced merely from equivariance of an arbitrary homotopy equivalence.

Finiteness for finite $\mathcal A$ is the separately proved elementary assertion of [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model).

### Source notes

The five local helpers spell out the construction and elementary properties; they do not reconstruct Paris's homotopy-equivalence proof. The independent source was read to the limits recorded in its reference metadata. This input supplies neither asphericity nor equivariance under a general normalizer action. The latter requires its own construction in the article consumers. The helpers and this target remain drafts pending ordinary native author adoption and later scientific review.


## The two-generator braid element is the lcm

[Open item](item-lem-author-c73ab6d940e2-two-generator-lcm) · level 7


### Statement

In a spherical positive Artin monoid, for distinct standard generators $a,b$ and $m=m_{ab}$, their least common multiple for left divisibility is the element represented by the two alternating words of length $m$. These are exactly its two positive word representatives.

### Statement references

[thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites)

[lem-author-c73ab6d940e2-short-two-letter-rigidity](item-lem-author-c73ab6d940e2-short-two-letter-rigidity)

[lem-author-c73ab6d940e2-braid-class-two-words](item-lem-author-c73ab6d940e2-braid-class-two-words)

### Facts & Assumptions

[F1] The positive monoid is cancellative and has a left-divisibility lcm for every pair. ([thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites))

[F2] Words on $a,b$ shorter than $m$ have only one representative. ([lem-author-c73ab6d940e2-short-two-letter-rigidity](item-lem-author-c73ab6d940e2-short-two-letter-rigidity))

[F3] The length-$m$ braid element $d$ has exactly its two alternating representatives. ([lem-author-c73ab6d940e2-braid-class-two-words](item-lem-author-c73ab6d940e2-braid-class-two-words))

### Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 Both $a$ and $b$ left-divide $d$, so their lcm $c$ left-divides $d$. Choose positive words $p,q$ for $c$ and its complement. Then $pq$ is one of the two alternating length-$m$ words by F3. In particular $p$ is a prefix of one of these words. [F1, F3]

2.1 If $|p|<m$, F2 makes $p$ the unique word representing $c$. But $a$ and $b$ both left-divide $c$, giving word representatives of $c$ starting with these distinct letters, a contradiction. Thus $|p|=m$ and $q$ is empty, so $c=d$. The representative count is F3. [F1, F2, F3, step 1.1] ∎


## The reduced ribbon subgroupoid uses exactly the exterior atoms

[Open item](item-lem-author-c81e5a0d2026-reduced-ribbon-generators) · level 7


### Statement

Let $(A,S)$ be a spherical Artin system, with positive monoid $A^+$ and standard parabolics $A_I^+$ and $A_I$ for every $I\subseteq S$. Use the ribbon groupoid $\mathcal R(A)$ with all these $A_I$ as objects, labelled by $I$, and arrows $(I,g,J)$ for $g\in A$ satisfying $g^{-1}A_I^+g=A_J^+$. Composition is $(I,g,J)(J,h,K)=(I,gh,K)$, the identity is $(I,1,I)$, and the inverse is $(J,g^{-1},I)$. Positive arrows have $g\in A^+$.

For $K\subseteq S$, let $w_K$ be the longest element of $W_K=\langle K\rangle$ in the associated Coxeter system. With $(e_s)_{s\in S}$ its canonical simple-root basis, use the opposition permutation $\iota_K:K\to K$ characterized by $w_K e_s=-e_{\iota_K(s)}$ for $s\in K$.

For the spherical Artin nu-structure, Godelle's subgroupoid $\mathcal R^\nu(A)$ is exactly the subgroupoid on this full object set generated by all arrows $r(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}:I\to\iota_{I\cup\{a\}}(I)$ for $a\notin I$, together with their inverses and every object identity. Thus it is generated by the exterior elementary ribbons, without the internal atoms $\Delta_{I_s}$ in the generating family. “Generated” permits finite composable products and inverses; it does not assert freeness or a list of relations.

### Facts & Assumptions

[F1] The positivity, endpoints and exterior status of $r(I,a)$ for $a\notin I$, and the internal status of $\nu_I(s)=\Delta_{I_s}$ for $s\in I$, are established in [lem-author-c81e5a0d2026-ribbon-endpoints](item-lem-author-c81e5a0d2026-ribbon-endpoints).

[F2] Groupoids and their left-to-right product are specified in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).

[F3] The independent ambient ribbon definitions and the generating and full-object-set conventions for $\mathcal R^\nu(A)$ are recorded in the first two external inputs below.

[F4] Godelle's spherical nu-structure satisfies $\nu_I(a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}=r(I,a)$ for $a\notin I$, by Example 3.14 (third external input below).

[F5] The opposition permutation and its longest-element/simple-root characterization used in the Statement are supplied by [lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation), Statement.

### External input

We import Godelle's ribbon definitions in their classical spherical Artin specialization (first reference). Definition 2.7 and Definitions 3.7–3.8 give all standard parabolic objects and ribbon arrows whose conjugation preserves the indicated positive parabolic monoids; the paragraph opening Section 3.3 gives the positive-arrow criterion. In the one-object monoid setting, the natural transformation is represented by $g$, and its associated isomorphism is $x\mapsto g^{-1}xg$. Thus the concrete tagged-arrow description in the Statement is this ambient ribbon groupoid, rather than the larger groupoid of arbitrary subgroup conjugators.

We import the defining conventions in Section 4.2 (second reference): an elementary atom is denoted $\tau(I,s)$ when it lies in $A_I^+$ and $\nu(I,s)$ otherwise. The paragraph immediately before Lemma 4.17 defines $\mathcal R^\nu(A)$ as the subgroupoid generated by the latter arrows. Corollary 4.18 uses the same generating convention and specifies the same vertex set as the full ribbon groupoid. No presentation theorem or lcm assertion is needed here.

We import the spherical nu-structure and its exterior formula from Godelle's Example 3.14 (third reference, printed/PDF p. 15). For every $I\subseteq S$ and $a\in S\setminus I$, that example gives $\nu_I(a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$. This supplies the equality with $r(I,a)$ directly; the endpoint lemma supplies its endpoint and exclusion from $A_I^+$. We do not reconstruct the proof attributed there to [15].

### Proof

**Given:** The spherical Artin system, its nu-structure, and the ambient ribbon definitions and conventions above.

**Goal:** Identify the generating family and all objects of the reduced subgroupoid.

1.1 The first external input identifies the ambient arrows with the triples in the Statement: conjugation by $g$ restricts to an isomorphism of the positive parabolic monoids exactly when $g^{-1}A_I^+g=A_J^+$. It then also conjugates the subgroups they generate. For composable arrows, $(gh)^{-1}A_I^+(gh)=h^{-1}(g^{-1}A_I^+g)h=A_K^+$; the identity and inverse conditions follow from the same equality. Hence the indicated operations form a groupoid on all the standard parabolic objects, and its positive arrows are precisely those with $g\in A^+$. [F1, F2, F3]

1.2 In the source's Section 4.2 notation, $\nu(I,s)$ means $\nu_I(s)$ only when the latter is outside $A_I^+$, whereas $\tau(I,s)$ denotes the internal case. By [F4], $\nu_I(s)=r(I,s)$ for $s\notin I$. By [F1], those values are outside $A_I^+$ and have the endpoints stated here, with the opposition convention of [F5], while the cases $s\in I$ are internal. Thus the outside cases are precisely $s\notin I$, with values $r(I,s)$. [F1, F3, F4, F5]

2.1 The second external input defines $\mathcal R^\nu(A)$ by these $\nu(I,s)$ and retains the full object set. Substituting the identification in step 1.2 gives exactly the claimed exterior generating family in the ambient groupoid of step 1.1. Subgroupoid generation on this object set consists of all finite composable words in these arrows and their inverses, including the empty word $(I,1,I)$ at every $I\subseteq S$, even when no exterior generator starts there. This set is closed under composition and inverses and lies in every subgroupoid on these objects containing the generators, so it is exactly the generated subgroupoid. No internal atom is added to the generating family, and no freeness or relations claim follows. [F2, F3, step 1.1, step 1.2] ∎


## Independent spherical ribbon splitting input

[Open item](item-thm-ribbon-normaliser-input-artin-tits-prerequisites) · level 8



### Statement

Let $(A,S)$ be a finite-rank spherical Artin system, with associated finite Coxeter system $(W,S)$. For $K\subseteq S$, write $W_K=\langle K\rangle$ and let $w_K$ be its unique longest element. In the canonical real reflection representation with simple-root basis $(e_s)_{s\in S}$, define the opposition permutation $\iota_K:K\to K$ by $w_Ke_s=-e_{\iota_K(s)}$ for $s\in K$. For $I\subseteq S$, let $A_I$ be the standard parabolic subgroup and $\Delta_I$ the positive lift of $w_I$, with $\Delta_\varnothing=1$. Give the conjugator groupoid $\operatorname{Conj}(A)$ arrows $g:I\to J$ exactly when $g^{-1}A_Ig=A_J$, and compose by multiplication from left to right. Let $\mathcal P$ be the totally disconnected subgroupoid with vertex groups $A_I$, and let $\mathcal R_\nu$ be the subgroupoid generated by $r(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$ for $a\notin I$, directed $I\to\iota_{I\cup\{a\}}(I)$. Then $\operatorname{Conj}(A)=\mathcal P\rtimes\mathcal R_\nu$. In particular $N_A(A_I)=A_I\rtimes(\mathcal R_\nu)_I$. The factorization of each conjugator is uniquely $g=pr$ with $p\in A_I$ and $r\in\mathcal R_\nu(I,J)$.

### Facts & Assumptions

[F1] The spherical positive monoid is a monoidal Garside structure with group of fractions $A$. ([thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites))

[F2] Composition and vertex group conventions are fixed in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).

[F3] The exterior elementary ribbons and their explicit endpoints are supplied by [lem-author-c81e5a0d2026-ribbon-endpoints](item-lem-author-c81e5a0d2026-ribbon-endpoints). Existence of the spherical nu-structure is the separate imported input [F7].

[F4] Those exterior atoms generate precisely the source's reduced subgroupoid $\mathcal R^\nu(A)$. ([lem-author-c81e5a0d2026-reduced-ribbon-generators](item-lem-author-c81e5a0d2026-reduced-ribbon-generators))

[F5] Unique conjugator factorization gives the normalizer semidirect decomposition as proved in [lem-author-c81e5a0d2026-vertex-splitting](item-lem-author-c81e5a0d2026-vertex-splitting).

[F6] The independent factorization theorem is imported explicitly below (source reference 0).

[F7] Every spherical Artin monoid with its standard Garside structure has a nu-structure, including both left and right nu-functions. In particular, for $a\notin I$ its left elementary value is $\nu_I(a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$. This is Godelle's Example 3.14, with nu-structure defined in Definition 3.12, imported below (source reference 1).

[F8] Finite parabolics have unique longest elements and opposition permutations characterized by $w_Ke_s=-e_{\iota_K(s)}$. These exist also for $K=\varnothing$, with its empty permutation. ([prop-finite-opposition-interface-artin-tits-prerequisites](item-prop-finite-opposition-interface-artin-tits-prerequisites))

### External input

Godelle's Example 3.14 states that every spherical Artin monoid has a nu-structure in the sense of Definition 3.12: both its left and right families of positive ribbon atoms satisfy the stated divisibility and lcm conditions. We import this existence result, with the exterior formulas $\nu_I(a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$ and $\widetilde\nu_I(a)=\Delta_{I\cup\{a\}}\Delta_I^{-1}$ for $a\notin I$. It applies to the standard spherical Garside structure of [F1]; no local proof of existence or reconstruction of the historical source [15] is claimed.

Godelle's Theorem 4.25(ii) is imported as an established conjugator-factorization theorem. Its objects are standard parabolic subgroups, its arrows satisfy $g^{-1}A_Ig=A_J$, and its composition is the product in $A$. It asserts $\operatorname{Conj}(A)=\mathcal P(A)\rtimes\mathcal R^\nu(A)$; Definitions 4.23–4.24 define this as unique factorization and transport of vertex factors. The paragraph after the theorem explicitly includes spherical Artin groups. For this adjudication we read the cited statements and definitions in the extracted text; their general proofs were not reconstructed. The endpoint and generator translation uses [F3]–[F4], and the vertex restriction uses [F5].

### Proof

**Given:** The spherical system and the groupoids in the statement.

**Goal:** Apply the independent splitting theorem with the correct generators, endpoints and product convention.

1.1 By [F1] the positive monoid and $A$ have the monoidal Garside/group-of-fractions relationship required by Theorem 4.25. By the independent spherical existence input [F7], Example 3.14 supplies the required nu-structure for this same positive monoid. Its positive parabolic objects and the corresponding standard parabolic subgroups are those used here. Thus the theorem's hypotheses are met. [F1, F6, F7]

1.2 By [F4] the source's $\mathcal R^\nu(A)$ equals exactly $\mathcal R_\nu$ as defined here. Every $W_K$ is finite because it is a subgroup of finite $W$, so [F8] supplies the opposition permutation used in those endpoints. Its elementary arrows therefore have exactly the endpoints proved in [F3]. The source's morphisms satisfy $g^{-1}A_Ig=A_J$ and its composition is group multiplication, precisely [F2] and the convention in our statement; no inversion or product reversal is being made. [F2, F3, F4, F6, F8]

2.1 Apply Theorem 4.25(ii), interpreted through Definitions 4.23–4.24. It gives unique factorization of every arrow as $g=pr$ with the indicated source-parabolic factor and reduced-ribbon factor. This proves the groupoid splitting. Applying [F5] at each object yields $N_A(A_I)=A_I\rtimes(\mathcal R_\nu)_I$, including $I=\varnothing$ and $I=S$. No assertion about arbitrary Artin type or the article's universal wall cover is used or obtained. [F5, F6, step 1.1, step 1.2] ∎


## The empty-object ribbon component and its braid relations

[Open item](item-lem-author-c73ab6d940e2-empty-ribbon-component) · level 8


### Statement

Let $(A,S)$ be a finite-rank spherical Artin system, so its associated Coxeter group $W$ is finite, and let $A^+$ be its positive monoid. For $I\subseteq S$, let $A_I^+$ be the standard parabolic submonoid generated by $I$ and let $\Delta_I$ be its standard Garside element, the positive lift of the longest element of $W_I$; in particular $\Delta_\varnothing=1$ and $\Delta_{\{a\}}=a$.

Use the ribbon category with objects $I\subseteq S$ and arrows $(I,g,J)$ satisfying $g^{-1}Ig=J$, with $g\in A^+$ for positive arrows and $g\in A$ for groupoid arrows. Equality requires equal endpoints and equal labels; composition is $(I,g,J)(J,h,K)=(I,gh,K)$. For $a\in S\setminus I$, the reduced generator has label $\nu(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$ and target $\nu(I,a)^{-1}I\nu(I,a)$. The reduced positive category and reduced groupoid are the subcategory and subgroupoid generated by these arrows.

At $I=\varnothing$, every reduced generator is the loop labelled $a$. This object is an isolated component: its reduced positive component is the one-object monoid $A^+$, and its reduced groupoid component is the one-object group $A$. For distinct $a,b\in S$, the lcm for left divisibility has exactly its two alternating braid paths of length $m_{ab}$, and these braid equalities present this component as a groupoid.

### Statement references

[thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites)

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-c73ab6d940e2-two-generator-lcm](item-lem-author-c73ab6d940e2-two-generator-lcm)

### Facts & Assumptions

[F1] The positive monoid embeds in its Artin group and both have their standard braid presentations. ([thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites))

[F2] Groupoid arrows retain their endpoints and composition is read from left to right. ([def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites))

[F3] The lcm of distinct positive generators has exactly the two alternating length-$m$ representatives. ([lem-author-c73ab6d940e2-two-generator-lcm](item-lem-author-c73ab6d940e2-two-generator-lcm))

[F4] The labelled ribbon construction is the independent input from Godelle, Definitions 3.7–3.8 and the monoidal description preceding Definition 3.12, recorded in External input.

[F5] The spherical nu-formula and reduced-generator convention are the independent input from Godelle, Example 3.14 and §4.2, recorded in External input.

### External input

Godelle, Definitions 3.7–3.8, defines the positive ribbon category and ribbon groupoid using conjugation of standard positive parabolics. In the monoidal description before Definition 3.12, a positive arrow $I\to J$ is a label $g\in A^+$ with $g^{-1}Ig=J$. Groupoid labels lie in $A$ with the same endpoint condition; the natural-transformation construction gives label equality at fixed endpoints and multiplication for composition.

For the spherical structure of F1, Example 3.14 supplies $\nu(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$ for $a\notin I$. The reduced-generator notation is from §4.2; the paragraph before Lemma 4.17 defines the reduced subcategory and subgroupoid generated by these arrows. These construction inputs are imported under the reference hypotheses; their general proofs are not reconstructed.

### Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 Take $\Delta_\varnothing=1$ and $\Delta_{\{a\}}=a$. F5 gives $\nu(\varnothing,a)=a$. By F4, conjugation of the empty generating subset again gives the empty subset, so its target is empty. Conversely a generator with empty target has empty source, since conjugation is a bijection between its source and target subsets. Hence no reduced edge connects this object to a nonempty one, in either orientation. [F1, F2, F4, F5, given]

2.1 Thus positive paths at this object are precisely positive words in the standard letters. By F4 they are equal exactly when their monoid labels are equal. Consequently this positive component is $A^+$. Allowing inverses gives precisely the subgroup of $A$ generated by $S$, namely $A$, with equality of group labels; F1 prevents extra positive equalities. Its group presentation is exactly the braid presentation read as a one-object groupoid presentation. By F3 each generator-pair lcm has exactly its two alternating word representatives. Every such word is a path at the empty object, and every reduced path there is such a word, so these are exactly its two lcm paths. [F1, F2, F3, F4, step 1.1] ∎


## Reduced-ribbon lcm presentation including the empty subset

[Open item](item-thm-ribbon-lcm-input-artin-tits-prerequisites) · level 9


### Statement

Let $A^+$ be the positive monoid of a finite-rank spherical Artin system on $S$, and $A$ its Artin group; identify each $s\in S$ with its standard positive generator. For $I\subseteq S$, let $W_I$ be the standard parabolic Coxeter subgroup, $w_I$ its longest element, and $\Delta_I$ its positive reduced-word lift in $A^+$. In particular $\Delta_\varnothing=1$. Write $A_I^+$ for the submonoid generated by $I$, including the empty product, and $A_I$ for the subgroup generated by $I$.

Use the ambient ribbon groupoid with objects all subsets $I\subseteq S$ and arrows $(I,g,J)$ for $g\in A$ satisfying $g^{-1}A_I^+g=A_J^+$. Arrows are equal exactly when their triples are equal. Composition is $(I,g,J)(J,h,K)=(I,gh,K)$, the identity at $I$ is $(I,1,I)$, and the inverse of $(I,g,J)$ is $(J,g^{-1},I)$. Positive arrows have $g\in A^+$.

For $I\subseteq S$ and $a\notin I$ put $\nu(I,a)=\Delta_I^{-1}\Delta_{I\cup\{a\}}$. This is positive, and $\nu(I,a)^{-1}I\nu(I,a)$ is a subset $J$ of $S$; regard it as the arrow $(I,\nu(I,a),J)$. Let $R^\nu(A)$ be the subgroupoid on the full object set generated by these arrows, their inverses and all object identities. Here a reduced-ribbon path is a finite composable sequence of the positive generators $\nu(I,a)$, and its label is their product in $A^+$. For each $I\subseteq S$ and distinct $a,b\notin I$, let $d$ be the lcm of $\nu(I,a)$ and $\nu(I,b)$ for left divisibility in $A^+$. Among reduced-ribbon paths with source $I$, exactly two have label $d$, one starting with each of these arrows. These two paths represent the same ribbon arrow with source $I$ and label $d$. The groupoid $R^\nu(A)$ has a presentation by the displayed generators and the equalities between these two paths for every such $I,a,b$. This includes $I=\varnothing$: then $\nu(\varnothing,a)=a$, and the two paths are the alternating braid words of length $m_{ab}$.

### Statement references

[thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites)

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence)

[lem-author-c73ab6d940e2-short-two-letter-rigidity](item-lem-author-c73ab6d940e2-short-two-letter-rigidity)

[lem-author-c73ab6d940e2-braid-class-two-words](item-lem-author-c73ab6d940e2-braid-class-two-words)

[lem-author-c73ab6d940e2-two-generator-lcm](item-lem-author-c73ab6d940e2-two-generator-lcm)

[lem-author-c73ab6d940e2-empty-ribbon-component](item-lem-author-c73ab6d940e2-empty-ribbon-component)

[lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation)

[lem-author-c81e5a0d2026-ribbon-endpoints](item-lem-author-c81e5a0d2026-ribbon-endpoints)

[lem-author-c81e5a0d2026-reduced-ribbon-generators](item-lem-author-c81e5a0d2026-reduced-ribbon-generators)

### Facts & Assumptions

[F1] The positive monoid, standard generators, Garside structure and both-sided lcms are supplied by [thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites); arrows, inverses and traversal-order composition use [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).

[F2] The positive braid congruence preserves support and degree, short two-letter words are rigid, and a full braid word has exactly its two alternating representatives. ([lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence), [lem-author-c73ab6d940e2-short-two-letter-rigidity](item-lem-author-c73ab6d940e2-short-two-letter-rigidity), [lem-author-c73ab6d940e2-braid-class-two-words](item-lem-author-c73ab6d940e2-braid-class-two-words))

[F3] The pairwise generator lcm is that full braid word. ([lem-author-c73ab6d940e2-two-generator-lcm](item-lem-author-c73ab6d940e2-two-generator-lcm))

[F4] The empty ribbon object is an isolated one-object component with exactly this Artin presentation. ([lem-author-c73ab6d940e2-empty-ribbon-component](item-lem-author-c73ab6d940e2-empty-ribbon-component))

[F5] The parabolic longest elements, their well-defined positive lifts $\Delta_I$ and the submonoids $A_I^+$ and subgroups $A_I$ are supplied by [lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation).

[F6] Each $\nu(I,a)$ with $a\notin I$ is positive and has an endpoint $J\subseteq S$ with $\nu(I,a)^{-1}I\nu(I,a)=J$ and $\nu(I,a)^{-1}A_I^+\nu(I,a)=A_J^+$. ([lem-author-c81e5a0d2026-ribbon-endpoints](item-lem-author-c81e5a0d2026-ribbon-endpoints))

[F7] The ambient tagged-arrow ribbon groupoid and its full-object-set reduced subgroupoid are specified by [lem-author-c81e5a0d2026-reduced-ribbon-generators](item-lem-author-c81e5a0d2026-reduced-ribbon-generators); the latter is generated exactly by the exterior elementary arrows used here.

### External input

Godelle supplies the existence and formula of the spherical nu-structure (Example 3.14), the reduced-ribbon groupoid presentation by lcm relations (Theorem 4.14(3) and Corollary 4.18), and the exactly-two-path theorem for the ribbon with specified nonempty source $I$ (Proposition 4.19). These are imported only under the exact hypotheses recorded in the source reference. Their proofs are not claimed as locally reconstructed. The empty-object extension is a local consequence of the positive braid presentation.

### Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 The operations in the Statement form a groupoid: for composable triples, $(gh)^{-1}A_I^+(gh)=h^{-1}(g^{-1}A_I^+g)h=A_K^+$, and the same conjugation equality gives the inverse condition; associativity and the identity laws are inherited from $A$. F5 defines $\Delta_I$ for every subset, and F6 ensures that each displayed positive generator has its stated endpoint. By F7 this ambient groupoid and its generated subgroupoid are exactly the ones used in Godelle's reduced-ribbon conventions. [F1, F5, F6, F7, given]

2.1 Apply the external contracts to the spherical Garside monoid of F1 and the identified reduced subgroupoid. Example 3.14 supplies its nu-structure and identifies the generators; Corollary 4.18 gives the reduced subgroupoid presentation, with relation (3) identifying two paths with source $I$ representing the ribbon labelled by the pairwise lcm $d$. For nonempty $I$, Proposition 4.19 supplies exactly two reduced-ribbon paths with source $I$ and label $d$, with the required initial arrows; both represent that ribbon arrow. The source hypotheses are precisely spherical type, nonempty $I$, and distinct $a,b$ outside $I$. [F1, F7, step 1.1]

3.1 For empty $I$, F2 and F3 give the two alternating representatives of its generator lcm $d$, and F4 identifies these words with exactly the two reduced-ribbon paths with source $\varnothing$ and label $d$. Both represent the loop $(\varnothing,d,\varnothing)$. F4 also proves that the empty-object component has precisely the standard braid presentation. Thus this case is supplied independently of the nonempty hypothesis in Proposition 4.19. Together with the general presentation contract this proves the assertion for every subset. [F2, F3, F4, step 2.1] ∎
