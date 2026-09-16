---
id: def-coadjoint-representation-of-a-lie-group
kind: definition
title: The coadjoint representation, action and orbits
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-conjugation-and-the-adjoint-representation-of-a-lie-group, prop-adjoint-is-a-smooth-lie-group-representation, def-algebraic-dual-and-linear-functional, def-smooth-left-action-of-a-lie-group, def-orbit-stabilizer-and-orbit-map-of-a-smooth-action, def-lie-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.13(b), printed page 84
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 21, §21.5, printed pages 131--132
landmark: false
---

## Definition

Let $G$ be a finite-dimensional real Lie group with Lie algebra
$\mathfrak g=T_eG$ and dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$
([[def-algebraic-dual-and-linear-functional]]). For $g\in G$ the **coadjoint
map** is the linear map

$$\operatorname{Ad}^*_g:\mathfrak g^*\longrightarrow\mathfrak g^*,\qquad \operatorname{Ad}^*_g\alpha:=\alpha\circ\operatorname{Ad}_{g^{-1}},$$

so that $\langle\operatorname{Ad}^*_g\alpha,\xi\rangle
=\langle\alpha,\operatorname{Ad}_{g^{-1}}\xi\rangle$ for every
$\xi\in\mathfrak g$. The **coadjoint action** of $G$ on $\mathfrak g^*$ is

$$G\times\mathfrak g^*\longrightarrow\mathfrak g^*,\qquad (g,\alpha)\longmapsto g\mathbin{\cdot}\alpha :=\operatorname{Ad}^*_g\alpha .$$

The family $\operatorname{Ad}^*:G\to\operatorname{GL}(\mathfrak g^*)$,
$g\mapsto\operatorname{Ad}^*_g$, is the **coadjoint representation**. The
**coadjoint orbit** of $\alpha\in\mathfrak g^*$ and its **coadjoint
stabilizer** are the orbit and stabilizer, in the sense of
[[def-orbit-stabilizer-and-orbit-map-of-a-smooth-action]], of this action:

$$G\mathbin{\cdot}\alpha=\{\operatorname{Ad}^*_g\alpha:g\in G\},\qquad G_\alpha=\{g\in G:\operatorname{Ad}^*_g\alpha=\alpha\}.$$

The maps $\operatorname{Ad}^*_g$ are invertible, with
$(\operatorname{Ad}^*_g)^{-1}=\operatorname{Ad}^*_{g^{-1}}$: composing
$\operatorname{Ad}^*_g\operatorname{Ad}^*_h$ gives
$\alpha\mapsto\alpha\circ\operatorname{Ad}_{h^{-1}}\circ
\operatorname{Ad}_{g^{-1}}$, and
$\operatorname{Ad}_{h^{-1}}\operatorname{Ad}_{g^{-1}}
=\operatorname{Ad}_{h^{-1}g^{-1}}$ because $\operatorname{Ad}$ is a group
homomorphism ([[prop-adjoint-is-a-smooth-lie-group-representation]]), which
identifies the composite with $\operatorname{Ad}^*_{gh}$. Hence

$$\operatorname{Ad}^*_{gh}=\operatorname{Ad}^*_g\circ\operatorname{Ad}^*_h, \qquad \operatorname{Ad}^*_e=\operatorname{id}_{\mathfrak g^*},$$

so the coadjoint action is a **left** action; the inverse $g^{-1}$ in the
definition is exactly what makes it left rather than right. The action is
jointly smooth. Indeed, in a fixed basis of $\mathfrak g$ the linear maps
$\operatorname{Ad}_{g^{-1}}$ and $\operatorname{Ad}^*_g$ are inverse
transposes of one another, the matrix entries of $g\mapsto
\operatorname{Ad}_{g^{-1}}$ are smooth because $\operatorname{Ad}$ is a smooth
representation and inversion in $G$ is smooth
([[def-lie-group]]), and the coordinates of
$(g,\alpha)\mapsto\alpha\circ\operatorname{Ad}_{g^{-1}}$ are these smooth
matrix entries paired with the coordinates of $\alpha$
([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]). Thus the
coadjoint action is a smooth left action in the sense of
[[def-smooth-left-action-of-a-lie-group]], and the orbit and stabilizer above
are those of a smooth action.

Differentiating the curve $t\mapsto\exp_G(-t\xi)\mathbin{\cdot}\alpha$ at
$t=0$ gives the infinitesimal formula

$$\xi_{\mathfrak g^*}(\alpha)(\eta) =\left.\frac{d}{dt}\right|_0 \langle\exp_G(-t\xi)\mathbin{\cdot}\alpha,\eta\rangle =\alpha([\xi,\eta]),\qquad \eta\in\mathfrak g,$$

for the fundamental vector field
$\xi_{\mathfrak g^*}(\alpha)
=\frac{d}{dt}|_0\exp_G(-t\xi)\mathbin{\cdot}\alpha$ of
[[def-fundamental-vector-field-of-a-left-action]]: the derivative of
$\operatorname{Ad}_{\exp_G(t\xi)}=e^{t\operatorname{ad}_\xi}$ is
$\operatorname{ad}_\xi$
([[prop-adjoint-exponential-identity]]), and
$\operatorname{ad}_\xi\eta=[\xi,\eta]$. Equivalently
$(\xi\mathbin{\cdot}\alpha)(\eta)=-\alpha([\eta,\xi])$ if one writes the
infinitesimal coadjoint action, but the formulation above is the one used in
this library. A definition of the dual spaces, of the adjoint representation,
of orbits and of the $\exp(-t\xi)$ convention, but of no further structure, is
involved; the coadjoint action applies verbatim to disconnected $G$, to
$\alpha=0$, whose orbit is the singleton $\{0\}$, and to abelian $G$, where it
is trivial.
