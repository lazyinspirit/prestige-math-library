---
id: post-cm01-frames
kind: postulate
title: "Inertial frames, stationary observers and the adopted Galilean transformations between frames"
status: draft
origin: session
domain: physics
dependency_level: 4
deps: [post-cm01-spacetime, def-cm-affine-time-space, def-cm01-units, def-cm-special-orthogonal-group, lem-cm-adapted-coordinates-exist-and-are-unique]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of the inertial frames of the Newtonian model as the adapted affine charts of its spacetime, of the stationary observer congruence of a frame, and of the class of Galilean transformations relating two inertial frames, with the rotation group SO(3), time shifts, spatial translations and boosts. The item excludes non-inertial and time-dependent bases as frames, asserts no force law or conservation law, and attaches no measured value to any frame datum."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1 'Galilean Relativity', printed page 5 (PDF page 11): translations x' = x + a, rotations x' = R x with R^T R = 1 and boosts x' = x + v t map inertial frames to inertial frames and generate the Galilean group"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 3 (PDF page 7): there exists at least one inertial frame in which a free particle moves with constant velocity, and frames moving without rotation or acceleration relative to it are also inertial"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): an inertial frame is a frame in which a free particle travels in a straight line, and three rotations, three translations, three boosts and one time translation relate inertial frames"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following statements about frames, in the spacetime structure of [[post-cm01-spacetime]].

**(i) Rotations.** A **rotation** is a matrix $R\in SO(3)$, where

$$SO(3)=\left\{R\in\mathbb R^{3\times3}:R^{\mathsf T}R=I_{3},\ \det R=1\right\}$$

in the sense of [[def-cm-special-orthogonal-group]]. A rotation acts on spatial
column vectors by matrix multiplication; its entries are dimensionless under
the radian convention of [[def-cm01-units]]. Rotations are part of the
formulation of spatial changes of basis; the definition of $SO(3)$ itself
asserts nothing about physical space.

**(ii) Inertial frames.** An **inertial frame** is the global adapted affine
chart of the spacetime data determined by

$$o\in A,\qquad u\in V\ \text{with}\ \tau(u)=1,\qquad (e_{1},e_{2},e_{3})\ \text{an ordered,}\ g\text{-orthonormal, positively oriented basis of }K,$$

with adapted coordinates $(t,x)$ as in [[def-cm-affine-time-space]]: the time
coordinate is $t(p)=\tau(p-o)$ and the spatial coordinates are the coefficients
of $p-o-tu\in K$ in the basis $(e_{1},e_{2},e_{3})$. Existence and uniqueness
of the coordinates, and the affine structure of the slices, are the mathematical
content of [[lem-cm-adapted-coordinates-exist-and-are-unique]] and
[[def-cm-affine-time-space]]; no physical claim beyond the reading of clause
(iii) is attached to them here.

An inertial frame is a **coordinate chart**: the triple $(o,u,(e_{i}))$. It is
definitively not an observer congruence and not a time-varying basis field. In
the model the basis $(e_{i})$ is fixed once and for all; a family of bases
depending on the time coordinate is a different structure, whose kinematics is
defined separately where it is used, and is not an inertial frame. The physical
reading of the frame is that $t$ is the model's time coordinate in seconds and
$x$ the spatial position in metres, by the conventions of
[[def-cm01-units]].

**(iii) Stationary observers.** For $x_{0}\in\mathbb R^{3}$ the curve
$\alpha_{x_{0}}:\mathbb R\to A$, $\alpha_{x_{0}}(t):=o+tu+\sum_{j=1}^{3}(x_{0})_{j}e_{j}$,
is the **observer at rest in the frame at position $x_{0}$**; the family
$\{\alpha_{x_{0}}\}_{x_{0}\in\mathbb R^{3}}$ is the **stationary observer
congruence** of the frame. Each curve has $t(\alpha_{x_{0}}(s))=s$, is
$C^{\infty}$ in adapted coordinates, and in the frame's own spatial
coordinates has constant coordinate triple $x_{0}$; each is therefore a
worldline of the model in the sense of [[post-cm01-worldlines]]. Observers of
two different inertial frames are different families of curves; the congruence
is a derived object, determined by the frame and the spacetime data, not an
additional primitive.

**(iv) Allowed changes between frames.** The model adopts the class of
transformations between inertial frames

$$t'=t+b,\qquad x'=Rx+vt+a,$$

where $b\in\mathbb R$ is a **time shift** ($[b]=\tau$), $a\in\mathbb R^{3}$ a
**spatial translation** ($[a_{i}]=\ell$), $v\in\mathbb R^{3}$ a **boost
velocity** ($[v_{i}]=\ell\tau^{-1}$) and $R\in SO(3)$ a **rotation**
($[R_{ij}]=1$). Every pair of inertial frames is related by exactly one such
transformation: that two adapted charts of the same data differ by a
transformation of this form, with $R\in SO(3)$ because both bases are
positively oriented, is the mathematical transformation law proved in
[[lem-cm-adapted-charts-and-galilean-transformations]]. The kinematic
consequences of the law — the transformation of coordinate velocity and
acceleration, and the frame-independence of zero coordinate acceleration — are
proved as a statement about the model in
[[pthm-cm01-galilean-kinematics]].

**(v) Free motion is not asserted here.** The framework's dynamics enters
through the force and equation-of-motion postulates of the pages that follow;
those pages adopt, as the content of Newton's first law, that there exist
inertial frames in the sense of clause (ii) in which a particle with zero
applied interaction has zero coordinate acceleration. This postulate
introduces the frames and their changes but asserts no dynamics: it does not
state that any particular motion has zero acceleration, and it does not
privilege any one inertial frame — each of them is a legitimate arena for the
formulation of the model's equations.

**(vi) Kinematic symmetry is not conservation.** The class (iv) is a class of
coordinate changes. Nothing in this postulate implies that any momentum,
angular momentum, energy or other quantity is conserved, or that every
mechanical system's description is invariant in form; a force law must also
transform appropriately under (iv) to be a law of the model in every frame, and
an external apparatus or background field can single out frames for the
description of a concrete experiment. Conservation statements, when they hold,
are theorems of later pages with their own hypotheses, not consequences of
this postulate.

## Status and scope

- **Adopted, not deduced.** Clauses (i)-(iv) adopt the frame notion and the
  transformation class; clauses (v)-(vi) delimit what is *not* asserted. The
  mathematical transformation law between adapted charts is cited, not
  reproved, and is used only through its exact statement and hypotheses.

- **Domain of intended use.** Inertial frames are the frames of the
  non-relativistic model of [[post-cm01-spacetime]]: spatial Euclidean geometry
  and absolute time. The transformations of clause (iv) are Galilean; no
  Lorentz transformation, no boost composition law of special relativity and
  no light-speed limit appears in this model.

- **Empirical content.** The classification of an apparatus frame as inertial,
  and the adequacy of the Galilean transformation class for a concrete
  experiment, are application-level judgements with stated approximations;
  this postulate asserts no measurement and no numerical value. Agreement of
  model predictions with observations is evidence about the model, not a proof
  of these assumptions.
