---
id: lem-small-set-coupling-converges-from-almost-every-start
kind: lemma
title: "Small-set coupling yields almost-everywhere total-variation convergence"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-coupling-and-kernel-contraction
  - lem-aperiodic-minorization-times-are-cofinite
  - lem-finite-products-of-probability-kernels
  - lem-invariant-law-positive-set-and-almost-sure-hitting
  - thm-discrete-strong-markov-property
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
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
axiom_use: "AC supplies the canonical product paths and split-transition realization in steps 2.1–3.1."
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible and aperiodic with invariant probability $\pi$. If $C$ is $(m,\epsilon,\nu)$-small, $\phi(C)>0$, and $\nu(C)>0$, then $\|P^n(x,\cdot)-\pi\|_{\rm TV}\to0$ for $\pi$-almost every $x$.

## Facts & Assumptions

**Given:** The kernel, irreducibility measure, aperiodicity, invariant law and small set.

[F1] [[def-phi-irreducible-chain]]: every positive-$\phi$ set is accessible from every state.

[F2] [[def-general-state-aperiodic-markov-chain]]: no cyclic decomposition exists on the stationary irreducible part.

[F3] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is invariant.

[F4] [[def-small-set-minorization-and-drift]]: $P^m(x,\cdot)\ge\epsilon\nu$ on $C$.

[F5] [[lem-invariant-law-positive-set-and-almost-sure-hitting]]: for any stationary kernel, if every start has positive chance to hit a target, stationary almost every start hits it almost surely.

[F6] [[lem-aperiodic-minorization-times-are-cofinite]]: $\nu P^n\ge c_n\nu$ for all sufficiently large $n$ when $\nu\ll\pi$ and each state can reach the minorization.

[F7] [[lem-finite-products-of-probability-kernels]]: independent coordinates define product probability kernels.

[F8] [[lem-total-variation-coupling-and-kernel-contraction]]: a coupling bounds total variation by its disagreement probability.

[F9] [[cor-canonical-markov-chain-on-path-space]]: the kernel defines its canonical path law under its stated AC convention.

[F10] [[thm-discrete-strong-markov-property]]: the pair chain restarts at discrete stopping times.

[F11] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: finite measures agreeing on measurable rectangles agree on the product sigma-algebra.

[A1] [[def-axiom-of-choice]]: the path and split-kernel constructions use AC as specified by [F9].

## Proof

**Given:** The hypotheses and facts [F1]–[F11], with [A1].

1.1 By [F5], $\pi(C)>0$. Integrating the small-set inequality over $C$ and using invariance gives $\pi(A)=\pi P^m(A)\ge\epsilon\pi(C)\nu(A)$ for all $A$, hence $\nu\ll\pi$. [F3, F4, F5]

2.1 Fix $x$. Irreducibility gives $k_x$ with $P^{k_x}(x,C)>0$, so $P^{k_x+m}(x,\cdot)\ge\epsilon P^{k_x}(x,C)\nu$. By [F6], $\nu P^t(C)\ge c_t\nu(C)>0$ for every sufficiently large $t$. Thus $P^n(x,C)>0$ for every sufficiently large $n$, and in particular $P^{mq}(x,C)>0$ for every sufficiently large integer $q$. This holds for every $x$. [F1, F2, F4, F6, step 1.1]

3.1 Let $\bar Q=(P^m)\otimes(P^m)$. For measurable rectangles $A\times B$, $(\pi^2\bar Q)(A\times B)=(\pi P^m)(A)(\pi P^m)(B)=\pi(A)\pi(B)$. By [F11], this proves that $\pi^2$ is invariant for $\bar Q$. By step 2.1, every starting pair has positive probability of hitting $C^2$ under $\bar Q$. Apply the stationary positive-hitting lemma [F5] to $\bar Q$, invariant law $\pi^2$, and target $C^2$: the stationary pair hits $C^2$ almost surely from $\pi^2$-almost every pair. [F3, F5, F7, F11, step 2.1]

4.1 Start the pair with law $\pi^2$ and run independent $\bar Q$ transitions before each split attempt. By step 3.1 and [F5], the first hit of $C^2$ occurs almost surely. Its location law is absolutely continuous with respect to $\pi^2$: for any $\pi^2$-null set $N$, the event that the first hit lies in $N$ is contained in $\bigcup_{k\ge0}\{Z_k\in N\}$, which has probability zero by stationarity. More generally, if the pair at the start of a waiting period has any subprobability law $\lambda\ll\pi^2$, then $\lambda\bar Q^k\ll\pi^2$ for every $k$, because invariance gives $\bar Q^k(z,N)=0$ for $\pi^2$-almost every $z$; hence its next first-hit location is also absolutely continuous and the hit occurs almost surely by [F5]. At a visit $(x,y)\in C^2$ with $0<\epsilon<1$, use one common Bernoulli($\epsilon$) coin: success draws a shared $\nu$ value and couples immediately, while failure draws independently from $R_x=(P^m(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ and $R_y$. Each coordinate retains its $P^m$ marginal. For every $\pi^2$-null $N$, stationarity gives $\bar Q((x,y),N)=0$ for $\pi^2$-almost every $(x,y)$, while the product expansion gives $\bar Q((x,y),\cdot)\ge(1-\epsilon)^2R_x\otimes R_y$; thus the failed endpoint law is absolutely continuous whenever the attempt-state law is. It therefore reaches $C^2$ almost surely again, with an absolutely continuous first-hit law. If $\epsilon=1$, the first split succeeds and no failure branch occurs. [F3, F4, F5, F7, F9, F10, F11, A1, step 3.1]

5.1 Each visit succeeds with probability $\epsilon$, so $j$ successive failures have probability $(1-\epsilon)^j\to0$. The coupling succeeds almost surely for $\pi^2$-almost every initial pair. Fubini gives that for $\pi$-almost every $x$, a chain from $x$ couples almost surely to an independent stationary chain. The coupling inequality gives convergence along times $mn$. For $n=mk+s$, $0\le s<m$, contraction by $P^s$ and invariance of $\pi$ gives convergence for every $n$. [F3, F8, F9, step 4.1, algebra] ∎
