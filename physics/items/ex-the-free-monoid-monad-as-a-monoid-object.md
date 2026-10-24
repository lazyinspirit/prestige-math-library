---
id: ex-the-free-monoid-monad-as-a-monoid-object
kind: example
title: "The free-monoid monad as a monoid object in the endofunctor category"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-free-monoid-monad-and-its-algebras-are-monoids, thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal S$ be the full subcategory of $\mathbf{Set}$ on the three sets
$\varnothing$, $1=\{\ast\}$, and $\mathbb N$. This category is small. The usual
free-monoid construction sends

$$\varnothing\longmapsto\{\varepsilon\}\cong1,\qquad 1\longmapsto1^*\cong\mathbb N,\qquad \mathbb N\longmapsto\mathbb N^*\cong\mathbb N,$$

where the first bijection sends the empty word to $\ast$, the second sends a
word on one letter to its length, and the third is any fixed bijection. Denote
these chosen bijections by $b_X:X^*\to T(X)$ for $X\in\mathcal S$. Define
$$T(f):=b_Y\circ f^*\circ b_X^{-1}:T(X)\longrightarrow T(Y)$$
for $f:X\to Y$. This makes $T:\mathcal S\to\mathcal S$ an endofunctor. Its
transported unit has component
$$\eta'_X=b_X\circ\eta_X:X\longrightarrow T(X),$$
and its transported multiplication has component
$$\mu'_X=b_X\circ\mu_X\circ(b_X^{-1})^*\circ b_{T(X)}^{-1}:T^2(X)\longrightarrow T(X).$$
Thus these maps correspond to one-letter insertion and word concatenation
under the chosen codings; they are not literally those word maps on the
representative set $\mathbb N$.

## Facts & Assumptions

**Given:** The transported free-monoid endofunctor on the small category $\mathcal S$.

[L1] The free-monoid construction on $\mathbf{Set}$ is a genuine monad ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

[L2] For a small category, monads are exactly monoid objects in the endofunctor category ([[thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the free-monoid construction on $\mathbf{Set}$ comes with unit $\eta$ and multiplication $\mu$ satisfying the monad equations. The formulas in the Example conjugate the functor action and structure maps by the bijections $b_X$, so functoriality, naturality, and the monad equations are preserved. Hence $(T,\eta',\mu')$ is a monad on $\mathcal S$. [L1, algebra]

2.1 Because $\mathcal S$ has only three objects, it is small, so [L2] applies to the monad from step 1.1. Therefore the data $(T,\eta',\mu')$ are exactly the structure maps of a monoid object in the endofunctor category $[\mathcal S,\mathcal S]$. [step 1.1, L2]

3.1 Therefore this transported free-monoid monad is a concrete example of a monoid object in a small endofunctor category. [step 2.1] ∎
