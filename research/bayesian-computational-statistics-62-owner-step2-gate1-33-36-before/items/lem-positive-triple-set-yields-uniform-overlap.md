---
id: lem-positive-triple-set-yields-uniform-overlap
kind: lemma
title: "A positive triple set has uniformly overlapping sections"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measurable-space
  - thm-levy-upward-convergence-of-conditional-expectations
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
axiom_use: "No choice principle is used; finite partitions are built from the countable generating family."
---
## Statement

Let $\phi$ be a finite nonzero measure on a countably generated measurable space. For measurable $A,B\subseteq\mathsf X^2$, define $E=\{(x,y,z):(x,y)\in A,\ (y,z)\in B\}$. If $\phi^{\otimes3}(E)>0$, then there are measurable $C,D$ with $\phi(C),\phi(D)>0$ and $\gamma>0$ such that
$$\phi(A_1(x)\cap B_2(z))\ge\gamma\quad(x\in C,\ z\in D),$$
where $A_1(x)=\{y:(x,y)\in A\}$ and $B_2(z)=\{y:(y,z)\in B\}$.

## Facts & Assumptions

**Given:** The finite measure, countably generated sigma-algebra, and product-measurable sets in the Statement.

[F1] [[def-measurable-space]]: countable generation supplies increasing finite partitions generating the product sigma-algebra.

[F2] [[thm-levy-upward-convergence-of-conditional-expectations]]: conditional expectations over increasing generating partitions converge almost surely to the conditional expectation on the generated sigma-algebra.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: product integrals equal iterated section integrals.

## Proof

**Given:** The hypotheses and facts [F1]–[F3].

1.1 Since $\phi^{\otimes3}(E)>0$, [F1] supplies increasing finite tensor-product partitions generating the product sigma-algebra. [F2], applied to $1_E$, gives almost-sure convergence of their conditional expectations to $1_E$. The union of all zero-product-measure cells is null, so choose a point of $E$ outside that union at which convergence holds. The product cell $U\times V\times W$ containing it has positive measure, and for some sufficiently fine partition its conditional average exceeds $3/4$. Hence $\phi^{\otimes3}(E\cap(U\times V\times W))>\tfrac34\phi(U)\phi(V)\phi(W)>0.$ [F1, F2, given]

1.2 Since $E\subseteq A\times_{\!y}B$, Tonelli gives $\int_{U\times V}1_A(x,y)\,d\phi(x)d\phi(y)>\tfrac34\phi(U)\phi(V),$ and likewise $\int_{V\times W}1_B(y,z)\,d\phi(y)d\phi(z)>\tfrac34\phi(V)\phi(W)$. Consequently the sets $C=\{x\in U:\phi(A_1(x)\cap V)>\tfrac34\phi(V)\}$ and $D=\{z\in W:\phi(B_2(z)\cap V)>\tfrac34\phi(V)\}$ have positive measure; otherwise the corresponding integral could not exceed three quarters of the rectangle measure. [F3, step 1.1]

2.1 For $x\in C$ and $z\in D$, both sections occupy more than three quarters of $V$. The complement of their intersection in $V$ is the union of two sets, each of measure less than $\phi(V)/4$. Thus $\phi(A_1(x)\cap B_2(z))\ge\phi(V)/2>0$. Set $\gamma=\phi(V)/2$. [step 1.2, algebra] ∎
