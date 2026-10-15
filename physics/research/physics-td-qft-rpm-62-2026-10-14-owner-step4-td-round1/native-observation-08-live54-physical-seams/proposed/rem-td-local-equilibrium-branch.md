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
    - title: "K. Likharev, Essential Graduate Physics, SM: Statistical Mechanics, current author-hosted merged notes, Chapter 1 §1.2 and Chapter 6 §6.1"
      url: "https://essentialgraduatephysics.org/Files/SM%20merged.pdf"
    - title: "BIPM, The International System of Units, 9th edition, version 4.01, §§2.3.1–2.3.2 and Table 4"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
    - title: "D. Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, 12 October 2026), §§8.2, 8.4, and 8.8"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Remark

**Scope and objects.**

For a declared continuum model, let $m\in\mathbb N$ with $m\ge1$ ([[def-natural-numbers]]) and let $\mathcal O\subseteq\mathbb R^3$ be open in the metric topology induced by the Euclidean norm ([[def-euclidean-inner-product]], [[def-metric-topology]], [[def-subset-and-proper-subset]]). Its spatial coordinates are in metres. In the conventional physical display $\mathbf x=(x_1,x_2,x_3)$, $x_i$ denotes the function coordinate at index $i-1$ of the library's $\mathbb R^3$ ([[def-euclidean-inner-product]]). Let $I=(t_0,t_1)\subseteq\mathbb R$ be a nonempty open interval of time ([[def-interval]]) with coordinates in seconds. A field is a function on the stated space-time domain, with its domain and codomain shown, as in [[def-function]]. The model chooses a local-state parameter set $\mathcal Z\subseteq\mathbb R^m$ and a field $z=(z_1,\ldots,z_m):\mathcal O\times I\to\mathcal Z$ whose component functions have continuous first partial derivatives in the three spatial coordinates and time; the partial derivatives are those of [[def-directional-and-partial-derivatives]]. Each $z_j$ is the dimensionless numerical value of its local quantity divided by its model-declared reference unit $u_j$; the model specifies $u_j$ and the physical meaning of each component. In particular, if temperature is the component $z_{j_T}$, the model declares that index and reads $T(\mathbf x,t)=(1\,\mathrm K)z_{j_T}(\mathbf x,t)$, so $T:\mathcal O\times I\to(0,\infty)$ has units kelvins. If the model includes mass density and fluid velocity, their types are $\rho:\mathcal O\times I\to[0,\infty)$ in $\mathrm{kg\,m^{-3}}$ and $\mathbf u:\mathcal O\times I\to\mathbb R^3$ in $\mathrm{m\,s^{-1}}$; these fields may also be required to have continuous first partial derivatives. Each model must specify its remaining coordinates and equation of state; $\mathcal Z$ is not universal.

A **local-equilibrium approximation** requires an explicit equilibrium criterion for a homogeneous comparison cell at each parameter value $a\in\mathcal Z$. One entropy-based specification consists of a set $\mathcal X$ of cell states, a finite-valued numerical entropy $s:\mathcal X\to\mathbb R$ (physical entropy $(1\,\mathrm{J\,K^{-1}})s$), a map $C:\mathcal X\to\mathbb R^r$ of retained conserved quantities in declared reference units, a map $c:\mathcal Z\to\mathbb R^r$ of their fixed values, and a specified set $B_a\subseteq\mathcal X$ of states allowed by the retained cell constraints. Here $r\ge1$ is a specified integer, and the physical meanings of the states, conserved quantities and constraints are model data. Define

$$A_a:=\{e\in B_a:C(e)=c(a)\},\qquad E_a:=\{e\in A_a:s(e)\ge s(e')\text{ for every }e'\in A_a\},\qquad \mathcal E_{\mathrm{eq}}:=\bigcup_{a\in\mathcal Z}E_a.$$

Thus equilibrium means entropy maximization under the stated constraints, not an arbitrary label. The model must supply a map $q:\mathcal Z\to\mathcal E_{\mathrm{eq}}$ satisfying $q(a)\in E_a$ for every $a$; existence, attainment and a selection in the case of multiple maximizers are requirements on the supplied model, not conclusions here. No choice axiom or equilibration theorem is being invoked to construct $q$. A different equilibrium formulation must instead give its full mathematical condition, its physical constraints and parameter matching, and verify that its supplied $q(a)$ satisfies that condition; naming a target set equilibrium does not suffice. For example, a kinetic collision-equilibrium condition must specify the distribution class, collision operator and retained moments, and require the selected distribution to have those moments and zero collision term. This condition alone does not assert a maximum-entropy characterization or solve the full transport equation.

The local-equilibrium assumption assigns the comparison-cell state $q(z(\mathbf x,t))$ at each point. It adopts the cell's equilibrium constitutive values locally; it does not claim that different cells are in mutual equilibrium. A model using finite coarse-grained cells must separately specify its cell partition and the map from cells to local parameters; this remark adopts no such partition. A kinetic model may declare a mean free path $\ell>0\,\mathrm m$ from its intercollision-distance law, a characteristic field-variation length $L>0\,\mathrm m$, a collision-relaxation time $\tau_{\mathrm c}>0\,\mathrm s$, and a protocol-variation time $\tau_{\mathrm m}>0\,\mathrm s$. The model must give the mathematical construction of each scale (including any distribution and finite-mean condition when it uses an expectation) and its criterion for scale separation. Such a model may require $\ell/L\ll1$ and $\tau_{\mathrm c}/\tau_{\mathrm m}\ll1$; the meaning of $\ll1$ is set by that model and has no universal numerical threshold. Where a kinetic model has a distribution $f$ on a declared phase space and a local-equilibrium distribution $f_0(z)$, write its deviation as $\delta f:=f-f_0(z)$; $f$, $f_0$ and their domains are supplied by that model, and the local-equilibrium distribution alone need not solve the kinetic evolution equation.

Nonconstant fields $T(\mathbf x,t)$, $\rho(\mathbf x,t)$, or $\mathbf u(\mathbf x,t)$ are permitted in this continuum model. The pointwise comparison-cell assignment alone neither establishes nor excludes global equilibrium; that requires the declared model’s full equilibrium criterion, external fields and constraints. In particular, spatially nonconstant density may occur in global equilibrium in an external potential. Initial data, boundary conditions, conservation equations, constitutive assumptions and their empirical scope must be supplied before any time evolution or transport conclusion is claimed.
