---
id: pthm-emx-scalar-vortex-eigenvalue
kind: physics-theorem
title: Paraxial orbital winding in its exact scalar domain
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-complex-exponential
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-directional-and-partial-derivatives
  - def-em-si-conventions
  - def-emx-angular-spectrum
  - thm-chain-rule-for-total-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
dependency_roles:
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-emx-angular-spectrum: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional identity for a smooth, finite-transverse-norm scalar paraxial
  field in the specified angular-spectrum model, at a fixed propagation plane.
  The dimensionless scalar rotation generator is not identified with torque,
  total electromagnetic angular momentum, a photon angular momentum, or a
  general exact-vector spin/orbital decomposition. No empirical claim is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§1 and §5, PDF pp. 2253 and 2257–2258: the paraxial scalar winding parameter and the scope limits of its relation to full vector angular-momentum flux."
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "§6.3: scalar plane propagation and the separate transversality requirement for vector fields; the scalar generator identity is proved locally."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 equations (11.5)–(11.10), PDF pp. 121–122: exact source-free vector-mode constraints; no photon interpretation is imported."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Fix a propagation plane $z$ and let $u_z\in C^\infty(\mathbb R^2;\mathbb C)
\cap L^2(\mathbb R^2;\mathbb C)$ be a scalar field in the paraxial model.
Assume $u_z$ is nonzero as an $L^2$ equivalence class. For $r>0$ write
$u_z(r\cos\phi,r\sin\phi)=f(r)e^{i\ell\phi}$, where
$\ell\in\mathbb Z$ and $\phi$ is read modulo $2\pi$. Require a smooth
axis extension; explicitly, assume there are $\epsilon>0$ and a smooth
complex-valued $g:(-\epsilon,\epsilon)\to\mathbb C$ such that
$f(r)=r^{|\ell|}g(r^2)$ for $0<r<\sqrt\epsilon$. Define
$L_z^{\mathrm{sc}}:=-i(-y\partial_x+x\partial_y)$ and use the
first-variable-linear $L^2$ pairing
$$\langle v,w\rangle_2:=\int_{\mathbb R^2}v(x,y)\overline{w(x,y)}\,d^2x.$$
Then the normalized scalar angular-generator expectation is
$$\frac{\langle L_z^{\mathrm{sc}}u_z,u_z\rangle_2} {\langle u_z,u_z\rangle_2}=\ell.$$

## Statement references

[[def-emx-angular-spectrum]]

[[def-complex-exponential]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[def-directional-and-partial-derivatives]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-complex-exponential-is-entire-with-derivative-itself]]

## Facts & Assumptions

**Given:** A fixed plane $z$, the stated smooth $L^2$ scalar field $u_z$ with
nonzero $L^2$ class and the stated integer-winding form.

[F1] The paraxial scalar field and its SI field interpretation are those of the
angular-spectrum Definition. [[def-emx-angular-spectrum]] [[def-em-si-conventions]]

[F2] The real partial derivatives are those on the fixed laboratory spatial
slice, and complex exponentiation satisfies $\exp'=\exp$. [[def-directional-and-partial-derivatives]] [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F3] The field uses the complex exponential and conjugation/modulus operations
defined on all complex numbers. [[def-complex-exponential]] [[def-complex-conjugate-real-imaginary-part-and-modulus]]

[F4] On each local polar-coordinate chart with $r>0$, the smooth map
$(r,\phi)\mapsto(x,y)=(r\cos\phi,r\sin\phi)$ has
$\partial_\phi x=-y$ and $\partial_\phi y=x$. The chain rule therefore gives
$\partial_\phi u_z=-y\partial_xu_z+x\partial_yu_z$ there.
[[thm-chain-rule-for-total-derivatives]]

## Proof

1.1 For $r>0$, [F4] identifies the angular vector field $-y\partial_x+x\partial_y$ with $\partial_\phi$. By [F2]–[F3], differentiating the integer winding factor gives $L_z^{\mathrm{sc}}u_z=-i\partial_\phi(fe^{i\ell\phi}) =\ell fe^{i\ell\phi}=\ell u_z$. The required axis form makes $u_z$ smooth at the origin: for $\ell\ge0$ its angular factor is $(x+iy)^\ell$, and for $\ell<0$ it is $(x-iy)^{|\ell|}$, each multiplied by the smooth radial factor $g(x^2+y^2)$. The rotation vector field vanishes at the origin, so the same identity holds there as well. [given, F1, F2, F3, F4, algebra]

2.1 Step 1.1 gives $L_z^{\mathrm{sc}}u_z=\ell u_z$ everywhere, hence $L_z^{\mathrm{sc}}u_z\in L^2$ because $u_z\in L^2(\mathbb R^2;\mathbb C)$. Therefore $\langle L_z^{\mathrm{sc}}u_z,u_z\rangle_2 =\int_{\mathbb R^2}\ell|u_z|^2\,d^2x =\ell\langle u_z,u_z\rangle_2$; the denominator is positive since $u_z$ is nonzero. Division proves the claimed identity. [step 1.1, given, algebra] ∎

## Remarks

The axis hypothesis is stated as a smooth extension condition; the bound
$f(r)=O(r^{|\ell|})$ alone would not guarantee smoothness. No radial
integration by parts is used. The scalar generator is dimensionless and does
not by itself determine a torque or a photon angular momentum.
