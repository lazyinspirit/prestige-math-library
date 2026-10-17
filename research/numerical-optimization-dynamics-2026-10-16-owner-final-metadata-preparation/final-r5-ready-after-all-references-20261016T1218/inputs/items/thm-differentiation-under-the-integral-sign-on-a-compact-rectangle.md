---
id: thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
kind: theorem
title: "Leibniz's rule on a compact rectangle: an interior parameter derivative with a continuous extension may be passed through a Riemann integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, cor-mean-value-theorem, lem-uniform-integral-error-bound, thm-heine-borel-rn, thm-heine-cantor-metric, thm-continuous-implies-integrable]
justified_by: []
aliases: []
landmark: true
proof_strategy: epsilon-delta
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I & II, Theorem 9.1.1"
      url: "https://www.jirka.org/ra/html/sec_diffunderint.html"
pipeline_run: null
---

## Statement

Let $a<b$ and $c<d$. Suppose $g,h:[a,b]\times[c,d]\to\mathbb R$ are continuous and, for every fixed $t\in[c,d]$, the function $x\mapsto g(x,t)$ is differentiable on $(a,b)$ with derivative $h(x,t)$. Define

$$G(x):=\int_c^d g(x,t)\,dt.$$

Then $G$ is differentiable on $[a,b]$ as a function on that interval and

$$G'(x)=\int_c^d h(x,t)\,dt\qquad(x\in[a,b]).$$

At $a$ and $b$ the derivative is relative and one-sided. The derivative hypothesis is imposed only for interior parameter values; continuity of $h$ supplies its endpoint values.

## Facts & Assumptions

**Given:** The rectangle and functions in the statement.

[L1] A continuous real function on a compact interval is bounded and Riemann integrable ([[thm-continuous-implies-integrable]]).

[L2] A closed rectangle in $\mathbb R^2$ is compact, and a continuous map from a compact metric space to $\mathbb R$ is uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[L3] The mean value theorem turns a difference quotient into a derivative value at an intermediate point ([[cor-mean-value-theorem]]).

[L4] If two integrable functions differ uniformly by at most $\eta$, then their integrals over $[c,d]$ differ by at most $\eta(d-c)$ ([[lem-uniform-integral-error-bound]]).

[L5] Relative differentiability on a closed interval is convergence of the difference quotient over points of that interval ([[def-derivative]]).

## Proof

**Proof technique:** epsilon-delta.

1.1 For each $x$, the slice $t\mapsto g(x,t)$ is continuous, so [L1] makes $G(x)$ well defined; the same applies to every slice of $h$. [given, L1]

1.2 Fix $x\in[a,b]$ and $\varepsilon>0$. Uniform continuity of $h$ on the compact rectangle gives $\delta>0$ such that $|h(y,t)-h(x,t)|<\varepsilon/(d-c)$ whenever $|y-x|<\delta$, uniformly in $t$. [given, L2]

2.1 Let $y\in[a,b]$, $0<|y-x|<\delta$. For every $t$, [L3] applied to the parameter slice on the interval with endpoints $x,y$ gives a point $\xi_t$ strictly between them with $\frac{g(y,t)-g(x,t)}{y-x}=h(\xi_t,t)$. [step 1.2, L3]

3.1 Because $|\xi_t-x|<|y-x|<\delta$, step 1.2 gives $\left|\frac{g(y,t)-g(x,t)}{y-x}-h(x,t)\right|<\varepsilon/(d-c)$ for every $t$. [step 1.2, step 2.1]

4.1 The difference-quotient slice is continuous in $t$ and hence integrable. Linearity and [L4] now give $\left|\frac{G(y)-G(x)}{y-x}-\int_c^d h(x,t)\,dt\right|<\varepsilon$. [step 1.1, step 3.1, L4]

5.1 Step 4.1 is precisely the relative derivative condition [L5]. It works with $y>x$ at $a$, with $y<x$ at $b$, and with both signs in the interior, proving the formula everywhere. [step 4.1, L5] ∎
