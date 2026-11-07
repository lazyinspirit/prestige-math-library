---
id: lem-residue-fields-at-degree-one-primes-preserved-for-quadratic-orders
kind: lemma
title: "Residue fields at degree-one primes are preserved by quadratic-order contraction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-quadratic-order-of-discriminant
  - lem-coprime-ideal-extension-contraction-for-quadratic-orders
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, prime ideals prime to a finite modulus and residue-class quotients, printed pp. 147–150"
verification: {}
---

## Statement

Let $K$ be an imaginary quadratic field, let $\mathcal O_K$ be its maximal
order, let $f\ge1$, and put $\mathcal O_f=\mathbb Z+f\mathcal O_K$. Let $p$ be
a rational prime with $p\nmid f$, and let $\mathfrak p$ be a prime ideal of
$\mathcal O_K$ with $\mathcal O_K/\mathfrak p\cong\mathbb F_p$. For the
contraction $\mathfrak p_f=\mathfrak p\cap\mathcal O_f$, the ideal
$\mathfrak p_f$ is prime to the conductor and invertible, and the natural map
$$\mathcal O_f/\mathfrak p_f\longrightarrow\mathcal O_K/\mathfrak p$$
is an isomorphism. In particular, $\mathcal O_f/\mathfrak p_f\cong\mathbb F_p$.

## Statement references

[[lem-coprime-ideal-extension-contraction-for-quadratic-orders|Contraction and extension are inverse for ideals prime to the conductor.]]

[Milne, *Class Field Theory*, Chapter V §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** $K$, $\mathcal O_K$, $f$, $\mathcal O_f$, a rational prime $p\nmid f$, and a prime ideal $\mathfrak p$ with residue field $\mathbb F_p$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_f=\mathbb Z+f\mathcal O_K$ and its conductor is $f\mathcal O_K$.

[F2] [[lem-coprime-ideal-extension-contraction-for-quadratic-orders]]: contraction of an integral $\mathcal O_K$-ideal prime to $f$ is an integral $\mathcal O_f$-ideal prime to $f$, is invertible, and extends back to the original ideal.

## Proof

1.1 The quotient map $\mathbb Z\to\mathcal O_K/\mathfrak p\cong\mathbb F_p$ is surjective because its image contains the prime field, and its kernel is $p\mathbb Z$. Since $p\nmid f$, choose integers $a,b$ with $ap+bf=1$. Then $ap\in\mathfrak p$ and $bf\mathcal O_K\subseteq f\mathcal O_K$, so $\mathfrak p+f\mathcal O_K=\mathcal O_K$. Thus $\mathfrak p$ is prime to the conductor, and [F2] implies that $\mathfrak p_f$ is prime to the conductor, invertible, and extends to $\mathfrak p$. [F1, F2, given, choose, algebra]

2.1 The inclusion $\mathbb Z\subseteq\mathcal O_f$ and the surjective reduction $\mathbb Z\to\mathbb F_p$ show that the natural map $\mathcal O_f\to\mathcal O_K/\mathfrak p$ is surjective. The induced map on cosets of $\mathfrak p_f$ is well-defined; it is injective because its kernel is $(\mathfrak p\cap\mathcal O_f)/\mathfrak p_f=0$, and it is surjective by the preceding map. It preserves addition and multiplication because it is induced by reduction in $\mathcal O_K$. Hence $\mathcal O_f/\mathfrak p_f\cong\mathcal O_K/\mathfrak p\cong\mathbb F_p$. [F1, given, algebra] ∎
