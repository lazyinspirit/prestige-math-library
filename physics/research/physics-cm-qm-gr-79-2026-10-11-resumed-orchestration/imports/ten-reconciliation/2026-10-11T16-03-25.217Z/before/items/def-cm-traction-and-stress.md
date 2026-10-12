---
id: def-cm-traction-and-stress
kind: definition
title: "Traction fields and stress matrices representing them"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-euclidean-spheres-and-closed-balls, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-matrix-space]
dependency_roles:
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-matrix-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.3 (force, Cauchy's hypothesis, Remarks (b)-(e)), printed pages 105-110"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "MIT OpenCourseWare 12.005, Applications of Continuum Mechanics, Lecture 3: tensors, stress, Cauchy tetrahedron and Cauchy's formula"
      url: "https://ocw.mit.edu/courses/12-005-applications-of-continuum-mechanics-to-earth-atmospheric-and-planetary-sciences-spring-2006/5005ac6aec16d031bffbd361c792ca70_lec3.pdf"
verification:
  precheck: pass
---

## Definition

Let $S^2:=\{n\in\mathbb R^3:\|n\|_2=1\}$ be the unit sphere of [[def-euclidean-spheres-and-closed-balls]].

A **traction field** is a map

$$t:S^2\longrightarrow\mathbb R^3,$$

read with the following convention: $t(n)$ is the force per unit area exerted **by the material on the side towards which $n$ points upon the material on the other side**, at the point of a surface whose unit normal is $n$. The dependence of $t$ on position and time is suppressed in this notation; a traction **field on a set** $\Omega\times I$ is a map $t:\Omega\times I\times S^2\to\mathbb R^3$, and all statements below apply to each fixed $(y,s)$.

A matrix $\sigma\in M_3(\mathbb R)$ ([[def-matrix-space]]) **represents** the traction field $t$ when

$$t(n)=\sigma n\qquad\text{for every }n\in S^2,$$

the product being matrix-vector multiplication ([[def-matrix-product-and-identity-matrix]]). A matrix representing a traction field is called a **stress matrix** for it.

The **reversed normal convention** is the identity $t(-n)=-t(n)$; it is a property some traction fields have and is not part of the definition. A traction field is **normal** when $t(n)$ is a real multiple of $n$ for every $n$, and **purely tangential** when $\langle t(n),n\rangle_2=0$ for every $n$ ([[def-euclidean-inner-product]]).

## Remarks

- Existence and uniqueness of a representing matrix are **not** asserted by this definition. Under the additional hypothesis that $t$ satisfies Cauchy's hypothesis (dependence on the surface only through its unit normal) and is continuous in $n$, the existence of a unique representing matrix is proved by the Cauchy tetrahedron argument, which is developed for this collection in the conditional continuum-transport items; the continuity hypothesis is a genuine restriction, since Cauchy's hypothesis itself fails for contact forces depending on surface curvature.

- Stress positivity is not asserted: $-\lambda I_3$ with $\lambda>0$ represents a purely normal traction field with $t(n)=-\lambda n$, i.e. a compressive traction with positive scalar pressure $\lambda$; the sign convention is the one recorded, so positive $\lambda$ gives compression in the direction $-n$.

- The force per unit volume $\rho b$ of a body-force density $b$ (force per unit mass) is not an acceleration: $b$ and the acceleration field are different objects related only through a momentum balance that states its own hypotheses. The distinction is recorded here so that later items cannot silently identify them.

- The notation $t(n)$ suppresses the point of application. A traction field depending only on $(y,s)$ cannot distinguish two surfaces through the same point with the same normal, which is exactly the restriction Cauchy's hypothesis imposes; the failure of that hypothesis for general contact interactions is not a defect of this definition.
