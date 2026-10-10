---
id: post-em-scalar-aperture-model
kind: postulate
title: "The adopted scalar aperture-diffraction model"
status: draft
origin: pipeline
domain: physics
dependency_level: 17
deps: [lem-em-outgoing-source-helmholtz-and-diffraction, lem-em-helmholtz-boundary-representation, def-integration-against-a-signed-or-complex-measure, def-em-si-conventions, def-em-lab-geometry, post-em-vacuum-maxwell, post-em-material-closure, def-countable-choice, def-complex-measure, def-total-variation-of-a-signed-or-complex-measure]
dependency_roles:
  lem-em-outgoing-source-helmholtz-and-diffraction: mathematical-premise
  lem-em-helmholtz-boundary-representation: mathematical-premise
  def-integration-against-a-signed-or-complex-measure: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  post-em-material-closure: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-complex-measure: mathematical-premise
  def-total-variation-of-a-signed-or-complex-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adopted scalar aperture-diffraction model: a finite complex aperture distribution $\\alpha$ on a compact planar aperture, the outgoing scalar Helmholtz field $u=G_k*\\alpha$, its real-field reading $U=\\operatorname{Re}(ue^{-i\\omega t})$ and the squared-field comparisons $(1/2)|u|^2$ between observation points, in a declared polarization-insensitive regime. Excluded: derivation from the vacuum Maxwell or material-closure postulates, exact Maxwell validity, identification of $\\alpha$ with the exact screen boundary traces, well-posedness of simultaneously prescribed $u$ and $\\partial_nu$, polarization and vector effects, aperture back-reaction, absolute radiometric calibration, apparatus, sampling and every empirical comparison."
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 14 'Wellenoptik'"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "printed pp. 14.1-14.5, eqs. (14.1)-(14.13): Kirchhoff diffraction, Huygens principle, Fraunhofer and Fresnel diffraction"
    - title: "J. Peatross and M. Ware, Physics of Light and Optics (Brigham Young University, author-hosted complete 348-page textbook)"
      url: "https://optics.byu.edu/docs/OpticsBook.pdf"
      locator: "chapter 10 'Diffraction', printed pp. 261-271, sections 10.1-10.4 and Example 10.4; appendix 10.A"
verification:
  precheck: n/a
---

## Postulate

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by [[lem-em-outgoing-source-helmholtz-and-diffraction]] and [[lem-em-helmholtz-boundary-representation]] ([[def-countable-choice]]); the smooth modal full-Choice branch of the latter is not used. Adopt as a model assumption of the framework the following scalar aperture-diffraction model.

**(a) [Data.]** Fix an angular frequency $\omega>0$ and wavenumber $k:=\omega/c$, with $c$ the vacuum speed of [[def-em-si-conventions]]. Let $S\subset\{y\in\mathbb R^3:y_3=0\}\cap\{y:|y|\le a\}$ be a nonempty compact subset of a declared aperture plane $y_3=0$ with aperture radius $a>0$ (the screening plane and spatial region are read in the laboratory chart of [[def-em-lab-geometry]]), and let $\alpha$ be a finite complex measure on $\mathbb R^3$ supported in $S$ ([[def-complex-measure]], [[def-total-variation-of-a-signed-or-complex-measure]]) — the **aperture distribution** — with $\alpha$ read in volts so that the model field below carries the unit $\mathrm V\,\mathrm m^{-1}$ of an electric-field component and its pairings are those of [[def-integration-against-a-signed-or-complex-measure]].

**(b) [Model field.]** The model assigns to every observation point $x$ with $x_3>0$ the complex scalar amplitude

$$u(x):=\int G_k(x-y)\,d\alpha(y),$$

where $G_k(z)=e^{ik|z|}/(4\pi|z|)$ for $z\ne0$ is the outgoing Helmholtz kernel of [[lem-em-outgoing-source-helmholtz-and-diffraction]], together with the real scalar field $U(x,t):=\operatorname{Re}(u(x)e^{-i\omega t})$ and the model period-averaged squared field $(1/2)|u(x)|^2$. All model predictions are declared comparisons of this squared field between observation points; no absolute radiometric power or intensity calibration is adopted.

**(c) [Adopted regime and status.]** The model is the declared polarization-insensitive scalar approximation of aperture diffraction. It ignores the vector nature and polarization of the electromagnetic field, takes the aperture distribution rather than the exact screen traces as its datum, assigns no back-reaction of the diffracted field on the illumination and no screen interaction beyond the aperture, and is not derived from either branch of [[post-em-vacuum-maxwell]] or from the material-closure branches of [[post-em-material-closure]]; it is a declared optical approximation, not an exact electromagnetic model. It does not assert that $u$ or $U$ satisfies the Maxwell equations exactly, and it does not identify $\alpha$ with the unknown exact Maxwell boundary traces: assigning both $u$ and $\partial_nu$ on the aperture independently is not a well-posed exact boundary problem, as recorded in [[lem-em-helmholtz-boundary-representation]], and the error terms of [[lem-em-outgoing-source-helmholtz-and-diffraction]] are the controlled content of the model. No measured intensity, apparatus, sampling model, uncertainty budget, empirical comparison or quantitative radiometric calibration is adopted.

### Well-definedness and non-derivation notes

For fixed $x$ with $x_3>0$ and $y$ ranging over the compact support $S$ of $\alpha$, one has $|x-y|\ge x_3>0$, so $y\mapsto G_k(x-y)$ is continuous on $S$, bounded there by $1/(4\pi x_3)$; the pairing $\int G_k(x-y)\,d\alpha(y)$ is therefore the integral of a bounded continuous complex function against a finite complex measure and is defined by [[def-integration-against-a-signed-or-complex-measure]], with $|u(x)|\le\|\alpha\|_{\mathrm{TV}}/(4\pi x_3)$ in the total variation of [[def-total-variation-of-a-signed-or-complex-measure]]. The model permits the compact closed-radius support $|y|\le a$, including aperture corners: the integral and off-support regularity of the model field are those established for finite measures supported in a containing open ball of radius $A>a$ by [[lem-em-outgoing-source-helmholtz-and-diffraction]], while the sharp closed-radius estimates at $r\ge2a$ are proved directly in the consuming diffraction theorem and are not obtained by evaluating an open-support hypothesis at a boundary point.

The integral against a finite complex measure, the real-field reading and the squared field $\tfrac12|u|^2$ constitute the whole mathematical content adopted here; the physical reading uses the aperture plane and spatial region of [[def-em-lab-geometry]], the relation $k=\omega/c$ and the units of [[def-em-si-conventions]]. Neither the smooth nor the weak branch of [[post-em-vacuum-maxwell]] implies this scalar source model, and the finite-conductivity and material branches of [[post-em-material-closure]] contain no ideal aperture or screen model. The item uses no choice principle beyond those carried by the cited mathematical suppliers; the Countable Choice hypothesis is inherited verbatim from the kernel and boundary-representation suppliers and this postulate adds no choice use of its own. No derivation of the adopted data from the underlying postulates, and no empirical validation of the model, is claimed or implied by this item.
