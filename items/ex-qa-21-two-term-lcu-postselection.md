---
id: ex-qa-21-two-term-lcu-postselection
kind: example
title: Two-term LCU postselection is input dependent
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qc-pauli-matrices
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-dirac-notation-conversion
  - thm-qa-21-lcu-block-correctness
  - def-qa-21-clean-ancilla-postselection
  - thm-qa-21-clean-ancilla-postselection-probability-law
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.10)–(28.21), printed pp.141–143: a finite LCU block and its zero-ancilla postselection branch."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Method 2 and Eq. (9.3), printed pp.73–74: the LCU block and input-dependent branch probability."
---

## Example

On a qubit let $M=I+2Z$, with LCU terms $(1,I)$ and $(2,Z)$, so
$\alpha=3$. Use the complete PREPARE unitary
$$P=\begin{pmatrix}1/\sqrt3&-\sqrt{2/3}\\\sqrt{2/3}&1/\sqrt3\end{pmatrix},$$
whose first column prepares $3^{-1/2}|0\rangle+\sqrt{2/3}|1\rangle$, and
explicitly supply inverse access $P^\dagger$. Let SELECT apply $I$ and $Z$ on
the corresponding indices. The projected block is
$$M/3=\begin{pmatrix}1&0\\0&-1/3\end{pmatrix}.$$
For $|\psi\rangle=a|0\rangle+b|1\rangle$ with
$|a|^2+|b|^2=1$, the clean-ancilla branch vector is
$a|0\rangle-(b/3)|1\rangle$ and its weight is
$$p_0=|a|^2+|b|^2/9.$$
The branch is always nonzero, with $1/9\le p_0\le1$; its conditional state is
the branch vector divided by $\sqrt{p_0}$. The least weight occurs at
$a=0$, and the greatest at $b=0$.

## Facts & Assumptions

**Given:** A qubit system, the LCU list $(1,I),(2,Z)$, the complete PREPARE unitary and its explicitly supplied inverse access, SELECT, and a unit input $a|0\rangle+b|1\rangle$.

[F1] [[def-qc-pauli-matrices]]: $Z|0\rangle=|0\rangle$ and $Z|1\rangle=-|1\rangle$.

[F2] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: the qubit basis is orthonormal.

[F3] [[thm-qa-21-lcu-block-correctness]]: a supplied LCU block has clean branch vector $M|\psi\rangle/\alpha$ and weight $\|M|\psi\rangle\|^2/\alpha^2$.

[F4] [[def-qa-21-clean-ancilla-postselection]] and [[thm-qa-21-clean-ancilla-postselection-probability-law]]: a positive branch weight gives the normalized conditional system vector.

## Verification

**Given:** As in Facts & Assumptions.

1.1 The absolute coefficient sum is $\alpha=|1|+|2|=3$. The specified real rotation $P$ is unitary because its columns have norm one and inner product zero by [F2]; its first column is the required prepared index state, and the inverse access is explicitly supplied. SELECT is unitary because it is block diagonal with blocks $I$ and $Z$, and direct multiplication of the matrices in [F1] gives $I^\dagger I=Z^\dagger Z=I$. Thus the access satisfies [F3]. [given, F1, F2, F3, construct, algebra]

2.1 By [F1], $M=I+2Z$ is diagonal with entries $3,-1$, so [F3] gives the projected block $M/3=\operatorname{diag}(1,-1/3)$ and branch vector $a|0\rangle-(b/3)|1\rangle$. Orthonormality in [F2] makes its squared norm $p_0=|a|^2+|b|^2/9$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Since $|a|^2+|b|^2=1$, $p_0=1-(8/9)|b|^2$. The bounds $0\le|b|^2\le1$ give $1/9\le p_0\le1$; equality occurs at $a=0$ and $b=0$, respectively. Thus the branch is nonzero for every unit input and [F4] gives the stated conditional vector. [given, F2, F4, step 2.1, algebra] ∎
