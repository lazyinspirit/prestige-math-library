---
id: ex-two-singletons-are-canonically-isomorphic-representing-objects
kind: example
title: 'Two singleton sets give canonically isomorphic representations of the identity functor on $\mathbf{Set}$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-presheaf-representable-functor-and-representation,
       thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism,
       prop-sets-and-functions-form-category-set, def-function,
       lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 2.1.5(i) and Corollary 2.3.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For distinct sets $s_0$ and $s_1$, the singleton sets $S_0=\{s_0\}$ and $S_1=\{s_1\}$
both represent the identity functor on $\mathbf{Set}$. Their universal elements
are $s_0\in S_0$ and $s_1\in S_1$, and the unique function

$$i:S_0\longrightarrow S_1,\qquad i(s_0)=s_1,$$

is the canonical isomorphism of these representations.

## Facts & Assumptions

**Given:** The category $\mathbf{Set}$, the singletons $S_0,S_1$, and its identity functor.

[F1] Sets and functions form a category under ordinary identity functions and composition ([[prop-sets-and-functions-form-category-set]]).

[F2] A covariant representation of $F$ is a natural isomorphism $\mathbf{Set}(R,-)\cong F$ ([[def-presheaf-representable-functor-and-representation]]).

[L1] Two covariant universal elements for the same functor have a unique isomorphism $i$ satisfying $F(i)(u)=u'$ ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

[F3] A function assigns exactly one value to each domain element, and two functions with the same domain and codomain are equal exactly when their values agree everywhere ([[def-function]], [[lem-two-functions-are-equal-exactly-when-they-agree-at-every-point]]).

## Verification

**Proof technique:** constructive.

1.1 For $k\in\{0,1\}$ and every set $X$, define $E^k_X:\mathbf{Set}(S_k,X)\to X$ by $E^k_X(f)=f(s_k)$. Its inverse sends $x\in X$ to the function $S_k\to X$ with value $x$ at $s_k$. [F3, construct]

2.1 The two formulas in step 1.1 are inverse by [F3]. If $g:X\to Y$, then $E^k_Y(g\circ f)=g(E^k_X(f))$, so the bijections are natural by [F1]. [step 1.1, F1, F3]

3.1 By [F2], both $S_0$ and $S_1$ represent the identity functor; their universal elements are the values of the identity functions, namely $s_0$ and $s_1$. The conclusion remains valid at $X=\varnothing$, where both sides of each component bijection are empty. [step 1.1, step 2.1, F2]

4.1 The function $i:S_0\to S_1$ with $i(s_0)=s_1$ carries the first universal element to the second. By [L1], it is the unique compatible isomorphism; explicitly its inverse is the unique map $S_1\to S_0$. [step 3.1, L1, F3]

5.1 Thus the word canonical refers to compatibility with the chosen universal points, not merely to the fact that the underlying singleton sets happen to be isomorphic. [step 4.1, discharge-construct] ∎
