---
id: fs-one-component-determines-a-natural-transformation
kind: false-statement
title: "A natural transformation is determined by its component at one object"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-natural-transformation, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Chapter II"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: null
---

## Statement

**FALSE.** A natural transformation between two functors is determined by its
component at any one object of the source category.

## Facts & Assumptions

**Given:** The discrete category $C$ on two objects $0,1$ and the category $\mathbf{Set}$.

[L1] A natural transformation is a component family constrained by a naturality equation for each source morphism ([[def-natural-transformation]]).

[L2] Sets and functions form $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Refutation

**Proof technique:** direct.

1.1 Let $F=G:C\to\mathbf{Set}$ send both objects to $S=\{0,1\}$ and each identity to $1_S$. Because $C$ is discrete, any two functions $S\to S$ chosen as components satisfy all naturality equations. [L1, L2]

2.1 Let $\alpha_0=\alpha_1=1_S$. Let $\beta_0=1_S$ and let $\beta_1$ transpose $0$ and $1$. Step 1.1 makes both $\alpha$ and $\beta$ natural transformations $F\Rightarrow G$. [step 1.1]

3.1 The transformations agree at object $0$ because $\alpha_0=\beta_0$, but they differ at object $1$ because $\alpha_1\ne\beta_1$. [step 2.1]

4.1 Therefore one component does not determine a natural transformation when the source category has an unrelated component. [step 3.1] ∎
