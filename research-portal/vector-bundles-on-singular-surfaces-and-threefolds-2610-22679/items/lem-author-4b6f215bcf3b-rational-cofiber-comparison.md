---
id: lem-author-4b6f215bcf3b-rational-cofiber-comparison
kind: lemma
title: Rational cofiber implies finite-coefficient equivalence
status: published
domain: mathematics
deps:
  - lem-author-4b6f215bcf3b-rational-derived-quotient
  - lem-author-4b6f215bcf3b-quotient-cofiber
dependency_roles:
  lem-author-4b6f215bcf3b-rational-derived-quotient: mathematical-premise
  lem-author-4b6f215bcf3b-quotient-cofiber: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
Let $f:A\to B$ be a morphism in $D(\mathbb Z)$ whose cofiber is isomorphic in $D(\mathbb Z)$ to the underlying complex of a complex of $\mathbb Q$-vector spaces. For every positive integer $n$, $f\otimes_{\mathbb Z}^{\mathbf L}\mathbb Z/n$ is an isomorphism in $D(\mathbb Z)$, and consequently induces an isomorphism on $H^i$ for every integer $i$.

## Facts & Assumptions

**Given:** $f$ and $n$ as stated.

**Goal:** Prove the finite-coefficient equivalence and its cohomological consequence.

[F1] A rational complex has zero derived quotient by $n$. [[lem-author-4b6f215bcf3b-rational-derived-quotient]]

[F2] Taking the derived quotient by $n$ commutes with mapping cones. [[lem-author-4b6f215bcf3b-quotient-cofiber]]

## Proof

1.1 By [F1] and [F2], the mapping cone of $f\otimes^{\mathbf L}\mathbb Z/n$ is zero in $D(\mathbb Z)$, equivalently it is acyclic. [F1, F2, given]

2.1 The long exact cohomology sequence of the mapping cone, obtained from the degreewise split sequence $B\to\operatorname{Cone}(f)\to A[1]$, shows that a chain map with acyclic cone induces an isomorphism on every cohomology group. Thus the finite-coefficient map is a quasi-isomorphism and hence an isomorphism in $D(\mathbb Z)$. Applying $H^i$ gives the stated group isomorphism. [step 1.1] ∎
