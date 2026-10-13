---
id: def-sr-observed-energy-momentum-and-kinetic-energy
kind: definition
title: "Observer energy, spatial momentum, invariant mass, rest energy and kinetic energy of a four-momentum"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-rational-power
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-rational-power: mathematical-premise
dependency_level: 12
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.1 pp. 88-89 (energy-momentum four-vector, invariant m^2 = E^2 - p^2, rest energy)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.98)-(1.102) (p^mu = m U^mu, energy as the time component, rest frame E = m c^2)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64, equations (6.17)-(6.19) (P^a = m u^a, g(P,P) = -m^2, observer energy -g(v,P))"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Definition

Throughout, $(A,V,\eta,C^+)$ is the oriented time-oriented affine Minkowski
model of [[def-sr-affine-minkowski-model]], $c>0$, and $n\in V$ is future unit
timelike, $\eta(n,n)=-1$ ([[def-lorentz-form-and-inertia]],
[[def-time-orientation-and-future-causal-sets]]). Write
$n^\perp=\{v\in V:\eta(n,v)=0\}$ for the rest space of $n$,
$h(v):=v+\eta(n,v)n$ for the rest
projection and $|w|:=\sqrt{\eta(w,w)}$ for the norm on $n^\perp$
([[thm-sr-proper-time-and-observer-decomposition]]\,(c)); recall from that
clause that $h$ is linear with image $n^\perp$ and kernel $\mathrm{span}(n)$,
that $V=\mathrm{span}(n)\oplus n^\perp$, and that the restriction of $\eta$ to
$n^\perp$ is positive definite.

**(a) Observer energy, spatial momentum and invariant mass.** For every $P$ in
the future closed cone $\mathrm{cl}(C^+)$ define

$$E_n(P):=-c\,\eta(P,n), \qquad q_n(P):=h(P),$$

and, when $P$ is nonzero future causal, define the **invariant mass** of $P$ by

$$m(P):=\frac{\sqrt{-\eta(P,P)}}{c} .$$

Then $q_n(P)\in n^\perp$, $\eta(n,P)=-E_n(P)/c$, and

$$P=\frac{E_n(P)}{c}\,n+q_n(P)$$

is the unique decomposition of $P$ as a real multiple of $n$ plus a vector of
$n^\perp$: a vector $P$ has $P=\lambda n+w$ with $\lambda\in\mathbb R$ and
$w\in n^\perp$ if and only if $\lambda=E_n(P)/c$ and $w=q_n(P)$. Equivalently,
$E_n(P)$ and $q_n(P)$ are the unique pair consisting of a real number and a
vector of $n^\perp$ with that property. The pair $(E_n,q_n)$ is the
restriction to $\mathrm{cl}(C^+)$ of the pair of linear maps
$P\mapsto -c\,\eta(P,n)$ and $P\mapsto h(P)$ on $V$. For future null $P$ the
formula for $m(P)$ gives $m(P)=0$, because $\eta(P,P)=0$.

**(b) Rest-mass parameter, rest energy and kinetic energy.** Let $m>0$ and let
$P=mU$ with $U$ future timelike and $\eta(U,U)=-c^2$, the four-velocity
normalisation of [[def-sr-four-velocity-and-four-acceleration]]. Then call $m$
the **rest-mass parameter** of $P$ as written, $mc^2$ its **rest energy**, and

$$T_n(P):=E_n(P)-mc^2$$

its **kinetic energy** relative to the observer $n$. Bilinearity gives
$\eta(P,P)=m^2\eta(U,U)=-m^2c^2$, so $m=m(P)>0$ is determined by $P$.
Thus $T_n(P)=E_n(P)-m(P)c^2$ is a function of $(P,n)$ on the future
timelike cone; recording $m$ supplies no independent parameter.

**(c) No positivity, inequality or measurement claim.** This definition claims
no positivity of $E_n$, no inequality or vanishing property of $T_n$, and no
physical measurement. The names observer energy, spatial momentum, invariant
mass, rest energy and kinetic energy, and the units joule, kilogram metre per
second and kilogram, belong to the unit conventions of
[[def-sr-si-units-and-coordinate-conventions]] and to the physical postulates
of this framework; the mathematical content asserted here is only the explicit
dependence of the five quantities on $P$, $n$ and $m$.

**(d) What the objects depend on.** $E_n$ and $q_n$ are functions of the pair
$(P,n)$: $q_n(P)$ is an element of the vector space $V$, not a coordinate
triple, and no basis of $V$ enters its definition, while
$E_n(P)=-c\,\eta(P,n)$ uses the Lorentz form alone. $m(P)$ depends on the
scalar $\eta(P,P)$ alone and hence on no observer and no basis; $T_n(P)$
uses the rest mass $m=m(P)$ fixed by that scalar. No choice principle is
used.
