---
id: lem-witt-central-cocycles-are-cubic
kind: lemma
title: A normalized Witt central cocycle is cubic
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-witt-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter IV §1
      url: https://arxiv.org/pdf/1004.1287
---

## Statement

Let $\lambda:W\times W\to\mathbb C$ be an alternating bilinear central Lie-algebra two-cocycle for the Witt algebra [[def-witt-algebra]], and suppose $\lambda(d_m,d_n)=0$ whenever $m+n\ne0$. If $\lambda(d_1,d_{-1})=0$, then there is a scalar $a\in\mathbb C$ such that
$$\lambda(d_m,d_n)=a(m^3-m)\delta_{m+n,0}.$$

## Facts & Assumptions

**Given:** The Witt bracket and the stated support and normalization of $\lambda$.

[F1] [[def-witt-algebra]]: $[d_m,d_n]=(m-n)d_{m+n}$.

## Proof

1.1 Put $A(m)=\lambda(d_m,d_{-m})$. Alternatingness gives $A(-m)=-A(m)$ and $A(0)=0$. Apply the cocycle identity to $d_1,d_n,d_{-n-1}$ and use [F1]. The three terms are $(1-n)A(n+1)$, $-(2n+1)A(1)$, and $(n+2)A(n)$, so $ (n-1)A(n+1)=(n+2)A(n)-(2n+1)A(1).$ This holds for every integer $n$. [F1, algebra]

2.1 Since $A(1)=0$, the recurrence for $n\ge2$ becomes $(n-1)A(n+1)=(n+2)A(n)$. Set $a=A(2)/6$ and $P(n)=a(n^3-n)$. Then $P(1)=0$, $P(2)=A(2)$, and direct expansion gives $(n-1)P(n+1)=(n+2)P(n)$. Induction using $n-1\ne0$ for $n\ge2$ proves $A(n)=P(n)$ for every positive $n$; oddness extends the formula to negative $n$, and $A(0)=0$ covers zero. By the support hypothesis, this is exactly $\lambda(d_m,d_n)=a(m^3-m)\delta_{m+n,0}$. [F1, step 1.1, algebra] ∎
