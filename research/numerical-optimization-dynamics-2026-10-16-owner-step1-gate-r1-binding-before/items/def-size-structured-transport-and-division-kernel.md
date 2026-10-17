---
id: def-size-structured-transport-and-division-kernel
kind: definition
title: Size transport with a nonlocal division kernel
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.4–1.5, PDF pp. 8–10: equal and asymmetric size division, daughter kernels and number/biomass balances."
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: characteristic cohort equations for structured size populations."
---

## Definition

Fix a finite horizon $T>0$ and a fixed size interval $[0,X]$. Let $g,\mu,\gamma:[0,X]\to[0,\infty)$ be bounded Lipschitz functions, with $g(x)\ge g_{\min}>0$. Here $g$ is size growth, $\mu$ is ordinary mortality, and $\gamma$ is the rate at which a dividing parent is removed. For each parent size $y$, let $K_y$ be a finite nonnegative Borel measure of daughter sizes, supported on $[0,y]$. Assume $y\mapsto K_y(E)$ is measurable for every Borel set $E\subseteq[0,X]$, and that the number moment $k_0(y):=K_y([0,y])$ is uniformly bounded; the size moment $k_1(y):=\int_{[0,y]}x\,K_y(dx)$ is then finite. The **size-structured transport and division model** is

$$\partial_t n+\partial_x(gn)=-(\mu+\gamma)n+\int_{[0,X]}K_y(dx)n(t,y)\,dy,\qquad 0<x<X,$$

with zero incoming flux at $x=0$ and absorbing outflow $g(X)n(t,X)$ at $x=X$. The transport characteristic solves $x'(t)=g(x(t))$ as a first-order IVP in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. The weak equation is obtained by testing against $\phi\in C^1([0,X])$: transport contributes $\int_0^Xg\phi'n$, mortality and parent removal contribute $-\int_0^X(\mu+\gamma)\phi n$, division contributes $\int_0^X\int\phi(x)K_y(dx)n(t,y)\,dy$, and the upper boundary contributes $-\phi(X)g(X)n(t,X)$. The interval is fixed; moving boundaries, zero growth and discontinuous coefficients are outside this definition.
