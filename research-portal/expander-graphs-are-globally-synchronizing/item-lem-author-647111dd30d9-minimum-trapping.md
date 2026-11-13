---
title: A local minimum with a gradient inequality is stable
status: published
research_item: lem-author-647111dd30d9-minimum-trapping
dependency_level: 2
---

## Prerequisites

- [lem-author-647111dd30d9-gradient-length](item-lem-author-647111dd30d9-gradient-length)
- [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)
- [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness)
- [physics:thm-cm-compact-continuation-for-locally-lipschitz-odes](https://alphabetamath.cc/physics/item/thm-cm-compact-continuation-for-locally-lipschitz-odes)
- [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn)
- [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)
- [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem)
- [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables)
- [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient)
- [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product)
- [math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution)
- [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)
- [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)
- [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:thm-existence-and-uniqueness-of-a-maximal-ode-solution](https://alphabetamath.cc/item/thm-existence-and-uniqueness-of-a-maximal-ode-solution)
- [lem-author-647111dd30d9-gradient-energy](item-lem-author-647111dd30d9-gradient-energy)
- [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability)
- [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives)
- [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)
- [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)
- [math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable)


## Statement

Let $m\ge1$, let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, and let $z\in U$ be a local minimum. Assume on a neighborhood of $z$ that $\|\nabla f(y)\|\ge c|f(y)-f(z)|^\rho$ for $c>0$ and $0<\rho<1$. Then $z$ is a Lyapunov stable equilibrium for $x'=-\nabla f(x)$. Here stability is local: for each sufficiently small ball about $z$, all solutions from a sufficiently smaller ball exist for all forward time and stay in the larger ball; this implies the usual condition for every tolerance.

## Facts & Assumptions

[F1] The formulation uses $C^2$ in [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables), the Euclidean gradient in [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient), the norm in [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product), solutions in [math:def-first-order-ode-initial-value-problem-and-solution](https://alphabetamath.cc/item/def-first-order-ode-initial-value-problem-and-solution), and balls in [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball). Local minimality has the meaning in [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction). Real powers, including $0^\beta=0$ for $\beta>0$, have the convention in [math:def-real-power](https://alphabetamath.cc/item/def-real-power).

[F2] Continuous coordinate partial derivatives give total differentiability with Jacobian derivative by [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability). Fermat's theorem [math:thm-fermat-for-euclidean-local-extrema](https://alphabetamath.cc/item/thm-fermat-for-euclidean-local-extrema) applies at an interior differentiable local minimum. The chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives) and the one-variable mean value theorem [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem) apply along segments.

[F3] Closed bounded Euclidean sets are compact by [math:thm-heine-borel-rn](https://alphabetamath.cc/item/thm-heine-borel-rn), and continuous real functions on nonempty compact metric spaces attain finite bounds by [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric). We use Cauchy–Schwarz and the Euclidean triangle inequality from [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm).

[F4] For a continuous field locally Lipschitz in the state variable, locally uniformly in time as defined in [math:def-locally-lipschitz-in-the-state-variable](https://alphabetamath.cc/item/def-locally-lipschitz-in-the-state-variable), [math:thm-picard-lindelof-local-existence-and-uniqueness](https://alphabetamath.cc/item/thm-picard-lindelof-local-existence-and-uniqueness) supplies local existence and uniqueness. [math:thm-existence-and-uniqueness-of-a-maximal-ode-solution](https://alphabetamath.cc/item/thm-existence-and-uniqueness-of-a-maximal-ode-solution) supplies the unique maximal solution and its open time interval.

[F5] [lem-author-647111dd30d9-gradient-length](item-lem-author-647111dd30d9-gradient-length) bounds the length of a downward gradient trajectory on a closed time interval inside a neighborhood where $f\ge f(z)$ and the assumed gradient inequality holds. [lem-author-647111dd30d9-gradient-energy](item-lem-author-647111dd30d9-gradient-energy) bounds endpoint displacement by that length, with the closed-interval $C^1$ convention stated there.

[F6] Stability here uses the local autonomous ODE definition in [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability): nearby maximal solutions must exist for every forward time and remain within each test ball compactly contained in the open state domain. The autonomous clause 2 of [physics:thm-cm-compact-continuation-for-locally-lipschitz-odes](https://alphabetamath.cc/physics/item/thm-cm-compact-continuation-for-locally-lipschitz-odes) extends a solution past a finite forward endpoint when its image stays in a compact subset of that domain. Both suppliers have domain mathematics. On a complete flow the resulting tolerance condition agrees with [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F7] [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives) gives the derivative $\beta s^{\beta-1}$ for $s>0$; [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity) and the definition of positive-base powers make these powers positive. [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws) gives $(a^u)^v=a^{uv}$ for $a>0$. Only positive-base differentiation is used below; the zero-base case uses [F1].

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove local forward existence and Lyapunov stability of $z$.

1.1 Fix $\varepsilon>0$. Choose an open neighborhood $W\subseteq U$ of $z$ on which $f\ge f(z)$ and the gradient inequality both hold, and choose $0<r<\varepsilon$ with $\overline B(z,r)\subset W$. The $C^2$ hypothesis gives continuous partial derivatives, so $f$ is totally differentiable; Fermat's theorem at its interior local minimum gives $\nabla f(z)=0$. Hence $z$ is an equilibrium. [F1, F2, given]

1.2 The field $-\nabla f$ is continuous and locally Lipschitz, as follows directly. On any closed ball $K\subset U$ of positive radius, compactness and extreme values bound all $|\partial_j\partial_i f|$ by one $M\ge0$. Each $\partial_i f$ is totally differentiable by [F2]. For $u,v\in K$, the chain rule on $u+t(v-u)$ bounds the derivative of $\partial_i f(u+t(v-u))$ by $M\sum_{j<m}|v_j-u_j|\le M\sqrt m\,\|v-u\|$. The scalar mean value theorem on $[0,1]$ gives $|\partial_i f(v)-\partial_i f(u)|\le M\sqrt m\,\|v-u\|$, hence $\|\nabla f(v)-\nabla f(u)\|\le mM\|v-u\|$. These bounds are independent of time for the autonomous field on $\mathbb R\times U$, so the local and maximal ODE existence and uniqueness results apply. [F1, F2, F3, F4]

2.1 Put $\alpha=1-\rho>0$ and $\eta=(c\alpha r/4)^{1/\alpha}>0$. On positive bases, the derivative formula, positivity and the mean value theorem make $s\mapsto s^\alpha$ strictly increasing; the iterated-power law gives $\eta^\alpha=c\alpha r/4$. Continuity of $f$ at $z$ permits $0<\delta<r/4$ such that $\|y-z\|<\delta$ implies $0\le f(y)-f(z)<\eta$. Thus $[f(y)-f(z)]^\alpha/(c\alpha)<r/4$, including $f(y)=f(z)$ by the zero-base convention. [F1, F2, F7, step 1.1]

3.1 Let $\|y-z\|<\delta$ and let $x$ be the maximal solution with $x(0)=y$, with forward interval $[0,T)$, $0<T\le\infty$. If $\|x(t_1)-z\|\ge r$ for some $t_1<T$, the set $E=\{t\in[0,t_1]:\|x(t)-z\|\ge r\}$ is nonempty and closed by continuity, hence compact. The minimum of the identity function on $E$ gives $\tau>0$. Continuity forces $\|x(\tau)-z\|=r$: a larger value would give an earlier time in $E$. On $[0,\tau]$ the trajectory stays in $\overline B(z,r)\subset W$, so [F5] bounds its length and hence $\|x(\tau)-y\|$ by $[f(y)-f(z)]^\alpha/(c\alpha)<r/4$. The triangle inequality gives $\|x(\tau)-z\|<r/2$, a contradiction. Consequently $x(t)\in B(z,r)$ for $0\le t<T$; applying the same length and displacement estimates to each $[0,t]$, $0<t<T$, gives $\|x(t)-z\|<r/2$, also true at $t=0$. These restrictions are $C^1$ in the closed-interval convention, since the ODE has continuous right-hand side. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1]

4.1 If $T<\infty$, the entire forward image lies in $K_0=\overline B(z,r/2)\subset U$, which is compact by Heine–Borel. The autonomous compact-continuation theorem applies to this continuous locally Lipschitz field and extends the solution past $T$, contradicting maximality. Therefore $T=\infty$. [F3, F4, F6, step 1.2, step 3.1]

5.1 For every $\varepsilon>0$ we have obtained $\delta>0$ for which every maximal solution starting within $\delta$ of $z$ exists for all forward time and satisfies $\|x(t)-z\|<r/2<\varepsilon$. In particular this proves every test-ball condition of the local ODE stability definition in [F6], and hence Lyapunov stability. If a complete flow is available, it also proves its usual metric tolerance condition. No attraction to $z$ is asserted. [F1, F6, step 1.1, step 3.1, step 4.1] ∎
