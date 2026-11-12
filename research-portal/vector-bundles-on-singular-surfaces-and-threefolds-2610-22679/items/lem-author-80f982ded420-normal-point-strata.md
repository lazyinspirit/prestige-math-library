---
id: lem-author-80f982ded420-normal-point-strata
kind: lemma
title: Normal dimension strata and the actual residue class model
status: published
domain: mathematics
deps:
  - thm-author-fc2380accb47-normal-geometric-input
  - lem-koszul-point-support-class
  - lem-affine-perfect-k-zero-bridge
  - def-smooth-point-cycle-map
  - def-nonconnective-k-spectrum-interface
  - prop-perfect-k-localization-input
  - math:def-axiom-of-choice
  - def-scheme-perfect-complexes
  - def-stable-spectra-interface
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-scheme
  - math:def-integral-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:lem-spectrum-localization-open-immersion
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - math:def-sheaf-on-topological-space
  - math:thm-exactness-of-sheaves-stalkwise
  - thm-author-80f982ded420-quotient-cycle-map-input
  - math:def-finite-type-and-module-finite-algebras
dependency_roles:
  thm-author-fc2380accb47-normal-geometric-input: mathematical-premise
  lem-koszul-point-support-class: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  def-smooth-point-cycle-map: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-irreducible-component-scheme: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-weil-divisor-normal-noetherian-scheme: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-clopen-subset-gives-idempotent-decomposition: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-author-80f982ded420-quotient-cycle-map-input: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-scheme
  - math:def-integral-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-weil-divisor-normal-noetherian-scheme
  - def-nonconnective-k-spectrum-interface
  - def-scheme-perfect-complexes
  - def-stable-spectra-interface
  - def-smooth-point-cycle-map
  - thm-author-80f982ded420-quotient-cycle-map-input
argument_deps:
  - thm-author-fc2380accb47-normal-geometric-input
  - lem-koszul-point-support-class
  - lem-affine-perfect-k-zero-bridge
  - def-smooth-point-cycle-map
  - def-nonconnective-k-spectrum-interface
  - prop-perfect-k-localization-input
  - math:def-axiom-of-choice
  - def-scheme-perfect-complexes
  - def-stable-spectra-interface
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-irreducible-component-scheme
  - math:def-integral-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:lem-spectrum-localization-open-immersion
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - math:def-sheaf-on-topological-space
  - math:thm-exactness-of-sheaves-stalkwise
  - thm-author-80f982ded420-quotient-cycle-map-input
  - math:def-finite-type-and-module-finite-algebras
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
---

## Statement
Assume AC and the completed size conventions. Let $X$ be a normal affine finite-type scheme over a perfect field $k$, of dimension $d$. Its finitely many integral components are clopen. For $0\leq e\leq d$, let $X_e$ be the union of its dimension-$e$ components. These form a finite clopen partition, each nonempty $X_e$ is pure-dimensional, and
$$K(X)\simeq\prod_eK(X_e),\qquad K_0(X)\cong\bigoplus_eK_0(X_e).$$
Restriction is the displayed equivalence. Extension by zero along $i_e:X_e\hookrightarrow X$ is exact on perfect complexes and induces the corresponding zero-in-other-factors inclusion. For a smooth closed point $x\in X_e$, the current point class $\varphi_x(1)$ is this zero extension of the perfect residue-sheaf class. Under the completed affine $K_0$ comparison, it is the classical Euler class $[\kappa(x)]$, with no opposite sign or degree factor. For $e\geq1$, this is exactly the value at $[x]$ of the source cycle map on $X_e$. For nonpure $X$ with $d\geq1$, the source cycle map on $X$ uses only points on $X_d$. The residue-sheaf and Euler-class assertions also hold for $e=0$; no positive-dimensional cycle-map theorem is invoked there.

## Facts & Assumptions
**Given:** The stated normal affine scheme, field, AC and current nonconnective perfect-complex model, in the same suitable universes as the supplied constructions.

**Goal:** Supply finite dimension bookkeeping and actual point-class/model compatibility.

[F1] [[thm-author-fc2380accb47-normal-geometric-input]] gives finite clopen integral components for a Noetherian normal scheme. Only its component-decomposition assertion is used here.

[F2] [[def-nonconnective-k-spectrum-interface]] specifies the nonconnective functor, its coherent restriction maps and its exact-functor action. [[prop-perfect-k-localization-input]] supplies localization and the homotopy-cartesian restriction square for a finite cover by quasi-compact opens. [[def-stable-spectra-interface]] defines the homotopy products, zero spectrum, fibers and groups $\pi_0$.

[F3] [[lem-koszul-point-support-class]] gives the globally perfect residue sheaf at a smooth closed point and its local Koszul resolutions. [[def-smooth-point-cycle-map]] supplies $\varphi_x(1)=[i_*\kappa(x)]$, including its positive normalization, the residue-field convention $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, and the smooth-point and perfect-field conventions. [[lem-affine-perfect-k-zero-bridge]] gives the affine comparison and its alternating finite-projective Euler formula.

[F4] An affine scheme is a spectrum with its structure sheaf, as in [[math:def-affine-scheme]]. A scheme over $k$ is equipped with a morphism to $\operatorname{Spec}k$; finite type means locally of finite type and quasi-compact, as in [[math:def-locally-finite-type-and-finite-type-morphism]]. Normal means that every local ring is an integrally closed domain; only this definition from [[math:def-weil-divisor-normal-noetherian-scheme]] is used. Components have their reduced induced scheme structure as in [[math:def-irreducible-component-scheme]], and integral means nonempty, reduced and irreducible as in [[math:def-integral-scheme]]. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets, as in [[math:def-dimension-noetherian-topological-space]]. Here $d$ is the stated finite dimension. Pure dimension $e$ means that every irreducible component has dimension $e$; clopen means both open and closed, and each $X_e$ carries its open subscheme structure.

[F5] Under AC, [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]] gives $X=\operatorname{Spec}A$ with $A$ generated by a finite list as a $k$-algebra. Finite algebra generation means that every element is a polynomial expression in that list with coefficients in $k$, equivalently that the algebra is a finite-variable polynomial quotient, as in [[math:def-finite-type-and-module-finite-algebras]]. [[math:lem-field-is-noetherian]] makes $k$ Noetherian, and [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] then makes $A$ Noetherian. A finite affine cover by spectra of Noetherian rings is the Noetherian-scheme criterion in [[math:def-locally-noetherian-and-noetherian-scheme]]. Under AC, [[math:thm-noetherian-ring-has-noetherian-spectrum]] also makes $|X|$ a Noetherian space, so the supplied chain-dimension definition applies.

[F6] Under AC, [[math:lem-clopen-subset-gives-idempotent-decomposition]] writes every clopen subset of $\operatorname{Spec}A$ as $D(1-a)$ for an idempotent $a\in A$. [[math:lem-spectrum-localization-open-immersion]] identifies this open subscheme with $\operatorname{Spec}A_{1-a}$. [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]] make each such affine scheme qcqs; this abbreviates quasi-compact and quasi-separated in the sense of [[math:def-quasi-compact-and-quasi-separated-scheme]]. These inputs apply also to finite unions of the clopen pieces and to their complements.

[F7] [[math:def-sheaf-on-topological-space]] supplies uniqueness and existence of gluing, including the empty-cover convention. [[math:thm-exactness-of-sheaves-stalkwise]] tests exactness on stalks; it applies to module sheaves through their underlying abelian sheaves. [[def-scheme-perfect-complexes]] specifies the enhanced category obtained by inverting quasi-isomorphisms of sheaf cochain complexes, local perfectness, support, and the exact affine equivalence with bounded finite-projective representatives. For a clopen inclusion $j:W\hookrightarrow X$, the zero extension used here is defined degreewise by $(j_!E)^n(V)=E^n(V\cap W)$, with the restricted scalar action and differential; its restriction to $X\setminus W$ is zero. The proof below verifies its sheaf, exactness and perfectness properties in the supplied model.

[F8] [[thm-author-80f982ded420-quotient-cycle-map-input]] supplies the established source quotient map and its positive closed-point value, in classical affine projective-module $K_0$. Its hypotheses are normal affine finite type over a perfect field and positive dimension. Apply it to each nonempty $X_e$ with $e\geq1$, and to $X$ if $d\geq1$. In the nonpure case its permitted generators lie only on dimension-$d$ components; it supplies no dimension-zero cycle-map assertion. The source relation theorem is an imported premise, not a local consequence of point perfection.

[A1] [[math:def-axiom-of-choice]] is assumed for the affine, component and K-theory inputs above. The suitable universes of [[math:def-grothendieck-universe-closure-convention]] are fixed compatibly with all the supplied enhanced categories and spectra. Their existence and size bounds are assumptions, not consequences of AC. The finite grouping and explicit clopen zero-extension formulas introduce no additional choice principle.

## Proof
1.1 Write $X=\operatorname{Spec}A$ by [F4]. The finite-type coordinate-ring theorem, field Noetherianity and the finite-type algebra theorem in [F5] show that $A$ is Noetherian. The one-chart cover therefore makes $X$ a Noetherian scheme, and its underlying space is Noetherian as well. Apply [F1]: its integral normal components are finite, disjoint and clopen. Group the components of dimension $e$ to form $X_e$. Every component has dimension between zero and $d$, and the finite disjoint clopen cover by components shows that the irreducible components of a nonempty $X_e$ are exactly the grouped components: an irreducible subset meeting two disjoint clopen pieces would be the union of two proper closed subsets. Thus $X_e$ is pure of dimension $e$. By [F6], each $X_e$, every union of these pieces, and every complementary union is affine and qcqs. Each such localization $A_{1-a}$ is generated over $k$ by a finite generating list of $A$ together with $(1-a)^{-1}$. Thus the affine presentation is locally of finite type by [F4] and [F5], and its quasi-compactness gives finite type. Normality restricts to these open subschemes because their local rings are those of $X$. This supplies every geometric and quasi-compactness hypothesis needed below, including the empty pieces. [F1, F4, F5, F6, A1, given]

2.1 By the gluing axiom in [F7], sections on the disjoint open cover $V=\coprod_e(V\cap X_e)$ are exactly tuples of sections on its pieces; all overlap conditions are empty. This applies to module sheaves, their morphisms and cochain complexes. At a point of a clopen piece, zero extension has the original stalk complex, while at a point of its open complement it has the zero stalk complex. The stalkwise criterion in [F7] therefore proves exactness and preservation of quasi-isomorphisms. Restriction and the displayed zero-extension formula are inverse componentwise constructions before localization, preserve quasi-isomorphisms, and hence give inverse exact functors on the specified derived enhancements. Zero extension is identity on its own piece and zero on the others. The local perfectness and support conditions of [F7] therefore identify the supported perfect category for a clopen piece with its perfect category and show that zero extension preserves perfection. For the empty scheme, its empty-supported category is its whole perfect category; localization in [F2] with $U=X=\varnothing$ identifies $K(\varnothing)$ with the fiber of the identity of $K(\varnothing)$, hence with the zero spectrum. Mayer–Vietoris in [F2] for a piece and its clopen complement now gives their product, since their intersection is empty. Iterating yields the stated restriction equivalence. Mapping the sphere into this finite product gives the product of the groups $\pi_0$ by [F2]; for finitely many abelian groups the product is the direct sum, since every tuple has finite support. Exact-functoriality and the restriction identities show that zero extension induces precisely the inclusion with zeros in all other factors. Finally, by [F3], the point class on $X_e$ and on $X$ is the positive class of the same degree-zero residue sheaf; the zero-extension formula gives exactly that sheaf on $X$, with zero restriction to every other piece. By the affine equivalence in [F7] this perfect sheaf has a bounded finite-projective representative. The bridge in [F3] takes its spectral class to the alternating Euler class of that representative. For a nonempty $X_e$ with $e\geq1$, step 1.1 checks all hypotheses of [F8], and its source map sends $[x]$ to exactly this finite-projective-resolution class $[\kappa(x)]$. Applying [F8] directly to $X$ when $d\geq1$ uses only points on $X_d$; the same Euler comparison identifies those values with the current zero-extended point classes. Hence there is neither sign reversal nor residue-degree factor. For $e=0$ the perfect-object and Euler comparisons still apply, without an application of [F8]. Every local Koszul representative resolves this same object by [F3], so the comparison is independent of those representatives. This proves the original point-class and model assertions without identifying coherent G-theory with perfect K-theory on a singular scheme. [F2, F3, F7, F8, A1, step 1.1] ∎
