---
id: def-cm-infinitesimal-point-symmetry
kind: definition
title: "Infinitesimal point symmetry of a time-dependent Lagrangian and its conserved charge"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-time-dependent-lagrangian-and-action, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 7.2 (Generalized Momentum) and Section 7.3 (Invariant Transformations and Noether's Theorem)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.4.1 'Noether's Theorem' (continuous symmetries of the Lagrangian), printed pages 24-26"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]]. Let $V\subseteq\mathbb R^n$ and $A\subseteq\mathbb R\times V$ be open sets containing respectively the configuration projection of $O$ and its time-configuration projection. Let

$$\xi:V\longrightarrow\mathbb R^n,\qquad B:A\longrightarrow\mathbb R$$

be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); write $D\xi(q)\in M_n(\mathbb R)$
for the Jacobian matrix of $\xi$ at $q$ ([[def-jacobian-matrix-and-gradient]],
[[def-directional-and-partial-derivatives]]), and for a $C^1$ function $\varphi(t,q)$ write

$$D_t\varphi(t,q,v):=\varphi_t(t,q)+\varphi_q(t,q)\cdot v .$$

The pair $(\xi,B)$ is an **infinitesimal point symmetry of $\mathcal L$** when the identity

$$\mathcal L_q(t,q,v)\cdot\xi(q)+\mathcal L_v(t,q,v)\cdot D\xi(q)v =B_t(t,q)+B_q(t,q)\cdot v$$

holds for every $(t,q,v)\in O$. The **charge of the pair** is the function

$$C(t,q,v):=\mathcal L_v(t,q,v)\cdot\xi(q)-B(t,q).$$

**Reading of the identity.** The left-hand side is the derivative of the Lagrangian under the
infinitesimal family of point transformations

$$q\longmapsto q+s\,\xi(q),\qquad t\longmapsto t$$

with the velocity transformed accordingly by $v\mapsto v+s\,D\xi(q)v$, and the right-hand side is
the total derivative $\frac{d}{dt}B(t,q(t))$ along a $C^1$ trajectory with $q'(t)=v$; thus the identity says that the infinitesimal variation of
$\mathcal L$ is a total time derivative of the chart function $B$. In particular:

- Taking $B=0$ reduces the identity to
  $\mathcal L_q(t,q,v)\cdot\xi(q)+\mathcal L_v(t,q,v)\cdot D\xi(q)v=0$, the invariance of
  $\mathcal L$ under the infinitesimal family.
- For a constant field $\xi\equiv a$ one has $D\xi=0$, and the identity reads
  $\mathcal L_q\cdot a=B_t+B_q\cdot v$; when $B$ is independent of $q$ this is the statement that
  $\mathcal L$ is unchanged by the translation $q\mapsto q+sa$ up to a total time derivative.

**Scope.** The definition is an identity imposed on the chart data; it does not assert that a
given Lagrangian possesses any symmetry, nor that a symmetry of the configuration space, a frame
change or any kinematic structure automatically induces one. Whether a symmetry produces a
conserved quantity along the Euler–Lagrange solutions is the theorem
[[thm-cm-point-symmetry-charge-is-conserved]]; the general reparametrisation version is
[[thm-cm-point-noether-identity-with-time-reparametrization]], and the scope of the statement for
physical models is recorded in [[rem-cm-scope-of-point-symmetry]].

## Remarks

- The notation $D_t\varphi$ is the derivative of $\varphi$ along the curve $t\mapsto(t,q(t))$ when
  $v=q'(t)$: for such a curve, $D_t\varphi(t,q(t),q'(t))=\frac{d}{dt}\varphi(t,q(t))$. This is the
  reason the velocity slot of the symmetry identity is filled by $v$ rather than by a fixed
  vector: the infinitesimal transformation moves $q$ with velocity $\xi(q)$, and along a motion
  the velocity changes by $D_t\xi-v\,D_t\tau$ in the general case treated later.

- The charge is a function on the chart $O$; a conserved quantity is the composite
  $t\mapsto C(t,q(t),q'(t))$ along a solution. No claim is made that the charge is the only
  conserved quantity, or that it is invariant under changes of chart.
