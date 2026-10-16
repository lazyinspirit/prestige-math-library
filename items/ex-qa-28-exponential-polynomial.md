---
id: ex-qa-28-exponential-polynomial
kind: example
title: A bounded polynomial approximation to a scaled exponential
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-28-qsvt-matrix-function
  - thm-qa-28-polynomial-matrix-function-error
  - thm-qa-28-matrix-function-error-cost
  - def-qa-22-block-encoding
  - alg-qa-22-lcu-block-encoding
  - thm-qa-22-lcu-block-encoding-correctness
  - thm-qa-24-qsvt-singular-space-action
  - def-qa-23-qsp-signal-sequence
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-complex-trigonometric-and-hyperbolic-power-series
  - thm-alternating-series-test
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
axiom_use: "None; the dilation and polynomial estimates are finite-dimensional and follow from square-root algebra and Taylor remainders."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §§2–3"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Example

For $H=\operatorname{diag}(-1/2,1/3)$, take $\alpha=1$ and target $f(x)=e^{-ix}$ on $[-1,1]$. A one-ancilla exact dilation has top-left block $H$. Decompose $f(x)=\cos x-i\sin x$ into the even component $g_0(x)=\cos x$ and odd component $g_3(x)=-\sin x$; the other two components are identically zero and are omitted using their exact zero certificates, so $J=\{0,3\}$. The bounded parity polynomials $p_R(x)=1$ (even, degree $0$) and $p_I(x)=-x$ (odd, degree $1$) use exact QSP phase lists $(0)$ and $(\pi/2,\pi/2)$, respectively, and give an LCU block $(I-iH)/2$, a $2$-block encoding of the linear approximation to $e^{-iH}$. In exact phase and LCU models its normalized top-block error is at most $7/96$.

## Facts & Assumptions

**Given:** $H=\operatorname{diag}(-1/2,1/3)$, $\alpha=1$, exact ideal phase operations and LCU, and the functions and polynomials above.

[F1] [[def-qa-22-block-encoding]]: a unitary whose designated compression is $H$ with normalization one is an exact block encoding of $H$.

[F2] [[alg-qa-28-qsvt-matrix-function]], [[thm-qa-28-matrix-function-error-cost]], [[thm-qa-24-qsvt-singular-space-action]], [[def-qa-23-qsp-signal-sequence]], [[thm-qa-22-lcu-block-encoding-correctness]], and [[thm-qa-28-polynomial-matrix-function-error]]: parity polynomial phase lists give their stated singular transforms, the exact LCU compression is the normalized weighted sum, and scalar error on the spectrum transfers to operator norm.

[F3] [[thm-complex-trigonometric-and-hyperbolic-power-series]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{-ix}=\cos x-i\sin x$, with the usual convergent Taylor series for sine and cosine.

[F4] [[thm-alternating-series-test]]: for an alternating series whose nonnegative term magnitudes decrease to zero, the remainder is bounded by the first omitted term.

## Verification

1.1 Let $S=\sqrt{I-H^2}=\operatorname{diag}(\sqrt3/2,2\sqrt2/3)$ and set $U=\begin{pmatrix}H&S\\S&-H\end{pmatrix}$. Since $S=S^*$, $H=H^*$, and $HS=SH$, $U^*=U$ and $U^2=\begin{pmatrix}H^2+S^2&HS-SH\\SH-HS&S^2+H^2\end{pmatrix}=I$. Thus $U$ is unitary and its top-left block is $H$, proving the exact dilation assertion by [F1]. [F1, given, algebra]

2.1 The real part of $e^{-ix}$ is even and the imaginary part is $-\sin x$, which is odd, by [F3]. For phase list $(0)$ the degree-zero signal sequence has upper-left entry $1$. For $(\pi/2,\pi/2)$, the upper-left entry of $Z(\pi/2)W_R(x)Z(\pi/2)$ is $x e^{i\pi}=-x$, by the sequence definition [F2]. Using the exact dilation from step 1.1, the polynomials have matching parity and satisfy $|p_R(x)|=1$, $|p_I(x)|\le1$ on $[-1,1]$. The coefficient weights are both one, so the LCU scale is $B=2$; by [F2] its normalized weighted sum is $(I+i(-H))/2=(I-iH)/2$, with the stated normalization. [F2, F3, step 1.1, given, algebra]

3.1 The sine and cosine series converge by [F3], so their terms tend to zero. For $|x|\le1$, their term magnitudes are nonincreasing, so [F4] gives $|1-\cos x|\le x^2/2$; the sine series similarly gives $|x-\sin x|\le|x|^3/6$. On the two eigenvalues these imply component errors $\tau_0\le1/8$ and $\tau_3\le1/48$. With $\varepsilon_{BE}=0$, exact phases and exact LCU, the error formula in [F2] gives normalized block error at most $(1/8+1/48)/2=7/96$. Equivalently, $|(1-ix)/2-e^{-ix}/2|\le(|1-\cos x|+|x-\sin x|)/2\le(x^2/2+|x|^3/6)/2$, which is $7/96$ at $x=-1/2$ and $5/162$ at $x=1/3$. The scalar error is at most $7/96$ on $\sigma(H)$; applying the polynomial matrix-function transfer theorem [F2] to $p(x)=(1-ix)/2$ and $f(x)=e^{-ix}/2$ gives the same operator-norm bound. [F2, F3, F4, step 2.1, algebra] ∎
