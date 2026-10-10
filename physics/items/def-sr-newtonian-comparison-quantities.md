---
id: def-sr-newtonian-comparison-quantities
kind: definition
domain: physics
title: 'Newtonian comparison momentum and kinetic energy in a named inertial frame'
status: draft
origin: session
dependency_level: 6
deps: [def-sr-affine-minkowski-model, def-sr-si-units-and-coordinate-conventions, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-vector-valued-derivative-and-integral, def-interval, def-integer-power, def-vector-space]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-integer-power: mathematical-premise
  def-vector-space: mathematical-premise
aliases: []
landmark: false
physical_scope: 'Formulation definition inside the flat special-relativity framework: the Newtonian comparison momentum and kinetic energy are built from a named inertial frame, its spatial Euclidean structure, a positive mass parameter and a coordinate velocity, in the SI conventions of the framework. The definition asserts no approximation, correspondence or error bound, no Newtonian theory, no force or matter law, and no empirical content; the correspondence claim is pthm-sr-newtonian-p-e-correspondence.'
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
verification:
  precheck: pass
---

## Definition

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model ([[def-sr-affine-minkowski-model]]), let $c>0$ with the SI conventions of [[def-sr-si-units-and-coordinate-conventions]], let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with inertial chart $x=(x^0,x^1,x^2,x^3)$ and spatial Euclidean structure $(S,\delta,|\cdot|)$ ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]), and let $m>0$.

(a) For $w\in S$ define the *Newtonian comparison momentum* and the *Newtonian comparison kinetic energy* of the pair $(m,w)$ by $$N_p(m,w):=mw,\qquad N_K(m,w):=\tfrac12\,m\,|w|^2,$$ where $mw$ is the scalar multiple of $w$ by the real number $m$ ([[def-vector-space]]) and $|w|^2=\delta(w,w)$ ([[def-integer-power]]). With the SI conventions these carry the units kilogram metre per second and joule respectively.

(b) Let $I\subseteq\mathbb R$ be an interval ([[def-interval]]) and let $y:I\to A$ have inertial coordinate path $t\mapsto(ct,r(t))$; writing $r(t)=r^1(t)e_1+r^2(t)e_2+r^3(t)e_3$ with real functions $r^1,r^2,r^3$, at each parameter value $t$ where all three coordinate derivatives exist, define the *coordinate velocity* $w(t)\in S$ of the path by $$w(t):=(r^1)'(t)\,e_1+(r^2)'(t)\,e_2+(r^3)'(t)\,e_3,$$ the componentwise derivative of [[def-vector-valued-derivative-and-integral]]. For a path differentiable at every parameter value these are functions on $I$; otherwise they are defined on its differentiability set. The comparison functionals along the path are $t\mapsto N_p(m,w(t))$ and $t\mapsto N_K(m,w(t))$.

(c) The functionals $N_p$ and $N_K$ are comparison expressions built from a named inertial frame, the mass parameter $m$ and the path's coordinate velocity. They are not defined by, and do not presuppose, a separately developed Newtonian theory, and this definition asserts no approximation, correspondence, error bound or physical claim; those are the content of [[pthm-sr-newtonian-p-e-correspondence]].

## Remarks

- **Well-definedness.** Clause (a) applies the scalar multiple of a vector of the real vector space $V$ (restricted to $S\subseteq V$) and the square of the norm $|\cdot|$ supplied by the frame's spatial structure, both total on $S$; clause (b) uses the componentwise derivative of a function $I\to\mathbb R^3$ and the unique expansion of a vector of $S$ in the ordered basis $(e_1,e_2,e_3)$ of [[def-spatial-euclidean-structure-of-an-inertial-frame]]. No division occurs and no choice principle is used.

- **No correspondence is asserted here.** The definition only names the two expressions that [[pthm-sr-newtonian-p-e-correspondence]] compares with the model's adopted measured quantities, and the units are the ones fixed by [[def-sr-si-units-and-coordinate-conventions]]. The derivative symbols in (b) are used only at points where the coordinate derivatives exist; no velocity is assigned to an arbitrary nondifferentiable path, and the physical correspondence consumers retain their stated differentiable future-timelike worldline hypotheses. The mass parameter $m>0$ is part of the definition's data; the definition itself attaches no dynamics, force or measurement to it.
