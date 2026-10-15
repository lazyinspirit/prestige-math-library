---
id: lem-drift-sublevel-union-is-petite
kind: lemma
title: "A drift sublevel enlargement of a small set is petite"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-petite-set-for-markov-kernel
  - def-small-set-minorization-and-drift
  - thm-discrete-strong-markov-property
  - thm-monotone-convergence-for-the-integral
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
axiom_use: "AC supplies the canonical path and stopping-time realization in steps 1.1, 2.1, 3.1."
---
## Statement

Suppose $C$ is $(m,\epsilon,\nu)$-small and $PV\le\lambda V+b1_C$ with finite $V\ge1$, $0<\lambda<1$. For every finite $d\ge1$, $D=C\cup\{V\le d\}$ is petite.

## Facts & Assumptions

**Given:** The kernel, small-set minorization and drift inequality in the Statement.

[F1] [[def-small-set-minorization-and-drift]]: $P^m(x,\cdot)\ge\epsilon\nu$ on $C$, and outside $C$, $PV\le\lambda V$.

[F2] [[def-petite-set-for-markov-kernel]]: petite means a fixed probability mixture of positive-time transition kernels dominates a positive multiple of a common probability.

[F3] [[def-measure-kernel-and-probability-kernel]]: kernel iteration and stopping-time probabilities are measurable.

[F4] [[thm-monotone-convergence-for-the-integral]]: nonnegative sums may be integrated termwise.

[F5] [[thm-discrete-strong-markov-property]]: conditional on a finite first entrance time, the chain continues with kernel $P$.

[A1] [[def-axiom-of-choice]]: the canonical path and stopping-time realization use AC as specified by [F5].

## Proof

**Given:** The hypotheses and facts [F1]–[F5], with [A1].

1.1 If $C=\varnothing$, then $PV\le\lambda V$ everywhere; iterating gives $1\le P^NV(x)\le\lambda^NV(x)$ for every state $x$ and $N$, impossible for sufficiently large $N$ because $V(x)<\infty$. Thus the hypotheses force $C\ne\varnothing$. Let $\tau_C=\inf\{n\ge0:X_n\in C\}$. The killed kernel $K(x,A)=1_{C^c}(x)P(x,A)$ satisfies $KV\le\lambda V$ off $C$. Since $V\ge1$, induction gives $K^N1(x)\le K^NV(x)\le\lambda^NV(x)$. Hence for $x\in\{V\le d\}$, $\Pr_x(\tau_C\le N)\ge1-d\lambda^N$; for $x\in C$, $\tau_C=0$. [F1, F3, A1, given]

2.1 For each $t\le N$, restrict paths to the disjoint event $\{\tau_C=t\}$ and apply [F5] followed by the small-set minorization. This gives $P^{t+m}(x,A)\ge\epsilon\Pr_x(\tau_C=t)\nu(A).$ Summing over $t$ yields $\sum_{t=0}^NP^{t+m}(x,A)\ge\epsilon(1-d\lambda^N)\nu(A)$ uniformly on $D$. [F1, F5, A1, step 1.1]

3.1 Choose $N$ with $d\lambda^N\le1/2$ and assign weight $1/(N+1)$ to times $m,\ldots,m+N$. The resulting probability mixture dominates $\epsilon\nu/[2(N+1)]$, so it satisfies the petite definition with positive multiplier $\alpha=\epsilon/[2(N+1)]$. [F2, F4, step 2.1] ∎
