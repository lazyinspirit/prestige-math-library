---
id: ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck
kind: example
title: "A verified weak-order contract for the Ornstein–Uhlenbeck process"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-euler-maruyama-weak-order-one-under-backward-regularity
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
  - cor-deterministic-ito-integrals-are-gaussian
  - lem-characteristic-function-of-a-normal-law
  - thm-ito-formula-one-dimensional
  - def-d-dimensional-brownian-motion
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Work on a complete filtered probability space whose filtration is
right-continuous and contains all $P$-null subsets of $\mathcal F$ in
$\mathcal F_0$. Let $W$ be an adapted standard one-dimensional Brownian motion
whose increments after time $s$ are independent of $\mathcal F_s$. On
$[0,1]$, take $dX_t=-X_t\,dt+dW_t$ with $X_0=0$ and bounded Lipschitz
payoff $\varphi(x)=\cos x$. For $0\le t\le1$, put $r(t)=e^{t-1}$ and
$$ u(t,x)=\exp\!\left(-\frac{1-r(t)^2}{4}\right)\cos(r(t)x). $$
This value function satisfies the backward equation, the mixed derivative
growth requirement with $q=2$, and the moment threshold $p\ge12$. Thus the
conditional weak theorem applies and gives Euler weak error $O(h)$.

## Facts & Assumptions

**Given:** AC; the complete usual filtered Brownian setup above; $T=1$; the $\mathcal F_0$-measurable initial value $X_0=0$; the Ornstein–Uhlenbeck SDE and payoff displayed in the Example; and Euler step size $0<h\le1$ with $1/h\in\mathbb N$.

[F1] For a one-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $F_t+bF_x+\frac12\sigma^2F_{xx}$ and stochastic term $\sigma F_x\,dW$. [[thm-ito-formula-one-dimensional]]

[F2] An Itô integral with deterministic $h\in L^2[0,T]$ has centered normal law $N(0,\int_0^T h(s)^2ds)$. [[cor-deterministic-ito-integrals-are-gaussian]]

[F3] A $N(m,v)$ variable has characteristic function $t\mapsto\exp(imt-vt^2/2)$. [[lem-characteristic-function-of-a-normal-law]]

[F4] The Euler interpolation on a grid interval is $Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F5] Under the Euler coefficient and initial-moment hypotheses, for every finite $p\ge2$ the step and continuous interpolation have uniformly bounded pointwise $p$th moments. [[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F6] A standard normal variable has finite absolute moments of every finite real order, and scaling $N(0,v)$ as $\sqrt v Z$ gives its corresponding moment bound. [[def-standard-normal-and-normal-laws]]

[F7] If the bounded test payoff's backward value function has the stated mixed derivatives and $p\ge2q+8$ moments, the weak Euler error is at most $Ch$. [[thm-euler-maruyama-weak-order-one-under-backward-regularity]]

[A1] AC is included because the Brownian, deterministic-integral Gaussian, normal-characteristic-function and normal-moment suppliers in [F1]–[F3], [F6] adopt it. [[def-axiom-of-choice]]

## Verification



**Given:** AC; the complete usual filtered Brownian setup above; $T=1$; the $\mathcal F_0$-measurable initial value $X_0=0$; the Ornstein–Uhlenbeck SDE and payoff displayed in the Example; and Euler step size $0<h\le1$ with $1/h\in\mathbb N$.

[F1] For a one-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $F_t+bF_x+\frac12\sigma^2F_{xx}$ and stochastic term $\sigma F_x\,dW$. [[thm-ito-formula-one-dimensional]]

[F2] An Itô integral with deterministic $h\in L^2[0,T]$ has centered normal law $N(0,\int_0^T h(s)^2ds)$. [[cor-deterministic-ito-integrals-are-gaussian]]

[F3] A $N(m,v)$ variable has characteristic function $t\mapsto\exp(imt-vt^2/2)$. [[lem-characteristic-function-of-a-normal-law]]

[F4] The Euler interpolation on a grid interval is $Y_t=Y_k+b(t_k,Y_k)(t-t_k)+\sigma(t_k,Y_k)(W_t-W_{t_k})$. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F5] Under the Euler coefficient and initial-moment hypotheses, for every finite $p\ge2$ the step and continuous interpolation have uniformly bounded pointwise $p$th moments. [[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F6] A standard normal variable has finite absolute moments of every finite real order, and scaling $N(0,v)$ as $\sqrt v Z$ gives its corresponding moment bound. [[def-standard-normal-and-normal-laws]]

[F7] If the bounded test payoff's backward value function has the stated mixed derivatives and $p\ge2q+8$ moments, the weak Euler error is at most $Ch$. [[thm-euler-maruyama-weak-order-one-under-backward-regularity]]

[A1] AC is included because the Brownian, deterministic-integral Gaussian, normal-characteristic-function and normal-moment suppliers in [F1]–[F3], [F6] adopt it. [[def-axiom-of-choice]]




1.1 Apply [F1] to $e^tX_t$. The drift terms cancel, so $X_t=\int_0^t e^{-(t-s)}dW_s.$ For a solution started at $(t,x)$, the same calculation gives $X_1^{t,x}=r(t)x+\int_t^1 e^{-(1-s)}dW_s.$ By [F2], the last integral is $N(0,(1-r(t)^2)/2)$. [A1, F1, F2, given]

1.2 Since $r'=r$ and $A(t):=e^{-(1-r(t)^2)/4}$ satisfies $A'/A=r^2/2$, direct differentiation gives $u_t=A\left(\frac{r^2}{2}\cos(rx)-rx\sin(rx)\right), \qquad u_x=-Ar\sin(rx), \qquad u_{xx}=-Ar^2\cos(rx).$ For the generator $L=-x\partial_x+\frac12\partial_{xx}$, these formulas imply $(\partial_t+L)u=0$. Every mixed derivative $\partial_t^j\partial_x^ku$ with $j\le2$, $k\le4$ is a finite sum of bounded smooth coefficient functions times $x^a\sin(rx)$ or $x^a\cos(rx)$ with $a\le2$; hence it is bounded by $C(1+|x|^2)$. The backward contract holds with $q=2$. [given, algebra]

2.1 By [F3], for that normal variable $Z$, $\mathbb E e^{iZ}=e^{-(1-r^2)/4}$. Taking the real part after multiplying by $e^{irx}$ gives $\mathbb E\cos(X_1^{t,x}) =e^{-(1-r(t)^2)/4}\cos(r(t)x)=u(t,x).$ Thus $u$ is the stated backward value function and $u(1,x)=\cos x$. [F2, F3, step 1.1, algebra]

2.2 The exact process is centered normal at each time with variance $(1-e^{-2t})/2\le1/2$ by [F2], so its pointwise 12th moments are uniformly bounded by [F6]. For the Euler process, $b(x)=-x$ is globally Lipschitz with linear growth, $\sigma(x)=1$ is globally Lipschitz with linear growth, the time modulus is zero, and $X_0=0$ has every moment. Applying [F5] at $p=12$ therefore gives uniform pointwise 12th moments for $Y^h$ and $\bar Y^h$. The threshold is $p=12=2q+8$. [F2, F5, F6, given, step 1.1]

3.1 The payoff is bounded and $1$-Lipschitz. By [F4], the interpolation agrees with the Euler recursion at $T$, so the conclusion of [F7] applies to $Y_N^h$. Steps 2.1–2.2 verify its backward regularity and moment premises, giving $|\mathbb E\cos(X_1)-\mathbb E\cos(Y_N^h)|\le Ch$. AC is inherited through [A1]. [A1, F4, F7, step 2.1, step 1.2, step 2.2] ∎

