---
id: lem-author-c5b0693f4fc3-top-torsion-bockstein
kind: lemma
title: Bockstein obstruction to prime torsion
status: published
domain: mathematics
deps:
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-derived-finite-coefficients
dependency_roles:
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  lem-author-b747b28c359f-derived-finite-coefficients: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement
For $C\in D(\mathbb Z)$ and a prime $\ell$, multiplication by $\ell$ on $H^6(C)$ is injective if and only if $H^5(C)\to H^5(C/\ell)$ is surjective. Here $C/\ell=C\otimes^{\mathbf L}\mathbb Z/\ell$ and the map is the canonical reduction. In particular, $H^5(C/\ell)=0$ suffices.

## Facts & Assumptions
[F1] [[lem-author-b747b28c359f-derived-finite-coefficients]] supplies the natural coefficient short exact sequence.

[F2] Use $D(\mathbb Z)=D(\operatorname{Ab})$, the derived category of cochain complexes of abelian groups, with the localization and standing size conventions of [[math:def-derived-category-of-an-abelian-category]]. For a cochain representative $A$ of $C$, $H^i(C)$ means $\ker(d_A^i)/\operatorname{im}(d_A^{i-1})$; its derived-category well-definedness and the canonical reduction are supplied by [F1].

## Proof
**Given:** $C$ and $\ell$ as stated, with the cochain and size conventions in [F2].

**Goal:** Prove the equivalence and sufficient vanishing.

1.1 Apply [F1] with $i=5$. The cokernel of the canonical reduction is $H^6(C)[\ell]$, the kernel of multiplication by $\ell$. [given, F1, F2]

2.1 That cokernel is zero precisely when reduction is surjective, equivalently when multiplication is injective. A zero target makes reduction surjective. [step 1.1] ∎
