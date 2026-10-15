---
id: lem-invariant-law-positive-set-and-almost-sure-hitting
kind: lemma
title: Invariant mass and almost-sure hitting of accessible sets
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-phi-irreducible-chain
  - thm-measurability-of-integration-against-a-kernel
  - thm-discrete-strong-markov-property
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms
      url: https://www.probability.ca/jeff/ftpdir/probsurv.pdf
    - title: Randal Douc, Eric Moulines, Pierre Priouret, and Philippe Soulier, Markov Chains
      url: https://wiki.randaldouc.xyz/lib/exe/fetch.php?media=world:mainmc-tome1.pdf
axiom_use: AC is inherited from the canonical path-law and strong Markov suppliers in steps 1.2, 2.1, 3.1; countable time and threshold arguments select no measurable representatives.
---
## Statement

Let $P$ have invariant probability $\pi$. If a measurable set $A$ has positive probability of being hit from every starting state, then $\Pr_x(\tau_A<\infty)=1$ for $\pi$-almost every $x$. In addition, if $P$ is $\phi$-irreducible and $\phi(A)>0$, then $\pi(A)>0$ and the positive-hitting hypothesis holds.

## Facts & Assumptions

**Given:** A probability kernel with invariant probability; for the first conclusion, the positive-hitting premise; for the additional conclusion, a $\phi$-irreducibility measure and $\phi(A)>0$.

[F1] [[def-phi-irreducible-chain]]: every $\phi$-positive set is reached with positive probability from every state at some finite positive time.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P^n=\pi$ for every $n\ge0$.

[F3] [[cor-canonical-markov-chain-on-path-space]]: under its stated AC convention, iterated kernels define the canonical path law.

[F4] [[thm-discrete-strong-markov-property]]: the canonical chain has the strong Markov property at discrete stopping times.

[F5] [[thm-monotone-convergence-for-the-integral]]: increasing countable sums and limits pass through integration.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative sums and kernel integrals may be interchanged.

[F7] [[thm-measurability-of-integration-against-a-kernel]]: integrating a bounded measurable function against a probability kernel gives a measurable function of the starting state.

[A1] Assume [[def-axiom-of-choice]] as required by the canonical path-law [F3] and strong Markov [F4] suppliers. The countable level-set arguments below need no measurable selection theorem.

## Proof

**Given:** The invariant law and applicable hypotheses, with [F1]–[F7] and [A1].

1.1 For the additional conclusion, let $f(x)=\sum_{n\ge1}P^n(x,A)$. By [F1], $f(x)>0$ everywhere. Tonelli and stationarity give $\int f\,d\pi=\sum_{n\ge1}\pi(A)$. If $\pi(A)=0$, this integral is zero, contradicting positivity of $f$ under a probability measure. Hence $\pi(A)>0$; [F1] also supplies the positive-hitting premise for the first assertion. [F1, F2, F5, F6, given]

1.2 It remains to prove the first assertion under its positive-hitting premise. Set $q_0=1_A$ and recursively $q_{n+1}=1_A+1_{A^c}Pq_n$, where $Pq_n(x)=\int q_n(y)P(x,dy)$. Then $q_n(x)=\Pr_x(\tau_A\le n)$; induction and [F7] show each $q_n$ is measurable, and $q_n\uparrow q:=\Pr_x(\tau_A<\infty)$, so $q$ is measurable. If the bad set $\{q<1\}$ has positive mass, a countable level-set union gives some $\delta_1>0$ for which $B_1=\{x:q(x)\le1-\delta_1\}$ has positive $\pi$-measure. For each $x\in B_1$, $q(x)>0$ and $x\notin A$, so some $\ell_0\ge1$ has $P^{\ell_0}(x,A)>0$. Countable unions over times and rational thresholds then give a common $\ell_0\ge1$, $\delta_2>0$, and $B_2\subseteq B_1$ with $\pi(B_2)>0$ and $P^{\ell_0}(x,A)\ge\delta_2$ on $B_2$. [F2, F3, F5, F7, A1, given]

2.1 Let $\eta=\#\{k\ge1:X_{k\ell_0}\in B_2\}$. At each such visit, the conditional probability of avoiding $A$ at the next $\ell_0$-step time is at most $1-\delta_2$. Induction using [F4] gives $\Pr_x(\tau_A=\infty,\eta\ge r)\le(1-\delta_2)^r$ for each finite $r$, and hence $\Pr_x(\tau_A=\infty,\eta=\infty)=0$. Thus for $x\in B_2$, $\Pr_x(\tau_A=\infty,\eta<\infty)\ge\delta_1$. To select a measurable positive-mass set with a common finite last-visit bound, for each $\ell\ge1$ forbid $A$ at every time and also forbid $B_2$ at times $k\ell_0$ with $k\ge\ell$. For a finite horizon $N$, let $F_n^{(\ell)}=A\cup B_2$ if $n=k\ell_0$ for some $k\ge\ell$, and $F_n^{(\ell)}=A$ otherwise. Set $g_{N,N}=1_{(F_N^{(\ell)})^c}$ and recursively set $g_{N,n}=1_{(F_n^{(\ell)})^c}Pg_{N,n+1}$ for $n=N-1,\ldots,0$. Then $g_{\ell,N}=g_{N,0}$ is the finite-horizon event probability and is measurable by [F7]. As $N\to\infty$, these events decrease to $\{\tau_A=\infty,\sup\{k\ge1:X_{k\ell_0}\in B_2\}<\ell\}$, so continuity from above makes their limit $g_\ell(x)$ measurable. The events increase with $\ell$ and their union is $\{\tau_A=\infty,\eta<\infty\}$, so $g_\ell(x)\uparrow$ a value at least $\delta_1$ on $B_2$. A countable rational threshold selection therefore gives $\ell\ge1$, $\delta>0$, and $B\subseteq B_2$ with $\pi(B)>0$ and $\Pr_x\!\left(\tau_A=\infty,\ \sup\{k\ge1:X_{k\ell_0}\in B_2\}<\ell\right)\ge\delta\quad(x\in B).$ [F2, F4, F5, F7, step 1.2]

3.1 Put $L=\ell\ell_0$ and $S=\sup\{k\ge1:X_{kL}\in B\}$, with $S=-\infty$ if no such visit occurs. For $1\le r\le j$, consider the event that $X_{rL}\in B$, there is no later $B$-visit at a positive multiple of $L$, and no hit of $A$ at or after $rL$. It is a subset of $\{S=r,\ X_{jL}\notin A\}$. Stationarity and the Markov property at time $rL$ therefore give $\Pr_\pi(S=r,\ X_{jL}\notin A)\ge\int_B\pi(dy)\Pr_y(\tau_A=\infty,\ S=-\infty)\ge\pi(B)\delta.$ Indeed the event in step 2.1 rules out every $B_2$-visit at skeleton indices $k\ge\ell$, hence every later $B$-visit at a positive multiple of $L=\ell\ell_0$, as well as every future hit of $A$. The events $S=r$ are disjoint, so stationarity yields $\pi(A^c)\ge j\pi(B)\delta$. Taking $j>1/(\pi(B)\delta)$ contradicts $\pi(A^c)\le1$. Therefore the bad set is $\pi$-null. [F2, F3, F4, step 2.1, algebra] ∎
