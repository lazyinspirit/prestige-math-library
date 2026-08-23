---
id: cex-flat-smooth-function-has-no-holomorphic-extension
kind: counterexample
title: "A flat smooth real function has no holomorphic extension near zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-exponential-beats-every-polynomial, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, lem-derivative-of-a-power, cor-differentiable-implies-continuous, def-higher-derivatives-and-smoothness, cor-exponential-reciprocal-and-positivity, thm-taylor-expansion-holomorphic-function, cor-complex-power-series-coefficient-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Example 10.31 and Corollary 10.30"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

Every smooth real function near $0$ is the restriction of a holomorphic function on some complex neighbourhood of $0$.

## Facts & Assumptions

**Given:** The function $\psi:\mathbb R\to\mathbb R$ defined by $\psi(0)=0$ and $\psi(x)=\exp(-1/x^2)$ for $x\ne0$.

[L1] For every natural $m$ and every real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[L2] The real exponential is smooth and every derivative equals the exponential ([[thm-derivative-of-exponential]]).

[L3] The derivative of a real composite is given by the chain rule under its differentiability hypotheses ([[thm-chain-rule]]).

[L4] Products of differentiable real functions are differentiable and satisfy the product rule ([[thm-algebra-of-derivatives]]).

[L5] For each positive natural $n$, the functions $x\mapsto x^n$ on $\mathbb R$ and $x\mapsto x^{-n}$ off $0$ have the usual power-rule derivatives ([[lem-derivative-of-a-power]]).

[L6] A differentiable real function is continuous at every point of differentiability ([[cor-differentiable-implies-continuous]]).

[L7] A function is smooth when it is $C^k$ for every natural $k$ ([[def-higher-derivatives-and-smoothness]]).

[L8] For every real $x$, $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$ ([[cor-exponential-reciprocal-and-positivity]]).

[L9] Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain ([[thm-taylor-expansion-holomorphic-function]]).

[L10] If $F(z)=\sum_{n\ge0}c_n(z-a)^n$ near $a$, then $c_n=F^{(n)}(a)/n!$ for every natural $n$ ([[cor-complex-power-series-coefficient-formula]]).

## Counterexample

**Proof technique:** contradiction.

1.1 For $x\ne0$, induction using [L2], [L3], [L4], and [L5] gives $\psi^{(n)}(x)=P_n(1/x)\exp(-1/x^2)$ for a real polynomial $P_n$: $P_0=1$, and differentiating one such expression produces another polynomial in $1/x$ times the same exponential. [L2, L3, L4, L5, given, algebra]

1.2 For every $x\ne0$, [L8] gives $\psi(x)=\exp(-1/x^2)>0$. [L8, given, algebra]

2.1 Extend each expression in step 1.1 by the value $0$ at $x=0$. By [L1], both $P_n(1/x)\exp(-1/x^2)$ and its difference quotient divided by $x$ tend to $0$ as $x\to0$ from either side. Inductively, every derivative exists at $0$, equals $0$, and is continuous there by [L6]; hence $\psi$ is smooth by [L7]. [step 1.1, L1, L6, L7]

3.1 Suppose, for contradiction, that a holomorphic function $F$ on a complex neighbourhood of $0$ agrees with $\psi$ on a real interval about $0$. Derivatives along the real axis then give $F^{(n)}(0)=\psi^{(n)}(0)=0$ for every natural $n$, and [L10] makes every Taylor coefficient of $F$ at $0$ equal to $0$. [step 2.1, L10, assume-contra]

4.1 By [L9], $F$ equals that zero Taylor series on a complex disc about $0$, so $F$ vanishes there. [step 3.1, L9]

5.1 Every real interval about $0$ contains a nonzero $x$, where step 1.2 gives $F(x)=\psi(x)>0$, contradicting step 4.1. Thus the smooth function $\psi$ has no holomorphic extension to any complex neighbourhood of $0$. [step 1.2, step 4.1, discharge-contradiction] ∎
