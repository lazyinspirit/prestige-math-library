---
id: cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order
kind: corollary
title: "If $\\operatorname{char} k \\nmid |G|$, then $k[G]$ is a semisimple ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-completely-reducible-representation, def-trivial-regular-and-permutation-representations, cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, def-semisimple-ring, cor-dimension-of-a-finite-group-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1(i)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 1.2.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be a field with
$\operatorname{char} k \nmid |G|$. Then the group algebra $k[G]$ is a
semisimple ring.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$ with $\operatorname{char} k \nmid |G|$.

[L1] If $G$ is finite, then $\dim_k k[G]=|G|$ ([[cor-dimension-of-a-finite-group-algebra]]).

[L2] The regular representation of $G$ over $k$ is the action on $k[G]$ by left multiplication, namely $g \cdot x=[g]x$ ([[def-trivial-regular-and-permutation-representations]]).

[L3] Under the characteristic hypothesis, every finite-dimensional representation of $G$ over $k$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[L4] A representation is completely reducible exactly when its underlying space is an internal direct sum of irreducible subrepresentations ([[def-completely-reducible-representation]]).

[L5] Under the dictionary, irreducible representations are exactly simple left $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L6] A unital ring is semisimple exactly when its left regular module is semisimple ([[def-semisimple-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the regular representation of $G$ on $k[G]$ is finite-dimensional. Therefore [L3] makes it completely reducible. [L1, L2, L3, given]

2.1 Expanding that term with [L4], the left regular representation is an internal direct sum of irreducible subrepresentations. By [L5], those are exactly simple left $k[G]$-submodules. So the left regular module ${}_{k[G]}k[G]$ is an internal direct sum of simple submodules. [step 1.1, L4, L5]

3.1 By [L6], that is exactly the definition that $k[G]$ is a semisimple ring. [step 2.1, L6] ∎
