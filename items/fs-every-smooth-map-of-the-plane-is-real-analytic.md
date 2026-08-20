---
id: fs-every-smooth-map-of-the-plane-is-real-analytic
kind: false-statement
title: "FALSE: every smooth map between open subsets of the plane is real analytic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-map-on-the-plane, def-ck-and-multi-index-notation-in-several-variables, thm-exponential-beats-every-polynomial, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Taylor, Introduction to Analysis in Several Variables, Ch. 2 §2.2, Exercise 4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

**False claim:** Every smooth map between open subsets of $\mathbb R^2$ is real analytic.

## Facts & Assumptions

**Given:** The function $\phi:\mathbb R\to\mathbb R$ and planar map $F:\mathbb R^2\to\mathbb R^2$ defined by

$$\phi(x):=\begin{cases}\exp(-1/x^2),&x\ne0,\\0,&x=0,\end{cases}\qquad F(x,y):=(\phi(x),0).$$

[L1] The real exponential is $C^\infty$ and every derivative of it is the exponential itself ([[thm-derivative-of-exponential]]).

[L2] The derivative of a composite is given by the chain rule when the component derivatives exist ([[thm-chain-rule]]).

[L3] Sums, scalar multiples, products, and quotients with nonzero denominator obey the corresponding derivative rules ([[thm-algebra-of-derivatives]]).

[L4] For every natural $m$ and real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[L5] A planar real function is $C^k$ when every coordinate-derivative word of length at most $k$, including the word of length zero, exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L6] A smooth map $G=(u,v)$ is real analytic when, near every point, both components equal their total-degree Taylor series ([[def-real-analytic-map-on-the-plane]]).

[L7] The real exponential is positive everywhere and satisfies $\exp(-x)=1/\exp(x)$ ([[cor-exponential-reciprocal-and-positivity]]).

## Refutation

**Proof technique:** direct.

1.1 For every natural $m$, repeated use of [L1], [L2], and [L3] gives a real polynomial $P_m$ such that $\phi^{(m)}(x)=P_m(1/x)\exp(-1/x^2)$ for $x\ne0$: take $P_0=1$, and differentiation replaces $P_m(y)$ by the polynomial $-y^2P_m'(y)+2y^3P_m(y)$. [L1, L2, L3]

2.1 As $x\to0$, every expression $P(1/x)\exp(-1/x^2)$ and its quotient by $x$ tends to $0$: with $y=1/|x|\to+\infty$, polynomial growth is bounded by a natural power of $y$, which for $y\ge1$ is bounded by a natural power of $y^2$, and [L4] applied to $u=y^2$ makes that power times $\exp(-u)$ tend to zero. [step 1.1, L4]

3.1 Inductively set every derivative value $\phi^{(m)}(0)=0$: step 2.1 makes $\phi^{(m)}$ continuous at $0$ and makes its difference quotient there tend to $0$, so the next derivative exists and has value $0$. Thus $\phi$ is smooth, and [L5] makes $F(x,y)=(\phi(x),0)$ smooth with every mixed derivative at $(0,0)$ equal to $0$. [step 2.1, L5]

4.1 By step 3.1, the total-degree Taylor series of $F$ at $(0,0)$ is the zero map, but [L7] gives $F(x,0)=(\exp(-1/x^2),0)\ne(0,0)$ for every $x\ne0$; such points occur in every neighbourhood of the origin, so the equality required by [L6] fails there. [step 3.1, L6, L7]

5.1 The map $F$ is smooth by step 3.1 and not real analytic by step 4.1, so it refutes the false claim. [step 3.1, step 4.1] ∎
