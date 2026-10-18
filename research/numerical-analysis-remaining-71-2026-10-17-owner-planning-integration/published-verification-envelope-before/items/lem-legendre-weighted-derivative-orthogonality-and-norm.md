---
id: lem-legendre-weighted-derivative-orthogonality-and-norm
kind: lemma
title: "Legendre polynomials have explicit norms and weighted derivative orthogonality"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-legendre-polynomial-family-and-l2-pairing, thm-integration-by-parts, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the proof uses polynomial integration by parts and finite coefficient identities."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; Legendre weighted inner products and modal bases."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (complete book PDF); polynomial basis and spectral method setting. The formulas below are proved locally."
---

## Statement

For $m,n\ge0$, the polynomials of [[def-legendre-polynomial-family-and-l2-pairing]] satisfy
$$\int_{-1}^1P_n(x)P_m(x)\,dx=\frac{2}{2n+1}\,\delta_{mn}, \qquad \int_{-1}^1(1-x^2)P_n'(x)P_m'(x)\,dx=\frac{2n(n+1)}{2n+1}\,\delta_{mn},$$
where $\delta_{mn}=1$ if $m=n$ and $0$ otherwise. Each $P_n$ has degree $n$ and nonzero leading coefficient, so $P_0,\ldots,P_N$ form a basis of polynomials of degree at most $N$.

## Facts & Assumptions

**Given:** Nonnegative integers $m,n$ and the Rodrigues polynomials $P_k$.

[F1] [[def-legendre-polynomial-family-and-l2-pairing]]: $P_n=(2^nn!)^{-1}D^n(x^2-1)^n$ and $\langle p,q\rangle_L=\int_{-1}^1pq$.

[F2] [[thm-integration-by-parts]]: for differentiable factors with integrable derivatives on a closed interval, $\int uv'=[uv]-\int u'v$.

[F3] [[lem-derivative-of-a-power]]: $D(x^k)=kx^{k-1}$ for positive integer $k$, and constants differentiate to zero; repeated application gives the derivatives of monomials.

[F4] [[thm-algebra-of-derivatives]]: polynomial sums, products, and scalar multiples obey the usual derivative rules.

## Proof

1.1 Write $(x^2-1)^n=(x-1)^n(x+1)^n$. For every $j<n$, its $j$th derivative vanishes at both endpoints: by the product rule, every term differentiates each factor at most $j<n$ times and retains a positive power of the factor that vanishes at that endpoint. Thus $n$ integrations by parts in [F2] give, for every polynomial $q$ of degree less than $n$, $\int_{-1}^1P_nq=\frac{(-1)^n}{2^nn!}\int_{-1}^1(x^2-1)^nq^{(n)}=0,$ because $q^{(n)}=0$ by [F3]. Hence $P_n$ is orthogonal to every lower-degree polynomial. [F1, F2, F3, F4, given, induction]

2.1 The leading term of $(x^2-1)^n$ is $x^{2n}$; differentiating it $n$ times gives $(2n)!/n!$ times $x^n$ by [F3]. All other terms have lower degree after differentiation. Therefore $P_n$ has degree $n$ and leading coefficient $\kappa_n=(2n)!/(2^n(n!)^2)>0$. The distinct degrees imply the family $P_0,\ldots,P_N$ is linearly independent and spans every polynomial of degree at most $N$, by successive elimination of leading terms. [F1, F3, step 1.1, algebra]

3.1 Since $P_n-\kappa_nx^n$ has degree less than $n$, step 1.1 gives $\int_{-1}^1P_n^2=\kappa_n\int_{-1}^1P_nx^n.$ Apply [F2] $n$ times to the Rodrigues formula against $x^n$. The endpoint terms vanish as in step 1.1 and $(x^n)^{(n)}=n!$, so $\int_{-1}^1P_nx^n=\frac1{2^n}\int_{-1}^1(1-x^2)^n\,dx.$ [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Put $J_n=\int_{-1}^1(1-x^2)^n dx$. Then $J_0=2$. For $n\ge1$, the endpoint values of $x(1-x^2)^n$ are zero, so integrating its derivative gives $0=J_n-2n(J_{n-1}-J_n),\qquad J_n=\frac{2n}{2n+1}J_{n-1}.$ Induction yields $J_n=2^{2n+1}(n!)^2/(2n+1)!$. Substituting this and $\kappa_n$ from step 2.1 into step 3.1 gives $\int P_n^2=2/(2n+1)$. Together with step 1.1 this proves the first orthogonality formula, including $n=0$. [F2, F3, F4, step 1.1, step 2.1, step 3.1, induction, algebra]

5.1 When $n=0$, $P_0=1$ and $Q_0=-((1-x^2)P_0')'=0$, so $Q_0=0\cdot P_0$. Now take $n\ge1$ and define $Q_n=-((1-x^2)P_n')'$. Its leading term is $n(n+1)\kappa_nx^n$, so $Q_n-n(n+1)P_n$ has degree less than $n$. For any polynomial $q$ of degree less than $n$, two integrations by parts give $\int_{-1}^1Q_nq=\int_{-1}^1(1-x^2)P_n'q'=-\int_{-1}^1P_n((1-x^2)q')'=0,$ where both boundary terms vanish because of the factor $1-x^2$, and the last polynomial paired with $P_n$ has degree less than $n$, so step 1.1 applies. Therefore $Q_n-n(n+1)P_n$ is a lower-degree polynomial orthogonal to every lower-degree polynomial. Expand it in the basis from step 2.1; the first formula and the positive norms in step 4.1 force every coefficient to be zero. Thus $Q_n=n(n+1)P_n$. [F1, F2, F3, F4, step 1.1, step 2.1, step 4.1, algebra]

6.1 One integration by parts and step 5.1 give $\int_{-1}^1(1-x^2)P_n'P_m'=\int_{-1}^1Q_nP_m=n(n+1)\int_{-1}^1P_nP_m.$ The first formula, already proved in step 4.1 and step 1.1, yields the displayed weighted derivative identity for every $m,n\ge0$. [F1, F2, step 1.1, step 4.1, step 5.1, algebra] ∎

