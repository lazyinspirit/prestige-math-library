---
id: thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains
kind: theorem
title: "Convergence to stationarity for irreducible aperiodic positive-recurrent chains"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-aperiodic-chain
  - def-accessibility-communication-and-irreducibility
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-kac-return-time-formula-for-a-state
  - lem-aperiodic-return-times-are-eventually-positive
  - lem-matrix-chapman-kolmogorov-equations
  - thm-recurrence-and-transience-are-class-properties
  - thm-discrete-strong-markov-property
  - cor-canonical-markov-chain-on-path-space
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-tonelli-for-nonnegative-double-series
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.6, convergence to stationarity and coupling"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §4.2 and §5.2 plus Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible
([[def-aperiodic-chain]] and [[def-accessibility-communication-and-irreducibility]])
aperiodic positive-recurrent transition matrix on a countable state space $E$,
with unique invariant probability $\pi$. Then for every $x\in E$,

$$\bigl\lVert p^{(n)}(x,\cdot)-\pi\bigr\rVert_{\mathrm{TV}}\ \longrightarrow\ 0 \qquad(n\to\infty),$$

the total variation distance being that of
[[def-total-variation-distance-for-probability-laws]]. Aperiodicity cannot be
dropped: the deterministic two-cycle keeps oscillating and its total variation
distance from $\pi$ is $1/2$ at every time.

## Facts & Assumptions

**Given:** AC, a countable state space $E$, an irreducible aperiodic positive-recurrent transition matrix $p$ on $E$, and a fixed starting state $x\in E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the positive-recurrence, statewise Kac, recurrent-class/hitting, strong-Markov, canonical-law, and stationary-chain suppliers [F1], [F3]–[F6], [F10]. ([[def-axiom-of-choice]])

[F1] Assume AC. For an irreducible countable chain, positive recurrence of one state, positive recurrence of every state, and existence of an invariant probability are equivalent; if $b$ is positive recurrent, $\pi_*:=\mu_b/\mathbb E_bT_b^+$ is invariant with $\pi_*(b)=1/\mathbb E_bT_b^+$; and every invariant probability $\rho$ satisfies $\rho(b)>0$ and $\mathbb E_bT_b^+\le1/\rho(b)$ for every $b$. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F2] For an irreducible aperiodic countable transition matrix, for every $u,v$ there is $N_{u,v}$ with $p^{(n)}(u,v)>0$ for all $n\ge N_{u,v}$. ([[lem-aperiodic-return-times-are-eventually-positive]])

[F3] Assume AC. If $x$ is recurrent and $x\to y$, then $\mathbb P_x(T_y<\infty)=1$. ([[thm-recurrence-and-transience-are-class-properties]])

[F4] Assume Choice. Let $X$ be a $K$-chain, $\tau$ a stopping time and $H$ a bounded measurable path functional; with $Z_H:=\sum_{n\ge0}\mathbf 1_{\{\tau=n\}}H(X_n,X_{n+1},\ldots)$ and $R_h:=\sum_{n\ge0}\mathbf 1_{\{\tau=n\}}h(X_n)$, where $h(u)=\mathbb E_uH$, both zero on $\{\tau=\infty\}$ and $X_\infty$ never evaluated, one has $\mathbb E[Z_H\mid\mathcal F_\tau]=R_h$ a.s. ([[thm-discrete-strong-markov-property]])

[F5] Assume Choice. For every probability measure $\mu$ and probability kernel $K$ on a measurable space there is a unique probability on the canonical path space under which the coordinates form a chain with initial law $\mu$ and kernel $K$. ([[cor-canonical-markov-chain-on-path-space]])

[F6] If a chain has invariant initial law $\pi$, then all finite-dimensional laws are shift-invariant; in particular every one-dimensional marginal is $\pi$. ([[thm-invariant-initial-law-makes-the-chain-stationary]])

[F7] $\lVert\mu-\nu\rVert_{\mathrm{TV}}=\sup_{A}|\mu(A)-\nu(A)|$, and for probability laws on a countable discrete space $\lVert\mu-\nu\rVert_{\mathrm{TV}}=\frac12\sum_{z\in E}|\mu(z)-\nu(z)|$. ([[def-total-variation-distance-for-probability-laws]], [[lem-total-variation-half-l1-formula-on-a-countable-space]])

[F8] For every double sequence $(a_{ij})$ in $[0,+\infty]$ the order of summation may be interchanged, the two iterated sums being equal even when the common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[F9] For every countable transition matrix, $p^{(m+n)}(u,v)=\sum_zp^{(m)}(u,z)p^{(n)}(z,v)$ for $m,n\ge0$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F10] Assume AC. If an irreducible countable transition matrix has invariant probability $\rho$, then for every $y\in E$, $\rho(y)>0$ and $\mathbb E_yT_y^+=1/\rho(y)$. ([[thm-kac-return-time-formula-for-a-state]])

## Proof

**Given:** AC, an irreducible aperiodic positive-recurrent $p$ on countable $E$, a unique invariant probability $\pi$ from [F1], and $x\in E$.

**Proof technique:** run a pair of chains from $\delta_x\otimes\pi$ on the product kernel, meet on the diagonal using irreducibility of the product chain, glue at the meeting time by the strong Markov property, and convert the coupling bound into total variation by the half-$\ell^1$ formula and a finite truncation.

1.1 Uniqueness of the invariant probability: by [F1] positive recurrence supplies an invariant probability $\pi_*$. Let $\rho$ be any invariant probability and fix an arbitrary $y\in E$. Applying [F10] to each of $\pi_*$ and $\rho$ gives $\pi_*(y)=1/\mathbb E_yT_y^+=\rho(y)$. Since this holds for every $y$, $\rho=\pi_*$ pointwise, so the invariant probability $\pi$ of the statement is unique. [A1, F1, F10, given]

1.2 Define the product kernel $Q$ on $E\times E$ by $Q((u,v),(u',v')):=p(u,u')p(v,v')$. Its rows sum to one by [F8] and stochasticity of $p$, so $Q$ is a transition matrix. [F8, given]

1.3 For the total variation distance, [F7] gives $\lVert p^{(n)}(x,\cdot)-\pi\rVert_{\mathrm{TV}}=\frac12\sum_{z\in E}|p^{(n)}(x,z)-\pi(z)|$; since both $p^{(n)}(x,\cdot)$ and $\pi$ are probability laws on $E$, $|a_z-b_z|=a_z+b_z-2\min(a_z,b_z)$ termwise, so the half-sum equals $1-\sum_{z\in E}\min(p^{(n)}(x,z),\pi(z))$. [F7, given]

2.1 The product transition probabilities satisfy $Q^{(n)}((u,v),(u',v'))=p^{(n)}(u,u')p^{(n)}(v,v')$: this is true at $n=0$, and [F9] gives the $n+1$ sum over $(a,b)$; the induction hypothesis factors that double nonnegative sum into the two one-coordinate sums by [F8], after which [F9] gives the claimed formula. Thus for states $(u,v)$ and $(u',v')$, choose $n\ge\max\{N_{u,u'},N_{v,v'}\}$ from [F2]; the product formula gives $Q^{(n)}((u,v),(u',v'))>0$, so $Q$ is irreducible. [F2, F8, F9, step 1.2, algebra, given]

2.2 By [F5], the product kernel $Q$ of step 1.2 has a canonical chain $((X_n,Y_n))_{n\ge0}$ with initial law $\delta_x\otimes\pi$, so $X_0=x$ and $\mathcal L(Y_0)=\pi$. Marginalizing a $Q$-transition row over the other coordinate gives the corresponding $p$-row, so each coordinate is a $p$-chain; because $Y$ starts with invariant law $\pi$, [F6] gives $\mathcal L(Y_n)=\pi$ for all $n$. [A1, F5, F6, algebra, step 1.2, given]

2.3 The product measure $\pi\otimes\pi$ is invariant for $Q$: $((\pi\otimes\pi)Q)(u',v')=\sum_{u,v}\pi(u)\pi(v)p(u,u')p(v,v')=\bigl(\sum_u\pi(u)p(u,u')\bigr)\bigl(\sum_v\pi(v)p(v,v')\bigr)=\pi(u')\pi(v')$, using invariance of $\pi$ and the interchange of nonnegative double sums [F8]. [F8, step 1.1, given]

3.1 Aperiodicity is used in step 2.1 through [F2]. Without it, the deterministic two-cycle has a point-mass $n$-step law from $0$ and uniform stationary law, so under the sup-over-events convention [F7] the event $\{0\}$ realizes distance $1/2$ at every $n$. [F2, F7, step 2.1, given]

3.2 By steps 2.1–2.2 and the equivalence [F1], the product chain is positive recurrent, hence recurrent, and [F3] applied to its irreducible class gives, for every diagonal state $d_y:=(y,y)$ and every initial state $(u,v)$, $\mathbb P_{(u,v)}(T_{d_y}<\infty)=1$. [A1, F1, F3, step 2.1, step 2.3, given]

4.1 Let $\Delta:=\{(y,y):y\in E\}$ and $T:=T_\Delta=\inf\{n\ge0:X_n=Y_n\}$. Then $\mathbb P(T<\infty)=1$ under the law of step 2.2: conditionally on $Y_0=y$ one has $T\le T_{(y,y)}$, so $\mathbb P(T<\infty)\ge\mathbb P_{(x,y)}(T_{(y,y)}<\infty)$ for each $y$, and averaging over the law $\pi$ of $Y_0$ with step 3.2 gives $\mathbb P(T<\infty)\ge\sum_y\pi(y)\cdot1=1$. [step 2.2, step 3.2, given]

5.1 Construct a process $W$: set $W_n:=X_n$ for $n\le T$ and $W_n:=Y_n$ for $n>T$. By the strong Markov property [F4] applied to the product chain at the stopping time $T$, the post-$T$ path given $\mathcal F_T$ is a product chain started at the diagonal state $(Z,Z)$, $Z:=X_T=Y_T$; hence its second coordinate is a $p$-chain started at $Z$ and measurable in the post-$T$ randomness alone. Concatenating the $X$-path up to $T$ with that second coordinate therefore yields a process with the law of a canonical $p$-chain started at $x$, so $\mathcal L(W_n)=p^{(n)}(x,\cdot)$ for every $n$. [A1, F4, F5, step 4.1, given]

6.1 Since $W_n=Y_n$ for all $n>T$ and both processes are defined everywhere, $\{W_n\ne Y_n\}\subseteq\{T>n\}$; consequently for each $z\in E$ and each $n$, $|p^{(n)}(x,z)-\pi(z)|=|\mathbb P(W_n=z)-\mathbb P(Y_n=z)|\le\mathbb P(T>n)$, using $\mathcal L(Y_n)=\pi$ from step 2.2. Hence $p^{(n)}(x,z)\to\pi(z)$ for every $z$, since $\mathbb P(T<\infty)=1$ by step 4.1. [step 2.2, step 4.1, step 5.1, given]

7.1 The minimum sum converges to $1$: given $\varepsilon>0$, countable additivity of $\pi$ supplies a finite $F\subseteq E$ with $\pi(F)>1-\varepsilon$; by step 6.1, $\min(p^{(n)}(x,z),\pi(z))\to\pi(z)$ for each of the finitely many $z\in F$, so $\liminf_n\sum_{z\in E}\min(p^{(n)}(x,z),\pi(z))\ge\sum_{z\in F}\pi(z)>1-\varepsilon$; letting $\varepsilon\downarrow0$ and using $\sum_z\min(\cdot,\cdot)\le\sum_z\pi(z)=1$ gives convergence of the full sum to $1$. [step 6.1, step 1.3, given]

7.2 The pointwise comparison in step 6.1 handles both signs of the difference, so no separate converse case is needed. [step 6.1, given]

8.1 Combining steps 1.3 and 7.1, $\lVert p^{(n)}(x,\cdot)-\pi\rVert_{\mathrm{TV}}\to0$ for the arbitrary starting state $x$, which is the assertion. [step 1.3, step 7.1, given]

8.2 Step 7.1 takes a finite high-mass subset before passing to the limit; it does not interchange a limit with an infinite sum. [step 7.1, given]

9.1 If $E$ is a singleton, both laws coincide for every $n$; the same argument applies to any starting state because $x$ entered only through the initial law $\delta_x\otimes\pi$. [step 2.2, step 8.1, given]

10.1 AC [A1] is used exactly at the AC-qualified supplier applications in steps 1.1, 2.2, 3.2, and 5.1; the finite comparison and truncation arguments are choice-free. [A1, step 1.1, step 2.2, step 3.2, step 5.1, given] ∎
