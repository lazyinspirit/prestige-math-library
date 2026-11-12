---
id: lem-author-27d786ff4d27-chartwise-integrality
kind: lemma
title: Swan chartwise integrality glues on the actual quasi-affine open
status: published
domain: mathematics
deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-author-27d786ff4d27-common-core-nonempty
  - lem-author-27d786ff4d27-fixed-locus-avoidance
  - thm-author-27d786ff4d27-swan-controlled-bertini
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-axiom-of-choice
  - lem-regular-section-parameter-family
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:def-affine-scheme-spectrum
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-smooth-morphism-schemes
  - math:def-reduction-of-scheme
  - math:def-base-change-morphism-schemes
  - math:lem-fibre-product-open-restriction
  - math:lem-base-change-surjective-morphisms
  - thm-author-fc2380accb47-normal-geometric-input
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-perfect-field
dependency_roles:
  thm-author-fc2380accb47-normal-geometric-input: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:def-perfect-field: mathematical-premise
  lem-author-27d786ff4d27-dual-global-controls: mathematical-premise
  lem-author-27d786ff4d27-common-core-nonempty: mathematical-premise
  lem-author-27d786ff4d27-fixed-locus-avoidance: mathematical-premise
  thm-author-27d786ff4d27-swan-controlled-bertini: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-regular-section-parameter-family: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-reduction-of-scheme: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
  math:lem-fibre-product-open-restriction: mathematical-premise
  math:lem-base-change-surjective-morphisms: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 17
formulation_deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-author-27d786ff4d27-fixed-locus-avoidance
  - math:def-axiom-of-choice
  - lem-regular-section-parameter-family
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:def-affine-scheme-spectrum
  - math:def-smooth-morphism-schemes
  - math:def-reduction-of-scheme
  - math:def-base-change-morphism-schemes
argument_deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-author-27d786ff4d27-common-core-nonempty
  - lem-author-27d786ff4d27-fixed-locus-avoidance
  - thm-author-27d786ff4d27-swan-controlled-bertini
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-axiom-of-choice
  - lem-regular-section-parameter-family
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:def-affine-scheme-spectrum
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-smooth-morphism-schemes
  - math:def-reduction-of-scheme
  - math:def-base-change-morphism-schemes
  - math:lem-fibre-product-open-restriction
  - math:lem-base-change-surjective-morphisms
  - thm-author-fc2380accb47-normal-geometric-input
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-perfect-field
---

## Statement
Assume the Axiom of Choice and the integral global controlling-family setup: $X=\operatorname{Spec}A$ is a normal integral affine finite-type threefold over an algebraically closed field $k$, $S$ is the finite smooth zero scheme of the preceding point functional, $U=X\setminus S$, and $Q|_U$ is its rank-two kernel bundle. Fix a closed subset $Z\subset U$ of codimension at least two. Put $E=(Q|_U)^\vee$ and $W=U\setminus(Z\cup U_{\mathrm{sing}})$, where $U_{\mathrm{sing}}$ is the complement of the smooth locus over $k$. Use the finite nonempty principal charts $W_i=D(g_i)$ covering the nonempty smooth open $W$ and the global indexed family $\sigma_1,\ldots,\sigma_N$ supplied by the controlling-family construction. This family generates $E$, spans first jets at smooth closed points, and contains the controlling sections on every chart. Its coefficient scheme is $T=\mathbb A_k^N$.

There is a nonempty scheme-open subset $G\subset T$, with $G(k)\ne\varnothing$, such that for every $a=(a_1,\ldots,a_N)\in G(k)$ the entire scheme-theoretic zero locus in $U$ of $t_a=\sum_j a_j\sigma_j:Q|_U\to\mathcal O_U$ is a nonempty smooth geometrically integral curve of pure codimension two, avoiding $Z$. Here geometrically integral means integral after every field extension of $k$. The conclusion quantifies over $k$-parameters of $G$.

## Facts & Assumptions
**Given:** The Axiom of Choice, the integral setup, fixed $Z$, actual global indexed sections and finite controlling chart cover specified in the Statement. All open subsets of schemes carry their restricted structure sheaves. Normality means that every local ring is an integrally closed domain. A vector bundle is a finite locally free module sheaf; its dual is the sheaf of module homomorphisms to the structure sheaf, and a functional is a section of that dual. A frame is a local sheaf basis; first jets at $x$ are the classes in $E_x/\mathfrak m_x^2E_x$. We use the family, frames and first-jet spanning supplied in [F1], without constructing a new family.

**Goal:** Establish global and geometric integrality of the actual zero scheme, with the asserted parameter quantifier.

[F1] The Statement of [[lem-author-27d786ff4d27-dual-global-controls]] supplies this setup, the indexed global family and its controlling sections on each smooth affine geometrically integral chart, all of dimension three. In particular $k$ is infinite and the chart family is the restriction of the same global indexed family, including repetitions.

[F2] [[thm-author-27d786ff4d27-swan-controlled-bertini]] gives, for this indexed list on each chart, a nonempty Zariski-open subset of $k^N$ where the chart zero scheme is empty or smooth geometrically integral of dimension $3-2=1$. Its topology is defined by polynomial zero sets. Thus choose a scheme-open $G_i\subset T$ with precisely those rational points, by taking the complement of the closed set defined by the same polynomial equations. The nonempty rational open ensures $G_i$ is nonempty. Only its $k$-points are used for the Swan conclusion.

[F3] [[lem-author-27d786ff4d27-common-core-nonempty]] supplies, for each nonempty smooth open $O\subset U$, a nonempty scheme-open $T_O\subset T$ on which every $k$-parameter has a nonempty zero scheme on $O$. [[lem-author-27d786ff4d27-fixed-locus-avoidance]] supplies a nonempty scheme-open $T_{\mathrm{av}}$ whose zero schemes avoid the union of $Z$ and the nonregular locus of $U$; it also supplies that this bad locus has dimension at most one. By [F7] that nonregular locus equals the complement $U_{\mathrm{sing}}$ of the smooth locus used here. [[thm-author-fc2380accb47-finite-type-geometric-input]] supplies rational points on nonempty parameter opens locally of finite type over $k$, and the finite-type dimension/codimension formulas used for the three-dimensional charts and their one-dimensional closed curves.

[F4] Apply [[lem-regular-section-parameter-family]] with its bundle equal to $Q|_U$, whose dual is $E$, and with its generating dual sections equal to $\sigma_1,\ldots,\sigma_N$. It constructs the universal coefficient-ideal zero subscheme $I\subset U\times_k T$ and identifies its pullback at each valued parameter with the actual zero scheme of that functional. In a frame of $E$, the two coefficients generate the zero ideal; invertible changes of frame preserve that ideal. Restricting these coefficient ideals to an open gives the same zero construction on that open, as in the supplier's Proof 1.1. The supplier's valued-parameter identification also applies to field extensions of a fixed parameter.

[F5] [[math:def-integral-scheme]] defines integral as nonempty, irreducible and reduced. [[math:def-irreducible-topological-space-and-subset]] defines irreducibility by the impossibility of a union of two proper closed subsets, using the subspace topology for subsets. [[math:def-affine-scheme-spectrum]] gives the principal-open basis $D(h)$ and the prime-ideal points of an affine spectrum. [[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]] makes $k[t_1,\ldots,t_N]$ a domain, so $(0)$ is a prime point of $T$. Every nonempty basic open contains this point, hence every nonempty open of $T$ contains it.

[F6] [[math:def-smooth-morphism-schemes]] makes smoothness a pointwise condition unchanged on source-open neighbourhoods. [[math:def-reduction-of-scheme]] describes the nilradical sheaf by nilpotent germs. Reduced means that this sheaf is zero, equivalently that each local ring has no nonzero nilpotent; these local rings do not change on open neighbourhoods. [[math:def-base-change-morphism-schemes]] fixes $Y_K=Y\times_k\operatorname{Spec}K$. [[math:lem-fibre-product-open-restriction]] identifies base changes of open subschemes with open inverse images, preserves their intersections, and therefore takes an open cover to an open cover. Under AC, [[math:lem-base-change-surjective-morphisms]] ensures that a nonempty $k$-scheme remains nonempty after every extension $K/k$.

[F7] [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]] makes the algebraically closed field $k$ perfect, in the sense of [[math:def-perfect-field]]. Apply the regular/smooth-locus assertion of [[thm-author-fc2380accb47-normal-geometric-input]] to $X$: it is reduced because it is integral by [F5], and it is finite type over the perfect field $k$ by the setup. Its regular and smooth loci therefore coincide and are open. On the open subscheme $U$ the local rings are unchanged, and smoothness is unchanged on source-open neighbourhoods by [F6], so the same locus equality holds on $U$. Thus the nonregular locus avoided in [F3] is exactly $U_{\mathrm{sing}}$ as defined in the Statement; the avoidance conclusion and its dimension bound apply to the stated $Z\cup U_{\mathrm{sing}}$.

[A1] [[math:def-axiom-of-choice]] is assumed at [F1], its applications in [F3], and the nonemptiness-under-field-extension invocation in [F6]. The finite intersections and the topological gluing make no further arbitrary-index choice.

## Proof
**Given:** The setup and facts above, including AC, with the fixed avoidance subset chosen before the parameter.

1.1 By taking complements in the definition in [F5], irreducibility is equivalent to the intersection of any two nonempty opens being nonempty. Induction gives the same for a finite list. It also follows that a nonempty open of an irreducible space is irreducible and dense: two nonempty relative opens are opens of the ambient space and meet, and every nonempty ambient open meets the given open. Since $X$ is integral, the intersection $O=\bigcap_i W_i$ is nonempty and is a smooth open in $U$. It is principal: $\bigcap_iD(g_i)=D(\prod_i g_i)$ since a prime contains a product exactly when it contains a factor. Apply [F3] to $O$ and set $G=T_O\cap T_{\mathrm{av}}\cap\bigcap_i G_i$. Each factor is scheme-open and nonempty; each contains the prime $(0)$ of $T$ by [F5], so their finite intersection is nonempty. The rational-point input in [F3] gives $G(k)\ne\varnothing$. Fix an arbitrary $a\in G(k)$, and use [F4] to form its zero scheme $Y\subset U$. Its chart restrictions are the very same coefficient-ideal schemes to which [F2] applies, because [F1] supplies one global indexed family containing all the required chart controls. More explicitly, on a controlling frame chart with coordinate ring $B$, the restricted section is a vector $(b_1,b_2)\in B^2$. Its Swan order ideal is $(b_1,b_2)$: the coordinate functionals give the two generators, and every $B$-linear functional has value a $B$-linear combination of them. Thus Swan's zero scheme and the zero scheme of [F4] agree, including their scheme structures. By [F3] and the regular/smooth-locus identification in [F7], $Y$ avoids $Z\cup U_{\mathrm{sing}}$, so $Y\subset W$. The common zero subscheme $C=Y\cap O$ is nonempty by [F3]. Thus every $Y_i=Y\cap W_i$ contains $C$ and is nonempty, smooth and geometrically integral of dimension one by [F2]. [F1, F2, F3, F4, F5, F7, A1, given, construct]

2.1 The $Y_i$ cover $Y$. Their common open $C$ is irreducible, being a nonempty open in $Y_1$, and is dense in every $Y_i$ by step 1.1. Every nonempty open $V$ in $Y$ meets some $Y_i$, and the nonempty open $V\cap Y_i$ meets $C$ by this density. Hence any two nonempty opens of $Y$ restrict to nonempty opens of the irreducible $C$ and meet there. By [F5], $Y$ is irreducible. Its local rings are those of the reduced integral charts $Y_i$, so [F6] makes it reduced; smoothness likewise holds at each point by its chart. The finite-type dimension/codimension formulas of [F3], on the open threefold charts, give dimension one and pure codimension two in $U$. For any extension $K/k$, [F4] identifies the scalar extension with the actual zero scheme of the extended functional, and [F6] identifies $(Y_i)_K$ as an open cover of $Y_K$ with common open $C_K$. This common open is nonempty by [F6] under AC; every $(Y_i)_K$ is integral by the geometric integrality in [F2]. The preceding open-intersection argument therefore makes $Y_K$ irreducible, and its chart local rings make it reduced. Thus $Y_K$ is integral for every $K/k$, proving geometric integrality. Avoidance and nonemptiness were established in step 1.1. Since $a$ was arbitrary in $G(k)$, this proves the full assertion for the actual quasi-affine $U$. [F2, F3, F4, F5, F6, A1, step 1.1] ∎
