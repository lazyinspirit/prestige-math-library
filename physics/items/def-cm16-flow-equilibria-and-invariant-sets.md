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
       def-first-order-ode-initial-value-problem-and-solution,
       def-maximal-ode-solution,
       thm-existence-and-uniqueness-of-a-maximal-ode-solution,
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
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
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
physical_scope: "The model vocabulary of the page's stability, perturbation and chaos statements: force models of the framework with an open configuration domain, fixed positive masses and continuous state-locally-Lipschitz force maps, including explicitly stated open restrictions of the full force-map domain; their associated first-order fields and local flows with maximal solutions; equilibrium states (vanishing force at rest); full-time periodic motions and their state traces; and, for autonomous models, periodic orbits and limit cycles, invariant and forward-invariant sets, orbital distance, and nonconstant homoclinic and heteroclinic motions. Periodic restriction domains are invariant under shifts by the forcing period. All objects are declared model data; the item asserts no measurement, no existence of any particular equilibrium or periodic orbit, and no stability of any listed object."
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
$I_0\subseteq\mathbb R$ that is a nondegenerate open interval and an open
configuration domain $Q\subseteq\mathbb R^{3N}$
([[def-cm01-configuration]]). Its full force
map $F_0$ has domain
$D_0:=I_0\times Q\times\mathbb R^{3N}$, exactly as in clause (iii) of
[[post-cm02-force-superposition]]. Put
$\mathsf M:=\operatorname{diag}(m_1I_3,\dots,m_NI_3)$ and define the full
first-order field
$$Z_0:D_0\to\mathbb R^{6N},\qquad Z_0(t,x,v):=\bigl(v,\mathsf M^{-1}F_0(t,x,v)\bigr).$$
The page may specify an open restriction
domain $D\subseteq D_0$ and then uses $F:=F_0|_D$; every force evaluation in
the statements below is on this restriction. This is still a restriction of
the supplier's full force map, not a force map with a different domain. The
associated field on this restriction is $Z:=Z_0|_D$. The
**motions** are the $C^2$ curves $x:J\to Q$, where $J\subseteq I_0$ is a time
interval, of [[def-cm02-newtonian-flow]] for which $(t,x(t),x'(t))\in D$ and
$m_ix_i''(t)=F_i(t,x(t),x'(t))$. For any declared open domain
$D\subseteq D_0$, including $D=D_0$, call such a
motion **$D$-maximal** when it has no extension to a strictly larger interval
whose time-state graph $(t,x(t),x'(t))$ remains in $D$; this is the maximal-solution notion for the
first-order ODE $z'=Z(t,z)$ on the open domain $D$
([[def-first-order-ode-initial-value-problem-and-solution]],
[[def-maximal-ode-solution]]). A $D$-maximal motion is a restriction of a
supplier motion of the full force model, but its maximal interval need not be
maximal for the full domain $D_0$. The model is **autonomous** when
$I_0=\mathbb R$, $D=\mathbb R\times S_0$ for an open **state domain**
$S_0\subseteq Q\times\mathbb R^{3N}$, and $F$ is independent of $t$. It is
**$P$-periodic**, for $P>0$, when $I_0=\mathbb R$, $D$ is invariant under
$(t,x,v)\mapsto(t+P,x,v)$ in both directions, and
$F(t+P,x,v)=F(t,x,v)$ on $D$. Thus every integer shift by $P$ preserves the
time and state domain used by the model. All time intervals use the frame-time
parameter fixed by [[def-cm01-velocity-acceleration]] with $[t]=\tau$
([[def-cm01-units]]).

For data $(t_0,x_0,v_0)\in D$, put $z_0:=(x_0,v_0)$. The full field $Z_0$ is
continuous and locally Lipschitz in the state, so
[[thm-existence-and-uniqueness-of-a-maximal-ode-solution]] gives a unique
maximal solution $z_{\mathrm{full}}:I_{\mathrm{full}}\to
Q\times\mathbb R^{3N}$ through $(t_0,z_0)$, where $I_{\mathrm{full}}$ is an
open interval. Let $I_D$ be the connected component containing $t_0$ of
$$\{t\in I_{\mathrm{full}}:(t,z_{\mathrm{full}}(t))\in D\}.$$
Because $D$ is open, the preimage is open relative to the open interval
$I_{\mathrm{full}}$, and hence open in $\mathbb R$; thus $I_D$ is an open
interval. The restriction
$z_{\mathrm{full}}|_{I_D}$ is the unique $D$-maximal motion through the data:
every motion in $D$ is a solution of the full model and therefore agrees with
$z_{\mathrm{full}}$ on its interval, so no $D$-extension can pass beyond this
component.

**(ii) Associated field and flow.** Write $n:=3N$; the state curve
$z:=(x,x')$ of a motion is a solution of $z'=Z(t,z)$ and
conversely ([[def-cm02-newtonian-flow]] clause (c)). For an autonomous model
write $G:S_0\to\mathbb R^{6N}$, $G(x,v):=(v,\mathsf M^{-1}F(x,v))$; by the
standing regularity of $F$, the field $G$ is continuous and locally Lipschitz
in the state, so it has a **local flow**
$$\Phi:\Omega\longrightarrow S_0,\qquad \Phi(t,z_0):=z(t;z_0),$$
with maximal solutions $z(\,\cdot\,;z_0):I_{z_0}\to S_0$ and flow domain
$\Omega=\{(t,z_0):t\in I_{z_0}\}$, in the sense of
[[def-cm-local-flow-of-an-autonomous-system]]. The state curves of the model's
motions through $z_0$ at time $0$ are exactly the restrictions
$\Phi(\,\cdot\,,z_0)|_J$ to intervals $J\subseteq I_{z_0}$ containing $0$
with nonempty interior, with endpoint derivatives read as in
[[def-cm02-newtonian-flow]] clause (c). The unique $D$-maximal motion has
state curve $\Phi(\,\cdot\,,z_0)$ on all of $I_{z_0}$, and
$\Phi(s+t,z_0)=\Phi(t,\Phi(s,z_0))$ wherever both sides are defined
([[lem-cm-local-flow-composition-law]]). If in addition $F$ is of class $C^1$
in the state, then $\Omega$ is open and $\Phi$ is $C^1$ on it
([[cor-cm-flow-domain-open-and-flow-is-c1]]). No completeness of $\Phi$ is
asserted: the maximal interval $I_{z_0}$ may be bounded
([[def-cm02-newtonian-flow]]).

**(iii) Equilibria and periodic orbits.** A state $z_*=(x_*,v_*)\in S_0$ is an
**equilibrium state** of the autonomous model when $G(z_*)=0$, that is
$v_*=0$ and $F(x_*,0)=0$; under that condition the constant curve
$x(t)=x_*$ is a motion. A **periodic motion** of the model is a nonconstant
motion $x:\mathbb R\to Q$ of a model with $I_0=\mathbb R$ satisfying
$x(t+T)=x(t)$ for every $t\in\mathbb R$ and some $T>0$; the least such
positive $T$ is its **least period**. Its state trace is
$\Gamma_z:=\{(x(t),x'(t)):t\in\mathbb R\}\subseteq
Q\times\mathbb R^{3N}$. For an autonomous model this trace lies in $S_0$ and is
called its **state orbit**; a **periodic orbit** or **closed orbit** means this
state orbit. In a nonautonomous periodic model the state trace is not an orbit
of a time-independent flow, and the discrete-time objects used on this page
are its stroboscopic maps. A **limit cycle** is an isolated periodic orbit of
an autonomous model: there is an open set $U\subseteq S_0$ with
$\Gamma_z\subseteq U$ such that every periodic orbit $\Gamma_{\widetilde z}$
of this model satisfying $\Gamma_{\widetilde z}\subseteq U$ equals
$\Gamma_z$. Thus $U$ contains no other periodic orbit as a whole; an orbit
that merely passes through $U$ is not excluded. A limit cycle's attraction is
a separate property and is not part of this definition.

**(iv) Invariant sets.** A set $S\subseteq S_0$ is **invariant** for the
autonomous model when $(t,z)\in\Omega$ for every $z\in S$ and every
$t\in\mathbb R$, and $\Phi_t(S)=S$ for all $t\in\mathbb R$, where
$\Phi_t(z):=\Phi(t,z)$; it is **forward invariant** when $(t,z)\in\Omega$ for
every $z\in S$, $t\ge0$, and $\Phi_t(S)\subseteq S$ for every $t\ge0$. The
**orbital distance** from a state $z$ to a nonempty set $S$ is
$$d(z,S):=\inf_{s\in S}\lVert z-s\rVert_2,$$
with the Euclidean norm of [[def-euclidean-inner-product]] on the state
chart. Precisely, the state coordinates here are the numerical values of
[[def-cm01-units]] clause (c): if $X,V$ are the physical position and
velocity tuples, the numerical chart is
$z=(X/(1\ \mathrm m),V/(1\ \mathrm{m\,s^{-1}}))$. The norm and orbital
distance sum squares of these dimensionless numerical components, rather
than adding physical lengths to physical velocities. Time $t$ is the
numerical value of physical time in $1\ \mathrm s$. This convention leaves
the supplier's numerical ODE unchanged; it fixes the scales for distances.

**(v) Homoclinic and heteroclinic orbits.** In an autonomous model, a
nonconstant complete motion $x:\mathbb R\to Q$ with state curve
$z:\mathbb R\to S_0$ is **homoclinic to** an equilibrium state $z_*$ when
$z(t)\to z_*$ as $t\to+\infty$ and as $t\to-\infty$, and is
**heteroclinic from $z_-$ to $z_+$** for distinct equilibrium states
$z_-,z_+$ when $z(t)\to z_-$ as $t\to-\infty$ and $z(t)\to z_+$ as
$t\to+\infty$. Both are limit relations of complete model motions, not
intersections of separately constructed geometric objects; the differentiability
of the associated stable and unstable sets is not asserted here.

**(vi) Reading conventions.** (a) The vocabulary is attached to the declared
model class; equilibria, periodic orbits, invariant sets and homoclinic orbits
in clauses (iii)-(v) are objects of autonomous models. A periodic motion of a
time-dependent model has a state trace but is not an orbit of an autonomous
flow; a periodic model's discrete-time map is defined separately on this page.
No clause asserts that a physical
system is exactly a stability model or realises any of these objects. (b) The state space is
written in a Cartesian chart. Let $h:S_0\to\widetilde S_0$ be a
$C^2$ diffeomorphism between open state domains, with time unchanged. If it changes an
autonomous field from $G$ to $\widetilde G(h(z))=Dh(z)G(z)$, and $G$ is
$C^1$ near an equilibrium $z_*$, then its derivative there satisfies
$D\widetilde G(h(z_*))=Dh(z_*)DG(z_*)Dh(z_*)^{-1}$: the term differentiating
$Dh$ vanishes because $G(z_*)=0$. Thus the linearization spectrum at an
equilibrium is chart-invariant. This spectrum assertion is conditional on
differentiability; the standing
locally Lipschitz hypothesis alone does not supply a linearization.
Norms, matrix entries and quantitative growth bounds can still depend on the
chart. State curves correspond by $z(t)\mapsto h(z(t))$ on the same maximal
time intervals: the chain rule gives the transformed equation, and any
extension pulls back by $h^{-1}$. Thus equilibria, periodic state orbits and
invariant sets correspond, and convergence to a specified state is preserved
by continuity of $h$ and $h^{-1}$, including the equilibrium limits in clause
(v). Convergence of Euclidean distance to an arbitrary nonempty invariant
set requires additional metric control. For example, if constants
$0<c\le C<\infty$ satisfy
$c\lVert z-s\rVert_2\le\lVert h(z)-h(s)\rVert_2\le C\lVert z-s\rVert_2$
for every $s\in S$ and every state $z$ under consideration, taking infima
gives $c\,d(z,S)\le d(h(z),h(S))\le C\,d(z,S)$ and preserves distance-to-set
convergence. A smooth diffeomorphism alone supplies no such uniform bounds:
for the complete free model $G(x,v)=(v,0)$ on $\mathbb R^6$, the invariant
set $S=\{(x,0):x\in\mathbb R^3\}$ and motion $z(t)=(t e_1,e_1)$, where
$e_1=(1,0,0)$, satisfy $d(z(t),S)=1$. The smooth diffeomorphism
$h(x,v)=(x,e^{-x_1}v)$, with inverse $(x,w)\mapsto(x,e^{x_1}w)$, instead
gives $d(h(z(t)),h(S))=e^{-t}\to0$. Thus distance-to-set attraction along
an escaping motion is not asserted to be chart-invariant.

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
