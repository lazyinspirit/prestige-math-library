---
id: ex-qa-19-hypercube-for-n-one-and-two
kind: example
title: Small hypercube transfer
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - alg-qa-19-hypercube-state-transfer
  - thm-qa-19-hypercube-transfer-correctness
  - def-qa-19-finite-matrix-dynamics
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - thm-qa-19-measurement-distribution
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-quarter-turn-values-and-shift-formulas
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.2
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.2, PDF p.82 (printed p.74): the Boolean hypercube is a tensor product of edge graphs and its opposite-corner transfer."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian evolution convention; the n=1,2 calculations are local."
---

## Example

For the one-dimensional Boolean hypercube, $A_1=X$. For the two-dimensional
Boolean hypercube in the ordered basis $(|00\rangle,|01\rangle,|10\rangle,
|11\rangle)$,
$$A_2=X\otimes I+I\otimes X=\begin{pmatrix}0&1&1&0\\1&0&0&1\\1&0&0&1\\0&1&1&0\end{pmatrix}.$$
Compute the exact evolution from $|0^n\rangle$ at time $\pi/2$ and verify
the measured opposite corner.

## Facts & Assumptions
**Given:** The edge adjacency $X$, the ordered tensor register, and the
finite-matrix evolution $U_H(t)$.

[F1] [[alg-qa-19-hypercube-state-transfer]]: $A_n=\sum_{j<n}X_j$ and the
input is $e_{0^n}$.

[F2] [[def-qc-register-and-computational-basis]]: the qubit basis is the
ordered standard basis $(e_0,e_1)$ and the tensor-register basis is ordered
lexicographically.

[F3] [[def-qc-tensor-register-and-permutation]]: specified factor bases give
their lexicographically ordered product basis; the product inner product is
the product of the factor inner products, and the empty tensor is $\mathbb C$.

[F4] [[thm-qc-computational-basis-orthonormal]]: the listed register basis is
orthonormal.

[F5] [[def-qa-19-finite-matrix-dynamics]]: $U_H(t)$ acts on a $\lambda$
eigenvector of $H$ by $e^{-it\lambda}$.

[F6] [[thm-complex-exponential-addition-and-real-extension]]:
$e^{z+w}=e^ze^w$.

[F7] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
$e^{it}=\cos t+i\sin t$ for real $t$.

[F8] [[thm-quarter-turn-values-and-shift-formulas]]:
$\cos(\pi/2)=0$ and $\sin(\pi/2)=1$.

[F9] [[thm-qa-19-measurement-distribution]]: basis measurement probability is
the squared modulus of the corresponding output coordinate.

[F10] [[thm-qa-19-hypercube-transfer-correctness]]: for each $n\ge0$,
$U_{A_n}(\pi/2)e_{0^n}=(-i)^n e_{1^n}$ and the measured output is $1^n$ with
probability one.

[F11] [[def-qc-tensor-map]]: tensor maps act factorwise on elementary tensors,
including the empty tensor map as the identity.

## Verification

**Proof technique:** direct.

1.1 Put $f_+=(e_0+e_1)/\sqrt2$ and $f_-=(e_0-e_1)/\sqrt2$. By [F2]–[F4] they form an orthonormal basis, and direct multiplication gives $Xf_+=f_+$ and $Xf_-=-f_-$. By [F5], $U_X(t)$ acts on these vectors by $e^{-it}$ and $e^{it}$. On $f_+$, $\cos t\,I-i\sin t\,X$ acts by $\cos t-i\sin t=e^{-it}$; on $f_-$ it acts by $\cos t+i\sin t=e^{it}$, using [F6]–[F7]. Thus the two maps agree on a basis. At $t=\pi/2$, [F8] yields $U_X(\pi/2)=-iX$, so $U_X(\pi/2)e_0=-i e_1$. [given, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 The displayed matrix for $A_2$ follows by applying $X\otimes I+I\otimes X$ to each of the four basis vectors in [F2] using the tensor-map action [F11]. The four vectors $f_+\otimes f_+$, $f_+\otimes f_-$, $f_-\otimes f_+$, and $f_-\otimes f_-$ form a basis by [F2]–[F3]. On $f_\epsilon\otimes f_\eta$ with $\epsilon,\eta\in\{1,-1\}$, $A_2$ has eigenvalue $\epsilon+\eta$; [F5]–[F6] give evolution coefficient $e^{-i\pi(\epsilon+\eta)/2}=e^{-i\pi\epsilon/2}e^{-i\pi\eta/2}$, which is exactly the coefficient of $U_X(\pi/2)\otimes U_X(\pi/2)$ by [F11]. The operators therefore agree on a basis, and step 1.1 gives $U_{A_2}(\pi/2)=-X\otimes X$. Hence $U_{A_2}(\pi/2)e_{00}=-e_{11}$. [F1, F2, F3, F5, F6, F11, step 1.1, algebra]

3.1 In the $n=1$ case, step 1.1 gives outcome $1$ amplitude $-i$; in the $n=2$ case, step 2.1 gives outcome $11$ amplitude $-1$. Both have squared modulus $1$, so [F9] gives the opposite-corner outcome with probability one in each case. These calculations are the $n=1,2$ instances of [F10]. [step 1.1, step 2.1, F9, F10, algebra] ∎
