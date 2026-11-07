---
id: lem-class-group-three-torsion-surjections
kind: lemma
title: "Surjections to a group of order three count nonidentity 3-torsion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-group, def-group-homomorphism, def-group-power, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, the identity #Sur(A, Z/3Z)=|A[3]|−1"
verification: {}
---

## Statement

For every finite abelian group $G$, the number of surjective group homomorphisms $G\to\mathbb Z/3\mathbb Z$ is $|G[3]|-1$, where $G[3]=\{g\in G:3g=0\}$.

## Statement references

[[def-group]]

[[def-group-homomorphism]]

[[def-group-power]]

[[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[A. Landesman, *Distributions of Class Groups of Global Fields*, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)

## Facts & Assumptions

**Given:** A finite abelian group $G$, written additively.

[F1] A finite abelian group is a direct product of cyclic groups, with each cyclic factor's order a prime power. [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[F2] A group homomorphism preserves the group operation; on a cyclic group of order $n$, a homomorphism to $\mathbb Z/3\mathbb Z$ is determined by the image of a generator, which must be killed by $n$. [[def-group]] [[def-group-homomorphism]]

## Proof
1.1 Write $G$ as a finite direct product of cyclic groups $C_{n_i}$ using [F1]. If $3\nmid n_i$, the factor has no nonzero element killed by $3$ and admits only the zero homomorphism to $\mathbb Z/3\mathbb Z$. If $3\mid n_i$, its subgroup killed by $3$ has order $3$, and its generator has exactly three possible images, so it admits exactly three homomorphisms to $\mathbb Z/3\mathbb Z$. Products of factors give $|\operatorname{Hom}(G,\mathbb Z/3\mathbb Z)|=|G[3]|$. [F1, F2, algebra]

2.1 The zero homomorphism is not surjective. Every nonzero homomorphism to the group of prime order $3$ has nontrivial image, hence has image the whole target and is surjective. Removing the zero map from the count in step 1.1 gives $|G[3]|-1$. [step 1.1, algebra] ∎
