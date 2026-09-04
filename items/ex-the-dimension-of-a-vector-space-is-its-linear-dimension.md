---
id: ex-the-dimension-of-a-vector-space-is-its-linear-dimension
kind: example
title: "The categorical dimension of a vector space is the scalar image of its linear dimension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-dimension-of-an-object-relative-to-a-pivotal-structure, def-dimension, thm-finite-dimensional-vector-spaces-are-rigid]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 4.7.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

Let $k$ be a field. For finite-dimensional $k$-vector spaces with the canonical
pivotal structure, the categorical dimension is the image of the usual linear
dimension in $k$.

## Facts & Assumptions

**Given:** A field $k$ and a finite-dimensional $k$-vector space $V$.

[L1] Categorical dimension is the trace of the chosen pivotal comparison
([[def-the-dimension-of-an-object-relative-to-a-pivotal-structure]]).

[L2] The ordinary linear dimension is the size of a basis
([[def-dimension]]).

[L3] Finite-dimensional $k$-vector spaces are rigid with the usual duality
([[thm-finite-dimensional-vector-spaces-are-rigid]]).

## Verification

**Proof technique:** direct.

1.1 Let $V$ have basis $(v_1,\dots,v_n)$. With the usual duality from [L3], the canonical pivotal structure has component $J_V:V\to V^{**}$ given by $J_V(v)(f)=f(v)$, and $\dim_{J}(V)$ is by definition the categorical trace of $J_V$ [[def-the-dimension-of-an-object-relative-to-a-pivotal-structure]]. [given, L1, L3]

2.1 Using the same basis-and-dual-basis computation as for categorical trace, $$\dim_{J}(V)=\sum_{i=1}^n J_V(v_i)(v_i^*)=\sum_{i=1}^n v_i^*(v_i)=n\cdot1_k\in k.$$ [step 1.1, algebra]

3.1 The natural number $n$ is the ordinary dimension of $V$ by [[def-dimension]]. Hence the categorical dimension is its scalar image $n\cdot1_k$ in $\operatorname{End}(k)\cong k$. In positive characteristic this scalar can differ from $n$ as a natural number; for example, a $p$-dimensional space has categorical dimension $0\in k$ when $\operatorname{char}k=p$. [step 2.1, L2] ∎
