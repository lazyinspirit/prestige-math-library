---
id: thm-quadratic-covariation-of-brownian-ito-processes
kind: theorem
title: "Quadratic covariation of Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-continuous-brownian-ito-process, def-quadratic-covariation-of-brownian-ito-processes, def-quadratic-variation-along-a-partition-sequence, thm-quadratic-variation-of-an-ito-integral, def-d-dimensional-brownian-motion, def-brownian-motion, def-locally-square-integrable-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-density-of-elementary-predictable-processes-in-predictable-l2, def-continuous-time-adapted-process-and-martingale, thm-martingales-and-martingale-differences-correspond, lem-martingale-differences-are-orthogonal-in-l2, cor-absolute-value-and-powers-of-a-martingale-are-submartingales, thm-doob-lp-maximal-inequality, cor-chebyshev-inequality-for-random-variables, thm-tower-property-of-conditional-expectation, cor-cauchy-schwarz-for-random-variables, cor-cauchy-schwarz-inequality-for-l-two, thm-heine-cantor-r, def-continuity-real, def-convergence-in-probability, def-law-modification-and-indistinguishability-of-processes, def-continuous-time-stopping-time, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-natural-and-usual-augmented-brownian-filtrations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 5.8 and Theorem 5.64"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $B=(B^1,\dots,B^m)$ be a
standard $m$-dimensional Brownian motion and let $X=(X^1,\dots,X^d)$ be an
$\mathbb R^d$-valued continuous Brownian Ito process driven by $B$,
$$dX^i_t=b^i_t\,dt+\sum_{k=1}^m\sigma^{ik}_t\,dB^k_t, \qquad i=1,\dots,d,$$
in the sense of [[def-continuous-brownian-ito-process]], including its
progressive representative, usual-filtration, almost-sure coefficient-integrability and
vector-increment independence hypotheses. Indistinguishability and
measurable suprema use the full-event normalization convention of
[[def-quadratic-covariation-of-brownian-ito-processes]].
All coefficient path integrals below use zero outside the common measurable
probability-one event on which every drift is locally absolutely integrable
and every diffusion entry is locally square-integrable. Such an event is
obtained by intersecting the finitely many coefficient conditions at integer
horizons; its complement belongs to $\mathcal F_0$ under the usual conditions.
On this event, Cauchy–Schwarz makes every product
$\sigma^{ik}\sigma^{jk}$ locally integrable. The normalized covariance
integrals therefore have finite continuous paths and measurable time sections.

1. **Existence and value.** For every pair $i,j$ the quadratic covariation
   $[X^i,X^j]$ exists on every finite horizon in the sense of
   [[def-quadratic-covariation-of-brownian-ito-processes]], and for every
   $t\ge0$
   $$[X^i,X^j]_t=\sum_{k=1}^m\int_0^t\sigma^{ik}_s\sigma^{jk}_s\,ds =\int_0^t(\sigma\sigma^{\mathsf T})^{ij}_s\,ds$$
   up to indistinguishability, where $(\sigma\sigma^{\mathsf T})^{ij}=\sum_k\sigma^{ik}\sigma^{jk}$.
   In particular the real continuous Brownian Ito process
   $X_t=X_0+\int_0^tb_s\,ds+\int_0^t\sigma_s\,dB_s$ has
   $[X]_t=\int_0^t\sigma_s^2\,ds$.

2. **Finite-variation parts contribute nothing.** If $A$ is a continuous
   process whose paths are absolutely continuous,
   $A_t=\int_0^ta_s\,ds$, and $Y$ is any continuous process, then the
   covariation of $A$ with $Y$ exists and is the zero process. Consequently in
   the decomposition $X^i=X^i_0+\int_0^tb^i_s\,ds+\sum_k\int_0^t\sigma^{ik}_s\,dB^k_s$
   the drift part contributes zero cross sums against every continuous
   process, including against the driving Brownian coordinates.
## Facts & Assumptions

**Given:** AC, (H), an $m$-dimensional standard Brownian motion $B$, an $\mathbb R^d$-valued continuous Brownian Ito process $X$ with drift $b=(b^i)$ and dispersion matrix $\sigma=(\sigma^{ik})$, a finite horizon $T>0$, and an arbitrary deterministic partition sequence $(\pi_n)$ of $[0,T]$ with mesh $\delta_n\to0$.
 
[F1] **Class decomposition.** $X^i_t=X^i_0+A^i_t+M^i_t$ with the pathwise Lebesgue integral $A^i_t=\int_0^tb^i_s\,ds$ and the localized Ito integrals $M^{ik}:=\int_0^t\sigma^{ik}_s\,dB^k_s$, $M^i:=\sum_kM^{ik}$; every $M^{ik}$ is a continuous adapted process, unique up to indistinguishability, and $A^i$ is continuous and pathwise absolutely continuous. [[def-continuous-brownian-ito-process]] [[thm-localized-ito-integral]] [[def-continuity-real]]
 
[F2] **Definition of covariation.** $[U,V]$ exists on $[0,T]$ when the step-convention and partial-increment cross sums of a continuous pair $(U,V)$ converge, uniformly in probability on $[0,T]$, to one process for every deterministic vanishing-mesh partition sequence, and the object is unique when it exists; cross sums are bilinear in the pair, so exact partial-sum identities pass to limits, finite-variation parts contribute zero, and constants are invisible. [[def-quadratic-covariation-of-brownian-ito-processes]] [[def-convergence-in-probability]]
 
[F3] **Scalar quadratic variation.** For a locally square-integrable predictable $H$, the step-convention sums of the local martingale $\int H\,dB$ satisfy $\sup_{t\le T}\bigl|\sum_{j:\,s_{j+1}\le t}\bigl(\int_{(s_j,s_{j+1}]}H\,dB\bigr)^2-\int_0^tH^2\,ds\bigr|\to0$ in probability, and the partial-increment convention has the same limit. [[thm-quadratic-variation-of-an-ito-integral]] [[def-quadratic-variation-along-a-partition-sequence]]
 
[F4] **Localized-integral interfaces.** For a locally square-integrable predictable $G$: the partial integral over $(u,v]$ is $\int 1_{(u,v]}G\,dB$; for finite energy, $E(\int_{(u,v]}G\,dB)^2=E\int_u^vG^2\,ds$ (isometry, applied to the restriction), and the integral vanishes on integrands that vanish $(\mathrm dt\otimes P)$-a.e.; the stopping identity identifies $(G\cdot B)_{t\wedge\sigma}$ with the integral of $G1_{(0,\sigma]}$; on the event $\{\tau_N\ge T\}$ the localized integral agrees with its stopped finite-energy piece; and continuous versions are indistinguishable. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F5] **Density of elementary integrands.** Every predictable $G$ with finite energy is a limit in $L^2(\mathrm dt\otimes P)$ of bounded elementary predictable integrands; a bounded elementary integrand is of the form $\sum_a\xi_a1_{(t_a,t_{a+1}]}$ with $\xi_a$ bounded and $\mathcal F_{t_a}$-measurable, and its integral is the corresponding finite combination of Brownian increments. [[thm-density-of-elementary-predictable-processes-in-predictable-l2]] [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]]
 
[F6] **Moments of ordinary Brownian sums.** For $0\le u<v$ and distinct coordinates $k\ne l$, conditional on $\mathcal F_u$ the two increments $B^k_v-B^k_u$ and $B^l_v-B^l_u$ are independent with laws $N(0,v-u)$; hence $E\bigl[(B^k_v-B^k_u)(B^l_v-B^l_u)\bigm|\mathcal F_u\bigr]=0$ and $E\bigl[(B^k_v-B^k_u)^2(B^l_v-B^l_u)^2\bigm|\mathcal F_u\bigr]=(v-u)^2$. [[def-d-dimensional-brownian-motion]] [[def-brownian-motion]] [[def-continuous-brownian-ito-process]]
 
[F7] **Discrete martingale-difference bounds.** For square-integrable martingale differences $D_1,\dots,D_J$ with respect to a filtration: $E\bigl(\sum_{j\le J}D_j\bigr)^2=\sum_{j\le J}ED_j^2$; the process $\bigl(\max_{j\le J}|{\sum_{i\le j}D_i}|\bigr)$ is controlled by Doob's $L^2$ inequality $E\max_{j\le J}\bigl|\sum_{i\le j}D_i\bigr|^2\le4E\bigl(\sum_{i\le J}D_i\bigr)^2$; and $P(Z>\varepsilon)\le EZ^2/\varepsilon^2$ for nonnegative $Z$, directly from $\varepsilon^2 1_{\{Z>\varepsilon\}}\le Z^2$. [[lem-martingale-differences-are-orthogonal-in-l2]] [[thm-martingales-and-martingale-differences-correspond]] [[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] [[thm-doob-lp-maximal-inequality]] [[cor-chebyshev-inequality-for-random-variables]] [[thm-tower-property-of-conditional-expectation]]
 
[F8] **Cauchy--Schwarz, for sums and for expectations.** $|\sum_ja_jb_j|\le(\sum_ja_j^2)^{1/2}(\sum_jb_j^2)^{1/2}$ for reals, and $E|UV|\le(EU^2)^{1/2}(EV^2)^{1/2}$; for $f,g\in L^2(\mu)$ the $L^2$ Cauchy--Schwarz inequality $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$ holds. [[cor-cauchy-schwarz-for-random-variables]] [[cor-cauchy-schwarz-inequality-for-l-two]]
 
[F9] **Uniform continuity and the finite-variation estimate.** A continuous real function on the compact interval $[0,T]$ is uniformly continuous, so the maximal oscillation over the intervals of a vanishing-mesh partition tends to $0$; and for a pathwise absolutely continuous $A$ with $A_t=\int_0^ta_s\,ds$ one has $\sum_j|A_{s_{j+1}}-A_{s_j}|\le\int_0^T|a_s|\,ds<\infty$ for the given path. [[thm-heine-cantor-r]] [[def-continuity-real]]
 
[F10] **AC bookkeeping.** Choice is declared for the ambient conditional-expectation and $L^2$ interfaces and the density theorem; AC supplies the countably chosen elementary approximations and versions; the energy localization times are canonical. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.

1.1 Finite-variation estimate: let $A_t=\int_0^ta_s\,ds$ be pathwise absolutely continuous and $Y$ continuous. For a partition of $[0,T]$, [F9] gives $\sum_j|A_{s_{j+1}}-A_{s_j}|\le\int_0^T|a_s|\,ds$ and $\max_j|Y_{s_{j+1}}-Y_{s_j}|\le\max_j\sup_{u,v\in I_j}|Y_u-Y_v|\to0$ along vanishing meshes, so $\bigl|\sum_j(A_{s_{j+1}}-A_{s_j})(Y_{s_{j+1}}-Y_{s_j})\bigr|\le\bigl(\max_j\sup_{u,v\in I_j}|Y_u-Y_v|\bigr)\int_0^T|a_s|\,ds\to0$ almost surely; the partial-increment convention obeys the same bound, so the cross sums of $(A,Y)$ converge to $0$ for every admissible sequence and $[A,Y]=0$. [F2, F9, given]

1.2 Bilinearity: for continuous $X_1,X_2,Y$ whose displayed covariations exist, the partial sums satisfy $\sum_j\Delta(X_1+X_2)_j\Delta Y_j=\sum_j\Delta X_{1,j}\Delta Y_j+\sum_j\Delta X_{2,j}\Delta Y_j$ exactly, and $[cX_1,Y]=c[X_1,Y]$ likewise; passing to the common probability limit gives $[X_1+X_2,Y]=[X_1,Y]+[X_2,Y]$ and $[cX_1,Y]=c[X_1,Y]$. By induction the same holds for finite sums, and by symmetry also in the second slot. [F2, given]

1.3 Same coordinate, general integrands: let $H,K$ be locally square-integrable predictable and $M_H=\int H\,dB$, $M_K=\int K\,dB$. For every interval $I=(u,v]$ of a partition, linearity of the integral gives $\int_I(H+K)\,dB=\int_IH\,dB+\int_IK\,dB$, hence the exact identity $\Delta M_H\Delta M_K=\tfrac12\bigl[(\Delta M_H+\Delta M_K)^2-(\Delta M_H)^2-(\Delta M_K)^2\bigr]$ with $\Delta M_H+\Delta M_K=\int_I(H+K)\,dB$. Summing over the partition and applying the scalar quadratic-variation limit [F3] to the three locally square-integrable integrands $H+K,H,K$ yields convergence in probability, uniformly in $t$, of the cross sums to $\tfrac12\bigl[\int_0^t(H+K)^2ds-\int_0^tH^2ds-\int_0^tK^2ds\bigr]=\int_0^tHK\,ds$, for the step convention; the partial-increment convention has the same limit by [F3]. Hence $\bigl[\int H\,dB,\int K\,dB\bigr]_t=\int_0^tHK\,ds$ for locally square-integrable predictable $H,K$. [F3, F4, given]

1.4 Distinct coordinates, bounded elementary integrands: take $k\ne l$, and a common elementary coefficient partition for $H,K$ with $L$ blocks and an a.s. deterministic coefficient bound $C$. Refine $\pi_n$ by that fixed partition, obtaining $0=r_0<\cdots<r_J=T$ with mesh at most $\delta_n$. On $(r_j,r_{j+1}]$ the coefficients $\alpha_j,\beta_j$ are $\mathcal F_{r_j}$-measurable and bounded by $C$. The refined cross sum has increments $D_j=\alpha_j\beta_j(B^k_{r_{j+1}}-B^k_{r_j})(B^l_{r_{j+1}}-B^l_{r_j})$, $0\le j<J$. By [F6], their conditional means given $\mathcal F_{r_j}$ vanish and $ED_j^2\le C^4(r_{j+1}-r_j)^2$. Thus $S_q=\sum_{0\le j<q}D_j$, $0\le q\le J$, is a square-integrable martingale with $S_0=0$. Orthogonality and discrete Doob, extending it constantly after $J$ if necessary, give $E\max_{q\le J}|S_q|^2\le4C^4\delta_n T$. Therefore the refined step cross sums tend uniformly to zero in probability. The coefficients may depend on both Brownian coordinates; only the vector increment's independence of the past is used. [F4, F5, F6, F7]

1.5 For any continuous pair of integral paths $U,V$, the partial-increment cross sum differs from the step cross sum by $(U_t-U_{s_{j(t)}})(V_t-V_{s_{j(t)}})$ on its final interval. Its supremum is bounded by $\omega_U(\delta_n)\omega_V(\delta_n)\to0$ on their common continuity event. The measurable-supremum convention of [F2] makes this an almost-sure error bound and therefore an error tending to zero in probability. [F2, F9]

2.1 Refinement discrepancy: for sufficiently large $n$, a $\pi_n$ interval crosses at most one fixed coefficient boundary. Let $\omega_k(\delta)$ and $\omega_l(\delta)$ be the path moduli of the two Brownian coordinates on $[0,T]$. On a crossing interval, each original integral increment has absolute value at most $2C$ times its Brownian modulus, so the original cross product is bounded by $4C^2\omega_k(\delta_n)\omega_l(\delta_n)$. The two refined cross products together are bounded by $2C^2\omega_k(\delta_n)\omega_l(\delta_n)$. This also covers an intermediate time when only one refined increment has been completed. Hence the absolute difference between the original and refined step cross sums is uniformly bounded by $6LC^2\omega_k(\delta_n)\omega_l(\delta_n)$, which tends to zero almost surely by [F9]. This estimate uses interval oscillations, not the absolute full-interval increments, which could cancel. [F5, F9, step 1.4]

3.1 By steps 1.4 and 2.1 and the triangle/union bound, the original step cross sums for bounded elementary $H,K$ in distinct coordinates tend uniformly to zero in probability. Step 1.5 proves the same for partial-increment sums. Thus the two integral processes have zero covariation for every deterministic vanishing-mesh partition sequence. [F2, step 1.4, step 2.1, step 1.5]

4.1 Finite-energy approximation: write $C_n(H,K)(t)$ for the step cross sum of the two integral processes. Choose bounded elementary $H',K'$ with respective $L^2(\mathrm dt\otimes P)$ errors at most $\eta>0$, using [F5] and [F10]. Bilinearity gives $C_n(H,K)-C_n(H',K')=C_n(H-H',K)+C_n(H',K-K')$. For either term, finite-sum Cauchy–Schwarz bounds the supremum over completed partial sums by the product of the two terminal quadratic sums' square roots. Taking expectation and using [F4], [F8] bounds the expected supremum of the difference by $\eta\|K\|_2+(\|H\|_2+\eta)\eta$, uniformly in $n$. This also covers $K=0$ and needs no bound of the form $\|K'\|_2^2\le2\|K\|_2^2$. The nonnegative indicator inequality bounds the approximation probability by this expectation divided by its error threshold. At fixed $\eta$ the elementary error vanishes by step 3.1; then let $\eta\downarrow0$. Step 1.5 handles partial increments. Thus distinct-coordinate covariation vanishes for finite-energy predictable integrands. [F4, F5, F8, F10, step 1.5, step 3.1]

5.1 Localization: let $\tau_N^H,\tau_N^K$ be the respective canonical energy stopping times, $N\ge1$, and put $\rho_N=\tau_N^H\wedge\tau_N^K$. These are nondecreasing stopping times tending to infinity almost surely, and the expected energies of both $H1_{(0,\rho_N]}$ and $K1_{(0,\rho_N]}$ are at most $N$. By [F4], on $\{\rho_N\ge T\}$ and a common probability-one agreement event the two original integrals equal their finite-energy stopped integrals on $[0,T]$. For any error threshold $\varepsilon$, the original cross-sum error probability is at most $P(\rho_N<T)$ plus the stopped cross-sum error probability. The latter tends to zero by step 4.1 for fixed $N$; the former tends to zero as $N\to\infty$. No bound on the cross sum on the exceptional event is needed. This proves zero covariation for locally square-integrable integrands in distinct coordinates, for both conventions. Positive indices are reindexed by $N=j+1$ when required. [F2, F4, step 4.1]

6.1 General matrix: $M^i=\sum_kM^{ik}$ and $M^j=\sum_lM^{jl}$ are finite sums; by the bilinearity of step 1.2 applied repeatedly, and the existence of each pairwise covariation from steps 1.3 and 5.1, $\bigl[M^i,M^j\bigr]=\sum_{k,l}\bigl[M^{ik},M^{jl}\bigr]=\sum_k\int_0^{\cdot}\sigma^{ik}_s\sigma^{jk}_s\,ds + \sum_{k\ne l}0$, where the second sum is zero by step 5.1 applied to the locally square-integrable integrands $\sigma^{ik}$ and $\sigma^{jl}$; hence $[M^i,M^j]_t=\int_0^t(\sigma\sigma^{\mathsf T})^{ij}_s\,ds$. Every step was proved for an arbitrary deterministic vanishing-mesh sequence and for both conventions, so the existence clause of [F2] is met. [F1, F2, F4, step 1.2, step 1.3, step 5.1]

7.1 Drift parts contribute zero: the drift processes $A^i_t=\int_0^tb^i_s\,ds$ are pathwise absolutely continuous, so step 1.1 with $[F1]$ gives $[A^i,A^j]=0$ and $[A^i,Y]=0$ for every continuous $Y$, in particular for $Y=M^j$ and for $Y=B^k$. Therefore, using bilinearity [step 1.2] and $X^i=X^i_0+A^i+M^i$, $[X^i,X^j]=[A^i,A^j]+[A^i,M^j]+[M^i,A^j]+[M^i,M^j]=[M^i,M^j]=\int_0^{\cdot}(\sigma\sigma^{\mathsf T})^{ij}_s\,ds$. This proves clause 2 of the statement for all continuous $Y$, since the estimate of step 1.1 applies to an arbitrary continuous second factor. [F1, step 1.1, step 1.2, step 6.1]

8.1 Boundary and consistency cases: for $d=1$ and $m=1$ the formula reads $[X]_t=\int_0^t\sigma_s^2ds$, and taking $H=K=1$ in step 1.3 recovers the Brownian identity $[B,B]_t=t$; if $\sigma\equiv0$, only the drift remains and its covariation is zero; if $b\equiv0$, only the drift term vanishes and the stochastic covariation generally remains nonzero (Brownian motion is the simplest example); at $t=0$ both sides vanish, since empty cross sums and empty integrals are $0$; and for a degenerate $d$-dimensional process with singular dispersion matrix the formula still holds matrix-wise, with no independence of the coordinates assumed. AC enters only through [F10], which supplies the approximations and versions; the energy stopping times are canonical. [F2, F10, step 1.3, step 6.1, step 7.1] ∎

## Source notes

Van der Vaart, Theorem 5.64, identifies covariation by partition limits; Lemma 5.77 gives the stochastic-integral covariation rule for a locally bounded predictable integrand. The arbitrary-partition, arbitrary locally square-integrable Brownian case here is proved directly by the conditional vector-increment estimate, explicit refinement error, finite-energy approximation and common localization. No independence of the general stochastic integrals is assumed.
