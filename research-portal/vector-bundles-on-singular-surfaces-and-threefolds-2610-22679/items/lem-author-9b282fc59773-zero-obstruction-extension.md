---
id: lem-author-9b282fc59773-zero-obstruction-extension
kind: lemma
title: Vanishing end groups kill the middle obstruction group
status: published
domain: mathematics
deps:
  - math:def-group
  - math:def-group-homomorphism
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-injection-surjection-bijection
  - math:def-function
  - math:lem-group-homomorphism-basic-properties
dependency_roles:
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-function: mathematical-premise
  math:lem-group-homomorphism-basic-properties: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $A,H,D$ be abelian groups and $f:A\to H$, $g:H\to D$ homomorphisms exact at $H$, meaning $\operatorname{im}f=\ker g$. If $A$ and $D$ are zero groups, then $H$ is a zero group. Every nonempty set that is a surjective image of the underlying set of $H$ then has exactly one element. No injectivity of $f$ or surjectivity of $g$ is required.

## Statement references
[[math:def-group]]

[[math:def-group-homomorphism]]

[[math:def-kernel-and-image-of-group-homomorphism]]

[[math:def-injection-surjection-bijection]]

[[math:def-function]]

## Facts & Assumptions
**Given:** The groups, exactness, and vanishing assumptions in the Statement.

**Goal:** Prove the zero-group and singleton assertions.

[F1] Use the group and homomorphism conventions of [[math:def-group]] and [[math:def-group-homomorphism]], with additive identity $0$. A zero group means a group whose underlying set is $\{0\}$.

[F2] The kernel and image are $\ker g=\{h\in H:g(h)=0\}$ and $\operatorname{im}f=\{f(a):a\in A\}$. [[math:def-kernel-and-image-of-group-homomorphism]]

[F3] A group homomorphism sends the identity to the identity; in particular, $f(0)=0$. [[math:lem-group-homomorphism-basic-properties]]

[F4] A function has exactly one value at each element of its domain. It is surjective precisely when its image equals its codomain. [[math:def-function]] [[math:def-injection-surjection-bijection]]

## Proof
1.1 Since $D$ has only its identity element, every $h\in H$ satisfies $g(h)=0$, hence $\ker g=H$. Since $A$ has only its identity and $f$ preserves identity, $\operatorname{im}f=\{0\}$. Exactness gives $H=\ker g=\operatorname{im}f=\{0\}$. [given, F1, F2, F3]

2.1 A function from the one-element underlying set of $H$ has image consisting of its single value. If it is surjective onto a nonempty set, that set equals this image and is a singleton. [step 1.1, F4] ∎
