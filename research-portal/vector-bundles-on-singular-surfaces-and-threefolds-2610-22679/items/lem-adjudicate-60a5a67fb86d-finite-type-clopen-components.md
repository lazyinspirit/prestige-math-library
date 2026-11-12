---
id: lem-adjudicate-60a5a67fb86d-finite-type-clopen-components
kind: lemma
title: Finite-type schemes have finitely many clopen connected components
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-morphism-of-schemes
  - math:def-morphism-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-finite-type-and-module-finite-algebras
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-continuous-map-top
  - math:def-left-right-and-two-sided-ideal
  - math:def-generated-and-principal-ideals
  - math:def-integers
  - math:def-int-operations
  - math:ex-integers-under-addition
  - math:def-group
  - math:def-group-isomorphism-and-automorphism
  - math:def-neighbourhood-top
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:thm-noetherian-ring-ideal-characterisations: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-morphism-locally-ringed-spaces: mathematical-premise
  math:def-morphism-ringed-spaces: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-topological-space: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-continuous-map-top: mathematical-premise
  math:def-left-right-and-two-sided-ideal: mathematical-premise
  math:def-generated-and-principal-ideals: mathematical-premise
  math:def-integers: mathematical-premise
  math:def-int-operations: mathematical-premise
  math:ex-integers-under-addition: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-neighbourhood-top: mathematical-premise
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-noetherian-ring-ideal-characterisations
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-morphism-of-schemes
  - math:def-morphism-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-finite-type-and-module-finite-algebras
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-left-right-and-two-sided-ideal
  - math:def-generated-and-principal-ideals
  - math:def-integers
  - math:def-int-operations
  - math:ex-integers-under-addition
  - math:def-group
  - math:def-group-isomorphism-and-automorphism
  - math:def-neighbourhood-top
argument_deps:
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-finite-type-local-on-source-and-target
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-morphism-of-schemes
  - math:def-morphism-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-finite-type-and-module-finite-algebras
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-continuous-map-top
  - math:def-left-right-and-two-sided-ideal
  - math:def-generated-and-principal-ideals
  - math:def-integers
  - math:def-int-operations
  - math:ex-integers-under-addition
  - math:def-group
  - math:def-group-isomorphism-and-automorphism
  - math:def-neighbourhood-top
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a finite-type $k$-scheme. Then $X$ is Noetherian, its underlying topological space is Noetherian, and its set $\pi_0(X)$ of connected components is finite with every component open and closed. Evaluation on components induces a canonical isomorphism of abelian groups
$$\operatorname{LC}(|X|,\mathbb Z)\cong\mathbb Z^{\pi_0(X)}.$$
It is natural under $k$-morphisms between finite-type $k$-schemes and includes the empty scheme, when both groups are zero. No separatedness, seminormality, normality or dimension bound is required.

Here finite type means that the structure morphism is locally of finite type and quasi-compact; over $k$ this is equivalent to having a finite affine open cover by spectra of finitely generated $k$-algebras. A Noetherian scheme has a finite affine open cover by spectra of Noetherian rings; a Noetherian topological space has every descending chain of closed subsets stationary. A commutative ring is Noetherian exactly when every ideal is finitely generated. Connected means having no partition into two nonempty relatively open subsets; a connected component is a maximal nonempty connected subset. Clopen means open and closed. The group $\operatorname{LC}(|X|,\mathbb Z)$ consists of integer-valued functions constant on a neighbourhood of each point, and $\mathbb Z^{\pi_0(X)}$ consists of all functions on the component set, both with pointwise addition. An irreducible subset is nonempty and cannot be written as the union of two proper relatively closed subsets.

## Statement references

[[math:def-scheme]]

[[math:def-scheme-over-base]]

[[math:def-affine-scheme]]

[[math:def-affine-open-subscheme]]

[[math:def-finite-type-and-module-finite-algebras]]

[[math:def-quasi-compact-and-quasi-separated-morphism]]

[[math:def-topological-space]]

[[math:def-subspace-topology-top]]

[[math:def-left-right-and-two-sided-ideal]]

[[math:def-generated-and-principal-ideals]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:lem-finite-type-local-on-source-and-target]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[[math:def-integers]]

[[math:def-int-operations]]

[[math:ex-integers-under-addition]]

[[math:def-group]]

[[math:def-group-isomorphism-and-automorphism]]

[[math:def-neighbourhood-top]]

## Facts & Assumptions

**Given:** Choice, a field $k$ and a finite-type $k$-scheme $X$.

**Goal:** Establish Noetherianity, finite clopen components and the natural locally constant-function identification.

[A1] Choice is assumed when applying the Noetherian-ring, spectrum and irreducible-decomposition suppliers below. [[math:def-axiom-of-choice]]

[F1] A field is a nonzero commutative unital ring in which every nonzero element has a multiplicative inverse. [[math:def-field]]

[F2] Finite type has the locally-finite-type and quasi-compact definition, and over the affine target $\operatorname{Spec}k$ it is tested on a finite affine source cover by finite-type $k$-algebras. [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:lem-finite-type-local-on-source-and-target]]

[F3] Under Choice, a commutative ring is Noetherian if and only if all its ideals are finitely generated. A finite-type algebra over a Noetherian commutative ring is Noetherian, and its spectrum is a Noetherian topological space. [[math:thm-noetherian-ring-ideal-characterisations]] [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] [[math:thm-noetherian-ring-has-noetherian-spectrum]]

[F4] A scheme is Noetherian if and only if it has a finite affine open cover by spectra of Noetherian rings. Under Choice, every Noetherian topological space is a finite union of irreducible closed subsets. [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[F5] A scheme morphism is a morphism of locally ringed spaces and hence of ringed spaces; in particular its underlying map is continuous. [[math:def-morphism-of-schemes]] [[math:def-morphism-locally-ringed-spaces]] [[math:def-morphism-ringed-spaces]] Continuity means continuity at every point: every open neighbourhood of the image contains the image of an open neighbourhood of that point. [[math:def-continuous-map-top]]

[F6] A scheme is a locally ringed space locally isomorphic to an affine scheme; the empty scheme is allowed. A $k$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}k$, and a $k$-morphism commutes with these structure morphisms. An affine scheme has a presentation $(\operatorname{Spec}R,\mathcal O_{\operatorname{Spec}R})$; an affine open subscheme is an open subset with the restricted structure sheaf that is affine. [[math:def-scheme]] [[math:def-scheme-over-base]] [[math:def-affine-scheme]] [[math:def-affine-open-subscheme]]

[F7] A commutative $k$-algebra $R$ is of finite type, or finitely generated as a $k$-algebra, if $R=k[r_1,\ldots,r_n]$ for finitely many elements of $R$, where this denotes the subalgebra generated by them and the image of $k$. [[math:def-finite-type-and-module-finite-algebras]]

[F8] A scheme morphism $f:X\to S$ is quasi-compact when $f^{-1}(V)$ is quasi-compact for every quasi-compact open $V\subseteq S$; quasi-compactness of a space means that every open cover has a finite subcover. This is the quasi-compactness condition in the finite-type structure morphism of [F2]. [[math:def-quasi-compact-and-quasi-separated-morphism]]

[F9] A topology contains the empty and whole sets and is closed under arbitrary unions and finite intersections. Closed means having open complement, so finite unions of closed subsets are closed. On a subset $S\subseteq T$, relatively open and relatively closed sets are respectively $S\cap U$ for $U$ open in $T$ and $S\cap F$ for $F$ closed in $T$; these relative topologies are transitive under further restriction. [[math:def-topological-space]] [[math:def-subspace-topology-top]]

[F10] An ideal in a commutative ring is an additive subgroup closed under multiplication by any element of that ring. The ideal generated by a subset is the intersection of all ideals containing it; an ideal is finitely generated when it is generated by a finite subset. [[math:def-left-right-and-two-sided-ideal]] [[math:def-generated-and-principal-ideals]]

[F11] The integers $\mathbb Z$ have the addition, zero and negation of the supplied integer arithmetic. The triple $(\mathbb Z,+,0)$ is an abelian group: addition is associative and commutative, zero is an identity, and $-n$ is the additive inverse of $n$. [[math:def-integers]] [[math:def-int-operations]] [[math:ex-integers-under-addition]] [[math:def-group]]

[F12] An isomorphism of groups means a bijection preserving the group operation; for the additive groups here it must preserve addition. [[math:def-group-isomorphism-and-automorphism]]

[F13] A neighbourhood $N$ of a point $x$ is a subset containing an open set $U$ with $x\in U\subseteq N$; it need not itself be open. Thus a function constant on a neighbourhood of $x$ is constant on an open neighbourhood of $x$. Finite intersections of neighbourhoods are neighbourhoods. [[math:def-neighbourhood-top]]

## Proof

1.1 By [F2], take a finite affine cover $X=\bigcup_{i=1}^m\operatorname{Spec}R_i$ with each $R_i$ a finitely generated $k$-algebra. A field has only the zero and unit ideals: an ideal containing $a\ne0$ contains $a^{-1}a=1$ by [F1]. The zero ideal is generated by $0$, and the unit ideal by $1$, by [F10]. Thus both are finitely generated, so [F3] makes $k$ and then each $R_i$ Noetherian. By [F4], $X$ is a Noetherian scheme. Its underlying space is Noetherian too: a descending chain of closed subsets restricts to a stationary chain on each affine by [F3], and the maximum of the finitely many stationarity indices works on the whole cover. The empty scheme uses the empty cover and is immediate. [A1, F1, F2, F3, F4, F6, F7, F8, F9, F10, given]

2.1 By [F4] and step 1.1, write $|X|=\bigcup_{i=1}^n C_i$ with irreducible closed $C_i$. Each $C_i$ is connected, since a separation would express it as two proper relatively closed subsets. Declare indices equivalent when joined by a finite sequence of indices with successive $C_i$ intersecting. Each equivalence class gives a connected union: in any separation, every connected $C_i$ lies on one side and intersections force all members of the sequence onto the same side. These class unions are disjoint closed subsets covering $|X|$, finite in number; each is open because its complement is a finite union of the other closed unions. A connected subset meeting one cannot meet its complement, since their intersections would separate it. Thus these unions are exactly the connected components, which are finite and clopen. For empty $X$ there are no components. [A1, F4, F9, step 1.1, construct]

3.1 Both function sets in the statement carry abelian group structures under pointwise addition: the zero function is locally constant, negation preserves constancy on each open neighbourhood, and the sum of two locally constant functions is constant on the intersection of open neighbourhoods on which each is constant, by [F9] and [F13]. On all functions on the component set these operations are unrestricted. The group equations hold pointwise by [F11]. Every value fiber of a locally constant function is open, since [F13] gives an open neighbourhood contained in that fiber at each of its points, and [F9] permits their union. Such a function is therefore constant on each connected component: if it took different values on a component, one nonempty value fiber and the union of its other value fibers would separate the component. Conversely, any function on the components defines a locally constant function on $|X|$, since each point lies in exactly one component and each component is an open neighbourhood of each of its points by step 2.1. Taking the unique value on each component and assigning component values back to points are mutually inverse constructions; they preserve pointwise addition, hence give a group isomorphism by [F12]. By [F5], a scheme morphism has a continuous underlying map, and a connected subset has connected image: a separation of the image would pull back to a separation of the subset, using the relative topologies in [F9] and the open-neighbourhood criterion in [F5]. Indeed the preimage of an open set is the union of the open neighbourhoods supplied at its preimage points. Thus precomposition preserves local constancy, and the morphism sends each component into a unique component. Precomposition on the two function groups commutes with the displayed identification: both composites assign to a source component the value on the component containing its image. For empty $X$ both function sets consist only of the empty function, which is their zero element. This proves the entire statement. [F5, F6, F9, F11, F12, F13, step 2.1, construct] ∎
