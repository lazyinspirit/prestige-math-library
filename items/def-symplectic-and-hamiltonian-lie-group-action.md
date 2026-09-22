---
id: def-symplectic-and-hamiltonian-lie-group-action
kind: definition
title: Symplectic and Hamiltonian Lie-group actions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-smooth-left-action-of-a-lie-group, def-fundamental-vector-field-of-a-left-action, def-symplectic-form-and-symplectic-manifold, def-coadjoint-representation-of-a-lie-group, def-algebraic-dual-and-linear-functional, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, Definition 22.1 and §22.1, printed pages 133--135
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Definition 7.12 and Remark 7.13, printed pages 83--84
landmark: false
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g=T_eG$, let $(M,\omega)$ be a symplectic manifold
([[def-symplectic-form-and-symplectic-manifold]]), and let
$G\times M\to M$, $(g,p)\mapsto g\mathbin{\cdot}p$, be a smooth left action
([[def-smooth-left-action-of-a-lie-group]]). For $\xi\in\mathfrak g$ let
$\xi_M$ be its fundamental vector field in the library convention

$$\xi_M(p)=\left.\frac{d}{dt}\right|_0\exp_G(-t\xi)\mathbin{\cdot}p \qquad(p\in M)$$

([[def-fundamental-vector-field-of-a-left-action]]). The action is
**symplectic** when

$$g^*\omega=\omega\qquad\text{for every }g\in G,$$

that is, when every $p\mapsto g\mathbin{\cdot}p$ is a symplectomorphism. It is
**Hamiltonian** when it is symplectic and there is a smooth map

$$\mu:M\longrightarrow\mathfrak g^*$$

to the algebraic dual $\mathfrak g^*=\mathcal L(\mathfrak g,\mathbb R)$
([[def-algebraic-dual-and-linear-functional]]) such that

$$d\langle\mu,\xi\rangle=-\iota_{\xi_M}\omega \qquad\text{for every }\xi\in\mathfrak g,$$

and $\mu$ is equivariant for the given action on $M$ and the coadjoint action
on $\mathfrak g^*$ ([[def-coadjoint-representation-of-a-lie-group]]):

$$\mu(g\mathbin{\cdot}p)=g\mathbin{\cdot}\mu(p) \qquad(g\in G,\ p\in M).$$

Such a $\mu$ is an **equivariant moment map** for the action, and
$(M,\omega,G,\mu)$ is a **Hamiltonian $G$-space**.

Two conventions are load-bearing. First, the minus sign in the definition of
$\xi_M$ enters through the exponential $\exp_G(-t\xi)$, not through the moment
equation, and $d\langle\mu,\xi\rangle=-\iota_{\xi_M}\omega$ is the identity
used throughout this page. In the convention that generates $\xi$ by
$\exp_G(t\xi)$ the same equation reads $d\langle\mu,\xi\rangle
=\iota_{\xi^{\#}}\omega$, so a source written that way is translated by
$\xi^{\#}=-\xi_M$ rather than by changing the sign of $\mu$. Second, the
coadjoint action is the left action
$g\mathbin{\cdot}\alpha=\alpha\circ\operatorname{Ad}_{g^{-1}}$; with the
opposite convention equivariance would be replaced by its inverse.

The map $\mu$ is required to be smooth but not to be a submersion, the action
is not required to be free, proper, transitive, or to preserve any additional
structure, and $G$ and $M$ may be disconnected; those hypotheses enter only in
the theorems that use them. For $G$ with $\mathfrak g=0$, in particular for
$G$ discrete, a Hamiltonian action is exactly a symplectic action and
$\mu$ is the constant map to the zero-dimensional dual. Here
$\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used
exactly through the supplied fundamental-vector-field construction, which
itself invokes countable choice, and no further choice is made in this
definition.
