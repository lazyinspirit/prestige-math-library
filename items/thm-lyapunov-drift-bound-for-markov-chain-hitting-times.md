---
id: thm-lyapunov-drift-bound-for-markov-chain-hitting-times
kind: theorem
title: "Lyapunov drift bound for hitting times"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-nonnegative-discrete-drift-for-countable-chains
  - prop-dirac-measure-is-a-probability-measure
  - cor-canonical-markov-chain-on-path-space
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-first-step-equations-for-nonnegative-exit-costs
  - thm-superharmonic-majorants-bound-exit-costs
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "§2 equation (4), printed/PDF p. 3, defines the exit payoff and pre-exit cost; §2 Theorem 24.4 and its complete proof, printed/PDF p. 4, give the first-step equation; §3 Theorem 24.8 and its complete proof, printed/PDF p. 7 (PDF parser lines 312–336), state the Lyapunov hitting-time bound by specializing Theorem 24.7 to D=A^c, f=0 and c=1. Roch assumes A is proper and does not separately state Pψ<∞, while §1 initially defines the generator for bounded functions. This item uses the earlier library majorant theorem with explicit finite Pψ hypotheses and treats A=E directly."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $E$ be at most countable with sigma-algebra $2^E$, let $K$ be a probability kernel, and set $p(x,y)=K(x,\{y\})$. For each $x\in E$, let $\mathbb P_x$ be the canonical path-space chain law with initial measure $\delta_x$ and transition kernel $K$, and let $\mathbb E_x$ be its expectation. For $A\subseteq E$, define $T_A=\inf\{n\ge0:X_n\in A\}$. If $\psi:E\to[0,\infty)$ is finite-valued with $P\psi(x)<\infty$ for every $x$ and $L\psi(x)\le-1$ on $E\setminus A$, using the support-restricted kernel action and finite drift, then $\mathbb E_x[T_A]\le\psi(x)$ for every $x$. Consequently $\mathbb P_x(T_A<\infty)=1$.

## Facts & Assumptions

**Given:** AC, an at most countable state space $E$, a probability kernel $K$ with transition matrix $p$, a target $A\subseteq E$, and a finite-valued nonnegative $\psi$ satisfying $P\psi<\infty$ everywhere and $L\psi\le-1$ on $A^c$.

[A1] AC is the assumption available to construct each fixed-start canonical law and is assumed by the prior first-step and superharmonic-majorant theorems. ([[def-axiom-of-choice]])

[F1] An at most countable set is finite or countably infinite. ([[def-countable]])

[F2] A probability kernel is a probability measure in the target variable and has total mass one. ([[def-measure-kernel-and-probability-kernel]])

[F3] For $x\in E$, the Dirac set function $\delta_x$ is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F4] AC gives the canonical path-space law for a probability initial measure and a probability kernel; its coordinate process is the corresponding Markov chain. ([[cor-canonical-markov-chain-on-path-space]])

[F5] With initial state fixed at $x$, write $\mathbb P_x$ for the law with initial distribution $\delta_x$ and $\mathbb E_x$ for its expectation. ([[def-initial-distribution-of-a-markov-chain]])

[F6] $T_A=\inf\{n\ge0:X_n\in A\}$, the infimum of the empty set is $+\infty$, and $T_A=0$ when the start is in $A$. ([[def-hitting-return-and-visit-times]])

[F7] The transition matrix is $p(x,y)=K(x,\{y\})$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F8] For finite-valued $\psi$, $P\psi(x)=\sum_{y:p(x,y)>0}p(x,y)\psi(y)$; when this is finite, $L\psi(x)=P\psi(x)-\psi(x)$. Zero transition weights are omitted. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F9] For bounded nonnegative boundary payoff $f$ and running cost $c$, the first-step exit cost is $u(x)=\mathbb E_x[B+\sum_{0\le m<T}c(X_m)]$, where $B=f(X_T)$ on $T<\infty$ and $B=0$ on $T=\infty$. ([[thm-first-step-equations-for-nonnegative-exit-costs]])

[F10] If $D\subseteq E$, $f:D^c\to[0,\infty)$ and $c:D\to[0,\infty)$ are bounded, and finite-valued $\psi\ge0$ satisfies $P\psi<\infty$ everywhere, $\psi\ge f$ on $D^c$, and $L\psi\le-c$ on $D$, then the corresponding exit cost obeys $u(x)\le\psi(x)$. ([[thm-superharmonic-majorants-bound-exit-costs]])

[F11] Expectation of a nonnegative measurable random variable is its extended nonnegative integral, and the nonnegative integral preserves pointwise order. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

## Proof

**Proof technique:** identify $T_A$ with the unit running cost up to first exit from $A^c$, then apply the superharmonic-majorant bound.

1.1 Fix $x\in E$. By [F2] and [F3], $K$ and $\delta_x$ satisfy the kernel and initial-measure hypotheses of [F4]; AC [A1] therefore supplies the canonical law $\mathbb P_x$, and [F5] fixes the notation $\mathbb E_x$. This is done for each $x$ separately, without selecting path-space realizations as a family. [A1, F2, F3, F4, F5, given]

1.2 Pathwise, if $T_A=k<\infty$ then exactly the indices $m=0,\ldots,k-1$ satisfy $m<T_A$, while if $T_A=\infty$ every $m\ge0$ does; hence $\sum_{m\ge0}\mathbf1_{\{m<T_A\}}=T_A$ in $[0,+\infty]$. In particular the sum is empty and equals zero when the starting state is in $A$. [F6, given]

1.3 Set $D=A^c$, let $f$ be the zero function on $A=D^c$, and let $c$ be the constant one function on $D$. Both are bounded and nonnegative, $\psi\ge f$ on $A$, and [F8] identifies the given drift condition with $L\psi\le-c$ on $D$. Countability and the matrix-kernel relationship are [F1], [F2], and [F7]. [F1, F2, F7, F8, given]

2.1 For the exit problem in step 1.3, the boundary payoff is zero on both $T_A<\infty$ and $T_A=\infty$, and the accumulated running cost is $\sum_{m<T_A}1$. By [F9] and the pathwise identity in step 1.2, its value is $u(x)=\mathbb E_x[T_A]$, including the value $+\infty$ if the target is never hit. [F6, F9, step 1.2, step 1.3, given]

3.1 The hypotheses of [F10] hold for $D=A^c$, $f=0$, and $c=1$: the chain is countable by [F1], AC [A1] is assumed, step 1.3 verifies the boundary and drift inequalities, and $P\psi$ is finite everywhere by hypothesis. Therefore step 2.1 and [F10] give $\mathbb E_x[T_A]=u(x)\le\psi(x)$. [A1, F1, F8, F10, step 1.3, step 2.1, given]

4.1 For each integer $N\ge1$, pointwise $N\mathbf1_{\{T_A=\infty\}}\le T_A\wedge N\le T_A$. By [F11] and step 3.1, $N\mathbb P_x(T_A=\infty)\le\mathbb E_x[T_A\wedge N]\le\mathbb E_x[T_A]\le\psi(x)<\infty$; letting $N$ grow forces $\mathbb P_x(T_A=\infty)=0$. Thus the stated expectation bound also gives almost-sure hitting. [F11, step 3.1, given]

5.1 If $A=E$, then $T_A=0$ and the bound is immediate. If $A=\varnothing$ and $E\ne\varnothing$, step 2.1 would give $+\infty=\mathbb E_x[T_A]\le\psi(x)<\infty$, so no $\psi$ can satisfy the hypotheses; the implication is vacuous in this case. For a one-state chain, $A=E$ is the first case, while for $A=\varnothing$ its sole row has $p(x,x)=1$ and $L\psi(x)=0$, contradicting the drift assumption. On a deterministic row $p(x,y)=1$, the drift inequality gives $\psi(y)\le\psi(x)-1$ until the hit, so nonnegativity prevents an infinite path outside $A$; zero-weight terms are omitted by [F8]. The endpoints $T_A=0$ and $T_A=\infty$ were handled in steps 1.2 and 2.1. AC is used for the canonical laws and the two prior theorems, not for the pathwise identity or deterministic calculation. This is a one-way bound, not an iff claim. [A1, F6, F7, F8, step 1.2, step 2.1, step 3.1, given] ∎

## Source notes

Roch, Note 24 §2 equation (4), printed/PDF p. 3, defines the boundary payoff and accumulated pre-exit cost; the complete proof of Theorem 24.4, printed/PDF p. 4, supplies the first-step cost identity. Section 3 Theorem 24.8 and its complete proof, printed/PDF p. 7 (official PDF parser lines 312–336), state the Lyapunov hitting-time bound and reduce it to Theorem 24.7 with $D=A^c$, $f=0$, and $c=1$. Roch assumes $A$ proper and states a nonnegative $\psi$ without separately requiring finite $P\psi$; §1 initially defines the generator for bounded functions. This item uses the earlier library superharmonic-majorant theorem, whose explicit finite-$P\psi$ condition makes the action and drift well-defined, and handles $A=E$ directly. No source uncertainty remains for the stated library claim.
