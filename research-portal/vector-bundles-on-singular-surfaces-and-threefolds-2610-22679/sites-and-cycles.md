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

A subset is open-and-closed, or clopen, if it is both open and closed. A connected component is a maximal connected subset; connected means that the subspace cannot be partitioned into two nonempty open subsets. A function is locally constant if every point has an open neighbourhood on which it is constant. Noetherian means that descending chains of closed subsets stabilize. Density means that every nonempty open subset of $X$ meets $U$.

### Statement references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
[A1] The Axiom of Choice is assumed; it is used through the finite decomposition supplier below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, a Noetherian topological space is a finite union of irreducible closed subsets. An irreducible space is nonempty and cannot be expressed as a union of two proper closed subsets. [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[F2] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$, and a $k$-morphism is a scheme morphism commuting with the structure morphisms. Scheme morphisms are morphisms of the underlying locally ringed spaces. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[F3] The scheme $Y_A$ is the disjoint union of copies of $\operatorname{Spec}k$: each copy is open and closed, and its structure morphism to $\operatorname{Spec}k$ is the identity. Morphisms of locally ringed spaces glue uniquely over an open cover when their restrictions agree on overlaps; this follows by gluing their continuous maps and compatible sheaf maps, with locality checked on stalks. [F2]

### Proof
**Given:** A field $k$, a finite set $A$, a Noetherian $k$-scheme $X$, and the Axiom of Choice.

**Goal:** Establish the stated bijections and injectivity of restriction.

1.1 By [F1], write $X$ as a finite union of irreducible closed subsets $C_1,\ldots,C_n$, allowing $n=0$. Each $C_i$ is connected: a separation by two nonempty relatively open subsets would express it as a union of two proper relatively closed subsets. Form the finite graph with vertices $i$ and an edge whenever $C_i\cap C_j\ne\varnothing$. For each graph component, the union of its $C_i$ is connected, since a finite chain of intersecting connected sets has connected union. These unions are pairwise disjoint, closed, and cover $X$; each is also open because its complement is a finite union of the other closed unions. Any connected subset meeting one such union lies entirely inside it, since otherwise the two clopen parts would separate that subset. Thus these unions are exactly the connected components of $X$, and they are clopen. The empty-space case has no components. [F1, A1, given]

1.2 Let $f:X\to Y_A$ be a $k$-morphism. The inverse images $X_a=f^{-1}(\operatorname{Spec}k\text{ in summand }a)$ are pairwise disjoint clopen subsets covering $X$. Conversely, given such a decomposition, the restriction of the structure morphism $X\to\operatorname{Spec}k$ to $X_a$, followed by the inclusion of summand $a$, is a $k$-morphism $X_a\to Y_A$. These morphisms glue uniquely because the open sets are disjoint. On each $X_a$ any $k$-morphism landing in summand $a$ must equal this composite: commuting with the structure map forces its map to that copy of $\operatorname{Spec}k$ to be the structure morphism. The two constructions are therefore inverse, including when $A$ or $X$ is empty. [F2, F3, given]

2.1 A clopen decomposition assigns each connected component to exactly one $X_a$: the intersections of a connected component with the $X_a$ are disjoint open subsets covering it, so two nonempty intersections would separate it. Conversely, by [step 1.1], the union of components assigned to each $a$ is clopen: there are only finitely many components, each clopen. These constructions are inverse. Pullback of the decomposition shows the bijections are natural in $X$; relabelling summands shows naturality in $A$. [step 1.1, step 1.2]

3.1 Let $f,g:X\to\mathbb Z$ be locally constant and agree on dense $U$. The set $D=\{x:f(x)\ne g(x)\}$ is open: at each point, intersect neighbourhoods on which $f$ and $g$ are respectively constant. If $D$ were nonempty it would meet $U$, contradicting agreement there. Thus $D$ is empty and $f=g$; restrictions remain locally constant in the subspace topology. In particular, a dense subset meets every nonempty clopen connected component by [step 1.1], so the stated special case follows. [given, step 1.1] ∎

## Levine–Weibel zero cycles

[Open item](item-def-levine-weibel-zero-cycles) · level 0

### Definition
Assume the Axiom of Choice. Let $k$ be a perfect field and let $X$ be a reduced equidimensional quasi-projective $k$-scheme of dimension $d\geq 1$. Here reduced means that the local rings have no nonzero nilpotents, equidimensional means that all irreducible components have dimension $d$, and quasi-projective means that $X$ is an open subscheme of a projective $k$-scheme. A perfect field is one whose algebraic extensions are separable. Write $U=X_{\mathrm{reg}}$ for the smooth locus of $X$ over $k$ and $Y=X_{\mathrm{sing}}=X\setminus U$ with its reduced closed subscheme structure. Let $Z_0(X,Y)$ be the free abelian group on the closed points of $U$.

A **Cartier curve relative to $Y$** is a reduced, purely one-dimensional closed subscheme $C\hookrightarrow X$ such that no irreducible component of $C$ is contained in $Y$, and, at every point $x\in C\cap Y$, the ideal of $C$ in $\mathcal O_{X,x}$ is generated by a regular sequence. Purely one-dimensional means that every irreducible component has dimension one. A regular sequence $a_1,\ldots,a_r$ in a local ring means that $(a_1,\ldots,a_r)$ is proper and each $a_i$ is a non-zero-divisor modulo the preceding elements; the empty sequence is allowed.

For such a curve let $C_1,\ldots,C_r$ be its irreducible components with generic points $\eta_i$, and put $S=(C\cap Y)\cup\{\eta_1,\ldots,\eta_r\}$. Let $\mathcal O_{C,S}=\varinjlim_{S\subset V}\Gamma(V,\mathcal O_C)$, where $V$ runs through open neighborhoods of $S$. For $f\in\mathcal O_{C,S}^{\times}$, let $f_i\in k(C_i)^\times$ be its restriction to $\eta_i$, where $k(C_i)$ is the function field of the integral curve $C_i$. Form the finite zero-cycle
$$\operatorname{div}_C(f)=\sum_{i=1}^r\operatorname{div}_{C_i}(f_i),$$
viewed on $X$ through the closed immersions $C_i\hookrightarrow X$. For an integral curve $D$ and $g\in k(D)^\times$, its principal divisor is $\sum_{x\in D\text{ closed}}\operatorname{ord}_{\mathcal O_{D,x}}(g)[x]$: writing $g=a/b$ with nonzero $a,b\in\mathcal O_{D,x}$, the coefficient is $\operatorname{length}(\mathcal O_{D,x}/(a))-\operatorname{length}(\mathcal O_{D,x}/(b))$.

Let $R_0^{LW}(X,Y)$ be the subgroup of $Z_0(X,Y)$ generated by all $\operatorname{div}_C(f)$ for these curves and units. The **Levine–Weibel Chow group of zero cycles** is
$$\operatorname{CH}_0^{LW}(X)=Z_0(X,Y)/R_0^{LW}(X,Y).$$
This construction uses regular-point generators and the specified Cartier-curve relations; it is not the definition of the unrestricted ordinary Chow group on a singular scheme.

### Facts & Assumptions

**Given:** The field, scheme, curves and functions in the definition, and the Axiom of Choice.

**Goal:** Show that the displayed relations are finite cycles supported on $U$ and that the quotient is well defined.

[F1] For an integral finite-type curve over a field, the principal-divisor construction is independent of the local fraction representing the function and has finite support. The published construction assumes the Axiom of Choice for its order function ([math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Justification

1.1 The noetherian curve $C$ has finitely many irreducible components. Since none is contained in the closed subset $Y$, the closed subset $C\cap Y$ has dimension zero: any irreducible closed subset of it lies properly inside a one-dimensional component of $C$. A zero-dimensional noetherian space has finitely many points, all closed. Thus $S$ is finite. Each component with its reduced induced structure is an integral finite-type curve. [given, construct]

2.1 A unit in the displayed colimit is represented, after shrinking its open neighborhood of $S$, by a regular function with a regular inverse there. Its restriction to each generic point is therefore a nonzero rational function. By [F1], each component divisor is a well-defined finite zero-cycle, so their finite sum is a finite zero-cycle on $X$. [F1, step 1.1, construct]

3.1 At every $x\in C\cap Y$, the representatives of $f$ and its inverse map to inverse elements of $\mathcal O_{C_i,x}$ for each component through $x$. Their order in that local domain is zero: in the length formula both quotients by these units have length zero. Hence the component divisors have no coefficient at any point of $Y$, and their sum belongs to $Z_0(X,Y)$. [F1, step 2.1]

4.1 The set of these cycles generates a subgroup of the free abelian group $Z_0(X,Y)$, and the quotient by that subgroup is an abelian group. The definition of the generators is independent of representatives by steps 2.1 and 3.1, so the displayed quotient is well defined. [step 2.1, step 3.1, construct] ∎

## Euler class group presentation

[Open item](item-def-euler-class-group-presentation) · level 0

### Definition
Let $k$ be an algebraically closed field and let $A$ be a reduced, finitely generated commutative $k$-algebra of Krull dimension $d\geq2$. The **height** of an ideal is the least height of a prime containing it; the height of a prime is the supremum of the lengths of chains of primes ending there. An ideal $J$ is **$\mathfrak m$-primary** if $\sqrt J=\mathfrak m$ and $ab\in J$, $a\notin J$ imply $b\in\mathfrak m$.

Let $F(A)$ be the free abelian group on the set of pairs $(J,\omega_J)$ in which $J$ is an $\mathfrak m$-primary ideal of height $d$ for a maximal ideal $\mathfrak m$, and $\omega_J:(A/J)^d\twoheadrightarrow J/J^2$ is an $A/J$-linear surjection. The map is called an **orientation** here; distinct surjections are distinct generators.

For an ideal $I$ of height $d$ and an orientation $\omega_I:(A/I)^d\twoheadrightarrow I/I^2$, write its unique irredundant primary decomposition as $I=\bigcap_i J_i$, where $J_i$ is $\mathfrak m_i$-primary for distinct maximal ideals. The Chinese remainder identifications induce orientations $\omega_{J_i}:(A/J_i)^d\twoheadrightarrow J_i/J_i^2$. Put
$$[(I,\omega_I)]=\sum_i[(J_i,\omega_{J_i})]\in F(A).$$
An orientation is **globally lifted** if there is an $A$-linear surjection $\widetilde\omega:A^d\twoheadrightarrow I$ whose induced map modulo $I$ is $\omega_I$. Let $K(A)$ be the subgroup generated by all $[(I,\omega_I)]$ with globally lifted orientation. The **Euler class group** in this presentation is the quotient $E(A)=F(A)/K(A)$. This definition asserts no comparison with a motivic group.

### Justification
**Given:** $A$, $d$, $I$, and $\omega_I$ as above.

**Goal:** Show that the component sum and quotient are well defined.

1.1 The ring $A$ is Noetherian because it is a finitely generated algebra over a field. Every prime containing $I$ has height at least $d$ and at most $\dim A=d$, so it is maximal. Thus $B=A/I$ is a Noetherian ring of dimension zero. [assume-hyp]

1.2 The spectrum of a Noetherian ring is a Noetherian topological space: ascending chains of ideals stabilize. Such a space is a finite union of irreducible closed subsets; otherwise a maximal closed counterexample could be split into two smaller closed subsets. Every nonempty irreducible closed subset of $\operatorname{Spec}B$ has a generic prime, and that prime is maximal. Hence $B$ has finitely many maximal ideals $\mathfrak n_1,\ldots,\mathfrak n_r$. The empty-spectrum case gives the zero ring and the empty sum. [step 1.1]

1.3 The nilradical $N$ of $B$ is the intersection of these maximal ideals. It is finitely generated, and each of its generators is nilpotent, so $N^s=0$ for some $s$. Distinct maximal ideals are comaximal, so their powers $\mathfrak n_i^s$ are pairwise comaximal and their product is $N^s=0$. The Chinese remainder map therefore gives $B\cong\prod_i B/\mathfrak n_i^s$. Each factor is local with nilpotent maximal ideal, hence its zero ideal is primary: an element outside the maximal ideal is a unit. Pulling the kernels of the factor projections back to $A$ gives an irredundant decomposition $I=\bigcap_i J_i$ with $J_i$ primary and radical the inverse image $\mathfrak m_i$ of $\mathfrak n_i$. [step 1.2, construct]

1.4 This decomposition is unique. Indeed, in any irredundant primary decomposition of $I$, the radicals are precisely the maximal ideals containing $I$: their intersection is $\sqrt I$, and primality and maximality force the two finite sets of radicals to coincide. Localizing at $\mathfrak m_i$ makes every other component the unit ideal. An $\mathfrak m_i$-primary ideal is the contraction of its localization at $\mathfrak m_i$, since multiplication by an element outside $\mathfrak m_i$ cannot carry an element outside the ideal into it. Thus its component is necessarily $IA_{\mathfrak m_i}\cap A$. [step 1.3]

1.5 Write $L_i=\bigcap_{j\ne i}J_j$. The ideals $J_i$ and $L_i$ are comaximal, so $I=J_iL_i$, $I+J_i^2=J_i$, and $I\cap J_i^2=IJ_i$. Consequently inclusion induces an isomorphism
$$(I/I^2)\otimes_{A/I} A/J_i\;\cong\; I/IJ_i\;\cong\;J_i/J_i^2.$$
Tensoring $\omega_I$ with $A/J_i$ and using this isomorphism yields the stated surjection $\omega_{J_i}$. By step 1.4, neither the component ideals nor their induced maps depend on a decomposition choice. [step 1.4, construct]

1.6 The indicated pairs form a set, so the free abelian group exists. The globally lifted component sums form a subset of it; their integer span is a subgroup, and its cosets form an abelian quotient. Steps 1.4–1.5 establish that each relation is unambiguous. [step 1.4, step 1.5, construct] ∎

## Small sites and the plus construction

[Open item](item-def-author-cf6ede58b450-site-plus-data) · level 0

### Definition
Fix Grothendieck universes U in V. Let C be a U-small category. A sieve R on an object X is a set of arrows with codomain X closed under precomposition. For f: Y → X, its pullback f*R is the sieve of arrows g into Y for which fg belongs to R. A Grothendieck topology J assigns to each X a set J(X) of covering sieves such that the maximal sieve covers, pullbacks of covering sieves cover, and a sieve S covers X whenever there is a covering sieve R on X for which f*S covers the domain of f for every f in R. The pair (C,J) is a small site.

A presheaf of sets is a contravariant functor F from C to V-small sets. A matching family of F on R is a choice of an element $s_f$ in F(dom f) for every f in R, compatible with restriction along every arrow into dom f. Write Match(R,F) for the set of such families. The canonical map F(X) → Match(R,F) restricts a section to all arrows of R. The presheaf is separated if this map is injective for every covering sieve and a sheaf if it is bijective for every covering sieve.

For a presheaf F, define F+(X) to be pairs (R,s), with R covering X and s in Match(R,F), modulo the relation that two families agree after restriction to some common covering subsieve. For f: Y → X, restrict a representative to f*R by assigning to g the value $s_{fg}$. The unit $\eta_F$ sends a section of F(X) to its restrictions on the maximal sieve.

### Justification
Sieves and matching families are sets, and the indicated pairs form a V-small set because C is U-small and F has V-small values. The topology axioms make pullbacks and covering refinements available. The subsequent lemmas establish that the displayed relation is an equivalence relation, that restriction is well defined and functorial, and that $\eta_F$ is natural; those assertions are not assumed here.

## Restriction of finite-support divisors

[Open item](item-lem-author-4057f3195e4f-free-boundary) · level 0

### Statement
Let $S$ be a set and $B\subseteq S$. Write $\mathbb Z^{(S)}$ for the abelian group of integer-valued functions on $S$ with finite support. Restriction to $S\setminus B$ gives an exact sequence $\mathbb Z^{(B)}\to\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}\to0$, where the first map extends functions by zero.

### Facts & Assumptions

**Given:** A set $S$ and a subset $B$.

**Goal:** Prove the displayed sequence exact.

### Proof

1.1 Extension by zero and restriction preserve finite support and addition. Every finitely supported function on $S\setminus B$ extends by zero to $S$, so restriction is surjective. [given, construct]

2.1 A finitely supported function on $S$ restricts to zero on $S\setminus B$ exactly when its support is contained in $B$; it is then the extension by zero of its restriction to $B$. This proves exactness. [step 1.1] ∎

## Quotienting a compatible surjection

[Open item](item-lem-author-4057f3195e4f-quotient-restriction) · level 0

### Statement
Let $r:A\to D$ be a surjective homomorphism of abelian groups, and let $P\subseteq A$ be a subgroup. Then $r$ induces a surjection $\bar r:A/P\to D/r(P)$ whose kernel is $(\ker r+P)/P$.

### Facts & Assumptions

**Given:** $r$, $A$, $D$ and $P$ as stated. A quotient $A/P$ consists of cosets with addition induced by that of $A$.

**Goal:** Establish the induced map, its surjectivity and its kernel.

### Proof

1.1 Define $\bar r(a+P)=r(a)+r(P)$. If $a-a'\in P$, then $r(a)-r(a')\in r(P)$, so this assignment is well-defined and is a homomorphism. Surjectivity follows from that of $r$. [given, construct]

2.1 The coset $a+P$ lies in the kernel exactly when $r(a)=r(p)$ for some $p\in P$, equivalently $a-p\in\ker r$. Thus the kernel is precisely $(\ker r+P)/P$. [step 1.1] ∎

## Transporting an exact sequence through isomorphisms

[Open item](item-lem-author-4057f3195e4f-transfer-exactness) · level 0

### Statement
Suppose $H\xrightarrow{a}A\xrightarrow{b}D\to0$ is exact, and $u:A\to A'$ and $v:D\to D'$ are isomorphisms of abelian groups. Then $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

### Facts & Assumptions

**Given:** The homomorphisms and exactness in the statement. Exactness means $b$ is surjective and $\ker b=\operatorname{im}a$.

**Goal:** Prove exactness after transport.

### Proof

1.1 The transported map $vbu^{-1}$ is surjective because $u^{-1}$ and $v$ are surjective and $b$ is surjective. [given]

2.1 Since $v$ is injective, $a'\in\ker(vbu^{-1})$ exactly when $u^{-1}(a')\in\ker b=\operatorname{im}a$. This is equivalent to $a'\in\operatorname{im}(ua)$, as required. [given, step 1.1] ∎

## Degree-zero representatives modulo a boundary class

[Open item](item-lem-author-4057f3195e4f-degree-adjustment) · level 0

### Statement
Let $q:A\to D$ and $\deg:A\to\mathbb Z$ be homomorphisms of abelian groups. If $q$ is surjective and there is $e\in\ker q$ with $\deg(e)=1$, then $q$ maps $\ker(\deg)$ onto $D$.

### Facts & Assumptions

**Given:** The homomorphisms and element in the statement.

**Goal:** Find a degree-zero preimage of every element of $D$.

### Proof

1.1 Given $y\in D$, choose $a\in A$ with $q(a)=y$ and put $a_0=a-\deg(a)e$. Then $\deg(a_0)=\deg(a)-\deg(a)\deg(e)=0$. [given, choose, construct]

2.1 Since $q(e)=0$, we also have $q(a_0)=q(a)=y$. Thus every $y$ has a preimage in $\ker(\deg)$. [given, step 1.1] ∎

## Completion, divisors and degree on smooth curves

[Open item](item-lem-author-4057f3195e4f-curve-geometric-input) · level 0

### Statement
For a regular integral separated curve of finite type over a perfect field, there is a smooth projective integral curve containing it as a dense open subscheme with finite closed-point complement; if the original curve is affine, that complement is nonempty. On a smooth integral finite-type curve, the divisor class group, defined as finite integer sums of closed points modulo principal divisors of nonzero rational functions, identifies naturally with the Picard group by sending a closed point to its associated line bundle. Restriction to a nonempty open subset corresponds to deleting divisor coefficients outside that subset. On a smooth projective curve over an algebraically closed field, degree is an additive homomorphism on the Picard group, the class of a closed point has degree equal to its residue-field degree, and its kernel is the group of rational points of the degree-zero Picard variety.

### External input

The completion and nonproperness assertions are imported from the first reference. Its curve convention includes separatedness (Definitions 33.43.1 and 33.3.1); the completion assertion uses that convention explicitly. The subsequent divisor comparison retains its locally Noetherian integral scope. For the divisor comparison, smooth-curve local rings are fields or discrete valuation rings, hence UFDs; the second reference supplies the isomorphism. Its construction by orders of meromorphic sections is compatible with restriction because the same local rings and orders occur at points of the open subset. The third reference gives the degree formula, using that a closed point on a smooth curve is an effective Cartier divisor. The fourth gives the stated Picard-variety identification. These are external inputs; their proofs are not claimed to have been reconstructed here.

## Coordinate faces of the algebraic simplex

[Open item](item-lem-author-89250b1d710c-face-coordinate-geometry) · level 0

### Statement
Let $k$ be a field, $n\geq 0$, $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$, and $X$ a $k$-scheme. For a proper subset $I\subsetneq\{0,\ldots,n\}$, the coordinate face $F_I=V(t_i:i\in I)$ is canonically $\Delta^{n-|I|}$ after ordering the remaining coordinates. On each nonempty affine open of $X$, the coordinates indexed by $I$ form a regular sequence in any order: successive multiplication is injective and the final quotient is nonzero. Imposing all coordinates gives the empty scheme. If $\delta_i^n$ inserts zero at position $i$, then for $0\leq i<j\leq n$ and $n\geq2$, $\delta_j^n\delta_i^{n-1}=\delta_i^n\delta_{j-1}^{n-1}$.

### Facts & Assumptions

**Given:** The field, scheme, coordinates and index set in the Statement.

**Goal:** Establish the face descriptions, regular sequences and coordinate identities.

[F1] On an affine open $\operatorname{Spec}B\subset X$, the product ring is $B[t_0,\ldots,t_n]/(\sum t_a-1)$; quotienting by the indicated coordinates gives the face.

### Proof

1.1 Choose $b\notin I$. Eliminate $t_b$ using $t_b=1-\sum_{a\ne b}t_a$. The product ring becomes a polynomial ring in the remaining coordinates over $B$, and quotienting by the coordinates in $I$ leaves a polynomial ring in $n-|I|$ variables. For $B=k$ this gives the indicated simplex with its ordered barycentric coordinates. [F1, construct]

2.1 Multiplication by an indeterminate in a polynomial ring is injective by coefficient comparison. After quotienting by earlier distinct indeterminates, the remaining ring is again polynomial over $B$. Thus the sequence is regular in every order on a nonempty affine open. If all coordinates vanish, $\sum t_a=1$ becomes $0=1$, so the resulting scheme is empty. [step 1.1, algebra]

3.1 Both displayed composites insert zero in positions $i$ and $j$ and leave the other coordinates in their original order. Their coordinate maps agree, proving the identity and the lemma. [step 1.1, algebra] ∎


## Length multiplicity for one proper Cartier face

[Open item](item-lem-author-89250b1d710c-cartier-face-length) · level 0

### Statement
Let $(A,\mathfrak m)$ be a noetherian commutative local ring, $t\in\mathfrak m$ a nonzerodivisor on $A$, and $I$ a prime ideal with $t\notin I$ and $\sqrt{I+(t)}=\mathfrak m$. Put $M=A/I$. For the free resolution $Q=(0\to A\xrightarrow{t}A\to0)$ of $A/(t)$, the homology of $Q\otimes_A M$ is $A/(I,t)$ in degree zero and zero in positive degrees. The nonzero module $A/(I,t)$ has finite length. Hence the alternating sum of these homology lengths is $\ell_A(A/(I,t))$. This length is unchanged by an isomorphism of local rings carrying the ideals to their counterparts, or by replacing $t$ by a unit multiple.

### Facts & Assumptions

**Given:** The ring, element and prime ideal in the Statement.

**Goal:** Compute the specified-resolution Tor groups and their length Euler characteristic.

[F1] Specified-resolution Tor is the homology of the chosen projective resolution tensored with the other module. [math:def-tor-by-resolving-the-right-module](https://alphabetamath.cc/item/def-tor-by-resolving-the-right-module)

[F2] Length is the number of simple factors in a composition series, independent of the series. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

### Proof

1.1 Since multiplication by $t$ is injective on $A$, $Q$ is a free resolution of $A/(t)$. Tensoring with $M$ gives $0\to M\xrightarrow{t}M\to0$. The quotient $M$ is a domain and the image of $t$ is nonzero, so the map is injective and its cokernel is $A/(I,t)$. This proves the homology computation. [given, F1, algebra]

1.2 Let $J=I+(t)$ and choose generators $x_1,\ldots,x_s$ of $\mathfrak m$. Since $\sqrt J=\mathfrak m$, choose positive $e_a$ with $x_a^{e_a}\in J$. Every monomial of total degree $N=1+\sum_a(e_a-1)$ contains some $x_a^{e_a}$, so $\mathfrak m^N\subset J$; if $s=0$, take $N=1$. [given, construct, algebra]

2.1 Filter $A/J$ by the images of the powers of $\mathfrak m$ through $\mathfrak m^N$. Each factor is finitely generated and killed by $\mathfrak m$, hence is a finite-dimensional vector space over $A/\mathfrak m$. Refining by basis flags gives a finite composition series. Also $J\subset\mathfrak m$, so $A/J\ne0$. The Euler characteristic is therefore the stated length. [F2, step 1.1, step 1.2, construct]

3.1 A local-ring isomorphism carries composition series to composition series, and a unit multiple of $t$ generates the same ideal. The length is consequently unchanged, completing the proof. [F2, step 2.1, algebra] ∎


## Cycle coefficients and face intersections are open local

[Open item](item-lem-author-89250b1d710c-cycle-open-locality) · level 0

### Statement
On a noetherian scheme $Y$, a cycle means a finite integral linear combination of integral closed subschemes with their reduced structures. For an open $V\subset Y$, restrict $[W]$ to $[W\cap V]$ when nonempty and to zero otherwise. Equality of cycles can be tested on any open cover. The condition that each component of an intersection has a specified codimension in the ambient scheme is open local. For $Y=X\times\Delta^n$ with $X$ finite type over a field, a coordinate-face intersection whose coefficient at a component $T$ is $\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))$, whenever these lengths are defined, commutes with restriction to $U\times\Delta^{n-1}$ for every open $U\subset X$.

### Facts & Assumptions

**Given:** The cycles and opens in the Statement, and the indicated finite-length formula when used.

**Goal:** Establish local detection and compatibility with restriction.

[F1] A function on generators extends uniquely to a homomorphism from a free abelian group. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F2] An isomorphism of local rings carrying a parameter to its counterpart identifies their quotient modules. Its induced equivalence on module categories carries strict submodule chains and simple quotients bijectively, and therefore preserves every finite composition length. This observation does not require the parameter to be a nonzerodivisor.

### Proof

1.1 A nonempty open subset of an integral scheme is integral and contains its generic point. Distinct integral closed subschemes cannot have the same nonempty restriction to $V$, since taking its closure recovers the original reduced closed subscheme. The stated restriction therefore extends by [F1]. [F1, construct]

2.1 If a cycle has a nonzero coefficient at $W$, some member of the cover contains its generic point. The coefficient survives there and does not collide with another generator by step 1.1. Applying this observation to a difference proves local detection of equality. [step 1.1, algebra]

2.2 Components of a closed subset that meet an open restrict to precisely its components there: their generic points survive, and taking closures recovers the originals. At each surviving generic point the original and restricted ambient local rings agree, so the codimension, measured by chains of specializations in that local ring, agrees. Thus the specified codimension condition is local on the ambient scheme. [given, step 1.1]

3.1 A face-intersection component meeting $U\times\Delta^n$ has the same generic point and local ring of $W$ after restriction. The stalk-ring isomorphism identifies the face parameter, so it identifies the quotient modules and their finite composition series by [F2]. Its coefficient is therefore unchanged, even when the parameter vanishes on $W$; components missing the open contribute zero on both sides. Equality follows coefficientwise and extends to signed cycles by linearity. Steps 2.1 through 3.1 prove the assertions. [F2, step 1.1, step 2.2, algebra] ∎

## External input for simplicial Bloch cycle groups

[Open item](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input) · level 0

### Statement
Let $k$ be a field and $X$ a separated equidimensional smooth scheme of finite type over $k$. For $r\geq0$, the free groups on codimension-$r$ integral closed subschemes of $X\times\Delta^n$ meeting every coordinate face properly form a simplicial abelian group under face-intersection pullbacks with the cited local Tor multiplicities. In particular, their face maps obey $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ for $i<j$, as equalities of cycles before quotienting by rational equivalence.

### External input
This is the smooth separated equidimensional restriction of Definition 17.1 and the intersection convention in Appendix 17A. The compatibility of successive intersection multiplicities is imported; no local reconstruction of general intersection theory is claimed.


## External geometric inputs for affine reduction

[Open item](item-thm-author-89250b1d710c-smooth-local-geometry-input) · level 0

### Statement
A scheme smooth over a field is regular and normal. If it is also noetherian, its irreducible components are disjoint normal integral open-and-closed subschemes. Consequently a smooth finite-type scheme over a field admits a cover by integral smooth affine opens, each separated and equidimensional.

### External input
Import the two cited Stacks results with their stated hypotheses. A noetherian space has finitely many irreducible components, so their open complements are finite unions of closed components. Affine opens inside the components give the stated cover: smoothness restricts to opens, affine schemes are separated, and an integral scheme has one irreducible component. This last sentence is the application of the imported results.


## Kernel models the homotopy fiber when the cokernel is acyclic

[Open item](item-lem-author-75596422a482-kernel-homotopy-fiber) · level 0

### Statement
Let $f:A_\bullet\to B_\bullet$ be a chain map of abelian groups, $K=\ker f$, and suppose its cokernel complex is acyclic, meaning that all its homology groups vanish. Define $F_n=A_n\oplus B_{n+1}$ with differential $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. Then $K\to F$, $a\mapsto(a,0)$, induces an isomorphism on every homology group. The complex $F$ is the standard homotopy-fiber model of $f$.

### Facts & Assumptions

**Given:** A chain map $f$ with acyclic cokernel, and $K,F$ as stated.

**Goal:** Prove that the inclusion $K\to F$ is a quasi-isomorphism, meaning a map inducing isomorphisms on all homology groups.

### Proof

1.1 Since $f$ commutes with differentials, $d_F^2=0$; the inclusion of $K$ into $F$ is a degreewise injective chain map. Its quotient is $Q_n=(A_n/K_n)\oplus B_{n+1}$ with the induced differential. [given, algebra]

2.1 Identify $A/K$ with the image subcomplex $I\subset B$. The map $Q_n\to (B/I)_{n+1}$ sending $(x,b)$ to the class of $b$ is a surjective chain map to the shifted cokernel, whose differential is the negative of that of $B/I$. Its kernel is the complex $D_n=I_n\oplus I_{n+1}$ with differential $(x,y)\mapsto(dx,x-dy)$. [given, step 1.1, algebra]

3.1 The maps $h_n:D_n\to D_{n+1}$ given by $h_n(x,y)=(y,0)$ satisfy $dh+hd=\mathrm{id}$, so $D$ is acyclic. The shifted cokernel is acyclic by hypothesis; the long exact homology sequence of $0\to D\to Q\to(B/I)[1]\to0$ therefore makes $Q$ acyclic. Applying the same exact sequence to $0\to K\to F\to Q\to0$ proves the claimed isomorphisms. [given, step 2.1, algebra] ∎


## Uniqueness from squares and cubes

[Open item](item-lem-author-30ec96de6e59-square-cube-uniqueness) · level 0

### Statement
Let $A$ be a reduced commutative ring. If $a,b\in A$ satisfy $a^2=b^2$ and $a^3=b^3$, then $a=b$. Here reduced means that the only nilpotent element is zero.

### Facts & Assumptions

**Given:** A reduced commutative ring $A$ and elements $a,b$ with equal squares and equal cubes.

**Goal:** Prove $a=b$.

### Proof

1.1 From the equalities, $a^2b=b^3=a^3$ and $ab^2=a^3$. Consequently $(a-b)^3=a^3-3a^2b+3ab^2-b^3=0$. [given, algebra]

2.1 Reducedness gives $a-b=0$, so $a=b$. [given, step 1.1] ∎

## The square-cube condition implies reducedness

[Open item](item-lem-author-30ec96de6e59-seminormal-ring-reduced) · level 0

### Statement
If a commutative ring $A$ has a unique $a\in A$ with $a^2=x$ and $a^3=y$ for every pair $x,y\in A$ with $x^3=y^2$, then $A$ is reduced: it has no nonzero nilpotent element.

### Facts & Assumptions

**Given:** A commutative ring satisfying the stated square-cube condition.

**Goal:** Show that every nilpotent element vanishes.

### Proof

1.1 If $z^2=0$, then $z^3=0$ as well. Both $0$ and $z$ have square and cube equal to zero, so uniqueness applied to $(x,y)=(0,0)$ gives $z=0$. [given]

2.1 If $t^n=0$ for some positive integer $n$, choose a power of two at least $n$. Repeatedly applying step 1.1 to $t$ raised to successively halved exponents shows $t=0$. Thus $A$ is reduced. [step 1.1, construct] ∎

## Uniqueness of an initial object

[Open item](item-lem-author-30ec96de6e59-initial-object-uniqueness) · level 0

### Statement
Any two initial objects of a category are uniquely isomorphic. An object is initial if it has exactly one arrow to every object.

### Facts & Assumptions

**Given:** Initial objects $I$ and $J$ in a category.

**Goal:** Prove there is a unique isomorphism $I\to J$.

### Proof

1.1 Initiality supplies unique arrows $f:I\to J$ and $g:J\to I$. Since each initial object has only one endomorphism, $gf=\operatorname{id}_I$ and $fg=\operatorname{id}_J$. [given]

2.1 Thus $f$ is an isomorphism with inverse $g$; it is unique because there is only one arrow from $I$ to $J$. [given, step 1.1] ∎

## Intermediate rings in finite algebras

[Open item](item-lem-author-30ec96de6e59-finite-intermediate-module) · level 0

### Statement
Let $A$ be a noetherian commutative ring and $B$ a finite $A$-algebra. Any $A$-subalgebra $C\subseteq B$ is finite as an $A$-module. Here noetherian means every ideal is finitely generated, and finite means finitely generated as a module.

### Facts & Assumptions

**Given:** A noetherian ring $A$, a finitely generated $A$-module $B$ with an $A$-algebra structure, and an intermediate $A$-subalgebra $C$.

**Goal:** Show $C$ is finitely generated over $A$.

### Proof

1.1 A submodule of $A^n$ is finitely generated: induct on $n$, projecting to the last coordinate; the image is a finitely generated ideal and the kernel is a submodule of $A^{n-1}$. Lifts of generators of the image, together with generators of the kernel, generate the submodule. [given, construct]

2.1 Choose a surjection $A^n\to B$. The inverse image of $C$ is finitely generated by step 1.1, and its generators map to generators of $C$. Hence $C$ is finite over $A$. [given, step 1.1, construct] ∎

## Seminormalization and the finite-type interface

[Open item](item-thm-author-30ec96de6e59-seminormalization-input) · level 0

### Statement
For a scheme $X$, the category of universal homeomorphisms $Y\to X$ inducing isomorphisms on residue fields has an initial object $X^{\mathrm{sn}}\to X$, with seminormal source; its construction is functorial in $X$. A scheme is seminormal precisely when every such morphism with reduced source is an isomorphism. If $X$ is locally of finite type over a field, then $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite, and a normal $X$ is seminormal. Here seminormal means that every point has an affine neighbourhood whose ring has the unique square-cube root property stated in the interface definition.

### External input
The universal construction, its functoriality, the characterization and normality implication are imported from the cited Stacks passages. For finite type over a field, the cited relative construction places the seminormalization algebra inside the finite normalization algebra on affine opens; those rings are noetherian, so the intermediate algebra is finite. The reduction has the same underlying points and residue fields as $X$. This input is not a locally reconstructed proof of the cited results.

## Length orders on an integral curve

[Open item](item-lem-author-1437578267d2-length-orders) · level 0

### Statement
Assume AC. Let $T$ be an integral finite-type curve over a field, $K=k(T)$, and $R=\mathcal O_{T,x}$ for a closed point $x$. For nonzero $a,b\in R$ set $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$. These lengths are finite, the integer is independent of the fraction, and it is additive under multiplication. It vanishes for all but finitely many closed $x$ for each $f\in K^\times$. Thus $\operatorname{div}_T(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism to the free zero-cycle group. A nonzero function regular near $x$ has order $\ell_R(R/fR)$; a unit has order zero. In a discrete valuation ring (DVR), meaning a local domain whose nonzero elements are units times nonnegative powers of one uniformizer, this order is its normalized valuation. No normality is assumed.

### Facts & Assumptions
**Given:** AC and $T,K,x,R$ as stated.

**Goal:** Establish the length formula and divisor homomorphism.

[F1] Module length counts the factors of a composition series and is additive in short exact sequences of finite-length modules. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:cor-length-is-additive-in-short-exact-sequences](https://alphabetamath.cc/item/cor-length-is-additive-in-short-exact-sequences)

[F2] Closed-point local rings of a finite-type integral curve are one-dimensional noetherian local domains, and a proper closed subset of such a curve is finite. [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 For nonzero $a\in R$, if $a$ is not a unit, the only prime containing $(a)$ is the maximal ideal $\mathfrak m$. Choose generators $u_i$ of $\mathfrak m$ and exponents $e_i>0$ with $u_i^{e_i}\in(a)$. A sufficiently high power of $\mathfrak m$ lies in $(a)$. The successive quotients of the resulting finite filtration of $R/aR$ are finite-dimensional over $R/\mathfrak m$, and hence have finite composition series. The unit case gives the zero module. [F1, F2, algebra]

2.1 For nonzero $a,c\in R$, cancellation gives the exact sequence $0\to R/aR\xrightarrow{c}R/acR\to R/cR\to0$. Length additivity therefore gives $\ell(R/acR)=\ell(R/aR)+\ell(R/cR)$. If $a/b=c/d$, then $ad=bc$, proving independence of the displayed difference. The same product formula proves additivity. [F1, step 1.1, algebra]

3.1 On each member of a finite affine cover write $f=a/b$ with nonzero regular $a,b$. Its order vanishes where both are units. The exceptional set is a proper closed subset of the curve, hence finite by [F2]. The finite sum is therefore defined, and step 2.1 makes it a homomorphism. [F2, step 2.1]

4.1 The regular and unit assertions follow by taking denominator one. In a DVR the filtration of $R/(\pi^n)$ by powers of a uniformizer has $n$ residue-field factors; subtracting numerator and denominator exponents gives the normalized valuation. [F1, step 2.1, step 3.1] ∎

## External norm-divisor identity for integral curves

[Open item](item-thm-author-1437578267d2-curve-norm-input) · level 0

### Statement
Let $C,T$ be integral finite-type curves over a field and $p:C\to T$ proper and dominant. For $g\in k(C)^\times$, with $K=k(T)$ and $L=k(C)$,
$$p_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{L/K}(g).$$
Here the norm is the determinant of multiplication by $g$ on the finite-dimensional $K$-vector space $L$; $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$; and orders use differences of local quotient lengths. Neither curve need be normal or smooth, and $L/K$ need not be separable.

### Source contract
**Given:** The field, integral curves, proper dominant morphism and nonzero rational function in the Statement.

**Goal:** Record the established external identity with its singular-curve coefficient convention.

[F1] Stacks Project Lemma 42.18.1 proves the pushforward identity in its dimension-function setup, which includes finite-type curves over a field.

[F2] Stacks Project Lemma 10.121.8 and Definition 10.121.2 give the weighted local norm formula using quotient-length orders without normality.

### External input
Import [F1], with the coefficient convention of [F2]. This is an equality of zero-cycles before quotienting by rational equivalence. The cited proof is not claimed as a local reconstruction.

## External inputs for flat descent of line bundles

[Open item](item-lem-author-8e1c0251ef0d-fpqc-descent-input) · level 0

### Statement
For a scheme, an fpqc covering admits effective and fully faithful descent of quasi-coherent modules. If the descended module pulls back to a finite locally free module on every member, it is finite locally free. A jointly surjective étale family is fpqc. On a site satisfying the four hypotheses of Stacks Theorem 59.17.4 quoted in the source record, the structure presheaf is a sheaf.

### External input
These are imported established descent and sheaf results with the hypotheses and reading limits in the source records. Their proofs are not locally reconstructed.

## Proper norm and graph formulas for principal divisors

[Open item](item-thm-adjudicate-16c74c1a77ef-principal-divisor-input) · level 0


### Statement
Let $k$ be a field. For integral finite-type $k$-schemes $P,Q$, a proper dominant generically finite morphism $p:P\to Q$ and $h\in k(P)^\times$ satisfy
$$p_*\operatorname{div}_P(h)=\operatorname{div}_Q\operatorname{Nm}_{k(P)/k(Q)}(h).$$
Divisor orders use lengths in the one-dimensional local rings, and pushforward includes residue-field degrees.

For an integral finite-type $k$-scheme $Q$ and $f\in k(Q)^\times$, let $G\subset Q\times\mathbf P^1$ be the reduced closure of the graph on any nonempty open where $f$ is invertible. Its projection $p:G\to Q$ is proper birational. The fibers $G_0,G_\infty$ are effective Cartier divisors, allowing the empty divisor, and
$$p_*([G_0]-[G_\infty])=\operatorname{div}_Q(f).$$
Neither scheme is required to be separated over $k$.

### External input
Import exactly the norm and graph formulas of Stacks Lemmas 42.18.1 and 42.18.2. The field base with dimension function zero satisfies Situation 42.7.1. The formulas concern the actual length-weighted cycles; they do not assume a higher-Chow comparison or a localization theorem. These substantial divisor inputs are cited, not locally reconstructed.


## Regularity and dimensions for finite-type cycle arguments

[Open item](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input) · level 0


### Statement
Let $k$ be a field. A smooth $k$-scheme is regular, and every regular local ring is a domain. If $T$ is an integral finite-type $k$-scheme and $D\subset T$ is integral and closed, then $\dim T=\operatorname{trdeg}_k k(T)$ and $\operatorname{codim}_T D=\dim T-\dim D$. Every nonempty open of $T$ has the same dimension as $T$. Every irreducible component of an effective Cartier divisor on $T$ has dimension $\dim T-1$.

If $p:P\to Q$ is a proper dominant morphism of integral finite-type $k$-schemes, then $\dim P=\dim Q+\operatorname{trdeg}_{k(Q)}k(P)$. None of these assertions requires separatedness over $k$.

### External input
Import the stated regularity, domain and dimension results from the specified Stacks lemmas. The affine dimension and local codimension formulas apply on affine neighbourhoods of the relevant generic points; all nonempty affine charts of an integral scheme have the same function field. Their formulas therefore retain their scope on nonseparated schemes. The field base satisfies Situation 42.7.1. The application uses only finite-type schemes. The cited source statements and indicated proofs were read; their deeper prerequisites are accepted external inputs, not reconstructed local proofs. The version is the live tag text retrieved on 2026-11-09; no pinned repository commit is asserted.


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

[F1] Restriction $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ is surjective with kernel the extensions by zero of $\mathbb Z^{(B)}$ ([lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)).

[F2] A surjective homomorphism $r:A\to D$ induces a surjection $A/P\to D/r(P)$ with kernel $(\ker r+P)/P$ for every subgroup $P$ ([lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)).

**Given:** The data in the statement.

**Goal:** Prove the stated cokernel sequence exact.

### Proof

1.1 Apply [F2] to $A=\mathbb Z^{(S)}$, $D=\mathbb Z^{(S\setminus B)}$, and $P=d(K)$. Since $r(P)=d'(K)$, the induced map is the displayed map of cokernels and is surjective. [F1, F2, given]

2.1 By [F1] and the kernel formula in [F2], its kernel consists exactly of classes represented by divisors supported in $B$. These are the image of $\mathbb Z^{(B)}$, proving exactness. [F1, F2, step 1.1] ∎

## Admissible face restrictions and their cycle identities

[Open item](item-lem-author-89250b1d710c-admissible-face-identities) · level 1

### Statement
Let $k$ be a field, $X$ smooth of finite type over $k$, and $r,n\geq0$. Write $z^r(X,n)$ for the free abelian group on integral closed subschemes $W\subset X\times\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: each intersection component has codimension $r$ in the face, and an empty intersection is allowed. For $n\geq1$, define
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ runs over the components of $W\cap\{t_i=0\}$ and the target face is identified with $X\times\Delta^{n-1}$ in increasing coordinate order. The sum is zero if the intersection is empty. These formulas give homomorphisms $d_i^n:z^r(X,n)\to z^r(X,n-1)$ and, for $n\geq2$ and $0\leq i<j\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ as equalities of integral cycles. Neither separatedness nor pure dimension is assumed for $X$.

### Facts & Assumptions

**Given:** $k,X,r,n$ and the groups in the Statement.

**Goal:** Establish finite coefficients, admissibility and the cycle-level face identities.

[F1] Coordinate faces are regular embeddings with the stated order identifications. [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[F2] A proper single-coordinate intersection has the specified local tensor-resolution length. [lem-author-89250b1d710c-cartier-face-length](item-lem-author-89250b1d710c-cartier-face-length)

[F3] Cycle equality, the relevant codimension conditions and the displayed lengths are open local. [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[F4] The separated equidimensional smooth case, including the simplicial identity with intersection multiplicities, is an external input. [thm-author-89250b1d710c-bloch-simplicial-cycle-input](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input)

[F5] A smooth finite-type scheme admits a cover by integral smooth affine opens. [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)

[F6] Generator images extend uniquely to homomorphisms. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

### Proof

1.1 By [F5], cover $X$ by integral smooth affine opens $U$. Each is separated and equidimensional, so [F4] applies. Restrictions of admissible generators remain admissible by [F3]. [F3, F4, F5, construct]

1.2 At a component $T$ of a single face intersection, put $A=\mathcal O_{X\times\Delta^n,\eta_T}$ and let $I$ define $W$ there. By [F1], $t_i$ is a nonzerodivisor on $A$. Properness prevents $W$ from lying in the face, so $t_i\notin I$; since $\eta_T$ is generic in the intersection, $\sqrt{I+(t_i)}$ is the maximal ideal of $A$. The Tor coefficient in [F4] is therefore the finite quotient length in [F2]. This is also the length over $A/I=\mathcal O_{W,\eta_T}$, since the submodules coincide. [F1, F2, F4, given]

2.1 The intersection has finitely many components because it is noetherian. The global sum consequently has finite coefficients and restricts to the local face cycles by [F3] and step 1.2. Those local cycles are admissible by [F4]; [F3] detects the codimension conditions globally. Extend to a homomorphism by [F6]. [F3, F4, F6, step 1.2, construct]

3.1 Restrict the two sides of the claimed identity to each open in step 1.1. Both successive face operations commute with restriction by [F3] and step 1.2. On each open they agree by [F4], with the same target face identified by [F1]. Local detection in [F3] gives equality of global cycles with all coefficients. This proves the lemma; compatibility of multiplicities is imported in [F4]. [F1, F3, F4, step 1.1, step 1.2, step 2.1] ∎


## Square-cube roots in a normal domain

[Open item](item-lem-author-30ec96de6e59-normal-domain-square-cube) · level 1

### Statement
Let $A$ be an integrally closed domain. For every $x,y\in A$ with $x^3=y^2$ there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. An integrally closed domain is a domain containing every element of its fraction field that satisfies a monic polynomial over it.

### Facts & Assumptions

**Given:** An integrally closed domain $A$ and $x,y\in A$ satisfying $x^3=y^2$.

**Goal:** Produce the unique simultaneous square and cube root.

[F1] Equal squares and cubes in a reduced ring determine an element uniquely ([lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)).

### Proof

1.1 If $x=0$, then $y=0$ because $A$ is a domain, and $a=0$ works. If $x\ne0$, put $a=y/x$ in the fraction field. The relation gives $a^2=x$ and $a^3=y$. [given, algebra]

2.1 In the second case $a$ satisfies the monic equation $T^2-x=0$, so integral closedness puts $a$ in $A$. A domain is reduced, so [F1] gives uniqueness in both cases. [given, F1, step 1.1] ∎

## Seminormality and seminormalization

[Open item](item-def-seminormal-scheme-interface) · level 2

### Definition
A commutative ring $A$ is **seminormal** if, whenever $x^3=y^2$ in $A$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal if every point has an affine open neighbourhood whose coordinate ring is seminormal. In particular it is reduced: its affine coordinate rings have no nonzero nilpotents.

A morphism $f:Y\to X$ is **subintegral** if it is integral, is bijective on underlying points, and induces an isomorphism $\kappa(x)\to\kappa(y)$ at every point $y$ over $x$. Integral means affine and given on affine inverse images by integral ring maps; an element is integral when it satisfies a monic polynomial over the base ring. A universal homeomorphism is a morphism whose pullback along every scheme morphism is a homeomorphism on underlying spaces. Integral, bijective morphisms inducing residue-field isomorphisms are universal homeomorphisms, and conversely a universal homeomorphism with residue-field isomorphisms is integral and bijective.

For a scheme $X$, its **seminormalization** $X^{\mathrm{sn}}\to X$ is the initial object in the category of subintegral morphisms to $X$: it has a unique $X$-morphism to every object of that category. Its source is seminormal. The construction is functorial: every morphism $h:Y\to X$ induces a unique compatible $h^{\mathrm{sn}}:Y^{\mathrm{sn}}\to X^{\mathrm{sn}}$. The map factors through the reduction $X_{\mathrm{red}}$, the scheme obtained by quotienting the structure sheaf by its nilradical. When $X$ is locally of finite type over a field, the resulting map $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite. In this scope a normal scheme is seminormal, and a reduced scheme is seminormal exactly when every finite subintegral morphism to it from a reduced scheme is an isomorphism.

### Justification
The initial object and functoriality are the established input [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input); [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness) proves uniqueness up to unique isomorphism. The standard characterization of universal homeomorphisms as integral, surjective and universally injective identifies the two formulations: residue-field isomorphisms make the fibers universally injective. A map from a reduced scheme factors uniquely through the reduction, because its structure sheaf has no nonzero nilpotents.

The square-cube condition implies reducedness by [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced), while [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness) explains uniqueness in any reduced ring. As a local illustration, every integrally closed domain satisfies the condition by [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube). The scheme-level normality implication is supplied by the cited input. Its finite-type construction uses an intermediate ring in a finite normalization; [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module) supplies the noetherian finiteness step. If a reduced finite-type scheme passes the finite-morphism test, apply that test to its finite seminormalization; the resulting isomorphism makes it seminormal. Conversely, the input proves the stronger test for all subintegral morphisms with reduced source.

## Picard group of an affine curve through its boundary

[Open item](item-lem-affine-curve-picard-boundary) · level 2

### Statement
Let $k$ be algebraically closed and let $C$ be a smooth connected affine curve over $k$. Then a smooth projective completion $j:C\hookrightarrow\overline C$ exists and its boundary $B=\overline C\setminus C$ is a nonempty finite set of closed points. For any such completion, the sequence $\bigoplus_{b\in B}\mathbb Z[b]\to\operatorname{Pic}(\overline C)\to\operatorname{Pic}(C)\to0$ is exact, the first map sending $[b]$ to $[\mathcal O_{\overline C}(b)]$ and the second being restriction. Each $b$ has degree one. Consequently the degree-zero Picard group $\operatorname{Pic}^0(\overline C)(k)$ surjects onto $\operatorname{Pic}(C)$.

Here a curve means a nonempty finite-type scheme of pure dimension one; smoothness is over $k$. A completion means a dense open immersion into a smooth projective integral curve. A line bundle is a sheaf locally isomorphic to the structure sheaf; its isomorphism classes form the Picard group under tensor product. The degree of a closed point is the dimension of its residue field over $k$. The degree-zero Picard group is the kernel of the degree homomorphism on line-bundle classes, identified with the $k$-points of the degree-zero Picard variety by the cited geometric input.

### Facts & Assumptions

[F1] A regular integral separated finite-type curve over a perfect field has a smooth projective completion with finite closed-point boundary; if affine, the boundary is nonempty. For smooth integral curves, divisor classes identify naturally with Picard classes and restriction deletes coefficients outside the open. On a smooth projective curve, degree is additive, a point class has its residue-field degree, and the degree-zero kernel is the group of $k$-points of the degree-zero Picard variety ([lem-author-4057f3195e4f-curve-geometric-input](item-lem-author-4057f3195e4f-curve-geometric-input)).

[F2] If $d:K\to\mathbb Z^{(S)}$ is a homomorphism and $B\subseteq S$, restriction induces an exact sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(r d)\to0$ ([lem-author-4057f3195e4f-divisor-class-localization](item-lem-author-4057f3195e4f-divisor-class-localization)). Exactness transports across compatible isomorphisms ([lem-author-4057f3195e4f-transfer-exactness](item-lem-author-4057f3195e4f-transfer-exactness)).

[F3] If a surjective homomorphism $q:A\to D$ kills an element of degree one for a homomorphism $\deg:A\to\mathbb Z$, then $q(\ker\deg)=D$ ([lem-author-4057f3195e4f-degree-adjustment](item-lem-author-4057f3195e4f-degree-adjustment)).

[F4] Closed points of a finite-type scheme over an algebraically closed field have residue field $k$, by the weak Nullstellensatz on affine charts ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). Picard groups and restriction use line bundles and tensor product ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

**Given:** $k$ and $C$ as stated.

**Goal:** Prove existence and nonemptiness of the boundary, exactness, and the degree-zero surjection.

### Proof

1.1 An algebraically closed field is perfect. Smoothness makes $C$ regular. Its regular local rings are domains, so distinct irreducible components cannot meet; finite type gives finitely many components, hence connectedness makes $C$ integral. Since $C$ is affine over $k$, it is separated over $k$. Apply [F1] to obtain a smooth projective integral completion with finite boundary. It is nonempty because an affine positive-dimensional curve is not proper. The same argument proves nonemptiness for any completion in the statement. [F1, given]

2.1 Let $S$ be the closed points of $\overline C$ and $K=k(\overline C)^\times$, the multiplicative group of nonzero rational functions. The principal-divisor homomorphism $d:K\to\mathbb Z^{(S)}$ assigns each function its finite sum of orders at closed points. The open curve has the same function field, and its principal-divisor homomorphism is restriction of $d$ to $S\setminus B$. Apply [F2], then use the compatible divisor-class and Picard isomorphisms of [F1]. The boundary basis element $[b]$ maps to $[\mathcal O_{\overline C}(b)]$, giving the exact sequence in the statement. [F1, F2, step 1.1]

3.1 By [F4], every $b\in B$ has residue field $k$, hence degree one; [F1] gives $\deg[\mathcal O_{\overline C}(b)]=1$. Exactness in step 2.1 shows that this class lies in the kernel of restriction. [F1, F4, step 1.1, step 2.1]

4.1 Restriction is surjective by step 2.1. Applying [F3] with the boundary class from step 3.1 shows that its restriction from the degree-zero kernel is still surjective. The identification in [F1] gives the stated map from $\operatorname{Pic}^0(\overline C)(k)$. [F1, F3, step 2.1, step 3.1] ∎

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

## Alternating face boundaries square to zero

[Open item](item-lem-author-89250b1d710c-alternating-face-boundary) · level 2


### Statement
Let $C_n$ be abelian groups for $n\geq0$ and let $d_i^n:C_n\to C_{n-1}$, $0\leq i\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ for $i<j$ and $n\geq2$. Put $C_n=0$ for $n<0$, $\partial_n=0:C_n\to C_{n-1}$ for every $n\leq0$, and $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$ for $n\geq1$. Then $\partial_{n-1}\partial_n=0$ for every integer $n$, and $H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}$ is defined and vanishes for $n<0$. This applies to the admissible cycle face maps for smooth finite-type schemes over fields.

### Facts & Assumptions

**Given:** The groups and face identities in the Statement.

**Goal:** Prove the chain identity and justify the homology quotient.

[F1] The admissible cycle face maps satisfy these identities. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] A chain complex has consecutive differential composites zero; its homology is cycles modulo boundaries. [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

### Proof

1.1 For $n\geq2$, expand $\partial_{n-1}\partial_n=\sum_{a=0}^{n-1}\sum_{b=0}^{n}(-1)^{a+b}d_a^{n-1}d_b^n$. Pair $(a,b)$ with $a<b$ to $(b-1,a)$. This is a bijection onto the pairs whose first coordinate is at least the second, with inverse $(c,d)\mapsto(d,c+1)$. [given, construct, algebra]

2.1 The two maps in each pair agree by the face identity, while their signs are opposite. All terms cancel. For $n=1$ the composite is zero because $\partial_0=0$; for $n\leq0$ it is zero because $\partial_n$ is the explicitly defined zero map. [given, step 1.1, algebra]

3.1 Therefore boundaries lie in kernels, and [F2] defines the displayed homology quotient. For $n<0$ the group itself is zero. Substitution of [F1] gives the cycle-complex application, completing the proof. [F1, F2, step 2.1] ∎


## Bloch cycle complexes and higher Chow groups

[Open item](item-def-bloch-higher-cycle-complex) · level 3


### Definition
Let $k$ be a field, $X$ smooth of finite type over $k$, and $r\geq0$. For $n\geq0$ put $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$. A nonempty coordinate face is obtained by setting a proper subset of the coordinates to zero. An integral closed subscheme $W\subset X\times\Delta^n$ of codimension $r$ is **admissible** if every component of its intersection with every such face has codimension $r$ in that face; empty intersections are allowed. Codimension is measured on the ambient irreducible component containing the generic point. Define $z^r(X,n)$ as the free abelian group on the admissible subschemes.

For $n\geq1$, identify $\{t_i=0\}$ with $\Delta^{n-1}$ by retaining the remaining coordinates in increasing order and set
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ ranges over the components of $W\cap\{t_i=0\}$ and $\eta_T$ is its generic point. The empty sum is zero. Extend by integral linearity and set $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$. Put $z^r(X,n)=0$ for $n<0$ and $\partial_n=0:z^r(X,n)\to z^r(X,n-1)$ for every $n\leq0$. The resulting homological complex is **Bloch's cycle complex** $z^r(X,\bullet)$, and its **higher Chow groups** are
$$\mathrm{CH}^r(X,n)=H_n(z^r(X,\bullet))=\ker\partial_n/\operatorname{im}\partial_{n+1}.$$
In particular they vanish for $n<0$. This is the unnormalized complex; no quotient by degenerate simplices is taken.

### Definition references

[lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

### Facts & Assumptions

**Given:** $k,X,r$ as above.

**Goal:** Justify the coefficients, differential and homology quotient.

[F1] The admissible face lemma supplies finite coefficients, admissible face images and the identities $d_i d_j=d_{j-1}d_i$ for $i<j$. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] Alternating face sums form a chain complex, whose homology is the displayed quotient and vanishes in negative degrees. [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

### Justification
The local rings in the coefficient formula need not be discrete valuation rings and the cycles need not be smooth. The proper single-face calculation in [F1] supplies exactly the finite lengths shown. The cycle-level compatibility in [F1] uses the explicitly imported simplicial-cycle input locally on integral smooth affine opens; no quotient by rational equivalence is used. Thus all face maps are defined, and [F2] gives $\partial^2=0$ and makes the homology quotient well-defined. This definition does not assert the separate comparison with motivic cohomology or the identification of degree zero with the classical Chow group.


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

### Proof
**Given:** A natural map u: F → G with G a sheaf.

**Goal:** Construct its unique extension over $\eta_F$ and prove naturality.

1.1 For a representative (R,s) of an element of F+(X), the values $u(s_f)$ form a matching family in G on R. The sheaf condition gives a unique section of G(X) restricting to them. Equivalent representatives give the same section because their glued sections agree on a common covering sieve. Pullback and uniqueness show that this assignment is natural and extends u. [F1, F2, given]

2.1 If v: F+ → G also extends u, then on each f in R its value on the class of (R,s) restricts to $u(s_f)$: the restricted class equals $\eta_F(s_f)$, because these representatives agree on $f^*R$. The sheaf condition therefore forces v to equal the extension from step 1.1. Uniqueness also makes the bijection natural in F and G. [F1, F2, step 1.1] ∎

## Degree-zero Bloch cycles are ordinary cycles

[Open item](item-lem-author-c8fb25136bd5-degree-zero-cycles) · level 4


### Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq 0$. Write $Z^r(X)$ for the free abelian group on integral closed subschemes of codimension $r$ in $X$, with codimension measured on the ambient irreducible component containing the generic point. Then the identification $X\times\Delta^0=X$ gives $z^r(X,0)=Z^r(X)$.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement.

**Goal:** Identify the two free abelian groups on their generators.

[F1] The definition of the Bloch complex uses integral closed codimension-$r$ subschemes meeting all nonempty coordinate faces in codimension $r$. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Proof

1.1 The equation defining $\Delta^0$ is $t_0=1$, so $X\times\Delta^0=X$. Its only nonempty coordinate face is itself, and every codimension-$r$ generator meets this face in codimension $r$. [F1]

2.1 Thus the two displayed free abelian groups have exactly the same generators, and the identity on those generators is the asserted identification. [step 1.1] ∎


## Negative homology of the cycle complex

[Open item](item-lem-author-c8fb25136bd5-negative-homology) · level 4

### Statement
For a field $k$, a smooth finite-type $k$-scheme $X$, $r\geq0$, and an integer $n<0$, one has $H_nz^r(X,\bullet)=0$.

### Facts & Assumptions

**Given:** $k$, $X$, $r$ and $n$ as in the statement.

**Goal:** Compute the indicated homology group.

[F1] The Bloch complex has zero chain group in every negative degree, and its homology is the kernel modulo the image. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Proof

1.1 Since $n<0$, the chain group in degree $n$ is zero, so the kernel of its outgoing differential is zero. [F1]

2.1 The incoming image is a subgroup of this zero kernel; consequently their quotient is zero. [F1, step 1.1] ∎

## Face boundaries preserve closed support

[Open item](item-lem-author-75596422a482-face-support) · level 4

### Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ closed, and $r\geq0$. In Bloch's complex $z^r(U,\bullet)$, the free subgroup generated in each degree $n$ by admissible integral cycles contained in $T\times\Delta^n$ is preserved by the boundary.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Facts & Assumptions

**Given:** $k,U,T,r$ as stated.

**Goal:** Show that the boundary of each supported generator remains supported.

[F1] Bloch's boundary is the alternating sum of its admissible face intersections. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Proof

1.1 For a supported generator $W$, every component occurring in a face intersection is contained in $W\cap(U\times\{t_i=0\})$, hence in $T\times\Delta^{n-1}$ under the face identification. [given, F1]

2.1 The coefficients in the face intersections are integers and the boundary is their alternating sum, so linearity gives the asserted preservation in every degree; degree zero has zero boundary. [F1, step 1.1] ∎


## Open restriction of admissible cycles

[Open item](item-lem-author-75596422a482-open-restriction) · level 4

### Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subset U$ open and $r\geq0$. Restricting each admissible generator to $V\times\Delta^n$, with empty restriction sent to zero, defines a chain map $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Facts & Assumptions

**Given:** $k,U,V,r$ as stated.

**Goal:** Establish admissibility and compatibility with boundaries.

[F1] The cycle groups, face maps and their coefficients are defined by admissible intersections and local lengths. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Proof

1.1 A nonempty open subscheme of an integral scheme is integral and dense. Restricting a generator and its intersections with coordinate faces to the open subset $V$ preserves their codimensions at their generic points; its restriction is therefore an admissible generator, or zero if empty. [given, F1]

2.1 Formation of a face intersection commutes with restriction to the open subset. At each surviving generic point the local rings and the length in the face coefficient are unchanged; components disjoint from the open disappear. Thus each face map commutes with restriction, and so does their alternating sum. [F1, step 1.1] ∎


## Separated raw-cycle Zariski descent input

[Open item](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input) · level 4



### Statement
Let $Y$ be a smooth quasi-projective finite-type scheme over a field, and $r\geq0$. Regard $C(W)=z^r(W,\bullet)$ in cohomological degrees $-n$, and let $aC$ be its degreewise sheafification on the small Zariski site of $Y$. The canonical unit
$$C(Y)\longrightarrow R\Gamma(Y_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism. The comparison is natural for open restriction.

### Source contract
**Given:** The hypotheses above and the unnormalized simplicial Bloch convention.

**Goal:** Supply the established separated case used in finite-affine-cover induction.

[F1] MVW Proposition19.12 and its two-localization-row proof, together with Theorem19.11, supply this actual unit equivalence; the standing convention on printed p.5 is separated. Only the indicated quasi-projective cases are used.

### External input
Import [F1] at the stated scope and reading limits. The nonseparated extension is a separate local deduction. No proof of the Brown–Gersten theorem or the deep moving lemma is claimed here.


## Scheme sites and sheafification

[Open item](item-def-scheme-sites-and-sheafification) · level 5

### Definition
Fix Grothendieck universes U in V. A scheme site here is a U-small category C whose objects are schemes and whose morphisms are scheme morphisms, equipped with a Grothendieck topology J. A sieve on X is a set of arrows into X closed under precomposition; a topology selects covering sieves, including the maximal sieve, stable under pullback and satisfying transitivity. A presheaf of sets is a contravariant functor C → Set_V. It is a sheaf when, for every covering sieve, every compatible family of sections indexed by its arrows has a unique amalgamation on the target.

The sheafification of a presheaf F is the sheaf aF = (F+)+, equipped with the composite F → F+ → (F+)+. Here F+(X) consists of matching families on covering sieves of X, with two families identified when they agree on a common covering subsieve; restriction uses pullback of sieves. Equivalently, a is left adjoint to the inclusion of sheaves into presheaves, with the displayed composite as unit.

A big site over a base S has a specified category of S-schemes as its objects; an S-scheme is a scheme equipped with a morphism to S, and its morphisms commute with those structure maps. A small site of a fixed S-scheme X instead uses a specified category of schemes over X, such as a suitable category of étale X-schemes. The chosen categories and covering topologies must be stated separately: the words small and big alone do not determine them. A complex of abelian sheaves, or a derived presheaf, requires its own abelian or derived-category conventions; set-valued sheafification alone does not assert a complex-valued descent or localization theorem.

### Definition references
[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

### Justification
The size hypotheses make the sets of sieves, matching families and equivalence classes legitimate V-small sets. The plus construction is a presheaf and its unit is natural by [lem-author-cf6ede58b450-plus-presheaf](item-lem-author-cf6ede58b450-plus-presheaf). It is separated by [lem-author-cf6ede58b450-plus-separated](item-lem-author-cf6ede58b450-plus-separated), so its second application is a sheaf by [lem-author-cf6ede58b450-separated-plus-sheaf](item-lem-author-cf6ede58b450-separated-plus-sheaf). For every sheaf G, applying [lem-author-cf6ede58b450-plus-universal](item-lem-author-cf6ede58b450-plus-universal) successively to F and F+ gives natural bijections Hom((F+)+,G) ≅ Hom(F+,G) ≅ Hom(F,G). This proves the stated adjunction and identifies its unit. The definitions of the scheme categories require the separately specified topology and size bound; they do not claim that every possible category of schemes is U-small.

## Boundaries in degree zero

[Open item](item-lem-author-c8fb25136bd5-one-boundaries) · level 5

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

[Open item](item-lem-author-c8fb25136bd5-comparison-reindexing) · level 5

### Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$. Suppose that for every integer $p$ a group $H^{p,r}(X)$ is equipped with an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$. Then $H^{2r,r}(X)\cong H_0z^r(X,\bullet)$ and $H^{p,r}(X)=0$ for $p>2r$. No existence of such comparison isomorphisms is asserted.

### Facts & Assumptions

**Given:** $k$, $X$, $r$ and the stated isomorphisms.

**Goal:** Identify the index-zero case and the negative-index range.

[F1] Higher Chow groups are the homology groups of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] The homology of that complex vanishes in negative degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology)

### Proof

1.1 Substituting $p=2r$ makes the homological index zero, giving the first isomorphism by the definition of higher Chow groups. [given, F1]

2.1 If $p>2r$, then $2r-p<0$; the target of the assumed isomorphism is therefore zero, and so is its source. [given, F1, F2] ∎

## The kernel of restriction is the supported subcomplex

[Open item](item-lem-author-75596422a482-restriction-kernel) · level 5

### Statement
Under the hypotheses of the preceding support construction, put $V=U\setminus T$. The kernel of $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$ is exactly the subcomplex freely generated by the admissible integral cycles contained in $T\times\Delta^\bullet$.

### Statement references

[lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

### Facts & Assumptions

**Given:** A field $k$, a smooth finite-type $k$-scheme $U$, a closed subset $T$, and $r\geq0$.

**Goal:** Identify the kernel in each degree and as a complex.

[F1] The cycle groups are free on admissible integral closed subschemes. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] Restriction is a chain map and supported generators form a subcomplex. [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

### Proof

1.1 A generator restricts to zero exactly when it is contained in $T\times\Delta^n$. Two generators with the same nonempty restriction coincide, since each is the closure of that dense open restriction in $U\times\Delta^n$. [given, F1]

2.1 The nonzero restrictions of distinct generators are therefore distinct basis elements. Freeness shows that the degreewise kernel is precisely the span of the supported generators; by [F2] this equality is an equality of subcomplexes. [F1, F2, step 1.1] ∎


## Higher-cycle localization including nonseparated schemes

[Open item](item-thm-author-75596422a482-bloch-localization-input) · level 5


### Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subseteq U$ open, and $r\geq0$. No separatedness of $U$ over $k$ is required. The cokernel complex of the unnormalized simplicial restriction $z^r(U,\bullet)\to z^r(V,\bullet)$ is acyclic.

### Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

### External input
Use Levine's raw simplicial localization theorem in the field case of §7 of the identified primary preprint. Its introductory Theorem 1.7 says dimension one, but §1.6 and the actual proof in §7 explicitly treat bases of dimension at most one. Section 2.2 does not impose separatedness, and Theorem 6.12's proof synchronizes the same moving map and homotopy over a finite affine cover. Deep moving and blow-up results remain external inputs. This is neither a cubical replacement nor a definition by sheaf hypercohomology.

### Facts & Assumptions
**Given:** $k,U,V,r$ as in the statement.

**Goal:** Apply the imported theorem with the actual dimension index and cycle convention.

[F1] Levine §7 proves acyclicity of $z_q(V,\bullet)/\operatorname{im}(z_q(U,\bullet))$ for finite-type schemes over a semilocal regular base of dimension at most one. The proof uses Theorem 6.12, including its finite-affine-cover reduction. Lemma 7.1 and the finite-flat degree pull/push argument treat finite residue fields.

[F2] The local unnormalized simplicial Bloch complex, its multiplicities and open restriction are those of [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) and [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction).

### Proof
1.1 On an integral clopen component $U_a$ of dimension $d_a$, put $q=d_a-r$. Levine's dimension-$(q+n)$ generators on $U_a\times\Delta^n$ are exactly the codimension-$r$ generators of [F2]. Its face dimension inequalities mean proper intersection with every coordinate face; in the regular equidimensional ambient scheme a nonempty intersection has the expected codimension, since each successive face equation lowers dimension by at most one. The simplicial face multiplicities and alternating differential agree. A field is a zero-dimensional semilocal regular base, so [F1] makes the restriction cokernel acyclic on this component, for finite as well as infinite fields. [F1, F2, given]

2.1 A smooth finite-type scheme over a field is regular and Noetherian. Its finitely many irreducible components are disjoint: an intersection would give a regular local ring with two minimal primes, whereas a regular local ring is a domain. Thus the components are integral and clopen. Cycle complexes, restrictions and their cokernels split as finite direct sums over them. Apply step 1.1 with their respective $d_a-r$ indices; a finite direct sum of acyclic complexes is acyclic. The empty scheme and empty open give the same conclusion. [F1, F2, step 1.1] ∎

### Source notes
The earlier MVW citation uses that book's separated-scheme convention and did not alone justify the stated scope. Levine's separate broader simplicial input supplies it. On preprint p. 1 the introductory codimension conversion prints $d-p$ in place of $d-q$; the correct conversion used above is $z^r(U_a,n)=z_{d_a-r}(U_a,n)$. On p. 43 the final target of the finite-extension pull/push display incorrectly remains over the extension; pushforward returns to the original quotient over $U$. These two display typos do not affect the dimension-indexed localization argument. No local reconstruction of its deep moving constructions is claimed.


## Nisnevich covers and distinguished squares

[Open item](item-def-nisnevich-covering-interface) · level 6

### Definition
For a point $x$ of a scheme $X$, write $\kappa(x)$ for the residue field of the local ring $\mathcal O_{X,x}$. A family of scheme morphisms $\{f_i:U_i\to X\}_{i\in I}$ is a **Nisnevich covering family** if every $f_i$ is étale in the sense of [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes) and, for every point $x\in X$, there are an index $i$ and a point $u\in U_i$ with $f_i(u)=x$ such that the induced field homomorphism $\kappa(x)\to\kappa(u)$ is an isomorphism. In this situation $u$ is called a residue-field-preserving lift of $x$.

On a specified small category of schemes in which these families are available, the **Nisnevich topology** is the Grothendieck topology generated by the sieves containing such families. A sieve and a Grothendieck topology have the meanings in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). For the small Nisnevich site of a scheme $X$, take a suitably small category of étale $X$-schemes, closed under the relevant fibre products, with this topology; the big site requires a separately specified category of schemes over the base.

A **distinguished Nisnevich square** is a cartesian square of schemes

$$\begin{matrix} W&\longrightarrow&V\\ \downarrow&&\downarrow p\\ U&\xrightarrow{j}&X \end{matrix}$$

where $j$ is an open immersion, $p$ is étale, and, putting $Z=(X\setminus j(U))_{\mathrm{red}}$ for the closed complement with its reduced induced scheme structure, the base change $V\times_X Z\to Z$ is an isomorphism. Cartesian means that the displayed map $W\to U\times_X V$ is an isomorphism. The pair $\{U\to X,V\to X\}$ is its associated covering family.

For a set-valued presheaf $F$, the **distinguished-square excision conditions** are that $F(\varnothing)$ is a singleton and that, for every such square in the chosen category, the natural map

$$F(X)\longrightarrow F(U)\times_{F(W)}F(V)$$

is a bijection. Here the fibre product is the set of pairs whose restrictions to $W$ agree. These conditions describe the excision interface; no equivalence between them and the full sheaf condition is asserted here.

### Justification
The residue-field test is independent of a choice of representative of a point: a scheme morphism gives the indicated homomorphism of residue fields. The generated topology exists because the maximal topology is among the Grothendieck topologies containing the specified sieves, and their intersection is again a Grothendieck topology; the smallness convention makes this intersection legitimate.

For a distinguished square, the open immersion $U\to X$ is étale, as recorded in [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes), and $V\to X$ is étale by hypothesis. If $x$ lies in $U$, its unique preimage under the open immersion has residue field $\kappa(x)$. Otherwise $x$ is a point of $Z$; the isomorphism $V\times_X Z\cong Z$ gives a point over $x$ with residue field $\kappa(x)$, whose image in $V$ is a residue-field-preserving lift. Thus the associated pair is a Nisnevich covering family. The empty family covers the empty scheme by the same pointwise definition. The restriction maps of the presheaf commute around the square, so they define the displayed natural map to the fibre product.

## Roots of unity and étale Tate twists

[Open item](item-def-etale-tate-coefficients) · level 6

### Definition
Let $n\geq 1$ be an integer invertible on a scheme $X$: its image in every local ring of $X$ is a unit. Work on a size-bounded small étale site of $X$ whose objects are étale $X$-schemes, whose covering families are jointly surjective étale families, and which includes the open restrictions and covers used below.

For an object $U$ put $P_n(U)=\{u\in\Gamma(U,\mathcal O_U)^\times:u^n=1\}$, with multiplication and restriction of functions. The **sheaf of $n$th roots of unity** $\mu_n$ is the sheafification of this presheaf. Its group law is written multiplicatively; multiplication by an integer means taking that power. As every section is annihilated by $n$, $\mu_n$ is a sheaf of $\mathbb Z/n$-modules. Here $\mathbb Z/n$ denotes both the quotient ring and, on the site, the constant sheaf obtained by sheafifying the constant presheaf with that value.

For $j\geq 1$, define the **Tate twist** $\mu_n^{\otimes j}$ to be the $j$-fold tensor product over the constant sheaf $\mathbb Z/n$: form the objectwise tensor product presheaf and sheafify it. Set $\mu_n^{\otimes 0}=\mathbb Z/n$. Only nonnegative twists are defined here.

If $X$ is a scheme over a field $k$ and a primitive $n$th root $\zeta\in k$ is chosen, meaning an element of multiplicative order exactly $n$, then necessarily $n$ is prime to the characteristic of $k$. The map $a\mapsto\zeta^a$ induces an isomorphism of $\mathbb Z/n$-sheaves $\mathbb Z/n\cong\mu_n$ and hence, for every $j\geq0$, an isomorphism $\mathbb Z/n\cong\mu_n^{\otimes j}$ sending $1$ to $\zeta^{\otimes j}$ when $j>0$ and to $1$ when $j=0$. For $n=1$ both sides are zero modules. These isomorphisms depend on the chosen root for positive $j$.

This definition alone asserts no motivic-to-étale comparison. In particular, in characteristic $p>0$ it does not treat $\mu_p$ as a prime-to-characteristic coefficient sheaf.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

### Justification
The restriction maps preserve products and the equation $u^n=1$, so $P_n$ is a presheaf of abelian groups. The sheafification construction and its universal property are supplied by [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). Group operations and the $\mathbb Z/n$-action descend through sheafification: matching families can be added or multiplied after passing to a common covering sieve, and the relations hold locally and therefore in the sheafification. The same construction applied to objectwise tensor products gives the stated tensor sheaf; its universal property follows by applying the presheaf tensor universal property locally and gluing. Thus the constructions do not depend on representatives of local sections.

For the trivialization, if $n>1$ and the characteristic divided $n$, writing $n=p^r m$ would give $\zeta^m=1$ because in a field of characteristic $p$ the equation $t^{p^r}=1$ has only the root $1$; this contradicts the order $n$. Hence $n$ is invertible in $k$. The $n$ elements $1,\zeta,\ldots,\zeta^{n-1}$ are distinct, and their pairwise differences are units on every $k$-scheme. Consequently $T^n-1=\prod_{i=0}^{n-1}(T-\zeta^i)$ with pairwise comaximal factors. If $u\in P_n(U)$, apply the Chinese remainder idempotents to $u$ on each affine open of $U$: the resulting finite disjoint open decomposition has $u=\zeta^i$ on its $i$th part. Open restrictions are étale, and these decompositions cover $U$. Thus $a\mapsto\zeta^a$ is locally surjective. It is locally injective because distinct $\zeta^i-\zeta^h$ are units, so equality can occur only on the empty scheme. The sheafification universal property and the sheaf gluing condition therefore make the induced map an isomorphism. Tensoring this isomorphism $j$ times and using the canonical multiplication isomorphism $(\mathbb Z/n)^{\otimes j}\cong\mathbb Z/n$ gives the displayed twist trivialization. For $n=1$ the root and coefficient groups are trivial, giving the same conclusion.

## The degree-zero homology quotient

[Open item](item-lem-author-c8fb25136bd5-zero-homology-quotient) · level 6

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

[Open item](item-lem-author-c8fb25136bd5-bloch-classical-comparison) · level 6


### Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq0$. Let $R^r(X)\subset Z^r(X)$ be the subgroup generated by principal divisors $\operatorname{div}_Y(f)$, for integral closed $Y\subset X$ of codimension $r-1$ and nonzero rational functions $f\in k(Y)^\times$; for $r=0$ this subgroup is zero. Here a principal divisor is the codimension-one cycle of orders of $f$, defined using lengths of local rings, pushed forward from $Y$ to $X$. Then $R^r(X)=B^r(X)$, with $B^r(X)=\operatorname{im}(\partial_1)$ the degree-zero boundary subgroup. The classical Chow group is $\mathrm{CH}^r(X)=Z^r(X)/R^r(X)$.

### Statement references

[lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries)

### Facts & Assumptions

**Given:** The field $k$, smooth finite-type scheme $X$ and $r\geq0$ in the statement; separatedness is not assumed.

**Goal:** Prove both inclusions between the principal-divisor relations and the degree-one boundaries.

[F1] On $\Delta^1$ use $t=t_0$, so the alternating boundary is the fiber at $t=0$ minus the fiber at $t=1$, with the local-length multiplicities. Degree-zero cycles are $Z^r(X)$. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-c8fb25136bd5-degree-zero-cycles](item-lem-author-c8fb25136bd5-degree-zero-cycles), [lem-author-c8fb25136bd5-one-boundaries](item-lem-author-c8fb25136bd5-one-boundaries)

[F2] Proper generically finite pushforward carries a principal divisor to the divisor of its norm. Graph closure gives the zero-minus-pole formula, with the same local-length orders, without separatedness over the field. [thm-adjudicate-16c74c1a77ef-principal-divisor-input](item-thm-adjudicate-16c74c1a77ef-principal-divisor-input)

[F3] A smooth finite-type scheme over a field is noetherian and regular and has finitely many disjoint integral open-and-closed components. Indeed it has finitely many irreducible components, and two cannot meet because every regular local ring is a domain. We may calculate cycles separately on these components. The finite-type dimension, codimension and Cartier-divisor formulas and regular-local-domain fact are imported with their exact hypotheses in [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input). In particular a proper dominant projection has dimension difference equal to its function-field transcendence degree. The regularity input there justifies the clopen decomposition without a perfect-field assumption.

### Proof

1.1 Work on one integral component of $X$ of dimension $d$. Let $W\subset X\times\mathbf A^1_t$ be an admissible codimension-$r$ generator, so $\dim W=d-r+1$. Let $\overline W$ be its reduced closure in $X\times\mathbf P^1_t$ and let $Y\subset X$ be the reduced image under projection. The projection is proper, so $Y$ is closed and integral; its factorization through the reduced $Y$ is proper by base change along $Y\hookrightarrow X$. Its generic fiber is a closed integral subscheme of $\mathbf P^1_{k(Y)}$, and hence has dimension zero or one; these are also the possible transcendence degrees of $k(W)/k(Y)$. The dimension formula in [F3] gives $\dim Y=\dim W$ or $\dim W-1$. If the latter holds, $W$ is an integral closed subset of $Y\times\mathbf A^1$ of its full dimension, hence equals that product; its two face cycles are both $[Y]$, and its boundary is zero. This also handles every possible generator when $r=0$, since then $\dim W=d+1$. [F1, F3]

1.2 Conversely, for $r>0$ let $Y\subset X$ be integral of codimension $r-1$ and $f\in k(Y)^\times$. Form the graph closure $G\subset Y\times\mathbf P^1_u$ of [F2]. Remove the fiber $u=1$ and use $t=u/(u-1)$ to identify $\mathbf P^1_u\setminus\{1\}$ with $\mathbf A^1_t$. If $f\ne1$, this open part of $G$ is a nonempty integral closed codimension-$r$ subscheme of $X\times\mathbf A^1_t$. Its $t=0,1$ intersections are $G_0,G_\infty$. Each is empty or an effective Cartier divisor of pure codimension one on the integral finite-type $G$, so the cycle is admissible. Its boundary equals $\operatorname{div}_Y(f)$ by the graph formula. If $f=1$, the divisor is zero and no generator is needed. Thus every principal-divisor relation is a boundary. [F1, F2, F3]

2.1 For the equal-dimensional case of step 1.1 $\overline W\to Y$ is proper dominant generically finite and $Y$ has codimension $r-1$. The rational function $h=t/(t-1)$ on $\overline W$ is nonzero and defined as a rational function because admissibility excludes $W$ from either endpoint. Its divisor is the zero fiber minus the one fiber, with exactly the lengths in [F1]; it is invertible near infinity. By the norm formula, pushing this cycle to $X$ gives $\partial[W]=\operatorname{div}_Y(\operatorname{Nm}_{k(W)/k(Y)}h)$. Thus every boundary lies in $R^r(X)$, with zero as already shown in the product case. [F1, F2, step 1.1]

3.1 The two inclusions prove $R^r(X)=B^r(X)$ for $r>0$, and step 1.1 proves it for $r=0$ because $R^0(X)=0$. The finite clopen decomposition of [F3] gives the equality on $X$ and the stated ordinary rational-equivalence quotient. [F3, step 1.1, step 1.2, step 2.1] ∎

### Source notes
The old MVW import covered separated schemes only. The current argument retains the original smooth finite-type scope by using precise proper-divisor formulas that impose no separatedness over the field. It does not invoke localization or an identification with a separately constructed motivic theory.


## Restriction modulo its kernel

[Open item](item-lem-author-75596422a482-quotient-inclusion) · level 6

### Statement
With $j^*:z^r(U,\bullet)\to z^r(U\setminus T,\bullet)$ as above and $K=\ker j^*$, the induced chain map $z^r(U,\bullet)/K\to z^r(U\setminus T,\bullet)$ is degreewise injective and has the same cokernel complex as $j^*$.

### Statement references

[lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

### Facts & Assumptions

**Given:** A field $k$, a smooth finite-type $k$-scheme $U$, closed $T\subset U$, and $r\geq0$.

**Goal:** Identify the quotient map and its cokernel.

[F1] $K$ is the kernel subcomplex of the restriction chain map. [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

### Proof

1.1 In each degree, the induced map from the quotient by the kernel is injective and has image equal to the image of the original homomorphism. [F1, algebra]

2.1 Because the original map and the quotient projection commute with differentials, the induced map is a chain map. Its cokernel is the target modulo the same image, with the same induced differential. [F1, step 1.1] ∎


## Matching families of abelian presheaves

[Open item](item-lem-author-a44f2061570d-matching-groups) · level 6

### Statement
Let $\mathcal C$ be a small site and $F$ a presheaf of abelian groups. For a sieve $R$ on an object $U$, the compatible families of sections of $F$ indexed by arrows in $R$ form an abelian group under componentwise addition. If $F$ is a sheaf, restriction from $F(U)$ to this group is an isomorphism for every covering sieve $R$.

A presheaf of abelian groups is a contravariant functor to abelian groups. A compatible family assigns $s_f\in F(V)$ to every $f:V\to U$ in $R$, with $F(g)(s_f)=s_{fg}$ for every $g:W\to V$.

### Facts & Assumptions

**Given:** A small site, an abelian presheaf $F$, an object $U$, and a sieve $R$ on $U$.

**Goal:** Prove the group and sheaf assertions.

[F1] A sheaf has a unique amalgamation for each compatible family on a covering sieve. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

### Proof

**Proof technique:** Check the matching equations componentwise.

1.1 The zero family is compatible, and sums and inverses of compatible families remain compatible because every restriction map of $F$ is a group homomorphism. The abelian group laws hold componentwise. [given, construct]

2.1 Restriction sends a section on $U$ to a compatible family and is a homomorphism. When $R$ covers $U$, existence and uniqueness of amalgamations in [F1] make it bijective, hence an isomorphism. [F1, step 1.1] ∎

## Units in a sheaf of rings form a sheaf

[Open item](item-lem-author-8e1c0251ef0d-units-sheaf) · level 6

### Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site. The presheaf $U\mapsto\mathcal O(U)^\times$ is a sheaf of abelian groups, where $\mathcal O(U)^\times$ denotes the multiplicatively invertible elements.

### Facts & Assumptions

**Given:** A sheaf of commutative rings $\mathcal O$ on a site.

**Goal:** Prove the sheaf condition for its units.

[F1] A sheaf has unique gluing for compatible local sections, as in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification).

### Proof

1.1 For a covering of $U$, compatible local units glue by [F1] to a section $a\in\mathcal O(U)$. Their inverses are compatible, because restriction preserves inverses, and glue to a section $b$. The restrictions of both $ab$ and $1$ agree on the cover, so $ab=1$ by uniqueness. Thus $a$ is a unit. [F1, construct]

2.1 Uniqueness of a glued unit follows from uniqueness in $\mathcal O$. Multiplication and inversion commute with restriction, and commutativity makes the unit groups abelian. Hence the units form a sheaf of abelian groups. [F1, step 1.1] ∎

## Local sections of a torsor give a cocycle

[Open item](item-lem-author-8e1c0251ef0d-torsor-cocycle) · level 6

### Statement
Let $G$ be a sheaf of abelian groups on a site with fibre products. A $G$-torsor is a sheaf of sets with a $G$-action which is locally nonempty and simply transitive on sections whenever nonempty. If $s_i$ are sections over a covering $\{U_i\to U\}$ and $s_j=g_{ij}s_i$ on $U_i\times_U U_j$, then $g_{ij}g_{jk}=g_{ik}$ on triple fibre products. Replacing $s_i$ by $s'_i=h_i s_i$ replaces $g_{ij}$ by $g'_{ij}=h_jg_{ij}h_i^{-1}$.

### Facts & Assumptions

**Given:** A $G$-torsor and the displayed local sections.

**Goal:** Prove the cocycle and change-of-section formulas.

[F1] Restrictions and fibre products are those of the site in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification).

### Proof

1.1 Simple transitivity gives a unique $g_{ij}$ on each double fibre product. On a triple fibre product, $s_k=g_{jk}g_{ij}s_i$ and also $s_k=g_{ik}s_i$; uniqueness and commutativity give the cocycle equation. [F1, given]

2.1 Substitution gives $s'_j=h_jg_{ij}h_i^{-1}s'_i$. Uniqueness gives the stated replacement formula. [step 1.1, algebra] ∎

## Actual raw simplicial cycles satisfy descent without separatedness

[Open item](item-lem-adjudicate-f6007757a8ac-raw-simplicial-descent) · level 6


### Statement
Assume AC and fixed universes for derived categories. Let $X$ be a smooth finite-type scheme over any field, without a separatedness assumption, and $r\geq0$. Put $C(W)=z^r(W,\bullet)$ for every open W of X, regarding homological degree n as cohomological degree -n. Let $aC$ be its degreewise sheafification on the small Zariski site. The actual sheafification unit
$$C(X)\longrightarrow R\Gamma(X_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism, naturally for open restriction. The raw presheaf C also takes every binary open cover to a homotopy-cartesian square. This does not replace the original raw definition by hypercohomology: it proves their canonical comparison.

### Facts & Assumptions
**Given:** X, r and the raw cycle presheaf C as stated, together with AC and fixed universes for the indicated derived categories.

**Goal:** Establish raw Mayer–Vietoris, then the actual sheafification-unit equivalence.

[F1] The nonseparated raw simplicial localization theorem applies on every open of X. [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

[F2] Raw cycles supported in the closed complement are exactly the restriction kernel, by [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel). Restrictions preserve faces and boundary by [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex). An acyclic restriction cokernel identifies this kernel with the actual homotopy fiber, by [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber).

[F3] [thm-adjudicate-f6007757a8ac-separated-cycle-descent-input](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input) supplies the canonical raw-to-Zariski-hypercohomology unit equivalence on smooth quasi-projective schemes, with its exact separated source scope. Derived sheaf sections satisfy binary open Mayer–Vietoris for any scheme site; this is the ordinary derived sheaf gluing statement and requires no separatedness.

### Proof
1.1 Let $W=U\cup V$ be a binary open cover and put $Z=W\setminus U=V\setminus(U\cap V)$, with its reduced induced structure. On a pure-dimensional component of dimension $d$, put $q=d-r$. The restriction kernels for $C(W)\to C(U)$ and $C(V)\to C(U\cap V)$ are identified by restriction: an integral cycle supported on the same closed scheme $Z\times\Delta^n$ is closed in both ambients, and its face condition and dimension are identical. With this common kernel denoted $D=z_q(Z,\bullet)$ there are compatible exact rows
$$0\to D\to C(W)\to C(U)\to Q_1\to0,$$
$$0\to D\to C(V)\to C(U\cap V)\to Q_2\to0.$$
The map between their first terms is the identity under the stated identification. By [F1] both cokernels $Q_i$ are acyclic. This uses homological dimension indexing on the possibly singular $Z$, with no smoothness hypothesis on $Z$. [F1, F2]

2.1 By the kernel-to-fiber lemma in [F2], $D$ maps quasi-isomorphically to both actual restriction fibers, compatibly with the rows of step 1.1. Thus the map between those fibers is a quasi-isomorphism, proving that the raw restriction square is homotopy cartesian. A smooth finite-type scheme has finitely many integral clopen components; cycle complexes and the two rows split over them. Apply the argument with the respective $d-r$ on each component when $W$ is not pure-dimensional. [F1, F2, step 1.1]

3.1 The canonical unit $\eta:C(-)\to R\Gamma(-,aC)$ is natural for open restriction. Its target has binary open Mayer–Vietoris by derived sheaf gluing: sections on the union are the homotopy fiber of the difference of the two restriction maps to the intersection. The source has that same property by step 2.1. A morphism between these two fiber diagrams is a quasi-isomorphism on the union whenever it is so on the two opens and their intersection. [F3, step 2.1]

4.1 Choose a finite affine open cover $X=A_1\cup\cdots\cup A_m$. The comparison $\eta$ is a quasi-isomorphism on each $A_i$ by [F3]. Induct on the number of opens in the union. For $W=A_1\cup\cdots\cup A_{m-1}$, the intersection $W\cap A_m$ is a quasi-compact open in the affine finite-type scheme $A_m$, hence smooth quasi-affine and quasi-projective over the field. Its restriction of $aC$ is the sheafification of the same cycle presheaf there. Thus [F3] supplies the actual unit equivalence on this intersection, and step 3.1 gives it on $W\cup A_m$. Induction proves the claim on $X$, including the empty case. Because the maps throughout are the canonical units, their conclusion is independent of the cover and natural for open restriction. [F3, step 3.1, choose] ∎

### Source notes
The two-localization-row argument is exactly the formal proof pattern of MVW Proposition19.12. Its previously missing nonseparated input is now the separately sourced Levine theorem. The induction uses ordinary separated comparison only on affine or quasi-affine opens. It does not use raw-cycle descent as a premise, a strict pullback of cycle images, or an unqualified assertion that an unbounded complex of flasque sheaves computes derived sections.


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

### Justification
The residue-field homomorphism is induced by the local homomorphism of the scheme morphism, so complete decomposition is an intrinsic condition on points. The category is small, and the maximal topology contains the specified sieves. The intersection of all Grothendieck topologies containing them is again a Grothendieck topology, giving the least one. The meanings of Nisnevich covering family and generated topology are those of [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) and [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification).

For an abstract blowup square, the map $Z\amalg Y\to X$ is proper: a closed immersion is proper, and a finite disjoint union of proper $X$-schemes is proper. Indeed, after any base change, a closed immersion remains a closed immersion, and the image of a closed subset of a finite disjoint union is the finite union of its closed component images; finite type and separatedness are likewise preserved by this finite union. If $x$ lies in the closed subset underlying $Z$, the unique point of $Z$ over $x$ has residue field $\kappa(x)$. If $x$ lies in its open complement, the assumed isomorphism gives a point of $Y$ over $x$ with that residue field. Hence $Z\amalg Y\to X$ is completely decomposed. Write $g:W=Z\amalg Y\to X$, let $R$ be the sieve generated by $g$, and let $S$ be the sieve generated by the two component maps. These sieves need not be equal, but $S$ is covering if and only if $R$ is covering in any topology containing the Nisnevich covers. Indeed, $S\subseteq R$, so covering of $S$ implies covering of $R$ by upward closure. Conversely, the pullback sieve $g^*S$ contains both open-and-closed inclusions $Z\to W$ and $Y\to W$. These inclusions form a Nisnevich covering family: they are étale and each point of $W$ lies in one summand with unchanged residue field. Thus $g^*S$ is covering. Every arrow $f:T\to X$ in $R$ factors as $g\circ h$ for some $h:T\to W$, so $f^*S=h^*(g^*S)$ is covering by pullback stability. If $R$ is covering, local character (the transitivity axiom for covering sieves) therefore implies that $S$ is covering. Here $g$ is completely decomposed proper, so $R$ is a generating cdh covering sieve, and the associated two-member family is consequently cdh covering. This argument uses only the existing Nisnevich and topology axioms, and neither equates these sieves nor assumes a later finite-refinement theorem.

## Degree zero and negative homology of the cycle complex

[Open item](item-lem-bloch-chow-and-negative-range) · level 7


### Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme and $r\geq0$. With ordinary Chow group $\mathrm{CH}^r(X)$ defined as codimension-$r$ cycles modulo principal-divisor rational equivalence as specified by the classical relation comparison, the identity on cycles induces $H_0z^r(X,\bullet)\cong\mathrm{CH}^r(X)$, and $H_nz^r(X,\bullet)=0$ for $n<0$. Consequently, if for every integer $p$ there is an isomorphism $H^{p,r}(X)\cong\mathrm{CH}^r(X,2r-p)$, then $H^{2r,r}(X)\cong\mathrm{CH}^r(X)$ and $H^{p,r}(X)=0$ for $p>2r$. The existence of the comparison isomorphisms is not asserted.

### Statement references

[lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

### Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement; for the final conditional assertion, the stated comparison isomorphisms.

**Goal:** Identify degree-zero homology and derive the negative and reindexed vanishing statements.

[F1] Degree-zero homology is $Z^r(X)/B^r(X)$. [lem-author-c8fb25136bd5-zero-homology-quotient](item-lem-author-c8fb25136bd5-zero-homology-quotient)

[F2] The local graph-and-norm comparison identifies $B^r(X)$ with the subgroup of principal-divisor relations defining $\mathrm{CH}^r(X)$. [lem-author-c8fb25136bd5-bloch-classical-comparison](item-lem-author-c8fb25136bd5-bloch-classical-comparison)

[F3] Negative homology vanishes, and the stated higher-Chow comparison reindexes degree $2r$ to degree zero and $p>2r$ to negative homological degrees. [lem-author-c8fb25136bd5-negative-homology](item-lem-author-c8fb25136bd5-negative-homology), [lem-author-c8fb25136bd5-comparison-reindexing](item-lem-author-c8fb25136bd5-comparison-reindexing)

[F4] Higher Chow groups are defined as homology of the Bloch complex. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

### Proof

1.1 The two relation subgroups agree by [F2], so the identity on $Z^r(X)$ identifies the quotient in [F1] with the ordinary Chow group. This identification commutes with open restriction: a cycle restricts to its intersection with the open, and the face-length coefficients are unchanged there, so the common boundary/relation subgroup is preserved and the induced quotient maps agree. [F1, F2, F4]

2.1 Negative homology vanishes by [F3]. Under the additional comparison isomorphisms, [F3] identifies the degree-$2r$ group with degree-zero homology and gives zero for $p>2r$; composing the former identification with step 1.1 gives the asserted Chow-group isomorphism. [given, F3, F4, step 1.1] ∎


## Cycle complexes with fixed support

[Open item](item-def-supported-higher-cycle-complex) · level 7

### Definition
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $V=U\setminus T$, and $r\geq0$. In the unnormalized Bloch complex $z^r(U,\bullet)$, define $z_T^r(U,n)$ to be the free subgroup generated by admissible integral cycles contained in $T\times\Delta^n$, with differential induced from $z^r(U,\bullet)$. Put $\mathrm{CH}_T^r(U,n)=H_n(z_T^r(U,\bullet))$ and $\mathrm{CH}_T^r(U)=\mathrm{CH}_T^r(U,0)$. Its cohomological indexing is $H_T^{p,r}(U;z)=\mathrm{CH}_T^r(U,2r-p)$.

The restriction $j^*:z^r(U,\bullet)\to z^r(V,\bullet)$ has homotopy-fiber model $F_n=z^r(U,n)\oplus z^r(V,n+1)$, with differential $(a,b)\mapsto(\partial a,j^*a-\partial b)$. The inclusion $z_T^r(U,\bullet)\to F$ is a quasi-isomorphism, so the displayed supported groups are also the homology groups of this derived restriction fiber, with the same indexing. A quasi-isomorphism is a chain map inducing isomorphisms on all homology groups.

### Definition references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[lem-author-75596422a482-quotient-inclusion](item-lem-author-75596422a482-quotient-inclusion)

[lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

### Facts & Assumptions

**Given:** $k,U,T,V,r$ as in the definition.

**Goal:** Justify the supported complex, its homology and the fiber comparison.

[F1] The Bloch complex and its homology are defined by admissible cycles and alternating face boundaries. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F2] Face boundaries preserve support, restriction is a chain map, and its kernel is the supported complex. [lem-author-75596422a482-face-support](item-lem-author-75596422a482-face-support), [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction), [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F3] The quotient by that kernel embeds into the target with the same cokernel as restriction. [lem-author-75596422a482-quotient-inclusion](item-lem-author-75596422a482-quotient-inclusion)

[F4] The restriction cokernel is acyclic by the imported localization theorem, and an acyclic cokernel makes the kernel a model for the homotopy fiber. [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input), [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

### Justification
By [F1] and [F2], the displayed groups form a subcomplex, so its homology quotient is defined. The hypotheses of [F4] hold for the stated field, smooth finite-type scheme and open complement; [F2] identifies the kernel, and [F3] records the quotient used in the comparison. Thus [F4] gives the stated quasi-isomorphism. The cohomological notation is a reindexing of these homology groups. This construction depends only on the closed subset $T$ and does not identify the whole support fiber with the image of ordinary Chow groups of $T$ in those of $U$. A comparison with a separately defined motivic cohomology theory requires its own compatible comparison theorem.


## Milnor K symbols and the Nisnevich sheaf

[Open item](item-def-milnor-k-sheaf-interface) · level 7

### Definition
All rings here are commutative and unital, and ring homomorphisms preserve the unit. For a ring $A$, let $A^\times$ be its abelian group of units under multiplication. Regard it as a $\mathbb Z$-module, and form its tensor algebra $T_{\mathbb Z}(A^\times)=\bigoplus_{n\geq 0}(A^\times)^{\otimes n}$, with degree-zero summand $\mathbb Z$. Let $I_A$ be the two-sided homogeneous ideal generated by $a\otimes(1-a)$ for all $a$ such that both $a$ and $1-a$ are units. The **naive Milnor K-ring** is $K_*^{M,\mathrm{naive}}(A)=T_{\mathbb Z}(A^\times)/I_A$; its degree-$d$ abelian group, for an integer $d\geq 0$, is $K_d^{M,\mathrm{naive}}(A)$. The image of $a_1\otimes\cdots\otimes a_d$ is written $\{a_1,\ldots,a_d\}$ and called a **Milnor symbol**. Thus symbols are additive in each entry with respect to multiplication of units, and $\{a,1-a\}=0$ whenever both entries are units. In degree zero the group is $\mathbb Z$.

Fix a scheme $X$ and the suitably small Nisnevich site of étale $X$-schemes specified in [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface), with the size convention of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). For an object $U$ put $P_d(U)=K_d^{M,\mathrm{naive}}(\Gamma(U,\mathcal O_U))$; for a morphism $V\to U$ use restriction of global functions. The **naive Milnor K-sheaf** $\mathcal K_d^{M,\mathrm{naive}}$ is the Nisnevich sheafification $aP_d=(P_d^+)^+$, with its induced abelian-group structure. Here the plus construction and its sheafification unit are those defined in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). In particular, degree-zero sheafification is the sheafification of the constant presheaf $\mathbb Z$; its sections are not asserted to be $\mathbb Z$ on every object.

This specifies the naive convention only. In particular, the name $\mathcal K_d^M$ in a comparison must be accompanied by its intended convention; no identification with the separately constructed improved Milnor K-theory, including for local rings with finite residue fields, is asserted here. No comparison with motivic cohomology is asserted by this definition.

### Justification
A unital ring homomorphism sends units to units and sends each generator $a\otimes(1-a)$ of $I_A$ to the corresponding generator for the target ring. It therefore induces a graded ring homomorphism on the quotients. Identities and composition are preserved, so restriction of global functions makes $P_d$ a presheaf of abelian groups. The ideal is homogeneous and has no degree-zero generators, giving the stated degree-zero group.

By [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), applying plus twice produces a sheaf of sets with the stated universal property. Its group operations are induced by the presheaf operations: matching families can be added, negated and given zero componentwise. Families on two covering sieves can be compared on a common covering subsieve, and agreement after restriction is preserved by these operations. Hence the operations are well-defined on plus classes and satisfy the group laws locally, and therefore on the classes. Applying the same argument a second time gives an abelian-group sheaf. The degree-zero assertion follows because sheafification is applied to the presheaf with value $\mathbb Z$ and identity restrictions, rather than being evaluated before sheafification.

### Reading limits
Remark 6.8 of the article uses $K_d^M$ in a reported comparison; the passage does not specify the naive or improved convention. This item fixes a usable naive convention and does not attribute that choice to the article.

## Pointwise kernels of abelian sheaves

[Open item](item-lem-author-a44f2061570d-kernel-sheaf) · level 7

### Statement
For a morphism $f:F\to G$ of abelian sheaves on a small site, the presheaf $K(U)=\ker(F(U)\to G(U))$ is a sheaf and is the categorical kernel of $f$ among abelian sheaves. A morphism of abelian sheaves is a natural transformation whose components are group homomorphisms.

### Facts & Assumptions

**Given:** A small site and a morphism $f:F\to G$ of abelian sheaves.

**Goal:** Establish the sheaf and kernel properties of the pointwise kernel $K$.

[F1] Covering-sieve matching families of an abelian sheaf have unique amalgamations. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

### Proof

**Proof technique:** Glue in the source sheaf and use uniqueness in the target sheaf.

1.1 A compatible family in $K$ glues uniquely to $s\in F(U)$ by [F1]. Its image $f(s)$ restricts to zero on the covering sieve, so uniqueness of amalgamation in $G$ gives $f(s)=0$. Thus $s\in K(U)$ and $K$ is a sheaf. [F1, given]

2.1 The inclusions $K(U)\subseteq F(U)$ form a natural transformation killed by $f$. Any sheaf morphism into $F$ killed by $f$ factors uniquely through these pointwise kernels, and the factor maps are natural. Thus $K$ has the categorical kernel universal property. [step 1.1, construct] ∎

## Frames and their transition units

[Open item](item-lem-author-8e1c0251ef0d-frame-transitions) · level 7

### Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site, and let $L$ be a sheaf of $\mathcal O$-modules locally isomorphic to $\mathcal O$. A frame over $U$ is an $\mathcal O|_U$-module isomorphism $\mathcal O|_U\to L|_U$. The frames form a torsor under $\mathcal O^\times$: they form a sheaf of sets, have local sections, and whenever two frames exist over the same object there is a unique unit carrying one to the other. If frames $e_i$ are chosen on a cover, their transition units $g_{ij}$ defined by $e_j=g_{ij}e_i$ satisfy $g_{ij}g_{jk}=g_{ik}$ on triple overlaps.

### Facts & Assumptions

**Given:** $\mathcal O$ and $L$ as stated.

**Goal:** Establish the frame torsor and its transition equation.

[F1] The units form a sheaf by [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf).

### Proof

1.1 A module map from $\mathcal O|_U$ to $L|_U$ is determined by the image of $1$. If it is an isomorphism, composing with another frame's inverse gives an automorphism of $\mathcal O|_U$, necessarily multiplication by a unique unit. Compatible maps glue as maps of sheaves; compatible local inverses glue as well, so frames satisfy the sheaf condition. Local freeness supplies local frames. [F1, construct]

2.1 On a triple overlap, $e_k=g_{jk}e_j=g_{jk}g_{ij}e_i$. Uniqueness of the unit in step 1.1 gives $g_{ij}g_{jk}=g_{ik}$. Thus frames have the stated torsor and transition properties. [step 1.1, algebra] ∎

## Compatible local torsor sections determine an isomorphism

[Open item](item-lem-author-8e1c0251ef0d-cocycle-morphism) · level 7

### Statement
Let $P,Q$ be torsors under a sheaf of abelian groups $G$ on a site, and suppose sections $p_i\in P(U_i)$ and $q_i\in Q(U_i)$ over a cover of the terminal object have the same transition units, with the convention of [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle). Then there is a unique equivariant isomorphism $P\to Q$ carrying every $p_i$ to $q_i$.

### Facts & Assumptions

**Given:** The two torsors and matching local sections.

**Goal:** Construct the equivariant isomorphism.

[F1] Torsors are locally nonempty sheaves with simply transitive actions, as in [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle).

### Proof

1.1 Over each $U_i$, send $g p_i$ to $g q_i$. Simple transitivity makes this a well-defined equivariant bijection, natural after restriction. On overlaps the common transition unit gives the same map from either index. [F1, construct]

2.1 The sheaf condition glues these local maps, and glues their local inverses, to mutually inverse global morphisms. Any equivariant map taking $p_i$ to $q_i$ agrees with the constructed map locally, hence globally. [F1, step 1.1] ∎

## Evaluation preserves kernels

[Open item](item-lem-author-a44f2061570d-evaluation-left-exact) · level 8

### Statement
For an object $U$ of a small site, evaluation $F\mapsto F(U)$ is additive and preserves kernels of morphisms of abelian sheaves. Consequently, once the category of abelian sheaves is known to be abelian, evaluation is left exact: it preserves exact sequences of the form $0\to F'\to F\to F''$.

### Facts & Assumptions

**Given:** An object $U$ of a small site.

**Goal:** Prove the stated properties of evaluation.

[F1] Kernels of abelian sheaf morphisms are computed objectwise. [lem-author-a44f2061570d-kernel-sheaf](item-lem-author-a44f2061570d-kernel-sheaf)

### Proof

**Proof technique:** Evaluate the kernel universal property.

1.1 Addition of morphisms of abelian sheaves is defined componentwise, so evaluation preserves sums and the zero morphism. By [F1], evaluating a kernel gives the kernel of the evaluated homomorphism. [F1, given]

2.1 In an abelian category, exactness of $0\to F'\to F\to F''$ means that $F'\to F$ identifies $F'$ with the kernel of $F\to F''$. Step 1.1 therefore gives exactness after evaluation in abelian groups. [step 1.1, assume-hyp] ∎

## The two supported cycle degrees on a curve

[Open item](item-lem-author-1437578267d2-supported-degrees) · level 8

### Statement
Assume the Axiom of Choice (AC). Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $T\subset U$ be an integral closed curve. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$. Let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0$ nor $s=1$. The degree-zero and degree-one terms of $z_T^3(U,\bullet)$ are respectively $Z_0(T)$ and $B_1(T)$. The boundary is $b[W]=[W_1]-[W_0]$, where
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)]$$
and $p:T\times\mathbb A^1\to T$ is projection. Consequently $\mathrm{CH}_T^3(U)=Z_0(T)/bB_1(T)$. Endpoint projection is an isomorphism, so no residue-field factor is omitted.

### Facts & Assumptions
**Given:** AC and $k,U,T$ as stated; write $s=t_1$ and $t_0=1-s$ on the algebraic simplex $\Delta^1$.

**Goal:** Identify both terms and the boundary with its multiplicities.

[F1] The supported complex is generated by admissible integral codimension-three cycles supported in $T\times\Delta^n$; its differential is the alternating sum of face intersections, with local intersection lengths. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)

[F2] The finite-type dimension formula computes the dimensions of integral closed subschemes in the ambient products. Its use here carries AC. [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 In degree zero the codimension-three integral subschemes are closed points; the support condition selects exactly the closed points of $T$. Thus the term is $Z_0(T)$. [F1, F2, given]

1.2 In degree one the ambient dimension is four, so supported generators have dimension one. An integral closed subscheme set-theoretically supported in $T\times\mathbb A^1$ factors through that reduced closed subscheme. Conversely every integral one-dimensional closed subscheme there has codimension three in the ambient product. It meets an endpoint properly exactly when it is not contained in that endpoint: a proper closed subset of a noetherian integral curve is finite and zero-dimensional. Hence the degree-one term is $B_1(T)$. [F1, F2, given, algebra]

2.1 The face $t_0=0$ is $s=1$ and $t_1=0$ is $s=0$. The equations $1-s$ and $s-1$ differ by a unit, so their quotient lengths agree. The face formula gives $b[W]=[W_1]-[W_0]$ with the displayed coefficients. Projection restricts to an isomorphism $T\times\{\epsilon\}\to T$, preserving residue fields. [F1, step 1.2, algebra]

3.1 There are no negative-degree terms, so zeroth homology is the degree-zero term modulo the degree-one boundary image. The stated quotient follows. [F1, step 1.1, step 2.1] ∎

## Tensor products multiply frame transitions

[Open item](item-lem-author-8e1c0251ef0d-tensor-transitions) · level 8

### Statement
Let $L,M$ be locally free rank-one modules over a sheaf of commutative rings. On a common trivializing cover, if their frames have transition units $g_{ij}$ and $h_{ij}$, then the tensor-product frames of $L\otimes M$ have transition units $g_{ij}h_{ij}$. The frame of the unit module has transition units $1$.

### Facts & Assumptions

**Given:** Local frames $e_i$ of $L$ and $f_i$ of $M$ on a common cover.

**Goal:** Compute tensor-product transitions.

[F1] Frame transitions are defined and satisfy the cocycle equation by [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions).

### Proof

1.1 The tensor product of the two local isomorphisms from the structure sheaf identifies $L\otimes M$ locally with the structure sheaf; its frame is $e_i\otimes f_i$. [F1, construct]

2.1 On an overlap, $e_j\otimes f_j=(g_{ij}e_i)\otimes(h_{ij}f_i)=g_{ij}h_{ij}(e_i\otimes f_i)$. The standard frame $1$ of the unit module has transition $1$. [F1, step 1.1, algebra] ∎

## Evaluation preserves chain homotopies

[Open item](item-lem-author-a44f2061570d-evaluation-homotopy) · level 9

### Statement
For an object $U$ of a small site, evaluation sends complexes of abelian sheaves and chain maps to complexes and chain maps of abelian groups, and sends chain-homotopic maps to chain-homotopic maps. In particular it sends a chain-homotopy equivalence to a chain-homotopy equivalence.

A cochain complex has maps $d^n:C^n\to C^{n+1}$ with $d^{n+1}d^n=0$. A chain homotopy from $f$ to $g$ consists of maps $h^n:C^n\to D^{n-1}$ satisfying $f-g=dh+hd$. A homotopy equivalence has a chain-map inverse up to such homotopies.

### Facts & Assumptions

**Given:** An object $U$ and complexes and maps as in the statement.

**Goal:** Prove preservation of complexes, homotopies and homotopy equivalences.

[F1] Evaluation is additive. [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact)

### Proof

**Proof technique:** Evaluate the defining identities.

1.1 Evaluation preserves composition, identities, sums and zero maps. Thus it carries $d^2=0$ and the chain-map equations to the corresponding equations of abelian groups. [F1, given]

2.1 Evaluating $f-g=dh+hd$ gives the homotopy identity for $h(U)$. Evaluating the two inverse-up-to-homotopy identities for a homotopy equivalence gives the final assertion. [F1, step 1.1] ∎

## Imported derived sections on a small site

[Open item](item-lem-author-a44f2061570d-site-derived-input) · level 9


### Statement
Assume the Axiom of Choice and fixed size bounds, and let $\mathcal C$ be a small site with $U$ an object. The category of abelian sheaves on $\mathcal C$ is abelian. Evaluation at $U$ has a right derived functor on the unbounded derived category, computed by evaluating a K-injective resolution. For a sheaf $F$ placed in degree zero, this derived value may also be computed by an injective resolution concentrated in nonnegative degrees.

An injective sheaf is an object $I$ such that maps into $I$ extend across monomorphisms. A quasi-isomorphism is a chain map inducing isomorphisms on all cohomology objects. A complex $I^\bullet$ is K-injective if every chain map from an acyclic complex to it is chain-homotopic to zero. A K-injective resolution is a quasi-isomorphism into such a complex. The derived category is obtained from the category of complexes by formally inverting quasi-isomorphisms. A right derived functor here means the functor on that localization supplied by the cited construction.

### External input
The cited Stacks results supply the abelian category, the unbounded K-injective resolution and derived-functor construction on a ringed site, and the ordinary nonnegative injective-resolution computation. Apply the ringed-site result to the constant integer sheaf: its modules are precisely abelian sheaves. These are imported established results, not locally reconstructed proofs. The hypotheses are a small site, the indicated size conventions and Choice; $U$ must be an object of the site. Lemma 13.31.4 applies to the nonnegative complex of injectives in this abelian category and identifies an ordinary injective resolution as a K-injective resolution. Thus its evaluation computes the same unbounded derived value. The foundational existence proofs remain imported.

### Facts & Assumptions

[A1] Choice and the fixed size bounds are retained for the imported K-injective and ordinary injective-resolution existence constructions applied in step 2.1; their foundational proofs are not reconstructed here. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** A small site $\mathcal C$, an object $U$, Choice and fixed size bounds.

**Goal:** Obtain the stated derived-evaluation interface and its ordinary-sheaf computation.

[F1] The imported results in External input apply to abelian sheaves and to evaluation at an object. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[F2] Evaluation is additive and left exact once the sheaf category is abelian. [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact)

[F3] A bounded below complex of injectives in an abelian category is K-injective, by the imported [Stacks Lemma 13.31.4](https://stacks.math.columbia.edu/tag/070J).

### Proof

**Proof technique:** Apply the cited site results with the constant integer coefficient ring.

1.1 By the imported abelian-sheaf result, the category is abelian. Its objects are exactly modules over the constant integer sheaf: integer multiplication is determined by the abelian group operation, and locally constant integer sections act locally by this multiplication and then glue uniquely by the sheaf condition. Evaluation is additive and left exact by [F2]. [F1, F2]

2.1 The imported unbounded result applied to this ringed site gives K-injective resolutions and the derived evaluation functor computed by evaluating them. For a sheaf in degree zero, the imported ordinary-sheaf construction gives an injective resolution starting in degree zero. Its terms are injective in the abelian category of step 1.1, and it is bounded below, so [F3] makes it K-injective. Consequently its evaluation computes this same right-derived functor on the sheaf. [F1, F3, A1, step 1.1] ∎


## Endpoint boundaries are norm divisors

[Open item](item-lem-author-1437578267d2-boundary-norm) · level 9

### Statement
Assume AC. Let $T$ be an integral finite-type curve over an algebraically closed field and let $B_1(T)$ and $b$ have the endpoint conventions of [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees). For a generator $W$, if $W\to T$ is not dominant then $b[W]=0$. Otherwise, with $K=k(T)$ and $L=k(W)$, the extension $L/K$ is finite and
$$b[W]=\operatorname{div}_T\!\left(\operatorname{Nm}_{L/K}((s-1)/s)\right).$$
In particular every boundary is a principal zero-cycle, including at singular points of $T$.

### Facts & Assumptions
**Given:** AC, $T$ and a generator $W$ as stated.

**Goal:** Calculate its boundary as a principal divisor.

[F1] The boundary is the difference of endpoint cycles with local quotient-length coefficients. [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

[F2] Length orders are additive, agree with quotient lengths for regular functions, and vanish on units. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F3] Proper dominant morphisms of integral finite-type curves satisfy pushforward of principal divisors equals the divisor of the field norm, with residue-degree weights. [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[F4] A closed subscheme of $\mathbb P^1_T$ is proper over $T$; a dominant morphism of integral finite-type curves induces a finite function-field extension. [math:thm-projective-morphism-proper](https://alphabetamath.cc/item/thm-projective-morphism-proper), [math:thm-dimension-formula-for-affine-domains](https://alphabetamath.cc/item/thm-dimension-formula-for-affine-domains), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] Closed points of finite-type schemes over the algebraically closed field have residue field $k$. [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields)

### Proof
1.1 If the projection is not dominant, the image closure is a closed point $x$. Reducedness makes $W$ factor through $\{x\}\times\mathbb A^1$; since $\kappa(x)=k$, the only integral closed one-dimensional subscheme there is the whole affine line. Both endpoint lengths are one, so its boundary is zero. [F1, F4, F5, given]

1.2 Otherwise let $C$ be the reduced closure of $W$ in $T\times\mathbb P^1$. It is an integral curve, proper and dominant over $T$, with function field $L$ finite over $K$. Its intersection with $T\times\mathbb A^1$ is $W$. Admissibility implies $s\ne0,1$ in $L$, so $g=(s-1)/s\in L^\times$. [F1, F4, given, construct]

2.1 At $s=1$, $s$ is a unit and the order of $g$ is the length of the quotient by $s-1$; at $s=0$ it is minus the length of the quotient by $s$. Away from the endpoints in $W$, $g$ is a unit. At infinity, with $u=1/s$, it equals $1-u$ and is a unit. Endpoint projection is an isomorphism onto $T$, so the residue-degree weights there are one. Consequently $p_*\operatorname{div}_C(g)=b[W]$ coefficient by coefficient. [F1, F2, step 1.2, algebra]

3.1 Apply [F3] to $C\to T$ and $g$. Together with steps 1.1 and 2.1, and additivity of the divisor map, this proves both assertions. [F2, F3, step 1.1, step 1.2, step 2.1] ∎

## Negative cohomology of a nonnegative evaluated complex

[Open item](item-lem-author-a44f2061570d-nonnegative-resolution) · level 10

### Statement
Let $I^\bullet$ be a cochain complex of abelian sheaves on a small site with $I^n=0$ for $n<0$. For every object $U$ and every $n<0$, the cohomology group $H^n(I^\bullet(U))$ is zero. Here $H^n$ is the kernel of the degree-$n$ differential modulo the image of the preceding differential.

### Facts & Assumptions

**Given:** A site object $U$ and a complex $I^\bullet$ vanishing in negative degrees.

**Goal:** Prove the negative-degree cohomology vanishes after evaluation.

[F1] Evaluation sends complexes of abelian sheaves to complexes of abelian groups. [lem-author-a44f2061570d-evaluation-homotopy](item-lem-author-a44f2061570d-evaluation-homotopy)

### Proof

**Proof technique:** Inspect the terms in negative degrees.

1.1 For each $n<0$, evaluation gives $I^n(U)=0$. Hence the kernel of the outgoing differential in degree $n$ is zero. [F1, given]

2.1 The quotient defining $H^n(I^\bullet(U))$ has zero numerator and is therefore zero. [step 1.1] ∎

## Principal divisors are endpoint boundaries

[Open item](item-lem-author-1437578267d2-graph-boundary) · level 10


### Statement
Assume AC. Let $T$ be any integral finite-type curve over an algebraically closed field. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$, and let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0,1$. Such a $W$ is called admissible. Define $b[W]=[W_1]-[W_0]$, extended linearly, with
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)],\qquad \epsilon=0,1,$$
where $p:T\times\mathbb A^1\to T$ is projection. The endpoint intersections are finite and have the indicated finite lengths; projection on each endpoint identifies its residue field with that of the corresponding point of $T$. These definitions require no embedding of $T$; they agree with the supported-cycle definitions whenever such an embedding is supplied. For these groups and this boundary,
$$bB_1(T)=\operatorname{im}(\operatorname{div}_T:k(T)^\times\to Z_0(T)).$$
For $f\ne1$ in $k(T)^\times$, the closure in $T\times\mathbb A^1_s$ of the rational graph $s=1/(1-f)$ is an admissible generator whose boundary is $\operatorname{div}_T(f)$; for $f=1$ the zero chain suffices.

### Statement references

[lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

### Facts & Assumptions
**Given:** AC, $T$ and $f\in k(T)^\times$ as stated.

**Goal:** Realize each principal divisor by an endpoint boundary and prove equality of subgroups.

[F1] The length divisor map is a homomorphism, and a quotient by a nonzero element of a closed-point local ring of an integral finite-type curve has finite length. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F2] Every boundary is principal, and for a dominant generator it is the divisor of the norm of $(s-1)/s$. [lem-author-1437578267d2-boundary-norm](item-lem-author-1437578267d2-boundary-norm)

[F3] For an integral curve embedded as a closed subscheme of a smooth threefold, the two supported cycle groups and their boundary are exactly the intrinsic endpoint groups and quotient-length formula displayed above. [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

### Proof
1.1 For any generator $V$ of $B_1(T)$ and $\epsilon=0,1$, the endpoint intersection is a proper closed subset of the noetherian integral curve $V$, hence is finite and zero-dimensional. At each point in that intersection $s-\epsilon$ is nonzero in the local domain, so [F1] gives finite quotient length. Projection identifies the endpoint subscheme with a closed subscheme of $T$, preserving point residue fields. Thus the displayed formula defines $b$ for arbitrary $T$ and agrees with [F3] in its embedded setting. [F1, F3, given]

1.2 If $f=1$, its divisor is zero by [F1]. Otherwise $h=1/(1-f)$ is a rational function distinct from both zero and one. It is regular on a nonempty open subset of $T$; its graph there is integral and isomorphic to that open subset. [F1, given, algebra]

2.1 Its reduced closure $W$ in $T\times\mathbb A^1$ is an integral closed curve dominating $T$, with function field $k(T)$. Neither endpoint contains its generic point, since $h\ne0,1$; hence each endpoint intersection is zero-dimensional or empty and $W$ is admissible. [step 1.1, step 1.2, construct]

3.1 For $f\ne1$, in $k(W)=k(T)$, $(s-1)/s=(h-1)/h=f$ and the norm for the identity field extension is the identity. By [F2], $b[W]=\operatorname{div}_T(f)$, including its length multiplicities. Thus every principal divisor is a boundary; the reverse inclusion is also [F2]. [F2, step 1.2, step 2.1, algebra] ∎


## Derived global sections on a scheme site

[Open item](item-def-derived-sections-on-sites) · level 11


### Definition
Assume the Axiom of Choice and fixed universe size bounds. For each $\tau\in\{\mathrm{Nis},\mathrm{cdh},\mathrm{et}\}$, fix a small scheme site $\mathcal C_\tau$ equipped with the indicated Nisnevich, cdh, or étale topology, and an object represented by the scheme $X$. The choice of site and topology is part of the data; these names alone do not identify a big site with a small one.

An abelian sheaf is a contravariant functor from the site to abelian groups whose underlying set-valued presheaf satisfies the sheaf condition. Let $D(\operatorname{Ab}(\mathcal C_\tau))$ be its unbounded derived category: complexes are localized at the chain maps inducing isomorphisms on all cohomology sheaves. For $C$ in this category define $R\Gamma_\tau(X,C)$ as the right derived functor of evaluation at $X$, with value in the derived category $D(\operatorname{Ab})$ of complexes of abelian groups. Concretely, for a representative complex choose a quasi-isomorphism to a K-injective complex $I^\bullet$ and take the derived-category class of $I^\bullet(X)$. K-injective means that every chain map from an acyclic complex to $I^\bullet$ is chain-homotopic to zero. Set $H^n_\tau(X,C)=H^n(R\Gamma_\tau(X,C))$, where $H^n$ is the kernel of the degree-$n$ differential modulo the preceding image.

For an ordinary abelian sheaf $F$ regarded as a complex concentrated in degree zero, $H^n_\tau(X,F)=0$ for $n<0$. This convention does not assert a comparison between the three topologies or an identification between sheafification and derived localization.

### Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

### Justification
The already stated Choice premise is inherited by the selected K-injective construction and its derived evaluation. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

The chosen site and object make evaluation meaningful, and the size bounds specify the ambient categories. [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supplies the abelian category, existence and choice-independent derived-functor interpretation of K-injective evaluation, and a nonnegative injective resolution computing the value for $F[0]$. Applying [lem-author-a44f2061570d-nonnegative-resolution](item-lem-author-a44f2061570d-nonnegative-resolution) to that resolution proves the negative-degree assertion. These inputs apply to each chosen topology separately; no comparison among them is used.


## Normalization and the curve divisor quotient

[Open item](item-lem-author-1437578267d2-normalization-quotient) · level 11

### Statement
Assume AC. Let $T$ be an integral affine finite-type curve over an algebraically closed field, $\nu:C=\widetilde T\to T$ its normalization, and $K=k(T)=k(C)$. Write $Q(D)=Z_0(D)/\operatorname{div}_D(k(D)^\times)$. Then $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$ for $f\in K^\times$, and $\nu_*$ induces $Q(C)\twoheadrightarrow Q(T)$. Explicitly, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and length orders downstairs. There is a canonical identification $\operatorname{Pic}(C)=\mathrm{CH}^1(C)=Q(C)$ sending $\mathcal O_C(y)$ to $[y]$; hence normalization induces a surjection from this Picard group to $Q(T)$. Here $\operatorname{Pic}$ is the group of isomorphism classes of line bundles under tensor product and $\mathrm{CH}^1$ is degree-zero Bloch homology.

### Facts & Assumptions
**Given:** AC and the curve and normalization in the Statement.

**Goal:** Establish divisor compatibility, surjectivity and the source identification.

[F1] Normalization is finite, smooth and integral, has the same function field, and has nonempty finite closed fibers with residue fields $k$. Finite morphisms are proper under AC. [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface), [lem-algebraically-closed-residue-fields](item-lem-algebraically-closed-residue-fields), [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Proper dominant curve pushforward commutes with principal divisors and norms; closed points are weighted by residue degrees. [thm-author-1437578267d2-curve-norm-input](item-thm-author-1437578267d2-curve-norm-input)

[F3] A one-dimensional noetherian normal local domain is a DVR. Length orders agree with its normalized valuation. [math:thm-equivalent-characterisations-of-a-dvr](https://alphabetamath.cc/item/thm-equivalent-characterisations-of-a-dvr), [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F4] On an integral scheme Cartier divisors modulo principal Cartier divisors map isomorphically to the Picard group via $D\mapsto\mathcal O(D)$. A Cartier divisor is specified by local nonzero rational equations whose ratios are regular units. [math:thm-cartier-divisors-mod-principal-to-picard](https://alphabetamath.cc/item/thm-cartier-divisors-mod-principal-to-picard)

[F5] The codimension-one Bloch complex of the smooth curve has point cycles in degree zero and endpoint intersections in degree one; the endpoint boundary subgroup is the principal-divisor subgroup. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex), [lem-author-1437578267d2-graph-boundary](item-lem-author-1437578267d2-graph-boundary)

### Proof
1.1 The finite normalization is proper and dominant with field extension $K/K$. Applying [F2], whose norm is the identity in this case, yields $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$. Each point in a closed fiber has residue degree one by [F1]; comparing coefficients gives the displayed order formula. [F1, F2, given]

2.1 The equality in step 1.1 makes pushforward descend to the quotient groups. Every closed point of $T$ has a closed preimage by [F1], and each such point pushes forward with coefficient one. Lifting the finitely many points in any zero-cycle proves surjectivity. [F1, step 1.1, construct]

3.1 By [F1] and [F3], each closed-point local ring of $C$ is a DVR. Taking valuations of the local equations of a Cartier divisor defines a zero-cycle: the support is finite by the finiteness of rational-function divisors on a finite trivializing cover. Unit ratios make the local valuations agree. If all valuations vanish, every equation is a unit at each closed point of its domain and also at the generic point, so the Cartier divisor is zero. [F1, F3, F4, algebra, step 2.1]

4.1 For any closed $y$, a uniformizer is regular on a neighbourhood of $y$. Remove its other finitely many zeros from that neighbourhood. The uniformizer there and the equation one on $C\setminus\{y\}$ have unit ratio on the overlap and define a Cartier divisor mapping to $[y]$. Therefore the map of step 3.1 is an isomorphism from Cartier divisors to zero-cycles, carrying principal Cartier divisors to principal length divisors. By [F4], $Q(C)\cong\operatorname{Pic}(C)$, with $[y]$ corresponding to $\mathcal O_C(y)$. [F3, F4, step 3.1, construct]

5.1 By [F5], degree-zero Bloch homology is the same quotient $Q(C)$. Combining this identification with steps 2.1 and 4.1 proves the claimed source and surjection. [F5, step 2.1, step 4.1] ∎



## Derived cdh localization

[Open item](item-def-cdh-derived-localization) · level 12


### Definition
Assume the Axiom of Choice and the fixed universe bounds of [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Fix the small cdh site $\mathcal C$ of [def-cdh-topology-interface](item-def-cdh-topology-interface). A presheaf of abelian groups is a contravariant functor $\mathcal C\to\operatorname{Ab}$. A complex-valued presheaf means a cochain complex of such presheaves. Its derived category $D(\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C))$ is obtained by inverting objectwise quasi-isomorphisms: maps inducing isomorphisms on cohomology at every object of $\mathcal C$.

Let $a$ be cdh sheafification of abelian presheaves and $i$ the inclusion of abelian sheaves into abelian presheaves. For a complex $C$, apply $a$ degreewise, choose a quasi-isomorphism $aC\to I$ to a K-injective complex of cdh sheaves, and define $L_{\mathrm{cdh}}C$ to be the object represented by the underlying presheaf complex $iI$. A K-injective complex is one for which every chain map from an acyclic complex is chain-homotopic to zero. The unit $C\to L_{\mathrm{cdh}}C$ is induced by $C\to iaC\to iI$ in the derived category of presheaves.

A morphism of complexes is a **cdh local equivalence** if its degreewise sheafification is a quasi-isomorphism of complexes of cdh sheaves. An object $E$ of the derived presheaf category is **cdh-local** if, for every cdh local equivalence $u:A\to B$, precomposition with $u$ induces a bijection $\operatorname{Hom}(B,E)\to\operatorname{Hom}(A,E)$. Equivalently, $E$ is cdh-local exactly when its unit $E\to L_{\mathrm{cdh}}E$ is an isomorphism. Here equivalence means isomorphism in the indicated derived category, not an objectwise isomorphism of complexes.

For $X$ an object of the chosen site, evaluation of $L_{\mathrm{cdh}}C$ at $X$ is represented by $I(X)$ and hence is $R\Gamma_{\mathrm{cdh}}(X,aC)$ in $D(\operatorname{Ab})$ as defined in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). This convention uses unbounded derived sheaves and their derived sections; it is the hypercomplete derived-sheaf convention. No assertion is made that ordinary Čech descent alone implies locality. The truncation $\tau^{\leq n}C$ is the objectwise cohomological truncation, with degree $n$ equal to the kernel of $d^n$, degrees below $n$ unchanged and degrees above $n$ zero. Sheafification of cohomology presheaves, derived localization, truncation and evaluation are distinct operations; a proposed interchange or comparison with another topology requires its own hypotheses.

### Justification
The already stated Choice premise is used through the imported K-injective resolution-existence construction in [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

The cdh site and its topology are fixed by [def-cdh-topology-interface](item-def-cdh-topology-interface). The plus construction and its universal property in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) apply to abelian-group objects: matching families, restrictions and equivalence on a common covering subsieve are compatible with addition. Thus $a$ is left adjoint to $i$ on abelian groups. It is exact. Indeed, at each object the plus construction is a filtered colimit, over covering sieves ordered by refinement, of matching-family groups. Matching families preserve finite limits, and filtered colimits of abelian groups commute with finite limits; hence $a$ preserves kernels. If a map of presheaves is objectwise surjective, every section of the sheafification of its target locally lifts: represent the section locally by a target-presheaf section and lift that section objectwise. A locally surjective map of sheaves is an epimorphism, since two sheaf morphisms agreeing after local lifts agree on a cover and therefore agree globally. Applying this to the objectwise cokernel factorization shows that $a$ also preserves cokernels.

The supplier [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) gives K-injective resolutions of unbounded complexes of abelian sheaves under the stated size and choice assumptions. Since $a$ is exact, it sends acyclic presheaf complexes to acyclic sheaf complexes. The ordinary adjunction therefore identifies chain maps from an acyclic presheaf complex to $iI$, up to homotopy, with those from its sheafification to $I$; these vanish. Thus $iI$ is K-injective as a presheaf complex. The adjunction on complexes consequently induces the derived adjunction $a:D(\operatorname{PSh}_{\operatorname{Ab}}(\mathcal C))\rightleftarrows D(\operatorname{Sh}_{\operatorname{Ab}}(\mathcal C)):Ri$, where $Ri$ is represented by $iI$. The counit $aRi\to\mathrm{id}$ is an isomorphism, because $aiI=I$ and $aC\to I$ is a quasi-isomorphism. Hence $Ri$ is fully faithful and $Ri\,a$ is a localization, independent up to unique isomorphism of the chosen resolution.

For a local equivalence $u$, the derived adjunction makes precomposition by $u$ bijective on maps into any $RiF$. Conversely, the unit of any object is a local equivalence because applying $a$ identifies it with the resolution map $aC\to I$. If an object is local, applying its defining bijection to its unit produces a retraction; naturality of the unit and the isomorphism of the unit on objects in the image of $Ri$ show that this retraction is also an inverse. This proves the stated characterization. Finally, evaluation of $iI$ at $X$ is $I(X)$, and [def-derived-sections-on-sites](item-def-derived-sections-on-sites) identifies it with derived cdh sections. The definition makes no comparison with Čech descent or with another site.


## Top cycles supported on an integral curve

[Open item](item-lem-curve-support-divisor-complex) · level 12

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

### Proof
1.1 By [F1], the outgoing differential from degree zero is zero and $\mathrm{CH}^3_T(U)=Z_0(T)/bB_1(T)$. The sign is $W_1-W_0$: with $s=t_1$, the zeroth face is $s=1$ and the first is $s=0$. [F1, given]

2.1 By [F2], the divisor map is well defined and its image is exactly $bB_1(T)$, with the stated multiplicities even at singular points. Substitution into step 1.1 proves the cokernel presentation. [F2, step 1.1]

3.1 If $T$ is affine, apply [F3] and the identification of step 2.1. This gives the normalization pushforward, its surjectivity and the displayed equality of local orders. [F3, step 2.1] ∎

## External classification of torsors by first cohomology

[Open item](item-lem-author-8e1c0251ef0d-h1-torsor-input) · level 12

### Statement
For an abelian sheaf $G$ on a small site with terminal object and the derived-cohomology conventions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites), there is a canonical bijection from isomorphism classes of $G$-torsors to $H^1(G)$. A torsor is a locally nonempty sheaf of sets with a simply transitive $G$-action on each nonempty section set.

### External input
This is Stacks Project Lemma 21.4.3, imported with the reading limits stated above. Its proof is not claimed as a local reconstruction.

## Units and Picard groups in Nisnevich degree zero and one

[Open item](item-lem-nisnevich-line-bundle-torsors) · level 13


### Statement
Assume the Axiom of Choice and the fixed universe bounds in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). For a scheme $X$, use its small Nisnevich site, taken as a sufficiently small full subcategory of étale $X$-schemes containing $X$ and closed under the fibre products and Zariski refinements used below. Let $\mathbb G_m$ be the sheaf assigning $U$ the group $\Gamma(U,\mathcal O_U)^\times$. Then

$$H^0_{\mathrm{Nis}}(X,\mathbb G_m)=\Gamma(X,\mathcal O_X)^\times,\qquad H^1_{\mathrm{Nis}}(X,\mathbb G_m)\cong\operatorname{Pic}(X).$$

The second identification sends a line bundle to its frame torsor, with inverse obtained by descent from local frames. A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product.

### Facts & Assumptions

[A1] The stated Choice assumption supplies the set-indexed choice of torsor sections in step 3.1 and is inherited by the selected derived-sections model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** $X$, its specified small Nisnevich site, the Axiom of Choice, and the stated size bounds.

**Goal:** Identify degrees zero and one, including the frame-torsor inverse.

[F1] Nisnevich covering families are jointly surjective étale families, and Zariski open covers are Nisnevich covers ([def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)).

[F2] The structure presheaf is a sheaf on a site satisfying the listed full-subcategory, Zariski-refinement, terminal-object and fpqc-cover hypotheses. Jointly surjective étale families are fpqc; quasi-coherent modules have effective and fully faithful fpqc descent, and finite local freeness descends ([lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)).

[F3] Units of a ring sheaf form a sheaf ([lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)). Degree-zero derived sections of an abelian sheaf are its sections, under the derived conventions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites).

[F4] First cohomology classifies torsors as in [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input). Frames and transition units have the properties in [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions), [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle), [lem-author-8e1c0251ef0d-cocycle-morphism](item-lem-author-8e1c0251ef0d-cocycle-morphism), and [lem-author-8e1c0251ef0d-tensor-transitions](item-lem-author-8e1c0251ef0d-tensor-transitions).

[F5] The Picard group is the tensor-product group of line-bundle isomorphism classes ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

### Proof

1.1 The site has the full-subcategory, Zariski-refinement and terminal-object properties required by [F2]. A covering sieve contains a Nisnevich family, and that family is jointly surjective étale by [F1], hence fpqc by [F2]. The sheaf condition can therefore be checked on those generating families. The structure presheaf is a sheaf, and its units form the abelian sheaf $\mathbb G_m$ by [F3]. Evaluation at the terminal object $X$ and [F3] give the stated degree-zero equality. [F1, F2, F3]

2.1 Let $L$ be a line bundle. On each étale $U\to X$, take frames of its pullback $L|_U$. The structure presheaf on the slice site over $U$ is a sheaf by the same argument as in step 1.1. Frames form a $\mathbb G_m$-torsor by [F4]: Zariski trivializations of $L|_U$ are Nisnevich covers by [F1]. Thus every line bundle determines a torsor. [F1, F4, step 1.1, construct]

3.1 Conversely, let $P$ be a $\mathbb G_m$-torsor. Choose a Nisnevich covering family $U_i\to X$ with sections $s_i$. Its transition units $g_{ij}$ satisfy the cocycle equation by [F4]. On each $U_i$ take the free rank-one module with basis $e_i$; use the isomorphisms determined by $e_j=g_{ij}e_i$ on double fibre products. The cocycle equation is exactly the descent compatibility on triple fibre products. [F4, choose, construct, step 2.1, A1]

4.1 The family is fpqc by [F1] and [F2]. Effective descent gives a quasi-coherent module $L$ with these pullbacks and transition maps; finite local freeness descends by [F2]. At every point of $X$, choose a point of some $U_i$ over it. The fibre of $L$ becomes one-dimensional after extension to that point's residue field, so the rank of $L$ there is one. Hence $L$ is a line bundle. [F1, F2, step 3.1]

5.1 The descended frames have the same transitions as the $s_i$, so [F4] gives an equivariant isomorphism from the frame torsor of $L$ to $P$. Conversely, starting with a line bundle and using its local frames, full faithfulness of descent in [F2] identifies the descended module with the original bundle. These constructions are independent of choices: pass to a common refinement, use the change-of-section formula in [F4], and apply full faithfulness of descent. Thus line bundles up to isomorphism and torsors up to equivariant isomorphism are in bijection. [F2, F4, step 2.1, step 4.1]

6.1 By [F4], the torsor bijection gives a canonical bijection with $H^1$. It is compatible with the group laws: using an injective embedding $\mathbb G_m\hookrightarrow I$, the construction described in the cited torsor-classification input represents a class by a global section of $I/\mathbb G_m$, with its torsor the sheaf of local lifts. Adding two representatives adds their local lifts; their transition units multiply. By [F4], tensoring line bundles also multiplies their frame transitions. Therefore the bijection sends tensor products to sums in $H^1$. [F4, step 5.1, algebra]

7.1 The unit line bundle has the trivial frame torsor by [F4]. Together with [F5] and steps 1.1 and 6.1, this proves both identifications and the stated inverse. [F4, F5, step 1.1, step 6.1] ∎
