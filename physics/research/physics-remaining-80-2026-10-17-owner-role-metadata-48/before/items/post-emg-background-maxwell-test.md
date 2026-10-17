---
id: post-emg-background-maxwell-test
kind: postulate
title: Separately adopted fixed-background Maxwell and charged probes
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emg-matter-observables
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - lem-emg-controlled-maxwell-wkb
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: formulation-prerequisite
  lem-emg-controlled-maxwell-wkb: mathematical-premise
physical_scope: "A separately adopted classical test model on a prescribed smooth Lorentzian metric: smooth source-free or prescribed-source Maxwell fields and massive charged probes on finite local-potential worldline segments. The metric and field are fixed inputs; no Einstein equation is imposed on them, no probe self-field or self-gravity is evaluated, and no small-backreaction limit, global potential, global trajectory, or empirical validity is asserted. Geometric-optics use is limited to the exact finite-order phase, amplitude, constraint, and compact-region bounds in the listed mathematical supplier."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.9)–(6.10), PDF pp. 61–63, state the prescribed charged-particle Lorentz equation in curved spacetime; equations (6.12)–(6.14), PDF pp. 63–64, derive null geometric-optics rays. Source normalization is not imported."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), complete 162-page review"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "§18.1, equations (18.3)–(18.10), PDF pp. 96–98, gives the proper-time action, Maxwell source and Lorentz-force equation for a point electric charge; the authors explicitly state that its self-field is singular on the worldline and the equation is only formal until that issue is treated. This item adopts an external smooth field and does not import a self-force result."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes (2019)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "§1.2.3, equation (1.20), PDF pp. 23–24, presents the charged-particle action in an electromagnetic potential; §1.2.4, PDF pp. 25–26, places test-particle motion in a curved metric. The notes use their own units and signs; the present action and local SI conventions are those of the exact listed suppliers."
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), complete 38-page article"
      url: https://arxiv.org/pdf/1808.06203v2
      locator: "§§3.1–3.3, PDF pp. 10–13, and Appendix A, PDF pp. 33–34, discuss the curved-background Maxwell potential ansatz, transport and gauge constraints, polarization, and the gauge-gradient residual after truncation. This item adopts only the finite-order scope stated by its mathematical supplier."
verification:
  precheck: n/a
---

## Postulate

On an open region of the oriented, time-oriented Lorentzian spacetime and length-coordinate SI conventions of [[def-emg-matter-observables]], adopt a prescribed-background Maxwell model. The metric $g$ is fixed input. Choose a real $C^2$ electromagnetic two-form $F$ and either adopt the source-free equations $dF=0$ and $d(\star_gF)=0$, or supply a $C^1$ current $j$ and adopt $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, with the exact signs and units of that definition. The source current is prescribed independently of the probe; this postulate does not impose an Einstein equation, matter evolution equation, or field equation for the sources on the unchanged metric.

For a massive charged probe, use the adopted local action and finite-curve conditions of [[post-rpm-external-charge-action]]: $m>0$ and $q$ are constant, the path is a $C^2$ future-directed timelike segment parameterized by proper time, and its endpoints are fixed in variations supported in a local potential domain $V$ with a supplied $C^2$ one-form $A$ satisfying $dA=F$. The potential and metric are external data independent of the path. Under the exact hypotheses of [[pthm-rpm-external-charge-action-equivalence]], action stationarity is equivalent to $m\nabla_UU=qF^\sharp(U)$; that theorem's $\mathrm{AC}_\omega$ assumption is inherited only when this equivalent force-law formulation is used. No global potential or trajectory is included.

The probe's own singular field and self-gravity are excluded. No radiation reaction, variable mass or charge, finite-body model, or backreaction estimate is adopted. In particular, calling $g$ or $F$ a test background records this model's omission of their response; it does not claim that the unchanged pair solves the coupled Einstein–Maxwell equations or is close to a coupled solution.

When geometric optics is invoked, it is restricted to the exact $C^4$ real phase, $C^3$ complex amplitudes, four pointwise ansatz constraints, and fixed compact-chart coefficient bounds of [[lem-emg-controlled-maxwell-wkb]]. That result supplies finite residual and leading-field estimates, local null rays, and a polarization quotient; it supplies no convergent series, global transport through caustics, exact-solution error estimate, or backreaction theorem.

This is a separately adopted physical model with no empirical premise. The Maxwell and probe assumptions are not deductions from one another, from mathematical axioms, or from source authority.
