---
id: lem-polynomial-squarefree-decomposition-and-multiplicity
kind: lemma
title: Exact gcd squarefree decomposition preserves roots and multiplicities
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-monic-greatest-common-divisor-of-polynomials
  - thm-bezout-identity-for-polynomials
  - lem-polynomial-gcd-is-stable-under-field-extension
  - def-polynomial-ring-over-a-commutative-ring
  - def-formal-derivative-of-a-polynomial
  - thm-polynomial-division-algorithm-over-a-field
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - prop-formal-derivative-laws
  - cor-factor-theorem-over-a-commutative-ring
  - thm-rat-ordered-field
  - thm-complex-numbers-form-a-field
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, §§2–3"
      url: "https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf"
---

## Statement

Let $P\in\mathbb Q[x]$ be nonzero of degree $d$, and put $f=P/\operatorname{lc}(P)$, so $f$ is monic. Set $p_0=f$ and, recursively, let $p_k$ be the monic greatest common divisor of $p_{k-1}$ and $p_{k-1}'$ for $k\ge1$, with $\gcd(1,0)=1$. For $1\le k\le d$, put $s_k=p_{k-1}/p_k$ and put $s_{d+1}=1$. Then each $q_k=s_k/s_{k+1}$ is a monic polynomial in $\mathbb Q[x]$, the $q_k$ are squarefree and pairwise coprime, and
$$
f=\prod_{k=1}^{d}q_k^k.
$$
The complex roots of $q_k$ are exactly the roots of $P$ having multiplicity $k$. In particular, $\prod_{k=1}^{d}q_k$ is squarefree and has exactly the distinct roots of $P$. For $d=0$, the product is empty and $P$ has no roots.

Here a polynomial is called **squarefree** when each of its complex roots has multiplicity one.
---

## Facts & Assumptions

**Given:** A nonzero rational polynomial $P$, its degree $d$, and the definitions in the Statement.

[F1] The rationals form a field ([[thm-rat-ordered-field]]).

[F2] Division by a nonzero polynomial over a field has a unique quotient and remainder of smaller degree ([[thm-polynomial-division-algorithm-over-a-field]]).

[F3] Formal differentiation is linear and satisfies the product rule; the derivative of a degree-$n$ monomial is $nx^{n-1}$ ([[prop-formal-derivative-laws]]).

[F4] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]).

[F5] A polynomial vanishing at $a$ is divisible by $x-a$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[F6] Degrees add under products of nonzero polynomials over a field ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[F7] The complex numbers form a field containing the rationals ([[thm-complex-numbers-form-a-field]]).

[F8] The monic gcd is the unique monic common divisor divisible by every common divisor; Euclidean division terminates at its nonzero scalar associate and yields a polynomial Bezout identity. [[def-monic-greatest-common-divisor-of-polynomials]], [[thm-bezout-identity-for-polynomials]]

[F9] For polynomials over a base field that are not both zero, their monic gcd is unchanged on extending the coefficient field. [[lem-polynomial-gcd-is-stable-under-field-extension]]

## Proof

1.1 By [F8], the monic gcd is constructed by Euclidean division over $\mathbb Q$, and the divisions terminate: each nonzero remainder has smaller nonnegative integer degree than the divisor by [F2]. The same argument defines $p_k$; if $\deg p_{k-1}>0$, then $p_{k-1}'\ne0$ and has smaller degree by [F3] and characteristic zero, so $\deg p_k<\deg p_{k-1}$. Thus $p_d=1$, and each $s_k=p_{k-1}/p_k$ is a polynomial. [given, F1, F2, F3, F8, construct]

1.2 By [F4], repeated application of [F5] factors $f$ over $\mathbb C$: $f(x)=\prod_{\alpha}(x-\alpha)^{m_\alpha}$, where the finite list contains each distinct root once and $m_\alpha\ge1$. The induction is finite because each division by $x-\alpha$ lowers degree by one by [F6]. [given, F4, F5, F6, F7, induction]

2.1 Fix a current polynomial $p$ in the gcd chain and a root $\alpha$ of multiplicity $m>0$, so $p=(x-\alpha)^m u$ with $u(\alpha)\ne0$. The product rule [F3] gives $p'=(x-\alpha)^{m-1}\bigl(mu+(x-\alpha)u'\bigr)$, whose parenthesized factor is nonzero at $\alpha$ because the field has characteristic zero. Hence the gcd of $p$ and $p'$ has multiplicity exactly $m-1$ at $\alpha$; a root absent from $p$ is absent from their gcd. By [F9] for the field extension $\mathbb Q\subseteq\mathbb C$, the monic gcd computed over $\mathbb Q$ is exactly the monic gcd over $\mathbb C$. Thus this root-multiplicity computation applies to each $p_k$. [step 1.1, step 1.2, F1, F2, F3, F7, F8, F9]

3.1 Induction on $k$ now shows that the multiplicity of $\alpha$ in $p_k$ is $\max(m_\alpha-k,0)$. Therefore $\alpha$ occurs once in $s_k=p_{k-1}/p_k$ exactly when $k\le m_\alpha$, and it occurs in $s_k/s_{k+1}$ exactly when $k=m_\alpha$. This root factorization proves $s_{k+1}$ divides $s_k$ over $\mathbb C[x]$; division over $\mathbb Q[x]$ has the same zero remainder, so $q_k=s_k/s_{k+1}$ lies in $\mathbb Q[x]$. [step 2.1, F2, F7, algebra, induction]

4.1 Each complex root of $f$ occurs in exactly one $q_k$, with exponent one there and exponent $k$ in $q_k^k$. The factorization in step 1.2 therefore gives $f=\prod_{k=1}^d q_k^k$; it also proves that each $q_k$ is squarefree and that distinct $q_k$ have no common root, hence are pairwise coprime. The degree-zero case has $f=1$ and an empty root list. [step 1.2, step 3.1, F1, algebra] ∎
