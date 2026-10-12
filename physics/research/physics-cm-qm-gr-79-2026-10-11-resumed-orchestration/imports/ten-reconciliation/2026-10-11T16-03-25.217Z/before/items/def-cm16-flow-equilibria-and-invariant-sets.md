---
id: def-cm16-flow-equilibria-and-invariant-sets
kind: definition
title: "The model vocabulary of stability and chaos: the associated flow of a declared force model, equilibria, periodic and homoclinic orbits, and invariant sets"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [post-cm02-force-superposition,
       def-cm02-newtonian-flow,
       def-cm-local-flow-of-an-autonomous-system,
       lem-cm-local-flow-composition-law,
       cor-cm-flow-domain-open-and-flow-is-c1,
       def-cm01-units,
       def-cm01-configuration,
       post-cm01-worldlines,
       def-cm01-velocity-acceleration,
       def-euclidean-inner-product,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The model vocabulary of the page's stability, perturbation and chaos statements: the autonomous force models of the framework (open configuration domain, fixed positive masses, a continuous state-locally-Lipschitz force map), their associated first-order fields and local flows with maximal solutions, equilibrium states (vanishing force at rest), periodic orbits and limit cycles, invariant and forward-invariant sets, orbital distance, and homoclinic and heteroclinic orbits as limit relations of motions. All objects are declared model data; the item asserts no measurement, no existence of any particular equilibrium or periodic orbit, and no stability of any of the listed objects."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.2 equilibrium and stability discussion and Chapter 9 'Chaos', including the phase-plane and periodic-orbit notions"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 5 (perturbations) and Chapter 7 (stability and chaos), including the equilibrium, fixed-point and flow notions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3 (return maps, stable and unstable sets, tangles) and §6.3 (flows and formal series)"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

This item fixes the vocabulary in which the stability, perturbation and chaos
statements of this page are phrased. All objects below are model data; nothing
here is a measured value, and no clause asserts that a particular model has an
equilibrium, a periodic orbit or an invariant set.

**(i) The model class.** A **stability model** is a force model of
[[post-cm02-force-superposition]] with $N\ge1$ labels, fixed masses
$m_1,\dots,m_N>0$ ([[post-cm01-worldlines]] clause (v)), a time window
$I_0\subseteq\mathbb R$ with nonempty interior, an open configuration domain
$Q\subseteq\mathbb R^{3N}$ ([[def-cm01-configuration]]), and a force map
$F:D\to\mathbb R^{3N}$ on an open set
$D\subseteq I_0\times Q\times\mathbb R^{3N}$, continuous and locally Lipschitz
in the state variable, whose **motions** are the $C^2$ curves $x:J\to Q$ of
[[def-cm02-newtonian-flow]] (that is, $m_ix_i''=F_i(t,x,x')$ on $J$ and
$(t,x(t),x'(t))\in D$). The model is **autonomous** when $I_0=\mathbb R$ and
$D=\mathbb R\times S_0$ for an open **state domain**
$S_0\subseteq Q\times\mathbb R^{3N}$ with $F(x,v)$ independent of $t$, and
**$P$-periodic** for a period $P>0$ when $I_0=\mathbb R$ and
$F(t+P,x,v)=F(t,x,v)$ for all $(t,x,v)\in D$. All time intervals use the
frame-time parameter fixed by [[def-cm01-velocity-acceleration]] with
$[t]=\tau$ ([[def-cm01-units]]).

**(ii) Associated field and flow.** Write $n:=3N$,
$\mathsf M:=\operatorname{diag}(m_1I_3,\dots,m_NI_3)$, and let
$$Z(t,x,v):=\bigl(v,\ \mathsf M^{-1}F(t,x,v)\bigr)$$
be the **associated first-order field** of the model, on the same domain $D$;
the state curve $z:=(x,x')$ of a motion is a solution of $z'=Z(t,z)$ and
conversely ([[def-cm02-newtonian-flow]] clause (c)). For an autonomous model
write $G:S_0\to\mathbb R^{6N}$, $G(x,v):=(v,\mathsf M^{-1}F(x,v))$; by the
standing regularity of $F$, the field $G$ is continuous and locally Lipschitz
in the state, so it has a **local flow**
$$\Phi:\Omega\longrightarrow S_0,\qquad \Phi(t,z_0):=z(t;z_0),$$
with maximal solutions $z(\,\cdot\,;z_0):I_{z_0}\to S_0$ and flow domain
$\Omega=\{(t,z_0):t\in I_{z_0}\}$, in the sense of
[[def-cm-local-flow-of-an-autonomous-system]]. The model's motions with state
curve through $z_0$ at time $0$ are exactly the curves $t\mapsto\Phi(t,z_0)$
restricted to their maximal intervals, and
$\Phi(s+t,z_0)=\Phi(t,\Phi(s,z_0))$ wherever both sides are defined
([[lem-cm-local-flow-composition-law]]). If in addition $F$ is of class $C^1$
in the state, then $\Omega$ is open and $\Phi$ is $C^1$ on it
([[cor-cm-flow-domain-open-and-flow-is-c1]]). No completeness of $\Phi$ is
asserted: the maximal interval $I_{z_0}$ may be bounded
([[def-cm02-newtonian-flow]]).

**(iii) Equilibria and periodic orbits.** A state $z_*=(x_*,v_*)\in S_0$ is an
**equilibrium state** of the autonomous model when $G(z_*)=0$, that is
$v_*=0$ and $F(x_*,0)=0$; under that condition the constant curve
$x(t)=x_*$ is a motion. A **periodic orbit** of the model is a motion
$x:\mathbb R\to Q$ that is not constant and satisfies $x(t+T)=x(t)$ for all
$t\in\mathbb R$ and some $T>0$; the infimum of all such $T$ is its **least
period**. A **limit cycle** (also **closed orbit**) is a periodic orbit whose
image is isolated among images of periodic orbits: there is an open set
$U\supseteq x(\mathbb R)$ such that no other periodic orbit has image meeting
$U$. A limit cycle's attraction is a separate property and is not part of this
definition.

**(iv) Invariant sets.** A set $S\subseteq S_0$ is **invariant** for the
autonomous model when $(t,z)\in\Omega$ for every $z\in S$ and every
$t\in\mathbb R$, and $\Phi_t(S)=S$ for all $t\in\mathbb R$, where
$\Phi_t(z):=\Phi(t,z)$; it is **forward invariant** when $(t,z)\in\Omega$ for
every $z\in S$, $t\ge0$, and $\Phi_t(S)\subseteq S$ for every $t\ge0$. The
**orbital distance** from a state $z$ to a nonempty set $S$ is
$$d(z,S):=\inf_{s\in S}\lVert z-s\rVert_2,$$
with the Euclidean norm of [[def-euclidean-inner-product]] on the state
chart.

**(v) Homoclinic and heteroclinic orbits.** A motion with state curve $z$ is
**homoclinic to** an equilibrium state $z_*$ when $z(t)\to z_*$ as
$t\to+\infty$ and as $t\to-\infty$, and is **heteroclinic from $z_-$ to
$z_+$** for distinct equilibrium states $z_-,z_+$ when $z(t)\to z_-$ as
$t\to-\infty$ and $z(t)\to z_+$ as $t\to+\infty$. Both are limit relations
of the model's motions, not intersections of separately constructed geometric
objects; the differentiability of the associated stable and unstable sets is
not asserted here.

**(vi) Reading conventions.** (a) The vocabulary is attached to the declared
model class; equilibria, periodic orbits, invariant sets and homoclinic orbits
are model objects, and no clause asserts that a physical system is exactly a
stability model or realises any of these objects. (b) The state space is
written in the Cartesian chart; a change of chart changes the coordinate
expression of the field, and the numerical values of derivative spectra depend
on the chart unless coordinates are scaled with fixed factors, while the
model's motions, equilibria, periodic orbits, invariant sets and their
asymptotic properties do not change.

## Remarks

- **Stability vocabulary.** Whether an equilibrium state is stable, attracting
  or unstable is not defined here; those predicates are fixed later on the
  page, and their statements quantify over the maximal solutions defined in
  clause (ii).

- **Discrete time.** For the $P$-periodic model the theory of this page uses a
  stroboscopic map at the period; that map and the local return maps of
  transversal sections are fixed in the page's discrete-time definition, and
  they are not repeated here. Nothing in this definition asserts that such a
  map is defined on all states or that its iterates exist for all time.
