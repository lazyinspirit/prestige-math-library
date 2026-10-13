---
id: def-cm-traction-and-stress
kind: definition
title: "Traction fields and stress matrices representing them"
status: published
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

Let $\Omega\subseteq\mathbb R^3$ be a spatial set and let $I\subseteq\mathbb R$ be a time interval. No openness of $\Omega$ or regularity of a traction map is assumed by this definition; consumers impose any needed additional hypotheses. Let $S^2:=\{n\in\mathbb R^3:\|n\|_2=1\}$ be the unit sphere of [[def-euclidean-spheres-and-closed-balls]].

A **traction field** is a map

$$t:S^2\longrightarrow\mathbb R^3,$$

read with the following convention: $t(n)$ is the force per unit area exerted **by the material on the side towards which $n$ points upon the material on the other side**, at the point of a surface whose unit normal is $n$. The dependence of $t$ on position and time is suppressed in this notation; a traction **field on a set** $\Omega\times I$ is a map $t:\Omega\times I\times S^2\to\mathbb R^3$, and all statements below apply to each fixed $(y,s)$.

For $v\in\mathbb R^3$ use one-based component labels $v_i:=v(i-1)$, and for $\sigma\in M_3(\mathbb R)$ use $\sigma_{ij}:=\sigma(i-1,j-1)$, where $1\le i,j\le3$; $e_i$ is the vector with value $1$ at $i-1$ and $0$ at the other two indices. Define the matrix-vector action $\sigma v\in\mathbb R^3$ by $(\sigma v)(k):=\sum_{j<3}\sigma(k,j)v(j)$ for $0\le k<3$, equivalently $(\sigma v)_i=\sum_{j=1}^3\sigma_{ij}v_j$. It is the rectangular product of [[def-matrix-product-and-identity-matrix]] after identifying $v$ with the column matrix $C_v(j,0):=v(j)$ and the result with its sole column.

A matrix $\sigma\in M_3(\mathbb R)$ ([[def-matrix-space]]) **represents** the traction field $t$ when

$$t(n)=\sigma n\qquad\text{for every }n\in S^2,$$

the product being the matrix-vector action defined above. A matrix representing a traction field is called a **stress matrix** for it.

The **reversed normal convention** is the identity $t(-n)=-t(n)$; it is a property some traction fields have and is not part of the definition. A traction field is **normal** when $t(n)$ is a real multiple of $n$ for every $n$, and **purely tangential** when $\langle t(n),n\rangle_2=0$ for every $n$ ([[def-euclidean-inner-product]]).

## Remarks

- Continuity and dependence on the normal alone do not imply existence of a representing matrix: the continuous map $t(n)=(n_1^3,0,0)$ has $t(e_1)=e_1$ and $t(e_2)=t(e_3)=0$, forcing any representing matrix to be $\operatorname{diag}(1,0,0)$, but this matrix disagrees with $t$ at $n=(1/\sqrt2,1/\sqrt2,0)$. Conditional Cauchy tetrahedron arguments also require balance and limiting hypotheses, stated by their consuming items. If a representing matrix exists, it is unique because its columns are $t(e_1),t(e_2),t(e_3)$.

- Stress positivity is not asserted: for $\lambda>0$, the matrix $-\lambda I_3$ represents the normal-dependent map $t(n)=-\lambda n$ under the sign convention above. This is a mathematical example and imposes no constitutive or force-balance law.

- This definition does not identify a traction with an acceleration or assert any momentum balance; those are separate model data and results with their own hypotheses.

- The notation $t(n)$ suppresses the point of application. A traction field depending only on $(y,s)$ cannot distinguish two surfaces through the same point with the same normal, which is exactly the restriction Cauchy's hypothesis imposes; the failure of that hypothesis for general contact interactions is not a defect of this definition.
