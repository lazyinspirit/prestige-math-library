---
id: lem-coprime-kernel-decomposition
kind: lemma
title: "If $\\gcd(f,g)=1$ and $(fg)(T)=0$, then $V=\\ker f(T)\\oplus\\ker g(T)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bezout-identity-for-polynomials, def-monic-greatest-common-divisor-of-polynomials, def-polynomial-evaluation-at-an-endomorphism, def-internal-direct-sum]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5, proof of Theorem 5.19'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism and let $f,g\in F[x]$ satisfy $\gcd(f,g)=1$ and $(fg)(T)=0$. Then

$$V=\ker f(T)\oplus\ker g(T).$$

## Facts & Assumptions

**Given:** An endomorphism $T$ and coprime polynomials $f,g$ with $(fg)(T)=0$.

[L1] If $\gcd(f,g)=1$, Bézout's identity supplies $a,b\in F[x]$ with $af+bg=1$ ([[thm-bezout-identity-for-polynomials]], [[def-monic-greatest-common-divisor-of-polynomials]]).

[L2] For two subspaces, $V=U\oplus W$ means $U+W=V$ and $U\cap W=\{0\}$ ([[def-internal-direct-sum]]).

[L3] Polynomial evaluation sends $p(x)=\sum a_kx^k$ to $p(T)=\sum a_kT^k$, with $T^0=I$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Choose $a,b$ as in [L1]. Evaluating the identity gives $a(T)f(T)+b(T)g(T)=I$. [L1, L3, choose]

2.1 For $v\in V$, write $v=a(T)f(T)v+b(T)g(T)v$. The first summand lies in $\ker g(T)$ and the second in $\ker f(T)$ because polynomial evaluations commute and $(fg)(T)=0$. Thus the two kernels span $V$. [step 1.1, L3, given, algebra]

3.1 If $v$ lies in both kernels, step 1.1 gives $v=a(T)f(T)v+b(T)g(T)v=0$. Hence their intersection is zero, and [L2] proves the direct sum. Unit factors and the zero space satisfy the same calculation. [step 1.1, L2] ∎
