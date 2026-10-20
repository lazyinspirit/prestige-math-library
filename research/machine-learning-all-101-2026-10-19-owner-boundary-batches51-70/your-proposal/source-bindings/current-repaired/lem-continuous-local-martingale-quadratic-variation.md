---
id: lem-continuous-local-martingale-quadratic-variation
kind: lemma
title: Quadratic variation of a continuous local martingale
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
  - def-continuous-time-adapted-process-and-martingale
  - def-continuous-time-stopping-time
  - def-quadratic-covariation-of-brownian-ito-processes
  - lem-martingale-differences-are-orthogonal-in-l2
  - thm-dominated-convergence
  - thm-doob-lp-maximal-inequality
  - thm-riesz-fischer-completeness-of-l-p
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "A. W. van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 5.64, Section 5.8, pp. 80–82"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume AC. Let $M$ be a real continuous local martingale on $[0,T]$ with $M_0=0$, where a local martingale means that some increasing stopping times tending to $T$ make the stopped processes martingales. Then there is a unique continuous increasing process $[M]$ with $[M]_0=0$ such that the step-endpoint and partial-increment sums of squared increments along every deterministic partition sequence whose mesh tends to zero converge uniformly in probability to $[M]$. Moreover $M_t^2-[M]_t$ is a continuous local martingale. For a continuous $d$-dimensional local martingale $M$ started at zero, polarization defines continuous covariations $[M^i,M^j]$ with $M^iM^j-[M^i,M^j]$ local martingales. More generally, if $X=M+A$ and $Z=N+C$ with continuous local martingales $M,N$ and continuous finite-variation processes $A,C$, then left-step sums define the localized integrals against $M,N$ and
$$X_tZ_t-X_0Z_0=\int_0^t X_s\,dZ_s+\int_0^t Z_s\,dX_s+[M,N]_t,$$
where finite-variation integrals are pathwise Lebesgue–Stieltjes integrals and local-martingale integrals are the limits of the displayed left-step sums. A continuous finite-variation local martingale is constant.

## Statement references

[van der Vaart, Theorem 5.64 and Section 5.8, printed pp. 80–82](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf): defines semimartingale covariation by integration by parts and proves convergence of squared-increment sums; the localized bounded-martingale proof below supplies the needed argument in the present library's convention.

## Facts & Assumptions

**Given:** AC, a continuous local martingale $M$ with $M_0=0$, and a finite time horizon $T$.

[A1] AC is required by the supplied local-martingale and Doob interfaces. [[def-axiom-of-choice]] [[def-continuous-time-adapted-process-and-martingale]] [[thm-doob-lp-maximal-inequality]]

[F1] Martingale increments on disjoint consecutive intervals are orthogonal in $L^2$: their cross expectation is zero, and $E(M_T-M_0)^2$ is the sum of their second moments. [[lem-martingale-differences-are-orthogonal-in-l2]]

[F2] For an $L^2$ martingale, Doob's inequality bounds the expected squared path supremum by four times the terminal second moment; $L^2$ is complete, and dominated and monotone convergence apply in the limits below. [[thm-doob-lp-maximal-inequality]] [[thm-riesz-fischer-completeness-of-l-p]] [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]]

[F3] A continuous process has uniformly vanishing oscillation on a compact time interval as the interval lengths tend to zero. [[def-quadratic-covariation-of-brownian-ito-processes]]

[F4] The $L^2$ Cauchy–Schwarz inequality bounds $E(R^2Q)$ by $(ER^4)^{1/2}(EQ^2)^{1/2}$. [[cor-cauchy-schwarz-for-random-variables]]

## Proof
**Given:** the hypotheses in the Statement.

1.1 For each integer $n\ge1$, let $\tau_n=\inf\{t\le T:|M_t|\ge n\}\wedge T$ and set $M^{(n)}=M^{\tau_n}$. The stopping-time definition and continuity make $\tau_n$ a stopping time and $|M^{(n)}|\le n$. A bounded local martingale is a true martingale: stop it along its localizing sequence, use the martingale event-integral identities, and pass to the limit by dominated convergence because the stopped variables are bounded by $n$. Every continuous path is bounded on $[0,T]$, so $\tau_n=T$ eventually on each path. It suffices to construct the claimed limit for each bounded martingale $M^{(n)}$ and show the constructions agree on overlaps. [A1, F2]

1.2 Fix one such bounded martingale $M$, with $|M_t|\le n$, and a deterministic partition $\pi=(t_0,\ldots,t_N)$ of $[0,T]$. Put $H^\pi_s=M_{t_k}$ for $t_k<s\le t_{k+1}$ and $\displaystyle I^\pi_t=\sum_{k=0}^{N-1}M_{t_k}\bigl(M_{t\wedge t_{k+1}}-M_{t\wedge t_k}\bigr),\qquad Q^\pi_t=\sum_{t_{k+1}\le t}(M_{t_{k+1}}-M_{t_k})^2+(M_t-M_{t_k})^2$ when $t_k\le t<t_{k+1}$, with the last partial term omitted at $t=T$. The process $I^\pi$ is a continuous martingale because it is a finite sum of bounded, left-measurable multiples of martingale increments. Orthogonality [F1] gives $E|I^\pi_T|^2=\sum_kE[M_{t_k}^2(\Delta_kM)^2]\le n^2 E(M_T-M_0)^2\le n^4$. Directly expanding each square yields the exact identity $M_t^2-M_0^2=2I^\pi_t+Q^\pi_t$. Hence $\|Q^\pi_T\|_2\le3n^2$, uniformly over all partitions. [F1]

2.1 For two partitions $\pi,\rho$, take their common refinement $\eta$. Refinement does not change a step sum with a fixed coefficient on each coarse interval, so $\displaystyle E|I^\pi_T-I^\rho_T|^2=E\sum_{[s,t]\in\eta}(H^\pi_s-H^\rho_s)^2(M_t-M_s)^2\le E\left[R_{\pi,\rho}^2Q^\eta_T\right],$ where $R_{\pi,\rho}=\sup_s|H^\pi_s-H^\rho_s|$. Uniform continuity [F3] gives $R_{\pi,\rho}\to0$ almost surely as both meshes tend to zero, and $R_{\pi,\rho}\le2n$. Cauchy–Schwarz [F4] and dominated convergence [F2] therefore make the last expectation tend to zero, using the uniform $L^2$ bound on $Q^\eta_T$ from step 1.2. Thus the terminal sums $I^\pi_T$ are Cauchy in $L^2$; completeness [F2] gives their $L^2$ limit, and Doob's inequality [F2] gives the same Cauchy property for $\sup_{t\le T}|I^\pi_t-I^\rho_t|$; for the continuous-time supremum, apply the discrete inequality on increasing finite rational grids and pass to their union by monotone convergence [F2]. Choose a subsequence whose successive expected squared sup errors are at most $2^{-4k}$. Markov's inequality and the union bound imply that this subsequence converges uniformly almost surely to a continuous process $I$; the full family converges uniformly in probability to $I$. Fatou's lemma applied to the uniformly Cauchy subsequence gives $L^2$ convergence of the path suprema, so the event-integral martingale identities pass to the $L^1$ limit. [F3, F4, F2, step 1.2]

3.1 The exact identity in step 1.2 shows that the partial-increment sums $Q^\pi$ converge uniformly in probability to $Q_t=M_t^2-M_0^2-2I_t$. A subsequence converges uniformly almost surely, so $Q$ is continuous. The step-endpoint sum differs from $Q^\pi$ by at most the maximal squared oscillation of $M$ over a partition interval; [F3] makes this tend to zero almost surely. Step-endpoint sums are nondecreasing. A uniformly convergent almost-sure subsequence of those sums therefore shows that $Q$ is increasing. Thus both covariation conventions converge to $Q$ along every vanishing-mesh sequence. Since $2I=M^2-M_0^2-Q$ is a martingale, $M^2-Q$ is a martingale; uniqueness of the partition-limit object follows from uniqueness of limits in probability. [step 1.2, F3, F2, step 2.1]

4.1 Apply the scalar result to $M^{(n)}$ for each $n$. On any event where $\tau_n=T$, the stopped and original paths agree on the whole horizon, so their squared-increment sums agree; these events increase to probability one. Therefore the stopped limits agree on overlaps and define the continuous increasing $[M]$ for the original local martingale, with $M^2-[M]$ a local martingale. For vector $M$, apply the scalar result to $M^i+M^j$ and $M^i-M^j$ and set $\displaystyle [M^i,M^j]=\tfrac14\bigl([M^i+M^j]-[M^i-M^j]\bigr).$ The identity $4xy=(x+y)^2-(x-y)^2$ makes this the limit of cross-increment sums. Taking the same linear combination of the two square-compensated local martingales gives $M^iM^j-[M^i,M^j]$ local martingale. [step 3.1]

4.2 Let $H$ be a bounded continuous adapted process and $N$ a bounded continuous martingale with $N_0=0$. For each partition $\pi$ set $\displaystyle J^\pi_t=\sum_k H_{t_k}\bigl(N_{t\wedge t_{k+1}}-N_{t\wedge t_k}\bigr).$ On a common refinement $\eta$, martingale orthogonality [F1] gives $\displaystyle E|J^\pi_T-J^\rho_T|^2\le E\left[\sup_s|H^\pi_s-H^\rho_s|^2 Q^\eta_T(N)\right].$ The first factor tends to zero in $L^2$ by boundedness, continuity of $H$, and dominated convergence [F2]; the second has uniformly bounded $L^2$ norm by steps 1.2–2.1 applied to $N$. Cauchy–Schwarz [F4] makes the terminal sums Cauchy in $L^2$, whose limit exists by completeness [F2]. Doob's inequality [F2], applied on increasing finite rational grids and then passed to their union by monotone convergence [F2], makes the process sums Cauchy in $L^2$ of the path supremum. A subsequence with summable squared-sup errors converges uniformly almost surely to a continuous limit; Fatou gives $L^2$ convergence of the full process sums to it, so the event-integral martingale identities pass to the $L^1$ limit. This defines $\int H\,dN$ as the left-step limit. Localization extends the construction to continuous local martingales and locally bounded continuous adapted integrands. [F1, F2, step 1.2, step 3.1, F4]

5.1 Let $X=M+A$ and $Z=N+C$ as in the statement. Stop so that the local martingales and total variations of $A,C$ are bounded. On every partition the exact identity $\displaystyle X_tZ_t-X_0Z_0=\sum_kX_{t_k}\Delta_k Z+\sum_kZ_{t_k}\Delta_k X+\sum_k\Delta_kX\Delta_kZ$ holds at the terminal time. The first two sums split into the integrals against $M,N$ from step 4.2 and the ordinary Lebesgue–Stieltjes integrals against $A,C$. In the last sum, each cross term containing a finite-variation increment tends to zero, for example $|\sum\Delta_kM\Delta_kC|\le\max_k|\Delta_kM|\operatorname{Var}(C)\to0$ by continuity; the remaining $\sum\Delta_kM\Delta_kN$ converges to $[M,N]$ by steps 3.1 and 4.1. Passing to the limit proves the displayed product formula on the stopped interval, and localization proves it on $[0,T]$. [step 4.2, step 3.1, step 4.1, F3]

6.1 If $V$ is a continuous finite-variation local martingale, stop so that its total variation is bounded. Its stopped process is bounded after subtracting $V_0$, hence is a true square-integrable martingale. For any deterministic partition, orthogonality [F1] gives $E(V_T-V_0)^2=E\sum_k(\Delta_kV)^2$. Pathwise, $\sum_k(\Delta_kV)^2\le\max_k|\Delta_kV|\operatorname{Var}(V)$, which tends to zero by continuity [F3]; dominated convergence [F2] makes its expectation tend to zero. Thus $V_T=V_0$ almost surely. Applying this at rational terminal times and using continuity proves each stopped process is constant; removing the localizing stops proves the assertion. [F1, F3, F2] ∎
