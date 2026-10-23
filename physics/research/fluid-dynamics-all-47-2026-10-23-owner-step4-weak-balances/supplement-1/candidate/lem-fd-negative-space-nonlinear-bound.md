---
id: lem-fd-negative-space-nonlinear-bound
kind: lemma
title: Quadratic transport in negative Sobolev space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-solenoidal-spaces, thm-fourier-basis-and-parseval-on-the-n-torus, thm-holder-inequality-for-integrals, def-countable-choice]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.3.2, printed pp. 44–46; this proof uses a direct Fourier estimate."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§4, printed pp. 8–12; this proof does not import its abstract compactness step."
---

## Statement

Assume Countable Choice. Let $d\ge2$, $L>0$, $r>d/2+1$, and $a\in L^2(\mathbb T_L^d;\mathbb R^d)$.
Use the Fourier multipliers $P_k$, negative-space norm and divergence convention of Periodic solenoidal Fourier spaces. Identify an $H^{-r}$ coefficient sequence $c=(c_k)$ with the periodic distribution
$$\langle T_c,\varphi\rangle=\sum_{k\in\mathbb Z^d}c_k\cdot\widehat\varphi(-k)\qquad(\varphi\in C^\infty(\mathbb T_L^d;\mathbb C^d)),$$
using the bilinear pairing and normalized measure. On $H^{-r}$ define $P$ by $(Pc)_k=P_kc_k$; this is the extension of the $L^2$ projection under this distribution identification. Then $\operatorname{div}(a\otimes a)$ and $P\operatorname{div}(a\otimes a)$ belong to $H^{-r}$, and the projected distribution satisfies
$$\|P\operatorname{div}(a\otimes a)\|_{H^{-r}}\le C(d,L,r)\|a\|_2^2.$$
Here $(a\otimes a)_{ij}=a_i a_j$ and
$(\operatorname{div}A)_i=\sum_j\partial_jA_{ij}$. The estimate uses no
three-dimensional singular-integral bound.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.3.2, pp. 44–46](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Countable Choice, $d\ge2$, $L>0$, $r>d/2+1$, and $a\in L^2(\mathbb T_L^d;\mathbb R^d)$.

[F1] [[def-fd-periodic-solenoidal-spaces]]: under Countable Choice, $P_k$ is an orthogonal contraction; derivatives multiply Fourier coefficients by $i\kappa_k$, and the $H^{-r}$ norm uses the weight $(1+L^2|\kappa_k|^2)^{-r}$.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, Fourier coefficients and Parseval apply to the normalized torus after rescaling by $L$.

[F3] [[thm-holder-inequality-for-integrals]]: Cauchy–Schwarz bounds each Fourier coefficient of the $L^1$ product $a_i a_j$ by $\|a_i\|_2\|a_j\|_2$.

## Proof

1.1 Put $w_k=(1+L^2|\kappa_k|^2)^r$. For any sequence $c$ with $\sum_kw_k^{-1}|c_k|^2<\infty$, Cauchy–Schwarz gives $|\sum_kc_k\cdot\widehat\varphi(-k)|\le\|c\|_{H^{-r}}(\sum_kw_k|\widehat\varphi(-k)|^2)^{1/2}$. Repeated integration by parts bounds the last factor by a constant times $p_M(\varphi)$ for an integer $M>r+d/2$, because smooth Fourier coefficients decay as $(1+|k|)^{-M}$. Thus the displayed pairing is absolutely convergent and continuous, so defines a periodic distribution; testing on one character recovers each $c_k$, proving injectivity. It agrees with the regular distribution of an $L^2$ field by Fourier truncation and Parseval. Since $\|P_k\|\le1$, coefficient multiplication by $P_k$ is a contraction on $H^{-r}$, preserves real conjugate symmetry, and agrees on $L^2$ with the supplied projection. Now $a_i a_j\in L^1$ and Cauchy–Schwarz gives $|\widehat{a_i a_j}(k)|\le\|a_i\|_2\|a_j\|_2$, hence the Euclidean tensor norm of this coefficient is at most $C_d\|a\|_2^2$. The unprojected divergence coefficient is $b_k=i\sum_j\kappa_{k,j}\widehat{a_{\cdot}a_j}(k)$ and has size at most $C_d|\kappa_k|\|a\|_2^2$. [given, F1, F2, F3, algebra]

2.1 The square of the unprojected negative norm is bounded by
$C_d\|a\|_2^4\sum_{k\in\mathbb Z^d}(1+L^2|\kappa_k|^2)^{-r}|\kappa_k|^2$.
For lattice shell $m\le|k|<m+1$, the number of points is at most $C_dm^{d-1}$, while each summand is at most $C_{L,r}m^{2-2r}$ for $m\ge1$; the shell series is dominated by $\sum_m m^{d+1-2r}$, which converges because $r>d/2+1$. The zero mode contributes zero. Therefore $b$ defines an element of $H^{-r}$. Its distribution agrees with the original divergence: rectangular Fourier sums of a smooth test converge with their first derivatives uniformly, so integration against the $L^1$ tensor passes to that limit and gives precisely the coefficient pairing of step 1.1. The extension $P$ defined there applies to this distribution and is a contraction; taking square roots proves the stated projected bound. [given, F1, F2, step 1.1] ∎

