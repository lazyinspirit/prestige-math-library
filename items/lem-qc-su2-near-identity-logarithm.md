---
id: lem-qc-su2-near-identity-logarithm
kind: lemma
title: A Quantitative Logarithm Near the Identity in SU(2)
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-termwise-differentiation-of-complex-power-series
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - cor-complex-differentiability-implies-continuity
  - def-natural-logarithm
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - thm-intermediate-value
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §4.1–§4.2, near-identity and commutator estimates, PDF pp. 8–10
    - title: Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
      locator: §4.3.2–§4.3.3, PDF pp. 28–39
---

## Statement

For a matrix $M$, write $e^M=\sum_{j\ge0}M^j/j!$. Here
$SU(2):=\{M\in M_2(\mathbb C):M^*M=I_2,\det M=1\}$. If
$D\in SU(2)$ and $\|D-I\|\le\rho\le1/2$, then the operator-norm
convergent series
$$\log D=\sum_{j=1}^{\infty}(-1)^{j+1}(D-I)^j/j$$
satisfies $e^{\log D}=D$, is traceless and skew-Hermitian, and
$\|\log D\|\le-\log(1-\rho)\le2\rho$.

## Facts & Assumptions

**Given:** $D\in SU(2)$ and $\|D-I\|\le\rho\le1/2$.

[F1] A normal complex matrix has an orthonormal eigenbasis
([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The operator norm is submultiplicative
([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]); its triangle
inequality follows from the operator-norm definition by applying the vector
triangle inequality to each unit input vector and taking the maximum
([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F3] The complex exponential is defined by its convergent power series and
satisfies the addition identity ([[thm-complex-exponential-addition-and-real-extension]]).

[F4] The natural logarithm is the inverse of the real exponential on positive
reals ([[def-natural-logarithm]]).

[F5] For real $t$, $e^{it}=\cos t+i\sin t$ and
$|e^{it}-1|=2|\sin(t/2)|$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F6] For complex $z$, $e^z=1$ exactly when $z\in2\pi i\mathbb Z$
([[thm-kernel-and-fibres-of-complex-exponential]]).

[F7] Every point of the unit circle has a real angular parameter
([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F8] Sine and cosine are continuous and $\sin 0=0$
([[thm-sine-and-cosine-derivatives]]).

[F9] Sine is strictly increasing on $[-\pi/2,\pi/2]$
([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F10] Sine is odd, and the cofunction and double-angle identities include
$\sin(\pi/6)=\cos(\pi/3)$ and
$\cos(\pi/3)=1-2\sin^2(\pi/6)$
([[thm-cofunction-supplementary-and-reflection-identities]],
[[thm-double-angle-and-power-reduction-identities]]).

[F11] A complex power series may be differentiated term by term inside its
disc of convergence ([[thm-termwise-differentiation-of-complex-power-series]]).

[F12] The complex exponential has derivative itself, complex derivatives obey
the chain, product and quotient rules, and a holomorphic function with zero
derivative on a domain is constant
([[thm-complex-exponential-is-entire-with-derivative-itself]],
[[thm-chain-rule-for-complex-derivatives]],
[[thm-algebra-of-complex-derivatives]],
[[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[F13] A complex-differentiable function is continuous
([[cor-complex-differentiability-implies-continuity]]).

[F14] A continuous real-valued function on an interval takes every value
between its endpoint values ([[thm-intermediate-value]]).

## Proof


1.1 Put $s=\sin(\pi/6)$. Since $0<\pi/6<\pi/2$, [F8] and [F9] give $s>0$. By [F10], $s=\cos(\pi/3)=1-2s^2$, so $(2s-1)(s+1)=0$ and positivity gives $s=1/2$. By [F1], $D$ is unitarily diagonalizable with eigenvalues $\lambda_1,\lambda_2$ on the unit circle. Since $\det D=1$, $\lambda_1\lambda_2=1$. Choose principal angular representatives $\theta_j\in(-\pi,\pi]$ using [F7]. The norm bound and [F5] give $2|\sin(\theta_j/2)|=|\lambda_j-1|\le\rho\le1/2$, hence $|\sin(\theta_j/2)|\le1/4<1/2=\sin(\pi/6)$. Oddness and strict monotonicity in [F9] force $|\theta_j|<\pi/3$. Now [F6] gives $\theta_1+\theta_2\in2\pi\mathbb Z$; the bound on their sum forces $\theta_2=-\theta_1$. [F1, F5, F6, F7, F8, F9, F10, given, algebra]

2.1 For $|z|<1$, the scalar power series $L(z)=\sum_{j\ge1}(-1)^{j+1}z^j/j$ converges absolutely by comparison with $\sum_{j\ge1}|z|^j$, so its disc of convergence contains the unit disk. By [F11], $$L'(z)=\sum_{j\ge1}(-1)^{j+1}z^{j-1}=\sum_{k\ge0}(-z)^k=\frac1{1+z},$$ where the last equality is the finite geometric-sum identity followed by a limit. Since $1+z\ne0$ on the unit disk, [F12] gives $$\left(\frac{e^{L(z)}}{1+z}\right)'=\frac{e^{L(z)}L'(z)(1+z)-e^{L(z)}}{(1+z)^2}=0.$$ The open unit disk is convex, hence a connected open domain, so [F12] makes this quotient constant there. Its value at $0$ is $1$, and therefore $e^{L(z)}=1+z$. For $z=e^{it}-1$ with $|t|<\pi/3$, [F5], [F9], and [F10] show $|z|=2|\sin(t/2)|<1$. Thus [F6] gives $L(e^{it}-1)-it\in2\pi i\mathbb Z$. This difference is continuous in $t$ by [F13], [F5], and [F8]. Dividing it by $2\pi i$ gives a continuous integer-valued real function. If it took distinct values at two points, restrict to the closed interval between them; [F14] would force it to take a noninteger value between them; hence it is constant and, at $t=0$, zero. Substitution of $z=\lambda_j-1$ now shows the matrix series diagonalizes to $i\theta_1,i\theta_2$, so exponentiating it gives $D$. [F1, F3, F5, F6, F8, F9, F10, F11, F12, F13, F14, step 1.1, algebra]

3.1 By [F2], the norm of the series is at most $\sum_{j\ge1}\rho^j/j$. The scalar identity from step 2.1 at $z=-\rho$ and [F4] identify this sum with $-\log(1-\rho)$. Since $1/j\le1$ and $\sum_{j\ge1}\rho^j=\rho/(1-\rho)\le2\rho$ for $0\le\rho\le1/2$, the claimed bound follows. The eigenvalues of $\log D$ are $i\theta_1,-i\theta_1$, so it is skew-Hermitian and has trace zero. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎

