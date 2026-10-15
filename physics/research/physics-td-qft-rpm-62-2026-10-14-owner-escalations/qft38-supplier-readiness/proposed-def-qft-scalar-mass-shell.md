---
id: def-qft-scalar-mass-shell
kind: definition
title: Scalar future mass shell, invariant measure and test restriction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-time-orientation-and-future-causal-sets
  - def-causal-classification-of-lorentz-vectors
  - def-inertial-frame-and-inertial-chart
  - def-schwartz-space-and-its-seminorms
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
dependency_roles:
  def-countable-choice: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, section 2.4.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted lecture notes; equations 2.133–2.141, printed pages 23–25.
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapters 3–4
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; chapter 3 equations 3.15–3.19 and chapter 4 equations 4.11–4.15.
---

## Definition

Assume Countable Choice [[def-countable-choice]]. Here
$\mathscr S(\mathbb R^4)$ is the Schwartz space of smooth complex functions
whose coordinate-weighted derivatives are all bounded, as defined in
[[def-schwartz-space-and-its-seminorms]].
Fix an oriented, time-oriented affine Minkowski space and an inertial coordinate
chart as in [[def-sr-affine-minkowski-model]] and
[[def-inertial-frame-and-inertial-chart]]. Use coordinates
$x=(x^0,\mathbf x)$ and metric $\eta=\mathrm{diag}(-1,1,1,1)$, matching the
$(-+++)$ convention of the SR suppliers. Some QFT sources use its negative
$(+---)$; the Lorentz group is unchanged, and the phase is fixed explicitly
below.
Coordinates $x$ have length units, momenta have inverse-length units, and the
Fourier phase below is dimensionless. A parameter $\mu\ge0$ has inverse-length
units and is only a mathematical shell parameter; it is not identified with a
physical rest mass. For $\mathbf k\in\mathbb R^3$, set
$$\omega_\mu(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2},\qquad
p_\mu(\mathbf k)=(\omega_\mu(\mathbf k),\mathbf k).$$
The future mass shell is
$$H_\mu^+=\{(p^0,\mathbf p): (p^0)^2-|\mathbf p|^2=\mu^2,\ p^0>0\}.$$
When $\mu=0$, its apex is omitted; thus $\mathbf k\ne0$ in the massless
parameterization. The scalar shell pairing is
$$p\circ x:=p^0x^0-\mathbf p\cdot\mathbf x=-\eta(p,x).$$
Define the measure and one-particle Hilbert space by
$$d\nu_\mu(p_\mu(\mathbf k))=
\frac{d^3\mathbf k}{(2\pi)^3\,2\omega_\mu(\mathbf k)},\qquad
H_\mu=L^2(H_\mu^+,d\nu_\mu;\mathbb C),$$
where the omitted massless apex has measure zero. For $f\in\mathscr S(\mathbb
R^4)$ define its pointwise shell Fourier restriction by
$$K_\mu f(p)=\int_{\mathbb R^4}f(x)e^{ip\circ x}\,d^4x.$$
The Fourier convention is exactly the displayed integral, with no prefactor.
If $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,d^4x$ denotes the
standard transform in [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]],
then $K_\mu f(p)=\widehat f((-p^0,\mathbf p)/(2\pi))$. Define the full shell-phase transform
$\mathcal F_\circ f(q):=\int f(x)e^{i(q^0x^0-\mathbf q\cdot\mathbf x)}\,d^4x$ for $q\in\mathbb R^4$; its inverse is
$f(x)=(2\pi)^{-4}\int\mathcal F_\circ f(q)e^{-i(q^0x^0-\mathbf q\cdot\mathbf x)}\,d^4q$.
Thus this convention is a coordinate reflection and rescaling of the cited
Schwartz automorphism, has the stated reciprocal normalization, and
$K_\mu f(p)=\mathcal F_\circ f(p)$ on the future shell.
The proper orthochronous Lorentz group consists of linear maps preserving
$\eta$, orientation and the chosen future cone. A Poincare map is
$x\mapsto a+\Lambda x$ with $a\in\mathbb R^4$ and $\Lambda$ in that group.

This is a mathematical free scalar one-particle construction. It adopts the
chosen coordinates, measure and Fourier convention; it asserts no experimental
observation, physical mass identification or measurement outcome.
