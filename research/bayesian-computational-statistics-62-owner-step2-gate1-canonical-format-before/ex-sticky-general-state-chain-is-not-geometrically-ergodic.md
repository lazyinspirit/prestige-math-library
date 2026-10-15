---
id: ex-sticky-general-state-chain-is-not-geometrically-ergodic
kind: example
title: "A sticky general-state chain can converge without a geometric rate"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - def-total-variation-distance-for-probability-laws
  - thm-general-state-markov-chain-convergence-under-recurrence-conditions
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
axiom_use: "AC supplies the canonical infinite refresh path construction in step 1.2."
---
## Statement

On $\mathsf X=(0,1]$, let $\lambda$ be Lebesgue probability and
$$P(x,A)=(1-\sqrt{x})1_A(x)+\sqrt{x}\lambda(A).$$
Then $P$ is Lebesgue-irreducible, aperiodic and Harris recurrent, with invariant law $\pi(dx)=dx/(2\sqrt{x})$. It converges from every state, but it is not geometrically ergodic with any common rate $r<1$ and finite statewise multiplier $M V(x)$.

## Facts & Assumptions

**Given:** The state space, refresh kernel and Lebesgue probability in the Statement.

[F1] [[def-phi-irreducible-chain]]: every positive-Lebesgue-measure set is accessible.

[F2] [[def-general-state-aperiodic-markov-chain]]: no positive-mass cyclic decomposition exists.

[F3] [[def-harris-recurrent-markov-chain]]: every positive-Lebesgue-measure set must be hit almost surely from every state.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P=\pi$.

[F5] [[def-total-variation-distance-for-probability-laws]]: event differences lower-bound total variation.

[F6] [[thm-general-state-markov-chain-convergence-under-recurrence-conditions]]: an irreducible aperiodic Harris chain with invariant probability converges from every state.

[F7] [[def-measure-kernel-and-probability-kernel]]: each section is a probability and measurable evaluation in the state gives a probability kernel.

[A1] [[def-axiom-of-choice]]: the infinite refresh path construction uses the canonical path convention.

## Verification

**Given:** The kernel and facts [F1]–[F7], with [A1].

1.1 For any $A$ with $\lambda(A)>0$, $P(x,A)\ge\sqrt{x}\lambda(A)>0$, so [F1] holds. For $x<1$, the kernel has a positive self-loop of mass $1-\sqrt{x}$; since $\pi(\{1\})=0$, a cyclic decomposition with positive $\pi$-mass classes would contain a $\pi$-positive set of states with positive self-loop probability, contradicting deterministic movement to a disjoint next class. Thus the chain is aperiodic. [F1, F2, F7, given]

1.2 A refresh occurs from any current state $x>0$ after a geometric number of steps with success probability $\sqrt{x}>0$, so the waiting time is finite almost surely. After each refresh the new state is an independent $\lambda$ draw in $(0,1]$, and the same argument gives infinitely many refreshes almost surely. For $\lambda(A)>0$, the probability that the first $N$ refresh draws all miss $A$ is $(1-\lambda(A))^N\to0$. Hence every positive-$\lambda$ set is hit almost surely from every start, proving [F3]. [F3, A1, given, algebra]

2.1 The one-step law under $\pi$ has a holding part with density $(1-\sqrt{x})/(2\sqrt{x})$ and a refresh part of total mass $\int\sqrt{x}\pi(dx)=1/2$, distributed as $\lambda$. For every measurable $A$, $\int P(x,A)\pi(dx)=\int_A\frac{1-\sqrt{x}}{2\sqrt{x}}dx+\frac12\lambda(A) =\int_A\frac{dx}{2\sqrt{x}}=\pi(A).$ Thus $\pi$ is invariant. By [F6], convergence holds from every state. [F4, F6, step 1.2]

2.2 Fix $x\in(0,1)$. Since a refresh draw has no atom at $x$, $P^n(x,\{x\})=(1-\sqrt{x})^n$, whereas $\pi(\{x\})=0$. Therefore $\|P^n(x,\cdot)-\pi\|_{\rm TV}\ge(1-\sqrt{x})^n.$ If a common geometric rate $r<1$ and finite $M V(x)$ existed, choose $x$ with $1-\sqrt{x}>r$. Then $(1-\sqrt{x})^n\le M V(x)r^n$ for every $n$ would fail as $n\to\infty$. Thus the chain converges but is not geometrically ergodic. [F5, step 2.1, algebra] ∎
