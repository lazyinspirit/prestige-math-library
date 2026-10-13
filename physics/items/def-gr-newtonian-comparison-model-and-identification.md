---
id: def-gr-newtonian-comparison-model-and-identification
kind: definition
title: "The Newtonian comparison model and the weak-field correspondence identification"
status: published
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-stationary-weak-field-data, def-gr-si-unit-and-coordinate-conventions, def-gr-stress-energy-tensor-field, def-laplacian-of-a-c2-function, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, thm-total-derivative-computes-directional-and-partial-derivatives, def-euclidean-inner-product]
dependency_roles:
  def-gr-stationary-weak-field-data: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-laplacian-of-a-c2-function: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
physical_scope: "Definition of the auxiliary Newtonian comparison model (potential, source density, gravitational constant and comparison motions) and of the dictionary that identifies its spatial region, coordinates, potential and coupling with the relativistic stationary weak-field data. The Newtonian source density and the relativistic coordinate and dust rest-mass densities remain distinct; their error-qualified matching is proved separately. Excludes any derivation of either framework from the other, any numerical value of a physical constant, distributional or point sources, boundary conditions at spatial infinity, and any empirical claim. The coordinate and potential identifications are adopted correspondences, not theorems or observations."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit, the identification g_{00}=-(1+2Phi/c^2), the Poisson equation Delta Phi = 4 pi G_N rho and the mass-density identification, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the identification of the potential and mass density with their Newtonian counterparts, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.2, equations (7.19), (7.27)-(7.28) and (7.35)-(7.36), printed pp. 74-77 (PDF pp. 75-78): Newtonian potential, force and Poisson comparison; the exact correspondence dictionary is adopted locally"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Definition

This item defines the auxiliary framework used to formulate the Newtonian
bridge, and the dictionary by which the relativistic weak-field data are read
against it. It asserts no approximation; the approximation statement is a
separate theorem of this page.

**(a) Newtonian comparison model.** A **Newtonian comparison model** is a
tuple $(O,\Phi_N,\rho_N,G_{\mathrm{cmp}})$ consisting of

- a nonempty open set $O\subseteq\mathbb R^3$, the **spatial region**, whose
  points are read as positions in metres;
- a $C^\infty$ function $\Phi_N:O\to\mathbb R$, the **Newtonian potential**,
  whose values are read in $\mathrm m^2\,\mathrm s^{-2}$;
- a $C^\infty$ function $\rho_N:O\to\mathbb R$, the **Newtonian mass
  density**, whose values are read in $\mathrm{kg}\,\mathrm m^{-3}$; and
- a real constant $G_{\mathrm{cmp}}>0$ with the dimension
  $\mathrm m^3\,\mathrm{kg}^{-1}\mathrm s^{-2}$,

such that the **Newtonian field equation**

$$\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N\qquad\text{on }O$$

holds, where $\Delta$ is the Laplacian on $\mathbb R^3$
([[def-laplacian-of-a-c2-function]]). A **comparison motion** of the model is
a curve $q:J\to O$ on a nonempty interval $J\subseteq\mathbb R$ with
nonempty interior, whose points are read as times in seconds. Here **$C^2$
on $J$** means that $q$ is continuous on $J$, is $C^2$ on its open interior,
and $q'$, $q''$ extend continuously to each included finite endpoint.
At those endpoints derivatives mean these unique limits from the interior.
A comparison motion is $C^2$ in this sense and satisfies the **Newtonian
equation of motion**

$$q''(t)=-\nabla\Phi_N\bigl(q(t)\bigr)\qquad(t\in J),$$

where in the standard coordinates of $\mathbb R^3$
$\nabla\Phi_N(q):=(\partial_1\Phi_N(q),\partial_2\Phi_N(q),\partial_3\Phi_N(q))$
([[def-jacobian-matrix-and-gradient]]) and the total derivative is the
covector represented by this vector through the Euclidean inner product:
$D\Phi_N(q)[v]=\langle\nabla\Phi_N(q),v\rangle$
([[def-total-derivative-in-euclidean-space]],
[[thm-total-derivative-computes-directional-and-partial-derivatives]],
[[def-euclidean-inner-product]]).
The model is an auxiliary classical model: its equations are adopted as part
of the definition of the comparison framework and are not derived here from
the relativistic framework or from anything else.

**(b) The correspondence identification.** Let
$(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data over
the spacetime region $\Omega$, with spatial base $U=\pi(\Omega)$, parameters
$c>0$ and $G_N>0$, an Einstein family, spatial potential
$\Phi=\varepsilon c^2\varphi$, and coordinate density
$\rho_\varepsilon=T_{00}(\varepsilon)/c^2$ on $U$
([[def-gr-stationary-weak-field-data]],
[[def-gr-si-unit-and-coordinate-conventions]],
[[def-gr-stress-energy-tensor-field]]). A **comparison reading** consists of a
Newtonian comparison model $(O,\Phi_N,\rho_N,G_{\mathrm{cmp}})$ and the
following adopted dictionary:

1. the Newtonian spatial region is $O=U$, the spatial projection of $\Omega$,
   and chart spatial coordinates in metres are read as Newtonian positions;
2. chart time $t=x^0/c$ in seconds is read as the Newtonian time parameter;
3. the spatial potential $\Phi:U\to\mathbb R$ is identified exactly with
   $\Phi_N$, both with units $\mathrm m^2\,\mathrm s^{-2}$;
4. the constants $G_N$ and $G_{\mathrm{cmp}}$ are identified exactly.

The Newtonian source density $\rho_N$ continues to satisfy its exact model
equation in clause (a). It is not identified here with either
$\rho_\varepsilon=T_{00}/c^2$ or a dust rest-mass density; no density error
estimate is part of this definition.

**(c) Status.** The dictionary of (b) is an **adopted correspondence
assumption**: it fixes which regions, coordinates, potentials and couplings
of the two frameworks are to be compared, in which units, and is part of the
formulation of any bridge statement built on it. The Newtonian source density
$\rho_N$, the relativistic coordinate density $\rho_\varepsilon$ and a dust
rest-mass density are distinct quantities. Any error-qualified matching
between them is a separate theorem under its own hypotheses. This definition
neither asserts exact density equality nor agreement of the models, and it
does not assert that either framework describes nature.

**(d) Scope and exclusions.** The comparison model is smooth and
source-continuous: point masses and delta densities are excluded, no boundary
conditions at spatial infinity are imposed, and no statement is made about
the numerical value, sign convention or uncertainty of $G_N$, $G_{\mathrm{cmp}}$
or $c$; those belong to the framework's conventions and to empirical work
elsewhere. The comparison model has no relativistic content: it carries no
metric, no causal structure and no stress-energy tensor, and its
identification with the weak-field data is confined to the items listed in
(b).
