---
id: def-gr-newtonian-comparison-model-and-identification
kind: definition
title: "The Newtonian comparison model and the weak-field correspondence identification"
status: draft
origin: session
domain: physics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-stationary-weak-field-data, def-gr-si-unit-and-coordinate-conventions, def-gr-stress-energy-tensor-field, def-laplacian-of-a-c2-function, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-total-derivative-in-euclidean-space]
dependency_roles:
  def-gr-stationary-weak-field-data: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-laplacian-of-a-c2-function: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
physical_scope: "Definition of the auxiliary Newtonian comparison model (potential, mass density, gravitational constant and comparison motions) and of the dictionary that identifies its variables, coordinates and coupling with the quantities of the relativistic stationary weak-field data. Excludes any derivation of either framework from the other, any approximation or error theorem (proved separately), any statement about the numerical value of a physical constant, distributional or point sources, boundary conditions at spatial infinity, and any empirical claim. The identification is an adopted correspondence reading, not a theorem or an observation."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit, the identification g_{00}=-(1+2Phi/c^2), the Poisson equation Delta Phi = 4 pi G_N rho and the mass-density identification, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the identification of the potential and mass density with their Newtonian counterparts, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian module: Newtonian gravity as the weak-field slow-motion comparison model, and its variable and coupling dictionary"
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
a $C^2$ curve $q:J\to O$ on an interval $J\subseteq\mathbb R$ whose points
are read as times in seconds, satisfying the **Newtonian equation of motion**

$$q''(t)=-\nabla\Phi_N\bigl(q(t)\bigr)\qquad(t\in J),$$

the gradient being the total derivative of $\Phi_N$
([[def-total-derivative-in-euclidean-space]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]).
The model is an auxiliary classical model: its equations are adopted as part
of the definition of the comparison framework and are not derived here from
the relativistic framework or from anything else.

**(b) The correspondence identification.** Let
$(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data over
$\Omega$ with parameters $c>0$ and $G_N>0$ that form an Einstein family
([[def-gr-stationary-weak-field-data]]), with potential
$\Phi=\varepsilon c^2\varphi$ and densities $\rho_\varepsilon$, in the
framework's unit conventions ([[def-gr-si-unit-and-coordinate-conventions]],
[[def-gr-stress-energy-tensor-field]]). A **comparison reading** of the data
consists of a Newtonian comparison model $(O,\Phi_N,\rho_N,G_{\mathrm{cmp}})$
together with the following identifications, adopted as a correspondence
dictionary:

1. the spatial region $O$ is the image of $\Omega$ under the spatial part
   $x\mapsto(x^1,x^2,x^3)$ of the inertial chart, so that the chart spatial
   coordinates $x^i$ in metres are identified with the Newtonian positions;
2. the chart time $t=x^0/c$ in seconds is identified with the Newtonian time
   parameter, with $c$ the framework's conversion constant;
3. the potential $\Phi$ of the data is identified with $\Phi_N$ as functions
   on the common spatial region, both read in $\mathrm m^2\,\mathrm s^{-2}$;
4. the density $\rho_\varepsilon=T_{00}(\varepsilon)/c^2$ read from the
   time-time component of the model's stress-energy tensor is identified with
   $\rho_N$ as functions on the common spatial region, both read in
   $\mathrm{kg}\,\mathrm m^{-3}$;
5. the comparison model's constant $G_{\mathrm{cmp}}$ is identified with the
   framework's constant $G_N$.

**(c) Status.** The dictionary of (b) is an **adopted correspondence
assumption**: it fixes which objects of the two frameworks are to be compared
and in which units, and it is part of the formulation of any bridge statement
built on it. It is not a theorem of either framework, it does not assert that
the two models agree in any topology or to any order, and it does not assert
that either framework describes nature. In particular, identifying the
symbols is not an identification of the theories: the separate theorem of
this page supplies the error-controlled comparison under its own hypotheses,
and no equality of trajectories, potentials or densities beyond that
statement is asserted.

**(d) Scope and exclusions.** The comparison model is smooth and
source-continuous: point masses and delta densities are excluded, no boundary
conditions at spatial infinity are imposed, and no statement is made about
the numerical value, sign convention or uncertainty of $G_N$, $G_{\mathrm{cmp}}$
or $c$; those belong to the framework's conventions and to empirical work
elsewhere. The comparison model has no relativistic content: it carries no
metric, no causal structure and no stress-energy tensor, and its
identification with the weak-field data is confined to the items listed in
(b).
