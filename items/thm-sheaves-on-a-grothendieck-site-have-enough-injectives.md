---
id: thm-sheaves-on-a-grothendieck-site-have-enough-injectives
kind: theorem
title: Abelian sheaves on a site have enough injectives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: AC is assumed for the local enough-injectives supplier; the global-sections limit argument introduces no further choice.
sources:
  references:
    - title: The Stacks Project, Injectives, Section 19.7, Theorem 19.7.4
      url: https://stacks.math.columbia.edu/tag/01DL
    - title: Grothendieck, Sur quelques points d'algèbre homologique, Tôhoku Mathematical Journal 9 (1957), §1
      url: https://doi.org/10.2748/tmj/1178244839
verification:
  precheck: n/a
---

## Statement

Let $\mathcal C$ be a small category equipped with a Grothendieck topology, and let $\operatorname{AbSh}(\mathcal C)$ be the category of sheaves of abelian groups on that site. Every object of $\operatorname{AbSh}(\mathcal C)$ admits an injective resolution; consequently, the right-derived functors of global sections $R^i\Gamma(\mathcal C,-)$ are defined.

## Statement references

[The Stacks Project, Injectives, Section 19.7, Theorem 19.7.4](https://stacks.math.columbia.edu/tag/01DL)

[Alexander Grothendieck, *Sur quelques points d'algèbre homologique*, Tôhoku Mathematical Journal 9 (1957), §1](https://doi.org/10.2748/tmj/1178244839)

## Facts & Assumptions

**Given:** a small site $\mathcal C$ and its category of abelian sheaves.

[A1] [[def-axiom-of-choice]]: the current number-theory library's generic injective-resolution route assumes AC when applied to site sheaf categories.

[F1] Under AC, abelian sheaves on any set-sized site form an abelian category with enough injectives, and every object admits an injective resolution. The enough-injectives and resolution clauses require no terminal object. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

## Proof

1.1 The small site in the Statement is set-sized, so [F1] applies under [A1]. Thus every abelian sheaf on this site admits an injective resolution. This also covers the empty site, whose category of abelian sheaves is the zero category. [given, A1, F1]

2.1 Define $\Gamma(\mathcal C,F)$ to be the group of compatible families $(s_U)_{U\in\operatorname{Ob}\mathcal C}$ with $s_U\in F(U)$, satisfying $F(f)(s_U)=s_V$ for every arrow $f:V\to U$. Kernels of sheaf morphisms are computed sectionwise: the sectionwise kernel is a sheaf because compatible sections glue uniquely in the original sheaf and their images glue to zero. Hence, for any exact sequence $0\to F'\to F\to F''$, a compatible family in $F$ mapping to zero lifts uniquely section by section to $F'$; uniqueness ensures compatibility of these lifts. Therefore $\Gamma$ is additive and left exact, even without a terminal object. Applying it to the injective resolutions from step 1.1 defines its right-derived functors $R^i\Gamma(\mathcal C,-)$. If a terminal object exists, compatible families are precisely restrictions of its sections, so this agrees with evaluation there. [given, step 1.1, construct, algebra] ∎
