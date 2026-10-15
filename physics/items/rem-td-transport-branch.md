---
id: rem-td-transport-branch
kind: remark
domain: physics
library: physics
title: Scope of transport constitutive laws
status: published
origin: pipeline
dependency_level: 1
deps:
  - rem-td-local-equilibrium-branch
  - def-function
  - def-euclidean-inner-product
  - def-directional-and-partial-derivatives
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
dependency_roles:
  rem-td-local-equilibrium-branch: formulation-prerequisite
  def-function: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Prospective near-equilibrium continuum transport models with declared local fields and material-specific constitutive data; no universal transport coefficient or experimental value is asserted.
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, SM: Statistical Mechanics, current author-hosted merged notes, Chapter 6 §§6.1–6.5"
      url: "https://essentialgraduatephysics.org/Files/SM%20merged.pdf"
    - title: "D. Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, 12 October 2026), §§8.2–8.9"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Remark

**Scope.**

Use the fields and local-equilibrium regime of [[rem-td-local-equilibrium-branch]]. For this constitutive relation, assume $T$ has continuous first spatial partial derivatives, defined as in [[def-directional-and-partial-derivatives]], and write

$\nabla T:=(\partial_{x_1}T,\partial_{x_2}T,\partial_{x_3}T)\in\mathbb R^3.$

Here the physical coordinate indices $i=1,2,3$ correspond to function indices $i-1$ in [[def-euclidean-inner-product]] and [[def-directional-and-partial-derivatives]].

The components of $\nabla T$ have units $\mathrm{K\,m^{-1}}$.

Matrices are elements of $M_{3\times3}(\mathbb R)$ as in [[def-matrix-space]]. In the physical one-based display, $K_{ij}$ denotes the library matrix entry with indices $(i-1,j-1)$, and $v_i$ denotes vector coordinate $i-1$, for $i,j=1,2,3$. The action is $(Kv)_i:=\sum_{j=1}^3K_{ij}v_j$; $I_3$ is the matrix with entries $1$ on the diagonal and $0$ off it as in [[def-matrix-product-and-identity-matrix]]. A Fourier heat-transport model may postulate

$$\mathbf j_Q(\mathbf x,t)=-K(\mathbf x,t)\nabla T(\mathbf x,t),$$

where $\mathbf j_Q:\mathcal O\times I\to\mathbb R^3$ is a continuous heat-energy flux field in $\mathrm{W\,m^{-2}}$ and $K:\mathcal O\times I\to M_{3\times3}(\mathbb R)$ is a declared conductivity tensor field with entries in $\mathrm{W\,m^{-1}\,K^{-1}}$. In an isotropic model $K(\mathbf x,t)=\kappa(\mathbf x,t)I_3$, where $\kappa:\mathcal O\times I\to[0,\infty)$ is the declared scalar conductivity field. A diffusion model may separately postulate $\mathbf j_n=-D\nabla n$, where number density $n:\mathcal O\times I\to[0,\infty)$ is in $\mathrm{m^{-3}}$, number flux $\mathbf j_n:\mathcal O\times I\to\mathbb R^3$ is in $\mathrm{m^{-2}\,s^{-1}}$, and $D$ is either a scalar field $D:\mathcal O\times I\to\mathbb R$ or a matrix field $D:\mathcal O\times I\to M_{3\times3}(\mathbb R)$ with coefficient units $\mathrm{m^2\,s^{-1}}$; its regularity and positivity conditions are model data.

These are constitutive choices for specified material, geometry, regime, field regularity and boundary conditions. In a kinetic model with microscopic state space $\Xi$ and allowed collision transitions $\mathcal C\subseteq\Xi\times\Xi$, a collision invariant is a real-valued function $Q:\Xi\to\mathbb R$ satisfying $Q(\xi')=Q(\xi)$ for every $(\xi,\xi')\in\mathcal C$. If the model has a distribution $f$ on a declared phase space and a collision operator $C[f]$ giving the collision contribution to its evolution, a single-relaxation-time replacement may be $C_\tau[f]=-(f-f_0)/\tau$, with model-declared reference distribution $f_0$ and $\tau>0$. This replacement need not preserve collision invariants unless it is constrained to preserve their integrals against the model's state distribution. Different kinetic, linear-response and quantum transport models use different hypotheses and coefficient definitions; a coefficient derived in one is not thereby universal. No kinetic operator or reciprocity law is defined or asserted here. Microscopic calculations and measurements may determine or test coefficients for a specified model and material, but neither the equilibrium entropy postulates nor dimensional consistency alone determine them.

Any heat equation or transport conclusion additionally needs the relevant conservation balance, sources or work terms, constitutive relation, initial data and boundary conditions. No such evolution equation, Onsager relation, or transport coefficient is proved or adopted by this remark.
