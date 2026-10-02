---
id: lem-roots-of-unity-in-a-number-field-are-finite
kind: lemma
title: Finitely many roots of unity in a number field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-element-algebraic-iff-simple-extension-finite
  - cor-intermediate-field-degrees-divide
  - def-archimedean-embeddings-and-number-field-signature
  - def-extension-degree-and-finite-extension
  - def-integral-element-and-algebraic-integer
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-roots-of-unity-in-a-field
  - lem-bounded-conjugates-give-finitely-many-integral-polynomials
  - lem-complex-conjugation-and-modulus-laws
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-tower-law-for-finite-field-extensions
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.85-86 (finiteness of the roots of unity in K); Ch. 5 Prop. 5.5 p.87."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 Lemma 8.1.7 p.90 (the torsion subgroup of K^× is finite)."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Thm. 24.6 p.126; Ch. 29 p.149."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Cor. 15.8 pp.5-6 (the torsion of K^× is the group of roots of unity in K)."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field. The group $\mu(K)$ of roots of unity contained in
$K$ is finite.

## Facts & Assumptions

**Given:** A number field $K$ of degree $n=[K:\mathbb Q]$, and the set $\mu(K)=\bigcup_{N\ge1}\mu_N(K)$ of the elements of $K$ that satisfy $x^N=1$ for some $N\ge1$.

[F1] For every $N\ge1$ the set $\mu_N(K)=\{x\in K:x^{N}=1\}$ is a subgroup of $K^{\times}$, and an element $x\in K$ is a root of unity exactly when $x^{N}=1$ for some $N\ge1$ ([[def-roots-of-unity-in-a-field]]).

[F2] An element $b$ of a commutative ring $B$ is integral over a subring $A$ when it is a root of a monic polynomial in $A[X]$, and an algebraic integer is a complex number integral over $\mathbb Z$ ([[def-integral-element-and-algebraic-integer]]); the ring of integers $\mathcal O_K$ is the integral closure of $\mathbb Z$ in $K$ ([[def-ring-of-integers-of-a-number-field]]).

[F3] For $\alpha\in K$, one has $\alpha\in\mathcal O_K$ if and only if the monic minimal polynomial of $\alpha$ over $\mathbb Q$ lies in $\mathbb Z[X]$ ([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F4] For an algebraic element $a$ of an extension of $\mathbb Q$, the monic minimal polynomial $m_a\in\mathbb Q[X]$ satisfies $f(a)=0$ if and only if $m_a\mid f$ in $\mathbb Q[X]$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F5] Complex modulus satisfies $|zw|=|z|\,|w|$, $|z|\ge0$ and $|z|=0$ only for $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]); the $N$-th roots of unity in $\mathbb C$ are the numbers $e^{2\pi ik/N}$, $k=0,\dots,N-1$, all of modulus one ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F6] If $a$ is algebraic over $F$ with minimal polynomial of degree $d$, then $[F(a):F]=d$ ([[cor-element-algebraic-iff-simple-extension-finite]]).

[F7] If $F\subseteq E\subseteq L$ and $L/F$ is finite, then $E/F$ and $L/E$ are finite and $[E:F]$ divides $[L:F]$ ([[cor-intermediate-field-degrees-divide]]); for finite extensions the degrees multiply, $[L:F]=[L:E][E:F]$ ([[thm-tower-law-for-finite-field-extensions]], [[def-extension-degree-and-finite-extension]]).

[F8] There are only finitely many monic integer polynomials of degree at most $n$ whose complex roots, counted with multiplicity, all have modulus at most $R=1$ ([[lem-bounded-conjugates-give-finitely-many-integral-polynomials]]). This is the one batch-2 supplier consumed here, authored in this run; the exact obligation used is that the set of monic integer polynomials of degree at most $n$ all of whose complex roots have modulus at most $1$ is finite.

[F9] A nonzero polynomial of degree $d$ over an integral domain has at most $d$ distinct roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]); $\mathbb C$ is a field, hence an integral domain.

## Proof

**Proof technique:** every root of unity in $K$ is an algebraic integer whose minimal polynomial has degree at most $n$ and all of whose complex roots have modulus $1$; the bounded-conjugate polynomials of that degree form a finite box, and each polynomial has at most $n$ roots.

1.1 The set $\mu(K)$ is a subgroup of $K^{\times}$: it contains $1$; if $\zeta^{m}=1$ and $\eta^{k}=1$ then $(\zeta\eta)^{mk}=\zeta^{mk}\eta^{mk}=1$; and if $\zeta^{m}=1$ then $(\zeta^{-1})^{m}=(\zeta^{m})^{-1}=1$. [F1]

1.2 Let $\zeta\in K$ be a root of unity with $\zeta^{N}=1$ for some $N\ge1$. Then $\zeta$ is a root of the monic polynomial $X^{N}-1\in\mathbb Z[X]$, so $\zeta$ is integral over $\mathbb Z$ and therefore lies in $\mathcal O_K$; its monic minimal polynomial $m_\zeta\in\mathbb Q[X]$ has coefficients in $\mathbb Z$; and $m_\zeta$ divides $X^{N}-1$ in $\mathbb Q[X]$, because the polynomial $X^{N}-1$ vanishes at $\zeta$ and $m_\zeta$ is the minimal polynomial of $\zeta$. [F2, F3, F4]

1.3 Every complex root $w$ of the polynomial $X^{N}-1$ satisfies $w^{N}=1$, hence $|w|^{N}=|w^{N}|=1$ with $|w|\ge0$, so $|w|=1$; equivalently the roots of $X^{N}-1$ are the $N$-th roots of unity, of modulus one. [F5]

1.4 The degree of $m_\zeta$ equals $[\mathbb Q(\zeta):\mathbb Q]$ by [F6], and $\mathbb Q\subseteq\mathbb Q(\zeta)\subseteq K$ with $K/\mathbb Q$ finite, so $[\mathbb Q(\zeta):\mathbb Q]$ is finite and divides $[K:\mathbb Q]=n$ by [F7]; in particular $d:=\deg m_\zeta\le n$. [F6, F7]

2.1 Every complex root $w$ of $m_\zeta$ is a complex root of $X^{N}-1$, since $m_\zeta\mid X^{N}-1$ in $\mathbb Q[X]$ and therefore in $\mathbb C[X]$; by step 1.3 such a root has $|w|=1$. Hence $m_\zeta$ is a monic integer polynomial of degree $d\le n$ all of whose complex roots have modulus at most $1$, with the degree bound of step 1.4. [step 1.2, step 1.3, step 1.4]

3.1 By [F8] the monic integer polynomials of degree at most $n$ whose complex roots all have modulus at most $1$ are only finitely many; fix a list $g_1,\dots,g_M$ of them. Each $g_j$ has degree at most $n$, hence at most $n$ distinct complex roots by [F9], so the union of their complex root sets has at most $nM$ elements. [F8, F9, step 2.1]

4.1 Every root of unity $\zeta\in K$ has $m_\zeta$ of the form $g_j$ by step 2.1, so $\zeta$ is a root of one of the finitely many polynomials $g_1,\dots,g_M$; therefore $\mu(K)$ is contained in the finite union of their root sets, and $\mu(K)$ is finite. By step 1.1 it is the group of roots of unity contained in $K$. [step 1.1, step 3.1] ∎
