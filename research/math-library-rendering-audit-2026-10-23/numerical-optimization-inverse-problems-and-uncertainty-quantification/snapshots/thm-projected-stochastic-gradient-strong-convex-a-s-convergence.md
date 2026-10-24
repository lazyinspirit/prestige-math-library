---
id: thm-projected-stochastic-gradient-strong-convex-a-s-convergence
kind: theorem
title: "Projected SGD converges almost surely on a strongly convex objective"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-projected-stochastic-gradient-update
  - def-indicator-function-of-closed-convex-set
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-strong-convex-composite-objective
  - lem-robbins-siegmund-almost-supermartingale
  - lem-strong-convexity-implies-strong-monotonicity-of-gradient
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-prox-indicator-is-euclidean-projection
  - thm-chain-rule-for-total-derivatives
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.2"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.2, Robbins–Monro diminishing stepsizes and the strongly convex branch"
    - title: "Dimitri P. Bertsekas, Convex Optimization Algorithms, Appendix A, Proposition A.4.5"
      url: "https://web.mit.edu/dimitrib/www/Appendix_A_NEW_ALG.pdf"
      locator: "Appendix A, Proposition A.4.5; local proof below derives the needed convergence from the library Doob supplier"
---

## Statement

Assume AC. Let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex. Let $f:\mathbb R^d\to\mathbb R$ be differentiable, and suppose $F=f+\iota_C$ is $\mu$-strongly convex for $\mu>0$ in the sense of [[def-strong-convex-composite-objective]], where $\iota_C$ is zero on $C$ and $+\infty$ off $C$ ([[def-indicator-function-of-closed-convex-set]]). Assume a minimizer $x^\ast\in C$ exists. Start projected SGD as in [[def-projected-stochastic-gradient-update]] from square-integrable $x_0\in C$, with
$$\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k),\qquad \mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le M^2$$
almost surely for every $k$, where $M<\infty$. For deterministic stepsizes satisfying $0<\alpha_k\le1/(2\mu)$, $\sum_k\alpha_k=\infty$, and $\sum_k\alpha_k^2<\infty$, the iterates converge almost surely to $x^\ast$. The projection supplies stability, so no separate coercivity hypothesis is needed for this projected theorem.

## Facts & Assumptions

**Given:** AC, $C,f,\mu,x^\ast$, the adapted projected update, the conditional oracle bounds, and the stepsize assumptions in the Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed for conditional-expectation existence and the Doob convergence interface.

[F1] [[def-projected-stochastic-gradient-update]]: $x_{k+1}=P_C(x_k-\alpha_kG_k)$ and $P_C$ is the unique nearest-point map.

[F2] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: the proximal map is nonexpansive.

[F3] [[lem-prox-indicator-is-euclidean-projection]]: for nonempty closed convex $C$, $\operatorname{prox}_{t\iota_C}$ is the singleton map $P_C$ for every $t>0$.

[F4] [[lem-strong-convexity-implies-strong-monotonicity-of-gradient]]: $\langle\nabla f(x)-\nabla f(y),x-y\rangle\ge\mu\|x-y\|_2^2$ for $x,y\in C$.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of $t\mapsto f(x+td)$ is $\langle\nabla f(x+td),d\rangle$.

[F6] [[thm-taking-out-what-is-known]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: integrable $\mathcal F_k$-measurable factors may be taken outside conditional expectation, which is linear and expectation-preserving.

[F7] [[lem-robbins-siegmund-almost-supermartingale]]: a nonnegative adapted integrable process with summable deterministic errors and predictable decrement converges almost surely, with finite total decrement.

[F8] [[def-euclidean-inner-product]]: $\|u\|_2^2=\langle u,u\rangle$.

[F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F10] [[thm-induction-principle]]: a property true at the first index and inherited by each successor holds at every natural index.

[F11] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: vector conditional second moment equals the squared conditional mean plus nonnegative vector conditional variance.

[F12] [[def-strong-convex-composite-objective]]: strong convexity means $F((1-t)x+ty)\le(1-t)F(x)+tF(y)-(\mu/2)t(1-t)\|x-y\|_2^2$ for $0<t<1$ on $\operatorname{dom}F=C$.

[F13] [[def-indicator-function-of-closed-convex-set]]: $\iota_C$ is $0$ on $C$ and $+\infty$ off $C$, so $F=f+\iota_C$ has effective domain $C$ and agrees with $f$ there.

## Proof

1.1 Since $P_C$ is the proximal map of $\iota_C$ by [F3], [F2] makes it nonexpansive and therefore continuous; [F3] also gives $P_C(x^\ast)=x^\ast$ and $x_{k+1}\in C$. The point $x_k-\alpha_kG_k$ is $\mathcal F_{k+1}$-measurable, so continuity makes $x_{k+1}$ $\mathcal F_{k+1}$-measurable. Thus the distance process is adapted. Hence $V_{k+1}=\|x_{k+1}-x^\ast\|_2^2\le\|x_k-\alpha_kG_k-x^\ast\|_2^2\le(1+\mu\alpha_k)V_k+(\alpha_k/\mu+\alpha_k^2)\|G_k\|_2^2,$ where the last inequality follows by expanding the square, applying [F8], [F9], and using $2uv\le\mu u^2+\mu^{-1}v^2$. By [F6], $\mathbb E\|G_k\|_2^2\le M^2$, so induction from square-integrable $x_0$ shows each $V_k$ is integrable. By [F11] and the conditional moment bound, $\|\nabla f(x_k)\|_2^2=\|\mathbb E[G_k\mid\mathcal F_k]\|_2^2\le M^2$ almost surely. Cauchy–Schwarz therefore makes the cross products in the conditional expansion integrable. [A1, F1, F2, F3, F6, F8, F9, F10, F11, given, algebra, induction]

1.2 For any $y\in C$ and $0<t\le1$, convexity of $C$ gives $x^\ast+t(y-x^\ast)\in C$. Minimality of $x^\ast$ implies $f(x^\ast+t(y-x^\ast))\ge f(x^\ast)$. Divide by $t$ and let $t\downarrow0$; [F5] makes the quotient tend to $\langle\nabla f(x^\ast),y-x^\ast\rangle$, which must be nonnegative because a limit of nonnegative reals is nonnegative. [F5, given, choose]

2.1 By [F13], $\operatorname{dom}F=C$ and $F=f$ on $C$, so the strong-Jensen condition [F12] is exactly the hypothesis of [F4]. Apply [F4] to $x_k,x^\ast$ and use step 1.2 with $y=x_k$ to obtain $\langle\nabla f(x_k),x_k-x^\ast\rangle\ge\mu V_k$. Expanding the projection estimate in step 1.1 and conditioning with [F6] now gives $\mathbb E[V_{k+1}\mid\mathcal F_k]\le V_k-2\mu\alpha_kV_k+M^2\alpha_k^2.$ [A1, F4, F6, F8, F12, F13, step 1.1, step 1.2, given, algebra]

3.1 Apply [F7] with $a_k=0$, $b_k=2\mu\alpha_kV_k$, and $c_k=M^2\alpha_k^2$. Step 1.1 gives integrability, and the stepsize conditions give $\sum c_k<\infty$. Thus $V_k$ converges almost surely and $\sum_k\alpha_kV_k<\infty$ almost surely. If its limit were positive, the divergent sum $\sum_k\alpha_k$ would force $\sum_k\alpha_kV_k=\infty$, a contradiction. Therefore $V_k\to0$ and $x_k\to x^\ast$ almost surely. [A1, F7, step 1.1, step 2.1, given, algebra] ∎

