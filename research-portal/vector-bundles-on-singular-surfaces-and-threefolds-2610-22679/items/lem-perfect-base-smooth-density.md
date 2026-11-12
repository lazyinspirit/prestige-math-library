---
id: lem-perfect-base-smooth-density
kind: lemma
title: Smooth density and normal codimension over a perfect field
status: published
domain: mathematics
deps:
  - math:thm-smooth-locus-open
  - math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:def-axiom-of-choice
  - lem-normal-scheme-component-reduction
  - lem-author-2389e5bafea8-generic-reduced-local-ring
  - lem-author-2389e5bafea8-field-regular-local
  - lem-author-2389e5bafea8-dvr-regular-local
  - lem-author-2389e5bafea8-open-generic-density
  - lem-author-2389e5bafea8-codimension-exclusion
  - lem-author-2389e5bafea8-perfect-pointwise-smoothness
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-separable-elements-and-separable-extensions
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-irreducible-component-of-a-topological-space
  - math:def-irreducible-topological-space-and-subset
  - math:def-locally-finite-presentation-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-spectrum-sober
  - math:thm-subspace-closure-and-interior
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-height-of-a-prime-ideal
  - math:cor-primes-of-a-prime-local-ring
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
dependency_roles:
  math:thm-smooth-locus-open: mathematical-premise
  math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr: mathematical-premise
  math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-normal-scheme-component-reduction: mathematical-premise
  lem-author-2389e5bafea8-generic-reduced-local-ring: mathematical-premise
  lem-author-2389e5bafea8-field-regular-local: mathematical-premise
  lem-author-2389e5bafea8-dvr-regular-local: mathematical-premise
  lem-author-2389e5bafea8-open-generic-density: mathematical-premise
  lem-author-2389e5bafea8-codimension-exclusion: mathematical-premise
  lem-author-2389e5bafea8-perfect-pointwise-smoothness: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-separable-elements-and-separable-extensions: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-locally-finite-presentation-morphism: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-spectrum-sober: mathematical-premise
  math:thm-subspace-closure-and-interior: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:def-height-of-a-prime-ideal: mathematical-premise
  math:cor-primes-of-a-prime-local-ring: mathematical-premise
  math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement
Assume the Axiom of Choice. Let $X$ be a reduced finite-type scheme over a perfect field $k$. Its smooth locus is open and meets every irreducible component in a dense open subset. If $X$ is normal, its nonsmooth locus has codimension at least two in every irreducible component.

A field is perfect if all its algebraic extensions are separable. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that every local ring has no nonzero nilpotents; normal means that every local ring is an integrally closed domain. The smooth locus is the set of points where $X\to\operatorname{Spec} k$ is smooth. For an integral component $C$, the codimension of a point is the supremum of lengths of strict chains of irreducible closed subsets from $C$ to the closure of the point; the codimension of a subset is the infimum over its points, with the empty subset having codimension $+\infty$.

## Statement references

[[math:def-scheme]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:def-separable-elements-and-separable-extensions]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-irreducible-component-of-a-topological-space]]

[[math:def-irreducible-topological-space-and-subset]]

[[math:def-locally-finite-presentation-morphism]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

## Facts & Assumptions

**Given:** AC, a perfect field $k$, and a reduced finite-type $k$-scheme $X$.

**Goal:** Prove openness and componentwise density of the smooth locus and, when $X$ is normal, the codimension bound on its complement.

[F1] A finite-variable polynomial algebra over a field is noetherian ([[math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]). Here noetherian means that every ideal is finitely generated. Its quotients are noetherian: the images of generators of an ideal preimage generate that ideal in the quotient. A scheme with a finite affine cover by spectra of noetherian rings is noetherian ([[math:def-locally-noetherian-and-noetherian-scheme]]).

[F2] Under AC, the smooth locus of a locally finitely presented morphism is open ([[math:thm-smooth-locus-open]]). Locally of finite presentation means admitting affine charts with finitely presented coordinate algebras ([[math:def-locally-finite-presentation-morphism]]). AC means that every family of nonempty sets has a choice function ([[math:def-axiom-of-choice]]).

[F3] For a reduced scheme locally of finite type over a perfect field, smoothness at a point is equivalent to regularity of its local ring; this is an external input ([[lem-author-2389e5bafea8-perfect-pointwise-smoothness]]).

[F4] Under the assumed AC, a generic local ring of a reduced scheme is a field, and every field is regular local ([[lem-author-2389e5bafea8-generic-reduced-local-ring]], [[lem-author-2389e5bafea8-field-regular-local]]). An open subset containing the generic point of a component meets it densely ([[lem-author-2389e5bafea8-open-generic-density]]).

[F5] Under AC, a noetherian normal scheme is a finite disjoint union of open-and-closed integral normal components, and each affine coordinate ring is a finite product of noetherian integrally closed domains ([[lem-normal-scheme-component-reduction]]). For a noetherian integrally closed domain, localization at a height-one prime is a discrete valuation ring ([[math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]), and such a ring is regular local ([[lem-author-2389e5bafea8-dvr-regular-local]]). The spectrum of a finite product of rings is the disjoint union of the factor spectra ([[math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]], Statement, clause 3). Affine stalks are prime localizations ([[math:thm-stalk-structure-sheaf-prime-localization]]).

[F6] A subset of an integral scheme with no points of codimension zero or one has codimension at least two ([[lem-author-2389e5bafea8-codimension-exclusion]]).

[F7] A scheme has an affine open neighborhood at every point ([[math:def-scheme]]). An irreducible component is a maximal nonempty irreducible subset ([[math:def-irreducible-component-of-a-topological-space]]); irreducibility means that a union of two relatively closed proper subsets cannot be the whole subset ([[math:def-irreducible-topological-space-and-subset]]). Closure is the smallest closed superset. For $T\subseteq W\subseteq X$, closure in $W$ is $W\cap\operatorname{cl}_X(T)$ ([[math:thm-subspace-closure-and-interior]], clause 1). Under AC, every nonempty irreducible closed subset of an affine spectrum has a unique generic point ([[math:thm-spectrum-sober]]), meaning a point whose closure is that subset.

[F8] Under AC, nonempty irreducible closed subsets of $\operatorname{Spec} A$ are exactly the sets $V(\mathfrak q)$ for prime ideals $\mathfrak q$, with unique generic point $\mathfrak q$ ([[math:thm-irreducible-closed-subsets-and-prime-ideals]]). Here $V(\mathfrak q)$ is the set of primes containing $\mathfrak q$. The height of $\mathfrak p$ is $\dim A_{\mathfrak p}$ ([[math:def-height-of-a-prime-ideal]]); primes of $A_{\mathfrak p}$ correspond, preserving inclusion, to primes of $A$ contained in $\mathfrak p$ ([[math:cor-primes-of-a-prime-local-ring]]). Krull dimension is the supremum of lengths of strict chains of prime ideals.

## Proof

1.1 On each finite-type affine chart $\operatorname{Spec} A$, write $A=k[t_1,\ldots,t_n]/I$. By [F1], the polynomial ring is noetherian, so $I$ is finitely generated and $A$ is both noetherian and finitely presented over $k$: a finitely presented $k$-algebra is a polynomial algebra in finitely many variables modulo a finitely generated ideal. Thus $X$ is noetherian and its structure morphism is locally finitely presented. By [F2] its smooth locus $U$ is open. [F1, F2, given]

2.1 Fix an irreducible component $C$. Its closure is irreducible: if the closure lies in a union of two closed sets, irreducibility puts $C$ in one of them, and closedness then puts its closure there. Maximality of $C$ therefore makes $C$ closed. Choose an affine open $W$ meeting $C$. The nonempty open $C\cap W$ is irreducible and dense in $C$: two disjoint nonempty relatively open sets would decompose $C$ into two proper closed sets by taking their complements, and this intersection property implies both assertions. Thus $C\cap W$ is nonempty irreducible and closed in $W$. By [F7] it has a unique generic point $\eta$ in $W$. The subspace-closure identity gives $C\cap W\subseteq\operatorname{cl}_X(\{\eta\})\subseteq C$; taking closure in $X$ and using density yields $\operatorname{cl}_X(\{\eta\})=C$. Any second generic point of $C$ belongs to $W$, since every open meeting its closure contains the point, and would be generic for $C\cap W$; uniqueness in [F7] excludes this. By reducedness and [F4], $\mathcal O_{X,\eta}$ is a field and hence regular local. The pointwise input [F3] gives $\eta\in U$, and [F4] makes $U\cap C$ dense open. The empty scheme has no components and is covered vacuously. [F3, F4, F7, step 1.1, given, choose]

3.1 Now suppose $X$ normal. By step 1.1 and [F5], its components are open-and-closed integral normal schemes. Fix one component $C$ and a point $x$ of codimension one in it. Choose an affine neighborhood $\operatorname{Spec} A\subset C$ of $x$. The component reduction [F5] makes $A$ a finite product of noetherian integrally closed domains; since its spectrum is a nonempty open subset of the irreducible space $C$, it is irreducible, so the finite-product spectrum decomposition in [F5] permits only one domain factor: every domain has the prime ideal $(0)$, hence has nonempty spectrum. Thus $A$ is a noetherian integrally closed domain. The prime $\mathfrak p$ corresponding to $x$ has height one. Indeed, every irreducible closed subset of $C$ containing $x$ meets $W=\operatorname{Spec} A$ in a nonempty irreducible open subset, dense in that closed subset by the same intersection argument as in step 2.1. Intersection with $W$ and closure in $C$ therefore give inverse operations between irreducible closed subsets of $C$ containing $x$ and irreducible closed subsets of $W$ containing $x$; these operations preserve inclusions and strictness. By [F8], the latter subsets are $V(\mathfrak q)$ with $\mathfrak q\subseteq\mathfrak p$, and their inclusion order is reversed. Since $A$ is a domain, $W=V((0))$ corresponds to $(0)$, and the closure of $x$ in $W$ is $V(\mathfrak p)$. Thus strict chains from $C$ to the closure of $x$ correspond to prime chains from $(0)$ to $\mathfrak p$. Every finite chain of primes below $\mathfrak p$ can be extended by these endpoints when absent. Their supremum of lengths is $\dim A_{\mathfrak p}=\operatorname{ht}(\mathfrak p)$ by [F8], hence equals the given codimension one. By [F5], $\mathcal O_{X,x}\cong A_{\mathfrak p}$ is a discrete valuation ring and hence regular local. [F5, F7, F8, step 1.1, step 2.1, given, choose]

4.1 A point of codimension zero in $C$ has closure $C$, since a proper closure would already give a chain of length one. It is therefore the unique generic point constructed in step 2.1 and is smooth by that step, and every codimension-one point is smooth by step 3.1 and [F3]. Hence $C\setminus U$ contains no point of codimension zero or one. Applying [F6] proves its codimension is at least two. AC is used through the explicitly AC-dependent suppliers [F2], [F4], [F5], [F7] and [F8]. [F2, F3, F5, F6, F7, F8, step 2.1, step 3.1] ∎
