---
id: lem-geometric-drift-minorization-reduces-to-bounded-small-set
kind: lemma
title: Geometric drift yields a bounded small set and bivariate drift
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-petite-set-for-markov-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - lem-aperiodic-minorization-times-are-cofinite
  - lem-aperiodic-petite-set-with-accessible-small-set-is-small
  - lem-bivariate-drift-minorization-coupling-rate
  - lem-drift-sublevel-union-is-petite
  - lem-invariant-law-positive-set-and-almost-sure-hitting
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms
      url: https://www.probability.ca/jeff/ftpdir/probsurv.pdf
    - title: Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains
      url: https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf
axiom_use: AC is carried through the stopped-chain petite argument and split-kernel minorization.
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible and aperiodic with invariant probability $\pi$. Suppose $C$ is $(m,\epsilon,\nu)$-small with $\phi(C)>0$ and $PV\le\lambda V+b1_C$ for finite $V\ge1$, $0<\lambda<1$. Then there are $\lambda'\in(\lambda,1)$ and a $\phi$-positive small set $C_0\subseteq C$ with $\sup_{C_0}V<\infty$ and $PV\le\lambda'V+b1_{C_0}$ pointwise. Moreover there are a bounded-$V$ small set $D$, a time $L$, a minorizing probability $\nu'$, and $a<1$ such that for $Q=P^L$ and $h(x,y)=(V(x)+V(y))/2$,
$$Q\otimes Q\,h\le ah\quad\text{off }D^2.$$
If $Q(x,\cdot)\ge\epsilon_D\nu'$ on $D$, the residual laws $R_x=(Q(x,\cdot)-\epsilon_D\nu')/(1-\epsilon_D)$ have $\sup_{x,y\in D}R_x\otimes R_y(h)<\infty$ when $\epsilon_D<1$; for $\epsilon_D=1$ no residual branch is needed.

## Facts & Assumptions

**Given:** The irreducibility, aperiodicity, invariant probability, small-set and drift assumptions.

[F1] [[def-phi-irreducible-chain]]: every positive-$\phi$ set is reachable from every state.

[F2] [[def-small-set-minorization-and-drift]]: the fixed-time minorization and pointwise drift inequality hold.

[F3] [[lem-invariant-law-positive-set-and-almost-sure-hitting]]: $\pi$ charges each positive-$\phi$ set.

[F4] [[lem-drift-sublevel-union-is-petite]]: a drift sublevel enlargement of a small set is petite with the same minorizer.

[F5] [[lem-aperiodic-petite-set-with-accessible-small-set-is-small]]: the petite enlargement is small with that same minorizer.

[F6] [[lem-aperiodic-minorization-times-are-cofinite]]: once $\nu'\ll\pi$ and every state reaches a minorization into $\nu'$, $\nu'P^t\ge c_t\nu'$ for all sufficiently large $t$.

[F7] [[def-general-state-aperiodic-markov-chain]]: aperiodicity excludes cyclic decompositions.

[F8] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is invariant.

[F9] [[def-measure-kernel-and-probability-kernel]]: iterated kernel expectations obey the drift bounds.

[A1] [[def-axiom-of-choice]]: the petite enlargement and small-set coupling suppliers use the declared path/splitting construction.

## Proof

**Given:** The hypotheses and facts [F1]–[F9], with [A1].

1.1 Choose $\lambda'\in(\lambda,1)$ and then $d_0>b/(\lambda'-\lambda)$ large enough that $C_0=C\cap\{V\le d_0\}$ has positive $\phi$-measure; such a choice exists since $V$ is finite and $C$ is positive. The set $C_0$ remains $(m,\epsilon,\nu)$-small and is bounded in $V$. For $x\in C\setminus C_0$, $b\le(\lambda'-\lambda)V(x)$, while outside $C$ the original drift has no $b$ term. Hence $PV\le\lambda'V+b1_{C_0}$. [F1, F2, A1, given]

2.1 By [F3], $\pi(C_0)>0$. Integrating the minorization over $C_0$ gives $\nu\ll\pi$. Iteration of the original drift yields $P^mV(x)\le\lambda^mV(x)+b/(1-\lambda)$; for $x\in C_0$ the right side is finite and uniformly bounded. Since $P^m(x,\cdot)\ge\epsilon\nu$, it follows that $\nu V\le\epsilon^{-1}P^mV(x)<\infty$. Irreducibility and $\phi(C_0)>0$ give some $k\ge0$ with $\nu P^k(C_0)>0$. Put $\nu'=\nu P^k$. For any $A$ with $\pi(A)=0$, invariance gives $\int P^k(x,A)\pi(dx)=\pi(A)=0$, so $P^k(x,A)=0$ for $\pi$-almost every $x$; since $\nu\ll\pi$, this implies $\nu'(A)=\int P^k(x,A)\nu(dx)=0$. Thus $\nu'\ll\pi$. Also $\nu'V<\infty$, and $C_0$ is small at time $m+k$ with minorizer $\nu'$. [F1, F2, F3, F8, F9, step 1.1]

3.1 Choose any finite $d_1$ large enough that $2b/((1-\lambda')(d_1+1))<1$. Put $D=C_0\cup\{V\le d_1\}$, which is bounded in $V$. The drift-petite lemma [F4] makes $D$ petite with minorizer $\nu'$, and $\nu'(C_0)>0$ by construction. The petite-to-small lemma [F5] makes $D$ small with the same $\nu'$ at some time $L_0$. For every sufficiently large $t$, [F6] gives $\nu'P^t\ge c_t\nu'$; hence $P^{L_0+t}(x,\cdot)\ge\epsilon_Dc_t\nu'$ for $x\in D$. [F4, F5, F6, A1, step 2.1]

4.1 Iterating the improved drift gives $P^LV\le\lambda'^LV+B_0$ with $B_0=b/(1-\lambda')$. Choose $t$ in step 3.1 large enough that $L=L_0+t$ also satisfies $a:=\lambda'^L+\frac{2B_0}{d_1+1}<1.$ If $(x,y)\notin D^2$, at least one coordinate has $V>d_1$, so $h\ge(d_1+1)/2$. Therefore $Q\otimes Q\,h\le\lambda'^Lh+B_0\le ah.$ The set $D$ is bounded in $V$, and $QV$ is uniformly bounded on $D$ by the drift bound. The minorizer $\nu'$ has finite $V$-moment by step 2.1, so the residual laws have uniformly finite $V$-moment and their product expectation of $h$ is bounded. [F2, F7, F9, step 2.1, step 3.1, algebra] ∎
