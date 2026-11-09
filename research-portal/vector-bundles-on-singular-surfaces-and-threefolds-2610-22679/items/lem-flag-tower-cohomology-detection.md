---
id: lem-flag-tower-cohomology-detection
kind: lemma
title: Detection on a simultaneous flag tower
status: published
domain: mathematics
deps:
  - lem-flag-tower-line-quotients
  - lem-projective-pullback-detection
  - def-bigraded-oriented-theory
  - def-motivic-cohomology
  - lem-author-ab0a6fc202cb-finite-common-rank-strata
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - lem-author-ab0a6fc202cb-finite-derived-products
  - lem-author-ab0a6fc202cb-motivic-rank-restriction
  - lem-author-ab0a6fc202cb-clopen-line-quotient-classes
  - thm-author-ab0a6fc202cb-elmanto-morrow-projective-input
  - math:def-axiom-of-choice
dependency_roles:
  lem-flag-tower-line-quotients: mathematical-premise
  lem-projective-pullback-detection: mathematical-premise
  def-bigraded-oriented-theory: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-ab0a6fc202cb-finite-common-rank-strata: mathematical-premise
  lem-author-ab0a6fc202cb-clopen-derived-descent: mathematical-premise
  lem-author-ab0a6fc202cb-finite-derived-products: mathematical-premise
  lem-author-ab0a6fc202cb-motivic-rank-restriction: mathematical-premise
  lem-author-ab0a6fc202cb-clopen-line-quotient-classes: mathematical-premise
  thm-author-ab0a6fc202cb-elmanto-morrow-projective-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 10
---

## Statement
Assume AC. Let $H^{*,*}$ be an additively oriented bigraded theory with the projective bundle contract on a scheme category $\mathcal C$. For a finite family of vector bundles $E_1,\ldots,E_m$ of constant ranks on an object $X$, the simultaneous flag tower $q:Y\to X$ induces injective pullback $q^*:H^{a,b}(X)\to H^{a,b}(Y)$ for every $(a,b)\in\mathbb Z^2$. Each $[q^*E_i]$ in the Grothendieck group of vector bundles is the sum of the classes of its global line-bundle filtration quotients, with the empty sum for rank zero.

More generally let $X$ be qcqs and the ranks merely locally constant. Suppose the finitely many common rank strata $X_\alpha$, their inclusions, the component flag towers $q_\alpha:Y_\alpha\to X_\alpha$, their finite disjoint union $Y$, its component inclusions, and $q:Y\to X$ all belong to $\mathcal C$. If the joint restriction $H^{a,b}(X)\to\prod_\alpha H^{a,b}(X_\alpha)$ is injective for every bidegree, then $q^*$ is injective in every bidegree. This additional joint-restriction hypothesis is explicit: it is not part of the abstract projective bundle contract.

For the actual Elmanto-Morrow motivic theory of the article, on qcqs schemes over its field $k$ (algebraically closed unless otherwise specified), joint restriction to these strata is an isomorphism. Hence the componentwise flag tower detects $H^{i,j}_{\mathrm{mot}}(-,R)$ for every $i\in\mathbb Z$, $j\geq0$, and $R=\mathbb Z$ or $\mathbb Z/n$, $n>0$. This uses the actual derived motivic complexes and requires no smoothness, noetherianity, finite-type or dimension assumption. If the source's explicit extension $\mathbb Z(j)_{\mathrm{mot}}=0$ for $j<0$ is adopted, the same statement holds for all integer weights, with zero groups in negative weights; the current nonnegative-weight definition alone makes no separate negative-weight assertion.

For varying ranks the line-quotient class equality holds separately on every $Y_\alpha$. Globally it holds after extending those quotient bundles by zero along the clopen inclusions; these extensions are vector bundles of rank one on that component and zero elsewhere, rather than global line bundles. A finite sum of global line-bundle classes is asserted only in the constant-rank situation. Here $K^0_{\mathrm{vb}}$ denotes the group on finite locally free sheaves modulo short-exact-sequence relations. None of these statements asserts injectivity of $q^*$ on that group.

Consequently any equality $u=v$ between classes of the same cohomological bidegree whose two sides pull back naturally can be checked on the appropriate detecting tower: $q^*u=q^*v$ implies $u=v$.

## Facts & Assumptions

**Given:** AC, the theory and category, and the bundles above; in the abstract varying-rank case also the explicit membership and joint-restriction assumptions. For the actual motivic application use the stated qcqs field, weight and coefficient hypotheses.

**Goal:** Preserve constant-rank detection, prove conditional abstract varying-rank detection, supply its actual motivic application, and state precisely the class equalities used.

[F1] The constant-rank simultaneous tower is a finite composite of positive-constant-rank projective bundles, with locally split line-quotient filtrations; it is qcqs over a qcqs base. [[lem-flag-tower-line-quotients]]

[F2] In the abstract contract, pullback along such a finite composite is injective in every bidegree; pullbacks are contravariantly functorial group homomorphisms. [[lem-projective-pullback-detection]], [[def-bigraded-oriented-theory]]

[F3] The common rank partition and componentwise tower are finite and qcqs, with identity constructions at rank zero. [[lem-author-ab0a6fc202cb-finite-common-rank-strata]]

[F4] The actual motivic complexes have finite-clopen product decomposition and hence joint cohomological restriction is an isomorphism, integrally and with finite coefficients, in their specified weights. [[lem-author-ab0a6fc202cb-motivic-rank-restriction]], [[def-motivic-cohomology]]

[F5] The exact actual motivic projective-bundle equivalence and its rank/weight/convention hypotheses are imported separately. [[thm-author-ab0a6fc202cb-elmanto-morrow-projective-input]]

[F6] Finite products commute with cohomology and the finite-coefficient cone. [[lem-author-ab0a6fc202cb-finite-derived-products]]

[F7] Filtration relations give global line sums for constant ranks and componentwise line sums for varying ranks. Extension by zero along finite clopen inclusions gives the valid global vector-bundle class formula. [[lem-author-ab0a6fc202cb-clopen-line-quotient-classes]]

[F8] AC is inherited through the flag construction and is retained throughout. [[math:def-axiom-of-choice]]

## Proof

1.1 In the constant-rank abstract case, apply [F1] to the finite bundle family and [F2] to every stage. Their finite composite is injective in every integer bidegree; if there are no stages the map is the identity and remains injective. [F1, F2, F8, given]

2.1 Apply [F7] to the global locally split filtrations from [F1]. Telescoping the short-exact-sequence relations gives $[q^*E_i]=\sum_s[L_{i,s}]$, with no summands for rank zero. This uses only those vector-bundle relations and asserts neither a globally split extension nor cohomological detection from a K-group equality. [F1, F7, step 1.1]

3.1 In the abstract varying-rank case, let $\iota_\alpha:X_\alpha\hookrightarrow X$ and $j_\alpha:Y_\alpha\hookrightarrow Y$ be the inclusions. The construction satisfies $qj_\alpha=\iota_\alpha q_\alpha$. All the bundles on $X_\alpha$ have constant ranks, so step 1.1 gives injectivity of each $q_\alpha^*$. [F3, given, step 1.1, step 2.1]

4.1 If $q^*x=0$, then functoriality gives $q_\alpha^*\iota_\alpha^*x=j_\alpha^*q^*x=0$. Step 3.1 yields $\iota_\alpha^*x=0$ for every $\alpha$. The stated joint-restriction hypothesis then implies $x=0$. This proves conditional varying-rank detection without adding an unproved axiom to the abstract contract. [F2, given, step 3.1]

5.1 For the actual motivic theory, take one positive-constant-rank quotient-projective stage $\pi:\mathbb P(G)\to S$ of a component tower. The source in [F5] uses line subbundles. Dualizing a locally split invertible quotient of the finite locally free $G$ gives a line subbundle of $G^\vee$, and dualizing again recovers the quotient. Hence the represented projective bundles are canonically identified over $S$, with the same projection and the source's dual tautological line equal to the quotient $\mathcal O(1)$. Apply [F5] to $G^\vee$, of the same positive constant rank. Its index-zero summand is $\mathbb Z(j)_{\mathrm{mot}}(S)$ and its map is precisely $\pi^*$. The inverse of the derived equivalence followed by projection onto that summand is a retraction. Thus $\pi^*$ is injective on every integral cohomology degree $i$, for $j\geq0$. [F1, F5, F6, construct, step 4.1]

6.1 Applying the finite-coefficient cone to that equivalence and using [F6] gives the same zero-summand retraction and injectivity for $R=\mathbb Z/n$. Compose these injections through every finite component tower; identity stages at rank zero preserve the conclusion. Joint restriction to the common rank strata is injective by [F4]. The functorial argument of step 4.1 therefore proves the asserted actual motivic injectivity for both coefficient choices. The optional negative-weight convention gives zero source and target groups and so extends it trivially when that convention is explicitly used. [F3, F4, F5, F6, step 4.1, step 5.1]

7.1 Finally [F7] gives all stated varying-rank class equalities, with supported extensions in the global formula, and explains why they cannot in general be called sums of global line-bundle classes. If $q^*u=q^*v$ in any of the detecting cases, functorial additive pullback gives $q^*(u-v)=0$, and the relevant injection from step 1.1, step 4.1 or step 6.1 implies $u-v=0$. Naturality identifies pulled-back expressions with those formed from the pulled-back bundles, which proves the final identity-detection assertion and completes the proof. [F2, F7, step 1.1, step 4.1, step 6.1] ∎
