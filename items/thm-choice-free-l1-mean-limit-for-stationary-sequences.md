---
id: thm-choice-free-l1-mean-limit-for-stationary-sequences
kind: theorem
title: "An integrable stationary sequence has an L1 Cesaro limit"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-stationary-process-and-canonical-shift
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, Appendix B.2, Theorem B.11"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "PDF pp.276–278: complete proof of the L1 mean ergodic theorem for stationary integrable sequences."
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§10.5, printed pp.94–97: Birkhoff's stronger almost-sure/L1 result, used only as a cross-check; this item follows the choice-free mean-limit route."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $(X_n)_{n\ge1}$ be a real-valued strictly stationary sequence with $\mathbb E|X_1|<\infty$. Here strictly stationary means that every finite-dimensional law is unchanged by every nonnegative integer shift. Then there is an integrable random variable $Y$ such that

$$\frac1n\sum_{j=1}^n X_j\longrightarrow Y\quad\text{in }L^1,$$

that is, $\mathbb E|n^{-1}\sum_{j=1}^n X_j-Y|\to0$. No independence or ergodicity is assumed, and the proof uses no choice axiom.

## Facts & Assumptions

**Given:** A real strictly stationary sequence $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$.

[A1] Strict stationarity means invariance of all finite-dimensional laws under every nonnegative integer shift; the canonical path shift preserves the stationary path law. ([[def-stationary-process-and-canonical-shift]])

[F1] Pointwise limsup and liminf of measurable real sequences are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F2] On a probability space, dominated pointwise convergence under one integrable majorant implies convergence of the integrals of absolute differences. ([[thm-dominated-convergence]])

[F3] Increasing limits pass through the nonnegative integral. ([[thm-monotone-convergence-for-the-integral]])

[F4] Expectation of an integrable real random variable is its Lebesgue integral. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

## Proof

**Given:** A real strictly stationary sequence $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$.

1.1 First suppose $\mathbb E X_1=0$ and $|X_n|\le1$ almost surely for each $n$. Put $A_n=n^{-1}\sum_{j=1}^nX_j$ and $L=\limsup_n A_n$. Then $-1\le L\le1$, and for every fixed $p\ge1$ the averages $m^{-1}\sum_{j=p}^{p+m-1}X_j$ have the same limsup $L$: their difference from $A_m$ is at most $2(p-1)/m$, which tends to zero. [given, F1, construct]

2.1 Fix $0<\epsilon<1/4$. For each $p\ge1$ let $T_p$ be the least positive integer $m$ for which $m^{-1}\sum_{j=p}^{p+m-1}X_j>L-\epsilon$. Such an $m$ exists by the definition of limsup; [F1] and shift invariance show that the $T_p$ all have the same distribution. Choose an integer $k$ so that $\mathbb P(T_1>k)<\epsilon$, and set $X_p^*=X_p+2\mathbf1_{\{T_p>k\}}$. [step 1.1, A1, F1, construct]

3.1 For every $p$, $X_p^*\ge-1$ and $\mathbb E X_p^*=2\mathbb P(T_1>k)<2\epsilon$. Define $T_p^*$ as the first $m\ge1$ for which the average of $X_p^*,\ldots,X_{p+m-1}^*$ exceeds $L-\epsilon$. If $T_p\le k$, the same average of the larger sequence $X_j^*$ at length $T_p$ exceeds $L-\epsilon$; if $T_p>k$, then $X_p^*=X_p+2\ge1>L-\epsilon$. Thus $1\le T_p^*\le k$ in either case. [step 1.1, step 2.1, algebra]

4.1 Starting from $M_0=0$, recursively set $M_{q+1}=M_q+T^*_{M_q+1}$. Each increment is between $1$ and $k$, and the average of $X_j^*$ on each block $(M_q,M_{q+1}]$ exceeds $L-\epsilon$. Therefore $S^*_{M_q}:=\sum_{j=1}^{M_q}X_j^*>(L-\epsilon)M_q$. [step 3.1, construct, algebra]

5.1 For $n\ge k$, take the last $M_q\le n$; then $0\le n-M_q<k$. The remaining terms are at least $-1$, so $S_n^*>S_{M_q}^*-k>(L-\epsilon)M_q-k\ge(L-\epsilon)n-2k$, using $L-\epsilon\le1$. Hence $n^{-1}S_n^*>L-\epsilon-2k/n$. [step 4.1, step 3.1, algebra]

6.1 Stationarity gives $\mathbb E[n^{-1}S_n^*]=\mathbb E X_1^*<2\epsilon$. Taking expectations in step 5.1 and then letting $n\to\infty$ gives $\mathbb E L\le3\epsilon$. Since this holds for every such $\epsilon$, $\mathbb E L\le0$. Applying the same argument to $(-X_n)$ shows $\mathbb E[\liminf_n A_n]\ge0$. The bounded nonnegative difference $\limsup_nA_n-\liminf_nA_n$ therefore has expectation at most zero, so it vanishes almost surely. Thus $A_n$ converges almost surely; [F2] gives convergence in $L^1$. [step 2.1, step 5.1, F2, F4, algebra]

7.1 If instead $|X_n|\le C<\infty$ without centering, the case $C=0$ is immediate; for $C>0$ apply the preceding result to $(X_n-\mathbb E X_1)/(2C)$, whose terms are centered and have absolute value at most $1$. Rescaling and adding $\mathbb E X_1$ proves the bounded case. [step 6.1, F4, algebra]

8.1 Suppose $X_n\ge0$ and is integrable but not necessarily bounded. For $r\ge1$ set $X_{n,r}=X_n\wedge r$ and $A_{n,r}=n^{-1}\sum_{j=1}^nX_{j,r}$. Define the limit canonically by $Y_r:=\limsup_{n\to\infty}A_{n,r}$; it is measurable by [F1]. By step 7.1, the averages converge almost surely and in $L^1$ to this integrable $Y_r$. On the common probability-one event for these countably many convergences, $Y_r\le Y_{r+1}$; also $Y_r\ge0$ and $\mathbb E Y_r=\mathbb E X_{1,r}$. [step 7.1, F1, F4, construct]

9.1 Let $Y=\lim_{r\to\infty}Y_r$. By [F3], $Y$ is integrable and $\mathbb E Y=\mathbb E X_1$. Given $\epsilon>0$, choose $r$ with $\mathbb E(X_1-X_{1,r})<\epsilon$; then also $\mathbb E(Y-Y_r)<\epsilon$. For this fixed $r$, stationarity and nonnegativity give $\mathbb E|A_n-A_{n,r}|=\mathbb E(X_1-X_{1,r})<\epsilon$, while $\mathbb E|A_{n,r}-Y_r|\to0$. The triangle inequality proves $\limsup_n\mathbb E|A_n-Y|\le2\epsilon$, and arbitrariness of $\epsilon$ gives $L^1$ convergence. [step 8.1, F3, algebra]

10.1 For a signed integrable stationary sequence, apply the nonnegative case in steps 8.1–9.1 separately to $X_n^+=\max(X_n,0)$ and $X_n^-=\max(-X_n,0)$. Both are stationary nonnegative integrable sequences, and subtracting their $L^1$ limits gives an integrable $L^1$ limit for the averages of $X_n$. The entire argument used no choice principle. [given, step 8.1, step 9.1, algebra] ∎

## Sources

Last and Penrose, Appendix B.2, Theorem B.11 and complete proof; Walkden's Birkhoff treatment is stronger and is not used as a choice-bearing shortcut.
