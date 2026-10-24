---
id: thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
kind: theorem
title: "$\\Phi_n$ is irreducible in $\\mathbb Q[t]$ for every $n\\ge1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity, lem-a-primitive-root-of-unity-and-its-prime-power-share-a-minimal-polynomial-over-the-rationals, thm-evaluation-kernel-and-minimal-polynomial, thm-fundamental-theorem-of-arithmetic, thm-splitting-fields-exist-for-nonzero-polynomials, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, lem-a-finite-cyclic-group-has-euler-totient-many-generators, thm-root-bound-for-polynomials-over-a-domain, def-roots-of-unity-in-a-field, def-unit-group-modulo-n-and-euler-totient, def-coprime, def-irreducible-and-prime-elements-in-a-domain, def-polynomial-degree-leading-coefficient-and-monic, thm-rat-ordered-field, def-ring-characteristic, def-prime, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.10"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 9.8"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 2.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$ the cyclotomic polynomial $\Phi_n$
([[def-cyclotomic-polynomial]]) is irreducible in $\mathbb Q[t]$
([[def-irreducible-and-prime-elements-in-a-domain]]).

## Facts & Assumptions

**Given:** An integer $n\ge1$; $\mathbb Q$ is an ordered field ([[thm-rat-ordered-field]]), so $m\cdot1>0$ and in particular $m\cdot1\ne0$ for $m\ge1$, whence $\operatorname{char}\mathbb Q=0$ ([[def-ring-characteristic]]) and divides no $n\ge1$ ([[def-divides-in-z]]); a splitting field $E$ of $t^{n}-1$ over $\mathbb Q$ ([[thm-splitting-fields-exist-for-nonzero-polynomials]]); a primitive $n$-th root of unity $\zeta\in E$ ([[def-roots-of-unity-in-a-field]]); and $f\in\mathbb Q[t]$ the minimal polynomial of $\zeta$ over $\mathbb Q$.

[L1] $t^{n}-1$ is separable over $\mathbb Q$ and $\mu_n(E)$ is cyclic of order $n$ with exactly $\varphi(n)$ primitive $n$-th roots of unity, which are its generators ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]], [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] The roots of $\Phi_n$ in $E$ are exactly the primitive $n$-th roots of unity in $E$; $\Phi_n$ is monic of degree $\varphi(n)$ ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] For $a$ algebraic over $K$ there is a unique monic irreducible $m_a\in K[t]$ with $h(a)=0$ if and only if $m_a\mid h$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] If $\xi$ is a primitive $n$-th root of unity in $E$, $g\in\mathbb Q[t]$ is its minimal polynomial and $p$ is a prime with $p\nmid n$, then $g(\xi^{p})=0$ ([[lem-a-primitive-root-of-unity-and-its-prime-power-share-a-minimal-polynomial-over-the-rationals]]).

[L5] Every integer $a\ge1$ is a finite product of primes, the empty product being $1$ ([[thm-fundamental-theorem-of-arithmetic]], [[def-prime]]).

[L6] In a cyclic group $\langle g\rangle$ of finite order $m$, $g^{a}$ generates the group if and only if $\gcd(a,m)=1$, that is when $a$ and $m$ are coprime ([[lem-a-finite-cyclic-group-has-euler-totient-many-generators]], [[def-coprime]]).

[L7] A nonzero polynomial of degree $k$ over an integral domain has at most $k$ distinct roots in it ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 $\zeta$ is a root of $\Phi_n$ by [L2], so $f\mid\Phi_n$ in $\mathbb Q[t]$ by [L3], and $f$ is monic and irreducible. [L2, L3]

1.2 Let $\xi\in E$ be any primitive $n$-th root of unity. By [L1] it generates $\mu_n(E)=\langle\zeta\rangle$, so $\xi=\zeta^{a}$ for some integer $a$, which may be taken with $a\ge1$ after adding a multiple of $n$; and $\gcd(a,n)=1$ by [L6]. Write $a=p_1p_2\cdots p_s$ as a product of primes by [L5], with $s=0$ when $a=1$. No $p_i$ divides $n$, since $p_i\mid a$ and $\gcd(a,n)=1$. [L1, L5, L6, given]

2.1 Put $\zeta_0:=\zeta$ and $\zeta_j:=\zeta_{j-1}^{\,p_j}$ for $1\le j\le s$, so that $\zeta_s=\zeta^{a}=\xi$. By induction on $j$, each $\zeta_j$ is a primitive $n$-th root of unity and $f(\zeta_j)=0$: at $j=0$ this is the hypothesis on $\zeta$ and step 1.1; and given it at $j-1$, the polynomial $f$ is monic irreducible and vanishes at the primitive $n$-th root of unity $\zeta_{j-1}$, so $f$ is the minimal polynomial of $\zeta_{j-1}$ by [L3], whence $f(\zeta_j)=f(\zeta_{j-1}^{\,p_j})=0$ by [L4], while $\zeta_j$ is primitive by [L6] because $\gcd(p_j,n)=1$. [step 1.1, step 1.2, L3, L4, L6]

3.1 So $f$ vanishes at every primitive $n$-th root of unity in $E$, of which there are $\varphi(n)$ distinct ones by [L1]; hence $\deg f\ge\varphi(n)$ by [L7]. [step 2.1, L1, L7]

4.1 On the other hand $f\mid\Phi_n$ with $\deg\Phi_n=\varphi(n)$ by [L2], so $\deg f\le\varphi(n)$; therefore $\deg f=\varphi(n)$, and $f$ and $\Phi_n$ are monic with $f\mid\Phi_n$, so $\Phi_n=f$ is irreducible. At $n=1$ this reads $\Phi_1=t-1$, of degree $\varphi(1)=1$. [step 1.1, step 3.1, L2, L3] ∎

## Remarks

- **What the prime factorisation is doing.** The lemma advances one prime at a time, and step 2.1 chains those advances along a factorisation of the exponent. The chain works only because each intermediate $\zeta_j$ is again primitive and has the same minimal polynomial, which is what lets the lemma be reapplied rather than merely applied once.

- **Over other base fields the theorem is false.** Irreducibility of $\Phi_n$ depends on the base field, and over a finite field it usually fails ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]). The criterion that separates the cases is [[prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group]].
