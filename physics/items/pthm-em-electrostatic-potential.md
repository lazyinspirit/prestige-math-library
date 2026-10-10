---
id: pthm-em-electrostatic-potential
kind: physics-theorem
title: Scalar potential and the Poisson equation in a star-shaped electrostatic region
domain: physics
physical_scope: "Classical electrostatics in vacuum in a star-shaped spatial region $\\Omega$ of a named inertial frame: a static, curl-free $C^1$ electric field with a continuous fixed-time charge density in the pure electrostatic regime, for which the electrostatic potential exists as a $C^2$ function with $E=-\\nabla\\varphi$ and satisfies the Poisson equation $-\\Delta\\varphi=\\rho/\\varepsilon_0$, uniquely up to an additive constant. The region is star-shaped (no general topology), no boundary data or decay normalization is included, and no empirical claim, dynamical stability claim or material model is asserted."
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-em-electrostatic-regime", "def-em-fields", "def-em-sources", "def-em-si-conventions", "def-star-shaped-open-subset-of-rn", "def-closed-and-exact-c1-vector-fields", "cor-curl-vanishes-exactly-when-a-field-is-closed", "thm-poincare-lemma-for-star-shaped-domains", "def-laplacian-of-a-c2-function", "def-divergence-and-curl-of-a-c1-vector-field", "def-directional-and-partial-derivatives", "def-ck-euclidean-maps-and-diffeomorphisms", "def-euclidean-inner-product", "cor-potentials-differ-by-a-componentwise-constant", "def-piecewise-c1-path-connected-conservative-and-path-independent", "thm-algebra-of-derivatives"]
dependency_roles:
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  cor-curl-vanishes-exactly-when-a-field-is-closed: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-potentials-differ-by-a-componentwise-constant: mathematical-premise
  def-piecewise-c1-path-connected-conservative-and-path-independent: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Section 2.2 printed pp. 16-17 (E = -grad phi, the Poisson equation (2.12), uniqueness up to a constant and the phi -> 0 normalization at infinity). Read in the stamped full text.
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Sections 2.3.1-2.3.4 printed pp. 77-87 (potential, Poisson's equation, the potential of a localized charge distribution). Read in the stamped scanned full text, OCR cross-checked.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (the static equations, E = -grad phi and the Poisson equation (36.4)); Gaussian units re-expressed in SI. Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 3.3.2-3.3.3 printed pp. 35-36 (Poisson's equation (3.3.9) and the static Green's function). Read in the stamped full text.
---

## Statement

Let $\Omega\subseteq\mathbb R^3$ be a nonempty open set that is star-shaped with respect to some $a\in\Omega$ ([[def-star-shaped-open-subset-of-rn]]), let $E:\Omega\to\mathbb R^3$ be of class $C^1$ in the spatial vector-field sense of [[def-em-fields]] ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $\rho:\Omega\to\mathbb R$ be continuous — the fixed-time reading, in the sense of [[def-em-electrostatic-regime]], of a pure electrostatic regime with the units and constant $\varepsilon_0>0$ of [[def-em-si-conventions]] ([[def-em-sources]]).
Suppose the reduced smooth-branch equations hold pointwise on $\Omega$:
$$\operatorname{div}E=\rho/\varepsilon_0,\qquad\operatorname{curl}E=0\qquad\text{on }\Omega,$$
with the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]].
Then:

(a) [Closed field and potential] $-E$ is closed in the sense of [[def-closed-and-exact-c1-vector-fields]] — equivalently $\operatorname{curl}(-E)=0$ ([[cor-curl-vanishes-exactly-when-a-field-is-closed]]) — and the function
$$\varphi(x):=-\int_0^1E\bigl(a+s(x-a)\bigr)\cdot(x-a)\,ds$$
(the Euclidean inner product of [[def-euclidean-inner-product]]) is a $C^2$ function on $\Omega$ with
$$\nabla\varphi=-E\qquad\text{on }\Omega$$
([[thm-poincare-lemma-for-star-shaped-domains]] applied to the closed $C^1$ field $-E$); continuity of the integrand and its first parameter derivatives and the proved identity $\nabla\varphi=-E$ with $E\in C^1$ give the stated regularity.

(b) [Poisson equation] with $\Delta\varphi=\operatorname{div}\nabla\varphi$ the Laplacian of [[def-laplacian-of-a-c2-function]],
$$-\Delta\varphi=\operatorname{div}E=\frac{\rho}{\varepsilon_0}\qquad\text{pointwise on }\Omega.$$

(c) [Uniqueness up to constants] if $\psi\in C^2(\Omega)$ satisfies $\nabla\psi=-E$ on $\Omega$, then $\psi-\varphi$ is constant on $\Omega$; in particular $\varphi$ is uniquely determined by $\nabla\varphi=-E$ and one prescribed value. Star-shapedness gives path-connectedness through the centre $a$, so the constant is the same on all of $\Omega$ ([[cor-potentials-differ-by-a-componentwise-constant]], [[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

No normalisation of $\varphi$ at infinity, and no boundary condition, is asserted on a general star-shaped $\Omega$; the additive constant remains free.

## Facts & Assumptions

**Given:** A star-shaped open $\Omega\subseteq\mathbb R^3$ with centre $a\in\Omega$, a $C^1$ field $E:\Omega\to\mathbb R^3$, a continuous $\rho:\Omega\to\mathbb R$, and $\varepsilon_0=(\mu_0c^2)^{-1}>0$, the fixed-time reading of a pure electrostatic regime in which $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$ hold pointwise.

[F1] The fixed-time reading of a pure electrostatic regime, the field conventions and the source conventions are those of the primitives: in particular $\operatorname{curl}E=0$ and $\operatorname{div}E=\rho/\varepsilon_0$ are the reduced smooth-branch equations, and the objects carry no time dependence ([[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-sources]], [[def-em-si-conventions]]).

[F2] A field is closed exactly when its curl vanishes identically on its open domain $\Omega\subseteq\mathbb R^3$; closedness is the symmetry system $\partial_jF_i=\partial_iF_j$ ([[cor-curl-vanishes-exactly-when-a-field-is-closed]], [[def-closed-and-exact-c1-vector-fields]]).

[F3] Every closed $C^1$ field on an open star-shaped $U\subseteq\mathbb R^n$ is exact, with the $C^2$ potential $\phi(x)=\int_0^1\langle F(a+t(x-a)),x-a\rangle\,dt$ satisfying $\nabla\phi=F$ ([[thm-poincare-lemma-for-star-shaped-domains]]).

[F4] The Laplacian is $\Delta\varphi=\operatorname{div}\nabla\varphi$, and divergence and curl are linear in the field with the partial-derivative convention of [[def-directional-and-partial-derivatives]] ([[def-laplacian-of-a-c2-function]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] If two $C^1$ functions have the same gradient, their difference is constant on each piecewise-$C^1$ path component; a star-shaped set is connected through its centre by the $C^1$ segments $s\mapsto a+s(x-a)$, $s\in[0,1]$ ([[cor-potentials-differ-by-a-componentwise-constant]], [[def-piecewise-c1-path-connected-conservative-and-path-independent]], [[def-star-shaped-open-subset-of-rn]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 The field $F:=-E$ is $C^1$ on the open set $\Omega$, being the componentwise negative of the $C^1$ field $E$ ([F1], [F4]), and it is closed: by [F2] closedness is equivalent to the vanishing of the curl, and $\operatorname{curl}F=-\operatorname{curl}E=0$ by linearity of the curl in the field and the reduced equation $\operatorname{curl}E=0$ ([F2], [F4]). [given, F1, F2, F4]

2.1 The Poincaré lemma [F3] applies to the closed $C^1$ field $F=-E$ on the star-shaped open set $\Omega$ with centre $a$, and yields the $C^2$ function $$\varphi(x)=\int_0^1\bigl\langle F(a+s(x-a)),x-a\bigr\rangle\,ds=-\int_0^1E\bigl(a+s(x-a)\bigr)\cdot(x-a)\,ds$$ with $\nabla\varphi=F=-E$ on $\Omega$, the inner product being the Euclidean one; this is clause (a). [step 1.1, F3]

3.1 For clause (b), the Laplacian of the $C^2$ potential is $\Delta\varphi=\operatorname{div}\nabla\varphi$ ([F4]); substituting $\nabla\varphi=-E$ from step 2.1 and using the linearity of the divergence in the field gives $\Delta\varphi=\operatorname{div}(-E)=-\operatorname{div}E$, so $-\Delta\varphi=\operatorname{div}E=\rho/\varepsilon_0$ by the reduced divergence equation ([F1], [F4]). [step 2.1, F1, F4]

3.2 For clause (c), let $\psi\in C^2(\Omega)$ satisfy $\nabla\psi=-E$. Then $\nabla(\psi-\varphi)=\nabla\psi-\nabla\varphi=0$ on $\Omega$, because both gradients equal $-E$ and differentiation is linear ([F4]); by [F5] the difference $\psi-\varphi$ is constant on every piecewise-$C^1$ path component of $\Omega$. Every $x\in\Omega$ is joined to the centre $a$ by the segment $s\mapsto a+s(x-a)$, $s\in[0,1]$, which is $C^1$, lies in $\Omega$ by star-shapedness and has constant value $a$ at $s=0$; hence all points lie in the single path component containing $a$ ([F5]), and $\psi-\varphi$ is constant on $\Omega$. Fixing the value of $\varphi$ at one point therefore determines $\varphi$ uniquely. [step 2.1, F4, F5]

4.1 Clauses (a), (b) and (c) are steps 2.1, 3.1 and 3.2. The argument used only the pointwise reduced equations, the $C^1$ regularity of the field, continuity of $\rho$, star-shapedness of $\Omega$ and the cited mathematical suppliers; no boundary condition, no normalisation at infinity, no uniqueness of the field equations, no existence of a physical equilibrium and no empirical assertion entered, which is exactly the scope stated. [step 2.1, step 3.1, step 3.2, F1, F5] ∎
