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
in the sense of [[def-continuous-brownian-ito-process]].

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
 
[F3] **Scalar quadratic variation.** For a locally square-integrable predictable $H$, the step-convention sums of the local martingale $\int H\,dB$ satisfy $\sup_{t\le T}\bigl|\sum_{j:\,s_j\le t}\bigl(\int_{(s_j,s_{j+1}]}H\,dB\bigr)^2-\int_0^tH^2\,ds\bigr|\to0$ in probability, and the partial-increment convention has the same limit. [[thm-quadratic-variation-of-an-ito-integral]] [[def-quadratic-variation-along-a-partition-sequence]]
 
[F4] **Localized-integral interfaces.** For a locally square-integrable predictable $G$: the partial integral over $(u,v]$ is $\int 1_{(u,v]}G\,dB$; for finite energy, $E(\int_{(u,v]}G\,dB)^2=E\int_u^vG^2\,ds$ (isometry, applied to the restriction), and the integral vanishes on integrands that vanish $(\mathrm dt\otimes P)$-a.e.; the stopping identity identifies $(G\cdot B)_{t\wedge\sigma}$ with the integral of $G1_{(0,\sigma]}$; on the event $\{\tau_N\ge T\}$ the localized integral agrees with its stopped finite-energy piece; and continuous versions are indistinguishable. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F5] **Density of elementary integrands.** Every predictable $G$ with finite energy is a limit in $L^2(\mathrm dt\otimes P)$ of bounded elementary predictable integrands; a bounded elementary integrand is of the form $\sum_a\xi_a1_{(t_a,t_{a+1}]}$ with $\xi_a$ bounded and $\mathcal F_{t_a}$-measurable, and its integral is the corresponding finite combination of Brownian increments. [[thm-density-of-elementary-predictable-processes-in-predictable-l2]] [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]]
 
[F6] **Moments of ordinary Brownian sums.** For $0\le u<v$ and distinct coordinates $k\ne l$, conditional on $\mathcal F_u$ the two increments $B^k_v-B^k_u$ and $B^l_v-B^l_u$ are independent with laws $N(0,v-u)$; hence $E\bigl[(B^k_v-B^k_u)(B^l_v-B^l_u)\bigm|\mathcal F_u\bigr]=0$ and $E\bigl[(B^k_v-B^k_u)^2(B^l_v-B^l_u)^2\bigm|\mathcal F_u\bigr]=(v-u)^2$. [[def-d-dimensional-brownian-motion]] [[def-brownian-motion]] [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F7] **Discrete martingale-difference bounds.** For square-integrable martingale differences $D_1,\dots,D_J$ with respect to a filtration: $E\bigl(\sum_{j\le J}D_j\bigr)^2=\sum_{j\le J}ED_j^2$; the process $\bigl(\max_{j\le J}|{\sum_{i\le j}D_i}|\bigr)$ is controlled by Doob's $L^2$ inequality $E\max_{j\le J}\bigl|\sum_{i\le j}D_i\bigr|^2\le4E\bigl(\sum_{i\le J}D_i\bigr)^2$; and Chebyshev's inequality turns a bound on the second moment of a supremum into convergence in probability. [[lem-martingale-differences-are-orthogonal-in-l2]] [[thm-martingales-and-martingale-differences-correspond]] [[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] [[thm-doob-lp-maximal-inequality]] [[cor-chebyshev-inequality-for-random-variables]] [[thm-tower-property-of-conditional-expectation]]
 
[F8] **Cauchy--Schwarz, for sums and for expectations.** $|\sum_ja_jb_j|\le(\sum_ja_j^2)^{1/2}(\sum_jb_j^2)^{1/2}$ for reals, and $E|UV|\le(EU^2)^{1/2}(EV^2)^{1/2}$; for $f,g\in L^2(\mu)$ the $L^2$ Cauchy--Schwarz inequality $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$ holds. [[cor-cauchy-schwarz-for-random-variables]] [[cor-cauchy-schwarz-inequality-for-l-two]]
 
[F9] **Uniform continuity and the finite-variation estimate.** A continuous real function on the compact interval $[0,T]$ is uniformly continuous, so the maximal oscillation over the intervals of a vanishing-mesh partition tends to $0$; and for a pathwise absolutely continuous $A$ with $A_t=\int_0^ta_s\,ds$ one has $\sum_j|A_{s_{j+1}}-A_{s_j}|\le\int_0^T|a_s|\,ds<\infty$ for the given path. [[thm-heine-cantor-r]] [[def-continuity-real]]
 
[F10] **AC bookkeeping.** Choice is declared for the ambient conditional-expectation and $L^2$ interfaces and the density theorem; the localization times and approximation schemes used are canonical. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Finite-variation estimate: let $A_t=\int_0^ta_s\,ds$ be pathwise absolutely continuous and $Y$ continuous. For a partition of $[0,T]$, [F9] gives $\sum_j|A_{s_{j+1}}-A_{s_j}|\le\int_0^T|a_s|\,ds$ and $\max_j|Y_{s_{j+1}}-Y_{s_j}|\le\max_j\sup_{u,v\in I_j}|Y_u-Y_v|\to0$ along vanishing meshes, so $\bigl|\sum_j(A_{s_{j+1}}-A_{s_j})(Y_{s_{j+1}}-Y_{s_j})\bigr|\le\bigl(\max_j\sup_{u,v\in I_j}|Y_u-Y_v|\bigr)\int_0^T|a_s|\,ds\to0$ almost surely; the partial-increment convention obeys the same bound, so the cross sums of $(A,Y)$ converge to $0$ for every admissible sequence and $[A,Y]=0$. [F2, F9, given]
 
1.2 Bilinearity: for continuous $X_1,X_2,Y$ whose displayed covariations exist, the partial sums satisfy $\sum_j\Delta(X_1+X_2)_j\Delta Y_j=\sum_j\Delta X_{1,j}\Delta Y_j+\sum_j\Delta X_{2,j}\Delta Y_j$ exactly, and $[cX_1,Y]=c[X_1,Y]$ likewise; passing to the common probability limit gives $[X_1+X_2,Y]=[X_1,Y]+[X_2,Y]$ and $[cX_1,Y]=c[X_1,Y]$. By induction the same holds for finite sums, and by symmetry also in the second slot. [F2, given]
 
1.3 Same coordinate, general integrands: let $H,K$ be locally square-integrable predictable and $M_H=\int H\,dB$, $M_K=\int K\,dB$. For every interval $I=(u,v]$ of a partition, linearity of the integral gives $\int_I(H+K)\,dB=\int_IH\,dB+\int_IK\,dB$, hence the exact identity $\Delta M_H\Delta M_K=\tfrac12\bigl[(\Delta M_H+\Delta M_K)^2-(\Delta M_H)^2-(\Delta M_K)^2\bigr]$ with $\Delta M_H+\Delta M_K=\int_I(H+K)\,dB$. Summing over the partition and applying the scalar quadratic-variation limit [F3] to the three locally square-integrable integrands $H+K,H,K$ yields convergence in probability, uniformly in $t$, of the cross sums to $\tfrac12\bigl[\int_0^t(H+K)^2ds-\int_0^tH^2ds-\int_0^tK^2ds\bigr]=\int_0^tHK\,ds$, for the step convention; the partial-increment convention has the same limit by [F3]. Hence $\bigl[\int H\,dB,\int K\,dB\bigr]_t=\int_0^tHK\,ds$ for locally square-integrable predictable $H,K$. [F3, F4, given]
 
1.4 Distinct coordinates, bounded elementary integrands: after passing to a common deterministic refinement, write the bounded elementary integrands as $H=\sum_a\xi_a1_{(t_a,t_{a+1}]}$ and $K=\sum_b\eta_b1_{(t_b,t_{b+1}]}$, and let $k\ne l$. Write $a_j=\int_{I_j}H\,dB^k$, $b_j=\int_{I_j}K\,dB^l$ for the intervals $I_j=(s_j,s_{j+1}]$ of $\pi_n$ and $N_n(t)=\sum_{j:\,s_j\le t}a_jb_j$. Define $$\Delta_{j,a}B^k:= \begin{cases} B^k_{s_{j+1}\wedge t_{a+1}}-B^k_{s_j\vee t_a},&s_j\vee t_a<s_{j+1}\wedge t_{a+1},\\ 0,&s_j\vee t_a\ge s_{j+1}\wedge t_{a+1}, \end{cases}$$ and define $\Delta_{j,b}B^l$ analogously. Then the elementary-integral definition gives $a_j=\sum_a\xi_a\Delta_{j,a}B^k$ and $b_j=\sum_b\eta_b\Delta_{j,b}B^l$, so $N_n(T)=\sum_{a,b}\xi_a\eta_bC_n(a,b)$, where $C_n(a,b)=\sum_j\Delta_{j,a}B^k\Delta_{j,b}B^l$. [F5, F4]
 
2.1 Diagonal terms of step 1.4: for $a=b$, only the intervals $I_j$ meeting $(t_a,t_{a+1}]$ contribute; those interior to the block give $\Delta_{j,a}B^k\Delta_{j,a}B^l=\Delta_jB^k\Delta_jB^l$, while the at most two boundary intervals contribute at most $c^2|\Delta_jB^k||\Delta_jB^l|\le c^2\max_j|\Delta_jB^k|\max_j|\Delta_jB^l|$. The interior sum, indexed by the grid, is a martingale in the grid filtration: [F6] gives conditional mean zero for each difference $\Delta_jB^k\Delta_jB^l$, so [F7] (orthogonality of martingale differences) gives for its terminal second moment $E\bigl(\sum_j\Delta_jB^k\Delta_jB^l\bigr)^2=\sum_jE(\Delta_jB^k)^2(\Delta_jB^l)^2=\sum_j(s_{j+1}-s_j)^2\le\delta_n(t_{a+1}-t_a)$, and Doob's $L^2$ maximal inequality bounds the second moment of the supremum over the grid by four times that quantity; hence the interior sums converge to $0$ uniformly in $t$ in probability, and the at most two boundary terms vanish since they are bounded by $c^2\max_j|\Delta_jB^k|\max_j|\Delta_jB^l|$ and the maximal increments tend to $0$ almost surely by continuity of the Brownian path. Thus $\sup_t|C_n(a,a)(t)|\to0$ in probability for every diagonal pair. [F6, F7, F9, given]
 
2.2 Off-diagonal terms of step 1.4: for $a\ne b$ the blocks $(t_a,t_{a+1}]$ and $(t_b,t_{b+1}]$ are disjoint, so an interval $I_j$ contained in one of them contributes $\Delta_{j,a}B^k\Delta_{j,b}B^l=0$ because one factor vanishes; only the intervals containing a common boundary point of the two block partitions can contribute, and there are at most $2m_H+2m_K$ such intervals. On each of them $|\Delta_{j,a}B^k\Delta_{j,b}B^l|\le\max_j|\Delta_jB^k|\max_j|\Delta_jB^l|$, so $|C_n(a,b)|\le(2m_H+2m_K)\max_j|\Delta_jB^k|\max_j|\Delta_jB^l|\to0$ almost surely by path continuity, uniformly in $t$ by the same bound. [F9, F6, given]
 
3.1 Elementary case completed: combining steps 2.1 and 2.2, $N_n(T)=\sum_{a,b}\xi_a\eta_bC_n(a,b)\to0$ in probability, and the bounds of steps 2.1 and 2.2 hold simultaneously for all $t$ and all finitely many pairs $(a,b)$, so $\sup_{0\le t\le T}|N_n(t)|\le\sum_{a,b}|\xi_a\eta_b|\sup_t|C_n(a,b)(t)|\to0$ in probability. Hence for bounded elementary $H,K$ and $k\ne l$ the cross sums converge to the zero process for every admissible vanishing-mesh sequence, and the partial-increment convention obeys the same estimates; therefore $\bigl[\int H\,dB^k,\int K\,dB^l\bigr]=0$. [F2, F5, step 2.1, step 2.2]
 
4.1 Finite-energy approximation: for finite-energy predictable $H,K$ choose bounded elementary $H',K'$ with $\|H-H'\|_{L^2(\mathrm dt\otimes P)}\le\varepsilon$, $\|K-K'\|_{L^2(\mathrm dt\otimes P)}\le\varepsilon$ by [F5], and compare cross sums: with $a_j=\int_{I_j}(H-H')\,dB^k$ and $b_j=\int_{I_j}K'\,dB^l$, [F8] gives $\bigl|\sum_ja_jb_j\bigr|\le\bigl(\sum_ja_j^2\bigr)^{1/2}\bigl(\sum_jb_j^2\bigr)^{1/2}$, and [F4] gives $E\sum_ja_j^2=E\int_0^T(H-H')^2ds\le\varepsilon^2$ and $E\sum_jb_j^2=E\int_0^TK'^2ds\le2\|K\|^2$ for small $\varepsilon$; taking expectations and applying Cauchy--Schwarz inside the probability bound shows that replacing $H,K$ by $H',K'$ changes the cross sums by at most $C\varepsilon$ in $L^1$, uniformly in $n$ and $t$. Since the elementary cross sums converge to $0$ in probability by step 3.1, so do the cross sums of $H,K$, giving $\bigl[\int H\,dB^k,\int K\,dB^l\bigr]=0$ for all finite-energy predictable $H,K$ and $k\ne l$. [F4, F5, F8, step 3.1]
 
5.1 Localization: let $H,K$ be locally square-integrable predictable with canonical times $\tau_N$ and let $\rho_N:=\tau_N\wedge N$. On the event $\{\rho_N\ge T\}$ the localized integrals $M_H,M_K$ agree on $[0,T]$ with the finite-energy integrals of $H1_{(0,\rho_N]}$ and $K1_{(0,\rho_N]}$ by the stopping identity, so the cross sums coincide on that event; on the complement, whose probability tends to $0$ as $N\to\infty$ because $\rho_N\uparrow\infty$ almost surely, the cross sums are bounded by $Q_n(H)^{1/2}Q_n(K)^{1/2}$ from [F8], a quantity bounded in probability. Adding the two events and letting $N\to\infty$ gives $\bigl[\int H\,dB^k,\int K\,dB^l\bigr]=0$ for all locally square-integrable predictable $H,K$ and $k\ne l$. [F2, F4, F8, step 4.1]
 
6.1 General matrix: $M^i=\sum_kM^{ik}$ and $M^j=\sum_lM^{jl}$ are finite sums; by the bilinearity of step 1.2 applied repeatedly, and the existence of each pairwise covariation from steps 1.3 and 5.1, $\bigl[M^i,M^j\bigr]=\sum_{k,l}\bigl[M^{ik},M^{jl}\bigr]=\sum_k\int_0^{\cdot}\sigma^{ik}_s\sigma^{jk}_s\,ds + \sum_{k\ne l}0$, where the second sum is zero by step 5.1 applied to the locally square-integrable integrands $\sigma^{ik}$ and $\sigma^{jl}$; hence $[M^i,M^j]_t=\int_0^t(\sigma\sigma^{\mathsf T})^{ij}_s\,ds$. Every step was proved for an arbitrary deterministic vanishing-mesh sequence and for both conventions, so the existence clause of [F2] is met. [F1, F2, F4, step 1.2, step 1.3, step 5.1]
 
7.1 Drift parts contribute zero: the drift processes $A^i_t=\int_0^tb^i_s\,ds$ are pathwise absolutely continuous, so step 1.1 with $[F1]$ gives $[A^i,A^j]=0$ and $[A^i,Y]=0$ for every continuous $Y$, in particular for $Y=M^j$ and for $Y=B^k$. Therefore, using bilinearity [step 1.2] and $X^i=X^i_0+A^i+M^i$, $[X^i,X^j]=[A^i,A^j]+[A^i,M^j]+[M^i,A^j]+[M^i,M^j]=[M^i,M^j]=\int_0^{\cdot}(\sigma\sigma^{\mathsf T})^{ij}_s\,ds$. This proves clause 2 of the statement for all continuous $Y$, since the estimate of step 1.1 applies to an arbitrary continuous second factor. [F1, step 1.1, step 1.2, step 6.1]
 
8.1 Boundary and consistency cases: for $d=1$ and $m=1$ the formula reads $[X]_t=\int_0^t\sigma_s^2ds$, and taking $H=K=1$ in step 1.3 recovers the Brownian identity $[B,B]_t=t$; if $\sigma\equiv0$ (or $b\equiv0$), the corresponding integrals vanish and the formula returns the zero process, consistent with steps 1.1--1.2; if a coordinate is deterministic, both sides are $0$; at $t=0$ both sides vanish, since empty cross sums and empty integrals are $0$; and for a degenerate $d$-dimensional process with singular dispersion matrix the formula still holds matrix-wise, with no independence of the coordinates assumed. AC enters only through [F10], and the approximation/localization parameters are canonical, so no additional choice is consumed. [F2, F10, step 1.3, step 6.1, step 7.1] ∎

## Source notes

Van der Vaart, Section 5.8 and Theorem 5.64, proves for stochastic integrals with respect to a vector martingale that the covariation of $\int H\,dM$ and $\int K\,dN$ is $\int HK\,d[M,N]$, by reduction to elementary integrands and localization; the specialization to Brownian coordinates gives $d[B^k,B^l]=\delta_{kl}\,dt$ and hence the displayed matrix formula. The Brownian cross-coordinate estimate of steps 2.1 and 2.2 is proved here in full because the two sources state it only for their own partition families, and because the general integrands may depend on both coordinates, so the argument is organized through bounded elementary integrands and an $L^2$ density step rather than through a conditional-independence assertion at the level of general integrands.
