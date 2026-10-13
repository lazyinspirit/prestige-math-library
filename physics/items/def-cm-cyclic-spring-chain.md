---
id: def-cm-cyclic-spring-chain
kind: definition
title: "The cyclic spring chain, its discrete energy, and the finite-regularity periodic comparison class"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-space, def-euclidean-inner-product, def-metric-ball]
dependency_roles:
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 6.2–6.3 (N coupled oscillators; the uniform 1D particle chain)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (an infinite chain of masses and springs: Lagrangian (6.1), equations of motion (6.3) and the continuum limit)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"

  precheck: pass
---

## Definition

Let $N\ge2$ be an integer, let $a>0$ and $c>0$ be real parameters, and let $L:=Na$. Indices are read modulo $N$: $z_{j+N}:=z_j$.

**(a) The chain.** A **state of the chain** is a pair $(q,p)\in\mathbb R^N\times\mathbb R^N$, where $q=(q_1,\dots,q_N)$ are the positions and $p=(q_1',\dots,q_N')$ the velocities of the $N$ nodes. The **cyclic spring-chain system** is the first-order system

$$q_j'=p_j,\qquad p_j'=\frac{c^2}{a^2}\bigl(q_{j+1}-2q_j+q_{j-1}\bigr)\qquad(j\in\mathbb Z/N),$$

equivalently the second-order system $q_j''=\frac{c^2}{a^2}(q_{j+1}-2q_j+q_{j-1})$ for a $C^2$ curve $q:I\to\mathbb R^N$. Its **discrete energy** is

$$E(q,p):=\frac12\sum_{j=1}^N\Bigl(p_j^2+\frac{c^2}{a^2}\bigl(q_{j+1}-q_j\bigr)^2\Bigr).$$

**(b) Discrete norms and differences.** For $z,w\in\mathbb R^N$ define the **scaled inner product and norm**

$$\langle z,w\rangle_a:=a\sum_{j=1}^N z_jw_j,\qquad \|z\|_a:=\langle z,z\rangle_a^{1/2},$$

and for the discrete difference $(D_+z)_j:=(z_{j+1}-z_j)/a$. The **discrete Laplacian** is $(\Delta_az)_j:=(z_{j+1}-2z_j+z_{j-1})/a^2$.

**(c) The comparison class.** Let $I\subseteq\mathbb R$ be a nonempty open interval and let $u:I\times\mathbb R\to\mathbb R$ be a function that is $C^2$ in the first variable and $C^4$ in the second, is $L$-periodic in $x$ ($u(t,x+L)=u(t,x)$ for all $(t,x)$), and satisfies

$$u_{tt}(t,x)=c^2u_{xx}(t,x)\qquad\bigl((t,x)\in I\times\mathbb R\bigr).$$

For a compact subinterval $[0,T]\subseteq I$ put $M_T:=\sup\{|\partial_x^4u(t,x)|:(t,x)\in[0,T]\times\mathbb R\}$ (finite when continuous derivatives are bounded on the compact time interval, as assumed in the items that use it), and for $a=L/N$ define the **sampled initial data**

$$q_j(0):=u(0,ja),\qquad q_j'(0):=u_t(0,ja)\qquad(j=1,\dots,N).$$

## Remarks

- This is a purely mathematical definition. The mechanical reading — $N$ equal masses $m$, nearest-neighbour springs of stiffness $k$ with $c^2=ka^2/m$, a closed chain — is a model interpretation attached by a consuming physical item; the mathematical results of this collection use only the ODE system and the comparison class.

- The cyclic indexing (index $N+1$ is index $1$) makes the chain closed and makes summation by parts in the discrete variable exact; it is part of the model, not a boundary condition. Other boundary conditions are separate models and are not covered by this definition.

- The comparison class requires a globally defined periodic solution with the regularity in clause (c); the items using it establish existence of the chain solutions and compare the two evolutions on a compact time interval. No uniqueness or continuation statement for $u$ is part of this definition.
