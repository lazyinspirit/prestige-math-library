---
id: lem-author-ee25311adb41-gradient-tail-length
kind: lemma
title: The local gradient inequality bounds trajectory length
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-ee25311adb41-analytic-metric-transfer
  - prop-expander-prereq-gradient-dissipation
  - math:def-riemannian-speed-and-length
  - math:thm-real-power-continuity-and-derivatives
  - math:lem-fundamental-theorem-and-integration-by-parts
  - math:thm-chain-rule
  - math:thm-monotonicity-of-the-integral
  - math:def-real-power
  - math:thm-real-power-laws
  - math:cor-exponential-reciprocal-and-positivity
  - math:lem-mean-value-theorem-on-closed-interval
  - math:lem-continuous-functions-riemann-integrable
  - math:thm-algebra-of-derivatives
  - math:thm-infimum-property
  - math:thm-composition-of-continuous-functions
  - math:thm-algebra-of-continuous-functions
dependency_roles:
  lem-author-ee25311adb41-analytic-metric-transfer: mathematical-premise
  prop-expander-prereq-gradient-dissipation: mathematical-premise
  math:def-riemannian-speed-and-length: mathematical-premise
  math:thm-real-power-continuity-and-derivatives: mathematical-premise
  math:lem-fundamental-theorem-and-integration-by-parts: mathematical-premise
  math:thm-chain-rule: mathematical-premise
  math:thm-monotonicity-of-the-integral: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:lem-mean-value-theorem-on-closed-interval: mathematical-premise
  math:lem-continuous-functions-riemann-integrable: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:thm-infimum-property: mathematical-premise
  math:thm-composition-of-continuous-functions: mathematical-premise
  math:thm-algebra-of-continuous-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement

In the manifold and metric conventions of [[lem-author-ee25311adb41-analytic-metric-transfer]], let $q:[0,\infty)\to M$ be a downward gradient trajectory with $E(t)=U(q(t))\downarrow L$, and put $e(t)=E(t)-L\ge0$. Suppose $W\subset M$ satisfies $\|\operatorname{grad}_g U(x)\|_g\ge c|U(x)-L|^\rho$ for $c>0$, $0<\rho<1$. Whenever $a<b$ and $q([a,b])\subset W$, its Riemannian length satisfies $\int_a^b\|q'(t)\|_gdt\le[e(a)^{1-\rho}-e(b)^{1-\rho}]/[c(1-\rho)]$.

## Facts & Assumptions

[F1] Use the manifold, metric and potential conventions of [[lem-author-ee25311adb41-analytic-metric-transfer]]. The downward gradient trajectory is $C^1$, with a right derivative at zero; its speed $v(t)=\|q'(t)\|_g$ is continuous and nonnegative, and its length on a finite interval is the integral of $v$ ([[math:def-riemannian-speed-and-length]]). Energy dissipation gives $e'=-v^2$ and $v=\|\operatorname{grad}_g U\|_g$, including the right derivative at zero; $e$ is continuously differentiable and nonincreasing ([[prop-expander-prereq-gradient-dissipation]]).

[F2] For positive bases, real powers have the usual iterated-power and exponent laws; $0^\beta=0$ for $\beta>0$ ([[math:def-real-power]], [[math:thm-real-power-laws]]). Positive-base powers are positive because the exponential is positive ([[math:cor-exponential-reciprocal-and-positivity]]). For $x>0$, $(x^\beta)'=\beta x^{\beta-1}$ and powers are continuous on $(0,\infty)$ ([[math:thm-real-power-continuity-and-derivatives]]). The mean value theorem applies to a continuous function on a closed interval differentiable in its interior ([[math:lem-mean-value-theorem-on-closed-interval]]).

[F3] The scalar chain rule applies at interior times, with the outer power function defined on $(0,\infty)$ ([[math:thm-chain-rule]]). Scalar multiples differentiate as expected ([[math:thm-algebra-of-derivatives]]). The fundamental theorem integrates a continuous derivative when both integration endpoints lie in an open interval of continuous differentiability ([[math:lem-fundamental-theorem-and-integration-by-parts]]). Composites of continuous real functions are continuous, as are sums, products and scalar multiples ([[math:thm-composition-of-continuous-functions]], [[math:thm-algebra-of-continuous-functions]]).

[F4] Continuous real integrands on compact intervals have oriented Riemann integrals, additive over adjacent intervals, with $\left|\int_u^w f(t)\,dt\right|\le |w-u|\max_{t\text{ between }u\text{ and }w}|f(t)|$ ([[math:lem-continuous-functions-riemann-integrable]]). Pointwise comparison of integrable functions on a positively oriented interval implies comparison of their integrals ([[math:thm-monotonicity-of-the-integral]]).

[F5] Every nonempty subset of $\mathbb R$ bounded below has an infimum ([[math:thm-infimum-property]]).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish the length estimate, including zero energy and the endpoint $a=0$.

1.1 Put $\alpha=1-\rho\in(0,1)$. We first justify the power at zero. For any $\beta>0$, the derivative $\beta x^{\beta-1}$ is positive for $x>0$, so the mean value theorem makes $x\mapsto x^\beta$ strictly increasing on $(0,\infty)$. Given $\varepsilon>0$, let $\delta=\varepsilon^{1/\beta}>0$. The iterated-power law gives $\delta^\beta=\varepsilon$. Thus $0<x<\delta$ implies $0<x^\beta<\varepsilon$, proving $x^\beta\to0$ as $x\downarrow0$. With $0^\beta=0$, this extends the positive-base continuity to $[0,\infty)$. In particular $e(t)^\alpha$ is continuous, including at any zero of $e$. [given, F1, F2, F3, algebra]

1.2 Fix $a<b$ as in the Statement. The continuous speed on $[a,b]$ has a finite bound $B=\max_{[a,b]}v$. Additivity and the integral bound in [F4] give $\left|\int_r^s v(t)\,dt\right|\le B|s-r|$ for $r,s\in[a,b]$. Hence, as $u\downarrow a$ and $w\uparrow d$ with $a<d\le b$, $\int_u^w v\to\int_a^d v$: the absolute difference is at most $B[(u-a)+(d-w)]$. This also proves the corresponding limit with one endpoint fixed. [given, F1, F4, algebra]

1.3 Let $a<u<w<b$ and suppose $e(w)>0$. By monotonicity and continuity, $e>0$ on an open interval in $(0,\infty)$ containing $[u,w]$. The chain rule and power derivative therefore apply there to $H(t)=-e(t)^\alpha/(c\alpha)$, giving $H'(t)=e(t)^{-\rho}v(t)^2/c$, a continuous derivative. On $[u,w]$, the assumed gradient inequality is $v(t)\ge c e(t)^\rho$; the power laws yield $e(t)^{-\rho}v(t)\ge c$ and hence $H'(t)\ge v(t)$. Both integrands are continuous, so integral comparison and the fundamental theorem give $\int_u^w v(t)\,dt\le H(w)-H(u)=[e(u)^\alpha-e(w)^\alpha]/(c\alpha)$. The fundamental theorem has been applied only at strictly positive interior times. [given, F1, F2, F3, F4, algebra]

1.4 If $e(a)=0$, nonnegativity and monotonicity imply $e(t)=0$ for all $t\ge a$. Dissipation then gives $v(t)=0$ there, using the right derivative at $a$ if necessary. Both sides of the claimed estimate are zero by the zero-base convention. [given, F1, F2, algebra]

2.1 If $e(b)>0$, every $w<b$ has $e(w)>0$. Let $u\downarrow a$ and $w\uparrow b$ in step 1.3. Steps 1.1 and 1.2 give $\int_a^b v(t)\,dt\le[e(a)^\alpha-e(b)^\alpha]/(c\alpha)$. This includes $a=0$ without applying the fundamental theorem at zero. [given, F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 It remains that $e(a)>0$ and $e(b)=0$. Let $Z=\{t\in[a,b]:e(t)=0\}$ and $\tau=\inf Z$. The set is nonempty since $b\in Z$ and is bounded below by $a$, so [F5] applies. Positivity and continuity at $a$ give $\tau>a$. For every $\eta>0$, some $z\in Z$ satisfies $\tau\le z<\tau+\eta$; otherwise $\tau+\eta$ would be a larger lower bound. Continuity therefore gives $e(\tau)=0$, whereas the lower-bound property gives $e(t)>0$ for $a\le t<\tau$. Apply step 1.3 with $a<u<w<\tau$, then let $u\downarrow a$ and $w\uparrow\tau$. Steps 1.1 and 1.2 yield $\int_a^\tau v(t)\,dt\le e(a)^\alpha/(c\alpha)$. Since $e=0$ on $[\tau,\infty)$ by monotonicity, dissipation makes $v=0$ there. Additivity of length proves the desired estimate on $[a,b]$, also when $\tau=b$ or $a=0$. [given, F1, F4, F5, step 1.1, step 1.2, step 1.3, algebra] ∎
