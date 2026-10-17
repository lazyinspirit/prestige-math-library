---
id: thm-cir-lamperti-scheme-converges-in-probability
kind: theorem
title: "Lamperti drift-implicit CIR scheme converges on finite horizons in probability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-cir-lamperti-positive-implicit-scheme
  - lem-cir-lamperti-transform-and-positive-root
  - thm-cir-positive-solution-and-nonattainment
  - def-d-dimensional-brownian-motion
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - cor-markov-inequality-for-random-variables
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Aurélien Alfonsi, Strong convergence of some drift implicit Euler scheme. Application to the CIR process, equation (3) and Theorem 1"
      url: "https://arxiv.org/pdf/1206.3855"
    - title: "Steffen Dereich, Andreas Neuenkirch and Lukasz Szpruch, An Euler-type method for the strong approximation of the Cox–Ingersoll–Ross process, Theorem 1"
      url: "https://www.uni-muenster.de/Stochastik/dereich/Publikationen/Preprints/cir.pdf"
---

## Statement

Assume AC, $\kappa,\theta,\sigma>0$, $2\kappa\theta\ge\sigma^2$, and
deterministic $X_0=x_0>0$. Let $X$ be the positive CIR solution from
[[thm-cir-positive-solution-and-nonattainment]]. For $h=T/N$, initialize
$Z_0=\sqrt{x_0}$ and apply
[[alg-cir-lamperti-positive-implicit-scheme]] to obtain $Z_n$ and
$X_n^h=Z_n^2$. Then for every $T>0$,
$$\max_{0\le n\le N}|X_{t_n}-X_n^h|\longrightarrow0 \quad\text{in probability as }N\to\infty.$$
This is convergence in probability on each finite horizon; no $L^p$ error
rate is asserted.

## Facts & Assumptions

**Given:** AC; positive CIR parameters and initial state; the exact positive solution and the transformed drift-implicit algorithm.

[F1] The positive transformed solution $Z=\sqrt X$ satisfies $dZ=q(Z)dt+c\,dW$, where $q(z)=a/z-\kappa z/2$, $a>0$, $c=\sigma/2$; the algorithm returns the unique positive root of $z_{n+1}=z_n+hq(z_{n+1})+c\Delta W_n$. [[lem-cir-lamperti-transform-and-positive-root]] [[alg-cir-lamperti-positive-implicit-scheme]]

[F2] The exact CIR solution is global, continuous, and strictly positive on each finite horizon. [[thm-cir-positive-solution-and-nonattainment]]

[F3] Brownian increments over deterministic intervals have centered normal law with variance equal to interval length. [[def-d-dimensional-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[F4] For a nonnegative random variable $U$ and $r>0$, $\mathbb P(U>r)\le\mathbb E U/r$. [[cor-markov-inequality-for-random-variables]]

[A1] AC is inherited through the Brownian and numerical inputs; no additional choice is used. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and suppliers in the Statement and Facts.

1.1 The exact path $Z=\sqrt X$ is continuous and strictly positive on the compact interval $[0,T]$ by [F2]. Hence its pathwise minimum is positive and its maximum is finite. For every $\eta>0$ choose $0<\varepsilon<R$ so that the event $$E_{\varepsilon,R}=\{\varepsilon\le Z_t\le R\text{ for every }t\le T\}$$ has probability at least $1-\eta$; these events increase to a probability-one event as $\varepsilon\downarrow0$ and $R\uparrow\infty$. [F2, given]

1.2 Write $c=\sigma/2$ and $$r_{n+1}=\int_{t_n}^{t_{n+1}} \bigl(q(Z_s)-q(Z_{t_{n+1}})\bigr)ds.$$ The exact SDE and the implicit recursion give $$Z_{t_{n+1}}=Z_{t_n}+hq(Z_{t_{n+1}})+c\Delta W_n+r_{n+1}, \qquad Z_{n+1}=Z_n+hq(Z_{n+1})+c\Delta W_n.$$ Let $e_n=Z_n-Z_{t_n}$. Since $q'(z)=-a/z^2-\kappa/2\le-\kappa/2$, the mean-value theorem gives $(u-v)(q(u)-q(v))\le-\kappa|u-v|^2/2$ for positive $u,v$. Subtract the two updates and take the inner product with $e_{n+1}$: $$(1+h\kappa/2)|e_{n+1}|^2 \le |e_{n+1}|\,|e_n-r_{n+1}|.$$ If $e_{n+1}=0$ the next bound is immediate; otherwise divide by $(1+h\kappa/2)|e_{n+1}|$ to get $|e_{n+1}|\le|e_n|+|r_{n+1}|$. As $e_0=0$, $\max_{n\le N}|e_n|\le\sum_{n<N}|r_{n+1}|$. [F1, given, algebra]

2.1 On $E_{\varepsilon,R}$, the drift $q$ is bounded by $B$ and is Lipschitz with a constant $L$. For $s\in[t_n,t_{n+1}]$, the exact transformed equation gives $$|Z_s-Z_{t_{n+1}}| \le Bh+c|W_s-W_{t_{n+1}}|.$$ Therefore, using $1_{E_{\varepsilon,R}}\le1$ and [F3], $$\mathbb E[1_{E_{\varepsilon,R}}|r_{n+1}|] \le L\int_{t_n}^{t_{n+1}} \left(Bh+c\sqrt{2(t_{n+1}-s)/\pi}\right)ds \le C_{\varepsilon,R}(h^2+h^{3/2}).$$ Summing over $n<N$ and using $Nh=T$ gives $\mathbb E[1_{E_{\varepsilon,R}}\sum_{n<N}|r_{n+1}|] \le C_{\varepsilon,R,T}\sqrt h$. [F1, F3, step 1.2, given, algebra]

3.1 For any $\rho>0$, steps 1.2–2.1 and [F4] give $$\mathbb P\left(\max_{n\le N}|e_n|>\rho\right) \le\mathbb P(E_{\varepsilon,R}^c) +\rho^{-1}C_{\varepsilon,R,T}\sqrt h.$$ First let $N\to\infty$ with $\varepsilon,R$ fixed, then let $\eta\to0$ using step 1.1. Thus $\max_n|Z_n-Z_{t_n}|\to0$ in probability. On $E_{\varepsilon,R}\cap\{\max_n|e_n|\le1\}$, $|Z_n+Z_{t_n}|\le2R+1$, and hence $$\max_n|X_n^h-X_{t_n}| \le(2R+1)\max_n|Z_n-Z_{t_n}|.$$ The probability of the complementary event is arbitrarily small by the event construction in step 1.1 and the convergence just proved. This gives the stated convergence in probability for $X_n^h=Z_n^2$. No $L^p$ rate follows from this localization argument. AC is exactly [A1]. [A1, F2, F4, step 1.1, step 1.2, step 2.1, given, algebra] ∎
