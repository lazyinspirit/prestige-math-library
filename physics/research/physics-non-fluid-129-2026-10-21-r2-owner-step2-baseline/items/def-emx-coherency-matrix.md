---
id: def-emx-coherency-matrix
kind: definition
title: Classical two-component coherency matrix
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-cm-covariance-matrix-of-a-random-vector
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-em-polarization-definition
  - def-em-si-conventions
  - pthm-emx-paraxial-error
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-em-polarization-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  pthm-emx-paraxial-error: physical-result
proof_strategy: direct
physical_scope: >-
  An ideal classical ensemble of two complex transverse electric-field
  components at a specified plane in a fixed positively oriented SI laboratory
  chart, using the exp(-i omega t) convention and the cone specified in the
  Definition. Gamma is an uncentered second-moment matrix of the two-component
  projection; it is not a quantum density operator or a full three-dimensional
  coherence matrix. The paraxial suppliers bound longitudinal amplitude for
  individual exact plane modes but do not supply an aggregate ensemble or
  detector-error bound. No measurement, absolute radiometric calibration,
  sampling law, or empirical claim is made. A time average is not identified
  with the ensemble expectation without separately stated stationarity and
  ergodicity assumptions.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "José J. Gil, Polarimetric Characterization of Light and Media, §2.1–2.6, author-revised 2020 version of Eur. Phys. J. Appl. Phys. 40 (2007)"
      url: "https://arxiv.org/pdf/2002.04105"
      locator: "§2.1, PDF pp. 6–7: 2×2 coherency matrix from two complex field components and time versus ensemble averaging; §2.2–2.6, PDF pp. 7–11: Stokes coordinates, the positive-semidefinite cone and rank/purity. The local definition uses an ensemble expectation directly and does not import the source's zero-mean analytic-signal or stationary-ergodic interpretation as an extra assumption."
verification:
  precheck: pending
---

## Definition

Fix a named, positively oriented SI laboratory chart with coordinates
$(x,y,z,t)$ and angular frequency $\omega>0$. Adopt the SI constants and
coordinate units of the laboratory convention: $c>0$ is in m s$^{-1}$,
$k_0:=\omega/c$ is in m$^{-1}$, and electric-field components are in V
m$^{-1}$. Let
$\Pi=\{(x,y,z_0):(x,y)\in D\}$ be a specified reference plane, where
$z_0\in\mathbb R$ and $D\subseteq\mathbb R^2$ is a specified nonempty region.
Its oriented orthonormal transverse basis is $(e_x,e_y)$ and its normal is
$e_z$.

For the paraxial context, adopt $c>0$, $k_0=\omega/c$, and
$0<\delta<1$. The angular-spectrum variable $\xi\in\mathbb R^2$ is measured
in cycles per metre, $q=2\pi\xi$ is in m$^{-1}$, and the forward propagating
cone is $D_\delta=\{\xi:|q|\le\delta k_0\}$ with
$k_z(\xi)=\sqrt{k_0^2-|q|^2}>0$. The matrix below is defined pointwise for the
two-component projection; it does not assert that an arbitrary random
superposition is an exact Maxwell field or that the individual-mode
longitudinal bound extends to an ensemble without additional hypotheses.

Let $(\Xi,\mathcal A,\mathbb P)$ be a specified probability space. At each
fixed $\rho\in D$, let $Z_\rho:\Xi\to\mathbb C^2$ be measurable, with four real
coordinates
$X_\rho=(\operatorname{Re}Z_x,\operatorname{Im}Z_x,
\operatorname{Re}Z_y,\operatorname{Im}Z_y)$ forming a square-integrable
$\mathbb R^4$ random vector and
$\mathbb E[|Z_x(\rho)|^2+|Z_y(\rho)|^2]<\infty$. For $\sigma\in\Xi$, the
associated transverse real-field model is
$E_\perp(\rho,\sigma,t)=\operatorname{Re}(Z_\rho(\sigma)e^{-i\omega t})$.
Expectation is taken over this declared classical ensemble and is applied
componentwise to complex integrable variables. Define
$$\Gamma(\rho):=\mathbb E[Z_\rho Z_\rho^\dagger],\qquad \Gamma_{ij}(\rho):=\mathbb E[Z_i(\rho)\overline{Z_j(\rho)}]\quad(i,j\in\{1,2\}).$$
Thus $\Gamma$ is the uncentered second-moment matrix of the two selected
components; no zero-mean assumption is made. The degree of polarization is
defined only when $S_0>0$ by
$$S_0:=\Gamma_{11}+\Gamma_{22},\quad S_1:=\Gamma_{11}-\Gamma_{22},\quad S_2:=2\operatorname{Re}\Gamma_{12},\quad S_3:=-2\operatorname{Im}\Gamma_{12},\qquad \mathcal P:=\frac{\sqrt{S_1^2+S_2^2+S_3^2}}{S_0}.$$
The minus sign in $S_3$ is fixed by the stated phasor convention and the
ordered basis $(e_x,e_y)$. In this two-component model, a positive-intensity
state is called unpolarized when $\Gamma=(S_0/2)I_2$; this label concerns
second moments and does not say that any realization is a quantum state.
The $S_j$ have units (V m$^{-1}$)$^2$; $S_0$ is a mean-square field coordinate,
not an absolutely calibrated irradiance.

The construction applies to any ordered pair of square-integrable classical
complex amplitudes. When the pair labels transverse electric components,
$S_j$ have the polarization interpretation just defined. When it labels two
beam channels, the same matrix entries are channel correlations; they are not
polarization components.

## Definition references

[[def-em-polarization-definition]]

[[def-em-si-conventions]]

[[pthm-emx-paraxial-error]]

[[def-cm-covariance-matrix-of-a-random-vector]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[cor-expectation-linearity-monotonicity-and-modulus-bound]]

## Facts & Assumptions

**Given:** A fixed detector plane and transverse basis, $\omega>0$, a
probability space $(\Xi,\mathcal A,\mathbb P)$, and for each chosen $\rho$ a
measurable $Z_\rho:\Xi\to\mathbb C^2$ with
$\mathbb E(|Z_x|^2+|Z_y|^2)<\infty$. Use SI units and the $e^{-i\omega t}$
phasor convention.

[F1] [[def-cm-covariance-matrix-of-a-random-vector]]: a probability space has
total measure one; a measurable real random vector with finite second moment
has integrable coordinates and finite second moments. We use this probability
and integrability interface, not its centered covariance matrix.

[F2] [[def-complex-conjugate-real-imaginary-part-and-modulus]] and
[[cor-expectation-linearity-monotonicity-and-modulus-bound]]: complex
conjugation, real and imaginary parts, and modulus are componentwise
operations; expectation of an integrable complex variable is the pair of its
real expectations and is linear.

[A1] The probability law is an adopted ensemble model. Replacing its
expectation by a long-time average requires additional stationarity and
ergodicity hypotheses; no sampled or measured average is asserted here.

## Proof

1.1 For a fixed $\rho$, write $Z_1=Z_x(\rho)$ and $Z_2=Z_y(\rho)$. The
diagonal products $|Z_j|^2$ are integrable by the given finite second moment,
and
$|Z_1\overline{Z_2}|=|Z_1||Z_2|\le(|Z_1|^2+|Z_2|^2)/2$
pointwise. Hence each entry $\mathbb E[Z_i\overline{Z_j}]$ is a finite complex
expectation under [F1]–[F2], so $\Gamma(\rho)$ is well-defined.
[given, F1, F2, algebra]

2.1 Componentwise conjugation and linearity of the real integrals give
$\Gamma_{ji}=\mathbb E[Z_j\overline{Z_i}]
=\mathbb E[\overline{Z_i\overline{Z_j}}]
=\overline{\mathbb E[Z_i\overline{Z_j}]}=\overline{\Gamma_{ij}}$;
the diagonal entries are real and nonnegative. Therefore
$\Gamma^\dagger=\Gamma$.
[given, step 1.1, F2, algebra] ∎

## Remarks

The matrix is uncentered: unless the ensemble mean vanishes, it is not the
centered covariance matrix. The individual-mode longitudinal bound from
[[pthm-emx-paraxial-error]] does not give an aggregate bound for a random
superposition, so none is claimed. A detector model, calibration, noise law,
finite-sample uncertainty, or equality between time and ensemble averages must
be supplied separately.
