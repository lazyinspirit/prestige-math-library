---
id: thm-maass-hecke-fourier-coefficient-relation
kind: theorem
title: "Fourier coefficients of a level-one Hecke–Maass eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
  - def-hecke-operator-on-weight-zero-maass-forms
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - lem-whittaker-k-bessel-nonzero-at-large-argument
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§2, Fourier expansion and Hecke eigenvalues, printed pp. 3–4."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, Fourier coefficient action of Hecke operators, printed pp. 28–29."
---

## Statement

Let $u$ be a nonzero weight-zero Maass cusp form for $SL_2(\mathbb Z)$ that is an eigenfunction of all normalized Hecke operators, with $T_nu=\lambda_u(n)u$. Write its Fourier–Whittaker expansion at the cusp as
$$u(x+iy)=\sum_{m\in\mathbb Z\setminus\{0\}}\rho_u(m)\sqrt y\,K_{it}(2\pi|m|y)e^{2\pi imx},$$
where $t$ is its spectral parameter. Then for every $n\ge1$,
$$\rho_u(n)=\lambda_u(n)\rho_u(1),\qquad
\rho_u(-n)=\lambda_u(n)\rho_u(-1),$$
and $|\rho_u(1)|^2+|\rho_u(-1)|^2>0$.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §2, printed pp. 3–4.](https://arxiv.org/pdf/0901.4060v1)

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

**Given:** A nonzero full-level joint Hecke eigenfunction $u$, its spectral parameter $t$, and the Fourier–Whittaker expansion in the Statement.

[F1] For $n\ge1$, $T_nf(z)=n^{-1/2}\sum_{ad=n}\sum_{b\bmod d}f((az+b)/d)$, where $ad=n$ and $b$ runs modulo $d$ ([[def-hecke-operator-on-weight-zero-maass-forms]]).

[F2] A weight-zero Maass cusp form has the absolutely and locally uniformly convergent Fourier–Whittaker expansion displayed in the Statement, with no constant term ([[thm-fourier-whittaker-expansion-maass-cusp-forms]]).

[F3] The joint eigenvalue sequence is $\lambda_u(n)$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

[F4] For the fixed spectral parameter $t$, $K_{it}(r)\ne0$ for every sufficiently large $r$ ([[lem-whittaker-k-bessel-nonzero-at-large-argument]]).

## Proof

1.1 Fix $n\ge1$. In the finite formula [F1], apply each term to the expansion [F2]. For a Fourier mode of index $k\ne0$, the sum over $b\bmod d$ is $d$ when $d\mid k$ and is $0$ otherwise. Writing $k=d\ell$ in the surviving terms, the new frequency is $a\ell$ and the Bessel argument is $2\pi|a\ell|y$. The coefficient multiplier is
$$n^{-1/2}d\sqrt{a/d}=1,$$
because $ad=n$. Consequently, for each nonzero integer $m$, the coefficient of frequency $m$ in $T_nu$ is
$$\sum_{a\mid\gcd(|m|,n)}\rho_u(mn/a^2).$$
Indeed, the conditions $m=a\ell$, $k=d\ell$, and $ad=n$ are equivalent to $a\mid\gcd(|m|,n)$ and $k=mn/a^2$. The finite operator sum and the absolute uniform convergence in [F2] justify termwise summation. [F1, F2, given, algebra]

2.1 Since $T_nu=\lambda_u(n)u$, integrate the two uniformly convergent expansions against $e^{-2\pi imx}$ to equate their $m$th Fourier coefficients. By [F4], choose $y$ large enough that $K_{it}(2\pi|m|y)\ne0$; division by the common factor $\sqrt yK_{it}(2\pi|m|y)$ gives
$$\lambda_u(n)\rho_u(m)=\sum_{a\mid\gcd(|m|,n)}\rho_u(mn/a^2).$$
Taking $m=1$ leaves the single term $\rho_u(n)$, and taking $m=-1$ leaves $\rho_u(-n)$. These are the two asserted coefficient identities. [F3, step 1.1, algebra]

3.1 If $\rho_u(1)=\rho_u(-1)=0$, step 2.1 makes every nonzero Fourier coefficient vanish. The expansion [F2] then gives $u=0$, contrary to the hypothesis. Therefore $|\rho_u(1)|^2+|\rho_u(-1)|^2>0$. [F2, step 2.1, given, algebra] ∎
