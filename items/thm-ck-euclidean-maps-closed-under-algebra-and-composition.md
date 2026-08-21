---
id: thm-ck-euclidean-maps-closed-under-algebra-and-composition
kind: theorem
title: "$C^k$ Euclidean maps are closed under componentwise algebra and composition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes, thm-continuous-partial-derivatives-imply-total-differentiability, thm-total-derivative-computes-directional-and-partial-derivatives, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §§8.5–8.6"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $k\in\mathbb N$. Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$. Scalar multiples are included among the finite componentwise operations. The assertions remain valid on an empty open domain.

## Facts & Assumptions

**Given:** Open Euclidean domains and maps for which the displayed sums, products, scalar multiples, or composites are defined. We use induction on derivative order ([[thm-induction-principle]]).

[F1] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] If $f$ is totally differentiable at $a$ and $g$ is totally differentiable at $f(a)$, then $g\circ f$ is totally differentiable at $a$ and $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] For differentiable real functions, sums and scalar multiples are differentiable with the expected derivatives, and $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$ ([[thm-algebra-of-derivatives]]).

[L3] If every first partial derivative exists near a point and is continuous there, then the map is totally differentiable there and its total derivative has matrix equal to its Jacobian ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] Finite sums, products, and scalar multiples of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]), and a composite of continuous maps between topological spaces is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L5] Total differentiability gives every directional and partial derivative by applying the total derivative to the corresponding direction vector ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** induction.

1.1 At order $k=0$, [F1] reduces the assertions to scalar component functions, and [L4] supplies closure under the stated operations; on an empty domain all these assertions are vacuous. [F1, L4, given, base]

1.2 Fix $r\in\mathbb N$ and assume that all the closure assertions hold through order $r$. [ih]

2.1 Consider maps of class $C^{r+1}$. For a sum, scalar multiple, or componentwise product, [L2] on each coordinate line expresses every first partial derivative as a finite sum of products of $C^r$ functions. For a composite, [L3] supplies total differentiability, [L1] gives its total derivative, and [L5] identifies the first partials with the columns of that derivative; hence every first partial is a finite sum of products of first partials of the factors. The hypothesis in step 1.2 makes all these first partials $C^r$, so [F1] makes the resulting maps $C^{r+1}$. Together with the base case, this proves the result through every finite $k$. [step 1.1, step 1.2, F1, L1, L2, L3, L5, given, algebra, discharge-induction] ∎
