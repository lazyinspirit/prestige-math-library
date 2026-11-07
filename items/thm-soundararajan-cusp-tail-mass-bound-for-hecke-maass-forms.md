---
id: thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms
kind: theorem
title: "Uniform cusp-tail mass bound for full-level Hecke–Maass forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-soundararajan-hecke-multiplicative-tail-estimate
  - thm-maass-hecke-eigenvalues-are-hecke-multiplicative
  - thm-maass-hecke-fourier-coefficient-relation
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - def-weight-zero-maass-form-on-gamma0n
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "Proposition 2 and proof, §2, printed pp. 3–4."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, Theorem 1.2 proof and cusp discussion, pp. 12–14."
---

## Statement

Let $u$ be a weight-zero Maass cusp form for $SL_2(\mathbb Z)$ that is an eigenfunction of every normalized Hecke operator and has Petersson norm $1$. For every real $T\ge1$,
$$\int_{\substack{|x|\le1/2\\y\ge T}}|u(x+iy)|^2\,\frac{dx\,dy}{y^2}
\le10^8\frac{1+\log T}{\sqrt T}.$$

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, Proposition 2 and §2, printed pp. 3–4.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 12–14.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A norm-one full-level joint Hecke–Maass cusp form $u$, its spectral parameter $t$, its Fourier coefficients $\rho_u(n)$, and $T\ge1$.

[F1] The Fourier–Whittaker expansion is
$u(x+iy)=\sum_{n\ne0}\rho_u(n)\sqrt y\,K_{it}(2\pi|n|y)e^{2\pi inx}$, with absolute uniform convergence in $x$ at every fixed $y>0$ ([[thm-fourier-whittaker-expansion-maass-cusp-forms]]).

[F2] For $n\ge1$, $\rho_u(n)=\lambda_u(n)\rho_u(1)$ and $\rho_u(-n)=\lambda_u(n)\rho_u(-1)$, with $A:=|\rho_u(1)|^2+|\rho_u(-1)|^2>0$ ([[thm-maass-hecke-fourier-coefficient-relation]]).

[F3] The eigenvalue sequence satisfies the Hecke relation and, for $1\le T\le s$,
$$\sum_{n\le s/T}|\lambda_u(n)|^2\le10^8\frac{1+\log T}{\sqrt T}\sum_{n\le s}|\lambda_u(n)|^2$$ ([[thm-maass-hecke-eigenvalues-are-hecke-multiplicative]], [[thm-soundararajan-hecke-multiplicative-tail-estimate]]).

[F4] The Petersson norm is the integral of $|u|^2y^{-2}dx\,dy$ over a standard fundamental domain; the region $|x|\le1/2,y\ge1$ lies in its closure, whose boundary has measure zero ([[def-weight-zero-maass-form-on-gamma0n]], [[thm-standard-fundamental-domain-for-the-modular-group]]).

[F5] For a nonnegative measurable function on sigma-finite measure spaces, the sum/integral over a product can be interchanged by Tonelli's theorem ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

1.1 Fix $y>0$ and take finite partial sums of [F1]. Orthogonality on $[-1/2,1/2]$ gives
$$\int_{-1/2}^{1/2}\left|\sum_{0<|n|\le N}\rho_u(n)\sqrt y\,K_{it}(2\pi|n|y)e^{2\pi inx}\right|^2dx
=y\sum_{0<|n|\le N}|\rho_u(n)|^2|K_{it}(2\pi|n|y)|^2.$$
The partial sums converge uniformly in $x$ by [F1], so their squared integrals converge to the integral of $|u(x+iy)|^2$. Letting $N\to\infty$ proves
$$\int_{-1/2}^{1/2}|u(x+iy)|^2dx
=y\sum_{n\ne0}|\rho_u(n)|^2|K_{it}(2\pi|n|y)|^2.$$ [F1, given, algebra]

1.2 Integrate step 1.1 over $y\ge T$ with measure $dy/y^2$, and use [F2]. All terms are nonnegative, so [F5] permits the sum and integral to be interchanged. For each $n\ge1$ change variables $s=ny$; grouping positive and negative indices gives
$$\int_{\substack{|x|\le1/2\\y\ge T}}|u(x+iy)|^2\frac{dx\,dy}{y^2}
=A\int_T^\infty |K_{it}(2\pi s)|^2
\sum_{n\le s/T}|\lambda_u(n)|^2\,\frac{ds}{s}.$$ [F2, F5, step 1.1, construct]

2.1 For each $s\ge T$, apply [F3] with $x=s$ and $y=T$. The right side of step 1.2 is at most
$$10^8\frac{1+\log T}{\sqrt T}\,
A\int_T^\infty |K_{it}(2\pi s)|^2\sum_{n\le s}|\lambda_u(n)|^2\,\frac{ds}{s}.$$
Since $T\ge1$ and the integrand is nonnegative,
$$A\int_T^\infty |K_{it}(2\pi s)|^2\sum_{n\le s}|\lambda_u(n)|^2\,\frac{ds}{s}
\le A\int_1^\infty |K_{it}(2\pi s)|^2\sum_{n\le s}|\lambda_u(n)|^2\,\frac{ds}{s}.$$
Applying step 1.1 with lower height $1$ and the same change of variables identifies the expression on the right with the mass of $u$ on $|x|\le1/2,y\ge1$. By [F4] this region lies in the closure of a fundamental domain, so its mass is at most the norm $1$. The desired bound follows. [F3, F4, step 1.1, step 1.2, algebra] ∎
