---
id: lem-phi-irreducible-chain-has-small-set
kind: lemma
title: "A countably generated phi-irreducible chain has a positive-measure small set"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-measurable-space
  - def-phi-irreducible-chain
  - def-small-set-minorization-and-drift
  - lem-countably-generated-kernel-lebesgue-decomposition
  - lem-iterated-kernel-density-convolution-bounds
  - lem-positive-triple-set-yields-uniform-overlap
  - thm-doob-submartingale-convergence
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
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
axiom_use: "AC selects the density versions and representatives inherited from the kernel-density supplier."
---
## Statement

Let $(\mathsf X,\mathcal X)$ be countably generated, let $P$ be a probability kernel that is $\phi$-irreducible ([[def-phi-irreducible-chain]]), and let $\phi$ be a nonzero $\sigma$-finite irreducibility measure. Then there are an integer $m\ge1$, a measurable $C$ with $\phi(C)>0$, a probability $\nu$ with $\nu(C)>0$, and $\epsilon>0$ such that $P^m(x,\cdot)\ge\epsilon\nu(\cdot)$ for every $x\in C$.

## Facts & Assumptions

**Given:** Countable generation, the probability kernel, and $\phi$-irreducibility.

[F1] [[def-phi-irreducible-chain]]: every positive-$\phi$ set is reached with positive probability at some finite positive time from every state.

[F2] [[def-small-set-minorization-and-drift]]: a small set is a common fixed-time minorization by a probability measure.

[F3] [[lem-iterated-kernel-density-convolution-bounds]]: iterated kernel densities satisfy convolution lower bounds and their sum is positive $\phi$-almost everywhere from every state.

[F4] [[lem-positive-triple-set-yields-uniform-overlap]]: a positive-measure set of composable density pairs has sections with a uniform positive overlap.

[F5] [[def-measurable-space]]: countable generation supplies finite partitions and countable testing algebras.

[A1] [[def-axiom-of-choice]]: the density versions and measure representatives in [F3] are selected under AC.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product integrals and countable sums can be interchanged.

## Proof

**Given:** The hypotheses and facts [F1]–[F5], [F7], and [A1].

1.1 Write $\phi$ as a countable disjoint union of measurable finite-measure sets $E_j$. Set $c_j=2^{-j}/(1+\phi(E_j))$ and $c=\sum_jc_j\phi(E_j)$. Since $\phi$ is nonzero and the $E_j$ cover the space, $0<c\le1$. Then $\bar\phi(A)=c^{-1}\sum_jc_j\phi(A\cap E_j)$ is an equivalent probability measure: it has density $c_j/c>0$ on every $E_j$, and hence exactly the same null sets and positive sets as $\phi$. Replace $\phi$ by $\bar\phi$ for the rest of the proof. By [F3], for every $x$ the sum $\sum_np_n(x,y)$ is positive for $\phi$-almost every $y$. Tonelli and countability imply that for $\phi^{\otimes3}$-almost every $(x,y,z)$, this sum is positive at $(x,y)$ and the corresponding sum at $(y,z)$ is positive. Hence the product of the two sums is positive almost everywhere; its countable expansion shows that some fixed $r,s\ge1$ satisfy $\int p_r(x,y)p_s(y,z)\,\phi(dx)\phi(dy)\phi(dz)>0.$ For a sufficiently small $\eta>0$, the set where both factors exceed $\eta$ still has positive product measure. [F3, F5, F7, A1, given]

2.1 Apply [F4] to $A=\{(x,y):p_r(x,y)>\eta\}$ and $B=\{(y,z):p_s(y,z)>\eta\}$. Obtain positive-$\phi$ sets $C_0,D_0$ and $\gamma>0$ such that their sections overlap by at least $\gamma$. The convolution bound [F3] gives $p_{r+s}(u,v)\ge\eta^2\gamma$ for every $u\in C_0,v\in D_0$. [F3, F4, step 1.1]

3.1 Since $C_0$ is $\phi$-positive, irreducibility gives $\sum_{k\ge1}P^k(x,C_0)>0$ for every $x$. Integrating over $D_0$ and using Tonelli, some $k\ge1$ has $\int_{D_0}P^k(x,C_0)\phi(dx)>0$. A positive-level-set subdivision yields $G\subseteq D_0$ with $\phi(G)>0$ and $\delta>0$ such that $P^k(x,C_0)\ge\delta$ for every $x\in G$. [F1, F5, F7, step 2.1]

4.1 For every $x\in G$ and $z\in D_0$, the second convolution inequality in [F3] gives $p_{r+s+k}(x,z)\ge\int_{C_0}P^k(x,dy)p_{r+s}(y,z)\ge\delta\eta^2\gamma.$ Let $\nu(A)=\phi(A\cap D_0)/\phi(D_0)$ and choose $0<\epsilon\le\min\{1,\delta\eta^2\gamma\phi(D_0)\}$. Integrating the density over $A\cap D_0$ gives $P^{r+s+k}(x,A)\ge\epsilon\nu(A)$ for every $x\in G$. Since $G\subseteq D_0$ and $\phi(G)>0$, $\nu(G)>0$. Thus $G$ is the required small set. [F2, F3, step 2.1, step 3.1] ∎
