---
id: lem-positive-triple-set-yields-uniform-overlap
kind: lemma
title: A positive triple set has uniformly overlapping sections
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measurable-space
  - lem-finite-measure-sets-are-approximable-by-a-generating-algebra
  - thm-measurability-of-integration-against-a-kernel
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
axiom_use: No choice principle is used; finite partitions are built from the countable generating family.
---
## Statement

Let $\phi$ be a finite nonzero measure on a countably generated measurable space. For measurable $A,B\subseteq\mathsf X^2$, define $E=\{(x,y,z):(x,y)\in A,\ (y,z)\in B\}$. If $\phi^{\otimes3}(E)>0$, then there are measurable $C,D$ with $\phi(C),\phi(D)>0$ and $\gamma>0$ such that
$$\phi(A_1(x)\cap B_2(z))\ge\gamma\quad(x\in C,\ z\in D),$$
where $A_1(x)=\{y:(x,y)\in A\}$ and $B_2(z)=\{y:(y,z)\in B\}$.

## Facts & Assumptions

**Given:** The finite measure, countably generated sigma-algebra, and product-measurable sets in the Statement.

[F1] [[def-measurable-space]]: countable generation supplies increasing finite partitions generating the product sigma-algebra.

[F2] [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]]: under a finite measure every measurable set has arbitrarily close symmetric-difference approximants in a generating algebra.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: product integrals equal iterated section integrals.

## Proof

**Given:** The hypotheses and facts [F1]–[F3].

1.1 Put $\eta=\phi^{\otimes3}(E)>0$. The product measure is finite because $\phi$ is finite. By [F1], the union of the algebras of increasing finite tensor-product partitions is an algebra generating the product sigma-algebra. Apply [F2] to obtain a member $H$ of that algebra with $\phi^{\otimes3}(E\mathbin\triangle H)<\eta/6$. Then $\phi^{\otimes3}(H)>5\eta/6$ and $\phi^{\otimes3}(H\setminus E)<\eta/6<\phi^{\otimes3}(H)/4$, so $E$ occupies more than three quarters of $H$. The set $H$ is a finite union of tensor cells at a common partition level. If every positive-measure cell had occupancy at most three quarters, finite additivity would give the same upper bound on $H$, a contradiction. Thus some cell $U\times V\times W$ has positive product measure and $\phi^{\otimes3}(E\cap(U\times V\times W))>\tfrac34\phi(U)\phi(V)\phi(W)>0$. Only one finite-algebra approximant and one cell of its finite partition are selected; no conditional-expectation representative or choice axiom is used. [F1, F2, F3, given, choose, algebra]

2.1 Since $E\subseteq A\times_{\!y}B$, Tonelli gives $\int_{U\times V}1_A(x,y)\,d\phi(x)d\phi(y)>\tfrac34\phi(U)\phi(V),$ and likewise $\int_{V\times W}1_B(y,z)\,d\phi(y)d\phi(z)>\tfrac34\phi(V)\phi(W)$. Consequently the sets $C=\{x\in U:\phi(A_1(x)\cap V)>\tfrac34\phi(V)\}$ and $D=\{z\in W:\phi(B_2(z)\cap V)>\tfrac34\phi(V)\}$ have positive measure; otherwise the corresponding integral could not exceed three quarters of the rectangle measure. [F3, step 1.1]

3.1 For $x\in C$ and $z\in D$, both sections occupy more than three quarters of $V$. The complement of their intersection in $V$ is the union of two sets, each of measure less than $\phi(V)/4$. Thus $\phi(A_1(x)\cap B_2(z))\ge\phi(V)/2>0$. Set $\gamma=\phi(V)/2$. [step 2.1, algebra] ∎
