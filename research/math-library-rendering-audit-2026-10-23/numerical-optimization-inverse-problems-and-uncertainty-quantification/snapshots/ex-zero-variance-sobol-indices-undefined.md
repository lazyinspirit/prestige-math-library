---
id: ex-zero-variance-sobol-indices-undefined
kind: example
title: A constant output has no normalized Sobol indices
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-first-and-total-sobol-indices, thm-product-hoeffding-anova-decomposition, def-product-hoeffding-anova-components, def-product-coordinate-projections]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, Definition 2.1"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Example

On any finite product probability space, let $f(X)=c$ be constant. Then every
nonempty ANOVA component vanishes and $\operatorname{Var}(f)=0$. The normalized
Sobol indices are undefined by convention; setting them to zero would introduce
an additional convention not present in their definition.

## Facts & Assumptions

**Given:** A finite product probability law and a constant real output $f=c$.

[F1] [[thm-product-hoeffding-anova-decomposition]]: the ANOVA components are orthogonal and sum to $f$.

[F2] [[def-first-and-total-sobol-indices]]: normalized indices are defined only when $V=\operatorname{Var}(f)>0$.

[F3] [[def-product-hoeffding-anova-components]] and [[def-product-coordinate-projections]]: components are finite alternating sums of the product-law coordinate averages $P_J$.

## Verification

**Given:** The constant-output model in the Example.

1.1 For every $J\subseteq[d]$, the coordinate average [F3] gives $P_Jf=c$. The finite alternating sum in [F3] for a nonempty component therefore has coefficient sum $(1-1)^{|u|}=0$, so $f_u=0$ for $u\ne\varnothing$. [F1, F3, given, algebra]

2.1 The variance is $\mathbb E[(c-c)^2]=0$, and all nonempty component variances vanish. Since the denominator condition in [F2] fails, neither $S_i$ nor $S_{T_i}$ is defined. [F2, step 1.1, algebra] ∎

