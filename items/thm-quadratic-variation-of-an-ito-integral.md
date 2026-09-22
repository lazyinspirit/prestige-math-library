---
id: thm-quadratic-variation-of-an-ito-integral
kind: theorem
title: "Quadratic variation of an Ito integral"
status: published
origin: pipeline
deps: [thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-doob-maximal-bound-for-the-ito-integral, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-lp-maximal-inequality, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, def-quadratic-variation-along-a-partition-sequence, def-partition-and-refinement, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, cor-chebyshev-inequality-for-random-variables, thm-heine-cantor-r, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-tower-property-of-conditional-expectation, cor-cauchy-schwarz-for-random-variables, def-continuous-time-adapted-process-and-martingale, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, thm-monotone-convergence-for-the-integral]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Fix $T>0$, let $H$ be a
locally square-integrable predictable process
[[def-locally-square-integrable-predictable-brownian-integrand]] with localized
integral $M=H\cdot B$ in the progressive version of
[[thm-localized-ito-integral]], under the usual conditions and almost-sure local-energy convention
of the cited local-integrability definition, and let $(\pi_n)$ be a
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
All full-path suprema use measurable versions: replace each process by zero
outside a common measurable event of continuity before taking such a
supremum. In all energy expressions, use the continuous representative equal to
$\int_0^tH_s^2ds$ on $G=\bigcap_{r\ge1}\{\int_0^rH_s^2ds<\infty\}$
and zero on $G^c$. The local-integrability definition proves that $G^c$ is
an $\mathcal F_0$-measurable null event. This normalization preserves all
almost-sure identities and makes the energy finite and continuous everywhere.
The step sums minus this energy are right-continuous, so their supremum
equals that over a countable dense set including $T$.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a locally square-integrable predictable $H$ with energy $A_t=\int_0^tH^2ds$, its canonical times $\tau_m$, $m\ge1$ and localized integral $M$, a horizon $T>0$, and a deterministic partition sequence $\pi_n$ of $[0,T]$ with mesh $\delta_n\to0$.

[F1] For every $0\le u<v$ the increment of the localized integral is the localized Ito integral of the predictable restriction, $M_v-M_u=(1_{(u,v]}H)\mathbin{\cdot}B$ evaluated after time $v$. If $H$ has finite energy on the horizon under consideration, this localized integral is the finite-energy integral $\int_0^T1_{(u,v]}H\,dB$, and the isometry gives $E(M_v-M_u)^2=E\int_u^vH^2ds$. [[def-ito-integral-for-square-integrable-predictable-processes]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-localized-ito-integral]]

[F2] On a deterministic partition $0=s_0<\cdots<s_J=T$, put $Y_k=(B_{s_{k+1}}-B_{s_k})^2-(s_{k+1}-s_k)$ for $0\le k<J$ and $N_j=\sum_{0\le k<j}Y_k$ for $0\le j\le J$, so $N_0=0$. The independent Gaussian increments have second and fourth moments $h$ and $3h^2$, so $EY_k=0$ and $EY_k^2=2(s_{k+1}-s_k)^2$. Relative to the finite-grid filtration $N_j$ is a martingale by (H); cross terms have zero expectation by conditioning. Extend it constantly after $J$ to apply discrete Doob with $p=2$. For nonnegative $Z$, the elementary inequality $\varepsilon 1_{\{Z>\varepsilon\}}\le Z$ gives $P(Z>\varepsilon)\le EZ/\varepsilon$; applied to $Z^2$ this also converts an $L^2$ bound to a probability bound. [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[def-brownian-motion]] [[thm-doob-lp-maximal-inequality]] [[thm-tower-property-of-conditional-expectation]]

[F3] A continuous real function on the compact interval $[0,T]$ is uniformly continuous, so for a fixed continuous path and mesh tending to $0$ the maximal oscillation over the partition intervals tends to $0$. [[thm-heine-cantor-r]] [[def-partition-and-refinement]]

[F4] For a finite-energy predictable $G$ and a stopping time $\rho$, $(G\cdot B)^{\rho}$ is the finite-energy integral of $G1_{(0,\rho]}$; for the canonical times of $H$, $M^{\tau_m}$ is the finite-energy integral of $H1_{(0,\tau_m]}$ and $A_{t\wedge\tau_m}=\int_0^tH^21_{(0,\tau_m]}ds$. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[def-locally-square-integrable-predictable-brownian-integrand]]

[F5] For finite-energy $G$ the maximal bound $E\sup_{t\le T}|(G\cdot B)_t|^2\le4E\int_0^TG^2ds$ holds, and for elementary $G$ the defining sums reduce to the explicit finite combinations of Brownian increments. [[thm-doob-maximal-bound-for-the-ito-integral]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]]

[F6] The two quadratic-sum conventions differ by the last partial increment squared. Probability continuity for increasing events follows by monotone convergence of indicators; decreasing continuity follows by complements. In particular almost-sure convergence of nonnegative random errors implies convergence in probability, by applying decreasing continuity to the tail-supremum events. [[def-quadratic-variation-along-a-partition-sequence]] [[thm-monotone-convergence-for-the-integral]]

[F7] AC supplies the declared ambient interfaces and the countably chosen elementary approximations and versions; partition and localization times are given or canonical. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F8] For real numbers and for random variables one has $\bigl|\sum_ja_jb_j\bigr|\le\bigl(\sum_ja_j^2\bigr)^{1/2}\bigl(\sum_jb_j^2\bigr)^{1/2}$ and $E[XY]\le\|X\|_2\|Y\|_2$; these Cauchy--Schwarz inequalities control the polarization of the squared-increment sums and the expected products of the block sums. [[cor-cauchy-schwarz-for-random-variables]]

[F9] Every predictable integrand of finite expected energy on $[0,T]$ admits bounded elementary predictable approximations in $L^2(\mathrm dt\otimes P)$. [[thm-density-of-elementary-predictable-processes-in-predictable-l2]]

## Proof

**Proof technique:** direct.

1.1 Brownian estimate: for a deterministic partition $\pi$ of $[0,T]$ with mesh $\delta$ and $N_j$ as in [F2], independence of the Brownian increments gives $EN_J^2=\sum_k2(s_{k+1}-s_k)^2\le2\delta T$, and Doob's $L^2$ inequality gives $E\max_jN_j^2\le8\delta T$; since $[B]^{\pi,\mathrm{step}}_t-t=N_{k(t)}+s_{k(t)}-t$ where $k(t)=\max\{j:0\le j\le J,\ s_j\le t\}$ and $|s_{k(t)}-t|\le\delta$, one has $E\sup_{t\le T}\bigl|[B]^{\pi,\mathrm{step}}_t-t\bigr|^2\le16\delta T+2\delta^2$, which tends to $0$; [F2]'s elementary probability bound turns this into uniform convergence in probability. [F2]

1.2 For elementary $H$ with partition $0=t_0<\cdots<t_m=T$ and a sub-interval $(u,v]$, the increment $M_v-M_u=\int_0^T1_{(u,v]}H\,dB$ is the elementary sum of the elementary integrand $1_{(u,v]}H$, whose coefficients are $\xi_k$ on $(u\vee t_k,v\wedge t_{k+1}]$, measurable at the left endpoints $u\vee t_k\ge t_k$; consequently $M_v-M_u=\sum_{k}\xi_k(B_{v\wedge t_{k+1}}-B_{u\vee t_k})$ over the at most two blocks meeting $(u,v]$ when $v-u<\min_k(t_{k+1}-t_k)$, and equals $\xi_k(B_v-B_u)$ when $(u,v]$ is contained in a single block $(t_k,t_{k+1}]$. [F1, F5]

2.1 Elementary refinement: fix a bounded elementary $H$ with blocks $(t_k,t_{k+1}]$, $0\le k<m$, and a deterministic bound $K$ for its coefficients on a common probability-one event. For sufficiently large $n$, $\delta_n<\min_k(t_{k+1}-t_k)$, so each interval of $\pi_n$ crosses at most one elementary boundary. Refine by all these boundaries, and write $R_k$ for the induced partition of $[t_k,t_{k+1}]$. Let $S_k^{(n)}(t)$ be the Brownian step sum on $R_k$, extended by zero before $t_k$ and its terminal value after $t_{k+1}$. The refined integral sum is $\sum_k\xi_k^2S_k^{(n)}(t)$. Away from crossing intervals it equals $Q_n(t)$. On a crossing interval, the original increment has absolute value at most $2K\omega_B(\delta_n)$, while each of the at most two refined increments has absolute value at most $K\omega_B(\delta_n)$, where $\omega_B(\delta)=\sup_{|u-v|\le\delta,\,u,v\in[0,T]}|B_u-B_v|$ on the continuous representative. This also bounds the discrepancy when the refined sum has included the boundary but the original interval is not yet complete. Adding the original squared contribution and the two subtracted refined squared contributions bounds the absolute discrepancy uniformly in $t$ by $6mK^2\omega_B(\delta_n)^2$, which tends to zero almost surely by [F3]. [F3, F5, step 1.2]

3.1 Apply step 1.1 on each deterministic interval $[t_k,t_{k+1}]$ to its translated Brownian increments and the induced mesh $R_k$, whose mesh is at most $\delta_n$. Thus $\sup_{t\in[t_k,t_{k+1}]}|S_k^{(n)}(t)-(t-t_k)|\to0$ in probability. Since $A_t=\sum_k\xi_k^2(t\wedge t_{k+1}-t\wedge t_k)$, the refined-sum error is bounded by $K^2$ times the finite sum of these block errors. A finite union bound and step 2.1, with [F6] for its almost-sure vanishing error, give $\sup_t|Q_n(t)-A_t|\to0$ in probability for each bounded elementary $H$. No independence of $\xi_k$ from these error suprema is needed, because the deterministic bound $K$ is used. [F3, F6, step 1.1, step 2.1]

4.1 Finite-energy case: use [F9] and [F7] to choose $H^l\to H$ in $L^2(\mathrm dt\otimes P)$ with $H^l$ bounded elementary and set $N^l:=H-H^l$; by Cauchy--Schwarz in each partial sum, $\sup_t|Q_n(H)(t)-Q_n(H^l)(t)|\le Q_n(N^l)(T)+2Q_n(N^l)(T)^{1/2}Q_n(H^l)(T)^{1/2}$, and [F1] gives $EQ_n(N^l)(T)=E\int_0^T(N^l)^2ds\to0$ and $EQ_n(H^l)(T)=E\int_0^T(H^l)^2ds\le C$ uniformly in $n$, so $E\sup_t|Q_n(H)-Q_n(H^l)|\to0$ as $l\to\infty$ uniformly in $n$; combined with step 3.1 for $H^l$ and $E\sup_t|A_{H^l}(t)-A_H(t)|\le\|H^l-H\|_2\|H^l+H\|_2\to0$, the finite-energy case follows by a two-parameter argument: for error threshold $\varepsilon$, split the total error into the quadratic-sum approximation, the elementary convergence error and the energy approximation, each at threshold $\varepsilon/3$. Their probabilities are bounded by $3/\varepsilon$ times the two expected approximation errors, plus the elementary error probability. The latter vanishes as $n\to\infty$ at fixed $l$, and the former vanish as $l\to\infty$, uniformly in $n$. [F1, F2, F7, F8, F9, step 3.1]

5.1 Localized case: on the event $\{\tau_m\ge T\}$ the processes $M$ and $M^{\tau_m}$ agree on $[0,T]$ and $A^{(m)}_t=A_t$ for $t\le T$ by [F4], so the squared-increment sums of $M$ coincide with those of the finite-energy integral $M^{\tau_m}$ there; consequently, for every $\varepsilon>0$, $P(\sup_t|Q_n(M)-A|>\varepsilon)\le P(\tau_m<T)+P(\sup_t|Q_n(M^{\tau_m})-A^{(m)}|>\varepsilon)$, and the second term tends to $0$ by step 4.1 while the first tends to $0$ as $m\to\infty$ because $\tau_m\uparrow\infty$ almost surely. [F4, step 4.1]

6.1 Steps 3.1 and 5.1 establish uniform convergence in probability for the step convention; the partial-increment convention differs from the step value by at most the squared maximal oscillation of the continuous path of $M$ over the partition intervals, which tends to $0$ by [F3] and continuity of $M$, so both conventions have the same limit. The dyadic partitions are included; no almost-sure dyadic conclusion is asserted for general $H$. AC covers the declared interfaces and the countable approximating choices in [F7]. [F3, F6, F7, step 3.1, step 5.1] ∎

## Source notes

Van der Vaart, Lemma 5.77, uses elementary approximation and localization for covariation with a locally bounded predictable integrand. Lawler, Theorem 3.2.6, treats continuous or piecewise-continuous integrands and regular meshes. Neither is invoked as the full arbitrary-predictable, arbitrary-partition claim: the Brownian estimate, refinement error, finite-energy approximation and localization needed here are proved explicitly.
