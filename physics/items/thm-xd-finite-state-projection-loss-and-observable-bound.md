---
id: thm-xd-finite-state-projection-loss-and-observable-bound
kind: theorem
title: "Finite-state killed projection has an exact lost-mass certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-xd-countable-nonexplosive-ctmc
  - def-xd-finite-column-generator
  - def-xd-finite-state-projection-and-cemetery-lift
  - def-xd-countable-l1-distance
  - lem-exponential-dominates-one-plus-x
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - thm-xd-finite-generator-master-equation-uniformization
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free conditional on the given nonexplosive chain; no chain existence or general countable-rate nonexplosion is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, Theorems 2.1–2.2 and §III, printed pp. 044104-3–044104-5; finite projection mass and its certified truncation error."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§§3.2–3.4, PDF pp. 7–16; finite-state forward equation and uniformization."
---

## Statement

Let $X_t$ be a given nonexplosive countable chain with rates $q(x,y)$, initial law $p_0$, and finite exit rates as in [[def-xd-countable-nonexplosive-ctmc]]. For a finite nonempty $F\subseteq S$, let $\tau_F$ and $Y_t$ be the killed projection of [[def-xd-finite-state-projection-and-cemetery-lift]]. Write $p_t(x)=\mathbb P(X_t=x)$ and $u_F(t,x)=\mathbb P(Y_t=x)$ for $x\in F$. Then

$$u_F(t,x)=\mathbb P(X_t=x,\tau_F>t)\le p_t(x),\qquad c_F(t)=\mathbb P(\tau_F\le t).$$

If $\bar u_F$ is $u_F$ extended by zero to $S\setminus F$, then

$$\|p_t-\bar u_F(t)\|_{\ell^1(S)}=c_F(t).$$

For any bounded real observable $f:S\to\mathbb R$, put $\operatorname{osc}(f):=\sup_{x\in S}f(x)-\inf_{x\in S}f(x)$ and extend it to the cemetery state by $f(\dagger):=(\sup f+\inf f)/2$. The corresponding expectation error obeys

$$|\mathbb E[f(X_t)]-\mathbb E[f(Y_t)]|\le\tfrac12\operatorname{osc}(f)c_F(t).$$

The finite cemetery lift $\widetilde Q_F$ in [[def-xd-finite-state-projection-and-cemetery-lift]] is a finite generator and $\mathcal L(Y_t)=e^{t\widetilde Q_F}\mathcal L(Y_0)$. A path that exits $F$ and later returns contributes to the full marginal but remains at the cemetery state in the killed projection.

## Facts & Assumptions

**Given:** An already-given nonexplosive time-homogeneous pure-jump chain $X_t$ on a countable set $S$, its finite transition rates, an initial probability law $p_0$, and a finite nonempty subset $F\subseteq S$.

[F1] [[def-xd-countable-nonexplosive-ctmc]]: at state $x$, the holding time has rate $\lambda(x)=\sum_{y\ne x}q(x,y)$ and the next-state probability is $q(x,y)/\lambda(x)$; the process is Markov and nonexplosive.

[F2] [[def-xd-finite-state-projection-and-cemetery-lift]]: $Y_t=X_t$ before the first exit from $F$ and $Y_t=\dagger$ from that exit onward; its finite rate matrix is $\widetilde Q_F$.

[F3] [[thm-xd-finite-generator-master-equation-uniformization]]: for a finite column generator and initial probability vector, the unique master-equation solution is its matrix exponential.

[F4] [[def-xd-countable-l1-distance]]: for a probability mass $p$ and subprobability mass $u$, $\|p-u\|_{\ell^1(S)}=\sum_{x\in S}|p(x)-u(x)|$ is finite.

[F5] [[lem-exponential-dominates-one-plus-x]]: $1+x\le e^x$ for every real $x$.

[F6] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $e^x=\sum_{k\ge0}x^k/k!$ and this series converges absolutely for every real $x$.

## Proof


**Proof technique:** identify the finite killed chain, then compare it pathwise with the full chain.

1.1 For each source state $x\in F$, the off-diagonal entries of $\widetilde Q_F$ are the internal rates $q(x,y)$ and the exit rate to $\dagger$ is $\sum_{y\notin F}q(x,y)$. Their sum is $\lambda(x)$, so the diagonal $-\lambda(x)$ makes the column sum zero. The cemetery column is zero. Therefore $\widetilde Q_F$ is a finite column generator. [F1, F2, given, algebra]

1.2 By the definition of $Y$, for each $x\in F$ the event $\{Y_t=x\}$ is exactly $\{X_t=x,\tau_F>t\}$; the complementary event $\{Y_t=\dagger\}$ is $\{\tau_F\le t\}$. Therefore $u_F(t,x)=\mathbb P(X_t=x,\tau_F>t)\le p_t(x)$ and $c_F(t)=\mathbb P(\tau_F\le t)$. Returning paths are included in $p_t$ but excluded from $u_F$ by the strict first-exit condition. [F1, F2, given]

2.1 Let $M_F=\max_{x\in F}\lambda(x)$, finite because $F$ is finite. For $0\le h\le1$, [F6] bounds the exponential series remainder by $|e^{-\lambda(x)h}-(1-\lambda(x)h)|\le h^2\sum_{k\ge2}\lambda(x)^k/k!$, so no-jump probability is $1-\lambda(x)h+o(h)$ uniformly on finite $F$. If $\lambda(x)>0$, the first-jump probability $1-e^{-\lambda(x)h}=\lambda(x)h+o(h)$ multiplied by the destination probability $q(x,y)/\lambda(x)$ from [F1] gives rate $q(x,y)h+o(h)$ for each $y\ne x$; if $\lambda(x)=0$, all rates from $x$ are zero and these probabilities are zero. For the aggregate exit event, its conditional destination probability is $a_x/\lambda(x)$ when $\lambda(x)>0$, so its probability is $a_xh+o(h)$; when $\lambda(x)=0$, $a_x=0$ and this probability is zero. Here $a_x=\lambda(x)-\sum_{y\in F,y\ne x}q(x,y)\ge0$. After reaching $\dagger$ there are no further changes. By [F5] applied to $-u$, $1-e^{-u}\le u$ for $u\ge0$, so the probability of a first change within $h$ is at most $M_Fh$; conditional on a first change that stays in $F$, a second change within the remaining time has probability at most $M_Fh$. Hence the probability of two or more changes is at most $M_F^2h^2$. Thus the finite transition matrix of $Y$ is $I+h\widetilde Q_F+o(h)$ as $h\downarrow0$, uniformly over its finite state space. [F1, F2, F5, F6, step 1.1, algebra]

2.2 Extend $u_F$ by zero outside $F$. For $x\in F$, $p_t(x)-u_F(t,x)\ge0$ by step 1.2; for $x\notin F$, the difference is $p_t(x)\ge0$. Summing these nonnegative differences over $S$ gives $1-\sum_{x\in F}u_F(t,x)=1-\mathbb P(\tau_F>t)=c_F(t)$. By [F4], this sum is exactly $\|p_t-\bar u_F(t)\|_{\ell^1(S)}$. [F2, F4, step 1.2, algebra]

3.1 The process $Y$ is Markov: before killing this follows from the Markov property of $X$, and after killing its state $\dagger$ is absorbing. Hence its finite column transition matrix $T_Y(h)$ satisfies $T_Y(h)=I+h\widetilde Q_F+o(h)$ entrywise by step 2.1, and its law satisfies $\widetilde p(t+h)=T_Y(h)\widetilde p(t)$. This gives the right derivative $\widetilde Q_F\widetilde p(t)$. For $t>0$, $\widetilde p(t)=T_Y(h)\widetilde p(t-h)$. Since the state space has finitely many coordinates, the entrywise expansion and $\sum_j\widetilde p_j(t-h)=1$ imply each coordinate of $\widetilde p(t)-\widetilde p(t-h)$ is $O(h)$; hence $\widetilde p(t-h)\to\widetilde p(t)$. Dividing the identity by $h$ and using the entrywise limit $(T_Y(h)-I)/h\to\widetilde Q_F$ gives the left derivative $\widetilde Q_F\widetilde p(t)$ as well, because every coordinate is a finite sum. Thus $\widetilde p'=\widetilde Q_F\widetilde p$ with initial law $\widetilde p(0)$. By [F3], $\widetilde p(t)=e^{t\widetilde Q_F}\widetilde p(0)$. [F1, F2, F3, step 2.1, algebra]

4.1 Let $a=\inf f$, $b=\sup f$, and $c=(a+b)/2=f(\dagger)$. The coupling uses the same path $X$: on $\{\tau_F>t\}$, $Y_t=X_t$, and on $\{\tau_F\le t\}$, $Y_t=\dagger$. Thus $|\mathbb E f(X_t)-\mathbb E f(Y_t)|=|\mathbb E[\mathbf1_{\{\tau_F\le t\}}(f(X_t)-c)]|\le\tfrac12(b-a)\mathbb P(\tau_F\le t)=\tfrac12\operatorname{osc}(f)c_F(t)$, as asserted. [F2, step 1.2, step 2.2, algebra] ∎
