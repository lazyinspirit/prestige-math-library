---
id: pthm-em-integral-maxwell
kind: physics-theorem
title: "The integral form of the vacuum Maxwell equations and its equivalence with the smooth differential form"
domain: physics
status: draft
origin: pipeline
dependency_level: 14
deps: [post-em-vacuum-maxwell,
       def-em-fixed-test-geometry,
       def-em-fields,
       def-em-sources,
       def-em-si-conventions,
       def-em-lab-geometry,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives,
       thm-divergence-theorem-for-bounded-piecewise-c-one-domains,
       thm-the-classical-stokes-theorem-for-a-c2-surface-patch,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       lem-em-parameter-integrals,
       lem-em-coordinate-cell-localization,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       cor-integral-over-a-null-set-vanishes,
       thm-linearity-of-the-lebesgue-integral-on-l-one,
       def-countable-choice]
dependency_roles:
  post-em-vacuum-maxwell: physical-assumption
  def-em-fixed-test-geometry: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-the-classical-stokes-theorem-for-a-c2-surface-patch: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  lem-em-coordinate-cell-localization: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The equivalence, within the classical smooth branch of the framework's vacuum Maxwell postulate, between the four pointwise differential equations and the four integral identities tested against every volume test geometry and every patch test geometry of the fixed test-geometry class. The statement is conditional on the adopted smooth-branch postulate and on the stated joint regularity; it asserts no existence of fields, no empirical agreement and no integral identity for singular sources, and it does not extend the equivalence to test geometries outside the declared class."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 1.3.4-1.3.5 printed pp. 31-37 (the divergence and curl theorems and the localization argument for recovering the differential form) and Section 7.3.1-7.3.3 printed pp. 321-328 (the integral and differential forms of the Maxwell equations); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 2.1 and 3.1 printed pp. 8 and 42-43 (Gauss's law and Ampere's law in integral form) and Section 4.1 printed pp. 67-68 (Faraday's law in integral form); read in the stamped full text."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Section 2.1 printed pp. 17-22 (Gauss's divergence theorem in integral form) and Section 2.2 printed pp. 22-26 (Stokes's theorem in integral form); read in the stamped full text."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 30 printed pp. 73-75 (the Maxwell equations in integral and differential form, read in Gaussian units and re-expressed in SI); read in the stamped full text."
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention of the
imported piecewise $C^1$ boundary and surface-measure definitions
([[def-countable-choice]]). Let $U\cong I\times\Omega$ be the laboratory region
of [[def-em-lab-geometry]] with the constants of [[def-em-si-conventions]]; let
$E,B$ be fields of [[def-em-fields]] and $\rho,J$ source fields of
[[def-em-sources]] on $\Omega\times I$; and let $(V,\nu_V)$ and $(D,r)$ be the
volume and patch test geometries of [[def-em-fixed-test-geometry]]. Assume the
fields are jointly $C^1$ on $\Omega\times I$ and that the additional
derivatives appearing below exist and are continuous there; for instance $E,B$
jointly of class $C^2$ and $\rho,J$ of class $C^1$ is sufficient.

(a) [Differential implies integral] If the smooth branch of
[[post-em-vacuum-maxwell]] holds pointwise on $\Omega\times I$, then for every
volume test geometry $(V,\nu_V)$ and every $t\in I$,

$$\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=\frac{1}{\varepsilon_0}\int_V\rho(\cdot,t)\,d\lambda_3,\qquad \oint_{\partial V}B(\cdot,t)\cdot\nu_V\,dS=0,$$

and for every patch test geometry $(D,r)$ the flux functions
$t\mapsto\int_SB(\cdot,t)\cdot n_S\,dS$ and
$t\mapsto\int_SE(\cdot,t)\cdot n_S\,dS$ are differentiable on $I$ and, for
every $t\in I$,

$$\oint_{\partial S}E(\cdot,t)\cdot d\mathbf r=-\frac{d}{dt}\int_SB(\cdot,t)\cdot n_S\,dS,\qquad \oint_{\partial S}B(\cdot,t)\cdot d\mathbf r=\mu_0\int_SJ(\cdot,t)\cdot n_S\,dS+c^{-2}\frac{d}{dt}\int_SE(\cdot,t)\cdot n_S\,dS.$$

(b) [Integral implies differential] Conversely, suppose the two volume
identities of (a) hold for every volume test geometry and every $t\in I$, and
that for every patch test geometry the two flux functions are differentiable
on $I$ and the two patch identities of (a) hold for every $t\in I$. Then the
four smooth-branch equations of [[post-em-vacuum-maxwell]] hold pointwise on
$\Omega\times I$:

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}B=\mu_0J+c^{-2}\partial_tE.$$

The equivalence is asserted for the exact class of test geometries of
[[def-em-fixed-test-geometry]], which contains the open interiors of all closed
axis-parallel boxes compactly contained in $\Omega$ and the affine square
patches; it is not a recovery from one selected volume or one selected patch,
and the divergence and curl of
[[def-divergence-and-curl-of-a-c1-vector-field]] and the time derivative of
[[def-directional-and-partial-derivatives]] are the operators used.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The laboratory region $U\cong I\times\Omega$, the fields $E,B$ of the stated class, the source fields $\rho,J$, the volume and patch test geometries of [[def-em-fixed-test-geometry]]. In clause (a), assume the smooth branch of [[post-em-vacuum-maxwell]]. In clause (b), assume instead the integral identities of (a) for every test geometry of the class and the differentiability of the two flux functions; the differential equations are then conclusions to establish.

[F1] The smooth branch of the postulate holds pointwise: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ on $\Omega\times I$, with $\varepsilon_0=(\mu_0c^2)^{-1}>0$ ([[post-em-vacuum-maxwell]], [[def-em-si-conventions]]).

[F2] Volume test geometries are nonempty bounded open $V$ with $\overline V\subseteq\Omega$ and a specified finite piecewise $C^1$ boundary presentation with outward normal $\nu_V$ and the face-sum closed-surface flux; the open interior of every closed axis-parallel box $K=\prod_{i<3}[a_i,b_i]\subseteq\Omega$ with $a_i<b_i$ is a volume test geometry with $\overline V=K$, and $\int_Vh\,d\lambda_3=\int_Kh\,d\lambda_3$ for continuous $h$ on a neighbourhood of $K$ because the six faces are $\lambda_3$-null. Patch test geometries are regular $C^2$ patches over finite elementary Green regions with induced boundary chain, circulation and induced orientation, and every affine patch $r(u,v)=p+ue_j+ve_k$ over an axis-parallel square whose image lies in $\Omega$ is a patch test geometry with $r_u\times r_v=e_j\times e_k$ ([[def-em-fixed-test-geometry]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[cor-integral-over-a-null-set-vanishes]]).

[F3] The divergence, curl and the partial derivatives are those of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-directional-and-partial-derivatives]]; they are linear in the field and continuous when the field is $C^1$.

[F4] If $\Omega_0$ has the specified finite piecewise $C^1$ presentation and $F\in C^1(\overline{\Omega_0};\mathbb R^3)$, then $\int_{\Omega_0}\operatorname{div}F\,d\lambda_3=\sum_j\int_{S_j}F\cdot\nu_j\,dS$, all integrals finite, the faces carrying their actual outward normals ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[F5] For a $C^2$ patch $(D,\varphi)$ over a finite elementary Green region and a $C^1$ vector field $F$ on an open set containing $\varphi[D]$, $\oint_{\varphi(\partial D)}F\cdot d\mathbf r=\int_D\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$, the induced orientation being that of the patch ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

[F6] A Riemann integral of a continuous integrand over a compact Jordan region equals the corresponding Lebesgue integral, and continuous integrands on compact Jordan regions are Riemann integrable ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F7] If a parameter family of integrals has a continuous integrand with continuous parameter derivative on a neighbourhood of a compact parameter set, the integral is differentiable in the parameter with the derivative obtained by differentiating under the integral ([[lem-em-parameter-integrals]]).

[F8] A continuous function on an open subset of $\mathbb R^n$ whose integral over every closed axis-parallel cube of positive side length contained in its domain vanishes is identically zero; for $n=2$ the same holds with closed axis-parallel squares ([[lem-em-coordinate-cell-localization]]).

[F9] The Lebesgue integral is linear on integrable functions ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F10] The laboratory fields, sources and constants are those of [[def-em-fields]], [[def-em-sources]] and [[def-em-si-conventions]] on the region of [[def-em-lab-geometry]]; $E$ carries V m$^{-1}$, $B$ carries T, $\rho$ carries C m$^{-3}$, $J$ carries A m$^{-2}$.

## Proof

1.1 For the volume identities of (a), fix $t\in I$ and a volume test geometry $(V,\nu_V)$; the fixed-time fields $E(\cdot,t),B(\cdot,t)$ are $C^1$ on a neighbourhood of $\overline V$ by the said regularity, and the divergence theorem [F4] applies to that presentation: $\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=\int_V\operatorname{div}E(\cdot,t)\,d\lambda_3$ and likewise for $B$. Substituting the Gauss laws of [F1] gives $\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS=(1/\varepsilon_0)\int_V\rho(\cdot,t)\,d\lambda_3$ and $\oint_{\partial V}B(\cdot,t)\cdot\nu_V\,dS=0$. [F1, F2, F4, given, algebra]

1.2 For the patch identities of (a), fix a patch test geometry $(D,r)$ and put $S=r[D]$, with parameter derivatives $r_u,r_v$ and oriented area vector $r_u\times r_v$. The flux functions $\Phi_B(t):=\int_D\langle B(r(u,v),t),r_u(u,v)\times r_v(u,v)\rangle\,dudv$ and $\Phi_E$ are differentiable on $I$ with $\Phi_B'(t)=\int_S\partial_tB(\cdot,t)\cdot n_S\,dS$ and $\Phi_E'(t)=\int_S\partial_tE(\cdot,t)\cdot n_S\,dS$: the integrands are the continuous functions $\langle B(r(u,v),t),r_u\times r_v\rangle$ with continuous $t$-derivative $\langle\partial_tB(r(u,v),t),r_u\times r_v\rangle$ on a neighbourhood of the compact Jordan region $D$ times a compact interval around $t$, [F6] identifies the Riemann integral with the Lebesgue integral, and [F7] differentiates under the integral. Stokes' theorem [F5] applied to the $C^1$ fields gives $\oint_{\partial S}E(\cdot,t)\cdot d\mathbf r=\int_S\operatorname{curl}E(\cdot,t)\cdot n_S\,dS$ and the corresponding identity for $B$, in the induced orientation of the patch; substituting the Faraday law $\operatorname{curl}E=-\partial_tB$ of [F1] gives $\oint_{\partial S}E(\cdot,t)\cdot d\mathbf r=-\int_S\partial_tB(\cdot,t)\cdot n_S\,dS=-\Phi_B'(t)$, and substituting the Ampere law gives $\oint_{\partial S}B(\cdot,t)\cdot d\mathbf r=\mu_0\int_SJ(\cdot,t)\cdot n_S\,dS+c^{-2}\Phi_E'(t)$. [F1, F2, F5, F6, F7, given, algebra]

1.3 For clause (b), fix a closed axis-parallel box $K=\prod_{i<3}[a_i,b_i]\subseteq\Omega$ with $a_i<b_i$ and let $V$ be its open interior, a volume test geometry with $\overline V=K$ by [F2]. The volume identity hypothesis and the divergence theorem give $0=\oint_{\partial V}E(\cdot,t)\cdot\nu_V\,dS-(1/\varepsilon_0)\int_V\rho(\cdot,t)\,d\lambda_3=\int_Vh\,d\lambda_3$ for the continuous function $h:=\operatorname{div}E-\rho/\varepsilon_0$, where linearity [F9] combines the two finite integrals and [F4] identifies the flux with $\int_V\operatorname{div}E$; by [F2] and [F9] this equals $\int_Kh\,d\lambda_3$, because $K\setminus V$ is $\lambda_3$-null. Since every closed axis-parallel box $K\subseteq\Omega$ with positive sides arises this way, [F8] with $n=3$ gives $h=0$ on $\Omega$, that is $\operatorname{div}E=\rho/\varepsilon_0$. The same computation with the second volume identity and $\int_V\operatorname{div}B=0$ gives $\operatorname{div}B=0$. [F2, F4, F8, F9, given, algebra]

1.4 For the curl equations fix a point $p\in\Omega$ and let $(j,k)$ be the cyclic pair with $e_j\times e_k=e_i$ for a coordinate index $i$. Put $W:=\{(u,v)\in\mathbb R^2:p+ue_j+ve_k\in\Omega\}$, an open set, and $\varphi_i(u,v):=\bigl(\operatorname{curl}E+\partial_tB\bigr)(p+ue_j+ve_k)\cdot e_i$ on $W$, a continuous function. For every closed axis-parallel square $Q\subseteq W$ with side $\ell>0$ the affine patch $r(u,v):=p+ue_j+ve_k$ over $Q$ is a patch test geometry with $r_u\times r_v=e_i$ and image in $\Omega$; Stokes [F5], the differentiability of its flux function and the Faraday identity of the hypothesis give $\int_Q\varphi_i\,dudv=\int_Q\langle(\operatorname{curl}E)\circ r,r_u\times r_v\rangle\,dudv+\frac{d}{dt}\int_Q\langle B\circ r,r_u\times r_v\rangle\,dudv=\oint_{\partial S}E\cdot d\mathbf r+\frac{d}{dt}\int_SB\cdot n_S\,dS=0$. Hence the continuous function $\varphi_i$ has vanishing integral over every closed axis-parallel square contained in $W$, so the planar clause of [F8] gives $\varphi_i=0$ on $W$. The point $p\in\Omega$ was chosen arbitrarily, and $(0,0)\in W$ because $p\in\Omega$, so evaluating at $(0,0)$ gives $(\operatorname{curl}E+\partial_tB)(p)\cdot e_i=0$ for every $p\in\Omega$; letting $i$ run over the three coordinate indices, $\operatorname{curl}E=-\partial_tB$ on $\Omega$. The same argument with the Ampere identity in place of Faraday gives $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, the flux derivative producing $c^{-2}\Phi_E'$. [F2, F3, F5, F6, F7, F8, given, algebra]

2.1 Steps 1.1 and 1.2 prove that the smooth-branch equations imply all the integral identities of (a) for every volume and patch test geometry, and steps 1.3 and 1.4 prove the converse for the same exact class; the recovery uses the open interiors of all closed axis-parallel boxes and all affine square patches, so no single selected volume or patch suffices, the marked $\mathrm{AC}_\omega$ is exactly the convention of the divergence theorem and of the surface-measure interface used in [F4], [F2] and [F5], and the fields, sources and constants throughout are those of the framework definitions recorded in [F10]. [step 1.1, step 1.2, step 1.3, step 1.4, F10, given] ∎

## Source notes

The passage between the differential and integral forms over the declared test geometries is the standard localization argument of the cited treatments, written here with the library's own divergence theorem, patch Stokes theorem, parameter-integral and cube-localization interfaces. The textbooks supply the formulation and the physical reading; the deductions use only the imported mathematical items and the adopted smooth-branch postulate.
