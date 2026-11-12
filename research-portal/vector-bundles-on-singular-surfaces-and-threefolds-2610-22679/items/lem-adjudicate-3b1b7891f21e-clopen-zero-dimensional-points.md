---
id: lem-adjudicate-3b1b7891f21e-clopen-zero-dimensional-points
kind: lemma
title: Clopen affine pieces and the zero-dimensional residue-point basis
status: draft
domain: mathematics
deps: &a1
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:lem-spectrum-localization-open-immersion
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-integral-scheme
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:thm-global-sections-affine-scheme
  - math:def-locally-ringed-space
  - math:cor-noetherian-local-domain-dimension-zero-iff-field
  - math:cor-field-finite-type-over-a-field-is-a-finite-extension
  - math:cor-algebraic-extensions-of-perfect-fields-are-separable
  - math:def-embedding-dimension-and-regular-local-ring
  - math:thm-regular-equals-smooth-over-perfect-field
  - lem-affine-perfect-k-zero-bridge
  - math:ex-spectrum-field-one-point
  - math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces
  - def-motivic-filtration
  - math:def-stalk-of-presheaf
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:cor-smooth-variety-classical-scheme-conventions-agree
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - lem-author-80f982ded420-normal-point-strata
  - math:def-integral-scheme
  - lem-affine-perfect-k-zero-bridge
  - def-motivic-filtration
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
argument_deps: *a1
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:lem-clopen-subset-gives-idempotent-decomposition: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:thm-global-sections-affine-scheme: mathematical-premise
  math:def-locally-ringed-space: mathematical-premise
  math:cor-noetherian-local-domain-dimension-zero-iff-field: mathematical-premise
  math:cor-field-finite-type-over-a-field-is-a-finite-extension: mathematical-premise
  math:cor-algebraic-extensions-of-perfect-fields-are-separable: mathematical-premise
  math:def-embedding-dimension-and-regular-local-ring: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  math:ex-spectrum-field-one-point: mathematical-premise
  math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:cor-smooth-variety-classical-scheme-conventions-agree: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 22
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe size bounds of the supplied perfect K-theory and motivic constructions. Let $X$ be a normal affine finite-type scheme of finite dimension over a perfect field $k$, and let $T\subseteq X$ be a clopen subscheme with its restricted structure sheaf. Then $T$ is again normal, affine, finite type over $k$, and quasi-compact and quasi-separated.

If $T$ is nonempty of dimension zero, there is a finite disjoint clopen decomposition $T=\coprod_{a=1}^r\operatorname{Spec}L_a$, where each $L_a/k$ is a finite separable field extension. Every point of $T$ is closed and smooth over $k$. Restriction and exact clopen zero extension give
$$K_0(T)\cong\bigoplus_{a=1}^r\mathbb Z,$$
with the actual perfect residue-sheaf class at the point of $\operatorname{Spec}L_a$ equal to the $a$th positive basis vector. In particular these residue classes freely generate $K_0(T)=F^0_{\mathrm{mot}}K_0(T)$. For empty $T$, the K-group and the free point group are both zero. No positive-dimensional Levine–Weibel group is used to make these zero-dimensional assertions.

## Facts & Assumptions
**Given:** The field, scheme, clopen subscheme, Choice and compatible size assumptions in the Statement.

**Goal:** Check the clopen geometric hypotheses, then prove the field decomposition and its actual K-class normalization.

[A1] [[math:def-axiom-of-choice]] is assumed for the coordinate-ring, idempotent, affine compactness, component, dimension-zero field and smoothness suppliers below and for the perfect K-theory and motivic constructions. Fix their compatible Grothendieck universes with the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence and required size bounds are separate assumptions. All component fields and complexes stay within those bounds. Only finite grouping and explicitly described coordinate maps are added locally.

[F1] [[lem-author-80f982ded420-normal-point-strata]] supplies the finite clopen integral components of $X$ and the positive residue-class compatibility for exact clopen zero extension in the current perfect K-model. Here normal means that every local ring is an integrally closed domain, clopen means open and closed, and dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. A pure-dimensional scheme has all its irreducible components of the specified dimension. An integral scheme is nonempty, reduced and irreducible, equivalently each nonempty affine open is the spectrum of a domain, as in [[math:def-integral-scheme]].

[F2] Write $X=\operatorname{Spec}A$ with its structure sheaf. The structure morphism to $\operatorname{Spec}k$ is finite type in the sense of [[math:def-locally-finite-type-and-finite-type-morphism]]: locally of finite type and quasi-compact. Here locally of finite type means that every source point has an affine open neighborhood $\operatorname{Spec}B$ mapping into an affine target neighborhood $\operatorname{Spec}R$ for which $B$ is a finitely generated $R$-algebra. A finitely generated algebra is one whose elements are polynomial expressions in a fixed finite list of generators with coefficients in the base ring. [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]] makes $A$ a finitely generated $k$-algebra. [[math:lem-clopen-subset-gives-idempotent-decomposition]] expresses any clopen subset as $D(1-e)$ for an idempotent $e\in A$, and [[math:lem-spectrum-localization-open-immersion]] identifies its open subscheme with $\operatorname{Spec}A_{1-e}$. This localization is generated over $k$ by generators of $A$ and $(1-e)^{-1}$. Its spectrum is therefore locally of finite type over $k$ by the affine-chart definition just stated. The target $\operatorname{Spec}k$ has one point by [F5], so quasi-compactness of the source also gives quasi-compactness of this structure morphism; together these imply finite type. [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]] give the two qcqs conditions: quasi-compactness, and quasi-compact intersections of affine opens. [[math:lem-field-is-noetherian]] and [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] make these coordinate algebras Noetherian.

[F3] For a prime $\mathfrak p\subset B$, put $V(\mathfrak p)=\{\mathfrak q\in\operatorname{Spec}B:\mathfrak p\subseteq\mathfrak q\}$. [[math:thm-irreducible-closed-subsets-and-prime-ideals]] identifies these as the nonempty irreducible closed subsets, with their unique prime generic points. [[math:thm-global-sections-affine-scheme]] identifies $B$ with the global sections on $\operatorname{Spec}B$. A scheme is locally ringed, so each stalk is local by [[math:def-locally-ringed-space]]. By [[math:def-stalk-of-presheaf]], a stalk is the colimit of sections over the open neighborhoods of its point. On a one-point space the stalk equals global sections, since the whole space is its only nonempty open neighborhood. [[math:cor-noetherian-local-domain-dimension-zero-iff-field]] applies to a Noetherian local domain of ring dimension zero, meaning that there is no strict inclusion between prime ideals, and makes it a field under [A1].

[F4] [[math:cor-field-finite-type-over-a-field-is-a-finite-extension]] makes a field finitely generated as a $k$-algebra finite over $k$. Perfectness means that every algebraic extension is separable; the implication from the irreducible-polynomial definition is [[math:cor-algebraic-extensions-of-perfect-fields-are-separable]]. For a Noetherian local ring with maximal ideal $\mathfrak m$ and residue field $L$, regular local means $\dim_L(\mathfrak m/\mathfrak m^2)=\dim R$, as in [[math:def-embedding-dimension-and-regular-local-ring]]. [[math:thm-regular-equals-smooth-over-perfect-field]] makes a regular finite-type scheme over the perfect field smooth in its local-standard-smooth convention, under [A1]. Clause 1 of [[math:cor-smooth-variety-classical-scheme-conventions-agree]] identifies this with scheme smoothness for every finite-type field-scheme. The resulting smoothness is that of [[math:def-smooth-morphism-schemes]]: local finite presentation, flatness and geometric regularity of the fibers. The field components below are clopen smooth neighborhoods of their points.

[F5] [[math:ex-spectrum-field-one-point]] identifies the unique point, local ring, residue field and global sections of $\operatorname{Spec}L$ for every field $L$. [[lem-affine-perfect-k-zero-bridge]] identifies its spectral $K_0$ with the vector-bundle Grothendieck group and preserves degree-zero bundle classes. On this one-point ringed space, finite locally free sheaves and their short exact sequences are exactly finite-dimensional $L$-vector spaces and their short exact sequences. [[math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces]] identifies their group with $\mathbb Z$ by dimension, taking $[L]$ to $1$.

[F6] [[lem-author-80f982ded420-clopen-filtered-products]] supplies finite clopen restriction decompositions in actual $K_0$ and its image filtration, including the empty partition, with exact zero extension giving the coordinate inclusions. [[def-motivic-filtration]] identifies stage zero with $K$ and defines $F^0_{\mathrm{mot}}K_0$ as the image of that identification, hence as all of $K_0$.

## Proof
1.1 Apply [F2] under [A1] to $T$ and to any integral component of $X$: every such clopen piece is the spectrum of a finitely generated localization of $A$. The affine-chart criterion in [F2] makes it locally of finite type over $k$, and affine quasi-compactness makes its structure map to the one-point $\operatorname{Spec}k$ quasi-compact, hence finite type. It is also quasi-separated by [F2], and its finitely generated coordinate algebra is Noetherian by [F2]. For an open piece $W$, the restricted structure sheaf has $\mathcal O_W(V)=\mathcal O_X(V)$ for every open $V\subseteq W$. The neighborhoods contained in $W$ compute the same stalks as all neighborhoods in $X$: intersect any neighborhood with $W$, and use the germ description in [F3]. Thus its local rings are those of $X$, so it is normal. A nonempty irreducible component of $X$ is connected; its intersection with $T$ is clopen in it and therefore is either empty or the whole component. Thus $T$ is a union of finitely many of the integral components in [F1]. If $T$ is nonempty of dimension zero, each selected component $C=\operatorname{Spec}B$ has dimension zero, because it is closed in $T$ and every chain of its irreducible closed subsets is a chain in $T$. The integral criterion in [F1] makes $B$ a nonzero domain. If it had a nonzero prime $\mathfrak p$, [F3] would give a strict chain $V(\mathfrak p)\subsetneq\operatorname{Spec}B$ of nonempty irreducible closed subsets: the zero prime belongs to the latter but not the former. This contradicts dimension zero. Therefore $\operatorname{Spec}B$ is the one-point space $\{(0)\}$. By [F3], $B$ is its global section ring and its local stalk ring, so it is local; it is Noetherian by [F2], a domain by [F1], and has ring dimension zero because its sole prime is $(0)$. The dimension-zero local-domain corollary in [F3] consequently makes $B$ a field. Its finite algebra generation and [F4] make it a finite separable extension $L_a/k$. This proves the finite field decomposition. Each field has maximal ideal zero, only the zero prime, and cotangent space zero; it is Noetherian by [F2] and regular local by [F4]. Its spectrum is thus a regular finite-type $k$-scheme. The regularity theorem in [F4] makes this scheme smooth in the local-standard-smooth convention. Its finite-type hypothesis was checked above, so the explicit convention-comparison corollary in [F4] applies under [A1] and makes its structural morphism smooth in the scheme sense used by the point-class constructions. Since this component is a clopen neighborhood of its unique closed point, that point is closed in $T$ and smooth over $k$ in $T$. [A1, F1, F2, F3, F4, given]

2.1 For each resulting field $L_a$, [F5] gives $K_0(\operatorname{Spec}L_a)\cong\mathbb Z$ with generator the degree-zero sheaf $L_a$, which is its residue sheaf. The finite clopen partition of the qcqs $T$ therefore gives $K_0(T)\cong\bigoplus_a\mathbb Z$ by [F6]. Exact zero extension is the coordinate inclusion, and the residue-class compatibility in [F1] identifies it with the actual residue sheaf at the corresponding point of $T$. Thus these classes are exactly the positive basis vectors, with no sign or residue-field degree factor, and freely generate the whole group. Stage zero in [F6] makes that whole group the weight-zero image. If $T$ is empty, [F6] applied to its empty partition gives $K_0(T)=0$, and there are no point generators. These statements use only free point groups in dimension zero, not a positive-dimensional cycle quotient. [A1, F1, F5, F6, step 1.1] ∎
