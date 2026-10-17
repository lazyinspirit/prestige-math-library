---
id: def-tgr-juttner-kinetic-preparation
kind: definition
title: Defined classical Jüttner kinetic preparation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-gr-smooth-lorentzian-objects
  - def-gr-observer-and-rest-space
  - def-gr-observer-congruence-and-adapted-charts
  - def-tgr-future-mass-shell-measure
  - thm-tgr-juttner-partition-and-moments
  - def-probability-measure
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: formulation-prerequisite
  def-gr-observer-and-rest-space: formulation-prerequisite
  def-gr-observer-congruence-and-adapted-charts: formulation-prerequisite
  def-tgr-future-mass-shell-measure: mathematical-premise
  thm-tgr-juttner-partition-and-moments: mathematical-premise
  def-probability-measure: mathematical-premise
physical_scope: "One massive classical species with prescribed positive density and temperature and a chosen observer congruence; an exactly normalized model preparation, not an assertion of collisional equilibration, material validity, or quantum statistics."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "László P. Csernai, Introduction to Relativistic Heavy Ion Collisions, Chapter 2, Introduction to Relativistic Kinetic Theory"
      url: "https://www.csernai.no/Csernai-textbook.pdf"
      locator: "Full 329-page electronic textbook; §§2.4–2.4.1, printed pp. 53–54 (PDF pp. 52–53)."
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§III.C and VI.B–VI.C"
      url: "https://arxiv.org/pdf/2106.09235"
      locator: "Full 79-page PDF; the Jüttner distribution and moments in §III.C and the distinction between global and local equilibrium in §§VI.B–VI.C, PDF pp. 23–48."
---

## Definition

Let $(M,g,N_0)$ be the smooth time-oriented Lorentzian geometry of [[def-tgr-framework-units]], with signature $(-,+,+,+)$ and physical length coordinates $x^0=ct$. On an open region $O\subseteq M$, take a smooth observer congruence $u$ whose value at each event is a future unit timelike observer in the sense of [[def-gr-observer-and-rest-space]] and [[def-gr-observer-congruence-and-adapted-charts]]. The congruence is a field of observer directions, not an adapted coordinate chart or a tetrad. Let $n:O\to(0,\infty)$ be a smooth proper number density in $\mathrm{m^{-3}}$ and $T:O\to(0,\infty)$ a smooth proper-temperature scalar in kelvins. These fields are prescribed model data.

Choose one species with rest mass $m>0$ in kilograms, put $M_*:=mc^2>0$ in joules, choose $k_B>0$ in $\mathrm{J\,K^{-1}}$, and choose a reference action $h_{\rm ref}>0$ in $\mathrm{J\,s}$. At an event $x\in O$, the future massive shell $\mathcal H^+_{M_*,x}$ and its tetrad-independent measure $d\mu_{M_*}$ are those of [[def-tgr-future-mass-shell-measure]]. For each $P\in\mathcal H^+_{M_*,x}$, define the positive observer-measured energy

$$E_u(P):=-g_x(P,u_x)>0,\qquad \alpha(x):=\frac{1}{k_BT(x)}.$$

In any future orthonormal tetrad whose time axis is $u_x$, write the spatial energy-momentum coordinates as $\mathbf p\in\mathbb R^3$, so $E_u(P)=\sqrt{M_*^2+|\mathbf p|^2}$ and $d^3\mathbf p=E_u(P)\,d\mu_{M_*}(P)$. The spatial mechanical momentum is $\mathbf p/c$; $\mathbf p$ itself is the spatial part of the energy four-vector $P$.

Define

$$Z_{M_*}(\alpha):=\frac{4\pi M_*^2}{\alpha}K_2(\alpha M_*),\qquad K_j(z):=\int_0^\infty e^{-z\cosh t}\cosh(jt)\,dt\quad(j=1,2).$$

and the observer-rest momentum probability law

$$d\nu_{u,x}(\mathbf p):=Z_{M_*}(\alpha(x))^{-1}e^{-\alpha(x)E_u(P)}\,d^3\mathbf p.$$

Set

$$\beta:=\frac{u}{k_BT},\qquad \zeta:=\log\!\left(\frac{n h_{\rm ref}^3c^3}{Z_{M_*}(\alpha)}\right),\qquad f(x,P):=e^{\zeta(x)+g_x(\beta(x),P)}.$$

Finally define the model number current and stress-energy tensor by the convergent shell moments

$$J^a(x):=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H^+_{M_*,x}}P^a f(x,P)\,d\mu_{M_*}(P),\qquad \mathsf T^{ab}(x):=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H^+_{M_*,x}}P^aP^b f(x,P)\,d\mu_{M_*}(P).$$

The mathematical suppliers [[thm-tgr-juttner-partition-and-moments]] and [[def-probability-measure]] give $0<Z_{M_*}<\infty$, show that $\nu_{u,x}$ has total mass one, and evaluate the current and stress moments:

$$J^a=nu^a,\qquad \mathsf T^{ab}=(\varepsilon+p)u^au^b+pg^{ab},\qquad \varepsilon=n\left(M_*\frac{K_1(\alpha M_*)}{K_2(\alpha M_*)}+\frac3\alpha\right),\quad p=\frac n\alpha=nk_BT.$$

Here $\varepsilon$ and $p$ are the exact moments of this one-species kinetic model. They are not automatically identified with an independently adopted material state function or stress tensor. The suppliers use the stated countable-choice strength $\mathrm{AC}_\omega$ only; this definition adds no arbitrary-index choice principle. The scale $h_{\rm ref}$ is a declared phase-space unit convention, not Planck's constant or a measured parameter.

This is an exact classical model definition. It does not claim that an actual material realizes this distribution, that collisions drive it to equilibrium, that the full field $f$ solves a transport equation, or that any quantum-statistical or empirical law follows.
