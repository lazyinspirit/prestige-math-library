---
id: thm-prime-number-theorem-arithmetic-progressions
title: "Prime number theorem arithmetic progressions"
kind: theorem
status: published
origin: pipeline
deps: [lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, thm-dirichlet-character-orthogonality, lem-monotone-chebyshev-tauberian-desmoothing, lem-chebyshev-functions-prime-power-comparison, lem-prime-counting-chebyshev-partial-summation, lem-logarithmic-integral-asymptotic-expansion]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a74.4, Theorem 4.12 and proof"
      url: https://kskedlaya.org/ant/chap-primes-in-ap.html
proof_strategy: direct argument
---

## Statement

For every fixed integer $q\ge1$ and integer a with $\gcd(a,q)=1$, define $\psi(x;q,a)$, $\theta(x;q,a)$ and $\pi(x;q,a)$ by restricting their defining sums to integers, respectively primes, congruent to a modulo q. Then
$$\psi(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\theta(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\pi(x;q,a)\sim\frac{\operatorname{Li}(x)}{\varphi(q)}.$$
No uniformity in a growing modulus is asserted.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-dirichlet-character-chebyshev-laplace-transform]]: Fix a Dirichlet character $\chi$ modulo $q\ge1$. Put $\Psi_\chi(x)=\sum_{n\le x}\chi(n)\Lambda(n)$ and $\delta_\chi=1$ for the principal character, zero otherwise. The bounded, locally integrable function $f_\chi(t)=e^{-t}\Psi_\chi(e^t)-\delta_\chi$ has Laplace transform $g_\chi(s)=-\frac{L'(s+1,\chi)}{(s+1)L(s+1,\chi)}-\frac{\delta_\chi}{s}\quad(\operatorname{Re}s>0).$ After the removable value at zero is filled in, this extends holomorphically to an open neighborhood of the closed right half-plane.

[F2] [[thm-newman-zagier-tauberian-theorem]]: Let $f:[0,\infty)\to\mathbb C$ be bounded and locally Lebesgue integrable. If $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$, initially defined for $\operatorname{Re}z>0$, extends holomorphically to an open set containing $\{\operatorname{Re}z\ge0\}$, then $\lim_{T\to\infty}\int_0^T f(t)\,dt=g(0).$

[F3] [[thm-dirichlet-character-orthogonality]]: Let $G=(\mathbb Z/q\mathbb Z)^\times$, and let the sum range over all Dirichlet characters modulo $q$. 1. For unit classes $a,b\in G$, $\sum_{\chi\bmod q}\chi(a)\overline{\chi(b)}= \begin{cases} \varphi(q),&a=b,\\ 0,&a\ne b. \end{cases}$ 2. For Dirichlet characters $\chi,\psi$ modulo $q$, $\sum_{a\in G}\chi(a)\overline{\psi(a)}= \begin{cases} \varphi(q),&\chi=\psi,\\ 0,&\chi\ne\psi. \end{cases}$

[F4] [[lem-monotone-chebyshev-tauberian-desmoothing]]: Let $A:[1,\infty)\to[0,\infty)$ be nondecreasing and locally integrable, with $A(x)=O(x)$, and let $a\ge0$. If $\int_1^\infty(A(x)-ax)x^{-2}\,dx$ converges, then $A(x)/x\to a$.

[F5] [[lem-chebyshev-functions-prime-power-comparison]]: There are positive constants $K_1,K_2$ such that for every real $x\ge2$, $ 0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x $ and, for all sufficiently large $x$, $ \psi(x)-\theta(x)\le K_2\sqrt{x}. $

[F6] [[lem-prime-counting-chebyshev-partial-summation]]: For every real $x\ge2$, $ \pi(x)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt. $

[F7] [[lem-logarithmic-integral-asymptotic-expansion]]: For each fixed integer $m\ge1$, as $x\to\infty$, $\operatorname{Li}(x)=\sum_{j=0}^{m-1}\frac{j!x}{\log^{j+1}x}+O_m\left(\frac{x}{\log^{m+1}x}\right).$

## Proof

1.1 For each of the finitely many characters, the transform lemma and Newman theorem show convergence of $\int_1^\infty(\Psi_\chi(x)-\delta_\chi x)x^{-2}\,dx$. This uses the change of variable $x=e^t$ in the convergent truncated integrals. [F1, F2]

2.1 Orthogonality gives $\psi(x;q,a)=\varphi(q)^{-1}\sum_\chi\overline{\chi(a)}\Psi_\chi(x)$. For nonunits every character term is zero and, as a is a unit, so is the residue-class indicator. Thus finite summation of the preceding convergent integrals yields convergence for $\psi(x;q,a)-x/\varphi(q)$. This residue-class psi is nonnegative, nondecreasing and O(x), so desmoothing proves its asymptotic. No monotonicity of complex character sums was assumed. [F3, F4, step 1.1]

3.1 The difference between class psi and class theta is nonnegative and bounded by the global prime-power difference, hence is o(x). Therefore class theta has the same main coefficient $b=1/\varphi(q)$. [F5, step 2.1]

4.1 The Abel identity for this finite prime sum follows directly by summing $1=\log p/\log x+\log p\int_p^x dt/(t\log^2t)$ over its primes. Hence class pi is class theta divided by log x plus its Abel integral. With $\theta(t;q,a)=bt+o(t)$, that integral is $O(x/\log^2x)$ by splitting at square root x, so $\pi(x;q,a)\sim bx/\log x\sim b\operatorname{Li}(x)$. The argument includes q=1 and allows constants to depend on q. [F6, F7, step 3.1] ∎
