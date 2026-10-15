---
id: lem-invariant-law-integrates-bounded-set-drift
kind: lemma
title: An invariant law integrates a drift function bounded on its small set
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-small-set-minorization-and-drift
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms
      url: https://www.probability.ca/jeff/ftpdir/probsurv.pdf
    - title: Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains
      url: https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf
axiom_use: AC is used only where stated in Facts & Assumptions; otherwise the proof is choice-free.
---
## Statement

Let $\pi$ be invariant for $P$, and suppose $PV\le\lambda V+b1_C$ with $V\ge1$, $0<\lambda<1$, and $\sup_CV<\infty$. Then $\pi V<\infty$.

## Facts & Assumptions

**Given:** The invariant probability and drift inequality in the Statement.

The supremum is interpreted in the extended reals, with $\sup\varnothing=-\infty$; the empty-set case is handled separately below.

[F1] [[def-small-set-minorization-and-drift]]: $V$ is finite-valued and $PV\le\lambda V+b1_C$ pointwise.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P=\pi$, including equality of integrals for bounded measurable functions.

[F3] [[def-measure-kernel-and-probability-kernel]]: $P(V\wedge N)$ is measurable and bounded by $N$.

[F4] [[thm-monotone-convergence-for-the-integral]]: $\int(V\wedge N)d\pi\uparrow\int Vd\pi$.

## Proof

**Given:** The hypotheses and facts [F1]–[F4].

1.1 If $C=\varnothing$, then $PV\le\lambda V$ everywhere. For each integer $N\ge1$, $V_N=V\wedge N$ satisfies $PV_N-V_N\le-(1-\lambda)V$ on $\{V\le N\}$ and $PV_N-V_N\le0$ on $\{V>N\}$. Invariance for the bounded function $V_N$ gives integral zero, so $\pi(\{V\le N\})=0$. Since $V$ is finite-valued, these sets increase to the whole space, contradicting that $\pi$ is a probability. Thus no invariant probability exists in the empty-set case, and the implication is vacuous. Assume $C\ne\varnothing$ below. [F1, F2, given]

1.2 Set $V_N=V\wedge N$. Since $V_N\le V$ and $V_N\le N$, $PV_N\le \min(PV,N)$. On $C$, $PV_N-V_N\le\lambda\sup_CV+b$. On $C^c\cap\{V\le N\}$ it is at most $-(1-\lambda)V$, and on $C^c\cap\{V>N\}$ it is at most zero. [F1, F3, given]

2.1 Invariance for bounded $V_N$ gives $\int(PV_N-V_N)d\pi=0$. Using the three pointwise bounds from step 1.2, $(1-\lambda)\int_{C^c\cap\{V\le N\}}V\,d\pi\le(\lambda\sup_CV+b)\pi(C)\le\lambda\sup_CV+b.$ [F2, step 1.2]

3.1 The domains $C^c\cap\{V\le N\}$ increase to $C^c$; monotone convergence bounds $\int_{C^c}Vd\pi$ by the right side divided by $1-\lambda$. The integral over $C$ is at most $\sup_CV$. Hence $\pi V<\infty$. [F4, step 2.1] ∎
