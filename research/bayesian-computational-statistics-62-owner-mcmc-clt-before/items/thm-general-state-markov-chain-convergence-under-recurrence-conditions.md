---
id: thm-general-state-markov-chain-convergence-under-recurrence-conditions
kind: theorem
title: "General-state Markov-chain convergence under recurrence conditions"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measurable-space
  - def-phi-irreducible-chain
  - def-total-variation-distance-for-probability-laws
  - lem-finite-measure-sets-are-approximable-by-a-generating-algebra
  - lem-invariant-law-positive-set-and-almost-sure-hitting
  - lem-phi-irreducible-chain-has-small-set
  - lem-small-set-coupling-converges-from-almost-every-start
  - thm-discrete-strong-markov-property
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
axiom_use: "AC supplies the canonical path law used in the hitting-time upgrade."
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible ([[def-phi-irreducible-chain]]) and aperiodic ([[def-general-state-aperiodic-markov-chain]]) with invariant probability $\pi$. Then $\|P^n(x,\cdot)-\pi\|_{\rm TV}\to0$ for $\pi$-almost every $x$. If $P$ is Harris recurrent relative to $\phi$ ([[def-harris-recurrent-markov-chain]]), convergence holds for every starting state.

## Facts & Assumptions

**Given:** The kernel, irreducibility, aperiodicity, invariant probability and, for the all-start conclusion, Harris recurrence.

[F1] [[def-general-state-aperiodic-markov-chain]]: no positive-mass cyclic family has deterministic transitions to its successor.

[F2] [[def-harris-recurrent-markov-chain]]: every positive-$\phi$ set is hit almost surely from every state.

[F3] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is stationary.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is controlled by coupling disagreement and by averages of event differences.

[F5] [[lem-phi-irreducible-chain-has-small-set]]: a countably generated irreducible chain has a small set $C$ with $\phi(C)>0$ and $\nu(C)>0$.

[F6] [[lem-small-set-coupling-converges-from-almost-every-start]]: aperiodicity and such a small set imply $\pi$-almost-everywhere convergence.

[F7] [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]]: finite-measure events are approximable by a countable generating algebra, making the total-variation supremum countable.

[F8] [[thm-discrete-strong-markov-property]]: at the finite hitting time, the future law is the kernel iterate from the hit state.

[F9] [[cor-canonical-markov-chain-on-path-space]]: the transition kernel has its canonical path law under the declared choice convention.

[A1] [[def-axiom-of-choice]]: the path-law construction uses AC as specified in [F9].

## Proof

**Given:** The hypotheses and facts [F1]–[F9], with [A1].

1.1 Apply [F6] under the aperiodicity and invariance hypotheses [F1] and [F3]. This gives convergence on a set $G$ with $\pi(G)=1$. The set is measurable because [F7] expresses total variation as a supremum over the countable generating algebra. [F1, F3, F5, F6, F7]

1.2 Assume Harris recurrence and let $N$ be any $\pi$-null measurable set. If $\phi(N)>0$, [F2] says every start hits $N$ almost surely. Averaging over $\pi$ would give stationary probability one to ever hitting $N$, but stationarity gives $\Pr_\pi(X_n\in N)=\pi(N)=0$ for each $n$, and a countable union gives probability zero. Therefore every $\pi$-null set is $\phi$-null. In particular $\phi(G^c)=0$, so $\phi(G)>0$. [F2, F3, F7, step 1.1]

2.1 Harris recurrence [F2] implies every start hits $G$ at a finite time $T$ almost surely. For fixed $x$, split the time-$n$ law according to $T>n/2$ and $T\le n/2$. The first contribution is at most $\Pr_x(T>n/2)\to0$. [F2, step 1.2]

2.2 On $T\le n/2$, the strong Markov property [F8] gives conditional law $P^{n-T}(X_T,\cdot)$, with $X_T\in G$. For each fixed finite $T$, its distance from $\pi$ tends to zero. First restrict to $T\le K$ (a finite sum), let $n\to\infty$, then let $K\to\infty$; the discarded mass $\Pr_x(T>K)$ tends to zero. The mixture bound [F4] proves convergence from $x$. The path law is supplied by [F9] under [A1]. [F3, F4, F8, F9, A1, step 2.1] ∎
