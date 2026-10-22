---
id: def-emx-angular-spectrum
kind: definition
title: Forward angular-spectrum beam
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-exponential
  - def-countable-choice
  - def-em-lab-geometry
  - def-em-complex-plane-wave
  - def-em-si-conventions
  - def-emx-transverse-fourier-field
  - lem-emx-paraxial-phase-multiplier-bound
  - lem-of-square-monotone
  - post-em-scalar-aperture-model
  - post-em-vacuum-maxwell
  - thm-fourier-inversion-on-schwartz-space
  - thm-plancherel
  - thm-reals-cauchy-complete
  - thm-of-square-roots
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-complex-plane-wave: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-emx-transverse-fourier-field: formulation-prerequisite
  lem-emx-paraxial-phase-multiplier-bound: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  post-em-scalar-aperture-model: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
  thm-of-square-roots: mathematical-premise
justified_by: []
proof_strategy: direct
physical_scope: >-
  Idealized classical scalar optics in a fixed inertial laboratory chart and SI units,
  for square-integrable plane data whose two-dimensional spatial-frequency support
  lies in a forward propagating cone strictly inside the vacuum light cone. The
  compact-aperture postulate supplies scalar-optics context but does not imply that
  every compact-aperture output belongs to this band-limited finite-energy class.
  The scalar propagation operators are not asserted to be exact Maxwell fields;
  exact vector plane-wave modes are treated separately. No empirical claim,
  measurement, or quantization is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "Complete §6.3: two-dimensional Fourier decomposition, positive square-root longitudinal wave number for forward propagation with $e^{-i\\omega t}$, and the propagating/evanescent split."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 'Fourier-Raum', equations (11.5)–(11.10), PDF pp. 121–122: source-free Maxwell Fourier modes, dispersion, transversality, and the electric/magnetic amplitude relation."
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§2, equations (2), (8), PDF pp. 2253–2254: angular-spectrum data and the positive propagation branch; no arbitrary compact-aperture data are inferred."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Fix a named positively oriented inertial laboratory chart with coordinates
$(x,y,z,t)$, spatial domain $\mathbb R^3$, and time domain $\mathbb R$. Adopt SI
units, a vacuum speed $c>0$, an angular frequency $\omega>0$, and
$k_0:=\omega/c$ (so $[k_0]=\mathrm{m}^{-1}$). Let
$\mathbf x_\perp:=(x,y)\in\mathbb R^2$. Use the unitary two-dimensional
Fourier transform $\mathcal F_2$ whose Schwartz-space convention is
$$\widehat f(\boldsymbol\xi)=\int_{\mathbb R^2}f(\mathbf x_\perp) e^{-2\pi i\mathbf x_\perp\cdot\boldsymbol\xi}\,d^2\mathbf x_\perp,$$
and whose inverse is its unitary $L^2$ extension. The variable
$\boldsymbol\xi$ is in cycles per metre; its associated angular spatial
wavevector is $\mathbf q:=2\pi\boldsymbol\xi$ in $\mathrm{m}^{-1}$, with
$|\mathbf q|^2:=q_x^2+q_y^2$.

Choose $0<\delta<1$ and $u_0\in L^2(\mathbb R^2;\mathbb C)$ with
$\mathcal F_2u_0$ supported, up to null sets, in
$D_\delta:=\{\boldsymbol\xi:|2\pi\boldsymbol\xi|\le\delta k_0\}$.
For $\boldsymbol\xi\in D_\delta$ put
$$k_z(\boldsymbol\xi):=\sqrt{k_0^2-|2\pi\boldsymbol\xi|^2},$$
which is real and strictly positive there. For each $z\in\mathbb R$, define the
exact multiplier on all of $\mathbb R^2$ by
$$m_{\mathrm{exact}}(z,\boldsymbol\xi):=\begin{cases}e^{izk_z(\boldsymbol\xi)},&\boldsymbol\xi\in D_\delta,\\0,&\boldsymbol\xi\notin D_\delta,\end{cases}$$
and define the paraxial multiplier on all of $\mathbb R^2$ by
$$m_{\mathrm{par}}(z,\boldsymbol\xi):=e^{ik_0z}e^{-iz|2\pi\boldsymbol\xi|^2/(2k_0)}.$$
The exact scalar and paraxial scalar propagators are the $L^2$ equivalence
classes
$$u_{\mathrm{exact}}(z):=\mathcal F_2^{-1}\!\left[m_{\mathrm{exact}}(z,\boldsymbol\xi)\,\mathcal F_2u_0(\boldsymbol\xi)\right],\qquad u_{\mathrm{par}}(z):=\mathcal F_2^{-1}\!\left[m_{\mathrm{par}}(z,\boldsymbol\xi)\,\mathcal F_2u_0(\boldsymbol\xi)\right].$$
The associated real scalar fields are the real parts of these phasors multiplied
by $e^{-i\omega t}$. If $u_0$ carries $\mathrm{V\,m^{-1}}$, both propagated
fields carry the same unit. “Exact” here names the exact positive axial
dispersion multiplier inside this scalar model; it does not assert exact
Maxwell validity. Forward propagation is $z\ge0$; the formulas also define the
mathematical continuation to negative $z$.

At a fixed $\boldsymbol\xi\in D_\delta$, write
$\mathbf K(\boldsymbol\xi):=(2\pi\xi_x,2\pi\xi_y,k_z(\boldsymbol\xi))$.
For complex amplitudes $\mathbf e,\mathbf b\in\mathbb C^3$ at frequency
$\omega$, the real-field encoding assigns the maps
$\mathbf E,\mathbf B:\mathbb R^3\times\mathbb R\to\mathbb R^3$ by
$$\mathbf E(\mathbf x,t):=\operatorname{Re}\!\left(\mathbf e e^{i(\mathbf K\cdot\mathbf x-\omega t)}\right),\qquad \mathbf B(\mathbf x,t):=\operatorname{Re}\!\left(\mathbf b e^{i(\mathbf K\cdot\mathbf x-\omega t)}\right).$$
In the SI field interpretation, $\mathbf e$ has units $\mathrm{V\,m^{-1}}$
and $\mathbf b$ has units tesla. The candidate is an **exact
source-free vacuum plane-wave mode** precisely when these real fields are
jointly $C^1$ and satisfy, pointwise on $\mathbb R^3\times\mathbb R$,
$$\operatorname{div}\mathbf E=0,\qquad \operatorname{div}\mathbf B=0,\qquad \operatorname{curl}\mathbf E=-\partial_t\mathbf B,\qquad \operatorname{curl}\mathbf B=c^{-2}\partial_t\mathbf E,$$
the zero-source specialization of the adopted smooth vacuum Maxwell branch.
The longitudinal electric coefficient is $e_z$, and
$\mathbf e_\perp:=(e_x,e_y)$ has norm
$|\mathbf e_\perp|^2:=|e_x|^2+|e_y|^2$. No scalar/vector polarization
factorization is part of this definition.

## Definition references

[[def-em-lab-geometry]]

[[def-em-si-conventions]]

[[thm-fourier-inversion-on-schwartz-space]]

[[thm-plancherel]]

[[def-countable-choice]]

[[def-complex-exponential]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[post-em-scalar-aperture-model]]

[[def-emx-transverse-fourier-field]]

[[post-em-vacuum-maxwell]]

[[def-em-complex-plane-wave]]

[[thm-reals-cauchy-complete]]

[[thm-of-square-roots]]

[[lem-of-square-monotone]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-emx-paraxial-phase-multiplier-bound]]

## Facts & Assumptions

**Given:** A fixed inertial chart, $c>0$, $\omega>0$, $0<\delta<1$, and $u_0\in L^2(\mathbb R^2;\mathbb C)$ with Fourier support in $D_\delta$.

[F1] The Schwartz Fourier convention is the displayed $e^{-2\pi i x\cdot\xi}$ integral, and under countable choice it extends uniquely to a unitary map on complex $L^2$; its inverse is the unitary inverse. [[thm-fourier-inversion-on-schwartz-space]] [[thm-plancherel]] [[def-countable-choice]]

[F2] The laboratory chart has spatial coordinates in metres and time in seconds; $c$ carries $\mathrm{m\,s^{-1}}$, $\omega$ carries $\mathrm{s^{-1}}$, and $E$ carries $\mathrm{V\,m^{-1}}$. [[def-em-lab-geometry]] [[def-em-si-conventions]]

[A1] The adopted scalar aperture model takes a finite complex measure supported on a compact planar aperture and assigns an outgoing scalar Helmholtz field in a polarization-insensitive regime; it does not assert exact Maxwell validity or that every aperture output is band-limited or square-integrable on a plane. [[post-em-scalar-aperture-model]]

[F3] The existing transverse Fourier-field definition uses a smooth compactly supported three-dimensional wavevector amplitude supported away from zero and imposes the bilinear condition $\mathbf k\cdot\mathbf a(\mathbf k)=0$; its three-dimensional Schwartz-packet class is distinct from the present two-dimensional fixed-frequency $L^2$ data. [[def-emx-transverse-fourier-field]]

[F4] A real plane-wave electric field is the componentwise real part of a complex amplitude times $e^{i(\mathbf K\cdot\mathbf x-\omega t)}$. [[def-em-complex-plane-wave]]

[A2] The homogeneous system in the Definition is the source-free specialization of the adopted smooth vacuum Maxwell postulate, so in particular $\operatorname{div}\mathbf E=0$. This is a physical model assumption, not an empirical observation. [[post-em-vacuum-maxwell]]

[F5] Complex exponential and real-part operations are defined on every complex number; the real-field encoding is componentwise. [[def-complex-exponential]] [[def-complex-conjugate-real-imaginary-part-and-modulus]]

[F6] The real numbers are a complete ordered field. [[thm-reals-cauchy-complete]]

[F7] Every nonnegative real has a unique nonnegative square root, and a positive real has a positive root. [[thm-of-square-roots]]

[F8] Squaring preserves and reflects the order on nonnegative real numbers. [[lem-of-square-monotone]]

[F9] For real $\theta$, $|e^{i\theta}|=1$; for $w=a+ib$, $|\operatorname{Re}w|^2=a^2\le a^2+b^2=|w|^2$, hence $|\operatorname{Re}w|\le|w|$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[def-complex-conjugate-real-imaginary-part-and-modulus]] [[lem-of-square-monotone]]

[F10] For real $a,b$, $|e^{ia}-e^{ib}|\le|a-b|$. [[lem-emx-paraxial-phase-multiplier-bound]]

## Verification

1.1 For $\boldsymbol\xi\in D_\delta$, put $\mathbf q:=2\pi\boldsymbol\xi$, $a:=k_0^2-|\mathbf q|^2$ and $b:=k_0^2(1-\delta^2)$. The support condition gives $0<b\le a\le k_0^2$. By [F6] and [F7] the roots in the definition exist; uniqueness and $k_0>0$ give $\sqrt b=k_0\sqrt{1-\delta^2}$ and $\sqrt{k_0^2}=k_0$. Applying [F8] to these nonnegative roots yields $0<k_0\sqrt{1-\delta^2}\le k_z(\boldsymbol\xi)\le k_0$. [given, F6, F7, F8, algebra]

1.2 The transverse and axial coordinates are measured in metres, while $\mathbf q,k_z,k_0$ are in $\mathrm{m}^{-1}$; thus every propagation-phase exponent is dimensionless. The multipliers preserve the unit of $u_0$. [given, F2, algebra]

1.3 [A1] fixes a separate scalar optical model, while the present Definition additionally restricts its plane data by $L^2$ and $D_\delta$ support; hence no existence or band-limit claim for every compact-aperture output is being made. [given, A1]

2.1 For $\boldsymbol\xi,\boldsymbol\eta\in D_\delta$, rationalizing gives $$|k_z(\boldsymbol\xi)-k_z(\boldsymbol\eta)|= \frac{\bigl||2\pi\boldsymbol\xi|^2-|2\pi\boldsymbol\eta|^2\bigr|} {k_z(\boldsymbol\xi)+k_z(\boldsymbol\eta)}.$$ The denominator is at least $2k_0\sqrt{1-\delta^2}>0$ by step 1.1, and the numerator is continuous in $(\boldsymbol\xi,\boldsymbol\eta)$; hence $k_z$ is continuous on $D_\delta$. By [F10], $|e^{izk_z(\boldsymbol\xi)}-e^{izk_z(\boldsymbol\eta)}|\le|z|\,|k_z(\boldsymbol\xi)-k_z(\boldsymbol\eta)|$, so the exact exponential branch is continuous on $D_\delta$; since $D_\delta$ is closed, its zero extension $m_{\mathrm{exact}}$ is measurable on $\mathbb R^2$. The paraxial phase is a continuous real polynomial in the spatial frequencies; applying the same [F10] estimate to its real phase values makes $m_{\mathrm{par}}$ continuous and hence measurable on $\mathbb R^2$. [F9] gives modulus one for $m_{\mathrm{exact}}$ on $D_\delta$ and for $m_{\mathrm{par}}$ everywhere; $m_{\mathrm{exact}}$ is zero off $D_\delta$. [step 1.1, F9, F10, algebra]

3.1 Both multipliers are measurable and bounded by one, so their products with $\mathcal F_2u_0$ are in $L^2$. Since $\mathcal F_2u_0$ vanishes almost everywhere off $D_\delta$, the exact multiplier's modulus one on $D_\delta$ and the paraxial multiplier's modulus one everywhere show that each product has the same $L^2$ norm as $\mathcal F_2u_0$. The unitary inverse in [F1] defines the propagated classes. For each fixed $t$, [F9] gives $|\operatorname{Re}(e^{-i\omega t}u)|\le|e^{-i\omega t}u|=|u|$, so the real scalar fields are in $L^2$ and independent of the representative. [step 2.1, F1, F5, F9, algebra]

4.1 The fixed-frequency plane-mode clause uses the real fields of [F4] and the zero source pair in [A2]; its Maxwell equations are the homogeneous specialization of the adopted postulate. It is not identified with the distinct three-dimensional Schwartz Fourier-packet construction in [F3]. [given, F3, F4, A2] ∎

## Remarks

The following normalized cross-section uses $Q=q_x/k_0$ and $K_z=k_z/k_0$, sets $q_y=0$, and sketches the illustrative value $\delta=1/2$. The exact admissible region in the Definition is the disk $|q|\le\delta k_0$; the diagram is only a cross-section and is not used in any proof.

~~~tikz
\begin{tikzpicture}[x=2.2cm,y=1.7cm]
  \draw[->] (-1.15,0) -- (1.2,0) node[right] {$Q$};
  \draw[->] (0,0) -- (0,1.2) node[above] {$K_z$};
  \draw[thick,domain=-1:1,samples=80]
    plot (\x,{sqrt(1-\x*\x)});
  \draw[dashed,thick,domain=-0.5:0.5,samples=40]
    plot (\x,{1-\x*\x/2});
  \draw[dotted] (-0.5,0) -- (-0.5,1.08);
  \draw[dotted] (0.5,0) -- (0.5,1.08);
  \node[above right] at (0.56,0.84) {$1-Q^2/2$};
  \node[above left] at (-0.88,0.47) {$\sqrt{1-Q^2}$};
  \node[below] at (-0.5,0) {$-\delta$};
  \node[below] at (0.5,0) {$\delta$};
\end{tikzpicture}
~~~
