---
id: lem-author-9b282fc59773-zero-obstruction-extension
kind: lemma
title: Vanishing end groups kill the middle obstruction group
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Theorem 1, p. 2; §6, pp. 22–26
dependency_level: 0
---

## Statement
Let $A,H,D$ be abelian groups and $f:A\to H$, $g:H\to D$ homomorphisms exact at $H$, meaning $\operatorname{im}f=\ker g$. If $A$ and $D$ are zero groups, then $H$ is a zero group. Every nonempty set that is a surjective image of the underlying set of $H$ then has exactly one element. No injectivity of $f$ or surjectivity of $g$ is required.

## Facts & Assumptions
**Given:** The groups, exactness, and vanishing assumptions in the Statement.

**Goal:** Prove the zero-group and singleton assertions.

## Proof
1.1 Since $D$ has only its identity element, every $h\in H$ satisfies $g(h)=0$, hence $\ker g=H$. Since $A$ has only its identity and $f$ preserves identity, $\operatorname{im}f=\{0\}$. Exactness gives $H=\ker g=\operatorname{im}f=\{0\}$. [given, algebra]

2.1 A function from the one-element underlying set of $H$ has image consisting of its single value. If it is surjective onto a nonempty set, that set equals this image and is a singleton. [step 1.1, given] ∎
