---
id: thm-standard-gaussian-lipschitz-concentration
kind: theorem
title: "Lipschitz concentration for standard Gaussian measure"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - thm-standard-gaussian-log-sobolev-inequality
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-dominated-convergence
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-differentiation-under-the-integral-sign
  - cor-mean-value-theorem
  - cor-markov-inequality-for-random-variables
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC, DC and countable choice are inherited from the listed Gaussian log-Sobolev and integration suppliers and are stated explicitly. The concentration argument itself uses no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Berestycki and R. Nickl, Concentration of Measure"
      url: "https://www.stat.cmu.edu/~arinaldo/36788/berestycki_nickl_notes.pdf"
      locator: "Chapter 4, Theorem 9 and the Herbst argument, followed by Theorem 10."
    - title: "D. Chafaï and D. Lehec, Lectures on the logarithmic Sobolev inequality"
      url: "https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf"
      locator: "Gaussian logarithmic Sobolev inequality and Herbst concentration argument."
---

## Statement

Assume AC, DC, and countable choice. Let $Z\sim\gamma_d$ be standard Gaussian
on $\mathbb R^d$ and let
$f:\mathbb R^d\to\mathbb R$ be $L$-Lipschitz. If $L>0$, then for every $r>0$,
$$P\{f(Z)\ge E f(Z)+r\}\le e^{-r^2/(2L^2)}.$$
If $L=0$, the probability on the left is zero.

## Facts & Assumptions

[A1] AC, DC, and countable choice are inherited from the Gaussian log-Sobolev and integration suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

[F1] For $g\in C^2(\mathbb R^d)$ bounded above and below by positive constants, with bounded first and second derivatives, $\operatorname{Ent}_{\gamma_d}(g)\le\frac12\int|\nabla g|^2/g\,d\gamma_d$ ([[thm-standard-gaussian-log-sobolev-inequality]]).

[F2] The standard $d$-dimensional Gaussian $\gamma_d=N_d(0,I_d)$ has Lebesgue density $(2\pi)^{-d/2}e^{-|x|^2/2}$ ([[thm-nondegenerate-multivariate-normal-law-has-density]]).

[F3] Dominated convergence passes limits through the Gaussian expectations used below ([[thm-dominated-convergence]]).

[F4] Differentiation under an integral is valid under a common integrable majorant for the parameter derivatives ([[thm-differentiation-under-the-integral-sign]]).

[F5] The mean value theorem bounds a differentiable function from a bound on its derivative ([[cor-mean-value-theorem]]).

[F6] For nonnegative random variables, Markov's inequality bounds $P(X\ge a)$ by $EX/a$ when $a>0$ ([[cor-markov-inequality-for-random-variables]]).

## Proof


**Given:** AC, DC, countable choice, a standard Gaussian vector $Z$, and an $L$-Lipschitz function $f$.

1.1 First suppose $f$ is smooth and bounded with bounded derivatives. For $\lambda>0$, apply [F1] to $g=e^{\lambda f}$. With $\psi(\lambda)=\log E e^{\lambda(f(Z)-Ef(Z))}$, the entropy identity and $|\nabla f|\le L$ give $\lambda\psi'(\lambda)-\psi(\lambda)\le\lambda^2L^2/2$. [A1, F1, given, algebra]

2.1 Assume $L>0$. The function $q(\lambda)=\psi(\lambda)/\lambda$ extends continuously to $q(0)=0$ because $\psi(0)=\psi'(0)=0$. Its derivative on $(0,\infty)$ is $q'(\lambda)=(\lambda\psi'(\lambda)-\psi(\lambda))/\lambda^2\le L^2/2$ by step 1.1. The mean value theorem [F5] on $[0,\lambda]$ gives $\psi(\lambda)\le\lambda^2L^2/2$. Markov's inequality [F6] therefore gives $P(f(Z)-Ef(Z)\ge r)\le e^{-\lambda r+\lambda^2L^2/2}$; choosing $\lambda=r/L^2$ proves the displayed bound for this $f$. [F5, F6, step 1.1, algebra]

3.1 Suppose $L>0$. For a general Lipschitz $f$, clip its values to $[-n,n]$ to obtain a bounded $L$-Lipschitz function $f_n$. For $s>0$ set $P_sf_n(x)=\int f_n(e^{-s}x+\sqrt{1-e^{-2s}}y)\,d\gamma_d(y)$. Equivalently, write this as an integral against the smooth Gaussian density $\rho_s(y-e^{-s}x)$. Every derivative of the kernel in $x$ is a polynomial times a Gaussian density; on compact $x$-sets it has an integrable Gaussian majorant, so [F4] permits differentiation under the integral to every order. The global $L^1$ norm of each kernel derivative is finite, hence the derivatives of $P_sf_n$ are bounded by $\|f_n\|_\infty$ times finite constants. Using the same integration variable for two points shows $P_sf_n$ is $L$-Lipschitz, so step 2.1 applies. For each fixed $n$, $P_sf_n(x)\to f_n(x)$ as $s\downarrow0$, and then $f_n(x)\to f(x)$ as $n\to\infty$. Throughout, $|P_sf_n(x)|\le|f(0)|+L|x|+L\int|y|\,d\gamma_d(y)$. For each fixed $\lambda$, $\lambda L|x|\le|x|^2/4+(\lambda L)^2$ and the density in [F2] give an integrable Gaussian majorant for $e^{\lambda|P_sf_n(x)|}$. Dominated convergence [F3] passes the means and exponential moments first as $s\downarrow0$ and then as $n\to\infty$, proving the bound for $f$. [A1, F2, F3, F4, step 2.1, construct]

4.1 If $L=0$, then $f$ is constant on $\mathbb R^d$, so $P\{f(Z)\ge Ef(Z)+r\}=0$ for every $r>0$. This handles the zero-Lipschitz case and completes the theorem. [given, algebra] ∎

