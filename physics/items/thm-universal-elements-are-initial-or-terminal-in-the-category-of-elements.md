---
id: thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements
kind: theorem
title: "Universal elements are initial in a covariant category of elements and terminal in a presheaf category of elements"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-elements-and-universal-factorisations,
       def-category-of-elements, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 2.4.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small.

1. For $F:\mathcal C\to\mathbf{Set}$, a pair $(R,u)$ is a universal element
   if and only if $(R,u)$ is initial in $\int F$.
2. For $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$, a pair $(R,u)$ is a
   universal element if and only if $(R,u)$ is terminal in $\int P$.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and either a functor $F:\mathcal C\to\mathbf{Set}$ or a presheaf $P$ with the indicated pair $(R,u)$.

[L1] Covariant universality says that for every $(c,x)$ there is a unique $f:R\to c$ with $F(f)(u)=x$; presheaf universality says there is a unique $f:c\to R$ with $P(f)(u)=x$ ([[thm-universal-elements-and-universal-factorisations]]).

[F1] In $\int F$, a morphism $(R,u)\to(c,x)$ is an $f:R\to c$ satisfying $F(f)(u)=x$; in $\int P$, a morphism $(c,x)\to(R,u)$ is an $f:c\to R$ satisfying $x=P(f)(u)$ ([[def-category-of-elements]]).

[F2] An object is initial when it has exactly one morphism to every object and terminal when it has exactly one morphism from every object ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the morphisms $(R,u)\to(c,x)$ in $\int F$ are exactly the morphisms counted by the covariant condition in [L1]. [L1, F1]

1.2 By [F1], the morphisms $(c,x)\to(R,u)$ in $\int P$ are exactly the morphisms counted by the presheaf condition in [L1]. [L1, F1]

2.1 Thus that condition holds for all $(c,x)$ if and only if $(R,u)$ has exactly one morphism to each object of $\int F$, which by [F2] is initiality. [step 1.1, F2]

3.1 Thus that condition holds for all $(c,x)$ if and only if $(R,u)$ has exactly one morphism from each object of $\int P$, which by [F2] is terminality. [step 1.2, F2] ∎
