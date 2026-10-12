---
id: def-cm-averaging-data-and-averaged-field
kind: definition
title: "Periodic averaging data: the average field, the oscillatory part and the periodic deviation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-valued-functions-limits-and-continuity, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-interval, thm-additivity-over-subintervals, def-euclidean-inner-product]
dependency_roles:
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.3, Eqs. (5.52)-(5.57): harmonic balance and the reduced (RWA) equations obtained by time averaging over one period, printed pages 12-14 of Chapter 5 (PDF pages 99-101)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 5 Sections 5.2-5.3, Eqs. (5.25)-(5.28): averaging the first-order perturbation over one period and the secular change of the averaged variable, printed pages 95-98"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $P>0$, let $O\subseteq\mathbb R^n$ be open, and let $f:\mathbb R\times O\to\mathbb R^n$ be continuous ([[def-vector-valued-functions-limits-and-continuity]]) and continuously partially differentiable in its second variable ([[def-directional-and-partial-derivatives]]), and suppose $f$ is **$P$-periodic in time**, that is

$$f(t+P,x)=f(t,x)\qquad\text{for all }(t,x)\in\mathbb R\times O .$$

The **average** of such an $f$ is the map

$$\bar f:O\longrightarrow\mathbb R^n,\qquad \bar f(x):=\frac1P\int_0^Pf(s,x)\,ds,$$

where the integral is the componentwise Riemann integral of the continuous curve $s\mapsto f(s,x)$ over the compact interval $[0,P]$ ([[def-vector-valued-derivative-and-integral]], [[def-interval]]); it is well defined and finite for every $x\in O$ because that curve is continuous. The **oscillatory part** of $f$ is $f-\bar f$, and the **deviation** of $f$ is

$$g:[0,P]\times O\longrightarrow\mathbb R^n,\qquad g(t,x):=\int_0^t\bigl(f(s,x)-\bar f(x)\bigr)\,ds .$$

Because $\int_0^Pf(s,x)-\bar f(x)\,ds=P\bar f(x)-P\bar f(x)=0$ by linearity and additivity of the integral ([[thm-additivity-over-subintervals]]), the formula $g(t+kP,x):=g(t,x)$ for $k\in\mathbb Z$ and $t\in[0,P)$ defines a unique extension, again written $g$, to all of $\mathbb R\times O$; it satisfies $g(t+P,x)=g(t,x)$ and $g(0,x)=0$ for all $(t,x)$, and on $[0,P]$ it is the integral displayed above.

The **averaged (or reduced) system** of $f$ for a parameter $\varepsilon>0$ is the autonomous first-order system on $O$

$$y'(t)=\varepsilon\,\bar f(y(t)).$$

## Remarks

- **Scope.** The objects $\bar f$, $g$ and the averaged system are pure mathematics: $f$ is an arbitrary continuous, $P$-periodic, continuously differentiable-in-state map on $\mathbb R\times O$. No physical reading of $t$, $x$, $\varepsilon$ or $f$ is asserted here; a physical model that identifies them with time, state, a small parameter and a force field is the consumer's responsibility.

- **The deviation is bounded on one period.** For every compact $K\subseteq O$ the restriction of $g$ to $[0,P]\times K$ is bounded, being continuous there: $t\mapsto\int_0^t(f(s,x)-\bar f(x))\,ds$ is continuous in $t$ for each fixed $x$ and uniformly continuous on the compact set, and the extension preserves the bound. Quantitative bounds with explicit constants are supplied separately.
