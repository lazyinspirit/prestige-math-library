---
id: def-em-moving-circuit-geometry
kind: definition
title: "C2 moving material circuit: swept patch, single-valued material velocity, flux and electromotive force"
domain: physics
status: draft
origin: session
dependency_level: 18
deps:
  - def-em-lab-geometry
  - def-em-fields
  - def-em-si-conventions
  - def-em-moving-patch
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - def-cross-product-in-r3
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-type-i-type-ii-and-elementary-green-regions
  - def-positive-orientation-for-elementary-region-boundaries
  - def-admissible-regular-parametrized-surface-patch
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - post-em-lorentz-coupling
  - def-em-electromagnetic-tensor
  - def-em-relativistic-worldlines-frames
  - thm-sr-proper-time-and-observer-decomposition
dependency_roles:
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-moving-patch: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "§4.1 and §4.1.1 printed pp. 67-71 (the moving rectangular circuit, the definition of the emf as the line integral of the force per unit charge, and the general moving loop C(t) with velocity field v): read in the retained complete text of the 236-page printing."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "§7.1.2-7.1.3 printed pp. 292-296 (the emf as the line integral of the force per unit charge around a circuit and the moving-loop ('motional emf') construction with the loop of Fig. 7.10): read in the stamped 596-page scan."
physical_scope: "Kinematic and definitional content only: the C2 moving material circuit (a compact embedded swept patch with a single-valued C1 material velocity), its magnetic flux and its electromotive force line integral, in the laboratory frame and units of the classical-electromagnetism framework. It excludes circuits crossing singular sources, requires subluminal material speeds when the relativistic force interpretation is used, and asserts no relation between emf and flux derivative and no dynamical or empirical claim."
---

## Definition

Let $\Omega\subseteq\mathbb R^3$ be nonempty and open and $I\subseteq\mathbb R$ a nonempty open interval, with the laboratory frame, fields $E,B:\Omega\times I\to\mathbb R^3$, units and $c>0$ of [[def-em-lab-geometry]], [[def-em-fields]] and [[def-em-si-conventions]].

(a) A **moving material circuit** is data $(D,r,v)$. The nonempty compact parameter set $D=D_1\cup\cdots\cup D_N\subseteq\mathbb R^2$ has a supplied finite elementary Green decomposition, including the opposite orientations on shared arcs, as in [[def-type-i-type-ii-and-elementary-green-regions]]. Its positive boundary chain $\partial D=(\sigma_1,\ldots,\sigma_m)$ is the finite list of surviving oriented piecewise $C^1$ arcs after internal pairs cancel ([[def-positive-orientation-for-elementary-region-boundaries]]). The map $r:D\times I\to\Omega$ extends to a $C^2$ map on an open neighbourhood of $D\times I$, has $r_u\times r_w\ne0$ on $D^\circ\times I$, and is injective on $D$ at each time. These conditions are the meaning of an embedded material sheet here. Its **swept spacetime graph** is $\mathcal G:=\{(r(p,t),t):p\in D,\ t\in I\}\subseteq\Omega\times I$. A compatible **material velocity** is a $C^1$ map $v:W\to\mathbb R^3$ on an open $W\subseteq\Omega\times I$ containing $\mathcal G$, satisfying $v(r(p,t),t)=r_t(p,t)$. Thus coincident images must have the same velocity. Material labels are the points $p=(u,w)\in D$.

(b) Put $S(t):=r(D,t)$ and $\gamma_t:=(r(\cdot,t)\circ\sigma_k)_{k=1}^m$, a boundary **chain**, whose trace is $C(t):=r(\partial D,t)$. We use $\partial S(t)$ for this parametrized boundary chain, rather than the ambient topological boundary of the subset $S(t)\subseteq\mathbb R^3$. A finite Green region can have several components or holes, so $\gamma_t$ need not be one closed path. For $B$ jointly $C^1$ on a spacetime neighbourhood of $\mathcal G$, the **magnetic flux** is
$$\Phi_B(t):=\int_D\langle B(r(u,w,t),t),r_u(u,w,t)\times r_w(u,w,t)\rangle\,du\,dw.$$
This is the parametrized moving-patch flux convention of [[def-em-moving-patch]], specified here with its spacetime arguments explicit. Its unit is $\mathrm{Wb}=\mathrm T\,\mathrm m^2$.

(c) For $E,B$ continuous on a spacetime neighbourhood of $\mathcal G$, the **electromotive force** is the finite sum of vector line integrals
$$\mathrm{emf}(t):=\oint_{\gamma_t}(E(\cdot,t)+v(\cdot,t)\times B(\cdot,t))\cdot d\mathbf r:=\sum_{k=1}^m\int_{r(\cdot,t)\circ\sigma_k}(E(\cdot,t)+v(\cdot,t)\times B(\cdot,t))\cdot d\mathbf r,$$
with [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]] and [[def-cross-product-in-r3]]. Its unit is $\mathrm V=\mathrm{kg}\,\mathrm m^2\,\mathrm s^{-3}\mathrm A^{-1}$. For the force interpretation, additionally adopt [[post-em-lorentz-coupling]](i): a constant $q\ne0$, a mass $m>0$, a $C^2$ future timelike test-charge worldline and a prescribed external $C^1$ electromagnetic tensor. In the worldline conventions of [[def-em-relativistic-worldlines-frames]] and [[thm-sr-proper-time-and-observer-decomposition]](e), $U=\gamma(c,v)$, $d/d\tau=\gamma\,d/dt$ and $\gamma=(1-|v|^2/c^2)^{-1/2}$. The tensor convention [[def-em-electromagnetic-tensor]] gives $F_{i0}=E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ and $\Phi(U)^i=F_{i\beta}U^\beta=\gamma(E+v\times B)^i$. For the spatial momentum $p:=m\gamma v$, the spatial components of $m\,dU/d\tau=q\Phi(U)$ therefore yield $\gamma\,dp/dt=q\gamma(E+v\times B)$, hence $dp/dt=q(E+v\times B)$. When the charge velocity agrees with the material velocity, the integrand is this lab momentum force divided by $q$. This interpretation adds those external-coupling hypotheses; the emf definition itself only names the integral.

(d) The stated field regularity must hold near every point of $\mathcal G$; singularity crossings are excluded. The force interpretation additionally requires $|v|<c$ along the material motion. No conservation law, flux-derivative relation, empirical assertion or parametrization-invariance assertion is made.

### Well-definedness and conventions

Each $D_i$ is compact and Jordan measurable; its boundary has content zero. The finite union $D$ is Jordan measurable, and its continuous flux integrand is Riemann integrable by [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]. At a fixed time each elementary piece is an admissible regular $C^2$ patch: its interior is connected and dense in that piece, the parameter cross product is nonzero there, and injectivity prevents interior image identifications ([[def-admissible-regular-parametrized-surface-patch]]). All integrals over the full sheet mean the sum over the pieces, with internal boundary arcs cancelling. Neither connectedness nor a single boundary loop is assumed for their union.

Composition of each $\sigma_k$ with the $C^2$ slice gives a piecewise $C^1$ path. Its trace lies in the time-$t$ slice of $W$, where $E+v\times B$ is continuous, so each line integral exists. The chain sum is independent of its ordering. Spatial derivatives of two $C^2$ extensions agreeing on $D\times I$ agree first on $D^\circ\times I$ by difference quotients and then on its closure in each time slice by continuity; since $I$ is open the same argument gives the time derivative. The flux and chain therefore do not depend on the extension. Boundary rank failures remain allowed.

## Source notes

Tong §4.1–4.1.1, printed pp. 67–71, supplies the moving-loop flux and force-per-charge emf convention. The finite Green chain, spacetime domains and precise regularity above are the local formulation; the source is not claimed to impose them.
