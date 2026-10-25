---
id: thm-weierstrass-product-theorem-on-the-complex-plane
kind: theorem
title: "Weierstrass product theorem on the complex plane"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-weierstrass-products-canonical-products-and-genus, lem-unit-disc-estimate-for-weierstrass-elementary-factors, thm-normal-convergence-of-holomorphic-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $m\ge0$ be an integer, and let $(a_n)_{n\ge1}$ be a sequence of nonzero
complex numbers with no finite accumulation point, where each value may repeat
according to its intended multiplicity. Then there are integers $p_n\ge0$ such
that

$$P(z):=z^m\prod_{n\ge1}E_{p_n}(z/a_n)$$

converges normally on $\mathbb C$ and is entire, with zero set exactly
$\{0\}$ of order $m$ together with the nonzero zeros $a_n$ counted with
multiplicity.

## Facts & Assumptions

**Given:** The integer $m\ge0$ and the sequence $(a_n)$.

[F1] A Weierstrass product is a product of elementary factors with varying orders ([[def-weierstrass-products-canonical-products-and-genus]]).

[F2] For every integer $p\ge0$ and $|w|\le1$, the elementary factor satisfies $|1-E_p(w)|\le|w|^{p+1}$ ([[lem-unit-disc-estimate-for-weierstrass-elementary-factors]]).

[F3] A normally convergent holomorphic product defines an entire function whose zeros on each compact set are exactly those contributed by the finitely many exceptional factors ([[thm-normal-convergence-of-holomorphic-products]]).

## Proof

**Proof technique:** direct.

1.1 Set $p_n:=n$ for every $n\ge1$. Fix $R>0$. Because $(a_n)$ has no finite accumulation point, only finitely many terms satisfy $|a_n|\le2R$; choose $N$ so that $|a_n|>2R$ for all $n\ge N$. [given, choose, construct]

2.1 For $|z|\le R$ and $n\ge N$, one has $|z/a_n|\le R/|a_n|<1/2\le1$, and $E_n(z/a_n)\ne0$ because its unique zero occurs at $z=a_n$, outside the closed disc $|z|\le R$. Using [F2] with $p=n$ gives $$|1-E_n(z/a_n)|\le|z/a_n|^{n+1}\le(R/|a_n|)^{n+1}\le2^{-n-1}.$$ Therefore $$\sum_{n\ge N}\sup_{|z|\le R}|1-E_n(z/a_n)|$$ converges. [F2, step 1.1, algebra]

3.1 Step 2.1 is exactly the normal-convergence condition on the closed disc $|z|\le R$, and $R$ was arbitrary. Hence [F3] makes $$\prod_{n\ge1}E_n(z/a_n)$$ an entire function whose zeros are exactly the points $a_n$, counted with multiplicity. Multiplying by $z^m$ contributes precisely the order-$m$ zero at $0$ and no other zeros, so $$P(z)=z^m\prod_{n\ge1}E_n(z/a_n)$$ has exactly the stated zero divisor. Since $p_n=n\ge0$, this is a Weierstrass product in the sense of [F1]. [F1, F3, step 2.1, algebra] ∎
