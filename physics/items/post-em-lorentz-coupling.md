---
id: post-em-lorentz-coupling
kind: postulate
title: "The Lorentz coupling: external force on a test charge and the continuum force and power densities"
status: published
origin: session
domain: physics
deps: [def-cross-product-in-r3, def-em-electromagnetic-tensor, def-em-fields, def-em-relativistic-worldlines-frames, def-em-sources, lem-em-antisymmetric-tensor-contraction, post-em-minkowski-physical-model, post-sr-massive-particle-dynamics, pthm-sr-momentum-and-four-force, thm-sr-proper-time-and-observer-decomposition]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  post-em-minkowski-physical-model: formulation-prerequisite
  post-sr-massive-particle-dynamics: formulation-prerequisite
  pthm-sr-momentum-and-four-force: formulation-prerequisite
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adopted coupling of the classical framework between the electromagnetic field and matter: the covariant equation of motion of a test charge in a prescribed external field with constant charge and positive rest mass, and the continuum force and power densities for a matter model to which the coupling applies. The postulate excludes self-fields, radiation reaction, magnetic monopoles and any exact nonrelativistic law; it is a model assumption and not an experimental result."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term, 2015; 236 PDF pages)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.2 printed pp. 4-5 (PDF pp. 12-13), equations (1.2)-(1.3): the Lorentz force and force density. §5.4.1 printed pp. 115-116 (PDF pp. 123-124), equations (5.30)-(5.33): dP^mu/dtau = q F^{mu nu} U_nu, P = mU, the relativistic three-force and electric work rate. The source uses (+---); the metric and covariant tensor signs are converted to the conventions of def-em-electromagnetic-tensor"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§5.1.2 printed p. 204 (PDF p. 220), equation (5.2): F = Q[E + (v x B)], with the magnetic force law described as a fundamental axiom. §8.1.2 printed p. 346 (PDF p. 362), equation (8.6) and following paragraph: J . E is power delivered per unit volume. §8.2.2 printed p. 351 (PDF p. 367), equations (8.15)-(8.16): total electromagnetic force and force density rho E + J x B"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§17 printed pp. 46-49 (PDF pp. 58-61), especially equation (17.5) on p. 48: momentum equation for a charge in a prescribed field, with the particle's effect on that field neglected. §23 printed pp. 60-61 (PDF pp. 72-73), equation (23.4): the four-dimensional coupling. The Gaussian units, (+---) signature and field-tensor signs are converted to the framework SI and tensor conventions, with q and m as model parameters"
---

## Postulate

Adopt as physical postulates of this framework, on the spacetime and particle
model of [[post-em-minkowski-physical-model]] and
[[def-em-relativistic-worldlines-frames]] and on the special-relativity particle
model [[post-sr-massive-particle-dynamics]]:

(i) [Test charge in a prescribed external field] Let $q\in\mathbb R$ be a
constant charge parameter ([[def-em-sources]]), $m>0$ an externally supplied
rest mass, $x:J\to A$ a future timelike $C^2$ massive worldline with
four-velocity $U$, and let $F$ be a prescribed field of
[[def-em-electromagnetic-tensor]] that is $C^1$ on a neighbourhood of the graph
of $x$ and is generated externally to the particle. Adopt the equation of
motion

$$m\,\frac{dU}{d\tau}=q\,\Phi(U),$$

where, at each original parameter $s\in J$, $\Phi=\Phi_{x(s)}$ is the
raised-index operator of the field at $x(s)$, defined by
$\eta(\Phi_{x(s)}(u),w)=F(x(s))(w,u)$
([[lem-em-antisymmetric-tensor-contraction]]); equivalently
$m\,dU^\mu/d\tau=q\,F^{\mu\nu}U_\nu$. Here $dU/d\tau$ is the derivative of $U$
with respect to its proper-time function $\tau(s)$: explicitly
$dU/d\tau=U'(s)/\tau'(s)$, with
$\tau'(s)=c^{-1}\sqrt{-\eta(x'(s),x'(s))}>0$. It is the four-acceleration of the worldline
([[def-em-relativistic-worldlines-frames]],
[[thm-sr-proper-time-and-observer-decomposition]]). The particle's own field
is excluded from $F$: this is the external-field coupling, and it defines no
self-force.

(ii) [Continuum matter coupling] For a smooth source $(\rho,J)$ of
[[def-em-sources]] interacting with the field through an explicitly stated
matter model to which this coupling applies, adopt the force density
$\rho E+J\times B$ (unit N m$^{-3}$) and the power density $J\cdot E$ (unit
W m$^{-3}$) as the electromagnetic source terms of that matter model, with the
spatial cross product of [[def-cross-product-in-r3]]; they describe the local
interaction of the field with matter and are not a property of a prescribed
current alone.

(iii) [Scope] The rest mass and the charge are inputs; $m$ is not derived within
electromagnetism. The coupling is adopted for constant $q$ and $m>0$; no
magnetic-monopole coupling, no radiation reaction and no self-force are
included. In particular the nonrelativistic coordinate statement
$mr''=q(E+r'\times B)$ is not adopted as exact: the adopted statement is the
covariant one of clause (i), and any low-speed statement requires its own
approximation hypotheses and error bounds.
