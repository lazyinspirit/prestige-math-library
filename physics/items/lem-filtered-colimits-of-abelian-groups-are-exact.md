---
id: "lem-filtered-colimits-of-abelian-groups-are-exact"
kind: "lemma"
title: "Filtered colimits of abelian groups are exact"
status: published
origin: pipeline
deps: [prop-abelian-groups-are-z-modules, thm-module-categories-are-grothendieck-categories, def-grothendieck-category, def-the-axioms-ab3-and-ab3-star, thm-ab5-is-equivalent-to-exactness-of-filtered-colimits, def-exact-functor-between-abelian-categories, def-filtered-category-and-filtered-colimit]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Algebra (filtered colimits of modules)"
      url: https://stacks.math.columbia.edu/tag/00HA
---

## Statement

Let $\mathcal J$ be a small filtered category
([[def-filtered-category-and-filtered-colimit]]). The filtered colimit functor
$$\operatorname*{colim}_{\mathcal J}:\mathbf{Ab}^{\mathcal J}\to\mathbf{Ab}$$
on abelian groups is exact ([[def-exact-functor-between-abelian-categories]]).
Equivalently:

1. for a $\mathcal J$-indexed diagram of short exact sequences
   $0\to A_j\to B_j\to C_j\to 0$ of abelian groups, the colimit sequence
   $$0\to\operatorname*{colim}_jA_j\to\operatorname*{colim}_jB_j\to\operatorname*{colim}_jC_j\to 0$$
   is short exact;
2. for a $\mathcal J$-indexed diagram of cochain complexes of abelian groups
   $K_j^\bullet$, the canonical map
   $\operatorname*{colim}_jH^p(K_j^\bullet)\to H^p(\operatorname*{colim}_jK_j^\bullet)$
   is an isomorphism for every $p\in\mathbb Z$; in particular the colimit of a
   diagram of exact complexes is exact in every degree.

## Facts & Assumptions

[F1] Abelian groups and $\mathbb Z$-modules have the same objects and morphisms, so a categorical or functorial property of one category transfers to the other ([[prop-abelian-groups-are-z-modules]]).

[F2] For every ring $R$ the category $R\text{-}\mathbf{Mod}$ of left $R$-modules is a Grothendieck category ([[thm-module-categories-are-grothendieck-categories]]).

[F3] A Grothendieck category is an abelian category that satisfies AB5 and has a generator ([[def-grothendieck-category]]).

[F4] An abelian category satisfies AB3 when it has all small coproducts, which in the abelian setting is the same as being cocomplete ([[def-the-axioms-ab3-and-ab3-star]]).

[F5] In a cocomplete abelian category, AB5 holds if and only if every small filtered colimit functor on it is exact ([[thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]]).

[F6] An exact functor between abelian categories is additive and preserves the finite limits and finite colimits that exist in its source, hence in particular preserves kernels, cokernels and images ([[def-exact-functor-between-abelian-categories]]).

## Proof

**Given:** A small filtered category $\mathcal J$.

1.1 By [F1] the categories $\mathbf{Ab}$ and $\mathbb Z\text{-}\mathbf{Mod}$ have the same objects and morphisms, so every statement about the categorical structure of one holds for the other. By [F2] $\mathbb Z\text{-}\mathbf{Mod}$ is a Grothendieck category, hence by [F3] an abelian category satisfying AB5 and having a generator, and satisfying AB5 includes AB3 by [F4], so $\mathbb Z\text{-}\mathbf{Mod}$ is a cocomplete abelian category satisfying AB5. By [F1] the same holds for $\mathbf{Ab}$, and [F5] then gives that for every small filtered category $\mathcal J$ the filtered colimit functor $\operatorname*{colim}_{\mathcal J}:\mathbf{Ab}^{\mathcal J}\to\mathbf{Ab}$ is exact. [F1, F2, F3, F4, F5]

2.1 Let $j\mapsto(0\to A_j\to B_j\to C_j\to 0)$ be a diagram of short exact sequences of abelian groups. Viewing it as an object of $\mathbf{Ab}^{\mathcal J}$ concentrated in cohomological degrees $0,1,2$, it is a diagram of complexes that is exact in each degree. By [F6] the exact functor $\operatorname*{colim}_{\mathcal J}$ preserves kernels and cokernels, hence also images; applied to the diagrams $j\mapsto A_j$, $j\mapsto B_j$, $j\mapsto C_j$ with their structure maps it therefore yields the short exact sequence $0\to\operatorname*{colim}_jA_j\to\operatorname*{colim}_jB_j\to\operatorname*{colim}_jC_j\to 0$. Concretely, injectivity on the left is preservation of the kernel of $A_j\to B_j$, surjectivity on the right is preservation of the cokernel of $B_j\to C_j$, and exactness at the middle term follows because the image of a morphism is the kernel of its cokernel: $\operatorname{im}(\operatorname*{colim}_jA_j\to\operatorname*{colim}_jB_j)=\operatorname*{colim}_j\operatorname{im}(A_j\to B_j)=\operatorname*{colim}_j\ker(B_j\to C_j)=\ker(\operatorname*{colim}_jB_j\to\operatorname*{colim}_jC_j)$. [F6, step 1.1]

3.1 Let $j\mapsto K_j^\bullet$ be a diagram of cochain complexes of abelian groups with differentials $d_j^p$, and put $Z_j^p:=\ker d_j^p$ and $B_j^p:=\operatorname{im}d_j^{p-1}$, so that $0\to Z_j^p\to K_j^p\to B_j^{p+1}\to 0$ and $0\to B_j^p\to Z_j^p\to H^p(K_j^\bullet)\to 0$ are pointwise exact sequences of diagrams of abelian groups. By [step 2.1] the colimits of these two diagrams of short exact sequences are short exact: $0\to\operatorname*{colim}_jZ_j^p\to\operatorname*{colim}_jK_j^p\to\operatorname*{colim}_jB_j^{p+1}\to 0$ and $0\to\operatorname*{colim}_jB_j^p\to\operatorname*{colim}_jZ_j^p\to\operatorname*{colim}_jH^p(K_j^\bullet)\to 0$. Since $\operatorname*{colim}_{\mathcal J}$ is exact it preserves kernels and images [F6], so $\operatorname*{colim}_jZ_j^p=\ker(\operatorname*{colim}_jK_j^p\to\operatorname*{colim}_jK_j^{p+1})=Z^p(\operatorname*{colim}_jK_j^\bullet)$ and $\operatorname*{colim}_jB_j^{p+1}=\operatorname{im}(\operatorname*{colim}_jK_j^p\to\operatorname*{colim}_jK_j^{p+1})=B^{p+1}(\operatorname*{colim}_jK_j^\bullet)$. It also preserves cokernels, so $\operatorname*{colim}_j(Z_j^p/B_j^p)\cong(\operatorname*{colim}_jZ_j^p)/(\operatorname*{colim}_jB_j^p)$; combining the identifications gives $H^p(\operatorname*{colim}_jK_j^\bullet)=(\operatorname*{colim}_jZ_j^p)/(\operatorname*{colim}_jB_j^p)=\operatorname*{colim}_j(Z_j^p/B_j^p)=\operatorname*{colim}_jH^p(K_j^\bullet)$, which is assertion 2. [F6, step 2.1]

4.1 If every complex $K_j^\bullet$ is exact, then $H^p(K_j^\bullet)=0$ for all $j$ and all $p$, so assertion 2 gives $H^p(\operatorname*{colim}_jK_j^\bullet)=0$ for every $p$ and the colimit complex is exact in every degree. Assertion 1 is [step 2.1] and the exactness of the filtered colimit functor itself is [step 1.1]; no choice principle is used anywhere, the proof resting only on the identification of abelian groups with $\mathbb Z$-modules and on AB5 for module categories. ∎ [step 1.1, step 2.1, step 3.1]
