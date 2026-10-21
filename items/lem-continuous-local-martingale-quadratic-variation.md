---
id: lem-continuous-local-martingale-quadratic-variation
kind: lemma
title: Quadratic variation of a continuous local martingale
status: published
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
  - thm-optional-sampling-for-bounded-stopping-times
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

Assume AC. Each input local martingale below is taken with everywhere-continuous adapted paths; it suffices that its full continuity event belongs to the initial sigma-algebra, so it can first be normalized there. All pathwise stopping operations use these representatives. Let $M$ be a real continuous local martingale on $[0,T]$ with $M_0=0$, where a local martingale means that some increasing stopping times tending to $T$ make the stopped processes martingales. Then there is a unique continuous increasing process $[M]$ with $[M]_0=0$ such that the step-endpoint and partial-increment sums of squared increments along every deterministic partition sequence whose mesh tends to zero converge uniformly in probability to $[M]$. Moreover $M_t^2-[M]_t$ is a continuous local martingale. For a continuous $d$-dimensional local martingale $M$ started at zero, polarization defines continuous covariations $[M^i,M^j]$ with $M^iM^j-[M^i,M^j]$ local martingales. More generally, if $X=M+A$ and $Z=N+C$ with continuous local martingales $M,N$ and continuous finite-variation processes $A,C$, then left-step sums define the localized integrals against $M,N$ and
$$X_tZ_t-X_0Z_0=\int_0^t X_s\,dZ_s+\int_0^t Z_s\,dX_s+[M,N]_t,$$
where finite-variation integrals are pathwise Lebesgue–Stieltjes integrals and local-martingale integrals are the limits of the displayed left-step sums. Stopping a continuous local martingale at a bounded stopping time preserves its local-martingale property; if the stopped process is bounded, it is a true martingale. A continuous finite-variation local martingale is constant.

## Statement references

[van der Vaart, Theorem 5.64 and Section 5.8, printed pp. 80–82](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf): defines semimartingale covariation by integration by parts and proves convergence of squared-increment sums; the localized bounded-martingale proof below supplies the needed argument in the present library's convention.

## Facts & Assumptions

**Given:** AC, the Statement's everywhere-continuous adapted representatives of the input local martingales, $M_0=0$, and a finite time horizon $T$.

[A1] AC is required by the supplied local-martingale and Doob interfaces. [[def-axiom-of-choice]] [[def-continuous-time-adapted-process-and-martingale]] [[thm-doob-lp-maximal-inequality]]

[F1] Martingale increments on disjoint consecutive intervals are orthogonal in $L^2$: their cross expectation is zero, and $E(M_T-M_0)^2$ is the sum of their second moments. [[lem-martingale-differences-are-orthogonal-in-l2]]

[F2] For an $L^2$ martingale, Doob's inequality bounds the expected squared path supremum by four times the terminal second moment; $L^2$ is complete, and dominated and monotone convergence apply in the limits below. [[thm-doob-lp-maximal-inequality]] [[thm-riesz-fischer-completeness-of-l-p]] [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]]

[F3] A continuous process has uniformly vanishing oscillation on a compact time interval as the interval lengths tend to zero. [[def-quadratic-covariation-of-brownian-ito-processes]]

[F4] The $L^2$ Cauchy–Schwarz inequality bounds $E(R^2Q)$ by $(ER^4)^{1/2}(EQ^2)^{1/2}$. [[cor-cauchy-schwarz-for-random-variables]]

[F5] For bounded stopping times on a finite grid, optional sampling gives the conditional martingale identity. [[thm-optional-sampling-for-bounded-stopping-times]]

## Proof
**Given:** the hypotheses in the Statement.

1.1 If $Q$ is a true continuous martingale and $\rho\le T$ is a stopping time, round $\rho$ up to finite-valued grid stopping times $\rho_m\downarrow\rho$. For fixed $s\le t$, include $s,t$ in the grid; the sampled process is a discrete martingale, so [F5] gives the event-integral identity for $Q_{t\wedge\rho_m}$ and $Q_{s\wedge\rho_m}$. The finite-valued stopping calculation identifies these stopped values as conditional expectations of $Q_T$. They are uniformly integrable: for any sub-$\sigma$-algebra $\mathcal H$, truncating $Q_T$ at $K/2$ gives $E(|E[Q_T\mid\mathcal H]|1_{|E[Q_T\mid\mathcal H]|>K})\le2E(|Q_T|1_{|Q_T|>K/2})$. Continuity gives almost-sure convergence as $m\to\infty$; dominated convergence on bounded truncations and this uniform tail bound pass the event identities to $Q^\rho$. Thus a bounded stop of a true continuous martingale is a true martingale. If $M$ is a local martingale with localizers $\lambda_k$, then $M^{\tau\wedge\lambda_k}=(M^{\lambda_k})^\tau$ is a true martingale by this fact, so $(\lambda_k)$ also localizes $M^\tau$. For each integer $n\ge1$, let $\tau_n=\inf\{t\le T:|M_t|\ge n\}\wedge T$ and set $M^{(n)}=M^{\tau_n}$. The stopping-time definition and continuity make $\tau_n$ a stopping time, and the preceding argument shows $M^{(n)}$ is a local martingale. It is bounded by $n$, hence a true martingale: pass its event-integral identities along its localizing sequence by dominated convergence. Every continuous path is bounded on $[0,T]$, so $\tau_n=T$ eventually on each path. It suffices to construct the claimed limit for each bounded martingale $M^{(n)}$ and show the constructions agree on overlaps. [A1, F2, F3, F5]

1.2 Fix one such bounded martingale $M$, with $|M_t|\le n$, and a deterministic partition $\pi=(t_0,\ldots,t_N)$ of $[0,T]$. For coefficient bookkeeping put $H^\pi_s=M_{t_k}$ for $t_k\le s<t_{k+1}$ and $H^\pi_T=M_{t_{N-1}}$, and set $\displaystyle I^\pi_t=\sum_{k=0}^{N-1}M_{t_k}\bigl(M_{t\wedge t_{k+1}}-M_{t\wedge t_k}\bigr),\qquad Q^\pi_t=\sum_{t_{k+1}\le t}(M_{t_{k+1}}-M_{t_k})^2+(M_t-M_{t_k})^2$ when $t_k\le t<t_{k+1}$, with the last partial term omitted at $t=T$. The process $I^\pi$ is a continuous martingale because it is a finite sum of bounded, left-measurable multiples of martingale increments. Orthogonality [F1] gives $E|I^\pi_T|^2=\sum_kE[M_{t_k}^2(\Delta_kM)^2]\le n^2 E(M_T-M_0)^2\le n^4$. Directly expanding each square yields the exact identity $M_t^2-M_0^2=2I^\pi_t+Q^\pi_t$. Hence $\|Q^\pi_T\|_2\le3n^2$, uniformly over all partitions. [F1]

2.1 For two partitions $\pi,\rho$, take their common refinement $\eta$. Refinement does not change a step sum with a fixed coefficient on each coarse interval, so $\displaystyle E|I^\pi_T-I^\rho_T|^2=E\sum_{[s,t]\in\eta}(H^\pi_s-H^\rho_s)^2(M_t-M_s)^2\le E\left[R_{\pi,\rho}^2Q^\eta_T\right],$ where $R_{\pi,\rho}=\sup_s|H^\pi_s-H^\rho_s|$. Uniform continuity [F3] gives $R_{\pi,\rho}\to0$ almost surely as both meshes tend to zero, and $R_{\pi,\rho}\le2n$. Cauchy–Schwarz [F4] and dominated convergence [F2] therefore make the last expectation tend to zero, using the uniform $L^2$ bound on $Q^\eta_T$ from step 1.2. Thus the terminal sums $I^\pi_T$ are Cauchy in $L^2$; completeness [F2] gives their $L^2$ limit, and Doob's inequality [F2] gives the same Cauchy property for $\sup_{t\le T}|I^\pi_t-I^\rho_t|$; for the continuous-time supremum, apply the discrete inequality on increasing finite rational grids and pass to their union by monotone convergence [F2]. Choose a subsequence whose successive expected squared sup errors are at most $2^{-4k}$. Markov's inequality and the union bound imply that this subsequence converges uniformly almost surely to a process $I$ with almost-sure continuous paths; define its value at each time as the finite pointwise limit of those sums, and zero if that limit does not exist. Since the approximating sums are continuous and adapted, this rule is adapted and progressively measurable, so its stopped values are measurable. The full family converges uniformly in probability to $I$. For fixed subsequence index $m$, the squared path-sup errors from its $m$th term to later terms converge almost surely to $\sup_{t\le T}|I^{\pi_{n_m}}_t-I_t|^2$. Applying monotone convergence to the infima of these tails gives Fatou's inequality; the $L^2$-Cauchy bound then shows these errors tend to zero in $L^2$. The event-integral martingale identities therefore pass to the $L^1$ limit. [F3, F4, F2, step 1.2]

3.1 The exact identity in step 1.2 shows that the partial-increment sums $Q^\pi$ converge uniformly in probability to $Q_t=M_t^2-M_0^2-2I_t$. A subsequence converges uniformly almost surely, so $Q$ is continuous. The step-endpoint sum differs from $Q^\pi$ by at most the maximal squared oscillation of $M$ over a partition interval; [F3] makes this tend to zero almost surely. Step-endpoint sums are nondecreasing. A uniformly convergent almost-sure subsequence of those sums therefore shows that $Q$ is increasing. Thus both covariation conventions converge to $Q$ along every vanishing-mesh sequence. Since $2I=M^2-M_0^2-Q$ is a martingale, $M^2-Q$ is a martingale; uniqueness of the partition-limit object follows from uniqueness of limits in probability. [step 1.2, F3, F2, step 2.1]

4.1 Apply the scalar result to $M^{(n)}$ for each $n$. For $m\ge n$, the partial-increment sums for $M^{(m)}$ evaluated at $t\wedge\tau_n$ equal those for $M^{(n)}$ evaluated at $t$, pathwise. Their uniform probability limits therefore satisfy $[M^{(m)}]^{\tau_n}=[M^{(n)}]$. The limits paste to an adapted continuous increasing $[M]$, since $\tau_n=T$ eventually almost surely; alternatively its adapted values are the pointwise limits of a uniformly almost-surely convergent subsequence of the original partition sums, with zero assigned when a limit is not finite. The stopped identity $(M^2-[M])^{\tau_n}=(M^{(n)})^2-[M^{(n)}]$ is a true martingale by step 3.1, so $M^2-[M]$ is local. For vector $M$, choose localizing sequences for $M^i$ and $M^j$ and stop both at their minimum $\sigma_n$. The bounded-stopping fact in step 1.1 makes the two stopped coordinates true martingales, so $M^i+M^j$ and $M^i-M^j$ are local martingales. Apply the scalar result to them and set $\displaystyle [M^i,M^j]=\tfrac14\bigl([M^i+M^j]-[M^i-M^j]\bigr).$ The identity $4xy=(x+y)^2-(x-y)^2$ makes this the limit of cross-increment sums. Taking the same linear combination of the two square-compensated local martingales gives $M^iM^j-[M^i,M^j]$ local martingale. [step 1.1, step 3.1]

4.2 Let $H$ be a bounded adapted process with everywhere-continuous paths and $N$ a bounded continuous martingale with $N_0=0$. For each partition $\pi$ use $H^\pi_s=H_{t_k}$ for $t_k\le s<t_{k+1}$ (with the last coefficient at $T$), and set $\displaystyle J^\pi_t=\sum_k H_{t_k}\bigl(N_{t\wedge t_{k+1}}-N_{t\wedge t_k}\bigr).$ On a common refinement $\eta$, martingale orthogonality [F1] gives $\displaystyle E|J^\pi_T-J^\rho_T|^2\le E\left[\sup_s|H^\pi_s-H^\rho_s|^2 Q^\eta_T(N)\right].$ The first factor tends to zero in $L^2$ by boundedness, continuity of $H$, and dominated convergence [F2]; the second has uniformly bounded $L^2$ norm by steps 1.2–2.1 applied to $N$. Cauchy–Schwarz [F4] makes the terminal sums Cauchy in $L^2$, whose limit exists by completeness [F2]. Doob's inequality [F2], applied on increasing finite rational grids and then passed to their union by monotone convergence [F2], makes the process sums Cauchy in $L^2$ of the path supremum. A subsequence with summable squared-sup errors converges uniformly almost surely; define the limit at each time where finite and zero otherwise, giving an adapted progressively measurable version with almost-sure continuous paths. Fatou gives $L^2$ convergence of the full process sums to it, so the event-integral martingale identities pass to the $L^1$ limit. This defines $\int H\,dN$ as the left-step limit. Localization extends the construction to continuous local martingales and locally bounded continuous adapted integrands. [F1, F2, step 1.2, step 3.1, F4]

5.1 Let $X=M+A$ and $Z=N+C$ as in the statement. First stop $M,N$ at common bounded hitting localizers from step 1.1; step 4.2 then defines their mutual integrals, and removing those stops gives the localized integrals. For a continuous finite-variation path $A$ and a continuous path $N$, summation by parts gives $\sum_k A_{t_k}\Delta_kN=A_tN_t-A_0N_0-\sum_kN_{t_{k+1}}\Delta_kA$, so these left sums converge pathwise to $A_tN_t-A_0N_0-\int_0^tN_s\,dA_s$; this defines $\int A\,dN$ even if $A$ is not adapted. The analogous observation applies to $C$ and $M$. On every partition, including a final partial interval, the exact identity $X_tZ_t-X_0Z_0=\sum_kX_{t_k}\Delta_kZ+\sum_kZ_{t_k}\Delta_kX+\sum_k\Delta_kX\Delta_kZ$ holds. The first two sums converge by the preceding constructions and ordinary Lebesgue–Stieltjes integration. Each cross term containing a finite-variation increment vanishes, for example $|\sum_k\Delta_kM\Delta_kC|\le\max_k|\Delta_kM|\operatorname{Var}(C)\to0$; the same estimate is uniform in terminal time. The remaining cross sums converge uniformly in probability to $[M,N]$ by polarization in step 4.1. The limiting identity holds simultaneously at rational times and hence, by continuity, on the whole horizon. This proves the product formula without requiring adaptedness of $A,C$. [step 1.1, step 4.2, step 3.1, step 4.1, F3]

6.1 If $V$ is a continuous finite-variation local martingale with the stated representative convention, put $U=V-V_0$. Along every vanishing-mesh partition, its partial square sums are bounded by the maximal path oscillation times $\operatorname{Var}_{[0,T]}(V)$, which tends to zero almost surely. Thus $[U]=0$ by uniqueness of the limit in step 4.1, and $U^2$ is a nonnegative local martingale started at zero. For its localizers $\lambda_k$, the true stopped martingales satisfy $E U_{t\wedge\lambda_k}^2=0$; hence their values are zero almost surely at each rational $t$ and at $T$. Continuity and $\lambda_k\uparrow T$ imply $U\equiv0$ on a common full event. Therefore $V$ is constant. [F3, step 4.1] ∎
