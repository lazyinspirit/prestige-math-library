---
id: def-cm16-stroboscopic-and-poincare-maps
kind: definition
title: "The stroboscopic map of a periodic model and the Poincare return map of a transversal section: domains, iterates, fixed points and the local C1 diffeomorphism property"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       prop-cm-first-return-map-is-a-local-c1-diffeomorphism,
       cor-cm-flow-domain-open-and-flow-is-c1,
       def-cm02-newtonian-flow,
       def-subspace-topology-top,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  prop-cm-first-return-map-is-a-local-c1-diffeomorphism: mathematical-premise
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  def-cm02-newtonian-flow: formulation-prerequisite
  def-subspace-topology-top: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The two maps used to reduce the model's dynamics to discrete time: the stroboscopic map at the period of a P-periodic force model, defined only on states whose motion exists over the full period, with iterates recursively defined and fixed points in bijection with P-periodic motions; and the local Poincare return map of a transversal section of an autonomous model, whose existence, C1 regularity and local invertibility are supplied from the first-return mapping theorem. The item asserts no completeness, no global return and no all-time existence of iterates."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.2 pp. 157-172: stroboscopic maps of periodically driven systems, Poincare sections and the requirement of an actual return domain"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: return maps, fixed points and the tangle narrative"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.3 and Chapter 9: phase-plane analysis, stroboscopic and Poincare sections"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

**(i) The stroboscopic map.** Let a $P$-periodic stability model be fixed
($P>0$; [[def-cm16-flow-equilibria-and-invariant-sets]] clause (i)) with state
curve $z(t;z_0)=(x(t;z_0),x'(t;z_0))$ of the motion through $z_0$ at time $0$
and maximal interval $I_{z_0}$. The **stroboscopic map at period $P$** is the
partial map
$$\Psi:\Sigma\longrightarrow S_0,\qquad \Sigma:=\{z_0\in S_0:[0,P]\subseteq I_{z_0}\},\qquad \Psi(z_0):=z(P;z_0),$$
with domain $\Sigma$ the set of states whose maximal motion exists over
$[0,P]$. Its **iterates** are defined recursively by $\Psi^1:=\Psi$ and, where
$\Psi^n(z_0)\in\Sigma$, $\Psi^{n+1}(z_0):=\Psi(\Psi^n(z_0))$; the domain of
$\Psi^n$ is therefore the set of states whose maximal motion exists over
$[0,nP]$, and it may be strictly smaller than $\Sigma$. A state
$z_*\in\Sigma$ with $\Psi(z_*)=z_*$ is a **fixed point** of $\Psi$, and it is
a **$P$-periodic state** of the model: the motion through $z_*$ satisfies
$z(t+P;z_*)=z(t;z_*)$ for all $t$ for which both sides are defined. No
completeness of $\Psi$ is asserted: $\Sigma$ need not be all of $S_0$, and
iterates can leave the domain.

**(ii) Autonomous special case.** If the model is autonomous, then its
stroboscopic map at any period $P>0$ is the time-$P$ map $\Phi_P$ of its local
flow restricted to $\Omega_P=\{(P,z):(P,z)\in\Omega\}$
([[def-cm16-flow-equilibria-and-invariant-sets]] clause (ii)); this is the
reading used for the isotropic-oscillator check on the page.

**(iii) The Poincare return map.** Let an autonomous model with force map of
class $C^1$ in the state be fixed, with associated $C^1$ field $G$ on $S_0$
and local flow $\Phi:\Omega\to S_0$
([[cor-cm-flow-domain-open-and-flow-is-c1]]). Let $z_0\in S_0$, $t_0>0$ with
$(t_0,z_0)\in\Omega$, put $z_1:=\Phi(t_0,z_0)$, let $W\subseteq S_0$ be open
with $z_0,z_1\in W$, and let $h:W\to\mathbb R$ be of class $C^1$ with
$h(z_0)=h(z_1)=0$ and $Dh(z_0)G(z_0)\ne0$, $Dh(z_1)G(z_1)\ne0$. The
**section** is $\Sigma_h:=\{z\in W:h(z)=0\}$, and the reference orbit meets it
transversally at $z_0$ and again at $z_1$. Then
[[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]] supplies open sets
$A\ni z_0$, $B\ni z_1$ and $C^1$ functions $\tau:A\to\mathbb R$,
$\sigma:B\to\mathbb R$ with $\tau(z_0)=\sigma(z_1)=t_0$ such that
$$P:A\cap\Sigma_h\longrightarrow\Sigma_h,\qquad P(z):=\Phi\bigl(\tau(z),z\bigr)$$
is a $C^1$ diffeomorphism onto $P(A\cap\Sigma_h)$, which is open in the
subspace topology of $\Sigma_h$ ([[def-subspace-topology-top]]), with inverse
$Q(z)=\Phi(-\sigma(z),z)$; moreover $h(\Phi(t,z))=0$ for $(t,z)\in J\times A$
holds exactly for $t=\tau(z)$, so $P$ is the **local first-return map** of the
section through the reference orbit. A state $z_*\in A\cap\Sigma_h$ with
$P(z_*)=z_*$ is a **fixed point of the return map**, and the motion through
$z_*$ is periodic with period $\tau(z_*)$.

**(iv) Conventions and scope.** (a) Both maps are attached to the declared
model and its flow; the stroboscopic map depends on the chosen period $P$ and
the return map on the chosen section and reference crossing, and different
choices give different (conjugate only under the stated conditions) maps.
(b) The return time $\tau$ is a $C^1$ function on the domain, not a constant;
the reference crossing time $t_0$ is only one value of it. (c) Neither map is
asserted to be defined on all of phase space, and no statement here asserts
that a fixed point, a periodic orbit or a return exists for any particular
model. (d) Periods and return times are measured in the frame time
$[t]=\tau$ ([[def-cm01-units]]); a return time must be positive for the
periodicity reading of clause (iii) to apply.
