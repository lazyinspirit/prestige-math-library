---
id: def-em-plane-wave-definition
kind: definition
title: "Real plane-wave fields encoded by complex amplitudes"
status: draft
origin: pipeline
domain: physics
dependency_level: 9
deps: [def-em-complex-plane-wave, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-euclidean-inner-product, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-em-complex-plane-wave: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Ideal whole-space classical plane-wave fields with wavevector $k\\ne0$, angular frequency $\\omega>0$, complex amplitudes in $\\mathbb C^3$ and the SI units of the framework, defined on $\\mathbb R^3\\times\\mathbb R$. No source, boundary, decay, finite-energy or empirical content is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.1 pp. 84-87 (monochromatic plane waves, eq. (4.15)-(4.17), and the complex-exponential encoding) and §4.3.2 p. 87 (the fixed-frequency ansatz (4.18) and the wavevector terminology)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2 printed pp. 376-379 (the monochromatic plane-wave ansatz (9.43) with complex amplitudes and the polarization vector)"
verification:
  precheck: n/a
---

## Definition

Fix a wavevector $k\in\mathbb R^3\setminus\{0\}$ and a positive angular
frequency $\omega>0$; here $k$ carries the unit $\mathrm m^{-1}$ and $\omega$
the unit $\mathrm s^{-1}$ in the SI conventions of [[def-em-si-conventions]].
Fix complex amplitudes $e,b\in\mathbb C^3$, where $e$ carries the unit
$\mathrm V\,\mathrm m^{-1}$ and $b$ the unit T of the electric and magnetic
fields of [[def-em-fields]]. Let $k\cdot x$ denote the Euclidean inner product
of [[def-euclidean-inner-product]], and let $\exp$ and $\operatorname{Re}$ be
those of the encoding definition [[def-em-complex-plane-wave]], whose
convention that physical fields are the real parts of complex expressions is
used throughout. Define, for each $t\in\mathbb R$, maps
$E(\cdot,t),B(\cdot,t):\mathbb R^3\to\mathbb R^3$ by

$$E(x,t):=\operatorname{Re}\bigl(e\,\exp(i(k\cdot x-\omega t))\bigr),\qquad B(x,t):=\operatorname{Re}\bigl(b\,\exp(i(k\cdot x-\omega t))\bigr),$$

componentwise, and put $|k|:=\sqrt{\langle k,k\rangle}$,
$\hat k:=k/|k|$ and $T:=2\pi/\omega$. Terminology: $k$ is the **wavevector**,
$\hat k$ the **propagation direction**, $|k|$ the **wavenumber**, $\omega$ the
**angular frequency**, $T$ the **period**, $e,b$ the **complex amplitudes**,
and $\theta(x,t):=k\cdot x-\omega t$ the **phase**. Then:

(a) [Objects, domain and regularity] Both maps are of class $C^\infty$ on
$\mathbb R^3\times\mathbb R$, as verified below; on the whole-space laboratory region
$\Omega=\mathbb R^3$, $I=\mathbb R$ of [[def-em-lab-geometry]] they are an
electric and a magnetic field of [[def-em-fields]] of every finite class
$C^k$, $k\ge1$, read in the frame basis $(e_1,e_2,e_3)$.

(b) [Phase and periodicity] At fixed $x$ the map $t\mapsto\theta(x,t)$ is
affine with derivative $-\omega<0$, so the phase decreases in time (the
$e^{-i\omega t}$ convention); $E$ and $B$ depend on $(x,t)$ only through
$\theta$ and are $T$-periodic in $t$.

(c) [Zero and nonzero waves] $(E,B)$ is the identically zero pair on
$\mathbb R^3\times\mathbb R$ if and only if $e=b=0$; call the wave
**nonzero** otherwise. The electric field alone determines $e$ and the
magnetic field alone determines $b$, because
$\operatorname{Re}(w\,e^{i\theta})=0$ for all real $\theta$ forces $w=0$
(evaluate at $\theta=0$ and at $\theta=\pi/2$).

(d) [Status] This item fixes objects, conventions and terminology only. It
asserts no field equation, no dispersion relation, no transversality, no
energy claim and no polarization classification; those are the content of
[[pthm-em-plane-wave-maxwell]] and [[def-em-polarization-definition]]. The
units and the propagation constant $c$ are those of
[[def-em-si-conventions]], and no empirical realization or measurement is
claimed.

### Well-definedness and conventions

For every $(x,t)\in\mathbb R^3\times\mathbb R$ the phase $\theta(x,t)$ is a
real number, so $i\theta(x,t)$ is a complex number and
$\exp(i\theta(x,t))$ is defined by the everywhere-convergent exponential
series of [[def-em-complex-plane-wave]]; multiplying by the complex number
$e_j$ or $b_j$ and taking real parts is likewise defined, so each $E_j$ and
$B_j$ is a well-defined real-valued function. Since $\omega>0$ and $k\ne0$,
$T=2\pi/\omega>0$ and $|k|>0$, so $\hat k$ is defined. The joint map
$(x,t)\mapsto(E(x,t),B(x,t))$ has the open set $\mathbb R^3\times\mathbb R$
as its domain. For regularity, let $q=(k_1,k_2,k_3,-\omega)$ and
$y=(x_1,x_2,x_3,t)$. The exponential has derivative itself
([[thm-complex-exponential-is-entire-with-derivative-itself]]), its complex
derivative is also its real total derivative
([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]),
and the real-linear map $\operatorname{Re}$ commutes with differentiation by
[[thm-chain-rule-for-total-derivatives]]. Thus for every coordinate word
$(j_1,\ldots,j_m)$ and component $\ell$,
$\partial_{y_{j_m}}\cdots\partial_{y_{j_1}}E_\ell
=\operatorname{Re}\bigl(e_\ell\prod_{r=1}^m(iq_{j_r})\exp(iq\cdot y)\bigr)$,
by induction using the same chain rule; the identical formula holds with
$b_\ell$ for $B_\ell$. These expressions are continuous for every finite
word, proving the $C^\infty$ assertion in (a).
The equivalence in (c) is the elementary injectivity of
$w\mapsto\operatorname{Re}(w\,e^{i\cdot})$ on $\mathbb C^3$: if
$\operatorname{Re}(w\,e^{i\theta})=0$ for every real $\theta$, then taking
$\theta=0$ gives $\operatorname{Re}w=0$ and taking $\theta=\pi/2$ gives
$\operatorname{Re}(iw)=-\operatorname{Im}w=0$, so $w=0$, and the converse is
immediate. The complex notation is an encoding of real fields and of real
linear equations, not a complex physical field; the symbols $e$ and $b$ are
constant complex amplitudes, not fields. No electromagnetic equation, no
matter model and no physical interpretation is introduced by this
definition; in particular the complex amplitudes need not satisfy the
Maxwell amplitude equations, and the plane-wave expressions above are
defined for every $e,b\in\mathbb C^3$.
