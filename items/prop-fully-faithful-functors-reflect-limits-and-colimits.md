---
id: prop-fully-faithful-functors-reflect-limits-and-colimits
kind: proposition
title: "Fully faithful functors reflect limits and colimits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, def-full-faithful-and-essentially-surjective-functor, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Lemma 3.4.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Every fully faithful functor reflects every limit and every colimit, without a
smallness restriction on the diagram for which the relevant cone is defined.

## Facts & Assumptions

**Given:** A fully faithful functor $F:\mathcal C\to\mathcal D$, a diagram
$D:\mathcal J\to\mathcal C$, and a cone $\lambda$ whose image is limiting.

[F1] Reflection means that a source cone is limiting whenever its image is
limiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[F2] Full faithfulness means every hom-map is bijective
([[def-full-faithful-and-essentially-surjective-functor]]).

[L1] Colimit reflection is the formal dual of limit reflection
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** universal property.

1.1 For a cone $\xi$ over $D$, the limiting property of $F\lambda$ gives a unique $h:F(X)\to F(L)$ satisfying $F(\lambda_j)h=F(\xi_j)$. Fullness in [F2] gives $u:X\to L$ with $F(u)=h$. [F2, given]

2.1 Faithfulness applied to $F(\lambda_ju)=F(\lambda_j)h=F(\xi_j)$ gives $\lambda_ju=\xi_j$, so $u$ is a cone morphism. [F2, step 1.1]

3.1 If $v$ is another factor, then $F(v)$ is a factor through the limiting cone $F\lambda$, hence $F(v)=h=F(u)$; faithfulness gives $v=u$. Thus $\lambda$ is limiting, which is reflection in [F1]. [F1, F2, step 1.1, step 2.1]

4.1 Apply the identical argument in opposite categories. By [L1], full faithfulness remains hom-set bijectivity and the conclusion is reflection of colimits. [F2, L1, step 1.1, step 2.1, step 3.1] ∎
