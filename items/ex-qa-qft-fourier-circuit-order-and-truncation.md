---
id: ex-qa-qft-fourier-circuit-order-and-truncation
kind: example
title: QFT circuit order and truncation examples
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: [lem-qa-pi-over-two-exceeds-sqrt-two, lem-qa-swap-is-three-cnot-circuit, def-qa-qft-gate-cost-model, alg-qa-exact-binary-qft-circuit, alg-qa-truncated-binary-qft-circuit, def-qa-cyclic-quantum-fourier-transform, def-qc-tensor-register-and-permutation, def-qc-dirac-notation-conversion, def-qc-circuit-denotational-semantics, lem-qc-local-gate-wire-embedding, lem-qc-tensor-product-basis-and-dimension, thm-finite-dimensional-isometry-characterisations, thm-eulers-formula, thm-quarter-turn-values-and-shift-formulas, thm-complex-exponential-addition-and-real-extension, def-operator-norm-on-a-finite-dimensional-inner-product-space, lem-complex-conjugation-and-modulus-laws, thm-qa-truncated-qft-operator-norm-error]
axiom_use: "No choice axiom is used; the four basis states and finite gate lists are enumerated."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Example

For $N=4$ ($n=2$), the positive-sign exact circuit in standard wire order $q_1,q_0$ is $H(q_1)$, then $\mathrm{CP}_2(q_0,q_1)$, then $H(q_0)$, then $\mathrm{SWAP}(q_1,q_0)$. Its matrix in basis order $|00\rangle,|01\rangle,|10\rangle,|11\rangle$ is

$$F_4^+=\frac12\begin{pmatrix}1&1&1&1\\1&i&-1&-i\\1&-1&1&-1\\1&-i&-1&i\end{pmatrix}.$$

If the same register is displayed in reversed wire order $q_0,q_1$, the matrix in that order is $PF_4^+P$, where $P$ swaps the middle two basis vectors:

$$PF_4^+P=\frac12\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&i&-i\\1&-1&-i&i\end{pmatrix}.$$

With cutoff $m=1$, the only controlled phase $\mathrm{CP}_2$ is omitted, while the two Hadamards and final swap remain. The exact circuit has $2$ Hadamards, one controlled phase and one SWAP ($4$ ideal gates, or $6$ gates after expanding the SWAP); the truncated circuit has $2$ Hadamards and one SWAP ($3$ ideal gates, or $5$ with that expansion). Its operator-norm difference from the exact circuit is $\sqrt2$, and the general omitted-gate sum is $\pi/2$ for this $n,m$.

## Facts & Assumptions

**Given:** Two ordered qubits, the Hadamard and controlled-phase matrices below, the positive-sign $N=4$ Fourier matrix, and the wire-swap permutation.

[L1] The gate matrices are $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $\mathrm{CP}_2=\operatorname{diag}(1,1,1,i)$ from [[def-qa-qft-gate-cost-model]].

[L2] The exact chronological gate list and the cutoff-$1$ deletion are those in [[alg-qa-exact-binary-qft-circuit]] and [[alg-qa-truncated-binary-qft-circuit]].

[L3] The positive-sign QFT formula at $N=4$ gives basis amplitudes $(F_4^+)_{y,x}=\tfrac12 e^{\pi ixy/2}$ in binary basis order $00,01,10,11$ ([[def-qa-cyclic-quantum-fourier-transform]]).

[L4] $P$ is the permutation matrix exchanging $|01\rangle$ and $|10\rangle$ and fixing $|00\rangle,|11\rangle$.

[F1] The A-page lemma proves $\sqrt2<\pi/2$ from the cosine series ([[lem-qa-pi-over-two-exceeds-sqrt-two]]).

[F2] A SWAP on two ordered qubits equals the exact three-CNOT circuit ([[lem-qa-swap-is-three-cnot-circuit]]).

[F3] The ideal QFT gate-count model assigns one count to each Hadamard, controlled phase and named SWAP ([[def-qa-qft-gate-cost-model]]).

[F4] A gate on specified wires has a unitary global embedding that acts by the local gate there and by identity elsewhere ([[lem-qc-local-gate-wire-embedding]]).

[F5] A finite-dimensional unitary preserves norms and has inverse its adjoint ([[thm-finite-dimensional-isometry-characterisations]]).

[F6] Euler's formula gives $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$ ([[thm-eulers-formula]]).

[F7] The quarter-turn values include $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, $\cos\pi=-1$, with the shift identities used at $3\pi/2$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F8] On a nonzero finite-dimensional domain, the operator norm is the maximum over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F9] Complex modulus satisfies $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F10] The ordered product basis of the two-qubit register is orthonormal ([[lem-qc-tensor-product-basis-and-dimension]]).

[F11] For cutoff $m=1$, the operator-norm estimate sums $(n-s+1)2\pi/2^s$ over $s=2,\ldots,n$ ([[thm-qa-truncated-qft-operator-norm-error]]).

[F12] The complex exponential satisfies $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L5] Kets denote vectors, and the standard-basis kets are coordinate vectors ([[def-qc-dirac-notation-conversion]]).

[A1] [[def-qc-circuit-denotational-semantics]] identifies the chronological gate list with the right-to-left product of its embedded gate operators.

## Verification

**Proof technique:** direct finite calculation.

**Given:** The two-qubit gate lists and conventions in [L1]–[L4].

1.1 On basis input $|x_1x_0\rangle$, after $H(q_1)$ and $\mathrm{CP}_2(q_0,q_1)$ the $q_1$ factor is $2^{-1/2}(|0\rangle+(-1)^{x_1}i^{x_0}|1\rangle)$; after $H(q_0)$ the $q_0$ factor is $2^{-1/2}(|0\rangle+(-1)^{x_0}|1\rangle)$. The local gate actions are [F4], and their composition in chronological order requires [A1]. Euler's formula and the quarter-turn values [F6,F7] give $e^{i\pi/2}=i$, $e^{i\pi}=-1$, and $e^{3\pi i/2}=-i$. For the nonnegative integer $xy$, iterating [F12] gives $e^{\pi ixy/2}=(e^{i\pi/2})^{xy}=i^{xy}$, with both sides $1$ when $xy=0$. After the final swap the factors are ordered as the $q_0$ factor followed by the $q_1$ factor. Substituting $x_1x_0=00,01,10,11$ gives the four columns $[1,1,1,1]^T$, $[1,i,-1,-i]^T$, $[1,-1,1,-1]^T$, and $[1,-i,-1,i]^T$, each divided by $2$; these are the amplitudes in [L3]. [L1, L2, L3, L5, F4, F6, F7, F12, A1, algebra]

1.2 By [L2,A1], the difference of exact and cutoff operators is $S H(q_0)(\mathrm{CP}_2-I)H(q_1)$, where the left and right factors are unitary: $H^*H=I$, $\mathrm{CP}_2$ is diagonal with unit-modulus entries, and $S$ permutes an orthonormal basis [L1,F5,F9,F10]. Thus left multiplication preserves norms and right multiplication maps the unit sphere onto itself, so the difference has operator norm $\|\mathrm{CP}_2-I\|$ by [F5,F8]. Write a unit vector as $v=\sum_{a,b\in\{0,1\}}c_{ab}|ab\rangle$. By [F10], $\sum_{a,b}|c_{ab}|^2=1$. The operator $\mathrm{CP}_2-I$ sends $v$ to $(i-1)c_{11}|11\rangle$, and [F9] gives $|i-1|^2=(i-1)(-i-1)=2$. Hence $\|(\mathrm{CP}_2-I)v\|^2=2|c_{11}|^2\le2$, with equality at $v=|11\rangle$; [F8] gives $\|\mathrm{CP}_2-I\|=\sqrt2$. The bound in [F11] is $(2-2+1)2\pi/2^2=\pi/2$ for $n=2,m=1$, and [F1] gives $\sqrt2<\pi/2$. [L1, L2, L5, F1, F4, F5, F8, F9, F10, F11, A1, algebra]

2.1 Reversing the displayed wire order permutes both the input and output basis by $P$, so the matrix is $PF_4^+P$ by the tensor-register convention [L4]. Swapping rows and columns $2$ and $3$ gives $\frac12\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&i&-i\\1&-1&-i&i\end{pmatrix}$, which is the displayed reversed-order matrix. [L3, L4, L5, A1, step 1.1, algebra]

3.1 The exact list has $2+1+1=4$ ideal gates, and its one SWAP adds three CNOTs by [F2]; the ideal convention is [F3]. The cutoff list has $2+1=3$ ideal gates and the same three-CNOT expansion. Neither circuit introduces an ancilla. [L1, L2, F2, F3, algebra] ∎
