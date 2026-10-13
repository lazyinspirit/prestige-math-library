---
id: def-em-relativistic-worldlines-frames
kind: definition
title: "Worldlines, four-velocity, chart readings and the frame/observer distinction"
status: published
origin: session
domain: physics
deps: [def-em-lab-geometry, def-em-si-conventions, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-sr-four-velocity-and-four-acceleration, def-sr-proper-time, def-sr-regular-causal-curve-and-worldline, post-em-minkowski-physical-model, thm-sr-proper-time-and-observer-decomposition]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  post-em-minkowski-physical-model: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The worldline, light-ray and observer objects of the classical electromagnetic framework in flat Minkowski spacetime: future timelike massive worldlines, future null light rays, their four-velocity and chart readings, and the distinction between inertial frames, charts, observers, congruences and tetrads. No force law, self-field or extended-body structure is included, and null curves are excluded from massive-particle uses."
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§3 printed pp. 7-9 (proper time), §6-§7 printed pp. 14-22 (four-vectors and four-velocity) and §9 printed pp. 25-28 (energy and momentum), read in the stamped 387-page full text"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.1-§5.1.3, printed pp. 95-99 (PDF pp. 103-107): worldline parametrization, proper time and four-velocity. The precise regularity and observer-field definitions are supplied locally and by the named SR items."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§12.1-§12.2 printed pp. 491-504 (spacetime coordinates, proper time and four-vectors), read in the stamped scanned full text"
---

## Definition

The particle and light objects of the framework are the following curves and
vector fields of the affine Minkowski model ([[def-sr-affine-minkowski-model]],
[[def-inertial-frame-and-inertial-chart]]), with the physical interpretation of
[[post-em-minkowski-physical-model]] and the units of
[[def-em-si-conventions]].

(a) [Worldlines] A **worldline** is a regular causal curve $x:J\to A$ in one of
the regularity classes of [[def-sr-regular-causal-curve-and-worldline]] ($J$ an
order-convex subset of $\mathbb R$ with at least two elements). A **massive
worldline** is a $C^k$ future timelike worldline, $k\ge1$, with everywhere
nonzero future timelike tangent. A **future null curve** is a $C^1$ curve with
everywhere nonzero future null tangent. An **ideal vacuum light ray** of the
adopted physical model follows a null straight line: on its parameter interval
it has the form $x(s)=p+\lambda(s)v$, where $p\in A$, $v\in V$ is nonzero
future null, and $\lambda$ is $C^1$ with $\lambda'(s)>0$. This is the
straight-ray adoption of [[post-em-minkowski-physical-model]]; arbitrary
future null curves are retained as kinematic objects without asserting that
they describe vacuum light propagation. Along a null curve the integrand
$-\eta(x',x')$ of the proper-time construction
([[def-sr-proper-time]]) vanishes identically, so that construction yields no
proper-time parametrization of it, and a light ray is never treated as a
massive worldline. A worldline is a curve in spacetime; its reading $r\circ x$
in a named laboratory chart is a coordinate description of it, not an object of
another observer.

(b) [Four-velocity and four-acceleration] For a massive worldline the
four-velocity $U$ and, when it is $C^2$, the four-acceleration $A$ are those of
[[def-sr-four-velocity-and-four-acceleration]]; wherever defined they satisfy
$\eta(U,U)=-c^2$ and $\eta(U,A)=0$, by
[[thm-sr-proper-time-and-observer-decomposition]].

(c) [Chart reading] If a massive $C^2$ worldline is described in a laboratory
chart of [[def-em-lab-geometry]] by $t\mapsto(ct,r(t))$ on an open interval of
laboratory times, then $|r'(t)|<c$ for every $t$, with four-velocity
$U=\gamma(c,r')$ and Lorentz factor
$\gamma=(1-|r'|^2/c^2)^{-1/2}$, by clause (e) of
[[thm-sr-proper-time-and-observer-decomposition]].

(d) [Frames and observers] An inertial frame in this framework is the
origin-with-basis object of [[def-inertial-frame-and-inertial-chart]]; a point
observer is a future unit timelike vector $n\in V$ with rest space $n^\perp$ and
rest projection $h$, as in clauses (c)-(d) of
[[thm-sr-proper-time-and-observer-decomposition]]. On an open spacetime region
$W\subseteq A$, an **observer congruence field** means a $C^1$ map $n:W\to V$ with
$n(p)$ future timelike and $\eta(n(p),n(p))=-1$ at every $p$; its observer
histories, when given, are integral curves satisfying $dx/d\tau=cn(x)$.
A **tetrad field** is a tuple of $C^1$ maps $(f_0,f_1,f_2,f_3):W\to V^4$
whose values form a positively oriented $\eta$-orthonormal basis at every
event, with $f_0$ future timelike. Regularity here means componentwise $C^1$
in inertial coordinates. These fields need not be constant and are distinct
from an inertial origin-with-basis frame, its coordinate chart and a single
point observer; no global congruence or tetrad is asserted to exist.

(e) [Scope] No force law, no self-field and no extended-body structure is
supplied here; an accelerating massive worldline requires a force model stated
separately, and an ideal light ray carries no dispersive, quantum or
polarisation structure in this definition.
