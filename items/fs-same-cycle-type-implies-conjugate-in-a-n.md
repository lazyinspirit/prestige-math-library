---
id: fs-same-cycle-type-implies-conjugate-in-a-n
kind: false-statement
title: 'FALSE: two even permutations of the same cycle type are always conjugate in $A_n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-alternating-conjugacy-class-splitting-criterion, lem-conjugating-a-cycle-relabels-its-entries, def-alternating-group, cor-sign-from-disjoint-cycle-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement refuted

Two elements of $A_n$ with the same cycle type must be conjugate in $A_n$.

## Facts & Assumptions

**Given:** The cycles $(123)$ and $(132)$ in $A_4$.

[F1] A $k$-cycle has sign $(-1)^{k-1}$ ([[cor-sign-from-disjoint-cycle-structure]]), and $A_n$ is the kernel of sign ([[def-alternating-group]]).

[F2] Conjugation relabels cycle entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F3] For $n\ge2$ and $\sigma\in A_n$, the $S_n$-class of $\sigma$ splits into two $A_n$-classes of equal size exactly when all cycle lengths in its decomposition, including $1$-cycles for fixed points, are odd and no two are equal ([[thm-alternating-conjugacy-class-splitting-criterion]]).

## Counterexample

**Proof technique:** counterexample.

1.1 In $A_4$, the cycles $(123)$ and $(132)$ have sign $(-1)^2=+1$ by [F1] and have the same cycle type $(3,1)$. [F1, algebra]

2.1 The lengths $3$ and $1$ are odd and distinct, so [F3] says that the $S_4$-class of $3$-cycles splits into two $A_4$-classes. [F3, step 1.1]

2.2 More explicitly, [F2] shows that conjugating $(123)$ to $(132)$ reverses the cyclic order on $\{1,2,3\}$ while fixing the remaining point; every such relabeling is odd. Hence no element of $A_4$ performs it. [F2, step 1.1, algebra]

3.1 Thus the two displayed even permutations have the same cycle type but are not conjugate in $A_4$. [step 1.1, step 2.2] ∎
