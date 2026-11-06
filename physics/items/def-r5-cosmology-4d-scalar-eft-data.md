---
id: def-r5-cosmology-4d-scalar-eft-data
kind: definition
title: "Four-dimensional Einstein-frame multi-scalar cosmology EFT data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 0
deps:
  - def-gr-flrw-friedmann-system
  - def-gr-flrw-model-data
  - def-gr-scalar-field-matter-model
  - def-smooth-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-gr-metric-volume-form-and-current-flux
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-smooth-lorentzian-objects
  - def-oriented-smooth-manifold-and-oriented-chart
dependency_roles:
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-flrw-model-data: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review; §§2.1, 2.3.2–2.4.2, PDF pp. 7–25, for homogeneous cosmology, primordial perturbations, and multi-field target-space dynamics; PDF pp. 58–61, for string-inflation ultraviolet and EFT-control conditions."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete 159-page lecture-note PDF; Lecture 1 §§3.1–3.3 and 6.1–6.2, PDF pp. 15–31; Lecture 5 §§27–29, PDF pp. 100–118, for scalar-field FLRW models and EFT/string-theory regime limits."
physical_scope: "Definition of a four-dimensional Einstein-frame low-energy scalar EFT datum, including a finite-dimensional positive-definite field-space metric, smooth fields, potential, action normalization, units, cutoff and separately declared other sectors. It makes no claim that the EFT has a solution, matches observations, or is realized by a globally controlled string compactification."
---

## Definition

Fix the Lorentzian and FLRW conventions of [[def-gr-flrw-model-data]] and the equation names of [[def-gr-flrw-friedmann-system]]. A **four-dimensional Einstein-frame multi-scalar cosmology EFT datum** consists of the following explicitly supplied data.

**(a) Spacetime and cosmological branch.** In the general branch supply an oriented, time-oriented smooth Lorentzian four-manifold as the data $(\mathcal X,g,\mathcal N,\mathfrak o)$: $\mathcal X$ is a smooth four-manifold without boundary, $g$ is a smooth symmetric nondegenerate covariant $2$-tensor of signature $(-,+,+,+)$, $\mathcal N$ is a smooth vector field with $g(\mathcal N,\mathcal N)<0$ selecting the future cones, and $\mathfrak o$ is an orientation of $\mathcal X$. The time orientation and orientation are independent supplied choices, as in [[def-gr-smooth-lorentzian-objects]] and [[def-oriented-smooth-manifold-and-oriented-chart]]. When the cosmological branch is FLRW, give a nonempty open interval $I\subseteq\mathbb R$, an oriented smooth three-manifold $\Sigma$, a Riemannian metric $\gamma$ of constant normalized curvature $k\in\{-1,0,1\}$, and a smooth positive scale factor $a:I\to(0,\infty)$; then $\mathcal X=I\times\Sigma$ and $g=-c^2dt^2+a(t)^2\gamma$ in product charts, as in [[def-gr-flrw-model-data]]. Use the product orientation determined by the standard increasing orientation on $I$ and the supplied orientation on $\Sigma$, and take $\mathcal N=n=c^{-1}\partial_t$ from [[def-gr-flrw-model-data]], which is smooth, future-directed and timelike. A spatially flat branch means $k=0$. The choice of spacetime metric and its regularity are part of the input, not a consequence of the scalar data.

**(b) Scalar target and fields.** A finite-dimensional smooth manifold $\mathcal T$ of dimension $N\geq0$ ([[def-smooth-manifold]]), a smooth positive-definite Riemannian metric $G$ on $\mathcal T$ ([[def-riemannian-metric-and-riemannian-manifold]]), a smooth potential $V:\mathcal T\to\mathbb R$, and a smooth field map $\phi:\mathcal X\to\mathcal T$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]). In a target chart $(q^1,\ldots,q^N)$ write $G_{ij}(q)$ for the metric components and $\phi^i=q^i\circ\phi$. The target metric, its inverse $G^{ij}$, and the potential are chart data for tensorial objects on $\mathcal T$; the field path or map need not lie in one chart globally. This is the finite-dimensional sigma-model datum; the single-real-scalar definition in [[def-gr-scalar-field-matter-model]] supplies only the one-field convention and is not a definition of this multi-field target.

**(c) Normalization and frame.** Adopt $\hbar=c=1$ for this EFT notation. Supply a constant reduced Planck mass $M_P>0$ and use the Einstein-frame two-derivative density
$$ \mathcal L_{\rm EFT}=\frac{M_P^2}{2}R-\frac12G_{ij}(\phi)g^{\mu\nu}\partial_\mu\phi^i\partial_\nu\phi^j-V(\phi)+\mathcal L_{\rm other}. $$
Here $R$ is the scalar curvature of the metric-selected connection of $g$ ([[def-gr-curvature-tensor-and-derived-tensors]]), $g^{\mu\nu}$ is the inverse spacetime metric ([[def-gr-inverse-metric-and-musical-isomorphisms]]), $\sqrt{-g}\,d^4x$ is the local expression for the metric volume density ([[def-gr-metric-volume-form-and-current-flux]]), the target indices are contracted with $G$, while $\mathcal L_{\rm other}$ is a real scalar function on $\mathcal X$ of mass dimension four, specified by a local rule as follows. Supply the complete additional field list, each field's domain, codomain or component transformation law, regularity, couplings and units. Supply an integer $m\geq0$ and a coordinate formula for $\mathcal L_{\rm other}[g,\phi,\Psi](x)$ depending smoothly on the values at $x$ of those fields and their derivatives through order $m$ on a stated open set of component data. Here $\Psi$ denotes that supplied additional field list. Require the formulas in overlapping spacetime and field charts to agree as a scalar, and require field regularity at least $C^m$, so the resulting scalar is continuous. If an application differentiates this term or its action, it must supply the stronger regularity and admissible variations needed for that operation. The zero-sector choice is the identically zero rule with an empty additional field list. A stress tensor or equation-of-state list alone is not an action term: a sector supplied only by equations must be declared separately as an equation-level source and is not inserted into $\mathcal L_{\rm other}$. In target coordinates of mass dimension one, the declared convention is $[G_{ij}]=1$, $[\phi^i]=[M_P]=[\Lambda_{\rm EFT}]=\text{mass}$, $[V]=[\mathcal L_{\rm EFT}]=\text{mass}^4$, and the action is dimensionless. If dimensions are assigned differently to target coordinates, the dimensions of $G_{ij}$ are transformed accordingly. The Einstein-frame condition is that the coefficient of $R$ is the constant $M_P^2/2$; any frame transformation from another description is separately specified as part of the input.

**(d) EFT domain and auxiliary data.** Give a positive cutoff $\Lambda_{\rm EFT}$, the spacetime or field range on which the truncation is used, and the omitted-mode condition. Express cutoff and threshold scales in the same spacetime metric used to define the observer and modes; by default this is the Einstein-frame metric $g$ of clause (c), unless a separately supplied frame transformation is applied. Whenever an application compares local mode frequencies or spatial momenta with these scales, it must supply the observer and mode prescription. One permitted local prescription on a Lorentzian region is a smooth future-directed unit timelike vector field $n$ with $g(n,n)=-1$. Its maximal integral curves, parametrized by proper time with tangent $n$, are the chosen observer worldlines; together they form the chosen observer congruence. Specify a local oscillatory mode by its real phase $\Theta$ and wave covector $\xi_\mu:=\partial_\mu\Theta$ in the approximation being used. Define the measured frequency and spatial momentum magnitude by
$$ \omega_n:=-n^\mu\xi_\mu,\qquad |p|_n:=\sqrt{(g^{\mu\nu}+n^\mu n^\nu)\xi_\mu\xi_\nu}. $$
If the modes are not assigned local wave covectors, instead give the precise spectral operator, its domain and boundary conditions, and the spectral subset retained by the EFT. In either case the application states which frequency/momentum or spectral quantities are required to lie below $\Lambda_{\rm EFT}$ and every omitted-mode threshold. For a symmetric cutoff on modes of both phase signs, compare $|\omega_n|$; any one-sided frequency convention is stated explicitly. For example, in the spatially flat FLRW branch with $g=-dt^2+a(t)^2\delta_{ij}dx^i dx^j$ and dimensionless $x^i$, the comoving observers have $n=\partial_t$ and a Fourier mode of dimensionless wave number $k$ has physical spatial momentum $k/a(t)$. A general Lorentzian metric alone selects no such observer or mode prescription. Any stronger derivative, curvature, string-loop, $\alpha'$ or backreaction bound needed by a particular application is additional model data. List all initial and boundary data and every retained fluid, gauge field and source explicitly; absence means that the sector is set to zero, not that it is unspecified.

**(e) Well-definedness and status.** Under a target-chart change, $G_{ij}(\phi)\partial_\mu\phi^i\partial_\nu\phi^j$ is the pullback-metric contraction and $V(\phi)$ is a scalar, so the displayed scalar density is independent of target coordinates. The oriented metric volume form $\sqrt{-g}\,d^4x$ is coordinate invariant. On a noncompact spacetime, use the action only through differences under compactly supported smooth variations; the local rules above make the difference density continuous and compactly supported, hence integrable with finite integral. This definition fixes data and conventions only. It asserts neither stationarity nor field equations, existence or uniqueness of solutions, a likelihood, an observation, or a string compactification realizing the data.

## Definition references

[[def-gr-flrw-model-data]], [[def-gr-flrw-friedmann-system]], [[def-gr-scalar-field-matter-model]], [[def-smooth-manifold]], [[def-riemannian-metric-and-riemannian-manifold]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-metric-volume-form-and-current-flux]], [[def-gr-curvature-tensor-and-derived-tensors]], [[def-gr-smooth-lorentzian-objects]], [[def-oriented-smooth-manifold-and-oriented-chart]]
