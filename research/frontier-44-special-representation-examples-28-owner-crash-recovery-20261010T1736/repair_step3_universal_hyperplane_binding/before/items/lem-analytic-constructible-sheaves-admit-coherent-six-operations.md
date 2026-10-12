---
id: lem-analytic-constructible-sheaves-admit-coherent-six-operations
kind: lemma
title: Actual analytic constructible sheaves admit coherent six operations
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-algebraically-constructible-complex-of-analytic-field-sheaves, def-axiom-of-choice, def-compactly-supported-global-sections, def-derived-category-of-an-abelian-category, def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-inverse-image-presheaf-and-sheaf, def-sheaf-hom, def-sheaf-on-topological-space, def-sheaf-tensor-product, lem-complex-algebraic-stratifications-have-finite-conical-cochain-models, lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint, thm-verdier-duality-on-oriented-stratified-complex-varieties]
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
    - title: "J. Bernstein, V. Lunts, Equivariant Sheaves and Functors, Part I §§1.4–1.8 (six operations, Verdier duality, smooth maps and smooth base change) and §1.9 with Appendices A (acyclic maps)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Astérisque 100 (1982); §1.4 recollement t-structures and §2.1 perverse sheaves on stratified spaces"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and let $k$ be an arbitrary field. On separated finite-type complex varieties, the ordinary analytic sheaf operations restrict to bounded algebraically constructible complexes $D_c^b(-;k)$ ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]): $f^*\dashv Rf_*$, $Rf_!\dashv f^!$, the tensor/internal-Hom adjunction, coherent composition, support localization, ordinary and extraordinary proper base change, the projection formula and trace. Proper $f$ satisfies $Rf_!=Rf_*$. Verdier duality is involutive there and exchanges these adjoints. On a smooth complex $d$-fold $\omega_X=k_X[2d]$, and for a smooth map of relative dimension $d$, $f^!=f^*[2d]$. Coefficient extensions commute with these operations on bounded constructible inputs. The bounded constructibility and finite coefficient models are those of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] and [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]].

## Facts & Assumptions

**Given:** AC; separated finite-type complex varieties with their analytic topology and the analytic algebraic maps between them; an arbitrary coefficient field $k$; the actual finite conical/incidence models; and the operations of [[def-derived-category-of-an-abelian-category]], [[def-derived-hom-in-the-bounded-setting]], [[def-sheaf-tensor-product]], [[def-sheaf-hom]], [[def-extension-by-zero-abelian-sheaf]], [[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[def-sheaf-on-topological-space]], [[def-compactly-supported-global-sections]].

[F1] The coherent six-operation theorem gives, on the proved constructible subcategory, the three adjunctions, composition and identity comparisons, ordinary and extraordinary proper base change, the projection formula, support localization, dualizing transitivity and trace, coherent under Cartesian pasting, composition, evaluation and trace, with proper equality $Rf_!=Rf_*$, and with finite constructible models commuting with coefficient extension; geometric output preservation is the exact geometric supplier ([[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]]).

[F2] The bounded constructibility and finite coefficient models are supplied by the finite conical and derived-incidence suppliers, for the stated finite collections, with coefficient-extension compatibility ([[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]], [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]).

[F3] The exceptional inverse image represents the Hom transposition on bounded sources and bounded-below targets and becomes the right adjoint $Rf_!\dashv f^!$ on the bounded constructible specialization ([[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]]).

[F4] The constructible Verdier theorem gives involutive duality on bounded constructible objects, exchanging the adjoints, with $\omega_X\simeq k_X[2d]$ on a smooth complex $d$-fold and $f^!\simeq D_Xf^*D_Y$, together with the coherent extraordinary proper exchange ([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]).

[F5] $D_c^b(X;k)$ consists of the bounded complexes whose cohomology is locally constant of finite rank along a finite smooth algebraic stratification ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]]); AC is assumed ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The operations restrict to $D_c^b$ and satisfy the stated adjunctions and diagrams. The compact-support adjoint and the coherent six-operation suppliers [F1] construct the functors together with their adjunction units and counits, not merely unrelated isomorphisms: their composition, Cartesian exchange, projection, trace and localization diagrams are the asserted diagrams, including proper equality and the smooth local-product comparisons. The finite conical and incidence suppliers [F2] prove bounded constructibility and finite coefficient models for the stated finite collection, so the constructed operations restrict to $D_c^b$; and [F3] supplies the right adjoint $Rf_!\dashv f^!$ on that specialization. All vector-space and injective constructions apply over an arbitrary field: the signed cochains use only $0$ and the units $\pm1$, so no characteristic hypothesis enters. [given, F1, F2, F3]

1.2 Proper equality and involutive duality. Proper $f$ satisfies $Rf_!=Rf_*$ by [F1]. The oriented stratified Verdier supplier [F4] gives the evaluation isomorphism and proves the natural evaluation $A\to D_XD_XA$ is an isomorphism on bounded constructible objects, so duality is involutive there; its adjunction construction gives the exchange of $Rf_*$, $Rf_!$ with the duality functors, and the extraordinary proper base change. All these maps use the same ordinary units, counits and orientation, so their coherence is the coherence of the actual construction and is compatible with the pasting and trace identities of [F1]. [given, F1, F4, F5]

1.3 Smooth normalization and relative pullback. On a smooth complex $d$-fold the complex orientation identifies $\omega_X\simeq k_X[2d]$ by [F4]. Let $a:X\to Y$ be smooth of pure relative complex dimension $d$. Smooth analytic local charts identify it, locally on source and target, with $\operatorname{pr}:W\times V\to V$, where $W$ is an oriented complex $d$-ball; $V$ need not be smooth. For an open $V'\subseteq V$, the generator $E_{W\times V'}=j_{W\times V'!}k$ has proper-support image $E_{V'}\otimes_kR\Gamma_c(W,k)=E_{V'}[-2d]$, by the finite oriented ball relative-cochain model of [F2] and the support construction of [F1]. For any bounded constructible $B$ on $V$, the ordinary product comparison of [F2] gives $R\Gamma(W\times V',\operatorname{pr}^*B)=R\Gamma(V',B)$ because $W$ is contractible. Consequently $R\operatorname{Hom}(E_{W\times V'},\operatorname{pr}^*B[2d])=R\operatorname{Hom}(R\operatorname{pr}_!E_{W\times V'},B)$. The orientation integration map $R\operatorname{pr}_!\operatorname{pr}^*B[2d]\to B$ transposes under [F3] to a comparison $\operatorname{pr}^*B[2d]\to\operatorname{pr}^!B$, and on these generators its Hom map is exactly the displayed cochain evaluation isomorphism, natural under shrinking product charts; the exceptional adjoint of [F3] identifies the same right-hand complex with $R\operatorname{Hom}(E_{W\times V'},\operatorname{pr}^!B)$. Product opens form a neighbourhood basis, so the comparisons identify derived sections and hence cohomology stalks, proving $\operatorname{pr}^!B\simeq\operatorname{pr}^*B[2d]$. The positive complex orientation makes the local comparisons agree on overlaps, so they glue to $a^!\simeq a^*[2d]$ on all bounded constructible inputs. The orientation generator maps to $1\in k$ over every field, including characteristic two. This proves the relative formula on arbitrary constructible complexes rather than only on smooth local systems. [given, F1, F2, F3, F4]

2.1 Coefficient extension. The finite local cellular and cochain models of [F2] have finite-dimensional terms and $k$-linear comparison maps, so extending scalars along $k\to K$ is exact, commutes with finite sums, cohomology and finite-dimensional duals, and carries the models of [F1] and [F4] to the corresponding models of the extended coefficient field; the exceptional comparison follows from $f^!=D_Xf^*D_Y$, and composition and traces extend because their maps are the same finite evaluation and section comparisons. This does not assert that infinite products of injective stalks commute with scalar extension. [given, F1, F2, F4] ∎
