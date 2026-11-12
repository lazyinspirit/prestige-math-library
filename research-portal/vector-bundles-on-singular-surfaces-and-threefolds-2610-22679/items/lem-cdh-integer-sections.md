---
id: lem-cdh-integer-sections
kind: lemma
title: Integer cdh sections on seminormal schemes
status: published
domain: mathematics
deps:
  - lem-finite-constant-cdh-sections
  - prop-cdh-cover-refinement
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - def-cdh-topology-interface
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-algebraically-closed-field
  - math:def-field
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-separated-morphism-schemes
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-group
  - math:def-integers
  - math:ex-integers-under-addition
  - math:def-group-homomorphism
  - math:def-group-isomorphism-and-automorphism
  - math:def-topological-space
  - math:def-subspace-topology-top
dependency_roles:
  lem-finite-constant-cdh-sections: mathematical-premise
  prop-cdh-cover-refinement: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-cdh-topology-interface: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-field: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-separated-morphism-schemes: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:thm-noetherian-ring-ideal-characterisations: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:def-group: mathematical-premise
  math:def-integers: mathematical-premise
  math:ex-integers-under-addition: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-topological-space: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF page 5, Lemma 2.4 and its proof
      reading_limits: Read the supplied extracted article text, PDF page 5, complete
        Lemma 2.4 statement and proof through its final paragraph. The proof
        below is locally authored from the declared suppliers; no fresh reading
        of HK18 or MVW06 and no reconstruction of their imported theorems is
        claimed.
      statement: For separated seminormal finite-type X over an algebraically closed
        field, constant-integer cdh sections identify canonically with
        integer-valued functions on connected components; the proof passes
        through finite constant sets and finite local values.
      hypotheses: X is separated, seminormal and of finite type over an algebraically
        closed field k. This generated formulation explicitly assumes AC
        inherited from its suppliers and requires nonemptiness in the
        connected-case specialization; empty X remains included in the general
        formula.
dependency_level: 13
formulation_deps:
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - def-cdh-topology-interface
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-algebraically-closed-field
  - math:def-field
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-separated-morphism-schemes
  - math:def-group
  - math:def-integers
  - math:ex-integers-under-addition
  - math:def-group-homomorphism
  - math:def-group-isomorphism-and-automorphism
  - math:def-topological-space
  - math:def-subspace-topology-top
argument_deps:
  - lem-finite-constant-cdh-sections
  - prop-cdh-cover-refinement
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - def-cdh-topology-interface
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-algebraically-closed-field
  - math:def-field
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-separated-morphism-schemes
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-group
  - math:def-integers
  - math:ex-integers-under-addition
  - math:def-group-homomorphism
  - math:def-group-isomorphism-and-automorphism
  - math:def-topological-space
  - math:def-subspace-topology-top
---

## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field and $X$ a separated seminormal scheme of finite type over $k$. Then there is a canonical isomorphism of abelian groups $H^0_{\mathrm{cdh}}(X,\mathbb Z)\cong\mathbb Z^{\pi_0(X)}$. In particular, if $X$ is nonempty and connected, this group is canonically $\mathbb Z$.

Here $\pi_0(X)$ is the set of connected components of the underlying topological space: a connected component is a maximal nonempty connected subset, and connected means that the subset has no partition into two nonempty relatively open subsets. In particular, $\pi_0(\varnothing)=\varnothing$. The group $\mathbb Z^{\pi_0(X)}$ consists of all functions from that set to $\mathbb Z$, with pointwise addition; for the empty set it is the zero group. The cdh site used here is the big site of separated finite-type $k$-schemes with the cdh topology. The constant integer cdh sheaf is the sheafification of the constant presheaf with value $\mathbb Z$, and $H^0_{\mathrm{cdh}}(X,\mathbb Z)$ is its group of sections over $X$. Seminormality means that each point has an affine neighbourhood whose coordinate ring $R$ has the property that each pair $x,y\in R$ satisfying $x^3=y^2$ has a unique $a\in R$ with $a^2=x$ and $a^3=y$.

## Statement references
[[lem-finite-constant-cdh-sections]]

[[prop-cdh-cover-refinement]]

[[def-scheme-sites-and-sheafification]]

[[math:def-axiom-of-choice]]

[[def-cdh-topology-interface]]

[[math:def-scheme]]

[[math:def-scheme-over-base]]

[[math:def-algebraically-closed-field]]

[[math:def-field]]

[[math:def-affine-scheme]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-separated-morphism-schemes]]

[[math:lem-finite-type-local-on-source-and-target]]

[[math:thm-noetherian-ring-ideal-characterisations]]

[[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[[math:thm-noetherian-ring-has-noetherian-spectrum]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[[math:def-group]]

[[math:def-integers]]

[[math:ex-integers-under-addition]]

[[math:def-group-homomorphism]]

[[math:def-group-isomorphism-and-automorphism]]

[[math:def-topological-space]]

[[math:def-subspace-topology-top]]

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a separated seminormal finite-type $k$-scheme $X$.

**Goal:** Construct the stated canonical group isomorphism, including the empty-scheme case.

[F1] For every finite set $A$, the constant cdh sheaf $\underline A$ has a natural bijection $\underline A(X)\cong\operatorname{Map}(\pi_0(X),A)$ under these hypotheses and the Axiom of Choice. This bijection is natural in maps of finite sets. [[lem-finite-constant-cdh-sections]]

[F2] Every section of the constant integer cdh sheaf over $X$ factors through $\underline A(X)$ for some finite subset $A\subseteq\mathbb Z$. [[prop-cdh-cover-refinement]]

[F3] Sheafification of a set-valued presheaf is the twofold plus construction: a plus section is represented by a matching family on a covering sieve, and two families represent the same section when they agree on a common covering subsieve. Restriction uses pullback of sieves. The sheafification is functorial and left adjoint to inclusion of sheaves. [[def-scheme-sites-and-sheafification]]

[F4] Under AC, a commutative ring is Noetherian if and only if every ideal is finitely generated; a finite-type algebra over a Noetherian commutative ring is Noetherian; and its spectrum is a Noetherian topological space. Noetherian for a space means that every descending chain of closed subsets stabilizes. A Noetherian scheme is one with a finite affine open cover by spectra of Noetherian rings. [[math:thm-noetherian-ring-ideal-characterisations]] [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] [[math:thm-noetherian-ring-has-noetherian-spectrum]] [[math:def-locally-noetherian-and-noetherian-scheme]]

[F5] Under AC, a Noetherian topological space is a finite union of irreducible closed subsets. An irreducible subset is nonempty and cannot be expressed as the union of two proper relatively closed subsets. [[math:lem-noetherian-space-has-finitely-many-irreducible-components]] [[math:def-axiom-of-choice]]

[F6] A field is a nonzero commutative unital ring in which each nonzero element has a multiplicative inverse. An affine scheme is the spectrum of a commutative ring with its structure sheaf; that ring is its coordinate ring. A scheme is a locally ringed space locally isomorphic to affine schemes, and a $k$-scheme has a structure morphism to $\operatorname{Spec}k$. Algebraic closedness means that every nonconstant polynomial over the field has a root in the field. Finite type of a morphism means locally finite type and quasi-compactness; over an affine target it can be tested on a finite affine source cover by finite-type algebras. Separatedness here is relative to $k$: the diagonal of the structure morphism is a closed immersion. [[math:def-scheme]] [[math:def-scheme-over-base]] [[math:def-algebraically-closed-field]] [[math:def-field]] [[math:def-affine-scheme]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:lem-finite-type-local-on-source-and-target]] [[math:def-separated-morphism-schemes]]

[F7] The cdh topology on the specified category of separated finite-type $k$-schemes is generated by Nisnevich covers and completely decomposed proper morphisms. The site and universe conventions are those of the scheme-site and cdh interfaces. Constant presheaves have identity restriction maps; their sheafifications are denoted $\underline A$. [[def-cdh-topology-interface]] [[def-scheme-sites-and-sheafification]]

[F8] The integers $\mathbb Z$ carry addition $+$, zero $0$ and additive inverse $n\mapsto -n$, and form an abelian group: addition is associative and commutative, zero is an identity, and $n+(-n)=0=(-n)+n$. A group is a set with an associative binary operation, identity and two-sided inverses; abelian means its operation is commutative. A group homomorphism preserves the binary operation, and a group isomorphism is a bijective group homomorphism. [[math:def-integers]] [[math:ex-integers-under-addition]] [[math:def-group]] [[math:def-group-homomorphism]] [[math:def-group-isomorphism-and-automorphism]]

[F9] A topology specifies open sets closed under arbitrary unions and finite intersections, including the empty union and intersection. Closed sets are complements of open sets, and are closed under arbitrary intersections and finite unions. A clopen set is both open and closed. For a subset $S$ of a space $T$, the relatively open sets are $S\cap U$ with $U$ open in $T$, and the relatively closed sets are $S\cap D$ with $D$ closed in $T$. These trace formulas also show that taking a subspace of a subspace gives the topology inherited directly from $T$. [[math:def-topological-space]] [[math:def-subspace-topology-top]]

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a separated seminormal finite-type $k$-scheme $X$.

**Proof technique:** Establish finiteness of the component set, then pass from finite constant sets to integers using finite local values and naturality.

1.1 By [F6], take a finite affine open cover $X=\bigcup_i\operatorname{Spec}R_i$, with every $R_i$ a finite-type $k$-algebra, meaning generated as a $k$-algebra by finitely many elements. A field has only the zero and unit ideals: an ideal containing $b\ne0$ contains $b^{-1}b=1$. Both ideals are finitely generated, so [F4] makes $k$ and then every $R_i$ Noetherian. Thus $X$ is a Noetherian scheme, and the underlying space is Noetherian as well: a descending closed chain stabilizes after restriction to each affine of the finite cover by [F4]; the largest of the finitely many stabilization indices works on all of $X$. For empty $X$ the empty affine cover gives the same conclusion directly. [F4, F6, F9, given]

1.2 A pointwise injective map of presheaves $F\to G$ induces a pointwise injective map $F^+\to G^+$. Indeed, if two matching families from $F$ have equal images in $G^+(T)$, their images agree on some common covering subsieve by [F3]. Pointwise injectivity makes the original families agree there, so they represent the same element of $F^+(T)$. Applying the argument twice shows that sheafification preserves these injections. In particular an inclusion of sets $A\subseteq B$ induces a pointwise injective map $\underline A\to\underline B$ on the site fixed in [F7]. [F3, F7, construct]

1.3 The same plus description proves that sheafification preserves binary products. Two covering sieves $S,R$ have covering intersection: for every arrow in $S$ its pullback of $S$ is maximal, so its pullback of $S\cap R$ equals the covering pullback of $R$, and transitivity applies. Representatives of elements of $F^+(T)$ and $G^+(T)$ therefore restrict to the common covering sieve $S\cap R$ and pair to a matching family for $F\times G$, proving surjectivity of $(F\times G)^+(T)\to F^+(T)\times G^+(T)$. Equality in both coordinates can likewise be tested on the intersection of the two equality-covering subsieves, proving injectivity. These identifications commute with restriction; applying them twice gives $a(F\times G)\cong aF\times aG$, compatibly with projections. The terminal singleton presheaf is already a sheaf. Consequently the addition, zero and inverse of the integer abelian group in [F8] induce operations on $\underline{\mathbb Z}$; their group identities follow by functoriality and these product identifications. Its sections form an abelian group. For any set $I$, the same identities hold pointwise on functions $I\to\mathbb Z$: for example $((f+g)+h)(i)=(f+(g+h))(i)$ and $(f+(-f))(i)=0$. Thus these functions form an abelian group, as do the finite-image functions, since sums have image contained in the finite set of pairwise sums of the two images, and negatives have image contained in the negative of the original finite image. For empty $I$ there is one function and this is the zero group. [F3, F8, construct]

2.1 By [F5], write $|X|=\bigcup_{i=1}^n C_i$ with each $C_i$ irreducible and closed. Each $C_i$ is connected, since a separation would express it as two proper relatively closed subsets. Declare indices equivalent when they can be joined by a finite sequence of indices with consecutive $C_i$ intersecting. Each equivalence class gives a connected union: in a separation every connected $C_i$ lies on one side, intersections force the same side, and finite sequences force the whole class onto that side. These class unions are disjoint closed subsets covering $|X|$, finite in number, and each is open because its complement is a finite union of the other closed unions. Any connected subset meeting one lies entirely in it, since otherwise that clopen subset would separate it. They are therefore exactly the connected components. Thus $\pi_0(X)$ is finite and its components are clopen, meaning open and closed; for $X=\varnothing$ it is empty. AC is used through [F4] and [F5], not for any additional choice in this finite construction. [F4, F5, F9, step 1.1]

2.2 For finite $A\subseteq\mathbb Z$, [F1] identifies $\underline A(X)$ with functions $\pi_0(X)\to A$. By naturality, whenever $A\subseteq B$ are finite subsets of $\mathbb Z$, the section map corresponds to inclusion of these function sets. By step 1.2, each $\underline A(X)$ injects into $\underline{\mathbb Z}(X)$. The images for $A$ and $B$ are contained in the image for the finite union $A\cup B$. [F1, step 1.2]

3.1 By [F2], the images in step 2.2 cover $\underline{\mathbb Z}(X)$. They give a well-defined bijection to finite-image functions $\pi_0(X)\to\mathbb Z$: if a section uses both $A$ and $B$, injectivity into the integer sheaf makes its representatives equal in $\underline{A\cup B}(X)$, and [F1] gives the same function. Conversely every finite-image function is obtained from [F1] using its finite image as $A$. This includes an empty image and empty $X$. [F1, F2, step 2.2]

4.1 The bijection respects addition. For finite sets of values $A,B\subseteq\mathbb Z$, use step 1.3 to identify $\underline{A\times B}$ with $\underline A\times\underline B$. By naturality of [F1] under the two projections, the section corresponding to the pair of component functions corresponds to their ordered-pair function with values in $A\times B$. The addition map $A\times B\to C$, where $C=\{a+b:a\in A,b\in B\}$, is a map of finite sets. Naturality of [F1] makes its induced sheaf map the pointwise sum of those functions; after inclusion into $\underline{\mathbb Z}$ it is precisely the addition constructed in step 1.3. Thus step 3.1 is a bijective group homomorphism, hence by [F8] an isomorphism of abelian groups onto the finite-image functions. [F1, F8, step 1.3, step 3.1, construct]

5.1 By step 2.1 every function on $\pi_0(X)$ has finite image. Step 4.1 is consequently the claimed isomorphism to $\mathbb Z^{\pi_0(X)}$. It is canonical because its construction uses natural sheaf maps and the natural bijections in [F1]. If $X$ is nonempty and connected, it has one component and the target is $\mathbb Z$; if $X$ is empty, the target is the zero group. [F1, F8, step 2.1, step 4.1] ∎
