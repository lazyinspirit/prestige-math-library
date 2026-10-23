---
id: def-fd-periodic-solenoidal-spaces
kind: definition
title: Periodic solenoidal Fourier spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice, def-distributional-derivative]
dependency_roles:
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-distributional-derivative: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.2.2, printed pp. 42–43; the local statement retains the mean mode."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§2.1–2.2, printed pp. 4–5; their solenoidal space is mean zero."
---

## Definition

Let $d\ge2$ be an integer, and let $L>0$ be the numerical period in a fixed
length unit. Let
$\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$ carry normalized Lebesgue measure
$L^{-d}dx$. For $k\in\mathbb Z^d$ put
$\kappa_k=2\pi k/L$ and $e_k(x)=\exp(i\kappa_k\cdot x)$. For a complex
scalar or vector $L^2$ class $f$, let
$\widehat f(k)=L^{-d}\int_{[0,L]^d}f(x)e^{-i\kappa_k\cdot x}\,dx$;
real fields are the classes satisfying
$\widehat f(-k)=\overline{\widehat f(k)}$.

The periodic scalar test functions are $C^\infty(\mathbb T_L^d;\mathbb C)$, identified with smooth $L$-periodic lifts to $\mathbb R^d$ and equipped with the seminorms
$$p_m(\varphi)=\max_{|\alpha|\le m}\sup_{x\in\mathbb T_L^d}|\partial^\alpha\varphi(x)|\qquad(m\in\mathbb N_0).$$
A periodic distribution is a continuous complex-linear functional on this test space, with bilinear pairing. Its derivative is defined by
$$\langle\partial_j T,\varphi\rangle=-\langle T,\partial_j\varphi\rangle.$$
For $f\in L^2(\mathbb T_L^d;\mathbb C)$, its associated regular distribution is $T_f(\varphi)=\int_{\mathbb T_L^d}f\varphi\,d\mu$; vector fields are treated componentwise. This is continuous since $|\int f\varphi\,d\mu|\le\|f\|_2p_0(\varphi)$. For a vector distribution $U=(U_1,\ldots,U_d)$, define
$$\langle\operatorname{div}U,\varphi\rangle=-\sum_{j=1}^d\langle U_j,\partial_j\varphi\rangle.$$
Thus, for $u\in L^2(\mathbb T_L^d;\mathbb R^d)$, $\operatorname{div}u=0$ distributionally means
$$\int_{\mathbb T_L^d}u(x)\cdot\nabla\varphi(x)\,L^{-d}dx=0\qquad(\varphi\in C^\infty(\mathbb T_L^d;\mathbb C)).$$

For $s\ge0$, let
$$H^s(\mathbb T_L^d)=\left\{f\in L^2:\sum_{k\in\mathbb Z^d}(1+L^2|\kappa_k|^2)^s|\widehat f(k)|^2<\infty\right\},$$
with norm given by the square root of this sum; the weight is dimensionless.
Under Countable Choice the coefficient map is injective, so this is a norm.
The real solenoidal spaces are
$$H=\{u\in L^2(\mathbb T_L^d;\mathbb R^d): k\cdot\widehat u(k)=0\text{ for every }k\ne0\},\qquad V=H\cap H^1(\mathbb T_L^d;\mathbb R^d).$$
The zero Fourier mode is unrestricted. Under Countable Choice, the supplied
Fourier-basis theorem makes the coefficient map a surjective isometry from
$L^2$ onto $\ell^2$; the coefficient-space norm identifications and the
equivalence between Fourier divergence and distributional divergence in this
definition use that hypothesis. Under the same assumption, the orthogonal
solenoidal projection $P$ is well-defined on $L^2$ and has multiplier
$P_0=I$ and
$P_k=I-\kappa_k\kappa_k^{\mathsf T}/|\kappa_k|^2$ for $k\ne0$. For integer
$N\ge0$, rectangular truncation $\Pi_N$ keeps precisely $|k|_\infty\le N$. A weak
derivative in coordinate $j$ has Fourier coefficient $i\kappa_{k,j}\widehat f(k)$.
For $r>0$, $H^{-r}$ is the Hilbert completion of finite complex Fourier
coefficient sequences in the norm squared
$\sum_k(1+L^2|\kappa_k|^2)^{-r}|\widehat f(k)|^2$; its real subspace is the
completion of the conjugate-symmetric sequences.

## Definition references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.2.2, pp. 42–43](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §2.1–2.2, pp. 4–5](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Countable Choice for the coefficient-space, divergence, and projection assertions; an integer $d\ge2$, a period $L>0$, normalized measure on $\mathbb T_L^d$, and the Fourier coefficient convention in the Definition.

[F1] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: with Countable Choice, the normalized torus characters form a complete orthonormal basis of $L^2$ and the Fourier coefficient map is an isometry onto $\ell^2$; rescaling coordinates gives the stated period-$L$ convention.

[F2] [[def-countable-choice]]: countable families of nonempty sets admit a choice function. The Fourier-basis supplier uses this principle.

[F3] [[def-distributional-derivative]]: on Euclidean open sets the distributional derivative is the transpose derivative on tests; the periodic derivative in the Definition uses the same sign convention on smooth periodic tests.

## Proof

1.1 For every $k\ne0$, the multiplier $P_k$ is the Euclidean orthogonal projection onto $\kappa_k^\perp$, since it is symmetric, $P_k^2=P_k$, and $P_k\kappa_k=0$; $P_0=I$ leaves constant vector fields unrestricted. [given, algebra]

2.1 By [F1], coefficient sequences in the displayed weighted square-sum define unique $L^2$ classes, and Fourier truncations converge in the stated $H^s$ norm whenever that sum is finite. The conjugation condition is exactly the real-valued condition. Testing the periodic divergence against $e_{-k}$ gives $i\kappa_k\cdot\widehat u(k)$; hence distributional divergence zero implies $k\cdot\widehat u(k)=0$ for each $k\ne0$. Conversely, if these coefficients vanish, the divergence pairs to zero with every trigonometric polynomial. For any smooth periodic test, repeated integration by parts makes its Fourier coefficients decay faster than every power of $|k|$, so its Fourier partial sums converge with every derivative uniformly; continuity of the divergence functional then gives zero pairing with that test. Thus the Fourier constraint is equivalent to distributional divergence zero, and the formulas define the stated real Hilbert coefficient spaces and projections. [given, F1, F2, F3, step 1.1, algebra] ∎

