---
id: cex-raw-prplus-loses-descent-and-safeguard-restarts
kind: counterexample
title: "A strong Wolfe step can leave PR+ ascending; the safeguard restarts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

The raw PR+ candidate direction is not necessarily a descent direction after a strong Wolfe step.

## Facts & Assumptions

**Given:** The raw PR+ coefficient and safeguard in [[alg-nonlinear-conjugate-gradient-methods]] and the strong Wolfe conditions of [[def-wolfe-and-strong-wolfe-conditions]].

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: $\beta^{\rm PR+}=\max\{0,g_1^T(g_1-g_0)/\|g_0\|_2^2\}$ and $d_1^{\rm cand}=-g_1+\beta^{\rm PR+}d_0$.

[F3] [[alg-nonlinear-conjugate-gradient-methods]]: if the descent or norm safeguard test fails, the procedure resets to $d_1=-g_1$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: a strong Wolfe step satisfies $\phi(t)\le\phi(0)+c_1t\phi'(0)$ and $|\phi'(t)|\le c_2|\phi'(0)|$.

## Counterexample

Let
$$ H=\begin{pmatrix}7/5&-1/10\\-1/10&1\end{pmatrix},\qquad f(x)=\tfrac12x^THx+x_1. $$
Start at $x_0=(0,0)$ with $c_1=1/100$ and $c_2=49/100$.

1.1 For every $u\ne0$, $u^THu=\frac75\left(u_1-\frac1{14}u_2\right)^2+\frac{139}{140}u_2^2>0.$ Thus $H$ is positive definite. Also $g_0=(1,0)$ and $d_0=-g_0=(-1,0)$. [given, algebra]

2.1 Take $t_0=1$. Then $x_1=(-1,0)$, $f(x_0)=0$, $f(x_1)=-3/10$, and $g_1=Hx_1+(1,0)=(-2/5,1/10)$. The initial directional derivative is $\phi'(0)=-1$ and the new one is $g_1^Td_0=2/5$. Hence $f(x_1)=-3/10\le-1/100=f(x_0)+c_1t_0\phi'(0),\qquad |g_1^Td_0|=2/5\le49/100.$ This is a strong Wolfe step. [given, F2, step 1.1, algebra]

3.1 Since $g_1-g_0=(-7/5,1/10)$, $\beta^{\rm PR+}=\frac{g_1^T(g_1-g_0)}{\|g_0\|_2^2} =\frac{14}{25}+\frac1{100}=\frac{57}{100}.$ Thus $d_1^{\rm cand}=-g_1+\beta^{\rm PR+}d_0=(-17/100,-1/10)$ and $g_1^Td_1^{\rm cand}=\frac{29}{500}>0.$ The raw PR+ candidate is an ascent direction, refuting the statement. [F1, step 2.1, algebra]

4.1 For the safeguarded variant choose $\sigma=1/2$ and $C=2$. Since $\|g_1\|_2^2=17/100$, we have $\frac{29}{500}>-\frac12\|g_1\|_2^2=-\frac{17}{200},$ so the descent test triggers a restart. The norm test alone would not: $\|d_1^{\rm cand}\|_2^2=389/10000<4\|g_1\|_2^2$. The new direction $d_1=-g_1$ has $g_1^Td_1=-17/100<0$ and $\cos\theta_1=1$. [F3, step 3.1, algebra] ∎
