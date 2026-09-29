---
id: thm-hitting-probability-is-the-minimal-nonnegative-harmonic-extension
kind: theorem
title: "Hitting probability as minimal harmonic extension"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-nonnegative-discrete-drift-for-countable-chains
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
  - lem-bounded-function-form-of-the-markov-property
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-conditional-monotone-convergence
  - def-nonnegative-extended-series
  - def-nonnegative-simple-measurable-function
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-monotone-convergence-for-the-integral
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-fatou-lemma
  - def-initial-distribution-of-a-markov-chain
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
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
      locator: "§5.2, Theorem 5.2.3, printed pp. 276–277/PDF pp. 282–283: bounded measurable future-path functionals only."
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "§2, Example 24.3 and Theorem 24.4, printed/PDF pp. 3–4: identifies hitting probability as an exit-cost special case and proves bounded-data first-step equations for proper D. Minimality against finite-valued nonnegative harmonic functions is proved locally here."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X$ be a Markov chain with transition kernel $K$ on an at most countable state space $E$, transition matrix $p(x,y)=K(x,\{y\})$, and let $A\subseteq E$. Define $h(x):=\mathbb P_x(T_A<\infty)$. Then
$$h(x)=1\quad(x\in A),\qquad h(x)=Ph(x)\quad(x\in A^c),$$
where $P\phi(x)=\sum_{y\in E:p(x,y)>0}p(x,y)\phi(y)$ is the support-restricted nonnegative kernel action. Moreover, for every finite-valued $g:E\to[0,\infty)$ satisfying $g=1$ on $A$ and $g=Pg$ on $A^c$, one has $h(x)\le g(x)$ for every $x\in E$.

## Facts & Assumptions

**Given:** AC, a countable-state Markov chain, $A\subseteq E$, and for the minimality claim a finite-valued nonnegative $g$ with $g=1$ on $A$ and $g=Pg$ on $A^c$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function; it is assumed by the canonical-law and conditional-expectation/Markov suppliers used below. ([[def-axiom-of-choice]])

[F1] $T_A=\inf\{n\ge0:X_n\in A\}$, so $T_A=0$ at a start in $A$. ([[def-hitting-return-and-visit-times]])

[F17] The infimum of the empty set is $+\infty$. ([[def-hitting-return-and-visit-times]])

[F2] $p(x,y)=K(x,\{y\})$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] For nonnegative $\phi$, $P\phi(x)=\sum_{y:p(x,y)>0}p(x,y)\phi(y)$, omitting zero transition weights. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F4] A measure on a countable discrete space is the sum of its singleton weights; for $K(x,\cdot)$ those weights are $p(x,y)$. ([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]])

[F5] For bounded product-measurable $H$, $h_H(x)=\mathbb E_xH(X_0,X_1,\ldots)$ is measurable and $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h_H(X_n)$ almost surely. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F6] For bounded measurable $q$, $\mathbb E[q(X_{n+1})\mid\mathcal F_n]=Kq(X_n)$ almost surely. ([[lem-bounded-function-form-of-the-markov-property]])

[F7] Under $\mathbb P_x=\mathbb P_{\delta_x}$, one has $X_0=x$ almost surely. ([[def-initial-distribution-of-a-markov-chain]])

[F8] For nonnegative measurable $Z$, $\mathbb E[Z\mid\mathcal G]$ is characterized by its event integrals, and increasing nonnegative limits pass through conditional expectation almost surely. ([[thm-conditional-monotone-convergence]])

[F9] For bounded real $Y$, $\mathbb E[\mathbb E(Y\mid\mathcal G)]=\mathbb E[Y]$. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F10] Fatou's lemma gives $\int\liminf Y_n\,d\mathbb P\le\liminf_n\int Y_n\,d\mathbb P$ for nonnegative measurable $Y_n$. ([[thm-fatou-lemma]])

[F11] Increasing sequences of nonnegative measurable functions pass to the limit under the nonnegative integral. ([[thm-monotone-convergence-for-the-integral]])

[F12] A nonnegative simple measurable function has finite range. ([[def-nonnegative-simple-measurable-function]])

[F13] The nonnegative Lebesgue integral is defined as the supremum of the simple integrals of nonnegative simple minorants. ([[def-nonnegative-lebesgue-integral]])

[F14] For $s=\sum_j c_j\chi_{E_j}$ on disjoint measurable sets, its simple integral is $\sum_jc_j\mu(E_j)$. ([[def-integral-of-a-nonnegative-simple-function]])

[F15] For every nonnegative simple measurable $s$, its nonnegative Lebesgue integral equals its simple integral. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F16] A nonnegative extended series is the supremum of its increasing finite partial sums. ([[def-nonnegative-extended-series]])

## Proof

**Proof technique:** identify the countable kernel integral by finite-support truncations, extend the one-step Markov identity by conditional monotone convergence, and apply Fatou to the stopped candidate.

1.1 If $E$ is finite or countably infinite, fix an increasing finite exhaustion $E_j\uparrow E$ (using a fixed enumeration when $E$ is infinite), and for $\phi:E\to[0,+\infty]$ put $\phi_j(y)=\mathbf1_{E_j}(y)(\phi(y)\wedge j)$. Each $\phi_j$ is bounded and simple by [F12]; the nonnegative integral [F13], its simple-function agreement [F15], the simple integral formula [F14], the atomic weights [F4] and [F2] give $K\phi_j(x)=\int_E\phi_j(y)K(x,dy)=\sum_{y\in E_j}p(x,y)(\phi(y)\wedge j)$. As $j\uparrow\infty$, [F11] passes the integrals to $K\phi(x)$, while the finite sums increase to the support-restricted extended row sum by [F16] and [F3]; thus $K\phi(x)=P\phi(x)$, with zero weights omitted and no $0\cdot(+\infty)$ formed. [F2, F3, F4, F11, F12, F13, F14, F15, F16, given]

1.2 If $E=\varnothing$, there is no state or initial law to check; if $A=\varnothing$, then $T_A=\infty$ by [F1, F17], so $h=0$ and $h\le g$ follows from $g\ge0$; if $A=E$, every start has $T_A=0$ and $h=1$, while every admissible $g$ is also $1$; in general, [F1, F7] give $h(x)=1$ whenever $x\in A$. [F1, F7, F17, given]

2.1 Define $H(\omega)=\mathbf1_{\{\exists n\ge0:\omega_n\in A\}}$, a bounded product-measurable path functional. By [F5], $h$ is measurable and $\mathbb E_x[H(X_1,X_2,\ldots)\mid\mathcal F_1]=h(X_1)$; for $x\in A^c$, hitting $A$ is equivalent to the shifted path hitting it, so [F9] gives $h(x)=\mathbb E_xh(X_1)$. The bounded one-step identity [F6], $X_0=x$ [F7], and expectation preservation [F9] identify this as $Kh(x)$; step 1.1 then gives $Kh(x)=Ph(x)$. [F5, F6, F7, F9, step 1.1, given]

2.2 For any finite-valued nonnegative $g$ and each $n$, use the finite-support truncations $g_j$ from step 1.1. The bounded one-step identity [F6] and step 1.1 give $\mathbb E[g_j(X_{n+1})\mid\mathcal F_n]=Kg_j(X_n)=Pg_j(X_n)$; since $g_j\uparrow g$, conditional monotone convergence [F8] and the row-sum limit in step 1.1 yield $\mathbb E[g(X_{n+1})\mid\mathcal F_n]=Pg(X_n)$ almost surely, with its event-integral characterization available even when the conditional value is infinite. [F3, F6, F8, step 1.1, given]

3.1 Fix $x\in A^c$, put $T=T_A$, $Y_n=g(X_{n\wedge T})$, and $S_n=\{T>n\}\in\mathcal F_n$ by [F1]. If $\mathbb E_xY_n=g(x)<\infty$, then on $S_n$ one has $X_n\in A^c$ and $Pg(X_n)=g(X_n)$; [F8] and step 2.2 give $\mathbb E_x[\mathbf1_{S_n}g(X_{n+1})]=\mathbb E_x[\mathbf1_{S_n}Pg(X_n)]=\mathbb E_x[\mathbf1_{S_n}g(X_n)]$. On $S_n^c$, $Y_{n+1}=Y_n=1$, and on $S_n$, $Y_n=g(X_n)$ and $Y_{n+1}=g(X_{n+1})$. Since $X_0=x$ by [F7], induction from $Y_0=g(x)$ proves $\mathbb E_xY_n=g(x)$ and integrability for every finite $n$. [F1, F7, F8, step 2.2, given]

4.1 On $\{T<\infty\}$, $Y_n=1$ for every $n\ge T$, while on $\{T=\infty\}$ all $Y_n\ge0$; hence $\mathbf1_{\{T<\infty\}}\le\liminf_nY_n$. Fatou [F10] and step 3.1 give $h(x)\le\mathbb E_x\liminf_nY_n\le\liminf_n\mathbb E_xY_n=g(x)$ for $x\in A^c$, and step 1.2 covers $x\in A$, $A=\varnothing$, and $A=E$. A one-state absorbing chain is included by those same two set cases, and the finite-row argument in step 1.1 covers deterministic transitions. AC [A1] is used for the canonical laws and the conditional-expectation/Markov suppliers; the row exhaustion uses the supplied countability witness, with no extra choice. The result asserts minimality and no biconditional. [A1, F1, F5, F6, F7, F8, F10, step 1.1, step 1.2, step 3.1, given] ∎
