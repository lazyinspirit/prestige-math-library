---
id: lem-fd-negative-space-nonlinear-bound
kind: lemma
title: Quadratic transport in negative Sobolev space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-solenoidal-spaces, thm-fourier-basis-and-parseval-on-the-n-torus, thm-holder-inequality-for-integrals]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
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

Let $d\ge2$, $L>0$, $r>d/2+1$, and $a\in L^2(\mathbb T_L^d;\mathbb R^d)$.
For the Fourier projection $P$ and divergence convention of
Periodic solenoidal Fourier spaces, the distribution $P\operatorname{div}(a\otimes a)$ belongs to $H^{-r}$ and satisfies
$$\|P\operatorname{div}(a\otimes a)\|_{H^{-r}}\le C(d,L,r)\|a\|_2^2.$$
Here $(a\otimes a)_{ij}=a_i a_j$ and
$(\operatorname{div}A)_i=\sum_j\partial_jA_{ij}$. The estimate uses no
three-dimensional singular-integral bound.

## Statement references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.3.2, pp. 44–46](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** $d\ge2$, $L>0$, $r>d/2+1$, and $a\in L^2(\mathbb T_L^d;\mathbb R^d)$.

[F1] [[def-fd-periodic-solenoidal-spaces]]: $P_k$ is an orthogonal contraction, derivatives multiply Fourier coefficients by $i\kappa_k$, and the $H^{-r}$ norm uses the weight $(1+L^2|\kappa_k|^2)^{-r}$.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: Fourier coefficients and Parseval apply to the normalized torus after rescaling by $L$.

[F3] [[thm-holder-inequality-for-integrals]]: Cauchy–Schwarz bounds each Fourier coefficient of the $L^1$ product $a_i a_j$ by $\|a_i\|_2\|a_j\|_2$.

## Proof

1.1 Since $a_i a_j\in L^1$, its $k$th Fourier coefficient is an ordinary integral. Cauchy–Schwarz gives $|\widehat{a_i a_j}(k)|\le\|a_i\|_2\|a_j\|_2$, hence the Euclidean tensor norm of this coefficient is at most $C_d\|a\|_2^2$. The coefficient of its divergence is obtained by multiplying by $i\kappa_k$, and $P_k$ does not increase its norm. [given, F1, F3]

1.2 The square of the resulting negative norm is bounded by
$C_d\|a\|_2^4\sum_{k\in\mathbb Z^d}(1+L^2|\kappa_k|^2)^{-r}|\kappa_k|^2$.
For lattice shell $m\le|k|<m+1$, the number of points is at most $C_dm^{d-1}$, while each summand is at most $C_{L,r}m^{2-2r}$ for $m\ge1$; the shell series is dominated by $\sum_m m^{d+1-2r}$, which converges because $r>d/2+1$. The zero mode contributes zero. Taking square roots proves the bound and that the coefficients define an element of $H^{-r}$. [given, F1, F2, step 1.1] ∎
