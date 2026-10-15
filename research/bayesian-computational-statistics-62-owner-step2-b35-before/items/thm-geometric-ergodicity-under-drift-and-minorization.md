---
id: thm-geometric-ergodicity-under-drift-and-minorization
kind: theorem
title: "Geometric ergodicity under drift and small-set minorization"
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
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "AC is carried through the split-chain coupling used in steps 1.1–1.2."
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible and aperiodic with invariant probability $\pi$. Suppose a $\phi$-positive small set $C$ and finite-valued $V\ge1$ satisfy $PV\le\lambda V+b1_C$ for $0<\lambda<1$. Then there are $M<\infty$ and $0<r<1$ such that
$$\|P^n(x,\cdot)-\pi\|_{\rm TV}\le M V(x)r^n\quad(x\in\mathsf X,\ n\ge0).$$
This is geometric ergodicity with a $V$-weighted bound.

## Facts & Assumptions

**Given:** The kernel, irreducibility, aperiodicity, invariant probability, small set and drift inequality in the Statement.

[F1] [[def-phi-irreducible-chain]]: positive-$\phi$ sets are reachable from every state.

[F2] [[def-general-state-aperiodic-markov-chain]]: no cyclic decomposition exists.

[F3] [[def-small-set-minorization-and-drift]]: the common minorization and drift inequalities hold.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is invariant.

[F5] [[lem-total-variation-coupling-and-kernel-contraction]]: total variation is controlled by coupling disagreement and contracts under a probability kernel.

[F6] [[lem-geometric-drift-minorization-reduces-to-bounded-small-set]]: a skeleton and bounded small set satisfy bivariate drift/minorization hypotheses.

[F7] [[lem-bivariate-drift-minorization-coupling-rate]]: those hypotheses yield a geometric coupling bound.

[F8] [[lem-invariant-law-integrates-bounded-set-drift]]: after the reduction, the invariant law has finite $V$-moment.

[A1] [[def-axiom-of-choice]]: the path-space coupling in [F7] uses AC as stated by its supplier.

## Proof

**Given:** The hypotheses and facts [F1]–[F8].

1.1 Apply [F6] to obtain a skeleton $Q=P^L$, bounded small set $D$, function $h(x,y)=(V(x)+V(y))/2$, and constants satisfying the hypotheses of [F7]. Since $D$ is bounded in $V$, the residual split expectation is uniformly finite. [F1, F2, F3, F4, F6, F7, A1]

1.2 By [F7], for the initial pair $(x,Y_0)$ with $Y_0\sim\pi$, the coupling disagreement at skeleton time $k$ is at most $M_0h(x,Y_0)r_0^k$. The invariant-drift lemma gives $\pi V<\infty$; hence $\mathbb E h(x,Y_0)=\tfrac12(V(x)+\pi V)\le\tfrac12(1+\pi V)V(x).$ The coupling inequality [F5] yields a $V(x)$-weighted geometric bound along skeleton times. [F4, F5, F6, F7, F8, A1, step 1.1]

2.1 Write $n=Lk+s$, $0\le s<L$. The finite set of residual powers $P^s$ contracts total variation and the stationary law remains $\pi$. Absorb the finite factor and $r_0^{-s/L}$ over $s=0,\ldots,L-1$ into a single $M$, and put $r=r_0^{1/L}$. Then the asserted bound holds for every $n$. [F4, F5, step 1.2, algebra] ∎
