---
id: thm-finite-chain-closed-class-cesaro-weight-decomposition
kind: theorem
title: "Closed-class stationary laws and initial-law-dependent Cesàro weights"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-column-stochastic-matrix-and-law
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - alg-finite-markov-closed-class-decomposition
  - lem-finite-transient-block-geometric-escape
  - thm-finite-transient-hitting-and-mean-exit-residual-bound
  - thm-irreducible-finite-class-has-unique-invariant-vector
  - thm-bolzano-weierstrass
  - thm-finite-markov-closed-class-decomposition-correctness
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; all path selections, subsequence extractions, and sums are finite or explicitly sequential."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§§11.2–11.4, printed pp. 415–449; absorbing canonical form, hitting probabilities, ergodic/periodic finite classes, and Cesàro averages."
verification:
  precheck: pass
---

## Statement

Let $P$ be a finite real column-stochastic matrix, let $K=P^{\mathsf T}$ be its row transition matrix, and let $C_1,\ldots,C_s$ be the closed classes of the positive-transition graph defined in [[alg-finite-markov-closed-class-decomposition]]. Let $U$ be the remaining transient states. Each $C_j$ has a unique invariant probability row vector $\pi_j$, extended by zero off $C_j$. Every invariant probability row vector for $K$ is exactly

$$\sum_{j=1}^s\alpha_j\pi_j,\qquad \alpha_j\ge0,\quad\sum_j\alpha_j=1.$$

For an initial row probability $u$, set $T=K_{U,U}$ and $b_j(i)=\sum_{k\in C_j}K_{ik}$ for $i\in U$. If $U\ne\varnothing$, then

$$\alpha_j=u(C_j)+u_U(I-T)^{-1}b_j,$$

and if $U=\varnothing$ this means $\alpha_j=u(C_j)$. The Cesàro averages $N^{-1}\sum_{k=0}^{N-1}uK^k$ converge to $\sum_j\alpha_j\pi_j$. The weights are determined by the initial law; when there is more than one closed class, there is no single stationary vector selected by the transition matrix alone.

## Facts & Assumptions

**Given:** A finite column-stochastic matrix $P$, its equivalent row transition matrix $K=P^{\mathsf T}$, and an initial row probability vector $u$.

[F1] [[def-finite-column-stochastic-matrix-and-law]] and [[def-transition-matrix-and-n-step-transition-probabilities]]: P is column-stochastic, K is row-stochastic, and row laws evolve by multiplication by K.

[F2] [[alg-finite-markov-closed-class-decomposition]]: for a finite real column-stochastic matrix, edges are positive transitions; strongly connected components partition the states, and closed components are exactly those with no outgoing edge.

[F3] [[lem-finite-transient-block-geometric-escape]]: for some $L\le|U|$ and $\varepsilon>0$, $T^L\mathbf1\le(1-\varepsilon)\mathbf1$ and, writing $k=aL+r$, $\|T^k\|_\infty\le(1-\varepsilon)^a$; hence $T^k\to0$.

[F4] [[thm-finite-transient-hitting-and-mean-exit-residual-bound]]: $(I-T)^{-1}=\sum_{k\ge0}T^k\ge0$ and the first-exit probability into a class $C_j$ from a transient state is $((I-T)^{-1}b_j)_i$.

[F5] [[thm-irreducible-finite-class-has-unique-invariant-vector]]: every closed irreducible class has one positive invariant probability, and its real invariant row vectors are exactly scalar multiples of that probability.

[F6] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: invariant row probabilities are exactly the probability measures satisfying $\pi K=\pi$.

[F7] [[thm-bolzano-weierstrass]]: every bounded real sequence has a convergent subsequence.

[F8] [[thm-finite-markov-closed-class-decomposition-correctness]]: the graph algorithm returns exactly the strongly connected components and closed classes, and every state outside them has a positive path to a closed class.

## Proof

**Given:** P, K, the class partition, and initial law u as in the statement.

**Proof technique:** use finite-step escape for transient mass, classwise uniqueness for invariant laws, and compactness of the finite probability simplex for Cesàro limits.

1.1 By [F8], the returned classes are precisely the strongly connected components and closed classes of the positive-transition graph. The component graph obtained by contracting each strongly connected component has no directed cycle: a cycle would make its components mutually reachable and hence one component. In this finite acyclic graph every component reaches a sink, and the sinks are exactly the closed classes from [F2]. Therefore every transient state has a positive path to a closed class; if U is nonempty, [F3] applies to T. Writing k=aL+r as in [F3] gives $\|T^k\|_\infty\to0$, so the Neumann series $N=\sum_{k\ge0}T^k$ converges and is $(I-T)^{-1}$. [F2, F3, F8, given, construct]

1.2 For each closed class $C_j$, the restriction $K_{C_j,C_j}$ is a finite irreducible row-stochastic matrix. By [F5] it has a unique invariant probability $\pi_j$. Extending $\pi_j$ by zero outside $C_j$ preserves invariance because no transition leaves the class. Thus every convex combination in the statement is invariant. [F2, F5, F6, algebra]

1.3 Let $v$ be any invariant probability row vector and write its coordinates as $(v_C,v_U)$. Since closed classes have no transitions to U, the stationary equation on the transient coordinates is $v_U=v_UT$. If U is nonempty, [F3] gives $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$ for some $\varepsilon>0$, and therefore $\|v_U\|_1=\|v_UT^L\|_1\le\sum_{i\in U}(v_U)_i\sum_{k\in U}(T^L)_{ik}\le(1-\varepsilon)\|v_U\|_1$. Hence $v_U=0$. Since no closed class has transitions to another closed class, the stationary equation now restricts separately to each block $C_j$. Thus each $v_{C_j}$ is invariant on its class, so [F5] makes it $\alpha_j\pi_j$ with $\alpha_j\ge0$; their masses sum to one. This proves the asserted full set of invariant probabilities. [F2, F3, F5, F6, algebra]

1.4 For each transient state i, the probability weight of first entering class $C_j$ after k transient transitions is $(e_i^{\mathsf T}T^kb_j)$. These disjoint first-entry weights sum, by [F4], to $((I-T)^{-1}b_j)_i$. Initial mass already in $C_j$ remains there, so the total class weight from u is $\alpha_j=u(C_j)+u_U(I-T)^{-1}b_j$. Moreover $\sum_jb_j=(I-T)\mathbf 1$, since every transition from a transient state either remains in U or enters exactly one of the closed classes; thus $\sum_j\alpha_j=u(C_1\cup\cdots\cup C_s)+u_U\mathbf 1=1$. If U is empty, the same formula reduces directly to $u(C_j)$. [F1, F2, F4, algebra]

1.5 Define $\bar u_N=N^{-1}\sum_{k=0}^{N-1}uK^k$. Every coordinate lies in [0,1]. From any subsequence, apply [F7] to its first coordinate, restrict to that subsequence, and repeat for the finitely many remaining coordinates; the final subsequence converges coordinatewise. Also $\bar u_NK-\bar u_N=(uK^N-u)/N$, whose ℓ1 norm is at most $2/N$. Hence every subsequential limit is an invariant probability. [F1, F6, F7, algebra]

2.1 The mass $a_n=uK^n(C_j)$ is nondecreasing because $C_j$ is closed; its increment at each step is the first-entry weight from step 1.4. The partial sums of these weights tend to $u_U(I-T)^{-1}b_j$ by [F3]–[F4], and the unabsorbed transient mass tends to zero, so $a_n\to\alpha_j$. For any η>0, choose N₀ so |uKⁿ(Cⱼ)−αⱼ|<η for n≥N₀; the average error is at most the finite sum of the first N₀ errors divided by N, plus η, and hence tends to at most η. Since η is arbitrary, the Cesàro class mass tends to αⱼ. Thus every subsequential limit $\bar u$ has $\bar u(C_j)=\alpha_j$ for each j. By step 1.3 this invariant probability must be $\sum_j\alpha_j\pi_j$. [F2, F3, F4, step 1.3, step 1.4, step 1.5, algebra]

3.1 Every convergent subsequence of $(\bar u_N)$ has the same limit from step 2.1. If the full sequence did not converge to that limit, there would be ε>0 and a subsequence staying at least ε away. Its finitely many bounded coordinates admit a convergent further subsequence by repeated finite applications of [F7]; step 2.1 forces that further limit to be the stated mixture, a contradiction. Thus the full Cesàro sequence converges to the initial-law-dependent mixture stated. [step 1.5, step 2.1, F7, algebra] ∎
