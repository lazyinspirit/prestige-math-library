---
id: ex-newman-tauberian-prime-number-theorem
title: "Newman tauberian prime number theorem"
kind: example
status: published
origin: pipeline
deps: [lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, lem-monotone-chebyshev-tauberian-desmoothing, cor-prime-number-theorem]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a7\u00a71.3\u20131.4"
      url: https://kskedlaya.org/ant/chap-pnt.html
proof_strategy: direct argument
---

## Example

For $f(t)=e^{-t}\psi(e^t)-1$, its transform is
$$-\frac{\zeta'(s+1)}{(s+1)\zeta(s+1)}-\frac1s.$$
Newman's theorem and monotone desmoothing recover $\psi(x)\sim x$ without a quantitative zero-free region.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-dirichlet-character-chebyshev-laplace-transform]]: Fix a Dirichlet character $\chi$ modulo $q\ge1$. Put $\Psi_\chi(x)=\sum_{n\le x}\chi(n)\Lambda(n)$ and $\delta_\chi=1$ for the principal character, zero otherwise. The bounded, locally integrable function $f_\chi(t)=e^{-t}\Psi_\chi(e^t)-\delta_\chi$ has Laplace transform $g_\chi(s)=-\frac{L'(s+1,\chi)}{(s+1)L(s+1,\chi)}-\frac{\delta_\chi}{s}\quad(\operatorname{Re}s>0).$ After the removable value at zero is filled in, this extends holomorphically to an open neighborhood of the closed right half-plane.

[F2] [[thm-newman-zagier-tauberian-theorem]]: Let $f:[0,\infty)\to\mathbb C$ be bounded and locally Lebesgue integrable. If $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$, initially defined for $\operatorname{Re}z>0$, extends holomorphically to an open set containing $\{\operatorname{Re}z\ge0\}$, then $\lim_{T\to\infty}\int_0^T f(t)\,dt=g(0).$

[F3] [[lem-monotone-chebyshev-tauberian-desmoothing]]: Let $A:[1,\infty)\to[0,\infty)$ be nondecreasing and locally integrable, with $A(x)=O(x)$, and let $a\ge0$. If $\int_1^\infty(A(x)-ax)x^{-2}\,dx$ converges, then $A(x)/x\to a$.

## Verification

1.1 The character-transform lemma at q=1 proves boundedness, local integrability, the displayed transform and its continuation through the closed boundary, including the cancellation at s=0. [F1]

2.1 Newman gives convergence of $\int_0^\infty f(t)\,dt=\int_1^\infty(\psi(x)-x)x^{-2}\,dx$. Since psi is nonnegative, nondecreasing and O(x), desmoothing with a=1 yields $\psi(x)/x\to1$. This is the qualitative assertion; no estimate of a uniform continuation width was needed. [F2, F3, step 1.1] ∎
