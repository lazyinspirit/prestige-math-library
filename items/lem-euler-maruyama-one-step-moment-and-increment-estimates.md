---
id: lem-euler-maruyama-one-step-moment-and-increment-estimates
kind: lemma
title: "Euler–Maruyama one-step moment and increment estimates"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-euler-maruyama
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §1 and §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Statement

Let $p\ge2$, $0\le\delta\le1$, and $s\ge0$ with $s+\delta\le T$. Let
$U$ be an $\mathcal F_s$-measurable $\mathbb R^d$-valued random variable
with $\mathbb E|U|^p<\infty$. Assume $W_{s+\delta}-W_s$ is independent of
$\mathcal F_s$ with law $N_m(0,\delta I_m)$. Let
$b_s:\mathbb R^d\to\mathbb R^d$ and
$\sigma_s:\mathbb R^d\to\mathbb R^{d\times m}$ be measurable and satisfy
$$|b_s(x)|^2+\|\sigma_s(x)\|_F^2\le K^2(1+|x|^2).$$
Set $V=U+\delta b_s(U)+\sigma_s(U)(W_{s+\delta}-W_s)$. There is a
constant $C_{p,m,K}$, independent of $s,\delta,U$, such that
$$\mathbb E(|V|^p\mid\mathcal F_s)\le (1+C_{p,m,K}\delta)|U|^p+C_{p,m,K}\delta$$
and
$$\mathbb E(|V-U|^2\mid\mathcal F_s)\le C_{2,m,K}\delta(1+|U|^2).$$
The first estimate controls a grid step and, with
$\delta=t-t_k$, the interpolated value on one grid interval. The second
estimate is the interpolation increment bound. The global state-Lipschitz
and time-Hölder assumptions of [[alg-euler-maruyama]] are not needed for
these one-step bounds; the uniform linear-growth bound is enough.

## Facts & Assumptions

**Given:** The Axiom of Choice, finite dimensions $d,m$, $p\ge2$,
$0\le\delta\le1$, the coefficient growth bound in the Statement, and an
$\mathcal F_s$-measurable $U\in L^p$.

[F1] A standard $m$-dimensional Brownian motion has increments with law
$N_m(0,\delta I_m)$ for a time increment of length $\delta$.
[[def-d-dimensional-brownian-motion]]

[F2] The shared coefficient bound is
$|b(t,x)|^2+\|\sigma(t,x)\|_F^2\le K^2(1+|x|^2)$.
[[alg-euler-maruyama]]

[F3] A multivariate normal law $N_m(0,I_m)$ is realized using independent
standard-normal coordinates.
[[def-multivariate-normal-law]]

[F4] A standard normal coordinate has density $e^{-x^2/2}/\sqrt{2\pi}$.
[[def-standard-normal-and-normal-laws]]

[A1] The increment $W_{s+\delta}-W_s$ is independent of $\mathcal F_s$; this
filtration-relative independence is an explicit hypothesis, as required for
conditional estimates.

[A2] The Axiom of Choice (AC) asserts that every family of nonempty sets has
a choice function.
[[def-axiom-of-choice]]

## Proof

1.1 The law in [F1] has the representation $\sqrt{\delta}Z$ with $Z$ realized as in [F3]. By [F4] each coordinate has density $e^{-x^2/2}/\sqrt{2\pi}$. Its $p$th absolute moment is finite: the integral on $[-1,1]$ is finite, and for $|x|\ge1$ the function $|x|^pe^{-x^2/4}$ is bounded, so $|x|^pe^{-x^2/2}\le C_pe^{-x^2/4}$. The finite-dimensional inequality $|Z|^p\le m^{p/2-1}\sum_{j=1}^m|Z_j|^p$ then gives $\mathbb E|Z|^p<\infty$ and $\mathbb E(|\sigma_s(U)(W_{s+\delta}-W_s)|^p\mid\mathcal F_s)\le c_{p,m}\delta^{p/2}\|\sigma_s(U)\|_F^p$. For $\delta=0$ the increment is zero. [F1, F3, F4, A1, algebra]

1.2 For $\phi(x)=|x|^p$, direct differentiation gives $\|D^2\phi(x)\|\le C_p|x|^{p-2}$ for $p\ge2$. Apply the one-dimensional Taylor formula with integral remainder to $r\mapsto\phi(U+rR)$, where $R=\delta b_s(U)+\sigma_s(U)(W_{s+\delta}-W_s)$. The triangle inequality and $(a+b)^q\le C_q(a^q+b^q)$ for $q\ge0$ yield $\phi(U+R)\le\phi(U)+D\phi(U)R+C_p(|U|^{p-2}|R|^2+|R|^p)$. [given, algebra]

1.3 The drift term in $V-U$ is $\mathcal F_s$-measurable and the Brownian increment is conditionally centered with covariance $\delta I_m$. Therefore the cross term has conditional expectation zero and $\mathbb E(|V-U|^2\mid\mathcal F_s)=\delta^2|b_s(U)|^2+\delta\|\sigma_s(U)\|_F^2\le C_{2,m,K}\delta(1+|U|^2)$. This also holds for $\delta=0$. [F1, A1, given, algebra]

2.1 The coefficient growth assumption [F2] and $\delta\le1$ give $|b_s(U)|^p+\|\sigma_s(U)\|_F^p\le C_{p,K}(1+|U|^p)$. Conditional centering gives $\mathbb E(R\mid\mathcal F_s)=\delta b_s(U)$. By the growth bound and $|a+b|^2\le2|a|^2+2|b|^2$, $\mathbb E(|R|^2\mid\mathcal F_s)\le2K^2(\delta^2+\delta)(1+|U|^2)\le4K^2\delta(1+|U|^2)$. For the $p$th moment, $|a+b|^p\le2^{p-1}(|a|^p+|b|^p)$ and step 1.1 give $\mathbb E(|R|^p\mid\mathcal F_s)\le C_{p,m,K}(\delta^p+\delta^{p/2})(1+|U|^p)\le C_{p,m,K}\delta(1+|U|^p)$, since $p\ge2$ and $\delta\le1$. Also $|D\phi(U)\cdot\delta b_s(U)|\le C_{p,K}\delta(1+|U|^p)$. Substituting these bounds into step 1.2 and using $|U|^{p-2}(1+|U|^2)\le2(1+|U|^p)$ proves $\mathbb E(|V|^p\mid\mathcal F_s)\le(1+C_{p,m,K}\delta)|U|^p+C_{p,m,K}\delta$. The AC assumption is inherited from the cited Brownian and normal-law interfaces; these finite-dimensional estimates make no choice. [F2, step 1.1, step 1.2, A2, given, algebra] ∎
