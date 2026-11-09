---
id: lem-author-ab0a6fc202cb-finite-derived-products
kind: lemma
title: Finite derived products and motivic coefficient operations
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-b747b28c359f-derived-finite-coefficients
dependency_roles:
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  lem-author-b747b28c359f-derived-finite-coefficients: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement
For a finite family $C_\alpha\in D(\mathbb Z)$ and $i\in\mathbb Z$,
$$H^i\!\left(\prod_\alpha C_\alpha\right)\cong\prod_\alpha H^i(C_\alpha).$$
For every positive integer $n$, writing $C/n=C\otimes^{\mathbf L}\mathbb Z/n$, one also has
$$\left(\prod_\alpha C_\alpha\right)/n\simeq\prod_\alpha(C_\alpha/n).$$
These equivalences are induced by the coordinate projections. Consequently a finite-product decomposition of derived complexes induces the corresponding decomposition on integral and finite-coefficient cohomology, and each such joint restriction map is injective. The empty product is zero throughout.

## Facts & Assumptions

**Given:** A finite family of derived complexes, an integer $i$, and $n>0$.

**Goal:** Prove compatibility with cohomology and derived finite coefficients.

[F1] Cohomology is functorial on $D(\mathbb Z)$. [[lem-author-b747b28c359f-derived-cohomology]]

[F2] Derived tensor with $\mathbb Z/n$ is the mapping cone of multiplication by $n$ and is functorial. [[lem-author-b747b28c359f-derived-finite-coefficients]]

## Proof

1.1 Represent each $C_\alpha$ by a cochain complex. Their finite degreewise direct sum is also their finite product. Products of finitely many abelian groups are exact: a coordinatewise surjection lifts a tuple by finitely many lifts, and kernels are computed coordinatewise. Hence this degreewise product preserves quasi-isomorphisms and represents the derived product. Its cycles and boundaries in every degree are the respective finite products of the coordinate cycles and boundaries, proving the first isomorphism. [F1, construct, algebra]

2.1 Multiplication by $n$ on this product is coordinatewise. Its cone has in degree $d$ the sum of the product in degree $d$ with that in degree $d+1$, with the usual coordinatewise cone differential. Finite sums commute with finite products, so this cone is canonically the finite product of the individual cones. By [F2] this is exactly the second displayed equivalence. [F2, step 1.1, algebra]

3.1 Apply [F1] and step 1.1 to step 2.1. An element whose every product coordinate is zero is zero, yielding the claimed detection for both coefficient choices. With no indices every complex and group displayed is zero, and the same conclusions hold. [F1, step 1.1, step 2.1] ∎
