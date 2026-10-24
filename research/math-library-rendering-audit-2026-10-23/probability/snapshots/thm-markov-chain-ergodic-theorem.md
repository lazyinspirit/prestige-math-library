---
id: thm-markov-chain-ergodic-theorem
kind: theorem
title: "Ergodic theorem for an irreducible positive-recurrent Markov chain"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-positive-recurrent-and-null-recurrent-state
  - thm-kac-return-time-formula-for-a-state
  - thm-renewal-decomposition-at-successive-return-times
  - thm-recurrence-and-transience-are-class-properties
  - thm-kolmogorov-iid-l1-strong-law
  - thm-monotone-convergence-for-the-integral
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.6 and §6.2, ergodic theorem for Markov chains"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible positive-recurrent
transition matrix on a countable state space $E$ with invariant probability
$\pi$, let $f:E\to\mathbb R$ satisfy $\sum_{x\in E}\pi(x)|f(x)|<+\infty$, and use
$\mathbb P_x$ for the law of the chain started at $x\in E$. Then for every
$x\in E$,

$$\frac1n\sum_{k=0}^{n-1}f(X_k)\ \longrightarrow\ \sum_{y\in E}\pi(y)f(y) \qquad\mathbb P_x\text{-almost surely.}$$

For complex-valued $f$ with $\sum_x\pi(x)|f(x)|<\infty$ the same conclusion
holds componentwise for real and imaginary parts; no aperiodicity and no
continuity or boundedness of $f$ is assumed.

## Facts & Assumptions

**Given:** AC, an irreducible positive-recurrent $p$ on countable $E$, its invariant probability $\pi$, a function $f:E\to\mathbb R$ with $\sum_x\pi(x)|f(x)|<\infty$, and a fixed starting state $x$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the positive-recurrence/Kac, return-excursion, and recurrent-class suppliers [F2]–[F4]. ([[def-axiom-of-choice]])

[F1] A recurrent state $x$ is positive recurrent when $\mathbb E_xT_x^+<\infty$; a positive-recurrent state is recurrent. ([[def-positive-recurrent-and-null-recurrent-state]])

[F2] Assume AC. For an irreducible countable chain with invariant probability $\pi$ and any state $b$: $\pi(b)>0$, $\mathbb E_bT_b^+=1/\pi(b)$, and the return-cycle occupation measure satisfies $\mu_b(y)=\pi(y)/\pi(b)$ for every $y$. ([[thm-kac-return-time-formula-for-a-state]])

[F3] Assume AC. For a recurrent state $x$, the successive return times $R_0=0<R_1<R_2<\cdots$ of a chain started at $x$ are all finite almost surely and the completed excursions $E_k=(X_{R_{k-1}},\ldots,X_{R_k})$ for $k\ge1$ are independent and identically distributed; each is a function of a chain started at $x$ run to its first positive return. ([[thm-renewal-decomposition-at-successive-return-times]])

[F4] Assume AC. If an irreducible chain has a recurrent state then every state is recurrent, and recurrence is a class property. ([[thm-recurrence-and-transience-are-class-properties]])

[F5] For iid real $(Y_k)_{k\ge1}$ with $\mathbb E|Y_1|<\infty$ one has $\frac1m\sum_{k=1}^mY_k\to\mathbb EY_1$ almost surely. ([[thm-kolmogorov-iid-l1-strong-law]])

[F6] If $0\le g_1\le g_2\le\cdots$ increase pointwise to $g$, then $\int g_n\,d\mu\uparrow\int g\,d\mu$; consequently the expectation of a nonnegative extended series is the series of the expectations. ([[thm-monotone-convergence-for-the-integral]])

[F7] Expectation is linear on integrable real random variables: $\mathbb E[aU+bV]=a\mathbb EU+b\mathbb EV$. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof

**Given:** AC, an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, an integrable $f$, and a deterministic start $x$.

**Proof technique:** decompose the path into iid excursions between successive visits to the starting state, apply the strong law to the iid cycle lengths and cycle rewards, and sandwich the partial averages between completed cycles.

1.1 By [F2], $\mathbb E_xT_x^+=1/\pi(x)\in(0,\infty)$ and $\pi(x)>0$; by [F1], the finite return mean makes $x$ positive recurrent and therefore recurrent. [A1, F1, F2, given]

2.1 By the class property [F4], every state of the irreducible chain is recurrent, although only the recurrence of $x$ is needed below. [A1, F4, step 1.1, given]

2.2 Let $R_0=0<R_1<R_2<\cdots$ be the successive return times of the chain to $x$ and define the cycle lengths and cycle rewards $L_k:=R_k-R_{k-1}$, $W_k:=\sum_{j=R_{k-1}}^{R_k-1}f(X_j)$ for $k\ge1$. By [F3] all $R_k$ are finite almost surely and the excursions are iid; hence $(L_k,W_k)_{k\ge1}$ is an iid sequence of pairs, with $(L_1,W_1)$ distributed as $(T_x^+,\sum_{n<T_x^+}f(X_n))$ under $\mathbb P_x$, and $L_k\ge1$. [A1, F3, step 1.1, given]

3.1 The reward is integrable. Put $N_y:=\sum_{n<T_x^+}\mathbf 1_{\{X_n=y\}}$, so $\mathbb E_xN_y=\mu_x(y)=\pi(y)/\pi(x)$ and $\mathbb E_xT_x^+=1/\pi(x)$ by [F2]. Enumerate the countable set $E$ and apply monotone convergence [F6] to increasing finite sums of $|f(y)|N_y$; their pointwise limit equals $\sum_{n<T_x^+}|f(X_n)|$, since each time $n<T_x^+$ contributes to exactly one state. Thus $\mathbb E_x\sum_{n<T_x^+}|f(X_n)|=\sum_y|f(y)|\mu_x(y)=\sum_y\pi(y)|f(y)|/\pi(x)<+\infty$. Define $U_1^\pm:=\sum_{n<T_x^+}f^\pm(X_n)$, the cycle rewards of the positive and negative parts of $f$. The same nonnegative calculation gives $\mathbb E_xU_1^\pm=\sum_y\pi(y)f^\pm(y)/\pi(x)<\infty$. Since $W_1=U_1^+-U_1^-$ and $|W_1|\le U_1^++U_1^- =\sum_{n<T_x^+}|f(X_n)|$ almost surely, $W_1$ is integrable; linearity [F7] yields $\mathbb E_xW_1=\sum_y\pi(y)f(y)/\pi(x)$. In general $U_1^\pm$ are not the positive and negative parts of $W_1$. Also $\mathbb E_xL_1=1/\pi(x)$. [A1, F2, F6, F7, step 2.2, given]

4.1 By the strong law [F5] applied to the iid sequences $(L_k)$ and $(W_k)$: $\frac1m\sum_{k=1}^mL_k\to\frac1{\pi(x)}$ and $\frac1m\sum_{k=1}^mW_k\to\frac{\sum_y\pi(y)f(y)}{\pi(x)}$ almost surely; consequently $R_m/m\to1/\pi(x)>0$, so $R_m\to\infty$ and $R_{m+1}/R_m\to1$ almost surely. [F5, step 3.1, given]

4.2 If $f\equiv0$ both sides vanish; if $f$ is unbounded but $\pi$-integrable its excursion rewards are still integrable by step 3.1, and no boundedness is used. [step 3.1, given]

5.1 First suppose $f\ge0$, so each $W_k\ge0$ and the partial sums $S_m:=\sum_{k=1}^mW_k$ are nondecreasing. Let $R_m\le n<R_{m+1}$; then $S_m\le\sum_{j=0}^{n-1}f(X_j)\le S_{m+1}$, while $R_m\le n<R_{m+1}$, so, for $m\ge1$, $\frac{S_m}{R_{m+1}}\le\frac1n\sum_{j<n}f(X_j)\le\frac{S_{m+1}}{R_m}$. Since $m=m(n)\to\infty$ almost surely by step 4.1, $\frac{S_m}{R_m}=\frac{S_m/m}{R_m/m}\to\sum_y\pi(y)f(y)$ and $\frac{R_{m+1}}{R_m}\to1$, so both bounding sequences converge to $\sum_y\pi(y)f(y)$, and the sandwiched average does too. [step 4.1, algebra, given]

6.1 For general real-sign $f$, write $f=f^+-f^-$ with $f^\pm\ge0$; by step 3.1 both functions satisfy $\sum_y\pi(y)f^\pm(y)\le\sum_y\pi(y)|f(y)|<\infty$, so step 5.1 applies to each, and subtracting the two almost-sure limits gives $\frac1n\sum_{j<n}f(X_j)\to\sum_y\pi(y)f^+(y)-\sum_y\pi(y)f^-(y)=\sum_y\pi(y)f(y)$ almost surely. [step 3.1, step 5.1, algebra]

6.2 The argument does not assume aperiodicity, since it uses return epochs and cycle laws; if $E$ is a singleton the conclusion is the constant identity; and $S_m/R_m$ is formed only for $m\ge1$, where $R_m\ge m\ge1$, so there is no division by zero. [step 1.1, step 2.2, step 4.1, step 5.1, given]

7.1 For complex $f$ apply step 6.1 to $\operatorname{Re}f$ and $\operatorname{Im}f$, which satisfy the same absolute-integrability hypothesis, and recombine. The arbitrary starting state $x$ was fixed once and for all at the beginning; the argument is uniform in $x$ because $x$ enters only through the bounds $\mathbb E_xT_x^+=1/\pi(x)$ and $\mu_x=\pi/\pi(x)$. [step 6.1, given]

7.2 If $f\ge0$, step 5.1 suffices; step 6.1 records the signed reduction. [step 5.1, step 6.1, given]

8.1 AC [A1] is used exactly at the AC-qualified supplier applications in steps 1.1, 2.2, and 3.1; the strong law and the sandwich/reduction arguments use no further choice. [A1, step 1.1, step 2.2, step 3.1, step 4.1, step 5.1, given] ∎
