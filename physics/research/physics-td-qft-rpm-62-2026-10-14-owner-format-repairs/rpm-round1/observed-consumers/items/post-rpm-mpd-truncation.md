---
id: post-rpm-mpd-truncation
kind: postulate
title: Pole-dipole and closed multipole test-body models
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-countable-choice
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-timelike-worldline-and-proper-time
  - def-rpm-body-moments
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-rpm-body-moments: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 3, equations (14)-(16), for the pole-dipole force/spin system and the need for an SSC; the quadrupole extension below is an explicit adopted closure convention.
physical_scope: "Adopted neutral pole-dipole and explicitly closed multipole test-body truncations on a prescribed smooth Lorentzian background. They exclude self-gravity, self-force, arbitrary stress-integral derivation, and any unqualified error or convergence theorem."
---

## Postulate

Assume Countable Choice as inherited from [[def-rpm-body-moments]]. For a neutral test body, let $z:I\to M$ be a $C^2$ future timelike curve parametrized by proper time, let $U=dz/d\tau$, and let $p^a$ and $S^{ab}=-S^{ba}$ be the momentum and spin moments of [[def-rpm-body-moments]]. Adopt the pole-dipole evolution equations
$$D_\tau p^a=-\frac12 R^a{}_{bcd}U^bS^{cd},\qquad D_\tau S^{ab}=p^aU^b-p^bU^a.$$
A spin-supplementary condition (SSC) is an additional equation $S^{ab}n_b=0$ for a specified future unit timelike field $n$ along $z$; this postulate does not select one SSC, and $p$ is an independently evolved moment rather than a primitive assumption $p=mU$.

For a retained quadrupole or higher-multipole model, adopt
$$D_\tau p^a=-\frac12 R^a{}_{bcd}U^bS^{cd}+f_{\rm extra}^a,\qquad D_\tau S^{ab}=p^aU^b-p^bU^a+N_{\rm extra}^{ab},$$
where $f_{\rm extra}$ is a specified smooth force map along the state and $N_{\rm extra}^{ab}=-N_{\rm extra}^{ba}$ is a specified smooth torque map. A quadrupole convention that may be adopted is
$$f_{\rm quad}^a=-\frac16J^{bcde}\nabla^aR_{bcde},\qquad N_{\rm quad}^{ab}=\frac43R^{[a}{}_{cde}J^{b]cde},$$
with $J^{bcde}$ satisfying the algebraic symmetries of the curvature tensor, carrying units $\mathrm{kg\,m^4\,s^{-2}}$, and brackets including the factor $1/2$. Any evolved $J$ or higher moment needs its own transport or constitutive law; without it the multipole equations are not a closed initial-value model.

The pole-dipole and multipole equations are adopted finite-dimensional truncations, not derivations from the moment integrals above. Their use as approximations for a material body is restricted to regimes in which its size is small compared with the relevant curvature and background-variation lengths and omitted moment effects are negligible on the stated finite interval. These conditions are qualitative applicability assumptions here: this postulate supplies no uniform error bound, no convergence of truncations, and no global existence claim. No experimental result or measurement is asserted.

## Physical scope

The pole-dipole clause is neutral and test-body only. The optional multipole clause applies only when every extra force, torque, and evolved moment has explicit smooth constitutive data. No electric or magnetic dipole force is included in the BMT translation model, and no radiation reaction, self-force, singular-field evaluation, or quantum-spin claim is included.
