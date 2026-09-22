---
id: ex-reduced-harmonic-oscillator-flow-on-projective-space
kind: example
title: The reduced harmonic oscillator flow on projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions, prop-invariant-hamiltonians-descend-to-reduced-hamiltonians, ex-complex-projective-space-as-a-circle-symplectic-reduction, ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map, thm-noether-conservation-law-for-hamiltonian-actions, def-countable-choice]
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

Assume $\mathrm{AC}_\omega$. Let $n\ge1$ and $c>0$. On $\mathbb C^n$ with $\omega_0=\sum_j dx_j\wedge dy_j$, the scalar circle action and its moment map
$\mu(z)=-\frac12|z|^2+c$, consider the harmonic oscillator Hamiltonian
$H(z)=\frac12|z|^2$. It is circle invariant, so by Noether's theorem its flow
preserves every level $\mu^{-1}(\lambda)$, and on the zero level
$S^{2n-1}_r$ it descends through the Hopf quotient
$\mathbb{CP}^{n-1}=S^{2n-1}_r/S^1$ to the reduced Hamiltonian
$h$ determined by $\pi^*h=\iota^*H$, where $\iota:S^{2n-1}_r\hookrightarrow\mathbb C^n$ and $\pi:S^{2n-1}_r\to\mathbb{CP}^{n-1}$, with $r=\sqrt{2c}$. Because $H=c-\mu$ on $\mathbb C^n$, the descended function is
constant on the reduced space, and the projected flow of $X_H$ is trivial; the
oscillator flow on the sphere moves along the circle orbits, which are exactly
the fibres of the quotient. More generally, by the same proposition every
circle-invariant Hamiltonian descends and its flow projects to the Hamiltonian
flow of the descended function.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an integer $n\ge1$, a real number $c>0$, the scalar circle action on $\mathbb C^n$, its moment map $\mu(z)=-\frac12|z|^2+c$, the zero level $S^{2n-1}_r$ with $r^2=2c$, and $H(z)=\frac12|z|^2$.

[F1] $\mu$ is an equivariant moment map for the scalar circle action and the level $\mu^{-1}(0)=S^{2n-1}_r$ is a sphere with free circle action whose reduction is $\mathbb{CP}^{n-1}$ with the reduced form characterised by the pullback identity. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]], [[ex-complex-projective-space-as-a-circle-symplectic-reduction]].

[F2] If $H$ is $G$-invariant then $\{\mu^\xi,H\}=0$ and $\mu$ is constant along the flow of $H$; hence the flow preserves each level. [[thm-noether-conservation-law-for-hamiltonian-actions]].

[F3] For an invariant Hamiltonian the restricted field $X_H$ is tangent to the level, projects to the Hamiltonian field of the descended function $h$ with $\pi^*h=\iota^*H$, and the restricted flow projects to the reduced flow. [[prop-invariant-hamiltonians-descend-to-reduced-hamiltonians]].



[A1] The countable-choice assumption is [[def-countable-choice]] and supplies the assumptions of [F2] and [F3].

[F4] The Hamiltonian field is uniquely determined by $\iota_{X_H}\omega_0=dH$ ([[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]).

## Verification

**Proof technique:** direct.

1.1 The oscillator Hamiltonian is circle invariant, $H(e^{i\theta}z)=H(z)$, and satisfies $H=c-\mu$ identically on $\mathbb C^n$ because $\mu=-\frac12|z|^2+c$. [F1, given]

2.1 By [F2] the flow of $X_H$ preserves every level of $\mu$; in particular it preserves the sphere $S^{2n-1}_r$. [step 1.1, F2]

3.1 The zero level is regular and the circle action there is free by [F1]. It is proper because the action map has compact domain $S^1\times S^{2n-1}_r$ and Hausdorff target; inverse images of compact sets are closed in a compact space. On that sphere $H=c-\mu$ restricts to $c$, so [F3] gives the unique function $h$ with $\pi^*h=\iota^*H$, namely $h=c$. Its differential is zero and nondegeneracy in [F4] gives $X_h=0$. For $n=1$ the quotient is a point with this same constant function. [step 2.1, F1, F3, F4]

4.1 By [F3] the projected field $d\pi(X_H)$ equals $X_h=0$, so the reduced flow is trivial. Directly, $dH=\sum_j(x_jdx_j+y_jdy_j)$ and [F4] gives $X_H=\sum_j(y_j\partial_{x_j}-x_j\partial_{y_j})$. Thus $\dot z=-iz$ and the flow is exactly $z(t)=e^{-it}z(0)$ for all real $t$, with no time rescaling. On the positive-radius sphere its trajectories are exactly the Hopf fibres. For an arbitrary smooth circle-invariant Hamiltonian, [F3] gives descent and projection on each integral curve interval; its reduced field need not vanish. [A1, step 3.1, F1, F3, F4] ∎
