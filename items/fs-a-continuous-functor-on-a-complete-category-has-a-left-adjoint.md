---
id: fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint
kind: false-statement
title: "FALSE: A continuous functor on a complete category necessarily has a left adjoint"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, def-small-finite-and-large-limits-completeness-and-cocompleteness, rem-category-theory-class-and-size-conventions, def-category, lem-ordinal-basics, def-adjunction-by-unit-counit-and-triangle-identities, thm-the-adjunction-hom-set-bijection-under-local-smallness]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, example 6.3.14"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

**False claim.** If a category $\mathcal C$ is complete and a functor
$U:\mathcal C\to\mathcal D$ is continuous, then $U$ necessarily has a left
adjoint.

## Facts & Assumptions

**Given:** The definable-class category $\mathbf{Ord}^{\mathrm{op}}$ and the
unique functor $U:\mathbf{Ord}^{\mathrm{op}}\to\mathbf 1$.

[L1] A category is complete when every small diagram has a limit; this does not assert limits of large diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L2] A functor is continuous when it preserves all small limits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L3] Under the library's definable-class convention, a category may have definable-class object and morphism collections ([[def-category]]).

[L4] For ordinals: $\alpha\notin\alpha$; $\alpha^{+}=\alpha\cup\{\alpha\}$ is an ordinal; if $A$ is any set of ordinals then $\bigcup A$ is an ordinal; and $\alpha\subseteq\beta$ if and only if $\alpha\in\beta$ or $\alpha=\beta$ ([[lem-ordinal-basics]]).

[L5] For locally small $\mathcal C$ and $\mathcal D$, an adjunction $F\dashv G$ determines bijections $\mathcal D(Fc,d)\to\mathcal C(c,Gd)$ natural in $c$ and $d$ ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Refutation

**Proof technique:** contradiction.

1.1 Regard the ordinals as a definable-class thin category under their usual order and take its opposite. Let $A$ be the set of object ordinals of a small diagram. By [L4], $\bigcup A$ is an ordinal; each $\alpha\in A$ satisfies $\alpha\subseteq\bigcup A$, so $\alpha\le\bigcup A$ by the inclusion criterion in [L4], and if $\alpha\subseteq\beta$ for every $\alpha\in A$ then $\bigcup A\subseteq\beta$. Hence $\bigcup A$ is the least upper bound of $A$ in $\mathbf{Ord}$, that is, a greatest lower bound and so a limit in the opposite category; for the empty diagram the union is $0$. Thus $\mathbf{Ord}^{\mathrm{op}}$ is complete in the small-diagram sense of [L1]. [L1, L3, L4]

1.2 Suppose $U$ had a left adjoint $F$, and put $\beta=F(*)$. Both $\mathbf{Ord}^{\mathrm{op}}$ and $\mathbf 1$ are locally small, being thin, so [L5] applies and gives $\operatorname{Hom}_{\mathbf{Ord}^{\mathrm{op}}}(\beta,\alpha)\cong\operatorname{Hom}_{\mathbf 1}(*,U(\alpha))$, which is a singleton; hence the left side is nonempty for every ordinal $\alpha$. In the opposite ordinal order this says $\alpha\le\beta$ for every ordinal $\alpha$. [assume-contra, L5]

2.1 The unique functor $U:\mathbf{Ord}^{\mathrm{op}}\to\mathbf 1$ preserves every small limit, because every cone in the terminal category is limiting. It is therefore continuous by [L2]. [step 1.1, L2]

3.1 By [L4] the successor $\beta^{+}=\beta\cup\{\beta\}$ is an ordinal with $\beta\in\beta^{+}$, so $\beta\subseteq\beta^{+}$, while $\beta\ne\beta^{+}$ because $\beta\notin\beta$; hence $\beta<\beta^{+}$, contradicting the conclusion of step 1.2 that every ordinal is at most $\beta$. Therefore no such left adjoint exists, even though the source is complete and the functor is continuous. [step 1.2, step 2.1, L4, discharge-contradiction] ∎
