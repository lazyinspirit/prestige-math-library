---
id: lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t
kind: lemma
title: "Characteristic exponential for a continuous local martingale with deterministic clock"
status: published
origin: pipeline
deps: [def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-quadratic-covariation-of-brownian-ito-processes, def-quadratic-variation-along-a-partition-sequence, def-convergence-in-probability, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, def-continuous-time-stopping-time, def-continuity-real, thm-heine-cantor-r, cor-cauchy-schwarz-for-random-variables, thm-dominated-convergence, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, cor-taylor-remainder-bound, def-taylor-polynomial-and-remainder, thm-optional-sampling-for-bounded-stopping-times, thm-uniform-integrability-of-conditional-expectations-of-one-variable, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, thm-extreme-value-r, thm-heine-borel-r]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
verification:
  audited: 2026-09-22
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

**Given:** The Statement's AC, filtration, continuous local martingale $M$, deterministic clock and real $\theta$.

[F1] The localizing sequence must increase to infinity; stopping requires separately establishing the martingale property of each doubly stopped piece. [[def-continuous-time-adapted-process-and-martingale]] [[def-continuous-time-filtration-and-all-pairs-martingale]] [[def-continuous-time-stopping-time]]

[F2] Optional sampling applies to the finite discrete-time martingale obtained by sampling deterministic grid points. Conditional expectations of one integrable terminal variable are uniformly integrable, and uniform integrability plus convergence in probability gives $L^1$ convergence. [[thm-optional-sampling-for-bounded-stopping-times]] [[thm-uniform-integrability-of-conditional-expectations-of-one-variable]] [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]]

[F3] The clock assumption concerns both step and partial-increment sums, uniformly in probability, along every deterministic vanishing-mesh partition sequence. Suprema use measurable continuous-path normalizations. [[def-quadratic-covariation-of-brownian-ito-processes]] [[def-quadratic-variation-along-a-partition-sequence]] [[def-convergence-in-probability]]

[F4] Conditional expectations are identified by event integrals. A bounded measurable test variable can replace an event indicator: first use linearity for simple variables, then bounded simple approximations and dominated convergence. Consequently bounded known factors can be pulled out, and martingale increments have zero expectation against every bounded earlier-measurable factor. Complex identities are obtained componentwise. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]] [[thm-dominated-convergence]]

[F5] Real Taylor's remainder bound applied separately to sine, cosine and the real exponential gives, for $|z|\le2m$ and $0\le h\le T$, $$e^{i\theta z+\theta^2h/2}=1+i\theta z+\tfrac{\theta^2}{2}(h-z^2)+R(z,h),\qquad |R(z,h)|\le C_{\theta,m,T}(|z|^3+h|z|+h^2+h|z|^2).$$ Indeed $e^{i\theta z}=1+i\theta z-\theta^2z^2/2+O(|z|^3)$ and $e^{\theta^2h/2}=1+\theta^2h/2+O(h^2)$; multiply these equalities on the indicated bounded rectangle. [[cor-taylor-remainder-bound]] [[def-taylor-polynomial-and-remainder]]

[F6] Dominated convergence and Cauchy--Schwarz give the estimates below. Continuous paths are bounded, attain their extrema, and are uniformly continuous on a compact interval. [[thm-dominated-convergence]] [[cor-cauchy-schwarz-for-random-variables]] [[thm-extreme-value-r]] [[thm-heine-borel-r]] [[thm-heine-cantor-r]] [[def-continuity-real]]

[F7] AC supplies the conditional-expectation interface and the inherited countable-choice use in uniform continuity. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

## Proof

**Proof technique:** direct.

1.1 First handle exceptional paths without imposing completeness on the original filtration. There is a measurable null set $D\in\mathcal F$ outside which $M$ is continuous and $M_0=0$. Put $\mathcal G_t=\{A\mathbin\triangle N:A\in\mathcal F_t,\ N\in\mathcal F,\ N\subseteq D\}$. This is a sub-sigma-algebra of $\mathcal F$: complements preserve the symmetric difference, and a countable union differs from the union of the $A$'s by a measurable subset of $D$. AC permits choosing representations for such a countable family. The $\mathcal G_t$ are increasing and contain $D$. Set $\widetilde M_t=M_t$ off $D$ and $0$ on $D$. It is $\mathcal G_t$-adapted, starts at zero everywhere, and has everywhere continuous paths. Each original localizer $\tau_k$ is a $\mathcal G_t$-stopping time. The process $\widetilde M^{\tau_k}$ agrees off $D$ with $M^{\tau_k}-M_0$, and its stopped values are measurable: a continuous adapted process evaluated at $t\wedge\tau_k$ is the pointwise limit of the finite sums obtained by rounding that time upward on deterministic grids of $[0,t]$. Every $\mathcal G_s$ event differs from an $\mathcal F_s$ event on $D$, so their integrals agree. Thus $\widetilde M^{\tau_k}$ is a $\mathcal G_t$ martingale. The clock assumption is unchanged by agreement off $D$. We work with this normalized process and filtration until the final descent. [F1, F3, F4, F7]

1.2 Here is the stopping argument needed for these continuous martingales. Let $X$ be an everywhere continuous martingale for $\mathcal G_t$, and $\rho$ a stopping time. Fix $0\le s<t$; take finite deterministic grids of $[0,t]$ containing $s$ whose mesh tends to zero, and round $\rho\wedge t$ upward to a grid point $\rho_n$. Its grid stopping test is $\{\rho_n\le u\}=\{\rho\le u\}$ for grid points $u<t$, so finite-grid optional sampling applies. Write $V_n=X_{\rho_n}$ and $W_n=X_{s\wedge\rho_n}$. Each is a conditional expectation of the single terminal variable $X_t$ with respect to its grid stopped sigma-algebra; hence each sequence is uniformly integrable. Continuity gives $V_n\to X_{t\wedge\rho}$ and $W_n\to X_{s\wedge\rho}$ pointwise, therefore in probability and then in $L^1$. The finite-grid stopped martingale identity is $E[1_A V_n]=E[1_A W_n]$ for $A\in\mathcal G_s$: telescope the increments after $s$, multiplied by $1_{\{\rho_n>u\}}$, whose factor is measurable at the left grid endpoint $u$. Passing to $L^1$ limits gives the same identity for $X^\rho$. Its adaptedness follows by the upward-grid approximation on each $[0,t]$. Thus $X^\rho$ is a martingale without right continuity of the filtration. [F1, F2, F4, F6]

2.1 Suppress the tilde for now. Define $\sigma_m=\inf\{u\ge0:|M_u|\ge m\}\wedge m$, $m\ge1$. For $t<m$, its stopping event is $\{\max_{0\le u\le t}|M_u|\ge m\}$; for $t\ge m$ it is $\Omega$. The maximum is attained and equals the supremum over a countable dense set together with the endpoints, so the event belongs to $\mathcal G_t$; at $t=0$ it is empty. Continuity and $M_0=0$ give $|M_{t\wedge\sigma_m}|\le m$. Compact boundedness gives $\sigma_m\uparrow\infty$ on every path. Apply step 1.2 to each martingale $M^{\tau_k}$ and $\rho=\sigma_m$: $M^{\tau_k\wedge\sigma_m}$ is a martingale and is bounded by $m$. Dominated convergence as $k\to\infty$ proves $N:=M^{\sigma_m}$ is a bounded continuous martingale. The original $\tau_k$, not $\sigma_m\wedge\tau_k$, is the sequence that localizes this stopped process. [F1, F4, F6, step 1.1, step 1.2]

3.1 For a deterministic partition of $[0,T]$, the partial-increment square sum of $N$ at $u$ is exactly the partial-increment square sum of $M$ at $u\wedge\sigma_m$. Hence its uniform error against $u\wedge\sigma_m$ is bounded by the original uniform clock error. Its step version differs by at most the squared maximal oscillation of $N$ on partition intervals, which tends to zero pathwise. Thus the stopped clock is $u\wedge\sigma_m$ uniformly in probability. A partition sequence on $[s,t]$ can be extended by vanishing-mesh deterministic partitions on $[0,s]$ and $[t,T]$; subtracting the sums at $s$ gives the same assertion there, with clock $q(u)=(u\wedge\sigma_m)-(s\wedge\sigma_m)$. [F3, F6, step 2.1]

4.1 Fix $0\le s<t\le T$. On a partition $s=u_0<\cdots<u_J=t$ put $z_j=N_{u_{j+1}}-N_{u_j}$, $h_j=(u_{j+1}\wedge\sigma_m)-(u_j\wedge\sigma_m)$, and $A(u)=\exp(i\theta(N_u-N_s)+\theta^2q(u)/2)$. The process $A$ is continuous on $[s,t]$, adapted there and bounded in modulus by $K=e^{\theta^2T/2}$. In particular $A(s)=1$ and $A(u_{j+1})=A(u_j)e^{i\theta z_j+\theta^2h_j/2}$. [F1, step 2.1, step 3.1]

4.2 To justify weighted clock convergence, first take a fixed deterministic grid $s=r_0<\cdots<r_l=t$ and bounded random coefficients $\lambda_a$. Assign coefficient $\lambda_a$ when the left endpoint $u_j$ lies in $[r_a,r_{a+1})$. For sufficiently fine partitions each cell crosses at most one of the finitely many distinct block boundaries. Inserting the boundaries changes each affected squared increment by at most twice the squared oscillation of $N$ on that cell, by $(a+b)^2-a^2-b^2=2ab$. Reassigning split increments to their blocks costs at most another constant times that squared oscillation. The total weighted error is at most $C_l\max_a\|\lambda_a\|_\infty\,\omega_N(\operatorname{mesh}(\pi_n))^2\to0$ pathwise, where $\omega_N$ is the modulus of continuity on $[s,t]$. On the refined partition each block sum converges in probability to $q(r_{a+1})-q(r_a)$ by step 3.1. Finite addition and bounded multiplication therefore prove convergence of the weighted sums to $\sum_a\lambda_a(q(r_{a+1})-q(r_a))$. This argument does not require the coefficients to be independent of the increments. [F3, F6, step 3.1]

5.1 Write $Q_n=\sum_jz_j^2$, $X_j=N_{u_j}-N_s$, and $L_n=\sum_jX_jz_j$. The identity $Q_n=(N_t-N_s)^2-2L_n$ is a finite telescope. For $j<k$, the factors $X_jz_jX_k$ are bounded and $\mathcal G_{u_k}$-measurable; testing the centered increment $z_k$ proves orthogonality. Similarly $Ez_jz_k=0$. Therefore $EQ_n=E(N_t-N_s)^2\le4m^2$ and $EL_n^2=\sum_jE(X_j^2z_j^2)\le4m^2EQ_n\le16m^4$. Squaring the telescope with $(a+b)^2\le2a^2+2b^2$ yields $EQ_n^2\le160m^4$. The maximal increment $d_n=\max_j|z_j|$ tends to zero pathwise and is at most $2m$, so $Ed_n^2\to0$. Cauchy--Schwarz gives $E(d_nQ_n)\to0$. Since $0\le h_j\le\operatorname{mesh}(\pi_n)$ and $\sum_jh_j\le T$, the four remainder sums of [F5] are bounded respectively by $d_nQ_n$, $Td_n$, $T\operatorname{mesh}(\pi_n)$ and $\operatorname{mesh}(\pi_n)Q_n$. Consequently $E|\sum_jA(u_j)R(z_j,h_j)|\to0$. [F4, F5, F6, step 4.1]

6.1 Now take the left-endpoint staircase $A_l$ of the continuous process $A$ on deterministic grids with mesh tending to zero. Put $e_l=\sup_{[s,t]}|A_l-A|$, with the endpoint $t$ assigned $A(t)$. Then $e_l\to0$ pathwise and $e_l\le2K$. The error in the weighted square sums is at most $e_l Q_n$ and the error in their proposed limits is at most $Te_l$. Explicitly, for $R>0$, $P(e_lQ_n>\varepsilon)\le P(Q_n>R)+P(e_l>\varepsilon/R)\le4m^2/R+P(e_l>\varepsilon/R)$. Choose $R$ first, then $l$, then $n$ for the fixed staircase convergence of step 4.2. This proves $\sum_jA(u_j)z_j^2\to\int_s^t A(u)1_{\{u<\sigma_m\}}\,du$ in probability. The integral is the ordinary pathwise integral up to $t\wedge\sigma_m$, zero when $\sigma_m\le s$; the sums $\sum_jA(u_j)h_j$ converge to it pathwise, their error being at most $T\omega_A(\operatorname{mesh}(\pi_n))$. Thus $S_n=\sum_jA(u_j)(h_j-z_j^2)\to0$ in probability. Since $|S_n|\le K(T+Q_n)$, its second moments are uniformly bounded. For each $\varepsilon>0$, Cauchy--Schwarz gives $E|S_n|\le\varepsilon+(E|S_n|^2)^{1/2}P(|S_n|>\varepsilon)^{1/2}$. Taking $n\to\infty$, then $\varepsilon\downarrow0$, gives $E|S_n|\to0$. [F3, F6, step 4.1, step 5.1, step 4.2]

7.1 Let $Y$ be any bounded $\mathcal G_s$-measurable real or complex variable. For each $j$, the factor $YA(u_j)$ is bounded and $\mathcal G_{u_j}$-measurable, so $E[YA(u_j)z_j]=0$. Telescope the identity in step 4.1 and apply [F5]. The sum of the linear terms has zero expectation; the expectation of the compensator term tends to zero by step 6.1 and that of the remainders by step 5.1. The left side does not depend on the partition, so $$E\bigl[Y\exp(i\theta(N_t-N_s)+\theta^2((t\wedge\sigma_m)-(s\wedge\sigma_m))/2)\bigr]=E[Y].$$ [F4, F5, step 4.1, step 5.1, step 6.1]

8.1 Let $m\to\infty$ in step 7.1. The stopped increments and clocks converge almost surely to $\widetilde M_t-\widetilde M_s$ and $t-s$, while the exponential modulus is at most $e^{\theta^2(t-s)/2}$. Dominated convergence proves the conditional increment identity for $\widetilde M$ and $\mathcal G_s$. In particular it holds for indicators of original $\mathcal F_s$ events. Since $M=\widetilde M$ off $D$, and the original fixed-time values are $\mathcal F_t$-measurable, these event tests establish exactly clause 1 for the original process and filtration. [F4, F6, step 1.1, step 7.1]

9.1 The original $Z_t$ is $\mathcal F_t$-measurable with deterministic modulus $e^{\theta^2t/2}$. Using the bounded known factor $Z_s$ in clause 1 gives $E[Z_t\mid\mathcal F_s]=Z_s$. Real and imaginary parts give clause 2. For $s=t$, including $s=t=0$, the increment exponential is $1$; for $\theta=0$, $Z\equiv1$. The unit clock is the stated normalization; the identically zero process is excluded by the positive-time clock hypothesis. No converse is asserted and no general stochastic integral is introduced. AC has the uses in [F7] and step 1.1. [F4, F7, step 8.1] ∎



## Source notes

Van der Vaart, Theorem 6.1, printed p. 119, proves the characteristic-exponential identity using general Ito calculus. The stopped-martingale proof in Theorem 4.21, printed pp. 41--42, uses finite grids and an integrability limit. Here those ingredients are proved directly using only finite-grid optional sampling, terminal conditional-expectation uniform integrability and the stated partition clock. The temporary enlargement by measurable subsets of one fixed null set is constructed explicitly and the final identity is tested against the original filtration; no usual-filtration hypothesis is added.
