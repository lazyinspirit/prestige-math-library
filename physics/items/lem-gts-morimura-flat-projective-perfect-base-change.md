---
id: lem-gts-morimura-flat-projective-perfect-base-change
kind: lemma
title: Derived base change for perfect dg categories of flat projective schemes
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - lem-gts-morimura-ample-power-perfect-generator
  - lem-gts-morimura-perfect-generator-persistence
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - def-axiom-of-choice
dependency_roles:
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  lem-gts-morimura-ample-power-perfect-generator: mathematical-premise
  lem-gts-morimura-perfect-generator-persistence: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Morimura, Versal dg deformation of Calabi–Yau manifolds
      url: https://arxiv.org/pdf/2111.11778
      locator: Remark 6.1, PDF pp. 35–36, and Theorem 7.1, pp. 38–39; its geometric base-change input is reconstructed below in the flat projective case by a generator and affine Čech calculation.
    - title: The Stacks Project, Derived Categories of Schemes, An example generator
      url: https://stacks.math.columbia.edu/tag/0A9V
      locator: The coordinate generator is reconstructed in the named local lemma; no perfect-stack tensor theorem is imported.
verification:
  precheck: pass
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a map of commutative Noetherian rings, let $X$ be a flat projective $R$-scheme with a fixed closed embedding $X\hookrightarrow\mathbb P^r_R$, and put $X_S=X\times_R S$. In the canonical dg enhancements of perfect complexes, derived pullback induces a Morita equivalence
$$\mathrm{Perf}_{\mathrm{dg}}(X)\otimes_R^{\mathbf L}S\simeq_{\mathrm{mo}}\mathrm{Perf}_{\mathrm{dg}}(X_S).$$
These equivalences commute with successive scalar extensions and with pullback by isomorphisms of the flat projective schemes. Thus a marking of a special fiber induces the corresponding Morita marking, and an isomorphism preserving the geometric marking induces an equivalence preserving that Morita marking. Here a canonical enhancement means a dg realization of derived perfect complexes with their derived mapping complexes, composition and derived pullback, such as a compatible Čech or injective resolution model. The claim makes no assertion that a flat locally finitely presented scheme with projective special fiber is projective, or that an arbitrary equivalence of triangulated categories lifts to these dg models.

## Statement references

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[lem-gts-morimura-ample-power-perfect-generator]]

[[lem-gts-morimura-perfect-generator-persistence]]

[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $R$, $S$, the flat projective $X$ with its embedding, and the indicated dg realizations.

[F1] [[lem-gts-morimura-ample-power-perfect-generator]] proves that $E=\bigoplus_{j=0}^r\mathcal O_X(-j)$ and its pullback $E_S$ generate the perfect complexes on their respective projective schemes, and proves the tensor–Hom realization by their endomorphism dg algebras.

[F2] [[lem-gts-morimura-perfect-generator-persistence]] proves Hom base change and its composition compatibility on finite stable retract closures of representable modules.

[F3] [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]] supplies the finite affine Čech computation. Its extension to complexes with bounded Čech direction is proved in the generator lemma [F1].

[F4] [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] fixes derived scalar extension and Morita equivalence of dg categories.

[A1] [[def-axiom-of-choice]] permits resolution choices.

## Proof

**Given:** [F1]–[F4], [A1], and the flat projective data.

1.1 Cover $X$ by its intersections $U_a$ with the standard projective charts. Every finite intersection $U_J$ is affine, and its coordinate ring is flat over $R$. Indeed flatness of the scheme means exactness of tensor with its structure sheaf on stalks, so tensoring an exact sequence of $R$-modules with $\mathcal O_{U_J}$ remains exact; sections of quasi-coherent modules on the affine $U_J$ are exact. Since $E$ is locally free, each term $\Gamma(U_J,\mathcal E nd(E))$ is likewise flat over $R$. The ordered Čech complex $C_R$ for $\mathcal E nd(E)$ is bounded and termwise flat, hence K-flat, and computes $\mathbf R\operatorname{Hom}_X(E,E)$. The Čech cup product, given by restriction to an intersection followed by composition, makes $C_R$ a dg algebra model of that endomorphism object. In particular its multiplication and differential are given by actual maps of modules over $R$. [F1, F3, A1, algebra]

2.1 The base-changed charts $U_{J,S}$ remain affine. On an affine chart, sections of the finite locally free endomorphism sheaf commute with tensor, so $\Gamma(U_J,\mathcal E nd(E))\otimes_R S=\Gamma(U_{J,S},\mathcal E nd(E_S))$. Tensor commutes with the finite Čech sums and their differentials and cup products. Since $C_R$ is K-flat, this gives a quasi-isomorphism of derived dg algebras $$C_R\otimes_R^{\mathbf L}S\simeq C_R\otimes_R S=C_S\simeq\mathbf R\operatorname{Hom}_{X_S}(E_S,E_S).$$ This is precisely the map induced by geometric pullback on derived Hom, since the affine evaluation, restriction and composition maps defining both sides are the same. [F1, F2, F3, step 1.1, algebra]

3.1 By [F1], the tensor–Hom equivalences identify the perfect categories of $X$ and $X_S$ with the perfect module categories of $C_R$ and $C_S$. Scalar extension of a dg algebra and then passage to finite stable retract closures gives the same Morita class as scalar extension of its perfect dg category. To check this directly, representables generate its derived module category by the semifree-resolution construction in [F1]; each perfect object is a finite cell retract, so its endomorphisms and all maps between such objects commute with derived scalar extension by [F2]. The image of the free algebra module is the free scalar-extended module, and the other extended objects are finite cell retracts of it. Thus this image both generates and is fully faithful on its generating object, giving a Morita equivalence by the tensor–Hom unit/counit argument of [F1]. Apply this to the quasi-isomorphism of algebras in step 2.1. It proves the asserted dg-category Morita equivalence, induced by pullback. [F1, F2, F4, step 2.1]

4.1 For $R\to S\to T$, the comparison in step 2.1 is termwise tensor associativity on the same affine intersections, and the cup products are defined by the same restriction and composition maps. The two induced functors consequently agree through the canonical derived tensor associator. A different affine cover is compared with a common refinement using restriction of the augmented Čech resolutions; these are quasi-isomorphisms because they resolve the same sheaf and have affine acyclic intersections, as in [F3]. Thus the derived pullback comparisons and their composition do not depend on the cover. Pullback by an isomorphism of schemes identifies the same sheaves, restrictions and composition, using the image cover or a common refinement, so the comparisons commute with such pullback too. Applying the result to a residue-field map and a specified geometric special-fiber isomorphism gives the stated marking. An isomorphism preserving that geometric marking gives the same composite pullback on the fiber, hence preserves the Morita marking. [F1, F3, F4, step 2.1, step 3.1, algebra] ∎
