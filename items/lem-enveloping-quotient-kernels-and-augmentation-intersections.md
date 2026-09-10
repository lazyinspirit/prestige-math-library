---
id: lem-enveloping-quotient-kernels-and-augmentation-intersections
kind: lemma
title: "Enveloping quotient kernels and augmentation intersections"
status: draft
origin: pipeline
deps: ["lem-pbw-for-countably-presented-kac-moody-lie-algebras", "def-universal-enveloping-algebra-as-a-tensor-quotient"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemmas 9.3.1–9.3.3, pp.122–124; corrected left U(R)-module proof for Lemma 9.3.3"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For countably based complex Lie algebras with supplied compatible bases, a surjection $\theta:L\to L/R$ with ideal kernel $R$ induces $\ker U(\theta)=RU(L)$. For any subalgebra $R\subset L$ with such a compatible basis, $R\cap RU_0(L)=[R,R]$. Here $U_0(L)$ is the kernel of the augmentation $U(L)\to\mathbb C$. These hypotheses hold for the homogeneous subalgebras used in this page by finite-degree elimination.

## Facts & Assumptions

**Given:** The indicated bases; R is an ideal for the first claim and only a subalgebra for the second.

[F1] PBW gives the compatible ordered monomial bases. ([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]).

[F2] The tensor quotient realizes Lie homomorphisms as associative homomorphisms. ([[def-universal-enveloping-algebra-as-a-tensor-quotient]]).

## Proof

1.1 If $R$ is an ideal, $RU(L)$ is two-sided: $xr=rx+[x,r]$ with $[x,r]\in R$ lets every left generator pass it. It is killed by $U(\theta)$. The class of $x$ in $U(L)/RU(L)$ depends only on $x+R$, giving a Lie map $L/R\to U(L)/RU(L)$. F2 extends it to an associative inverse of the map $U(L)/RU(L)\to U(L/R)$: both composites fix all Lie generators. This proves the kernel equality. [F2, given]

1.2 For the subalgebra $R$, order its basis before a complement and let $W$ span the nonempty ordered complement monomials. Multiplication and F1 identify $U(L)=U(R)\oplus(U(R)\otimes W)$ as left $U(R)$-modules. Augmentation then gives $U_0(L)=U_0(R)\oplus(U(R)\otimes W)$. Nonempty words yield $RU(R)=U_0(R)$ and $RU_0(R)=U_0(R)^2$: in a product of two nonempty words the first letter lies in $R$, and the remaining word is nonempty, and conversely. Left multiplication by $R$ therefore yields $RU_0(L)=U_0(R)^2\oplus(U_0(R)\otimes W)$. [F1, F2, given]

2.1 For any algebra $K$ with these bases, $[K,K]\subset K\cap U_0(K)^2$ because $[x,y]=xy-yx$. Mapping to $U(K/[K,K])$ sends $U_0(K)^2$ into the square of its augmentation ideal. This enveloping algebra is the polynomial algebra on a basis of the abelian quotient by F1: ordered words commute and have independent monomials. Its degree-one subspace has zero intersection with the ideal of polynomials of degree at least two. Thus an element of $K\cap U_0(K)^2$ maps to zero in $K/[K,K]$, proving equality. [F1, F2, step 1.1]

3.1 The subspace $R$ lies in the first summand of step 1.2. Intersecting gives $R\cap RU_0(L)=R\cap U_0(R)^2=[R,R]$ by step 2.1. This calculation retains commutators that can have PBW length one; it makes no false assertion that the augmentation square has only ordered monomials of length at least two. In the homogeneous applications, finite-degree echelon bases of F1 supply all compatible bases used above. [F1, step 2.1, step 1.2] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemmas 9.3.1–9.3.3, pp.122–124; corrected left U(R)-module proof for Lemma 9.3.3.
