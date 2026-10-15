---
id: thm-geometric-ergodicity-under-drift-and-minorization
kind: theorem
title: Geometric ergodicity under drift and small-set minorization
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - def-total-variation-distance-for-probability-laws
  - def-measure-kernel-and-probability-kernel
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - lem-invariant-law-positive-set-and-almost-sure-hitting
  - lem-total-variation-coupling-and-kernel-contraction
  - lem-bivariate-drift-minorization-coupling-rate
  - lem-geometric-drift-minorization-reduces-to-bounded-small-set
  - lem-invariant-law-integrates-bounded-set-drift
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
axiom_use: AC is carried through the split-chain coupling used in steps 1.1, 2.1.
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible and aperiodic with invariant probability $\pi$. Suppose a $\phi$-positive small set $C$ and finite-valued $V\ge1$ satisfy $PV\le\lambda V+b1_C$ for $0<\lambda<1$. Then there are $M<\infty$ and $0<r<1$ such that
$$\|P^n(x,\cdot)-\pi\|_{\rm TV}\le M V(x)r^n\quad(x\in\mathsf X,\ n\ge0).$$
This is geometric ergodicity with a $V$-weighted bound.

Under the same kernel, $\phi$-positive small-set and drift-constant hypotheses, the result also holds if $V:\mathsf X\to[1,+\infty]$ is measurable and finite $\pi$-almost everywhere, with the drift inequality holding pointwise in the extended sense. Then $E=\{V<\infty\}$ is measurable, absorbing and of full $\pi$-measure, and the displayed bound holds for every $x\in E$. Thus extended certificates give the common geometric rate for $\pi$-almost every start, while globally finite certificates give it for every start.

## Facts & Assumptions

**Given:** The kernel, irreducibility, aperiodicity, invariant probability, small set and drift inequality in the Statement.

[F1] [[def-phi-irreducible-chain]]: positive-$\phi$ sets are reachable from every state.

[F2] [[def-general-state-aperiodic-markov-chain]]: no cyclic decomposition exists.

[F3] [[def-small-set-minorization-and-drift]]: the common minorization and drift inequalities hold.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is invariant.

[F5] [[def-total-variation-distance-for-probability-laws]] gives the event-supremum definition of total variation. [[lem-total-variation-coupling-and-kernel-contraction]] bounds it by coupling disagreement and contracts it under a probability kernel.

[F6] [[lem-geometric-drift-minorization-reduces-to-bounded-small-set]]: there is a bounded-$V$, $\phi$-positive small subset $C_0$ with improved pointwise drift $PV\le\lambda'V+b1_{C_0}$ for some $\lambda'<1$; a skeleton and bounded small set also satisfy the bivariate drift/minorization hypotheses.

[F7] [[lem-bivariate-drift-minorization-coupling-rate]]: those hypotheses yield a geometric coupling bound.

[F8] [[lem-invariant-law-integrates-bounded-set-drift]]: an invariant probability integrates a finite-valued drift function when its drift set is bounded in that function.

[F9] [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]: finite nonnegative integral implies the integrand is finite almost everywhere under the integrating measure. [[def-measure-kernel-and-probability-kernel]] gives pointwise probability sections and measurable evaluations for the restricted kernel construction.

[F10] [[lem-invariant-law-positive-set-and-almost-sure-hitting]]: each positive-$\phi$ set has positive invariant probability.

[A1] Assume [[def-axiom-of-choice]] as inherited from the path and stopping-time suppliers used by [F6] and [F7].

## Proof

**Given:** The hypotheses and facts [F1]–[F10].

1.1 First assume $V$ is finite-valued. By [F6], choose the bounded-$V$ small subset $C_0$ and $\lambda'\in(\lambda,1)$ with $PV\le\lambda'V+b1_{C_0}$. Its boundedness is exactly the hypothesis needed for [F8], which now gives $\pi V<\infty$. Apply the remaining conclusions of [F6] to obtain a skeleton $Q=P^L$, bounded small set $D$, function $h(x,y)=(V(x)+V(y))/2$, and constants satisfying the hypotheses of [F7]. Since $D$ is bounded in $V$, the residual split expectation is uniformly finite. [F1, F2, F3, F4, F6, F7, F8, A1]

1.2 Now allow the extended certificate and put $N=\{V=+\infty\}$ and $E=N^c$. These sets are measurable and $\pi(N)=0$. If $x\in E$, the pointwise drift bound has finite right side, so $PV(x)<\infty$. Apply [F9] to $V$ under the probability measure $P(x,\cdot)$ to obtain $P(x,N)=0$. Thus $E$ is absorbing, including for every iterate. Also $\phi(N)=0$: otherwise [F10] would give $\pi(N)>0$. Hence $\phi(C\cap E)=\phi(C)>0$, in particular $C\cap E$ is nonempty, and $\phi|_E$ remains a nonzero sigma-finite irreducibility measure. [F1, F3, F4, F9, F10, given, construct]

2.1 For every fixed pair $x,y$, [F7] gives $\|Q^k(x,\cdot)-Q^k(y,\cdot)\|_{\rm TV}\le M_0h(x,y)r_0^k$ with constants independent of the pair. For each measurable event $A$, invariance and the pointwise event bound imply $|Q^k(x,A)-\pi(A)|=\left|\int[Q^k(x,A)-Q^k(y,A)]\pi(dy)\right|\le M_0r_0^k\int h(x,y)\pi(dy)$. The integrand on the left is a difference of measurable kernel evaluations; no measurable selection of pairwise couplings is needed. By step 1.1, $\int h(x,y)\pi(dy)=\tfrac12(V(x)+\pi V)\le\tfrac12(1+\pi V)V(x)<\infty$. Taking the event supremum [F5] gives the required $V(x)$-weighted bound at skeleton times. [F4, F5, F6, F7, F8, A1, step 1.1]

2.2 Restrict the state space to $E$ with its trace sigma-algebra and set $P_E(x,A)=P(x,A)$ for trace-measurable $A\subseteq E$. Absorption makes this a probability kernel, with invariant probability $\pi|_E$; a countable generator of $\mathcal X$ restricts to a countable generator on $E$. Original irreducibility supplies positive finite-time access to every positive-$\phi|_E$ set from each $x\in E$. For the original $(m,\epsilon,\nu)$-minorization on $C$, choose $x\in C\cap E$. Since $P^m(x,N)=0$, minorization gives $\nu(N)=0$, so $C\cap E$ is small for $P_E$ with probability $\nu|_E$. Any positive-$\pi|_E$ cyclic part for $P_E$ would consist of original measurable subsets of $E$ with the same pointwise transitions under $P$, contradicting the actual aperiodicity definition [F2], which excludes such a part without requiring it to cover the state space. Finally $V|_E$ is finite-valued and satisfies the original drift inequality with drift set $C\cap E$. [F1, F2, F3, F4, F9, step 1.2, construct]

3.1 Write $n=Lk+s$, $0\le s<L$. The finite set of residual powers $P^s$ contracts total variation and the stationary law remains $\pi$. Absorb the finite factor and $r_0^{-s/L}$ over $s=0,\ldots,L-1$ into a single $M$, and put $r=r_0^{1/L}$. Then the asserted bound holds for every $n$. [F4, F5, step 2.1, algebra]

4.1 Apply the finite-valued result proved in steps 1.1, 2.1, 3.1 to $(E,P_E,\phi|_E,\pi|_E,V|_E,C\cap E)$. It gives constants $M<\infty$ and $0<r<1$ and the weighted bound for every $x\in E$. Both $P^n(x,\cdot)$ and $\pi$ are supported on $E$, so their total variation on the original space equals their total variation on the trace space: every event is replaced by its intersection with $E$. Thus precisely the displayed original-space bound holds on $E$, a full-$\pi$ absorbing set. If $V$ is globally finite, $E=\mathsf X$ and the first branch is recovered. [F5, step 3.1, step 1.2, step 2.2] ∎
