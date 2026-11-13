---
id: lem-author-647111dd30d9-gradient-length
kind: lemma
title: Conditional gradient inequality gives a length bound
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-647111dd30d9-gradient-energy
  - math:thm-real-power-continuity-and-derivatives
  - math:thm-picard-lindelof-local-existence-and-uniqueness
  - math:thm-newton-leibniz-with-interior-derivative
  - math:thm-chain-rule-for-total-derivatives
  - math:thm-extreme-value-metric
  - math:thm-heine-borel-rn
  - math:cor-mean-value-theorem
  - math:def-real-power
  - math:thm-real-power-laws
  - math:cor-exponential-reciprocal-and-positivity
  - math:thm-continuous-implies-integrable
  - math:thm-monotonicity-of-the-integral
  - math:thm-linearity-of-the-integral
  - math:def-the-integral-function
  - math:thm-the-integral-function-is-lipschitz
  - math:def-ck-and-multi-index-notation-in-several-variables
  - math:thm-continuous-partial-derivatives-imply-total-differentiability
dependency_roles:
  lem-author-647111dd30d9-gradient-energy: mathematical-premise
  math:thm-real-power-continuity-and-derivatives: mathematical-premise
  math:thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  math:thm-newton-leibniz-with-interior-derivative: mathematical-premise
  math:thm-chain-rule-for-total-derivatives: mathematical-premise
  math:thm-extreme-value-metric: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:cor-mean-value-theorem: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:thm-continuous-implies-integrable: mathematical-premise
  math:thm-monotonicity-of-the-integral: mathematical-premise
  math:thm-linearity-of-the-integral: mathematical-premise
  math:def-the-integral-function: mathematical-premise
  math:thm-the-integral-function-is-lipschitz: mathematical-premise
  math:def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  math:thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, $m\ge1$, and $z\in U$. Suppose on an open neighborhood $W\subset U$ of $z$ one has $f\ge f(z)$ and
$$\|\nabla f(y)\|\ge c|f(y)-f(z)|^\rho,\qquad c>0,\quad 0<\rho<1.$$
For any downward Euclidean gradient trajectory remaining in $W$ on $[a,b]$, its length is at most
$$\frac{(f(x(a))-f(z))^{1-\rho}-(f(x(b))-f(z))^{1-\rho}}{c(1-\rho)}.$$
This statement assumes the displayed inequality; it does not assert it for arbitrary $C^2$ functions.

## Facts & Assumptions

[F1] We use the closed-interval $C^1$ trajectory convention, the Euclidean gradient, and the length integral specified in [[lem-author-647111dd30d9-gradient-energy]]. Thus $x$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $x'$ has a continuous extension to $[a,b]$. A degenerate interval has length zero.

[F2] [[math:def-real-power]] defines $s^\beta=\exp(\beta\log s)$ for $s>0$ and $0^\beta=0$ for $\beta>0$. [[math:cor-exponential-reciprocal-and-positivity]] makes every positive-base power positive. [[math:thm-real-power-continuity-and-derivatives]] supplies continuity and the derivative $\beta s^{\beta-1}$ on $(0,\infty)$; [[math:thm-real-power-laws]] supplies the iterated-power law. The extension to zero is proved below, rather than assumed from the positive-base theorem.

[F3] [[math:thm-continuous-implies-integrable]] gives boundedness and Riemann integrability for continuous real functions on nondegenerate compact intervals. [[math:thm-monotonicity-of-the-integral]] gives nonnegativity, comparison, and the two-sided constant bounds for integrals. [[math:thm-linearity-of-the-integral]] permits scalar factors to be taken outside an integral. [[math:thm-newton-leibniz-with-interior-derivative]] applies to a continuous function whose interior derivative has an integrable extension.

[F4] For an integrable speed $g$ on $[a,b]$, [[math:def-the-integral-function]] defines $L(t)=\int_a^t g(s)\,ds$, including $L(a)=0$, and gives $L(v)-L(u)=\int_u^v g(s)\,ds$. If $|g|\le K$, [[math:thm-the-integral-function-is-lipschitz]] gives $|L(v)-L(u)|\le K|v-u|$, so $L$ is continuous at the endpoints as well.

[F5] [[math:thm-heine-borel-rn]] gives compactness of closed bounded Euclidean sets; [[math:thm-extreme-value-metric]] gives extrema and bounds for continuous real functions on nonempty compact sets.

[F6] The $C^2$ hypothesis has the meaning of [[math:def-ck-and-multi-index-notation-in-several-variables]]: all iterated coordinate derivatives of order at most two exist and are continuous. [[math:thm-continuous-partial-derivatives-imply-total-differentiability]] applies to $f$ and its first partial derivatives. [[math:thm-chain-rule-for-total-derivatives]] and [[math:cor-mean-value-theorem]] apply along line segments. For the resulting locally Lipschitz vector field $-\nabla f$, [[math:thm-picard-lindelof-local-existence-and-uniqueness]] supplies uniqueness on common solution intervals.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the asserted length bound, including zero energy levels.

1.1 For any $\beta>0$, the positive-base power has strictly positive derivative by [F2], so the mean value theorem makes $s\mapsto s^\beta$ strictly increasing on $(0,\infty)$. Given $\varepsilon>0$, put $\delta=\varepsilon^{1/\beta}>0$. If $0<s<\delta$, the iterated-power law gives $0<s^\beta<\delta^\beta=\varepsilon$; for $s=0$ the zero-base convention gives the same upper bound. Thus $s^\beta\to0$ as $s\downarrow0$, and the defined power is continuous on $[0,\infty)$. This applies to both $\beta=\rho$ and $\beta=1-\rho$. [F2, F6, given]

1.2 If $a=b$, both the length and the stated numerator are zero. Hence assume $a<b$. Write $h(t)=f(x(t))-f(z)\ge0$ and $g(t)=\|\nabla f(x(t))\|$. The energy identity, or its interior chain-rule calculation, gives $h'=-g^2$ and $\|x'\|=g$; $h$ and $g$ are continuous on $[a,b]$. Where $h>0$, the power derivative, chain rule, and $g\ge c h^\rho$ give $-(h^{1-\rho})'=(1-\rho)h^{-\rho}g^2\ge c(1-\rho)g$. [F1, F2, F6, given]

1.3 At any $q\in W$ with $f(q)=f(z)$, openness of $W$ and $f\ge f(z)$ make $q$ a local minimum. For each coordinate, the positive and negative difference quotients at $q$ have opposite weak signs; existence of the partial derivative forces it to be zero. Thus $\nabla f(q)=0$ and the constant curve through $q$ solves the gradient equation. The gradient is locally Lipschitz: on a small closed ball in $U$, each continuous second partial derivative is bounded by compactness and extreme values; applying the chain rule and the one-variable mean value estimate along segments bounds each first-partial increment by a constant times the distance. Combining the finitely many coordinate bounds gives a Lipschitz bound for the gradient. ODE uniqueness therefore makes the given trajectory constant for the rest of $[a,b]$ after any time at which $h=0$. Its speed and all subsequent length increments are zero. [F1, F3, F4, F5, F6, given]

2.1 On a nondegenerate closed subinterval $[u,v]\subseteq[a,b]$ where $h>0$, both $g$ and $d(t)=(1-\rho)h(t)^{-\rho}g(t)^2$ are continuous, hence integrable. Newton–Leibniz applies to $-h^{1-\rho}$ with derivative extension $d$. Integral comparison and scalar linearity therefore give $c(1-\rho)\int_u^v g(t)\,dt\le\int_u^v d(t)\,dt=h(u)^{1-\rho}-h(v)^{1-\rho}$. [F2, F3, step 1.2]

2.2 On the whole interval, continuity of $g$ gives integrability and a finite bound $0\le g\le K$. The integral function $L(t)=\int_a^t g(s)\,ds$ is therefore defined and satisfies $|L(v)-L(u)|\le K|v-u|$. In particular, $L(t)\to L(\tau)$ as $t\uparrow\tau$, for every $a<\tau\le b$. [F3, F4, step 1.2]

3.1 If $h(a)=0$, step 1.3 gives length zero and $h(b)=0$, proving the bound. Otherwise $h(a)>0$. If $h$ has no zero on $[a,b]$, use step 2.1 with $u=a$ and $v=b$. If it has a zero, its zero set is closed by continuity, bounded, and nonempty; compactness and the minimum of the identity function give its first element $\tau>a$. For $a<t<\tau$, step 2.1 gives $c(1-\rho)L(t)\le h(a)^{1-\rho}-h(t)^{1-\rho}$. As $t\uparrow\tau$, continuity of $h$, the zero-endpoint power limit in step 1.1, and step 2.2 give $c(1-\rho)L(\tau)\le h(a)^{1-\rho}$. Step 1.3 gives $L(b)=L(\tau)$ and $h(b)=0$. Dividing by $c(1-\rho)>0$ proves exactly the asserted estimate in every case. [F3, F4, F5, step 1.1, step 1.2, step 2.1, step 2.2, step 1.3] ∎
