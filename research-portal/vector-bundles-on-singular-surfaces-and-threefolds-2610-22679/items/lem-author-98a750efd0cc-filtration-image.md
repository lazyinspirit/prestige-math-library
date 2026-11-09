---
id: lem-author-98a750efd0cc-filtration-image
kind: lemma
title: Images of filtration stages
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
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

## Facts & Assumptions
**Given:** A spectrum $E$, its augmented decreasing filtration $F$, and integers $i,j$.

**Goal:** Establish the subgroup and surjectivity assertions.

[F1] [[def-decreasing-filtered-spectrum]] supplies the structure map $F^j\to E$ and the induced homomorphism of abelian homotopy groups.

## Proof
1.1 Write $u$ for the homomorphism in [F1]. Its image consists precisely of the elements $u(x)$ with $x\in\pi_iF^j$. It contains zero and is closed under sums and negatives because $u$ is a homomorphism. [F1, given]

2.1 Every element of this image has a preimage by its definition. Thus $u$, with codomain restricted to its image, is surjective. This proves both assertions. [step 1.1] ∎
