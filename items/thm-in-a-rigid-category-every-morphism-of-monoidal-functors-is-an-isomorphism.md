---
id: thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism
kind: theorem
title: "In a rigid category every morphism of monoidal functors is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rigid-object-and-rigid-monoidal-category, def-monoidal-natural-transformation, thm-duals-are-unique-up-to-a-unique-compatible-isomorphism]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 2.10.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $F,G:\mathcal C\to\mathcal D$ be strong monoidal functors from a rigid
monoidal category $\mathcal C$ to a monoidal category $\mathcal D$. Then every
monoidal natural transformation $\eta:F\Rightarrow G$ is a natural isomorphism.

## Facts & Assumptions

**Given:** A rigid monoidal category $\mathcal C$, a monoidal category $\mathcal D$, strong monoidal functors $F,G:\mathcal C\to\mathcal D$, and a monoidal natural transformation $\eta:F\Rightarrow G$.

[L1] Every object of $\mathcal C$ has chosen duals because $\mathcal C$ is rigid ([[def-rigid-object-and-rigid-monoidal-category]]).

[L2] A monoidal natural transformation respects both the tensor structure and the unit structure ([[def-monoidal-natural-transformation]]).

[L4] Compatible maps between two left duals of the same object are unique ([[thm-duals-are-unique-up-to-a-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathcal C$ is rigid, choose for each object $X$ a left dual $X^\vee$. Since $F$ and $G$ are strong monoidal, they send the duality maps of $X$ to duality maps of $F(X)$ and $G(X)$: after transporting the images of $\operatorname{ev}_X$ and $\operatorname{coev}_X$ across the strong monoidal structure isomorphisms, $F(X^\vee)$ is a left dual of $F(X)$ and $G(X^\vee)$ is a left dual of $G(X)$. [given, L1, construct]

2.1 Define $\xi_X:G(X)\to F(X)$ using the transported duality maps by the composite $$G(X)\cong\mathbf1\otimes G(X)\xrightarrow{\operatorname{coev}_{F(X)}\otimes1}F(X)\otimes F(X^\vee)\otimes G(X)\xrightarrow{1\otimes\eta_{X^\vee}\otimes1}F(X)\otimes G(X^\vee)\otimes G(X)\xrightarrow{1\otimes\operatorname{ev}_{G(X)}}F(X)\otimes\mathbf1\cong F(X).$$ This construction uses $F(X^\vee)$ and $G(X^\vee)$ as left duals of $F(X)$ and $G(X)$ from step 1.1; it does not identify a left dual of $F(X^\vee)$ with $F(X)$. [step 1.1, L2, construct]

3.1 Expand $\xi_X\eta_X$ using step 2.1. Naturality of $\eta$, together with its tensor and unit compatibility from [L2], moves $\eta_X$ across the coevaluation and evaluation; the remaining composite is the zig-zag identity for the dual pair $F(X^\vee),F(X)$. Hence $\xi_X\eta_X=1_{F(X)}$. The mirrored calculation uses the zig-zag identity for $G(X^\vee),G(X)$ and gives $\eta_X\xi_X=1_{G(X)}$. Thus every component $\eta_X$ is an isomorphism, so $\eta$ is a natural isomorphism. [step 1.1, step 2.1, L2, L4] ∎
