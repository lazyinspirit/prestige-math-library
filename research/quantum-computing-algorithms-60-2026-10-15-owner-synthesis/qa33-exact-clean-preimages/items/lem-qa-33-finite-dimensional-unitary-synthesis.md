---
id: lem-qa-33-finite-dimensional-unitary-synthesis
kind: lemma
title: Effective synthesis of fixed-dimensional unitaries
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-33-effective-finite-matrix-encoding
  - lem-qa-33-normalized-clifford-t-su2-package-dense
  - thm-qc-solovay-kitaev-bit-complexity
  - def-qc-circuit-cost-model
  - def-qc-tensor-register-and-permutation
  - thm-qc-one-qubit-euler-decomposition
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - lem-qc-fixed-dimension-interval-arithmetic
  - def-qc-two-level-unitary
justified_by: []
proof_strategy: direct
axiom_use: None; the decomposition is a finite constructive matrix algorithm.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: Chapter 3, unitary decompositions and finite-dimensional circuit constructions
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 2, PDF pp. 15–18; fixed-width synthesis and gate approximation
---

## Statement

Fix a nonnegative integer $q$ and dimension $D=2^q$, independent of input length. Given a $D\times D$ unitary whose entries have polynomial-time Cauchy names from a finite description and a rational $0<\eta<1/2$, a deterministic polynomial-time procedure outputs a circuit on its $q$ data wires, with a constant number of clean ancillas returned to zero, for which there is a unit scalar $\lambda$ with $\|V-\lambda U\|\le\eta$. The procedure has polynomial bit cost and polynomial gate count in the description length and $1/\eta$. Scalar phase is immaterial only for this unconditional circuit. The construction uses complex Givens elimination with robust pivoting, a constant-width decomposition into unconditional one-qubit $SU(2)$ rotations and CNOT gates, and the finite-precision compiler of [[thm-qc-solovay-kitaev-bit-complexity]]. Its exact reversible-control subconstruction gives Toffoli from $H,T,T^\dagger,\mathrm{CNOT}$ by the parity-phase identity in the proof.

## Facts & Assumptions

**Given:** Fixed $D=2^q$, an effectively encoded unitary $U\in U(D)$, and rational $0<\eta<1/2$.

[F1] [[def-qa-33-effective-finite-matrix-encoding]]: each matrix entry has a deterministic polynomial-time Cauchy approximation procedure.

[F2] [[lem-qa-33-normalized-clifford-t-su2-package-dense]]: the normalized inverse-closed Clifford–T representatives are dense in $SU(2)$.

[F3] [[thm-qc-solovay-kitaev-bit-complexity]]: an $SU(2)$ target supplied by a polynomial-time Cauchy name can be compiled over the fixed finite gate set to operator error $\epsilon$ in polynomial bit time and polynomial word length in the target precision parameters.

[F4] [[def-qc-tensor-register-and-permutation]]: the ordered tensor-register convention fixes computational-basis indices and factor order.

[F5] [[thm-qc-one-qubit-euler-decomposition]]: every $SU(2)$ matrix is a product $R_z(\alpha)R_y(\beta)R_z(\gamma)$.

[F6] [[def-qc-cnot-and-control-target-order]]: CNOT flips its target exactly when the named control is one.

[F7] [[lem-qc-fixed-dimension-interval-arithmetic]]: fixed-dimensional sums, products, quotients with lower-bounded denominators, square roots, and matrix exponentials have polynomial-time Cauchy approximations.

[F8] [[def-qc-two-level-unitary]]: a two-level unitary acts by a stated $2\times2$ unitary block on two ordered basis vectors and by identity on their orthogonal complement.

[F9] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $R_z(\theta)$ and $R_y(\theta)$ have their exact exponential matrix definitions and period $4\pi$; $H,T,T^\dagger$ retain the exact QC14 phases.

[F10] [[def-qc-circuit-cost-model]]: gate count, wire count, and full-list generator time are separate circuit costs that must each be bounded.

## Proof

1.1 If $D=1$, output the empty circuit: the scalar $1\times1$ unitary is immaterial up to the allowed whole-circuit phase. Assume $D\ge2$. First construct exact computational-basis transpositions for row pivoting. For bit strings $x,y$, flip their differing positions in order to form a Gray path $g_0=x,\ldots,g_d=y$. The adjacent swap $g_j\leftrightarrow g_{j+1}$ is an $X$ on their differing bit, controlled on the other $q-1$ fixed bits; negative controls are changed to positive by surrounding $X$ gates. A conjunction of at least two controls is computed into clean bits by a chain of Toffoli gates, the target $X$ is applied under the last conjunction bit, and the chain is reversed; zero controls use $X$ and one control uses CNOT. Toffoli is exact over the gate alphabet: for bits $a,b,c$, $4abc=a+b+c-(a\oplus b)-(a\oplus c)-(b\oplus c)+(a\oplus b\oplus c).$ Compute each parity into a clean bit by CNOTs, apply $T$ for positive terms and $T^\dagger$ for negative terms, and uncompute; the resulting phase is $(-1)^{abc}$. Conjugating the third bit by $H$ gives Toffoli. The product of swaps along the path except its last edge, followed by the last swap and the reversed prefix, is exactly the transposition of $x,y$. In column $j$, earlier columns have already been made zero below row $j$, so the remaining tail has norm one by unitarity. Approximate its entry magnitudes to error at most $1/(8D)$ and choose the least row among those with largest approximate magnitude as pivot; the selected exact magnitude is at least $1/\sqrt D-1/(4D)\ge1/(2\sqrt D)$. Move that row to $j$ by the exact transposition just constructed, which preserves earlier zeros. For each lower entry $b$ and pivot $a$, use the determinant-one Givens block $r^{-1}\begin{pmatrix}\bar a&\bar b\\-b&a\end{pmatrix}$, $r=(|a|^2+|b|^2)^{1/2}$; direct multiplication sends $(a,b)^T$ to $(r,0)^T$. The pivot remains bounded below, so every division is conditioned and no exact zero test is needed. Fixed dimension, [F7], and the pivot lower bound give polynomial-time Cauchy names for the Givens factors and a diagonal unitary remainder. If the recorded left multipliers are $Q_1,\ldots,Q_s$, the terminal upper-triangular unitary is $\Delta=Q_s\cdots Q_1U$; its first column has only a unit-modulus first entry, orthogonality forces the rest of the first row to vanish, and induction on the trailing principal block shows $\Delta$ is diagonal. Hence $U=Q_1^{-1}\cdots Q_s^{-1}\Delta$, an exact factorization in reverse chronological application order. [F1, F4, F6, F7, F8, F9, algebra]

2.1 Each Givens factor from step 1.1 is an $SU(2)$ block on two basis strings $x,y$, in the two-level sense of [F8]. Flip their differing bit positions in order to form a Gray path $g_0=x,\ldots,g_d=y$. Controlled-$X$ gates on the other fixed bits swap $g_j,g_{j+1}$ for $j<d-1$; the final controlled one-qubit block acts on $(g_{d-1},y)$, and reversing the swaps gives the exact two-level action. With middle block $X$, the same path conjugation is the exact basis transposition used in step 1.1. When $q=1$, the Givens block is itself an unconditional one-qubit $SU(2)$ gate. For $q\ge2$, reduce each multi-control to one control by computing its $q-1$-bit conjunction into clean bits with the exact Toffoli gates from step 1.1 and then uncomputing. For a one-controlled $SU(2)$ block, choose $R_z(\alpha)R_y(\beta)R_z(\gamma)$. For $R=R_z$ or $R_y$, the chronological sequence “apply $R(\theta/2)$ to the target, CNOT, apply $R(-\theta/2)$ to the target, CNOT” has denotation $\operatorname{CNOT}(I\otimes R(-\theta/2))\operatorname{CNOT}(I\otimes R(\theta/2)).$ On control $0$ the two rotations cancel; on control $1$, $XR(-\theta/2)X=R(\theta/2)$ by the exact $R_y,R_z$ matrices in [F9], so the active block is $R(\theta)$. This proves the controlled Euler product using only unconditional one-qubit rotations and CNOTs. Since each $R_z$ and $R_y$ has period $4\pi$ by [F9], form a rational angle mesh of spacing at most $\eta/(100C_D)$ on $[0,4\pi]^3$, evaluate each candidate product and the target using [F7] to precision $\eta/(100C_D)$, and select the first whose certified distance is at most $\eta/(4C_D)$. Here $C_D$ is a fixed upper bound for the total number of one-qubit factors in the fixed-$D$ decomposition. The Euler decomposition and $||R_a(u)-R_a(v)||\le|u-v|/2$ ensure a mesh product lies within $\eta/(8C_D)$ of the target, so this search succeeds with $O((C_D/\eta)^3)$ candidates and no exact-real branch test. [F4, F5, F6, F7, F8, F9, step 1.1, algebra]

2.2 Factor the diagonal remainder as $\Delta=d_0\operatorname{diag}(1,(d_z/d_0)_{z\ne0})$. Since $|d_0|=1$, every ratio $\widetilde d_z=d_z/d_0$ is a unit scalar with a polynomial-time Cauchy name by [F7]: the denominator has the uniform lower bound one. For each $z\ne0$, choose a bit position where $z$ is one, compute the condition that all other bits match $z$, and apply $\operatorname{diag}(1,\widetilde d_z)$ to the chosen bit controlled by that condition; this phases $|z\rangle$ and leaves its partner with chosen bit zero unchanged. If $q=1$ the condition is empty and the phase is unconditional. The common factor $d_0$ is the single global scalar for the complete diagonal remainder. Approximate each $\widetilde d_z$ by scanning an $M$-point rational angle grid, with $M\ge16\pi D/\eta$, and accept a grid point whose certified chordal distance is at most $4\pi/M$; a nearest grid point is within $\pi/M$, so a valid one is found after $O(M)$ evaluations using [F7]. Write its phase as $e^{i\theta}$. For $q\ge2$, the controlled phase $\operatorname{diag}(1,e^{i\theta})$ equals a phase $\operatorname{diag}(1,e^{i\theta/2})$ on the control times controlled $R_z(\theta)$, since $\operatorname{diag}(1,e^{i\theta})=e^{i\theta/2}R_z(\theta)$. The control phase is $e^{i\theta/4}R_z(\theta/2)$, an unconditional one-qubit rotation up to global scalar. For $q=1$, use the unconditional identity $\operatorname{diag}(1,e^{i\theta})=e^{i\theta/2}R_z(\theta)$. Thus the diagonal remainder is implemented by unconditional rotations, CNOTs and the fixed conjunction circuits above, with total phase error at most $\eta/4$, since there are fewer than $D$ entries and $M\ge16\pi D/\eta$. [F4, F6, F7, step 1.1, algebra]

3.1 All one-qubit rotations in steps 2.1–2.2 are unconditional factors. Compile their determinant-one matrices using [F2]–[F3]; any scalar phases from normalized Clifford–T letters then multiply the full circuit by a single global scalar, never a control block. Since $D$ is fixed, let $M_D\ge1$ be a fixed upper bound on the number of one-qubit factors. The accepted mesh approximations in step 2.1 contribute at most $\eta/4$ total error, and step 2.2 contributes at most $\eta/4$ for diagonal phases. Request Solovay–Kitaev error at most $\eta/(2M_D)$ for each factor, so synthesis contributes at most $\eta/2$. After factoring out whole-circuit scalars, the telescoping identity bounds total operator error by the sum, at most $\eta$. The Givens pivots stay at least $1/(2\sqrt D)$; the Euler mesh has $O((C_D/\eta)^3)$ candidates and each diagonal phase grid has $O(D/\eta)$ candidates, with fixed $C_D,D$. The certified arithmetic precision and each $SU(2)$ compiler's bit time are polynomial in the encoding length and $1/\eta$. In the coordinates of [F10], the output gate count and wire count are polynomial, as is the deterministic full-list generator time; the ancilla count is constant because the fixed-dimensional decompositions reuse clean work bits. [F1, F2, F3, F7, F8, F10, step 2.1, step 2.2, algebra] ∎
