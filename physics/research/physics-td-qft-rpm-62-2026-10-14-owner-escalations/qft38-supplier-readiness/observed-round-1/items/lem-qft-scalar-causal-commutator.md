---
id: lem-qft-scalar-causal-commutator
kind: lemma
title: Causal support of the scalar commutator distribution
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - lem-qft-smeared-free-scalar
  - def-schwartz-space-and-its-seminorms
  - def-tempered-distribution
  - thm-fourier-inversion-on-schwartz-space
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - def-sr-affine-minkowski-model
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-tempered-distribution: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, section 2.6.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page notes; equations 2.160–2.167 derive the scalar-field commutator and spacelike vanishing.
    - title: Fewster and Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051
      locator: Complete 47-page article, version 2; section 4.2, PDF pages 14–18, causal propagator and free scalar Weyl algebra.
---

## Statement

Assume Countable Choice. For $\mu\ge0$, define the tempered distribution
$$\Delta_\mu(t,\mathbf x)=
\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3}
\frac{\sin(\omega_\mu(\mathbf k)t)}{\omega_\mu(\mathbf k)}
e^{i\mathbf k\cdot\mathbf x},$$
with the massless integrand defined off $\mathbf k=0$; its $1/|\mathbf k|$
behavior is locally integrable in three dimensions. Then
$$\operatorname{supp}\Delta_\mu
\subseteq\{(t,\mathbf x):t^2-|\mathbf x|^2\ge0\},$$
the closed causal cone for the $(-+++)$ metric. For real compactly supported
smooth $f,g$, put
$$\Delta_\mu(f,g)=
\int_{\mathbb R^4}\!\int_{\mathbb R^4}
f(x)g(y)\Delta_\mu(x-y)\,d^4x\,d^4y.$$
On $\mathcal D_{\rm fin}$ the smeared fields of
[[lem-qft-smeared-free-scalar]] satisfy
$$[\Phi_\mu(f),\Phi_\mu(g)]=-i\Delta_\mu(f,g)I.$$
Consequently spacelike-separated supports give commuting fields.

## Facts & Assumptions

**Given:** Countable Choice; the shell/Fock conventions of
[[def-qft-scalar-mass-shell]] and
[[def-qft-fock-and-test-spaces]], the field formula and CCR, Fourier inversion,
and the $(-+++)$ causal-cone convention.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The field is
$\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f)$ for real tests.
[[lem-qft-smeared-free-scalar]]

[F2] The shell restriction uses
$e^{i(\omega_\mu t-\mathbf k\cdot\mathbf x)}$ and measure
$d^3\mathbf k/[(2\pi)^3 2\omega_\mu]$.
[[def-qft-scalar-mass-shell]]

[F3] The bosonic commutation relation is
$[a(h),a^\dagger(k)]=\langle h,k\rangle_2 I$ on finite-particle vectors.
[[lem-qft-fock-ccr-car]]
The pairing is second-variable-linear as fixed in
[[def-qft-fock-and-test-spaces]].

[F4] Fourier inversion on Schwartz space has the reciprocal normalization
to its stated forward transform.
[[thm-fourier-inversion-on-schwartz-space]]

[F5] A tempered distribution is a continuous linear functional on Schwartz
space, with support defined by vanishing on test functions supported in the
complement. [[def-tempered-distribution]]

[F6] For the chosen inertial coordinates the causal cone is
$t^2-|\mathbf x|^2\ge0$. [[def-sr-affine-minkowski-model]]

[F7] A nonnegative smooth compactly supported bump exists inside any
Euclidean ball; translating, rescaling and normalizing its integral gives the
spatial mollifier used below.
[[lem-smooth-bump-between-concentric-euclidean-balls]]

[F8] The Fourier transform and inverse preserve Schwartz space; the shell
convention differs by the reflection and rescaling stated in
[[def-qft-scalar-mass-shell]].
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

## Proof

1.1 Assume Countable Choice as required by [F4]. For fixed $t$,
$\sin(\omega_\mu t)/\omega_\mu$ is bounded near
$\mathbf k=0$ when $\mu>0$ and is bounded by $|t|$ when $\mu=0$; at infinity
it is $O(|\mathbf k|^{-1})$. Pairing with a Schwartz function is absolutely
bounded by a Schwartz seminorm times the integral of
$|q(\mathbf k)|(1+|\mathbf k|)^{-4}$, which is finite. Thus it defines a
tempered inverse Fourier transform in $\mathbf x$, and its massless apex
singularity is locally integrable. Differentiating the multiplier in $t$
distributionally shows
$(\partial_t^2-\Delta_{\mathbf x}+\mu^2)\Delta_\mu=0$,
$\Delta_\mu(0,\cdot)=0$, and
$\partial_t\Delta_\mu(0,\cdot)=\delta_0$; the last identity is Fourier
inversion [F4]. [A1, F2, F4, F5, given, algebra]

2.1 Choose a nonnegative smooth spatial mollifier $\rho_\epsilon$ of integral
one supported in $|\mathbf x|<\epsilon$, using [F7], and let
$u_\epsilon(t,\cdot)=\Delta_\mu(t,\cdot)*\rho_\epsilon$. Its Fourier
multiplier is $\widehat\rho_\epsilon(\mathbf k)\sin(\omega_\mu t)/\omega_\mu$;
this is Schwartz in $\mathbf k$ for every fixed $t$, including $\mu=0$
because $\sin(|\mathbf k|t)/|\mathbf k|$ has a power series in
$|\mathbf k|^2$. Thus $u_\epsilon$ and its derivatives are Schwartz and have
finite energy by [F8]. By 1.1 it is a smooth solution of the
Klein–Gordon equation with data
$u_\epsilon(0)=0$, $\partial_tu_\epsilon(0)=\rho_\epsilon$. Its initial
energy is finite. Choose $R>\epsilon$ and for $t\ge0$ set
$$E_R(t)=\frac12\int_{|\mathbf x|>R+t}
\bigl(|\partial_tu_\epsilon|^2+|\nabla u_\epsilon|^2+
\mu^2|u_\epsilon|^2\bigr)\,d^3\mathbf x.$$
The equation and integration by parts on the exterior region give
$$E_R'(t)=-\frac12\int_{|\mathbf x|=R+t}
\left(|\partial_tu_\epsilon+\partial_ru_\epsilon|^2+
|\nabla_Tu_\epsilon|^2+\mu^2|u_\epsilon|^2\right)dS\le0.$$
For a complex solution apply this identity to real and imaginary parts.
Cutoff at a large radius and use finite energy to pass to the exterior
integral. Since $E_R(0)=0$ and $E_R(t)\ge0$, it vanishes for all $t\ge0$.
For $\mu>0$ this forces $u_\epsilon=0$ outside $R+t$; for $\mu=0$ it forces
its spatial gradient and time derivative to vanish there, so it is constant
on the connected exterior and the inverse Fourier transform tends to zero at
spatial infinity, hence the constant is zero. Reversing time gives support
inside $|\mathbf x|\le R+|t|$ for both signs of $t$. [F5, F6, F7, F8, step 1.1,
given, energy]

2.2 Let $\epsilon\downarrow0$ and choose $R=2\epsilon$. For every compact
smooth test $\varphi(t,\mathbf x)$, its spatial convolution with the
reflected mollifier converges with all derivatives uniformly on one compact
set to $\varphi$; this follows by writing the difference as the average of
$\varphi(t,\mathbf x-\mathbf y)-\varphi(t,\mathbf x)$ for
$|\mathbf y|<\epsilon$ and applying the mean-value bound to each derivative.
Continuity of the tempered distribution [F5] therefore gives
$\Delta_\mu*_{\,\mathbf x}\rho_\epsilon\to\Delta_\mu$ distributionally.
If a compact test support lies in the spacelike open set
$|\mathbf x|>|t|$, its positive distance from the closed cone on that compact
set gives a margin $\delta>0$; choosing $3\epsilon<\delta$ makes its pairing
with $u_\epsilon$ vanish by 2.1. Passing to the distributional limit proves
the support inclusion.
[F5, step 2.1, given, algebra]

3.1 For real $f,g$, expand the commutator using [F1]. The two like-type
commutators vanish; [F3] leaves
$$\langle K_\mu\overline f,K_\mu g\rangle_2
-\langle K_\mu\overline g,K_\mu f\rangle_2.$$
Substitute the shell integrals [F2], use the second-variable-linear pairing,
and combine the two exponentials. The result is
$-i\int f(x)g(y)\Delta_\mu(x-y)\,d^4x\,d^4y$; the sign follows from
$e^{-ip\circ(x-y)}-e^{ip\circ(x-y)}=-2i\sin(p\circ(x-y))$ and the
definition of $\Delta_\mu$. If every pair $(x,y)$ in the two supports is
spacelike separated, then $x-y$ lies outside the support in 2.2, so the
distributional pairing vanishes. [A1, F1, F2, F3, step 2.2, given, algebra] ∎
