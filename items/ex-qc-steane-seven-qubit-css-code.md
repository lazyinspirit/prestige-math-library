---
id: ex-qc-steane-seven-qubit-css-code
kind: example
title: Steane seven-qubit CSS code
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qc-classical-linear-code-over-finite-field
  - def-qc-generator-and-parity-check-matrices
  - def-qc-hamming-weight-distance-and-linear-code-distance
  - def-qc-pauli-matrices
  - def-qc-stabilizer-syndrome-and-logical-operators
  - lem-qc-binary-dual-dimension
  - thm-qc-css-encoding-dimension-and-commutation
  - thm-qc-css-syndrome-correction
  - thm-qc-stabilizer-projector-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

Let the columns of the binary parity-check matrix be the seven nonzero
vectors $110,101,011,111,100,010,001$:

$$H=\begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix}.$$

Put $C_1=\ker H$ and $C_2=\operatorname{row}(H)$. A generator matrix for
$C_1$ is $G^{\mathsf T}$, where the row-basis matrix $G$ is

$$G=\begin{pmatrix}1&0&0&0&1&1&0\\0&1&0&0&1&0&1\\0&0&1&0&0&1&1\\0&0&0&1&1&1&1\end{pmatrix}.$$

The encoded basis is

$$|0_L\rangle=8^{-1/2}\sum_{c\in C_2}|c\rangle,\qquad |1_L\rangle=8^{-1/2}\sum_{c\in C_2}|1110000+c\rangle.$$

The six stabilizer checks are the three $X$ operators with supports given by
the rows of $H$, followed by the three $Z$ operators with the same supports.
The logical operators may be taken as
$X_L=X^{1110000}$ and $Z_L=Z^{1110000}$. For site $j$, write $h_j$ for
column $j$ of $H$. With the stated generator order, the three single-site
syndromes are

$$s(X_j)=(000,h_j),\qquad s(Z_j)=(h_j,000),\qquad s(Y_j)=(h_j,h_j).$$

## Facts & Assumptions

**Given:** The displayed binary matrices, the standard dot product, and the Pauli matrices on the ordered seven-qubit register.

[F1] [[def-qc-generator-and-parity-check-matrices]]: a parity-check matrix $H$ defines the code $\ker H$, and its independent rows span the bilinear dual of that code.

[F2] [[thm-qc-css-encoding-dimension-and-commutation]]: nested binary codes give orthonormal coset states, with commuting $X$ and $Z$ checks.

[F3] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a syndrome bit records whether an error anticommutes with its ordered Hermitian generator.

[F4] [[thm-qc-stabilizer-projector-and-dimension]]: $r$ independent stabilizer checks on $n$ qubits have code dimension $2^{n-r}$.

[F5] [[thm-qc-css-syndrome-correction]]: the separate CSS syndromes identify and correct the bounded-weight $X$ and $Z$ components under the stated distance inequality.

[F6] [[lem-qc-binary-dual-dimension]]: for a binary code in length $n$, $\dim C^\perp=n-\dim C$.

## Verification

1.1 The columns of $H$ are the seven distinct nonzero elements of $\mathbb F_2^3$, so they span $\mathbb F_2^3$ and $\operatorname{rank}H=3$. The first four columns of $G$ form the identity matrix, so $G$ has full row rank $4$. Direct coordinate dot products give $HG^{\mathsf T}=0$, so the row space of $G$ lies in $\ker H$. Rank-nullity gives $\dim\ker H=7-3=4$; therefore $\operatorname{row}(G)=C_1$ and $\dim C_1=4$. [F1, algebra]

2.1 The rows of $H$ are independent because $\operatorname{rank}H=3$. Their pairwise dot products are zero: each row has weight four and every two distinct rows overlap in two coordinates. Hence $HH^{\mathsf T}=0$, so $C_2\subseteq C_1$ and $\dim C_2=3$. The quotient dimension is $k=4-3=1$. Every vector in $C_1=\ker H$ is orthogonal to every row of $H$, so $C_1\subseteq C_2^\perp$; both dimensions are $4$ by step 1.1 and [F6], so $C_1=C_2^\perp$. Also $HG^{\mathsf T}=0$ and $C_1=\operatorname{row}(G)$, so $C_2=\operatorname{row}(H)\subseteq C_1^\perp$; both dimensions are $3$, hence $C_2=C_1^\perp$. [F1, F2, F6, step 1.1, algebra]

2.2 No weight-one vector lies in $C_1$ because every column of $H$ is nonzero. No weight-two vector lies in $C_1$ because its syndrome is the sum of two distinct columns, which is nonzero. The vector $x=1110000$ is in $C_1$ because $h_1+h_2+h_3=0$. Thus $d(C_1)=3$. [F1, step 1.1, algebra]

3.1 Every nonzero word of $C_2$ is a nonzero linear functional evaluated on the seven nonzero vectors of $\mathbb F_2^3$. Such a functional is $1$ on exactly four of the eight vectors, and is $0$ on the zero vector, so every nonzero word of $C_2$ has weight four. Therefore $x\notin C_2$, $X_L$ and $Z_L$ represent nontrivial logical classes, and their commutator is $(-1)^{x\cdot x}=(-1)^3=-1$. [F1, F2, F3, step 2.1, algebra]

3.2 The row spaces of $H$ used for the $X$ and $Z$ checks commute because $HH^{\mathsf T}=0$. Their six labels are independent: the three $X$-type labels are independent among themselves, the three $Z$-type labels are independent among themselves, and the two label halves are separate. Hence $r=6$ and [F4] gives code dimension $2^{7-6}=2$. These checks stabilize the two displayed coset states by [F2]. [F2, F4, step 2.1, algebra]

4.1 The columns $h_1,\ldots,h_7$ are nonzero and pairwise distinct. By steps 2.1 and 2.2, $d(C_1)=d(C_2^\perp)=3$, so [F5] applies with $t=1$. The syndrome formulas in the Example follow by counting the overlaps between $X_j,Z_j,Y_j$ and each ordered check. The three syndrome blocks distinguish the Pauli type, and within each type the nonzero distinct column $h_j$ identifies the site. Thus all $21$ single-site Pauli errors have distinct syndromes and are corrected by [F5]. [F3, F5, step 2.1, step 2.2, step 3.2, algebra] ∎
