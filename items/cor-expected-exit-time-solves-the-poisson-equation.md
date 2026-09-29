---
id: cor-expected-exit-time-solves-the-poisson-equation
kind: corollary
title: "Expected exit time solves the Poisson equation"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-initial-distribution-of-a-markov-chain
  - thm-first-step-equations-for-nonnegative-exit-costs
  - def-nonnegative-discrete-drift-for-countable-chains
  - lem-finite-irreducible-chain-hitting-time-geometric-tail
proof_strategy: direct
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "§2 equation (4) and Example 24.3, printed p. 3/PDF p. 3; Theorem 24.4 and its proof, printed p. 4/PDF p. 4, state the first-step equation and its finite-valued generator form. Lemma 24.5 and its proof, printed p. 4/PDF p. 5, motivate the finite-mean bound, but its statement omits A nonempty although its proof requires a path to A; the library lemma explicitly assumes a nonempty target."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X$ be a Markov chain on an at most countable state space $E$ with transition matrix $p(x,y)=K(x,\{y\})$ as in [[def-transition-matrix-and-n-step-transition-probabilities]]. For $D\subseteq E$, put $T=T_{D^c}$ and
$$v(x):=\mathbb E_x T,\qquad x\in E.$$
If $v(x)<\infty$ for every $x\in E$, then
$$v(x)=0\quad(x\in D^c),\qquad Lv(x)=-1\quad(x\in D),$$
where $P$ and the finite drift $L$ are as in [[def-nonnegative-discrete-drift-for-countable-chains]]. In particular, the pointwise finiteness premise holds when $E$ is finite, $p$ is irreducible, and $D\subsetneq E$.

## Facts & Assumptions

**Given:** AC; an at most countable state space $E$ with a Markov chain transition matrix $p$; a set $D\subseteq E$; and $T=T_{D^c}$.

[A1] AC is the axiom that every family of nonempty sets has a choice function. It is explicitly assumed by the first-step theorem and the finite irreducible hitting-time lemma used here. ([[def-axiom-of-choice]])

[F1] $T_A=\inf\{n\ge0:X_n\in A\}$, with the empty infimum equal to $+\infty$. ([[def-hitting-return-and-visit-times]])

[F2] The transition-matrix entries are $p(x,y)=K(x,\{y\})$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] With initial state fixed at $x$, $\mathbb P_x$ is the law with initial distribution $\delta_x$ and $\mathbb E_x$ is its expectation. ([[def-initial-distribution-of-a-markov-chain]])

[F4] For bounded nonnegative boundary reward $f$ and running cost $c$, the expected exit-cost function satisfies $u=f$ on $D^c$ and $u=c+Pu$ on $D$ in extended nonnegative arithmetic. ([[thm-first-step-equations-for-nonnegative-exit-costs]])

[F5] The nonnegative kernel action is $P\phi(x)=\sum_{y:p(x,y)>0}p(x,y)\phi(y)$. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F6] If $\phi$ is finite-valued and $P\phi(x)<\infty$, then its drift is the finite real number $L\phi(x)=P\phi(x)-\phi(x)$. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F7] The geometric-tail clause of the finite irreducible hitting-time lemma assumes a finite state space, an irreducible transition matrix, and a nonempty target $A$. ([[lem-finite-irreducible-chain-hitting-time-geometric-tail]])

[F8] Under those assumptions, the lemma proves $\mathbb E_xT_A<\infty$ for every state $x$. ([[lem-finite-irreducible-chain-hitting-time-geometric-tail]])

## Proof

**Proof technique:** identify the accumulated unit cost with the exit time, then apply the finite irreducible hitting-time bound.

1.1 On each path, $\sum_{m\ge0}\mathbf 1_{\{m<T\}}=T$: if $T=t\in\mathbb N_0$, exactly the indices $m=0,\ldots,t-1$ contribute, while if $T=\infty$, every index contributes and both sides are $+\infty$. The sum is empty when $T=0$. Thus the path cost in [[thm-first-step-equations-for-nonnegative-exit-costs]] with boundary payoff $f=0$ and running cost $c=1$ equals $T$, including nonexit paths. [F1, F4, given]

2.1 The first-step theorem with $f=0$ and $c=1$ has expected cost $v$ by step 1.1 and [F3], so it gives $v=0$ on $D^c$ and $v(x)=1+Pv(x)$ for $x\in D$. [A1, F3, F4, step 1.1, given]
The constant functions are bounded and nonnegative, so the theorem applies; its relation on $D$ is in extended nonnegative arithmetic:
$$v(x)=1+Pv(x)\quad(x\in D)$$

3.1 If $v$ is finite at every state, then for each $x\in D$ the first-step relation forces $Pv(x)<\infty$ and hence $Lv(x)=-1$. [F5, F6, step 2.1, given]
Indeed, step 2.1 gives $v(x)=1+Pv(x)<\infty$, so $Pv(x)<\infty$. Since $v$ is finite-valued, [F6] defines $Lv(x)$, and the finite-real equation gives
$$Lv(x)=Pv(x)-v(x)=(v(x)-1)-v(x)=-1.$$
Thus the Poisson equation is well-defined at every state of $D$.

4.1 If $E$ is finite, $p$ is irreducible, and $D\subsetneq E$, then $A=D^c$ is nonempty. Thus [F7] holds with this target, and [F8] gives $\mathbb E_xT_A<\infty$ for every $x\in E$. Steps 2.1 and 3.1 give the asserted boundary values and equation. The nonempty-target condition matters: for $D=E$ in a nonempty state space, $T_{\varnothing}=\infty$, so the global finite-mean premise fails. [A1, F1, F2, F7, F8, step 2.1, step 3.1, given]

5.1 If $E=\varnothing$, the initial-distribution definition supplies no probability law of an $E$-valued chain; there are no states to check. If $D=\varnothing$, then $T=0$ from every state, so $v=0$ and the equation on $D$ is vacuous. For a one-state chain $E=\{x\}$, this is the finite irreducible proper-domain case; if instead $D=E$, then $T=\infty$ and the finite-mean premise fails. As a deterministic-row check, on a finite deterministic cycle and a proper $D$, the nonempty target is reached within at most $|E|-1$ steps; at an interior state $x$ with successor $\sigma(x)$, the first-step identity reads $v(x)=1+v(\sigma(x))$, hence $Lv(x)=-1$. The endpoint $T=0$ is counted by the empty path sum, and for $x\in D$ one has $T\ge1$, so the unit cost counts precisely the steps strictly before exit. AC is used through the cited first-step and finite hitting-time results; no further choice is made here. This corollary states implications, not an iff. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, given] ∎
