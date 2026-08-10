---
id: cex-functors-need-not-preserve-monomorphisms
kind: counterexample
title: "A functor need not preserve monomorphisms"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-functor-and-contravariant-functor, def-monomorphism-and-epimorphism, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The assertion that every functor preserves monomorphisms is false.

## Facts & Assumptions

**Given:** The walking-arrow category $\mathbf2=(0\xrightarrow{m}1)$ and $\mathbf{Set}$.

[L1] A functor preserves identities and composition ([[def-functor-and-contravariant-functor]]).

[L2] A monomorphism is left-cancellative ([[def-monomorphism-and-epimorphism]]).

[L3] Sets and functions form $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Counterexample

**Proof technique:** direct.

1.1 The only morphism of $\mathbf2$ with codomain $0$ is $1_0$. Thus any parallel $r,s$ with $mr=ms$ must both equal $1_0$, so $m$ is monic by [L2]. [L2]

1.2 Define a functor $F:\mathbf2\to\mathbf{Set}$ by $F(0)=\{0,1\}$, $F(1)=\{*\}$, and $F(m)$ the constant function. This assignment respects all possible identities and composites, so it is a functor. [L1, L3]

2.1 Let $r,s:\{*\}\to\{0,1\}$ select $0$ and $1$, respectively. Then $r\ne s$ but $F(m)r=F(m)s$, so $F(m)$ is not monic by [L2]. [step 1.2, L2]

3.1 The monomorphism $m$ of step 1.1 is sent by the functor $F$ to the nonmonomorphism of step 2.1. This is the required counterexample. [step 1.1, step 2.1] ∎
