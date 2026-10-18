---
id: cex-it-fidelity-data-processing-does-not-prove-qre-dpi
kind: counterexample
title: Fidelity and trace-distance inequalities do not imply QRE data processing
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - def-qc-fidelity
  - def-qc-trace-distance
  - def-qc-trace-norm
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - def-pi-via-first-positive-cosine-zero
  - def-natural-logarithm
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapters 3 and 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Write $\rho_p=\operatorname{diag}(1-p,p)$ for a diagonal qubit state. Set $a=\pi/12$ and
$$\mathcal S_a=\{\rho_{\sin^2\theta}:a\le\theta\le\pi/4\},\qquad T_a(\rho_{\sin^2\theta})=\rho_{\sin^2(\theta-a)}.$$
On this family, $T_a$ preserves root fidelity and contracts trace distance for every pair, but it sends the finite input relative entropy $D(\rho_{\sin^2(\pi/4)}\|\rho_{\sin^2 a})$ to $D(\rho_{\sin^2(\pi/4-a)}\|\rho_0)=+\infty$. The map is nonlinear and is not the restriction of a quantum channel. Thus metric inequalities on a family under an arbitrary map do not by themselves prove quantum-relative-entropy data processing for channels.

As a separate support check, $|0\rangle\langle0|$ and $|+\rangle\langle+|$ have root fidelity and trace distance both $1/\sqrt2$, while $D(|0\rangle\langle0|\| |+\rangle\langle+|)=+\infty$.

## Facts & Assumptions

**Given:** The qubit computational basis and the diagonal states and maps in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(A\|B)$ is the natural-log spectral expression under support inclusion and equals $+\infty$ when support inclusion fails.

[F2] [[def-qc-fidelity]]: root fidelity is $F(\rho,\sigma)=\|\sqrt\rho\sqrt\sigma\|_1$.

[F3] [[def-qc-trace-distance]]: trace distance is $d_{\rm tr}(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$.

[F4] [[def-qc-trace-norm]]: the trace norm is the sum of the singular values.

[F5] [[def-qc-density-operator]]: a density operator is nonnegative and has trace one.

[F6] [[thm-non-negative-square-root-exists-and-is-unique]]: positive diagonal operators have the diagonal positive square roots obtained by taking square roots of their eigenvalues.

[F7] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: the natural logarithm is defined on positive reals, is strictly increasing, and obeys the usual logarithm laws.

[F8] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[-\pi/2,\pi/2]$.

[F9] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.

[F10] [[thm-sine-and-cosine-addition-formulas]]: sine and cosine satisfy their addition formulas, including $\sin(u-v)=\sin u\cos v-\cos u\sin v$ and $\cos(u-v)=\cos u\cos v+\sin u\sin v$.

[F11] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2t+\cos^2t=1$ for every real $t$.

[F12] [[thm-sine-and-cosine-derivatives]]: $(\sin t)'=\cos t$ and $\cos' t=-\sin t$.

[F13] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: the chain and product rules permit two differentiations of the displayed trigonometric identity.

[F14] [[cor-differentiable-implies-continuous]]: differentiability of cosine implies continuity at the endpoint limit used below.

[F15] [[def-pi-via-first-positive-cosine-zero]]: $\pi$ is positive, so the intervals and angles in the Statement have the stated order.

## Proof

1.1 For $\theta\in[a,\pi/4]$, $\rho_{\sin^2\theta}=\operatorname{diag}(\cos^2\theta,\sin^2\theta)$ is nonnegative and has trace one by [F11], so is a state by [F5]. Since $a>0$ by [F15], [F8] and [F12] make sine positive and strictly increasing on $[a,\pi/4]$; squaring preserves strict order there, so the angle parametrization is injective and $T_a$ is well-defined. Its output angle lies in $[0,\pi/4-a]$, so its output is also a density operator. [given, F5, F8, F11, F12, F15, algebra]

2.1 For $\theta,\phi\in[a,\pi/4]$, the square roots in [F6] are diagonal with entries $(\cos\theta,\sin\theta)$ and $(\cos\phi,\sin\phi)$. Their product is positive diagonal, so by [F2] and [F4],
$$F(\rho_{\sin^2\theta},\rho_{\sin^2\phi})=\cos\theta\cos\phi+\sin\theta\sin\phi=\cos(\theta-\phi).$$
The cosine addition formula [F10] justifies the last equality. Applying $T_a$ subtracts $a$ from both angles, leaving their difference unchanged; root fidelity is therefore preserved for every pair. [given, F2, F4, F6, F10, step 1.1, algebra]

3.1 For diagonal qubit states, [F3] and [F4] give $d_{\rm tr}(\rho_p,\rho_q)=|p-q|$. Take $\theta\ge\phi$ in $[a,\pi/4]$. The addition formulas and Pythagorean identity [F10]–[F11] give $\sin^2u-\sin^2v=\sin(u+v)\sin(u-v)$. Therefore
$$\sin^2\theta-\sin^2\phi=\sin(\theta+\phi)\sin(\theta-\phi),$$
$$\sin^2(\theta-a)-\sin^2(\phi-a)=\sin(\theta+\phi-2a)\sin(\theta-\phi).$$
Here $0\le\theta+\phi-2a\le\theta+\phi\le\pi/2$, so [F8]–[F12] make the first sine factor in the second line no larger than the corresponding nonnegative factor in the first line; the other factor is the same and nonnegative. Thus the output coordinate difference is at most the input difference, proving trace-distance contraction for every pair. [given, F3, F4, F8, F9, F10, F11, F12, step 1.1, algebra]

4.1 Take $\theta=\pi/4$ and $\phi=a$. By strict increase of sine from $\sin0=0$ to $\sin(\pi/2)=1$ in [F8], [F9], and [F12], every angle strictly between zero and $\pi/2$ gives $0<\sin^2\theta<1$; thus both input diagonal states have full support and their relative entropy is finite by [F1] and [F7], since the positive spectral entries have finite natural logarithms. The outputs are $\rho_{\sin^2(\pi/4-a)}$ and $\rho_0=|0\rangle\langle0|$. Since $0<\pi/4-a<\pi/2$ by [F15], the first output has full support, while the second has one-dimensional support; support inclusion fails and [F1] gives output divergence $+\infty$. [given, F1, F7, F8, F9, F12, F15, step 1.1, algebra]

5.1 If a quantum channel agreed with $T_a$ on $\mathcal S_a$, complex-linearity would make its output's $|1\rangle$ diagonal entry affine in $p$, since $\rho_p=(1-p)|0\rangle\langle0|+p|1\rangle\langle1|$. Thus there would be constants $A,B$ with $\sin^2(\theta-a)=A+B\sin^2\theta$ for every $\theta\in[a,\pi/4]$. Differentiating twice on the open interval and using [F10]–[F13] gives $\cos(2\theta-2a)=B\cos(2\theta)$. By [F14], cosine is continuous, so taking $\theta\uparrow\pi/4$ yields $\sin(2a)=0$, because $\cos(\pi/2-2a)=\sin(2a)$ and $\cos(\pi/2)=0$. But $0<2a=\pi/6<\pi/2$ by [F15], so [F8]–[F9] give $\sin(2a)>0$, a contradiction. Hence no quantum channel agrees with $T_a$ on the family. [given, F8, F9, F10, F11, F12, F13, F14, F15, algebra]

6.1 Independently, the root fidelity of $|0\rangle\langle0|$ and $|+\rangle\langle+|$ is $1/\sqrt2$: the product of their positive square roots is $(1/\sqrt2)|0\rangle\langle+|$, whose only nonzero singular value is $1/\sqrt2$. Their difference is $\frac12\begin{pmatrix}1&-1\\-1&-1\end{pmatrix}$, whose square is $I/2$, so both singular values are $1/\sqrt2$ and [F3]–[F4] give trace distance $1/\sqrt2$. The first support is not contained in the second, so [F1] gives infinite relative entropy. [given, F1, F2, F3, F4, F6, algebra] ∎
