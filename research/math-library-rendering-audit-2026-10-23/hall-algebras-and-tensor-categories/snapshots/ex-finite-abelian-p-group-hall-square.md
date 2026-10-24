---
id: ex-finite-abelian-p-group-hall-square
kind: example
title: "The Hall square in finite abelian p-groups"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - def-abelian-category
  - thm-abelian-groups-form-an-abelian-category
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Fix a prime $p$, and let $\mathcal P_p$ be the category of finite abelian
$p$-groups. For a small model, take all abelian group laws on standard sets
of cardinality $p^n$, for $n\ge0$, and all group homomorphisms. Write
$C_{p^a}=\mathbb Z/p^a\mathbb Z$ and $C_p=C_{p^1}$. In the untwisted
Hall product,
$$ [C_p]*[C_p]=(p+1)[C_p\oplus C_p]+[C_{p^2}]. $$
This example uses the ordinary counting product and needs no
$\mathbb F_q$-linear structure.

## Facts & Assumptions

**Given:** A prime $p$, the category $\mathcal P_p$, and the untwisted Hall
product.

[F1] The category is abelian precisely when it is additive and has kernels
and cokernels with the canonical coimage-to-image maps isomorphisms
([[def-abelian-category]]); the ambient category of abelian groups is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[F2] Hall coefficients count subobjects with the prescribed subobject and
quotient isomorphism types ([[def-untwisted-hall-algebra]]).

[F3] A small finitary category has finite Hom and Yoneda extension sets
([[def-hall-finitary-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 Kernels and cokernels of homomorphisms between finite abelian $p$-groups are finite abelian $p$-groups, and finite direct sums remain finite abelian $p$-groups. Transporting each kernel or cokernel along a bijection of its underlying finite set with a standard set gives the required object in the chosen model, with the same universal property. Thus the model is abelian using [F1]. For fixed finite groups $M,N$, Hom is a finite set. Any short exact sequence with endpoints $M,N$ has a middle group of cardinality $|M||N|$; there are finitely many group laws on a finite set of that size and finitely many endpoint maps. Therefore its Yoneda extension set is finite. The stated group-table model is a set of objects, so [F3] applies. [F1, F3, algebra]

1.2 If $0\to C_p\to L\to C_p\to0$ is exact, then $|L|=p^2$. If $L$ contains an element of order $p^2$, then $L\cong C_{p^2}$. Otherwise every nonzero element has order $p$, so scalar multiplication by $\mathbb F_p$ makes $L$ a two-dimensional vector space and $L\cong C_p\oplus C_p$. Thus these are the only possible middle groups. [given, algebra]

2.1 In $C_{p^2}$, the unique subgroup of order $p$ is $p\mathbb Z/p^2\mathbb Z$, and its quotient is $C_p$, giving coefficient one by [F2]. In $C_p\oplus C_p$, every one-dimensional subspace is a subgroup isomorphic to $C_p$, and its quotient is $C_p$. The number of such subspaces is $(p^2-1)/(p-1)=p+1$, by partitioning nonzero vectors into lines. [F2, step 1.2]

3.1 The extension classification and counts of step 2.1 give the formula. Moreover $\operatorname{End}(C_{p^2})\cong\mathbb Z/p^2\mathbb Z$ additively, which has an element of order $p^2$; it is not an $\mathbb F_p$-vector space. Thus the category is not $\mathbb F_p$-linear. [step 1.1, step 1.2, step 2.1, algebra] ∎