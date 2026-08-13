---
id: thm-products-of-injective-modules
kind: theorem
title: "Products of injective modules are injective, with the exact choice boundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injective-module, def-direct-sum-of-a-family-of-modules, def-axiom-of-choice, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. An arbitrary direct product of injective left $R$-modules is injective. Conversely, each factor is a direct summand of the product, so if a product is injective, every factor is injective.

For a finite product, finite choice suffices; the empty product is the zero module and is injective.

## Facts & Assumptions

**Given:** A family $(I_j)_{j\in J}$ of left $R$-modules.

[F1] Injectivity is extension of every map along a monomorphism ([[def-injective-module]]).

[F2] Products have coordinatewise operations; the empty product is the zero module ([[def-direct-sum-of-a-family-of-modules]]).

[F3] AC chooses from arbitrary families of nonempty sets, while finite choice handles a listed finite family in ZF ([[def-axiom-of-choice]], [[lem-finite-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Suppose every $I_j$ is injective. Given a monomorphism $u:A\to B$ and $f:A\to\prod_j I_j$, let $f_j$ be the $j$-th coordinate map. For each $j$, [F1] gives a nonempty set of extensions $\tilde f_j:B\to I_j$. [assume-hyp, F1, F2]

1.2 Conversely, suppose the product is injective and fix $j\in J$. Given a monomorphism $u:A\to B$ and $f:A\to I_j$, compose $f$ with the coordinate inclusion $I_j\to\prod_kI_k$, extend to $B$ using injectivity of the product, and postcompose with the $j$-th projection. The result extends $f$, so $I_j$ is injective by [F1]. [F1, F2, construct]

2.1 Use [F3] to choose one extension for every $j$; finite choice suffices for finite $J$, and no choice is needed when $J=\varnothing$. The coordinate formula $\tilde f(b)=(\tilde f_j(b))_j$ defines a homomorphism $B\to\prod_jI_j$ extending $f$. [step 1.1, F2, F3, choose, construct]

3.1 Thus the product is injective by [F1]. [step 2.1, F1]

4.1 Steps 1.1, 2.1, and 3.1 prove the product theorem with its choice boundary, and step 1.2 proves the converse. [step 1.1, step 2.1, step 3.1, step 1.2, discharge-construct] ∎
