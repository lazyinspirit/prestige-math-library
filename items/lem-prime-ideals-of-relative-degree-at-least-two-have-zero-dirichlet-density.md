---
id: lem-prime-ideals-of-relative-degree-at-least-two-have-zero-dirichlet-density
kind: lemma
title: "Prime ideals of relative residue degree at least two have zero Dirichlet density"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-dirichlet-density-of-prime-ideals
  - def-prime-above-and-residue-degree
  - def-absolute-norm-of-an-ideal
  - thm-fundamental-identity-for-primes-in-number-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §3, Proposition 3.2 and Corollary 3.3, PDF pp. 200–201 (printed pp. 193–194); the source proves zero density for prime ideals of nonprime absolute norm, and the local proof derives the relative-degree case."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §13, printed pp. 543–544; the opening density discussion isolates prime ideals of absolute degree greater than one and sums their norm terms."
verification:
  precheck: pass
---

## Statement

Let $M/F$ be a finite extension of number fields. For a nonzero prime ideal $\mathfrak q\subseteq\mathcal O_M$, write $\mathfrak p=\mathfrak q\cap\mathcal O_F$ and $f(\mathfrak q/\mathfrak p)=[\mathcal O_M/\mathfrak q:\mathcal O_F/\mathfrak p]$. The set
$$E_{M/F}=\{\mathfrak q\subseteq\mathcal O_M:\mathfrak q\ne0,\ f(\mathfrak q/\mathfrak p)\ge2\}$$
has Dirichlet density zero, with density normalized by
$$\delta_M(E_{M/F})=\lim_{s\downarrow1,\ s>1}\frac{\displaystyle\sum_{\mathfrak q\in E_{M/F}}(N_{M/\mathbb Q}\mathfrak q)^{-s}}{\log(1/(s-1))}.$$

## Statement references

[[def-dirichlet-density-of-prime-ideals]]

[[def-prime-above-and-residue-degree]]

[[def-absolute-norm-of-an-ideal]]

[[thm-fundamental-identity-for-primes-in-number-fields]]

[Milne, Class Field Theory, VI §3, Proposition 3.2 and Corollary 3.3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** A finite extension $M/F$ of number fields and the set $E_{M/F}$ in the Statement.

[F1] [[def-dirichlet-density-of-prime-ideals]]: For a set $S$ of nonzero prime ideals of a number field $K$, $\delta_K(S)=\lim_{s\downarrow1,\ s>1}\frac{\sum_{\mathfrak p\in S}(N\mathfrak p)^{-s}}{\log(1/(s-1))}$, when the limit exists.

[F2] [[def-prime-above-and-residue-degree]]: A prime $\mathfrak q$ lies above $\mathfrak p$ when $\mathfrak q\cap\mathcal O_F=\mathfrak p$, and $f(\mathfrak q/\mathfrak p)=[\mathcal O_M/\mathfrak q:\mathcal O_F/\mathfrak p]$.

[F3] [[def-absolute-norm-of-an-ideal]]: For a nonzero integral ideal $\mathfrak a\subseteq\mathcal O_K$, $N\mathfrak a=|\mathcal O_K/\mathfrak a|$.

[F4] [[thm-fundamental-identity-for-primes-in-number-fields]]: For a finite extension $L/K$ and a nonzero prime $\mathfrak p\subseteq\mathcal O_K$, $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=[L:K]$.

## Proof

**Given:** The data above.

1.1 For each prime $\mathfrak p$ of $F$, [F4] gives at most $[M:F]$ primes $\mathfrak q$ above it. For $\mathfrak q\in E_{M/F}$, [F2]–[F3] give $N_{M/\mathbb Q}\mathfrak q=(N_{F/\mathbb Q}\mathfrak p)^{f(\mathfrak q/\mathfrak p)}\ge (N_{F/\mathbb Q}\mathfrak p)^2$, so for every real $s>1$, $\sum_{\mathfrak q\in E_{M/F}}(N\mathfrak q)^{-s}\le [M:F]\sum_{\mathfrak p\subseteq\mathcal O_F}(N_{F/\mathbb Q}\mathfrak p)^{-2s}$. For each rational prime $\ell$, [F4] applied to $F/\mathbb Q$ gives at most $[F:\mathbb Q]$ primes $\mathfrak p$ above $\ell$, and [F2]–[F3] give $N\mathfrak p=\ell^{f(\mathfrak p/(\ell))}\ge\ell$. Therefore the right side is at most $[M:F][F:\mathbb Q]\sum_{n=2}^{\infty}n^{-2}$, which is finite by comparison with $\int_1^\infty x^{-2}\,dx$. This bound is uniform as $s\downarrow1$. [F2, F3, F4, given, algebra]

2.1 By [F1], the normalized sum defining $\delta_M(E_{M/F})$ has numerator uniformly bounded by step 1.1 and denominator $\log(1/(s-1))\to\infty$. Its limit is therefore zero. [F1, step 1.1, algebra] ∎
