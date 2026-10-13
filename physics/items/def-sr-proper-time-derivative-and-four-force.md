---
id: def-sr-proper-time-derivative-and-four-force
kind: definition
title: "Proper-time derivative of a vector field along a worldline and the four-force notation"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-affine-minkowski-model
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - lem-sr-proper-time-parametrization
  - def-sr-four-velocity-and-four-acceleration
  - def-vector-valued-derivative-and-integral
  - thm-chain-rule
  - def-derivative
  - def-interval
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
dependency_level: 11
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
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.4 p. 96 (four-vector momentum p = m v with gamma absorbed into the normalisation of the velocity vector; v is the derivative of position with respect to proper time) and Section 4.5.1 p. 103 (F = m a = dp/d tau; the definition works only for massive particles)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equation (1.102) (force four-vector f^mu = dp^mu/d tau)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Throughout, $c>0$ and $(A,V,\eta,C^+)$ is the oriented time-oriented affine
Minkowski model of [[def-sr-affine-minkowski-model]], with displacement space
$V$; $I\subseteq\mathbb R$ is an interval with at least two elements
([[def-interval]]) and $x:I\to A$ is a $C^1$ future timelike worldline
([[def-sr-regular-causal-curve-and-worldline]]) with proper-time function
$\tau:I\to J$ and inverse $\rho:J\to I$
([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]). By that
lemma $\tau$ is $C^1$ with

$$\tau'(s)=\frac{1}{c}\sqrt{-\eta(x'(s),x'(s))}>0 \qquad (s\in I),$$

$\tau$ is strictly increasing, $J=\tau[I]$ is an interval with at least two
elements, and $\rho:J\to I$ is $C^1$ with $\rho'(\tau(s))=1/\tau'(s)>0$ for
every $s\in I$.

**(a) The proper-time derivative.** Let $P:I\to V$ be a $C^1$ map, its
derivative $P'$ being the derivative of a $V$-valued function of one real
variable, read componentwise in any ordered basis of $V$
([[def-vector-valued-derivative-and-integral]]). The **proper-time
derivative of $P$** is the map $\dot P:I\to V$ defined by

$$\dot P(s):=\frac{P'(s)}{\tau'(s)} .$$

This is well defined because $\tau'(s)>0$ for every $s\in I$, so the scalar
division by $\tau'(s)$ is a legitimate vector-space operation on $V$. The
definition does not depend on the basis of $V$ in which $P'$ is read: a change
of basis acts on the coordinates of $P'(s)$, and hence on those of
$\dot P(s)$, by the same constant invertible linear map, which commutes with
multiplication by the scalar $1/\tau'(s)$. Since $P'$ and $1/\tau'$ are
continuous, $\dot P$ is continuous; equivalently, the proper-time derivative of
a $C^1$ field is a continuous field.

**The proper-time reading.** Since $\tau$ is a strictly increasing bijection
$I\to J$ with inverse $\rho$, one has $\rho(\tau(s))=s$ and therefore
$(P\circ\rho)\circ\tau=P$ on $I$. Fix $s\in I$; the components of $P$ in a
basis of $V$ are differentiable at $s$ and $\rho$ is differentiable at
$\tau(s)$, so the scalar chain rule ([[thm-chain-rule]]) applied to each
component of $P\circ\rho$ gives

$$P'(s)=(P\circ\rho)'(\tau(s))\,\tau'(s), \qquad\text{equivalently}\qquad \dot P(s)=(P\circ\rho)'(\tau(s)) .$$

At an endpoint of $I$ this is the one-sided reading of the derivative, as in
[[def-vector-valued-derivative-and-integral]]. Thus $\dot P$ is exactly the
derivative with respect to the proper-time parameter of the field $P$ read
along the parametrisation $s\mapsto\tau(s)$; for every $u\in J$ the chain rule
on $J$ gives $(P\circ\rho)'(u)=P'(\rho(u))\rho'(u)=\dot P(\rho(u))$.

**(b) The four-force notation.** Let $m>0$ be constant and suppose the
four-velocity $U:I\to V$ of $x$ is $C^1$
([[def-sr-four-velocity-and-four-acceleration]]); by that definition $U$ is
always continuous, and $U$ is $C^1$ whenever the worldline $x$ is $C^2$. Then
$P:=mU$ is a $C^1$ map $I\to V$ and $F:=\dot P$ is called the **four-force**
on the particle. In an inertial frame the components of $F$ are the
derivatives of the components of the four-momentum with respect to the
proper-time parameter: writing $P^a(u)$ for the components of $P$ as a
function of the proper-time parameter $u=\tau(s)$, one has
$F^a(s)=\frac{d}{du}P^a(u)\big|_{u=\tau(s)}$.

**(c) Scope.** This item introduces a derivative and a name only. It asserts no
force law, no field equation, no equation of motion and no existence or
uniqueness of solutions of any equation of motion; in particular the
hypothesis that $U$ be $C^1$ is a regularity hypothesis on the given
worldline, not a dynamical statement. The identities satisfied by $F$ for a
stipulated four-momentum field are proved in
[[lem-sr-four-force-and-work-energy-identities]], and a physical force law
requires the separate model premise [[post-sr-massive-particle-dynamics]].
The names four-momentum and four-force, and the units in which the components
of $P$ and $F$ are measured, belong to the framework's coordinate and unit
conventions ([[def-sr-si-units-and-coordinate-conventions]]); the
mathematical content asserted here is the derivative construction (a) and the
notation (b) alone. No choice principle is used.
