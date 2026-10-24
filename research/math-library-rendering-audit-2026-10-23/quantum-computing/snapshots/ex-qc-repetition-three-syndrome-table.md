---
id: ex-qc-repetition-three-syndrome-table
kind: example
title: Repetition-code syndrome, known erasures, and unlocated errors
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [def-matrix-product-and-identity-matrix, def-qc-classical-error-syndrome, def-qc-generator-and-parity-check-matrices, def-qc-hamming-weight-distance-and-linear-code-distance, thm-qc-classical-distance-correction-and-erasure-radius, thm-z-mod-p-is-a-field]
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
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.6 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

Use the binary repetition code $C=\{000,111\}$ and $H=\begin{bmatrix}1&1&0\\0&1&1\end{bmatrix}$. A single middle-bit error in $111$ gives $r=101$ and a syndrome identifying that error. Two known erasures at coordinates $0,1$ still leave a unique completion when coordinate $2$ is received. By contrast, two unlocated errors in $000$ can produce $r=110$, which lies closer to the wrong codeword $111$.

## Facts & Assumptions

**Given:** The binary repetition code $C=\{000,111\}$, the parity-check matrix $H$ above, a received word $r=101$, known erasures $S=\{0,1\}$ in zero-based coordinates, and the alternative unlocated-error word $r'=110$.

[F1] [[thm-z-mod-p-is-a-field]]: $\mathbb Z/2\mathbb Z$ is a field.

[F2] [[def-matrix-product-and-identity-matrix]]: Matrix multiplication uses finite coordinate sums over the field.

[L1] [[def-qc-generator-and-parity-check-matrices]]: A parity-check matrix has independent rows and nullspace equal to $C$.

[L2] [[def-qc-hamming-weight-distance-and-linear-code-distance]]: Weight counts nonzero coordinates, and $d(C)$ is the minimum nonzero codeword weight.

[L3] [[def-qc-classical-error-syndrome]]: The syndrome of a received word $r$ is $s(r)=Hr$.

[L4] [[thm-qc-classical-distance-correction-and-erasure-radius]]: Distance $3$ uniquely decodes one unknown error and gives unique erasure completion on every known support of size less than $3$.

## Verification


1.1 The codewords are $000$ and $111$, and [L2] gives $d(C)=3$. For $x=(x_0,x_1,x_2)$, multiplication gives $Hx=(x_0+x_1,x_1+x_2)$, so $Hx=0$ exactly when $x_0=x_1=x_2$ and $\ker H=C$. The first two columns of $H$ form $\begin{bmatrix}1&1\\0&1\end{bmatrix}$, an invertible triangular matrix over $F_2$, so the rows of $H$ are independent. Therefore $H$ is a parity-check matrix by [L1]; the field operations are valid by [F1]. [F1, F2, L1, L2, given, algebra]

1.2 Direct multiplication gives the weight-at-most-one syndromes $s(000)=00$, $s(100)=10$, $s(010)=11$, and $s(001)=01$, all distinct. For $r=101$, [L3] gives $s(r)=Hr=(1+0,0+1)=11$, so the unique matching error is $e=010$ and $r-e=111$. The distinct syndromes give the one-error correction in [L4]. [L1, L3, L4, given, algebra]

1.3 If coordinates $0,1$ are erased in $r=101$, the received value at coordinate $2$ is $1$, so $111$ is compatible and $000$ is not. More generally, two compatible codewords would differ only in $S$, so their distance would be at most $2<3$, contradicting [L4]. Hence $111$ is the unique completion. [L4, given, algebra]

2.1 If instead $000$ is sent, the two-bit error $e=110$ produces $r'=110$. Then $d_H(r',000)=2$ but $d_H(r',111)=1$, so $111$ is the unique radius-one decoding candidate. The unique-radius-one rule therefore miscorrects this word; [L4] gives no correction guarantee for the two-bit error. [L4, given, algebra] ∎

## Remarks

Coordinates are zero-based. The example distinguishes a single unknown error from two known erasures and from two unknown errors; the code is guaranteed to correct one unknown error, while known locations carry stronger information.
