---
id: thm-semiconvex-hilbert-gradient-flow
kind: theorem
title: A lower-bounded semiconvex Hilbert energy generates a unique gradient flow
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [lem-hilbert-valued-path-energy-characterization, lem-bochner-time-l2-is-separable-hilbert, def-hilbert-space, def-separable-space, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-nested-interval-property, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-fatou-lemma]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the countable selections in the resolvent approximations, weak-subsequence diagonalization, and Hilbert Riesz representation. The proof makes no use of unrestricted choice beyond these named branches."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC. Let $H$ be a separable real Hilbert space and let $E:H\to(-\infty,+\infty]$ be proper, lower semicontinuous, bounded below, and $\lambda$-convex, meaning
$$E((1-t)x+ty)\le(1-t)E(x)+tE(y)-\frac{\lambda}{2}t(1-t)\|x-y\|_H^2\quad(0\le t\le1).$$
For $x\in\operatorname{dom}E$, define
$$\partial_\lambda E(x)=\{\xi\in H:E(y)\ge E(x)+\langle\xi,y-x\rangle_H+\tfrac{\lambda}{2}\|y-x\|_H^2\text{ for every }y\in H\}.$$
For every $x_0\in\operatorname{dom}E$, there is a unique curve $x:[0,\infty)\to H$ which is absolutely continuous with square-integrable derivative on every bounded interval, satisfies $x(0)=x_0$ and $-\dot x(t)\in\partial_\lambda E(x(t))$ for almost every $t$, and obeys
$$E(x(t))-E(x(s))=-\int_s^t\|\dot x(r)\|_H^2\,dr\quad(0\le s\le t<\infty).$$
For almost every $t$, $-\dot x(t)$ is the unique minimum-norm element of $\partial_\lambda E(x(t))$. For two such curves $x,\widetilde x$ with initial values $x_0,\widetilde x_0$,
$$\|x(t)-\widetilde x(t)\|_H\le e^{-\lambda t}\|x_0-\widetilde x_0\|_H.$$

## Statement references

[[lem-hilbert-valued-path-energy-characterization]]

[[lem-bochner-time-l2-is-separable-hilbert]]

[[thm-riesz-representation-for-hilbert-space]]

[Ambrosio, Gigli, and Savaré, Theorem 4.0.4 and Sections 4.1–4.3](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, a separable real Hilbert space $H$, a proper lower-semicontinuous bounded-below $\lambda$-convex energy $E$, and $x_0$ with $E(x_0)<\infty$.

[F1] The Bochner space $Z=L^2((0,T);H)$ is a separable Hilbert space. [[lem-bochner-time-l2-is-separable-hilbert]]

[F2] If a continuous Hilbert-valued path has finite partition energy, it is an AC² path with a Bochner derivative and its squared derivative integral equals that partition energy. [[lem-hilbert-valued-path-energy-characterization]]

[F3] A bounded linear functional on a Hilbert space has a unique Riesz representative. [[thm-riesz-representation-for-hilbert-space]]

[F4] AC supplies Countable and Dependent Choice. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F5] Cauchy–Schwarz holds for the Hilbert inner product. [[thm-cauchy-schwarz-in-an-inner-product-space]]

[F6] Fatou's lemma passes lower bounds through pointwise limits of nonnegative measurable functions. [[thm-fatou-lemma]]

[F7] Every bounded real sequence has a convergent subsequence by the nested-interval property. [[thm-nested-interval-property]]

## Proof


**Given:** AC, $H,E,\lambda$, and $x_0$ as in the Statement.

1.1 For $0<\tau$ with $1+\lambda\tau>0$ and $z\in H$, set $\Psi_{\tau,z}(y)=E(y)+\|y-z\|_H^2/(2\tau)$. It is lower semicontinuous and $(\lambda+1/\tau)$-strongly convex, with positive strong-convexity coefficient. It is bounded below and coercive because $E$ is bounded below. Choose a minimizing sequence $(y_n)$ using [F4]. The midpoint inequality $\displaystyle \Psi_{\tau,z}\!\left(\frac{y_n+y_m}{2}\right)\le\frac{\Psi_{\tau,z}(y_n)+\Psi_{\tau,z}(y_m)}{2}-\frac{1+\lambda\tau}{8\tau}\|y_n-y_m\|_H^2$ and the lower bound by the infimum show that $(y_n)$ is Cauchy. Completeness of $H$ and lower semicontinuity give a minimizer, and strong convexity makes it unique. Call it $J_\tau z$. For $0<h<1$, set $y_h=(1-h)J_\tau z+hy$. Minimality at $y_h$, the $\lambda$-convex inequality, and expansion of the quadratic term give $\displaystyle 0\le h(E(y)-E(J_\tau z))-\frac{\lambda}{2}h(1-h)\|y-J_\tau z\|_H^2-\frac h\tau\langle z-J_\tau z,y-J_\tau z\rangle_H+\frac{h^2}{2\tau}\|y-J_\tau z\|_H^2.$ Divide by $h$ and let $h\downarrow0$ to obtain $\displaystyle E(y)\ge E(J_\tau z)+\left\langle\frac{z-J_\tau z}{\tau},y-J_\tau z\right\rangle_H+\frac{\lambda}{2}\|y-J_\tau z\|_H^2,$ so $(z-J_\tau z)/\tau\in\partial_\lambda E(J_\tau z)$. [given, F4, construct]

2.1 Starting at $x_0$, iterate $x_n=J_\tau x_{n-1}$. Comparison with the admissible point $x_{n-1}$ gives $\displaystyle E(x_n)+\frac{\|x_n-x_{n-1}\|_H^2}{2\tau}\le E(x_{n-1}).$ Thus $E(x_n)$ decreases and, for $m=\inf_HE$, $\sum_n\tau\|(x_{n-1}-x_n)/\tau\|_H^2\le2(E(x_0)-m)$. [given, step 1.1]

3.1 Let $x_\tau$ be the linear interpolation between the iterates and $\bar x_\tau(t)=x_n$ on $(t_{n-1},t_n]$; then $\dot x_\tau=-\xi_\tau$ and $\xi_\tau(t)\in\partial_\lambda E(\bar x_\tau(t))$. The action bound in step 2.1 gives $\|\xi_\tau\|_{L^2(0,T;H)}^2\le2(E(x_0)-m)$ and $\|x_\tau-\bar x_\tau\|_{L^\infty(0,T;H)}\le\sqrt{\tau}\|\xi_\tau\|_{L^2(0,T;H)}$. For two uniform meshes $\tau,\sigma$, put $\delta_\tau=x_\tau-\bar x_\tau$ and $q(t)=\|x_\tau(t)-x_\sigma(t)\|_H^2$. The subgradient monotonicity obtained by adding the defining inequalities for $\partial_\lambda E$ gives $\displaystyle \frac12q'(t)\le-\lambda\|\bar x_\tau(t)-\bar x_\sigma(t)\|_H^2+(\|\xi_\tau(t)\|_H+\|\xi_\sigma(t)\|_H)(\|\delta_\tau(t)\|_H+\|\delta_\sigma(t)\|_H).$ Using $\|\delta_\tau(t)\|_H\le\tau\|\xi_\tau(t)\|_H$ on each step and Cauchy–Schwarz in time, the interpolation-error terms obey $\displaystyle \int_0^T(\|\xi_\tau\|+\|\xi_\sigma\|)(\|\delta_\tau\|+\|\delta_\sigma\|)dt\le 2(\tau+\sigma)(\|\xi_\tau\|_{L^2}^2+\|\xi_\sigma\|_{L^2}^2),\quad\int_0^T\|\delta_\tau-\delta_\sigma\|^2dt\le2\tau^2\|\xi_\tau\|_{L^2}^2+2\sigma^2\|\xi_\sigma\|_{L^2}^2.$ When $\lambda\ge0$ its term in the differential inequality is nonpositive; when $\lambda<0$, $\|\bar x_\tau-\bar x_\sigma\|^2\le2q+2\|\delta_\tau-\delta_\sigma\|^2$ bounds it by $2|\lambda|q+2|\lambda|\|\delta_\tau-\delta_\sigma\|^2$. Since the action norms are uniformly bounded by step 2.1, for $0<\tau,\sigma\le1$ the differential inequality has the form $q'(t)\le4|\lambda|q(t)+r(t)$, $q(0)=0$, with $\int_0^T r(t)dt\le C(\tau+\sigma)$ and $C$ depending only on $T,\lambda,E(x_0)-m$. Multiplying by $e^{-4|\lambda|t}$ and integrating yields $\sup_{t\le T}q(t)\le C_T(\tau+\sigma)$, so the interpolants converge uniformly on every bounded time interval. [F1, F5, step 2.1]

4.1 Let $x$ be the uniform limit. Every finite partition $P$ satisfies $\sum_{[a,b]\in P}\|x(b)-x(a)\|_H^2/(b-a)\le\liminf_{\tau\downarrow0}\int_0^T\|\dot x_\tau\|_H^2\le2(E(x_0)-m)$, by Cauchy–Schwarz on each mesh interval and uniform convergence. [F2] gives $x\in AC^2$ and a derivative. The step functions $\xi_\tau$ are bounded in the separable Hilbert space [F1]; apply [F7] successively to their inner products with a countable dense family and take a diagonal subsequence. The limits define a bounded linear functional on the dense span, hence on the whole space, and [F3] represents its extension by $\xi\in L^2(0,T;H)$. Thus $\xi_\tau\rightharpoonup\xi$. Since $x_\tau(t)-x_0=-\int_0^t\xi_\tau(r)dr$ and the Bochner integral on $(0,t)$ is a bounded linear map, weak convergence and uniform convergence imply $\dot x=-\xi$. Also $\bar x_\tau\to x$ uniformly. [F1, F2, F3, F7, step 3.1]

5.1 For each fixed $y$ with $E(y)<\infty$, integrate the discrete inequality from step 1.1 over any measurable $A\subset(0,T)$. Weak convergence of $\xi_\tau$ and uniform convergence of $\bar x_\tau$ pass the linear term to its limit; lower semicontinuity of $E$ and Fatou's lemma [F6], applied to $E(\bar x_\tau)-m\ge0$, pass the energy term. Thus the subgradient inequality holds for almost every $t$, first for a countable dense subset of the graph $\{(y,E(y)):E(y)<\infty\}$ and then for every such $y$ by continuity in the graph variables. Hence $\xi(t)\in\partial_\lambda E(x(t))$ almost everywhere. [given, F6, step 1.1, step 4.1]

6.1 Put $e(t)=E(x(t))$. The discrete energy bound and lower semicontinuity give $m\le e(t)\le E(x_0)$ for every $t$. For $h>0$, the subgradient inequalities at $x(t)$ and $x(t+h)$ sandwich $[e(t+h)-e(t)]/h$ between $\langle\xi(t),(x(t+h)-x(t))/h\rangle_H$ and $\langle\xi(t+h),(x(t+h)-x(t))/h\rangle_H$, up to terms bounded by $|\lambda|\|x(t+h)-x(t)\|_H^2/(2h)$. Integrating over $[a,b]$ with Lebesgue-point endpoints and letting $h\downarrow0$ gives $e(b)-e(a)=\int_a^b\langle\xi(r),\dot x(r)\rangle_Hdr=-\int_a^b\|\dot x(r)\|_H^2dr$; translation continuity in $L^2$ justifies both limits. This defines an absolutely continuous representative $\widetilde e$ of $e$. Lower semicontinuity gives $e(t)\le\widetilde e(t)$ for every $t$. Fix $t>0$ and choose dyadic intervals $I_n=(t-2^{-n},t-2^{-n-1})\subset(0,t)$. Since $\int_{I_n}\|\xi\|_H^2\to0$, there is a good $s_n\in I_n$ with $\|\xi(s_n)\|_H^2\le2|I_n|^{-1}\int_{I_n}\|\xi\|_H^2$; hence $(t-s_n)\|\xi(s_n)\|_H^2\to0$. The subgradient inequality at $x(s_n)$ with $y=x(t)$ and $\|x(t)-x(s_n)\|_H\le\sqrt{t-s_n}\|\dot x\|_{L^2(s_n,t;H)}$ gives $e(t)\ge\widetilde e(t)$ in the limit. At $t=0$, lower semicontinuity gives $e(0)\le\widetilde e(0)$, while $e(t)\le E(x_0)$ for all $t$ gives $\widetilde e(0)\le E(x_0)=e(0)$ by continuity. Hence $e=\widetilde e$ everywhere and the stated energy identity holds for all endpoints. [F5, step 5.1]

7.1 At almost every $t$, let $\zeta\in\partial_\lambda E(x(t))$. Applying its defining inequality to $x(t+h)$ for positive and negative $h$, then using differentiability of $x$ and $e$, gives $\langle\zeta,\dot x(t)\rangle_H=-\|\dot x(t)\|_H^2$. Since $\xi=-\dot x\in\partial_\lambda E(x(t))$, this says $\langle\zeta-\xi,\xi\rangle_H=0$ and hence $\|\zeta\|_H^2=\|\xi\|_H^2+\|\zeta-\xi\|_H^2$. Thus $\xi$ is the unique minimum-norm subgradient almost everywhere. [step 6.1, step 5.1]

8.1 For two solutions, $\lambda$-semiconvexity implies $\langle\xi-\tilde\xi,x-\tilde x\rangle_H\ge\lambda\|x-\tilde x\|_H^2$. Therefore $\frac12\frac d{dt}\|x-\tilde x\|_H^2=-\langle\xi-\tilde\xi,x-\tilde x\rangle_H\le-\lambda\|x-\tilde x\|_H^2$ almost everywhere. Grönwall proves the stated estimate and uniqueness. [step 5.1, step 7.1] ∎

## Unresolved proof obligation

The resolvent construction, limit inclusion, and contraction argument are supplied above, but Step 6.1 does not yet prove the asserted energy chain rule. It says that integrating the difference-quotient sandwich at Lebesgue-point endpoints produces an absolutely continuous representative of $e(t)=E(x(t))$, without first ruling out a singular part of this bounded measurable function; a.e. derivative information alone would not rule one out. Step 7.1 depends on differentiability of $e$, so the all-endpoint energy identity and minimum-norm selection conclusion remain escalated until a complete convex chain-rule/variation argument is supplied.
