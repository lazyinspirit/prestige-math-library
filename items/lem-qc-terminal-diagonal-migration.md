---
id: lem-qc-terminal-diagonal-migration
kind: lemma
title: Two-CNOT Synthesis up to a Migrating Terminal Diagonal
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - thm-qc-two-qubit-cartan-decomposition
  - thm-qc-two-qubit-unitary-three-cnot-synthesis
  - thm-qc-axis-rotation-pauli-formula
  - def-qc-pauli-matrices
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-polar-form-with-unique-principal-argument
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-determinant-multiplicative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, Theorem 14 and Appendix A.2"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Vivek V. Shende, Igor L. Markov, and Stephen S. Bullock, Smaller Two-Qubit Circuits for Quantum Communication and Computation"
      url: https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50704
---

## Statement

Every $U\in U(4)$ factors exactly as $U=\Delta V$, where $\Delta$ is diagonal in the ordered two-qubit computational basis and $V$ has a no-ancilla circuit with at most two CNOTs and arbitrary one-qubit gates. Scalar phases are retained. Consequently, if a chronological circuit has $N\ge1$ arbitrary two-qubit slots all on the same two wires and each separator preserves every computational label on those two wires, the slots can be synthesized using at most $2(N-1)+3$ CNOTs in total, leaving the separator operations unchanged. This counts only the slots' CNOTs.

## Facts & Assumptions

**Given:** Exact matrices, arbitrary one-qubit gates, and both orientations of CNOT. In the second assertion each separator $S$ has the form $\sum_{x\in\{0,1\}^2}|x\rangle\langle x|\otimes S_x$ after grouping the two slot wires first.

[F1] [[thm-qc-two-qubit-cartan-decomposition]] gives $U=e^{i\delta}(A\otimes B)N(a,b,c)(C\otimes E)$, with local $SU(2)$ factors and $N(a,b,c)=\exp(i(aXX+bYY+cZZ))$; here $XX=X\otimes X$, and similarly for $YY,ZZ$.

[F2] [[def-qc-pauli-matrices]] specifies $X,Y,Z$; they square to identity and satisfy $XY=iZ$, $YZ=iX$, $ZX=iY$ by matrix multiplication.

[F3] [[thm-qc-axis-rotation-pauli-formula]] gives $R_j(t)=\cos(t/2)I-i\sin(t/2)\sigma_j$.

[F4] [[def-qc-cnot-and-control-target-order]] gives $C|a,b\rangle=|a,b\oplus a\rangle$ for first-wire control.

[F5] [[thm-qc-two-qubit-unitary-three-cnot-synthesis]] gives an exact three-CNOT synthesis for the last arbitrary slot, including its scalar phase.

[F6] [[def-qc-circuit-denotational-semantics]] places later chronological operations to the left in a matrix product.

[F7] [[def-qc-elementary-circuit-resources]] counts the stated gate occurrences and wires.

[F8] [[thm-polar-form-with-unique-principal-argument]] supplies real arguments for unit complex scalars; [[thm-sine-and-cosine-parametrize-the-unit-circle]] supplies an angle for each real unit-circle pair; [[thm-determinant-multiplicative]] supplies multiplicativity of determinants.

## Proof


1.1 Normalize $U$ to $U_0=\lambda^{-1}U\in SU(4)$ with $|\lambda|=1$: unitarity and the determinant permutation formula give $|\det U|=1$, so choose $\lambda=e^{i\arg(\det U)/4}$ using [F8]. Put $J=YY$ and $\gamma(W)=WJW^{\mathsf T}J$. For a $2\times2$ matrix $A$, direct multiplication gives $AYA^{\mathsf T}=(\det A)Y$. Therefore local $K=A\otimes B$ with $A,B\in SU(2)$ satisfies $KJK^{\mathsf T}=J$. It follows by substitution and cyclicity of trace that $\operatorname{tr}\gamma(K_1WK_2)=\operatorname{tr}\gamma(W)$ for local $SU(2)$ matrices $K_1,K_2$. This identity uses transpose, not adjoint. [given, F1, F2, F8, algebra, choose]

2.1 Put $P=ZZ$ and $D(t)=e^{itP}=\cos t\,I+i\sin t\,P$. Since $P$ is diagonal with two $+1$ and two $-1$ entries, $D(t)$ is diagonal unitary with determinant one. Also $JP=PJ$ and $D(t)^{\mathsf T}=D(t)$. Hence $\operatorname{tr}\gamma(D(t)U_0)=\operatorname{tr}(D(t)^2\gamma(U_0))=\cos(2t)\operatorname{tr}\gamma(U_0)+i\sin(2t)\operatorname{tr}(P\gamma(U_0))$. Its imaginary part is $a_0\cos(2t)+b_0\sin(2t)$, with real $a_0=\operatorname{Im}\operatorname{tr}\gamma(U_0)$ and $b_0=\operatorname{Re}\operatorname{tr}(P\gamma(U_0))$. If both vanish, take $t=0$. Otherwise choose $\cos(2t)=b_0/(a_0^2+b_0^2)^{1/2}$, $\sin(2t)=-a_0/(a_0^2+b_0^2)^{1/2}$, possible by [F8]. Thus $V=D(t)U_0\in SU(4)$ has real $\operatorname{tr}\gamma(V)$. [step 1.1, F2, F8, algebra, choose]

3.1 Apply [F1] to $V$. The determinant of each local factor and of $N(a,b,c)$ is one: the latter follows from the simultaneous Pauli eigenvalue sign lists $(+,-,+,-)$, $(-,+,+,-)$ and $(+,+,-,-)$ in the Cartan proof, each with sum zero. Thus $e^{4i\delta}=1$ and $e^{2i\delta}\in\{1,-1\}$. The commuting symmetric matrices $XX,YY,ZZ$ commute with $J$, so $\gamma(N)=N^2$. Expand their exponentials using [F2]. Since $XX\,YY\,ZZ=-I$ and all nonconstant products except this triple are traceless, $\operatorname{tr}\gamma(V)=e^{2i\delta}4(\cos(2a)\cos(2b)\cos(2c)+i\sin(2a)\sin(2b)\sin(2c))$. Its imaginary part is zero, so at least one Cartan coordinate is an integer multiple of $\pi/2$. [step 1.1, step 2.1, F1, F2, F8, algebra]

4.1 If, for example, $c=k\pi/2$, its factor is $e^{icZZ}=i^k(ZZ)^k$, a scalar times a product of one-qubit Pauli gates. It commutes with the other Cartan factors and can be absorbed into the exterior local factors. The same applies to $a$ or $b$. Simultaneous conjugation on both qubits by a one-qubit rotation permuting the Pauli axes moves the absent coordinate to $ZZ$. Such permutations are obtained from $R_x(\pi/2),R_y(\pi/2),R_z(\pi/2)$ in [F3]; their conjugations exchange the other two axes up to signs, and each sign is squared in a Pauli product. Thus $V$ is a scalar times exterior local gates and $N(\alpha,\beta,0)$ for real $\alpha,\beta$. All scalar factors are retained as one-qubit scalar gates. [step 3.1, F2, F3, algebra]

5.1 Let $L=R_x(\pi/2)\otimes R_x(\pi/2)$ and let $C$ be [F4]. Its basis action gives $C(X\otimes I)C=XX$ and $C(I\otimes Z)C=ZZ$. Formula [F3] gives $LXXL^*=XX$ and $LZZL^*=YY$ (each rotated $Z$ is $-Y$). Therefore the exact identity $N(\alpha,\beta,0)=LC(R_x(-2\alpha)\otimes R_z(-2\beta))CL^*$ follows by exponentiating the commuting generators. This uses two CNOTs and one-qubit gates only. Combined with step 4.1 it synthesizes $V$ with two CNOTs. Since $V=D(t)\lambda^{-1}U$, the required diagonal is $\Delta=\lambda D(t)^{-1}$ and $U=\Delta V$ exactly. No CNOT is spent implementing $\Delta$ in this factorization assertion. [step 2.1, step 4.1, F2, F3, F4, F7, algebra]

6.1 Write the first two chronological slots as $U_1,S_1,U_2$. By step 5.1, $U_1=\Delta_1V_1$, so the product in [F6] is $U_2S_1\Delta_1V_1$. The separator hypothesis gives $S_1(\Delta_1\otimes I)=(\Delta_1\otimes I)S_1$ branch by branch, even if its $S_{1,x}$ act on several other wires. The product becomes $(U_2\Delta_1)S_1V_1$. The next slot is still an arbitrary unitary on the same two wires. Factor it again and continue. Each of the first $N-1$ slots now uses at most two CNOTs; the final accumulated slot uses at most three by [F5]. All diagonals are absorbed, every separator is unchanged, and no wire is added. For $N=1$ the process performs no migration and uses only the three-CNOT base case. This proves the count $2(N-1)+3$ and exact equality. [step 5.1, F5, F6, F7, induction, algebra] ∎

