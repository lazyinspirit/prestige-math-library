---
id: thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace
kind: theorem
title: Coherent six operations on analytic constructible field sheaves
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves, def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces, def-axiom-of-choice, def-c-soft-sheaf, def-compactly-supported-global-sections, def-derived-category-of-an-abelian-category, def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-inverse-image-presheaf-and-sheaf, def-locally-constant-sheaf-of-finite-rank, def-sheaf-hom, def-sheaf-on-topological-space, def-sheaf-tensor-product, lem-analytic-six-operation-support-and-trace-calculus, lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions, lem-complex-algebraic-stratifications-have-finite-conical-cochain-models, lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model, lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology, thm-verdier-duality-on-oriented-stratified-complex-varieties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Bernstein, V. Lunts, Equivariant Sheaves and Functors, Part I §§1.4–1.8 (six operations, Verdier duality, smooth maps and smooth base change)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Astérisque 100 (1982); §1.4 recollement t-structures and §2.1 perverse sheaves on stratified spaces"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC and the actual geometric and derived-incidence suppliers of the Verdier theorem. For analytic algebraic maps on its proved constructible subcategory, the six operations $f^*,Rf_*,Rf_!,f^!,\otimes_k^L,R\mathcal Hom$ have their three adjunctions, composition and identity comparisons, ordinary proper and extraordinary proper base change, projection formula, support localization, dualizing transitivity and trace. The comparisons commute with Cartesian pasting, composition of maps, evaluation and trace, giving a coherent pull-push product calculus. For a locally trivial product projection with finite-type smooth fibre $F$, the actual finite product cochain model gives $R\mathrm{pr}_*\mathrm{pr}^*B\simeq B\otimes_k C^*(F;k)$, with its ordinary unit. Smooth base change for $Rf_*$ holds whenever a supplied factorization $f=p\circ j$ has $p$ proper and $j$ an open inclusion with the conical local models below; proper maps already satisfy it. Their finite constructible models commute with extension of coefficient fields. Geometric output preservation is the exact geometric supplier, not an additional axiom.

## Facts & Assumptions

**Given:** AC; separated finite-type complex algebraic varieties with their analytic topology and the analytic algebraic maps between them; a coefficient field $k$; the actual finite conical/triangulation and derived-incidence suppliers; and the operations of [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]].

[F1] The support-and-trace calculus: Cartesian base change $u^*Rf_!\simeq Rf'_!v^*$, proper equality $Rf_!=Rf_*$, the projection formula for bounded tensor factors, canonical composition of proper-support images, closed-support localization triangles with $R\mathcal Hom(i_*k_Z,A)\cong R\Gamma_ZA$, composition of traces and coherence under pasting, with no extraordinary dual base change assumed ([[lem-analytic-six-operation-support-and-trace-calculus]]).

[F2] The constructible Verdier theorem: $\omega_X=a_X^!k$ and $D_X$ are defined, evaluation $A\to D_XD_XA$ is an isomorphism on bounded constructible objects, $\omega_X\simeq k_X[2d]$ on a smooth complex $d$-fold, duality exchanges $Rf_*$, $Rf_!$ with $D$, one has $f^!\simeq D_Xf^*D_Y$, and the coherent extraordinary proper exchange $u^!Rf_*\simeq Rf'_*v^!$ holds on the bounded constructible specialization ([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]).

[F3] The ordinary operations and their adjunctions: exactness of $f^*$, $f^*\dashv Rf_*$, the tensor–Hom adjunction and dg identities, flasque acyclicity ([[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]]).

[F4] The actual finite conical/incidence models give bounded finite ordinary and compact-support cohomology, ordinary derived Hom and bounded constructible internal Hom on bounded constructible objects, compatible with coefficient extension ([[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]); the derived-incidence model supplies the finite product incidence resolutions and the local star acyclicity and contractible-factor comparisons ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]), in particular for a product projection the locally constant factor cohomology is computed by the finite complex $C^*(F;k)$ whose sections on contractible factors are acyclic ([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]], [[def-locally-constant-sheaf-of-finite-rank]]).

[F5] The bounded constructible category and derived Hom conventions: [[def-algebraically-constructible-complex-of-analytic-field-sheaves]], [[def-derived-hom-in-the-bounded-setting]], [[def-derived-category-of-an-abelian-category]]; tensor and internal Hom are those of [[def-sheaf-tensor-product]] and [[def-sheaf-hom]], extension by zero is [[def-extension-by-zero-abelian-sheaf]], supports are those of [[def-compactly-supported-global-sections]] and [[def-c-soft-sheaf]], and AC is assumed ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The ordinary and support-locality clauses. Apply [F1] to the actual analytic maps. Its proper-support construction and injective models give the ordinary Cartesian exchange, the projection formula, both support localization triangles, canonical composition, and the units and traces of the adjunctions; the equalities are section-level identities carried through the same resolution comparisons, so no unrelated triangulated-category isomorphisms are selected. Together with [F3] this gives the adjunctions $f^*\dashv Rf_*$ and $Rf_!\dashv f^!$ and the tensor–Hom adjunction on the bounded constructible specialization, their identity and composition comparisons, and the ordinary proper base change for proper maps. [given, F1, F3]

1.2 The constructible and extraordinary clauses. Apply [F2] to the actual finite conical and incidence models. It supplies duality, orientation and the extraordinary exchange by dualizing the already canonical ordinary proper base-change map, and identifies dualizing transitivity and $f^!\simeq D_Xf^*D_Y$; the tensor–Hom and inverse/direct-image adjunctions are the signed dg comparisons of [F3]. Each duality comparison is evaluation and transposition of the same support model, so functoriality carries the proved pasting and trace squares of [F1] to their dual squares; this yields the coherent six-operation interface on the bounded constructible subcategory whenever its listed geometric supplier proves preservation of that subcategory, which is thus the exact geometric input rather than an additional axiom. [given, F1, F2, F3]

1.3 The product projection. For a locally trivial projection $V\times F\to V$ with finite-type smooth fibre $F$, use the actual finite product incidence resolution of [F4]: tensor the finite base diagram resolution with the constant-diagram resolution of the fibre. Each realized term is supported on a product of closed cells minus the deleted faces, and its intersection with a small base star times $F$ has contractible factors, so the independently proved constant-sheaf comparison [F4] makes it section-acyclic; applying sections gives the finite double complex $B|_{\text{star}}\otimes_kC^*(F;k)$. These are natural restriction complexes, and they identify the actual derived image and its adjunction unit with $B\otimes_kC^*(F;k)$ and $B\otimes(k\to C^*(F;k))$. For smooth base change across an open inclusion $j$, a local smooth chart is a product with a contractible ball; the boundary-star section model becomes the previous finite cochain model tensored with the ball cochains, whose augmentation is a quasi-isomorphism by an explicit contraction, so the canonical open-inclusion exchange is a stalkwise quasi-isomorphism. If the supplied map has a factorization $f=p\circ j$ with $p$ proper and $j$ an open inclusion, combining this exchange with the already constructed proper base-change map for $p$ and its compatibility with composition identifies the composite with the canonical exchange for $f$; proper maps already satisfy smooth base change through [F1]. No existence of a compactification is inferred: the clause applies only to the stated supplied factorization. [given, F1, F4]

2.1 Coefficient extension. For a field extension $k\to K$ use the geometric supplier's finite local cellular and cochain models [F4]. Scalar extension is exact on vector spaces, commutes with finite sums and cohomology, and commutes with duals of finite-dimensional terms, so ordinary inverse image, finite cochain pushforward, tensor, internal Hom and the support-defined Verdier duality comparisons extend scalars termwise; the exceptional comparison follows from $f^!=D_Xf^*D_Y$ of [F2], and composition and traces extend because their maps are those same finite evaluation and section comparisons. This argument does not assert that infinite products of injective stalks commute with scalar extension. [given, F2, F4, F5] ∎
