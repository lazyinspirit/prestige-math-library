---
id: lem-torus-knot-unit-slope-is-unknot
kind: lemma
title: "Unit-slope torus knots are unknots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-coprime-torus-knot
  - def-knot-connected-sum-and-prime-knot
  - def-countable-choice
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Remark 5.1.1 and Corollary 5.2.3, printed pp. 26 and 29"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Example 1.2, printed p. 5"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. If $p,q$ are coprime nonzero integers and $|p|=1$ or $|q|=1$, then the oriented torus knot $T(p,q)$ is ambient isotopic in $S^3$ to the standard unknot with its standard orientation.

## Statement references

[[def-coprime-torus-knot|The torus-knot parameterization on the standard Heegaard torus]]

[[def-knot-connected-sum-and-prime-knot|The standard unknot and oriented ambient-isotopy convention]]

[Cattabriga and Francaviglia, Remark 5.1.1 and Corollary 5.2.3](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** Countable Choice, coprime nonzero integers $p,q$, and $|p|=1$ or $|q|=1$.

[F1] [[def-coprime-torus-knot]] realizes $T(p,q)$ as the primitive slope curve on the standard Heegaard torus, with the two coordinate circles bounding disks on opposite sides.

[F2] [[def-knot-connected-sum-and-prime-knot]] fixes the standard unknot as the standard oriented unit circle and uses orientation-preserving ambient isotopy for knot equivalence.

[F3] [[thm-isotopy-extension]] extends a smooth isotopy of a compact embedded circle to an ambient isotopy of the surrounding smooth manifold.

[A1] Countable Choice is the hypothesis of the torus-knot, unknot, and isotopy-extension interfaces ([[def-countable-choice]]).

## Proof

1.1 Suppose $p=\varepsilon\in\{1,-1\}$. Write the original oriented curve as $K(s)=(r e^{2\pi i\varepsilon s},\sin\theta_0 e^{2\pi i q s})$, where $r=\cos\theta_0\in(0,1)$. Put $\theta_t=(1-t)\theta_0$ and define $H_t(s)=(\cos\theta_t e^{2\pi i\varepsilon s},\sin\theta_t e^{2\pi i q s})$. Each $H_t$ lies in $S^3$; its first coordinate is an injective circle parameterization because $|\varepsilon|=1$ and $\cos\theta_t>0$, and the family is smooth including $t=1$. It begins with the given orientation and ends at the core circle with orientation sign $\varepsilon$. [A1, F1, construct]

1.2 If $q=\varepsilon\in\{1,-1\}$, the path $(z_1,z_2)\mapsto(\cos t\,z_1+\sin t\,z_2,-\sin t\,z_1+\cos t\,z_2)$, $0\le t\le\pi/2$, lies in $SO(4)$ and isotopes the identity to $(z_1,z_2)\mapsto(z_2,-z_1)$. The image of the curve is $(\sin\theta_0 e^{2\pi i\varepsilon s},-r e^{2\pi i p s})$. Let $\eta_0\in(0,\pi/2)$ satisfy $\cos\eta_0=\sin\theta_0$ and $\sin\eta_0=r$, put $\eta_t=(1-t)\eta_0$, and use $H_t(s)=(\cos\eta_t e^{2\pi i\varepsilon s},-\sin\eta_t e^{2\pi i p s})$. Its first coordinate has winding $\varepsilon=\pm1$, so the family is a smooth isotopy through embeddings to the core with orientation sign $\varepsilon$. The initial coordinate rotation also preserves the knot orientation because it is an ambient isotopy. [A1, F1, construct, algebra]

2.1 By [F3], each smooth isotopy of the compact embedded circle constructed above extends to an ambient isotopy of $S^3$. Its terminal core is the standard unknot, with orientation sign $\varepsilon$. If $\varepsilon=-1$, write $z_j=x_j+i y_j$ and define $R_\tau(x_1,y_1,x_2,y_2)=(x_1,y_1\cos\tau+y_2\sin\tau,x_2,-y_1\sin\tau+y_2\cos\tau)$. This is a rotation in the $(y_1,y_2)$-plane, so $R_\tau$ is an orientation-preserving isometry of $S^3$ from the identity to $R_\pi(z_1,z_2)=(\overline z_1,\overline z_2)$. On the core, $R_\pi(e^{2\pi i s},0)=(e^{-2\pi i s},0)$, so this ambient isotopy reverses its orientation. In either sign case the original oriented curve is ambient isotopic to the standard oriented unknot. [A1, F2, F3, step 1.1, step 1.2, construct] ∎

