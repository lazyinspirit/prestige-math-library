---
id: def-nrqm-state-geometry-state-vectors-and-rays
kind: definition
domain: mathematics
title: "State vectors, unit vectors, rays, normalization and phases of a Hilbert space"
status: published
origin: pipeline
dependency_level: 0
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, def-inner-product-norm, cor-inner-product-induces-a-norm, def-complex-numbers-and-arithmetic, lem-complex-conjugation-and-modulus-laws]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-inner-product-norm: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 'Foundations I: States and Ensembles' (updated July 2015), Section 2.1, printed pages 3-4: the Hilbert-space axioms, the ray of a state, the normalized representative and the physical insignificance of the overall phase"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.4, printed page 12: normalization of a state and the modulus-one phase convention"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-56 (PDF pages 66-67): the possible states of a quantum system are the elements of norm one of a complex separable Hilbert space"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Definition

**The Hilbert space and its norm.** Throughout this item $H\ne\{0\}$ is a nonzero complex Hilbert space, with pairing $\langle\cdot,\cdot\rangle$ linear in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]), and with the induced norm $\|\psi\|:=\sqrt{\langle\psi,\psi\rangle}$ ([[def-inner-product-norm]], [[cor-inner-product-induces-a-norm]]). A **vector** is an element of $H$, and a **unit vector** is a vector $\psi$ with $\|\psi\|=1$. The **unit sphere** of $H$ is
$$S(H):=\{\psi\in H:\|\psi\|=1\},$$
and the set of **nonzero vectors** is $H^{\times}:=H\setminus\{0\}$. The hypothesis $H\ne\{0\}$ says exactly that $H^{\times}$ is nonempty; then $S(H)$ is nonempty as well, since for every nonzero $\psi$ the vector $\psi/\|\psi\|$ has norm one, because $\|\psi\|>0$ and $\|\psi/\|\psi\|\,\|=|\|\psi\|^{-1}|\,\|\psi\|=1$.

**Rays.** For $\psi\in H^{\times}$ the **ray** of $\psi$ is
$$[\psi]:=\{z\psi:z\in\mathbb C,\ z\ne0\}\subseteq H^{\times}.$$
A **ray** of $H$ is a subset of the form $[\psi]$ for some nonzero $\psi$, and an element of a ray is called a **representative** of it. The set of rays
$$R(H):=\{[\psi]:\psi\in H^{\times}\}$$
is the **ray space** of $H$. Two nonzero vectors $\psi,\varphi$ are **ray-equivalent** when they lie in a common ray, that is, when $\varphi=z\psi$ for some nonzero complex number $z$. Ray equivalence is an equivalence relation on $H^{\times}$: it is reflexive with $z=1$, symmetric with $z^{-1}$, and transitive by multiplying scalars. Its classes are exactly the rays, so $R(H)$ is the quotient set of $H^{\times}$ by this relation, and every nonzero vector lies in exactly one ray.

**Normalization.** The **normalization map** is
$$\nu:H^{\times}\longrightarrow S(H),\qquad \nu(\psi):=\frac{\psi}{\|\psi\|},$$
where the right-hand side is the scalar multiple $\|\psi\|^{-1}\psi$; the displayed definition is meaningful because $\|\psi\|>0$ for $\psi\ne0$. The vector $\nu(\psi)$ is the **normalization** of $\psi$.

**Phases.** The **phase group** is
$$U(1):=\{\zeta\in\mathbb C:|\zeta|=1\}$$
([[def-complex-numbers-and-arithmetic]], [[lem-complex-conjugation-and-modulus-laws]]), and a **phase factor** is an element of $U(1)$. Two vectors $\psi,\varphi$ are **phase-equivalent** when $\varphi=\zeta\psi$ for some phase factor $\zeta$. The **phase action** of $U(1)$ on the unit sphere is the map
$$U(1)\times S(H)\longrightarrow S(H),\qquad (\zeta,\psi)\longmapsto\zeta\psi,$$
which is well defined because $\|\zeta\psi\|=|\zeta|\,\|\psi\|=\|\psi\|$ for $\zeta\in U(1)$ and $\psi\in S(H)$. Ray equivalence allows multiplication by an arbitrary nonzero complex scalar, while phase equivalence allows multiplication by a scalar of modulus one only; within a given ray the two notions coincide exactly on representatives of equal norm, and the precise statements are proved in the normalization lemma of this page.

**Scope.** This definition fixes the mathematical objects of the state space of a Hilbert space and their elementary vocabulary: nonzero vectors, unit vectors, rays, the ray space, the normalization map and the phase action. It introduces no topology or measure on $R(H)$, no dynamics and no physical interpretation, and it uses no choice principle. The identification of rays with preparations and of the unit sphere with their normalized representatives is the model assumption stated in the framework's state postulate, not part of this mathematical definition; the orbit structure of the phase action is analysed in the normalization lemma of this page.
