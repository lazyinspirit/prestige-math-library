---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-qc-computational-basis-stabilizer-tableau.json
  precheck: pass
id: lem-qc-computational-basis-stabilizer-tableau
kind: lemma
title: Computational basis states have an extended stabilizer tableau
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-stabilizer-tableau
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
dependency_level: 16
proof_strategy: direct
sources:
  references:
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For $n\ge0$ and a bit string $x=(x_0,\ldots,x_{n-1})\in\mathbb F_2^n$, the
basis state $|x\rangle$ has rows indexed by $a=1,\ldots,n$ given by
$s_{j+1}=(-1)^{x_j}Z_{j+1}$ and $d_{j+1}=X_{j+1}$ for each $0\le j<n$.
Their labels satisfy the extended tableau pairing conditions.

## Facts & Assumptions

**Given:** The ordered computational basis of an $n$-qubit register and
$x=(x_0,\ldots,x_{n-1})\in\mathbb F_2^n$.

[F1] [[def-qc-register-and-computational-basis]]: the ordered tensor register
has the lexicographically ordered computational basis; for $n=0$ it is
$\mathbb C$ with basis $\{1\}$.

[F2] [[def-qc-ordered-bitstring-encoding]]: the first wire is the most
significant bit and coordinate $x_j$ occupies factor position $j$, which is
Pauli wire $j+1$ by [F9].

[F3] [[def-qc-pauli-group-on-zero-qubits]]: when $n=0$, the ambient Pauli
group is scalar and the empty generator list generates $\{I\}$.

[F4] [[thm-qc-computational-basis-orthonormal]]: the computational basis of
each factor $Q_2$ is orthonormal.

[A1] [[def-qc-stabilizer-tableau]]: a row $(k,u,v)$ represents
$P(k,u,v)=i^kX^uZ^v$ and row pairings are computed by $\omega$.

[F5] [[def-qc-binary-symplectic-form]]:
$\omega((u,v),(u',v'))=u\cdot v'+v\cdot u'$.

[F6] [[thm-qc-binary-pauli-quotient-isomorphism]]: a nonzero binary label
cannot represent a scalar Pauli.

[F7] [[thm-qc-pauli-algebra]] and [[def-qc-pauli-matrices]]: on the
one-qubit basis, $X|b\rangle=|b\oplus1\rangle$ and
$Z|b\rangle=(-1)^b|b\rangle$, and both are Hermitian involutions.

[F8] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: Pauli rows commute
exactly when their label pairing is zero.

[F9] [[def-qc-phase-aware-n-qubit-pauli-group]]: Pauli wire $a\in\{1,\ldots,n\}$
is tensor factor $a-1$; its $X_a$ and $Z_a$ operators act on that factor.

[F10] [[def-qc-tensor-register-and-permutation]]: elementary tensors of factor
basis vectors form a basis, and their inner product is the product of factor
inner products. For $n=0$ the space is $\mathbb C$, with $\langle1,1\rangle=1$.

## Proof

**Given:** The data in the Statement.

1.1 By [F4] and [F10], $\langle |x\rangle,|y\rangle\rangle=\prod_{j<n}\delta_{x_jy_j}=\delta_{xy}$ for computational words $x,y$, including the empty product $1$ when $n=0$. Thus this basis is orthonormal and $|x\rangle$ is normalized. For each $0\le j<n$, [F7] and [F9] give $Z_{j+1}|x\rangle=(-1)^{x_j}|x\rangle$, so $s_{j+1}=(-1)^{x_j}Z_{j+1}$ fixes $|x\rangle$. In the same basis each $s_{j+1}$ is a real diagonal involution and each $d_{j+1}=X_{j+1}$ flips bit $j$, an involutive permutation; hence all these rows are Hermitian involutions. [F1, F2, F4, F7, F9, F10, given]

2.1 For $0\le i,j<n$, the labels of $s_{j+1}$ are $(0,e_j)$ and of $d_{i+1}=X_{i+1}$ are $(e_i,0)$. Therefore $\omega(d_{i+1},s_{j+1})=e_i\cdot e_j=\delta_{ij}$, which is the required pairing $\delta_{i+1,j+1}$; pairings within either family vanish by [F5]. By [F8], the stabilizer rows commute. Since they are involutions, every generated element is a product over a subset of the rows. A nonempty subset has nonzero label by independence and the label homomorphism [F6], so is not scalar; the empty subset gives $I$. Thus the generated group excludes $-I$. For $n=0$, the empty row families generate $\{I\}$ by [F3], and all pairing and independence conditions hold vacuously. [A1, F3, F5, F6, F8, F9, step 1.1, algebra] ∎

## Sources

Aaronson–Gottesman §III, PDF pp. 3–4, gives the identity tableau for
computational-basis input. De Wolf §20.1, PDF p. 185, notes that every basis
state is a stabilizer state:
https://arxiv.org/pdf/quant-ph/0406196;
https://arxiv.org/pdf/1907.09415.

## Remarks

The schematic separates the exact phase from the binary label. Here
$e_j\in\mathbb F_2^n$ is the coordinate vector for bit position $j$, and
$k$ is read modulo $4$. Each row type is repeated for $0\le j<n$,
so together they give all $2n$ rows. The pairing matrix uses the grouped
order $d_1,\ldots,d_n,s_1,\ldots,s_n$ on both axes.

```tikz
\begin{tikzpicture}
\node[draw, rounded corners, inner sep=12pt] at (0,0) {$\begin{array}{c|c|c|c}
\mathrm{row\ on\ wire}\ j+1 & k & u & v \\\hline
 d_{j+1}=X_{j+1} & 0 & e_j & 0 \\
 s_{j+1}=(-1)^{x_j}Z_{j+1} & 2x_j & 0 & e_j
\end{array}$};
\node at (0,-1.35) {$\mathrm{bit\ position}\ j\quad\longleftrightarrow\quad\mathrm{Pauli\ wire}\ j+1$};
\node[draw, rounded corners, inner sep=12pt] at (0,-2.9) {$\begin{array}{c|cc}
\omega & (d_1,\ldots,d_n) & (s_1,\ldots,s_n) \\\hline
(d_1,\ldots,d_n) & 0 & I_n \\
(s_1,\ldots,s_n) & I_n & 0
\end{array}$};
\end{tikzpicture}
```

The phase identity $i^{2x_j}=(-1)^{x_j}$ gives the stabilizer row above.
The blocks follow from $e_i\cdot e_j=\delta_{ij}$ and the label formula
in step 2.1; they are over $\mathbb F_2$. For $n=0$, both row families
and the pairing matrix are empty. The proof above is independent of this
schematic.
