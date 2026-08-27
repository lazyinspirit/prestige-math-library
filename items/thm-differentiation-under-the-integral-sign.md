---
id: thm-differentiation-under-the-integral-sign
kind: theorem
title: "Differentiation under the integral sign"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dominated-convergence, cor-mean-value-theorem]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval and let $f:X\times I\to\mathbb C$
be such that:

1. for every $t\in I$, the function $x\mapsto f(x,t)$ is integrable;
2. for almost every $x$, the map $t\mapsto f(x,t)$ is differentiable on $I$;
3. for every $t\in I$, the function
   $$x\mapsto \frac{\partial f}{\partial t}(x,t)$$
   is measurable;
4. there are a measurable null set $N$ and a nonnegative measurable function
   $g$ with
   $$\int g\,d\mu<+\infty$$
   and
   $$\left|\frac{\partial f}{\partial t}(x,t)\right|\le g(x)$$
   for every $t\in I$ and every $x\in X\setminus N$.

Then
$$F(t):=\int f(x,t)\,d\mu(x)$$
is differentiable on $I$, and
$$F'(t)=\int \frac{\partial f}{\partial t}(x,t)\,d\mu(x).$$

## Facts & Assumptions

**Given:** An open interval $I$, a function $f$ satisfying the first three displayed hypotheses, and a measurable null set $N$ together with a nonnegative measurable majorant $g$ satisfying hypothesis 4.

[L1] Dominated convergence applies to integrable complex-valued functions under a single $L^1$ majorant ([[thm-dominated-convergence]]).

[L2] The mean value theorem bounds difference quotients by a derivative bound on an interval ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Fix $t_0\in I$ and let $h_n\to0$ with $h_n\ne0$ and $t_0+h_n\in I$. Define $$q_n(x):=\frac{f(x,t_0+h_n)-f(x,t_0)}{h_n}.$$ For every $x\in X\setminus N$, differentiability in $t$ gives $q_n(x)\to\partial_tf(x,t_0)$. [given, construct]

2.1 For each $n$, hypothesis 1 makes $x\mapsto f(x,t_0+h_n)$ and [step 1.1, L1, L2] $x\mapsto f(x,t_0)$ integrable and therefore measurable, so $q_n$ is measurable. Fix $x\in X\setminus N$ and $n$. If $q_n(x)=0$, then $|q_n(x)|\le g(x)$ is immediate. Otherwise put $$\alpha:=\overline{q_n(x)}/|q_n(x)|,$$ so $|\alpha|=1$ and $$|q_n(x)|=\operatorname{Re}\!\left(\alpha\,\frac{f(x,t_0+h_n)-f(x,t_0)}{h_n}\right).$$ Apply [L2] to the real-valued function $\tau\mapsto\operatorname{Re}(\alpha f(x,\tau))$ on the segment joining $t_0$ to $t_0+h_n$. For some interior point $\xi$ of that segment, $$|q_n(x)|=\operatorname{Re}(\alpha\,\partial_tf(x,\xi))\le|\partial_tf(x,\xi)|\le g(x).$$ Hypothesis 3 makes $x\mapsto\partial_tf(x,t_0)$ measurable. Therefore [L1] applies to $(q_n)$. [step 1.1, L1, L2]

3.1 By [L1], $$\lim_n\int q_n(x)\,d\mu(x)=\int\partial_tf(x,t_0)\,d\mu(x).$$ But $$\int q_n(x)\,d\mu(x)=\frac{F(t_0+h_n)-F(t_0)}{h_n},$$ so the difference quotients of $F$ converge to the displayed integral. Hence $F$ is differentiable at $t_0$ with the stated derivative. [step 2.1, L1, algebra] ∎
