---
id: fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint
kind: false-statement
title: "FALSE: A continuous functor on a complete category necessarily has a left adjoint"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, def-small-finite-and-large-limits-completeness-and-cocompleteness, rem-category-theory-class-and-size-conventions, def-category, lem-ordinal-basics, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
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

[L4] Every set of ordinals has an ordinal supremum, namely its union, and every ordinal has a strictly larger successor ([[lem-ordinal-basics]]).

[L5] An adjunction $F\dashv U$ supplies natural bijections $\operatorname{Hom}(F(-),-)\cong\operatorname{Hom}(-,U(-))$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Refutation

**Proof technique:** contradiction.

1.1 Regard the ordinals as a definable-class thin category under their usual order and take its opposite. For a small diagram in $\mathbf{Ord}^{\mathrm{op}}$, the union of its set of object ordinals is a supremum in $\mathbf{Ord}$, hence a limit in the opposite category; for the empty diagram the union is $0$. Thus $\mathbf{Ord}^{\mathrm{op}}$ is complete in the small-diagram sense of [L1]. [L1, L3, L4]

1.2 Suppose $U$ had a left adjoint $F$, and put $\beta=F(*)$. The bijection in [L5] would make $\operatorname{Hom}_{\mathbf{Ord}^{\mathrm{op}}}(\beta,\alpha)$ nonempty for every ordinal $\alpha$. In the opposite ordinal order this says $\alpha\le\beta$ for every ordinal $\alpha$. [assume-contra, L5]

2.1 The unique functor $U:\mathbf{Ord}^{\mathrm{op}}\to\mathbf 1$ preserves every small limit, because every cone in the terminal category is limiting. It is therefore continuous by [L2]. [step 1.1, L2]

3.1 Taking the successor $\beta^+$ contradicts [L4], since $\beta<\beta^+$. Hence no such left adjoint exists, even though the source is complete and the functor is continuous. [step 2.1, L4, discharge-contradiction] ∎
