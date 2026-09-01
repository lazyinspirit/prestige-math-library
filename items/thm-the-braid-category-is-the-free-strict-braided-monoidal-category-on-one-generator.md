---
id: thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator
kind: theorem
title: "The braid category is the free strict braided monoidal category on one generator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braided-monoidal-functor, def-the-braid-category, thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation, thm-von-dyck]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $\mathcal C$ be a strict braided monoidal category and let $X$ be an
object of $\mathcal C$. Then there is a unique strict braided monoidal functor

$$F_X:\mathcal B\longrightarrow\mathcal C$$

from the braid category $\mathcal B$ such that $F_X(1)=X$. Thus $\mathcal B$
is the free strict braided monoidal category on one generator.

## Facts & Assumptions

**Given:** A strict braided monoidal category $\mathcal C$ and an object $X\in\mathcal C$.

[L1] A braided monoidal functor is determined by its action on objects and by compatibility with the braidings and tensor products ([[def-braided-monoidal-functor]]).

[L2] The braid category has objects the natural numbers and endomorphism groups $B_n$, with tensor product given by addition and juxtaposition ([[def-the-braid-category]]).

[L3] In a strict braided monoidal category, the local braidings satisfy the Yang-Baxter equation ([[thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation]]).

[L4] A map of generators satisfying the relators extends uniquely from a presented group ([[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 Define $F_X(n):=X^{\otimes n}$ on objects, with $F_X(0):=\mathbf 1$. For each generator $\sigma_i\in B_n$, define $F_X(\sigma_i)$ to be the morphism
$$1_X^{\otimes(i-1)}\otimes c_{X,X}\otimes1_X^{\otimes(n-i-1)}:X^{\otimes n}\to X^{\otimes n},$$
where the braiding acts only on the $i$th and $(i+1)$st tensor factors. [given, L2, construct]

2.1 By [L3], the neighboring generators from step 1.1 satisfy the braid relation. Local braidings on disjoint tensor factors commute because in a strict monoidal category they act on separate coordinates. Therefore the Artin relations of $B_n$ hold, and [L4] extends the assignment of step 1.1 uniquely to a homomorphism $B_n\to\operatorname{Aut}(X^{\otimes n})$ for every $n$. [L3, L4, step 1.1, algebra]

3.1 The family from step 2.1 defines a functor $\mathcal B\to\mathcal C$ because morphisms exist only between equal objects in $\mathcal B$, and group multiplication in each $B_n$ is respected by the constructed homomorphism. By construction $F_X(m+n)=F_X(m)\otimes F_X(n)$ on objects, the tensor of braids is sent to juxtaposition of local braidings, and the standard braiding $\beta_{m,n}$ of $\mathcal B$ is sent to the corresponding block braiding in $\mathcal C$. Hence $F_X$ is strict braided monoidal. [L1, L2, step 1.1, step 2.1, algebra]

4.1 Any strict braided monoidal functor $\mathcal B\to\mathcal C$ sending $1$ to $X$ must send $n=1^{\otimes n}$ to $X^{\otimes n}$ and each generator $\sigma_i$ to the local braiding on the $i$th and $(i+1)$st factors. Since the $\sigma_i$ generate every $B_n$, such a functor must equal $F_X$. Therefore $F_X$ is unique. [L1, L2, step 3.1, algebra] ∎
