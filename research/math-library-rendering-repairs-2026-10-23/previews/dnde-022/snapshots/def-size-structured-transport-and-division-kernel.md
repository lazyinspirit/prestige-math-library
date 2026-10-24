---
id: def-size-structured-transport-and-division-kernel
kind: definition
title: Size transport with a nonlocal division kernel
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
justified_by:
  - thm-size-structured-positivity-number-and-weighted-moment-identities
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

Fix a finite horizon $T>0$ and a nondegenerate fixed size interval $[0,X]$ with $X>0$. Let $g,\mu,\gamma:[0,X]\to[0,\infty)$ be bounded Lipschitz functions, with $g(x)\ge g_{\min}>0$. Here $g$ is size growth, $\mu$ is ordinary mortality, and $\gamma$ is the rate at which a dividing parent is removed. For each parent size $y\in[0,X]$, let $K_y$ be a finite nonnegative Borel measure of daughter sizes, supported on $[0,y]$. Assume $y\mapsto K_y(E)$ is measurable for every Borel set $E\subseteq[0,X]$, and that the number moment $k_0(y):=K_y([0,y])$ is uniformly bounded; the size moment $k_1(y):=\int_{[0,y]}x\,K_y(dx)$ is then finite.

Because $K_y$ may have atoms, represent the population by a finite nonnegative Borel measure $\nu_t$ on $[0,X)$ rather than requiring a density. Given an initial measure $\nu_0$, a weak solution is a curve $t\mapsto\nu_t$ that is continuous when tested against continuous functions on $[0,X]$ vanishing at $X$ and satisfies, for every $\phi\in C^1([0,T]\times[0,X])$ with $\phi(t,X)=0$,

$$\int_{[0,X)}\phi(T,x)\,\nu_T(dx)-\int_{[0,X)}\phi(0,x)\,\nu_0(dx)=\int_0^T\!\int_{[0,X)}(\phi_t+g\phi_x-(\mu+\gamma)\phi)(t,x)\,\nu_t(dx)\,dt+\int_0^T\!\int_{[0,X)}\!\left(\int_{[0,y]}\phi(t,x)\,K_y(dx)\right)\nu_t(dy)\,dt.$$

This is the measure-valued transport equation with daughter production $\int_{[0,X)}K_y(dx)\,\nu_t(dy)$, no incoming source at $x=0$, and absorbing outflow at $x=X$. The test condition $\phi(t,X)=0$ encodes removal when a characteristic reaches the upper boundary.

Let $\Pi_{[0,X]}(x):=\min\{X,\max\{0,x\}\}$ and extend the growth field to $\widetilde g(x):=g(\Pi_{[0,X]}(x))$ on $\mathbb R$. This is a bounded globally Lipschitz vector field. By [[thm-size-structured-positivity-number-and-weighted-moment-identities]], its IVP has a unique solution $\chi_y$ on $[0,T]$ from every initial size $y\in[0,X]$. A model characteristic is $\chi_y$ restricted to $[0,\min\{T,\tau_y\}]$, where $\tau_y$ is its first hitting time of $X$ (taking $\tau_y=+\infty$ if there is no hit on $[0,T]$, and $\tau_y=0$ if $y=X$). On this restricted interval, $\widetilde g=g$. For $y<X$ the restricted interval is nondegenerate, and the characteristic is a first-order IVP solution in the sense of [[def-first-order-ode-initial-value-problem-and-solution]]. For $y=X$ the restriction is only the stopped path on $\{0\}$; no derivative on that singleton is asserted, while the extended path $\chi_X$ remains an IVP solution on $[0,T]$. The interval is fixed; moving boundaries, zero growth and discontinuous coefficients are outside this definition.

## Remarks

The schematic separates growth of a parent from nonlocal daughter production. The upper arrow follows the stopped characteristic from an initial size $y<X$; the boundary exit occurs only if it reaches $X$ within the time horizon. The lower arrows show the instantaneous terms at parent size $y$, rather than additional characteristic paths.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node (parent) at (3,0) {$y$};
\node (exit) at (7,0) {$X$};
\node at (0,0) {$0$};
\draw[->] (parent) -- node[above] {$\chi_y'=g(\chi_y)>0$} (exit);
\draw (7,-0.3) -- (7,0.3);
\node[align=center] at (7,0.85) {absorbing\ outflow};
\node[align=center] at (0,0.85) {no incoming\ boundary source};
\node[draw,rounded corners,align=center] (daughters) at (0.7,-2) {daughter sizes\ $x\in[0,y]$};
\node[draw,rounded corners,align=center] (removed) at (5.4,-2) {parent\ removal};
\draw[->] (parent) -- node[above left] {$K_y(dx)$} (daughters);
\draw[->] (parent) -- node[above right] {$\mu(y)+\gamma(y)$} (removed);
\end{tikzpicture}
```

The daughter arrow denotes the measure $K_y(dx)$ per parent, whose population contribution is $\int_{[0,X)}K_y(dx)\,\nu_t(dy)$; no extra factor of $\gamma(y)$ is inserted. Its support may include $x=0$ and $x=y$, and the drawing imposes no atom, density, or conservation assumption. Absence of an incoming boundary source at $0$ does not exclude daughters produced there. The definition and its weak formulation are independent of this schematic.
