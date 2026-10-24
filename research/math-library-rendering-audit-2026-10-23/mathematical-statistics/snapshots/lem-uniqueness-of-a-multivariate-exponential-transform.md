---
id: lem-uniqueness-of-a-multivariate-exponential-transform
kind: lemma
title: "Uniqueness of a multivariate exponential transform"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-complex-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - thm-total-variation-is-a-measure
  - def-integration-against-a-signed-or-complex-measure
  - thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation
  - thm-dominated-convergence
  - thm-identity-theorem-holomorphic-functions
  - cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Assume AC and let $k\ge0$. Let $\nu$ be a finite complex Borel measure on $\mathbb R^k$. Suppose there is $\delta>0$ such that $\int e^{\delta\|x\|_1}\,|\nu|(dx)<\infty$. If the Laplace transform $L(z)=\int e^{z\cdot x}\,\nu(dx)$ is zero for every real $z$ in an open neighborhood of $0$, then $\nu=0$.

## Facts & Assumptions

**Given:** AC and a finite complex Borel measure with the stated exponential moment and vanishing Laplace transform.

[A1] [[def-axiom-of-choice]]: the cited Fourier uniqueness theorem uses the library's stated choice assumptions; no parameter-dependent selections are made here.

[F1] [[def-complex-measure]], [[def-total-variation-of-a-signed-or-complex-measure]], and [[thm-total-variation-is-a-measure]]: $|\nu|$ is a positive measure; the exponential-moment hypothesis makes it finite.

[F2] [[def-integration-against-a-signed-or-complex-measure]] and [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]: complex integration is defined for $L^1(|\nu|)$ functions and satisfies $|\int f\,d\nu|\le\int|f|\,d|\nu|$.

[F3] [[thm-dominated-convergence]]: dominated convergence for complex-valued functions holds with respect to the positive measure $|\nu|$.

[F4] [[thm-identity-theorem-holomorphic-functions]]: a holomorphic function on a connected open strip that vanishes on a set with an interior accumulation point vanishes throughout that strip.

[F5] [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]]: for dimension at least one, a finite complex Borel measure whose Fourier transform vanishes everywhere is zero.

## Proof

1.1 If $k=0$, then $\mathbb R^0$ is a singleton and the open neighborhood in the hypothesis contains its only point; $L(0)=\nu(\mathbb R^0)=0$, so $\nu=0$. If $k\ge1$, set $D=\{z\in\mathbb C^k:|\operatorname{Re}z_j|<\delta/2\text{ for all }j\}$. Fix $z\in D$ and a coordinate $j$. Choose a neighborhood of $z$ on which every real coordinate has absolute value at most $3\delta/4$. The moment assumption makes $e^{\delta\|x\|_1}$ integrable with respect to the positive measure [F1], and all integrands below belong to $L^1(|\nu|)$ by [F2]. On this neighborhood, $|e^{z\cdot x}|\le e^{(3\delta/4)\|x\|_1}$, while for small complex $h$ the $j$th difference quotient is bounded by $|x_j|e^{(3\delta/4)\|x\|_1}\le C e^{\delta\|x\|_1}$. For every sequence $h\to0$, [F3] gives convergence of the difference quotients in $L^1(|\nu|)$ to $x_j e^{z\cdot x}$; the bound in [F2] transfers this convergence to their integrals against $\nu$. Thus $L$ is complex differentiable in coordinate $j$ at $z$, and, since $z$ and $j$ were arbitrary, $L$ is holomorphic in each coordinate on $D$. [F1, F2, F3, given, algebra]

2.1 Assume $k\ge1$. The real neighborhood contains a product of real intervals around zero. Fix real values of coordinates $2,\ldots,k$ in those intervals. As a function of $z_1$, $L$ is holomorphic on the connected strip and vanishes on a real interval; [F4] makes it zero for every $z_1$ in that strip. Now fix such a complex $z_1$ and real coordinates $3,\ldots,k$ in their intervals and apply [F4] to coordinate $z_2$. Repeating this finite process for coordinates $1$ through $k$ proves $L(z)=0$ for every $z\in D$. [F4, step 1.1, given, induction]

3.1 For $k\ge1$ and each $\xi\in\mathbb R^k$, the library Fourier transform is $\widehat\nu(\xi)=\int e^{-2\pi i\xi\cdot x}\nu(dx)=L(-2\pi i\xi)=0$, since $-2\pi i\xi\in D$. The Fourier uniqueness result [F5] then gives $\nu=0$. [A1, F5, step 2.1, given] ∎
