---
id: thm-integration-by-parts-for-brownian-ito-processes
kind: theorem
title: "Integration by parts for Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-continuous-brownian-ito-process, def-quadratic-covariation-of-brownian-ito-processes, thm-quadratic-covariation-of-brownian-ito-processes, def-quadratic-variation-along-a-partition-sequence, thm-quadratic-variation-of-an-ito-integral, def-locally-square-integrable-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, lem-adapted-continuous-processes-are-progressively-measurable, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-density-of-elementary-predictable-processes-in-predictable-l2, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, thm-heine-cantor-r, def-continuity-real, def-convergence-in-probability, def-law-modification-and-indistinguishability-of-processes, cor-cauchy-schwarz-for-random-variables, thm-dominated-convergence, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-partition-and-refinement]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), equation (5.63)"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let
$X=X_0+\int_0^{\cdot}b^X_s\,ds+\int_0^{\cdot}\xi_s\,dB_s$ and
$Y=Y_0+\int_0^{\cdot}b^Y_s\,ds+\int_0^{\cdot}\eta_s\,dB_s$ be real continuous
Brownian Ito processes over the same Brownian motion $B$ and filtration
[[def-continuous-brownian-ito-process]]. Define the **differential integrals**
$$\int_0^tX_s\,dY_s:=\int_0^tX_sb^Y_s\,ds+\int_0^tX_s\eta_s\,dB_s, \qquad \int_0^tY_s\,dX_s:=\int_0^tY_sb^X_s\,ds+\int_0^tY_s\xi_s\,dB_s,$$
where the stochastic terms are the localized Ito integrals of the predictable
locally square-integrable integrands $X\eta$ and $Y\xi$
[[thm-localized-ito-integral]] and the Lebesgue terms are pathwise integrals.
Then, up to indistinguishability, for every $t\ge0$
$$X_tY_t=X_0Y_0+\int_0^tX_s\,dY_s+\int_0^tY_s\,dX_s+[X,Y]_t,$$
with $[X,Y]$ the quadratic covariation of
[[thm-quadratic-covariation-of-brownian-ito-processes]]. In particular
$X_tY_t-[X,Y]_t$ is a continuous local martingale and, when both integrals have
finite energy on $[0,t]$, a true martingale identity holds in expectation.

## Facts & Assumptions

**Given:** AC, (H), two real continuous Brownian Ito processes $X,Y$ over $B$ with decompositions $X=X_0+A^X+M^X$, $Y=Y_0+A^Y+M^Y$, $A^X_t=\int_0^tb^X_s\,ds$, $M^X=\int\xi\,dB$, $A^Y_t=\int_0^tb^Y_s\,ds$, $M^Y=\int\eta\,dB$, a finite horizon $T>0$, and an arbitrary deterministic partition sequence $(\pi_n)$ of $[0,T]$ with mesh $\delta_n\to0$.
 
[F1] **Continuity, adaptedness and predictability of the integrands.** $X$ and $Y$ are adapted with continuous paths; a continuous adapted process is predictable, and products and scalar multiples of predictable processes are predictable. Consequently $X\eta$ and $Y\xi$ are predictable; they are locally square-integrable because the continuous processes $X,Y$ are locally bounded and $\eta,\xi$ are locally square-integrable. [[def-continuous-brownian-ito-process]] [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F2] **Localized-integral interfaces.** For a locally square-integrable predictable $G$: the integral over a subinterval $I$ of $[0,T]$ is the localized integral of $G1_I$; if $G$ has finite energy then $E(\int_0^TG\,dB)^2=E\int_0^TG^2ds$, the elementary defining sums converge to the integral, the stopping identity holds, and continuous versions are indistinguishable. Moreover (e) **Bounded-multiplier linearity.** If $c$ is bounded and $\mathcal F_u$-measurable for a fixed $u$ and $G$ is locally square-integrable predictable, then the localized integral of $cG$ over an interval $I\subseteq(u,\infty)$ equals $c\int_IG\,dB$: for finite energy this is the elementary case plus the $L^2$ isometry and density, and the locally square-integrable case follows by stopping and the uniqueness clause of the same item. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-ito-integral-for-square-integrable-predictable-processes]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]]
 
[F3] **Existence and value of the covariation.** For the class processes $X,Y$ the covariation $[X,Y]$ exists on $[0,T]$ in the sense of [[def-quadratic-covariation-of-brownian-ito-processes]], the cross-increment sums converge to it uniformly in probability along every deterministic vanishing-mesh sequence and in both conventions, and $[X,Y]_t=\int_0^t\xi_s\eta_s\,ds$; in particular the increments of $X$ and $Y$ over a partition interval satisfy $\sum_j\Delta_jX\Delta_jY\to\int_0^T\xi\eta\,ds$ uniformly in probability. [[thm-quadratic-covariation-of-brownian-ito-processes]] [[def-continuous-brownian-ito-process]]
 
[F4] **Staircase comparison.** Let $G$ be a predictable process with $E\int_0^TG^2ds<\infty$ and let $G^{(n)}:=\sum_jG_{s_j}1_{(s_j,s_{j+1}]}$ be its left-endpoint staircase on $\pi_n$; then $G^{(n)}$ is elementary and $\int_0^T(G^{(n)}-G)\,dB\to0$ in $L^2(P)$ whenever $\int_0^T(G^{(n)}-G)^2ds\to0$ in $L^1(P)$. More generally, for a fixed bounded predictable weight $W$ and a predictable $G$ with finite energy, $E\bigl(\int_0^T W(G^{(n)}-G)\,dB\bigr)^2=E\int_0^TW^2(G^{(n)}-G)^2ds$. [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-elementary-predictable-brownian-integrand]] [[thm-density-of-elementary-predictable-processes-in-predictable-l2]]
 
[F5] **Riemann--Stieltjes convergence of the drift terms.** If $Z$ is continuous and $h$ is pathwise Lebesgue-integrable on $[0,T]$, then $\sum_jZ_{s_j}\int_{s_j}^{s_{j+1}}h_s\,ds\to\int_0^TZ_sh_s\,ds$ along vanishing meshes, because the Riemann sum differs from the integral by at most $\bigl(\max_j\sup_{u\in I_j}|Z_u-Z_{s_j}|\bigr)\int_0^T|h_s|\,ds$. [[def-continuity-real]] [[thm-heine-cantor-r]]
 
[F6] **Telescoping identity.** For every finite partition $0=t_0<\dots<t_m=T$ one has the exact algebraic identity $X_TY_T-X_0Y_0=\sum_jX_{t_j}(Y_{t_{j+1}}-Y_{t_j})+\sum_jY_{t_j}(X_{t_{j+1}}-X_{t_j})+\sum_j(X_{t_{j+1}}-X_{t_j})(Y_{t_{j+1}}-Y_{t_j})$, obtained by writing each product increment as $X_{t_{j+1}}Y_{t_{j+1}}-X_{t_j}Y_{t_j}=X_{t_j}\Delta_jY+Y_{t_j}\Delta_jX+\Delta_jX\Delta_jY$. [[def-partition-and-refinement]]
 
[F7] **Localization of the class.** For the stopping time $\rho_c:=\inf\{t:\max(|X_t|,|Y_t|,\int_0^t|b^X|,\int_0^t|b^Y|,\int_0^t\xi^2,\int_0^t\eta^2)\ge c\}\wedge T$ the stopped processes $X^{\rho_c},Y^{\rho_c}$ are continuous Brownian Ito processes with the coefficients frozen on $[0,\rho_c]$, and $\rho_c\uparrow T$ almost surely as $c\to\infty$: all six functionals are finite-valued and continuous in $t$ almost surely, so their maxima over $[0,T]$ are finite almost surely and for $c$ above that maximum the level $c$ is never reached before $T$, whence $\rho_c=T$. On $\{\rho_c\ge T\}$ the processes and all their integrals over $[0,T]$ coincide with those of the stopped versions. [[def-continuous-brownian-ito-process]] [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[def-continuous-time-stopping-time]] [[thm-heine-cantor-r]]
 
[F8] **Estimates.** $|\sum_ja_jb_j|\le(\sum_ja_j^2)^{1/2}(\sum_jb_j^2)^{1/2}$ and $E|UV|\le(EU^2)^{1/2}(EV^2)^{1/2}$; if $|Z_n|\le R_n$ with $ER_n\to0$ then $Z_n\to0$ in probability; and dominated convergence passes limits under pathwise Lebesgue integrals along an almost-sure event of bounded integrands. [[cor-cauchy-schwarz-for-random-variables]] [[thm-dominated-convergence]] [[def-convergence-in-probability]]
 
[F9] **AC bookkeeping.** Choice is declared for the ambient conditional-expectation, $L^2$-completeness and density interfaces; the stopping levels and staircase partitions used below are canonical functions of the given data. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Localized setup: fix $c>0$ and stop both processes at $\rho_c$ as in [F7]; on the event $\{\rho_c\ge T\}$ nothing changes, and on this event the four bounds $|X|\le c$, $|Y|\le c$, $\int_0^T|b^X|,\int_0^T|b^Y|\le c$ and $\int_0^T\xi^2,\int_0^T\eta^2\le c$ hold, so the integrands $X\eta,Y\xi$ have finite energy at most $c^2$ and the drift functions are integrable with pathwise total mass at most $c$. It therefore suffices to prove the identity for continuous Brownian Ito processes whose path and coefficient integrals are bounded by $c$ on $[0,T]$; the general case follows by letting $c\to\infty$ along the exhausting events of [F7]. [F1, F7, given]
 
1.2 Staircase identity: for the left-endpoint staircase $X^{(n)}_s:=\sum_jX_{s_j}1_{(s_j,s_{j+1}]}(s)$ of $X$ set $G^{(n)}:=X^{(n)}\eta$. On each interval $I_j$ the process $G^{(n)}$ equals the constant $X_{s_j}\eta$ on $I_j$, so by linearity of the localized integral over restrictions $\int_0^TG^{(n)}\,dB=\sum_jX_{s_j}\int_{I_j}\eta\,dB=\sum_jX_{s_j}\Delta_jM^Y$, which is exactly the stochastic part of the first sum of [F6] with $\Delta_jY$ replaced by $\Delta_jM^Y$; the difference $\sum_jX_{s_j}\Delta_jM^Y-\sum_jX_{s_j}\Delta_jY=-\sum_jX_{s_j}\Delta_jA^Y$ is a drift sum. [F2, F6, F1]
 
1.3 Cross terms: by [F3] the cross-increment sums satisfy $\sum_j\Delta_jX\Delta_jY\to[X,Y]_T$ uniformly in probability along every deterministic vanishing-mesh sequence, in both conventions. [F3]
 
2.1 Convergence of the stochastic part of the first sum: by uniform continuity of the path of $X$ on $[0,T]$ one has $\sup_j\sup_{u\in I_j}|X_u-X_{s_j}|\to0$ along vanishing meshes, so $\int_0^T(X^{(n)}-X)^2\eta^2ds\le\bigl(\sup_j\sup_{I_j}|X-X_{s_j}|\bigr)^2\int_0^T\eta^2ds\le c\bigl(\sup_j\sup_{I_j}|X-X_{s_j}|\bigr)^2\to0$ in $L^1$, and [F4] applied with the bounded weight $W=\eta$ (bounded in $L^2$, finite energy) gives $\sum_jX_{s_j}\Delta_jM^Y=\int_0^TG^{(n)}dB\to\int_0^TX\eta\,dB$ in $L^2(P)$. [F1, F4, step 1.2]
 
2.2 The same argument with the roles of $(X,b^X,\xi)$ and $(Y,b^Y,\eta)$ exchanged gives $\sum_jY_{t_j}\Delta_jX_j\to\int_0^TY_s\,dX_s$ in probability on the localized event. [F1, F4, F5, step 1.2]
 
3.1 Convergence of the drift part of the first sum: by [F5] with $Z=X$ and $h=b^Y$ one has $\sum_jX_{s_j}\Delta_jA^Y=\sum_jX_{s_j}\int_{I_j}b^Y ds\to\int_0^TX_sb^Y_s\,ds$ almost surely on the localized event, since $\int_0^T|b^Y|\le c$. Combining with step 2.1, $\sum_jX_{t_j}\Delta_jY_j\to\int_0^TX_sb^Y_s\,ds+\int_0^TX_s\eta_s\,dB_s=\int_0^TX_s\,dY_s$ in probability. [F5, step 2.1, step 1.2]
 
4.1 Consequently, along any deterministic partition sequence $(\pi_n)$ of $[0,T]$ with mesh tending to $0$, the right-hand side of the exact identity [F6] converges in probability to $X_0Y_0+\int_0^TX\,dY+\int_0^TY\,dX+[X,Y]_T$, while the left-hand side is the constant $X_TY_T-X_0Y_0$; uniqueness of limits gives the identity at time $T$. [F6, F8, step 3.1, step 2.2, step 1.3]
 
5.1 Every $t\in[0,T]$ in place of $T$: given $t$, apply step 4.1 on the interval $[0,t]$ with the partition sequence obtained by restricting $\pi_n$ to $[0,t]$ and adding $t$ as a point; this restricted sequence has mesh tending to $0$, so the identity holds at $t$. Since $t$ was arbitrary in $[0,T]$ and $T$ was arbitrary, the identity holds at every $t\ge0$ almost surely; moreover both sides are continuous processes and agree at every deterministic time, so by the rationals-and-continuity argument they are indistinguishable. [F6, step 4.1, given]
 
6.1 Removing the localization: by step 1.1 the identity holds on $\{\rho_c\ge T\}$ for each $c$, and $\rho_c\uparrow T$ almost surely, so the events $\{\rho_c\ge T\}$ increase to a full-probability event and the identity holds almost surely on a single event for each fixed horizon; taking the intersection over the countably many rational horizons and using continuity gives indistinguishability on $[0,\infty)$. [F7, step 1.1, step 5.1]
 
7.1 Martingale corollary and boundary cases: since $M^X,M^Y$ are continuous local martingales and $A^X,A^Y$ are continuous finite-variation processes, the identity exhibits $X_tY_t-[X,Y]_t-X_0Y_0$ as a sum of two localized Ito integrals, hence a continuous local martingale; when the energies $\int_0^T(X\eta)^2,\int_0^T(Y\xi)^2$ are finite the integrals are square-integrable martingales and the expectation identity $E[X_TY_T]=X_0Y_0+E[X,Y]_T$ holds. If $X\equiv X_0$ is constant, $[X,Y]=0$ and the identity reduces to $X_0Y_T=X_0Y_0+X_0\int dY$, the defining display; if $X=Y$ it reads $X_t^2=X_0^2+2\int X\,dX+[X]_t$, the quadratic identity; if $\xi\equiv0$ or $\eta\equiv0$ then the corresponding covariation integral vanishes and the formula reduces to the ordinary product rule for a finite-variation factor; at $t=0$ both sides equal $X_0Y_0$; and $T=0$ is the empty-partition case. AC enters only through [F9], and all localization levels are canonical. [F2, F3, F9, step 6.1] ∎

## Source notes

Van der Vaart, equation (5.63) with Section 5.8, proves the integration-by-parts identity for stochastic integrals by summing the exact increment identity of [F6] and identifying the three limits through the covariation theorem. The staircase comparison of steps 1.2--2.1 is written out because the integrand $X\eta$ is an arbitrary predictable process, not a step process, so the elementary sums must be compared with the localized integral through the $L^2$ isometry rather than identified with it by definition.
