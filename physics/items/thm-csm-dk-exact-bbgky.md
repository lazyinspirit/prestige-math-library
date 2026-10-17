---
id: thm-csm-dk-exact-bbgky
kind: theorem
title: Exact normalized BBGKY hierarchy
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-csm-dk-periodic-mean-field-model
  - thm-csm-dk-finite-n-complete-flow
  - thm-tonelli-and-fubini-for-completed-product-measures
  - def-countable-choice
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  thm-csm-dk-finite-n-complete-flow: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Sec. 1.2.1, printed pp. 6-7, and Part I, printed pp. 12-13: finite-particle Hamiltonian and Liouville equations. The exact marginal coefficients are derived locally here.'
---

## Statement

Fix the smooth periodic finite-N model and complete flow $\Phi_t^N$ of [[thm-csm-dk-finite-n-complete-flow]]. Let $F_N(t)=F_N^0\circ\Phi_{-t}^N$ be the transported normalized symmetric $C^\infty$ probability density relative to canonical phase volume, with all phase derivatives rapidly decreasing in momentum uniformly in position on each finite time slab. Here $z_i=(q_i,p_i)$, and rapid decrease means that for every position multi-index $\alpha$, momentum multi-index $\beta$, and integer $r\ge0$, $(1+|p|)^r|\partial_q^\alpha\partial_p^\beta F_N(t,q,p)|$ is uniformly bounded on that slab. For $1\le k\le N$, define the normalized marginal

$$f_k(t,z_1,\ldots,z_k):=\int F_N(t,z_1,\ldots,z_N)\,dz_{k+1}\cdots dz_N.$$

Then, for $1\le k\le N$,

$$\partial_t f_k+\sum_{i=1}^k\frac{p_i}{m}\cdot\nabla_{q_i}f_k+\frac1N\sum_{1\le i<j\le k}K(q_i-q_j)\cdot(\nabla_{p_i}-\nabla_{p_j})f_k+\frac{N-k}{N}\sum_{i=1}^k\nabla_{p_i}\cdot\int K(q_i-q_{k+1})f_{k+1}(t,z_1,\ldots,z_{k+1})\,dz_{k+1}=0.$$

When $k=N$, the last term is zero and no $f_{N+1}$ is used. This identity is exact at finite $N$ and makes no factorization or molecular-chaos assumption.

## Facts & Assumptions

**Given:** The smooth complete finite-N Hamiltonian flow and its transported symmetric rapidly decreasing density from [[thm-csm-dk-finite-n-complete-flow]], the canonical phase volume, and the countable-choice condition below.

[F1] [[thm-csm-dk-finite-n-complete-flow]]: for the smooth even periodic potential, the complete flow is volume-preserving and permutation-equivariant; a symmetric smooth density with all phase derivatives rapidly decreasing in momentum is transported to a symmetric classical Liouville solution with the same regularity.

[F2] [[thm-tonelli-and-fubini-for-completed-product-measures]]: assuming countable choice, integrable functions on completed products of sigma-finite measure spaces have measurable integrable sections almost everywhere and equal iterated integrals.

[F3] [[def-csm-dk-periodic-mean-field-model]]: $K=-\nabla W$ for a smooth even periodic potential $W$, so $K$ is odd; the canonical Hamilton equations are $\dot q_i=p_i/m$ and $\dot p_i=N^{-1}\sum_{j\ne i}K(q_i-q_j)$.

[A1] [[def-countable-choice]]: assume the Axiom of Countable Choice, as required by [F2].

## Proof

1.1 Use the Hamilton equations and odd force $K$ from [F3], with the classical Liouville solution from [F1] under the countable-choice density measure assumption [A1]. Substituting these equations into $\partial_tF_N+\sum_i(\dot q_i\cdot\nabla_{q_i}F_N+\dot p_i\cdot\nabla_{p_i}F_N)=0$ and grouping the two terms for each unordered pair $i<j$ yields $\partial_tF_N+\sum_{i=1}^N\frac{p_i}{m}\cdot\nabla_{q_i}F_N+\frac1N\sum_{1\le i<j\le N}K(q_i-q_j)\cdot(\nabla_{p_i}-\nabla_{p_j})F_N=0.$ The sign in the second paired derivative uses $K(q_j-q_i)=-K(q_i-q_j)$. [A1, F1, F3, algebra]

2.1 Fix $k<N$ and integrate step 1.1 over $z_{k+1},\ldots,z_N$. The integrations and time differentiation are legitimate by the all-phase-derivative rapid tails (the time derivative from step 1.1 adds at most one factor of momentum), compact periodic position variables, and [A1, F2]. A position derivative in an integrated variable has zero integral by periodicity; a momentum derivative in an integrated variable has zero boundary term by the stated decay. Thus one-body terms for $i\le k$ and interaction pairs entirely inside $\{1,\ldots,k\}$ give the first three terms of the target equation. Pairs with both labels greater than $k$ integrate to zero by the same momentum integration-by-parts argument. [A1, F1, F2, step 1.1]

3.1 For a cross pair $i\le k<j$, the term containing $\nabla_{p_j}F_N$ integrates to zero because $K(q_i-q_j)$ is independent of $p_j$ and the $p_j$-tail vanishes at infinity. The term containing $\nabla_{p_i}F_N$ remains. By permutation symmetry of $F_N$, for fixed $i\le k$ every label $j>k$ has the same integrated contribution, equal to $\nabla_{p_i}\cdot\int K(q_i-q_{k+1})f_{k+1}(t,z_1,\ldots,z_k,z_{k+1})\,dz_{k+1}.$ There are exactly $N-k$ such labels, each carrying coefficient $1/N$. This gives the factor $(N-k)/N$ and all terms of the displayed hierarchy. [F1, F2, step 2.1, algebra]

4.1 If $k=N$, there are no cross pairs, so the same integration argument leaves only the one-body transport and internal-pair terms; the formula's cross coefficient is $(N-N)/N=0$. Thus the statement holds for every $1\le k\le N$, with no factorization assumption at any step. [step 2.1, step 3.1, algebra] ∎
