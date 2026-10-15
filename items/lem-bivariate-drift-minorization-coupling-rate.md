---
id: lem-bivariate-drift-minorization-coupling-rate
kind: lemma
title: "A bivariate drift and minorization bound geometric coupling error"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-small-set-minorization-and-drift
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-coupling-and-kernel-contraction
  - lem-finite-products-of-probability-kernels
  - thm-discrete-strong-markov-property
  - thm-measurability-of-integration-against-a-kernel
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
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains"
      url: "https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf"
axiom_use: "AC realizes the coupled path and split transitions in step 1.1."
---
## Statement

Let $Q$ be a probability kernel, $D$ be $(1,\epsilon,\nu)$-small for $Q$, and let $0<a<1$. If $0<\epsilon<1$, define residual probabilities $R_x=(Q(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ on $D$ and assume
$$B\ge\max\{1,(1-\epsilon)\sup_{(x,y)\in D^2}R_x\otimes R_y(h)/a\}<\infty.$$
If $\epsilon=1$, set $B=1$ and impose no residual condition. Suppose $h:\mathsf X^2\to[1,\infty)$ is finite-valued and measurable and $Q\otimes Q\,h\le ah$ off $D^2$. Then there are $M<\infty$ and $0<r<1$ such that a coupling of two $Q$-chains has a measurable split-success time $T$, with $X_n=Y_n$ on $\{T\le n\}$, and satisfies
$$\Pr_{x,y}(T>n)\le M h(x,y)r^n.$$
Consequently $\|Q^n(x,\cdot)-Q^n(y,\cdot)\|_{\rm TV}\le M h(x,y)r^n$. For $\epsilon=1$, the transition following the first visit to $D^2$ couples the chains.
## Facts & Assumptions

**Given:** The kernel, one-step minorization, bivariate drift, finite residual bound, and $h\ge1$ in the Statement.

[F1] [[def-small-set-minorization-and-drift]]: on $D$, $Q(x,\cdot)\ge\epsilon\nu$.

[F2] [[def-measure-kernel-and-probability-kernel]]: the independent product and residual transition rules define probability transitions.

[F3] [[lem-total-variation-coupling-and-kernel-contraction]]: for any coupling, total variation is bounded by the probability that the coupled variables differ.

[F4] [[thm-measurability-of-integration-against-a-kernel]]: the residual expectations and stopped-chain expectations are measurable.

[F5] [[lem-finite-products-of-probability-kernels]]: independent coordinate transitions form the product probability kernel.

[F6] [[cor-canonical-markov-chain-on-path-space]]: the coupled kernel transitions have a canonical path realization under the stated AC convention.

[F7] [[thm-discrete-strong-markov-property]]: the attempt times obey the discrete strong Markov property.

[A1] [[def-axiom-of-choice]]: the canonical path and split-transition construction uses AC as stated by [F6].

## Proof

**Given:** The hypotheses and facts [F1]–[F7], with [A1].

1.1 Run the two coordinates independently until both lie in $D$. At each such visit, use the minorization to toss a common Bernoulli($\epsilon$) split: on success draw one shared $\nu$ state; on failure draw independently from $R_x,R_y$. Let $T=\inf\{k+1:\text{the split at time }k\text{ succeeds}\}$, with $\inf\varnothing=\infty$. Record success with a measurable binary flag and evolve synchronously thereafter, without testing equality before success. The shared transition is the pushforward of $Q(X_k,\cdot)$ under $z\mapsto(z,z)$; this map is measurable on every measurable space. This construction has the required $Q$-marginals by [F1], [F2], and [F5]. [F1, F2, F4, F5, F6, F7, A1, given]

2.1 Let $N_k$ count failed split transitions completed by time $k$, with $N_0=0$, and set $Z_k=a^{-k}B^{-N_k}h(X_k,Y_k)1_{\{T>k\}}$. If $\epsilon=1$, a visit to $D^2$ couples on the next transition, so the uncoupled contribution there is zero. If $0<\epsilon<1$, off $D^2$ the conditional expectation of the next $h$ is at most $ah$; on $D^2$ the uncoupled transition has probability $1-\epsilon$ and expected $h$ equal to $R_x\otimes R_y(h)$. The definition of $B$ bounds its contribution after the extra factor $B^{-1}$ by $ah(x,y)$, since $h\ge1$. Thus $(Z_k)$ is a nonnegative supermartingale in both cases. [F1, F2, F4, F7, A1, step 1.1]

3.1 For any integer $j\ge1$, the probability of at least $j$ failed attempts is at most $(1-\epsilon)^j$. On the event $T>k$ with at most $j-1$ failures, $h\ge1$ and $B^{N_k}\le B^{j-1}$, so the supermartingale bound gives $\Pr(T>k)\le(1-\epsilon)^j+a^kB^{j-1}h(x,y).$ [step 2.1, algebra]

4.1 Choose $\theta>0$ so $aB^\theta<1$ and set $j=\max(1,\lfloor\theta k\rfloor)$. Both terms in step 3.1 are bounded by a constant times $r^k$ for some $r<1$. Apply the coupling inequality [F3] to obtain the asserted geometric bound after increasing $M$ to cover the finite initial values of $k$. [F3, step 3.1, algebra] ∎
