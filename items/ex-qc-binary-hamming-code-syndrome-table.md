---
id: ex-qc-binary-hamming-code-syndrome-table
kind: example
title: The binary [7,4,3] Hamming code and its single-error syndromes
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [def-matrix-product-and-identity-matrix, def-matrix-space, def-qc-classical-error-syndrome, def-qc-classical-linear-code-over-finite-field, def-qc-generator-and-parity-check-matrices, def-qc-hamming-weight-distance-and-linear-code-distance, def-row-space-column-space-nullspace-and-matrix-ranks, lem-standard-basis-of-f-n, thm-dimension-of-a-linear-subspace, thm-qc-classical-distance-correction-and-erasure-radius, thm-qc-full-column-rank-matrix-image-has-dimension, thm-rank-nullity, thm-z-mod-p-is-a-field]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§37.1.2–37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.6 and 7.8
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

Over $F_2=\mathbb Z/2\mathbb Z$, take the column-vector matrices

$$G=\begin{bmatrix}1&1&0&1\\1&0&1&1\\0&1&1&1\\1&0&0&0\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix},\qquad H=\begin{bmatrix}1&0&0&1&1&0&1\\0&1&0&1&0&1&1\\0&0&1&0&1&1&1\end{bmatrix}.$$

The code $C=\operatorname{im}G=\ker H$ has parameters $[7,4,3]_2$. The syndrome of a single-bit error is the corresponding column of $H$; the seven syndromes are the seven nonzero vectors of $F_2^3$.

## Facts & Assumptions

**Given:** The matrices $G,H$ above, column-vector multiplication, and $F_2=\mathbb Z/2\mathbb Z$.

[F1] [[thm-z-mod-p-is-a-field]]: For each prime $p$, the residue classes $\mathbb Z/p\mathbb Z$ form a field.

[F2] [[def-matrix-product-and-identity-matrix]]: Matrix products are formed by finite coordinate sums.

[F3] [[thm-rank-nullity]]: A linear map from a finite-dimensional domain has $\dim V=\dim\ker T+\dim\operatorname{im}T$.

[F4] [[thm-dimension-of-a-linear-subspace]]: A subspace with the same dimension as its finite-dimensional ambient space equals it.

[F5] [[def-row-space-column-space-nullspace-and-matrix-ranks]]: The row rank is the dimension of the row space, the nullspace is $\{x:Hx=0\}$, and matrix rank is row rank.

[L1] [[thm-qc-full-column-rank-matrix-image-has-dimension]]: Independent columns of $G$ span a subspace of dimension equal to their number.

[L2] [[def-qc-classical-error-syndrome]]: The syndrome map is $s(r)=Hr$.

[L3] [[thm-qc-classical-distance-correction-and-erasure-radius]]: A code of distance $3$ uniquely decodes one unknown symbol error.

## Verification


1.1 The last four rows of $G$ form $I_4$, so its columns are independent and [L1] gives $\dim C=4$. The first three columns of $H$ form $I_3$, so for every $y\in F_2^3$ the input $(y_0,y_1,y_2,0,0,0,0)$ maps to $y$. Also, a linear combination of the rows of $H$ has its first three entries equal to its three coefficients, so the rows are independent and [F5] gives rank $3$. For $x=(a,b,c,d)$, $Gx=(a+b+d,a+c+d,b+c+d,a,b,c,d)$; applying the three rows of $H$ gives $(0,0,0)$. Thus $HG=0$ and $C\subseteq\ker H$. [F1, F2, F5, L1, given, algebra]

2.1 The map $H:F_2^7\to F_2^3$ is onto by its first three columns, so [F3] gives $\dim\ker H=7-3=4$. The subspace $C$ also has dimension $4$ by step 1.1; [F4] now gives $C=\ker H$. [F3, F4, step 1.1]

3.1 The columns of $H$ are $100,010,001,110,101,011,111$. They are all nonzero and pairwise distinct. A weight-one vector has syndrome one of these columns; a weight-two vector has syndrome the sum of two distinct columns, which is nonzero in characteristic two. Thus $C$ has no nonzero word of weight below $3$. The word $e_0+e_1+e_3$ has syndrome $100+010+110=000$ and weight $3$, so it lies in $C$ and $d(C)=3$. [F1, F2, L2, step 2.1, given, algebra]

4.1 Multiplying $H$ by the zero word and each unit vector gives $s(0000000)=000$, $s(1000000)=100$, $s(0100000)=010$, $s(0010000)=001$, $s(0001000)=110$, $s(0000100)=101$, $s(0000010)=011$, and $s(0000001)=111$; each nonzero value is the corresponding column of $H$. These eight syndromes are distinct, so [L3] guarantees unique correction of any one bit flip. [L2, L3, step 3.1, given] ∎

## Remarks

The minimum weight and every syndrome are verified from the displayed matrices; no source convention is used as a proof step.
