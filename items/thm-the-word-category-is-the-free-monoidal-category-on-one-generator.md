---
id: thm-the-word-category-is-the-free-monoidal-category-on-one-generator
kind: theorem
title: "The word category is the free monoidal category on one generator"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-canonical-morphism-between-parenthesised-words, thm-mac-lane-coherence-in-the-canonical-map-form, def-the-category-of-binary-words, thm-the-category-of-binary-words-is-monoidal, def-lax-strong-and-strict-monoidal-functor]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2, Theorem 1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Let $W$ be the binary-word category and let $b$ be an object of a monoidal
category $\mathcal B$. Recursive evaluation of binary words at $b$ defines a
strong monoidal functor $T_b:W\to\mathcal B$ with $T_b((-))=b$ and
$T_b(e_0)=\mathbf 1_{\mathcal B}$; for the unique arrow between two words of
the same length, $T_b$ uses the canonical comparison isomorphism between the
corresponding parenthesised tensor powers of $b$. If $S:W\to\mathcal B$ is any
other strong monoidal functor with $S((-))=b$, then there is a unique
monoidal natural isomorphism $S\Rightarrow T_b$ whose component at $(-)$ is
$1_b$.

## Facts & Assumptions

**Given:** A monoidal category $\mathcal B$, an object $b\in\mathcal B$, and the monoidal category $W$ of binary words.

[L1] The objects of $W$ are binary words, and there is exactly one morphism between two words of the same length ([[def-the-category-of-binary-words]]).

[L2] The category $W$ is monoidal under binary concatenation with unit $e_0$ ([[thm-the-category-of-binary-words-is-monoidal]]).

[L3] A strong monoidal functor is a functor equipped with invertible tensor and unit structure maps ([[def-lax-strong-and-strict-monoidal-functor]]).

[L4] Coherence supplies a unique canonical isomorphism between any two parenthesisations of the same ordered tensor word ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

## Proof

**Proof technique:** direct.

1.1 Define $T_b$ recursively on objects by $T_b(e_0)=\mathbf 1_{\mathcal B}$, $T_b((-))=b$, and $T_b(v\square w)=T_b(v)\otimes T_b(w)$. If $u:v\to w$ is the unique morphism of $W$, then $v$ and $w$ have the same length, so [L4] gives a unique canonical isomorphism $T_b(v)\to T_b(w)$; define $T_b(u)$ to be that morphism. Because identities and composites in $W$ are themselves the unique arrows between equal-length words, uniqueness in [L4] makes $T_b$ a functor. [given, L1, L4, construct]

2.1 The recursive object formula already matches the tensor and unit of $W$, and the same canonical comparison maps from [L4] provide the invertible structural maps required by [L3]. Thus $T_b$ is a strong monoidal functor. [L2, L3, L4, step 1.1]

2.2 Let $S:W\to\mathcal B$ be another strong monoidal functor with $S((-))=b$. Build isomorphisms $\sigma_v:S(v)\to T_b(v)$ recursively: for $e_0$, use the inverse of the unit map of $S$; for $(-)$, use $1_b$; and for $v\square w$, use the inverse of the binary structure isomorphism of $S$ followed by $\sigma_v\otimes\sigma_w$. [L3, step 1.1, construct]

3.1 Since every morphism in $W$ is unique when it exists, the family $\sigma_v$ is automatically natural, and the same recursion forces compatibility with the monoidal structure maps. Uniqueness of the recursion makes $\sigma:S\Rightarrow T_b$ the unique monoidal natural isomorphism fixing the generator. [L1, L4, step 2.2] ∎
