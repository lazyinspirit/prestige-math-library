---
id: def-cm02-newtonian-flow
kind: definition
title: "The associated first-order system, motions, maximal motions and the Newtonian flow of a force model"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [post-cm02-force-superposition, post-cm01-worldlines, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-maximal-ode-solution, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Vocabulary of the force branch: the state space of positions and velocities, the inverse-mass operator, the associated first-order system of the second-order equation of motion, motions as its solutions, initial data, the maximal motion and its maximal interval, and the Newtonian flow map. The item defines objects only; it asserts no force law beyond the cited postulate, no regularity of the flow beyond what the cited existence theorems provide, and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.1 and Corollary 2.15: first-order systems, unique maximal solutions and their domains, used here through the cited mathematical items"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 7.1.1, printed page 143 (PDF page 146): Newtonian dynamics recast as a first-order system with the local existence and uniqueness theorem stated"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the second-order Newtonian system in an inertial frame"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Definition

Let a force model of [[post-cm02-force-superposition]] be given: time window
$I_{0}\subseteq\mathbb R$ nondegenerate and open, configuration domain
$Q\subseteq\mathbb R^{3N}$ open ([[def-cm01-configuration]] clause (a)),
fixed masses $m_{1},\dots,m_{N}>0$ ([[post-cm01-worldlines]] clause (v)), and a
force map $F$ with the standing continuity and state-local-Lipschitz
hypotheses of clause (iii) of that postulate.

**(a) State domain and inverse-mass operator.** The **state domain** of the
model is

$$D:=I_{0}\times Q\times(\mathbb R^{3})^{N}\subseteq\mathbb R\times\mathbb R^{3N}\times\mathbb R^{3N},$$

an open subset of $\mathbb R\times\mathbb R^{6N}$; a point $(t,x,v)\in D$ is a
time together with the **state** $z=(x,v)$ of positions $x\in Q$ and coordinate
velocities $v\in(\mathbb R^{3})^{N}$ of the labels ([[def-cm01-velocity-acceleration]],
[[def-cm01-units]]). The **inverse-mass operator** is the linear map

$$\mathsf M^{-1}:\mathbb R^{3N}\to\mathbb R^{3N},\qquad \mathsf M^{-1}(u_{1},\dots,u_{N}):=\Bigl(\frac{u_{1}}{m_{1}},\dots,\frac{u_{N}}{m_{N}}\Bigr),$$

the inverse of the mass operator $\mathsf M$ of clause (d) of
[[def-cm01-configuration]].

**(b) Associated first-order system.** The **associated first-order field** of
the model is

$$\mathcal F:D\longrightarrow\mathbb R^{3N}\times\mathbb R^{3N},\qquad \mathcal F(t,x,v):=\Bigl(v,\ \mathsf M^{-1}F(t,x,v)\Bigr),$$

and the **associated first-order system** is $z'=\mathcal F(t,z)$ on the open
domain $D$, in the sense of
[[def-first-order-ode-initial-value-problem-and-solution]]; here
$z=(x,v)\in\mathbb R^{6N}$. The map $\mathcal F$ satisfies the
Picard–Lindelöf hypotheses of
[[thm-picard-lindelof-local-existence-and-uniqueness]]: it is continuous on
$D$, and it is locally Lipschitz in the state variable $z$ locally uniformly
in time, because its first component $z\mapsto v$ is linear and its second is
the composition of the force map $F$ — which is locally Lipschitz in $(x,v)$
locally uniformly in time by [[post-cm02-force-superposition]] clause (iii) —
with the linear map $\mathsf M^{-1}$.

**(c) Motions.** Let $J\subseteq\mathbb R$ be an interval with nonempty
interior, endpoints read with one-sided derivatives as in
[[def-first-order-ode-initial-value-problem-and-solution]]. A **motion** of
the model on $J$ is a curve $x:J\to Q$ of class $C^{2}$ such that
$t\in I_{0}$ for every $t\in J$ and

$$m_{i}\,\ddot x_{i}(t)=F_{i}\bigl(t,x(t),\dot x(t)\bigr)\qquad(i=1,\dots,N,\ t\in J).$$

Equivalently: the state curve $z=(x,\dot x):J\to Q\times\mathbb R^{3N}$ is a solution of the
associated first-order system on $J$. Indeed, if $x$ is a motion then
$z=(x,x')$ is $C^{1}$ with
$z'=(x',x'')=(x',\mathsf M^{-1}F(t,x,x'))=\mathcal F(t,z)$ and $(t,z(t))\in D$;
conversely, if $z=(x,v)$ is a solution with $(t,z(t))\in D$ for all $t$, then
$x'=v$ and $v'=\mathsf M^{-1}F(t,x,v)$, so $v$ is $C^{1}$, $x$ is $C^{2}$, and
multiplying the second equation by the masses returns the displayed
second-order equation. Motions of the labels of the model are exactly these
curves by [[post-cm02-force-superposition]] clause (iv).

**(d) Initial data and maximal motion.** An **initial datum** of the model is
a triple $(t_{0},x_{0},v_{0})$ with $t_{0}\in I_{0}$, $x_{0}\in Q$ and
$v_{0}\in(\mathbb R^{3})^{N}$; write $z_{0}:=(x_{0},v_{0})$. A **maximal
motion** with this datum is a motion $x:J_{\max}\to Q$ with $x(t_{0})=x_{0}$
and $\dot x(t_{0})=v_{0}$ that has no extension to a motion of the model on a
strictly larger interval. By the Picard–Lindelöf hypotheses verified in (b)
and the maximal-solution theorem
[[thm-existence-and-uniqueness-of-a-maximal-ode-solution]] (with
[[def-maximal-ode-solution]]): every initial datum has exactly one maximal
motion, its **maximal interval** $J_{\max}$ is an open interval containing
$t_{0}$ and contained in $I_{0}$, and every motion with the same datum is the
restriction of the maximal one. The restriction statement transfers from the
associated first-order system to motions through the equivalence in (c).

**(e) Newtonian flow.** The **Newtonian flow** of the model is the map

$$\Phi:\Omega\longrightarrow Q\times\mathbb R^{3N},\qquad \Omega:=\bigl\{(t,t_{0},z_{0}):t_{0}\in I_{0},\ z_{0}\in Q\times\mathbb R^{3N},\ t\in J_{\max}(t_{0},z_{0})\bigr\},$$

defined by $\Phi(t;t_{0},z_{0}):=z(t)$, where $t\mapsto z(t)=(x(t),\dot x(t))$
is the state curve of the maximal motion with datum $(t_{0},z_{0})$. By (d) the
assignment is well defined: the maximal motion is unique, so $\Phi$ is a
function on $\Omega$ and not merely a relation. For fixed $t_{0}$ and $z_{0}$
the curve $t\mapsto\Phi(t;t_{0},z_{0})$ is defined exactly on the maximal
interval $J_{\max}(t_{0},z_{0})$.

## Remarks

- **The flow is a solution family, not a completeness claim.** Whether
  $J_{\max}(t_{0},z_{0})$ is all of $I_{0}$ is a property of the particular
  force map and datum, not part of this definition; the criterion for a finite
  endpoint is the subject of [[pthm-cm02-continuation]].

- **Regularity of the flow is a separate question.** This definition asserts
  no continuity, differentiability or measurability of $\Phi$ in any variable;
  such statements would be separate results with their own hypotheses on the
  differentiability of $F$.

- **Frame covariance.** A motion in the sense of (c) is defined with respect
  to one fixed inertial frame; the transformation of the description between
  inertial frames and of the force map is clause (vi) of
  [[post-cm02-force-superposition]], and under $t'=t+b$ the maximal interval becomes $J_{\max}+b$.
  Maximality is preserved on the transferred domain: any proper extension
  there would pull back by the inverse affine transformation to a proper
  extension of the original motion.
