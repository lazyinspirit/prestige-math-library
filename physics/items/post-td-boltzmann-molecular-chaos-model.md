---
id: post-td-boltzmann-molecular-chaos-model
kind: postulate
title: Periodic Boltzmann model with incoming molecular chaos
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
physical_scope: A single-species periodic Boltzmann kinetic model with elastic binary collision data and the stated incoming-pair molecular-chaos closure. Dilute-gas applicability is qualitative; no density threshold, hard-sphere or Boltzmann–Grad limit, or many-particle derivation is asserted.
deps: [def-td-regular-elastic-collision-model, def-td-si-quantities]
dependency_roles:
  def-td-regular-elastic-collision-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §8.10
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: Printed pp. 529–534, incoming versus outgoing factorization and the H theorem
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, Chapter 6"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: §§6.1–6.4, the Boltzmann equation and collision closure
    - title: MIT OpenCourseWare, 8.333 Statistical Mechanics I, Lecture 9
      url: https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf
      locator: §III.E, printed pp. 58–59, pre-collision factorization and its time-reversal qualification
    - title: R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem
      url: https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
      locator: Complete author-hosted HTML section read; equations (3.123)–(3.144), collision model and H-theorem context.
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Let $\Omega_{\rm per}=\prod_{i=1}^3(0,L_i)$ with opposite faces identified, let $I\subseteq\mathbb R$ be an open time interval in seconds, and let $f(x,v,t)\ge0$ be a one-particle number density for $x\in\Omega_{\rm per}$, $v\in\mathbb R^3$, and $t\in I$. With $x$ in metres and $v$ in $\mathrm{m\,s^{-1}}$, $f$ has units $\mathrm{s^3\,m^{-6}}$ relative to $d^3x\,d^3v$; its moments used below are assumed finite. For this postulate, require $f$ to be jointly measurable and periodic in $x$, with $(x,t)\mapsto f(x,v,t)$ continuously differentiable for each fixed $v$ and its derivatives jointly measurable. Require $f$, $\partial_t f$, and $v\cdot\nabla_x f$ to be locally integrable with respect to product Lebesgue measure. Periodic boundary conditions are imposed in $x$.

Adopt the incoming molecular-chaos closure: at a collision location and time, the incoming two-particle velocity density used in the collision term is $f(x,v,t)f(x,w,t)$. This is a one-sided factorization assumption; no factorization of the outgoing pair and no derivation from reversible many-particle mechanics is asserted.

For the elastic data $Q_{\rm el},\nu$ of [[def-td-regular-elastic-collision-model]], adopt a collision operator $Q_\nu(f)$, with units of $f$ per second, as a jointly measurable locally integrable representative whose velocity-wise weak action satisfies, for almost every $(x,t)$ and every measurable test function $\varphi$ for which both sides converge absolutely,
$$\int_{\mathbb R^3}\varphi(v)Q_\nu(f)(x,v,t)\,d^3v=\frac14\int_{Q_{\rm el}}\big(f(x,v',t)f(x,w',t)-f(x,v,t)f(x,w,t)\big)\big(\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')\big)\,d\nu.$$
The adopted kinetic equation is
$$\partial_t f+v\cdot\nabla_x f=Q_\nu(f),$$
as an equality of locally integrable functions almost everywhere on the product domain. These are admissibility conditions for solutions of the adopted model, not an existence assertion. The equation and weak collision identity are model postulates. This item does not assert a hard-sphere Boltzmann–Grad limit, propagation of chaos, or universal equilibration.
