---
id: lem-author-98a750efd0cc-filtration-image
kind: lemma
title: Images of filtration stages
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - math:def-subgroup
  - math:def-injection-surjection-bijection
  - math:def-group-homomorphism
  - math:lem-group-homomorphism-basic-properties
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  math:def-subgroup: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:lem-group-homomorphism-basic-properties: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement
Let $F$ be a coherently augmented decreasing filtration on a spectrum $E$. For integers $i,j$, the image of $\pi_iF^j\to\pi_iE$ is a subgroup of $\pi_iE$, and the same homomorphism, regarded as a map to this image, is surjective.

## Statement references

[[def-decreasing-filtered-spectrum]]

[[math:def-subgroup]]

[[math:def-injection-surjection-bijection]]

[[math:def-group-homomorphism]]

## Facts & Assumptions
**Given:** A spectrum $E$, its augmented decreasing filtration $F$, and integers $i,j$.

**Goal:** Establish the subgroup and surjectivity assertions.

[F1] [[def-decreasing-filtered-spectrum]] supplies the structure map $F^j\to E$ and the induced homomorphism of abelian homotopy groups.

[F2] [[math:def-subgroup]] defines a subgroup by containment of the identity and closure under the group operation and inverses; in additive notation these are zero, sums and negatives. Its group operation is inherited from the ambient group.

[F3] [[math:def-injection-surjection-bijection]] defines the image of a function $u:A\to B$ as $u[A]=\{u(x):x\in A\}$ and surjectivity as the existence of a preimage for every element of the codomain.

[F4] By [[math:def-group-homomorphism]], a homomorphism of abelian groups preserves addition. Assertions 1 and 2 of [[math:lem-group-homomorphism-basic-properties]] show that it also preserves zero and negatives.

## Proof
1.1 Write $u:\pi_iF^j\to\pi_iE$ for the homomorphism in [F1], and set $H=\{u(x):x\in\pi_iF^j\}$. By [F3], $H$ is its image. By [F4], $0=u(0)\in H$, $u(x)+u(y)=u(x+y)\in H$ and $-u(x)=u(-x)\in H$ for all $x,y\in\pi_iF^j$. Thus $H$ satisfies the three conditions in [F2] and is a subgroup of $\pi_iE$. [F1, F2, F3, F4, given]

2.1 Regard $u$ as a function $\pi_iF^j\to H$ with the same values; it is well-defined because each value belongs to $H$. It remains a homomorphism because $H$ has the inherited operation of [F2]. Every $h\in H$ has the form $u(x)$ for some $x\in\pi_iF^j$ by [F3]. This is precisely the surjectivity criterion of [F3], proving the second assertion together with the first assertion in step 1.1. [F2, F3, F4, step 1.1] ∎
