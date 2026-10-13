---
id: thm-cm-control-volume-balance
kind: theorem
title: "Control-volume balance: mass and momentum rates for a moving non-material region"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-transport-theorem, def-cm-traction-and-stress, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-countable-choice, def-integral-over-a-measurable-set, thm-linearity-of-the-lebesgue-integral-on-l-one, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-metric-ball, def-interval]
dependency_roles:
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-transport-theorem: mathematical-premise
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 3.7 and 4.4 (transport equations for a moving part; the balance laws in integral form)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Sections 1.1–1.2 (Eulerian fixed-volume and Lagrangian moving-volume descriptions of the same balance)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as used by the transport and divergence theorems. Let $I\subseteq\mathbb R$ be a nonempty open interval, let $B\subseteq\mathbb R^3$ be a material region, and let $\chi:I\times O\to\mathbb R^3$ be a motion of $B$ on $I$ with spatial velocity $u$. Write

$$\mathcal D_\chi:=\{(t,x):t\in I,\ x\in\chi_t(O)\}$$

for the open domain on which $u$ is defined ([[def-cm-continuum-motion]]). Let $J_0\subseteq I$ be an open interval with compact closure in $I$, and let $U\subseteq\mathcal D_\chi$ be open and contain the swept region of $B$ over $\overline{J_0}$.

Let $\rho:U\to(0,\infty)$ and $\sigma:U\to M_3(\mathbb R)$ be $C^1$ and let $b:U\to\mathbb R^3$ be continuous. Define $g_i:=\sum_j\partial_j\sigma_{ij}$ and suppose, on $U$:

$$\partial_t\rho+\operatorname{div}(\rho u)=0\qquad\text{and}\qquad\rho\,D_tu=\rho b+g . \tag{KM}$$

Let $\psi:I\times O'\to\mathbb R^3$ be a second motion of a material region $B'\subseteq B$ (with the same reference chart domain $O'=O$ used for $B$; write $w$ for its spatial velocity), and suppose that for every $t\in J_0$ the control region $C_t:=\psi_t(B')$ is a bounded $C^1$ domain ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]) with outward unit normal $\nu$ and boundary surface integral as in [[def-surface-integral-on-a-compact-c-one-hypersurface]].

Assume also that the control sweep $\Sigma_C:=\{(t,x):t\in\overline{J_0},\ x\in\psi_t(\overline{B'})\}$ is contained in $U$. Thus the fields and the local equations (KM) are defined on a neighbourhood of every closed control region. No condition that the control motion coincide with the material motion is imposed.

Then for every $t\in J_0$:

$$\frac{d}{dt}\int_{C_t}\rho\,dx=-\int_{\partial C_t}\rho\,(u-w)\cdot\nu\,dS, \tag{CV1}$$

and componentwise

$$\frac{d}{dt}\int_{C_t}\rho u_i\,dx=\int_{C_t}\rho b_i\,dx+\Bigl(\int_{\partial C_t}\sigma\nu\,dS\Bigr)_i-\int_{\partial C_t}\rho u_i\,(u-w)\cdot\nu\,dS\qquad(i=1,2,3). \tag{CV2}$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the two motions $\chi,\psi$; the fields $\rho,\sigma,b$ satisfying (KM); the boundary regularity of the control region.

[F1] Transport theorem with the family $\psi$: for every $C^1$ function $f$ on a neighbourhood of the swept region of $B'$ over $\overline{J_0}$, $\frac{d}{dt}\int_{C_t}f=\int_{C_t}(\partial_tf+\operatorname{div}(fw))$ ([[thm-cm-transport-theorem]]), applied to $f=\rho$ and componentwise to $f=\rho u_i$.

[F2] Divergence theorem: for a bounded $C^1$ domain $C$ and $F\in C^1(\overline C;\mathbb R^3)$, $\int_C\operatorname{div}F=\int_{\partial C}F\cdot\nu\,dS$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]). Applied to $F=\rho(w-u)$ and to the rows $F_i=(\sigma_{i1},\sigma_{i2},\sigma_{i3})$, it gives $\int_C\operatorname{div}(\rho(w-u))=\int_{\partial C}\rho(w-u)\cdot\nu\,dS$ and $\int_Cg\,dx=\int_{\partial C}\sigma\nu\,dS$ ([[def-cm-traction-and-stress]]).

[F3] Product rule identity: for $C^1$ data satisfying (K),

$$\partial_t(\rho u_i)+\operatorname{div}(\rho u_iu)=u_i\bigl(\partial_t\rho+\operatorname{div}(\rho u)\bigr)+\rho\,(D_tu)_i=\rho\,(D_tu)_i ,$$

and $\operatorname{div}(\rho u_iw)=u_i\operatorname{div}(\rho w)+\rho\,w\cdot\nabla u_i$ componentwise ([[def-cm-euclidean-spatial-calculus]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct; write each rate as a transport integral and use (KM) plus the divergence theorem.

1.1 Fix $t\in J_0$. The control-sweep hypothesis puts $\{t\}\times\psi_t(\overline{B'})$ compactly inside $U$. Continuity of $\psi$ gives a small open time interval around $t$ whose closed sweep is still in $U$, so the local transport argument [F1] applies with $f=\rho$ and the control motion $\psi$. Thus $$\frac{d}{dt}\int_{C_t}\rho\,dx=\int_{C_t}\bigl(\partial_t\rho+\operatorname{div}(\rho w)\bigr)dx=\int_{C_t}\operatorname{div}\bigl(\rho(w-u)\bigr)dx,$$ since $\operatorname{div}(\rho w)-\operatorname{div}(\rho u)=\operatorname{div}\bigl(\rho(w-u)\bigr)$ and $\operatorname{div}(\rho u)=-\partial_t\rho$ by (K). By [F2], the last integral is $-\int_{\partial C_t}\rho(u-w)\cdot\nu\,dS$, which is (CV1). [given, F1, F2, F3, algebra]

2.1 Fix $i\in\{1,2,3\}$. By [F1] with $f=\rho u_i$, $$\frac{d}{dt}\int_{C_t}\rho u_i\,dx=\int_{C_t}\Bigl(\partial_t(\rho u_i)+\operatorname{div}(\rho u_iw)\Bigr)dx .$$ By [F3], $\operatorname{div}(\rho u_iw)=\operatorname{div}(\rho u_iu)+\operatorname{div}(\rho u_i(w-u))$, and by [F3] with (K) and (KM) the first term equals $\rho(D_tu)_i=\rho b_i+g_i$ on $C_t$. Hence $$\frac{d}{dt}\int_{C_t}\rho u_i\,dx=\int_{C_t}\bigl(\rho b_i+g_i\bigr)dx+\int_{C_t}\operatorname{div}\bigl(\rho u_i(w-u)\bigr)dx .$$ [given, F1, F3, step 1.1, algebra]

3.1 Apply [F2] to the last two terms of step 2.1: $\int_{C_t}g_i\,dx=(\int_{\partial C_t}\sigma\nu\,dS)_i$ and $\int_{C_t}\operatorname{div}(\rho u_i(w-u))dx=-\int_{\partial C_t}\rho u_i(u-w)\cdot\nu\,dS$. Substituting gives (CV2) for each $i$. [step 2.1, F2, algebra] ∎

## Remarks

- The control region need not be material: $\psi$ is an arbitrary motion of the reference region $B'$, and $w$ is the velocity of its points. The relative velocity $u-w$ in the flux terms records the transport of mass and momentum across the moving boundary. Taking $\psi=\chi$ recovers the material statements, in which the relative velocity vanishes and both rates reduce to the material integrals of (K) and (KM).

- The identities fix the inertial conventions: the momentum flux uses the spatial momentum density $\rho u$ times the normal component of the *relative* velocity, and the traction term is the surface integral of $\sigma\nu$. No stress symmetry, constitutive relation or boundary condition is used or asserted; the only regularities required are those stated.
