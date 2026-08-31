---
id: cor-coherence-follows-from-freeness
kind: corollary
title: "The free-word formulation implies the canonical-map formulation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [def-the-category-of-binary-words, thm-the-word-category-is-the-free-monoidal-category-on-one-generator]
proof_strategy: direct
verification:
  audited: 2026-08-31
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

In the one-generator word formalism, the free-word theorem implies the
canonical-map form of coherence: the unique arrow of $W$ between two binary
words of the same length is carried by evaluation to the unique canonical
comparison map between the corresponding parenthesised tensor powers of the
chosen object.

## Facts & Assumptions

**Given:** Two binary words $v,w$ of the same length and an object $b$ of a monoidal category.

[L1] In the binary-word category $W$, there is exactly one morphism between two words of the same length ([[def-the-category-of-binary-words]]).

[L2] Recursive evaluation at $b$ defines a strong monoidal functor $T_b:W\to\mathcal B$, and on the unique arrow between equal-length words it uses the canonical comparison isomorphism between the corresponding parenthesised tensor powers of $b$ ([[thm-the-word-category-is-the-free-monoidal-category-on-one-generator]]).

## Proof

**Proof technique:** direct.

1.1 Because $v$ and $w$ have the same length, [L1] gives a unique arrow $u_{v,w}:v\to w$ in $W$. [given, L1]

2.1 By [L2], the image $T_b(u_{v,w})$ is exactly the canonical comparison isomorphism between the two parenthesised tensor powers represented by $v$ and $w$. [L2, step 1.1]

3.1 Therefore the unique formal arrow of $W$ between $v$ and $w$ is carried by evaluation to the canonical comparison map between the corresponding tensor powers of $b$. This is precisely the canonical-map formulation in the one-generator setting. [step 1.1, step 2.1]

4.1 Thus the free-word presentation recovers the canonical-map presentation of coherence for tensor powers of one chosen object. [step 3.1] ∎
