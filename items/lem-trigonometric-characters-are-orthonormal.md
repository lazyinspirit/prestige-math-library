---
id: lem-trigonometric-characters-are-orthonormal
kind: lemma
title: The trigonometric characters are orthonormal in $L^2$ of the torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, def-fourier-coefficients-and-trigonometric-polynomials, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-sine-and-cosine-derivatives, def-countable-choice, thm-ftc-second-part, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-chain-rule, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.5, pp.63–64"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Example 2.66, pp.87–88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). The family of
characters $(e_k)_{k\in\mathbb Z}$ of
[[def-fourier-coefficients-and-trigonometric-polynomials]] is orthonormal in the
complex Hilbert space $L^2(\mathbb T;\mathbb C)$
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]):

$$\langle e_k,e_l\rangle=\int_{\mathbb T}e_k\overline{e_l}\,dm_{\mathbb T} =\begin{cases}1,&k=l,\\0,&k\ne l.\end{cases}$$

Moreover the coefficient pairing of a trigonometric polynomial computes its
coefficients: if $p=\sum_{k\in F}c_ke_k$ and $j\in F$, then
$\widehat p(j)=c_j$, and $\widehat p(j)=0$ for $j\notin F$.

## Facts & Assumptions

[A1] $e_k\overline{e_l}=e_{k-l}$ and $|e_k|=1$; in particular the function $t\mapsto e_m(q(t))$ on $\mathbb R$ equals $\exp(2\pi imt)=\cos(2\pi mt)+i\sin(2\pi mt)$, and it has period $1$ ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[A2] For a continuous $1$-periodic $g:\mathbb R\to\mathbb C$ the torus integral equals the Riemann integral over $[0,1]$: $\int_{\mathbb T}G\,dm_{\mathbb T}=\int_0^1g(t)\,dt$ for $G(q(t))=g(t)$, because the torus integral is represented on $[0,1)$ and a bounded Riemann integrable function on $[0,1]$ is Lebesgue measurable with the same integral, the endpoint being a null set ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[A3] A continuous real function on a closed interval is Riemann integrable, and for differentiable $G$ with $G'=g$ integrable, $\int_a^bg=G(b)-G(a)$; the derivatives of sine and cosine are cosine and minus sine, and the chain rule computes the derivatives of $t\mapsto\sin(2\pi mt)$ and $t\mapsto\cos(2\pi mt)$ ([[thm-continuous-implies-integrable]], [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[A4] $\sin(m\pi)=0$ and $\cos(m\pi)=(-1)^m$ for every integer $m$: the zero-set theorem gives the sine values, while the shift formula $\cos(x+\pi)=-\cos x$ and $\cos0=1$ give the cosine values by integer induction ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]).

[A5] The pairing on complex $L^2$ is linear in the first variable and conjugate-linear in the second, with $\langle f,g\rangle=\int f\overline g$, and the Fourier coefficient is $\widehat f(k)=\langle f,e_k\rangle$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-fourier-coefficients-and-trigonometric-polynomials]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice and characters $e_k$ on $\mathbb T$.

1.1 For $k,l\in\mathbb Z$ put $m:=k-l$; then $e_k\overline{e_l}=e_m$, and the corresponding $1$-periodic function on $\mathbb R$ is $g_m(t)=\cos(2\pi mt)+i\sin(2\pi mt)$. [A1, A5]

2.1 The torus integral of $e_k\overline{e_l}$ is the Riemann integral of $g_m$ over $[0,1]$: for $m=0$ the integrand is $1$ and the integral is $1$, while for $m\ne0$ the real and imaginary parts have the primitives $t\mapsto\sin(2\pi mt)/(2\pi m)$ and $t\mapsto-\cos(2\pi mt)/(2\pi m)$, whose values at $t=0$ and $t=1$ agree because $\sin(2\pi m)=\sin 0=0$ and $\cos(2\pi m)=\cos 0=1$, so each of the two definite integrals vanishes. Hence the integral is $1$ when $m=0$ and $0$ when $m\ne0$. [step 1.1, A2, A3, A4, algebra]

3.1 Therefore $\langle e_k,e_l\rangle=1$ for $k=l$ and $0$ for $k\ne l$, so the characters are orthonormal. [step 2.1, A5]

4.1 For the coefficient claim, let $p=\sum_{k\in F}c_ke_k$ and fix $j\in\mathbb Z$; by linearity of the pairing and orthonormality, $\widehat p(j)=\sum_{k\in F}c_k\langle e_k,e_j\rangle$ equals $c_j$ if $j\in F$ and $0$ otherwise. [step 3.1, A5]

5.1 Steps 3.1 and 4.1 prove orthonormality of the characters and the coefficient formula for trigonometric polynomials. [step 3.1, step 4.1] ∎
