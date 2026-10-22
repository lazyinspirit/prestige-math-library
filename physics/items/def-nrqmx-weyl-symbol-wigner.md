---
id: def-nrqmx-weyl-symbol-wigner
kind: definition
domain: mathematics
library: mathematics
title: Schwartz Weyl quantization and Wigner distributions
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-schwartz-space-and-its-seminorms
  - def-complex-lp-and-euclidean-test-function-conventions
  - thm-algebra-of-derivatives
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: Definition 3.10, printed pp. 16–17
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 1, §1, printed pp. 15–17; Lecture 2, §2.2, printed pp. 41–42
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 4, §§4.1–4.3, printed pp. 54–67
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $d\geq1$, let $0<\epsilon$ be a dimensionless parameter, and use the Schwartz space $\mathcal S(\mathbb R^d)$ of [[def-schwartz-space-and-its-seminorms]]. For $a\in\mathcal S(\mathbb R^{2d})$, define the Weyl quantization on $u\in\mathcal S(\mathbb R^d)$ by

$$ (\operatorname{Op}^W_\epsilon(a)u)(x):=(2\pi\epsilon)^{-d}\int_{\mathbb R^d}\int_{\mathbb R^d} e^{i(x-y)\cdot\xi/\epsilon}a\!\left(\frac{x+y}{2},\xi\right)u(y)\,d\xi\,dy . $$

The integral is absolutely convergent for each fixed $x$, since its integrand is Schwartz in $(y,\xi)$. The Wigner integral below is absolutely convergent for each $(x,\xi)$ for the same reason.

For $u\in\mathcal S(\mathbb R^d)$ satisfying
$$\int_{\mathbb R^d}|u(x)|^2\,dx=1,$$
define its Wigner distribution by

$$ W_\epsilon[u](x,\xi):=(2\pi\epsilon)^{-d}\int_{\mathbb R^d}e^{-iy\cdot\xi/\epsilon}u(x+y/2)\overline{u(x-y/2)}\,dy . $$

Use the inner product $\langle f,g\rangle=\int f(x)\overline{g(x)}\,dx$, linear in its first argument ([[def-complex-lp-and-euclidean-test-function-conventions]]). Define the scaled Fourier transform on $\mathcal S(\mathbb R^d)$ by

$$ (\mathcal F_\epsilon u)(\xi):=(2\pi\epsilon)^{-d/2}\int_{\mathbb R^d}e^{-ix\cdot\xi/\epsilon}u(x)\,dx . $$

For the coordinate and momentum observables define $Q_j u=x_j u$ and $P_j u=-i\epsilon\partial_{x_j}u$ on $\mathcal S(\mathbb R^d)$. Applying the real product rule ([[thm-algebra-of-derivatives]]) to the real and imaginary components, with the componentwise derivative convention of [[def-complex-lp-and-euclidean-test-function-conventions]], gives
$$ Q_jP_ku=-i\epsilon x_j\partial_{x_k}u,\qquad P_kQ_ju=-i\epsilon(\delta_{jk}u+x_j\partial_{x_k}u),\qquad [Q_j,P_k]u:=Q_jP_ku-P_kQ_ju=i\epsilon\delta_{jk}u. $$
This fixes the Poisson and Moyal signs used on this page.

## Definition references

[[def-schwartz-space-and-its-seminorms]]

[[def-complex-lp-and-euclidean-test-function-conventions]]

## Remarks

For a physical interpretation, after choosing a length $L_0$ and momentum $P_0$, put $S_0=L_0P_0$ and $\epsilon=\hbar/S_0$. The formulas here use dimensionless variables $x=x_{\rm phys}/L_0$ and $\xi=p_{\rm phys}/P_0$; dimensional variables must be restored before interpreting an application. No physical measurement or postulate is part of this mathematical definition.
