---
id: def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit
kind: definition
title: The Kirillov--Kostant--Souriau form on a coadjoint orbit
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coadjoint-representation-of-a-lie-group, def-orbit-stabilizer-and-orbit-map-of-a-smooth-action, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, thm-every-orbit-is-an-injectively-immersed-homogeneous-space, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 17, printed pages 139--140
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.5, formula (23), printed pages 91--92
landmark: false
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$ and let $\mathcal O=G\cdot\alpha\subseteq
\mathfrak g^*$ be the coadjoint orbit of $\alpha$ under the coadjoint action
([[def-coadjoint-representation-of-a-lie-group]]). Give $\mathcal O$ its
canonical injectively immersed homogeneous-space structure, transported from
$G/G_\alpha$ ([[thm-every-orbit-is-an-injectively-immersed-homogeneous-space]]);
thus $\mathcal O$ is the orbit of a smooth action and each tangent space
$T_\beta\mathcal O$ consists exactly of the values $\xi_{\mathcal O}(\beta)$ of
the fundamental vector fields of that action on $\mathcal O$, with
$\xi_{\mathcal O}(\beta)=0$ exactly for $\xi$ in the stabilizer Lie algebra
$\mathfrak g_\beta$
([[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]]).
Here $\xi_{\mathcal O}$ denotes the restriction to $\mathcal O$ of the
fundamental vector field $\xi_{\mathfrak g^*}$ of the coadjoint action,
$\xi_{\mathfrak g^*}(\beta)(\eta)=\beta([\xi,\eta])$ for $\eta\in\mathfrak g$
([[def-coadjoint-representation-of-a-lie-group]],
[[def-fundamental-vector-field-of-a-left-action]]).

The **Kirillov--Kostant--Souriau form** (KKS form) $\omega$ on $\mathcal O$ is
defined pointwise by its values on fundamental fields:

$$\omega_\beta\bigl(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta)\bigr) :=\beta\bigl([\xi,\eta]\bigr) \qquad(\beta\in\mathcal O,\ \xi,\eta\in\mathfrak g).$$

The following lemma proves that this prescription is independent of the chosen
Lie-algebra representatives, so that it defines an alternating bilinear form on
each tangent space $T_\beta\mathcal O$; the next theorem proves that the
resulting family of forms is smooth, nondegenerate and closed, and that it is
$G$-invariant. The sign is chosen so that the inclusion
$\mathcal O\hookrightarrow\mathfrak g^*$ satisfies the library moment equation
$d\langle\Phi,\xi\rangle=-\iota_{\xi_{\mathcal O}}\omega$; the opposite sign
would produce $+\omega$ in that identity and is not used here. The form is
alternating because the Lie bracket is alternating, and the definition makes no
freeness, compactness or regularity assumption: the orbit of $\alpha=0$ is the
singleton $\{0\}$, on which the zero form is symplectic.
$\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]], used only
through the orbit structure and fundamental-field suppliers.
