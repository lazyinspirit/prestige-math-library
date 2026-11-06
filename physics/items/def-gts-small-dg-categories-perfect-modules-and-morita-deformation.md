---
id: def-gts-small-dg-categories-perfect-modules-and-morita-deformation
kind: definition
title: Small dg categories, perfect modules, and Morita deformation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 0
deps:
  - def-differential-graded-algebra
  - def-differential-graded-module
  - def-model-category-and-quillen-adjunction
  - def-derived-category-of-an-abelian-category
dependency_roles:
  def-differential-graded-algebra: mathematical-premise
  def-differential-graded-module: mathematical-premise
  def-model-category-and-quillen-adjunction: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Christopher Brav and Tobias Dyckerhoff, Relative Calabi-Yau Structures, arXiv:1606.00619v1
      url: https://arxiv.org/pdf/1606.00619
      locator: Section 2.1, including the definition of derived module infinity categories and perfect modules, PDF pp. 5–7.
    - title: Christopher Brav and Tobias Dyckerhoff, Relative Calabi-Yau Structures, arXiv:1606.00619v1
      url: https://arxiv.org/pdf/1606.00619
      locator: Section 2.2, Morita equivalence and derived extension/restriction, PDF pp. 7–8.
    - title: Hayato Morimura, Versal dg deformation of Calabi–Yau manifolds, arXiv:2111.11778v3
      url: https://arxiv.org/pdf/2111.11778
      locator: Introduction and §§6–7, notation for the dg category of perfect complexes and its Morita deformation functor.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Definition

Let $k$ be a field. A **small $k$-linear cohomological dg category** $\mathcal A$ has a set of objects, a cochain complex $\mathcal A(a,b)$ of $k$-vector spaces for each ordered pair of objects, closed degree-zero identity elements, and associative unital degree-zero composition chain maps. The cochain differential has degree $+1$ and composition obeys the signed Leibniz rule of a cohomological dg algebra. A **right dg $\mathcal A$-module** is a $k$-linear enriched functor $\mathcal A^{\mathrm{op}}\to\mathrm{Ch}(k)$, where $\mathrm{Ch}(k)$ is the category of cochain complexes with the total tensor differential and Koszul signs. For a commutative $k$-algebra $R$, define $R$-linear dg categories and their right modules by the same formulas with $R$-modules and $R$-linear maps in place of $k$-vector spaces and $k$-linear maps.

Write $D(\mathcal A)$ for the homotopy-coherent localization of the category of right dg $\mathcal A$-modules at the objectwise quasi-isomorphisms: it is characterized by the property that functors out of it are functors out of the module category that send those quasi-isomorphisms to equivalences. Its morphisms are derived mapping spaces. For each object $a$, the representable module is $h_a=\mathcal A(-,a)$. A full subcategory is **stable** here if it is closed under shifts and finite limits and colimits; it is **idempotent-complete** if every idempotent endomorphism splits. Define $\mathrm{Perf}(\mathcal A)$ to be the smallest stable idempotent-complete full subcategory of $D(\mathcal A)$ containing every representable module. These formulas are definitions and do not assert a separate compact-generation theorem.

For a dg functor $F:\mathcal A\to\mathcal B$, let $F_!\dashv F^*$ denote derived extension and restriction of scalars on module categories. The functor is a **Morita equivalence** when this adjunction induces an equivalence $D(\mathcal A)\simeq D(\mathcal B)$. If compact generation by representables has separately been proved in a given setting, this can equivalently be checked on $\mathrm{Perf}(\mathcal A)\to\mathrm{Perf}(\mathcal B)$; that equivalence is not assumed as part of this definition.

For a $k$-scheme $X$, let $D_{\mathrm{perf}}(X)$ denote the full subcategory of the derived category of $\mathcal O_X$-modules consisting of complexes which, on an open cover of $X$, are quasi-isomorphic to bounded complexes of finite-rank locally free $\mathcal O_X$-modules. A **specified dg enhancement of perfect complexes on $X$**, denoted $\mathrm{Perf}_{dg}(X)$, is a small $k$-linear dg category $\mathcal A_X$ together with a $k$-linear triangulated equivalence $h\mathrm{Perf}(\mathcal A_X)\simeq D_{\mathrm{perf}}(X)$. Here $h\mathcal C$ denotes the homotopy category of an $\infty$-category $\mathcal C$: its objects are those of $\mathcal C$ and its morphism sets are $\pi_0$ of the mapping spaces. The right-hand side is the ordinary derived category, so this comparison is explicitly made on homotopy categories. The notation records this chosen enhancement; it does not assert existence or uniqueness of one, and any comparison between choices is made only after a Morita equivalence is supplied.

Let $R$ be a finite-dimensional commutative local Artin $k$-algebra with residue map $\epsilon:R\to k$. An **admissible marked Morita deformation** of a small $k$-linear dg category $\mathcal A_0$ over $R$ is a pair $(\mathcal A_R,\eta)$ where $\mathcal A_R$ is a small $R$-linear dg category, $\mathcal A_R\otimes_R^{\mathbf L}k$ is its derived reduction, and the marking $\eta$ is a specified equivalence between $\mathcal A_R\otimes_R^{\mathbf L}k$ and $\mathcal A_0$ in the localization of small $k$-linear dg categories at Morita equivalences. Thus the marking includes an equivalence $D(\mathcal A_R\otimes_R^{\mathbf L}k)\simeq D(\mathcal A_0)$ induced by Morita equivalences and its specified restriction $\mathrm{Perf}(\mathcal A_R\otimes_R^{\mathbf L}k)\simeq\mathrm{Perf}(\mathcal A_0)$. Both are required data here; a bare equivalence of the perfect subcategories is not being used as an unproved criterion for Morita equivalence. Derived tensor products are computed using cofibrant or K-flat replacements of mapping complexes; this is a model choice and imposes no additional condition on the Morita class. A morphism is an $R$-linear Morita equivalence compatible with the markings. The **Morita deformation groupoid** is the maximal subgroupoid of the homotopy-coherent localization at Morita equivalences of these marked objects and compatible morphisms; its set of connected components is the associated set-valued deformation functor.

The underlying dg category is taken up to Morita equivalence, not quasi-equivalence of chosen dg presentations and not gauge equivalence of a fixed coderivation carrier. The definition leaves existence of model structures, compact generation, and comparison with any geometric deformation functor to separate results.

## Definition references

[[def-differential-graded-algebra]]

[[def-differential-graded-module]]

[[def-model-category-and-quillen-adjunction]]

[[def-derived-category-of-an-abelian-category]]

## Remarks

The source uses derived module categories and Morita equivalences over a field. A prior finite-field dg-category definition is not a characteristic-zero supplier for the Morimura application. This definition makes the marked reduction explicit and does not identify Morita equivalence with quasi-equivalence.
