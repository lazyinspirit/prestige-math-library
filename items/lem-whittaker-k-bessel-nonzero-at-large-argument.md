---
id: lem-whittaker-k-bessel-nonzero-at-large-argument
kind: lemma
title: "The Maass Whittaker K-factor is nonzero at large argument"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-maass-spectral-parameter
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - thm-complex-trigonometric-and-hyperbolic-power-series
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-dominated-convergence
  - lem-gaussian-integral-is-finite-and-positive
  - thm-sequential-criterion-for-function-limits
  - def-real-exponential-function-and-e
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§2, Fourier–Whittaker argument, printed pp. 3–4; asymptotic of K_it at large argument."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, Fourier–Whittaker expansion and cusp analysis, pp. 12–14."
---

## Statement

For every Maass spectral parameter $t\in\mathbb R\cup i[0,1/2]$, the Whittaker factor
$$K_{it}(r)=\int_0^\infty e^{-r\cosh v}\cos(tv)\,dv$$
satisfies
$$\lim_{r\to\infty}e^r\sqrt r\,K_{it}(r)=\int_0^\infty e^{-w^2/2}\,dw>0.$$
In particular, $K_{it}(r)\ne0$ for every sufficiently large $r$.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §2, printed pp. 3–4.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 12–14.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A spectral parameter $t\in\mathbb R\cup i[0,1/2]$ and the integral definition of $K_{it}$ in the Statement.

[F1] The Maass spectral parameter belongs to $\mathbb R\cup i[0,1/2]$ ([[def-maass-spectral-parameter]]).

[F2] For $r>0$, $K_{it}(r)=\int_0^\infty e^{-r\cosh v}\cos(tv)\,dv$ ([[thm-fourier-whittaker-expansion-maass-cusp-forms]]).

[F3] $\cosh z=\sum_{k\ge0}z^{2k}/(2k)!$ and $\cos z=\sum_{k\ge0}(-1)^kz^{2k}/(2k)!$ for every complex $z$ ([[thm-complex-trigonometric-and-hyperbolic-power-series]]).

[F4] Dominated convergence passes pointwise limits through the integral under one integrable majorant ([[thm-dominated-convergence]]).

[F5] The full Gaussian integral $\int_{\mathbb R}e^{-x^2}\,dx$ is finite and positive; by evenness and scaling, $\int_0^\infty e^{-w^2/2}\,dw$ is finite and positive ([[lem-gaussian-integral-is-finite-and-positive]]).

[F6] A real function tends to $L$ at infinity if and only if every sequence $r_j\to\infty$ has function values tending to $L$ ([[thm-sequential-criterion-for-function-limits]]).

[F7] For real $u$, $e^u=\sum_{n\ge0}u^n/n!$ ([[def-real-exponential-function-and-e]]).

[F8] $|\cos x|\le1$ for every real $x$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

1.1 For $r\ge1$, substitute $w=\sqrt r\,v$ in [F2] to get $$e^r\sqrt r\,K_{it}(r)=\int_0^\infty e^{-r(\cosh(w/\sqrt r)-1)}\cos(tw/\sqrt r)\,dw.$$ By the power series [F3], for each fixed $w$ the integrand tends to $e^{-w^2/2}$ as $r\to\infty$: the quadratic term is $w^2/2$, every higher term has a factor $r^{1-k}$ with $k\ge2$, and $\cos(tw/\sqrt r)\to1$. [F2, F3, construct, algebra]

2.1 If $t\in\mathbb R$, then [F8] gives $|\cos(tw/\sqrt r)|\le1$, and [F3] gives $\cosh u\ge1+u^2/2$ for real $u$, so the integrand magnitude in step 1.1 is at most $e^{-w^2/2}$. If $t=i\tau$ with $0\le\tau\le1/2$, then $\cos(tw/\sqrt r)=\cosh(\tau w/\sqrt r)$ by the power series [F3]; those series and [F7] give $\cosh u\le e^u$ for $u\ge0$. Thus the magnitude is at most $e^{-w^2/2+\tau w/\sqrt r}\le e^{-w^2/2+w/2}$. This is integrable because $$e^{-w^2/2+w/2}=e^{1/8}e^{-(w-1/2)^2/2},$$ and its integral is at most $e^{1/8}\sqrt2\int_{\mathbb R}e^{-x^2}\,dx<\infty$ by translation and scaling. Thus both cases have an integrable majorant. [F1, F3, F5, F7, F8, step 1.1, algebra]

3.1 Apply [F4] to any sequence $r_j\to\infty$ using the pointwise limit in step 1.1 and the integrable majorants in step 2.1. It gives $$\lim_{j\to\infty}e^{r_j}\sqrt{r_j}\,K_{it}(r_j) =\int_0^\infty e^{-w^2/2}\,dw.$$ The sequential criterion [F6] proves the claimed limit as $r\to\infty$. Its value is positive by [F5], so the expression, and therefore $K_{it}(r)$, is nonzero for all sufficiently large $r$. [F4, F5, F6, step 1.1, step 2.1, construct] ∎
