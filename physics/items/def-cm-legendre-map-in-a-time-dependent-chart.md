---
id: def-cm-legendre-map-in-a-time-dependent-chart
kind: definition
title: "The Legendre map of a time-dependent Lagrangian: regularity and hyperregularity"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-time-dependent-lagrangian-and-action, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-invertible-matrix-and-general-linear-group, def-matrix-product-and-identity-matrix]
forward_refs: [ex-cm-regular-lagrangians-need-not-be-hyperregular]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.1-8.2 (Hamiltonian mechanics; Legendre Transformation between Lagrangian and Hamiltonian mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.1 'The Legendre Transform' (the transform from L to H and the convexity requirement), printed pages 82-83"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

**Chart data.** Let $n\ge1$, let $J\subseteq\mathbb R$ and $U\subseteq\mathbb R^n$ be open and
nonempty, and let

$$\mathcal L:J\times U\times\mathbb R^n\longrightarrow\mathbb R$$

be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Such a map is a **fibre-full
time-dependent Lagrangian chart**; it is the special case of the chart of
[[def-cm-time-dependent-lagrangian-and-action]] in which the velocity block is the whole space
$\mathbb R^n$ at every $(t,q)\in J\times U$. Write $\mathcal L_v(t,q,v)\in\mathbb R^n$ for the
Euclidean gradient of $\mathcal L$ in its third slot and $\mathcal L_{vv}(t,q,v)\in M_n(\mathbb R)$
for the matrix of second partial derivatives in the third slot
([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]).

**Legendre map.** The **Legendre map** of $\mathcal L$ is the map

$$\mathbb F_{\mathcal L}:J\times U\times\mathbb R^n\longrightarrow J\times U\times\mathbb R^n, \qquad \mathbb F_{\mathcal L}(t,q,v):=\bigl(t,q,\mathcal L_v(t,q,v)\bigr).$$

The fibre coordinate of the target is called the **momentum** and is written
$p:=\mathcal L_v(t,q,v)$. Thus $\mathbb F_{\mathcal L}$ is the identity in the first two slots and
the gradient in the velocity slot. Since $\mathcal L$ is $C^2$, $\mathbb F_{\mathcal L}$ is $C^1$
([[def-ck-euclidean-maps-and-diffeomorphisms]]).

**Regularity.** Let $(t,q,v)\in J\times U\times\mathbb R^n$. The Legendre map is **regular at
$(t,q,v)$** when the velocity Hessian is nonsingular,

$$\det\mathcal L_{vv}(t,q,v)\ne0 ;$$

it is **regular (on the chart)** when it is regular at every point. At fixed $(t,q)$ this is
exactly the condition under which the map $v\mapsto(q,\mathcal L_v(t,q,v))$ is locally invertible
near $v$, a statement made precise and proved in
[[lem-cm-legendre-map-local-invertibility]].

**Hyperregularity.** The Lagrangian $\mathcal L$ is **hyperregular (on the chart)** when for every
$(t,q)\in J\times U$ the map

$$v\longmapsto\mathcal L_v(t,q,v)$$

is a bijection of $\mathbb R^n$ onto $\mathbb R^n$ and the inverse assignment

$$(t,q,p)\longmapsto v(t,q,p),\qquad \mathcal L_v\bigl(t,q,v(t,q,p)\bigr)=p,$$

is defined on all of $J\times U\times\mathbb R^n$ and is of class $C^1$. In that case $v$ is called
the **inverse Legendre branch** of $\mathcal L$, and the **Hamiltonian of the branch** is

$$H:J\times U\times\mathbb R^n\longrightarrow\mathbb R,\qquad H(t,q,p):=p\cdot v(t,q,p)-\mathcal L\bigl(t,q,v(t,q,p)\bigr).$$

The Hamiltonian is $C^1$ on its domain, being a sum of products of $C^1$ maps.

The definition asserts nothing about solving the equations of motion: the equivalence of the
Euler–Lagrange equation with Hamilton's equations on an inverse branch, and the differential of
$H$, are proved in [[prop-cm-hamiltonian-branch-identities]].

## Remarks

**Scope and warnings.** Hyperregularity is a *global-in-the-fibre* hypothesis: it requires the
velocity Legendre map to be bijective onto the whole momentum fibre $\mathbb R^n$, with globally
defined inverse. Regularity is a *local* condition. Hyperregularity implies regularity: at fixed $(t,q)$, differentiating $v(t,q,\mathcal L_v(t,q,w))=w$ gives $D_pv\,\mathcal L_{vv}=I_n$, so the square velocity Hessian is invertible. The converse fails: a regular
Lagrangian whose velocity gradient is not surjective is not hyperregular, and a fibre-full domain
whose Legendre map fails to be injective has no inverse branch. Concrete witnesses — including the
mechanical Lagrangian of [[prop-cm-mechanical-chart-lagrangian-is-hyperregular]], the bounded
gradient $\mathcal L(v)=\sqrt{1+v^2}$ and the identically zero Lagrangian — are collected in
[[ex-cm-regular-lagrangians-need-not-be-hyperregular]] and
[[rem-cm-scope-of-the-legendre-map]].

- The published bundle version of this notion — a smooth Lagrangian on a tangent bundle, its fibre
  derivative, and the definitions of regular and hyperregular Lagrangians by local
  diffeomorphism, respectively global fibre-preserving diffeomorphism, of the Legendre map — is
  the autonomous manifold formulation of the same concept. The present definition is the
  finite-dimensional chart version with explicit time dependence, which is the form consumed by
  the classical-mechanics items on this page; it is not a restatement of the bundle definition,
  because time-dependent Lagrangians and the explicit $C^2$ inverse branch on $J\times U\times\mathbb R^n$
  have no counterpart in the autonomous formulation.

- When $\mathcal L$ is hyperregular, the fibre condition and the open domain $J\times U$ make
  $H$ a globally defined $C^1$ function. If only regularity holds, an inverse branch exists only
  locally, and the local Hamiltonian is correspondingly local; the items below state which
  hypothesis each conclusion uses.
