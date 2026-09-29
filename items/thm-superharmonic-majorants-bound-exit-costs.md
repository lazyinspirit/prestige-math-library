---
id: thm-superharmonic-majorants-bound-exit-costs
kind: theorem
title: "Superharmonic majorants bound exit costs"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-first-step-equations-for-nonnegative-exit-costs
  - def-nonnegative-discrete-drift-for-countable-chains
  - def-nonnegative-extended-series
  - def-nonnegative-simple-measurable-function
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-monotone-convergence-for-the-integral
  - lem-bounded-function-form-of-the-markov-property
  - thm-conditional-monotone-convergence
  - thm-fatou-lemma
  - cor-additivity-of-the-nonnegative-lebesgue-integral
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "§2, equation (4), printed/PDF p. 3, defines the exit payoff and pre-exit running cost. In §3, Lemma 24.6 and its proof give the stopped supermartingale construction, and Theorem 24.7 and its proof state the superharmonic-majorant principle. The displayed limit identity on nonexit paths in the Theorem 24.7 proof is not used here; this item instead proves finite-time stopped expectation bounds and applies Fatou, and it adds pointwise finite Pψ to justify the unbounded one-step conditional identity."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X$ be a Markov chain on an at most
countable state space $E$, with transition matrix $p$, let $D\subseteq E$, and
put $T=T_{D^c}$. Let $f:D^c\to[0,\infty)$ and $c:D\to[0,\infty)$ be bounded.
Define $B=f(X_T)$ on $\{T<\infty\}$ and $B=0$ on $\{T=\infty\}$, and put
$$u(x):=\mathbb E_x\!\left[B+\sum_{0\le m<T}c(X_m)\right] \quad (x\in E),$$
as in [[thm-first-step-equations-for-nonnegative-exit-costs]]. Suppose
$\psi:E\to[0,\infty)$ is finite-valued, $P\psi(x)<\infty$ for every $x$,
$\psi(x)\ge f(x)$ on $D^c$, and $L\psi(x)\le-c(x)$ on $D$, where
$$P\psi(x)=\sum_{y\in E:p(x,y)>0}p(x,y)\psi(y),\qquad L\psi(x)=P\psi(x)-\psi(x)$$
are the kernel action and finite drift from
[[def-nonnegative-discrete-drift-for-countable-chains]]. Then
$$u(x)\le\psi(x)\qquad\text{for every }x\in E.$$

## Facts & Assumptions

**Given:** AC, a countable-state Markov chain, $D,f,c,T,B,u$, and a finite-valued
nonnegative $\psi$ satisfying the displayed boundary and drift inequalities
and $P\psi(x)<\infty$ at each state.

[A1] AC supplies the canonical chain laws and the conditional-expectation
versions used by the Markov and conditional-monotone-convergence results.
([[def-axiom-of-choice]])

[F1] $T_A=\inf\{n\ge0:X_n\in A\}$; in particular $T=0$ for an initial state
in $D^c$, and $\{T\le n\}$ is measurable from the first $n+1$ states.
([[def-hitting-return-and-visit-times]])

[F2] For the transition kernel $K$, $p(x,y)=K(x,\{y\})$.
([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] Under the deterministic-start law, $X_0=x$ almost surely and its
expectation is denoted by $\mathbb E_x$.
([[def-initial-distribution-of-a-markov-chain]])

[F4] The exit reward is $B+\sum_{0\le m<T}c(X_m)$, with boundary payoff zero
when $T=\infty$; its expectation is $u(x)$.
([[thm-first-step-equations-for-nonnegative-exit-costs]])

[F5] $P\phi(x)$ is the sum over positive transition weights, and if $\phi$ is
finite-valued with finite $P\phi(x)$, then $L\phi(x)=P\phi(x)-\phi(x)$.
([[def-nonnegative-discrete-drift-for-countable-chains]])

[F6] Bounded measurable $g$ satisfies
$\mathbb E[g(X_{n+1})\mid\mathcal F_n]=Kg(X_n)$ almost surely.
([[lem-bounded-function-form-of-the-markov-property]])

[F7] Increasing nonnegative conditional expectations converge to the
conditional expectation of their pointwise limit, whose defining event
integrals hold for every event in the conditioning sigma-algebra.
([[thm-conditional-monotone-convergence]])

[F8] A nonnegative integral passes through an increasing pointwise limit.
([[thm-monotone-convergence-for-the-integral]])

[F9] A finite-range nonnegative function has its simple integral given by its
finite sum of values times the measures of their level sets; that is its
nonnegative integral. ([[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F10] The nonnegative integral is the supremum of the simple integrals of
nonnegative simple minorants. ([[def-nonnegative-lebesgue-integral]])

[F11] The integral of a pointwise lower limit of nonnegative measurable
functions is at most the lower limit of their integrals.
([[thm-fatou-lemma]])

[F12] Nonnegative integrals are additive, including extended values.
([[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F13] An at most countable set is finite or admits a listing by $\mathbb N$.
([[def-countable]])

[F14] A nonnegative extended series is the supremum of its finite partial sums.
([[def-nonnegative-extended-series]])

## Proof

**Proof technique:** define the path reward before any random-time evaluation, then use bounded truncations and monotone convergence.

1.1 Fix $x\in E$ and a finite-valued nonnegative $g$. Exhaust finite $E$ by its finite initial subsets, or, for countably infinite $E$, fix an enumeration $e_0,e_1,\ldots$ and put $F_j=\{e_0,\ldots,e_{j-1}\}$. Each $g\mathbf 1_{F_j}$ is a finite-range simple function, and the simple-integral formula plus $p(x,y)=K(x,\{y\})$ gives $\int_Eg(y)\mathbf 1_{F_j}(y)K(x,dy)=\sum_{y\in F_j}p(x,y)g(y)$, with zero weights omitted from the row action. These functions increase to $g$, so monotone convergence and the definition of the nonnegative row series give $Kg(x):=\int_Eg(y)K(x,dy)=Pg(x)$, also for finite $E$. [F2, F5, F8, F9, F10, F13, F14, given]

1.2 For each finite $n$, define $M_n:=\psi(X_{n\wedge T})+\sum_{m<n\wedge T}c(X_m)$. By [F1], this is a finite sum of measurable nonnegative terms, equivalently using $\sum_{m<n}\mathbf 1_{\{T>m\}}c(X_m)$, so $M_n$ is measurable and finite pathwise. On $\{T\le n\}$, $M_{n+1}=M_n$; on $S_n:=\{T>n\}\in\mathcal F_n$, one has $X_n\in D$, $M_n=\psi(X_n)+\sum_{m<n}c(X_m)$, and $M_{n+1}=\psi(X_{n+1})+\sum_{m\le n}c(X_m)$. [F1, given]

2.1 For $N\ge1$, let $\psi_N=\min(\psi,N)$. It is bounded and measurable, so [F6] and step 1.1 give $\mathbb E[\psi_N(X_{n+1})\mid\mathcal F_n]=P\psi_N(X_n)$ almost surely. As $N\uparrow\infty$, both $\psi_N(X_{n+1})$ and $P\psi_N(X_n)$ increase to their untruncated values: for the row action, its supremum over $N$ and over finite row partial sums commute, and each finite partial sum converges termwise. Conditional monotone convergence [F7] therefore yields $\mathbb E[\psi(X_{n+1})\mid\mathcal F_n]=P\psi(X_n)$ almost surely, with the right side finite at every state by hypothesis. [F5, F6, F7, F14, step 1.1, given]

3.1 Fix $x\in E$ under $\mathbb P_x$. Since $M_0=\psi(x)$, suppose inductively that $\mathbb E_xM_n\le\psi(x)$, which makes $M_n$ integrable. Integrating the conditional identity from step 2.1 over $S_n$ by the defining event-integral property [F7] gives $\mathbb E_x[\mathbf 1_{S_n}\psi(X_{n+1})]=\mathbb E_x[\mathbf 1_{S_n}P\psi(X_n)]$. On $S_n$, $P\psi(X_n)+c(X_n)\le\psi(X_n)$ by the drift hypothesis, and $\mathbb E_x[\mathbf 1_{S_n}\psi(X_n)]\le\mathbb E_xM_n<\infty$; thus $\mathbb E_x[\mathbf 1_{S_n}(\psi(X_{n+1})+c(X_n))]\le\mathbb E_x[\mathbf 1_{S_n}\psi(X_n)]$. Off $S_n$ the stopped quantities agree, while on $S_n$ their earlier cost sums agree; nonnegative additivity [F12] now yields $\mathbb E_xM_{n+1}\le\mathbb E_xM_n\le\psi(x)$. Induction proves finite stopped expectations without assuming global integrability of $\psi(X_n)$. [F3, F5, F7, F12, step 2.1, step 1.2, given]

4.1 Put $Z:=B+\sum_{0\le m<T}c(X_m)$, so $\mathbb E_xZ=u(x)$ by [F4]. On $\{T<\infty\}$, for every $n\ge T$, $M_n=\psi(X_T)+\sum_{m<T}c(X_m)\ge f(X_T)+\sum_{m<T}c(X_m)=Z$. On $\{T=\infty\}$, $B=0$ and $M_n\ge\sum_{m<n}c(X_m)$, whose partial costs increase to $Z$. Hence $Z\le\liminf_{n\to\infty}M_n$ pointwise without evaluating $X_\infty$; Fatou [F11] and step 3.1 give $u(x)=\mathbb E_xZ\le\mathbb E_x[\liminf_nM_n]\le\liminf_n\mathbb E_xM_n\le\psi(x)$. Since $x$ was arbitrary, the claim holds at every state. [F4, F11, step 3.1, given]

5.1 If $E=\varnothing$, there is no state to check. If $D=\varnothing$, then $T=0$ and the conclusion is $f\le\psi$; if $D=E$, step 4.1 applies with $B=0$. When $f=c=0$, $u=0\le\psi$. For a one-state chain, a boundary start has $T=0$, and if its state is in $D$ then $P\psi=\psi$ forces $c=0$ and $u=0$. Deterministic transitions are covered by the one-step identity. A hit at $T=n+1$ incurs $c(X_n)$ and then the boundary value at $X_{n+1}$. AC [A1] supports the canonical laws, bounded conditional Markov identities, and conditional monotone convergence; the pathwise comparison itself uses no choice. This is a one-way bound, with no iff claim. [A1, F1, F3, F4, F6, F7, step 1.2, step 2.1, step 4.1, given] ∎

## Source notes

Roch, Note 24 §2 equation (4), printed/PDF p. 3, defines the same exit payoff
and pre-exit running cost. In §3, Lemma 24.6 and its proof state the stopped
supermartingale construction, and Theorem 24.7 and its proof state the
majorant conclusion. In the proof of Theorem 24.7, the displayed identity for
the stopped limit at $T=\infty$ is not justified and need not hold: the limit
can retain a nonzero $\psi(X_n)$ contribution. This proof does not use that
identity or the source's supermartingale convergence step. It derives finite
stopped-expectation bounds with conditional truncations and obtains the result
from pointwise domination and Fatou. The source's generator was initially
defined for bounded functions; this item states $P\psi(x)<\infty$ at every
state and proves the unbounded one-step conditional identity locally.
