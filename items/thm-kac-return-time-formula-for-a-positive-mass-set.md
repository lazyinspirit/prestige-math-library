---
id: thm-kac-return-time-formula-for-a-positive-mass-set
kind: theorem
title: "Kac return-time formula for a positive-mass set"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - thm-time-reversal-of-a-stationary-markov-chain
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-kac-return-time-formula-for-a-state
  - thm-recurrence-and-transience-are-class-properties
  - def-hitting-return-and-visit-times
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-for-nonnegative-double-series
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, Lemma 21.12 and §21.3 / Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible transition matrix
on a countable state space $E$ with invariant probability $\pi$, and let
$A\subseteq E$ be nonempty. With $T_A^+:=\inf\{n\ge1:X_n\in A\}$
([[def-hitting-return-and-visit-times]]), one has $\pi(A)>0$ and

$$\sum_{x\in A}\pi(x)\,\mathbb E_xT_A^+=1,$$

where the terms are extended nonnegative numbers; equivalently
$\mathbb E_{\pi(\cdot\mid A)}T_A^+=1/\pi(A)$. For a singleton $A=\{b\}$ this
recovers the state Kac identity $\pi(b)\mathbb E_bT_b^+=1$
([[thm-kac-return-time-formula-for-a-state]]).

## Facts & Assumptions
**Given:** AC, an irreducible countable transition matrix $p$ with invariant probability $\pi$, and a nonempty $A\subseteq E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the positive-recurrence, reversal, and recurrent-class/hitting suppliers [F3]–[F5]. ([[def-axiom-of-choice]])

[F1] $T_A=\inf\{n\ge0:X_n\in A\}$ and $T_A^+=\inf\{n\ge1:X_n\in A\}$, with value $+\infty$ on the event that the infimum is empty; the initial visit at time zero is not counted by $T_A^+$. ([[def-hitting-return-and-visit-times]])

[F2] On a countable state space $\pi$ is invariant exactly when $\pi(y)=\sum_x\pi(x)p(x,y)$ for every $y$; a $p$-chain started in $\pi$ has $X_0$ distributed as $\pi$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F3] Assume AC. For an irreducible countable chain with invariant probability $\pi$: every state is positive recurrent and hence recurrent, all one-step and $n$-step transition probabilities are determined by $p$, and $\pi(x)>0$ for every $x\in E$. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F4] Assume AC. For a stationary countable chain with law $\pi$: the reverse kernel $p_*(x,y)=\pi(y)p(y,x)/\pi(x)$ is a transition matrix on $E_+=\{x:\pi(x)>0\}$ with $\pi$ invariant, and every finite segment read backward is distributed as a stationary $p_*$-chain; for every $r\ge1$ and $0\le n_0<\cdots<n_r$, a stationary $p_*$-chain $X^*$ with initial law $\pi$ satisfies $\mathcal L(X_{n_r},\ldots,X_{n_0})=\mathcal L(X^*_0,X^*_{n_r-n_{r-1}},\ldots,X^*_{n_r-n_0})$. ([[thm-time-reversal-of-a-stationary-markov-chain]])

[F5] Assume AC. If $x$ is recurrent and $x\to y$, then $\mathbb P_x(T_y<\infty)=1$; recurrence is a class property. ([[thm-recurrence-and-transience-are-class-properties]])

[F6] For a random variable $T$ with values in $\{0,1,2,\ldots\}\cup\{+\infty\}$, $\mathbb ET=\sum_{n\ge0}\mathbb P(T>n)$, both sides extended nonnegative; this follows by monotone convergence applied to $T=\sum_{n\ge0}\mathbf 1_{\{T>n\}}$. ([[thm-monotone-convergence-for-the-integral]])

[F7] For every double sequence $(a_{ij})$ in $[0,+\infty]$ the order of summation may be interchanged, the two iterated sums being equal even when the common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[F8] Under the present irreducibility and invariance hypotheses, the state Kac identity is $\pi(b)\mathbb E_bT_b^+=1$. ([[thm-kac-return-time-formula-for-a-state]])




## Proof

**Given:** AC, an irreducible $p$ on countable $E$, an invariant probability $\pi$, a nonempty $A\subseteq E$, and a $p$-chain started in $\pi$.

**Proof technique:** identify the probability that the chain starts in $A$ and avoids it up to time $n$ with the probability that the reversed stationary chain first hits $A$ at time $n$, then sum the identity over $n$.

1.1 By [F3] every state satisfies $\pi(x)>0$, so $E_+=\{x:\pi(x)>0\}=E$; by [F4] the reverse kernel $p_*(x,y)=\pi(y)p(y,x)/\pi(x)$ is a transition matrix on $E$ with $\pi$ invariant. The $n$-step reverse identity $p_*^{(n)}(x,y)=\pi(y)p^{(n)}(y,x)/\pi(x)$ follows by induction on $n$ from this definition and the invariance of $\pi$. [A1, F3, F4, algebra]

1.2 For a nonempty $A$, $\pi(A)=\sum_{x\in A}\pi(x)>0$, since every term is positive by [F3] and the sum is over a nonempty set. [A1, F3, given]

1.3 For every $n\ge0$, $\mathbb P_\pi(X_0\in A,\ X_1\notin A,\ldots,X_n\notin A)=\sum_{x\in A}\pi(x)\,\mathbb P_x(T_A^+>n)$: the events $\{X_0=x\}$ for $x\in A$ are disjoint, each carries probability $\pi(x)$ by [F2], and conditional on $X_0=x$ with $x\in A$ the event that $X_1,\ldots,X_n$ avoid $A$ is exactly $\{T_A^+>n\}$ by [F1]. [F1, F2, given]

1.4 If $A=E$, then $T_A^+=1$ and the formula reduces to $\sum_x\pi(x)=1$. [F1, given]

2.1 The reverse chain is irreducible: for $x,y\in E$ irreducibility of $p$ gives $n$ with $p^{(n)}(y,x)>0$, and then the identity of step 1.1 gives $p_*^{(n)}(x,y)=\pi(y)p^{(n)}(y,x)/\pi(x)>0$. [step 1.1, given]

2.2 If $n\ge1$, [F4] gives $\mathcal L(X_n,\ldots,X_0)=\mathcal L(X^*_0,\ldots,X^*_n)$; if $n=0$, both $X_0$ and $X^*_0$ have law $\pi$. Thus the event in step 1.3 has probability $\mathbb P^*_{\pi}(X^*_0\notin A,\ldots,X^*_{n-1}\notin A,\ X^*_n\in A)=\mathbb P^*_{\pi}(T^*_A=n)$, where $T^*_A:=\inf\{k\ge0:X^*_k\in A\}$. [A1, F2, F4, step 1.3, given]

3.1 Since $p_*$ is irreducible and has the invariant probability $\pi$, [F3] applied to $p_*$ makes it positive recurrent and recurrent; then [F5] gives $\mathbb P^*_z(T_a<\infty)=1$ for all $z\in E$ and every fixed $a\in E$. [A1, F3, F5, step 2.1, given]

3.2 Summing the identities of steps 1.3 and 2.2 over $n\ge0$ and using the tail formula [F6] for each nonnegative integer valued $T_A^+$ gives $\sum_{x\in A}\pi(x)\mathbb E_xT_A^+=\sum_{n\ge0}\sum_{x\in A}\pi(x)\mathbb P_x(T_A^+>n)=\sum_{n\ge0}\mathbb P^*_\pi(T^*_A=n)$, the interchange of the two nonnegative sums being [F7]. [F6, F7, step 1.3, step 2.2, given]

3.3 The value $T_A^+=+\infty$ is never evaluated as $X_\infty$: it occurs only in the nonnegative expectations and tail probabilities, and step 2.2 reverses a finite segment rather than an infinite path. [F1, F4, step 2.2, given]

4.1 The last series is $\mathbb P^*_\pi(T^*_A<\infty)=1$: choosing any $a\in A$, step 3.1 gives $\mathbb P^*_z(T_a<\infty)=1$ for every $z$, hence $\mathbb P^*_\pi(T_a<\infty)=\sum_z\pi(z)\mathbb P^*_z(T_a<\infty)=1$, and $T^*_A\le T_a$. Therefore $\sum_{x\in A}\pi(x)\mathbb E_xT_A^+=1$, which in particular shows that the weighted sum is finite. [step 3.1, step 3.2, given]

5.1 Dividing by the positive number $\pi(A)$ from step 1.2 gives $\mathbb E_{\pi(\cdot\mid A)}T_A^+=\sum_{x\in A}\frac{\pi(x)}{\pi(A)}\mathbb E_xT_A^+=\frac1{\pi(A)}$. For $A=\{b\}$ the sum has the single term $\pi(b)\mathbb E_bT_b^+=1$, agreeing with [F8]. [F8, step 1.2, step 4.1, given]

5.2 The sum in step 3.2 is over nonnegative extended terms, so it assumes no integrability beforehand; finiteness of the weighted sum follows in step 4.1. [F6, F7, step 3.2, step 4.1, given]

6.1 A one-state chain is covered by the case $A=E$ in step 1.4, and the singleton formula is the specialization in step 5.1. [step 5.1, step 1.4, given]

7.1 AC [A1] is used exactly at the AC-qualified supplier applications in steps 1.1, 2.2, and 3.1; the subsequent nonnegative summation is choice-free. [A1, step 1.1, step 2.2, step 3.1, given] ∎
