---
id: thm-a-category-with-finite-products-is-monoidal
kind: theorem
title: "A category with finite products is monoidal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monoidal-category, def-products-and-coproducts, def-initial-terminal-and-zero-object, def-natural-isomorphism, def-product-category]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

If a category $\mathcal C$ has binary products and a terminal object, then
$\mathcal C$ is monoidal with tensor product $\times$ and unit object any
terminal object $1$. Dually, if $\mathcal C$ has binary coproducts and an
initial object, then $\mathcal C$ is monoidal with tensor product $\sqcup$ and
unit object any initial object.

## Facts & Assumptions

**Given:** A category $\mathcal C$ with binary products and a terminal object $1$.

[L1] A binary product $X\times Y$ represents pairs of arrows into $X$ and $Y$, and a one-object product is canonically that object ([[def-products-and-coproducts]]).

[L2] A terminal object receives a unique morphism from every object ([[def-initial-terminal-and-zero-object]]).

[L3] A monoidal category needs a bifunctor on $\mathcal C\times\mathcal C$, natural isomorphisms $\alpha,\lambda,\rho$, and the pentagon and triangle equations ([[def-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\otimes Y:=X\times Y$ and let the unit object be $1$. On morphisms, define $(f,g)\mapsto f\times g$ by the universal property of the binary product. Because product pairings are unique, identities and compositions are preserved componentwise, so $\times:\mathcal C\times\mathcal C\to\mathcal C$ is a bifunctor. [given, L1, L2, L3]

1.2 Let $\lambda_X:(1\times X)\to X$ and $\rho_X:(X\times1)\to X$ be the canonical product projections. If $!_X:X\to1$ is the unique map from [L2], then the inverse of $\lambda_X$ is the pairing $\langle !_X,1_X\rangle:X\to1\times X$, and the inverse of $\rho_X$ is $\langle 1_X,!_X\rangle:X\to X\times1$. Hence $\lambda$ and $\rho$ are natural isomorphisms. [L1, L2, construct]

2.1 For objects $X,Y,Z$, let $\alpha_{X,Y,Z}:((X\times Y)\times Z)\to X\times(Y\times Z)$ be the unique arrow whose three composite projections are the obvious first, second, and third projections. Define $\alpha^{-1}_{X,Y,Z}$ similarly. By the same uniqueness argument, these arrows are inverse and natural. [step 1.1, L1, construct]

3.1 Both sides of the pentagon are arrows from $(((W\times X)\times Y)\times Z)$ to $W\times(X\times(Y\times Z))$. They have the same four composites with the terminally iterated product projections, so [L1] makes them equal. The same argument on the two projections from $(1\times(X\times Y))$ to $X$ and $Y$ shows the triangle equation. [step 2.1, step 1.2, L1, algebra]

4.1 Therefore $(\mathcal C,\times,1,\alpha,\lambda,\rho)$ is a monoidal category. The coproduct statement is proved by the same construction with pairings replaced by copairings and terminal replaced by initial, using the dual clauses already present in [[def-products-and-coproducts]] and [[def-initial-terminal-and-zero-object]]. [step 3.1, L1, L2, L3] ∎
