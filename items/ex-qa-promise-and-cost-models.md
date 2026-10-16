---
id: ex-qa-promise-and-cost-models
kind: example
title: "Promise, query and cost-model examples"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-task-and-promise-domain
  - def-qa-promise-query-instance
  - def-qa-quantum-query-algorithm
  - def-qa-exact-promise-correctness
  - def-qa-quantum-query-complexity
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
  - def-qa-classical-bit-cost
  - def-promise-preserving-reduction
  - def-qc-clifford-t-gate-library
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-dirac-notation-conversion
  - thm-qc-unit-vector-projector-is-density
  - def-matrix-product-and-identity-matrix
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Example

**Decision reduction.** Let the source decision task have $Y_S=\{0\}$ and $N_S=\{1\}$, and let the target task have $Y_T=\{00\}$ and $N_T=\{11\}$. Define the total map $r(x)=xx$ by concatenating $x$ with itself. Inputs outside either one-bit source promise have no correctness obligation.

**Search reduction.** Let the source search domain be $D_S=\{0\}$ with relation $R_S(z,w)$ iff $z=0$ and $w\in\{00,01\}$. Let the target domain be $D_T=\{00\}$ with relation $R_T(y,v)$ iff $y=00$ and $v\in\{0,1\}$. Define the total instance map $r(z)=00$ and the total witness map $L(z,v)=0v$.

**A total two-bit-output query instance.** Write every four-bit instance as $z=u\mathbin{\|}v$, where $u,v\in\{0,1\}^2$. Define
$$
f_z(0)=u,\qquad f_z(1)=v.
$$
This is a total function on both addresses for every $z\in\{0,1\}^4$. Give it the decision promise $Y=\{z:u=00\}$ and $N=\{z:u=11\}$. Instances with $u=01$ or $u=10$ are off-promise.

Use the exact one-query procedure that starts with address $|0\rangle$ and target $|00\rangle$, calls $U_{f_z}$ once, measures the two-bit target in the computational basis, and answers yes exactly when the result is $00$. Compare it with the same procedure preceded by two Hadamard gates on the first target bit. Resource counts for these circuits use the declared QC gate, query, measurement, and classical-readout coordinates.

| Procedure | Oracle queries | Nonoracle quantum gates | Extra clean ancillas | Measurement/readout | Classical bit work |
|---|---:|---:|---:|---|---|
| Decision reduction $r(x)=xx$ | 0 | not applicable | not applicable | not applicable | $O(|x|)$ transitions |
| One-query circuit | 1 | 0 | 0 | One computational-basis measurement of the two-bit target; two bits read out | $O(1)$ transitions to compare the measured value with $00$ and write one output bit |
| Same query with $H$ then $H$ on target bit 0 | 1 | 2 | 0 | One computational-basis measurement of the two-bit target; two bits read out | $O(1)$ transitions to compare the measured value with $00$ and write one output bit |

The two query circuits both perform one oracle call even though the reply has two bits. Their gate counts differ while their query count and output law agree.

## Facts & Assumptions

**Given:** The two decision/search task pairs, the maps $r,L$, and the four-bit query family defined in the Example.

[F1] [[def-qa-task-and-promise-domain]]: decision tasks require the stated yes/no output only on the disjoint promise pair; search tasks require a witness in the stated relation only on their domain.

[F2] [[def-qa-promise-query-instance]]: each promised instance selects a total function on every address, and one call to its coherent XOR oracle is one query, independent of output width.

[F3] [[def-qa-quantum-query-algorithm]]: a query circuit applies the specified XOR-oracle calls to its address and target registers.

[F4] [[def-qa-exact-promise-correctness]]: exact correctness means the required decision or witness event has probability one on each promised input.

[F5] [[def-qa-quantum-query-complexity]]: query cost counts designated oracle calls over promised inputs and branches.

[F6] [[def-qa-nonoracle-gate-cost]]: nonoracle elementary gates are counted separately from black-box oracle calls.

[F7] [[def-qa-classical-bit-cost]]: address/reply processing and output writing count as Turing transitions, separate from the oracle invocation.

[F8] [[def-promise-preserving-reduction]]: a total polynomial-time map is a decision promise reduction when it maps source yes-instances to target yes-instances and source no-instances to target no-instances.

[F9] [[def-qc-clifford-t-gate-library]]: the exact Hadamard matrix is $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F10] [[def-qa-finite-branch-output-law]]: terminal computational-basis weights are finite sums of density-operator diagonal weights over unobserved wires, and the finite branch law is normalized.

[F11] [[def-matrix-product-and-identity-matrix]]: matrix products are computed by finite row-by-column sums and the identity matrix acts as the multiplicative identity.

[F12] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]] give the orthonormal computational basis of each $Q_2$ factor. Equip their ordered tensor product with the product inner product of [[def-qc-tensor-register-and-permutation]]; then [[lem-qc-tensor-product-basis-and-dimension]] makes the bit-string product basis orthonormal.

[F13] [[def-qc-dirac-notation-conversion]]: for the root pairing, linear in its first argument, $|u\rangle\langle u|v=\langle v,u\rangle_{\rm root}u$.

[F14] [[thm-qc-unit-vector-projector-is-density]]: the rank-one projector of a unit vector is a density operator.

## Verification

1.1 A multitape machine computes $r(x)=xx$ by copying $x$ twice, using $O(|x|+1)$ transitions under [F7], so $r$ is total and polynomial time. Moreover, $r(0)=00\in Y_T$ and $r(1)=11\in N_T$, giving $r(Y_S)\subseteq Y_T$ and $r(N_S)\subseteq N_T$. Thus $r$ is a promise-preserving reduction by [F8]. No image condition is needed for source strings outside $\{0,1\}$. [F1, F7, F8, construct]

1.2 For the search reduction, the only promised source input is $z=0$, and $r(0)=00\in D_T$. Every valid target witness is $v\in\{0,1\}$, so $L(0,v)=0v$ is either $00$ or $01$ and satisfies $R_S(0,L(0,v))$. Both maps are total as defined on all binary strings, even though witness validity is required only on the promise. [F1, construct]

1.3 For every four-bit $z=u\mathbin{\|}v$, the table assigns one two-bit value to address 0 and one to address 1, so $f_z$ is total on its two-address domain. Starting at target $00$, the oracle call at address 0 returns $00\oplus f_z(0)=u$; it is one invocation and therefore one query by [F2]–[F3]. [given, F2, F3, algebra]

2.1 The full output state after the oracle call is the basis vector $\psi=|0\rangle|u\rangle$, which is a unit vector by orthonormality [F12]. Its rank-one projector $\rho=|\psi\rangle\langle\psi|$ is a density operator by [F14]. For output word $y$ and remaining address bit $a$, the product basis is orthonormal by [F12], so $\langle e_{y,a},\psi\rangle=1$ exactly when $(y,a)=(u,0)$ and is zero otherwise. The projector formula [F13] gives $\rho e_{y,a}=\langle e_{y,a},\psi\rangle\psi$; root first-linearity and conjugate symmetry therefore give $\langle\rho e_{y,a},e_{y,a}\rangle=\langle e_{y,a},\psi\rangle\langle\psi,e_{y,a}\rangle=|\langle e_{y,a},\psi\rangle|^2$. Summing over the unmeasured address bit as in [F10] gives output weight one at $u$ and zero elsewhere. If $u=00$ the rule answers yes; if $u=11$ it answers no, so the solver is exact on the promise by [F4]. For off-promise $u\in\{01,10\}$ the same rule outputs no, but the decision task imposes no condition there; the two total completions assigning either answer on these inputs agree on $Y\cup N$. [F1, F4, F10, F12, F13, F14, step 1.3]

2.2 The matrix in [F9] satisfies $H^2=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ by finite row-by-column multiplication [F11]. Therefore the two extra gates in the second circuit return the first target bit to its initial value before the same oracle call. The target entering $U_{f_z}$ is again $00$, so both query circuits have the same output law and one query; their nonoracle gate counts are 0 and 2 by [F5]–[F6]. [F5, F6, F9, F11, step 1.3, algebra]

3.1 Step 1.1 gives the reduction's linear transition bound in the table. In either query circuit, the fixed two-bit reply and one-bit output rule take $O(1)$ transitions. These transition counts are separate from the one oracle query and from the quantum gate counts by [F7]. [F7, step 1.1, step 2.2, construct] ∎
