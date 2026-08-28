---
id: thm-module-categories-are-grothendieck-categories
kind: theorem
title: "Module categories are Grothendieck categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-grothendieck-category, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, thm-rmod-is-complete-and-cocomplete, lem-equality-in-a-filtered-colimit-of-sets-is-eventual]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.5 and 1.9"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Theorem 2.6.15 and Appendix A.4"
      url: "https://locallyringed.space/Weibel%20Chapters%201-4.pdf"
pipeline_run: frontier-22
---

## Statement

For every ring $R$, the category $R\text{-}\mathbf{Mod}$ of left $R$-modules is
a Grothendieck category.

## Facts & Assumptions

**Given:** A ring $R$.

[L1] The category $R\text{-}\mathbf{Mod}$ is complete and cocomplete
([[thm-rmod-is-complete-and-cocomplete]]).

[L2] In an AB3 category, an object is a generator exactly when the canonical
coproduct map from its copies onto every object is epic
([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]).

[L3] Equality in filtered colimits of sets is eventually witnessed at one common
stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F1] For a left $R$-module $M$, every module map $R\to M$ is determined by the
image of $1$, and every element $m\in M$ defines such a map by $r\mapsto rm$.

## Proof

**Proof technique:** direct.

1.1 By [L1], the category $R\text{-}\mathbf{Mod}$ has all small coproducts, so it satisfies AB3. For any left $R$-module $M$, the bijection [F1] identifies the canonical coproduct $$\coprod_{u\in\operatorname{Hom}_R(R,M)} R$$ with a copy of $R$ for each element of $M$, and the canonical map to $M$ sends the basis vector indexed by $m$ to $m$. It is therefore surjective, hence epic. By [L2], $R$ is a generator. [L1, L2, F1]
1.2 Let $(B_i)$ be a directed family of submodules of a module $A$, and let $C\le A$. The join $\bigvee_i B_i$ is the union $\bigcup_i B_i$, because directedness makes finite sums of elements land in one later stage. Thus every element of $(\bigvee_i B_i)\cap C$ already lies in some $B_i\cap C$, and the reverse inclusion is immediate. So $$\left(\bigvee_i B_i\right)\wedge C=\bigvee_i(B_i\wedge C).$$ This is exactly AB5. The eventual-equality principle [L3] is the set-level form behind the same filtered-colimit exactness statement. [L3, algebra]
2.1 Step 1.1 gives a generator and step 1.2 gives AB5. Therefore $R\text{-}\mathbf{Mod}$ is a Grothendieck category by [[def-grothendieck-category]]. [step 1.1, step 1.2] ∎