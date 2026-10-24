---
id: lem-qc-rz-epsilon-region-equivalence
kind: lemma
title: The exact operator-norm epsilon region for determinant-one Rz candidates
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-ancilla-free-rz-approximation-problem
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 11
---

## Statement

Let $\theta\in\mathbb R$, $0<\varepsilon<1/2$, and
$$U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}\in SU(2).$$
Then
$$\|R_z(\theta)-U\|_{\mathrm{op}}\le\varepsilon\quad\Longleftrightarrow\quad\operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2.$$

## Facts & Assumptions

**Given:** The exact matrix $R_z(\theta)$, the displayed determinant-one
matrix $U$, and the finite-dimensional operator norm.

[F1] [[def-qc-ancilla-free-rz-approximation-problem]]:
$R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-
dimensional normal complex matrix has an orthonormal eigenbasis.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
$\|A\|_{\mathrm{op}}=\max_{\|x\|=1}\|Ax\|$ for a nonzero finite-dimensional
domain.

[F4] [[thm-sine-and-cosine-parametrize-the-unit-circle]] and
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
every unit complex number has a real angle, and Euler's formula gives
$e^{it}+e^{-it}=2\cos t$ and $|1-e^{it}|^2=2-2\cos t$.

## Proof


1.1 Put $\Delta=R_z(\theta)^*U$. It is unitary and has determinant $1$, so [F2] diagonalizes it. Its eigenvalues $\lambda,\mu$ have modulus one by unitarity and satisfy $\lambda\mu=1$ by the determinant, hence $\mu=\bar\lambda$. By [F4], write $\lambda=e^{it}$ with $t\in[0,2\pi)$; if $t>\pi$, swap $\lambda,\mu$ and put $\alpha=2\pi-t$, while if $t\le\pi$ put $\alpha=t$. Thus the eigenvalues are $e^{i\alpha},e^{-i\alpha}$ for some $\alpha\in[0,\pi]$. From the displayed matrices, $\operatorname{tr}\Delta=e^{i\theta/2}u+e^{-i\theta/2}\bar u =2\operatorname{Re}(e^{i\theta/2}u)$. Hence $\cos\alpha= \operatorname{Re}(e^{i\theta/2}u)$. [F1, F2, F4, given, algebra]

2.1 Left multiplication by $R_z(\theta)^*$ preserves vector norms, so [F3] gives $\|R_z(\theta)-U\|_{\mathrm{op}}=\|I-\Delta\|_{\mathrm{op}}$. Let $S$ be a unitary diagonalizer of $\Delta$ from [F2]; conjugation by $S$ preserves the operator norm by [F3]. Using [F4] then gives $\|I-\Delta\|_{\mathrm{op}}^2 =\max(|1-e^{i\alpha}|^2,|1-e^{-i\alpha}|^2) =2-2\cos\alpha =2-2\operatorname{Re}(e^{i\theta/2}u)$. Both the operator norm and $\varepsilon$ are nonnegative, so squaring the bound is equivalent to the stated real-part inequality. [F2, F3, F4, step 1.1, algebra] ∎

