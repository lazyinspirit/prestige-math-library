---
id: ex-null-set-start-fails-total-variation-convergence
kind: example
title: "A phi-irreducible chain can fail to converge from a pi-null start"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-general-state-aperiodic-markov-chain
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - def-total-variation-distance-for-probability-laws
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
axiom_use: "No choice principle is used in this finite or explicitly constructed example."
---
## Statement

On $\mathsf X=\{1,2,\ldots\}$ define $P(1,\{1\})=1$ and, for $x\ge2$,
$$P(x,\{1\})=x^{-2},\qquad P(x,\{x+1\})=1-x^{-2}.$$
Then $P$ is $\phi$-irreducible and aperiodic for $\phi=\delta_1$, has invariant law $\pi=\delta_1$, and is not Harris recurrent. From every $x\ge2$, $P^n(x,\cdot)$ fails to converge to $\pi$ in total variation.

## Facts & Assumptions

**Given:** The state space and transition rule in the Statement.

[F1] [[def-phi-irreducible-chain]]: every set of positive $\phi$-measure is reachable from every state with positive probability at some finite time.

[F2] [[def-general-state-aperiodic-markov-chain]]: a cyclic decomposition needs at least two positive-$\pi$ classes.

[F3] [[def-harris-recurrent-markov-chain]]: Harris recurrence requires almost-sure hitting of every positive-$\phi$ set from every start.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: an invariant probability is unchanged by one transition.

[F5] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum over measurable events.

[F6] [[def-measure-kernel-and-probability-kernel]]: a transition kernel has probability sections and measurable evaluations.

## Verification

**Given:** The transition rule and facts [F1]–[F5].

1.1 The only nonempty $\phi$-positive set contains state $1$. From $1$ it is already reached, and from $x\ge2$ the one-step probability of reaching it is $x^{-2}>0$. Thus the chain is $\phi$-irreducible. The point mass $\delta_1$ is invariant because state $1$ is absorbing. Since $\pi$ has only one positive-mass state, no partition into $d\ge2$ classes all of positive $\pi$-mass exists; the chain is aperiodic under [F2]. [F1, F2, F4, F6, given]

1.2 Starting from $x\ge2$, the probability of avoiding absorption through time $n$ is $s_n(x)=\prod_{j=x}^{x+n-1}\left(1-\frac1{j^2}\right) =\frac{x-1}{x}\frac{x+n}{x+n-1}.$ The identity follows by writing $1-j^{-2}=((j-1)/j)((j+1)/j)$ and canceling adjacent factors. Thus $s_n(x)\to(x-1)/x>0$, so the probability of ever hitting the $\phi$-positive set $\{1\}$ is less than one. The chain is not Harris recurrent by [F3]. [F3, algebra]

2.1 At time $n$, the mass outside $\{1\}$ is exactly $s_n(x)$. By [F5], $\|P^n(x,\cdot)-\delta_1\|_{\rm TV}=|P^n(x,\{1\})-1|=s_n(x),$ which has positive limit. Therefore the stationary-a.e. convergence conclusion cannot be strengthened to all starts without Harris recurrence. [F4, F5, step 1.2] ∎
