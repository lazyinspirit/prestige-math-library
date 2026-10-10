---
id: def-em-potential-gauge-and-field-conventions
kind: definition
title: "Scalar-vector potential pairs, gauge transformation, Lorenz divergence and the wave expression"
status: draft
origin: pipeline
domain: mathematics
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-wave-equation-cauchy-data-and-wave-speed, def-directional-and-partial-derivatives]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing)"
      url: "https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf"
      locator: "section 6.1, printed pp. 134-135: the gauge potential, the gauge transformation and the Lorenz condition; section 6.4.3, printed p. 161: the field conventions E = -grad phi - partial A/partial t and B = curl A"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "section 7.1, printed pp. 167-170, equations (7.1) and (7.11)-(7.12): the wave-operator normalization used on this page"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $c>0$ and let $\Omega\subseteq\mathbb R^3\times\mathbb R$ be open. A **scalar-vector potential pair** of class $C^k$ on $\Omega$, for an integer $k\ge1$, is a pair $(\varphi,A)$ with $\varphi:\Omega\to\mathbb R$ and $A:\Omega\to\mathbb R^3$ each of class $C^k$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]], the components of $A$ being of class $C^k$ separately; the pair is **smooth** when both members are $C^\infty$, and **continuous**, or of class $C^0$, when both members are continuous. A pair defined on a set of the form $\mathbb R^3\times[t_0,T]$ with $t_0<T$ is of class $C^k$, $k\ge1$, **in the extension sense** when there are an open interval $J\supset[t_0,T]$ and a potential pair of class $C^k$ on the open set $\mathbb R^3\times J$ whose restriction to $\mathbb R^3\times[t_0,T]$ the given pair is; the same wording is used for $C^\infty$ and for the single functions $\varphi$ and $\chi$ below.

All operators $\nabla$, $\operatorname{div}$, $\operatorname{curl}$ and $\Delta$ below act on the three spatial coordinates with $t$ fixed: for $\Omega_t:=\{x\in\mathbb R^3:(x,t)\in\Omega\}$, apply the cited three-dimensional operators to the restrictions $x\mapsto\varphi(x,t)$, $x\mapsto A(x,t)$ or $x\mapsto u(x,t)$ on the open set $\Omega_t$. In particular $\nabla\varphi=(\partial_{x_1}\varphi,\partial_{x_2}\varphi,\partial_{x_3}\varphi)$ and $\Delta u=\sum_{i=1}^3\partial_{x_i}^2u$; $\partial_t$ differentiates only the time coordinate.

For a potential pair of class $C^k$ with $k\ge1$ its **electric field** and **magnetic field** are

$$E(\varphi,A):=-\nabla\varphi-\partial_tA,\qquad B(\varphi,A):=\operatorname{curl}A,$$

where $\nabla$ is the gradient of [[def-jacobian-matrix-and-gradient]], $\partial_t$ is the partial derivative of [[def-directional-and-partial-derivatives]], and $\operatorname{div}$ and $\operatorname{curl}$ are those of [[def-divergence-and-curl-of-a-c1-vector-field]]. Both $E(\varphi,A)$ and $B(\varphi,A)$ are maps $\Omega\to\mathbb R^3$ of class $C^{k-1}$.

For $k\ge1$ the **Lorenz divergence** of the pair is the function

$$G(\varphi,A):=\operatorname{div}A+c^{-2}\partial_t\varphi,$$

also of class $C^{k-1}$, and the pair is **in Lorenz gauge** on $\Omega$ when $G(\varphi,A)=0$ throughout $\Omega$.

For $k\ge2$ and a function $\chi:\Omega\to\mathbb R$ of class $C^k$, a **gauge function**, the **gauge transform** of the pair is

$$T_{\chi}(\varphi,A):=(\varphi-\partial_t\chi,\ A+\nabla\chi),$$

again a potential pair, of class $C^{k-1}$.

Finally, for a function $u:\Omega\to\mathbb R$ of class $C^2$ put

$$Wu:=c^{-2}\partial_t^2u-\Delta u,$$

with $\Delta$ the Laplacian of [[def-laplacian-of-a-c2-function]] and $\partial_t^2$ the second partial derivative in $t$ ([[def-directional-and-partial-derivatives]]); this is the normalization $W=c^{-2}\Box_c$ of the wave operator $\Box_c=\partial_t^2-c^2\Delta$ of speed $c$ of [[def-wave-equation-cauchy-data-and-wave-speed]]. For a map $U:\Omega\to\mathbb R^m$ of class $C^2$ with components $U_1,\dots,U_m$, one writes $WU:=(WU_1,\dots,WU_m)$ componentwise.

Nothing in this definition asserts that a gauge function with prescribed auxiliary data exists, that every potential pair is gauge equivalent to a pair in Lorenz gauge, or that $Wu=g$ is solvable: those are conclusions with their own hypotheses. The signs $-\nabla\varphi-\partial_tA$ and $A+\nabla\chi$, the factor $c^{-2}$ in $G$, and the spelling *Lorenz* are part of the convention.

## Remarks

- **Regularity is consumed exactly once.** If $\varphi$ and $A$ are $C^k$ with $k\ge1$, then $\nabla\varphi$ and the three partial derivatives $\partial_tA_i$ are $C^{k-1}$ by the cited definitions of gradient and partial derivative, so the fields $E$ and $B$ and the divergence $G$ are $C^{k-1}$; for $k=1$ this uses the convention fixed above that class $C^0$ means continuity. Likewise a $C^k$ gauge function with $k\ge2$ has $C^{k-1}$ first partial derivatives, so $T_\chi(\varphi,A)$ is of class $C^{k-1}$.

- **Why the pair is defined on an arbitrary open set.** The definition is stated for any open $\Omega\subseteq\mathbb R^3\times\mathbb R$ so that the full slab $\mathbb R^3\times(t_0,T)$ and the complement of a worldline are both instances; the extension sense above handles closed time slabs.

- **The name.** *Lorenz* here refers to Ludvig Lorenz, not to Hendrik Lorentz; in four-coordinate notation, set $x^0=ct$, $x^i=x_i$ for $i=1,2,3$, $A^0=\varphi/c$, $A^i=A_i$ and $\partial_\mu=\partial/\partial x^\mu$. Then $\sum_{\mu=0}^3\partial_\mu A^\mu=c^{-2}\partial_t\varphi+\operatorname{div}A=G(\varphi,A)$, so its vanishing is precisely the defined Lorenz condition. The sign and the factor $c^{-2}$ belong to the convention and are not consequences of the definition.
