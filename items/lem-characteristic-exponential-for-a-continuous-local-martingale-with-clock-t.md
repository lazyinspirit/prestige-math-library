---
id: lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t
kind: lemma
title: "Characteristic exponential for a continuous local martingale with deterministic clock"
status: draft
origin: pipeline
deps: [def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-quadratic-covariation-of-brownian-ito-processes, def-quadratic-variation-along-a-partition-sequence, def-convergence-in-probability, def-conditional-expectation-as-an-ae-class, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, def-continuous-time-stopping-time, def-continuity-real, thm-heine-cantor-r, cor-cauchy-schwarz-for-random-variables, thm-dominated-convergence, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, cor-taylor-remainder-bound, def-taylor-polynomial-and-remainder]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a real continuous local martingale
relative to a filtration $(\mathcal F_t)_{t\ge0}$
[[def-continuous-time-adapted-process-and-martingale]] with $M_0=0$ almost
surely, and suppose that its quadratic variation in the sense of
[[def-quadratic-covariation-of-brownian-ito-processes]] satisfies
$[M]_t=t$ for every $t\ge0$: for every deterministic partition sequence of
$[0,T]$ with mesh tending to $0$, the squared-increment sums of $M$ converge to
$t$ uniformly in probability. Then for every real $\theta$:

1. **Increments are conditionally Gaussian.** For all $0\le s<t$,
   $$E\bigl[e^{i\theta(M_t-M_s)}\bigm|\mathcal F_s\bigr] =e^{-\theta^2(t-s)/2}\qquad\text{almost surely},$$
   the left side being the complex conditional expectation defined
   componentwise.
2. **The characteristic exponential is a complex martingale.** The process
   $Z_t:=\exp\bigl(i\theta M_t+\tfrac{\theta^2t}{2}\bigr)$, interpreted through
   its real and imaginary parts, is a complex martingale relative to
   $(\mathcal F_t)$: $E|Z_t|<\infty$ and
   $E[Z_t\mid\mathcal F_s]=Z_s$ almost surely for all $s\le t$. In particular
   the real and imaginary parts of $Z$ are real martingales bounded in modulus
   by $e^{\theta^2t/2}$ at time $t$.

## Facts & Assumptions

**Given:** AC, a real continuous local martingale $M$ with $M_0=0$ almost surely and $[M]_t=t$ for all $t$, a real $\theta$, a finite horizon $T>0$, and times $0\le s<t\le T$.
 
[F1] **Localization and bounded martingales.** If $(\tau_k)$ localizes $M$ in the sense of [[def-continuous-time-adapted-process-and-martingale]], then for every stopping time $\rho$ the sequence $(\rho\wedge\tau_k)$ localizes $M^{\rho}$ (localization is stable under stopping), and if a local martingale is bounded on every finite horizon, it is a martingale: testing against bounded $\mathcal F_s$-measurable variables and using dominated convergence on the stopped martingales gives $E[X_t1_A]=E[X_s1_A]$. [[def-continuous-time-adapted-process-and-martingale]] [[def-continuous-time-stopping-time]] [[def-conditional-expectation-as-an-ae-class]] [[thm-dominated-convergence]]
 
[F2] **Level-and-time stopping.** For $m\ge1$ put $\sigma_m:=\inf\{t\ge0:|M_t|\ge m\}\wedge m$. Then $\sigma_m$ is a stopping time, $M^{(m)}:=M^{\sigma_m}$ is a bounded continuous martingale with $|M^{(m)}_t|\le m$ and $M^{(m)}_t=M_t$ for $t<\sigma_m$, and $\sigma_m\uparrow\infty$ almost surely because the continuous path of $M$ is finite on every compact time interval. [[def-continuous-time-adapted-process-and-martingale]] [[def-continuous-time-stopping-time]] [[def-continuity-real]]
 
[F3] **The stopped clock.** For every $t$ the quadratic variation of $M^{(m)}$ satisfies $[M^{(m)}]_t=t\wedge\sigma_m$: the squared-increment sums of $M^{(m)}$ over a deterministic partition of $[0,T]$ equal the corresponding sub-partition sums of $M$ over $[0,t\wedge\sigma_m]$ up to endpoint corrections bounded by the squared maximal increment, which vanishes along vanishing meshes, and the sums of $M$ converge to the deterministic clock along every deterministic vanishing-mesh sequence. Consequently the weighted pullback holds: for every continuous adapted weight $w$ with $|w|\le K$, $$\sum_jw(u_j)\bigl(M^{(m)}_{u_{j+1}}-M^{(m)}_{u_j}\bigr)^2\longrightarrow\int_0^{T}w(u)\,1_{[0,\sigma_m)}(u)\,du$$ in probability, uniformly in the upper summation limit; this is proved in steps 1.3--2.1 from the deterministic block sums, uniformity of the convergence in the upper limit and a staircase approximation. [[def-quadratic-covariation-of-brownian-ito-processes]] [[def-quadratic-variation-along-a-partition-sequence]] [[def-convergence-in-probability]] [[thm-heine-cantor-r]]
 
[F4] **Conditional centering for stopped increments.** For the bounded martingale $M^{(m)}$ and indices $j$, $E[M^{(m)}_{u_{j+1}}-M^{(m)}_{u_j}\mid\mathcal F_{u_j}]=0$ almost surely; more generally, if $W$ is bounded and $\mathcal F_{u_j}$-measurable, $E[W(M^{(m)}_{u_{j+1}}-M^{(m)}_{u_j})\mid\mathcal F_s]=0$ for $s\le u_j$: insert the $\mathcal F_{u_j}$-conditional expectation and use $\mathcal F_s\subseteq\mathcal F_{u_j}$. [[def-continuous-time-adapted-process-and-martingale]] [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]]
 
[F5] **Taylor expansion of the exponential.** For real $z,h$ with $|z|\le2m$ and $|h|\le T$, $$e^{i\theta z+\frac{\theta^2}{2}h}=1+i\theta z+\frac{\theta^2}{2}\bigl(h-z^2\bigr)+R(z,h),\qquad |R(z,h)|\le C_\theta\bigl(|z|^3+h|z|+h^2+h|z|^2\bigr)$$ for a constant $C_\theta$ depending only on $\theta,m,T$: expand the exponential in its third-order Taylor polynomial with remainder and use $e^{i\theta z+({\theta^2}/{2})h}=(1+i\theta z-\frac{\theta^2z^2}{2}+\rho)(1+\eta)$ with $|\rho|\le C|z|^3$ and $|\eta|\le e^{\theta^2h/2}-1\le C'h$. [[cor-taylor-remainder-bound]] [[def-taylor-polynomial-and-remainder]]
 
[F6] **Estimates and convergence.** Cauchy--Schwarz for sums; if a sequence of random variables is bounded by $R_n$ with $ER_n\to0$, then it tends to $0$ in probability; and dominated convergence passes limits through conditional expectations of sequences bounded by an integrable random variable. [[cor-cauchy-schwarz-for-random-variables]] [[def-convergence-in-probability]] [[thm-dominated-convergence]]
 
[F7] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Reduction to the bounded martingale $M^{(m)}$: fix $m\ge1$ and write $N:=M^{(m)}$ for the bounded martingale of [F2]. Its clock is $t\wedge\sigma_m$ by [F3], and $N_t=M_t$ whenever $t<\sigma_m$. It will be shown that for all $0\le s<t\le T$ and every bounded $\mathcal F_s$-measurable $Y$ one has $E\bigl[Y\exp\bigl(i\theta(N_t-N_s)+\tfrac{\theta^2}{2}((t\wedge\sigma_m)-(s\wedge\sigma_m))\bigr)\bigr]=E[Y]$; passing to the limit $m\to\infty$ and using dominated convergence is carried out after the partition argument. [F1, F2, F3, F6]
 
1.2 Setup of the partition argument: fix a deterministic partition sequence $(\pi_n)$ of $[s,t]$ with mesh tending to $0$ and containing both endpoints, let $u_j$ be its points, and define $v_j:=u_j\wedge\sigma_m$, $$A_j:=\exp\Bigl(i\theta\bigl(N_{u_j}-N_s\bigr)+\tfrac{\theta^2}{2}\bigl(v_j-(s\wedge\sigma_m)\bigr)\Bigr).$$ Then $A_j$ is bounded by $e^{\theta^2T/2}$, is $\mathcal F_{u_j}$-measurable, $A_0=1$, and $A_j$ at the final point is the stopped exponential over $[s,t]$; the increments of $N$ over the partition satisfy $N_{u_{j+1}}-N_{u_j}=0$ whenever $u_j\ge\sigma_m$. [F2, F3, given]
 
1.3 Elementary weights in the pullback: let $w=\sum_a\lambda_a1_{(r_a,r_{a+1}]}$ be elementary with bounded coefficients and deterministic block points in $[s,t]$, and refine $\pi_n$ by adding the finitely many points $r_a$; then for the cumulative sums $S_n(u):=\sum_{j:\,u_{j+1}\le u}(N_{u_{j+1}}-N_{u_j})^2$ of the refined sequence, [F3] and subtraction of the clock at $s$ give $S_n(u)\to(u\wedge\sigma_m)-(s\wedge\sigma_m)$ uniformly in probability, the block sums equal $S_n(r_{a+1})-S_n(r_a)$ up to the at most two boundary intervals of size at most $\max_j|N_{u_{j+1}}-N_{u_j}|^2\to0$, and $\sum_a\lambda_a\int_{r_a}^{r_{a+1}}1_{[0,\sigma_m)}du=\int_s^tw1_{[0,\sigma_m)}du$; hence the weighted sums converge. [F3, F6]
 
2.1 General weights in the pullback: for continuous adapted $w$ with $|w|\le K$ and its left-endpoint staircase $w^{(l)}$ on a deterministic grid of $[s,t]$ with mesh tending to zero, uniform continuity on the (random) compact range gives $\sup_{u\in[s,t]}|w^{(l)}_u-w_u|\to0$ almost surely, so the difference of the weighted sums is bounded by $\sup_u|w^{(l)}_u-w_u|\cdot S_n(t)\to0$ in probability because $S_n(t)$ converges and is bounded in probability, while step 1.3 applies to $w^{(l)}$ and $\int_s^t w^{(l)}1_{[0,\sigma_m)}\to\int_s^t w1_{[0,\sigma_m)}$ by dominated convergence; this proves the pullback of [F3] on $[s,t]$. [F3, F6, step 1.3]
 
2.2 Centering the martingale part: $\sum_jA_ji\theta z_j$ has conditional expectation zero given $\mathcal F_s$: each weight $A_j$ is bounded and $\mathcal F_{u_j}$-measurable, and [F4] gives $E[A_jz_j\mid\mathcal F_s]=0$; summing over the finitely many $j$ with $u_j\ge s$ and using the linearity of conditional expectation gives the claim. [F4, step 1.2]
 
2.3 Remainder control: by [F5] applied with $z=z_j$, $h=h_j$ (both bounded by $2m$ and $T$ respectively), $$\sum_jA_j\bigl(e^{i\theta z_j+\frac{\theta^2}{2}h_j}-1-i\theta z_j-\tfrac{\theta^2}{2}(h_j-z_j^2)\bigr)=\sum_jA_jR(z_j,h_j)$$ and $|\sum_jA_jR(z_j,h_j)|\le e^{\theta^2T/2}C_\theta\sum_j\bigl(|z_j|^3+h_j|z_j|+h_j^2+h_j|z_j|^2\bigr)\to0$ in probability, because $\sum_j|z_j|^3\le\max_j|z_j|\sum_j|z_j|^2\to0$ (maximal increments vanish by continuity and the squared sums converge in probability), $\sum_jh_j^2\le\operatorname{mesh}(\pi_n)T\to0$, $\sum_jh_j|z_j|\le T\max_j|z_j|\to0$ and $\sum_jh_j|z_j|^2\le\operatorname{mesh}(\pi_n)\sum_j|z_j|^2\to0$. [F3, F5, F6, step 1.2]
 
3.1 Compensator identity: for the partition points write $h_j:=v_{j+1}-v_j\ge0$ and $z_j:=N_{u_{j+1}}-N_{u_j}$; then $z_j=0$ when $u_j\ge\sigma_m$, and $\sum_j|z_j|^2$ converges in probability to the stopped clock increment, whence $\sum_jA_j\bigl(h_j-z_j^2\bigr)\to\int_s^t A_u1_{[0,\sigma_m)}(u)\,du-\int_s^tA_u1_{[0,\sigma_m)}(u)\,du=0$ in probability, using the weighted pullback of step 2.1 with the continuous bounded weight $A$ and the Riemann convergence of $\sum_jA_jh_j$. [F3, F6, step 2.1]
 
4.1 Telescoping and the conditional identity: the exact identity $\sum_j(A_{j+1}-A_j)=A_{n}-A_0$ combined with the expansion of [F5] gives $$E\Bigl[Y\bigl(A_{n}-1\bigr)\Bigr]=E\Bigl[Y\sum_jA_jR(z_j,h_j)\Bigr]+0+o(1)$$ for every bounded $\mathcal F_s$-measurable $Y$, by steps 3.1 and 2.2 (the factor $Y$ is $\mathcal F_s$-measurable and bounded, so it may be inserted in each conditional centering); letting $n\to\infty$ and using step 2.3, $E[Y(A_{n}-1)]\to0$. Since $A_n\to\exp(i\theta(N_t-N_s)+\frac{\theta^2}{2}(v_t-v_s))$ almost surely and all terms are bounded by $e^{\theta^2T/2}$, dominated convergence gives $E\bigl[Y\exp\bigl(i\theta(N_t-N_s)+\tfrac{\theta^2}{2}((t\wedge\sigma_m)-(s\wedge\sigma_m))\bigr)\bigr]=E[Y]$ for every bounded $\mathcal F_s$-measurable $Y$, which is the asserted conditional identity for $N$. [F6, step 3.1, step 2.2, step 2.3]
 
5.1 Removing the localization: on the event $\{\sigma_m\ge t\}$ one has $N_t=M_t$, $N_s=M_s$ and $(t\wedge\sigma_m)-(s\wedge\sigma_m)=t-s$, so step 4.1 yields $E[Y\exp(i\theta(M_t-M_s)+\frac{\theta^2}{2}(t-s))1_{\{\sigma_m\ge t\}}]=E[Y1_{\{\sigma_m\ge t\}}]$ for the bounded $Y$; since $\sigma_m\uparrow\infty$ almost surely and the integrands are bounded by $e^{\theta^2(t-s)/2}$, dominated convergence in $m$ gives $E[Y\exp(i\theta(M_t-M_s)+\frac{\theta^2}{2}(t-s))]=E[Y]$, that is $E[e^{i\theta(M_t-M_s)}\mid\mathcal F_s]=e^{-\theta^2(t-s)/2}$ almost surely, proving clause 1. [F6, step 4.1]
 
6.1 Clause 2: the modulus of $Z_t$ is the deterministic number $e^{\theta^2t/2}<\infty$, so $Z_t$ is integrable; for $s\le t$ the identity of clause 1 implies $E[Z_t\mid\mathcal F_s]=Z_sE[e^{i\theta(M_t-M_s)}e^{\frac{\theta^2}{2}(t-s)}\mid\mathcal F_s]=Z_s$, because $Z_s$ is $\mathcal F_s$-measurable of deterministic modulus and may be pulled out of the conditional expectation; the real and imaginary parts of a complex martingale are real martingales, and their moduli are bounded by the modulus of $Z$. [F1, F6, step 5.1]
 
7.1 Boundary and consistency cases: for $\theta=0$ both clauses reduce to the trivial statements $E[1\mid\mathcal F_s]=1$ and $Z\equiv1$; for $s=t$ the conditional identity is the known-variable identity and the integrand is $1$; for $t-s=0$ the Gaussian factor is $1$; the case $M\equiv0$ (so $[M]_t=0\ne t$ for $t>0$) is outside the hypothesis and is not claimed; a deterministic clock with a positive constant $c$, $[M]_t=ct$, is handled by rescaling $\theta$, and the proof above treats $c=1$; the local martingale need not itself be a martingale, and the localization of steps 1.1 and 5.1 is exactly where that hypothesis is used; the definitions are componentwise, so no complex-valued stochastic integration is invoked, and no general integration against $M$ is used anywhere in the argument. AC enters only through [F7]. [F1, F7, step 5.1, step 6.1] ∎

## Source notes

Van der Vaart, Theorem 6.1, proves Lévy's characterization by showing that the characteristic exponential of a continuous local martingale with clock $t$ is a martingale. The proof above is the direct partition-Taylor argument: it localizes at the level-and-time stopping $\sigma_m$, expands the exponential along partitions of a bounded martingale, uses the martingale property only through conditional centering of increments, and identifies the compensator with the deterministic clock through the weighted pullback of the quadratic variation. No integration against the general continuous local martingale $M$ is used, so no general local-martingale integral is introduced.
