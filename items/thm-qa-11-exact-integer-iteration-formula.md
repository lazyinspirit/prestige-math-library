---
id: thm-qa-11-exact-integer-iteration-formula
kind: theorem
title: Exact success probability after an integer number of Grover iterates
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
proof_strategy: direct
deps:
  - alg-qa-11-grover-iterate
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-inner-product-space
  - def-qa-finite-branch-output-law
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-register-and-computational-basis
  - lem-qa-11-good-bad-decomposition
  - lem-qa-11-grover-invariant-plane-rotation
  - lem-qc-tensor-product-basis-and-dimension
  - thm-qa-bit-query-to-phase-query
  - thm-qc-computational-basis-orthonormal
  - thm-qc-unit-vector-projector-is-density
  - thm-sine-and-cosine-addition-formulas
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
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

For $0<t<N$, let $\theta=\arcsin\sqrt{t/N}$. After an integer $k\ge0$ Grover iterates starting from $|s\rangle$, the probability of measuring a marked address is
$$p_k=\sin^2((2k+1)\theta).$$
For $t=0$ this probability is $0$, and for $t=N$ it is $1$ for every integer $k\ge0$; these endpoint cases are direct one-dimensional branches and do not normalize a nonexistent marked or unmarked state.

## Facts & Assumptions

**Given:** The finite marked-search instance and the Grover iterate.

[F1] [[lem-qa-11-good-bad-decomposition]]: for $0<t<N$, $|s\rangle$ has coordinate column $(\cos\theta,\sin\theta)^{\mathsf T}$ in the ordered basis $(|B\rangle,|G\rangle)$.

[F2] [[lem-qa-11-grover-invariant-plane-rotation]]: $G$ acts on that plane by the matrix $\begin{pmatrix}\cos2\theta&-\sin2\theta\\\sin2\theta&\cos2\theta\end{pmatrix}$.

[F3] [[alg-qa-11-grover-iterate]]: each iteration applies $G=R_sO_M$ to the address and leaves the phase-kickback response in $|-\rangle$.

[F4] [[thm-qa-bit-query-to-phase-query]]: phase kickback applies the phase mark and returns the response qubit to $|-\rangle$.

[F5] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine of a sum obey their addition formulas.

[F6] [[def-qa-finite-branch-output-law]]: a terminal address outcome has weight equal to the sum of the diagonal state weights over all unmeasured register values.

[F7] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2x+\cos^2x=1$.

[F8] [[thm-qc-unit-vector-projector-is-density]]: for a unit vector $u$, $|u\rangle\langle u|$ is a density operator.

[F9] [[def-inner-product-space]]: the root inner product is conjugate-symmetric and linear in its first argument.

[F10] [[thm-qc-computational-basis-orthonormal]]: the full address/response computational basis is orthonormal.

[F11] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|z=\langle z,v\rangle_{\rm root}u$.

[F12] [[def-qc-register-and-computational-basis]]: the address and response registers form an ordered tensor-product register.

[F13] [[lem-qc-tensor-product-basis-and-dimension]]: the product basis is orthonormal and the tensor-product pairing is the product of factor pairings.

[F14] [[thm-qa-bit-query-to-phase-query]]: the response is prepared by $X$ then $H$ into $|-\rangle$ and is returned unchanged by phase kickback.

[F15] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $X$ and $H$ are the exact unitary one-qubit gates in the ordered computational basis.

## Proof

1.1 For $k=0$, the address coordinate column is $(\cos\theta,\sin\theta)^{\mathsf T}$ by [F1], which is $(\cos((2k+1)\theta),\sin((2k+1)\theta))^{\mathsf T}$. [given, F1, algebra]

2.1 If after $k$ iterations the column is $(\cos((2k+1)\theta),\sin((2k+1)\theta))^{\mathsf T}$, multiplication by the matrix in [F2] and the addition formulas [F5] gives $(\cos((2k+3)\theta),\sin((2k+3)\theta))^{\mathsf T}$. Induction therefore gives the marked amplitude $\sin((2k+1)\theta)$ for every integer $k\ge0$. [step 1.1, F2, F5, induction]

3.1 The address vector at step 2.1 is unit by [F1] and [F7]. The response starts in the unit basis vector $|0\rangle$ and the gates $X,H$ in [F15] are unitary, so the response state $|-\rangle$ supplied by [F14] is unit. Their tensor product $u$ is unit by the product pairing [F12]–[F13], and [F8] makes $\rho=|u\rangle\langle u|$ a density operator. [step 2.1, F1, F3, F4, F7, F8, F10, F12, F13, F14, F15, algebra]

4.1 For each product-basis vector $e_{x,b}$, [F9] and [F11] give the diagonal weight $\langle\rho e_{x,b},e_{x,b}\rangle=|\langle e_{x,b},u\rangle|^2$. By step 2.1, the address coordinate along $|G\rangle$ is $\sin((2k+1)\theta)$; the definition $|G\rangle=t^{-1/2}\sum_{x\in M}|x\rangle$ in [F1] therefore gives coefficient $\sin((2k+1)\theta)/\sqrt t$ at each marked $x$. The squared response coordinates sum to $1$ because $|−\rangle$ is unit and the qubit computational basis is orthonormal by [F10], [F14]–[F15]. Summing over the $t$ marked addresses and both response values gives $t(\sin^2((2k+1)\theta)/t)\cdot1=\sin^2((2k+1)\theta)$. The terminal output law [F6] sums precisely over the unmeasured response register, so this is the measured marked probability. [step 2.1, step 3.1, F1, F6, F9, F10, F11, F13, F14, F15, algebra]

5.1 If $t=0$, $O_M=I$ and $R_s|s\rangle=|s\rangle$, so all iterates remain in the unmarked subspace and the marked probability is $0$. If $t=N$, $O_M=-I$ and each iterate maps $|s\rangle$ to $-|s\rangle$; every address is marked, so the probability is $1$. [given, F3, algebra] ∎
