---
id: thm-partition-diagram-orbit-basis-centralizer
kind: theorem
title: Partition-diagram orbit basis and symmetric-group centralizer
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-brauer-and-partition-diagram-categories, lem-brauer-and-partition-composition-is-associative]
proof_strategy: direct
axiom_use: "No choice principle is used; all posets, sums, and tensor bases are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halverson and Ram, Partition Algebras, Theorem 3.6(a) and proof"
      url: https://arxiv.org/pdf/math/0401314
      locator: "PDF pp. 19–20: orbit-indicator basis, centralizer image, kernel, and stable range."
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, §2.2"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 5–6: the arbitrary-field partition diagram category and loop composition."
---

## Statement

Let $k$ be any field, $N\ge1$, and $r\ge0$, with the integer $N$ also denoting its scalar image in $k$. Let $W=k^N$ have basis $e_1,\ldots,e_N$, and let $S_N$ act by permuting this basis and diagonally on $W^{\otimes r}$. For a set partition diagram $d$ on the $2r$ boundary labels, define $\Phi(d)_{I,J}=1$ when all indices attached to vertices in each block of $d$ are equal, and $0$ otherwise; extend linearly. The partition algebra $P_r(N)$ from [[def-brauer-and-partition-diagram-categories]] acts by $\Phi$, and its image is $\operatorname{End}_{S_N}(W^{\otimes r})$, the algebra of linear maps commuting with this action. Order set partitions by refinement: $d\preceq\pi$ means $\pi$ is a coarsening of $d$. Let $\mu(d,\pi)\in\mathbb Z$ be the inverse of the finite integer incidence matrix $\zeta(d,\pi)=1_{d\preceq\pi}$, and view these integers as scalars in $k$. Set $x_d=\sum_{\pi\succeq d}\mu(d,\pi)\,\pi$. Then $\Phi(x_d)$ is the indicator matrix of the exact equality pattern $d$ when $d$ has at most $N$ blocks, and is zero when $d$ has more than $N$ blocks. Consequently $\ker\Phi$ is the span of those $x_d$ with more than $N$ blocks, and $\Phi$ is injective exactly when $N\ge2r$. These statements hold even when $\operatorname{char}k$ divides $N!$.

## Facts & Assumptions

**Given:** The partition-diagram composition from [[def-brauer-and-partition-diagram-categories]] and its associativity in [[lem-brauer-and-partition-composition-is-associative]].

[F1] [[def-brauer-and-partition-diagram-categories]]: a partition diagram has one block for each set of boundary vertices and composition identifies the middle boundary blocks, weighting each removed component by $N$.

[F2] [[lem-brauer-and-partition-composition-is-associative]]: this composition is associative.

## Proof

**Given:** $k$, $N\ge1$, and the permutation action on the tensor basis of $W^{\otimes r}$.

1.1 For basis tuples $I,K$ on the external boundary, the matrix coefficient of $\Phi(E)\Phi(D)$ is the sum over middle tuples $J$ of $\Phi(D)_{I,J}\Phi(E)_{J,K}$. The equalities imposed by the two diagrams generate exactly the blocks of the stacked partition. Each generated block meeting an outer label has its index fixed by that label; each block wholly in the middle has $N$ independent choices. Hence the coefficient is $N^\ell$ when the outer labels satisfy the stacked partition and zero otherwise, where $\ell$ is the number of removed middle blocks. By [F1] this equals the coefficient of $\Phi(E\circ D)$, so $\Phi$ respects multiplication; [F2] supplies associativity of the domain algebra. [given, F1, F2, construct]

1.2 Index a tensor basis vector by an $r$-tuple $I=(i_1,\ldots,i_r)\in\{1,\ldots,N\}^r$. A matrix coefficient of an operator is indexed by a pair $(I,J)$. The operator commutes with all basis permutations exactly when its matrix coefficient is constant on simultaneous $S_N$-orbits of $(I,J)$. Two such pairs lie in the same orbit exactly when they have the same equality pattern on the $2r$ labels: a permutation maps one pair to the other if and only if it maps their distinct used indices block by block. Thus orbit indicator matrices form a basis of the commutant over every field. [given, algebra]

2.1 For a partition diagram $d$, the matrix coefficient of $\Phi(d)$ is $1$ exactly when labels joined by a block of $d$ receive equal indices. It is therefore the sum of orbit indicators $E_\pi$ over exact equality patterns $\pi$ coarser than $d$ and having at most $N$ blocks. The finite-poset zeta matrix is triangular with diagonal entries one, so its inverse $\mu$ gives an invertible change of basis from the diagram basis to the elements $x_d$. Möbius inversion therefore gives $\Phi(x_d)=E_d$ if $d$ is realizable and $0$ otherwise. [F1, step 1.1, algebra]

3.1 An exact pattern $d$ is realizable precisely when it has at most $N$ blocks, since one can assign distinct indices to its blocks. Its orbit indicator is then nonzero, and different exact patterns have disjoint supports, so these images are linearly independent. Step 2.1 shows they span the image and that every $x_d$ with more than $N$ blocks maps to zero; hence the kernel and image have the stated forms. The full diagram basis is independent in the image exactly when every partition of $2r$ labels has at most $N$ blocks, which is equivalent to $N\ge2r$. No division by $N!$ was used, so the argument is valid in every characteristic. [step 1.2, step 2.1, algebra] ∎
