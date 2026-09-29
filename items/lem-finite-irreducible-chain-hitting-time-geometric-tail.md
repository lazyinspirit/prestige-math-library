---
id: lem-finite-irreducible-chain-hitting-time-geometric-tail
kind: lemma
title: "Geometric tail for hitting in a finite irreducible chain"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-accessibility-communication-and-irreducibility
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-markov-property-for-bounded-future-path-functionals
  - cor-layer-cake-formulas-for-random-variables
  - def-initial-distribution-of-a-markov-chain
  - thm-finite-dimensional-laws-of-a-markov-chain
  - def-recurrent-and-transient-state
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "Note 24, Lemma 24.5 (finite irreducible chain hitting-time tail); the stated result needs A nonempty"
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Statement

Assume AC. Let $E$ be finite, let $p$ be an irreducible transition matrix on $E$, and let $A\subseteq E$ be nonempty. There exist an integer $m\ge1$ and $\varepsilon\in(0,1)$ such that, for every $x\in E$ and $k\in\mathbb N_0$,

$$\mathbb P_x(T_A>km)\le(1-\varepsilon)^k.$$

In particular, $\mathbb E_x T_A<\infty$ for every $x\in E$. Moreover, in any countable-state chain with transition matrix $p$, if $C$ is a finite nonempty subset satisfying $\sum_{y\in C}p(x,y)=1$ for each $x\in C$ and the restricted matrix on $C$ is irreducible, then every state of $C$ is recurrent for $p$.

## Facts & Assumptions

**Given:** AC. The geometric-tail clause assumes a finite state space $E$, an irreducible transition matrix $p$, and a nonempty target $A\subseteq E$. The recurrence clause assumes a countable state space $E$, a transition matrix $p$, and a finite nonempty $C\subseteq E$ that is closed under $p$ and irreducible for the restricted matrix.

[F1] Irreducibility means every pair of states communicates, with accessibility witnessed by some finite matrix power. [[def-accessibility-communication-and-irreducibility]]

[F2] The transition probabilities are $p^{(n)}(x,y)=K^n(x,\{y\})$, where $K$ is the one-step kernel. [[def-transition-matrix-and-n-step-transition-probabilities]]

[F3] The hitting time is $T_A=\inf\{n\ge0:X_n\in A\}$ and is a stopping time; in particular $\{T_A\le n\}=\bigcup_{j=0}^n\{X_j\in A\}$. [[def-hitting-return-and-visit-times]]

[F4] Under the deterministic initial state $x$, the chain law and expectation are denoted $\mathbb P_x$ and $\mathbb E_x$. [[def-initial-distribution-of-a-markov-chain]]

[F5] For bounded measurable future path functionals $H$, $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)$ with $h(y)=\mathbb E_yH(X_0,X_1,\ldots)$. [[thm-markov-property-for-bounded-future-path-functionals]]

[F6] Finite-dimensional chain laws give $\mathbb P_x(X_n=y)=K^n(x,\{y\})$. [[thm-finite-dimensional-laws-of-a-markov-chain]]

[F7] For a nonnegative random variable, expectation is the integral of its strict tail probabilities. [[cor-layer-cake-formulas-for-random-variables]]

[F8] A state $x$ is recurrent when $\mathbb P_x(T_x^+<\infty)=1$. [[def-recurrent-and-transient-state]]

[F9] Full AC supplies a choice function for a family of nonempty sets; here it is assumed for the canonical chain-law and conditional-Markov interfaces in [F5] and [F6]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Fix one $a\in A$. For $x\notin A$, irreducibility gives a nonempty set $\{n\ge1:p^{(n)}(x,a)>0\}$; let $n_x$ be its least element. Set $n_x=0$ for $x\in A$. By [F2] and [F6], $\mathbb P_x(T_A\le n_x)>0$ for every $x$: it is $1$ on $A$, and off $A$ the event $\{X_{n_x}=a\}$ has positive probability. Since $E$ is finite, $m:=\max(1,\max_{x\in E}n_x)$ is finite and $q_x:=\mathbb P_x(T_A\le m)>0$ for every $x$. Thus $\varepsilon:=\min(1/2,\min_{x\in E}q_x)$ lies in $(0,1)$ and $q_x\ge\varepsilon$ uniformly. The witness lengths are least natural numbers, so this finite construction makes no choice-function assumption. [F1, F2, F4, F6, given]

2.1 Define the bounded path functional $H_m(\omega)=\mathbf1_{\{\omega_j\notin A\text{ for }0\le j\le m\}}$ and $r_m(x):=\mathbb E_xH_m(X_0,X_1,\ldots)=\mathbb P_x(T_A>m)$. Step 1.1 gives $r_m(x)=1-q_x\le1-\varepsilon$ for every $x$. For $k\ge0$ let $B_k=\{T_A>km\}\in\mathcal F_{km}$ by [F3]. The event $B_{k+1}$ is $B_k$ intersected with avoidance of $A$ during the next $m$ steps. Applying [F5] at time $km$ and integrating over $B_k$ yields $\mathbb P_x(B_{k+1})=\mathbb E_x[\mathbf1_{B_k}r_m(X_{km})]\le(1-\varepsilon)\mathbb P_x(B_k)$. This unconditional recursion also holds when a survival event has probability zero. [F3, F4, F5, step 1.1, given]

3.1 Since $\mathbb P_x(B_0)\le1$, induction in step 2.1 gives $\mathbb P_x(T_A>km)\le(1-\varepsilon)^k$ for every $k\ge0$. Since $T_A$ is integer-valued (with $+\infty$ allowed), its strict tail is constant on each interval $[j,j+1)$; integrating that tail in [F7] gives $\mathbb E_xT_A=\sum_{j\ge0}\mathbb P_x(T_A>j)$. Writing $j=km+s$ with $0\le s<m$ and using monotonicity of the tail, $$\mathbb E_xT_A\le m\sum_{k\ge0}(1-\varepsilon)^k=\frac m\varepsilon<\infty.$$ This bound is uniform in $x$. [F4, F7, step 2.1, algebra]

4.1 The same estimate gives the scaffold's finite-class return consequence. For this clause, let $E$ be countable and let $C\subseteq E$ be finite and nonempty, satisfy $\sum_{z\in C}p(y,z)=1$ for each $y\in C$, and have an irreducible restricted matrix. For each $y\in C$, closure and the finite-dimensional iterated law [F6] imply $\mathbb P_y(X_0,\ldots,X_n\in C)=1$ for every $n$ and identify the joint law of $(X_0,\ldots,X_n)$ with that of the restricted matrix on $C$. In particular, each event $\{T_{\{a\}}>n\}$ has the same probability under the ambient and restricted chains; summing these integer tails by [F7] shows their hitting-time expectations agree. Fix $a\in C$ and put $M=\max_{y\in C}\mathbb E_yT_{\{a\}}<\infty$ by applying the argument of steps 1.1–3.1 to this finite restricted chain. For every $n\ge0$, the bounded future-path Markov identity at time $1$, applied to avoidance of $a$ in the next $n+1$ coordinates, gives $$\mathbb P_a(T_a^+>n+1)=\sum_{y\in C}p(a,y)\mathbb P_y(T_{\{a\}}>n).$$ Summing this identity over $n\ge0$ and using the same integer-valued tail identity from [F7] as in step 3.1 gives $\mathbb E_aT_a^+=1+\sum_{y\in C}p(a,y)\mathbb E_yT_{\{a\}}\le1+M<\infty$. Hence $\mathbb P_a(T_a^+<\infty)=1$, so [F8] makes $a$ recurrent. Since $a$ was arbitrary, every state of $C$ is recurrent. [F2, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, given]

5.1 The nonempty-target hypothesis is necessary: for $A=\varnothing$, $T_A=\infty$ and the finite-mean conclusion fails. If $A=E$ or the starting state lies in $A$, then $T_A=0$ and the tail bound holds immediately; for a one-state chain these are the only target cases. Deterministic and other degenerate rows are covered by the same positive accessibility witnesses and the uniform block estimate. At $k=0$ the asserted bound is just $\mathbb P_x(T_A>0)\le1$. AC is used only through [F5] and [F6]; all path-length witnesses above are least natural numbers. The theorem is not an iff statement. [F3, F5, F6, step 1.1, step 2.1, step 3.1, step 4.1, F9, given] ∎
