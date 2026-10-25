---
id: post-qftx-nonabelian-yang-mills-model
kind: postulate
title: Classical pure SU(2) Yang–Mills model
status: draft
origin: session
dependency_level: 2
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model
axiom_base: "ZF + AC_omega inherited through the supplied principal-bundle and Lie-algebra geometry; the adopted action adds no choice principle."
deps:
  - def-qft-framework-units
  - def-gauge-group-of-a-smooth-principal-bundle
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - lem-qftx-su2-compact-nonabelian-invariant-form
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-gauge-group-of-a-smooth-principal-bundle: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-principal-connection-form: formulation-prerequisite
  def-qftx-lie-algebra-valued-form-bracket: formulation-prerequisite
  lem-qftx-principal-curvature-cartan-bianchi: formulation-prerequisite
  def-qftx-associated-covariant-derivative: formulation-prerequisite
  lem-qftx-su2-compact-nonabelian-invariant-form: formulation-prerequisite
physical_scope: "A classical, source-free pure SU(2) Yang–Mills model on oriented, time-oriented flat Minkowski spacetime, with one selected smooth right-principal SU(2)-bundle sector, no matter fields, natural units, and compactly supported variations. It asserts no quantum theory, path-integral measure, continuum construction, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.3.1, 2.1, and 2.6.5: principal connection and curvature conventions, bundle gauge transformations, and the classical Yang–Mills action."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4 and Chapter 6 §6.1, printed pp. 92–101: connection 1-forms, transition laws, and curvature as an adjoint-bundle-valued form."
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.1, printed pp. 28–29: the natural-unit non-Abelian quadratic action and its coupling normalization."
verification:
  precheck: pass
---

## Postulate

Each instance of the adopted classical pure Yang–Mills model has spacetime $M=\mathbb R^{1,3}$,
coordinates $x^0,x^1,x^2,x^3$ of length, orientation
$dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, time orientation of increasing
$x^0$, and Lorentz metric $\eta=\operatorname{diag}(-1,1,1,1)$. Use
$c=\hbar=1$, so $x^0=t$, the coordinate and spacetime lengths have unit
$\mathrm m$, and the natural action $S/\hbar$ is dimensionless.

Fix the global structure group $G=SU(2)$, not its quotient $SO(3)$. Each
instance selects a smooth right principal $SU(2)$-bundle $\pi:P\to M$ and
admits only its bundle sector $\Sigma=\{[P]\}$. The matter-representation label set
is empty, so there are no matter fields or current source. The Lie algebra is
$\mathfrak{su}(2)$ with basis $T_a=-i\sigma_a/2$ and positive
$\operatorname{Ad}$-invariant form
$\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, normalized by
$\kappa(T_a,T_b)=\delta_{ab}$. The positive coupling $g_{\mathrm{YM}}$ is a
fixed dimensionless model parameter.

A smooth right principal bundle here has a free and transitive smooth right
$SU(2)$ action on each fibre and equivariant local trivializations; a global
section is not part of the datum. The sector $[P]$ is the class of bundles
smoothly isomorphic to $P$ by equivariant diffeomorphisms over
$\operatorname{id}_M$. The gauge group $\mathcal G(P)$ consists of smooth
diffeomorphisms $\Phi:P\to P$ with $\pi\circ\Phi=\pi$ and
$\Phi(pg)=\Phi(p)g$. A gauge function $U_i\to SU(2)$ is only a local
description unless a global trivialization has been specified.

A principal connection is a smooth right-invariant horizontal complement
$TP=VP\oplus H$. A gauge field is its connection form $\omega$ with
$\omega(Z_P)=Z$ and $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$, where
$R_g(p)=pg$ and
$Z_P(p)=\left.\frac{d}{dt}\right|_{t=0}p\exp_{SU(2)}(tZ)$. In a local
section $s_i:U_i\to P$, let $A_i=s_i^*\omega$ and let
$F_i=dA_i+\frac12[A_i\wedge A_i]$ be its curvature. Here the bracket is the
alternating-form extension of the Lie bracket, and the local forms on
overlaps satisfy the right-action transition convention
$A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+g_{ij}^{-1}dg_{ij}$ and
$F_j=\operatorname{Ad}_{g_{ij}^{-1}}F_i$ when $s_j=s_i g_{ij}$. Thus
$F_i$ represents one global $\mathfrak{su}(2)$-valued two-form in the
associated adjoint bundle; the invariant form $\kappa$ makes
$\kappa(F_i\wedge *_\eta F_i)$ a global scalar four-form.

Adopt the local Lorentzian action density

$$
\mathcal L_{\mathrm{YM}}(A_i)\,d^4x=-\frac{1}{2g_{\mathrm{YM}}^2}\,\kappa(F_i\wedge *_\eta F_i),\qquad [A_i]=\mathrm m^{-1},\quad [F_i]=\mathrm m^{-2}.
$$

For any relatively compact region on which the density is integrable, the
action is its integral. On all of $M$, the action is defined when that
integral converges. Local stationarity is tested through relative action
differences under smooth compactly supported adjoint-bundle-valued
one-form variations; these differences have compact support and are finite.
No boundary values are imposed at infinity. On a finite region, admissible
variations vanish near its boundary. This is an adopted classical model and
normalization, not a theorem, measured law, or claim that a quantum
continuum theory exists.

## Postulate references

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

[Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)
