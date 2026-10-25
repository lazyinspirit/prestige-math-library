---
id: thm-stationary-point-process-counts-converge-to-spatial-intensity
kind: theorem
title: "Spatial ergodic limit for counts in dilates of a convex window"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-stationary-point-process-and-intensity
  - def-spatial-recentering-action
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - lem-joint-measurability-of-spatial-recentering
  - thm-choice-free-l1-mean-limit-for-stationary-sequences
  - lem-convex-windows-admit-rectangle-approximations-and-are-folner
  - lem-translation-invariant-locally-finite-borel-measure-on-rd
  - def-conditional-expectation-given-a-sigma-algebra
  - def-measure-preserving-transformation-and-system
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, §8.5, Theorem 8.14 and full proof, PDF pp.89–92 (printed pp.77–80); Appendix B.2, Theorem B.11 choice-free mean convergence, PDF pp.276–278."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: stationary spatial counts and reduced moment measure; no spatial CLT is imported."
verification:
  precheck: pending
---

## Statement

Assume AC and Countable Choice as carried by the point-process supplier and Borel Lebesgue measure. Let $\eta$ be a stationary locally finite point process on $\mathbb R^d$ with finite positive intensity $\rho$. Let $W\subseteq\mathbb R^d$ be compact and convex with nonempty interior, let $a_n>0$ with $a_n\to\infty$, and put $Q=[0,1)^d$. For the full translation-invariant sigma-algebra $\mathcal I_\eta$ from [[def-stationary-point-process-and-intensity]],

$$\frac{\eta(a_nW)}{|a_nW|}\longrightarrow\mathbb E[\eta(Q)\mid\mathcal I_\eta]\qquad\text{in }L^1.$$

If the translation action is ergodic, the limit is the constant $\rho$. This statement gives no rate and no central limit theorem.

## Facts & Assumptions

**Given:** AC, Countable Choice, a stationary point process $\eta$ on $\mathbb R^d$ with $0<\rho<\infty$, a compact convex window $W$ with nonempty interior, and scales $a_n\to\infty$.

[A1] AC is inherited through the transitive point-process supplier dependencies; the spatial averaging proof below makes no selection. ([[def-axiom-of-choice]])

[A2] Countable Choice is inherited through the point-process and Borel Lebesgue measure suppliers. ([[def-countable-choice]])

[F1] Recentering is $(\theta_x\mu)(B)=\mu(B+x)$ with $\theta_{x+y}=\theta_x\theta_y$; stationarity means the configuration law is invariant under every $\theta_x$, and $\mathcal I_\eta$ consists of events invariant modulo null sets under every translation. ([[def-spatial-recentering-action]], [[def-stationary-point-process-and-intensity]])

[F2] The recentering action is jointly measurable, so each stationary $\theta_x$ acts as a measurable measure-preserving map on the canonical configuration space. ([[lem-joint-measurability-of-spatial-recentering]], [[def-measure-preserving-transformation-and-system]])

[F3] The mean measure of $\eta$ is $\rho\lambda_d$, so $\mathbb E\eta(B)=\rho|B|$ for every Borel $B$. ([[thm-stationary-point-process-intensity-measure-is-rho-lebesgue]])

[F4] A real integrable stationary sequence has Cesaro averages converging in $L^1$; this is proved choice-free. ([[thm-choice-free-l1-mean-limit-for-stationary-sequences]])

[F5] A compact convex window admits finite inner rectangle approximations, satisfies $|aW|=a^d|W|$, and has negligible translated symmetric-difference ratio. ([[lem-convex-windows-admit-rectangle-approximations-and-are-folner]])

[F6] A locally finite translation-invariant Borel measure is its unit-cube mass times Lebesgue measure. ([[lem-translation-invariant-locally-finite-borel-measure-on-rd]])

[F7] A conditional-expectation version is an integrable $\mathcal I_\eta$-measurable function whose integrals agree with those of $\eta(Q)$ on every event in $\mathcal I_\eta$. ([[def-conditional-expectation-given-a-sigma-algebra]])

## Proof

**Given:** The stated point process, $Q=[0,1)^d$, translations $T_x\eta=\theta_x\eta$, $W$, and $(a_n)$.

1.1 Work on the canonical configuration probability space with law $P_\eta$, and put $f(\mu)=\mu(Q)$. By [F2], each $T_x$ is measurable; by [F1], stationarity makes it measure preserving and $T_{x+y}=T_xT_y$. By [F3], $f\in L^1(P_\eta)$ and $\mathbb E f=\rho$. [given, F1, F2, F3]

1.2 For $j=1,\ldots,d$ let $T_j=T_{e_j}$, where $e_j$ is the $j$th coordinate vector. For any $g\in L^1(P_\eta)$, the sequence $(g\circ T_j^k)_{k\ge0}$ is stationary: shifting a finite vector by $m$ composes it with the measure-preserving map $T_j^m$. By [F4] its averages $A_n^{(j)}g=n^{-1}\sum_{k=0}^{n-1}g\circ T_j^k$ converge in $L^1$; denote their limit by $P_jg$. The averages are $L^1$ contractions, so limits preserve linearity and satisfy $\|P_jg-P_jh\|_1\le\|g-h\|_1$. Also $P_jg$ is $T_j$-invariant because $\|A_n^{(j)}g\circ T_j-A_n^{(j)}g\|_1\le2\|g\|_1/n$. Since the translations commute, $P_j$ preserves invariance under every $T_i$ with $i\ne j$. [F1, F2, F4, algebra]

2.1 Define $g_0=f$ and $g_j=P_jg_{j-1}$. For positive integers $n_1,\ldots,n_d$, let $A_{n_1,\ldots,n_d}=A_{n_d}^{(d)}\cdots A_{n_1}^{(1)}f$. Contractivity and the definition of $P_j$ give inductively $$\|A_{n_1,\ldots,n_j}-g_j\|_1\le\|A_{n_1,\ldots,n_{j-1}}-g_{j-1}\|_1+\|A_{n_j}^{(j)}g_{j-1}-g_j\|_1.$$ Thus $A_{n_1,\ldots,n_d}\to Z:=g_d$ in $L^1$ whenever every $n_j\to\infty$. The variable $Z$ is nonnegative, invariant under every integer-coordinate translation, and $\mathbb E Z=\mathbb E f=\rho$. [step 1.2, F3, F4, algebra]

3.1 The rectangular average with coordinate lengths $n_j$ and starting indices $m_j\in\mathbb Z$ is $A_{n_1,\ldots,n_d}f\circ T_m$, where $T_m=\theta_{(m_1,\ldots,m_d)}$. Since $Z\circ T_m=Z$ almost surely and $T_m$ preserves $P_\eta$, its $L^1$ distance from $Z$ equals $\|A_{n_1,\ldots,n_d}f-Z\|_1$, which tends to zero. [step 2.1, F1, F2, algebra]

4.1 Let $R=\prod_{j=1}^d[b_j,c_j)$ be a bounded half-open rectangle with positive side lengths. In each coordinate, the complete unit cells contained in $a_nR$ form an integer interval with length $n_{j,n}$ satisfying $n_{j,n}/a_n\to c_j-b_j$. Their product is a translated rectangular block of unit cells. By step 3.1, its count divided by $\prod_j n_{j,n}$ converges in $L^1$ to $Z$. The uncovered part of $a_nR$ has volume $a_n^d|R|-\prod_jn_{j,n}=o(a_n^d)$; by [F3] its expected count has the same order. Therefore $a_n^{-d}\eta(a_nR)\to |R|Z$ in $L^1$. [step 3.1, F3, algebra]

5.1 Fix $\epsilon>0$ and choose by [F5] a finite disjoint union $R=\bigcup_{q=1}^N R_q$ of half-open rectangles inside $W$ with $|W\setminus R|<\epsilon$. Applying step 4.1 to each rectangle gives $a_n^{-d}\eta(a_nR)\to |R|Z$ in $L^1$. Also, by [F3], $$\mathbb E\big[a_n^{-d}\eta(a_n(W\setminus R))\big]=\rho|W\setminus R|<\rho\epsilon.$$ Since $Z\ge0$ and $\mathbb EZ=\rho$, the triangle inequality yields $$\limsup_n\mathbb E\left|a_n^{-d}\eta(a_nW)-|W|Z\right|\le2\rho\epsilon.$$ Arbitrariness of $\epsilon$ proves $a_n^{-d}\eta(a_nW)\to |W|Z$ in $L^1$. [step 4.1, F3, F5, algebra]

6.1 By [F5], $|a_nW|=a_n^d|W|$ and $|W|>0$. Dividing the convergence in step 5.1 by $|W|$ gives $\eta(a_nW)/|a_nW|\to Z$ in $L^1$. [step 5.1, F5, algebra]

7.1 For fixed $x\in\mathbb R^d$, stationarity and [F3] give $$\left\|\frac{\eta(a_nW+x)}{|a_nW|}-\frac{\eta(a_nW)}{|a_nW|}\right\|_1\le\rho\frac{|(a_nW+x)\mathbin{\triangle}a_nW|}{|a_nW|}\longrightarrow0$$ by [F5]. Together with step 6.1 and measure preservation, this implies $Z\circ T_x=Z$ almost surely for every fixed $x$. Hence every rational threshold set $\{Z>q\}$ is in $\mathcal I_\eta$, so $Z$ is $\mathcal I_\eta$-measurable. [step 6.1, F1, F2, F3, F5]

7.2 Let $A\in\mathcal I_\eta$ and define $\nu_A(B)=\mathbb E[\mathbf1_A\eta(B)]$. Monotone convergence makes $\nu_A$ a measure; it is locally finite since $\nu_A\le\nu=\rho\lambda_d$. For any $x$, stationarity and $A$'s invariance modulo null sets give $\nu_A(B+x)=\nu_A(B)$: writing $\zeta=\theta_x\eta$, stationarity gives $\mathcal L(\zeta)=P_\eta$, while $\mathbf1_A(\eta)=\mathbf1_A(\theta_{-x}\zeta)=\mathbf1_A(\zeta)$ almost surely by $A\in\mathcal I_\eta$. Thus $\mathbb E[\mathbf1_A\eta(B+x)]=\mathbb E[\mathbf1_A(\eta)(\theta_x\eta)(B)]=\mathbb E[\mathbf1_A(\zeta)\zeta(B)]=\mathbb E[\mathbf1_A\eta(B)]$. By [F6], $\nu_A(B)=\nu_A(Q)|B|=\mathbb E[\mathbf1_A\eta(Q)]|B|$. Therefore, for each $n$, $$\mathbb E\left[\mathbf1_A\frac{\eta(a_nW)}{|a_nW|}\right]=\mathbb E[\mathbf1_A\eta(Q)].$$ Passing to the $L^1$ limit in step 6.1 shows $\mathbb E[\mathbf1_AZ]=\mathbb E[\mathbf1_A\eta(Q)]$ for every $A\in\mathcal I_\eta$. By [F7], $Z$ is a version of $\mathbb E[\eta(Q)\mid\mathcal I_\eta]$. [step 6.1, F1, F3, F6, F7]

8.1 If the translation action is ergodic, every event of $\mathcal I_\eta$ has probability zero or one. If the real $\mathcal I_\eta$-measurable variable $Z$ were not almost surely constant, there would be real $a<b$ with $P_\eta(Z\le a)>0$ and $P_\eta(Z\ge b)>0$; choosing a rational $q\in(a,b)$ would make $\{Z>q\}$ an invariant event of probability strictly between zero and one, a contradiction. Thus $Z$ is constant almost surely. Its expectation is $\rho$ by step 2.1, so $Z=\rho$ almost surely. The result is only an $L^1$ law of large numbers: it supplies neither a rate nor a CLT. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions; the coordinate-sequence mean argument itself is choice-free. [A1, A2, step 2.1, step 7.1, step 7.2, F1] ∎

## Sources

Last and Penrose, Chapter 8, Theorem 8.14 and Appendix B.2, Theorem B.11; Baddeley, Lecture 2, §2.4. The limit and its full translation-invariant sigma-algebra are proved locally, with no rate or CLT imported.
