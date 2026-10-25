---
id: lem-oriented-similarities-are-nonzero-complex-multiplications
kind: lemma
title: "Plane similarities are complex or conjugate-complex multiplications; the orientation-preserving ones are exactly the nonzero complex multiplications"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-oriented-conformal-map-at-a-point,
       thm-complex-numbers-are-the-real-coordinate-plane,
       def-euclidean-inner-product]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.2.9 and Exercises 2.2.22–23"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $L:\mathbb R^2\to\mathbb R^2$ be real-linear. It is a similarity if and only if exactly one of the following forms holds for some $\xi\in\mathbb C\setminus\{0\}$:

$$ Lh=\xi h,\qquad Lh=\xi\bar h. $$

The first form is orientation-preserving and the second orientation-reversing. Thus the orientation-preserving similarities are exactly the nonzero complex multiplications.

## Facts & Assumptions
**Given:** A real-linear map $L:\mathbb R^2\to\mathbb R^2$.

[F1] A similarity has a ratio $\lambda>0$ and satisfies $\langle Lh,Lk\rangle=\lambda^2\langle h,k\rangle$; its orientation is the sign of $\omega(Le_1,Le_2)$ ([[def-oriented-conformal-map-at-a-point]]).

[F2] The Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$ and is positive definite ([[def-euclidean-inner-product]]).

[L1] Under $\mathbb C\cong\mathbb R^2$, multiplication satisfies $(a+bi)(x+iy)=(ax-by)+i(bx+ay)$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $L$ is a similarity of ratio $\lambda$, and write its columns as $p=L e_1=(a,b)$ and $q=L e_2=(c,d)$. By [F1]–[F2], $p\perp q$ and $|p|=|q|=\lambda>0$. [given, F1, F2]

1.2 Conversely, for $\xi=a+bi\ne0$, direct expansion using [F2] shows that both $h\mapsto\xi h$ and $h\mapsto\xi\bar h$ multiply every inner product by $|\xi|^2$. Their signed area factors are respectively $|\xi|^2$ and $-|\xi|^2$, so both are similarities with the asserted orientations. [F1, F2, L1, algebra]

2.1 In the plane, a vector orthogonal to the nonzero $p=(a,b)$ and of the same length is either $(-b,a)$ or $(b,-a)$. Hence $q$ is one of these two vectors. [step 1.1, algebra]

3.1 If $q=(-b,a)$, [L1] gives $Lh=(a+bi)h$ and $\omega(p,q)=a^2+b^2>0$. If $q=(b,-a)$, [L1] gives $Lh=(a+bi)\bar h$ and $\omega(p,q)=-(a^2+b^2)<0$. [step 2.1, L1, algebra]

4.1 The signed area factor cannot be both positive and negative, so the two forms are mutually exclusive and the classification is complete. [step 3.1, step 1.2, algebra] ∎
