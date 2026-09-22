---
id: thm-localized-ito-integral
kind: theorem
title: "Localized Ito integral"
status: draft
origin: pipeline
deps: [def-locally-square-integrable-predictable-brownian-integrand, thm-ito-integral-process-has-a-continuous-martingale-version, thm-doob-maximal-bound-for-the-ito-integral, thm-ito-isometry-and-linearity-in-predictable-l2, def-ito-integral-for-square-integrable-predictable-processes, thm-density-of-elementary-predictable-processes-in-predictable-l2, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-continuous-time-adapted-process-and-martingale, def-continuous-time-stopping-time, def-law-modification-and-indistinguishability-of-processes, def-progressively-measurable-and-predictable-process, thm-monotone-convergence-for-the-integral, lem-rat-embeds-dense, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-dominated-convergence-in-lp]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics, Lemma 5.28, Lemma 5.33 and Theorem 5.36"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be a locally
square-integrable predictable process with energy process $A$ and canonical
localization times (indexed by $n\ge1$) $\tau_n=\inf\{t:A_t\ge n\}\wedge n$
[[def-locally-square-integrable-predictable-brownian-integrand]], and let
$M^{(n)}$ denote the continuous version of the finite-energy integral
$\int H1_{(0,\tau_n]}\,dB$
[[thm-ito-integral-process-has-a-continuous-martingale-version]].
The filtration is assumed to satisfy the usual conditions, as required by the
cited local-integrability definition. Choose the progressively measurable
versions constructed in step 1.1 for these integrals and for the finite-energy
integrals below. Continuity means continuity on a measurable probability-one
event, and indistinguishability means equality at all times on such an event,
as in that continuous-version theorem. Local square integrability and the
canonical energy bounds are almost-sure assertions.

1. **Existence.** There is an adapted process $M=(M_t)_{t\ge0}$ with continuous
   paths, called the **localized Ito integral** $H\cdot B$, such that for every
   $n$ the stopped process $M^{\tau_n}$ is indistinguishable from $M^{(n)}$.
   Consequently $M$ is a continuous local martingale relative to
   $(\mathcal F_t)$ with localizing sequence $(\tau_n)$, and for every
   $n$ and $t$
   $$EM_{t\wedge\tau_n}^2=EA_{t\wedge\tau_n}\le n .$$

2. **Characterization.** If $N$ is an adapted process with continuous paths and
   $N_0=0$ such that $N^{\tau_n}$ is indistinguishable from $M^{(n)}$ for every
   $n$, then $N$ is indistinguishable from $M$. In particular $M$ is the unique
   continuous local martingale, up to indistinguishability, whose stopped
   finite-energy integrals are the $M^{(n)}$.

3. **Independence of the localizing sequence.** Let $(\rho_k)$ be a
   nondecreasing sequence of stopping times with $\rho_k\uparrow\infty$ almost
   surely and $E\int_0^tH_s^21_{(0,\rho_k]}(s)\,ds<\infty$ for all $k$ and all
   finite $t$, and let $N$ be an adapted process with continuous paths and
   $N_0=0$ such that $N^{\rho_k}$ is indistinguishable from the finite-energy
   integral of $H1_{(0,\rho_k]}$ for every $k$. Then $N$ is indistinguishable
   from $M$.

4. **Stopping identity for finite-energy integrands.** If $G$ is a predictable
   process with $E\int_0^TG^2ds<\infty$ and $G\cdot B$ denotes its continuous
   version [[thm-ito-integral-process-has-a-continuous-martingale-version]],
   with the same progressive version convention (extending $G$ by zero after $T$), then for every stopping time $\sigma$ and every $0\le t\le T$
   $$(G\cdot B)_{t\wedge\sigma}=\int_0^tG_s1_{(0,\sigma]}(s)\,dB_s\qquad\text{almost surely},$$
   and the two sides are continuous processes on $[0,T]$, hence
   indistinguishable there. A global identity follows by applying this clause
   on each finite horizon when $G$ has finite energy on every finite horizon.
   This clause is the finite-energy stopping identity used by item 17.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a locally square-integrable predictable $H$ with energy $A$ and canonical times $\tau_n$, finite-energy predictable integrands $G,G_k$, stopping times $\sigma,\rho_k$, and the continuous versions $G\cdot B$ and $M^{(n)}$ of items 13 and 15.

[F1] $H1_{(0,\tau_n]}$ is predictable and has finite energy $EA_{t\wedge\tau_n}\le n$, so its integral has a continuous version $M^{(n)}$ with $E(M^{(n)}_t)^2=EA_{t\wedge\tau_n}$; the times $(\tau_n)$ are nondecreasing stopping times with $\tau_n\uparrow\infty$ a.s. [[def-locally-square-integrable-predictable-brownian-integrand]] [[thm-ito-integral-process-has-a-continuous-martingale-version]]

[F2] For a finite-energy predictable $G$ the continuous version $G\cdot B$ satisfies $G\cdot B=\int_0^tG\,dB$ at every deterministic $t$, and $E\sup_{t\le T}|(G\cdot B)_t|^2\le4E\int_0^TG^2ds$; hence $(G\cdot B)_{t\wedge\sigma}$ and the integrals of approximating integrands are controlled by the $L^2(\mathrm dt\otimes P)$ distance. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-doob-maximal-bound-for-the-ito-integral]]

[F3] For elementary predictable $G$ the defining sum is a continuous process and the general integral of $G1_{[0,t]}$ equals that sum at every deterministic $t$; elementary integrals are linear on a common refinement, and $G1_{[0,t]}$ for elementary $G$ is elementary on the refinement containing $t$. [[def-ito-integral-of-an-elementary-predictable-process]] [[def-ito-integral-for-square-integrable-predictable-processes]]

[F4] Every finite-energy predictable $G$ is the $L^2(\mathrm dt\otimes P)$-limit of bounded elementary integrands, and the integral map is an isometry: $\|\int_0^T(G-J)dB\|_2=\|G-J\|_{L^2(\mathrm dt\otimes P)}$. [[thm-density-of-elementary-predictable-processes-in-predictable-l2]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F5] For a stopping time $\sigma$ the indicator $1_{[0,\sigma]}$ is predictable and every truncation $1_{[0,t]}$ is predictable; products of predictable processes are predictable. [[def-progressively-measurable-and-predictable-process]]

[F6] Finite pointwise limits of measurable functions, set to zero where no finite limit exists, are measurable. Almost-sure convergence dominated by an $L^p$ random variable gives $L^p$ convergence. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] [[thm-dominated-convergence-in-lp]]

[F7] AC supplies countable selections of versions and approximating sequences; the localization times themselves are canonical. [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

## Proof

**Proof technique:** direct.

1.1 Measurable versions and stopping: for an adapted process $X$ with almost-sure continuous paths and $X_0=0$ almost surely, define $X^j_0=0$ and $X^j_s=X_{k2^{-j}}$ on $(k2^{-j},(k+1)2^{-j}]$, $k\ge0$. For each finite horizon these step processes are progressive by [F5]'s predictable generators and predictable-to-progressive inclusion: the coefficient is measurable at the left endpoint, so its inverse images give the required rectangles. Put $\widehat X_s=\lim_jX^j_s$ where this limit exists finitely, and zero otherwise. By [F6] on each product sigma-algebra, $\widehat X$ is progressive. It equals $X$ at every time on the measurable full event of continuity and zero start. Thus it preserves every deterministic-time integral class and martingale identity. A progressive $Y$ has adapted stopped values: for fixed $t$, $r=t\wedge\sigma$ is $\mathcal F_t$-measurable, and the map $\omega\mapsto(r(\omega),\omega)$ into $[0,t]\times\Omega$ is measurable into $\mathcal B([0,t])\otimes\mathcal F_t$ by rectangle inverse images. Composition with the progressive restriction of $Y$ gives $Y_{t\wedge\sigma}\in\mathcal F_t$. Choose this construction for every finite-energy integral used below; [F7] permits the countably many required choices. All sequences indexed by positive integers are reindexed by $n=j+1$ when applying an interface indexed from zero. [F2, F5, F6, F7, given]

2.1 Clause 4 for elementary $G$ and finite-valued $\sigma$: refine the partition of $G$ so that it contains the finitely many values of $\sigma$ and the point $t$; on each block $(t_k,t_{k+1}]$ the indicator $1_{s\le\sigma}$ is constant in $s$ with value $1_{\sigma\ge t_{k+1}}$, and $\{\sigma<t_{k+1}\}=\{\sigma\le t_k\}\in\mathcal F_{t_k}$ because $\sigma$ takes only partition values, so $G1_{[0,\sigma]}1_{[0,t]}$ is elementary with coefficients $\xi_k1_{\sigma\ge t_{k+1}}$; its defining sum is $\sum_k\xi_k1_{\sigma\ge t_{k+1}}(B_{t_{k+1}\wedge t}-B_{t_k\wedge t})$, which term-by-term equals $\sum_k\xi_k(B_{(t\wedge\sigma)\wedge t_{k+1}}-B_{(t\wedge\sigma)\wedge t_k})=(G\cdot B)_{t\wedge\sigma}$ on the measurable full event where the progressive version agrees with the elementary sum at all times, by step 1.1. [F3, F5, given, step 1.1]

3.1 Clause 4 for elementary $G$ and arbitrary $\sigma$: let $\sigma_m:=2^{-m}\lceil2^m(\sigma\wedge m)\rceil$ be the dyadic ceiling of the bounded stopping time $\sigma\wedge m$, a finite-valued stopping time with $\sigma_m\ge\sigma\wedge m$ and $\sigma_m\to\sigma$; by step 2.1 and [F3], $(G\cdot B)_{t\wedge\sigma_m}=I_T(G1_{[0,\sigma_m]}1_{[0,t]})$ for every $m$. [F3, step 2.1]

4.1 As $m\to\infty$: $(G\cdot B)_{t\wedge\sigma_m}\to(G\cdot B)_{t\wedge\sigma}$ in $L^2(P)$ by continuity of the path and the maximal bound [F2] with [F6] (the measurable grid supremum of [F2] supplies the dominating random variable); and $I_T(G1_{[0,\sigma_m]}1_{[0,t]})\to I_T(G1_{[0,\sigma]}1_{[0,t]})$ in $L^2(P)$ because their indicators converge for Lebesgue-almost every time (the possible boundary $s=\sigma$ is irrelevant), and they are dominated by $|G|1_{[0,t]}\in L^2$, and the integral is an isometry [F4]. Hence $(G\cdot B)_{t\wedge\sigma}=\int_0^tG1_{(0,\sigma]}dB$ almost surely for elementary $G$ and every stopping time $\sigma$. [F2, F4, F6, step 1.1, step 3.1]

5.1 Clause 4 for general finite-energy $G$: approximate $G$ by bounded elementary $G^j$ in $L^2(\mathrm dt\otimes P)$ [F4]; then $(G^j\cdot B)_{t\wedge\sigma}\to(G\cdot B)_{t\wedge\sigma}$ in $L^2(P)$ by the maximal bound [F2], and $\int_0^tG^j1_{(0,\sigma]}dB\to\int_0^tG1_{(0,\sigma]}dB$ by the isometry and $|G^j1_{(0,\sigma]}-G1_{(0,\sigma]}|\le|G^j-G|$; passing to the limit in the identities of step 4.1 gives clause 4 in general, and since both sides are continuous in $t$ and agree at every deterministic $t$ almost surely, they are indistinguishable. [F2, F4, step 4.1]

6.1 Agreement of stopped finite-energy integrals (clause 1, first assertion): for $m\ge n$ apply clause 4 to $G:=H1_{(0,\tau_m]}$, which has finite energy $EA_{t\wedge\tau_m}\le m$ by [F1], and to the stopping time $\tau_n$: $(M^{(m)})^{\tau_n}_t=(G\cdot B)_{t\wedge\tau_n}=\int_0^tG1_{(0,\tau_n]}dB=\int_0^tH1_{(0,\tau_n]}dB=M^{(n)}_t$ almost surely for every $t$, using $1_{[0,\tau_n]}1_{(0,\tau_m]}=1_{(0,\tau_n]}$ because $\tau_n\le\tau_m$. Both sides are continuous, so $(M^{(m)})^{\tau_n}$ and $M^{(n)}$ are indistinguishable. [F1, step 5.1]

7.1 Construction of $M$: put $M_t:=\lim_nM^{(n)}_t$ where the limit exists finitely, and zero otherwise. This is progressive by [F6] applied on every finite-horizon product sigma-algebra, since each $M^{(n)}$ was chosen progressive in step 1.1. In particular $M_0=0$ everywhere and its stopped values are adapted by step 1.1. On the event $A$ where all the agreements of step 6.1 hold, every $M^{(n)}$ is continuous and $\tau_n\uparrow\infty$, fix $\omega$ and $t$; choose $n$ with $\tau_n(\omega)\ge t$; then for every $m\ge n$, $M^{(m)}_t=M^{(m)}_{t\wedge\tau_n}=M^{(n)}_t$ by step 6.1, so the sequence is eventually constant and $M_t(\omega)=M^{(n)}_t(\omega)$. Hence on $A$ the process $M$ agrees on $[0,\tau_n(\omega)]$ with the continuous path of $M^{(n)}$, so $M$ has continuous paths on the full-measure event $A$. [F1, F6, step 1.1, step 6.1]

8.1 $M$ is a local martingale with localizing sequence $(\tau_n)$: by step 6.1 and the definition of $M$ on $A$, $M^{\tau_n}$ is indistinguishable from $M^{(n)}$, and $M^{(n)}$ is a martingale. Since $M^{\tau_n}$ is adapted by step 1.1 and has the same deterministic-time values almost surely, it is itself a martingale; moreover $EM_{t\wedge\tau_n}^2=E(M^{(n)}_t)^2=EA_{t\wedge\tau_n}\le n$ by [F1]. [F1, step 6.1, step 7.1]

9.1 Clauses 2 and 3: if $N$ is continuous with $N_0=0$ and $N^{\tau_n}=M^{(n)}$ for all $n$, then for each $t$ and each $n$ with $\tau_n\ge t$ one has $N_t=N_{t\wedge\tau_n}=M^{(n)}_t=M_t$ almost surely, and letting $n\to\infty$ along the full-measure event where $\tau_n\uparrow\infty$ gives $N_t=M_t$ almost surely for every $t$; continuity and the rationals argument make $N$ indistinguishable from $M$. For clause 3, apply clause 4 twice: for each $k,n$, $(N^{\rho_k})^{\tau_n}=(G_k\cdot B)^{\tau_n}=\int_0^tG_k1_{(0,\tau_n]}dB$ and $(M^{(n)})^{\rho_k}=(G_n\cdot B)^{\rho_k}=\int_0^tG_n1_{(0,\rho_k]}dB$ with $G_k=H1_{(0,\rho_k]}$, $G_n=H1_{(0,\tau_n]}$, and both integrands equal $H1_{(0,\rho_k\wedge\tau_n]}$; hence $N^{(\rho_k\wedge\tau_n)}$ and $M^{(\rho_k\wedge\tau_n)}$ are indistinguishable, and for each $t$ on the full-measure event where $\rho_k\wedge\tau_n\ge t$ eventually, $N_t=M_t$ almost surely; continuity gives indistinguishability. The countable intersections of full events give the simultaneous identities; AC supplies the choices of versions and approximations through [F7]. [F5, F7, step 5.1, step 6.1, step 8.1] ∎

## Source notes

Van der Vaart proves the finite-energy stopping lemma (Lemma 5.28), the agreement of stopped integrals on overlaps (Lemma 5.33) and the existence of the localized continuous version (Theorem 5.36) in this order. Clause 4 is the stopping lemma in the form needed here; clauses 1--3 are Theorem 5.36 with the canonical energy times of Definition 5.32, and the agreement of stopped integrals is derived by applying the stopping lemma at the pairwise minimum of the two localization times.
