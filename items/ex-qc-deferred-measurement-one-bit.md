---
id: ex-qc-deferred-measurement-one-bit
kind: example
title: "One-bit feed-forward and deferred measurement"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-qc-deferred-measurement
  - def-qc-circuit-denotational-semantics
  - def-qc-controlled-unitary-access
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-qc-pure-state-and-ray
  - def-qc-dirac-notation-conversion
  - thm-qc-ray-projector-well-defined-and-bijective
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
dependency_level: 10
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
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Start two qubits in $|00\rangle$, apply $H$ to the first, measure the first qubit in the computational basis, and apply $X$ to the second qubit if and only if the observed bit is $1$. The final joint computational-basis law is $\Pr(00)=\Pr(11)=1/2$, with the other two outcomes having probability $0$. Replacing the intermediate measurement and classical control by the explicitly granted block gate $C(X)$ and measuring both qubits at the end gives the same law.

## Facts & Assumptions

**Given:** The ordered two-qubit register with initial vector $|00\rangle$. The operation model for this example explicitly grants $H$ and $X$ as ordinary one-qubit gate calls and $C(X)$ as a separate control-first two-qubit gate call. Set
$$H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad C(X)=\begin{pmatrix}I_2&0\\0&X\end{pmatrix}.$$
Direct multiplication gives $H^\dagger H=HH^\dagger=I_2$ and $X^\dagger X=XX^\dagger=I_2$. Hence $C(X)^\dagger C(X)=C(X)C(X)^\dagger=\operatorname{diag}(I_2,I_2)=I_4$, so all three displayed operations are unitary gate data.

[F1] [[def-qc-controlled-unitary-access]]: a controlled operation is the control-first block matrix $C(U)=\operatorname{diag}(I,U)$ when that access is explicitly granted.

[F2] [[def-qc-projective-measurement]]: a projective measurement is a finite family of self-adjoint idempotents, pairwise orthogonal, whose sum is identity.

[F3] [[thm-qc-projective-measurement-outcome-law]]: for a density operator $\rho$ and projectors $(P_a)$, the outcome weights are $\operatorname{tr}(\rho P_a)$.

[F4] [[thm-qc-projective-conditional-state]]: when $p_a>0$, the conditional density is $P_a\rho P_a/p_a$.

[F5] [[def-qc-pure-state-and-ray]] and [[def-qc-dirac-notation-conversion]]: a unit vector $u$ represents the ray with projector $P_u=|u\rangle\langle u|$, acting by $z\mapsto\langle z,u\rangle_{\rm root}u$.

[F6] [[thm-qc-ray-projector-well-defined-and-bijective]]: $P_u$ is non-negative with trace one, hence is a density operator by [[def-qc-density-operator]].

[F7] [[def-qc-circuit-denotational-semantics]]: a chronological gate list is interpreted by its ordered product on the stated register.

[F8] [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]: the ordered two-qubit basis is $|00\rangle,|01\rangle,|10\rangle,|11\rangle$.

## Example

Let $P_0=\operatorname{diag}(1,1,0,0)$ and $P_1=\operatorname{diag}(0,0,1,1)$ in that ordered basis. The measured circuit uses this projective measurement and the classical rule $a\mapsto X^a$ on the target. The coherent replacement uses the explicitly declared $C(X)$ from Given. The finite operation model grants $H$ and $X$ as ordinary calls and $C(X)$ as a separate block-gate call; no controlled access is inferred from the matrix $X$ alone.

## Proof


1.1 Direct multiplication gives $P_0^*=P_0=P_0^2$, $P_1^*=P_1=P_1^2$, $P_0P_1=P_1P_0=0$, and $P_0+P_1=I_4$. Thus $(P_0,P_1)$ is a projective measurement by [F2]. [given, F2, F8, algebra]

1.2 By the matrix $H$ in Given and the circuit semantics [F7], applying $H$ to the first qubit sends the initial vector to $u=(|00\rangle+|10\rangle)/\sqrt2$. The basis in [F8] is orthonormal, so $\|u\|=1$; [F5]–[F6] therefore give the input density $\rho=|u\rangle\langle u|$. [given, F5, F6, F7, F8, algebra]

2.1 The matrix of $\rho$ in [F8] has diagonal $(1/2,0,1/2,0)$ and nonzero off-diagonal entries only in positions $(00,10)$ and $(10,00)$, each $1/2$. Multiplication by the diagonal projectors gives $\operatorname{tr}(\rho P_0)=1/2$ and $\operatorname{tr}(\rho P_1)=1/2$; the outcomes have these probabilities by [F3]. [step 1.1, step 1.2, F3, F8, algebra]

2.2 The explicitly granted block matrix in Given sends $|00\rangle$ to $|00\rangle$ and $|10\rangle$ to $|11\rangle$. It therefore sends the premeasurement vector $u$ from step 1.2 to $u'=(|00\rangle+|11\rangle)/\sqrt2$. The ordered basis in [F8] makes $u'$ a unit vector, so [F5]–[F6] give the density operator $|u'\rangle\langle u'|$. Applying the diagonal projectors gives terminal weights $1/2$ on $00,11$ and zero on $01,10$ by [F3]. Thus the coherent circuit has the same joint law. [step 1.2, F3, F5, F6, F8, algebra]

3.1 By [F4], the normalized conditional states are $P_0\rho P_0/(1/2)=|00\rangle\langle00|$ and $P_1\rho P_1/(1/2)=|10\rangle\langle10|$. On the outcome-$0$ branch the target is unchanged; on the outcome-$1$ branch the matrix $X$ in Given sends $|10\rangle$ to $|11\rangle$. The measured-and-controlled circuit therefore has the joint law stated. [step 1.1, step 1.2, step 2.1, F4, algebra]

4.1 The displayed branches are the one-instrument, one-bit case of the coherent equivalence in [thm-qc-deferred-measurement]. The measurement label stays the first wire and the target update depends on that label. [step 3.1, step 2.2, F1, construct] ∎

