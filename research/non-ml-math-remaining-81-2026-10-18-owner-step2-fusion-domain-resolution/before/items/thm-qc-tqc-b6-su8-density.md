---
id: thm-qc-tqc-b6-su8-density
kind: theorem
title: Exact eight-dimensional Fibonacci B6 density
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
$V(\tau^6\to\tau)\cong\mathbb C^8$, the closure of the braid image in $U(8)$
contains $SU(8)$.

## Facts & Assumptions

**Given:** The fixed Fibonacci convention, the normalized generators
$B_i=rI+(1-r)P_i$, the total-charge-$\tau$ fusion-path basis, and
$\mathrm{AC}_\omega$.

[F1] The path projectors are orthogonal, satisfy the adjacent and distant
relations, and the normalized matrices are a unitary B6 representation.
[[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]]

[F2] The coefficient field $\mathbb Q(r,\sqrt\phi)$ has the stated
degree-eight presentation and admits the exact $\mathbb F_{31}$
specialization. [[lem-qc-tqc-fibonacci-coefficient-ring-specialization]]

[F3] Integer powers of a circle rotation with irrational angle are dense.
[[lem-qc-irrational-rotation-dense-on-circle]]

[F4] Under $\mathrm{AC}_\omega$, closed subgroups of finite-dimensional Lie
groups are Lie subgroups and their Lie algebras are bracket closed.
[[thm-cartans-closed-subgroup-theorem]]
[[prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]]

[F5] $\mathfrak{su}(n)$ consists of the trace-zero skew-Hermitian matrices.
A real basis is given by $i(E_{jj}-E_{nn})$ for $j<n$ and, for each $j<k$,
$E_{jk}-E_{kj}$ and $i(E_{jk}+E_{kj})$. Thus its real dimension is
$(n-1)+2\binom n2=n^2-1$, which is $63$ for $n=8$.
[[ex-unitary-and-special-unitary-lie-groups]]

[F6] $SU(8)$ is path connected. [[lem-qc-tqc-special-unitary-connected]]

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

1.1 The fusion rule and $F/R$ convention in [F8], together with recurrence [F7], give $\dim V(\tau^3\to1)=1$, $\dim V(\tau^3\to\tau)=2$, and $\dim V(\tau^4\to\tau)=3$. The eight paths in $\mathcal P_\tau$ thus decompose by the first-three-charge label: charge $1$ contributes $1\cdot2=2$ dimensions, and charge $\tau$ contributes $V(\tau^3\to\tau)\otimes V(\tau\otimes\tau^3\to\tau)$ of dimension $2\cdot3=6$. The operator $C:=B_1B_2^{-1}$ is identity on the first summand. On the two-dimensional first-three charge-$\tau$ factor it has determinant $1$ and trace $\phi^{-2}$, so the full spectrum of $C$ is $1$ with multiplicity $2$ and $e^{i\theta},e^{-i\theta}$ each with multiplicity $3$, where $2\cos\theta=\phi^{-2}$. [F1, F7, F8, A2, algebra]

2.1 The minimal polynomial of $\phi^{-2}$ is $x^2-3x+1$, whose other root is $\phi^2>2$. If $e^{i\theta}$ were a root of unity, every algebraic conjugate of its trace $e^{i\theta}+e^{-i\theta}$ would be a sum of two roots of unity and have absolute value at most $2$, contradicting the conjugate $\phi^2$. Thus $\theta/(2\pi)$ is irrational. [given, step 1.1, algebra]

3.1 By [F3], powers of $C$ are dense in the circle $T=\operatorname{diag}(I_2,e^{it}I_3,e^{-it}I_3)$ after choosing an eigenbasis. Let $H$ be the closure of the normalized B6 image in $U(8)$. Then $T\subseteq H$, so the nonzero tangent $X=C-C^{-1}$ lies in $\operatorname{Lie}(H)$. [F3, step 2.1, construct]

4.1 Starting with $Z_0=X$, construct a list as follows, all over $\mathbb F_{31}$ for the independence tests: repeatedly scan $\operatorname{Ad}_i(Z_j)=B_iZ_jB_i^{-1}$ in current-list order $j$ and generator order $i=1,\ldots,5$, appending a word exactly when its specialized row is independent of previous rows. Using the resulting list as a snapshot, scan commutators $[Z_j,Z_i]$ in lexicographic order $j>i$, again appending exactly the independent rows. Repeat full rounds until none is appended. Each accepted word is an adjoint or bracket applied to earlier Lie algebra elements, so it lifts to $\operatorname{Lie}(H)$. Unitary conjugation and commutators preserve traceless skew-Hermitian matrices. [F1, F4, step 3.1, construct]

5.1 [F2] makes reduction of every coefficient and denominator in these words well defined. The exact integer-arithmetic certificate `research/scaffold-audit-2026-10-16/topological-quantum-computing/b6-su8-lie-rank-certificate.py` selects 63 words by the procedure of step 4.1 (the script labels them $Y_0,\ldots,Y_{62}$; this proof renames them $Z_0,\ldots,Z_{62}$) and returns determinant $22$ for the $63\times63$ minor formed from the first $63$ row-major coordinates of these matrices. A zero algebraic determinant would map to zero in $\mathbb F_{31}$; since $22\ne0$, the exact determinant is nonzero. The omitted coordinate is the final diagonal entry, determined by trace zero. Thus the selected traceless skew-Hermitian matrices are linearly independent over $\mathbb C$. [F2, step 4.1, algebra]

6.1 By [F5], $\mathfrak{su}(8)$ has real dimension $63$. Step 5.1 supplies $63$ independent elements of $\operatorname{Lie}(H)$, so $\operatorname{Lie}(H)=\mathfrak{su}(8)$. Each $B_i$ has determinant $r^{8-3}=r^5$ by [F1], hence $\det(H)\subseteq\langle r^5\rangle$ is finite. The identity component therefore lies in $SU(8)$ and has full dimension; it is open there. By [F6], $SU(8)$ is connected, so the identity component equals $SU(8)$. Hence the B6 closure contains $SU(8)$. [A1, A2, F1, F4, F5, F6, step 5.1, algebra] ∎

## Remark

The deterministic scan in step 4.1 constructs exactly 63 Lie words from the
same initial tangent $X=C-C^{-1}$ by conjugations and Lie brackets; the script
prints their names as $Y_0,\ldots,Y_{62}$, which this proof calls
$Z_0,\ldots,Z_{62}$. The exact $63\times63$ minor has determinant $22$
modulo $31$, so these Lie words are independent; each generator has
 determinant $r^5$. These are the projection data used by the
joint-closure argument; they do not assert an efficient braid compiler.
