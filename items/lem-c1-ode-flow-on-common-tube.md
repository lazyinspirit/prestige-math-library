---
id: lem-c1-ode-flow-on-common-tube
kind: lemma
title: "Initial-data sensitivity of an ODE flow on a common compact tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-picard-lindelof-local-existence-and-uniqueness
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-gronwall-integral-inequality
  - thm-heine-cantor-metric
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-mean-value-inequality
  - thm-chain-rule-for-total-derivatives
  - def-c-one-map-and-local-inverse
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $a<b$, let $\Omega\subseteq\mathbb R\times\mathbb R^d$ be open, and let $f:\Omega\to\mathbb R^d$ be $C^1$. Let $K\subseteq\Omega$ be compact and convex, and let $U\subseteq\mathbb R^d$ be open. Assume that for every $s\in U$ the unique IVP solution $\phi(\cdot;s)$ from $\phi(a;s)=s$ exists on $[a,b]$ and $(t,\phi(t;s))\in K$ for every $t$. Then $s\mapsto\phi(t;s)$ is $C^1$ on $U$ for each $t\in[a,b]$. Its derivative matrix $S(t;s):=D_s\phi(t;s)$ is the unique solution of

$$S(t;s)=I_d+\int_a^t D_yf(r,\phi(r;s))S(r;s)\,dr,$$

and hence satisfies $\partial_tS=D_yf(t,\phi(t;s))S$, $S(a;s)=I_d$. The claim is local to the stated common compact tube; it does not assert differentiability beyond it.

## Facts & Assumptions

**Given:** $a<b$, the open state-time domain $\Omega$, the $C^1$ vector field $f$, compact convex $K\subseteq\Omega$, open $U$, and the stated common existence and tube assumptions.

[F1] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability at every point and continuity of the derivative entries.

[F2] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: each continuous IVP solution satisfies $\phi(t;s)=s+\int_a^t f(r,\phi(r;s))\,dr$.

[F3] [[thm-gronwall-integral-inequality]]: if $u(t)\le A+L\int_a^t u(r)dr$ for nonnegative continuous $u$ and constants $A,L\ge0$, then $u(t)\le A e^{L(t-a)}$.

[F4] [[thm-heine-cantor-metric]]: a continuous map on a compact metric space is uniformly continuous; its proof uses no choice principle.

[F5] [[thm-norm-inequality-for-the-vector-valued-integral]]: for an integrable vector-valued function on $[a,b]$, $\|\int_a^b g\|_2\le\int_a^b\|g\|_2$.

[F6] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the derivatives.

[F7] [[thm-mean-value-inequality]]: a vector curve continuous on a closed interval with derivative norm at most $M$ in its interior changes by at most $M$ times the interval length.

[F8] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field locally Lipschitz in the state has a unique local IVP solution; any two solutions through the same data agree on their common interval.

[F9] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: every Picard-Lindelöf IVP has a unique maximal solution, and every other solution through the data is its restriction.

**Proof technique:** Uniform continuity of $D_yf$ on the common compact tube controls the difference-quotient remainder; Gronwall controls both the flow difference and its linearized remainder.

## Proof

1.1 Compactness of $K$ and continuity of $D_yf$ give a finite constant $L$ bounding $\|D_yf\|_{\rm op}$ and a modulus $\omega(\eta)\to0$ such that $\|D_yf(z)-D_yf(w)\|_{\rm op}\le\omega(\|z-w\|_2)$ for $z,w\in K$; this uses [F1] and [F4]. For fixed $s\in U$ and sufficiently small $h$ with $s+h\in U$, set $\Delta_h(t)=\phi(t;s+h)-\phi(t;s)$. The two Volterra equations, convexity of $K$, and [F7] applied to the line segment between the two state values give $\|f(t,\phi(t;s+h))-f(t,\phi(t;s))\|_2\le L\|\Delta_h(t)\|_2$. Applying [F3] to the norm inequality from the integral equations yields $\sup_t\|\Delta_h(t)\|_2\le e^{L(b-a)}\|h\|_2$. [F1, F2, F3, F4, F5, F7, given]

1.2 For each fixed $s$, the matrix equation $S'=A(t)S$, $S(a)=I_d$, with $A(t)=D_yf(t,\phi(t;s))$ has a unique solution on $[a,b]$. View matrices as vectors in $\mathbb R^{d^2}$ with the Frobenius norm and extend $A$ continuously by its endpoint values to an open interval containing $[a,b]$. The extended linear vector field is locally Lipschitz in the matrix state, so the linear IVP has a unique maximal solution by [F8] and [F9]. Gronwall bounds $\|S(t)\|_F$ on every finite subinterval. If its maximal interval ended at a finite time at or before $b$, then $S'=AS$ would be bounded there, making $S(t)$ Cauchy with a finite limit; local existence from that limit extends the solution, a contradiction. Its integral equation is unique by [F3]. [F3, F8, F9, given]

2.1 Uniform continuity of $D_yf$ on $K$ implies, with $z=(t,\phi(t;s))$ and $v=\Delta_h(t)$, that $\|f(t,\phi(t;s)+v)-f(t,\phi(t;s))-D_yf(z)v\|_2\le\omega(\|v\|_2)\|v\|_2$. The line segment remains in $K$ by convexity. For $g(\theta)=f(t,\phi(t;s)+\theta v)-f(t,\phi(t;s))-\theta D_yf(z)v$, the chain rule [F6] gives $g\prime(\theta)=[D_yf(z+\theta(0,v))-D_yf(z)]v$, whose norm is at most $\omega(\|v\|_2)\|v\|_2$; applying [F7] on $[0,1]$ gives the claimed remainder bound. [F1, F4, F6, F7, step 1.1]

3.1 Put $E_h(t)=\Delta_h(t)-S(t;s)h$. Subtract the integral equations for $\phi(t;s+h)$, $\phi(t;s)$, and $S(t;s)h$. The result is $E_h(t)=\int_a^t A(r)E_h(r)dr+\int_a^t q_h(r)dr$, where $\|q_h(r)\|_2\le\omega(e^{L(b-a)}\|h\|_2)e^{L(b-a)}\|h\|_2$ by steps 1.1 and 2.1. Applying [F3] gives $\sup_t\|E_h(t)\|_2/\|h\|_2\le(b-a)e^{2L(b-a)}\omega(e^{L(b-a)}\|h\|_2)\to0$. Thus $D_s\phi(t;s)=S(t;s)$ in the total-derivative definition [F1]. [F1, F2, F3, F5, step 1.1, step 1.2, step 2.1]

4.1 If $s_n\to s$ in $U$, step 1.1 gives uniform convergence $\phi(\cdot;s_n)\to\phi(\cdot;s)$. Uniform continuity of $D_yf$ on $K$ then gives uniform convergence $A(\cdot;s_n)\to A(\cdot;s)$. Subtract the two integral equations for $S(\cdot;s_n)$ and $S(\cdot;s)$; [F3], together with the uniform bound on $S$ obtained from its integral equation, implies $\sup_t\|S(t;s_n)-S(t;s)\|_F\to0$; equivalence of matrix norms gives the same convergence in operator norm. The derivative is continuous, so the flow is $C^1$ on $U$. [F1, F3, F4, step 1.1, step 1.2] ∎
