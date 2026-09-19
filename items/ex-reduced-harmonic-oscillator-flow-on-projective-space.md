---
id: ex-reduced-harmonic-oscillator-flow-on-projective-space
kind: example
title: The reduced harmonic oscillator flow on projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-invariant-hamiltonians-descend-to-reduced-hamiltonians, ex-complex-projective-space-as-a-circle-symplectic-reduction, ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map, thm-noether-conservation-law-for-hamiltonian-actions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.2, Reduced Hamiltonians, printed pages 104--105
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.2, printed pages 147--148
proof_strategy: direct
---

## Example

Let $n\ge1$ and $c>0$. On $\mathbb C^n$ with the scalar circle action and its moment map
$\mu(z)=-\frac12|z|^2+c$, consider the harmonic oscillator Hamiltonian
$H(z)=\frac12|z|^2$. It is circle invariant, so by Noether's theorem its flow
preserves every level $\mu^{-1}(\lambda)$, and on the zero level
$S^{2n-1}_r$ it descends through the Hopf quotient
$\mathbb{CP}^{n-1}=S^{2n-1}_r/S^1$ to the reduced Hamiltonian
$h=\iota^*H$. Because $H=c-\mu$ on $\mathbb C^n$, the descended function is
constant on the reduced space, and the projected flow of $X_H$ is trivial; the
oscillator flow on the sphere moves along the circle orbits, which are exactly
the fibres of the quotient. More generally, by the same proposition every
circle-invariant Hamiltonian descends and its flow projects to the Hamiltonian
flow of the descended function.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an integer $n\ge1$, a real number $c>0$, the scalar circle action on $\mathbb C^n$, its moment map $\mu(z)=-\frac12|z|^2+c$, the zero level $S^{2n-1}_r$ with $r^2=2c$, and $H(z)=\frac12|z|^2$.

[F1] $\mu$ is an equivariant moment map for the scalar circle action and the level $\mu^{-1}(0)=S^{2n-1}_r$ is a free orbit sphere whose reduction is $\mathbb{CP}^{n-1}$ with the reduced form characterised by the pullback identity. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]], [[ex-complex-projective-space-as-a-circle-symplectic-reduction]].

[F2] If $H$ is $G$-invariant then $\{\mu^\xi,H\}=0$ and $\mu$ is constant along the flow of $H$; hence the flow preserves each level. [[thm-noether-conservation-law-for-hamiltonian-actions]].

[F3] For an invariant Hamiltonian the restricted field $X_H$ is tangent to the level, projects to the Hamiltonian field of the descended function $h$ with $\pi^*h=\iota^*H$, and the restricted flow projects to the reduced flow. [[prop-invariant-hamiltonians-descend-to-reduced-hamiltonians]].



## Verification

**Proof technique:** direct.

1.1 The oscillator Hamiltonian is circle invariant, $H(e^{i\theta}z)=H(z)$, and satisfies $H=c-\mu$ identically on $\mathbb C^n$ because $\mu=-\frac12|z|^2+c$. [F1, given]

2.1 By [F2] the flow of $X_H$ preserves every level of $\mu$; in particular it preserves the sphere $S^{2n-1}_r$. [step 1.1, F2]

3.1 On that sphere the function $H=c-\mu$ restricts to the constant $c$, so its descended function $h$ on $\mathbb{CP}^{n-1}$ is the constant $c$ and its Hamiltonian vector field $X_h$ vanishes. [step 2.1, F1, F3]

4.1 By [F3] the projected field $d\pi(X_H)$ equals $X_h=0$, so the reduced flow is trivial. This is consistent with the direct picture: the Hamiltonian flow of $H$ on $\mathbb C^n$ is the circle action $t\mapsto e^{-it}z$ (up to time reparametrization), whose orbits on the sphere are the fibres of the Hopf quotient. For a general circle-invariant Hamiltonian the same proposition descends $H$ and projects its flow without this vanishing. [step 3.1, F1, F3] ∎
