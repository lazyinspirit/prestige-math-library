---
id: ex-weyl-criterion-for-a-linear-sequence-on-the-two-torus
kind: example
title: A linear sequence tested on the two-torus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-weyl-criterion-on-the-k-torus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: L. Kuipers and H. Niederreiter, Uniform Distribution of Sequences
      url: https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf
      locator: "Chapter 1, §2, Example 2.1 and Weyl criterion Theorem 2.1, printed pp. 8–9; Chapter 4, §1, Corollary 1.2, printed pp. 227–228"
---

## Example

Let $\alpha,\beta,\theta_1,\theta_2\in\mathbb R$ and suppose $1,\alpha,\beta$ are linearly independent over $\mathbb Q$. Then the sequence $((n\alpha+\theta_1,n\beta+\theta_2))_{n\ge1}$ is uniformly distributed in $\mathbb T^2$.

## Example references

[Kuipers–Niederreiter, Example 2.1 and Theorem 2.1](https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf)

## Facts & Assumptions

**Given:** Reals $\alpha,\beta,\theta_1,\theta_2$ with $1,\alpha,\beta$ linearly independent over $\mathbb Q$.

[F1] A sequence in $\mathbb T^2$ is uniformly distributed if and only if every nonzero integer character average tends to zero ([[thm-weyl-criterion-on-the-k-torus]]).

## Verification

**Proof technique:** direct.

1.1 Fix $(r,s)\in\mathbb Z^2\setminus\{(0,0)\}$. The number $\tau=r\alpha+s\beta$ is not an integer, since $\tau=m\in\mathbb Z$ would give the nontrivial rational relation $-m+r\alpha+s\beta=0$. Thus $q=e(\tau)\ne1$, and the corresponding character average is $N^{-1}\sum_{n=1}^Ne(r(n\alpha+\theta_1)+s(n\beta+\theta_2))=e(r\theta_1+s\theta_2)N^{-1}q(1-q^N)/(1-q)$, whose modulus is at most $2/(N|1-q|)$ and tends to zero. [given, construct, algebra]

2.1 Step 1.1 holds for each nonzero $(r,s)\in\mathbb Z^2$. Apply [F1] to conclude that the sequence is uniformly distributed in $\mathbb T^2$. [F1, step 1.1] ∎
