---
id: pthm-td-markov-relative-entropy-and-convergence
kind: physics-theorem
title: "Relative-entropy decrease and convergence for a finite detailed-balance chain"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps: [def-td-detailed-balance-rate-model, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-chain-rule, thm-algebra-of-derivatives, thm-derivative-of-exponential, cor-mean-value-theorem, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  def-td-detailed-balance-rate-model: formulation-prerequisite
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
physical_scope: "A finite, time-homogeneous continuous-time rate model satisfying detailed balance; convergence is asserted only when its positive-rate graph is connected, and no general continuum or non-Markovian relaxation theorem is claimed."
sources:
  references:
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Relative Entropy and Relaxation to Equilibrium"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Relative%20Entropy%20And%20Relaxation%20To%20Equilibrium.pdf"
      locator: "Complete 11-page lecture PDF; relative entropy and relaxation in finite-state rate models."
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 6.1 and 6.2 on finite-state master equations and entropy production."
---

## Statement

Let $S$ have $N\ge2$ states, positive detailed-balance law $\pi$, and connected undirected rate graph as in [[def-td-detailed-balance-rate-model]]. For every strictly positive initial probability vector $p(0)$, the master equation has a unique strictly positive probability solution $p(t)$ for all $t\ge0$. The relative entropy $D(p(t)\Vert\pi)=\sum_i p_i(t)\log(p_i(t)/\pi_i)$ is nonincreasing, and $p_i(t)\to\pi_i$ for every state. No monotonicity of Shannon entropy $-\sum_i p_i\log p_i$ is asserted.

## Facts & Assumptions

**Given:** A finite state set of size $N\ge2$, finite rates, a positive normalized detailed-balance vector $\pi$, and an initially strictly positive normalized vector $p(0)$.

[F1] [[def-td-detailed-balance-rate-model]]: $q_{ij}\ge0$ for $i\ne j$, $q_{ii}=-\sum_{j\ne i}q_{ij}$, and $\dot p_i=\sum_{j\ne i}(p_jq_{ji}-p_iq_{ij})$.

[F2] [[def-td-detailed-balance-rate-model]]: $a_{ij}:=\pi_iq_{ij}=\pi_jq_{ji}$ is positive on graph edges, and the graph is connected.

[F3] [[thm-natural-logarithm-laws]]: $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$, and $\log x\le0$ for $0<x\le1$.

[F4] [[thm-logarithm-derivative-and-integral]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]]: for $x>0$, $(\log x)'=1/x$, and the ordinary chain and finite-product rules differentiate the entropy sum.

[F5] [[thm-derivative-of-exponential]] and [[cor-mean-value-theorem]]: differentiate $e^{ct}$ and infer monotonicity on an interval from a nonpositive derivative.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the finite Cauchy--Schwarz inequality bounds a sum of at most $N-1$ edge increments by $(N-1)$ times their squared sum.

## Proof

**Given:** [F1]--[F6] and $p_i(0)>0$.

1.1 Put $c=1+\max_i\sum_{j\ne i}q_{ij}$ and $P=I+Q/c$, where $Q=(q_{ij})$. Then $P$ has nonnegative entries and row sums one. The series $p(t)=e^{-ct}\sum_{n=0}^\infty (ct)^n p(0)P^n/n!$ and its differentiated series converge uniformly on bounded time intervals; its coefficients are nonnegative and sum to one, so it is a probability vector, starts at $p(0)$, and differentiates to $\dot p=pQ$. Its $n=0$ term gives $p_i(t)\ge e^{-ct}p_i(0)>0$. For uniqueness, the difference $z$ of two solutions satisfies $z'=zQ$; with $C=\max_i\sum_j|q_{ij}|$ and $U(t)=\int_0^t\|z(s)\|_1ds$, one has $U'(t)=\|z(t)\|_1\le C U(t)$. Thus $(e^{-Ct}U(t))'\le0$ and $U(0)=0\le U(t)$ force $U=0$, hence $z=0$. [F1, F5, given, algebra]

2.1 With $r_i=p_i/\pi_i$, detailed balance gives $\dot p_i=\sum_{j\ne i}a_{ij}(r_j-r_i)$. By [F4], differentiating the finite entropy sum gives $D'=\sum_i\dot p_i(\log r_i+1)=\sum_i\dot p_i\log r_i$, since $\sum_i\dot p_i=0$. Pairing the $i,j$ terms gives $D'=-\sum_{\{i,j\}\in E}a_{ij}(r_i-r_j)(\log r_i-\log r_j)\le0$: if $r_i\ge r_j$, then $\log r_i-\log r_j=-\log(r_j/r_i)\ge0$ by [F3], and the reversed order gives the same product sign. The mean value theorem [F5] on each compact time interval makes $D$ nonincreasing. [F1, F2, F3, F4, F5, step 1.1]

2.2 Set $u_i=r_i-1$, so $\sum_i\pi_i u_i=0$, and $V(t)=\sum_i\pi_i u_i^2$. Since $\dot u_i=\pi_i^{-1}\sum_{j\ne i}a_{ij}(u_j-u_i)$, differentiating and pairing the two orientations of each edge gives $V'=2\sum_i u_i\sum_{j\ne i}a_{ij}(u_j-u_i)=-2\sum_{\{i,j\}\in E}a_{ij}(u_i-u_j)^2$. [F1, F2, step 1.1]

3.1 Let $a_*=\min_{\{i,j\}\in E}a_{ij}>0$. Fix a root state and choose one simple path from it to each state; this is only a finite family of choices, obtainable successively, and each path has length at most $N-1$. Telescoping and [F6] give $(u_i-u_r)^2\le(N-1)\sum_{\{j,k\}\in E}(u_j-u_k)^2$. The zero-mean identity gives $u_r=-\sum_i\pi_i(u_i-u_r)$; expanding $\sum_i\pi_i[(u_i-u_r)-\sum_j\pi_j(u_j-u_r)]^2\ge0$ yields $u_r^2\le\sum_i\pi_i(u_i-u_r)^2$. Since $(x+y)^2\le2x^2+2y^2$ and $\sum_i\pi_i=1$, it follows that $V\le4(N-1)\sum_E(u_i-u_j)^2\le4(N-1)a_*^{-1}\sum_Ea_{ij}(u_i-u_j)^2$. [F2, F6, step 2.2, algebra]

4.1 Thus $V'\le-2\lambda V$ with $\lambda=a_*/[4(N-1)]>0$. By [F5], the derivative of $e^{2\lambda t}V(t)$ is nonpositive and that function is nonincreasing, so $V(t)\le e^{-2\lambda t}V(0)$. Since $\pi_i u_i(t)^2\le V(t)$ and $p_i-\pi_i=\pi_i u_i$, each $p_i(t)\to\pi_i$. [F5, step 2.2, step 3.1] ∎
