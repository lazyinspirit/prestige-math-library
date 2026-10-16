---
id: def-qc-css-code-from-nested-binary-codes
kind: definition
title: CSS code from nested binary codes
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-classical-linear-code-over-finite-field
  - def-qc-dual-of-a-finite-field-linear-code
  - def-qc-register-and-computational-basis
  - def-dimension
  - thm-dimension-of-a-linear-subspace
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; finite basis extension and all coordinate choices are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§37.1–37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

Let $n\ge1$ and let $C_2\subseteq C_1\le\mathbb F_2^n$ be binary linear
codes. Put $k=\dim C_1-\dim C_2$. The **CSS coset code** associated with this
nested pair is the subspace of the ordered $n$-qubit register spanned by

$$|x+C_2\rangle:=|C_2|^{-1/2}\sum_{c\in C_2}|x+c\rangle,\qquad x\in C_1.$$

Here addition is coordinatewise in $\mathbb F_2^n$, and $|y\rangle$ is the
computational-basis vector indexed by the bit string $y$. The vector depends
only on the coset $x+C_2$. A basis of $C_2$ extended to a basis of $C_1$
chooses logical labels for the quotient $C_1/C_2$; the number of labels is
$2^k$. No additional inclusion $C_2^\perp\subseteq C_1$ is part of this
nested-code convention.

For a binary code $C$, $C^\perp=\{y:x\cdot y=0\text{ for every }x\in C\}$
uses the standard bilinear dot product, as defined in
[[def-qc-dual-of-a-finite-field-linear-code]].

## Facts & Assumptions

**Given:** Binary linear codes $C_2\subseteq C_1\le\mathbb F_2^n$ with $n\ge1$.

[F1] [[def-qc-classical-linear-code-over-finite-field]]: a classical binary
linear code is a subspace of $\mathbb F_2^n$ with its finite vector-space
dimension.

[F2] [[def-qc-register-and-computational-basis]]: the $n$-qubit register has
an ordered computational basis indexed by $\mathbb F_2^n$.

[F3] [[thm-qc-computational-basis-orthonormal]] gives an orthonormal basis
of each $Q_2$ factor. Equip their ordered tensor product with the inner
product of [[def-qc-tensor-register-and-permutation]]; then
[[lem-qc-tensor-product-basis-and-dimension]] makes the bit-string-indexed
product basis orthonormal.

[F4] [[thm-dimension-of-a-linear-subspace]]: in finite dimension every
linearly independent subset of a subspace extends to a basis of that
subspace, without a choice principle.

## Verification

1.1 Since $C_2\subseteq C_1$, every $x\in C_1$ has a coset in $C_1/C_2$. If $x'=x+c_0$ with $c_0\in C_2$, then $c\mapsto c+c_0$ permutes $C_2$; reindexing the finite sum gives $|x'+C_2\rangle=|x+C_2\rangle$. Thus the displayed vector is independent of the representative. [given, F1, construct]

2.1 By [F4], $\dim C_2\le\dim C_1$, so $k\ge0$. Extend a basis of $C_2$ to a basis of $C_1$. If the dimensions are $m$ and $m+k$, respectively, the added $k$ basis vectors span a complement $D$ with $C_1=C_2\oplus D$. Each coset has exactly one representative in $D$, so $D\to C_1/C_2$, $d\mapsto d+C_2$, is a bijection. Coordinate expansion in the chosen basis identifies $D$ with $\mathbb F_2^k$. There are $2^k$ such coordinate lists, since each of the $k$ coordinates has two choices; for $k=0$ there is one empty list. Hence $|C_1/C_2|=2^k$. [given, F1, F4, step 1.1, construct]

3.1 For each coset, the basis vectors $|x+c\rangle$ in its sum are distinct, so [F3] gives squared norm $|C_2|^{-1}|C_2|=1$. Different cosets have disjoint supports in that basis, so their inner product is zero. The code space therefore has the $2^k$ orthonormal coset vectors indexed by $C_1/C_2$. [given, F2, F3, step 2.1, algebra] ∎

## Remarks

Cleve’s §37.3 gives a special CSS construction with an additional dual
containment hypothesis. That hypothesis is not used here: membership in
$C_2\subseteq C_1$ alone makes the coset vectors well defined.
