---
id: def-holowinsky-soundararajan-sieve-parameters
kind: definition
title: "Holowinsky–Soundararajan Sieve and Rankin Parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - thm-soundararajan-weak-subconvexity-symmetric-square
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§1, Theorem 2 and §2, Lemmas 1–3, printed pp. 4–9: the definitions of M_k(f) and R_k(f)."
    - title: "Roman Holowinsky, Sieving for Mass Equidistribution"
      url: "https://arxiv.org/pdf/0809.1640v1"
      locator: "§1, Theorems 1–2, printed pp. 2–4: the sieve parameter used in the shifted-sum estimate."
    - title: "J. S. Milne, Modular Functions and Modular Forms, version 1.31"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, printed pp. 68–75: normalized eigenform and Hecke-eigenvalue conventions."
---

## Definition

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Put $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$ and let $L(s,\operatorname{sym}^2 f)$ be the full-level symmetric-square $L$-function defined by its Euler product and continuation. Define the Holowinsky product and Rankin tail by
$$M_k(f)=\frac{1}{(\log k)^2L(1,\operatorname{sym}^2 f)}\prod_{p\le k}\left(1+\frac{2|\lambda_f(p)|}{p}\right),\qquad R_k(f)=\frac{1}{k^{1/2}L(1,\operatorname{sym}^2 f)}\int_{-\infty}^{\infty}\frac{|L(\tfrac12+it,\operatorname{sym}^2 f)|}{(1+|t|)^{10}}\,dt.$$
Under the stated supplier bounds, $M_k(f)$ is finite and strictly positive, and the integral defining $R_k(f)$ is absolutely convergent with $R_k(f)\ge0$.

## Definition references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[thm-soundararajan-weak-subconvexity-symmetric-square]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Theorems 1–2 and Lemmas 1–3](https://arxiv.org/pdf/0809.1636v1)

[Holowinsky, *Sieving for Mass Equidistribution*, §§1–4](https://arxiv.org/pdf/0809.1640v1)

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; an even integer $k\ge4$; and a normalized full-level holomorphic Hecke cusp eigenform $f$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: For every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n\in\mathbb N$.

[A3] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$.

[F1] [[def-normalized-full-level-holomorphic-hecke-eigenform]]: $f$ is a nonzero cusp form with finite Fourier coefficients $a_f(n)$, $a_f(1)=1$, and $T_nf=a_f(n)f$.

[F2] [[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]: $L(1,\operatorname{sym}^2 f)\ge c_1/\log k$ for an absolute $c_1>0$.

[F3] [[thm-soundararajan-weak-subconvexity-symmetric-square]]: For every $\delta>0$ and every real $t$, $|L(\tfrac12+it,\operatorname{sym}^2 f)|\ll_\delta k^{1/2}(1+|t|)^{3/4}(\log k)^{-1+\delta}$.

## Verification

1.1 Since $k\ge4$, $\log k>0$. There are finitely many primes $p\le k$, each $\lambda_f(p)$ is a finite complex number by [F1], and each factor $1+2|\lambda_f(p)|/p$ is strictly positive. By [F2], the denominator $L(1,\operatorname{sym}^2 f)$ is positive and finite. Therefore the finite product defining $M_k(f)$ is finite and strictly positive. [A1, A2, A3, F1, F2, given, algebra]

2.1 Apply [F3] with $\delta=1/2$. After division by $(1+|t|)^{10}$, the integrand in $R_k(f)$ is bounded by a constant depending on $k,f$ times $(1+|t|)^{-37/4}$. This function is integrable on $\mathbb R$, since its integral is $8/33$. The denominator $k^{1/2}L(1,\operatorname{sym}^2 f)$ is positive by [F2], so $R_k(f)$ is finite and nonnegative. The stated AC, DC and Countable Choice hypotheses enter through [F2] and [F3]; these finite-product and integral checks use no further choice. [A1, A2, A3, F2, F3, given, algebra] ∎
