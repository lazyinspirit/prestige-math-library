---
id: prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map
kind: proposition
title: The coadjoint-orbit inclusion is an equivariant moment map
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-coadjoint-representation-of-a-lie-group, thm-coadjoint-orbits-are-symplectic-manifolds, def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.5, Theorem 7.25, printed pages 91--92
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 17, printed pages 139--140
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Equip the coadjoint orbit $\mathcal O\subseteq
\mathfrak g^*$ with its canonical structure and the KKS form $\omega$, and let
$\Phi:\mathcal O\hookrightarrow\mathfrak g^*$ be the inclusion. Then $\Phi$ is
an equivariant moment map for the coadjoint action on $\mathcal O$:

$$\Phi(h\cdot\beta)=h\cdot\Phi(\beta),\qquad d\langle\Phi,\xi\rangle=-\iota_{\xi_{\mathcal O}}\omega \quad(\xi\in\mathfrak g).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a coadjoint orbit $\mathcal O$ with its KKS form and the coadjoint action on it.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the orbit and fundamental-field suppliers cited in [F1] and [F2].

[F1] The coadjoint action is $(h\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{h^{-1}}\zeta)$, so the orbit map $\beta\mapsto h\cdot\beta$ is the restriction of the coadjoint action to $\mathcal O$. [[def-coadjoint-representation-of-a-lie-group]].

[F2] The inclusion satisfies $d\langle\Phi,\xi\rangle=-\iota_{\xi_{\mathcal O}}\omega$, and $\omega$ is the KKS form with $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$. [[thm-coadjoint-orbits-are-symplectic-manifolds]], [[def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit]].

[F3] An equivariant moment map is exactly a smooth map satisfying these two conditions. [[def-moment-map-and-component-hamiltonian]].

## Proof

**Proof technique:** direct.

1.1 The inclusion is coadjoint equivariant: for $h\in G$ and $\beta\in\mathcal O$ the orbit point $h\cdot\beta$ is again in $\mathcal O$, and $\Phi(h\cdot\beta)=h\cdot\beta=h\cdot\Phi(\beta)$ because $\Phi$ is the identity map on $\mathcal O$. [F1, given]

1.2 The component moment equations hold for $\Phi$ by [F2]. [F2]

2.1 By step 1.1, step 1.2 and the definition of an equivariant moment map, the inclusion $\Phi$ is an equivariant moment map for the coadjoint action on $(\mathcal O,\omega)$. [step 1.1, step 1.2, F3, A1] ∎
