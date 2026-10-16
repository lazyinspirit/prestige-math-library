---
id: ex-qa-34-three-stage-budget
kind: example
title: A three-stage precision budget
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-34-error-budget-allocation
  - thm-qa-34-channel-hybrid-bound
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-povm-and-outcome-law
  - def-non-negative-and-positive-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Example

Take three qubit-to-qubit stage compilers, so $H_0=H_1=H_2=H_3=Q_2$, a global normalized diamond-error target $\varepsilon=3/100$, and the reference register $R=Q_2$. Let $\rho$ be any density operator on $H_0\otimes R$, including an entangled state. Write $e_0,e_1$ for the computational basis of $Q_2$ and put $u_{ab}=e_a\otimes e_b$. On the final register $H_3\otimes R$, use the four-outcome POVM $\mathcal M=\{E_{ab}:a,b\in\{0,1\}\}$ with $E_{ab}x=\langle x,u_{ab}\rangle u_{ab}$. Assume each compiler returns a channel whose local normalized diamond error is at most the precision budget it receives; the allocation procedure passes $1/100$ to each compiler.

## Facts & Assumptions

**Given:** Three matching pairs of ideal and implemented finite-dimensional channels, global target $\varepsilon=3/100$, and the stated local compiler guarantee.

[F1] [[alg-qa-34-error-budget-allocation]]: for $L\ge1$, the allocated local precision is $\varepsilon_j=\varepsilon/L$.

[F2] [[thm-qa-34-channel-hybrid-bound]]: the normalized diamond error of a finite channel composition is at most the sum of its local normalized errors, and every final POVM outcome law on a finite reference input differs by at most that sum in total variation.

[F3] [[def-qc-density-operator]]: $\rho$ is a nonnegative trace-one operator on the nonzero finite-dimensional input-reference register.

[F4] [[def-qc-register-and-computational-basis]], [[thm-qc-computational-basis-orthonormal]], [[def-qc-tensor-register-and-permutation]], and [[lem-qc-tensor-product-basis-and-dimension]]: $(u_{ab})_{a,b\in\{0,1\}}$ is an orthonormal basis of $H_3\otimes R$.

[F5] [[def-non-negative-and-positive-operator]]: an endomorphism is nonnegative when it is self-adjoint and its quadratic form is nonnegative; [[def-qc-povm-and-outcome-law]] defines a finite POVM as nonnegative effects summing to the identity.

## Verification


1.1 With $L=3$, the allocator sets $\varepsilon_j=(3/100)/3=1/100$ for each $j\in\{1,2,3\}$. [given, F1, algebra]

1.2 For each $a,b$, the tensor pairing in [F4] gives $\langle E_{ab}x,y\rangle=\langle x,u_{ab}\rangle\langle u_{ab},y\rangle=\langle x,E_{ab}y\rangle$, so $E_{ab}$ is self-adjoint. Since $\|u_{ab}\|=1$, $E_{ab}^2=E_{ab}$ and $\langle E_{ab}x,x\rangle=|\langle x,u_{ab}\rangle|^2\ge0$. The basis expansion from [F4] gives $\sum_{a,b}E_{ab}=I$; hence the family is a finite POVM by [F5]. [F4, F5, algebra]

2.1 Each local error is therefore at most $1/100$. Applying [F2], the composed channel error is at most $1/100+1/100+1/100=3/100=\varepsilon$. [given, step 1.1, F2, algebra]

3.1 The input $\rho$ and the four-outcome POVM meet the reference and measurement hypotheses of [F2] by [F3] and step 1.2. Their outcome laws for the ideal and implemented composites therefore differ in total variation by at most $3/100$. [given, F2, F3, step 2.1, step 1.2] ∎

