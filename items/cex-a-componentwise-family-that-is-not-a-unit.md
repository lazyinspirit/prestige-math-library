---
id: cex-a-componentwise-family-that-is-not-a-unit
kind: counterexample
title: 'A componentwise family of morphisms need not be a natural transformation and hence need not be a unit'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [def-natural-transformation, def-adjunction-by-unit-counit-and-triangle-identities, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.2.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement refuted

For functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, any family of correctly typed morphisms $\eta_X:X\to GFX$ is a possible unit.

## Facts & Assumptions

**Given:** The identity functors $F=G=1_{\mathbf{Set}}$, the von Neumann sets $1=\{0\}$ and $2=\{0,1\}$, and the inclusion $i:1\to2$ with $i(0)=0$.

[F1] A natural transformation $\alpha:F\Rightarrow G$ must satisfy $Gf\circ\alpha_A=\alpha_B\circ Ff$ for every $f:A\to B$ ([[def-natural-transformation]]).

[F2] Sets and functions form the large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F3] A unit of an adjunction is a natural transformation $1_{\mathcal C}\Rightarrow GF$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $\eta_2:2\to2$ transpose $0$ and $1$, and let $\eta_X=1_X$ for every set $X\ne2$. These are correctly typed components in the category [F2]. [F2, construct]

2.1 For $i:1\to2$, the left side of [F1] is $i\eta_1$, which sends $0$ to $0$, while the right side is $\eta_2i$, which sends $0$ to $1$. Thus the naturality equation fails. [step 1.1, F1]

3.1 The family is not a natural transformation and therefore cannot be a unit by [F3]. Correct component types alone do not suffice. [step 2.1, F3] ∎
