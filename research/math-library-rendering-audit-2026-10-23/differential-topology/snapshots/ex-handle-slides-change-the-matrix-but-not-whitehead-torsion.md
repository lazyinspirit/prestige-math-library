---
id: ex-handle-slides-change-the-matrix-but-not-whitehead-torsion
kind: example
title: "Handle slides change the matrix but not the Whitehead torsion"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 14
deps: ["lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion", "prop-elementary-matrix-operations-are-realized-by-handle-slides", "def-middle-handle-intersection-matrix-of-an-h-cobordism", "def-whitehead-torsion-of-an-h-cobordism", "lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-countable-choice"]
provenance:
  statement: literature-derived
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.4, proof of Lemma 1.27(1), printed pp. 19--20 (handle slides and matrix operations)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Proposition 8.19 and the proof of Theorem 8.33, printed pp. 178 and 184--185; PDF pages 186, 192, 193"
---

## Example

Assume $\mathrm{AC}_\omega$. In the right-module convention, let $A:C_{q+1}\to C_q$ be the differential matrix of a two-index high-dimensional h-cobordism presentation, $2\le q\le n-2$, $\dim W=n+1\ge6$. Slide the $j$th lower handle over the $i$th with signed label $r=\pm g$, so its new core basis vector is $e'_j=e_j+e_i r$. Put $P=I+E_{ij}r$. Then the new differential matrix is $P^{-1}A$, and the torsion class is unchanged. A single slide adds one signed group monomial; a general group-ring coefficient is realized by a finite sequence.

## Facts & Assumptions

**Given:** The presentation and the nonzero signed monomial $r=\pm g$, with $i\ne j$, in the statement.

[F1] The chosen handle generators form a right basis; lower handles index rows and upper handles index columns of the differential. [[def-based-handle-chain-complex-over-the-fundamental-group-ring]].

[F2] Slides preserve presentation-indexed torsion, and elementary basis matrices have zero Whitehead class. [[lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion]], [[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]].

[F3] In degrees $q,q+1$ the torsion is $(-1)^q[A]$. [[def-whitehead-torsion-of-an-h-cobordism]].

## Verification

1.1 In the old target coordinates the new basis has columns $e'_k$, hence matrix $P=I+E_{ij}r$, with $P^{-1}=I-E_{ij}r$. The source basis is unchanged. Since an old target coordinate column equals $P$ times its new column, the new differential is $A'=P^{-1}A$. Thus row $i$ changes by subtracting $r$ times row $j$. The target core change acts inversely on differential coordinates; it must not be copied directly onto the belt basis. [F1, given, algebra]

2.1 For the concrete matrix $A=I_2$, take $i=1,j=2,r=1$. Then $P=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $A'=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\ne I_2$. Both are invertible. More generally $P^{-1}A=A$ for an invertible $A$ would imply $P=I$, impossible for $r=\pm g$. [step 1.1, algebra]

3.1 By [F2], $[P]=0$ and $[P^{-1}A]=-[P]+[A]=[A]$ in the Whitehead group. Multiplying by the parity sign in [F3] gives $\tau_{H'}=\tau_H$. This supplies the promised matrix computation and the unchanged torsion class. [F2, F3, step 1.1, step 2.1] ∎
