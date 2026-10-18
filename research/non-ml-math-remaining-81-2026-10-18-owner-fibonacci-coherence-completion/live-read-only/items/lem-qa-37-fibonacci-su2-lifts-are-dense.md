---
id: lem-qa-37-fibonacci-su2-lifts-are-dense
kind: lemma
title: "The generated normalized Fibonacci lifts are dense in SU(2)"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - lem-qc-tqc-su2-determinant-lifts-dense
  - lem-qc-tqc-special-unitary-connected
  - ex-qc-tqc-fibonacci-qubit-matrices
  - ex-qc-tqc-fibonacci-data
  - def-countable-choice
justified_by: []
axiom_use: "Assumes exactly ACω through the projective-density and lift suppliers; no full Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.17, projective density and global phase, PDF pp. 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci braid density discussion, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and full proof, printed pp. 17–21; convention cross-check only."
---

## Statement

Assume $\mathrm{AC}_\omega$ and the fixed Fibonacci convention
$B_1=\operatorname{diag}(1,r)$, $B_2=FB_1F$ with
$r=e^{-3\pi i/5}$. Put $z=e^{3\pi i/10}$ and let
$\Lambda=\langle zB_1,zB_2\rangle\le SU(2)$. Then $\Lambda$ is dense in
$SU(2)$ in operator norm.

## Facts & Assumptions

**Given:** The fixed $F/R$ data and three-anyon braid matrices, the projective
image $\Gamma$ of the Fibonacci braid generators, and $\mathrm{AC}_\omega$.

[F1] The supplier verifies the stated matrices $B_1,B_2$, unitarity, braid
relation, and $\det B_j=r$. [[ex-qc-tqc-fibonacci-qubit-matrices]]

[F2] The fixed data use $r=R_\tau/R_1=e^{-3\pi i/5}$ in the specified
chirality and gauge. [[ex-qc-tqc-fibonacci-data]]

[F3] The full inverse image of a dense projective Fibonacci subgroup under
$SU(2)\to PU(2)$ is dense, under ACω.
[[lem-qc-tqc-su2-determinant-lifts-dense]]

[F4] $SU(2)$ is connected. [[lem-qc-tqc-special-unitary-connected]]

[A1] Assume exactly countable choice $\mathrm{AC}_\omega$.
[[def-countable-choice]]

## Proof

1.1 The matrices $B_j$ are unitary by [F1], and $z$ has modulus one. Their
determinants satisfy
$\det(zB_j)=z^2\det(B_j)=e^{3\pi i/5}e^{-3\pi i/5}=1$ by [F1]–[F2],
so each lifted generator lies in $SU(2)$. Let $q:SU(2)\to PU(2)$ be the
quotient map with kernel $\{I,-I\}$. Multiplication by the scalar $z$ does
not change a projective class, so $q(\Lambda)=\Gamma$. By [A1] and [F3],
$q^{-1}(\Gamma)$ is dense; every fiber of $q$ has exactly two elements,
which yields $q^{-1}(\Gamma)=\Lambda\cup(-\Lambda)$. [A1, F1, F2, F3, given, algebra]

1.2 Let $K=\overline\Lambda$ in $SU(2)$. It is a closed subgroup and
$K\cup(-K)=SU(2)$ by step 1.1. If $-I\in K$, then $-K=K$ and the cover
forces $K=SU(2)$. If $-I\notin K$, then $K\cap(-K)=\varnothing$: an
intersection would give $x=-y$ for $x,y\in K$, hence $-I=y^{-1}x\in K$.
Both $K$ and $-K$ are closed, so each is also open as the complement of the
other; this separates the connected group $SU(2)$ into two nonempty clopen
sets, contradicting [F4]. Therefore $-I\in K$ and $K=SU(2)$. Only [A1] is
used as a choice axiom. [F4, A1, step 1.1, algebra] ∎
