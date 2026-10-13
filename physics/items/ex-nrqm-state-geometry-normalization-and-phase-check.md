---
id: ex-nrqm-state-geometry-normalization-and-phase-check
kind: example
domain: mathematics
title: "A two-dimensional normalization and phase computation"
status: published
origin: pipeline
dependency_level: 4
deps: [def-nrqm-state-geometry-state-vectors-and-rays, lem-nrqm-state-geometry-normalization-and-phase-classes, lem-nrqm-state-geometry-ray-to-rank-one-projection, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-inner-product-space, def-hilbert-space, cor-inner-product-induces-a-norm, def-complex-numbers-and-arithmetic, lem-complex-conjugation-and-modulus-laws, cor-finite-dimensional-normed-spaces-are-banach, def-countable-choice]
dependency_roles:
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-normalization-and-phase-classes: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.1 and 2.2.1, printed pages 4 and 8-9: normalized representatives of rays, the phase redundancy of |psi> and the qubit state |psi(phi,theta)> = (e^{-i phi/2} cos(theta/2), e^{i phi/2} sin(theta/2))"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.4 and 1.3.5, printed pages 12-13: normalization of a two-component state and the role of relative phase"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Let $H=\mathbb C^{2}$ carry the standard inner product
$$\langle z,w\rangle=z_{1}\overline{w_{1}}+z_{2}\overline{w_{2}}$$
([[def-inner-product-space]], [[def-hilbert-space]]; completeness follows from [[cor-finite-dimensional-normed-spaces-are-banach]]), and let $e_{1}=(1,0)$, $e_{2}=(0,1)$. Take
$$\psi=(1,i),\qquad z=1+i,\qquad \varphi:=z\psi,$$
and verify on this explicit data the normalization and phase statements of [[lem-nrqm-state-geometry-normalization-and-phase-classes]]: the norm of $\varphi$ is $|z|$ times the norm of $\psi$, the normalized representative of $\varphi$ is the phase multiple $(z/|z|)$ of the normalized representative of $\psi$, the rays of $\psi$ and $\varphi$ coincide, and the normalized rank-one operators of $\psi$, $\varphi$ and $i\psi$ are the same pure state [[def-nrqm-state-geometry-pure-mixed-states-and-purity]].

## Facts & Assumptions

**Given:** The Hilbert space $H=\mathbb C^{2}$ with the standard inner product and basis $(e_{1},e_{2})$; the vectors $\psi=(1,i)$, $\varphi=z\psi$ with $z=1+i$, and $i\psi$; the ray, normalization and phase notions of [[def-nrqm-state-geometry-state-vectors-and-rays]]; and the Axiom of Countable Choice ([[def-countable-choice]]), the choice hypothesis of the cited rank-one and state-space suppliers.

[L1] Standard computations in $\mathbb C$: $i^{2}=-1$, $(1+i)^{2}=2i$, $(1+i)(1+i)-1$ expansions below are termwise multiplications with $\overline{1+i}=1-i$, $|1+i|^{2}=2$, $|i|=1$ ([[def-complex-numbers-and-arithmetic]], [[lem-complex-conjugation-and-modulus-laws]]).

[L2] Norm and pairing: $\|v\|=\sqrt{\langle v,v\rangle}$ with $\langle z,w\rangle=z_{1}\overline{w_{1}}+z_{2}\overline{w_{2}}$, so $\|(a,b)\|^{2}=|a|^{2}+|b|^{2}$, and $\|\lambda v\|=|\lambda|\,\|v\|$ ([[cor-inner-product-induces-a-norm]], [[lem-complex-conjugation-and-modulus-laws]]).

[L3] Normalization and phases ([[lem-nrqm-state-geometry-normalization-and-phase-classes]]): $\nu(v)=\|v\|^{-1}v$, $[v]=\{w:w=tv,\ t\ne0\}$, and $\nu(tv)=(t/|t|)\nu(v)$ for $t\ne0$; $[v]=[w]$ if and only if $\nu(w)=\zeta\nu(v)$ for some $\zeta\in U(1)$.

[L4] Rank-one operators ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): $T_{v,v}x=\langle x,v\rangle v$, $T_{tv,tv}=|t|^{2}T_{v,v}$, $T_{v,v}/\|v\|^{2}=T_{\nu(v),\nu(v)}$ is a pure state, and for unit $u,w$ one has $T_{u,u}=T_{w,w}$ exactly when $w=\zeta u$ with $|\zeta|=1$.

## Verification

**Proof technique:** direct; compute the displayed vectors, their normalizations and the associated rank-one operators.

1.1 Compute $\varphi=z\psi=(1+i)(1,i)=((1+i)\cdot1,\ (1+i)\cdot i)=(1+i,\ i-1)$. By [L2] and [L1], $\|\psi\|^{2}=|1|^{2}+|i|^{2}=2$ and $\|\varphi\|^{2}=|1+i|^{2}+|i-1|^{2}=2+2=4$, so $\|\psi\|=\sqrt2$, $\|\varphi\|=2$, and indeed $\|\varphi\|=|z|\,\|\psi\|=\sqrt2\cdot\sqrt2=2$, verifying the homogeneity used in the normalization lemma. [given, L1, L2, algebra]

2.1 The normalizations are $\nu(\psi)=(1/\sqrt2,\ i/\sqrt2)$ and $\nu(\varphi)=((1+i)/2,\ (i-1)/2)$. With $\zeta:=(1+i)/\sqrt2$ one has $|\zeta|^{2}=|1+i|^{2}/2=1$, so $\zeta\in U(1)$, and $\zeta\,\nu(\psi)=\frac{1+i}{\sqrt2}\Bigl(\frac{1}{\sqrt2},\frac{i}{\sqrt2}\Bigr)=\Bigl(\frac{1+i}{2},\frac{i(1+i)}{2}\Bigr)=\Bigl(\frac{1+i}{2},\frac{i-1}{2}\Bigr)=\nu(\varphi),$ which is the identity $\nu(z\psi)=(z/|z|)\nu(\psi)$; by [L3] this also identifies $[\varphi]=[\psi]$, so $\psi$, $\varphi$ and $i\psi$ lie in one ray. [given, step 1.1, L1, L2, L3, algebra]

3.1 The rank-one operator of the unit vector $u=\nu(\psi)=(1/\sqrt2,\,i/\sqrt2)$ has matrix in the basis $(e_{1},e_{2})$ with columns $T_{u,u}e_{1}=\langle e_{1},u\rangle u=\overline{u_{1}}u=\frac{1}{\sqrt2}u=(\frac12,\frac{i}{2})$ and $T_{u,u}e_{2}=\langle e_{2},u\rangle u=\overline{u_{2}}u=\frac{-i}{\sqrt2}u=(-\frac{i}{2},\frac12)$, that is $T_{u,u}=\frac12\begin{pmatrix}1&-i\\ i&1\end{pmatrix}.$ This matrix is self-adjoint, has trace $1$, and satisfies $T_{u,u}^{2}=T_{u,u}$ because $\begin{pmatrix}1&-i\\ i&1\end{pmatrix}^{2}=2\begin{pmatrix}1&-i\\ i&1\end{pmatrix}$ by [L1]; hence $T_{u,u}$ is a pure state by [L4]. [given, step 2.1, L1, L4, algebra]

4.1 For the second representative, $T_{\varphi,\varphi}=|z|^{2}T_{\psi,\psi}=2T_{\psi,\psi}$ by [L4], and dividing by $\|\varphi\|^{2}=4$ from step 1.1 gives $T_{\varphi,\varphi}/\|\varphi\|^{2}=T_{\psi,\psi}/2=T_{\psi,\psi}/\|\psi\|^{2}=T_{u,u}$; likewise $T_{i\psi,i\psi}=|i|^{2}T_{\psi,\psi}=T_{\psi,\psi}$, so the phase multiple $i\psi$ determines the same pure state. This verifies on explicit data the representative and phase independence of the normalized rank-one operator. [given, step 1.1, step 3.1, L1, L2, L4, algebra] ∎

## Remarks

- The computation checks the definitions and the normalization lemma on a fixed two-dimensional example. It asserts nothing about any physical system, preparation or apparatus, and it records no measured value.
- The phase multiple $i\psi$ and the rescaled representative $\varphi$ give the same pure state, while the *relative* phase between the two components of a vector is not removed by any of these operations; the effect of relative phase belongs to the framework's probability law on the observable pages and is not examined here.
