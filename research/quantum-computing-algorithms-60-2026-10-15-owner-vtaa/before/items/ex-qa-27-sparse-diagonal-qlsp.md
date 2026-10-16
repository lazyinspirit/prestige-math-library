---
id: ex-qa-27-sparse-diagonal-qlsp
kind: example
title: "Sparse diagonal block-encoded linear system"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-27-block-encoded-qlsp
  - thm-qa-24-qsvt-singular-space-action
  - def-qa-22-block-encoding
  - def-qa-23-qsp-signal-sequence
justified_by: []
proof_strategy: direct
axiom_use: "None; the example uses exact finite matrices and scalar inequalities."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 17, Theorem 41, and the degree-one QSP construction, PDF pp.18–20 and 36–38."
---

## Example

Let $A=\operatorname{diag}(1,1/2)$, $\alpha=1$, $\gamma=\delta=1/2$, and $|b\rangle$ be either basis vector. Take the exact one-ancilla block encoding
$$S=\sqrt{I-A^2}=\operatorname{diag}(0,\sqrt3/2),\qquad U=\begin{pmatrix}A&S\\S&-A\end{pmatrix}.$$
For the inverse target use the odd polynomial $p(x)=x/2$, degree one, and error $e=1/4$. A supplied real-QSVT extraction phase list is $\Phi=(0,\pi/3)$ together with its conjugate list $-\Phi$.

## Facts & Assumptions

**Given:** The matrix, block, input states, $\delta=1/2$, and the supplied phase lists specified in the Example.

[F1] [[def-qa-22-block-encoding]]: the block encoding is exact when the all-zero ancilla compression equals $A/\alpha$ and the encoding unitary is unitary.

[F2] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)=\begin{pmatrix}x&\sqrt{1-x^2}\\\sqrt{1-x^2}&-x\end{pmatrix}$ and a degree-one sequence is $Z(\phi_0)W_R(x)Z(\phi_1)$ with $Z(\phi)=\operatorname{diag}(e^{i\phi},e^{-i\phi})$.

[F3] [[thm-qa-24-qsvt-singular-space-action]]: the coherent $\Phi/-\Phi$ extraction has compressed block equal to the singular-value transform of the real part of the upper-left polynomial.

## Verification

1.1 The matrices $A,S$ are self-adjoint, commute, and satisfy $A^2+S^2=I$. Thus $U^*=U$ and $U^2=\begin{pmatrix}A^2+S^2&AS-SA\\SA-AS&S^2+A^2\end{pmatrix}=I$. The all-zero ancilla compression of $U$ is its top-left block $A$, so [F1] gives an exact $(1,1,0)$ block encoding. [given, F1, algebra]

1.2 The diagonal entries of $A$ are its singular values. Both inputs are supported on singular values at least $\gamma=1/2$, and $\|A\|_{\rm op}=\alpha=1$, so $\delta=\gamma/\alpha=1/2$. For $x\in[1/2,1]$, $-x\le2x^2-1\le x$ because $2x^2+x-1=(2x-1)(x+1)\ge0$ and $x-(2x^2-1)=(1-x)(2x+1)\ge0$. Hence $|p(x)-\delta/(2x)|=|2x^2-1|/(4x)\le1/4$. Also $p$ is odd, has degree one, satisfies $p(0)=0$, and $|p(x)|\le1/2$ on $[-1,1]$. [given, algebra]

1.3 For $\Phi=(0,\pi/3)$, [F2] gives upper-left entry $e^{i\pi/3}x$; the conjugate list gives $e^{-i\pi/3}x$. Their coherent real extraction is $\frac12(e^{i\pi/3}+e^{-i\pi/3})x=\frac12x=p(x)$ by [F3]. Thus the exact response multipliers on the two singular vectors are $p(1)=1/2$ and $p(1/2)=1/4$. [given, F2, F3, algebra]

2.1 For $|b\rangle=|0\rangle$, the QSVT success probability is $|p(1)|^2=1/4$ and the ideal inverse-block probability is $|(\delta/2)(1/1)|^2=1/16$. For $|b\rangle=|1\rangle$, these probabilities are $|p(1/2)|^2=1/16$ and $|(\delta/2)(1/(1/2))|^2=1/4$. Each successful state is the same basis vector as the normalized QLSP solution because the singular space is one-dimensional and both multipliers are positive. For the optional Bernstein reciprocal check, set $x=(1+u)/2$ for $0\le u\le1$. Then the two polynomials are $\frac14(2x^2+x-1)=\frac18(3u+u^2)$ and $\frac14(1+x-2x^2)=\frac18(2-u-u^2)$, with degree-two Bernstein coefficient lists $(0,3/16,1/2)$ and $(1/4,3/16,0)$. All coefficients are nonnegative, so the finite reciprocal certificate is valid. [F1, F3, step 1.2, step 1.3, algebra] ∎
