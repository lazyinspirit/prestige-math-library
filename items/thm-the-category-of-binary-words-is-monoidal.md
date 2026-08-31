---
id: thm-the-category-of-binary-words-is-monoidal
kind: theorem
title: "The category of binary words is monoidal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-category-of-binary-words, def-monoidal-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

The category $W$ of [[def-the-category-of-binary-words]] is monoidal with tensor
product $v\otimes w:=v\square w$, unit object $e_0$, and structural
isomorphisms given by the unique arrows between binary words of the same
length.

## Facts & Assumptions

**Given:** The category $W$ of binary words.

[L1] In $W$, there is exactly one morphism $v\to w$ when $|v|=|w|$, and none otherwise ([[def-the-category-of-binary-words]]).

[L2] A monoidal category needs a bifunctor, a unit object, natural isomorphisms $\alpha,\lambda,\rho$, and the pentagon and triangle identities ([[def-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 If $f:v\to v'$ and $g:w\to w'$ exist in $W$, then $|v|=|v'|$ and $|w|=|w'|$, so $|v\square w|=|v'\square w'|$. Define $f\otimes g$ to be the unique morphism $v\square w\to v'\square w'$. Because all such morphisms are unique when they exist, this tensor preserves identities and composition automatically. [given, L1, L2]

1.2 For words $u,v,w$, the source and target of
$$((u\square v)\square w)\longrightarrow u\square(v\square w),\qquad e_0\square u\longrightarrow u,\qquad u\square e_0\longrightarrow u$$
have the same lengths, so [L1] gives unique arrows $\alpha_{u,v,w}$, $\lambda_u$, and $\rho_u$. Their reverse arrows also exist uniquely, so these are isomorphisms. [L1, construct]

2.1 The two sides of the pentagon are morphisms in $W$ from one fourfold word to another of length $|u|+|v|+|w|+|z|$. By [L1] there is only one such morphism, so the pentagon commutes. The same uniqueness argument gives the triangle identity. [step 1.2, L1]

3.1 Steps 1.1-2.1 supply exactly the data required in [L2], so $W$ is monoidal. [L2, step 1.1, step 2.1] ∎
