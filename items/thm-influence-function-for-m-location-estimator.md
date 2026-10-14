---
id: thm-influence-function-for-m-location-estimator
kind: theorem
title: Influence function for a regular M-location functional
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 10
deps:
  - cor-mean-value-theorem
  - def-gross-error-path
  - def-statistical-functional-and-influence-function
  - thm-dominated-convergence
  - thm-euclidean-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.4, PDF pp. 17–19"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 24–25"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Statement

Let $F$ be a Borel probability law on $\mathbb R$, let $\psi:\mathbb R\to\mathbb R$ be $C^1$, and let $\theta\in\mathbb R$ satisfy

$$J(\theta):=\int\psi(y-\theta)\,dF(y)=0.$$

Assume $\int|\psi(y-\theta)|\,dF(y)<\infty$ and that there is an open interval $I$ containing $\theta$ and a nonnegative $g\in L^1(F)$ such that $|\psi'(y-t)|\le g(y)$ for $F$-almost every $y$ and every $t\in I$. Put $A:=\int\psi'(y-\theta)\,dF(y)$ and assume $A\ne0$. For each fixed $x\in\mathbb R$, let $\theta_x(\epsilon)$ be the locally unique root near $\theta$ of

$$\int\psi(y-t)\,dF_{\epsilon,x}(y)=0,\qquad F_{\epsilon,x}=(1-\epsilon)F+\epsilon\delta_x.$$

Then, for all sufficiently small $\epsilon\ge0$, this local root exists and

$$\operatorname{IF}(x;T,F)=\lim_{\epsilon\downarrow0}\frac{\theta_x(\epsilon)-\theta}{\epsilon}=\frac{\psi(x-\theta)}{A}.$$

Here $T(F_{\epsilon,x})$ denotes this local root. In the special case $\psi(u)=u$ and $F$ has a finite first absolute moment, $\theta=\mu:=\int y\,dF(y)$ and $\operatorname{IF}(x;T,F)=x-\mu$.

## Facts & Assumptions

**Given:** The law $F$, the function $\psi$, the root $\theta$, the open interval $I$, the integrable derivative majorant $g$, and $A\ne0$ as in the Statement. Fix one contamination point $x\in\mathbb R$.

[F1] [[def-gross-error-path]]: for $0\le\epsilon\le1$, $F_{\epsilon,x}=(1-\epsilon)F+\epsilon\delta_x$ is the point-contamination specialization of the gross-error path.

[F2] [[thm-dominated-convergence]]: pointwise almost-everywhere convergence under one integrable majorant permits passing limits through the integral.

[F3] [[cor-mean-value-theorem]]: for a differentiable real function, a difference quotient over an interval equals a derivative at an intermediate point.

[F4] [[thm-euclidean-implicit-function-theorem]]: if $H(e,t)$ is $C^1$, $H(0,\theta)=0$, and $\partial_tH(0,\theta)\ne0$, then a unique local $C^1$ root $t=\theta(e)$ exists and $\theta'(0)=-\partial_eH(0,\theta)/\partial_tH(0,\theta)$.

[F5] [[def-statistical-functional-and-influence-function]]: the gross-error influence function is the right derivative of $T(F_{\epsilon,x})$ at $\epsilon=0$, when finite.

[A1] For the mean specialization, $\int|y|\,dF(y)<\infty$.

## Proof

**Proof technique:** direct.

1.1 For $t\in I$, the mean value theorem [F3] gives $|\psi(y-t)-\psi(y-\theta)|\le |t-\theta|g(y)$ for $F$-almost every $y$, so $J(t)$ is finite. For any $t\in I$ and nonzero $h$ with $t+h\in I$, the difference quotient of $\psi(y-t)$ in $t$ converges pointwise to $-\psi'(y-t)$ and is bounded in absolute value by $g(y)$, again by [F3]. Dominated convergence [F2] therefore gives $J'(t)=-\int\psi'(y-t)\,dF(y)$. If $t_j\to t$ in $I$, continuity of $\psi'$ gives pointwise convergence of $\psi'(y-t_j)$ to $\psi'(y-t)$, and the same majorant with [F2] shows $J'(t_j)\to J'(t)$. Thus $J$ is $C^1$ on $I$. [given, F2, F3]

2.1 Define $H_x(e,t):=(1-e)J(t)+e\psi(x-t)$ for real $e$ near $0$ and $t\in I$. By step 1.1 and $\psi\in C^1$, $H_x$ is $C^1$; also $H_x(0,\theta)=0$ and $\partial_tH_x(0,\theta)=J'(\theta)=-A\ne0$. Applying [F4] gives a unique local $C^1$ root $t=\theta_x(e)$ through $(0,\theta)$. For $e\ge0$ small, [F1] identifies its equation with the stated M-location equation under $F_{e,x}$. [given, F1, F4, step 1.1]

3.1 At $(0,\theta)$, $\partial_eH_x=\psi(x-\theta)-J(\theta)=\psi(x-\theta)$ and $\partial_tH_x=-A$. The derivative formula in [F4] therefore yields $\theta_x'(0)=\psi(x-\theta)/A$. Since a two-sided derivative implies the same right derivative, [F5] identifies this value with $\operatorname{IF}(x;T,F)$. [F4, F5, given, step 2.1, algebra]

4.1 If $\psi(u)=u$, then $J(t)=\int y\,dF(y)-t=\mu-t$, so its unique root is $\theta=\mu$ and $A=\int1\,dF=1$. Substitution in step 3.1 gives $\operatorname{IF}(x;T,F)=x-\mu$. [A1, step 3.1, algebra] ∎

## Remarks

The argument is pointwise in $x$: the implicit-function neighborhood and the remainder are not asserted to be uniform over contamination points. No Axiom of Choice is used.

