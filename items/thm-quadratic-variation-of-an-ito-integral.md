---
id: thm-quadratic-variation-of-an-ito-integral
kind: theorem
title: "Quadratic variation of an Ito integral"
status: draft
origin: pipeline
deps: [thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-doob-maximal-bound-for-the-ito-integral, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-lp-maximal-inequality, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, def-quadratic-variation-along-a-partition-sequence, def-partition-and-refinement, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, cor-chebyshev-inequality-for-random-variables, thm-heine-cantor-r, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-tower-property-of-conditional-expectation, cor-cauchy-schwarz-for-random-variables, def-continuous-time-adapted-process-and-martingale, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Section 5.8 and Lemma 5.77"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Theorem 3.2.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Fix $T>0$, let $H$ be a
locally square-integrable predictable process
[[def-locally-square-integrable-predictable-brownian-integrand]] with localized
integral $M=H\cdot B$ [[thm-localized-ito-integral]], and let $(\pi_n)$ be a
deterministic partition sequence of $[0,T]$ with mesh tending to $0$
[[def-quadratic-variation-along-a-partition-sequence]]. Write $Q_n(t)$ for the
step-convention partial sum $\sum_{j:\,s^{(n)}_{j+1}\le t}(M_{s^{(n)}_{j+1}}-M_{s^{(n)}_j})^2$.
Then
$$\sup_{0\le t\le T}\Bigl|Q_n(t)-\int_0^tH_s^2\,ds\Bigr|\longrightarrow0\qquad\text{in probability},$$
and the partial-increment convention of
[[def-quadratic-variation-along-a-partition-sequence]] has the same limit.
Thus along every deterministic vanishing-mesh partition sequence the quadratic
variation of the path of $M$ is the random function
$t\mapsto\int_0^tH_s^2ds$, uniformly in probability.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a locally square-integrable predictable $H$ with energy $A_t=\int_0^tH^2ds$, its canonical times $\tau_m$ and localized integral $M$, a horizon $T>0$, and a deterministic partition sequence $\pi_n$ of $[0,T]$ with mesh $\delta_n\to0$.

[F1] For every $0\le u<v$ the increment of the integral is the integral of the restriction, $M_v-M_u=\int_0^T1_{(u,v]}H\,dB$; the restriction $1_{(u,v]}H$ is predictable and, when $H$ has finite energy, $E(M_v-M_u)^2=E\int_u^vH^2ds$. [[def-ito-integral-for-square-integrable-predictable-processes]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-localized-ito-integral]]

[F2] For a deterministic partition $\pi$ of $[0,T]$ and $Y_k:=(B_{s_{k+1}}-B_{s_k})^2-(s_{k+1}-s_k)$ the partial sums $N_j:=\sum_{k\le j}Y_k$ form a discrete martingale with $EY_k=0$, $EY_k^2=2(s_{k+1}-s_k)^2$, and $EN_J^2=2\sum_k(s_{k+1}-s_k)^2\le2\delta T$ when $\operatorname{mesh}(\pi)\le\delta$; Doob's inequality gives $E\max_jN_j^2\le8\delta T$, and $\bigl|[B]^{\pi,\mathrm{step}}_t-t\bigr|\le\max_j|N_j|+\delta$; Chebyshev's inequality converts an $L^2$ bound on a supremum into a probability bound. [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[def-brownian-motion]] [[thm-doob-lp-maximal-inequality]] [[thm-tower-property-of-conditional-expectation]] [[cor-chebyshev-inequality-for-random-variables]]

[F3] A continuous real function on the compact interval $[0,T]$ is uniformly continuous, so for a fixed continuous path and mesh tending to $0$ the maximal oscillation over the partition intervals tends to $0$. [[thm-heine-cantor-r]] [[def-partition-and-refinement]]

[F4] For a finite-energy predictable $G$ and a stopping time $\rho$, $(G\cdot B)^{\rho}$ is the finite-energy integral of $G1_{(0,\rho]}$; for the canonical times of $H$, $M^{\tau_m}$ is the finite-energy integral of $H1_{(0,\tau_m]}$ and $A_{t\wedge\tau_m}=\int_0^tH^21_{(0,\tau_m]}ds$. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[def-locally-square-integrable-predictable-brownian-integrand]]

[F5] For finite-energy $G$ the maximal bound $E\sup_{t\le T}|(G\cdot B)_t|^2\le4E\int_0^TG^2ds$ holds, and for elementary $G$ the defining sums reduce to the explicit finite combinations of Brownian increments. [[thm-doob-maximal-bound-for-the-ito-integral]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]]

[F6] The dyadic special case of the statement is the almost-sure uniform theorem [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]], which is stronger than the in-probability Brownian estimate proved below; the estimate is proved for arbitrary deterministic partition sequences because that is what the statement requires. [[def-quadratic-variation-along-a-partition-sequence]]

[F7] AC is declared for the ambient interfaces; the partition sequence and the localization times are given or canonical. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F8] For real numbers and for random variables one has $\bigl|\sum_ja_jb_j\bigr|\le\bigl(\sum_ja_j^2\bigr)^{1/2}\bigl(\sum_jb_j^2\bigr)^{1/2}$ and $E[XY]\le\|X\|_2\|Y\|_2$; these Cauchy--Schwarz inequalities control the polarization of the squared-increment sums and the expected products of the block sums. [[cor-cauchy-schwarz-for-random-variables]]

## Proof

**Proof technique:** direct.

1.1 Brownian estimate: for a deterministic partition $\pi$ of $[0,T]$ with mesh $\delta$ and $N_j$ as in [F2], independence of the Brownian increments gives $EN_J^2=\sum_k2(s_{k+1}-s_k)^2\le2\delta T$, and Doob's $L^2$ inequality gives $E\max_jN_j^2\le8\delta T$; since $[B]^{\pi,\mathrm{step}}_t-t=N_{k(t)}+s_{k(t)}-t$ with $|s_{k(t)}-t|\le\delta$, one has $E\sup_{t\le T}\bigl|[B]^{\pi,\mathrm{step}}_t-t\bigr|^2\le16\delta T+2\delta^2$, which tends to $0$; Chebyshev's inequality turns this into uniform convergence in probability. [F2]

1.2 For elementary $H$ with partition $0=t_0<\cdots<t_m=T$ and a sub-interval $(u,v]$, the increment $M_v-M_u=\int_0^T1_{(u,v]}H\,dB$ is the elementary sum of the elementary integrand $1_{(u,v]}H$, whose coefficients are $\xi_k$ on $(u\vee t_k,v\wedge t_{k+1}]$, measurable at the left endpoints $u\vee t_k\ge t_k$; consequently $M_v-M_u=\sum_{k}\xi_k(B_{v\wedge t_{k+1}}-B_{u\vee t_k})$ over the at most two blocks meeting $(u,v]$ when $v-u<\min_k(t_{k+1}-t_k)$, and equals $\xi_k(B_v-B_u)$ when $(u,v]$ is contained in a single block $(t_k,t_{k+1}]$. [F1, F5]

2.1 Elementary case: fix an elementary $H$ with partition $(t_k)$ and let $R_k$ denote the induced partition of $[t_k,t_{k+1}]$ obtained from $\pi_n$; refining $M$'s increments with step 1.2, the intervals of $\pi_n$ contained in a single block contribute $\xi_k^2(\Delta_jB)^2$, so $Q_n(t)=\sum_{k}\xi_k^2S^{(n)}_k(t)+\Theta_n(t)$, where $S^{(n)}_k(t)$ is the step-convention Brownian sum over $R_k$ up to $t$ and $\Theta_n(t)$ collects the contributions of the at most $m$ intervals meeting a block boundary, each bounded by $(2\max_l|\xi_l|)^2$ times the squared oscillation of the Brownian path over that interval. [F3, F5, step 1.2]

3.1 By step 1.1 applied to each induced partition sequence $R_k$ (deterministic, mesh $\le\delta_n$) the block sums satisfy $\sup_{t\in[t_k,t_{k+1}]}|S^{(n)}_k(t)-(t\wedge t_{k+1}-t_k)|\to0$ in probability, and comparison with $A_t=\sum_k\xi_k^2(t\wedge t_{k+1}-t\wedge t_k)$ gives $\sup_t|Q_n(t)-A_t|\le\sum_k\|\xi_k\|_\infty^2\sup_{t\in[t_k,t_{k+1}]}|S^{(n)}_k(t)-(t\wedge t_{k+1}-t_k)|+\Theta_n+\delta_n\max_k\|\xi_k\|_\infty^2$, where $\Theta_n\le m(2\max_k\|\xi_k\|_\infty)^2\bigl(\max_{\text{boundary intervals}}\operatorname{osc}B\bigr)^2\to0$ almost surely by uniform continuity of the path [F3]; hence the elementary case of the statement holds. [F3, step 1.1, step 2.1]

4.1 Finite-energy case: let $H^l\to H$ in $L^2(\mathrm dt\otimes P)$ with $H^l$ elementary and set $N^l:=H-H^l$; by Cauchy--Schwarz in each partial sum, $\sup_t|Q_n(H)(t)-Q_n(H^l)(t)|\le Q_n(N^l)(T)+2Q_n(N^l)(T)^{1/2}Q_n(H^l)(T)^{1/2}$, and [F1] gives $EQ_n(N^l)(T)=E\int_0^T(N^l)^2ds\to0$ and $EQ_n(H^l)(T)=E\int_0^T(H^l)^2ds\le C$ uniformly in $n$, so $E\sup_t|Q_n(H)-Q_n(H^l)|\to0$ as $l\to\infty$ uniformly in $n$; combined with step 3.1 for $H^l$ and $\sup_t|A_{H^l}(t)-A_H(t)|\le\|H^l-H\|_2\|H^l+H\|_2\to0$, the finite-energy case follows by a two-parameter argument: first send $n\to\infty$ at fixed $l$, then $l\to\infty$. [F1, F8, step 3.1]

5.1 Localized case: on the event $\{\tau_m\ge T\}$ the processes $M$ and $M^{\tau_m}$ agree on $[0,T]$ and $A^{(m)}_t=A_t$ for $t\le T$ by [F4], so the squared-increment sums of $M$ coincide with those of the finite-energy integral $M^{\tau_m}$ there; consequently, for every $\varepsilon>0$, $P(\sup_t|Q_n(M)-A|>\varepsilon)\le P(\tau_m<T)+P(\sup_t|Q_n(M^{\tau_m})-A^{(m)}|>\varepsilon)$, and the second term tends to $0$ by step 4.1 while the first tends to $0$ as $m\to\infty$ because $\tau_m\uparrow\infty$ almost surely. [F4, step 4.1]

6.1 Steps 3.1 and 5.1 establish uniform convergence in probability for the step convention; the partial-increment convention differs from the step value by at most the squared maximal oscillation of the continuous path of $M$ over the partition intervals, which tends to $0$ by [F3] and continuity of $M$, so both conventions have the same limit. The dyadic case is the special case covered a fortiori by [F6]. AC enters only through the declared ambient interfaces [F7]. [F3, F6, F7, step 3.1, step 5.1] ∎

## Source notes

Van der Vaart, Section 5.8 and Lemma 5.77, proves the covariation of stochastic integrals by reduction to elementary integrands and localization; Lawler, Theorem 3.2.6, proves the quadratic variation of an Ito integral along vanishing partitions. The arbitrary-partition Brownian estimate of step 1.1 is proved here because the sources state the Brownian limit for their own partition families; it is the standard centered-increment martingale estimate with the fourth Gaussian moment.
