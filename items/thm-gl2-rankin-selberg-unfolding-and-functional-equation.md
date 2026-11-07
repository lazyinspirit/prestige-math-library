---
id: thm-gl2-rankin-selberg-unfolding-and-functional-equation
kind: theorem
title: "GL2 Rankin–Selberg Unfolding and Functional Equation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-full-level-gl2-automorphic-distribution
  - lem-periodic-distribution-fourier-coefficients-polynomial-growth
  - def-gl2-rankin-selberg-l-function
  - thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
  - thm-completed-level-one-eisenstein-series-functional-equation
  - def-riemann-zeta-function
  - def-euler-gamma-function
  - thm-identity-theorem-holomorphic-functions
  - lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
  - lem-global-gl2-intertwining-pairing-transfer
  - lem-full-level-gl2-eisenstein-distribution-intertwining-equation
  - lem-full-level-gl2-distribution-rankin-selberg-unfolding
  - lem-gl2-pairing-divided-by-archimedean-gamma-factor-is-holomorphic
  - thm-euler-reflection-formula
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§3, Theorem 3.33; §4, equations (4.13)–(4.45) and Proposition 4.41, printed pp. 15–25."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 3 and the classical holomorphic unfolding, PDF pp. 5–7; supports only the holomorphic specialization."
forward_refs: []
---

## Statement

Let $\tau_j\in(V^{-\infty}_{\lambda_j,\delta_j})^\Gamma$ for $j=1,2$ be
full-level GL2 automorphic distributions as defined above, with parameters
$\lambda_j\in\mathbb C$ and $\delta_j\in\{0,1\}$. Assume at least one is
cuspidal. Write their periodic distribution Fourier expansions as
$\tau_1(x)=\sum_{n\in\mathbb Z}a_ne^{2\pi inx}$ and
$\tau_2(x)=\sum_{n\in\mathbb Z}b_ne^{2\pi inx}$. Use the chosen
representation parameters $\lambda_j$ in normalizing the coefficients; the
equivalent parameter $-\lambda_j$ gives a different coefficient
normalization. For $\operatorname{Re}s$ sufficiently large, with
$\operatorname{Re}s>1/2$ and absolute convergence, define
$$L(s,\tau_1\otimes\tau_2):=\zeta(2s)\sum_{n\ge1}a_nb_n\, n^{(\lambda_1+\lambda_2)/2-s}.$$
For $\eta\in\{0,1\}$ define the meromorphic Gamma factor
$$G_0(w):=\frac{2\Gamma(w)}{(2\pi)^w}\cos\!\left(\frac{\pi w}{2}\right), \qquad G_1(w):=\frac{2i\Gamma(w)}{(2\pi)^w}\sin\!\left(\frac{\pi w}{2}\right).$$
Let $\eta$ be the residue of $\delta_1+\delta_2$ modulo $2$. Then
$L(s,\tau_1\otimes\tau_2)$ has a meromorphic continuation to $\mathbb C$,
with no possible poles except simple poles at $s=0$ and $s=1$, and satisfies
the equation below as a meromorphic identity. Positive-real powers use the
real logarithm, and $\Gamma$ is the meromorphic continuation of Euler's
Gamma function.
$$ L(1-s,\tau_1\otimes\tau_2)= \left(\prod_{\epsilon_1,\epsilon_2\in\{-1,1\}} G_\eta\!\left(s+\epsilon_1\frac{\lambda_1}{2} +\epsilon_2\frac{\lambda_2}{2}\right)\right) L(s,\tau_1\otimes\tau_2). $$

## Statement references

[[def-full-level-gl2-automorphic-distribution|the full-level automorphic-distribution conventions and Fourier coefficients]]

[[def-gl2-rankin-selberg-l-function|the holomorphic-pair specialization of the coefficient normalization]]

[[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation|the standard GL2 normalization in the holomorphic case]]

## Facts & Assumptions

**Given:** The two full-level automorphic distributions, their parameters and Fourier coefficients, and the assumption that at least one distribution is cuspidal.

[F1] [[def-full-level-gl2-automorphic-distribution]]: $V^{-\infty}_{\lambda,\delta}$ is the right $B$-equivariant distribution representation of $PGL_2(\mathbb R)$, full level means invariance under $PGL_2(\mathbb Z)$, and cuspidality means zero constant Fourier coefficient plus infinite-order vanishing at the origin.

[F2] [[def-riemann-zeta-function]]: $\zeta(w)=\sum_{n\ge1}n^{-w}$ for $\operatorname{Re}w>1$ with positive-integer powers defined by the real logarithm.

[F3] [[def-euler-gamma-function]]: $\Gamma(w)$ is Euler's Gamma function, initially given by its integral for $\operatorname{Re}w>0$.

[F4] [[def-gl2-rankin-selberg-l-function]]: for full-level holomorphic cusp eigenforms of equal weight, the coefficient normalization specializes to $\zeta(2s)\sum_{n\ge1}\lambda_f(n)\lambda_g(n)n^{-s}$.

[F5] [[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation]]: for the holomorphic full-level specialization, the standard GL2 L-function uses the unitary Hecke coefficients and its completed form has the stated Mellin normalization.

[F6] [[lem-periodic-distribution-fourier-coefficients-polynomial-growth]]: the Fourier coefficients of a periodic distribution satisfy $|a_n|,|b_n|=O((1+|n|)^N)$ for some input-dependent $N$, so the Rankin–Selberg Dirichlet series converges absolutely in a sufficiently far right half-plane.

[F7] [[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic]] constructs the normalized full-level Eisenstein distribution $E_\nu$ and its smoothing-independent triple pairing $P_\nu(\tau_1,\tau_2,E_\nu)$, meromorphic with at most a simple pole at $\nu=1$.

[F8] [[lem-global-gl2-intertwining-pairing-transfer]] gives the exact Gamma multiplier relating $P_\nu(\tau_1,\tau_2,J_\nu E_{-\nu})$ to $P_{-\nu}(\tau_1,\tau_2,E_{-\nu})$, with the same Haar normalization on both sides.

[F9] [[lem-full-level-gl2-eisenstein-distribution-intertwining-equation]] proves $J_\nu E_{-\nu}=G_0(\nu)E_\nu$ meromorphically.

[F10] [[lem-full-level-gl2-distribution-rankin-selberg-unfolding]] proves $2P_\nu=(-1)^{\delta_1}G_\eta(s-(\lambda_1+\lambda_2)/2)L(s,\tau_1\otimes\tau_2)$ in a sufficiently far right half-plane, with $\nu=2s-1$, after absolute unfolding and an Abel-damped Mellin calculation. Choose its fixed Haar normalization for $P_\nu$.

[F11] [[lem-gl2-pairing-divided-by-archimedean-gamma-factor-is-holomorphic]] proves that dividing $P_\nu$ by this Gamma factor removes all its apparent additional poles: the quotient is holomorphic off $\nu=1$ and has at most a simple pole there. Its proof uses a nonzero transverse residue of the local trilinear kernel, not an imported Jacquet theorem.

[F12] [[thm-euler-reflection-formula]] gives $\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$ meromorphically.

[F13] [[thm-identity-theorem-holomorphic-functions]] gives uniqueness of the continuation from a nonempty open part of its initial domain.

## Proof

**Given:** The two full-level distribution inputs, their fixed representation parameters, the parity $\eta$, and at least one cuspidal factor. Put $\nu=2s-1$, $w=s-(\lambda_1+\lambda_2)/2$, and $P_\nu=P_\nu(\tau_1,\tau_2,E_\nu)$.

1.1 By [F6], the coefficient product has a polynomial bound. Therefore the defining Dirichlet series converges absolutely for sufficiently large $\operatorname{Re}s$, simultaneously with the absolutely convergent defining series for $\zeta(2s)$ in [F2]. Its terms are holomorphic and converge locally uniformly there by the same polynomial majorant. Thus this definition determines a holomorphic initial function. [given, F2, F6, algebra]

1.2 The definitions of $G_0,G_1$ and [F12] give the meromorphic identities $G_0(z)G_0(1-z)=1$ and $G_1(z)G_1(1-z)=-1$. Indeed the Gamma product is $\pi/\sin(\pi z)$, the factors $(2\pi)^{-z}(2\pi)^{-(1-z)}$ contribute $(2\pi)^{-1}$, and the two cosine factors or the two sine factors multiply to $\sin(\pi z)/2$, with the extra $i^2=-1$ in the odd case. Thus $G_\eta(z)G_\eta(1-z)=(-1)^\eta$. [F12, algebra]

2.1 By [F7] the scalar $P_{2s-1}$ is meromorphic. Define $\mathcal L(s)=2(-1)^{\delta_1}P_{2s-1}/G_\eta(w)$ as a meromorphic quotient. The denominator is a nonzero meromorphic function. On a nonempty open subset of the initial half-plane where it is finite and nonzero, [F10] identifies $\mathcal L(s)$ with the Dirichlet series of step 1.1. The identity theorem extends that agreement through any isolated denominator zeros in the initial half-plane. Hence $\mathcal L$ is the required meromorphic continuation of that same initial L-function. [step 1.1, F7, F10, F13, algebra]

2.2 Combine [F8] and [F9], using linearity of the distribution pairing. Their relation is $G_0(\nu)P_\nu=(-1)^\eta G_\eta(A)G_\eta(B)P_{-\nu}/G_0(1-\nu)$, with $A=(\lambda_1-\lambda_2-\nu+1)/2$ and $B=(-\lambda_1+\lambda_2-\nu+1)/2$. By step 1.2, $G_0(\nu)G_0(1-\nu)=1$. Hence $P_\nu=(-1)^\eta G_\eta(A)G_\eta(B)P_{-\nu}$ meromorphically, including exceptional parameters by the meromorphic identities of the suppliers. [F8, F9, step 1.2, algebra]

3.1 By [F11], $P_\nu/G_\eta((\nu+1-\lambda_1-\lambda_2)/2)$ is holomorphic off $\nu=1$ and has at most a simple pole there. Substituting $\nu=2s-1$ proves that $\mathcal L$ is holomorphic off $s=1$ with at most a simple pole there. In particular it has no poles outside the allowed set $\{0,1\}$, and all poles allowed by the Statement are at most simple. [step 2.1, F11, algebra]

3.2 Substitute the defining quotient of step 2.1 into step 2.2. Since $A=1-s+(\lambda_1-\lambda_2)/2$, $B=1-s-(\lambda_1-\lambda_2)/2$, and the third Gamma argument in $P_{-\nu}$ is $1-s-(\lambda_1+\lambda_2)/2$, applying step 1.2 to these three complementary arguments gives
$$\mathcal L(1-s)=\prod_{\epsilon_1,\epsilon_2\in\{-1,1\}}G_\eta(s+\epsilon_1\lambda_1/2+\epsilon_2\lambda_2/2)\mathcal L(s).$$
The four signs cancel because the three reciprocal-factor conversions contribute $(-1)^{3\eta}$ and the original relation contributes $(-1)^\eta$. This is precisely the required equation. [step 2.1, step 1.2, step 2.2, algebra]

4.1 Steps 1.1–2.1 retain the prescribed coefficient and parameter normalization, step 3.1 gives the pole restriction, and step 3.2 gives the functional equation on the whole complex plane as a meromorphic identity. Every auxiliary choice used finite charts, explicit compact Riemann averages or explicitly indexed Fourier and Taylor limits; no choice axiom and no external theorem-import exception was used. The holomorphic specialization in [F4]–[F5] is compatible context and is not a replacement for this distribution argument. [step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎
