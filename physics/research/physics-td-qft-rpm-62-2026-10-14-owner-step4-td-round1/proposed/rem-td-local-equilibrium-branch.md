---
id: rem-td-local-equilibrium-branch
kind: remark
domain: physics
library: physics
title: Scope of a local-equilibrium continuum branch
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-function
  - def-natural-numbers
  - def-euclidean-inner-product
  - def-subset-and-proper-subset
  - def-interval
  - def-metric-topology
  - def-directional-and-partial-derivatives
dependency_roles:
  def-function: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-subset-and-proper-subset: mathematical-premise
  def-interval: mathematical-premise
  def-metric-topology: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: A prospective continuum description of a specified material on a three-dimensional spatial region and time interval; no evolution law or empirical identification is asserted.
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, SM: Statistical Mechanics, current author-hosted merged notes, Chapter 6 §6.1"
      url: "https://essentialgraduatephysics.org/Files/SM%20merged.pdf"
    - title: "BIPM, The International System of Units, 9th edition, version 4.01, §§2.3.1–2.3.2 and Table 4"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
    - title: "D. Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, 12 October 2026), §§8.2, 8.4, and 8.8"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Remark

**Scope and objects.**

For a declared continuum model, let $m\in\mathbb N$ with $m\ge1$ ([[def-natural-numbers]]) and let $\mathcal O\subseteq\mathbb R^3$ be open in the metric topology induced by the Euclidean norm ([[def-euclidean-inner-product]], [[def-metric-topology]], [[def-subset-and-proper-subset]]). Its spatial coordinates are in metres. In the conventional physical display $\mathbf x=(x_1,x_2,x_3)$, $x_i$ denotes the function coordinate at index $i-1$ of the library's $\mathbb R^3$ ([[def-euclidean-inner-product]]). Let $I=(t_0,t_1)\subseteq\mathbb R$ be a nonempty open interval of time ([[def-interval]]) with coordinates in seconds. A field is a function on the stated space-time domain, with its domain and codomain shown, as in [[def-function]]. The model chooses a local-state parameter set $\mathcal Z\subseteq\mathbb R^m$ and a field $z=(z_1,\ldots,z_m):\mathcal O\times I\to\mathcal Z$ whose component functions have continuous first partial derivatives in the three spatial coordinates and time; the partial derivatives are those of [[def-directional-and-partial-derivatives]]. Each $z_j$ is the dimensionless numerical value of its local quantity divided by its model-declared reference unit $u_j$; the model specifies $u_j$ and the physical meaning of each component. In particular, if temperature is the component $z_{j_T}$, the model declares that index and reads $T(\mathbf x,t)=(1\,\mathrm K)z_{j_T}(\mathbf x,t)$, so $T:\mathcal O\times I\to(0,\infty)$ has units kelvins. If the model includes mass density and fluid velocity, their types are $\rho:\mathcal O\times I\to[0,\infty)$ in $\mathrm{kg\,m^{-3}}$ and $\mathbf u:\mathcal O\times I\to\mathbb R^3$ in $\mathrm{m\,s^{-1}}$; these fields may also be required to have continuous first partial derivatives. Each model must specify its remaining coordinates and equation of state; $\mathcal Z$ is not universal.

For an explicit constrained-equilibrium constitutive model, supply a state set $\mathcal E$, a dimensionless endpoint entropy $s:\mathcal E\to\mathbb R$, conserved-coordinate maps $C_a:\mathcal E\to\mathbb R$ in declared reference units, and matching local quantities $c_a:\mathcal Z\to\mathbb R$. The model specifies a retained-constraint subset $\mathcal A_z\subseteq\{e\in\mathcal E:C_a(e)=c_a(z)\text{ for every }a\}$ for each $z\in\mathcal Z$. Define the local equilibrium criterion at those constraints by
$$\mathcal E_{\mathrm{eq}}(z):=\{e\in\mathcal A_z:s(e)\ge s(e')\text{ for every }e'\in\mathcal A_z\}.$$
The endpoint entropy identification, cell model, conserved quantities and retained constraints are adopted physical constitutive data; they do not follow from the continuum parameter field. A **local-equilibrium approximation** on a selected parameter domain is a supplied map $q:\mathcal Z\to\mathcal E$ satisfying $q(z)\in\mathcal E_{\mathrm{eq}}(z)$ for every selected $z$, together with the assumption that the constitutive state assigned at $(\mathbf x,t)$ is $q(z(\mathbf x,t))$. This criterion asserts constrained equilibrium inside each local cell, not global equilibrium of nonconstant fields. Attainment and a chosen selection must be supplied for this branch; no existence, uniqueness or regularity of $q$ is inferred. A different constitutive branch must give its own explicit equilibrium equations or predicate and matching conserved quantities before using the equilibrium label; an arbitrary map into a merely named set is not such a criterion. A model using finite coarse-grained cells must separately specify its cell partition and the map from cells to local parameters; this remark adopts no such partition. A kinetic model may declare a mean free path $\ell>0\,\mathrm m$ from its intercollision-distance law, a characteristic field-variation length $L>0\,\mathrm m$, a collision-relaxation time $\tau_{\mathrm c}>0\,\mathrm s$, and a protocol-variation time $\tau_{\mathrm m}>0\,\mathrm s$. The model must give the mathematical construction of each scale (including any distribution and finite-mean condition when it uses an expectation) and its criterion for scale separation. Such a model may require $\ell/L\ll1$ and $\tau_{\mathrm c}/\tau_{\mathrm m}\ll1$; the meaning of $\ll1$ is set by that model and has no universal numerical threshold. Where a kinetic model has a distribution $f$ on a declared phase space and a local-equilibrium distribution $f_0(z)$, write its deviation as $\delta f:=f-f_0(z)$; $f$, $f_0$ and their domains are supplied by that model, and the local-equilibrium distribution alone need not solve the kinetic evolution equation.

Nonconstant fields $T(\mathbf x,t)$, $\rho(\mathbf x,t)$, or $\mathbf u(\mathbf x,t)$ are permitted in this continuum model and do not describe global equilibrium. Initial data, boundary conditions, conservation equations, constitutive assumptions and their empirical scope must be supplied before any time evolution or transport conclusion is claimed.
