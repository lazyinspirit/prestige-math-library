---
dependency_level: 3
id: lem-harris-geometric-ergodicity-has-integrable-rate-envelope
kind: lemma
title: Harris geometric ergodicity admits an integrable total-variation envelope
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-canonical-markov-chain-on-path-space
  - def-axiom-of-choice
  - def-general-state-aperiodic-markov-chain
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-harris-recurrent-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - lem-countably-generated-kernel-stable-sub-sigma-field
  - lem-geometric-split-renewal-gives-integrable-hitting-time
  - lem-phi-irreducible-chain-has-small-set
  - thm-discrete-strong-markov-property
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, §2, Remark 1
      url: https://arxiv.org/pdf/math/0409112
    - title: Sean P. Meyn and Richard L. Tweedie, Markov Chains and Stochastic Stability, second edition, Theorems 14.3.7, 15.3.3, and 15.4.1
      url: https://probability.ca/MT/BOOK.pdf
axiom_use: AC is assumed through the countably generated small-set theorem, canonical path-space construction, and split-chain/Markov suppliers.
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $P$ be a probability kernel on a measurable space
$(\mathsf X,\mathcal X)$ with invariant probability $\pi$. Assume it is
$\phi$-irreducible
([[def-phi-irreducible-chain]]), aperiodic
([[def-general-state-aperiodic-markov-chain]]), and Harris recurrent relative
to its nonzero $\sigma$-finite irreducibility measure $\phi$
([[def-harris-recurrent-markov-chain]]). Suppose $P$ is geometrically
ergodic in the sense of
[[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]. Then there exist a
measurable $M:\mathsf X\to[0,\infty)$ with $\pi(M)<\infty$ and $r\in(0,1)$ such
that
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad(x\in\mathsf X,\ n\ge1).$$

## Facts & Assumptions

**Given:** AC and all hypotheses in the Statement. Denote an everywhere finite measurable envelope in the geometric-ergodicity hypothesis by $M_0$, with rate $r_0\in(0,1)$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the small-set supplier and the canonical path-space and Markov suppliers below.

[F1] [[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]: $\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M_0(x)r_0^n$ for every $x$ and $n\ge1$, with $M_0$ finite and measurable.

[F2] [[lem-countably-generated-kernel-stable-sub-sigma-field]]: a real measurable observable belongs to a countably generated sub-sigma-field on which the kernel restricts, with the same iterated transitions on restricted events and the restricted invariant law.

[F3] [[lem-phi-irreducible-chain-has-small-set]]: a countably generated irreducible chain has a positive-irreducibility-measure small set $D$, with a minorizing probability $\nu_0$ satisfying $\nu_0(D)>0$.

[F4] [[lem-geometric-split-renewal-gives-integrable-hitting-time]]: a one-step small set of positive invariant mass, whose minorizing-law return probabilities converge geometrically, has a stationary-integrable exponential entrance-time moment.

[F5] [[cor-canonical-markov-chain-on-path-space]]: under AC, the original kernel has canonical chains from every initial law.

[F6] [[thm-discrete-strong-markov-property]]: bounded future-path functionals obey the Markov identity at stopping times.

[F7] [[def-phi-irreducible-chain]]: irreducibility relative to a nonzero measure means that each positive-measure measurable set is accessible from every state at some positive time.

## Proof

**Given:** The hypotheses in the Statement and the envelope $M_0,r_0$ in [F1], with AC [A1].

1.1 Apply [F2] to $M_0$ to obtain a countably generated $\mathcal G\subseteq\mathcal X$, the restricted kernel $P_{\mathcal G}$, and invariant probability $\pi_{\mathcal G}=\pi|_{\mathcal G}$. If $B\in\mathcal G$ has $\pi_{\mathcal G}(B)>0$, [F1] implies $P^n(x,B)>0$ for all sufficiently large $n$, for each $x$, because $M_0(x)$ is finite. Thus $P_{\mathcal G}$ is $\pi_{\mathcal G}$-irreducible by [F7]. Applying [F3] on this countably generated space gives an $m\ge1$, a $D\in\mathcal G$ with $\pi(D)>0$, a probability $\nu_0$ on $\mathcal G$ with $\nu_0(D)>0$, and $\epsilon_0>0$ such that $P_{\mathcal G}^m(x,\cdot)\ge\epsilon_0\nu_0$ on $D$. No small-set assertion on the original sigma-field is being made. [A1, F1, F2, F3, F7, given]

1.2 Since $M_0$ is finite everywhere, $D\cap\{M_0\le K\}$ increases to $D$ as the positive integer $K$ increases. Choose $K$ so $C=D\cap\{M_0\le K\}$ has both $\pi(C)>0$ and $\nu_0(C)>0$. Choose a finite integer $L\ge K$ and put $a=\nu_0(M_0\le L)>0$, $\nu(B)=\nu_0(B\cap\{M_0\le L\})/a$. Choose $0<\epsilon<\min(1,\epsilon_0a)$. For $Q=P_{\mathcal G}^m$ this gives $Q(x,\cdot)\ge\epsilon\nu$ on $C$, $\nu(M_0)\le L$, and $M_0\le K$ on $C$. [F1, step 1.1, choose, construct]

2.1 For $n\ge1$, the restricted-iteration identity in [F2] and [F1] give
$$|\nu Q^n(C)-\pi(C)|\le\int M_0(x)r_0^{mn}\nu(dx)\le L(r_0^m)^n.$$
For $n=0$ the absolute difference is at most $1$. Therefore [F4] applies with constant $\max(1,L)$ and rate $r_0^m$. It supplies $s>1$ and a measurable $H(x)=\mathbb E_x[s^\sigma]$, where $\sigma=\inf\{j\ge0:X_{jm}\in C\}$, such that $\pi(H)<\infty$. Indeed the skeleton path restricted to $\mathcal G$ under the full canonical $P$-chain has the $Q$-chain law: its finite-dimensional cylinder probabilities agree by the iterated-kernel identity in [F2]. Thus the same $H$ is the entrance-time moment for the original chain of [F5]. [A1, F1, F2, F4, F5, step 1.2]

2.2 Choose $\max(r_0,s^{-1/m})<r_1<1$, and set $S=m\sigma$ and $K_1=\max(1,K)$. Fix $A\in\mathcal X$ and $n\ge1$. On $\{S\le n\}$, decompose into the finitely many events $\{S=j\}$ and use [F6] to replace the conditional terminal indicator by $P^{n-j}(X_j,A)$. Since $X_j\in C$, [F1] bounds its difference from $\pi(A)$ by $K_1r_0^{n-j}$; when $j=n$, use $|1_A(X_n)-\pi(A)|\le1\le K_1$. On $\{S>n\}$ use the bound $1$. Subtracting $\pi(A)$ on these two events gives
$$|P^n(x,A)-\pi(A)|\le\mathbb P_x(S>n)+K_1\mathbb E_x[r_0^{n-S};S\le n]\le(1+K_1)r_1^nH(x).$$
For the final inequality, $r_1^{-S}\le s^\sigma$, and on $S\le n$ one has $r_0^{n-S}\le r_1^nr_1^{-S}$; on $S>n$, $1\le r_1^nr_1^{-S}$. This argument is for each original measurable event $A$, so taking its supremum controls the full original total variation and does not require measurability of a total-variation supremum. [A1, F1, F5, F6, step 1.2, step 2.1, choose, algebra]

3.1 The measurable set $N=\{H=\infty\}$ is $\pi$-null by step 2.1. Define $M_1(x)=(1+K_1)H(x)$ for $x\notin N$ and $M_1(x)=M_0(x)$ for $x\in N$. It is measurable and finite everywhere, and $\pi(M_1)<\infty$. Off $N$, step 2.2 gives the desired bound with rate $r_1$; on $N$, [F1] gives it because $r_0<r_1$. Taking $M=M_1$ and $r=r_1$ proves the full Statement. AC was used precisely through [F3] and the path-space and Markov suppliers [F4], [F5] and [F6]. [A1, F1, step 2.1, step 2.2, construct] ∎
