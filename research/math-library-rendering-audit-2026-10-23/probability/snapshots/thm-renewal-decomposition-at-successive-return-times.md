---
id: thm-renewal-decomposition-at-successive-return-times
kind: theorem
title: "Renewal decomposition at successive returns"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-discrete-stopping-time
  - def-initial-distribution-of-a-markov-chain
  - def-sigma-algebra-at-a-stopping-time
  - def-stochastic-process-and-finite-dimensional-distributions
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-hitting-return-and-visit-times
  - def-recurrent-and-transient-state
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-discrete-strong-markov-property
  - thm-chapman-kolmogorov-equations
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
      locator: "§5.2, Theorem 5.2.5 and complete proof (strong Markov property) and Theorem 5.2.6 and complete proof (successive return probabilities), printed pp. 277–278/PDF pp. 284–285. The first-return convolution appears as Exercise 5.2.4, printed p. 280/PDF p. 287; that source gives the exercise statement rather than a proof, so the convolution and the full excursion-law assertion are derived here."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X=(X_n,\mathcal F_n)_{n\ge0}$ be a [[def-time-homogeneous-markov-chain-with-transition-kernel]] on an at most countable state space $E$ with transition matrix $p$, and use $\mathbb P_x$ for its law started at $x\in E$. Put
$$f_x(k):=\mathbb P_x(T_x^+=k)\quad(k\ge1),\qquad u_x(n):=p^{(n)}(x,x)\quad(n\ge0).$$
Then $u_x(0)=1$ and, for every $n\ge1$,
$$u_x(n)=\sum_{k=1}^n f_x(k)u_x(n-k).$$

Let $R_0=0$ and let $R_k$ be the successive return times from [[def-hitting-return-and-visit-times]]. For each $k\ge0$ and bounded measurable future-path functional $H:E^{\mathbb N_0}\to\mathbb R$, define
$$Z_{k,H}:=\sum_{n\ge0}\mathbf 1_{\{R_k=n\}}H(X_n,X_{n+1},\ldots),$$
with value $0$ when $R_k=\infty$. The post-return path has law $\mathbb P_x$ independently of $\mathcal F_{R_k}$ on the event of a finite return, in the precise sense
$$\mathbb E_x[Z_{k,H}\mid\mathcal F_{R_k}]=\mathbf 1_{\{R_k<\infty\}}\mathbb E_x[H(X_0,X_1,\ldots)]\quad\text{a.s.}$$

An **excursion word** from $x$ is a finite sequence $(x_0,\ldots,x_m)$, $m\ge1$, with $x_0=x_m=x$ and $x_j\ne x$ for $0<j<m$. When $R_k<\infty$, let the $k$th completed excursion be $E_k=(X_{R_{k-1}},\ldots,X_{R_k})$; set $E_k=\partial$ if $R_k=\infty$, where $\partial\notin\mathcal W_x$. If $x$ is recurrent, all $R_k$ are finite almost surely and $(E_k)_{k\ge1}$ are iid. For a state that is not recurrent, the next excursion is asserted only after the preceding return is finite; no infinite sequence of completed excursions is asserted.

## Facts & Assumptions

**Given:** AC, a countable-state Markov chain and a state $x$.

[A1] Every family of nonempty sets has a choice function; AC is assumed for the conditional-expectation and Markov results used below. ([[def-axiom-of-choice]])

[F1] The return times are defined recursively, with $R_0=0$, $T_x^+=\inf\{n\ge1:X_n=x\}$, and later returns set to $+\infty$ after an infinite return. ([[def-hitting-return-and-visit-times]])

[F2] A map $\tau$ is a discrete stopping time when $\{\tau\le n\}\in\mathcal F_n$ for every $n\ge0$. ([[def-discrete-stopping-time]])

[F3] For a stopping time $\tau$, $\mathcal F_\tau=\{A:A\cap\{\tau\le n\}\in\mathcal F_n\text{ for all }n\ge0\}$. ([[def-sigma-algebra-at-a-stopping-time]])

[F4] $p^{(n)}(x,y)=K^n(x,\{y\})$ and $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F5] For a chain with AC and bounded measurable $g$, $\mathbb E[g(X_{m+n})\mid\mathcal F_m]=K^ng(X_m)$ almost surely; the event version follows by taking an indicator. ([[thm-chapman-kolmogorov-equations]])

[F6] If $\tau$ is a stopping time and $H$ is a bounded measurable future-path functional, then the conditional expectation of its shifted-path value is $\mathbb E_{X_\tau}H$ on $\{\tau<\infty\}$, with the shifted value defined as zero at $\tau=\infty$. ([[thm-discrete-strong-markov-property]])

[F7] The state $x$ is recurrent exactly when $\mathbb P_x(T_x^+<\infty)=1$. ([[def-recurrent-and-transient-state]])

[F8] Under $\mathbb P_x$, the initial state is $X_0=x$ almost surely. ([[def-initial-distribution-of-a-markov-chain]])

[F9] A time-homogeneous Markov chain is adapted to its filtration. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

[F10] Every coordinate $X_n$ is a measurable random element, so finite-coordinate cylinder events are measurable. ([[def-stochastic-process-and-finite-dimensional-distributions]])

## Proof

**Proof technique:** split a return event at its first positive return, then use the strong Markov property at each finite return.

1.1 Since $p^{(0)}(x,x)=\mathbf 1_{\{x=x\}}$ by [F4], $u_x(0)=1$. The conditional identity [F5] at $m=0$, together with $X_0=x$ [F8] and the definition of $p^{(n)}$ [F4], gives $\mathbb P_x(X_n=x)=p^{(n)}(x,x)=u_x(n)$. [F4, F5, F8, given]

1.2 Every recursively defined $R_k$ is a stopping time: $R_0=0$ is one, and if $R_{k-1}$ is one, then for $n\ge0$, $$\{R_k\le n\}=\bigcup_{m=0}^{n-1}\left(\{R_{k-1}=m\}\cap\bigcup_{j=m+1}^{n}\{X_j=x\}\right),$$ with the union empty when $n=0$. For $m\le n$, $\{R_{k-1}=m\}$ is in $\mathcal F_m$ because it is the difference of the stopping-time events $\{R_{k-1}\le m\}$ and $\{R_{k-1}\le m-1\}$ (with the $m=0$ case immediate). Adaptedness [F9] and the increasing filtration then put every displayed term in $\mathcal F_n$. This proves the induction using [F1, F2]. [F1, F2, F9, given]

1.3 Let $\mathcal W_x$ be the set of excursion words defined in the statement. It is countable because it is a countable union of finite products of the countable set $E$. For any $B\subseteq\mathcal W_x$, let $H_B$ be the indicator that a path starting at $x$ has a finite first-return word in $B$, and set it to zero if there is no positive return. Its event is a countable union of finite-coordinate cylinder events [F10], so $H_B$ is product-measurable and bounded; write $q_x(B)=\mathbb E_xH_B=\mathbb P_x(E_1\in B)$. [F1, F8, F10, given]

2.1 Fix $n\ge1$. The disjoint events $\{X_n=x,\ T_x^+=k\}$, $1\le k\le n$, partition $\{X_n=x\}$, because any path ending at $x$ has a first positive visit by time $n$. By [F5], on $\{T_x^+=k\}\in\mathcal F_k$, $$\mathbb P_x(X_n=x,\ T_x^+=k)=\mathbb E_x[\mathbf 1_{\{T_x^+=k\}}\mathbb P_x(X_n=x\mid\mathcal F_k)]=\mathbb E_x[\mathbf 1_{\{T_x^+=k\}}p^{(n-k)}(X_k,x)]=f_x(k)u_x(n-k),$$ since $X_k=x$ on that event. Summing these finitely many disjoint contributions and using step 1.1 gives the claimed renewal equation. [F1, F4, F5, step 1.1, given]

2.2 By step 1.2, $R_k$ is a stopping time. Apply [F6] to $H_B$ at $R_k$. On $\{R_k<\infty\}$, $X_{R_k}=x$, and the shifted event $H_B$ is exactly that the next completed excursion word is in $B$. Therefore $$\mathbb E_x[\mathbf 1_{\{R_k<\infty\}}\mathbf 1_{\{E_{k+1}\in B\}}\mid\mathcal F_{R_k}]=\mathbf 1_{\{R_k<\infty\}}q_x(B),$$ where the left side is interpreted as zero when $R_{k+1}=\infty$. The same strong Markov identity with arbitrary bounded $H$ gives the post-return formula in the statement. [F1, F6, F8, step 1.2, given]

3.1 Suppose $x$ is recurrent. Taking $B=\mathcal W_x$ in step 2.2 gives $q_x(B)=\mathbb P_x(T_x^+<\infty)=1$ by [F7]. Induction from $R_0=0$ yields $\mathbb P_x(R_k<\infty)=1$ for every $k$; since there are countably many $k$, all returns are finite simultaneously almost surely. [F1, F7, step 2.2, given]

4.1 For $m\ge1$ and arbitrary $B_1,\ldots,B_m\subseteq\mathcal W_x$, the event $A=\bigcap_{j<m}\{E_j\in B_j\}$ belongs to $\mathcal F_{R_{m-1}}$: on each event $\{R_{m-1}=r\}$ it is determined by $X_0,\ldots,X_r$, so $A\cap\{R_{m-1}\le n\}=\bigcup_{r=0}^n(A\cap\{R_{m-1}=r\})\in\mathcal F_n$ by [F3]. Applying the conditional identity in step 2.2 at $R_{m-1}$ and using step 3.1 gives $$\mathbb P_x(E_1\in B_1,\ldots,E_m\in B_m)=q_x(B_m)\,\mathbb P_x(E_1\in B_1,\ldots,E_{m-1}\in B_{m-1}).$$ Induction in $m$ factors this joint probability as $\prod_{j=1}^m q_x(B_j)$, proving that the excursion words are iid with common first-excursion law $q_x$. [F1, F3, step 2.2, step 3.1, given]

5.1 If $E=\varnothing$, there is no state $x$ and the theorem is vacuous. If $x$ has no positive return, then $u_x(n)=0$ for every $n\ge1$ (a visit at positive time would be a return), every $f_x(k)=0$, and the convolution has both sides zero; for $n=0$ the identity is $u_x(0)=1$. At the endpoint $n=1$, the formula is $u_x(1)=f_x(1)u_x(0)$. In a one-state absorbing chain, $f_x(1)=1$, $f_x(k)=0$ for $k>1$, and $u_x(n)=1$, so the equation holds directly. More generally, in a deterministic cycle of length $r$, $f_x(k)=\mathbf 1_{\{k=r\}}$ and $u_x(n)=\mathbf 1_{\{r\mid n\}}$; if $n<r$ the sum is empty, and if $n\ge r$ the sole possible term is $u_x(n-r)=\mathbf 1_{\{r\mid n\}}$, as required. For a transient state the conditional identities of steps 2.2 remain restricted to finite $R_k$; if a return fails, the definition sets later returns to infinity, and no further completed excursion is claimed. AC [A1] is used through [F5] and [F6]; the cylinder measurability and event decomposition use no additional choice. The equation and iid assertion are one-way claims, not biconditionals. [A1, F1, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, given] ∎
