---
id: thm-recurrence-transience-equivalent-criteria
kind: theorem
title: "Equivalent criteria for recurrence and transience"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-recurrent-and-transient-state
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-initial-distribution-of-a-markov-chain
  - def-stochastic-process-and-finite-dimensional-distributions
  - thm-renewal-decomposition-at-successive-return-times
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-monotone-convergence-for-the-integral
  - thm-continuity-from-above-for-measures
  - thm-geometric-series
  - lem-geometric-sequence-null
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
      locator: "§5.3, discussion immediately before Theorem 5.3.1 and Theorem 5.3.1 with its return-count argument, printed pp. 281–282/PDF pp. 289–290. Durrett's N(y) counts only visits at positive times, while this item counts time zero; the offset is handled explicitly here."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "§21.1, Proposition 21.3 and its proof, printed pp. 291–292/PDF pp. 307–308. That proposition assumes irreducibility for its global equivalences; only its Green-series/return-count motivation is used, and the statewise claim here is proved directly."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X=(X_n,\mathcal F_n)_{n\ge0}$ be a time-homogeneous Markov chain on an at most countable state space $E$, with transition matrix $p$. Fix $x\in E$ and use $\mathbb P_x$ and $\mathbb E_x$ for the specified law with $X_0=x$ almost surely. For the visit count $N_x=\sum_{n\ge0}\mathbf 1_{\{X_n=x\}}$, which includes the initial visit, the following are equivalent:

$$x\text{ is recurrent}\quad\Longleftrightarrow\quad \mathbb P_x(N_x=\infty)=1\quad\Longleftrightarrow\quad \sum_{n=0}^{\infty}p^{(n)}(x,x)=\infty.$$

If $x$ is transient and $r_x:=\mathbb P_x(T_x^+<\infty)<1$, then for every integer $k\ge1$,

$$\mathbb P_x(N_x=k)=(1-r_x)r_x^{k-1},\qquad \mathbb E_xN_x=\sum_{n=0}^{\infty}p^{(n)}(x,x)=\frac{1}{1-r_x}<\infty.$$

## Facts & Assumptions

**Given:** AC, a countable-state Markov chain, and a fixed state $x\in E$.

[A1] AC is assumed for the specified chain law and the finite-dimensional and strong-Markov conditional-expectation interfaces used below. ([[def-axiom-of-choice]])

[F1] Under the fixed initial state, $X_0=x$ almost surely, and $\mathbb P_x,\mathbb E_x$ denote that specified law and expectation. ([[def-initial-distribution-of-a-markov-chain]])

[F2] $N_x=\sum_{n\ge0}\mathbf 1_{\{X_n=x\}}$ counts the time-zero visit. ([[def-hitting-return-and-visit-times]])

[F3] $T_x^+=\inf\{n\ge1:X_n=x\}$, so a return must occur at a strictly positive time. ([[def-hitting-return-and-visit-times]])

[F4] The successive returns are $R_0=0$ and $R_j=\inf\{n>R_{j-1}:X_n=x\}$ after a finite preceding return, with later returns set to $+\infty$ after an infinite one. ([[def-hitting-return-and-visit-times]])

[F5] $x$ is recurrent exactly when $r_x=\mathbb P_x(T_x^+<\infty)=1$, and is transient exactly when $r_x<1$. ([[def-recurrent-and-transient-state]])

[F6] $p^{(n)}(x,y)=K^n(x,\{y\})$ and $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F7] The finite-dimensional law at the single time $n$, with initial law $\delta_x$ and test $\mathbf 1_{\{x\}}$, gives $\mathbb P_x(X_n=x)=p^{(n)}(x,x)$. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F8] At each finite return time $R_j$, the post-return path has the $\mathbb P_x$ law in the conditional sense: for bounded measurable future-path $H$, $\mathbb E_x[Z_{j,H}\mid\mathcal F_{R_j}]=\mathbf 1_{\{R_j<\infty\}}\mathbb E_x[H(X_0,X_1,\ldots)]$ a.s. ([[thm-renewal-decomposition-at-successive-return-times]])

[F9] Each coordinate $X_n$ is a measurable random element; hence its singleton event $\{X_n=x\}$ is measurable. ([[def-stochastic-process-and-finite-dimensional-distributions]])

[F10] If nonnegative measurable $Y_m\uparrow Y$, then $\mathbb E_xY_m\uparrow\mathbb E_xY$, allowing $+\infty$. ([[thm-monotone-convergence-for-the-integral]])

[F11] For decreasing measurable events $A_k$ in the probability measure $\mathbb P_x$, $\mathbb P_x(\bigcap_kA_k)=\lim_k\mathbb P_x(A_k)$ because $\mathbb P_x(A_1)\le1<\infty$. ([[thm-continuity-from-above-for-measures]])

[F12] If $0\le r<1$, then $r^m\to0$. ([[lem-geometric-sequence-null]])

[F13] If $0\le r<1$, then $\sum_{m=0}^{\infty}r^m=1/(1-r)$. ([[thm-geometric-series]])

[F14] Integer powers use $r^0=1$, including when $r=0$. ([[thm-geometric-series]])

## Proof

**Proof technique:** identify visit tails with finite successive returns, iterate the return-time Markov identity, then apply monotone convergence to both the time-indexed and tail-indexed visit counts.

1.1 For each $k\ge1$, pathwise $\{N_x\ge k\}=\{R_{k-1}<\infty\}$. Since $X_0=x$ [F1], the first visit is already counted, and at least $k$ visits are exactly $k-1$ further finite returns. In particular, both events are certain for $k=1$ since $R_0=0$. Also $\{N_x=\infty\}=\bigcap_{k\ge1}\{N_x\ge k\}$. [F1, F2, F4, given]

1.2 The finite partial visit counts $V_m:=\sum_{n=0}^{m}\mathbf 1_{\{X_n=x\}}$ are nonnegative measurable by [F9] and increase pointwise to $N_x$ [F2]. Monotone convergence [F10] therefore gives, with extended values allowed, $\mathbb E_xN_x=\lim_{m\to\infty}\sum_{n=0}^{m}\mathbb P_x(X_n=x)=\sum_{n=0}^{\infty}p^{(n)}(x,x)$, where the last equality uses the finite-dimensional law [F7] under AC [A1]. The $n=0$ term is $1$ on each side by [F1] and [F6]; no initial visit is lost. [A1, F1, F2, F6, F7, F9, F10, given]

2.1 Define the bounded future-path functional $H_x(\omega)=\mathbf 1_{\{\exists m\ge1:\omega_m=x\}}$. Its event is a countable union of coordinate-cylinder events, hence measurable by [F9], and $\mathbb E_xH_x=r_x$ by the definition of $T_x^+$ [F3]. On $\{R_j<\infty\}$, $Z_{j,H_x}=\mathbf 1_{\{R_{j+1}<\infty\}}$; on $\{R_j=\infty\}$ it is zero. Applying the AC-based strong-Markov identity [F8] and taking expectations gives $\mathbb P_x(R_{j+1}<\infty)=r_x\mathbb P_x(R_j<\infty)$. Starting from $\mathbb P_x(R_0<\infty)=1$, induction yields $\mathbb P_x(R_j<\infty)=r_x^j$. By step 1.1, $\mathbb P_x(N_x\ge k)=r_x^{k-1}$ for every $k\ge1$. [A1, F3, F4, F8, F9, step 1.1, given]

3.1 The events $\{N_x\ge k\}$ decrease to $\{N_x=\infty\}$. Continuity from above [F11] and step 2.1 give $\mathbb P_x(N_x=\infty)=\lim_{k\to\infty}r_x^{k-1}$. If $x$ is recurrent, [F5] gives $r_x=1$, so this limit is $1$. If $x$ is transient, [F5] gives $0\le r_x<1$, and [F12] makes the limit $0$. These two cases exhaust all states, so $x$ is recurrent if and only if $\mathbb P_x(N_x=\infty)=1$. [F4, F5, F11, F12, step 2.1, cases-exhaustive, cases]

3.2 For $M\ge1$, let $W_M:=\sum_{k=1}^{M}\mathbf 1_{\{N_x\ge k\}}$. These are nonnegative measurable variables, increase pointwise to $N_x$, and [F10] together with step 2.1 gives $\mathbb E_xN_x=\sum_{k=1}^{\infty}\mathbb P_x(N_x\ge k)=\sum_{j=0}^{\infty}r_x^j$. If $x$ is recurrent then [F5] gives $r_x=1$ and this sum is $+\infty$. If $x$ is transient then [F5] gives $r_x<1$ and [F13] gives $\mathbb E_xN_x=1/(1-r_x)<\infty$. In view of step 1.2, the Green series diverges exactly in the recurrent case. This proves both directions of the recurrence/Green-series equivalence without subtracting extended values. [F2, F4, F5, F10, F13, step 2.1, step 1.2, cases-exhaustive]

4.1 In the transient case, for every $k\ge1$ the nested tail events satisfy $\mathbb P_x(N_x=k)=\mathbb P_x(N_x\ge k)-\mathbb P_x(N_x\ge k+1)=(1-r_x)r_x^{k-1}$ by step 2.1 and finite subtraction of probabilities in $[0,1]$. Since $\mathbb P_x(N_x=\infty)=0$ by step 3.1, these masses account for all outcomes; their sum is $(1-r_x)\sum_{j\ge0}r_x^j=1$ by [F13]. When $r_x=0$, the convention $0^0=1$ [F14] gives $\mathbb P_x(N_x=1)=1$ and $\mathbb P_x(N_x=k)=0$ for $k>1$, as expected when no positive return occurs. The mean formula is the transient case of step 3.2. [F13, F14, step 2.1, step 3.1, step 3.2]

5.1 If $E=\varnothing$, there is no $x$ and the theorem is vacuous. For a one-state absorbing chain, $r_x=1$, $N_x=\infty$ almost surely, and $p^{(n)}(x,x)=1$ for every $n$, agreeing with both recurrence criteria. If a deterministic chain started at $x$ leaves and never returns, then $r_x=0$, $N_x=1$ almost surely, and $p^{(n)}(x,x)=0$ for $n\ge1$, agreeing with the transient formulas. If instead a deterministic cycle returns after a fixed positive period $d$, then $r_x=1$ and $p^{(md)}(x,x)=1$ for all $m\ge0$, so both the infinite-visit probability and Green series are infinite as asserted. The $n=0$ Green term and $k=1$ tail were treated explicitly in steps 1.1 and 1.2–3.2. AC [A1] is used for the specified chain law and the conditional strong-Markov identity [F8]; the return-series arithmetic itself uses no choice. Both stated equivalences have been proved in both directions in steps 3.1 and 3.2. [A1, F1, F2, F3, F4, F5, F6, F8, step 1.1, step 2.1, step 3.1, step 1.2, step 3.2, step 4.1, given] ∎
