---
id: lem-aperiodic-petite-set-with-accessible-small-set-is-small
kind: lemma
title: "A petite drift enlargement is small under aperiodicity"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-petite-set-for-markov-kernel
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - lem-aperiodic-minorization-times-are-cofinite
  - lem-invariant-law-positive-set-and-almost-sure-hitting
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
axiom_use: "AC supplies the canonical path and first-hitting-time construction in step 2.1."
---
## Statement

Let $P$ be countably generated, $\phi$-irreducible and aperiodic with invariant probability $\pi$. Suppose $D$ is petite with probability $\nu$ and multiplier $\alpha>0$, and $C\subseteq D$ is $(m,\epsilon,\nu)$-small for this same $\nu$, with $\nu(C)>0$ and $\nu\ll\pi$. Then $D$ is small at some common time.

## Facts & Assumptions

**Given:** The kernel, irreducibility, aperiodicity, invariant probability, petite inequality on $D$, and same-measure small-set minorization on $C$.

[F1] [[def-petite-set-for-markov-kernel]]: $\sum_{n\ge1}a_nP^n(x,\cdot)\ge\alpha\nu(\cdot)$ on $D$.

[F2] [[def-small-set-minorization-and-drift]]: $P^m(y,\cdot)\ge\epsilon\nu$ on $C$.

[F3] [[lem-aperiodic-minorization-times-are-cofinite]]: once every state can reach a minorization into $\nu\ll\pi$, $\nu P^n\ge c_n\nu$ for every sufficiently large $n$.

[F4] [[def-phi-irreducible-chain]]: every positive-$\phi$ set is accessible from every state.

[F5] [[thm-discrete-strong-markov-property]]: the chain restarts from its state at the first entrance time.

[F6] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P^n=\pi$ for every $n\ge0$.

[A1] [[def-axiom-of-choice]]: the canonical path/stopping-time construction uses AC as specified by [F5].

## Proof

**Given:** The hypotheses and facts [F1]–[F5], with [A1].

1.1 The petite inequality on $C$ gives $\sum_na_nP^n(x,C)\ge\alpha\nu(C)>0$ for every $x\in D$. Choose $M$ so $\sum_{n>M}a_n<\alpha\nu(C)/2$. Since $P^n(x,C)\le\Pr_x(\tau_C\le n)\le\Pr_x(\tau_C\le M)$ for $n\le M$, the truncated weighted sum gives $\Pr_x(\tau_C\le M)\ge q:=\alpha\nu(C)/2$ uniformly on $D$. [F1, given]

1.2 Since $\nu(C)>0$ and $\nu\ll\pi$, $\pi(C)>0$. To see that every state has positive probability of reaching $C$, let $H=\{x\in C^c:P^n(x,C)=0\text{ for every }n\ge1\}$. Kernel iteration makes $H$ measurable. If $x\in H$ and $P(x,H^c)>0$, the countable union $H^c=C\cup\bigcup_{n\ge1}\{y:P^n(y,C)>0\}$ has a member of positive $P(x,\cdot)$-mass; integrating the corresponding positive function gives $P^{n+1}(x,C)>0$, a contradiction. Thus $P(x,H)=1$ for every $x\in H$. Irreducibility then forces $\phi(H^c)=0$, since no point of $H$ can reach $H^c$; hence $\phi(H)>0$. For every $n\ge1$, invariance and $P^n(x,H)=1$ on $H$ give $\int_{H^c}P^n(x,H)\,\pi(dx)=0$. Irreducibility says every $x\in H^c$ has $P^n(x,H)>0$ for some $n$, so the countable union of these $\pi$-null level sets is $H^c$ and $\pi(H^c)=0$, contradicting $\pi(C)>0$. Therefore $H=\varnothing$. For every state choose $n(x)\ge1$ with $P^{n(x)}(x,C)>0$; then $P^{n(x)+m}(x,\cdot)\ge\epsilon P^{n(x)}(x,C)\nu(\cdot)$. By [F3], $\nu P^t\ge c_t\nu$ for every $t\ge N_0$. Choose $L>M+m+N_0$. For every $0\le s\le M$ and $y\in C$, $P^{L-s}(y,\cdot)\ge\epsilon\nu P^{L-s-m}(\cdot)\ge\epsilon c_{L-s-m}\nu(\cdot).$ The minimum $c>0$ over these finitely many $s$ is positive. [F2, F3, F4, F6, step 1.2]

2.1 Decompose at the first hitting time $\tau_C=s\le M$. The strong Markov property and step 1.2 give $P^L(x,\cdot)\ge c\nu(\cdot)\Pr_x(\tau_C\le M)\ge cq\nu(\cdot)$ for every $x\in D$. This is one fixed-time minorization, so $D$ is small. [F5, A1, step 1.1, step 1.2] ∎
