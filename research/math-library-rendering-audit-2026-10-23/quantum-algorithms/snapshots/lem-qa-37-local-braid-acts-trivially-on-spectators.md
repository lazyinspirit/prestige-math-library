---
id: lem-qa-37-local-braid-acts-trivially-on-spectators
kind: lemma
title: "A triple braid acts identically on fusion spectators"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-qa-37-n-triple-fusion-code
  - def-qc-tqc-fusion-tree-basis
  - def-qc-tqc-braid-action-from-fusion-data
  - thm-qc-tqc-braid-action-unitary-and-artin
  - thm-qc-tqc-f-symbol-unitary
justified_by: []
axiom_use: "None; the factorization is a finite orthogonal fusion-tree decomposition and the operator norm calculation is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§II.A and §IV.B.c, fusion-tree and local braid actions, PDF pp. 3–6 and 53–57."
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.12.3–9.12.6, fusion basis and braid matrices, PDF pp. 44–48."
---
## Statement

Let $n\ge1$, $c\in\{1,\tau\}$, and consider the fixed fusion space
$V(\tau^{3n}\to c)$ with its grouped tree of $n$ consecutive triples and
outer triple-charge tree. Its orthogonal decomposition is indexed by local
triple outputs $a_i\in\{1,\tau\}$ and has factors
$$\left(\bigotimes_{i=1}^n V(\tau^3\to a_i)\right) \otimes V(a_1\otimes\cdots\otimes a_n\to c),$$
with zero-dimensional summands omitted. A braid word supported on the
internal three strands of the $i$th triple acts on this summand as
$\rho_{a_i}(b)$ on $V(\tau^3\to a_i)$ and the identity on every other local
triple factor and on the outer spectator factor. Reassociating to the fixed
left-associated $3n$-leaf tree conjugates this operator by a unitary; its
operator norm and the stated local-factor action are preserved.

## Facts & Assumptions

**Given:** The multiplicity-aware fusion-tree basis, the fixed grouped tree,
and a braid word acting only on the strands internal to one triple.

[F1] A fusion-tree basis composes orthonormal local vertex morphisms and is
complete; its basis labels include every internal charge and multiplicity
index. [[def-qc-tqc-fusion-tree-basis]]

[F2] A fixed-charge braid acts by precomposition with the inverse object
braid on the corresponding fusion morphism, and defines a unitary
representation. [[def-qc-tqc-braid-action-from-fusion-data]]
[[thm-qc-tqc-braid-action-unitary-and-artin]]

[F3] Rebracketing and its F-matrix are unitary. [[thm-qc-tqc-f-symbol-unitary]]

## Proof

1.1 In the grouped tree, choose an admissible local fusion-tree basis vector $f_i\in V(\tau^3\to a_i)$ for each triple and a basis vector $g\in V(a_1\otimes\cdots\otimes a_n\to c)$ for the outer fusion. The composites obtained by inserting $f_1,\ldots,f_n$ into $g$ are exactly the grouped fusion-tree vectors. By completeness and orthonormality [F1], their orthogonal direct sum over $(a_1,\ldots,a_n)$ is the full grouped fusion space, which gives the displayed tensor/direct-sum decomposition. [F1, given, algebra]

2.1 A braid word supported inside triple $i$ changes only the local morphism $f_i$, by $f_i\mapsto f_i\circ b^{-1}$ under [F2]; every $f_j$ with $j\ne i$ and the outer morphism $g$ are unchanged. Thus on the grouped basis its matrix is $\rho_{a_i}(b)$ tensored with identities. Rebracketing to the fixed tree conjugates this matrix by the unitary in [F3], proving the same operator statement in that convention. Tensoring an operator $A$ with an identity does not increase its norm: expand a vector in an orthonormal basis of the spectator factor and sum $\|A\xi_j\|^2\le\|A\|^2\sum\|\xi_j\|^2$. The norm of a finite orthogonal direct sum is at most the maximum of its block norms by the same squared-norm decomposition. These finite identities justify uniform spectator bounds. [F1, F2, F3, step 1.1, algebra] ∎
