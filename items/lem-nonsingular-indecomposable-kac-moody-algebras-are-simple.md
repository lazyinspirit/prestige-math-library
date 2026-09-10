---
id: lem-nonsingular-indecomposable-kac-moody-algebras-are-simple
kind: lemma
title: "Nonsingular indecomposable Kac–Moody algebras are simple"
status: draft
origin: pipeline
deps: ["def-kac-moody-algebra-associated-to-a-gcm", "prop-kac-moody-root-spaces-are-finite-dimensional", "prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism", "def-generalized-cartan-matrix"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Proposition 1.4.8(i), pp.19–20; direct ideal propagation"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

If $A$ is an indecomposable GCM with $\det A\ne0$, then $\mathfrak g(A)$ is nonabelian and has no nonzero proper Lie ideal. Thus every indecomposable finite-type component is simple. Here an ideal $J$ is a linear subspace with $[\mathfrak g,J]\subset J$, and “simple” includes nonabelianity.

## Facts & Assumptions

**Given:** An indecomposable nonsingular GCM and a nonzero ideal J of g(A).

[F1] Every nonzero ideal meets the Cartan. ([[def-kac-moody-algebra-associated-to-a-gcm]]).

[F2] Simple vectors and their brackets are nonzero. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

[F3] The minimal Cartan dimension is 2n−rank A. ([[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]).

[F4] Indecomposability excludes a nontrivial block partition. ([[def-generalized-cartan-matrix]]).

## Proof

1.1 By F1 choose $0\ne h\in J\cap\mathfrak h$. F3 and nonsingularity give $\dim\mathfrak h=n$, so the $n$ independent simple roots form a basis of $\mathfrak h^*$. Some $\alpha_i(h)\ne0$. The ideal property applied to $[h,e_i]=\alpha_i(h)e_i$ gives $e_i\in J$, then $[e_i,f_i]=h_i$ gives $h_i\in J$, and $[h_i,f_i]=-2f_i$ gives $f_i\in J$. [F1, F3, given]

2.1 The finite graph with edges $a_{ij}\ne0$ is connected by F4: otherwise its path components supply a zero block partition, using the symmetric zero condition. For an edge from an index already obtained in step 1.1, $[h_i,e_j]=a_{ij}e_j$ gives $e_j\in J$, and the same two brackets give $h_j,f_j\in J$. Induction along finite paths reaches every index. The independent $h_i$ span the $n$-dimensional Cartan, so every defining generator lies in $J$, and $J=\mathfrak g$. Finally $[e_i,f_i]=h_i\ne0$ by F2 and Cartan injectivity; hence the algebra is nonabelian. [F2, F3, F4, step 1.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Proposition 1.4.8(i), pp.19–20; direct ideal propagation.
