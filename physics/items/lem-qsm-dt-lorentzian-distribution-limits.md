---
id: lem-qsm-dt-lorentzian-distribution-limits
kind: lemma
title: Lorentzian kernels converge to delta and principal-value distributions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-dominated-convergence
dependency_roles:
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.3"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 574–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
---

## Statement

Let $\psi:\mathbb R\to\mathbb C$ be continuously differentiable with compact support. For $\eta>0$, define $P_\eta(x)=\eta/(x^2+\eta^2)$ and $Q_\eta(x)=x/(x^2+\eta^2)$. Define
$$\operatorname{PV}\!\int_{\mathbb R}\frac{\psi(x)}x\,dx:=\lim_{\delta\downarrow0}\int_{|x|>\delta}\frac{\psi(x)}x\,dx$$
when this symmetric limit exists. Then
$$\lim_{\eta\downarrow0}\int_{\mathbb R}P_\eta(x)\psi(x)\,dx=\pi\psi(0),\qquad\lim_{\eta\downarrow0}\int_{\mathbb R}Q_\eta(x)\psi(x)\,dx=\operatorname{PV}\!\int_{\mathbb R}\frac{\psi(x)}x\,dx.$$
Thus $P_\eta$ converges distributionally to $\pi\delta_0$, and $Q_\eta$ converges distributionally to the Cauchy principal-value distribution $\operatorname{PV}(1/x)$, with the stated test-function convention.

## Facts & Assumptions

**Given:** A compactly supported $C^1$ complex test function $\psi$ and the Lebesgue measure on $\mathbb R$.

[F1] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable measurable majorant implies convergence of the integrals.

## Proof


**Given:** The test function and kernels in the Statement.

1.1 With $x=\eta y$, the first integral is $\int_{\mathbb R}\psi(\eta y)/(1+y^2)\,dy$. Its integrand converges pointwise to $\psi(0)/(1+y^2)$ and is bounded in modulus by $\|\psi\|_\infty/(1+y^2)$, an integrable function. By [F1] the limit is $\psi(0)\int_{\mathbb R}(1+y^2)^{-1}\,dy=\pi\psi(0)$; the last integral is $\arctan(y)|_{-\infty}^{\infty}=\pi$. [given, F1, algebra]


1.2 Let $L=\sup_x|\psi'(x)|<\infty$ and set $q(x)=\psi(x)-\psi(0)\mathbf1_{[-1,1]}(x)$. The integral of $Q_\eta(x)\psi(0)\mathbf1_{[-1,1]}(x)$ is zero because its integrand is odd on a symmetric interval. For $0<|x|\le1$, $|Q_\eta(x)q(x)|\le Lx^2/(x^2+\eta^2)\le L$ by the mean-value inequality; for $|x|>1$, $|Q_\eta(x)q(x)|\le|\psi(x)|$. This gives an integrable majorant independent of $\eta$, and for $x\ne0$ the integrand tends to $q(x)/x$. Applying [F1] yields $\int_{\mathbb R}q(x)/x\,dx$. [given, F1, algebra]


2.1 For $0<\delta<1$, the constant part $\psi(0)/x$ integrates to zero on $\{\delta<|x|\le1\}$ by oddness. Therefore $\int q(x)/x\,dx=\lim_{\delta\downarrow0}\int_{|x|>\delta}\psi(x)/x\,dx$, proving existence of the symmetric principal value and the second limit. The two distributional conclusions are precisely the limits already established in steps 1.1 and 1.2. [step 1.1, step 1.2, algebra] ∎