---
id: def-age-structured-renewal-transport-problem
kind: definition
title: Linear age-structured renewal transport problem
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.1.1–1.1.2 and §§1.4–1.5, PDF pp. 3–10; Chapter 2, §§2.1–2.4, PDF pp. 14–23."
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: positive cohort measures, cohort states and the weak structured-population equation."
---

## Definition

Fix a finite horizon $T>0$. Let mortality and fertility be bounded Lipschitz functions $\mu,\beta:[0,\infty)\to[0,\infty)$, and let $n_0\in L^1(0,\infty)$ be nonnegative. The **linear age-structured renewal transport problem** is

$$n_t(t,a)+n_a(t,a)=-\mu(a)n(t,a),\qquad a>0,\quad 0<t\le T,$$

with initial density $n(0,a)=n_0(a)$ and inflow condition

$$n(t,0)=B(t),\qquad B(t):=\int_0^\infty \beta(a)n(t,a)\,da.$$

Here $a$ is age, $B$ is the birth rate, and the characteristic age path solves the first-order initial value problem $a'(s)=1$ in the sense of [[def-first-order-ode-initial-value-problem-and-solution]], hence $a(s)=a(0)+s$. Define survival from age $a$ over duration $s\ge0$ by

$$S(a,s):=\exp\!\left(-\int_a^{a+s}\mu(r)\,dr\right).$$

A **weak solution** on $[0,T]$ is a nonnegative $n\in C([0,T];L^1(0,\infty))$ with continuous $B:[0,T]\to[0,\infty)$ satisfying $B(t)=\int_0^\infty\beta(a)n(t,a)\,da$ and, for every $\phi\in C_c^1([0,T]\times[0,\infty))$ with $\phi(T,a)=0$,

$$-\int_0^T\!\int_0^\infty n(t,a)(\phi_t+\phi_a-\mu(a)\phi)\,da\,dt=\int_0^\infty n_0(a)\phi(0,a)\,da+\int_0^T B(t)\phi(t,0)\,dt.$$

A **mild solution** is a weak solution that also satisfies, for almost every $a\ge0$,

$$n(t,a)=\begin{cases}n_0(a-t)S(a-t,t),&a\ge t,\\B(t-a)S(0,a),&0\le a<t,\end{cases}$$

The formula follows the age characteristics $a'(s)=1$ and their mortality survival. No delay equation or finite-age cutoff is identified with this model by definition.
