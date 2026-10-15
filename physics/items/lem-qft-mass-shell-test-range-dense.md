---
id: lem-qft-mass-shell-test-range-dense
kind: lemma
title: Density of Schwartz test restrictions in the scalar shell space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Richard B. Melrose, MIT OpenCourseWare 18.155 Differential Analysis, Fall 2004, lecture notes, section 9
      url: https://ocw.mit.edu/courses/18-155-differential-analysis-fall-2004/fa60b20e070ee676b70cdf8a373e6197_section9.pdf
      locator: Complete five-page official MIT OCW PDF, printed pages 58–62; Theorem 9.1 proves the Fourier transform isomorphism on Schwartz space and gives its inverse.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. For every $\mu\ge0$, the
space $H_\mu=L^2(H_\mu^+,d\nu_\mu)$ of
[[def-qft-scalar-mass-shell]] is separable (has a countable norm-dense subset), and
$$\{K_\mu f:f\in\mathscr S(\mathbb R^4)\}$$
is dense in $H_\mu$. If $\mu>0$, the range contains every function in
$C_c^\infty(\mathbb R^3)$; if $\mu=0$, it contains every function in
$C_c^\infty(\mathbb R^3\setminus\{0\})$.

## Facts & Assumptions

**Given:** Countable Choice; the shell chart and Fourier restriction in [[def-qft-scalar-mass-shell]]; the listed $L^2$ density and Fourier results.

[A1] Countable Choice supplies countable dense families for the $L^2$ spaces used below. [[def-countable-choice]]

[F1] Rational box step functions form a countable dense subset of the real-valued $L^2(\mathbb R^3)$, by [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]

[F2] On every open subset of Euclidean space, smooth compactly supported functions are dense in its $L^2$ space. [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]

[F3] The standard Fourier transform is a continuous automorphism of Schwartz space with a continuous inverse; composing it with the reflection and rescaling in [[def-qft-scalar-mass-shell]] gives the convention used here. [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

[F4] There is a smooth compactly supported bump equal to one at the origin. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F5] Integrals of increasing nonnegative measurable functions converge to the integral of their pointwise limit. [[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 In the chart $\mathbf k\mapsto p_\mu(\mathbf k)$, write
$w_\mu(\mathbf k)=[2(2\pi)^3\omega_\mu(\mathbf k)]^{-1}$. By [F3] and the
fixed invertible reflection and rescaling in
[[def-qft-scalar-mass-shell]], $\mathcal F_+f$ is Schwartz for every
$f\in\mathscr S(\mathbb R^4)$. Thus
$$q_2(f):=\sup_{q\in\mathbb R^4}(1+|q|)^2|\mathcal F_+f(q)|<\infty.$$
On the shell, $|\mathcal F_+f(\omega_\mu(\mathbf k),\mathbf k)|\le
q_2(f)(1+|\mathbf k|)^{-2}$, so
$$\|K_\mu f\|_{H_\mu}^2\le\frac{q_2(f)^2}{2(2\pi)^3}\int_{\mathbb R^3}\frac{(1+|\mathbf k|)^{-4}}{\omega_\mu(\mathbf k)}\,d^3\mathbf k<\infty.$$
The radial integrand is $O(r)$ near zero if $\mu=0$, $O(r^2)$ near zero if
$\mu>0$, and $O(r^{-3})$ at infinity. Therefore every $K_\mu f$ lies in
$H_\mu$, so the claimed range is a subset of the Hilbert space. By [F1],
real-valued $L^2(\mathbb R^3)$ has a countable dense subset $S_{\mathbb R}$.
For complex-valued $h=u+iv\in L^2(\mathbb R^3;\mathbb C)$, its real and
imaginary parts lie in real-valued $L^2$. For any $\varepsilon>0$, choose
$s,t\in S_{\mathbb R}$ with $\|u-s\|_2,\|v-t\|_2<\varepsilon/\sqrt2$.
Then $\|h-(s+it)\|_2^2=\|u-s\|_2^2+\|v-t\|_2^2<\varepsilon^2$.
Enumerate $S_{\mathbb R}$ by $(s_j)_{j\in\mathbb N_0}$, repeating terms if
it is finite. The Cantor pairing map
$(j,k)\mapsto (j+k)(j+k+1)/2+k$ enumerates $\mathbb N_0^2$, so
$S_{\mathbb R}+iS_{\mathbb R}$ is countable and dense in complex-valued
$L^2(\mathbb R^3)$. Multiplication by $\sqrt{w_\mu}$ is an isometry from
$H_\mu$ onto $L^2(\mathbb R^3\setminus\{0\},d^3\mathbf k;\mathbb C)$ (for
$\mu=0$) or $L^2(\mathbb R^3,d^3\mathbf k;\mathbb C)$ (for $\mu>0$), with
inverse division by $\sqrt{w_\mu}$. In the massless case, extend any function
on the punctured space by zero at the null point, approximate it by the
countable dense family just constructed, and restrict those approximants back
to the punctured space; restriction does not increase the norm. Thus both
chart spaces, and therefore $H_\mu$, are separable. [A1, F1, F3, given,
algebra]

2.1 Let $\Omega=\mathbb R^3$ for $\mu>0$ and
$\Omega=\mathbb R^3\setminus\{0\}$ for $\mu=0$. For
$\Omega_n=\{1/n<|\mathbf k|<n\}$, these sets increase to $\Omega\setminus\{0\}$; its complement in $\Omega$ is null for the shell measure.
For $h\in L^2(\Omega,w_\mu d^3\mathbf k)$, monotone convergence [F5] gives
$$\int_{\Omega_n}|h|^2w_\mu\,d^3\mathbf k\longrightarrow \int_\Omega|h|^2w_\mu\,d^3\mathbf k<\infty.$$
Subtracting these finite integrals from the total shows
$\|h\mathbf1_{\Omega\setminus\Omega_n}\|_{L^2(w_\mu)}\to0$.
On each $\Omega_n$, $w_\mu$ is smooth and bounded above and below by
positive constants. Approximate $h|_{\Omega_n}$ in ordinary $L^2(\Omega_n)$
by a function in $C_c^\infty(\Omega_n)$ using [F2]; equivalence of the
weighted and ordinary norms on $\Omega_n$ gives weighted approximation.
Thus $C_c^\infty(\Omega)$ is dense in the shell space. [F2, F5, step 1.1,
given, algebra]

3.1 Fix $\psi\in C_c^\infty(\Omega)$. Choose $\rho\in C_c^\infty(\mathbb R)$
with $\rho(0)=1$, using [F4], and put
$$G(q^0,\mathbf q)= \psi(\mathbf q)\rho(q^0-\omega_\mu(\mathbf q)).$$
Because $\psi$ has compact support away from the massless apex, $\omega_\mu$
is smooth on a neighborhood of its support, so this is a smooth compactly
supported function on $\mathbb R^4$. By the Fourier automorphism [F3] there
is $f\in\mathscr S(\mathbb R^4)$ with
$\mathcal F_+f(q^0,\mathbf q)=G(q^0,\mathbf q)$ in the convention of
[[def-qft-scalar-mass-shell]]. On the shell,
$K_\mu f(p_\mu(\mathbf k))=G(\omega_\mu(\mathbf k),\mathbf k)
=\psi(\mathbf k)$. Hence the test restriction range contains
$C_c^\infty(\Omega)$, which is dense by 2.1. [F3, F4, step 2.1, given,
construct] ∎
