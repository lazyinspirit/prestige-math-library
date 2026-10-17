---
id: def-emg-charged-dust-model
kind: definition
title: "Restricted smooth charged-dust model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emg-geometry-units
  - pthm-rpm-external-charge-action-equivalence
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  pthm-rpm-external-charge-action-equivalence: formulation-prerequisite
physical_scope: >
  A restricted smooth continuum model with constant mass and charge
  parameters, positive proper number density, unit-normalized timelike
  velocity, number continuity, and the adopted Lorentz-force equation.
  It excludes caustics, singular particles and any coupled PDE existence claim.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.2–4.5.4, PDF pp. 190–195 (printed pp. 183–188), Hilbert stress and continuum matter examples; the local dust closure and its validity limits are stated here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147, matter stress and diffeomorphism context; no dust action is inferred."
---

## Definition

Let $U$ be an open subset of the smooth oriented, time-oriented Lorentzian
four-manifold and use the metric, units, and electromagnetic conventions of
[[def-emg-geometry-units]]. A restricted smooth charged-dust configuration
consists of constants $m>0$ in kilograms and $q\in\mathbb R$ in coulombs, a
smooth future-directed vector field $U^a$ with $g_{ab}U^aU^b=-c^2$, and a
smooth scalar field $\nu:U\to(0,\infty)$. Put $u^a:=U^a/c$, so
$g_{ab}u^au^b=-1$, and at each $x\in U$ define its local rest space by
$H_x:=\{v\in T_xM:g_x(v,u_x)=0\}$. The restriction $\gamma_x:=g_x|_{H_x}$
is a positive-definite inner product. In any basis $(e_1,e_2,e_3)$ of $H_x$
with linear coordinates $(y^1,y^2,y^3)$, its proper 3-volume density is
$dV_{\mathrm{rest}}=\sqrt{\det(\gamma_x(e_i,e_j))}\,|dy^1dy^2dy^3|$;
this density is independent of the chosen basis. The scalar $\nu(x)$ is the
proper number density measured in this rest space: the local particle-number
measure has density $\nu\,dV_{\mathrm{rest}}$. Thus $[\nu]=\mathrm{m^{-3}}$.
Define the rest-space projector $h^a{}_b=\delta^a{}_b+U^aU_b/c^2$.
The associated four-current and matter stress tensor are

$$j^a:=q\nu U^a,\qquad T_m^{ab}:=m\nu U^aU^b.$$

Their length-coordinate SI units are $[U^a]=\mathrm{m\,s^{-1}}$,
$[j^a]=\mathrm{A\,m^{-2}}$, and $[T_m^{ab}]=\mathrm{J\,m^{-3}}$. The
single-velocity condition means that at every event in the model domain all
dust matter there is assigned the same vector $U_x$; a state with distinct
future unit timelike velocities at one event is outside this model. In this
item, a caustic or multistream breakdown is a point where the material
description can no longer be represented by smooth fields $\nu,U$ with
$0<\nu<\infty$ and one such velocity. The model domain is restricted to open
regions excluding those breakdown points. This is a scope convention, not a
claim that caustics are avoided or that the fields exist globally. As the
continuum closure of this model, adopt on the smooth solution domain

$$\nabla_a(\nu U^a)=0,\qquad m\nabla_UU=qF^\sharp(U),$$

where $\nabla_UU^a:=U^b\nabla_bU^a$ and
$g(F^\sharp(v),w)=F(w,v)$, as in the external-charge convention of
[[pthm-rpm-external-charge-action-equivalence]]. The latter supplies
test-body sign and normalization context only; it proves neither the
continuum number equation nor a continuum or coupled PDE evolution law.

This definition applies only while $\nu,U,F,g$ remain smooth and the
single-velocity dust description is valid. It makes no claim that such
solutions exist globally or avoid caustics, and it does not assign a
distributional stress tensor to point particles.

