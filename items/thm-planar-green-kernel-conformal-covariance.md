---
id: thm-planar-green-kernel-conformal-covariance
kind: theorem
title: "Conformal covariance of the canonical planar Green kernel"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-injective-holomorphic-derivative-nonzero
  - def-biholomorphic-map
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-green-function-plane-domain
  - def-plane-harmonic-function
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - thm-c2-holomorphic-components-are-harmonic
  - thm-chain-rule-for-complex-derivatives
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-zero-order-factorization-holomorphic-function
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 183-189: invariance of the Green function with pole under conformal maps (property (c) and its discussion)"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.9, printed pp. 171-172: conformal transport of the logarithmic Green kernel"
verification:
  precheck: pass
---

## Statement

Let $\Omega,\Omega'\subseteq\mathbb C$ be proper plane domains that are Greenian
in the sense of [[def-green-function-plane-domain]], and let
$f:\Omega\to\Omega'$ be a biholomorphism ([[def-biholomorphic-map]]). Then for
every $a\in\Omega$ and every $z\in\Omega\setminus\{a\}$,
$$g_\Omega(z,a)=g_{\Omega'}\bigl(f(z),f(a)\bigr).$$
No extension of $f$ to the Euclidean boundaries of the two domains is assumed:
both inequalities are produced from the least-candidate characterization of the
canonical Green kernel, not from boundary values.

## Facts & Assumptions

**Given:** Proper plane domains $\Omega\ne\mathbb C$ and $\Omega'\ne\mathbb C$, a biholomorphism $f:\Omega\to\Omega'$, and a pole $a\in\Omega$. Moduli are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and harmonicity is that of [[def-plane-harmonic-function]].

[F1] For a proper plane domain $\Omega$ and $a\in\Omega$ the canonical Green function $g_\Omega(\cdot,a)$, when it exists, is the pointwise least nonnegative **logarithmic-pole candidate** at $a$: a function nonnegative on $\Omega\setminus\{a\}$, harmonic on $\Omega\setminus\{a\}$, such that $u(z)+\log|z-a|$ extends harmonically across $a$; a Greenian domain is one for which this least candidate exists for every pole ([[def-green-function-plane-domain]]).

[F2] A biholomorphism is a holomorphic bijection with holomorphic inverse ([[def-biholomorphic-map]]). An injective holomorphic map on a complex domain has nowhere-zero derivative ([[cor-injective-holomorphic-derivative-nonzero]]), holomorphic functions are real analytic and smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and if $f$ is holomorphic on a neighbourhood of $a$ with $\operatorname{ord}_af=1$ then on some neighbourhood of $a$ one has $f(z)=(z-a)q(z)$ with $q$ holomorphic and $q(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F3] If $h$ is holomorphic and nowhere zero on a disc $D(a,r)$, there is a holomorphic logarithm $L$ on that disc with $\exp L=h$ ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]); the real and imaginary parts of a holomorphic function with $C^2$ components are harmonic ([[thm-c2-holomorphic-components-are-harmonic]]).

[F4] If $u$ is harmonic on an open set $V$ and $\phi$ is holomorphic on an open set $U$ with $\phi(U)\subseteq V$, then $u\circ\phi$ is harmonic on $U$, and sums and differences of harmonic functions are harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]); the chain rule gives $(f^{-1})'(f(a))\cdot f'(a)=1$ for a biholomorphism ([[thm-chain-rule-for-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is injective and holomorphic on the domain $\Omega$, [F2] gives $f'(a)\ne0$; thus the holomorphic function $w\mapsto f(w)-f(a)$ has a zero of order one at $a$, so by [F2] there is a disc $D(a,\rho)\subseteq\Omega$ and a holomorphic $q$ on $D(a,\rho)$ with $f(z)-f(a)=(z-a)q(z)$ and $q(a)=f'(a)\ne0$. Making $\rho$ smaller, $q$ is nowhere zero on $D(a,\rho)$, so [F3] provides a holomorphic $L$ on $D(a,\rho)$ with $\exp L=q$; then both components of $L$ are $C^2$ by [F2], so $\operatorname{Re}L$ is harmonic on $D(a,\rho)$ by [F3], and for $0<|z-a|<\rho$ $$\log|f(z)-f(a)|=\log|z-a|+\operatorname{Re}L(z),$$ because $|f(z)-f(a)|=|z-a|\cdot|q(z)|=|z-a|e^{\operatorname{Re}L(z)}$. [F2, F3, algebra]

1.2 The inverse $f^{-1}:\Omega'\to\Omega$ is holomorphic by [F2], and by [F4]
its derivative satisfies $(f^{-1})'(f(a))=1/f'(a)\ne0$; the same computation as in step 1.1, applied to $f^{-1}$ at the pole $f(a)$, therefore supplies a disc $D(f(a),\rho')\subseteq\Omega'$ and a harmonic function $R$ on it with $$\log|f^{-1}(w)-a|=\log|w-f(a)|+R(w)\qquad(0<|w-f(a)|<\rho').$$ [F2, F4, step 1.1]

2.1 Define $G(z):=g_{\Omega'}(f(z),f(a))$ for $z\in\Omega\setminus\{a\}$. Then $G$ is a logarithmic-pole candidate at $a$ on $\Omega$: it is nonnegative because $g_{\Omega'}$ is, it is harmonic by [F4] because $g_{\Omega'}(\cdot,f(a))$ is harmonic on $\Omega'\setminus\{f(a)\}$ and $f$ is holomorphic on $\Omega\setminus\{a\}$ with image $\Omega'\setminus\{f(a)\}$, and $$G(z)+\log|z-a| =\Bigl[g_{\Omega'}(f(z),f(a))+\log|f(z)-f(a)|\Bigr]-\operatorname{Re}L(z)$$ extends across $a$ to a harmonic function, because the bracket is the harmonic corrector of $g_{\Omega'}$ composed with $f$ and $\operatorname{Re}L$ is harmonic by step 1.1. [F1, F4, step 1.1]

3.1 Symmetrically, $H(w):=g_\Omega(f^{-1}(w),a)$ for $w\in\Omega'\setminus\{f(a)\}$ is a logarithmic-pole candidate at $f(a)$ on $\Omega'$: nonnegativity, harmonicity and the logarithmic pole follow as in step 2.1 with the roles of $f$ and $f^{-1}$ exchanged, the local harmonic remainder being supplied by step 1.2. [F1, F4, step 1.2]

3.2 By the least-candidate characterization in [F1] applied on $\Omega$, the candidate $G$ of step 2.1 dominates the canonical kernel: $g_\Omega(z,a)\le g_{\Omega'}(f(z),f(a))$ for all $z\in\Omega\setminus\{a\}$. [F1, step 2.1]

4.1 Applying [F1] on $\Omega'$ to the candidate $H$ of step 3.1 gives $g_{\Omega'}(w,f(a))\le g_\Omega(f^{-1}(w),a)$ for all $w\in\Omega'\setminus\{f(a)\}$; substituting $w=f(z)$ for $z\in\Omega\setminus\{a\}$ yields the reverse inequality $g_{\Omega'}(f(z),f(a))\le g_\Omega(z,a)$. [F1, step 3.1]

5.1 The two inequalities of steps 3.2 and 4.1 are opposite, so $g_\Omega(z,a)=g_{\Omega'}(f(z),f(a))$ for every $z\in\Omega\setminus\{a\}$. Only the least-candidate order of [F1] and the local behaviour of the two biholomorphisms were used: neither $f$ nor $f^{-1}$ was extended to a boundary point. [F1, step 3.2, step 4.1] ∎
