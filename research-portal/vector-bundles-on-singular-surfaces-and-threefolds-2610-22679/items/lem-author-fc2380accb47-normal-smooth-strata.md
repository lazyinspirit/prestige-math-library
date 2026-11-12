---
id: lem-author-fc2380accb47-normal-smooth-strata
kind: lemma
title: Normal affine threefolds have controlled nonsmooth strata
status: published
domain: mathematics
deps:
  - thm-author-fc2380accb47-normal-geometric-input
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-irreducible-component-scheme
  - math:def-smooth-morphism-schemes
  - math:def-affine-open-subscheme
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-dimension-noetherian-topological-space
  - math:def-finite-type-and-module-finite-algebras
  - math:def-noetherian-ring-and-module
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:lem-zariski-closed-set-axioms
  - math:lem-quotient-spectrum-map-is-a-closed-immersion
  - math:def-reduced-affine-scheme
  - math:lem-finite-type-local-on-source-and-target
  - math:lem-irreducibility-criteria-and-open-subspaces
dependency_roles:
  thm-author-fc2380accb47-normal-geometric-input: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:lem-zariski-closed-set-axioms: mathematical-premise
  math:lem-quotient-spectrum-map-is-a-closed-immersion: mathematical-premise
  math:def-reduced-affine-scheme: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:lem-irreducibility-criteria-and-open-subspaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Let $k$ be algebraically closed and let $X$ be a normal affine finite-type $k$-scheme of dimension at most three. It has finitely many open-and-closed integral normal components. Let $X_3$ be the union of its three-dimensional components, $W=(X_3)_{\mathrm{sm}/k}$, and $D=X\setminus W$ with reduced structure. Then $W$ is smooth of pure dimension three and $D$ is closed with $\dim D\leq2$. On $X_3$ its nonsmooth locus has dimension at most one. If $X$ is pure three-dimensional, $D$ is exactly its singular locus and has dimension at most one. This formulation also handles a definition of threefold meaning merely dimension three.

## Facts & Assumptions
**Given:** The field and scheme above; the empty stratum is allowed.

**Goal:** Isolate a smooth three-dimensional locus and a closed avoidance locus of dimension less than the rank three.

[F1] [[thm-author-fc2380accb47-normal-geometric-input]] supplies finite clopen normal components, normality implying regularity in codimension one, and equality of smooth and regular loci for reduced finite-type schemes over a perfect field. Its Noetherian finiteness assertions apply also to locally closed subschemes. Regular means that the local ring is regular; the singular locus is its complement, and $(R_1)$ excludes singular points whose local rings have dimension at most one.

[F2] [[thm-author-fc2380accb47-finite-type-geometric-input]] supplies finite-type dimension and codimension formulas, applied within a specified integral component. In particular a nonempty open of an integral finite-type field scheme has the same dimension as that scheme, and an irreducible closed subset $Z$ of an integral component $C$ satisfies $\dim Z+\operatorname{codim}_C Z=\dim C$.

[F3] Formulation conventions: $k$ is algebraically closed in the root sense; affineness identifies $X$ with $\operatorname{Spec}A$ for its coordinate ring, and its $k$-scheme structure is a morphism to $\operatorname{Spec}k$. Finite type means locally of finite type and quasi-compact. Components are maximal irreducible closed subsets with reduced induced structure, and integral means nonempty, irreducible and reduced. Smoothness is smoothness of the structure morphism at each point; open subschemes carry restricted structure sheaves. Normality here means that all local rings are integrally closed domains; no normalization or blowup construction is used. Scheme dimension is chain dimension of the underlying space, with $\dim\varnothing=-\infty$; pure dimension three means that every irreducible component has dimension three. These notions use [[math:def-algebraically-closed-field]]; [[math:def-affine-scheme]]; [[math:def-scheme-over-base]]; [[math:def-locally-finite-type-and-finite-type-morphism]]; [[math:def-integral-scheme]]; [[math:def-irreducible-component-scheme]]; [[math:def-smooth-morphism-schemes]]; [[math:def-affine-open-subscheme]]; [[math:def-integral-closure-and-integrally-closed-domain]]; [[math:def-dimension-noetherian-topological-space]].

[F4] Finite-type algebras, Noetherian rings and Noetherian schemes have their usual exact interfaces: [[math:def-finite-type-and-module-finite-algebras]]; [[math:def-noetherian-ring-and-module]]; [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]; [[math:def-locally-noetherian-and-noetherian-scheme]]. The corollary applies to each finite-type affine chart over the field; no assertion about the finite generation of the global coordinate algebra is needed.

[F5] [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]] states, in particular, that every algebraically closed field is perfect, supplying the field hypothesis in [F1].

[F6] [[math:lem-zariski-closed-set-axioms]]; [[math:lem-quotient-spectrum-map-is-a-closed-immersion]]; [[math:def-reduced-affine-scheme]] supply respectively the description of affine closed subsets as $V(I)$, the closed immersion $\operatorname{Spec}(A/J)\hookrightarrow\operatorname{Spec}A$ for a quotient, and the meaning of reducedness for this affine quotient. Once the complement is proved closed, its reduced structure will be constructed explicitly using these interfaces.

[F7] [[math:lem-finite-type-local-on-source-and-target]]; [[math:lem-irreducibility-criteria-and-open-subspaces]] supply restriction of locally finite type to source opens and irreducibility of a nonempty open in an irreducible space, respectively.

## Proof
1.1 Every ideal of the field $k$ is either $(0)$ or $(1)$, hence finitely generated, so $k$ is Noetherian by [F4]. The locally finite-type hypothesis in [F3] covers $X$ by affine opens $\operatorname{Spec}B$ with $B$ of finite type over $k$. Each $B$ is Noetherian by [F4]. Thus $X$ is locally Noetherian; it is quasi-compact because its structure morphism is of finite type and the base is the one-point affine scheme $\operatorname{Spec}k$. Hence $X$ is Noetherian by [F4]. Apply [F1]: its finitely many irreducible components are disjoint open-and-closed integral normal schemes. Their union $X_3$ is clopen; all remaining components have dimension at most two. Each component, being clopen, remains of finite type over $k$: [F7] preserves the locally finite-type condition on this source open, and a closed subset of the quasi-compact $X$ is quasi-compact. [F1, F3, F4, F7, given]

2.1 By [F5], $k$ is perfect. Each three-dimensional component $C$ is reduced and of finite type, so [F1] identifies its smooth and regular loci and makes that locus dense open. Its closed nonsmooth locus has no points of codimension zero or one by $(R_1)$. For any irreducible closed subset $Z$ of that locus, [F1] identifies its codimension in $C$ with the dimension of the local ring at its generic point; hence [F2] gives $\dim Z\leq3-2=1$. Thus the nonsmooth locus on $X_3$ is closed of dimension at most one. Its union with the remaining clopen components is the closed subset $|D|=|X|\setminus|W|$, of dimension at most two. To construct its reduced scheme structure, fix an affine presentation $X=\operatorname{Spec}A$ and set $J=\bigcap_{\mathfrak p\in|D|}\mathfrak p$, with empty intersection $A$. By [F6], $|D|=V(I)$ for some ideal $I$. Since $I\subseteq J$ and every prime in $|D|$ contains $J$, one has $V(J)=|D|$. The ideal $J$ is radical: $a^n\in J$ implies $a\in\mathfrak p$ for every prime in that intersection, hence $a\in J$. Therefore [F6] constructs the reduced closed subscheme $D=\operatorname{Spec}(A/J)$ with precisely this support; its dimension is the support dimension. The construction uses only the closed subset and the coordinate ring, so is transported by any change of affine presentation. The complementary open subscheme $W$ is smooth; on every three-dimensional component its dense open part is irreducible by [F7] and has dimension three by [F2], proving pure dimension three. If there are no such components, $W$ is empty and the smoothness and pure-dimensional assertions are vacuous. If $X$ is pure three-dimensional, there are no lower-dimensional components, so $D$ is exactly the singular locus with reduced structure and has dimension at most one. [F1, F2, F3, F5, F6, F7, step 1.1] ∎
