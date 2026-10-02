---
id: cex-a-stationary-chain-need-not-be-ergodic
kind: counterexample
title: "A stationary chain need not be ergodic"
status: draft
origin: pipeline
landmark: false
deps:
  - def-stationary-process-and-canonical-shift
  - def-ergodic-measure-preserving-system
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
proof_strategy: direct
---

## Statement refuted

A strictly stationary Markov chain need not be ergodic. On $E=\{0,1\}$ with the
identity transition matrix and $\pi=(1/2,1/2)$, the chain started from $\pi$ is
strictly stationary, but the strictly shift-invariant path event "zero occurs
infinitely often" has probability $1/2$; the canonical shift therefore fails
to be ergodic ([[def-ergodic-measure-preserving-system]]). The example is also
reducible, so it does not contradict the ergodicity theorem for irreducible
positive-recurrent chains.

## Facts & Assumptions

**Given:** The two-point state space $E=\{0,1\}$, the identity transition matrix $P$, the probability $\pi=(1/2,1/2)$, and the $P$-chain $X$ started from $\pi$ on the canonical path space $E^{\mathbb N_0}$.

[F1] A transition matrix has nonnegative entries with every row summing to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] A probability vector $\pi$ is invariant for a countable transition matrix exactly when $\pi(y)=\sum_x\pi(x)p(x,y)$ for every $y$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F3] A process is strictly stationary when its finite-dimensional laws are unchanged by nonnegative time shifts; its canonical path law is the pushforward under the coordinate map, the left shift is $\theta(z)_n=z_{n+1}$, and a strictly stationary process is ergodic when $\theta$ is ergodic for that path law. ([[def-stationary-process-and-canonical-shift]])

[F4] A measure-preserving system is ergodic for $\mu$ exactly when every strictly invariant event $A$ (that is, $T^{-1}A=A$) has $\mu(A)=0$ or $\mu(X\setminus A)=0$. ([[def-ergodic-measure-preserving-system]])

## Counterexample

**Given:** $E=\{0,1\}$, the identity matrix $P$, the law $\pi=(1/2,1/2)$, and the chain $X$ started from $\pi$.

**Proof technique:** identify the canonical path law explicitly, exhibit a strictly shift-invariant event of intermediate probability, and conclude non-ergodicity.

1.1 The identity matrix $P=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ is a transition matrix, and $\pi$ is invariant: $(\pi P)(0)=\pi(0)\cdot1=1/2=\pi(0)$ and likewise at $1$, which is exactly the identity of [F2]. [F1, F2, given]

1.2 The event $A:=\{z\in E^{\mathbb N_0}:z_n=0\text{ for infinitely many }n\}=\bigcap_{m\ge0}\bigcup_{n\ge m}\{z:z_n=0\}$ is a countable Boolean combination of coordinate events and is therefore measurable. [F3, given]

2.1 Both states are absorbing, so $X_n=X_0$ for every $n\ge0$; hence every finite-dimensional law of $X$ is the law of the constant tuple $(X_0,\ldots,X_0)$, which is unchanged by any nonnegative time shift, and the chain is strictly stationary in the sense of [F3]. Its canonical path law is $\mathbb P_\pi=\frac12\delta_{\bar 0}+\frac12\delta_{\bar 1}$, where $\bar 0=(0,0,0,\ldots)$ and $\bar 1=(1,1,1,\ldots)$. [F3, step 1.1, given]

2.2 The event $A$ is strictly shift-invariant: $\theta^{-1}A=\{z:\theta z\in A\}=\{z:z_{n+1}=0$ for infinitely many $n\}=A$, because deleting the first coordinate of a sequence does not change whether infinitely many of its entries vanish. [F3, step 1.2, given]

3.1 The left shift preserves $\mathbb P_\pi$: by step 2.1 the path law is supported on the two fixed paths $\bar 0,\bar 1$, and $\theta\bar 0=\bar 0$, $\theta\bar 1=\bar 1$, so $\mathbb P_\pi(\theta^{-1}B)=\mathbb P_\pi(B)$ for every measurable $B$. [F3, step 2.1, given]

4.1 Evaluating at $A$: $\bar 0\in A$ and $\bar 1\notin A$, so $\mathbb P_\pi(A)=\frac12$, and by step 2.2 this is the measure of a strictly invariant event; since $\frac12\notin\{0,1\}$, [F4] shows that the canonical shift is not ergodic, even though $\mathbb P_\pi$ is shift-invariant by step 3.1. [F4, step 2.2, step 3.1, given]

5.1 Boundary and axiom cases: the event $A$ is strictly invariant, not merely invariant modulo null sets, and step 2.2 verifies the identity on the whole path space; the value $1/2$ is neither $0$ nor $1$, so the criterion of [F4] genuinely fails; $A^c$ and the events "infinitely many ones" behave the same way; if $\pi$ were concentrated on $0$ or on $1$ the chain would be ergodic, so the mixture is essential; the chain is reducible with two communicating classes $\{0\}$ and $\{1\}$, which is exactly why the ergodicity result for irreducible chains does not apply; the explicit description of $\mathbb P_\pi$ in step 2.1 makes no selection and no choice principle is used; and no convergence claim is made, the example refuting only the implication "stationary $\Rightarrow$ ergodic". [F2, F3, F4, step 2.1, step 4.1, given] ∎
