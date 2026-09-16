---
id: def-moment-map-and-component-hamiltonian
kind: definition
title: Moment map, component Hamiltonians and infinitesimal moment maps
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, def-algebraic-dual-and-linear-functional, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, Definition 22.1 and §22.1, printed pages 133--135
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Definition 7.12, printed page 83
landmark: false
---

## Definition

Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic
manifold $(M,\omega)$ be given, with fundamental fields $\xi_M$ as in
[[def-symplectic-and-hamiltonian-lie-group-action]]. Let $\mu:M\to\mathfrak g^*$
be a smooth map to the dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$
([[def-algebraic-dual-and-linear-functional]]). Its **components** are the
smooth functions

$$\mu^\xi:M\longrightarrow\mathbb R,\qquad \mu^\xi(p):=\langle\mu(p),\xi\rangle\qquad(\xi\in\mathfrak g),$$

and they depend linearly on $\xi$, because evaluation of a fixed covector is
linear. The map $\mu$ is an **infinitesimal moment map** for the action when
the **component moment equations**

$$d\mu^\xi=-\iota_{\xi_M}\omega \qquad\text{hold for every }\xi\in\mathfrak g$$

hold; equivalently, when the map
$\mathfrak g\to C^\infty(M)$, $\xi\mapsto\mu^\xi$ is linear and each
$\mu^\xi$ is a Hamiltonian function for the vector field $-\xi_M$. The
infinitesimal moment map is an **equivariant moment map** when in addition

$$\mu(g\mathbin{\cdot}p)=g\mathbin{\cdot}\mu(p) \qquad(g\in G,\ p\in M)$$

for the coadjoint action $g\mathbin{\cdot}\alpha
=\alpha\circ\operatorname{Ad}_{g^{-1}}$
([[def-coadjoint-representation-of-a-lie-group]]), and a **Hamiltonian
action** is a symplectic action that admits an equivariant moment map.

The distinction between the two notions is deliberate and is used by the
nonequivariance lemma later on this page: an infinitesimal moment map is
required only to satisfy the differential equations, while equivariance is an
additional group-theoretic condition that can genuinely fail. The
**nonequivariance defect** of an infinitesimal moment map is the alternating
bilinear map of functions

$$c(\xi,\eta):=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}, \qquad \xi,\eta\in\mathfrak g,$$

where $\{\,,\}$ is the Poisson bracket of the symplectic form. Equivariance of
$\mu$ is not built into the definition of an infinitesimal moment map, and no
item on this page assumes it unless it is stated. The countable-choice
assumption is inherited from
[[def-symplectic-and-hamiltonian-lie-group-action]] and is used only there;
no choice is made here, and $\mu$ may be replaced by $\mu+c$ for any constant
$c\in\mathfrak g^*$ without changing any component differential.
