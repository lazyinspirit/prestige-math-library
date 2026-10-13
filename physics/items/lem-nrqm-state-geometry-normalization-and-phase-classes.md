---
id: lem-nrqm-state-geometry-normalization-and-phase-classes
kind: lemma
domain: mathematics
title: "Normalization, ray equivalence and the phase orbits of the unit sphere"
status: published
origin: pipeline
dependency_level: 1
deps: [def-nrqm-state-geometry-state-vectors-and-rays, cor-inner-product-induces-a-norm, def-real-and-complex-inner-product-space, lem-complex-conjugation-and-modulus-laws]
dependency_roles:
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Section 2.1, printed page 4: a ray is an equivalence class of vectors differing by a nonzero complex scalar, with a unit-norm representative, and |psi> and e^{i alpha}|psi> describe the same state"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.4, printed page 12: a state is normalized by dividing by its norm, and overall phase factors have no physical effect"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Let $H\ne\{0\}$ be a complex Hilbert space and use the notation of [[def-nrqm-state-geometry-state-vectors-and-rays]]: the unit sphere $S(H)$, the nonzero vectors $H^{\times}$, the ray $[\psi]$, the ray space $R(H)$, the normalization map $\nu$, the phase group $U(1)$ and the phase action. Then:

(a) For every $\psi\in H^{\times}$ one has $\nu(\psi)\in[\psi]\cap S(H)$ and $\nu(\nu(\psi))=\nu(\psi)$; and for every $z\in\mathbb C$ with $z\ne0$,
$$\nu(z\psi)=\frac{z}{|z|}\,\nu(\psi).$$
Moreover $\nu$ maps $H^{\times}$ onto $S(H)$.

(b) For $\psi,\varphi\in H^{\times}$: $[\psi]=[\varphi]$ if and only if $\nu(\varphi)=\zeta\nu(\psi)$ for some phase factor $\zeta\in U(1)$; the phase factor is then unique.

(c) For every $\psi\in S(H)$ the intersection of the ray of $\psi$ with the unit sphere is exactly the phase orbit of $\psi$,
$$[\psi]\cap S(H)=\{\zeta\psi:\zeta\in U(1)\}=U(1)\psi .$$
Consequently the fibres of the map $S(H)\to R(H)$, $\psi\mapsto[\psi]$, are exactly the phase orbits, and this map induces a bijection from the set of phase orbits on $S(H)$ onto $R(H)$.

(d) For $\psi,\varphi\in S(H)$: $[\psi]=[\varphi]$ if and only if $\varphi=\zeta\psi$ for a unique $\zeta\in U(1)$; in that case $\zeta=\langle\varphi,\psi\rangle$ and $|\langle\varphi,\psi\rangle|=1$.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; nonzero vectors $\psi,\varphi\in H^{\times}$; a nonzero scalar $z\in\mathbb C$; unit vectors $u\in S(H)$ where stated.

[F1] By [[def-nrqm-state-geometry-state-vectors-and-rays]]: $S(H)=\{\psi:\|\psi\|=1\}$, $H^{\times}=H\setminus\{0\}$, $[\psi]=\{z\psi:z\ne0\}$, $R(H)=\{[\psi]:\psi\ne0\}$, $\nu(\psi)=\|\psi\|^{-1}\psi$, $U(1)=\{\zeta:|\zeta|=1\}$, and the words ray-equivalent and phase-equivalent have the meanings fixed there.

[F2] The inner-product norm satisfies $\|\psi\|\ge0$ with $\|\psi\|=0$ exactly for $\psi=0$, and $\|z\psi\|=|z|\,\|\psi\|$ for every scalar $z$ and vector $\psi$ ([[cor-inner-product-induces-a-norm]]); the inner product is linear in the first argument, conjugate-linear in the second and conjugate symmetric ([[def-real-and-complex-inner-product-space]]).

[F3] For complex numbers, $|z|=0$ exactly for $z=0$, and $|zw|=|z|\,|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F4] If $\zeta\in U(1)$ and $\psi\in S(H)$, then $\|\zeta\psi\|=|\zeta|\,\|\psi\|=1$, so $\zeta\psi\in S(H)$; this is the phase action of [F1] and uses [F2].

## Proof

1.1 [(a) normalization is well defined and lies in the ray] For $\psi\ne0$ the vector $\nu(\psi)=\|\psi\|^{-1}\psi$ is a nonzero complex multiple of $\psi$, hence lies in $[\psi]$; its norm is $\|\nu(\psi)\|=|\|\psi\|^{-1}|\,\|\psi\|=\|\psi\|^{-1}\|\psi\|=1$ by [F2] and [F3], so $\nu(\psi)\in S(H)$; and $\nu(\nu(\psi))=\nu(\psi)$ because $\nu(\psi)$ is a unit vector. For $z\ne0$ the norm is $\|z\psi\|=|z|\,\|\psi\|$ by [F2], hence $\nu(z\psi)=|z|^{-1}\|\psi\|^{-1}z\psi=(z/|z|)\|\psi\|^{-1}\psi=(z/|z|)\nu(\psi)$, using $z/|z|=|z|^{-1}z$ for the unit complex number $z/|z|$. Finally $\nu$ is surjective because every $u\in S(H)$ satisfies $\nu(u)=\|u\|^{-1}u=u$. [given, F1, F2, F3, algebra]

2.1 [(c) the unit representatives of a ray form one phase orbit] Let $u\in S(H)$. If $v\in[u]\cap S(H)$ then $v=zu$ for some $z\ne0$, and $1=\|v\|=|z|\,\|u\|=|z|$ by [F2] and [F3]; hence $z\in U(1)$ and $v=zu\in U(1)u$. Conversely if $\zeta\in U(1)$ then $\zeta u$ lies in $[u]$ by definition and in $S(H)$ by [F4]. Thus $[u]\cap S(H)=U(1)u$. [given, step 1.1, F1, F2, F3, F4, algebra]

2.2 [(b) ray equivalence is phase equivalence of normalizations] If $[\psi]=[\varphi]$, then by definition $\varphi=z\psi$ with $z\ne0$, so by step 1.1 $\nu(\varphi)=\nu(z\psi)=(z/|z|)\nu(\psi)$ with $z/|z|\in U(1)$; uniqueness of the phase factor holds because $\nu(\psi)\ne0$. Conversely, if $\nu(\varphi)=\zeta\nu(\psi)$ for some $\zeta\in U(1)$, then $\varphi=\|\varphi\|\nu(\varphi)=\|\varphi\|\zeta\|\psi\|^{-1}\psi$ is a nonzero complex multiple of $\psi$, so $[\varphi]=[\psi]$. [given, step 1.1, F1, F2, F3, algebra]

3.1 [(c) the induced map on phase orbits is a bijection] By step 2.1 the fibre of $\psi\mapsto[\psi]$ over a ray $R$ is $\{u\in S(H):[u]=R\}=R\cap S(H)$, which is a full phase orbit; and every phase orbit $U(1)u$ is such a fibre because $U(1)u\subseteq[u]$. The map therefore descends to a well-defined injective map from the set of phase orbits onto $R(H)$, and it is surjective because every ray contains the unit vector $\nu(\psi)$ for any of its representatives $\psi$ by step 1.1. [given, step 1.1, step 2.1, F1, algebra]

4.1 [(d) phase uniqueness for unit representatives] Let $\psi,\varphi\in S(H)$ with $[\psi]=[\varphi]$. Then $\varphi=z\psi$ for some $z\ne0$, so $1=\|\varphi\|=|z|\,\|\psi\|=|z|$ by [F2] and [F3]; writing $\zeta:=z\in U(1)$ gives $\varphi=\zeta\psi$, and if $\zeta'\in U(1)$ also satisfies $\varphi=\zeta'\psi$, then $(\zeta-\zeta')\psi=0$ with $\psi\ne0$, which forces $\zeta=\zeta'$ by [F2] and [F3]. Moreover $\langle\varphi,\psi\rangle=\langle\zeta\psi,\psi\rangle=\zeta\langle\psi,\psi\rangle=\zeta\|\psi\|^{2}=\zeta$ by linearity in the first argument, so $|\langle\varphi,\psi\rangle|=1$. The converse implication is the definition of ray equivalence. [given, step 2.2, F1, F2, F3, algebra] ∎
