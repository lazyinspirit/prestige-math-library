---
id: thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad
kind: theorem
title: "A monoid object in a small endofunctor category is exactly a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-monad, rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists, thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VI.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "E. Riehl, Category Theory in Context, Remark 5.1.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a small category. Then the following are equivalent for an
endofunctor $T:\mathcal C\to\mathcal C$:

1. $T$ is a monad on $\mathcal C$.
2. In the strict monoidal category $[\mathcal C,\mathcal C]$ under
   composition, $T$ is equipped with morphisms
   $$\eta:1_{\mathcal C}\Rightarrow T,\qquad \mu:T\circ T\Rightarrow T$$
   satisfying the associativity and unit equations for a monoid object.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and an endofunctor $T:\mathcal C\to\mathcal C$.

[L1] A monad on $\mathcal C$ is an endofunctor together with natural transformations $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T^2\Rightarrow T$ satisfying the monad associativity and unit equations ([[def-monad]]).

[L2] The phrase "monoid object in the endofunctor category" is used only when that category exists; in particular it is valid for a small source category ([[rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists]]).

[L3] For a small category, $[\mathcal C,\mathcal C]$ is strict monoidal under composition ([[thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], the endofunctors of $\mathcal C$ form a strict monoidal category whose tensor is composition and whose unit is $1_{\mathcal C}$. Thus a monoid-object structure on $T$ is exactly data $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T\circ T\Rightarrow T$ with the usual associative and unital diagrams, because the associator and unitors are identities. [given, L2, L3]

2.1 The equations described in step 1.1 are precisely $\mu\circ T\mu=\mu\circ\mu T$ and $\mu\circ T\eta=1_T=\mu\circ\eta T$, which are exactly the monad laws in [L1]. Hence every monoid object in $[\mathcal C,\mathcal C]$ is a monad. [step 1.1, L1]

2.2 Conversely, if $(T,\eta,\mu)$ is a monad, then [L1] gives exactly the same two diagrams, so the same data make $T$ a monoid object in $[\mathcal C,\mathcal C]$. [L1, step 1.1]

3.1 Therefore the two notions are equivalent for small $\mathcal C$. [step 2.1, step 2.2] ∎
