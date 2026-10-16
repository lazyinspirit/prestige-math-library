---
id: ex-qc-binary-repetition-code-syndrome-table
kind: example
title: Binary three-bit repetition code and its syndrome table
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [def-qc-classical-error-syndrome, def-qc-classical-linear-code-over-finite-field, def-qc-generator-and-parity-check-matrices, thm-qc-classical-distance-correction-and-erasure-radius, thm-qc-generator-and-parity-check-matrix-existence, thm-z-mod-p-is-a-field]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1 and 37.1–37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

Work over $F=\mathbb F_2=\mathbb Z/2\mathbb Z$. Let $C=\{000,111\}\le F^3$, with column-vector generator and parity-check matrices

$$G=\begin{bmatrix}1\\1\\1\end{bmatrix},\qquad H=\begin{bmatrix}1&1&0\\0&1&1\end{bmatrix}.$$

The code has parameters $[3,1,3]_2$. The four error vectors of weight at most one have distinct syndromes $He$, giving a unique correction table.

## Facts & Assumptions

**Given:** The field $F=\mathbb Z/2\mathbb Z$, code $C=\{000,111\}$, and matrices $G,H$ displayed above.

[F1] [[thm-z-mod-p-is-a-field]]: For every prime $p$, $\mathbb Z/p$ with its usual residue-class operations is a field.

[L1] [[def-qc-generator-and-parity-check-matrices]]: A generator matrix has independent columns spanning $C$; a parity-check matrix has independent rows and nullspace $C$; and with column-vector conventions their product is zero.

[L2] [[def-qc-classical-error-syndrome]]: The syndrome of a received column $r$ is $Hr$.

[L3] [[thm-qc-classical-distance-correction-and-erasure-radius]]: A code of distance $d$ uniquely decodes up to $\lfloor(d-1)/2\rfloor$ unknown errors.

## Verification


1.1 The prime $2$ makes $F$ a field by [F1]. The single nonzero column of $G$ is independent and spans $\{000,111\}$. Multiplication gives $HG=\begin{bmatrix}0\\0\end{bmatrix}$. Solving $Hx=0$ gives $x_0=x_1=x_2$, so $\ker H=C$. If $a,b\in F_2$ and $a(1,1,0)+b(0,1,1)=0$, coordinate $0$ gives $a=0$ and coordinate $2$ gives $b=0$; hence the rows of $H$ are independent. Thus $G$ and $H$ meet the generator and parity-check definitions [L1]. [F1, L1, given, algebra]

1.2 The only nonzero codeword is $111$, whose weight is $3$; hence $k=1$ and $d=3$. [given, L1, algebra]

1.3 Direct multiplication over $F_2$ gives $H(000)=00$, $H(100)=10$, $H(010)=11$, and $H(001)=01$. These are all four errors of weight at most one, and their syndromes are distinct. [L2, given, algebra]

2.1 For a received word $r=c+e$ with $c\in C$ and $\operatorname{wt}(e)\le1$, step 1.3 identifies $e$ from $Hr=He$; subtracting it yields $r-e=c$. This realizes the one-error uniqueness guarantee of [L3]. [step 1.3, L2, L3, given] ∎

## Remarks

The matrix orientation is column-vector orientation: received words are columns and the syndrome is $Hr\in F_2^2$. The source notes use row-vector conventions in some passages; the displayed calculations are recomputed in the root library convention.
