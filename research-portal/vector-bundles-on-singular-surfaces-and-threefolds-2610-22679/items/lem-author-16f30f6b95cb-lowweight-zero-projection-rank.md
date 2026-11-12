---
id: lem-author-16f30f6b95cb-lowweight-zero-projection-rank
kind: lemma
title: Weight zero is the locally constant rank function
status: published
domain: mathematics
deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - lem-affine-perfect-k-zero-bridge
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - lem-filtered-stage-exact-sequence
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - def-nonconnective-k-spectrum-interface
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
  - math:lem-field-valued-points-of-schemes
  - math:ex-spectrum-field-one-point
  - math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-noetherian-topological-space
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:ex-polynomial-ring-flat-smooth
dependency_roles:
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:lem-field-valued-points-of-schemes: mathematical-premise
  math:ex-spectrum-field-one-point: mathematical-premise
  math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-noetherian-topological-space: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:ex-polynomial-ring-flat-smooth: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 18
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-nonconnective-k-spectrum-interface
  - def-motivic-filtration
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - def-derived-sections-on-sites
  - math:lem-field-valued-points-of-schemes
argument_deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - lem-affine-perfect-k-zero-bridge
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - lem-filtered-stage-exact-sequence
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - def-nonconnective-k-spectrum-interface
  - math:def-smooth-morphism-schemes
  - math:def-grothendieck-universe-closure-convention
  - math:lem-field-valued-points-of-schemes
  - math:ex-spectrum-field-one-point
  - math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-noetherian-topological-space
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:ex-polynomial-ring-flat-smooth
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Let $k$ be any field, and $X$ a smooth finite-type $k$-scheme. Under the canonical weight-zero comparison, the actual EM map $\pi_0q_0:K_0(X)\to H^0(X,\mathbb Z(0)_{\mathrm{mot}})$ is the locally constant rank function, component by component. Consequently $\pi_0\operatorname{Fil}^1K(X)=\ker(\operatorname{rank}:K_0(X)\to H^0(X,\mathbb Z))$, and $\pi_1\operatorname{Fil}^1K(X)\to K_1(X)$ is an isomorphism. These are statements about stage groups, not an assumed equality of a stage with its image.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and fix compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$, all scheme and field data in $U$, and compatible bounds for the actual EM tower, perfect-$K$ model and derived evaluation. Existence of these universes is a separate size assumption; use the closure convention of [[math:def-grothendieck-universe-closure-convention]]. For cdh sections fix the same universe-bounded general qcqs prime-field scheme site used by the canonical comparison in [F1], small in the larger universe; evaluate at its representative of the scheme in question. Apply the general derived-sections interface to that site itself, without replacing it by a finite-type or small Nisnevich site. These bounds discharge the supplied constructions below. Choice is retained for the perfect-$K$ and affine comparisons, the Noetherian-spectrum and open-compactness inputs of [F0], the derived-sections input of [F1], and the spectral indexing of [F3]. The unital integer calculation and exact-sequence argument introduce no further choice principle. Choice also discharges the identity-smoothness input of [F2], used for the field comparison in step 1.1.

**Given:** The stated Choice and size assumptions, smooth finite-type $X/k$, and the actual unital multiplicative EM tower, restricted from the prime field to $k$-schemes.

**Goal:** Normalize $q_0$ and identify its first-stage homotopy groups.

[F0] Smoothness means smoothness of $X\to\operatorname{Spec}k$ in [[math:def-smooth-morphism-schemes]]. By [[math:def-locally-finite-type-and-finite-type-morphism]], finite type gives local finite type and a quasi-compact structure morphism. By [[math:def-quasi-compact-and-quasi-separated-morphism]] and the one-point description of [[math:ex-spectrum-field-one-point]], $X$ is quasi-compact and has a finite affine open cover by spectra of finitely generated $k$-algebras. By [[math:lem-field-is-noetherian]], [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] and, under [A1], [[math:thm-noetherian-ring-has-noetherian-spectrum]], those affine opens are Noetherian topological spaces. Noetherian means that every increasing sequence of opens stabilizes, as in [[math:def-noetherian-topological-space]]. Such a sequence on $X$ stabilizes on each member of the finite cover, hence on $X$ by taking the maximum of the finitely many stabilization indices. Thus $X$ is Noetherian, also if empty. Under [A1], [[math:lem-noetherian-open-subsets-are-quasi-compact]] makes every open subset of $X$ quasi-compact, including intersections of affine opens. Therefore $X$ is qcqs in [[math:def-quasi-compact-and-quasi-separated-scheme]], without a separatedness hypothesis. The specified [[def-nonconnective-k-spectrum-interface]] defines $K_i(X)=\pi_iK(X)$, its unit $[\mathcal O_X]$ and derived pullbacks; [[def-motivic-filtration]] supplies the functorial prime-field-restricted tower and $\operatorname{Fil}^0K(X)\simeq K(X)$.

[F1] [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the actual natural unital comparison $\operatorname{gr}^0K\simeq R\Gamma_{\mathrm{cdh}}(-,\mathbb Z)$, and identifies its $H^0$ on smooth finite-type schemes over any field with locally constant integer functions, compatibly with field-point evaluation. Here $\mathbb Z$ is the ordinary constant integer sheaf placed in degree zero. On the very same bounded cdh site of [A1], [[def-derived-sections-on-sites]] supplies derived evaluation of an ordinary abelian sheaf and $H^n_{\mathrm{cdh}}(X,\mathbb Z)=0$ for $n<0$, retaining its Choice and size hypotheses. Write $H^0(X,\mathbb Z)$ for this degree-zero group, identified with those locally constant functions. No concentration of the entire derived-sections complex in degree zero is assumed.

[F2] [[lem-affine-perfect-k-zero-bridge]] identifies $K_0(\operatorname{Spec}L)$ with the vector-bundle Grothendieck group for every field $L$, taking a bundle in degree zero to its bundle class. By [[math:ex-spectrum-field-one-point]], this is a one-point scheme with structure ring $L$, so its finite locally free sheaves and short exact sequences are precisely finite-dimensional $L$-vector spaces and their short exact sequences. [[math:ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces]] identifies this group with $\mathbb Z$ by dimension, taking $[L]$ to $1$. Under [A1], the $n=0$ case of [[math:ex-polynomial-ring-flat-smooth]], applied to the commutative ring $A=L$, makes the identity $\operatorname{Spec}L\to\operatorname{Spec}L$ smooth. This identity is finite type: its single affine chart has coordinate algebra $L$ generated over itself by the empty list, and its one-point source makes the structure morphism quasi-compact, using the definitions in [F0]. Thus the comparison of [F1] applies to $\operatorname{Spec}L$ over $L$ itself. No finite-type assumption on $L$ over the prime field is needed.

[F3] [[lem-filtered-stage-exact-sequence]] supplies the fiber sequence and long exact homotopy sequence of a decreasing filtration. At $j=0$, [F0] identifies this with $\operatorname{Fil}^1K(X)\to K(X)\xrightarrow{q_0}\operatorname{gr}^0K(X)$. [[lem-eilenberg-maclane-shift-index]] supplies the graded homotopy/cohomology dictionary; at weight zero, the comparison in [F1] gives $\pi_i\operatorname{gr}^0K(X)=H^{-i}_{\mathrm{cdh}}(X,\mathbb Z)$ for every integer $i$.

[F4] [[math:lem-field-valued-points-of-schemes]] supplies the residue field $\kappa(x)$ and canonical morphism $p_x:\operatorname{Spec}\kappa(x)\to X$ for each $x\in X$, compatibly with structure morphisms. Thus $\kappa(x)$ is an extension of $k$; its one-point spectrum is qcqs by the definitions in [F0]. For $\alpha\in K_0(X)$, define its rank at $x$ to be the integer corresponding under [F2] to the derived pullback $p_x^*\alpha\in K_0(\kappa(x))$ of [F0]. On a bounded local vector-bundle representative this is the alternating sum of its fibre dimensions, by the affine comparison formula in [F2]. This rank is independent of representatives because pullback and the field comparison are maps on $K_0$.

## Proof
1.1 The domain check in [F0] places $X$ in the qcqs source of the supplied constructions. For any field extension $L$ of the prime field within the fixed bounds, [F2] gives $K_0(L)=\mathbb Z$ generated by $[L]$, while [F1] gives the target $\mathbb Z$. The comparison is unital, so the homomorphism $\pi_0q_0:\mathbb Z\to\mathbb Z$ sends $1$ to $1$ and is identity. For $x\in X$, use $p_x$ of [F4]. Both schemes are in the common prime-field qcqs category, so naturality and field-point evaluation in [F0]–[F1] identify the value of $q_0(\alpha)$ at $x$ with the integer corresponding to $p_x^*\alpha$, its rank at $x$. Sections of the target in degree zero are locally constant integer functions and are equal if their values at every point agree. Thus $q_0$ equals the full rank function, including on disconnected $X$, and this rank is locally constant. For empty $X$ the conclusion holds because the function group on the empty space is zero. [A1, F0, F1, F2, F4]

2.1 By [F1] and the indexing in [F3], $\pi_i\operatorname{gr}^0K(X)=H^{-i}_{\mathrm{cdh}}(X,\mathbb Z)=0$ for $i=1,2$. Apply [F3] at $j=0$ and $i=1$: these two vanishings make $\pi_1\operatorname{Fil}^1K(X)\to K_1(X)$ both injective and surjective. At $i=0$, vanishing of $\pi_1\operatorname{gr}^0K(X)$ gives an injection $\pi_0\operatorname{Fil}^1K(X)\hookrightarrow K_0(X)$ whose image is $\ker(\pi_0q_0)$. Step 1.1 identifies that map with rank and its degree-zero target with $H^0(X,\mathbb Z)$, giving exactly the asserted stage-group identifications. [A1, F0, F1, F3, step 1.1] ∎
