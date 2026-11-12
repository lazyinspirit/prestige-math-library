---
id: lem-author-9ab3274efad8-smooth-affine-components
kind: lemma
title: Connected components of a smooth affine curve
status: published
domain: mathematics
deps:
  - math:def-sheaf-on-topological-space
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-classical
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-algebraically-closed-field
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:thm-regular-local-rings-are-domains-and-cohen-macaulay
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:thm-irreducible-components-and-minimal-primes
  - math:def-prime-spectrum-and-vanishing-sets
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:def-localisation-at-a-prime-ideal
  - math:thm-prime-spectrum-of-a-localisation-bijection
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:def-principal-distinguished-subset-of-spectrum
  - math:def-principal-localisation
  - math:lem-spectrum-localization-open-immersion
  - math:def-finite-type-and-module-finite-algebras
  - math:cor-affine-scheme-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-irreducible-topological-space-and-subset
  - math:def-irreducible-component-of-a-topological-space
  - math:def-dimension-noetherian-topological-space
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
  - math:def-axiom-of-choice
dependency_roles:
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:thm-noetherian-ring-ideal-characterisations: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:thm-irreducible-components-and-minimal-primes: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:thm-prime-spectrum-of-a-localisation-bijection: mathematical-premise
  math:lem-clopen-subset-gives-idempotent-decomposition: mathematical-premise
  math:def-principal-distinguished-subset-of-spectrum: mathematical-premise
  math:def-principal-localisation: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. A smooth affine curve C over an algebraically closed field is a finite disjoint union of open and closed connected smooth affine curves. The assertion includes the empty scheme if that convention for curve is allowed.

Here a curve is a finite-type scheme of pure dimension one over the field; smooth means smooth over that field, and affine means isomorphic to the spectrum of a commutative ring. Pure dimension one means that every irreducible component of the underlying topological space has dimension one, where dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. The empty scheme has no irreducible components, so this pure-dimension condition is vacuous for it. Each piece is given its open subscheme structure, namely the restricted structure sheaf, and its structure morphism to the field is restricted from that of C. For a finite family $(X_i)$, its scheme disjoint union has the disjoint union topology and sections on an open set $U$ equal to $\prod_i\mathcal O_{X_i}(U\cap X_i)$. This defines a sheaf by locality and gluing on each piece, and the resulting locally ringed space is a scheme because each piece is open with its original structure.

## Facts & Assumptions

[F1] Schemes over $k$ are schemes equipped with a morphism to $\operatorname{Spec}k$; finite type means locally of finite type and quasi-compact. Smoothness is the source-local standard-smooth condition at every point, under AC. An affine scheme is isomorphic as a locally ringed space to an affine spectrum. Open subschemes carry the restricted structure sheaf; sheaf locality and gluing include the empty open cover ([[math:def-sheaf-on-topological-space]], [[math:def-scheme-over-base]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-smooth-morphism-classical]], [[math:def-affine-scheme]], [[math:def-affine-open-subscheme]]).

[F2] An algebraically closed field has a root for every nonconstant polynomial, and every algebraically closed field is perfect. Over a perfect field a smooth finite-type scheme has regular local rings; under AC, each regular local ring is a domain ([[math:def-algebraically-closed-field]], [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[math:thm-regular-equals-smooth-over-perfect-field]], [[math:thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F3] Under AC, an affine finite-type $k$-scheme $\operatorname{Spec}A$ has $A$ finitely generated as a $k$-algebra. A commutative ring is Noetherian exactly when every ideal has a finite generating list. A finite-type algebra over a Noetherian ring is Noetherian ([[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]], [[math:thm-noetherian-ring-ideal-characterisations]], [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

[F4] Under AC, the spectrum of a Noetherian ring is a Noetherian topological space, and a Noetherian space is the union of its finitely many irreducible closed components ([[math:thm-noetherian-ring-has-noetherian-spectrum]], [[math:lem-noetherian-space-has-finitely-many-irreducible-components]]).

[F5] Under AC, the irreducible components of $\operatorname{Spec}A$ are precisely $V(\mathfrak q)$ for the distinct minimal primes $\mathfrak q$ of $A$, where $V(I)$ consists of primes containing $I$. The stalk at $\mathfrak p$ is $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$. Extension and contraction give inverse inclusion-preserving bijections between primes of $A_{\mathfrak p}$ and primes of $A$ contained in $\mathfrak p$ ([[math:thm-irreducible-components-and-minimal-primes]], [[math:def-prime-spectrum-and-vanishing-sets]], [[math:thm-stalk-structure-sheaf-prime-localization]], [[math:def-localisation-at-a-prime-ideal]], [[math:thm-prime-spectrum-of-a-localisation-bijection]]).

[F6] Under AC, every clopen subset $Z$ of $\operatorname{Spec}A$ has the form $V(e)=D(1-e)$ for an idempotent $e\in A$. Here $D(f)$ consists of primes not containing $f$, and $A_f$ is localization at the powers of $f$. The open subscheme $D(f)$ is isomorphic to $\operatorname{Spec}A_f$ as a locally ringed space ([[math:lem-clopen-subset-gives-idempotent-decomposition]], [[math:def-principal-distinguished-subset-of-spectrum]], [[math:def-principal-localisation]], [[math:lem-spectrum-localization-open-immersion]]).

[F7] A finite-type $k$-algebra is generated by a finite list over $k$, and every affine scheme is quasi-compact under AC. A scheme morphism is quasi-compact if the inverse image of every quasi-compact open subset is quasi-compact ([[math:def-finite-type-and-module-finite-algebras]], [[math:cor-affine-scheme-quasi-compact]], [[math:def-quasi-compact-and-quasi-separated-morphism]]).

[F8] Irreducible means nonempty and not a union of two proper closed subsets; irreducible components are maximal irreducible subsets. Dimension on a Noetherian space is the supremum of lengths of chains of nonempty irreducible closed subsets. Connected means admitting no partition into two nonempty disjoint open subsets; a connected component through a point is the union of all connected subsets containing that point ([[math:def-irreducible-topological-space-and-subset]], [[math:def-irreducible-component-of-a-topological-space]], [[math:def-dimension-noetherian-topological-space]], [[math:def-connected-space]], [[math:def-connected-component-and-quasicomponent]]).

[A1] Assume the Axiom of Choice, meaning that every family of nonempty sets has a choice function. It is retained for the regularity, component, clopen-idempotent and affine quasi-compactness suppliers; no additional simultaneous choices are made in the argument ([[math:def-axiom-of-choice]]).

**Given:** C as stated over an algebraically closed field $k$, and the Axiom of Choice.

**Goal:** Prove the finite connected affine decomposition with the stated curve conditions on each piece.

## Proof

1.1 If $C$ is empty, the empty union is the required decomposition. Otherwise choose an affine presentation $C=\operatorname{Spec}A$ as a $k$-scheme. By [F3], $A$ is finitely generated over $k$. Every ideal of $k$ is either $(0)$ or $(1)$: an ideal containing a nonzero element contains its inverse multiple $1$. Thus $k$ is Noetherian by [F3], so $A$ is Noetherian as well. By [F4], $C$ has finitely many irreducible closed components $Z_1,\ldots,Z_r$ and they cover $C$. By [F2], $k$ is perfect and every local ring of $C$ is a domain. Write $Z_i=V(\mathfrak q_i)$ using [F5]. If $\mathfrak p\in Z_i\cap Z_j$, then both distinct minimal primes $\mathfrak q_i,\mathfrak q_j$ lie inside $\mathfrak p$. The prime correspondence of [F5] makes their extensions distinct minimal primes of $A_{\mathfrak p}$: a smaller prime would contract to a smaller prime of $A$. But this stalk is a domain, whose only minimal prime is $(0)$, a contradiction. Hence distinct components are disjoint. Each is open because its complement is the union of the finitely many other closed components. [F1, F2, F3, F4, F5, A1, given, choose]

2.1 Each $Z_i$ is connected: a separation into two nonempty open subsets would also be a decomposition into two proper closed subsets, contradicting irreducibility in [F8]. Any connected subset meeting both $Z_i$ and its clopen complement would itself be separated by their intersections. Therefore each $Z_i$ is exactly a connected component, with the open subscheme structure from [F1]. By [F6], choose an idempotent $e_i$ with $Z_i=D(1-e_i)$; this open subscheme is $\operatorname{Spec}A_{1-e_i}$. Since $e_i(1-e_i)=0$, localization at $1-e_i$ kills $e_i$, and $1-e_i$ becomes $1$ modulo $(e_i)$; these two maps give inverse $k$-algebra isomorphisms $A_{1-e_i}\cong A/(e_i)$. This is a direct factor: the inverse of $A\to A/(e_i)\times A/(1-e_i)$ sends $(a\bmod e_i,b\bmod(1-e_i))$ to $(1-e_i)a+e_i b$, independently of representatives. Thus $Z_i$ is affine, and the images of a finite generating list of $A$ generate its coordinate algebra over $k$. Its map to $\operatorname{Spec}k$ is locally of finite type by this single affine chart and quasi-compact by [F7], since the base has only its empty and whole open subsets. It is therefore finite type by [F1]. Smoothness restricts to this open subscheme by the source-local condition in [F1]. Finally, $Z_i$ is a closed irreducible component of $C$, so it has dimension one by the given pure-dimension hypothesis. As a space it is irreducible and has itself as its sole irreducible component, and thus is pure of dimension one by [F8]. For any open $U\subseteq C$, sheaf locality and gluing give $\mathcal O_C(U)\cong\prod_i\mathcal O_C(U\cap Z_i)$, since the overlaps are empty. Hence the finite open partition identifies $C$ with the scheme disjoint union of the pieces, including their structure sheaves and base morphisms. Together with the empty case of step 1.1 this proves the claim. [F1, F6, F7, F8, A1, step 1.1, construct, algebra] ∎
