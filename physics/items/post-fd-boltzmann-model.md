---
id: post-fd-boltzmann-model
kind: postulate
title: Single-species elastic Boltzmann model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
physical_scope: >-
  Adopted nonrelativistic, single-species, monatomic kinetic model in a
  three-dimensional periodic cell with elastic binary collision data and an
  incoming-pair factorization. Dilute-gas applicability is qualitative; no
  density threshold, hard-sphere or Boltzmann–Grad limit, many-particle
  derivation, existence assertion, or empirical validity is claimed.
deps:
  - def-fd-elastic-collision-measure
dependency_roles:
  def-fd-elastic-collision-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 8"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/b8c07404633cdba3217e434ac06569ad_MIT8_333F13_Lec8.pdf"
      locator: >-
        Section III.D, printed pp. 49–54; dilute-gas BBGKY scaling and the
        discussion of pair correlations during short-range collisions. This is
        contextual material, not a derivation of the specific one-sided weak
        collision operator adopted here.
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: >-
        Sections 2.2.1–2.2.3: equations (2.21)–(2.24), printed pp. 22–23,
        use incoming-pair factorization and identify its before/after
        asymmetry; the later derivation in §2.2.3, printed pp. 31–32, assumes
        factorization both before and after a collision. Only the former is
        the one-sided closure adopted here.
verification:
  precheck: pending
  sources_checked:
    date: 2026-10-23
    scope: Completed native formulation/status, source-evidence and applicability review; exact evidence and reading limits in research/fluid-dynamics-all-47-2026-10-23-publication.json. No new retrieval, measurement or solution is claimed.
    by: owner-authorized native reviewers (gpt-6.1-sol)
---

## Postulate

Let $\Omega=\prod_{j=1}^3(0,L_j)$, with $L_j>0$ measured in metres and opposite faces identified, and let $I\subseteq\mathbb R$ be an open time interval measured in seconds. The primitive state variable $f$ is a one-particle number-density field $f:I\times\Omega\times\mathbb R^3\to[0,\infty)$, measurable for the product Lebesgue sigma-algebra and periodic in $x$, where $x$ is in metres and velocity $v$ is in metres per second; $f\,d^3x\,d^3v$ counts particles, so $f$ has units $\mathrm{s^3\,m^{-6}}$. For solutions, require $f$ and its weak time and spatial derivatives $\partial_t f$ and $\nabla_x f$ to be represented locally by integrable functions, so $f$, $\partial_t f$, and $v\cdot\nabla_x f$ are integrable on every compact subset of the product domain. Only translational kinetic energy $m|v|^2/2$ is modeled; no internal molecular modes are included. The single-particle mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per kelvin are primitive fixed parameters of this formulation; neither is derived from the collision equation.

An elastic collision quadruple is $(v,w,v',w')\in(\mathbb R^3)^4$ satisfying $v+w=v'+w'$ and $|v|^2+|w|^2=|v'|^2+|w'|^2$; write $Q_{\rm el}$ for this closed set and give it the Borel sets inherited from $(\mathbb R^3)^4$. A collision-rate measure is a function $\nu$ on those sets with $\nu(\varnothing)=0$, values in $[0,\infty]$, and $\nu(\bigcup_n E_n)=\sum_n\nu(E_n)$ for pairwise disjoint measurable $E_n$. This nonnegative countably additive $\nu$ is a primitive collision-rate input, invariant under each particle swap and under interchanging incoming and outgoing pairs, with rate normalization chosen so the collision operator has units of $f$ per second. For the collision equation, restrict each velocity section $f(x,\cdot,t)$ to the collision domain $\mathcal D_\nu$ of positive finite-valued measurable densities; a nonnegative ambient state outside $\mathcal D_\nu$ is not assigned a collision operator by this postulate.

Adopt one-sided incoming molecular chaos: for each directed elastic collision, at each collision point and time, the incoming two-particle velocity density used by the collision term is $f(x,v,t)f(x,w,t)$. In the gain term, the product of the densities at $(v',w')$ applies the same assumption to the reversed collision, for which $(v',w')$ is the incoming pair; this uses the adopted invariance of $\nu$ under interchange of incoming and outgoing pairs. No separate factorization of the outgoing pair of a fixed forward collision is imposed, and no derivation from reversible many-particle mechanics or propagation of chaos is asserted.

For $A=f(x,v,t)f(x,w,t)$ and $B=f(x,v',t)f(x,w',t)$, adopt a collision operator $Q_\nu(f)$, with a jointly measurable locally integrable representative, whose weak action for every compact smooth velocity test and every moment or logarithmic test for which both sides converge absolutely is

$$\int_{\mathbb R^3}\psi(v)Q_\nu(f)(x,v,t)\,d^3v=\frac14\int_{Q_{\rm el}}(B-A)\bigl(\psi(v)+\psi(w)-\psi(v')-\psi(w')\bigr)\,d\nu.$$

The adopted kinetic equation is

$$\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$$

as an equality of locally integrable functions almost everywhere. These equations and the incoming factorization are physical model postulates, not deductions. This item asserts no empirical measurement, universal dilute-gas threshold, or solution existence.

## Postulate references

Current draft mathematical definition of the elastic collision-rate measure and weak operator: [[def-fd-elastic-collision-measure|elastic collision measure and weak operator]].

[MIT OpenCourseWare 8.333, Lecture 8, §III.D (dilute-gas BBGKY scaling and short-range collision correlations; contextual material)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/b8c07404633cdba3217e434ac06569ad_MIT8_333F13_Lec8.pdf)

[David Tong, Lectures on Kinetic Theory, §§2.2.1–2.2.3 (incoming-only factorization in equations (2.21)–(2.24), printed pp. 22–23; compare the later before-and-after factorization, printed pp. 31–32)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)
