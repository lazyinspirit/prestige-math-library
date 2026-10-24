---
id: thm-adaptive-em-predictable-grid-strong-error
kind: theorem
title: Strong error bound for Euler–Maruyama on a predictable grid
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-adaptive-euler-maruyama-on-predictable-grid
  - alg-euler-maruyama
  - def-predictable-stopping-time-grid
  - def-d-dimensional-brownian-motion
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - lem-adaptive-em-predictable-grid-second-moment
  - lem-stopping-time-ito-step-interval-sum
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - thm-gronwall-integral-inequality
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2, Theorem 2.2 and proof"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.2, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Assume AC and the coefficient hypotheses of [[alg-euler-maruyama]] on
$[0,T]$: finite state and noise dimensions, a square-integrable initial value
independent of future Brownian increments, global Lipschitz dependence on the
state, the stated linear-growth bound, and the stated half-Hölder time
modulus. Work on the usual filtered Brownian space required by the It\^o
integral. Let $X$ be the strong solution of
[[def-ito-sde-and-strong-solution]], whose existence and path-supremum second
moment are supplied by
[[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]. Let a finite
predictable grid as in [[def-predictable-stopping-time-grid]] have
$N<\infty$ almost surely and step lengths bounded by a deterministic
$0<h\le T$ (one may take $h=\min\{h_{\max},T\}$). Form the complete
continuous Euler interpolation by applying the predictable-grid updates of
[[alg-adaptive-euler-maruyama-on-predictable-grid]] on every interval. A
finite-budget execution returns it as complete when $N\le B$. Then there is a
finite constant $C$, depending only on $T$, the coefficient bounds, $m$, and
$\mathbb E|X_0|^2$, such that
$$\sup_{0\le t\le T}\mathbb E|X_t-Y_t|^2\le Ch.$$
Thus the one-time root-mean-square error is $O(h^{1/2})$, uniformly over
predictable controllers and finite meshes. The estimate is not an expectation
of the path-supremum error. It does not cover a grid whose step choice or
acceptance decision uses the endpoint of the interval being selected. No
finite expected step-count or asymptotic cost claim follows without an
additional step-count hypothesis.

## Facts & Assumptions

**Given:** AC; the coefficient, Brownian, initial-value and strong-solution hypotheses above; a finite predictable grid with $N<\infty$ almost surely and step lengths bounded by a deterministic $0<h\le T$; and its complete Euler interpolation $Y$.

[F1] The coefficients are globally Lipschitz in state, have linear growth, and are half-Hölder in time with the stated state-weighted bound; the fixed-grid Euler update uses left-endpoint coefficients and the Brownian increment. [[alg-euler-maruyama]]

[F2] On a predictable interval of length $h_n$, the adaptive update is $Y_{n+1}=Y_n+b(\tau_n,Y_n)h_n+\sigma(\tau_n,Y_n)(W_{\tau_{n+1}}-W_{\tau_n})$, with the corresponding continuous left-endpoint interpolation. [[alg-adaptive-euler-maruyama-on-predictable-grid]] [[def-predictable-stopping-time-grid]]

[F3] The complete interpolation has $\mathbb E\sup_{t\le T}|Y_t|^2\le C_0$ with $C_0$ independent of the controller and mesh. [[lem-adaptive-em-predictable-grid-second-moment]]

[F4] For a square-integrable $\mathcal F_\tau$-measurable coefficient on a stopping interval $(\tau,\sigma]$, its It\^o integral is the coefficient times $W_{t\wedge\sigma}-W_{t\wedge\tau}$. [[lem-stopping-time-ito-step-interval-sum]]

[F5] A strong solution exists and $\mathbb E\sup_{t\le T}|X_t|^2<\infty$ under the global Lipschitz and linear-growth hypotheses. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F6] For a scalar predictable $H$ and scalar Brownian coordinate $W^j$, $\mathbb E(\int_0^tH_s\,dW_s^j)^2=\mathbb E\int_0^tH_s^2ds$. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F7] If $u(t)\le A+C\int_0^t u(s)ds$ for continuous nonnegative $u$, then $u(t)\le Ae^{Ct}$. [[thm-gronwall-integral-inequality]]

[F8] For each scalar Brownian coordinate and predictable square-integrable $H$, $\mathbb E\sup_{t\le T}|\int_0^tH_s\,dW_s^j|^2\le4\mathbb E\int_0^TH_s^2ds$. [[thm-doob-maximal-bound-for-the-ito-integral]] [[def-d-dimensional-brownian-motion]]

[F9] Increasing partial sums of nonnegative measurable terms converge in expectation to the expectation of their sum. [[thm-monotone-convergence-for-the-integral]]

[F10] Almost-sure convergence under an integrable dominating random variable passes to expectations. [[thm-dominated-convergence]]

[A1] AC is inherited through the Brownian-motion, strong-solution and stochastic-integral interfaces [F1], [F4]–[F6], and [F8]; no selection is made in the error estimate. [[def-axiom-of-choice]]

## Proof

1.1 Put $\eta(s)=\tau_n$ and $\bar Y_s=Y_n$ on each active interval $\tau_n<s\le\tau_{n+1}$, and put $\bar b_s=b(\tau_n,Y_n)$ and $\bar\sigma_s=\sigma(\tau_n,Y_n)$ there. Values at the countable grid endpoints do not affect time or It\^o integrals. Each coefficient step is predictable by [F4]; the countable sum is predictable. Growth [F1], $\sum_{n<N}h_n=T$, and [F3] give $\mathbb E\int_0^T(|\bar b_s|^2+\|\bar\sigma_s\|_F^2)ds<\infty$. Truncating after the first $k$ intervals gives finite-step integral identities by [F4]. Their integrands converge in $L^2(ds\,dP)$ to the full coefficients: the tail vanishes almost surely because $N<\infty$, and the increasing partial energy sums converge to the integrable total energy by [F9], so the expected tail energy tends to zero. Isometry [F6] and Cauchy–Schwarz for the drift pass these identities to the limit. Combining with the strong-solution identity gives $e_t:=X_t-Y_t=\int_0^t(b(s,X_s)-\bar b_s)ds+\sum_{j=1}^m\int_0^t(\sigma_{\cdot j}(s,X_s)-\bar\sigma_{\cdot j,s})dW_s^j$, where $\sigma_{\cdot j}$ denotes column $j$. [F1, F3, F4, F5, F6, F9, given]

1.2 On interval $n$, put $b_n=b(\tau_n,Y_n)$, $\sigma_n=\sigma(\tau_n,Y_n)$, and $h_n=\tau_{n+1}-\tau_n$. The interpolation increment is $Y_s-\bar Y_s=b_n(s-\tau_n)+\sigma_n(W_s-W_{\tau_n})$. Its drift contribution is $\int_{\tau_n}^{\tau_{n+1}}|b_n|^2(s-\tau_n)^2ds=\tfrac13|b_n|^2h_n^3\le\tfrac13h^2|b_n|^2h_n$. For the diffusion put $M^n_s=\sigma_n(W_{s\wedge\tau_{n+1}}-W_{s\wedge\tau_n})$. Each entry is the stopped It\^o integral of $\sigma_n^{ij}1_{(\tau_n,\tau_{n+1}]}$; [F4], [F6], and [F8] imply $\mathbb E\sup_{s\le T}|M^n_s|^2\le4m\mathbb E[\|\sigma_n\|_F^2h_n]$. Therefore $\mathbb E\int_{\tau_n}^{\tau_{n+1}}|\sigma_n(W_s-W_{\tau_n})|^2ds\le4mh\mathbb E[\|\sigma_n\|_F^2h_n]$. Sum over $n$ using [F9], $\sum_{n<N}h_n=T$, the growth bound [F1], and moment bound [F3]: $\int_0^T\mathbb E|Y_s-\bar Y_s|^2ds\le C_1h$, where $C_1$ is independent of the controller and mesh; here $h^2\le Th$. [F1, F3, F4, F6, F8, F9, given, algebra]

1.3 The state-Lipschitz and time-modulus bounds in [F1], together with $|X_s-\bar Y_s|\le|e_s|+|Y_s-\bar Y_s|$, imply for a constant $C_2$ fixed by the coefficient bounds, $|b(s,X_s)-b(\eta(s),\bar Y_s)|^2+\|\sigma(s,X_s)-\sigma(\eta(s),\bar Y_s)\|_F^2\le C_2(|e_s|^2+|Y_s-\bar Y_s|^2+(1+|\bar Y_s|^2)(s-\eta(s)))$. Since $s-\eta(s)\le h$ and [F3] bounds $\mathbb E\sup_{s\le T}|Y_s|^2$, the time-modulus term has integral at most $C_3h$. [F1, F3, algebra]

2.1 Put $v(t)=\mathbb E\sup_{r\le t}|e_r|^2$. The moment bounds [F3] and [F5], with [F10], make $v$ finite and continuous: pathwise running suprema are continuous and dominated by the integrable variable $2\sup_{r\le T}(|X_r|^2+|Y_r|^2)$. Apply Cauchy–Schwarz to the drift in step 1.1 and [F8] to each scalar diffusion coordinate, using $|\sum_{j=1}^m z_j|^2\le m\sum_{j=1}^m|z_j|^2$. Then $v(t)\le2T\int_0^t\mathbb E|b(s,X_s)-\bar b_s|^2ds+8m\int_0^t\mathbb E\|\sigma(s,X_s)-\bar\sigma_s\|_F^2ds$. Insert steps 1.2 and 1.3 and use $\mathbb E|e_s|^2\le v(s)$ to obtain $v(t)\le C_4\int_0^tv(s)ds+C_5h$, with constants independent of the controller and mesh. Gronwall [F7] gives $v(T)\le C_5e^{C_4T}h$, hence also $\sup_{t\le T}\mathbb E|e_t|^2\le Ch$. [F3, F5, F7, F8, F10, step 1.1, step 1.2, step 1.3, given]

3.1 The pathwise inequality $|e_{\tau_n}|^2\le\sup_{t\le T}|e_t|^2$ and step 2.1 give $\mathbb E|e_{\tau_n}|^2\le Ch$ at each random grid endpoint. The constant does not depend on $N$, the lower step lengths, or the controller. The endpoint-refinement mode of [F2] does not meet the predictability hypothesis and is not covered. This proof claims no asymptotic cost law. AC is used only through [A1]. [A1, F2, step 2.1, given] ∎
