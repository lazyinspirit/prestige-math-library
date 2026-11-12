---
title: Detection on a simultaneous flag tower
status: published
research_item: lem-flag-tower-cohomology-detection
dependency_level: 10
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)
- [lem-projective-pullback-detection](item-lem-projective-pullback-detection)
- [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [lem-author-ab0a6fc202cb-motivic-rank-restriction](item-lem-author-ab0a6fc202cb-motivic-rank-restriction)
- [lem-author-ab0a6fc202cb-clopen-line-quotient-classes](item-lem-author-ab0a6fc202cb-clopen-line-quotient-classes)
- [thm-author-ab0a6fc202cb-elmanto-morrow-projective-input](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC. Let $H^{*,*}$ be an additively oriented bigraded theory with the projective bundle contract on a scheme category $\mathcal C$. For a finite family of vector bundles $E_1,\ldots,E_m$ of constant ranks on an object $X$, the simultaneous flag tower $q:Y\to X$ induces injective pullback $q^*:H^{a,b}(X)\to H^{a,b}(Y)$ for every $(a,b)\in\mathbb Z^2$. Each $[q^*E_i]$ in the Grothendieck group of vector bundles is the sum of the classes of its global line-bundle filtration quotients, with the empty sum for rank zero.

More generally let $X$ be qcqs and the ranks merely locally constant. Suppose the finitely many common rank strata $X_\alpha$, their inclusions, the component flag towers $q_\alpha:Y_\alpha\to X_\alpha$, their finite disjoint union $Y$, its component inclusions, and $q:Y\to X$ all belong to $\mathcal C$. If the joint restriction $H^{a,b}(X)\to\prod_\alpha H^{a,b}(X_\alpha)$ is injective for every bidegree, then $q^*$ is injective in every bidegree. This additional joint-restriction hypothesis is explicit: it is not part of the abstract projective bundle contract.

For the actual Elmanto-Morrow motivic theory of the article, on qcqs schemes over its field $k$ (algebraically closed unless otherwise specified), joint restriction to these strata is an isomorphism. Hence the componentwise flag tower detects $H^{i,j}_{\mathrm{mot}}(-,R)$ for every $i\in\mathbb Z$, $j\geq0$, and $R=\mathbb Z$ or $\mathbb Z/n$, $n>0$. This uses the actual derived motivic complexes and requires no smoothness, noetherianity, finite-type or dimension assumption. If the source's explicit extension $\mathbb Z(j)_{\mathrm{mot}}=0$ for $j<0$ is adopted, the same statement holds for all integer weights, with zero groups in negative weights; the current nonnegative-weight definition alone makes no separate negative-weight assertion.

For varying ranks the line-quotient class equality holds separately on every $Y_\alpha$. Globally it holds after extending those quotient bundles by zero along the clopen inclusions; these extensions are vector bundles of rank one on that component and zero elsewhere, rather than global line bundles. A finite sum of global line-bundle classes is asserted only in the constant-rank situation. Here $K^0_{\mathrm{vb}}$ denotes the group on finite locally free sheaves modulo short-exact-sequence relations. None of these statements asserts injectivity of $q^*$ on that group.

Consequently any equality $u=v$ between classes of the same cohomological bidegree whose two sides pull back naturally can be checked on the appropriate detecting tower: $q^*u=q^*v$ implies $u=v$.

## Facts & Assumptions

**Given:** AC, the theory and category, and the bundles above; in the abstract varying-rank case also the explicit membership and joint-restriction assumptions. For the actual motivic application use the stated qcqs field, weight and coefficient hypotheses, retaining the compatible universe and site-size conventions of the supplied motivic and derived constructions in [F4]–[F6]. These standing size assumptions are distinct from AC.

**Goal:** Preserve constant-rank detection, prove conditional abstract varying-rank detection, supply its actual motivic application, and state precisely the class equalities used.

[F1] The constant-rank simultaneous tower is a finite composite of positive-constant-rank projective bundles, with locally split line-quotient filtrations; it is qcqs over a qcqs base. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[F2] In the abstract contract, pullback along such a finite composite is injective in every bidegree; pullbacks are contravariantly functorial group homomorphisms. [lem-projective-pullback-detection](item-lem-projective-pullback-detection), [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)

[F3] The common rank partition and componentwise tower are finite and qcqs, with identity constructions at rank zero. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)

[F4] The current rank-restriction supplier directly gives the finite-clopen restriction equivalence for the actual motivic complexes and the induced cohomological restriction isomorphisms, integrally and with finite coefficients, for the stated qcqs common rank partition and weights. Its proof uses covering-sieve descent on the prime-field functor. Apply that conclusion with its compatible size conventions; no additional Čech-descent assertion is needed here. The motivic-cohomology definition fixes the actual restricted prime-field functor and its pullbacks. [lem-author-ab0a6fc202cb-motivic-rank-restriction](item-lem-author-ab0a6fc202cb-motivic-rank-restriction), [def-motivic-cohomology](item-def-motivic-cohomology)

[F5] The actual motivic projective-bundle supplier gives the derived equivalence and its index-zero pullback retraction for qcqs schemes over a prime field, positive constant bundle rank and nonnegative weight. Its native quotient-convention conclusion includes the canonical transport from line subbundles by dualizing the bundle and identifying the tautological lines. Its source negative-weight convention is zero. [thm-author-ab0a6fc202cb-elmanto-morrow-projective-input](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input)

[F6] Integral cohomology and the fixed finite-coefficient construction are functors on the derived category; in particular, they preserve retraction identities. Finite products commute with cohomology and this finite-coefficient construction, modeled by the multiplication-by-$n$ cone for $n>0$. [def-motivic-cohomology](item-def-motivic-cohomology), [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)

[F7] For the finite bundle family on qcqs $X$, the clopen class supplier gives componentwise line-quotient sums and their global vector-bundle class formula by extension by zero along the finite clopen inclusions. Its qcqs hypothesis is retained in this application; the unrestricted constant-rank formula will instead be proved directly from [F1] and the defining group relations. [lem-author-ab0a6fc202cb-clopen-line-quotient-classes](item-lem-author-ab0a6fc202cb-clopen-line-quotient-classes)

[F8] AC is inherited through the flag construction and is retained throughout. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

1.1 In the constant-rank abstract case, apply [F1] to the finite bundle family and [F2] to every stage. Their finite composite is injective in every integer bidegree; if there are no stages the map is the identity and remains injective. [F1, F2, F8, given]

1.2 For the constant-rank case, take the global locally split filtration $0=F_0\subset\cdots\subset F_{r_i}=q^*E_i$ from [F1], and write $L_{i,s}=F_s/F_{s-1}$. By the inline definition of $K^0_{\mathrm{vb}}$ in the Statement, the short exact sequence $0\to F_{s-1}\to F_s\to L_{i,s}\to0$ gives $[F_s]=[F_{s-1}]+[L_{i,s}]$. The zero sequence gives $[0]=[0]+[0]$, hence $[0]=0$. Adding the finitely many filtration relations therefore gives $[q^*E_i]=\sum_{s=1}^{r_i}[L_{i,s}]$, including the empty sum for $r_i=0$. This uses no qcqs assumption and no application of [F7]. It asserts neither globally split extensions nor cohomological detection from a K-group equality. [F1, given, algebra]

1.3 For the actual motivic theory, take one positive-constant-rank quotient-projective stage $\pi:\mathbb P(G)\to S$ of a component tower. The base $S$ is qcqs by [F1] and [F3]. Composing its structure morphism to $\operatorname{Spec}k$ with that to the prime subfield gives the underlying prime-field scheme used in the actual functor of [F4], without changing $S$ or $\pi$. Apply the native quotient-convention conclusion of [F5]: its supplied duality argument identifies this projective bundle with the source line-subbundle projectivization of $G^\vee$, preserving projection and the quotient $\mathcal O(1)$. The positive constant rank is unchanged. In the resulting equivalence, the index-zero summand is $\mathbb Z(j)_{\mathrm{mot}}(S)$ and its map is precisely $\pi^*$. The inverse equivalence followed by projection onto that summand is a retraction. Applying the cohomology functor of [F6] preserves this identity, so $\pi^*$ is injective in every integral degree $i$ for $j\geq0$. [F1, F3, F4, F5, F6, construct]

2.1 In the abstract varying-rank case, let $\iota_\alpha:X_\alpha\hookrightarrow X$ and $j_\alpha:Y_\alpha\hookrightarrow Y$ be the inclusions. The construction satisfies $qj_\alpha=\iota_\alpha q_\alpha$. All the bundles on $X_\alpha$ have constant ranks, so step 1.1 gives injectivity of each $q_\alpha^*$. [F3, given, step 1.1, step 1.2]

3.1 If $q^*x=0$, then functoriality gives $q_\alpha^*\iota_\alpha^*x=j_\alpha^*q^*x=0$. Step 2.1 yields $\iota_\alpha^*x=0$ for every $\alpha$. The stated joint-restriction hypothesis then implies $x=0$. This proves conditional varying-rank detection without adding an unproved axiom to the abstract contract. [F2, given, step 2.1]

4.1 Applying the finite-coefficient cone to the equivalence from step 1.3 and using [F6] gives the same zero-summand retraction and injectivity for $R=\mathbb Z/n$. Compose these injections through every finite component tower; identity stages at rank zero preserve the conclusion. Joint restriction to the common rank strata is injective by [F4]. The functorial argument of step 3.1 therefore proves the asserted actual motivic injectivity for both coefficient choices. The optional negative-weight convention gives zero source and target groups and so extends it trivially when that convention is explicitly used. [F3, F4, F5, F6, step 3.1, step 1.3]

5.1 Finally [F7] gives all stated varying-rank class equalities, with supported extensions in the global formula, and explains why they cannot in general be called sums of global line-bundle classes. If $q^*u=q^*v$ in any of the detecting cases, functorial additive pullback gives $q^*(u-v)=0$, and the relevant injection from step 1.1, step 3.1 or step 4.1 implies $u-v=0$. Naturality identifies pulled-back expressions with those formed from the pulled-back bundles, which proves the final identity-detection assertion and completes the proof. [F2, F7, step 1.1, step 3.1, step 4.1] ∎
