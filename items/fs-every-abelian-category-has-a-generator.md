---
id: fs-every-abelian-category-has-a-generator
kind: false-statement
title: "FALSE: every abelian category has a generator"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, def-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Tag 079B"
      url: "https://stacks.math.columbia.edu/tag/079B"
pipeline_run: frontier-22
---

## Statement

Every abelian category has a generator.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{FinAb}$ of finite abelian groups.

[L1] A generator must separate distinct morphisms by precomposition
([[def-generator-and-cogenerator-of-a-category]]).

[L2] An abelian category is a category with the usual additive exact structure
([[def-abelian-category]]).

## Refutation

1.1 The category $\mathbf{FinAb}$ is abelian: kernels, cokernels, and finite biproducts of morphisms of finite abelian groups are again finite abelian groups. So [L2] applies to it. [L2, algebra]
2.1 Let $G$ be any finite abelian group. Choose a prime $p$ not dividing the exponent of $G$. Then every homomorphism $G\to\mathbb Z/p$ is zero. Hence the identity map and the zero map of $\mathbb Z/p$ cannot be separated by precomposition with any map from $G$, so $G$ is not a generator by [L1]. Since $G$ was arbitrary, $\mathbf{FinAb}$ has no generator. [L1, step 1.1, choose]
3.1 Thus not every abelian category has a generator. [step 2.1] ∎