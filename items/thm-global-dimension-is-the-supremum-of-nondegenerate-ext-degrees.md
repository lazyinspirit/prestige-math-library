---
id: thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees
kind: theorem
title: "Global dimension is the supremum of nonzero Ext degrees"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-global-dimension-of-an-abelian-category, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes, thm-injective-dimension-at-most-n-iff-higher-ext-vanishes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

For an abelian category with enough projectives,
$$\operatorname{gldim}\mathcal A=\sup\{n:\operatorname{Ext}^n(M,N)\ne0\text{ for some }M,N\};$$
the supremum is taken in $\mathbb N_0\cup\{\infty\}$, with
$\sup\varnothing=0$. If $\mathcal A$ also has enough injectives, the dual
supremum of injective dimensions has the same value.

## Facts & Assumptions

**Given:** The stated enough-projectives or enough-injectives hypothesis.

## Proof

**Proof technique:** direct.

1.1 By [[def-global-dimension-of-an-abelian-category]], global dimension is the supremum of projective dimensions. [[thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]] says that each individual projective dimension is exactly the least uniform Ext-vanishing bound. [given, construct]

2.1 Taking suprema over objects gives the displayed equality. If there is no nonzero object, both sides are $0$ by the stated convention; otherwise $\operatorname{Ext}^0(M,M)$ contains $1_M\ne0$ for every nonzero $M$, so the degree-zero endpoint is present. When there are also enough injectives, [[thm-injective-dimension-at-most-n-iff-higher-ext-vanishes]] gives the same uniform Ext bounds and hence the dual formulation. [step 1.1, algebra] ∎
