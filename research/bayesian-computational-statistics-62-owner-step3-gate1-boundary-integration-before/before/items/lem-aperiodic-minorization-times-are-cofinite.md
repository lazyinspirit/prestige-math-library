---
id: lem-aperiodic-minorization-times-are-cofinite
kind: lemma
title: "Aperiodicity makes minorization times eventually consecutive"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-general-state-aperiodic-markov-chain
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - lem-finite-measure-sets-are-approximable-by-a-generating-algebra
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
axiom_use: "The proof is choice-free except for the exact AC uses identified in Facts & Assumptions."
---
## Statement

Let $P$ be $\phi$-irreducible ([[def-phi-irreducible-chain]]) and aperiodic ([[def-general-state-aperiodic-markov-chain]]) with invariant probability $\pi$. Let $\nu\ll\pi$ be a probability. Suppose every state has some $n(x)\ge1$ and $\delta(x)>0$ with $P^{n(x)}(x,\cdot)\ge\delta(x)\nu(\cdot)$. Then there is $N$ such that for every $n\ge N$, $\nu P^n\ge\epsilon_n\nu$ for some $\epsilon_n>0$.

## Facts & Assumptions

**Given:** Countable generation, the irreducibility and aperiodicity definitions, invariant law, $\nu\ll\pi$, and the statewise minorization.

[F1] [[def-general-state-aperiodic-markov-chain]]: no cyclic partition into positive-$\pi$ classes has deterministic transitions to the next class.

[F2] [[def-measure-kernel-and-probability-kernel]]: kernel iterates act on measures and preserve nonnegative measure inequalities.

[F3] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P^n=\pi$.

[F4] [[def-measurable-space]]: the sigma-algebra has a countable generating algebra.

[F5] [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]]: finite-measure sets are approximable in symmetric difference by the generating algebra.

[F6] [[thm-monotone-convergence-for-the-integral]]: countable nonnegative sums may be integrated termwise.

## Proof

**Given:** The hypotheses and facts [F1]–[F6].

1.1 For $n,k\ge1$, let $E_{n,k}=\{x:P^n(x,\cdot)\ge k^{-1}\nu(\cdot)\}$. Let $\mathcal A_0$ be the countable generating algebra. The inequality defining $E_{n,k}$ is equivalent to its restrictions to $B\in\mathcal A_0$: if those hold, approximate any measurable $A$ under the finite measure $P^n(x,\cdot)+k^{-1}\nu$ by an algebra set; the difference of the two sides changes by at most that symmetric-difference mass, which tends to zero. Thus $E_{n,k}=\bigcap_{B\in\mathcal A_0}\{x:P^n(x,B)\ge k^{-1}\nu(B)\}$ is measurable by [F2] and [F4]. The statewise hypothesis makes their union the whole space. Since $\nu$ is a probability, one such set has positive $\nu$-mass. Integrating its inequality gives $\nu P^n\ge k^{-1}\nu(E_{n,k})\nu$. Thus the set $T=\{n\ge1:\nu P^n\ge c_n\nu\text{ for some }c_n>0\}$ is nonempty. [F2, F4, F5, F6, given]

2.1 If $r,s\in T$, then $(\nu P^r)P^s\ge c_r\nu P^s\ge c_rc_s\nu$, so $T$ is additive. Let $d=\gcd(T)$. [F2, step 1.1]

3.1 Suppose $d>1$. For $1\le i\le d$, define $X_i=\{x:\exists\ell\ge1,\ \ell d-i\ge1,\ \delta>0,\ P^{\ell d-i}(x,\cdot)\ge\delta\nu(\cdot)\}.$ Every positive witness time $n$ has exactly one representation $n=\ell d-i$ with $1\le i\le d$ and $\ell d-i\ge1$, so the statewise minorization covers the space by these sets; rational thresholds and the countable testing algebra make them measurable. Put $O=\bigcup_{i\ne j}(X_i\cap X_j)$. For every $m\ge0$, $\nu P^m(O)=0$: otherwise a countable subdivision gives a positive $\nu P^m$-mass subset of an overlap on which both phase exponents and both positive constants are fixed. Integrating the two minorization inequalities gives two times in $T$ with different residues modulo $d$, contradicting that $d$ divides every member of $T$. [F1, F2, F4, F5, F6, step 2.1]

4.1 Let $S=O\cup\{x:\exists m\ge0,\ P^m(x,O)>0\}$ and $X_i'=X_i\setminus S$. Since $\nu P^m(O)=0$ for every $m$, $\nu(S)=0$. The $X_i'$ are disjoint and cover $S^c$. For $x\in X_i'$, $P(x,S)=0$, so $P(x,\bigcup_jX_j')=1$. If $P(x,X_j')>0$ for $j\ne i+1\pmod d$, countably partition $X_j'$ by its witnessing exponent and rational minorization constant; one part has positive $P(x,\cdot)$-mass. Integrating the common later minorization after that one-step transition puts $x$ in $X_{j-1}$, contradicting disjointness of the $X_i'$. Thus $P(x,X_{i+1})=1$ for $x\in X_i'$. Since $\nu(S)=0$, the disjoint classes satisfy $\nu(\bigcup_iX_i')=1$. Absolute continuity gives $\pi(\bigcup_iX_i')>0$, so some $X_i'$ has positive $\pi$-mass. Invariance propagates positive mass from each class to its successor, so all $X_i'$ have positive $\pi$-mass. This is a cyclic decomposition, contrary to [F1]. Hence $d=1$. [F1, F2, F3, F4, F5, step 3.1]

5.1 Choose finitely many $t_1,\ldots,t_q\in T$ with gcd one. Their nonnegative combinations modulo $t_1$ form the subgroup generated by their residues; gcd one makes this all residues. Choose one represented $u_j\in T$ for each residue $j$. Every sufficiently large integer in residue $j$ is $u_j+\ell t_1$ and belongs to $T$ by additivity. The defining positive constant for each such $n$ is $\epsilon_n$. [step 4.1, algebra] ∎
