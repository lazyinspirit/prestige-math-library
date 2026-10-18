---
id: thm-qc-tqc-b6-su5-density
kind: theorem
title: Exact five-dimensional Fibonacci B6 density
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-six-anyon-encoded-subspace
  - lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
  - lem-qc-tqc-fibonacci-coefficient-ring-specialization
  - ex-qc-tqc-fibonacci-data
  - lem-qc-tqc-fusion-tree-dimension
  - lem-qc-irrational-rotation-dense-on-circle
  - thm-cartans-closed-subgroup-theorem
  - prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra
  - def-countable-choice
  - ex-unitary-and-special-unitary-lie-groups
  - lem-qc-tqc-special-unitary-connected
dependency_level: 8
axiom_use: Assumes exactly ACω for Cartan's closed-subgroup theorem and the Lie-algebra supplier; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21; cross-check only
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
---

## Statement

Assume $\mathrm{AC}_\omega$. In the normalized Fibonacci B6 representation on
$V(\tau^6\to1)\cong\mathbb C^5$, the closure of the braid image in $U(5)$
contains $SU(5)$.

## Facts & Assumptions

**Given:** The fixed Fibonacci convention, the normalized generators
$B_i=rI+(1-r)P_i$, the total-charge-$1$ fusion-path basis, and
$\mathrm{AC}_\omega$.

[F1] The path projectors are orthogonal, satisfy the adjacent and distant
relations, and the normalized matrices are a unitary B6 representation.
[[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]]

[F2] The coefficient field $\mathbb Q(r,\sqrt\phi)$ has the stated
degree-eight presentation and admits the exact $\mathbb F_{31}$
specialization. [[lem-qc-tqc-fibonacci-coefficient-ring-specialization]]

[F3] Integer powers of a circle rotation with irrational angle are dense.
[[lem-qc-irrational-rotation-dense-on-circle]]

[F4] Under $\mathrm{AC}_\omega$, a closed subgroup of a finite-dimensional
real Lie group is a Lie subgroup, and its Lie algebra is bracket closed.
[[thm-cartans-closed-subgroup-theorem]]
[[prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]]

[F5] $\mathfrak{su}(n)$ consists of the trace-zero skew-Hermitian matrices.
A real basis is given by $i(E_{jj}-E_{nn})$ for $j<n$ and, for each $j<k$,
$E_{jk}-E_{kj}$ and $i(E_{jk}+E_{kj})$. Thus its real dimension is
$(n-1)+2\binom n2=n^2-1$, which is $24$ for $n=5$.
[[ex-unitary-and-special-unitary-lie-groups]]

[F6] $SU(5)$ is path connected.
[[lem-qc-tqc-special-unitary-connected]]

[F7] Fusion-tree dimensions are counted by summing products of the vertex
multiplicities over all admissible internal charges.
[[lem-qc-tqc-fusion-tree-dimension]]

[F8] The current Fibonacci data carrier states $\tau\otimes\tau=1\oplus\tau$
and fixes $R_\tau/R_1=e^{-3\pi i/5}$ and the displayed unitary $F$ block in
the stated gauge. [[ex-qc-tqc-fibonacci-data]]

[A1] $\mathrm{AC}_\omega$ is countable choice, the exact axiom in [F4].
[[def-countable-choice]]

[A2] Assume the Fibonacci fusion rule and the fixed-chirality $F/R$ data
stated in [[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]].

## Proof

1.1 Write $u=\phi^{-1}$ and $r=R_\tau/R_1=e^{-3\pi i/5}$ by [F8]. The fusion-tree recurrence [F7] gives $\dim V(\tau^2\to1)=\dim V(\tau^2\to\tau)=1$, $\dim V(\tau^3\to1)=1$, $\dim V(\tau^3\to\tau)=2$, and $\dim V(\tau^4\to1)=2$. The five paths in $\mathcal P_1$ therefore decompose by the charge of the first three strands as one dimension from charge $1$, and $2\cdot2=4$ dimensions from charge $\tau$: the latter are two copies of the same two-dimensional three-strand block. On the first summand $C:=B_1B_2^{-1}$ is $1$. On each two-dimensional summand, $B_1=\operatorname{diag}(1,r)$ and $B_2=FB_1F$ with $F^2=I$, so direct multiplication gives $\det C=1$ and $\operatorname{tr}C=r+r^{-1}+(2-r-r^{-1})u^2=u^2=\phi^{-2}$; the last equality uses $u^2+u=1$, since $(2+u)u^2=1$. Consequently the full spectrum is $1,e^{i\theta},e^{-i\theta}$, with the last two eigenvalues each repeated twice and $2\cos\theta=\phi^{-2}$. [F1, F7, F8, A2, algebra]

2.1 The algebraic number $\phi^{-2}$ has minimal polynomial $x^2-3x+1$, whose other root is $\phi^2>2$. If $e^{i\theta}$ were a root of unity, then $e^{i\theta}+e^{-i\theta}$ and every algebraic conjugate of that sum would be sums of two roots of unity and therefore have absolute value at most $2$. The conjugate $\phi^2>2$ contradicts this. Thus $\theta/(2\pi)$ is irrational. [given, step 1.1, algebra]

3.1 Let $H$ be the closure of the normalized B6 image in $U(5)$. The powers of $C$ contain a dense subgroup of the circle $\operatorname{diag}(1,e^{it}I_2,e^{-it}I_2)$, by [F3] and step 2.1. Therefore the nonzero tangent $X=C-C^{-1}$ belongs to $\operatorname{Lie}(H)$. [F3, step 2.1, construct]

4.1 Define $Y_0=X$ and, with $\operatorname{Ad}_i(Y)=B_iYB_i^{-1}$, define the remaining $23$ words in order by $$Y_1=\operatorname{Ad}_1Y_0,\ Y_2=\operatorname{Ad}_2Y_0,\ Y_3=\operatorname{Ad}_3Y_0,\ Y_4=[Y_3,Y_0],\ Y_5=[Y_3,Y_1],\ Y_6=[Y_3,Y_2],\ Y_7=\operatorname{Ad}_3Y_1,\ Y_8=\operatorname{Ad}_3Y_2,\ Y_9=\operatorname{Ad}_2Y_3,\ Y_{10}=\operatorname{Ad}_4Y_3,$$ $$Y_{11}=\operatorname{Ad}_2Y_4,\ Y_{12}=\operatorname{Ad}_4Y_4,\ Y_{13}=\operatorname{Ad}_4Y_5,\ Y_{14}=\operatorname{Ad}_4Y_6,\ Y_{15}=[Y_{10},Y_3],\ Y_{16}=[Y_{10},Y_4],\ Y_{17}=[Y_{10},Y_5],\ Y_{18}=[Y_{10},Y_6],\ Y_{19}=[Y_{10},Y_7],\ Y_{20}=[Y_{10},Y_8],\ Y_{21}=[Y_{10},Y_9],\ Y_{22}=[Y_{12},Y_0],\ Y_{23}=[Y_{12},Y_1].$$ Conjugation by an element of $H$ preserves $\operatorname{Lie}(H)$, and [F4] makes that Lie algebra bracket closed, so every $Y_j$ lies in it. Each is traceless and skew-Hermitian: this holds for $X$ because $C$ is unitary with spectrum invariant under inversion, and is preserved by unitary conjugation and commutators. [F1, F4, step 3.1, algebra]

5.1 By [F2], every coefficient of the $Y_j$ matrices lies in $\mathbb Z[r,\sqrt\phi]$ with all denominators units. Reduce coefficients modulo $31$ using $r\mapsto15$, $r^{-1}\mapsto29$, $\phi\mapsto19$, $\sqrt\phi\mapsto9$; for conjugated coefficients first replace $r$ by $r^{-1}$ in the number field. The exact integer-arithmetic certificate `research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-lie-rank-certificate.py` forms the $24\times24$ matrix whose rows are the first $24$ row-major coordinates of $Y_0,\ldots,Y_{23}$ and returns determinant $17$ in $\mathbb F_{31}$. Since the reduction is a ring homomorphism, a zero algebraic determinant would reduce to zero; the determinant is therefore nonzero over $\mathbb C$. Tracelessness lets the omitted coordinate be recovered from the other $24$, so the $Y_j$ are linearly independent. [F2, step 4.1, algebra]

6.1 The determinant of each $B_i$ is $r^3$ by [F1], so $\det(H)\subseteq\langle r^3\rangle$ is finite. The connected group $H^0$ therefore has determinant $1$, and $\operatorname{Lie}(H)=\operatorname{Lie}(H^0)\subseteq\mathfrak{su}(5)$. Step 4.1 places $24$ linearly independent traceless skew-Hermitian matrices in this Lie algebra; by [F5], its dimension is $24$, so $\operatorname{Lie}(H)=\mathfrak{su}(5)$. Thus $H^0$ has full dimension and is an open subgroup of $SU(5)$. By [F6], $SU(5)$ is connected; an open subgroup is also closed because its complement is a union of open cosets. Hence $H^0=SU(5)$, and the closure contains $SU(5)$. [A1, A2, F1, F4, F5, F6, step 4.1, step 5.1, algebra] ∎

## Remark

The proof constructs exactly $Y_0,\ldots,Y_{23}$ from the shared initial
tangent $X=C-C^{-1}$ by conjugations and Lie brackets. The listed
$24\times24$ minor has exact determinant $17$ modulo $31$, so these
24 Lie words are independent; each generator has determinant $r^3$. These are the precise projection data used
by the joint-closure argument; they are not a separate acceptance result.
