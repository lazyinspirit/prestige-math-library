---
id: thm-first-step-equations-for-nonnegative-exit-costs
kind: theorem
title: "First-step equations for nonnegative exit costs"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-nonnegative-discrete-drift-for-countable-chains
  - lem-bounded-function-form-of-the-markov-property
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
  - def-nonnegative-extended-series
  - def-nonnegative-simple-measurable-function
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-for-nonnegative-double-series
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-initial-distribution-of-a-markov-chain
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
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "§2, equation (4), printed p. 3/PDF p. 3; Theorem 24.4, printed p. 4/PDF p. 4. The source assumes D is proper; this proof also treats D=E and defines the nonexit payoff without evaluating X at infinity."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X$ be a Markov chain on an at most countable state space $E$ with transition kernel $K$ and transition matrix $p(x,y)=K(x,\{y\})$. Let $D\subseteq E$, put $T=T_{D^c}$, and let $f:D^c\to[0,\infty)$ and $c:D\to[0,\infty)$ be bounded. Define the boundary payoff $B$ by $B=f(X_T)$ when $T<\infty$ and $B=0$ when $T=\infty$, so no value $X_\infty$ is used. For $x\in E$, let
$$u(x):=\mathbb E_x\!\left[B+\sum_{0\le m<T}c(X_m)\right]\in[0,+\infty],$$
with the empty sum equal to $0$. Then
$$u(x)=f(x)\quad(x\in D^c),\qquad u(x)=c(x)+Pu(x)\quad(x\in D),$$
where $P\phi(x)=\sum_{y\in E:p(x,y)>0}p(x,y)\phi(y)$ is the support-restricted nonnegative kernel action of [[def-nonnegative-discrete-drift-for-countable-chains]]. The equation on $D$ is in extended nonnegative arithmetic and may have value $+infty$.

## Facts & Assumptions

**Given:** AC, a countable-state Markov chain with kernel $K$, $D\subseteq E$, bounded nonnegative $f$ and $c$, and $T=T_{D^c}$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function; it is assumed here for the canonical laws and conditional-expectation/Markov suppliers cited below. ([[def-axiom-of-choice]])

[F1] $T_A=\inf\{n\ge0:X_n\in A\}$, so $T=0$ when the initial state is in $D^c$. ([[def-hitting-return-and-visit-times]])

[F17] The infimum of the empty set is $+\infty$. ([[def-hitting-return-and-visit-times]])

[F2] $p(x,y)=K(x,\{y\})$ for the transition matrix. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F18] $P\phi(x)=\sum_{y:p(x,y)>0}p(x,y)\phi(y)$ for nonnegative $\phi$, with zero weights omitted. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F3] For bounded product-measurable $H$, $h_H(x)=\mathbb E_xH(X_0,X_1,\ldots)$ is measurable and $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h_H(X_n)$ almost surely. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F4] For bounded measurable $g$, $\mathbb E[g(X_{n+1})\mid\mathcal F_n]=Kg(X_n)$ almost surely, where $Kg(x)=\int g(y)K(x,dy)$. ([[lem-bounded-function-form-of-the-markov-property]])

[F5] When the initial state is fixed at $x$, $\mathbb P_x=\mathbb P_{\delta_x}$ and $\mathbb E_x=\mathbb E_{\delta_x}$; hence $X_0=x$ almost surely under $\mathbb P_x$. ([[def-initial-distribution-of-a-markov-chain]])

[F6] On a countable discrete space, a measure is the sum of its singleton weights; for $K(x,\cdot)$ they are $p(x,y)$. ([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]])

[F7] Increasing sequences of nonnegative measurable functions pass to the limit under the nonnegative integral. ([[thm-monotone-convergence-for-the-integral]])

[F8] The nonnegative integral is additive, including when one or both integrals are infinite. ([[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F9] Restricting a nonnegative measurable function to a measurable event by setting it to zero off the event preserves measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F10] A nonnegative extended series is the supremum of its increasing finite partial sums. ([[def-nonnegative-extended-series]])

[F11] Pointwise increasing limits of measurable functions are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F12] Every nonnegative measurable function is the pointwise increasing limit of nonnegative simple functions. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F13] For a nonnegative simple $s=\sum_{i=1}^r a_i\mathbf 1_{A_i}$ on disjoint measurable sets, its simple integral is $\sum_{i=1}^r a_i\mu(A_i)$. ([[def-integral-of-a-nonnegative-simple-function]])

[F14] For a nonnegative double sequence, the two iterated sums agree, including when their common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[F15] For bounded real $Y$, $\mathbb E[\mathbb E(Y\mid\mathcal G)]=\mathbb E[Y]$. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F16] Sums of measurable extended-real functions are measurable whenever the sum is defined pointwise. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F19] For a nonnegative simple measurable function, its nonnegative Lebesgue integral equals its simple integral. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F20] The nonnegative Lebesgue integral is the supremum of the simple integrals of all nonnegative simple minorants. ([[def-nonnegative-lebesgue-integral]])

[F21] A nonnegative simple measurable function has finite range. ([[def-nonnegative-simple-measurable-function]])

[F22] For every $A$ and $n\ge0$, $\{T_A\le n\}=\bigcup_{j=0}^{n}\{X_j\in A\}$, so the hitting events used here are measurable. ([[def-hitting-return-and-visit-times]])

## Proof

**Proof technique:** define the path reward before any random-time evaluation, then use bounded truncations and monotone convergence.

1.1 On $E^{\mathbb N_0}$, put $T(\omega)=\inf\{n\ge0:\omega_n\in D^c\}$, extend $f$ by zero on $D$ and $c$ by zero on $D^c$, and define $B(\omega)=\sum_{n\ge0}f(\omega_n)\mathbf 1_{\{T(\omega)=n\}}$, $C(\omega)=\sum_{m\ge0}c(\omega_m)\mathbf 1_{\{m<T(\omega)\}}$, and $R=B+C$. The hitting events are measurable by [F22], the restrictions by [F9], the nonnegative series by [F10], and their sum by [F16]; thus $R$ is measurable, $B=0$ on $T=\infty$ by [F17], and no coordinate at infinity is evaluated. [F1, F9, F10, F16, F17, F22, given]

1.2 If $x\in D^c$, then $X_0=x$ almost surely under $\mathbb P_x$ by [F5], so $T=0$ by [F1], $B=f(x)$ and $C=0$; hence $u(x)=\mathbb E_xR=f(x)$. This includes an empty $D$ and a start already on the boundary. [F1, F5, given]

1.3 If $x\in D$, then every path starting at $x$ has $T\ge1$; its shifted path exits at time $T-1$ when $T<\infty$ and never exits when $T=\infty$, so $R(\omega)=c(x)+R(\omega_1,\omega_2,\ldots)$ in extended nonnegative arithmetic. Additivity [F8] gives $u(x)=c(x)+\mathbb E_xR(X_1,X_2,\ldots)$ without subtraction, also when the tail expectation is infinite. [F1, F8, F17, given]

1.4 For $N\ge1$, let $H_N=R\wedge N$ and $h_N(y)=\mathbb E_yH_N(X_0,X_1,\ldots)$; then $h_N$ is measurable and bounded by $N$ by [F3], and its conditional future-path identity at time $1$, followed by [F15], gives $\mathbb E_xH_N(X_1,X_2,\ldots)=\mathbb E_xh_N(X_1)$. [F3, F15, given]

1.5 The bounded one-step identity [F4], expectation preservation [F15], and $X_0=x$ under $\mathbb P_x$ [F5] give $\mathbb E_xh_N(X_1)=Kh_N(x):=\int_Eh_N(y)K(x,dy)$. [F4, F5, F15, given]

1.6 For a nonnegative simple $s=\sum_{i=1}^r a_i\mathbf 1_{A_i}$ with disjoint measurable $A_i$, [F19] identifies its nonnegative integral with its simple integral [F13], and countable singleton weights [F6] give $\int_Es(y)K(x,dy)=\sum_i a_iK(x,A_i)=\sum_i a_i\sum_{y\in A_i}p(x,y)=\sum_{y:p(x,y)>0}p(x,y)s(y)$. For general nonnegative measurable $g$, choose simple $s_j\uparrow g$ by [F12]; MCT [F7] passes the integrals to the limit, while [F20] fixes the nonnegative integral and [F21] ensures the increments $s_{i+1}-s_i$ are finite-valued nonnegative simple functions. Thus $s_j=\sum_{i<j}(s_{i+1}-s_i)$ with $s_0=0$; Tonelli [F14] interchanges the increment and state sums when $E$ is countably infinite, using its fixed enumeration, while for finite $E$ the limit passes through the finite sum. It follows that $\int_Eg(y)K(x,dy)=\sum_{y:p(x,y)>0}p(x,y)g(y)$, the support-restricted action [F18]. [F2, F6, F7, F10, F12, F13, F14, F18, F19, F20, F21, given]

2.1 As $N\to\infty$, $H_N(X_1,X_2,\ldots)\uparrow R(X_1,X_2,\ldots)$ and $h_N(y)\uparrow u(y)$ for every $y$; [F7] and measurability of the increasing limit [F11] give $\mathbb E_xR(X_1,X_2,\ldots)=\int_Eu(y)K(x,dy)=\sum_{y:p(x,y)>0}p(x,y)u(y)=Pu(x)$ by steps 1.4–1.6 and [F2]. Combining with step 1.3 proves $u(x)=c(x)+Pu(x)$ on $D$, including the value $+\infty$. [F2, F7, F11, F18, step 1.3, step 1.4, step 1.5, step 1.6, given]

3.1 If $E=\varnothing$, there is no probability law of an $E$-valued chain and no state to check; if $D=\varnothing$, step 1.2 covers every state; if $D=E$, the boundary payoff is zero and the equation still holds when $T=\infty$ and $u=+\infty$. If $f=c=0$, then $u=0$; a one-state absorbing chain in $D$ with positive cost has $u=+\infty=c+Pu$, and deterministic rows obey the same shift calculation. The endpoint $T=0$ is handled in step 1.2, whereas on $D$ one has $T\ge1$ and the exit-time cost is excluded by $m<T$. AC [A1] is used for the canonical laws and conditional-expectation/Markov identities [F3]–[F5], [F15]; countability supplies the fixed row representation, with no additional choice principle. The two equations form no biconditional. [A1, F1, F2, F3, F4, F5, F6, F15, F17, F18, step 1.2, step 1.3, step 2.1, given] ∎
