---
id: ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain
kind: example
title: "Drift and minorization certify geometric ergodicity"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - thm-geometric-ergodicity-under-drift-and-minorization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "AC is inherited from the geometric coupling theorem cited in step 2.1."
---
## Statement

On $\mathbb N_0$, define a birth-death kernel by $P(0,1)=1/4$, $P(0,0)=3/4$, and for $n\ge1$,
$$P(n,n+1)=1/4,\quad P(n,n-1)=1/2,\quad P(n,n)=1/4.$$
It has invariant probability $\pi_n=2^{-n-1}$ and satisfies a geometric drift and small-set minorization, so it is geometrically ergodic.

## Facts & Assumptions

**Given:** The state space and transition probabilities in the Statement.

[F1] [[def-phi-irreducible-chain]]: positive counting-measure sets are reachable from every state.

[F2] [[def-general-state-aperiodic-markov-chain]]: a self-loop on the irreducible class prevents a cyclic decomposition.

[F3] [[def-small-set-minorization-and-drift]]: a drift inequality and a fixed-time small-set minorization are the hypotheses used by the geometric theorem.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: invariance is $\pi P=\pi$.

[F5] [[thm-geometric-ergodicity-under-drift-and-minorization]]: irreducibility, aperiodicity, invariant probability, small set and drift imply a $V$-weighted geometric total-variation bound.

[F6] [[def-measure-kernel-and-probability-kernel]]: transition rows are probability measures and the statewise evaluations are measurable.

[A1] [[def-axiom-of-choice]]: the geometric theorem's coupling proof uses its declared canonical path construction.

## Verification

**Given:** The kernel and facts [F1]–[F6], with [A1].

1.1 The transition rows sum to one. Every adjacent move has positive probability, so every state reaches every other state, proving counting-measure irreducibility. Each state has a positive holding probability, so no positive-mass cyclic family can move deterministically to a disjoint successor. The proposed masses sum to one. At state $0$, the incoming mass is $\pi_0P(0,0)+\pi_1P(1,0)=3/8+1/8=1/2=\pi_0$. For $n\ge1$, it is
$$\sum_j\pi_jP(j,n)=\pi_{n-1}/4+\pi_n/4+\pi_{n+1}/2=2^{-n-2}+2^{-n-3}+2^{-n-3}=2^{-n-1}=\pi_n.$$
Thus $\pi P=\pi$. [F1, F2, F4, F6, given]
$$\pi_nP(n,n+1)=2^{-n-1}/4=2^{-n-3} =\pi_{n+1}P(n+1,n),$$
and these detailed-balance equalities plus the self-loop terms show $\pi P=\pi$; $\sum_{n\ge0}2^{-n-1}=1$. [F1, F2, F4, F6, given]

1.2 Let $C=\{0\}$, $\nu=P(0,\cdot)$, $m=1$, and $\epsilon=1$. Then $P(0,\cdot)=\nu$, so $C$ is small. Set $V(n)=(\sqrt2)^n$. For $n\ge1$,
$$\frac{PV(n)}{V(n)}=\frac14\sqrt2+\frac12\frac1{\sqrt2}+\frac14 =\frac14+\frac{\sqrt2}{2}<\frac{24}{25}.$$
Since $\sqrt2/2<71/100$ (squaring gives $1/2<5041/10000$), the preceding ratio is less than $96/100=24/25$. At $0$, $PV(0)=3/4+\sqrt2/4<5/4<49/25=24/25+b$ with $b=1$. Hence $PV\le(24/25)V+1_C$. [F3, algebra]

2.1 The hypotheses of [F5] now hold, so there are $M<\infty$ and $r<1$ with $\|P^n(x,\cdot)-\pi\|_{\rm TV}\le M V(x)r^n$ for all $x,n$. The example supplies a concrete certificate: the target is invariant and the drift/minorization conditions are checked directly. [F1, F2, F3, F4, F5, F6, A1, step 1.1, step 1.2] ∎
