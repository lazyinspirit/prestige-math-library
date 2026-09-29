---
id: thm-green-function-simply-connected-plane-domain
kind: theorem
title: "Green kernel of a simply connected plane domain from a Riemann map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-injective-holomorphic-derivative-nonzero
  - def-axiom-of-choice
  - def-biholomorphic-map
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-green-function-plane-domain
  - def-homologically-simply-connected-complex-domain
  - def-plane-harmonic-function
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - thm-c2-holomorphic-components-are-harmonic
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - thm-riemann-mapping-theorem
  - thm-unit-disc-schwarz-lemma-with-rigidity
  - thm-zero-order-factorization-holomorphic-function
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, printed pp. 183-189: Green function as -log|phi| for a conformal map onto the disc, and its independence of the map"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.9, printed pp. 171-172: the logarithmic Green function of a simply connected domain via the Riemann map"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice for the existence of the Riemann map
([[thm-riemann-mapping-theorem]]). Let $\Omega\subsetneq\mathbb C$ be a
homologically simply connected complex domain
([[def-homologically-simply-connected-complex-domain]]) with $\Omega\ne\mathbb C$,
let $a\in\Omega$, and suppose $\varphi:\Omega\to\mathbb D$ is a biholomorphism
with $\varphi(a)=0$. Then the canonical Green kernel of
[[def-green-function-plane-domain]] is
$$g_\Omega(z,a)=-\log|\varphi(z)|\qquad(z\in\Omega\setminus\{a\}),$$
and this value is independent of the biholomorphism chosen: any other
biholomorphism $\psi:\Omega\to\mathbb D$ with $\psi(a)=0$ gives the same
function. Once $\varphi$ is supplied, the identity uses no choice principle;
the Axiom of Choice is used only by the cited existence theorem.

## Facts & Assumptions

**Given:** A homologically simply connected complex domain $\Omega\subsetneq\mathbb C$, a point $a\in\Omega$, and a biholomorphism $\varphi:\Omega\to\mathbb D$ onto the unit disc ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[def-biholomorphic-map]]) with $\varphi(a)=0$; moduli are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]] and harmonicity is that of [[def-plane-harmonic-function]].

[F1] For a proper plane domain $\Omega$ and $a\in\Omega$ the canonical Green function is the pointwise least nonnegative logarithmic-pole candidate at $a$: a function nonnegative on $\Omega\setminus\{a\}$, harmonic on $\Omega\setminus\{a\}$, with $u+\log|z-a|$ extending harmonically across $a$ ([[def-green-function-plane-domain]]).

[F2] A biholomorphism is a holomorphic bijection with holomorphic inverse; an injective holomorphic map on a complex domain has nowhere-zero derivative; a holomorphic function with a zero of order one at $a$ factors as $f(z)=(z-a)q(z)$ with $q$ holomorphic and $q(a)\ne0$ near $a$ ([[def-biholomorphic-map]], [[cor-injective-holomorphic-derivative-nonzero]], [[thm-zero-order-factorization-holomorphic-function]]).

[F3] $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]); composition with a holomorphic map preserves harmonicity, and sums and differences of harmonic functions are harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]); a nowhere-zero holomorphic function on a disc has a holomorphic logarithm there, whose real part equals $\log|q|$ when its exponential is $q$, and is harmonic by the preceding logarithmic-modulus and composition facts ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]).

[F4] A harmonic function on a bounded domain that extends continuously to the closure attains its minimum on the boundary ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]); a holomorphic self-map of $\mathbb D$ fixing $0$ that attains equality in $|f(z)|\le|z|$ is a rotation ([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

[F5] Assume the Axiom of Choice: every homologically simply connected $\Omega\subsetneq\mathbb C$ and $z_0\in\Omega$ admit a biholomorphism $\Omega\to\mathbb D$ with $F(z_0)=0$ ([[thm-riemann-mapping-theorem]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Because $\varphi$ is an injective holomorphic map on the domain $\Omega$, [F2] gives $\varphi'(a)\ne0$; hence $w\mapsto\varphi(w)$ has a zero of order one at $a$, and [F2] provides a disc $D(a,\rho)\subseteq\Omega$ with $\varphi(z)=(z-a)q(z)$ for a holomorphic $q$ that is nowhere zero on $D(a,\rho)$. By [F3] there is a holomorphic $L$ on $D(a,\rho)$ with $\exp L=q$, and $\operatorname{Re}L$ is harmonic on $D(a,\rho)$ $$-\log|\varphi(z)|+\log|z-a|=-\operatorname{Re}L(z)\qquad(0<|z-a|<\rho),$$ because $|\varphi(z)|=|z-a|\,|q(z)|=|z-a|e^{\operatorname{Re}L(z)}$. The inverse $\varphi^{-1}:\mathbb D\to\Omega$ is holomorphic by [F2]. [F2, F3, algebra]

1.2 On the unit disc the least logarithmic-pole candidate at $0$ is $-\log|w|$. Indeed $-\log|w|$ is positive on $\mathbb D\setminus\{0\}$, harmonic there by [F3], and $-\log|w|+\log|w|=0$ extends harmonically across $0$, so it is a candidate. If $U$ is any candidate at $0$, then $D:=U+\log|w|$ agrees on $\mathbb D\setminus\{0\}$ with a function harmonic on $\mathbb D$, hence is harmonic on $\mathbb D$ by [F3]; on the circle $|w|=r$ it satisfies $D\ge\log r$ because $U\ge0$, so the minimum principle [F4] applied on $\{|w|\le r\}$ gives $D\ge\log r$ on that disc, and letting $r\uparrow1$ yields $D\ge0$, that is $U\ge-\log|w|$. [F1, F3, F4]

1.3 If $\psi:\Omega\to\mathbb D$ is another biholomorphism with $\psi(a)=0$, then $h:=\psi\circ\varphi^{-1}$ is a biholomorphic self-map of $\mathbb D$ fixing $0$, so $|h(w)|\le|w|$ for all $w$; the same bound applied to $h^{-1}$ gives $|h(w)|=|w|$, so $h$ is a rotation by [F4] and therefore $|\psi(z)|=|h(\varphi(z))|=|\varphi(z)|$ for every $z\in\Omega$. Hence $-\log|\psi(z)|=-\log|\varphi(z)|$ on $\Omega\setminus\{a\}$. [F2, F4, algebra]

2.1 The function $z\mapsto-\log|\varphi(z)|$ is a logarithmic-pole candidate at $a$ on $\Omega$: it is positive because $|\varphi(z)|<1$ on $\Omega$, it is harmonic on $\Omega\setminus\{a\}$ because it is the composite of the harmonic function $-\log|\cdot|$ on $\mathbb C\setminus\{0\}$ with the holomorphic $\varphi$ by [F3], and its corrector across $a$ is the harmonic function $-\operatorname{Re}L$ of step 1.1. [F1, F3, step 1.1]

2.2 Let $u$ be an arbitrary logarithmic-pole candidate at $a$ on $\Omega$ and put $U(w):=u(\varphi^{-1}(w))$ for $w\in\mathbb D\setminus\{0\}$. Then $U$ is a candidate at $0$ on $\mathbb D$: it is nonnegative, harmonic by [F3] because $\varphi^{-1}$ is holomorphic by step 1.1, and $$U(w)+\log|w|=u(\varphi^{-1}(w))+\log|\varphi^{-1}(w)-a|-\log\frac{|\varphi^{-1}(w)-a|}{|w|}$$ extends harmonically across $0$, because the first two terms are the harmonic corrector of $u$ composed with $\varphi^{-1}$ and the last term is $-\log|g(w)|$ for the holomorphic function $g(w):=(\varphi^{-1}(w)-a)/w$, which satisfies $g(0)=(\varphi^{-1})'(0)\ne0$, so that it has a holomorphic logarithm near $0$ by [F3]. [F1, F3, step 1.1]

3.1 By disc leastness, step 1.2 applied to the candidate $U$ of step 2.2 gives $u(\varphi^{-1}(w))\ge-\log|w|$ for every $w\in\mathbb D\setminus\{0\}$; writing $w=\varphi(z)$ yields $u(z)\ge-\log|\varphi(z)|$ on $\Omega\setminus\{a\}$. So $-\log|\varphi|$ is the pointwise least candidate and hence $g_\Omega(z,a)=-\log|\varphi(z)|$ by [F1]; by step 1.3 the same formula holds for every biholomorphism sending $a$ to $0$. The supplied biholomorphism is the only place where a choice principle could enter, and by [F5] its existence is exactly what the Axiom of Choice is assumed for. [F1, F5, step 1.2, step 1.3, step 2.1, step 2.2] ∎
