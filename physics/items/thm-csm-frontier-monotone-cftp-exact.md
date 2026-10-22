---
id: thm-csm-frontier-monotone-cftp-exact
kind: theorem
title: Exactness and almost-sure termination of finite monotone CFTP
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - alg-csm-frontier-monotone-cftp
  - alg-csm-frontier-heat-bath-update
dependency_roles:
  alg-csm-frontier-monotone-cftp: mathematical-premise
  alg-csm-frontier-heat-bath-update: mathematical-premise
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the proof uses finite state spaces and the stated iid seed stream.
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 25, §§25.1–25.3, printed pp. 347–355 (PDF pp. 363–371): monotone coupling from the past and the need to reuse the same maps on overlapping horizons. The local proof below supplies its finite positive-block termination argument and stationary-law identification."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

For every finite nonempty $V$, finite interaction set $E\subseteq[V]^2$, finite couplings $K_e\geq0$, and finite fields $h_i\in\mathbb R$ in the monotone coupling-from-the-past procedure, the doubling algorithm terminates almost surely under its stated iid seed law. Its returned configuration has exactly the Gibbs distribution
$$\pi(\sigma)=\frac{w(\sigma)}{\sum_{\tau\in\{-1,+1\}^V}w(\tau)},\qquad w(\sigma)=\exp\!\left(\sum_{\{i,j\}\in E}K_{\{i,j\}}\sigma_i\sigma_j+\sum_{i\in V}h_i\sigma_i\right).$$
Let $P(x,y)$ be the one-update random-scan heat-bath transition probability, and for every integer $m\geq0$ let $P^m$ denote its $m$-step transition matrix. Define total variation on $\Omega=\{-1,+1\}^V$ by $\|\mu-\nu\|_{\rm TV}=\frac12\sum_{x\in\Omega}|\mu(x)-\nu(x)|$. This exactness claim gives no bound on expected or worst-case runtime.

## Statement references

[[alg-csm-frontier-monotone-cftp]]

## Facts & Assumptions

**Given:** A finite ferromagnetic Ising weight, the common iid seed stream, and the monotone CFTP procedure.

[F1] [[alg-csm-frontier-monotone-cftp]]: each update uses the same stored site and uniform seed at a given time in every horizon; all $K_e\geq0$; the state space is $\{-1,+1\}^V$ with minimum $\mathbf{-}$ and maximum $\mathbf{+}$.

[F2] [[alg-csm-frontier-heat-bath-update]]: at a selected site the new spin is sampled from its exact conditional probability under the finite positive weight.

[L1] For this proof, a law $\rho$ on $\Omega$ is called invariant for $P$ when $\sum_{x\in\Omega}\rho(x)P(x,y)=\rho(y)$ for every $y\in\Omega$.

## Proof
**Given:** The finite nonempty set $V$, the couplings and fields in [F1], and the iid seed stream.

1.1 Every one-site conditional probability of either sign is strictly positive, because it is a ratio of positive finite weights and a positive finite sum. There are only finitely many sites and exterior configurations, so $$\delta=\min_{i\in V,\,\eta\in\{-1,+1\}^{V\setminus\{i\}},\,s\in\{-1,+1\}}q_i(s\mid\eta)>0.$$ [F1, F2, algebra]

1.2 For a fixed site $i$, the log odds of the plus conditional are $$\log\frac{q_i(+1\mid\eta)}{q_i(-1\mid\eta)}=2h_i+2\sum_{\{i,j\}\in E}K_{\{i,j\}}\eta_j.$$ If $\eta\leq\zeta$ coordinatewise, the right side for $\eta$ is at most the right side for $\zeta$ because each $K_{\{i,j\}}\geq0$; hence $q_i(+1\mid\eta)\leq q_i(+1\mid\zeta)$. Using the same $U_s$ in both updates therefore preserves coordinatewise order. [F1, F2, algebra]

1.3 The finite Gibbs law $\pi$ is invariant under each heat-bath update: conditional on the spins off site $i$, the original spin and its replacement have the same conditional law $q_i(\cdot\mid\eta)$. Thus replacing the spin preserves every joint probability, and the uniform mixture over sites preserves $\pi$. [F2, algebra]

2.1 Fix an ordering of the $n=|V|$ sites. A block of $n$ successive seeds selects these sites in that order and has every uniform value below $\delta$ with probability $\theta=n^{-n}\delta^n>0$. On that event each update sets its selected spin to $+1$, whatever the other spins are, so the block maps every starting configuration to $\mathbf{+}$. Disjoint blocks in the past are independent; the probability that none of the first $m$ blocks has this event is $(1-\theta)^m\to0$. Thus with probability one a forcing block lies inside some explored horizon. The two extremes then have the same time-zero image, so the doubling procedure terminates almost surely. [F1, step 1.1, algebra]

2.2 Every state lies between $\mathbf{-}$ and $\mathbf{+}$. By step 1.2, applying a shared sequence of update maps preserves these inequalities. If the lower and upper outputs agree, every state started at the same horizon has that common output. The algorithm's returned state is therefore the image of every possible initial state under that finite composition. [F1, step 1.2]

3.1 For each integer time $t$, almost-sure forcing blocks define $X_t$ as the common image at time $t$ of all initial states started sufficiently far in the past. Intersecting these probability-one events over the countably many integer times defines all $X_t$ simultaneously. The construction is consistent because once a composition maps all states to one value, every earlier extension followed by that composition has the same value. The variable $X_{t-1}$ depends only on seeds through time $t-1$, so it is independent of the seed at time $t$, and $X_t=F_t(X_{t-1})$. The two-sided iid stream is shift-invariant and this construction uses the same rule at every time, so the law $\rho$ of $X_t$ does not depend on $t$. It follows from the definition [L1] that $\rho$ is invariant for $P$. [F1, L1, step 2.1, step 1.3, construct]

4.1 Put $N=|\Omega|=2^n$. From any state $x$ to any state $y$, the chain can select the fixed site ordering from step 2.1 and set each spin to its value in $y$; this has probability at least $n^{-n}\delta^n>0$. Hence every entry of the $n$-step transition matrix $P^n$ is positive. Let $\kappa=\min_{x,y}P^n(x,y)>0$ and $\lambda=N\kappa\in(0,1]$. If $\lambda<1$, each row of $P^n$ is $\lambda$ times the uniform law on $\Omega$ plus $(1-\lambda)$ times a probability law $R_x$. For any laws $\mu,\nu$, the positive and negative parts of $\mu-\nu$ each have mass $\|\mu-\nu\|_{\rm TV}$; because $0\leq R_x(A)\leq1$, $|(\mu R)(A)-(\nu R)(A)|\leq\|\mu-\nu\|_{\rm TV}$ for every event $A$. Thus $P^n$ contracts total variation by at most $1-\lambda$. If $\lambda=1$, all rows are uniform. In either case two invariant laws for $P$ must coincide. Since $\pi$ is invariant by step 1.3 and $\rho$ is invariant by step 3.1, $\rho=\pi$. [L1, step 2.1, step 1.3, step 3.1, algebra]

5.1 At time zero, the algorithm returns the common image whenever its explored interval contains a forcing block. By the definition of $X_0$ in step 3.1, this is exactly $X_0$ on the probability-one termination event. Its law is $\rho=\pi$ by step 4.1, proving exactness. [step 2.1, step 2.2, step 3.1, step 4.1] ∎
