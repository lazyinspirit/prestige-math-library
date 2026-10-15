---
id: lem-iterated-kernel-density-convolution-bounds
kind: lemma
title: "Iterated kernel densities retain convolution lower bounds"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-phi-irreducible-chain
  - lem-countably-generated-kernel-lebesgue-decomposition
  - thm-measurability-of-integration-against-a-kernel
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
axiom_use: "AC chooses the sectionwise singular support sets used in step 1.2."
---
## Statement

Let $P$ be $\phi$-irreducible on a countably generated space, with nonzero $\sigma$-finite irreducibility measure $\phi$. For each $n\ge1$ there are a jointly measurable $p_n$ and a singular residual kernel $S_n$ such that
$$P^n(x,dy)=p_n(x,y)\phi(dy)+S_n(x,dy),$$
and versions may be chosen so that for every $r,s\ge1$ and every $x,y$,
$$p_{r+s}(x,y)\ge\int p_r(x,z)p_s(z,y)\phi(dz),\qquad p_{r+s}(x,y)\ge\int P^r(x,dz)p_s(z,y).$$
For every $x$, $\sum_{n\ge1}p_n(x,y)>0$ for $\phi$-almost every $y$.

## Facts & Assumptions

**Given:** The countably generated space, $\phi$-irreducible kernel, and irreducibility measure in the Statement.

[F1] [[def-phi-irreducible-chain]]: every $\phi$-positive set is reached from every state at some finite positive time.

[F2] [[def-measure-kernel-and-probability-kernel]]: kernel iterates and nonnegative kernel integrals are measurable.

[F3] [[lem-countably-generated-kernel-lebesgue-decomposition]]: each $P^n$ has a jointly measurable density component and singular residual kernel.

[A1] [[def-axiom-of-choice]]: choose countably many sectionwise singular supports.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative sums and kernel integrals can be interchanged.

## Proof

**Given:** The hypotheses and facts [F1]–[F3], [F5], and [A1].

1.1 Apply [F3] to each $P^n$, obtaining preliminary densities $p_n^0$ and singular residuals $S_n$. Inductively set $p_1=p_1^0$ and, for $n>1$,
$$p_n(x,y)=\max\left(p_n^0(x,y),\sup_{1\le k<n}\int P^{n-k}(x,dz)p_k(z,y)\right).$$
The right side is jointly measurable by [F2]. For each fixed $x$, composition of kernels gives $P^n(x,A)\ge\int_A\int P^{n-k}(x,dz)p_k(z,y)\phi(dy)$. Since $S_n(x,\cdot)$ is singular, this domination forces each candidate density to be at most $p_n^0(x,\cdot)$ $\phi$-almost everywhere. Thus $p_n=p_n^0$ $\phi$-a.e. for each $x$, so it is still the density part and has both displayed convolution lower bounds pointwise by construction. [F2, F3, F5, A1]

1.2 Fix $x$. For each $n$, choose a $\phi$-null support $N_n$ of $S_n(x,\cdot)$ and let $F=\bigcap_{n\ge1}N_n^c$. Then $\phi(F^c)=0$ and every residual assigns zero mass to $F$. If $B\subseteq F$ has $\phi(B)>0$, [F1] gives an $m$ with $P^m(x,B)>0$; because the residual gives $B$ zero mass, $\int_Bp_m(x,y)\phi(dy)>0$. [F1, F3, A1]

2.1 Therefore every positive-$\phi$ subset of $F$ intersects $\{\sum_np_n(x,\cdot)>0\}$ in positive measure. Its complement in $F$ must be $\phi$-null; otherwise take that complement as $B$ in step 1.2, which would make every integral zero. Hence the density sum is positive $\phi$-almost everywhere. [F5, step 1.2] ∎
